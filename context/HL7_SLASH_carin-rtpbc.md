// File: input/pages/Bundle-rtpbc-bundle-request-03-price-source-intro.md

<h3 id="example-rtpbc-request-scenario-using-fhir-messaging">Example RTPBC request bundle submitted to a pricing source</h3>
<p>In this example:</p>
<ul>
<li>the client is a patient application</li>
<li>the server is a medication pricing source vendor</li>
<li>the request is submitted as a Bundle containing a Claim and supporting resources, as the single parameter to the processor&#39;s $process-message operation</li>
</ul>
<p>Content:</p>
<ul>
<li>the patient&#39;s name is Jane Doe, date of birth is 1975-12-05, and address is 100 Oak Court, Madison, WI 53510</li>
<li>the requested medication is Prozac 10mg capsule, 60 capsules, for a 30 day supply (reflected in the Claim and MedicationRequest resources)</li>
<li>the prescriber&#39;s identifying information is captured in the Practitioner resource</li>
<li>the requested pharmacy is Hometown Drug (reflected in the Organization resource)</li>
<li>a Coverage resource is not sent in the bundle, as it is not needed by the pricing source</li>
</ul>

<br/>
<div><img src="rtpbc-bundle-request-03-price-source.png" alt="bundle"></div>

<br/>

<br/>

---

// File: input/pages/Bundle-rtpbc-bundle-request-03-w-header-intro.md

<h3 id="example-rtpbc-request-scenario-using-fhir-messaging">Example RTPBC request scenario using FHIR messaging</h3>
<p>In this example:</p>
<ul>
<li>the client is a patient application</li>
<li>the server is the patient&#39;s insurer (specifically, the party that manages the patient&#39;s pharmacy benefit)</li>
<li>the request is submitted as a Bundle containing a Claim and supporting resources, as the single parameter to the processor&#39;s $process-message operation</li>
</ul>
<p>Content:</p>
<ul>
<li>the patient&#39;s name is Jane Doe, date of birth is 1975-12-05, and address is 100 Oak Court, Madison, WI 53510</li>
<li>the requested medication is Prozac 10mg capsule, 60 capsules, for a 30 day supply (reflected in the Claim and MedicationRequest resources)</li>
<li>the prescriber&#39;s identifying information is captured in the Practitioner resource</li>
<li>the requested pharmacy is Hometown Drug (reflected in the Organization resource)</li>
<li>the patient&#39;s coverage identifiers (BIN/PCN, member ID) are conveyed in a Coverage resource</li>
</ul>
<br/>
<p>The supporting data (patient, coverage, prescription, etc.) consists of identifying information that the processor will use to locate the patient&#39;s insurance record and coverage rules applying to the medication, pharmacy and prescriber.</p>
<p><br/></p>
<div><img src="rtpbc-bundle-request-03.png" alt="bundle"></div>

<br/>

<br/>

---

// File: input/pages/Bundle-rtpbc-bundle-response-03-price-source-intro.md

<h3 id="example-rtpbc-response-scenario-using-fhir-messaging">RTPBC response bundle returned by a pricing source</h3>
<p>In this example:</p>
<ul>
<li>the client is a patient application</li>
<li>the server is a medication pricing source vendor</li>
<li>the response is returned as a Bundle containing a ClaimResponse and supporting resources, in response to a $process-message operation</li>
</ul>
<p>Content:</p>
<ul>
<li>the requested medication is Prozac 10mg capsule, 60 capsules, and the requested pharmacy is Hometown Drug. Adjudication returned in the ClaimResponse.item composite</li>
<li>the .item contains patient costs for the requested drug and pharmacy combination</li>
<li>the .addItem composite holds an alternative fulfillment (the requested drug at a different pharmacy). Adjudication is returned in the ClaimResponse.addItem composite</li>
<li>a pharmacy Organization resource describes the alternative pharmacy option identified by the processor</li>
</ul>
<div><img src="rtpbc-bundle-response-03-price-source.png" alt="bundle"></div>

<br/>

---

// File: input/pages/Bundle-rtpbc-bundle-response-03-w-header-intro.md

<h3 id="example-rtpbc-response-scenario-using-fhir-messaging">Example RTPBC response scenario using FHIR messaging</h3>
<p>In this example:</p>
<ul>
<li>the client is a patient application</li>
<li>the server is the patient&#39;s insurer (specifically, the party that manages the patient&#39;s pharmacy benefit)</li>
<li>the response is returned as a Bundle containing a ClaimResponse and supporting resources, in response to a $process-message operation</li>
</ul>
<p>Content:</p>
<ul>
<li>the requested medication is Prozac 10mg capsule, 60 capsules, and the requested pharmacy is Hometown Drug. Adjudication returned in the ClaimResponse.item composite</li>
<li>the .item contains patient costs for the requested drug and pharmacy combination</li>
<li>the .addItem composite holds an alternative fulfillment (the requested drug at a different pharmacy). Adjudication is returned in the ClaimResponse.addItem composite</li>
<li>a pharmacy Organization resource describes the alternative pharmacy option identified by the processor</li>
<li>benefit restriction information (e.g., Covered, Covered but requiring PA) is returned in the .benefitRestriction extensions in the .item and .addItem composites</li>
</ul>
<div><img src="rtpbc-bundle-response-03.png" alt="bundle"></div>

<br/>

---

// File: input/pages/business_rules.md

[Previous Page](information_content_and_fhir_resources.html)

### Use of representative NDC11 drug identifiers

This implementation guide enables clients to identify the patient's medication using 'representative NDC 11' identifiers. A representative NDC 11 has two important characteristics:

- it consists of 11 digits and no dashes or spaces
- it is selected by the submitting system to accurately represent the desired medication's product name, strength and dose form.

Details on determining an appropriate representative NDC 11 are available in the [SCRIPT Implementation Recommendations](https://www.ncpdp.org/NCPDP/media/pdf/SCRIPT-Implementation-Recommendations.pdf) document, located on the public ePrescribing site of the National Council for Prescription Drug Programs (NCPDP). 

### RTPBC response information is "point in time"
The information contained in the RTPBC response must reflect patient cost and coverage as of the date and time the request is received. The implementation guide expects that all responses are calculated using the patient's current insurance coverage and current cost information; it doesn't enable requests for information related to future or past events.

### Cash prices and other costs in the RTPBC response
The Patient Pay Type value set specifies different patient costs that may be returned in an RTPBC response. Included are:

- Costs related to the patient's insurance coverage, such as copay, coinsurance and deductible amounts. These are expected to be returned when the responder is an insurer or their agent
- Cash prices and discounts available when the patient opts to pay cash for their prescription rather than submitting through their insurance. These types are expected to be returned when the responder is a discount pricing source or other responder that is not the patient's insurer.

### Alternatives in the RTPBC response
The responder is encouraged to return all relevant alternatives to the submitted medication and pharmacy. An alternative is any drug + pharmacy combination that differs from what was specified in the request:

- a different medication, but at the submitted pharmacy
-  the requested medication at a different pharmacy
- different medication and pharmacy than submitted.

Pharmacy alternatives can be particularly valuable to the patient as they decide where to have their prescription dispensed. Consider the patient's location when determining pharmacy options, along with pharmacy-related differences in the patient's out-of-pocket costs.

**Note regarding medication alternatives:** Alternatives returned in the response may or may not be appropriate for the given patient, and other alternatives may be available that are not returned in the RTPBC response.

### Consistency between implementations of consumer and provider-focused benefit check (NCPDP) processes
When a party that has implemented the responder role of this implementation guide and can also respond to the provider-focused NCPDP Real-time Prescription Benefit (RTPB) transaction, it SHALL ensure that it returns consistent values for information that is common between the two standards.

While the consumer and provider exchanges each contain unique content for its audience, it is very important that information that is common to both is reported consistently -- to support discussion between the patient and provider and to avoid confusion. 

For example, the total out of pocket cost returned for a given patient medication must be the same whether reported by the consumer or provider messaging. And the the Benefit Restriction information returned in the response described in this guide must accurately summarize benefit restrictions details returned in the NCPDP provider-focused RTPB transaction.

This guide was designed to be compatible with the NCPDP RTPB transaction and uses the same processing assumptions and information definitions wherever possible.

### Searching

The real-time benefit check process is a point-in-time exchange that does not result in persisted information for later client retrieval.

<br><br>

[Next Page](submission_method.html)

---

// File: input/pages/CapabilityStatement-rtpbc-requester-intro.md

<h3 id="rtpbc-requester">RTPBC Requester</h3>
<p><strong>SHALL</strong>: </p>
<ul>
<li>Support at least one use case defined in this Guide and listed in the <a href="use_cases.html">Use Cases</a> Section</li>
<li>Implement the RESTful behavior according to the HL7 FHIR specification</li>
<li>Support the JSON source format</li>
</ul>

<br>
<p><strong>SHOULD</strong>: </p>
<ul>
<li>Support the XML source format</li>
<li>Identify the RTPBC profiles supported as part of the FHIR <code>meta.profile</code> attribute for each instance</li>
</ul>

<br><br>

---

// File: input/pages/CapabilityStatement-rtpbc-responder-intro.md

<h3 id="rtpbc-responder">RTPBC Responder</h3>
<p><strong>SHALL</strong>: </p>
<ul>
<li>Support the <a href="http://hl7.org/fhir/OperationDefinition/MessageHeader-process-message">$process-message</a> operation</li>
<li>Support at least one use case defined in this Guide and listed in the <a href="use_cases.html">Use Cases</a> Section</li>
<li>Implement the RESTful behavior according to the HL7 FHIR specification</li>
<li>Support the JSON source format</li>
<li>Provide on the server a CapabilityStatement identifying the profiles supported</li>
</ul>
<br>
<p><strong>SHOULD</strong>: </p>
<ul>
<li>Support the XML source format</li>
<li>Identify the RTPBC profiles supported as part of the FHIR <code>meta.profile</code> attribute for each instance.</li>
</ul>

<br><br>

---

// File: input/pages/capstatements.md

<br>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="CapabilityStatement-rtpbc-responder.html">RTPBC Responder CapabilityStatement</a></td>
<td>This CapabilityStatement describes the expected capabilities of a server that is capable of responding to a Real-time Pharmacy Benefit Check (RTPBC) request transacted with the `$process-message` operation.</td>
</tr>
<tr>
<td><a href="CapabilityStatement-rtpbc-requester.html">RTPBC Requester CapabilityStatement</a></td>
<td>This CapabilityStatement describes the expected capabilities of a client system submitting Real-time Pharmacy Benefit Check (RTPBC) requests .</td>
</tr>
</tbody>
</table>

<br>

---

// File: input/pages/Claim-rtpbc-claim-03-intro.md

<h3 id="example-rtpbc-claim-resource-the-rtpbc-request-">Example RTPBC Claim resource (the &quot;RTPBC request&quot;)</h3>
<p>In this example:</p>
<ul>
<li>the patient information is referenced to a Patient resource</li>
<li>the requested medication is Prozac 10mg capsule, 60 capsules (included in the Claim.item composite and referenced to a MedicationRequest resource)</li>
<li>the prescriber&#39;s identifying information is referenced to a Practitioner resource</li>
<li>the requested pharmacy referenced to an Organization resource</li>
<li>the patient&#39;s coverage identifiers are conveyed in a referenced Coverage resource</li>
</ul>
<br/>
<div><img src="rtpbc-claim-03.png" alt="claim"></div>

<br/>

---

// File: input/pages/Claim-rtpbc-claim-03-price-source-intro.md

<h3 id="example-rtpbc-claim-resource-the-rtpbc-request-">Example RTPBC submitted to a pricing source</h3>
<p>In this example:</p>
<ul>
<li>the patient information is referenced to a Patient resource</li>
<li>the requested medication is Prozac 10mg capsule, 60 capsules (included in the Claim.item composite and referenced to a MedicationRequest resource)</li>
<li>the prescriber&#39;s identifying information is referenced to a Practitioner resource</li>
<li>the requested pharmacy referenced to an Organization resource</li>
<li>a Coverage resource is not referenced</li>
</ul

<br/>
<div><img src="rtpbc-claim-03-price-source.png" alt="claim"></div>

<br/>

---

// File: input/pages/ClaimResponse-rtpbc-claim-response-03-intro.md

<h3 id="example-rtpbc-claimresponse-the-rtpbc-response-">Example RTPBC ClaimResponse (the &quot;RTPBC response&quot;)</h3>
<p>In this example:</p>
<ul>
<li>the requested medication is Prozac 10mg capsule, 60 capsules, and the requested pharmacy is Hometown Drug. Adjudication is returned in the ClaimResponse.item composite</li>
<li>the .item contains patient costs for the requested drug and pharmacy combination</li>
<li>the .addItem composite holds an alternative fulfillment (the requested drug at a different pharmacy). Adjudication is returned in the ClaimResponse.addItem composite</li>
<li>a referenced pharmacy Organization resource describes the alternative pharmacy option identified by the processor</li>
<li>benefit restriction information (e.g., Covered, Covered but requiring PA) is returned in the .benefitRestriction extensions in the .item and .addItem composites</li>
</ul>
<div><img src="rtpbc-claim-response-03.png" alt="claimresponse"></div>

---

// File: input/pages/ClaimResponse-rtpbc-claim-response-03-price-source-intro.md

<h3 id="example-rtpbc-claimresponse-the-rtpbc-response-">RTPBC ClaimResponse returned by a pricing source</h3>
<p>In this example:</p>
<ul>
<li>the requested medication is Prozac 10mg capsule, 60 capsules, and the requested pharmacy is Hometown Drug. Adjudication is returned in the ClaimResponse.item composite</li>
<li>the .item contains patient costs for the requested drug and pharmacy combination</li>
<li>the .addItem composite holds an alternative fulfillment (the requested drug at a different pharmacy). Adjudication is returned in the ClaimResponse.addItem composite</li>
<li>a referenced pharmacy Organization resource describes the alternative pharmacy option identified by the pricing source</li>
</ul>
<div><img src="rtpbc-claim-response-03-price-source.png" alt="claimresponse"></div>

---

// File: input/pages/ClaimResponse-rtpbc-claim-response-not-covered-intro.md

<h3 id="example-rtpbc-claimresponse-not-covered">RTPBC ClaimResponse - requested drug is not covered</h3>
<p>In this example:</p>
<ul>
<li>the requested medication is not covered by the patient's plan. The Benefit Restriction contains a value of "not-covered" and the adjucation shows an eligible amount of zero dollars.</li>
<li>the addItem contains an alternative drug that is covered, but with a requirement for prior authorziation and a quantity limit. Details of the quantity limit are conveyed in the processNote element.</li>
</ul>
<div><img src="rtpbc-claim-response-not-covered.png" alt="claimresponse"></div>

---

// File: input/pages/CodeSystem-rtpbc-benefit-restriction-intro.md

In order to be meaningful to patients, the system summarizes the range of coverage levels and restrictions into a smaller, more readily understandable group of values.

<br>

---

// File: input/pages/CodeSystem-rtpbc-event-type-intro.md

This code system establishes the event types used in Real-time Pharmacy Benefit Check message headers.

<br>

---

// File: input/pages/consumer_vs_provider_rtpbc.md

[Previous Page](security.html)

The consumer Real-time Prescription Benefit Check (RTPBC) profile is an adaptation of the existing NCPDP Real-time Prescription Benefit (RTPB) standard which was designed for use in provider systems. That specification includes content such as drug utilization review (DUR) alerts and other information to inform a provider's prescribing process.
<br>In contrast, this patient-focused version of RTPBC aims to include only the coverage and cost information that is useful and meaningful to patients.
<br>

### Why a dedicated consumer-focused RTPBC solution?

The aim of this implementation guide is to provide the information a patient needs to understand how their prescription will be covered by their insurance, and the out-of-pocket costs they might face—whether they use their insurance or if they choose to pay cash.

Focusing on the consumer's needs brings additional information and participants into scope, such as real-world cash price comparisons from pricing source entities, and discounts available to the patient through manufacturer programs.

The consumer focus also sets a different frame for the information to be returned by an insurer. For example, differences in copay costs between nearby in-network and out-of-network pharmacies become a high priority, and characterizing coverage restrictions and limits in a way that is clear and meaningful to a typical patient becomes essential.

The consumer-focused RTPBC IG establishes a vehicle for this information exchange that can evolve independently over time to best meet the needs of the patient.

### Information that is out of scope of the consumer-focused exchange

In line with the goals and audience of this exchange, response information was either included or excluded from the specification based on whether it represents coverage or cost information relevant to the patient.

For example, in the primary consumer use case, the patient's medication has already been prescribed and the practitioner has already considered potential contraindications and other factors--ultimately deciding to move ahead with the therapy. Because Consumer RTPBC does not seek to inform the prescribing decision, but instead provide the consumer with cost and coverage information after that decision is made, drug utilization review (DUR) and restricted opioid prescriber information is not included in the response.

Likewise, because the patient is the user of this exchange's information, the response does not return "cost to plan" data returned by other standards to be considered during the prescribing process.

Future versions of the guide will reflect feedback from implementers, and content will likely evolve over time.

### Consumer vs. Provider RTPBC content comparison

The table below summarizes the structure and content of the NCPDP real-time pharmacy benefit check transactions, on which consumer RTPBC is based, and which of those are pertinent in the consumer version.

* The element names, optionality and notes refer to the NCPDP transactions
* The Consumer Facing column indicates the content carried over to the consumer version described in this implementation guide.

<br>

<div><p>
  <img src="high-level-content-view-table.png" style="float:none">  
    </p>
</div>
<br><br>

---

// File: input/pages/Coverage-rtpbc-coverage-03-intro.md

<h3 id="example-rtpbc-coverage-resource">Example RTPBC Coverage resource</h3>
<p>In this example, the patient&#39;s insurance coverage identifiers are...</p>
<ul>
<li>Payer ID: Pharmacy Plans US</li>
<li>BIN: BIN001</li>
<li>PCN: PCN002</li>
<li>Group ID: GROUP0001</li>
<li>PBM Member ID: MEMBER000001</li>
</ul>
<br/>
<div><img src="rtpbc-coverage-03.png" alt="coverage"></div>

<br/>

---

// File: input/pages/downloads.md

**Full Implementation Guide**

The entire implementation guide (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

**Examples** 

All examples used in this Implementation Guide are available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)
- [TTl](examples.ttl.zip)



---

// File: input/pages/error_handling.md

[Previous Page](submission_method.html)

### ClaimResponse.error usage

In the event that the RTPBC source system (payer/PBM, discount pricing source) is **unable to fully process a request because of data or business rule issue,** that system SHALL respond by populating the .error composite in the ClaimResponse resource. Values SHOULD be taken from the set of RTPBC error codes as defined in the [RTPBC Error Code Value Set](ValueSet-rtpbc-error-code.html). 
<br>

### Operation outcome usage

In the event of a **system or communication error,** RTPBC source systems (payer/PBM, discount pricing source) SHALL respond by providing an OperationOutcome resource.

The OperationOutcome:

* SHALL contain a definition of severity in the OperationOutcome.issue.severity field providing a value from the [valueset-issue-severity](http://hl7.org/fhir/ValueSet/issue-severity.html) value set. The cases described below will specify the value to use for each outcome.
* SHALL contain a definition of the type of error in the OperationOutcome.issue.code element, providing a value from the [issue-type value set](http://hl7.org/fhir/valueset-issue-type.html).
* SHALL contain details of the error in the OperationOutcome.issue.details.coding.code and OperationOutcome.issue.details.coding.display fields. 

* SHOULD provide additional diagnostic details of the error in OperationOutcome.diagnostics property

<br>

[Next Page](security.html) 



---

// File: input/pages/hl7.fhir.us.carin-rtpbc-intro.md

### CARIN RTPBC Responder
**SHALL**: 
* Support at least one use case defined in this Guide and listed in the [Use Cases](Use_cases.html) Section
* Implement the RESTful behavior according to the FHIR specification
* Support the json source format
* Declare a CapabilityStatement identifying the profiles supported.
<br><br>

**SHOULD**: 
* Support the xml source format
* Identify the CARIN RTPBC profiles supported as part of the FHIR `meta.profile` attribute for each instance.
<br><br>


---

// File: input/pages/index.md

### Overview

This is a guide for implementing a *consumer-focused Real-time Pharmacy Benefit Check* (RTPBC) process using HL7 FHIR&reg; R4.

Using RTPBC, a patient can learn the cost and insurance coverage related to medications they've been prescribed. Specifically... 
* how a medication will be covered by their insurance, including out of pocket costs and any coverage restrictions or requirements that might apply
* discount pricing available for the medication. 

Consumer RTPBC leverages the predetermination process supported by the Claim and ClaimResponse FHIR&reg; resources. Accompanying resources carry information that identifies the patient and their insurance coverage, prescription information and the preferred pharmacy (Patient, Coverage, MedicationRequest, Practitioner and Organization). OperationOutcome is used to communicate exceptions.

Where possible, the profile leverages terminology currently used in US pharmacy benefit processing, to minimize implementation obstacles for stakeholders who operate in that domain.
<br>

### Scope of this guide
**Consumer RTPBC is intended to be used...**

* in the United States (as it reflects unique US pharmacy insurance roles and conventions)
* for medications that are covered under the *pharmacy benefit* portion of the patient's health insurance, which typically excludes medications administered during hospital care or as part of medical procedures
* for commercially available medication products that are not compounded at the pharmacy. *(Support for compounds could potentially be added later)*

**Relationship to the NCPDP provider-focused RTPBC transactions**

This initial release of the consumer RTPBC profile seeks to include the coverage and cost information that's the most useful and meaningful to patients. As a result, certain content in the provider-centric NCPDP RTPBC standard is not included here. Additional content could potentially be added in a later effort. (See <a href="consumer_vs_provider_rtpbc.html">Consumer vs provider RTPBC</a> for a content comparison.)

**Related information flows outside of consumer RTPBC**

The patient application might gather related information before submitting the consumer RTPBC request, such as prescription information or insurance eligibility. *These exchanges are outside the scope of this guide.*

**Support for addresses outside the US**

This implementation guide supports military and Canadian addresses for patients and pharmacies, in order to be consistent with other US pharmacy benefit processes. Specifically, the guide enables use of Canada province codes and military 'state' codes (e.g., AE for Armed Forces Europe).
<br>

### Authors

<table>
<tbody>
<tr>
<td>HL7 Pharmacy Workgroup</td>
<td></td>
</tr>
<tr>
<td>HL7 Financial Management Workgroup</td>
<td></td>
</tr>
<tr>
<td>Frank McKinney</td>
<td><a href="mailto:frank.mckinney@pocp.com">frank.mckinney@pocp.com</a></td>
</tr>
</tbody>
</table>


<br>


---

// File: input/pages/information_content_and_fhir_resources.md

[Previous Page](use_cases.html)

The real-time pharmacy benefit check (RTPBC) process involves a request from a consumer application used by a patient to either (a) the party that manages the pharmacy benefit portion of the patient's health insurance or (b) a party that serves as a source for typical and discount medication pricing information. 

### Content when submitting to the patient's insurer
#### *Request content*
The patient application submits a request containing...
* basic patient identifying information
* payer and coverage identifiers
* information from the prescription for which coverage and cost is desired
* the patient's preferred pharmacy

*Example:* <a href="Bundle-rtpbc-bundle-request-03-w-header.html">Bundled RTPBC request</a>


#### *Response content*
The responder... 
* locates the patient's record and coverage details
* determines the patient's out of pocket cost for the requested pharmacy and potentially other pharmacy options
* determines if alternative medications are available and identifies coverage and cost for those
* returns the gathered information to requester

*Example:* <a href="Bundle-rtpbc-bundle-response-03-w-header.html">Bundled RTPBC response from payer/PBM</a>

### Content when submitting to a medication pricing source
#### *Request content*
The patient application submits a request containing...
* basic patient identifying information
* identification of the pricing source
* information from the prescription for which pricing is desired
* the patient's location and preferred pharmacy

#### *Response content*
The responder... 
* determines pricing for the requested pharmacy and potentially other nearby pharmacies, including discounts associated with coupons or memberships
* returns the gathered information to requester


### Resources used in the exchange
The consumer RTPBC request and response are accomplished using FHIR **Claim** and **ClaimResponse** resources in a "predetermination" (what-if) mode. Other FHIR&reg; resources support the exchange by fleshing out patient, prescription, pharmacy and coverage information needed to determine accurate cost and coverage. An OperationOutcome communicates exception situations where a ClaimResponse cannot be returned.

<div><p>
  <img src="high-level-rtpbc-fhir-resource-mapping.png" style="float:none">  
    </p>
</div>
<br/>**[Claim](StructureDefinition-rtpbc-request-claim.html)** - Represents the RTPBC request. Uses the *predetermination* Claim.use mode  

**[ClaimResponse](StructureDefinition-rtpbc-response-claimresponse.html)** - Represents the RTPBC response

**[Patient](StructureDefinition-rtpbc-patient.html)** - Conveys the patient information needed for the exchange

**[Coverage](StructureDefinition-rtpbc-coverage.html)** - Conveys the patient's pharmacy benefit coverage IDs 

**[MedicationRequest](StructureDefinition-rtpbc-medicationrequest.html)** - Conveys the needed prescription information (a subset of what is present in a full prescription)

**[Organization (Pharmacy)](StructureDefinition-rtpbc-pharmacy-organization.html)** - Conveys pharmacy information needed for the exchange (based on the US Core Organization profile)

**Practitioner** - Prescriber information is conveyed using the US Core Practitioner profile.


<br><br>

[Next Page](business_rules.html)

---

// File: input/pages/logo.md

<div id="hl7-nav">
  <a no-external="true" id="hl7-logo" href="http://hl7.org/fhir/R4/">
    <img src="assets/hl7-logo-header.png" alt="Visit the HL7 website" height="50">
  </a>
</div>

---

// File: input/pages/MedicationRequest-rtpbc-medicationrequest-03-intro.md

<h3 id="example-rtpbc-medicationrequest">Example RTPBC MedicationRequest</h3>
<p>In this example:</p>
<ul>
<li>the requested medication is Prozac 10mg capsule</li>
<li>requested quantity is 60 capsules</li>
<li>requested days supply: 30 day supply</li>
<li>the prescriber is referenced to a Practitioner resource</li>
<li>the requested pharmacy is referenced to an Organization resource</li>
</ul>
<br/>

<div><img src="rtpbc-medication-request-03.png" alt="medicationrequest"></div>

<p><br/></p>

---

// File: input/pages/MessageDefinition-rtpbc-request-intro.md

<h3 id="messagedefinition-real-time-pharmacy-benefit-check-rtpbc-request">MessageDefinition: Real-time Pharmacy Benefit Check (RTPBC) Request</h3>
<p>This MessageDefinition describes the content of a real-time pharmacy benefit check (RTPBC) request, when using FHIR messaging.
<br></p>
<p>The Claim resource is the focus in a bundle that also contains other supporting resources referenced by the Claim (Patient, MedicationRequest, Coverage, Practitioner, Organization).
<br></p>
<p><em>Note: The guide describes two methods for submitting the RTPBC request ($submit operation and FHIR messaging using $process-message), with the intent to elicit comments from potential implementers.</em></p>
<br>

<div><img src="request-message-definition.png" alt="request MessageDefinition"></div>

<br/>

---

// File: input/pages/MessageDefinition-rtpbc-response-intro.md

<h3 id="messagedefinition-real-time-pharmacy-benefit-check-rtpbc-response">MessageDefinition: Real-time Pharmacy Benefit Check (RTPBC) Response</h3>
<p>This MessageDefinition describes the content of a real-time pharmacy benefit check (RTPBC) response, when using FHIR messaging.
<br></p>
<p>The ClaimResponse resource returns patient pricing and coverage information upon successful processing at the RTPBC source. (An OperationOutcome is returned when an error is encountered)
<br></p>
<p><em>Note: The guide describes two methods for submitting the RTPBC request ($submit operation and FHIR messaging using $process-message), with the intent to elicit comments from potential implementers.</em></p>
<br>

<div><img src="response-message-definition.png" alt="response MessageDefinition"></div>

<br/>

---

// File: input/pages/MessageHeader-rtpbc-request-message-header-01-intro.md

<h3 id="example-rtpbc-message-header-request-bundle-">Example RTPBC Message Header (request bundle)</h3>
<p>In this example:</p>
<ul>
<li>the focus resource is a Claim that conforms with the profile:
<a href="http://hl7.org/fhir/us/carin-rtpbc/StructureDefinition/rtpbc-request">http://hl7.org/fhir/us/carin-rtpbc/StructureDefinition/rtpbc-request</a></li>
</ul>
<p><br/></p>
<div><img src="rtpbc-request-message-header-01.png" alt="request messageheader"></div>

<p><br/></p>

---

// File: input/pages/MessageHeader-rtpbc-response-message-header-01-intro.md

<h3 id="example-rtpbc-message-header-response-bundle-">Example RTPBC Message Header (response bundle)</h3>
<p>In this example:</p>
<ul>
<li>the focus resource is a ClaimResponse that conforms with the profile:
<a href="http://hl7.org/fhir/us/carin-rtpbc/StructureDefinition/rtpbc-response">http://hl7.org/fhir/us/carin-rtpbc/StructureDefinition/rtpbc-response</a></li>
</ul>
<p><br/></p>
<div><img src="rtpbc-response-message-header-01.png" alt="response messageheader"></div>



---

// File: input/pages/NamingSystem-rtpbc-NamingSystem-canada-post-province-code-intro.md


This NamingSystem resource represents the externally-maintained Canada Post province code system--enabling it to be referenced within this guide. 
<br> 
<h3>Concept examples</h3> 
Below are the concepts contained in this code system.

<table border="1">
<tr><td><b>Code</b></td><td><b>Display</b></td></tr>
<tr><td>AB</td><td>Alberta</td></tr>
<tr><td>BC</td><td>British Columbia</td></tr>
<tr><td>MB</td><td>Manitoba</td></tr>
<tr><td>NB</td><td>New Brunswick</td></tr>
<tr><td>NL</td><td>Newfoundland and Labrador </td></tr>
<tr><td>NS</td><td>Nova Scotia</td></tr>
<tr><td>NT</td><td>Northwest Territories</td></tr>
<tr><td>NU</td><td>Nunavut</td></tr>
<tr><td>ON</td><td>Ontario</td></tr>
<tr><td>PE</td><td>Prince Edward Island</td></tr>
<tr><td>QC</td><td>Quebec</td></tr>
<tr><td>SK</td><td>Saskatchewan</td></tr>
<tr><td>YT</td><td>Yukon</td></tr>
</table>

<br>

---

// File: input/pages/NamingSystem-rtpbc-NamingSystem-ncpdp-pharmacy-type-intro.md

﻿This NamingSystem resource represents the proprietary National Program for Prescription Drug Programs (NCPDP) **Pharmacy Type (955-HR)** code set--enabling it to be referenced within this guide. 
<br> 
<h3>Concept examples</h3> 
The full, up-to-date content of the NCPDP Pharmacy Type (955-HR) code set is only available to NCPDP members.
 
However, a past version of the code set is publicly available in the AHRQ United States Health Information Knowledgebase (USHIK). Below is a subset of concepts from that public source, for illustration purposes.

<table border="1">
<tr><td><b>Code</b></td><td><b>Display</b></td></tr>
<tr><td>R</td><td>Retail</td></tr>
<tr><td>M</td><td>Mail Order</td></tr>
<tr><td>S</td><td>Specialty</td></tr>
<tr><td>L</td><td>Long-Term Care</td></tr>
<tr><td>A</td><td>Any</td></tr>
</table>


<br>

---

// File: input/pages/NamingSystem-rtpbc-NamingSystem-ncpdp-provider-id-intro.md

﻿This NamingSystem references the licensed NCPDP Provider ID identifier system maintained by the National Council for Prescription Drug Programs. Its full, up-to-date content is only available to licensees.
 
Below are fictional identifiers that reflect the NCPDP Provider ID structure, for illustration purposes. These are also used in this guide's examples.

<table border="1">
<tr><td><b>ID (fictional)</b></td><td><b>Pharmacy Name (fictional)</b></td></tr>
<tr><td>0999017</td><td>Hometown Drug</td></tr>
<tr><td>0999029</td><td>My Mail Service Pharmacy</td></tr>
<tr><td>0999031</td><td>Acme Specialty Pharmacy</td></tr>
<tr><td>0999043</td><td>Local LTC Pharmacy</td></tr>
</table>

<br>

---

// File: input/pages/NamingSystem-rtpbc-NamingSystem-ncpdp-reject-code-intro.md

﻿This NamingSystem resource represents the proprietary National Program for Prescription Drug Programs (NCPDP) **Reject Code (511-FB)** code set--enabling it to be referenced within this guide. 

<h3>Concept examples</h3> 
The full, up-to-date content of the NCPDP Reject Code (511-FB) code set is only available to NCPDP members.
 
However, a past version of the code set is publicly available in the AHRQ United States Health Information Knowledgebase (USHIK). Below is a subset of concepts from that public source, for illustration purposes.

<table border="1">
<tr><td><b>Code</b></td><td><b>Display</b></td></tr>
<tr><td>PJ</td><td>M/I Request Insurance Segment</td></tr>
<tr><td>1</td><td>M/I Bin Number</td></tr>
<tr><td>4</td><td>M/I Processor Control Number</td></tr>
<tr><td>6</td><td>M/I Group ID</td></tr>
<tr><td>7</td><td>M/I Cardholder ID</td></tr>
<tr><td>8</td><td>M/I Person Code</td></tr>
<tr><td>600</td><td>Coverage Outside Submitted Date Of Transaction</td></tr>
<tr><td>N1</td><td>No Patient Match Found</td></tr>
<tr><td>99</td><td>Host Processing Error</td></tr>
<tr><td>92</td><td>System Unavailable/Host Unavailable</td></tr>
<tr><td>R8</td><td>Syntax Error</td></tr>
<tr><td>21</td><td>M/I Product/Service ID</td></tr>
<tr><td>77</td><td>Discontinued Product/Service ID Number</td></tr>
<tr><td>ET</td><td>M/I Quantity Prescribed</td></tr>
<tr><td>26</td><td>M/I Unit Of Measure</td></tr>
<tr><td>PZ</td><td>Non-Matched Unit Of Measure To Product/Service ID</td></tr>
<tr><td>19</td><td>M/I Days Supply </td></tr>
<tr><td>22</td><td>M/I Dispense As Written (DAW)/Product Selection Code</td></tr>
<tr><td>PN</td><td>M/I Request Prescriber Segment</td></tr>
<tr><td>DR</td><td>M/I Prescriber Last Name</td></tr>
<tr><td>25</td><td>M/I Prescriber ID</td></tr>
<tr><td>56</td><td>Non-Matched Prescriber ID</td></tr>
<tr><td>71</td><td>Prescriber ID Is Not Covered</td></tr>
<tr><td>Z5</td><td>M/I Service Provider Segment</td></tr>
<tr><td>5</td><td>M/I Service Provider Number</td></tr>
<tr><td>YK</td><td>M/I Service Provider Name</td></tr>
<tr><td>PK</td><td>M/I Request Patient Segment</td></tr>
<tr><td>CA</td><td>M/I Patient First Name</td></tr>
<tr><td>CB</td><td>M/I Patient Last Name </td></tr>
<tr><td>9</td><td>M/I Date Of Birth</td></tr>
<tr><td>10</td><td>M/I Patient Gender Code</td></tr>
</table>

<br>


---

// File: input/pages/Organization-rtpbc-organization-03-intro.md

<h3 id="example-rtpbc-pharmacy-using-organization-resource-">Example RTPBC Pharmacy (using Organization resource)</h3>
<p>In this example:</p>
<ul>
<li>the pharmacy name is Hometown Drug</li>
<li>the pharmacy&#39;s NPI is 9876543210 (an NCPDP ID can optionally be included)</li>
</ul>
<p><br/></p>
<div><img src="rtpbc-organization-03.png" alt="organization (pharmacy)"></div>

<br/>

---

// File: input/pages/Organization-rtpbc-organization-03m-intro.md

<h3 id="example-rtpbc-pharmacy-using-organization-resource-">Example RTPBC Pharmacy (using Organization resource)</h3>
<p>In this example:</p>
<ul>
<li>the pharmacy name is My Mail Service Pharmacy</li>
<li>the pharmacy&#39;s NPI is 5515515515 (an NCPDP ID can optionally be included)</li>
</ul>
<p><br/></p>
<div><img src="rtpbc-organization-03m.png" alt="organization-pharmacy"></div>

<br/>

---

// File: input/pages/other.md

### Full Request
Request submitted as a Bundle containing a Claim and supporting resources. 
<br/>

**Processor: Patient's insurer**
<br/>

<a href="Bundle-rtpbc-bundle-request-03-w-header.html">Bundled RTPBC request to an insurer</a>



**Processor: Medication Pricing Source**
<br/>

<a href="Bundle-rtpbc-bundle-request-03-price-source.html">Bundled RTPBC request to a medication pricing source</a>

### Full Response
Response returned as a Bundle containing a ClaimResponse and supporting resources.
<br/>
**Processor: Patient's insurer**
<br/>

<a href="Bundle-rtpbc-bundle-response-03-w-header.html">Bundled RTPBC response from an insurer</a>



**Processor: Medication Pricing Source**<br/><a href="Bundle-rtpbc-bundle-response-03-price-source.html">Bundled RTPBC response from a medication pricing source</a>



### Individual Resources

<table>
<thead>
<tr>
<th>Type</th>
<th>Name</th>
</tr>
</thead>
<tbody>
<tr>
<td>Claim</td>
<td><a href="Claim-rtpbc-claim-03.html">RTPBC Claim resource submitted to an insurer</a></td>
</tr>
<tr>
<td>Claim</td>
<td><a href="Claim-rtpbc-claim-03-price-source.html">RTPBC Claim resource submitted to a pricing source</a></td>
</tr>
<tr>
<td>ClaimResponse</td>
<td><a href="ClaimResponse-rtpbc-claim-response-03.html">RTPBC ClaimResponse resource returned by an insurer</a></td>
</tr>
<tr>
<td>ClaimResponse</td>
<td><a href="ClaimResponse-rtpbc-claim-response-03-price-source.html">RTPBC ClaimResponse resource returned by a pricing source</a></td>
</tr>
<tr>
<td>ClaimResponse</td>
<td><a href="ClaimResponse-rtpbc-claim-response-not-covered.html">RTPBC ClaimResponse resource - drug is not covered</a></td>
</tr>
<tr>
<td>Coverage</td>
<td><a href="Coverage-rtpbc-coverage-03.html">RTPBC Coverage resource</a></td>
</tr>
<tr>
<td>MedicationRequest</td>
<td><a href="MedicationRequest-rtpbc-medicationrequest-03.html">RTPBC MedicationRequest resource</a></td>
</tr>
<tr>
<td>MessageHeader</td>
<td><a href="MessageHeader-rtpbc-request-message-header-01.html">RTPBC request MessageHeader</a></td>
</tr>
<tr>
<td>MessageHeader</td>
<td><a href="MessageHeader-rtpbc-response-message-header-01.html">RTPBC response MessageHeader</a></td>
</tr>
<tr>
<td>Organization</td>
<td><a href="Organization-rtpbc-organization-03.html">RTPBC Organization resource - Hometown Drug</a></td>
</tr>
<tr>
<td>Organization</td>
<td><a href="Organization-rtpbc-organization-03m.html">RTPBC Organization resource - My Mail Service Pharmacy</a></td>
</tr>
<tr>
<td>Patient</td>
<td><a href="Patient-rtpbc-patient-03.html">RTPBC Patient resource</a></td>
</tr>
<tr>
<td>Practitioner</td>
<td><a href="Practitioner-rtpbc-practitioner-03.html">US Core Practitioner (prescriber) resource</a></td>
</tr>




<br/>


---

// File: input/pages/Patient-rtpbc-patient-03-intro.md

<h3 id="example-rtpbc-patient">Example RTPBC Patient</h3>
<p>In this example:</p>
<ul>
<li>the patient&#39;s name is Jane Doe</li>
<li>the patient&#39;s date of birth is 1975-12-05</li>
<li>the patient&#39;s address is <pre><code><span class="hljs-number">100</span> Oak Court
Madison
WI
<span class="hljs-number">53510</span>
US
</code></pre></li>
</ul>
<br/>
<div><img src="rtpbc-patient-03.png" alt="patient"></div>

<br/>

---

// File: input/pages/Practitioner-rtpbc-practitioner-03-intro.md

<h3 id="example-rtpbc-prescriber-in-practitioner-resource-">Example RTPBC Prescriber (in Practitioner resource)</h3>
<p>The Real-time Pharmacy Benefit Check IG represents the medication prescriber using the US Core Practitioner profile, without further constraints. </p>
<p>In this example:</p>
<ul>
<li>the prescriber&#39;s last name is Johnson</li>
<li>the prescriber&#39;s NPI is 1234567890</li>
</ul>
<br/>

<div><img src="rtpbc-practitioner-03.png" alt="practitioner"></div>

<br>

<p><br/></p>

---

// File: input/pages/profiles.md

### Profiles

<table>
<colgroup>
  <col width="300">
  <col>
</colgroup>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="StructureDefinition-rtpbc-request-claim.html">RTPBC Request Profile (Claim)</a></td>
<td>This profile constrains the Claim resource so that it can serve as the RTPBC Request in the consumer real-time pharmacy benefit check process.</td>
</tr>
<tr>
<td><a href="StructureDefinition-rtpbc-response-claimresponse.html">RTPBC Response Profile (ClaimResponse)</a></td>
<td>This profile constrains the ClaimResponse resource to serve as the RTPBC Response in the consumer real-time pharmacy benefit check process. It uses the ClaimResponse's "predetermination" processing mode.</td>
</tr>
<tr>
<td><a href="StructureDefinition-rtpbc-patient.html">RTPBC Patient Profile</a></td>
<td>This profile constrains the Patient resource for carrying the limited patient information required in the consumer real-time pharmacy benefit check (RTPBC) process. In RTPBC, the sole purpose of patient information is to enable the responding payer/PBM to locate the patient's insurance information. From there, pricing and coverage information is determined based on the patient's member and coverage information maintained by the payer. </td>
</tr>
<tr>
<td><a href="StructureDefinition-rtpbc-medicationrequest.html">RTPBC Medication Request Profile</a></td>
<td>This profile constrains the MedicationRequest resource to convey a subset of prescription information required in the consumer real-time pharmacy benefit check (RTPBC) process. The content specifies the prescribed product and quantity, and references the prescribing practitioner and the patients' preferred pharmacy.</td>
</tr>
<tr>
<td>US Core Practitioner Profile</td>
<td>This implementation guide uses the US Core Practitioner profile with no additional constraints.</td>
</tr>
<tr>
<td><a href="StructureDefinition-rtpbc-pharmacy-organization.html">RTPBC Pharmacy Profile (Organization)</a></td>
<td>This profile represents a pharmacy as used in the real-time pharmacy benefit check (RTPBC) process. This profile is based on the US Core Organization profile.</td>
</tr>
<tr>
<td><a href="StructureDefinition-rtpbc-coverage.html">RTPBC Coverage Profile</a></td>
<td>This profile constrains the Coverage resource for conveying the patient's pharmacy benefit information in an RTPBC request to an insurer.</td>
</tr>
<tr>
<td><a href="StructureDefinition-rtpbc-request-messageheader.html">RTPBC Request Message Header Profile</a></td>
<td>This profile constrains a MessageHeader resource for use in a Real-time Pharmacy Benefit Check (RTPBC) request bundle.</td>
</tr>
<tr>
<td><a href="StructureDefinition-rtpbc-response-messageheader.html">RTPBC Response Message Header Profile</a></td>
<td>This profile constrains a MessageHeader resource for use in a Real-time Pharmacy Benefit Check (RTPBC) response bundle.</td>
</tr>
<tr>
<td><a href="StructureDefinition-rtpbc-request-bundle.html">RTPBC Request Bundle Profile</a></td>
<td>This profile constrains a Bundle resource for use as the request in a Real-time Pharmacy Benefit Check (RTPBC) process.</td>
</tr>
<tr>
<td><a href="StructureDefinition-rtpbc-response-bundle.html">RTPBC Response Bundle Profile</a></td>
<td>This profile constrains a Bundle resource for use as the response in a Real-time Pharmacy Benefit Check (RTPBC) process.</td>
</tr>
</tbody>
</table>

<br>


### Extensions

<table>
<colgroup>
  <col width="300">
  <col>
</colgroup>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="StructureDefinition-rtpbc-isAlternative.html">RTPBC IsAlternative Extension</a></td>
<td>This extension indicates that an added line item is to be interpreted as one of possibly multiple alternatives to the requested product or service. When isAlternative is true, the added line item is to be considered independently from any other added line items associated with the requested product or service.</td>
</tr>
<tr>
<td><a href="StructureDefinition-rtpbc-benefitRestriction.html">RTPBC BenefitRestriction Extension</a></td>
<td>This extension conveys benefit restrictions that apply to a prescription product and pharmacy combination.</td>
</tr>
</tbody>
</table>

<br>


### Message Definitions

<table>
<colgroup>
  <col width="300">
  <col>
</colgroup>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="MessageDefinition-rtpbc-request.html">RTPBC Request MessageDefinition</a></td>
<td>Request for patient cost and coverage information for a prescribed medication</td>
</tr>
<tr>
<td><a href="MessageDefinition-rtpbc-response.html">RTPBC Response MessageDefinition</a></td>
<td>Response to a request for patient cost and coverage information for a prescribed medication</td>
</tr>
</tbody>
</table>

---

// File: input/pages/security.md

[Previous Page](error_handling.html)

FHIR does not mandate a single technical approach to security and privacy; rather, the specification provides a set of building blocks that can be applied to create secure, private systems. 

Implementers are expected to follow core [FHIR security principles](https://www.hl7.org/fhir/security.html).

In addition, the [FHIR Security and Privacy Module](http://hl7.org/fhir/R4/secpriv-module.html#6.0] [http://hl7.org/fhir/R4/secpriv-module.html) describes how to protect patient privacy. 

<br><br>
[Next Page](consumer_vs_provider_rtpbc.html)



---

// File: input/pages/StructureDefinition-rtpbc-benefitRestriction-intro.md

This extension enables a real-time pharmacy benefit check responder to indicate one or more benefit restrictions that apply to: 

- the requested medication and pharmacy 
- an alternative medication and pharmacy

Values conveyed in this extension are defined in the [RTPBC Benefit Restriction](ValueSet-rtpbc-benefit-restriction.html) value set.

<br>


---

// File: input/pages/StructureDefinition-rtpbc-coverage-intro.md

﻿This profile constrains the Coverage resource to carry the member and and coverage identifiers that insurers use to locate the patient's specific plan coverage rules. 

(Note: When the responder is a medication pricing source, the Coverage resource is not required).

The Coverage elements available to be used by the RTPBC process are:

* Coverage.subscriberId: Health plan subscriber ID
* Coverage.subscriber: Subscriber demographic information
* Coverage.identifier: Health plan member ID
* Coverage.beneficiary: Patient demographic information
* Coverage.class=rxid. Pharmacy benefit Member ID
* Coverage.class=rxgroup. Pharmacy benefit Group ID
* Coverage.class=rxbin. Pharmacy benefit BIN (IIN) 
* Coverage.class=rxpcn. Pharmacy benefit PCN 

Different insurers PBMs or other responders may require just a subset of these elements. Implementers may populate all elements for which information is available, or scope the population based the particular responder’s requirements.

### Must Support elements in this profile 
**Client and Responding systems**

The elements identified as Must Support are the typical set used in US pharmacy benefit processing; client systems must enable these to be submitted in requests, and responders must be able to accept them to be used as appropriate during processing.


---

// File: input/pages/StructureDefinition-rtpbc-isAlternative-intro.md

A responder to a predetermination request may wish to provide alternative fulfillment options to the requested product or service. This extension indicates that an added line item is to be interpreted as one of possibly multiple alternatives to the requested product or service. When isAlternative is true, the added line item is to be considered independently from any other added line items associated with the requested product or service.

<br>


---

// File: input/pages/StructureDefinition-rtpbc-medicationrequest-intro.md

<br>	<br>
The function of the MedicationRequest resource in this exchange is to convey information from the patient's prescription that has a bearing on pricing and coverage. This limited set of information consists of...

* the medication name and identifier
* prescribed quantity and unit of measure
* identification of the prescriber
* identification of the pharmacy
* whether product substitutions are allowed
* optionally, the days supply represented by the quantity
<br><br>

### Must Support elements in this profile 
**Client systems** <br>
All of the elements identified above are marked Must Support... 
* all of these except for days supply (.expectedSupplyDuration) have a minimum cardinality of 1 and MUST be populated in order to enable reliable results from the processor 
* substitutions.allowed is expected to be populated as *false*, indicating that the processor must provide pricing and coverage for the specific requested medication. (The processor may additionally return information about alternative medications)
* dosageInstruction SHOULD be used when determining days supply

**Client and Responding systems** <br>

* days supply (.expectedSupplyDuration) can impact cost and coverage for a medication; however, patients may not be able to reliably provide it. Implementing partners MUST determine how or whether the element is to be used.

**Responding systems**
* MUST make use of all pertinent required MedicationRequest elements when determining pricing and coverage
* MAY use dosageInstruction when determining pricing and coverage

<br>

---

// File: input/pages/StructureDefinition-rtpbc-patient-intro.md

In the RTPBC exchange, the pertinent patient information is...
* given and family name
* gender
* date of birth
* address
<br><br>

### Must Support elements in this profile 
**Client and Responding systems**<br>
All of the elements identified above are marked Must Support though not all will be required in a given implementation (the address composite itself and each element within have a minimum cardinality of 0, to support differing patient lookup approaches). The appropriate cardinality for address elements is to be determined by implementers.



<br>


---

// File: input/pages/StructureDefinition-rtpbc-pharmacy-organization-intro.md

The function of the Pharmacy resource in this exchange is to identify a pharmacy as either...
* the patient's preferred pharmacy, in the RTPBC request
* or an alternative pharmacy for which information is being returned in the RTPBC response

The set of conveyed pharmacy information consists of...
* identification of the pharmacy. The [NCPDP Provider ID](NamingSystem-rtpbc-NamingSystem-ncpdp-provider-id.html) is the preferred identifier for this purpose because it specifies the individual pharmacy location. Alternatively, an organizational NPI may be used
* the pharmacy name
* the  phone number
* the pharmacy address
<br><br>

### Must Support elements in this profile 
**Client systems**<br>
* The pharmacy identifier and name MUST be populated with correct information in order for the processor to determine reliable cost and coverage information
* Pharmacy phone and address SHOULD be populated to assist in identifying a particular pharmacy location, especially when identifying the pharmacy using an NPI

**Responding systems**<br>
* MUST consider pharmacy type and location when determining pricing, coverage, and alternative pharmacy options
<br><br>


---

// File: input/pages/StructureDefinition-rtpbc-practitioner-intro.md

This profile constrains the Practitioner resource to convey identifying prescriber information required in the consumer real-time pharmacy benefit check (RTPBC) process.
<br>
The function of the Practitioner resource in this exchange is to simply identify the prescriber of the medication for which pricing and coverage is desired. This limited set of information consists of...
* the prescriber's family name
* the prescriber's NPI
<br><br>

### Must Support elements in this profile 
**Client systems**<br>
Both of the elements above MUST be populated with correct information in order for the processor to reliably determine cost and coverage information.

**Responding systems**<br>
* MUST make use of prescriber information if it impacts pricing or coverage
<br><br>


---

// File: input/pages/StructureDefinition-rtpbc-request-bundle-intro.md

<br>The request Bundle profile identifies the resources to be submitted in an RTPBC request. The following are used in all circumstances and have a minimum cardinality of 1:
* MessageHeader
* Claim
* Patient
* MedicationRequest
* Pharmacy
* Practitioner
* In addition, the Coverage resource is necessary when submitting a request to an insurer or other agent representing the patient's pharmacy benefit. It's minimum cardinality is 0.
<br><br>

### Must Support elements in this profile 
**Client systems**
* All the above Bundle resource entries are designated Must Support. The required elements MUST be populated with correct and complete information in order to elicit reliable information in the RTPBC response.
* When submitting to an insurer, the Coverage resource MUST also be populated. When submitting to a pricing source, Coverage is not required.

**Responding insurer systems**
* MUST accept all Must Support resources and make use of provided information when determining cost and coverage

**Responding discount pricing sources**
* Must accept Claim, Patient, MedicationRequest, Pharmacy and Practitioner resources and use as applicable when determining pricing information
<br><br>


---

// File: input/pages/StructureDefinition-rtpbc-request-claim-intro.md

This profile constrains the Claim resource so that it can serve as the request in the consumer Real-time Pharmacy Benefit Check (RTPBC) process.
<br><br>
Data population is similar to a typical Claim *predetermination* request (where Claim.use set to "predetermination"), with the following key differences:
Certain elements are fixed to values reflecting a medication-related request...
* Claim.type = "pharmacy"
* Claim.provider references an Organization resource that represents the patient's preferred pharmacy
* Claim.prescription is mandatory (referencing a MedicationRequest resource)
* Claim.careTeam.provider is mandatory, referencing a Practitioner resource that identifies the prescriber
* Claim.item elements are constrained to product identifiers and quantity units of measure describing medications

In addition, no pricing / cost information is submitted in the request since the goal of the exchange is learn the expected cost to the patient rather than reimbursement information for a pharmacy. 
<br><br>

In this profile, the Claim references the following supported resources. All are profiled in this guide except Practitioner, which uses the US Core Practitioner profile without further constraints.
* [Patient](StructureDefinition-rtpbc-patient.html) (containing a small amount of identifying information to enable the insurer to locate the patient's records)
* [Coverage](StructureDefinition-rtpbc-coverage.html) (containing identification of the patient's pharmacy benefit coverage)
* [MedicationRequest](StructureDefinition-rtpbc-medicationrequest.html) (containing excerpts from the prescription to be priced)
* Practitioner (identifying the prescriber. Uses US Core Practitioner)
* [Organization](StructureDefinition-rtpbc-pharmacy-organization.html) (identifying the pharmacy)
<br><br>

### Must Support elements in this profile
**Client systems**<br>
* Elements that are marked Must Support are essential for the responder to identify the applicable plan rules and accurately determine patient costs and coverage. The submitter MUST ensure that content in these elements is accurate and complete in order to receive reliable information in the response.
* A reference to a coverage resource MUST be included when submitting to an insurer. It is not required when submitting to a pricing source.

**Responding systems**<br>

* MUST make use of all pertinent information provided in the Claim request when determining cost and coverage.
<br><br>


---

// File: input/pages/StructureDefinition-rtpbc-request-messageheader-intro.md

﻿This profile constrains the MessageHeader resource for use in a real-time pharmacy benefit check (RTPBC) request bundle.

<br>

---

// File: input/pages/StructureDefinition-rtpbc-response-bundle-intro.md

<br>The response Bundle profile identifies the resources to be submitted in an RTPBC request. The following are used in all circumstances and have a minimum cardinality of 1:

* MessageHeader
* ClaimResponse
* Patient
* In addition, the Organization resource is necessary when returning information based on an alternative pharmacy. It's minimum cardinality is 0.
<br><br>

### Must Support elements in this profile 
**Responding systems**
* All the above Bundle resource entries are designated Must Support. The required elements MUST be populated with correct and complete information.
* When returning information based on an alternative pharmacy, the Organization (pharmacy) resource MUST also be populated.

**Client systems** MUST be able to interpret and convey to users information from all Must Support resources.
<br><br>


---

// File: input/pages/StructureDefinition-rtpbc-response-claimresponse-intro.md

<br><br>
Data population is similar to a typical *predetermination* ClaimResponse (where the corresponding Claim.use was set to "predetermination"), with the following key differences:

* in addition to cost and coverage for the requested medication and pharmacy, the responder may also return information about alternative medication + pharmacy combinations. These alternatives are conveyed in one or more ClaimResponse.addItem composites, characterized as independent options using an extension defined in this guide ([isAlternative](StructureDefinition-rtpbc-isAlternative.html)) 
* the [benefitRestriction](StructureDefinition-rtpbc-benefitRestriction.html) extension is used to communicate the level at which the requested drug and pharmacy are covered, as well as alternative drug/pharmacy combinations (using high-level, pre-defined [benefit restrictions](ValueSet-rtpbc-benefit-restriction.html) tailored to the patient's perspective)
* the processNote element can be used to communicate additional textual information related to the cost or coverage of the requested medication, pharmacy or alternative
* alternative pharmacies are communicated using referenced Organization resources
* certain other elements are fixed to values reflecting a medication-related request...
    ClaimResponse.type = "pharmacy"
    ClaimResponse.addItem elements are constrained to product identifiers and quantity units of measure describing medications.
<br>

In this profile, the ClaimResponse references the following supported resources, both of which are profiled in this guide:
* [Patient](StructureDefinition-rtpbc-patient.html) (containing a small amount of identifying information to enable the insurer to locate the patient's records)
* [Organization](StructureDefinition-rtpbc-pharmacy-organization.html) (identifying an alternative pharmacy)
<br><br>

### Must Support elements in this profile 
**Responding systems**<br>
* Responders SHOULD return pricing and coverage information for relevant drug/pharmacy alternatives, in the addItem composite
* Every response must contain either an item composite or an error composite, but not both. The Item composite MUST be populated when sufficient information is received to be able to answer the request. The error composite MUST be populated when the responder cannot complete processing due to insufficient or invalid information in the request

* The benefitRestrictions extension is a conditional element that MUST be populated when the responder is an insurer (or other processor representing the patient's pharmacy benefit). It is not expected to be populated when the responder is a medication pricing source
* The processNote element is a conditional element that MAY be populated when the responder has additional information about costs or coverage related to an .item or .addItem. The noteNumber links an .item or .addItem to its associated processNote
* All elements marked Must Support are essential to communicating patient costs and coverage. The responder MUST ensure that content in these elements is accurate and complete

**Client systems**<br>
* MUST be able to interpret and convey to users all cost and coverage information returned in the response, as appropriate to the application

<br>

---

// File: input/pages/StructureDefinition-rtpbc-response-messageheader-intro.md

﻿This profile constrains the MessageHeader resource for use in a real-time pharmacy benefit check (RTPBC) response bundle.

<br>

---

// File: input/pages/submission_method.md

[Previous Page](business_rules.html)

### Operation: $process-message
The RTPBC request is submitted using the $process-message operation on the processor's claim server...
* URL: [base]/$process-message

#### Process-message parameter and response
Like the option above, the $process-message operation takes a single FHIR&reg; resource input parameter consisting of a Bundle containing the Claim resource and referenced supporting resources, and returns a Bundle containing a ClaimResponse and supporting resources.

In addition, this method includes a MessageHeader resource in both the request and response.
* In the request, the MessageHeader's *focus.reference* points to the Bundle's Claim resource, per the <a href="MessageDefinition-rtpbc-request.html">RtpbcRequestMessageDefinition.</a>
* In the response, the *focus.reference* points to the Bundle's ClaimResponse, per the <a href="MessageDefinition-rtpbc-response.html">RtpbcResponseMessageDefinition.</a>

### Synchronous response

The response in the RTPBC exchange is expected to be synchronous, with real-time response times to support use in interactive patient-facing applications.

### Examples

<a href="Bundle-rtpbc-bundle-request-03-w-header.html">Example bundled RTPBC request to payer/PBM. Using messaging ($process-message operation, with MessageHeaders)</a>

<a href="Bundle-rtpbc-bundle-response-03-w-header.html">Example bundled RTPBC response from payer/PBM. Using messaging ($process-message operation, with MessageHeaders)</a>


<br><br>

[Next Page](error_handling.html)

---

// File: input/pages/terminology.md

### Value Sets

- [RTPBC Billing Unit](ValueSet-rtpbc-billing-unit.html)
- [RTPBC Country Code](ValueSet-rtpbc-country-code.html)
- [RTPBC Benefit Restriction](ValueSet-rtpbc-benefit-restriction.html)
- [RTPBC Error Code](ValueSet-rtpbc-error-code.html)
- [RTPBC Event Type](ValueSet-rtpbc-event-type.html)
- [RTPBC Patient Pay Type](ValueSet-rtpbc-patient-pay-type.html)
- [RTPBC Pharmacy Type](ValueSet-rtpbc-pharmacy-type.html)
- [RTPBC Prescribable Product Code](ValueSet-rtpbc-prescribable-product-code.html)
- [RTPBC State and Province Code](ValueSet-rtpbc-state-and-province-code.html)

<br>

### Code Systems

**Code systems defined for use in the consumer Real-time Prescription Benefit Check (RTPBC) process**

The following code systems define consumer-friendly insurance coverage concepts for use in RTPBC responses: 
- [RTPBC Benefit Restriction](CodeSystem-rtpbc-benefit-restriction.html)
- [RTPBC Event Type](CodeSystem-rtpbc-event-type.html)
- [RTPBC Patient Pay Type](CodeSystem-rtpbc-patient-pay-type.html)

<br>

### Naming Systems

**Code and identifier systems maintained by other organizations**

- [NCPDP Provider ID](NamingSystem-rtpbc-NamingSystem-ncpdp-provider-id.html)
- [NCPDP Reject Code (511-FB)](NamingSystem-rtpbc-NamingSystem-ncpdp-reject-code.html)
- [NCPDP Pharmacy Type (955-HR)](NamingSystem-rtpbc-NamingSystem-ncpdp-pharmacy-type.html)
- [Canada Post Province Code](NamingSystem-rtpbc-NamingSystem-canada-post-province-code.html)


<br><br>




---

// File: input/pages/use_cases.md

### Goal

The goal of the consumer-focused real-time pharmacy benefit check (consumer RTPBC) is to inform a patient of the cost and insurance coverage related to medications they've been prescribed. This involves two key aspects:

* **Use case 1:** Enable the patient to find out how their medications will be covered by their insurance, including out of pocket costs and any coverage restrictions or requirements that might apply
* **Use case 2:** Help the patient discover discount pricing available for the medication. 
  <br/>

### Usage context
 The real-time pharmacy benefit check is designed to provide accurate cost information based on the specifics of a patient prescription. Details such as the specific drug name, dose form, strength and quantity must match the prescription exactly in order to receive reliable results.

However, a patient may wish to use the process for a medication they haven't yet been prescribed, for example to understand its cost compared to their current treatment. In that circumstance, the results must be viewed as approximate information that may not reflect their actual cost when their prescriber has ordered a particular product and dosage

### Use case flows

At a high level, the process looks like this...

<div><p>
  <img src="basic-info-flow.png" style="float:none">  
    </p>
</div>
### Participants

* the **patient,** who wishes to understand how their medication is covered by their insurance: their out of pocket cost, restrictions, and pharmacy options. Using the gathered information, the patient can learn whether the drug is covered, compare insurance out of pocket costs between pharmacies--and can also compare to cash prices and discount options gathered by their app
* the **consumer app** that submits the RTPBC request to the payer, and interprets the response for the patient
* the patient's **insurer or agent** that processes the RTPBC request and returns a response containing pricing, coverage restrictions, pharmacy options for the requested drug and alternative medications (typically the pharmacy benefit manager that handles the patient's prescription benefit) 
* a **medication pricing information source** 

### Consumer App Responsibilities

*  the patient's app gathers information about the prescription... entered by the patient or imported from another source
*  the patient provides coverage information from their insurance card, or the app retrieves it using an eligibility service (outside the scope of this guide)
*  the app packages up the patient, coverage, prescription and preferred pharmacy information in HL7 FHIR&reg; resources and submits them to the patient's insurer
*  the app interprets and presents the returned information in an understandable way, possibly presenting insurance coverage alongside cash or discount pricing gathered from other sources

### Insurer Responsibilities 

*  determines the patient cost and coverage details for the requested pharmacy and potentially for other pharmacy options--such as a mail service pharmacy
*  also checks for preferred alternative medications with better coverage under the patient's plan, and returns cost, coverage and pharmacy options for those as well

#### Medication Pricing Source Responsibilities

*  determines the price for the requested medication and pharmacy combination and other medication/pharmacy options
*  identifies discounts that apply, related to coupons or memberships

If the insurer or medication pricing source cannot complete processing of the request, it returns information about the exception that occurred. See <a href="error_handling.html">the Error Handling page</a>

### Related information flows outside of consumer RTPBC
The patient's app might gather related information (e.g., medication information or insurance eligibility) before submitting the consumer RTPBC request. 
*These exchanges are outside the scope of this guide.*
<br>

<div><p>
  <img src="related-info-flows.png" style="float:none">  
    </p>
</div>

<br><br>



[Next Page](information_content_and_fhir_resources.html)

---

// File: input/pages/ValueSet-rtpbc-benefit-restriction-intro.md

This value set contains a set of benefit restrictions that may apply to a prescription product and pharmacy combination evaluated in the Real-time Pharmacy Benefit Check (RTPBC) process. In order to be meaningful to patients, this value set summarizes the range of coverage levels and restrictions into a smaller, more readily understandable group of values.

<br><br>

---

// File: input/pages/ValueSet-rtpbc-error-code-notes.md

<p>﻿All codes are from the licensed NCPDP Reject Code (511-FB) code set, maintained by the National Council for Prescription Drug Programs.
See <a href="NamingSystem-rtpbc-NamingSystem-ncpdp-reject-code.html">NCPDP Reject Code (511-FB) (NamingSystem)</a></p>
<h3>Concept examples</h3> 

<p>The full, up-to-date content of the NCPDP Reject Code (511-FB) code set is only available to NCPDP members.</p>
<p>However, a past version of the code set is publicly available in the AHRQ United States Health Information Knowledgebase (USHIK). Below is a subset of concepts from that public source, for illustration purposes.</p>
<table border="1">
<tr><td><b>Code</b></td><td><b>Display</b></td></tr>
<tr><td>PJ</td><td>M/I Request Insurance Segment</td></tr>
<tr><td>1</td><td>M/I Bin Number</td></tr>
<tr><td>4</td><td>M/I Processor Control Number</td></tr>
<tr><td>6</td><td>M/I Group ID</td></tr>
<tr><td>7</td><td>M/I Cardholder ID</td></tr>
<tr><td>8</td><td>M/I Person Code</td></tr>
<tr><td>600</td><td>Coverage Outside Submitted Date Of Transaction</td></tr>
<tr><td>N1</td><td>No Patient Match Found</td></tr>
<tr><td>99</td><td>Host Processing Error</td></tr>
<tr><td>92</td><td>System Unavailable/Host Unavailable</td></tr>
<tr><td>R8</td><td>Syntax Error</td></tr>
<tr><td>21</td><td>M/I Product/Service ID</td></tr>
<tr><td>77</td><td>Discontinued Product/Service ID Number</td></tr>
<tr><td>ET</td><td>M/I Quantity Prescribed</td></tr>
<tr><td>26</td><td>M/I Unit Of Measure</td></tr>
<tr><td>PZ</td><td>Non-Matched Unit Of Measure To Product/Service ID</td></tr>
<tr><td>19</td><td>M/I Days Supply </td></tr>
<tr><td>22</td><td>M/I Dispense As Written (DAW)/Product Selection Code</td></tr>
<tr><td>PN</td><td>M/I Request Prescriber Segment</td></tr>
<tr><td>DR</td><td>M/I Prescriber Last Name</td></tr>
<tr><td>25</td><td>M/I Prescriber ID</td></tr>
<tr><td>56</td><td>Non-Matched Prescriber ID</td></tr>
<tr><td>71</td><td>Prescriber ID Is Not Covered</td></tr>
<tr><td>Z5</td><td>M/I Service Provider Segment</td></tr>
<tr><td>5</td><td>M/I Service Provider Number</td></tr>
<tr><td>YK</td><td>M/I Service Provider Name</td></tr>
<tr><td>PK</td><td>M/I Request Patient Segment</td></tr>
<tr><td>CA</td><td>M/I Patient First Name</td></tr>
<tr><td>CB</td><td>M/I Patient Last Name </td></tr>
<tr><td>9</td><td>M/I Date Of Birth</td></tr>
<tr><td>10</td><td>M/I Patient Gender Code</td></tr>
</table>

<br/>

---

// File: input/pages/ValueSet-rtpbc-ndc-11-intro.md

The consumer Real-time Pharmacy Benefit Check (RTPBC) process enables medication products to be specified using normalized 11-digit NDC codes, which consist of:

- 5-digit labeler segment
- 4-digit product segment, and
- 2-digit package segment

... with no dashes. 

<br/>

Each segment is front-padded with a leading zero if the base NDC segment has fewer digits than required by the normalized version. 

*Example: *

- base NDC: 0777-3105-02
- equals normalized NDC-11: 00777310502

<br/>

---

// File: input/pages/ValueSet-rtpbc-pharmacy-type-notes.md

<p>﻿All codes are from the licensed NCPDP Pharmacy Type (955-HR) code set, maintained by the National Council for Prescription Drug Programs.
See <a href="NamingSystem-rtpbc-NamingSystem-ncpdp-pharmacy-type.html">NCPDP Pharmacy Type (955-HR) (NamingSystem)</a></p>
<h3>Concept examples</h3> 

<p>The up-to-date content of the NCPDP Pharmacy Type (955-HR) code set is available to NCPDP members.</p>
<p>However, a past version of the code set is publicly available in the AHRQ United States Health Information Knowledgebase (USHIK). Below is the full set of concepts from that public source.</p>
<table border="1">
<tr><td><b>Code</b></td><td><b>Display</b></td></tr>
<tr><td>R</td><td>Retail</td></tr>
<tr><td>M</td><td>Mail Order</td></tr>
<tr><td>S</td><td>Specialty</td></tr>
<tr><td>L</td><td>Long-Term Care</td></tr>
<tr><td>A</td><td>Any</td></tr>
</table>

---

// File: input/pages/ValueSet-rtpbc-prescribable-product-code-intro.md

<p><p>The consumer Real-time Pharmacy Benefit Check (RTPBC) process enables medication products to be specified using either...</p></p>
<ul>
<li><b>NDC11. </b>11-digit normalized NDC--consisting of a 5-digit labeler segment, 4-digit product segment, and 2-digit package segment, with no dashes. Each segment is front-padded with a leading zero if the base NDC&#39;s segment has fewer digits than required by the normalized version. <br/><br/><em>Example: <b>Base NDC</b> 0777-3105-02 = <b>NDC11</b> 00777310502</em></li><br/>
<li><b>RxNorm. </b>The subset of RxNorm codes that state all of the following product aspects: the product name (distinguishing brand name vs. generic), strength and dose form. This set is composed of the term types, SCD (semantic clinical drug), SBD (semantic branded drug), GPCK (generic pack) and BPCK (brand name pack).
</li>
</ul>

<br>



---

// File: input/pages/ValueSet-rtpbc-prescribable-rxnorm-intro.md

<p>The consumer Real-time Pharmacy Benefit Check (RTPBC) process enables medication products to be specified using the subset of RxNorm codes that state all of the following product aspects: </p>
<ul>
<li>the product name (distinguishing brand name vs. generic)</li>
<li>strength </li>
<li>dose form.</li>
</ul>
<p>This set is composed of the term types, SCD (semantic clinical drug),SBD (semantic branded drug), GPCK (generic pack) and BPCK (brand name pack).
<br></p>

---

// File: input/pages/ValueSet-rtpbc-state-and-province-code-intro.md



---

