// File: input/pagecontent/devices.md

This page provides the detailed specifications for catalogs of medical devices

### Resources and Profiles for catalogs of devices

The figure below shows the resources and profiles used to represent catalogs of medical devices.

{% include img.html img="DeviceCatalog.png" caption="Figure 9.1: Artifacts used in catalogs of devices" width="70%" %}

When method 1 is chosen by the custodian of the catalog of devices, the catalog references its items: the [Composition](http://hl7.org/fhir/composition.html) resource constrained by the [Catalog](StructureDefinition-Catalog.html) profile to represent the whole catalog, references the items of this catalog from its `Composition.section.entry` elements.

When method 2 is chosen instead, the catalog is referenced by its items: Each [DeviceDefinition](http://hl7.org/fhir/devicedefinition.html) resource constrained by the [DeviceModel](StructureDefinition-DeviceModel.html) profile 	and representing an item of the catalog, references the [Composition](http://hl7.org/fhir/composition.html) resource constrained by the [CatalogHeader](StructureDefinition-CatalogHeader.html) profile to represent the catalog header, which holds the catalog general properties.

An item of the catalog describes a model or type of device, with its various identifiers, classifications, safety characteristics and properties, instantiated as a [DeviceDefinition](http://hl7.org/fhir/devicedefinition.html) resource linked to a number of supporting resources providing further details about this item.

### Searching and retrieving devices from the catalog

#### Searching Approaches

The key searcheable assets in a catalog of devices are the model of devices exposed to the consumers as instances of [DeviceDefinition](http://hl7.org/fhir/devicedefintion.html). 

- **Two-step search**: A client application browsing the content of the catalog may wish to first get the overview of a collection of devices at first glance, and then retrieve the full details associated with the ones of interest. In this case, the first query will perform a simple search on [DeviceDefinition](http://hl7.org/fhir/devicedefintion.html) with the desirable criteria listed in the table below ; and then a second narrower search will add the `_include:iterate=*` parameter, to retrieve the selected [DeviceDefinition](http://hl7.org/fhir/devicedefintion.html) resource(s) with their supporting resources ([ClinicalUseDefinition](http://hl7.org/fhir/clinicalusedefintion.html), [ChargeItemDefinition](http://hl7.org/fhir/chargeitemdefintion.html)) in the *searchset Bundle*.
- **One-step search**: Conversely a client application may wish to retrieve the full details of a device (or a small collection of devices) at first glance. In this case, it uses the appropriate search criteria for [DeviceDefinition](http://hl7.org/fhir/devicedefintion.html), in combination with the `_include:iterate=*` parameter so as to obtain all the supporting resources of each device retrieved, in the *searchset Bundle*.

Catalog servers may limit the iteration depth to an appropriate level for performance sake.

#### Search Parameters for models of devices (DeviceDefinition)

{:class="table table-bordered"}
| Name | Type | Description | Expression | Comment |
| --- | --- | --- | --- | --- |
| _lastUpdated | date | Last system point in time of the DeviceDefinition instance |  | can be used with =gt... |
| class | token | specific class of models of devices | DeviceDefinition.classification.type | For instance device class in GMDN or EMDN |
| udi | token | The primary UDI of the device model | DeviceDefinition.udiDeviceIdentifier.deviceIdentifier |  | 
| packaging-udi | token | The primary UDI of the package containing the device | DeviceDefinition.packaging.udiDeviceIdentifier.deviceIdentifier |  |
| identifier | token | A business identifier (other than primary UDI) of the device | DeviceDefinition.identifier |  |
| model-number | string | The model number of the device | DeviceDefinition.modelNumber |  |
| name | string | a name of the model of device | DeviceDefinition.deviceName.name | A device may have more than one name. |
| catalog | reference | The reference to a Composition resource (profiled by CatalogHeader) owning this item | DeviceDefinition.extension.where(url='http://hl7.org/fhir/uv/order-catalog/StructureDefinition/CatalogReference').valueReference.reference(Composition) | catalog to search from |
 
#### Examples of searching and retrieving devices from catalogs

In all examples below, `base` represents the endpoint of the catalog server. The answer of the server comes as a `Bundle` of type 'searchset' encapsulating the resources selected by the search. One particular device catalog is assumed to have Composition.id "a1" on the server.

##### List all catalogs of the server

`GET base/Composition?type:text=Catalog&amp;_summary=true`

Obtains the summary of every catalog available on the server. The anwser Bundle contains one entry with a Composition resource for each catalog found.

##### List all device catalogs

`GET base/Composition?type:text=Catalog&amp;category=device&amp;_summary=true`

Obtains the summary of each catalog of devices available on the server. The anwser Bundle contains one entry with a Composition resource for each device catalog found.

##### Retrieve all details for a device model

`GET [base]/DeviceDefinition?modelNumber=SCF332&amp;_include:iterate=*`

Obtains the full content of instances of `DeviceDefinition` with modelNumber = "SCF332" accompanied by their supporting resources. The anwser Bundle contains the full details for each: An entry for each matching `DeviceDefinition` and, below it, as many entries as resources referenced by this one (recursively). 

### Mapping of jurisdictional device databases to FHIR Resources

{:class="table table-bordered"}
| GUDID | EUDAMED | DeviceDefinition | Device | 
| --- | --- | --- | --- | 
| Brand Name | FLD-UDID-22: Device Name (under Basic UDI) | deviceName (type = registered-name) | deviceName (type = registered-name) |
| n.a. | FLD-UDID-176: Name/Trade name(s) | deviceName (type = user-friendly-name) | deviceName (type = user-friendly-name) | 
| Version or Model | FLD-UDID-20: Device model (under Basic UDI) | modelNumber | modelNumber | 
| Catalog Number | FLD-UDID-163: Reference-catalogue number | partNumber | partNumber | 
| Primary DI Number | FLD-UDID-178: UDI-DI code | udiDeviceIdentifier.deviceIdentifier | udiCarrier.deviceIdentifier |
| Issuing Agency (for Primary DI Number) | FLD-UDID-291: Issuing Entity UDI-DI | udiDeviceIdentifier.issuer | udiCarrier.issuer | 
| Device description | FLD-UDID-175: Additional Product description | description | n.a. | 
| Company Name | FLD-UDID-353: Actor/Organisation name | manufacturer.display or manufacturer.reference->Organization.name | manufacturer |
| Secondary DI Number | FLD-UDID-136: Secondary UDI-DI code | identifier.value (use = secondary, type = UDI) | identifier.value  (use = secondary, type = UDI) | 
| Issuing Agency (for Secondary DI Number) | FLD-UDID-293: Issuing Entity Secondary DI | identifier.assigner (use = secondary, type = UDI) | identifier.assigner (use = secondary, type = UDI) | 
| DM DI Number | FLD-UDID-138: Direct Marking UDI-DI code | identifier.value (use = official, type = DIRECT-MARKING) | identifier.value (use = official, type = DIRECT-MARKING) |
| n.a. | FLD-UDID-294: Issuing Entity Direct marking DI | identifier.assigner (use = official, type = DIRECT-MARKING) | identifier.assigner (use = official, type = DIRECT-MARKING) | 
| Unit of Use DI Number | FLD-UDID-135: Unit of Use DI code | identifier (use = official, type = SINGLE-ITEM) | identifier (use = official, type = SINGLE-ITEM) | 
| n.a. | FLD-UDID-14: Basic UDI-DI | regulatoryIdentifier (type = basic) | n.a. |
| PACKAGE DI Number | FLD-UDID-120: Package UDI-DI | packaging[.packaging]*.udiDeviceIdentifier.deviceIdentifier | n.a. | 
| Commercial Distribution Status | FLD-UDID-130: Device status (on EU market, no longer on EU market, not intended for EU market) | inferred from marketDistribution.marketPeriod | n.a. | 
| n.a. | FLD-UDID-250: Start date (per EU member country where device is commercialized) | marketDistribution.marketPeriod.start | n.a. |
| Commercial Distribution End Date | FLD-UDID-251: End date (per EU member country where device is commercialized) | marketDistribution.marketPeriod.end | n.a. | 
| n.a. | FLD-UDID-252: Member State were the device is or is to be made available | marketDistribution.subJurisdiction | n.a. | 
| Device Count (Number of MDs contained in the base package) | FLD-UDID-121: Quantity of item(s)(for any package level, including the base package) | packaging.count | n.a. |
| Labeler D-U-N-S Number | FLD-UDID-10: Legal manufacturer SRN | manufacturerReference->Organization.identifier (type = PRN, system = appropriate namespace for D-U-N-S in the US or SRN in EU) | n.a. | 
| n.a. | FLD-UDID-16: Risk Class | classification.type (system representing Risk Class code system) | n.a. | 
| Device GMDN classification | n.a. | classification.type (system = http://terminology.hl7.org/CodeSystem/GMDN) | n.a. |
| n.a. | Device EMDN classification | classification.type (system = urn:oid:1.2.250.1.213.2.68) | n.a. |
| Previous DI (same version or model of device) | ? | ? | n.a. |
| MRI safety information: safe, unsafe, conditional, not stated (ASTM F2503) | FLD-UDID-144: List of critical warnings (FLD-UDID-212: Critical warnings type) : safe, unsafe, conditional, consider hazards for magnetic fields, do not store near magnets or magnetic devices | safety: ValueSet device-safety (ASTM F2503 with C-codes from NCIthesaurus) | safety: ValueSet device-safety (ASTM F2503 with C-codes from NCIthesaurus) |
| Device required to be labeled as containing latex (Y/N) | ? | ? | n.a. |
| Device labeled as containing latex | FLD-UDID-156: Containing latex (Boolean) | safety: ValueSet device-safety (ASTM F2503 with C-codes from NCIthesaurus) | safety: ValueSet device-safety (ASTM F2503 with C-codes from NCIthesaurus) |
| For Single Use | ? | property | n.a. |
| Prescription Use | ? | property | n.a. |
| Over the Counter | ? | property | n.a. |
| Human Cell, Tissue or Cellular or Tissue-Based Product | ? | property | n.a. |
| n.a. | FLD-UDID-28: Active Device | property | n.a. |
| n.a. | FLD-UDID-30: Implantable | property | n.a. |

### Resources and Profiles for catalogs of IVD testing devices

See the [LIVD Implementation Guide](https://build.fhir.org/ig/HL7/livd/).  



---

// File: input/fsh/Aliases.fsh

//========================================================
//       Aliases for the order catalog IG FSH project
//========================================================

//============== Code Systems ====================================================================================================================================
Alias: $ATC = http://www.whocc.no/atc											// ATC classification (WHO)
Alias: $EDQM = http://standardterms.edqm.eu										// Standard terms (European Directorate for the Quality of Medicines & HealthCare)
Alias: $EMDN = urn:oid:1.2.250.1.213.2.68										// European Medical Device Nomenclature (EU)
Alias: $GMDN = http://terminology.hl7.org/CodeSystem/GMDN						// Global Medical Device Nomenclature (GMDN Agency)
Alias: $IDTYPE = http://terminology.hl7.org/CodeSystem/v2-0203					// identifierType - V2-0203 (HL7)
Alias: $LanguageIso = http://terminology.hl7.org/CodeSystem/iso639-1			// Languages 639-1 (ISO)
Alias: $LOINC = http://loinc.org												// LOINC
Alias: $NCIthesaurus = urn:oid:2.16.840.1.113883.3.26.1.1						// NCI Thesaurus
Alias: $PACKAGETYPE = http://hl7.org/fhir/package-type							// FHIR Package Type (HL7)
Alias: $PUBSTATUS = http://hl7.org/fhir/publication-status						// FHIR Publication Status (HL7)
Alias: $SCT = http://snomed.info/sct											// SNOMED CT
Alias: $V3ROLECLASS = http://terminology.hl7.org/CodeSystem/v3-RoleClass		// V2 RoleClass (HL7)
Alias: $UCUM = http://unitsofmeasure.org                                        // UCUM

---

// File: input/fsh/cs-device-custodian.fsh

Instance: cs-device-custodian
InstanceOf: CapabilityStatement
Usage: #definition
* url = "http://hl7.org/fhir/uv/order-catalog/CapabilityStatement/cs-device-custodian"
* version = "1.0.0"
* name = "CapabilityStatement4DeviceCustodian"
* title = "CapabilityStatement for custodian of catalog of medical devices"
* status = #active
* experimental = false
* date = "2022-10-21"
* publisher = "HL7 International - Orders and Observations Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://hl7.org/Special/committees/orders"
* description = "This Section describes the expected capabilities of the Custodian of a catalog of medical devices. This role is responsible for providing responses to the queries submitted by the catalog consumers. \n\nThe DeviceDefinition Resource is the focal Resource describing a model of device in the catalog."
* jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001
* kind = #requirements
* fhirVersion = #5.0.0-ballot
* format[0] = #xml
* format[+] = #json
* implementationGuide = "http://hl7.org/fhir/uv/order-catalog/ImplementationGuide/ig-uv-order-catalog"
* rest.mode = #server
* rest.documentation = "The Custodian of a catalog of medical devices **SHALL**:\n\n1. Support profiles CatalogHeader, DeviceModel defined in this Implementation Guide..\n2.  Implement the RESTful behavior according to the FHIR specification.\n3. Return the following response classes:\n   - (Status 400): invalid parameter\n   - (Status 401/4xx): unauthorized request\n   - (Status 403): insufficient scope\n   - (Status 404): unknown resource\n   - (Status 410): deleted resource.\n4. Support json source formats for all order-catalog interactions.\n5. Identify the order-catalog  profiles supported as part of the FHIR `meta.profile` attribute for each instance.\n6. Support the searchParameters on each profile  individually and in combination.\n\nThe Custodian of a catalog of medical devices **SHOULD**:\n\n1. Support xml source formats for all order-catalog interactions.\n2. support the Catalog profile of the Composition Resource in the core standard\n"
* rest.security.description = "1. A custodian **SHALL** reject any unauthorized requests by returning an HTTP 401 \"Unauthorized\", HTTP 403 \"Forbidden\", or HTTP 404 \"Not Found\" ."
* rest.resource[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHALL
* rest.resource[=].type = #DeviceDefinition        
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/order-catalog/StructureDefinition/DeviceModel"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].referencePolicy = #enforced
* rest.resource[=].searchInclude = "iterate=*"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
//* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"								// wrong url, goes nowhere
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "http://hl7.org/fhir/2022Sep/search.html#id"                                  // url to be updated to R5 once it's published
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_lastUpdated"
//* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "http://hl7.org/fhir/2022Sep/search.html#lastUpdated"                         // url to be updated to R5 once it's published
// * rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"					
// * rest.resource[=].extension.valueCode = #SHALL
// * rest.resource[=].type = #Composition


---

// File: input/fsh/cs-drug-custodian.fsh

Instance: cs-drug-custodian
InstanceOf: CapabilityStatement
Usage: #definition
* url = "http://hl7.org/fhir/uv/order-catalog/CapabilityStatement/cs-drug-custodian"
* version = "1.0.0"
* name = "CapabilityStatement4DrugCustodian"
* title = "CapabilityStatement for custodian of catalog of medications"
* status = #active
* experimental = false
* date = "2022-09-16"
* publisher = "HL7 International - Orders and Observations Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://hl7.org/Special/committees/orders"
* description = "This Section describes the expected capabilities of the Custodian of a catalog of medications. This role is responsible for providing responses to the queries submitted by the catalog consumers. \n\nThe MedicationKnowledge Resource is the focal Resource gathering all knowledge and information details about a medication in the catalog."
* jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001
* kind = #requirements
* fhirVersion = #5.0.0-ballot
* format[0] = #xml
* format[+] = #json
* implementationGuide = "http://hl7.org/fhir/uv/order-catalog/ImplementationGuide/ig-uv-order-catalog"
* rest.mode = #server
* rest.documentation = "The Custodian of a catalog of medications **SHALL**:\n\n1. Support profiles CatalogHeader, DrugKnowledge, DrugPackage defined in this Implementation Guide..\n2.  Implement the RESTful behavior according to the FHIR specification.\n3. Return the following response classes:\n   - (Status 400): invalid parameter\n   - (Status 401/4xx): unauthorized request\n   - (Status 403): insufficient scope\n   - (Status 404): unknown resource\n   - (Status 410): deleted resource.\n4. Support json source formats for all order-catalog interactions.\n5. Identify the order-catalog  profiles supported as part of the FHIR `meta.profile` attribute for each instance.\n6. Support the searchParameters on each profile  individually and in combination.\n\nThe Custodian of a catalog of medications **SHOULD**:\n\n1. Support xml source formats for all order-catalog interactions.\n2. support the Catalog profile of the Composition Resource in the core standard\n"
* rest.security.description = "1. A custodian **SHALL** reject any unauthorized requests by returning an HTTP 401 \"Unauthorized\", HTTP 403 \"Forbidden\", or HTTP 404 \"Not Found\" ."
* rest.resource[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHALL
* rest.resource[=].type = #MedicationKnowledge        
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/order-catalog/StructureDefinition/DrugKnowledge"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].referencePolicy = #enforced
* rest.resource[=].searchInclude = "iterate=*"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
//* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"								// wrong url, goes nowhere
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "http://hl7.org/fhir/2022Sep/search.html#id"                                  // url to be updated to R5 once it's published
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_lastUpdated"
//* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "http://hl7.org/fhir/2022Sep/search.html#lastUpdated"                         // url to be updated to R5 once it's published
// * rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"					
// * rest.resource[=].extension.valueCode = #SHALL
// * rest.resource[=].type = #Composition


---

// File: input/fsh/cs-lab-service-custodian.fsh

Instance: cs-lab-service-custodian
InstanceOf: CapabilityStatement
Usage: #definition
* url = "http://hl7.org/fhir/uv/order-catalog/CapabilityStatement/cs-lab-service-custodian"
* version = "1.0.0"
* name = "CapabilityStatement4LaboServiceCustodian"
* title = "CapabilityStatement for custodian of catalog of laboratory in vitro diagnostic services"
* status = #active
* experimental = false
* date = "2022-10-21"
* publisher = "HL7 International - Orders and Observations Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://hl7.org/Special/committees/orders"
* description = "This Section describes the expected capabilities of the Custodian of a catalog of laboratory in vitro diagnostic services. This role is responsible for providing responses to the queries submitted by the catalog consumers. \n\nThe PlanDefinition Resource is the focal Resource for describing a laboratory in vitro diagnostic service in the catalog."
* jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001
* kind = #requirements
* fhirVersion = #5.0.0-ballot
* format[0] = #xml
* format[+] = #json
* implementationGuide = "http://hl7.org/fhir/uv/order-catalog/ImplementationGuide/ig-uv-order-catalog"
* rest.mode = #server
* rest.documentation = "The Custodian of a catalog of medical devices **SHALL**:\n\n1. Support profiles CatalogHeader, LabServiceDefinition, LabProcedureDefinition, LabSpecimenDefinition, LabObservationDefinition, InputObservationDefinition defined in this Implementation Guide..\n2.  Implement the RESTful behavior according to the FHIR specification.\n3. Return the following response classes:\n   - (Status 400): invalid parameter\n   - (Status 401/4xx): unauthorized request\n   - (Status 403): insufficient scope\n   - (Status 404): unknown resource\n   - (Status 410): deleted resource.\n4. Support json source formats for all order-catalog interactions.\n5. Identify the order-catalog  profiles supported as part of the FHIR `meta.profile` attribute for each instance.\n6. Support the searchParameters on each profile  individually and in combination.\n\nThe Custodian of a catalog of laboratory in vitro diagnostic services **SHOULD**:\n\n1. Support xml source formats for all order-catalog interactions.\n2. support the Catalog profile of the Composition Resource in the core standard\n"
* rest.security.description = "1. A custodian **SHALL** reject any unauthorized requests by returning an HTTP 401 \"Unauthorized\", HTTP 403 \"Forbidden\", or HTTP 404 \"Not Found\" ."
* rest.resource[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHALL
* rest.resource[=].type = #PlanDefinition        
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/order-catalog/StructureDefinition/LabServiceDefinition"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].referencePolicy = #enforced
* rest.resource[=].searchInclude = "iterate=*"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
//* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"								// wrong url, goes nowhere
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "http://hl7.org/fhir/2022Sep/search.html#id"                                  // url to be updated to R5 once it's published
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_lastUpdated"
//* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "http://hl7.org/fhir/2022Sep/search.html#lastUpdated"                         // url to be updated to R5 once it's published
// * rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"					
// * rest.resource[=].extension.valueCode = #SHALL
// * rest.resource[=].type = #Composition


---

// File: input/fsh/MappingToEudamed.fsh

//========================================================
//       Mapping DeviceDefinition to GUDID Field Labels
//========================================================

Mapping: DeviceModelToEudamed
Source: DeviceModel
Target: "https://ec.europa.eu/tools/eudamed"
Id: devicedefinition-to-eudamed
Title: "Europe Union EUDAMED"
Description: "maps DeviceDefinition elements to EUDAMED UDI data dictionary field IDs|labels"
* -> "EUDAMED data dictionary field IDs/labels"
* description -> "FLD-UDID-175|Additional product description"
* identifier -> "FLD-UDID-136|Secondary UDI - DI code [use = secondary, type = DISTID]; FLD-UDID-138|Direct Marking UDI-DI code [type = DIRECT-MARKING]; FLD-UDID-135|Unit of Use DI code [type = SINGLE-ITEM]"
* udiDeviceIdentifier.deviceIdentifier -> "FLD-UDID-178|UDI-DI code"
* udiDeviceIdentifier.issuer -> "FLD-UDID-291|Issuing Entity UDI-DI"
* udiDeviceIdentifier.jurisdiction -> "https://ec.europa.eu/health/medical-devices-sector_en"
* udiDeviceIdentifier.marketDistribution.marketPeriod.start  -> "FLD-UDID-250|Start date"
* udiDeviceIdentifier.marketDistribution.marketPeriod.end  -> "FLD-UDID-251|End date"
* udiDeviceIdentifier.marketDistribution.subJurisdiction -> "FLD-UDID-141|Countries were the devices is made available"
* partNumber -> "FLD-UDID-163|Reference / Catalogue Number"
//* manufacturer[x] -> "FLD-UDID-10|Legal Manufacturer SRN"			// for 5.0 snapshot-1
* manufacturer -> "FLD-UDID-10|Legal Manufacturer SRN"				// for 5.0 snapshot-2 and ballot
* deviceName.name -> "FLD-UDID-22|Device Name"
* deviceName.type -> "[registered-name]"
* modelNumber -> "FLD-UDID-20|Device Model"
* classification[emdn].type.coding.system -> "urn:oid:1.2.250.1.213.2.68"
* classification[emdn].type.coding.code -> "[EMDN code]"
* classification[emdn].type.coding.display -> "EMDN name"
//* packaging.type -> "FLD-UDID-309|Container Packages related to UDI-DI" ?
* packaging.count -> "FLD-UDID-121|Quantity of item(s)"
* packaging.udiDeviceIdentifier.deviceIdentifier -> "FLD-UDID-120|Package UDI-DI"
* safety -> "FLD-UDID-212|Critical Warnings type: {CW025:MR SAFE, CW026:MR CONDITIONAL, CW027:MR UNSAFE, CW023:Consider hazards from magnetic fields, CW024:Do not store near magnets or magnetic devices}"
* safety -> "FLD-UDID-156|Containing latex (Boolean)"
* property -> "FLD-UDID-16|Risk Class: {Medical Devices: CLASS_I, CLASS_IIa, CLASS_IIb, CLASS_III} {In Vitro Diagnostic Devices: CLASS_A, CLASS_B, CLASS_C, CLASS_D}"
* property -> "FLD-UDID-18|Tissues and cells - Presence of animal tissues or Cells, or their derivates (Boolean)"
* property -> "FLD-UDID-34|Tissues and cells - Presence of cells or substances of microbial origin (Boolean)"
* property -> "FLD-UDID-23|Tissues and cells - presence of human tissues or cells, or their derivates (Boolean)"
* property -> "FLD-UDID-28|Active Device (Boolean)"
* property -> "FLD-UDID-29|Device Intended to administer and/or Remove medicinal product (Boolean)"
* property -> "FLD-UDID-30|Implantable (Boolean)"
* property -> "FLD-UDID-31|Measuring Function (Boolean)"
* property -> "FLD-UDID-32|Reusable Surgical Instruments (Boolean)"
* property -> "FLD-UDID-33|Companion Diagnostic (Boolean)"
* property -> "FLD-UDID-35|Near Patient Testing (Boolean)"
* property -> "FLD-UDID-36|Patient Self Testing (Boolean)"
* property -> "FLD-UDID-155|Presence of a substance which, if used separately, may be considered to be a medicinal product derived from human blood or plasma (Boolean)"
* property -> "FLD-UDID-158|Presence of substance which, if used separately, may be considered to be a medicinal product (Boolean)"
* property -> "FLD-UDID-262|Reagent (Boolean)"
* property -> "FLD-UDID-263|Professional Testing (Boolean)"
* property -> "FLD-UDID-264|Instrument (Boolean)"
* property -> "FLD-UDID-356|Kit (Boolean)"
* property -> "FLD-UDID-12|Device, Procedure pack or System {SYSTEM, PROCEDURE_PACK, DEVICE}"
* property -> "FLD-UDID-167|Labelled as single use (Boolean)"
* property -> "FLD-UDID-169|Device labelled Sterile"
* property -> "FLD-UDID-170|Need for sterilisation before use"
* property -> "FLD-UDID-146|Clinical Sizes {Angle, Diameter, Gauge, Inflation volume, Length, Pressure, Size, Volume, Width, Weight, Heigth, Wavelength, Frequency,...}"
* property -> "Handling Environment Temperature"
* contact -> "FLD-UDID-354|Contact Details"

---

// File: input/fsh/MappingToGudid.fsh

//========================================================
//       Mapping DeviceDefinition to GUDID Field Labels
//========================================================

Mapping: DeviceModelToGudid
Source: DeviceModel
Target: "https://accessgudid.nlm.nih.gov/"
Id: devicedefinition-to-gudid
Title: "US GUDID"
Description: "maps DeviceDefinition elements to AccessGUDID section titles and field labels"
* -> "AccessGUDID section titles and field labels"
* description -> "Device Description"
* identifier -> "Secondary DI Number [use = secondary, type = DISTID]; DM DI Number [type = DIRECT-MARKING]; Unit of Use DI Number [type = SINGLE-ITEM]"
* udiDeviceIdentifier.deviceIdentifier -> "Primary DI Number"
* udiDeviceIdentifier.issuer -> "Primary DI Number - Issuing Agency"
* udiDeviceIdentifier.jurisdiction -> "urn:oid:2.16.840.1.113883.3.150"
* udiDeviceIdentifier.marketDistribution.marketPeriod.start  -> "DEVICE RECORD STATUS - DI Record Publish Date"
* udiDeviceIdentifier.marketDistribution.marketPeriod.end  -> "Commercial Distribution End Date"
* udiDeviceIdentifier.marketDistribution.subJurisdiction -> "urn:oid:2.16.840.1.113883.3.150"
* partNumber -> "Catalog Number"
//* manufacturer[x] -> "Company Name"			// for 5.0 snapshot-1
* manufacturer -> "Company Name"				// for 5.0 snapshot-2 and ballot
* deviceName.name -> "Brand Name"
* deviceName.type -> "[registered-name]"
* modelNumber -> "Version or Model"
* classification[gmdn].type.coding.system -> "http://terminology.hl7.org/CodeSystem/GMDN"
* classification[gmdn].type.coding.code -> "[GMDN code]"
* classification[gmdn].type.coding.display -> "GMDN Preferred Term Name"
* packaging.type -> "Package Type"
* packaging.count -> "Quantity per Package"
* packaging.udiDeviceIdentifier.deviceIdentifier -> "Package DI Number"
* packaging.udiDeviceIdentifier.jurisdiction -> "urn:oid:2.16.840.1.113883.3.150"
* packaging.udiDeviceIdentifier.marketDistribution.marketPeriod.end  -> "Package Discontinue Date"
* packaging.udiDeviceIdentifier.marketDistribution.subJurisdiction -> "urn:oid:2.16.840.1.113883.3.150"
* safety -> "What MRI safety information does the labeling contain?"
* safety -> "Device required to be labeled as containing natural rubber latex or dry natural rubber (21 CFR 801.437)"
* safety -> "Device labeled as \"Not made with natural rubber latex\""
* property -> "For Single-Use"
* property -> "Prescription Use (Rx)"
* property -> "Over the Counter (OTC)"
* property -> "Kit"
* property -> "Combination Product"
* property -> "Human Cell, Tissue or Cellular or Tissue-Based Product (HCT/P)"
* property -> "Device Packaged as Sterile"
* property -> "Requires Sterilization Prior to Use"
* property -> "Storage Environment Temperature"
* property -> "Handling Environment Temperature"
* property -> "Size - Length"
* property -> "Size - Width"
* property -> "Size - Heigth"
* property -> "Size - Angle"
* productionIdentifierInUDI -> "PRODUCTION IDENTIFIER(S) IN UDI"
* contact -> "CUSTOMER CONTACT"

---

// File: input/fsh/profiles/CatalogReference.StructureDefinition.fsh

Alias: $CatalogHeader = http://hl7.org/fhir/uv/order-catalog/StructureDefinition/CatalogHeader

Extension: CatalogReference
Id: CatalogReference
Title: "Reference to a catalog"
Description: "This extension to PlanDefinition, MedicationKnowledge and DeviceDefinition conveys the reference to a catalog containing the extended resource"
* ^version = "current"
* ^status = #draft
* ^date = "2022-03-17T12:16:22+01:00"
* ^publisher = "HL7 International - Orders and Observations Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/orders"
* ^jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001
* ^context[0].type = #element
* ^context[=].expression = "PlanDefinition"
* ^context[+].type = #element
* ^context[=].expression = "MedicationKnowledge"
* ^context[+].type = #element
* ^context[=].expression = "DeviceDefinition"
* value[x] only Reference
* valueReference only Reference($CatalogHeader)
* value[x] ^short = "Reference to a catalog containing this item"

---

// File: input/fsh/profiles/DeviceModel.StructureDefinition.fsh

Profile: DeviceModel
Parent: DeviceDefinition
Id: DeviceModel
Title: "Device Model"
Description: "This profile constrains the base resource DeviceDefinition to represent a model of device in a catalog of medical devices"
* ^version = "current"
* ^status = #draft
* ^date = "2022-02-20T18:06:45+01:00"
* ^publisher = "HL7 International - Orders and Observations Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/orders"
* ^jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001
* extension contains CatalogReference named CatalogReference 0..*
* description MS
* identifier MS
* identifier ^definition = "This repeatable element is used in catalogs of devices to convey any kind of identifier assigned to the model of device, other than the primary UDI DI.
identifier may convey for instance, the secondary UDI-DI, the direct-marking UDI-DI, the unit-of-use UDI-DI or any additional non-UDI identifier."
* udiDeviceIdentifier MS
* udiDeviceIdentifier.issuer ^definition = "Organization accredited by the jurisdictional authority to operate a system for the issuance of UDIs. Main issuers referenced in the US and/or in EU include:
1. GS1 GTIN: urn:oid:1.3.160,
2. HIBCC: urn:oid:2.16.840.1.113883.6.40,
3. ICCBBA Information Standard for Blood and Transplant (ISBT) 128: urn:oid:2.16.840.1.113883.6.18,
4. ICCBBA for other devices: to be found,
5. IFA (Europe Union only): to be found"
* udiDeviceIdentifier.jurisdiction ^definition = "The jurisdiction to which the deviceIdentifier applies. Known jurisdictions are:
1. US Food & Drug Administration (FDA): urn:oid:2.16.840.1.113883.3.150,
2. Europe Union EUDAMED: https://ec.europa.eu/health/medical-devices-sector_en"
* udiDeviceIdentifier.marketDistribution MS
* partNumber MS
* manufacturer MS				// for 5.0 snapshot-2 and ballot 
//* manufacturer[x] MS			// for 5.0 snapshot-1
* deviceName MS
* modelNumber MS
* classification ^slicing.discriminator.type = #pattern
* classification ^slicing.discriminator.path = "type.coding.system"
* classification ^slicing.description = "Slice based on classification.type pattern"
* classification ^slicing.rules = #open
* classification contains 
  gmdn 0..* and 
  snomed 0..1 and
  emdn 0..1

* classification[gmdn] ^short = "GMDN classification"
* classification[gmdn] ^definition = "Global Medical Device Nomenclature classification"
* classification[gmdn].type.coding.system = "http://terminology.hl7.org/CodeSystem/GMDN"

* classification[snomed] ^short = "SNOMED CT"
* classification[snomed] ^definition = "Systematized nomenclature of medicine - clinical terms"
* classification[snomed].type.coding.system = "http://snomed.info/sct"

* classification[emdn] ^short = "EMDN"
* classification[emdn] ^definition = "European Medical Device Nomenclature"
* classification[emdn].type.coding.system = "urn:oid:1.2.250.1.213.2.68"

* hasPart.count MS
* packaging.count MS
* packaging.udiDeviceIdentifier MS
* packaging.udiDeviceIdentifier.issuer ^definition = "Organization accredited by the jurisdictional authority to operate a system for the issuance of UDIs. Main issuers referenced in the US and/or in EU include:
1. GS1 GTIN: urn:oid:1.3.160,
2. HIBCC: urn:oid:2.16.840.1.113883.6.40,
3. ICCBBA Information Standard for Blood and Transplant (ISBT) 128: urn:oid:2.16.840.1.113883.6.18,
4. ICCBBA for other devices: to be found,
5. IFA (Europe Union only): to be found"
* safety MS
* property MS
* property.value[x] 1..
* guideline MS




---

// File: input/fsh/profiles/DrugKnowledge.StructureDefinition.fsh

Profile: DrugKnowledge
Parent: MedicationKnowledge
Id: DrugKnowledge
Title: "item in a catalog of drugs"
Description: "This profile constrains the base resource MedicationKnowledge to represent an item in a catalog of medications."
* ^version = "current"
* ^status = #draft
* ^date = "2022-03-04T15:57:00+01:00"
* ^publisher = "HL7 International - Orders and Observations Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/orders"
* ^jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001
* extension contains CatalogReference named CatalogReference 0..*
* code 1..
* intendedJurisdiction MS
* indicationGuideline and indicationGuideline.indication MS
* clinicalUseIssue MS
* definitional and definitional.doseForm MS
* definitional.drugCharacteristic.value[x] 1..



---

// File: input/fsh/profiles/DrugPackage.StructureDefinition.fsh

Profile: DrugPackage
Parent: PackagedProductDefinition
Id: DrugPackage
Title: "definition of a packaging of a medication"
Description: "This profile constrains the base resource PackagedProductDefinition to represent a definition of a packaging in a catalog of medications."
* ^version = "current"
* ^status = #draft
* ^date = "2022-06-10T11:57:00+01:00"
* ^publisher = "HL7 International - Orders and Observations Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/orders"
* ^jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001
* name MS
* type 1..
// Wait for snapshot #2 for this value set: * type = $PACKAGETYPE#MedicinalProductPack "Medicinal product pack"



---

// File: input/fsh/examples/example-device-catalog-header.fsh

Instance: example-device-catalog-header
InstanceOf: Composition
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/order-catalog/StructureDefinition/CatalogHeader"
* language = #en-US
* text.status = #additional
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en-US\" lang=\"en-US\">\n   <p><b>Additional Narrative: </b></p>\n    <p><b>Device catalog title</b>: Worldwide Device Catalog</p>\n            <p><b>id:</b> example-device-catalog-header</p>\n      <p><b>meta - profile:</b> hl7.org/fhir/uv/order-catalog/StructureDefinition/CatalogHeader</p>\n    <p><b>status:</b> preliminary</p>\n            <p><b>type:</b> catalog</p>\n            <p><b>category:</b> device</p>\n      <p><b>date published:</b> March 21, 2022</p>\n    <p><b>valid from:</b> 2022-06-30 <b>to:</b> 2022-12-31</p>\n            <p><b>author:</b> World Device Association</p>\n            <p><b>custodian:</b> World Device Association</p>\n   </div>"
* extension.url = "http://hl7.org/fhir/uv/order-catalog/StructureDefinition/ValidityPeriod"
* extension.valuePeriod.start = "2022-06-30"
* extension.valuePeriod.end = "2022-12-31"
* identifier.use = #official
* identifier.system = "http://fhir.org"
* identifier.value = "GlobalMedicalDevicesCatalog12"
* status = #preliminary
* type.text = "Catalog"
* category = http://terminology.hl7.org/CodeSystem/catalogType#device
* date = "2022-03-21T12:00:00+02:00"
* author.display = "World Device Association"
* title = "Worldwide Device Catalog"
* custodian.display = "World Device Association"

---

// File: input/fsh/examples/example-devicemodel-breast-pump.fsh

Instance: example-devicemodel-breast-pump
InstanceOf: DeviceModel
Title: "Philips Avent Breast Pump Single"
Description: "A breast pump example of model of device conforming to profile DeviceModel of DeviceDefinition"
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/order-catalog/StructureDefinition/DeviceModel"
* language = #en-US
* extension[0].url = "http://hl7.org/fhir/uv/order-catalog/StructureDefinition/CatalogReference"
* extension[0].valueReference = Reference(Composition/example-device-catalog-header)
// no description available, unfortunately
* udiDeviceIdentifier.deviceIdentifier = "00075020063816"
//* udiDeviceIdentifier.issuer = "urn:oid:1.3.160"
* udiDeviceIdentifier.issuer = "urn:oid:2.51.1.1"
* udiDeviceIdentifier.jurisdiction = "urn:oid:2.16.840.1.113883.3.150"
* udiDeviceIdentifier.marketDistribution[0].marketPeriod.start = "2016-09-17"
* udiDeviceIdentifier.marketDistribution[0].subJurisdiction = "urn:oid:2.16.840.1.113883.3.150"
// no catalog number in the GUDID for this device
//* manufacturerString = "Philips Consumer Lifestyle B.V."			// for 5.0 snapshot-1
* manufacturer.display = "Philips Consumer Lifestyle B.V."			// for 5.0 snapshot-2 and ballot
* deviceName.name = "Philips Avent Breast Pump Single"
* deviceName.type = #registered-name
* modelNumber = "SCF332"
//* classification[gmdn].type.coding[0].system = $GMDN don't have GMDN code so just use text.	
//* classification[gmdn].type.coding[0].code = ???
//* classification[gmdn].type.coding[0].display = "Breast pump, electric"
* classification[gmdn].type.text = "Breast pump, electric"
* classification[gmdn].justification[0].type = #citation
* classification[gmdn].justification[0].citation = "A mains electricity (AC-powered) device used to extract milk from the breast, typically for collecting and feeding to an infant. The device produces a continuous low-grade suction through a funnel-like component that is applied to the breast; the milk collects in an attached vessel (e.g., a sterilized bottle). The device may have a safety mechanism to prevent a potentially harmful increase in negative pressure."
* classification[snomed].type = $SCT#272201008 "Electric breast pump"
* languageCode = $LanguageIso#en-US "American English"  
* property[0].type.text = "For single use"
* property[0].valueBoolean = false
* property[1].type.text = "Prescription use"
* property[1].valueBoolean = false  
* property[2].type.text = "Over the counter"
* property[2].valueBoolean = true  
* property[3].type.text = "Human Cell, Tissue or Cellular or Tissue-Based Product (HCT/P)"
* property[3].valueBoolean = false  
* guideline.relatedArtifact[0].type = #documentation
* guideline.relatedArtifact[0].label = "Device described in GUDID:"
* guideline.relatedArtifact[0].document.url = "https://accessgudid.nlm.nih.gov/devices/00075020063816"

---

// File: input/fsh/examples/example-devicemodel-interbody-fusion-system.fsh

Instance: example-devicemodel-interbody-fusion-system
InstanceOf: DeviceDefinition
Title: "Imola Interbody Fusion System"
Description: "A spinal interbody fusion cage example of model of device conforming to profile DeviceModel of DeviceDefinition"
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/order-catalog/StructureDefinition/DeviceModel"
* language = #en-US
* extension[0].url = "http://hl7.org/fhir/uv/order-catalog/StructureDefinition/CatalogReference"
* extension[0].valueReference = Reference(Composition/example-device-catalog-header)
* description = "12mm, 10degree Lateral Interbody Fusion, 22x60mm, PEEK Implant Assembly"
* identifier[0].use = #secondary
* identifier[0].type = $IDTYPE#UDI "Universal Device Identifier"
//* identifier[0].system = "urn:oid:1.3.160"
* identifier[0].system = "urn:oid:2.51.1.1"
* identifier[0].value = "00843210101415"
* udiDeviceIdentifier.deviceIdentifier = "B417F12260121"
* udiDeviceIdentifier.issuer = "urn:oid:2.16.840.1.113883.6.40"
* udiDeviceIdentifier.jurisdiction = "urn:oid:2.16.840.1.113883.3.150"
* udiDeviceIdentifier.marketDistribution[0].marketPeriod.start = "2017-08-22"
* udiDeviceIdentifier.marketDistribution[0].subJurisdiction = "urn:oid:2.16.840.1.113883.3.150"
// no catalog number in the GUDID for this device
* manufacturer.display = "Altus Spine, LLC"				// for 5.0 snapshot-2 and ballot
//* manufacturerString = "Altus Spine, LLC"				// for 5.0 snapshot-1
* deviceName.name = "Imola Interbody Fusion System"
* deviceName.type = #registered-name
* modelNumber = "F12260-12"
* classification[0].type = $GMDN#60762 "Polymeric spinal interbody fusion cage"
* classification[1].type = $SCT#257275005 "Spinal cage"
* classification[2].type = $EMDN#P090701 "Spinal fusion systems"
* safety[0].coding[0] = $NCIthesaurus#C113844 "Labeling does not Contain MRI Safety Information"
* languageCode = $LanguageIso#en-US "American English"  
* property[0].type.text = "For single use"
* property[0].valueBoolean = true
* property[1].type.text = "Prescription use"
* property[1].valueBoolean = true  
* property[2].type.text = "Over the counter"
* property[2].valueBoolean = false  
* property[3].type.text = "Human Cell, Tissue or Cellular or Tissue-Based Product (HCT/P)"
* property[3].valueBoolean = false  
* property[4].type.text = "Length"
* property[4].valueQuantity = 60 'mm' "millimeter"
* property[5].type.text = "Width"
* property[5].valueQuantity = 22 'mm' "millimeter"
* property[6].type.text = "Heigth"
* property[6].valueQuantity = 12 'mm' "millimeter"
* property[7].type.text = "Angle"
* property[7].valueQuantity = 10 'deg' "degree"
* contact[0].system = #email
* contact[0].value = "Info@altus-spine.com"
* guideline.relatedArtifact[0].type = #documentation

* guideline.relatedArtifact[0].label = "Device described in GUDID:"
* guideline.relatedArtifact[0].document.url = "https://accessgudid.nlm.nih.gov/devices/B417F12260121"

---

// File: input/fsh/examples/example-devicemodel-presthetic-accessories.fsh

Instance: example-devicemodel-presthetics-accessories
InstanceOf: DeviceDefinition
Title: "A.B. DENTAL DEVICES LTD Presthetic Accessories"
Description: "A  Titanium Healing Cap, 3.75 mm Diameter, 5 mm lengh - example of model of device conforming to profile DeviceModel of DeviceDefinition"
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/order-catalog/StructureDefinition/DeviceModel"
* language = #en-US
* extension[0].url = "http://hl7.org/fhir/uv/order-catalog/StructureDefinition/CatalogReference"
* extension[0].valueReference = Reference(Composition/example-device-catalog-header)
* description = "Titanium Healing Cap, 3.75 mm Diameter, 5 mm lengh"
* udiDeviceIdentifier.deviceIdentifier = "07290107271400"
//* udiDeviceIdentifier.issuer = "urn:oid:1.3.160"
* udiDeviceIdentifier.issuer = "urn:oid:2.51.1.1"
* udiDeviceIdentifier.jurisdiction = "urn:oid:2.16.840.1.113883.3.150"
* udiDeviceIdentifier.marketDistribution[0].marketPeriod.start = "2019-05-05"
* udiDeviceIdentifier.marketDistribution[0].subJurisdiction = "urn:oid:2.16.840.1.113883.3.150"
* partNumber = "P0-3.75,5"
* manufacturer.display = "A.B. DENTAL DEVICES LTD"				// for 5.0 snapshot-2 and ballot
//* manufacturerString = "A.B. DENTAL DEVICES LTD"				// for 5.0 snapshot-1
* deviceName.name = "Presthetic Accessories"
* deviceName.type = #registered-name
* modelNumber = "P0-3.75,5"
* classification[0].type = $GMDN#44881 "Dental implant suprastructure kit"  
* classification[0].justification[0].type = #citation
* classification[0].justification[0].citation = "A collection of prefabricated dental devices and components used to create a suprastructure on a dental implant to mimic preparations of natural teeth. It is used during dental implant restorative and laboratory procedures and will typically consist of a direct dental abutment (the device that is screwed into the surgically implanted fixture that creates the anchorage for the prosthetic tooth in the mandible or maxilla), a carrier, an impression pick-up, a replica, a healing cap and a burnout cylinder. This is a single-use device."
* classification[1].type = $SCT#1141761008 "Dental implant suprastructure"
* classification[2].type = $EMDN#P01020180 "Dental implants - accessories"
* packaging[0].type.coding[0] = $SCT#37284003 "Bag, device"
* packaging[0].count = 10
* packaging[0].udiDeviceIdentifier[0].deviceIdentifier = "17290107271407"
//* packaging[0].udiDeviceIdentifier[0].issuer = "urn:oid:1.3.160"
* packaging[0].udiDeviceIdentifier[0].issuer = "urn:oid:2.51.1.1"
* packaging[0].udiDeviceIdentifier[0].jurisdiction = "urn:oid:2.16.840.1.113883.3.150"
* packaging[0].packaging[0].type.coding[0] = $SCT#37284003 "Bag, device"
* packaging[0].packaging[0].count = 100
* packaging[0].packaging[0].udiDeviceIdentifier[0].deviceIdentifier = "27290107271404"
//* packaging[0].packaging[0].udiDeviceIdentifier[0].issuer = "urn:oid:1.3.160"
* packaging[0].packaging[0].udiDeviceIdentifier[0].issuer = "urn:oid:2.51.1.1"
* packaging[0].packaging[0].udiDeviceIdentifier[0].jurisdiction = "urn:oid:2.16.840.1.113883.3.150"
* safety[0].coding[0] = $NCIthesaurus#C113844 "Labeling does not Contain MRI Safety Information"	
* languageCode = $LanguageIso#en-US "American English"  
* property[0].type.text = "For single use"
* property[0].valueBoolean = true
* property[1].type.text = "Prescription use"
* property[1].valueBoolean = true  
* property[2].type.text = "Over the counter"
* property[2].valueBoolean = false  
* property[3].type.text = "Human Cell, Tissue or Cellular or Tissue-Based Product (HCT/P)"
* property[3].valueBoolean = false  
* property[4].type.text = "Device Packaged as Sterile"
* property[4].valueBoolean = false 
* property[5].type.text = "Requires Sterilization Prior to Use"
* property[5].valueBoolean = true  
* contact[0].system = #email
* contact[0].value = "Info@ab-dent.com"
* guideline.relatedArtifact[0].type = #documentation
* guideline.relatedArtifact[0].label = "Device described in GUDID:"
* guideline.relatedArtifact[0].document.url = "https://accessgudid.nlm.nih.gov/devices/07290107271400"

---

// File: input/fsh/examples/example-drug-clarithromycin-25mg-granule-suspension.fsh

Instance: example-drug-clarithromycin-25mg-granule-suspension
InstanceOf: MedicationKnowledge
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/order-catalog/StructureDefinition/DrugKnowledge"
* language = #en-US
* extension[0].url = "http://hl7.org/fhir/uv/order-catalog/StructureDefinition/CatalogReference"
* extension[0].valueReference = Reference(Composition/example-medication-catalog-header)
* code = $SCT#769316002 "Clarithromycin 25 mg/mL oral suspension"
* intendedJurisdiction[0].text = "Healthyland"
* name = "CLARITHROMYCINE GENERIC-LAB 25 mg/ml, granules for oral suspension"
* productType.text = "Generic product"
* indicationGuideline[0].indication[0].reference = Reference(ClinicalUseDefinition/example-bacterial-pharyngitis-indication)
* indicationGuideline[0].indication[1].reference = Reference(ClinicalUseDefinition/example-acute-otitis-media-indication)
* indicationGuideline[0].indication[2].reference = Reference(ClinicalUseDefinition/example-bacterial-sinusitis-indication)
* indicationGuideline[0].dosingGuideline[0].patientCharacteristic[0].type = $LOINC#30525-0 "Age"
* indicationGuideline[0].dosingGuideline[0].patientCharacteristic[0].valueRange.low = 0.5 'a' "years"
* indicationGuideline[0].dosingGuideline[0].patientCharacteristic[0].valueRange.high = 12 'a' "years"
* medicineClassification[0].type.text =  "Anatomical Therapeutic Chemical (ATC)"
* medicineClassification[0].sourceUri = "https://www.whocc.no/atc/structure_and_principles/"
* medicineClassification[0].classification = $ATC#J01FA09 "Clarithromycin"
* medicineClassification[1].type.text = "SNOMED CT drug dispositions"
* medicineClassification[1].sourceUri = "https://confluence.ihtsdotools.org/display/DOCEG/SNOMED+CT+Editorial+Guide+-+Pharmaceutical+and+Biologic+Product"
* medicineClassification[1].classification = $SCT#346325008 "Medicinal product acting as antibacterial agent"
* packaging[0].cost[0].effectiveDate.start = "2021-02-01"
* packaging[0].cost[0].type.text = "public price"
* packaging[0].cost[0].source = "Healthyland Drug Administration"
* packaging[0].cost[0].costMoney.value = 5.18
* packaging[0].cost[0].costMoney.currency = #EUR
* packaging[0].cost[1].effectiveDate.start = "2020-09-30"
* packaging[0].cost[1].effectiveDate.end = "2021-01-31"
* packaging[0].cost[1].type.text = "public price"
* packaging[0].cost[1].source = "Healthyland Drug Administration"
* packaging[0].cost[1].costMoney.value = 5.20
* packaging[0].cost[1].costMoney.currency = #EUR
* packaging[0].cost[2].effectiveDate.start = "2010-03-01"
* packaging[0].cost[2].type.text = "manufacturers' cost"
* packaging[0].cost[2].source = "Healthyland Drug Administration"
* packaging[0].cost[2].costMoney.value = 4.40
* packaging[0].cost[2].costMoney.currency = #EUR
* packaging[0].packagedProduct = Reference(PackagedProductDefinition/example-drug-package-clarithromycin)
* clinicalUseIssue[0] = Reference(ClinicalUseDefinition/example-allergy-contraindication)
                                                                                      // Does not exist in snapshot 1: * storageGuideline[0].stabilityDuration = 2 'a' "years"
* definitional.doseForm.coding[0] = $SCT#385029002 "Granules for oral suspension"
* definitional.doseForm.coding[1] = $EDQM#10113000 "Granules for oral suspension"
* definitional.intendedRoute = $SCT#26643006 "Oral route"
* definitional.ingredient[0].item.concept = $SCT#387487009 "Clarithromycin"
* definitional.ingredient[0].type = $V3ROLECLASS#ACTIB "active ingredient - basis of strength"
* definitional.ingredient[0].strengthRatio.numerator = 25 'mg' "milligram"
* definitional.ingredient[0].strengthRatio.denominator = 1 'mL' "milliliter"
* definitional.ingredient[1].item.concept = $SCT#11320009 "Sucrose"
* definitional.ingredient[1].type = $V3ROLECLASS#IACT "inactive ingredient"


---

// File: input/fsh/examples/example-drug-package-clarithromycin.fsh

Instance: example-drug-package-clarithromycin
InstanceOf: PackagedProductDefinition
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/order-catalog/StructureDefinition/DrugPackage"
* language = #en-US
* name = "Package for CLARITHROMYCINE GENERIC-LAB 25 mg/ml, granules for oral suspension in 100 ml HDPE bottle"									
* type = $PACKAGETYPE#MedicinalProductPack "Medicinal product pack"
* status = $PUBSTATUS#active "Active"
* statusDate = "2010-03-01"
* containedItemQuantity[0].value = 1
* containedItemQuantity[0].unit = "vial"
* containedItemQuantity[1].value = 3
* containedItemQuantity[1].unit = "syringe for oral administration"
* description = "1 high density polyethylene (HDPE) bottle of 100 ml with 3 syringes for oral administration"

---

// File: input/fsh/examples/example-medication-catalog-header.fsh

Instance: example-medication-catalog-header
InstanceOf: Composition
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/order-catalog/StructureDefinition/CatalogHeader"
* language = #en-US
* text.status = #additional
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en-US\" lang=\"en-US\">\n   <p><b>Additional Narrative: </b></p>\n    <p><b>Medication catalog title</b>: Drugs authorized for prescription in Healthyland</p>\n            <p><b>id:</b> example-medication-catalog-header</p>\n      <p><b>meta - profile:</b> hl7.org/fhir/uv/order-catalog/StructureDefinition/CatalogHeader</p>\n    <p><b>status:</b> preliminary</p>\n            <p><b>type:</b> catalog</p>\n            <p><b>category:</b> medication</p>\n      <p><b>date published:</b> May 20, 2022</p>\n    <p><b>valid from:</b> 2022-09-30 <b>to:</b> 2022-12-31</p>\n            <p><b>author:</b> Healthyland medicinal product agency</p>\n            <p><b>custodian:</b> Healthyland medicinal product agency</p>\n   </div>"
* extension.url = "http://hl7.org/fhir/uv/order-catalog/StructureDefinition/ValidityPeriod"
* extension.valuePeriod.start = "2022-09-30"
* extension.valuePeriod.end = "2022-12-31"
* identifier.use = #official
* identifier.system = "http://fhir.org"
* identifier.value = "HealthylandDrugsCatalog"
* status = #preliminary
* type.text = "Catalog"
* category = http://terminology.hl7.org/CodeSystem/catalogType#medication
* date = "2022-05-20T12:00:00+02:00"
* author.display = "Healthyland medicinal product agency"
* title = "Drugs authorized for prescription in Healthyland"
* custodian.display = "Healthyland medicinal product agency"

---

