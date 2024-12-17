// File: input/pagecontent/change_log.md


#### Changes in this update:
<div>
  <ul>
    <li>Deprecation of CarePlan.activity.detail, reduces opportunity for variability in delivery of data elements</li>
    <li>Recommendations on use of Task and the <a href="implementation.html#resource-pertainstogoal-extension">extension:resource-pertainstogoal</a></li>
	<li>Clarification on occurrenceTiming</li>
	<li>See, <a href="eLTSS_to_FHIR_R4_element.html">changes to Mapping eLTSS to FHIR</a>, <a href="StructureDefinition-ServiceRequest-eltss.html">additional guidance on ServiceRequest.occurrence[x]</a>, <a href="implementation.html">new guidance on Implementation topics</a>, <a href="StructureDefinition-CarePlan-eltss.html">CarePlan removal of CarePlan.activity.detail</a></li>
	<li>USCORE version is 6.1.0</li>
	<li>Add <a href="eLTSS_to_FHIR_R4_element.html#units">non-ucum coded units and ucum units</a> as examples for use in quantities</li>
	<li>Removed US CORE mapping page as the data is now redundant through Profiling of USCORE Profiles</li>
	<li>Added <a href="implementation.html#task-used-with-servicerequest">Task Guidance on Implementation topics page </a>and  <a href="artifacts.html#other">examples</a> of Task</li>
	<li>Added simulated example of CarePlan and associated artifacts to aid implementers <a href="artifacts.html#example-example-instances">here</a> and <a href="artifacts.html#other">here</a></li>
	<li>Added page on <a href="testing.html">Testing</a>	</li>
	<li>Added draft for new <a href="OperationDefinition-all-eltss-careplan.html">FHIR Operation</a> for retrieving all eLTSS data associated with a CarePlan</li>
	<li>Enhanced server capability statement to make the expectations more clear <a href="CapabilityStatement-eltss-client.html">eLTSS USCORE Capability Statement</a></li>
	<li>Increased clarity of FHIR data elements to support for eLTSS data exchange through additional Must Support (MS) in <a href="profiles.html">all Profiles</a></li>
	<li>Extended guidance with new profiles for <a href="StructureDefinition-PractitionerRole-eltss.html">PractitionerRole</a>, <a href="StructureDefinition-QuestionnaireResponse-eltss.html">QuestionnaireResponse</a> and <a href="StructureDefinition-RelatedPerson-eltss.html">RelatedPerson</a></li>
	<li><a href="StructureDefinition-Condition-eltss.html">Condition</a> now based on US Core Condition Problems and Health Concerns Profile which includes screening assessment categories such as SDOH.</li>
	<li>eLTSS Observation <a href="ValueSet-eltss-observation-code.html">value set for Preference and Strength</a> now using LOINC code for "Care experience Preference"</li>	
  </ul>
</div>


---

// File: input/pagecontent/dependencies_globals_CrossVersionAnalysis.md

**Dependency Table**

{% include dependency-table.xhtml %}

**Globals Table**

{% include globals-table.xhtml %}

**Cross FHIR Version Analysis**

{% include cross-version-analysis.xhtml %}

---

// File: input/pagecontent/downloads.md

**Full Implementation Guide**

The entire implementation guide (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

The following package file contains an NPM Package used by many FHIR tools. It includes the profiles, list of pages and URLs in the IG, etc. as defined in this version of the Implementation Guide: [Package](package.tgz)

In addition there are format specific definitions files.

* [XML](definitions.xml.zip)
* [JSON](definitions.json.zip)
* [TTL](definitions.ttl.zip)

**Examples:** all the examples that are used in this Implementation Guide available for download:

* [XML](examples.xml.zip)
* [JSON](examples.json.zip)
* [TTl](examples.ttl.zip)

---

// File: input/pagecontent/implementation.md

### Care Coordination across IGs

Care Coordination requires the orchestration of many moving parts, that do not move in isolation. In addition to the eLTSS artifacts in this IG and especially the mapping into FHIR spreadsheet, we recommend the following Implementation Guides to supplement the guidance in this guide to meet additional business requirements:

#### [Da Vinci suite of IGs](https://confluence.hl7.org/display/DVP/Da+Vinci+Implementation+Guide+Dashboard)
The Da Vinci IGs focus on claims, prior-auth and other financial data exchange. 
Notable: 
[Patient Cost Transparency](http://hl7.org/fhir/us/davinci-pct/2022Jan/)


#### [Gravity SDOH IG](https://hl7.org/fhir/us/sdoh-clinicalcare/)
The Gravity SDOH IG specializes in communication of SDOH concerns and service fulfillment. It contains a large terminology resource for this space.

The Gravity SDOH IG makes progress on the referral workflow process. Importantly, the guidance is a work in progress and involves collaboration with [BSER](https://hl7.org/fhir/us/bser/) and [360X](https://oncprojectracking.healthit.gov/wiki/display/TechLab360X/360X+Implementation+Guide). As an exploration, Gravity SDOH IG ties Task status updates with the originating ServiceRequest. At a high level, Tasks are created in response to the needs communicated in the ServiceRequest. As the Tasks are completed the system originating the ServiceRequest has an opportunity to know what Task was completed and by whom.

Here is a list of pages from the Gravity SDOH guide that relate to Task and the ongoing work towards defining this space:
* example of a Task, [SDOHCC Task for Referral Management ](https://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition-SDOHCC-TaskForReferralManagement.html)
* working with the status of [Task](https://hl7.org/fhir/us/sdoh-clinicalcare/checking_task_status.html)
* referral workflow showing Task used in context: [workflow](https://hl7.org/fhir/us/sdoh-clinicalcare/referral_workflow.html)
* notes on [initiating communication]( https://hl7.org/fhir/us/sdoh-clinicalcare/connecting_applications_with_api_data_sources.html)
Generally, the Task is a way of communicating what is actually being performed in relationship to the requested service. 

Additionally, in Gravity SDOH they introduce a concept of Patient Task. For those eLTSS CarePlan action items we propose that one should consider extending the paradigm of Patient Task to cover those things the patient is asked to do for themselves, or determines is important for them to do for themselves. 

#### [MCC eCare Plan IG (ballot version)](https://hl7.org/fhir/us/mcc/2023Sep/)
The MCC eCare IG focuses on guidance for using FHIR CarePlans in multiple chronic conditions. When the final IG is published it will be accessible at [http://hl7.org/fhir/us/mcc](http://hl7.org/fhir/us/mcc). We reference the most recently available ballot version for accessibility reasons at the time of publishing this IG. There maybe an IG that supersedes this one in the future. 
The CarePlan Resource has a great opportunity to tie together a prospective or retrospective look at care planning. Central to the concept of patient led patient care is the Goal Resource. The MCC eCare IG uses the [resource-pertainsToGoal](http://hl7.org/fhir/R4/extension-resource-pertainstogoal.html)) extension as the major tool to connect care data elements directly to Goals, we suggest following this lead in this guide. Similar to Gravity, in the MCC eCare IG there is also rich set of value sets to aid in discovery of care planning data elements. 

An important feature of the eCare IG is also a consistent theme of caregiver and patient involvement in care planning. You will find Observations meant to be authored by caregivers and patients, in order to communicate how they feel about the condition(s) being addressed and in order to share the status of the caregiver's ability to provide care. The [MCC eCare CareTeam profile]() shows how the two roles are represented on the care team. 

Additionally, the eCare guide has this page on aggregating care plan data: [CarePlan aggregation](http://hl7.org/fhir/us/mcc/2023Sep/careplanAggregation.html)

Finally, the eCare guide also provides important guidance on alignment with the consensus among the HL7 community that CarePlan.activity.detail is not to be used. In R5, this element was removed through consensus. It can cause difficulties in discovery of information and variability in communication. We will discuss more about this in a section that follows.


#### Where does this guide fit in with other implementation guides
The eLTSS IG focuses on being able to package eLTSS data in a CarePlan so that a reader of the data can find all they need to perform their role and function. Da Vinci extends the financial and business transactions found in this guide (primarily seen as a tracking of the signature of various actors). The Gravity SDOH IG works more closely with the Task and ServiceRequest transaction, data components of activities that would be referred to by a CarePlan. The eLTSS IG, by focusing on CarePlan, adds additional opportunity to share other important actives (either as activity.outcomes - things that were done as a result of the activity - or as activity.reference items - things planned to be done).

Please take all these guides into consideration when implementing in the eLTSS space. They provide important guidance on aspects that are not the central purview of this particular guide, but which affect the workflow in which the eLTSS data elements flow. Importantly, these guides use US CORE as a base.


### [Mapping page eLTSS data elements to FHIR](eLTSS_to_FHIR_R4_element.html)
The eLTSS to FHIR mapping page of this IG is the most important section of this IG. It provides identification of the expected location in sending/receiving eLTSS data. Please review it and the profiles in this implementation guide. We elaborate below on a few key points.

### Key Points
#### CarePlan activity - planned and performed activities
The following comes from the [MCC eCare IG](https://hl7.org/fhir/us/mcc/2023Sep/StructureDefinition-mccCarePlan.html#supporting-machine-assisted-dynamic-care-coordinationplanning-with-the-fhir-care-plan-resource-and-fhir-goal-resource), it provides guidance on how to use activity in alignment with R5, and the consensus of HL7.

 *CarePlan.activity is a Backbone element. It identifies an action that has occurred or is a planned action to occur as part of the plan. For example, a medication to be used, lab tests to perform, self-monitoring that has occurred, education etc., within which in R4 can be activity.reference, activity.outcomeCodeableConcept, activity.outcomeReference or activity.progress (annotated note).*
		
 *OUTCOME REFERENCE - activity.outcomeReference (aka PERFORMED ACTIVITY reference): has been renamed in R5 to "CarePlan.performedActivity". To be in line with R5 do not use activity.detail. Also, outcomeReference is not only an outcome but rather an action such as Procedure or an Encounter that was made or occurred or an Observation. Within the target of the CarePlan.activity.outcomeReference, the extension, "resource-pertainsToGoal" **SHALL** be used to reference this activity's related goal. Within the resource referenced within CarePlan.activity.outcomeReference, "xxx.reason" **SHALL** be used to reference the health concern or problem for which the activity is done. CarePlan.outcomeCodeableConcept can also be used to indicate the outcome of an activity, such as patient understanding or lack thereof. It should not duplicate the activity status (e.g., completed or in progress). Simple free text can be used in the OutcomeCodeableConcept if no specific code is available.*

 *ACTIVITY REFERENCE - activity.reference (aka PLANNED ACTIVITY reference): has been renamed in R5 to "CarePlan.plannedActivityReference". To be in line with R5 do not use activity.detail. Within the target of the  CarePlan.activity.reference, the extension, "resource-pertainsToGoal" **SHALL** be used to reference this activity's request's related goal. "xxx.reason" **SHALL** be used to reference the health concern or problem for which the activity is done. Within the referenced Goal resource, goal.address **SHALL** be used to reference the goal's related Condition, Observation, MedicationStatement, NutritionOrder, ServiceRequest or RiskAssessment. Within the referenced Goal resource, Goal.outcomeReference, references the outcome (e.g observations related to the specific goal). Consider using activity.progress, which is an annotation data type, to satisfy the desire in the comment to provide plain free text on progress (in addition to the text, it contains the author and a date-time).*

#### [resource-pertainsToGoal extension](http://hl7.org/fhir/R4/extension-resource-pertainstogoal.html)
This extension is used extensively in the MCC eCare guide to provide a link within FHIR Resources back to the target Goal. A single data point, such as a clinical test observation, can serve for multiple goals. Thus, resource-pertainsToGoal is given 0..* cardinality.

#### Use of Annotation data types and codeableConcept.text 
There are several ways that text can be added in FHIR Resources, for those times when cannot avoid it. The Annotation data type, used in CarePlan.progress, provides a slot for attribution to a creator of the text, a time stamp and a large space for text. For shorter, briefer, clarification or communications (or when you cannot provide an appropriate code) the codeableConcept.text field is useful. Brief comments can be things such as the exact words uttered by the patient. It is worth noting that the use of free text does not make the text as usable as nicely structured data. Use sparingly, ideally you will use structured data elements. 

#### Quantities, UCUM and the Timing data type
It can be helpful to express quantity units using [UCUM](https://ucum.org/ucum#para-37). UCUM is a coding system for units of measure (see an HL7 value set [here](http://hl7.org/fhir/ValueSet/ucum-units)). UCUM uses codes and syntax to create specific codes for use. E.g. 'ml' and 'mg' are milliliter and milligram respectively. A composite code milligram/milliliter can be represented as 'mg/ml'. However, in the eLTSS mapping page an effort has been made to use quantity ratio to represent composite codes like 'mg'/'ml' in a post-coordinated fashion using quantityRatio. This can be attractive especially for composite non-scientific units such as 'dollar/month.' In UCUM this would be '[USD]/mo'. The '[USD]' is a UCUM way of allowing free text, but it is considered in calculations as meaningless. So, a UCUM cognizant system would really see the unit as 'unit/mo' with a numerator label for unit with the free text 'USD.' By using quantityRatio, the eLTSS guide is suggesting an alternative means which would instead look like 'code for USD'/month. The code for USD would be a more reliable way to interoperate instead of a string 'USD' which could be inputted as 'US Dollars', 'dollar', etc.  Some codes for currencies can be seen in the [FHIR R4 Currencies value set](https://hl7.org/fhir/R4/valueset-currencies.html). See: [ServiceRequest-service2 example](ServiceRequest-service2.json.html) and [Units mapping](eLTSS_to_FHIR_R4_element.html#units).

The [Timing](http://hl7.org/fhir/R4/datatypes.html#Timing) data type in FHIR allows for complex representations of Timing. We suggest using Timing for timing information that fluctuates or is sufficiently complex. You will need to calculate end-date, or use occurrenceTiming.boundsPeriod to ascribe a start and end date. E.g. Give ServiceRequest.quantityRatio of 5 USD per day with the occurrenceTiming.boundsPeriod of May 31, 2023 to June 23, 2023 on occurrenceTiming.dayOfWeek = Mon and Wed at occurrenceTiming.timeOfDay = 3 pm.

The [Period](http://hl7.org/fhir/R4/datatypes.html#Period) data type is a much simpler data type best used when the quantity is meant to be performed within a defined, simple start and end date. E.g. For start:May 31,2023 to end:June 10, 2023 give ServiceRequest.quantityRatio of 5 USD per day.

#### Terminology from MCC eCare and Gravity SDOH
There has been a strong effort in both of these IGs to help organize coded concepts for use in specific data elements. The organization aides both discovery and normalization of terms used. It can be a time saver to start with the terminology work done in those two guides. See [https://hl7.org/fhir/us/sdoh-clinicalcare/gravity_terminology.html](https://hl7.org/fhir/us/sdoh-clinicalcare/gravity_terminology.html) and [https://hl7.org/fhir/us/mcc/2023Sep/mcc_value_set_libraries_and_usage.html](https://hl7.org/fhir/us/mcc/2023Sep/mcc_value_set_libraries_and_usage.html)

#### Requesting and Recording payment for Task, Procedure or ServiceRequest
An important step in eLTSS is payment for services. The following highlights basic CORE FHIR associations that can be used, should business requirements request it.

A Claim FHIR Resource provides costing information, this can be a "claim" or "preauthorization" or "predetermination" (indicated with Claim.use).  The claim should be connected to the ServiceRequest with the Claim.referral referencing the ServiceRequest instance. As mentioned, the Procedure Resource can be used to communicate work performed if the business requirements need it. The Procedure can be connected to a Claim using Claim.procedure.procedureReference. Any Task records can be included by referencing using Claim.supportingInfo.

If business rules require it, the FHIR ClaimResponse Resource can be used "to provide the results of the adjudication and/or authorization of a set of healthcare-related products and services for a patient against the patient's insurance coverages, or to respond with what the adjudication would be for a supplied set of products or services should they be actually supplied to the patient." see [FHIR R4 ClaimResponse Resource](https://hl7.org/fhir/R4/claimresponse.html#bnr) In other words, the ClaimResponse Resource is used to respond to a FHIR Claim data instance. The ClaimResponse would detail the actual monies that could or would be paid. 

A final consideration is the use of ClaimResponse.net and Claim.net. They both detail the total cost. Using the total cost and the FHIR ServiceRequest (or FHIR Procedure) frequency and quantity information a system could theoretically calculate the hourly rate for a service requested or approved. This might be less ambiguous and more convenient than requesting entry of the cost per unit. 

### Task used with ServiceRequest
Task is a vehicle to indicate an event happened or needs to happen. The event itself is described using other FHIR Resources such as ServiceRequest or Procedure. Task uses Task.focus to associate with a ServiceRequest.

When appropriate based on business requirements, Task can be used in conjunction with ServiceRequest to report on fulfillment or actions taken. Based on the STU2 version of the Gravity SDOH guide, a flow in eLTSS could be:  
First, a ServiceRequest is sent to the CarePlanner, or created by the CarePlanner, and it is directed to a service provider, service recipient, caregiver or related person to fulfill. Importantly, the ServiceRequest is connected to a CarePlan through the CarePlan.activity.reference field. 

Next, Task FHIR Resource instances, either locally created and maintained, or produced externally but transmitted back to the initiating system, are used to indicate completion of the ServiceRequest. Critically the Task instances refer to the ServiceRequest using the Task.focus field. Task can also be used as a vehicle to deliver Procedure Resource instances of performed processes. These would reference the ServiceRequest using Procedure.basedOn. 

Importantly: "The ServiceRequest resource allows requesting only a single procedure. If a workflow requires requesting multiple procedures simultaneously, this is done using multiple instances of this resource. These instances can be linked in different ways, depending on the needs of the workflow. For guidance, refer to the Request pattern." from the [ServiceRequest CORE Structure definition](https://hl7.org/fhir/R4/servicerequest.html#scope). One could use a parent ServiceRequest where multiple child service requests need multiple detailed occurrence timing or quantity information (with child ServiceRequests connected to the parent ServiceRequest using ServiceRequest.basedOn). However, one could forgo the parent request and just use the child service requests. The choice is a business decision depending on how the transaction partners wish to capture the details.

In the flow, a Procedure instance, with the Task.outcome referencing the Procedure, and with the Procedure.basedOn referencing the ServiceRequest, can provide granular details on a processes performed. See "A procedure is an activity that is performed on, with, or for a patient as part of the provision of care. Examples include surgical procedures, diagnostic procedures, endoscopic procedures, biopsies, counseling, physiotherapy, personal support services, adult day care services, non-emergency transportation, home modification, exercise, etc. Procedures may be performed by a healthcare professional, a service provider, a friend or relative or in some cases by the patient themselves" from [Procedure FHIR Resource](https://hl7.org/fhir/R4/procedure.html#scope). 

The following illustration indicates how the resources can be connected. Dotted arrows indicate the optional inclusion of a Procedure. In the example above. The ServiceRequest could have been populated by the Care Planner in eLTSS care planning software. The Care Planner's software is likely to create the patient-directed Task as well, to record progress. Once the Task is put into a completed state, a Procedure instance could be added which contains a computable detail of what was done (e.g. a care recipient's Son could be the RelatedPerson doing the Procedure). 

<table><tr><td><img src="eLTSS_Task.png" /></td></tr></table>

### Special Topic - Service Recipient (Patient) initiative tracking
Patient empowerment is thought to improve engagement. Engagement of the service recipient (patient) in their eLTSS care is a major goal in eLTSS due to it's linkage with better outcomes. By using instances of Task, SerivceRequest and optionally Procedure, which indicate the patient as the author, performer or owner, one could capture service recipient initiation and active participation in their own care.

#### An example
A service recipient (patient) has been told of an identified fall risk. Recognizing what this means for their own care, the service recipient volunteers to install a grab bar in their shower. The service recipient's son will do the installation (see [example ServiceRequest-service1](ServiceRequest-service1.html)). Thus, we have an example of non-paid, self-initiated, service recipient led action. This Task/ServiceRequest becomes part of the record of the events performed. The Task.for would reference a US CORE Patient Profile instance that represented the patient. Task.owner and Task.requester would also be used to indicate who is responsible for the Task and who requested it. 

For better discovery a ServiceRequest or Procedure instance connected to the CarePlan can further heighten visibility. Thus the patient could communicate to upstream and downstream providers through their care plan that they have installed a shower grab bar. This communication would allow providers to know both that their has been an action to reduce at home fall risk and that the patient is taking an active interest in their own care. It is important communication that should not be lost, and is common in eLTSS.


---

// File: input/pagecontent/ip_statement.md

**IP Statements**

{% include ip-statements.xhtml %}

---

// File: input/pagecontent/security.md

Please review the guidance on Security from [US CORE 6.1.0](http://hl7.org/fhir/us/core/STU6.1/security.html). The noted security considerations are expected to be followed.

---

// File: input/pagecontent/taskProcedureDRAFTarch.md

Task.focus --> ServiceRequest

Task is a vehicle to indicate an event happened or needs to happen. The event itself is described using other FHIR Resources such as ServiceRequest or Procedure.

The general workflow, based on the STU2 version of the Gravity SDOH guide, is as follows:
The ServiceRequest is sent to the CarePlanner, or created by the CarePlanner, and it is directed to a service provider, service recipient, caregiver or related person. Additionally, the ServiceRequest is connected to CarePlan through the CarePlan.activity.reference field. 

Next, Task FHIR Resource instances, either locally created and maintained, or produced externally but transmitted back to the initiating system, are used to indicate completion of the ServiceRequest. The Task instances refer to the ServiceRequest using the Task.focus field. Task can also be used as a vehicle to deliver Procedure Resource instances of performed processes. These would reference the ServiceRequesst using Procedure.basedOn. 

Importantly: "The ServiceRequest resource allows requesting only a single procedure. If a workflow requires requesting multiple procedures simultaneously, this is done using multiple instances of this resource. These instances can be linked in different ways, depending on the needs of the workflow. For guidance, refer to the Request pattern" FHIR request pattern, comes from ServiceRequest CORE Structure definition
Use a parent ServiceRequest where multiple child service requests (child ServiceRequests connected to the parent ServiceRequest using ServiceRequest.basedOn)need multiple detailed occurrence timing or quantity information. 
However, could forgo the parent request and just use the child service requests. The choice is a business decision depending on how the transaction partners wish to capture the details.

Similarly, Procedure as a Task.outcome --> Procedure with a Procedure.basedOn -> ServiceRequest provides granular details on a process performed. See "A procedure is an activity that is performed on, with, or for a patient as part of the provision of care. Examples include surgical procedures, diagnostic procedures, endoscopic procedures, biopsies, counseling, physiotherapy, personal support services, adult day care services, non-emergency transportation, home modification, exercise, etc. Procedures may be performed by a healthcare professional, a service provider, a friend or relative or in some cases by the patient themselves" from the structure definition on the CORE Procedure FHIR Resource. 


A Claim FHIR Resource provides the costing information, this can be a "claim | preauthorization | predetermination " (indicated with Claim.use)
The claim should be connected to the ServiceRequest with Claim.referral --> ServiceRequest.
As mentioned, the Procedure Resource can be used if the business requirements need it. The Procedure can be connected to a Claim using Claim.procedure.procedureReference. Any Task records can be included by referencing using Claim.supportingInfo.




If business rules require it, the FHIR ClaimResponse Resource is used to "to provide the results of the adjudication and/or authorization of a set of healthcare-related products and services for a patient against the patient's insurance coverages, or to respond with what the adjudication would be for a supplied set of products or services should they be actually supplied to the patient." In other words, the ClaimResponse Resource is used to respond to a FHIR Claim data instance. The ClaimResponse would detail the actual monies to be paid. I suggest focusing on ClaimResponse.net and Claim.net, which detail the total cost. Using the total cost and the FHIR ServiceRequest (or FHIR Procedure) frequency and quantity information a system can calculate the hourly rated requested or approved. This might be less ambiguous than using the cost per unit.


### Motivation: Service Recipient (Patient) initiative tracking
Engagement of the service recipient (patient) in their eLTSS care is a major goal*better word* in eLTSS due to it's linkage with better outcomes. Patient empowerment is another concept*better word* thought to improve engagement. By using Task, and perhaps Procedure, instances pointing to the patient, one can capture patient initiation and active participation in their own care. 

We have placed an example in the examples provided in this guide. The service recipient has been told of an identified fall risk and recognizing what this means for their own care. The patient volunteers to install a grab bar in their shower. The service recipient's son will do the installation. Thus, we have an example of non-paid, self-initiation, service recipient led action. This Task/ServiceRequest becomes part of the record of the events performed. For better discovery a ServiceRequest or Procedure instance connected to the CarePlan can further heighten visibility. Thus the patient can communicate to upstream and downstream providers through their care plan that they have installed a shower grab bar. This communication allows providers to know both that their has been an action to reduce at home fall risk and that the patient is taking an active interest in their own care. It is important communication that should not be lost, and is common in eLTSS.





-----

### [Gravity SDOH IG](http://build.fhir.org/ig/HL7/fhir-sdoh-clinicalcare/)
The Gravity SDOH IG specializes in communication of SDOH concerns and service fulfillment. It contains a large terminology resource for this space, and, importantly has a focus on the ServiceRequest-Task data workflow. We recommend taking a close look at how the Gravity SDOH IG ties Task status updates with the originating ServiceRequest. At a high level, Tasks are created in response to the needs communicated in the ServiceRequest. As the Tasks are completed the system originating the ServiceRequest has an opportunity to know what Task was completed and by whom.

Additionally, in Gravity SDOH they introduce a concept of Patient Task. For those eLTSS CarePlan action items we propose that one should extend the paradigm of Patient Task to cover those things the patient is asked to do for themselves, or determines is important for them to do for themselves. 


### Workflow Task and ServiceRequest following Gravity SDOH
The guidance from Gravity is too extensive to fit into a single paragraph. The SDOHCC Task for Referral Management  Here is a list of important pages from the Gravity SDOH guide:
* example of a Task, [SDOHCC Task for Referral Management ](http://build.fhir.org/ig/HL7/fhir-sdoh-clinicalcare/StructureDefinition-SDOHCC-TaskForReferralManagement.html)
* working with the status of [Task](http://build.fhir.org/ig/HL7/fhir-sdoh-clinicalcare/checking_task_status.html)
* referral workflow showing Task used in context: [workflow](http://build.fhir.org/ig/HL7/fhir-sdoh-clinicalcare/referral_workflow.html)
* notes on [initiating communication]( http://build.fhir.org/ig/HL7/fhir-sdoh-clinicalcare/connecting_applications_with_api_data_sources.html)
Generally, the Task is a way of communicating what is actually being performed in relationship to the requested service. 

### Patient Tasks
A slight variation on the Gravity Patient Task is the suggested use of Task to record/track tasks a patient will be performing or is choosing to be responsible for. As an example, see the section in Gravity SDOH which focuses specifically on the subset of tasks around questionnaires [SDOHCC Task For Patient](https://build.fhir.org/ig/HL7/fhir-sdoh-clinicalcare/StructureDefinition-SDOHCC-TaskForPatient.html). 

For general purpose use, the generic Task Resource would be sufficient, but the Task.for would reference a US CORE Patient Profile instance that represented the patient. Task.owner and Task.requester would also be used to indicate who is responsible for the Task and who requested it. 


### Use of Annotation data types and codeableConcept.text 
There are several ways that text can be added in FHIR Resources, for those times when you absolutely need to. The Annotation data type, used in CarePlan.progress, provides a slot for attribution to a creator of the text, a time stamp and a large space for text. For shorter briefer clarification or communications (or when you cannot provide an appropriate code) the codeableConcept.text field is useful. Brief comments can be things like the words uttered by the patient. It is worth noting that the use of text does not make the text as usable as nicely structured data. Use sparingly, ideally you will use structured data elements. 



---

// File: input/pagecontent/testing.md

Testing server capabilities through Implementation Guides (IGs) is a crucial aspect of Fast Healthcare Interoperability Resources (FHIR). Various methods can be employed to leverage the IG effectively.

A primary application of IG is the validation of data instances. This validation can be conducted using standalone tools, as referenced on the official FHIR validation page [here](https://www.hl7.org/fhir/validation.html), or by submitting the data instance to a server familiar with the desired profile for validation.

Validation processes can also be carried out manually. In all instances, computable StructureDefinitions play a pivotal role in evaluating data instances, with features such as cardinality, invariants, and terminology bindings being integral aspects of the specification guiding the validation process.

Furthermore, the Must Support (MS) and CapabilityStatement articulate specific requirements for servers and clients in terms of behavior. As implementation progresses, it becomes evident that MS and CapabilityStatement serve as guardrails rather than burdens, ensuring that the requisite behavior is available to fulfill the intended use case. The development of IGs involves rigorous testing and collaboration with data senders and receivers.

While the provided examples of data instances in this guide serve as development aids, they do not encompass the full spectrum of possibilities. Generally, these examples focus on populating MS data elements, which constitutes a significant component of conformance testing.

Beyond FHIR validation and computable conformance, ensuring adherence to necessary business rules is imperative. This includes verifying that data is not withheld arbitrarily or ignored as a means of support, aligning with the specifications allowing for the absence of a data element.

Several tools can enhance the utilization of IGs for testing purposes:

- Inferno's Test Kits and Validator: Available at [https://inferno.healthit.gov/](https://inferno.healthit.gov/)
- Touchstone's TestScript Implementation and Testing Services: Accessible through [https://touchstone.aegis.net/touchstone/](https://touchstone.aegis.net/touchstone/)
- Crucible Mitre Test Service: Explore at [https://projectcrucible.org/](https://projectcrucible.org/)

The FHIR TestScript specification introduces intriguing possibilities for scripted interactions, enabling comprehensive testing of data support. For instance, the ability to send a data instance to a system with a FHIR server, retrieve it, modify it in the receiving system, and subsequently retrieve the changed data provides valuable insights into system capabilities, accommodating diverse testing workflows.


---

// File: input/intro-notes/Bundle-2039212f3fa5406bb4ffd4a-intro.md

#### NOTE
Review JSON and/or XML, as not all elements are rendered by the publisher in the narrative content



---

// File: input/intro-notes/StructureDefinition-CarePlan-eltss-intro.md

#### Implementer mapping guidance
The following aids in finding the location of eLTSS data elements. See [R4 FHIR Mapping page](eLTSS_to_FHIR_R4_element.html) for complete guidance, here we are providing a subset of fields for convenience. The CarePlan Resource links to all eLTSS data elements, while specific elements are provided below the implementer should review all the guidance on [R4 FHIR Mapping page](eLTSS_to_FHIR_R4_element.html). This is especially important for ServiceRequest related items, Person Centered Planning concepts such as "Person Setting Choice Options," risk assessments, signatures and financial data.

<table border="1">
    <tr>
      <th>eLTSS Grouping</th>
      <th>eLTSS Data Element Name</th>
      <th>Data Element Definition (includes examples, expected list of values and usage note where applicable)</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
	  <!--th class="stu-note">Important change</th-->
    </tr>

    <tr >
      <td>Goals &amp; Strengths</td>
      <td>Step or Action</td>
      <td>A planned measurable step or action that needs to be taken to accomplish a goal identified by the person.</td>
	  <td>
CarePlan &#8594; activity<br/>
         &#8594; reference(Resource) &#8594; note<br/>
         &#8594; text
		 &#8594; extension(pertainsToGoal)</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(Resource) 0..1<br/>
.........note 0..*<br/>
............text 1<br/>
.........extension(pertainsToGoal)</td>
      <td>1) CarePlan includes activity &#8594; reference, which can be a reference to ServiceRequest, Task or other Resource.<br/>
2) ServiceRequest would be used when the Step or Action is a task under a service. If the Step or Action is an informal support or an activity being undertaken by the patient/care recipient, the Task Resource, similar to a Patient Task used in the Gravity SDOH IG, can be used.<br/>
3) activity &#8594; reference(Resource) is linked to the Goal the step or action addresses through the pertainsToGoal Extension in the referenced activity.<br/>
4) activity &#8594; reference(Resource) includes a performer, author, participant with type or other data element that can be used to reference who is responsible for performing the step or action, such as to indicate that the person or a related person is responsible.<br/>
5) text is where the Step or Action text would be provided.<br/>
6) text is required by FHIR if note is provided.<br/>
7) Note that a stated goal may lead directly to a service, and not necessarily to an explicit Step or Action. For example, a person's goal could be to attend church regularly, and this would be achieved through a transportation service.</td>
	<!--td class="stu-note">Replaced use of CarePlan.activity.detail, and emphasized the extension pertainsToGoal</td-->
    </tr>
    <tr>
      <td>Goals &amp; Strengths</td>
      <td>Strength</td>
      <td>A favorable attribute of oneself, his/her support network, environment and/or elements of his/her life.</td>
      <td>CarePlan &#8594; supportingInfo(Observation)<br/>
<br/>
Observation &#8594; valueString<br/>
Observation &#8594; code &#8594; coding &#8594; code
Observation &#8594; code &#8594; coding &#8594; system</td>
      <td>
      CarePlan<br/>
...supportingInfo(Observation) 0..*<br/>
......valueString 0..1<br/>
......code 1<br/>
........coding 0..*<br/>
..........code 0..1<br/>
............system 0..1<br/>
</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Observation containing the Strength.<br/>
2) code is required by FHIR, and is a CodeableConcept where coding &#8594; code can be set to "Strength" with the corresponding NEW code &#8594; system "http://hl7.org/us/eLTSS/CodeSystem/eltss-observation-code".<br/>
3) valueString is where the Strength text would be provided.</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Assessed Need</td>
      <td>The clinical and/or community-based necessity or desire as identified through an assessment that should be addressed by a service. </td>
      <td>CarePlan &#8594; addresses(Condition)<br/>
<br/>
Condition &#8594; code &#8594; text<br/>
Condition &#8594; category</td>
      <td>CarePlan<br/>
...addresses(Condition) 0..*<br/>
......code 1<br/>
.........text 0..1<br/>
......category 1..*</td>
      <td>1) Will use CarePlan &#8594; addresses to reference the Condition(s) for the care plan being developed.<br/>
2) code is required by US Core and is a CodeableConcept which per US Core is bound to the extensible Problem Value Set. That value set is based on SNOMED-CT and includes very specific values that do not line up with assessed needs. Per US Core's documentation on extensible CodeableConcepts, the CodeableConcept's text element can be used "if no suitable codes exist", so we can use the text element for the assessed need. Additionally, the Gravity SDOH FHIR IG has a value set of SDOH conditions.<br/>
3) Each assessed need should go into a separate Condition element so each can potentially be linked to a service(s) that addresses it.<br/>
4) Category is required by US Core and is a CodeableConcept which per US Core is bound to the extensible US Core Condition Category Codes value set (http://hl7.org/fhir/ValueSet/condition-category) which has values: problem-list-item, encounter-diagnosis and health-concern. The additional 'assessed-need' code can be used to relate that the Condition instance is about the clinical and/or community-based necessity or desire, as identified through an assessment, that should be addressed by a service. Consider also using the US Core 6.1.0 screening-assessment categories  https://www.hl7.org/fhir/us/core/ValueSet-us-core-screening-assessment-condition-category.html.<br/>
5) An "assessed need" condition can refer to another condition via the condition-dueTo extension.</td>
    </tr>

    <tr>
      <td>Person Centered Planning</td>
      <td>Plan Monitor Name</td>
      <td>The name of the person responsible for monitoring the plan.</td>
      <td>CarePlan &#8594; encounter (Encounter)<br/>
<br/>
Encounter &#8594; episodeOfCare(EpisodeOfCare)<br/>
<br/>
EpisodeOfCare &#8594; careManager(Practitioner)<br/>
<br/>
Practitioner &#8594; name &#8594; family<br/>
Practitioner &#8594; name &#8594; given<br/>
Practitioner &#8594; name &#8594; text</td>
      <td>CarePlan<br/>
...encounter(Encounter) 0..1<br/>
...... episodeOfCare(EpisodeOfCare)0..1<br/>
.........careManager(Practitioner) 0..1<br/>
............name 0..*<br/>
...............family 0-1<br/>
................given 0-*<br/>
................text 0-1</td>
      <td>1) Will use CarePlan &#8594; encounter to reference the EpisodeOfCare that defines the plan monitor (care manager) for the plan.<br/>
2) EpisodeOfCare &#8594; careManager references the Practitioner who is monitoring the plan.<br/>
3) given is used for both first name &amp; MI, so need more than one.<br/>
4) family is a string with the person's surname.<br/>
5) text is a string that contains the full name of the person.<br/>
6) The values for Plan Monitor Name and Plan Monitor Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Plan Monitor Phone Number</td>
      <td>The primary phone number (and extension when applicable) of the plan monitor.</td>
      <td>CarePlan &#8594; encounter (Encounter)<br/>
<br/>
Encounter &#8594; episodeOfCare(EpisodeOfCare)<br/>
<br/>
EpisodeOfCare &#8594; careManager(Practitioner)<br/>
<br/>
Practitioner &#8594; telecom &#8594; system<br/>
Practitioner &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...encounter(Encounter) 0..1<br/>
...... episodeOfCare(EpisodeOfCare)0..1<br/>
.........careManager(Practitioner) 0..1<br/>
............telecom 0..*<br/>
...............system 0..1<br/>
................value 0..1</td>
      <td>1) Will use CarePlan &#8594; encounter to reference the EpisodeOfCare that defines the plan monitor (care manager) for the plan.<br/>
2) EpisodeOfCare &#8594; careManager references the Practitioner who is monitoring the plan.<br/>
3) telecom is of type ContactPoint (https://www.hl7.org/fhir/datatypes.html#contactpoint) which contains elements to populate for the phone number.<br/>
4) system is required if value is provided, and can be: phone, fax, email, pager, url, sms, other.<br/>
5) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Preference</td>
      <td>Presents the person's personal thoughts about something he or she feels is relevant to his or her life experience and may be pertinent when planning.</td>
      <td>CarePlan &#8594; supportingInfo(Observation)<br/>
<br/>
Observation &#8594; valueString<br/>
Observation &#8594; code &#8594; coding &#8594; code<br/>
Observation &#8594; code &#8594; coding &#8594; system<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Observation) 0..*<br/>
......valueString 0..1<br/>
......code 1<br/>
.........coding 0..*<br/>
............code 0..1<br/>
............system 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Observation containing the Preference.<br/>
2) code is required by FHIR and is a CodeableConcept where coding &#8594; code can be set to "Preference" with the corresponding NEW code -&gt; system "http://hl7.org/us/eLTSS/CodeSystem/eltss-observation-code".<br/>
3) valueString is where the Preference text would be provided.</td>
    </tr>
	
    <tr>
      <td>Plan Information</td>
      <td>Plan Effective Date</td>
      <td>The date upon which the plan goes into effect.<br/>
<br/>
Start date is required, end date is optional.</td>
      <td>CarePlan &#8594; period &#8594; start<br/>
CarePlan &#8594; period &#8594; end</td>
      <td>CarePlan 0..*<br/>
...period 0..1<br/>
......start 1<br/>
......end 0..1</td>
      <td>1) period includes a start and an end element, which are both dateTime formats which can be date, date-time or partial date (e.g. just year or year + month).<br/>
2) start is required by eLTSS.</td>
    </tr>
	
    <tr>
      <td>Service Provider Information</td>
      <td>Support Planner Name</td>
      <td>The name of the person (e.g., Case Manager, Care Coordinator, Plan Coordinator) who helped develop the plan.</td>
      <td>CarePlan &#8594; author(Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam)<br/>
<br/>
Practitioner | Patient | RelatedPerson<br/>
         &#8594; name &#8594; family<br/>
Practitioner | Patient | RelatedPerson<br/>
         &#8594; name &#8594; given<br/>
Practitioner | Patient | RelatedPerson<br/>
         &#8594; name &#8594; text<br/>
         Organization | CareTeam &#8594; name
         </td>
      <td>CarePlan<br/>
...author(Patient | Practitioner | RelatedPerson ) 0..1<br/>
......name 0..*<br/>
.........family 0..1<br/>
.........given 0..*<br/>
.........text 0..1<br />
CarePlan<br />
…author(Organization | CareTeam ) 0..1<br />
......name 0..1</td>
      <td>1) Will use CarePlan &#8594; author to reference a Practitioner, PractitionerRole, RelatedPerson, Organization, CareTeam or Patient (in self-directed plans) who is the primary author of the care plan being developed.<br/>
2) Practitioner, Organization, CareTeam, RelatedPerson and Patient all include name.<br/>
3) PractitionerRole should be used when the Organization for whom the Practitioner works for is also needed. <br />
4) given is used for both first name &amp; MI, so need more than one.<br/>
5) family is a string with the person's surname.<br/>
6) text is a string that contains the full name of the person.<br/>
<!--Updated to reflect resolution of Jira #23058-->
7) The values for Support Planner Name and Support Planner Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Service Provider Information</td>
      <td>Support Planner Phone Number</td>
      <td>The primary phone number (and extension when applicable) of the support planner.</td>
      <td>CarePlan &#8594; author(Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam )<br/>
<br/>
Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam <br/>
         &#8594; telecom &#8594; system<br/>
Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam <br/>
         &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...author(Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam ) 0..1<br/>
......telecom 0..*<br/>
.........system 0..1<br/>
.........value 0..1</td>
      <td>1) Will use CarePlan &#8594; author to reference a Practitioner, PractitionerRole, RelatedPerson, Organization, CareTeam or Patient (in self-directed plan) who is the primary author of the care plan being developed.<br/>
2) Practitioner, PractitionerRole, RelatedPerson, Organization, CareTeam and Patient all include telecom.<br/>
3) PractitionerRole should be used when the Organization for whom the Practitioner works for is also needed.<br />
4) telecom is of type <A href="https://www.hl7.org/fhir/datatypes.html#contactpoint">ContactPoint</A> which contains elements to populate for the phone number.<br/>
5) system is required if value is provided, and can be: phone, fax, email, pager, url, sms, other.<br/>
6) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".</td>
    </tr>

  </table>
  
  <table border="1">
    <tr>
      <th colspan="5">Data Requirements Not Specific to eLTSS Dataset Data Elements<br/>
This section documents data elements that are mandatory per FHIR XML schemas or US Core requirements, but that do not align with individual eLTSS Dataset data elements.</th>
    </tr>
    <tr>
      <th>FHIR Data Element Name<br/>
Requirement Source</th>
      <th>Data Element Definition</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
    </tr>
    <tr>
      <td>CarePlan Status<br/>
FHIR<br/>
US Core</td>
      <td>Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.</td>
      <td>CarePlan &#8594; status</td>
      <td>CarePlan<br/>
...status 1</td>
      <td>1) status is required by both FHIR and US Core, and must use the RequestStatus value set (http://hl7.org/fhir/valueset-request-status.html). Possible values are: draft, active, suspended, completed, entered-in-error, cancelled, and unknown.</td>
    </tr>
    <tr>
      <td>CarePlan Intent<br/>
FHIR<br/>
US Core </td>
      <td>Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain.</td>
      <td>CarePlan &#8594; intent</td>
      <td>CarePlan<br/>
...intent 1</td>
      <td>1) intent is required by both FHIR and US Core, and must use the CarePlanIntent value set (http://hl7.org/fhir/valueset-care-plan-intent.html). Possible values are: proposal, plan, order, and option.</td>
    </tr>
    <tr>
      <td>CarePlan Narrative Summary<br/>
US Core</td>
      <td>Text summary of the resource, for human interpretation. The narrative is an XHTML fragment with a flag to indicate its relationship to the data.</td>
      <td>CarePlan &#8594; text &#8594; status<br/>
CarePlan &#8594; text &#8594; div</td>
      <td>CarePlan<br/>
...text 1<br/>
......status 1<br/>
......div 1</td>
      <td>1) text is required by US Core.<br/>
2) status is required by FHIR and must use the NarrativeStatus value set (http://hl7.org/fhir/us/core/2019Jan/ValueSet-us-core-narrative-status.html). Possible values are: generated, additional.<br/>
3) div is required by FHIR and contains limited xhtml content that contains only the basic html formatting elements and attributes.</td>
    </tr>
    <tr>
      <td>CarePlan Category<br/>
US Core</td>
      <td>Identifies what "kind" of plan this is to support differentiation between multiple co-existing plans; e.g. "Home health", "psychiatric", "asthma", "disease management", "wellness plan", etc.</td>
      <td>CarePlan &#8594; category &#8594; coding &#8594; system<br/>
CarePlan &#8594; category &#8594; coding &#8594; code</td>
      <td>CarePlan<br/>
...category 1..*<br/>
......coding 1..*<br/>
.........system 1<br/>
.........code 1</td>
      <td>1) Per US Core, one category must appear, and must include system with the value "http://hl7.org/fhir/us/core/CodeSystem/careplan-category" and  code with the value "assess-plan".<br/>
2) US Core does not restrict the number of additional category elements that may appear.</td>
    </tr>
    <tr >
      <td>CarePlan Activity Status<br/>
FHIR</td>
      <td>Identifies what progress is being made for the specific activity.</td>
      <td>CarePlan &#8594; activity &#8594; reference(Resource) &#8594; status<br/>
			and<br/>
			CarePlan&#8594; activity &#8594; progress</td>
      <td>CarePlan<br/>
...activity<br/>
......reference(Resource)<br/>
.........status 1<br/>
and
CarePlan<br/>
...activity<br/>
......progress<br/>
</td>
      <td>1) status is required by FHIR in Resources Reference by CarePlan.activity.reference. Possible values are: not-started, scheduled, in-progress, on-hold, completed, cancelled, stopped, unknown, and entered-in-error.<br/>
	  2) There is also CarePlan.activity.progress to add a free-text description of the progress, or note. CarePlan.activity.progress is an Annotation data type in FHIR, this means it can be dated and contain the identification of the person who uttered the text. This might be used, for example, when the status stays in the same state, i.e. 'in-progress,' but where there is a evolution of that progress.</td>	  
	<!--td class="stu-note">Replaced use of CarePlan.activity.detail, and emphasized the use of the status element in the referenced activity and CarePlan.activity.progress free-text annotation</td-->
    </tr>
	
  </table>

---

// File: input/intro-notes/StructureDefinition-Claim-eltss-intro.md

#### Requesting and Recording payment for Task, Procedure or ServiceRequest
An important step in eLTSS is payment for services. The following highlights basic CORE FHIR associations that can be used, should business requirements request it.

A Claim FHIR Resource provides costing information, this can be a "claim" or "preauthorization" or "predetermination" (indicated with Claim.use).  The claim should be connected to the ServiceRequest with the Claim.referral referencing the ServiceRequest instance. As mentioned, the Procedure Resource can be used to communicate work performed if the business requirements need it. The Procedure can be connected to a Claim using Claim.procedure.procedureReference. Any Task records can be included by referencing using Claim.supportingInfo.

If business rules require it, the FHIR ClaimResponse Resource can be used "to provide the results of the adjudication and/or authorization of a set of healthcare-related products and services for a patient against the patient's insurance coverages, or to respond with what the adjudication would be for a supplied set of products or services should they be actually supplied to the patient." see [FHIR R4 ClaimResponse Resource](https://hl7.org/fhir/R4/claimresponse.html#bnr) In other words, the ClaimResponse Resource is used to respond to a FHIR Claim data instance. The ClaimResponse would detail the actual monies that could or would be paid. 

A final consideration is the use of ClaimResponse.net and Claim.net. They both detail the total cost. Using the total cost and the FHIR ServiceRequest (or FHIR Procedure) frequency and quantity information a system could theoretically calculate the hourly rate for a service requested or approved. This might be less ambiguous and more convenient than requesting entry of the cost per unit.

#### Implementer mapping guidance
The following aids in finding the location of eLTSS data elements. See [R4 FHIR Mapping page](eLTSS_to_FHIR_R4_element.html) for complete guidance, here we are providing a subset of fields for convenience. 

<table border="1">
    <tr>
      <th>eLTSS Grouping</th>
      <th>eLTSS Data Element Name</th>
      <th>Data Element Definition (includes examples, expected list of values and usage note where applicable)</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>

    </tr>
	
    <tr>
      <td>Service Information</td>
      <td>Service Rate per Unit</td>
      <td>The rate of one unit for a service.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; supportingInfo(Claim)<br/>
<br/>
Claim &#8594; item &#8594; unitPrice</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest)  0..1<br/>
.........supportingInfo(Claim) 0..*<br/>
............item 0..*<br/>
...............unitPrice 0..1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and supportingInfo to reference a Claim.<br/>
2) item maps to a service.<br/>
3) unitPrice contains the charge or cost per point, which maps to the cost per one unit of the service.<br/>
4) unitPrice is of type Money, which is a descendant of the Quantity complex type and inherits value, unit, system, code, and comparator.<br/>
5) Workgroup in charge of ServiceRequest wants to work with the Claim workgroup to determine best approach. One potential approach is to update the scope of ClaimResponse since that reflects what has been approved rather than what is being asked for.</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Total Cost of Service</td>
      <td>The total cost of a service for the plan.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; supportingInfo(Claim)<br/>
<br/>
Claim &#8594; item &#8594; net</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest)  0..1<br/>
.........supportingInfo(Claim) 0..*<br/>
............item 0..*<br/>
...............net 0..1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and supportingInfo to reference a Claim.<br/>
2) item maps to a service.<br/>
3) net is the total cost of an item, which in this case is the total cost for the service.<br/>
4) net is of type Money, which is a descendant of the Quantity complex type and inherits value, unit, system, code, and comparator.<br/>
5) See above.</td>
    </tr>

  </table>
  <table border="1">
    <tr>
      <th colspan="5">Data Requirements Not Specific to eLTSS Dataset Data Elements<br/>
This section documents data elements that are mandatory per FHIR XML schemas or US Core requirements, but that do not align with individual eLTSS Dataset data elements.</th>
    </tr>
	
    <tr>
      <th>FHIR Data Element Name<br/>
Requirement Source</th>
      <th>Data Element Definition</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
    </tr>
    <tr>
      <td>Claim Created<br/>
FHIR</td>
      <td>The date this resource was created.</td>
      <td>Claim &#8594; created</td>
      <td>Claim<br/>
...created 1</td>
      <td>1) created is required by FHIR. Could use date signers signed or agency authorized. Suggest using date/time that signers signed.</td>
    </tr>
    <tr>
      <td>Claim Insurance<br/>
FHIR</td>
      <td>Financial instruments for reimbursement for the health care products and services specified on the claim.</td>
      <td>Claim &#8594; insurance</td>
      <td>Claim<br/>
...insurance 1</td>
      <td>1) insurance is required by FHIR.</td>
    </tr>
    <tr>
      <td>Claim Insurance Sequence<br/>
FHIR</td>
      <td>A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.</td>
      <td>Claim &#8594; insurance &#8594; sequence</td>
      <td>Claim<br/>
...insurance 1<br/>
......sequence 1</td>
      <td>1) sequence is required by FHIR and is a positiveInt. Suggest using "1".</td>
    </tr>
    <tr>
      <td>Claim Insurance Focal<br/>
FHIR</td>
      <td>A flag to indicate that this Coverage is to be used for adjudication of this claim when set to true.</td>
      <td>Claim &#8594; insurance &#8594; focal</td>
      <td>Claim<br/>
...insurance 1<br/>
......focal 1</td>
      <td>1) focal is required by FHIR and is a boolean. Suggest using "true".</td>
    </tr>
    <tr>
      <td>Claim Insurance Coverage<br/>
FHIR</td>
      <td>Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.</td>
      <td>Claim &#8594; insurance &#8594; coverage</td>
      <td>Claim<br/>
...insurance 1<br/>
......coverage 1</td>
      <td>1) coverage is required by FHIR and references Coverage.</td>
    </tr>
    <tr>
      <td>Claim Item ProductOrService<br/>
FHIR</td>
      <td>When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item.</td>
      <td>Claim &#8594; item &#8594; productOrService</td>
      <td>Claim<br/>
...item 0..*<br/>
......productOrService 1</td>
      <td>1) productOrService is required by FHIR and must use the USCLS Codes value set (http://hl7.org/fhir/valueset-service-uscls.html). Suggest using the value "99555" for expense.</td>
    </tr>
    <tr>
      <td>Claim Patient<br/>
FHIR</td>
      <td>The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought.</td>
      <td>Claim &#8594; patient</td>
      <td>Claim<br/>
...patient 1</td>
      <td>1) patient is required by FHIR and references Patient.</td>
    </tr>
    <tr>
      <td>Claim Priority<br/>
FHIR</td>
      <td>The provider-required urgency of processing the request. </td>
      <td>Claim &#8594; priority</td>
      <td>Claim<br/>
...priority 1</td>
      <td>1) priority is required by FHIR and must use the Process Priority Codes value set (http://hl7.org/fhir/valueset-process-priority.html). Possible values are: stat, normal, deferred. Suggest using "normal".</td>
    </tr>
    <tr>
      <td>Claim Provider<br/>
FHIR</td>
      <td>The provider which is responsible for the claim, predetermination or preauthorization.</td>
      <td>Claim &#8594; provider</td>
      <td>Claim<br/>
...provider 1</td>
      <td>1) provider is required by FHIR and references Practitioner, PractitionerRole, Organization. Suggest using Practitioner or Organization.</td>
    </tr>
    <tr>
      <td>Claim Status<br/>
FHIR</td>
      <td>The status of the resource instance.</td>
      <td>Claim &#8594; status</td>
      <td>Claim<br/>
...status 1</td>
      <td>1) status is required by FHIR, and must use the Financial Resource Status Codes value set (http://hl7.org/fhir/valueset-fm-status.html). Possible values are: active, cancelled, draft, entered-in-error. Suggest using "active".</td>
    </tr>
    <tr>
      <td>Claim Type<br/>
FHIR</td>
      <td>The category of claim, e.g. oral, pharmacy, vision, institutional, professional.</td>
      <td>Claim &#8594; type</td>
      <td>Claim<br/>
...type 1</td>
      <td>1) type is required by FHIR, and contains the extensible Claim Type Codes value set (http://hl7.org/fhir/valueset-claim-type.html). Possible values are: institutional, oral, pharmacy, professional, vision. Could use "professional", could extend code list, or could use text data element that is part of codeable concept. </td>
    </tr>
    <tr>
      <td>Claim Use<br/>
FHIR</td>
      <td>A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.</td>
      <td>Claim &#8594; use</td>
      <td>Claim<br/>
...use 1</td>
      <td>1) use is required by FHIR, and must use the Use value set (http://hl7.org/fhir/valueset-claim-use.html). Possible values are: claim, preauthorization, predetermination. Suggest using "preauthorization"</td>
    </tr>
    <tr>
      <td>Claim Item Sequence<br/>
FHIR</td>
      <td>A number to uniquely identify item entries</td>
      <td>Claim &#8594; item &#8594; sequence</td>
      <td>Claim<br/>
...item 0..*<br/>
......sequence 1</td>
      <td>1) sequence is required by FHIR, and is a positive integer.</td>
    </tr>
  </table>


---

// File: input/intro-notes/StructureDefinition-Condition-eltss-intro.md

#### Implementer mapping guidance
The following aids in finding the location of eLTSS data elements. See [R4 FHIR Mapping page](eLTSS_to_FHIR_R4_element.html) for complete guidance, here we are providing a subset of fields for convenience. 

<table border="1">
    <tr>
      <th>eLTSS Grouping</th>
      <th>eLTSS Data Element Name</th>
      <th>Data Element Definition (includes examples, expected list of values and usage note where applicable)</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
	  <!--th class="stu-note">Important change</th-->
    </tr>	
	
	
	<tr >
      <td>Person Centered Planning</td>
      <td>Assessed Need</td>
      <td>The clinical and/or community-based necessity or desire as identified through an assessment that should be addressed by a service. </td>
      <td>CarePlan &#8594; addresses(Condition)<br/>
<br/>
Condition &#8594; code &#8594; text<br/>
Condition &#8594; category</td>
      <td>CarePlan<br/>
...addresses(Condition) 0..*<br/>
......code 1<br/>
.........text 0..1<br/>
......category 1..*</td>
      <td>1) Will use CarePlan &#8594; addresses to reference the Condition(s) for the care plan being developed.<br/>
2) code is required by US Core and is a CodeableConcept which per US Core is bound to the extensible Problem Value Set. That value set is based on SNOMED-CT and includes very specific values that do not line up with assessed needs. Per US Core's documentation on extensible CodeableConcepts, the CodeableConcept's text element can be used "if no suitable codes exist", so we can use the text element for the assessed need. Additionally, the Gravity SDOH FHIR IG has a value set of SDOH conditions.<br/>
3) Each assessed need should go into a separate Condition element so each can potentially be linked to a service(s) that addresses it.<br/>
4) Category is required by US Core and is a CodeableConcept which per US Core is bound to the extensible US Core Condition Category Codes value set (http://hl7.org/fhir/ValueSet/condition-category) which has values: problem-list-item, encounter-diagnosis and health-concern. The additional 'assessed-need' code can be used to relate that the Condition instance is about the clinical and/or community-based necessity or desire, as identified through an assessment, that should be addressed by a service. Consider also using the US Core 6.1.0 screening-assessment categories  https://www.hl7.org/fhir/us/core/ValueSet-us-core-screening-assessment-condition-category.html.<br/>
5) An "assessed need" condition can refer to another condition via the condition-dueTo extension.</td>
      <!--td class="stu-note">Now using US CORE Condition Category value set element "Health Concern"</td-->
    </tr>
	
	
	
  </table>
  <table border="1">
    <tr>
      <th colspan="5">Data Requirements Not Specific to eLTSS Dataset Data Elements<br/>
This section documents data elements that are mandatory per FHIR XML schemas or US Core requirements, but that do not align with individual eLTSS Dataset data elements.</th>
    </tr>
    <tr>
      <th>FHIR Data Element Name<br/>
Requirement Source</th>
      <th>Data Element Definition</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
    </tr>

    <tr>
      <td>Condition Verification Status<br/>
US Core</td>
      <td>The verification status to support the clinical status of the condition.</td>
      <td>Condition &#8594; verificationStatus</td>
      <td>Condition<br/>
...verificationStatus 1</td>
      <td>1) verificationStatus is required by US Core, and must use the ConditionVerificationStatus value set. Possible values are: provisional, differential, confirmed, refuted, entered-in-error, and unknown.</td>
    </tr>
    <tr>
      <td>Condition Clinical Status<br/>
US Core</td>
      <td>The clinical status of the condition.</td>
      <td>Condition &#8594; clinicalStatus</td>
      <td>Condition<br/>
...clinicalStatus 1</td>
      <td>1) clinicalStatus is required by US Core if the value of verificationStatus is not "entered-in-error". FHIR requires that the values come from the Condition Clinical Status Codes value set, which has values: active, recurrence, inactive, remission, and resolved.</td>
    </tr>
    <tr>
      <td>Condition Subject<br/>
US Core</td>
      <td> Who has the condition.</td>
      <td>Condition &#8594; subject(Patient)</td>
      <td>Condition<br/>
...subject 1</td>
      <td>1) subject is required by US Core, and is a reference to a Patient.</td>
    </tr>
  </table>

---

// File: input/intro-notes/StructureDefinition-Contract-eltss-intro.md

#### Implementer mapping guidance
The following aids in finding the location of eLTSS data elements. See [R4 FHIR Mapping page](eLTSS_to_FHIR_R4_element.html) for complete guidance, here we are providing a subset of fields for convenience. 

<table border="1">
    <tr>
      <th>eLTSS Grouping</th>
      <th>eLTSS Data Element Name</th>
      <th>Data Element Definition (includes examples, expected list of values and usage note where applicable)</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
	  
    </tr>

    <tr>
      <td>Plan Signatures</td>
      <td>Person Signature</td>
      <td>The depiction of the person's signature as proof of identity and intent for the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; type<br/>
Contract &#8594; signer &#8594; signature &#8594; data<br/>
Contract &#8594; signer &#8594; signature &#8594; type<br/>
Contract &#8594; signer &#8594; signature<br/>
         &#8594; who(Practitioner | PractitionerRole |<br/>
         RelatedPerson | Patient | Device |<br/>
         Organization)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........type 1<br/>
.........signature 1..*<br/>
............data 0..1<br/>
............type 1<br/>
............who(Practitioner | PractitionerRole |<br/>
            RelatedPerson | Patient | Device |<br/>
            Organization) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) Can use a single Contract element to contain all signatures.<br/>
3) signer requires the signature and a type that indicates the contract signatory role.<br/>
4) FHIR includes a preferred coding for contract signatory roles, which map well to the eLTSS signatories. The primary one for the patient/beneficiary is "PAT" (patient), although implementers may use others as well. However, implementers must realize that type may be used to differentiate between the patient, service provider, planner, etc. so there need to be distinct role types utilized.<br/>
5) data is the actual signature content (XML DigSig. JWT, picture, etc.)<br/>
6) signature requires it's own type element that indicates why the entity signed the contract, and FHIR provides a preferred code list. Would probably use "1.2.840.10065.1.12.1.7" which represents "consent signature" in this case.<br/>
7) signature requires a who to indicate who signed, which can be a Patient, Organization, Practitioner, PrationerRole, RelatedPerson or Device, although in this case it would be the Patient.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Person Printed Name</td>
      <td>The printed or typed name of the person.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; party(Patient)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........party(Patient) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) In this case, party is a reference to the Patient, and Patient is already documented above to include a name.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Person Signature Date</td>
      <td>The date the person signed the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; signature &#8594; when</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........signature 1..*<br/>
............when 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) when is required by FHIR, and indicates when the signature was created.<br/>
3) when is an instance type. An instant in time - known at least to the second and always includes a time zone. Note: This is intended for precisely observed times (typically system logs etc.), and not human-reported times - for them, use date and dateTime. instant is a more constrained dateTime.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Guardian / Legal Representative Signature</td>
      <td>The depiction of the guardian or legally authorized representative's signature as proof of identity and intent for the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; type<br/>
Contract &#8594; signer &#8594; signature &#8594; data<br/>
Contract &#8594; signer &#8594; signature &#8594; type<br/>
Contract &#8594; signer &#8594; signature<br/>
         &#8594; who(Practitioner | PractitionerRole |<br/>
         RelatedPerson | Patient | Device |<br/>
         Organization)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........type 1<br/>
.........signature 1..*<br/>
............data 0..1<br/>
............type 1<br/>
............who(Practitioner | PractitionerRole |<br/>
            RelatedPerson | Patient | Device |<br/>
            Organization) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) Can use a single Contract element to contain all signatures.<br/>
3) signer requires the signature and a type that indicates the contract signatory role.<br/>
4) FHIR includes a preferred coding for contract signatory roles, which map well to the eLTSS signatories. There are multiple values that may be used depending on how states want to map. For example, the list includes: "POWATT" (power of attorney), "GUARD" (guardian), "HPOWATT" (healthcare power of attorney), etc. However, implementers must realize that type may be used to differentiate between the patient, service provider, planner, etc. so there need to be distinct role types utilized.<br/>
5) data is the signature content (XML DigSig. JWT, picture, etc.)<br/>
6) signature requires it's own type element that indicates why the entity signed the contract, and FHIR provides a preferred value set. Would probably use "1.2.840.10065.1.12.1.7" which represents "consent signature" in this case.<br/>
7) signature requires a who  to indicate who signed, which can be a Patient, Organization, Practitioner, PractitionerRole, RelatedPerson or Device although in this case it would be the RelatedPerson.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Guardian / Legal Representative Printed Name</td>
      <td>The printed or typed name of the guardian or legally authorized representative.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; party(RelatedPerson)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........party(RelatedPerson) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) In this case, party is a reference to a RelatedPerson, and RelatedPatient includes a name.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Guardian / Legal Representative Signature Date</td>
      <td>The date the guardian or legally authorized representative signed the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; signature &#8594; when</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........signature 1..*<br/>
............when 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) when is required by FHIR, and indicates when the signature was created.<br/>
3) when is an instance type. An instant in time - known at least to the second and always includes a time zone. Note: This is intended for precisely observed times (typically system logs etc.), and not human-reported times - for them, use date and dateTime. instant is a more constrained dateTime.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Support Planner Signature</td>
      <td>The depiction of the support planner's signature as proof of identity and intent for the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; type<br/>
Contract &#8594; signer &#8594; signature &#8594; data<br/>
Contract &#8594; signer &#8594; signature &#8594; type<br/>
Contract &#8594; signer &#8594; signature<br/>
         &#8594; who(Practitioner | PractitionerRole | Organization<br/>
         RelatedPerson | Patient |<br/>
         Organization)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........type 1<br/>
.........signature 1..*<br/>
............data 0..1<br/>
............type 1<br/>
............who(Practitioner |PractitionerRole | Organization<br/>
            RelatedPerson | Patient |<br/>
            Organization) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) Can use a single Contract element to contain all signatures.<br/>
3) signer requires the signature and a type that indicates the contract signatory role.<br/>
4) FHIR includes a preferred coding for contract signatory roles, which map well to the eLTSS signatories. There are multiple values that may be used depending on how states want to map. For example, the list includes "AUT" (author) which aligns with author being the support planner for other eLTSS Dataset elements. However other role types may be appropriate as well such as "GUAR" (guarantor). However, implementers must realize that type may be used to differentiate between the patient, service provider, planner, etc. so there need to be distinct role types utilized.<br/>
5) data is the actual signature content (XML DigSig. JWT, picture, etc.)<br/>
6) signature requires it's own type element that indicates why the entity signed the contract, and FHIR provides a preferred value set, in this case could use "1.2.840.10065.1.12.1.1" for "Author's Signature".<br/>
7) signature requires a who to indicate who signed, which can be a Patient, Organization, Practitioner, PractitionerRole, RelatedPerson or Device. </td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Support Planner Printed Name</td>
      <td>The printed or typed name of the support planner.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; party(Practitioner|PractitionerRole|Organization)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........party(Practitioner|PractitionerRole|Organization)</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) In this case, party is a reference to a Practitioner, PractitionerRole or Organization (for cases when the Organization of the SupportPlanner is needed), and Practitioner and Organization includes a name.<br/>
<!--Updated to reflect the resolution of Jira #23058-->
3) The values for Support Planner Name and Support Planner Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Support Planner Signature Date</td>
      <td>The date the support planner signed the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; signature &#8594; when</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........signature 1..*<br/>
............when 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) when is required by FHIR, and indicates when the signature was created.<br/>
3) when is an instance type. An instant in time - known at least to the second and always includes a time zone. Note: This is intended for precisely observed times (typically system logs etc.), and not human-reported times - for them, use date and dateTime. instant is a more constrained dateTime.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Service Provider Signature</td>
      <td>The depiction of the service provider's signature as proof they agree to the services they will provide.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; type<br/>
Contract &#8594; signer &#8594; signature &#8594; data<br/>
Contract &#8594; signer &#8594; signature &#8594; type<br/>
Contract &#8594; signer &#8594; signature<br/>
         &#8594; who(Practitioner | PractitionerRole |<br/>
         RelatedPerson | Patient | Device |<br/>
         Organization)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........type 1<br/>
.........signature 1..*<br/>
............data 0..1<br/>
............type 1<br/>
............who(Practitioner |PractitionerRole |<br/>
            RelatedPerson | Patient | Device |<br/>
            Organization) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) Can use a single Contract element to contain all signatures.<br/>
3) signer requires the signature and a type that indicates the contract signatory role.<br/>
4) FHIR includes a preferred coding for contract signer roles, which map well to the eLTSS signatories. There are multiple values that may be used depending on how states want to map. The list includes "HPROV" (healthcare provider) which may be the best fit here, although others may be applicable. However, implementers must realize that type may be used to differentiate between the patient, service provider, planner, etc. so there need to be distinct role types utilized.<br/>
5) data is the actual signature content (XML DigSig. JWT, picture, etc.)<br/>
6) signature requires it's own type element that indicates why the entity signed the contract, and FHIR provides a preferred value set. In this case would probably use "1.2.840.10065.1.12.1.3" for "Co-participant's Signature".<br/>
7) signature requires a who  to indicate who signed, which can be a Patient, Organization, Practitioner, PractitionerRole, RelatedPerson or Device.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Service Provider Printed Name</td>
      <td>The printed or typed name of the service provider.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; party(Organization |<br/>
         Patient | Practitioner | PractitionerRole | RelatedPerson)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........party(Organization | Patient |<br/>
         Practitioner | PractitionerRole | RelatedPerson) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) party is a reference to an Organization, Patient, Practitioner, PractitionerRole or RelatedPerson, all of which include a name. (Patient may not make sense in the context of a service provided by a care plan, but is allowed in FHIR.)<br/>
<!--Updated to reflect resolution of Jira #23059-->
3) The values for Service Provider Name and Service Provider Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Service Provider Signature Date</td>
      <td>The date the service provider signed the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; signature &#8594; when</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........signature 1..*<br/>
............when 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) when is required by FHIR, and indicates when the signature was created.<br/>
3) when is an instance type. An instant in time - known at least to the second and always includes a time zone. Note: This is intended for precisely observed times (typically system logs etc.), and not human-reported times - for them, use date and dateTime. instant is a more constrained dateTime.</td>
    </tr>
  </table>



---

// File: input/intro-notes/StructureDefinition-EpisodeOfCare-eltss-intro.md

#### Implementer mapping guidance
The following aids in finding the location of eLTSS data elements. See [R4 FHIR Mapping page](eLTSS_to_FHIR_R4_element.html) for complete guidance, here we are providing a subset of fields for convenience. 

<table border="1">
    <tr>
      <th>eLTSS Grouping</th>
      <th>eLTSS Data Element Name</th>
      <th>Data Element Definition (includes examples, expected list of values and usage note where applicable)</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
	  
    </tr>
 
    <tr>
      <td>Person Centered Planning</td>
      <td>Plan Monitor Name</td>
      <td>The name of the person responsible for monitoring the plan.</td>
      <td>CarePlan &#8594; encounter (Encounter)<br/>
<br/>
Encounter &#8594; episodeOfCare(EpisodeOfCare)<br/>
<br/>
EpisodeOfCare &#8594; careManager(Practitioner)<br/>
<br/>
Practitioner &#8594; name &#8594; family<br/>
Practitioner &#8594; name &#8594; given<br/>
Practitioner &#8594; name &#8594; text</td>
      <td>CarePlan<br/>
...encounter(Encounter) 0..1<br/>
...... episodeOfCare(EpisodeOfCare)0..1<br/>
.........careManager(Practitioner) 0..1<br/>
............name 0..*<br/>
...............family 0-1<br/>
................given 0-*<br/>
................text 0-1</td>
      <td>1) Will use CarePlan &#8594; encounter to reference the EpisodeOfCare that defines the plan monitor (care manager) for the plan.<br/>
2) EpisodeOfCare &#8594; careManager references the Practitioner who is monitoring the plan.<br/>
3) given is used for both first name &amp; MI, so need more than one.<br/>
4) family is a string with the person's surname.<br/>
5) text is a string that contains the full name of the person.<br/>
6) The values for Plan Monitor Name and Plan Monitor Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Plan Monitor Phone Number</td>
      <td>The primary phone number (and extension when applicable) of the plan monitor.</td>
      <td>CarePlan &#8594; encounter (Encounter)<br/>
<br/>
Encounter &#8594; episodeOfCare(EpisodeOfCare)<br/>
<br/>
EpisodeOfCare &#8594; careManager(Practitioner)<br/>
<br/>
Practitioner &#8594; telecom &#8594; system<br/>
Practitioner &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...encounter(Encounter) 0..1<br/>
...... episodeOfCare(EpisodeOfCare)0..1<br/>
.........careManager(Practitioner) 0..1<br/>
............telecom 0..*<br/>
...............system 0..1<br/>
................value 0..1</td>
      <td>1) Will use CarePlan &#8594; encounter to reference the EpisodeOfCare that defines the plan monitor (care manager) for the plan.<br/>
2) EpisodeOfCare &#8594; careManager references the Practitioner who is monitoring the plan.<br/>
3) telecom is of type ContactPoint (https://www.hl7.org/fhir/datatypes.html#contactpoint) which contains elements to populate for the phone number.<br/>
4) system is required if value is provided, and can be: phone, fax, email, pager, url, sms, other.<br/>
5) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".</td>
    </tr>
  </table>
  <table border="1">
    <tr>
      <th colspan="5">Data Requirements Not Specific to eLTSS Dataset Data Elements<br/>
This section documents data elements that are mandatory per FHIR XML schemas or US Core requirements, but that do not align with individual eLTSS Dataset data elements.</th>
    </tr>
	
    <tr>
      <th>FHIR Data Element Name<br/>
Requirement Source</th>
      <th>Data Element Definition</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
    </tr>
    <tr>
      <td>EpisodeOfCare Status<br/>
FHIR</td>
      <td>Indicates the status of the episode of care.</td>
      <td>EpisodeOfCare &#8594; status</td>
      <td>EpisodeOfCare<br/>
...status 0..1</td>
      <td>1) status is required by FHIR, and must use the EpisodeOfCareStatus value set. Possible values are: planned, waitlist, active, onhold, finished, and cancelled.</td>
    </tr>
    <tr>
      <td>EpisodeOfCare Patient<br/>
FHIR</td>
      <td>The patient who is the focus of this episode of care.</td>
      <td>EpisodeOfCare &#8594; patient(Patient)</td>
      <td>EpisodeOfCare<br/>
...patient 0..1</td>
      <td>1) patient is required by FHIR, and is a reference to a Patient.</td>
    </tr>
  </table>


---

// File: input/intro-notes/StructureDefinition-Goal-eltss-intro.md

#### Implementer mapping guidance
The following aids in finding the location of eLTSS data elements. See [R4 FHIR Mapping page](eLTSS_to_FHIR_R4_element.html) for complete guidance, here we are providing a subset of fields for convenience. 

<table border="1">
    <tr>
      <th>eLTSS Grouping</th>
      <th>eLTSS Data Element Name</th>
      <th>Data Element Definition (includes examples, expected list of values and usage note where applicable)</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
	  <!--th class="stu-note">Important change</th-->
    </tr>

    <tr >
      <td>Goals &amp; Strengths</td>
      <td>Goal</td>
      <td>A statement of a desired result that the person wants to achieve.</td>
      <td>CarePlan &#8594; goal(Goal)<br/>
<br/>
Goal &#8594; description &#8594; text</td>
      <td>CarePlan<br/>
...goal(Goal) 0..*<br/>
......description 1<br/>
.........text 1<br/>
......subject(Patient) 1</td>
      <td>1) Will use CarePlan &#8594; goal to reference the Goal for the care plan being developed.<br/>
2) description is required by both FHIR and US Core, and is a CodableConcept whose text element, per US Core, must include a text description of the goal.<br/>
3) Each goal should go into a separate Goal element so each can potentially reference a step or action(s), or a service(s) that addresses the goal.<br/>
<!--Updated 4) in response to JIRA #23047 and matching XLS-->
4) A Goal can be referenced from a Step or Action or from a service. For a goal related to a step or action, use extension(pertainsToGoal). For a service request specific goal, also use extension(pertainsToGoal). Logically, these goals are exclusive to each other and the same goal isn't duplicated at both levels.<br/>
5) US Core requires the use of Goal &#8594; Subject to reference back to the Patient. </td>
<!--td class="stu-note">Replaced use of CarePlan.activity.detail, and emphasized the extension pertainsToGoal</td-->
    </tr>
    <tr >
      <td>Goals &amp; Strengths</td>
      <td>Step or Action</td>
      <td>A planned measurable step or action that needs to be taken to accomplish a goal identified by the person.</td>
	  <td>
CarePlan &#8594; activity<br/>
         &#8594; reference(Resource) &#8594; note<br/>
         &#8594; text
		 &#8594; extension(pertainsToGoal)</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(Resource) 0..1<br/>
.........note 0..*<br/>
............text 1<br/>
.........extension(pertainsToGoal)</td>
      <td>1) CarePlan includes activity &#8594; reference, which can be a reference to ServiceRequest, Task or other Resource.<br/>
2) ServiceRequest would be used when the Step or Action is a task under a service. If the Step or Action is an informal support or an activity being undertaken by the patient/care recipient, the Task Resource, similar to a Patient Task used in the Gravity SDOH IG, can be used.<br/>
3) activity &#8594; reference(Resource) is linked to the Goal the step or action addresses through the pertainsToGoal Extension in the referenced activity.<br/>
4) activity &#8594; reference(Resource) includes a performer, author, participant with type or other data element that can be used to reference who is responsible for performing the step or action, such as to indicate that the person or a related person is responsible.<br/>
5) text is where the Step or Action text would be provided.<br/>
6) text is required by FHIR if note is provided.<br/>
7) Note that a stated goal may lead directly to a service, and not necessarily to an explicit Step or Action. For example, a person's goal could be to attend church regularly, and this would be achieved through a transportation service.</td>
	<!--td class="stu-note">Replaced use of CarePlan.activity.detail, and emphasized the extension pertainsToGoal</td-->
    </tr>
	
  </table>
  <table border="1">
    <tr>
      <th colspan="5">Data Requirements Not Specific to eLTSS Dataset Data Elements<br/>
This section documents data elements that are mandatory per FHIR XML schemas or US Core requirements, but that do not align with individual eLTSS Dataset data elements.</th>
    </tr>
    <tr>
      <th>FHIR Data Element Name<br/>
Requirement Source</th>
      <th>Data Element Definition</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
    </tr>

    <tr>
      <td>Goal LifecycleStatus<br/>
FHIR<br/>
US Core</td>
      <td>The state of the goal throughout its lifecycle.</td>
      <td>Goal &#8594; lifecycleStatus</td>
      <td>Goal 0..*<br/>
...lifecycleStatus 1</td>
      <td>1) lifecycleStatus is required by both FHIR and US Core, and must use the GoalStatus value set which has values: proposed, accepted, in-progress, etc.</td>
    </tr>
    <tr>
      <td>Goal Subject<br/>
FHIR<br/>
US Core</td>
      <td>Identifies the patient, group or organization for whom the goal is being established.</td>
      <td>Goal &#8594; subject(Patient)</td>
      <td>Goal<br/>
...subject 1</td>
      <td>1) subject is required by both FHIR and US Core, and is a reference to a Patient.</td>
    </tr>
	
  </table>


---

// File: input/intro-notes/StructureDefinition-Location-eltss-intro.md

#### Implementer mapping guidance
The following aids in finding the location of eLTSS data elements. See [R4 FHIR Mapping page](eLTSS_to_FHIR_R4_element.html) for complete guidance, here we are providing a subset of fields for convenience. 

<table border="1">
    <tr>
      <th>eLTSS Grouping</th>
      <th>eLTSS Data Element Name</th>
      <th>Data Element Definition (includes examples, expected list of values and usage note where applicable)</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
	  
    </tr>

    <tr>
      <td>Service Information</td>
      <td>Service Delivery Address</td>
      <td>The address where service delivery will take place if service will not be provided at the person's address.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; locationReference(Location)<br/>
<br/>
Location &#8594; address &#8594; line<br/>
Location &#8594; address &#8594; city<br/>
Location &#8594; address &#8594; district<br/>
Location &#8594; address &#8594; state<br/>
Location &#8594; address &#8594; postalCode<br/>
Location &#8594; address &#8594; text<br/>
Location &#8594; description</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........locationReference(Location) 0..*<br/>
............address 0..*<br/>
...............line 0..*<br/>
...............city 0..1<br/>
...............district 0..1<br/>
...............state 0..1<br/>
...............postalCode 0..1<br/>
...............text 0..1<br/>
............description 0..1</td>
      <td>1) activity is part of CarePlan, so no references are required to link the two.<br/>
2) text is the full (not broken out) address.<br/>
3 line includes street name, number and suffix (e.g. 123 Main St.).<br/>
4) Information such as apt #, floor &amp; room #, etc. also go into line, generally as a separate data element.<br/>
5) district covers county.<br/>
6) description can be used when the location is not a specific address, such as when support is being provided at a general location, such as someone providing assistance wherever the recipient grocery shops.</td>
    </tr>

  </table>
  <table border="1">
    <tr>
      <th colspan="5">Data Requirements Not Specific to eLTSS Dataset Data Elements<br/>
This section documents data elements that are mandatory per FHIR XML schemas or US Core requirements, but that do not align with individual eLTSS Dataset data elements.</th>
    </tr>
    <tr>
      <th>FHIR Data Element Name<br/>
Requirement Source</th>
      <th>Data Element Definition</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
    </tr>

    <tr>
      <td>Location Name<br/>
US Core</td>
      <td>Name of the location as used by humans. Does not need to be unique.</td>
      <td>Location &#8594; name</td>
      <td>Location<br/>
...name 1</td>
      <td>1) US Core requires a name for the Location.</td>
    </tr>

  </table>

---

// File: input/intro-notes/StructureDefinition-Observation-eltss-intro.md

#### Implementer mapping guidance
The following aids in finding the location of eLTSS data elements. See [R4 FHIR Mapping page](eLTSS_to_FHIR_R4_element.html) for complete guidance, here we are providing a subset of fields for convenience. 

<table border="1">
    <tr>
      <th>eLTSS Grouping</th>
      <th>eLTSS Data Element Name</th>
      <th>Data Element Definition (includes examples, expected list of values and usage note where applicable)</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
	  
    </tr>

    <tr>
      <td>Goals &amp; Strengths</td>
      <td>Strength</td>
      <td>A favorable attribute of oneself, his/her support network, environment and/or elements of his/her life.</td>
      <td>CarePlan &#8594; supportingInfo(Observation)<br/>
<br/>
Observation &#8594; valueString<br/>
Observation &#8594; code &#8594; coding &#8594; code
Observation &#8594; code &#8594; coding &#8594; system</td>
      <td>
      CarePlan<br/>
...supportingInfo(Observation) 0..*<br/>
......valueString 0..1<br/>
......code 1<br/>
........coding 0..*<br/>
..........code 0..1<br/>
............system 0..1<br/>
</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Observation containing the Strength.<br/>
2) code is required by FHIR, and is a CodeableConcept where coding &#8594; code can be set to "Strength" with the corresponding NEW code &#8594; system "http://hl7.org/us/eLTSS/CodeSystem/eltss-observation-code".<br/>
3) valueString is where the Strength text would be provided.</td>
    </tr>

    <tr>
      <td>Person Centered Planning</td>
      <td>Preference</td>
      <td>Presents the person's personal thoughts about something he or she feels is relevant to his or her life experience and may be pertinent when planning.</td>
      <td>CarePlan &#8594; supportingInfo(Observation)<br/>
<br/>
Observation &#8594; valueString<br/>
Observation &#8594; code &#8594; coding &#8594; code<br/>
Observation &#8594; code &#8594; coding &#8594; system<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Observation) 0..*<br/>
......valueString 0..1<br/>
......code 1<br/>
.........coding 0..*<br/>
............code 0..1<br/>
............system 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Observation containing the Preference.<br/>
2) code is required by FHIR and is a CodeableConcept where coding &#8594; code can be set to "Preference" with the corresponding NEW code -&gt; system "http://hl7.org/us/eLTSS/CodeSystem/eltss-observation-code".<br/>
3) valueString is where the Preference text would be provided.</td>
    </tr>

  </table>
  <table border="1">
    <tr>
      <th colspan="5">Data Requirements Not Specific to eLTSS Dataset Data Elements<br/>
This section documents data elements that are mandatory per FHIR XML schemas or US Core requirements, but that do not align with individual eLTSS Dataset data elements.</th>
    </tr>
    <tr>
      <th>FHIR Data Element Name<br/>
Requirement Source</th>
      <th>Data Element Definition</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
    </tr>

    <tr>
      <td>Observation Status<br/>
FHIR</td>
      <td>The status of the result value.</td>
      <td>Observation &#8594; status</td>
      <td>Observation<br/>
...status 1</td>
      <td>1) status is required by FHIR, and the values are: final, preliminary, registered, cancelled, amended, corrected, entered-in-error, and unknown.</td>
    </tr>

  </table>

---

// File: input/intro-notes/StructureDefinition-Patient-eltss-intro.md

#### Implementer mapping guidance
The following aids in finding the location of eLTSS data elements. See [R4 FHIR Mapping page](eLTSS_to_FHIR_R4_element.html) for complete guidance, here we are providing a subset of fields for convenience. 

<table border="1">
    <tr>
      <th>eLTSS Grouping</th>
      <th>eLTSS Data Element Name</th>
      <th>Data Element Definition (includes examples, expected list of values and usage note where applicable)</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
	  
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Person Name</td>
      <td>The name of the person whom the plan is for.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; name &#8594; family<br/>
Patient &#8594; name &#8594; given<br/>
Patient &#8594; name &#8594; text</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......name 1..*<br/>
.........family 1<br/>
.........given 1..*<br/>
.........text 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) given is used for both first name &amp; MI, so need more than one.<br/>
3) family is a string with the person's surname.<br/>
4) text is a string that contains the full name of the person.<br/>
5) Per US Core 1.0.1, each Patient must have at least one name, and each name must include family and given.</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Person Identifier</td>
      <td>A string of character(s) used to identify the person whom the plan is for.<br/>
<br/>
This may be the Medicaid ID number where applicable.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; identifier &#8594; value</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......identifier 1..*<br/>
.........value 1<br/>
.........system 1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) identifier is of type Identifier. value is a text element.<br/>
3) Per US Core 1.0.1, each Patient must have at least 1 identifier, and each identifier must include a value and system. system is the namespace for the identifier value.</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Person Identifier Type</td>
      <td>The type of unique identifier used to identify the person whom the plan is for.<br/>
Values include: Medicaid Number, State ID, Medical Record Number, Other (free text)</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; identifier &#8594; type</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......identifier 1..*<br/>
.........type 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) If we have the identifier, we need to be know the type.<br/>
3) type is a CodeableConcept with an extensible value set with values defined <A href="https://www.hl7.org/fhir/valueset-identifier-type.html">here</A>. <br/>  Medical Record Number is available in the documented code list. LOINC includes Medicaid Number (45400-9) and Social Security Number (45396-9). State ID is covered by the "SB" (Social Beneficiary) code value documented in the FHIR codeset at http://hl7.org/fhir/identifier-type. "Other" can be handled with the text element that is part of the Codeable Concept.</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Person Date of Birth</td>
      <td>The birth date of the person whom the plan is for.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; birthDate</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......birthDate 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) birthDate is in the form "1951-06-04". </td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Person Phone Number</td>
      <td>The primary phone number of the person whom the plan is for, or his/her legal representative, where applicable.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; telecom &#8594; system<br/>
Patient &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......telecom 0..*<br/>
.........value 0..1<br/>
.........system 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) telecom is of type ContactPoint which contains elements to populate for the phone number.<br/>
3) system is required by FHIR if value is provided, and can be: phone | fax | email | pager | url | sms | other. For the eLTSS phone number, system should be provided as "phone".<br/>
4) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Person Address</td>
      <td>The address of the person whom the plan is for.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; address &#8594; line<br/>
Patient &#8594; address &#8594; city<br/>
Patient &#8594; address &#8594; state<br/>
Patient &#8594; address &#8594; postalCode<br/>
Patient &#8594; address &#8594; district<br/>
Patient &#8594; address &#8594; text</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......address 0..*<br/>
.........line 0..*<br/>
.........city 0..1<br/>
.........state 0..1<br/>
.........postalCode 0..1<br/>
.........district 0..1<br/>
.........text 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) text is the full (not broken out) address.<br/>
3) line includes street name, number and suffix (e.g. 123 Main St.).<br/>
4) Information such as apt #, floor &amp; room #, etc. also go into line, generally as a separate data element.<br/>
5) district covers county.</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Emergency <br/>
Contact Name</td>
      <td>The name of the individual or entity identified to contact in case of emergency.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; contact &#8594; relationship<br/>
Patient &#8594; contact &#8594; name &#8594; family<br/>
Patient &#8594; contact &#8594; name &#8594; given<br/>
Patient &#8594; contact &#8594; name &#8594; text</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......contact 0..*<br/>
.........relationship 1..*<br/>
.........name 0..1<br/>
............family 0..1<br/>
............given 0..*<br/>
............text 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) Emergency contact is indicated using a relationship value "C".<br/>
3) If contact is provided, relationship needs to be provided to indicate this is an emergency contact.<br/>
4) given is used for both first name &amp; MI, so need more than one.<br/>
5) family is a string with the person's surname.<br/>
6) text is a string with the full name of the person.</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Emergency <br/>
Contact Relationship</td>
      <td>The relationship (e.g., spouse, neighbor, guardian, daughter) of the individual identified to contact in case of emergency.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; contact &#8594; relationship</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......contact 0..*<br/>
.........relationship 1..*</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) Emergency contact is indicated using a relationship value "C".<br/>
Other contact codes can be found here: https://www.hl7.org/fhir/v2/0131/index.html<br/>
3) The emergency contact would have two relationship data elements, one to indicate that it is an emergency contact and one to indicate the relationship between the patient and the contact (such as "next-of-kin").<br/>
4) There are other value sets that could be used to provide more detail, for example daughter or neighbor. Can use the value set http://www.hl7.org/implement/standards/fhir/valueset-relatedperson-relationshiptype.html</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Emergency <br/>
Contact Phone Number</td>
      <td>The primary phone number (and extension when applicable) of the individual or entity identified to contact in case of emergency.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; contact &#8594; telecom &#8594; system<br/>
Patient &#8594; contact &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......contact 0..*<br/>
.........telecom 0..*<br/>
............value 0..1<br/>
............system 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) telecom is of type ContactPoint which contains elements to populate for the phone number.<br/>
3) system is required if value is provided, and can be: phone, fax, email, pager, url, sms, or other.<br/>
4) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Emergency Backup Plan</td>
      <td>Description of how to address unforeseen events, emergency health events, emergency events, problems with medical equipment and supplies, and unavailable staffing situations for critical services that put the person's health and safety at risk.<br/>
<br/>
This can be included as free text or attachment.</td>
      <td>CarePlan [emergency backup plan]<br/>
         &#8594; subject(Patient)<br/>
CarePlan [emergency backup plan]<br/>
         &#8594; description<br/>
CarePlan [emergency backup plan]<br/>
         &#8594; partOf(CarePlan) ["main" Care Plan]<br/></td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
...description 0..1<br/>
...part of(CarePlan) 0..*<br/>
</td>
      <td>1) The CarePlan resource containing the emergency backup plan refers to the "main" CarePlan resource, rather than the other way around, by using the emergency backup plan CarePlan &#8594; partOf data element to reference the "main" CarePlan data element.<br/>
2) FHIR requires that CarePlan includes a subject.<br/>
3) description contains the text of the Emergency Backup Plan if provided as text.<br/>
4) type indicates the kind of document, but the documented preferred LOINC value set does not include anything corresponding to an emergency backup plan. Therefore we can use the Codeable Concept's text data element to indicate "Emergency Backup Plan". (type is mandatory in FHIR 3.0.1, but optional in the R4 draft.)<br/></td>
    </tr>
  </table>
  
  <table border="1">
    <tr>
      <th colspan="5">Data Requirements Not Specific to eLTSS Dataset Data Elements<br/>
This section documents data elements that are mandatory per FHIR XML schemas or US Core requirements, but that do not align with individual eLTSS Dataset data elements.</th>
    </tr>
    <tr>
      <th>FHIR Data Element Name<br/>
Requirement Source</th>
      <th>Data Element Definition</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
    </tr>
	
    <tr>
      <td>Patient Administrative Gender<br/>
US Core</td>
      <td>The gender that the patient is considered to have for administration and record keeping purposes.</td>
      <td>Patient &#8594; gender</td>
      <td>Patient<br/>
...gender 1</td>
      <td>1) gender is required by US Core and must use the AdministrativeGender value set. Possible values are: male, female, other, and unknown.</td>
    </tr>

  </table>

---

// File: input/intro-notes/StructureDefinition-Practitioner-eltss-intro.md

#### Implementer mapping guidance
The following aids in finding the location of eLTSS data elements. See [R4 FHIR Mapping page](eLTSS_to_FHIR_R4_element.html) for complete guidance, here we are providing a subset of fields for convenience. 

<table border="1">
    <tr>
      <th>eLTSS Grouping</th>
      <th>eLTSS Data Element Name</th>
      <th>Data Element Definition (includes examples, expected list of values and usage note where applicable)</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
	  
    </tr>

    <tr>
      <td>Person Centered Planning</td>
      <td>Plan Monitor Name</td>
      <td>The name of the person responsible for monitoring the plan.</td>
      <td>CarePlan &#8594; encounter (Encounter)<br/>
<br/>
Encounter &#8594; episodeOfCare(EpisodeOfCare)<br/>
<br/>
EpisodeOfCare &#8594; careManager(Practitioner)<br/>
<br/>
Practitioner &#8594; name &#8594; family<br/>
Practitioner &#8594; name &#8594; given<br/>
Practitioner &#8594; name &#8594; text</td>
      <td>CarePlan<br/>
...encounter(Encounter) 0..1<br/>
...... episodeOfCare(EpisodeOfCare)0..1<br/>
.........careManager(Practitioner) 0..1<br/>
............name 0..*<br/>
...............family 0-1<br/>
................given 0-*<br/>
................text 0-1</td>
      <td>1) Will use CarePlan &#8594; encounter to reference the EpisodeOfCare that defines the plan monitor (care manager) for the plan.<br/>
2) EpisodeOfCare &#8594; careManager references the Practitioner who is monitoring the plan.<br/>
3) given is used for both first name &amp; MI, so need more than one.<br/>
4) family is a string with the person's surname.<br/>
5) text is a string that contains the full name of the person.<br/>
6) The values for Plan Monitor Name and Plan Monitor Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Plan Monitor Phone Number</td>
      <td>The primary phone number (and extension when applicable) of the plan monitor.</td>
      <td>CarePlan &#8594; encounter (Encounter)<br/>
<br/>
Encounter &#8594; episodeOfCare(EpisodeOfCare)<br/>
<br/>
EpisodeOfCare &#8594; careManager(Practitioner)<br/>
<br/>
Practitioner &#8594; telecom &#8594; system<br/>
Practitioner &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...encounter(Encounter) 0..1<br/>
...... episodeOfCare(EpisodeOfCare)0..1<br/>
.........careManager(Practitioner) 0..1<br/>
............telecom 0..*<br/>
...............system 0..1<br/>
................value 0..1</td>
      <td>1) Will use CarePlan &#8594; encounter to reference the EpisodeOfCare that defines the plan monitor (care manager) for the plan.<br/>
2) EpisodeOfCare &#8594; careManager references the Practitioner who is monitoring the plan.<br/>
3) telecom is of type ContactPoint (https://www.hl7.org/fhir/datatypes.html#contactpoint) which contains elements to populate for the phone number.<br/>
4) system is required if value is provided, and can be: phone, fax, email, pager, url, sms, other.<br/>
5) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".</td>
    </tr>
 <tr>
      <td>Service Provider Information</td>
      <td>Support Planner Name</td>
      <td>The name of the person (e.g., Case Manager, Care Coordinator, Plan Coordinator) who helped develop the plan.</td>
      <td>CarePlan &#8594; author(Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam)<br/>
<br/>
Practitioner | Patient | RelatedPerson<br/>
         &#8594; name &#8594; family<br/>
Practitioner | Patient | RelatedPerson<br/>
         &#8594; name &#8594; given<br/>
Practitioner | Patient | RelatedPerson<br/>
         &#8594; name &#8594; text<br/>
         Organization | CareTeam &#8594; name
         </td>
      <td>CarePlan<br/>
...author(Patient | Practitioner | RelatedPerson ) 0..1<br/>
......name 0..*<br/>
.........family 0..1<br/>
.........given 0..*<br/>
.........text 0..1<br />
CarePlan<br />
…author(Organization | CareTeam ) 0..1<br />
......name 0..1</td>
      <td>1) Will use CarePlan &#8594; author to reference a Practitioner, PractitionerRole, RelatedPerson, Organization, CareTeam or Patient (in self-directed plans) who is the primary author of the care plan being developed.<br/>
2) Practitioner, Organization, CareTeam, RelatedPerson and Patient all include name.<br/>
3) PractitionerRole should be used when the Organization for whom the Practitioner works for is also needed. <br />
4) given is used for both first name &amp; MI, so need more than one.<br/>
5) family is a string with the person's surname.<br/>
6) text is a string that contains the full name of the person.<br/>
<!--Updated to reflect resolution of Jira #23058-->
7) The values for Support Planner Name and Support Planner Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Service Provider Information</td>
      <td>Support Planner Phone Number</td>
      <td>The primary phone number (and extension when applicable) of the support planner.</td>
      <td>CarePlan &#8594; author(Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam )<br/>
<br/>
Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam <br/>
         &#8594; telecom &#8594; system<br/>
Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam <br/>
         &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...author(Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam ) 0..1<br/>
......telecom 0..*<br/>
.........system 0..1<br/>
.........value 0..1</td>
      <td>1) Will use CarePlan &#8594; author to reference a Practitioner, PractitionerRole, RelatedPerson, Organization, CareTeam or Patient (in self-directed plan) who is the primary author of the care plan being developed.<br/>
2) Practitioner, PractitionerRole, RelatedPerson, Organization, CareTeam and Patient all include telecom.<br/>
3) PractitionerRole should be used when the Organization for whom the Practitioner works for is also needed.<br />
4) telecom is of type <A href="https://www.hl7.org/fhir/datatypes.html#contactpoint">ContactPoint</A> which contains elements to populate for the phone number.<br/>
5) system is required if value is provided, and can be: phone, fax, email, pager, url, sms, other.<br/>
6) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".</td>
    </tr>
    <tr>
      <td>Service Provider Information</td>
      <td>Service Provider Name</td>
      <td>The name of the entity or individual providing the service.<br/>
<br/>
For paid services use the organization/agency name, for non-paid services use the first and last name of the individual providing the service.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; performer(Practitioner<br/>
            | PractitionerRole | Organization<br/>
            | Patient | Device | RelatedPerson<br/>
            | HealthcareService | CareTeam)<br/>
<br/>
Practitioner | PractitionerRole | CareTeam<br/>
             | Organization | Patient | Device<br/>
             | RelatedPerson | HealthcareService<br/>
         &#8594; name</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........performer(Practitioner |<br/>
         PractitionerRole | Patient |<br/>
         Device | RelatedPerson |<br/>
         HealthcareService | CareTeam) 0..*<br/>
............name 0..1<br/>
----------------------------------<br/>
.........performer(Organization) 0..*<br/>
............name 1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and performer to reference a RelatedPerson, Organization or HealthcareService. Other options listed are available in FHIR, but may not be appropriate here.<br/>
2) Per eLTSS Dataset element definition, performer would reference an Organization or HealthcareService for paid services, and RelatedPerson for a non-paid service.<br/>
3) Organization &#8594; name and HealthcareService &#8594; name are strings with the organization's name.<br/>
4) RelatedPerson &#8594; name is a complex data element that includes strings for the person's surname and first name.<br/>
6) name is required by US Core for Organization.<br/>
<!--Updated to reflect resolution for Jira #23059-->
7) The values for Service Provider Name and Service Provider Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Service Provider Information</td>
      <td>Service Provider Phone Number</td>
      <td>The primary phone number (and extension when applicable) of the service provider.</td>
      <td><br/>
CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; performer(Practitioner<br/>
            | PractitionerRole | Organization<br/>
            | Patient | Device | RelatedPerson<br/>
            | HealthcareService | CareTeam)<br/>
<br/>
Practitioner | PractitionerRole | CareTeam<br/>
             | Organization | Patient | Device<br/>
             | RelatedPerson | HealthcareService<br/>
          &#8594; telecom &#8594; system<br/>
Practitioner | PractitionerRole | CareTeam<br/>
             | Organization | Patient | Device<br/>
             | RelatedPerson | HealthcareService<br/>
         &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........performer(Practitioner |<br/>
         PractitionerRole | Patient |<br/>
         Device | RelatedPerson |<br/>
         HealthcareService | CareTeam) 0..*<br/>
............telecom 0..*<br/>
.............system 0..1<br/>
.............value 0..1<br/>
----------------------------------<br/>
.........performer(Organization) 0..*<br/>
............telecom 1..*<br/>
.............system 0..1<br/>
.............value 1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and performer to reference a RelatedPerson, Organization or HealthcareService. Other options listed are available in FHIR, but may not be appropriate here.<br/>
2) Per eLTSS Dataset element definition, performer would reference an Organization or HealthcareService for paid services, and RelatedPerson for a non-paid service.<br/>
3) telecom is of type ContactPoint (https://www.hl7.org/fhir/datatypes.html#contactpoint) which contains elements to populate for the phone number.<br/>
4) system is required if value is provided, and can be: phone, fax, email, pager, url, sms, other.<br/>
5) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".<br/>
6) US Core requires at least one contact be provided in telecom for an Organization.</td>
    </tr>

  </table>
  <table border="1">
    <tr>
      <th colspan="5">Data Requirements Not Specific to eLTSS Dataset Data Elements<br/>
This section documents data elements that are mandatory per FHIR XML schemas or US Core requirements, but that do not align with individual eLTSS Dataset data elements.</th>
    </tr>
    <tr>
      <th>FHIR Data Element Name<br/>
Requirement Source</th>
      <th>Data Element Definition</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
    </tr>

    <tr>
      <td>Practitioner Identifier<br/>
US Core</td>
      <td>An identifier that applies to this person in this role.</td>
      <td>Practitioner &#8594; identifier</td>
      <td>Practitioner<br/>
...identifier 1..*</td>
      <td>1) At least one identifier is required by US Core. NPI is preferred. Tax id is allowed. Local id is allowed in addition to 'authoritative' identifier.</td>
    </tr>
    <tr>
      <td>Practitioner Name<br/>
US Core</td>
      <td>The name(s) associated with the practitioner.</td>
      <td>Practitioner &#8594; name</td>
      <td>Practitioner<br/>
...name 1</td>
      <td>1) US Core requires one name for a Practitioner.</td>
    </tr>
  </table>


---

// File: input/intro-notes/StructureDefinition-Questionnaire-eltss-intro.md

#### Implementer mapping guidance
The following aids in finding the location of eLTSS data elements. See [R4 FHIR Mapping page](eLTSS_to_FHIR_R4_element.html) for complete guidance, here we are providing a subset of fields for convenience. 

<table border="1">
    <tr>
      <th>eLTSS Grouping</th>
      <th>eLTSS Data Element Name</th>
      <th>Data Element Definition (includes examples, expected list of values and usage note where applicable)</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
	  
    </tr>

    <tr>
      <td>Person Centered Planning</td>
      <td>Person Setting Choice Indicator</td>
      <td>Indicator that reflects the setting in which the person resides is chosen by the individual.</td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueBoolean<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueBoolean 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueBoolean is the actual response to the question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The value "boolean" would apply here. Boolean "true" would indicate "yes".</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Person Setting Choice Options</td>
      <td>The alternative home and community-based settings that were considered by the individual. </td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueString<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueString 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueString is the actual text of the response to a question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The values "string" (for a few words or short sentence) or "text" (potentially multi-paragraph) would apply here.</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Service Options Given Indicator</td>
      <td>States whether or not the person was given a choice of services outlined in the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueBoolean<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueBoolean 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueBoolean is the actual response to the question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The value "boolean" would apply here. Boolean "true" would indicate "yes".</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Service Selection Indicator</td>
      <td>States whether or not the person participated in the selection of the services outlined in the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueBoolean<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueBoolean 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueBoolean is the actual response to the question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The value "boolean" would apply here. Boolean "true" would indicate "yes".</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Service Plan Agreement Indicator</td>
      <td>States whether or not the person agrees to the services outlined in the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueBoolean<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueBoolean 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueBoolean is the actual response to the question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The value "boolean" would apply here. Boolean "true" would indicate "yes".</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Service Provider Options Given Indicator</td>
      <td>States whether or not the person was offered a choice of providers for each service.</td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueBoolean<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueBoolean 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueBoolean is the actual response to the question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The value "boolean" would apply here. Boolean "true" would indicate "yes".</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Service Provider Selection Agreement Indicator</td>
      <td>States whether or not the person feels he/she made an informed choice in selecting the provider for each service.</td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueBoolean<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueBoolean 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueBoolean is the actual response to the question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The value "boolean" would apply here. Boolean "true" would indicate "yes".</td>
    </tr>
  </table>
  
  <table border="1">
    <tr>
      <th colspan="5">Data Requirements Not Specific to eLTSS Dataset Data Elements<br/>
This section documents data elements that are mandatory per FHIR XML schemas or US Core requirements, but that do not align with individual eLTSS Dataset data elements.</th>
    </tr>
    <tr>
      <th>FHIR Data Element Name<br/>
Requirement Source</th>
      <th>Data Element Definition</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
    </tr>
<tr>
      <td>QuestionnaireResponse Status<br/>
FHIR</td>
      <td>The position of the questionnaire response within its overall lifecycle.</td>
      <td>QuestionnaireResponse &#8594; status</td>
      <td>QuestionnaireResponse<br/>
...status 1</td>
      <td>1) status is required by FHIR and must use the QuestionnaireResponseStatus value set. Possible values are: in-progress, completed, amended, entered-in-error, and stopped.</td>
    </tr>
    <tr>
      <td>Questionnaire Status<br/>
FHIR</td>
      <td>The status of this questionnaire. Enables tracking the life-cycle of the content.</td>
      <td>Questionnaire &#8594; status</td>
      <td>Questionnaire<br/>
...status 1</td>
      <td>1) status is required by FHIR and must use the PublicationStatus value set. Possible values are: draft, active, retired, and unknown.</td>
    </tr>
  </table>


---

// File: input/intro-notes/StructureDefinition-RiskAssessment-eltss-intro.md

#### Implementer mapping guidance
The following aids in finding the location of eLTSS data elements. See [R4 FHIR Mapping page](eLTSS_to_FHIR_R4_element.html) for complete guidance, here we are providing a subset of fields for convenience. 

<table border="1">
    <tr>
      <th>eLTSS Grouping</th>
      <th>eLTSS Data Element Name</th>
      <th>Data Element Definition (includes examples, expected list of values and usage note where applicable)</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
    </tr>
    <tr>
      <td>Risks</td>
      <td>Identified Risk</td>
      <td>An aspect of a person's life, behavior, environmental exposure, personal characteristic, Social determinants of health (SDOH), or other barrier that increases the likelihood of  disease, condition, injury to self or others, or interaction with the criminal justice system.</td>
      <td>CarePlan &#8594; supportingInfo(RiskAssessment)<br/>
<br/>
RiskAssessment &#8594; prediction &#8594; outcome<br/>
         &#8594; coding &#8594; code<br/>
RiskAssessment &#8594; prediction &#8594; outcome<br/>
         &#8594; coding &#8594; system<br/>
RiskAssessment &#8594; prediction &#8594; outcome<br/>
         &#8594; text</td>
      <td>CarePlan<br/>
...supportingInfo(RiskAssessment) 0..*<br/>
......prediction 0..*<br/>
.........outcome 0..1<br/>
............coding 0..*<br/>
...............code 0..1<br/>
...............system 0..1<br/>
............text 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the RiskAssessment containing the Identified Risk.<br/>
2) outcome is a Codeable Concept that includes a text element that can be used for the identified risk itself if no appropriate coding is available. (outcome was mandatory prior to R4 version 3.3.0.)<br/>
3) prediction describes the expected outcome for the subject, and is the "prediction" of the risk.</td>
    </tr>
    <tr>
      <td>Risks</td>
      <td>Risk Management Plan</td>
      <td>Description of planned activities to minimize identified risks that endanger the person's health and safety.<br/>
<br/>
This can be included as free text or attachment.</td>
      <td>CarePlan &#8594; supportingInfo(RiskAssessment)<br/>
<br/>
RiskAssessment &#8594; mitigation<br/>
RiskAssessment &#8594; extension(RiskAssessment Mitigation Plan)<br/>
<br/></td>
      <td>CarePlan<br/>
...supportingInfo(RiskAssessment) 0..*<br/>
......mitigation 0..1<br/>
...RiskAssessment <br/>
...extension(RiskAssessment MitigationPlan)</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the RiskAssessment containing the Risk Management Plan.<br/>
2) mitigation is a string and would contain the free text Risk Management Plan.<br/>
3) The new RiskAssessment -&gt; extension -&gt; RiskAssessment Mitigation Plan which is a DocumentReference resource would be used if the Risk Management Plan is being provided as an attachment rather than as text.</td>
    </tr>
	
	

  </table>
  <table border="1">
    <tr>
      <th colspan="5">Data Requirements Not Specific to eLTSS Dataset Data Elements<br/>
This section documents data elements that are mandatory per FHIR XML schemas or US Core requirements, but that do not align with individual eLTSS Dataset data elements.</th>
    </tr>
    <tr>
      <th>FHIR Data Element Name<br/>
Requirement Source</th>
      <th>Data Element Definition</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
    </tr>

    <tr>
      <td>RiskAssessment Status<br/>
FHIR</td>
      <td>The status of the RiskAssessment, using the same statuses as an Observation.</td>
      <td>RiskAssessment &#8594; status</td>
      <td>RiskAssessment<br/>
...status 1</td>
      <td>1) status is required by FHIR, and must use the ObservationStatus value set. Possible values are: registered, preliminary, final, amended, corrected, cancelled, entered-in-error and unknown.</td>
    </tr>
    <tr>
      <td>RiskAssessment Subject<br/>
FHIR</td>
      <td>Identifies the patient, group or organization for whom the goal is being established.</td>
      <td>RiskAssessment &#8594; subject(Patient)</td>
      <td>RiskAssessment<br/>
...subject 1</td>
      <td>1) subject is required by FHIR, and is a reference to a Patient. (Optional prior to R4 version 3.4.0.)</td>
    </tr>

  </table>


---

// File: input/intro-notes/StructureDefinition-ServiceRequest-eltss-intro.md

#### Implementer mapping guidance
The following aids in finding the location of eLTSS data elements. See [R4 FHIR Mapping page](eLTSS_to_FHIR_R4_element.html) for complete guidance, here we are providing a subset of fields for convenience. 

<table border="1">
    <tr>
      <th>eLTSS Grouping</th>
      <th>eLTSS Data Element Name</th>
      <th>Data Element Definition (includes examples, expected list of values and usage note where applicable)</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
	  <!--th class="stu-note">Important change</th-->
    </tr>

    <tr>
      <td>Service Information</td>
      <td>Service Name</td>
      <td>Identifies the paid and/or non-paid service provided to a person.<br/>
Include the code and display name plus any modifiers when a coding system (e.g., Healthcare Common Procedure Coding System (HCPCS), Home Health Revenue Codes) is used.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; code &#8594; text<br/>
ServiceRequest &#8594; code &#8594; coding &#8594; code<br/>
ServiceRequest &#8594; code &#8594; coding &#8594; system</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........code 0..1<br/>
............text 0..1<br/>
............coding 0..1<br/>
...............code 0..1<br/>
...............system 0..1</td>
      <td>1) activity is part of CarePlan, so no references are required to link the two.<br/>
2) coding &#8594; code is the "code plus any modifiers" described in the eLTSS Dataset data element definition. system identifies the code system from which the code is from. For HCPCS, the system value can be set to "https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo/".<br/>
3) text is the "display name" described in the eLTSS Dataset data element definition.<br/>
4) Note that modifiers for CPT &amp; HCPCS are appended to the code using a dash. So the entire code plus the modifier is a single string.</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Self-Directed Service Indicator</td>
      <td>Indicates whether the individual chose to self-direct the service.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; extension &#8594; url<br/>
ServiceRequest &#8594; extension<br/>
         &#8594; valueCodeableConcept &#8594; text</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........extension 0..*<br/>
............url 0..1<br/>
............valueCodeableConcept 0..1<br/>
...............text 0..1</td>
      <td>1) activity is part of CarePlan, so no references are required to link the two.<br/>
2) The procedure-directedBy extension is indicated by populating the url data attribute with the value "http://hl7.org/fhir/StructureDefinition/procedure-directedBy".<br/>
3) The text data element can be populated with the value "self" to indicate that this service is self-directed. Other values could be provided to indicate that someone else is directing the service. This is in addition to populating the proper element in the Resource indicated in CarePlan.activity.reference such as Task, Observation etc to indicate who is responsible or carried out the task.</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Start Date</td>
      <td>The start date of the service being provided.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; occurrenceTiming<br/>
         &#8594; boundsPeriod &#8594; start</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........occurrenceTiming 0..1<br/>
............boundsPeriod 0..1<br/>
...............start 0..1</td>
      <td>1) activity is part of CarePlan, so no references are required to link the two.<br/>
2) start is in dateTime format which can be date, date-time or partial date (e.g. just year or year + month).</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service End Date</td>
      <td>The end date of the service being provided.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; occurrenceTiming<br/>
         &#8594; boundsPeriod &#8594; end</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........occurrenceTiming 0..1<br/>
............boundsPeriod 0..1<br/>
...............end 0..1</td>
      <td>1) activity is part of CarePlan, so no references are required to link the two.<br/>
2) end is in dateTime format which can be date, date-time or partial date (e.g. just year or year + month).</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Delivery Address</td>
      <td>The address where service delivery will take place if service will not be provided at the person's address.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; locationReference(Location)<br/>
<br/>
Location &#8594; address &#8594; line<br/>
Location &#8594; address &#8594; city<br/>
Location &#8594; address &#8594; district<br/>
Location &#8594; address &#8594; state<br/>
Location &#8594; address &#8594; postalCode<br/>
Location &#8594; address &#8594; text<br/>
Location &#8594; description</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........locationReference(Location) 0..*<br/>
............address 0..*<br/>
...............line 0..*<br/>
...............city 0..1<br/>
...............district 0..1<br/>
...............state 0..1<br/>
...............postalCode 0..1<br/>
...............text 0..1<br/>
............description 0..1</td>
      <td>1) activity is part of CarePlan, so no references are required to link the two.<br/>
2) text is the full (not broken out) address.<br/>
3 line includes street name, number and suffix (e.g. 123 Main St.).<br/>
4) Information such as apt #, floor &amp; room #, etc. also go into line, generally as a separate data element.<br/>
5) district covers county.<br/>
6) description can be used when the location is not a specific address, such as when support is being provided at a general location, such as someone providing assistance wherever the recipient grocery shops.</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Comment</td>
      <td>Additional information related to the service being provided. This field could capture additional information of the frequency of the service, how the person wants the service delivered and only used when the comment provides additional detail of the service not already handled by another element.</td>
      <td><br/>
CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; note &#8594; text</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........note 0..*<br/>
............text 1</td>
      <td>1) activity is part of CarePlan, so no references are required to link the two.<br/>
2) text is required by FHIR if note is provided, and is a string.</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Funding Source</td>
      <td>The source of payment for the service.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; insurance(Coverage)<br/>
<br/>
Coverage &#8594; payor(Organization | Patient<br/>
             | RelatedPerson)<br/>
<br/>
Organization | Patient | RelatedPerson<br/>
         &#8594; name</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest)  0..1<br/>
.........insurance(Coverage) 0..*<br/>
............payor(Organization | Patient |<br/>
          RelatedPerson) 1..*<br/>
...............name 0..1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and insurance to reference a Coverage resource, which must include a payor that is a person or an organization.<br/>
2) Coverage resource may be used to register "SelfPay" where an individual or organization other than an insurer is taking responsibility for payment for a portion of the health care cost.</td>
    </tr>
    <tr >
      <td>Service Information</td>
      <td>Service Unit Quantity</td>
      <td>The numerical amount of the service unit being provided for a frequency.<br/>
<br/>
This element is slated to be used in conjunction with Service Quantity Interval and Unit of Service Type elements to form a full description of how often a service is provided. For example, a service being provided 7 units per week, the Service Unit Quantity = "7". For a service being provided 8 hours a day, the Service Unit Value = "8".</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; quantityQuantity &#8594; value<br/>
ServiceRequest &#8594; quantityQuantity &#8594; unit<br/>
or<br/>
ServiceRequest &#8594; quantityRatio &#8594; numerator<br/>
         &#8594; value<br/>
ServiceRequest &#8594; quantityRatio &#8594; numerator<br/>
         &#8594; unit<br/>
ServiceRequest &#8594; quantityRatio &#8594; denominator<br/>
         &#8594; value<br/>
ServiceRequest &#8594; quantityRatio &#8594; denominator<br/>
         &#8594; unit</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest)  0..1<br/>
.........quantityQuantity 0..1<br/>
............value 0..1<br/>
............unit 0..1<br/>
.........quantityRatio 0..1<br/>
............numerator 0..1<br/>
...............value 0..1<br/>
...............unit 0..1<br/>
............denominator 0..1<br/>
...............value 0..1<br/>
...............unit 0..1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest.<br/>
2) quantityQuantity can be used to represent simple quantities such as "1 installation" or "5 trips". quantityRatio can be used to represent quantities with intervals such as "8 hours a day" or "7 units per week". Either quantityQuantity or quantityRatio can be used, but not both for the same ServiceRequest.<br/>
3) value is a decimal, and unit is a string.<br/>
4) numerator and denominator are used to represent a quantity with an interval. For example, to represent 8 hours a day, numerator &#8594; value would be "8" and numerator &#8594; unit would be "hour", while denominator &#8594; value would be "1" and denominator &#8594; unit would be "day".<br/>
5) See the "qty-unit-interval examples" worksheet in this spreadsheet for additional details.<br/>
6) Please also consider occurrencePeriod for use when the quantity is meant to be performed within a defined, simple start and end date. E.g. For May 31,2023 to June 10, 2023 give ServiceRequest.quantityRatio of 5 USD per day. AND, use occurrenceTiming for timing information that fluctuates or is sufficiently complex. The recipient may need to calculate end-date, or one can use occurrenceTiming.boundsPeriod to ascribe a start and end date. E.g. Give ServiceRequest.quantityRatio of 5 USD per day. with the occurrenceTiming.boundsPeriod of May 31, 2023 to June 23, 2023 on occurrenceTiming.dayOfWeek = Mon and Wed at occurrenceTiming.timeOfDay = 3 pm.</td>
	<!--td class="stu-note">Added guidance on ServiceRequest.occurrenceTiming and ServiceRequest.occurrencePeriod</td-->
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Unit of Service Type</td>
      <td>A named quantity in terms of which services are measured or specified, used as a standard measurement of like services. Values include: minute(s), 8 hour(s), quarter hour(s), hour(s), half day(s), full day(s), day(s), week(s), month(s), dollar(s), meal(s), mile(s), visit(s)/session(s), installation(s), none, other (free text).<br/>
<br/>
This element is slated to be used in conjunction with Service Unit Quantity interval and Service Unit Quantity elements to form a full description of how often a service is provided. For example, a service being provided 7 units per week, the Unit of Service Type = "units". For a service being provided 8 hours a day, the Unit of Service Type = "hours".</td>
      <td>see above</td>
      <td>see above</td>
      <td>see above</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Unit Quantity Interval</td>
      <td>A period of time corresponding to the quantity of service(s) indicated. Values include: per day, per week, per month, per year, one time only, other (free text).<br/>
<br/>
This element is slated to be used in conjunction with Unit of Service Type and Service Unit Quantity elements to form a full description of how often a service is provided. For example, a service being provided 7 units per week, the Service Unit Quantity Interval = "per week". For a service being provided 8 hours a day, the Service Unit Quantity Interval = "per day".</td>
      <td>see above</td>
      <td>see above</td>
      <td>see above</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Rate per Unit</td>
      <td>The rate of one unit for a service.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; supportingInfo(Claim)<br/>
<br/>
Claim &#8594; item &#8594; unitPrice</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest)  0..1<br/>
.........supportingInfo(Claim) 0..*<br/>
............item 0..*<br/>
...............unitPrice 0..1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and supportingInfo to reference a Claim.<br/>
2) item maps to a service.<br/>
3) unitPrice contains the charge or cost per point, which maps to the cost per one unit of the service.<br/>
4) unitPrice is of type Money, which is a descendant of the Quantity complex type and inherits value, unit, system, code, and comparator.<br/>
5) Workgroup in charge of ServiceRequest wants to work with the Claim workgroup to determine best approach. One potential approach is to update the scope of ClaimResponse since that reflects what has been approved rather than what is being asked for.</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Total Cost of Service</td>
      <td>The total cost of a service for the plan.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; supportingInfo(Claim)<br/>
<br/>
Claim &#8594; item &#8594; net</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest)  0..1<br/>
.........supportingInfo(Claim) 0..*<br/>
............item 0..*<br/>
...............net 0..1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and supportingInfo to reference a Claim.<br/>
2) item maps to a service.<br/>
3) net is the total cost of an item, which in this case is the total cost for the service.<br/>
4) net is of type Money, which is a descendant of the Quantity complex type and inherits value, unit, system, code, and comparator.<br/>
5) See above.</td>
    </tr>
	
    <tr>
      <td>Service Provider Information</td>
      <td>Support Planner Name</td>
      <td>The name of the person (e.g., Case Manager, Care Coordinator, Plan Coordinator) who helped develop the plan.</td>
      <td>CarePlan &#8594; author(Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam)<br/>
<br/>
Practitioner | Patient | RelatedPerson<br/>
         &#8594; name &#8594; family<br/>
Practitioner | Patient | RelatedPerson<br/>
         &#8594; name &#8594; given<br/>
Practitioner | Patient | RelatedPerson<br/>
         &#8594; name &#8594; text<br/>
         Organization | CareTeam &#8594; name
         </td>
      <td>CarePlan<br/>
...author(Patient | Practitioner | RelatedPerson ) 0..1<br/>
......name 0..*<br/>
.........family 0..1<br/>
.........given 0..*<br/>
.........text 0..1<br />
CarePlan<br />
…author(Organization | CareTeam ) 0..1<br />
......name 0..1</td>
      <td>1) Will use CarePlan &#8594; author to reference a Practitioner, PractitionerRole, RelatedPerson, Organization, CareTeam or Patient (in self-directed plans) who is the primary author of the care plan being developed.<br/>
2) Practitioner, Organization, CareTeam, RelatedPerson and Patient all include name.<br/>
3) PractitionerRole should be used when the Organization for whom the Practitioner works for is also needed. <br />
4) given is used for both first name &amp; MI, so need more than one.<br/>
5) family is a string with the person's surname.<br/>
6) text is a string that contains the full name of the person.<br/>
<!--Updated to reflect resolution of Jira #23058-->
7) The values for Support Planner Name and Support Planner Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Service Provider Information</td>
      <td>Support Planner Phone Number</td>
      <td>The primary phone number (and extension when applicable) of the support planner.</td>
      <td>CarePlan &#8594; author(Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam )<br/>
<br/>
Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam <br/>
         &#8594; telecom &#8594; system<br/>
Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam <br/>
         &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...author(Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam ) 0..1<br/>
......telecom 0..*<br/>
.........system 0..1<br/>
.........value 0..1</td>
      <td>1) Will use CarePlan &#8594; author to reference a Practitioner, PractitionerRole, RelatedPerson, Organization, CareTeam or Patient (in self-directed plan) who is the primary author of the care plan being developed.<br/>
2) Practitioner, PractitionerRole, RelatedPerson, Organization, CareTeam and Patient all include telecom.<br/>
3) PractitionerRole should be used when the Organization for whom the Practitioner works for is also needed.<br />
4) telecom is of type <A href="https://www.hl7.org/fhir/datatypes.html#contactpoint">ContactPoint</A> which contains elements to populate for the phone number.<br/>
5) system is required if value is provided, and can be: phone, fax, email, pager, url, sms, other.<br/>
6) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".</td>
    </tr>
    <tr>
      <td>Service Provider Information</td>
      <td>Service Provider Name</td>
      <td>The name of the entity or individual providing the service.<br/>
<br/>
For paid services use the organization/agency name, for non-paid services use the first and last name of the individual providing the service.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; performer(Practitioner<br/>
            | PractitionerRole | Organization<br/>
            | Patient | Device | RelatedPerson<br/>
            | HealthcareService | CareTeam)<br/>
<br/>
Practitioner | PractitionerRole | CareTeam<br/>
             | Organization | Patient | Device<br/>
             | RelatedPerson | HealthcareService<br/>
         &#8594; name</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........performer(Practitioner |<br/>
         PractitionerRole | Patient |<br/>
         Device | RelatedPerson |<br/>
         HealthcareService | CareTeam) 0..*<br/>
............name 0..1<br/>
----------------------------------<br/>
.........performer(Organization) 0..*<br/>
............name 1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and performer to reference a RelatedPerson, Organization or HealthcareService. Other options listed are available in FHIR, but may not be appropriate here.<br/>
2) Per eLTSS Dataset element definition, performer would reference an Organization or HealthcareService for paid services, and RelatedPerson for a non-paid service.<br/>
3) Organization &#8594; name and HealthcareService &#8594; name are strings with the organization's name.<br/>
4) RelatedPerson &#8594; name is a complex data element that includes strings for the person's surname and first name.<br/>
6) name is required by US Core for Organization.<br/>
<!--Updated to reflect resolution for Jira #23059-->
7) The values for Service Provider Name and Service Provider Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Service Provider Information</td>
      <td>Service Provider Phone Number</td>
      <td>The primary phone number (and extension when applicable) of the service provider.</td>
      <td><br/>
CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; performer(Practitioner<br/>
            | PractitionerRole | Organization<br/>
            | Patient | Device | RelatedPerson<br/>
            | HealthcareService | CareTeam)<br/>
<br/>
Practitioner | PractitionerRole | CareTeam<br/>
             | Organization | Patient | Device<br/>
             | RelatedPerson | HealthcareService<br/>
          &#8594; telecom &#8594; system<br/>
Practitioner | PractitionerRole | CareTeam<br/>
             | Organization | Patient | Device<br/>
             | RelatedPerson | HealthcareService<br/>
         &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........performer(Practitioner |<br/>
         PractitionerRole | Patient |<br/>
         Device | RelatedPerson |<br/>
         HealthcareService | CareTeam) 0..*<br/>
............telecom 0..*<br/>
.............system 0..1<br/>
.............value 0..1<br/>
----------------------------------<br/>
.........performer(Organization) 0..*<br/>
............telecom 1..*<br/>
.............system 0..1<br/>
.............value 1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and performer to reference a RelatedPerson, Organization or HealthcareService. Other options listed are available in FHIR, but may not be appropriate here.<br/>
2) Per eLTSS Dataset element definition, performer would reference an Organization or HealthcareService for paid services, and RelatedPerson for a non-paid service.<br/>
3) telecom is of type ContactPoint (https://www.hl7.org/fhir/datatypes.html#contactpoint) which contains elements to populate for the phone number.<br/>
4) system is required if value is provided, and can be: phone, fax, email, pager, url, sms, other.<br/>
5) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".<br/>
6) US Core requires at least one contact be provided in telecom for an Organization.</td>
    </tr>
    <tr>
      <td>Service Provider Information</td>
      <td>Non-Paid Service Provider Relationship</td>
      <td>The relationship (e.g., spouse, neighbor, guardian, daughter) of the individual providing a non-paid service or support to the person.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; performer(RelatedPerson)<br/>
<br/>
RelatedPerson &#8594; relationship</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........performer(RelatedPerson) 0..*<br/>
...........relationship 0.*</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and performer to reference a RelatedPerson.<br/>
2) Per eLTSS Dataset element definition, performer would reference a RelatedPerson for a non-paid service.<br/>
3) relationship is a CodeableConcept, and FHIR provides a preferred value set whose values can be found in the PatientRelationshipType here: https://www.hl7.org/fhir/relatedperson.html. The list is very long and detailed, for example including not only sister, but stepsister, half-sister, twin sister, natural sister, and identical twin sister.</td>
    </tr>
  </table>
  
  <table border="1">
    <tr>
      <th colspan="5">Data Requirements Not Specific to eLTSS Dataset Data Elements<br/>
This section documents data elements that are mandatory per FHIR XML schemas or US Core requirements, but that do not align with individual eLTSS Dataset data elements.</th>
    </tr>
    <tr>
      <th>FHIR Data Element Name<br/>
Requirement Source</th>
      <th>Data Element Definition</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
    </tr>

    <tr>
      <td>ServiceRequest Intent<br/>
FHIR</td>
      <td>Whether the request is a proposal, plan, an original order or a reflex order.</td>
      <td>ServiceRequest &#8594; intent</td>
      <td>ServiceRequest<br/>
...intent 1</td>
      <td>1) intent is required by FHIR, and must use the RequestIntent value set. Possible values are: proposal, plan, order, original-order, reflex-order, filler-order, instance-order and option.</td>
    </tr>
    <tr>
      <td>ServiceRequest Status<br/>
FHIR</td>
      <td>The status of the request.</td>
      <td>ServiceRequest &#8594; status</td>
      <td>ServiceRequest<br/>
...status 0..1</td>
      <td>1) status is required by FHIR, and must use the RequestStatus value set which has values: draft, active, suspended, completed, entered-in-error, and cancelled.</td>
    </tr>
    <tr>
      <td>ServiceRequest Subject<br/>
FHIR</td>
      <td>On whom or what the service is to be performed.</td>
      <td>ServiceRequest &#8594; subject(Patient)</td>
      <td>ServiceRequest<br/>
...subject 0..1</td>
      <td>1) subject is required by FHIR, and is a reference to a Patient.</td>
    </tr>
    <tr>
      <td/>
      <td/>
      <td/>
      <td/>
      <td/>
    </tr>
  </table>


---

// File: input/intro-notes/StructureDefinition-template-eltss-intro - Copy.md







<table border="1">
    <tr>
      <th>eLTSS Grouping</th>
      <th>eLTSS Data Element Name</th>
      <th>Data Element Definition (includes examples, expected list of values and usage note where applicable)</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
	  <th class="stu-note">Important change</th>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Person Name</td>
      <td>The name of the person whom the plan is for.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; name &#8594; family<br/>
Patient &#8594; name &#8594; given<br/>
Patient &#8594; name &#8594; text</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......name 1..*<br/>
.........family 1<br/>
.........given 1..*<br/>
.........text 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) given is used for both first name &amp; MI, so need more than one.<br/>
3) family is a string with the person's surname.<br/>
4) text is a string that contains the full name of the person.<br/>
5) Per US Core 1.0.1, each Patient must have at least one name, and each name must include family and given.</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Person Identifier</td>
      <td>A string of character(s) used to identify the person whom the plan is for.<br/>
<br/>
This may be the Medicaid ID number where applicable.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; identifier &#8594; value</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......identifier 1..*<br/>
.........value 1<br/>
.........system 1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) identifier is of type Identifier. value is a text element.<br/>
3) Per US Core 1.0.1, each Patient must have at least 1 identifier, and each identifier must include a value and system. system is the namespace for the identifier value.</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Person Identifier Type</td>
      <td>The type of unique identifier used to identify the person whom the plan is for.<br/>
Values include: Medicaid Number, State ID, Medical Record Number, Other (free text)</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; identifier &#8594; type</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......identifier 1..*<br/>
.........type 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) If we have the identifier, we need to be know the type.<br/>
3) type is a CodeableConcept with an extensible value set with values defined <A href="https://www.hl7.org/fhir/valueset-identifier-type.html">here</A>. <br/>  Medical Record Number is available in the documented code list. LOINC includes Medicaid Number (45400-9) and Social Security Number (45396-9). State ID is covered by the "SB" (Social Beneficiary) code value documented in the FHIR codeset at http://hl7.org/fhir/identifier-type. "Other" can be handled with the text element that is part of the Codeable Concept.</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Person Date of Birth</td>
      <td>The birth date of the person whom the plan is for.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; birthDate</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......birthDate 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) birthDate is in the form "1951-06-04". </td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Person Phone Number</td>
      <td>The primary phone number of the person whom the plan is for, or his/her legal representative, where applicable.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; telecom &#8594; system<br/>
Patient &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......telecom 0..*<br/>
.........value 0..1<br/>
.........system 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) telecom is of type ContactPoint which contains elements to populate for the phone number.<br/>
3) system is required by FHIR if value is provided, and can be: phone | fax | email | pager | url | sms | other. For the eLTSS phone number, system should be provided as "phone".<br/>
4) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Person Address</td>
      <td>The address of the person whom the plan is for.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; address &#8594; line<br/>
Patient &#8594; address &#8594; city<br/>
Patient &#8594; address &#8594; state<br/>
Patient &#8594; address &#8594; postalCode<br/>
Patient &#8594; address &#8594; district<br/>
Patient &#8594; address &#8594; text</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......address 0..*<br/>
.........line 0..*<br/>
.........city 0..1<br/>
.........state 0..1<br/>
.........postalCode 0..1<br/>
.........district 0..1<br/>
.........text 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) text is the full (not broken out) address.<br/>
3) line includes street name, number and suffix (e.g. 123 Main St.).<br/>
4) Information such as apt #, floor &amp; room #, etc. also go into line, generally as a separate data element.<br/>
5) district covers county.</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Emergency <br/>
Contact Name</td>
      <td>The name of the individual or entity identified to contact in case of emergency.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; contact &#8594; relationship<br/>
Patient &#8594; contact &#8594; name &#8594; family<br/>
Patient &#8594; contact &#8594; name &#8594; given<br/>
Patient &#8594; contact &#8594; name &#8594; text</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......contact 0..*<br/>
.........relationship 1..*<br/>
.........name 0..1<br/>
............family 0..1<br/>
............given 0..*<br/>
............text 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) Emergency contact is indicated using a relationship value "C".<br/>
3) If contact is provided, relationship needs to be provided to indicate this is an emergency contact.<br/>
4) given is used for both first name &amp; MI, so need more than one.<br/>
5) family is a string with the person's surname.<br/>
6) text is a string with the full name of the person.</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Emergency <br/>
Contact Relationship</td>
      <td>The relationship (e.g., spouse, neighbor, guardian, daughter) of the individual identified to contact in case of emergency.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; contact &#8594; relationship</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......contact 0..*<br/>
.........relationship 1..*</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) Emergency contact is indicated using a relationship value "C".<br/>
Other contact codes can be found here: https://www.hl7.org/fhir/v2/0131/index.html<br/>
3) The emergency contact would have two relationship data elements, one to indicate that it is an emergency contact and one to indicate the relationship between the patient and the contact (such as "next-of-kin").<br/>
4) There are other value sets that could be used to provide more detail, for example daughter or neighbor. Can use the value set http://www.hl7.org/implement/standards/fhir/valueset-relatedperson-relationshiptype.html</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Emergency <br/>
Contact Phone Number</td>
      <td>The primary phone number (and extension when applicable) of the individual or entity identified to contact in case of emergency.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; contact &#8594; telecom &#8594; system<br/>
Patient &#8594; contact &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......contact 0..*<br/>
.........telecom 0..*<br/>
............value 0..1<br/>
............system 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) telecom is of type ContactPoint which contains elements to populate for the phone number.<br/>
3) system is required if value is provided, and can be: phone, fax, email, pager, url, sms, or other.<br/>
4) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Emergency Backup Plan</td>
      <td>Description of how to address unforeseen events, emergency health events, emergency events, problems with medical equipment and supplies, and unavailable staffing situations for critical services that put the person's health and safety at risk.<br/>
<br/>
This can be included as free text or attachment.</td>
      <td>CarePlan [emergency backup plan]<br/>
         &#8594; subject(Patient)<br/>
CarePlan [emergency backup plan]<br/>
         &#8594; description<br/>
CarePlan [emergency backup plan]<br/>
         &#8594; partOf(CarePlan) ["main" Care Plan]<br/></td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
...description 0..1<br/>
...part of(CarePlan) 0..*<br/>
</td>
      <td>1) The CarePlan resource containing the emergency backup plan refers to the "main" CarePlan resource, rather than the other way around, by using the emergency backup plan CarePlan &#8594; partOf data element to reference the "main" CarePlan data element.<br/>
2) FHIR requires that CarePlan includes a subject.<br/>
3) description contains the text of the Emergency Backup Plan if provided as text.<br/>
4) type indicates the kind of document, but the documented preferred LOINC value set does not include anything corresponding to an emergency backup plan. Therefore we can use the Codeable Concept's text data element to indicate "Emergency Backup Plan". (type is mandatory in FHIR 3.0.1, but optional in the R4 draft.)<br/></td>
    </tr>
    <tr bgcolor="#fff2ff">
      <td>Goals &amp; Strengths</td>
      <td>Goal</td>
      <td>A statement of a desired result that the person wants to achieve.</td>
      <td>CarePlan &#8594; goal(Goal)<br/>
<br/>
Goal &#8594; description &#8594; text</td>
      <td>CarePlan<br/>
...goal(Goal) 0..*<br/>
......description 1<br/>
.........text 1<br/>
......subject(Patient) 1</td>
      <td>1) Will use CarePlan &#8594; goal to reference the Goal for the care plan being developed.<br/>
2) description is required by both FHIR and US Core, and is a CodableConcept whose text element, per US Core, must include a text description of the goal.<br/>
3) Each goal should go into a separate Goal element so each can potentially reference a step or action(s), or a service(s) that addresses the goal.<br/>
<!--Updated 4) in response to JIRA #23047 and matching XLS-->
4) A Goal can be referenced from a Step or Action or from a service. For a goal related to a step or action, use extension(pertainsToGoal). For a service request specific goal, also use extension(pertainsToGoal). Logically, these goals are exclusive to each other and the same goal isn't duplicated at both levels.<br/>
5) US Core requires the use of Goal &#8594; Subject to reference back to the Patient. </td>
<td class="stu-note">Replaced use of CarePlan.activity.detail, and emphasized the extension pertainsToGoal</td>
    </tr>
    <tr bgcolor="#fff2ff">
      <td>Goals &amp; Strengths</td>
      <td>Step or Action</td>
      <td>A planned measurable step or action that needs to be taken to accomplish a goal identified by the person.</td>
	  <td>
CarePlan &#8594; activity<br/>
         &#8594; reference(Resource) &#8594; note<br/>
         &#8594; text
		 &#8594; extension(pertainsToGoal)</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(Resource) 0..1<br/>
.........note 0..*<br/>
............text 1<br/>
.........extension(pertainsToGoal)</td>
      <td>1) CarePlan includes activity &#8594; reference, which can be a reference to ServiceRequest, Task or other Resource.<br/>
2) ServiceRequest would be used when the Step or Action is a task under a service. If the Step or Action is an informal support or an activity being undertaken by the beneficiary the Task Resource, similar to a Patient Task used in the Gravity SDOH IG, can be used.<br/>
3) activity &#8594; reference(Resource) is linked to the Goal the step or action addresses through the pertainsToGoal Extension in the referenced activity.<br/>
4) activity &#8594; reference(Resource) includes a performer, author, participant with type or other data element that can be used to reference who is responsible for performing the step or action, such as to indicate that the person or a related person is responsible.<br/>
5) text is where the Step or Action text would be provided.<br/>
6) text is required by FHIR if note is provided.<br/>
7) Note that a stated goal may lead directly to a service, and not necessarily to an explicit Step or Action. For example, a person's goal could be to attend church regularly, and this would be achieved through a transportation service.</td>
	<td class="stu-note">Replaced use of CarePlan.activity.detail, and emphasized the extension pertainsToGoal</td>
    </tr>
    <tr>
      <td>Goals &amp; Strengths</td>
      <td>Strength</td>
      <td>A favorable attribute of oneself, his/her support network, environment and/or elements of his/her life.</td>
      <td>CarePlan &#8594; supportingInfo(Observation)<br/>
<br/>
Observation &#8594; valueString<br/>
Observation &#8594; code &#8594; coding &#8594; code
Observation &#8594; code &#8594; coding &#8594; system</td>
      <td>
      CarePlan<br/>
...supportingInfo(Observation) 0..*<br/>
......valueString 0..1<br/>
......code 1<br/>
........coding 0..*<br/>
..........code 0..1<br/>
............system 0..1<br/>
</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Observation containing the Strength.<br/>
2) code is required by FHIR, and is a CodeableConcept where coding &#8594; code can be set to "Strength" with the corresponding NEW code &#8594; system "http://hl7.org/us/eLTSS/CodeSystem/eltss-observation-code".<br/>
3) valueString is where the Strength text would be provided.</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Assessed Need</td>
      <td>The clinical and/or community-based necessity or desire as identified through an assessment that should be addressed by a service. </td>
      <td>CarePlan &#8594; addresses(Condition)<br/>
<br/>
Condition &#8594; code &#8594; text<br/>
Condition &#8594; category</td>
      <td>CarePlan<br/>
...addresses(Condition) 0..*<br/>
......code 1<br/>
.........text 0..1<br/>
......category 1..*</td>
      <td>1) Will use CarePlan &#8594; addresses to reference the Condition(s) for the care plan being developed.<br/>
2) code is required by US Core and is a CodeableConcept which per US Core is bound to the extensible Problem Value Set. That value set is based on SNOMED-CT and includes very specific values that do not line up with assessed needs. Per US Core's documentation on extensible CodeableConcepts, the CodeableConcept's text element can be used "if no suitable codes exist", so we can use the text element for the assessed need.<br/>
3) Each assessed need should go into a separate Condition element so each can potentially be linked to a service(s) that addresses it.<br/>
4) category is required by US Core and is a CodeableConcept which per US Core is bound to the extensible US Core Condition Category Codes value set (http://hl7.org/fhir/ValueSet/condition-category) which has values: problem-list-item, encounter-diagnosis. Could use the value "problem-list-item" to indicate the underlying condition, and extend the value set to add the value "assessed-need".<br/>
5) An "assessed need" condition can refer to another condition via the condition-dueTo extension.</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Person Setting Choice Indicator</td>
      <td>Indicator that reflects the setting in which the person resides is chosen by the individual.</td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueBoolean<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueBoolean 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueBoolean is the actual response to the question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The value "boolean" would apply here. Boolean "true" would indicate "yes".</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Person Setting Choice Options</td>
      <td>The alternative home and community-based settings that were considered by the individual. </td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueString<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueString 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueString is the actual text of the response to a question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The values "string" (for a few words or short sentence) or "text" (potentially multi-paragraph) would apply here.</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Plan Monitor Name</td>
      <td>The name of the person responsible for monitoring the plan.</td>
      <td>CarePlan &#8594; encounter (Encounter)<br/>
<br/>
Encounter &#8594; episodeOfCare(EpisodeOfCare)<br/>
<br/>
EpisodeOfCare &#8594; careManager(Practitioner)<br/>
<br/>
Practitioner &#8594; name &#8594; family<br/>
Practitioner &#8594; name &#8594; given<br/>
Practitioner &#8594; name &#8594; text</td>
      <td>CarePlan<br/>
...encounter(Encounter) 0..1<br/>
...... episodeOfCare(EpisodeOfCare)0..1<br/>
.........careManager(Practitioner) 0..1<br/>
............name 0..*<br/>
...............family 0-1<br/>
................given 0-*<br/>
................text 0-1</td>
      <td>1) Will use CarePlan &#8594; encounter to reference the EpisodeOfCare that defines the plan monitor (care manager) for the plan.<br/>
2) EpisodeOfCare &#8594; careManager references the Practitioner who is monitoring the plan.<br/>
3) given is used for both first name &amp; MI, so need more than one.<br/>
4) family is a string with the person's surname.<br/>
5) text is a string that contains the full name of the person.<br/>
6) The values for Plan Monitor Name and Plan Monitor Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Plan Monitor Phone Number</td>
      <td>The primary phone number (and extension when applicable) of the plan monitor.</td>
      <td>CarePlan &#8594; encounter (Encounter)<br/>
<br/>
Encounter &#8594; episodeOfCare(EpisodeOfCare)<br/>
<br/>
EpisodeOfCare &#8594; careManager(Practitioner)<br/>
<br/>
Practitioner &#8594; telecom &#8594; system<br/>
Practitioner &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...encounter(Encounter) 0..1<br/>
...... episodeOfCare(EpisodeOfCare)0..1<br/>
.........careManager(Practitioner) 0..1<br/>
............telecom 0..*<br/>
...............system 0..1<br/>
................value 0..1</td>
      <td>1) Will use CarePlan &#8594; encounter to reference the EpisodeOfCare that defines the plan monitor (care manager) for the plan.<br/>
2) EpisodeOfCare &#8594; careManager references the Practitioner who is monitoring the plan.<br/>
3) telecom is of type ContactPoint (https://www.hl7.org/fhir/datatypes.html#contactpoint) which contains elements to populate for the phone number.<br/>
4) system is required if value is provided, and can be: phone, fax, email, pager, url, sms, other.<br/>
5) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Preference</td>
      <td>Presents the person's personal thoughts about something he or she feels is relevant to his or her life experience and may be pertinent when planning.</td>
      <td>CarePlan &#8594; supportingInfo(Observation)<br/>
<br/>
Observation &#8594; valueString<br/>
Observation &#8594; code &#8594; coding &#8594; code<br/>
Observation &#8594; code &#8594; coding &#8594; system<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Observation) 0..*<br/>
......valueString 0..1<br/>
......code 1<br/>
.........coding 0..*<br/>
............code 0..1<br/>
............system 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Observation containing the Preference.<br/>
2) code is required by FHIR and is a CodeableConcept where coding &#8594; code can be set to "Preference" with the corresponding NEW code -&gt; system "http://hl7.org/us/eLTSS/CodeSystem/eltss-observation-code".<br/>
3) valueString is where the Preference text would be provided.</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Service Options Given Indicator</td>
      <td>States whether or not the person was given a choice of services outlined in the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueBoolean<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueBoolean 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueBoolean is the actual response to the question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The value "boolean" would apply here. Boolean "true" would indicate "yes".</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Service Selection Indicator</td>
      <td>States whether or not the person participated in the selection of the services outlined in the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueBoolean<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueBoolean 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueBoolean is the actual response to the question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The value "boolean" would apply here. Boolean "true" would indicate "yes".</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Service Plan Agreement Indicator</td>
      <td>States whether or not the person agrees to the services outlined in the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueBoolean<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueBoolean 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueBoolean is the actual response to the question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The value "boolean" would apply here. Boolean "true" would indicate "yes".</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Service Provider Options Given Indicator</td>
      <td>States whether or not the person was offered a choice of providers for each service.</td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueBoolean<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueBoolean 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueBoolean is the actual response to the question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The value "boolean" would apply here. Boolean "true" would indicate "yes".</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Service Provider Selection Agreement Indicator</td>
      <td>States whether or not the person feels he/she made an informed choice in selecting the provider for each service.</td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueBoolean<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueBoolean 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueBoolean is the actual response to the question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The value "boolean" would apply here. Boolean "true" would indicate "yes".</td>
    </tr>
    <tr>
      <td>Plan Information</td>
      <td>Plan Effective Date</td>
      <td>The date upon which the plan goes into effect.<br/>
<br/>
Start date is required, end date is optional.</td>
      <td>CarePlan &#8594; period &#8594; start<br/>
CarePlan &#8594; period &#8594; end</td>
      <td>CarePlan 0..*<br/>
...period 0..1<br/>
......start 1<br/>
......end 0..1</td>
      <td>1) period includes a start and an end element, which are both dateTime formats which can be date, date-time or partial date (e.g. just year or year + month).<br/>
2) start is required by eLTSS.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Person Signature</td>
      <td>The depiction of the person's signature as proof of identity and intent for the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; type<br/>
Contract &#8594; signer &#8594; signature &#8594; data<br/>
Contract &#8594; signer &#8594; signature &#8594; type<br/>
Contract &#8594; signer &#8594; signature<br/>
         &#8594; who(Practitioner | PractitionerRole |<br/>
         RelatedPerson | Patient | Device |<br/>
         Organization)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........type 1<br/>
.........signature 1..*<br/>
............data 0..1<br/>
............type 1<br/>
............who(Practitioner | PractitionerRole |<br/>
            RelatedPerson | Patient | Device |<br/>
            Organization) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) Can use a single Contract element to contain all signatures.<br/>
3) signer requires the signature and a type that indicates the contract signatory role.<br/>
4) FHIR includes a preferred coding for contract signatory roles, which map well to the eLTSS signatories. The primary one for the patient/beneficiary is "PAT" (patient), although implementers may use others as well. However, implementers must realize that type may be used to differentiate between the patient, service provider, planner, etc. so there need to be distinct role types utilized.<br/>
5) data is the actual signature content (XML DigSig. JWT, picture, etc.)<br/>
6) signature requires it's own type element that indicates why the entity signed the contract, and FHIR provides a preferred code list. Would probably use "1.2.840.10065.1.12.1.7" which represents "consent signature" in this case.<br/>
7) signature requires a who to indicate who signed, which can be a Patient, Organization, Practitioner, PrationerRole, RelatedPerson or Device, although in this case it would be the Patient.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Person Printed Name</td>
      <td>The printed or typed name of the person.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; party(Patient)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........party(Patient) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) In this case, party is a reference to the Patient, and Patient is already documented above to include a name.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Person Signature Date</td>
      <td>The date the person signed the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; signature &#8594; when</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........signature 1..*<br/>
............when 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) when is required by FHIR, and indicates when the signature was created.<br/>
3) when is an instance type. An instant in time - known at least to the second and always includes a time zone. Note: This is intended for precisely observed times (typically system logs etc.), and not human-reported times - for them, use date and dateTime. instant is a more constrained dateTime.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Guardian / Legal Representative Signature</td>
      <td>The depiction of the guardian or legally authorized representative's signature as proof of identity and intent for the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; type<br/>
Contract &#8594; signer &#8594; signature &#8594; data<br/>
Contract &#8594; signer &#8594; signature &#8594; type<br/>
Contract &#8594; signer &#8594; signature<br/>
         &#8594; who(Practitioner | PractitionerRole |<br/>
         RelatedPerson | Patient | Device |<br/>
         Organization)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........type 1<br/>
.........signature 1..*<br/>
............data 0..1<br/>
............type 1<br/>
............who(Practitioner | PractitionerRole |<br/>
            RelatedPerson | Patient | Device |<br/>
            Organization) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) Can use a single Contract element to contain all signatures.<br/>
3) signer requires the signature and a type that indicates the contract signatory role.<br/>
4) FHIR includes a preferred coding for contract signatory roles, which map well to the eLTSS signatories. There are multiple values that may be used depending on how states want to map. For example, the list includes: "POWATT" (power of attorney), "GUARD" (guardian), "HPOWATT" (healthcare power of attorney), etc. However, implementers must realize that type may be used to differentiate between the patient, service provider, planner, etc. so there need to be distinct role types utilized.<br/>
5) data is the signature content (XML DigSig. JWT, picture, etc.)<br/>
6) signature requires it's own type element that indicates why the entity signed the contract, and FHIR provides a preferred value set. Would probably use "1.2.840.10065.1.12.1.7" which represents "consent signature" in this case.<br/>
7) signature requires a who  to indicate who signed, which can be a Patient, Organization, Practitioner, PractitionerRole, RelatedPerson or Device although in this case it would be the RelatedPerson.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Guardian / Legal Representative Printed Name</td>
      <td>The printed or typed name of the guardian or legally authorized representative.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; party(RelatedPerson)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........party(RelatedPerson) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) In this case, party is a reference to a RelatedPerson, and RelatedPatient includes a name.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Guardian / Legal Representative Signature Date</td>
      <td>The date the guardian or legally authorized representative signed the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; signature &#8594; when</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........signature 1..*<br/>
............when 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) when is required by FHIR, and indicates when the signature was created.<br/>
3) when is an instance type. An instant in time - known at least to the second and always includes a time zone. Note: This is intended for precisely observed times (typically system logs etc.), and not human-reported times - for them, use date and dateTime. instant is a more constrained dateTime.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Support Planner Signature</td>
      <td>The depiction of the support planner's signature as proof of identity and intent for the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; type<br/>
Contract &#8594; signer &#8594; signature &#8594; data<br/>
Contract &#8594; signer &#8594; signature &#8594; type<br/>
Contract &#8594; signer &#8594; signature<br/>
         &#8594; who(Practitioner | PractitionerRole | Organization<br/>
         RelatedPerson | Patient |<br/>
         Organization)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........type 1<br/>
.........signature 1..*<br/>
............data 0..1<br/>
............type 1<br/>
............who(Practitioner |PractitionerRole | Organization<br/>
            RelatedPerson | Patient |<br/>
            Organization) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) Can use a single Contract element to contain all signatures.<br/>
3) signer requires the signature and a type that indicates the contract signatory role.<br/>
4) FHIR includes a preferred coding for contract signatory roles, which map well to the eLTSS signatories. There are multiple values that may be used depending on how states want to map. For example, the list includes "AUT" (author) which aligns with author being the support planner for other eLTSS Dataset elements. However other role types may be appropriate as well such as "GUAR" (guarantor). However, implementers must realize that type may be used to differentiate between the patient, service provider, planner, etc. so there need to be distinct role types utilized.<br/>
5) data is the actual signature content (XML DigSig. JWT, picture, etc.)<br/>
6) signature requires it's own type element that indicates why the entity signed the contract, and FHIR provides a preferred value set, in this case could use "1.2.840.10065.1.12.1.1" for "Author's Signature".<br/>
7) signature requires a who to indicate who signed, which can be a Patient, Organization, Practitioner, PractitionerRole, RelatedPerson or Device. </td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Support Planner Printed Name</td>
      <td>The printed or typed name of the support planner.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; party(Practitioner|PractitionerRole|Organization)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........party(Practitioner|PractitionerRole|Organization)</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) In this case, party is a reference to a Practitioner, PractitionerRole or Organization (for cases when the Organization of the SupportPlanner is needed), and Practitioner and Organization includes a name.<br/>
<!--Updated to reflect the resolution of Jira #23058-->
3) The values for Support Planner Name and Support Planner Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Support Planner Signature Date</td>
      <td>The date the support planner signed the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; signature &#8594; when</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........signature 1..*<br/>
............when 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) when is required by FHIR, and indicates when the signature was created.<br/>
3) when is an instance type. An instant in time - known at least to the second and always includes a time zone. Note: This is intended for precisely observed times (typically system logs etc.), and not human-reported times - for them, use date and dateTime. instant is a more constrained dateTime.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Service Provider Signature</td>
      <td>The depiction of the service provider's signature as proof they agree to the services they will provide.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; type<br/>
Contract &#8594; signer &#8594; signature &#8594; data<br/>
Contract &#8594; signer &#8594; signature &#8594; type<br/>
Contract &#8594; signer &#8594; signature<br/>
         &#8594; who(Practitioner | PractitionerRole |<br/>
         RelatedPerson | Patient | Device |<br/>
         Organization)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........type 1<br/>
.........signature 1..*<br/>
............data 0..1<br/>
............type 1<br/>
............who(Practitioner |PractitionerRole |<br/>
            RelatedPerson | Patient | Device |<br/>
            Organization) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) Can use a single Contract element to contain all signatures.<br/>
3) signer requires the signature and a type that indicates the contract signatory role.<br/>
4) FHIR includes a preferred coding for contract signer roles, which map well to the eLTSS signatories. There are multiple values that may be used depending on how states want to map. The list includes "HPROV" (healthcare provider) which may be the best fit here, although others may be applicable. However, implementers must realize that type may be used to differentiate between the patient, service provider, planner, etc. so there need to be distinct role types utilized.<br/>
5) data is the actual signature content (XML DigSig. JWT, picture, etc.)<br/>
6) signature requires it's own type element that indicates why the entity signed the contract, and FHIR provides a preferred value set. In this case would probably use "1.2.840.10065.1.12.1.3" for "Co-participant's Signature".<br/>
7) signature requires a who  to indicate who signed, which can be a Patient, Organization, Practitioner, PractitionerRole, RelatedPerson or Device.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Service Provider Printed Name</td>
      <td>The printed or typed name of the service provider.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; party(Organization |<br/>
         Patient | Practitioner | PractitionerRole | RelatedPerson)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........party(Organization | Patient |<br/>
         Practitioner | PractitionerRole | RelatedPerson) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) party is a reference to an Organization, Patient, Practitioner, PractitionerRole or RelatedPerson, all of which include a name. (Patient may not make sense in the context of a service provided by a care plan, but is allowed in FHIR.)<br/>
<!--Updated to reflect resolution of Jira #23059-->
3) The values for Service Provider Name and Service Provider Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Service Provider Signature Date</td>
      <td>The date the service provider signed the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; signature &#8594; when</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........signature 1..*<br/>
............when 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) when is required by FHIR, and indicates when the signature was created.<br/>
3) when is an instance type. An instant in time - known at least to the second and always includes a time zone. Note: This is intended for precisely observed times (typically system logs etc.), and not human-reported times - for them, use date and dateTime. instant is a more constrained dateTime.</td>
    </tr>
    <tr>
      <td>Risks</td>
      <td>Identified Risk</td>
      <td>An aspect of a person's life, behavior, environmental exposure, personal characteristic, Social determinants of health (SDOH), or other barrier that increases the likelihood of  disease, condition, injury to self or others, or interaction with the criminal justice system.</td>
      <td>CarePlan &#8594; supportingInfo(RiskAssessment)<br/>
<br/>
RiskAssessment &#8594; prediction &#8594; outcome<br/>
         &#8594; coding &#8594; code<br/>
RiskAssessment &#8594; prediction &#8594; outcome<br/>
         &#8594; coding &#8594; system<br/>
RiskAssessment &#8594; prediction &#8594; outcome<br/>
         &#8594; text</td>
      <td>CarePlan<br/>
...supportingInfo(RiskAssessment) 0..*<br/>
......prediction 0..*<br/>
.........outcome 0..1<br/>
............coding 0..*<br/>
...............code 0..1<br/>
...............system 0..1<br/>
............text 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the RiskAssessment containing the Identified Risk.<br/>
2) outcome is a Codeable Concept that includes a text element that can be used for the identified risk itself if no appropriate coding is available. (outcome was mandatory prior to R4 version 3.3.0.)<br/>
3) prediction describes the expected outcome for the subject, and is the "prediction" of the risk.</td>
    </tr>
    <tr>
      <td>Risks</td>
      <td>Risk Management Plan</td>
      <td>Description of planned activities to minimize identified risks that endanger the person's health and safety.<br/>
<br/>
This can be included as free text or attachment.</td>
      <td>CarePlan &#8594; supportingInfo(RiskAssessment)<br/>
<br/>
RiskAssessment &#8594; mitigation<br/>
RiskAssessment &#8594; extension(RiskAssessment Mitigation Plan)<br/>
<br/></td>
      <td>CarePlan<br/>
...supportingInfo(RiskAssessment) 0..*<br/>
......mitigation 0..1<br/>
...RiskAssessment <br/>
...extension(RiskAssessment MitigationPlan)</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the RiskAssessment containing the Risk Management Plan.<br/>
2) mitigation is a string and would contain the free text Risk Management Plan.<br/>
3) The new RiskAssessment -&gt; extension -&gt; RiskAssessment Mitigation Plan which is a DocumentReference resource would be used if the Risk Management Plan is being provided as an attachment rather than as text.</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Name</td>
      <td>Identifies the paid and/or non-paid service provided to a person.<br/>
Include the code and display name plus any modifiers when a coding system (e.g., Healthcare Common Procedure Coding System (HCPCS), Home Health Revenue Codes) is used.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; code &#8594; text<br/>
ServiceRequest &#8594; code &#8594; coding &#8594; code<br/>
ServiceRequest &#8594; code &#8594; coding &#8594; system</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........code 0..1<br/>
............text 0..1<br/>
............coding 0..1<br/>
...............code 0..1<br/>
...............system 0..1</td>
      <td>1) activity is part of CarePlan, so no references are required to link the two.<br/>
2) coding &#8594; code is the "code plus any modifiers" described in the eLTSS Dataset data element definition. system identifies the code system from which the code is from. For HCPCS, the system value can be set to "https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo/".<br/>
3) text is the "display name" described in the eLTSS Dataset data element definition.<br/>
4) Note that modifiers for CPT &amp; HCPCS are appended to the code using a dash. So the entire code plus the modifier is a single string.</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Self-Directed Service Indicator</td>
      <td>Indicates whether the individual chose to self-direct the service.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; extension &#8594; url<br/>
ServiceRequest &#8594; extension<br/>
         &#8594; valueCodeableConcept &#8594; text</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........extension 0..*<br/>
............url 0..1<br/>
............valueCodeableConcept 0..1<br/>
...............text 0..1</td>
      <td>1) activity is part of CarePlan, so no references are required to link the two.<br/>
2) The procedure-directedBy extension is indicated by populating the url data attribute with the value "http://hl7.org/fhir/StructureDefinition/procedure-directedBy".<br/>
3) The text data element can be populated with the value "self" to indicate that this service is self-directed. Other values could be provided to indicate that someone else is directing the service. This is in addition to populating the proper element in the Resource indicated in CarePlan.activity.reference such as Task, Observation etc to indicate who is responsible or carried out the task.</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Start Date</td>
      <td>The start date of the service being provided.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; occurrenceTiming<br/>
         &#8594; boundsPeriod &#8594; start</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........occurrenceTiming 0..1<br/>
............boundsPeriod 0..1<br/>
...............start 0..1</td>
      <td>1) activity is part of CarePlan, so no references are required to link the two.<br/>
2) start is in dateTime format which can be date, date-time or partial date (e.g. just year or year + month).</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service End Date</td>
      <td>The end date of the service being provided.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; occurrenceTiming<br/>
         &#8594; boundsPeriod &#8594; end</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........occurrenceTiming 0..1<br/>
............boundsPeriod 0..1<br/>
...............end 0..1</td>
      <td>1) activity is part of CarePlan, so no references are required to link the two.<br/>
2) end is in dateTime format which can be date, date-time or partial date (e.g. just year or year + month).</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Delivery Address</td>
      <td>The address where service delivery will take place if service will not be provided at the person's address.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; locationReference(Location)<br/>
<br/>
Location &#8594; address &#8594; line<br/>
Location &#8594; address &#8594; city<br/>
Location &#8594; address &#8594; district<br/>
Location &#8594; address &#8594; state<br/>
Location &#8594; address &#8594; postalCode<br/>
Location &#8594; address &#8594; text<br/>
Location &#8594; description</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........locationReference(Location) 0..*<br/>
............address 0..*<br/>
...............line 0..*<br/>
...............city 0..1<br/>
...............district 0..1<br/>
...............state 0..1<br/>
...............postalCode 0..1<br/>
...............text 0..1<br/>
............description 0..1</td>
      <td>1) activity is part of CarePlan, so no references are required to link the two.<br/>
2) text is the full (not broken out) address.<br/>
3 line includes street name, number and suffix (e.g. 123 Main St.).<br/>
4) Information such as apt #, floor &amp; room #, etc. also go into line, generally as a separate data element.<br/>
5) district covers county.<br/>
6) description can be used when the location is not a specific address, such as when support is being provided at a general location, such as someone providing assistance wherever the recipient grocery shops.</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Comment</td>
      <td>Additional information related to the service being provided. This field could capture additional information of the frequency of the service, how the person wants the service delivered and only used when the comment provides additional detail of the service not already handled by another element.</td>
      <td><br/>
CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; note &#8594; text</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........note 0..*<br/>
............text 1</td>
      <td>1) activity is part of CarePlan, so no references are required to link the two.<br/>
2) text is required by FHIR if note is provided, and is a string.</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Funding Source</td>
      <td>The source of payment for the service.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; insurance(Coverage)<br/>
<br/>
Coverage &#8594; payor(Organization | Patient<br/>
             | RelatedPerson)<br/>
<br/>
Organization | Patient | RelatedPerson<br/>
         &#8594; name</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest)  0..1<br/>
.........insurance(Coverage) 0..*<br/>
............payor(Organization | Patient |<br/>
          RelatedPerson) 1..*<br/>
...............name 0..1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and insurance to reference a Coverage resource, which must include a payor that is a person or an organization.<br/>
2) Coverage resource may be used to register "SelfPay" where an individual or organization other than an insurer is taking responsibility for payment for a portion of the health care cost.</td>
    </tr>
    <tr bgcolor="#fff2ff">
      <td>Service Information</td>
      <td>Service Unit Quantity</td>
      <td>The numerical amount of the service unit being provided for a frequency.<br/>
<br/>
This element is slated to be used in conjunction with Service Quantity Interval and Unit of Service Type elements to form a full description of how often a service is provided. For example, a service being provided 7 units per week, the Service Unit Quantity = "7". For a service being provided 8 hours a day, the Service Unit Value = "8".</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; quantityQuantity &#8594; value<br/>
ServiceRequest &#8594; quantityQuantity &#8594; unit<br/>
or<br/>
ServiceRequest &#8594; quantityRatio &#8594; numerator<br/>
         &#8594; value<br/>
ServiceRequest &#8594; quantityRatio &#8594; numerator<br/>
         &#8594; unit<br/>
ServiceRequest &#8594; quantityRatio &#8594; denominator<br/>
         &#8594; value<br/>
ServiceRequest &#8594; quantityRatio &#8594; denominator<br/>
         &#8594; unit</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest)  0..1<br/>
.........quantityQuantity 0..1<br/>
............value 0..1<br/>
............unit 0..1<br/>
.........quantityRatio 0..1<br/>
............numerator 0..1<br/>
...............value 0..1<br/>
...............unit 0..1<br/>
............denominator 0..1<br/>
...............value 0..1<br/>
...............unit 0..1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest.<br/>
2) quantityQuantity can be used to represent simple quantities such as "1 installation" or "5 trips". quantityRatio can be used to represent quantities with intervals such as "8 hours a day" or "7 units per week". Either quantityQuantity or quantityRatio can be used, but not both for the same ServiceRequest.<br/>
3) value is a decimal, and unit is a string.<br/>
4) numerator and denominator are used to represent a quantity with an interval. For example, to represent 8 hours a day, numerator &#8594; value would be "8" and numerator &#8594; unit would be "hour", while denominator &#8594; value would be "1" and denominator &#8594; unit would be "day".<br/>
5) See the "qty-unit-interval examples" worksheet in this spreadsheet for additional details.<br/>
6) Please also consider occurrencePeriod for use when the quantity is meant to be performed within a defined, simple start and end date. E.g. For May 31,2023 to June 10, 2023 give ServicePlan.quantity of 5 [USD]/day. AND, use occurrenceTiming for timing information that fluctuates or is sufficiently complex. The recipient may need to calculate end-date, or one can use occurrenceTiming.boundsPeriod to ascribe a start and end date. E.g. Give ServicePlan.quantity 5 with unit=[USD]/day with the occurrenceTiming.boundsPeriod of May 31, 2023 to June 23, 2023 on occurrenceTiming.dayOfWeek = Mon and Wed at occurrenceTiming.timeOfDay = 3 pm.</td>
	<td class="stu-note">Added guidance on ServiceRequest.occurrenceTiming and ServiceRequest.occurrencePeriod</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Unit of Service Type</td>
      <td>A named quantity in terms of which services are measured or specified, used as a standard measurement of like services. Values include: minute(s), 8 hour(s), quarter hour(s), hour(s), half day(s), full day(s), day(s), week(s), month(s), dollar(s), meal(s), mile(s), visit(s)/session(s), installation(s), none, other (free text).<br/>
<br/>
This element is slated to be used in conjunction with Service Unit Quantity interval and Service Unit Quantity elements to form a full description of how often a service is provided. For example, a service being provided 7 units per week, the Unit of Service Type = "units". For a service being provided 8 hours a day, the Unit of Service Type = "hours".</td>
      <td>see above</td>
      <td>see above</td>
      <td>see above</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Unit Quantity Interval</td>
      <td>A period of time corresponding to the quantity of service(s) indicated. Values include: per day, per week, per month, per year, one time only, other (free text).<br/>
<br/>
This element is slated to be used in conjunction with Unit of Service Type and Service Unit Quantity elements to form a full description of how often a service is provided. For example, a service being provided 7 units per week, the Service Unit Quantity Interval = "per week". For a service being provided 8 hours a day, the Service Unit Quantity Interval = "per day".</td>
      <td>see above</td>
      <td>see above</td>
      <td>see above</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Rate per Unit</td>
      <td>The rate of one unit for a service.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; supportingInfo(Claim)<br/>
<br/>
Claim &#8594; item &#8594; unitPrice</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest)  0..1<br/>
.........supportingInfo(Claim) 0..*<br/>
............item 0..*<br/>
...............unitPrice 0..1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and supportingInfo to reference a Claim.<br/>
2) item maps to a service.<br/>
3) unitPrice contains the charge or cost per point, which maps to the cost per one unit of the service.<br/>
4) unitPrice is of type Money, which is a descendant of the Quantity complex type and inherits value, unit, system, code, and comparator.<br/>
5) Workgroup in charge of ServiceRequest wants to work with the Claim workgroup to determine best approach. One potential approach is to update the scope of ClaimResponse since that reflects what has been approved rather than what is being asked for.</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Total Cost of Service</td>
      <td>The total cost of a service for the plan.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; supportingInfo(Claim)<br/>
<br/>
Claim &#8594; item &#8594; net</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest)  0..1<br/>
.........supportingInfo(Claim) 0..*<br/>
............item 0..*<br/>
...............net 0..1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and supportingInfo to reference a Claim.<br/>
2) item maps to a service.<br/>
3) net is the total cost of an item, which in this case is the total cost for the service.<br/>
4) net is of type Money, which is a descendant of the Quantity complex type and inherits value, unit, system, code, and comparator.<br/>
5) See above.</td>
    </tr>
    <tr>
      <td>Service Provider Information</td>
      <td>Support Planner Name</td>
      <td>The name of the person (e.g., Case Manager, Care Coordinator, Plan Coordinator) who helped develop the plan.</td>
      <td>CarePlan &#8594; author(Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam)<br/>
<br/>
Practitioner | Patient | RelatedPerson<br/>
         &#8594; name &#8594; family<br/>
Practitioner | Patient | RelatedPerson<br/>
         &#8594; name &#8594; given<br/>
Practitioner | Patient | RelatedPerson<br/>
         &#8594; name &#8594; text<br/>
         Organization | CareTeam &#8594; name
         </td>
      <td>CarePlan<br/>
...author(Patient | Practitioner | RelatedPerson ) 0..1<br/>
......name 0..*<br/>
.........family 0..1<br/>
.........given 0..*<br/>
.........text 0..1<br />
CarePlan<br />
…author(Organization | CareTeam ) 0..1<br />
......name 0..1</td>
      <td>1) Will use CarePlan &#8594; author to reference a Practitioner, PractitionerRole, RelatedPerson, Organization, CareTeam or Patient (in self-directed plans) who is the primary author of the care plan being developed.<br/>
2) Practitioner, Organization, CareTeam, RelatedPerson and Patient all include name.<br/>
3) PractitionerRole should be used when the Organization for whom the Practitioner works for is also needed. <br />
4) given is used for both first name &amp; MI, so need more than one.<br/>
5) family is a string with the person's surname.<br/>
6) text is a string that contains the full name of the person.<br/>
<!--Updated to reflect resolution of Jira #23058-->
7) The values for Support Planner Name and Support Planner Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Service Provider Information</td>
      <td>Support Planner Phone Number</td>
      <td>The primary phone number (and extension when applicable) of the support planner.</td>
      <td>CarePlan &#8594; author(Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam )<br/>
<br/>
Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam <br/>
         &#8594; telecom &#8594; system<br/>
Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam <br/>
         &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...author(Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam ) 0..1<br/>
......telecom 0..*<br/>
.........system 0..1<br/>
.........value 0..1</td>
      <td>1) Will use CarePlan &#8594; author to reference a Practitioner, PractitionerRole, RelatedPerson, Organization, CareTeam or Patient (in self-directed plan) who is the primary author of the care plan being developed.<br/>
2) Practitioner, PractitionerRole, RelatedPerson, Organization, CareTeam and Patient all include telecom.<br/>
3) PractitionerRole should be used when the Organization for whom the Practitioner works for is also needed.<br />
4) telecom is of type <A href="https://www.hl7.org/fhir/datatypes.html#contactpoint">ContactPoint</A> which contains elements to populate for the phone number.<br/>
5) system is required if value is provided, and can be: phone, fax, email, pager, url, sms, other.<br/>
6) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".</td>
    </tr>
    <tr>
      <td>Service Provider Information</td>
      <td>Service Provider Name</td>
      <td>The name of the entity or individual providing the service.<br/>
<br/>
For paid services use the organization/agency name, for non-paid services use the first and last name of the individual providing the service.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; performer(Practitioner<br/>
            | PractitionerRole | Organization<br/>
            | Patient | Device | RelatedPerson<br/>
            | HealthcareService | CareTeam)<br/>
<br/>
Practitioner | PractitionerRole | CareTeam<br/>
             | Organization | Patient | Device<br/>
             | RelatedPerson | HealthcareService<br/>
         &#8594; name</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........performer(Practitioner |<br/>
         PractitionerRole | Patient |<br/>
         Device | RelatedPerson |<br/>
         HealthcareService | CareTeam) 0..*<br/>
............name 0..1<br/>
----------------------------------<br/>
.........performer(Organization) 0..*<br/>
............name 1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and performer to reference a RelatedPerson, Organization or HealthcareService. Other options listed are available in FHIR, but may not be appropriate here.<br/>
2) Per eLTSS Dataset element definition, performer would reference an Organization or HealthcareService for paid services, and RelatedPerson for a non-paid service.<br/>
3) Organization &#8594; name and HealthcareService &#8594; name are strings with the organization's name.<br/>
4) RelatedPerson &#8594; name is a complex data element that includes strings for the person's surname and first name.<br/>
6) name is required by US Core for Organization.<br/>
<!--Updated to reflect resolution for Jira #23059-->
7) The values for Service Provider Name and Service Provider Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Service Provider Information</td>
      <td>Service Provider Phone Number</td>
      <td>The primary phone number (and extension when applicable) of the service provider.</td>
      <td><br/>
CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; performer(Practitioner<br/>
            | PractitionerRole | Organization<br/>
            | Patient | Device | RelatedPerson<br/>
            | HealthcareService | CareTeam)<br/>
<br/>
Practitioner | PractitionerRole | CareTeam<br/>
             | Organization | Patient | Device<br/>
             | RelatedPerson | HealthcareService<br/>
          &#8594; telecom &#8594; system<br/>
Practitioner | PractitionerRole | CareTeam<br/>
             | Organization | Patient | Device<br/>
             | RelatedPerson | HealthcareService<br/>
         &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........performer(Practitioner |<br/>
         PractitionerRole | Patient |<br/>
         Device | RelatedPerson |<br/>
         HealthcareService | CareTeam) 0..*<br/>
............telecom 0..*<br/>
.............system 0..1<br/>
.............value 0..1<br/>
----------------------------------<br/>
.........performer(Organization) 0..*<br/>
............telecom 1..*<br/>
.............system 0..1<br/>
.............value 1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and performer to reference a RelatedPerson, Organization or HealthcareService. Other options listed are available in FHIR, but may not be appropriate here.<br/>
2) Per eLTSS Dataset element definition, performer would reference an Organization or HealthcareService for paid services, and RelatedPerson for a non-paid service.<br/>
3) telecom is of type ContactPoint (https://www.hl7.org/fhir/datatypes.html#contactpoint) which contains elements to populate for the phone number.<br/>
4) system is required if value is provided, and can be: phone, fax, email, pager, url, sms, other.<br/>
5) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".<br/>
6) US Core requires at least one contact be provided in telecom for an Organization.</td>
    </tr>
    <tr>
      <td>Service Provider Information</td>
      <td>Non-Paid Service Provider Relationship</td>
      <td>The relationship (e.g., spouse, neighbor, guardian, daughter) of the individual providing a non-paid service or support to the person.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; performer(RelatedPerson)<br/>
<br/>
RelatedPerson &#8594; relationship</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........performer(RelatedPerson) 0..*<br/>
...........relationship 0.*</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and performer to reference a RelatedPerson.<br/>
2) Per eLTSS Dataset element definition, performer would reference a RelatedPerson for a non-paid service.<br/>
3) relationship is a CodeableConcept, and FHIR provides a preferred value set whose values can be found in the PatientRelationshipType here: https://www.hl7.org/fhir/relatedperson.html. The list is very long and detailed, for example including not only sister, but stepsister, half-sister, twin sister, natural sister, and identical twin sister.</td>
    </tr>
  </table>
  <table border="1">
    <tr>
      <th colspan="5">Data Requirements Not Specific to eLTSS Dataset Data Elements<br/>
This section documents data elements that are mandatory per FHIR XML schemas or US Core requirements, but that do not align with individual eLTSS Dataset data elements.</th>
    </tr>
    <tr>
      <th>FHIR Data Element Name<br/>
Requirement Source</th>
      <th>Data Element Definition</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
    </tr>
    <tr>
      <td>CarePlan Status<br/>
FHIR<br/>
US Core</td>
      <td>Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.</td>
      <td>CarePlan &#8594; status</td>
      <td>CarePlan<br/>
...status 1</td>
      <td>1) status is required by both FHIR and US Core, and must use the RequestStatus value set (http://hl7.org/fhir/valueset-request-status.html). Possible values are: draft, active, suspended, completed, entered-in-error, cancelled, and unknown.</td>
    </tr>
    <tr>
      <td>CarePlan Intent<br/>
FHIR<br/>
US Core </td>
      <td>Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain.</td>
      <td>CarePlan &#8594; intent</td>
      <td>CarePlan<br/>
...intent 1</td>
      <td>1) intent is required by both FHIR and US Core, and must use the CarePlanIntent value set (http://hl7.org/fhir/valueset-care-plan-intent.html). Possible values are: proposal, plan, order, and option.</td>
    </tr>
    <tr>
      <td>CarePlan Narrative Summary<br/>
US Core</td>
      <td>Text summary of the resource, for human interpretation. The narrative is an XHTML fragment with a flag to indicate its relationship to the data.</td>
      <td>CarePlan &#8594; text &#8594; status<br/>
CarePlan &#8594; text &#8594; div</td>
      <td>CarePlan<br/>
...text 1<br/>
......status 1<br/>
......div 1</td>
      <td>1) text is required by US Core.<br/>
2) status is required by FHIR and must use the NarrativeStatus value set (http://hl7.org/fhir/us/core/2019Jan/ValueSet-us-core-narrative-status.html). Possible values are: generated, additional.<br/>
3) div is required by FHIR and contains limited xhtml content that contains only the basic html formatting elements and attributes.</td>
    </tr>
    <tr>
      <td>CarePlan Category<br/>
US Core</td>
      <td>Identifies what "kind" of plan this is to support differentiation between multiple co-existing plans; e.g. "Home health", "psychiatric", "asthma", "disease management", "wellness plan", etc.</td>
      <td>CarePlan &#8594; category &#8594; coding &#8594; system<br/>
CarePlan &#8594; category &#8594; coding &#8594; code</td>
      <td>CarePlan<br/>
...category 1..*<br/>
......coding 1..*<br/>
.........system 1<br/>
.........code 1</td>
      <td>1) Per US Core, one category must appear, and must include system with the value "http://hl7.org/fhir/us/core/CodeSystem/careplan-category" and  code with the value "assess-plan".<br/>
2) US Core does not restrict the number of additional category elements that may appear.</td>
    </tr>
    <tr bgcolor="#fff2ff">
      <td>CarePlan Activity Status<br/>
FHIR</td>
      <td>Identifies what progress is being made for the specific activity.</td>
      <td>CarePlan &#8594; activity &#8594; reference(Resource) &#8594; status<br/>
			and<br/>
			CarePlan&#8594; activity &#8594; progress</td>
      <td>CarePlan<br/>
...activity<br/>
......reference(Resource)<br/>
.........status 1<br/>
and
CarePlan<br/>
...activity<br/>
......progress<br/>
</td>
      <td>1) status is required by FHIR in Resources Reference by CarePlan.activity.reference. Possible values are: not-started, scheduled, in-progress, on-hold, completed, cancelled, stopped, unknown, and entered-in-error.<br/>
	  2) There is also CarePlan.activity.progress to add a free-text description of the progress, or note. CarePlan.activity.progress is an Annotation data type in FHIR, this means it can be dated and contain the identification of the person who uttered the text. This might be used, for example, when the status stays in the same state, i.e. 'in-progress,' but where there is a evolution of that progress.</td>	  
	<td class="stu-note">Replaced use of CarePlan.activity.detail, and emphasized the use of the status element in the referenced activity and CarePlan.activity.progress free-text annotation</td>
    </tr>
    <tr>
      <td>CareTeam Status<br/>
US Core</td>
      <td>Indicates the current state of the care team.</td>
      <td>CareTeam &#8594; status</td>
      <td>CareTeam<br/>
...status 1</td>
      <td>1) status is required by US Core, and must use the CareTeamStatus value set. Possible values are: proposed, active, suspended, inactive, and entered-in-error.</td>
    </tr>
    <tr>
      <td>CareTeam Subject<br/>
US Core</td>
      <td>Who care team is for.</td>
      <td>CareTeam &#8594; subject(Patient)</td>
      <td>CareTeam<br/>
...subject 1</td>
      <td>1) US Core requires one reference to a Patient using subject.</td>
    </tr>
    <tr>
      <td>CareTeam Member<br/>
US Core</td>
      <td>Identifies all people and organizations who are expected to be involved in the care team.</td>
      <td>CareTeam &#8594; participant &#8594; member</td>
      <td>CareTeam<br/>
...participant 1..*<br/>
......member 1</td>
      <td>1) US Core requires care team members be listed in CareTeam &#8594; participant &#8594; member.<br/>
2) Note that the Plan Monitor eLTSS Dataset data element utilizes a participant &#8594; member as well, and this is documented in the eLTSS element mapping.</td>
    </tr>
    <tr>
      <td>CareTeam Participant Role<br/>
US Core</td>
      <td>Indicates specific responsibility of an individual within the care team, such as "Primary care physician", "Trained social worker counselor", "Caregiver", etc.</td>
      <td>CareTeam &#8594; participant &#8594; role</td>
      <td>CareTeam<br/>
...participant 1..*<br/>
......role 1</td>
      <td>1) US Core requires each participant in the CareTeam have a role defined in the "CareTeam Provider Role Value Set" which includes values from NUCC Health Care Provider Taxonomy Code Set for providers and SNOMED-CT for non-clinical and organization roles.<br/>
2) Note that the Plan Monitor eLTSS Dataset data element utilizes a participant role as well, and this is documented in the eLTSS element mapping.</td>
    </tr>
    <tr>
      <td>Claim Created<br/>
FHIR</td>
      <td>The date this resource was created.</td>
      <td>Claim &#8594; created</td>
      <td>Claim<br/>
...created 1</td>
      <td>1) created is required by FHIR. Could use date signers signed or agency authorized. Suggest using date/time that signers signed.</td>
    </tr>
    <tr>
      <td>Claim Insurance<br/>
FHIR</td>
      <td>Financial instruments for reimbursement for the health care products and services specified on the claim.</td>
      <td>Claim &#8594; insurance</td>
      <td>Claim<br/>
...insurance 1</td>
      <td>1) insurance is required by FHIR.</td>
    </tr>
    <tr>
      <td>Claim Insurance Sequence<br/>
FHIR</td>
      <td>A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.</td>
      <td>Claim &#8594; insurance &#8594; sequence</td>
      <td>Claim<br/>
...insurance 1<br/>
......sequence 1</td>
      <td>1) sequence is required by FHIR and is a positiveInt. Suggest using "1".</td>
    </tr>
    <tr>
      <td>Claim Insurance Focal<br/>
FHIR</td>
      <td>A flag to indicate that this Coverage is to be used for adjudication of this claim when set to true.</td>
      <td>Claim &#8594; insurance &#8594; focal</td>
      <td>Claim<br/>
...insurance 1<br/>
......focal 1</td>
      <td>1) focal is required by FHIR and is a boolean. Suggest using "true".</td>
    </tr>
    <tr>
      <td>Claim Insurance Coverage<br/>
FHIR</td>
      <td>Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.</td>
      <td>Claim &#8594; insurance &#8594; coverage</td>
      <td>Claim<br/>
...insurance 1<br/>
......coverage 1</td>
      <td>1) coverage is required by FHIR and references Coverage.</td>
    </tr>
    <tr>
      <td>Claim Item ProductOrService<br/>
FHIR</td>
      <td>When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item.</td>
      <td>Claim &#8594; item &#8594; productOrService</td>
      <td>Claim<br/>
...item 0..*<br/>
......productOrService 1</td>
      <td>1) productOrService is required by FHIR and must use the USCLS Codes value set (http://hl7.org/fhir/valueset-service-uscls.html). Suggest using the value "99555" for expense.</td>
    </tr>
    <tr>
      <td>Claim Patient<br/>
FHIR</td>
      <td>The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought.</td>
      <td>Claim &#8594; patient</td>
      <td>Claim<br/>
...patient 1</td>
      <td>1) patient is required by FHIR and references Patient.</td>
    </tr>
    <tr>
      <td>Claim Priority<br/>
FHIR</td>
      <td>The provider-required urgency of processing the request. </td>
      <td>Claim &#8594; priority</td>
      <td>Claim<br/>
...priority 1</td>
      <td>1) priority is required by FHIR and must use the Process Priority Codes value set (http://hl7.org/fhir/valueset-process-priority.html). Possible values are: stat, normal, deferred. Suggest using "normal".</td>
    </tr>
    <tr>
      <td>Claim Provider<br/>
FHIR</td>
      <td>The provider which is responsible for the claim, predetermination or preauthorization.</td>
      <td>Claim &#8594; provider</td>
      <td>Claim<br/>
...provider 1</td>
      <td>1) provider is required by FHIR and references Practitioner, PractitionerRole, Organization. Suggest using Practitioner or Organization.</td>
    </tr>
    <tr>
      <td>Claim Status<br/>
FHIR</td>
      <td>The status of the resource instance.</td>
      <td>Claim &#8594; status</td>
      <td>Claim<br/>
...status 1</td>
      <td>1) status is required by FHIR, and must use the Financial Resource Status Codes value set (http://hl7.org/fhir/valueset-fm-status.html). Possible values are: active, cancelled, draft, entered-in-error. Suggest using "active".</td>
    </tr>
    <tr>
      <td>Claim Type<br/>
FHIR</td>
      <td>The category of claim, e.g. oral, pharmacy, vision, institutional, professional.</td>
      <td>Claim &#8594; type</td>
      <td>Claim<br/>
...type 1</td>
      <td>1) type is required by FHIR, and contains the extensible Claim Type Codes value set (http://hl7.org/fhir/valueset-claim-type.html). Possible values are: institutional, oral, pharmacy, professional, vision. Could use "professional", could extend code list, or could use text data element that is part of codeable concept. </td>
    </tr>
    <tr>
      <td>Claim Use<br/>
FHIR</td>
      <td>A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.</td>
      <td>Claim &#8594; use</td>
      <td>Claim<br/>
...use 1</td>
      <td>1) use is required by FHIR, and must use the Use value set (http://hl7.org/fhir/valueset-claim-use.html). Possible values are: claim, preauthorization, predetermination. Suggest using "preauthorization"</td>
    </tr>
    <tr>
      <td>Claim Item Sequence<br/>
FHIR</td>
      <td>A number to uniquely identify item entries</td>
      <td>Claim &#8594; item &#8594; sequence</td>
      <td>Claim<br/>
...item 0..*<br/>
......sequence 1</td>
      <td>1) sequence is required by FHIR, and is a positive integer.</td>
    </tr>
    <tr>
      <td>Condition Verification Status<br/>
US Core</td>
      <td>The verification status to support the clinical status of the condition.</td>
      <td>Condition &#8594; verificationStatus</td>
      <td>Condition<br/>
...verificationStatus 1</td>
      <td>1) verificationStatus is required by US Core, and must use the ConditionVerificationStatus value set. Possible values are: provisional, differential, confirmed, refuted, entered-in-error, and unknown.</td>
    </tr>
    <tr>
      <td>Condition Clinical Status<br/>
US Core</td>
      <td>The clinical status of the condition.</td>
      <td>Condition &#8594; clinicalStatus</td>
      <td>Condition<br/>
...clinicalStatus 1</td>
      <td>1) clinicalStatus is required by US Core if the value of verificationStatus is not "entered-in-error". FHIR requires that the values come from the Condition Clinical Status Codes value set, which has values: active, recurrence, inactive, remission, and resolved.</td>
    </tr>
    <tr>
      <td>Condition Subject<br/>
US Core</td>
      <td> Who has the condition.</td>
      <td>Condition &#8594; subject(Patient)</td>
      <td>Condition<br/>
...subject 1</td>
      <td>1) subject is required by US Core, and is a reference to a Patient.</td>
    </tr>
    <tr>
      <td>Coverage Beneficiary<br/>
FHIR</td>
      <td>The party who benefits from the insurance coverage; the patient when products and/or services are provided.</td>
      <td>Coverage &#8594; beneficiary</td>
      <td>Coverage<br/>
...beneficiary 1</td>
      <td>1) beneficiary is required by FHIR, and is a reference to a Patient.</td>
    </tr>
    <tr>
      <td>Coverage Payor<br/>
FHIR</td>
      <td>The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements.</td>
      <td>Coverage &#8594; payor</td>
      <td>Coverage<br/>
...payor 1</td>
      <td>1) payor is required by FHIR, and is a reference to a Organization, Patient, RelatedPerson.</td>
    </tr>
    <tr>
      <td>Coverage Status<br/>
FHIR</td>
      <td>The status of the resource instance.</td>
      <td>Coverage &#8594; status</td>
      <td>Coverage<br/>
...status 1</td>
      <td>1) status is required by FHIR and must use the Financial Resource Status Codes (http://hl7.org/fhir/valueset-fm-status.html). Values include: active, cancelled, draft, entered-in-error. Suggest using active.</td>
    </tr>
    <tr>
      <td>DocumentReference Status<br/>
FHIR</td>
      <td>The status of this document reference.</td>
      <td>DocumentReference &#8594; status</td>
      <td>DocumentReference<br/>
...status 1</td>
      <td>1) status is required by FHIR and must use the DocumentReferenceStatus value set. Possible values are: current, superseded, and entered-in-error.</td>
    </tr>
    <tr>
      <td>Encounter<br/>
Status<br/>
FHIR</td>
      <td>Indicates the status of the encounter.</td>
      <td>Encounter &#8594; status</td>
      <td>Encounter<br/>
...status 1</td>
      <td>1) status is required by FHIR, and must use the EncounterStatus value set. Possible values are: planned, arrived, triaged, in-progress, onleave, finished, cancelled, entered-in-error, and unknown.</td>
    </tr>
    <tr>
      <td>Encounter<br/>
Class<br/>
FHIR</td>
      <td>Indicates the classification of patient encounter.</td>
      <td>Encounter &#8594; class &#8594; code</td>
      <td>Encounter<br/>
...class 1<br/>
......code 0..1</td>
      <td>1) class is required by FHIR, and is defined to use the extensible V3 Value SetActEncounterCode value set. Possible values are: ambulatory, emergency, field, home health, inpatient encounter, inpatient acute,  inpatient non-acute, observation encounter, pre-admission, short stay, and virtual. </td>
    </tr>
    <tr>
      <td>Encounter Type <br/> FHIR</td>
      <td>Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).</td>
      <td>Encounter -&gt; type</td>
      <td>Encounter<br/>...type 1</td>
      <td>1) type is required by US Core and codes SHALL be taken from US Core Encounter Type; other codes may be used where these codes are not suitable. </td>
    </tr>
    <tr>
      <td>EpisodeOfCare Status<br/>
FHIR</td>
      <td>Indicates the status of the episode of care.</td>
      <td>EpisodeOfCare &#8594; status</td>
      <td>EpisodeOfCare<br/>
...status 0..1</td>
      <td>1) status is required by FHIR, and must use the EpisodeOfCareStatus value set. Possible values are: planned, waitlist, active, onhold, finished, and cancelled.</td>
    </tr>
    <tr>
      <td>EpisodeOfCare Patient<br/>
FHIR</td>
      <td>The patient who is the focus of this episode of care.</td>
      <td>EpisodeOfCare &#8594; patient(Patient)</td>
      <td>EpisodeOfCare<br/>
...patient 0..1</td>
      <td>1) patient is required by FHIR, and is a reference to a Patient.</td>
    </tr>
    <tr>
      <td>Goal LifecycleStatus<br/>
FHIR<br/>
US Core</td>
      <td>The state of the goal throughout its lifecycle.</td>
      <td>Goal &#8594; lifecycleStatus</td>
      <td>Goal 0..*<br/>
...lifecycleStatus 1</td>
      <td>1) lifecycleStatus is required by both FHIR and US Core, and must use the GoalStatus value set which has values: proposed, accepted, in-progress, etc.</td>
    </tr>
    <tr>
      <td>Goal Subject<br/>
FHIR<br/>
US Core</td>
      <td>Identifies the patient, group or organization for whom the goal is being established.</td>
      <td>Goal &#8594; subject(Patient)</td>
      <td>Goal<br/>
...subject 1</td>
      <td>1) subject is required by both FHIR and US Core, and is a reference to a Patient.</td>
    </tr>
    <tr>
      <td>Location Name<br/>
US Core</td>
      <td>Name of the location as used by humans. Does not need to be unique.</td>
      <td>Location &#8594; name</td>
      <td>Location<br/>
...name 1</td>
      <td>1) US Core requires a name for the Location.</td>
    </tr>
    <tr>
      <td>Observation Status<br/>
FHIR</td>
      <td>The status of the result value.</td>
      <td>Observation &#8594; status</td>
      <td>Observation<br/>
...status 1</td>
      <td>1) status is required by FHIR, and the values are: final, preliminary, registered, cancelled, amended, corrected, entered-in-error, and unknown.</td>
    </tr>
    <tr>
      <td>Organization Identifier<br/>
US Core</td>
      <td> Identifier for the organization that is used to identify the organization across multiple disparate systems.</td>
      <td>Organization &#8594; identifier</td>
      <td>Organization<br/>
...identifier 1..*</td>
      <td>1) At least one identifier is required by US Core. NPI is preferred. Tax id is allowed. Local id is allowed in addition to 'authoritative' identifier.</td>
    </tr>
    <tr>
      <td>Organization Active Indicator<br/>
US Core</td>
      <td>Whether the organization's record is still in active use.</td>
      <td>Organization &#8594; active</td>
      <td>Organization<br/>
...active 1</td>
      <td>1) US Core requires one boolean value in active.</td>
    </tr>
    <tr>
      <td>Organization Address<br/>
US Core</td>
      <td>An address for the organization.</td>
      <td>Organization &#8594; address</td>
      <td>Organization<br/>
...address 1..*</td>
      <td>1) US Core requires at least one address. The contents of address are not specified by US Core. </td>
    </tr>
    <tr>
      <td>Patient Administrative Gender<br/>
US Core</td>
      <td>The gender that the patient is considered to have for administration and record keeping purposes.</td>
      <td>Patient &#8594; gender</td>
      <td>Patient<br/>
...gender 1</td>
      <td>1) gender is required by US Core and must use the AdministrativeGender value set. Possible values are: male, female, other, and unknown.</td>
    </tr>
    <tr>
      <td>Practitioner Identifier<br/>
US Core</td>
      <td>An identifier that applies to this person in this role.</td>
      <td>Practitioner &#8594; identifier</td>
      <td>Practitioner<br/>
...identifier 1..*</td>
      <td>1) At least one identifier is required by US Core. NPI is preferred. Tax id is allowed. Local id is allowed in addition to 'authoritative' identifier.</td>
    </tr>
    <tr>
      <td>Practitioner Name<br/>
US Core</td>
      <td>The name(s) associated with the practitioner.</td>
      <td>Practitioner &#8594; name</td>
      <td>Practitioner<br/>
...name 1</td>
      <td>1) US Core requires one name for a Practitioner.</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse Status<br/>
FHIR</td>
      <td>The position of the questionnaire response within its overall lifecycle.</td>
      <td>QuestionnaireResponse &#8594; status</td>
      <td>QuestionnaireResponse<br/>
...status 1</td>
      <td>1) status is required by FHIR and must use the QuestionnaireResponseStatus value set. Possible values are: in-progress, completed, amended, entered-in-error, and stopped.</td>
    </tr>
    <tr>
      <td>Questionnaire Status<br/>
FHIR</td>
      <td>The status of this questionnaire. Enables tracking the life-cycle of the content.</td>
      <td>Questionnaire &#8594; status</td>
      <td>Questionnaire<br/>
...status 1</td>
      <td>1) status is required by FHIR and must use the PublicationStatus value set. Possible values are: draft, active, retired, and unknown.</td>
    </tr>
    <tr>
      <td>RelatedPerson Patient<br/>
FHIR</td>
      <td>The patient this person is related to.</td>
      <td>RelatedPerson &#8594; patient(Patient)</td>
      <td>RelatedPerson<br/>
...patient 1</td>
      <td>1) patient is required by FHIR.</td>
    </tr>
    <tr>
      <td>RiskAssessment Status<br/>
FHIR</td>
      <td>The status of the RiskAssessment, using the same statuses as an Observation.</td>
      <td>RiskAssessment &#8594; status</td>
      <td>RiskAssessment<br/>
...status 1</td>
      <td>1) status is required by FHIR, and must use the ObservationStatus value set. Possible values are: registered, preliminary, final, amended, corrected, cancelled, entered-in-error and unknown.</td>
    </tr>
    <tr>
      <td>RiskAssessment Subject<br/>
FHIR</td>
      <td>Identifies the patient, group or organization for whom the goal is being established.</td>
      <td>RiskAssessment &#8594; subject(Patient)</td>
      <td>RiskAssessment<br/>
...subject 1</td>
      <td>1) subject is required by FHIR, and is a reference to a Patient. (Optional prior to R4 version 3.4.0.)</td>
    </tr>
    <tr>
      <td>ServiceRequest Intent<br/>
FHIR</td>
      <td>Whether the request is a proposal, plan, an original order or a reflex order.</td>
      <td>ServiceRequest &#8594; intent</td>
      <td>ServiceRequest<br/>
...intent 1</td>
      <td>1) intent is required by FHIR, and must use the RequestIntent value set. Possible values are: proposal, plan, order, original-order, reflex-order, filler-order, instance-order and option.</td>
    </tr>
    <tr>
      <td>ServiceRequest Status<br/>
FHIR</td>
      <td>The status of the request.</td>
      <td>ServiceRequest &#8594; status</td>
      <td>ServiceRequest<br/>
...status 0..1</td>
      <td>1) status is required by FHIR, and must use the RequestStatus value set which has values: draft, active, suspended, completed, entered-in-error, and cancelled.</td>
    </tr>
    <tr>
      <td>ServiceRequest Subject<br/>
FHIR</td>
      <td>On whom or what the service is to be performed.</td>
      <td>ServiceRequest &#8594; subject(Patient)</td>
      <td>ServiceRequest<br/>
...subject 0..1</td>
      <td>1) subject is required by FHIR, and is a reference to a Patient.</td>
    </tr>
    <tr>
      <td/>
      <td/>
      <td/>
      <td/>
      <td/>
    </tr>
  </table>









A Care Plan is a consensus-driven dynamic plan that represents a patient’s and Care Team Members’ prioritized concerns, goals, and planned interventions. It serves as a blueprint shared by all Care Team Members (including the patient, their caregivers, and providers), to guide the patient’s care. A Care Plan integrates multiple interventions proposed by multiple providers and disciplines for multiple conditions. A Care Plan may represent one or more Care Plans and serves to reconcile and resolve conflicts between the various plans developed for a specific patient by different providers. It supports the following use cases:
 
* Query for patient data across providers and compile into a consolidated care plan representation.
* Encourage capture of and communication of a patient's health concerns and related goals, interventions, and outcomes.
* Gather and aggregate patient data for uses beyond the point of care (e.g. public health, population health, quality measurement, risk adjustment, quality improvement, and research.)

### Standards Supported Care Planning and Coordination Process

The vision of this implementation guide (IG), with the FHIR Care Plan profile as its framework,  is to define a profile on the FHIR Care Plan resource that describes how it can be implemented and leveraged to support machine assisted care coordination between systems. It is assumed that clinician and patient facing SMART on FHIR Apps can be designed off of this guide to achieve that goal. The IG will also inform EHR systems on how to implement a structured encoded Care Plan.

The dynamic care plan process diagram shows Care Plan Cornerstones as they exist within the clinical world and elements and attributes from the FHIR Care Plan resource structure that support the process. In order to encourage reuse and dynamic, machine assisted care coordination, the Care Plan profile design leverages referrencing profiles wherever possible, especially within CarePlan.Activity. 

#### High Level Dynamic Care Plan Process Diagram
<table><tr><td><img src="CarePlanProcessCornerstones.png" /></td></tr></table>

This profile on the [FHIR Care Plan Resource](http://hl7.org/fhir/R4/careplan.html) describes rules and contraints to record, search, and fetch care plan data associated with a patient with multiple chronic conditions. It identifies which profiles, core elements, extensions, vocabularies and value sets **SHALL** be present in the resource when using this profile. Care plan data may or may not be tagged in an EHR as part of a care plan, but is also useful to retrieve data such as goals, problems, medications etc. and their time stamps from EHRs and other health system records to bring into an aggegated plan. This includes care plans that may be authored by a patient.


#### Multiple Chronic Condition FHIR Care Plan Profile Relationship Diagram
<table><tr><td><img width="975px" height="975px" src="carePlanProfileRelationshipDiagram.svg" /></td></tr></table>

### Supporting Machine Assisted Dynamic Care Coordination/Planning with the FHIR Care Plan Resource and FHIR Goal Resource

The machine assisted dynamic care planning/coordination is supported in FHIR by leveraging together the Care Plan resource, the Goal resource, resource referencing and available extensions within those resources to “link together the health concern or problem, and it’s associated goals, interventions and outcomes. The intention is to re-use data entered in the EHR, whether it is in a Care Plan Application, or elsewhere in the EHR or other information system, rather than having a care plan be a double documentation burden. For example, if a procedure is ordered and performed and the health concern or problem reason for that procedure is asserted in the ordering workflow or documentation workflow - this information can be pulled into the Care Plan. If a goal is asserted for a patient outside of a care plan, along with the reason for that goal, this also can be pulled into a care plan. The Care Plan profile relies on referencing of profiles rather than “in-line” representation or documentation to enable a dynamic workflow and to be able to pull in and aggregate care coordination activities from disparate systems to provide a comprehensive care coordination view for patients

CarePlan.Activity" is a Backbone element.
It identifies an action that has occurred or is a planned action to occur as part of the plan. 
For example, a medication to be used, lab tests to perform, self-monitoring that has occurred, education etc., within which in R4 can be OutcomeCodeableConcept, OutcomeReference, Progress Note when using activity.reference. 
		
OUTCOME REFERENCE (aka PERFORMED ACTIVITY reference): to be renamed in R5 to "CarePlan.performedActivity". Please see https://jira.hl7.org/browse/FHIR-26064.) OutcomeReference is not only an outcome but rather an action such as Procedure or an Encounter that was made or occurred or an Observation. Within CarePlan.performedActivity, the extension, "resource-pertainsToGoal" **SHALL** be used to reference this activity's related goal. Within the resource referenced within performedActivity, "Procedure.reason" **SHALL** be used to reference the health concern or problem for which the activity is done.

ACTIVITY REFERENCE (aka PLANNED ACTIVITY reference): to be renamed in R5 to "PlannedActivityReference". Please see https://jira.hl7.org/browse/FHIR-26064.) Within plannedActivityReference, the extension, "resource-pertainsToGoal" **SHALL** be used to reference this activity's request's related goal. "xxx.Request.reason" **SHALL** be used to reference the health concern or problem for which the activity is done. Within the referenced Goal resource, goal.address **SHALL** be used to reference the goal's related Condition, Observation, MedicationStatement, NutritionOrder, ServiceRequest or RiskAssessment. Within the referenced Goal resource, Goal.outcomeReference, references the outcome (e.g observations related to the goal).


**Health Concerns** represented with:

 - CarePlan.addresses
 - CarePlan.suppportingInfo
 - CarePlan.addresses (from within referenced goal)
 - Goal.addresses
 - activity.reason.reference

**Goals** represented with:
 - CarePlan.goal (for entire plan)
 - resource-pertainsToGoal
 - CarePlan.activity.outcomeReference.MCC Goal Profile

**Interventions** represented with:

 - CarePlan.plannedActivityReference (aka activity.reference)
 - CarePlan.performedActivityReference (aka activity.outcome.reference)

**Outcomes** represented with:

 - CarePlan.ActivityOutcome
 - Goal.outcome.reference

#### Instanciated FHIR Supported Dynamic Care Planning and Coordination
<table><tr><td><img src="InstanciatedFHIRSuppportedDynamicCarePlanning.png" /></td></tr></table>

---

// File: input/intro-notes/StructureDefinition-template-eltss-intro.md

#### Implementer mapping guidance
The following aids in finding the location of eLTSS data elements. See [R4 FHIR Mapping page](eLTSS_to_FHIR_R4_element.html) for complete guidance, here we are providing a subset of fields for convenience. 

<table border="1">
    <tr>
      <th>eLTSS Grouping</th>
      <th>eLTSS Data Element Name</th>
      <th>Data Element Definition (includes examples, expected list of values and usage note where applicable)</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
	  <th class="stu-note">Important change</th>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Person Name</td>
      <td>The name of the person whom the plan is for.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; name &#8594; family<br/>
Patient &#8594; name &#8594; given<br/>
Patient &#8594; name &#8594; text</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......name 1..*<br/>
.........family 1<br/>
.........given 1..*<br/>
.........text 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) given is used for both first name &amp; MI, so need more than one.<br/>
3) family is a string with the person's surname.<br/>
4) text is a string that contains the full name of the person.<br/>
5) Per US Core 1.0.1, each Patient must have at least one name, and each name must include family and given.</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Person Identifier</td>
      <td>A string of character(s) used to identify the person whom the plan is for.<br/>
<br/>
This may be the Medicaid ID number where applicable.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; identifier &#8594; value</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......identifier 1..*<br/>
.........value 1<br/>
.........system 1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) identifier is of type Identifier. value is a text element.<br/>
3) Per US Core 1.0.1, each Patient must have at least 1 identifier, and each identifier must include a value and system. system is the namespace for the identifier value.</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Person Identifier Type</td>
      <td>The type of unique identifier used to identify the person whom the plan is for.<br/>
Values include: Medicaid Number, State ID, Medical Record Number, Other (free text)</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; identifier &#8594; type</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......identifier 1..*<br/>
.........type 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) If we have the identifier, we need to be know the type.<br/>
3) type is a CodeableConcept with an extensible value set with values defined <A href="https://www.hl7.org/fhir/valueset-identifier-type.html">here</A>. <br/>  Medical Record Number is available in the documented code list. LOINC includes Medicaid Number (45400-9) and Social Security Number (45396-9). State ID is covered by the "SB" (Social Beneficiary) code value documented in the FHIR codeset at http://hl7.org/fhir/identifier-type. "Other" can be handled with the text element that is part of the Codeable Concept.</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Person Date of Birth</td>
      <td>The birth date of the person whom the plan is for.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; birthDate</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......birthDate 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) birthDate is in the form "1951-06-04". </td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Person Phone Number</td>
      <td>The primary phone number of the person whom the plan is for, or his/her legal representative, where applicable.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; telecom &#8594; system<br/>
Patient &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......telecom 0..*<br/>
.........value 0..1<br/>
.........system 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) telecom is of type ContactPoint which contains elements to populate for the phone number.<br/>
3) system is required by FHIR if value is provided, and can be: phone | fax | email | pager | url | sms | other. For the eLTSS phone number, system should be provided as "phone".<br/>
4) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Person Address</td>
      <td>The address of the person whom the plan is for.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; address &#8594; line<br/>
Patient &#8594; address &#8594; city<br/>
Patient &#8594; address &#8594; state<br/>
Patient &#8594; address &#8594; postalCode<br/>
Patient &#8594; address &#8594; district<br/>
Patient &#8594; address &#8594; text</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......address 0..*<br/>
.........line 0..*<br/>
.........city 0..1<br/>
.........state 0..1<br/>
.........postalCode 0..1<br/>
.........district 0..1<br/>
.........text 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) text is the full (not broken out) address.<br/>
3) line includes street name, number and suffix (e.g. 123 Main St.).<br/>
4) Information such as apt #, floor &amp; room #, etc. also go into line, generally as a separate data element.<br/>
5) district covers county.</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Emergency <br/>
Contact Name</td>
      <td>The name of the individual or entity identified to contact in case of emergency.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; contact &#8594; relationship<br/>
Patient &#8594; contact &#8594; name &#8594; family<br/>
Patient &#8594; contact &#8594; name &#8594; given<br/>
Patient &#8594; contact &#8594; name &#8594; text</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......contact 0..*<br/>
.........relationship 1..*<br/>
.........name 0..1<br/>
............family 0..1<br/>
............given 0..*<br/>
............text 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) Emergency contact is indicated using a relationship value "C".<br/>
3) If contact is provided, relationship needs to be provided to indicate this is an emergency contact.<br/>
4) given is used for both first name &amp; MI, so need more than one.<br/>
5) family is a string with the person's surname.<br/>
6) text is a string with the full name of the person.</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Emergency <br/>
Contact Relationship</td>
      <td>The relationship (e.g., spouse, neighbor, guardian, daughter) of the individual identified to contact in case of emergency.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; contact &#8594; relationship</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......contact 0..*<br/>
.........relationship 1..*</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) Emergency contact is indicated using a relationship value "C".<br/>
Other contact codes can be found here: https://www.hl7.org/fhir/v2/0131/index.html<br/>
3) The emergency contact would have two relationship data elements, one to indicate that it is an emergency contact and one to indicate the relationship between the patient and the contact (such as "next-of-kin").<br/>
4) There are other value sets that could be used to provide more detail, for example daughter or neighbor. Can use the value set http://www.hl7.org/implement/standards/fhir/valueset-relatedperson-relationshiptype.html</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Emergency <br/>
Contact Phone Number</td>
      <td>The primary phone number (and extension when applicable) of the individual or entity identified to contact in case of emergency.</td>
      <td>CarePlan &#8594; subject(Patient)<br/>
<br/>
Patient &#8594; contact &#8594; telecom &#8594; system<br/>
Patient &#8594; contact &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
......contact 0..*<br/>
.........telecom 0..*<br/>
............value 0..1<br/>
............system 0..1</td>
      <td>1) Will use CarePlan &#8594; subject to reference the Patient for the care plan being developed. FHIR requires that CarePlan includes a subject.<br/>
2) telecom is of type ContactPoint which contains elements to populate for the phone number.<br/>
3) system is required if value is provided, and can be: phone, fax, email, pager, url, sms, or other.<br/>
4) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".</td>
    </tr>
    <tr>
      <td>Beneficiary Demographics</td>
      <td>Emergency Backup Plan</td>
      <td>Description of how to address unforeseen events, emergency health events, emergency events, problems with medical equipment and supplies, and unavailable staffing situations for critical services that put the person's health and safety at risk.<br/>
<br/>
This can be included as free text or attachment.</td>
      <td>CarePlan [emergency backup plan]<br/>
         &#8594; subject(Patient)<br/>
CarePlan [emergency backup plan]<br/>
         &#8594; description<br/>
CarePlan [emergency backup plan]<br/>
         &#8594; partOf(CarePlan) ["main" Care Plan]<br/></td>
      <td>CarePlan<br/>
...subject(Patient) 1<br/>
...description 0..1<br/>
...part of(CarePlan) 0..*<br/>
</td>
      <td>1) The CarePlan resource containing the emergency backup plan refers to the "main" CarePlan resource, rather than the other way around, by using the emergency backup plan CarePlan &#8594; partOf data element to reference the "main" CarePlan data element.<br/>
2) FHIR requires that CarePlan includes a subject.<br/>
3) description contains the text of the Emergency Backup Plan if provided as text.<br/>
4) type indicates the kind of document, but the documented preferred LOINC value set does not include anything corresponding to an emergency backup plan. Therefore we can use the Codeable Concept's text data element to indicate "Emergency Backup Plan". (type is mandatory in FHIR 3.0.1, but optional in the R4 draft.)<br/></td>
    </tr>
    <tr bgcolor="#fff2ff">
      <td>Goals &amp; Strengths</td>
      <td>Goal</td>
      <td>A statement of a desired result that the person wants to achieve.</td>
      <td>CarePlan &#8594; goal(Goal)<br/>
<br/>
Goal &#8594; description &#8594; text</td>
      <td>CarePlan<br/>
...goal(Goal) 0..*<br/>
......description 1<br/>
.........text 1<br/>
......subject(Patient) 1</td>
      <td>1) Will use CarePlan &#8594; goal to reference the Goal for the care plan being developed.<br/>
2) description is required by both FHIR and US Core, and is a CodableConcept whose text element, per US Core, must include a text description of the goal.<br/>
3) Each goal should go into a separate Goal element so each can potentially reference a step or action(s), or a service(s) that addresses the goal.<br/>
<!--Updated 4) in response to JIRA #23047 and matching XLS-->
4) A Goal can be referenced from a Step or Action or from a service. For a goal related to a step or action, use extension(pertainsToGoal). For a service request specific goal, also use extension(pertainsToGoal). Logically, these goals are exclusive to each other and the same goal isn't duplicated at both levels.<br/>
5) US Core requires the use of Goal &#8594; Subject to reference back to the Patient. </td>
<td class="stu-note">Replaced use of CarePlan.activity.detail, and emphasized the extension pertainsToGoal</td>
    </tr>
    <tr bgcolor="#fff2ff">
      <td>Goals &amp; Strengths</td>
      <td>Step or Action</td>
      <td>A planned measurable step or action that needs to be taken to accomplish a goal identified by the person.</td>
	  <td>
CarePlan &#8594; activity<br/>
         &#8594; reference(Resource) &#8594; note<br/>
         &#8594; text
		 &#8594; extension(pertainsToGoal)</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(Resource) 0..1<br/>
.........note 0..*<br/>
............text 1<br/>
.........extension(pertainsToGoal)</td>
      <td>1) CarePlan includes activity &#8594; reference, which can be a reference to ServiceRequest, Task or other Resource.<br/>
2) ServiceRequest would be used when the Step or Action is a task under a service. If the Step or Action is an informal support or an activity being undertaken by the patient/care recipient, the Task Resource, similar to a Patient Task used in the Gravity SDOH IG, can be used.<br/>
3) activity &#8594; reference(Resource) is linked to the Goal the step or action addresses through the pertainsToGoal Extension in the referenced activity.<br/>
4) activity &#8594; reference(Resource) includes a performer, author, participant with type or other data element that can be used to reference who is responsible for performing the step or action, such as to indicate that the person or a related person is responsible.<br/>
5) text is where the Step or Action text would be provided.<br/>
6) text is required by FHIR if note is provided.<br/>
7) Note that a stated goal may lead directly to a service, and not necessarily to an explicit Step or Action. For example, a person's goal could be to attend church regularly, and this would be achieved through a transportation service.</td>
	<td class="stu-note">Replaced use of CarePlan.activity.detail, and emphasized the extension pertainsToGoal</td>
    </tr>
    <tr>
      <td>Goals &amp; Strengths</td>
      <td>Strength</td>
      <td>A favorable attribute of oneself, his/her support network, environment and/or elements of his/her life.</td>
      <td>CarePlan &#8594; supportingInfo(Observation)<br/>
<br/>
Observation &#8594; valueString<br/>
Observation &#8594; code &#8594; coding &#8594; code
Observation &#8594; code &#8594; coding &#8594; system</td>
      <td>
      CarePlan<br/>
...supportingInfo(Observation) 0..*<br/>
......valueString 0..1<br/>
......code 1<br/>
........coding 0..*<br/>
..........code 0..1<br/>
............system 0..1<br/>
</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Observation containing the Strength.<br/>
2) code is required by FHIR, and is a CodeableConcept where coding &#8594; code can be set to "Strength" with the corresponding NEW code &#8594; system "http://hl7.org/us/eLTSS/CodeSystem/eltss-observation-code".<br/>
3) valueString is where the Strength text would be provided.</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Assessed Need</td>
      <td>The clinical and/or community-based necessity or desire as identified through an assessment that should be addressed by a service. </td>
      <td>CarePlan &#8594; addresses(Condition)<br/>
<br/>
Condition &#8594; code &#8594; text<br/>
Condition &#8594; category</td>
      <td>CarePlan<br/>
...addresses(Condition) 0..*<br/>
......code 1<br/>
.........text 0..1<br/>
......category 1..*</td>
      <td>1) Will use CarePlan &#8594; addresses to reference the Condition(s) for the care plan being developed.<br/>
2) code is required by US Core and is a CodeableConcept which per US Core is bound to the extensible Problem Value Set. That value set is based on SNOMED-CT and includes very specific values that do not line up with assessed needs. Per US Core's documentation on extensible CodeableConcepts, the CodeableConcept's text element can be used "if no suitable codes exist", so we can use the text element for the assessed need.<br/>
3) Each assessed need should go into a separate Condition element so each can potentially be linked to a service(s) that addresses it.<br/>
4) category is required by US Core and is a CodeableConcept which per US Core is bound to the extensible US Core Condition Category Codes value set (http://hl7.org/fhir/ValueSet/condition-category) which has values: problem-list-item, encounter-diagnosis. Could use the value "problem-list-item" to indicate the underlying condition, and extend the value set to add the value "assessed-need".<br/>
5) An "assessed need" condition can refer to another condition via the condition-dueTo extension.</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Person Setting Choice Indicator</td>
      <td>Indicator that reflects the setting in which the person resides is chosen by the individual.</td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueBoolean<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueBoolean 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueBoolean is the actual response to the question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The value "boolean" would apply here. Boolean "true" would indicate "yes".</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Person Setting Choice Options</td>
      <td>The alternative home and community-based settings that were considered by the individual. </td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueString<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueString 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueString is the actual text of the response to a question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The values "string" (for a few words or short sentence) or "text" (potentially multi-paragraph) would apply here.</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Plan Monitor Name</td>
      <td>The name of the person responsible for monitoring the plan.</td>
      <td>CarePlan &#8594; encounter (Encounter)<br/>
<br/>
Encounter &#8594; episodeOfCare(EpisodeOfCare)<br/>
<br/>
EpisodeOfCare &#8594; careManager(Practitioner)<br/>
<br/>
Practitioner &#8594; name &#8594; family<br/>
Practitioner &#8594; name &#8594; given<br/>
Practitioner &#8594; name &#8594; text</td>
      <td>CarePlan<br/>
...encounter(Encounter) 0..1<br/>
...... episodeOfCare(EpisodeOfCare)0..1<br/>
.........careManager(Practitioner) 0..1<br/>
............name 0..*<br/>
...............family 0-1<br/>
................given 0-*<br/>
................text 0-1</td>
      <td>1) Will use CarePlan &#8594; encounter to reference the EpisodeOfCare that defines the plan monitor (care manager) for the plan.<br/>
2) EpisodeOfCare &#8594; careManager references the Practitioner who is monitoring the plan.<br/>
3) given is used for both first name &amp; MI, so need more than one.<br/>
4) family is a string with the person's surname.<br/>
5) text is a string that contains the full name of the person.<br/>
6) The values for Plan Monitor Name and Plan Monitor Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Plan Monitor Phone Number</td>
      <td>The primary phone number (and extension when applicable) of the plan monitor.</td>
      <td>CarePlan &#8594; encounter (Encounter)<br/>
<br/>
Encounter &#8594; episodeOfCare(EpisodeOfCare)<br/>
<br/>
EpisodeOfCare &#8594; careManager(Practitioner)<br/>
<br/>
Practitioner &#8594; telecom &#8594; system<br/>
Practitioner &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...encounter(Encounter) 0..1<br/>
...... episodeOfCare(EpisodeOfCare)0..1<br/>
.........careManager(Practitioner) 0..1<br/>
............telecom 0..*<br/>
...............system 0..1<br/>
................value 0..1</td>
      <td>1) Will use CarePlan &#8594; encounter to reference the EpisodeOfCare that defines the plan monitor (care manager) for the plan.<br/>
2) EpisodeOfCare &#8594; careManager references the Practitioner who is monitoring the plan.<br/>
3) telecom is of type ContactPoint (https://www.hl7.org/fhir/datatypes.html#contactpoint) which contains elements to populate for the phone number.<br/>
4) system is required if value is provided, and can be: phone, fax, email, pager, url, sms, other.<br/>
5) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Preference</td>
      <td>Presents the person's personal thoughts about something he or she feels is relevant to his or her life experience and may be pertinent when planning.</td>
      <td>CarePlan &#8594; supportingInfo(Observation)<br/>
<br/>
Observation &#8594; valueString<br/>
Observation &#8594; code &#8594; coding &#8594; code<br/>
Observation &#8594; code &#8594; coding &#8594; system<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Observation) 0..*<br/>
......valueString 0..1<br/>
......code 1<br/>
.........coding 0..*<br/>
............code 0..1<br/>
............system 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Observation containing the Preference.<br/>
2) code is required by FHIR and is a CodeableConcept where coding &#8594; code can be set to "Preference" with the corresponding NEW code -&gt; system "http://hl7.org/us/eLTSS/CodeSystem/eltss-observation-code".<br/>
3) valueString is where the Preference text would be provided.</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Service Options Given Indicator</td>
      <td>States whether or not the person was given a choice of services outlined in the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueBoolean<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueBoolean 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueBoolean is the actual response to the question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The value "boolean" would apply here. Boolean "true" would indicate "yes".</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Service Selection Indicator</td>
      <td>States whether or not the person participated in the selection of the services outlined in the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueBoolean<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueBoolean 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueBoolean is the actual response to the question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The value "boolean" would apply here. Boolean "true" would indicate "yes".</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Service Plan Agreement Indicator</td>
      <td>States whether or not the person agrees to the services outlined in the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueBoolean<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueBoolean 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueBoolean is the actual response to the question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The value "boolean" would apply here. Boolean "true" would indicate "yes".</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Service Provider Options Given Indicator</td>
      <td>States whether or not the person was offered a choice of providers for each service.</td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueBoolean<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueBoolean 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueBoolean is the actual response to the question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The value "boolean" would apply here. Boolean "true" would indicate "yes".</td>
    </tr>
    <tr>
      <td>Person Centered Planning</td>
      <td>Service Provider Selection Agreement Indicator</td>
      <td>States whether or not the person feels he/she made an informed choice in selecting the provider for each service.</td>
      <td>CarePlan &#8594; supportingInfo(Questionnaire)<br/>
<br/>
Questionnaire &#8594; item &#8594; linkID<br/>
Questionnaire &#8594; item &#8594; text<br/>
Questionnaire &#8594; item &#8594; type<br/>
------------------------------------------<br/>
QuestionnaireResponse<br/>
         &#8594; questionnaire(Questionnaire)<br/>
QuestionnaireResponse &#8594; item &#8594; linkID<br/>
QuestionnaireResponse &#8594; item &#8594; answer<br/>
         &#8594; valueBoolean<br/></td>
      <td>CarePlan<br/>
...supportingInfo(Questionnaire) 0..*<br/>
......item 0..*<br/>
.........linkID 1<br/>
.........text 0..1<br/>
.........type 1<br/>
------------------------<br/>
QuestionnaireResponse<br/>
...questionnaire(Questionnaire) 0..1<br/>
...item 0..*<br/>
......linkID 1<br/>
......answer 0..*<br/>
.........valueBoolean 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Questionnaire for the care plan being developed.<br/>
2) QuestionnaireResponse references the Questionnaire.<br/>
3) QuestionnaireResponse and Questionnaire both include one or more item elements, where each item documents a question or answer to a question.<br/>
4) item includes a mandatory linkID used to link the response to the question it applies to.<br/>
5) valueBoolean is the actual response to the question.<br/>
6) text is the actual text of the question in the Questionnaire.<br/>
7) type is required by FHIR and indicates what kind of question this is. Values must come from the QuestionnaireItemType value set which includes: group, display, boolean, decimal, integer, date, dateTime, etc. The value "boolean" would apply here. Boolean "true" would indicate "yes".</td>
    </tr>
    <tr>
      <td>Plan Information</td>
      <td>Plan Effective Date</td>
      <td>The date upon which the plan goes into effect.<br/>
<br/>
Start date is required, end date is optional.</td>
      <td>CarePlan &#8594; period &#8594; start<br/>
CarePlan &#8594; period &#8594; end</td>
      <td>CarePlan 0..*<br/>
...period 0..1<br/>
......start 1<br/>
......end 0..1</td>
      <td>1) period includes a start and an end element, which are both dateTime formats which can be date, date-time or partial date (e.g. just year or year + month).<br/>
2) start is required by eLTSS.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Person Signature</td>
      <td>The depiction of the person's signature as proof of identity and intent for the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; type<br/>
Contract &#8594; signer &#8594; signature &#8594; data<br/>
Contract &#8594; signer &#8594; signature &#8594; type<br/>
Contract &#8594; signer &#8594; signature<br/>
         &#8594; who(Practitioner | PractitionerRole |<br/>
         RelatedPerson | Patient | Device |<br/>
         Organization)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........type 1<br/>
.........signature 1..*<br/>
............data 0..1<br/>
............type 1<br/>
............who(Practitioner | PractitionerRole |<br/>
            RelatedPerson | Patient | Device |<br/>
            Organization) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) Can use a single Contract element to contain all signatures.<br/>
3) signer requires the signature and a type that indicates the contract signatory role.<br/>
4) FHIR includes a preferred coding for contract signatory roles, which map well to the eLTSS signatories. The primary one for the patient/beneficiary is "PAT" (patient), although implementers may use others as well. However, implementers must realize that type may be used to differentiate between the patient, service provider, planner, etc. so there need to be distinct role types utilized.<br/>
5) data is the actual signature content (XML DigSig. JWT, picture, etc.)<br/>
6) signature requires it's own type element that indicates why the entity signed the contract, and FHIR provides a preferred code list. Would probably use "1.2.840.10065.1.12.1.7" which represents "consent signature" in this case.<br/>
7) signature requires a who to indicate who signed, which can be a Patient, Organization, Practitioner, PrationerRole, RelatedPerson or Device, although in this case it would be the Patient.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Person Printed Name</td>
      <td>The printed or typed name of the person.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; party(Patient)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........party(Patient) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) In this case, party is a reference to the Patient, and Patient is already documented above to include a name.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Person Signature Date</td>
      <td>The date the person signed the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; signature &#8594; when</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........signature 1..*<br/>
............when 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) when is required by FHIR, and indicates when the signature was created.<br/>
3) when is an instance type. An instant in time - known at least to the second and always includes a time zone. Note: This is intended for precisely observed times (typically system logs etc.), and not human-reported times - for them, use date and dateTime. instant is a more constrained dateTime.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Guardian / Legal Representative Signature</td>
      <td>The depiction of the guardian or legally authorized representative's signature as proof of identity and intent for the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; type<br/>
Contract &#8594; signer &#8594; signature &#8594; data<br/>
Contract &#8594; signer &#8594; signature &#8594; type<br/>
Contract &#8594; signer &#8594; signature<br/>
         &#8594; who(Practitioner | PractitionerRole |<br/>
         RelatedPerson | Patient | Device |<br/>
         Organization)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........type 1<br/>
.........signature 1..*<br/>
............data 0..1<br/>
............type 1<br/>
............who(Practitioner | PractitionerRole |<br/>
            RelatedPerson | Patient | Device |<br/>
            Organization) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) Can use a single Contract element to contain all signatures.<br/>
3) signer requires the signature and a type that indicates the contract signatory role.<br/>
4) FHIR includes a preferred coding for contract signatory roles, which map well to the eLTSS signatories. There are multiple values that may be used depending on how states want to map. For example, the list includes: "POWATT" (power of attorney), "GUARD" (guardian), "HPOWATT" (healthcare power of attorney), etc. However, implementers must realize that type may be used to differentiate between the patient, service provider, planner, etc. so there need to be distinct role types utilized.<br/>
5) data is the signature content (XML DigSig. JWT, picture, etc.)<br/>
6) signature requires it's own type element that indicates why the entity signed the contract, and FHIR provides a preferred value set. Would probably use "1.2.840.10065.1.12.1.7" which represents "consent signature" in this case.<br/>
7) signature requires a who  to indicate who signed, which can be a Patient, Organization, Practitioner, PractitionerRole, RelatedPerson or Device although in this case it would be the RelatedPerson.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Guardian / Legal Representative Printed Name</td>
      <td>The printed or typed name of the guardian or legally authorized representative.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; party(RelatedPerson)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........party(RelatedPerson) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) In this case, party is a reference to a RelatedPerson, and RelatedPatient includes a name.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Guardian / Legal Representative Signature Date</td>
      <td>The date the guardian or legally authorized representative signed the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; signature &#8594; when</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........signature 1..*<br/>
............when 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) when is required by FHIR, and indicates when the signature was created.<br/>
3) when is an instance type. An instant in time - known at least to the second and always includes a time zone. Note: This is intended for precisely observed times (typically system logs etc.), and not human-reported times - for them, use date and dateTime. instant is a more constrained dateTime.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Support Planner Signature</td>
      <td>The depiction of the support planner's signature as proof of identity and intent for the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; type<br/>
Contract &#8594; signer &#8594; signature &#8594; data<br/>
Contract &#8594; signer &#8594; signature &#8594; type<br/>
Contract &#8594; signer &#8594; signature<br/>
         &#8594; who(Practitioner | PractitionerRole | Organization<br/>
         RelatedPerson | Patient |<br/>
         Organization)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........type 1<br/>
.........signature 1..*<br/>
............data 0..1<br/>
............type 1<br/>
............who(Practitioner |PractitionerRole | Organization<br/>
            RelatedPerson | Patient |<br/>
            Organization) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) Can use a single Contract element to contain all signatures.<br/>
3) signer requires the signature and a type that indicates the contract signatory role.<br/>
4) FHIR includes a preferred coding for contract signatory roles, which map well to the eLTSS signatories. There are multiple values that may be used depending on how states want to map. For example, the list includes "AUT" (author) which aligns with author being the support planner for other eLTSS Dataset elements. However other role types may be appropriate as well such as "GUAR" (guarantor). However, implementers must realize that type may be used to differentiate between the patient, service provider, planner, etc. so there need to be distinct role types utilized.<br/>
5) data is the actual signature content (XML DigSig. JWT, picture, etc.)<br/>
6) signature requires it's own type element that indicates why the entity signed the contract, and FHIR provides a preferred value set, in this case could use "1.2.840.10065.1.12.1.1" for "Author's Signature".<br/>
7) signature requires a who to indicate who signed, which can be a Patient, Organization, Practitioner, PractitionerRole, RelatedPerson or Device. </td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Support Planner Printed Name</td>
      <td>The printed or typed name of the support planner.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; party(Practitioner|PractitionerRole|Organization)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........party(Practitioner|PractitionerRole|Organization)</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) In this case, party is a reference to a Practitioner, PractitionerRole or Organization (for cases when the Organization of the SupportPlanner is needed), and Practitioner and Organization includes a name.<br/>
<!--Updated to reflect the resolution of Jira #23058-->
3) The values for Support Planner Name and Support Planner Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Support Planner Signature Date</td>
      <td>The date the support planner signed the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; signature &#8594; when</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........signature 1..*<br/>
............when 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) when is required by FHIR, and indicates when the signature was created.<br/>
3) when is an instance type. An instant in time - known at least to the second and always includes a time zone. Note: This is intended for precisely observed times (typically system logs etc.), and not human-reported times - for them, use date and dateTime. instant is a more constrained dateTime.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Service Provider Signature</td>
      <td>The depiction of the service provider's signature as proof they agree to the services they will provide.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; type<br/>
Contract &#8594; signer &#8594; signature &#8594; data<br/>
Contract &#8594; signer &#8594; signature &#8594; type<br/>
Contract &#8594; signer &#8594; signature<br/>
         &#8594; who(Practitioner | PractitionerRole |<br/>
         RelatedPerson | Patient | Device |<br/>
         Organization)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........type 1<br/>
.........signature 1..*<br/>
............data 0..1<br/>
............type 1<br/>
............who(Practitioner |PractitionerRole |<br/>
            RelatedPerson | Patient | Device |<br/>
            Organization) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) Can use a single Contract element to contain all signatures.<br/>
3) signer requires the signature and a type that indicates the contract signatory role.<br/>
4) FHIR includes a preferred coding for contract signer roles, which map well to the eLTSS signatories. There are multiple values that may be used depending on how states want to map. The list includes "HPROV" (healthcare provider) which may be the best fit here, although others may be applicable. However, implementers must realize that type may be used to differentiate between the patient, service provider, planner, etc. so there need to be distinct role types utilized.<br/>
5) data is the actual signature content (XML DigSig. JWT, picture, etc.)<br/>
6) signature requires it's own type element that indicates why the entity signed the contract, and FHIR provides a preferred value set. In this case would probably use "1.2.840.10065.1.12.1.3" for "Co-participant's Signature".<br/>
7) signature requires a who  to indicate who signed, which can be a Patient, Organization, Practitioner, PractitionerRole, RelatedPerson or Device.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Service Provider Printed Name</td>
      <td>The printed or typed name of the service provider.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; party(Organization |<br/>
         Patient | Practitioner | PractitionerRole | RelatedPerson)</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........party(Organization | Patient |<br/>
         Practitioner | PractitionerRole | RelatedPerson) 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) party is a reference to an Organization, Patient, Practitioner, PractitionerRole or RelatedPerson, all of which include a name. (Patient may not make sense in the context of a service provided by a care plan, but is allowed in FHIR.)<br/>
<!--Updated to reflect resolution of Jira #23059-->
3) The values for Service Provider Name and Service Provider Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Plan Signatures</td>
      <td>Service Provider Signature Date</td>
      <td>The date the service provider signed the plan.</td>
      <td>CarePlan &#8594; supportingInfo(Contract)<br/>
<br/>
Contract &#8594; signer &#8594; signature &#8594; when</td>
      <td>CarePlan<br/>
...supportingInfo(Contract) 0..*<br/>
......signer 0..*<br/>
.........signature 1..*<br/>
............when 1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the Contract containing the signatures, names, etc.<br/>
2) when is required by FHIR, and indicates when the signature was created.<br/>
3) when is an instance type. An instant in time - known at least to the second and always includes a time zone. Note: This is intended for precisely observed times (typically system logs etc.), and not human-reported times - for them, use date and dateTime. instant is a more constrained dateTime.</td>
    </tr>
    <tr>
      <td>Risks</td>
      <td>Identified Risk</td>
      <td>An aspect of a person's life, behavior, environmental exposure, personal characteristic, Social determinants of health (SDOH), or other barrier that increases the likelihood of  disease, condition, injury to self or others, or interaction with the criminal justice system.</td>
      <td>CarePlan &#8594; supportingInfo(RiskAssessment)<br/>
<br/>
RiskAssessment &#8594; prediction &#8594; outcome<br/>
         &#8594; coding &#8594; code<br/>
RiskAssessment &#8594; prediction &#8594; outcome<br/>
         &#8594; coding &#8594; system<br/>
RiskAssessment &#8594; prediction &#8594; outcome<br/>
         &#8594; text</td>
      <td>CarePlan<br/>
...supportingInfo(RiskAssessment) 0..*<br/>
......prediction 0..*<br/>
.........outcome 0..1<br/>
............coding 0..*<br/>
...............code 0..1<br/>
...............system 0..1<br/>
............text 0..1</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the RiskAssessment containing the Identified Risk.<br/>
2) outcome is a Codeable Concept that includes a text element that can be used for the identified risk itself if no appropriate coding is available. (outcome was mandatory prior to R4 version 3.3.0.)<br/>
3) prediction describes the expected outcome for the subject, and is the "prediction" of the risk.</td>
    </tr>
    <tr>
      <td>Risks</td>
      <td>Risk Management Plan</td>
      <td>Description of planned activities to minimize identified risks that endanger the person's health and safety.<br/>
<br/>
This can be included as free text or attachment.</td>
      <td>CarePlan &#8594; supportingInfo(RiskAssessment)<br/>
<br/>
RiskAssessment &#8594; mitigation<br/>
RiskAssessment &#8594; extension(RiskAssessment Mitigation Plan)<br/>
<br/></td>
      <td>CarePlan<br/>
...supportingInfo(RiskAssessment) 0..*<br/>
......mitigation 0..1<br/>
...RiskAssessment <br/>
...extension(RiskAssessment MitigationPlan)</td>
      <td>1) Will use CarePlan &#8594; supportingInfo to reference the RiskAssessment containing the Risk Management Plan.<br/>
2) mitigation is a string and would contain the free text Risk Management Plan.<br/>
3) The new RiskAssessment -&gt; extension -&gt; RiskAssessment Mitigation Plan which is a DocumentReference resource would be used if the Risk Management Plan is being provided as an attachment rather than as text.</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Name</td>
      <td>Identifies the paid and/or non-paid service provided to a person.<br/>
Include the code and display name plus any modifiers when a coding system (e.g., Healthcare Common Procedure Coding System (HCPCS), Home Health Revenue Codes) is used.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; code &#8594; text<br/>
ServiceRequest &#8594; code &#8594; coding &#8594; code<br/>
ServiceRequest &#8594; code &#8594; coding &#8594; system</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........code 0..1<br/>
............text 0..1<br/>
............coding 0..1<br/>
...............code 0..1<br/>
...............system 0..1</td>
      <td>1) activity is part of CarePlan, so no references are required to link the two.<br/>
2) coding &#8594; code is the "code plus any modifiers" described in the eLTSS Dataset data element definition. system identifies the code system from which the code is from. For HCPCS, the system value can be set to "https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo/".<br/>
3) text is the "display name" described in the eLTSS Dataset data element definition.<br/>
4) Note that modifiers for CPT &amp; HCPCS are appended to the code using a dash. So the entire code plus the modifier is a single string.</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Self-Directed Service Indicator</td>
      <td>Indicates whether the individual chose to self-direct the service.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; extension &#8594; url<br/>
ServiceRequest &#8594; extension<br/>
         &#8594; valueCodeableConcept &#8594; text</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........extension 0..*<br/>
............url 0..1<br/>
............valueCodeableConcept 0..1<br/>
...............text 0..1</td>
      <td>1) activity is part of CarePlan, so no references are required to link the two.<br/>
2) The procedure-directedBy extension is indicated by populating the url data attribute with the value "http://hl7.org/fhir/StructureDefinition/procedure-directedBy".<br/>
3) The text data element can be populated with the value "self" to indicate that this service is self-directed. Other values could be provided to indicate that someone else is directing the service. This is in addition to populating the proper element in the Resource indicated in CarePlan.activity.reference such as Task, Observation etc to indicate who is responsible or carried out the task.</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Start Date</td>
      <td>The start date of the service being provided.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; occurrenceTiming<br/>
         &#8594; boundsPeriod &#8594; start</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........occurrenceTiming 0..1<br/>
............boundsPeriod 0..1<br/>
...............start 0..1</td>
      <td>1) activity is part of CarePlan, so no references are required to link the two.<br/>
2) start is in dateTime format which can be date, date-time or partial date (e.g. just year or year + month).</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service End Date</td>
      <td>The end date of the service being provided.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; occurrenceTiming<br/>
         &#8594; boundsPeriod &#8594; end</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........occurrenceTiming 0..1<br/>
............boundsPeriod 0..1<br/>
...............end 0..1</td>
      <td>1) activity is part of CarePlan, so no references are required to link the two.<br/>
2) end is in dateTime format which can be date, date-time or partial date (e.g. just year or year + month).</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Delivery Address</td>
      <td>The address where service delivery will take place if service will not be provided at the person's address.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; locationReference(Location)<br/>
<br/>
Location &#8594; address &#8594; line<br/>
Location &#8594; address &#8594; city<br/>
Location &#8594; address &#8594; district<br/>
Location &#8594; address &#8594; state<br/>
Location &#8594; address &#8594; postalCode<br/>
Location &#8594; address &#8594; text<br/>
Location &#8594; description</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........locationReference(Location) 0..*<br/>
............address 0..*<br/>
...............line 0..*<br/>
...............city 0..1<br/>
...............district 0..1<br/>
...............state 0..1<br/>
...............postalCode 0..1<br/>
...............text 0..1<br/>
............description 0..1</td>
      <td>1) activity is part of CarePlan, so no references are required to link the two.<br/>
2) text is the full (not broken out) address.<br/>
3 line includes street name, number and suffix (e.g. 123 Main St.).<br/>
4) Information such as apt #, floor &amp; room #, etc. also go into line, generally as a separate data element.<br/>
5) district covers county.<br/>
6) description can be used when the location is not a specific address, such as when support is being provided at a general location, such as someone providing assistance wherever the recipient grocery shops.</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Comment</td>
      <td>Additional information related to the service being provided. This field could capture additional information of the frequency of the service, how the person wants the service delivered and only used when the comment provides additional detail of the service not already handled by another element.</td>
      <td><br/>
CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; note &#8594; text</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........note 0..*<br/>
............text 1</td>
      <td>1) activity is part of CarePlan, so no references are required to link the two.<br/>
2) text is required by FHIR if note is provided, and is a string.</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Funding Source</td>
      <td>The source of payment for the service.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; insurance(Coverage)<br/>
<br/>
Coverage &#8594; payor(Organization | Patient<br/>
             | RelatedPerson)<br/>
<br/>
Organization | Patient | RelatedPerson<br/>
         &#8594; name</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest)  0..1<br/>
.........insurance(Coverage) 0..*<br/>
............payor(Organization | Patient |<br/>
          RelatedPerson) 1..*<br/>
...............name 0..1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and insurance to reference a Coverage resource, which must include a payor that is a person or an organization.<br/>
2) Coverage resource may be used to register "SelfPay" where an individual or organization other than an insurer is taking responsibility for payment for a portion of the health care cost.</td>
    </tr>
    <tr bgcolor="#fff2ff">
      <td>Service Information</td>
      <td>Service Unit Quantity</td>
      <td>The numerical amount of the service unit being provided for a frequency.<br/>
<br/>
This element is slated to be used in conjunction with Service Quantity Interval and Unit of Service Type elements to form a full description of how often a service is provided. For example, a service being provided 7 units per week, the Service Unit Quantity = "7". For a service being provided 8 hours a day, the Service Unit Value = "8".</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; quantityQuantity &#8594; value<br/>
ServiceRequest &#8594; quantityQuantity &#8594; unit<br/>
or<br/>
ServiceRequest &#8594; quantityRatio &#8594; numerator<br/>
         &#8594; value<br/>
ServiceRequest &#8594; quantityRatio &#8594; numerator<br/>
         &#8594; unit<br/>
ServiceRequest &#8594; quantityRatio &#8594; denominator<br/>
         &#8594; value<br/>
ServiceRequest &#8594; quantityRatio &#8594; denominator<br/>
         &#8594; unit</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest)  0..1<br/>
.........quantityQuantity 0..1<br/>
............value 0..1<br/>
............unit 0..1<br/>
.........quantityRatio 0..1<br/>
............numerator 0..1<br/>
...............value 0..1<br/>
...............unit 0..1<br/>
............denominator 0..1<br/>
...............value 0..1<br/>
...............unit 0..1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest.<br/>
2) quantityQuantity can be used to represent simple quantities such as "1 installation" or "5 trips". quantityRatio can be used to represent quantities with intervals such as "8 hours a day" or "7 units per week". Either quantityQuantity or quantityRatio can be used, but not both for the same ServiceRequest.<br/>
3) value is a decimal, and unit is a string.<br/>
4) numerator and denominator are used to represent a quantity with an interval. For example, to represent 8 hours a day, numerator &#8594; value would be "8" and numerator &#8594; unit would be "hour", while denominator &#8594; value would be "1" and denominator &#8594; unit would be "day".<br/>
5) See the "qty-unit-interval examples" worksheet in this spreadsheet for additional details.<br/>
6) Please also consider occurrencePeriod for use when the quantity is meant to be performed within a defined, simple start and end date. E.g. For May 31,2023 to June 10, 2023 give ServicePlan.quantity of 5 [USD]/day. AND, use occurrenceTiming for timing information that fluctuates or is sufficiently complex. The recipient may need to calculate end-date, or one can use occurrenceTiming.boundsPeriod to ascribe a start and end date. E.g. Give ServicePlan.quantity 5 with unit=[USD]/day with the occurrenceTiming.boundsPeriod of May 31, 2023 to June 23, 2023 on occurrenceTiming.dayOfWeek = Mon and Wed at occurrenceTiming.timeOfDay = 3 pm.</td>
	<td class="stu-note">Added guidance on ServiceRequest.occurrenceTiming and ServiceRequest.occurrencePeriod</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Unit of Service Type</td>
      <td>A named quantity in terms of which services are measured or specified, used as a standard measurement of like services. Values include: minute(s), 8 hour(s), quarter hour(s), hour(s), half day(s), full day(s), day(s), week(s), month(s), dollar(s), meal(s), mile(s), visit(s)/session(s), installation(s), none, other (free text).<br/>
<br/>
This element is slated to be used in conjunction with Service Unit Quantity interval and Service Unit Quantity elements to form a full description of how often a service is provided. For example, a service being provided 7 units per week, the Unit of Service Type = "units". For a service being provided 8 hours a day, the Unit of Service Type = "hours".</td>
      <td>see above</td>
      <td>see above</td>
      <td>see above</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Unit Quantity Interval</td>
      <td>A period of time corresponding to the quantity of service(s) indicated. Values include: per day, per week, per month, per year, one time only, other (free text).<br/>
<br/>
This element is slated to be used in conjunction with Unit of Service Type and Service Unit Quantity elements to form a full description of how often a service is provided. For example, a service being provided 7 units per week, the Service Unit Quantity Interval = "per week". For a service being provided 8 hours a day, the Service Unit Quantity Interval = "per day".</td>
      <td>see above</td>
      <td>see above</td>
      <td>see above</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Service Rate per Unit</td>
      <td>The rate of one unit for a service.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; supportingInfo(Claim)<br/>
<br/>
Claim &#8594; item &#8594; unitPrice</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest)  0..1<br/>
.........supportingInfo(Claim) 0..*<br/>
............item 0..*<br/>
...............unitPrice 0..1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and supportingInfo to reference a Claim.<br/>
2) item maps to a service.<br/>
3) unitPrice contains the charge or cost per point, which maps to the cost per one unit of the service.<br/>
4) unitPrice is of type Money, which is a descendant of the Quantity complex type and inherits value, unit, system, code, and comparator.<br/>
5) Workgroup in charge of ServiceRequest wants to work with the Claim workgroup to determine best approach. One potential approach is to update the scope of ClaimResponse since that reflects what has been approved rather than what is being asked for.</td>
    </tr>
    <tr>
      <td>Service Information</td>
      <td>Total Cost of Service</td>
      <td>The total cost of a service for the plan.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; supportingInfo(Claim)<br/>
<br/>
Claim &#8594; item &#8594; net</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest)  0..1<br/>
.........supportingInfo(Claim) 0..*<br/>
............item 0..*<br/>
...............net 0..1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and supportingInfo to reference a Claim.<br/>
2) item maps to a service.<br/>
3) net is the total cost of an item, which in this case is the total cost for the service.<br/>
4) net is of type Money, which is a descendant of the Quantity complex type and inherits value, unit, system, code, and comparator.<br/>
5) See above.</td>
    </tr>
    <tr>
      <td>Service Provider Information</td>
      <td>Support Planner Name</td>
      <td>The name of the person (e.g., Case Manager, Care Coordinator, Plan Coordinator) who helped develop the plan.</td>
      <td>CarePlan &#8594; author(Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam)<br/>
<br/>
Practitioner | Patient | RelatedPerson<br/>
         &#8594; name &#8594; family<br/>
Practitioner | Patient | RelatedPerson<br/>
         &#8594; name &#8594; given<br/>
Practitioner | Patient | RelatedPerson<br/>
         &#8594; name &#8594; text<br/>
         Organization | CareTeam &#8594; name
         </td>
      <td>CarePlan<br/>
...author(Patient | Practitioner | RelatedPerson ) 0..1<br/>
......name 0..*<br/>
.........family 0..1<br/>
.........given 0..*<br/>
.........text 0..1<br />
CarePlan<br />
…author(Organization | CareTeam ) 0..1<br />
......name 0..1</td>
      <td>1) Will use CarePlan &#8594; author to reference a Practitioner, PractitionerRole, RelatedPerson, Organization, CareTeam or Patient (in self-directed plans) who is the primary author of the care plan being developed.<br/>
2) Practitioner, Organization, CareTeam, RelatedPerson and Patient all include name.<br/>
3) PractitionerRole should be used when the Organization for whom the Practitioner works for is also needed. <br />
4) given is used for both first name &amp; MI, so need more than one.<br/>
5) family is a string with the person's surname.<br/>
6) text is a string that contains the full name of the person.<br/>
<!--Updated to reflect resolution of Jira #23058-->
7) The values for Support Planner Name and Support Planner Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Service Provider Information</td>
      <td>Support Planner Phone Number</td>
      <td>The primary phone number (and extension when applicable) of the support planner.</td>
      <td>CarePlan &#8594; author(Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam )<br/>
<br/>
Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam <br/>
         &#8594; telecom &#8594; system<br/>
Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam <br/>
         &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...author(Patient | Practitioner | PractitionerRole |  RelatedPerson | Organization | CareTeam ) 0..1<br/>
......telecom 0..*<br/>
.........system 0..1<br/>
.........value 0..1</td>
      <td>1) Will use CarePlan &#8594; author to reference a Practitioner, PractitionerRole, RelatedPerson, Organization, CareTeam or Patient (in self-directed plan) who is the primary author of the care plan being developed.<br/>
2) Practitioner, PractitionerRole, RelatedPerson, Organization, CareTeam and Patient all include telecom.<br/>
3) PractitionerRole should be used when the Organization for whom the Practitioner works for is also needed.<br />
4) telecom is of type <A href="https://www.hl7.org/fhir/datatypes.html#contactpoint">ContactPoint</A> which contains elements to populate for the phone number.<br/>
5) system is required if value is provided, and can be: phone, fax, email, pager, url, sms, other.<br/>
6) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".</td>
    </tr>
    <tr>
      <td>Service Provider Information</td>
      <td>Service Provider Name</td>
      <td>The name of the entity or individual providing the service.<br/>
<br/>
For paid services use the organization/agency name, for non-paid services use the first and last name of the individual providing the service.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; performer(Practitioner<br/>
            | PractitionerRole | Organization<br/>
            | Patient | Device | RelatedPerson<br/>
            | HealthcareService | CareTeam)<br/>
<br/>
Practitioner | PractitionerRole | CareTeam<br/>
             | Organization | Patient | Device<br/>
             | RelatedPerson | HealthcareService<br/>
         &#8594; name</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........performer(Practitioner |<br/>
         PractitionerRole | Patient |<br/>
         Device | RelatedPerson |<br/>
         HealthcareService | CareTeam) 0..*<br/>
............name 0..1<br/>
----------------------------------<br/>
.........performer(Organization) 0..*<br/>
............name 1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and performer to reference a RelatedPerson, Organization or HealthcareService. Other options listed are available in FHIR, but may not be appropriate here.<br/>
2) Per eLTSS Dataset element definition, performer would reference an Organization or HealthcareService for paid services, and RelatedPerson for a non-paid service.<br/>
3) Organization &#8594; name and HealthcareService &#8594; name are strings with the organization's name.<br/>
4) RelatedPerson &#8594; name is a complex data element that includes strings for the person's surname and first name.<br/>
6) name is required by US Core for Organization.<br/>
<!--Updated to reflect resolution for Jira #23059-->
7) The values for Service Provider Name and Service Provider Printed Name would include the same information.</td>
    </tr>
    <tr>
      <td>Service Provider Information</td>
      <td>Service Provider Phone Number</td>
      <td>The primary phone number (and extension when applicable) of the service provider.</td>
      <td><br/>
CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; performer(Practitioner<br/>
            | PractitionerRole | Organization<br/>
            | Patient | Device | RelatedPerson<br/>
            | HealthcareService | CareTeam)<br/>
<br/>
Practitioner | PractitionerRole | CareTeam<br/>
             | Organization | Patient | Device<br/>
             | RelatedPerson | HealthcareService<br/>
          &#8594; telecom &#8594; system<br/>
Practitioner | PractitionerRole | CareTeam<br/>
             | Organization | Patient | Device<br/>
             | RelatedPerson | HealthcareService<br/>
         &#8594; telecom &#8594; value</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........performer(Practitioner |<br/>
         PractitionerRole | Patient |<br/>
         Device | RelatedPerson |<br/>
         HealthcareService | CareTeam) 0..*<br/>
............telecom 0..*<br/>
.............system 0..1<br/>
.............value 0..1<br/>
----------------------------------<br/>
.........performer(Organization) 0..*<br/>
............telecom 1..*<br/>
.............system 0..1<br/>
.............value 1</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and performer to reference a RelatedPerson, Organization or HealthcareService. Other options listed are available in FHIR, but may not be appropriate here.<br/>
2) Per eLTSS Dataset element definition, performer would reference an Organization or HealthcareService for paid services, and RelatedPerson for a non-paid service.<br/>
3) telecom is of type ContactPoint (https://www.hl7.org/fhir/datatypes.html#contactpoint) which contains elements to populate for the phone number.<br/>
4) system is required if value is provided, and can be: phone, fax, email, pager, url, sms, other.<br/>
5) Per FHIR, phone # should be formatted according to ITU-T E.123, so "(555) 675 5745" or "+22 555 675 5745".<br/>
6) US Core requires at least one contact be provided in telecom for an Organization.</td>
    </tr>
    <tr>
      <td>Service Provider Information</td>
      <td>Non-Paid Service Provider Relationship</td>
      <td>The relationship (e.g., spouse, neighbor, guardian, daughter) of the individual providing a non-paid service or support to the person.</td>
      <td>CarePlan &#8594; activity<br/>
         &#8594; reference(ServiceRequest)<br/>
<br/>
ServiceRequest &#8594; performer(RelatedPerson)<br/>
<br/>
RelatedPerson &#8594; relationship</td>
      <td>CarePlan<br/>
...activity 0..*<br/>
......reference(ServiceRequest) 0..1<br/>
.........performer(RelatedPerson) 0..*<br/>
...........relationship 0.*</td>
      <td>1) Will use CarePlan &#8594; activity &#8594; reference to reference a ServiceRequest, and performer to reference a RelatedPerson.<br/>
2) Per eLTSS Dataset element definition, performer would reference a RelatedPerson for a non-paid service.<br/>
3) relationship is a CodeableConcept, and FHIR provides a preferred value set whose values can be found in the PatientRelationshipType here: https://www.hl7.org/fhir/relatedperson.html. The list is very long and detailed, for example including not only sister, but stepsister, half-sister, twin sister, natural sister, and identical twin sister.</td>
    </tr>
  </table>
  <table border="1">
    <tr>
      <th colspan="5">Data Requirements Not Specific to eLTSS Dataset Data Elements<br/>
This section documents data elements that are mandatory per FHIR XML schemas or US Core requirements, but that do not align with individual eLTSS Dataset data elements.</th>
    </tr>
    <tr>
      <th>FHIR Data Element Name<br/>
Requirement Source</th>
      <th>Data Element Definition</th>
      <th>FHIR R4 Resource Element(s)</th>
      <th>FHIR R4 Resource Element Cardinality (with US Core Constraints)</th>
      <th>Additional Mapping Details</th>
    </tr>
    <tr>
      <td>CarePlan Status<br/>
FHIR<br/>
US Core</td>
      <td>Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.</td>
      <td>CarePlan &#8594; status</td>
      <td>CarePlan<br/>
...status 1</td>
      <td>1) status is required by both FHIR and US Core, and must use the RequestStatus value set (http://hl7.org/fhir/valueset-request-status.html). Possible values are: draft, active, suspended, completed, entered-in-error, cancelled, and unknown.</td>
    </tr>
    <tr>
      <td>CarePlan Intent<br/>
FHIR<br/>
US Core </td>
      <td>Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain.</td>
      <td>CarePlan &#8594; intent</td>
      <td>CarePlan<br/>
...intent 1</td>
      <td>1) intent is required by both FHIR and US Core, and must use the CarePlanIntent value set (http://hl7.org/fhir/valueset-care-plan-intent.html). Possible values are: proposal, plan, order, and option.</td>
    </tr>
    <tr>
      <td>CarePlan Narrative Summary<br/>
US Core</td>
      <td>Text summary of the resource, for human interpretation. The narrative is an XHTML fragment with a flag to indicate its relationship to the data.</td>
      <td>CarePlan &#8594; text &#8594; status<br/>
CarePlan &#8594; text &#8594; div</td>
      <td>CarePlan<br/>
...text 1<br/>
......status 1<br/>
......div 1</td>
      <td>1) text is required by US Core.<br/>
2) status is required by FHIR and must use the NarrativeStatus value set (http://hl7.org/fhir/us/core/2019Jan/ValueSet-us-core-narrative-status.html). Possible values are: generated, additional.<br/>
3) div is required by FHIR and contains limited xhtml content that contains only the basic html formatting elements and attributes.</td>
    </tr>
    <tr>
      <td>CarePlan Category<br/>
US Core</td>
      <td>Identifies what "kind" of plan this is to support differentiation between multiple co-existing plans; e.g. "Home health", "psychiatric", "asthma", "disease management", "wellness plan", etc.</td>
      <td>CarePlan &#8594; category &#8594; coding &#8594; system<br/>
CarePlan &#8594; category &#8594; coding &#8594; code</td>
      <td>CarePlan<br/>
...category 1..*<br/>
......coding 1..*<br/>
.........system 1<br/>
.........code 1</td>
      <td>1) Per US Core, one category must appear, and must include system with the value "http://hl7.org/fhir/us/core/CodeSystem/careplan-category" and  code with the value "assess-plan".<br/>
2) US Core does not restrict the number of additional category elements that may appear.</td>
    </tr>
    <tr bgcolor="#fff2ff">
      <td>CarePlan Activity Status<br/>
FHIR</td>
      <td>Identifies what progress is being made for the specific activity.</td>
      <td>CarePlan &#8594; activity &#8594; reference(Resource) &#8594; status<br/>
			and<br/>
			CarePlan&#8594; activity &#8594; progress</td>
      <td>CarePlan<br/>
...activity<br/>
......reference(Resource)<br/>
.........status 1<br/>
and
CarePlan<br/>
...activity<br/>
......progress<br/>
</td>
      <td>1) status is required by FHIR in Resources Reference by CarePlan.activity.reference. Possible values are: not-started, scheduled, in-progress, on-hold, completed, cancelled, stopped, unknown, and entered-in-error.<br/>
	  2) There is also CarePlan.activity.progress to add a free-text description of the progress, or note. CarePlan.activity.progress is an Annotation data type in FHIR, this means it can be dated and contain the identification of the person who uttered the text. This might be used, for example, when the status stays in the same state, i.e. 'in-progress,' but where there is a evolution of that progress.</td>	  
	<td class="stu-note">Replaced use of CarePlan.activity.detail, and emphasized the use of the status element in the referenced activity and CarePlan.activity.progress free-text annotation</td>
    </tr>
    <tr>
      <td>CareTeam Status<br/>
US Core</td>
      <td>Indicates the current state of the care team.</td>
      <td>CareTeam &#8594; status</td>
      <td>CareTeam<br/>
...status 1</td>
      <td>1) status is required by US Core, and must use the CareTeamStatus value set. Possible values are: proposed, active, suspended, inactive, and entered-in-error.</td>
    </tr>
    <tr>
      <td>CareTeam Subject<br/>
US Core</td>
      <td>Who care team is for.</td>
      <td>CareTeam &#8594; subject(Patient)</td>
      <td>CareTeam<br/>
...subject 1</td>
      <td>1) US Core requires one reference to a Patient using subject.</td>
    </tr>
    <tr>
      <td>CareTeam Member<br/>
US Core</td>
      <td>Identifies all people and organizations who are expected to be involved in the care team.</td>
      <td>CareTeam &#8594; participant &#8594; member</td>
      <td>CareTeam<br/>
...participant 1..*<br/>
......member 1</td>
      <td>1) US Core requires care team members be listed in CareTeam &#8594; participant &#8594; member.<br/>
2) Note that the Plan Monitor eLTSS Dataset data element utilizes a participant &#8594; member as well, and this is documented in the eLTSS element mapping.</td>
    </tr>
    <tr>
      <td>CareTeam Participant Role<br/>
US Core</td>
      <td>Indicates specific responsibility of an individual within the care team, such as "Primary care physician", "Trained social worker counselor", "Caregiver", etc.</td>
      <td>CareTeam &#8594; participant &#8594; role</td>
      <td>CareTeam<br/>
...participant 1..*<br/>
......role 1</td>
      <td>1) US Core requires each participant in the CareTeam have a role defined in the "CareTeam Provider Role Value Set" which includes values from NUCC Health Care Provider Taxonomy Code Set for providers and SNOMED-CT for non-clinical and organization roles.<br/>
2) Note that the Plan Monitor eLTSS Dataset data element utilizes a participant role as well, and this is documented in the eLTSS element mapping.</td>
    </tr>
    <tr>
      <td>Claim Created<br/>
FHIR</td>
      <td>The date this resource was created.</td>
      <td>Claim &#8594; created</td>
      <td>Claim<br/>
...created 1</td>
      <td>1) created is required by FHIR. Could use date signers signed or agency authorized. Suggest using date/time that signers signed.</td>
    </tr>
    <tr>
      <td>Claim Insurance<br/>
FHIR</td>
      <td>Financial instruments for reimbursement for the health care products and services specified on the claim.</td>
      <td>Claim &#8594; insurance</td>
      <td>Claim<br/>
...insurance 1</td>
      <td>1) insurance is required by FHIR.</td>
    </tr>
    <tr>
      <td>Claim Insurance Sequence<br/>
FHIR</td>
      <td>A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.</td>
      <td>Claim &#8594; insurance &#8594; sequence</td>
      <td>Claim<br/>
...insurance 1<br/>
......sequence 1</td>
      <td>1) sequence is required by FHIR and is a positiveInt. Suggest using "1".</td>
    </tr>
    <tr>
      <td>Claim Insurance Focal<br/>
FHIR</td>
      <td>A flag to indicate that this Coverage is to be used for adjudication of this claim when set to true.</td>
      <td>Claim &#8594; insurance &#8594; focal</td>
      <td>Claim<br/>
...insurance 1<br/>
......focal 1</td>
      <td>1) focal is required by FHIR and is a boolean. Suggest using "true".</td>
    </tr>
    <tr>
      <td>Claim Insurance Coverage<br/>
FHIR</td>
      <td>Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.</td>
      <td>Claim &#8594; insurance &#8594; coverage</td>
      <td>Claim<br/>
...insurance 1<br/>
......coverage 1</td>
      <td>1) coverage is required by FHIR and references Coverage.</td>
    </tr>
    <tr>
      <td>Claim Item ProductOrService<br/>
FHIR</td>
      <td>When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item.</td>
      <td>Claim &#8594; item &#8594; productOrService</td>
      <td>Claim<br/>
...item 0..*<br/>
......productOrService 1</td>
      <td>1) productOrService is required by FHIR and must use the USCLS Codes value set (http://hl7.org/fhir/valueset-service-uscls.html). Suggest using the value "99555" for expense.</td>
    </tr>
    <tr>
      <td>Claim Patient<br/>
FHIR</td>
      <td>The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought.</td>
      <td>Claim &#8594; patient</td>
      <td>Claim<br/>
...patient 1</td>
      <td>1) patient is required by FHIR and references Patient.</td>
    </tr>
    <tr>
      <td>Claim Priority<br/>
FHIR</td>
      <td>The provider-required urgency of processing the request. </td>
      <td>Claim &#8594; priority</td>
      <td>Claim<br/>
...priority 1</td>
      <td>1) priority is required by FHIR and must use the Process Priority Codes value set (http://hl7.org/fhir/valueset-process-priority.html). Possible values are: stat, normal, deferred. Suggest using "normal".</td>
    </tr>
    <tr>
      <td>Claim Provider<br/>
FHIR</td>
      <td>The provider which is responsible for the claim, predetermination or preauthorization.</td>
      <td>Claim &#8594; provider</td>
      <td>Claim<br/>
...provider 1</td>
      <td>1) provider is required by FHIR and references Practitioner, PractitionerRole, Organization. Suggest using Practitioner or Organization.</td>
    </tr>
    <tr>
      <td>Claim Status<br/>
FHIR</td>
      <td>The status of the resource instance.</td>
      <td>Claim &#8594; status</td>
      <td>Claim<br/>
...status 1</td>
      <td>1) status is required by FHIR, and must use the Financial Resource Status Codes value set (http://hl7.org/fhir/valueset-fm-status.html). Possible values are: active, cancelled, draft, entered-in-error. Suggest using "active".</td>
    </tr>
    <tr>
      <td>Claim Type<br/>
FHIR</td>
      <td>The category of claim, e.g. oral, pharmacy, vision, institutional, professional.</td>
      <td>Claim &#8594; type</td>
      <td>Claim<br/>
...type 1</td>
      <td>1) type is required by FHIR, and contains the extensible Claim Type Codes value set (http://hl7.org/fhir/valueset-claim-type.html). Possible values are: institutional, oral, pharmacy, professional, vision. Could use "professional", could extend code list, or could use text data element that is part of codeable concept. </td>
    </tr>
    <tr>
      <td>Claim Use<br/>
FHIR</td>
      <td>A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.</td>
      <td>Claim &#8594; use</td>
      <td>Claim<br/>
...use 1</td>
      <td>1) use is required by FHIR, and must use the Use value set (http://hl7.org/fhir/valueset-claim-use.html). Possible values are: claim, preauthorization, predetermination. Suggest using "preauthorization"</td>
    </tr>
    <tr>
      <td>Claim Item Sequence<br/>
FHIR</td>
      <td>A number to uniquely identify item entries</td>
      <td>Claim &#8594; item &#8594; sequence</td>
      <td>Claim<br/>
...item 0..*<br/>
......sequence 1</td>
      <td>1) sequence is required by FHIR, and is a positive integer.</td>
    </tr>
    <tr>
      <td>Condition Verification Status<br/>
US Core</td>
      <td>The verification status to support the clinical status of the condition.</td>
      <td>Condition &#8594; verificationStatus</td>
      <td>Condition<br/>
...verificationStatus 1</td>
      <td>1) verificationStatus is required by US Core, and must use the ConditionVerificationStatus value set. Possible values are: provisional, differential, confirmed, refuted, entered-in-error, and unknown.</td>
    </tr>
    <tr>
      <td>Condition Clinical Status<br/>
US Core</td>
      <td>The clinical status of the condition.</td>
      <td>Condition &#8594; clinicalStatus</td>
      <td>Condition<br/>
...clinicalStatus 1</td>
      <td>1) clinicalStatus is required by US Core if the value of verificationStatus is not "entered-in-error". FHIR requires that the values come from the Condition Clinical Status Codes value set, which has values: active, recurrence, inactive, remission, and resolved.</td>
    </tr>
    <tr>
      <td>Condition Subject<br/>
US Core</td>
      <td> Who has the condition.</td>
      <td>Condition &#8594; subject(Patient)</td>
      <td>Condition<br/>
...subject 1</td>
      <td>1) subject is required by US Core, and is a reference to a Patient.</td>
    </tr>
    <tr>
      <td>Coverage Beneficiary<br/>
FHIR</td>
      <td>The party who benefits from the insurance coverage; the patient when products and/or services are provided.</td>
      <td>Coverage &#8594; beneficiary</td>
      <td>Coverage<br/>
...beneficiary 1</td>
      <td>1) beneficiary is required by FHIR, and is a reference to a Patient.</td>
    </tr>
    <tr>
      <td>Coverage Payor<br/>
FHIR</td>
      <td>The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements.</td>
      <td>Coverage &#8594; payor</td>
      <td>Coverage<br/>
...payor 1</td>
      <td>1) payor is required by FHIR, and is a reference to a Organization, Patient, RelatedPerson.</td>
    </tr>
    <tr>
      <td>Coverage Status<br/>
FHIR</td>
      <td>The status of the resource instance.</td>
      <td>Coverage &#8594; status</td>
      <td>Coverage<br/>
...status 1</td>
      <td>1) status is required by FHIR and must use the Financial Resource Status Codes (http://hl7.org/fhir/valueset-fm-status.html). Values include: active, cancelled, draft, entered-in-error. Suggest using active.</td>
    </tr>
    <tr>
      <td>DocumentReference Status<br/>
FHIR</td>
      <td>The status of this document reference.</td>
      <td>DocumentReference &#8594; status</td>
      <td>DocumentReference<br/>
...status 1</td>
      <td>1) status is required by FHIR and must use the DocumentReferenceStatus value set. Possible values are: current, superseded, and entered-in-error.</td>
    </tr>
    <tr>
      <td>Encounter<br/>
Status<br/>
FHIR</td>
      <td>Indicates the status of the encounter.</td>
      <td>Encounter &#8594; status</td>
      <td>Encounter<br/>
...status 1</td>
      <td>1) status is required by FHIR, and must use the EncounterStatus value set. Possible values are: planned, arrived, triaged, in-progress, onleave, finished, cancelled, entered-in-error, and unknown.</td>
    </tr>
    <tr>
      <td>Encounter<br/>
Class<br/>
FHIR</td>
      <td>Indicates the classification of patient encounter.</td>
      <td>Encounter &#8594; class &#8594; code</td>
      <td>Encounter<br/>
...class 1<br/>
......code 0..1</td>
      <td>1) class is required by FHIR, and is defined to use the extensible V3 Value SetActEncounterCode value set. Possible values are: ambulatory, emergency, field, home health, inpatient encounter, inpatient acute,  inpatient non-acute, observation encounter, pre-admission, short stay, and virtual. </td>
    </tr>
    <tr>
      <td>Encounter Type <br/> FHIR</td>
      <td>Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).</td>
      <td>Encounter -&gt; type</td>
      <td>Encounter<br/>...type 1</td>
      <td>1) type is required by US Core and codes SHALL be taken from US Core Encounter Type; other codes may be used where these codes are not suitable. </td>
    </tr>
    <tr>
      <td>EpisodeOfCare Status<br/>
FHIR</td>
      <td>Indicates the status of the episode of care.</td>
      <td>EpisodeOfCare &#8594; status</td>
      <td>EpisodeOfCare<br/>
...status 0..1</td>
      <td>1) status is required by FHIR, and must use the EpisodeOfCareStatus value set. Possible values are: planned, waitlist, active, onhold, finished, and cancelled.</td>
    </tr>
    <tr>
      <td>EpisodeOfCare Patient<br/>
FHIR</td>
      <td>The patient who is the focus of this episode of care.</td>
      <td>EpisodeOfCare &#8594; patient(Patient)</td>
      <td>EpisodeOfCare<br/>
...patient 0..1</td>
      <td>1) patient is required by FHIR, and is a reference to a Patient.</td>
    </tr>
    <tr>
      <td>Goal LifecycleStatus<br/>
FHIR<br/>
US Core</td>
      <td>The state of the goal throughout its lifecycle.</td>
      <td>Goal &#8594; lifecycleStatus</td>
      <td>Goal 0..*<br/>
...lifecycleStatus 1</td>
      <td>1) lifecycleStatus is required by both FHIR and US Core, and must use the GoalStatus value set which has values: proposed, accepted, in-progress, etc.</td>
    </tr>
    <tr>
      <td>Goal Subject<br/>
FHIR<br/>
US Core</td>
      <td>Identifies the patient, group or organization for whom the goal is being established.</td>
      <td>Goal &#8594; subject(Patient)</td>
      <td>Goal<br/>
...subject 1</td>
      <td>1) subject is required by both FHIR and US Core, and is a reference to a Patient.</td>
    </tr>
    <tr>
      <td>Location Name<br/>
US Core</td>
      <td>Name of the location as used by humans. Does not need to be unique.</td>
      <td>Location &#8594; name</td>
      <td>Location<br/>
...name 1</td>
      <td>1) US Core requires a name for the Location.</td>
    </tr>
    <tr>
      <td>Observation Status<br/>
FHIR</td>
      <td>The status of the result value.</td>
      <td>Observation &#8594; status</td>
      <td>Observation<br/>
...status 1</td>
      <td>1) status is required by FHIR, and the values are: final, preliminary, registered, cancelled, amended, corrected, entered-in-error, and unknown.</td>
    </tr>
    <tr>
      <td>Organization Identifier<br/>
US Core</td>
      <td> Identifier for the organization that is used to identify the organization across multiple disparate systems.</td>
      <td>Organization &#8594; identifier</td>
      <td>Organization<br/>
...identifier 1..*</td>
      <td>1) At least one identifier is required by US Core. NPI is preferred. Tax id is allowed. Local id is allowed in addition to 'authoritative' identifier.</td>
    </tr>
    <tr>
      <td>Organization Active Indicator<br/>
US Core</td>
      <td>Whether the organization's record is still in active use.</td>
      <td>Organization &#8594; active</td>
      <td>Organization<br/>
...active 1</td>
      <td>1) US Core requires one boolean value in active.</td>
    </tr>
    <tr>
      <td>Organization Address<br/>
US Core</td>
      <td>An address for the organization.</td>
      <td>Organization &#8594; address</td>
      <td>Organization<br/>
...address 1..*</td>
      <td>1) US Core requires at least one address. The contents of address are not specified by US Core. </td>
    </tr>
    <tr>
      <td>Patient Administrative Gender<br/>
US Core</td>
      <td>The gender that the patient is considered to have for administration and record keeping purposes.</td>
      <td>Patient &#8594; gender</td>
      <td>Patient<br/>
...gender 1</td>
      <td>1) gender is required by US Core and must use the AdministrativeGender value set. Possible values are: male, female, other, and unknown.</td>
    </tr>
    <tr>
      <td>Practitioner Identifier<br/>
US Core</td>
      <td>An identifier that applies to this person in this role.</td>
      <td>Practitioner &#8594; identifier</td>
      <td>Practitioner<br/>
...identifier 1..*</td>
      <td>1) At least one identifier is required by US Core. NPI is preferred. Tax id is allowed. Local id is allowed in addition to 'authoritative' identifier.</td>
    </tr>
    <tr>
      <td>Practitioner Name<br/>
US Core</td>
      <td>The name(s) associated with the practitioner.</td>
      <td>Practitioner &#8594; name</td>
      <td>Practitioner<br/>
...name 1</td>
      <td>1) US Core requires one name for a Practitioner.</td>
    </tr>
    <tr>
      <td>QuestionnaireResponse Status<br/>
FHIR</td>
      <td>The position of the questionnaire response within its overall lifecycle.</td>
      <td>QuestionnaireResponse &#8594; status</td>
      <td>QuestionnaireResponse<br/>
...status 1</td>
      <td>1) status is required by FHIR and must use the QuestionnaireResponseStatus value set. Possible values are: in-progress, completed, amended, entered-in-error, and stopped.</td>
    </tr>
    <tr>
      <td>Questionnaire Status<br/>
FHIR</td>
      <td>The status of this questionnaire. Enables tracking the life-cycle of the content.</td>
      <td>Questionnaire &#8594; status</td>
      <td>Questionnaire<br/>
...status 1</td>
      <td>1) status is required by FHIR and must use the PublicationStatus value set. Possible values are: draft, active, retired, and unknown.</td>
    </tr>
    <tr>
      <td>RelatedPerson Patient<br/>
FHIR</td>
      <td>The patient this person is related to.</td>
      <td>RelatedPerson &#8594; patient(Patient)</td>
      <td>RelatedPerson<br/>
...patient 1</td>
      <td>1) patient is required by FHIR.</td>
    </tr>
    <tr>
      <td>RiskAssessment Status<br/>
FHIR</td>
      <td>The status of the RiskAssessment, using the same statuses as an Observation.</td>
      <td>RiskAssessment &#8594; status</td>
      <td>RiskAssessment<br/>
...status 1</td>
      <td>1) status is required by FHIR, and must use the ObservationStatus value set. Possible values are: registered, preliminary, final, amended, corrected, cancelled, entered-in-error and unknown.</td>
    </tr>
    <tr>
      <td>RiskAssessment Subject<br/>
FHIR</td>
      <td>Identifies the patient, group or organization for whom the goal is being established.</td>
      <td>RiskAssessment &#8594; subject(Patient)</td>
      <td>RiskAssessment<br/>
...subject 1</td>
      <td>1) subject is required by FHIR, and is a reference to a Patient. (Optional prior to R4 version 3.4.0.)</td>
    </tr>
    <tr>
      <td>ServiceRequest Intent<br/>
FHIR</td>
      <td>Whether the request is a proposal, plan, an original order or a reflex order.</td>
      <td>ServiceRequest &#8594; intent</td>
      <td>ServiceRequest<br/>
...intent 1</td>
      <td>1) intent is required by FHIR, and must use the RequestIntent value set. Possible values are: proposal, plan, order, original-order, reflex-order, filler-order, instance-order and option.</td>
    </tr>
    <tr>
      <td>ServiceRequest Status<br/>
FHIR</td>
      <td>The status of the request.</td>
      <td>ServiceRequest &#8594; status</td>
      <td>ServiceRequest<br/>
...status 0..1</td>
      <td>1) status is required by FHIR, and must use the RequestStatus value set which has values: draft, active, suspended, completed, entered-in-error, and cancelled.</td>
    </tr>
    <tr>
      <td>ServiceRequest Subject<br/>
FHIR</td>
      <td>On whom or what the service is to be performed.</td>
      <td>ServiceRequest &#8594; subject(Patient)</td>
      <td>ServiceRequest<br/>
...subject 0..1</td>
      <td>1) subject is required by FHIR, and is a reference to a Patient.</td>
    </tr>
    <tr>
      <td/>
      <td/>
      <td/>
      <td/>
      <td/>
    </tr>
  </table>









A Care Plan is a consensus-driven dynamic plan that represents a patient’s and Care Team Members’ prioritized concerns, goals, and planned interventions. It serves as a blueprint shared by all Care Team Members (including the patient, their caregivers, and providers), to guide the patient’s care. A Care Plan integrates multiple interventions proposed by multiple providers and disciplines for multiple conditions. A Care Plan may represent one or more Care Plans and serves to reconcile and resolve conflicts between the various plans developed for a specific patient by different providers. It supports the following use cases:
 
* Query for patient data across providers and compile into a consolidated care plan representation.
* Encourage capture of and communication of a patient's health concerns and related goals, interventions, and outcomes.
* Gather and aggregate patient data for uses beyond the point of care (e.g. public health, population health, quality measurement, risk adjustment, quality improvement, and research.)

### Standards Supported Care Planning and Coordination Process

The vision of this implementation guide (IG), with the FHIR Care Plan profile as its framework,  is to define a profile on the FHIR Care Plan resource that describes how it can be implemented and leveraged to support machine assisted care coordination between systems. It is assumed that clinician and patient facing SMART on FHIR Apps can be designed off of this guide to achieve that goal. The IG will also inform EHR systems on how to implement a structured encoded Care Plan.

The dynamic care plan process diagram shows Care Plan Cornerstones as they exist within the clinical world and elements and attributes from the FHIR Care Plan resource structure that support the process. In order to encourage reuse and dynamic, machine assisted care coordination, the Care Plan profile design leverages referrencing profiles wherever possible, especially within CarePlan.Activity. 

#### High Level Dynamic Care Plan Process Diagram
<table><tr><td><img src="CarePlanProcessCornerstones.png" /></td></tr></table>

This profile on the [FHIR Care Plan Resource](http://hl7.org/fhir/R4/careplan.html) describes rules and contraints to record, search, and fetch care plan data associated with a patient with multiple chronic conditions. It identifies which profiles, core elements, extensions, vocabularies and value sets **SHALL** be present in the resource when using this profile. Care plan data may or may not be tagged in an EHR as part of a care plan, but is also useful to retrieve data such as goals, problems, medications etc. and their time stamps from EHRs and other health system records to bring into an aggegated plan. This includes care plans that may be authored by a patient.


#### Multiple Chronic Condition FHIR Care Plan Profile Relationship Diagram
<table><tr><td><img width="975px" height="975px" src="carePlanProfileRelationshipDiagram.svg" /></td></tr></table>

### Supporting Machine Assisted Dynamic Care Coordination/Planning with the FHIR Care Plan Resource and FHIR Goal Resource

The machine assisted dynamic care planning/coordination is supported in FHIR by leveraging together the Care Plan resource, the Goal resource, resource referencing and available extensions within those resources to “link together the health concern or problem, and it’s associated goals, interventions and outcomes. The intention is to re-use data entered in the EHR, whether it is in a Care Plan Application, or elsewhere in the EHR or other information system, rather than having a care plan be a double documentation burden. For example, if a procedure is ordered and performed and the health concern or problem reason for that procedure is asserted in the ordering workflow or documentation workflow - this information can be pulled into the Care Plan. If a goal is asserted for a patient outside of a care plan, along with the reason for that goal, this also can be pulled into a care plan. The Care Plan profile relies on referencing of profiles rather than “in-line” representation or documentation to enable a dynamic workflow and to be able to pull in and aggregate care coordination activities from disparate systems to provide a comprehensive care coordination view for patients

CarePlan.Activity" is a Backbone element.
It identifies an action that has occurred or is a planned action to occur as part of the plan. 
For example, a medication to be used, lab tests to perform, self-monitoring that has occurred, education etc., within which in R4 can be OutcomeCodeableConcept, OutcomeReference, Progress Note when using activity.reference. 
		
OUTCOME REFERENCE (aka PERFORMED ACTIVITY reference): to be renamed in R5 to "CarePlan.performedActivity". Please see https://jira.hl7.org/browse/FHIR-26064.) OutcomeReference is not only an outcome but rather an action such as Procedure or an Encounter that was made or occurred or an Observation. Within CarePlan.performedActivity, the extension, "resource-pertainsToGoal" **SHALL** be used to reference this activity's related goal. Within the resource referenced within performedActivity, "Procedure.reason" **SHALL** be used to reference the health concern or problem for which the activity is done.

ACTIVITY REFERENCE (aka PLANNED ACTIVITY reference): to be renamed in R5 to "PlannedActivityReference". Please see https://jira.hl7.org/browse/FHIR-26064.) Within plannedActivityReference, the extension, "resource-pertainsToGoal" **SHALL** be used to reference this activity's request's related goal. "xxx.Request.reason" **SHALL** be used to reference the health concern or problem for which the activity is done. Within the referenced Goal resource, goal.address **SHALL** be used to reference the goal's related Condition, Observation, MedicationStatement, NutritionOrder, ServiceRequest or RiskAssessment. Within the referenced Goal resource, Goal.outcomeReference, references the outcome (e.g observations related to the goal).


**Health Concerns** represented with:

 - CarePlan.addresses
 - CarePlan.suppportingInfo
 - CarePlan.addresses (from within referenced goal)
 - Goal.addresses
 - activity.reason.reference

**Goals** represented with:
 - CarePlan.goal (for entire plan)
 - resource-pertainsToGoal
 - CarePlan.activity.outcomeReference.MCC Goal Profile

**Interventions** represented with:

 - CarePlan.plannedActivityReference (aka activity.reference)
 - CarePlan.performedActivityReference (aka activity.outcome.reference)

**Outcomes** represented with:

 - CarePlan.ActivityOutcome
 - Goal.outcome.reference

#### Instanciated FHIR Supported Dynamic Care Planning and Coordination
<table><tr><td><img src="InstanciatedFHIRSuppportedDynamicCarePlanning.png" /></td></tr></table>

---

// File: input/pagecontent/examples.md


*You can find data instance examples for Resources used in eLTSS here: *
 - [examples where data elements are in profiles in the IG](artifacts.html#example-example-instances)
 - [examples where the data elements are not in the IG profiles](artifacts.html#other)
 - [bundle of example instances](Bundle-2039212f3fa5406bb4ffd4a.html)
 
The data instances work together as a single example. Start with the CarePlan and follow the references.


We plan to continue to refine examples with feedback from an ongoing pilot. The intent is to create examples that are accurate and comprehensive enough to be instructive during development and useful for testing server/client capability.

An example story-line:

1. Henry has an annual ISP meeting with Stacy, his service coordinator. Stacy updates Henry’s care plan in the state’s case management system (ConneXion) to reflect his employment goals and reviews current health information. 
1. Once that has been identified, Stacy emails/calls the selected service provider, Job Avenue Specialists to refer Henry for supported employment services and Henry gets assigned to John Gomez, an Employment Consultant.
1. There are a few administrative steps to finalize this referral, but eventually Stacy notifies Henry and John about the approval of services. John Gomez creates a demographic profile of Henry in the supported employment IT system to track client information and meets with Henry.
1. Stacy also coordinates with Henry’s primary care provider to help inform the career planning and pre-vocational services. Dr. Smith’s primary care team looks up Henry’s health information in their Electronic Health Record system which integrates data from the Health Information Exchange System to understand his health record and sees his updated eLTSS care plan.
1. During the primary care visit, Dr. Smith chats with Henry and his caregiver about his potential job offer and conducts a physical. She discusses with Henry given his asthma and seasonal allergies, a position outdoors is not the best fit and suggests that he pursues a position indoors. She also sees that a goal in Henry’s eLTSS plan is to eat healthier and discusses a meal plan that includes healthy snacks, nutritious breakfast and lunch options to have steady energy on the job.
1. When the visit is done, Dr. Smith updates the Electronic Health Record system she uses to reflect Henry’s visit summary and that he is in good physical health. Dr. Smith tells the StationMD care coordinator to call Stacy to share the recommendation that Henry does not pursue a position outdoors given his health history.
1. After the discovery interviews, John schedules and takes Henry to informational interviews and Henry job shadows at Home Depot (Garden Tools Department) and Walmart (Sporting Goods Section).
1. Henry is placed at Home Depot’s Garden Tools Department.
1. At Henry’s next ISP plan monitoring review with Stacy and John, he shares that he really enjoys his job at Home Depot and has been able to buy two new fishing rods.
1. He looks forward to continuing his work and saving up money to buy a TV. Stacy updates Henry’s ISP in the state’s case management system (FEI) to reflect attainment/tracking of his employment goals. 

<table><tr><td><img src="exampleHenry.png" /></td></tr></table>

---

// File: input/fsh/aliases.fsh

Alias: $resource-pertainsToGoal = http://hl7.org/fhir/StructureDefinition/resource-pertainsToGoal
Alias: $condition-category = http://hl7.org/fhir/us/core/CodeSystem/condition-category
Alias: $careplan-category = http://hl7.org/fhir/us/core/CodeSystem/careplan-category
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $0131 = http://terminology.hl7.org/fhir/v2/0131
Alias: $RoleCode = http://terminology.hl7.org/fhir/v3/RoleCode
Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $condition-ver-status = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $sct = http://snomed.info/sct
Alias: $lnc = http://loinc.org
Alias: $nct = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl
Alias: $ucum = http://unitsofmeasure.org

Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode

Alias: $eltss-observation-code = eltss-observation-codes-temporary


Alias: $contractsignertypecodes = http://terminology.hl7.org/CodeSystem/contractsignertypecodes
Alias: $claim-type = http://terminology.hl7.org/CodeSystem/claim-type
Alias: $processpriority = http://terminology.hl7.org/CodeSystem/processpriority
Alias: $ex-USCLS = http://terminology.hl7.org/CodeSystem/ex-USCLS
Alias: $v2-0131 = http://terminology.hl7.org/CodeSystem/v2-0131
Alias: $us-core-careplan = http://hl7.org/fhir/us/core/StructureDefinition/us-core-careplan

//Alias: $us-core-condition = http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition
Alias: $us-core-condition = http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition-problems-health-concerns

Alias: $us-core-relatedperson = http://hl7.org/fhir/us/core/StructureDefinition/us-core-relatedperson
Alias: $us-core-servicerequest = http://hl7.org/fhir/us/core/StructureDefinition/us-core-servicerequest
Alias: $us-core-questionnaireresponse = http://hl7.org/fhir/us/core/StructureDefinition/us-core-questionnaireresponse
Alias: $us-core-simple-observation = http://hl7.org/fhir/us/core/StructureDefinition/us-core-simple-observation

Alias: $sdc-questionnaire = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire

Alias: $us-core-goal = http://hl7.org/fhir/us/core/StructureDefinition/us-core-goal
Alias: $us-core-location = http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
Alias: $us-core-patient = http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
Alias: $us-core-practitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias: $us-core-practitionerrole = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole
Alias: $us-core-organization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias: $us-core-careteam = http://hl7.org/fhir/us/core/StructureDefinition/us-core-careteam
Alias: $us-core-device = http://hl7.org/fhir/us/core/StructureDefinition/us-core-implantable-device
// Alias: $us-core-device = us core device not in 3.1.1 http://hl7.org/fhir/us/core/StructureDefinition/us-core-device
Alias: $us-core-encounter = http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter
Alias: $us-core-documentreference = http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference
Alias: $us-core-diagnosticreport-note = http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note
Alias: $provider-taxonomy = http://nucc.org/provider-taxonomy
Alias: $endpoint-connection-type = http://terminology.hl7.org/CodeSystem/endpoint-connection-type

Alias: $condition-assertedDate = http://hl7.org/fhir/StructureDefinition/condition-assertedDate

Alias: $condition-clinical-values = http://hl7.org/fhir/ValueSet/condition-clinical
Alias: $condition-ver-status-values = http://hl7.org/fhir/ValueSet/condition-ver-status
Alias: $us-core-problem-or-health-concern = http://hl7.org/fhir/us/core/ValueSet/us-core-problem-or-health-concern
Alias: $us-core-screening-assessment-condition-category = http://hl7.org/fhir/us/core/ValueSet/us-core-screening-assessment-condition-category
Alias: $us-core-condition-code = http://hl7.org/fhir/us/core/ValueSet/us-core-condition-code
Alias: $us-core-category = http://hl7.org/fhir/us/core/CodeSystem/us-core-category

---

// File: input/fsh/codesystems/ELTSS_Condition_Category_Codes.fsh

CodeSystem: ELTSS_Condition_Category_Codes
Id: eltss-condition-category-code
Title: "eLTSS Condition Category Codes"
Description: "Additional code for Assessed Need for Condition Category element"
* ^status = #draft
* ^experimental = true
* ^caseSensitive = true
* ^date = "2019-09-12T13:05:35-04:00"
* ^content = #complete
* #assessed-need "Assessed Need" "The clinical and/or community-based necessity or desire as identified through an assessment that should be addressed by a service."

---

// File: input/fsh/codesystems/ELTSS_Observation_Codes.fsh

CodeSystem: ELTSS_Observation_Codes_temporary
Id: eltss-observation-codes-temporary
Title: "eLTSS Observation Codes"
//Description: "Observation codes for Strength and Preference"
Description: "Observation codes for Strength"
* ^status = #draft
* ^experimental = true
* ^caseSensitive = true
* ^date = "2019-09-12T13:05:35-04:00"
* ^content = #complete
* #strength "Strength" "A favorable attribute of oneself, his/her support network, environment and/or elements of his/her life."
//* #preference "Preference" "Presents the person's personal thoughts about something he or she feels is relevant to his or her life experience and may be pertinent when planning."
//364665006 | Ability to perform function / activity (observable entity) |

//* $sct#248536006 "Finding of functional performance and activity (finding)"
//* $lnc#95541-9 "Care experience preference"
//* $sct#225773000 "Preferences (qualifier value)"

---

// File: input/fsh/extensions/Eltss_directedBy.fsh

Extension: Eltss_directedBy
Id: eltss-directedBy
Description: "Indicates whether the individual chose to self-direct the service."
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2019-02-17T00:00:00-05:00"
* ^publisher = "HL7 CBCP"
* ^context.type = #element
* ^context.expression = "ServiceRequest"
//* . ..1
* . ^short = "Self-Directed Service Indicator"
* . ^definition = "Indicates whether the individual chose to  self-direct the service."
* . ^comment = "Can be populated with the value \"self\" to indicate that this service is self-directed. This is in addition to the author and owner fields."
* . ^isModifier = false
* url only uri
* value[x] only CodeableConcept

---

// File: input/fsh/extensions/RiskPlan.fsh

//eltss data set element Risk Management Plan	
Extension: RiskPlan
Id: eltss-RiskPlan
Description: "Risk Management Plan eLTSS data set element"
* ^version = "1.0.0"
* ^status = #active
* ^date = "2019-09-12T13:05:35-04:00"
* ^context.type = #element
* ^context.expression = "RiskAssessment"
//* obeys ext-1
//* . ^short = "Optional Extensions Element"
//* . ^definition = "Optional Extension Element - found in all resources."
* value[x] 1..
* value[x] only Reference($us-core-documentreference)

---

// File: input/fsh/instances/operationDraftingeLTSS.fsh

Alias: $m49.htm = http://unstats.un.org/unsd/methods/m49/m49.htm

//Use example URL: [base]/CarePlan/[id]/$all-eltss-careplan

Instance: all-eltss-careplan
InstanceOf: OperationDefinition
Usage: #definition
* name = "AllEltssCareplan"
* title = "All Eltss Careplan"
* status = #draft
* kind = #operation
* experimental = true
//* date = "2023-07-25T14:43:25+00:00"

* description = "Provide all eLTSS data for a given Patient's CarePlan. Given a CarePlan with a specific Patient and ID, this operation will return all the referenced artifacts necessary to satisfy the eLTSS data element set found in the DAM. The Operation reduces the number of queries that a client must make. This operation definition is in draft and should be revised in subsequent versions of this IG. The parameter here is a single output parameter named return. This means that the expectation is that a single Bundle Resource will be returned. The type for the bundle can be collection."
* jurisdiction = $m49.htm#001 "World"
* code = #all-eltss-careplan
* comment = "Use example URL: [base]/CarePlan/[id]/$all-eltss-careplan \n Resources which should be returned:
\nCarePlan         \nPractitioner         \nObservation         \nRiskAssessment         \nHealthcareService         \nOrganization         \nCoverage         \nClaim                 \nContract                \nTask         \nServiceRequest         \nPatient         \nGoal         \nCondition         \nCareTeam         \nEncounter         \nEpisodeOfCare         \nLocation  \nQuestionnaireResponse                \nQuestionnaire                \nRelatedPerson         \nPractitionerRole                \n  \n \nExample Request Parameters that this Operation is to perform as one action: \n \nCarePlan?_id=68 \n&_include=CarePlan%3Aactivity-reference \n \n&_include=CarePlan%3Acare-team \n \n&_include=CarePlan%3Acondition \n \n&_include=CarePlan%3Aencounter \n \n&_include=CarePlan%3Agoal \n \n&_include=CarePlan%3Aperformer \n \n&_include=CarePlan%3Asubject \n \n&_profile=http%3A%2F%2Fhl7.org%2Ffhir%2Fus%2FeLTSS%2FStructureDefinition%2FCarePlan-eltss \n \nFollowed by individual requests for: \n \nPractitioner?_id=80827658-9560-4ed5-8ff6-0cc93de6214d            \nObservation?_id=28291 \nObservation?_id=28303 \nObservation?_id=28304 \nRiskAssessment?_id=28357         \nRiskAssessment?_id=28358         \nHealthcareService?_id=28364    \nHealthcareService?_id=28289    \nHealthcareService?_id=28359    \nOrganization?_id=28295               \nHealthcareService?_id=28414    \nCoverage?_id=28366&_include=Coverage%3Apayor        \nCoverage?_id=28361&_include=Coverage%3Apayor        \nCoverage?_id=28297&_include=Coverage%3Apayor        \nClaim?_id=28367              Claim?_id=28362              \nClaim?_id=28298              \nPatient?_id=CMS2023-patientBSJ1 \n"

* affectsState = false
* resource = #CarePlan
* system = false
* type = false
* instance = true

* parameter[0].name = #return
* parameter[=].documentation = "eLTSS data will come as a FHIR bundle."
* parameter[=].use = #out
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "The Server may wish to enable paging of the output for large bundles."
* parameter[=].type = #Bundle


---

// File: input/fsh/invariants/ext-1.fsh

Invariant: ext-1
Description: "Must have either extensions or value[x], not both"
Severity: #error
Expression: "extension.exists() != value.exists()"
XPath: "exists(f:extension)!=exists(f:*[starts-with(local-name(.), 'value')])"

---

// File: input/fsh/mappings/argonaut-dq-dstu2-for-CarePlan_eltss.fsh

Mapping: argonaut-dq-dstu2-for-CarePlan_eltss
Id: argonaut-dq-dstu2
Title: "Argonaut-DQ-DSTU2"
Source: CarePlan_eltss
Target: "http://unknown.org/Argonaut-DQ-DSTU2"

---

// File: input/fsh/mappings/argonaut-dq-dstu2-for-Condition_eltss.fsh

Mapping: argonaut-dq-dstu2-for-Condition_eltss
Id: argonaut-dq-dstu2
Title: "Argonaut-DQ-DSTU2"
Source: Condition_eltss
Target: "http://unknown.org/Argonaut-DQ-DSTU2"

---

// File: input/fsh/mappings/argonaut-dq-dstu2-for-Goal_eltss.fsh

Mapping: argonaut-dq-dstu2-for-Goal_eltss
Id: argonaut-dq-dstu2
Title: "Argonaut-DQ-DSTU2"
Source: Goal_eltss
Target: "http://unknown.org/Argonaut-DQ-DSTU2"

---

// File: input/fsh/mappings/argonaut-dq-dstu2-for-Patient_eltss.fsh

Mapping: argonaut-dq-dstu2-for-Patient_eltss
Id: argonaut-dq-dstu2
Title: "Argonaut-DQ-DSTU2"
Source: Patient_eltss
Target: "http://unknown.org/Argonaut-DQ-DSTU2"

---

// File: input/fsh/mappings/cda.fsh

Mapping: cda
Id: cda
Title: "CDA (R2)"
Source: Patient_eltss
Target: "http://hl7.org/v3/cda"

---

// File: input/fsh/mappings/loinc.fsh

Mapping: loinc
Id: loinc
Title: "LOINC code for the element"
Source: Patient_eltss
Target: "http://loinc.org"

---

// File: input/fsh/mappings/rim-for-CarePlan_eltss.fsh

Mapping: rim-for-CarePlan_eltss
Id: rim
Title: "RIM Mapping"
Source: CarePlan_eltss
Target: "http://hl7.org/v3"

---

// File: input/fsh/mappings/rim-for-Condition_eltss.fsh

Mapping: rim-for-Condition_eltss
Id: rim
Title: "RIM Mapping"
Source: Condition_eltss
Target: "http://hl7.org/v3"

---

// File: input/fsh/mappings/rim-for-Goal_eltss.fsh

Mapping: rim-for-Goal_eltss
Id: rim
Title: "RIM Mapping"
Source: Goal_eltss
Target: "http://hl7.org/v3"

---

// File: input/fsh/mappings/rim-for-Location_eltss.fsh

Mapping: rim-for-Location_eltss
Id: rim
Title: "RIM Mapping"
Source: Location_eltss
Target: "http://hl7.org/v3"

---

// File: input/fsh/mappings/rim-for-Patient_eltss.fsh

Mapping: rim-for-Patient_eltss
Id: rim
Title: "RIM Mapping"
Source: Patient_eltss
Target: "http://hl7.org/v3"

---

// File: input/fsh/mappings/rim-for-Practitioner_eltss.fsh

Mapping: rim-for-Practitioner_eltss
Id: rim
Title: "RIM Mapping"
Source: Practitioner_eltss
Target: "http://hl7.org/v3"

---

// File: input/fsh/mappings/sct-attr.fsh

Mapping: sct-attr
Id: sct-attr
Title: "SNOMED CT Attribute Binding"
Source: Condition_eltss
Target: "http://snomed.org/attributebinding"

---

// File: input/fsh/mappings/sct-concept.fsh

Mapping: sct-concept
Id: sct-concept
Title: "SNOMED CT Concept Domain Binding"
Source: Condition_eltss
Target: "http://snomed.info/conceptdomain"

---

// File: input/fsh/mappings/servd-for-Location_eltss.fsh

Mapping: servd-for-Location_eltss
Id: servd
Title: "ServD"
Source: Location_eltss
Target: "http://www.omg.org/spec/ServD/1.0/"

---

// File: input/fsh/mappings/servd-for-Practitioner_eltss.fsh

Mapping: servd-for-Practitioner_eltss
Id: servd
Title: "ServD"
Source: Practitioner_eltss
Target: "http://www.omg.org/spec/ServD/1.0/"

---

// File: input/fsh/mappings/v2-for-CarePlan_eltss.fsh

Mapping: v2-for-CarePlan_eltss
Id: v2
Title: "HL7 v2 Mapping"
Source: CarePlan_eltss
Target: "http://hl7.org/v2"

---

// File: input/fsh/mappings/v2-for-Condition_eltss.fsh

Mapping: v2-for-Condition_eltss
Id: v2
Title: "HL7 v2 Mapping"
Source: Condition_eltss
Target: "http://hl7.org/v2"

---

// File: input/fsh/mappings/v2-for-Goal_eltss.fsh

Mapping: v2-for-Goal_eltss
Id: v2
Title: "HL7 v2 Mapping"
Source: Goal_eltss
Target: "http://hl7.org/v2"

---

// File: input/fsh/mappings/v2-for-Patient_eltss.fsh

Mapping: v2-for-Patient_eltss
Id: v2
Title: "HL7 v2 Mapping"
Source: Patient_eltss
Target: "http://hl7.org/v2"

---

// File: input/fsh/mappings/v2-for-Practitioner_eltss.fsh

Mapping: v2-for-Practitioner_eltss
Id: v2
Title: "HL7 v2 Mapping"
Source: Practitioner_eltss
Target: "http://hl7.org/v2"

---

// File: input/fsh/mappings/w5-for-CarePlan_eltss.fsh

Mapping: w5-for-CarePlan_eltss
Id: w5
Title: "FiveWs Pattern Mapping"
Source: CarePlan_eltss
Target: "http://hl7.org/fhir/fivews"

---

// File: input/fsh/mappings/w5-for-Condition_eltss.fsh

Mapping: w5-for-Condition_eltss
Id: w5
Title: "FiveWs Pattern Mapping"
Source: Condition_eltss
Target: "http://hl7.org/fhir/fivews"

---

// File: input/fsh/mappings/w5-for-Goal_eltss.fsh

Mapping: w5-for-Goal_eltss
Id: w5
Title: "FiveWs Pattern Mapping"
Source: Goal_eltss
Target: "http://hl7.org/fhir/fivews"

---

// File: input/fsh/mappings/w5-for-Location_eltss.fsh

Mapping: w5-for-Location_eltss
Id: w5
Title: "FiveWs Pattern Mapping"
Source: Location_eltss
Target: "http://hl7.org/fhir/fivews"

---

// File: input/fsh/mappings/w5-for-Patient_eltss.fsh

Mapping: w5-for-Patient_eltss
Id: w5
Title: "FiveWs Pattern Mapping"
Source: Patient_eltss
Target: "http://hl7.org/fhir/fivews"

---

// File: input/fsh/mappings/w5-for-Practitioner_eltss.fsh

Mapping: w5-for-Practitioner_eltss
Id: w5
Title: "FiveWs Pattern Mapping"
Source: Practitioner_eltss
Target: "http://hl7.org/fhir/fivews"

---

// File: input/fsh/mappings/workflow-for-CarePlan_eltss.fsh

Mapping: workflow-for-CarePlan_eltss
Id: workflow
Title: "Workflow Pattern"
Source: CarePlan_eltss
Target: "http://hl7.org/fhir/workflow"

---

// File: input/fsh/mappings/workflow-for-Condition_eltss.fsh

Mapping: workflow-for-Condition_eltss
Id: workflow
Title: "Workflow Pattern"
Source: Condition_eltss
Target: "http://hl7.org/fhir/workflow"

---

// File: input/fsh/profiles/CarePlan_eltss.fsh

Profile: CarePlan_eltss
Parent: $us-core-careplan
Id: CarePlan-eltss
Description: "CarePlan for eLTSS"
* ^status = #active
* ^experimental = false
* ^date = "2019-06-01T01:00:00-04:00"
* ^publisher = "HL7 CBCP"
* . ^short = "eLTSS Healthcare plan for patient or group"

* basedOn only Reference(CarePlan_eltss)
* basedOn ^type.extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-hierarchy"
* basedOn ^type.extension.valueBoolean = true

* replaces only Reference(CarePlan_eltss)
* replaces ^type.extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-hierarchy"
* replaces ^type.extension.valueBoolean = true


* partOf only Reference(CarePlan_eltss)
* partOf ^short = "Emergency Backup Plan"
* partOf ^definition = "Description of how to address unforeseen events, emergency health events, emergency events, problems with medical equipment and supplies, and unavailable staffing situations for critical services that put the person’s health and safety at risk.\n\nThis can be included as free text or attachment."
* partOf ^comment = "The CarePlan resource containing the emergency backup plan refers to the \"main\" CarePlan resource, rather than the other way around, by using the emergency backup plan CarePlan -> partOf data element to reference the \"main\" CarePlan data element."
* partOf ^type.extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-hierarchy"
* partOf ^type.extension.valueBoolean = true
* partOf ^mustSupport = true

* subject only Reference(Patient_eltss)
* subject ^short = "CarePlan Subject"
* subject ^definition = "Referencing the Person from CarePlan."
* subject ^comment = "Reference the Patient for the care plan being developed."
* encounter MS
* period MS
* period ^short = "Plan Effective Date"
* period ^definition = "The date upon which the plan goes into effect. Start date is required, end date is optional."

* period.start 1..1 MS
* period.end 0..1 MS
* author MS
* author only Reference(Patient_eltss or Practitioner_eltss or PractitionerRole_eltss or RelatedPerson_eltss or $us-core-organization or $us-core-careteam)
* author ^short = "Support Planner"
* author ^definition = "The  person (e.g., Case Manager, Care Coordinator, Plan Coordinator) who helped develop the plan."
* author ^comment = "Support Planner Name + Phone."
* author ^type.targetProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* author ^type.targetProfile[=].extension.valueBoolean = false
* author ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* author ^type.targetProfile[=].extension.valueBoolean = true
* author ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* author ^type.targetProfile[=].extension.valueBoolean = true
* author ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* author ^type.targetProfile[=].extension.valueBoolean = false
* author ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* author ^type.targetProfile[=].extension.valueBoolean = false
* author ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* author ^type.targetProfile[=].extension.valueBoolean = false


* contributor only Reference(Patient_eltss or Practitioner_eltss or PractitionerRole_eltss or RelatedPerson_eltss or $us-core-organization or $us-core-careteam)

* addresses only Reference(Condition_eltss)
* addresses MS
* addresses ^short = "Assessed Need"
* addresses ^definition = "The clinical and/or community-based necessity or desire as identified through an assessment that should be addressed by a service."
* addresses ^comment = "Each assessed need should go into a separate Condition element so each can potentially be linked to a service(s) that addresses it."

* supportingInfo ^definition = "Identifies portions of the patient's record that  specifically influenced the formation of the plan.  These might include comorbidities, recent procedures, limitations, recent assessments, etc.  This includes the RiskAssessment/Risk Management Plan"
* goal only Reference(Goal_eltss)
* goal ^mustSupport = true

* supportingInfo MS
* activity ^short = "Action to occur as part of a plan"
* activity ^definition = "A planned measurable step or action that needs to be taken to accomplish a goal identified by the person."
* activity ^comment = "Note that a stated goal may lead directly to a service, and not necessarily to an explicit Step or Action. For example, a person's goal could be to attend church regularly, and this would be achieved through a transportation service."
* activity ^mustSupport = true

* activity.reference MS
* activity.reference only Reference(Appointment or CommunicationRequest or DeviceRequest or MedicationRequest or NutritionOrder or Task or ServiceRequest_eltss or VisionPrescription or RequestGroup)
* activity.reference ^type.targetProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* activity.reference ^type.targetProfile[=].extension.valueBoolean = true
* activity.reference ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* activity.reference ^type.targetProfile[=].extension.valueBoolean = false
* activity.reference ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* activity.reference ^type.targetProfile[=].extension.valueBoolean = false
* activity.reference ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* activity.reference ^type.targetProfile[=].extension.valueBoolean = false
* activity.reference ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* activity.reference ^type.targetProfile[=].extension.valueBoolean = false
* activity.reference ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* activity.reference ^type.targetProfile[=].extension.valueBoolean = true
* activity.reference ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* activity.reference ^type.targetProfile[=].extension.valueBoolean = true
* activity.reference ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* activity.reference ^type.targetProfile[=].extension.valueBoolean = false
* activity.reference ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* activity.reference ^type.targetProfile[=].extension.valueBoolean = false
* activity.detail 0..0
* note MS

---

// File: input/fsh/profiles/Claim_eltss.fsh

Profile: Claim_eltss
Parent: Claim
Id: Claim-eltss
Description: "Claim Resource profile for eLTSS"
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2019-02-17T00:00:00-05:00"
* ^publisher = "HL7 CBCP"
* . ^comment = "The eLTSS Claim resource profile fulfills three information request requirements: Claim - a request for adjudication for reimbursement for products and/or services provided; Preauthorization - a request to authorize the future provision of products and/or services including an anticipated adjudication; and, Predetermination - a request for a non-bind adjudication of possible future products and/or services."

* extension ^label = "Label"
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains
    $resource-pertainsToGoal named resource-pertainsToGoal 0..* MS
* extension[resource-pertainsToGoal] ^short = "The resource-pertainsToGoal relates the resource to the goal(s) that pertain to it. Whenever there is a goal associated with a health concern or problem, this extension should be present and populated in activity (event or intent) resources."


* patient only Reference(Patient_eltss)
* enterer only Reference(Practitioner_eltss or PractitionerRole_eltss)
* provider only Reference(Practitioner_eltss or PractitionerRole_eltss or $us-core-organization)
* related.claim only Reference(Claim_eltss)
* payee.party only Reference(Practitioner_eltss or PractitionerRole_eltss or $us-core-organization or Patient_eltss or RelatedPerson_eltss)
* referral only Reference(ServiceRequest_eltss)
* facility only Reference(Location_eltss)
* careTeam.provider only Reference(Practitioner_eltss or PractitionerRole_eltss or $us-core-organization)
* diagnosis.diagnosisReference[diagnosisReference] only Reference(Condition_eltss)
* diagnosis.diagnosisReference[diagnosisReference] ^sliceName = "diagnosisReference"
* accident.locationReference[locationReference] only Reference(Location_eltss)
* accident.locationReference[locationReference] ^sliceName = "locationReference"
* item MS
* item ^definition = "A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details provided."
* item.unitPrice MS
* item.unitPrice ^short = "Service Rate per Unit name"
* item.unitPrice ^definition = "The rate of one unit for a service."

* item.net MS
* item.net ^short = "Total Cost of Service"
* item.net ^definition = "The total cost of a service for the plan."


---

// File: input/fsh/profiles/Condition_eltss.fsh

Profile: Condition_eltss
Parent: $us-core-condition
Id: Condition-eltss
Description: "Condition for eLTSS"
* ^status = #active
* ^experimental = false
* ^date = "2019-02-17T00:00:00-05:00"
* ^publisher = "HL7 CBCP"
* . ^definition = "The eLTSS Condition Profile is based upon the US Core FHIR Condition Resource and created to meet the 2015 Edition Common Clinical Data Set 'Problems' and 'Health Concerns' requirements."
* extension ^slicing.discriminator[0].type = #value
* extension ^slicing.discriminator[=].path = "url"
* extension ^slicing.rules = #open
//* extension contains $resource-pertainsToGoal named resource-pertainsToGoal 0..* MS and ELTSS_dueTo named dueTo 0..*
//* extension[resource-pertainsToGoal] ^short = "The resource-pertainsToGoal relates the resource to the goal(s) that pertain to it. Whenever there is a goal associated with a health concern or problem, this extension should be present and populated in activity (event or intent) resources."
* extension contains http://hl7.org/fhir/StructureDefinition/condition-dueTo named dueTo 0..*
* extension[dueTo] ^sliceIsConstraining = false

//* extension contains $condition-assertedDate named assertedDate 0..1 MS
//* extension[assertedDate] ^short = "Date the condition was first asserted"

* clinicalStatus MS
* clinicalStatus from $condition-clinical-values (required)
* verificationStatus MS
* verificationStatus from $condition-ver-status-values (required)

* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
//* category ^code.system = "http://hl7.org/fhir/us/eltss/ValueSet/eltss-condition-category-code"

* category contains assessed-need 0..1 MS
* category[assessed-need] = eltss-condition-category-code#assessed-need
* category[assessed-need] ^short = "Assessed Need Category"
* category[assessed-need] ^definition = "Assessed Need Category Code indicates the clinical and/or community-based necessity or desire as identified through an assessment that should be addressed by a service. Consider also using the US Core 6.1.0 screening-assessment categories  https://www.hl7.org/fhir/us/core/ValueSet-us-core-screening-assessment-condition-category.html"
* category[assessed-need] ^requirements = "Assessed Need Category Code"
//* category ^comment = "Could use the value \"problem-list-item\" to indicate the underlying condition, and extend the value set to add the value \"assessed-need\"."
* code ^short = "Assessed Need Code"
* code ^definition = "The clinical and/or community-based necessity or desire as identified byan assessment that should be addressed by a service."
* code.coding MS
* code.coding.code MS
* code.coding.system MS
* subject only Reference(Patient_eltss)
* recorder only Reference(Practitioner_eltss or PractitionerRole_eltss or Patient_eltss or RelatedPerson_eltss)
* asserter only Reference(Practitioner_eltss or PractitionerRole_eltss or Patient_eltss or RelatedPerson_eltss)
* stage.assessment only Reference(Observation_eltss or ClinicalImpression or DiagnosticReport)
* onset[x] only dateTime or Age or Period or Range or string
* onset[x] MS
* onset[x] ^type.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* onset[x] ^type.extension.valueBoolean = true
* abatement[x] only dateTime or Age or Period or Range or string
* abatement[x] MS
* abatement[x] ^type.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* abatement[x] ^type.extension.valueBoolean = true
* recordedDate MS






---

// File: input/fsh/profiles/Contract_eltss.fsh

Profile: Contract_eltss
Parent: Contract
Id: Contract-eltss
Description: "Contract for eLTSS"
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2019-02-17T00:00:00-05:00"
* ^publisher = "HL7 CBCP"
* . ^definition = "A legally enforceable, formally recorded unilateral or bilateral directive (i.e., a policy or agreement)."
* . ^mustSupport = false

* extension ^slicing.discriminator.type = #type
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains $resource-pertainsToGoal named resource-pertainsToGoal 0..* MS
* extension[resource-pertainsToGoal] ^short = "The resource-pertainsToGoal relates the resource to the goal(s) that pertain to it. Whenever there is a goal associated with a health concern or problem, this extension should be present and populated in activity (event or intent) resources."

* instantiatesCanonical only Reference(Contract_eltss)
* domain only Reference(Location_eltss)
* site only Reference(Location_eltss)
* author only Reference(Patient_eltss or Practitioner_eltss or PractitionerRole_eltss or $us-core-organization)
* contentDefinition.publisher only Reference(Practitioner_eltss or PractitionerRole_eltss or $us-core-organization)
* term ^definition = "One or more Contract Provisions which may be related and conveyed as a group and may contain nested groups."
* term.offer ^definition = "The matter of concern in the context of this agreement provision."
* term.offer.party ^definition = "Recipient of the Offer"
* term.offer.party.reference only Reference(Patient_eltss or Practitioner_eltss or PractitionerRole_eltss or Group or $us-core-organization)
* term.asset.valuedItem.responsible only Reference(Patient_eltss or Practitioner_eltss or PractitionerRole_eltss or RelatedPerson_eltss or $us-core-organization)
* term.asset.valuedItem.recipient only Reference(Patient_eltss or Practitioner_eltss or PractitionerRole_eltss or RelatedPerson_eltss or $us-core-organization)
* term.action.subject ^definition = "Entity of the action to be performed."
* term.action.subject.reference only Reference(Patient_eltss or Practitioner_eltss or PractitionerRole_eltss or Group or $us-core-organization)
* term.action.context only Reference(EpisodeOfCare_eltss or $us-core-encounter)
* term.action.requester only Reference(Patient_eltss or Practitioner_eltss or PractitionerRole_eltss or Group or $us-core-organization)
* term.action.performer only Reference(Patient_eltss or Practitioner_eltss or PractitionerRole_eltss or $us-core-organization)
* term.action.reasonReference only Reference(Condition_eltss or Observation_eltss or Questionnaire_eltss or $us-core-documentreference or DiagnosticReport or QuestionnaireResponse)
* signer MS
* signer ^short = "Person, Guardian / Legal Representative, Support Planner, or Service Provider Signature"
* signer ^definition = "Person, Guardian / Legal Representative, Support Planner, or Service Provider Signature"
* signer ^comment = "FHIR includes a preferred coding for contract signatory roles, which map well to the eLTSS signatories. The primary one for the patient/beneficiary is \"PAT\" (patient), although implementers may use others as well. However, implementers must realize that type may be used to differentiate between the patient, service provider, planner, etc. so there need to be distinct role types utilized."

* signer.type MS
* signer.type ^comment = "Would probably use \"CONSENTER\" which represents \"consent signature\" in this use case."
* signer.party MS
* signer.party only Reference(Patient_eltss or Practitioner_eltss or PractitionerRole_eltss or RelatedPerson_eltss or $us-core-organization)
* signer.party ^short = "Person, Guardian / Legal Representative, Support Planner, or Service Provider Printed Name"
* signer.party ^definition = "Person, Guardian / Legal Representative, Support Planner, or Service Provider Printed Name"
* signer.party ^comment = "Must match signature.who."
* signer.signature MS
* signer.signature ^definition = "Legally binding Contract DSIG signature contents encoded in Base64."
* signer.signature.type MS
* signer.signature.type ^comment = "Would probably use \"1.2.840.10065.1.12.1.7\" which represents \"consent signature\" in this use case."
* signer.signature.when MS
* signer.signature.when ^short = "Person, Guardian / Legal Representative, Support Planner, or Service Provider Signature Date"
* signer.signature.when ^definition = "Person, Guardian / Legal Representative, Support Planner, or Service Provider Signature Date"
* signer.signature.who MS
* signer.signature.who only Reference(PractitionerRole_eltss or RelatedPerson_eltss or $us-core-organization or Practitioner_eltss or Patient_eltss)
* signer.signature.who ^short = "Person, Guardian/Legal Representative, Support Planner, or Service Provider Printed Name"
* signer.signature.who ^definition = "Person, Guardian / Legal Representative, Support Planner, or Service Provider Signature"
* signer.signature.who ^comment = "Must match signer.party."
* signer.signature.data MS
* rule ^definition = "List of Computable Policy Rule Language Representation(s) of this Contract."
* rule.content[x] ^short = "Computable Contract Rule(s)"

---

// File: input/fsh/profiles/EpisodeOfCare_eltss.fsh

Profile: EpisodeOfCare_eltss
Parent: EpisodeOfCare
Id: EpisodeOfCare-eltss
Description: "EpisodeOfCare for eLTSS"
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2019-02-17T00:00:00-05:00"
* ^publisher = "HL7 CBCP"
* . ^short = "An association of a Patient with an Organization and Healthcare Provider(s) for a period of time that the Organization assumes some level of responsibility"


* extension ^label = "Label"
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains
    $resource-pertainsToGoal named resource-pertainsToGoal 0..* MS
* extension[resource-pertainsToGoal] ^short = "The resource-pertainsToGoal relates the resource to the goal(s) that pertain to it. Whenever there is a goal associated with a health concern or problem, this extension should be present and populated in activity (event or intent) resources."


* patient only Reference(Patient_eltss)
* referralRequest only Reference(ServiceRequest_eltss)
* careManager MS
* careManager only Reference(Practitioner_eltss)
* careManager ^short = "Plan Monitor"
* careManager ^definition = "The person responsible for monitoring the plan."

---

// File: input/fsh/profiles/Goal_eltss.fsh

Profile: Goal_eltss
Parent: $us-core-goal
Id: Goal-eltss
Description: "Goal resource mapping for eLTSS"
* ^status = #active
* ^experimental = false
* ^date = "2019-02-17T00:00:00-05:00"
* ^publisher = "HL7 CBCP"
* . ^definition = "The eLTSS Goal Profile is based upon the US Core FHIR Goal Resource and created to meet the 2015 Edition Common Clinical Data Set 'Goals' requirements."

* description ^short = "Goal"
* description ^definition = "A statement of a desired result that the person wants to achieve."

* subject only Reference(Patient_eltss)
//* target.eltss contains eltss
//slicing on dueby[x] no restriction but putting duration back in
//* target.eltss ^sliceName = "eltss"

//switch to startDate
//* target contains dueDateDurationStart 0..1
//* target.extenstion[dueDateDurationStart] ^short = "Start-date of the duration of time when the goal is due. End-date is found in dueDate"
//* target.extenstion[dueDateDurationStart] ^description = "If applicable, this is the Start-date of the duration of time when the goal is due. End-date is found in dueDate""
* startDate 0..1 MS
* startDate ^short = "Start-date of the duration of time when the goal is due. End-date is found in dueDate"
* startDate ^definition = "If applicable, this is the Start-date of the duration of time when the goal is due. End-date is found in dueDate"
* expressedBy only Reference(Patient_eltss or Practitioner or PractitionerRole_eltss or RelatedPerson_eltss)
* addresses only Reference(Condition_eltss or Observation_eltss or ServiceRequest_eltss or RiskAssessment_eltss or NutritionOrder or MedicationStatement)
* outcomeReference only Reference(Observation)


---

// File: input/fsh/profiles/Location_eltss.fsh

Profile: Location_eltss
Parent: $us-core-location
Id: Location-eltss
Description: "Location for eLTSS. This profile should only be used for Service Delivery Address when the service or support is provided outside the person's home address. Use Person.address when service or support is provided in the person's residence."
* ^status = #active
* ^experimental = false
* ^date = "2019-02-17T00:00:00-05:00"
* ^publisher = "HL7 CBCP"
* . ^definition = "Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, and/or accommodated."

* extension ^label = "Label"
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains
    $resource-pertainsToGoal named resource-pertainsToGoal 0..* MS
* extension[resource-pertainsToGoal] ^short = "The resource-pertainsToGoal relates the resource to the goal(s) that pertain to it. Whenever there is a goal associated with a health concern or problem, this extension should be present and populated in activity (event or intent) resources."
* description MS
* address ^definition = "Physical or geographical location."
* address.type ^comment = "The definition of Address states that \"address is intended to describe postal addresses, not physical locations\". However, many applications track whether an address has a dual purpose of being a location that can be visited as well as being a valid delivery destination, and Postal addresses are often used as proxies for physical locations (also see the Location resource)."
* address.district MS
* address.district ^short = "County"
* address.district ^definition = "Country where service is provided."

* partOf only Reference(Location_eltss)
* partOf ^type.extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-hierarchy"
* partOf ^type.extension.valueBoolean = true

---

// File: input/fsh/profiles/Observation_eltss.fsh

Profile: Observation_eltss
Parent: $us-core-simple-observation
Id: Observation-eltss
Description: "Observation resource mapping for eLTSS"
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2019-02-17T00:00:00-05:00"
* ^publisher = "HL7 CBCP"
* . ^comment = "Used for simple observations such as device measurements, laboratory atomic results, vital signs, height, weight, smoking status, comments, etc.  Other resources may be used to provide context for observations such as laboratory reports, etc."
* . ^mustSupport = false


* extension ^label = "Label"
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open

* extension contains
    $resource-pertainsToGoal named resource-pertainsToGoal 0..* MS
* extension[resource-pertainsToGoal] ^short = "The resource-pertainsToGoal relates the resource to the goal(s) that pertain to it. Whenever there is a goal associated with a health concern or problem, this extension should be present and populated in activity (event or intent) resources."

* status MS
* subject 1..1 MS
* subject only Reference(Patient_eltss)
* subject ^type.targetProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* subject ^type.targetProfile[=].extension.valueBoolean = true 

* effective[x] only dateTime or Period or Timing or instant
//* effective[x] MS
* effective[x] ^definition = "The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the \"physiologically relevant time\"."
* effective[x] ^comment = "At least a date should be present unless this observation is a historical report."
* effective[x] ^type[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* effective[x] ^type[=].extension.valueBoolean = true

* category MS
//* category ^slicing.discriminator.type = #pattern
//* category ^slicing.discriminator.path = "$this"
//* category ^slicing.rules = #open
//* category contains eltss 0..1 MS
* category[us-core] 1..1
* category[us-core] = http://terminology.hl7.org/CodeSystem/observation-category#social-history

* code MS
* code ^short = "Strength or Preference"
* code ^definition = "Code representing either a favorable attribute of oneself, his/her support network, environment and/or elements of his/her life or the person’s personal thoughts about something he or she feels is relevant to his or her life experience and may be pertinent when planning."
//* code ^comment = "All code-value and, if present, component.code-component.value pairs need to be taken into account to correctly understand the meaning of the observation."
* code from ELTSS_Observation_code (preferred)
* code.coding MS
* code.coding ^requirements = "Allows for alternative encodings within a code system and translations to other code systems."
//* code.coding.system = "http://hl7.org/us/eltss/CodeSystem/eltss-observation-code" (exactly)
//* code.coding.system ^comment = "Code system for Strength or Preference"
//* code.coding.code MS
//* code.coding.code from ELTSS_Observation_code (preferred)
//* code.coding.code ^comment = "Preference, Strength from eltss-observation-code"
//* code.coding.code ^isModifier = false
* code.text MS

* performer only Reference(Patient_eltss or Practitioner_eltss or PractitionerRole_eltss or RelatedPerson_eltss or $us-core-organization or $us-core-careteam)
//* performer MS
* performer ^type[0].targetProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* performer ^type[=].targetProfile[=].extension.valueBoolean = false
* performer ^type[=].targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* performer ^type[=].targetProfile[=].extension.valueBoolean = false
* performer ^type[=].targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* performer ^type[=].targetProfile[=].extension.valueBoolean = false
* performer ^type[=].targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* performer ^type[=].targetProfile[=].extension.valueBoolean = false
* performer ^type[=].targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* performer ^type[=].targetProfile[=].extension.valueBoolean = false
* performer ^type[=].targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* performer ^type[=].targetProfile[=].extension.valueBoolean = false

* value[x] ^short = "Preference or a Strength"
* value[x] ^definition = "Presents the person’s personal thoughts about something he or she feels is relevant to his or her life experience and may be pertinent when planning."
//* eltss contains eltss
//* eltss ^short = "Preference, Strength"
//* eltss ^definition = "Presents the person’s personal thoughts about something he or she feels is relevant to his or her life experience and may be pertinent when planning."
//* eltss ^isModifier = false

* value[x] only CodeableConcept or string
* value[x] MS
* value[x] ^type[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* value[x] ^type[=].extension.valueBoolean = false
* value[x] ^type[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* value[x] ^type[=].extension.valueBoolean = true


---

// File: input/fsh/profiles/Patient_eltss.fsh

Profile: Patient_eltss
Parent: $us-core-patient
Id: Patient-eltss
Description: "Patient resource mapping for eLTSS"
* ^status = #active
* ^experimental = false
* ^date = "2019-06-01T01:00:00-04:00"
* ^publisher = "HL7 CBCP"
* . ^definition = "The eLTSS Patient Profile is based upon the US Core Patient Resource and designed to meet the applicable patient demographic data elements from the 2015 Edition Common Clinical Data Set.."
//* extension.extension.valueCoding[valueCoding] ^sliceName = "valueCoding"
//* extension.extension.valueCoding[valueCoding] ^sliceName = "valueCoding"
//* extension.extension.valueString[valueString] ^sliceName = "valueString"
//* extension.extension.valueCoding[valueCoding] ^sliceName = "valueCoding"
//* extension.extension.valueCoding[valueCoding] ^sliceName = "valueCoding"
//* extension.extension.valueString[valueString] ^sliceName = "valueString"
//* extension.valueCode[valueCode] ^sliceName = "valueCode"




* identifier ^short = "Person Identifier"
* identifier ^definition = "A string of character(s) used to identify the person whom the plan is for.\n\nThis may be the Medicaid ID number where applicable."
* identifier.type MS
* identifier.type ^short = "Person Identifier Type"
* identifier.type ^definition = "The type of unique identifier used to identify the person whom the plan is for.\nValues include: Medicaid Number (45400-9), State ID, Medical Record Number, Social Security Number (45396-9) or Other (free text)."
* identifier.type ^comment = "Can be one of Medicaid Number, State ID, Medical Record Number, Other (free text)."
* name ^short = "Person Name"
* name ^definition = "The name of the person whom the plan is for."
* name ^comment = "1) given is used for both first name & MI, so need more than one.\n2) family is a string with the person's surname\n3) text is a string that contains the full name of the person."
* name.family 1..1
* name.given 1..*
* telecom ^short = "Person Phone Number"
* telecom ^definition = "The primary phone number of the person whom the plan is for, or his/her legal representative, where applicable."
* telecom ^comment = "For the eLTSS phone number, system should be provided as \"phone\"."
* birthDate ^short = "Person Date of Birth"
* birthDate ^definition = "The birth date of the person whom the plan is for."
* birthDate ^comment = "birthDate is in the form \"1951-06-04\"."
* address ^short = "Person Address"
* address ^definition = "The address of the person whom the plan is for."
* address ^comment = "1) text is the full (not broken out) address.\n2) line includes street name, number and suffix (e.g. 123 Main St.).\n3) Information such as apt #, floor & room #, etc. also go into line, generally as a separate data element. \n4) district covers county."
* address.district MS
* contact MS
* contact ^short = "Emergency Contact"
* contact ^definition = "Emergency Contact Name + Phone Number + Relationship."
* contact ^comment = "1) Emergency contact is indicated using a relationship value \"C\".\n2) If contact is provided, relationship needs to be provided to indicate this is an emergency contact.\n3) given is used for both first name & MI, so need more than one.\n4) family is a string with the person's surname\n5) text is a string with the full name of the person."
* contact.relationship 1..* MS
* contact.relationship ^short = "Emergency Contact Relationship"
* contact.relationship ^definition = "The relationship (e.g., spouse, neighbor, guardian, daughter) of the individual identified to contact in case of emergency."
* contact.relationship ^comment = "Recommended Value Set is PatientContactRelationship http://hl7.org/fhir/ValueSet/patient-contactrelationship."
* contact.name ^short = "Emergency Contact Name"
* contact.name ^definition = "The name of the individual or entity identified to contact in case of emergency."
* contact.name.family 1..1
* contact.name.given 1..*
* contact.telecom ^short = "Emergency Contact Phone"
* contact.telecom ^definition = "The primary phone number (and extension when applicable) of the individual or entity identified to contact in case of emergency."
* contact.telecom.value MS
* contact.telecom.system MS


---

// File: input/fsh/profiles/Practitioner_eltss.fsh

Profile: Practitioner_eltss
Parent: $us-core-practitioner
Id: Practitioner-eltss
Description: "Practitioner for eLTSS"
* ^status = #active
* ^experimental = false
* ^date = "2019-02-17T00:00:00-05:00"
* ^publisher = "HL7 CBCP"
* . ^definition = "This is basic constraint on provider for use in eLTSS resources."
* telecom MS
* telecom.value MS
* telecom.system MS

* address ^definition = "Address(es) of the practitioner that are not role specific  (typically home address). \rWork addresses are not typically entered in this property as they are usually role dependent."

---

// File: input/fsh/profiles/PractitionerRole_eltss.fsh

Profile: PractitionerRole_eltss
Parent: $us-core-practitionerrole
Id: PractitionerRole-eltss
Title: "eLTSS PractitionerRole Profile"
Description: "PractitionerRole for eLTSS"
* ^status = #active
* ^experimental = false
* ^date = "2019-02-17T00:00:00-05:00"
* ^publisher = "HL7 CBCP"
* . ^definition = "This is basic constraint on provider role for use in eLTSS resources."
* telecom MS
* telecom.value MS
* telecom.system MS
* practitioner only Reference(Practitioner_eltss)
* location only Reference(Location_eltss)

---

// File: input/fsh/profiles/Questionnaire_eltss.fsh

Profile: Questionnaire_eltss
Parent: $sdc-questionnaire
Id: Questionnaire-eltss
Description: "Questionnaire resource mapping for eLTSS"
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2019-02-17T00:00:00-05:00"
* ^publisher = "HL7 CBCP"


* item ^definition = "One of:\nPerson Setting Choice Indicator\nPerson Setting Choice Options\nService Options Given Indicator\nService Selection Indicator\nService Plan Agreement Indicator\nService Provider Options Given Indicator\nService Provider Selection Agreement Indicator."
* item ^mustSupport = true
* item.type ^mustSupport = true


---

// File: input/fsh/profiles/QuestionnaireResponse_eltss.fsh

//Alias: $sdc-questionnaireresponse = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaireresponse

Profile: QuestionnaireResponse_eltss
Parent: $us-core-questionnaireresponse
Id: QuestionnaireResponse-eltss
Title: "eLTSS QuestionnaireResponse Profile"
Description: "This profile is consistent with the USCORE QuestionnaireResponse Profile, which is itself related to the SDCQuestionnaireResponse Profile. It supports core elements, vocabularies and value sets from the resource that are used to communicate eLTSS data elements."
* ^status = #active
* ^experimental = false
* ^date = "2023-10-17"
* . ^short = "eLTSS QuestionnaireResponse Profile is based on USCORE version 7."
* . ^definition = "\\-"
* . ^comment = "\\-"
* identifier MS
* questionnaire MS
* questionnaire ^type.targetProfile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Questionnaire-eltss"
* status MS
//* subject 1.. MS
* subject only Reference(Patient_eltss)
//* subject ^comment = "-"
//* subject ^type[0].targetProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
//* subject ^type[=].targetProfile[=].extension.valueBoolean = true
* authored MS
* author MS

* item.linkId MS
* item.answer MS
* item.answer.value[x] 0..1 MS
* item.answer.value[x] only boolean or date or dateTime or time or decimal or integer or string or Coding or uri or Quantity or Attachment or Reference
* item.answer.value[x] ^type[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* item.answer.value[x] ^type[=].extension.valueBoolean = true
* item.answer.value[x] ^type[4].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* item.answer.value[x] ^type[=].extension.valueBoolean = true
* item.answer.value[x] ^type[6].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* item.answer.value[x] ^type[=].extension.valueBoolean = true
* item.answer.value[x] ^type[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* item.answer.value[x] ^type[=].extension.valueBoolean = true
* item.answer.item MS
* item MS

---

// File: input/fsh/profiles/RelatedPerson_eltss.fsh

Profile: RelatedPerson_eltss
Parent: $us-core-relatedperson
Id: RelatedPerson-eltss
Title: "eLTSS RelatedPerson Profile"
Description: "This profile sets minimum expectations for the RelatedPerson resource to record, search, and fetch basic administrative information about persons with a legal or familial relationship to a patient. It is patterned off of USCORE."
* ^status = #active
//* obeys us-core-14
* active 1.. MS
* patient only Reference(Patient_eltss)
* patient MS
* relationship MS
* relationship ^condition = "us-core-14"
* name MS
* name ^condition = "us-core-14"
* name.family MS
* name.given MS

* telecom MS
* telecom.value MS
* telecom.system MS
* address MS
* address.

//Invariant: us-core-14
//Description: "Either a name or a relationship SHALL be provided (or both)"
//Severity: #error
//Expression: "name.exists() or relationship.exists()"

---

// File: input/fsh/profiles/RiskAssessment_eltss.fsh

Profile: RiskAssessment_eltss
Parent: RiskAssessment
Id: RiskAssessment-eltss
Description: "RiskAssessment resource mapping for eLTSS"
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2019-02-17T00:00:00-05:00"
* ^publisher = "HL7 CBCP"


* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains RiskPlan named riskPlan 0..* MS and $resource-pertainsToGoal named resource-pertainsToGoal 0..* MS

* extension[resource-pertainsToGoal] ^short = "The resource-pertainsToGoal relates the resource to the goal(s) that pertain to it. Whenever there is a goal associated with a health concern or problem, this extension should be present and populated in activity (event or intent) resources."

* subject only Reference(Patient_eltss)
* encounter only Reference($us-core-encounter)
* condition only Reference(Condition_eltss)
* performer only Reference(Practitioner_eltss or PractitionerRole_eltss or $us-core-device or Device)
* reasonReference only Reference(Condition_eltss or Observation_eltss or $us-core-diagnosticreport-note or $us-core-documentreference)
* prediction ^short = "Identified Risk"
* prediction ^definition = "An aspect of a person’s life, behavior, environmental exposure, personal characteristic, or barrier that increases the likelihood of  disease, condition,  injury to self or others, or interaction with the criminal justice system."
//* prediction.outcome.binding.valueset = "https://example.org"

* prediction.outcome ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* prediction.outcome ^binding.extension.valueString = "RiskPredictionOutcome"
* prediction.outcome ^binding.description = "The condition or other outcome; e.g. death, remission, amputation, infection, etc."
* prediction.outcome ^binding.valueSet = "http://terminology.hl7.org/ValueSet/v2-0241"

* mitigation MS
* mitigation ^short = "Risk Management Plan"
* mitigation ^definition = "Description of planned activities to minimize identified risks that endanger the person's health and safety. This can be included as free text or attachment."


---

// File: input/fsh/profiles/ServiceRequest_eltss.fsh

Profile: ServiceRequest_eltss
Parent: $us-core-servicerequest
Id: ServiceRequest-eltss
Description: "ServiceRequest resource mapping for eLTSS"
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2019-02-17T00:00:00-05:00"
* ^publisher = "HL7 CBCP"
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains Eltss_directedBy named directedBy 0..* and $resource-pertainsToGoal named resource-pertainsToGoal 0..* MS
* extension[directedBy] ^sliceIsConstraining = false
* extension[resource-pertainsToGoal] ^short = "The resource-pertainsToGoal relates the resource to the goal(s) that pertain to it. Whenever there is a goal associated with a health concern or problem, this extension should be present and populated in activity (event or intent) resources."

//* basedOn MS
* basedOn only Reference(CarePlan_eltss or ServiceRequest_eltss or MedicationRequest)
//* basedOn ^type.targetProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
//* basedOn ^type.targetProfile[=].extension.valueBoolean = true
//* basedOn ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
//* basedOn ^type.targetProfile[=].extension.valueBoolean = true

* replaces only Reference(ServiceRequest_eltss)

* code ^short = "Service Name"
* code ^definition = "Identifies the paid and/or non-paid service provided to a person. Include the code and display name plus any modifiers when a coding system (e.g., Healthcare Common Procedure Coding System (HCPCS), Home Health Revenue Codes) is used."
* code ^comment = "Use HCPCS (https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo/) code + modifiers or free text."

//* code from adverse-event-contributing-factor-vs (example)
//* code from http://terminology.hl7.org/ValueSet/v3-HealthCareCommonProcedureCodingSystem (preferred)
* code from http://terminology.hl7.org/ValueSet/v3-HealthCareCommonProcedureCodingSystem
* code ^binding.description = "Use HCPCS (https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo/) code + modifiers or free text."
* code MS
* code.text MS
* code.coding MS
* code.coding.code MS
* code.coding.system MS

//* eltss contains
//    eltss and
//    eltss
//* eltss ^short = "Service Unit Quantity + Unit Type + Time Interval"
//* eltss ^definition = "The numerical amount/unit or Interval of the service unit being provided."
//* eltss ^comment = "The numerical amount of the service unit being provided for a frequency.  This element is slated to be used in conjunction with Service Quantity Interval and Unit of Service Type elements to form a full description of how often a service is provided. \nOR \nA named quantity in terms of which services are measured or specified, used as a standard measurement of like services.\nOR \nA period of time corresponding to the quantity of service(s) indicated. Values include: per day, per week, per month, per year, one time only, other (free text)."

* quantity[x] MS
* quantity[x] ^short = "Service Unit Quantity + Unit Type + Time Interval"
* quantity[x] ^definition = "The numerical amount/unit or Interval of the service unit being provided."
* quantity[x] ^comment = "The numerical amount of the service unit being provided for a frequency.  This element is slated to be used in conjunction with Service Quantity Interval and Unit of Service Type elements to form a full description of how often a service is provided. \nOR \nA named quantity in terms of which services are measured or specified, used as a standard measurement of like services.\nOR \nA period of time corresponding to the quantity of service(s) indicated. Values include: per day, per week, per month, per year, one time only, other (free text)."


* quantityQuantity MS
* quantityQuantity.unit MS
* quantityQuantity.code MS
* quantityQuantity.system MS
* quantityQuantity.value MS
* quantityQuantity.unit ^short = "UCUM codes are very useful here. But, if the concept maps to the unity unit in UCUM, then it is likely appropriate to choose a specific concept from another system. Use quanitityRatio when appropriate (such as in sessions per week) instead of quantityQuantity."

* quantityRatio MS
* quantityRatio.numerator MS
* quantityRatio.numerator.value MS
* quantityRatio.numerator.unit MS
* quantityRatio.numerator.code MS
* quantityRatio.numerator.system MS
* quantityRatio.numerator.unit ^short = "UCUM codes are very useful here, but also coded numerators could be used for something like: sessions per week. See the Implementation guidance section"
* quantityRatio MS
* quantityRatio.denominator MS
* quantityRatio.denominator.value MS
* quantityRatio.denominator.unit MS
* quantityRatio.denominator.unit ^short = "UCUM codes are very useful here"
* quantityRatio.denominator.code MS
* quantityRatio.denominator.system MS

//* subject MS
* subject only Reference(Patient_eltss)
//* subject ^type.targetProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
//* subject ^type.targetProfile[=].extension.valueBoolean = true

* encounter only Reference($us-core-encounter)
//* eltss ^short = "Service Start + End Date"
//* eltss ^definition = "The start and end date of the service being provided."
//* eltss ^mustSupport = false
//* eltss ^isModifier = false
* occurrence[x] MS
* occurrence[x] ^short = "Service Start + End Date"
* occurrence[x] ^definition = "The start and end date of the service being provided."

* occurrencePeriod MS
* occurrencePeriod ^short = "Use this when the quantity is meant to be performed within a defined, simple start and end date. E.g. For May 31,2023 to June 10, 2023 give ServicePlan.quantity of 5 [USD]/day."
* occurrenceTiming MS
* occurrenceTiming ^short = "Please consider using this for timing information that fluctuates or is sufficiently complex. You will need to calculate end-date, or use occurrenceTiming.boundsPeriod to ascribe a start and end date. E.g. Give ServicePlan.quantity 5 with unit=[USD]/day with the occurrenceTiming.boundsPeriod of May 31, 2023 to June 23, 2023 on occurrenceTiming.dayOfWeek = Mon and Wed at occurrenceTiming.timeOfDay = 3 pm."
* occurrenceTiming.repeat MS
* occurrenceTiming.repeat.bounds[x] MS
* occurrenceTiming.repeat.boundsPeriod MS
* occurrenceTiming.repeat.boundsPeriod.start MS
* occurrenceTiming.repeat.boundsPeriod.end MS
//* authoredOn MS

//* requester MS
* requester only Reference(Practitioner_eltss or PractitionerRole_eltss or Patient_eltss or $us-core-organization or RelatedPerson_eltss or $us-core-device or Device)
* requester ^type.targetProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* requester ^type.targetProfile[=].extension.valueBoolean = true
* requester ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* requester ^type.targetProfile[=].extension.valueBoolean = false
* requester ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* requester ^type.targetProfile[=].extension.valueBoolean = false
* requester ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* requester ^type.targetProfile[=].extension.valueBoolean = false
* requester ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* requester ^type.targetProfile[=].extension.valueBoolean = false
* requester ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* requester ^type.targetProfile[=].extension.valueBoolean = false
* requester ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* requester ^type.targetProfile[=].extension.valueBoolean = false



* performer MS
* performer only Reference(Practitioner_eltss or PractitionerRole_eltss or Patient_eltss or $us-core-organization or RelatedPerson_eltss or $us-core-device or Device or $us-core-careteam or HealthcareService)
* performer ^type.targetProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* performer ^type.targetProfile[=].extension.valueBoolean = true
* performer ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* performer ^type.targetProfile[=].extension.valueBoolean = true
* performer ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* performer ^type.targetProfile[=].extension.valueBoolean = true
* performer ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* performer ^type.targetProfile[=].extension.valueBoolean = true
* performer ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* performer ^type.targetProfile[=].extension.valueBoolean = true

* performer ^short = "Service Provider Name + Phone + Relationship"
* performer ^definition = "The entity or individual providing the service. For paid services use the organization/agency name, for non-paid services use the first and last name of the individual providing the service."

* locationReference MS
* locationReference only Reference(Location_eltss)
* locationReference ^short = "Service Delivery Address"
* locationReference ^definition = "The address where service delivery will take place if service will not be provided at the person's address."

* reasonReference only Reference(Condition_eltss or Observation_eltss or $us-core-diagnosticreport-note or $us-core-documentreference)
* insurance MS
* insurance ^type.targetProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* insurance ^type.targetProfile[=].extension.valueBoolean = true
* insurance ^short = "Service Funding Source"
* insurance ^definition = "The source of payment for the service."

* note MS
* note ^short = "Service Comment"
* note ^definition = "Additional information related to the service being provided. This field could capture additional information of the frequency of the service, how the person wants the service delivered and only used when the comment provides additional detail of the service not already handled by another element."


* supportingInfo MS

---

// File: input/fsh/examples/bundleExample.fsh

//Instance: 2039212f3fa5406bb4ffd4a
//InstanceOf: Bundle
//Usage: #example
//* type = #transaction-response 
//* link.relation = #self
//* link.url = "https://example.com/base/CarePlan/253/$all-eltss-careplan"

//* entry[+].fullUrl = "https://hl7.org/fhir/Bundle/collectionBundleResponse"
//* entry[=].resource = collectionBundleResponse
//* entry[=].response.status = "200 OK"

//Instance: collectionBundleResponse
Instance: 2039212f3fa5406bb4ffd4a
InstanceOf: Bundle
Usage: #example
//Description: "Example of a Bundle with eLTSS data elements. Note: Review JSON and/or XML, as not all elements are rendered by the publisher in the narrative content"
//https://hl7.org/fhir/R4B/medicinalproductdefinition-operation-everything.html
* type = #collection
//#searchset
//# transaction-response 
* link.relation = #self
* link.url = "https://example.com/base/CarePlan/253/$all-eltss-careplan"

* entry[+].fullUrl = "https://hl7.org/fhir/Patient/patientBSJ1"
* entry[=].resource = patientBSJ1
* entry[+].fullUrl = "https://hl7.org/fhir/CarePlan/careplan1"
* entry[=].resource = careplan1
* entry[+].fullUrl = "https://hl7.org/fhir/Task/Task1"
* entry[=].resource = Task1
* entry[+].fullUrl = "https://hl7.org/fhir/Task/Task2"
* entry[=].resource = Task2
* entry[+].fullUrl = "https://hl7.org/fhir/Goal/goal2"
* entry[=].resource = goal2
* entry[+].fullUrl = "https://hl7.org/fhir/Goal/goal1"
* entry[=].resource = goal1
* entry[+].fullUrl = "https://hl7.org/fhir/Practitioner/planner1"
* entry[=].resource = planner1
* entry[+].fullUrl = "https://hl7.org/fhir/ServiceRequest/service2"
* entry[=].resource = service2
* entry[+].fullUrl = "https://hl7.org/fhir/ServiceRequest/service3"
* entry[=].resource = service3
* entry[+].fullUrl = "https://hl7.org/fhir/ServiceRequest/service4"
* entry[=].resource = service4
* entry[+].fullUrl = "https://hl7.org/fhir/RelatedPerson/son1"
* entry[=].resource = son1
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/strength1"
* entry[=].resource = strength1
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/strength2"
* entry[=].resource = strength2
* entry[+].fullUrl = "https://hl7.org/fhir/Practitioner/caremgr1"
* entry[=].resource = caremgr1
* entry[+].fullUrl = "https://hl7.org/fhir/CarePlan/careplan2"
* entry[=].resource = careplan2
* entry[+].fullUrl = "https://hl7.org/fhir/Claim/claim1"
* entry[=].resource = claim1
* entry[+].fullUrl = "https://hl7.org/fhir/Claim/claim2"
* entry[=].resource = claim2
* entry[+].fullUrl = "https://hl7.org/fhir/Claim/claim3"
* entry[=].resource = claim3
* entry[+].fullUrl = "https://hl7.org/fhir/Contract/contract1"
* entry[=].resource = contract1
* entry[+].fullUrl = "https://hl7.org/fhir/Coverage/coverage1"
* entry[=].resource = coverage1
* entry[+].fullUrl = "https://hl7.org/fhir/EpisodeOfCare/episode1"
* entry[=].resource = episode1
* entry[+].fullUrl = "https://hl7.org/fhir/Organization/funding1"
* entry[=].resource = funding1
* entry[+].fullUrl = "https://hl7.org/fhir/RelatedPerson/guardian1"
* entry[=].resource = guardian1
* entry[+].fullUrl = "https://hl7.org/fhir/Location/location1"
* entry[=].resource = location1
* entry[+].fullUrl = "https://hl7.org/fhir/Condition/need1"
* entry[=].resource = need1
* entry[+].fullUrl = "https://hl7.org/fhir/Condition/need2"
* entry[=].resource = need2
* entry[+].fullUrl = "https://hl7.org/fhir/Condition/need3"
* entry[=].resource = need3
* entry[+].fullUrl = "https://hl7.org/fhir/Condition/need4"
* entry[=].resource = need4
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/pref1"
* entry[=].resource = pref1
* entry[+].fullUrl = "https://hl7.org/fhir/Organization/provider2a"
* entry[=].resource = provider2a
* entry[+].fullUrl = "https://hl7.org/fhir/Practitioner/provider2b"
* entry[=].resource = provider2b
* entry[+].fullUrl = "https://hl7.org/fhir/Practitioner/provider3"
* entry[=].resource = provider3
* entry[+].fullUrl = "https://hl7.org/fhir/Practitioner/provider4"
* entry[=].resource = provider4
* entry[+].fullUrl = "https://hl7.org/fhir/PractitionerRole/PractitionerRole-1"
* entry[=].resource = PractitionerRole-1
* entry[+].fullUrl = "https://hl7.org/fhir/Location/communitysite"
* entry[=].resource = communitysite
* entry[+].fullUrl = "https://hl7.org/fhir/Questionnaire/questionnaire1"
* entry[=].resource = questionnaire1
* entry[+].fullUrl = "https://hl7.org/fhir/QuestionnaireResponse/questionnaireresponse1"
* entry[=].resource = questionnaireresponse1
* entry[+].fullUrl = "https://hl7.org/fhir/RiskAssessment/risk1"
* entry[=].resource = risk1
* entry[+].fullUrl = "https://hl7.org/fhir/ServiceRequest/service1"
* entry[=].resource = service1


---

// File: input/fsh/examples/example.fsh

Instance: patientBSJ1
InstanceOf: Patient
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Patient-eltss"
* active = true
* name.text = "Betsy Smith-Johnson"
* name.given = "Betsy"
* name.family = "Smith-Johnson"
* gender = #female
* birthDate = "1950-11-01"
* maritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus#U "unmarried"
* maritalStatus.text = "Not married"
* identifier.use = #usual
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#MR "Medical Record Number"
* identifier.system = "http://hl7.org/fhir/sid/us-medicare"
* identifier.value = "10A3D58WH1600"
* extension[0].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
* extension[=].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "White"

* extension[+].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* extension[=].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "Not Hispanic or Latino"

* telecom.system = #phone
* telecom.value = "210-222-1111"
* telecom.use = #mobile
* address.text = "111 Maple Ct, San Antonio, TX 78212"
* address.line = "111 Maple Ct"
* address.city = "San Antonio"
* address.district = "Bexar"
* address.state = "TX"
* address.postalCode = "78212"
* communication.language = urn:ietf:bcp:47#en "English"
* communication.language.text = "US"
* communication.preferred = true
* contact[0].name.text = "Charles Johnson"
* contact[=].name.given = "Charles"
* contact[=].name.family = "Johnson"
* contact[=].relationship[0] = http://terminology.hl7.org/CodeSystem/v3-RoleCode#SONC "Son"
* contact[=].relationship[+] = http://terminology.hl7.org/CodeSystem/v2-0131#C "Emergency Contact"
* contact[=].relationship[+] = http://terminology.hl7.org/CodeSystem/v3-RoleCode#GUARD "Guardian"
* contact[=].address.text = "100 Montana St., San Antonio, TX 78203"
* contact[=].telecom.system = #phone
* contact[=].telecom.value = "(210) 222-3333"
* contact[+].name.text = "Debra Johnson"
* contact[=].name.given = "Debra"
* contact[=].name.family = "Johnson"
* contact[=].relationship = http://terminology.hl7.org/CodeSystem/v3-RoleCode#DAUC "Daughter"
* contact[=].address.text = "333 W. Camden St., Baltimore, MD 21201"
* contact[=].telecom.system = #phone
* contact[=].telecom.value = "(410) 444-5555"


Instance: careplan1
InstanceOf: CarePlan
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/CarePlan-eltss"
* status = #active
* intent = #plan
* category = $careplan-category#assess-plan
* title = "Betsy Smith Johnson's Services and Supports Plan"
* description = "A service and support plan that outlines Betsy's assessed needs, goals, strengths, preferences, and services/providers to meet those needs and goals."
* subject = Reference(Patient/patientBSJ1)

* period.start = "2020-05-01"
* period.end = "2020-12-31"
* author = Reference(planner1)
* addresses[0] = Reference(need1)
* addresses[+] = Reference(need2)
* addresses[+] = Reference(need3)
* addresses[+] = Reference(need4)
* supportingInfo[0] = Reference(strength1)
* supportingInfo[+] = Reference(strength2)
* supportingInfo[+] = Reference(pref1)
* supportingInfo[+] = Reference(questionnaireresponse1)
* supportingInfo[+] = Reference(contract1)
* supportingInfo[+] = Reference(risk1)
* goal[0] = Reference(goal1)
* goal[+] = Reference(goal2)
* activity[+].reference = Reference(service1)
* activity[=].reference.display = "Service 1"
* activity[+].reference = Reference(service2)
* activity[=].reference.display = "Service 2"
* activity[+].reference = Reference(service3)
* activity[=].reference.display = "Service 3"
* activity[+].reference = Reference(service4)
* activity[=].reference.display = "Service 4"
* activity[+].reference = Reference(Task1)
* activity[=].reference.display = "Task1"
* activity[=].progress.time = "2020-05-10"
* activity[=].progress.text = "Betsy will start doing balance exercises"
* activity[+].reference = Reference(Task2)
* activity[=].reference.display = "Task2"
* activity[=].progress.time = "2020-05-10"
* activity[=].progress.text = "Betsy working on mobility to dance at son's upcoming wedding" 

Instance: Task1
InstanceOf: Task
Usage: #example
* status = #ready "Ready"
* intent = #order
* priority = #routine
* extension.url = "http://hl7.org/fhir/StructureDefinition/resource-pertainsToGoal"
* extension.valueReference = Reference(Goal/goal1)
* code = http://hl7.org/fhir/CodeSystem/task-code#fulfill "Fulfill the focal request"
* description = "Perform exercises to improve balance skills."
* for = Reference(Patient/patientBSJ1) "Betsy"
* requester = Reference(Practitioner/planner1) "Mark Planner"
* owner = Reference(Patient/patientBSJ1) "Betsy"


Instance: Task2
InstanceOf: Task
Usage: #example
* status = #ready "Ready"
* intent = #order
* priority = #routine
* extension.url = "http://hl7.org/fhir/StructureDefinition/resource-pertainsToGoal"
* extension.valueReference = Reference(Goal/goal2)
* code = http://hl7.org/fhir/CodeSystem/task-code#fulfill "Fulfill the focal request"
* description = "Son working with Besty to work on mobility to dance at son's upcoming wedding."
* for = Reference(Patient/patientBSJ1) "Betsy" 
* requester = Reference(Practitioner/planner1) "Mark Planner"
* owner = Reference(RelatedPerson/son1) "Charles - Betsy's son"

Instance: goal2
InstanceOf: Goal
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Goal-eltss"
* lifecycleStatus = #accepted

* description.text = "Dance at son's upcoming wedding"
* subject = Reference(Patient/patientBSJ1)

Instance: goal1
InstanceOf: Goal
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Goal-eltss"
* lifecycleStatus = #accepted

* description.text = "Improve balance skills"
* subject = Reference(Patient/patientBSJ1)

Instance: planner1
InstanceOf: Practitioner
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Practitioner-eltss"

* identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* identifier[=].value = "9941339100"    
* identifier[+].system = "http://www.acme.org/practitioners"
* identifier[=].value = "25456"

* name.text = "Mark Planner"
* name.family = "Planner"
* name.given = "Mark"

* telecom.system = #phone
* telecom.value = "(210) 555 1221"



Instance: service2
InstanceOf: ServiceRequest
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/ServiceRequest-eltss"
* status = #active
* intent = #plan

//http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets
//http://terminology.hl7.org/CodeSystem/HCPCS-all-codes

* code = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#T2003
* code.text = "Non-emergency transportation; encounter/trip"

* quantityRatio.numerator.value = 2
* quantityRatio.numerator.unit = "trips"
* quantityRatio.numerator.system = $nct
* quantityRatio.numerator.code = #C141286 //Transportation

* quantityRatio.denominator.value = 1
* quantityRatio.denominator.unit = "month"
* quantityRatio.denominator.system = $ucum
* quantityRatio.denominator.code = #mo //Month
	
* subject = Reference(Patient/patientBSJ1)
* occurrencePeriod.start = "2020-07-01"

* occurrencePeriod.end = "2020-12-31"

* performer = Reference(provider2a)
* reasonReference = Reference(need1)
* insurance = Reference(coverage1)
* supportingInfo = Reference(claim1)

* note.text = "Service provider will provide a reminder the business day before the trip, and will call when on the way."

Instance: service3
InstanceOf: ServiceRequest
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/ServiceRequest-eltss"
* status = #active
* intent = #plan


//http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets
//http://terminology.hl7.org/CodeSystem/HCPCS-all-codes

* code = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#G0108
* code.text = "Diabetes outpatient self-management training services, individual, per 30 minutes"

* quantityRatio.numerator.value = 1
* quantityRatio.numerator.unit = "visit"
* quantityRatio.numerator.system = $nct
* quantityRatio.numerator.code = #C25716 //Visit

* quantityRatio.denominator.value = 1
* quantityRatio.denominator.unit = "week"
* quantityRatio.denominator.system = $ucum
* quantityRatio.denominator.code = #wk //Week


* subject = Reference(Patient/patientBSJ1)
* occurrencePeriod.start = "2020-05-01"

* occurrencePeriod.end = "2020-08-01"

* performer = Reference(provider3)
* reasonReference = Reference(need2)
* supportingInfo = Reference(claim2)

Instance: service4
InstanceOf: ServiceRequest
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/ServiceRequest-eltss"
* status = #active
* intent = #plan

* code.coding[0] = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#97110
//* code.coding[+] = http://www.ama-assn.org/go/cpt#97110
* code.text = "therapeutic exercises to improve balance skills"

* quantityRatio.numerator.value = 1
* quantityRatio.numerator.unit = "visit"
* quantityRatio.numerator.system = $nct
* quantityRatio.numerator.code = #C25716 //Visit

* quantityRatio.denominator.value = 1
* quantityRatio.denominator.unit = "week"
* quantityRatio.denominator.system = $ucum
* quantityRatio.denominator.code = #wk //Week

* subject = Reference(Patient/patientBSJ1)
* occurrencePeriod.start = "2020-05-01"

* occurrencePeriod.end = "2020-08-01"

* performer = Reference(provider4)
* reasonReference = Reference(need1)
* supportingInfo[0] = Reference(goal1)
* supportingInfo[+] = Reference(goal2)
* supportingInfo[+] = Reference(claim3)

Instance: son1
InstanceOf: RelatedPerson
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/RelatedPerson-eltss"
* active = true
* patient = Reference(Patient/patientBSJ1)
* relationship.coding = $v3-RoleCode#SONC
* name.text = "Charles Johnson"
* name.family = "Charles"
* name.given = "Johnson"

Instance: strength1
InstanceOf: Observation
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Observation-eltss"
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#social-history "Social History"
* code = $eltss-observation-code#strength "Strength"
* effectiveDateTime = "2013-04-02T10:30:10+01:00"
* issued = "2013-04-03T15:30:10+01:00"
* performer = Reference(Practitioner/caremgr1) "Care Manager"
* subject = Reference(Patient/patientBSJ1)
* valueString = "Able to manage her bills."

Instance: strength2
InstanceOf: Observation
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Observation-eltss"
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#social-history "Social History"
* code = $eltss-observation-code#strength "Strength"
* effectiveDateTime = "2013-04-02T10:30:10+01:00"
* issued = "2013-04-03T15:30:10+01:00"
* performer = Reference(Practitioner/caremgr1) "Care Manager"
* subject = Reference(Patient/patientBSJ1)
* valueString = "Independent walking with cane."

Instance: caremgr1
InstanceOf: Practitioner
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Practitioner-eltss"

* identifier[+].system = "http://hl7.org/fhir/sid/us-npi"
* identifier[=].value = "1144221847"
* identifier[+].system = "http://www.acme.org/practitioners"
* identifier[=].value = "25457"

* name.text = "Sam Monitor"
* name.family = "Monitor"
* name.given = "Sam"

* telecom.system = #phone
* telecom.value = "(210) 224 1599"

Instance: careplan2
InstanceOf: CarePlan
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/CarePlan-eltss"

* partOf = Reference(careplan1)
* status = #active
* intent = #plan
* category = $careplan-category#assess-plan
* description = "Weather Emergency: A shelf-stable meal is delivered to Meals On Wheels clients. It is to be eaten in the unlikely event of cancellation. Weather meals are donated by the Sheboygan Service Club."
* subject = Reference(Patient/patientBSJ1)

Instance: claim1
InstanceOf: Claim
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Claim-eltss"
* status = #active
* type = $claim-type#professional
* use = #claim
* patient = Reference(Patient/patientBSJ1)
* created = "2020-05-01"
* provider = Reference(funding1)
* priority = $processpriority#normal
* insurance.sequence = 1
* insurance.focal = true
* insurance.coverage = Reference(coverage1)
* item.sequence = 1
* item.productOrService = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#T2003

* item.unitPrice.value = 60
* item.unitPrice.currency = #USD

* item.net.value = 600
* item.net.currency = #USD

Instance: claim2
InstanceOf: Claim
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Claim-eltss"
* status = #active
* type = $claim-type#professional
* use = #claim
* patient = Reference(Patient/patientBSJ1)
* created = "2020-05-01"
* provider = Reference(funding1)
* priority = $processpriority#normal
* insurance.sequence = 1
* insurance.focal = true
* insurance.coverage = Reference(coverage1)
* item.sequence = 1
* item.productOrService = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#G0108

* item.unitPrice.value = 55
* item.unitPrice.currency = #USD

* item.net.value = 660
* item.net.currency = #USD

Instance: claim3
InstanceOf: Claim
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Claim-eltss"
* status = #active
* type = $claim-type#professional
* use = #claim
* patient = Reference(Patient/patientBSJ1)
* created = "2020-05-01"
* provider = Reference(funding1)
* priority = $processpriority#normal
* insurance.sequence = 1
* insurance.focal = true
* insurance.coverage = Reference(coverage1)
* item.sequence = 1
* item.productOrService = http://www.ama-assn.org/go/cpt#97110

* item.unitPrice.value = 65
* item.unitPrice.currency = #USD

* item.net.value = 780
* item.net.currency = #USD

Instance: contract1
InstanceOf: Contract
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Contract-eltss"

* signer[+].type = $contractsignertypecodes#PAT
* signer[=].party = Reference(Patient/patientBSJ1)
* signer[=].signature.type = urn:iso-astm:E1762-95:2013#1.2.840.10065.1.12.1.7
* signer[=].signature.when = "2020-04-02T03:00:00Z"
* signer[=].signature.who = Reference(Patient/patientBSJ1)
* signer[=].signature.data = "R0lGODlhIAAgALMAADNmmWNjnGOcnJycnJzOnM7OnP///////////////////////////////////////yH5BAEAAAUALAAAAAAgACAAAARosMhJq704680l6OD0fSFHFmd5pai6vi7FerGYzWAK7HKs8zYVazcUVojH0gyZzFmYvQ4OGtXgUMDn5kqtwlZZLeaKJXOtYbG31lrXdKb0lyySi+l1PE1v5CtpbE0eRISFhod+gYoXEQAAOw=="



* signer[+].type = $contractsignertypecodes#GUARD
* signer[=].party = Reference(guardian1)
* signer[=].signature.type = urn:iso-astm:E1762-95:2013#1.2.840.10065.1.12.1.7
* signer[=].signature.when = "2020-04-02T03:00:00Z"
* signer[=].signature.who = Reference(guardian1)
* signer[=].signature.data = "R0lGODlhIAAgALMAADNmmWNjnGOcnJycnJzOnM7OnP///////////////////////////////////////yH5BAEAAAUALAAAAAAgACAAAARosMhJq704680l6OD0fSFHFmd5pai6vi7FerGYzWAK7HKs8zYVazcUVojH0gyZzFmYvQ4OGtXgUMDn5kqtwlZZLeaKJXOtYbG31lrXdKb0lyySi+l1PE1v5CtpbE0eRISFhod+gYoXEQAAOw=="


* signer[+].type = $contractsignertypecodes#AUT
* signer[=].party = Reference(planner1)
* signer[=].signature.type = urn:iso-astm:E1762-95:2013#1.2.840.10065.1.12.1.1
* signer[=].signature.when = "2020-04-02T03:00:00Z"
* signer[=].signature.who = Reference(planner1)
* signer[=].signature.data = "R0lGODlhIAAgALMAADNmmWNjnGOcnJycnJzOnM7OnP///////////////////////////////////////yH5BAEAAAUALAAAAAAgACAAAARosMhJq704680l6OD0fSFHFmd5pai6vi7FerGYzWAK7HKs8zYVazcUVojH0gyZzFmYvQ4OGtXgUMDn5kqtwlZZLeaKJXOtYbG31lrXdKb0lyySi+l1PE1v5CtpbE0eRISFhod+gYoXEQAAOw=="


* signer[+].type = $contractsignertypecodes#COAUTH
* signer[=].party = Reference(caremgr1)
* signer[=].signature.type = urn:iso-astm:E1762-95:2013#1.2.840.10065.1.12.1.1
* signer[=].signature.when = "2020-04-02T03:00:00Z"
* signer[=].signature.who = Reference(caremgr1)
* signer[=].signature.data = "R0lGODlhIAAgALMAADNmmWNjnGOcnJycnJzOnM7OnP///////////////////////////////////////yH5BAEAAAUALAAAAAAgACAAAARosMhJq704680l6OD0fSFHFmd5pai6vi7FerGYzWAK7HKs8zYVazcUVojH0gyZzFmYvQ4OGtXgUMDn5kqtwlZZLeaKJXOtYbG31lrXdKb0lyySi+l1PE1v5CtpbE0eRISFhod+gYoXEQAAOw=="



* signer[+].type = $contractsignertypecodes#HPROV
* signer[=].party = Reference(provider3)
* signer[=].signature.type = urn:iso-astm:E1762-95:2013#1.2.840.10065.1.12.1.7
* signer[=].signature.when = "2020-04-02T03:00:00Z"
* signer[=].signature.who = Reference(provider3)
* signer[=].signature.data = "R0lGODlhIAAgALMAADNmmWNjnGOcnJycnJzOnM7OnP///////////////////////////////////////yH5BAEAAAUALAAAAAAgACAAAARosMhJq704680l6OD0fSFHFmd5pai6vi7FerGYzWAK7HKs8zYVazcUVojH0gyZzFmYvQ4OGtXgUMDn5kqtwlZZLeaKJXOtYbG31lrXdKb0lyySi+l1PE1v5CtpbE0eRISFhod+gYoXEQAAOw=="



* signer[+].type = $contractsignertypecodes#HPROV
* signer[=].party = Reference(provider2b)
* signer[=].signature.type = urn:iso-astm:E1762-95:2013#1.2.840.10065.1.12.1.7
* signer[=].signature.when = "2020-04-02T03:00:00Z"

* signer[=].signature.who = Reference(provider2b)
* signer[=].signature.data = "R0lGODlhIAAgALMAADNmmWNjnGOcnJycnJzOnM7OnP///////////////////////////////////////yH5BAEAAAUALAAAAAAgACAAAARosMhJq704680l6OD0fSFHFmd5pai6vi7FerGYzWAK7HKs8zYVazcUVojH0gyZzFmYvQ4OGtXgUMDn5kqtwlZZLeaKJXOtYbG31lrXdKb0lyySi+l1PE1v5CtpbE0eRISFhod+gYoXEQAAOw=="



* signer[+].type = $contractsignertypecodes#HPROV
* signer[=].party = Reference(son1)
* signer[=].signature.type = urn:iso-astm:E1762-95:2013#1.2.840.10065.1.12.1.7
* signer[=].signature.when = "2020-04-02T03:00:00Z"
* signer[=].signature.who = Reference(son1)
* signer[=].signature.data = "R0lGODlhIAAgALMAADNmmWNjnGOcnJycnJzOnM7OnP///////////////////////////////////////yH5BAEAAAUALAAAAAAgACAAAARosMhJq704680l6OD0fSFHFmd5pai6vi7FerGYzWAK7HKs8zYVazcUVojH0gyZzFmYvQ4OGtXgUMDn5kqtwlZZLeaKJXOtYbG31lrXdKb0lyySi+l1PE1v5CtpbE0eRISFhod+gYoXEQAAOw=="



* signer[+].type = $contractsignertypecodes#HPROV
* signer[=].party = Reference(provider4)
* signer[=].signature.type = urn:iso-astm:E1762-95:2013#1.2.840.10065.1.12.1.7
* signer[=].signature.when = "2020-04-02T03:00:00Z"
* signer[=].signature.who = Reference(provider4)
* signer[=].signature.data = "R0lGODlhIAAgALMAADNmmWNjnGOcnJycnJzOnM7OnP///////////////////////////////////////yH5BAEAAAUALAAAAAAgACAAAARosMhJq704680l6OD0fSFHFmd5pai6vi7FerGYzWAK7HKs8zYVazcUVojH0gyZzFmYvQ4OGtXgUMDn5kqtwlZZLeaKJXOtYbG31lrXdKb0lyySi+l1PE1v5CtpbE0eRISFhod+gYoXEQAAOw=="




Instance: coverage1
InstanceOf: Coverage
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* status = #active

* beneficiary = Reference(Patient/patientBSJ1)
* payor = Reference(funding1)

Instance: episode1
InstanceOf: EpisodeOfCare
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/EpisodeOfCare-eltss"
* status = #active
* patient = Reference(Patient/patientBSJ1)
* careManager = Reference(caremgr1)

Instance: funding1
InstanceOf: Organization
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = $us-core-organization
* active = true
* identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* identifier[=].value = "1144221847"    
* identifier[+].system = "urn:oid:2.16.840.1.113883.4.7"
* identifier[=].value = "12D4567890"
//* identifier[+].value = "ICWP"
* name = "Texas Department of Community Health"
* address.text = "7430 Louis Pasteur Dr, San Antonio, TX 78229"

Instance: guardian1
InstanceOf: RelatedPerson
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/RelatedPerson-eltss"
* active = true
* patient = Reference(Patient/patientBSJ1)
//comes from the R5 version of the value set https://hl7.org/fhir/valueset-relatedperson-relationshiptype.html
//valid
* relationship = $v3-RoleCode#GUARD
* name.text = "Charles Johnson"
* name.family = "Charles"
* name.given = "Johnson"

Instance: location1
InstanceOf: Location
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Location-eltss"
* name = "In Home"

* address.text = "111 Maple Ct, San Antonio, TX 78212"

Instance: need1
InstanceOf: Condition
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Condition-eltss"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* category[0] = http://hl7.org/fhir/us/core/CodeSystem/condition-category#health-concern "Health Concern" 	
* category[+] = eltss-condition-category-code#assessed-need
* category[+] = http://hl7.org/fhir/us/core/CodeSystem/us-core-category#sdoh
* code = $sct#713458007 "Lack of access to transportation (finding)"
* code.text = "Needs transportation"
* subject = Reference(Patient/patientBSJ1)

Instance: need2
InstanceOf: Condition
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Condition-eltss"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* category[0] = http://hl7.org/fhir/us/core/CodeSystem/condition-category#health-concern "Health Concern"
* category[+] = eltss-condition-category-code#assessed-need
* code = $sct#734920002 "Diabetes mellitus education service"
* code.text = "Needs health / nutrition education for diabetes"
* subject = Reference(Patient/patientBSJ1)

Instance: need3
InstanceOf: Condition
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Condition-eltss"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* category[0] = http://hl7.org/fhir/us/core/CodeSystem/condition-category#health-concern "Health Concern"
* category[+] = eltss-condition-category-code#assessed-need
* category[+] = http://hl7.org/fhir/us/core/CodeSystem/us-core-category#cognitive-status
* code = $sct#35489007 "Depressive disorder (disorder)"
* code.text = "Depression (on treatment)"
* subject = Reference(Patient/patientBSJ1)

Instance: need4
InstanceOf: Condition
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Condition-eltss"
* extension.url = "http://hl7.org/fhir/StructureDefinition/condition-dueTo"
* extension.valueReference = Reference(Condition/need3)
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* category[0] = http://hl7.org/fhir/us/core/CodeSystem/condition-category#health-concern "Health Concern"
* category[+] = eltss-condition-category-code#assessed-need
* category[+] = http://hl7.org/fhir/us/core/CodeSystem/us-core-category#sdoh
* code = $sct#183301007 "Physical exercises (regime/therapy)"
* code.text = "Needs physical exercises"
* subject = Reference(Patient/patientBSJ1)

Instance: pref1
InstanceOf: Observation
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Observation-eltss"
* status = #final
* code = $lnc#95541-9 "Care experience preference"
* category = http://terminology.hl7.org/CodeSystem/observation-category#social-history "Social History"
* effectiveDateTime = "2013-04-02T10:30:10+01:00"
* issued = "2013-04-03T15:30:10+01:00"
* performer = Reference(Practitioner/caremgr1) "Care Manager"
* subject = Reference(Patient/patientBSJ1)
* valueString = "Accessing the ICWP Waiver for her current service needs, and would like to remain on ICWP and continue with her current services."

Instance: provider2a
InstanceOf: Organization
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = $us-core-organization
* active = true
* identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* identifier[=].value = "1144221847"    
* identifier[+].system = "urn:oid:2.16.840.1.113883.4.7"
* identifier[=].value = "12D4567890"
//* identifier.system = "http://www.acme.org/practitioners"
//* identifier.value = "24680"
* name = "The Transporter, Inc."
* telecom.system = #phone
* telecom.value = "(210) 555 1313"
* address.text = "111 Business Street, San Antonio, TX 78212"

Instance: provider2b
InstanceOf: Practitioner
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Practitioner-eltss"
* identifier.system = "http://www.acme.org/practitioners"
* identifier.value = "11223344"
* name.text = "Bill Driver"
* name.family = "Driver"
* name.given = "Bill"
* telecom.system = #phone
* telecom.value = "(210) 111 2222"

Instance: provider3
InstanceOf: Practitioner
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Practitioner-eltss"
* identifier.system = "http://www.acme.org/practitioners"
* identifier.value = "987654"
* name.text = "Lisa Educator"
* name.family = "Educator"
* name.given = "Lisa"
* telecom.system = #phone
* telecom.value = "(210) 555 1213"

Instance: provider4
InstanceOf: Practitioner
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Practitioner-eltss"
* identifier.system = "http://www.acme.org/practitioners"
* identifier.value = "987657"
* name.text = "Norma Trainer"
* name.family = "Trainer"
* name.given = "Norma"
* telecom.system = #phone
* telecom.value = "(210) 555 1214"

Instance: PractitionerRole-1
InstanceOf: PractitionerRole
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/PractitionerRole-eltss"
* practitioner = Reference(Practitioner/caremgr1) "Sam Monitor"
* organization = Reference(Organization/funding1) "Texas Department of Community Health"
* code.coding[0] = $provider-taxonomy#172V00000X "Community Health Worker"
* specialty = $provider-taxonomy#171M00000X "Case Manager/Care Coordinator"
* location = Reference(Location/communitysite) "Health Level Seven International"
* telecom.system = #phone
* telecom.value = "(210) 555 1222"

Instance: communitysite
InstanceOf: Location
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Location-eltss"
* name = "In Home"
* address.text = "7430 Louis Pasteur Dr, San Antonio, TX 78229"


Instance: questionnaire1
InstanceOf: Questionnaire
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/Questionnaire-eltss"
* name = "Questionnaire1"
* status = #active
* url = "http://hl7.org/fhir/us/eltss/Questionnaire/questionnaire1"
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:oid:2.999"

* item[0].linkId = "q1"
* item[=].text = "Did you choose the setting in which you reside?"
* item[=].type = #boolean
* item[+].linkId = "q2"
* item[=].text = "What alternative home and community-based settings were considered?"
* item[=].type = #string
* item[+].linkId = "q3"
* item[=].text = "Were you given a choice of services outlined in the plan?"
* item[=].type = #boolean
* item[+].linkId = "q4"
* item[=].text = "Did you participate in the selection of services outlined in the plan?"
* item[=].type = #boolean
* item[+].linkId = "q5"
* item[=].text = "Do you agree to the services outlined in the plan?"
* item[=].type = #boolean
* item[+].linkId = "q6"
* item[=].text = "Were you offered a choice of providers for each service?"
* item[=].type = #boolean
* item[+].linkId = "q7"
* item[=].text = "Do you feel you made an informed choice in selecting the provider for each service?"
* item[=].type = #boolean

Instance: questionnaireresponse1
InstanceOf: QuestionnaireResponse
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/QuestionnaireResponse-eltss"
//should this be the versioned one: http://hl7.org/fhir/us/eltss/Questionnaire/questionnaire1#2.0.0
//the current Questionnaire is for STU2.0
* questionnaire = "http://hl7.org/fhir/us/eltss/Questionnaire/questionnaire1"
* status = #completed
* subject = Reference(Patient/patientBSJ1)
* authored = "2020-09-03T10:16:03.512-04:00"
//* author = Reference(caremgr1)

* item[+].linkId = "q1"
* item[=].answer.valueBoolean = true

* item[+].linkId = "q2"
* item[=].answer.valueString = "Assisted living facility"

* item[+].linkId = "q3"
* item[=].answer.valueBoolean = true

* item[+].linkId = "q4"
* item[=].answer.valueBoolean = true

* item[+].linkId = "q5"
* item[=].answer.valueBoolean = true

* item[+].linkId = "q6"
* item[=].answer.valueBoolean = true

* item[+].linkId = "q7"
* item[=].answer.valueBoolean = true

Instance: risk1
InstanceOf: RiskAssessment
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/RiskAssessment-eltss"
* extension.url = "http://hl7.org/fhir/us/eltss/StructureDefinition/eltss-RiskPlan"
* extension.valueReference.display = "This points to a management plan for any risks. This is not the backup plan, which is an alternative plan for the CarePlan. The risk management plan is meant to help avoid needing the backup plan."
* status = #final
* subject = Reference(Patient/patientBSJ1)
* prediction[+].outcome.coding = $sct#129839007
* prediction[=].outcome.text = "At risk for falls (finding)"
* prediction[+].outcome.coding = $sct#35489007
* prediction[=].outcome.text = "Depressive disorder (disorder)"
* prediction[=].outcome.coding = $sct#866240007
* prediction[=].outcome.text = "At risk of stroke"
* mitigation = "Betsy is at risk for falls and of having a stroke. Her risk is increased due to her depression medication. She has grab bars installed in the shower and is working on her balance with a trainer."


Instance: service1
InstanceOf: ServiceRequest
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2020-09-03T10:16:03.512-04:00"
* meta.source = "#KZ0jzPjXDrhCiMif"
* meta.profile = "http://hl7.org/fhir/us/eltss/StructureDefinition/ServiceRequest-eltss"
* extension.url = "http://hl7.org/fhir/us/eltss/StructureDefinition/eltss-directedBy"
* extension.valueCodeableConcept.text = "self"
* status = #active
* intent = #plan

//http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets
//http://terminology.hl7.org/CodeSystem/HCPCS-all-codes

* code = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#E0241
* code.text = "Bath tub wall rail, each"

* quantityQuantity.value = 1
* quantityQuantity.unit = "install" 
* quantityQuantity.system = $nct
* quantityQuantity.code = #C81906 //Deploy

* subject = Reference(Patient/patientBSJ1)
* occurrencePeriod.start = "2020-05-01"

* occurrencePeriod.end = "2020-12-31"

* performer = Reference(son1)

* locationReference = Reference(location1)
* supportingInfo = Reference(risk1)

---

