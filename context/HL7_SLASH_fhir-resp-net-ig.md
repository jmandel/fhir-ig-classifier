// File: input/pagecontent/credits.md

### Credits

#### Primary authors:

* Nagesh Bashyam (Drajer LLC)
* Becky Angeles (Carradora Health Inc)
* Brett Marquard (Wave One Assocaites)

#### Project leads and subject matter experts (SMEs) – U.S. Centers for Disease Control and Prevention (CDC):

##### Primary Lead:

* Carrie Reed

##### RESP-NET SMEs:

* Alissa O'Halloran 
* Catherine Bozio
* Shikha Garg
 
##### MedMorph Project Lead:
* Maria Michaels

##### Electronic Case Reporting SME:

* Laura Conn 

##### Project management and coordination:

* Mike Flanigan (Carradora Health Inc)

##### Technical Expert Panel Members (Represented Organizations):

* Colorado Department of Public Health and Environment
* Georgia Department of Health
* Georgia Emerging Infections Program
* HealthLab
* Indiana Epidemiology Resource Center
* Mount Sinai, Icahn School of Medicine
* NC State University, Department of Industrial and Systems Engineering
* New Mexico Department of Health
* New York State Department of Health
* Oregon Health Authority
* RTI International
* Tennessee Emerging Infections Program
* University of Mississippi Medical Center
* U.S. Centers for Disease Control and Prevention (CDC)
* U.S. Office of the National Coordinator for Health Information Technology (ONC)
* Yale

##### MedMorph FHIR Connectathon Testing Organizations:

* Alphora (formerly Data Consulting Group [DCG])
* Altarum
* California Cancer Registry
* Cerner Sandbox
* College of American Pathologists (CAP)
* eHealth Exchange
* Epic Sandbox
* mTuitive
* U.S. Centers for Disease Control and Prevention (CDC)

Our thanks to these and to the many others not explicitly listed who contributed their time, enthusiasm, and expertise to this work.


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

// File: input/pagecontent/spec.md

This section defines the specific requirements for systems wishing to conform to actors specified in this Respiratory Virus Hospitalization Surveillance Network (RESP-NET) Content Implementation Guide (IG). The specification focuses on using the Health Data Exchange App (HDEA), Making Electronic Data More available for Research and Public Health's (MedMorph) backend services app, to report the data to RESP-NET sites.

### Pre-reading
Before reading this formal specification, implementers should first be familiar with the [Use Cases](usecases.html) page which provides the business context and general process flow.

### Conventions
This IG uses specific terminology to flag statements that have relevance for the evaluation of conformance with the guide:

* **SHALL** indicates requirements that must be met to be conformant with the specification.
* **SHOULD** indicates behaviors that are strongly recommended (and which may result in interoperability issues or sub-optimal behavior if not adhered to), but which do not, for this version of the specification, affect the determination of specification conformance.
* **MAY** describes optional behaviors that are free to consider but where there is no recommendation for or against adoption.

### Claiming Conformance 

Actors and Systems asserting conformance to this IG must implement the requirements outlined in the corresponding capability statements. The following definition of Must Support is to be used in the implementation of the requirements.

#### Must Support Definition

* Systems **SHALL** be capable of populating data elements as specified by the profiles and data elements are returned using the specified APIs in the capability statement.
* Systems **SHALL** be capable of processing resource instances containing the Must Support data elements without generating an error or causing the application to fail. 
* Systems **SHOULD** be capable of displaying the Must Support data elements for human use or storing them for other purposes.
* In situations where information on a particular data element is not present and the reason for absence is unknown, Systems **SHALL NOT** include the data elements in the resource instance returned from executing the API requests.
* When accessing RESP-NET Content IG data, Systems **SHALL** interpret missing data elements within resource instances returned from API requests as data not present.
* When data is not available for any of the mandatory elements specified in the IG, a data absent reason extension should be added to satisfy the requirement along with an appropriate value from the [data-absent-reason value set](http://hl7.org/fhir/ValueSet/data-absent-reason).


### Profiles and Other IGs Used by the Specification
This specification makes significant use of [FHIR profiles]({{site.data.fhir.path}}profiling.html), search parameter definitions, and terminology artifacts to describe the content to be shared as part of RESP-NET Content IG workflows. The IG is based on [FHIR R4]({{site.data.fhir.path}}) and profiles are listed for each interaction.

The full set of profiles defined in this IG can be found by following the links on the [FHIR Artifacts](artifacts.html) page.

#### MedMorph Reference Architecture (RA) IG Usage

This IG leverages the [MedMorph Reference Architecture (RA) IG]({{site.data.fhir.ver.medmorphIg}}/index.html) defined by HL7 Public Health Workgroup (WG) as the reference architecture for automation and implementing the RESP-NET use cases.

#### US Core Usage

This IG leverages the [US Core]({{site.data.fhir.ver.uscoreR4}}) set of profiles defined by HL7 for sharing non-veterinary electronic medical record (EMR) individual health data in the U.S.  Where US Core profiles exist, this IG either leverages them directly or uses them as a base for any additional constraints needed to support the research use cases.  If no constraints are needed, this IG does not define any profiles.

#### Subscriptions Backport IG Usage

This IG leverages the [Subscriptions Backport IG]({{site.data.fhir.ver.subscriptionsIg}}/index.html) defined by HL7 Infrastructure WG for automating reporting workflows using subscriptions.

#### US Public Health Profiles Library (USPHPL) IG Usage

This IG leverages the [US Public Health Profiles Library IG]({{site.data.fhir.ver.uspublichealthprofileslibraryIg}}/index.html) defined by the Public Health WG as a collection of reusable architecture and content profiles representing common public health concepts and patterns. The USPHPL IG is intended to be a complement to US Core used to ease implementation burden of healthcare organizations, electronic health record companies, public health agencies, and others involved in the US public health endeavor.

#### electronic Case Reporting (eCR) IG Usage
This IG leverages the [electronic Case Reporting (eCR) IG]({{site.data.fhir.ver.ecrIg}}/index.html) defined by the Public Health WG specifies the appropriate FHIR resources and transactions needed for the eCR process. FHIR offers opportunities to further enable automated triggering and reporting of cases from EHRs, to ease implementation and integration, to support the acquisition of public health investigation supplemental data, and to connect public health information (e.g., guidelines) with clinical workflows.

### Implementation Requirements

#### SMART App Launch IG Usage

This IG leverages the [SMART App Launch IG]({{site.data.fhir.ver.smartapplaunch}}/index.html) defined by HL7 Infrastructure WG for enabling authentication and authorization between various actors involved in the workflows. This IG leverages Substitutable Medical Applications, Reusable Technologies (SMART) on FHIR Backend Services Authorization requirements.

#### SMART on FHIR Backend Services Requirements

This section outlines how the SMART on FHIR Backend Services Authorization will be used by the RESP-NET Content IG.

* The system actors namely Data Source, HDEA and the Data Receiver are required to use the SMART on FHIR Backend Services Authorization mechanisms as outlined below for the following interactions:


    * HDEA accessing data from the Data Source
    * HDEA posting data to the Data Receiver with FHIR capabilities per the MedMorph RA IG
    

* System actors acting as servers (e.g., Data Source and Data Receiver) **SHALL** advertise conformance to SMART on FHIR Backend Services by hosting Well-Known Uniform Resource Identifiers (URIs) as defined in the [SMART App Launch IG Backend Services]({{site.data.fhir.ver.smartapplaunch}}/backend-services.html) specification.

* System actors acting as servers **SHALL** include token_endpoint, scopes_supported, token_endpoint_auth_methods_supported and token_endpoint_auth_signing_alg_values_supported as defined in the [SMART App Launch IG Backend Services]({{site.data.fhir.ver.smartapplaunch}}/backend-services.html) specification.

* When System actors act as clients (e.g., HDEA), they **SHALL** share their JSON Web Key Set (JWKS) with the server System actors (e.g., Data Source and Data Receiver) using Uniform Resource Locators (URLs) as defined in the [SMART App Launch IG Backend Services]({{site.data.fhir.ver.smartapplaunch}}/backend-services.html) specification.

* System actors acting as clients **SHALL** obtain the access token as defined in the [SMART App Launch IG Backend Services]({{site.data.fhir.ver.smartapplaunch}}/backend-services.html) specification.

* For the RESP-NET use cases, Data Sources **SHALL** support the system/*.read scopes. 

* The Data Receiver **SHALL** support the system/*.read and system/*.write scopes. 

* The health care organization's existing processes along with the Data Source's authorization server **SHALL** verify any organizational policy requirements (for example, registration of the HDEA, authorizing requested scopes, testing and verification of HDEA implementation in sandbox environment prior to production) before allowing the HDEA to access the data to be included in the RESP-NET report. 
 

#### Knowledge Artifact and Knowledge Artifact Repository Requirements 

* The Data Receiver **SHALL** create a Knowledge Artifact following the constraints identified by the [MedMorph Provisioning requirements]({{site.data.fhir.ver.medmorphIg}}/provisioning.html#creating-knowledge-artifacts).

* The Data Receiver **SHALL** create the Knowledge Artifact following the constraints identified in the [RESP-NET-PlanDefinition](StructureDefinition-resp-net-plandefinition.html).

* The Data Receiver **SHALL** implement the Knowledge Artifact Repository requirements as outlined in the [MedMorph RA Knowledge Artifact Repository Requirements]({{site.data.fhir.ver.medmorphIg}}/CapabilityStatement-medmorph-knowledge-artifact-repository.html).


#### Data Source Requirements

* The Data Source (e.g., EHR, HIE) **SHALL** support the requirements as outlined in the [Data Source Capability Statement](CapabilityStatement-resp-net-data-source.html).

##### Authorization Requirements 

* The Data Source **SHALL** support the [SMART on FHIR Backend Services Authorization](spec.html#smart-on-fhir-backend-services-requirements) outlined above as a Server. 
 

##### Subscription Requirements

* The Data Source **SHALL** support the creation of Subscriptions for the [encounter-end Subscription Topic]({{site.data.fhir.ver.medmorphIg}}/StructureDefinition-medmorph-encounter-end-subscription.html)

* The Data Source **SHALL** support [``rest-hook``]({{site.data.fhir.path}}subscription.html#2.46.7.1) Subscription channel to notify the HDEA.

* The Data Source **SHALL** support Notification Bundles with [``full resource payload``]({{site.data.fhir.ver.subscriptionsIg}}/payloads.html#full-resource) as outlined in the Backport Subscriptions IG. 

* For the RESP-NET Content IG, the Data Source **SHALL** include the Encounter resource which was closed as part of the Notification Bundle.

* The Data Source **SHALL** support operations and APIs for Subscription, Notification Bundle, Subscription status resources as outlined in the [Data Source Capability Statement](CapabilityStatement-resp-net-data-source.html).


##### Data API Requirements

* The Data Source **SHALL** support the [US Core Server APIs]({{site.data.fhir.ver.uscoreR4}}/CapabilityStatement-us-core-server.html) and MedicationAdministration APIs as outlined in the [Data Source Capability Statement](CapabilityStatement-resp-net-data-source.html) for the HDEA to access patient data.

 
#### HDEA Requirements 


##### Authorization Requirements

* The HDEA **SHALL** support the [SMART on FHIR Backend Services Authorization](spec.html#smart-on-fhir-backend-services-requirements) outlined above as a client. 


##### Subscription Requirements

* The HDEA **SHALL** create Subscriptions for the [encounter-end Subscription Topic]({{site.data.fhir.ver.medmorphIg}}/StructureDefinition-medmorph-encounter-end-subscription.html).

* The HDEA **SHALL** support [``rest-hook``]({{site.data.fhir.path}}subscription.html#2.46.7.1) Subscription channel to receive notifications from the Data Source.


##### Subscription Notification API 

* The HDEA **SHALL** support a POST API <BSA Base URL>/receive-notification with a payload of the Subscription Notification Bundle to receive the notifications from the Data Source. 


##### Knowledge Artifact Processing Requirements 

* The HDEA **SHALL** allow the health care organization to activate/deactivate a specific Knowledge Artifact. Activation indicates applying the Knowledge Artifact and deactivation indicates not applying the Knowledge Artifact for events occurring within the health care organization.

* The HDEA **SHALL** process the RESP-NET Knowledge Artifact and create Subscription resources in the Data Source for each trigger event.

* For RESP-NET, the HDEA **SHALL** create the Subscription for the [encounter-end Subscription Topic]({{site.data.fhir.ver.medmorphIg}}/StructureDefinition-medmorph-encounter-end-subscription.html) trigger event. 

* Upon deactivation of a Knowledge Artifact, The HDEA **SHALL** delete the Subscriptions previously created by the HDEA for the Knowledge Artifact (e.g., delete the Subscription created for encounter-end trigger event). 

* The HDEA **SHALL** implement FhirPath expression processing to process the RESP-NET Knowledge Artifact actions.

* The HDEA **SHALL** use the default queries outlined by the RESP-NET Knowledge Artifact unless overridden by the health care organization.

* The HDEA **SHALL** ensure no duplicate reports are submitted for the same patient and encounter occurring within a health care organization.


##### Data API Requirements 

* The HDEA acting as a client **SHALL** use the [US Core Server APIs]({{site.data.fhir.ver.uscoreR4}}/CapabilityStatement-us-core-server.html) and MedicationAdministration APIs as outlined in the [Data Source Capability Statement](CapabilityStatement-resp-net-data-source.html) to access patient data from the Data Source.


##### Report Generation Requirements 

* The HDEA **SHALL** create a RESP-NET report following the constraints identified in [RESP-NET Content Bundle](StructureDefinition-resp-net-content-bundle.html).

* The HDEA **SHALL** package the RESP-NET report following the constraints identified in [RESP-NET Reporting Bundle](StructureDefinition-resp-net-reporting-bundle.html).

* The HDEA **SHALL** submit the message containing the RESP-NET report to the endpoint identified in the RESP-NET Knowledge Artifact unless overridden by the health care organization.

##### Use of Non-FHIR Based Approaches to Submit the RESP-NET Report

* The HDEA **MAY** use other transport methods such as Direct Transport to submit the RESP-NET Report created when appropriate.

##### MedMorph RA Requirements 

* The HDEA **SHALL** implement the MedMorph HDEA requirements as outlined in the [MedMorph RA HDEA requirements]({{site.data.fhir.ver.medmorphIg}}/CapabilityStatement-medmorph-healthdata-exchange-app-client.html).


#### RESP-NET Data Receiver Requirements Acting as a MedMorph Data Receiver Actor


##### Message Receiving and Processing Requirements

* The Data Receiver **SHALL** implement the $process-message operation on the ROOT URL of the FHIR Server to receive reports from the Backend Service App using the POST operation.

* Upon receipt of the message, the Data Receiver **SHALL** validate the message before accepting the message.

* When there are validation failures, the Data Receiver **SHALL** return a Operation Outcome response with the details of the validations as part of the POST response.

* The Data Receiver **SHALL** implement the PHA requirements as outlined in the [MedMorph Data Receiver requirements]({{site.data.fhir.ver.medmorphIg}}/CapabilityStatement-medmorph-data-receiver.html).





---

// File: input/pagecontent/StructureDefinition-resp-net-composition-intro.md

### Introduction

This profile is used to represent the clinical content present within a RESP-NET report.

**Sections and Population Criteria**

The following sections and population criteria should be used to create the composition resource below.

* Patient: The Patient who is the subject of the encounter
* Encounter: The Encounter that was closed (Updated documentation has to be added to the encounter before saying it is closed)
* Conditions: Encounter Diagnosis for the closed encounter, All Statuses except InActive, verificationStatus = Confirmed
* MedicationRequests: status = Active and Completed, Intent = order.
* MedicationAdministration: Medication administered during the encounter and status = active
* Medications: Referenced by MedicationRequests and MedicationAdministration
* LabResults: Results linked to the encounter or ordered during the encounter or results received during the Encounter plus thresholds. (72 hours after the encounter close) and Status = final and preliminary
* Vital Signs: all vital signs for the encounter with status = final or amended
* Procedures: Procedures performed during the encounter limited to status = completed or in-progress. 
* ServiceRequest: to capture procedures ordered during the encounter.
* Immunizations: all immunizations associated with the patient.
* Lab Reporting: Results linked to the encounter or ordered during the encounter or results received during the Encounter plus thresholds. (72 hours after the encounter close) and Status = final and preliminary 
* Diagnostic Report Notes: Results linked to the encounter or ordered during the encounter or results received during the Encounter plus thresholds. (72 hours after the encounter close) and Status = final and preliminary 
* Clinical Notes: All notes created during the encounter
* Smoking Status: Everything associated with the patient.

The above data has to be populated by the implementers of either the DataSource actors or the MedMorph HDEA (backend services app).
 

---

// File: input/pagecontent/usecases.md

### Business Need
Respiratory Virus Hospitalization Surveillance Network (RESP-NET) cases are currently identified through a variety of mechanisms at each site, including review of daily or weekly hospital and laboratory line lists and reportable disease databases, through an often manual and labor-intensive process. Additionally, for laboratory-confirmed hospitalized cases identified through RESP-NET, surveillance staff conduct medical chart abstractions based on a standardized case report form to obtain detailed demographic and clinical data on hospitalized cases including length of stay, underlying medical conditions, hospital course, and in-hospital deaths.

CDC seeks to expand the utilization of electronic health information in RESP-NET and improve data exchange between healthcare facilities, state/local public health partners, and CDC to maintain the quality of these important surveillance activities while improving the efficiency and timeliness with which these data are available. Such enhancements will reduce the burden on surveillance sites and allow for scalability to additional sites in the future.

### Goals of the Use Cases
The goals of the RESP-NET reporting use cases include:
* Expand the utilization of electronic health information in RESP-NET
* Improve the availability of EHR data for public health surveillance of hospitalized persons with influenza and other respiratory viruses including SARS-CoV-2 and RSV
* Improve data exchange between healthcare facilities, state/local public health partners, and CDC to maintain the quality of these important surveillance activities 
* Improve the efficiency and timeliness with which these data are available and reported
* Reduce burden of data collection on surveillance officers and healthcare facilities 
* Allow for scalability to additional sites in the future

### Scope of the Use Cases
#### In Scope
* Patients hospitalized with laboratory-confirmed respiratory viruses among residents of the RESP-NET catchment area (defined by patient county of residence) for active population-based surveillance
* Identify the data elements to be retrieved from the data source to produce the report
* Define under what circumstances a report must be created and transmitted to RESP-NET sites

#### Out of Scope
* Assessment of the data quality of the content extracted from the data source
* Changes to existing provider workflow or existing data entry
* Policies of the clinical care setting to collect consent for data sharing
* Cases where the influenza, RSV, or COVID-19 test is not accessible in hospital system

### RESP-NET Actors
The following actors from the [MedMorph RA IG]({{site.data.fhir.ver.medmorphIg}}/usecases.html#medmorph-actors-and-definitions) are used by the RESP-NET use cases:
* Data Source (e.g., Healthcare Facility with FHIR-enabled EHR, HIE with FHIR capability)
* Health Data Exchange App (HDEA) (MedMorph’s backend services app)
* Knowledge Artifact Repository
* Data Receiver (e.g., RESP-NET Site)

#### Interactions between MedMorph RA Actors and Systems for RESP-NET
This section outlines the high-level interactions between the various MedMorph Actors and Systems listed above. There are two ways for a RESP-NET report to be created. The first is to use the MedMorph HDEA which is described in Figure 2.1 below. Figure 2.2 is for a Data Source who wishes to use their own functionality (not the HDEA) to create a RESP-NET report.

{% include img.html img="resp-net-actors-and-systems.png" caption="Figure 2.1 - RESP-NET Actors and Systems with HDEA" %}

The descriptions for each step in the above diagram include:
* Step 1: The Data Receiver (e.g., RESP-NET Site) creates a Knowledge Artifact and makes it available via the Knowledge Artifact Repository.
     * Step 1a: Knowledge Artifact Repositories which implement notifications, can optionally notify the subscribers (Data Source, HDEA, Administrators) of changes in the Knowledge Artifacts.
* Step 2: The Health Data Exchange App (HDEA) queries the Knowledge Artifact Repository to retrieve a Knowledge Artifact. 
     * Step 2a: HDEA receives the Knowledge Artifact as a response to the query in Step 2.
* Step 3: The HDEA processes the Knowledge Artifact and creates subscriptions in the Data Source’s (e.g., EHR) FHIR Server so that it can be notified when specific events occur in clinical workflows.
* Step 4: Providers as part of their clinical workflows update the data in the Data Source’s patient chart.
* Step 5: The Data Source notifies the HDEA based on subscriptions created in Step 3.
* Step 6: The HDEA queries the Data Source for patient’s data.
     * Step 6a: HDEA receives the response from the Data Source with the patient’s data.
* Step 7: The HDEA submits the created report to the Data Receiver.


{% include img.html img="resp-net-actors-and-systems-no-hdea.png" caption="Figure 2.2 - RESP-NET Actors and Systems without HDEA" %}

For a Data Source that doesn't want to use the HDEA, we have provided an alternate workflow for creating a RESP-NET report. The descriptions for each step in the above diagram include:

The descriptions for each step in the above diagram include:
* Step 1: The Data Receiver (e.g., RESP-NET Site) creates a Knowledge Artifact and makes it available via the Knowledge Artifact Repository.
     * Step 1a: Knowledge Artifact Repositories which implement notifications, can optionally notify the subscribers (Data Source, Administrators) of changes in the Knowledge Artifacts.
* Step 2: The Data Source queries the Knowledge Artifact Repository to retrieve a Knowledge Artifact. 
     * Step 2a: The Data Source receives the Knowledge Artifact as a response to the query in Step 2.
* Step 3: Providers as part of their clinical workflows update the data in the Data Source’s patient chart.
* Step 4: The Data Source creates and submits the report to the Data Receiver.

### Use Case 1: Hospital-based influenza case detection and minimum data elements AND Use Case 2: Hospital-based clinical influenza surveillance
These use cases will identify patients hospitalized with laboratory-confirmed influenza among residents of the FluSurv-NET catchment area (defined by patient county of residence) for active population-based surveillance. The cases are reported along with minimum patient-level data and transmitted to the FluSurv-NET surveillance officers in the relevant state/local jurisdiction.

Use Case 1 is reported within one week of case identification. Minimum data elements include state and county of residence (or other geographic regions) to define the catchment area, patient age or date of birth, sex, race/ethnicity, hospital admission date, positive influenza testing data (test type, test result, test date), and influenza type and subtype (if available). 

Use Case 2 focuses on the more detailed clinical surveillance data collected in FluSurv-NET by site surveillance officers. Patient-level data from EHRs about persons hospitalized with influenza include data on important outcomes and indicators of disease severity such as ICU admission, mechanical ventilation, in-hospital death, and length of hospital stay. Additional elements include health history (underlying conditions, tobacco, alcohol, substance use), clinical course, viral and bacterial codetections, findings from chest imaging, diagnoses, vaccination, and treatment. This use case will include person-level clinical data elements that are currently collected in FluSurv-NET on a standardized case report form for all identified cases. Not all of the current data elements may be reachable in a FHIR-based approach; proposed solutions should recognize that this may evolve over time and surveillance officers may still need to conduct medical chart review on data elements.

#### User Stories for Use Cases 1 and 2
* Scenario 1: A patient is admitted to the hospital and has symptoms consistent with a case of influenza. An influenza test is ordered, and the test results are positive.
* Scenario 2: A patient is admitted to the hospital. Included in the available patient data is a previously recorded positive influenza test result, which was within 14 days of admission at the hospital.
* Scenario 3: A patient arrives at the emergency room (ER) and has symptoms consistent with a case of influenza. The patient is admitted to the hospital before or while awaiting test results. A positive test is recorded within 14 days of admission or at any time during their hospitalization.

#### Workflow for Use Cases 1 and 2
The positive influenza test results in a notification to the HDEA/BSA. The HDEA queries for a limited set of PII, including the patient’s address. If the patient is not a resident of a catchment area, the HDEA stops all activity regarding this patient. If the patient is a resident of a catchment area the HDEA then regularly monitors the patient’s record until discharge occurs. Upon discharge, the HDEA requests a set of FHIR resources representing patient-level encounter information from the Data Source. This limited data set includes PII and other data. The obtained resources are validated (e.g., checked to see if they are conformant to the appropriate FHIR profiles), bundled, and transmitted to the RESP-NET Site.

{% include img.html img="resp-net-use-case-1.png" caption="Figure 2.3 - Use Case 1 and 2 Workflow" %} 

### Use Case 3: Influenza Disease Burden Project
Because testing for influenza and other respiratory viruses is done at the discretion of the clinician and testing practices may vary widely among facilities and over time, some people hospitalized with influenza may not be recognized and diagnosed. To better estimate the full burden of influenza, CDC collects additional information from FluSurv-NET hospitals on the proportion of patients with acute respiratory illnesses (ARI) who are tested for influenza, SARS-CoV-2, and RSV. This use case will focus on obtaining data on respiratory viral testing practices for CDC’s influenza disease burden project and transmitting it directly to CDC throughout the season. This project collects anonymized patient-level data on persons hospitalized with ARI (based on ICD-10 diagnosis codes) along with information about whether or not the patient was tested for influenza, SARS-CoV-2, or RSV and if so, the test result and test type used for all tests performed (patients may be tested multiple times). Additional data elements include state, age, race/ethnicity, week of admission, ICD-10 discharge diagnoses, and if possible, whether the patient had been admitted to the ICU or died during the hospital stay.

#### User Stories
* Scenario 1: A patient is admitted to the hospital and has a diagnosis consistent with an ARI (match into ARI value set). 
* Scenario 2: A patient visits the ED, has a diagnosis consistent with an ARI (match into ARI value set). (May or may not be admitted to hospital.)

#### Workflow
The diagnosis results in a notification to the HDEA/BSA. The HDEA queries for a limited set of PII, including the patient’s address. The HDEA then regularly monitors the patient’s record until discharge occurs. Upon discharge, the HDEA requests a set of FHIR resources representing patient-level encounter information from the Data Source. This limited data set includes PII and other data. The data reported includes testing status for influenza, SARS-CoV-2, and RSV occurred. The obtained resources are validated (e.g., checked to see if they are conformant to the appropriate FHIR profiles), bundled, and transmitted to the RESP-NET site.

{% include img.html img="resp-net-use-case-3.png" caption="Figure 2.4 - Use Case 3 Workflow" %} 

### Use Case 4: Hospital-based Surveillance for SARSCoV-2 AND Use Case 5: Hospital-based surveillance for Respiratory Syncytial Virus (RSV)
These use cases focus on collecting equivalent data to Use Cases 1-2 but for patients who test positive for SARSCoV-2 (the virus that causes COVID-19) or Respiratory Syncytial Virus (RSV). Public health surveillance through COVID-NET and RSV-NET is conducted in the same sites as FluSurv-NET, collects many of the same data elements, with some additional data elements specific to these viral illnesses.

#### User Stories for Use Cases 4 and 5
* Scenario 1: A patient is admitted to the hospital and has symptoms consistent with a case of COVID-19 or RSV. A COVID or RSV test is ordered, and the test results are positive.
* Scenario 2: A patient is admitted to the hospital. Included in the available patient data is a previously recorded positive COVID or RSV test result, which was within 14 days of admission at the hospital.
* Scenario 3: A patient arrives at the emergency room (ER) and has symptoms consistent with a case of COVID or RSV. The patient is admitted to the hospital before or while awaiting test results. A positive test is recorded within 14 days of admission or at any time during their hospitalization.

#### Workflow for Use Cases 4 and 5
The positive COVID or RSV test results in a notification to the HDEA/BSA. The HDEA queries for a limited set of PII, including the patient’s address. If the patient is not a resident of a catchment area, the HDEA stops all activity regarding this patient. If the patient is a resident of a catchment area the HDEA then regularly monitors the patient’s record until discharge occurs. Upon discharge, the HDEA requests a set of FHIR resources representing patient-level encounter information from the Data Source. This limited data set includes PII and other data. The obtained resources are validated (e.g., checked to see if they are conformant to the appropriate FHIR profiles), bundled, and transmitted to the RESP-NET Site.

{% include img.html img="resp-net-use-case-4.png" caption="Figure 2.5 - Use Case 4 and 5 Workflow" %}   

---

