File: repos/HL7_SLASH_dme-orders/input/pagecontent/actors.md

# Actor Roles
This Implementation Guide defines and uses a set of actor roles as follows:
1. **Ordering Provider** – is responsible for originating the post-acute order, providing supporting documentation and sending the order to the Rendering Provider or an Intermediary
2. **Rendering Provider** – is responsible for fulfilling the order, which may be supplying a device (e.g. DME supplier) or performing a health care service (e.g. Home Health Service)
3. **Intermediary** – acts as the Rendering Provider in the exchange by receiving the order and providing any required updates to the status of the order.  In addition, the Intermediary is responsible for communicating the order to the Rendering Provider using the exchange methods in this IG or any other method required to communicate the order and status.

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/background.md

# Current environment
There is currently no commonly accepted method of defining and exchanging post-acute orders between ordering providers and the providers of the ordered services or devices (rendering providers).  This guide defines a framework for ordering any type of post-acute services and provides for the inclusion of appropriate documentation to support 1) the medical necessity of the orders, 2) refining the order based on clinical information, and 3) communicating specific reviews or approvals to support appropriate billing.  This exchange:
1.	Speeds the ordering process and delivers needed care sooner.
2.	Provides a method for electronic exchange to automate acceptance or rejection of the order.
3.	Supports exchange of required documentation.
4.	Supports exchange of information related to order review/approval (e.g. Prior Authorization, Appropriate Use, Order and Documentation Review). However, the use of this IG is primarily to communicate the specific post-acute service order and is not dependent on any review/approval process.

The goal is to provide for electronic ordering of Post-Acute DME and Home Health Services with the electronic exchange of supporting documentation in this version of the IG.  The goal of future versions of this implementation guide to support orders for all post-acute services.

**In Scope**
1.	Durable Medical Equipment (DME) and associated supplies using DeviceRequest.
2.	Medications associated with DME items such as nebulizers and infusion pumps using MedicationRequest.
3.	Home Health Services covered by a home health plan of care using ServiceRequest.
4.	Extension to exchange Prior-Authorization, Appropriate Use, Medical Review information  for DeviceRequest, ServiceRequest and MedicationRequest.
5. 	Extension for orderable item details for ServiceRequest.
6.	RESTful and Messaging based exchanges between the ordering and performing providers.
7.	Exchange of documentation to support the specific order or provide the rendering provider with information necessary to meet payer requirements.

**Out-of-Scope**
1.	Responses from the patient.
2.	Patient directed care.
3.	Services other than DME and Home Health Services.
4.	Medications that are not assoicated with DME.
5.	Cost considerations.
6.	Partial fulfillment: status is included, but the details (which may require a conversation between the ordering and rendering provider) are out of scope.
7.	Documentation requests: The performing provider may need additional documentation from the ordering provider that is not included in the exchanges defined in this IG. The authors suggest the use of the [Da Vinci Clinical Data Exchange (CDex) IG](http://build.fhir.org/ig/HL7/davinci-ecdx/index.html), which supports clinical data exchange between two providers as well as between a provider and a payer.
8.	This IG does not require the use of a digital signature for this version, but the optional use of provenance to support digital signatures in scope.

**Business Requirements**

The goal of this implementation guide is to provide a framework in which ordering providers can exchange orders and documentation with rendering providers.
1.	To communicate clinical orders electronically for DME and Home Health.
2.	To communicate documentation to perfect the order and/or establish medical necessity.
3.	To handle updates, cancellations, and rejections of orders with/by the rendering provider.

**Clinical Requirements**

Clinical requirements to support this implementation guide include the following items.
1.	Determining the appropriate ordered service and/or device.
2.	Completing documentation to support the medical necessity of the ordered service or device.
3.	Performing any required actions by the ordering provider to authorize (prior authorization), determine appropriateness (appropriate use), establish completeness of the documentation (documentation review) and communicate it to the rendering provider.
4.	Identifying the rendering  provider or intermediary to receive the order and supporting documentation.

**Testing Requirements**

This IG has been constructed in a manner that allows testing of conformance to:
1. the profiles defined in this guide, 
2.  the underlying FHIR standards for the associated release (e.g. [FHIR R4](http://hl7.org/fhir/)), and 
3. [US Core R4](http://build.fhir.org/ig/HL7/US-Core-R4/) profiles as applicable.

Note: Other standards are available or in process to communicate referral information between providers such as the [Bidirectional Services eReferrals (BSeR)](http://hl7.org/fhir/us/bser/2019May/BSeRMessagingWorkflow.html) that are patterned after the 360x referral process. The PAO IG is focused on a simple method to exchange and track post-acute orders and the supporting documentation. PAO supports both a messaging and RESTful method for exchanging and tracking post-acute care orders including orders for services not covered by BSeR, such as DME.  In the future, we will harmonize the statuses defined in this guide with the state machine work in BSeR.


---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/fhir_artifacts_overview.md

# Artifact Lists

Complying with this implementation guide means complying with a number of profiles, extensions, code systems, value sets and custom search parameters. This page provides an overview of where the relevant information can be found.

The FHIR artifacts used by Post-acute Orders are organized, in this section, based on the origin of the content (e.g. part of the US Core implementation guide or specific to this implementation guide).

**Post-acute Order specific Artifacts that do not have [US Core 4.0.0](http://build.fhir.org/ig/HL7/US-Core-R4/) profiles**

* [Bundle](http://build.fhir.org/ig/HL7/dme-orders/StructureDefinition-PAOX-bundle.html)
* [MessageHeader](http://build.fhir.org/ig/HL7/dme-orders/StructureDefinition-PAOX-messageheader.html)
* [Task](http://build.fhir.org/ig/HL7/dme-orders/StructureDefinition-PAOX-task.html)
* [Subscription](http://build.fhir.org/ig/HL7/dme-orders/StructureDefinition-PAOX-subscription.html)
* [DeviceRequest](http://build.fhir.org/ig/HL7/dme-orders/StructureDefinition-PAOX-devicerequest.html)
* [ServiceRequest](http://build.fhir.org/ig/HL7/dme-orders/StructureDefinition-PAOX-servicerequest.html)
* [Coverage](http://build.fhir.org/ig/HL7/dme-orders/StructureDefinition-PAOX-coverage.html)

**Post-Acure Order specific Artifacts based on [US Core 4.0.0](http://build.fhir.org/ig/HL7/US-Core-R4) profiles**

* [MedicationRequest](https://build.fhir.org/ig/HL7/dme-orders/StructureDefinition-PAOX-medication-request.html)
* [Medication](http://build.fhir.org/ig/HL7/dme-orders/StructureDefinition-PAOX-Medication.html)
* [Provenance](http://build.fhir.org/ig/HL7/dme-orders/StructureDefinition-PAOX-provenance.html)

**[US Core 4.0.1](http://build.fhir.org/ig/HL7/US-Core-R4) profiles referenced by the above resources**

* [Patient](http://hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html)
* [Practitioner](http://hl7.org/fhir/us/core/StructureDefinition-us-core-practitioner.html)
* [PractitionerRole](http://hl7.org/fhir/us/core/StructureDefinition-us-core-practitionerrole.html)
* [Organization](http://hl7.org/fhir/us/core/StructureDefinition-us-core-organization.html)
* [Location](http://hl7.org/fhir/us/core/StructureDefinition-us-core-location.html)

Additional information about the use of these artifacts can be found in the relevant specification.

**The artifacts are of four types**:

* 	**[Profiles](http://www.hl7.org/fhir/profiling.html)** that constrain FHIR resources to reflect PAO requirements.
* 	**[Extensions](http://www.hl7.org/fhir/extensibility.html)** that define additional data elements that can be conveyed as part of a resource.
* 	**[Code Systems](http://www.hl7.org/fhir/terminologies-systems.html)** that define PAO-specific terminologies to be used in one or more of the profiles.
* 	**[Value Sets](http://www.hl7.org/fhir/terminologies-valuesets.html)** that define the specific subsets of both PAO-defined and other code systems that can be (or are recommended to be) used within one or more profile elements.
* 	**[Operations](http:///www.hl7.org/fhir/operations.html)** that define the PAO-specific constraints on the [$processMessage](http://www.hl7.org/fhir/operation-messageheader-process-message.html) operation


---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/fhir_messaging_exchanges.md

# FHIR Messaging communication pattern

**Assumptions (without an Intermediary)**

1.	There is no RESTful access to the information in the EHR, or, all the information needs to be present in a single unit.
2.	Any additional information needed by the supplier may be available via RESTful queries from the EHR.
3.	The MessageDefinition resource for each message is available as a static artifact to be used as a reference, but it is not present in the message itself.
4.	The structure of each message is as follows:

			a.	A Bundle where the MessageHeader resource is the first entry.
			b.	MessageHeader.focus references the Task resource in the MessageBundle
			c.	The resources of all other entries in the Bundle are reachable from the MessageHeader resource (through Task or directly), and any references to resources that are not in the Bundle are logical references (via identifiers, not URLs).
 

**Flow Diagram (without an Intermediary)**

The flow diagram again has three parts. Each message is shown with a synchronous response, that comes from the $process-message endpoint of the receiver.

Note that any messages from the Rendering Provider to the Ordering Provider could be presented as an asynchronous message response (similar to the application-level acknowledgements in HL7 v2 messages) using the MessageHeader.response structure. However, since the implementation guide explicitly calls out the use of intermediaries, keeping track of the correct MessageHeader.response.identifier value would be an additional requirement for them that is not necessary - the use of Task allows responses to be linked with the original order without MessageHeader.response.

1. The first part shows the sending of the order. A successful synchronous response indicates that the order has been received.
2. The second part represents order updates by the Rendering Provider, which covers any changes to the status of the order, up to and including the fulfillment of the order.
3. The third part shows order updates by the Ordering Provider (e.g. order change or cancel).

<table><tr><td><img src="PAOMsg.jpg" /></td></tr></table>


**Assumptions (with an Intermediary)**

1.	There is no RESTful access to the information in the Ordering Provider System, or, all the information needs to be present in a single unit.
2.	Any additional information needed by the Rendering Provider needs to be exchanged via order update messages, since one of the main purposes of the Intermediary is to proxy the access between the Ordering Provider and the Rendering Provider.
3.	MessageHeader.response is not used for the order update messages.
4.	The MessageDefinition resource for each message is available as a static artifact to be used as a reference, but it is not present in the message itself.
5.	The structure of each message is as follows:

			a.	A Bundle where the MessageHeader resource is the first entry.
			b.	MessageHeader.focus references the Task resource in the MessageBundle
			c.	The resources of all other entries in the Bundle are reachable from the MessageHeader resource (through Task or directly), and any references to resources that are not in the Bundle are logical references (via identifiers, not URLs).
 

**Flow Diagram (with an Intermediary)**

The flow diagram again has three parts. Each message is shown with a synchronous response, that comes from the $process-message endpoint of the receiver.

Note that any messages from the Rendering Provider to the Ordering Provider could be presented as an asynchronous message response (similar to the application-level acknowledgements in HL7 v2 messages) using the MessageHeader.response structure. However, since the implementation guide explicitly calls out the use of intermediaries, keeping track of the correct MessageHeader.response.identifier value would be an additional requirement for them that is not necessary - the use of Task allows responses to be linked with the original order without MessageHeader.response.

1. The first part shows the sending of the order. A successful synchronous response indicates that the order has been received.
2. The second part represents order updates by the Rendering​ Provider, which covers any changes to the status of the order, up to and including the fulfillment of the order.
3. The third part shows order updates by the Ordering Provider (e.g. order change or cancel).

<table><tr><td><img src="PAOMsgInt.jpg" /></td></tr></table>

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/glossary.md

# Glossary
This Implementation Guide defines and uses a number of terms and abbreviation as follows:
1. Durable Medical Equipment (DME)
2. Home Health Services (HH)
3. Prior Authorization (PA)
4. Appropriate Use (AU)
5. Medical Review (MR)
6. HealthCare Procedure Code System (HCPCS)
7. Clinical Procedure Terminology (CPT)


---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/index.md

This specification is designed as a foundational IG for the exchange of FHIR Orders outside of the acute care setting. It provides specific methods for the exchange of orders and their accompanying documenation between the ordering and renering provider.  It also defines workflow that accomodates the role of an intermediary that may perfect the order and decide, based on a number of factors (e.g., insurance coverage, availability, capability, preferences) the appropriate rendering provider to excute the order.

The actors in this specification include:
* 1) Ordering Provider -- creates the order for a service, device, medication, referral
* 2) Rendering Provider -- performs the service, provides the item(s) or medications indicated in the order, and the
* 3) Intermediary -- responsible for directing the FHIR orders between the Ordering and Rendering providers.

To accomodate both synchronous workflows and asynchronous workflows, this implemenation guide supports RESTful exchanges based on the exchange of the FHIR Task resource and exchanges based on FHIR messaging.  These exchange methods can be used in any combination between the actors.


# Content and Organization of this Implementation Guide
The implementation guide is organized into the following sections:
* 	[Index ](http://build.fhir.org/ig/HL7/dme-orders/index.html)describes the overall organization of the implementation guide.
* 	[Background](http://build.fhir.org/ig/HL7/dme-orders/background.html) describes current environment and the intent of the implementation guide.  It also covers items that are: 1) in scope, 2) out of scope, 3) business requirements, and 4) clinical requirements.
* 	[Security and Privacy](http://build.fhir.org/ig/HL7/dme-orders/security_and_privacy.html) describes the security and privacy guidelines for use of this implementation guide.
* 	[RESTful FHIR exchanges](http://build.fhir.org/ig/HL7/dme-orders/restful_fhir_exchanges.html)  describes the RESTful method of exchanging orders, updates and status.
* 	[FHIR Messaging exchanges](http://build.fhir.org/ig/HL7/dme-orders/fhir_messaging_exchanges.html) describes the use of FHIR messaging to exchanging orders, updates and status.
* 	[Mixed Intermediary exchanges](http://build.fhir.org/ig/HL7/dme-orders/mixed_intermediary_exchange_model.html)  describes the use of both RESTful FHIR and FHIR messaging exchanges with an Intermediary.
* 	[Technical Background](http://build.fhir.org/ig/HL7/dme-orders/technical_background.html) describes the different specifications this implementation guide relies on and indicates what developers should read and understand prior to implementing this specification.
* 	[FHIR Artifacts Overview](http://build.fhir.org/ig/HL7/dme-orders/fhir_artifacts_overview.html) covers the type of FHIR artifacts that are included in this implementation guide.
* 	[Must Support and Missing Data](http://build.fhir.org/ig/HL7/dme-orders/must_support_and_missing_data.html) describes the required treatment of elements with a Must Support flag and how to handle Missing Data.
* 	[Artifact Summary](http://build.fhir.org/ig/HL7/dme-orders/artifacts.html) introduces and provides links to the FHIR R4 profiles, extensions, code systems, value sets, and other FHIR artifacts used in this implementation guide.

# Dependencies
This implementation guide relies on the following other specifications:
* 	[FHIR R 4.0.1](http://hl7.org/fhir/) - The current official version of FHIR as of the time this implementation guide was published. See the background page for key pieces of this specification implementers should be familiar with.
* 	[US Core STU 3.1.1](http://build.fhir.org/ig/HL7/US-Core-R4/) - The current official version of US Core based on [FHIR R4](http://hl7.org/fhir//). 

# Credits
This work was sponsored by the Centers for Medicare and Medicaid Services (CMS) as part of a contract with Scope Infotech Inc. to support the EMDI Project.
This IG was developed under the auspices of the [Orders and Observations](http://www.hl7.org/Special/committees/orders/leadership.cfm) work group. Current work group co-chairs are:

* 	**Hans Buitendijk** – Cerner Corportation
* 	**Ulrike Merrick** – Vernetzt, LLC
* 	**Lorraine Constable** – HL7 Canada
* 	**Raf Herzog** – Roche Diagnostics
* 	**John David Nolal, MD** – Children’s Mercy Hospitals and Clinics
* 	**David Burgess** – Laboratory Corporation of Americal
* 	**Robert Hausam, MD** – Hausem Consulting, LLC

The Electronic Medical Documentation Interoperability (EMDI) project coordination is managed by:

* 	**Pallavi Talekar** – Scope Infotech Inc.
* 	**Nandini Ganguly** – Scope InfoTech Inc.
* 	**Briana Barnes** – Scope Infotech Inc.
* 	**Kishan Patel** - Scope Infotech Inc.
* 	**Ray Wilkerson** – Scope Infotech INnc.

Development of this IG was performed by **Robert Dieterle** – EnableCare, LLC

Special thanks to the numerous EMDI participants who have contributed to conference calls, provided feedback over the last two years, and those who participated in the previous ballot of this IG, as well as those who are participating in this one!

In particular, ordering workflow diagrams were provided, in part, by:

* **Vassil Peytchev** - Epic 

If you are interested in participating in the Post-Acute orders project: information about our calls, minutes of past discussions, and other information can be found [here](https://confluence.hl7.org/pages/viewpage.action?pageId=44499186) on our HL7 Confluence page.

# Change log
* **0.2.2a* :**updates from 11/14/2021
* **0.2.2b* :**updates from 5/23/2022
* **0.2.2c* :**updates from 6/19/2023
* **0.2.2d* :**updates from 6/22/2023
* **0.2.2.e* :**updates from 6/25/2023 

End of home page

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/mixed_intermediary_exchange_model.md

# Mixed communication pattern

One of the purposes of an Intermediary can be to transition between different communication patterns, although this assumes a detailed understanding of the content, and requires the Intermediary to manage resources locally. 

This example shows using the RESTful pattern for the Ordering Provider, and messaging with the Rendering Provider.

1. The first part of creating the order includes the Intermediary getting all necessary resources from the Ordering Provider to package them as a message which is sent to the Rendering Provider. A successful message to the Rendering Provider is then reflected as a status of “received” in the Task resource, and the Ordering Provider is notified of the update.
2. The second part, updates/responses to the order from the Rendering Provider, starts with a message sent to the Intermediary, where all resources are stored and exposed locally, so the Ordering Provider can retrieve them after getting the updated Task.
3. The third part is for order updates from the Ordering Provider to the Rendering Provider, and the flow is similar to the new order part.


<table><tr><td><img src="PAOMixedInt.jpg" /></td></tr></table>

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/must_support_and_missing_data.md

# Must Support and Missing Data

Systems claiming to conform to a profile SHALL support the elements in a profile as defined below: This guide adopts the following definitions of MustSupport for all direct transactions between the Sender and Recipient or Intermediary

**All Sending Systems**

Sending Systems are defined as: 1) Ordering Provider Systems and 2) Intermediary Systems when sending to a Rendering Provider Systems using the PAO IG
* As part of the PAO transaction as specified by the PAO IG, the Sender SHALL be capable of including all elements defined in the PAO profiles that have a MustSupport flag and
 	SHALL populate all elements with a MustSupport flag if the information exists.
* In situations where information on a particular data element is not present, the Sender SHALL NOT include the data element in the resource instance if the cardinality is 0..n.
* If the information does not exist and the cardinality of the element is >= 1..*, the Sender SHALL send the reason for the missing information using values from the value set indicating the absent reason or use the dataAbsentReason extension where it is defined. 
Note: populating the element with the value set absent reason or using the dataAbsent Reason should be handled by the Sending System and not require provider action. 

**All Receiving Systems** 

Receiving Systems are defined as 1) Rendering Provider Systems and 2) Intermediary Systems when receiving from the Ordering Provider Systems using the PAO IG.
* The Recipient/Intermediary SHALL be capable of processing resource instances containing the data elements without generating an error or causing the application to fail. 
* Recipient/Intermediary Systems SHOULD be capable of processing (display, store, etc) the data elements based on the utility of the specific element to the rendering provider and the specific item or service being ordered.
* When receiving a PAO Order from the Sender, the Recipient/Intermediary SHALL interpret missing data elements within resource instances as data not present in the Senders systems.
* PAO Order Recipient/Intermediary Systems SHALL be able to process resource instances containing data elements asserting missing information without generating an error or causing the application to fail.

**Conformance to US Core Profile** 

Where this IG does not additionally constrain a US Core profile, the actors shall follow the US Core definition of [Must Support and Missing Data](http://hl7.org/fhir/us/core/general-guidance.html).


---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/restful_fhir_exchanges.md

# FHIR RESTful Communication Pattern 

**Assumptions (without an Intermediary)**

1. The Supplier has RESTful query capabilities.
2. The Supplier can manage subscriptions on a specific Task resource.
3. The Supplier can authenticate to and is authorized to query the EHR.

**Flow Diagram (without an Intermediary)**

The flow diagram has three parts. 

1. Creation of the order.
2. Order updates by the Rendering Provider, which covers any changes to the status of the order, up to and including the fulfillment of the order.
3. Order updates by the Ordering Provider (e.g. order change or cancel).

<table><tr><td><img src="PAOREST.jpg" /></td></tr></table>


**Assumptions (with an Intermediary)**

1.	The Intermediary is the owner and “home” of all Task resources for this workflow.
2.	The Intermediary can manage subscriptions on a specific Task resource, and generally on Task resources.
3.	The Rendering Provider has restful query capabilities.
4.	The Rendering Provider has a longstanding subscription for Task resources where they are the Task performer.
5.	The Intermediary has established authorization and authentication relationships with both the Ordering Provider and the Rendering Provider.
6.	The intermediary will either use URL-rewriting for all references and links pointing to the Ordering Provider or Rendering Provider, or it creates copies of the resources local to the Intermediary to enable RESTful retrieval without direct Ordering Provider / Rendering Provider interaction.

**Flow Diagram (with an intermediary)**

The flow diagram has three parts. 

1. Creation of the order. (Note: In this case it is useful to have an indication that the Rendering Provider is actually aware of the order, so this extra step is added in the first part).
2. Order updates by the Rendering Provider, which covers any changes to the status of the order, up to and including the fulfillment of the order.
3. Order updates by the Ordering Provider (e.g. order change or cancel).


<table><tr><td><img src="PAORESTINT.jpg" /></td></tr></table>

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/security_and_privacy.md

# Security and Privacy

This Implementation Guide is adopting the [Security and Privacy Section](http://build.fhir.org/ig/HL7/davinci-ehrx/security.html) from the Da Vinci Project Health Record Exchange (HRex) IG.


---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-bundle-intro.md

Intro

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-bundle-notes.md

Notes

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-coverage-intro.md

Intro

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-coverage-notes.md

Notes

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-devicedefinition-intro.md

Intro

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-devicedefinition-notes.md

Notes

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-devicerequest-intro.md

Intro

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-devicerequest-notes.md

Notes

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-Medication-intro.md

Intro

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-Medication-notes.md

Notes

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-medication-request-intro.md

Intro

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-medication-request-notes.md

Notes

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-messageheader-intro.md

Intro

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-messageheader-notes.md

Notes

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-provenance-intro.md

Intro

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-provenance-notes.md

Notes

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-relevant-reviews-extension-intro.md

Intro

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-relevant-reviews-extension-notes.md

Notes

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-servicerequest-intro.md

Intro

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-servicerequest-notes.md

Notes

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-subscription-intro.md

Intro

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-subscription-notes.md

Notes

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-task-intro.md

Intro

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/StructureDefinition-PAOX-task-notes.md

Notes

---

File: repos/HL7_SLASH_dme-orders/input/pagecontent/technical_background.md

# Systems
The PAO implementation guide defines the responsibilities of the three types of systems involved in a Post-Acute Orders solution:
* **Ordering Provider Systems:**  Systems that manage data on behalf of an Ordering Provider, who is a source for data to be transferred.
* **Rendering Provider Systems:**  Systems that manage data on behalf of a Rendering Provider, who is the intended recipient of transferred data.
* **Intermediary Systems:** Systems that communicate with both the Ordering Provider Systems and the Rendering Provider Systems. Intermediary Systems may provide appropriate Rendering Provider selection (e.g. based patient and or payer criteria), translation services, and order detail routing/integration.

# Underlying technologies
This guide is based on the [HL7 FHIR](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=491) standard. Implementers of this specification therefore need to understand some basic information about these specifications.

**FHIR**

This implementation guide uses terminology, notations and design principles that are specific to FHIR. Before reading this implementation guide, it’s important to be familiar with some of the basic principles of FHIR as well as general guidance on how to read FHIR specifications. Readers who are unfamiliar with FHIR are encouraged to read (or at least skim) the following prior to reading the rest of this implementation guide:

* 	[FHIR overview](http://www.hl7.org/fhir/overview.html)
* 	[Developers introduction (or Clinical introduction)](http://www.hl7.org/fhir/overview-dev.html)
* 	[FHIR data types](http://www.hl7.org/fhir/datatypes.html)
* 	[Using codes](http://www.hl7.org/fhir/codesystem.html)
* 	[References between resources](http://www.hl7.org/fhir/references.html)
* 	How to read [resource](http://www.hl7.org/fhir/resourcelist.html) & [profile](http://www.hl7.org/fhir/profiling.html) definitions
* 	[Base resource](http://www.hl7.org/fhir/STU3/resource.html)

This implementation guide supports the [R4 version](http://hl7.org/fhir/) of the FHIR standard. R4 is recently published and the goal is to ensure thant this implementation guide aligns with the current direction of the FHIR standard.
Because this implementation guide focuses on workflow issues between an Ordering Provider and the Rendering Provider, implementers should also familiarize themselves with the FHIR resources and operations listed on the [FHIR Artifacts Overview](http://build.fhir.org/ig/HL7/dme-orders/fhir_artifacts_overview.html) page.

---

