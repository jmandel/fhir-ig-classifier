// File: input/pagecontent/background.md

This section provides an overview of the Implementation Guide (IG).

### IG Purpose

Currently UDS data is submitted using a tabular data format via participating health centers. The submission mechanisms include portals, sftp and other mechanisms. The data submitted is aggregated at the sites and is submitted to HRSA's UDS systems and does not have patient level data currently. While this data satisfies the basic reporting, HRSA would like to improve the efficiency, quality and timeliness of the data along with the granularity of the data. The granularity of the data should include patient level de-identified data to support the analysis to be performed by BPHC. As part of the UDS+ project, HRSA would like to standardize the data submission protocols, formats and increase the granularity of the data being submitted to support the downstream analysis to be performed.

Read the <a href="usecases.html">Use Cases</a> section to get an idea of the various systems, actors and the data flow requirements. 

### Guiding Principles for the IG

The following are the guiding principles for the UDS+ IG.

* Reduce provider reporting burden wherever possible by automating the reporting capabilities. 
* Align with existing standards (e.g., Health Level 7 (HL7) Fast Healthcare Interoperability Resources (FHIR), United States Core Data for Interoperability (USCDI) and regulations (e.g., ONC 2015 Edition, 2015 Edition Cures Update, Trusted Exchange Framework and Common Agreement (TEFCA), etc.) while improving the timeliness and completeness of data received by HRSA.
 

### IG In-Scope Requirements

The following requirements are in-scope for the UDS+ IG based on the use cases.

* Define the API mechanisms, Inputs, and Outputs used to access data from the EHRs/IT systems (Data Sources) and exchange data.
* Define the mechanisms used to start the data submission workflows. 
* Define the provisioning mechanisms used to automate the triggering and submission of data. 
* Define trust services (de-identification) needed to ensure de-identified data is sent from the health centers to HRSA.

### IG Out-of-Scope 

The following aspects are out-of-scope for the UDS+ IG based on the use cases.

* Changes to the Data Source (e.g., EHR) data capture screens and/or changes to clinical workflows. Providers may use their choice of apps/screens/systems to enter the data independent of the IG.
* Policies and processes followed by health centers to allow data sharing, collecting of consent, or compliance with regulatory requirements.

### Underlying Specifications

This guide is based on the [HL7 FHIR R4]({{site.data.fhir.path}}index.html) standard, as well as [US Core IG]({{site.data.fhir.uscoreR4}}/index.html), [Bulk Data Access IG]({{site.data.fhir.bullkig}}/index.html), [SMART App Launch IG for Backend Services Authorization]({{site.data.fhir.smartapplaunch}}/backend-services.html).

Implementers of the UDS+ IG must understand some basic information about the underlying specifications listed above.

{:.stu-note}
The following is new content for 1.1.0

<div class="bg-success" markdown="1">

#### Relationship between UDS+ IG and US Core FHIR IG  

The UDS+ IG is built on other FHIR specifications, including the [US Core IG]({{site.data.fhir.uscoreR4}}/index.html). The UDS+ IG will use US Core IG profiles, codesystems and valuesets as required for the reporting use cases. The version of the US Core IG referenced is the one that supports United States Core Data for Interoperability (USCDIv3) as required in the Office of the National Coordinator (ONC) 21<sup>st</sup> Century Cures Act certification criteria and the SVAP versions adopted.
There are many instances where the UDS+ IG does not use US Core profile such as Patient, Condition, Encounter because of the UDS+ data elements and de-identification requirements which vary from US Core. However to the extent possible all UDS+ profiles are created to be compatible with US Core and UDS+ will continue to better align with USCDI and US core in the future.

</div>   

#### Relationship between UDS+ IG and FHIR Bulk Data Access IG
 
UDS+ will leverage the [Bulk Data Access IG]({{site.data.fhir.bulkig}}/index.html) to access data about multiple patients. The Bulk Data Access IG is used to retrieve population level information from EHRs, subject to applying appropriate authorities and policies. The version of the Bulk Data Access IG referenced is the one that supports the USCDIv3 required in the ONC 21<sup>st</sup> Century Cures Act certification criteria and the SVAP versions adopted.


#### Relationship between UDS+ IG and SMART App Launch IG

The UDS+ IG uses [SMART App Launch IG for Backend Services Authorization]({{site.data.fhir.smartapplaunch}}/backend-services.html) to secure all system-to-system interactions among the various actors in the IG. The version of the SMART App Launch IG referenced is the one that supports USCDIv3 as required in the ONC 21<sup>st</sup> Century Cures Act certification criteria and the SVAP versions adopted.

#### Relationship between UDS+ IG and QI Core, DEQM IG

The UDS+ IG aligns with [QI Core IG]({{site.data.fhir.qicore}}/index.html) and [DEQM]({{site.data.fhir.deqm}}/index.html to create de-identified profiles that are relevant for UDS+ quality measure reporting. HRSA receives data related to multiple quality measures and aligning with QI Core and DEQM profiles reduces implementer burden. 

#### Relationship between UDS+ IG and Other UDS Reporting Guidance

The UDS+ IG implementers should leverage **[UDS Reporting Manuals and Other Guidance](https://bphc.hrsa.gov/data-reporting/uds-training-and-technical-assistance)** for more information on the data to be reported for UDS+ and detailed guidance on specific tables that need to be reported.



---

// File: input/pagecontent/changes.md

### Change History

The following is a list of all the changes based on versions.

#### Changes made from 1.0.0 to 1.1.0

1. Added support for Partial Submissions supporting Health Centers with multiple EHRs and/or multiple reporting sites.
2. Added support for incremental submissions to support efficient data corrections during resubmissions.
3. Added support for re-submissions with partial and incremental submission concepts
4. Added uds-plus-observation to support Assessments, Vitals, Physical Exams and Social History observations. - #24
5. Added guidance for de-identification of patients > 89 years.
6. Added Live Birth weight LOINC code to UDS Data Elements Mapping Table. - #32
7. Updated Breast Cancer Screening Mappings to remove Result entries. - #33
8. Updated Medication, Active mappings to use either MedicationStatement or MedicationRequest to align with US Core. - #26
9. Added clarifications on UDS+ and US Core relationships. - #1 
10. Added guidance on Encounter reason and service Provider organization. - #2
11. Updated UDS+ Encounter profile to allow multiple participants to be compatible with US Core. - #4
12. Updated UDS+ Data Elements Table Header to point to the right US Core version of 6.1.0 - #5
13. Removed Bodysite data element from ServiceRequest as MUST SUPPORT - #30
14. Added guidance on removing submitted files. - #23 
15. Added additional guidance on quality reporting. - #15
16. Updated Age related constraints in the profiles to follow de-identification requirements.
17. Updated all profiles to add constraints related to dates, Periods and Timing to follow de-identification requirements.
18. Added extension to support de-identified instant data type, which is used in Observations to capture instant with a precision upto YEAR only.




#### Changes made from 1.0.0 to 1.0.1

1. Removed mentions of alternate submission mechanisms from Background.
2. Clarified MUST SUPPORT definition in the specification to deal with data elements that may not be present in the mapping tables but are present in the UDS+ profiles.
3. Updated Coverage to make capitatedMemberMonths and feeForServiceMemberMonths as optional.
4. Added clarifications on Income Observation to represent > 200% using valueQuantity instead of valueRange.
5. Change Income Observation to allow valueQuantity along with valueRange.
6. Added explicit requirements to Data Submitter to not submit data elements not specified in the UDS+ profiles.
7. Added explicit requirements to Data Receiever to reject submission when a Data Submitter submits data elements not specified in the UDS+ profiles.
8. Removed aggregate reporting option from reporting guidance.
9. Added clarification to Data Submitter quality reporting to include only patients who meet the criteria for the Initial Patient Population. 
10. Added partial submission requirements as part of the Data Submitter requirements.
11. Added partial submission requirement validation for Data Receiver.
12. Added information for on-boarding process as part of the reporting guidance.
13. Added submissionTime to Manifest file. 
14. Updated data mapping tables to remove blank rows and mappings not necessary.
15. Added examples for Requests and Responses as part of the Implementation Guidance.
16. Updated capability statements to use UDS+ profiles instead of US Core profiles.

#### Changes made from 0.4.1 to 1.0.0

1. Added cardinality constraints for Healthcare information in the Manifest file.
2. Enhanced Race, Ethnicity, Birth Sex, Sexual Orientation, Gender Identity constraints for inferno based testing and updated examples. 
3. Added prenatalReferralOnly Indicator to Manifest file.
4. Added guidance in mapping tables for Prenatal data and Live Birth Weight data.
5. Removed dependencies on QI core and enabled QI core extensions within UDS+ IG on Procedure.
6. Added guidance for school based service location indication on Encounter page.
7. Removed RelatedPerson demographics information as it is not needed for De-Identified Coverage.
8. Fixed errors related to the Build to enable AdverseEvent, AllergyIntolerance and Observation profiles for Diagnostic Studies. 


#### Changes made from 0.4.0 to 0.4.1

1. Changed grantId to grantNumber in Manifest file.
2. Added Health Center Contact Person Name, Health Center Address and Contact Person's Phone in Manifest.  
3. Added support for bearer token as part of the protocol for each resource link.
4. Added support for funding streams as part of the Reporting Parameters profile. 
5. Added support for all reports in the Reporting Parameters profile.
6. Added notes for Manifest and Reporting Parameters profiles.
7. Added eCQM mappings for HbA1c poor control(CMS122) and Controlling High Blood Pressure.(CM165)
8. Updated examples fixing errors for all UDS Plus De-identified resources.
9. Fixed issues with MedicationRequest and MedicationStatement profiles to enable their display.

#### Changes made from 0.3.0 to 0.4.0

1. Added dataAbsentReason for Patient.address.postalCode to support masking and reporting for UDS+
2. Added InsuranceCodes for Coverage resource profile to match values needed for UDS+ tables
3. Added preferredIndicator to Patient.language for computation of Table 3B
4. Verified support for 2023 reporting Race and Ethnicity Values derivation for Table 3B
5. Updated Coverage Resource profile
6. Changed USCore dependency from 5.0.1 to 6.0.0 (USCDI v3)
7. Updated Data Element Mappings.
8. Added guidance for Race, Ethnicity, Sexual Orientation and Gender Identity.
9. Added support for dataAbsentReason for IncomeObservation
10. Added extensions to Coverage for capitation months and fee for service months for Table 4.
11. Added mappings for the IVD, HIV Linkage to Care and Dental Sealants measures.
12. Added Grant Number, Health Center Id, Health Center Name to the Manifest
13. Added ability to identify a patient as part of specific tables and reports. 
 

#### Changes for 0.3.0 

1. Updated Use Case Diagram to show the polling of status.
2. Added paragraph on re-submission of UDS+ reports
3. Added paragraph on the submission process and the flexibility to implement Steps 1 through 9 of the Use Case workflow.
4. Updated implementation guidance with sequence diagrams for Step 9 and 10a, 10b.
5. Updated Data Source Requirements for SMART on FHIR and Group Export operation requirements 
6. Updated Data Source Requirements to specify Group Management capabilities.
7. Updated Trust Service Provider requirements for de-identification.
8. Updated Data Receiver Requirements for re-submission.
9. Added Table specific guidance in the reporting guidance. 
10. Removed Implementation Notes and consolidated to Reporting Guidance.
11. Added examples for De-identified profiles.
12. Added examples for UDS+ File Manifest.
13. Updated the following profiles

	* Patient, Encounter, Condition, Parameters - Manifest

#### Changes for 0.2.0 

1. Addition of profiles for De-identified patient data. (Added extensions for agriculture worker status, gender identity, housing status)
2. Addition of linkages from abstract model to implementation details.
3. Added Change History.
4. Addition of codesystems for Agriculture Worker Status, Insurance Type. Housing status.

---

// File: input/pagecontent/credits.md

### Credits
Primary authors:

* Nagesh Bashyam (Drajer LLC)

Project lead:

* ONC - Leliveld.Emeni
* ONC - Matthew Rahn
* HRSA - Health Resources & Services Administration

Project participants included:

* Rachel Fried - Leap Orbit
* Michael Hunter - Leap Orbit
* HRSA UDS UTC
* Vendors Providing Feedback (Azara, Athena, eCW, Epic, Nextgen, Relevant, i2i)

Our thanks to these and to the many others not explicitly listed who contributed their time, enthusiasm and expertise to this work.

---

// File: input/pagecontent/dataelements.md

This section provides an overview of the UDS+ data elements and their mappings to US Core and QI Core and other IGs as needed.

### UDS+ Data Elements

The UDS+ data elements have been identified in the UDS Reporting Manuals. For the UDS+ project, the following data elements identified in the below UDS tables will be considered for reporting.

* Elements in the Zip Code Data Table 
* Table 3A: Patients by Age and by Sex Assigned at Birth
* Table 3B: Demographic Characteristics
* Table 4: Selected Patient Characteristics
* Table 6A: Selected Diagnoses and Services Rendered
* Table 6B: Quality of Care Measures
* Table 7: Health Outcomes and Disparities

### Analysis of the Zip Code Data Table, Table 3A, Table 3B, Table 4 and Table 6A

The data elements from the above tables have been analyzed to understand the additional data elements that would be needed to be supported by certified EHR technologies as part of the FHIR APIs. This analysis is presented in the table below which identifies the UDS data element, the profiles to be used for UDS+ reporting and the differences between US Core/USCDIv2 and UDS+.


{% include UDS_Data_Elements.html %} 


### Analysis of the Table 6B and 7 (Quality of Care Measures and Health Outcomes and Disparities

UDS+ reports require data to be reported for Quality of Care Measures and also for Health Outcomes and Disparities measures. In order to compute the various populations that fall into the patient population, numerators, denominators, exclusions for the measures the required data elements were identified from the Quality Measure eCQM definitions. These data elements are based of the QDM data elements. These QDM data elements are then mapped to QI Core or UDS+ profiles for reporting purposes. In addition analysis was performed to identify the delta between US Core/USCDIv2 and the data elements required for the computation of the quality measures. This analysis will aid in the decision making on how to best align the ONC USCDI+ data elements to Federal Agency requirements in future versions of USCDI and USCDI+.

The analysis is presented in the table below.

{% include UDS_Quality_Measures.html %}

 

---

// File: input/pagecontent/downloads.md

### Download

You can also download:

* [this entire guide](full-ig.zip)
* the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
* the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}

---

// File: input/pagecontent/implementation.md

This section provides information that can be leveraged by EHR and Health Centers implementing the UDS Plus specification.
This is not a requirements document, nor is prescriptive in nature but should only serve as an implementation aid.

### Implementation of Groups

#### Creation of Groups

* Typically one Group should be created by the EHR vendor or the Health Center for UDS Plus reporting. 
* All the patients who qualify for UDS Plus Reporting should be added to this group. Qualification of Patients for UDS reporting is outlined in the UDS Manual.

#### Population and Updation of Groups

* All the patients who qualify for UDS Plus Reporting should be added to this group. As patients visit the facility and avail healthcare services, the Group has to be updated with unique patients who are not present in the group already. 
* An alternative way of implementing the Group would be to have a dynamic database query that would identify the patients based on the services availed at the facility. 
* In all cases, the Group has to be available prior to the start of the reporting process each year.

#### Enabling Exporting of data from Groups

* EHRs which are playing the role of both Data Source and Data Submitter may provide a button or some kind of capability to the Health Center user to kick of the reporting cycle. 

* If the Data Source and Data Submitter are two different systems, then the Data Submitter has to be provisioned as an SMART on FHIR Application within the Data Source's FHIR Authorization Server. 
* As part of the provisioning process, the Data Submitter should be granted permissions to export using the Group Id created for UDS Reporting. 
* When the Data Submitter is an external application, it may call the $export operations on one or more data sources. Each data source may provide one or more Group Ids. So a Data Submitter has to be configurable with multiple data sources and multiple groups per data source to be able to extract all the data.  


### Implementation of Export Functionality

* EHRs have to use the Patient Compartment to identify all the resources required for the UDS Plus reporting. The resources to be included are identified by the various data elements in the UDS Plus data element mappings. 


### Implementation of De-identification process 

The first version of the IG prescribes the de-identification process as simply removing all identifiable elements in the profiles. This can be accomplished by translating the incoming US Core compliant profile into a UDS Plus De-identified resource profile.


  

---

// File: input/pagecontent/license.md

Creative Commons Legal Code

CC0 1.0 Universal

    CREATIVE COMMONS CORPORATION IS NOT A LAW FIRM AND DOES NOT PROVIDE
    LEGAL SERVICES. DISTRIBUTION OF THIS DOCUMENT DOES NOT CREATE AN
    ATTORNEY-CLIENT RELATIONSHIP. CREATIVE COMMONS PROVIDES THIS
    INFORMATION ON AN "AS-IS" BASIS. CREATIVE COMMONS MAKES NO WARRANTIES
    REGARDING THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS
    PROVIDED HEREUNDER, AND DISCLAIMS LIABILITY FOR DAMAGES RESULTING FROM
    THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS PROVIDED
    HEREUNDER.

Statement of Purpose

The laws of most jurisdictions throughout the world automatically confer
exclusive Copyright and Related Rights (defined below) upon the creator
and subsequent owner(s) (each and all, an "owner") of an original work of
authorship and/or a database (each, a "Work").

Certain owners wish to permanently relinquish those rights to a Work for
the purpose of contributing to a commons of creative, cultural and
scientific works ("Commons") that the public can reliably and without fear
of later claims of infringement build upon, modify, incorporate in other
works, reuse and redistribute as freely as possible in any form whatsoever
and for any purposes, including without limitation commercial purposes.
These owners may contribute to the Commons to promote the ideal of a free
culture and the further production of creative, cultural and scientific
works, or to gain reputation or greater distribution for their Work in
part through the use and efforts of others.

For these and/or other purposes and motivations, and without any
expectation of additional consideration or compensation, the person
associating CC0 with a Work (the "Affirmer"), to the extent that he or she
is an owner of Copyright and Related Rights in the Work, voluntarily
elects to apply CC0 to the Work and publicly distribute the Work under its
terms, with knowledge of his or her Copyright and Related Rights in the
Work and the meaning and intended legal effect of CC0 on those rights.

1. Copyright and Related Rights. A Work made available under CC0 may be
protected by copyright and related or neighboring rights ("Copyright and
Related Rights"). Copyright and Related Rights include, but are not
limited to, the following:

  i. the right to reproduce, adapt, distribute, perform, display,
     communicate, and translate a Work;
 ii. moral rights retained by the original author(s) and/or performer(s);
iii. publicity and privacy rights pertaining to a person's image or
     likeness depicted in a Work;
 iv. rights protecting against unfair competition in regards to a Work,
     subject to the limitations in paragraph 4(a), below;
  v. rights protecting the extraction, dissemination, use and reuse of data
     in a Work;
 vi. database rights (such as those arising under Directive 96/9/EC of the
     European Parliament and of the Council of 11 March 1996 on the legal
     protection of databases, and under any national implementation
     thereof, including any amended or successor version of such
     directive); and
vii. other similar, equivalent or corresponding rights throughout the
     world based on applicable law or treaty, and any national
     implementations thereof.

2. Waiver. To the greatest extent permitted by, but not in contravention
of, applicable law, Affirmer hereby overtly, fully, permanently,
irrevocably and unconditionally waives, abandons, and surrenders all of
Affirmer's Copyright and Related Rights and associated claims and causes
of action, whether now known or unknown (including existing as well as
future claims and causes of action), in the Work (i) in all territories
worldwide, (ii) for the maximum duration provided by applicable law or
treaty (including future time extensions), (iii) in any current or future
medium and for any number of copies, and (iv) for any purpose whatsoever,
including without limitation commercial, advertising or promotional
purposes (the "Waiver"). Affirmer makes the Waiver for the benefit of each
member of the public at large and to the detriment of Affirmer's heirs and
successors, fully intending that such Waiver shall not be subject to
revocation, rescission, cancellation, termination, or any other legal or
equitable action to disrupt the quiet enjoyment of the Work by the public
as contemplated by Affirmer's express Statement of Purpose.

3. Public License Fallback. Should any part of the Waiver for any reason
be judged legally invalid or ineffective under applicable law, then the
Waiver shall be preserved to the maximum extent permitted taking into
account Affirmer's express Statement of Purpose. In addition, to the
extent the Waiver is so judged Affirmer hereby grants to each affected
person a royalty-free, non transferable, non sublicensable, non exclusive,
irrevocable and unconditional license to exercise Affirmer's Copyright and
Related Rights in the Work (i) in all territories worldwide, (ii) for the
maximum duration provided by applicable law or treaty (including future
time extensions), (iii) in any current or future medium and for any number
of copies, and (iv) for any purpose whatsoever, including without
limitation commercial, advertising or promotional purposes (the
"License"). The License shall be deemed effective as of the date CC0 was
applied by Affirmer to the Work. Should any part of the License for any
reason be judged legally invalid or ineffective under applicable law, such
partial invalidity or ineffectiveness shall not invalidate the remainder
of the License, and in such case Affirmer hereby affirms that he or she
will not (i) exercise any of his or her remaining Copyright and Related
Rights in the Work or (ii) assert any associated claims and causes of
action with respect to the Work, in either case contrary to Affirmer's
express Statement of Purpose.

4. Limitations and Disclaimers.

 a. No trademark or patent rights held by Affirmer are waived, abandoned,
    surrendered, licensed or otherwise affected by this document.
 b. Affirmer offers the Work as-is and makes no representations or
    warranties of any kind concerning the Work, express, implied,
    statutory or otherwise, including without limitation warranties of
    title, merchantability, fitness for a particular purpose, non
    infringement, or the absence of latent or other defects, accuracy, or
    the present or absence of errors, whether or not discoverable, all to
    the greatest extent permissible under applicable law.
 c. Affirmer disclaims responsibility for clearing rights of other persons
    that may apply to the Work or any use thereof, including without
    limitation any person's Copyright and Related Rights in the Work.
    Further, Affirmer disclaims responsibility for obtaining any necessary
    consents, permissions or other rights required for any use of the
    Work.
 d. Affirmer understands and acknowledges that Creative Commons is not a
    party to this document and has no duty or obligation with respect to
    this CC0 or use of the Work.

---

// File: input/pagecontent/OperationDefinition-import-intro.md


### Introduction

The import operation is to be used by the Health Centers to submit data to HRSA. The import operation takes a [Manifest](StructureDefinition-uds-plus-import-manifest.html) which contains the links of all the data that needs to be submitted to HRSA. This import operation resembles the Bulk Import operation proposed by the Bulk Data team but is not currently part of the FHIR specifications or Implementation Guides.

The Health Center can also check on the status of the import operation using the status location provided in the import response. This allows the Health Center to determine if the data has been successfully imported and validated by HRSA.

In this version of the IG only the NDJSON files are supported as the file format and the protocol to be used for importing is HTTPS with appropriate authorization. 



---

// File: input/pagecontent/OperationDefinition-udsplus-de-identify-intro.md



### Introduction

The deidentify operation is to be used by the Health Centers to de-identify the data containing PHI/PII. The approach for de-identification is as follows:

* Remove all identifiable data from EHR generated exports. This is accomplished by taking the input US Core or equivalent profiles and populating the equivalent UDS Plus profiles which will not contain the identifiable data.

* The operation takes a [List of Resource URLs](StructureDefinition-uds-plus-deidentify-operation-data-urls-parameter.html) that points to identifiable data in NDJSON format and will return back a set of links to NDJSON files that does not contain the identifiable data. 

---

// File: input/pagecontent/reportingguidance.md

This section provides implementation details for reporting the data elements identified in [UDS+ Data Elements](dataelements.html) to HRSA.

### Health Center/HCCN On-boarding process

The UDS+ program requires the Health Centers/HCCN's along with their EHR vendors need to be on-boarded to the UDS+ program to connect to the Data Receiver and submit the data. To initiate this process interested Health Centers and HCCN's and their EHR vendors can contact the HRSA support team using the [BPHC Contact Form](https://hrsa.my.site.com/support/s/). Some of the important activities performed as part of on-boarding include 

* Submitting security information identifying servers that will connect to the HRSA network
* Understanding the HRSA tools and environments that can be used for testing.
* Getting Data Submitter IP Addresses added to the list of IP Addresses allowed to connect to HRSA and vice-versa if needed
* Submitting necessary information to obtain a clientId that is used for the Authorization Protocols.
* Preparing for synthetic data testing and Setting up testing times for executing tests.

### Interaction Flows

This section provides details of the Step 9, Step 10a and Step 10b to be used by the Data Submitter and Data Receiver to successfully submit or re-submit a UDS+ report.

#### Step 9 details

The diagram below details out the interactions between the Data Submitter and the Data Receiver for Step 9. This is following the FHIR Bulk Data Access/FHIR Async pattern.


{% include img.html img="step9-detailed-Interactions.png" caption="Step 9 UDS+ Reporting Workflow Detailed Interactions" %} 

For more information and examples on authentication mechanisms, refer to [SMART on FHIR IG Backend Services]({{site.data.fhir.smartapplaunch}}/backend-services.html).

#### Step 9 Request-Response Details

When $import is invoked by the Data Submitter and a manifest file is submitted the following codes are returned routinely.

* HTTP Status Code of 201 - Accepted : when the manifest file is valid.
* HTTP Status code of 422 - Unprocessable Entity : When the manifest file is invalid along with OperationOutcome resources in the body
* HTTP Status Code of 401 - Unauthorized : When the access token is not valid.

There could be scenarios where the Data Submitters may receive other 4xx or 5xx HTTP error codes.

For details on the request and response examples please refer to [RequestResponseExamples](requestresponseexamples.html).


#### Step 9 Response: Content-Location Header

Since the submission starts a FHIR async pattern request, the submitter has to poll for the status of the submission as the submissions is imported asynchronously. In order to poll for the status of the submission, the submitter has to parse the HTTTP Response Headers and extract the Content-Location header which contains the URL used for polling the status of the submission.


##### Security Protocol Details

The following is a summary of the protocols used for authentication and authorization specified at [SMART on FHIR IG Backend Services]({{site.data.fhir.smartapplaunch}}/backend-services.html).

* The Data Submitter clients (Health Centers) will be registered in the Authorization Server as part of the on-boarding process. There is no dynamic registration capability that is allowed. 

* Asymmetric Keys (public and private keys) are used for authentication. Clients MUST be capable of protecting their private keys.

* [RFC 5246](https://tools.ietf.org/html/rfc5246) - TLS 1.2 is used to protect all transactions.

* Authorization Server supports RS384 or ES384 signature algorithms per [RFC7518](https://tools.ietf.org/html/rfc7518)

* Authorization Server and Data Submitters MUST support Json Web Key Set per [RFC7517](https://www.rfc-editor.org/rfc/rfc7517.txt)

* Authorization Servers and Data Submitters MUST support JSON Web Tokens per [RFC7519](https://tools.ietf.org/html/rfc7519) and [RFC7523](https://tools.ietf.org/html/rfc7523)

* Authorization Server MUST support a .well-known/smart-configuration metadata for conformance

* Data Submitters MUST submit the JWT assertions per the [RFC7521](https://tools.ietf.org/html/rfc7521)

* Data Submitters MUST include the scopes to post the manifest file to the Data Receiver

* Data Submitters SHOULD follow best practices and use links which are signed and expire to prevent malicious actors from downloading the data. Best practice includes auto-generation of the links and auto expiration and requiring tokens to be echoed back for access.

* Data Submitters and Data Receivers MUST maintain audit logs for each submission and its corresponding responses. 

#### Step 10a and Step 10b details

The diagram below details out the interactions between the Data Submitter and the Data Receiver for Step 10a and Step 10b. This is following the FHIR Bulk Data Access/FHIR Async pattern.


{% include img.html img="step10-detailed-interactions.png" caption="Step 10a and 10b UDS+ Reporting Detailed Interactions" %} 


#### Step 10b Request-Response Details

When GET /<Content-Location URL> is invoked by the Data Submitter the following codes are returned routinely.

* HTTP Status Code of 200 - When the import is successful or is In-Progress
* HTTP Status code of 422 - Unprocessable Entity : When there are errors in the processing
* HTTP Status Code of 401 - Unauthorized : When the access token is not valid.
* HTTP Status Code of 400 - Bad Request : When the URLs or access tokens provided are not valid.

There could be scenarios where the Data Submitters may receive other 4xx or 5xx HTTP error codes.

Data Submitters should always process the HTTP Response body to identify the specific errors which are returned as OperationOutcome resources.

For details on the request and response examples please refer to [RequestResponseExamples](requestresponseexamples.html).

##### Step 10b X-Progress HTTP Header 

When Data Submitters invoke the Content-Location URL for the status of the submission, the X-Progress header can also be used to check on the overall status. The typcial values that the X-Progress Header contains are :

* 0% complete - When the import is still in-progress
* Failed - when the import fails due to any reason, the reason will be available in the body of the response
* 100% complete - when the import is successful.

For details on the request and response examples please refer to [RequestResponseExamples](requestresponseexamples.html).



#### Creation of Groups

* Typically one Group should be created by the EHR vendor or the Health Center for UDS Plus reporting. 
* All the patients who qualify for UDS Plus Reporting should be added to this group. Qualification of Patients for UDS reporting is outlined in the UDS Manual.

##### Population and Updation of Groups

* All the patients who qualify for UDS Plus Reporting should be added to this group. As patients visit the facility and avail healthcare services, the Group has to be updated with unique patients who are not present in the group already. 
* An alternative way of implementing the Group would be to have a dynamic database query that would identify the patients based on the services availed at the facility. 
* In all cases, the Group has to be available prior to the start of the reporting process each year.

##### Enabling Exporting of data from Groups

* EHRs which are playing the role of both Data Source and Data Submitter may provide a button or some kind of capability to the Health Center user to kick of the reporting cycle. 

* If the Data Source and Data Submitter are two different systems, then the Data Submitter has to be provisioned as an SMART on FHIR Application within the Data Source's FHIR Authorization Server. 
* As part of the provisioning process, the Data Submitter should be granted permissions to export using the Group Id created for UDS Reporting. 
* When the Data Submitter is an external application, it may call the $export operations on one or more data sources. Each data source may provide one or more Group Ids. So a Data Submitter has to be configurable with multiple data sources and multiple groups per data source to be able to extract all the data.  

##### Implementation of Export Functionality

* EHRs have to use the Patient Compartment to identify all the resources required for the UDS Plus reporting. The resources to be included are identified by the various data elements in the UDS Plus data element mappings. 


##### Implementation of De-identification process 

The first version of the IG prescribes the de-identification process as simply removing all identifiable elements in the profiles. This can be accomplished by translating the incoming US Core compliant profile into a UDS Plus De-identified resource profile.


#### Tables to be reported using FHIR APIs

The following tables are expected to be reported through UDS+ FHIR APIs.

* Table 3A
* Table 3B
* Table 4
* Table 6A
* Table 6B
* Table 7


#### Tables to be reported using existing mechanisms

The following tables are expected to be reported using the existing UDS reporting mechanisms as they are not directly related to the patient's clinical data.

* Table 5
* Table 8A
* Table 9D
* Table 9E

**Feedback Requested** 

The FHIR APIs, FHIR Resources and FHIR profiles to be used are specified as part of the IG, creation of a Parameters Resource profile to specify Tables 5, 8A, 9D and 9E is possible. We would like feedback on this approach as this would essentially make it possible to accept all existing UDS data using FHIR APIs.


#### Table Specific Data Export Requirements

##### Table Patients By Zip Code

Implementers should follow the UDS Manual to identify the patient's zip code and insurance which includes 

	* Reporting the most recent zip code on file
	* Using "Other zip code" for people with no US address 
	* Patients' last insurance from the last visit of the year

##### Table 3A

* For Table 3A, the age calculation should be based on December 31st of the previous year as per the UDS Manual. 

* When race is captured, but no ethnicity is captured, it should be defaulted "Not Hispanic or Latino"

##### Table 4

* The income reported should have been captured within 12 months of the last visit for the pateint.

* The income has to be translated to percentages as per Federal Poverty Guidelines. 

### Quality Measures and Reporting Approaches

Quality Measure computation and reporting is a complex task and may involve multiple systems and human interventions to compute the measures properly. The quality reporting eco-system is rapidly evolving to utilize existing standards such as HL7 FHIR Measure Report (Individual and Summary), HL7 QRDA Category III (Summary or Aggregate), HL7 QRDA Category I (Individual) to automate reporting and processing of the reports. However computation of the Measure Reports or what data to be included in the individual report is still not automated widely in the industry.  HRSA recognizes this state of the industry where Quality Measure standards will continue to evolve and hence prescribes submitting de-identified information for Table 6B and Table 7 using the UDS+ profiles.

The Patients for each measure will be qualified and tagged using the initial patient population criteria for the measure. When a Patient is qualified for multiple measures, they will be tagged using the [Patient Reporting Parameters](StructureDefinition-uds-plus-patient-reporting-parameters.html) profile.


### Submit De-identified FHIR Resources associated with the Patients for the population

The Health Centers are expected to work with their Data Sources (e.g., EHR vendors) to extract the data required for the computation of the different measures as identified in the [UDS+ Data Elements and FHIR Mapping](dataelements.html#analysis-of-the-table-6b-and-7-quality-of-care-measures-and-health-outcomes-and-disparities). These resources when extracted from the EHR will contain identifiable data and has to be de-identified before submitting to HRSA. Once HRSA receives the data, quality measure computation will be performed using the submitted data. 

To help the implementers, the following table shows examples of FHIR resources that contain identifiable information and their corresponding de-identified versions of the resources. These are examples and not specific requirements. 

{% include UDS_Examples.html %} 



---

// File: input/pagecontent/requestresponseexamples.md

This section provides examples of Request and Responses that can be used by implementers to better understand the interactions.

### POST <Server URL> $import - Example with Manifest body 

```
{
    "meta": {
        "extension": [
            {
                "valueString": "UDS+ Manifest File Example",
                "url": "http://hl7.org/fhir/StructureDefinition/instance-name"
            },
            {
                "valueMarkdown": "This is an example of a Manifest file submitted as a parameter to the UDS+ $import operation.",
                "url": "http://hl7.org/fhir/StructureDefinition/instance-description"
            }
        ],
        "profile": [
            "http://hl7.org/fhir/us/uds-plus/StructureDefinition/uds-plus-import-manifest"
        ]
    },
    "parameter": [
        {
            "name": "inputFormat",
            "valueCode": "fhir+ndjson"
        },
        {
            "part": [
                {
                    "valueString": "12343434",
                    "name": "uei"
                },
                {
                    "valueString": "H80CS34333",
                    "name": "grantNumber"
                },
                {
                    "valueString": "FQHC_Utah",
                    "name": "hcName"
                },
                {
                    "valueAddress": {
                        "city": "Atlanta",
                        "line": [
                            "123 Rocky point place"
                        ],
                        "postalCode": "23434",
                        "state": "GA"
                    },
                    "name": "hcAddress"
                },
                {
                    "name": "hcContactPerson",
                    "valueHumanName": {
                        "given": [
                            "Elizabeth"
                        ],
                        "family": "Taylor"
                    }
                },
                {
                    "valueContactPoint": {
                        "system": "phone",
                        "value": "234-234-5648"
                    },
                    "name": "hcContactPhone"
                },
                {
                    "name": "hcPrenatalCareByReferralOnly",
                    "valueBoolean": true
                }
            ],
            "name": "hcInformation"
        },
        {
            "name": "importProtocol",
            "valueCode": "https"
        },
        {
            "valueString": "8600c",
            "name": "submissionId"
        },
        {
            "part": [
                {
                    "name": "type",
                    "valueCode": "AllergyIntolerance"
                },
                {
                    "name": "url",
                    "valueUrl": "https://udsplusblobstorage.blob.core.windows.net/importsuccessfulfiles/AllergyIntolerance.ndjson"
                },
                {
                    "name": "expirationTime",
                    "valueDateTime": "2023-12-31T11:58:07-08:00"
                }
            ],
            "name": "udsData"
        },
        {
            "part": [
                {
                    "name": "type",
                    "valueCode": "Condition"
                },
                {
                    "name": "url",
                    "valueUrl": "https://udsplusblobstorage.blob.core.windows.net/importsuccessfulfiles/Condition.ndjson"
                },
                {
                    "name": "expirationTime",
                    "valueDateTime": "2023-12-31T11:58:07-08:00"
                }
            ],
            "name": "udsData"
        },
        {
            "part": [
                {
                    "name": "type",
                    "valueCode": "Coverage"
                },
                {
                    "name": "url",
                    "valueUrl": "https://udsplusblobstorage.blob.core.windows.net/importsuccessfulfiles/Coverage.ndjson"
                },
                {
                    "name": "expirationTime",
                    "valueDateTime": "2023-12-31T11:58:07-08:00"
                }
            ],
            "name": "udsData"
        },
        {
            "part": [
                {
                    "name": "type",
                    "valueCode": "Encounter"
                },
                {
                    "name": "url",
                    "valueUrl": "https://udsplusblobstorage.blob.core.windows.net/importsuccessfulfiles/Encounter.ndjson"
                },
                {
                    "name": "expirationTime",
                    "valueDateTime": "2023-12-31T11:58:07-08:00"
                }
            ],
            "name": "udsData"
        },
        {
            "part": [
                {
                    "name": "type",
                    "valueCode": "Immunization"
                },
                {
                    "name": "url",
                    "valueUrl": "https://udsplusblobstorage.blob.core.windows.net/importsuccessfulfiles/Immunization.ndjson"
                },
                {
                    "name": "expirationTime",
                    "valueDateTime": "2023-12-31T11:58:07-08:00"
                }
            ],
            "name": "udsData"
        },
        {
            "part": [
                {
                    "name": "type",
                    "valueCode": "MedicationRequest"
                },
                {
                    "name": "url",
                    "valueUrl": "https://udsplusblobstorage.blob.core.windows.net/importsuccessfulfiles/MedicationRequest.ndjson"
                },
                {
                    "name": "expirationTime",
                    "valueDateTime": "2023-12-31T11:58:07-08:00"
                }
            ],
            "name": "udsData"
        },
        {
            "part": [
                {
                    "name": "type",
                    "valueCode": "MedicationStatement"
                },
                {
                    "name": "url",
                    "valueUrl": "https://udsplusblobstorage.blob.core.windows.net/importsuccessfulfiles/MedicationStatement.ndjson"
                },
                {
                    "name": "expirationTime",
                    "valueDateTime": "2023-12-31T11:58:07-08:00"
                }
            ],
            "name": "udsData"
        },
        {
            "part": [
                {
                    "name": "type",
                    "valueCode": "Observation"
                },
                {
                    "name": "url",
                    "valueUrl": "https://udsplusblobstorage.blob.core.windows.net/importsuccessfulfiles/Income.ndjson"
                },
                {
                    "name": "expirationTime",
                    "valueDateTime": "2023-12-31T11:58:07-08:00"
                }
            ],
            "name": "udsData"
        },
        {
            "part": [
                {
                    "name": "type",
                    "valueCode": "Observation"
                },
                {
                    "name": "url",
                    "valueUrl": "https://udsplusblobstorage.blob.core.windows.net/importsuccessfulfiles/SexualOrientation.ndjson"
                },
                {
                    "name": "expirationTime",
                    "valueDateTime": "2023-12-31T11:58:07-08:00"
                }
            ],
            "name": "udsData"
        },
        {
            "part": [
                {
                    "name": "type",
                    "valueCode": "Observation"
                },
                {
                    "name": "url",
                    "valueUrl": "https://udsplusblobstorage.blob.core.windows.net/importsuccessfulfiles/Observation.ndjson"
                },
                {
                    "name": "expirationTime",
                    "valueDateTime": "2023-12-31T11:58:07-08:00"
                }
            ],
            "name": "udsData"
        },
        {
            "part": [
                {
                    "name": "type",
                    "valueCode": "Parameters"
                },
                {
                    "name": "url",
                    "valueUrl": "https://udsplusblobstorage.blob.core.windows.net/importsuccessfulfiles/ReportingParameters.ndjson"
                },
                {
                    "name": "expirationTime",
                    "valueDateTime": "2023-12-31T11:58:07-08:00"
                }
            ],
            "name": "udsData"
        },
        {
            "part": [
                {
                    "name": "type",
                    "valueCode": "Patient"
                },
                {
                    "name": "url",
                    "valueUrl": "https://udsplusblobstorage.blob.core.windows.net/importsuccessfulfiles/Patient.ndjson"
                },
                {
                    "name": "expirationTime",
                    "valueDateTime": "2023-12-31T11:58:07-08:00"
                }
            ],
            "name": "udsData"
        },
        {
            "part": [
                {
                    "name": "type",
                    "valueCode": "Procedure"
                },
                {
                    "name": "url",
                    "valueUrl": "https://udsplusblobstorage.blob.core.windows.net/importsuccessfulfiles/Procedure.ndjson"
                },
                {
                    "name": "expirationTime",
                    "valueDateTime": "2023-12-31T11:58:07-08:00"
                }
            ],
            "name": "udsData"
        },
        {
            "part": [
                {
                    "name": "type",
                    "valueCode": "RelatedPerson"
                },
                {
                    "name": "url",
                    "valueUrl": "https://udsplusblobstorage.blob.core.windows.net/importsuccessfulfiles/RelatedPerson.ndjson"
                },
                {
                    "name": "expirationTime",
                    "valueDateTime": "2023-12-31T11:58:07-08:00"
                }
            ],
            "name": "udsData"
        },
        {
            "part": [
                {
                    "name": "type",
                    "valueCode": "ServiceRequest"
                },
                {
                    "name": "url",
                    "valueUrl": "https://udsplusblobstorage.blob.core.windows.net/importsuccessfulfiles/ServiceRequest.ndjson"
                },
                {
                    "name": "expirationTime",
                    "valueDateTime": "2023-12-31T11:58:07-08:00"
                }
            ],
            "name": "udsData"
        }
    ],
    "id": "example",
    "resourceType": "Parameters"
}

```

#### Import Response Screnshot showing the Content-Location to be used for submission status polling

This screenshot below shows an example response that has a HTTP Status of 201 - Accepted and the Content-Location URL that should be used for polling.

{% include img.html img="importresponse.png" caption="Figure 12.1 - Import Response example showing Content-Location Header" %}

The example Content-Location URL is : http://localhost:8081/status/FQHC_Utah/8600c which can be used for polling. In the real-world, the content location polliing request also uses https and access tokens before you can get the status of the submission.



#### Submission Status Polling: Successful Import Response obtained by calling GET <Content Location URL>

When the Data Submitter performs a poll and if the import is successful, a response such as below will be provided.

``` 
{
    "resourceType": "OperationOutcome",
    "id": "63c46155-28e0-40e0-a32c-89de95675f0c",
    "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">$import is successfully processed</div>"
    },
    "issue": [
        {
            "id": "4c9c927b-e0ba-48dd-b436-cdc140b1aa0a",
            "severity": "information",
            "code": "informational",
            "details": {
                "coding": [
                    {
                        "code": "information",
                        "display": "$import is successfully processed"
                    }
                ]
            }
        }
    ]
}
```

#### Submission Status Polling: Failure of an $import Request due to bad URLs obtained by calling GET <Content-Location-URL>


```
[
    {
        "issue": [
            {
                "severity": "error",
                "code": "exception",
                "details": {
                    "coding": [
                        {
                            "code": "error",
                            "display": "Invalid Resource Download URL"
                        }
                    ]
                },
                "id": "1f6f15fc-3138-4b9f-8e74-a7af8f5d6007"
            },
            {
                "severity": "information",
                "code": "informational",
                "details": {
                    "coding": [
                        {
                            "code": "health_center_name",
                            "display": "FQHC_Utah"
                        }
                    ]
                },
                "id": "1e3d06a5-ad20-4d2a-8131-0b5ad641d895"
            },
            {
                "severity": "information",
                "code": "informational",
                "details": {
                    "coding": [
                        {
                            "code": "submission_id",
                            "display": "8600a"
                        }
                    ]
                },
                "id": "b69c0f8c-8ee5-47ca-ba99-978fae5ac8a7"
            },
            {
                "severity": "information",
                "code": "informational",
                "details": {
                    "coding": [
                        {
                            "code": "resource_type",
                            "display": "Observation"
                        }
                    ]
                },
                "id": "df8fc8c3-1038-4f6d-a738-114748135ff3"
            },
            {
                "severity": "information",
                "code": "informational",
                "details": {
                    "coding": [
                        {
                            "code": "resource_file_name",
                            "display": "SexualOrientati.ndjson"
                        }
                    ]
                },
                "id": "ee655aa4-29b4-4ea8-bdf6-70f2a90a56a7"
            },
            {
                "severity": "information",
                "code": "informational",
                "details": {
                    "coding": [
                        {
                            "code": "resource_url",
                            "display": "https://udsplusblobstorage.blob.core.windows.net/importsuccessfulfiles/SexualOrientati.ndjson"
                        }
                    ]
                },
                "id": "7984c645-c77c-4416-842b-ce2f580f4bac"
            }
        ],
        "id": "28b45d47-9e3f-418f-a2fe-eddf7df41026",
        "text": {
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">https://udsplusblobstorage.blob.core.windows.net/importsuccessfulfiles/SexualOrientati.ndjson</div>",
            "status": "generated"
        },
        "resourceType": "OperationOutcome"
    },
    {
        "issue": [
            {
                "severity": "error",
                "code": "exception",
                "details": {
                    "coding": [
                        {
                            "code": "error",
                            "display": "Invalid Resource Download URL"
                        }
                    ]
                },
                "id": "1f6f15fc-3138-4b9f-8e74-a7af8f5d6007"
            },
            {
                "severity": "information",
                "code": "informational",
                "details": {
                    "coding": [
                        {
                            "code": "health_center_name",
                            "display": "FQHC_Utah"
                        }
                    ]
                },
                "id": "1e3d06a5-ad20-4d2a-8131-0b5ad641d895"
            },
            {
                "severity": "information",
                "code": "informational",
                "details": {
                    "coding": [
                        {
                            "code": "submission_id",
                            "display": "8600a"
                        }
                    ]
                },
                "id": "b69c0f8c-8ee5-47ca-ba99-978fae5ac8a7"
            },
            {
                "severity": "information",
                "code": "informational",
                "details": {
                    "coding": [
                        {
                            "code": "resource_type",
                            "display": "Observation"
                        }
                    ]
                },
                "id": "df8fc8c3-1038-4f6d-a738-114748135ff3"
            },
            {
                "severity": "information",
                "code": "informational",
                "details": {
                    "coding": [
                        {
                            "code": "resource_file_name",
                            "display": "SexualOrientati.ndjson"
                        }
                    ]
                },
                "id": "ee655aa4-29b4-4ea8-bdf6-70f2a90a56a7"
            },
            {
                "severity": "information",
                "code": "informational",
                "details": {
                    "coding": [
                        {
                            "code": "resource_url",
                            "display": "https://udsplusblobstorage.blob.core.windows.net/importsuccessfulfiles/SexualOrientati.ndjson"
                        }
                    ]
                },
                "id": "7984c645-c77c-4416-842b-ce2f580f4bac"
            },
            {
                "severity": "error",
                "code": "exception",
                "details": {
                    "coding": [
                        {
                            "code": "error",
                            "display": "Resource Download Failed"
                        }
                    ]
                },
                "id": "66e39819-1414-4a6d-a284-ad5b63e44fee"
            }
        ],
        "id": "28b45d47-9e3f-418f-a2fe-eddf7df41026",
        "text": {
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Resource Download Failed</div>",
            "status": "generated"
        },
        "resourceType": "OperationOutcome"
    }
]

```


#### Subsmission Status Polling: Screenshots showing X-Progress header obtained by GET <Content-Location URL>

The screenshot below shows example of X-Progress header for an import operation that is not yet complete

{% include img.html img="inprogress-submission.png" caption="Figure 12.2 - X-Progress Header for submission which is not completed" %}

The screenshot below shows example of X-Progress header for an import operation that is completed successfully

{% include img.html img="completed-submission.png" caption="Figure 12.3 - X-Progress Header for submission which is completed successfully" %}

The screenshot below shows example of X-Progress header for an import operation that failed

{% include img.html img="failed-submission.png" caption="Figure 12.4 - X-Progress Header for submission which has failed" %}


---

// File: input/pagecontent/spec.md

This section defines the specific requirements for systems wishing to conform to actors specified in this UDS+ IG and use HL7 FHIR for reporting.

### Context

#### Pre-reading
Before reading this formal specification, implementers should first be familiar with two other key portions of the specification:

* The [Use Cases](usecases.html) page provides the business context and general process flow enabled by the formal specification.

* The [Background](background.html) page provides information about the underlying specifications and indicates what portions of each should be reviewed in order to have the necessary foundation to understand the constraints and usage guidance described in this detailed specification.


#### Conventions
This implementation guide uses specific terminology to flag statements that have relevance for the evaluation of conformance with the guide:

* **SHALL** indicates requirements that must be met to be conformant with the specification.

* **SHOULD** indicates behaviors that are strongly recommended (and which may result in interoperability issues or sub-optimal behavior if not adhered to), but which do not, for this version of the specification, affect the determination of specification conformance.

* **MAY** describes optional behaviors that are free to consider but where the is no recommendation for or against adoption.


#### Claiming Conformance 

Actors and Systems asserting conformance to this implementation guide have to implement the requirements outlined in the corresponding capability statements. The following definition of MUST SUPPORT is to be used in the implementation of the requirements.

##### MUST SUPPORT Definition

* Systems **SHALL** be capable of populating data elements as specified by the profiles and data elements are returned using the specified APIs in the capability statement.
* Systems **SHALL** be capable of processing resource instances containing the MUST SUPPORT data elements without generating an error or causing the application to fail. 
* In situations where information on a particular data element is not present and the reason for absence is unknown, Systems **SHALL NOT** include the data elements in the resource instance returned from executing the API requests.
* When accessing UDS+ data, Systems **SHALL** interpret missing data elements within resource instances returned from API requests as data not present.
* Systems **SHALL NOT** include any data elements as part of the resource that is not tagged as mandatory or **MUST SUPPORT** in the profile.

NOTE: There are data elements designated as **MUST SUPPORT** in the UDS+ profiles, but are not present in the mapping tables. These data elements have been designated as MUST SUPPORT to align with QI Core profiles which get used for Quality Measure Reporting. In cases where a Health Center does not have data elements tagged as MUST SUPPORT in their EHRs, they can omit sending these data elements as long as the  cardinality of the data element allows for the omission of the data element.  

#### Profiles
This specification makes significant use of [FHIR profiles]({{site.data.fhir.path}}profiling.html), search parameter definitions, and terminology artifacts to describe the content to be shared as part of UDS+ workflows. The implementation guide is based on [FHIR R4]({{site.data.fhir.path}}) and profiles are listed for each interaction.

The full set of profiles defined in this implementation guide can be found by following the links on the [UDS+ FHIR Artifacts](artifacts.html) page.


#### SMART on FHIR Backend Services Authorization
This section outlines how the SMART on FHIR Backend Services Authorization will be used by the UDS+ implementation guide. 

* When conforming to the SMART Backend Services Authorization, System Actors SHALL include token_endpoint, scopes_supported, token_endpoint_auth_methods_supported and token_endpoint_auth_signing_alg_values_supported as defined in the [SMART on FHIR IG Backend Services]({{site.data.fhir.smartapplaunch}}/backend-services.html) specification.

* When System Actors act as clients, they SHOULD share their JSON Web Key Set (JWKS) with the server System Actors using Uniform Resource Locators (URLs) as defined in the [SMART on FHIR IG Backend Services]({{site.data.fhir.smartapplaunch}}/backend-services.html) specification.

* Client System Actors SHALL obtain the access token as defined in the [SMART on FHIR Backend Services]({{site.data.fhir.smartapplaunch}}/backend-services.html) specification.

* Data Sources SHALL support the system/*.read scope so that the necessary data can be extracted for UDS+ submissions. 


#### System Actors, Requirements and Capability Statements

##### Data Source Requirements

This section identifies the different requirements for Data Source (e.g., EHRs) systems supporting the Health Centers. These requirements are only applicable to Data Sources that are planning to conform to Steps 1 through 5 of the use case workflow defined in [Data Submission workflow](usecases.html#uds-data-submission-workflow-using-fhir). If a Health Center chooses to implement Steps 1 through 5 using other mechanisms, these requirements would not be applicable to the Data Source. 

* The Data Source **SHALL** support the [FHIR Base URL]/Group/[id]/$export as per the Bulk Data Access IG.

* The Data Source **SHALL** support the resources and profiles identified in the [Data Source Capability Statement](CapabilityStatement-uds-plus-data-source.html)

* The Data Source **SHALL** support the [FHIR Base URL]/Group/[id]/$export using the _since parameter as per the Bulk Data Access IG.

* The Data Source **SHALL** support the [FHIR Base URL]/Group/[id]/$export using the _type parameter as per the Bulk Data Access IG.

* The Data Source **SHALL** export the data for the reporting year following the code systems, value sets and rules outlined in the UDS Manual for the specific reporting year. 

**NOTE:** The filtering of resources for the reporting year will be performed based on the patient and visit qualification rules within the UDS Manual for the reporting year. Not all resources associated with a Patient compartment are relevant for an UDS+ submission. The UDS Manual specifically outlines types of visits that are eligible and types of visits that are not eligible. Similarly the UDS Manual identifies the types of services that can be included in an UDS+ report. Please refer to the UDS manual to determine the specifc codesystems and valuesets that should be used for filtering of the Patient data.

* The Data Source **SHALL** support the SMART on FHIR Backend Services Authorization as outlined in the previous sections.

* The Data Souce **SHALL** support scopes of system/*.read to enable UDS+ reporting. 

* The Data Source **SHALL** support the following parameters for Bulk Export

	* _outputFormat = application/ndjson
	* _since 
	* _type (Includes all resources identified in the Data Elements)
	

###### Group Management

The extraction of data from a Data Source uses the Bulk Data Access IG /Group/[id]/$export functionality. This requires a Group resource instance to be created and maintained by the Data Source. 

**Group Definition:** 

All the Patients served by Health Center as per the UDS Manual on what qualifies for UDS reporting should be included in the Group. This includes a list of non duplicated patiens from qualified providers and non-providers, visits excluding screenings (covid-19, diabetes, hypertension etc), excluding outreach activities, excluding group visits except mental health, excluding tests, anciliary services and administering medicines, 

**Dynamic Group vs static groups**  

* Data Sources ** SHOULD ** use dynamic groups to identify the list of patients applicable for UDS+ reporting. The rationale for dynamic groups is to ensure that all the rules to identify the patients can be applied at a point in time. On the contrary Data Sources ** MAY ** choose to implement static groups, as long as it can be created/updated based on the data submission requirements. For e.g a Group can be created during the reporting period for the previous year. 

**Number of NDJSON files per resource type** 

Data Sources exporting data using $export bulk data operation, create NDJSON files per resource type. For e.g Patient demographic data may be present in a file called Patient-1.ndjson and Patient-2.ndjson. A Data Source may create only one NDJSON file having all the patients or may have multiple NDJSON files each having a subset of the Patients. The number of patients to include per NDJSON  file is left to the Data Source and its performance. However some considerations that could be used as guidelines are:

* Creating large files are difficult to create and receive for the Data Source, Data Submitter and the Data Receiver respectively. In order to help in managing performance of implementations we recommend a size of 10,000 records for each ndjson file. This may lead to a total file size between 1MB to 10MB depending on the data. Files of size 10MB should be easily processable by most technologies that are available currently. This is just a guidance and there are no specific limitations that is specified by this IG. In other words vendors may choose create NDJSON files for every 1000 records or 1000000 (a million) records also.


##### Data Submitter Requirements

This section identifies the different requirements for Data Submitter system supporting the Health Centers.

* The Data Submitter **SHALL** support the scheduling of timers to kick off health center reporting based on HRSA guidance.

* The Data Submitter **SHOULD** implement the client requirements per the Bulk Data Access IG to start the export of the data from the Data Source.

* The Data Submitter **SHOULD** implement the monitoring of the export request per the Bulk Data Access IG. 

* Once the export is completed, the Data Submitter SHALL download the exported data for de-identification.

* The Data Submitter **SHOULD** retain the patient linkages between the identifiable data and de-identified data.

* The Data Submitter **SHALL** de-identify the exported data using the Trust Service Provider services and then create the file download links for Data Receiver to download the NDJSON data. 

* The Data Submitter **SHAL**L validate the data for conformance to the IG.

* The Data Submitter **SHALL** follow the Health Center security and privacy policies while creating the NDJSON file links to be used by the Data Receiver to download the data.

* The Data Submitter **SHALL** notify the HRSA Data Receiver when the data is ready using the [$import](OperationDefinition-import.html) operation.  

* When the Data Receiver provides a failure status for the $import operation, the Data Submitter **SHALL** rectify the errors and perform a re-submission. 

{:.stu-note}
The following is new content for 1.1.0

<div class="bg-success" markdown="1">

" When the Data Receiver provides a status of completion,, the Data Submitter **MAY** remove the NDJSON files that were submitted via the manifest file.

</div>

* Data Submitters **SHOULD NOT** include any data elements that are not mandatory or are not specified as MUST SUPPORT in the UDS+ profiles.

* Data Submitter **MAY** submit partial data as part of the $import operation for 2023 reporting cycle. 

* When choosing to submit partial data, Data Submitters **SHALL** include data for the following tables 

	* Patients By Zipcode table
	* Table 3A
	* Table 3B
	* Table 4
	* Table 6A
	* Report data for at least 2 Quality Measures related to Table 6B 
	* Report data for at least 2 Quality Measures related to Table 7
	
{:.stu-note}
The following is changed content for 1.1.0

<div class="bg-success" markdown="1">

* For Quality Measure data reporting, Data Submitters **SHALL** include patients who meet the Initial Patient Population criteria. However Data Submitters **MAY** omit patients who are excluded because of the denominator exceptions and exclusions. 

**NOTE** The patients and the data included should allow the Data Receiver to accurately calculate the IPP, Denominator and the Numerator counts.

</div>

**NOTE:** The re-submission payload will be a complete payload and not a partial payload. 

###### Data Capture Requirements 

* Health Centers ** SHOULD ** follow the UDS Manual for capturing the following data elements 

	* Patient's zip codes. 
	* Insurance Category 
	* Provider Category and specific specialty
 
##### Trust Service Provider Requirements
This section identifies the different requirements for UDS+ Trust Service Provider that can be used for de-identification.

* The Trust Service Provider **SHALL** support the de-identify operation for each type of resource per the Capability Statement. 

* The Trust Service Provider **SHALL** create an identifier that is retained internally to link between identifiable and de-identifiable data.

* The Trust Service Provider **SHALL** remove all identifiable data using the profiles specified in this IG and create NDJSON data based on the IG profiles.

* The Trust Service Provider **SHALL** remove all data elements that are not identified as "SUPPORTED" in the UDS+ profile definitions. 

**Implementation Note:** Common data elements which may have identifiable data have been explicitly mentioned in the profile with a cardinality of 0..0 which means they are not expected to be present. However other data elements which may be allowed in the resource may be included by the EHR including extensions. These additional data element and extensions that are not specified in the UDS+ profiles have to be removed explicitly by the Trust Service Provider implementation.

* The Trust Service Provider **SHALL** implement the de-identification requirements as per the [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf).

* When choosing to implement the de-identification method using safe harbor provisions from the HHS De-identification Guidance, Trust Service Providers **SHALL** eliminate records related to the specific zip codes as specified in the guidance. 

**Implementation Note:** Implementers are advised to refer to [Reporting Guidance](reportingguidance.html)
 

##### Data Receiver Requirements
This section identifies the different requirements for Data Receiver systems hosted by HRSA.

* The Data Receiver **SHALL** implement the [$import](OperationDefinition-import.html) operation to receive a manifest file containing the UDS+ report for each health center.

* The Data Receiver **SHALL** download the NDJSON formatted, de-identified data from the health center using the links provided by the Data Submitter following the protocol specified in the manifest file.

* The Data Receiver **SHALL** validate the received NDJSON data according the UDS+ FHIR IG profiles and return OperationalOutcomes for each instance of conformance failure.

* The Data Receiver **SHALL** apply necessary business rules to check data quality and provide feedback via OperationalOutcome for each data quality issue. These may be errors or warnings. 

* The Data Receier **SHALL** reject submissions that do not meet the partial submission requirements which **MUST** include data for 

	* Patients By Zipcode table
	* Table 3A
	* Table 3B
	* Table 4
	* Table 6A
	* Report data for at least 2 Quality Measures related to Table 6B 
	* Report data for at least 2 Quality Measures related to Table 7
	

* The Data Receiver **SHALL** provide status polling capability to Health Centers as part of the HTTP Content Header  with a recommended polling interval. 

* Data Receiver **SHOULD** reject resources containing data that are not mandatory or specified as MUST SUPPORT in the UDS+ profiles.

* The Data Receiver **SHALL** update the status of the submission for each health center. 

* The Data Receiver **SHALL** process a re-submission by a Health Center as needed during the reporting period.

* The Data Receiver **SHALL** discard previous submissions when a re-submission is made by the Health Center. 

 

---

// File: input/pagecontent/StructureDefinition-de-identified-uds-plus-coverage-intro.md



### Introduction

This profile is used to represent de-identified Coverage information. The de-identification process has to remove all data elements not explicitly identified as "SUPPORTED" in the profile. 

The [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf) is to be followed to ensure appropriate level of de-identification is performed.

According to the HHS guidance, dates should not have a precision of more than the year. This means month and day cannot be included. This includes diagnosis dates, visit dates, onset dates etc.

In FHIR Resources, text elements and reference.display elements which provide human readable information to the providers may be generated using programs and tools from the data present within the resource. For e.g a Coverage resource text element may contain information such as the covrage date. This type of information will enable identification of the individuals. In order to avoid inadvertent revealing of PII/PHI, text elements cannot be included in the De-identified FHIR resource and the submission will be rejected when text elements are present by the validation process. 

**Ids and References**

The original Coverage resource id should not be included in the De-identified Coverage instance. Instead a new id should be created and provided as part of the FHIR resource. This Data Submitter should be capable of using the generated id to relink the data to the original Coverage. All resource references to the Coverage submitted as part of the UDS+ report should refer to newly generated id.

Resource references cannot contain text element as it may contain PHI/PII. The text element for following references are not allowed

* beneficiary
* payor


**Date Truncation** 

The Data Submitter has to truncate the following dates to only have a precision of year

* period and its sub elements.

**Examples**
 
Examples of identifiable data and its corresponding de-identifiable data is present in [Reporting Guidance](reportingguidance.html).



---

// File: input/pagecontent/StructureDefinition-de-identified-uds-plus-income-observation-intro.md



### Introduction

This profile is used to represent de-identified Income information. The de-identification process has to remove all data elements not explicitly identified as "SUPPORTED" in the profile. 

The [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf) is to be followed to ensure appropriate level of de-identification is performed.

In FHIR Resources, text elements and reference.display elements which provide human readable information to the providers may be generated using programs and tools from the data present within the resource. For e.g a Income Observation resource text element may contain Patient information such as names. This type of information will enable identification of the individuals. In order to avoid inadvertent revealing of PII/PHI, text elements cannot be included in the De-identified FHIR resource and the submission will be rejected when text elements are present by the validation process. 

**Ids and References**

The original Observation resource id should not be included in the De-identified Observation instance. Instead a new id should be created and provided as part of the FHIR resource. This Data Submitter should be capable of using the generated id to relink the data to the original Income Observation. All resource references to the Income Observation submitted as part of the UDS+ report should refer to newly generated id.

Resource references cannot contain text element as it may contain PHI/PII. The text element for following references are not allowed

* subject

**Representing Income Ranges**

Income ranges are represented using the Observation.valueRange or Observation.valueQuanity element. The following values can be used to represent the Income ranges: 

	* 100% and below : use valueRange.high to represent 100% (Includes 100)
	* 101–150% : use valueRange.low to represent 101, valueRange.high to represent 150 (Includes 101 and 150)
	* 151–200% : use valueRange.low to represent 151, valueRange.high to represent 200 (Includes 151 and 200)
	* Over 200% : use valueQuantity.value to represent 200, units of % and comparator of ">", valueRange cannot be used for representing more than 200%.
	* For unknown use the dataAbsentReason
	
	
**Date Truncation** 

The Data Submitter has to truncate the following dates to only have a precision of year

* effectiveDateTime.


**Examples**
 
Examples of identifiable data and its corresponding de-identifiable data is present in [Reporting Guidance](reportingguidance.html).



---

// File: input/pagecontent/StructureDefinition-de-identified-uds-plus-patient-intro.md



### Introduction

This profile is used to represent de-identified patient information. The de-identification process has to remove all data elements not explicitly identified as "SUPPORTED" in the profile. 

The [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf) is to be followed to ensure appropriate level of de-identification is performed.

According to the HHS guidance the following data elements have to be removed or de-identified

* Patient Name
* Address that is more specific than a state
	
	* First 3 digits of Zipcodes can be included if the population of all zipcodes starting with the same 3 digits are > 20000 people and the last 2 digits should be masked with "00",  in all other cases, the zipcodes have to be masked to 00000.
	 
* All dates should not have a precision of more than the year. This means month and day cannot be included.
* Demographics including birthdate, deceased indicator
* Patient contact details such as telephone numbers, fax, email, URLs, 
* Patient personal identifiers such as SSN, Drivers License, 
* Business identifiers such as MRNs, certificate numbers, Account numbers
* Biometrics such as fingerprints, photos

In FHIR Resources, text elements which provide human readable information to the providers may be generated using programs and tools from the data present within the resource. For e.g a Patient resource text element may contain information such as the full name, Gender and Date of Birth. This type of information will enable identification of the individuals. In order to avoid inadvertent revealing of PII/PHI, text elements cannot be included in the De-identified FHIR resource and the submission will be rejected when text elements are present by the validation process.  

**Age Computation** 

The Data Submitter has to compute the age based as of December 31st of the previous year for inclusion in the UDS+ report.

**Id Generation** 

The original patient resource id should not be included in the De-identified patient instance. Instead a new id should be created and provided as part of the FHIR resource. This Data Submitter should be capable of using the generated id to relink the data to the original patient. All resource references to the Patient submitted as part of the UDS+ report should refer to newly generated de-identified id.

{:.stu-note}
The following is new content for 1.1.0

<div class="bg-success" markdown="1">

**Date Truncation** 

The Data Submitter has to truncate the following dates to only have a precision of year

* deceased[x] when the data type used is dateTime.

</div>

**Usage of Data Absent Reason Extension**

For the UDS+ reporting, the patient data is de-identified and in the process zip codes may be masked to a value of "00000". In these cases the dataAbsentReason extension must be added to identify that the data is "masked".
If the zip code is not known, a value of "00000" must be sent with a dataAbsentReason of "unknown".
If the zip code is outside the country, a value of "00000" must be sent with a dataAbsentReason of "unsupported".

**Birth Sex Additional Constraints**

NullFlavors are not allowed for BirthSex reporting for UDS+ even though they are allowed in US Core.

**Race and Ethnicity Additional Constraints**

US Core allows Race and Ethnicity to be described as only text or rolled up to the OMB categories, however for UDS+ reporting detailed race and ethnicity have to be captured and reported as part of the profile. If the reported race and ethncity values are not null flavors then detailed values are mandatory.

**Sexual Orientation Additional Constraints**

Health Centers which have not implemented the methods to capture Sexual Orientation, should use the null flavor coded value of "NASK" specifically. 

**Gender Identity Additional Constraints**

Health Centers which have not implemented the methods to capture Gender Identity, should use the null flavor coded value of "NASK" specifically. 
  

**Examples** 
Examples of identifiable data and its corresponding de-identifiable data is present in [Reporting Guidance](reportingguidance.html).



---

// File: input/pagecontent/StructureDefinition-de-identified-uds-plus-relatedperson-intro.md



### Introduction

This profile is used to represent de-identified RelatdPerson information. The de-identification process has to remove all data elements not explicitly identified as "SUPPORTED" in the profile. 

The [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf) is to be followed to ensure appropriate level of de-identification is performed.

In FHIR Resources, text elements and reference.display elements which provide human readable information to the providers may be generated using programs and tools from the data present within the resource. For e.g a RelatedPerson resource text element may contain information such as the RelatedPerson name. This type of information will enable identification of the individuals. In order to avoid inadvertent revealing of PII/PHI, text elements cannot be included in the De-identified FHIR resource and the submission will be rejected when text elements are present by the validation process. 

**Ids and References**

The original RelatedPerson resource id should not be included in the De-identified RelatedPerson instance. Instead a new id should be created and provided as part of the FHIR resource. This Data Submitter should be capable of using the generated id to relink the data to the original RelatedPerson. All resource references to the RelatedPerson submitted as part of the UDS+ report should refer to newly generated id.

Resource references cannot contain text element as it may contain PHI/PII. The text element for following references are not allowed

* patient

**Examples**
 
Examples of identifiable data and its corresponding de-identifiable data is present in [Reporting Guidance](reportingguidance.html).



---

// File: input/pagecontent/StructureDefinition-uds-plus-adverseevent-intro.md



### Introduction

This profile is used to represent de-identified AdverseEvent information. The de-identification process has to remove all data elements not explicitly identified as "SUPPORTED" in the profile. 

The [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf) is to be followed to ensure appropriate level of de-identification is performed.

According to the HHS guidance, dates should not have a precision of more than the year. This means month and day cannot be included. This includes AdverseEvent.recorded and date elements.

In FHIR Resources, text elements and reference.display elements which provide human readable information to the providers may be generated using programs and tools from the data present within the resource. For e.g a AdverseEvent resource text element may contain information such as the AdverseEvent dates, patient information. This type of information will enable identification of the individuals. In order to avoid inadvertent revealing of PII/PHI, text elements cannot be included in the De-identified FHIR resource and the submission will be rejected when text elements are present by the validation process.  

**Ids and References**

The original AdverseEvent resource id should not be included in the De-identified AdverseEvent instance. Instead a new id should be created and provided as part of the FHIR resource. The Data Submitter should be capable of using the generated id to relink the data to the original AdverseEvent. All resource references to the AdverseEvent submitted as part of the UDS+ report should refer to newly generated id.

Resource references cannot contain text element as it may contain PHI/PII. The text element for following references are not allowed

* subject


**Date Truncation** 

The Data Submitter has to truncate the following dates to only have a precision of year

* date
* recordedDate 




---

// File: input/pagecontent/StructureDefinition-uds-plus-age-extension-intro.md



### Introduction

This extension is used to convey the age of the patient at a specific point in time. 
The [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf) is to be followed to ensure appropriate level of de-identification is performed on the age extension.

According to the HHS guidance, for patients whose age is computed to be greater than 89 the de-identification rule requires it be reported as greater > 90 and not report the specific age. 

{:.stu-note}
The following is new content for 1.1.0

<div class="bg-success" markdown="1">

**Representing Age > 89 **

Since Age is represented as a valueQuantity data type the following method should be used to represent Age > 89. 

	* Age > 89 : use valueQuantity.value to represent 90, units of a and comparator of ">="
	
</div>

---

// File: input/pagecontent/StructureDefinition-uds-plus-allergyintolerance-intro.md



### Introduction

This profile is used to represent de-identified AllergyIntolerance information. The de-identification process has to remove all data elements not explicitly identified as "SUPPORTED" in the profile. 

The [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf) is to be followed to ensure appropriate level of de-identification is performed.

According to the HHS guidance, dates should not have a precision of more than the year. This means month and day cannot be included. This includes AllergyIntolerance.recorded and onset elements.

In FHIR Resources, text elements and reference.display elements which provide human readable information to the providers may be generated using programs and tools from the data present within the resource. For e.g a AllergyIntolerance resource text element may contain information such as the AllergyIntolerance dates, patient information. This type of information will enable identification of the individuals. In order to avoid inadvertent revealing of PII/PHI, text elements cannot be included in the De-identified FHIR resource and the submission will be rejected when text elements are present by the validation process.  

**Ids and References**

The original AllergyIntolerance resource id should not be included in the De-identified AllergyIntolerance instance. Instead a new id should be created and provided as part of the FHIR resource. The Data Submitter should be capable of using the generated id to relink the data to the original AllergyIntolerance. All resource references to the AllergyIntolerance submitted as part of the UDS+ report should refer to newly generated id.

Resource references cannot contain text element as it may contain PHI/PII. The text element for following references are not allowed

* patient


**Date Truncation** 

The Data Submitter has to truncate the following dates to only have a precision of year

* onset
* recordedDate 




---

// File: input/pagecontent/StructureDefinition-uds-plus-clinical-result-observation-intro.md



### Introduction

This profile is used to represent de-identified Observation for Clinical Test Result information. This is typically used in combination with the DiagnoticReport profiles to capture the observations from the clinical tests. The de-identification process has to remove all data elements not explicitly identified as "SUPPORTED" in the profile. 

The [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf) is to be followed to ensure appropriate level of de-identification is performed.

According to the HHS guidance, dates should not have a precision of more than the year. This means month and day cannot be included. This includes Observation for Lab Result.period.

In FHIR Resources, text elements and reference.display elements which provide human readable information to the providers may be generated using programs and tools from the data present within the resource. For e.g a Observation for Clinical Result resource text element may contain information such as the Observation for Clinical Result date, patient information. This type of information will enable identification of the individuals. In order to avoid inadvertent revealing of PII/PHI, text elements cannot be included in the De-identified FHIR resource and the submission will be rejected when text elements are present by the validation process.  

**Ids and References**

The original Observation for Clinical Result resource id should not be included in the De-identified Observation for Clinical Result instance. Instead a new id should be created and provided as part of the FHIR resource. The Data Submitter should be capable of using the generated id to relink the data to the original Observation for Lab Result. All resource references to the Observation for Clinical Result submitted as part of the UDS+ report should refer to newly generated id.

Resource references cannot contain text element as it may contain PHI/PII. The text element for following references are not allowed

* subject
* encounter


**Date Truncation** 

The Data Submitter has to truncate the following dates to only have a precision of year

* effective[x] 




---

// File: input/pagecontent/StructureDefinition-uds-plus-coverage-intro.md



### Introduction

This profile is used to represent de-identified Coverage information. The de-identification process has to remove all data elements not explicitly identified as "SUPPORTED" in the profile. 

The [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf) is to be followed to ensure appropriate level of de-identification is performed.

According to the HHS guidance, dates should not have a precision of more than the year. This means month and day cannot be included. This includes Coverage.period.

In FHIR Resources, text elements and reference.display elements which provide human readable information to the providers may be generated using programs and tools from the data present within the resource. For e.g a Coverage resource text element may contain information such as the Coverage date, beneficiary information. This type of information will enable identification of the individuals. In order to avoid inadvertent revealing of PII/PHI, text elements cannot be included in the De-identified FHIR resource and the submission will be rejected when text elements are present by the validation process.  

**Ids and References**

The original Coverage resource id should not be included in the De-identified Coverage instance. Instead a new id should be created and provided as part of the FHIR resource. The Data Submitter should be capable of using the generated id to relink the data to the original Coverage. All resource references to the Coverage submitted as part of the UDS+ report should refer to newly generated id.

Resource references cannot contain text element as it may contain PHI/PII. The text element for following references are not allowed

* beneficiary
* Payor


**Date Truncation** 

The Data Submitter has to truncate the following dates to only have a precision of year

* period 




---

// File: input/pagecontent/StructureDefinition-uds-plus-deidentify-operation-data-urls-parameter-intro.md



### Introduction

This profile is used to represent the input and output parameters for the $deidentify operation of UDSPlus.  


---

// File: input/pagecontent/StructureDefinition-uds-plus-diagnosis-intro.md



### Introduction

This profile is used to represent de-identified diagnosis information. The de-identification process has to remove all data elements not explicitly identified as "SUPPORTED" in the profile. 

The [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf) is to be followed to ensure appropriate level of de-identification is performed.

According to the HHS guidance, dates should not have a precision of more than the year. This means month and day cannot be included. This includes diagnosis dates, visit dates, onset dates etc.

In FHIR Resources, text elements and reference.display elements which provide human readable information to the providers may be generated using programs and tools from the data present within the resource. For e.g a Condition resource text element may contain information such as the visit date, onset date. This type of information will enable identification of the individuals. In order to avoid inadvertent revealing of PII/PHI, text elements cannot be included in the De-identified FHIR resource and the submission will be rejected when text elements are present by the validation process.  

**Ids and References**

The original Condition resource id should not be included in the De-identified condition instance. Instead a new id should be created and provided as part of the FHIR resource. This Data Submitter should be capable of using the generated id to relink the data to the original Condition. All resource references to the Condition submitted as part of the UDS+ report should refer to newly generated id.

Resource references cannot contain text element as it may contain PHI/PII. The text element for following references are not allowed

* subject
* encounter


**Date Truncation** 

The Data Submitter has to truncate the following dates to only have a precision of year

* onsetDate
* abatementDate
* recordedDate 

**Examples**

Examples of identifiable data and its corresponding de-identifiable data is present in [Reporting Guidance](reportingguidance.html).



---

// File: input/pagecontent/StructureDefinition-uds-plus-encounter-intro.md


### Introduction

This profile is used to represent de-identified Encounter information. The de-identification process has to remove all data elements not explicitly identified as "SUPPORTED" in the profile. 

The [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf) is to be followed to ensure appropriate level of de-identification is performed.

According to the HHS guidance, dates should not have a precision of more than the year. This means month and day cannot be included. This includes diagnosis dates, visit dates, onset dates etc.

In FHIR Resources, text elements and reference.display elements which provide human readable information to the providers may be generated using programs and tools from the data present within the resource. For e.g a Encounter resource text element may contain information such as the visit date. This type of information will enable identification of the individuals. In order to avoid inadvertent revealing of PII/PHI, text elements cannot be included in the De-identified FHIR resource and the submission will be rejected when text elements are present by the validation process. 

**Age Computation** 

The Data Submitter has to compute the age using the visit date of the encounter to be included in the UDS+ report.

**Capturing Location Information**

The Encounter.location.location points to a Location Resource.  The Location.type element can be used to indicate the type of location where the service was provided. The existing Location.type value set can be used to indicate that the service was provided in a SCHOOL based setting. This will be used to compute Table 4, LINE 24 of the UDS Report. For Table 4, Line 26 use the public-housing code defined in UDS+ value set that is referenced in the UDS+ Location profile.

**Ids and References**

The original Encounter resource id should not be included in the De-identified Encounter instance. Instead a new id should be created and provided as part of the FHIR resource. This Data Submitter should be capable of using the generated id to relink the data to the original Encounter. All resource references to the Encounter submitted as part of the UDS+ report should refer to newly generated id.

Resource references cannot contain text element as it may contain PHI/PII. The text element for following references are not allowed

* subject
* reasonReference


**Date Truncation** 

The Data Submitter has to truncate the following dates to only have a precision of year

* period and its sub elements.
* participant.period

{:.stu-note}
The following is new content for 1.1.0

<div class="bg-success" markdown="1">

**Guidance on Encounter reason**

The Encounter resource can represent a reason using either a code with Encounter.reasonCode, or a reference with Encounter.reasonReference to Condition or other resource.

* Although both are marked as Must Support, servers are not required to support both a code and a reference, but they SHALL support at least one of these elements.

**Guidance on Encounter.serviceProvider** 

The Encounter.serviceProvider organization reference should point to the Organization resource that represents the FQHC which is responsible for rendering the services to the Patient.

</div>

**Examples**
 
Examples of identifiable data and its corresponding de-identifiable data is present in [Reporting Guidance](reportingguidance.html).



---

// File: input/pagecontent/StructureDefinition-uds-plus-immunization-intro.md



### Introduction

This profile is used to represent de-identified Immunization information. The de-identification process has to remove all data elements not explicitly identified as "SUPPORTED" in the profile. 

The [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf) is to be followed to ensure appropriate level of de-identification is performed.

According to the HHS guidance, dates should not have a precision of more than the year. This means month and day cannot be included. This includes Immunization.occurenceDateTime.

In FHIR Resources, text elements and reference.display elements which provide human readable information to the providers may be generated using programs and tools from the data present within the resource. For e.g a Immunization resource text element may contain information such as the Immunization date, patient information. This type of information will enable identification of the individuals. In order to avoid inadvertent revealing of PII/PHI, text elements cannot be included in the De-identified FHIR resource and the submission will be rejected when text elements are present by the validation process.  

**Ids and References**

The original Immunization resource id should not be included in the De-identified Immunization instance. Instead a new id should be created and provided as part of the FHIR resource. The Data Submitter should be capable of using the generated id to relink the data to the original Immunization. All resource references to the Immunization submitted as part of the UDS+ report should refer to newly generated id.

Resource references cannot contain text element as it may contain PHI/PII. The text element for following references are not allowed

* patient


**Date Truncation** 

The Data Submitter has to truncate the following dates to only have a precision of year

* occurence[x]
* recorded 




---

// File: input/pagecontent/StructureDefinition-uds-plus-import-manifest-intro.md



### Introduction

This profile is used to represent the manifest file information that is submitted to the $import operation.  

**Representing Health Center Information**

Health Centers have to provide the following information as part of the manifest.

* UEI Number:  Unique Entity Identifier (UEI) is a unique number assigned by SAM (System for Awards Management) to all entities who register to do business with the federal government.

* Grant Number: This is comprised of the activity code and the serial number for the particular grant. This number, once assigned does not change for the life of the grant. The activity code which is used to form the static grant number is the activity code which the grant is currently tied to.  When a new grant is created, the static Grant Number now gets populated from within the code. Examples of grant numbers include "H80CS##### and LALCS#####" where the [#####] is substituted with the actual value.

* Health Center Contact Person has to be provided with a First and Last Name.

* Health Center Address has to be provided. 

* Health Center Contact phone number has to be provided. 

**Providing Security Tokens**

A Health Center may wish to make sure that the HRSA Data Receiver provide a security token during the download of the UDS Plus data. In order to facilitate these tokens, the Data Submitter may echo a "security token" of type "bearer" in the manifest file for each UDS Plus file that needs to be downloaded. This bearer token will be echo'ed back by the Data Receiver in the HTTP header during the download process. This further enhances the security protocols between the Data Submitter and the Data Receiver systems. 

{:.stu-note}
The following is new content for 1.1.0

<div class="bg-success" markdown="1">

**Submitting data for multiple sites and/or EHRs that are part of a Health Center**

There are many instances where a Health Center may be using one or more EHR technology and would like to submit data individually from each EHR separately and let HRSA aggregate the data for the Health Center. In addition, some Health Centers report data by sites where services are rendered. The Manifest file submitted to the [$import](OperationDefinition-import.html) operation provides the following data elements to properly identify these scenarios during the submission.

***partialSubmission attribute in Manifest***

The partialSubmission attribute should be included in the Manifest file and set to a value of "true" for the following scenarios:

 * Health Center will be submitting data from multiple EHRs independent of each other but HRSA has to aggregate the data across the submissions for the final counts.
 * Health Center will be submitting data from multiple sites where services are rendered independent of each other but HRSA has to aggregate the data across the submissions for the final counts.
 
 The partialSubmission flag of "true" indicates to HRSA that there will be multiple submissions using the same "grantNumber". After the submission period, HRSA will aggregate the multiple submissions and provide feedback on the submitted data. Health Centers do not have to include this attribute if there is only one submission from the Health Center. 
 
 ***Re-submissions of the data***
 
 If a Health Center wishes to resubmit data, then the replaceSubmissionId attribute has to be included and has to contain the previous submissionId which this submission is replacing.
 
 ***Relationship between partialSubmission and Re-Submission***
 
 A submission can be tagged as a partial submission and also as a replacement to a previous submission.
 
 ***IncrementalData Flag***
 
Sometimes, a submission may have errors with a small set of records in which case, the entire submission need not be resubmitted.The DataSubmitters can submit only the corrected records and indicate to the Data Receiver to replace only the subset of the records. When the incrementalData flag is set, the replaceSubmissionId has to be populated. 

The DataReceiver performs the following activities:

* Finds the original submission based on the replaceSubmissionId 
* Finds the records using the FHIR Resource Ids.
* Replace the data for the records 
* If the records are not found, then the records are added into the submission
* Perform validation of the modified submission and report the success or failures/errors.

NOTE: Incremental submissions will be accepted in the future. It is included in this version of the IG to collect feedback from the vendor community of the approach.

</div>



---

// File: input/pagecontent/StructureDefinition-uds-plus-lab-observation-intro.md



### Introduction

This profile is used to represent de-identified Observation for Lab Result information. The de-identification process has to remove all data elements not explicitly identified as "SUPPORTED" in the profile. 

The [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf) is to be followed to ensure appropriate level of de-identification is performed.

According to the HHS guidance, dates should not have a precision of more than the year. This means month and day cannot be included. This includes Observation for Lab Result.period.

In FHIR Resources, text elements and reference.display elements which provide human readable information to the providers may be generated using programs and tools from the data present within the resource. For e.g a Observation for Lab Result resource text element may contain information such as the Observation for Lab Result date, patient information. This type of information will enable identification of the individuals. In order to avoid inadvertent revealing of PII/PHI, text elements cannot be included in the De-identified FHIR resource and the submission will be rejected when text elements are present by the validation process.  

**Ids and References**

The original Observation for Lab Result resource id should not be included in the De-identified Observation for Lab Result instance. Instead a new id should be created and provided as part of the FHIR resource. The Data Submitter should be capable of using the generated id to relink the data to the original Observation for Lab Result. All resource references to the Observation for Lab Result submitted as part of the UDS+ report should refer to newly generated id.

Resource references cannot contain text element as it may contain PHI/PII. The text element for following references are not allowed

* subject
* encounter


**Date Truncation** 

The Data Submitter has to truncate the following dates to only have a precision of year

* effective[x] 




---

// File: input/pagecontent/StructureDefinition-uds-plus-medicationrequest-intro.md



### Introduction

This profile is used to represent de-identified MedicationRequest information. The de-identification process has to remove all data elements not explicitly identified as "SUPPORTED" in the profile. 

The [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf) is to be followed to ensure appropriate level of de-identification is performed.

According to the HHS guidance, dates should not have a precision of more than the year. This means month and day cannot be included. This includes MedicationRequest.authoredOn.

In FHIR Resources, text elements and reference.display elements which provide human readable information to the providers may be generated using programs and tools from the data present within the resource. For e.g a MedicationRequest resource text element may contain information such as the MedicationRequest date, patient information. This type of information will enable identification of the individuals. In order to avoid inadvertent revealing of PII/PHI, text elements cannot be included in the De-identified FHIR resource and the submission will be rejected when text elements are present by the validation process.  

**Ids and References**

The original MedicationRequest resource id should not be included in the De-identified MedicationRequest instance. Instead a new id should be created and provided as part of the FHIR resource. The Data Submitter should be capable of using the generated id to relink the data to the original MedicationRequest. All resource references to the MedicationRequest submitted as part of the UDS+ report should refer to newly generated id.

Resource references cannot contain text element as it may contain PHI/PII. The text element for following references are not allowed

* subject
* encounter


**Date Truncation** 

The Data Submitter has to truncate the following dates to only have a precision of year

* authoredOn 




---

// File: input/pagecontent/StructureDefinition-uds-plus-medicationstatement-intro.md



### Introduction

This profile is used to represent de-identified MedicationStatement information. The de-identification process has to remove all data elements not explicitly identified as "SUPPORTED" in the profile. 

The [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf) is to be followed to ensure appropriate level of de-identification is performed.

According to the HHS guidance, dates should not have a precision of more than the year. This means month and day cannot be included. This includes MedicationStatement.authoredOn.

In FHIR Resources, text elements and reference.display elements which provide human readable information to the providers may be generated using programs and tools from the data present within the resource. For e.g a MedicationStatement resource text element may contain information such as the MedicationStatement date, patient information. This type of information will enable identification of the individuals. In order to avoid inadvertent revealing of PII/PHI, text elements cannot be included in the De-identified FHIR resource and the submission will be rejected when text elements are present by the validation process.  

**Ids and References**

The original MedicationStatement resource id should not be included in the De-identified MedicationStatement instance. Instead a new id should be created and provided as part of the FHIR resource. The Data Submitter should be capable of using the generated id to relink the data to the original MedicationStatement. All resource references to the MedicationStatement submitted as part of the UDS+ report should refer to newly generated id.

Resource references cannot contain text element as it may contain PHI/PII. The text element for following references are not allowed

* subject
* encounter


**Date Truncation** 

The Data Submitter has to truncate the following dates to only have a precision of year

* effective[x]
* dateAsserted 




---

// File: input/pagecontent/StructureDefinition-uds-plus-observation-intro.md

{:.stu-note}
The following is new content for 1.1.0

<div class="bg-success" markdown="1">

### Introduction

This profile is used to represent de-identified Observation for Assessments, Physical Exams, Assessment and Social History information. The de-identification process has to remove all data elements not explicitly identified as "SUPPORTED" in the profile. 

The [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf) is to be followed to ensure appropriate level of de-identification is performed.

According to the HHS guidance, dates should not have a precision of more than the year. This means month and day cannot be included. This includes Observation for Lab Result.period.

In FHIR Resources, text elements and reference.display elements which provide human readable information to the providers may be generated using programs and tools from the data present within the resource. For e.g a Observation for Lab Result resource text element may contain information such as the Observation for Lab Result date, patient information. This type of information will enable identification of the individuals. In order to avoid inadvertent revealing of PII/PHI, text elements cannot be included in the De-identified FHIR resource and the submission will be rejected when text elements are present by the validation process.  

**Ids and References**

The original Observation for Lab Result resource id should not be included in the De-identified Observation for Lab Result instance. Instead a new id should be created and provided as part of the FHIR resource. The Data Submitter should be capable of using the generated id to relink the data to the original Observation for Lab Result. All resource references to the Observation for Lab Result submitted as part of the UDS+ report should refer to newly generated id.

Resource references cannot contain text element as it may contain PHI/PII. The text element for following references are not allowed

* subject
* encounter


**Date Truncation** 

The Data Submitter has to truncate the following dates to only have a precision of year

* effective[x] 

</div>


---

// File: input/pagecontent/StructureDefinition-uds-plus-patient-reporting-parameters-intro.md



### Introduction

This profile is used to represent the applicability of the patient data for each report. In other words, the reporting parameters profile is used to convey if a patient should be considered as part of a specific report. One instance of this is expected to be created for each patient that is part of the patient.ndjson file.

**Funding Streams**

Since the patient data may be applicable to multiple funding streams, an attribute called "combinedFundingStreams" has been added to the Reporting Parameters profile. This string is expected to contain the various funding streams to which this patient is applicable. The attribute will contain a comma separated list of all the funding streams. For e.g a Patient who is part of the CHC and MHC funding streams will contain the string "CHC,MHC" in the combindedFundingStreams data element. The list of funding streams allowed are 

* CHC - Community Health Center  
* MHC - Migrant Health Center 
* HCH - Healthcare for the Homeless
* PHPC - Public Housing Primary Care

**Report Names**

The reportNames attribute contains the information that links the patient to the different UDS Plus reports. 

For e.g A Patient who is part of "table6B-Line11-Cervical-Cancer-Screening-CMS124" quality measure will have the valueBoolean set to true for the corresponding line item. For the same patient if the data does not apply to "table6B-Line11a-Breast-Cancer-Screening-CMS125" report, then the valueBoolean will be set to false. This is applicable to all measures and tables specified in the UDS Manual.


{:.stu-note}
The following is new content for 1.1.0

<div class="bg-success" markdown="1">

**eCQM/Quality Measure Flags in Reporting Parameters** 

The Reporting Parameters profile below is used to indicate which Patients have to be considered for the measure calculations. For CMS 117 this is performed as follows:

In the Parameters resource the CMS 117 is identified by the Parameter.part.name = "table6B-Line10-Childhood-Immunization-Status-CMS117".

For the same part element (table6B-Line10-Childhood-Immunization-Status-CMS117) if the Parameter.part.value[x] is true, then the Patient referenced in the value[x] for the part Paremeter.part.name = "patientReference" is considered for the computation of the measure. In other words a true indicates that the patient has met the Initial Patient Population criteria. A value of false for the measure indicates that the Patient's data would not be used in the computation of the measure. 

In the initial stages of UDS+ adoption, it is extremely valuable for both Health Centers and HRSA to determine if the counts calculated by the Health Center are same as the counts calculated by HRSA for the same measure. In order to facilitate this cross-verification process, the Reporting Parameters resource has been enhanced so that vendors can indicate if a Patient is part of the numerator, denominator etc. This is an optional capability which vendors can leverage to supply the additional detail to aid in cross-verification. 

The new capability allows the Health Centers to identify if the patient is part of:

* Denominator (den), An example for CMS 117 is designated as table6B-Line10-Childhood-Immunization-Status-CMS117-den in the name field.
* Denominator Exceptions (denexp),  An example for CMS 117 is designated as table6B-Line10-Childhood-Immunization-Status-CMS117-denexp in the name field.
* Denominator Exclusions (denexcl),   An example for CMS 117 is designated as table6B-Line10-Childhood-Immunization-Status-CMS117-denexcl in the name field.
* Numerator (num),  An example for CMS 117 is designated as table6B-Line10-Childhood-Immunization-Status-CMS117-num in the name field.
* Numerator Excpetions (numexcp),  An example for CMS 117 is designated as table6B-Line10-Childhood-Immunization-Status-CMS117-numexp in the name field.
* Numerator Exclusions (numexcl),  An example for CMS 117 is designated as table6B-Line10-Childhood-Immunization-Status-CMS117-numexcl in the name field.



</div>

**Partial Submission Option**

For partial submission requirements, please refer to the [Partial Submission Requirements](spec.html#data-submitter-requirements)



---

// File: input/pagecontent/StructureDefinition-uds-plus-procedure-intro.md



### Introduction

This profile is used to represent de-identified Procedure information. The de-identification process has to remove all data elements not explicitly identified as "SUPPORTED" in the profile. 

The [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf) is to be followed to ensure appropriate level of de-identification is performed.

According to the HHS guidance, dates should not have a precision of more than the year. This means month and day cannot be included. This includes Procedure.occurenceDateTime.

In FHIR Resources, text elements and reference.display elements which provide human readable information to the providers may be generated using programs and tools from the data present within the resource. For e.g a Procedure resource text element may contain information such as the Procedure date, patient information. This type of information will enable identification of the individuals. In order to avoid inadvertent revealing of PII/PHI, text elements cannot be included in the De-identified FHIR resource and the submission will be rejected when text elements are present by the validation process.  

**Ids and References**

The original Procedure resource id should not be included in the De-identified Procedure instance. Instead a new id should be created and provided as part of the FHIR resource. The Data Submitter should be capable of using the generated id to relink the data to the original Procedure. All resource references to the Procedure submitted as part of the UDS+ report should refer to newly generated id.

Resource references cannot contain text element as it may contain PHI/PII. The text element for following references are not allowed

* subject
* encounter


**Date Truncation** 

The Data Submitter has to truncate the following dates to only have a precision of year

* performedDateTime 
* extension.recordedDate



---

// File: input/pagecontent/StructureDefinition-uds-plus-servicerequest-intro.md


### Introduction

This profile is used to represent de-identified ServiceRequest information. The de-identification process has to remove all data elements not explicitly identified as "SUPPORTED" in the profile. 

The [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf) is to be followed to ensure appropriate level of de-identification is performed.

According to the HHS guidance, dates should not have a precision of more than the year. This means month and day cannot be included. This includes ServiceRequest.occurenceDateTime.

In FHIR Resources, text elements and reference.display elements which provide human readable information to the providers may be generated using programs and tools from the data present within the resource. For e.g a ServiceRequest resource text element may contain information such as the ServiceRequest date, patient information. This type of information will enable identification of the individuals. In order to avoid inadvertent revealing of PII/PHI, text elements cannot be included in the De-identified FHIR resource and the submission will be rejected when text elements are present by the validation process.  

**Ids and References**

The original ServiceRequest resource id should not be included in the De-identified ServiceRequest instance. Instead a new id should be created and provided as part of the FHIR resource. The Data Submitter should be capable of using the generated id to relink the data to the original ServiceRequest. All resource references to the ServiceRequest submitted as part of the UDS+ report should refer to newly generated id.

Resource references cannot contain text element as it may contain PHI/PII. The text element for following references are not allowed

* subject
* encounter


**Date Truncation** 

The Data Submitter has to truncate the following dates to only have a precision of year

* authoredOn 



---

// File: input/pagecontent/StructureDefinition-uds-plus-sexual-orientation-observation-intro.md



### Introduction

This profile is used to represent de-identified sexual orientation information. The de-identification process has to remove all data elements not explicitly identified as "SUPPORTED" in the profile. 

The [HHS De-identification Guidance](https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/understanding/coveredentities/De-identification/hhs_deid_guidance.pdf) is to be followed to ensure appropriate level of de-identification is performed.

In FHIR Resources, text elements and reference.display elements which provide human readable information to the providers may be generated using programs and tools from the data present within the resource. For e.g a Sexual Orientation Observation resource text element may contain Patient information such as names. This type of information will enable identification of the individuals. In order to avoid inadvertent revealing of PII/PHI, text elements cannot be included in the De-identified FHIR resource and the submission will be rejected when text elements are present by the validation process. 

**Ids and References**

The original Observation resource id should not be included in the De-identified Observation instance. Instead a new id should be created and provided as part of the FHIR resource. This Data Submitter should be capable of using the generated id to relink the data to the original Income Observation. All resource references to the Sexual Orientation Observation submitted as part of the UDS+ report should refer to newly generated id.

Resource references cannot contain text element as it may contain PHI/PII. The text element for following references are not allowed

* subject




---

// File: input/pagecontent/usecases.md

### Business Need and User Stories
The section identifies the business needs and specific user stories for UDS+ reporting.

#### Use Case Goals
Each calendar year, HRSA Health Center Program awardees and look-alikes are required to report a core set of information, including data on patient characteristics, services provided, clinical processes and health outcomes, patients' use of services, staffing, costs, and revenues as part of a standardized reporting system known as the Uniform Data System (UDS). The UDS is a standard data set that is reported annually and provides consistent information about health centers. It is the source of unduplicated data for the entire scope of services included in the grant or designation for the calendar year. HRSA uses UDS data to assess the impact and performance of the Health Center Program, and to promote data-driven quality improvement.

The goals of the use case is to transmit de-identified patient information to HRSA as part of the annual health center submission. The intent is to provide access to data not currently available through aggregate data reporting. The use case will help assess how to address the gaps in workflow and triggers, and the ability to leverage HL7 FHIR APIs to address HRSA business needs.

#### Problem Statement

Presently health centers submit UDS data using a tabular format. The submitted data is aggregated at sites and submitted to HRSA using different mechanisms such as uploading files to a portal, submitting via SFTP.The Bureau of Primary Health Care (BPHC) will transition much of the UDS from aggregate data to de-identifeid patient-level data by 2023. The 

The following are some of the challenges which need to be addressed:
* Identification of the patient population whose data needs to be submitted
* Lack of support for the data elements required by HRSA using FHIR APIs
* Data is present in multiple systems within the health centers and may require aggregation prior to submitting data to HRSA.

#### Goals of the Use Case

The goal of the use case is to 

* Enable de-identified patient data submission from health centers to HRSA using FHIR APIs
* Enable aggregate data submission from health centers to HRSA using FHIR APIs
* Enable quality measure data submission from health centers to HRSA using FHIR APIs

##### Scope of the Use Case

**In-Scope**

The following requirements are in-scope for the IG.

* Collect data from health centers that receive federal award funds (“awardees”) under the Health Center Program authorized by section 330 of the Public Health Service (PHS) Act (42 U.S.C. 254b) (“section 330”), as amended (including sections 330(e), (g), (h), and (i))

* Collect data from health centers considered Health Center Program look-alikes. Look-alikes DO NOT receive regular federal funding under section 330 of the PHS Act (although they may receive funding during public health emergencies, such as COVID-19), but meet the Health Center Program requirements for designation under the program (42 U.S.C. 1395x(aa)(4)(A)(ii) and 42 U.S.C. 1396d(l)(2)(B)(ii)).

* Collect data from health centers funded under the Health Resources and Services Administration’s (HRSA) Bureau of Health Workforce (BHW)

* Define the requirements for a health center to create and transmit a UDS+ report to HRSA

* Identify the data elements to be retrieved from the Data Sources (e.g., EHRs, Data Warehouses etc) to produce reports

**Out-of-Scope**

* Changes to existing provider workflow or existing data entry mechanisms
* Policies of the clinical care setting to collect consent for data sharing

 
#### **User Story #1: Health Center initiates data submission to HRSA using FHIR APIs ** 

At the end of the calendar year, a health center which is a HRSA awardee, has to submit the UDS+ report. The health center uses an EHR as the Data Source for all its data capture, storage and reporting. The Data Source is a certified EHR system and supports the FHIR APIs outlined in Cures Act including Bulk API for exporting data for a population.In order to perform the reporting, the health center identifies the list of all the patients who have availed services that need to be reported to HRSA and creates a Group using the certified FHIR APIs. (Note: For some health centers, it may be all the patients and for others it could be sub-set of the patients). Once the population is identified, the health center extracts the UDS+ data for the patients from the Data Sources (e.g., EHRs) and then de-identifies the data and prepares the data to be submitted in a standard FHIR format. The health center then notifies HRSA about the data readiness and submits the data to HRSA using FHIR APIs.


#### UDS+ Data Submission Workflow using FHIR 

The following is a diagram of the workflow for UDS+ reporting using FHIR APIs 

{% include img.html img="uds-plus-reporting-fhir-workflow.png" caption="Figure 2.1 - UDS+ Reporting Workflow using FHIR" %}

<br/>

The description of each step in the above interaction is outlined below:

* Step 1: On an annual basis, the health center kicks off UDS+ reporting job using the Data Submitter. This job initiates an extraction from the data source.

**Implementation Note** This step is expected to be kicked off by the Health Center or the EHR vendor using a scheduled job or a cron job or a timer. This job will initiate a [Bulk Data Export](http://hl7.org/fhir/uv/bulkdata/OperationDefinition-group-export.html) request from the EHR for the UDS Plus Group.


* Step 2: The Data Submitter polls the Data Source to check if the extraction has completed. 

**Implementation Note** This step is performed using the [Bulk Data Status Request]({{site.data.fhir.ver.bulkig}}/export.html#bulk-data-status-request).

* Step 3: The Data Source provides the extracted data in an identified form by storing them in the Bulk Data Storage.

**Implementation Note** This step is implemented by the EHR based on their internal implementation on how and where to store the data for download. Once the data is stored the links are submitted to the Data Submitter for download. 

* Step 4: The Data Submitter checks completion status and gets notified of the data extracted. 

**Implementation Note** This step is performed using the [Bulk Data Status Request]({{site.data.fhir.ver.bulkig}}/export.html#bulk-data-status-request).

* Step 5: The Data Submitter accesses the data from the Bulk Data Storage.

**Implementation Note** This step is happening within the environment (behind the firewall) of the Health Center and the data is downloaded using the [Bulk Data File Request]({{site.data.fhir.ver.bulkig}}/export.html#file-request)

* Step 6: The Data Submitter submits the data for de-identification to the Trust Service Provider.

**Implementation Note** This step is performed by the Data Submitter by invoking the de-identify operation of the [Trust Service Provider](spec.html#trust-service-provider-requirements)

* Step 7: The Trust Service Provider submits the de-identified data back to the Data Submitter.

* Step 8: The Data Submitter persists the data for HRSA in a Bulk Data Storage and creates links for HRSA to download the data.

**Implementation Note** This data may be persisted outside of the EHR environment or within the EHR environment depending on the EHR. 

* Step 9: The Data Submitter notifies the Data Receiver (HRSA) about the readiness of the data and provides the secured links to the Data Receiver for download. The Data Submitter provides a Content Location that can be polled by the Data Submitter to check on the status of the data submission.

**Implementation Note** The Data Submitter creates the [Manifest file](StructureDefinition-uds-plus-import-manifest.html) and then notifies the HRSA system of the availability of the files using the [$import](OperationDefinition-import.html) operation. The Data Receiver creates a Content Location where the status of the upload is updated as the download progresses. The status fields will provide one of the following values "submitted, inprogress, completed, failed".

* Step 10a: The Data Receiver downloads the data from the health center Bulk Data Storage and then proceeds with downstream processing. 

**Implementation Note** The Data Receiver downloads the bulk files using the appropriate protocols and authorization. Currently this is done with HTTP protocols and using secured signed links. 

* Step 10b: The Data Submitter polls the Content Location provided in Step 9, to check on the status of the submission.  

**Implementation Note** The Data Receiver provides an update on the status of the submission and may include a list of errors and warnings for the submission. If the submission status is failed, the Data Submitter has to re-submit the data after addressing the errors provided by the Data Receiver. 

#### Alternative Approaches for Steps 1 through 8

The proposed solution above leverages already existing standards implemented by CEHRT systems namely the Bulk API Group Export and the US Core profiles. However implementations may choose to use other methods to export data and de-identify the data. Health Centers and their technology vendors may choose any other method to export the necessary data from the data source and may use any algorithm to de-identify the data. Usage of the above workflow enables more standardization over time within the health center and less dependence of proprietary solutions for creating the UDS+ report.  

#### Resubmissions of UDS+ reports

Health Centers from time to time may submit a UDS+ report that is erroneous in terms of 

* Data
* Links
* Conformance to the IG 

In some or all of the above cases, the Data Receiver will submit a list of errors in the submission. These errors need to be addressed by the Health Center and then resubmit the UDS+ report. Within the allowed reporting timeframe, a health center may resubmit the report multiple times. The resubmission should be a full data set resubmission. All submissions prior to the latest submission will be discarded and will not be considered for Health Center UDS+ reporting. 


#### UDS+ Actors/Systems and Definitions

The following actors and definitions are used by the UDS+ use cases. 

**Data Sources** The Data Source is a software system that is used to capture and store the patients electronic medical record which contains information such as patient demographics, medications, procedures, allergies, diagnosis, problems etc. Examples of Data Sources include EHRs, Data Warehouses etc. The Data Source is responsible for providing interfaces to extract patient data.
 
**Data Receiver** The Data Receiver is the HRSA organization. The data receiver is responsible for receiving the health center data, validate it and transform it for consumption by HRSA systems.

**Data Submitter** The Data Submitter system is responsible for extracting the data for the patients whose data need to be submitted to HRSA, de-identify the data and then notify about the readiness of the data to the Data Receiver. 

**Trust Service Provider** The Trust Service Provider actor provides an API for de-identifying the patient data and creating the necessary linkages across the resources. 


#### UDS+ Deployment Configurations 

This section identifies how a health center may deploy the various UDS+ actors and systems and combine or split them for efficiency. 

##### Data Source, Data Submitter and Trust Service Provider are combined in a single system

In this scenario a Data Source (e.g., Certified EHR) may implement the required functionality to support UDS+ reporting completely and may not require any additional systems. This deployment option is shown in the figure below 
 
{% include img.html img="combined-actor-deployment.png" caption="Figure 2.3 - Data Source implementing both Data Submitter and Trust Service Provider to support UDS+ reporting" %}

Health Centers are advised to coordinate with their Data Source (e.g., EHR) vendors to understand their existing capabilities and determine if this option is available.

##### Data Source provided de-identified data

In this scenario a Data Source (e.g., Certified EHR) may implement the required functionality to support UDS+ reporting by extracting the necessary data in a de-identified form. In this deployment, the Health Center has to use a different system to act as the Data Submitter which receives the de-identified data extracts and then submits the data to HRSA. This deployment option is shown in the figure below 
 
{% include img.html img="data-source-plus-trust-deployment.png" caption="Figure 2.4 - Data Source implementing  Trust Service Provider to support UDS+ reporting" %}

Health Centers are advised to coordinate with their Data Source (e.g., EHR) vendors to understand their existing capabilities and determine if this option is available.
 
##### Data Source and Data Submitter combined but requires an external Trust Service Provider 

In this scenario a Data Source (e.g., Certified EHR) may implement the required functionality to support UDS+ reporting by extracting the necessary data and is capable of submitting the data to HRSA. However the Data Source may not be able to de-identify the data and may require an external service to de-identify the data. In this deployment, the Health Center has to use a different system to de-identify the data and then provide the data back to the Data Source/Data Submitter. This deployment option is shown in the figure below 
 
{% include img.html img="data-source-plus-data-submitter-deployment.png" caption="Figure 2.5 - Data Source implementing Data Submitter to support UDS+ reporting" %}

Health Centers are advised to coordinate with their Data Source (e.g., EHR) vendors to understand their existing capabilities and determine if this option is available.
 
 

---

// File: input/data/features.yml

---
feedback:
  - active: true
    dashboard:
      label: New Issue
      url: https://github.com/drajer-health/uds-plus/issues/new
  - active: true
    dashboard:
      label: Issues
      url: https://github.com/drajer-health/uds-plus/issues

---

