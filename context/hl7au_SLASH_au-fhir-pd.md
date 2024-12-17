// File: input/pagecontent/capstatements.md

### Scope of Resource Profiles

A subset of FHIR resource types are used in this specification. These are profiled to ensure minimal elements needed for secure messaging are supported by the directory service.

* **Location** is physical location, where service delivery occurs.
* **Organization** is an entity providing practitioner roles and/or healthcare service.
* **PractitionerRole** (provider) is a practitioner acting roles at one location for one organisation.
* **Practitioner** details of an individual that maybe acting in a practitioner role.
* **HealthcareService** describes the services delivered at one location for one organisation.


### Service Interactions Overview

A subset of FHIR possible interactions are required for this specification. This applies to core directory services offered by a directory 
provider and also federated services combining results from multiple directory service sources.

----------
#### Instance Level Interactions	

* **[read](http://hl7.org/fhir/R4/http.html#read)** PractitionerRole, Practitioner, HealthcareService, Location, Organization, Endpoint
* **vread** Not Required 
* **update** Not Required
* **patch** Not Required
* **delete** Not Required
* **history** Not Required

----------
#### Type Level Interactions

* **create** Not Required
* **[search](http://hl7.org/fhir/R4/http.html#search)** PractitionerRole, Practitioner, HealthcareService, Location, Organization, Endpoint
* **history** Not Required

----------
#### Whole System Interactions

* **capabilities** Required
* **batch/transaction** Not Required
* **history** Not Required
* **search** Not required

----------
#### Type Level Search

Expected scope of search/include support:

|Resource Type|Profile|MUST Support Search Parameters|SHOULD Support Search Parameters|Includes|
|---|---|---|---|---|
|[Organization](StructureDefinition-au-pd-organisation.html#notes)| Australian Organisation Directory Entry | active, name | identifier ||
|[Practitioner](StructureDefinition-au-pd-practitioner.html#notes)| Australian Practitioner Directory Entry | active | identifier, family, given, name ||
|[PractitionerRole](StructureDefinition-au-pd-practitionerrole.html#notes)| Australian PractitionerRole Directory Entry | active, role, specialty, identifier, healthcareService, location.address-city, location.address-postalcode, location.address-state, organization.identifier, practitioner.family, practitioner.given, practitioner.name, practitioner.identifier, endpoint.connection-type, endpoint.payload-type | location.near, location.near-distance | location, organization, endpoint, practitioner, healthcareService |
|[HealthcareService](StructureDefinition-au-pd-healthcareservice.html#notes)| Australian HealthcareService Directory Entry | active, identifier, name, service-type, specialty, location.address-city, location.address-postalcode, location.address-state, organization.name, organization.identifier, endpoint.connection-type, endpoint.payload-type | location.near, location.near-distance | location, organization, endpoint |
|[Location](StructureDefinition-au-pd-location.html#notes)| Australian Location Directory Entry | status | address-city, address-postalcode, address-state, near, near-distance ||
|[Endpoint](StructureDefinition-au-pd-sm-endpoint.html#notes)| Australian Endpoint Directory Entry | status, identifier, connection-type, payload-type, au-receivingfacility-namespace-id, au-receivingfacility-universal-id, au-receivingfacility-universal-id-type |||
{:.grid}

Expected adherence to search parameters:
* FHIR [search](http://hl7.org/fhir/R4/http.html#search) _include parameter MUST be supported to the extent described in above table.
* FHIR [search](http://hl7.org/fhir/R4/http.html#search) _count parameter MUST be honoured by directory service provider to limit the result count as requested by client consumers.

Expected Bundle result support and behaviour:
* Bundle.link (paging) MUST be supported by directory service provider for a client to be sure it is obtaining a complete result set.
* Bundle.link (paging) with IANA link relation 'next'[<sup>[1]</sup>](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1) MUST be supported by client consuming system to allow next page retrieval when available.





---

// File: input/pagecontent/changes.md

### Release TBD

- Expected Publication date: ??
- Expected Publication status: Working Standard
- Based on FHIR version: 4.0.1

The changes in this update are in progress and yet to be balloted.

To help implementers, only the more significant changes are listed here.

#### Changes in this version
<ul>
    <li><a href="variance.html">AU Variance Statement</a> page added as required HL7 AU IG Content</li> 
    <li><a href="license.html">Licence and Legal</a> page added as required HL7 AU IG Content</li> 
    <li>Changed HL7 AU implementation guide publication structure and format to better align to current HL7 practices.</li>
    <li>Updated dependency on au-fhir-base version '4.1.0', from version '4.1.0-ballot'. Refer to <a href="http://hl7.org.au/fhir/4.1.0/changes.html#release-410">au-fhir-base detailed change log</a>. The specific changes impacting this IG are:
        <ul>
            <li>Changed <a href="http://hl7.org.au/fhir/4.1.0/CodeSystem-au-location-physical-type.html">Location Type (Physical) AU</a> to deprecate concept 'vi'. This code has been deprecated as it has been replaced by an equivalent term provided by HL7 international.</li>
        </ul>
    </li>
    <li>Profile: <a href="StructureDefinition-au-pd-vdi.html">AU Vendor Directory Identifier</a> - <strong>new</strong>
        <ul>
            <li>refactored from the in-line Identifier definitions in <a href="StructureDefinition-au-pd-healthcareservice.html">AU PD Healthcare Service</a> and <a href="StructureDefinition-au-pd-practitionerrole.html">AU PD Practitioner Role</a>, thereby amalgamating the respective definitions into a single datatype profile</li>
            <li>constraints follow other HL7AU Base IG Identifier profiles, such as using <code>patternCodeableConcept</code> for <code>type.coding</code>, and not mandating <code>type.text</code></li>
        </ul>
    </li>
    <li>Profile: <a href="StructureDefinition-au-pd-smdtargetidentifier.html">PD Secure Messaging Delivery Target Identifier</a> - <strong>new</strong>
        <ul>
            <li>refactored from the in-line Identifier definitions in <a href="StructureDefinition-au-pd-sm-endpoint.html">AU PD Secure Messaging Endpoint</a></li>
        </ul>
    </li>
    <li>Profile: <a href="StructureDefinition-au-pd-healthcareservice.html">AU PD Healthcare Service</a>
        <ul>
            <li>based on FHIR version 4.0.1 instead of 4.0.0</li>
            <li>mandated at least one of the known and defined Identifier types (invariant <code>au-pd-hs-01</code>), i.e. <a href="https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-hpio.html">AU HPI-O</a>, <a href="https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-residentialagedcareserviceidentifier.html">AU Residential Aged Care Service Identifier</a> or <a href="StructureDefinition-au-pd-vdi.html">AU Vendor Directory Identifier</a> - <strong>breaking change</strong></li>
            <li>removed in-line identifier definitions for <code>pdvendor</code> and instead reference the new <a href="StructureDefinition-au-pd-vdi.html">AU Vendor Directory Identifier</a> profile. The impact of this change on representations of vendor directory identifiers is that:
                <ul>
                    <li><code>type.coding.system</code> value is now <code>http://terminology.hl7.org.au/CodeSystem/v2-0203</code> (instead of <code>http://terminology.hl7.org/CodeSystem/v2-0203</code>) - <strong>breaking change</strong></li>
                    <li><code>type.text</code> value is no longer mandatory</li>
                </ul>            
            </li>
            <li>the identifier slice discriminator has been updated to be <code>pattern:type</code></li>
            <li>the inheritance from the updated AU Base HealthcareService includes explicit Identifier types for all of the applicable organisation identifiers (i.e. HPI-O and AU Residential Aged Care Service Identifier)</li>
            <li>the inheritance from the updated AU Base HealthcareService allows the <a href="http://hl7.org.au/fhir/4.1.0/StructureDefinition-au-assigningauthority.html">HL7 V2 Assigning Authority Identifier extension</a> on all Identifier slices</li>
            <li>the inheritance from the updated AU Base HealthcareService introduces the <a href="http://hl7.org.au/fhir/4.1.0/StructureDefinition-identifier-routability.html">Identifier Routability Identifier extension</a> on all Identifier slices</li>
            <li>HealthcareService.endpoint must only be a reference to an <a href="StructureDefinition-au-pd-sm-endpoint.html">AU PD Secure Messaging Endpoint</a></li>
            <li>HealthcareService.availableTime.availableStartTime and HealthcareService.availableTime.availableStartTime both include the <a href="http://hl7.org.au/fhir/4.1.0/StructureDefinition-au-timezone.html">Australian Time Zone extension</a> with its required binding to the <a href="http://hl7.org.au/fhir/4.1.0/ValueSet-au-timezone.html">AU Time Zone ValueSet</a></li>
        </ul>
    </li>
    <li>Profile: <a href="StructureDefinition-au-pd-location.html">AU PD Location</a>
        <ul>
            <li>based on FHIR version 4.0.1 instead of 4.0.0</li>
            <li>at least one of the known and defined Identifier types should be present (invariant <code>au-pd-loc-01</code>), i.e. <a href="https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-locationspecificpracticenumber.html">AU Location Specific Practice Number</a> or <a href="https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-natasitenumber.html">AU NATA Site Number</a></li>
            <li>Location.identifier is now must support = true</li>
            <li>the inheritance from the updated AU Base Location includes <a href="http://hl7.org.au/fhir/4.1.0/StructureDefinition-au-address.html">AustralianAddress</a> as an allowed Location.address type </li>
            <li>the inheritance from the updated AU Base Location includes <a href="http://hl7.org.au/fhir/4.1.0/StructureDefinition-au-locationspecificpracticenumber.html">AU Location Specific Practice Number</a> as an allowed Location.identifier type </li>
        </ul>
    </li>
    <li>Profile: <a href="StructureDefinition-au-pd-organisation.html">AU PD Organisation</a>
        <ul>
            <li>based on FHIR version 4.0.1 instead of 4.0.0</li>
            <li>mandated at least one of the known and defined Identifier types (invariant <code>au-pd-org-01</code>), i.e. <a href="https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-hpio.html">AU HPI-O</a>, <a href="https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-paioidentifier.html">AU PAI-O Identifier</a>, <a href="https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-cspregistrationnumber.html">AU CSP Registration Number</a>, <a href="https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-australianbusinessnumber.html">AU Australian Business Number</a>, <a href="https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-australiancompanynumber.html">AU Australian Company Number</a>, <a href="https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-australianregistredbodynumber.html">AU Australian Registered Body Number</a>, <a href="https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-nataaccreditationnumber.html">AU NATA Accreditation Number</a> or <a href="https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-pharmacyapprovalnumber.html">AU Pharmacy Approval Number</a>
 - <strong>breaking change</strong></li>
            <li>the slicing discriminator on Organization.identifier is now <code>pattern:type</code></li>
            <li>Organization.identifier is now must support = true</li>
            <li>the inheritance from the updated AU Base Organisation includes explicit Identifier types for all of the applicable organisation identifiers (i.e. HPI-O, ACN, ABN etc)</li>       
        </ul>
    </li>
    <li>Profile: <a href="StructureDefinition-au-pd-practitioner.html">AU PD Practitioner</a>
        <ul>
            <li>based on FHIR version 4.0.1 instead of 4.0.0</li>
            <li>mandated at least one of the known and defined Identifier types (invariant <code>au-pd-prac-01</code>), i.e. <a href="https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-hpii.html">AU HPI-I</a>, <a href="https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-pbsprescribernumber.html">AU PBS Prescriber Number</a>, <a href="https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-careagencyemployeeidentifier.html">AU Care Agency Employee Identifier</a> or<a href="https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-ahpraregistrationnumber.html">AU Ahpra Registration Number</a> - <strong>breaking change</strong></li>
            <li>the Practitioner.identifier element has been updated to have slicing discriminator of <code>pattern:type</code>, must support = true and the HPI-I identifier datatype profile properly referenced</li>
            <li>the inheritance from the updated AU Base Practitioner includes explicit Identifier types for all of the applicable practitioner identifiers (i.e. HPI-I, PBS prescriber number etc)</li>
        </ul>
    </li>
    <li>Profile: <a href="StructureDefinition-au-pd-practitionerrole.html">AU PD Practitioner Role</a>
        <ul>
            <li>based on FHIR version 4.0.1 instead of 4.0.0</li>
            <li>mandated at least one of the known and defined Identifier types (invariant <code>au-pd-pracrole-01</code>), i.e. <a href="https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-medicareprovidernumber.html">AU Medicare Provider Number</a>, <a href="https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-nationalprovideridentifieratorganisation.html">AU National Provider Identifier At Organisation</a>, <a href="https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-employeenumber.html">AU Employee Number</a> or <a href="StructureDefinition-au-pd-vdi.html">AU Vendor Directory Identifier</a> - <strong>breaking change</strong></li>
            <li>removed in-line identifier definitions for <code>vendorAssignedDirectoryIdentifier</code> and instead reference the new <a href="StructureDefinition-au-pd-vdi.html">AU Vendor Directory Identifier</a> profile. The impact of this change on representations of vendor directory identifiers is that:
                <ul>
                    <li><code>type</code> value is now mandatory - <strong>breaking change</strong></li>
                    <li><code>type.coding.system</code> is now mandatory with a fixed value of <code>http://terminology.hl7.org.au/CodeSystem/v2-0203</code> - <strong>breaking change</strong></li>
                    <li><code>type.coding.code</code> is now mandatory - <strong>breaking change</strong></li>
                    <li><code>type.text</code> value is no longer mandatory</li>
                    <li><code>system</code> is now mandatory - <strong>breaking change</strong></li>
                    <li><code>value</code> is now mandatory - <strong>breaking change</strong></li>
                </ul>            
            </li>
            <li>the identifier slice discriminator has been updated to be <code>pattern:type</code></li>
            <li>the inheritance from the updated AU Base PractitionerRole includes explicit Identifier types for all of the applicable practitioner role identifiers (i.e. Medicare provider number, National Provider Identifier At Organisation etc)</li>
            <li>the inheritance from the updated AU Base PractitionerRole allows the <a href="http://hl7.org.au/fhir/4.1.0/StructureDefinition-au-assigningauthority.html">HL7 V2 Assigning Authority Identifier extension</a> on all Identifier slices</li>
            <li>the inheritance from the updated AU Base PractitionerRole introduces the <a href="http://hl7.org.au/fhir/4.1.0/StructureDefinition-identifier-routability.html">Identifier Routability Identifier extension</a> on all Identifier slices</li>
            <li>PractitionerRole.location - exactly one must be present</li>
            <li>PractitionerRole.availableTime.availableStartTime and PractitionerRole.availableTime.availableStartTime both include the <a href="http://hl7.org.au/fhir/4.1.0/StructureDefinition-au-timezone.html">Australian Time Zone extension</a> with its required binding to the <a href="http://hl7.org.au/fhir/4.1.0/ValueSet-au-timezone.html">AU Time Zone ValueSet</a></li>
            <li>PractitionerRole.endpoint must only be a reference to an <a href="StructureDefinition-au-pd-sm-endpoint.html">AU PD Secure Messaging Endpoint</a></li>
        </ul>
    </li>
    <li>Profile: <a href="StructureDefinition-au-pd-sm-endpoint.html">AU PD Secure Messaging Endpoint</a>
        <ul>
            <li>based on FHIR version 4.0.1 instead of 4.0.0</li>
            <li>mandated at least one of the known and defined Identifier types (invariant <code>au-pd-ep-01</code>), i.e. <a href="StructureDefinition-au-pd-smdtargetidentifier.html">PD Secure Messaging Delivery Target Identifier</a> - <strong>breaking change</strong></li>
            <li>removed in-line identifier definitions for <code>smdtarget</code> and instead references the new <a href="StructureDefinition-au-pd-smdtargetidentifier.html">PD Secure Messaging Delivery Target Identifier</a> profile. This update does not involve any constraint changes.</li>
            <li>the identifier slice discriminator has been updated to be <code>pattern:type</code></li>
            <li>Endpoint.identifier is now must support = true</li>
        </ul>
    </li>
    <li>ValueSet: <a href="ValueSet-service-interfaces.html">Australian Service Interfaces</a>
        <ul>
            <li>the compose statement was updated to include the core specification Endpoint Connection Type valueSet</li>
        </ul>
    </li>
    <li>CodeSystem: <a href="CodeSystem-endpoint-payload-type.html">Australian Endpoint Payload Types</a>
        <ul>
            <li>4 concepts were added for HL7 v2.4 ORU, ORM, ORR and ACK messages</li>
            <li>concepts no longer have a nested hierarchy</li>
        </ul>
    </li>
    <li>Examples:
        <ul>
            <li><a href="HealthcareService-example0.html">healthcareservice-example0.xml</a>: added a snippet of the AU Vendor Directory Identifier</li>
            <li><a href="PractitionerRole-example0.html">practitionerrole-example0.xml</a>: corrected wrong system value for Medicare Provider Number identifier</li>
        </ul>
    </li>
    <li>Guidance page
        <ul>
            <li>guidance was updated</li>
        </ul>
    </li>
    <li>SearchParameter page
        <ul>
            <li>the 3 listed SearchParameters in v2.0 are no longer present in v2.1.0</li>
        </ul>
    </li>
    <li>Capability Statement page
        <ul>
            <li>the table 'Type Level Search' has introduced a differentiation of search parameters for must support vs should support</li>
        </ul>
    </li>
    <li>Federation of Directory Services page
        <ul>
            <li>requirement `FED04 Paging of directory service results` now includes explicit support for servers</li>
        </ul>
    </li>
</ul>


### Release 2.0.1
- Publication date: 2019-08-15
- Publication status: PD 2 on FHIR R4
- Based on FHIR version: 4.0.0

### Release 1.0.0
- Publication date: 2019-05-14
- Publication status: PD 1 on FHIR STU3 (no ballot)
- Based on FHIR version: 3.0.1

### Release 0.9.0
- Publication date: 2019-02-20
- Publication status: February 2019 QA Preview
- Based on FHIR version: 3.0.1

### Release 0.5.0
- Publication date: 2018-09-12
- Publication status: October 2018 Build
- Based on FHIR version: 3.0.1

### Release 0.4.0
- Publication date: 2018-03-07
- Publication status: March 2018 Build
- Based on FHIR version: 3.0.1

### Release 0.3.0
- Publication date: 2017-11-24
- Publication status: Dec 2017 Build
- Based on FHIR version: 3.0.1

### Release 0.2.0
- Publication date: 2017-09-20
- Publication status: September 2017 Build
- Based on FHIR version: 3.0.1

### Release 0.1.0
- Publication date: 2017-07-09
- Publication status: July 2017 build. First official published version of this implementation guide.
- Based on FHIR version: 3.0.1


---

// File: input/pagecontent/downloads.md

### Downloadable copy of entire specification

A downloadable version of the entire implementation guide is available so it can be hosted locally:

- [Downloadable Copy](full-ig.zip)

### Package file

The following package file includes an NPM package file used by many of the FHIR tools.  It contains all the value sets, profiles, extensions, list of pages and urls in the IG, etc defined as part of this version of the Implementation Guides. This file should be the first choice whenever generating any implementation artefacts since it contains all of the rules about what makes the profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply in order to make a conformant implementation:

- [R4 Package](package.tgz){::download="true"}
- [R4B Package](package.r4b.tgz){::download="true"}

See the overview on [validating FHIR profiles and resources](http://hl7.org/fhir/R4/validation.html) for more information about validating profiles and how to use these artefacts

### Examples 

All examples included in this implementation guide are available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)
- [TTL](examples.ttl.zip)


---

// File: input/pagecontent/extensions.md

# {{ page.title }}

These extensions have been defined for this implementation guide.
{% include list-simple-extensions.xhtml %}


---

// File: input/pagecontent/federation.md

### Description

Multiple directory service sources (operating FHIR services under this implementation guide) may be combined to offer a federated service capability by suppliers. 
This allows searches by client systems to be supported across multiple directory service sources.  This allows directory entries to be provided to client systems that
can be used to generate secure messages that can be exchanged via a preferred secure messaging provider to another secure messaging provider preferred by the receiving 
client system. 

From the client system perspective there is no functional impact on search or usage of directory entries for the generation of secure messages.  The supplying directory and 
secure messaging service provider acts as an intermediary for 3rd party directory and secure message service providers and provides suitable directory entries to 
support forwarding of secure messages to other secure message intermediaries.

Arrangements for federated directories and secure message exchange between suppliers are on a case by case basis and completely under control of the participating federating
parties.

### Definitions

* **Source Provider Directory** is a provider directory service supplying the entries managed by a directory provider
* **Federated Provider Directory** is a provider directory service supplying results based on multiple source provider directories

### Requirements

```
FED01 Directory service source providers SHALL supply adequate core registration information to federating directory service providers
```
* Arrangements between source directory providers and federators are based on agreements made between parties.
* Core registration information may be public but this is not required.
* Core registration information is defined as:

|Property|Description|
|---|---||
|Name|A user-friendly description of the registered server e.g. Argus Directory|
|Contact Details|Details of who to contact for support issues|
|Endpoint URL|The URL of the server to send federated requests to (base URL of the FHIR server) (this should also be used as the issuer in the identity JWT)|
|Authentication Details|Any details required to authenticate to the server e.g. API key (simple fixed value), authorization header (fixed/long living bearer token), client ID/secret (OAuth details)|
|Vendor Thumbprint|The thumbprint of the certificate to use to connect to the vendor|
|Id Prefix|Suitable prefix that may be prepended to all id fields to make unique|
|Identifier Namespace|The namespace that will be used for messaging vendor-created identifiers|
{:.grid}

```
FED02 Directory service results content is defined by the federated service supplier
```
* Directory entry results are provided by a federator under policies defined by the operator of the federating service.
* The ordering, grouping and filtering of results is defined by the federating service supplier.
* Results may be returned as blocks from each source directory or by other ordering schemes.

```
FED03 Federating directory services SHALL supply a CapabilityStatement conformant with this Implementation Guide
```
* Federated services will implement capability based on the source service capability and publish via the /meta standard FHIR system interaction.
* The federator shall comply with core requirements as defined in the capability statements section of this implementation guide.

```
FED04 Paging of directory service results MUST be supported by client and server systems
```
* Paging (next page continuation) may be used by federators to allow responses to be provided before all source systems have provided results to the federator (performance).
* Client systems must allow paging links supplied to be used by either automatic background calls to obtain next page or manual next page selection by user on search results.
* Requirements on paging are detailed in the capability statements section of this implementation guide and are as per the FHIR core specification.
* This is also linked to directory services requirement to honour the standard _count (maximum result set count) search parameter as per the FHIR core specification.

```
FED05 Resource referencing in federated results MUST be adequate for client use on subsequent interactions with the federated service
```

* Federated search results contain entries from multiple source provider directory services, there is potential for identity conflicts to occur.
* URL rewriting may be implemented by the federating service provider to avoid referencing identity conflicts in the results.
* When URL rewriting occurs the federating service must be able to use the rewritten URL in subsequent service interactions e.g. read resource

```
FED06 Tracking HTTP headers SHOULD be implemented to allow support investigation
```
* Custom header X-Request-Id SHOULD always be included in every response.
* Custom header X-Request-Id MAY be included in requests from client systems and reflected in the responses.
* This header supports tracking for support and federated results.
* If no header is populated it SHOULD be populated by provider directory servers.



---

// File: input/pagecontent/guidance.md

### Introduction
There are a number of FHIR resource types used to record provider directory entries.

[PractitionerRole](StructureDefinition-au-pd-practitionerrole.html) and [HealthcareService](StructureDefinition-au-pd-healthcareservice.html) are the main searchable concepts and can be related to other resources, [Practitioner](StructureDefinition-au-pd-practitioner.html), [Organization](StructureDefinition-au-pd-organisation.html), [Location](StructureDefinition-au-pd-location.html) and [Endpoint](StructureDefinition-au-pd-sm-endpoint.html).

Searching for suitable [PractitionerRole](StructureDefinition-au-pd-practitionerrole.html) or [HealthcareService](StructureDefinition-au-pd-healthcareservice.html) can be made by search parameters on these resource types and/or via chained searches to the related resource types.

In this usage the [PractitionerRole](StructureDefinition-au-pd-practitionerrole.html) and [HealthcareService](StructureDefinition-au-pd-healthcareservice.html) resources are related to Endpoints (containing service connection details, such as secure messaging) and this allows communications to be made to a practitioner (in a role) or healthcare service based on the content of the associated Endpoint resource used.

<br/>
<br/>

### Provider Directory Service Roles

This implementation guide is defined to allow multiple consumer systems to call multiple provider directory services reliably with a consistent interface and available data support.  

#### Provider Directory Supplier

Provider Directory Supplier implementations are server software systems that supply a provider directory service interface and data.

```
SRV01 Servers SHALL be capable of providing all resource types included in this guide.
```

```
SRV02 Servers SHALL be capable of providing all profile data elements marked as MUST SUPPORT.
```

```
SRV03 Servers SHALL comply to AU Provider Directory Implementation Guide, AU Base Implementation Guide and FHIR R4 core constraints for all resource instances.
```

```
SRV04 Servers SHALL be capable of responding meaningfully to all search requests (in each resource definition) that are marked as MUST SUPPORT.
```

```
SRV05 Servers MAY be capable of responding to search requests (in each resource definition) that are marked as OPTIONAL.
```

```
SRV06 Servers MAY be capable of responding to other search requests that are FHIR core compliant OR custom searches (defined using CapabilityStatement supplied by the server).
```
<br/>

#### Provider Directory Consumer 

Provider Directory Consumer implementations are client software systems that call provider directory services and consume data.

```
CLI01 Clients SHALL support meaningful consumption of all data elements marked as MUST SUPPORT.
```

```
CLI02 Clients SHALL allow receipt of the all resource types in this guide.
```

```
CLI03 Clients SHALL allow receipt of resource instances that are valid according to the AU Provider Directory Implementation Guide, AU Base Implementation Guide and FHIR R4 core compliant elements not defined in this guide.
```

```
CLI04 Clients can assume that all search requests marked as MUST SUPPORT are available.
```

```
CLI05 Clients may use search requests marked as OPTIONAL but MUST inform the user if the call is not supported by the server.
```

<br/>
<br/>


### Provider Directory Core Entity Relationships

For directory service profiles, the [HealthcareService](StructureDefinition-au-pd-healthcareservice.html) is used to represent a practice or clinic as they would be externally advertised in a directory. The [HealthcareService](StructureDefinition-au-pd-healthcareservice.html) is delivering a category of services at a [Location](StructureDefinition-au-pd-location.html) by an [Organization](StructureDefinition-au-pd-organisation.html).

The [PractitionerRole](StructureDefinition-au-pd-practitionerrole.html) is used to represent a [Practitioner](StructureDefinition-au-pd-practitioner.html) practicing at those practices or clinics where they are externally advertised.

<div>
<img src="{{site.baseurl}}erd3.png"/>
</div>
<br/>
<br/>

#### Relationship guidance
Given the implementation guide allows Endpoints to be referenced from PractitionerRoles, HealthcareServices and Locations, clarity is required as to what it means for an Endpoint to be referenced from each of these entities, where a client should look for an endpoint and the supported payloads:

```
REL01 If a PractitionerRole is reachable through an Endpoint, the PractitionerRole MUST explicitly reference that Endpoint.
```

```
REL02 Clients wishing to address a message to a PractitionerRole MUST use an Endpoint directly referenced by that PractitionerRole.
```

```
REL03 Clients wishing to address a message to a HealthcareService MUST use an Endpoint directly referenced by that HealthcareService.
```

```
REL04 Clients cannot assume that a PractitionerRole is reachable through an Endpoint referenced by the HealthcareService – unless the Endpoint is also directly referenced by the PractitionerRole.
```

```
REL05 Endpoints referenced from a Location are used to communicate with the Location itself (e.g. the building management), and not the HealthcareService or PractitionerRole at that Location. For this reason, clients should not use Endpoint references on Locations.
```

```
REL06 The binding to the valueset for Australian Endpoint Payload Types is extensible.  Implementers should use payload types defined in the valueset where possible. Where this is not possible, implementers may reach local agreements to use payload types that are not listed.
```

```
REL07 Hours of operation at a Location are for the Location itself rather than the times any HealthcareService or PractitionerRole is available. Directory clients should be using the HealthcareService or PractitionerRole available times.
```

<br/>
<br/>

### Provider Directory Usage Sequence for Secure Messaging

Typical sequence describing endpoint search, HL7 V2 generation, secure message composition, secure message delivery via intermediary, acknowledgement response addressing, generation and delivery.
	
<div>
<img src="{{site.baseurl}}sequence2.png" width="1200" height="800"/>
</div>
<br/>
<br/>

#### Component Roles
1. USER
* User of the PMS/CIS (practice management system/clinical information system) sending a message.
1. PMS/CIS SENDER
* The practice management system or clinical information system) formatting and sending a HL7 V2 message.
1. SM CLIENT (SENDER)
* Secure messaging client component/system that can deliver payloads using secure messaging standard [ATS 5822—2010 — E-Health Secure Message Delivery](https://infostore.saiglobal.com/en-au/Standards/Product-Details-129644_SAIG_AS_AS_274353/?productID=129644_SAIG_AS_AS_274353).
1. SM INTERMEDIARY
* Secure messaging intermediary providing store and forward .
* May provide routing to other secure messaging suppliers.
1. PD FHIR SERVER
* Provider directory FHIR API service adhering to this implementation guide.
* May be federated across multiple provider directory suppliers to allow addressing suitable for forwarding to other secure messaging suppliers.
1. SM CLIENT (RECEIVER)
* Secure messaging client component/system that can receive payloads using secure messaging standard [ATS 5822—2010 — E-Health Secure Message Delivery](https://infostore.saiglobal.com/en-au/Standards/Product-Details-129644_SAIG_AS_AS_274353/?productID=129644_SAIG_AS_AS_274353).
1. PMS/CIS (RECEIVER)
* The practice management system or clinical information system) receiving the HL7 V2 message and processing it.
* On accept/reject of the received message formatting and sending a HL7 V2 ACK message.

#### Sequence
1. USER SEARCH
* User performs a provider search in there client application.
* This will likely include search parameters to use on search calls.
1. SEARCH (1)
* Search on PractitionerRole and/or HealthcareService (and related resources) can be done on PD FHIR Server.
* Available search parameters are defined in Quick Start section of each profile which may be combined as the client application supports.
* For example search by active status, secure messaging support, payload support and provider number.
```
GET https://sqlonfhir-aupd.azurewebsites.net/fhir/PractitionerRole?active=true&identifier=http://ns.electronichealth.net.au/id/medicare-provider-number|2426621B&endpoint.connection-type=http://hl7.org.au/fhir/CodeSystem/smd-interfaces|http://ns.electronichealth.net.au/smd/intf/SealedMessageDelivery/TLS/2010&endpoint.payload-type=http://hl7.org.au/fhir/CodeSystem/endpoint-payload-type|http://ns.hl7.org.au/hl7v2/profiles/HL7AU-OO-REF-SIMPLIFIED-201706-L1&_include=PractitionerRole:endpoint&_include=PractitionerRole:location&_include=PractitionerRole:organization&_include=PractitionerRole:practitioner
```
* For example search by active status, secure messaging support, payload support and practitioner family name
```
GET https://sqlonfhir-aupd.azurewebsites.net/fhir/PractitionerRole?active=true&practitioner.family=Smith&endpoint.connection-type=http://hl7.org.au/fhir/CodeSystem/smd-interfaces|http://ns.electronichealth.net.au/smd/intf/SealedMessageDelivery/TLS/2010&endpoint.payload-type=http://hl7.org.au/fhir/CodeSystem/endpoint-payload-type|http://ns.hl7.org.au/hl7v2/profiles/HL7AU-OO-REF-SIMPLIFIED-201706-L1&_include=PractitionerRole:endpoint&_include=PractitionerRole:location&_include=PractitionerRole:organization&_include=PractitionerRole:practitioner
```
* For example search by active status, secure messaging support, payload support and individual specialty in postcode
```
GET https://sqlonfhir-aupd.azurewebsites.net/fhir/PractitionerRole?active=true&location.address-postalcode=3010&specialty=http://snomed.info/sct|17561000&endpoint.connection-type=http://hl7.org.au/fhir/CodeSystem/smd-interfaces|http://ns.electronichealth.net.au/smd/intf/SealedMessageDelivery/TLS/2010&endpoint.payload-type=http://hl7.org.au/fhir/CodeSystem/endpoint-payload-type|http://ns.hl7.org.au/hl7v2/profiles/HL7AU-OO-REF-SIMPLIFIED-201706-L1&_include=PractitionerRole:endpoint&_include=PractitionerRole:location&_include=PractitionerRole:organization&_include=PractitionerRole:practitioner
```
* Can perform an independent Endpoint lookup based on results or a direct lookup as below.
* Example lookup endpoint directly by the secure messaging target identifier directly - vendor or other target (perhaps stored in local directory)
```
http://sqlonfhir-aupd.azurewebsites.net/fhir/Endpoint?status=active&identifier=http://ns.electronichealth.net.au/smd/target|http://ns.argusdca.com.au/smd/id/hostname/ACC5408570000002&connection-type=http://hl7.org.au/fhir/CodeSystem/smd-interfaces|http://ns.electronichealth.net.au/smd/intf/SealedMessageDelivery/TLS/2010&payload-type=http://hl7.org.au/fhir/CodeSystem/endpoint-payload-type|http://ns.hl7.org.au/hl7v2/profiles/HL7AU-OO-REF-SIMPLIFIED-201706-L1
```
1. SEARCH RESPONSE (1)
* A FHIR Bundle (searchset) is returned as the search result.
* [Example a PractitionerRole search response](Bundle-search1.html) with one PractitionerRole and included resources returned.
* [Example a HealthcareService search response](Bundle-search2.html) with one HealthcareService and included resources returned. 
* Depending on search made on PD FHIR Server this will likely contain details:
  * PractitionerRole, Practitioner, Location, Organization, Endpoint.
  * HealthcareService, Location, Organization, Endpoint.
1. USER SELECT
* Details of the results received are presented to the user.
* The user can select the desired receiver as needed.
1. GENERATE HL7 V2 MESSAGE
* The [compliant HL7 V2 payload](ValueSet-endpoint-payload-type.html) needs to be generated.
* Utilise Endpoint result content for generating HL7 V2 content.
  * Endpoint [au-receivingfacility](http://hl7.org.au/fhir/4.1.0/StructureDefinition-au-receivingfacility.html) extension (HL7 V2 Receiving Facility)
  * Endpoint [au-receivingapplication](http://hl7.org.au/fhir/4.1.0/StructureDefinition-au-receivingapplication.html) extension (HL7 V2 Receiving Application)
* Use the [Australian Diagnostics and Referral Messaging](https://confluence.hl7australia.com/display/OO/Australian+Diagnostics+and+Referral+Messaging+-+Localisation+of+HL7+Version+2.4) guidance for HL7 V2 formatting:
  * Fill HL7 V2 MSH-4, MSH-6 content as per [Australian Diagnostics and Referral Messaging - Facility/Organisational level addressing](https://confluence.hl7australia.com/pages/viewpage.action?pageId=31589320#Appendix10AddressingmessagesusingAustralianProfileforProviderDirectoryServices(Normative)-A10.1.1Facility/Organisationalleveladdressing).
  * Fill HL7 V2 PRD-1, PRD-2, PRD-3, PRD-5, PRD-7 and/or XCN datatype content as per [Australian Diagnostics and Referral Messaging - Intended Provider/Individual recipient level addressing](https://confluence.hl7australia.com/pages/viewpage.action?pageId=31589320#Appendix10AddressingmessagesusingAustralianProfileforProviderDirectoryServices(Normative)-A10.1.2IntendedProvider/Individualrecipientleveladdressing).
  * Fill HL7 V2 MSH-3, MSH-5 content as per [Australian Diagnostics and Referral Messaging - Application level addressing](https://confluence.hl7australia.com/pages/viewpage.action?pageId=31589320#Appendix10AddressingmessagesusingAustralianProfileforProviderDirectoryServices(Normative)-A10.1.3Applicationleveladdressing).
1. SEND HL7 V2 Message
* Drop outbound HL7 V2 file or send via local SM CLIENT API.
1. SEARCH (2) 
* For independent HL7 V2 sender processing (no Endpoint knowledge) can lookup Endpoint details via search by Receiving Facility.
* Examples - lookup Endpoint by HL7 V2 content using [AU PD search parameter extensions](searchparams.html) for delivery via secure messaging.
```
GET https://jdfhir.test.medical-objects.com.au/rest/fhir/Endpoint?status=active&au-receivingfacility-namespace-id=8003623233355378&au-receivingfacility-universal-id=1.2.36.1.2001.1003.0.8003623233355378&au-receivingfacility-universal-id-type=ISO&connection-type=http://hl7.org.au/fhir/CodeSystem/smd-interfaces|http://ns.electronichealth.net.au/smd/intf/SealedMessageDelivery/TLS/2010&payload-type=http://hl7.org.au/fhir/CodeSystem/endpoint-payload-type|http://ns.electronichealth.net.au/ack/sc/deliver/hl7Ack/2012 
```
```
GET http://sqlonfhir-aupd.azurewebsites.net/fhir/Endpoint?status=active&au-receivingfacility-namespace-id=CIB&au-receivingfacility-universal-id=877F9695-1298-4E6A-B432-0FDD46AD80B8&au-receivingfacility-universal-id-type=GUID&connection-type=http://hl7.org.au/fhir/CodeSystem/smd-interfaces|http://ns.electronichealth.net.au/smd/intf/SealedMessageDelivery/TLS/2010&payload-type=http://hl7.org.au/fhir/CodeSystem/endpoint-payload-type|http://ns.electronichealth.net.au/ack/sc/deliver/hl7Ack/2012
```
1. SEARCH RESPONSE (2)
* A FHIR Bundle (searchset) is returned with Endpoint details needed to deliver HL7 V2 Message
* [Example an Endpoint search response](Bundle-search3.html) with one Endpoint resource returned.
1. COMPOSE SECURE MESSAGE (1)
* Use details in the Endpoint result to compose standard SMD messages [ATS 5822—2010 — E-Health Secure Message Delivery](https://infostore.saiglobal.com/en-au/Standards/Product-Details-129644_SAIG_AS_AS_274353/?productID=129644_SAIG_AS_AS_274353).
* Utilise Endpoint result content for composing message including:
  * Endpoint.identifier (Secure Messaging Target Identifier) - destination reference (to SMD receiverOrganisation element).
  * Endpoint encryption-certificate-pem-x509 extension (PEM X509 Certificate) - encrypting certificate (for SMD encryptedPayload production).
  * Endpoint.payloadType - type of message payload (to SMD serviceCategory element).
  * Endpoint.contentType - method of interfacing (to SMD serviceInterface element).
1. DELIVER (1)
* Use details in the Endpoint result to deliver secure messages [ATS 5822—2010 — E-Health Secure Message Delivery](https://infostore.saiglobal.com/en-au/Standards/Product-Details-129644_SAIG_AS_AS_274353/?productID=129644_SAIG_AS_AS_274353).
* Utilise Endpoint result content for composing message including:
  * Endpoint.address - URL endpoint addressing.
1. RETRIEVE (1)
* Retrieve secure messages as per standard [ATS 5822—2010 — E-Health Secure Message Delivery](https://infostore.saiglobal.com/en-au/Standards/Product-Details-129644_SAIG_AS_AS_274353/?productID=129644_SAIG_AS_AS_274353).
1. IMPORT HL7 V2 MESSAGE
* Import HL7 V2 Message for PMS/CIS application level processing (accept/reject).
1. SEARCH (3)
* For independent HL7 V2 receiver processing can use the inbound HL7 V2 content (MSH Sending Facility) to perform a lookup to obtain path for HL7 V2 ACK message delivery
* Examples - lookup Endpoint by HL7 V2 content using [AU PD search parameter extensions](searchparams.html) for ACK delivery via secure messaging
```
GET https://jdfhir.test.medical-objects.com.au/rest/fhir/Endpoint?status=active&au-receivingfacility-namespace-id=8003623233355378&au-receivingfacility-universal-id=1.2.36.1.2001.1003.0.8003623233355378&au-receivingfacility-universal-id-type=ISO&connection-type=http://hl7.org.au/fhir/CodeSystem/smd-interfaces|http://ns.electronichealth.net.au/smd/intf/SealedMessageDelivery/TLS/2010&payload-type=http://hl7.org.au/fhir/CodeSystem/endpoint-payload-type|http://ns.electronichealth.net.au/ack/sc/deliver/hl7Ack/2012 
```
```
GET http://sqlonfhir-aupd.azurewebsites.net/fhir/Endpoint?status=active&au-receivingfacility-namespace-id=CIB&au-receivingfacility-universal-id=877F9695-1298-4E6A-B432-0FDD46AD80B8&au-receivingfacility-universal-id-type=GUID&connection-type=http://hl7.org.au/fhir/CodeSystem/smd-interfaces|http://ns.electronichealth.net.au/smd/intf/SealedMessageDelivery/TLS/2010&payload-type=http://hl7.org.au/fhir/CodeSystem/endpoint-payload-type|http://ns.electronichealth.net.au/ack/sc/deliver/hl7Ack/2012
```
1. SEARCH RESPONSE (3)
* A FHIR Bundle (searchset) is returned with Endpoint details needed to deliver ACK.
* [Example an Endpoint search response](Bundle-search3.html) with one Endpoint resource returned.
* Use information to format the HL7 V2 ACK message.
1. GENERATE HL7 V2 ACK
* Use same method to format HL7 V2 ACK as GENERATE HL7 V2 MESSAGE.
1. SEND HL7 V2 ACK
* Drop outbound HL7 V2 ACK file or send via local SM CLIENT API.
1. SEARCH (4)
* For independent HL7 V2 ACK send processing can use the outbound HL7 V2 content (MSH Receiving Facility) to perform a lookup to obtain path for HL7 V2 ACK message delivery
* Examples - lookup Endpoint by HL7 V2 content using [AU PD search parameter extensions](searchparams.html) for ACK delivery via secure messaging
```
GET https://jdfhir.test.medical-objects.com.au/rest/fhir/Endpoint?status=active&au-receivingfacility-namespace-id=8003623233355378&au-receivingfacility-universal-id=1.2.36.1.2001.1003.0.8003623233355378&au-receivingfacility-universal-id-type=ISO&connection-type=http://hl7.org.au/fhir/CodeSystem/smd-interfaces|http://ns.electronichealth.net.au/smd/intf/SealedMessageDelivery/TLS/2010&payload-type=http://hl7.org.au/fhir/CodeSystem/endpoint-payload-type|http://ns.electronichealth.net.au/ack/sc/deliver/hl7Ack/2012 
```
```
GET http://sqlonfhir-aupd.azurewebsites.net/fhir/Endpoint?status=active&au-receivingfacility-namespace-id=CIB&au-receivingfacility-universal-id=877F9695-1298-4E6A-B432-0FDD46AD80B8&au-receivingfacility-universal-id-type=GUID&connection-type=http://hl7.org.au/fhir/CodeSystem/smd-interfaces|http://ns.electronichealth.net.au/smd/intf/SealedMessageDelivery/TLS/2010&payload-type=http://hl7.org.au/fhir/CodeSystem/endpoint-payload-type|http://ns.electronichealth.net.au/ack/sc/deliver/hl7Ack/2012
```
* Example - if known lookup endpoint by the secure messaging target identifier - vendor or other target for ACK message delivery via secure messaging
```
http://sqlonfhir-aupd.azurewebsites.net/fhir/Endpoint?status=active&identifier=http://ns.electronichealth.net.au/smd/target|http://ns.argusdca.com.au/smd/id/hostname/ACC5408570000002&connection-type=http://hl7.org.au/fhir/CodeSystem/smd-interfaces|http://ns.electronichealth.net.au/smd/intf/SealedMessageDelivery/TLS/2010&payload-type=http://hl7.org.au/fhir/CodeSystem/endpoint-payload-type|http://ns.electronichealth.net.au/ack/sc/deliver/hl7Ack/2012
```
1. SEARCH RESPONSE (4)
* A FHIR Bundle (searchset) is returned with Endpoint details needed to deliver ACK
* [Example an Endpoint search response](Bundle-search3.html) with one Endpoint resource returned.
* Use information to compose a secure message containing ACK.
1. COMPOSE SECURE MESSAGE (2)
* Use same method to compose ACK secure message as COMPOSE SECURE MESSAGE (1).
1. DELIVER (2)
* Use same method to compose ACK secure message as DELIVER (1).
1. RETRIEVE (2)
* Standard retrieval of secure message HL7 V2 ACK response as per RETRIEVE (1).
1. IMPORT HL7 V2 ACK
* Import HL7 V2 ACK for PMS/CIS application processing.



---

// File: input/pagecontent/history.md

## Australian Profile for Provider Directory Services

The following versions of Australian Profile for Provider Directory Services Implementation Guide are published:

* [Draft](http://build.fhir.org/ig/hl7au/au-fhir-pd/index.html): Current Constant Integration Build



---

// File: input/pagecontent/index.md

### Introduction
This guide covers capability requirements of FHIR services to implement a set of profiles and support interfaces in an Australian context for the purpose of implementation of provider directory services.

Many of the resource profiles provided here are based on definitions from the [Australian Base Profiles Implementation Guide](http://hl7.org.au/fhir/4.1.0/).

This document is a working specification that is expected to be implemented and tested by FHIR<sup>&reg;&copy;</sup> system producers to enable feedback to improve the content of this guide.

### Scope

#### Information
* **Organisation Directory Entry**: managing organisations
* **Practitioner Directory Entry**: individual practitioners
* **Practitioner Role Directory Entry**: role participants at a location for an organisation
* **Healthcare Service Directory Entry**: services delivered at a location for an organisation
* **Secure Messaging Endpoint Directory Entry**: connection details for secure messaging

#### Interactions
* **Search** allows the selection of relevant entries based on criteria
* **Read** allows the retrieval of a specific entry

#### Patterns of Use
* **Federated Directory** approach to supply responses based on a combination of results from multiple directory service providers
* **Synchronisation** approach to allow service supplied directory entry updates or deletion to be systematically synchronised with a local directory

### Usage

This document is a working specification that may be directly implemented by FHIR<sup>&reg;&copy;</sup> system producers.

Information contained in this document provides a minimal requirement level for use in secure message end point location and addressing. 
To that end it specifies key entities and elements thereof needed for secure message addressing and also needed interface interactions
to achieve basic searchability operations with directories. This common core set of capability of systems enables an agreed technical
profile for searching provider directories to obtain information required for secure message addressing.

FHIR<sup>&reg;&copy;</sup> connectathon events are key to the verification of the guide as being suitable for 
implementation. This implementation guide will be used as the basis for Australian connectathon events.

### How to read this guide

This guide is divided into several pages which are listed at the top of each page in the menu bar.

- [Home](index.html): This page provides the introduction and scope for this guide.
- [Guidance](guidance.html): This page provides guidance on using the profiles defined in this guide.
- [FHIR Artefacts](artifacts.html): These pages provide detailed descriptions and formal definitions for all the FHIR artefacts defined in this guide.
  - [Profiles and Extensions](profiles.html): This set of pages describes the profiles and extensions that are defined in this guide to represent Australian local concepts using FHIR. Each profile page includes a narrative description, guidance, and formal definition. Although the guidance typically focuses on the profiled elements and seeks to provide a ‘how-to’ guide when representing concepts, it may also may focus on un-profiled elements to aid with implementation.
  - [Search Parameters](searchparams.html): This set of pages lists the search parameters defined in this guide for use in AU operations.
  - [Terminology](terminology.html): This set of pages lists the value sets and code systems defined in this guide.
  - [Capability Statements](capstatements.html): This page defines the expected FHIR capabilities of AU PD Servers and Clients.
- [Security](security.html): This page lists all security considerations for this guide.
- [Federation](federation.html): This page outlines the arrangements and requirements for federated directories.
- [Examples](examples.html): This page lists all the examples used in this guide.
- [Downloads](downloads.html): This page provides links to downloadable artefacts including the AU PD FHIR NPM package.
- [Change Log](changes.html): This page documents the changes across versions of this guide.

### Collaboration
This guide is the product of collaborative work undertaken with participants from:

* Secure Messaging Technical Working Group
* HL7 Australia Working Groups
* Australian Digital Health Agency
* Australian FHIR Implementers Community
* HL7 Australia Members 












---

// File: input/pagecontent/license.md

### HL7 Australia Intellectual Property Policy
HL7 Australia has an overarching intellectual property policy in place. The [HL7 Australia - Intellectual Property Policy](https://hl7.org.au/fhir/hl7a_ip_policy.pdf) document defines the HL7 Australia organisation position on many aspects related to the copyright, licensing, liabilities and usage of HL7 Australia FHIR Implementation Guides. This also includes how the HL7 Australia FHIR Implementation Guides referencing other underlying material from HL7 International and 3rd parties shall be considered when using HL7 Australia published material. This policy document is maintained with the current official position of HL7 Australia with respect to these considerations.

HL7 FHIR® [Licensing and Legal Terms](https://hl7.org/fhir/license.html) should also be referenced as the underlying standards published terms on which HL7 Australia FHIR Implementation Guides depend.

A number of key considerations are included here to support HL7 Australia FHIR Implementation Guide usage.

### Disclaimer and Warning of Use

HL7 Australia provides HL7 Australia content for informational and reference purposes. While HL7 Australia and the broader HL7 community endeavour to ensure the accuracy and reliability of HL7 Australia content, to the extent permitted by law, HL7 Australia:

&nbsp;&nbsp;(a) makes no warranties, express or implied:
<br/>&nbsp;&nbsp;&nbsp;&nbsp;(i) that HL7 Australia content will not infringe upon any third-party intellectual property rights, including patents, copyrights, trademarks, or trade secrets; or
<br/>&nbsp;&nbsp;&nbsp;&nbsp;(ii) that HL7 Australia content is suitable, complete or applicable for any particular purpose or use contemplated by the User, and
<br/>&nbsp;&nbsp;(b) shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use or reliance on HL7 Australia content.

By accessing or using HL7 Australia content, Users agree to indemnify and hold harmless HL7 Australia, its officers, directors, employees, agents, and contributors of HL7 Australia content from any claims, damages, losses, liabilities, costs, or expenses (including legal fees) arising out of or in connection with the User’s use of or reliance on HL7 Australia content.


### FHIR Licensing and Trademarks

#### HL7 International Licensing
HL7 International Protocol Specifications Copyright © 2011+ HL7.

This specification (including downloadable content) is based on HL7 Protocol Specifications produced by HL7 International under the terms of [HL7® Governance and Operations Manual](https://www.hl7.org/documentcenter/public/membership/HL7_Governance_and_Operations_Manual.pdf) relating to Intellectual Property (Section 09, at the time this specification was published), specifically its copyright, trademark and patent provisions.

HL7 International has and will continue to enforce the copyrights it holds in the HL7 Protocol Specifications.

Most trademarks used in conjunction with HL7® products, services and activities are registered and/or owned by HL7 International, rather than by HL7 Australia, and their use is subject to the associated HL7 International IP policies and licensing terms.

HL7®, HEALTH LEVEL SEVEN®, FHIR® and the FHIR logo are trademarks owned by Health Level Seven International, registered with the United States Patent and Trademark Office.


#### HL7 Australia Licensing

HL7 Australia licenses use of some HL7 Australia content under Creative Commons license. Users may only rely on the terms of a Creative Commons licence where HL7 Australia has explicitly licensed the use of an Artefact under a Creative Commons licence and shall not presume that a Creative Commons licence applies to any other HL7 Australia content not explicitly covered by a Creative Commons licence.

**HL7 Australia use of this specification is licensed under Creative Commons "No Rights Reserved" ([CC0](http://creativecommons.org/publicdomain/zero/1.0/)).**

Copyright © 2012+ HL7 Australia

Intellectual property rights and trademarks are defined in full in the [HL7 Australia - Intellectual Property Policy](https://hl7.org.au/fhir/hl7a_ip_policy.pdf) document. 


### Third-party artefacts and terminologies

HL7 Australia FHIR Implementation Guides contain and reference intellectual property owned by third parties ("Third Party IP"). Acceptance of these License Terms does not grant any rights with respect to Third Party IP. The licensee alone is responsible for identifying and obtaining any necessary licences or authorisations to utilise Third Party IP in connection with the specification or otherwise.

Following is a non-exhaustive list of third-party artefacts and terminologies that may require a separate licence:

| Artefact / Terminology | Statement |
| SNOMED CT | International Healthcare Terminology Standards Developing Organization ([IHTSDO](http://snomed.org)). Where this specification includes or references content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO) it is distributed by agreement between IHTSDO and HL7, or the Australian Digital Health Agency via NCTS terms. Implementer use of SNOMED CT is not covered by this agreement |
| DICOM | National Electrical Manufacturers Association ([NEMA](http://dicom.nema.org/)).  This specification may reference content from DICOM, which is copyright NEMA, and distributed by agreement between NEMA/DICOM and HL7. Implementer use of DICOM is not covered by this agreement |
| Logical Observation Identifiers Names & Codes (LOINC) | This material contains content from LOINC ([http://loinc.org](http://loinc.org)). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at [http://loinc.org/license](http://loinc.org/license). LOINC® is a registered United States trademark of Regenstrief Institute, Inc. |
| National Clinical Terminology Services ([NCTS](https://www.healthterminologies.gov.au/)) | This material contains references to National Clinical Terminology Service artefacts these are Copyright © 2024 Australian Digital Health Agency, implementer user of this content are advised of the NCTS [Terms of Use](https://www.healthterminologies.gov.au/ncts-website-terms-of-use/). |


---

// File: input/pagecontent/profiles.md

### Profiles

These Profiles have been defined for this implementation guide.
{% include list-simple-profiles.xhtml %}

### Extensions

See the [registry of standard extensions]({{site.data.fhir.path}}extensibility-registry.html) for a complete discussion on extensions names used in FHIR.  All extensions used in this guide are defined in the base FHIR specification or [AU Base](http://hl7.org.au/fhir/4.1.0/profiles-and-extensions.html#extensions). 

No extensions have been defined for this implementation guide.


---

// File: input/pagecontent/searchparams.md

The following [search parameters]({{site.data.fhir.path}}search.html) have been extended in this Implementation Guide and are derived from either the Base FHIR specification or AU Base.  

The [registry of standard search parameters]({{site.data.fhir.path}}searchparameter-registry.html) can be found in the FHIR specification.

{% include list-simple-searchparameters.xhtml %}


---

// File: input/pagecontent/security.md

### Secure Messaging Certificate Usage

''Vendor'' refers to a secure messaging vendor

```
SEC01 If NASH certificate available it SHOULD be used for encryption and signing
```

```
SEC02 Vendors WILL BE responsible for their directory entries including certificate and identity quality assurance.
```

```
SEC03 Trust of vendor provider directory entries MUST be agreed between vendors implementing secure message exchange capability.
```

```
SEC04 Vendor allocated certificates MAY be used in Endpoint encrypting certificate extension content
```

```
SEC05 Vendor certificate allocation written policy statement SHOULD be made available for users of these certificates.
```

```
SEC06 Vendor certificates allocated to an Endpoint MUST contain a URL matching one of the Endpoint.identifier (Secure Messaging Target Identifier) values in the associated Endpoint instance
```

```
SEC07 Vendor allocated Endpoint.identifier (Secure Messaging Target Identifier) values (URL) must be assigned in domain under the vendor's control.
```

```
SEC08 Endpoint published vendor encrypting certificates MUST be issued by a CA where trust chain can be checked
```

```
SEC09 Vendor certificate secure message signed payload MUST provide a certificate where CA trust chain can be checked
```

```
SEC10 Secure message metadata sender Organisation (URI) MUST be present in the signing certificate Subject Alternative Names property
```


---

// File: input/pagecontent/terminology.md

This page lists all ValueSets and CodeSystems defined as part of this specification. 

### Value Sets

See the [FHIR terminology section]({{site.data.fhir.path}}terminologies-systems.html) for a complete discussion on value sets and a list of value set names used in FHIR.  Most value sets used in this guide are defined in the base FHIR specification or [AU Base](https://build.fhir.org/ig/hl7au/au-fhir-base/terminology.html). 

The following value sets are unique to this guide. 

{% include res-list-generator.md type="ValueSet" %}

### Code Systems

See the [FHIR terminology section]({{site.data.fhir.path}}terminologies-systems.html) for a complete discussion on code systems and a list of code system names used in FHIR.  Most code systems used in this guide are defined in the base FHIR specification or [AU Base](https://build.fhir.org/ig/hl7au/au-fhir-base/terminology.html). 

The following code systems are unique to this guide.

{% include res-list-generator.md type="CodeSystem" %}


---

// File: input/pagecontent/variance.md

### Variance from AU Base
This implementation guide has no variance (i.e. fully compliant) from AU Base FHIR Implementation Guide version 4.2.1-ci-build ([current](https://build.fhir.org/ig/hl7au/au-fhir-base/)).

This implementation guide has no variance (i.e. fully compliant) from AU Core FHIR Implementation Guide version 0.5.0-ci-build ([current](https://build.fhir.org/ig/hl7au/au-fhir-core/)).

#### Additionally Profiled Resources
This implementation guide profiles the following resources that are not profiled in AU Base:

- TBD

This implementation guide profiles the following resources that are not profiled in AU Core:

- TBD


---

// File: input/includes/nonnormative-example-boilerplate.md

These example instances show what data produced and consumed by systems conforming with this implementation guide might look like. Every effort has been made to ensure that the examples are correct and useful, but they are not a normative part of the specification nor are they fully representative of real world examples.

---

// File: input/includes/res-list-generator.md

<!-- Use for sorted flat list resources ValueSet, CodeSystem, SearchParameter, OperationDefinition  allows for highlighting new stuff using include parameter -->
{% assign my_types = "" %}
{%- for r_hash in site.data.resources -%}
  {% assign r_type = r_hash[0] | split: '/' | first %}
  {%- assign r = r_hash[1] -%}
  {%- if r_type == include.type %}
    {% assign my_types =  my_types | append: ","s | append: r.name %}
  {%- endif -%}
{% endfor %}
{% assign my_array = my_types | split: "," %}
{% assign my_array = my_array | sort | uniq %}

<ul>
{% for i in my_array offset:1 %}
  {%- for r_hash in site.data.resources -%}
      {% assign r_type = r_hash[0] | split: '/' | first %}
      {%- assign r = r_hash[1] -%}
      {%- if r.name == i and r_type == include.type %}
        {%- assign new = false -%}
        {%- for new_stuff in site.data.new_stuff -%}
           {%- if new_stuff == i -%}
             {%- assign new = true -%}
             {%- break -%}
           {%- endif -%}
        {%- endfor -%}

        {%- if new -%}
          <li><a href="{{r.path}}"><span class="bg-success" markdown="1">{{r.title}}</span><!-- new-content --></a></li>
        {% else %}
          <li><a href="{{r.path}}">{{r.title}}</a></li>
        {% endif %}

    {% endif %}
  {%- endfor -%}
{% endfor %}
</ul>


---

// File: input/intro-notes/StructureDefinition-au-pd-healthcareservice-intro.md


In a provider directory this allows the association of endpoints with the healthcare service and thus a channel for delivery to that service.

### Usage Notes

**Profile specific implementation guidance:**

At least one of the following defined identifier types, known to this profile, **SHALL** be supplied:

* [AU HPI-O](https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-hpio.html)
* [AU Residential Aged Care Service Identifier](https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-residentialagedcareserviceidentifier.html)
* [AU Vendor Directory Identifier](StructureDefinition-au-pd-vdi.html)


---

// File: input/intro-notes/StructureDefinition-au-pd-healthcareservice-notes.md

-----------
**Read: HealthcareService**

Read identified healthcare service resource content.

`GET [base]/HealthcareService/[id]`

*Example:* `GET [base]/HealthcareService/1234`

*Support:*

* MUST support read HealthcareService

*Implementation Notes:*  [[(how to read resource)]

-----------
**Search: Active Status**

Search based on active status of the healthcare service record.

`GET [base]/HealthcareService?active=[status]`

*Example:* `GET [base]/HealthcareService?active=true`

*Support:* MUST support search HealthcareService by active status (true \| false).

*Implementation Notes:* [(how to search by token)]

-----------
**Search: Name**

Search for a healthcare service by name.

`GET [base]/HealthcareService?name=[string]`

*Example:* `GET [base]/HealthcareService?name=southern%20clinic`

*Support:*

* MUST support search by HealthcareService name.

*Implementation Notes:* [(how to search by string)]

-----------
**Search: Organisation Provider of Healthcare Service Name**

Chained search (via Organisation) based on text name.

`GET [base]/HealthcareService?organization.name=[string]`

*Example:* `GET [base]/HealthcareService?organization.name=clinigroup`

*Support:*

* MUST support search by Organization name.

*Implementation Notes:* [(how to search by string)]

-----------
**Search: Healthcare Service Type**

Search for healthcare service based on type of service

`GET [base]/HealthcareService?service-type=[system]|[code]`

*Example:* `GET [base]/HealthcareService?service-type=http://snomed.info/sct|310030000`

*Support:*

* MUST support search by HealthcareService service-type.

*Implementation Notes:* [(how to search by token)]

-----------
**Search: Healthcare Service offered Specialties**

Search for healthcare service based on specialties offered

`GET [base]/HealthcareService?specialty=[system]|[code]`

*Example:* `GET [base]/HealthcareService?specialty=http://snomed.info/sct|394582007`

*Support:*

* MUST support search by HealthcareService specialty offered.

*Implementation Notes:* [(how to search by token)]

-----------
**Search: Organisation provider of Healthcare Service HPI-O**

Chained search (via Organisation) based on identifier token.

`GET [base]/HealthcareService?organization.identifier=[system]|[value]`

*Example:* `GET [base]/HealthcareService?organization.identifier=http://ns.electronichealth.net.au/id/hi/hpio/1.0|8003627500000328`

*Support:*

* MUST support search by HPI-O.

*Implementation Notes:* [(how to search by token)]

-----------
**Search: HPI-O**
Search based on identifier token. Direct HPI-O allocation to the service; may be different than the providing organisation but within the HPI-O hierarchy (networked HPI-O).

`GET [base]/HealthcareService?identifier=[system]|[value]`

*Example:* `GET [base]/HealthcareService?identifier=http://ns.electronichealth.net.au/id/hi/hpio/1.0|8003627500000328`

*Support:*

* MUST support search by HPI-O.

*Implementation Notes:* [(how to search by token)]

-----------
**Search: Location Address Parts**

Chained search (via Location) based on address parts for postcode, suburb, and state.

`GET [base]/HealthcareService?location.address-postalcode=[postcode]`

`GET [base]/HealthcareService?location.address-city=[suburb]`

`GET [base]/HealthcareService?location.address-state=[state]`

*Example:* 

`GET [base]/HealthcareService?location.address-postalcode=3101`

`GET [base]/HealthcareService?location.address-city=Bundaberg`

`GET [base]/HealthcareService?location.address-state=VIC`

*Support:*

* MUST support search PractitionerRole by location address parts address-postalcode, address-city, address-state.
* MUST support basic **param=[string]** search which is case and accent-insensitive search;  field equals or starts with the string value.

*Implementation Notes:* 
[(how to search by token)]

-----------
**Search: Location Distance**

Chained search (via Location) for a location within a nominated distance.

`GET [base]/HealthcareService?location.near=[latitude]:[longitude]&location.near-distance=[prefix][value]|[units-system]|[units]`

*Example:* `GET [base]/HealthcareService?location.near=-83.694810:42.256500&location.near-distance=le10.0|http://unitsofmeasure.org|km`

*Support:*

* SHOULD support search PractitionerRole by location within a distance.
* SHOULD support:
[prefix] fixed 'le' is less than or equal to distance
[value] is a decimal quantity number
[units-system] fixed 'http://unitsofmeasure.org' identifies standard distance units are used
[units] distance units must support 'km' or 'm'

*Implementation Notes:* 
[(how to search by token)] and [(how to search by quantity)]

-----------
**Search: Connection Type (Service Interface)**

Chained search (via Endpoint) based on token for a protocol to be used to connnect to the endpoint.
 
`GET [base]/HealthcareService?endpoint.connection-type=[system]|[code]`

*Example:* `GET [base]/HealthcareService?endpoint.connection-type=http://hl7.org.au/fhir/CodeSystem/smd-interfaces|http://ns.electronichealth.net.au/smd/intf/SealedMessageDelivery/TLS/2010`

*Support:*

* MUST support search by HealthcareService by endpoint connection type.

*Implementation Notes:* [(how to search by token)]

-----------
**Search: Payload Type (Service Category)**

Chained search (via Endpoint) based on token for the type of content supported by the endpoint.
 
`GET [base]/HealthcareService?endpoint.payload-type=[system]|[code]`

*Example:* `GET [base]/HealthcareService?endpoint.payload-type=http://hl7.org.au/fhir/CodeSystem/smd-interfaces|http://ns.hl7.org.au/hl7v2/profiles/HL7AU-OO-REF-SIMPLIFIED-201706`

*Support:*

* MUST support search HealthcareService by endpoint payload type.

*Implementation Notes:* [(how to search by token)]

-----------
**Search: Active Practitioner Role by Identifier Exists**

Reverse chained search [_has](http://hl7.org/fhir/stu3/search.html#has) argument based on token to ensure practitioner role with a specific identifier is active and is referring to this service.

This uses existing search parameters on PractitionerRole search capability where PractitionerRole.healthcareService is referencing the subject healthcare service.
 
`GET [base]/HealthcareService?_has:PractitionerRole:service:identifier=[system]|[value]&_has:PractitionerRole:service:active=[status]`

*Example:* `GET [base]/HealthcareService?_has:PractitionerRole:service:identifier=http://ns.electronichealth.net.au/id/medicare-provider-number|444455AA&_has:PractitionerRole:service:active=true`

*Support:*

* MAY support search HealthcareService for existence of active practitioner role with specific identifier.

*Implementation Notes:* [(how to search by token)], [(how to check for existence of referring resource)]

-----------
**Search: Include References**

The [_include](http://hl7.org/fhir/search.html#include) argument allows the automatic inclusion of referenced resources in the response for a search; based on search parameters defined for this resource type<sup>[1](http://hl7.org/fhir/STU3/healthcareservice.html#search)</sup>.

*Example:* `GET [base]/HealthcareService?_include=HealthcareService:organization&_include=HealthcareService:endpoint&_include=HealthcareService:location`

*Support:*

* MUST support _include HealthcareService references *location* (Location), *organization* (Organization), *endpoint* (Endpoint).

-----------
**Search: Combination**

* Searches MUST be able to be perfomed in a single request using logical AND for criteria. e.g specialty cardiologist in post code 4846

-----------

 [(how to search by reference)]: http://hl7.org/fhir/search.html#reference
 [(how to search by token)]: http://hl7.org/fhir/search.html#token
 [(how to search by date)]: http://hl7.org/fhir/search.html#date
 [(how to search by string)]: http://hl7.org/fhir/search.html#string
 [(how to search by quantity)]: http://hl7.org/fhir/search.html#quantity
 [(how to read resource)]: http://hl7.org/fhir/http.html#read
 [(how to check for existence of referring resource)]: http://hl7.org/fhir/stu3/search.html#has



---

// File: input/intro-notes/StructureDefinition-au-pd-location-intro.md

This profile defines the service delivery location by address at a minimum.

### Usage Notes

**Profile specific implementation guidance:**

One of the following defined identifier types, known to this profile, **SHOULD** be supplied:

* [AU Location Specific Practice Number](https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-locationspecificpracticenumber.html)
* [AU NATA Site Number](https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-natasitenumber.html)


---

// File: input/intro-notes/StructureDefinition-au-pd-location-notes.md


-----------
**Read: Location**

Read identified location resource content.

`GET [base]/Location/[id]`

*Example:*  `GET [base]/Location/1234`

*Support:*
* MUST support read Location

*Implementation Notes:*  [(how to read resource)]

-----------
**Search: Active Status**

Search based on active status of the endpoint record.

`GET [base]/Endpoint?status=[code]`

*Example:* `GET [base]/Endpoint?status=active`

*Support:* MUST support search Organization by active status code (active \| suspended \| inactive)

*Implementation Notes:* [(how to search by token)]

-----------
**Search: Location Address Parts**

Search based on address parts for postcode, suburb, and state.

`GET [base]/Location?address-postalcode=[postcode]`

`GET [base]/Location?address-city=[suburb]`

`GET [base]/Location?address-state=[state]`

*Example:* 

`GET [base]/Location?address-postalcode=3101`

`GET [base]/Location?address-city=Bundaberg`

`GET [base]/Location?address-state=VIC`

*Support:*
* SHOULD support search Location by address parts address-postalcode, address-city, address-state.
* SHOULD support basic **param=[string]** search which is case and accent-insensitive search;  field equals or starts with the string value.

*Implementation Notes:* [(how to search by string)]

-----------
**Search: Location Distance**

Search based on address within a nominated distance.

`GET [base]/Location?near=[latitude]:[longitude]&near-distance=[prefix][value]|[units-system]|[units]`

*Example:* `GET [base]/Location?near=-83.694810:42.256500&near-distance=le10.0|http://unitsofmeasure.org|km`

*Support:* 
* SHOULD support search Location within a distance.
* SHOULD support:
[prefix] fixed 'le' is less than or equal to distance
[value] is a decimal quantity number
[units-system] fixed 'http://unitsofmeasure.org' identifies standard distance units are used
[units] distance units must support 'km' or 'm'

*Implementation Notes:* 
[(how to search by token)] and [(how to search by quantity)]


-----------
**Search: Combination**

* The following searches MUST be able to be perfomed together in a single request using logical AND for criteria. e.g in postcode within 2km

-----------

 [(how to search by reference)]: http://hl7.org/fhir/search.html#reference
 [(how to search by token)]: http://hl7.org/fhir/search.html#token
 [(how to search by date)]: http://hl7.org/fhir/search.html#date
 [(how to search by string)]: http://hl7.org/fhir/search.html#string
 [(how to search by quantity)]: http://hl7.org/fhir/search.html#quantity
 [(how to read resource)]: http://hl7.org/fhir/http.html#read


---

// File: input/intro-notes/StructureDefinition-au-pd-organisation-intro.md

### Usage Notes

**Profile specific implementation guidance:**

At least one of the following defined identifier types, known to this profile, **SHALL** be supplied:

* [AU HPI-O](https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-hpio.html)
* [AU PAI-O Identifier](https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-paioidentifier.html)
* [AU CSP Registration Number](https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-cspregistrationnumber.html)
* [AU Australian Business Number](https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-australianbusinessnumber.html)
* [AU Australian Company Number](https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-australiancompanynumber.html)
* [AU Australian Registered Body Number](https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-australianregistredbodynumber.html)
* [AU NATA Accreditation Number](https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-nataaccreditationnumber.html)
* [AU Pharmacy Approval Number](https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-pharmacyapprovalnumber.html)


---

// File: input/intro-notes/StructureDefinition-au-pd-organisation-notes.md


-----------
**Read: Organisation**

Read identified organisation resource content.

`GET [base]/Organization/[id]`

*Example:* `GET [base]/Organization/1234`

*Support:* MUST support read Organisation

*Implementation Notes:*  [(how to read resource)]

-----------
**Search: Active Status**

Search based on active status of the organisation record.

`GET [base]/Organization?active=[status]`

*Example:* `GET [base]/Organization?active=true`

*Support:* MUST support search Organization by active status (true \| false).

*Implementation Notes:* [(how to search by token)]

-----------
**Search: HPI-O**

Search based on identifier token.

`GET [base]/Organization?identifier=[system]|[value]`

*Example:* `GET [base]/Organization?identifier=http://ns.electronichealth.net.au/id/hi/hpio/1.0|8003627500000328`

*Support:* SHOULD support search by HPI-O.

*Implementation Notes:* [(how to search by token)]

-----------
**Search: Name**

Search for a organisation by name.

`GET [base]/Organization?name=[string]`

*Example:* `GET [base]/Organization?name=southern%20clinic`

*Support:*

* MUST support search by Organisation name.

*Implementation Notes:* [(how to search by string)]

-----------
**Search: Combination**

* Searches MUST be able to be perfomed in a single request using logical AND for criteria. e.g name and status

-----------

 [(how to search by reference)]: http://hl7.org/fhir/search.html#reference
 [(how to search by token)]: http://hl7.org/fhir/search.html#token
 [(how to search by date)]: http://hl7.org/fhir/search.html#date
 [(how to search by string)]: http://hl7.org/fhir/search.html#string
 [(how to search by quantity)]: http://hl7.org/fhir/search.html#quantity
 [(how to read resource)]: http://hl7.org/fhir/http.html#read

 

---

// File: input/intro-notes/StructureDefinition-au-pd-practitioner-intro.md


### Usage Notes

**Profile specific implementation guidance:**

At least one of the following defined identifier types, known to this profile, **SHALL** be supplied:

* [AU HPI-I](https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-hpii.html)
* [AU PBS Prescriber Number](https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-pbsprescribernumber.html)
* [AU Care Agency Employee Identifier](https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-careagencyemployeeidentifier.html)
* [AU Ahpra Registration Number](https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-ahpraregistrationnumber.html)


---

// File: input/intro-notes/StructureDefinition-au-pd-practitioner-notes.md

-----------
**Read: Practitioner**

Read identified practitioner resource content.

`GET [base]/Practitioner/[id]`

*Example:* `GET [base]/Practitioner/1234`

*Support:* MUST support read Practitioner

*Implementation Notes:*  [(how to read resource)]

-----------
**Search: Active Status**

Search based on active status of the practitioner record.

`GET [base]/Practitioner?active=[status]`

*Example:* `GET [base]/Practitioner?active=true`

*Support:* MUST support search Practitioner by active status (true \| false).

*Implementation Notes:* [(how to search by token)]

-----------
**Search: Practitioner Name**

Search based on family, given and/or any name.

`GET [base]/Practitioner?family=[string]`

`GET [base]/Practitioner?family=[string]&given=[string]`

`GET [base]/Practitioner?name=[string]`

*Example:* 

`GET [base]/Practitioner?family=Smith`

`GET [base]/Practitioner?family=Smith&practitioner.given=John`

`GET [base]/Practitioner?name=Smith`

*Support:* SHOULD support search by family, given and name.

*Implementation Notes:*  [(how to search by string)]

-----------
**Search: HPI-I**

Search based on identifier token.
 
`GET [base]/Practitioner?identifier=[system]|[value]`

*Example:* `GET [base]/Practitioner?identifier=http://ns.electronichealth.net.au/id/hi/hpii/1.0|8003610833334085`

*Support:* SHOULD support search by HPI-I.

*Implementation Notes:* [(how to search by token)]

-----------

 [(how to search by reference)]: http://hl7.org/fhir/search.html#reference
 [(how to search by token)]: http://hl7.org/fhir/search.html#token
 [(how to search by date)]: http://hl7.org/fhir/search.html#date
 [(how to search by string)]: http://hl7.org/fhir/search.html#string
 [(how to search by quantity)]: http://hl7.org/fhir/search.html#quantity
 [(how to read resource)]: http://hl7.org/fhir/http.html#read


---

// File: input/intro-notes/StructureDefinition-au-pd-practitionerrole-intro.md


The Australian profile for practitioner role is for a single healthcare service only, this allows a single provider number to be associated with the role.

In the context of provider directories the practitioner role may include references to endpoints that describe channels of communication to the provider in this role.

### Usage Notes

**Profile specific implementation guidance:**

At least one of the following defined identifier types, known to this profile, **SHALL** be supplied:

* [AU Medicare Provider Number](https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-medicareprovidernumber.html)
* [AU National Provider Identifier At Organisation](https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-nationalprovideridentifieratorganisation.html)
* [AU Employee Number](https://hl7.org.au/fhir/4.1.0/StructureDefinition-au-employeenumber.html)
* [AU Vendor Directory Identifier](StructureDefinition-au-pd-vdi.html)


---

// File: input/intro-notes/StructureDefinition-au-pd-practitionerrole-notes.md


-----------
**Read: PractitionerRole**

Read identified practitioner role resource content.

`GET [base]/PractitionerRole/[id]`

*Example:* `GET [base]/PractitionerRole/1234`

*Support:*

* MUST support read PractitionerRole

*Implementation Notes:*  [[(how to read resource)]

-----------
**Search: Active Status**

Search based on active status of the practitioner role record.

`GET [base]/PractitionerRole?active=[status]`

*Example:* `GET [base]/PractitionerRole?active=true`

*Support:* MUST support search PractitionerRole by active status (true \| false).

*Implementation Notes:* [(how to search by token)]

-----------
**Search: Provider Practitioner Name**

Chained search (via Practitioner) based on family, given and/or any name.
Chained search (via Practitioner) based on family, given and/or any name.

`GET [base]/PractitionerRole?practitioner.family=[string]`

`GET [base]/PractitionerRole?practitioner.family=[string]&practitioner.given=[string]`

`GET [base]/PractitionerRole?practitioner.name=[string]`

*Example:* 

`GET [base]/PractitionerRole?practitioner.family=Smith`

`GET [base]/PractitionerRole?practitioner.family=Smith&practitioner.given=John`

`GET [base]/PractitionerRole?practitioner.name=Smith`

*Support:*

* MUST support search by Practitioner family, given and name.
* MUST support basic **param=[string]** search which is case and accent-insensitive search;  field equals or starts with the string value.

*Implementation Notes:*  [(how to search by string)]

-----------
**Search: Provider Role**

Search based on role.

`GET [base]/PractitionerRole?role=[system]|[code]`

*Example:* `GET [base]/PractitionerRole?role=http://snomed.info/sct|397897005`

*Support:*

* MUST support search PractitionerRole by role.

*Implementation Notes:* [(how to search by token)]

-----------
**Search: Provider at a HealthcareService**

Search based on role.

`GET [base]/PractitionerRole?service=[id]`

*Example:* `GET [base]/PractitionerRole?service=1234`

*Support:*

* MUST support search PractitionerRole by service.

*Implementation Notes:* [(how to search by reference)]

-----------
**Search: Provider Specialty**

Search based on specialty code.

`GET [base]/PractitionerRole?specialty=[system]|[code]`

*Example:* `GET [base]/PractitionerRole?specialty=http://snomed.info/sct|722165004`

*Support:*

* MUST support search PractitionerRole by specialty.

*Implementation Notes:* [(how to search by token)]

-----------
**Search: Organisation of Provider HPI-O**

Chained search (via Organisation) based on identifier token.

`GET [base]/PractitionerRole?organization.identifier=[system]|[value]`

*Example:* `GET [base]/PractitionerRole?organization.identifier=http://ns.electronichealth.net.au/id/hi/hpio/1.0|8003627500000328`

*Support:*

* MUST support search by HPI-O.

*Implementation Notes:* [(how to search by token)]

-----------
**Search: Provider Practitioner HPI-I**

Chained search (via Practitioner) based on identifier token.
 
`GET [base]/PractitionerRole?practitioner.identifier=[system]|[value]`

*Example:* `GET [base]/PractitionerRole?practitioner.identifier=http://ns.electronichealth.net.au/id/hi/hpii/1.0|8003610833334085`

*Support:*

* MUST support search PractitionerRole by HPI-I.

*Implementation Notes:* [(how to search by token)]


-----------
**Search: Vendor Directory Identifier**

Search based on identifier.

`GET [base]/PractitionerRole?identifier=[system]|[value]`

*Example:* `GET [base]/PractitionerRole?identifier=http://smvendor.com.au/id/provider-id|4412365432`

*Support:*

* MUST support search PractitionerRole by vendor directory identifier; [system] url will be defined by vendors. Effectively this is a general search for identifier capability.

*Implementation Notes:* [(how to search by token)]

-----------
**Search: Provider Number**

Search based on identifier.

`GET [base]/PractitionerRole?identifier=[system]|[value]`

*Example:* `GET [base]/PractitionerRole?identifier=http://ns.electronichealth.net.au/id/medicare-provider-number|2426621B`

*Support:*

* MUST support search PractitionerRole by Provider Number.

*Implementation Notes:* [(how to search by token)]

-----------
**Search: National Provider at Organisation Identifier**

Search based on identifier.

`GET [base]/PractitionerRole?identifier=[system]|[value]`

*Example:* `GET [base]/PractitionerRole?identifier=http://ns.electronichealth.net.au/id/npio|8003610833334085@8003627500000328`

*Support:*

* MUST support search PractitionerRole by National Provider at Organisation Identifier.

*Implementation Notes:* [(how to search by token)]

* Note NPIO format is [HPI-I]@[HPI-O].

-----------
**Search: Location Address Parts**

Chained search (via Location) based on address parts for postcode, suburb, and state.

`GET [base]/PractitionerRole?location.address-postalcode=[postcode]`

`GET [base]/PractitionerRole?location.address-postalcode=[postcode],[postcode]`

`GET [base]/PractitionerRole?location.address-postalcode=[postcode],[postcode],[postcode]` etc.

`GET [base]/PractitionerRole?location.address-city=[suburb]`

`GET [base]/PractitionerRole?location.address-state=[state]`

*Example:* 

`GET [base]/PractitionerRole?location.address-postalcode=3101`

`GET [base]/PractitionerRole?location.address-postalcode=3101,3101`

`GET [base]/PractitionerRole?location.address-city=Bundaberg`

`GET [base]/PractitionerRole?location.address-state=VIC`

*Support:*

* MUST support search PractitionerRole by location address parts address-postalcode, address-city, address-state.
* MUST support basic **param=[string]** search which is case and accent-insensitive search;  field equals or starts with the string value.

*Implementation Notes:* [(how to search by string)]

-----------
**Search: Location Distance**

Chained search (via Location) for a location within a nominated distance.

`GET [base]/PractitionerRole?location.near=[latitude]:[longitude]&location.near-distance=[prefix][value]|[units-system]|[units]`

*Example:* `GET [base]/PractitionerRole?location.near=-83.694810:42.256500&location.near-distance=le10.0|http://unitsofmeasure.org|km`

*Support:* 

* SHOULD support search PractitionerRole by location within a distance.
* SHOULD support:
[prefix] fixed 'le' is less than or equal to distance
[value] is a decimal quantity number
[units-system] fixed 'http://unitsofmeasure.org' identifies standard distance units are used
[units] distance units must support 'km' or 'm'

*Implementation Notes:* [(how to search by token)] and [(how to search by quantity)]

-----------
**Search: Connection Type (Service Interface)**

Chaned search (via Endpoint) based on token for a protocol to be used to connnect to the endpoint.
 
`GET [base]/PractitionerRole?endpoint.connection-type=[system]|[code]`

*Example:* `GET [base]/PractitionerRole?endpoint.connection-type=http://hl7.org.au/fhir/CodeSystem/smd-interfaces|http://ns.electronichealth.net.au/smd/intf/SealedMessageDelivery/TLS/2010`

*Support:*

* MUST support search by PractitionerRole by endpoint connection type.

*Implementation Notes:* [(how to search by token)]

-----------
**Search: Payload Type (Service Category)**

Chaned search (via Endpoint) based on token for the type of content supported by the endpoint.
 
`GET [base]/PractitionerRole?endpoint.payload-type=[system]|[code]`

*Example:* `GET [base]/PractitionerRole?endpoint.payload-type=http://hl7.org.au/fhir/CodeSystem/smd-interfaces|http://ns.hl7.org.au/hl7v2/profiles/HL7AU-OO-REF-SIMPLIFIED-201706`

*Support:*

* MUST support search PractitionerRole by endpoint payload type.

*Implementation Notes:* [(how to search by token)]

-----------
**Search: Include References**

The [_include](http://hl7.org/fhir/search.html#include) argument allows the automatic inclusion of referenced resources in the response for a search; based on search parameters defined for this resource type<sup>[1](http://hl7.org/fhir/STU3/practitionerrole.html#search)</sup>.

*Example:* `GET [base]/PractitionerRole?_include=PractitionerRole:practitioner&_include=PractitionerRole:organization&_include=PractitionerRole:endpoint&_include=PractitionerRole:location`

*Support:*

* MUST support _include PractitionerRole references *practitioner* (Practitioner), *location* (Location), *organization* (Organization), *endpoint* (Endpoint), *service* (HealthcareService).

-----------
**Search: Combination**

* Searches MUST be able to be perfomed  in a single request using logical AND for criteria. e.g specialty cardiologist in post code 4846

-----------

 [(how to search by reference)]: http://hl7.org/fhir/search.html#reference
 [(how to search by token)]: http://hl7.org/fhir/search.html#token
 [(how to search by date)]: http://hl7.org/fhir/search.html#date
 [(how to search by string)]: http://hl7.org/fhir/search.html#string
 [(how to search by quantity)]: http://hl7.org/fhir/search.html#quantity
 [(how to read resource)]: http://hl7.org/fhir/http.html#read


---

// File: input/intro-notes/StructureDefinition-au-pd-sm-endpoint-intro.md


### Usage Notes

**Profile specific implementation guidance:**

At least one of the following defined identifier types, known to this profile, **SHALL** be supplied:

* [PD Secure Messaging Delivery Target Identifier](StructureDefinition-au-pd-smdtargetidentifier.html)


---

// File: input/intro-notes/StructureDefinition-au-pd-sm-endpoint-notes.md

-----------
**Read: Endpoint**
Read identified endpoint resource content.

`GET [base]/Endpoint/[id]`

*Example:* 
`GET [base]/Endpoint/1234`

*Support:* MUST support read Endpoint

*Implementation Notes:*  [[(how to read resource)]

-----------
**Search: Active Status**

Search based on active status of the endpoint record.

`GET [base]/Endpoint?status=[code]`

*Example:* `GET [base]/Endpoint?status=active`

*Support:* MUST support search Organization by active status code (active \| suspended \| error \| off \| entered-in-error \| test)

*Implementation Notes:* [(how to search by token)]

-----------
**Search: Identifier (Secure Messaging Target Identifier)**

Search based on identifier token.

`GET [base]/Endpoint?identifier=[system]|[value]`

*Example:* `GET [base]/Endpoint?identifier=http://ns.electronichealth.net.au/smd/target|http://ns.argusdca.com.au/smd/id/hostname/ACC5959010000000`

*Support:* MUST support search by Secure Messaging Target Identifier

*Implementation Notes:* [(how to search by token)]

-----------

**Search: Connection Type (Service Interface)**

Search based on token for a protocol to be used to connnect to the endpoint.
 
`GET [base]/Endpoint?connection-type=[system]|[code]`

*Example:* `GET [base]/Endpoint?connection-type=http://hl7.org.au/fhir/CodeSystem/smd-interfaces|http://ns.electronichealth.net.au/smd/intf/SealedMessageDelivery/TLS/2010`

*Support:* MUST support search by Connection Type.

*Implementation Notes:* [(how to search by token)]

-----------
**Search: Payload Type (Service Category)**

Search based on token for the type of content supported by the endpoint.
 
`GET [base]/Endpoint?payload-type=[system]|[code]`

*Example:* `GET [base]/Endpoint?payload-type=http://hl7.org.au/fhir/CodeSystem/endpoint-payload-type|http://ns.hl7.org.au/hl7v2/profiles/HL7AU-OO-REF-SIMPLIFIED-201706`

*Support:* MUST support search by Payload Type.

*Implementation Notes:* [(how to search by token)]

-----------
**Search: Receiving Facility Extension Elements (Custom)**

Search based string element content in the au-receivingfacility extension<sup>[1](searchparams.html)</sup>. (namespace-id, universal-id, universal-id-type)
 
`GET [base]/Endpoint?au-receivingfacility-namespace-id=[string]&au-receivingfacility-universal-id=[string]&au-receivingfacility-universal-id-type=[string]`

*Example:* `GET [base]/Endpoint?au-receivingfacility-namespace-id=Buderim Medical Center&au-receivingfacility-universal-id=877F9695-1298-4E6A-B432-0FDD46AD80B8&au-receivingfacility-universal-id-type=GUID`

*Support:* MUST support search by Receiving Facility Extension Elements.

*Implementation Notes:* [(how to search by string)]

* For searching explicitly for empty elements use *:missing=true*  e.g. `au-receivingfacility-universal-id-type:missing=true`
* Definition: au-receivingfacility-namespace-id (MSH-6.1) search `extension('http://hl7.org.au/fhir/StructureDefinition/au-receivingfacility').extension('namespace-id').value`
* Definition: au-receivingfacility-universal-id (MSH-6.2) search `extension('http://hl7.org.au/fhir/StructureDefinition/au-receivingfacility').extension('universal-id').value`
* Definition: au-receivingfacility-universal-id-type (MSH-6.3) search `extension('http://hl7.org.au/fhir/StructureDefinition/au-receivingfacility').extension('universal-id-type').value`

-----------

 [(how to search by reference)]: http://hl7.org/fhir/search.html#reference
 [(how to search by token)]: http://hl7.org/fhir/search.html#token
 [(how to search by date)]: http://hl7.org/fhir/search.html#date
 [(how to search by string)]: http://hl7.org/fhir/search.html#string
 [(how to search by quantity)]: http://hl7.org/fhir/search.html#quantity
 [(how to read resource)]: http://hl7.org/fhir/http.html#read




---

// File: input/intro-notes/StructureDefinition-au-pd-smdtargetidentifier-intro.md

### Usage Notes



---

// File: input/intro-notes/StructureDefinition-au-pd-vdi-intro.md

### Usage Notes



---

// File: input/pagecontent/examples.md


The following examples are published with this guide and all are available as a downloadable zip file [here](downloads.html#examples).

{% include nonnormative-example-boilerplate.md %}

<!-- ================================================ -->
<!--  use this line to include an autogenerated list of all examples from the remove it if you would like to hand generate it -->

{% include example-list-generator.md %}
<!-- ================================================ -->












---

// File: input/includes/example-list-generator.md

{% assign my_types = "" %}
{%- for r_hash in site.data.artifacts -%}
  {% assign r_type = r_hash[0] | split: '/' | first %}
  {%- assign r = r_hash[1] -%}
  {%- if r.example -%}
    {% assign my_types =  my_types | append: ","s | append: r_type %}
  {%- endif -%}
{% endfor %}
{% assign my_array = my_types | split: "," %}
{% assign my_array = my_array | sort | uniq %}

{% assign lhtype = "" %}
{% for i in my_array offset:1 %}
   {% assign dhtype = i | split: '-'  | first %}
   {%- if lhtype != dhtype %}
    {% assign lhtype = dhtype %}
### {{ lhtype }}
   {% endif %}
  <ul>
  {%- for r_hash in site.data.pages -%}
      {% assign r_type = r_hash[0] | split: '/' | first %}
      {%- assign r = r_hash[1] -%}
      {% assign dtype = r_type | split: '-'  | first %}
      {%- if r_type == i %}
          <li><a href="{{r_type}}">{{r.title}}</a></li>
      {% endif %}
  {%- endfor -%}
  </ul>
{% endfor %}



---

