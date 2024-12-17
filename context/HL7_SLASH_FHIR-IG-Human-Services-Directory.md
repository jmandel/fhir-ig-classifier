File: repos/HL7_SLASH_FHIR-IG-Human-Services-Directory/sushi-config.yaml

# ╭──────────────────────────────────────ImplementationGuide───────────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see: https://fshschool.org/docs/sushi/configuration/                    │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.us.hsds
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    valueCode: trial-use
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
    valueInteger: 2
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: hss
canonical: http://hl7.org/fhir/us/hsds
jurisdiction: urn:iso:std:iso:3166#US
title: "FHIR Human Services Directory"
description: "fhir-human-services-directory"
status: active # draft | active | retired | unknown
name: FHIR-Human-Services-Directory
version: 1.0.0
fhirVersion: 4.0.1
license: CC0-1.0
copyrightYear: 2023+
releaseLabel: STU1
publisher:
  name: HL7 Human and Social Services Work Group
  url: http://www.hl7.org/Special/committees/hsswg/index.cfm
  email: hsswg@lists.hl7.org

dependencies:
 hl7.fhir.us.core: 3.1.1
 hl7.fhir.us.davinci-pdex-plan-net: 1.1.0 

parameters:
  show-inherited-invariants: false
#  special-url: [http://hl7.org/fhir/us/hsds/CodeSystem/HumanServiceProgramCS]

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To use a provided input/includes/menu.xml file, delete the "menu" property below.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  Implementation: 
    Implementation: implementation.html
    Representing and Searching Human Services Directory Data: implementation.html#representing-and-searching-human-services-directory-data
  Artifacts: 
    Profiles: artifacts.html#3
    Extensions: artifacts.html#4
    Terminology: artifacts.html#5
    Search Parameters: artifacts.html#2
    Capability Statement: artifacts.html#1
  Downloads: downloads.html
  Examples: examples.html
  History: http://hl7.org/fhir/us/hsds/history.cfml

---

// File: input/pagecontent/downloads.md

# Downloads
The entire implementation guide (including the HTML files, definitions, validation information, etc.) may be downloaded here (add link).
 
* [Full Specification (zip)](full-ig.zip)
* [JSON Definitions (zip)](definitions.json.zip)
* [JSON Examples (zip)](examples.json.zip)
* [XML Definitions (zip)](definitions.xml.zip)
* [XML Examples (zip)](examples.xml.zip)
* [Turtle Definitions (TTL)](definitions.ttl.zip)





---

// File: input/pagecontent/implementation.md

## Implementation Notes
This page contains miscellaneous information on FHIR implementation. This content is primarily directed at implementers of the Human Services Directory.

The Human Services Data Specification (HSDS) model is mapped to corresponding elements in the FHIR profiles contained within this Implementation Guide (Organization, Location, HealthcareService).

### Conformance Requirements
The primary focus of this implementation guide is a RESTful API for obtaining data from a FHIR-enabled Human and Social Service Resource Directory. This API currently only supports a one-directional flow of information from a FHIR-enabled Human Services Directory into local environments (i.e., HTTP GETs). A RESTful API is an interface that allows computer systems to exchange information securely over the internet. REST stands for Representational State Transfer. This means that when a client requests a resource using a REST API, the server transfers back the current state of the resource in a standardized representation.

An implementation that is conformant to this IG:
- SHALL support profiles: Organization, HealthcareService, and Location
- MAY support profiles: Endpoint

The conformance verbs (**SHALL, SHALL NOT, SHOULD, MAY**) used in this guide are defined in [FHIR Conformance Rules](http://hl7.org/fhir/R4/conformance-rules.html).

### Privacy Considerations
A conformant Human Services Directory **SHALL NOT** require a directory mobile application to send consumer identifying information in order to query content.
A directory mobile application **SHALL NOT** send consumer identifiable information when querying a Human Services Directory.
### Must Support
When querying the Human Service Resource Directory Profiles defined in this IG, Must Support on any profile data element **SHALL** be interpreted as follows:

#### API Requirements

- API actors **SHALL* be capable of populating all Must Support data elements as part of the query results.
- In situations where information on a particular Must Support element is not present and the minimum cardinality is 0, the API actors **SHALL NOT** include the data elements in the resource instances returns as part of the query results.
- In situations where information on a particular data element is not present and the minimum cardinality id >0, the API **SHALL** send the reason for the missing information using values (such as nullFlavors) from the value set where they exist or use the dataAbsentReason extension.

#### Application Requirements 

- Application actors SHALL be capable of processing resource instances containing the Must Support data elements without generating an error or causing the application to fail.
- Application actors SHOULD be capable of displaying the data elements for human use or storing the information for other purposes.
- When querying the Human Service Resource Directory API, Application actors SHALL interpret missing Must Support data elements within resource instances as data not present.
- Consumer App actors SHALL be able to process resource instances containing Must Support data elements asserting missing information.

### Client Detection of Updates Directory Content

Each profile in this guide requires that the lastUpdated timestamp be provided as part of the profile's data content. Clients that cache query results can track additions or modifications to directory content through queries that filter content using the _lastUpdated search parameter. Clients should periodically check that data cached from past queries has not been deleted by querying for the same elements by _id.

### General Security Considerations

**NO CONTENT**

### FHIR Response Bundle
By default, the FHIR search result response invoked by the API only includes a FHIR Bundle resource containing resources that match the search criteria.  These resources include references and full Uniform Resource Locators (URL) to other related resources so the consuming application can request additional related resources (e.g., querying Organization and Location resources associated with a HealthcareService resource). This results in a “chatty” interface since the consuming applications have to make several queries to get all of the information required for social care referrals. The FHIR specification supports **_include** as part of the search parameter to request that the server include the related resources specified by the _include. This means the _include has to specify each related resource linkage. Instead of taking that approach, this Implementation Guide suggests that FHIR servers respond with a FHIR bundle that includes the requested resource and all its related resources simultaneously. This allows consuming applications to perform a single query in order to receive all relevant data. In addition, this approach mimics the '/complete’ parameter supported by the Human Services Data (HSDA) APIs.  

###	Representing and Searching Human Services Directory Data

A key objective for the FHIR IG for Human Services Directories is to advance interoperability in the human and social services domain by enabling human services directory data that is that mutually understandable to be exchanged between two or more systems. Several levels of interoperability are pertinent in the context of information technology, syntactic (also known as foundational) and semantic interoperability. 

Syntactic interoperability focuses on compatibility for the seamless exchange of data between systems. This involves standardizing data formats and protocols that enable data transmission. Examples include standard message formats such as HL7 Version 2, CDA and FHIR as well as communication protocols like TCP/IP and RESTful APIs for data exchange.

Sematic interoperability helps to ensure that the data being exchanged can be understood and interpreted correctly by different systems. This requires the use of common terminologies, codes, and data models to enable a shared understanding of the information being exchanged. Vocabulary standards such as SNOMED CT, ICD-10-CM & ICS-10-PCS, CPT & HCPCS, LOINC, and RxNorm are used in U.S. healthcare exchange standards to support semantic interoperability by providing consistent representation of clinical concepts.
In the approach to creating this implementation guide, the Human Services Data Specification [(HSDS) v.2.0.1](https://docs.openreferral.org/en/v2.0.1/hsds/) was used as the foundation for information requirements to ensure that data commonly represented in human and social services directories was available and could be mapped to the relevant FHIR profiles chosen for use in this guide. These FHIR profiles and APIs are to be used by FHIR enabled applications for the purpose of searching community-based directories for social services that community-based organizations provide to help address social needs of individuals, whether within the context of social care referrals, or for directory lookups in FHIR-enabled consumer applications. This implementation guide provides a map between local directory data and the FHIR profiles within this guide to implementers familiar with their local data and HSDS to facilitate implementation.

HSDS is agnostic with respect to terminologies/taxonomies and acknowledges the variations in human services taxonomies that are currently being used by referral management systems, regional home-grown platforms, and for reporting requirements. Patient/client outcomes are an additional consideration that needs to be met for the development and endorsement of an open-source, universal taxonomy for human and social services.

This version of the IG (STU 1) supports but does not require, the use of any standard social services taxonomy. The guide has been tested under two separate Reference Implementations using directory data encoded using the 211 Human Services Indexing System (211 LA) and the [Open Eligibility taxonomy](https://support.findhelp.com/hc/en-us/articles/4404055283227-The-Open-Eligibility-Project). As currently defined, this version of implementation guide (STU 1) can support the use of these vocabulary standards, any other data standardization efforts that support community services (e.g., the CMS [Home and Community-Based Services (HCBS) taxonomy](https://wms-mmdl.cms.gov/WMS/help/TaxonomyCategoryDefinitions.pdf), U.S. Department of Housing and Urban Development (HUD) [Homeless Management Information System (HMIS) Data Dictionary](https://www.hudexchange.info/resource/3824/hmis-data-dictionary/), and local directory codes). 

Given this complexity, this version of the IG only provides an example of how a common taxonomy could be used to search directories and to identify services. The issue of semantic interoperability may be addressed in a future, balloted version of this Implementation Guide.

| **Search**            | **Example**                             | **Focal Resource and Field**                              | **Qualifications of Search** |
|-----------------------|-----------------------------------------|-----------------------------------------------------------|------------------------------|
| General Search        | Any Service                             | HSDHealthcareService.category, HSDHealthcareService.type  | HSDLocation                  |
| Service, by Name      | Whistlestop Transportation Services     | HSDHealthcareService.name                                 | HSDLocation                  |
| Organization by Name  | Redwood Food Bank                       | HSDOrganization.name                                      | HSDOrganization    |

Examples of the canonical use of the profiles are provided in the [Examples section](examples.html) of this IG to help implementers consistently use the profiles to enable third-party applications to access human services directories. The method for searching human services directories based on these patterns is provided in the [SearchParameters section](artifacts.html#behavior-search-parameters).
 			
#### Search for Active HealthcareServices (Human Services) 
The HSDS model does not include a 'status' element to represent whether an organization is “active” in directory data.

The HSDS service table includes the field 'status' to indicate the current status of the service. Possible values include 'active', 'inactive', 'defunct', and 'temporarily closed'. 
If HSDS service.status = 'active', then FHIR HSDHealthcareService.active is set to 'true'; otherwise HSDHealthcareService.active = 'false' as all values other than 'active' are considered 'inactive' with respect to mapping to FHIR.

It is therefore assumed that any organization associated with active services are active organizations as well. As the result, mapping between the HSDS organization table to FHIR profile HSDOrganization.active is fixed to the value = true because the Organization.active element in the FHIR USCore profile (upon which HSDOrganization is based) is a required element (cardinality = 1..1).

A sample query to search for a currently active HSDHealthcareService:

GET [**base**]/HSDHealthcareService?_filter=active=**true**

(Replace [**base**] with the base URL of the FHIR server)

#### HealthcareService
The first type of search starts from HSDHealthcareService.category and/or HSDHealthcareService.type, so it is essential that each organization's services are supported by an appropriate set of HealthcareService instances.

Human Services are typically provided by community-based organizations. These services are linked to a set of locations where each service is provided (or is identified as a virtual service using a set of virtual modalities). 

These examples illustrate organizations that provide distinct human and social services related to nutrition and transportation delivered at the locations in which they are provided. Community-based organizations should define and maintain up-to-date information on the set of Human and Social HealthcareServices they provide. 

The HSDHealthcareService.category and HSDHealthcareService.type fields generally represent the highest levels of classification of services that are provided by community-based organizations.

Relevant examples:

| Scenario                         | Example Instances         	                  |
|--------------------------------- |----------------------------------------------|
| Food Bank Services               | [Redwood Foodbank](HealthcareService-FoodPantryService.html)   |
| Home-Delivered Meals             | [Meals on Wheels](HealthcareService-MealsOnWheels.html)   |
| Transportation Services          | [Whistlestop Transportation Service](HealthcareService-WhistlestopTransportationService.html)   |
| Crisis and Domestic Hotline      | [SF Crisis And Domestic Violence Services](HealthcareService-SFCrisisAndDomesticHotlineServices.html) |

#### Location
Location instances provide information about the locations where organizations provide various services. Location information includes contact information, physical address, accessibility options, and hours of operation, as well as position (longitude and latitude). Locations can be used to represent regions using an associated or attached GeoJSON object.

Relevant examples:

| Scenario                      	| Example Instances            |
|-----------------------------------|------------------------------|
| Food Bank Location               	| [Redwood Foodbank Location](Location-FoodBankLocation.html)|
| Meals Delivery Service Location   | [Meals On Wheels Location](Location-MealsOnWheelsLocation.html)|
| Transportation Services Location 	| [Whistlestop WheelsLocation](Location-WhistlestopwheelsLocation.html)|
| Crisis Services Location         	| [SF Crisis Intervention Location](Location-SF9114AllLocation.html)|

#### Organization
Organization instances provide specific information about a commmunity-based organization including its name, alias (alternate name), organization type, address and contact information. 

| Scenario                                           	| Example Instances         	|
|----------------------------------------------------	|---------------------------	|
| CBO providing food                       	            | [Redwood Food Bank](Organization-FoodBank.html) 	|
| CBO providing transportation 	                        | [Whistlestop Wheels](Organization-WhistlestopWheels.html)  |
| CBO providing crisis services                         | [SF Crisis Hotline](Organization-SFCrisisAndDomesticHotline.html)

#### Endpoints
An Endpoint instance provides the technical details of an endpoint that can be used for electronic services, such as a portal or FHIR REST services, messaging or operations, or DIRECT messaging. The Endpoint resource/profile is not currently supported by HSDS and therefore has not been included in the mapping between HSDS and FHIR, so Endpoint can be ignored.

---

// File: input/pagecontent/index.md

## FHIR Human Services Directory

### Overview
The Fast Healthcare Interoperability Resources (FHIR) Implementation Guide (IG) for Human Services Directories is a United States (US) Realm standard that offers three “new content” profiles that are conceptually based and aligned with the [DaVinci PDEX Plan Net Provider Directory Implementation Guide STU v.1.1.0](http://hl7.org/fhir/us/davinci-pdex-plan-net/). This approach was taken because the DaVinci PDEX Provider Directory Implementation Guide, STU 1.0  has been recommended for use as the health care provider directory standard by the Centers for Medicare & Medicaid Services [(CMS)](https://www.cms.gov/) in the [Interoperability and Patient Access Final Rule (CMS-9115-F)](https://www.cms.gov/about-cms/obrhi/interoperability/policies-and-regulations/cms-interoperability-and-patient-access-final-rule-cms-9115-f).

The terms [human services](https://en.wikipedia.org/wiki/Human_services) and [social services](https://en.wikipedia.org/wiki/Social_services) refer to assistance that helps to meet people’s basic needs. These services often target underrepresented, disadvantaged, and underserved individuals — such as homeless and poverty-stricken populations, as well as disabled and senior communities.

Human services may be delivered by a broad range of occupations, including counselors, psychologists, and social workers. These professionals may work on prevention, remediation, or both and seek to improve access to basic needs, from mental healthcare to shelter to individuals in need. Human services focus on community-based work, and help to coordinate services between agencies that are provided by private and independent organizations, administered by government agencies, and the healthcare delivery sector.

Social services is often considered to be one of the many subsets of human services. Social service providers also connect people with the services they need.

Within the context of this implementation guide, these terms may be used interchangeably and are intended to distinguish these types of services from the healthcare services and interventions that are provided by clinicians and that are accessed from a healthcare service directory such as the National Provider or Plan-Net Provider Directories.

The Human Services Directories FHIR implementation guide is intended to facilitate adoption of new “human services-specific” profiles by organizations that have implemented, or intend to implement, the DaVinci PDEX Provider Directory Implementation Guide, by re-using and aligning with three of the PDEX Provider Directory profiles: [PlannetOrganization](http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition-plannet-Organization.html), [PlannetHealthcareService](http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition-plannet-HealthcareService.html), and the [PlannetLocation](http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition-plannet-Location.html) profiles to create new human and social service-specific profiles. In addition, this guide is also designed for use by organizations and applications seeking to implement FHIR-based access to human services directories when they familiar with the relationship between their local service directory data and [Open Referral's](https://docs.openreferral.org/en/latest/) [Human Services Data Specification version (HSDS)](https://docs.openreferral.org/en/v2.0.1/hsds/reference/#).

**Figure 1** illustrates the relationship between the FHIR profiles included in this Implementation Guide

<img style="width:60%;height:auto;float:none;align:middle;" src="HSD Resource Relationship Diagram.svg"/>

*Figure 1: Profile Relationships*

### Introduction and Background

Social determinants of health [(SDOH)](https://health.gov/healthypeople/priority-areas/social-determinants-health) are the conditions in the environment where people are born, live, learn, work, play, worship, and age that affect a wide range of health, functioning, and quality-of-life outcomes and risks.

Community services that address food insecurity and transportation issues, to manage chronic disease, support employment, economic independence, and to reduce social isolation, are tools that can help address these non-medical risk factors. These services have been [shown](https://aspe.hhs.gov/sites/default/files/documents/e2b650cd64cf84aae8ff0fae7474af82/SDOH-Evidence-Review.pdf) to improve health outcomes and reduce the overall cost of care. 

However, the information about the human services that are available to people in need is complex and ever-changing. In any given community, multiple “resource directories” might be available to people looking for assistance, whether to health care providers looking for appropriate community-based services for patient referrals, or to clients, searching community directories in their location when they seek help directly.

Many states have invested in human service resource directories and referral management systems to help streamline and improve their ability to connect high risk populations, such as older adults and people with disabilities, to community services and support. Provider- and plan-specific referral platforms often do not leverage the existing networks of services that can help serve unmet social needs because they are unable to access these directories from within their clinical workflows. Information Technology developers who are implementing innovative community platforms do not always incorporate the necessary interoperability standards into their products and create one-off approaches that result in siloed communities and inefficiencies for managing social care referrals. This diminishes an opportunity to improve the health outcomes and well-being for individuals in need.

Past and current efforts to offer a standards-based approach to managing directories of human and social services have yet to be published. In 2020, the [Administration for Community Living (ACL)](https://acl.gov/), a division of the U.S. Department of Health and Human Services [(HHS)](https://www.hhs.gov/) announced the [ACL Social Care Referrals Challenge](https://acl.gov/socialcarereferrals) competition for state and community leaders in the aging and disability network, health care systems, health plans, and health IT vendors, to promote care coordination by developing and/or optimizing interoperable and scalable technology solutions. Participants were invited to work collaboratively on enhancing scalable approaches for securely sharing standardized data on social determinants of health information and person-centered plans using open resource directories that can seamlessly connect and interoperate between health care system electronic health records and community-based organizations (CBO). These solutions would help track referral patterns and gaps in service, and visibly display social service and health-related outcomes over time by leveraging national standards for data exchange and common formats for resource directories.

The [ACL Challenge teams](https://acl.gov/socialcarereferrals) successfully demonstrated approaches for closed loop referral exchange and adoption of open APIs for accessing human service resource directories which allow for lookup and retrieval of resources by any state, CBO, or referral vendor. The Challenge teams also effectively tested the use of the [Gravity Project’s](https://thegravityproject.net/) coded terminologies that support the capture and exchange of social risk data across the health and human services ecosystem while promoting and preserving individuals’ privacy, safety, and security. In the bonus round of the Challenge, participating teams presented their approach to mapping taxonomies and terminologies across various social care domains to support the use of standardized data and to promote cross-sector care coordination.

[Information and Referral (I&R)](https://www.informusa.org/what-is-iandr) is the art, science, and practice of bringing people and services together. To accomplish this goal, I&R organizations maintain resource databases that store information about services for specialized needs (e.g., aging population, respite services, childcare, special education, etc.) or offer comprehensive information about a broad range of health and human services (e.g., [2-1-1 call centers](https://www.211.org/)). These databases contain vital information about concrete aspects of community-based organizations, their services and programs, such as their names and addresses, hours of operation, eligibility requirements, and fees.

Databases containing resource directory information about community, social, health, government programs, and services and are kept up to date by trained database curators. People may seek help by making telephone contact, through online searches, and during in-person visits to community-based organizations. Some agencies provide information about all the human and social services available within a geographic area; while others are specialized, providing in-depth information about resources for specific population groups, such as older adults, children, victims of violence, military personnel and their families, or people with mental health issues. This information is shared through various channels and associated application programming interfaces (API).

An API is an interface that allows one computer program or system to access the features and data of a different program or system. APIs define how data are formatted and the types of interactions (operations) that are supported, such as how data can be searched. Data must be formatted in a common manner to be successfully exchanged, and often codified to be universally understood. APIs can be simple or complex and may include different data structures for a wide array of interactions.

Many desktop and mobile applications use APIs to retrieve, store, and update data. Each API defines the standards and protocols that allow an external application to access its system’s data. The world of I&R has no shortage of APIs designed to exchange human services directory information. This IG proposes using standard FHIR APIs that have been mapped to HSDS-formatted content to accelerate the ability for multiple FHIR-enabled community resource referral platforms and organizations to access statewide and regional human services directories.

The FHIR Implementation Guide for Human Services Directories (STU 1) defines a FHIR interface to directories of human and social services information provided by community-based organizations at the locations in which they operate. Publication of these data through standard FHIR-based APIs will enable third parties to develop applications that can be used by healthcare providers, payers, and consumers to query the directories of community-based services that can have a major impact on people’s health, well-being, and quality of life.

### Context, Scope and Support for Use Cases

#### Context for STU 1

Many healthcare providers, managed-care organizations, and payers are seeking to improve health and well-being by assessing their patients and members social determinants of health needs to provide care coordination and social care referrals to organizations offering the community services that can address their identified social care needs.

A primary source of requirements for developing the FHIR Human Services Directory IG was analysis of the [Open Referral](https://docs.openreferral.org/en/latest/) [Human Services Data Specification version 2.0.1 (HSDS)](https://docs.openreferral.org/en/v2.0.1/hsds/reference/#).

HSDS defines the content that provides a minimum data set for I&R applications and specialized service directory applications used to discover these services. The [HSDS specification](https://docs.openreferral.org/en/v2.0.1/hsds/reference/#objects-and-fields) provides an opportunity to convey vital service information to the public using an open API approach.

HSDS is a recognized US and International standard describing the information collected by human and social service organizations -- descriptions of services, organizations that provide those services, where and how services can be accessed -- and reflects real-world requirements of the users of human services directories. The HSDS structure allows directory information to be published in a machine-readable data format that can be understood by disparate entities that use HSDS and its suite of APIs: the [Human Service Data API Suite (HSDA)](https://docs.openreferral.org/en/v2.0.1/hsda/). 

HSDS has been adopted by a wide range of social care coordination vendors and was [endorsed](https://openreferral.org/airs-recommends-open-referral-for-resource-database-interoperability/) by the [Alliance of Information and Referral Systems (AIRS)](https://www.informusa.org/). AIRS is an international association of Information & Referral (I&R) service providers and serves as a primary source for standards, program accreditation and practitioner certification for the I&R sector.

Appropriate classification of services is critical to service discovery as well as for analytics. Numerous types of services are represented in human services directories at various levels of granularity, with many directories using different standards-based taxonomies. 

HSDS provides a way for the classifications of services that can be used in conjunction with multiple categorical schemas. However, HSDS is agnostic to any human service taxonomy used for the purpose of identifying and classifying services.

Some human services taxonomies are proprietary, presenting a barrier to their use which poses additional challenges. A lack of a comprehensive, non-proprietary human services taxonomy is a significant and outstanding issue that faces the healthcare and social services domain. As the result of the lack of an agreed-upon and open-source terminology standard for human services, only example [value sets](https://hl7.org/fhir/R4/valueset.html) are provided in this guide for the purpose of categorizing services as referenced in the HSDHealthcareService profile.

The HSDS standard reflects international, as well as US requirements. Therefore, this guide could be adapted internationally by changes to the terminology bindings that are specified for use within the US realm.

#### Scope for STU 1

A fundamental purpose for the FHIR Human Services Directory IG is to provide a map between HSDS-structured directory data and these FHIR profiles to implementers who are familiar with the HSDS model. This serves to reduce or eliminate the need for implementers to have extensive experience mapping local human services directory data to FHIR after they map their local service directory data to the HSDS model.

The profiles described in this IG allow the service directory information to be used across multiple healthcare and social care information management systems to be synched and matched. As healthcare, payer, and consumer systems adopt FHIR allowing access to FHIR-enabled electronic health record (EHR) systems, FHIR-enabled directories of interoperable community-based social services will permit users to initiate social care referrals to the available social service agencies in their desired area from within their workflows and processes. This will help to improve care coordination and health outcomes for patients, members, and clients.

This guide also supports FHIR-enabled consumer (mobile) applications used by individuals/clients seeking to locate appropriate community-based services offered in a specified coverage area to search CBO-directories.

**Figure 2** emphasises the scope, including mapping & transformation and read-only (GET) purpose for the APIs, where a community-based organization database is accessed by FHIR-enabled provider, payer, and consumer applications (EHR systems, payor systems, consumer mobile applications). STU 1 does not support PUT or POST, but may do so in a future iteration of this implementation guide.

<img style="width:75%;height:auto;float:none;align:middle;" src="HSD FHIR Implementation Scope.svg"/>

*Figure 2: Scope: Provide Maps between HSDS and FHIR Profiles for Read Only Capabilities*

**Out of Scope for this Release:**

-	Assessing eligibility for services is currently out of scope, though may be added to a future release.

-	This IG only addresses only instances in which a single source of resource directory information is made available for query by FHIR-enabled clients; a query of federated resource directory information sources is out of scope.

-	This IG does not address user-submitted feedback about the quality of resource directory information (accuracy, clarity, etc.), nor does it specify mechanisms for gathering feedback from users about the quality of services themselves.

- STU 1 does not specify a standards-based taxonomy for the purpose of classifying and searching the directories.

-	Write-enabled ‘bi-directional’ functionality may be specified in future versions.

-	Individual Providers are not represented in human services directories. The HSDS model (version 2.0.1) does not contain information about individual (human) providers in human services directories. The HSDS model contains contact information about organizations and the services they provide at various locations. Because the primary purpose for this version of the IG is to provide a mapping between the HSDS v.2.0.1 and elements contained within these FHIR profiles, following trial implementations, if additional requirements are requested by implementers to include individual provider information in future iterations of this implementation guide, those requirements can be submitted to this guide via the [Jira process](https://jira.hl7.org/projects/FHIR/summary) for future consideration. If a need to add individual providers to human services directories is identified, this requirement should be submitted to [OpenReferral](https://openreferral.org/) in the context of the structure/content of HSDS. If added to HSDS, additional profiles (e.g., Practitioner, PractitionerRole) will be required to include individual practitioners, mapping between HSDS and FHIR will need to be updated, and the implementation guide will require a subsequent ballot and a future release (STU) of the IG as well. 

#### Use Case Support

Example use cases supported by this guide include:

- Healthcare providers searching for services/resources that may help address clients’ unmet social needs to initiate social care referrals, 

- Consumers seeking information on available services provided by local community-based organizations, and

- Healthcare payers offering care management programs and care coordination seeking community services to help improve their member's health outcomes and quality of life.

STU 1 of the implementation guide supports read-only queries of a single human services directory by FHIR-enabled applications as depicted in the Consuming Applications swimlane in Figure 4 below.

**Figure 3** illustrates the workflow and read-only scope in support for use cases in STU 1

<img style="width:70%;height:auto;float:none;align:center;" src="Workflow Analysis.svg"/>

*Figure 3: Workflow Analysis Suporting Use Cases -- STU 1: Human Services Discovery*

These read-only queries support a wide range of users and use cases within the context of service discovery to a human services directory using FHIR-enabled applications in accordance with relevant criteria/search parameters (e.g., organization, program, geography, accessibility, hours of operation, etc.).

#### Testing and Future Efforts

This guide was tested during its development under two reference implementations (RI) using two standards-based human services taxonomies. One RI tested the IG using a [211 LA](https://211la.org/ )-based directory; the other RI used a directory based the open-source [Open Eligibility](https://auntbertha.atlassian.net/servicedesk/customer/portals) taxonomy. In recognition that neither taxonomy is being universally implemented by the diverse social care community, and the fact that each code system has challenges related to its consistent use, specifically the proprietary nature of 211 LA as a barrier to broader adoption, implementers of this IG (STU1) are free to use any taxonomy (standards-based or local, home-grown codes) as deemed useful within the human services directory.

Efforts are underway within the human services domain and by the [Gravity Project](https://thegravityproject.net/) to address the multiple coding challenges across human and social services Information & Retrieval (I&R), screening, interventions, billing, and reporting. This work is likely to produce suitable acceptable [code systems](http://hl7.org/fhir/R4/codesystem.html) and associated [value sets](https://hl7.org/fhir/R4/valueset.html) for use in key elements of profiles in this implementation guide in the future.

Since this project was initiated in May 2022, the HSDS specification has undergone revision, incorporating results from the mapping analysis conducted in preparation for this IG. HSDS v.3.0 was published in May 2023; the changelog is available [here](https://docs.openreferral.org/en/latest/hsds/changelog.html#v3-0). Previous versions of the HSDS format are supported now, but the use of v.2.0.1 is not encouraged by OpenReferral. This project will update the mapping and profiles based on HSDS 3.0 in the next balloted version of this Implementation Guide.



### Relationship to US Core, National Directory, and SDOH Clinical Care FHIR Implementation Guides

The [CMS Interoperability and Patient Access Rule (CMS-9115-F)](https://www.cms.gov/about-cms/obrhi/interoperability/policies-and-regulations/cms-interoperability-and-patient-access-final-rule-cms-9115-f) specifies the [FHIR technical standards and implementation guides](https://www.cms.gov/files/document/recommended-igs-api-and-proposed-api.pdf) that support development and testing of FHIR APIs to foster interoperability. CMS has identified technical standards for Provider Directories and recommended the [DaVinci PDEX Plan Net Provider Directory Implementation Guide STU v.1.1.0](http://hl7.org/fhir/us/davinci-pdex-plan-net/).

As healthcare providers and payers seek to incorporate social determinants of health screening assessments and referrals to social care agencies into their care management processes, aligning with the PDEX Provider Directory is intended to minimize the burden for healthcare providers and payers that have implemented (or intend to implement PDEX), to incorporate human services directories into the care management workflows in their systems.

Corresponding profiles included in other related FHIR implementation guides were reviewed and considered during the development process to ensure alignment and to facilitate adoption of this standard as well. These implementation guides include the [Validated Healthcare Directory Implementation Guide](http://build.fhir.org/ig/HL7/VhDir/) (VHDir IG), versions of the National Healthcare Directory Exchange: [Sept 2022 release](http://hl7.org/fhir/us/directory-exchange/2022Sep/) and its [current build](http://build.fhir.org/ig/HL7/fhir-directory-exchange/), and implementation guides produced by the [Gravity Project](https://thegravityproject.net/) (e.g., the [Social Determinants of Health (SDOH) Clinical Care Implementation Guide](http://hl7.org/fhir/us/sdoh-clinicalcare/)).

This implementation guide is meant to work in conjunction with the other IGs referenced in Figure 4 below.

The National Directory IG, developed under the FAST Accelerator program provides guidance for establishing a verified provider directory using the attestation and validation processes, syncing with other distributed directories that subscribe to the verified directory and end user application that query that distributed directory for providers. The National Directory effort focuses on healthcare providers as well as social care providers. The Human Services Directory IG *aligns with* the National Directory specification and augments it by providing additional guidance and mapping to profiles specific to implementers that manage their social care directory data in a standardized HSDS format, or who can map existing directory data to that format. This IG supports the ability for implementers to adopt FHIR APIs that can be used to access a standalone social care directory or to sync their directory content between a centralized directory that has been implemented based on the National Directory IG.

Although this IG and the SDOH Clinical Care are derived from the US Core IG where applicable, there is no direct relationship between these two implementation guides as they apply to different steps in a typical social care workflow. 
The SDOH IG is a standard for the exchange of client level data when a client/patient is assessed for their social care needs and the services that may address them. The Human Services Directory IG may be used to search one or more directories to find social care service providers that might fulfill a referral. Once relevant social care service providers are discovered and selected, the SDOH Clinical Care IG may be used in the subsequent workflow steps (e.g., to create a ServiceRequest used to submit a referral to selected social care providers). Once there is better clarity on the terminology/taxonomy to be used for social care services, the SDOH IG and this IG will need to be aligned with guidance to facilitate more a seamless implementation of these IGs in a common social care workflow.

**Figure 4** describes the relationship between FHIR Human Services Directory IG and other related FHIR Implementation Guides

<img style="width:80%;height:auto;float:none;align:middle;" src="HSD IG Relationship to Core and Other IGs.svg"/>

*Figure 4: Relationship to US Core and other FHIR Implementation Guides*

### Alignment with PDEX and related FHIR IGs

The FHIR Human Services and Resource Directory FHIR IG has been aligned with the PDEX Plan Net Provider Directory IG (and US Core by inheritance), rather than being *derived* directl from each of the profiles to create the new FHIR-based APIs that provide access to human and social service directories. This was done due to FHIR inheritance rules that govern profile development. Inheritance is a key concept at the core of profiling. Profiling extends and constrains existing FHIR Resources and Data Types to meet project requirements. New profiles can inherit properties and behaviors from their base resource types and/or other profiles to define additional properties and behaviors that are specific to the new profile. Using inheritance allows for interoperability between systems and applications that use FHIR to exchange data to ensure consistency, reduce duplication, and to make development more efficient.

To create the new HSD profiles (HSDHealthcareService, HSDOrganization, and HSDLocation), constraints in the [PlannetHealthcareService](http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition-plannet-HealthcareService.html), [PlannetOrganization](http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition-plannet-Organization.html), and [PlannetLocation](http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition-plannet-Location.html) were copied into the new profiles, and modifications to those constraints were applied to elements based on the HSDS model and mapping requirements to avoid the requirment to inherit the extensibe bindings to value sets applied to the PlanNetHealthcareService.category & type elements, to relax the required cardinality specified in the PlannetOrganization profile and align with the optional cardinality specified in [US Core Organization](http://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-organization.html) and the base R4 [Organization resource](http://hl7.org/fhir/R4/organization.html) (0..*), and to permit the HSDLocation profile to [reference](https://hl7.org/fhir/R4/references.html) the HSDOrganization profile instead of [PlannetLocation](http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition-plannet-Location.html). 

FHIR US Core Release 3.1.1 addresses data included in the United States Core Data for Interoperability (USCDI), version 1, and is designated by the HL7 US Realm Steering Committee as the “base specification” for any US-realm FHIR API that references the US Core profiles that are considered the foundation for US Realm FHIR implementation guides.

PDEX Plan-Net reuses two [US Core profiles](http://hl7.org/fhir/us/core/STU3.1.1/index.html#us-core-profiles) relevant to this implementation guide: ([us-core-organization](http://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-organization.html) and [us-core-location](http://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-location.html)). Because US Core does not include a HealthcareService profile (even in the latest [published version](http://hl7.org/fhir/us/core/)), Plan-Net developed its PlannetHealthcareService profile using the base FHIR R4 [HealthcareService](http://hl7.org/fhir/R4/healthcareservice.html) *Resource* and applied new constraints (e.g., active flag is required (1..1), and Must Support (MS) to various elements). The HealthcareService profile included in the Human Services directory is based on the R4 FHIR HealthcareService resource similar to the Plannet IG. 

The extensions included in this implementation guide are either derived from the Plannet IG, or have been created in alignment with Plannet extensions in order to modify value set bindings. In addition, some of the Plannet extensions defined as [Must Support](https://hl7.org/fhir/R4/profiling.html#mustsupport) but which are optional based on their cardinality (0..*) have been excluded from the IG given the lack of source data in the HSDS model. (see the Differential table in the Formal Views of Profile Content section for each [profile](http://hl7.org/fhir/us/davinci-pdex-plan-net/artifacts.html#3))

The extensions included in this IG include:

- [Accessibility](http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition-accessibility.html) used in the HSDLocation profile, 
- [LocationBoundaryGeojson](http://hl7.org/fhir/StructureDefinition/location-boundary-geojson) used in the HSDLocation profile,
- [OrgDescription](http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition-org-description.html) used in the HSDOrganization profile

Both of these extensions were directly derived from Plannet (as opposed to *aligned with*). 

In addition, two new extensions were created that are specific to the Human Services IG. 

The first was modeled on a corresponding Plannet extension to allow example binding to the [Non-Individual Specialties](http://hl7.org/fhir/us/hsds/ValueSet/NonIndividualSpecialties) value set. This was done in order to exclude the [Individual and Group Specialties](http://hl7.org/fhir/us/davinci-pdex-plan-net/ValueSet/IndividualAndGroupSpecialtiesVS) codes from the qualification value set since those codes are likely not applicable to qualifications associated with community-based organizations:
 
- [Qualification](http://hl7.org/fhir/us/hsds/StructureDefinition/qualification)

The second, is a new one: 

- [ContactDepartment](http://hl7.org/fhir/us/hsds/StructureDefinition/contact-department) created to support additional contact information described in the HSDS model for Organizations that is not included in the Plannet IG. The ContactDepartment extension describes the department in which the named contact person for an organization works.

The following extensions have been omitted from the new Human Services Directory profiles that were aligned with Plannet due to a lack of source data in the HSDS model:

- [NewPatients](http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition-newpatients.html), 
- [DeliveryMethod](http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition-delivery-method.html),
- [ContactPointAvailableTime](http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition-contactpoint-availabletime.html), and
- [ViaIntermediary](http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition-via-intermediary.html)

Additional SearchParameters were added to the new Human Services Directory profiles to ensure that the Human Services Directory are conformant with the Human Services Data Specification (HSDS). *to be elaborated once the SearchParameters section has been updated prior to publication*

This alignment approach is used to facilitate the adoption of these new Human Services Directory profiles by implementers who have implemented the US Core, Plan-Net, and FAST National Directory implementation guides. Because the Plan-Net Provider and National Directory IGs are based conceptually on the [Validated Healthcare Directory Implementation Guide (VHDir IG)](http://build.fhir.org/ig/HL7/VhDir/), the VHDir guide was also included in the analysis for this project.

### Credits
This IG was developed by FEI Systems using [FHIR Shorthand (FSH)](https://build.fhir.org/ig/HL7/fhir-shorthand/) and the [SUSHI toolkit](https://fshschool.org/docs/sushi/) (an acronym for "SUSHI Unshortens SHorthand Inputs"), a free, open source toolchain from the MITRE Corporation. 

The project team would like to thank leadership and colleagues for their support in the development of this Implementation Guide.

|**Name**			      |**Organization**									                                	|
|Serafina Versaggi	|BookZurman, Inc./FEI Systems (https://www.bookzurman.com/)		      |
|Sean Muir			    |BookZurman, Inc./FEI Systems (https://www.bookzurman.com/)		      |
|Chirag Bhatt		    |FEI Systems (https://feisystems.com/)			                  			|

Generous assistance in testing this Implementation Guide was provided by the Departments of Health and Human Services Administration for Commuity Living (ACL) and the Administration for Children and Families (ACF) as well as other organizations and individuals. Capability statements were rendered with tools [tools](https://github.com/caspears/CapStatement) developed by Eric Haas and modified by Corey Spears. Our thanks to these contributors and to the many others not explicitly listed who contributed their time and expertise to this work:

|**Name**			      |**Organization**										|
|Aadli Abdul-Kareem |Electronic Health Network, Inc. (www.https://www.ehnusa.com/)	    |
|Courtney Baldridge	|USAging & Co-Chair, HL7 HSS Work Group					                 	  |
|Jessica Banks		  |Goldbelt (https://www.goldbelt.com/)				                   	  	|
|Hector Beltran		  |Niche Aim Technologies (www.https://www.https://nicheaim.com/)     |
|Matt Bishop		    |Open City Labs (https://www.opencitylabs.com/wordpress/)		      	|
|Greg Bloom			    |Open Referral (https://docs.openreferral.org/)				            	|
|Chirag Bhatt   |FEI Systems (https://feisystems.com/)						                      |
|Irene Boakye		|FEI Systems (https://feisystems.com/)						                      |
|Llew Brown			|Zane Networks (https://www.zanenetworks.com/)				                	|
|Gordon Campbell		|FEI Systems (https://feisystems.com/)			                  			|
|Kelly Cronin		|Administration for Community Living (https://acl.gov/)			            |
|Gargi Gajjar 		|MDIX, Inc. (https://www.mdixinc.com/)					                    	|
|Evelyn Gallegos		|EMI Advisors, Inc. (https://www.emiadvisors.net/)			          	|
|Teresa Gerard		|Guardian Group, LLC, National Nested Networks					              |
|Gabriela Gonzalez	|EMI Advisors, Inc. (https://www.emiadvisors.net/)			          	|
|Brian Handspicker	|Open City Labs (https://www.opencitylabs.com/wordpress/)	      		|
|Rob Hausam, MD		|Hausam Consulting LLC									                              |
|Demri Toop Henderson 	|EMI Advisors, Inc. (https://www.emiadvisors.net/)				      |
|HL7 HSS WG Members	|HL7 Human and Social Services Work Group (hsswg@lists.hl7.org)  		|
|Sheljina Ibrahim		|Elevance Health (https://www.elevancehealth.com/)			          	|
|Mohammad Jafari		|Co-Chair, HL7 HSS Work Group						      	                    |
|Saul Kravitz		|MITRE Corporation (https://www.mitre.org/)				                    	|
|Bob Kreha			|Brightstreet Group (www.brightstreetgroup.com/)		                		|
|Juan Llera			|Niche Aim Technologies (www.https://www.https://nicheaim.com/)	      	|
|Ken Lord			|MDIX, Inc. (https://www.mdixinc.com/)						                        |
|Joseph Lugo		|Administration for Community Living (https://acl.gov/)			            |
|Shailaja Madla		|Elevance Health (https://www.elevancehealth.com/)				            |
|Robert McClure, MD	|MD Partners, Inc. 									                                |
|Llyod McKenzie		|LM&A Consulting									                                  	|
|Oscar Mendoza		|Niche Aim Technologies (www.https://www.https://nicheaim.com/)		    |
|Sean Muir        |BookZurman, Inc. (https://www.bookzurman.com/)                       |
|Ami Patel			|Administration for Community Living (https://acl.gov/)			            |
|Sal Rana			|Goldbelt (https://www.goldbelt.com/)						                          |
|David Raznick		|Open Data Services/Open Referral (https://opendataservices.coop/)	  |
|Pete Richardson		|Brightstreet Group (www.brightstreetgroup.com/)			            	|
|Himali Saitwal 		|EMI Advisors, Inc. (https://www.emiadvisors.net/)			          	|
|Ken Salyards		|Administration for Children and Families (https://www.acf.hhs.gov/)  	|
|Christopher Shawn	|Co-Chair, HL7 HSS Work Group						                           	|
|Ioana Singureanu		|U.S. Department Veterans Affairs					                         	|
|Corey Spears		|Lantana Consulting Group (https://www.lantanagroup.com/)		          	|
|Gilbert Thompson		|Administration for Community Living (https://acl.gov/)		        	|
|Samia Warsame		|Zane Networks (https://www.zanenetworks.com/)					              |
|Michelle Zancan		|Goldbelt (https://www.goldbelt.com/)						                    |

#### Cross Version Analysis
{% include cross-version-analysis.xhtml %}
#### Dependency Table
{% include dependency-table.xhtml %}
#### Globals Table
{% include globals-table.xhtml %}
#### IP Statements
{% include ip-statements.xhtml %}
  •	  The Human Services Data Specification (HSDS), by Open Referral, led by Greg Bloom, is licensed under a [Creative Common Attribution-ShareAlike 4.0 International (CC BY SA 4.0) License.](https://creativecommons.org/licenses/by-sa/4.0/)



---

// File: input/pagecontent/examples.md

The following examples are published with this guide and are available as a downloadable as zip file [here](examples.json.zip). They are example instances that demonstrate what the data produced and consumed by systems that conform with this implementation guide might look like.

### [Human Services Directory Organizations](StructureDefinition-hsds-Organization.html)  
* [`Example of Food Bank Organization`](Organization-FoodBank.html)
* [`Example of Transportation Service Organization`](Organization-WhistlestopWheels.html)
* [`Example of Crisis Intervention Service Organization`](Organization-SFCrisisAndDomesticHotline.html)

### [Human Services Directory Locations](StructureDefinition-hsds-Location.html)
* [`Example of Food Bank Location`](Location-FoodBankLocation.html)
* [`Example of Home Delivered Meals Location`](Location-MealsOnWheelsLocation.html)
* [`Example of Transportation Services Location`](Location-WhistlestopwheelsLocation.html)
* [`Example of Crisis Intervention Service Location`](Location-SF9114AllLocation.html)

### [Human Services Directory HealthcareServices Resources](StructureDefinition-hsds-HealthcareService.html)
* [`Example of Food Pantry Service`](HealthcareService-FoodPantryService.html)
* [`Example of Meals Home Delivered Service`](HealthcareService-MealsOnWheels.html)
* [`Example of Transportation Service`](HealthcareService-WhistlestopTransportationService.html)
* [`Example of Crisis Intervention Service`](HealthcareService-SFCrisisAndDomesticHotlineServices.html)

---

// File: input/fsh/Code Systems.fsh

// Example Human Service Directory Program code system describing the types of progams under which community-based social services can be delivered

CodeSystem: HumanServiceProgramCS
Id: HumanServiceProgramCS
Title: "Human Service Program"
Description: "This example code system provides an example set of codes that describe Programs under which community-based organizations can organize the social services they deliver."
* ^status = #active
* ^version = "1.0.0"
* ^caseSensitive = false
* ^experimental = false
* ^content = #fragment
* ^purpose = "The purpose of this code system is to provide a starter set of Program names under which community-based organizations can organize the social services resources that they deliver for use in searching for services by Program."
* ^publisher = "HL7 Human and Social Services Work Group"
* ^url = "http://hl7.org/fhir/us/hsds/CodeSystem/HumanServiceProgramCS"
* #CSFP	"The Commodity Supplemental Food Program" "Program that provides food assistance for low-income seniors with a monthly package of healthy USDA commodities."
* #ForDisabled "Programs for Persons with Disabilities" "Public programs to supplement lost income due to physical or mental impairment that prevents a person from working. Examples include: Supplemental Security Income (SSI) and Social Security Disability Insurance (SSDI)"
* #FoodAssistance "Food Assistance Program" "Programs that aid people experiencing hunger. For example, public and privately funded Food Banks/Food Pantries, Mobile Food Outreach Programs, Child Nutrition and Food Disttribution Program, Farmers to Families, School Breakfast Program."
* #ForSeniors "Program for Seniors" "Programs that provide financial help, community based services that allow seniors to remain at home,  home-delivered meals, home heating, etc.Examples of  Federal programs that support aging include Section 8 Housing, Home Energy Assistance Program (HEAP), Medicare & Medicaid,the Commodity Supplemental Food Program(CSFP)."
* #Homelessness	"Homelessness Prevention Programs" "Programs providing financial and support services that help keep people in their current housing, help them to move into new housing, and to prevent people from experiencing homelessness."
* #ONHPP "Nutrition and Health Promotion Programs" "Office of Nutrition and Health Promotion Programs (ONHPP) manages health, prevention, and wellness programs for older adults. This includes behavorial health information, chronic disease self-management education programs; diabetes self-management, disease prevention and health promotion services (“Title IIID”), falls prevention programs; HIV/AIDS education, nutrition services, and oral health promotion."
* #SNAP	"Suplemental Nutrition Assistance Program" "SNAP stands for Supplemental Nutrition Assistance Program, also known as the Food Stamp Program. SNAP is a government program that provides a sliding scale of income designated for food to low-wage working families, low-income seniors, people with disabilities, and other individuals with low incomes."
* #TANF	"Temporary Assistance for Needy Families" "The Temporary Assistance for Needy Families (TANF) program provides states and territories with flexibility in operating programs designed to help low-income families with children achieve economic self-sufficiency.  States use TANF to fund monthly cash assistance payments to low-income families with children, as well as a wide range of services."
* #TEFAP "The Emergency Food Assistance Program" "Program that provides nutritious foods and nutrition education for low-income, at risk women, infants."
* #WIC	"Women, Infants, & Children" "Program that provides nutritious foods and nutrition education for low-income, at risk women, infants."

// Example Human Service Characteristic code system describing the unique features associated with community-based social services

CodeSystem: HumanServiceCharacteristicCS
Id: HumanServiceCharacteristicCS
Title: "Human Service Characteristic"
Description: "This example code system provides an example set of codes that describe unique features that can be associated with community-based social services delivered at particular locations."
* ^status = #active
* ^version = "1.0.0"
* ^caseSensitive = false
* ^experimental = false
* ^content = #fragment
* ^purpose = "The purpose of this code system is to provide a starter set of features associated with community-based social services delivered at particular locations for use in searching for services."
* ^publisher = "HL7 Human and Social Services Work Group"
* ^url = "http://hl7.org/fhir/us/hsds/CodeSystem/HumanServiceCharacteristicCS"
* #Wheelchair "Wheelchair Access" "A method by which someone can enter or leave a place in a wheelchair"
* #Interpret "Interpretation Services" "Interpreting services function as a verbal form of translation that is facilitated by a professional interpreter, or a team of interpreters. Interpretation services are used to translate spoken languages into the native or preferred language of a given client."
* #Computer	"Computer & Internet Access" "Computers available for use. Internet access is available providing connectivity to the internet using personal computers, laptops or mobile devices."
* #Baby	"Diapers & Formula" "Diapers and infant formula are provided."

---

// File: input/fsh/DEF_Cap_HumanServicesDirectories.fsh

Instance: HumanServicesDirectory
InstanceOf: CapabilityStatement
Usage: #definition
Title: "Human Services Directory Capability Statement"
Description: "Describes the expected capabilities of the Human Services Directory Server actor responsible for providing responses to the queries submitted by the Human Services Directory Requestors. The complete list of FHIR profiles, RESTful operations, and search parameters supported by Human Services Directory Servers are defined. Systems implementing this capability statement should meet the CMS FInal Rule requirement for provider directory access. Human Services Directory Clients can use the required capabilities to access necessary data based on their local use cases and other contextual requirements."
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/hsswg/index.cfm"
* status = #draft
* date = "2023-08-05"
* description = "Describes the expected capabilities of the Human Services Directory Server actor responsible for providing responses to the queries submitted by the Human Services Directory Requestors. The complete list of FHIR profiles, RESTful operations, and search parameters supported by Human Services Directory (HSD) Servers are defined."
* experimental = false
* fhirVersion = #4.0.1
* format[0] = #xml
* format[1] = #json
* implementationGuide = "http://hl7.org/fhir/us/hsds/ImplementationGuide/hl7.fhir.us.hsds"
* jurisdiction = urn:iso:std:iso:3166#US
* kind = #requirements
* name = "HumanServicesDirectoryCapabilityStatement"
* patchFormat = #application/json-patch+json
* publisher = "HL7 Human and Social Services Working Group (HSS WG)"
* rest.documentation = "The Human Services Directory Server **SHALL**:\n\n1. Support all profiles defined in this Implementation Guide..\n1.  Implement the RESTful behavior according to the FHIR specification.\n1. Return the following response classes:\n   - (Status 400): invalid parameter\n   - (Status 401/4xx): unauthorized request\n   - (Status 403): insufficient scope\n   - (Status 404): unknown resource\n   - (Status 410): deleted resource.\n1. Support json source formats for all HSDinteractions.\n1. Identify the HSDprofiles supported as part of the FHIR `meta.profile` attribute for each instance.\n1. Support the searchParameters on each profile  individually and in combination.\n1.Support forward and reverse chaining on all search parameters that specify the 'chain' property\n\nThe HSD Server **SHOULD**:\n\n1. Support xml source formats for all Human Services Directory interactions.\n"
* rest.mode = #server
* rest.resource[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">     <h2 id=\"title\"> Human Services Directory CapabilityStatement</h2>     <ul>         <li><b>Official                 URL:</b><code>http://hl7.org/fhir/us/hsds/CapabilityStatement/HumanServicesDirectory</code></li>         <li><b>Implementation Guide Version:</b> 1.0.0</li>         <li><b>FHIR Version:</b> 4.0.1</li>         <li><b>Intended Use:</b> Requirements</li>         <li><b>Supported Formats:</b> XML, JSON</li>         <li><b>Published:</b> 2023-08-16</li>         <li><b>Published by:</b> HL7 Human and Social Services Working Group (HSSWG)</li>         <li><b>Status:</b> Draft</li>     </ul>     <p>This section describes the expected capabilities of the Human Services Directory Server actor         responsible for providing responses to the queries submitted by the Human Services Directory         Requestors. The complete list of FHIR profiles, RESTful operations, and search parameters         supported by Human Services Directory Servers are defined.</p>     <h3 class=\"no_toc\" id=\"resource--details\">RESTful Capabilities by Resource/Profile:</h3>     <p><strong>Summary of Search Criteria</strong></p>     <table class=\"grid\">         <thead>             <tr>                 <th>Resource Type</th>                 <th>Supported Profiles</th>                 <th>Supported Searches</th>                 <th>Supported <code>_includes</code></th>                 <th>Supported <code>_revincludes</code></th>                 <th>Supported Operations</th>             </tr>         </thead>         <tbody>             <tr>                 <td><a href=\"#organization\">Organization</a></td>                 <td><a href=\"StructureDefinition-hsds-Organization.html\">HSD Organization</a></td>                 <td> address-city, address-postalcode, address-state, address-country, name, type,                     identifier, _id, _lastUpdated </td>                 <td> </td>                 <td> HealthcareService:organization, Location:organization </td>                 <td> </td>             </tr>             <tr>                 <td><a href=\"#location\">Location</a></td>                 <td><a href=\"StructureDefinition-hsds-Location.html\">HSD Location</a></td>                 <td> accessibility, address-city, address-postalcode, address-state,                     address-country, name, organization, hoursofoperation, _id, _lastUpdated </td>                 <td> Location:organization </td>                 <td> HealthcareService:location </td>                 <td> </td>             </tr>             <tr>                 <td><a href=\"#healthcareservice\">HealthcareService</a></td>                 <td><a href=\"StructureDefinition-hsds-HealthcareService.html\"> HSD                         HealthcareService</a></td>                 <td> communication, location, name, organization, program, service-category,                     service-type, active, _id, _lastUpdated </td>                 <td> HealthcareService:location, HealthcareService:organization </td>                 <td/>                 <td/>             </tr>         </tbody>     </table>     <hr/>     <h4 class=\"no_toc\" id=\"organization\">Organization</h4>     <p>Conformance Expectation: <strong>SHALL</strong></p>     <p><a href=\"StructureDefinition-hsds-Organization.html\">HSD Organization</a>     </p>     <p>Reference Policy: <code>resolves</code></p>     <p>Profile Interaction Summary:</p>     <ul>         <li><strong>SHALL</strong> support <code>search-type</code>, <code>read</code>.</li>         <li><strong>SHOULD</strong> support <code>vread</code>.</li>     </ul>     <p>Fetch and Search Criteria:</p>     <ul>         <li> A Server <strong>SHALL</strong> be capable of returning a Organization resource using: <br/>             <code class=\"highlighter-rouge\">GET [base]/Organization/[id]</code>         </li>         <li> A Server <strong>SHOULD</strong> be capable of returning a Organization resource using: <br/>             <code class=\"highlighter-rouge\">GET [base]/Organization/[id]/_history/vid</code>         </li>         <!-- Only SHALL for include for now the capability statement does not create the primitive 				     extensios for this yet.  -->         <li> A Server <strong>SHALL</strong> be capable of supporting the following _includes: <br/>             N/A <br/>         </li>         <!-- Only SHALLs for revinclude for now the capability statement does not create the primitive extensios for this yet -->         <li> A Server <strong>SHALL</strong> be capable of supporting the following _revincludes:             <br/> HealthcareService:organization - <code class=\"highlighter-rouge\">GET                 [base]/Organization?[parameter=value]&amp;_revinclude=HealthcareService:organization</code><br/>             Location:organization - <code class=\"highlighter-rouge\">GET                 [base]/Organization?[parameter=value]&amp;_revinclude=Location:organization</code><br/>         </li>     </ul>     <p>Search Parameter Summary:</p>     <table class=\"grid\">         <thead>             <tr>                 <th>Conformance</th>                 <th>Parameter</th>                 <th>Type</th>                 <th>Example</th>             </tr>         </thead>         <tbody>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-organization-name.html\">name</a></td>                 <td> string </td>                 <td><code class=\"highlighter-rouge\">GET [base]/Organization?name=[name]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-organization-type.html\">type</a></td>                 <td> token </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/Organization?type=[system]|[code]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-organization-address-city.html\">address-city</a></td>                 <td> string </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/Organization?address-city=[address-city]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-organization-identifier.html\">identifier</a></td>                 <td> string </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/Organization?identifier=[identifier]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-organization-address-postalcode.html\"                         >address-postalcode</a></td>                 <td> string </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/Organization?address-postalcode=[address-postalcode]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-organization-address-state.html\">address-state</a></td>                 <td> string </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/Organization?address-state=[address-state]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-organization-address-country.html\"                     >address-country</a></td>                 <td> string </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/Organization?address-country=[address-country]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"http://hl7.org/fhir/R4/search.html\">_id</a></td>                 <td> token </td>                 <td><code class=\"highlighter-rouge\">GET [base]/Organization?_id=[id]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"http://hl7.org/fhir/R4/search.html\">_lastUpdated</a></td>                 <td> date </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/Organization?_lastUpdated=[_lastUpdated]</code></td>             </tr>         </tbody>     </table>     <hr/>     <h4 class=\"no_toc\" id=\"location\">Location</h4>     <p>Conformance Expectation: <strong>SHALL</strong></p>     <p>Supported Profiles: <a href=\"StructureDefinition-hsds-Location.html\">HSD Location</a>     </p>     <p>Reference Policy: <code>resolves</code></p>     <p>Profile Interaction Summary:</p>     <ul>         <li><strong>SHALL</strong> support <code>search-type</code>, <code>read</code>.</li>         <li><strong>SHOULD</strong> support <code>vread</code>.</li>     </ul>     <p>Fetch and Search Criteria:</p>     <ul>         <li> A Server <strong>SHALL</strong> be capable of returning a Location resource using: <br/>             <code class=\"highlighter-rouge\">GET [base]/Location/[id]</code>         </li>         <li> A Server <strong>SHOULD</strong> be capable of returning a Location resource using: <br/>             <code class=\"highlighter-rouge\">GET [base]/Location/[id]/_history/vid</code>         </li>         <!-- Only SHALL for include for now the capability statement does not create the primitive 				     extensios for this yet.  -->         <li> A Server <strong>SHALL</strong> be capable of supporting the following _includes: <br/>             Location:organization - <code class=\"highlighter-rouge\">GET                 [base]/Location?[parameter=value]&amp;_include=Location:organization</code><br/>         </li>         <!-- Only SHALLs for revinclude for now the capability statement does not create the primitive extensios for this yet -->         <li> A Server <strong>SHALL</strong> be capable of supporting the following _revincludes:             <br/> HealthcareService:location - <code class=\"highlighter-rouge\">GET                 [base]/Location?[parameter=value]&amp;_revinclude=HealthcareService:location</code><br/>         </li>     </ul>     <p>Search Parameter Summary:</p>     <table class=\"grid\">         <thead>             <tr>                 <th>Conformance</th>                 <th>Parameter</th>                 <th>Type</th>                 <th>Example</th>             </tr>         </thead>         <tbody>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-location-name.html\">name</a></td>                 <td> reference </td>                 <td><code class=\"highlighter-rouge\">GET [base]/Location?name=[name]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-location-organization.html\">organization</a></td>                 <td> reference </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/Location?organization=[organization]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-location-hoursofoperation.html\"                     >hoursofoperation</a></td>                 <td> reference </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/Location?hoursofoperation=[hoursofoperation]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-location-accessibility.html\">accessibility</a></td>                 <td> reference </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/Location?accessibility=[accessibility]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-location-address-city.html\">address-city</a></td>                 <td> string </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/Location?address-city=[address-city]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-location-address-state.html\">address-state</a></td>                 <td> string </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/Location?address-state=[address-state]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-location-address-postalcode.html\"                         >address-postalcode</a></td>                 <td> string </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/Location?address-postalcode=[address-postalcode]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-location-address-country.html\">address-country</a></td>                 <td> string </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/Location?address-country=[address-country]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"http://hl7.org/fhir/R4/search.html\">_id</a></td>                 <td> token </td>                 <td><code class=\"highlighter-rouge\">GET [base]/Location?_id=[id]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"http://hl7.org/fhir/R4/search.html\">_lastUpdated</a></td>                 <td> date </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/Location?_lastUpdated=[_lastUpdated]</code></td>             </tr>         </tbody>     </table>     <hr/>     <h4 class=\"no_toc\" id=\"healthcareservice\">HealthcareService</h4>     <p>Conformance Expectation: <strong>SHALL</strong></p>     <p>Supported Profiles: <a href=\"StructureDefinition-hsds-HealthcareService.html\">HSD             HealthcareService</a>     </p>     <p>Reference Policy: <code>resolves</code></p>     <p>Profile Interaction Summary:</p>     <ul>         <li><strong>SHALL</strong> support <code>search-type</code>, <code>read</code>.</li>         <li><strong>SHOULD</strong> support <code>vread</code>.</li>     </ul>     <p>Fetch and Search Criteria:</p>     <ul>         <li> A Server <strong>SHALL</strong> be capable of returning a HealthcareService resource             using: <br/>             <code class=\"highlighter-rouge\">GET [base]/HealthcareService/[id]</code>         </li>         <li> A Server <strong>SHOULD</strong> be capable of returning a HealthcareService resource             using: <br/>             <code class=\"highlighter-rouge\">GET [base]/HealthcareService/[id]/_history/vid</code>         </li>         <li> A Server <strong>SHALL</strong> be capable of supporting the following _includes: <br/>             HealthcareService:location - <code class=\"highlighter-rouge\">GET                 [base]/HealthcareService?[parameter=value]&amp;_include=HealthcareService:location</code><br/>             HealthcareService:organization - <code class=\"highlighter-rouge\">GET                 [base]/HealthcareService?[parameter=value]&amp;_include=HealthcareService:organization</code><br/>         </li>         <!-- Only SHALLs for revinclude for now the capability statement does not create the primitive extensios for this yet -->         <li> A Server <strong>SHALL</strong> be capable of supporting the following _revincludes:             <br/> N/A <br/>         </li>     </ul>     <p>Search Parameter Summary:</p>     <table class=\"grid\">         <thead>             <tr>                 <th>Conformance</th>                 <th>Parameter</th>                 <th>Type</th>                 <th>Example</th>             </tr>         </thead>         <tbody>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-healthcareservice-name.html\">name</a></td>                 <td> reference </td>                 <td><code class=\"highlighter-rouge\">GET                     [base]/HealthcareService?name=[name]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-healthcareservice-organization.html\"                     >organization</a></td>                 <td> reference </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/HealthcareService?organization=[organization]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-healthcareservice-location.html\">location</a></td>                 <td> reference </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/HealthcareService?location=[location]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-healthcareservice-program.html\">program</a></td>                 <td> string </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/HealthcareService?program=[program]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-healthcareservice-communication.html\"                     >communication</a></td>                 <td> token </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/HealthcareService?communication=[system]|[code]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-healthcareservice-service-category.html\"                         >service-category</a></td>                 <td> token </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/HealthcareService?service-category=[system]|[code]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-healthcareservice-service-type.html\"                     >service-type</a></td>                 <td> token </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/HealthcareService?service-type=[system]|[code]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"SearchParameter-healthcareservice-active.html\">active</a></td>                 <td> string </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/HealthcareService?active=[active]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"http://hl7.org/fhir/R4/search.html\">_id</a></td>                 <td> token </td>                 <td><code class=\"highlighter-rouge\">GET                     [base]/HealthcareService?_id=[id]</code></td>             </tr>             <tr>                 <td><strong>SHALL</strong></td>                 <td><a href=\"http://hl7.org/fhir/R4/search.html\">_lastUpdated</a></td>                 <td> date </td>                 <td><code class=\"highlighter-rouge\">GET                         [base]/HealthcareService?_lastUpdated=[_lastUpdated]</code></td>             </tr>         </tbody>     </table>     <hr/>     <br/> </div> "
* text.status = #generated

* rest[0].mode = #server
* rest[0].documentation = "Description of the needed resources to be supported by the FHIR server, and the different possible interactions."
* rest[0].interaction[0].code = #transaction
* rest[0].interaction[1].code = #search-system


* rest[0].resource[0].type = #Location
* rest[0].resource[0].profile = "http://hl7.org/fhir/us/hsds/StructureDefinition/hsds-Location"
* rest[0].resource[0].documentation = "Read a location (details and position information) for a physical place where human and social services are provided."

* rest[0].resource[0].interaction[0].code = #vread
* rest[0].resource[0].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].interaction[0].extension.valueCode = #SHALL


* rest[0].resource[0].interaction[1].code = #search-type
* rest[0].resource[0].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].interaction[1].extension.valueCode = #SHALL

* rest[0].resource[0].searchParam[0]
  * name = "name"
  * type = #string
  * documentation = "Search for locations by a portion of the location's name or alias."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
  * definition = Canonical(location-name)

* rest[0].resource[0].searchParam[+]
  * name = "address.country"
  * type = #string
  * documentation = "Search for locations by a country specified in an address."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
  * definition = Canonical(location-address-country)

* rest[0].resource[0].searchParam[+]
  * name = "hoursofoperation"
  * type = #string
  * documentation = "Search for locations by hours of operation."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
  * definition = Canonical(location-hoursofoperation)

* rest[0].resource[0].searchParam[+]
  * name = "accessibility"
  * type = #token
  * documentation = "Search for locations by accessibiity options."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
  * definition = Canonical(location-accessibility)

* rest[0].resource[0].searchParam[+]
  * name = "address"
  * type = #string
  * documentation = "Search for locations by a (part of the) address of the location."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
  * definition = Canonical(location-address)

* rest[0].resource[0].searchParam[+]
  * name = "address-city"
  * type = #string
  * documentation = "Search for locations by city specified in an address."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
  * definition = Canonical(location-address-city)

* rest[0].resource[0].searchParam[+]
  * name = "address-state"
  * type = #string
  * documentation = "Search for locations by state specified in an address."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
  * definition = Canonical(location-address-state)

* rest[0].resource[0].searchParam[+]
  * name = "address-postalcode"
  * type = #string
  * documentation = "Search for locations by postal code specified in an address."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
  * definition = Canonical(location-address-postalcode)

* rest[0].resource[0].searchParam[+]
  * name = "organization"
  * type = #reference
  * documentation = "Search for locations that are managed by the specified organization."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
  * definition = Canonical(location-organization)


* rest[0].resource[1].type = #Organization
* rest[0].resource[1].profile = "http://hl7.org/fhir/us/hsds/StructureDefinition/hsds-Organization"
* rest[0].resource[1].documentation = "Read a formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action. Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc."

* rest[0].resource[1].interaction[0].code = #vread
* rest[0].resource[1].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[0].extension.valueCode = #SHALL

* rest[0].resource[1].interaction[1].code = #search-type
* rest[0].resource[1].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[1].extension.valueCode = #SHALL


* rest[0].resource[1].searchParam[0]
  * name = "address"
  * type = #string
  * documentation = "Search for organizations specified in an address."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
  * definition = Canonical(organization-address)

* rest[0].resource[1].searchParam[+]
  * name = "address.postalCode"
  * type = #string
  * documentation = "Search for organizations by postal code specified in an address."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
  * definition = Canonical(organization-address-postalcode)

* rest[0].resource[1].searchParam[+]
  * name = "address.state"
  * type = #string
  * documentation = "Search for organizations by state specified in an address."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
  * definition = Canonical(organization-address-state)

* rest[0].resource[1].searchParam[+]
  * name = "address.city"
  * type = #string
  * documentation = "Search for organizations by city specified in an address."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
  * definition = Canonical(organization-address-city)

* rest[0].resource[1].searchParam[+]
  * name = "identifier"
  * type = #token
  * documentation = "Search for organizations by tax identifier (business indentifier) associated with human services organizations."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
  * definition = Canonical(organization-identifier)

* rest[0].resource[1].searchParam[+]
  * name = "name"
  * type = #string
  * documentation = "Search for organizations by a portion of the organization's name or alias."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
  * definition = Canonical(organization-name)

* rest[0].resource[1].searchParam[+]
  * name = "type"
  * type = #token
  * documentation = "Search for organizations by (a code for) the type of organization."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
  * definition = Canonical(organization-type)


* rest[0].resource[2].type = #HealthcareService
* rest[0].resource[2].profile = "http://hl7.org/fhir/us/hsds/StructureDefinition/hsds-HealthcareService"
* rest[0].resource[2].documentation = "Read the details of human and social services resources that are available at a location."
* rest[0].resource[2].interaction[0].code = #vread
* rest[0].resource[2].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].interaction[0].extension.valueCode = #SHALL

* rest[0].resource[2].interaction[1].code = #search-type
* rest[0].resource[2].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].interaction[1].extension.valueCode = #SHALL

* rest[0].resource[2].searchParam[0]
  * name = "communication"
  * type = #string
  * documentation = "Search for human and social services by the language in which services are delivered."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
  * definition = Canonical(healthcareservice-communication)

* rest[0].resource[2].searchParam[+]
  * name = "program"
  * type = #token
  * documentation = "Search for human and social services by the program under which this service is delivered."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
  * definition = Canonical(healthcareservice-program)

* rest[0].resource[2].searchParam[+]
  * name = "category"
  * type = #token
  * documentation = "Search for human and social services by the specified category of service."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
//* definition = Canonical(healthcareservice-category)
  * definition = "http://hl7.org/fhir/SearchParameter/HealthcareService-service-category"

* rest[0].resource[2].searchParam[+]
  * name = "type"
  * type = #token
  * documentation = "Search for human and social services by the specified type of service."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
//* definition = Canonical(healthcareservice-type)
  * definition = "http://hl7.org/fhir/SearchParameter/HealthcareService-service-type"

* rest[0].resource[2].searchParam[+]
  * name = "active"
  * type = #token
  * documentation = "Search for human and social services by the specified status of service."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
 // * definition =    ==> is this a built in search parameter?

* rest[0].resource[2].searchParam[+]
  * name = "name"
  * type = #string
  * documentation = "Search for human and social services by the specified status for the service."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL

* rest[0].resource[2].searchParam[+]
  * name = "location"
  * type = #reference
  * documentation = "Search for human and social services offered at the specified location."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL
  
* rest[0].resource[2].searchParam[+]
  * name = "organization"
  * type = #reference
  * documentation = "Search for human and social services offered by the specified organization."
  * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
  * extension.valueCode = #SHALL

---

// File: input/fsh/Extensions.fsh

Alias: $USPSState = http://hl7.org/fhir/us/core/ValueSet/us-core-usps-state
Alias: $QualificationStatusCS = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/QualificationStatusCS
Alias: QualificationStatusVS = http://hl7.org/fhir/us/davinci-pdex-plan-net/ValueSet/QualificationStatusVS
Alias: AccessibilityVS = http://hl7.org/fhir/us/davinci-pdex-plan-net/ValueSet/AccessibilityVS
Alias: IndividualSpecialtyAndDegreeLicenseCertificateVS = http://hl7.org/fhir/us/hsds/ValueSet/NonIndividualSpecialties

Extension: OrgContactInfo
Id: org-contactinfo
Title: "Community-Based Organization Contacts"
Description: "An extension to describe the additional details for named contacts for organizations not included in the contact.telecom element."
Context: Organization.contact.telecom
* extension contains
   title 0..* and
   department 0..* and
   email 0..*
* extension[title] ^short = "Organization Contact's Title"
* extension[title].value[x] only string
* extension[title].value[x] 0..1
* extension[department] ^short = "Organization Contact's Department"
* extension[department].value[x] only string
* extension[department].value[x] 0..1
* extension[email] ^short = "Organization Contact's Email Address"
* extension[email].value[x] only string
* extension[email].value[x] 0..1


Extension: ServiceContactInfo
Id: service-contactinfo
Title: "Community-Based Services Contacts"
Description: "An extension to describe the additional details for named contacts for services not included in the telecom element."
Context: HealthcareService.telecom
* extension contains
   name 0..* and
   title 0..* and
   department 0..* and
   email 0..*
* extension[name] ^short = "Service Contact's Title"
* extension[name].value[x] only string
* extension[name].value[x] 0..1
* extension[title] ^short = "Service Contact's Title"
* extension[title].value[x] only string
* extension[title].value[x] 0..1
* extension[department] ^short = "Service Contac's' Department"
* extension[department].value[x] only string
* extension[department].value[x] 0..1
* extension[email] ^short = "Service Contact's Email Address"
* extension[email].value[x] only string
* extension[email].value[x] 0..1

Extension: Qualification
Id: qualification
Title: "Qualification"
Description: "An extension to add qualifications for an organization (e.g. accreditation)."
Context: Organization
* extension contains
   identifier 0..* and 
   code 0..1 and
   issuer 0..1 and
   status 1..1 and
   period 0..1 and 
   whereValid 0..*
* extension[identifier].value[x] only Identifier 
// changed cardinality from 1..1 to 0..1 and added next two lines for identifier
* extension[identifier].value[x] 0..1
* extension[code].value[x] only CodeableConcept
* extension[code].value[x] 0..1 
* extension[code].value[x] from IndividualSpecialtyAndDegreeLicenseCertificateVS (example)
* extension[issuer].value[x] 0..1
* extension[issuer].value[x] only Reference(HSDOrganization)
* extension[status].value[x] 0..1
* extension[status].value[x] only  code 
* extension[status].valueCode from QualificationStatusVS (example)
* extension[status].valueCode = $QualificationStatusCS#active (exactly)
* extension[period].value[x] only Period 
* extension[period].value[x] 0..1
* extension[whereValid].value[x] only CodeableConcept or Reference(HSDLocation)
* extension[whereValid].value[x] from $USPSState (required)
* extension[whereValid].value[x] 1..1

---

// File: input/fsh/healthcareservicesearch.fsh

Alias: $HumanServiceTypeVS = http://hl7.org/fhir/us/hsds/ValueSet/HumanServiceProgram


Instance: healthcareservice-organization
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/healthcareservice-organization"
* version = "1.0.0"
* name = "HSD_sp_healthcareservice_organization"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/HealthcareService-organization"
* status = #active
* date = "2023-08-20T00:00:00+00:00"
* publisher = "HL7 Human and Social Services Working Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/hsswg/index.cfm"
* contact.name = "HL7 Human and Social Services Working Group"
* description = "Select Human and Social services offered by the specified organization"
* code = #organization
* base = #HealthcareService
* type = #reference
* expression = "HealthcareService.providedBy"
* target = #Organization
* multipleOr = true
* multipleAnd = true
* chain[0] = "name"
* chain[+] = "address"
* chain[+] = "partof"
* chain[+] = "type"

Instance: healthcareservice-communication
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/healthcareservice-communication"
* version = "0.1.0"
* name = "HSD_sp_healthcareservice_communication"
* status = #active
* publisher = "HL7 Human and Social Services Working Group"
* contact.name = "HL7 Human and Social Services Working Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/hsswg/index.cfm"
* description = "Select Human and Social services that can be delivered by the organization in the specified language"
* target = #HealthcareService
* code = #communication
* base = #HealthcareService
* type = #string
* expression = "HealthcareService.communication"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text
* modifier[1] = #exact
* modifier[2] = #contains

Instance: healthcareservice-location
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/healthcareservice-location"
* version = "1.0.0"
* name = "HSD_sp_healthcareservice_location"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/HealthcareService-location"
* status = #active
* date = "2023-08-20T00:00:00+00:00"
* publisher = "HL7 Human and Social Services Working Group"
* contact.name = "HL7 Human and Social Services Work"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/hsswg/index.cfm"
* description = "Select Human and social services offered at the specified location"
* code = #location
* base = #HealthcareService
* type = #reference
* expression = "HealthcareService.location"
* target = #Location
* multipleOr = true
* multipleAnd = true
* chain[0] = "address"
* chain[+] = "address-postalcode"
* chain[+] = "address-city"
* chain[+] = "address-state"
* chain[+] = "organization"
* chain[+] = "type"

Instance: healthcareservice-program
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/healthcareservice-program"
* version = "0.1.0"
* name = "HSD_sp_healthcareservice_program"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/HealthcareService-program"
* status = #active
* publisher = "HL7 Human and Social Services Work Group"
* purpose = "Allow human services directories to be searched by the program under which they fall"
* contact.name = "HL7 Human and Social Services Working Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/hsswg/index.cfm"
* description = "Select Human and Social services offered under the specified program"
* code = #program
* base = #HealthcareService
* type = #token
* expression = "HealthcareService.program"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text
* modifier[1] = #exact
* modifier[2] = #contains


Instance: healthcareservice-service-category
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/healthcareservice-service-category"
* version = "1.0.0"
* name = "HSD_sp_healthcareservice_category"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/HealthcareService-service-category"
* status = #active
* date = "2023-08-20T00:00:00+00:00"
* publisher = "HL7 Human and Social Services Working Group"
* contact.name = "HL7 Human and Social Services Working Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/hsswg/index.cfm"
* description = "Select Human and social services by the specified category"
* code = #service-category
* base = #HealthcareService
* type = #token
* expression = "HealthcareService.category"
* multipleOr = true
* multipleAnd = true
* modifier = #text
* modifier[1] = #exact
* modifier[2] = #contains

Instance: healthcareservice-service-type
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/healthcareservice-service-type"
* version = "1.0.0"
* name = "HSD_sp_healthcareservice_type"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/HealthcareService-service-type"
* status = #active
* date = "2023-08-20T00:00:00+00:00"
* publisher = "HL7 Human and Social Services Working Group"
* contact.name = "HL7 Human and Social Services Working Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/hsswg/index.cfm"
* description = "Select Human and social services by the specified type"
* code = #service-type
* base = #HealthcareService
* type = #token
* expression = "HealthcareService.type"
* multipleOr = true
* multipleAnd = true
* modifier = #text
* modifier[1] = #exact
* modifier[2] = #contains

Instance: healthcareservice-name
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/healthcareservice-name"
* version = "1.0.0"
* name = "HSD_sp_healthcareservice_name"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/HealthcareService-name"
* status = #active
* date = "2023-08-20T00:00:00+00:00"
* publisher = "HL7 Human and Social Services Working Group"
* contact.name = "HL7 Human and Social Services Working Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/hsswg/index.cfm"
* description = "Select HealthcareServices with the specified name"
* code = #name
* base = #HealthcareService
* type = #string
* expression = "HealthcareService.name"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #exact
* modifier[+] = #contains

Instance: healthcareservice-active
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/healthcareservice-active"
* version = "0.1.0"
* name = "HSD_sp_healthcareservice_active"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/HealthcareService-active"
* status = #active
* publisher = "HL7 Human and Social Services Work Group"
* contact.name = "HL7 Human and Social Services Working Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/hsswg/index.cfm"
* description = "Select Human and social services by the specified  active status"
* code = #active
* base = #HealthcareService
* type = #token
* expression = "HealthcareService.active"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text
* modifier[1] = #exact
* modifier[2] = #contains

---

// File: input/fsh/hsdshealthcareservice.fsh

Alias: NewPatients = http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients
Alias: DeliveryMethod = http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method
Alias: ContactPointAvailableTime = http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime
Alias: ViaIntermediary = http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/via-intermediary
Alias: HumanServiceCategory = http://hl7.org/fhir/us/hsds/ValueSet/HumanServiceCategory
Alias: HumanServiceType = http://hl7.org/fhir/us/hsds/ValueSet/HumanServiceType
Alias: HSDOrganization = http://hl7.org/fhir/us/hsds/StructureDefinition/hsds-Organization
Alias: HSDLocation = http://hl7.org/fhir/us/hsds/StructureDefinition/hsds-Location
Alias: HumanServiceProgram = http://hl7.org/fhir/us/hsds/ValueSet/HumanServiceProgram
Alias: HumanServiceCharacteristic = http://hl7.org/fhir/us/hsds/ValueSet/HumanServiceCharacteristic
Alias: CommonLanguages = http://hl7.org/fhir/ValueSet/languages
Alias: NonIndividualSpecialtiesVS = http://hl7.org/fhir/us/hsds/ValueSet/NonIndividualSpecialties
Alias: MaxBinding = http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet
Alias: max-binding = http://hl7.org/fhir/R4/valueset-all-languages.html#4.4.1.338
Alias: AllLanguages = http://hl7.org/fhir/R4/valueset-all-languages.html#4.4.1.338

Profile: HSDHealthcareService
Parent: HealthcareService
Id: hsds-HealthcareService
Title:    "HSDHealthcareService"
Description: "The HSD HealthcareService profile was introduced in STU 1 of this guide to allow example value sets that are used to search human and social service directories, because based on guidance from the human and social services community, existing human and social services taxonomies have not been deemed suitable for use in the relevant value sets. This profile isbased on the R4 HealthcareService resource, and fully aligned (as opposed to derived from) the Plan-Net HealthcareService profile which enforces use of extensible bindings to the category and type elements.  This profile describes the way a human/social service can be contacted to assist patients and clients with unmet social needs. Examples include food, housing/shelter, income & employment, public transportation, public education, legal services, disability and aging and mental and physical health."
 
* telecom.use = #work (exactly)
* meta.lastUpdated 1..1
* extension contains
    NewPatients named newpatients 0..0 and
    DeliveryMethod named deliverymethod 0..0
* identifier.type MS
* identifier.value MS
* active 1..1 MS
* active = true
* providedBy only Reference(HSDOrganization)
* providedBy 1..1 MS
* category 1..1
* category from HumanServiceCategory (example)
* category ^short = "This is an example value set. In addition to the Plan-Net codes defined in this IG, concepts drawn from the 211 LA or Open Eligibility taxonomies as well as the FHIR SDOHCC ValueSet SDOH Category could be used until the social care community recommends an appropriate standard."
* type
* type from HumanServiceType (example)
* type ^short = "This is an example value set. In addition to the Plan-Net codes defined in this IG, concepts drawn from either the 211 LA or Open Eligibility taxonomies could be used until the social care community recommends an appropriate standard."
* specialty 0..*
* specialty from NonIndividualSpecialtiesVS (preferred)
* location only Reference(HSDLocation)
* location MS
* name MS
* comment
* telecom
* telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..0 and
       ViaIntermediary named via-intermediary 0..0 and 
       ServiceContactInfo named service-contactinfo 0..* 
* telecom.extension[service-contactinfo] ^short = "Additional contact information for services"
* telecom.system
* telecom.value
// Should be coverageArea only Reference(HSDLocation)
* coverageArea only Reference(HSDLocation)
* program from HumanServiceProgram (example)
* program ^short = "This example value set includes codes that describe Programs under which community-based organizations can organize the social services they deliver."
* characteristic from HumanServiceCharacteristic (example)
* characteristic ^short = "This example value set includes codes that describe unique features that can be associated with community-based social services delivered at particular locations."
* appointmentRequired
* availableTime
* availableTime.daysOfWeek
* availableTime.allDay
* availableTime.availableStartTime
* availableTime.availableEndTime
* notAvailable
* notAvailable.description
* notAvailable.during
* availabilityExceptions

Mapping: HSDHealthcareServiceToHSDS
Source: HSDHealthcareService
Target:   "HSDS"
Id:       hsds
Title:    "HSDS"
Description: """This section describes the way HSDS version 2.0.1 elements are mapped from HSDS tables to the FHIR HSDHealthcareService profile. The left hand column contains the FHIR HSDHealthcareService element name; the right hand column contains the HSDS table.element and any implementation/transformation rules required to support the mapping.

The HSDS specification (v.2.0.1) served as the initial basis for requirements, and the mapping/alignment of HSDS data elements to profiles contained in the FHIR IG for Human Service Directories, STU1. HSDS Version 2.0.1 applies string datatypes to nearly all HSDS table 'id' fields/ data elements, including the id field associated with each HSDS [table] (e.g. organization.id [organization], location.id [location], service.id [service], phone.id [phone], etc.)). In the next version of HSDS, v.3.0, each HSDS table.id field will be defined using the UUID data type.

FHIR Resource .ids  (and the .ids in their profiles) are defined using the FHIR id datatype, a string that supports "Any combination of upper- or lower-case ASCII letters ('A'..'Z', and 'a'..'z', numerals ('0'..'9'), '-' and '.', with a length limit of 64 characters. (This might be an integer, an un-prefixed OID, UUID or any other identifier pattern that meets these constraints.)". 

Because UUIDs provide uniqueness to data/resources when they are exchanged across multiple systems, it is recommended that implementers of the FHIR IG for Human Services Directories support UUIDs in all HSDS id fields that are mapped to FHIR .id data elements."""
* id  -> "service.id Note: Each service must have a unique identifier."
* meta  -> "metadata Note: The HSDS metadata table contains a record of the changes that have been made to the data in order to maintain provenance information."
* meta.lastUpdated  -> "metadata.last_action_date Note: The date when data was changed. Since there may be more than one metadata record for each location, the latest max(last_action_date) needs to be used from metadata where  service.id =  metadata.resource_id."
// originally commented out extension mapping comment for next two lines
* extension[newpatients]  -> "No Source. Note: This is a GAP in HSDS. This extension indicates whether new patients are being accepted in general, or from a specific network."  
* extension[delivery-method]  -> "No Source. Note: This is a GAP in HSDS. While this is a Must Support element in the parent Plan-Net profile, it is optional and therefore, will be ignored."
* identifier  -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. There are no business identifiers associated with services in HSDS."
* identifier.id -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. There are no business identifiers associated with services in HSDS."
* identifier.use  -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. There are no business identifiers associated with locations in HSDS."
* identifier.type  -> "No Source. Note: This is a GAP in HSDS. There are no business identifiers associated with locations in HSDS."
* identifier.system  -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. There are no business identifiers associated with locations in HSDS."
* identifier.value  -> "No Source. Note: This is a GAP in HSDS. There are no business identifiers associated with locations in HSDS."
* identifier.period  -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. There are no business identifiers associated with locations in HSDS."
* identifier.assigner  -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. There are no business identifiers associated with locations in HSDS."
* active  -> "If HSDS service.status = 'active' then FHIR HealthcareService.active = 'true', else HealthcareService.active = 'false'. 
Note: HSDS service.status values are 'active', 'inactive', 'defunct' and 'temporarily closed'. All types other than 'active' are considered 'inactive' as per FHIR status."
* providedBy  -> "reference.reference = service.organization_id 
reference.type = 'Organization' 
reference.display = organization.name
Note: This element is of data type Reference that refers to the organization resource that provides this service."
* category  -> "category.coding.system = 'http://211hsis.org'
category.coding.code = taxonomy_term.term
cateory.coding.display = taxonomy_term.description
category.text = taxonomy_term.description
Note: This mapping is to the service category level taxonomy term that will be a parent to service type level taxonomy term.  Linkage to category level term is from service.id = service_attribute_id, service_attribute.taxonomy_term_id = taxonomy_term.id, (child) taxonomy_term.parent.id = (parent) taxonomy_term.id. This assumes a two-level hierarchy of taxonomy terms. If there are more levels of hierarchy, then this will require traversing through the hierarchy until category level taxonomy_term parent is reached.  Service Category binding will be to specific concepts from 211 Human Services Indexing System."
* type  -> "category.coding.system = 'http://211hsis.org'
category.coding.code = taxonomy_term.term
cateory.coding.display = taxonomy_term.description
category.text = taxonomy_term.description
Note: This mapping is to the service type level taxonomy term that will be directly linked to the service attribute.  Linkage to service type term is from service.id = service_attribute_id, service_attribute.taxonomy_term_id = taxonomy_term.id/.  Service Type binding will be to specific concepts from 211 Human Services Indexing System."
* specialty  -> "No Source. 
Note: This is a GAP in HSDS. specialty is defined as Must Support in the Plan-Net profile but optional element. The Plan-Net profile defines as required binding to valueset that refers to the standardized NUCC taxonomy https://taxonomy.nucc.org/. However, this taxonomy does not contain most of the human services specific provider types (except 332U00000X: Home Delivered Meals). This mapping will be ignored for the time being until NUCC is extended to include human service providers and HSDS is modified to include the specialty of providers who can provide this service."
* location  -> "reference.reference = service_at_location.location_id
reference.type = 'Location' 
reference.display = location.name
Note: This element is of data type Reference that refers to the location resource where a given service can be provided. Linkage to location is service.id = service_at_location.service_id, service_at_location.location_id = location.id. There may be multiple locations for a given service. Since FHIR location is an array (list), each location will be populated in an individual position in the array."
* name  -> "service.name"
* comment  -> "No Source. Note: This is a GAP in HSDS. There is no comment or description for a service. There is a description in service_at_location but that will not be just specific to service but the combination of service and location."
* extraDetails  -> "Fixed value 'Funding Source:' appended with funding.source Note: Ths data element name extraDetails is not obvious about its content and this mapping to the funding source is not a direct mapping. Therefore it is advised to map this as a name-value pair, i.e., add a label before the value e.g., 'Funding Source '. Linkage to the funding source is service.organiztion_id = funding.organization_id and service.id = funding.service_id. If there are multiple funding sources for this combiation, they are concatenated."
* photo  -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS."
* telecom  -> "Note: This FHIR structure contains contact details of the service using the ContactPoint datatype (Details for all kinds of technology-mediated contact points for a person or organization, including telephone, email, etc.)."
* telecom.id  -> "No Source. May be excluded from the mapping. Note: This data element may be ignored as having the id for the telecom record isn't essential and not always available in the HSDS (e.g. phone id is available but there is no separate id for email or website URL)."
* telecom.extension[contactpoint-availabletime]  -> "No Source.
Note: This is a GAP in HSDS. This FHIR extension is added by the Plan-Net profile and represents available hours for the telecom (e.g. customer service phone hours from 8AM-6PM M-F). There is no equivalent mapping to this data element in HSDS since the HSDS schedule table contains details of when a service or location is open and is not related to a phone line associated with a location."
* telecom.extension[via-intermediary] -> "No Source. Note: This is a GAP in HSDS. This FHIR extension added by the Plan-Net profile represents a reference to an alternative point of contact. HSDS does not have the source data to represent an 'intermediary' as that implies some sort of location relationship."
* telecom.extension[service-contactinfo] -> "This is a GAP in FHIR. Created a new extension: service-contactinfo to map HSDS contact.name, contact.title, contact.department, and contact.email"
* telecom.system  -> "For Phone: 
    if phone.type = 'voice' then system = 'phone'  
    if phone.type = 'cell' then system = 'phone' 
    if phone.type = 'fax' then system = 'fax' 
    if phone.type = 'pager' then system = 'pager' 
    if phone.type = 'text' then system = 'sms' 
    if phone.type = 'textphone' then system = 'sms' 
    if phone.type = 'video' then system = 'other' 
For Email:
    Fixed value  = 'email' 
For Website URL:
    Fixed value  = 'url' 
Note: There are multiple sources in HSDS for the telecom in FHIR so the system will be populated  based on phone.type mapping or fixed value of 'email' or 'url' depending on the data populated. Drawn from the ContactPointSystem value set [http://hl7.org/fhir/ValueSet/contact-point-system]"
* telecom.value  -> "For Phone: 
    value = phone.number 
For Email,
    value = service.email
For Website URL: 
    value  = service.url
Note: For phone, HSDS service  linkage is to phone table using service.id = phone.service_id."
* telecom.use  -> "Fixed value  = 'work' Note: This is a GAP in HSDS but since it is for work-related information, it is possible to set this to 'work' drawn from the ContactPointUse value set http://hl7.org/fhir/R4/valueset-contact-point-use.html."
* telecom.rank  -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. In FHIR, it is used to specify a preferred order in which to use a contact point. The parent Plan-Net profile indicates this is a Must Support element but is optional, So it can be excluded since there is no source."
* telecom.period  -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. In FHIR, this data element captures the time period when the contact point was/is in use. But it can be excluded since there is no source and it is optional."
* telecom.rank -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. In FHIR, it is used to specify a preferred order in which to use a contact point. The parent Plan-Net profile indicates this is a Must Support element but is optional, So it can be excluded since there is no source."
* telecom.period -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. In FHIR, this data element captures the time period when the contact point was/is in use. But it can be excluded since there is no source and it is optional."
* coverageArea  -> "reference.display = service_area.service_area Note: FHIR HealthcareService.coverageArea is a reference of location resource so service_area cannot be directly used. Although generally not recommended, this is mapped to Reference.display since there is no other corresponding data element in FHIR to HSDS service area.  If there are multiple service_area records for a given service, they are concatenated to make a single string."
* serviceProvisionCode  -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. That element is the code describing healthcare service provision conditions such as 'free', 'disc' or 'cost'."
* eligibility  -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. Eligibility is currently out of scope for this release of the IG as Eligibility is not addressed by the HSDS eligibility specification  (insufficient details to capture eligibility details as only a primary key (eligibility.id) and eligibility.service_id are included in the table.)"
* eligibility.id  -> "No Source. May be excluded from the mapping."
* eligibility.code  -> "No Source. May be excluded from the mapping."
* eligibility.comment  -> "No Source. May be excluded from the mapping."
* program  -> "program[0].text = program.name Note:  Since HSDS does not have any code for the program, only the text element of codeableConcept is mapped. Also, the program data element in FHIR is an array (list), so the program name from HSDS is populated in the first occurrence of the array."
* characteristic  -> "characteristic[0].text = service.interpretation_services 
Note: This is not an obvious mapping but interpretation services is one of the characteristics of the service provision. Also, this data element in FHIR is an array (list), so the interpretation services data from HSDS is populated in the first occurrence of the array."
* communication  -> "communication[0].text = language.language. Note: This data element in FHIR is an array (list), so the language from HSDS is populated in the first occurrence of the array."
* referralMethod  -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS."
* appointmentRequired  -> "No Source. Note: This is a GAP in HSDS."
* availableTime  -> "Note: This structure identifies the days/times during a week this service may be provided. Linkage to the schedule is from service.id = schedule.service_id."
* availableTime.id  -> "schedule.id  Note: This data element may be ignored as having the id for the schedule record isn't essential."
* availableTime.extension  -> "extension[0].valueSting = schedule.description Note: This is not an obvious mapping but the extension is available to provide additional details. Since the extension is an array (list), the description will be populated in the first occurrence of the extension."
* availableTime.daysOfWeek  -> "schedule.byday Note: This is a comma-separated value of days of the week. e.g. SU,MO,TU,WE,TH,FR,SA. Where freq is MONTHLY each part can be preceded by a positive or negative integer to represent which occurrence in a month; e.g. 2MO is the second Monday in a month. -1FR is last Friday."
* availableTime.allDay  -> "No Source. Note: This is a GAP in HSDS. May be derived from other HSDS data elements but may not be an accurate representation."
* availableTime.availableStartTime  -> "schedule.opens_at Note: This should use HH:MM format and should include timezone information, either adding the suffix ‘Z’ when the date is in UTC, or including an offset from UTC (e.g. 09:00-05:00 for 9am EST.)"
* availableTime.availableEndTime  -> "schedule.closes_at Note: This should use HH:MM format and should include timezone information, either adding the suffix ‘Z’ when the date is in UTC, or including an offset from UTC (e.g. 09:00-05:00 for 9am EST.)"
* notAvailable  -> "No Source. Note: This is a GAP in HSDS."
* availabilityExceptions  -> "No Source. Note: This is a GAP in HSDS. This is a Must Support but an optional element in the base Plan-Net profile."
* endpoint  -> "No Source. Note: This is for the technical implementation of web services for the healthcare service and it is not for source-specific business data. It is marked as Must Support though optional in the Plan-Net profile. At this point, no service- specific web services have been identified so it may be ignored."

---

// File: input/fsh/hsdslocation.fsh

Alias: $USCoreLocation = http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
Alias: Accessibility = http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility
Alias: $R4GeoJSONExtension = http://hl7.org/fhir/StructureDefinition/location-boundary-geojson
Alias: ContactPointAvailableTime  = http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime
Alias: LocationStatus = http://hl7.org/fhir/location-status 
Alias: NewPatients = http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients
Alias: Accessibility = http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility
Alias: ViaIntermediary = http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/via-intermediary

Profile: HSDLocation
Parent: $USCoreLocation
Id: hsds-Location
Title:    "HSDLocation"
Description: "The HSDLocation resource describes the physical place where community-based services are provided, practitioners are employed, organizations are based, etc. Locations can range in scope from a room in a building to a geographic region/area."
* identifier.use = #official (exactly)
* meta.lastUpdated 1..1
* extension contains
    NewPatients named newpatients 0..0 and
    Accessibility named accessibility 0..* and
    $R4GeoJSONExtension named location-boundary-geojson 0..1
* extension[accessibility] ^short = "Accessibility"
* extension[location-boundary-geojson] ^short = "Associated Region (GeoJSON)"
* identifier.type MS
* identifier.value MS
* status 1..1 MS
* status = LocationStatus#active  (exactly) 
* alias 0..*
* description 0..1
* mode 0..0
* type 0..0
* telecom
* telecom.use = #work (exactly)
* telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..0 MS and
       ViaIntermediary named via-intermediary 0..0 MS
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* telecom.system MS
* telecom.value MS
* address.use = #work (exactly)
* position MS
* managingOrganization 0..1 MS
* managingOrganization only Reference(HSDOrganization)
* partOf 0..0
* hoursOfOperation MS
* hoursOfOperation.daysOfWeek MS
* hoursOfOperation.allDay MS
* hoursOfOperation.openingTime MS
* hoursOfOperation.closingTime MS
* availabilityExceptions MS

Mapping: HSDLocationToHSDS
Source: HSDLocation
Target:   "HSDS"
Id:       hsds
Title:    "HSDS"
Description: """This section describes the way HSDS version 2.0.1 elements are mapped from HSDS tables to the FHIR HSDLocation profile. The left hand column contains the FHIR HSDLocation element name; the right hand column contains the HSDS table.element and any implementation/transformation rules required to support the mapping.

The HSDS specification (v.2.0.1) served as the initial basis for requirements, and the mapping/alignment of HSDS data elements to profiles contained in the FHIR IG for Human Service Directories, STU1. HSDS Version 2.0.1 applies string datatypes to nearly all HSDS table 'id' fields/ data elements, including the id field associated with each HSDS [table] (e.g., organization.id [organization], location.id [location], service.id [service], phone.id [phone], etc.). In the next version of HSDS, v.3.0, each HSDS table.id field will be defined using the UUID data type.

FHIR Resource .ids  (and the .ids in their profiles) are defined using the FHIR id datatype, a string that supports "Any combination of upper- or lower-case ASCII letters ('A'..'Z', and 'a'..'z', numerals ('0'..'9'), '-' and '.', with a length limit of 64 characters. (This might be an integer, an un-prefixed OID, UUID or any other identifier pattern that meets these constraints.)". 

Because UUIDs provide uniqueness to data/resources when they are exchanged across multiple systems, it is recommended that implementers of the FHIR IG for Human Services Directories support UUIDs in all HSDS id fields that are mapped to FHIR .id data elements."""
*  meta -> "Note: The HSDS metadata table contains a record of the changes that have been made to the data in order to maintain provenance information."
// uncommented meta.lastUpdated below
* meta.lastUpdated -> "metadata.last_action_date Note: The date when data was changed. Since there may be more than one metadata record for each location, the latest max(last_action_date) needs to be used from metadata where location.id =  metadata.resource_id."
* text -> "No Source. May be excluded from the mapping. Note: This DomainResource.text is meant for textual summary of the resource."
* extension[newpatients] -> "No Source. Note: This is a GAP in HSDS. This extension indicates whether new patients are being accepted in general, or from a specific network."
* extension[accessibility] ->  "For ADA compliant disability options:     
    location.extension:accessibility.value[x] = HSDS  
            location.transportation 
    location.extension:accessibility.url = 'pubtrans'; 
For public transportation:     
      location.extension:accessibility.value[x]= 
             accessibility_for_disabilities.accessibility                   
       location.extension:accessibility.url = 'adacomp'.
Note: This FHIR extension describes accessibility options offered by the location. Based on the the Accessibility valuset defined for this extension i.e.  http://hl7.org/fhir/us/davinci-pdex-plan-net/ValueSet/AccessibilityVS, there are two different data sources in HSDS that may be mapped. However, the HSDS source for this is not coded data so the content in value may not be in sync with the code used as extension.url."
* extension[$R4GeoJSONExtension] -> "No Source. Note: This is a GAP in HSDS. This is a Plan-Net extension to represent the location boundary in GEOJson format as an Attachment data type."
* identifier -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. There are no business identifiers associated with locations in HSDS."
* identifier.id -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. There are no business identifiers associated with locations in HSDS."
* identifier.use -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. There are no business identifiers associated with locations in HSDS."
* identifier.type -> "No Source. Note: This is a GAP in HSDS. There are no business identifiers associated with locations in HSDS."
* identifier.system -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. There are no business identifiers associated with locations in HSDS."
* identifier.value -> "No Source. Note: This is a GAP in HSDS. There are no business identifiers associated with locations in HSDS."
* identifier.period -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. There are no business identifiers associated with locations in HSDS."
* identifier.assigner -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. There are no business identifiers associated with locations in HSDS."
* status -> "Fixed value = 'active' Note: HSDS location does not have a status but this is required in FHIR so fixed value is proposed to indicate that location  is active."
* name -> "location.name"
* alias -> "location.alternate_name"
* description -> "location.description While description is not unique in HSDS model, US Core limits description cardinality to 0..1"
* mode -> "No Source. This is a GAP in HSDS. In FHIR, mode ndicates whether a resource instance represents a specific location or a class of locations."
* type -> "No Source. Note: This is a GAP in HSDS. This is a Must Support as per Plan-Net profile but it is an optional element."
* telecom.extension -> "No Source. Phone extension is a GAP in HSDS."
* telecom.extension[contactpoint-availabletime] -> "No Source. Note: This is a GAP in HSDS. This FHIR extension is added by the Plan-Net profile and represents available hours for the telecom (e.g. customer service phone hours from 8AM-6PM M-F). There is no equivalent mapping to this data element in HSDS since the HSDS schedule table contains details of when a service or location is open and is not related to a phone line associated with a location."
* telecom.extension[via-intermediary] -> "No Source. Note: This is a GAP in HSDS. This FHIR extension added by the Plan-Net profile represents a reference to an alternative point of contact. HSDS does not have the source data to represent an 'intermediary' as that implies some sort of location relationship."
*  telecom.system -> "if phone.type = 'voice' then system = 'phone'  
if phone.type = 'cell' then system = 'phone' 
if phone.type = 'fax' then system = 'fax' 
if phone.type = 'pager' then system = 'pager' 
if phone.type = 'text' then system = 'sms' 
if phone.type = 'textphone' then system = 'sms' 
if phone.type = 'video' then system = 'other' 
Note: There are only phone numbers in HSDS for location telecom data so the type will not include 'email' or 'url'. Drawn from the ContactPointSystem value set [http://hl7.org/fhir/ValueSet/contact-point-system]"
*  telecom.value -> "phone.number Note: For phone, HSDS location table will be linked to the  phone table using location.id = phone.location_id. There are only phone numbers in HSDS for location telecom data so the value will not include any email or url records."
*  telecom.use -> "Fixed value  = 'work' Note: This is a GAP in HSDS but since it is for work related information, it is possible to set this to 'work' drawn from the ContactPointUse value set http://hl7.org/fhir/R4/valueset-contact-point-use.html."
*  telecom.rank -> "No Source. May be excluded from the mapping. Note: This a GAP in HSDS. In FHIR, it is used to specify a preferred order in which to use a contact point. The parent Plan-Net profile indicates this is a Must Support element but is optional, So iit can be excluded since there is no source."
*  telecom.period -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. In FHIR, this data element captures the time period when the contact point was/is in use. But it can be excluded since there is no source and it is optional."
*  address -> "Note: In HSDS,two address  tables are used, one for postal_address, the other for physical_address. This linkage is based on  location.id = address.location_id. If there are multiple  addresses, only the latest one will be used to populate the FHIR address data since it allows only one address."
*  address.id -> "postal_address.id or physical_address_id 
Note: This data element may be ignored as having the id for the address record  isn't essential. If populated, it should be the id from one of the address tables that particular address  is referring to."
*  address.use -> "Fixed value  = 'work' Note: This is a GAP in HSDS but since it is for work related information, it is possible to set this to 'work' drawn from the AddressUse value set http://hl7.org/fhir/R4/valueset-address-use.html."
*  address.type -> "Fixed value  = 'postal' or 'physical'  Note: This is a GAP in HSDS but it can be inferred by which table is used as a source in the HSDS i.e. postal_address or physical_address respectively."
*  address.text -> "Concatenation of address_1, city, state_province, postal_code and country; all separated by comma (,) except dash (-) between state_province and postal_code. Note: The address data elements will be from postal_address or physical_address depending on which address is sourced. In FHIR, this element specifies the entire address as it should be displayed."
*  address.line -> "postal_address.address_1 or physical_address.address_1 Note: address.line in FHIR is an array (list) so address_1 is populated in the first position of the array. If address_2 is available (although deprecated in HSDS), it may be populated in the second position of the array."
*  address.city -> "postal_address.city or physical_address.city"
*  address.district -> "postal_address.region or physical_address.region"
*  address.state -> "postal_address.state_province_code or physical_address.state_province_code"
*  address.postalCode -> "postal_address.postal_code or physical_address.postal_code"
*  address.country -> "postal_address.country or physical_address.country"
*  address.period -> "No Source. May be excluded from the mapping. Note: This a GAP in HSDS. In FHIR, this data element represents the time period when the address was in use for the location."
*  physicalType -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. This element is bound to an example value set location-physical-type that defines a set of codes to indicate the physical form of the Location."
*  position -> "The absolute geographic location in FHIR"
*  position.id -> "No Source. May be excluded from the mapping. Note: This data element may be ignored as having the id for the position record  is not essential and not available in HSDS."
*  position.longitude -> "location.longitude Note: X coordinate of location expressed in decimal degrees in WGS84 datum."
*  position.latitude -> "location.latitude Note: Y coordinate of location expressed in decimal degrees in WGS84 datum."
*  position.altitude -> "GAP in HSDS, optional element in FHIR."
*  managingOrganization -> "location.organization.id"
*  partOf -> "No Source. Note: This a GAP in HSDS. There is no concept of location hierarchy in HSDS." 
*  hoursOfOperation -> "Note: This structure identifies the days/times during a week this location is usually open. Linkage to schedule is from location.id = schedule.location_id."
*  hoursOfOperation.id -> "schedule.id Note: This data element may be ignored as having the id for the schedule record  isn't essential."
*  hoursOfOperation.daysOfWeek	-> "schedule.byday Note: This is a comma-separated value of days of the week. e.g. SU,MO,TU,WE,TH,FR,SA. Where freq is MONTHLY each part can be preceded by a positive or negative integer to represent which occurrence in a month; e.g. 2MO is the second Monday in a month. -1FR is last Friday."
*  hoursOfOperation.allDay -> "No Source. Note: This is a GAP in HSDS. May be derived from other HSDS data elements but may not be an accurate representation."
*  hoursOfOperation.openingTime	-> "schedule.opens_at Note: This should use HH:MM format and should include timezone information, either adding the suffix ‘Z’ when the date is in UTC, or including an offset from UTC (e.g. 09:00-05:00 for 9am EST.)"
*  hoursOfOperation.closingTime	-> "schedule.closes_at Note: This should use HH:MM format and should include timezone information, either adding the suffix ‘Z’ when the date is in UTC, or including an offset from UTC (e.g. 09:00-05:00 for 9am EST.)"
*  availabilityExceptions -> "No Source. Note: This is a GAP in HSDS. This is a Must Support but optional element in the base Plan-Net profile."
*  endpoint -> "No Source. Note: This is for the technical implementation of web services for the location and it is not for source-specific business data. It is marked as Must Support though optional in the Plan-Net profile. At this point, no  location-specific web services have been identified so it may be ignored."

---

// File: input/fsh/hsdsorganization.fsh

Alias:  $USCoreOrganization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias: IndividualSpecialtyAndDegreeLicenseCertificateVS = http://hl7.org/fhir/us/hsds/ValueSet/NonIndividualSpecialties
Alias: $NUCCProviderTaxonomy  = http://nucc.org/provider-taxonomy
Alias: $V2table0360VS = http://terminology.hl7.org/ValueSet/v2-0360 
Alias: $V2table0360CS = http://terminology.hl7.org/CodeSystem/v2-0360
Alias: OrgDescription = http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/org-description
Alias: IRS = http://www.irs.gov
Alias: ViaIntermediary = http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/via-intermediary
Alias: ContactPointAvailableTime = http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime

Profile:       HSDOrganization
Parent:        $USCoreOrganization
Id:            hsds-Organization
Title:         "HSDOrganization"
Description: "The HSDOrganization resource is a formal or informal grouping of people or organizations set up to assist people in coping with issues related to various social issues, including but not limited to: adequate housing, substance abuse, domestic conflict, mental health and/or personal/familial problems.
Guidance:   When the contact is a department name, rather than a human (e.g., patient help line), include a blank family and given name, and provide the department name in contact.name.text."

/* Description:   "An organization is a formal or informal grouping of people or organizations with a common purpose, such as a company, institution, corporation, community group, or healthcare practice.
Guidance:   When the contact is a department name, rather than a human (e.g., patient help line), include a blank family and given name, and provide the department name in contact.name.text" */
* meta.lastUpdated 1..1
* extension contains
   Qualification named qualification 0..*  and
   OrgDescription named org-description  0..1
* extension[qualification].extension[code].value[x] from IndividualSpecialtyAndDegreeLicenseCertificateVS (extensible)
* extension[qualification] ^short = "Qualification"
* extension[org-description] ^short = "Organization Description"
* active 1..1 MS
* active = true 
* name MS
* address 0..0
* partOf 0..0
* identifier ..* MS
* identifier only Identifier
* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.discriminator.path = "$this"
* identifier ^slicing.rules = #open
* identifier ^comment = "Tax ID preferred."
* identifier.system 0..1 MS
* identifier.system only uri
* identifier.value 0..1 MS
* identifier.value only string
* identifier contains
    IRS 0..1
* identifier[IRS] only Identifier
* identifier[IRS] ^short = "U.S. Tax ID (sometimes called Employer Identification Number (EIN)"
* identifier[IRS] ^patternIdentifier.system = "urn:us:gov:irs"
* identifier[IRS].assigner.display = "http://www.irs.gov"
* contact 0..*

* contact.telecom
* contact.telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..0 and
       ViaIntermediary named via-intermediary 0..0 and
       OrgContactInfo named org-contactinfo 0..* 
* contact.telecom.extension[org-contactinfo] ^short = "Organization's Additional Contacts details"
* contact.telecom.value
* contact.telecom.system
* contact.telecom.use = #work (exactly)
* telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..0 and
       ViaIntermediary named via-intermediary 0..0
* telecom.system
* telecom.value
* telecom.rank
* type 1..*
* type from OrgTypeVS (extensible)

Mapping: HSDOrganizationToHSDS
Source: HSDOrganization
Target:   "HSDS"
Id:       hsds
Title:    "HSDS"
Description: """This section describes the way HSDS version 2.0.1 elements are mapped from HSDS tables to this FHIR HSDOrganization profile. The left hand column contains the FHIR HSDOrganization element name; the right hand column contains the HSDS table.element and any implementation/transformation rules required to support the mapping.

The HSDS specification (v.2.0.1) served as the initial basis for requirements, and the mapping/alignment of HSDS data elements to profiles contained in the FHIR IG for Human Service Directories, STU1. HSDS Version 2.0.1 applies string datatypes to nearly all HSDS table 'id' fields/ data elements, including the id field associated with each HSDS [table] (e.g. organization.id [organization], location.id [location], service.id [service], phone.id [phone], etc.). In the next version of HSDS, v.3.0, each HSDS table.id field will be defined using the UUID data type.

FHIR Resource .ids  (and the .ids in their profiles) are defined using the FHIR id datatype, a string that supports "Any combination of upper- or lower-case ASCII letters ('A'..'Z', and 'a'..'z', numerals ('0'..'9'), '-' and '.', with a length limit of 64 characters. (This might be an integer, an un-prefixed OID, UUID or any other identifier pattern that meets these constraints.)". 

Because UUIDs provide uniqueness to data/resources when they are exchanged across multiple systems, it is recommended that implementers of the FHIR IG for Human Services Directories support UUIDs in all HSDS id fields that are mapped to FHIR .id data elements."""
* id  -> "organization.id Note: Each organization must have a unique system identifier in the source system."
* meta  -> "Note: The HSDS metadata table contains a record of the changes that have been made to the data in order to maintain provenance information."
* meta.id -> "metadata.id Note: This data element may be ignored as having the id for the date metadata isn't essential. If populated, it should be id corresponding to the latest action date for given organization as described below."
* meta.lastUpdated  -> "metadata.last_action_date Note: The date when data was changed. Since there may be more than one metadata record for each organization, the latest max(last_action_date) needs to be used from metadata where (FHIR) Organization.id = (HSDS) metadata.resource_id."
* text -> "No Source. May be excluded from the mapping. Note: This DomainResource.text is meant for textual summary of the resource so organization description is mapped to the org-description extension added by Plan-Net profile."
* extension[qualification] -> "extension[qualification]:code.url = 'code' extension[qualification]:code.valueCodeableConcept.text = service.accreditations 
Note: This is a GAP in HSDS that can be resolved by having qualifications collected at the organization level. As a workaround, suggested mapping uses the unique set of accreditations from service and concatenated for the organization level as described below."
* extension[org-description]  -> "organization.description Note: This Plan-Net profile added this extension for organization description as opposed to using DomainResource.text data element which is meant for textual summary of the resource."
* identifier[NPI] -> "NPI identifiers are not relevant to the identification of community based organizations at this time."
* identifier[CLIA] -> "CLIA identifiers are also currently not relevant for use in the identification of community based organizations."
* identifier[IRS] -> "For Community Based Organizations, the closest identifier usedfor the purpose of identifying the organization is a government issued identifier used for the purpose of tax administration."
* identifier[IRS].id  -> "No Source. May be excluded from the mapping. Note: This data element may be ignored as having the id for the identifier record  isn't essential and is not available in HSDS since the tax ID is directly on the organization table."
* identifier[IRS].use  -> "Fixed value = 'official' Note: Since the organization business identifier in HSDS is organization.tax id  which is used for official purpose,  this element is to be set with a fixed value 'official' drawn from the code system IdentifierUse http://hl7.org/fhir/identifier-use."
* identifier[IRS].type -> "Fixed value = 'TAX' Note: Since the organization business identifier in HSDS is organization.tax id  which is used for the tax,  this element is to be set with a fixed value 'TAX'  drawn from the IdentifierType code system – http://terminology.hl7.org/CodeSystem/v2-0203 [an HL7-defined code system of concepts specifying type of identifier]."
* identifier[IRS].system -> "Fixed value = 'urn:us:gov:irs' Note: Since the organization business identifier in HSDS is organization.tax id  which is issued by IRS,  this element is to be set with a fixed value with IRS URN."
* identifier[IRS].value  -> "organization.tax_id Note: This is the only business identifier in HSDS at this time."
* identifier[IRS].period  -> "organization.year_incorporated Note:  HSDS organization.year_incorporated may not always be the same as when the TAX ID was issued (especially if a company merged or split). Technically year_incorporated  is a GAP in FHIR and should be added as an extension. Also the effective date of the identifier (mapped to period here) is GAP in HSDS. But until both of those GAPs are addressed, the above mapping is proposed as a work around."
* identifier[IRS].assigner.display -> "Fixed value = 'www.irs.gov' Note: This is GAP in HSDS but it can be implicitly inferred. Since the organization business identifier in HSDS is organization.tax id  which is issued by IRS,  this element is to be set with a fixed value with IRS website link as a reference." 
* active  -> "Fixed value = 'true' Note: HSDS organization does not have a status but this is required in FHIR so fixed value is proposed to indicate that organization is active."
* type -> "Any code is allowed from the type.system = 'http://hl7.org/fhir/us/DaVinci-pdex-plan-net/ValueSet/OrgTypeVS'  Note: This is a GAP in HSDS but a required Must Support element in the Plan-Net profile." 
* name  -> "organization.name"
* alias  -> "organization.alternate_name Note: Since there is only one alternate name in HSDS but the alias is an array (list) in FHIR, this will map to the first occurrence of the array."
* telecom -> "Note: This FHIR structure contains contact details of the organization using the ContactPoint datatype (Details for all kinds of technology-mediated contact points for a person or organization, including telephone, email, etc.)."
* telecom.id -> "No Source. May be excluded from the mapping. Note: This data element may be ignored as having the id for the telecom record  isn't essential and not always available in the HSDS (e.g. phone id is available but there is no separate id for email or website URL)."
* telecom.extension[contactpoint-availabletime]  -> "No Source. Note: This is a GAP in HSDS. This FHIR extension is added by Plan-Net profile and represents available hours for the telecom (e.g. customer service phone hours from 8AM-6PM M-F). There is no equivalent mapping to this data element in  HSDS since the HSDS schedule table contains details of when a service or location is open, and is not a phone line associated with an organization."
* telecom.extension[via-intermediary]  -> "No Source. Note: This is GAP in HSDS. This FHIR extension added by Plan-Net profile represents a reference to an alternative point of contact. HSDS does not have the source data to represent 'intermediary' as that implies some sort of organizational relationship."
* telecom.system -> "For Phone: 
    if phone.type = 'voice' then system = 'phone'  
    if phone.type = 'cell' then system = 'phone' 
    if phone.type = 'fax' then system = 'fax' 
    if phone.type = 'pager' then system = 'pager' 
    if phone.type = 'text' then system = 'sms' 
    if phone.type = 'textphone' then system = 'sms' 
    if phone.type = 'video' then system = 'other' 
For Email:
    Fixed value  = 'email' 
For Website URL:
    Fixed value  = 'url' 
Note: There are multiple sources in HSDS for the telecom in FHIR so the system will be  populated  based on phone.type mapping or fixed value of 'email' or 'url' depending on the data populated. Drawn from the ContactPointSystem value set [http://hl7.org/fhir/ValueSet/contact-point-system]"  
* telecom.value  -> "For Phone: 
    value = phone.number 
For Email,
    value = organization.email
For Website URL: 
    value  = organization.url
Note: For phone, HSDS  organization linkage is to HSDS phone table using  organization.id = phone.organization_id."
* telecom.use -> "Fixed value  = 'work' Note: This is a GAP in HSDS but since it is for work related information, it is possible to set this to 'work' drawn from the ContactPointUse value set http://hl7.org/fhir/R4/valueset-contact-point-use.html."
* telecom.rank -> "No Source. Note: This a GAP in HSDS. In FHIR, it is used to specify a preferred order in which to use a contact point. The parent Plan-Net profile indicates this is a Must Support element but is optional, So it can be excluded since there is no source."
* telecom.period -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. In FHIR, this data element captures the time period when the contact point was/is in use. But it can be excluded since there is no source and it is optional."
* address  -> "GAP in HSDS: HSDS does not associate an address directly with an organization. The Location table is used to capture address details associated with locations that are part of that organization. Two HSDS tables are used to represent the postal versus physical address for locations in version 2.0.1, HSDS postal_address and HSDS physical_address. Address information is based on linking organization.id =   location.organization_id and location.id = address.location_id. If there are multiple locations/associated addresses, all addresses can be included for organization level addresses since there is no way to identify which location or address is the primary one to be used as the organization's headquarter address."
* address.id  -> "postal_address.id or physical_address_id Note: This data element may be ignored as having the id for the address record  isn't essential. If populated, it should be the id from one of the address tables that particular address  is referring to."
// * address.extension[geolocation] -> "location.latitude Note: There is no location in HSDS at the organization level."
* address.use  -> "Fixed value  = 'work' Note: This is a GAP in HSDS but since it is for work related information, it is possible to set this to 'work' drawn from the AddressUse value set http://hl7.org/fhir/R4/valueset-address-use.html."
* address.type -> "Fixed value  = 'postal' or 'physical' Note: This is a GAP in HSDS but it can be inferred by which table is used as a source in the HSDS i.e. postal_address or physical_address respectively."
* address.text -> "Concatenation of address_1, city, state_province, postal_code and country; all separated by comma (,) except dash (-) between state_province and postal_code. Note: The address data elements will be from postal_address or physical_address depending on which address is sourced. In FHIR, this element specifies the entire address as it should be displayed."
* address.line  -> "postal_address.address_1 or 
physical_address.address_1 Note: address.line in FHIR is an array (list) so address_1 is populated in the first position of the array. If address_2 is available (although deprecated in HSDS), it may be populated in the second position of the array."
* address.city  -> "postal_address.city or physical_address.city"
* address.district  -> "postal_address.region or physical_address.region"
* address.state  -> "postal_address.state_province_code or physical_address.state_province_code"
* address.postalCode  -> "postal_address.postal_code or physical_address.postal_code"
* address.country  -> "postal_address.country or physical_address.country"
* address.period  -> "No Source. May be excluded from the mapping. Note: This a GAP in HSDS. In FHIR, this data element represents the time period when the address was in use for the organization."
* partOf  -> "No Source. Note: This a GAP in HSDS. There is no concept of organization hierarchy in HSDS."
* contact  -> "Note: contact Table The HSDS contact table contains details of the named contacts associated with the organization. This linkage is based on FHIR organization.id = HSDS contact.organization_id. If there are multiple contacts, all of those can be included for organization level contacts in FHIR since there is no indication to identify which contact is primary." 
* contact.id -> "contact.id  Note: This data element may be ignored as having the id for the contact record  isn't essential."
* contact.purpose  -> "No Source. May be excluded from the mapping. Note: This is a GAP In HSDS. In FHIR, this element is used to indicate the purpose of which the contact can be reached."
* contact.name  -> "contact.name"
* contact.telecom -> "No Source. May be excluded from the mapping."
* contact.telecom.id -> "No Source. May be excluded from the mapping. Note: This data element may be ignored as having the id for the telecom record isn't essential and not always available in the HSDS (e.g. phone id is available but there is no separate id for email)."
* contact.telecom.extension[contactpoint-availabletime] -> "No Source. May be excluded from the mapping. Note: This is a GAP in HSDS. This FHIR extension is added by Plan-Net profile and represents available hours for the telecom (e.g. customer service phone hours from 8AM-6PM M-F). There is no equivalent mapping to this data element in  HSDS since the HSDS schedule table contains details of when a service or location is open, and is not a phone line associated with a contact."
* contact.telecom.extension[via-intermediary] -> "No Source. May be excluded from the mapping. Note: This is GAP in HSDS. This FHIR extension added by Plan-Net profile represents a reference to an alternative point of contact. HSDS does not have the source data to represent 'intermediary' as that implies some sort of contact relationship."
* contact.telecom.extension[org-contactinfo]  -> "This is a GAP in FHIR. Created a new extension org-contactinfo to map HSDS contact.title, contact.department, and contact.email"
// * contact.telecom.extension[org-contactinfo].title.valueString -> "contact.title"
// * contact.telecom.extension[org-contactinfo].department.valueString -> "contact.department"
// * contact.telecom.extension[org-contactinfo].email.valueString -> "contact.email"
* contact.telecom.system -> "For Phone: 
    if phone.type = 'voice' then system = 'phone'  
    if phone.type = 'cell' then system = 'phone' 
    if phone.type = 'fax' then system = 'fax' 
    if phone.type = 'pager' then system = 'pager' 
    if phone.type = 'text' then system = 'sms' 
    if phone.type = 'textphone' then system = 'sms' 
    if phone.type = 'video' then system = 'other' 
For Email:
    Fixed value  = 'email' 
Note: There are multiple sources in HSDS for the telecom in FHIR so the system will be  populated  based on phone.type mapping or fixed value of 'email' depending on the data populated."
* contact.telecom.value  -> "For Phone: 
    value = phone.number 
For Email,
    value = conact.email
Note: For phone, HSDS contact table will be linked to the phone table using contact.id = phone.contact_id."
* contact.telecom.use  -> "Fixed value  = 'work' Note: This is a GAP in HSDS but since it is for work-related information, it is possible to set this to 'work' drawn from the ContactPointUse value set http://hl7.org/fhir/R4/valueset-contact-point-use.html"
* contact.telecom.rank -> "No Source. GAP in HSDS. May be excluded from the mapping. Note: This is a GAP in HSDS. In FHIR, it is used to specify a preferred order in which to use a contact point. The parent Plan-Net profile indicates this is a Must Support element but is optional, So it can be excluded since there is no source."
* contact.telecom.period -> "No Source.GAP in HSDS.  May be excluded from the mapping. Note: This is a GAP in HSDS. In FHIR, this data element captures the time period when the contact point was/is in use. But it can be excluded since there is no source and it is optional."
* contact.address -> "No Source. GAP in HSDS. Addresses are only associated with locations in the HSDS model."
* endpoint -> "No Source. Note: This is for the technical implementation of web services for the organization and it is not for source-specific business data. It is marked as Must Support though optional in the Plan-Net profile. At this point, no organizayion specific web services have been identified so it may be ignored."

---

// File: input/fsh/locationsearch.fsh

Instance: location-address-city
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/location-address-city"
* version = "0.1.0"
* name = "HSD_sp_location_address_city"
* derivedFrom = "http://hl7.org/fhir/us/davinci-pdex-plan-net/SearchParameter/location-address-city"
* status = #active
* description = "Select locations within the specified city"
* publisher = "HL7 Human and Social Services Work Group"
* contact.name = "HL7 Human and Social Services Work"
* code = #address-city
* base = #Location
* type = #string
* expression = "Location.address.city"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text
* modifier[1] = #exact
* modifier[2] = #contains

Instance: location-address-postalcode
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/location-address-postalcode"
* version = "0.1.0"
* name = "HSD_sp_location_address_postalcode"
* derivedFrom = "http://hl7.org/fhir/us/davinci-pdex-plan-net/SearchParameter/location-address-postalcode"
* status = #active
* publisher = "HL7 Human and Social Services Work Group"
* contact.name = "HL7 Human and Social Services Work"
* description = "Select locations within the specified postal code"
* code = #address-postalCode
* base = #Location
* type = #string
* expression = "Location.address.postalCode"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text
* modifier[1] = #exact
* modifier[2] = #contains


Instance: location-address-state
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/location-address-state"
* version = "0.1.0"
* name = "HSD_sp_location_address_state"
* derivedFrom = "http://hl7.org/fhir/us/davinci-pdex-plan-net/SearchParameter/location-address-state"
* status = #active
* publisher = "HL7 Human and Social Services Work Group"
* contact.name = "HL7 Human and Social Services Work"
* description = "Select locations within the specified state"
* code = #address-state
* base = #Location
* type = #string
* expression = "Location.address.state"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text
* modifier[1] = #exact
* modifier[2] = #contains


Instance: location-address
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/location-address"
* version = "0.1.0"
* name = "HSD_sp_location_address"
* derivedFrom = "http://hl7.org/fhir/us/davinci-pdex-plan-net/SearchParameter/location-address"
* status = #active
* publisher = "HL7 Human and Social Services Work Group"
* contact.name = "HL7 Human and Social Services Work"
* description = "Select locations within the specified address"
* code = #address
* base = #Location
* type = #string
* expression = "Location.address"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text
* modifier[1] = #exact
* modifier[2] = #contains


Instance: location-name
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/location-name"
* version = "0.1.0"
* name = "HSD_sp_location_name"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Location-name"
* status = #active
* publisher = "HL7 Human and Social Services Work Group"
* contact.name = "HL7 Human and Social Services Work"
* description = "Select locations with the specified name"
* code = #name
* base = #Location
* type = #string
* expression = "Location.name | Location.alias"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text
* modifier[1] = #exact
* modifier[2] = #contains


Instance: location-organization
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/location-organization"
* version = "0.1.0"
* name = "HSD_sp_location_organization"
* derivedFrom = "http://hl7.org/fhir/us/davinci-pdex-plan-net/SearchParameter/location-organization"
* status = #active
* publisher = "HL7 Human and Social Services Work Group"
* contact.name = "HL7 Human and Social Services Work"
* description = "Select locations managed by the specified organization"
* code = #organization
* base = #Location
* type = #reference
* expression = "Location.managingOrganization"
* multipleOr = true
* multipleAnd = true
* chain[0] = "name"
* chain[+] = "address"
* chain[+] = "type"


Instance: location-address-country
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/location-address-country"
* version = "0.1.0"
* name = "HSD_sp_location_address_country"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Location-address-country"
* status = #active
* publisher = "HL7 Human and Social Services Work Group"
* contact.name = "HL7 Human and Social Services Work"
* description = "Select locations by the country specified in the address"
* code = #address-country
* base = #Location
* type = #string
* expression = "Location.address.country"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text
* modifier[1] = #exact
* modifier[2] = #contains


Instance: location-hoursofoperation
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/location-hoursofoperation"
* version = "0.1.0"
* name = "HSD_sp_location_hoursofoperation"
* status = #active
* publisher = "HL7 Human and Social Services Work Group"
* contact.name = "HL7 Human and Social Services Work"
* description = "Select locations by the country specified in the address"
* code = #address-country
* base = #Location
* type = #string
* expression = "Location.address.country"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text
* modifier[1] = #exact
* modifier[2] = #contains


Instance: location-accessibility
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/location-accessibility"
* version = "0.1.0"
* name = "HSD_sp_location_accessibility"
* status = #active
* publisher = "HL7 Human and Social Services Work Group"
* contact.name = "HL7 Human and Social Services Work"
* description = "Select locations by the specified accessibility options offered by the location."
* code = #accessibility
* base = #Location
* type = #token
* expression = "Location.extension.where(url='http://hl7.org/fhir/us/hsds/SearchParameter/location-accessibility').value"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text
* modifier[1] = #exact
* modifier[2] = #contains

---

// File: input/fsh/search.fsh

Instance: organization-address-city
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/organization-address-city"
* version = "1.0.0"
* name = "HSD_sp_organization_address_city"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Organization-address-city"
* status = #active
* publisher = "HL7 Human and Social Services Work Group"
* contact.name = "HL7 Human and Social Services Work"
* description = "Select organizations within the specified city"
* code = #address-city
* base = #Organization
* type = #string
* expression = "Organization.address.city"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text
* modifier[1] = #exact
* modifier[2] = #contains


Instance: organization-address-postalcode
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/organization-address-postalcode"
* version = "1.0.0"
* name = "HSD_sp_organization_address_postalcode"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Organization-address-postalcode"
* status = #active
* publisher = "HL7 Human and Social Services Work Group"
* contact.name = "HL7 Human and Social Services Work"
* description = "Select organizations within the specified postal code"
* code = #address-postalcode
* base = #Organization
* type = #string
* expression = "Organization.address.postalCode"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text
* modifier[1] = #exact
* modifier[2] = #contains


Instance: organization-address-state
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/organization-address-state"
* version = "1.0.0"
* name = "HSD_sp_organization_address_state"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Organization-address-state"
* status = #active
* publisher = "HL7 Human and Social Services Work Group"
* contact.name = "HL7 Human and Social Services Work"
* description = "Select organizations within the specified state"
* code = #address-state
* base = #Organization
* type = #string
* expression = "Organization.address.state"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text
* modifier[1] = #exact
* modifier[2] = #contains


Instance: organization-address
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/organization-address"
* version = "1.0.0"
* name = "HSD_sp_organization_address"
* derivedFrom = "http://hl7.org/fhir/us/core/SearchParameter/us-core-organization-address"
* status = #active
* publisher = "HL7 Human and Social Services Work Group"
* contact.name = "HL7 Human and Social Services Work"
* description = "Select organizations with the specified address (matches any of the string elements of an address)"
* code = #address
* base = #Organization
* type = #string
* expression = "Organization.address"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text
* modifier[1] = #exact
* modifier[2] = #contains

Instance: organization-address-country
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/organization-address-country"
* version = "1.0.0"
* name = "HSD_sp_organization_address_country"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Organization-address-country"
* status = #active
* publisher = "HL7 Human and Social Services Work Group"
* contact.name = "HL7 Human and Social Services Work"
* description = "Select organizations by the country specified in an address"
* code = #address-country
* base = #Organization
* type = #string
* expression = "Organization.address.country"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text
* modifier[1] = #exact
* modifier[2] = #contains


Instance: organization-name
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/organization-name"
* version = "1.0.0"
* name = "HSD_sp_organization_name"
* derivedFrom = "http://hl7.org/fhir/us/core/SearchParameter/us-core-organization-name"
* status = #active
* publisher = "HL7 Human and Social Services Work Group"
* contact.name = "HL7 Human and Social Services Work"
* description = "Select organizations by (a portion of) the organization's name"
* code = #name
* base = #Organization
* type = #string
* expression = "Organization.name"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text
* modifier[1] = #exact
* modifier[2] = #contains


Instance: organization-type
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/organization-type"
* version = "1.0.0"
* name = "HSD_sp_organization_type"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Organization-type"
* status = #active
* publisher = "HL7 Human and Social Services Work Group"
* contact.name = "HL7 Human and Social Services Work"
* description = "Select  organizations by (a code for) the type of organization"
* code = #type
* base = #Organization
* type = #token
* expression = "Organization.type"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text
* modifier[1] = #exact
* modifier[2] = #contains

Instance: organization-identifier
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/hsds/SearchParameter/organization-identifier"
* version = "1.0.0"
* name = "HSD_sp_organization_identifier"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Organization-identifier"
* status = #active
* publisher = "HL7 Human and Social Services Work Group"
* contact.name = "HL7 Human and Social Services Work"
* description = "Select organizations with the specified identifier (Tax ID) supported as an organization identifier"
* code = #type
* base = #Organization
* type = #token
* expression = "Organization.identifier"
* multipleOr = true
* multipleAnd = true
* modifier[0] = #text
* modifier[1] = #exact
* modifier[2] = #contains

---

// File: input/fsh/Value Sets.fsh

Alias: $HealthcareServiceCategoryCS = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS
Alias: $ServiceTypeCS = http://terminology.hl7.org/CodeSystem/service-type
Alias: $HumanServiceProgramCS = http://hl7.org/fhir/us/hsds/CodeSystem/HumanServiceProgramCS
Alias: $HumanServiceCharacteristicCS = http://hl7.org/fhir/us/hsds/CodeSystem/HumanServiceCharacteristicCS
Alias: $NUCCProviderTaxonomy = http://nucc.org/provider-taxonomy


// Example value set containing broad categories of healthcare services being performed or delivered that are relevant to social care services and derived from the Plan-Net HumanServiceCategory code system

ValueSet: HumanServiceCategoryVS
Id: HumanServiceCategory
Title: "Human Service Category VS"
Description: "This example value set includes a subset of codes included in the Plan-Net Healthcare Service Category value set (HealthcareServiceCategoryVS)."
* ^publisher = "HL7 International - Human and Social Services Work Group"
* ^experimental = false
* ^status = #active
* ^contact.name = "HL7 International - Human and Social Services Work Group"
* ^contact.telecom.system = #url
* ^jurisdiction = urn:iso:std:iso:3166#US
* ^url = "http://hl7.org/fhir/us/hsds/ValueSet/HumanServiceCategory"
* $HealthcareServiceCategoryCS#other "Other"
* HealthcareServiceCategoryCS#emerg	"Emergency care" 
* HealthcareServiceCategoryCS#group	"Medical Provider"
* HealthcareServiceCategoryCS#home "Home Health" 
* HealthcareServiceCategoryCS#trans	"Transportation" 

// Example value set containing Plannet service-types relevant to social care services

ValueSet: HumanServiceTypeVS
Id: HumanServiceType
Title: "Human Service Type VS"
Description: "This example value set includes an subset of service-types codes included in the Plan-Net Healthcare Service Type value set (HealthcareServiceTypeVS)."
* ^publisher = "HL7 International - Human and Social Services Work Group"
* ^experimental = false
* ^status = #active
* ^contact.name = "HL7 International - Human and Social Services Work Group"
* ^contact.telecom.system = #url
* ^url = "http://hl7.org/fhir/us/hsds/ValueSet/HumanServiceType"
* $ServiceTypeCS#3 "Aged Care Information/Referral"
* $ServiceTypeCS#8 "Home Care/Housekeeping Assistance"
* $ServiceTypeCS#11 "Personal Care for Older Persons"
* $ServiceTypeCS#70 "Crisis Counselling"
* $ServiceTypeCS#105 "Drug and/or Alcohol Counselling"
* $ServiceTypeCS#106 "Drug/Alcohol Information/Referral"
* $ServiceTypeCS#111 "Residential Alcohol/Drug Treatment"
* $ServiceTypeCS#126 "Crisis/Emergency Accommodation"
* $ServiceTypeCS#128 "Housing Information/Referral"
* $ServiceTypeCS#130 "Interpreting/Multilingual Service"
* $ServiceTypeCS#146 "Physical Activity Programs"
* $ServiceTypeCS#230 "Patient Transport"
* $ServiceTypeCS#344 "Food"
* $ServiceTypeCS#530 "Disability Care Transport"
* $ServiceTypeCS#531 "Aged Care Transport"
* $ServiceTypeCS#532 "Diabetes Education s"
* $ServiceTypeCS#537 "Medication Reviews"
* $ServiceTypeCS#548 "Food Relief/Food/Meals"


// Example value set of Program types relevant to searching for social care services by the program under which they are provided

ValueSet: HumanServiceProgramVS
Id: HumanServiceProgram
Title: "Human Service Program VS"
Description: "This example value set includes codes that describe Programs under which community-based organizations can organize the social services they deliver."
* ^experimental = false
* ^status = #active
* ^publisher = "HL7 International - Human and Social Services Work Group"
* ^contact.name = "HL7 International - Human and Social Services Work Group"
* ^contact.telecom.system = #url
* ^url = "http://hl7.org/fhir/us/hsds/ValueSet/HumanServiceProgram"
* ^compose.include.system = "http://hl7.org/fhir/us/hsds/CodeSystem/HumanServiceProgramCS"
// * codes from system  HumanServiceProgramCS
* $HumanServiceProgramCS#CSFP "The Commodity Supplemental Food Program"
* $HumanServiceProgramCS#ForDisabled "Programs for Persons with Disabilities"
* $HumanServiceProgramCS#FoodAssistance "Food Assistance Program"
* $HumanServiceProgramCS#ForSeniors "Program for Seniors"
* $HumanServiceProgramCS#Homelessness "Homelessness Prevention Programs"
* $HumanServiceProgramCS#ONHPP "Nutrition and Health Promotion Programs"
* $HumanServiceProgramCS#SNAP "Suplemental Nutrition Assistance Program"
* $HumanServiceProgramCS#TANF "Temporary Assistance for Needy Families"
* $HumanServiceProgramCS#TEFAP "The Emergency Food Assistance Program"
* $HumanServiceProgramCS#WIC "Women, Infants, & Children"

// Example value set of Human Service Characteristic codes describing unique features associated with community-based social services

ValueSet: HumanServiceCharacteristicVS
Id: HumanServiceCharacteristic
Title: "Human Service Characteristic VS"
Description: "This example value set includes codes that describe unique features that can be associated with community-based social services delivered at particular locations."
* ^experimental = false
* ^status = #active
* ^publisher = "HL7 International - Human and Social Services Work Group"
* ^contact.name = "HL7 International - Human and Social Services Work Group"
* ^contact.telecom.system = #url
* ^jurisdiction = urn:iso:std:iso:3166#US
* ^url = "http://hl7.org/fhir/us/hsds/ValueSet/HumanServiceCharacteristic"
// * codes from system  HumanServiceCharacteristicCS
* ^compose.include.system = "http://hl7.org/fhir/us/hsds/CodeSystem/HumanServiceCharacteristicCS"
* $HumanServiceCharacteristicCS#Wheelchair "Wheelchair Access"
* $HumanServiceCharacteristicCS#Interpret "Interpretation Services"
* $HumanServiceCharacteristicCS#Computer "Computer & Internet Access"
* $HumanServiceCharacteristicCS#Baby "Diapers & Formula"

ValueSet: NonIndividualSpecialtiesVS
Id: NonIndividualSpecialties
Title: "Non-Individual Specialties"
Description: "Non-Individual Specialties from National Uniform Claim Committee (NUCC) Health Care Provider Taxonomy code set copied from Plan-Net used to allow example value set binding in HSDOrganization profile."
* ^experimental = false
* ^status = #active
* ^publisher = "HL7 International - Human and Social Services Work Group"
* ^contact.name = "HL7 International - Human and Social Services Work Group"
* ^contact.telecom.system = #url
* ^jurisdiction = urn:iso:std:iso:3166#US
* ^url = "http://hl7.org/fhir/us/hsds/ValueSet/NonIndividualSpecialties"
* $NUCCProviderTaxonomy#251300000X "Local Education Agency (LEA)"
* $NUCCProviderTaxonomy#251B00000X "Case Management Agency"
* $NUCCProviderTaxonomy#251C00000X "Developmentally Disabled Services Day Training Agency"
* $NUCCProviderTaxonomy#251E00000X "Home Health Agency"
* $NUCCProviderTaxonomy#251F00000X "Home Infusion Agency"
* $NUCCProviderTaxonomy#251G00000X "Community Based Hospice Care Agency"
* $NUCCProviderTaxonomy#251J00000X "Nursing Care Agency"
* $NUCCProviderTaxonomy#251K00000X "Public Health or Welfare Agency"
* $NUCCProviderTaxonomy#251S00000X "Community/Behavioral Health Agency"
* $NUCCProviderTaxonomy#251T00000X "PACE Provider Organization"
* $NUCCProviderTaxonomy#251V00000X "Voluntary or Charitable Agency"
* $NUCCProviderTaxonomy#251X00000X "Supports Brokerage Agency"
* $NUCCProviderTaxonomy#252Y00000X "Early Intervention Provider Agency"
* $NUCCProviderTaxonomy#253J00000X "Foster Care Agency"
* $NUCCProviderTaxonomy#253Z00000X "In Home Supportive Care Agency"
* $NUCCProviderTaxonomy#261Q00000X "Clinic/Center"
* $NUCCProviderTaxonomy#261QA0005X "Ambulatory Family Planning Facility"
* $NUCCProviderTaxonomy#261QA0006X "Ambulatory Fertility Facility"
* $NUCCProviderTaxonomy#261QA0600X "Adult Day Care Clinic/Center"
* $NUCCProviderTaxonomy#261QA0900X "Amputee Clinic/Center"
* $NUCCProviderTaxonomy#261QA1903X "Ambulatory Surgical Clinic/Center"
* $NUCCProviderTaxonomy#261QA3000X "Augmentative Communication Clinic/Center"
* $NUCCProviderTaxonomy#261QB0400X "Birthing Clinic/Center"
* $NUCCProviderTaxonomy#261QC0050X "Critical Access Hospital Clinic/Center"
* $NUCCProviderTaxonomy#261QC1500X "Community Health Clinic/Center"
* $NUCCProviderTaxonomy#261QC1800X "Corporate Health Clinic/Center"
* $NUCCProviderTaxonomy#261QD0000X "Dental Clinic/Center"
* $NUCCProviderTaxonomy#261QD1600X "Developmental Disabilities Clinic/Center"
* $NUCCProviderTaxonomy#261QE0002X "Emergency Care Clinic/Center"
* $NUCCProviderTaxonomy#261QE0700X "End-Stage Renal Disease (ESRD) Treatment Clinic/Center"
* $NUCCProviderTaxonomy#261QE0800X "Endoscopy Clinic/Center"
* $NUCCProviderTaxonomy#261QF0050X "Non-Surgical Family Planning Clinic/Center"
* $NUCCProviderTaxonomy#261QF0400X "Federally Qualified Health Center (FQHC)"
* $NUCCProviderTaxonomy#261QG0250X "Genetics Clinic/Center"
* $NUCCProviderTaxonomy#261QH0100X "Health Service Clinic/Center"
* $NUCCProviderTaxonomy#261QH0700X "Hearing and Speech Clinic/Center"
* $NUCCProviderTaxonomy#261QI0500X "Infusion Therapy Clinic/Center"
* $NUCCProviderTaxonomy#261QL0400X "Lithotripsy Clinic/Center"
* $NUCCProviderTaxonomy#261QM0801X "Mental Health Clinic/Center (Including Community Mental Health Center)"
* $NUCCProviderTaxonomy#261QM0850X "Adult Mental Health Clinic/Center"
* $NUCCProviderTaxonomy#261QM0855X "Adolescent and Children Mental Health Clinic/Center"
* $NUCCProviderTaxonomy#261QM1000X "Migrant Health Clinic/Center"
* $NUCCProviderTaxonomy#261QM1100X "Military/U.S. Coast Guard Outpatient Clinic/Center"
* $NUCCProviderTaxonomy#261QM1101X "Military and U.S. Coast Guard Ambulatory Procedure Clinic/Center"
* $NUCCProviderTaxonomy#261QM1102X "Military Outpatient Operational (Transportable) Component Clinic/Center"
* $NUCCProviderTaxonomy#261QM1103X "Military Ambulatory Procedure Visits Operational (Transportable) Clinic/Center"
* $NUCCProviderTaxonomy#261QM1200X "Magnetic Resonance Imaging (MRI) Clinic/Center"
* $NUCCProviderTaxonomy#261QM1300X "Multi-Specialty Clinic/Center"
* $NUCCProviderTaxonomy#261QM2500X "Medical Specialty Clinic/Center"
* $NUCCProviderTaxonomy#261QM2800X "Methadone Clinic"
* $NUCCProviderTaxonomy#261QM3000X "Medically Fragile Infants and Children Day Care"
* $NUCCProviderTaxonomy#261QP0904X "Federal Public Health Clinic/Center"
* $NUCCProviderTaxonomy#261QP0905X "State or Local Public Health Clinic/Center"
* $NUCCProviderTaxonomy#261QP1100X "Podiatric Clinic/Center"
* $NUCCProviderTaxonomy#261QP2000X "Physical Therapy Clinic/Center"
* $NUCCProviderTaxonomy#261QP2300X "Primary Care Clinic/Center"
* $NUCCProviderTaxonomy#261QP2400X "Prison Health Clinic/Center"
* $NUCCProviderTaxonomy#261QP3300X "Pain Clinic/Center"
* $NUCCProviderTaxonomy#261QR0200X "Radiology Clinic/Center"
* $NUCCProviderTaxonomy#261QR0206X "Mammography Clinic/Center"
* $NUCCProviderTaxonomy#261QR0207X "Mobile Mammography Clinic/Center"
* $NUCCProviderTaxonomy#261QR0208X "Mobile Radiology Clinic/Center"
* $NUCCProviderTaxonomy#261QR0400X "Rehabilitation Clinic/Center"
* $NUCCProviderTaxonomy#261QR0401X "Comprehensive Outpatient Rehabilitation Facility (CORF)"
* $NUCCProviderTaxonomy#261QR0404X "Cardiac Rehabilitation Clinic/Center"
* $NUCCProviderTaxonomy#261QR0405X "Substance Use Disorder Rehabilitation Clinic/Center"
* $NUCCProviderTaxonomy#261QR0800X "Recovery Care Clinic/Center"
* $NUCCProviderTaxonomy#261QR1100X "Research Clinic/Center"
* $NUCCProviderTaxonomy#261QR1300X "Rural Health Clinic/Center"
* $NUCCProviderTaxonomy#261QS0112X "Oral and Maxillofacial Surgery Clinic/Center"
* $NUCCProviderTaxonomy#261QS0132X "Ophthalmologic Surgery Clinic/Center"
* $NUCCProviderTaxonomy#261QS1000X "Student Health Clinic/Center"
* $NUCCProviderTaxonomy#261QS1200X "Sleep Disorder Diagnostic Clinic/Center"
* $NUCCProviderTaxonomy#261QU0200X "Urgent Care Clinic/Center"
* $NUCCProviderTaxonomy#261QV0200X "VA Clinic/Center"
* $NUCCProviderTaxonomy#261QX0100X "Occupational Medicine Clinic/Center"
* $NUCCProviderTaxonomy#261QX0200X "Oncology Clinic/Center"
* $NUCCProviderTaxonomy#261QX0203X "Radiation Oncology Clinic/Center"
* $NUCCProviderTaxonomy#273100000X "Epilepsy Hospital Unit"
* $NUCCProviderTaxonomy#273R00000X "Psychiatric Hospital Unit"
* $NUCCProviderTaxonomy#273Y00000X "Rehabilitation Hospital Unit"
* $NUCCProviderTaxonomy#275N00000X "Medicare Defined Swing Bed Hospital Unit"
* $NUCCProviderTaxonomy#276400000X "Substance Use Disorder Rehabilitation Hospital Unit"
* $NUCCProviderTaxonomy#281P00000X "Chronic Disease Hospital"
* $NUCCProviderTaxonomy#281PC2000X "Children' s Chronic Disease Hospital"
* $NUCCProviderTaxonomy#282E00000X "Long Term Care Hospital"
* $NUCCProviderTaxonomy#282J00000X "Religious Nonmedical Health Care Institution"
* $NUCCProviderTaxonomy#282N00000X "General Acute Care Hospital"
* $NUCCProviderTaxonomy#282NC0060X "Critical Access Hospital"
* $NUCCProviderTaxonomy#282NC2000X "Children's Hospital"
* $NUCCProviderTaxonomy#282NR1301X "Rural Acute Care Hospital"
* $NUCCProviderTaxonomy#282NW0100X "Women's Hospital"
* $NUCCProviderTaxonomy#283Q00000X "Psychiatric Hospital"
* $NUCCProviderTaxonomy#283X00000X "Rehabilitation Hospital"
* $NUCCProviderTaxonomy#283XC2000X "Children's Rehabilitation Hospital"
* $NUCCProviderTaxonomy#284300000X "Special Hospital"
* $NUCCProviderTaxonomy#286500000X "Military Hospital"
* $NUCCProviderTaxonomy#2865M2000X "Military General Acute Care Hospital"
* $NUCCProviderTaxonomy#2865X1600X "Operational (Transportable) Military General Acute Care Hospital"
* $NUCCProviderTaxonomy#291900000X "Military Clinical Medical Laboratory"
* $NUCCProviderTaxonomy#291U00000X "Clinical Medical Laboratory"
* $NUCCProviderTaxonomy#292200000X "Dental Laboratory"
* $NUCCProviderTaxonomy#293D00000X "Physiological Laboratory"
* $NUCCProviderTaxonomy#302F00000X "Exclusive Provider Organization"
* $NUCCProviderTaxonomy#302R00000X "Health Maintenance Organization"
* $NUCCProviderTaxonomy#305R00000X "Preferred Provider Organization"
* $NUCCProviderTaxonomy#305S00000X "Point of Service"
* $NUCCProviderTaxonomy#310400000X "Assisted Living Facility"
* $NUCCProviderTaxonomy#3104A0625X "Assisted Living Facility (Mental Illness)"
* $NUCCProviderTaxonomy#3104A0630X "Assisted Living Facility (Behavioral Disturbances)"
* $NUCCProviderTaxonomy#310500000X "Mental Illness Intermediate Care Facility"
* $NUCCProviderTaxonomy#311500000X "Alzheimer Center (Dementia Center)"
* $NUCCProviderTaxonomy#311Z00000X "Custodial Care Facility"
* $NUCCProviderTaxonomy#311ZA0620X "Adult Care Home Facility"
* $NUCCProviderTaxonomy#313M00000X "Nursing Facility/Intermediate Care Facility"
* $NUCCProviderTaxonomy#314000000X "Skilled Nursing Facility"
* $NUCCProviderTaxonomy#3140N1450X "Pediatric Skilled Nursing Facility"
* $NUCCProviderTaxonomy#315D00000X "Inpatient Hospice"
* $NUCCProviderTaxonomy#315P00000X "Intellectual Disabilities Intermediate Care Facility"
* $NUCCProviderTaxonomy#174200000X "Meals Provider"
* $NUCCProviderTaxonomy#177F00000X "Lodging Provider"
* $NUCCProviderTaxonomy#320600000X "Intellectual and/or Developmental Disabilities Residential Treatment Facility"
* $NUCCProviderTaxonomy#320700000X "Physical Disabilities Residential Treatment Facility"
* $NUCCProviderTaxonomy#320800000X "Mental Illness Community Based Residential Treatment Facility"
* $NUCCProviderTaxonomy#320900000X "Intellectual and/or Developmental Disabilities Community Based Residential Treatment Facility"
* $NUCCProviderTaxonomy#322D00000X "Emotionally Disturbed Childrens' Residential Treatment Facility"
* $NUCCProviderTaxonomy#323P00000X "Psychiatric Residential Treatment Facility"
* $NUCCProviderTaxonomy#324500000X "Substance Abuse Rehabilitation Facility"
* $NUCCProviderTaxonomy#3245S0500X "Children's Substance Abuse Rehabilitation Facility"
* $NUCCProviderTaxonomy#385H00000X "Respite Care"
* $NUCCProviderTaxonomy#385HR2050X "Respite Care Camp"
* $NUCCProviderTaxonomy#385HR2055X "Child Mental Illness Respite Care"
* $NUCCProviderTaxonomy#385HR2060X "Child Intellectual and/or Developmental Disabilities Respite Care"
* $NUCCProviderTaxonomy#385HR2065X "Child Physical Disabilities Respite Care"
* $NUCCProviderTaxonomy#331L00000X "Blood Bank"
* $NUCCProviderTaxonomy#332000000X "Military/U.S. Coast Guard Pharmacy"
* $NUCCProviderTaxonomy#332100000X "Department of Veterans Affairs (VA) Pharmacy"
* $NUCCProviderTaxonomy#332800000X "Indian Health Service/Tribal/Urban Indian Health (I/T/U) Pharmacy"
* $NUCCProviderTaxonomy#332900000X "Non-Pharmacy Dispensing Site"
* $NUCCProviderTaxonomy#332B00000X "Durable Medical Equipment & Medical Supplies"
* $NUCCProviderTaxonomy#332BC3200X "Customized Equipment (DME)"
* $NUCCProviderTaxonomy#332BD1200X "Dialysis Equipment & Supplies (DME)"
* $NUCCProviderTaxonomy#332BN1400X "Nursing Facility Supplies (DME)"
* $NUCCProviderTaxonomy#332BP3500X "Parenteral & Enteral Nutrition Supplies (DME)"
* $NUCCProviderTaxonomy#332BX2000X "Oxygen Equipment & Supplies (DME)"
* $NUCCProviderTaxonomy#332G00000X "Eye Bank"
* $NUCCProviderTaxonomy#332H00000X "Eyewear Supplier"
* $NUCCProviderTaxonomy#332S00000X "Hearing Aid Equipment"
* $NUCCProviderTaxonomy#332U00000X "Home Delivered Meals"
* $NUCCProviderTaxonomy#333300000X "Emergency Response System Companies"
* $NUCCProviderTaxonomy#333600000X "Pharmacy"
* $NUCCProviderTaxonomy#3336C0002X "Clinic Pharmacy"
* $NUCCProviderTaxonomy#3336C0003X "Community/Retail Pharmacy"
* $NUCCProviderTaxonomy#3336C0004X "Compounding Pharmacy"
* $NUCCProviderTaxonomy#3336H0001X "Home Infusion Therapy Pharmacy"
* $NUCCProviderTaxonomy#3336I0012X "Institutional Pharmacy"
* $NUCCProviderTaxonomy#3336L0003X "Long Term Care Pharmacy"
* $NUCCProviderTaxonomy#3336M0002X "Mail Order Pharmacy"
* $NUCCProviderTaxonomy#3336M0003X "Managed Care Organization Pharmacy"
* $NUCCProviderTaxonomy#3336N0007X "Nuclear Pharmacy"
* $NUCCProviderTaxonomy#3336S0011X "Specialty Pharmacy"
* $NUCCProviderTaxonomy#335E00000X "Prosthetic/Orthotic Supplier"
* $NUCCProviderTaxonomy#335G00000X "Medical Foods Supplier"
* $NUCCProviderTaxonomy#335U00000X "Organ Procurement Organization"
* $NUCCProviderTaxonomy#335V00000X "Portable X-ray and/or Other Portable Diagnostic Imaging Supplier"
* $NUCCProviderTaxonomy#341600000X "Ambulance"
* $NUCCProviderTaxonomy#3416A0800X "Air Ambulance"
* $NUCCProviderTaxonomy#3416L0300X "Land Ambulance"
* $NUCCProviderTaxonomy#3416S0300X "Water Ambulance"
* $NUCCProviderTaxonomy#341800000X "Military/U.S. Coast Guard Transport,"
* $NUCCProviderTaxonomy#3418M1110X "Military or U.S. Coast Guard Ground Transport Ambulance"
* $NUCCProviderTaxonomy#3418M1120X "Military or U.S. Coast Guard Air Transport Ambulance"
* $NUCCProviderTaxonomy#3418M1130X "Military or U.S. Coast Guard Water Transport Ambulance"
* $NUCCProviderTaxonomy#342000000X "Transportation Network Company"   // added effective 04/21/21
* $NUCCProviderTaxonomy#343800000X "Secured Medical Transport (VAN)"
* $NUCCProviderTaxonomy#343900000X "Non-emergency Medical Transport (VAN)"
* $NUCCProviderTaxonomy#344600000X "Taxi"
* $NUCCProviderTaxonomy#344800000X "Air Carrier"
* $NUCCProviderTaxonomy#347B00000X "Bus"
* $NUCCProviderTaxonomy#347C00000X "Private Vehicle"
* $NUCCProviderTaxonomy#347D00000X "Train"
* $NUCCProviderTaxonomy#347E00000X "Transportation Broker"


---

// File: input/fsh/examples.fsh

Alias: $NarrativeStatus = http://hl7.org/fhir/narrative-status
Alias: LANGUAGE = urn:ietf:bcp:47
Alias: $PlannetCategoryCS = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS
Alias: $PlannetTypeCS = http://terminology.hl7.org/CodeSystem/service-type
Alias: $ROLECODE = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: IdentifierUse = http://hl7.org/fhir/identifier-use
Alias: IdentifierType = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: ContactPointUse = http://hl7.org/fhir/contact-point-use
Alias: ContactNameUse = http://hl7.org/fhir/name-use
Alias: HSDOrganization = http://hl7.org/fhir/us/hsds/StructureDefinition/hsds-Organization
Alias: $QualificationStatusCS = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/QualificationStatusCS
Alias: $NUCCProviderTaxonomy  = http://nucc.org/provider-taxonomy
Alias: $HumanServiceProgramCS = http://hl7.org/fhir/us/hsds/CodeSystem/HumanServiceProgramCS
Alias: $HumanServiceCharacteristicCS = http://hl7.org/fhir/us/hsds/CodeSystem/HumanServiceCharacteristicCS


Instance: FoodBank
InstanceOf: HSDOrganization
Description: "Community-Based Organization that provides food pantry services. Since the HSDS source for Organizations does not include organization address, address information has been omitted from the examples. Address information is associated with the locations at which services provided by community-based organizations are provided. In addition, information that is mapped from the HSDS Contact table is mapped to a new extension: OrgContactInfo."     
Usage: #example
* meta.profile = Canonical(HSDOrganization) 
* meta.lastUpdated = "2023-08-24T11:26:22.0314215+00:00"
* active = true
* name = "Redwood Food Bank"
* type = OrgTypeCS#atyprv "Atypical Provider"
* alias = "Food Bank of the Redwoods"
* telecom[0].system = #phone
* telecom[0].value = "(999)-222-3333"
* telecom[0].use = ContactPointUse#work "work"
// Since this is a GAP in HSDS, the contactpoint extension is not relevant to Organizations (the HSDS schedule table only contains details of when a service or location is open)
* telecom[1].system = #url
* telecom[1].value = "https://redwoodfoodbank.org/"
* telecom[1].use = ContactPointUse#work "work"
// address is excluded because there is no source in HSDS organization table
* extension[org-description].valueString = "This community services agency distributes over a ton of food each work day to low income individuals and families throughout Northern California."
* identifier[IRS].use = IdentifierUse#official
* identifier[IRS].type = IdentifierType#TAX
* identifier[IRS].value =  "xx-xxxxxxx"
* identifier[IRS].assigner.display = "http://www.irs.gov"
* identifier[IRS].period.start = 2010-07-01
* contact.telecom.system = #phone
* contact.telecom.value = "(999)-111-2231"
* contact.telecom.use = ContactPointUse#work "work"
* contact.name.use = ContactNameUse#usual "usual"
* contact.name.family = "Smith"
* contact.name.given = "Gerald"
* contact.telecom.extension[org-contactinfo].extension[title].valueString = "Food Bank Director"
* contact.telecom.extension[org-contactinfo].extension[department].valueString = "Executive Services"
* contact.telecom.extension[org-contactinfo].extension[email].valueString = "gsmith@redwoodfoodbank.org"

Instance: SFCrisisAndDomesticHotline
InstanceOf: HSDOrganization
Description: "Community-Based Organization that provides emergency crisis hotline services. Since the HSDS source for Organizations does not include organization address, address information has been omitted from the examples. Address information is associated with the locations at which services provided by community-based organizations are provided. In addition, information that is mapped from the HSDS Contact table is mapped to a new extension: OrgContactInfo."     
Usage: #example
* meta.profile = Canonical(HSDOrganization) 
* meta.lastUpdated = "2023-08-26T11:26:22.0314215+00:00"
* active = true
* name = "Crisis Hotline of San Francisco"
* type = OrgTypeCS#atyprv "Atypical Provider"
* alias = "SF Domestic Crisis Hotline"
* telecom[0].system = #phone
* telecom[0].value = "(999)-123-4567"
* telecom[0].use = ContactPointUse#work "work"
// Since this is a GAP in HSDS, the contactpoint extension is not relevant to Organizations (the HSDS schedule table only contains details of when a service or location is open)
* telecom[1].system = #url
* telecom[1].value = "https://SF911forall.org/"
* telecom[1].use = ContactPointUse#work "work"
// address is excluded because there is no source in HSDS organization table
* extension[org-description].valueString = "This community services agency serves residents of San Francisco and responds to requests for help with obtaining restraining orders, shelter, or legal aid agencies that help people ask for a restraining order."
* identifier[IRS].use = IdentifierUse#official
* identifier[IRS].type = IdentifierType#TAX
* identifier[IRS].value =  "xx-xxxxxxx"
* identifier[IRS].assigner.display = "http://www.irs.gov"
* identifier[IRS].period.start = 2020-01-01
* contact.telecom.system = #phone
* contact.telecom.value = "(999)-987-6543"
* contact.telecom.use = ContactPointUse#work "work"
* contact.name.use = ContactNameUse#usual "usual"
* contact.name.family = "Conrad"
* contact.name.given = "Arthur"
* contact.telecom.extension[org-contactinfo].extension[title].valueString = "Crisis Center Director"
* contact.telecom.extension[org-contactinfo].extension[department].valueString = "Domestic Violence Services"
* contact.telecom.extension[org-contactinfo].extension[email].valueString = "aconrad@SF911forall.org"


Instance: WhistlestopWheels
InstanceOf: HSDOrganization
Description: "Community-Based Organization that provides food pantry services. Since the HSDS source for Organizations does not include organization address, address information has been omitted from the examples. Address information is associated with the locations at which services provided by community-based organizations are provided. In addition, information that is mapped from the HSDS Contact table is mapped to a new extension: OrgContactInfo."     
Usage: #example
* meta.profile = Canonical(HSDOrganization) 
* meta.lastUpdated = "2023-08-24T11:26:22.0314215+00:00"
* active = true
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">     <p><b>Extensions Narrative: Organization</b><a name=\"WhistlestopWheels\"> </a></p>     <div         style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\">         <p style=\"margin-bottom: 0px\">Resource Organization &quot;WhistlestopWheels&quot;             Updated &quot;2023-08-24 11:26:22+0000&quot; </p>         <p style=\"margin-bottom: 0px\">Profile: <a             href=\"StructureDefinition-hsds-Organization.html\">HSDOrganization</a></p>     </div>     <p><b>Org Description</b>: This community services agency contracts with various         organizations to provide transport services for the elderly and low-income clients,         to and from medical appointments, various assisted living facilities, as well as to         grocery shopping and other activites to stay active and connected.</p>     <p><b>qualification: </b></p>     <blockquote><b>url: </b><a href=\"http://hl7.org/fhir/R4/datatypes.html#code\">code     </a><b>, value:</b> Transportation Network Company <span         style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\">         (provider-taxonomy#342000000X)</span><p><b>url: </b><code>status</code><b>,             value: </b> active </p></blockquote>     <p><b>identifier</b>: Tax ID number:         xx-xxxxxxx\u00a0(use:\u00a0OFFICIAL,\u00a0period:\u00a02020-11-01 --&gt;         (ongoing))</p>     <p><b>active</b>: true</p>     <p><b>type</b>: Atypical Provider <span         style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\">         (<a             href=\"http://hl7.org/fhir/us/davinci-pdex-plan-net/STU1.1/CodeSystem-OrgTypeCS.html\"             >Organization Type</a>#atyprv)</span></p>     <p><b>name</b>: Whistlestop Wheels</p>     <p><b>telecom</b>: ph: (999)-222-9999(WORK), <a href=\"https://whistlestop.org/\"         >https://whistlestop.org/</a></p>     <p><b>contact</b></p>     <blockquote><p><b>name</b>: Harry Cunningham </p><p><b>telecom</b>: ph:         (999)-555-2222(WORK)</p></blockquote>     <p><b>contact</b></p>     <blockquote><p><b>name</b>: Samantha Ryan </p><p><b>telecom</b>: ph:         (999)-555-7321(WORK)</p></blockquote> </div>"
* text.status = $NarrativeStatus#extensions "Extensions"
* name = "Whistlestop Wheels"
* type = OrgTypeCS#atyprv "Atypical Provider"
* telecom[0].system = #phone
* telecom[0].value = "(999)-222-9999"
* telecom[0].use = ContactPointUse#work "work"
// Since extension is a GAP in HSDS, the contactpoint extension is not relevant to Organizations (the HSDS schedule table only contains details of when a service or location is open)
* telecom[1].system = #url
* telecom[1].value = "https://whistlestop.org/"
* telecom[1].use = ContactPointUse#work "work"
// Description of the organization
* extension[org-description].valueString = "This community services agency contracts with various organizations to provide transport services for the elderly and low-income clients, to and from medical appointments, various assisted living facilities, as well as to grocery shopping and other activites to stay active and connected."
// Community-based organizations identified using their IRS Tax ID at the present time
* identifier[IRS].use = IdentifierUse#official
* identifier[IRS].type = IdentifierType#TAX
* identifier[IRS].value =  "xx-xxxxxxx"
* identifier[IRS].period.start = 2020-11-01
* identifier[IRS].assigner.display = "http://www.irs.gov"
* contact.name.use = ContactNameUse#usual "usual"
* contact.name.family = "Cunningham"
* contact.name.given = "Harry"
* contact.telecom.extension[org-contactinfo].extension[title].valueString = "Manager, Automotive Repairs"
* contact.telecom.extension[org-contactinfo].extension[department].valueString = "Transportation Services"
* contact.telecom.extension[org-contactinfo].extension[email].valueString = "sryan@whistlestop.org"
* contact.telecom.system = #phone
* contact.telecom.value = "(999)-555-2222"
* contact.telecom.use = ContactPointUse#work "work"
* contact[1].name.use = ContactNameUse#usual "usual"
* contact[1].name.family = "Ryan"
* contact[1].name.given = "Samantha"
* contact[1].telecom.extension[org-contactinfo].extension[title].valueString = "Director, Transportation Services"
* contact[1].telecom.extension[org-contactinfo].extension[department].valueString = "Executive Services"
* contact[1].telecom.extension[org-contactinfo].extension[email].valueString = "sryan@whistlestop.org"
* contact[1].telecom.system = #phone
* contact[1].telecom.value = "(999)-555-7321"
* contact[1].telecom.use = ContactPointUse#work "work"
* extension[qualification].extension[code].valueCodeableConcept = $NUCCProviderTaxonomy#342000000X "Transportation Network Company"
* extension[qualification].extension[status].valueCode = #active


Instance: FoodBankLocation
InstanceOf: HSDLocation 
Description: "Locations associated with services provided by the Redwood Food Bank" 
Usage: #example    
* meta.profile = Canonical(HSDLocation) 
* meta.lastUpdated = "2023-08-24T13:26:22.0314215+00:00"
* status = #active 
* name = "Redwood Food Bank of Anytown California"
* managingOrganization = Reference(FoodBank)
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#handiaccess "handicap accessible"
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#pubtrans "public transit options"
* telecom.system = #phone
* telecom.value = "(999)-555-4401"
* telecom.use = ContactPointUse#work "work"
* address.line[0] = "123 Main Street"
* address.city = "Anytown"
* address.state = "CA"
* address.postalCode = "99999"
* address.district = "Sonoma"
* position.longitude =  38.294788
* position.latitude = -122.461510
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].daysOfWeek[4]  = #fri 
* hoursOfOperation[0].openingTime = 08:00:00
* hoursOfOperation[0].closingTime = 20:00:00
* hoursOfOperation[1].daysOfWeek[0]  = #sat
* hoursOfOperation[1].daysOfWeek[1]  = #sun
* hoursOfOperation[1].openingTime = 08:00:00
* hoursOfOperation[1].closingTime = 17:00:00

Instance: MealsOnWheelsLocation
InstanceOf: HSDLocation 
Description: "Locations associated with services provided by Meals on Wheels" 
Usage: #example    
* meta.profile = Canonical(HSDLocation) 
* meta.lastUpdated = "2020-08-26T13:26:22.0314215+00:00"
* status = #active 
* name = "Meals on Wheels Delivery by Whistlestop Wheels"
* managingOrganization = Reference(FoodBank)
* extension[accessibility][1].valueCodeableConcept = AccessibilityCS#cultcomp "Cultural competence"
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp "ADA compliant"
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#cognitive "cognitive"
* telecom.system = #phone
* telecom.value = "(999)-555-9827"
* telecom.use = ContactPointUse#work "work"
* address.line[0] = "282 Broadway"
* address.city = "Anytown"
* address.state = "CA"
* address.postalCode = "99999"
* address.district = "Yolo"
* position.longitude = 121.9018
* position.latitude = 38.732967
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].daysOfWeek[4]  = #fri
* hoursOfOperation[0].openingTime = 08:00:00
* hoursOfOperation[0].closingTime = 20:00:00
* hoursOfOperation[1].daysOfWeek[0]  = #sat
* hoursOfOperation[1].daysOfWeek[1]  = #sun
* hoursOfOperation[1].openingTime = 08:00:00
* hoursOfOperation[1].closingTime = 16:00:00


Instance: WhistlestopwheelsLocation
InstanceOf: HSDLocation 
Description: "Locations associated with transportation services provided by Whistlestop Wheels" 
Usage: #example    
* meta.profile = Canonical(HSDLocation) 
* meta.lastUpdated = "2020-08-26T13:26:22.0314215+00:00"
* status = #active 
* name = "Whistlestop Wheels of Anytown USA"
* managingOrganization = Reference(WhistlestopWheels)
* extension[accessibility][1].valueCodeableConcept = AccessibilityCS#mobility
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp
* telecom.system = #phone
* telecom.value = "(999)-555-9528"
* telecom.use = ContactPointUse#work "work"
* address.line[0] = "999 South Avenue"
* address.city = "Anytown"
* address.state = "CA"
* address.postalCode = "99999"
* address.district = "Marin"
* position.longitude = -122.7400
* position.latitude = 38.0400
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].daysOfWeek[4]  = #fri 
* hoursOfOperation[0].openingTime = 08:00:00
* hoursOfOperation[0].closingTime = 20:00:00
* hoursOfOperation[1].daysOfWeek[0]  = #sat
* hoursOfOperation[1].daysOfWeek[1]  = #sun
* hoursOfOperation[1].openingTime = 08:00:00
* hoursOfOperation[1].closingTime = 17:00:00

Instance: SF9114AllLocation
InstanceOf: HSDLocation 
Description: "Locations associated with crisis and domestic violence services provided by Whistlestop Wheels" 
Usage: #example    
* meta.profile = Canonical(HSDLocation) 
* meta.lastUpdated = "2020-08-24T13:26:22.0314215+00:00"
* status = #active 
* name = "Crisis and Domestic Violence Services of San Francisco (SF9114All)"
* managingOrganization = Reference(WhistlestopWheels)
* telecom[0].system = #phone
* telecom[0].value = "(999)-415-3333"
* telecom[0].use = ContactPointUse#work "work"
* extension[accessibility][1].valueCodeableConcept = AccessibilityCS#mobility
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp
* address.line[0] = "999 South Avenue"
* address.city = "Anytown"
* address.state = "CA"
* address.postalCode = "99999"
* address.district = "Marin"
* position.longitude = -122.7400
* position.latitude = 38.0400
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].daysOfWeek[4]  = #fri
// * hoursOfOperation[0].allDay = true
* hoursOfOperation[0].daysOfWeek[5]  = #sat
* hoursOfOperation[0].daysOfWeek[6]  = #sun
* hoursOfOperation[0].allDay = true


Instance: MealsOnWheels
InstanceOf: HSDHealthcareService
Description: "Food assistance provided to the elderly and low income at their homes."
Usage: #example
* meta.profile =  Canonical(HSDHealthcareService) 
* meta.lastUpdated = "2023-08-24T11:26:22.0314215+00:00"
* active = true
* name = "Meals on Wheels"
* category = $PlannetCategoryCS#home "Home Health"
* type = $PlannetTypeCS#548 "Food Relief/Food/Meals"
* telecom[0].system = #phone
* telecom[0].value = "(999)-555-3241"
* telecom[0].use = ContactPointUse#work "work"
* telecom[1].system = #url
* telecom[1].value = "https://whistlestop.org/"
* telecom[1].use = ContactPointUse#work "work"
* telecom[2].system = #email
* telecom[2].value = "andysmith@whistlestop.org"
* telecom[2].use = ContactPointUse#work "work"
* providedBy = Reference(FoodBank)
* location[0] = Reference(FoodBankLocation)
* location[1] = Reference(MealsOnWheelsLocation)
* program[0] = $HumanServiceProgramCS#ONHPP "Nutrition and Health Promotion Programs"
* program[1] = $HumanServiceProgramCS#SNAP "Suplemental Nutrition Assistance Program"
* characteristic[0] = $HumanServiceCharacteristicCS#Wheelchair "Wheelchair Access"
* characteristic[1] = $HumanServiceCharacteristicCS#Interpret "Interpretation Services"
* communication[0] = LANGUAGE#es "Spanish"
* communication[1] = LANGUAGE#en-US "English (United States)"
* communication[2] = LANGUAGE#zh "Chinese"

Instance: WhistlestopTransportationService
InstanceOf: HSDHealthcareService
Description: "Transportation services for the disabled and elderly."
Usage: #example
* meta.profile =  Canonical(HSDHealthcareService) 
* meta.lastUpdated = "2023-08-24T11:26:22.0314215+00:00"
* active = true
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">     <p><b>Extensions Narrative: HealthcareService</b></p>     <div         style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\">         <p style=\"margin-bottom: 0px\">Resource HealthcareService             &quot;WhistlestopTransportationService&quot; Updated &quot;2023-08-24             11:26:22+0000&quot; </p>         <p style=\"margin-bottom: 0px\">Profile: <a                 href=\"StructureDefinition-hsds-HealthcareService.html\">HSDHealthcareService</a></p>     </div>     <p><b>active</b>: true</p>     <p><b>providedBy</b>: <a href=\"Organization-WhistlestopWheels.html\"             >Organization/WhistlestopWheels</a> &quot;Whistlestop Wheels&quot;</p>     <p><b>category</b>: Transportation <span             style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a                 href=\"http://hl7.org/fhir/us/davinci-pdex-plan-net/STU1.1/CodeSystem-HealthcareServiceCategoryCS.html\"                 >Healthcare Service Category</a>#trans)</span></p>     <p><b>type</b>: Aged Care Transport <span             style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a                 href=\"http://terminology.hl7.org/CodeSystem/service-type\">Service                 type</a>#531)</span></p>     <p><b>location</b>: <a href=\"Location-WhistlestopwheelsLocation.html\"             >Location/WhistlestopwheelsLocation</a> &quot;Whistlestop Wheels of Anytown         USA&quot;</p>     <p><b>name</b>: Whistlestop Transportation Services</p>     <p><b>contact</b></p>     <blockquote><p><b>name</b>: Harry Cunningham</p><p><b>title </b>: Director, Transportation             Services</p><p><b>department</b>: Executive Staff</p><p><b>email</b>:             hcunningham@whistlestopwheels.org</p><p><b>phone</b>:         (999)-555-2222(WORK)</p></blockquote>     <p><b>program</b>: Programs for Persons with Disabilities <span             style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a                 href=\"CodeSystem-HumanServiceProgramCS.html\">Human Service             Program</a>#ForDisabled)</span></p>     <p><b>characteristic</b>: Interpretation Services <span             style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a                 href=\"CodeSystem-HumanServiceCharacteristicCS.html\">Human Service             Characteristic</a>#Interpret)</span></p>     <p><b>communication</b>: Spanish <span             style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a                 href=\"https://terminology.hl7.org/CodeSystem-v3-ietf3066.html\">Tags for the                 Identification of Languages</a>#es)</span>, English (United States) <span             style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a                 href=\"https://terminology.hl7.org/CodeSystem-v3-ietf3066.html\">Tags for the                 Identification of Languages</a>#en-US)</span></p> </div> "
* text.status = $NarrativeStatus#extensions "Extensions"
* name = "Whistlestop Transportation Services"
* category = $PlannetCategoryCS#trans "Transportation"
* type = $PlannetTypeCS#531 "Aged Care Transport"
* telecom[0].system = #phone
* telecom[0].value = "(999)-555-8645"
* telecom[0].use = ContactPointUse#work "work"
* providedBy = Reference(WhistlestopWheels)
* location = Reference(WhistlestopwheelsLocation)
* characteristic = $HumanServiceCharacteristicCS#Interpret "Interpretation Services"
* program = $HumanServiceProgramCS#ForDisabled "Programs for Persons with Disabilities"
* communication[0] = LANGUAGE#es "Spanish"
* communication[1] = LANGUAGE#en-US "English (United States)"
* telecom.extension[service-contactinfo].extension[name].valueString = "Harry Cunningham"
* telecom.extension[service-contactinfo].extension[title].valueString = "Director of Transportation Services"
* telecom.extension[service-contactinfo].extension[department].valueString = "Executive Staff"
* telecom.extension[service-contactinfo].extension[email].valueString = "cunninghamh@whistlestopwheels.org"

Instance: FoodPantryService
InstanceOf: HSDHealthcareService
Description: "Food Pantry Services provided by a Community-Based Organization (CBO)"
Usage: #example
* meta.profile =  Canonical(HSDHealthcareService) 
* meta.lastUpdated = "2023-08-24T11:26:22.0314215+00:00"
* active = true
* name = "Food Pantry Service"
* category = $PlannetCategoryCS#home "Home Health"
* type = $PlannetTypeCS#344 "Food"
* telecom[0].system = #phone
* telecom[0].value = "(999)-914-8873"
* telecom[0].use = ContactPointUse#work "work"
* providedBy = Reference(FoodBank)
* location[0] = Reference(FoodBankLocation)
* program = $HumanServiceProgramCS#TEFAP "The Emergency Food Assistance Program"
* characteristic = $HumanServiceCharacteristicCS#Interpret "Interpretation Services"
* communication[0] = LANGUAGE#es "Spanish"
* communication[1] = LANGUAGE#ru "Russian"
* communication[2] = LANGUAGE#en-US "English (United States)"

Instance: SFCrisisAndDomesticHotlineServices
InstanceOf: HSDHealthcareService
Description: "Crisis Hotline Services provided by the Crisis Hotline of San Francisco"
Usage: #example
* meta.profile =  Canonical(HSDHealthcareService) 
* meta.lastUpdated = "2023-08-26T11:26:22.0314215+00:00"
* active = true
* name = "Crisis and Domestic Hotline"
* category = $PlannetCategoryCS#emerg "Emergency care"
* type = $PlannetTypeCS#70 "Crisis Counselling"
* telecom[0].system = #phone
* telecom[0].value = "(999)-555-5028"
* telecom[0].use = ContactPointUse#work "work"
* providedBy = Reference(SFCrisisAndDomesticHotline)
* location = Reference(SF9114AllLocation)
* program = $HumanServiceProgramCS#WIC "Women, Infants, & Children"
* characteristic = $HumanServiceCharacteristicCS#Interpret "Interpretation Services"
* communication[0] = LANGUAGE#es "Spanish"
* communication[1] = LANGUAGE#zh "Chinese"
* communication[2] = LANGUAGE#ru "Russian"
* communication[3] = LANGUAGE#en-US "English (United States)"

---

