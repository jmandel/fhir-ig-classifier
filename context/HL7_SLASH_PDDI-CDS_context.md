File: repos/HL7_SLASH_PDDI-CDS/input/extensions/readme.md

Empty file to keep the folder structure

---

File: repos/HL7_SLASH_PDDI-CDS/input/history/readme.md

Empty file to keep the folder structure

---

File: repos/HL7_SLASH_PDDI-CDS/input/images/readme.md

Empty file to keep the folder structure

---

File: repos/HL7_SLASH_PDDI-CDS/input/models/readme.md

Empty file to keep the folder structure

---

File: repos/HL7_SLASH_PDDI-CDS/input/pagecontent/cds-service-spec.md


### Summary of Normative Recommendations


**PDDI CDS knowledge artifacts.**

* It is RECOMMENDED that knowledge artifacts for PDDI CDS are written so that clinician-focused response information adheres to the 8 detailed best practice recommendations discussed in the Community Group Note titled [Minimum Representation of Potential Drug-Drug Interaction Knowledge and Evidence](https://w3id.org/hclscg/pddi).

**CDS Hooks.**

* The prefetch template for the `order-select` service (if used) MUST include medication resources but could include Condition or other resources important for the service to assess for PDDIs

**A CDS rule execution engine (service).** 

* The CDS rule execution engine MUST be able to process CDS Hooks requests and return CDS Hooks Card responses. In processing a CDS request, it MUST also be able to process FHIR data including clinical and terminology resources.

* If the CDS rule execution engine does not receive prefetch data in the request it SHOULD query the FHIR server via network call.

* A rule engine MAY execute CDS rules written in [CQL](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=400) and represented as a [FHIR Library](http://build.fhir.org/library.html), either directly or compiled to [Expression Logical Model](https://github.com/cqframework/clinical_quality_language/blob/master/Src/java/cql-to-elm/OVERVIEW.md). While this method is described in the current IG, implementers MAY choose to use various programming languages, rule engines and/or machine learning models rather than CQL+FHIR.

* If the engine implements the advanced functionality described in this implementation guide (i.e., coordination between order-select and order-sign to prevent alert duplication) then, it MUST support processing of the configuration options described in [Extension subsection](#cds-hooks-request). If EHR clients do not send the configuration options, the default behavior of the service should be to NOT suppress card responses at order-sign that might duplicate card responses sent at order-select. This is because the EHR client should have an active role in the decision of whether to filter out alert responses. 

* It is RECOMMENDED that the rule engine not be given permission to access information that is masked from the clinician whose EHR session has triggered the CDS request (aka 'super user' status) unless there is a specific Break the Glass (BTG) procedure that covers such situations. If there a valid BTG procedure that allows the rule engine to access such information, it MUST return an information card stating that such a directive is present. The CDS card SHOULD include that the clinician will be held accountable for BTG throughout any related system audit.

**An electronic health record (EHR) CDS client.**


* Prior to a hook trigger and subsequent processes, the EHR MUST initiate a [CDS Discovery](#cds-discovery) request. The CDS discovery response is for the system and would not be viewed by the clinician.

* The EHR MUST call the PDDI CDS service by sending an HTTP POST containing a CDS Hooks request (JSON formatted) to the service endpoint (e.g.,http://FHIR.org/PDDI-CDS/warfarin-nsaids-cds). The JSON ([CDS Hooks request](#cds-hooks-request)) MUST contain specified information for the hook that was triggered including FHIR server, user, and context. Provision of prefetch data as specified by the CDS service is RECOMMENDED.

* If the EHR client is requesting a CDS from an engine implements the advanced functionality described in this implementation guide (i.e., coordination between order-select and order-sign to prevent alert duplication) then, the client SHOULD use the configuration options described in [Extension subsection](#cds-hooks-request). The purpose of this is so that the EHR client has an active role in the decision to filter out alert responses. 

### Preliminaries 
{:.no_toc}

This section contains documentation on how to implement PDDI CDS artifacts from a clinical and technical perspective. Later sections describe implementation details using a specific knowledge artifact example. Structured artifacts that implement the logic and behavior described below are available under [Artifacts](artifacts.html).


#### Getting Started with PDDI CDS
{:.no_toc}

The words MUST, MUST NOT, REQUIRED, SHALL, SHALL NOT, SHOULD, SHOULD NOT, RECOMMENDED, MAY, AND OPTIONAL are used as defined [*"Key words for use in Request for Comment (RFC) to Indicate Requirement Levels".*](https://tools.ietf.org/html/rfc2119) S. Bradner. IETF. March 1997. Best Current Practice.


#### What You Will Need
{:.no_toc}

* A web service that processes CDS requests using a CDS rule execution engine. The service MUST be able to process CDS Hooks requests and return CDS Hooks Card responses.

* A web service that processes CDS requests MUST be able to process FHIR data including clinical and terminology resources. 

* The EHR system that sends requests to the service MAY provide access to the service to relevant patient data in the EHR via a FHIR server. EHR systems that do not provide access to addition patient data will potentially receive more limited CDS because the service will only work with data in the `context` and `prefetch` fields of CDS Hooks requests.
			


#### CDS Function
{:.no_toc}

To invoke the PDDI CDS service, the EHR needs to send a CDS Hooks request at a pre-specified step the workflow process. The CDS service then parses and processes the request to determine if the prescribed medication conflicts with a medication the patient is presumably taking. If this condition is satisfied, the CDS service provides individualized information based on the PDDI knowledge base. While each implementation may employ a slightly different approach to ensure successful integration of the CDS system. Here are several general aspects to assess:

* A technical framework for the EHR to interact with the CDS service by

    * creating and sending CDS Hooks requests

    * capturing and presenting CDS Hooks card responses

* Use of FHIR terminologies (e.g., RxNorm, LOINC) and other FHIR resources

* SMART authentication during FHIR server requests


**NEED TO ADD SECTION REGARDING EVIDENCE RESOURCE AND EBM ON FHIR**

#### CPOE Workflow Hooks 
{:.no_toc}

Figure 1 depicts hook triggers for a medication prescribing example. The implementation follows the [CDS Hooks `order-select`](https://cds-hooks.org/hooks/order-select/) and [CDS Hooks `order-sign`](https://cds-hooks.org/hooks/order-sign/) specifications that define trigger events when a clinician enters a medication and is ready to sign one or more medication orders for a patient. The `order-select` hook defines the initial trigger at the start of the CPOE workflow. The `order-sign` hook is among the last workflow events before an order is promoted out of a draft status. Having the option to trigger the CDS service at *only one* of two different events in the workflow sets PDDI CDS apart from most conventional CDS systems that trigger CDS at the time of order signing. By moving CDS triggers earlier in the order entry workflow (i.e., `order-select`), clinicians will have actionable information in the middle of their decision-making process. We think that providing information at this stage presents less of a cognitive burden on the clinician and will lead to more effective CDS. Note that it might not be possible to develop CDS Logic to evaluate a candidate order at the "order-select" stage.' In these cases, appropriately, there would be no ability for the EHR to subscribe to a service specific to the drug-drug interaction that triggers at order-select.

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 1: Workflow and CDS Hooks for medication prescription </strong></figcaption>
  <a href = "CPOE_workflow_2.svg" target ="_blank" > <img src= "CPOE_workflow_2.svg" class="figure-img img-responsive img-rounded center-block" alt="CPOE_workflow_2.svg" /></a>
</figure>


#### Summary of Normative Recommendations
{:.no_toc}

**PDDI CDS knowledge artifacts.**valueset-warfarin.xml

* It is RECOMMENDED that knowledge artifacts for PDDI CDS are written so that clinician-focused response information adheres to the 8 detailed best practice recommendations discussed in the Community Group Note titled [Minimum Representation of Potential Drug-Drug Interaction Knowledge and Evidence](https://w3id.org/hclscg/pddi).

**A CDS rule execution engine (service).** 

* The CDS rule execution engine MUST be able to process CDS Hooks requests and return CDS Hooks Card responses. In processing a CDS request, it MUST also be able to process FHIR data including clinical and terminology resources.

* If the CDS rule execution engine does not receive prefetch data in the request it MUST query the FHIR server via network call.

* It is RECOMMENDED that the rule engine be able to execute CDS rules written in [CQL](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=400) and represented as a [FHIR Library](http://build.fhir.org/library.html) resource, either directly or compiled to HL7 [Expression Logical Model](https://github.com/cqframework/clinical_quality_language/blob/master/Src/java/cql-to-elm/OVERVIEW.md).

* If the engine implements the advanced functionality described in this implementation guide (i.e., coordination between order-select and order-sign to prevent alert duplication) then, it MUST support processing of the configuration options described in [Extension subsection](#cds-hooks-request). If EHR clients do not send the configuration options, the default behavior of the service should be to NOT suppress card responses at order-sign that might duplicate card responses sent at order-select. This is because the EHR client should have an active role in the decision of whether to filter out alert responses. 

* It is RECOMMENDED that the rule engine not be given permission to access information that is masked from the clinician whose EHR session has triggered the CDS request (aka 'super user' status) unless there is a specific Break the Glass (BTG) procedure that covers such situations. If there a valid BTG procedure that allows the rule engine to access such information, it MUST return an information card stating that such a directive is present. The CDS card SHOULD include that the clinician will be held accountable for BTG throughout any related system audit.

**An electronic health record (EHR) CDS client.**


* Prior to a hook trigger and subsequent processes, the EHR MUST initiate a [CDS Discovery](#cds-discovery) request. The CDS discovery response is for the system and would not be viewed by the clinician.

* The EHR MUST call the PDDI CDS service by sending an HTTP POST containing a CDS Hooks request (JSON formatted) to the service endpoint (e.g.,http://FHIR.org/PDDI-CDS/warfarin-nsaids-cds). The JSON ([CDS Hooks request](#cds-hooks-request)) MUST contain specified information for the hook that was triggered including FHIR server, user, and context. Provision of prefetch data as specified by the CDS service is RECOMMENDED.

* If the EHR client is requesting a CDS from an engine implements the advanced functionality described in this implementation guide (i.e., coordination between order-select and order-sign to prevent alert duplication) then, the client SHOULD use the configuration options described in [Extension subsection](#cds-hooks-request). The purpose of this is so that the EHR client has an active role in the decision to filter out alert responses. 

### Preliminaries 

This section contains documentation on how to implement PDDI CDS artifacts from a clinical and technical perspective. Later sections describe implementation details using a specific knowledge artifact example. Structured artifacts that implement the logic and behavior described below are available under [Artifacts](artifacts.html).


#### Getting Started with PDDI CDS
{:.no_toc}

The words MUST, MUST NOT, REQUIRED, SHALL, SHALL NOT, SHOULD, SHOULD NOT, RECOMMENDED, MAY, AND OPTIONAL are used as defined [*"Key words for use in Request for Comment (RFC) to Indicate Requirement Levels".*](https://tools.ietf.org/html/rfc2119) S. Bradner. IETF. March 1997. Best Current Practice.


#### What You Will Need
{:.no_toc}

* A web service that processes CDS requests using a CDS rule execution engine. The service MUST be able to process CDS Hooks requests and return CDS Hooks Card responses.

* A web service that processes CDS requests MUST be able to process FHIR data including clinical and terminology resources. 

* The EHR system that sends requests to the service MAY provide access to the service to relevant patient data in the EHR via a FHIR server. EHR systems that do not provide access to addition patient data will potentially receive more limited CDS because the service will only work with data in the `context` and `prefetch` fields of CDS Hooks requests.

* Here is a list of FHIR tools that might be of interest to implementers:

	* [Public](http://wiki.hl7.org/index.php?title=Publicly_Available_FHIR_Servers_for_testing) 
    
	* Local (preferred)

           <b> The HAPI links DO NOT work </b>
	    * [HAPI RESTful Server](http://hapifhir.io/doc_rest_server.html)

		* [HAPI JPA Server](http://hapifhir.io/doc_jpa.html)

		* [HAPI JAX-RS Server](http://hapifhir.io/doc_rest_server_jaxrs.html)

		* [.NET Server](https://github.com/ewoutkramer/fhir-net-api)
			


#### CDS Function
{:.no_toc}

To invoke the PDDI CDS service, the EHR needs to send a CDS Hooks request at a pre-specified step the workflow process. The CDS service then parses and processes the request to determine if the prescribed medication conflicts with a medication the patient is presumably taking. If this condition is satisfied, the CDS service provides individualized information based on the PDDI knowledge base. While each implementation may employ a slightly different approach to ensure successful integration of the CDS system. Here are several general aspects to assess:

* A technical framework for the EHR to interact with the CDS service by

    * creating and sending CDS Hooks requests

    * capturing and presenting CDS Hooks card responses

* Use of FHIR terminologies (e.g., RxNorm, LOINC) and other FHIR resources

* SMART authentication during FHIR server requests


**NEED TO ADD SECTION REGARDING EVIDENCE RESOURCE AND EBM ON FHIR**

#### CPOE Workflow Hooks 
{:.no_toc}

Figure 1 depicts hook triggers for a medication prescribing example. The implementation follows the [CDS Hooks `order-select`](https://cds-hooks.org/hooks/order-select/) and [CDS Hooks `order-sign`](https://cds-hooks.org/hooks/order-sign/) specifications that define trigger events when a clinician enters a medication and is ready to sign one or more medication orders for a patient. The `order-select` hook defines the initial trigger at the start of the CPOE workflow. The `order-sign` hook is among the last workflow events before an order is promoted out of a draft status. From a clinical and technical perspective, triggering the CDS service at two events in the workflow sets PDDI CDS apart from most conventional CDS systems that trigger CDS at the time of order signing. By moving CDS triggers earlier in the order entry workflow (i.e., `order-select`), clinicians will have actionable information in the middle of their decision-making process. We think that providing information at this stage presents less of a cognitive burden on the clinician and will lead to more effective CDS.

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 1: Workflow and CDS Hooks for medication prescription </strong></figcaption>
  <a href = "CPOE_workflow_2.svg" target ="_blank" > <img src= "CPOE_workflow_2.svg" class="figure-img img-responsive img-rounded center-block" alt="CPOE_workflow_2.svg" /></a>
</figure>

Note that the current CDS Hook specification does not have a hook to provide the CDS information at an intermediate step between product selection and signing the order.

#### Prefetch Role 
{:.no_toc}

For technical implementers, the intended role of prefetch is to improve the CDS service performance. This is achieved by minimizing CDS service network calls to external resources such as a FHIR server. When a client program subscribes to the PDDI CDS service, the service MUST return a prefetch specification in the response. This specification identifies resources that the PDDI CDS service SHOULD receive upon request. As described below, the prefetch requirements are different for `order-select` and `order-sign` services. The ideal scenario for both implementations and services is to send prefetch data with the CDS Hooks request. The implementor has flexibility on when and how to fulfill the prefetch templates (e.g., data in EHR memory or server call), which will likely result in a solution that reduces the burden of the server and improves the CDS service efficiency. If the CDS service does not receive prefetch data in the request it MUST query the server via network call. 

#### Security and authorization

Implementers need to consider and address security and privacy concerns that might arise when from providing CDS as a service. One thing to consider is if the clinician ordering a drug is not authorized to have access to information masked due to a patient's consent directive that restricts sharing. For example, consider the [Warfarin + non-steroidal anti-inflamatory drugs (NSAIDs) Use Case](./use-cases.html) where the clinician selects warfarin for a patient currently prescribed a NSAID and a proton pump inhibitor. It is conceivable that the clinician would not be aware that the patient is also taking a selective serotonin reuptake inhibitor (SSRI) for a major depressive disorder because the patient did not consent to share this information with anyone besides the mental health provider who prescribed the SSRI. Assuming that the FHIR Authorization Server enforces the patient's consent directive not to disclose to the CDS that the patient is taking a SSRI then, the clinician will not be alerted about the PDDI with NSAID. However, the FHIR Authorization Server could also have an organizational policy that authorizes the CDS as a "super user" and permits it to access to information that is masked from an unauthorized clinician. If the CDS service identifies a PDDI that could result from the order selected by the clinician, it could return a CDS Hook card cautioning the clinician of a possible counter-indication, and recommending that the clinician ask the patient about any medications that the patient has not shared. This would fall under a ["Break the Glass" (BTG)](https://hipaa.yale.edu/security/break-glass-procedure-granting-emergency-access-critical-ephi-systems) scenario and would require a special procedure.  A similar CDS BTG scenario was demonstrated during the [HIMSS 201902 Orlando Consumer Centered Care Planning Interoperability Showcase](https://confluence.hl7.org/display/SEC/HIMSS+201902+Orlando) and [is described here](https://confluence.hl7.org/display/SEC/HIMSS+201902+Sharing+with+Protections). It was sponsored by the HL7 Security and CBCP WGs, VA, Allscripts, Perspecta, MyPatientLink and others. For more information, see https://build.fhir.org/security-labels.html#break-the-glass and https://build.fhir.org/operationoutcome-example-break-the-glass.html. 

It is RECOMMENDED that the rule engine not be given permission to access information that is masked from the clinician whose EHR session has triggered the CDS request (aka 'super user' status) unless there is a specific Break the Glass (BTG) procedure that covers such situations. If there a valid BTG procedure that allows the rule engine to access such information, it MUST return an information card stating that such a directive is present. The CDS card SHOULD include that the clinician will be held accountable for BTG throughout any related system audit.

#### Configuration Options and the CDS Service
{:.no_toc}

The primary motivation for configuration options is to support the advanced functionality of coordinating between order-select and order-sign to prevent alert duplication. Although it might seem reasonable to have the service default to this kind of coordination with no input from the EHR client, we think that there might be potential scenarios where this form of duplication might be desirable. For example, a teaching hospital might have resident physicians go through the order selection process and then have an attending physician sign off on the order. In this situation, having the same CDS Hooks cards returned at order-select and order-sign would not be perceived as a duplication to the attending. There might be other scenarios where repeating cards across the hooks makes sense. Thus, it seems best to have the EHR client some active role in the decision of whether to filter out alert responses. Using configuration options sent from the EHR client to the service provides a way for the client to have a say in how apparent duplication is handled.

Another role for configuration options would be to enable greater specificity of PDDI CDS to a given clinical environment. This is because clinicians and/or groups of clinicians often have specialized knowledge that might lead them to prioritize information about certain PDDIs over others. One of the advantages of PDDI CDS as a service over the conventional approach of triggering alerts using of a general drug interaction knowledge base is an EHR can be more specific about the interactions provided within a specific clinical environment.  For example, clinicians working at a psychiatric hospital might be well versed in psychiatric PDDIs and so only interested in PDDI CDS for drugs they know less about. However, there is another level of specificity that might be beneficial beyond the selection of specific drug combinations. For example, a particular clinician or clinical group might desire to only view PDDIs that are regarded as serious. Also, there might be a preference for the amount of detail in the response narrative. These could be handled using configuration options passed from the EHR client to the CDS service. This would likely be a preferred approach to allow for PDDI CDS to be more customized across many different clinical environments using EHR.

This implementation guide discusses a mechanism for providing the CDS service configuration from CDS Hooks requests. The use of this mechanism is required for the advanced functionality of coordinating between order-select and order-sign. There is no requirement to use additional configuration options at this time. Other possibly useful configuration options, such as to filter out non-serious alerts, might be the focus of a future project.

It is critical for the practicing clinicians using the EHR to be consulted with/actively involved in any configuration decisions made related to the CDS service and what alerts to present. This is because the IT implementers at the site be unlikely to have the clinical knowledge to evaluate the potential burdens of “over alerting” vs. the risks of missing important safety messages. Clinicians need to carefully evaluate the potential burdens vs. risks and make a careful decision on CDS configuration.

##### The CDS Hooks Feedback Endpoint and the CDS Service
{:.no_toc}

The [CDS Hooks feedback service](https://github.com/cds-hooks/docs/wiki/Feedback-endpoint-for-CDS-Hooks-1.1) provides a mechanism for the CDS Service to receive an update from the client on the acceptance or rejection of a suggestion. This is valuable information to enable a service to improve its behavior towards the goal of the end-user having a positive and meaningful experience with the CDS. There are four distinct, possible outcomes for an end user's single interaction with a CDS Hooks suggestion card: suggestion accepted, card ignored, card dismissed without reason, card dismissed with reason. While the feedback mechanism could potentially provide the CDS Service with greater context for coordination between `order-select` and `order-sign` card responses, the coordination mechanism described in this IG does not require its use. EHR clients that implement the hook coordination mechanism (see [advanced implementation](#advanced-implementation)) MAY integrate feedback to inform how the service filters cards. However, this is not a requirement.  


#### Filtering CDS Hooks response cards at `order-sign`: CDS Service versus EHR Client
{:.no_toc}

The preferred implementation is to configure the CDS service to filter duplicative response cards previously shown to the prescriber at `order-select` as demonstrated in the [advanced implementation](#advanced-implementation).  In order for PDDI CDS to be both sensitive and specific, different contextual factors are sent to the CDS service depending upon the order entry workflow step the clinician is engaged in.  At the time of medication selection, a `order-select` CDS Hook sends medication resources to the CDS service. Later, at the time of order signing, a `order-sign` CDS Hook sends other contextual resources specific to a PDDI identified from processing `order-select`. This might include retrospective patient conditions, lab measurements, and other information. One potential advantage of this approach is a reduction the amount of information needed to provide actionable PDDI information to the clinician. The approach might also limit the amount of information the EHR has to provide for an order entry task. For example, if a clinician starts an NSAID order for a patient that was taking warfarin and decides to discontinue the order based on the presented cards, the clinician only needs to read and process medication factors, and the EHR would not display additional patient resources such as age and history of upper gastrointestinal bleed.
 
#### Process 
{:.no_toc}

This section provides an overview of the processes and components of the PDDI CDS. It is delineated by [Basic](#basic-implementation) and [Advanced](#advanced-implementation) Implementation sections. The Basic Implementation describes the technology specifications, and what structured code is available in this implementation guide. The Advanced Implementation is a target for future iterations to optimize the CDS artifacts. 

#### CDS Discovery
{:.no_toc}

Prior to a hook trigger and subsequent processes, the EHR MUST initiate a CDS Discovery (Figure 2). CDS Discovery is to identify CDS services and obtain associated prefetch templates. A prefetch template is a dictionary of read and search requests for needed resources of a particular service. The PDDI CDS service MAY provide a prefetch template for each service, and the EHR SHOULD populate prefetch templates with relevant patient data for the anticipated CDS Hook request. The CDS discovery response is for the system and would not be viewed by the clinician.

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 2: CDS Service Discovery </strong></figcaption>
  <img src="cds-service-discovery.png" class="figure-img img-responsive img-rounded center-block" alt="Discover_CDS_Service.svg" />
</figure>

**Example 1: EHR request for CDS Discovery**

~~~
GET http://FHIR.org/PDDI-CDS
~~~

**Example 2: CDS Discovery response**

~~~
 {
  "services": [
    {
      "hook": "order-select",
      "name": "PlanDefinition - Warfarin NSAIDs Recommendation Workflow",
      "title": "Warfarin NSAIDs Recommendation",
      "extension": {
        "configuration-items": [
          {
            "code": <an identifier for the configuration option>,
            "type": <data type of the configuration option, e.g. boolean>,
            "name": <human readable name of the configuration option>,
            "description": <human readable description of the configuration option>
          },

          ... other configuration options ...
        ]
      },
      "id": "warfarin-nsaids-cds-select",
      "prefetch": {
        "item1": "Patient?_id={{context.patientId}}",
        "item2": "MedicationRequest?patient={{context.patientId}}&authoredon=ge2019-12-11",
        "item3": "MedicationAdministration?patient={{context.patientId}}&effective-time=ge2019-12-11",
        "item4": "MedicationDispense?patient={{context.patientId}}&whenhandedover=ge2019-12-11",
        "item5": "MedicationStatement?patient={{context.patientId}}&effective=ge2019-12-11",
        "item6": "Condition?patient={{context.patientId}}"
      }
    },
    {
      "hook": "order-sign",
      "name": "PlanDefinition - Warfarin NSAIDs Recommendation Workflow",
      "title": "Warfarin NSAIDs Recommendation",
      "extension": {
        "configuration-items": [
          {
            "code": <an identifier for the configuration option>,
            "type": <data type of the configuration option, e.g. boolean>,
            "name": <human readable name of the configuration option>,
            "description": <human readable description of the configuration option>
          },

          ... other configuration options ...
        ]
      },
      "id": "warfarin-nsaids-cds-sign",
      "prefetch": {
        "item1": "Patient?_id={{context.patientId}}",
        "item2": "MedicationRequest?patient={{context.patientId}}&authoredon=ge2019-12-11",
        "item3": "MedicationAdministration?patient={{context.patientId}}&effective-time=ge2019-12-11",
        "item4": "MedicationDispense?patient={{context.patientId}}&whenhandedover=ge2019-12-11",
        "item5": "MedicationStatement?patient={{context.patientId}}&effective=ge2019-12-11",
        "item6": "Condition?patient={{context.patientId}}"
      }
    }
  ]
}

~~~


### Basic Implementation

The Basic Implementation uses the `order-sign 1.0` and is a more simplistic approach compared to the [Advanced Implementation](#advanced-implementation). The CDS Hooks specification states that `order-sign 1.0` fires when a clinician is ready to sign one or more orders for a patient, (including orders for medications, procedures, labs and other orders). This hook is among the last workflow events before an order is promoted out of a draft status. The context contains all order details, such as dose, quantity, route, etc, although the order has not yet been signed and therefore still exists in a draft status. Use this hook when your service requires all order details, and the clinician will accept recommended changes. Since EHR platforms may have different discrete steps in the order entry process, the implementor decides what action (e.g., selecting a medication product, accepting order completion) triggers the CDS Hooks request.  

#### Summary of Operations
{:.no_toc}

The process for a unique instance of PDDI CDS begins with the user triggering a CDS Hooks request (i.e., `order-sign`) and ends with the user's action in response to the Card response suggestion(s) (Figure 3). The parse and pre-process subprocess is to determine if a FHIR server query needed. The Clinical Reasoning module evaluates the complete request and creates information to send back the the EHR. The event subprocesses may occur in response to a specific instance (i.e., SMART authorization and FHIR access) or asynchronous of the specific instance (i.e., CDS Discovery). 

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 3: Basic Implementation – Order Sign Service Summary </strong></figcaption>
  <img src="basic-order-sign-service.png" class="figure-img img-responsive img-rounded center-block" alt="Basic_Order_Sign_service.svg" />
</figure>



#### CDS Hooks
{:.no_toc}

The PDDI CDS artifacts use the [current HL7 CDS Hooks specification](https://cds-hooks.org/specification/current/).  The CDS Hooks standard defines the data structure to facilitate communication between the EHR and the CDS service through a RESTful API request and response. This allows patient data to be sent and received by the EHR at intervals that better align with clinical workflows – further leveraging FHIR and SMART applications at the point of care. CDS Hooks instances include CDS Discovery, EHR requests and CDS service response. The `context` and `prefetch` are two key elements of the CDS Hook request that contain patient information. The `context` element contains data that is task and hook-specific. The `prefetch` element contains patient-specific information that is relevant to the `context` data and the invoked CDS service. The CDS Hooks response is a set of Cards. The Cards contain general information, suggested actions, and display indicators in a structured format for the EHR to process and display. The CDS Discovery of the CDS Hooks specification delineates information that the CDS service is to provide to the EHR.

> *Note:* The [HL7 specification for decision support](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=334) does not require that the CDS service process CDS Hooks. This implementation guide requires their use because CDS Hooks should provide simplicity and specific orientation for CPOE workflow integration.



#### CDS Hooks Request 
{:.no_toc}

The EHR MUST call the PDDI CDS service by sending an HTTP `POST` containing `JSON` to the service endpoint (e.g.,`http://FHIR.org/PDDI-CDS/warfarin-nsaids-cds`). The JSON (CDS Hooks request) MUST contain specified information for the hook that was triggered, FHIR server, user, context, and prefetch.

**Context**
{:.no_toc}

The `context` element of a CDS Hooks request contains contextual data for the current task and is specified below. For example, the `order-sign` hook specifies the `context` MUST include the medication product (i.e., `medication` element of the MedicationRequest resource) of the order in process. 

**order-sign 1.0.**
{:.no_toc}

Field | Optionality | Prefetch Token | Type | Description
----- | -------- | :----: | ---- | ----
`userId` | REQUIRED | Yes | *string* | The id of the current user. For this hook, the user is expected to be of type Practitioner. For example, `Practitioner/123Describe`
`patientId` | REQUIRED | Yes | *string* | The FHIR Patient.id of the current patient in context
`encounterId` | OPTIONAL | Yes | *string* | The FHIR Encounter.id of the current encounter in context
`draftOrders`| REQUIRED | No | *object* | 	object	R4 - FHIR Bundle of draft MedicationRequest resource for the current order entry task

**Extension**
{:.no_toc}

PDDI Configuration Items
{:.no_toc}
The CDS Service MAY process configuration options sent as within an extension resource with the CDS Hooks request in the field `configuration-items`. At the present time, there are no standard configuration options for the basic implementation of PDDI CDS. Balloting such options as a standard is for future work. While not a recommendation, some examples can be shown. One example would be a configuration such as `alert-non-serious` that accepts accepts a Boolean value indicating to the CDS service if it should provide alerts for PDDIs that have an indicator other than 'serious'. Another example would be a configuration such as `show-evidence-support`  indicating to the CDS service that it should provide more detailed evidence support for its alerts. 
			    			    			    

**Prefetch**
{:.no_toc}

The `prefetch` element contains patient data that is provided by the EHR upon submission of the CDS Hook to the CDS service. The CDS service MUST provide the EHR with a prefetch template at the time of service discovery. The `prefetch` element MAY specify patient data other than medications for the purpose of individualizing the CDS logic and response. The prefetch query MUST be designed to obtain data for the patient indicated by the context `patientID`. The CDS service SHOULD then compare the `context` medication to the patient's current medications in the `prefetch` element. 

> *Note:* For simplicity, this implementation guide uses the term "prefetch" regardless of whether the EHR supplies the data prior to a hook request or if it is queried by the CDS service as a post-hoc FHIR server request.

**CDS Hooks Request Example**
{:.no_toc}

* [Request test data](testdata.html)

**Bundle**
{:.no_toc}

A `Bundle` is a FHIR resource that groups resources into a single instance, which is ideal for messaging with CDS Hooks, storing a collection of resources obtained on CDS Discovery, and providing flexibility in using the collections as a persistent instance. PDDI CDS implementors MUST use the bundle resource for certain `context` elements and all `prefetch` resources. For each prefetch template query, a `Bundle` MUST be created to group the resources. A prefetch element MAY contain several `Bundle` resources with several other resources grouped within.


#### FHIR Server Request
{:.no_toc}

A FHIR server request by the CDS service is necessary in the event the request `prefetch` element is empty. While the `prefetch` element is OPTIONAL, it MUST NOT be partially fulfilled. The post-hoc FHIR server query is performed at the parse and pre-process phase shown in Figure 4. To accomplish a FHIR server request, the server URL and the OAuth authorization token (i.e. `fhirServer,` `fhirAuthorization`) MUST be provided in the CDS Hooks request. 

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 4: Basic – Parse and Pre-process CDS Hooks request </strong></figcaption>
  <img src="basic-parse-pre-process.png" class="figure-img img-responsive img-rounded center-block" alt="Basic_Parse_pre-process.svg" />
</figure>



#### CDS Hooks Response and Card Display
{:.no_toc}

The CDS service response is a Card array. Each Card has specified attributes that map to the core elements of the minimal information model (e.g., `summary` = Drugs Involved). Each Card has a `suggestions` array and each suggestion has an `action` array. The Card `indicator` element dictates how the EHR presents the alert (e.g., `indicator` = "critical" could be a modal alert).

**Example 3: CDS Hooks Response**

~~~
{
  "cards": [
    {
      "summary": "Potential drug-drug interaction between naproxen 500mg tablet and warfarin 5mg tablet",
      "indicator": "critical",
      "detail": "Non-steroidal anti-inflammatory drugs (NSAIDs) have antiplatelet effects which increase the bleeding risk when combined with oral anticoagulants such as warfarin.",
      "source": {
        "label": "Potential Drug-Drug Interaction CDS",
        "suggestions": [
          {
            "label": "Assess risk and take action if necessary",
            "actions": [
              {
                "type": "create",
                "description": "If the NSAID is being used as an analgesic or antipyretic, it would be prudent to use an alternative such as acetaminophen.",
                "resource": {
                  "APAP-order": "MedicationRequest"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "summary": "Patient is taking omeprazole 20mg daily",
      "indicator": "info",
      "detail": "Proton pump inhibitors and misoprostol may reduce the risk of UGIB in patients receiving NSAIDs and warfarin.",
      "source": {
        "label": "Potential Drug-Drug Interaction CDS"
    } ...
 snipped for brevity
~~~

**Card Display Example**

* Basic – Warfarin + NSAIDs Cards (Without `filter-out-repeated-alerts`)
~~~
{
  "cards": [
    {
      "summary": "Potential Drug-Drug Interaction between warfarin (Warfarin Sodium 0.5 MG Oral Tablet) and NSAID (Ketorolac Tromethamine 10 MG Oral Tablet).",
      "indicator": "warning",
      "detail": "Increased risk of bleeding. \nBleeding is a serious potential clinical consequence because it can result in death, life-threatening hospitalization, and disability. \nNon-steroidal anti-inflammatory drugs (NSAIDs) have antiplatelet effects which increase the bleeding risk when combined with oral anticoagulants such as warfarin. The antiplatelet effect of NSAIDs lasts only as long as the NSAID is present in the circulation, unlike aspirin’s antiplatelet effect, which lasts for up to 2 weeks after aspirin is discontinued. NSAIDs also can cause peptic ulcers and most of the evidence for increased bleeding risk with NSAIDs plus warfarin is due to upper gastrointestinal bleeding (UGIB). \nunknown. \n unknown.",
      "source": {
        "label": "Warfarin-NSAIDs clinical decision support algorithm",
        "url": "https://ddi-cds.org/warfarin-nsaids/"
      },
      "suggestions": [
        {
          "label": "Assess risk and take action if necessary.",
          "actions": [
            {
              "type": "delete",
              "description": "If the NSAID is being used as an analgesic or antipyretic, it would be prudent to use an alternative such as acetaminophen. In some people, acetaminophen can increase the anticoagulant effect of warfarin, so monitor the INR if acetaminophen is used in doses over 2 g/day for a few days. For more severe pain consider short-term opioids in place of the NSAID."
            }
          ]
        },
        {
          "label": "Substitute NSAID (Ketorolac Tromethamine 10 MG Oral Tablet) with APAP (Acetaminophen 325 MG Oral Tablet).",
          "actions": [
            {
              "type": "create",
              "description": "Order for APAP <2g per day (APAP 500 mg every 4-6 hours prn).",
              "resource": {
                "resourceType": "MedicationRequest",
                "id": "3f6b9b43-9354-4512-9883-a915417e2936",
                "intent": "order",
                "medicationCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                      "code": "313782",
                      "display": "Acetaminophen 325 MG Oral Tablet"
                    }
                  ],
                  "text": "Acetaminophen 325 MG Oral Tablet"
                },
                "subject": {
                  "reference": "f101"
                }
              }
            }
          ]
        },
        {
          "label": "Substitute NSAID (Ketorolac Tromethamine 10 MG Oral Tablet) with APAP (Acetaminophen 500 MG Oral Tablet).",
          "actions": [
            {
              "type": "create",
              "description": "Order for APAP <2g per day (APAP 500 mg every 4-6 hours prn).",
              "resource": {
                "resourceType": "MedicationRequest",
                "id": "d54e75a7-90ce-4ee7-90b6-63333c052648",
                "intent": "order",
                "medicationCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                      "code": "198440",
                      "display": "Acetaminophen 500 MG Oral Tablet"
                    }
                  ],
                  "text": "Acetaminophen 500 MG Oral Tablet"
                },
                "subject": {
                  "reference": "f101"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "summary": "Patient is not taking a proton pump inhibitor or misoprostol.",
      "indicator": "critical",
      "detail": "Proton pump inhibitors and misoprostol may reduce the risk of UGIB in patients receiving NSAIDs and warfarin.",
      "source": {
        "label": "Warfarin-NSAIDs clinical decision support algorithm",
        "url": "https://ddi-cds.org/warfarin-nsaids/"
      },
      "suggestions": [
        {
          "label": "Use only if benefit outweighs risk."
        }
      ]
    },
    {
      "summary": "Patient is 65 y/o or does have a history of upper gastrointestinal bleed (\"Acute duodenal ulcer with hemorrhage\" and 2020-03-01).",
      "indicator": "warning",
      "detail": "Patients with a history of UGIB or peptic ulcer may have an increased risk of UGIB from this interaction. The extent to which older age is an independent risk factor for UGIB due to these interactions is not firmly established, but UGIB in general is known to increase with age.",
      "source": {
        "label": "Warfarin-NSAIDs clinical decision support algorithm",
        "url": "https://ddi-cds.org/warfarin-nsaids/"
      },
      "suggestions": [
        {
          "label": "Use only if benefit outweighs risk."
        }
      ]
    },
    {
      "summary": "Patient is not concomitantly taking systemic corticosteroids, aldosterone antagonist, or high dose or multiple NSAIDs.",
      "indicator": "info",
      "detail": "Both corticosteroids and aldosterone antagonists have been shown to subsetantially increase the risk of UGIB in patients on NSAIDs, with relative risks of 12.8 and 11 respectively compared to a risk of 4.3 with NSAIDs alone (Masclee et al. Gastroenterology 2014; 147:784-92.)",
      "source": {
        "label": "Warfarin-NSAIDs clinical decision support algorithm",
        "url": "https://ddi-cds.org/warfarin-nsaids/"
      },
      "suggestions": [
        {
          "label": "Assess risk and take action if necessary."
        }
      ]
    }
  ]
}
~~~

* Basic - Digoxin + Cyclosporine Cards (Without `filter-out-repeated-alerts`)
~~~
{
  "cards": [
    {
      "summary": "Potential Drug-Drug Interaction between digoxin (Digoxin 0.2 MG Oral Capsule) and cyclosporine (Cyclosporine 100 MG)",
      "indicator": "warning",
      "detail": "Increased risk of digoxin toxicity. Assess risk and take action if necessary. \nDigoxin toxicity is potentially serious. The clinical consequences may include anorexia, nausea, vomiting, visual changes, and cardiac arrhythmias. \nThe mechanism of this interaction appears to be mediated through P-glycoprotein inhibition by cyclosporine. P-glycoprotein is a major transporter for digoxin efflux. \nunknown. \nunknown.",
      "source": {
        "label": "Potential Drug-Drug Interaction Clinical Decision Support",
        "url": "http://hl7.org/fhir/ig/PDDI-CDS"
      },
      "suggestions": [
        {
          "label": "Consultation",
          "actions": [
            {
              "type": "create",
              "description": "Request communication with digoxin prescriber",
              "resource": {
                "resourceType": "ProcedureRequest",
                "id": "70ef559c-a02d-463d-8505-9beb9c2629c3",
                "status": "draft",
                "intent": "order",
                "code": {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "11429006",
                      "display": "Consultation"
                    }
                  ],
                  "text": "Consultation"
                },
                "subject": {
                  "reference": "f001"
                }
              }
            }
          ]
        },
        {
          "label": "Cancel digoxin",
          "actions": [
            {
              "type": "delete",
              "description": "Discontinue digoxin order"
            }
          ]
        }
      ]
    },
    {
      "summary": "Patient does not have digoxin level on record within the last 30 days. ",
      "indicator": "warning",
      "detail": "Initiating cyclosporine is expected to increase digoxin levels. For patients without a reliable plasma digoxin concentration in normal range, use only if benefits outweight risks. Extreme caution and close monitoring is necessary.",
      "source": {
        "label": "Potential Drug-Drug Interaction Clinical Decision Support",
        "url": "http://hl7.org/fhir/ig/PDDI-CDS"
      },
      "suggestions": [
        {
          "label": "Digoxin Level",
          "actions": [
            {
              "type": "create",
              "description": "Order digoxin trough within 24 hours from the initiation of cyclosporine",
              "resource": {
                "resourceType": "ProcedureRequest",
                "id": "79d64211-25f6-4e8c-babe-856816127d1b",
                "status": "draft",
                "intent": "order",
                "code": {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "269872007",
                      "display": "Serum digoxin measurement"
                    }
                  ],
                  "text": "Serum digoxin measurement"
                },
                "subject": {
                  "reference": "f001"
                }
              }
            }
          ]
        },
        {
          "label": "New Digoxin",
          "actions": [
            {
              "type": "create",
              "description": "Preemptively reduce digoxin dose with new order ",
              "resource": {
                "resourceType": "MedicationRequest",
                "id": "3c428362-5646-4131-9f96-937a7df5dbf4",
                "intent": "order",
                "medicationCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                      "code": "315819",
                      "display": "Digoxin 0.125 MG"
                    }
                  ],
                  "text": "Digoxin 0.125 MG"
                },
                "subject": {
                  "reference": "f001"
                }
              }
            }
          ]
        }
      ],
      "links": [
        {
          "label": "digoxin-cyclosporine PDDI knowledge artifact",
          "url": "http://hl7.org/fhir/ig/PDDI-CDS/derived-from#digoxin-cyclosporine-knowledge-artifact"
        },
        {
          "label": "(Dorian et al. Clin Invest Med 1988; 11(2):108-112) ",
          "url": "http://hl7.org/fhir/ig/PDDI-CDS/citation#dorian1988"
        },
        {
          "label": "(Dorian et al. Transplant Proc. 1987; 19(1):1825-1827)",
          "url": "http://hl7.org/fhir/ig/PDDI-CDS/citation#dorian#1987"
        }
      ]
    },
    {
      "summary": "Within 100 days, the patient has had electrolyte and serum creatinine levels checked, and they are not on a potassium sparing or loop diuretic.",
      "indicator": "info",
      "detail": "(Potassium: 3.6mEq/L and 2020-04-28)\n (Magnesium: 0.8mmol/L and 2020-04-28)\n (Calcium: 8.6mg/dL and 2020-04-28)\n",
      "source": {
        "label": "Potential Drug-Drug Interaction Clinical Decision Support",
        "url": "http://hl7.org/fhir/ig/PDDI-CDS"
      },
      "suggestions": [
        {
          "label": "Serum Creatinine",
          "actions": [
            {
              "type": "create",
              "description": "Order for serum creatinine",
              "resource": {
                "resourceType": "ProcedureRequest",
                "id": "85d53af2-22ec-4441-8ecf-f71879779f2a",
                "status": "draft",
                "intent": "order",
                "code": {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": " 313822004",
                      "display": "Corrected serum creatinine"
                    }
                  ],
                  "text": "Serum Creatinine"
                },
                "subject": {
                  "reference": "f001"
                }
              }
            }
          ]
        },
        {
          "label": "Electrolyte Panel",
          "actions": [
            {
              "type": "create",
              "description": "Order for electrolyte panel",
              "resource": {
                "resourceType": "ProcedureRequest",
                "id": "8c6514e3-1d47-47b6-87b3-fc53ce8f6eb2",
                "status": "draft",
                "intent": "order",
                "code": {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "271236005",
                      "display": "Serum potassium level"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "312475002",
                      "display": "Plasma magnesium level"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "390963002",
                      "display": "Plasma calcium level"
                    }
                  ],
                  "text": "Electrolyte Panel"
                },
                "subject": {
                  "reference": "f001"
                }
              }
            }
          ]
        }
      ],
      "links": [
        {
          "label": "digoxin-cyclosporine PDDI knowledge artifact",
          "url": "http://hl7.org/fhir/ig/PDDI-CDS/derived-from#digoxin-cyclosporine-knowledge-artifact"
        },
        {
          "label": "(Lip et al. Postgrad Med J. 1993; 69(811):337)",
          "url": "http://hl7.org/fhir/ig/PDDI-CDS/citation#lip1993"
        },
        {
          "label": "(Digoxin-FDA [prescribing information] NDA 20405/S-004)",
          "url": "http://hl7.org/fhir/ig/PDDI-CDS/citation#nda20405"
        }
      ]
    }
  ]
}
~~~

### Advanced Implementation


The Advanced Implementation is a proposed target to optimize PDDI CDS artifacts. It builds on the [Basic Implementation](#basic-implementation); however, implementors MUST select either Basic or Advanced Implementation and *not* both. This section does not provide a comprehensive overview of the implementation but highlights deviations from the Basic Implementation above. 


Differences between the Basic and Advanced Implementations include:

1. Defining two CDS Hooks triggers in CPOE workflow (i.e., `order-select` and `order-sign`)

2. Creating a `order-select` specification 

3. Modify `order-sign` specification

4. Creating separate but coordinated Order Select and Order Sign Services

> *Note:* The Advanced Implementation requires two separate, but *coordinated,* services for standards' precision, logic flexibility, and to avoid the need for CDS service state.


#### Advanced – CPOE Workflow
{:.no_toc}

Different contextual factors are available and needed at different times during the medication order process (Figure 5). To align clinicians' information needs with PDDI information, the Advanced Implementation *defines* two separate hook trigger events in the medication order workflow:

1. Selecting a drug product to include in medication order (`order-select`)

2. Accepting or signing a single medication order (`order-sign`)


<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 5: CPOE Workflow Example </strong></figcaption>
  <img src="CPOE_workflow.svg" class="figure-img img-responsive img-rounded center-block" alt="CPOE_workflow.svg" />
</figure>

#### Advanced – Summary of Operations
{:.no_toc}

Coordinating the Order Select Service with the Order Sign Service is a key aspect of the Advanced Implementation. Figure 6 depicts the summary of operations that coordinates the Order Select and Order Sign Services.

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 6: Advanced – PDDI CDS Service Summary </strong></figcaption>
  <img src="advanced-pddi-cds-service.png" class="figure-img img-responsive img-rounded center-block" alt="Advanced_Summary.svg" />
</figure>

#### CDS Hooks
{:.no_toc}


#### Advanced – order-select CDS Service Discovery response example
{:.no_toc}

~~~
 {
  "services": [
    {
      "hook": "order-select",
      "name": "PlanDefinition - Warfarin NSAIDs Recommendation Workflow",
      "title": "Warfarin NSAIDs Recommendation",
      "extension": {
        "configuration-items": [
          {
            "code": <an identifier for the configuration option>,
            "type": <data type of the configuration option, e.g. boolean>,
            "name": <human readable name of the configuration option>,
            "description": <human readable description of the configuration option>
          },

          ... other optional configuration options ...
        ]
      },
      "id": "warfarin-nsaids-cds-select",
      "prefetch": {
        "item1": "Patient?_id={{context.patientId}}",
        "item2": "MedicationRequest?patient={{context.patientId}}&authoredon=ge2019-12-11",
        "item3": "MedicationAdministration?patient={{context.patientId}}&effective-time=ge2019-12-11",
        "item4": "MedicationDispense?patient={{context.patientId}}&whenhandedover=ge2019-12-11",
        "item5": "MedicationStatement?patient={{context.patientId}}&effective=ge2019-12-11",
        "item6": "Condition?patient={{context.patientId}}"
      }
    },
    {
      "hook": "order-sign",
      "name": "PlanDefinition - Warfarin NSAIDs Recommendation Workflow",
      "title": "Warfarin NSAIDs Recommendation",
      "extension": {
        "configuration-items": [
          {
            "code": <an identifier for the configuration option>,
            "type": <data type of the configuration option, e.g. boolean>,
            "name": <human readable name of the configuration option>,
            "description": <human readable description of the configuration option>
          },

          ... other configuration options ...
        ]
      },
      "id": "warfarin-nsaids-cds-sign",
      "prefetch": {
        "item1": "Patient?_id={{context.patientId}}",
        "item2": "MedicationRequest?patient={{context.patientId}}&authoredon=ge2019-12-11",
        "item3": "MedicationAdministration?patient={{context.patientId}}&effective-time=ge2019-12-11",
        "item4": "MedicationDispense?patient={{context.patientId}}&whenhandedover=ge2019-12-11",
        "item5": "MedicationStatement?patient={{context.patientId}}&effective=ge2019-12-11",
        "item6": "Condition?patient={{context.patientId}}"
      }
    }
  ]
}

~~~

#### Advanced – CDS Hooks Request
{:.no_toc}

The Advanced Implementation specifies the use of both the `order-select` and `order-sign` CDS Hooks during a single medication order task.


**Context** 
{:.no_toc}

The `context` element of the `order-select` CDS Hooks request is identical to the `order-sign` specification used in the Basic Implementation. For details on the specifications are below.


**order-select 1.0**
{:.no_toc}

Field | Optionality | Prefetch Token | Type | Description
----- | -------- | :----: | :----: | ----
`userId` | REQUIRED | Yes | *string* | The id of the current user. For this hook, the user is expected to be of type Practitioner. For example, `Practitioner/123Describe`
`patientId` | REQUIRED | Yes | *string* | The FHIR Patient.id of the current patient 
`encounterId` | OPTIONAL | Yes | *string* | The FHIR Encounter.id of the current encounter
`selections`  | REQUIRED | No | *array* | The FHIR id of the newly selected order(s). The `selections` field references FHIR resources in the `draftOrders` Bundle. For example, `MedicationRequest/103`.
`draftOrders` | REQUIRED     | No |    *object* | R4 - FHIR Bundle of *draft* MedicationRequest resource for the current order entry task


**order-sign 1.0**
 {:.no_toc}


 Field       | Optionality        |  Prefetch Token     |Type  | Description 
 :------------- |:-------------:|:-------: |:-----:| :-----------------
 `userId` | REQUIRED | Yes | *string* | The id of the current user. For this hook, the user is expected to be of type Practitioner. For example, `Practitioner/123Describe`
 `patientId`     | REQUIRED | Yes|string | The FHIR Patient.id of the current patient in context 
 `encounterId`     | OPTIONAL    | Yes |   *string* | The FHIR Encounter.id of the current encounter in context 
 `draftOrders` | REQUIRED     | No |    *object* | R4 - FHIR Bundle of *draft* MedicationRequest resource for the current order entry task

**Extension**
{:.no_toc}

PDDI Configuration Items
{:.no_toc}
The CDS Service MUST process configuration options sent as within an extension resource with the CDS Hooks request in the field `configuration-items`. There are two standard configuration options that the service and client MUST use for coordination during PDDI CDS:  `cache-for-order-sign-filtering` (only used in `order-select`), `filter-out-repeated-alerts` (only used in `order-sign`). All of these configuration options accept Boolean values and are required for the advanced implementation. The `cache-for-order-sign-filtering` option is used to cache the medication resource during `order-select` and is used as a reference during `order-sign` if `filter-out-repeated-alerts` is set to TRUE. The `filter-out-repeated-alerts` option is used to hide card results if they were shown in the `order-select` results. 

At the present time, there are no other standard configuration options for the basic implementation of PDDI CDS. Balloting such options as a standard is for future work. While not a recommendation, some examples can be shown. One example would be a configuration such as `alert-non-serious` that accepts accepts a Boolean value indicating to the CDS service if it should provide alerts for PDDIs that have an indicator other than 'serious'. Another example would be a configuration such as `show-evidence-support`  indicating to the CDS service that it should provide more detailed evidence support for its alerts. 


**Prefetch**
{:.no_toc}

The order entry task is split into two separate CDS Hooks events (i.e., services). The prefetch template for the `order-select` service MUST include medication resources but could include Condition or other resources important for the service to assess for PDDIs.


**CDS Hooks Request Example**
{:.no_toc}

* [Request test data](testdata.html)


#### Advanced – FHIR Server Request
{:.no_toc}

The parse and pre-process event for a `order-select` request in the Advanced Implementation is identical to what occurs with `order-sign` for the Basic Implementation. Processing of `order-sign` for the Advanced Implementation service is slightly different. During the parse and pre-process phase the CDS service checks the medication that was finally ordered against the medication that was cached during `order-select` if `cache-for-order-sign-filtering` was set to TRUE. If `filter-out-repeated-alerts` is also set to TRUE during `order-sign` then repeated alert cards will not be returned. 


<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 7: Advanced – Parse and Pre-process for Order Select/Order Sign Service </strong></figcaption>
  <img src="advanced-parse-pre-process.png" class="figure-img img-responsive img-rounded center-block" alt="Parse_pre-process_prescribe.svg" />
</figure>



#### Advanced – CDS Hooks Response and Card Display
{:.no_toc}

**Example: Advanced – CDS Hooks Response**

~~~
{
  "cards": [
    {
      "summary": "Potential drug-drug interaction between naproxen 500mg tablet and warfarin 5mg tablet",
      "indicator": "critical",
      "detail": "Non-steroidal anti-inflammatory drugs (NSAIDs) have antiplatelet effects which increase the bleeding risk when combined with oral anticoagulants such as warfarin.",
      
snipped for brevity        
~~~

**Card Display Example**

* Advanced – Warfarin + NSAIDs Cards (Without `filter-out-repeated-alerts`)

~~~
{
  "cards": [
    {
      "summary": "Potential Drug-Drug Interaction between warfarin (Warfarin Sodium 0.5 MG Oral Tablet) and NSAID (Ketorolac Tromethamine 10 MG Oral Tablet).",
      "indicator": "warning",
      "detail": "Increased risk of bleeding. \nBleeding is a serious potential clinical consequence because it can result in death, life-threatening hospitalization, and disability. \nNon-steroidal anti-inflammatory drugs (NSAIDs) have antiplatelet effects which increase the bleeding risk when combined with oral anticoagulants such as warfarin. The antiplatelet effect of NSAIDs lasts only as long as the NSAID is present in the circulation, unlike aspirin’s antiplatelet effect, which lasts for up to 2 weeks after aspirin is discontinued. NSAIDs also can cause peptic ulcers and most of the evidence for increased bleeding risk with NSAIDs plus warfarin is due to upper gastrointestinal bleeding (UGIB). \nunknown. \n unknown.",
      "source": {
        "label": "Warfarin-NSAIDs clinical decision support algorithm",
        "url": "https://ddi-cds.org/warfarin-nsaids/"
      },
      "suggestions": [
        {
          "label": "Assess risk and take action if necessary.",
          "actions": [
            {
              "type": "delete",
              "description": "If the NSAID is being used as an analgesic or antipyretic, it would be prudent to use an alternative such as acetaminophen. In some people, acetaminophen can increase the anticoagulant effect of warfarin, so monitor the INR if acetaminophen is used in doses over 2 g/day for a few days. For more severe pain consider short-term opioids in place of the NSAID."
            }
          ]
        },
        {
          "label": "Substitute NSAID (Ketorolac Tromethamine 10 MG Oral Tablet) with APAP (Acetaminophen 325 MG Oral Tablet).",
          "actions": [
            {
              "type": "create",
              "description": "Order for APAP <2g per day (APAP 500 mg every 4-6 hours prn).",
              "resource": {
                "resourceType": "MedicationRequest",
                "id": "3f6b9b43-9354-4512-9883-a915417e2936",
                "intent": "order",
                "medicationCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                      "code": "313782",
                      "display": "Acetaminophen 325 MG Oral Tablet"
                    }
                  ],
                  "text": "Acetaminophen 325 MG Oral Tablet"
                },
                "subject": {
                  "reference": "f101"
                }
              }
            }
          ]
        },
        {
          "label": "Substitute NSAID (Ketorolac Tromethamine 10 MG Oral Tablet) with APAP (Acetaminophen 500 MG Oral Tablet).",
          "actions": [
            {
              "type": "create",
              "description": "Order for APAP <2g per day (APAP 500 mg every 4-6 hours prn).",
              "resource": {
                "resourceType": "MedicationRequest",
                "id": "d54e75a7-90ce-4ee7-90b6-63333c052648",
                "intent": "order",
                "medicationCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                      "code": "198440",
                      "display": "Acetaminophen 500 MG Oral Tablet"
                    }
                  ],
                  "text": "Acetaminophen 500 MG Oral Tablet"
                },
                "subject": {
                  "reference": "f101"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "summary": "Patient is not taking a proton pump inhibitor or misoprostol.",
      "indicator": "critical",
      "detail": "Proton pump inhibitors and misoprostol may reduce the risk of UGIB in patients receiving NSAIDs and warfarin.",
      "source": {
        "label": "Warfarin-NSAIDs clinical decision support algorithm",
        "url": "https://ddi-cds.org/warfarin-nsaids/"
      },
      "suggestions": [
        {
          "label": "Use only if benefit outweighs risk."
        }
      ]
    },
    {
      "summary": "Patient is 65 y/o or does have a history of upper gastrointestinal bleed (\"Acute duodenal ulcer with hemorrhage\" and 2020-03-01).",
      "indicator": "warning",
      "detail": "Patients with a history of UGIB or peptic ulcer may have an increased risk of UGIB from this interaction. The extent to which older age is an independent risk factor for UGIB due to these interactions is not firmly established, but UGIB in general is known to increase with age.",
      "source": {
        "label": "Warfarin-NSAIDs clinical decision support algorithm",
        "url": "https://ddi-cds.org/warfarin-nsaids/"
      },
      "suggestions": [
        {
          "label": "Use only if benefit outweighs risk."
        }
      ]
    },
    {
      "summary": "Patient is not concomitantly taking systemic corticosteroids, aldosterone antagonist, or high dose or multiple NSAIDs.",
      "indicator": "info",
      "detail": "Both corticosteroids and aldosterone antagonists have been shown to subsetantially increase the risk of UGIB in patients on NSAIDs, with relative risks of 12.8 and 11 respectively compared to a risk of 4.3 with NSAIDs alone (Masclee et al. Gastroenterology 2014; 147:784-92.)",
      "source": {
        "label": "Warfarin-NSAIDs clinical decision support algorithm",
        "url": "https://ddi-cds.org/warfarin-nsaids/"
      },
      "suggestions": [
        {
          "label": "Assess risk and take action if necessary."
        }
      ]
    }
  ]
}
~~~

* Advanced – Warfarin + NSAIDs Cards (With `filter-out-repeated-alerts`)

~~~
{
  "cards": [
    {
      "summary": "An alert was filtered because this request is configured to filter alerts if they were presented previously in response to a prior CDS Hook request.",
      "indicator": "info",
      "detail": "Since filter-out-repeated-alerts was set to true in this CDS Hook request, the service is filtering out cards that were triggered by the same knowledge artifact when the physician reference display, encounter id, and patient id match between the order-select and order-sign requests.",
      "source": {}
    }
  ]
}
~~~

* Advanced - Digoxin + Cyclosporine Cards (Without `filter-out-repeated-alerts`)

~~~
{
  "cards": [
    {
      "summary": "Potential Drug-Drug Interaction between digoxin (Digoxin 0.2 MG Oral Capsule) and cyclosporine (Cyclosporine 100 MG)",
      "indicator": "warning",
      "detail": "Increased risk of digoxin toxicity. Assess risk and take action if necessary. \nDigoxin toxicity is potentially serious. The clinical consequences may include anorexia, nausea, vomiting, visual changes, and cardiac arrhythmias. \nThe mechanism of this interaction appears to be mediated through P-glycoprotein inhibition by cyclosporine. P-glycoprotein is a major transporter for digoxin efflux. \nunknown. \nunknown.",
      "source": {
        "label": "Potential Drug-Drug Interaction Clinical Decision Support",
        "url": "http://hl7.org/fhir/ig/PDDI-CDS"
      },
      "suggestions": [
        {
          "label": "Consultation",
          "actions": [
            {
              "type": "create",
              "description": "Request communication with digoxin prescriber",
              "resource": {
                "resourceType": "ProcedureRequest",
                "id": "70ef559c-a02d-463d-8505-9beb9c2629c3",
                "status": "draft",
                "intent": "order",
                "code": {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "11429006",
                      "display": "Consultation"
                    }
                  ],
                  "text": "Consultation"
                },
                "subject": {
                  "reference": "f001"
                }
              }
            }
          ]
        },
        {
          "label": "Cancel digoxin",
          "actions": [
            {
              "type": "delete",
              "description": "Discontinue digoxin order"
            }
          ]
        }
      ]
    },
    {
      "summary": "Patient does not have digoxin level on record within the last 30 days. ",
      "indicator": "warning",
      "detail": "Initiating cyclosporine is expected to increase digoxin levels. For patients without a reliable plasma digoxin concentration in normal range, use only if benefits outweight risks. Extreme caution and close monitoring is necessary.",
      "source": {
        "label": "Potential Drug-Drug Interaction Clinical Decision Support",
        "url": "http://hl7.org/fhir/ig/PDDI-CDS"
      },
      "suggestions": [
        {
          "label": "Digoxin Level",
          "actions": [
            {
              "type": "create",
              "description": "Order digoxin trough within 24 hours from the initiation of cyclosporine",
              "resource": {
                "resourceType": "ProcedureRequest",
                "id": "79d64211-25f6-4e8c-babe-856816127d1b",
                "status": "draft",
                "intent": "order",
                "code": {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "269872007",
                      "display": "Serum digoxin measurement"
                    }
                  ],
                  "text": "Serum digoxin measurement"
                },
                "subject": {
                  "reference": "f001"
                }
              }
            }
          ]
        },
        {
          "label": "New Digoxin",
          "actions": [
            {
              "type": "create",
              "description": "Preemptively reduce digoxin dose with new order ",
              "resource": {
                "resourceType": "MedicationRequest",
                "id": "3c428362-5646-4131-9f96-937a7df5dbf4",
                "intent": "order",
                "medicationCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                      "code": "315819",
                      "display": "Digoxin 0.125 MG"
                    }
                  ],
                  "text": "Digoxin 0.125 MG"
                },
                "subject": {
                  "reference": "f001"
                }
              }
            }
          ]
        }
      ],
      "links": [
        {
          "label": "digoxin-cyclosporine PDDI knowledge artifact",
          "url": "http://hl7.org/fhir/ig/PDDI-CDS/derived-from#digoxin-cyclosporine-knowledge-artifact"
        },
        {
          "label": "(Dorian et al. Clin Invest Med 1988; 11(2):108-112) ",
          "url": "http://hl7.org/fhir/ig/PDDI-CDS/citation#dorian1988"
        },
        {
          "label": "(Dorian et al. Transplant Proc. 1987; 19(1):1825-1827)",
          "url": "http://hl7.org/fhir/ig/PDDI-CDS/citation#dorian#1987"
        }
      ]
    },
    {
      "summary": "Within 100 days, the patient has had electrolyte and serum creatinine levels checked, and they are not on a potassium sparing or loop diuretic.",
      "indicator": "info",
      "detail": "(Potassium: 3.6mEq/L and 2020-04-28)\n (Magnesium: 0.8mmol/L and 2020-04-28)\n (Calcium: 8.6mg/dL and 2020-04-28)\n",
      "source": {
        "label": "Potential Drug-Drug Interaction Clinical Decision Support",
        "url": "http://hl7.org/fhir/ig/PDDI-CDS"
      },
      "suggestions": [
        {
          "label": "Serum Creatinine",
          "actions": [
            {
              "type": "create",
              "description": "Order for serum creatinine",
              "resource": {
                "resourceType": "ProcedureRequest",
                "id": "85d53af2-22ec-4441-8ecf-f71879779f2a",
                "status": "draft",
                "intent": "order",
                "code": {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": " 313822004",
                      "display": "Corrected serum creatinine"
                    }
                  ],
                  "text": "Serum Creatinine"
                },
                "subject": {
                  "reference": "f001"
                }
              }
            }
          ]
        },
        {
          "label": "Electrolyte Panel",
          "actions": [
            {
              "type": "create",
              "description": "Order for electrolyte panel",
              "resource": {
                "resourceType": "ProcedureRequest",
                "id": "8c6514e3-1d47-47b6-87b3-fc53ce8f6eb2",
                "status": "draft",
                "intent": "order",
                "code": {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "271236005",
                      "display": "Serum potassium level"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "312475002",
                      "display": "Plasma magnesium level"
                    },
                    {
                      "system": "http://snomed.info/sct",
                      "code": "390963002",
                      "display": "Plasma calcium level"
                    }
                  ],
                  "text": "Electrolyte Panel"
                },
                "subject": {
                  "reference": "f001"
                }
              }
            }
          ]
        }
      ],
      "links": [
        {
          "label": "digoxin-cyclosporine PDDI knowledge artifact",
          "url": "http://hl7.org/fhir/ig/PDDI-CDS/derived-from#digoxin-cyclosporine-knowledge-artifact"
        },
        {
          "label": "(Lip et al. Postgrad Med J. 1993; 69(811):337)",
          "url": "http://hl7.org/fhir/ig/PDDI-CDS/citation#lip1993"
        },
        {
          "label": "(Digoxin-FDA [prescribing information] NDA 20405/S-004)",
          "url": "http://hl7.org/fhir/ig/PDDI-CDS/citation#nda20405"
        }
      ]
    }
  ]
}
~~~

* Advanced – Digoxin + Cyclosporine Cards (With `filter-out-repeated-alerts`)

~~~
{
  "cards": [
    {
      "summary": "An alert was filtered because this request is configured to filter alerts if they were presented previously in response to a prior CDS Hook request.",
      "indicator": "info",
      "detail": "Since filter-out-repeated-alerts was set to true in this CDS Hook request, the service is filtering out cards that were triggered by the same knowledge artifact when the physician reference display, encounter id, and patient id match between the order-select and order-sign requests.",
      "source": {}
    }
  ]
}
~~~


### Basic Implementation for the Warfarin + NSAIDs Knowledge Artifact

Figure 8 depicts how a PDDI CDS implementer would translate a minimal information model narrative to a semi-structured knowledge artifact. The Basic Implementation uses a single CDS service call and response with the `order-sign` hook. The decision tree results in three warning indicators (i.e., green, orange, red) and contextual factors that MAY be passed to the clinician.  After processing the CDS Hooks `order-sign` request, the CDS service MUST return CDS Hooks Cards that MAY include actions with associated FHIR resources. Figure 9 builds on Figure 8 by depicting a Card display example within the order entry workflow. The decision points, `order-sign` request, and Card(s) response are discussed further in the sections below.


<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 8: Basic – Warfarin + NSAIDs Semi-Structured Knowledge </strong></figcaption>
  <a href = "Basic_Warfarin_NSAID.svg" target ="_blank" > <img src= "Basic_Warfarin_NSAID.svg" class="figure-img img-responsive img-rounded center-block" alt="Basic_Warfarin_NSAID.svg" /></a>
</figure>

#### Decision Points Summary
{:.no_toc}

Many PDDI CDS scenarios have similar drug and patient related decision points. Implementers SHOULD develop CQL artifacts that work in conjunction with the `order-sign` context and prefetch to support the base decision points. The Warfarin + NSAIDs PDDI exemplar as three main decision blocks that include:

1. whether the prescribed NSAID is topical diclofenac,

2. whether the patient is taking a proton pump inhibitor, and 

3. the presence or absence of risk factors involving age, exacerbating medications, and history of upper gastrointestinal bleed


#### CDS Hooks Request
{:.no_toc}

The `order-sign` request includes `context` and `prefetch` elements with FHIR resource attributes or entire resources. The contents of these elements for the Warfarin + NSAIDs CDS artifact are shown below.

**Context**
{:.no_toc}

* [`order-sign 1.0`](https://cds-hooks.org/hooks/order-sign/) 

**Prefetch**
{:.no_toc}

* Rolling 100-day look-back period for medication resources including:
	* [MedicationRequest](https://www.hl7.org/fhir/medicationrequest.html)
	* [MedicationDispense](https://www.hl7.org/fhir/medicationdispense.html)
	* [MedicationStatement](https://www.hl7.org/fhir/medicationstatement.html)
	* [MedicationAdministration](https://www.hl7.org/fhir/medicationadministration.html)

> *Note:* The use of multiple medication resources is to ensure a comprehensive capture of medications the patient may be taking. In some cases the implementing institution may only have access to MedicationRequest (prescription order), and in other cases they may have access to several resources for a specific medication intervention (e.g., prescription order from medical office, prescription product picked up from pharmacy). The 100-day look-back period is a general starting point. Implementors SHOULD refine this based on the available data. For example, MedicationAdministration is typically documented in the inpatient setting when a nurse administers a medication. This data source may be a more reliable proxy for blood concentrations and could be used to refine CDS logic. 

* Age of patient on current date.
    * [Patient](https://www.hl7.org/fhir/patient.html)
    
* Rolling 5-year look-back period for history of upper gastrointestinal bleed.
    * [Condition](https://www.hl7.org/fhir/condition.html)
    

#### CDS Hooks Cards
{:.no_toc}


<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 9: Basic – Warfarin + NSAIDs Response Card Example </strong></figcaption>
  <a href = "Basic_W_N_Cards.svg" target ="_blank" > <img src="Basic_W_N_Cards.svg" class="figure-img img-responsive img-rounded center-block" alt="Basic_W_N_Cards.svg" /></a>
</figure>


#### Card Actions
{:.no_toc}

The CDS Hooks service response supports providing actionable information to clinicians at the time of medication order entry. A response Card has an `action` element within the suggestion attribute. The `action` element is defined by three types including `create, update, and delete.` Depending on the type of action, resources may be provided that facilitate the suggestion. For example, if a suggestion recommends substituting substitute acetaminophen for naproxen, a `create` action may be used to apply a MedicationRequest for acetaminophen to the current order entry task. The actions, types and associated resources are listed below.  

* `create` 
    * Substituting NSAID for acetaminophen – MedicationRequest for acetaminophen 
    * Adding proton pump inhibitor – MedicationRequest for proton pump inhibitor
* `update` 
* `delete`
    * Remove current NSAID order 

> *Note:* These actions are options that SHOULD be customized to an institutions needs and capabilities. 

### Advanced Implementation - Warfarin + NSAIDs Knowledge Artifact

The Advanced Implementation for the Warfarin + NSAIDs artifact is split into two separate hooks and services. Figures 10 and 11 depict the decision tree for warning indicators (i.e., green, orange, red) and contextual factors for both Hooks (i.e., `order-select` and `order-sign`). Figure 10 provides a Card display example for each CDS Hooks instance within the order entry workflow. In the provided Card display example, the clinician decided to order the NSAID medication but adds a proton pump inhibitor, in response to the card suggestion. This action results in a downgrade of the response card (i.e., "critical" – red to "warning" – orange). 

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 10: Warfarin + NSAIDs order-select logic </strong></figcaption>
  <a href = "warfarin-nsaid-select.png" target ="_blank" > <img src="warfarin-nsaid-select.png" class="figure-img img-responsive img-rounded center-block" alt="Warfarin_NSAID_select.svg" /></a>
</figure>




<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 11: Warfarin + NSAIDs order-sign logic </strong></figcaption>
  <a href = "warfarin-nsaid-sign.png" target ="_blank" > <img src="warfarin-nsaid-sign.png" class="figure-img img-responsive img-rounded center-block" alt="Warfarin_NSAID_prescribe.svg" /></a>
</figure>


#### CDS Hooks request
{:.no_toc}


**Context**
{:.no_toc}

**order-select 1.0.**
{:.no_toc}

Field | Optionality | Prefetch Token | Type | Description
----- | -------- | :----: | :----: | ----
`userId` | REQUIRED | Yes | *string* | The id of the current user. For this hook, the user is expected to be of type Practitioner. For example, `Practitioner/123Describe`
`patientId` | REQUIRED | Yes | *string* | The FHIR Patient.id of the current patient 
`encounterId` | OPTIONAL | Yes | *string* | The FHIR Encounter.id of the current encounter
`selections`  | REQUIRED | No | *array* | The FHIR id of the newly selected order(s). The `selections` field references FHIR resources in the `draftOrders` Bundle. For example, `MedicationRequest/103`.
`draftOrders` | REQUIRED     | No |    *object* | R4 - FHIR Bundle of *draft* MedicationRequest resource for the current order entry task


**order-sign 1.0**
 {:.no_toc}


 Field       | Optionality        |  Prefetch Token     |Type  | Description 
 :------------- |:-------------:|:-------: |:-----:| :-----------------
 `userId` | REQUIRED | Yes | *string* | The id of the current user. For this hook, the user is expected to be of type Practitioner. For example, `Practitioner/123Describe`
 `patientId`     | REQUIRED | Yes|string | The FHIR Patient.id of the current patient in context 
 `encounterId`     | OPTIONAL    | Yes |   *string* | The FHIR Encounter.id of the current encounter in context 
 `draftOrders` | REQUIRED     | No |    *object* | R4 - FHIR Bundle of *draft* MedicationRequest resource for the current order entry task


**order-select prefetch**
{:.no_toc}

* Rolling 100-day look-back period for medication resources including:
    * [MedicationRequest](https://www.hl7.org/fhir/medicationrequest.html)
    * [MedicationDispense](https://www.hl7.org/fhir/medicationdispense.html)
    * [MedicationStatement](https://www.hl7.org/fhir/medicationstatement.html)
    * [MedicationAdministration](https://www.hl7.org/fhir/medicationadministration.html)

**order-sign prefetch**
{:.no_toc}

* Age of patient on current date.
    * [Patient](https://www.hl7.org/fhir/patient.html)
    
* Rolling 5-year look-back period for history of upper gastrointestinal bleed.
    * [Condition](https://www.hl7.org/fhir/condition.html)
    

#### CDS Hooks Cards
{:.no_toc}


<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 12: Warfarin + NSAIDs Cards </strong></figcaption>
  <a href = "Advanced_W_N_Cards.svg" target ="_blank" > <img src="Advanced_W_N_Cards.svg" class="figure-img img-responsive img-rounded center-block" alt="Advanced_W_N_Cards.svg" /></a>
</figure>

### Basic Implementation for the Digoxin + Cyclosporine Knowledge Artifact

Figure 13 depicts how a PDDI CDS implementer would translate a minimal information model narrative to a semi-structured knowledge artifact. The Basic Implementation uses a single CDS service call and response with the `order-sign` hook. The decision tree results in three warning indicators (i.e., green, orange, red) and contextual factors that MAY be passed to the clinician.  After processing the CDS Hooks `order-sign` request, the CDS service MUST return CDS Hooks Cards that MAY include actions with associated FHIR resources. Figure 14 builds on Figure 13 by depicting a Card display example within the order entry workflow. The decision points, `order-sign` request, and Card(s) response are discussed further in the sections below.


<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 13: Basic – Digoxin + Cyclosporine Semi-Structured Knowledge </strong></figcaption>
  <a href = "Basic_Digoxin_Cyclosporine.svg" target ="_blank" > <img src= "Basic_Digoxin_Cyclosporine.svg" class="figure-img img-responsive img-rounded center-block" alt="Basic_Digoxin_Cyclosporine.svg" /></a>
</figure>

#### Decision Points Summary
{:.no_toc}

The Digoxin + Cyclosporine exemplar artifact has two main decision blocks:

1. whether the patient is taking digoxin and/or cyclosporine at the time of the current order for digoxin or cyclosporine, and

2. whether the patient has risk factors that may potentiate the risk of digitalis toxicity. 


#### CDS Hooks Request
{:.no_toc}

The `order-sign` request includes `context` and `prefetch` elements with FHIR resource attributes or entire resources. The contents of these elements for the Digoxin + Cyclosporine CDS artifact are shown below.

**Context**
{:.no_toc}

* [`order-sign 1.0`](https://cds-hooks.org/hooks/order-sign/) 

**Prefetch**
{:.no_toc}

* Rolling 100-day look-back period for medication resources including:
    * [MedicationRequest](https://www.hl7.org/fhir/medicationrequest.html)
    * [MedicationDispense](https://www.hl7.org/fhir/medicationdispense.html)
    * [MedicationStatement](https://www.hl7.org/fhir/medicationstatement.html)
    * [MedicationAdministration](https://www.hl7.org/fhir/medicationadministration.html)
    
* Rolling 100-day look-back period for digoxin concentration
    * [Observation](https://www.hl7.org/fhir/observation.html)

* Rolling 100-day look-back period for serum creatinine
    * [Observation](https://www.hl7.org/fhir/observation.html)
    
* Rolling 100-day look-back period for electrolytes including: potassium, magnesium, and calcium
    * [Observation](https://www.hl7.org/fhir/observation.html)
        

#### CDS Hooks Cards
{:.no_toc}

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 14: Basic – Digoxin + Cyclosporine Response Card Example </strong></figcaption>
  <a href = "Level_1_D_C_Cards.svg" target ="_blank" > <img src="Level_1_D_C_Cards.svg" class="figure-img img-responsive img-rounded center-block" alt="Level_1_D_C_Cards.svg" /></a>
</figure>

#### Card Actions
{:.no_toc}

The CDS Hooks service response supports providing actionable information to clinicians at the time of medication order entry. A response Card has an `action` element within the suggestion attribute. The `action` element is defined by three types including `create, update, and delete.` Depending on the type of action, resources may be provided that facilitate the suggestion. For example, if a suggestion recommends substituting acetaminophen for naproxen, a `create` action may be used to apply a MedicationRequest for acetaminophen to the current order entry task. The actions, types and associated resources are listed below.  

* `create` 
    * Adding order for digoxin level measure – ProcedureRequest for serum digoxin trough within 24 hours 
    * Add consultation for either prescriber of digoxin or cyclosporine depending on which the patient is currently taking – ProcedureRequest consultation
    * Add order for electrolyte panel(s) (i.e., calcium, magnesium, potassium) and renal function (e.g., eGRF and serum creatinine) – ProcedureRequest for labs to be drawn
* `update` 
    * Reduce digoxin order currenlty on the patient's profile – MedicationRequest for low-dose digoxin
* `delete`
    * Remove current order for digoxin or cyclosporine 

> *Note:* These actions are options that SHOULD be customized to an institutions needs and capabilities. 

### Advanced Implementation - Digoxin + Cyclosporine Knowledge Artifact

The Advanced Implementation for the Digoxin + Cyclosporine artifact is split into two separate hooks and services. Figures 15 and 16 depict the decision tree for warning indicators (i.e., green, orange, red) and contextual factors for both Hooks (i.e., `order-select` and `order-sign`). Figure 10 provides a Card display example for each CDS Hooks instance within the order entry workflow. In the provided Card display example, the clinician decided to order the NSAID medication but adds a proton pump inhibitor, in response to the card suggestion. This action results in a downgrade of the response card (i.e., "critical" – red to "warning" – orange). 

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 15: Digoxin + Cyclosporine order-select logic </strong></figcaption>
</figure>




<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 16: Digoxin + Cyclosporine order-sign logic </strong></figcaption>
  <a href = "digoxin-cylcosporine-sign.png" target ="_blank" > <img src="digoxin-cylcosporine-sign.png" class="figure-img img-responsive img-rounded center-block" alt="digoxin-cylcosporine-sign.png" /></a>
</figure>


#### CDS Hooks request
{:.no_toc}


**Context**
{:.no_toc}

**order-select 1.0.**
{:.no_toc}

Field | Optionality | Prefetch Token | Type | Description
----- | -------- | :----: | :----: | ----
`userId` | REQUIRED | Yes | *string* | The id of the current user. For this hook, the user is expected to be of type Practitioner. For example, `Practitioner/123Describe`
`patientId` | REQUIRED | Yes | *string* | The FHIR Patient.id of the current patient 
`encounterId` | OPTIONAL | Yes | *string* | The FHIR Encounter.id of the current encounter
`selections`  | REQUIRED | No | *array* | The FHIR id of the newly selected order(s). The `selections` field references FHIR resources in the `draftOrders` Bundle. For example, `MedicationRequest/103`.
`draftOrders` | REQUIRED     | No |    *object* | R4 - FHIR Bundle of *draft* MedicationRequest resource for the current order entry task


**order-sign 1.0**
 {:.no_toc}


 Field       | Optionality        |  Prefetch Token     |Type  | Description 
 :------------- |:-------------:|:-------: |:-----:| :-----------------
 `userId` | REQUIRED | Yes | *string* | The id of the current user. For this hook, the user is expected to be of type Practitioner. For example, `Practitioner/123Describe`
 `patientId`     | REQUIRED | Yes|string | The FHIR Patient.id of the current patient in context 
 `encounterId`     | OPTIONAL    | Yes |   *string* | The FHIR Encounter.id of the current encounter in context 
 `draftOrders` | REQUIRED     | No |    *object* | R4 - FHIR Bundle of *draft* MedicationRequest resource for the current order entry task


**order-select prefetch**
{:.no_toc}

* Rolling 100-day look-back period for medication resources including:
    * [MedicationRequest](https://www.hl7.org/fhir/medicationrequest.html)
    * [MedicationDispense](https://www.hl7.org/fhir/medicationdispense.html)
    * [MedicationStatement](https://www.hl7.org/fhir/medicationstatement.html)
    * [MedicationAdministration](https://www.hl7.org/fhir/medicationadministration.html)

**order-sign prefetch**
{:.no_toc}

* Rolling 100-day look-back period for digoxin concentration
    * [Observation](https://www.hl7.org/fhir/observation.html)

* Rolling 100-day look-back period for serum creatinine
    * [Observation](https://www.hl7.org/fhir/observation.html)
    
* Rolling 100-day look-back period for electrolytes including: potassium, magnesium, and calcium
    * [Observation](https://www.hl7.org/fhir/observation.html)


#### CDS Hooks Cards
{:.no_toc}


<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 17: Digoxin + Cyclosporine Cards </strong></figcaption>
  <a href = "Level_2_D_C_Cards.svg" target ="_blank" > <img src="Level_2_D_C_Cards.svg" class="figure-img img-responsive img-rounded center-block" alt="Level_2_D_C_Cards.svg" /></a>
</figure>

### CDS Message Filtering

The following tables have been created to better conceptualize the various scenarios where message filtering may occur 
for the clinician during `order-sign`. The assumptions used when creating these tables are that `cache-for-order-sign-filtering` 
and `filter-out-repeated-alerts` for both `order-select` and `order-sign` are set to TRUE. During `order-select` the 
following items are cached in order to properly handle message filtering.

* Ordering Clinician
* Patient
* Encounter
* Knowledge Artifact URL
* Base 64 encoded medication resource specified in `selections`
* An ID created by concatenating the system and code from the “medicationCodeableConcept” of the medication resource (used for retrieving a medication resource during `order-sign`)
* Base 64 encoded summary, detail, and indicator from the CDS cards returned

#### Scenario - Order-select with 1 medication that triggers a branch
{:.no_toc}

Clinician A calls order-select with 1 medication in `draftOrders` that triggers a branch of the rules then calls order-sign.
> *Note:* CDS hooks do not couple `indicators` with `suggestions`.

| Indicator for the branch triggered | Service suggested action | Clinician accepts suggested action | Will alert be filtered | Description                                                                                        |
| ---------------------------------- | ------------------------ | ---------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------- |
| Info                               | Create/Update/Delete     | FALSE                              | TRUE                   | Only message received is non-serious, no action is taken and alert will be filtered on order-sign  |
| Info                               | Create                   | TRUE                               | FALSE                  | If action taken does not trigger a new order-select call, alert will not be filtered on order-sign |
| Info                               | Update                   | TRUE                               | FALSE                  | If action taken does not trigger a new order-select call, alert will not be filtered on order-sign |
| Info                               | Delete                   | TRUE                               | FALSE                  | If action taken does not trigger a new order-select call, alert will not be filtered on order-sign |
| Warning                            | Create/Update/Delete     | FALSE                              | TRUE                   | Warning message received, no additional action taken, alert will be filtered on order-sign         |
| Warning                            | Create                   | TRUE                               | FALSE                  | If action taken does not trigger a new order-select call, alert will not be filtered on order-sign |
| Warning                            | Update                   | TRUE                               | FALSE                  | If action taken does not trigger a new order-select call, alert will not be filtered on order-sign |
| Warning                            | Delete                   | TRUE                               | FALSE                  | If action taken does not trigger a new order-select call, alert will not be filtered on order-sign |
| Critical                          | Create/Update/Delete     | FALSE                              | TRUE                   | Critical message received, no additional action taken, alert will be filtered on order-sign       |
| Critical                          | Create                   | TRUE                               | FALSE                  | If action taken does not trigger a new order-select call, alert will not be filtered on order-sign |
| Critical                          | Update                   | TRUE                               | FALSE                  | If action taken does not trigger a new order-select call, alert will not be filtered on order-sign |
| Critical                          | Delete                   | TRUE                               | FALSE                  | If action taken does not trigger a new order-select call, alert will not be filtered on order-sign |


#### Scenario - Order-select with more than 1 medication that triggers a branch
{:.no_toc}

Each medication request specified in `selections` will be cached for message filtering on `order-sign`, this scenario will operate just as above.


#### Scenario - Order-select is called by 2 different clinicians before order-sign
{:.no_toc}

Clinician A goes through an `order-select` process, for some reason is not able to start the `order-sign` process immediately. Clinician B then goes through the `order-select` and `order-sign` process for the same patient.

| Branch triggered for clinician A | Branch triggered for clinician B | Will alert be filtered | Description                                                                           |
| -------------------------------- | -------------------------------- | ---------------------- | ------------------------------------------------------------------------------------- |
| Info                             | Info                             | FALSE                  | Because the clinician IDs are different the alerts will not be filtered on order-sign |
| Warning                          | Warning                          | FALSE                  | Because the clinician IDs are different the alerts will not be filtered on order-sign |
| Critical                        | Critical                        | FALSE                  | Because the clinician IDs are different the alerts will not be filtered on order-sign |
| Info                             | Warning                          | FALSE                  | Because the clinician IDs are different the alerts will not be filtered on order-sign |
| Info                             | Critical                        | FALSE                  | Because the clinician IDs are different the alerts will not be filtered on order-sign |
| Warning                          | Info                             | FALSE                  | Because the clinician IDs are different the alerts will not be filtered on order-sign |
| Warning                          | Critical                        | FALSE                  | Because the clinician IDs are different the alerts will not be filtered on order-sign |
| Critical                        | Info                             | FALSE                  | Because the clinician IDs are different the alerts will not be filtered on order-sign |
| Critical                        | Warning                          | FALSE                  | Because the clinician IDs are different the alerts will not be filtered on order-sign |

#### Scenario - Order-select is called more than once before order-sign by same the same clinician
{:.no_toc}

Clinician A starts the `order-select` process, gets interrupted and prevented from beginning the `order-sign` processes (potential network issues or other problems arise). Clinician A then goes through the `order-select` process again before completing `order-sign`.

| Branch triggered for both order-selects | Will alert be filtered | Description                                                                                                                                            |
| --------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Info                                    | TRUE                   | Message filtering is never performed on the messages returned from an order-select call. All messages will be filtered normally on the order-sign call |
| Warning                                 | TRUE                   | Message filtering is never performed on the messages returned from an order-select call. All messages will be filtered normally on the order-sign call |
| Critical                               | TRUE                   | Message filtering is never performed on the messages returned from an order-select call. All messages will be filtered normally on the order-sign call |


#### Scenario - Order-select is called multiple times with updates to the draft orders
{:.no_toc}
Clinician A starts the `order-select` process with 1 medication in the draft orders that triggers a rule set. Clinician A
 then add a second medication to draft orders which triggers a different rule set. Clinician A then begins the `order-sign` 
 process with both medications in the draft orders. 

| Indicator for the branch triggered (medication 1) | Indicator for the branch triggered (medication 2) | Will alerts be filtered | Description                                                                                                                                                                                                                                                                |
|---------------------------------------------------|---------------------------------------------------|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Info                                              | Info                                              | TRUE                    | Message filtering will be performed. No change in the ordering clinician, patient, encounter, and knowledge artifact URL. The CDS card is cached as well to ensure repeated messages are not shown even if the rule set that is triggered by each medication is different. |
| Info                                              | Warning                                           | TRUE                    | Message filtering will be performed. No change in the ordering clinician, patient, encounter, and knowledge artifact URL. The CDS card is cached as well to ensure repeated messages are not shown even if the rule set that is triggered by each medication is different. |
| Info                                              | Critical                                          | TRUE                    | Message filtering will be performed. No change in the ordering clinician, patient, encounter, and knowledge artifact URL. The CDS card is cached as well to ensure repeated messages are not shown even if the rule set that is triggered by each medication is different. |
| Warning                                           | Info                                              | TRUE                    | Message filtering will be performed. No change in the ordering clinician, patient, encounter, and knowledge artifact URL. The CDS card is cached as well to ensure repeated messages are not shown even if the rule set that is triggered by each medication is different. |
| Warning                                           | Warning                                           | TRUE                    | Message filtering will be performed. No change in the ordering clinician, patient, encounter, and knowledge artifact URL. The CDS card is cached as well to ensure repeated messages are not shown even if the rule set that is triggered by each medication is different. |
| Warning                                           | Critical                                          | TRUE                    | Message filtering will be performed. No change in the ordering clinician, patient, encounter, and knowledge artifact URL. The CDS card is cached as well to ensure repeated messages are not shown even if the rule set that is triggered by each medication is different. |
| Critical                                          | Info                                              | TRUE                    | Message filtering will be performed. No change in the ordering clinician, patient, encounter, and knowledge artifact URL. The CDS card is cached as well to ensure repeated messages are not shown even if the rule set that is triggered by each medication is different. |
| Critical                                          | Warning                                           | TRUE                    | Message filtering will be performed. No change in the ordering clinician, patient, encounter, and knowledge artifact URL. The CDS card is cached as well to ensure repeated messages are not shown even if the rule set that is triggered by each medication is different. |
| Critical                                          | Critical                                          | TRUE                    | Message filtering will be performed. No change in the ordering clinician, patient, encounter, and knowledge artifact URL. The CDS card is cached as well to ensure repeated messages are not shown even if the rule set that is triggered by each medication is different. |

#### Scenario - Order-select is called with a long gap of time before order-sign
{:.no_toc}

Clinician A completes the `order-select` process, something prevents them from starting `order-sign` for a long period of time.

> *Note:* There is currently no time-out period or expiration for cached medications to reset `order-sign` message filtering

| Branch triggered | Time-out set | Will alert be filtered | Description                                                                                                                   |
| ---------------- | ------------ | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Info             | FALSE        | TRUE                   | Message filtering will be performed as normal                                                                                 |
| Info             | TRUE         | FALSE                  | If a time-out is set and the time between order-select and order-sign exceeds that period, there will be no message filtering |
| Warning          | FALSE        | TRUE                   | Message filtering will be performed as normal                                                                                 |
| Warning          | TRUE         | FALSE                  | If a time-out is set and the time between order-select and order-sign exceeds that period, there will be no message filtering |
| Critical        | FALSE        | TRUE                   | Message filtering will be performed as normal                                                                                 |
| Critical        | TRUE         | FALSE                  | If a time-out is set and the time between order-select and order-sign exceeds that period, there will be no message filtering |


#### Scenario - Order-select is called for patient A but order-sign is completed after the same clinician sees another patient
{:.no_toc}

Since the patient ID is used to create a unique cached medication statement, if a clinician completes the `order-select` with patient 
A but does an `order-select`/`order-sign` with patient B before completing `order-sign` for patient A, the message filtering
 will not be affected. This may be another situation where a time-out could be beneficial for the clinician so that messages will not be filtered.
Another solution would be to track if a clinician completes `order-select` for a new patient before completing `order-sign` for their initial patient.

#### Scenario - Order-select and order-sign are completed by 2 different clinicians
{:.no_toc}

Clinician A completes the `order-select` process and clinician B completes `order-sign`.

| Branch triggered for both order-select and order-sign | Will alert be filtered | Description                                                                     |
| ----------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------- |
| Info                                                  | FALSE                  | Since the clinicians are different there will be no message filtering performed |
| Warning                                               | FALSE                  | Since the clinicians are different there will be no message filtering performed |
| Critical                                             | FALSE                  | Since the clinicians are different there will be no message filtering performed |


#### Scenario - Order-select with no medications that trigger rule
{:.no_toc}

No cards to be filtered are returned.

### Patient View

The CDS Hooks specification states that the `patient-view 1.0` fires when the user has just opened a patient's record.
This implementation varies from the previous [Basic](#basic-implementation) and [Advanced](#advanced-implementation) as
it does not rely on medications being selected and in fact does not allow for any to be passed via the `context` field
of the CDS Hooks request. The context contains only the identifiers for the user and the patient, meaning that any rule
that is fired must rely on existing patient resources and prefetch data. 

#### Summary of Operations

Figure 18 depicts the summary of operations for the Patient View Service. 
<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 18: Patient View – PDDI CDS Service Summary </strong></figcaption>
  <img src="patient-view.png" class="figure-img img-responsive img-rounded center-block" alt="patient-view.png" />
</figure>

#### patient-view CDS Service Discovery response example

~~~
 {
  "services": [
    {
      "hook": "patient-view",
      "name": "PlanDefinition - Warfarin NSAIDs Recommendation Workflow",
      "title": "Warfarin NSAIDs Recommendation",
      "extension": {
        "configuration-items": [
          {
            "code": <an identifier for the configuration option>,
            "type": <data type of the configuration option, e.g. boolean>,
            "name": <human readable name of the configuration option>,
            "description": <human readable description of the configuration option>
          },

          ... other optional configuration options ...
        ]
      },
      "id": "warfarin-nsaids-cds-view",
      "prefetch": {
        "item1": "Patient?_id={{context.patientId}}",
        "item2": "MedicationRequest?patient={{context.patientId}}&authoredon=ge2019-12-11",
        "item3": "MedicationAdministration?patient={{context.patientId}}&effective-time=ge2019-12-11",
        "item4": "MedicationDispense?patient={{context.patientId}}&whenhandedover=ge2019-12-11",
        "item5": "MedicationStatement?patient={{context.patientId}}&effective=ge2019-12-11",
        "item6": "Condition?patient={{context.patientId}}"
      }
    }
  ]
}

~~~

#### Patient View – CDS Hooks Request

**Context**
{:.no_toc}

The `context` element of the `patient-view` CDS Hooks request differ from `order-select` and `order-sign` as there are
no `selections` or `draftOrders`. For details on the specifications are below.

**patient-view 1.0**

Field | Optionality | Prefetch Token | Type | Description
----- | -------- | :----: | :----: | ----
`userId` | REQUIRED | Yes | *string* | The id of the current user. For this hook, the user is expected to be of type Practitioner. For example, `Practitioner/123Describe`
`patientId` | REQUIRED | Yes | *string* | The FHIR Patient.id of the current patient 
`encounterId` | OPTIONAL | Yes | *string* | The FHIR Encounter.id of the current encounter

**Extension**
{:.no_toc}

PDDI Configuration Items 

Unlike what was discussed in the [Basic](#cds-hooks-request) and [Advanced](#advanced--cds-hooks-request)
, `cache-for-order-sign-filtering` and `filter-out-repeated-alerts` serve no purpose for this request due to the timing
of when this hook is fired. Other configuration options such as `alert-non-serious` and `show-evidence-support` can be
applied here.

**Prefetch**
{:.no_toc}

The `prefetch` element contains patient data that is provided by the EHR upon submission of the CDS Hook to the CDS
service. The CDS service MUST provide the EHR with a prefetch template at the time of service discovery. The `prefetch`
element MAY specify patient data other than medications for the purpose of individualizing the CDS logic and response.
The prefetch query MUST be designed to obtain data for the patient indicated by the context `patientID`.

#### FHIR Server Request
{:.no_toc}

A FHIR server request by the CDS service is necessary in the event the request `prefetch` element is empty. While
the `prefetch` element is OPTIONAL, it MUST NOT be partially fulfilled. The post-hoc FHIR server query is performed at
the parse and pre-process phase shown in Figure 4. To accomplish a FHIR server request, the server URL and the OAuth
authorization token (i.e. `fhirServer,` `fhirAuthorization`) MUST be provided in the CDS Hooks request.

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 19: Patient View – Parse and Pre-process CDS Hooks request </strong></figcaption>
  <img src="patient-view-parse-process.png" class="figure-img img-responsive img-rounded center-block" alt="patient-view-parse-process.png" />
</figure>


---

File: repos/HL7_SLASH_PDDI-CDS/input/pagecontent/documentation.md


# <span style="color:silver"> 6.0.0 </span> Documentation 

<!-- TOC  the css styling for this is \pages\assets\css\project.css under 'markdown-toc'-->

* Do not remove this line (it will not be displayed)
{:toc}

## <span style="color:silver"> 6.1.0 </span> Preliminaries 
{:.no_toc}

This section contains documentation on how to implement PDDI CDS artifacts from a clinical and technical perspective. Implementation details are described using two specific knowledge artifacts as examples. 
## <span style="color:silver"> 6.2.0 </span> CPOE Workflow Hooks 
{:.no_toc}

Figure 1 depicts hook triggers for Level 1 and 2 Implementations. The primary difference in the Level 2 Implementation is the additional `order-select` hook defining the initial trigger at the start of the CPOE workflow. The Level 1 Implementation follows the [CDS Hooks `order-sign`](https://cds-hooks.org/hooks/order-sign/) specification that defines the triggering event as when a clinician is ready to sign one or more medication orders for a patient. This hook is among the last workflow events before an order is promoted out of a draft status.. 

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 1: Level 1 versus Level 2 Implementation Hooks </strong></figcaption>
  <a href = "assets/images/CPOE_workflow_2.svg" target ="_blank" > <img src= "assets/images/CPOE_workflow_2.svg" class="figure-img img-responsive img-rounded center-block" alt="CPOE_workflow_2.svg" /></a>
</figure>

## <span style="color:silver"> 6.3.0 </span> Prefetch Role 
{:.no_toc}

For technical implementers, the intended role of prefetch is to improve the CDS service performance. This is achieved by minimizing CDS service network calls to external resources such as a FHIR server. When a client program subscribes to the PDDI CDS service, the service MUST return a prefetch specification in the response. This specification identifies resources that the PDDI CDS service SHOULD receive upon request. As described below, the prefetch requirements are different for `order-select` and `order-sign` services. The ideal scenario for both implementations and services is to send prefetch data with the CDS Hooks request. The implementor has flexibility on when and how to fulfill the prefetch templates (e.g., data in EHR memory or server call), which will likely result in a solution that reduces the burden of the server and improves the CDS service efficiency. If the CDS service does not receive prefetch data in the request it MUST query the server via network call. 

# <span style="color:silver"> 7.0.0 </span> Warfarin + NSAIDs

## <span style="color:silver"> 7.1.0 </span> The Warfarin + NSAIDs Knowledge Artifact
{:.no_toc}

The  Warfarin + NSAIDs knowledge artifact represents a relatively complex contextualized PDDI CDS algorithm. The knowledge artifact contains logic that uses both drug and patient contextual factors. The original rule was developed by clinical experts as part of the W3C Community Group effort to develop a PDDI minimal information model. Table 1 is the Warfarin + NSAIDs knowledge artifact at the narrative level using the minimal information model. 

#### Table 1. Warfarin + NSAIDs Minimal Information Model
{:.no_toc}

<div>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Drugs involved</strong>: Warfarin and non-steroidal anti-inflammatory drugs (NSAIDs)</td>
      </tr>
      <tr>
	<td>
	  <strong>Comment:</strong> The drugs involved in a PDDI MUST be explicitly stated. To support a computable representation of the PDDI, the drugs involved SHOULD be listed as sets of terms from a terminology such as <a href="https://www.nlm.nih.gov/research/umls/rxnorm/" target="new">RxNorm</a> or the <a href="https://www.whocc.no/atc/structure_and_principles/" target="new">Anatomical Therapeutic Chemical Classification System (ATC)</a>. Such so called <i>value sets</i> MAY be referenced by a URI to a public repository such as the <a href="https://vsac.nlm.nih.gov/" target="new">Value Set Authority Center</a> that is maintained by the <a href="https://www.nlm.nih.gov/" target="new">United States National Library of Medicine</a>.</td> 
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Clinical Consequences</strong>: Increased risk of bleeding including gastrointestinal bleeding,  intracranial hemorrhage,  and cerebral hemorrhage</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> The clinical consequences associated with a PDDI MUST be reported if known. Clinical consequences SHOULD refer health outcomes as specifically as possible. To support a computable representation of the PDDI, clinical consequences SHOULD be represented as one or more sets of terms from a terminology such as <a href="http://www.who.int/classifications/icd/en/" target="new">ICD-10</a> or <a href="https://www.snomed.org/snomed-ct" target="new">SNOMED-CT</a>. Such so called <i>value sets</i> MAY be referenced by a URI to a public repository such as the <a href="https://vsac.nlm.nih.gov/" target="new">Value Set Authority Center</a> that is maintained by the <a href="https://www.nlm.nih.gov/" target="new">United States National Library of Medicine</a>.</td> 
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Seriousness</strong>: Bleeding is a serious potential clinical consequence because it can result in death, life-threatening hospitalization, and disability. </td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> A PDDI clinical consequence MUST be noted as <i>serious</i> if it can result in death, life-threatening hospitalization, congenital anomaly, disability, or if it requires intervention to prevent permanent impairment or damage.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Severity</strong>: While bleeding is a serious potential clinical consequence, severity can vary from easily tolerated to incapacitating </td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> The severity of a PDDI clinical consequence MUST be reported if known. The severity of a PDDI clinical consequence MUST be noted using non-ambiguous terms or phrases. Any of the existing terminologies for adverse event severity, such as <a href="https://wiki.nci.nih.gov/display/VKC/Common+Terminology+Criteria+for+Adverse+Events+FAQ">Common Terminology Criteria for Adverse Event (CTCAE)</a>, MAY be used for describing a PDDI clinical consequence.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Mechanism of Interaction</strong>: Non-steroidal anti-inflammatory drugs (NSAIDs) have
          antiplatelet effects which increase the bleeding risk when combined with oral anticoagulants such as
          warfarin. The antiplatelet effect of NSAIDs lasts only as long as the NSAID is present in the circulation,
          unlike aspirin’s antiplatelet effect, which lasts for up to 2 weeks after aspirin is discontinued. NSAIDs also
          can cause peptic ulcers and most of the evidence for increased bleeding risk with NSAIDs plus warfarin is due to
          upper gastrointestinal bleeding (UGIB).</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> The mechanism of a PDDI MUST be reported if known. The description SHOULD be written for a clinician audience and include details that help the clinician decide what course of management action to take. To reduce ambiguity, the description MAY refer to specific drugs or health conditions using codes from terminologies. </td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Recommended Action</strong>: If the NSAID is being used as an analgesic or antipyretic,
          it would be prudent to use an alternative such as acetaminophen. In some people, acetaminophen can
          increase the anticoagulant effect of warfarin, so monitor the INR if acetaminophen is used in doses
          over 2 g/day for a few days. For more severe pain consider short-term opioids in place of the NSAID.</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> Any recommended actions that apply to all patient exposures SHOULD be stated using clear and concise language. The recommended action statement SHOULD also provide citations to <a href="http://purl.obolibrary.org/obo/MPIO_0000004" target="new">evidence for a suspected drug-drug interaction</a> (not provided in this example). Recommendations that depend on <a href="http://purl.obolibrary.org/obo/MPIO_0000000" target="new">contextual information/modifying factors</a> SHOULD be mentioned separately to support context-specific presentation of such information.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Contextual information/modifying factors</strong>:
          <ol>
            <li>The NSAIDs is topical diclofenac</li>
            <ul>
              <li><strong>Recommended Action:</strong> No special precautions</li>
              <li><strong>Evidence for a Suspected Drug-Drug Interaction:</strong> Topical diclofenac has relatively
		low systemic absorption; in one study a topical gel (16 g/day) produced about 6% of
		the absorption seen with systemic administration of 150 mg/day. A higher than recommended
		dose of topical gel (48 g/day) produced 20% of a systemic dose of diclofenac.</li>
            </ul>
            <li>The NSAID is NOT topical diclofenac but the patient is concomitantly taking a
              proton pump inhibitor or misoprostol</li>
            <ul>
              <li><strong>Recommended Action:</strong> Assess risk and take action if necessary</li>
              <li><strong>Evidence for a Suspected Drug-Drug Interaction:</strong> Proton pump inhibitors and misoprostol may reduce the risk of UGIB in patients receiving NSAIDs and warfarin. </li>
            </ul>
            <li>The NSAID is NOT topical diclofenac, the patient is NOT concomitantly taking a proton pump inhibitor or misoprostol, and the patient has one or more of the following risk factors:</li>
            <ul>
              <li>History of upper gastrointestinal bleeding (UGIB) or peptic ulcer or age > 65 years old</li>
              <ul>
		<li><strong>Recommended Action:</strong> Use only if benefit outweighs risk</li>
		<li><strong>Evidence for a Suspected Drug-Drug Interaction:</strong> Patients with a
                  history of UGIB or peptic ulcer may have an increased risk of UGIB from this interaction.
                  The extent to which older age is an independent risk factor for UGIB due to these interactions
                  is not firmly established, but UGIB in general is known to increase with age.</li>
              </ul>
              <li>Concomitantly taking systemic corticosteroids, aldosterone antagonists, or high dose or multiple NSAIDs</li>
              <ul>
		<li><strong>Recommended Action:</strong> Use only if benefit outweighs risk</li>
		<li><strong>Evidence for a Suspected Drug-Drug Interaction:</strong> Both corticosteroids
                  and aldosterone antagonists have been shown to substantially increase the risk of UGIB in
                  patients on NSAIDs, with relative risks of 12.8 and 11 respectively compared
                  to a risk of 4.3 with NSAIDs alone (<a href='https://www.ncbi.nlm.nih.gov/pubmed/24937265'>Masclee *et al.* 2014</a>)</li>
              </ul>
            </ul>
          </ol>
	</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> <a href='http://purl.obolibrary.org/obo/MPIO_0000000' target="new">Contextual information/modifying factors</a> are necessary for alerts that
          are both sensitive and specific. Like clinical consequences, each known factor SHOULD be
          stated as specifically as possible. The factors SHOULD be amenable to implementation as executable
          logic using value sets from clinical terminologies such as <a href="https://www.nlm.nih.gov/research/umls/rxnorm/" target="new">RxNorm</a>, the
	  <a href="https://www.whocc.no/atc/structure_and_principles/" target="new">Anatomical Therapeutic Chemical Classification System (ATC)</a>, <a href="http://www.who.int/classifications/icd/en/" target="new">ICD-10</a>, and <a href="https://www.snomed.org/snomed-ct" target="new">SNOMED-CT</a>. As is used in this
          example, each factor SHOULD be related to a specific <a href='http://purl.obolibrary.org/obo/MPIO_0000008' target="new">recommended action</a> that is supported by the <a href='http://purl.obolibrary.org/obo/MPIO_0000004' target="new">evidence for a suspected drug-drug interaction</a></td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Frequency of Exposure to the PDDI:</strong> Unknown</td>
      </tr>
      <tr>		      
	<td><strong>Comment:</strong> Frequency of exposure and frequency of harm information is
          rarely available but can help a clinician assess the risk/benefit trade-off of exposure to PDDI. Such information SHOULD be provided if available. </td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Frequency of Harm for persons who have been exposed to the PDDI:</strong> Unknown</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> Frequency of exposure and frequency of harm information is
          rarely available but can help a clinician assess the risk/benefit trade-off of exposure to PDDI. Such information SHOULD be provided if available. </td>
      </tr>
    </table>
</div>

## <span style="color:silver"> 7.2.0 </span> Level 1 Implementation - Warfarin + NSAIDs Knowledge Artifact (semi-structured) 

Figure 2 depicts how a PDDI CDS implementer would translate a minimal information model narrative to a semi-structured knowledge artifact. The Level 1 Implementation uses a single CDS service call and response with the `order-sign` hook. The decision tree results in three warning indicators (i.e., green, orange, red) and contextual factors that MAY be passed to the clinician.  After processing the CDS Hooks `order-sign` request, the CDS service MUST return CDS Hooks Cards that MAY include actions with associated FHIR resources. Figure 3 builds on Figure 2 by depicting a Card display example within the order entry workflow. The decision points, `order-sign` request, and Card(s) response are discussed further in the sections below.


<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 2: Level 1 – Warfarin + NSAID Semi-Structured Knowledge </strong></figcaption>
  <a href = "assets/images/Basic_Warfarin_NSAID.svg" target ="_blank" > <img src= "assets/images/Basic_Warfarin_NSAID.svg" class="figure-img img-responsive img-rounded center-block" alt="Basic_Warfarin_NSAID.svg" /></a>
</figure>

### <span style="color:silver"> 7.2.1 </span> Decision Points Summary
{:.no_toc}

Many PDDI CDS scenarios have similar drug and patient related decision points. Implementers SHOULD develop CQL artifacts that work in conjunction with the `order-sign` context and prefetch to support the base decision points. The Warfarin + NSAIDs PDDI exemplar as three main decision blocks that include:

1. whether the prescribed NSAID is topical diclofenac,

2. whether the patient is taking a proton pump inhibitor, and 

3. the presence or absence of risk factors involving age, exacerbating medications, and history of upper gastrointestinal bleed


### <span style="color:silver"> 7.2.2 </span> CDS Hooks Request
{:.no_toc}

The `order-sign` request includes `context` and `prefetch` elements with FHIR resource attributes or entire resources. The contents of these elements for the Warfarin + NSAIDs CDS artifact are shown below.

#### `context`
{:.no_toc}

* [`order-sign 1.0`](https://cds-hooks.org/hooks/order-sign/) 

#### `prefetch` 
{:.no_toc}

* Rolling 100-day look-back period for medication resources including:
	* [MedicationRequest](https://www.hl7.org/fhir/medicationrequest.html)
	* [MedicationDispense](https://www.hl7.org/fhir/medicationdispense.html)
	* [MedicationStatement](https://www.hl7.org/fhir/medicationstatement.html)
	* [MedicationAdministration](https://www.hl7.org/fhir/medicationadministration.html)

> *Note:* The use of multiple medication resources is to ensure a comprehensive capture of medications the patient may be taking. In some cases the implementing institution may only have access to MedicationRequest (prescription order), and in other cases they may have access to several resources for a specific medication intervention (e.g., prescription order from medical office, prescription product picked up from pharmacy). The 100-day look-back period is a general starting point. Implementors SHOULD refine this based on the available data. For example, MedicationAdministration is typically documented in the inpatient setting when a nurse administers a medication. This data source may be a more reliable proxy for blood concentrations and could be used to refine CDS logic. 

* Age of patient on current date.
    * [Patient](https://www.hl7.org/fhir/patient.html)
    
* Rolling 5-year look-back period for history of upper gastrointestinal bleed.
    * [Condition](https://www.hl7.org/fhir/condition.html)
    

### <span style="color:silver"> 7.3.0 </span> CDS Hooks Cards
{:.no_toc}


<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 3: Level 1 – Warfarin + NSAID Response Card Example </strong></figcaption>
  <a href = "assets/images/Basic_W_N_Cards.svg" target ="_blank" > <img src="assets/images/Basic_W_N_Cards.svg" class="figure-img img-responsive img-rounded center-block" alt="Basic_W_N_Cards.svg" /></a>
</figure>


### <span style="color:silver"> 7.3.1 </span> Card Actions
{:.no_toc}

The CDS Hooks service response supports providing actionable information to clinicians at the time of medication order entry. A response Card has an `action` element within the suggestion attribute. The `action` element is defined by three types including `create, update, and delete.` Depending on the type of action, resources may be provided that facilitate the suggestion. For example, if a suggestion recommends substituting naproxen for acetaminophen, a `create` action may be used to apply a MedicationRequest for acetaminophen to the current order entry task. The actions, types and associated resources are listed below.  

* `create` 
    * Substituting NSAID for acetaminophen – MedicationRequest for acetaminophen 
    * Adding proton pump inhibitor – MedicationRequest for proton pump inhibitor
* `update` 
* `delete`
    * Remove current NSAID order 

> *Note:* These actions are options that SHOULD be customized to an institutions needs and capabilities. 

## <span style="color:silver"> 7.4.0 </span> Level 2 Implementation - Warfarin + NSAIDs Knowledge Artifact (semi-structured)

The Level 2 Implementation for the Warfarin + NSAID artifact is split into two separate hooks and services. Figures 4 and 5 depict the decision tree for warning indicators (i.e., green, orange, red) and contextual factors for both Hooks (i.e., `order-select` and `order-sign`). Figure 6 provides a Card display example for each CDS Hooks instance within the order entry workflow. In the provided Card display example, the clinician decided to order the NSAID medication but adds a proton pump inhibitor, in response to the card suggestion. This action results in a downgrade of the `medication-prescribe` response card (i.e., "hard-stop" – red to "warning" – orange). The blue task boxes highlight the DetectedIssue `status` indicator, which informs the EHR  of additional needed resources (whether or not to fulfill the `order-sign` service prefetch template), and `order-sign` service if it needs to perform a FHIR server request in the event prefetch data are not provided in the request.


<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 4: Warfarin + NSAID order-select logic </strong></figcaption>
  <a href = "assets/images/Warfarin_NSAID_select.svg" target ="_blank" > <img src="assets/images/Warfarin_NSAID_select.svg" class="figure-img img-responsive img-rounded center-block" alt="Warfarin_NSAID_select.svg" /></a>
</figure>




<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 5: Warfarin + NSAID order-sign logic </strong></figcaption>
  <a href = "assets/images/Warfarin_NSAID_prescribe.svg" target ="_blank" > <img src="assets/images/Warfarin_NSAID_prescribe.svg" class="figure-img img-responsive img-rounded center-block" alt="Warfarin_NSAID_prescribe.svg" /></a>
</figure>


### <span style="color:silver"> 7.4.1 </span> CDS Hooks request
{:.no_toc}


#### `context`
{:.no_toc}

#### **`order-select` 1.0** 
{:.no_toc}

Field | Optionality | Prefetch Token | Type | Description
----- | -------- | :----: | :----: | ----
`userId` | REQUIRED | Yes | *string* | The id of the current user. For this hook, the user is expected to be of type Practitioner. For example, `Practitioner/123Describe`
`patientId` | REQUIRED | Yes | *string* | The FHIR Patient.id of the current patient 
`encounterId` | OPTIONAL | Yes | *string* | The FHIR Encounter.id of the current encounter
`selections`  | REQUIRED | No | *array* | The FHIR id of the newly selected order(s). The `selections` field references FHIR resources in the `draftOrders` Bundle. For example, `MedicationRequest/103`.
`draftOrders` | REQUIRED     | No |    *object* | R4 - FHIR Bundle of *draft* MedicationRequest resource for the current order entry task


#### **`order-sign` 1.1** (modification of a current CDS Hook)
 {:.no_toc}
 The base version for the `order-sign` hook is 1.0. The Level 2 Implementation requires an additional context field. This modification is considered Minor but will change the version to 1.1.


 Field       | Optionality        |  Prefetch Token     |Type  | Description 
 :------------- |:-------------:|:-------: |:-----:| :-----------------
 `userId` | REQUIRED | Yes | *string* | The id of the current user. For this hook, the user is expected to be of type Practitioner. For example, `Practitioner/123Describe`
 `patientId`     | REQUIRED | Yes|string | The FHIR Patient.id of the current patient in context 
 `encounterId`     | OPTIONAL    | Yes |   *string* | The FHIR Encounter.id of the current encounter in context 
 `detectedissue` | REQUIRED     | Yes |    *object* | R4 - FHIR Bundle of DetectedIssue resource for current order entry task
 `draftOrders` | REQUIRED     | No |    *object* | R4 - FHIR Bundle of *draft* MedicationRequest resource for the current order entry task


##### `order-select` `prefetch`
{:.no_toc}

* Rolling 100-day look-back period for medication resources including:
    * [MedicationRequest](https://www.hl7.org/fhir/medicationrequest.html)
    * [MedicationDispense](https://www.hl7.org/fhir/medicationdispense.html)
    * [MedicationStatement](https://www.hl7.org/fhir/medicationstatement.html)
    * [MedicationAdministration](https://www.hl7.org/fhir/medicationadministration.html)

##### `order-sign` `prefetch`
{:.no_toc}

* Age of patient on current date.
    * [Patient](https://www.hl7.org/fhir/patient.html)
    
* Rolling 5-year look-back period for history of upper gastrointestinal bleed.
    * [Condition](https://www.hl7.org/fhir/condition.html)
    

### <span style="color:silver"> 7.4.4 </span> CDS Hooks Cards
{:.no_toc}


<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 6: Warfarin + NSAID Cards </strong></figcaption>
  <a href = "assets/images/Advanced_W_N_Cards.svg" target ="_blank" > <img src="assets/images/Advanced_W_N_Cards.svg" class="figure-img img-responsive img-rounded center-block" alt="Advanced_W_N_Cards.svg" /></a>
</figure>


# <span style="color:silver"> 8.0.0 </span> Digoxin + Cyclosporine

## <span style="color:silver"> 8.1.0 </span> The Digoxin + Cyclosporine Knowledge Artifact
{:.no_toc}

#### Table 2. Digoxin + Cyclosporine Minimal Information Model
{:.no_toc}

<div>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Drugs involved</strong>: Digoxin and Cyclosporine</td>
      </tr>
      <tr>
	<td>
	  <strong>Comment:</strong> The drugs involved in a PDDI MUST be explicitly stated. To support a computable representation of the PDDI, the drugs involved SHOULD be listed as sets of terms from a terminology such as <a href="https://www.nlm.nih.gov/research/umls/rxnorm/" target="new">RxNorm</a> or the <a href="https://www.whocc.no/atc/structure_and_principles/" target="new">Anatomical Therapeutic Chemical Classification System (ATC)</a>. Such so called <i>value sets</i> MAY be referenced by a URI to a public repository such as the <a href="https://vsac.nlm.nih.gov/" target="new">Value Set Authority Center</a> that is maintained by the <a href="https://www.nlm.nih.gov/" target="new">United States National Library of Medicine</a>.</td> 
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Clinical Consequences</strong>: Increased risk of digitalis toxicity that may lead to cardiac arrhythmias</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> The clinical consequences associated with a PDDI MUST be reported if known. Clinical consequences SHOULD refer health outcomes as specifically as possible. To support a computable representation of the PDDI, clinical consequences SHOULD be represented as one or more sets of terms from a terminology such as <a href="http://www.who.int/classifications/icd/en/" target="new">ICD-10</a> or <a href="https://www.snomed.org/snomed-ct" target="new">SNOMED-CT</a>. Such so called <i>value sets</i> MAY be referenced by a URI to a public repository such as the <a href="https://vsac.nlm.nih.gov/" target="new">Value Set Authority Center</a> that is maintained by the <a href="https://www.nlm.nih.gov/" target="new">United States National Library of Medicine</a>.</td> 
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Seriousness</strong>: Digitalis toxicity is a serious potential clinical consequence because it can result in death, life-threatening hospitalization, and disability. </td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> A PDDI clinical consequence MUST be noted as <i>serious</i> if it can result in death, life-threatening hospitalization, congenital anomaly, disability, or if it requires intervention to prevent permanent impairment or damage.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Severity</strong>: While digitalis toxicity is a serious potential clinical consequence, it can produce a range of cardiac arrhythmias and rhythm disturbances that vary in severity, from manageable bradycardia to life-threatening ventricular fibrillation. </td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> The severity of a PDDI clinical consequence MUST be reported if known. The severity of a PDDI clinical consequence MUST be noted using non-ambiguous terms or phrases. Any of the existing terminologies for adverse event severity, such as <a href='https://wiki.nci.nih.gov/display/VKC/Common+Terminology+Criteria+for+Adverse+Events+FAQ'>Common Terminology Criteria for Adverse Event (CTCAE)</a>, MAY be used for describing a PDDI clinical consequence.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Mechanism of Interaction</strong>: The mechanism of this interaction appears to be mediated through P-glycoprotein inhibition by cyclosporine. P-glycoprotein is a major transporter for digoxin efflux.</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> The mechanism of a PDDI MUST be reported if known. The description SHOULD be written for a clinician audience and include details that help the clinician decide what course of management action to take. To reduce ambiguity, the description MAY refer to specific drugs or health conditions using codes from terminologies.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Recommended Action</strong>: For patients with a reliable plasma digoxin concentration in normal range, it is reasonable to anticipate an increase in plasma concentrations after the initiation of cyclosporine. Following initiation, close monitoring and adjusting the digoxin dose as needed is recommended.</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> Any recommended actions that apply to all patient exposures SHOULD be stated using clear and concise language. The recommended action statement SHOULD also provide citations to <a href='http://purl.obolibrary.org/obo/MPIO_0000004' target="new">evidence for a suspected drug-drug interaction</a> (not provided in this example). Recommendations that depend on <a href='http://purl.obolibrary.org/obo/MPIO_0000000' target="new">contextual information/modifying factors</a> SHOULD be mentioned separately to support context-specific presentation of such information.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Contextual information/modifying factors</strong>:
          <ol>  
            <li>Relevant digoxin concentration in normal range
              <ul><strong>Recommended Action:</strong> Assess risk and take action if necessary</ul>
              <ul><strong>Evidence for a Suspected Drug-Drug Interaction:</strong> For patients with a reliable plasma digoxin concentration in normal range, it is reasonable to anticipate an increase in plasma concentrations after the initiation of cyclosporine. Following initiation, close monitoring and adjusting the digoxin dose as needed is recommended. (Dorian et al. Clin Invest Med 1988; 11(2):108-112) (Dorian et al. Transplant Proc. 1987; 19(1):1825-1827). Taken 4-6 hours after the most recent dose, the approximate therapeutic range is 0.8 to 2.0 ng/mL (1 to 2.6 nmol/L); however, toxicity has been observed with concentrations in this range.</ul>
            </li>
            <li>Risk factors that may increase digoxin concentration or toxicity independent of cyclosporine include: reduced renal function and electrolyte abnormalities
              <ul><strong>Recommended Action:</strong> Assess risk and take action if necessary</ul>
              <ul><strong>Evidence for a Suspected Drug-Drug Interaction:</strong> </ul>
               <ul>50-70% of digoxin is excreted unchanged in the urine. Changing renal function may increase serum concentrations and risk of toxicity, (Digoxin-FDA [prescribing information] NDA 20405/S-004) </ul>
               <ul>Hypokalemia, hypomagnesemia, and hypercalcemia may potentiate digoxin toxicity. (Lip et al. Postgrad Med J. 1993; 69(811):337)</ul>
            </li>
           </ol>
	</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> <a href='http://purl.obolibrary.org/obo/MPIO_0000000' target="new">Contextual information/modifying factors</a> are necessary for alerts that
          are both sensitive and specific. Like clinical consequences, each known factor SHOULD be
          stated as specifically as possible. The factors SHOULD be amenable to implementation as executable
          logic using value sets from clinical terminologies such as <a href="https://www.nlm.nih.gov/research/umls/rxnorm/" target="new">RxNorm</a>, the
	  <a href="https://www.whocc.no/atc/structure_and_principles/" target="new">Anatomical Therapeutic Chemical Classification System (ATC)</a>, <a href="http://www.who.int/classifications/icd/en/" target="new">ICD-10</a>, and <a href="https://www.snomed.org/snomed-ct" target="new">SNOMED-CT</a>. As is used in this
          example, each factor SHOULD be related to a specific <a href='http://purl.obolibrary.org/obo/MPIO_0000008' target="new">recommended action</a> that is supported by the <a href='http://purl.obolibrary.org/obo/MPIO_0000004' target="new">evidence for a suspected drug-drug interaction</a></td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Frequency of Exposure to the PDDI:</strong> Unknown</td>
      </tr>
      <tr>		      
	<td><strong>Comment:</strong> Frequency of exposure and frequency of harm information is
          rarely available but can help a clinician assess the risk/benefit trade-off of exposure to PDDI. Such information SHOULD be provided if available. </td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Frequency of Harm for persons who have been exposed to the PDDI:</strong> Unknown</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> Frequency of exposure and frequency of harm information is
          rarely available but can help a clinician assess the risk/benefit trade-off of exposure to PDDI. Such information SHOULD be provided if available. </td>
      </tr>
    </table>
</div>


## <span style="color:silver"> 8.2.0 </span> Definitions 
{:.no_toc}

The Digoxin + Cyclosporine artifact logic depends on whether the patient is stable on digoxin or cyclosporine before the current medication order event. This section defines terms used in the subsequent flow diagrams. Certain terms are defined by assumptions that may be taken based on the presence of resources in `context` versus `prefetch` elements of the request. 


* **Incident Order** – `context` medication is *not* in `prefetch` medications and, thus, is presumably the first occurrence. 

* **Prevalent Order** – `context` medication is in `prefetch` medications and, thus, is presumably a medication order that is continued or repeated.

* **Normal** – observation that is within a specified time period, and the measure is within a therapeutic window or below/above a certain acceptable threshold.

* **Abnormal** – observation that is *not* within a specified time period, *or* the measure is *not* within a therapeutic window or below/above a certain threshold.

> *Note:* Parameters for "normal" and "abnormal" observations SHOULD be modified by the implementor. The provided artifacts use a simplistic approach of querying for the most recent measure in a specific time frame. This approach SHOULD be modified to capture and present the most clinically relevant information. For example, clinicians may want a look-back period that captures several measures for serum creatinine to determine the status *and* prognosis for renal insufficiency. 

## <span style="color:silver"> 8.3.0 </span> Level 1 Implementation - Digoxin + Cyclosporine Knowledge Artifact (semi-structured) 


Figure 7 shows how a PDDI CDS implementer would implement the Digoxin + Cyclosporine PDDI knowledge artifact using the CDS Hooks `order-sign` hook. The figure shows the CDS Service processes the PDDI CDS logic after receiving a `order-sign` request. Figure 7 progresses through the decision tree and includes warning indicators (i.e., green, orange, red) and contextual factors that may be presented to the clinician. Figure 8 builds on this artifact and provides a display of Cards example. 

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 7: Level 1 Digoxin + Cyclosporine logic </strong></figcaption>
  <a href = "assets/images/Basic_Digoxin_Cyclosporine.svg" target ="_blank" > <img src="assets/images/Basic_Digoxin_Cyclosporine.svg" class="figure-img img-responsive img-rounded center-block" alt="Basic_Digoxin_Cyclosporine.svg" /></a>
</figure>


### <span style="color:silver"> 8.3.1 </span> Decision Points Summary
{:.no_toc}

The Digoxin + Cyclosporine exemplar artifact has two main decision blocks:

1. whether the patient is taking digoxin and/or cyclosporine at the time of the current order for digoxin or cyclosporine, and

2. whether the patient has risk factors that may potentiate the risk of digitalis toxicity. 

### <span style="color:silver"> 8.3.2 </span> CDS Hooks Request
{:.no_toc}


#### `context`
{:.no_toc}

* [`order-sign 1.0`](https://cds-hooks.org/hooks/order-sign/) 

#### `prefetch`
{:.no_toc}

* Rolling 100-day look-back period for medication resources including:
    * [MedicationRequest](https://www.hl7.org/fhir/medicationrequest.html)
    * [MedicationDispense](https://www.hl7.org/fhir/medicationdispense.html)
    * [MedicationStatement](https://www.hl7.org/fhir/medicationstatement.html)
    * [MedicationAdministration](https://www.hl7.org/fhir/medicationadministration.html)
    
* Rolling 100-day look-back period for digoxin concentration
    * [Observation](https://www.hl7.org/fhir/observation.html)

* Rolling 100-day look-back period for serum creatinine
    * [Observation](https://www.hl7.org/fhir/observation.html)
    
* Rolling 100-day look-back period for electrolytes including: potassium, magnesium, and calcium
    * [Observation](https://www.hl7.org/fhir/observation.html)
        

### <span style="color:silver"> 8.3.3 </span> CDS Hooks Cards
{:.no_toc}

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 8: Level 1 Digoxin + Cyclosporine Cards </strong></figcaption>
  <a href = "assets/images/Level_1_D_C_Cards.svg" target ="_blank" > <img src="assets/images/Level_1_D_C_Cards.svg" class="figure-img img-responsive img-rounded center-block" alt="Level_1_D_C_Cards.svg" /></a>
</figure>

### <span style="color:silver"> 8.3.4 </span> Card Actions
{:.no_toc}

The actions, types and associated resources for the Digoxin + Cyclosporine Level 1 Implementation are listed below:  

* `create` 
    * Adding order for digoxin level measure – ProcedureRequest for serum digoxin trough within 24 hours 
    * Add consultation for either prescriber of digoxin or cyclosporine depending on which the patient is currently taking – ProcedureRequest consultation
    * Add order for electrolyte panel(s) (i.e., calcium, magnesium, potassium) and renal function (e.g., eGRF and serum creatinine) – ProcedureRequest for labs to be drawn
* `update` 
    * Reduce digoxin order currenlty on the patient's profile – MedicationRequest for low-dose digoxin
* `delete`
    * Remove current order for digoxin or cyclosporine 
    
> *Note:* These actions are options that SHOULD be customized to an institutions needs and capabilities.     
    
## <span style="color:silver"> 8.4.0 </span> Level 2 Implementation - Digoxin + Cyclosporine Knowledge Artifact (semi-structured)

As described under the Getting Started tab, the Level 2 Implementation proposal requires several changes to the current standard specifications. Changes to the CDS Hooks context are specified below. The Level 2 Implementation proposal for the Digoxin + Cyclosporine artifact is split into two separate services. Figures 9 and 10 depict the decision tree for warning indicators (i.e., green, orange, red) and contextual factors for both services (i.e., Order Select and Order Sign). The blue task boxes highlight the DetectedIssue status indicator, which informs the EHR  of additional needed resources (whether or not to fulfill the Order Sign Service prefetch template), and Order Sign Service if it needs to perform a FHIR server request in the event prefetch data are not provided in the request. Figure 11 depicts a Card display example. In this scenario, the `order-sign` Cards are filtered since the clinician's action indicated that the patient was no longer taking digoxin. 


<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 9: Digoxin + Cyclosporine order-select logic </strong></figcaption>
  <a href = "assets/images/Digoxin_Cyclosporine_select.svg" target ="_blank" > <img src="assets/images/Digoxin_Cyclosporine_select.svg" class="figure-img img-responsive img-rounded center-block" alt="Digoxin_Cyclosporine_select.svg" /></a>
</figure>

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 10: Digoxin + Cyclosporine order-sign logic </strong></figcaption>
  <a href = "assets/images/Digoxin_Cyclosporine_prescribe.svg" target ="_blank" > <img src="assets/images/Digoxin_Cyclosporine_prescribe.svg" class="figure-img img-responsive img-rounded center-block" alt="Digoxin_Cyclosporine_prescribe.svg" /></a>
</figure>


### <span style="color:silver"> 8.4.1 </span> CDS Hooks Request
{:.no_toc}




##### `order-select 1.0`
{:.no_toc}


Field | Optionality | Prefetch Token | Type | Description
----- | -------- | :----: | :----: | ----
`userId` | REQUIRED | Yes | *string* | The id of the current user. For this hook, the user is expected to be of type Practitioner. For example, `Practitioner/123Describe`
`patientId` | REQUIRED | Yes | *string* | The FHIR Patient.id of the current patient 
`encounterId` | OPTIONAL | Yes | *string* | The FHIR Encounter.id of the current encounter
`selections`  | REQUIRED | No | *array* | The FHIR id of the newly selected order(s). The `selections` field references FHIR resources in the `draftOrders` Bundle. For example, `MedicationRequest/103`.
`draftOrders` | REQUIRED     | No |    *object* | R4 - FHIR Bundle of *draft* MedicationRequest resource for the current order entry task


#### **`order-sign` 1.1** (modification of a current CDS Hook)
 {:.no_toc}
 The base version for the `order-sign` hook is 1.0. The Level 2 Implementation requires an additional context field. This modification is considered Minor but will change the version to 1.1.


 Field       | Optionality        |  Prefetch Token     |Type  | Description 
 :------------- |:-------------:|:-------: |:-----:| :-----------------
 `userId` | REQUIRED | Yes | *string* | The id of the current user. For this hook, the user is expected to be of type Practitioner. For example, `Practitioner/123Describe`
 `patientId`     | REQUIRED | Yes|string | The FHIR Patient.id of the current patient in context 
 `encounterId`     | OPTIONAL    | Yes |   *string* | The FHIR Encounter.id of the current encounter in context 
 `detectedissue` | REQUIRED     | Yes |    *object* | R4 - FHIR Bundle of DetectedIssue resource for current order entry task
 `draftOrders` | REQUIRED     | No |    *object* | R4 - FHIR Bundle of *draft* MedicationRequest resource for the current order entry task


#### `order-select` `prefetch`
{:.no_toc}
* Rolling 100-day look-back period for medication resources including:
    * [MedicationRequest](https://www.hl7.org/fhir/medicationrequest.html)
    * [MedicationDispense](https://www.hl7.org/fhir/medicationdispense.html)
    * [MedicationStatement](https://www.hl7.org/fhir/medicationstatement.html)
    * [MedicationAdministration](https://www.hl7.org/fhir/medicationadministration.html)

#### `order-sign` `prefetch`
{:.no_toc}

* Rolling 100-day look-back period for digoxin concentration
    * [Observation](https://www.hl7.org/fhir/observation.html)

* Rolling 100-day look-back period for serum creatinine
    * [Observation](https://www.hl7.org/fhir/observation.html)
    
* Rolling 100-day look-back period for electrolytes including: potassium, magnesium, and calcium
    * [Observation](https://www.hl7.org/fhir/observation.html)


### <span style="color:silver"> 8.3.3 </span> CDS Hooks Cards
{:.no_toc}

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 11: Level 2 Digoxin + Cyclosporine Cards </strong></figcaption>
  <a href = "assets/images/Level_2_D_C_Cards.svg" target ="_blank" > <img src="assets/images/Level_2_D_C_Cards.svg" class="figure-img img-responsive img-rounded center-block" alt="Level_2_D_C_Cards.svg" /></a>
</figure>



# <span style="color:silver"> 9.0.0 </span> Warfarin + NSAIDs and Digoxin + Cyclosporine CDS Artifacts (structured)

The structured artifacts following the aforementioned logic and behavior are available for the Level 1 Implementation under [Artifacts](artifacts.html).



---

File: repos/HL7_SLASH_PDDI-CDS/input/pagecontent/downloads.md


### Downloads

#### Full Implementation Guide

The following file contains the complete, downloadable implementation guide:

-  [Full IG](full-ig.zip)

### Definitions

In addition to the above, we have provided format-specific *definitions*
<ul>
    <li><a href="definitions.xml.zip">XML</a></li>
    <li><a href="definitions.json.zip">JSON</a></li>
    <li><a href="definitions.ttl.zip">TTL</a></li>
</ul>

These files should be the first choice whenever generating any implementation artifacts since they contain all of the rules about what makes these profiles valid.
    Implementers will still need to be familiar with the content of the specification and profiles that apply in order to make a conformant implementation.
    See the overview on <a href="http://hl7.org/fhir/validation.html">validating FHIR profiles and resources</a> for more information about validating profiles and how to use these artifacts.



### Examples

All examples used in this Implementation Guide:

<ul>
    <li><a href="examples.xml.zip">XML</a></li>
    <li><a href="examples.json.zip">JSON</a></li>
    <li><a href="examples.ttl.zip">TTl</a></li>
</ul>


---

File: repos/HL7_SLASH_PDDI-CDS/input/pagecontent/examples.md


# <span style="color:silver"> 12.0.0 </span> Examples defined for the PDDI CDS Implementation Guide


The following are example resources for the PDDI CDS implementation guide:

### Examples

#### Condition

{% include list-simple-conditions.xhtml %} 

#### Encounter

{% include list-simple-encounters.xhtml %} 

#### MedicationAdministration

{% include list-simple-medicationadministrations.xhtml %} 

#### MedicationDispense

{% include list-simple-medicationdispenses.xhtml %} 

#### MedicationRequest

{% include list-simple-medicationrequests.xhtml %} 

#### MedicationStatement

{% include list-simple-medicationstatements.xhtml %} 

#### Observations

{% include list-simple-observations.xhtml %}

#### Patient

{% include list-simple-patients.xhtml %} 

#### Procedure

{% include list-simple-procedures.xhtml %} 

<p/><p/>


---

File: repos/HL7_SLASH_PDDI-CDS/input/pagecontent/index.md


### Introduction

Where possible, new and updated content will be highlighted with green text and background.
{:.new-content}

<div markdown="1" class="bg-info">

{{ site.data.package-list.list[0].desc }}

</div>

### Intended Audiences

The primary intended audience includes individuals seeking guidance on how to implement drug-drug interaction clinical decision support using modern health information technology standards. This implementation guide is written with the intention of showing how potential drug-drug interaction (PDDI) alerts more specifically tailored to patient context could be presented through the electronic health record during computerized provider order entry using modern standards. It is also written for a more general audience of individuals creating medication safety knowledge artifacts that they intend to  disseminate to healthcare organizations. This implementation guide is focused on drug therapy ordering conducted with an inpatient or outpatient electronic health record. If the system can send medication orders present in the National Council for Prescription Drug Programs (NCPDP) e-prescribing medication history for outpatient drugs as FHIR resources to the CDS service then, these resources could be included in CDS logic. This implementation guide solely focuses on drug to drug interactions. It is true that vitamins, herbals, and food also have interactions with therapeutic drugs and cause adverse events. However, the representation of these entities with EHR systems is not as standardized as therapeutic drugs. Future versions of the implementation guide might add additional use cases and clarification on how to handle these entities.

### Collaborators and Funding

This implementation guide was developed by the Health Level 7 [(HL7)](http://wiki.hl7.org) [Clinical Decision Support Work Group (CDS WG)](http://wiki.hl7.org/index.php?title=Clinical_Decision_Support_Workgroup) in collaboration with the University of Pittsburgh, University of Utah, RWTH Aachen University, Clemson University, the Open Source Electronic Health Alliance (OSEHRA), the University of Arizona, and Wolters Kluwer Health. It was funded in part by AHRQ grants: U18 HS027099, R01 LM011838, R21 HS023826 and R01 HS025984, NLM grant T15 LM007124, R15 LM012941, NCCIH grant U54 AT008909.

### Context

#### Rationale

Clinical decision support has the potential to reduce adverse events associated with pharmacotherapy. Specifically, computerized PDDI checking at medication order entry is an efficient mechanism to bring conflicting therapies to clinicians' attention. In the United States, Meaningful Use incentives have supported the widespread dissemination of PDDI checking;<sup>[1](#references)</sup> however, researchers have found that a high percentage (~90%) of PDDI alerts in computerized provider order entry (CPOE) systems are ignored.<sup>[2,3](#references)</sup> The reason for overriding PDDI alerts appears to be multi-factorial. The current widely-used approach of alerting based on simple pair-wise drug comparisons with no further consideration of patient context can lead to alerts with high recall but low precision. This implementation guide provides guidance on how to use information in the electronic health record to make PDDI alerts more specifically relevant to a given patient at various points in the clinical workflow. Moreover, medication alerts are typically presented at the end of the order entry task – after the decision has been made to prescribe a medication. A primary motivation for this implementation guide is to expand PDDI CDS to provide *actionable* information to clinicians earlier in the order entry process. The approach this IG suggests could be effective at reducing the number of alerts and increasing their relevance. For example, a recent study developed, validated, and tested 8 contextualized drug-drug interaction alert algorithms that used data from electronic health records data to fine-tune the alerts to a given patient. The interactions were chosen based on monthly override rates from a single large care facility. Testing on retrospective real-world data showed the potential for the eight algorithms to reduce alerts that interrupt clinician workflow by more than 50% from baseline.<sup>[4](#references)</sup>

The burden of PDDI CDS governance falls to specific institutions, which may contribute to the broad discord of PDDI alerts among institutions.<sup>[5,6](#references)</sup> While the majority of health systems use third-party commercial knowledge bases that are integrated into the EHR alerting framework, each institution has the ability to customize the alert types and thresholds in relation to the knowledge base. A sharable service that coordinates drug knowledge and CDS alerts may reduce the variability and set a standard-of-care for PDDI CDS across institutions. Supporting this approach, both EHR vendors and drug knowledge vendors are beginning to adopt service-oriented data standards such as FHIR and CDS Hooks. In addition to standardizing care, a sharable service-based approach to PDDI CDS might help disperse the burden of optimizing alerts and maintaining drug knowledge.<sup>[7](#references)</sup>    

Patient-specific alerting is an overarching goal for PDDI CDS that has not been broadly achieved. The current state of high-sensitivity and low-specificity alerts is a known problem without a simple solution. The barriers to a successful PDDI CDS are both theoretical and technological. The unique combinations of risk factors possessed by each individual patient increases the complexity of decisions. Moreover, alerts are often designed without due consideration for the clinician's decision-making process. Conventional PDDI CDS approaches alert on simple pair-wise drug combinations without considering other data that could be used to tailor CDS for the specific patient. The knowledge base and technical framework need further development to account for patient factors to reduce the number of alerts and improve alert specificity. This implementation guide advances PDDI CDS by building on the World Wide Web Consortium (W3C) Semantic Web in Health Care and Life Sciences Community Group project to make PDDI knowledge more comprehensive, standardized, and computable through a minimal information model.<sup>[8,9](#references)</sup> The W3C project provides non-ambiguous definitions for 10 core information items. It also provides 8 detailed best practice recommendations related to the 10 core information items. This implementation guide implements the W3C project's recommendations using a service-based approach and the emerging health information technology standards FHIR, CDS Hooks, and CQL. PDDI CDS that follows the recommendations in this guide should be more specific, actionable, and sharable than current PDDI alerts. Also, the approach allows for an efficient system to document physician actions in conjunction with relevant patient-specific information. In this regard, CDS implementers can track clinician responses for analyses that may lead to further refined PDDI CDS alerts. 

Finally, clinical expertise is crucial to developing clinically relevant CDS. However, a barrier exists between expressing clinical knowledge and writing the actual code used by CDS systems. CQL is an HL7 standard that was developed as an authoring language that is both structured and human readable.<sup>[10](#references)</sup> Moreover, CQL is a foundational component of national efforts to make CDS artifacts computable and interoperable such as [CDS Connect](https://cds.ahrq.gov/cdsconnect). This implementation guide uses CQL to represent executable PDDI CDS logic with the intention lowering the barrier for other implementers to use the codebase for their institution's needs.

#### Assumptions

##### Clinical
{:.no_toc}

PDDIs are, to an extent, theoretical due to knowledge gaps in the literature. Thus, alert specificity and individualized information is limited by available knowledge. The goal of contextualizing or individualizing these alerts is not only to reduce the number of alerts by increasing specificity, but also to improve the clinical relevance of the information that is presented. In this respect, PDDI CDS may function as an educational tool to raise awareness of known factors that may mitigate or potentiate the risk associated with PDDIs. Gaps in the literature relating to contextual factors is a known issue of the domain and is a key limitation to this and other PDDI CDS systems. Moreover, with this limitation, unknown medication adherence, and data quality/availability – it is ultimately the clinician's decision whether to proceed with potentially interacting drug orders. 

##### Technical 
{:.no_toc}

An important requirement of CDS is that it provide clinically relevant information to the clinician at the right time. This implementation guide assumes that CDS is provided as a real-time remote service which the EHR (client) subscribes to at various points in the workflow of clinicians. The service requests clinical decision support based on the current patient context. The EHR client sends relevant contextual information as part of the request and receives clinically relevant suggestions describing potential actions to be taken. The CDS service must run efficiently to meet clinician expectations and not interrupt from the clinical workflow. Delays in presenting CDS information may lead to unsuccessful CDS adoption and clinician frustration. Note that the remote service would not a component of the EHR, would use API and web standards for communication, and could be a servlet container hosted within the organization's data architecture / firewall or hosted offsite. HIPAA privacy and data protection rules would apply to all aspects of the interaction between the EHR and the CDS service. 

To address workflow considerations, this implementation guide describes two complementary PDDI CDS scenarios: 1) CDS at the time that an ordering clinician selects a drug to add to an order (“order-select”), and 2) CDS at the time an ordering clinician signs a drug order (“order-sign”). It is possible for a stakeholder to implement both scenarios. In such case, the CDS service might trigger highly similar alerts at both order-select and order-sign. For example, if a clinician decides to ignore/over-ride a CDS suggestion presented at order-select, the CDS service might detect the same PDDI issue upon order-sign. This implementation guide defines a stateful approach where various resources returned from the order-select service are used to determine if an alert has been seen before while simultaneously allowing client EHRs to choose how to handle apparently repeat CDS suggestions. Note that it might not be possible to develop CDS Logic to evaluate a candidate order at the "order-select" stage.' In these cases, appropriately, there would be no ability for the EHR to subscribe to a service specific to the drug-drug interaction that triggers at order-select.

A third option that this implementation guide discusses is CDS at the time a clinician opens a patient-record ("patient-view"). Note that. although this event happens outside of computerized provider order entry,  we included it as a scenario because are potentially good reasons to do PDDI CDS at patient-view including 1) the patient-view hook has broad adoption it might be the most appropriate place in the clinical workflow for shared decision-making this is an ideal time to bring up current potential interactions and perform risk calculations. 

In this guide, we assume that the service implementation complies with the [CDS Hooks Specification](http://cds-hooks.org/). CDS-Hooks is a standard that has gained considerable interest among EHR vendors. It is a “hook” based pattern designed to provide a simple way to initiate requests for CDS, from any point in a clinical workflow. It specifies the basic actions of registering for CDS services, calling those services, and then receiving the CDS service response in form of simple structured messages called "cards" that provide appropriate information and suggested actions within the context of the EHR. In CDS Hooks, "Prefetch" queries are a key component that supports the CDS system performance. These queries assemble relevant data from the EHR prior to submitting a request to the CDS service. Depending on the patient and service, prefetch data may encompass a variety resources captured during various time periods, so it is crucial that implementors and clinicians refine prefetch template parameters to obtain only data that is clinically relevant. See this implementation guide's discussion of the [CDS Service specification applied to PDDI CDS](./cds-service-spec.html) for more information.


#### Related Projects 

The [Use Case](./use-cases.html) section of this implementation guide describes a representative clinical PDDI example that is used for illustration throughout this implementation guide. PDDI CDS artifacts were created from the use case at a narrative, semi-structured, and fully executable level. The artifacts comply with the a minimal information model for potential drug-drug interaction knowledge and evidence described in a W3C Community Interest Group Note.<sup>[8,9](#references)</sup> The IG use cases (Warfarin + non-steroidal anti-inflamatory drugs (NSAIDs) and Digoxin + Cyclosporine) show that the potential interactions often need to consider route and formulation. The minimal information model specifies contextual Information/modifying factors which these would fall under.

The example CDS services shown in this implementation guide were written without the use of a specific authoring tool. The [Clinical Decision Support Authoring Tool](https://cds.ahrq.gov/cdsconnect/authoring) is a component of the CDS Connect project funded by the Agency for Healthcare Research and Quality [(AHRQ)](https://www.ahrq.gov/). It is possible to use the authoring tool to develop PDDI CDS logic using CQL. Interested persons can access [a test version of the tool with these features on GitHub](https://github.com/dbmi-pitt/AHRQ-CDS-Connect-Authoring-Tool). However, the authoring tool was not used to assist with PDDI CDS that uses CDS Hooks as specified in this implementation guide. 

### Scope

This implementation guide:

1. Describes a potential PDDI CDS use case (Warfarin + NSAIDs):

	* CDS at the time that an ordering clinician selects a drug to add to an order ("order-select"), and 
	* CDS at the time an ordering clinician signs a drug order ("order-sign")

2. Provides implementation guidance for actionable PDDI alerts using sharable CDS artifacts that adhere to a [minimal information model for representing clinically actionable knowledge about PDDIs](https://w3id.org/hclscg/pddi)

3. Provides knowledge artifacts and related resources using the following HIT specifications:

	* [CDS Hooks](http://cds-hooks.org/)
	* [FHIR](http://www.fhir.org/)
	* [CQL](https://ecqi.healthit.gov/cql-clinical-quality-language)


<a name="references"></a>

### References
{:.no_toc}
   
1. Centers for Medicare and Medicated Services. Eligible Professional Meaningful Use Core Measures Measure 2 of 14. 2013 April (cited 2018 August). Available from: https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/Downloads/2013DefinitionEP_2_Drug_Interaction_Checks.pdf. 
2. Bryant AD, Fletcher GS, Payne TH. Drug Interaction Alert Override Rates in the Meaningful Use Era: No Evidence of Progress. Applied Clinical Informatics. 2014;5(3):802-813. doi:10.4338/ACI-2013-12-RA-0103.
3. Van der Sijs H, Aarts J, Vulto A, Berg M. Overriding of Drug Safety Alerts in Computerized Physician Order Entry. Journal of the American Medical Informatics Association : JAMIA. 2006;13(2):138-147. doi:10.1197/jamia.M1809.
4. Chou, E., Boyce, RD., Balkan, B., Rosko, S., Subbian, V., Romero, A., Hansten, P., Horn, J., Gephart, S., Malone, DC. Designing and Evaluating Contextualized Drug-Drug Interaction Algorithms. Accepted to JAMIA Open 02/26/2021. JAMIO-2020-0010.R3. PubMed ID: in process. PubMedCentral ID: In process.
5. McEvoy DS, Sittig DF, Hickman T-T, et al. Variation in high-priority drug-drug interaction alerts across institutions and electronic health records. Journal of the American Medical Informatics Association : JAMIA. 2017;24(2):331-338. doi:10.1093/jamia/ocw114.and 5.
6. Fung KW, Kapusnik-Uner J, Cunningham J, Higby-Baker S, Bodenreider O. Comparison of three commercial knowledge bases for detection of drug-drug interactions in clinical decision support. Journal of the American Medical Informatics Association : JAMIA. 2017;24(4):806-812. doi:10.1093/jamia/ocx010.
7. Tilson H, Hines LE, McEvoy G, et al. Recommendations for Selecting Drug-Drug Interactions for Clinical Decision Support. American journal of health-system pharmacy : AJHP : official journal of the American Society of Health-System Pharmacists. 2016;73(8):576-585. doi:10.2146/ajhp150565.
8. World Wide Web Consortium (W3C) Semantic Web in Health Care and Life Sciences Community Group. A Minimum Representation of Potential Drug-Drug Interaction Knowledge and Evidence - Technical and User-centered Foundation. May 8, 2019. https://w3id.org/hclscg/pddi. 
9. Hochheiser, H., Jing, Xia., Garcia, E., Ayvaz, S., Sahay, R., Dumontier, M., Banda, JM.,  Beyan, O., Brochhausen, M., Draper, E.,  Habiel, S., Hassanzadeh, O., Herrero-Zazo, M., Hocum, B., Horn, J., Lebaron, B., Malone, DC., Nytrø, Ø., Reese, T., Romagnoli, K., Schneider, J., Zhang, LY, Boyce, RD. A minimal information model for potential drug-drug interactions. Frontiers in Pharmacology. Research Topic: Drug Interactions in the Real World.  2020. vol. 11. 10.3389/fphar.2020.608068. PubMed ID: in process. PubMedCentral ID: In process.
10. Health Level Seven International. HL7 Cross-Paradigm Specification: Clinical Quality Language, Release 1. 2017 May (cited 2018 August). Available from: http://www.hl7.org/implement/standards/product_brief.cfm?product_id=400.
    
### Dependencies

{% include dependency-table.xhtml %}

### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### IP Statements

{% include ip-statements.xhtml %}
http://www.nlm.nih.gov/research/umls/rxnorm


---

File: repos/HL7_SLASH_PDDI-CDS/input/pagecontent/knowledge-artifacts.md


### Clinical Reasoning

This section describes the components and processes of the Clinical Reasoning module used for the PDDI CDS artifacts. The Clinical Reasoning module provides resources and operations to enable sharing and evaluation of clinical knowledge artifacts. For the PDDI CDS artifacts this encompasses the `PlanDefinition`, `CarePlan`, `RequestGroup`, and CQL libraries. 

> *Note:* While resources and CQL libraries are specified for this implementation guide, these are not required for PDDI CDS functionality. The `PlanDefinition`, however, is RECOMMENDED to create sharable PDDI knowledge artifacts.

#### PlanDefinition
{:.no_toc}

In the FHIR resource [workflow](https://www.hl7.org/fhir/workflow.html), the PlanDefinition resource is categorized as a definition. Resources in this category define an action that can occur with a patient. There are four main elements of the `PlanDefinition` that are used for the PDDI CDS instances. These elements include `TriggerDefinition,` `Condition,` `DynamicValue,` and `Action.` 

**TriggerDefinition**
{:.no_toc}

The `TriggerDefinition` uses the Name Event, which allows triggering of an event opposed to a scheduled or fixed event. The `TriggerDefinition` for a `PlanDefinition` written for PDDI CDS MUST be based on one of the CDS Hooks requests `order-sign` and `order-select.`

~~~
"triggerDefinition": {
              "type": "named-event",
              "eventName": "order-sign"
~~~
~~~
"triggerDefinition": {
              "type": "named-event",
              "eventName": "order-select"
~~~              

**Condition**
{:.no_toc}

The `condition` element is used to determine whether or not the CDS logic is to be applied and the language that the logic is written in. If the `condition` is satisfied (i.e., true or false), an action(s) is initiated.

~~~
"condition": [
              {
                "kind": "applicability",
                "language": "text/cql",
                "expression": "Inclusion Criteria"
~~~                

**Action**
{:.no_toc}

The `Action` element provides the specific action(s) and associated information. Only one action can be taken for each group, which is reflected by the Card actions where the user can only select one action per suggestion. 

~~~
"condition": [
              {
                "kind": "applicability",
                "language": "text/cql",
                "expression": "Inclusion Criteria"
              }
            ],
            "action": [
              {
                "title": "Increased risk of bleeding",
                "description": "Potential Drug-Drug Interaction between warfarin (product) and NSAID (product)",
                "dynamicValue": [
                  {
                    "path": "action.title",
                    "expression": "Get Base Summary"
                  },
                  {
                    "path": "action.description",
                    "expression": "Get Base Detail"
                  },
                  {
                    "path": "activity.extension",
                    "expression": "Get Base Indicator"
                  }
                ],
                "action": [
                snipped for brevity
~~~                

**DynamicValue**
{:.no_toc}

The `DynamicValue` enables customization of the statically defined resources. Since each decision block for PDDIs have one or more individualized information components, integrating patient-specific and product-specific data into Card elements is facilitated by the `DynamicValue` element.

~~~
"action": [
                  {
                    "label": "Assess risk and take action if necessary.",
                    "dynamicValue": [
                      {
                        "path": "action.label",
                        "expression": "Get Card 2 Label"
~~~


#### CarePlan and RequestGroup 
{:.no_toc}


The FHIR resource [workflow](https://www.hl7.org/fhir/workflow.html) categorizes the `CarePlan` and `RequestGroup` resources as requests, thereby expressing the intention for something to occur. The CDS service creates a `CarePlan` that references a `RequestGroup` for each CDS Hook response Card. As an example, in this implementation guide, the Warfarin + NSAID artifact creates four response cards, each containing minimal information model elements and associated actions. The `CarePlan` references four `RequestGroup` resources under the the `activity` element. The `RequestGroup` `action` element provides the suggestions and actions in the response card. The `CarePlan` and `RequestGroup` resources are subsequently transformed into a CDS Hooks Card response and sent to the EHR. 


### CQL Library
{:.no_toc}

<!-- 
* for someone new to CQL would need to know  - point them elsewhere
* brief overview of the logic

* for the audience familiar with CQL - explain what is specific to the PDDI use case
* use of FHIR profiles
* importance of the value sets
* how to create the specific library resource for PDD CDS
* connection of CQL to PlanDefinition
* libraries entail and how to use them, utility functions and other libaries
* highlight specific instances that are unique to this implementation 
-->

It is RECOMMENDED that a CDS rule execution engine for PDDI CDS be able to execute CDS rules written in [CQL](https://ecqi.healthit.gov/cql-clinical-quality-language). CQL was developed by HL7 for clinical experts to express knowledge in an author-friendly and human-readable but computable language.

All artifact logic using CQL are wrapped in a container called a library. There is a set of declarations documented in the [CQL Specification](http://cql.hl7.org) that need to be defined to provide information about the library. Those declarations are Library, Data Models, Libraries, Terminology, Parameters, Context and Statements.

#### Declarations
{:.no_toc}

**Library**
{:.no_toc}

The library declaration defines the library name used as an identifier for other CQL libraries to reference. The version is an optional declaration.

~~~
   library Warfarin_NSAIDs_CDS version '1.0'
~~~

**Data Models**
{:.no_toc}

Data models define the structures that can be used within retrieve expressions in the library.

~~~
   using FHIR version '3.0.0'
~~~

For the PDDI CDS artifacts, FHIR model, version 3.0.0 is used as the primary data model within the library. The data model supports all [FHIR R4](https://www.hl7.org/fhir/index.html) resources including MedicationRequest, MedicationStatement, MedicationAdministration, MedicationDispense, Observation, and Condition.

**Libraries**
{:.no_toc}

Statements defined in specific libraries can be reused in other libraries as a reference by a locally assigned name.

~~~
   include PDDICDS_Common version '1.0' called Common
~~~

As an example below, statements defined in the PDDICDS_Common library, version 1.0, can now be referenced using the assigned name of Common.

~~~
  define "NSAID Prescription":
    ContextPrescriptions P
      where Common.ToCode(P.medication.coding[0]) in "NSAIDs"
~~~

**Terminology**
{:.no_toc}

A value set declaration specifies a local identifier that represents a value set and can be used anywhere within the library.

~~~
  valueset "Warfarins": 'http://hl7.org/fhir/uv/pddi/ValueSet/valueset-warfarin'
~~~

This definition establishes the local identifier `Warfarins` as a reference to the external identifier for the value set, an uniform resource identifier (URI) in this case is `http://hl7.org/fhir/uv/pddi/ValueSet/valueset-warfarin`. The external identifier should be an ID or a uniform resource identifier (URI).

This valueset definition can then be used within the library wherever a valueset can be used:

~~~
  define "Warfarin Rx":
    [MedicationRequest: "Warfarins"] MR
      where MR.authoredOn.value in Interval[Today() - 100 days, null]
~~~

The above statement collects all MedicationRequest resources with a code in the `Warfarins` value set and the authored date within 100-day look-back period.

For the PDDI CDS value sets, refer to [Terminology](terminology.html) page for the list of value sets used by this implementation.

**Parameters**
{:.no_toc}

The parameters defined in a library MAY be referenced by name in any expression within the library. 

~~~
parameter ContextPrescriptions List<MedicationRequest>
~~~

The `context` element of CDS Hook request contains the MedicationRequest resources specified in `medications` element as described in the example below. The data is parsed and assigned to the `ContextPrescriptions` parameter defined in the library.

~~~
"context": {
  ...
  "medications": {
    "resourceType": "Bundle",
      "entry": [
        {
          "resource": {
            ... // FHIR MedicationRequest
          }
        }
      ]
    }
  }
}
~~~

This parameter definition can now be referenced anywhere within the CQL library:

~~~
define "NSAID Prescription":
  ContextPrescriptions P
    where Common.ToCode(P.medication.coding[0]) in "NSAIDs"
~~~

**Context**
{:.no_toc}

The context declaration defines the overall context for statements within the library.

~~~
context Patient
~~~

The `context Patient` declaration to restrict the information that will be returned from a retrieve of a single patient.

**Statements**
{:.no_toc}

`Define` statements describing named expressions that can be referenced either from other expressions within the same library or by containing decision support artifacts.

~~~
define "GI Bleeds Condition":
  Last(
    [Condition: "History of GI Bleeds"] C
      sort by assertedDate.value
  )
~~~

This example defines the `GI Bleeds Condition` statement, which retrieves the most recent condition with a code in the `History of GI Bleeds` value set.

#### Connection of CQL to PlanDefinition
{:.no_toc}

**Library**
{:.no_toc}

The Library resource contains the CQL library in base64 format. As an example below, the CQL library is encoded to base64 format and stored by using the Library FHIR resource.

In Library resource, the `relatedArtifact` element defines the dependent relationship between libraries. For example, `warfarin-nsaids-cds` library references the `PDDICDS_Common` library and that relationship is described in the `relatedArtifact` element.

~~~
{
  "resource": {
    "resourceType": "Library",
    "id": "warfarin-nsaids-cds",
    ...
    "relatedArtifact": [
      {
        "type": "depends-on",
        "resource": {
          "reference": "Library/PDDICDSCommon"
        }
      }
    ],
    "content": [
      {
        "contentType": "application/elm+xml",
        "data": "..." // CQL base64 logic content
      }
    ]
  }
}
~~~

When the Clinical Reasoning module processes the data, the library resource is loaded from local FHIR server and then the logic content in base64 format is decoded. If the content is in CQL format, it is translated into ELM XML format which is a machine-readable canonical representation.

For the best performance, the CQL logic should be translated into ELM XML format before being stored in the Library resource. This will enable the Clinical Reasoning module to execute the CQL logic without performing the translation.

**PlanDefinition**
{:.no_toc}

In PlanDefinition resource, the `library` element defines the reference to the logic used by the PlanDefinition. An example for `warfarin-nsaids-cds` PlanDefinition resource is the reference to `Library/warfarin-nsaids-cds` Library resource. 

~~~
"library": [
  {
    "reference": "Library/warfarin-nsaids-cds"
  }
],
~~~

This library contains the logic used by the PlanDefinition to establish the condition, and to dynamically construct the guidance so that it reflects the data for the current patient.

As described in the `condition` element of the PlanDefinition section, the Clinical Reasoning module will load the statement in the `condition` element defined in the CQL library. Then the statement will be evaluated by the CQL engine. For example, the `Inclusion Criteria` statement in the library below will be loaded and evaluated to determine whether or not the condition is satisfied.

~~~
define "Inclusion Criteria":
  if "Is context medication topical diclofenac"
    then "Is warfarin in prefetch"
  else (
    "Is context medication systemic NSAID"
      and "Is warfarin in prefetch"
  )

define "Is context medication topical diclofenac":
  exists ("Topical Diclofenac Prescription")

define "Topical Diclofenac Prescription":
  ContextPrescriptions P
    where Common.ToCode(P.medication.coding[0]) in "Topical Diclofenac"

define "Is warfarin in prefetch":
  exists ("Warfarin Rx")

define "Warfarin Rx":
  [MedicationRequest: "Warfarins"] MR
    where MR.authoredOn.value in Interval[Today() - 100 days, null]

define "Is context medication systemic NSAID":
  exists ("NSAID Prescription")

define "NSAID Prescription":
  ContextPrescriptions P
    where Common.ToCode(P.medication.coding[0]) in "NSAIDs"
~~~

Similar to `condition` element, `dynamicValue` element within the `action` element allows to customize the card content depending on the logic defined in the library. As an example, the `Get Base Summary` statement below specified in `dynamicValue` element will be evaluated, and the dynamic content containing medication names will be returned.

~~~
define "Get Base Summary":
  'Potential Drug-Drug Interaction between warfarin (' 
    + Common.GetMedicationNames("Warfarin Rx") 
    + ') and NSAID (' 
    + Common.GetMedicationNames("NSAID Prescription")
    + ').'

define "Get Base Detail":
  'Increased risk of bleeding.'

define "Get Base Indicator":
  if "Is context medication topical diclofenac"
    then 'info'
  else 'warning'
~~~

### Knowledge Artifacts 

The following artifacts represent the behavior for implementing PDDI CDS:

| Resource | Type | Description |
| --- | --- | --- |
| [FHIRHelpers v3.0.0 Library](artifacts/FhirHelpers_v3.0.0-library.json) | [Library](https://www.hl7.org/fhir/library.html) |  |
| [FHIRHelpers v3.0.0 Library ELM](artifacts/FhirHelpers_v3.0.0_elm.xml) | [Library](https://www.hl7.org/fhir/library.html) |  |
| [FHIRHelpers v3.0.0 CQL](artifacts/FhirHelpers_v3.0.0.cql) | CQL Source |  |
| [Common PDDI-CDS Library](artifacts/pddi-cds-common-library.json) | [Library](https://www.hl7.org/fhir/library.html) | CQL Library that provides common logic for the recommendations |
| [Common PDDI-CDS CQL](artifacts/pddi-cds-common-logic.cql) | CQL Source | For reference, the complete CQL source for the common logic. |
| [Warfarin NSAIDs Select PlanDefinition](artifacts/warfarin-nsaids/warfarin-nsaids-cds-plandefinition.json)  |	[PlanDefinition](https://www.hl7.org/fhir/plandefinition.html)  | Event-Condition-Action rule that implements behavior for Warfarin NSAIDs Recommendation |
| [Warfarin NSAIDs Sign PlanDefinition](artifacts/warfarin-nsaids/warfarin-nsaids-cds-plandefinition-sign.json)  |	[PlanDefinition](https://www.hl7.org/fhir/plandefinition.html)  | Event-Condition-Action rule that implements behavior for Warfarin NSAIDs Recommendation |
| [Warfarin NSAIDs Select Library](artifacts/warfarin-nsaids/warfarin-nsaids-cds-library.json) | [Library](https://www.hl7.org/fhir/library.html) | Defines the data requirements to support evaluation of Warfarin NSAIDs recommendation |
| [Warfarin NSAIDs Sign Library](artifacts/warfarin-nsaids/warfarin-nsaids-cds-library-sign.json) | [Library](https://www.hl7.org/fhir/library.html) | Defines the data requirements to support evaluation of Warfarin NSAIDs recommendation |
| [Warfarin NSAIDs CQL](artifacts/warfarin-nsaids/warfarin-nsaids-cds-logic.cql) | CQL Source | For reference, the complete CQL source for Warfarin NSAIDs recommendation |
| [Warfarin NSAIDs ActivityDefinition](artifacts/warfarin-nsaids/activitydefinition-bundle.json) | Example Activity Definition Bundle |  |
| [Digoxin Cyclosporine Select PlanDefinition](artifacts/digoxin-cyclosporine/digoxin-cyclosporine-cds-plandefinition.json)  |	[PlanDefinition](https://www.hl7.org/fhir/plandefinition.html)  | Event-Condition-Action rule that implements behavior for Digoxin Cyclosporine Recommendation |
| [Digoxin Cyclosporine Sign PlanDefinition](artifacts/digoxin-cyclosporine/digoxin-cyclosporine-cds-plandefinition-sign.json)  |	[PlanDefinition](https://www.hl7.org/fhir/plandefinition.html)  | Event-Condition-Action rule that implements behavior for Digoxin Cyclosporine Recommendation |
| [Digoxin Cyclosporine Select Library](artifacts/digoxin-cyclosporine/digoxin-cyclosporine-cds-library.json) | [Library](https://www.hl7.org/fhir/library.html) | Defines the data requirements to support evaluation of Digoxin Cyclosporine recommendation |
| [Digoxin Cyclosporine Sign Library](artifacts/digoxin-cyclosporine/digoxin-cyclosporine-cds-library-sign.json) | [Library](https://www.hl7.org/fhir/library.html) | Defines the data requirements to support evaluation of Digoxin Cyclosporine recommendation |
| [Digoxin Cyclosporine CQL](artifacts/digoxin-cyclosporine/digoxin-cyclosporine-cds-logic.cql) | CQL Source | For reference, the complete CQL source for Digoxin Cyclosporine recommendation |
| [Digoxin Cyclosporine ActivityDefinition](artifacts/digoxin-cyclosporine/activitydefinition-bundle.json) | Example Activity Definition Bundle |  |


---

File: repos/HL7_SLASH_PDDI-CDS/input/pagecontent/MIM.md

#### Minimal Information Model 

> **Drugs Involved:** Warfarin and non-steroidal anti-inflamatory drugs (NSAIDs).
> *Comment:*  The drugs involved in a PDDI MUST be explicitly stated. To support a computable representation of the PDDI, the drugs involved SHOULD be listed as sets of terms from a terminology such as RxNorm or the Anatomical Therapeutic Chemical Classification System (ATC). Such so called value sets MAY be referenced by a URI to a public repository such as the Value Set Authority Center that is maintained by the United States National Library of Medicine.

> **Clinical Consequences:** Increased risk of bleeding including gastrointestinal bleeding, intracranial hemorrhage, and cerebral hemorrhage.
> *Comment:* The clinical consequences associated with a PDDI MUST be reported if known. Clinical consequences SHOULD refer health outcomes as specifically as possible. To support a computable representation of the PDDI, clinical consequences SHOULD be represented as one or more sets of terms from a terminology such as ICD-10 or SNOMED-CT. Such so called value sets MAY be referenced by a URI to a public repository such as the Value Set Authority Center that is maintained by the United States National Library of Medicine.

> **Seriousness:** Bleeding is a serious potential clinical consequence because it can result in death, life-threatening hospitalization, and disability.
> *Comment:* A PDDI clinical consequence MUST be noted as serious if it can result in death, life-threatening hospitalization, congenital anomaly, disability, or if it requires intervention to prevent permanent impairment or damage.

> **Severity:** While bleeding is a serious potential clinical consequence, severity can vary from easily tolerated to incapacitating.
> *Comment:* The severity of a PDDI clinical consequence MUST be reported if known. The severity of a PDDI clinical consequence MUST be noted using non-ambiguous terms or phrases. Any of the existing terminologies for adverse event severity, such as Common Terminology Criteria for Adverse Event (CTCAE) [ctcae-wiki], MAY be used for describing a PDDI clinical consequence.

> **Mechanism of Interaction:**  Non-steroidal anti-inflammatory drugs (NSAIDs) have antiplatelet effects which increase the bleeding risk when combined with oral anticoagulants such as warfarin. The antiplatelet effect of NSAIDs lasts only as long as the NSAID is present in the circulation, unlike aspirin’s antiplatelet effect, which lasts for up to 2 weeks after aspirin is discontinued. NSAIDs also can cause peptic ulcers and most of the evidence for increased bleeding risk with NSAIDs plus warfarin is due to upper gastrointestinal bleeding (UGIB).
> *Comment:* The mechanism of a PDDI MUST be reported if known. The description SHOULD be written for a clinician audience and include details that help the clinician decide what course of management action to take. To reduce ambiguity, the description MAY refer to specific drugs or health conditions using codes from terminologies.

> **Recommended Action:** If the NSAID is being used as an analgesic or antipyretic, it would be prudent to use an alternative such as acetaminophen. In some people, acetaminophen can increase the anticoagulant effect of warfarin, so monitor the INR if acetaminophen is used in doses over 2 g/day for a few days. For more severe pain consider short-term opioids in place of the NSAID.
> *Comment:* Any recommended actions that apply to all patient exposures SHOULD be stated using clear and concise language. The recommended action statement SHOULD also provide citations to evidence for a suspected drug-drug interaction (not provided in this example). Recommendations that depend on contextual information/modifying factors SHOULD be mentioned separately to support context-specific presentation of such information.

> **Contextual Information/Modifying Factors:** 
> 1. The NSAID is topical diclofenac
> * **Recommended Action:** No special precautions
> * **Evidence for a Suspected Drug-Drug Interaction:**  Topical diclofenac has relatively low systemic absorption; in one study a topical gel (16 g/day) produced about 6% of the absorption seen with systemic administration of 150 mg/day. A higher than recommended dose of topical gel (48 g/day) produced 20% of a systemic dose of diclofenac.
> 2. The NSAID is NOT topical diclofenac but the patient is concomitantly taking a proton pump inhibitor or misoprostol
> * **Recommended Action:** Assess risk and take action if necessary
> * **Evidence for a Suspected Drug-Drug Interaction:**  Proton pump inhibitors and misoprostol may reduce the risk of UGIB in patients receiving NSAIDs and warfarin.
> 3. The NSAID is NOT topical diclofenac, the patient is NOT concomitantly taking a proton pump inhibitor or misoprostol, and the patient has one or more of the following risk factors:
> * History of upper gastrointestinal bleeding (UGIB) or peptic ulcer or age > 65 years old
>   * **Recommended Action:** Use only if benefit outweighs risk
>   * **Evidence for a Suspected Drug-Drug Interaction:** Patients with a history of UGIB or peptic ulcer may have an increased risk of UGIB from this interaction. The extent to which older age is an independent risk factor for UGIB due to these interactions is not firmly established, but UGIB in general is known to increase with age.
> * Concomitantly taking systemic corticosteroids, aldosterone antagonists, or high dose or multiple NSAIDs
>   * **Recommended Action:** Use only if benefit outweighs risk
>   * **Evidence for a Suspected Drug-Drug Interaction:** Both corticosteroids and aldosterone antagonists have been shown to substantially increase the risk of UGIB in patients on NSAIDs, with relative risks of 12.8 and 11 respectively compared to a risk of 4.3 with NSAIDs alone [masclee-2014].
> *Comment:*  Contextual information/modifying factors are necessary for alerts that are both sensitive and specific. Like clinical consequences, each known factor SHOULD be stated as specifically as possible. The factors SHOULD be amenable to implementation as executable logic using value sets from clinical terminologies such as RxNorm, the Anatomical Therapeutic Chemical Classification System (ATC), ICD-10, and SNOMED-CT. As is used in this example, each factor SHOULD be related to a specific recommended action that is supported by the evidence for a suspected drug-drug interaction.

> **Frequency of Exposure to the PDDI:** Unknown.
> *Comment:* Frequency of exposure and frequency of harm information is rarely available but can help a clinician assess the risk/benefit trade-off of exposure to PDDI. Such information SHOULD be provided if available.

> **Frequency of Harm for persons who have been exposed to the PDDI:** Unknown.
> *Comment:* Frequency of exposure and frequency of harm information is rarely available but can help a clinician assess the risk/benefit trade-off of exposure to PDDI. Such information SHOULD be provided if available.



---

File: repos/HL7_SLASH_PDDI-CDS/input/pagecontent/profiles.md

 

The following profiles set the minimum expectations:

* [PDDI ValueSet](requests/structuredefinition-PDDICDS-valueset.xml)

* [PDDI RequestGroup](requests/structuredefinition-PDDICDS-requestgroup-action-indicator.xml)




---

File: repos/HL7_SLASH_PDDI-CDS/input/pagecontent/start.md

[//]: # -*- --from markdown_strict+footnotes+backtick_code_blocks -*-

<!-- backticks refer to elements and hooks only -->

<!-- camel case for resources only, capitalize service name (e.g., Order Select Service or Order Sign Service) -->



## <span style="color:silver"> 2.5.0 </span> Status
Two exemplar PDDI CDS artifacts are available in this implementation guide (i.e., Warfarin + NSAIDs and Digoxin + Cyclosporine). The status of the exemplar PDDI knowledge artifacts for Level 1 Implementation is structured, and semi-structured for the Level 2 Implementation.

> *Note:* The PDDIs were chosen for level of complexity, decision points, and contextual factors. These examples serve as reference for the methodology and procedures that may be adopted when developing and implementing PDDI CDS using CQL, FHIR, and CDS Hooks.





---

File: repos/HL7_SLASH_PDDI-CDS/input/pagecontent/terminology.md


### Value Sets


The framework for the PDDI CDS value sets has three components:  

1. **Composite ValueSet**
2. **Element ValueSet**
3. **Element ValueSet-exclude**
 
Delineation in the components of value sets is based on characteristics or hierarchy of the terminology and the CDS service. The CDS service typically calls individual identifiers in the Element ValueSet through the Composite ValueSet. The CDS Service MUST call an Element ValueSet in the event a Composite ValueSet is unnecessary or unavailable. This approach allows value sets to be agnostic, reusable, and amenable to automated updating.

#### Scope and Definitions

 While the processes for creating value sets for this implementation guide are amenable to international applications, several of the value sets for the provided CDS artifacts are limited to the United States. The scope of the value set is signified in the version (e.g., US 1.0) and jurisdiction (US) elements. Service agnostic value sets (i.e., Element ValueSet) have a broad description that refrains from limiting the value set to a certain terminology. Service-specific value sets specify a terminology and query details in the description element. Depending on the type of value set, up to two definitions are available, which include:
  
 
* *Extensional Definition* – Explicitly enumerating each of the value set concepts.
* *Intensional Definition* – Defining an algorithm that, when executed by a machine (or interpreted by a human), yields a set of such elements.
 

#### Composite ValueSet
The Composite ValueSet is a superset that references Element ValueSets and Element ValueSets-exclude as needed for the defined CDS Service. It is signified by an upper-case name (e.g., valueset-NSAIDS). For example, non-steroidal anti-inflammatory drugs (NSAIDs) is a class of medications with several members (e.g., ibuprofen, naproxen, diclofenac). The Composite ValueSet references Element ValueSets including valueset-ibuprofen, valueset-naproxen, valueset-diclofenac etc. Composite ValueSets have an Extensional Definition for including and excluding Element ValueSets. The Composite ValueSet references Element ValueSet-exclude to refine included identifiers. 

#### Element ValueSet
The Element ValueSets are signified by lower-case names (e.g., valueset-naproxen). Element ValueSets are unique in that the identifiers are available in the Extensional and Intensional Definitions. Element ValueSets MUST have a persistent URL for the Composite ValueSet to reference. The Extensional Definition of enumerated identifiers and names are available through `ValueSet.compose.include.concept.` The Intensional Definition identifiers and names are available through `ValueSet.expansion.contains.` The Intensional Definition is a general query to a public Terminology server, typically through an API with a RESTful query. The intent of an Element ValueSet is to contain a broad capture of identifiers at the concept or product level (e.g., naproxen and naproxen 500mg tablet). Refining these value sets occurs at the Composite ValueSet level with Element ValueSet-exclude.  

**RESTful API**
Public terminology servers are now available for several of the most recognized terminologies including: RxNorm, LOINC, and SNOMED-CT. These APIs are convenient, stable, and provide a simplistic mechanism for reproducible queries. 

#### Element ValueSet-exclude
The Element ValueSet-excludes are signified with an identical name to the Element ValueSets but with an "-exclude" (e.g., valueset-naproxen-exclude) These value sets have an enumerated Extensional Definition only, and are a subset of the Element ValueSet. The subset criteria is defined in the `description` element. For example, an Element ValueSet may capture all naproxen products; however, the CDS knowledge only calls for systemic naproxen. By including an Element ValueSet-exclude that has an enumerated set of identifiers that are topical, the Composite ValueSet can provide a more precise set of identifiers that closely matched the CDS knowledge. The Composite ValueSet and Element ValueSet-exclude are CDS Service specific. In the situation where Element ValueSet-excludes are not maintained, it will only increase the sensitivity of the CDS system (i.e., error on safety).


<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 1: ValueSet Framework </strong></figcaption>
  <a href = "Value_sets.svg" target ="_blank" > <img src="Value_sets.svg" class="figure-img img-responsive img-rounded center-block" alt="Value_sets.svg" /></a>
</figure>

### ValueSet

{% include list-simple-valuesets.xhtml %} 

<p/><p/>


### Code Systems



{% include list-simple-codesystems.xhtml %} 

<p/><p/>





---

File: repos/HL7_SLASH_PDDI-CDS/input/pagecontent/testdata.md



To facilitate testing and verification, this guide includes test requests for a number of sample scenarios.

### Warfarin + NSAID

All scenarios invoke the CDS service – so `prefetch` warfarin resources overlap a new NSAID order in each scenario below. 

**order-select without coordination**
* [order-select NSAID + Warfarin no coordination](requests/warfarin-nsaids-order-select-no-coordination.json)

**order-sign without coordination**
* [order-sign NSAID + Warfarin no coordination](requests/warfarin-nsaids-order-sign-no-coordination.json)

**order-select with coordination**
* [order-select NSAID + Warfarin with coordination](requests/warfarin-nsaids-order-select-coordination.json)

**order-sign with coordination**
* [order-sign NSAID + Warfarin with coordination](requests/warfarin-nsaids-order-sign-coordination.json)

**Multiple updates to the draft orders**
* [order-select NSAID + Warfarin](requests/multi-update-draft-orders-1.json)
* [order-select Digoxin + Cyclosporine](requests/multi-update-draft-orders-2.json)
* [order-sign NSAID + Warfarin](requests/multi-update-draft-orders-3.json)
* [order-sign Digoxin + Cyclosporine](requests/multi-update-draft-orders-4.json)



**Scenario 1: `context:` topical diclofenac – MedicationRequest; `prefetch:` warfarin – MedicationRequest **
* [Request NSAID + Warfarin scenario 01](requests/request-warfarin-nsaid-scenario-01.json)

**Scenario 2: `context:` systemic NSAID – MedicationRequest; `prefetch:` warfarin – MedicationRequest, proton pump inhibitor – MedicationRequest,**
* [Request NSAID + Warfarin scenario 02](requests/request-warfarin-nsaid-scenario-02.json) 

**Scenario 3: `context:` systemic NSAID – MedicationRequest; `prefetch:` wafarin – MedicationDispense, >65 years old – Patient, systemic corticosteroid – MedicationRequest**
* [Request NSAID + Warfarin scenario 03](requests/request-warfarin-nsaid-scenario-03.json) 

**Scenario 4: `context` systemic NSAID – MedicationRequest; `prefetch:` wafarin – MedicationAdministration, <65 years old – Patient, history of upper gastrointestinal bleed – Condition, NSAID – MedicationRequest**
* [Request NSAID + Warfarin scenario 04](requests/request-warfarin-nsaid-scenario-04.json) 

**Scenario 5: `context:` systemic NSAID – MedicationRequest; `prefetch:` wafarin – MedicationStatement, <65 years old – Patient, aldosterone antagonist – MedicationRequest**
* [Request NSAID + Warfarin scenario 05](requests/request-warfarin-nsaid-scenario-05.json) 


### Digoxin + Cyclosporine

**order-select without coordination**
* [order-select Digoxin + Cyclosporine no coordination](requests/digoxin-cyclosporine-order-select-no-coordination.json)

**order-sign without coordination**
* [order-sign Digoxin + Cyclosporine no coordination](requests/digoxin-cyclosporine-order-sign-no-coordination.json)

**order-select with coordination**
* [order-select Digoxin + Cyclosporine with coordination](requests/digoxin-cyclosporine-order-select-coordination.json)

**order-sign with coordination**
* [order-sign Digoxin + Cyclosporine with coordination](requests/digoxin-cyclosporine-order-sign-coordination.json)


**Scenario 1: `context:` cyclosporine – MedicationRequest; `prefetch:` digoxin – MedicationDispense, digoxin level – Observation, furosemide – MedicationDispense**
* [Request Digoxin + Cyclosporine scenario 01](requests/request-digoxin-cyclosporine-scenario-01.json)

**Scenario 2: `context:` cyclosporine – MedicationRequest; `prefetch:` digoxin – MedicationDispense, cyclosporine - MedicationRequest, potassium – Observation,** 
* [Request Digoxin + Cyclosporine scenario 02](requests/request-digoxin-cyclosporine-scenario-02.json)

**Scenario 3: `context:` digoxin – MedicationRequest; `prefetch:` cyclosporine – MedicationRequest, renal – Observation**
* [Request Digoxin + Cyclosporine scenario 03](requests/request-digoxin-cyclosporine-scenario-03.json)

**Scenario 4: `context:` digoxin – MedicationRequest; `prefetch:` cyclosporine – MedicationRequest, digoxin – MedicationDispense, digoxin level – Observation**
* [Request Digoxin + Cyclosporine scenario 04](requests/request-digoxin-cyclosporine-scenario-04.json)


---

File: repos/HL7_SLASH_PDDI-CDS/input/pagecontent/use-cases.md

### Introduction

Note that assumption of the use cases presented on this page is that the drugs involved in the potential drug-drug interaction (PDDI) CDS service logic include only sets of terminology codes for specific semantic clinical/branded drugs that have a formulation indicative of the route of administration. This is very typical for electronic health record systems. It is left to developers of CDS rules to consider how to handle situations where an EHR system triggers the CDS service using a selected ingredient rather than a semantic clinical drug.

### Warfarin + NSAIDs


The  Warfarin + non-steroidal anti-inflamatory drugs (NSAIDs) knowledge artifact represents a relatively complex contextualized PDDI CDS algorithm. The knowledge artifact contains logic that uses both drug and patient contextual factors. The original rule was developed by clinical experts as part of the W3C Community Group effort to develop a [minimal information model for representing clinically actionable knowledge about PDDIs](https://w3id.org/hclscg/pddi). Table 1 is the Warfarin + NSAIDs knowledge artifact at the narrative level using the minimal information model. The IG use case shows that the potential interactions often need to consider route and formulation. The minimal information model specifies  contextual  information/modifying factors which these would fall under.

#### Warfarin + NSAIDs Logic Table
{:.no_toc}

<figure class="figure">
	<figcaption class="figure-caption">
		Legend: <span style="color: #30d529">&#9678;</span> = No special precautions.
		<span style="color: #f9bd3b">&#9632;</span> = Assess risk and take action if necessary.
		<span style="color: #fb0082">&#9670;</span> = Use only if benefit outweighs risk.
		<br>
		Note that this rule was originally developed through &quot;Individualized Drug Interactions&quot; (AHRQ Project R21-HS023826-01) by Daniel Malone, John Horn, and Philp Hansten.
	</figcaption>
	<a href = "Warfarin-NSAID-TREE-opthalmic-addition.png" target ="_blank" > <img src="Warfarin-NSAID-TREE-opthalmic-addition.png" class="figure-img img-responsive img-rounded center-block" alt="Warfarin + NSAID PDDI" /></a>
</figure>

<p style="text-align: left"><strong>Footnotes:</strong>
<ol type="1">
  <li style="text-align: left">Topical diclofenac has relatively low systemic absorption; in one study a topical gel (16 g/day) produced about 6% of the absorption seen with systemic administration of 150 mg/day. A higher than recommended dose of topical gel (48 g/day) produced 20% of a systemic dose of diclofenac. The UK Summary of Product Characteristics for Voltarol Ophtha Multidose Eye Drops states, "No measurable levels of diclofenac could be found in humans after ocular application of diclofenac sodium eye drops". The FDA-approved SPL for Diclofenac Sodium Ophthalmic Solution 0.1% states, "Results from a bioavailability study established that plasma levels of diclofenac following ocular instillation of two drops of Diclofenac sodium ophthalmic solution, 0.1% to each eye were below the limit of quantification (10 ng/mL) over a 4-hour period. This study suggests that limited, if any, systemic absorption occurs with Diclofenac sodium ophthalmic solution". </li>
  <li style="text-align: left">If the NSAID is being used as an analgesic or antipyretic, it would be prudent to use an alternative such as acetaminophen. In some people, acetaminophen can increase the anticoagulant effect of warfarin, so monitor the INR if acetaminophen is used in doses over 2 g/day for a few days. For more severe pain consider short-term opioids in place of the NSAID.</li>
  <li style="text-align: left">Proton pump inhibitors and misoprostol may reduce the risk of upper gastrointestinal bleeding (UGIB) in patients receiving NSAIDs and warfarin.</li>
  <li style="text-align: left">Patients with a history of UGIB or peptic ulcer may have an increased risk of UGIB from this interaction. The extent to which older age is an independent risk factor for UGIB due to these interactions is not firmly established, but UGIB in general is known to increase with age.</li>
  <li style="text-align: left">Both corticosteroids and aldosterone antagonists have been shown to substantially increase the risk of UGIB in patients on NSAIDs, with relative risks of 12.8 and 11 respectively compared to a risk of 4.3 with NSAIDs alone [[masclee-2014]]</li>
</ol>
</p>


#### Warfarin-NSAIDS PDDI PDDI Minimal Information Model Elements
{:.no_toc}

<div>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Drugs involved</strong>: Warfarin and non-steroidal anti-inflammatory drugs (NSAIDs)</td>
      </tr>
      <tr>
	<td>
	  <strong>Comment:</strong> The drugs involved in a PDDI MUST be explicitly stated. To support a computable representation of the PDDI, the drugs involved SHOULD be listed as sets of terms from a terminology such as <a href="https://www.nlm.nih.gov/research/umls/rxnorm/" target="new">RxNorm</a> or the <a href="https://www.whocc.no/atc/structure_and_principles/" target="new">Anatomical Therapeutic Chemical Classification System (ATC)</a>. Such so called <i>value sets</i> MAY be referenced by a URI to a public repository such as the <a href="https://vsac.nlm.nih.gov/" target="new">Value Set Authority Center</a> that is maintained by the <a href="https://www.nlm.nih.gov/" target="new">United States National Library of Medicine</a>.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Clinical Consequences</strong>: Increased risk of bleeding including gastrointestinal bleeding,  intracranial hemorrhage,  and cerebral hemorrhage</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> The clinical consequences associated with a PDDI MUST be reported if known. Clinical consequences SHOULD refer health outcomes as specifically as possible. To support a computable representation of the PDDI, clinical consequences SHOULD be represented as one or more sets of terms from a terminology such as <a href="http://www.who.int/classifications/icd/en/" target="new">ICD-10</a> or <a href="https://www.snomed.org/snomed-ct" target="new">SNOMED-CT</a>. Such so called <i>value sets</i> MAY be referenced by a URI to a public repository such as the <a href="https://vsac.nlm.nih.gov/" target="new">Value Set Authority Center</a> that is maintained by the <a href="https://www.nlm.nih.gov/" target="new">United States National Library of Medicine</a>.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Seriousness</strong>: Bleeding is a serious potential clinical consequence because it can result in death, life-threatening hospitalization, and disability. </td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> A PDDI clinical consequence MUST be noted as <i>serious</i> if it can result in death, life-threatening hospitalization, congenital anomaly, disability, or if it requires intervention to prevent permanent impairment or damage.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Mechanism of Interaction</strong>: Non-steroidal anti-inflammatory drugs (NSAIDs) have
          antiplatelet effects which increase the bleeding risk when combined with oral anticoagulants such as
          warfarin. The antiplatelet effect of NSAIDs lasts only as long as the NSAID is present in the circulation,
          unlike aspirin’s antiplatelet effect, which lasts for up to 2 weeks after aspirin is discontinued. NSAIDs also
          can cause peptic ulcers and most of the evidence for increased bleeding risk with NSAIDs plus warfarin is due to
          upper gastrointestinal bleeding (UGIB).</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> The mechanism of a PDDI MUST be reported if known. The description SHOULD be written for a clinician audience and include details that help the clinician decide what course of management action to take. To reduce ambiguity, the description MAY refer to specific drugs or health conditions using codes from terminologies. </td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Recommended Action</strong>: If the NSAID is being used as an analgesic or antipyretic,
          it would be prudent to use an alternative such as acetaminophen. In some people, acetaminophen can
          increase the anticoagulant effect of warfarin, so monitor the INR if acetaminophen is used in doses
          over 2 g/day for a few days. For more severe pain consider short-term opioids in place of the NSAID.</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> Any recommended actions that apply to all patient exposures SHOULD be stated using clear and concise language. The recommended action statement SHOULD also provide citations to <a href="http://purl.obolibrary.org/obo/MPIO_0000004" target="new">evidence for a suspected drug-drug interaction</a> (not provided in this example). Recommendations that depend on <a href="http://purl.obolibrary.org/obo/MPIO_0000000" target="new">contextual information/modifying factors</a> SHOULD be mentioned separately to support context-specific presentation of such information.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Contextual information/modifying factors</strong>:
          <ol>
            <li>The NSAIDs is topical diclofenac</li>
            <ul>
              <li><strong>Recommended Action:</strong> No special precautions</li>
              <li><strong>Evidence for a Suspected Drug-Drug Interaction:</strong> Topical diclofenac has relatively
		low systemic absorption; in one study a topical gel (16 g/day) produced about 6% of
		the absorption seen with systemic administration of 150 mg/day. A higher than recommended
		dose of topical gel (48 g/day) produced 20% of a systemic dose of diclofenac.</li>
            </ul>
            <li>The NSAID is NOT topical diclofenac but the patient is concomitantly taking a
              proton pump inhibitor or misoprostol</li>
            <ul>
              <li><strong>Recommended Action:</strong> Assess risk and take action if necessary</li>
              <li><strong>Evidence for a Suspected Drug-Drug Interaction:</strong> Proton pump inhibitors and misoprostol may reduce the risk of UGIB in patients receiving NSAIDs and warfarin. </li>
            </ul>
            <li>The NSAID is NOT topical diclofenac, the patient is NOT concomitantly taking a proton pump inhibitor or misoprostol, and the patient has one or more of the following risk factors:</li>
            <ul>
              <li>History of upper gastrointestinal bleeding (UGIB) or peptic ulcer or age > 65 years old</li>
              <ul>
		<li><strong>Recommended Action:</strong> Use only if benefit outweighs risk</li>
		<li><strong>Evidence for a Suspected Drug-Drug Interaction:</strong> Patients with a
                  history of UGIB or peptic ulcer may have an increased risk of UGIB from this interaction.
                  The extent to which older age is an independent risk factor for UGIB due to these interactions
                  is not firmly established, but UGIB in general is known to increase with age.</li>
              </ul>
              <li>Concomitantly taking systemic corticosteroids, aldosterone antagonists, or high dose or multiple NSAIDs</li>
              <ul>
		<li><strong>Recommended Action:</strong> Use only if benefit outweighs risk</li>
		<li><strong>Evidence for a Suspected Drug-Drug Interaction:</strong> Both corticosteroids
                  and aldosterone antagonists have been shown to substantially increase the risk of UGIB in
                  patients on NSAIDs, with relative risks of 12.8 and 11 respectively compared
                  to a risk of 4.3 with NSAIDs alone (<a href='https://www.ncbi.nlm.nih.gov/pubmed/24937265'>Masclee *et al.* 2014</a>)</li>
              </ul>
            </ul>
          </ol>
	</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> <a href='http://purl.obolibrary.org/obo/MPIO_0000000' target="new">Contextual information/modifying factors</a> are necessary for alerts that
          are both sensitive and specific. Like clinical consequences, each known factor SHOULD be
          stated as specifically as possible. The factors SHOULD be amenable to implementation as executable
          logic using value sets from clinical terminologies such as <a href="https://www.nlm.nih.gov/research/umls/rxnorm/" target="new">RxNorm</a>, the
	  <a href="https://www.whocc.no/atc/structure_and_principles/" target="new">Anatomical Therapeutic Chemical Classification System (ATC)</a>, <a href="http://www.who.int/classifications/icd/en/" target="new">ICD-10</a>, and <a href="https://www.snomed.org/snomed-ct" target="new">SNOMED-CT</a>. As is used in this
          example, each factor SHOULD be related to a specific <a href='http://purl.obolibrary.org/obo/MPIO_0000008' target="new">recommended action</a> that is supported by the <a href='http://purl.obolibrary.org/obo/MPIO_0000004' target="new">evidence for a suspected drug-drug interaction</a></td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Frequency of Exposure to the PDDI:</strong> Unknown</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> Frequency of exposure and frequency of harm information is
          rarely available but can help a clinician assess the risk/benefit trade-off of exposure to PDDI. Such information SHOULD be provided if available. </td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Frequency of Harm for persons who have been exposed to the PDDI:</strong> Unknown</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> Frequency of exposure and frequency of harm information is
          rarely available but can help a clinician assess the risk/benefit trade-off of exposure to PDDI. Such information SHOULD be provided if available. </td>
      </tr>
    </table>
</div>

### Digoxin + Cyclosporine


This is another IG use case that  shows that the potential interactions often need to consider route and formulation. The minimal information model specifies  contextual  information/modifying factors which these would fall under.

#### Digoxin + Cyclosporine Logic Table
{:.no_toc}

<figure class="figure">
	<figcaption class="figure-caption">
		Legend: <span style="color: #30d529">&#9678;</span> = No special precautions.
		<span style="color: #f9bd3b">&#9632;</span> = Assess risk and take action if necessary.
		<span style="color: #fb0082">&#9670;</span> = Use only if benefit outweighs risk.
		<br>
		Note that this rule was originally developed through &quot;Individualized Drug Interactions&quot; (AHRQ Project R21-HS023826-01) by Thomase Reese, Daniel Malone, John Horn, and Philp Hansten.
	</figcaption>
	<a href = "Digoxin_Cyclosporine_tree.png" target ="_blank" > <img src="Digoxin_Cyclosporine_tree.png" class="figure-img img-responsive img-rounded center-block" alt="Digoxin + Cyclosporine PDDI" /></a>
</figure>

<p style="text-align: left"><strong>Footnotes:</strong>
<ol type="1">
	<li style="text-align: left"> For patients with a reliable plasma digoxin concentration in normal range, it is reasonable to anticipate an increase in plasma concentrations after the initiation of cyclosporine. Following initiation, close monitoring and adjusting the digoxin dose as needed is recommended. (Dorian et al. Clin Invest Med 1988; 11(2):108-112) (Dorian et al. Transplant Proc. 1987; 19(1):1825-1827) </li>
	<li style="text-align: left"> 50-70% of digoxin is excreted unchanged in the urine. Changing renal function may increase serum concentrations and risk of toxicity, (Digoxin-FDA [prescribing information] NDA 20405/S-004) </li>
	<li style="text-align: left"> Hypokalemia, hypomagnesemia, and hypercalcemia may potentiate digoxin toxicity. (Lip et al. Postgrad Med J. 1993; 69(811):337)  </li>
</ol>
</p>


#### Digoxin + Cyclosporine PDDI Minimal Information Model Elements
{:.no_toc}

<div>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Drugs involved</strong>: Digoxin and Cyclosporine</td>
      </tr>
      <tr>
	<td>
	  <strong>Comment:</strong> The drugs involved in a PDDI MUST be explicitly stated. To support a computable representation of the PDDI, the drugs involved SHOULD be listed as sets of terms from a terminology such as <a href="https://www.nlm.nih.gov/research/umls/rxnorm/" target="new">RxNorm</a> or the <a href="https://www.whocc.no/atc/structure_and_principles/" target="new">Anatomical Therapeutic Chemical Classification System (ATC)</a>. Such so called <i>value sets</i> MAY be referenced by a URI to a public repository such as the <a href="https://vsac.nlm.nih.gov/" target="new">Value Set Authority Center</a> that is maintained by the <a href="https://www.nlm.nih.gov/" target="new">United States National Library of Medicine</a>.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Clinical Consequences</strong>: Increased risk of digitalis toxicity that may lead to cardiac arrhythmias</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> The clinical consequences associated with a PDDI MUST be reported if known. Clinical consequences SHOULD refer health outcomes as specifically as possible. To support a computable representation of the PDDI, clinical consequences SHOULD be represented as one or more sets of terms from a terminology such as <a href="http://www.who.int/classifications/icd/en/" target="new">ICD-10</a> or <a href="https://www.snomed.org/snomed-ct" target="new">SNOMED-CT</a>. Such so called <i>value sets</i> MAY be referenced by a URI to a public repository such as the <a href="https://vsac.nlm.nih.gov/" target="new">Value Set Authority Center</a> that is maintained by the <a href="https://www.nlm.nih.gov/" target="new">United States National Library of Medicine</a>.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Seriousness</strong>: Digitalis toxicity is a serious potential clinical consequence because it can result in death, life-threatening hospitalization, and disability. </td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> A PDDI clinical consequence MUST be noted as <i>serious</i> if it can result in death, life-threatening hospitalization, congenital anomaly, disability, or if it requires intervention to prevent permanent impairment or damage.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Mechanism of Interaction</strong>: The mechanism of this interaction appears to be mediated through P-glycoprotein inhibition by cyclosporine. P-glycoprotein is a major transporter for digoxin efflux.</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> The mechanism of a PDDI MUST be reported if known. The description SHOULD be written for a clinician audience and include details that help the clinician decide what course of management action to take. To reduce ambiguity, the description MAY refer to specific drugs or health conditions using codes from terminologies.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Recommended Action</strong>: For patients with a reliable plasma digoxin concentration in normal range, it is reasonable to anticipate an increase in plasma concentrations after the initiation of cyclosporine. Following initiation, close monitoring and adjusting the digoxin dose as needed is recommended.</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> Any recommended actions that apply to all patient exposures SHOULD be stated using clear and concise language. The recommended action statement SHOULD also provide citations to <a href='http://purl.obolibrary.org/obo/MPIO_0000004' target="new">evidence for a suspected drug-drug interaction</a> (not provided in this example). Recommendations that depend on <a href='http://purl.obolibrary.org/obo/MPIO_0000000' target="new">contextual information/modifying factors</a> SHOULD be mentioned separately to support context-specific presentation of such information.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Contextual information/modifying factors</strong>:
          <ol>
            <li>Relevant digoxin concentration in normal range
              <ul><strong>Recommended Action:</strong> Assess risk and take action if necessary</ul>
              <ul><strong>Evidence for a Suspected Drug-Drug Interaction:</strong> For patients with a reliable plasma digoxin concentration in normal range, it is reasonable to anticipate an increase in plasma concentrations after the initiation of cyclosporine. Following initiation, close monitoring and adjusting the digoxin dose as needed is recommended. (Dorian et al. Clin Invest Med 1988; 11(2):108-112) (Dorian et al. Transplant Proc. 1987; 19(1):1825-1827). Taken 4-6 hours after the most recent dose, the approximate therapeutic range is 0.8 to 2.0 ng/mL (1 to 2.6 nmol/L); however, toxicity has been observed with concentrations in this range.</ul>
            </li>
            <li>Risk factors that may increase digoxin concentration or toxicity independent of cyclosporine include: reduced renal function and electrolyte abnormalities
              <ul><strong>Recommended Action:</strong> Assess risk and take action if necessary</ul>
              <ul><strong>Evidence for a Suspected Drug-Drug Interaction:</strong> </ul>
               <ul>50-70% of digoxin is excreted unchanged in the urine. Changing renal function may increase serum concentrations and risk of toxicity, (Digoxin-FDA [prescribing information] NDA 20405/S-004) </ul>
               <ul>Hypokalemia, hypomagnesemia, and hypercalcemia may potentiate digoxin toxicity. (Lip et al. Postgrad Med J. 1993; 69(811):337)</ul>
            </li>
           </ol>
	</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> <a href='http://purl.obolibrary.org/obo/MPIO_0000000' target="new">Contextual information/modifying factors</a> are necessary for alerts that
          are both sensitive and specific. Like clinical consequences, each known factor SHOULD be
          stated as specifically as possible. The factors SHOULD be amenable to implementation as executable
          logic using value sets from clinical terminologies such as <a href="https://www.nlm.nih.gov/research/umls/rxnorm/" target="new">RxNorm</a>, the
	  <a href="https://www.whocc.no/atc/structure_and_principles/" target="new">Anatomical Therapeutic Chemical Classification System (ATC)</a>, <a href="http://www.who.int/classifications/icd/en/" target="new">ICD-10</a>, and <a href="https://www.snomed.org/snomed-ct" target="new">SNOMED-CT</a>. As is used in this
          example, each factor SHOULD be related to a specific <a href='http://purl.obolibrary.org/obo/MPIO_0000008' target="new">recommended action</a> that is supported by the <a href='http://purl.obolibrary.org/obo/MPIO_0000004' target="new">evidence for a suspected drug-drug interaction</a></td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Frequency of Exposure to the PDDI:</strong> Unknown</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> Frequency of exposure and frequency of harm information is
          rarely available but can help a clinician assess the risk/benefit trade-off of exposure to PDDI. Such information SHOULD be provided if available. </td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Frequency of Harm for persons who have been exposed to the PDDI:</strong> Unknown</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> Frequency of exposure and frequency of harm information is
          rarely available but can help a clinician assess the risk/benefit trade-off of exposure to PDDI. Such information SHOULD be provided if available. </td>
      </tr>
    </table>
</div>

### Cannabis Natural Product Interactions


This is another IG use case that shows a few examples with natural products interactions involving cannabis. Although these are not standard drug - drug interactions, these examples still follow the minimal information model.

#### Cannabis + DOAC Minimal Information Model

##### Cannabis + DOAC Logic Table
{:.no_toc}

<figure class="figure">
	<figcaption class="figure-caption">
		Legend: <span style="color: #30d529">&#9678;</span> = No special precautions.
		<span style="color: #f9bd3b">&#9632;</span> = Usually Avoid Combination or Minimize Risk.
		<span style="color: #fb0082">&#9670;</span> = Avoid combination.
		<br>
		Note that this rule was originally developed by Dr. Kojo Abanyie with input from Dr. Daniel Malone, Dr. Lorenzo Villa-Zapata, and Dr. Xiaotong Li.
	</figcaption>
	<a href = "CBD-DOAC.png" target ="_blank" > <img src="CBD-DOAC.png" class="figure-img img-responsive img-rounded center-block" alt="CBD + DOAC NPDI" /></a>
</figure>

##### Cannabis + DOAC PDDI Minimal Information Model Elements
{:.no_toc}

<div>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Drugs involved</strong>: Cannabis and DOAC</td>
      </tr>
      <tr>
	<td>
	  <strong>Comment:</strong> The drugs involved in a NPDI MUST be explicitly stated. To support a computable representation of the NPDI, the drugs involved SHOULD be listed as sets of terms from a terminology such as <a href="https://www.nlm.nih.gov/research/umls/rxnorm/" target="new">RxNorm</a> or the <a href="https://www.whocc.no/atc/structure_and_principles/" target="new">Anatomical Therapeutic Chemical Classification System (ATC)</a>. Such so called <i>value sets</i> MAY be referenced by a URI to a public repository such as the <a href="https://vsac.nlm.nih.gov/" target="new">Value Set Authority Center</a> that is maintained by the <a href="https://www.nlm.nih.gov/" target="new">United States National Library of Medicine</a>. Due the novelty of natural products in terminology sets, use of <a href="https://mor.nlm.nih.gov/RxMix/" target="new">RxMix</a>may be helpful in finding a set of terms relating to the natural product in consideration.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Clinical Consequences</strong>: Increased risk of bleeding due to increased exposure from DOAC </td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> The clinical consequences associated with a NPDI MUST be reported if known. Clinical consequences SHOULD refer health outcomes as specifically as possible. To support a computable representation of the NPDI, clinical consequences SHOULD be represented as one or more sets of terms from a terminology such as <a href="http://www.who.int/classifications/icd/en/" target="new">ICD-10</a> or <a href="https://www.snomed.org/snomed-ct" target="new">SNOMED-CT</a>. Such so called <i>value sets</i> MAY be referenced by a URI to a public repository such as the <a href="https://vsac.nlm.nih.gov/" target="new">Value Set Authority Center</a> that is maintained by the <a href="https://www.nlm.nih.gov/" target="new">United States National Library of Medicine</a>.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Seriousness</strong>: Bleeding is a serious potential clinical consequence because it can result in death, life-threatening hospitalization, and disability.</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> A NPDI clinical consequence MUST be noted as <i>serious</i> if it can result in death, life-threatening hospitalization, congenital anomaly, disability, or if it requires intervention to prevent permanent impairment or damage.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Mechanism of Interaction</strong>: The mechanism of this interaction appears to be mediated through P-glycoprotein inhibition by cannabis products. DOACS are substrates of P-glycoprotein.</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> The mechanism of a NPDI MUST be reported if known. The description SHOULD be written for a clinician audience and include details that help the clinician decide what course of management action to take. To reduce ambiguity, the description MAY refer to specific drugs or health conditions using codes from terminologies.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Recommended Action</strong>: For patients on DOACs, patients should be monitored for potential increased bleeding incidence as well as miminize any additional bleeding risks. Patients with poor renal function should be monitored more closely due to increased exposure to DOAC, particualrly for patients on dabigatran. In these cases, cannabis should be discontinued to avoid bleeding events. Of note, patients on apixaban potentially have a lower risk of adverse events when taken in conjunction with cannabis. </td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> Any recommended actions that apply to all patient exposures SHOULD be stated using clear and concise language. The recommended action statement SHOULD also provide citations to <a href='http://purl.obolibrary.org/obo/MPIO_0000004' target="new">evidence for a suspected drug-drug interaction</a> (not provided in this example). Recommendations that depend on <a href='http://purl.obolibrary.org/obo/MPIO_0000000' target="new">contextual information/modifying factors</a> SHOULD be mentioned separately to support context-specific presentation of such information.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Contextual information/modifying factors</strong>:
          <ol>
            <li>The DOAC is Apixaban
              <ul><strong>Recommended Action:</strong> No Special Precautions</ul>
              <ul><strong>Evidence for a Suspected Drug-Drug Interaction:</strong> Strong evidence does not exist with apixaban as a prominent substrate of P-gp. In addition, product labeling suggest the risk is associated with strong CYP3A4 and P-gp inhibitors.(Eliquis (apixaban) [prescribing information]) Research also does not strongly support cannabis as a strong dual inhibitor of CYP3A4 and P-gp.</ul>
            </li>
            <li>The DOAC is rivaroxaban, edoxaban, dabigatran
              <ul><strong>Recommended Action:</strong> Minimize Risk</ul>
              <ul><strong>Evidence for a Suspected Drug-Drug Interaction:</strong> </ul>
               <ul>Evidence supports rivaroxaban and edoxaban as prominent substrats of P-gp. This is further substantiated by the product labels for rivaroxaban, edoxaban and dabigatran(Xarelto (rivaroxaban) [prescribing information], Sayvaysa (edoxaban) [prescribing information], and Pradaxa (dabigatran etexilate) [prescribing information]) The potency of cannabis as a P-gp inhibitor is unclear given the available evidence.[Zhu et al. J Pharmacol Exp Ther. 2006;317(2):850-857.]  </ul>
            </li>
            <li>The DOAC is dabigatran and the patient has a CrCl less than 50 or AKI/CKD.
              <ul><strong>Recommended Action:</strong> Avoid Combination</ul>
              <ul><strong>Evidence for a Suspected Drug-Drug Interaction:</strong> </ul>
               <ul>The product labeling for dabigatran has warnings regarding severe renal impairment. It also mentiones that the concomitant use of P-gp inhibitors can cause an increased exposure of dabigatran.(Pradaxa (dabigatran etexilate) [prescribing information])</ul>
            </li>
           </ol>
	</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> <a href='http://purl.obolibrary.org/obo/MPIO_0000000' target="new">Contextual information/modifying factors</a> are necessary for alerts that
          are both sensitive and specific. Like clinical consequences, each known factor SHOULD be
          stated as specifically as possible. The factors SHOULD be amenable to implementation as executable
          logic using value sets from clinical terminologies such as <a href="https://www.nlm.nih.gov/research/umls/rxnorm/" target="new">RxNorm</a>, the
	  <a href="https://www.whocc.no/atc/structure_and_principles/" target="new">Anatomical Therapeutic Chemical Classification System (ATC)</a>, <a href="http://www.who.int/classifications/icd/en/" target="new">ICD-10</a>, and <a href="https://www.snomed.org/snomed-ct" target="new">SNOMED-CT</a>. As is used in this
          example, each factor SHOULD be related to a specific <a href='http://purl.obolibrary.org/obo/MPIO_0000008' target="new">recommended action</a> that is supported by the <a href='http://purl.obolibrary.org/obo/MPIO_0000004' target="new">evidence for a suspected drug-drug interaction</a></td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Frequency of Exposure to the NPDI:</strong> Unknown</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> Frequency of exposure and frequency of harm information is
          rarely available but can help a clinician assess the risk/benefit trade-off of exposure to NPDI. Such information SHOULD be provided if available. </td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Frequency of Harm for persons who have been exposed to the NPDI:</strong> Unknown</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> Frequency of exposure and frequency of harm information is
          rarely available but can help a clinician assess the risk/benefit trade-off of exposure to NPDI. Such information SHOULD be provided if available. </td>
      </tr>
    </table>
</div>

#### Cannabis + Clopidogrel Minimal Information Model

##### Cannabis + Clopidogrel Logic Table
{:.no_toc}

<figure class="figure">
	<figcaption class="figure-caption">
		Legend: <span style="color: #30d529">&#9678;</span> = No special precautions.
		<span style="color: #f9bd3b">&#9632;</span> = Usually Avoid Combination or Minimize Risk.
		<span style="color: #fb0082">&#9670;</span> = Avoid combination.
		<br>
		Note that this rule was originally developed by Dr. Kojo Abanyie with input from Dr. Daniel Malone, Dr. Lorenzo Villa-Zapata, and Dr. Xiaotong Li.
	</figcaption>
	<a href = "CBD-Clopidogrel.png" target ="_blank" > <img src="CBD-Clopidogrel.png" class="figure-img img-responsive img-rounded center-block" alt="CBD + Clopidogrel NPDI" /></a>
</figure>

##### Cannabis + Clopidogrel PDDI Minimal Information Model Elements
{:.no_toc}

<div>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Drugs involved</strong>: Cannabis and Clopidogrel</td>
      </tr>
      <tr>
	<td>
	  <strong>Comment:</strong> The drugs involved in a NPDI MUST be explicitly stated. To support a computable representation of the NPDI, the drugs involved SHOULD be listed as sets of terms from a terminology such as <a href="https://www.nlm.nih.gov/research/umls/rxnorm/" target="new">RxNorm</a> or the <a href="https://www.whocc.no/atc/structure_and_principles/" target="new">Anatomical Therapeutic Chemical Classification System (ATC)</a>. Such so called <i>value sets</i> MAY be referenced by a URI to a public repository such as the <a href="https://vsac.nlm.nih.gov/" target="new">Value Set Authority Center</a> that is maintained by the <a href="https://www.nlm.nih.gov/" target="new">United States National Library of Medicine</a>. Due the novelty of natural products in terminology sets, use of <a href="https://mor.nlm.nih.gov/RxMix/" target="new">RxMix</a>may be helpful in finding a set of terms relating to the natural product in consideration.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Clinical Consequences</strong>: Increased risk of ischemic events due decreased availability of clopidogrel's active metabolite. </td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> The clinical consequences associated with a NPDI MUST be reported if known. Clinical consequences SHOULD refer health outcomes as specifically as possible. To support a computable representation of the NPDI, clinical consequences SHOULD be represented as one or more sets of terms from a terminology such as <a href="http://www.who.int/classifications/icd/en/" target="new">ICD-10</a> or <a href="https://www.snomed.org/snomed-ct" target="new">SNOMED-CT</a>. Such so called <i>value sets</i> MAY be referenced by a URI to a public repository such as the <a href="https://vsac.nlm.nih.gov/" target="new">Value Set Authority Center</a> that is maintained by the <a href="https://www.nlm.nih.gov/" target="new">United States National Library of Medicine</a>.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Seriousness</strong>: Ischemic events are serious can cause serious potential clinical consquences as it can result in death, life-threatening hospitalization, and disability.</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> A NPDI clinical consequence MUST be noted as <i>serious</i> if it can result in death, life-threatening hospitalization, congenital anomaly, disability, or if it requires intervention to prevent permanent impairment or damage.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Mechanism of Interaction</strong>: The mechanism of this interaction appears to be mediated through CYP2C19 inhibition by cannabis products. </td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> The mechanism of a NPDI MUST be reported if known. The description SHOULD be written for a clinician audience and include details that help the clinician decide what course of management action to take. To reduce ambiguity, the description MAY refer to specific drugs or health conditions using codes from terminologies.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Recommended Action</strong>: Monitor the patient for ischemic events and consider discontinuation of the cannabis product or use of another antiplatelet agent such as aspirin or another P2Y12 inhibitor. </td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> Any recommended actions that apply to all patient exposures SHOULD be stated using clear and concise language. The recommended action statement SHOULD also provide citations to <a href='http://purl.obolibrary.org/obo/MPIO_0000004' target="new">evidence for a suspected drug-drug interaction</a> (not provided in this example). Recommendations that depend on <a href='http://purl.obolibrary.org/obo/MPIO_0000000' target="new">contextual information/modifying factors</a> SHOULD be mentioned separately to support context-specific presentation of such information.</td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Contextual information/modifying factors</strong>:
          <ol>
            <li>The patient is only on clopidogrel and a cannabinoid or the patient is on clopidogrel, a cannabinoid, and another non-CYP2C19 inhibitor
              <ul><strong>Recommended Action:</strong> No Special Precautions</ul>
              <ul><strong>Evidence for a Suspected Drug-Drug Interaction:</strong> Clopidogrel needs to be metabolized into it's active metabolite for it to be effective against ischemic events. (Plavix (clopidogrel) [prescribing information]) As such, cannabis inhibtion of CYP2C19 can cause an increase ischemic events.</ul>
            </li>
            <li>The patient is on clopidogrel, a cannabinoid, and an additional CYP2C19 inhibitor.
              <ul><strong>Recommended Action:</strong> Avoid Combination</ul>
              <ul><strong>Evidence for a Suspected Drug-Drug Interaction:</strong>  </ul>
               <ul>Since clopidogrel needs to be metabolized by CYP2C19, inhibtion of cannabis and other CYP2C19 inhibitors can potentially cause a significant increase in ischemic events.</ul>
            </li>
           </ol>
	</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> <a href='http://purl.obolibrary.org/obo/MPIO_0000000' target="new">Contextual information/modifying factors</a> are necessary for alerts that
          are both sensitive and specific. Like clinical consequences, each known factor SHOULD be
          stated as specifically as possible. The factors SHOULD be amenable to implementation as executable
          logic using value sets from clinical terminologies such as <a href="https://www.nlm.nih.gov/research/umls/rxnorm/" target="new">RxNorm</a>, the
	  <a href="https://www.whocc.no/atc/structure_and_principles/" target="new">Anatomical Therapeutic Chemical Classification System (ATC)</a>, <a href="http://www.who.int/classifications/icd/en/" target="new">ICD-10</a>, and <a href="https://www.snomed.org/snomed-ct" target="new">SNOMED-CT</a>. As is used in this
          example, each factor SHOULD be related to a specific <a href='http://purl.obolibrary.org/obo/MPIO_0000008' target="new">recommended action</a> that is supported by the <a href='http://purl.obolibrary.org/obo/MPIO_0000004' target="new">evidence for a suspected drug-drug interaction</a></td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Frequency of Exposure to the NPDI:</strong> Unknown</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> Frequency of exposure and frequency of harm information is
          rarely available but can help a clinician assess the risk/benefit trade-off of exposure to NPDI. Such information SHOULD be provided if available. </td>
      </tr>
    </table>
    <table>
      <tr>
	<td style="background-color: #f4fff2"><strong>Frequency of Harm for persons who have been exposed to the NPDI:</strong> Unknown</td>
      </tr>
      <tr>
	<td><strong>Comment:</strong> Frequency of exposure and frequency of harm information is
          rarely available but can help a clinician assess the risk/benefit trade-off of exposure to NPDI. Such information SHOULD be provided if available. </td>
      </tr>
    </table>
</div>


---

File: repos/HL7_SLASH_PDDI-CDS/input/scenarios/readme.md

Empty file to keep the folder structure

---

File: repos/HL7_SLASH_PDDI-CDS/input/transactions/readme.md

Empty file to keep the folder structure

---

