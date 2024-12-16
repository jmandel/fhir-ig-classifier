File: repos/IHE_SLASH_ITI.mCSD/input/fsh/Aliases.fsh

Alias: SCT = http://snomed.info/sct
Alias: UCUM = http://unitsofmeasure.org
Alias: LOINC = http://loinc.org
Alias: DCM = http://dicom.nema.org/resources/ontology/DCM

Alias: $BOUNDARY = http://hl7.org/fhir/StructureDefinition/location-boundary-geojson
Alias: $BasicAuditEntityType = https://profiles.ihe.net/ITI/BALP/CodeSystem/BasicAuditEntityType


---

File: repos/IHE_SLASH_ITI.mCSD/input/fsh/audit-90.fsh

Profile:      AuditMcsdCareServicesRead
Parent:       https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Read
Id:           IHE.mCSD.Audit.CareServices.Read
Title:        "Audit Event for Find Matching Care Services Transaction by the Care Services Selective Consumer and Care Services Selective Supplier for Read"
Description:  """
Defines constraints on the AuditEvent Resource to record when a Find Matching Care Services Transaction happens
to read a Care Services resource, as recorded by the Care Services Selective Consumer or Care Services Selective Supplier.
"""
* subtype 2..*
* subtype contains iti90 1..1
* subtype[iti90] = urn:ihe:event-type-code#ITI-90 "Find Matching Care Services"
* entity[data]
  * role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
  * what 1..1
  * what only Reference(MCSDEndpoint or MCSDHealthcareService or MCSDLocation or MCSDOrganizationAffiliation or MCSDOrganization or MCSDPractitioner or MCSDPractitionerRole)

Profile:      AuditMcsdCareServicesQuery
Parent:       https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Query
Id:           IHE.mCSD.Audit.CareServices.Query
Title:        "Audit Event for Find Matching Care Services Transaction by the Care Services Selective Consumer and Care Services Selective Supplier for Query"
Description:  """
Defines constraints on the AuditEvent Resource to record when a Find Matching Care Services Transaction happens
to query a Care Services Resource, as recorded by the Care Services Selective Supplier or Care Services Selective Consumer.
"""
* subtype 2..*
* subtype contains iti90 1..1
* subtype[iti90] = urn:ihe:event-type-code#ITI-90 "Find Matching Care Services"


---

File: repos/IHE_SLASH_ITI.mCSD/input/fsh/audit-91.fsh

Profile:      AuditMcsdCareServicesUpdates
Parent:       AuditEvent
Id:           IHE.mCSD.Audit.CareServices.Updates
Title:        "Audit Event for Request Care Services Updates Transaction by the Care Services Update Consumer and Care Services Update Supplier"
Description:  """
Defines constraints on the AuditEvent Resource to record when a Request Care Services Updates Transaction happens
for a Care Services Resource updates, as recorded by the Care Services Update Supplier or Care Services Update Consumer.
"""
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"

* subtype ^slicing.discriminator.type = #value
* subtype ^slicing.discriminator.path = "$this"
* subtype ^slicing.rules = #open // allow other codes
* subtype 2..
* subtype contains anyHistoryT 1..1 and iti91 1..1
* subtype[anyHistoryT] =  http://hl7.org/fhir/restful-interaction#history-type "history-type" 
* subtype[iti91] = urn:ihe:event-type-code#ITI-91 "Request Care Services Updates"
* action = #E
* recorded 1..1
// failures are recorded differently
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* agent ^slicing.discriminator.type = #value
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #open
* agent 2..
* agent contains 
    client 1..1 and 
    server 1..1 and 
    user 0..1
* agent[client].type = http://dicom.nema.org/resources/ontology/DCM#110153 "Source Role ID"
* agent[client].who 1..1 // client identifier, May be an Device Resource, but more likely an identifier given the App identified in the OAuth token 
* agent[client].network 1..1 // as known by TCP connection information
* agent[client].media 0..0 
* agent[server].type = http://dicom.nema.org/resources/ontology/DCM#110152 "Destination Role ID"
* agent[server].who 1..1 // server identifier. May be a Device Resource, but likely just an identifier of the domain name
* agent[server].network 1..1 // as known by TCP connection information
* agent[server].media 0..0 
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP "information recipient"
* agent[user].who 1..1 // May be a Resource, but likely just an identifier from the OAuth token
* agent[user].requestor = true
* agent[user].role MS // if the OAuth token includes any roles, they are recorded here
* agent[user].name MS // might also be in .who.text but here is searchable
* agent[user].media 0..0 // media is physical storage media identification
* agent[user].network 0..0 // users are not network devices
* agent[user].purposeOfUse MS // if the OAuth token includes a PurposeOfUse it is recorded here
* source MS // what agent recorded the event. Likely the client or server but might be an intermediary
* entity ^slicing.discriminator.type = #value
* entity ^slicing.discriminator.path = "type"
* entity ^slicing.rules = #open
* entity 1..
* entity contains 
	transaction 0..1 and
    query 1..1
* entity[transaction].type = $BasicAuditEntityType#XrequestId
* entity[transaction].what.identifier.value 1..1
* entity[transaction].what.identifier.value ^short = "the value of X-Request-Id"
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].what 0..0
* entity[query].lifecycle 0..0 
* entity[query].securityLabel ^short = "may contain the security labels on the Bundle search set returned"
* entity[query].description 0..1 // allow the query string to exist in description in non base64Binary format
* entity[query].query 1..1
* entity[query].detail 0..0


---

File: repos/IHE_SLASH_ITI.mCSD/input/fsh/codes.fsh

CodeSystem:     MCSDOrganizationLocationTypes
Id:             IHE.mCSD.Organization.Location.Types
Title:          "mCSD Type codes for Organizations and Locations"
Description:    "mCSD Type codes for specialized Organization and Location resources."

* ^caseSensitive = true
* ^experimental = false
* #facility "Facility"
* #jurisdiction "Jurisdiction"

ValueSet:     MCSDOrganizationLocationTypeValueSet
Id:             IHE.mCSD.Organization.Location.Types
Title:          "mCSD Types for Organizations and Locations"
Description:    "mCSD Types for specialized Organization and Location resources."

* ^experimental = false
* codes from system MCSDOrganizationLocationTypes

---

File: repos/IHE_SLASH_ITI.mCSD/input/fsh/endpoint.fsh

// Open-Issue - explaining that we only defined the sync pattern for XDS/XCA/XDR for the public-comment deadline, and that after that is addressed we will add in async and as4; and MHD.
// TODO: Digital Certificates to support async end-to-end security -- Not needed for sync that uses TLS
// Given that PA refuses to put in a publicKey, and recommends local extension. I will add an extension.
//  https://jira.hl7.org/browse/FHIR-10764
// Note VhDir has an extension http://hl7.org/fhir/uv/vhdir/StructureDefinition/digitalcertificate
// VhDir is a very complex extension. Not clear to me if this complexity is needed. Not clear who advised this structure.


Extension: EndpointSpecificType
Id: ihe-endpointspecifictype
Title: "Endpoint Specific Type"
Description: """
The specific endpoint type. Given that the FHIR R4 Endpoint.connectionType is limited to a one value from a valueSet given by FHIR core and that valueSet includes XCA thus by Extensible rules one is forced to pick that value, we choose to add an additional codeableConcept for a more detailed code(s).
"""
* ^context[+].type = #element
* ^context[=].expression = "Endpoint"
* value[x] only CodeableConcept
* valueCodeableConcept from 	MCSDEndpointTypesVS (preferred)


Instance: Endpoint-EndpointSpecificType
InstanceOf: SearchParameter
Title: "Search on the IHE defined extension for Endpoint specificType"
Usage: #definition
* url = "https://profiles.ihe.net/ITI/mCSD/SearchParameter/Endpoint-EndpointSpecificType"
* description = "This SearchParameter enables finding Endpoints by the specificType code.  This resource is created as informative content."
* name = "EndpointSpecificType"
* status = #active
* code = #specificType
* base = #Endpoint
* expression = "(extension('https://profiles.ihe.net/ITI/mCSD/StructureDefinition/ihe-endpointspecifictype').value.ofType(CodeableConcept))"
* type = #token


CodeSystem:  MCSDEndpointTypes
Title: "mCSD Endpoint Types"
Description:  """
mCSD Endpoint types beyond those in the FHIR core.

The codes defined here are endpoint types defined in IHE profiles at the time of publication. 
Other codes might be defined in new IHE profiles written later, where they could define their own code and own codeSystem.

Code pattern: `{Profile}-{Actor}-{Transaction}[-{option}]`
* Where Profile is the acronym
* Where Actor name compressed to be short yet clear (camel case)
* Where Transaction name is compressed to be short yet clear (camel case)
* Where the code definition spells out these using the formal names and transaction number
* Where an option is important it can be prepended

Note that this codeSystem contains only endpoints needed for Some IHE profiles, and only for the synchronous communication pattern. When Async is supported additional entries will be needed on these actors, and the peer actor will also need to be described. Async is not in scope at this time.
"""
* ^caseSensitive = true
* ^experimental = false
* ^hierarchyMeaning = #part-of
* ^experimental = false

// XCA Actor transactions for Synchronous use https://profiles.ihe.net/ITI/TF/Volume1/ch-18.html
* #ihe-xca "XCA"
  * #XCA-InitGateway-Query "XCA InitiatingGateway ITI-18 Registry Stored Query Synchronous"
  * #XCA-InitGateway-Retrieve "XCA InitiatingGateway ITI-43 Retrieve Document Set Synchronous"
  * #XCA-InitGateway-Query-Async "XCA InitiatingGateway ITI-18 Registry Stored Query Asynchronous"
  * #XCA-InitGateway-Retrieve-Async "XCA InitiatingGateway ITI-43 Retrieve Document Set Asynchronous"
  * #XCA-InitGateway-Query-AsyncResponse "XCA InitiatingGateway ITI-38 Cross Gateway Query Asynchronous Response"
  * #XCA-InitGateway-Retrieve-AsyncResponse "XCA InitiatingGateway ITI-39 Cross Gateway Retrieve Asynchronous Response"
  * #XCA-RespGateway-Query "XCA RespondingGateway ITI-38 Cross Gateway Query Synchronous"
  * #XCA-RespGateway-Retrieve "XCA RespondingGateway ITI-39 Cross Gateway Retrieve Synchronous"
  * #XCA-RespGateway-Query-Async "XCA RespondingGateway ITI-38 Cross Gateway Query Asynchronous"
  * #XCA-RespGateway-Retrieve-Async "XCA RespondingGateway ITI-39 Cross Gateway Retrieve Asynchronous"
// XCPD Actor transactions for Synchronous use https://profiles.ihe.net/ITI/TF/Volume1/ch-27.html
* #ihe-xcpd "XCPD"
  * #XCPD-InitGateway-PatientDiscovery-AsyncResponse "XCPD InitiatingGateway ITI-55 Cross Gateway Patient Discovery Asynchronous Response"
  * #XCPD-RespGateway-PatientDiscovery "XCPD RespondingGateway ITI-55 Cross Gateway Patient Discovery Synchronous"
  * #XCPD-RespGateway-PatientDiscovery-Async "XCPD RespondingGateway ITI-55 Cross Gateway Patient Discovery Asynchronous"
// XDS Actor transactions for Synchronous use https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html
* #ihe-xds "XDS"
  * #XDS-Registry-Feed "XDS Registry ITI-8 Patient Identity Feed Synchronous"
  * #XDS-Registry-Feed-v3 "XDS Registry ITI-44 Patient Identity Feed HL7v3 Synchronous"
  * #XDS-Registry-Register "XDS Registry ITI-42 Register Document Set-b Synchronous"
  * #XDS-Registry-Query "XDS Registry ITI-18 Registry Stored Query Synchronous"
  * #XDS-Registry-RegOnDemand "XDS Registry ITI-61 Register On-Demand Document Entry Synchronous"
  * #XDS-Registry-Register-Async "XDS Registry ITI-42 Register Document Set-b Asynchronous"
  * #XDS-Registry-Query-Async "XDS Registry ITI-18 Registry Stored Query Asynchronous"
  * #XDS-Registry-RegOnDemand-Async "XDS Registry ITI-61 Register On-Demand Document Entry Asynchronous"
  * #XDS-Repository-ProvideReg "XDS Repository ITI-41 Provide&Register Document Set-b Synchronous"
  * #XDS-Repository-Retrieve "XDS Repository/IntegratedSourceRepository ITI-43 Retrieve Document Set Synchronous"
  * #XDS-Repository-ProvideReg-Async "XDS Repository ITI-41 Provide&Register Document Set-b Asynchronous"
  * #XDS-Repository-Retrieve-Async "XDS Repository/IntegratedSourceRepository ITI-43 Retrieve Document Set Asynchronous"
  * #XDS-Repository-Register-AsyncResponse "XDS Repository/IntegratedSourceRepository ITI-42 Register Document Set-b Asynchronous Response"
  * #XDS-OnDemandSource-Retrieve "XDS OnDemandSource ITI-43 Retrieve Document Set Synchronous"
  * #XDS-OnDemandSource-Retrieve-Async "XDS OnDemandSource ITI-43 Retrieve Document Set Asynchronous"
  * #XDS-OnDemandSource-RegOnDemand-AsyncResponse "XDS OnDemandSource ITI-61 Register On-Demand Document Entry Asynchronous Response"
  * #XDS-Source-ProvideReg-AsyncResponse "XDS Document Source ITI-41 Provide&Register Document Set-b Asynchronous Response"
  * #XDS-Consumer-Query-AsyncResponse "XDS Document Consumer ITI-18 Registry Stored Query Asynchronous Response"
  * #XDS-Consumer-Retrieve-AsyncResponse "XDS Document Consumer ITI-43 Retrieve Document Set Asynchronous Response"
// PDQ Actor transactions https://profiles.ihe.net/ITI/TF/Volume1/ch-8.html
* #ihe-pdq "PDQ"
  * #PDQ-Supplier-Query "PDQ Patient Demographics Supplier ITI-21 Patient Demographics Query Synchronous"
  * #PDQ-Supplier-VisitQuery "PDQ Patient Demographics Supplier ITI-22 Patient Demographics and Visit Query Synchronous"
// PIX Actor transactions https://profiles.ihe.net/ITI/TF/Volume1/ch-5.html
* #ihe-pix "PIX"
  * #PIX-Xmanager-Feed "PIX Patient Identity Cross-Reference Manager ITI-8 Patient Identity Feed Synchronous"
  * #PIX-Xmanager-Feed-v3 "PIX Patient Identity Cross-Reference Manager ITI-30 Patient Identity Management Synchronous"
  * #PIX-Xmanager-Query "PIX Patient Identity Cross-Reference Manager ITI-9 PIX Query Synchronous"
  * #PIX-Consumer "PIX Patient Identifier Cross-reference Consumer ITI-10 PIX Update Notification Synchronous"
// XDR Actor transactions https://profiles.ihe.net/ITI/TF/Volume1/ch-15.html
* #ihe-xdr "XDR"
  * #XDR-Recipient-ProvideReg "XDR Document Recipient ITI-41 Provide and Register Document Set-B Synchronous"
// MHD Actor transactions https://profiles.ihe.net/ITI/MHD/index.html
* #ihe-mhd "MHD"
  * #MHD-Recipient-ProvideReg "MHD Document Recipient ITI-65 Provide Document Bundle"
// MHD Document Responder is RESTful, so should it have one or many?
//* #MHD-Responder "MHD Document Responder ITI-66/ITI-67/ITI-68"


ValueSet: MCSDEndpointTypesVS
Title: "mCSD Endpoint Types ValueSet"
Description: "ValueSet of the Endpoint types allowed"
//Note that when MCSDEndpointTypes has more than Document Sharing in it, this will need to be more explicit. 
* ^experimental = false
* codes from system MCSDEndpointTypes

ValueSet: MCSDEndpointTypesCoreDocShareVS
Title: "mCSD Endpoint Core Document Sharing Types ValueSet"
Description: "ValueSet of the Core Document Sharing Endpoint types allowed"
* ^experimental = false
* MCSDEndpointTypes#ihe-xcpd
* MCSDEndpointTypes#ihe-xca
* MCSDEndpointTypes#ihe-xds
* MCSDEndpointTypes#ihe-xdr
* MCSDEndpointTypes#ihe-pdq
* MCSDEndpointTypes#ihe-pix
* MCSDEndpointTypes#ihe-mhd


CodeSystem:     MCSDEndpointIdentifierTypes
Title:          "mCSD Type codes for Endpoint.identifier"
Description:    "mCSD Type codes for specific business identifiers for Endpoint resources."

* ^caseSensitive = true
* ^experimental = false
* #HCID "Home Community Identifier: Identifies an Endpoint to an IHE community."
* #DocRepoId "Identifies an Endpoint that is a source or repository of clinical documents."

ValueSet:     MCSDEndpointIdentifierTypeValueSet
Title:          "mCSD Type codes for Endpoint.identifier"
Description:    "mCSD Type codes for specific business identifiers for Endpoint resources."

* ^experimental = false
* codes from system MCSDEndpointIdentifierTypes

// TODO: Create an invariant so that either managingOrganization or contact must be populated. For now we just force manaingOrganization like the other resources in mCSD



Profile:      MCSDEndpoint
Parent:       Endpoint
Id:           IHE.mCSD.Endpoint
Title:        "mCSD Endpoint"
Description:  """
A profile on the mCSD Endpoint.

An Organization may be reachable through electronic Endpoint(s).
An Endpoint may be a FHIR server, an IHE web services actor, or some other
mechanism. If an Organization does not have an Endpoint, it may still be
reachable via an Endpoint at its parent Organization or an affiliated Organization.

Given that in FHIR R4 the .connnectionType is 1..1, each type of endpoint will be indicated with an independent Endpoint resource.
"""
* implicitRules 0..0
* modifierExtension 0..0
* status MS
* status ^short = "represents the current status of this endpoint."
* status ^comment = "Should be updated when maintenance or other status changes happen."

* managingOrganization 1..1
* managingOrganization only Reference(MCSDOrganization)
* managingOrganization ^short = "Organization that manages this endpoint."
* managingOrganization ^definition = "The organization that manages this endpoint, even if technically another organization is hosting this in the cloud."
* managingOrganization ^comment = """
This element is used when there is a technical problem with the endpoint operation, and would be used to contact for technical support.

This managing organization relationship is potentially independent of if the organization is the custodian/owner of the data available thru this endpoint.
"""
* contact ^definition = "Contact details for a human to contact about the endpoint. The primary use of this for system administrator troubleshooting."
* period MS
* period ^short = "Overall deployment lifetime for this endpoint."
* period ^comment = "usually indicating when the endpoint was deployed, and may indicate when this endpoint will be decommissioned."
* extension contains MCSDPurposeOfUse named purposeOfUse 0..*



Profile:      MCSDEndpointDocShare
Parent:       MCSDEndpoint
Id:           IHE.mCSD.Endpoint.DocShare
Title:        "mCSD Endpoint for Document Sharing"
Description:  """
A profile on the mCSD Endpoint for Document Sharing environments.

Given that in FHIR R4 the .connnectionType is 1..1, each type of endpoint will be indicated with an independent Endpoint resource. Thus a XCA Responding Gateway will need two Endpoint instances to express Query vs Retrieve.

Open-Issues:
1. That payloadType and payloadMimeType are either empty to indicate that the endpoint is not constrained; or fully populated. 
2. That payloadType and PayloadMimeType for XCA/XDS/MHD Query and XCA/XDS/MHD Retrieve would be the same thus replicating the capability at both endpoints. 
3. It did not seem right that Query be indicated with a mimeType of ebRegistry as that is not helpful to the use-case.
4. should the homeCommunityId be mandated here, should those behind it be here, should this be empty?
5. would a Proxy service that is supporting OrgAff be a good example of NOT putting a homeCommunityId in the endpoint.identifier?
"""
* identifier 0..*
* identifier ^short = "should be the homeCommunityId(s)"
* identifier ^definition = "For simple single depth XCA communites."
* extension contains EndpointSpecificType named specificType 0..* MS
* connectionType from MCSDEndpointTypesCoreDocShareVS (required)
* name 0..0 
* name ^short = "Nothing useful to put in the name"
* payloadType MS
//* payloadType from http://ihe.net/fhir/ihe.formatcode.fhir/ValueSet/formatcode (extensible)
// TODO -- not sure what the mime-type should be on XCA query vs retrieve? Presume they will be the same?
* payloadType ^short = "FormatCode(s)"
* payloadType ^definition = "The list of FormatCode(s) available at this endpoint."
* payloadType ^comment = "Empty list of FormatCode(s) indicates indeterminate set of FormatCodes supported. For XCA Responding Gateways that do not host data themselves, but rather proxy for other communities, leave this element empty."
* payloadMimeType MS
* address 1..1
* address ^comment = "XCA SOAP endpoint"
* header 0..0
* header ^short = "XCA defines protocol"



Instance: ex-endpointXCAquery
InstanceOf: MCSDEndpointDocShare
Title: "Example of an mCSD XCA Query Endpoint"
Description: """
This is an example of an XCA Retrieve endpoint for OrgA
- supports XPHR and IPS
- supports mime-type for FHIR, CDA, and PDF
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier.type =  urn:ihe:iti:xca:2010#homeCommunityId
* identifier.value = "urn:uuid:cadbf8d0-5493-11ec-bf63-0242ac130002" // OrgA
* status = #active
* connectionType = MCSDEndpointTypes#ihe-xca
* extension[specificType].valueCodeableConcept = MCSDEndpointTypes#XCA-RespGateway-Query
// no name
* managingOrganization = Reference(Organization/ex-OrgA)
// no contact, use the managing Org
* period.start = 2022-02-10
* payloadType[+] = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:pcc:xphr:2007
* payloadType[+] = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:pcc:ips:2020
* payloadMimeType[+] = #application/fhir+xml
* payloadMimeType[+] = #application/fhir+json
* payloadMimeType[+] = #application/pdf
* payloadMimeType[+] = #text/xml
* address = "http://example.org/xca/query"
// no header

Instance: ex-endpointXCAretrieve
InstanceOf: MCSDEndpointDocShare
Title: "Example of an mCSD XCA Retrieve Endpoint"
Description: """
This is an example of an XCA Retrieve endpoint
- supports XPHR and IPS
- supports mime-type for FHIR, CDA, and PDF
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier.type =  urn:ihe:iti:xca:2010#homeCommunityId
* identifier.value = "urn:uuid:cadbf8d0-5493-11ec-bf63-0242ac130002" // OrgA
* status = #active
* connectionType = MCSDEndpointTypes#ihe-xca
* extension[specificType].valueCodeableConcept = MCSDEndpointTypes#XCA-RespGateway-Retrieve
// no name
* managingOrganization = Reference(Organization/ex-OrgA)
// no contact, use the managing Org
* period.start = 2022-02-10
* payloadType[+] = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:pcc:xphr:2007
* payloadType[+] = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:pcc:ips:2020
* payloadMimeType[+] = #application/fhir+xml
* payloadMimeType[+] = #application/fhir+json
* payloadMimeType[+] = #application/pdf
* payloadMimeType[+] = #text/xml
* address = "http://example.org/xca/retrieve"
// no header


Instance: ex-endpointDicom
InstanceOf: MCSDEndpoint
Title: "Example of an Endpoint that is not constrained by mCSD XCA constraints."
Description: """
This is an example of a DICOM WADO-RS endpoint.
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* extension[purposeOfUse].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ActReason#RECORDMGT
* status = #active
* connectionType = http://terminology.hl7.org/CodeSystem/endpoint-connection-type#dicom-wado-rs
* name = "The PACS"
* managingOrganization = Reference(MCSDOrganization-ExamplePartner)
// no contact, use the managing Org
* period.start = 2022-02-10
* address = "http://example.org/pacs"
// no header
// note payloadType is manditory, but will not be in R5 https://jira.hl7.org/browse/FHIR-25393
* payloadType[+].text = "DICOM WADO-RS"
* payloadMimeType[+] = #image/dicom+jpeg


---

File: repos/IHE_SLASH_ITI.mCSD/input/fsh/ex-audit-90.fsh

Instance:     ex-AuditMcsdCareServicesRead
InstanceOf:   AuditMcsdCareServicesRead
Title:        "Audit example for ITI-90 for Care Services Selective Consumer for read."
Description:  "Audit example for a Care Services Selective Consumer requesting a read on a Care Services resource for ITI-90."
Usage:        #example

* subtype[anyRead] = http://hl7.org/fhir/restful-interaction#read "read"
* subtype[iti90] = urn:ihe:event-type-code#ITI-90 "Find Matching Care Services"
* recorded = 2022-04-13T19:33:45Z
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110153 "Source Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110152 "Destination Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[data]
  * what = Reference(MCSDPractitioner-Example)

Instance:     ex-AuditMcsdCareServicesQuery
InstanceOf:   AuditMcsdCareServicesQuery
Title:        "Audit example for ITI-90 for Care Services Selective Consumer for query."
Description:  "Audit example for a Care Services Selective Consumer requesting a query on a Care Services Resource for ITI-90."
Usage:        #example
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
* subtype[iti90] = urn:ihe:event-type-code#ITI-90 "Find Matching Care Services"
* recorded = 2022-04-13T19:33:45Z
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who = Reference(Device/ex-device)
* agent[client].network.address = "http://server.example.com/fhir"
* agent[client].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who.display = "myMachine.example.org"
* agent[server].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[server].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].query = "UHJhY3RpdGlvbmVyP2xvY2F0aW9uPUxvY2F0aW9uLzEyMw=="

Instance:     ex-device
InstanceOf:   Device
Title:        "Device Example for SVCM"
Description:  """
Device Example for SVCM.
"""
Usage:        #example


---

File: repos/IHE_SLASH_ITI.mCSD/input/fsh/ex-audit91.fsh


Instance:     ex-AuditMcsdCareServicesUpdates
InstanceOf:   AuditMcsdCareServicesUpdates
Title:        "Audit example for ITI-91 for Care Services Update Supplier."
Description:  "Audit example for a Care Services Update Consumer requesting updates on a Care Services Resource for ITI-91."
Usage:        #example
* subtype[anyHistoryT] = http://hl7.org/fhir/restful-interaction#history-type "history-type"
* subtype[iti91] = urn:ihe:event-type-code#ITI-91 "Request Care Services Updates"
* recorded = 2022-04-13T19:33:45Z
* source.site = "central.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who = Reference(Device/ex-device)
* agent[client].network.address = "http://central.example.com/fhir"
* agent[client].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who.display = "registry.example.org"
* agent[server].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[server].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].query = "UHJhY3RpdGlvbmVyL19oaXN0b3J5P19zaW5jZT0yMDIyLTAxLTAx"

---

File: repos/IHE_SLASH_ITI.mCSD/input/fsh/example-mcsd.fsh

// jurisdiction pair

Instance: MCSDJurisdictionOrganization-Example
InstanceOf: MCSDJurisdictionOrganization
Title: "Example mCSD Jurisdiction Organization"
Description: "Organization resource for an example mCSD Jurisdiction"
Usage: #example
* name = "MCSDJurisdictionOrganization-Example"
* active = true
* type[jurisdiction] = MCSDOrganizationLocationTypes#jurisdiction

Instance: MCSDJurisdictionLocation-Example
InstanceOf: MCSDJurisdictionLocation
Title: "Example mCSD Jurisdiction Location"
Description: "Location resource for an example mCSD Jurisdiction"
Usage: #example
* name = "MCSDJurisdictionLocation-Example"
* status = #active
* managingOrganization = Reference(MCSDJurisdictionOrganization-Example)
* physicalType = http://terminology.hl7.org/CodeSystem/location-physical-type#jdn
* type[jurisdiction] = MCSDOrganizationLocationTypes#jurisdiction

// another department

Instance: MCSDOrganization-ExamplePartner
InstanceOf: MCSDOrganization
Title: "Example Partner Organization"
Description: "Example Organization for a Partner Organization"
Usage: #example
* name = "Organization-ExamplePartner"
* active = true
* type[+] = http://terminology.hl7.org/CodeSystem/organization-type#govt

// Hierarchy Code System Example
CodeSystem:  MCSDExampleHierarchy
Id: mcsd-example-hierarchy
Title: "mCSD Example Hierarchy Code System"
Description:  "An example vocabulary of hierarchies."
* ^caseSensitive = false
* ^content = #complete
* ^experimental = true
// * ^url = http://example.org/IHE/CodeSystem/mcsd-example-hierarchy
* #supply "Supply Chain"
* #admin "Administrative"

// facility pair which is part of a jurisdiction and has one other external org attached

Instance: MCSDFacilityOrganization-Example
InstanceOf: MCSDFacilityOrganization
Title: "Example mCSD Facility Organization"
Description: "Organization resource for an example mCSD Facility"
Usage: #example
* name = "MCSDFacilityOrganization-Example"
* active = true
* type[facility] = MCSDOrganizationLocationTypes#facility
* partOf = Reference(MCSDJurisdictionOrganization-Example)

Instance: MCSDFacilityOrganizationAffiliation-Example
InstanceOf: MCSDOrganizationAffiliation
Title: "Example mCSD Facility Admin Organization Affiliation"
Description: "Organization Affiliation resource for an example administrative relationship for a facility."
Usage: #example
* active = true
* organization = Reference(MCSDOrganization-ExamplePartner)
* participatingOrganization = Reference(MCSDFacilityOrganization-Example)
* code = MCSDExampleHierarchy#admin

Instance: MCSDFacilityLocation-Example
InstanceOf: MCSDFacilityLocation
Title: "Example mCSD Facility Location"
Description: "Location resource for an example mCSD Facility"
Usage: #example
* name = "MCSDFacilityLocation-Example"
* status = #active
* managingOrganization = Reference(MCSDFacilityOrganization-Example)
* partOf = Reference(MCSDJurisdictionLocation-Example)
* physicalType = http://terminology.hl7.org/CodeSystem/location-physical-type#bu
* type[facility] = MCSDOrganizationLocationTypes#facility
* type[service] = http://terminology.hl7.org/CodeSystem/v3-RoleCode#HOSP

Instance: MCSDLocation-Example
InstanceOf: MCSDLocation
Title: "Example mCSD Location"
Description: "Location resource for an example of an mCSD Location (Ward)"
Usage: #example
* name = "MCSDLocation-Example"
* status = #active
* partOf = Reference(MCSDFacilityLocation-Example)
* type[+] = http://terminology.hl7.org/CodeSystem/v3-RoleCode#RNEU
* physicalType = http://terminology.hl7.org/CodeSystem/location-physical-type#wa

Instance: MCSDLocationDistance-Example
InstanceOf: MCSDLocationDistance
Title: "Example mCSD Location with Distance Option"
Description: "Location resource for an example of an mCSD Location with Distance Option"
Usage: #example
* name = "MCSDLocationDistance-Example"
* status = #active
* type[+] = http://terminology.hl7.org/CodeSystem/v3-RoleCode#HOSP
* physicalType = http://terminology.hl7.org/CodeSystem/location-physical-type#bu
* position.latitude = -1.46929510804737
* position.longitude = -78.81700744576973

// service, role, practitioner

Instance: MCSDHealthcareService-Example
InstanceOf: MCSDHealthcareService
Title: "Example mCSD HealthcareService"
Description: "HealthcareService resource example for mCSD."
Usage: #example
* name = "ANC"
* type = http://terminology.hl7.org/CodeSystem/service-type#124 "General Practice"
* location = Reference(MCSDFacilityLocation-Example)

Instance: MCSDPractitionerRole-Example
InstanceOf: MCSDPractitionerRole
Title: "Example mCSD PractitionerRole"
Description: "PractitionerRole resource example for mCSD."
Usage: #example
* code = http://terminology.hl7.org/CodeSystem/practitioner-role#nurse
* location = Reference(MCSDFacilityLocation-Example)
* healthcareService = Reference(MCSDHealthcareService-Example)
* organization = Reference(MCSDFacilityOrganization-Example)
* practitioner = Reference(MCSDPractitioner-Example)

Instance: MCSDPractitioner-Example
InstanceOf: MCSDPractitioner
Title: "Example mCSD Practitioner"
Description: "Practitioner resource example for mCSD."
Usage: #example
* name.text = "John Galt" 

// bundler

Instance: Example-MCSD
InstanceOf: Bundle
Title: "Example Bundle of mCSD Resources"
Description: "Example Bundle of Core mCSD Resources."
Usage: #example
* type = #transaction


* entry[+].fullUrl = "http://www.example.org/fhir/Organization/MCSDJurisdictionOrganization-Example"
* entry[=].request.url = "Organization/MCSDJurisdictionOrganization-Example"
* entry[=].request.method = #PUT
* entry[=].resource = MCSDJurisdictionOrganization-Example

* entry[+].fullUrl = "http://www.example.org/fhir/Location/MCSDJurisdictionLocation-Example"
* entry[=].request.url = "Location/MCSDJurisdictionLocation-Example"
* entry[=].request.method = #PUT
* entry[=].resource = MCSDJurisdictionLocation-Example

* entry[+].fullUrl = "http://www.example.org/fhir/Organization/MCSDOrganization-ExamplePartner"
* entry[=].request.url = "Organization/MCSDOrganization-ExamplePartner"
* entry[=].request.method = #PUT
* entry[=].resource = MCSDOrganization-ExamplePartner

* entry[+].fullUrl = "http://www.example.org/fhir/Organization/MCSDFacilityOrganization-Example"
* entry[=].request.url = "Organization/MCSDFacilityOrganization-Example"
* entry[=].request.method = #PUT
* entry[=].resource = MCSDFacilityOrganization-Example

* entry[+].fullUrl = "http://www.example.org/fhir/Location/MCSDFacilityLocation-Example"
* entry[=].request.url = "Location/MCSDFacilityLocation-Example"
* entry[=].request.method = #PUT
* entry[=].resource = MCSDFacilityLocation-Example

* entry[+].fullUrl = "http://www.example.org/fhir/HealthcareService/MCSDHealthcareService-Example"
* entry[=].request.url = "HealthcareService/MCSDHealthcareService-Example"
* entry[=].request.method = #PUT
* entry[=].resource = MCSDHealthcareService-Example

* entry[+].fullUrl = "http://www.example.org/fhir/PractitionerRole/MCSDPractitionerRole-Example"
* entry[=].request.url = "PractitionerRole/MCSDPractitionerRole-Example"
* entry[=].request.method = #PUT
* entry[=].resource = MCSDPractitionerRole-Example

* entry[+].fullUrl = "http://www.example.org/fhir/Practitioner/MCSDPractitioner-Example"
* entry[=].request.url = "Practitioner/MCSDPractitioner-Example"
* entry[=].request.method = #PUT
* entry[=].resource = MCSDPractitioner-Example

* entry[+].fullUrl = "http://www.example.org/fhir/OrganizationAffiliation/ex-OrgAff"
* entry[=].request.url = "OrganizationAffiliation/ex-OrgAff"
* entry[=].request.method = #PUT
* entry[=].resource = ex-OrgAff

* entry[+].fullUrl = "http://www.example.org/fhir/Organization/ex-OrgA"
* entry[=].request.url = "Organization/ex-OrgA"
* entry[=].request.method = #PUT
* entry[=].resource = ex-OrgA

* entry[+].fullUrl = "http://www.example.org/fhir/Organization/ex-OrgB"
* entry[=].request.url = "Organization/ex-OrgB"
* entry[=].request.method = #PUT
* entry[=].resource = ex-OrgB

* entry[+].fullUrl = "http://www.example.org/fhir/Organization/ex-OrgC"
* entry[=].request.url = "Organization/ex-OrgC"
* entry[=].request.method = #PUT
* entry[=].resource = ex-OrgC

* entry[+].fullUrl = "http://www.example.org/fhir/OrganizationAffiliation/ex-OrgAffC"
* entry[=].request.url = "OrganizationAffiliation/ex-OrgAffC"
* entry[=].request.method = #PUT
* entry[=].resource = ex-OrgAffC

* entry[+].fullUrl = "http://www.example.org/fhir/Endpoint/ex-endpointXCAquery"
* entry[=].request.url = "Endpoint/ex-endpointXCAquery"
* entry[=].request.method = #PUT
* entry[=].resource = ex-endpointXCAquery

* entry[+].fullUrl = "http://www.example.org/fhir/Endpoint/ex-endpointXCAretrieve"
* entry[=].request.url = "Endpoint/ex-endpointXCAretrieve"
* entry[=].request.method = #PUT
* entry[=].resource = ex-endpointXCAretrieve

* entry[+].fullUrl = "http://www.example.org/fhir/Endpoint/ex-endpointDicom"
* entry[=].request.url = "Endpoint/ex-endpointDicom"
* entry[=].request.method = #PUT
* entry[=].resource = ex-endpointDicom


---

File: repos/IHE_SLASH_ITI.mCSD/input/fsh/facility.fsh

Profile:      MCSDFacilityOrganization
Parent:       MCSDOrganization
Id:           IHE.mCSD.FacilityOrganization
Title:        "mCSD Organization for Facilities"
Description:  """
A profile on mCSD Organization for mCSD Facilities.

Facilities are physical care delivery sites such as hospitals, clinics, health outposts, physician offices,
labs, pharmacies, etc. A Facility has a unique identifier, geographic attributes (address, geocode), contact
attributes, attributes regarding its hours of operation, etc. Each Facility is defined by a pairing of 
[Location](StructureDefinition-IHE.mCSD.FacilityLocation.html) and
[Organization](StructureDefinition-IHE.mCSD.FacilityOrganization.html).

In addition to the base requirements of [mCSD Organization](StructureDefinition-IHE.mCSD.Organization.html),
one `type` must be set to `https://profiles.ihe.net/ITI/mCSD/CodeSystem/IHE.mCSD.Organization.Location.Types#facility`.
"""

* insert requireAtLeastOneMatch( type, facility, MCSDOrganizationLocationTypes#facility)
* type 1..
  * ^short = "One type must be set to: https://profiles.ihe.net/ITI/mCSD/CodeSystem/IHE.mCSD.Organization.Location.Types#facility"
  * ^definition = "One type must be set to: https://profiles.ihe.net/ITI/mCSD/CodeSystem/IHE.mCSD.Organization.Location.Types#facility"


Profile:      MCSDFacilityLocation
Parent:       MCSDLocation
Id:           IHE.mCSD.FacilityLocation
Title:        "mCSD Location for Facilities"
Description:  """
A profile on mCSD Location for mCSD Facilities.

Facilities are physical care delivery sites such as hospitals, clinics, health outposts, physician offices,
labs, pharmacies, etc. A Facility has a unique identifier, geographic attributes (address, geocode), contact
attributes, attributes regarding its hours of operation, etc. Each Facility is defined by a pairing of 
[Location](StructureDefinition-IHE.mCSD.FacilityLocation.html) and
[Organization](StructureDefinition-IHE.mCSD.FacilityOrganization.html).

In addition to the base requirements of [mCSD Location](StructureDefinition-IHE.mCSD.Location.html),
one `type` must be set to `https://profiles.ihe.net/ITI/mCSD/CodeSystem/IHE.mCSD.Organization.Location.Types#facility`.
"""

* insert requireAtLeastOneMatch( type, facility, MCSDOrganizationLocationTypes#facility)
* type 2..*
  * ^short = "One type must be set to: https://profiles.ihe.net/ITI/mCSD/CodeSystem/IHE.mCSD.Organization.Location.Types#facility"
  * ^definition = "One type must be set to: https://profiles.ihe.net/ITI/mCSD/CodeSystem/IHE.mCSD.Organization.Location.Types#facility"
* type contains service 0..
* type[service] from http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType
* managingOrganization 1..1 
* managingOrganization only Reference(MCSDFacilityOrganization)
  * ^short = "The reference to the mCSD Organization resource for this facility."
  * ^definition = "The reference to the mCSD Organization resource for this facility."


---

File: repos/IHE_SLASH_ITI.mCSD/input/fsh/healthcareservice.fsh


Profile:      MCSDHealthcareService
Parent:       HealthcareService
Id:           IHE.mCSD.HealthcareService
Title:        "mCSD HealthcareService"
Description:  """
A profile on the HealthcareService resource for mCSD.

Each healthcare service has a unique identifier. Examples include surgical services, antenatal
care services, or primary care services. The combination of a Healthcare Service offered at a
[Location](StructureDefinition-IHE.mCSD.Location.html) may have specific attributes including
contact person, hours of operation, etc.
"""
* implicitRules 0..0
* modifierExtension 0..0
* type 1..*
  * ^short = "The type of service being provided."
  * ^definition = "The type of service being provided."
* name 1..1
  * ^short = "The name of the service being provided."
  * ^definition = "The name of the service being provided."
* location only Reference(MCSDLocation)
  * ^short = "The location where the service is being provided."
  * ^definition = "The location where the service is being provided."
* providedBy only Reference(MCSDOrganization)
  * ^short = "The organization providing this service."
  * ^definition = "The organization providing this service."



---

File: repos/IHE_SLASH_ITI.mCSD/input/fsh/jurisdiction.fsh

Profile:      MCSDJurisdictionOrganization
Parent:       MCSDOrganization
Id:           IHE.mCSD.JurisdictionOrganization
Title:        "mCSD Organization for Jurisdictions"
Description:  """
A profile on the mCSD Organization for mCSD Jurisdictions.

Jurisdictions are political administrative units or other territories over which authority is exercised. A Jurisdiction
has a unique identifier, geographic attributes, etc. Jurisdictions include political administrative units such as village
districts or regions.  Each Jurisdiction is defined by a pairing of [Location](StructureDefinition-IHE.mCSD.JurisdictionLocation.html)
and [Organization](StructureDefinition-IHE.mCSD.JurisdictionOrganization.html).

In addition to the base requirements of [mCSD Organization](StructureDefinition-IHE.mCSD.Organization.html),
one `type` must be set to `https://profiles.ihe.net/ITI/mCSD/CodeSystem/IHE.mCSD.Organization.Location.Types#jurisdiction`.
"""

* insert requireAtLeastOneMatch( type, jurisdiction, MCSDOrganizationLocationTypes#jurisdiction)
* type 1..
  * ^short = "One type must be set to: https://profiles.ihe.net/ITI/mCSD/CodeSystem/IHE.mCSD.Organization.Location.Types#jurisdiction"
  * ^definition = "One type must be set to: https://profiles.ihe.net/ITI/mCSD/CodeSystem/IHE.mCSD.Organization.Location.Types#jurisdiction"

Profile:      MCSDJurisdictionLocation
Parent:       MCSDLocation
Id:           IHE.mCSD.JurisdictionLocation
Title:        "mCSD Location for Jurisdictions"
Description:  """
A profile on the mCSD Location for mCSD Jurisdictions.

Jurisdictions are political administrative units or other territories over which authority is exercised. A Jurisdiction
has a unique identifier, geographic attributes, etc. Jurisdictions include political administrative units such as village
districts or regions.  Each Jurisdiction is defined by a pairing of [Location](StructureDefinition-IHE.mCSD.JurisdictionLocation.html)
and [Organization](StructureDefinition-IHE.mCSD.JurisdictionOrganization.html).

In addition to the base requirements of [mCSD Location](StructureDefinition-IHE.mCSD.Location.html),
one `type` must be set to `https://profiles.ihe.net/ITI/mCSD/CodeSystem/IHE.mCSD.Organization.Location.Types#jurisdiction`.
"""

* insert requireAtLeastOneMatch( type, jurisdiction, MCSDOrganizationLocationTypes#jurisdiction)
* type 1..
  * ^short = "One type must be set to: https://profiles.ihe.net/ITI/mCSD/CodeSystem/IHE.mCSD.Organization.Location.Types#jurisdiction"
  * ^definition = "One type must be set to: https://profiles.ihe.net/ITI/mCSD/CodeSystem/IHE.mCSD.Organization.Location.Types#jurisdiction"
* managingOrganization 1..1 
* managingOrganization only Reference(MCSDJurisdictionOrganization)
  * ^short = "The reference to the mCSD Organization resource for this jurisdiction."
  * ^definition = "The reference to the mCSD Organization resource for this jurisdiction."
* extension contains $BOUNDARY named boundary 0..1
* extension[boundary]
  * ^short = "When a boundary is available, the location-boundary-geojson extension should be used."
  * ^definition = "When a boundary is available, the location-boundary-geojson extension should be used with the given url, contentType, and data."
* extension[boundary].valueAttachment 1..1
* extension[boundary].valueAttachment.contentType = #application/geo+json 
  * ^short = "The boundary contentType shall be application/geo+json."
  * ^definition = "The boundary contentType shall be application/geo+json."
* extension[boundary].valueAttachment.data 1..1
  * ^short = "The boundary data shall be in the valueAttachment data element."
  * ^definition = "The boundary data shall be in the valueAttachment data element."


---

File: repos/IHE_SLASH_ITI.mCSD/input/fsh/location.fsh

Profile:      MCSDLocation
Parent:       Location
Id:           IHE.mCSD.Location
Title:        "mCSD Location"
Description:  """
A profile on the Location resource for mCSD.

Locations are physical places where care can be delivered such as facilities, buildings, wards,
rooms, or vehicles. Locations also include jurisdictions such as a village districts or regions.
A Location has a unique identifier and may have geographic attributes (address, geocode),
attributes regarding its hours of operation, etc. Each Location may be related to one [Organization](StructureDefinition-IHE.mCSD.Organization.html).
A location may have a hierarchical relationship with other locations.
"""

* implicitRules 0..0
* modifierExtension 0..0
* type 1..*
  * ^short = "A code that describes the type of Location."
  * ^definition = "A code that describes the type of Location."
* physicalType 1..1
  * ^short = "A code that describes the physical form of the Location."
  * ^definition = "A code that describes the physical form of the Location."
* name 1..1
  * ^short = "The name of the Location."
  * ^definition = "The name of the Location."
* status 1..1
  * ^short = "The status code of the Location."
  * ^definition = "The status code of the Location:  `active | suspended | inactive`"
* partOf only Reference(MCSDLocation)

Profile:      MCSDLocationDistance
Parent:       MCSDLocation
Id:           IHE.mCSD.LocationDistance
Title:        "mCSD Location with Distance"
Description:  """
A profile on the mCSD Location resource for distance searches.

This profile is for when you want to allow distance based searches for an mCSD Location resource.
"""

* position 1..1
  * ^short = "The geographic point of the Location."
  * ^definition = "The geographic point of the Location."


---

File: repos/IHE_SLASH_ITI.mCSD/input/fsh/org-aff.fsh

// Need to clarify that Karen's Cross does not need OrgAff. Karen's Cross is supported simplistically with simply Organization->Endpoint(s); where each endpoint expresses the various protocols supported. Where Document Sharing OrgAff is needed is when a network service is made available to mediate between originating Org-A needing to talk to Org-B where either (a) they don't have a common protocol (spirit of Karen's cross service), or (b) don't have a common direct link (proxy service). The Document Sharing OrgAff enables both (a) and (b). The OrgAff resource links a network endpoint hosting organization (OrgAff.organization and .participatingOrganization) and that organizations endpoint (OrgAff.endpoint and/or OrgAff.organization.endpoint, which is on the network) with a destination (push destination, or query/retrieve destination) organization (OrgAff.network) that does not have an endpoint present on the network.
// Jira ticket filed on unclear .network -- https://jira.hl7.org/browse/FHIR-36019
// Jira ticket filed on unclear .participatingOrganization -- https://jira.hl7.org/browse/FHIR-25406


CodeSystem:  MCSDOrgAffTypes
Title: "mCSD Organization Affiliation Types"
Description:  "mCSD OrganizationAffiliation types beyond those in the FHIR core."
* ^caseSensitive = true
* ^experimental = false
* #DocShare-federate "Federation to any Document Sharing exchange"

//TODO Define what an Document Sharing Federation means -- Joe --> It means if org A is a "parent" of org B through OrgAff and it has this code, then when doing doc sharing, when pulling, that results of Org B will be aggregated in Org A's responses, and when pushing, that Org B can be specified as intendedRecipient in a push to Org A.
// Unclear if there needs to be many codes, or just one. Do we need a code for transparent fed vs opaque fed? 


ValueSet: MCSDOrgAffTypesVS
Title: "mCSD Organization Affiliation Types ValueSet"
Description: "ValueSet of Organization Affiliation types allowed"
* ^experimental = false
* codes from system MCSDOrgAffTypes
* codes from system http://hl7.org/fhir/organization-role



Profile:      MCSDOrganizationAffiliation
Parent:       OrganizationAffiliation
Id:           IHE.mCSD.OrganizationAffiliation
Title:        "mCSD Organization Affiliation"
Description:  """
A profile on the OrganizationAffiliation resource for mCSD.

An Organization may have relationships with
other organizations that are not hierarchical. These relationships may indicate
an electronic routing path to other organizations that cannot be reached directly.
OrganizationAffiliation can be used to specify relationships such as supply chains 
or administrative reporting structures.
"""
* implicitRules 0..0
* modifierExtension 0..0
* active 1..1
* endpoint only Reference(MCSDEndpoint)
* code 1..*
* code ^short = "The type of affiliation"
* organization 1..1
* organization only Reference(MCSDOrganization)
* organization ^short = "Organization where the role is available."
* participatingOrganization 1..1
* participatingOrganization only Reference(MCSDOrganization)
* participatingOrganization ^short = "The Organization providing the role."
* network 0..0
* specialty
* location
* location only Reference(MCSDLocation)
* healthcareService only Reference(MCSDHealthcareService)
* telecom MS


Profile:      MCSDOrganizationAffiliationDocShare
Parent:       MCSDOrganizationAffiliation
Id:           IHE.mCSD.OrganizationAffiliation.DocShare
Title:        "mCSD Organization Affiliation DocumentSharing"
Description:  """
A profile on the OrganizationAffiliation resource for mCSD in Document Sharing. Karen's Cross, when expanded to either/or a service that translates protocols, or a proxy that mediates network communication.

Not used for direct connected mesh networks of depth 2 as that is handled fine with Organization->Endpoint. 

Affiliation is used to show Document Sharing network linkage to a set of communities that are not directly addressible.  
The participating organization would not have Organization->Endpoint advertised in the network directory. 
There will be many OrganizationAffiliations, one for each pathway provided on the network by the serving organization (.organization) to another organization (.participatingOrganization).
"""
* identifier 1..* MS
* identifier ^short = "the homeCommunityId(s)"
* identifier ^definition = "Shall be all the homeCommunityId(s) of all the communities in the affiliation network."
* identifier ^comment = "Open-Issue: should this be mandated, recommended, or forbidden?"
* insert requireAtLeastOneMatch( code, docshare, MCSDOrgAffTypes#DocShare-federate)
* endpoint only Reference(MCSDEndpointDocShare)



Instance: ex-OrgAff
InstanceOf: MCSDOrganizationAffiliation
Title: "Example of an OrganizationAffiliation in mCSD."
Description: """
This is a simple OrganizationAffiliation for an HIE. This is NOT representative of a Document Sharing affiliation.
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* active = true
* period.start = 2022-02-10
* organization = Reference(MCSDOrganization-ExamplePartner)
* participatingOrganization = Reference(Organization/ex-OrgA)
* code = 	http://hl7.org/fhir/organization-role#HIE/HIO


// Setup a scenario for DocumentSharing
// OrgA wants to communicate with OrgB, but OrgB does not have an endpoint on the network. So OrgA looks for OrgAff that can connect them and finds OrgC can connect them.
Instance: ex-OrgA
InstanceOf: MCSDOrganization
Title: "Example Organization A"
Description: """
Example Organization A that wants to communicate with Organization B
- Note this Organization has no endpoint, but it is a client in this scenario
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* name = "OrgA"
* active = true
* type[+] = http://terminology.hl7.org/CodeSystem/organization-type#govt


Instance: ex-OrgB
InstanceOf: MCSDOrganization
Title: "Example Organization B"
Description: """
Example Organization B that is not on the network directly
- Note that this organization has no endpoint as it is not directly participating in the network
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier.type =  urn:ihe:iti:xca:2010#homeCommunityId
* identifier.value = "urn:uuid:4f88dade-42a7-4fb3-b0a6-f877ff6b23b7" // OrgB
* name = "OrgB"
* active = true
* type[+] = http://terminology.hl7.org/CodeSystem/organization-type#govt


Instance: ex-OrgC
InstanceOf: MCSDOrganization
Title: "Example Organization C"
Description: """
Example Organization C supports communication with Organization B
- Note that this organization hosts an XDS Query endpoint on the network. 
- More endponts would be here, but the use-case is simplified to just XDS Query
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* name = "OrgC"
* active = true
* type[+] = http://terminology.hl7.org/CodeSystem/organization-type#govt
* endpoint[+] = Reference(Endpoint/ex-endpointXCAquery)

Instance: ex-OrgAffC
InstanceOf: MCSDOrganizationAffiliationDocShare
Title: "Example OrganizationAffiliation C"
Description: """
Example OrganizationAffiliation C that indicates that C will provide communication to B.
- Note that the endpoint is listed here in addition to in ex-OrgC to be more efficient
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier.type =  urn:ihe:iti:xca:2010#homeCommunityId
* identifier.value = "urn:uuid:4f88dade-42a7-4fb3-b0a6-f877ff6b23b7" // OrgB
* active = true
* code[docshare] = MCSDOrgAffTypes#DocShare-federate
* organization = Reference(Organization/ex-OrgC)
* participatingOrganization = Reference(Organization/ex-OrgB)
* endpoint[+] = Reference(Endpoint/ex-endpointXCAquery)

// TODO: Second use-case would show how multiple OrgAff can point at the same endpoint resources


---

File: repos/IHE_SLASH_ITI.mCSD/input/fsh/organization.fsh

CodeSystem:     MCSDOrganizationIdentifierTypes
Title:          "mCSD Type codes for Organization.identifier"
Description:    "mCSD Type codes for specific business identifiers for Organization resources."

* ^caseSensitive = true
* ^experimental = false
* #HCID "Home Community Identifier"
* #AuthOrgId "Organization identifier used in authentication or authorization transactions (e.g. IHE XUA, IUA)"

ValueSet:     MCSDOrganizationIdentifierTypeValueSet
Title:          "mCSD Type codes for Organization.identifier"
Description:    "mCSD Type codes for specific business identifiers for Organization resources."

* ^experimental = false
* codes from system MCSDOrganizationIdentifierTypes

Profile:      MCSDOrganization
Parent:       Organization
Id:           IHE.mCSD.Organization
Title:        "mCSD Organization"
Description:  """
A profile on the Organization resource for mCSD.

Organizations are “umbrella” entities; these may be consideredthe administrative bodies under whose auspices
care services are provided such as Healthcare Information Exchanges (HIEs), Integrated Delivery Networks
(IDNs), Non-Government Organizations (NGOs), Faith-Based Organizations (FBOs) or even a one-physician family
practice. An organization has a unique identifier and may have additional administrative attributes such as
contact person, mailing address, etc. Departments of an institution, or other administrative units, may be
represented as child Organizations of a parent Organization.
"""
* implicitRules 0..0
* modifierExtension 0..0
* type 1..*
  * ^short = "A code that describes the type of Organization."
  * ^definition = "A code that describes the type of Organization."
* name 1..1
  * ^short = "The name of the Organization."
  * ^definition = "The name of the Organization."
* partOf only Reference(MCSDOrganization)
  * ^short = "If the Organization belongs to a single hierarchy, the partOf element shall be used."
  * ^definition = "If the Organization belongs to a single hierarchy, the partOf element shall be used."
* extension contains MCSDPurposeOfUse named purposeOfUse 0..*


---

File: repos/IHE_SLASH_ITI.mCSD/input/fsh/practitioner.fsh

Profile:      MCSDPractitioner
Parent:       Practitioner
Id:           IHE.mCSD.Practitioner
Title:        "mCSD Practitioner"
Description:  """
A profile on the Practitioner resource for mCSD.

A Practitioner is a [health worker such as defined by WHO](http://www.who.int/whr/2006/06_chap1_en.pdf); a Practitioner 
might be a physician, nurse, pharmacist, community health worker, district health manager, etc. Practitioners have
contact and demographic attributes. Each Practitioner may be related to one or more
[Organizations](StructureDefinition-IHE.mCSD.Organization.html), one or more
[Locations](StructureDefinition-IHE.mCSD.Location.html)
and one or more [Healthcare Services](StructureDefinition-IHE.mCSD.HealthcareService.html) through a
[Practitioner Role](StructureDefinition-IHE.mCSD.PractitionerRole.html). Specific attributes may be associated with
the Practitioner relationship with these other entities.
"""
* implicitRules 0..0
* modifierExtension 0..0
* name 1..*
  * ^short = "The name of the Practitioner."
  * ^definition = "The name of the Practitioner."

Profile:      MCSDPractitionerRole
Parent:       PractitionerRole
Id:           IHE.mCSD.PractitionerRole
Title:        "mCSD PractitionerRole"
Description:  """
A profile on the PractitionerRole resource for mCSD.

A PractitionerRole links a [Practitioner](StructureDefinition-IHE.mCSD.Practitioner.html) with a particular
health care role to perform [Healthcare Services](StructureDefinition-IHE.mCSD.HealthcareService.html)
at a particular [Location](StructureDefinition-IHE.mCSD.Location.html)
for an [Organization](StructureDefinition-IHE.mCSD.Organization.html)
"""
* implicitRules 0..0
* modifierExtension 0..0
* code 1..*
  * ^short = "The roles the Practitioner performs."
  * ^definition = "The roles the Practitioner performs."
* practitioner only Reference(MCSDPractitioner)
  * ^short = "The Practitioner that performs this role."
  * ^definition = "The Practitioner that performs this role."
* organization only Reference(MCSDOrganization)
  * ^short = "The Organization where the roles are available."
  * ^definition = "The Organization where the roles are available."
* location only Reference(MCSDLocation)
  * ^short = "The Location where the Practitioner provides care."
  * ^definition = "The Location where the Practitioner provides care."
* healthcareService only Reference(MCSDHealthcareService)
  * ^short = "The HealthcareServices provided by this Practitioner at an Organization and/or Location."
  * ^definition = "The HealthcareServices provided by this Practitioner at an Organization and/or Location."


---

File: repos/IHE_SLASH_ITI.mCSD/input/fsh/purpose.fsh

Extension: MCSDPurposeOfUse
Id: IHE.mCSD.PurposeOfUse
Title: "Purpose of Use Extension"
Description: """
Set a purpose of use for an mCSD Endpoint or mCSD Organization.
"""
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* ^context[+].type = #element
* ^context[=].expression = "Endpoint"
* value[x] only CodeableConcept
* valueCodeableConcept from http://terminology.hl7.org/ValueSet/v3-PurposeOfUse (preferred)

Instance: MCSDSearchPurposeOfUse
InstanceOf: SearchParameter
Title: "Search on the IHE defined extension for Purpose of Use"
Usage: #definition
* id = "IHE.mCSD.Search.PurposeOfUse"
* url = "https://profiles.ihe.net/ITI/mCSD/SearchParameter/IHE.mCSD.Search.PurposeOfUse"
* description = "This SearchParameter enables finding Endpoints or Organizatoins by the purpose of use code.  This resource is created as informative content."
* name = "IHE_mCSD_Search_PurposeOfUse"
* status = #active
* code = #ihe-mcsd-purpose-of-use
* base[+] = #Organization
* base[+] = #Endpoint
* expression = "(extension('https://profiles.ihe.net/ITI/mCSD/StructureDefinition/IHE.mCSD.PurposeOfUse').value.ofType(CodeableConcept))"
* type = #token


---

File: repos/IHE_SLASH_ITI.mCSD/input/fsh/rules.fsh

RuleSet: requireAtLeastOneMatch(path, slice, value)
* {path} ^slicing.discriminator.type = #value
* {path} ^slicing.discriminator.path = "$this"
* {path} ^slicing.rules = #open
* {path} contains {slice} 1..1
* {path}[{slice}] = {value} 


---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/ActorsAndTransactions.plantuml

@startuml
hide footbox
agent "Care Services Selective Supplier" as SelectiveSupplier
agent "Care Services Selective Consumer" as SelectiveConsumer
agent "Care Services Update Supplier" as UpdateSupplier
agent "Care Services Update Consumer" as UpdateConsumer
SelectiveConsumer -> SelectiveSupplier : "Find Matching Care Services [ITI-90]"
SelectiveConsumer -[hidden]-> UpdateConsumer
UpdateConsumer -> UpdateSupplier : "Request Care Services Updates [ITI-91]"
@enduml

---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/dir-endpoint-to-hybrid-org-structure.plantuml

@startuml
hide footbox

object "Organization A" as OrganizationA
object "Organization B" as OrganizationB
object "Endpoint" as EndpointA
object "Organization C" as OrganizationC
object "Organization D" as OrganizationD
object "Organization E" as OrganizationE
object ":OrganizationAffiliation" as OrgAff
OrgAff : code = DocShare-federate
OrgAff -> OrganizationB : participatingOrganization
OrganizationA <-- OrgAff : organization

EndpointA <-- OrganizationA : endpoint
EndpointA <- OrgAff : endpoint

OrganizationB <-- OrganizationC : partOf
OrganizationB <-- OrganizationD : partOf
OrganizationB <-- OrganizationE : partOf

@enduml


---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/dir-endpoint-to-org-affiliates.plantuml

@startuml
hide footbox

object "Organization A" as OrganizationA
object "Organization B" as OrganizationB
object "Endpoint" as EndpointA
object "Organization C" as OrganizationC
object ":OrganizationAffiliation" as OrgAff
OrgAff : code = DocShare-federate
OrgAff --> OrganizationB : participatingOrganization
OrganizationA <-- OrgAff : organization
object ":OrganizationAffiliation" as OrgAff2
OrgAff2 : code = DocShare-federate
OrgAff2 --> OrganizationC : participatingOrganization
OrganizationA <-- OrgAff2 : organization

EndpointA <-- OrganizationA : endpoint
EndpointA <- OrgAff : endpoint
EndpointA <- OrgAff2 : endpoint

@enduml


---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/dir-endpoint-to-org-hierarchy.plantuml

@startuml
hide footbox

object "Organization A" as OrganizationA
object "Organization B" as OrganizationB
object "Endpoint" as EndpointA
object "Organization C" as OrganizationC

OrganizationA <-- OrganizationB : partOf
EndpointA <-- OrganizationA : endpoint
OrganizationA <-- OrganizationC : partOf

@enduml


---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/dir-endpoint-xdr-mhd.plantuml

@startuml
hide footbox

object ":Organization" as Organization
Organization : name = "Participant A"
object ":Endpoint" as Responder38
Responder38 : connectionType = ihe-xca
Responder38 : extension:specificType = XDR-DocRecipient
object ":Endpoint" as Responder39
Responder39 : connectionType = hl7-fhir-rest
Responder39 : extension:specificType = MHD-Recipient-ProvideReg

Organization *--> Responder38
Organization *--> Responder39
note "MHD support also shown in CapabilityStatement" as N1
N1 .. Responder39

@enduml


---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/dir-org-specific-endpoint-affil.plantuml

@startuml
hide footbox

object "Organization C" as OrganizationC
object "Affiliated Organization D" as OrganizationD
object "OrganizationAffiliation" as OrgAff
object "Endpoint for C" as EndpointC
EndpointC : address = https://orgD.org/orgC

OrgAff --> OrganizationC : participatingOrganization
OrganizationD <-- OrgAff : organization
OrganizationC -> EndpointC : endpoint
OrganizationD <- EndpointC : managingOrganization

@enduml


---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/dir-org-specific-endpoint-inter.plantuml

@startuml
hide footbox

object "Organization E" as OrganizationE
object "Endpoint for E" as EndpointE
EndpointE : address = https://intermediaryF.org/orgE

OrganizationE -> EndpointE : endpoint
note "Intermediary F\nnot listed in directory." as N1
N1 .. EndpointE
OrganizationE <- EndpointE : managingOrganization

@enduml


---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/dir-org-specific-endpoint-parent.plantuml

@startuml
hide footbox

object "Organization A" as OrganizationA
object "Parent Organization B" as OrganizationB
object "Endpoint for A" as EndpointA
EndpointA : address = https://orgB.org/orgA

OrganizationB <-- OrganizationA : partOf
OrganizationA -> EndpointA : endpoint
OrganizationB <- EndpointA : managingOrganization

@enduml


---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/dir-org-specific-endpoint-self.plantuml

@startuml
hide footbox

object "Organization A" as OrganizationA
object "Endpoint for A" as EndpointA
EndpointA : address = https://orgA.org

OrganizationA -> EndpointA : endpoint
OrganizationA <- EndpointA : managingOrganization

@enduml


---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/ITI-90-seq.plantuml

@startuml
hide footbox
participant "Care Services Selective Consumer" as Client
participant "Care Services Selective Supplier" as Server
activate Client
activate Server
Client -> Server : 1. Find Matching Care Services Request [ITI-90]
Server --> Client : 2. Find Matching Care Services Response [ITI-90]
deactivate Client
deactivate Server

Client -[hidden]> Server
activate Client
activate Server
Client -> Server : 3. Retrieve Care Services Resource Request [ITI-90]
Server --> Client : 4. Retrieve Care Services Resource Response [ITI-90]
deactivate Client
deactivate Server
@enduml


---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/ITI-91-seq.plantuml

@startuml
hide footbox
participant "Care Services Update Consumer" as Client
participant "Care Services Update Supplier" as Server
activate Client
activate Server
Client -> Server : 1. Request Care Services Updates Request [ITI-91]
Server --> Client : 2. Request Care Services Updates Response [ITI-91]
deactivate Client
deactivate Server
@enduml

---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/simple-deployment.plantuml

@startuml
hide footbox

frame Client {
agent "Care Services Update Consumer" as Consumer
}

frame Server {
agent "Care Services Update Supplier" as Supplier
}

Consumer -> Supplier: Find Matching Care Services\n[ITI-90]

@enduml

---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/usecase1-processflow.plantuml

@startuml
hide footbox
participant "Vera" as Patient
participant "Dr. West" as Doctor
participant "EMR (Care Services Selective Consumer)" as EMR
participant "HWR (Care Services Selective Supplier)" as HWR

activate Patient
activate Doctor
Patient -> Doctor: My knee hurts
Doctor -> Doctor: diagnosis = torn ACL
activate EMR
Doctor -> EMR: use EMR's custom query tool \nsearch for orthopedic surgeons, \nwithin 30km of Vera's home
activate HWR
EMR-> HWR: Find Matching Care Services [ITI-90] request
HWR -> EMR: Find Matching Care Services [ITI-90] response\ncontaining PractitionerRole list
deactivate HWR
EMR -> EMR: Resolve References
EMR -> Doctor : Review results\nwith office address, hours of operation
Doctor -> Patient: Review and discuss options
deactivate Patient
Doctor -> EMR: create Referral
deactivate Doctor
deactivate EMR
@enduml

---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/usecase2-processflow.plantuml

@startuml
hide footbox
participant "Health Worker" as HW
participant "Emergency Responder\nCare Services Selective Consumer" as ER
participant "National HIE\nCare Services Update Consumer\nCare Services Selective Supplier" as NHIE
participant "State HIE\nCare Services Update Supplier" as SHIE

loop Regular update of practitioner information
activate NHIE
activate SHIE
NHIE -> SHIE : Request Care Services Updates request [ITI-91]
SHIE -> NHIE : Request Care Services Updates response [ITI-91]\nFHIR Bundle of Updated resources
deactivate NHIE
deactivate SHIE
end

activate HW
activate ER
HW -> ER : Reports for volunteer duty

activate NHIE
ER -> NHIE : Find Matching Care Services request [ITI-90]
NHIE -> ER : Find Matching Care Services response [ITI-90]\nFHIR Bundle of matching resources
deactivate NHIE

ER -> HW : Allow or deny access
deactivate HW
deactivate ER

@enduml

---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/usecase3-diagram.plantuml

@startuml
hide footbox

title Cross-Jurisdictional Data Exchange

agent "Operating Unit\nCare Services Update Consumer" as OU
agent "Ministry of Health\nCare Services Update Supplier" as MOH
collections "Implementing Partner\nCare Services Update Supplier" as Partner

OU --> MOH
OU --> Partner

@enduml

---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/usecase3-processflow.plantuml

@startuml
hide footbox
participant "OU Reviewer" as Reviewer
participant "Operating Unit\nCare Services Update Consumer" as OU
participant "MOH\nCare Services Update Supplier" as MOH
participant "Partner\nCare Services Update Supplier" as Partner

activate OU

activate MOH
OU -> MOH: Request Care Services Updates [ITI-91] request
MOH -> OU: Request Care Services Updates [ITI-91] response
deactivate MOH

activate Partner
OU -> Partner: Request Care Services Updates [ITI-91] request
Partner -> OU: Request Care Services Updates [ITI-91] response
deactivate Partner

OU -> OU: Flag possible duplicates for review

activate Reviewer
Reviewer -> OU: Look at flagged Locations
Reviewer -> OU: Resolve flagged Locations
deactivate Reviewer
deactivate OU

@enduml

---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/usecase4-processflow.plantuml

@startuml
hide footbox

participant "MFL\nCare Services Update Supplier" as MFL
participant "HRIS\nCare Services Update Consumer" as HRIS
participant "LMIS\nCare Services Update Consumer" as LMIS

activate HRIS
activate MFL
HRIS -> MFL: Request Care Services Updates [ITI-91] request
MFL -> HRIS: Request Care Services Updates [ITI-91] response
deactivate HRIS

activate LMIS
LMIS -> MFL: Request Care Services Updates [ITI-91] request
MFL -> LMIS: Request Care Services Updates [ITI-91] response
deactivate MFL
deactivate LMIS

@enduml

---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/usecase5-diagram.plantuml

@startuml
hide footbox

title Organization.partOf vs. Affiliation

object "Organization B" as OrganizationB
object "Parent Organization A" as OrganizationA

OrganizationA <-- OrganizationB : partOf

object "State/Province HIE" as OrganizationD
OrganizationD : identifier = 1.2.3
object ":OrganizationAffiliation" as OrgAff

OrgAff : code = HIE/HIO
OrgAff : active = true
OrgAff : period.start = 3/1/2018


OrganizationB <- OrgAff : participatingOrganization
OrganizationD <-- OrgAff : organization

@enduml


---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/usecase5-processflow.plantuml

@startuml
hide footbox
participant "Health Worker" as HW
participant "EMR\nCare Services Selective Consumer" as EMR
participant "HIE Directory\nCare Services Selective Supplier" as Directory

activate HW
activate EMR
HW -> EMR: show me active members of the\nState/Province HIE added since 2017
activate Directory
EMR-> Directory: Find Matching Care Services [ITI-90] request:\nOrganizationAffiliation
Directory --> EMR: Find Matching Care Services [ITI-90] response
EMR-> Directory: Find Matching Care Services [ITI-90] request:\nOrganization
Directory --> EMR: Find Matching Care Services [ITI-90] response
deactivate Directory
EMR -> HW : Review list
deactivate HW
deactivate EMR
@enduml


---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/usecase6-diagram.plantuml

@startuml
hide footbox

title Health Information Exchange Directory Excerpt

object "Participant A:Organization" as Organization
Organization : name = "Participant A"
object ":Endpoint" as Responder38
Responder38 : connectionType = ihe-xca
Responder38 : extension:specificType = XCA-RespGateway-Query
Responder38 : address = http://exampleA.org/iti-38/
object ":Endpoint" as Responder39
Responder39 : connectionType = ihe-xca
Responder39 : extension:specificType = XCA-RespGateway-Retrieve
Responder39 : address = http://exampleA.org/iti-39/

Organization *--> Responder38
Organization *--> Responder39

object "Participant B:Organization" as OrganizationB
OrganizationB : name = "Participant B"
object ":Endpoint" as ResponderB38
ResponderB38 : connectionType = ihe-xca
ResponderB38 : extension:specificType = XCA-RespGateway-Query, XCA-RespGateway-Retrieve
ResponderB38 : address = http://exampleB.org/xca/

OrganizationB *--> ResponderB38

@enduml


---

File: repos/IHE_SLASH_ITI.mCSD/input/images-source/usecase6-processflow.plantuml

@startuml
hide footbox
participant "Health Worker" as HW
participant "EMR\nCare Services Selective Consumer\nXCA Initiating Gateway" as EMR
participant "HIE Endpoint Directory\nCare Services Selective Supplier" as Directory
participant "Participant\nXCA Responding Gateway" as Responder67

activate HW
HW -> HW: Prepare for patient visit
activate EMR
HW -> EMR: identify care organizations\nidentify document types of interest
activate Directory
EMR-> Directory: Find Matching Care Services [ITI-90] request
Directory --> EMR: Find Matching Care Services [ITI-90] response\ncontaining Organizations with their Endpoints
deactivate Directory
loop each Organization
EMR -> EMR: Check for XCA Endpoints
activate Responder67
EMR-> Responder67: Query [ITI-38] and Retrieve [ITI-39] documents of interest
Responder67 --> EMR: return documents
deactivate Responder67
end
EMR -> HW : Review obtained documents
deactivate HW
deactivate EMR
@enduml


---

File: repos/IHE_SLASH_ITI.mCSD/input/pagecontent/download.md


You can also download:

- [this entire guide](full-ig.zip),
- the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), or [ttl](definitions.ttl.zip)
- the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on [IHE GitHub](https://github.com/IHE/ITI.mCSD).

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}


---

File: repos/IHE_SLASH_ITI.mCSD/input/pagecontent/index.md


The Mobile Care Services Discovery (mCSD) Profile supports RESTful
queries across related care services resources.

The loosely coupled design and flexible querying capability of the mCSD
Profile means it can be deployed within a variety of eHealth
architectures and support a wide array of care workflows.

<div markdown="1" class="stu-note">

| [Significant Changes, Open, and Closed Issues](issues.html) |
{: .grid}

**[Search this IG](https://www.google.com/search?q=site%3Ahttps%3A%2F%2Fprofiles.ihe.net%2FITI%2FmCSD)**

</div>

### Organization of This Guide

This guide is organized into the following four main sections:

1. Volume 1: Profiles
    1. [mCSD Introduction](volume-1.html)
    2. [mCSD Actors, Transactions, and Content Modules](volume-1.html#1461-mcsd-actors-transactions-and-content-modules)
    3. [mCSD Actor Options](volume-1.html#1462-mcsd-actor-options)
    4. [mCSD Required Groupings](volume-1.html#1463-mcsd-required-actor-groupings)
    5. [mCSD Overview](volume-1.html#1464-mcsd-overview)
    6. [mCSD Security Considerations](volume-1.html#1465-mcsd-security-considerations)
    7. [mCSD Cross-Profile Considerations](volume-1.html#1466-mcsd-cross-profile-considerations)
    8. [mCSD Deployment Considerations](volume-1.html#1467-mcsd-deployment-considerations)
    9. [mCSD Endpoint Usage Considerations](volume-1.html#1468-mcsd-endpoint-usage-considerations)
2. Volume 2: Transaction Detail
    1. [Find Matching Care Services \[ITI-90\]](ITI-90.html)
    2. [Request Care Services Updates \[ITI-91\]](ITI-91.html)
3. Other
   1. [Test Plan](testplan.html)
   2. [Changes to Other IHE Specifications](other.html)
   3. [Download and Analysis](download.html)

Click on any of the links above, navigate the contents using the [table of contents](toc.html), or
if you are looking for a specific artifact, check out the [index](artifacts.html).

### Conformance Expectations

IHE uses the normative words: Shall, Should, and May according to [standards conventions](https://profiles.ihe.net/GeneralIntro/ch-E.html).

mCSD uses ```Must Support``` in StructureDefinition profiles. This is equivalent to the IHE use of **R2** as defined in [Appendix Z](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.10-profiling-conventions-for-constraints-on-fhir).


---

File: repos/IHE_SLASH_ITI.mCSD/input/pagecontent/issues.md

<div markdown="1" class="stu-note">

## Release notes

The significant changes:

### 3.9

- Integration of CP-ITI-1290 - clarifying Practitioner/PractitionerRole in Volume 1
- Re-Publish to get better IG Publisher rendering of CapabilityStatement

### 3.8

- Removed Additional Hierarchy extension due to addition of OrganizationAffiliation which can fulfill that use case.
- Changed Organization.type and Location.type for Facilities and Jurisdictions to use a defined CodeSystem instead of URNs.
  - Changed the cardinality and slicing of type to fix QA errors.  Additional slices can be made if needed by implementors.
- Added in AuditEvent structure definitions with examples based on [Basic Audit](https://profiles.ihe.net/ITI/BALP/index.html).
- Added [Purpose Of Use](StructureDefinition-IHE.mCSD.PurposeOfUse.html) extension for Endpoint and Organization with [Search Parameter](SearchParameter-IHE.mCSD.Search.PurposeOfUse.html).

### 3.7

- Added OrganizationAffiliation and Endpoint resources to [1:46](volume-1.html#1-46-mobile-care-services-discovery-mcsd) and [1:46.1.1](volume-1.html#14611-actor-descriptions-and-actor-profile-requirements)
- Added [Use Case #5: Organization Affiliation](volume-1.html#146425-use-case-5-health-information-exchange-hie-membership-discovery),
  describing how OrganizationAffiliations can represent non-hierarchical relationships between Organizations
- Added [Use Case #6: Health Information Exchange (HIE) Endpoint Discovery](volume-1.html#146426-use-case-6-health-information-exchange-hie-endpoint-discovery), showing an example of querying a directory with Endpoint resources
- Added new Section [1:46.8 mCSD Endpoint Usage Considerations](volume-1.html#1468-mcsd-endpoint-usage-considerations),
  describing how to populate and use a directory with Endpoint resources to enable electronic communications
- \[ITI-90\]: added OrganizationAffiliation and Endpoint resources to [Description and Message Semantics](ITI-90.html#239041-find-matching-care-services-request-message)
- \[ITI-90\]: added expected search parameters for [Organization](ITI-90.html#23904122-organization-resource-message-semantics) to support OrganizationAffiliation and Endpoint resources
- \[ITI-90\]: added sections for expected search parameters for [Endpoint](ITI-90.html#23904128-endpoint-resource-message-semantics) and [OrganizationAffiliation](ITI-90.html#23904129-organizationaffiliation-resource-message-semantics)
- Added the following to deal with FHIR R4 Endpoint.connectionType being limited to one value from an HL7 valueSet
  (see [FHIR-12342](https://jira.hl7.org/browse/FHIR-12342): need more detail to connect to an IHE Document Sharing endpoint):
  - A code system [mCSD Endpoint Types](CodeSystem-MCSDEndpointTypes.html) to define IHE Endpoint types beyond those in the FHIR core, using the same abstract codes HL7 uses like "ihe-xca", but adds child codes like "XCA-RespGateway-Query"
  - A [core value set](ValueSet-MCSDEndpointTypesCoreDocShareVS.html) to cover the codes at the HL7 level of detail, suitable for use in connectionType
  - An [expanded value set](ValueSet-MCSDEndpointTypesVS.html) using the child codes, for use in the following extension
  - An [extension for Endpoint Specific Type](StructureDefinition-ihe-endpointspecifictype.html) to carry the more-specific IHE code
- Added a [code system](CodeSystem-MCSDOrgAffTypes.html) and [value set](ValueSet-MCSDOrgAffTypesVS.html) for types of OrganizationAffiliation
- Added structure definitions for resource profiles:
  - [mCSD Endpoint](StructureDefinition-IHE.mCSD.Endpoint.html): general Endpoint
  - [mCSD Endpoint for Document Sharing](StructureDefinition-IHE.mCSD.Endpoint.DocShare.html):
    Endpoint that supports IHE Document Sharing (e.g., XCA, MHD), using the [extension for Endpoint Specific Type](StructureDefinition-ihe-endpointspecifictype.html)
  - [mCSD Organization Affiliation](StructureDefinition-IHE.mCSD.OrganizationAffiliation.html): general OrganizationAffiliation.
  - [mCSD Organization Affiliation DocumentSharing](StructureDefinition-IHE.mCSD.OrganizationAffiliation.DocShare.html): OrganizationAffiliation that supports IHE Document Sharing, using a fixed code "DocShare-federate" that indicates that the affiliation implies electronic access to the participatingOrganization (see [1:46.8 mCSD Endpoint Usage Considerations](volume-1.html#1468-mcsd-endpoint-usage-considerations))
- Added [examples](artifacts.html#example-example-instances) for OrganizationAffiliation and Endpoint

## Issues

IHE welcomes [New Issues](https://github.com/IHE/ITI.mCSD/issues/new/choose)
from the GitHub community. For those without GitHub access, issues may be
submitted at [ITI Public Comments](https://www.ihe.net/ITI_Public_Comments/).

As issues are submitted they will be managed on the
[mCSD GitHub Issues](https://github.com/IHE/ITI.mCSD/issues), where discussion and
workarounds may be found. These issues, when critical, will be processed using the normal
[IHE Change Proposal](https://wiki.ihe.net/index.php/Category:CPs) management and balloting.
It is important to note that as soon as a Change Proposal is approved, it carries the same
weight as a published Implementation Guide (i.e., it is testable at an 
[IHE Connectathon](https://www.ihe.net/participate/connectathon/) from the time it is
approved, even if it will not be integrated until several months later).

### Open Issues and Questions
These issues were known as part of the publication, and IHE invites comments.

[mCSD\_7](https://github.com/IHE/ITI.mCSD/issues/94). Should there be additional required search parameters? Should
we also require any reverse chaining (\_has) options for the search?
Should we require any reverse includes (\_revinclude)? These would add
complexity to the server and most will have similar options through
include and normal chaining.

In \[ITI-90\], we've added a number of required search parameters to support
queries for OrganizationAffiliation and Endpoint. Is it sustainable to require this many
search parameters? Should we move some to SHOULDs or MAYs? Note that the main use case
is locating an Organization based on its business, not network, attributes (already
covered elsewhere in mCSD), then checking its Endpoints. Further, recursively searching
parents and affiliations for Endpoints is likely an edge case, not one we need to try to do
in a single request.

[mCSD\_10](https://github.com/IHE/ITI.mCSD/issues/95). Section 1:46.8 mCSD Endpoint Usage Considerations, describes
how to populate and use an endpoint directory. Given that this IG is more
about how to deploy and use directories than what to put in them, would this
content be better as a white paper instead?  And could this content be
generalized to allow usage with mCSD as well as other directory IGs like
[https://hl7.org/fhir/uv/vhdir/](https://hl7.org/fhir/uv/vhdir/)?

[mCSD\_11](https://github.com/IHE/ITI.mCSD/issues/96). Should we assume federation of (i.e., connectivity to) child
organizations when related by .partOf? Currently the IG does
(see Section 1:46.8.2), and we believe this is what is done in practice.
The downside is that there is no way to represent a hierarchical relationship that does not imply routing.

[mCSD\_12](https://github.com/IHE/ITI.mCSD/issues/97). Should we specify details of addressing to federated recipients, at least for some
profiles (see Section 1:46.8.2)? For example, with MHD \[ITI-65\] we could pass the Organization.identifier
in the intendedRecipient field. There is already an IG for passing a Direct address in an XDR \[ITI-41\].

[mCSD\_14](https://github.com/IHE/ITI.mCSD/issues/98). Consider doing something similar to what
[HL7 UDAP Security](https://build.fhir.org/ig/HL7/fhir-udap-security-ig/branches/main/) did, and
describe mCSD within the larger family of directory IGs, making clear
where compatibility is assured as well as what each IGs focus is. For example,
[https://hl7.org/fhir/uv/vhdir/](https://hl7.org/fhir/uv/vhdir/) covers
maintenance and validation of the content of directories, while mCSD
covers how to represent and search complex structures.

[mCSD\_15](https://github.com/IHE/ITI.mCSD/issues/99). In [Section 1:46.8](volume-1.html#1468-mcsd-endpoint-usage-considerations),
we mention the US TEFCA RCE maintaining a consolidated
directory spanning multiple networks. Can we identify an international example?

[mCSD\_16](https://github.com/IHE/ITI.mCSD/issues/100). In [Section 1:46.8.2](volume-1.html#14682-endpoint-to-a-structure),
we say that a hierarchy formed by Organization.partOf implies federation of (i.e., connectivity to) child
organizations. Should we? We believe this is what is done in practice. The downside is that
there would be no way to represent a hierarchical relationship that does not imply routing.
An alternative proposed design would require OrganizationAffiliation with a code
of “DocShare-federate” to be explicitly related to any parent-child relationship to imply connectivity.
We did not choose this because its impact on existing directory structures would be substantial.

[mCSD\_18](https://github.com/IHE/ITI.mCSD/issues/101). Should we specify details of addressing federated recipients, at least for some
profiles (see [Section 1:46.8.2](volume-1.html#14682-endpoint-to-a-structure))?
For example, with MHD \[ITI-65\] we could pass the Organization.identifier
in the intendedRecipient field. There is already an IG for passing a Direct address in an XDR \[ITI-41\].

[mCSD\_20](https://github.com/IHE/ITI.mCSD/issues/102). There is minimal usage guidance for REST endpoints.
Figure [1:46.8.3-1](volume-1.html#14683-grouping-actors) shows connectionType = hl7-fhir-rest and
extension:specificType = MHD-Recipient-ProvideReg. Is this necessary? Couldn't 
clients discover anything they need to know about REST from the CapabilityStatement?

[mCSD\_21](https://github.com/IHE/ITI.mCSD/issues/103). This profile says very little about home community ID, yet it is called out
in [mCSD issue #2](https://github.com/IHE/ITI.mCSD/issues/2).
[Section 1:46.8.2](volume-1.html#14682-endpoint-to-a-structure) talks about
"identifiers of type Home Community ID". The [profile on Endpoint for Document Sharing](StructureDefinition-IHE.mCSD.Endpoint.DocShare.html) says to put the HCID in the Endpoint.identifier. The
[Example of an mCSD XCA Query Endpoint](Endpoint-ex-endpointXCAquery.json.html) shows
an Endpoint.identifier.type with coding for a HCID. But this is not specified
normatively anywhere.

- Does HCID need to be specified to ensure interoperability?
- Should HCID be mandated on the Endpoint, the Organization, or both?
- Should federated communities behind an Endpoint be reflected in its identifier list?
- Should identifier of an Endpoint be empty?

We have seen directories add a custom code "HCID" that shows that an identifier is a HCID,
and have seen them use the system of "urn:ietf:rfc:3986" and a URN-encoded OID.
In committee discussions, we walked this through, and the general consensus was that
for identifying an organization to meet the MHD to a Federation use cases (i.e., to
determine connectivity), whether or not an identifier happened to be a HCID
was not significant. If we were to get into more detail about addressing federated recipients
(see issue 15 in this list), we might need to make decisions like whether HCID must be
a specific identifier type and whether it should be URN-encoded.

[mCSD\_23](https://github.com/IHE/ITI.mCSD/issues/104). In the [Resource Profile: mCSD Endpoint for Document Sharing](StructureDefinition-IHE.mCSD.Endpoint.DocShare.html), 
to indicate that the endpoint is not constrained, should payloadType and payloadMimeType be empty, or fully populated?

[mCSD\_24](https://github.com/IHE/ITI.mCSD/issues/105). In the [Resource Profile: mCSD Endpoint for Document Sharing](StructureDefinition-IHE.mCSD.Endpoint.DocShare.html), 
should payloadType and payloadMimeType be required to be the same for Endpoints that reflect grouped actors (i.e., XCA/XDS/MHD Query and XCA/XDS/MHD Retrieve), thus replicating the capability at both endpoints?

[mCSD\_25](https://github.com/IHE/ITI.mCSD/issues/106). In the [Resource Profile: mCSD Endpoint for Document Sharing](StructureDefinition-IHE.mCSD.Endpoint.DocShare.html),
should payloadType and payloadMimeType be specified for an XCA Query endpoint? It did not seem right that Query be indicated with a mimeType of ebRegistry as that is not helpful to the use-case.

[mCSD\_26](https://github.com/IHE/ITI.mCSD/issues/107). In the [Resource Profile: mCSD Endpoint for Document Sharing](StructureDefinition-IHE.mCSD.Endpoint.DocShare.html), would a Proxy service that is supporting OrgAff be a good example of NOT putting a homeCommunityId in the endpoint.identifier?

[mCSD\_27](https://github.com/IHE/ITI.mCSD/issues/108). Need to align and flesh out the examples better with the guidance in [Section 1:46.8.2](volume-1.html#14682-endpoint-to-a-structure). For example, could we see an example for an organization accessible via two different exchanges?

[mCSD\_28](https://github.com/IHE/ITI.mCSD/issues/109). Grouping of actors is mentioned in [Section 1:46.8.3](volume-1.html#14683-grouping-actors).
Does Karen's Cross apply here? If so, how? Should OrganizationAffiliation be required?

[Karen's Cross](https://wiki.directproject.org/w/images/3/3e/2011-03-09_PDF_-_XDR_and_XDM_for_Direct_Messaging_Specification_FINAL.pdf#page=6)
(see 3.0 Interaction Patterns. Also described [here](https://healthcaresecprivacy.blogspot.com/2012/08/karens-cross-or-just-minimal-metadata.html))
is a mapping table defined by the [Direct Project](https://wiki.directproject.org/Main_Page) (not by IHE),
that tells how to get to and from different flavors of IHE Document Sharing "Push" (XDR, XDM) and the Direct Protocol.
It was done at a "whiteboard" level of detail, and resulted in specific requirements for transforming
messages more or less isomorphically from one flavor to another. Later, [additional requirements](https://docs.google.com/document/d/1U0h_mB5AQGNgSwZKRHHqg8JVFPp1MW6ptIWxYR6Mtyg/edit#heading=h.o5yl9ti9jyak)
were added for encoding Direct addresses in XDR SubmissionSet.intendedRecipient. It should be noted
that the Cross is incomplete; neither Direct nor IHE has any analogous requirements for transforming,
say, an XCA Query and Retrieve response into an XDM file. XCDR and MHD Push and Pull are also missing. 
That said, IHE Document Sharing profiles (not counting Direct) are generally considered similar enough that
transformations should be obvious.

So, when would Karen's Cross (or an expanded version) apply? Potentially anywhere two systems
need to translate between different Doc Sharing actors, but it's really only needed if transformations
are not obvious. Maybe it needs to be documented by IHE (especially if it's between IHE actors).
We'll look into this in a second.

But first, OrganizationAffiliation shouldn't be required, because it's orthogonal
to whether translation is needed. For example: In the directory, Org A has two Endpoints:
an MHD Document Responder and an XDS Document
Registry/Repository. Behind the scenes, the MHD actor is an adapter over the XDS actors.
This is simply two APIs to the same organization. The HCID and any other
organization or author identifiers are simply copied; there is no translation needed.

Now let's consider the other cases where there's federation to other organizations/entities
not directly reachable. OrganizationAffiliation is just one case:
- An Org allows access to others related with partOf
- An Org allows access to others related with OrganizationAffiliation
- An Org allows access to Practitioners related via mCSD links

In these cases, there might be a translation layer behind the exposed Endpoint to get to those
other entities, or there might be some other proprietary mechanism: internal EHR messaging,
direct DB access, etc.

So would Karen's Cross (or an expanded version) potentially apply? Yes, but likely only in making
sure that addressing of federated organizations/entities is clear. We have that as issue mCSD\_18.

[mCSD\_29](https://github.com/IHE/ITI.mCSD/issues/110). Is OrganizationAffiliation sufficiently mature to base this profile on?
Is it appropriate to say the .organization is the "parent-like" org that rolls up content from
.participatingOrganization orgs? There is a .network field; should that be used
instead?

We believe we are using it appropriately, but there are a couple of issues we are tracking:
- [FHIR-25406: definition of organization and participatingOrganization in OrganizationAffiliation is not clear](https://jira.hl7.org/browse/FHIR-25406)
- [FHIR-36019: OrganizationAffiliation.network unclear](https://jira.hl7.org/browse/FHIR-36019)

[mCSD\_30](https://github.com/IHE/ITI.mCSD/issues/111). Currently there is one code in [mCSD Organization Affiliation Types](https://build.fhir.org/ig/IHE/ITI.mCSD/branches/main/CodeSystem-MCSDOrgAffTypes.html). Should there be at least two, one for transparent federation vs opaque federation?
The expectations would be different: with transparent federation, federated identifiers would be
preserved in responses and respected in requests. With opaque federation, identifiers would be
consolidated/overwritten with the identifiers of the "parent" organization.

Probably, but the implications of opaque federation are complex. Some aspects may be consolidated
(e.g., golden patient record) while others are not (separate documents). Perhaps we could limit scope
to whether federated communities (Organizations with an ID of type HCID) are addressable in
requests and responses. Seeking input from reviewers.

[mCSD\_31](https://github.com/IHE/ITI.mCSD/issues/112). Currently, only synchronous XDS/XCA/XDR and MHD Push are supported. This scope was limited
for the public-comment deadline. After public comment, we plan to add in asynchronous (WS-A and AS4)
and full MHD. One area that needs work is Digital Certificates to support async end-to-end security
(Not needed for sync that uses TLS).
- Currently, base FHIR doesn't include a publicKey, and recommends a local extension
[https://jira.hl7.org/browse/FHIR-10764](https://jira.hl7.org/browse/FHIR-10764). We will add an extension.
- Note VhDir has an extension http://hl7.org/fhir/uv/vhdir/StructureDefinition/digitalcertificate, 
but it is very complex. Not clear if this complexity is needed.

[mCSD\_32](https://github.com/IHE/ITI.mCSD/issues/113). In [mCSD Endpoint](StructureDefinition-IHE.mCSD.Endpoint.html), rather than managingOrganization 1..1, create an invariant so that
either managingOrganization or contact must be populated.

[mCSD\_33](https://github.com/IHE/ITI.mCSD/issues/114). FHIR R5 will allow Endpoint.connectionType to be greater than 1, so we can use the IHE-defined codes in addition to the HL7 ones. We won't need Endpoint.extension:specificType anymore. See [Issue 89](https://github.com/IHE/ITI.mCSD/issues/89).

[mCSD\_34](https://github.com/IHE/ITI.mCSD/issues/58). Should we add a subscription model for receiving updates instead of or in addition to \[ITI-91\] for resource updates?

### Closed Issues
These issues have been decided and documented in the publication.

*mCSD\_1. Should we include the FreeBusy transaction and use cases or
just remove them?*

  - Take this out, and possibly add later if needed as an option.

*mCSD\_2. Should we include the aggregate reporting use case from Care
Services Discovery (CSD) or remove with a reference to Aggregate Data
Exchange (ADX) in cross profile considerations? This use case would
define options for the actors in this use case to return aggregate data.
*

  - At this time we do not believe these are key uses cases, but request
    feedback.

*mCSD\_3. How do we capture data about community health workers? In some
environments, there are community health workers that are associated
with a facility but don't actually work there. Such a worker might have
a set area of villages that they rotate through providing
community-based care. The villages are within the catchment area of a
Health facility, and the supervisor of the community health worker may
be based at that facility. *

*Not quite sure the best way to capture this when looking at:*

*[http://build.fhir.org/location.html\#bnr](http://build.fhir.org/location.html#bnr)*

*It is clear that we have a hierarchy of locations to capture the
geographic hierarchy (jurisdictions): *

  - *The health facility in question would be situated at a location
    above the village level, say at the county or district level - this
    we can capture in the parent-child relationship “partOf” in the
    location resource*

  - *The community health worker is providing services at several
    villages - this we can capture through the location data field of
    the role in the practitioner resource*

  - *The community health worker is associated to a health facility -
    again we can capture this through the location field but perhaps we
    would use a different role to indicate that they're community health
    worker associated to this facility but not directly providing
    services at the facility, only its catchment area*

  - *In case a community health worker is reporting to a supervisor -
    that's not captured anywhere that I can see in FHIR. I think this is
    a larger that exists beyond the community health worker context*

Perhaps the best way to model this is to define each village as a
location, and associate that worker with each location they rotate
through. Each village is a partOf the health district. The facility is
also a location that is partOf the district. The practitioner is related
to the village locations with a "delivers care to" role; and to the
facility with a "based out of" role.

*mCSD\_4. Do we need to include more geospatial data (such as polygons
or more complex geometry types) stored with Locations and how? This
would be so jurisdictions (such as districts or counties) could include
that data instead of just a position (latitude/longitude).
[CP\#13391](http://gforge.hl7.org/gf/project/fhir/tracker/?action=TrackerItemEdit&tracker_item_id=13391)
has been opened for this.*

As per the request, FHIR has added a standard extension to address this:
[https://www.hl7.org/fhir/extension-location-boundary-geojson.html](https://www.hl7.org/fhir/extension-location-boundary-geojson.html)

*mCSD\_5. With a federated deployment, data may come from multiple
sources and there can be an issue with resolving duplicate records and
maintaining the mapping. Patient has a link field and we have opened a
CP for Organization, Location, and Practitioner. CP
[GF\#13264](http://gforge.hl7.org/gf/project/fhir/tracker/?action=TrackerItemEdit&tracker_item_id=13264)
has been opened for this. There is also the Linkage resource, but it is
maturity level 0.*

FHIR has closed the issued with the recommendation to use the Linkage
resource to handle this.

*mCSD\_6. We need a way to deprecate identifiers. For now we can use
period and we have created a CP to add an entry to the use field:
[GF\#13265](http://gforge.hl7.org/gf/project/fhir/tracker/?action=TrackerItemEdit&tracker_item_id=13265).*

FHIR has added an additional Identifier.use code of “old” for this case.

*mCSD\_8. IHE has updated mCSD to add support for organizational
facilities. As part of this revision of mCSD, we have removed the
“Organization Option”, “Location Option”, “Practitioner Option”, and
“Healthcare Services Option”. These options existed to enable servers
to focus only on a small subset of the resources. The actual burden to
support all resources is small and set of options seems to add
unnecessary complexity. The result would be that servers shall support
all of the FHIR Resources, the clients can use the FHIR Resources in the
way defined. If there is concern with the removal of these options,
please submit a Public Comment.*

No comments received so changes are being kept, but any additional comments are welcome.

*mCSD\_9. We have added a requirement to include a meta.profile tag for
all compliant resources. This is so that in a mixed server that has
these resources as well as others, a Care Services Selective Consumer
can limit the results of Find Matching Care Service \[ITI-90\] to only
mCSD resources using the \_profile parameter. Since this type of
parameter isn’t allowed for the \_history transaction for Request Care
Services Updates \[ITI-91\] the Care Services Update Consumer may have
to filter results if required. Is this a common configuration and is
this step necessary?*

Removed the references to meta.profile.

*mCSD\_13. Section 1:46.8 mCSD Endpoint Usage Considerations, describes
how to populate and use an endpoint directory. Given that this IG is more
about how to deploy and use directories than what to put in them, would this
content be better as a white paper instead? And could this content be
generalized to allow usage with mCSD as well as other directory IGs like
[https://hl7.org/fhir/uv/vhdir/](https://hl7.org/fhir/uv/vhdir/)?*

Duplicate of mCSD\_10

*mCSD\_17. In [Section 1:46.8.2](volume-1.html#14682-endpoint-to-a-structure),
we say that a hierarchy formed by the mCSD Additional Hierarchies extension
does not imply federation of (i.e., connectivity to) child organizations. Should it?*

Extension has been removed.

*mCSD\_19. In [Section 1:46.8.2](volume-1.html#14682-endpoint-to-a-structure),
why do we use OrganizationAffiliation for
an organization's membership in an HIE, as opposed to the mCSD Additional Hierarchies extension?
Because we don't wish to constrain the use of resources that define organizational structure,
rather just reflect how best to use Endpoints in these structures. OrganizationAffiliation
is already used in other use cases, and in fact, shows HIE/HIO membership as one of
its examples.*

Extension has been removed.

*mCSD\_22. In \[ITI-90\], we've added a number of required search parameters to support
queries for OrganizationAffiliation and Endpoint. Is it sustainable to require this many
search parameters? Should we move some to SHOULDs or MAYs? Note that the main use case
is locating an Organization based on its business, not network, attributes (already
covered elsewhere in mCSD), then checking its Endpoints. Further, recursively searching
parents and affiliations for Endpoints is likely an edge case, not one we need to try to do
in a single request.*

Combined into related open issue 7.

## Significant changes from mCSD, Rev 3.3:
- FHIR Implementation Guide instead of [pdf - Rev. 3.3](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_mCSD.pdf)
- Removed inline UML text and moved it to images-source/
- Removed reference to setting meta.profile as it is redundant
- Added sections in actor requirements describing the requirement of providing a capability statement [Volume 1](volume-1.html#14611-actor-descriptions-and-actor-profile-requirements)
- Updated the canonical URL for the organization hierarchy extension to `https://profiles.ihe.net/ITI/mCSD/StructureDefinition/IHE.mCSD.OrganizationHierarchy`
- Added links to the structure definitions for resource profiles to [ITI-90](ITI-90.html) and [ITI-91](ITI-91.html)
- Changed structuredefinitions for Facility and Jurisdiction to use an invariant for the type requirement instead of slicing
- Added in text to show that searches can use GET or POST [ITI-90 Message Semantics](ITI-90.html#2390412-message-semantics)
- Added in retrieve (GET RESOURCE/ID) message section starting at [ITI-90](ITI-90.html#239043-retrieve-care-services-resource-message)
- Removed tables for StructureDefinitions for resources.

</div>


---

File: repos/IHE_SLASH_ITI.mCSD/input/pagecontent/ITI-90.md


### 2:3.90.1 Scope

The Find Matching Care Services transaction returns a list of matching care services resources based on the query sent. A Care Services Selective Consumer initiates a Find Matching Care Services transaction against a Care Services Selective Supplier.

### 2:3.90.2 Actor Roles

| **Actor** | **Role** |
| ----- | ---- |
| Care Services Selective Consumer  | Requests a list of resources from the Care Services Selective Supplier based on query parameters |
| Care Services Selective Supplier  | Accepts the query request and returns a list of matching resources                              |
{: .grid}

### 2:3.90.3 Referenced Standards

  - HL7 FHIR standard Release 4 [http://hl7.org/fhir/R4/index.html](http://hl7.org/fhir/R4/index.html)

### 2:3.90.4 Messages

<div>
{%include ITI-90-seq.svg%}
</div>
<br clear="all">

**Figure 2:3.90.4-1: Interaction Diagram**

#### 2:3.90.4.1 Find Matching Care Services Request Message

The Find Matching Care Services message is a FHIR search operation on the mCSD Resources.

##### 2:3.90.4.1.1 Trigger Events

A Care Services Selective Consumer triggers a Find Matching Care Services Request to a Care Services Selective Supplier according to the business rules for the query. These business rules are outside the scope of this transaction.

##### 2:3.90.4.1.2 Message Semantics

A Care Services Selective Consumer initiates a search request using HTTP GET or POST as defined at [http://hl7.org/fhir/R4/http.html#search](http://hl7.org/fhir/R4/http.html#search) on the mCSD Resources. The Care Services Selective Supplier shall support both GET and POST based searches. The query parameters are identified below. A Care Services Selective Consumer may query any combination or subset of the parameters.

A Care Services Selective Supplier shall support responding to a request for both the JSON and the XML messaging formats as defined in FHIR. A Care Services Selective Consumer shall accept either the JSON or the XML messaging formats as defined in FHIR. See [ITI TF-2: Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details.

A Care Services Selective Supplier shall implement the parameters described below for the mCSD resources it supports. A Care Services Selective Supplier may choose to support additional query parameters beyond the subset listed below. Any additional query parameters supported shall be supported according to the core FHIR specification.

See [ITI TF-2: Appendix W](https://profiles.ihe.net/ITI/TF/Volume2/ch-W.html) for informative implementation material for this transaction.

###### 2:3.90.4.1.2.1 Common Parameters

The Care Services Selective Supplier shall support the `:contains` and `:exact` modifiers in all of the string query parameters below.

The Care Services Selective Supplier shall support the following search parameters as defined at [http://hl7.org/fhir/R4/search.html#all](http://hl7.org/fhir/R4/search.html#all).

```
_id
_lastUpdated
```

The Care Services Selective Supplier shall also support the following prefixes for the `_lastUpdated` parameter: `gt`, `lt`, `ge`, `le`, `sa`, and `eb`.

###### 2:3.90.4.1.2.2 Organization Resource Message Semantics

The Care Services Selective Supplier shall support the following search parameters on the Organization Resource as defined at [http://hl7.org/fhir/R4/organization.html#search](http://hl7.org/fhir/R4/organization.html#search). String parameter modifiers are defined at [http://hl7.org/fhir/R4/search.html#string](http://hl7.org/fhir/R4/search.html#string).

```
active
identifier
name
partof
type
_include=Organization:endpoint
_revInclude=Location:organization
_revInclude=OrganizationAffiliation:participating-organization
_revInclude=OrganizationAffiliation:primary-organization
```

###### 2:3.90.4.1.2.3 Location Resource Message Semantics

The Care Services Selective Supplier shall support the following search parameters on the Location Resource as defined at [http://hl7.org/fhir/R4/location.html#search](http://hl7.org/fhir/R4/location.html#search). String parameter modifiers are defined at [http://hl7.org/fhir/R4/search.html#string](http://hl7.org/fhir/R4/search.html#string).

```
identifier
name
organization
partof
status
type
_include=Location:organization
```

###### 2:3.90.4.1.2.4 Practitioner Resource Message Semantics

The Care Services Selective Supplier shall support the following search parameters on the Practitioner Resource as defined at [http://hl7.org/fhir/R4/practitioner.html#search](http://hl7.org/fhir/R4/practitioner.html#search). String parameter modifiers are defined at [http://hl7.org/fhir/R4/search.html#string](http://hl7.org/fhir/R4/search.html#string).

```
active
identifier
name
given
family
```

###### 2:3.90.4.1.2.5 PractitionerRole Resource Message Semantics

The Care Services Selective Supplier shall support the following search parameters on the PractitionerRole Resource as defined at [http://hl7.org/fhir/R4/practitionerrole.html#search](http://hl7.org/fhir/R4/practitionerrole.html#search).

```
active
location
organization
practitioner
role
service
specialty
_include=PractitionerRole:practitioner
```

###### 2:3.90.4.1.2.6 HealthcareService Resource Message Semantics

The Care Services Selective Supplier shall support the following search parameters on the HealthcareService Resource as defined at [http://hl7.org/fhir/R4/healthcareservice.html#search](http://hl7.org/fhir/R4/healthcareservice.html#search). String parameter modifiers are defined at [http://hl7.org/fhir/R4/search.html#string](http://hl7.org/fhir/R4/search.html#string).

```
active
identifier
location
name
organization
service-type
```

###### 2:3.90.4.1.2.7 Location Distance Option Message Semantics

The Care Services Selective Supplier supporting the Location Distance Option shall support the following search parameters on the Location Resource as defined at [http://hl7.org/fhir/R4/location.html#search](http://hl7.org/fhir/R4/location.html#search).

```
near
```

###### 2:3.90.4.1.2.8 Endpoint Resource Message Semantics

The Care Services Selective Supplier shall support the following search parameters on the Endpoint Resource as defined at [http://hl7.org/fhir/R4/endpoint.html#search](http://hl7.org/fhir/R4/endpoint.html#search). String parameter modifiers are defined at [http://hl7.org/fhir/R4/search.html#string](http://hl7.org/fhir/R4/search.html#string).

```
identifier
organization
status
```

###### 2:3.90.4.1.2.9 OrganizationAffiliation Resource Message Semantics

The Care Services Selective Supplier shall support the following search parameters on the OrganizationAffiliation Resource as defined at [http://hl7.org/fhir/R4/organizationaffiliation.html#search](http://hl7.org/fhir/R4/organizationaffiliation.html#search). String parameter modifiers are defined at [http://hl7.org/fhir/R4/search.html#string](http://hl7.org/fhir/R4/search.html#string).

```
active
date
identifier
participating-organization
primary-organization
role
_include=OrganizationAffiliation:endpoint
```

##### 2:3.90.4.1.3 Expected Actions

The Care Services Selective Supplier shall process the query to discover the resources that match the search parameters given, and return a response as per Section 2:3.90.4.2 or an error as per
[http://hl7.org/fhir/R4/search.html#errors](http://hl7.org/fhir/R4/search.html#errors).

#### 2:3.90.4.2 Find Matching Care Services Response Message

##### 2:3.90.4.2.1 Trigger Events

The Care Services Selective Supplier sends the Find Matching Care Services Response to the Care Services Selective Consumer when results to the query are ready.

##### 2:3.90.4.2.2 Message Semantics

The Care Services Selective Supplier shall support the search response message as defined at [http://hl7.org/fhir/R4/http.html#search](http://hl7.org/fhir/R4/http.html#search) on the following Resources.

  - Organization, as defined at
    [http://hl7.org/fhir/R4/organization.html](http://hl7.org/fhir/R4/organization.html)

  - Location, as defined at [http://hl7.org/fhir/R4/location.html](http://hl7.org/fhir/R4/location.html)

  - Practitioner, as defined at
    [http://hl7.org/fhir/R4/practitioner.html](http://hl7.org/fhir/R4/practitioner.html)

  - PractitionerRole, as defined at
    [http://hl7.org/fhir/R4/practitionerrole.html](http://hl7.org/fhir/R4/practitionerrole.html)

  - HealthcareService, as defined at
    [http://hl7.org/fhir/R4/healthcareservice.html](http://hl7.org/fhir/R4/healthcareservice.html)
    
  - Endpoint, as defined at
    [http://hl7.org/fhir/R4/endpoint.html](http://hl7.org/fhir/R4/endpoint.html)
    
  - OrganizationAffiliation, as defined at
    [http://hl7.org/fhir/R4/organizationaffiliation.html](http://hl7.org/fhir/R4/organizationaffiliation.html)
    
All References (Reference.reference element) to Resources defined in this transaction shall be populated with an accessible URL (see [https://www.hl7.org/fhir/references-definitions.html#Reference.reference](https://www.hl7.org/fhir/references-definitions.html#Reference.reference)), unless the referenced resource is not available at a URL known to the server.

###### 2:3.90.4.2.2.1 FHIR Organization Resource Constraints

A Care Services Selective Consumer may query on Organization Resources. A Care Services Selective Supplier shall return a Bundle of matching Organization Resources. The Organization Resource shall be further constrained as described in the [Organization Profile for mCSD](StructureDefinition-IHE.mCSD.Organization.html).

A Care Services Selective Consumer may query on Organization Resources when working with Facilities. A Care Services Selective Supplier shall return a Bundle of matching Organization Resources when working with Facilities. The FHIR Organization Resource shall be further constrained as described in the [Organization for Facilities Profile for mCSD](StructureDefinition-IHE.mCSD.FacilityOrganization.html).

A Care Services Selective Consumer may query on Organization Resources when working with Jurisdictions. A Care Services Selective Supplier shall return a Bundle of matching Organization Resources when working with Jurisdictions. The FHIR Organization Resource shall be further constrained as described in the [Organization for Jurisdictions Profile for mCSD](StructureDefinition-IHE.mCSD.JurisdictionOrganization.html).

###### 2:3.90.4.2.2.2 FHIR Location Resource Constraints

A Care Services Selective Consumer may query on Location Resources. A Care Services Selective Supplier shall return a Bundle of matching Location Resources. The Location Resource shall be further constrained as described in the [Location Profile for mCSD](StructureDefinition-IHE.mCSD.Location.html).

When the resource is a Facility, the Location Resource shall be paired with an Organization Resource using the managingOrganization element in Location. A Care Services Selective Consumer may query on Location Resources when working with Facilities. A Care Services Selective Supplier shall return a Bundle of matching Location Resources when working with Facilities. The FHIR Location Resource shall be further constrained as described in the [Location for Facilities Profile for mCSD](StructureDefinition-IHE.mCSD.FacilityLocation.html).

When the resource is a Jurisdiction, the Location Resource shall be paired with an Organization Resource using the managingOrganization element in Location. A Care Services Selective Consumer 
may query on Location Resources when working with Jurisdictions. A Care Services Selective Supplier shall return a Bundle of matching Location Resources when working with Jurisdictions. The FHIR Location Resource shall be further constrained as described in the [Location for Jurisdictions Profile for mCSD](StructureDefinition-IHE.mCSD.JurisdictionLocation.html).

When a geographic boundary is available for the Jurisdiction Location, the location-boundary-geojson extension defined at [http://hl7.org/fhir/extension-location-boundary-geojson.html](http://hl7.org/fhir/extension-location-boundary-geojson.html) shall be used to store this information.

When supporting the Location Distance Option, the Location Resource shall be further constrained as described in the [Location with Distance Option Profile for mCSD](StructureDefinition-IHE.mCSD.LocationDistance.html).

###### 2:3.90.4.2.2.3 FHIR Practitioner Resource Constraints

A Care Services Selective Consumer may query on Practitioner Resources. A Care Services Selective Supplier shall return a Bundle of matching Practitioner Resources. The Practitioner Resource shall be further constrained as described in the [Practitioner Profile for mCSD](StructureDefinition-IHE.mCSD.Practitioner.html).

###### 2:3.90.4.2.2.4 FHIR PractitionerRole Resource Constraints

A Care Services Selective Consumer may query on PractitionerRole Resources. A Care Services Selective Supplier shall return a Bundle of matching PractitionerRole Resources. The PractitionerRole Resource shall be further constrained as described in the 
[PractitionerRole Profile for mCSD](StructureDefinition-IHE.mCSD.PractitionerRole.html).

###### 2:3.90.4.2.2.5 FHIR HealthcareService Resource Constraints

A Care Services Selective Consumer may query on HealthcareService Resources. A Care Services Selective Supplier shall return a Bundle of matching HealthcareService Resources. The HealthcareService Resource shall be further constrained as described in the [HealthcareService Profile for mCSD](StructureDefinition-IHE.mCSD.HealthcareService.html).

###### 2:3.90.4.2.2.6 FHIR OrganizationAffiliation Resource Constraints

A Care Services Selective Consumer may query on OrganizationAffiliation Resources. A Care Services Selective Supplier shall return a Bundle of matching OrganizationAffiliation Resources. The OrganizationAffiliation Resource shall be further constrained as described in the [OrganizationAffiliation Profile for mCSD](StructureDefinition-IHE.mCSD.OrganizationAffiliation.html).

When the OrganizationAffiliation contains an Endpoint to an IHE document sharing environment, it shall further be constrained as described in the [OrganizationAffiliation for Document Sharing Profile for mCSD](StructureDefinition-IHE.mCSD.OrganizationAffiliation.DocShare.html).

###### 2:3.90.4.2.2.7 FHIR Endpoint Resource Constraints

A Care Services Selective Consumer may query on Endpoint Resources. A Care Services Selective Supplier shall return a Bundle of matching Endpoint Resources. The Endpoint Resource shall be further constrained as described in the [Endpoint Profile for mCSD](StructureDefinition-IHE.mCSD.Endpoint.html).

When the Endpoint is to an IHE document sharing environment, it shall further be constrained as described in the [Endpoint for Document Sharing Profile for mCSD](StructureDefinition-IHE.mCSD.Endpoint.DocShare.html).


##### 2:3.90.4.2.3 Expected Actions

The Care Services Selective Consumer has received the response and continues with its workflow.

#### 2:3.90.4.3 Retrieve Care Services Resource message
This message represents an HTTP GET from the Care Services Selective Consumer to the Care Services Selective Supplier and provides a mechanism for retrieving a single Care Services Resource with a known resource identifier.

##### 2:3.90.4.3.1 Trigger Events
When the Care Services Selective Consumer possesses a Care Services Resource identifier (either through query, database lookup, or other mechanism) for which it requires additional or new information, it issues a Retrieve Care Services Resource interaction.

##### 2:3.90.4.3.2  Message Semantics
The Retrieve Care Services Resource is conducted by executing an HTTP GET against the Care Services Selective Supplier’s Care Services Resource URL, providing the resource id of the resource being retrieved. The target is formatted as:

```    GET [base]/[resource]/[resourceId]```

The Care Services Selective Supplier shall respond to this query by sending a single Care Services Resource instance.

The `resourceId` included in the request always represents the unique identifier for the Resource within the scope of the URL. For example, while `http://example1.org/ihe/Practitioner/1` and `http://example2.com/ihe/Practitioner/1` both contain the same `[resourceId]`, they reference two different resource instances.

Note: The use of "http" or "https" in URL does not override requirements to use TLS for security purposes.

##### 2:3.90.4.3.3 Expected Actions
The Care Services Selective Supplier shall retrieve the record indicated by the Resource identifier on the HTTP GET supplied by the Care Services Selective Consumer. The Care Services Selective Supplier shall respond to the retrieve request as described by the following cases:

**Case 1**: The Care Services Selective Supplier finds the care services record matching the `resourceId` sent in the HTTP request.

`HTTP 200` (OK) is returned as the HTTP status code.

A Care Services Resource is returned representing the result.

**Case 2**: The Care Services Selective Supplier fails to find the care services record matching the `resourceId` sent in the HTTP request.

`HTTP 404` (Not Found) is returned as the HTTP status code

An `OperationOutcome` Resource is returned indicating that the Care Services Resource could not be found, in an issue having:

Attribute|Value
---|---
severity|error
code|not-found
{:.grid}

The Care Services Selective Supplier may return other HTTP status codes to represent specific error conditions. When HTTP error status codes are returned by the Care Services Selective Supplier, they shall conform to the HTTP standard [RFC2616](https://tools.ietf.org/html/rfc2616). Their use is not further constrained or specified by this transaction.

#### 2:3.90.4.4 Retrieve Care Services Resource Response message

The Care Services Selective Supplier’s response to a successful Retrieve Care Services Resource message shall be an `HTTP 200` (OK) Status code with a Care Services Resource, or an appropriate error code.  See the [Retrieve Care Services Resource message expected actions](#2390433-expected-actions) for additional details.

##### 2:3.90.4.4.1 Trigger Events
The Care Services Selective Supplier found a record matching the Resource identifier specified by the Care Services Selective Consumer.

##### 2:3.90.4.4.2 Message Semantics
The Retrieve Care Services Resource response is sent from the Care Services Selective Supplier to the Care Services Selective Consumer as a single Care Services Resource. 

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format handling. See [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for guidance on Access Denied.

If the Care Services Selective Supplier is unable to produce a response in the requested format, it shall respond with an `HTTP 400` error indicating that it was unable to fulfill the request. The Care Services Selective Supplier may be capable of servicing requests for response formats not listed, but shall, at minimum, be capable of producing XML and JSON encodings.

###### 2:3.90.4.4.2.1 Care Services Resource Definition in the Context of Care Services Resource Response
The Care Services Resource definition in the context of a retrieve interaction is the FHIR definition of the various Care Services Resources. Table 2:3.90.4.4.2.1-1 lists the resources with where to find the additional constraints.

**Table 2:3.90.4.4.2.1-1: Care Services Resource Constraints**

| Resource | Section |
| ------------------- | --------- |
| `Organization`      | [2:3.90.4.2.2.1 FHIR Organization Resource Constraints](#23904221-fhir-organization-resource-constraints) |
| `Location`          | [2:3.90.4.2.2.2 FHIR Location Resource Constraints](#23904222-fhir-location-resource-constraints) |
| `Practitioner`      | [2:3.90.4.2.2.3 FHIR Practitioner Resource Constraints](#23904223-fhir-practitioner-resource-constraints) |
| `PractitionerRole`  | [2:3.90.4.2.2.4 FHIR PractitionerRole Resource Constraints](#23904224-fhir-practitionerrole-resource-constraints) |
| `HealthcareService` | [2:3.90.4.2.2.5 FHIR HealthcareService Resource Constraints](#23904225-fhir-healthcareservice-resource-constraints) |
{: .grid .table-striped}

### 2:3.90.5 Security Considerations

See [ITI TF-1: 46.5](volume-1.html#1465-mcsd-security-considerations) for security considerations for the mCSD Profile.

See [ITI TF-2: Appendix Z.8](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations) for common mobile security considerations.

#### 2:3.90.5.1 Security Audit Considerations

Note that the same audit message is recorded by both Care Services Selective Supplier and Care Services Selective Consumer. The
difference being the Audit Source element. Both sides record to show consistency
between the message sent by the Consumer and the action taken at the Supplier.

The actors involved shall record audit events according to the
[Audit Event for Find Matching Care Services for Read by the Care Services Selective Supplier and Consumer](StructureDefinition-IHE.mCSD.Audit.CareServices.Read.html)
or the [Audit Event for Find Matching Care Services for Query by the Care Services Selective Supplier and Consumer](StructureDefinition-IHE.mCSD.Audit.CareServices.Query.html).


---

File: repos/IHE_SLASH_ITI.mCSD/input/pagecontent/ITI-91.md


### 2:3.91.1 Scope

The Request Care Services Updates transaction is used to return a list of updated care services resources. A Care Services Update Consumer initiates a Request Care Services Updates transaction against a Care Services Update Supplier.

### 2:3.91.2 Actor Roles

| Actor | Role |
| ----- | ---- |
| Care Services Update Consumer | Requests a list of updated resources from the Care Services Update Supplier. |
| Care Services Update Supplier | Accepts the update request and returns a list of updated resources.          |
{: .grid}

### 2:3.91.3 Referenced Standards

  - [HL7 FHIR standard Release 4](http://hl7.org/fhir/R4/index.html)


### 2:3.91.4 Messages

<div>
{%include ITI-91-seq.svg%}
</div>
<br clear="all">

**Figure 2:3.91.4-1: Interaction Diagram**

#### 2:3.91.4.1 Request Care Services Updates Request Message

A Request Care Services Updates message is a FHIR history operation, optionally using the ```_since``` parameter, on the mCSD Resources.

##### 2:3.91.4.1.1 Trigger Events

A Care Services Update Consumer triggers a Request Care Services Updates Request to a Care Services Update Supplier according to the business rules for the query. These business rules are outside the scope of this transaction.

##### 2:3.91.4.1.2 Message Semantics

A Care Services Update Consumer initiates a history request using HTTP GET as defined at [http://hl7.org/fhir/R4/http.html#history](http://hl7.org/fhir/R4/http.html#history) on the mCSD Resources.

A Care Services Update Supplier and Care Services Update Consumer shall support the following parameters.

```
_since
```

They shall also support the requirements in [ITI TF-2: Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format), Populating the Expected Response Format.

A Care Services Update Supplier shall support receiving a request for both the JSON and the XML messaging formats as defined in FHIR. A Care Services Update Consumer shall accept either the JSON or the XML messaging formats as defined in FHIR.

See [ITI TF-2: Appendix W](https://profiles.ihe.net/ITI/TF/Volume2/ch-W.html) for informative implementation material for this transaction.

##### 2:3.91.4.1.3 Expected Actions

The Care Services Update Supplier shall process the query to discover the resources that match the search parameters given, and gives a response as per [Section 2:3.91.4.2](#239142-request-care-services-updates-response-message) or an error as per [http://hl7.org/fhir/R4/search.html#errors](http://hl7.org/fhir/R4/search.html#errors).

#### 2:3.91.4.2 Request Care Services Updates Response Message

The Request Care Services Updates \[ITI-91\] transaction uses the response semantics as defined at [http://hl7.org/fhir/R4/http.html#history](http://hl7.org/fhir/R4/http.html#history) as applicable for the resources.

##### 2:3.91.4.2.1 Trigger Events

The Care Services Update Supplier sends the Request Care Services Updates Response to the Care Services Update Consumer when results are ready.

##### 2:3.91.4.2.2 Message Semantics

The Care Services Update Supplier shall support the history response message as defined at [http://hl7.org.fhir/R4/http.html#history](http://hl7.org.fhir/R4/http.html#history) on the following Resources:

  - Organization, as defined at
    [http://hl7.org/fhir/R4/organization.html](http://hl7.org/fhir/R4/organization.html)

  - Location, as defined at [http://hl7.org/fhir/R4/location.html](http://hl7.org/fhir/R4/location.html)

  - Practitioner, as defined at
    [http://hl7.org/fhir/R4/practitioner.html](http://hl7.org/fhir/R4/practitioner.html)

  - PractitionerRole, as defined at
    [http://hl7.org/fhir/R4/practitionerrole.html](http://hl7.org/fhir/R4/practitionerrole.html)

  - HealthcareService, as defined at
    [http://hl7.org/fhir/R4/healthcareservice.html](http://hl7.org/fhir/R4/healthcareservice.html)
    
    All References (reference.reference element) to Resources defined in
    this transaction shall be populated with an accessible URL (see
    [https://www.hl7.org/fhir/references-definitions.html#Reference.reference](https://www.hl7.org/fhir/references-definitions.html#Reference.reference)
    ), unless the referenced resource is not present on a server
    accessible to the client.

###### 2:3.91.4.2.2.1 FHIR Organization Resource Constraints

A Care Services Update Consumer and a Care Services Update Supplier shall query or return an Organization Resource. The Organization Resource shall be further constrained as described in the [Organization Profile for mCSD](StructureDefinition-IHE.mCSD.Organization.html).

When the Organization represents a Facility and is paired with a Location, the FHIR Organization Resource shall be further constrained as described in the [Organization for Facilities Profile for mCSD](StructureDefinition-IHE.mCSD.FacilityOrganization.html).

When the Organization represents a Jurisdiction and is paired with a Location, the FHIR Organization Resource shall be further constrained as described in the [Organization for Jurisdictions Profile for mCSD](StructureDefinition-IHE.mCSD.JurisdictionOrganization.html).

###### 2:3.91.4.2.2.2 FHIR Location Resource Constraints

A Care Services Update Consumer and a Care Services Update Supplier shall query or return a Location Resource. The Location Resource shall be further constrained as described in the [Location Profile for mCSD](StructureDefinition-IHE.mCSD.Location.html).

When the Location represents a Facility and is paired with an Organization, the FHIR Location Resource shall be further constrained as described in the 
[Location for Facilities Profile for mCSD](StructureDefinition-IHE.mCSD.FacilityLocation.html).

When the Location represents a Jurisdiction and is paired with an Organization, the FHIR Location Resource shall be further constrained as described in the [Location for Jurisdictions Profile for mCSD](StructureDefinition-IHE.mCSD.JurisdictionLocation.html).

When supporting the Location Distance Option, the FHIR Location Resource shall be further constrained as described in the [Location with Distance Option Profile for mCSD](StructureDefinition-IHE.mCSD.LocationDistance.html).

###### 2:3.91.4.2.2.3 FHIR Practitioner Resource Constraints

A Care Services Update Consumer and a Care Services Update Supplier shall query or return a Practitioner Resource. The Practitioner Resource shall be further constrained as described in the [Practitioner Profile for mCSD](StructureDefinition-IHE.mCSD.Practitioner.html).

###### 2:3.91.4.2.2.4 FHIR PractitionerRole Resource Constraints

A Care Services Update Consumer and a Care Services Update Supplier shall query or return a PractitionerRole Resource. The PractitionerRole Resource shall be further constrained as described in the [PractitionerRole Profile for mCSD](StructureDefinition-IHE.mCSD.PractitionerRole.html).

###### 2:3.91.4.2.2.5 FHIR HealthcareService Resource Constraints

A Care Services Update Consumer and a Care Services Update Supplier shall query or return a HealthcareService Resource. The HealthcareService Resource shall be further constrained as described in the [HealthcareService Profile for mCSD](StructureDefinition-IHE.mCSD.HealthcareService.html).

##### 2:3.91.4.2.3 Expected Actions

The Care Services Update Consumer has received the response and continues with its workflow.

### 2:3.91.5 Security Considerations

See [ITI TF-1: 46.5](volume-1.html#1465-mcsd-security-considerations) for security considerations for the mCSD Profile.

See [ITI TF-2: Appendix Z.8](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations) for common mobile security considerations.

#### 2:3.91.5.1 Security Audit Considerations

Note that the same audit message is recorded by both Care Services Update Supplier and Care Services Update Consumer. The
difference being the Audit Source element. Both sides record to show consistency
between the message sent by the Supplier and the action taken at the Consumer.

The actors involved shall record audit events according to the
[Audit Event for Request Care Services Updates by the Care Services Update Supplier and Consumer](StructureDefinition-IHE.mCSD.Audit.CareServices.Updates.html).


---

File: repos/IHE_SLASH_ITI.mCSD/input/pagecontent/other.md

<div markdown="1" class="stu-note">
This section contains modifications to other IHE publications and profiles, and is not a part of the mCSD Profile. The content here will be incorporated into the target narrative at a future time, usually when mCSD goes final text.
</div>

## IHE Technical Frameworks General Introduction Appendix A: Actors

|------------------------------------------------|
| Editor, add the following new or modified actors to the [IHE Technical Frameworks General Introduction Appendix A](https://profiles.ihe.net/GeneralIntro/ch-A.html): |
{:.grid .bg-info}


| Actor                            | Definition                                                                                                                                                                                                                                                                                |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Care Services Selective Consumer | Consumes information about care services resources.                                                                              |
| Care Services Selective Supplier | Supplies information about care services resources.                                                                              |
| Care Services Update Consumer    | Consumes the history of care services information.                                                                                |
| Care Services Update Supplier    | Supplies the history of care services information.                                                                                |
{:.grid .table-striped}


## IHE Technical Frameworks General Introduction Appendix B: Transactions

|------------------------------------------------|
| Editor, add the following new or modified transactions to the [IHE Technical Frameworks General Introduction Appendix B](https://profiles.ihe.net/GeneralIntro/ch-B.html): |
{:.grid .bg-info}


| Transaction                              | Definition                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Find Matching Care Services \[ITI-90\]   | The Find Matching Care Services transaction is used to query for practitioners, locations, organizations, and healthcare services resources as well as links between these resources. The Find Matching Care Services transaction is initiated by the Care Services Selective Consumer against the Care Services Selective Supplier. |
| Request Care Services Updates \[ITI-91\] | The Request Care Services Updates is used to obtain practitioners, locations, organizations, and healthcare services resources that have been inserted or updated since the specified timestamp. The Request Care Services Updates is initiated by the Care Services Update Consumer against the Care Services Update Supplier.      |
{:.grid .table-striped}


---

File: repos/IHE_SLASH_ITI.mCSD/input/pagecontent/testplan.md

<div markdown="1" class="stu-note">

This Test Plan page is a prototype. We expect the maturity of the content will improve over time. For now, we summarize high level testing scope and available tools. Comments are welcome.
</div>



---

File: repos/IHE_SLASH_ITI.mCSD/input/pagecontent/volume-1.md


The Mobile Care Services Discovery (mCSD) Profile supports discovery of care services resources using a RESTful interface in interrelated, federated environments.

Use cases and solutions using mCSD are outlined in the [mCSD White Paper](https://profiles.ihe.net/ITI/papers/mCSD/index.html).

The profile supports querying for:

1.  **Organization** – Organizations are “umbrella” entities; these may be considered the administrative bodies under whose auspices care services are provided such as Healthcare Information Exchanges(HIEs), Integrated Delivery Networks (IDNs), Non-Government Organizations (NGOs), Faith-Based Organizations (FBOs) or even a one-physician family practice. An organization has a unique identifier and may have additional administrative attributes such as contact person, mailing address, etc. Departments of an institution, or other administrative units, may be represented as child Organizations of a parent Organization.

2.  **Facility** – Facilities are physical care delivery sites such as hospitals, clinics, health outposts, physician offices, labs, pharmacies, etc. A Facility has a unique identifier, geographic attributes (address, geocode), contact attributes, attributes regarding its hours of operation, etc. Each Facility is defined by a pairing of Location and Organization.

3.  **Location** – Locations are physical places where care can be delivered such as facilities, buildings, wards, rooms, or vehicles. Locations also include jurisdictions such as a village districts or regions. A Location has a unique identifier and may have geographic attributes (address, geocode), attributes regarding its hours of operation, etc. Each Location may be related to one Organization. A location may have a hierarchical relationship with other locations.

4.  **Jurisdiction** – Jurisdictions are political administrative units or other territories over which authority is exercised. A Jurisdiction has a unique identifier, geographic attributes, etc. Jurisdictions include political administrative units such as village districts or regions. Each Jurisdiction is defined by a pairing of Location and Organization.

5.  **Practitioner** – A Practitioner is a health worker such as defined by WHO (in Chapter 1 of the [World Health Report 2006](http://whqlibdoc.who.int/publications/2006/9241563176_eng.pdf)); a Practitioner might be a physician, nurse, pharmacist, community health worker, district health manager, etc. Practitioners have contact and demographic attributes. 

6. **PractitionerRole** – A PractitionerRole links a Practitioner with the role they perform.  Each PractitionerRole may be related to one or more Organizations, one or more Locations, and one or more Healthcare Services. Specific attributes may be associated with the PractitionerRole's relationship with these other entities.  

7. **Healthcare Service** – Each healthcare service has a unique identifier. Examples include surgical services, antenatal care services, or primary care services. The combination of a Healthcare Service offered at a Location may have specific attributes including contact person, hours of operation, etc.
    
8. **Endpoint** - An Organization may be reachable for electronic data exchange through electronic Endpoint(s). An Endpoint may be a FHIR server, an IHE web services actor, or some other mechanism. If an Organization does not have an Endpoint, it may still be reachable via an Endpoint at its parent Organization or an affiliated Organization.

9. **OrganizationAffiliation** - An Organization may have relationships with other organizations that are not hierarchical. These relationships may indicate an electronic routing path to other organizations that cannot be reached directly. OrganizationAffiliation can be used to specify relationships such as supply chains or administrative reporting structures.

The capabilities detailed in this profile support consumer-centric queries such as finding “where is the closest youth mental health services clinic” or “what are the hours of a physiotherapist near my workplace”. In addition, mCSD supports crucial health system management workflows. This can include reporting and analyses, such as “what are my health human resource capacities, by facility, by cadre,” “what are all the services offered at this facility,” or conversely, “where are all the facilities that offer this service.” The mCSD Profile may be employed to support, for example, the Provider Queries listed by the US Office of the National Coordinator as part of the [Standards and
Interoperability Framework](https://www.healthit.gov/topic/interoperability/standards-interoperability-si-framework). In addition, mCSD can enable connectivity by providing service endpoint lookup, such as "What is the FHIR server for this organization?".

The loosely coupled design and flexible querying capability of the mCSD Profile means it can be deployed within a variety of eHealth architectures and support a wide array of care workflows.

## 1:46.1 mCSD Actors, Transactions, and Content Modules

This section defines the actors, transactions, and/or content modules in this profile. Further information about actor and transaction definitions can be found in the IHE Technical Frameworks General Introduction [Appendix A: Actors](https://profiles.ihe.net/GeneralIntro/ch-A.html) and [Appendix B: Transactions](https://profiles.ihe.net/GeneralIntro/ch-B.html).

Figure 1:46.1-1 shows the actors directly involved in the mCSD Profile and the relevant transactions between them. If needed for context, other actors that may be indirectly involved due to their participation in other related profiles are shown in dotted lines. Actors which have a mandatory grouping are shown in conjoined boxes.

<div>
{%include ActorsAndTransactions.svg%}
</div>
<div style="clear: left;"></div>
**Figure 1:46.1-1: mCSD Actor Diagram**

Table 1:46.1-1 lists the transactions for each actor directly involved in the mCSD Profile. To claim compliance with this profile, an actor shall support all required transactions (labeled “R”) and may support the optional transactions (labeled “O”).

**Table 1:46.1-1: mCSD Profile - Actors and Transactions**

| Actors                           | Transactions                             | Initiator or Responder | Optionality | Reference       |
| -------------------------------- | ---------------------------------------- | ---------------------- | ----------- | --------------- |
| Care Services Selective Consumer | Find Matching Care Services \[ITI-90\]   | Initiator              | R           | [ITI TF-2: 3.90](ITI-90.html) |
| Care Services Selective Supplier | Find Matching Care Services \[ITI-90\]   | Responder              | R           | [ITI TF-2: 3.90](ITI-90.html) |
| Care Services Update Consumer    | Request Care Services Updates \[ITI-91\] | Initiator              | R           | [ITI TF-2: 3.91](ITI-91.html) |
| Care Services Update Supplier    | Request Care Services Updates \[ITI-91\] | Responder              | R           | [ITI TF-2: 3.91](ITI-91.html) |
{: .grid .table-striped}

### 1:46.1.1 Actor Descriptions and Actor Profile Requirements

Most requirements are documented in ITI TF-2: Transactions. This section documents any additional requirements on mCSD actors.

mCSD supports querying for Organization, Facility, Location, Practitioner, PractitionerRole, Healthcare Service, OrganizationAffiliation, and Endpoint. However, a Care Services Selective Supplier or Care Service Update Supplier is not required to contain data on all of these.

#### 1:46.1.1.1 Care Services Selective Consumer

The Care Services Selective Consumer queries the Care Services Selective Supplier for information about mCSD resources.

No additional requirements.  The following are two example capability statement resources that a Care Services Selective Consumer could support:

- [IHE ITI Mobile Care Services Discovery (mCSD) - Care Services Selective Consumer](CapabilityStatement-IHE.mCSD.CareServicesSelectiveConsumer.html)
- [IHE ITI Mobile Care Services Discovery (mCSD) - Care Services Selective Consumer Location Distance Option](CapabilityStatement-IHE.mCSD.CareServicesSelectiveConsumer.LocationDistance.html)

#### 1:46.1.1.2 Care Services Selective Supplier

The Care Services Selective Supplier processes received queries from Care Services Selective Consumers and returns information about mCSD resources.

The Care Services Selective Supplier shall publish an `instance` CapabilityStatement at the metadata endpoint following [ITI Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) using the [FHIR capabilities interaction](http://hl7.org/fhir/R4/http.html#capabilities). All supported search parameters and search methods (GET, POST) shall be specified. The [search parameters](ITI-90.html#2390412-message-semantics) and [message semantics](ITI-90.html#2390422-message-semantics) defined in \[ITI-90\] shall be supported, other parameters may be supported.

This capabilities response will typically include all of the capabilities inclusive of all grouped actors and additional functionality.  The following are two examples: 

- [IHE ITI Mobile Care Services Discovery (mCSD) - Care Services Selective Supplier](CapabilityStatement-IHE.mCSD.CareServicesSelectiveSupplier.html)
- [IHE ITI Mobile Care Services Discovery (mCSD) - Care Services Selective Supplier Location Distance Option](CapabilityStatement-IHE.mCSD.CareServicesSelectiveSupplier.LocationDistance.html)

#### 1:46.1.1.3 Care Services Update Consumer

The Care Services Update Consumer can query for updates since a previous refresh, to information about mCSD resources from one 
or more Care Services Update Suppliers.

No additional requirements. The following are two example capability statement resources that a Care Services Update Consumer could support:

- [IHE ITI Mobile Care Services Discovery (mCSD) - Care Services Update Consumer](CapabilityStatement-IHE.mCSD.CareServicesUpdateConsumer.html)
- [IHE ITI Mobile Care Services Discovery (mCSD) - Care Services Update Consumer Location Distance Option](CapabilityStatement-IHE.mCSD.CareServicesUpdateConsumer.LocationDistance.html)

#### 1:46.1.1.4 Care Services Update Supplier

The Care Services Update Supplier can provide updates about mCSD resources in response to a refresh request from a Care Services Update Consumer. The updates include new or modified information since a previous refresh.

The Care Services Update Supplier shall publish an `instance` CapabilityStatement at the metadata endpoint following [ITI Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) using the [FHIR capabilities interaction](http://hl7.org/fhir/R4/http.html#capabilities). 
All supported interactions shall be specified. The [search parameters](ITI-91.html#2391412-message-semantics) and [message semantics](ITI-91.html#2391422-message-semantics) defined in \[ITI-91\] shall be supported, other parameters may be supported.

This capabilities response will typically include all of the capabilities inclusive of all grouped actors and additional functionality.  The following are two examples:

- [IHE ITI Mobile Care Services Discovery (mCSD) - Care Services Update Supplier](CapabilityStatement-IHE.mCSD.CareServicesUpdateSupplier.html)
- [IHE ITI Mobile Care Services Discovery (mCSD) - Care Services Update Supplier Location Distance Option](CapabilityStatement-IHE.mCSD.CareServicesUpdateSupplier.LocationDistance.html)

## 1:46.2 mCSD Actor Options

Options that may be selected for each actor in this profile, if any, are listed in Table 1:46.2-1. Dependencies between options when applicable are specified in notes.

**Table 1:46.2-1: mCSD - Actors and Options**

| Actor                            | Option Name              | Reference      |
| -------------------------------- | ------------------------ | -------------- |
| Care Services Selective Consumer | Location Distance Option | [Section 1:46.2.1](#14621-location-distance-option) |
| Care Services Selective Supplier | Location Distance Option | [Section 1:46.2.1](#14621-location-distance-option) |
| Care Services Update Consumer    | No options defined       | \--            |
| Care Services Update Supplier    | No options defined       | \--            |
{: .grid .table-striped}

### 1:46.2.1 Location Distance Option

The Location Distance Option enables querying Location resources based on relative distances.

A Care Services Selective Consumer or Care Services Selective Supplier that supports the Location Distance Option will implement the semantics for the Location Distance Option of the Find Matching Care Services \[ITI-90\] transaction. See [ITI TF-2: 2:3.90.4.1.2.2](ITI-90.html#23904122-organization-resource-message-semantics) and [ITI TF-2: 2:3.90.4.2.2.2](ITI-90.html#23904222-fhir-location-resource-constraints).

## 1:46.3 mCSD Required Actor Groupings

An actor from this profile (Column 1) shall implement all of the required transactions and/or content modules in this profile ***in addition to*** ***<span class="underline">all</span>*** of the requirements for the grouped actor (Column 2).

[Section 1:46.5](#1465-mcsd-security-considerations) describes some optional groupings that may be of interest for security considerations and [Section 1:46.6](#1466-mcsd-cross-profile-considerations) describes some optional groupings in other related profiles.

**Table 1:46.3-1: mCSD - Required Actor Groupings**

| mCSD Actor                       | Actor to be grouped with | Reference | Content Bindings Reference |
| -------------------------------- | ------------------------ | --------- | -------------------------- |
| Care Services Selective Consumer | None                     | \--       | \--                        |
| Care Services Selective Supplier | None                     | \--       | \--                        |
| Care Services Update Consumer    | None                     | \--       | \--                        |
| Care Services Update Supplier    | None                     | \--       | \--                        |
{: .grid .table-striped}

## 1:46.4 mCSD Overview

### 1:46.4.1 Concepts

The Mobile Care Services Discovery (mCSD) Profile supports queries for resources related to care services discovery. The relationship between these entities is illustrated in Figure 1:46.4.1-1.

![Top-level Relationships between Care Services Entities](mCSDRelationships.png)
<div style="clear: left;"></div>

**Figure 1:46.4.1-1: Top-level Relationships between Care Services Entities**

#### 1:46.4.1.1 Create, Update, and Delete Services

This profile enables tracking of changes to, searching for, and retrieval of, a set of resources. The creation, update, deletion and other maintenance activities of those resources is out of the scope of this profile.

### 1:46.4.2 Use Cases

#### 1:46.4.2.1 Use Case \#1: Practitioner Query

##### 1:46.4.2.1.1 Practitioner Query Use Case Description

The patient, Vera Brooks, consults with her physician who recommends surgery. The physician can assist the patient in finding a suitable surgeon, taking into consideration the location and specialty of the surgeon.

##### 1:46.4.2.1.2 Practitioner Query Process Flow

- Vera Brooks sees her family physician, Dr. West, regarding a recent knee injury.

- Dr. West diagnoses the problem as a torn ACL and decides to refer Vera to an orthopedic surgeon.

- Dr. West uses her EMR query tool, which implements a Care Services Selective Consumer to search for orthopedic surgeons within 30km of Vera’s home.

- The EMR retrieves the information from a Healthcare Worker Registry (HWR) and displays it to Dr. West.

- Vera and Dr. West decide on an orthopedic surgeon; Dr. West prepares a referral.

The interactions between the various actors in this use case are shown in Figure 1:46.4.2.1.2-1.

<div>
{%include usecase1-processflow.svg%}
</div>
<div style="clear: left;"/>

**Figure 1:46.4.2.1.2-1: Provider Query Use Case**

#### 1:46.4.2.2 Use Case \#2: Provider Lookup During an Emergency Event

##### 1:46.4.2.2.1 Provider Lookup During an Emergency Event Use Case Description

During an emergency event, medical volunteers may report to assist. At an emergency site, the mCSD service can be queried to quickly identify and grant permission to credentialed providers to enter the scene.

During Hurricane Katrina, health care volunteers were turned away from disaster sites because there was no means available to verify their credentials. During the Ebola outbreak in West Africa, it was unclear which health workers were available and had been trained in clinical care techniques.

Resources from jurisdictional areas can be reported up to a central location so there is a single point of access. This would make it easier for responders on location to verify the credentials of a reporting health worker.

##### 1:46.4.2.2.2 Provider Lookup During an Emergency Event Process Flow

  - A jurisdictional (state/district) Care Services Update Supplier will provide data to a central Care Services Update Consumer (National HIE).

  - The National HIE will be a Care Services Update Consumer grouped with a Care Services Selective Supplier.

  - An emergency responder (e.g., police on site controlling access) can use a Care Services Selective Consumer to validate the credentials of a reporting health worker from the central Care Services Update Supplier.

  - Based on the result, the emergency responder can allow or deny access to the reporting health worker.

The interactions between the various actors in this use case are shown in Figure 1:46.4.2.2.2-1.

<div>
{%include usecase2-processflow.svg%}
</div>
<div style="clear: left;"/>

**Figure 1:46.4.2.2.2-1: Federated Data Site Management Workflow**

#### 1:46.4.2.3 Use Case \#3: Cross-jurisdictional Site Management 

##### 1:46.4.2.3.1 Cross-jurisdictional Site Management Description

Projects like the U.S. President's Emergency Plan for AIDS Relief (PEPFAR)’s Data for Accountability, Transparency, and Impact (DATIM) need to have public health and service delivery indicators reported from a large number of sites (health facilities, communities, warehouses) within an Operating Unit (country/region). Within an Operating Unit, there are multiple, possibly overlapping, jurisdictions in operation which are managed by multiple organizations (e.g., ministries of health (MoH), faith-based organizations, international non-governmental organizations). The project needs to receive indicator submissions from pre-existing data systems hosted by these organizations. This data exchange requires a way to share site lists and implement identifier mapping between the sites in these lists. 


<div>
{%include usecase3-diagram.svg%}
</div>
<div style="clear: left;"/>

**Figure 1:46.4.2.3.1-1: Cross-Jurisdictional Data Exchange**

##### 1:46.4.2.3.2 Cross-jurisdictional Site Management Process Flow

An Operating Unit (OU) will run a Care Services Update Consumer and Care Services Update Supplier for a specific geographic area (e.g., country). This Update Consumer will query other organizations (ministries of health, partners) operating in the geographic area to get updated site data for the sites managed by the OU.

  - An OU Update Consumer will query a sub-unit Care Services Update Suppliers (e.g., MoH) to get an updated list of sites under the sub-unit.

  - An OU Update Consumer will query a subunit Care Services Update Suppliers (e.g., partner) to get an updated list of sites under the subunit.

  - The OU Update Consumer will use entity matching to determine if there are duplicated sites in the combined data and flag them for review. (See
    [https://wiki.ohie.org/display/documents/OpenHIE+Entity+Matching+Service](https://wiki.ohie.org/display/documents/OpenHIE+Entity+Matching+Service).)

The interactions between the various actors in this use case are shown
in Figure 1:46.4.2.3.2-1.

<div>
{%include usecase3-processflow.svg%}
</div>
<div style="clear: left;"/>

**Figure 1:46.4.2.3.2-1: Cross-jurisdictional Site Management Workflow**

#### 1:46.4.2.4 Use Case \#4: Master Facility List 

##### 1:46.4.2.4.1 Master Facility List Description

A developing country has decided to implement a Master Facility List (MFL) based on recommendations from the WHO in the [MFL Resource Package](https://www.who.int/publications/i/item/9789241516495). This resource includes a minimum data set to uniquely identify, locate, and contact a specific facility. Since this will be a single source of information for the country, there may be differing hierarchies that need to be supported for the facilities. For example, one hierarchy would be the administrative hierarchy for the country (region, district, county). Another would be the supply chain hierarchy where hubs may be located separately from administrative regions. Yet another could be a reporting hierarchy used to send data to international organizations.

##### 1:46.4.2.4.2 Master Facility List Process Flow

A Master Facility List (MFL) will run a Care Services Update Supplier and Care Services Selective Supplier for an entire country. A Human Resources Information System (HRIS) will run a Care Services Update Consumer to retrieve the list of facilities. A Logistics Management Information System (LMIS) will run a Care Services Update Consumer to retrieve the list of facilities.

- An HRIS will query the MFL for an updated list of facilities where Practitioners can provide care.

- An LMIS will query the MFL for an updated list of facilities for the supply chain to deliver health care supplies.

- The MFL will return updated facilities to each of these systems with multiple hierarchies.

The interactions between the various actors in this use case are shown in Figure 1:46.4.2.4.1-1.

<div>
{%include usecase4-processflow.svg%}
</div>
<div style="clear: left;"/>

**Figure 1:46.4.2.4.2-1: Master Facility List Workflow**

#### 1:46.4.2.5 Use Case \#5: Health Information Exchange (HIE) Membership Discovery

##### 1:46.4.2.5.1 Health Information Exchange (HIE) Membership Discovery Description

In this use case, a healthcare worker needs to identify the organizations active in the State/Province Health Information Exchange (HIE) that have been added since 2017, to make contact with new organizations and negotiate future clinical exchange.

Membership in an HIE is a more dynamic and transitory business relationship than the "parent-child" hierarchy represented by Organization.partOf. For these more flexible business relationships, the [OrganizationAffiliation](http://hl7.org/fhir/R4/organizationaffiliation.html) resource allows for organizations to relate to each other in non-hierarchical and more dynamic business relationships. Unlike partOf, the relationship is itself a resource, so it can be categorized with codes, status, etc. 

In the example below:
- Organization B has a parent Organization A.
- Organization B has been a part of its State/Province HIE since 2018 and is a member in good standing.

The `organization` defines a role for the relationship, e.g., "HIE/HIO" or "member", and the `participatingOrganization` fills the role.

<div>
{%include usecase5-diagram.svg%}
</div>
<div style="clear: left;"/>

**Figure 1:46.4.2.5.1-1: Organization.partOf vs. Affiliation**

##### 1:46.4.2.5.2 Health Information Exchange (HIE) Membership Discovery Process Flow

- A healthcare worker searches for organizations active in the State/Province HIE that have been added since 2017.
- The EMR searches for OrganizationAffiliations where the `organization` is the HIE, `active` is true, and `period.start` is 2017 or later.
- The EMR searches for details on the participating Organizations.
- The EMR presents the results to the healthcare worker.

The interactions between the various actors in this use case are shown in Figure 1:46.4.2.5.2-1.

<div>
{%include usecase5-processflow.svg%}
</div>
<div style="clear: left;"/>

**Figure 1:46.4.2.5.2-1: Health Information Exchange (HIE) Membership Discovery Workflow**

#### 1:46.4.2.6 Use Case \#6: Health Information Exchange (HIE) Endpoint Discovery 

##### 1:46.4.2.6.1 Health Information Exchange (HIE) Endpoint Discovery Description

Users in Health IT systems often need to be able to obtain clinical information electronically from outside systems, for example, in preparation for an encounter. This use case describes how a user in a system identifies the organizations a patient has received care from, as well as criteria for the kinds of clinical documents of interest, and then how their EMR queries the directory for a Health Information Exchange (HIE) to search for each organization and a compatible services endpoint the EMR can use.

An HIE publishes a directory that contains all of its member organizations and their electronic endpoints.

Note: Guidance for usage of endpoints in directories is provided [here](#1468-mcsd-endpoint-usage-considerations).

- Endpoints are not limited to RESTful FHIR servers; they may point to systems that implement other mechanisms. This IG provides two profiles:
  [a general endpoint](StructureDefinition-IHE.mCSD.Endpoint.html), and
  [an endpoint to an IHE Document Sharing actor](StructureDefinition-IHE.mCSD.Endpoint.DocShare.html).
- Organizations might support one or many communication channels, each of which might have one or more distinct endpoints. For example, a FHIR communication channel might require only a single endpoint (i.e., a single [Service Base URL](https://www.hl7.org/fhir/http.html#general)), while an IHE XCA communication channel might require separate endpoints for each transaction.

The diagram below shows an excerpt of the HIE directory, showing one participant in the HIE that implements IHE XCA with two Endpoints, and another that only uses one.

<div>
{%include usecase6-diagram.svg%}
</div>
<div style="clear: left;"/>

**Figure 1:46.4.2.6.1-1: Health Information Exchange**

##### 1:46.4.2.6.2 Health Information Exchange (HIE) Endpoint Discovery Process Flow

- In preparation for a patient visit, a healthcare worker knows and identifies the organizations that have provided care for this patient, and identifies document types of interest.
- The EMR will query the HIE directory for the relevant organizations and their endpoints.
- For each organization obtained, the EMR will check for endpoints that support the needed XCA transactions, and make requests against these endpoints to obtain clinical documents.
- The EMR presents the obtained documents to the healthcare worker, who reviews them.

The interactions between the various actors in this use case are shown in Figure 1:46.4.2.6.2-1.

<div>
{%include usecase6-processflow.svg%}
</div>
<div style="clear: left;"/>

**Figure 1:46.4.2.6.2-1: Health Information Exchange (HIE) Endpoint Discovery Workflow**

## 1:46.5 mCSD Security Considerations

Actors are expected to follow the recommendations and requirements found in [ITI TF-2: Appendix Z.8 “Mobile Security Considerations”](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations). 

The resources exchanged in this profile may contain information which pose a privacy risk, or in some cases, a safety risk, to providers and other personnel, as well as patients. For example, practitioner phone numbers and home addresses may be conveyed. Implementers should determine what data will be exposed by the system and what level of public access there will be if any.

The Endpoint Resources exchanged in this profile will expose information about the particular APIs and web services running on the underlying host systems. This might attract malicious activity or provide hints to potential attackers on how to attack a particular host system. Implementers should consider this when determining the access policies for these Resources. System administrators for the underlying host systems must follow industry best practices for authentication, authorization, auditing, timely application of software patches, etc. 

There are many reasonable methods of security for interoperability transactions which can be implemented without modifying the characteristics of the transactions in the mCSD Profile. The use of TLS is encouraged, specifically the use of the ATNA Profile (see [ITI TF-1: 9](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html)).

User authentication on mobile devices and browsers is typically handled by more lightweight authentication schemes such as HTTP Authentication, OAuth 2.0, or OpenID Connect. IHE has a set of profiles for user authentication including Internet User Authentication (IUA) for REST-based authentication. The network communication security and user authentication are layered in the HTTP transport layer.

## 1:46.6 mCSD Cross Profile Considerations

### 1:46.6.1 Aggregate Data Exchange – ADX

The IHE QRPH Aggregate Data Exchange (ADX) Profile enables reporting of public health and service delivery indicators in various locations. A reporting system may play the role of a Care Services Update Consumer to ensure that it has an updated list of the resources for the reporting locations.

Additionally, a service that contains information on practitioners (and may be a Care Services Selective Supplier or Care Services Update Supplier) can also be used to generate an ADX message to satisfy the use case of a district health manager running an aggregate report on staffing levels by facility and health worker type from the ITI Care Services Discovery (CSD) Profile.

### 1:46.6.2 Care Services Discovery – CSD

A Care Services Directory in the CSD Profile can be grouped with the Care Services Update Supplier from mCSD. The CSD Care Services InfoManager could implement the mCSD Care Services Update Consumer and the Care Services Selective Supplier Actors. The CSD Service Finder could implement the mCSD Care Services Selective Consumer. This enables the CSD actors to allow RESTful transactions without having to change the underlying data store.

### 1:46.6.3 Health Provider Directory – HPD

A Provider Information Source in HPD can also implement the Care Services Update Supplier from mCSD. Note that in this case the Provider Information Source would be queried for updates instead of pushing the updates to the Consumer. The HPD Provider Information Directory could implement the mCSD Care Services Update Consumer and the Care Services Selective Supplier Actors. The HPD Provider Information Consumer could implement the mCSD Care Services Selective Consumer. This enables the HPD actors to allow RESTful transactions without having to change the underlying data store.

### 1:46.6.4 Mobile Alert Communication Management – mACM

The mACM Profile defines the means to send an alert to practitioners. The mCSD Profile provides a way to query that list of practitioners. A mACM Alert Reporter can be grouped with a Care Services Update Consumer or a Care Services Selective Consumer to ensure that it has an updated list of practitioners.

## 1:46.7 mCSD Deployment Considerations

### 1:46.7.1 Simple Deployment

A deployment may only have a single server that will maintain data. In this case, you would only need the Care Services Selective Supplier (or Care Services Update Supplier) to send search results back to one or more Care Services Selective Consumers (or Care Services Update Consumer). See Figure 1:46.7.1-1 below.

<div>
{%include simple-deployment.svg%}
</div>
<div style="clear: left;"/>

**Figure 1:46.7.1-1: Simple Deployment**

### 1:46.7.2 Federated and Cross-Jurisdictional Deployments

A Federated Deployment has multiple levels of the Care Services Update Suppliers linked to Care Services Update Consumers. These Update Consumers may also support being Care Services Update Suppliers so that higher level Update Consumers can receive their updates. They may also support being a Care Services Selective Supplier so that Selective Consumer clients can query that level of information. See Figure 1:46.7.2-1 below.

Interrelated content is maintained by the Care Services Update Consumer. The Care Services Update Consumer routinely obtains new or updated content from Care Services Update Suppliers by polling them. These updates may refresh a data cache which the Update Consumer maintains. The Update Consumer’s cache is refreshed at an appropriate interval specified by the implementing jurisdiction. The implementing jurisdiction will consider the implications of out of date information when setting the refresh interval between cache updates. The normal delays in updating listings will also be part of this consideration.

The various data sources would maintain definitive data regarding one or more Care Services Resources and implement the Care Services Update Supplier. These Care Services Update Suppliers would respond to a Care Services Update Consumer’s request for new or updated content since a specified date and time. To support this capability, a Care Services Update Supplier should support time stamped updates. Data elements that are deprecated should not simply be deleted, but rather are updated to an appropriate status indicating their deprecation.

This deployment may also have cross-jurisdictional considerations if any of the Update Suppliers have overlap in the data they manage. In this instance, the Care Services Update Consumer would need to resolve any conflicts before sharing this information as either a Care Services Update Supplier or a Care Services Selective Supplier. The way in which these conflicts are resolved is defined by the implementing jurisdiction of the Care Services Update Consumer.

![Federated and Cross Jurisdictional Deployment](FederatedDeployment.png)
<div style="clear: left;"/>

**Figure 1:46.7.2-1: Federated and Cross Jurisdictional Deployment**

The Care Services Selective Consumer is the actor that queries for information about interrelated care services. These queries are sent to the Care Services Selective Supplier who develops a response based on the content in its local data store. When a Care Services Selective Supplier is combined with a Care Services Update Consumer (Global and Country servers from Figure 1:46.7.2-1), it should maintain a cache of the aggregated information from all the configured Care Services Update Suppliers it is linked to.

In order for the Care Services Update Consumer’s (Global and Country servers) cached content to be able to serve its role as an interlinked data source, the following conditions should be met by Care Services Update Suppliers who maintain content.

1. Implementing jurisdictions may mandate terminologies for Organization Type, Service Type, Location Type, Location Status, Practitioner Type, Practitioner Status, Contact Point Type, Credential Type, Specialization Code, and language code. Care Services Update Suppliers would be configurable to use these terminologies, where mandated. In the case of a cross jurisdictional deployment, mapping between the terminology used by the various jurisdictions may need to be maintained.

2. Implementing jurisdictions may mandate conventions regarding the types, components and formatting of Name, Address and Address Line elements. Care Services Update Suppliers would be configurable to use these formatting conventions, where mandated.

3. Implementing jurisdictions may mandate the source of truth regarding Organization ID, Healthcare Service ID, Location ID and Practitioner ID. Care Services Update Suppliers would ensure that all cross-referenced IDs match corresponding resources in the jurisdictionally mandated sources of truth.

For guidance on handling challenges regarding the representation of names across multiple languages and in different cultures, refer to the [ITI TF-2: 3.24.5.2.3.1](https://profiles.ihe.net/ITI/TF/Volume2/ITI-24.html#3.24.5.2.3.1). This section in the ITI Technical Framework describes the use of the language tag as documented in IETF RFC1766 and the HL7 XCN name data type.

#### 1:46.7.2.1 Terminology Services

All referenced terminologies from a Care Services Selective Supplier or Care Services Update Supplier may be pre-coordinated or they may be resolvable from one or more terminology services. Though it is out of scope of the mCSD Profile to define the means of interacting with a terminology service, this could be provided, for example, through the
[Sharing Valuesets, Codes, and Maps (SVCM) Profile](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_SVCM.pdf).

## 1:46.8 mCSD Endpoint Usage Considerations

This section provides guidance for populating and using Endpoint resources in an mCSD directory to enable electronic communication, for example defining local points of connectivity within a community, or defining a Health Information Exchange (HIE) that allows multiple communities to interoperate.

Many current Endpoint directories based on FHIR are purpose-built, which is to say they are deployed to a server that only hosts Organization and Endpoint resources, and only for the use case of Endpoint lookup. For this reason, directories often reflect network details directly in the Organization resource, such as:
- The organization's role in the network, like participant or sub-participant, expressed as the type of organization.
- The organization's relationship to its connectivity vendor, expressed as the organization hierarchy (i.e., partOf).
- The organization's connectivity state as an extension.
- Supported profiles, purposes of use, etc. as extensions.
- The organization's identity as a home community ID, for use in IHE Document Sharing profiles.

When the organization's structure and its network capabilities need to vary independently (e.g., an organization uses two connectivity vendors), directories typically handle this by creating parallel instances of the Organization resource that then have to be merged by custom code to display.

We anticipate these conflicts increasing over time due to many forces:
- Implementers taking advantage of profiles like mCSD to represent more comprehensive organizational and personnel structures.
- Implementers scaling by delegating maintenance of organization sub-trees to the organizations themselves.
- Directories consolidating/federating over time into more comprehensive "phonebooks", where a given organization participates in multiple HIEs. One example would be the USA ONC TEFCA Recognized Coordinating Entity, which will be maintaining a directory that consists of entries supplied by each Qualified Health Information Network (QHIN).

In this guidance, we allow organization structure and network details to vary independently by moving network details out of the Organization and into the Endpoint and OrganizationAffiliation resources.

##### 1:46.8.1 Endpoint to an Organization

The simplest usage model for a client is when the organization it needs to contact has a dedicated Endpoint resource in Organization.endpoint. Because this Endpoint is Organization-specific, it does not matter to the client who hosts it. Some examples follow.

Note: The managingOrganization of an Endpoint is who users need to contact for support. It may or may not be the same as the organization that hosts it. Since hosting is not reflected in the directory, we are indicating it in the diagrams below by the URLs.

Organization A hosts its own Endpoint:
<div>
{%include dir-org-specific-endpoint-self.svg%}
</div>
<div style="clear: left;"/>
**Figure 1:46.8.1-1: Organization-specific Endpoint Hosted by the Organization**

Organization A is directly reachable by an endpoint hosted by its parent Organization B:
<div>
{%include dir-org-specific-endpoint-parent.svg%}
</div>
<div style="clear: left;"/>
**Figure 1:46.8.1-2: Organization-specific Endpoint Hosted by Parent**

Organization C is directly reachable by an endpoint hosted by its affiliated Organization D:
<div>
{%include dir-org-specific-endpoint-affil.svg%}
</div>
<div style="clear: left;"/>
**Figure 1:46.8.1-3: Organization-specific Endpoint Hosted by Affiliation**

Organization E is directly reachable by an endpoint hosted by a hidden (i.e., not in the directory) Intermediary F:
<div>
{%include dir-org-specific-endpoint-inter.svg%}
</div>
<div style="clear: left;"/>
**Figure 1:46.8.1-4: Organization-specific Endpoint Hosted by Hidden Intermediary**

##### 1:46.8.2 Endpoint to a Structure

When an Organization with an Endpoint has a complex structure, for example, sub-organizations, clients can often make use of this structure:

<div>
{%include dir-endpoint-to-org-hierarchy.svg%}
</div>
<div style="clear: left;"/>

**Figure 1:46.8.2-1: Endpoint to Organizational Hierarchy**

Typical directories will take an organizational hierarchy to imply accessibility to parts of the structure, for example:
- For FHIR REST endpoints, the URL is simply the Service Base URL as specified in [FHIR R4 3.1.0.1.2](http://hl7.org/fhir/R4/http.html#general). Clients can expect to find resources related to Organizations A, B and C.
- For XCA endpoints, a client querying Organization A for documents (e.g., using \[ITI-38\]) may receive documents from Organizations A, B and C. If these organizations have identifiers of type Home Community ID in the directory, clients can expect to see these identifiers in the returned document metadata.
- For XDR endpoints, a client sending a Provide and Register Document Set-b (\[ITI-41\]) request to Organization A can optionally specify Organizations B and/or C in intendedRecipient.
- For MHD endpoints, a client sending a Provide Document Bundle (\[ITI-65\]) request to Organization A can optionally specify Organizations B and/or C in intendedRecipient.

Specific details of addressing to federated recipients are out of the scope of this IG.

Examples of this kind of federated structure are shown in [ITI TF-1: Appendix E.9](https://profiles.ihe.net/ITI/TF/Volume1/ch-E.html#E.9.3), for XCA Responding Gateways.

By contrast, OrganizationAffiliations by themselves do not necessarily imply this kind of electronic accessibility. For this reason, this IG defines the code "DocShare-federate", which explicitly declares that the participatingOrganization is accessible as a federated organization via the OrganizationAffiliation.endpoint.

The following diagram shows the same accessibility, but using OrganizationAffiliation.

<div>
{%include dir-endpoint-to-org-affiliates.svg%}
</div>
<div style="clear: left;"/>

**Figure 1:46.8.2-2: Endpoint to Organizational Affiliates**

In addition, these mechanisms may be combined. This may be useful, for example, when adding an existing organizational structure to an HIE.

<div>
{%include dir-endpoint-to-hybrid-org-structure.svg%}
</div>
<div style="clear: left;"/>

**Figure 1:46.8.2-3: Endpoint to Hybrid Organizational Structure**

##### 1:46.8.3 Grouping Actors

Grouped actors may be represented as well, although not explicitly. In the following example, Participant A is reachable by either an MHD endpoint or XDR endpoints. The directory
does not reflect which endpoint is the adapter or the adaptee.

<div>
{%include dir-endpoint-xdr-mhd.svg%}
</div>
<div style="clear: left;"/>

**Figure 1:46.8.3-1: Endpoints to Grouped Actors**

##### 1:46.8.4 Endpoint Discovery Usage

The following example shows the steps used by a Care Services Selective Consumer to navigate a directory to find suitable electronic service Endpoints to some desired Organizations. In this example, a "suitable" Endpoint means it supports an IHE Document Sharing profile, and is based on .connectionType, .extension:specificType, .payloadType, .payloadMimeType, and status (both Endpoint.status as well as the actual status of the electronic service). The example uses the [mCSD-profiled OrganizationAffiliation] StructureDefinition-IHE.mCSD.OrganizationAffiliation.DocShare.html) that indicates federated connectivity for Document Sharing (e.g., affiliated organizations may be addressed as intendedRecipient). The pseudocode below uses a depth-first, first-match search, and does not protect against loops.

Until a suitable Endpoint is found or the search is complete, check the following in this order:
- Locate the desired Organization resource.
- Check if it has a suitable Organization.endpoint.
- Find OrganizationAffiliation resources where the Organization is the .participatingOrganization, and OrganizationAffiliation.code = DocShare-federate.
- For each OrganizationAffiliation found:
  - Check if it has a suitable OrganizationAffiliation.endpoint.
  - Check if it has a suitable OrganizationAffiliation.organization.endpoint.
  - Continue searching for a suitable Endpoint by traversing the OrganizationAffiliation resources recursively (i.e., where the OrganizationAffiliation.organization of the current resource is the .participatingOrganization of the next resource).
- If there is an Organization.partOf (i.e., a parent), check if it has a suitable Organization.endpoint.
  - Continue searching for a suitable Endpoint by traversing Organization.partOf recursively.

Rather than a first-match search, the Care Services Selective Consumer might search for and decide among multiple electronic paths to the same Organization. For example:
- It finds a suitable Endpoint resource for the target Organization, but instead uses an Endpoint for an Organization two levels higher to make a broader search for records.
- It finds suitable Endpoint resources for equivalent mechanisms, XDR \[ITI-41\] and MHD \[ITI-65\], and chooses MHD as the preferred transaction.
- It finds suitable Endpoint resources to the same Organization via two different HIEs, and prefers one HIE based on lower fees and authorization differences.


---

