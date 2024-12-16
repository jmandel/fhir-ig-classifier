File: repos/HL7_SLASH_fhir-directory-query/input/fsh/Aliases.fsh

// USCore Aliases
Alias:   $USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias:   $USCoreOrganization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias:   $USCoreLocation = http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
Alias:   $USCorePractitionerRole = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole
Alias:   $us-core-provider-role-vs = http://hl7.org/fhir/us/core/ValueSet/us-core-provider-role
Alias:   $USCareTeam = http://hl7.org/fhir/us/core/StructureDefinition/us-core-careteam
Alias:   $us-core-provider-specialty-vs = http://hl7.org/fhir/us/core/ValueSet/us-core-provider-specialty

//VhDir Aliases
Alias: $SCT = http://snomed.info/sct
Alias: $GeolocationExtension = http://hl7.org/fhir/StructureDefinition/geolocation
Alias: $consent = http://hl7.org/fhir/uv/vhdir/ValueSet/consent
Alias: $verificationresult-validation-type = http://hl7.org/fhir/ValueSet/verificationresult-validation-type
Alias: $verificationprocess = http://hl7.org/fhir/uv/vhdir/ValueSet/validationprocess
Alias: $verificationresult-primary-source-type = http://hl7.org/fhir/ValueSet/verificationresult-primary-source-type
Alias: $verificationresult-communication-method_1 = http://hl7.org/fhir/ValueSet/verificationresult-communication-method
Alias: $verificationresult-communication-methodCS = http://terminology.hl7.org/CodeSystem/verificationresult-communication-method

Alias: $identifierstatus = http://hl7.org/fhir/uv/vhdir/ValueSet/identifierstatus
//Alias: $aliastype = http://hl7.org/fhir/uv/vhdir/ValueSet/aliastype

//Alias: $digitalcertificatetype = http://hl7.org/fhir/uv/vhdir/ValueSet/digitalcertificatetype
Alias: $digitalcertificatetype = http://hl7.org/fhir/uv/vhdir/StructureDefinition/digitalcertificate
Alias: $digitalcertificateuse = http://hl7.org/fhir/uv/vhdir/ValueSet/digitalcertificateuse
Alias: $digitalcertificatestandard = http://hl7.org/fhir/uv/vhdir/ValueSet/digitalcertificatestandard
Alias: $digitalcertificatetrustframework = http://hl7.org/fhir/uv/vhdir/ValueSet/digitalcertificatetrustframework

// Other Aliases
Alias:   $OrgType = http://terminology.hl7.org/CodeSystem/organization-type
Alias:   $EndpointStatus = http://hl7.org/fhir/ValueSet/endpoint-status
Alias:   $PublicationStatus = http://hl7.org/fhir/ValueSet/publication-status
Alias:   $LocationStatus = http://hl7.org/fhir/location-status 
Alias:   $USPSState = http://hl7.org/fhir/us/core/ValueSet/us-core-usps-state
Alias:   $USPSStateCS = https://www.usps.com/
Alias:   $ConnectionTypeCS = http://terminology.hl7.org/CodeSystem/endpoint-connection-type 
Alias:   $MinValueSet = http://hl7.org/fhir/StructureDefinition/elementdefinition-minValueSet
Alias:   $DaysOfWeekVS  = http://hl7.org/fhir/ValueSet/days-of-week
Alias:   $OrganizationRoleVS  = http://hl7.org/fhir/ValueSet/organization-role
Alias:   $R4GeoJSONExtension = http://hl7.org/fhir/StructureDefinition/location-boundary-geojson
Alias:   $HL7PractitionerRoleCS = http://terminology.hl7.org/CodeSystem/practitioner-role
Alias:   $HL7OrganizationRoleCS = http://hl7.org/fhir/organization-role
Alias:   $ServiceTypeCS = http://terminology.hl7.org/CodeSystem/service-type 
Alias:   $NPICS = http://hl7.org/fhir/sid/us-npi
Alias: $BCP47 = urn:ietf:bcp:47

// CodeSystem and ValueSet Aliases
Alias:  $V3ActReason = http://terminology.hl7.org/CodeSystem/v3-ActReason
Alias: $V3RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
//Alias:  $PaymentTypology =  urn:oid:2.16.840.1.113883.3.221.5  
Alias:  $NUCCProviderTaxonomy = http://nucc.org/provider-taxonomy

Alias:  $V2table0360VS = http://terminology.hl7.org/ValueSet/v2-0360 
Alias:  $V2table0360CS = http://terminology.hl7.org/CodeSystem/v2-0360 
Alias:  $yesNoVS = http://terminology.hl7.org/ValueSet/v2-0136
Alias:  $paymentTypeVS = http://terminology.hl7.org/ValueSet/v2-0570
Alias:  $paymentTypeCS = http://terminology.hl7.org/CodeSystem/v2-0570


// NatlDir defined CS that mimic VHDir CodeSystems
Alias: $LanguageProficiency = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/LanguageProficiencyCS
Alias: $QualificationStatusCS = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/QualificationStatusCS
Alias: $MinEndpointConnectionTypeVS = http://hl7.org/fhir/us/directory-query/ValueSet/MinEndpointConnectionTypeVS
Alias: $QualificationStatusCS = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/QualificationStatusCS
Alias: $IgFormatCodeVS = http://hl7.org/fhir/ValueSet/formatcodes

Alias: $failureActionCS = 	http://terminology.hl7.org/CodeSystem/failure-action
Alias: $needCS = 	http://terminology.hl7.org/CodeSystem/need
Alias: $verificationResultStatusCS = 	http://hl7.org/fhir/CodeSystem/status
Alias: $verificationResultTypeCS = http://terminology.hl7.org/CodeSystem/validation-type
Alias: $loinc = http://loinc.org
Alias: $ConsentCS = http://hl7.org/fhir/consent-state-codes
Alias: $ConsentPolicyCS = http://terminology.hl7.org/CodeSystem/consentpolicycodes
		

---

File: repos/HL7_SLASH_fhir-directory-query/input/fsh/cap-statement-rulesets-complete.fsh

// Defines expanded operations for the server
RuleSet: Federated_Query_CapabilityStatement_Expanded
* status = #draft
* experimental = true
* date = "2022-02-15T07:15:00.000000-04:00"
* kind = #requirements
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1
* implementationGuide = "https://hl7.org/fhir/us/directory-query"
* rest[0].mode = #server

* rest.security.description = "1. See the [General Security Considerations](https://www.hl7.org/fhir/security.html#general) section for requirements and recommendations.\n1. A client **SHALL** reject any unauthorized requests by returning an `HTTP 401` unauthorized response code."
//* rest.documentation =  "A Federated Query server **SHALL**:\n\n1. Support all profiles defined in this Implementation Guide..\n1.  Implement the RESTful behavior according to the FHIR specification.\n1. Return the following response classes:\n   - (Status 400): invalid parameter\n   - (Status 401/4xx): unauthorized request\n   - (Status 403): insufficient scope\n   - (Status 404): unknown resource\n   - (Status 410): deleted resource.\n1. Support json source formats for all Federated Query interactions.\n1. Identify the Federated Query  profiles supported as part of the FHIR `meta.profile` attribute for each instance.\n1. Support the searchParameters on each profile individually and in combination.\n\nThe Federated Query Server **SHOULD**:\n\n1. Support xml source formats for all Federated Query interactions.\n"
* rest.security.description = "1. See the [General Security Considerations](https://www.hl7.org/fhir/security.html#general) section for requirements and recommendations.\n1. A client **SHALL** reject any unauthorized requests by returning an `HTTP 401` unauthorized response code."
//endpoint connection-type, identifier, mime-type, organization, payload-type, status, usecase-standard, usecase-type, 
* rest[0].resource[0].type = #Endpoint
* rest[0].resource[0].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-Endpoint"
* rest[0].resource[0].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[0].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[0].name = "identifier"
* rest[0].resource[0].searchParam[0].type = #token
* rest[0].resource[0].searchParam[0].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-EndpointComplete-identifier"
* rest[0].resource[0].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[1].name = "connection-type"
* rest[0].resource[0].searchParam[1].type = #token
* rest[0].resource[0].searchParam[1].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-EndpointComplete-connection-type"
* rest[0].resource[0].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[2].name = "mime-type"
* rest[0].resource[0].searchParam[2].type = #token
* rest[0].resource[0].searchParam[2].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-EndpointComplete-mime-type"
* rest[0].resource[0].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[3].name = "organization"
* rest[0].resource[0].searchParam[3].type = #token
* rest[0].resource[0].searchParam[3].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-EndpointComplete-organization"
* rest[0].resource[0].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[4].name = "payload-type"
* rest[0].resource[0].searchParam[4].type = #token
* rest[0].resource[0].searchParam[4].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-EndpointComplete-payload-type"
* rest[0].resource[0].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[5].name = "usecase-standard"
* rest[0].resource[0].searchParam[5].type = #token
* rest[0].resource[0].searchParam[5].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-EndpointComplete-usecase-standard"
* rest[0].resource[0].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[6].name = "status"
* rest[0].resource[0].searchParam[6].type = #token
* rest[0].resource[0].searchParam[6].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-EndpointComplete-status"
* rest[0].resource[0].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[7].name = "usecase-type"
* rest[0].resource[0].searchParam[7].type = #token
* rest[0].resource[0].searchParam[7].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-EndpointComplete-usecase-type"
* rest[0].resource[0].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[7].extension.valueCode = #SHALL

//careteam
//search parameters: endpoint, location, name, organization, service, category
* rest[0].resource[10].type = #CareTeam
* rest[0].resource[10].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-CareTeam"
* rest[0].resource[10].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[9].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[0].name = "endpoint"
* rest[0].resource[10].searchParam[0].type = #token
* rest[0].resource[10].searchParam[0].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-CareTeamComplete-Endpoint"
* rest[0].resource[10].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[1].name = "location"
* rest[0].resource[10].searchParam[1].type = #token
* rest[0].resource[10].searchParam[1].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-CareTeamComplete-location"
* rest[0].resource[10].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[2].name = "name"
* rest[0].resource[10].searchParam[2].type = #token
* rest[0].resource[10].searchParam[2].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-CareTeamComplete-name"
* rest[0].resource[10].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[3].name = "organization"
* rest[0].resource[10].searchParam[3].type = #token
* rest[0].resource[10].searchParam[3].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-CareTeamComplete-organization"
* rest[0].resource[10].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[4].name = "service"
* rest[0].resource[10].searchParam[4].type = #token
* rest[0].resource[10].searchParam[4].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-CareTeamComplete-service"
* rest[0].resource[10].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[5].name = "category"
* rest[0].resource[10].searchParam[5].type = #token
* rest[0].resource[10].searchParam[5].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-CareTeamComplete-category"
* rest[0].resource[10].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[5].extension.valueCode = #SHALL

//healthcare service
* rest[0].resource[1].type = #HealthcareService
* rest[0].resource[1].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-HealthcareService"
* rest[0].resource[1].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[1].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[0].name = "service-category"
* rest[0].resource[1].searchParam[0].type = #token
* rest[0].resource[1].searchParam[0].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-HealthcareServiceComplete-service-category"
* rest[0].resource[1].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[1].name = "coverage-area"
* rest[0].resource[1].searchParam[1].type = #token
* rest[0].resource[1].searchParam[1].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-HealthcareServiceComplete-coverage-area"
* rest[0].resource[1].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[2].name = "endpoint"
* rest[0].resource[1].searchParam[2].type = #token
* rest[0].resource[1].searchParam[2].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-HealthcareServiceComplete-EndpointComplete"
* rest[0].resource[1].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[3].name = "location"
* rest[0].resource[1].searchParam[3].type = #token
* rest[0].resource[1].searchParam[3].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-HealthcareServiceComplete-location"
* rest[0].resource[1].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[4].name = "name"
* rest[0].resource[1].searchParam[4].type = #token
* rest[0].resource[1].searchParam[4].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-HealthcareServiceComplete-name"
* rest[0].resource[1].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[5].name = "organization"
* rest[0].resource[1].searchParam[5].type = #token
* rest[0].resource[1].searchParam[5].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-HealthcareServiceComplete-organization"
* rest[0].resource[1].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[6].name = "specialty"
* rest[0].resource[1].searchParam[6].type = #token
* rest[0].resource[1].searchParam[6].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-HealthcareServiceComplete-specialty"
* rest[0].resource[1].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[7].name = "service-type"
* rest[0].resource[1].searchParam[7].type = #token
* rest[0].resource[1].searchParam[7].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-HealthcareServiceComplete-service-type"
* rest[0].resource[1].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[7].extension.valueCode = #SHALL

//Location
* rest[0].resource[3].type = #Location
* rest[0].resource[3].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-location"
* rest[0].resource[3].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[3].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[0].name = "address"
* rest[0].resource[3].searchParam[0].type = #token
* rest[0].resource[3].searchParam[0].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-locationComplete-address"
* rest[0].resource[3].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[1].name = "endpoint"
* rest[0].resource[3].searchParam[1].type = #token
* rest[0].resource[3].searchParam[1].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-locationComplete-EndpointComplete"
* rest[0].resource[3].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[2].name = "organization"
* rest[0].resource[3].searchParam[2].type = #token
* rest[0].resource[3].searchParam[2].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-locationComplete-organization"
* rest[0].resource[3].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[3].name = "physicalType"
* rest[0].resource[3].searchParam[3].type = #token
* rest[0].resource[3].searchParam[3].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-locationComplete-physicalType"
* rest[0].resource[3].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[4].name = "partOf"
* rest[0].resource[3].searchParam[4].type = #token
* rest[0].resource[3].searchParam[4].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-locationComplete-partOf"
* rest[0].resource[3].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[5].name = "type"
* rest[0].resource[3].searchParam[5].type = #token
* rest[0].resource[3].searchParam[5].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-locationComplete-type"
* rest[0].resource[3].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[5].extension.valueCode = #SHALL




//organization
* rest[0].resource[4].type = #Organization
* rest[0].resource[4].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-organization"
* rest[0].resource[4].supportedProfile[1] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-network"
* rest[0].resource[4].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[4].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[0].name = "type"
* rest[0].resource[4].searchParam[0].type = #token
* rest[0].resource[4].searchParam[0].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-organizationComplete-type"
* rest[0].resource[4].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[1].name = "address"
* rest[0].resource[4].searchParam[1].type = #token
* rest[0].resource[4].searchParam[1].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-organizationComplete-address"
* rest[0].resource[4].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[2].name = "endpoint"
* rest[0].resource[4].searchParam[2].type = #token
* rest[0].resource[4].searchParam[2].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-organizationComplete-EndpointComplete"
* rest[0].resource[4].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[3].name = "identifier"
* rest[0].resource[4].searchParam[3].type = #token
* rest[0].resource[4].searchParam[3].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-organizationComplete-identifier"
* rest[0].resource[4].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[4].name = "name"
* rest[0].resource[4].searchParam[4].type = #token
* rest[0].resource[4].searchParam[4].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-organizationComplete-name"
* rest[0].resource[4].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[5].name = "partOf"
* rest[0].resource[4].searchParam[5].type = #token
* rest[0].resource[4].searchParam[5].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-organizationComplete-partOf"
* rest[0].resource[4].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[6].name = "coverage-area"
* rest[0].resource[4].searchParam[6].type = #token
* rest[0].resource[4].searchParam[6].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-location-coverage-area"
* rest[0].resource[4].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[7].name = "NetworkName"
* rest[0].resource[4].searchParam[7].type = #token
* rest[0].resource[4].searchParam[7].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-networkComplete-name"
* rest[0].resource[4].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[7].extension.valueCode = #SHALL



//OrganizationAffiliation
* rest[0].resource[5].type = #OrganizationAffiliation
* rest[0].resource[5].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-organizationAffiliation"
* rest[0].resource[5].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[5].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[0].name = "endpoint"
* rest[0].resource[5].searchParam[0].type = #token
* rest[0].resource[5].searchParam[0].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-organizationAffiliationComplete-EndpointComplete"
* rest[0].resource[5].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[1].name = "location"
* rest[0].resource[5].searchParam[1].type = #token
* rest[0].resource[5].searchParam[1].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-organizationAffiliationComplete-location"
* rest[0].resource[5].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[2].name = "network"
* rest[0].resource[5].searchParam[2].type = #token
* rest[0].resource[5].searchParam[2].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-organizationAffiliationComplete-network"
* rest[0].resource[5].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[3].name = "participating-organization"
* rest[0].resource[5].searchParam[3].type = #token
* rest[0].resource[5].searchParam[3].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-organizationAffiliationComplete-participating-organization"
* rest[0].resource[5].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[4].name = "primary-organization"
* rest[0].resource[5].searchParam[4].type = #token
* rest[0].resource[5].searchParam[4].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-organizationAffiliationComplete-primary-organization"
* rest[0].resource[5].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[5].name = "role"
* rest[0].resource[5].searchParam[5].type = #token
* rest[0].resource[5].searchParam[5].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-organizationAffiliationComplete-role"
* rest[0].resource[5].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[6].name = "service"
* rest[0].resource[5].searchParam[6].type = #token
* rest[0].resource[5].searchParam[6].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-organizationAffiliationComplete-service"
* rest[0].resource[5].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[7].name = "specialty"
* rest[0].resource[5].searchParam[7].type = #token
* rest[0].resource[5].searchParam[7].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-organizationAffiliationComplete-specialty"
* rest[0].resource[5].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[7].extension.valueCode = #SHALL


//Practitioner
* rest[0].resource[6].type = #Practitioner
* rest[0].resource[6].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-Practitioner"
* rest[0].resource[6].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[6].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[0].name = "name"
* rest[0].resource[6].searchParam[0].type = #token
* rest[0].resource[6].searchParam[0].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-PractitionerComplete-name"
* rest[0].resource[6].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[1].name = "family"
* rest[0].resource[6].searchParam[1].type = #token
* rest[0].resource[6].searchParam[1].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-PractitionerComplete-family"
* rest[0].resource[6].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[2].name = "given"
* rest[0].resource[6].searchParam[2].type = #token
* rest[0].resource[6].searchParam[2].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-PractitionerComplete-given"
* rest[0].resource[6].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[3].name = "identifier"
* rest[0].resource[6].searchParam[3].type = #token
* rest[0].resource[6].searchParam[3].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-PractitionerComplete-identifier"
* rest[0].resource[6].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[4].name = "identifier-assigner"
* rest[0].resource[6].searchParam[4].type = #token
* rest[0].resource[6].searchParam[4].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-PractitionerComplete-identifier-assigner"
* rest[0].resource[6].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[5].name = "qualification-code"
* rest[0].resource[6].searchParam[5].type = #token
* rest[0].resource[6].searchParam[5].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-PractitionerComplete-qualification-code"
* rest[0].resource[6].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[6].name = "qualification-issuer"
* rest[0].resource[6].searchParam[6].type = #token
* rest[0].resource[6].searchParam[6].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-PractitionerComplete-qualification-issuer"
* rest[0].resource[6].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[6].extension.valueCode = #SHALL

//PractitionerRole
* rest[0].resource[7].type = #PractitionerRole
* rest[0].resource[7].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-PractitionerRole"
* rest[0].resource[7].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[7].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[0].name = "endpoint"
* rest[0].resource[7].searchParam[0].type = #token
* rest[0].resource[7].searchParam[0].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-PractitionerRoleComplete-Endpoint"
* rest[0].resource[7].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[1].name = "location"
* rest[0].resource[7].searchParam[1].type = #token
* rest[0].resource[7].searchParam[1].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-PractitionerRoleComplete-location"
* rest[0].resource[7].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[2].name = "network"
* rest[0].resource[7].searchParam[2].type = #token
* rest[0].resource[7].searchParam[2].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-PractitionerRoleComplete-network"
* rest[0].resource[7].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[3].name = "organization"
* rest[0].resource[7].searchParam[3].type = #token
* rest[0].resource[7].searchParam[3].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-PractitionerRoleComplete-organization"
* rest[0].resource[7].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[4].name = "Practicioner"
* rest[0].resource[7].searchParam[4].type = #token
* rest[0].resource[7].searchParam[4].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-PractitionerRoleComplete-Practicioner"
* rest[0].resource[7].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[5].name = "role"
* rest[0].resource[7].searchParam[5].type = #token
* rest[0].resource[7].searchParam[5].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-PractitionerRoleComplete-role"
* rest[0].resource[7].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[6].name = "service"
* rest[0].resource[7].searchParam[6].type = #token
* rest[0].resource[7].searchParam[6].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-PractitionerRoleComplete-service"
* rest[0].resource[7].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[7].name = "specialty"
* rest[0].resource[7].searchParam[7].type = #token
* rest[0].resource[7].searchParam[7].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-PractitionerRoleComplete-specialty"
* rest[0].resource[7].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[7].extension.valueCode = #SHALL

//Insurance Plan
* rest[0].resource[2].type = #InsurancePlan
* rest[0].resource[2].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-InsurancePlan"
* rest[0].resource[2].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[2].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[0].name = "coverage-area"
* rest[0].resource[2].searchParam[0].type = #token
* rest[0].resource[2].searchParam[0].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-InsurancePlanComplete-coverage-area"
* rest[0].resource[2].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[1].name = "administrated-by"
* rest[0].resource[2].searchParam[1].type = #token
* rest[0].resource[2].searchParam[1].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-InsurancePlanComplete-administrated-by"
* rest[0].resource[2].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[2].name = "coverage-benefit-type"
* rest[0].resource[2].searchParam[2].type = #token
* rest[0].resource[2].searchParam[2].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-InsurancePlanComplete-coverage-benefit-type"
* rest[0].resource[2].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[3].name = "coverage-network"
* rest[0].resource[2].searchParam[3].type = #token
* rest[0].resource[2].searchParam[3].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-InsurancePlanComplete-coverage-network"
* rest[0].resource[2].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[4].name = "identifier"
* rest[0].resource[2].searchParam[4].type = #token
* rest[0].resource[2].searchParam[4].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-InsurancePlanComplete-identifier"
* rest[0].resource[2].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[5].name = "type"
* rest[0].resource[2].searchParam[5].type = #token
* rest[0].resource[2].searchParam[5].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-InsurancePlanComplete-type"
* rest[0].resource[2].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[6].name = "name"
* rest[0].resource[2].searchParam[6].type = #token
* rest[0].resource[2].searchParam[6].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-InsurancePlanComplete-name"
* rest[0].resource[2].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[7].name = "owned-by"
* rest[0].resource[2].searchParam[7].type = #token
* rest[0].resource[2].searchParam[7].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-InsurancePlanComplete-owned-by"
* rest[0].resource[2].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[7].extension.valueCode = #SHALL


//Restriction
* rest[0].resource[8].type = #Consent
* rest[0].resource[8].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-Restriction"
* rest[0].resource[8].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[8].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[0].name = "_id"
* rest[0].resource[8].searchParam[0].type = #token
* rest[0].resource[8].searchParam[0].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-Restriction-identifier"
* rest[0].resource[8].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[1].name = "_lastUpdated"
* rest[0].resource[8].searchParam[1].type = #token
* rest[0].resource[8].searchParam[1].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-Restriction-lastUpdated"
* rest[0].resource[8].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[2].name = "plan-type"
* rest[0].resource[8].searchParam[2].type = #token
* rest[0].resource[8].searchParam[2].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-Restriction-plan-type"
* rest[0].resource[8].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[3].name = "name"
* rest[0].resource[8].searchParam[3].type = #token
* rest[0].resource[8].searchParam[3].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-Restriction-name"
* rest[0].resource[8].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[4].name = "coverage-area"
* rest[0].resource[8].searchParam[4].type = #token
* rest[0].resource[8].searchParam[4].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-Restriction-coverage-area"
* rest[0].resource[8].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[5].name = "owned=by"
* rest[0].resource[8].searchParam[5].type = #token
* rest[0].resource[8].searchParam[5].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-Restriction-owned-by"
* rest[0].resource[8].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[6].name = "administrated-by"
* rest[0].resource[8].searchParam[6].type = #token
* rest[0].resource[8].searchParam[6].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-Restriction-administrated-by"
* rest[0].resource[8].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[6].extension.valueCode = #SHALL

//Validation
* rest[0].resource[9].type = #VerificationResult
* rest[0].resource[9].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-Validation"
* rest[0].resource[9].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[9].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[9].searchParam[0].name = "attestation-who"
* rest[0].resource[9].searchParam[0].type = #token
* rest[0].resource[9].searchParam[0].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-ValidationComplete-attestation-who"
* rest[0].resource[9].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[9].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[9].searchParam[1].name = "primarysource-who"
* rest[0].resource[9].searchParam[1].type = #token
* rest[0].resource[9].searchParam[1].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-ValidationComplete-primarysource-who"
* rest[0].resource[9].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[9].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[9].searchParam[2].name = "target"
* rest[0].resource[9].searchParam[2].type = #token
* rest[0].resource[9].searchParam[2].definition = "https://hl7.org/fhir/us/directory-querySearchParameter-ValidationComplete-target"
* rest[0].resource[9].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[9].searchParam[2].extension.valueCode = #SHALL




---

File: repos/HL7_SLASH_fhir-directory-query/input/fsh/cap-statement-rulesets.fsh

// Defines common operations for the server
RuleSet: Federated_Query_CapabilityStatement_Common
* status = #draft
* experimental = true
* date = "2022-02-15T07:15:00.000000-04:00"
* kind = #requirements
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1
* implementationGuide = "https://hl7.org/fhir/us/directory-query/ImplementationGuide/hl7.fhir.us.directory-query"
* rest[0].mode = #server
* rest.documentation =  "A Federated Query server **SHALL**:\n\n1. Support all profiles defined in this Implementation Guide..\n1.  Implement the RESTful behavior according to the FHIR specification.\n1. Return the following response classes:\n   - (Status 400): invalid parameter\n   - (Status 401/4xx): unauthorized request\n   - (Status 403): insufficient scope\n   - (Status 404): unknown resource\n   - (Status 410): deleted resource.\n1. Support json source formats for all Federated Query interactions.\n1. Identify the Federated Query  profiles supported as part of the FHIR `meta.profile` attribute for each instance.\n1. Support the searchParameters on each profile individually and in combination.\n\nThe Federated Query Server **SHOULD**:\n\n1. Support xml source formats for all Federated Query interactions.\n"
* rest.security.description = "1. See the [General Security Considerations](https://www.hl7.org/fhir/security.html#general) section for requirements and recommendations.\n1. A client **SHALL** reject any unauthorized requests by returning an `HTTP 401` unauthorized response code."
//endpoint connection-type, identifier, mime-type, organization, payload-type, status, usecase-standard, usecase-type, 
* rest[0].resource[0].type = #Endpoint
* rest[0].resource[0].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-Endpoint"
* rest[0].resource[0].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[0].name = "identifier"
* rest[0].resource[0].searchParam[0].type = #token
* rest[0].resource[0].searchParam[0].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-endpoint-identifier"
* rest[0].resource[0].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[1].name = "connection-type"
* rest[0].resource[0].searchParam[1].type = #token
* rest[0].resource[0].searchParam[1].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-endpoint-connection-type"
* rest[0].resource[0].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[2].name = "mime-type"
* rest[0].resource[0].searchParam[2].type = #token
* rest[0].resource[0].searchParam[2].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-endpoint-mime-type"
* rest[0].resource[0].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[3].name = "organization"
* rest[0].resource[0].searchParam[3].type = #token
* rest[0].resource[0].searchParam[3].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-endpoint-organization"
* rest[0].resource[0].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[4].name = "payload-type"
* rest[0].resource[0].searchParam[4].type = #token
* rest[0].resource[0].searchParam[4].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-endpoint-payload-type"
* rest[0].resource[0].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[5].name = "usecase-standard"
* rest[0].resource[0].searchParam[5].type = #token
* rest[0].resource[0].searchParam[5].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-endpoint-usecase-standard"
* rest[0].resource[0].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[6].name = "status"
* rest[0].resource[0].searchParam[6].type = #token
* rest[0].resource[0].searchParam[6].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-endpoint-status"
* rest[0].resource[0].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[7].name = "usecase-type"
* rest[0].resource[0].searchParam[7].type = #token
* rest[0].resource[0].searchParam[7].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-endpoint-usecase-type"
* rest[0].resource[0].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[7].extension.valueCode = #SHALL

//careteam
//search parameters: endpoint, location, name, organization, service, category
* rest[0].resource[10].type = #CareTeam
* rest[0].resource[10].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-CareTeam"
* rest[0].resource[10].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[9].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[0].name = "endpoint"
* rest[0].resource[10].searchParam[0].type = #token
* rest[0].resource[10].searchParam[0].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-CareTeam-endpoint"
* rest[0].resource[10].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[1].name = "location"
* rest[0].resource[10].searchParam[1].type = #token
* rest[0].resource[10].searchParam[1].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-CareTeam-location"
* rest[0].resource[10].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[2].name = "name"
* rest[0].resource[10].searchParam[2].type = #token
* rest[0].resource[10].searchParam[2].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-CareTeam-name"
* rest[0].resource[10].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[3].name = "organization"
* rest[0].resource[10].searchParam[3].type = #token
* rest[0].resource[10].searchParam[3].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-CareTeam-organization"
* rest[0].resource[10].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[4].name = "service"
* rest[0].resource[10].searchParam[4].type = #token
* rest[0].resource[10].searchParam[4].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-CareTeam-service"
* rest[0].resource[10].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[5].name = "category"
* rest[0].resource[10].searchParam[5].type = #token
* rest[0].resource[10].searchParam[5].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-CareTeam-category"
* rest[0].resource[10].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[5].extension.valueCode = #SHALL

//healthcare service
* rest[0].resource[1].type = #HealthcareService
* rest[0].resource[1].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-HealthcareService"
* rest[0].resource[1].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[1].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[0].name = "service-category"
* rest[0].resource[1].searchParam[0].type = #token
* rest[0].resource[1].searchParam[0].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-HealthcareService-service-category"
* rest[0].resource[1].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[1].name = "coverage-area"
* rest[0].resource[1].searchParam[1].type = #token
* rest[0].resource[1].searchParam[1].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-HealthcareService-coverage-area"
* rest[0].resource[1].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[2].name = "endpoint"
* rest[0].resource[1].searchParam[2].type = #token
* rest[0].resource[1].searchParam[2].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-HealthcareService-endpoint"
* rest[0].resource[1].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[3].name = "location"
* rest[0].resource[1].searchParam[3].type = #token
* rest[0].resource[1].searchParam[3].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-HealthcareService-location"
* rest[0].resource[1].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[4].name = "name"
* rest[0].resource[1].searchParam[4].type = #token
* rest[0].resource[1].searchParam[4].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-HealthcareService-name"
* rest[0].resource[1].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[5].name = "organization"
* rest[0].resource[1].searchParam[5].type = #token
* rest[0].resource[1].searchParam[5].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-HealthcareService-organization"
* rest[0].resource[1].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[6].name = "specialty"
* rest[0].resource[1].searchParam[6].type = #token
* rest[0].resource[1].searchParam[6].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-HealthcareService-specialty"
* rest[0].resource[1].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[7].name = "service-type"
* rest[0].resource[1].searchParam[7].type = #token
* rest[0].resource[1].searchParam[7].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-HealthcareService-service-type"
* rest[0].resource[1].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[7].extension.valueCode = #SHALL

//Location
* rest[0].resource[3].type = #Location
* rest[0].resource[3].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-location"
* rest[0].resource[3].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[3].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[0].name = "address"
* rest[0].resource[3].searchParam[0].type = #token
* rest[0].resource[3].searchParam[0].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-location-address"
* rest[0].resource[3].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[1].name = "endpoint"
* rest[0].resource[3].searchParam[1].type = #token
* rest[0].resource[3].searchParam[1].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-location-endpoint"
* rest[0].resource[3].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[2].name = "organization"
* rest[0].resource[3].searchParam[2].type = #token
* rest[0].resource[3].searchParam[2].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-location-organization"
* rest[0].resource[3].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[3].name = "physicalType"
* rest[0].resource[3].searchParam[3].type = #token
* rest[0].resource[3].searchParam[3].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-location-physicalType"
* rest[0].resource[3].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[4].name = "partOf"
* rest[0].resource[3].searchParam[4].type = #token
* rest[0].resource[3].searchParam[4].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-location-partOf"
* rest[0].resource[3].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[5].name = "type"
* rest[0].resource[3].searchParam[5].type = #token
* rest[0].resource[3].searchParam[5].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-location-type"
* rest[0].resource[3].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[5].extension.valueCode = #SHALL


//organization
* rest[0].resource[4].type = #Organization
* rest[0].resource[4].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-organization"
* rest[0].resource[4].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[4].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[0].name = "type"
* rest[0].resource[4].searchParam[0].type = #token
* rest[0].resource[4].searchParam[0].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-organization-type"
* rest[0].resource[4].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[1].name = "address"
* rest[0].resource[4].searchParam[1].type = #token
* rest[0].resource[4].searchParam[1].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-organization-address"
* rest[0].resource[4].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[2].name = "endpoint"
* rest[0].resource[4].searchParam[2].type = #token
* rest[0].resource[4].searchParam[2].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-organization-endpoint"
* rest[0].resource[4].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[3].name = "identifier"
* rest[0].resource[4].searchParam[3].type = #token
* rest[0].resource[4].searchParam[3].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-organization-identifier"
* rest[0].resource[4].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[4].name = "name"
* rest[0].resource[4].searchParam[4].type = #token
* rest[0].resource[4].searchParam[4].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-organization-name"
* rest[0].resource[4].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[5].name = "partOf"
* rest[0].resource[4].searchParam[5].type = #token
* rest[0].resource[4].searchParam[5].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-organization-partOf"
* rest[0].resource[4].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[6].name = "coverage-area"
* rest[0].resource[4].searchParam[6].type = #token
* rest[0].resource[4].searchParam[6].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-location-coverage-area"
* rest[0].resource[4].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[7].name = "Networkname"
* rest[0].resource[4].searchParam[7].type = #token
* rest[0].resource[4].searchParam[7].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-network-name"
* rest[0].resource[4].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[7].extension.valueCode = #SHALL


//OrganizationAffiliation
* rest[0].resource[5].type = #OrganizationAffiliation
* rest[0].resource[5].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation"
* rest[0].resource[5].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[5].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[0].name = "endpoint"
* rest[0].resource[5].searchParam[0].type = #token
* rest[0].resource[5].searchParam[0].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-OrganizationAffiliation-endpoint"
* rest[0].resource[5].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[1].name = "location"
* rest[0].resource[5].searchParam[1].type = #token
* rest[0].resource[5].searchParam[1].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-OrganizationAffiliation-location"
* rest[0].resource[5].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[2].name = "network"
* rest[0].resource[5].searchParam[2].type = #token
* rest[0].resource[5].searchParam[2].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-OrganizationAffiliation-network"
* rest[0].resource[5].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[3].name = "participating-organization"
* rest[0].resource[5].searchParam[3].type = #token
* rest[0].resource[5].searchParam[3].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-OrganizationAffiliation-participating-organization"
* rest[0].resource[5].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[4].name = "primary-organization"
* rest[0].resource[5].searchParam[4].type = #token
* rest[0].resource[5].searchParam[4].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-OrganizationAffiliation-primary-organization"
* rest[0].resource[5].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[5].name = "role"
* rest[0].resource[5].searchParam[5].type = #token
* rest[0].resource[5].searchParam[5].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-OrganizationAffiliation-role"
* rest[0].resource[5].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[6].name = "service"
* rest[0].resource[5].searchParam[6].type = #token
* rest[0].resource[5].searchParam[6].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-OrganizationAffiliation-service"
* rest[0].resource[5].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[7].name = "specialty"
* rest[0].resource[5].searchParam[7].type = #token
* rest[0].resource[5].searchParam[7].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-OrganizationAffiliation-specialty"
* rest[0].resource[5].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[7].extension.valueCode = #SHALL


//Practitioner
* rest[0].resource[6].type = #Practitioner
* rest[0].resource[6].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-Practitioner"
* rest[0].resource[6].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[6].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[0].name = "name"
* rest[0].resource[6].searchParam[0].type = #token
* rest[0].resource[6].searchParam[0].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-Practitioner-name"
* rest[0].resource[6].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[1].name = "family"
* rest[0].resource[6].searchParam[1].type = #token
* rest[0].resource[6].searchParam[1].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-Practitioner-family"
* rest[0].resource[6].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[2].name = "given"
* rest[0].resource[6].searchParam[2].type = #token
* rest[0].resource[6].searchParam[2].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-Practitioner-given"
* rest[0].resource[6].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[3].name = "identifier"
* rest[0].resource[6].searchParam[3].type = #token
* rest[0].resource[6].searchParam[3].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-Practitioner-identifier"
* rest[0].resource[6].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[4].name = "identifier-assigner"
* rest[0].resource[6].searchParam[4].type = #token
* rest[0].resource[6].searchParam[4].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-Practitioner-identifier-assigner"
* rest[0].resource[6].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[5].name = "qualification-code"
* rest[0].resource[6].searchParam[5].type = #token
* rest[0].resource[6].searchParam[5].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-Practitioner-qualification-code"
* rest[0].resource[6].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[6].name = "qualification-issuer"
* rest[0].resource[6].searchParam[6].type = #token
* rest[0].resource[6].searchParam[6].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-Practitioner-qualification-issuer"
* rest[0].resource[6].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[6].extension.valueCode = #SHALL

//PractitionerRole
* rest[0].resource[7].type = #PractitionerRole
* rest[0].resource[7].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-PractitionerRole"
* rest[0].resource[7].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[7].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[0].name = "endpoint"
* rest[0].resource[7].searchParam[0].type = #token
* rest[0].resource[7].searchParam[0].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-PractitionerRole-endpoint"
* rest[0].resource[7].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[1].name = "location"
* rest[0].resource[7].searchParam[1].type = #token
* rest[0].resource[7].searchParam[1].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-PractitionerRole-location"
* rest[0].resource[7].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[2].name = "network"
* rest[0].resource[7].searchParam[2].type = #token
* rest[0].resource[7].searchParam[2].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-PractitionerRole-network"
* rest[0].resource[7].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[3].name = "organization"
* rest[0].resource[7].searchParam[3].type = #token
* rest[0].resource[7].searchParam[3].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-PractitionerRole-organization"
* rest[0].resource[7].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[4].name = "Practicioner"
* rest[0].resource[7].searchParam[4].type = #token
* rest[0].resource[7].searchParam[4].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-PractitionerRole-Practicioner"
* rest[0].resource[7].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[5].name = "role"
* rest[0].resource[7].searchParam[5].type = #token
* rest[0].resource[7].searchParam[5].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-PractitionerRole-role"
* rest[0].resource[7].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[6].name = "service"
* rest[0].resource[7].searchParam[6].type = #token
* rest[0].resource[7].searchParam[6].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-PractitionerRole-service"
* rest[0].resource[7].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[7].name = "specialty"
* rest[0].resource[7].searchParam[7].type = #token
* rest[0].resource[7].searchParam[7].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-PractitionerRole-specialty"
* rest[0].resource[7].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[7].extension.valueCode = #SHALL


//Insurance Plan
* rest[0].resource[2].type = #InsurancePlan
* rest[0].resource[2].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-InsurancePlan"
* rest[0].resource[2].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[2].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[0].name = "coverage-area"
* rest[0].resource[2].searchParam[0].type = #token
* rest[0].resource[2].searchParam[0].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-InsurancePlan-coverage-area"
* rest[0].resource[2].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[1].name = "administrated-by"
* rest[0].resource[2].searchParam[1].type = #token
* rest[0].resource[2].searchParam[1].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-InsurancePlan-administrated-by"
* rest[0].resource[2].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[2].name = "coverage-benefit-type"
* rest[0].resource[2].searchParam[2].type = #token
* rest[0].resource[2].searchParam[2].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-InsurancePlan-coverage-benefit-type"
* rest[0].resource[2].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[3].name = "coverage-network"
* rest[0].resource[2].searchParam[3].type = #token
* rest[0].resource[2].searchParam[3].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-InsurancePlan-coverage-network"
* rest[0].resource[2].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[4].name = "identifier"
* rest[0].resource[2].searchParam[4].type = #token
* rest[0].resource[2].searchParam[4].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-InsurancePlan-identifier"
* rest[0].resource[2].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[5].name = "type"
* rest[0].resource[2].searchParam[5].type = #token
* rest[0].resource[2].searchParam[5].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-InsurancePlan-type"
* rest[0].resource[2].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[6].name = "name"
* rest[0].resource[2].searchParam[6].type = #token
* rest[0].resource[2].searchParam[6].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-InsurancePlan-name"
* rest[0].resource[2].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[7].name = "owned-by"
* rest[0].resource[2].searchParam[7].type = #token
* rest[0].resource[2].searchParam[7].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-InsurancePlan-owned-by"
* rest[0].resource[2].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[7].extension.valueCode = #SHALL


//Restriction
* rest[0].resource[8].type = #Consent
* rest[0].resource[8].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-Restriction"
* rest[0].resource[8].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[8].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[0].name = "_id"
* rest[0].resource[8].searchParam[0].type = #token
* rest[0].resource[8].searchParam[0].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-Restriction-identifier"
* rest[0].resource[8].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[1].name = "_lastUpdated"
* rest[0].resource[8].searchParam[1].type = #token
* rest[0].resource[8].searchParam[1].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-Restriction-lastUpdated"
* rest[0].resource[8].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[2].name = "plan-type"
* rest[0].resource[8].searchParam[2].type = #token
* rest[0].resource[8].searchParam[2].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-Restriction-plan-type"
* rest[0].resource[8].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[3].name = "name"
* rest[0].resource[8].searchParam[3].type = #token
* rest[0].resource[8].searchParam[3].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-Restriction-name"
* rest[0].resource[8].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[4].name = "coverage-area"
* rest[0].resource[8].searchParam[4].type = #token
* rest[0].resource[8].searchParam[4].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-Restriction-coverage-area"
* rest[0].resource[8].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[5].name = "owned=by"
* rest[0].resource[8].searchParam[5].type = #token
* rest[0].resource[8].searchParam[5].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-Restriction-owned-by"
* rest[0].resource[8].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[6].name = "administrated-by"
* rest[0].resource[8].searchParam[6].type = #token
* rest[0].resource[8].searchParam[6].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-Restriction-administrated-by"
* rest[0].resource[8].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[6].extension.valueCode = #SHALL

//Verification
* rest[0].resource[9].type = #VerificationResult
* rest[0].resource[9].supportedProfile[0] = "https://hl7.org/fhir/us/directory-query/StructureDefinition-NatlDirEndpointQry-Validation"
* rest[0].resource[9].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[9].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[9].searchParam[0].name = "attestation-who"
* rest[0].resource[9].searchParam[0].type = #token
* rest[0].resource[9].searchParam[0].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-Validation-attestation-who"
* rest[0].resource[9].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[9].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[9].searchParam[1].name = "primarysource-who"
* rest[0].resource[9].searchParam[1].type = #token
* rest[0].resource[9].searchParam[1].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-Validation-primarysource-who"
* rest[0].resource[9].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[9].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[9].searchParam[2].name = "target"
* rest[0].resource[9].searchParam[2].type = #token
* rest[0].resource[9].searchParam[2].definition = "https://hl7.org/fhir/us/directory-query/SearchParameter-Validation-target"
* rest[0].resource[9].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[9].searchParam[2].extension.valueCode = #SHALL




---

File: repos/HL7_SLASH_fhir-directory-query/input/fsh/cap-statements.fsh





//Health & Human Services

Instance: directory-query-health-or-human-services-endpoint
InstanceOf: CapabilityStatement
Usage: #definition
* description = "Capabilities for a Federated Query Server for Health or Human Services where endpoint search capabilities are met"
* name = "CapabilityStatementFhirDirectoryQueryHealthHumanServicesEndpoint"
* text.div = "<div></div>"
* title = "Capability Statement Health or Human Services Federated Endpoint Server"
* text.status = #generated
* insert Federated_Query_CapabilityStatement_Common
* rest.documentation =  """
A Federated Query server SHALL:

Support all profiles defined below in this Capability Statement.
Implement the RESTful behavior according to the FHIR specification.
Return the following response classes:
(Status 400): invalid parameter
(Status 401/4xx): unauthorized request
(Status 403): insufficient scope
(Status 404): unknown resource
(Status 410): deleted resource.
Support json source formats for all Federated Query interactions.
Identify the Federated Query profiles supported as part of the FHIR meta.profile attribute for each instance.
Support the searchParameters on each profile individually and in combination.
The Federated Query Server SHOULD:

Support xml source formats for all Federated Query interactions.

 Resource Type | Supported Interactions | Supported Profiles | Supported Searches | Supported `_includes` | Supported `_revincludes` | Supported Operations |
| --- | --- | --- | --- | --- | --- | --- |
| endpoint |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html) | identifier, usecase-type |     |     |     |
| healthcare Service|     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html) | service-category, coverage-area, endpoint, location, name, organization, specialty, service-type |     |     |     |
| InsurancePlan |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html) | coverage-area, administrated-by, coverage-benefit-type, coverage-network, identifier, type, name, owned-by |     |     |     |
| location |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html) | address, endpoint, organization, physicalType, partOf, type |     |     |     |
| network |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html) | coverage-area, name |     |     |     |
| Organization |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Organization.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Organization.html) | type, address, endpoint, identifier, name, partOf |     |     |     |
| OrganizationAffiliation |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html) | endpoint, location, network, participating-organization, primary-organization, role, service, specialty |     |     |     |
| Practitioner |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html) | name, family, given, identifier, identifier-assigner, qualification-code, qualification-issuer |     |     |     |
| PractitionerRole |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html) | endpoint, location, network, organization, Practicioner, role, service, specialty|     |     |     |
| Restriction |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html) | _id, _id, _lastUpdated, plan-type, name, coverage-area, owned=by, administrated-by|     |     |     |
| Validation |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html) | attestation-who, primarysource-who, target |     |     |     |
| CareTeam |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html) | endpoint, location, name, organization, service, category |     |     |     |

#### endpoint

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Endpoint.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Endpoint.html)


#### healthcareService

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html)

#### InsurancePlan

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html)

#### location

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html)

#### network

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html)

#### organization

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-organization.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-organization.html)

#### OrganizationAffiliation

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html)

#### Practitioner

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html)

#### PractitionerRole

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html)

#### Restriction

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html)

#### Validation

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html)

#### CareTeam

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html)

"""
//care team
* rest[0].resource[10].supportedProfile[0].extension.valueCode = #MAY
//endpoint
* rest[0].resource[0].supportedProfile[0].extension.valueCode = #SHALL
//healthcare service
* rest[0].resource[1].supportedProfile[0].extension.valueCode = #MAY
//Location
* rest[0].resource[3].supportedProfile[0].extension.valueCode = #SHALL
//OrganizationAffiliation
* rest[0].resource[5].supportedProfile[0].extension.valueCode = #MAY
//Practitioner
* rest[0].resource[6].supportedProfile[0].extension.valueCode = #SHALL
//PractitionerRole
* rest[0].resource[7].supportedProfile[0].extension.valueCode = #SHALL
//network
* rest[0].resource[4].supportedProfile[0].extension.valueCode = #MAY
//Insurance Plan
* rest[0].resource[2].supportedProfile[0].extension.valueCode = #MAY
//Restriction
* rest[0].resource[8].supportedProfile[0].extension.valueCode = #SHALL
//Verification
* rest[0].resource[9].supportedProfile[0].extension.valueCode = #MAY
//Organization
* rest[0].resource[9].supportedProfile[0].extension.valueCode = #SHALL



Instance: directory-query-health-or-human-services-expanded
InstanceOf: CapabilityStatement
Usage: #definition
* description = "Capabilities for a Federated Query Server for Health or Human Services where expanded search capabilities are met"
* name = "CapabilityStatementFhirDirectoryQueryHealthHumanServicesExpanded"
* text.div = "<div></div>"
* title = "Capability Statement Health or Human Services Federated Expanded Server"
* text.status = #generated
* insert Federated_Query_CapabilityStatement_Expanded
* rest.documentation =  """
 Resource Type | Supported Interactions | Supported Profiles | Supported Searches | Supported `_includes` | Supported `_revincludes` | Supported Operations |
| --- | --- | --- | --- | --- | --- | --- |
| endpoint |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html) | identifier, usecase-type |     |     |     |
| healthcare Service|     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html) | service-category, coverage-area, endpoint, location, name, organization, specialty, service-type |     |     |     |
| InsurancePlan |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html) | coverage-area, administrated-by, coverage-benefit-type, coverage-network, identifier, type, name, owned-by |     |     |     |
| location |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html) | address, endpoint, organization, physicalType, partOf, type |     |     |     |
| network |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html) | coverage-area, name |     |     |     |
| Organization |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Organization.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Organization.html) | type, address, endpoint, identifier, name, partOf |     |     |     |
| OrganizationAffiliation |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html) | endpoint, location, network, participating-organization, primary-organization, role, service, specialty |     |     |     |
| Practitioner |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html) | name, family, given, identifier, identifier-assigner, qualification-code, qualification-issuer |     |     |     |
| PractitionerRole |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html) | endpoint, location, network, organization, Practicioner, role, service, specialty|     |     |     |
| Restriction |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html) | _id, _id, _lastUpdated, plan-type, name, coverage-area, owned=by, administrated-by|     |     |     |
| Validation |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html) | attestation-who, primarysource-who, target |     |     |     |
| CareTeam |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html) | endpoint, location, name, organization, service, category |     |     |     |

#### CareTeam

Conformance Expectation:\t**SHOULD**

Supported Profiles:

* **SHOULD** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html)

#### endpoint

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Endpoint.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Endpoint.html)


#### healthcareService

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html)

#### InsurancePlan

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html)

#### location

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html)

#### network

Conformance Expectation:\t**SHOULD**

Supported Profiles:

* **SHOULD** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html)

#### organization

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-organization.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-organization.html)

#### OrganizationAffiliation

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html)

#### Practitioner

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html)

#### PractitionerRole

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html)

#### Restriction

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html)

#### Validation

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html)


"""
//care team
* rest[0].resource[10].supportedProfile[0].extension.valueCode = #SHOULD
//endpoint
* rest[0].resource[0].supportedProfile[0].extension.valueCode = #SHALL
//healthcare service
* rest[0].resource[1].supportedProfile[0].extension.valueCode = #SHALL
//Location
* rest[0].resource[3].supportedProfile[0].extension.valueCode = #SHALL
//OrganizationAffiliation
* rest[0].resource[5].supportedProfile[0].extension.valueCode = #SHALL
//Practitioner
* rest[0].resource[6].supportedProfile[0].extension.valueCode = #SHALL
//PractitionerRole
* rest[0].resource[7].supportedProfile[0].extension.valueCode = #SHALL
//network
* rest[0].resource[4].supportedProfile[0].extension.valueCode = #SHOULD
//Insurance Plan
* rest[0].resource[2].supportedProfile[0].extension.valueCode = #SHOULD
//Restriction
* rest[0].resource[8].supportedProfile[0].extension.valueCode = #SHALL
//Verification
* rest[0].resource[9].supportedProfile[0].extension.valueCode = #SHALL
//Organization
* rest[0].resource[9].supportedProfile[0].extension.valueCode = #SHALL

//Provider
Instance: directory-query-provider-endpoint
InstanceOf: CapabilityStatement
Usage: #definition
* description = "Capabilities for a Federated Query Server for a Provider where endpoint search capabilities are met"
* name = "CapabilityStatementFhirDirectoryQueryProviderEndpoint"
* text.div = "<div></div>"
* title = "Capability Statement Provider Federated Endpoint Server"
* text.status = #generated
* insert Federated_Query_CapabilityStatement_Common
* rest.documentation =  """
 Resource Type | Supported Interactions | Supported Profiles | Supported Searches | Supported `_includes` | Supported `_revincludes` | Supported Operations |
| --- | --- | --- | --- | --- | --- | --- |
| endpoint |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html) | identifier, usecase-type |     |     |     |
| healthcare Service|     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html) | service-category, coverage-area, endpoint, location, name, organization, specialty, service-type |     |     |     |
| InsurancePlan |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html) | coverage-area, administrated-by, coverage-benefit-type, coverage-network, identifier, type, name, owned-by |     |     |     |
| location |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html) | address, endpoint, organization, physicalType, partOf, type |     |     |     |
| network |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html) | coverage-area, name |     |     |     |
| Organization |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Organization.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Organization.html) | type, address, endpoint, identifier, name, partOf |     |     |     |
| OrganizationAffiliation |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html) | endpoint, location, network, participating-organization, primary-organization, role, service, specialty |     |     |     |
| Practitioner |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html) | name, family, given, identifier, identifier-assigner, qualification-code, qualification-issuer |     |     |     |
| PractitionerRole |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html) | endpoint, location, network, organization, Practicioner, role, service, specialty|     |     |     |
| Restriction |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html) | _id, _id, _lastUpdated, plan-type, name, coverage-area, owned=by, administrated-by|     |     |     |
| Validation |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html) | attestation-who, primarysource-who, target |     |     |     |
| CareTeam |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html) | endpoint, location, name, organization, service, category |     |     |     |

#### CareTeam

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html)

#### endpoint

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Endpoint.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Endpoint.html)

#### healthcareService

Conformance Expectation:\t**SHOULD**

Supported Profiles:

* **SHOULD** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html)

#### location

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html)


#### organization

Conformance Expectation:\t**MAY**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-organization.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-organization.html)

#### OrganizationAffiliation

Conformance Expectation:\t**SHOULD**

Supported Profiles:

* **SHOULD** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html)

#### Practitioner

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html)

#### PractitionerRole

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html)
#### network

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html)


#### InsurancePlan

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html)

#### Restriction

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html)

#### Validation

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html)


"""
//care team
* rest[0].resource[10].supportedProfile[0].extension.valueCode = #MAY
//endpoint
* rest[0].resource[0].supportedProfile[0].extension.valueCode = #SHALL
//healthcare service
* rest[0].resource[1].supportedProfile[0].extension.valueCode = #MAY
//Location
* rest[0].resource[3].supportedProfile[0].extension.valueCode = #SHALL
//Organization
* rest[0].resource[9].supportedProfile[0].extension.valueCode = #SHALL
//OrganizationAffiliation
* rest[0].resource[5].supportedProfile[0].extension.valueCode = #MAY
//Practitioner
* rest[0].resource[6].supportedProfile[0].extension.valueCode = #SHALL
//PractitionerRole
* rest[0].resource[7].supportedProfile[0].extension.valueCode = #SHALL
//network
* rest[0].resource[4].supportedProfile[0].extension.valueCode = #MAY
//Insurance Plan
* rest[0].resource[2].supportedProfile[0].extension.valueCode = #MAY
//Restriction
* rest[0].resource[8].supportedProfile[0].extension.valueCode = #SHALL
//Verification
* rest[0].resource[9].supportedProfile[0].extension.valueCode = #MAY

Instance: directory-query-provider-expanded
InstanceOf: CapabilityStatement
Usage: #definition
* description = "Capabilities for a Federated Query Server for a Provider where minimum search capabilities are met"
* name = "CapabilityStatementFhirDirectoryQueryProviderExpanded"
* text.div = "<div></div>"
* title = "Capability Statement Provider Federated Expanded Server"
* text.status = #generated
* insert Federated_Query_CapabilityStatement_Expanded
* rest.documentation =  """
 Resource Type | Supported Interactions | Supported Profiles | Supported Searches | Supported `_includes` | Supported `_revincludes` | Supported Operations |
| --- | --- | --- | --- | --- | --- | --- |
| endpoint |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html) | identifier, usecase-type |     |     |     |
| healthcare Service|     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html) | service-category, coverage-area, endpoint, location, name, organization, specialty, service-type |     |     |     |
| InsurancePlan |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html) | coverage-area, administrated-by, coverage-benefit-type, coverage-network, identifier, type, name, owned-by |     |     |     |
| location |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html) | address, endpoint, organization, physicalType, partOf, type |     |     |     |
| network |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html) | coverage-area, name |     |     |     |
| Organization |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Organization.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Organization.html) | type, address, endpoint, identifier, name, partOf |     |     |     |
| OrganizationAffiliation |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html) | endpoint, location, network, participating-organization, primary-organization, role, service, specialty |     |     |     |
| Practitioner |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html) | name, family, given, identifier, identifier-assigner, qualification-code, qualification-issuer |     |     |     |
| PractitionerRole |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html) | endpoint, location, network, organization, Practicioner, role, service, specialty|     |     |     |
| Restriction |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html) | _id, _id, _lastUpdated, plan-type, name, coverage-area, owned=by, administrated-by|     |     |     |
| Validation |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html) | attestation-who, primarysource-who, target |     |     |     |
| CareTeam |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html) | endpoint, location, name, organization, service, category |     |     |     |

#### CareTeam

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html)

#### endpoint

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Endpoint.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Endpoint.html)

#### healthcareService

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html)

#### location

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html)


#### organization

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-organization.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-organization.html)

#### OrganizationAffiliation

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html)

#### Practitioner

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html)

#### PractitionerRole

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html)
#### network

Conformance Expectation:\t**SHOULD**

Supported Profiles:

* **SHOULD** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html)


#### InsurancePlan

Conformance Expectation:\t**SHOULD**

Supported Profiles:

* **SHOULD** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html)

#### Restriction

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html)

#### Validation

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html)


"""
//care team
* rest[0].resource[10].supportedProfile[0].extension.valueCode = #MAY
//endpoint
* rest[0].resource[0].supportedProfile[0].extension.valueCode = #SHALL
//healthcare service
* rest[0].resource[1].supportedProfile[0].extension.valueCode = #SHALL
//Location
* rest[0].resource[3].supportedProfile[0].extension.valueCode = #SHALL
//Organization
* rest[0].resource[9].supportedProfile[0].extension.valueCode = #SHALL
//OrganizationAffiliation
* rest[0].resource[5].supportedProfile[0].extension.valueCode = #SHALL
//Practitioner
* rest[0].resource[6].supportedProfile[0].extension.valueCode = #SHALL
//PractitionerRole
* rest[0].resource[7].supportedProfile[0].extension.valueCode = #SHALL
//network
* rest[0].resource[4].supportedProfile[0].extension.valueCode = #SHOULD
//Insurance Plan
* rest[0].resource[2].supportedProfile[0].extension.valueCode = #SHOULD
//Restriction
* rest[0].resource[8].supportedProfile[0].extension.valueCode = #SHALL
//Verification
* rest[0].resource[9].supportedProfile[0].extension.valueCode = #MAY


//Human Services
Instance: directory-query-human-services-endpoint
InstanceOf: CapabilityStatement
Usage: #definition
* description = "Capabilities for a Federated Query Server for Health Services where endpoint search capabilities are met"
* name = "CapabilityStatementFhirDirectoryQueryHumanServicesEndpoint"
* text.div = "<div></div>"
* title = "Capability Statement Human Services Federated Endpoint Server"
* text.status = #generated
* insert Federated_Query_CapabilityStatement_Common
* rest.documentation =  """
 Resource Type | Supported Interactions | Supported Profiles | Supported Searches | Supported `_includes` | Supported `_revincludes` | Supported Operations |
| --- | --- | --- | --- | --- | --- | --- |
| endpoint |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html) | identifier, usecase-type |     |     |     |
| healthcare Service|     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html) | service-category, coverage-area, endpoint, location, name, organization, specialty, service-type |     |     |     |
| InsurancePlan |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html) | coverage-area, administrated-by, coverage-benefit-type, coverage-network, identifier, type, name, owned-by |     |     |     |
| location |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html) | address, endpoint, organization, physicalType, partOf, type |     |     |     |
| network |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html) | coverage-area, name |     |     |     |
| Organization |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Organization.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Organization.html) | type, address, endpoint, identifier, name, partOf |     |     |     |
| OrganizationAffiliation |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html) | endpoint, location, network, participating-organization, primary-organization, role, service, specialty |     |     |     |
| Practitioner |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html) | name, family, given, identifier, identifier-assigner, qualification-code, qualification-issuer |     |     |     |
| PractitionerRole |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html) | endpoint, location, network, organization, Practicioner, role, service, specialty|     |     |     |
| Restriction |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html) | _id, _id, _lastUpdated, plan-type, name, coverage-area, owned=by, administrated-by|     |     |     |
| Validation |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html) | attestation-who, primarysource-who, target |     |     |     |
| CareTeam |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html) | endpoint, location, name, organization, service, category |     |     |     |

#### CareTeam

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html)

#### endpoint

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Endpoint.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Endpoint.html)

#### healthcareService

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html)

#### location

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html)


#### organization

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-organization.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-organization.html)

#### OrganizationAffiliation

Conformance Expectation:\t**SHOULD**

Supported Profiles:

* **SHOULD** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html)

#### Practitioner

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html)

#### PractitionerRole

Conformance Expectation:\t**SHOULD**

Supported Profiles:

* **SHOULD** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html)
#### network

Conformance Expectation:\t**SHOULD**

Supported Profiles:

* **SHOULD** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html)


#### InsurancePlan

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html)

#### Restriction

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html)

#### Validation

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html)


"""
//care team
* rest[0].resource[10].supportedProfile[0].extension.valueCode = #MAY
//endpoint
* rest[0].resource[0].supportedProfile[0].extension.valueCode = #SHALL
//healthcare service
* rest[0].resource[1].supportedProfile[0].extension.valueCode = #SHALL
//Location
* rest[0].resource[3].supportedProfile[0].extension.valueCode = #SHALL
//Organization
* rest[0].resource[9].supportedProfile[0].extension.valueCode = #SHALL
//OrganizationAffiliation
* rest[0].resource[5].supportedProfile[0].extension.valueCode = #SHOULD
//Practitioner
* rest[0].resource[6].supportedProfile[0].extension.valueCode = #MAY
//PractitionerRole
* rest[0].resource[7].supportedProfile[0].extension.valueCode = #SHOULD
//network
* rest[0].resource[4].supportedProfile[0].extension.valueCode = #SHOULD
//Insurance Plan
* rest[0].resource[2].supportedProfile[0].extension.valueCode = #MAY
//Restriction
* rest[0].resource[8].supportedProfile[0].extension.valueCode = #SHALL
//Verification
* rest[0].resource[9].supportedProfile[0].extension.valueCode = #MAY

Instance: directory-query-human-services-expanded
InstanceOf: CapabilityStatement
Usage: #definition
* description = "Capabilities for a Federated Query Server for Health Services where expanded search capabilities are met"
* name = "CapabilityStatementFhirDirectoryQueryHumanServicesExpanded"
* text.div = "<div></div>"
* title = "Capability Statement Human Services Federated expanded Server"
* text.status = #generated
* insert Federated_Query_CapabilityStatement_Common
* rest.documentation =  """
 Resource Type | Supported Interactions | Supported Profiles | Supported Searches | Supported `_includes` | Supported `_revincludes` | Supported Operations |
| --- | --- | --- | --- | --- | --- | --- |
| endpoint |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html) | identifier, usecase-type |     |     |     |
| healthcare Service|     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html) | service-category, coverage-area, endpoint, location, name, organization, specialty, service-type |     |     |     |
| InsurancePlan |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html) | coverage-area, administrated-by, coverage-benefit-type, coverage-network, identifier, type, name, owned-by |     |     |     |
| location |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html) | address, endpoint, organization, physicalType, partOf, type |     |     |     |
| network |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html) | coverage-area, name |     |     |     |
| Organization |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Organization.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Organization.html) | type, address, endpoint, identifier, name, partOf |     |     |     |
| OrganizationAffiliation |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html) | endpoint, location, network, participating-organization, primary-organization, role, service, specialty |     |     |     |
| Practitioner |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html) | name, family, given, identifier, identifier-assigner, qualification-code, qualification-issuer |     |     |     |
| PractitionerRole |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html) | endpoint, location, network, organization, Practicioner, role, service, specialty|     |     |     |
| Restriction |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html) | _id, _id, _lastUpdated, plan-type, name, coverage-area, owned=by, administrated-by|     |     |     |
| Validation |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html) | attestation-who, primarysource-who, target |     |     |     |
| CareTeam |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html) | endpoint, location, name, organization, service, category |     |     |     |

#### CareTeam

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html)

#### endpoint

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Endpoint.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Endpoint.html)

#### healthcareService

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html)

#### location

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html)


#### organization

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-organization.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-organization.html)

#### OrganizationAffiliation

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html)

#### Practitioner

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html)

#### PractitionerRole

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html)
#### network

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html)


#### InsurancePlan

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html)

#### Restriction

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html)

#### Validation

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html)


"""
//care team
* rest[0].resource[10].supportedProfile[0].extension.valueCode = #MAY
//endpoint
* rest[0].resource[0].supportedProfile[0].extension.valueCode = #SHALL
//healthcare service
* rest[0].resource[1].supportedProfile[0].extension.valueCode = #SHALL
//Location
* rest[0].resource[3].supportedProfile[0].extension.valueCode = #SHALL
//Organization
* rest[0].resource[9].supportedProfile[0].extension.valueCode = #SHALL
//OrganizationAffiliation
* rest[0].resource[5].supportedProfile[0].extension.valueCode = #SHALL
//Practitioner
* rest[0].resource[6].supportedProfile[0].extension.valueCode = #MAY
//PractitionerRole
* rest[0].resource[7].supportedProfile[0].extension.valueCode = #SHALL
//network
* rest[0].resource[4].supportedProfile[0].extension.valueCode = #SHALL
//Insurance Plan
* rest[0].resource[2].supportedProfile[0].extension.valueCode = #SHALL
//Restriction
* rest[0].resource[8].supportedProfile[0].extension.valueCode = #MAY
//Verification
* rest[0].resource[9].supportedProfile[0].extension.valueCode = #MAY


Instance: directory-query-basic-endpoint
InstanceOf: CapabilityStatement
Usage: #definition
* description = "Capabilities for a basic Query Server for Health Services where Endpoint search capabilities are met"
* name = "CapabilityStatementFhirDirectoryQueryBasicEndpoint"
* text.div = "<div></div>"
* title = "Capability Statement Basic Federated Endpoint Server"
* text.status = #generated
* insert Federated_Query_CapabilityStatement_Common
* rest.documentation =  """
 Resource Type | Supported Interactions | Supported Profiles | Supported Searches | Supported `_includes` | Supported `_revincludes` | Supported Operations |
| --- | --- | --- | --- | --- | --- | --- |
| endpoint |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html) | identifier, usecase-type |     |     |     |
| healthcare Service|     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html) | service-category, coverage-area, endpoint, location, name, organization, specialty, service-type |     |     |     |
| InsurancePlan |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html) | coverage-area, administrated-by, coverage-benefit-type, coverage-network, identifier, type, name, owned-by |     |     |     |
| location |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html) | address, endpoint, organization, physicalType, partOf, type |     |     |     |
| network |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html) | coverage-area, name |     |     |     |
| Organization |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Organization.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Organization.html) | type, address, endpoint, identifier, name, partOf |     |     |     |
| OrganizationAffiliation |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html) | endpoint, location, network, participating-organization, primary-organization, role, service, specialty |     |     |     |
| Practitioner |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html) | name, family, given, identifier, identifier-assigner, qualification-code, qualification-issuer |     |     |     |
| PractitionerRole |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html) | endpoint, location, network, organization, Practicioner, role, service, specialty|     |     |     |
| Restriction |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html) | _id, _id, _lastUpdated, plan-type, name, coverage-area, owned=by, administrated-by|     |     |     |
| Validation |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html) | attestation-who, primarysource-who, target |     |     |     |
| CareTeam |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html) | endpoint, location, name, organization, service, category |     |     |     |

#### CareTeam

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html)

#### endpoint

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Endpoint.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Endpoint.html)

#### healthcareService

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html)

#### location

Conformance Expectation:\t**SHOULD**

Supported Profiles:

* **SHOULD** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html)


#### organization

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-organization.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-organization.html)

#### OrganizationAffiliation
Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html)

#### Practitioner

Conformance Expectation:\t**SHOULD**

Supported Profiles:

* **SHOULD** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html)

#### PractitionerRole

Conformance Expectation:\t**SHOULD**

Supported Profiles:

* **SHOULD** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html)
#### network

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html)


#### InsurancePlan

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html)

#### Restriction

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html)

#### Validation

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html)


"""
//care team
* rest[0].resource[10].supportedProfile[0].extension.valueCode = #MAY
//endpoint
* rest[0].resource[0].supportedProfile[0].extension.valueCode = #SHALL
//healthcare service
* rest[0].resource[1].supportedProfile[0].extension.valueCode = #MAY
//Location
* rest[0].resource[3].supportedProfile[0].extension.valueCode = #SHOULD
//Organization
* rest[0].resource[9].supportedProfile[0].extension.valueCode = #SHALL
//OrganizationAffiliation
* rest[0].resource[5].supportedProfile[0].extension.valueCode = #MAY
//Practitioner
* rest[0].resource[6].supportedProfile[0].extension.valueCode = #SHOULD
//PractitionerRole
* rest[0].resource[7].supportedProfile[0].extension.valueCode = #SHOULD
//network
* rest[0].resource[4].supportedProfile[0].extension.valueCode = #MAY
//Insurance Plan
* rest[0].resource[2].supportedProfile[0].extension.valueCode = #MAY
//Restriction
* rest[0].resource[8].supportedProfile[0].extension.valueCode = #MAY
//Verification
* rest[0].resource[9].supportedProfile[0].extension.valueCode = #MAY


Instance: directory-query-basic-expanded
InstanceOf: CapabilityStatement
Usage: #definition
* description = "Capabilities for a Basic Federated Query Server for where expanded search capabilities are met"
* name = "CapabilityStatementFhirDirectoryQueryBasicExpanded"
* text.div = "<div></div>"
* title = "Capability Statement Basic Federated Expanded Server"
* text.status = #generated
* insert Federated_Query_CapabilityStatement_Expanded
* rest.documentation =  """
 Resource Type | Supported Interactions | Supported Profiles | Supported Searches | Supported `_includes` | Supported `_revincludes` | Supported Operations |
| --- | --- | --- | --- | --- | --- | --- |
| endpoint |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html) | identifier, usecase-type |     |     |     |
| healthcare Service|     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html) | service-category, coverage-area, endpoint, location, name, organization, specialty, service-type |     |     |     |
| InsurancePlan |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html) | coverage-area, administrated-by, coverage-benefit-type, coverage-network, identifier, type, name, owned-by |     |     |     |
| location |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html) | address, endpoint, organization, physicalType, partOf, type |     |     |     |
| network |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html) | coverage-area, name |     |     |     |
| Organization |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Organization.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Organization.html) | type, address, endpoint, identifier, name, partOf |     |     |     |
| OrganizationAffiliation |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html) | endpoint, location, network, participating-organization, primary-organization, role, service, specialty |     |     |     |
| Practitioner |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html) | name, family, given, identifier, identifier-assigner, qualification-code, qualification-issuer |     |     |     |
| PractitionerRole |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html) | endpoint, location, network, organization, Practicioner, role, service, specialty|     |     |     |
| Restriction |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html) | _id, _id, _lastUpdated, plan-type, name, coverage-area, owned=by, administrated-by|     |     |     |
| Validation |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html) | attestation-who, primarysource-who, target |     |     |     |
| CareTeam |     | [http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html) | endpoint, location, name, organization, service, category |     |     |     |

#### CareTeam

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-CareTeam.html)

#### endpoint

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Endpoint.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Endpoint.html)

#### healthcareService

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-HealthcareService.html)

#### location

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Location.html)


#### organization

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-organization.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-organization.html)

#### OrganizationAffiliation
Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html)

#### Practitioner

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Practitioner.html)

#### PractitionerRole

Conformance Expectation:\t**SHALL**

Supported Profiles:

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html)
#### network

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Network.html)


#### InsurancePlan

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html)

#### Restriction

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Restriction.html)

#### Validation

Conformance Expectation:\t**MAY**

Supported Profiles:

* **MAY** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDir-Verification.html)


"""
//care team
* rest[0].resource[10].supportedProfile[0].extension.valueCode = #MAY
//endpoint
* rest[0].resource[0].supportedProfile[0].extension.valueCode = #SHALL
//healthcare service
* rest[0].resource[1].supportedProfile[0].extension.valueCode = #MAY
//Location
* rest[0].resource[3].supportedProfile[0].extension.valueCode = #SHALL
//Organization
* rest[0].resource[9].supportedProfile[0].extension.valueCode = #SHALL
//OrganizationAffiliation
* rest[0].resource[5].supportedProfile[0].extension.valueCode = #MAY
//Practitioner
* rest[0].resource[6].supportedProfile[0].extension.valueCode = #SHALL
//PractitionerRole
* rest[0].resource[7].supportedProfile[0].extension.valueCode = #SHALL
//network
* rest[0].resource[4].supportedProfile[0].extension.valueCode = #MAY
//Insurance Plan
* rest[0].resource[2].supportedProfile[0].extension.valueCode = #MAY
//Restriction
* rest[0].resource[8].supportedProfile[0].extension.valueCode = #MAY
//Verification
* rest[0].resource[9].supportedProfile[0].extension.valueCode = #MAY

---

File: repos/HL7_SLASH_fhir-directory-query/input/fsh/CodeSystems.fsh

/*
CodeSystem: ConsentCS
Title: "National Healthcare Directory Consent"
Description:  "Codes for use in defining access levels for sharing subsets of constrained content (as an example)"
* #protect "Protect" "The data (or subset of data) provided should be only made available to the people, or types of people explicitly declared in the consent."
* ^caseSensitive = true
*/
CodeSystem: ConsentScopeCS
Title: "National Healthcare Directory ConsentScopeCodes Code System"
Description:  "This value set includes the four Consent scope codes."
* ^experimental = false
* #adr "Advanced Care Directive" "Actions to be taken if they are no longer able to make decisions for themselves."
* #research "Research" "Consent to participate in research protocol and information sharing required."
* #patient-privacy "Privacy Consent" "Agreement to collect, access, use or disclose (share) information."
* #treatment "Treatment" "Consent to undergo a specific treatment."
* ^caseSensitive = true


CodeSystem: IgTypeCS
Title: "IG Type Code System"
Description: "IG Type"
* ^experimental = false
* #FHIR	"FHIR"
* #direct	"Direct"
* ^caseSensitive = true

CodeSystem: EndpointTypeCS
Title: "Endpoint Type Code System"
Description: "Endpoint Type"
* ^experimental = false
* #FHIR	"FHIR Server"
* #OpEndpoint	"Operation Endpoint"
* #CDS	"CDS Hooks"
* ^caseSensitive = true

CodeSystem: TrustFrameworkTypeCS
Title: "Trust FrameworkType Code System"
Description: "Trust Framework Type"
* ^experimental = false
* #DirectTrust	"Direct Trust"
* #CareQuality	"Carequality"
* #Commonwell	"Commonwell"
* #TEFCA	"TEFCA"
* #PayerToPayer	"Payer to Payer Trust Network"
* #Exchange	"Exchange Required by Federal Regulations"
* #PCDH "Patient Centered Data Home"
* ^caseSensitive = true

CodeSystem: AcceptingPatientsCS
Title: "Accepting Patients Codes Code System"
Description: "Codes to identify if the practice is accepting new patients"
* ^experimental = false
* #nopt	"Not Accepting" "Not accepting patients"
* #newpt	"Accepting" "Accepting patients"
* #existptonly	"Accepting existing patients" "Accepting existing patients"
* #existptfam	"Accepting existing patients and their families" "Accepting existing patients and members of their families"
* ^caseSensitive = true

CodeSystem: AccessibilityCS
Title: "Accessibility Code System"
Description: "General categories of accommodations available."
* ^experimental = false
* #cultcomp	"Cultural competence"	"Provides services that meet the social, cultural, and linguistic needs of persons."
* #handiaccess	"handicap accessible"	"Provides access to persons with disabilities."
* #adacomp	"ADA compliant"	"Provides access which complies with the Americans with Disabilities Act and/or amendments."
* #pubtrans	"public transit options"	"Provides access using public transportation modes."
* #anssrvc	"answering service"	"Provides capability to communicate when intended recipient is not immediately available."
* #cognitive	"cognitive"	"Provides services for cognitively impaired persons."
* #mobility	"mobility"	"Provides services for mobility impaired persons."
* ^caseSensitive = true

CodeSystem: DeliveryMethodCS
Title: "Delivery Methods Code System"
Description: "Categories of healthcare service delivery methods."
* ^experimental = false
* #virtual	"Virtual" "Delivery not requiring provider and patient to be physically co-located, such as tele-medicine"
* #physical	"Physical" "Traditional delivery requiring provider and patient to be physically co-located."
* ^caseSensitive = true

CodeSystem: VirtualModalitiesCS
Title: "Virtual Modalities Code System"
Description: "Categories of virtual service delivery modalities."
* ^experimental = false
* #phone	"phone" "Voice Telephone"
* #video	"video chat" "Video Chat"
* #tdd	"TDD" "Telecommunications Device for the Deaf"
* #sms	"SMS" "SMS Text Messaging"
* #app  "App" "Mobile Application"
* #web  "Website" "Website accessed through browser"
* ^caseSensitive = true

CodeSystem:  EndpointConnectionTypeCS
  Title: "Endpoint Connection Types (additional) Code System"
  Description:  "Extension codes for http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
* ^experimental = false
* #hl7-fhir-opn "HL7 FHIR Operation" "Interact with a FHIR server interface using FHIR's RESTful interface using an operation other than messaging. For details on its version/capabilities you should connect the value in Endpoint.address and retrieve the FHIR CapabilityStatement."
* #rest-non-fhir "REST (not FHIR)" "Interact with a server using HTTP/REST but not FHIR.  Should be used for web portals."
* ^caseSensitive = true
 

CodeSystem:  EndpointPayloadTypeCS
  Title: "Endpoint Payload Types Code System"
  Description:  "Endpoint Payload Types are constrained to NA (Not Applicable) as part of this IG"
* ^experimental = false
* #NA "Not Applicable" "Not Applicable"
* ^caseSensitive = true
 
 CodeSystem: HealthcareServiceCategoryCS
 Title: "Healthcare Service Category Code System"
 Description: "Broad categories of healthcare services being performed or delivered"
* ^experimental = false
* #behav "Behavioral Health" "Services related to the promotion of mental health, resilience and wellbeing; the treatment of mental and substance use disorders; and the support of those who experience and/or are in recovery from these conditions, along with their families and communities."
* #dent "Dental" "Services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the mouth."
* #dme "DME/Medical Supplies" "Health care consumables or equipments supplied to patients"
* #emerg "Emergency care" "Health care services rendered within a designated emergency care facility, for point-in-time evaluation and/or treatment any medical condition such that a prudent layperson possessing an average knowledge of medicine and health, believes that immediate unscheduled medical care is required."
* #group "Medical Group" "Health care services rendered by a group of people, e.g. a group of Physicians."
* #home "Home Health"	"Health care services delivered to patients within their residence rather than a clinical setting; usually provided by nurses, home health aides, and other professionals on a regularly scheduled visit."
* #hosp "Hospital" "Health care services rendered within a hospital or other inpatient setting providng patient treatment with specialzed medical and nursing staff and medical equipment."
* #lab "Laboratory" "Pathology and laboratory testing on clinical specimenst to obtain informaion about the health of a paeint to aid in diagnosis, treatment and prevention of disease."
* #other "Other" "Other"
* #outpat "Clinic or Outpatient Facility" "Health care services rendered in an outpatient facility, e.g. medical procedures, surgeries, etc."
* #prov "Medical Provider"  "Health care services rendered by a person, e.g. Physician."
* #pharm "Pharmacy" "Services related to the storage, compounding, dispensing and sale of drugs."
* #trans "Transportation" "Services which transport patients to or from a medical facility, e.g., ambulance."
* #urg "Urgent Care" "Unscheduled health care services which provide for point-in-time evaluation or treatment of a non-life-threatening medical condition."
* #vis "Vision" "Services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the eyes."
* ^caseSensitive = true

CodeSystem: InsuranceProductTypeCS
Title: "Insurance Product Type Code System"
Description:  "A distinct package of health insurance coverage benefits that are offered using a particular product network type."
* ^experimental = false
* #commppo "Commercial PPO"  "Health insurance provided through a Preferred Provider Organization (PPO)."
* #commhdhp "Commercial HDHP" "Health insurance provided through a High Deductible Health Plan (HDHP)."
* #commpos "Commercial POS" "Health insurance provided through a Point-of-Service (POS) Plan."
* #commhmo "Commercial HMO" "Health insurance provided through a Health Maintenance Organization (HMO)."
* #commepo "Commercial EPO" "Health insurance provided through a Exclusive Provider Organization(EPO)."
* #medi "Medicaid" "Health insurance provided to eligible adults and children under the Federal Medicaid program"
* #medihmo "Medicaid HMO" "Health insurance provided to eligible adults and children under the Federal Medicaid program through a Health Maintenance Organization (HMO)."
* #mediadv "Medicare Advantage" "Health insurance provided by a private company that contracts with Medicare to provide all Medicare Part A and Part B benefits."
* #mediadvhmo "Medicare Advantage HMO" "Health insurance offered by a private company that contracts with Medicare to provide all Medicare Part A and Part B benefits through a Health Maintenance Organization (HMO)."
* #media "Medicare Part A" "Health insurance provided under the Federal Medicare program covering inpatient hospital stays, care in a skilled nursing facility, hospice care, and some home health care."
* #medib "Medicare Part B" "Health insurance provided under the Federal Medicfare program covering certain doctors' services, outpatient care, medical supplies, and preventive services."
* #medid "Medicare Part D" "Health insurance provided under the Federal Medicare program covering prescription drugs."
* #mediab "Medicare A/B" "Health insurance provided under the Federal Medicare program covering inpatient hospital stays, care in a skilled nursing facility, hospice care, some home health care, certain doctors' services, outpatient care, medical supplies, and preventive services."
* #qhp "Qualified Health Plan" "Health insurance provided through and certified by the Health Insurance Marketplace that provides essential health benefits (EHBs), follows established limits on cost sharing, and meets other requirements outlined within the application process."
* #ihs "Indian Health Service" "Health care program provided to United States American Indians and Alaska Natives."
* #fep "Federal Employee Program" "Health insurance provided to employees of the Federal government."
* #tri "TRICARE" "Health care program provided to uniformed service members, retirees, and their families around the world."
* #va "Veterans Affairs Plan"  "Health care program provided to eligible veterans."
* #dent "Dental Plan" "Health insurance provided to cover services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral cavity."
* #denthmo "Dental HMO" "Health insurance provided to cover services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral cavity provided through a Health Maintenance Organization (HMO)."
* #vis "Vision Plan" "Health insurance provided to cover services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the eyes."
* #vishmo "Vision HMO" "Health insurance provided to cover services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the eyes provided through a Health Maintenance Organization (HMO)."
* ^caseSensitive = true

CodeSystem: InsurancePlanTypeCS
Title: "Insurance Plan Type Code System"
Description:  "Categories of cost-sharing used by plans"
* ^experimental = false
* #platinum "Platinum-QHP" "Plan with highest monthly premium and lowest costs when you need care	A Qualified Health Plan with the highest monthly premiums and smallest out-of-pocket costs for the member in comparison to other metal-category plans"
* #gold "Gold-QHP" "Plan with high monthly premium and low costs when you need care	A Qualified Health Plan with the higher monthly premiums and smaller out-of-pocket costs for the member in comparison to other metal-category plans"
* #silver "Silver-QHP" "Plan with moderate monthly premium and moderate costs when you need care	A Qualified Health Plan with the lower monthly premiums and larger out-of-pocket costs for the member in comparison to other metal-category plans"
* #bronze "Bronze-QHP" "Plan with lowest monthly premium and highest costs when you need care	A Qualified Health Plan with the lowest monthly premiums and largest out-of-pocket costs for the member in comparison to other metal-category plans"
* #catastrophic "Catastrophic-QHP" "A plan with low monthly premiums and very high deductibles and are available only to those under 30 or with certain special exemptions."
* #lowdeductible "Low Deductible" "A plan that requires the insured to pay out of pocket a smaller proportion of incurred health care costs than a traditional insurance plan."
* #highdeductible "High Deductible" "A plan that requires the insured to pay out of pocket a larger proportion of incurred health care costs than a traditional insurance plan."
* #catastrophicplan "Catastrophic Plan" "A plan that requires the insured to pay out of pocket a much larger proportion of incurred health care costs than a traditional insurance plan."
* ^caseSensitive = true

CodeSystem:  OrgTypeCS
  Title: "Organization Type Code System"
  Description:  "Categories of organizations based on criteria in provider directories."
* ^experimental = false
* #fac "Facility" "A physical healthcare facility."
* #prvgrp "Provider Group" "A healthcare provider entity"
* #payer "Payer" "A healthcare payer."
* #atyprv "Atypical Provider" "Providers that do not provide healthcare"
* #bus "Non-Healthcare Business" "An organization that does not meet the definitions of a Healthcare or Atypical Provider, and is not a payer or healthcare facility"
* #ntwk "Network" "A healthcare provider insurance network"
* ^caseSensitive = true


CodeSystem: QualificationStatusCS
Title: "Qualification Status Code System"
Description: "The state indicating if a qualification is currently valid."
* ^experimental = false
* #active "active" "The credential may be considered valid for use."
* #inactive "inactive" "The credential may not be considered valid for use."
* #issiner "issued in error" "The credential was mistakenly assigned and should not be considered valid for use."
* #revoked "revoked" "The credential was revoked by the issuing organization and should not be considered valid for use."
* #pending "pending" "The credential has not been officially assigned. It may or may not be considered valid for use."
* #unknown "unknown" "The status of this credential is unknown. It may or may not be considered valid for use."
* ^caseSensitive = true

CodeSystem:  LanguageProficiencyCS
Title: "Language Proficiency Code System"
Description: "Codes for documenting spoken language proficiency based on the Interagency Language Roundtable scale of abilities to communicate in a language."
* ^experimental = false
* #00	"No proficiency"	"Unable to function in the spoken language."
//* #06	"Memorized proficiency"	"Able to satisfy immediate needs using rehearsed utterances. Shows little real autonomy of expression, flexibility or spontaneity."
* #10	"Elementary proficiency"	"Able to satisfy minimum courtesy requirements and maintain very simple face-to-face conversations on familiar topics. A native speaker must often use slowed speech, repetition, paraphrase, or a combination of these to be understood by this individual."
//* #16	"Elementary proficiency, plus"	"Can initiate and maintain predictable face-to-face conversations and satisfy limited social demands."
* #20	"Limited working proficiency"	"Able to satisfy routine social demands and limited work requirements."
//* #26	"Limited working proficiency, plus"	"Able to satisfy most work requirements with language usage that is often, but not always, acceptable and effective."
* #30	"General professional proficiency"	"Able to speak the language with sufficient structural accuracy and vocabulary to participate effectively in most formal and informal conversations in practical, social and professional topics."
//* #36	"General professional proficiency, plus"	"Is often able to use the language to satisfy professional needs in a wide range of sophisticated and demanding tasks."
* #40	"Advanced professional proficiency"	"Able to use the language fluently and accurately on all levels normally pertinent to professional needs."
//* #46	"Advanced professional proficiency, plus"	"Speaking proficiency is regularly superior in all respects, usually equivalent to that of a well educated, highly articulate native speaker."
* #50	"Functional native proficiency"	"Speaking proficiency is functionally equivalent to that of a highly articulate well-educated native speaker and reflects the cultural standards of the country where the language is natively spoken."
* ^caseSensitive = true

CodeSystem: ProviderRoleCS
Title: "Provider Role Codes Code System"
Description: "A capability that an individual, group, or organization is acknowledged to have in a payer network."
* ^experimental = false
// These are Payer Roles from Gail
* #ap "Admitting Privileges" "Practitioner has admitting privileges at hospital (organization)"
* #apn "Advanced Practice Nursing Providers" "Advanced Practice Nursing Providers"
* #at "Athletic Trainer" "Athletic Trainer"
* #au "Audiologist" "Audiologist"
* #bh "Behavioral Health & Social Service Providers" "Behavioral Health & Social Service Providers"
* #ba "Board Certified Behavior Analyst" "Board Certified Behavior Analyst"
* #bt "Member Of" "Has a relationship of participation with.  This does NOT represent a member of an insurance plan, but other types of membership such as membership of physician in the AMA"    // Added 7/15/2020
* #cnw "Certified Nurse Midwife" "Certified Nurse Midwife"
* #crnp "Certified Registered Nurse Practitioner" "Certified Registered Nurse Practitioner"
* #ch "Chiropractor" "Chiropractor"
* #cs "Christian Science Practitioner" "Christian Science Practitioner"
* #co "Counselor" "Counselor"
* #dp "Dental Provider" "Dental Provider"
* #de "Dentist" "Dentist"
* #drr "Developmental, Rehabilitative and Restorative Service Providers" "Developmental, Rehabilitative and Restorative Service Providers"
* #dn "Dietary and Nutritional Service Provider" "Dietary and Nutritional Service Provider"
* #om "Doctor of Oriental Medicine" "Doctor of Oriental Medicine"
* #em "Emergency Medical Service Provider" "Emergency Medical Service Provider"
* #ho "Homeopath" "Homeopath"
* #lpn "Licensed Practical Nurse" "Licensed Practical Nurse"
* #mt "Marriage/Family Therapist" "Marriage/Family Therapist"
* #ma "Massage Therapist" "Massage Therapist"
* #nh "Naprapath" "Naprapath"
* #na "Naturopath" "Naturopath"
* #nu "Nursing Service Related Providers" "Nursing Service Related Providers"
* #ot "Occupational Therapist" "Occupational Therapist"
* #op "Optician" "Optician"
* #oo "Optometrist" "Optometrist"
* #os "Other Service Provider" "Other Service Provider"
* #rx "Pharmacy Service Providers" "Pharmacy Service Providers"
* #pt "Physical Therapist" "Physical Therapist"
* #ph "Physician" "Physician"
* #pa "Physician Assistant" "Physician Assistant"
* #po "Podiatrist" "Podiatrist"
* #py "Psychologist" "Psychologist"
* #rn "Registered Nurse" "Registered Nurse"
* #rt "Respiratory Therapist" "Respiratory Therapist"
* #sw "Social Worker" "Social Worker"
* #sp "Speech Language Pathologist" "Speech Language Pathologist"
* #sh "Speech, Language and Hearing Service Providers" "Speech, Language and Hearing Service Providers"
* #te "Technologists, Technicians and Other Technical Service Providers" "Technologists, Technicians and Other Technical Service Providers"
* ^caseSensitive = true




CodeSystem: OrgAliasTypeCS
Title: "Organization Alias Type Code System"
Description: "The state indicating if an Organization has an alias."
* ^experimental = false
* #legalalternative "Legal Alternative" "A pseudonym used by an organization to perform their business under a name that differs from the registered, legal name of the business, also known as a trade name, business name, or 'doing business as' (d.b.a.)."
* #historical "Historical" "Any previously used legal or trade names used by an organization since the creation of the business. Could include names used by independent organizations before a merger or other reorganization."
* ^caseSensitive = true 

CodeSystem: ValidationTypeCS
Title: "Validation Type Code System"
Description: "This code system contains codes for documenting the attributes of the FHIR resource Validation to reflect the business process of validating information in a Healthcare Directory.."
* ^experimental = false
* #noneneeded	"None needed"	"No validation needed/planned for this resource or element."
* #initial	"Initial"	"Validation is only needed after initial attestation. For elements that typically do not change such as 'medical school attended and graduation date'."
* #periodic	"Periodic"	"Validation is needed after initial attestation and on a periodic basis. E.g. elements that expire or may change such as licensure."
* #attested	"Attested"	"Indicates the element or resource has only been attested."
* #validated	"Validated"	"Indicates the element or resource has been successfully validated."
* #inprocess	"Inprocess"	"Indicates the element or resource is currently being validated."
* #reqreval	"Required revalidation"	"Indicates the element or resource has passed an expiration date and requires revalidation."
* #valfailed	"Valiation failed"	"Indicates validation was attepted on an element or resource and that validation failed."
* #nothing	"Nothing"	"No external validation is required."
* #single	"Single"	"Indicates the element or resource is validated against a single source."
* #multiple	"Multiple"	"Indicates the element or resource may require validation against multiple sources, e.g. a practitioner participating in an insurance network."
* #editcheck	"Edit check"	"Indicates the element or resource is validated for format, range, presence, or other similar properties."
* #valueset	"Valueset"	"Indicates the element or resource is validated against a value set."
* #extsource	"External source"	"Indicates the element or resource is validated against an external source."
* #standalone	"Stand alone"	"Indicates the element or resource is validated by itself and is unrelated to other elements or resources."
* #incontext	"In context"	"Indicates the element or resource is validated by the existence or value of another related element or resource."
* #fatal	"Fatal"	"A failure that is likely relevant to local workflow environments, considered sufficient to suspend the resource/element and one or more action has been taken."
* #warning	"Warning"	"A failure that may be relevant to some local workflow environments, but in and of itself is not consider sufficient to suspend the resource/element. E.g. validating membership in an organization."
* #recordonly	"Record only"	"A failure that may be relevant to some local workflow environments and will be documented but not result in notification or publication of the error."
* #noaction	"No action"	"A failure that is unlikely to be relevant to any local workflow environment."
* #manual	"Manual"	"The resource or element is validated manually."
* #portal	"Portal"	"The resource or element is validated via a portal into a source of valid data."
* #push	"Push"	"Data is sent (i.e. pushed) from a source of valid data to the Healthcare Directory."
* #pull	"Pull"	"Data is retrieved (i.e. pulled) from a source of valid data into the Healthcare Directory"
* #successful	"Successful"	"The validation process is complete and a determination made that the the attested data is true and accurate."
* #failed	"Failed"	"The validation process is complete and a determination made that the the attested data is not true or accurate."
* #undetermined	"Undetermined"	"The validation process is complete and a determination could not be made that the the attested data is, or is not, true and accurate."
* #pushyes	"Yes"	"The primary source validation can be achieved via a push of data from the source of that information."
* #pushno	"No"	"The primary source validation cannot be achieved via a push of data from the source of that information."
* #pushundetermined	"Undetermined"	"It is if undetermined if primary source validation can be achieved via a push of data from the source of that information."
* #specific	"Specific requested changes"	"The sender will send specific changes to the healthcare directory as determined by agreement."
* #any	"Any changes"	"The sender will send all changes to the healthcare directory."
* #sourcedef	"As defined by the source/sender"	"The sender will only send changes they have determined to be significant."
* #owner	"Owner"	"Indicates the element or resource was attested to by the individual who owned the data."
* #authrep	"Authorized representative"	"Indicates the element or resource was attested to by an individual who was designated to attest by the owner of the data."
* #authint	"Authorized intermediary"	"Indicates the element or resource was attested to by a system (intermediary) that was designated to attest by the owner of the data."
* #non-auth-src	"Non-authorized source"	"Indicates the element or resource was attested to by an individual or system that was not designated to attest by the owner of the data."
* #licenseboard	"License Board"	"License Board"
* #primaryed	"Primary Education"	"Primary Education"
* #continuinged	"Continuing Education"	"Continuing Education"
* #postalservice	"Postal Service"	"Postal Service"
* #relowner	"Relationship owner"	"Relationship owner"
* #regauth	"Registration Authority"	"Registration Authority"
* #legalsource	"Legal source"	"Legal source"
* #issuingsource	"Issuing source"	"Issuing source"
* #attester	"Attester"	"Attester"
* ^caseSensitive = true


CodeSystem: CredentialStatusCS
Title: "Credential Status Code System"
Description: "This code system contains codes for indicating the status of a credential, such as an identifier or qualification."
* ^experimental = false
* #active	"active"	"The credential may be considered valid for use."
* #inactive "inactive"	"The credential may not be considered valid for use."
* #issued-in-error	"issued in error"	"The credential was mistakenly assigned and should not be considered valid for use."
* #revoked	"revoked"	"The credential was revoked by the issuing organization and should not be considered valid for use."
* #pending	"pending"	"The credential has not been officially assigned. It may or may not be considered valid for use."
* #unknown	"unknown"	"The status of this credential is unknown. It may or may not be considered valid for use."
* ^caseSensitive = true

CodeSystem: CareTeamCategoryCS
Title: "CareTeam Category Code System"
Description: "This code system contains codes for Care Team Category."
* ^experimental = false
* ^caseSensitive = true



---

File: repos/HL7_SLASH_fhir-directory-query/input/fsh/Extensions.fsh





//added 4/19 SMM
//supports HSDS interoperabilty
/*Extension: PaymentAccepted
Id: paymentAccepted
Title: "Payment Accepted"
Description: "Methods of payment that can be used for a healthcare service"
* extension contains
   id 1..* and 
   type  1..*  
* extension[type].id only string
* extension[type].value[x] only string
* extension[type] ^short = "Payment Type"
* extension[type].value[x] 1..1
* extension[type].value[x] from $paymentTypeVS (required)
*/
Extension: PaymentAccepted
Id: paymentAccepted
Title: "Payment Accepted"
Description: "Methods of payment that can be used for a healthcare service."
* value[x] 0..1 
* value[x] only CodeableConcept 
* valueCodeableConcept from $paymentTypeVS (required)   // was example



//added 4/19 SMM
//supports HSDS interoperabilty
Extension: RequiredDocument
Id: requiredDocument
Title: "Required Document"
Description: "Documents that are required in order to access or use services (eg. Gov't issued ID, passport)"
* extension contains
   requiredDocumentId 1..* and 
   document  1..*  
* extension[requiredDocumentId].value[x] only string
* extension[document].value[x] only string

//added 4/19 SMM
//supports HSDS interoperabilty
Extension:      FundingSource
Id:             fundingSource
Title: "Funding Source"
Description: "The sources of funding for a service or organization"
* extension contains
    fundingSourceId 0..1 MS and
    fundingOrganization 0..* and
    fundingSource 1..1 MS
* extension[fundingSourceId].value[x] only string
* extension[fundingSource].value[x] only string
* extension[fundingOrganization].value[x] only Reference(NatlDirEndpointQryOrganization)







Extension: UsageRestriction
Id: usage-restriction
Title: "NatlDir Usage Restriction"
Description: """The FHIR specification contains a security meta tag which can be used to inform systems of the sensitivity of resources, as well as by access control mechanisms to ensure content isn't exposed that shouldn't be.
This mechanism only goes to the resource level, this reference to a usage-restriction (consent) extends this further into the resource, and can be applied to any element, and may apply to all properties beneath the element (e.g. If applied to an identifier on a practitioner, then all the properties of the identifier should not be exposed unless it is understood)
This will be expected to be used as a modifier extension."""
//* ^context.type = #fhirpath
//* ^context.expression = "descendants()"
* ^date = "2017-10-20T10:59:36.931+11:00"
* . ^short = "Restriction"
* . ^definition = "Identifies and conveys information about restrictions on the use or release of exchanged information, e.g. information that can only be shared under particular condition, such as a signed data use agreement between parties"
* valueReference 1.. MS
* valueReference only Reference(NatlDirRestriction)
* valueReference ^sliceName = "valueReference"
* valueReference ^short = "Reference"
* valueReference ^definition = "Reference to the restriction resource (consent)"
* valueReference ^comment = "This is anticipated to usually be a reference to a contained resource (this eases distribution, and permits the same consent applying to multiple properties in the same resource)"
* valueReference.identifier ..0



Extension: IGsSupported
Id: igsSupported
Title: "IGs Supported"
Description: "IGs Supported document the different types of IGs supported by the Endpoint."
* value[x] 0..0
* extension contains
   igsSupportedType  1..1 MS and
   formatCode 0..1 MS  and
   versionCode 0..* MS 
* extension[igsSupportedType].value[x] only CodeableConcept
* extension[igsSupportedType] ^short = "IG Type"
* extension[igsSupportedType].value[x] 1..1
* extension[igsSupportedType].value[x] from IgTypeVS (required)
* extension[formatCode].value[x] only CodeableConcept
* extension[formatCode].value[x] 1..1
* extension[formatCode] ^short = "IG Format Code"
* extension[formatCode].value[x] from $IgFormatCodeVS (required)
* extension[versionCode].value[x] only string
* extension[versionCode].value[x] 1..1
* extension[versionCode] ^short = "IG Version Code"

Extension: EndpointType
Id: endpointType
Title: "Endpoint Type"
Description: "Type of Endpoint"
* extension contains 
   endpointType  1..1 MS 
* extension[endpointType].value[x] only CodeableConcept
* extension[endpointType] ^short = "Endpoint Type"
* extension[endpointType].value[x] from EndpointTypeVS (required)

Extension: Rating
Id: rating
Title: "Rating"
Description: "Rating"
* extension contains
   ratingType  1..1 MS and
   ratingValue 1..1 MS
* extension[ratingType].value[x] only CodeableConcept
* extension[ratingType] ^short = "Rating Type"
* extension[ratingType].value[x] 1..1
* extension[ratingValue].value[x] only string
* extension[ratingValue] ^short = "Rating"



Extension: SecureExchangeArtifacts
Id: secureExchangeArtifacts
Title: "Secure Exchange Artifacts"
Description: "Secure Exchange Artifacts"
* extension contains
   secureExchangeArtifactsType  1..1 MS and
   certificate 1..1 MS and
   expirationDate 1..1
* extension[secureExchangeArtifactsType].value[x] only string
* extension[secureExchangeArtifactsType] ^short = "Secure Artifact Type"
* extension[secureExchangeArtifactsType].value[x] 0..1
* extension[certificate].value[x] only base64Binary
* extension[certificate] ^short = "Certificate"
* extension[expirationDate].value[x] only dateTime
* extension[expirationDate] ^short = "Expiration Date"


Extension: TrustFramework
Id: trustFramework
Title: "Trust Framework"
Description: "Trust Framework"
* extension contains
   trustFrameworkType  1..1 MS and
   qualifier 1..1 MS and
   signedArtifact 1..1 and
   publicCertificate 1..1 
* extension[trustFrameworkType].value[x] only CodeableConcept
* extension[trustFrameworkType] ^short = "Trust Framework Type"
* extension[trustFrameworkType].value[x] from TrustFrameworkTypeVS (required)
* extension[qualifier].value[x] only string
* extension[qualifier] ^short = "Qualifier"
* extension[qualifier].value[x] 1..1
* extension[signedArtifact].value[x] only base64Binary
* extension[signedArtifact] ^short = "Signed Artifact"
* extension[signedArtifact].value[x] 1..1
* extension[publicCertificate].value[x] only base64Binary
* extension[publicCertificate] ^short = "Public Certificate"
* extension[publicCertificate].value[x] 1..1

Extension: DynamicRegistration
Id: dynamicRegistration
Title: "Dynamic Registration"
Description: "Dynamic Registration"
* extension contains
   version  1..1 MS and
   binary 1..1 MS 
* extension[version].value[x] only string
* extension[version] ^short = "Dynamic Registration Version"
* extension[version].value[x] 0..1
* extension[binary].value[x] only string
* extension[binary] ^short = "Binary"
* extension[binary].value[x] 0..1



Extension: AssociatedServers
Id: associatedServers
Title: "Associated Servers"
Description: "Associated Servers"
* extension contains
   associatedServersType  1..1 MS and
   serverURL 1..1 MS 
* extension[associatedServersType].value[x] only string
* extension[associatedServersType] ^short = "Dynamic Registration Version"
* extension[associatedServersType].value[x] 1..1
* extension[serverURL].value[x] only string
* extension[serverURL] ^short = "Binary"
* extension[serverURL].value[x] 1..1

Extension: SecureEndpoint
Id: secureEndpoint
Title: "Secure Endpoint"
Description: "Is the Endpoint Secured"
* value[x] 1..1 
* value[x] only boolean


/* 7/11 - Took out as it does not appear on combined resources spreadsheet
Extension: OrgAliasPeriod
Id: org-alias-period
Title: "NatlDirEndpointQry Org Alias Period"
Description: "the period of time the alias was actively used"
* ^context.expression = "Organization.alias"
* ^context.type = #element
* ^date = "2017-09-01T06:36:02.345+10:00"
* . ..1
* . ^short = "Period"
* . ^definition = "The period during which the alias was used"
* valuePeriod 1.. MS
* valuePeriod only Period
* valuePeriod ^sliceName = "valuePeriod"
* valuePeriod ^label = "period"
* valuePeriod ^short = "Period"
* valuePeriod ^definition = "The period during which the alias was used"

Extension: OrgAliasType
Id: org-alias-type
Title: "NatlDirEndpointQry Org Alias Type"
Description: "Type of alias (legal alternative | historical)"
* ^context.expression = "Organization.alias"
* ^context.type = #element
* ^date = "2017-09-01T06:32:54.172+10:00"
* . ..1
* . ^short = "Type"
* . ^definition = "Type of alias (legal alternative | historical)"
* valueCodeableConcept 1.. MS
* valueCodeableConcept only CodeableConcept
* valueCodeableConcept from OrgAliasTypeVS (example)
* valueCodeableConcept ^sliceName = "valueCodeableConcept"
* valueCodeableConcept ^label = "type"
* valueCodeableConcept ^short = "Type"
* valueCodeableConcept ^definition = "Type of alias (legal alternative | historical)"

Extension: NewPatientProfile
Id: newpatientprofile
Title: "NatlDirEndpointQry New Patient Profile"
Description: "Additional information about new patients a practitioner/service/location accepts (e.g. only children)"
* ^context[0].expression = "PractitionerRole"
* ^context[=].type = #element
* ^context[+].expression = "Location"
* ^context[=].type = #element
* ^date = "2017-11-13T14:13:29.07-05:00"
* . ..*
* . ^short = "New patient profile"
* . ^definition = "Additional information about new patients a practitioner/service/location accepts"
* valueString 1.. MS
* valueString only string
* valueString ^sliceName = "valueString"
* valueString ^label = "newpatientprofile"
* valueString ^short = "New patient profile"
* valueString ^definition = "Additional information about new patients a practitioner/service/location accepts (e.g. only children)"
*/

/* SMM take out on 7/13 as its not in spreadsheet 
Extension: InsurancePlanReference
Id: insuranceplan-reference
Title: "NatlDirEndpointQry Insurance Plan Reference"
Description: "A reference to the insurancePlan resource"
* ^context.expression = "Organization"
* ^context.type = #element
* ^date = "2018-11-08T11:58:03-08:00"
* . ^short = "InsurancePlan reference"
* . ^definition = "A reference to the insurancePlan resource"
* valueReference 1.. MS
* valueReference only Reference(NatlDirEndpointQryInsurancePlan)
* valueReference ^sliceName = "valueReference"
* valueReference ^short = "A reference to the insurance plan"
* valueReference ^definition = "A reference to the insurance plan"
*/

Extension: HealthcareServiceReference
Id: healthcareservice-reference
Title: "NatlDirEndpointQry Healthcareservice Reference"
Description: "Reference to healthcareservice resource"
* ^context.expression = "CareTeam"
* ^context.type = #element
* ^date = "2017-11-08T11:53:40.139-05:00"
* . ^short = "healthcareservice"
* . ^definition = "Reference to healthcareservice resources"
* valueReference 1.. MS
* valueReference only Reference(NatlDirEndpointQryHealthcareService)
* valueReference ^sliceName = "valueReference"
* valueReference ^label = "healthcareservice"
* valueReference ^short = "Healthcare service"
* valueReference ^definition = "Reference to healthcareservice resource"
* valueReference ^comment = "Extension to careteam"


Extension: EndpointReference
Id: endpoint-reference
Title: "NatlDirEndpointQry Practitioner Endpoint Reference"
Description: "The technical details of an endpoint that can be used for electronic services"
* ^context[0].expression = "Practitioner"
* ^context[=].type = #element
* ^context[+].expression = "CareTeam"
* ^context[=].type = #element
* ^date = "2017-11-07T12:23:01.804-05:00"
* . ^short = "Endpoint reference"
* . ^definition = "A reference to the endpoint resource"
* valueReference 1.. MS
* valueReference only Reference(NatlDirEndpointQryEndpoint)
* valueReference ^sliceName = "valueReference"
* valueReference ^short = "Endpoint reference"
* valueReference ^definition = "A reference to the endpoint"

/*
Extension: DigitalCertificate
Id: digitalcertificate
Title: "NatlDirEndpointQry Digitalcertificate"
Description: "A digital certificate, used to identify a user or group of users, or for encrypted communications"
* ^context[0].expression = "Practitioner"
* ^context[=].type = #element
* ^context[+].expression = "Organization"
* ^context[=].type = #element
* ^context[+].expression = "PractitionerRole"
* ^context[=].type = #element
* ^context[+].expression = "Endpoint"
* ^context[=].type = #element
* ^date = "2017-11-13T11:51:52.262-05:00"
* . ^short = "digitalcertificate"
* . ^definition = "A digital certificate, used to identify a user or group of users, or for encrypted communications"
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.discriminator.type = #value
* extension ^slicing.rules = #open
* extension ^mustSupport = false
* extension contains
    type 1..1 MS and
    use 0..* MS and
    certificateStandard 0..1 MS and
    certificate 1..1 MS and
    expirationDate 1..1 MS and
    trustFramework 0..* MS
* extension[type] ^label = "type"
* extension[type] ^short = "Type"
* extension[type] ^definition = "Type of digital certificate (TLS/SSL; device; identity; group)"
* extension[type].valueCoding 1..
* extension[type].valueCoding only Coding
* extension[type].valueCoding from $digitalcertificatetype (example)
* extension[type].valueCoding ^sliceName = "valueCoding"
* extension[type].valueCoding ^label = "type"
* extension[type].valueCoding ^short = "type"
* extension[type].valueCoding ^definition = "Type of digital certificate (TLS/SSL; device; identity; group)"
* extension[use] ^label = "use"
* extension[use] ^short = "Use"
* extension[use] ^definition = "Purpose of the digital certificate (digsig; keyEncipherment)"
* extension[use].valueCoding 1..
* extension[use].valueCoding only Coding
* extension[use].valueCoding from $digitalcertificateuse (example)
* extension[use].valueCoding ^sliceName = "valueCoding"
* extension[use].valueCoding ^label = "use"
* extension[use].valueCoding ^short = "use"
* extension[use].valueCoding ^definition = "Purpose of the digital certificate (digsig; keyEncipherment)"
* extension[certificateStandard] ^label = "certificateStandard"
* extension[certificateStandard] ^short = "Certificate standard"
* extension[certificateStandard] ^definition = "The standard associated with the digital certificate (x.509v3)"
* extension[certificateStandard].valueCoding 1..
* extension[certificateStandard].valueCoding only Coding
* extension[certificateStandard].valueCoding from $digitalcertificatestandard (required)
* extension[certificateStandard].valueCoding ^sliceName = "valueCoding"
* extension[certificateStandard].valueCoding ^label = "certificateStandard"
* extension[certificateStandard].valueCoding ^short = "Certificate standard"
* extension[certificateStandard].valueCoding ^definition = "The standard associated with the digital certificate (x.509v3)"
* extension[certificate] ^label = "certificate"
* extension[certificate] ^short = "Certificate"
* extension[certificate] ^definition = "PEM format certificate (as a string) or URI for locating the certificate"
* extension[certificate].value[x] 1..
//* extension[certificate].value[x] only string or uri
* extension[certificate].value[x] ^label = "certificate"
* extension[certificate].value[x] ^short = "Certificate"
* extension[certificate].value[x] ^definition = "PEM format certificate (as a string) or URI for locating the certificate"
* extension[expirationDate] ^label = "expirationDate"
* extension[expirationDate] ^short = "Expiration date"
* extension[expirationDate] ^definition = "Expiration date of the certificate"
* extension[expirationDate].valueDate 1..
* extension[expirationDate].valueDate only date
* extension[expirationDate].valueDate ^sliceName = "valueDate"
* extension[expirationDate].valueDate ^label = "expirationDate"
* extension[expirationDate].valueDate ^short = "Expiration date"
* extension[expirationDate].valueDate ^definition = "Expiration date of the certificate"
* extension[trustFramework] ^label = "trustFramework"
* extension[trustFramework] ^short = "Trust framework"
* extension[trustFramework] ^definition = "The trust framework(s) supported by the certificate (DirectTrust; FBCA; other)"
* extension[trustFramework].valueCodeableConcept 1..
* extension[trustFramework].valueCodeableConcept only CodeableConcept
* extension[trustFramework].valueCodeableConcept from $digitalcertificatetrustframework (example)
* extension[trustFramework].valueCodeableConcept ^sliceName = "valueCodeableConcept"
* extension[trustFramework].valueCodeableConcept ^label = "trustFramework"
* extension[trustFramework].valueCodeableConcept ^short = "Trust framework"
* extension[trustFramework].valueCodeableConcept ^definition = "The trust framework(s) supported by the certificate (DirectTrust; FBCA; other)"
//* value[x] MS
*/

Extension: CareteamAlias
Id: careteam-alias
Title: "NatlDirEndpointQry Careteam Alias"
Description: "Alternate names by which the team is known"
* ^context.expression = "CareTeam"
* ^context.type = #element
* ^date = "2017-11-16T15:42:31.192-05:00"
* . ^short = "Alias"
* . ^definition = "Alternate names by which the team is also known"
* valueString 1.. MS
* valueString only string
* valueString ^sliceName = "valueString"
* valueString ^label = "alias"
* valueString ^short = "Alias"
* valueString ^definition = "Alternate names by which the team is also known"



Extension: IdentifierStatus
Id: identifier-status
Title: "NatlDirEndpointQry Identifier Status"
Description: "Describes the status of an identifier"
* ^context.expression = "Identifier"
* ^context.type = #element
* ^date = "2017-11-20T11:33:43.51-05:00"
* . ..1
* . ^short = "Status"
* . ^definition = "Describes the status of an identifier"
* valueCode 1.. MS
* valueCode only code
* valueCode from IdentifierStatusVS (required)
* valueCode ^sliceName = "valueCode"
* valueCode ^label = "status"
* valueCode ^short = "active|inactive|issued-in-error|revoked|pending"
* valueCode ^definition = "Describes the status of an identifier"
/* SMM - duplicate
Extension: ContactPointViaIntermediary
Id: contactpoint-viaintermediary
Title: "NatlDirEndpointQry Contactpoint Viaintermediary"
Description: "Represents an external point of contact responsible for handling communications with this entity"
* ^context.expression = "ContactPoint"
* ^context.type = #element
* ^date = "2017-11-20T11:48:25.475-05:00"
* . ..1
* . ^short = "viaintermediary"
* . ^definition = "Represents an external point of contact responsible for handling communications with this entity"
* valueReference 1.. MS
* valueReference only Reference(NatlDirEndpointQryPractitionerRole or NatlDirEndpointQryOrganization or NatlDirEndpointQryOrganizationAffiliation or NatlDirEndpointQryLocation)
* valueReference ^sliceName = "valueReference"
* valueReference ^label = "viaintermediary"
* valueReference ^short = "Via intermediary"
* valueReference ^definition = "Represents an external point of contact responsible for handling communications with this entity"
*/

Extension: Accessibility
Id: accessibility
Title: "Accessibility"
Description: "An extension to describe accessibility options offered by a practitioner or at a location."
* value[x] 1..1 
* value[x] only CodeableConcept 
* value[x] from AccessibilityVS (extensible)


Extension: CommunicationProficiency
Id: communication-proficiency
Title: "Communication Proficiency"
Description: "An extension to express a practitioner’s spoken proficiency with the language indicated in practitioner.communication."
* value[x] 1..1 
* value[x] only CodeableConcept 
* valueCodeableConcept from LanguageProficiencyVS (required)   // was example

Extension: ContactPointAvailableTime
Id: contactpoint-availabletime
Title: "Contactpoint Availabletime"
Description: "An extension representing the days and times a contact point is available"
* value[x] 0..0
* extension contains
   daysOfWeek 0..* MS and 
   allDay 0..1 MS and
   availableStartTime 0..1 MS and
   availableEndTime 0..1 MS
* extension[daysOfWeek].value[x] only code 
* extension[daysOfWeek].valueCode from $DaysOfWeekVS
* extension[allDay].value[x] only boolean 
* extension[availableStartTime].value[x] only time 
* extension[availableEndTime].value[x] only time  

Extension: DeliveryMethod
Id: delivery-method
Title: "Delivery Method"
Description: "An extension describing the service delivery method.   If service delivery is virtual, one or more delivery modalities should be specified."
* value[x] 0..0
* extension contains
   deliveryMethodtype 1..1 and
   virtualModalities 0..* MS 
* extension[deliveryMethodtype].value[x] only CodeableConcept 
* extension[deliveryMethodtype].value[x] from DeliveryMethodVS (required)
* extension[deliveryMethodtype] ^short = "Physical or Virtual Service Delivery"
* extension[deliveryMethodtype].value[x] 1..1
* extension[virtualModalities].value[x] only CodeableConcept 
* extension[virtualModalities].value[x] from VirtualModalitiesVS (extensible)
* extension[virtualModalities].value[x] 1..1
* extension[virtualModalities] ^short = "Modalities of Virtual Delivery"


Extension: EndpointUsecase
Id: endpoint-usecase
Title: "Endpoint Usecase"
Description: "EndpointUseCase is an enumeration of the specific use cases (service descriptions) supported by the endpoint"
* value[x] 0..0
* extension contains
   endpointUsecasetype 1..1 MS and
   standard 0..1 MS 
* extension[endpointUsecasetype] ^short = "An indication of the type of services supported by the endpoint"
* extension[endpointUsecasetype].value[x] only  CodeableConcept 
* extension[endpointUsecasetype].value[x]  1..1
* extension[endpointUsecasetype].value[x] from EndpointUsecaseVS (extensible)
* extension[standard] ^short = "A URI to a published standard describing the services supported by the endpoint (e.g. an HL7 implementation guide)"
* extension[standard].value[x] only uri 
* extension[standard].value[x] 1..1


Extension: LocationReference
Id: location-reference
Title: "Location Reference"
Description: "A reference to a Location resource (NatlDir-Location) defining the coverage area of a health insurance provider network"
* value[x] only Reference (NatlDirEndpointQryLocation)
* value[x] 1..1 MS 


Extension: NetworkReference
Id: network-reference
Title: "Network Reference"
Description: "A reference to the healthcare provider insurance networks (NatlDirEndpointQry-Network) the practitioner participates in through their role"
* value[x] only Reference(NatlDirEndpointQryNetwork) 
* value[x] 1..1 MS 


Extension: NewPatients
Id: newpatients
Title: "New Patients"
Description: "New Patients indicates whether new patients are being accepted in general, or from a specific network.   
              This extension is included in the PractitionerRole, HealthcareService, and Location profiles.  
              This provides needed flexibility for specifying whether a provider accepts new patients by location and network."
* obeys new-patients-characteristics
* value[x] 0..0
* extension contains
   acceptingPatients  1..1 MS and
   fromNetwork 0..1 MS  and
   characteristics 0..* MS 
* extension[acceptingPatients].value[x] only CodeableConcept
* extension[acceptingPatients] ^short = "Accepting Patients"
* extension[acceptingPatients].value[x] 1..1
* extension[acceptingPatients].value[x] from AcceptingPatientsVS (required)
* extension[fromNetwork].value[x] only Reference(NatlDirEndpointQryNetwork)
* extension[fromNetwork].value[x] 1..1
* extension[fromNetwork] ^short = "From Network"
* extension[characteristics].value[x] only string
* extension[characteristics].value[x] 1..1
* extension[characteristics] ^short = "Characteristics of accepted patients"



Invariant:  new-patients-characteristics 
Description: "If no new patients are accepted, no characteristics are allowed"
Expression: "extension('acceptingPatients').valueCodeableConcept.coding.exists(code = 'no') implies extension('characteristics').empty()"
Severity:   #error


Extension: OrgDescription
Id: org-description
Title: "Org Description"
Description: "An extension to provide a human-readable description of an organization."
* value[x] 1..1 MS
* value[x] only string 



Extension: PractitionerQualification
Id: practitioner-qualification
Title: "Practitioner Qualification"
Description: "An extension to add status and whereValid elements to a practitioner’s qualifications."
* value[x] 0..0
* extension contains
   status 1..1 MS and
   whereValid 0..* MS 
* extension[status] ^short = "Status"
* extension[status].value[x] only  code 
* extension[status].value[x] 1..1
* extension[status].valueCode from QualificationStatusVS (required)
* extension[status].valueCode =  $QualificationStatusCS#active (exactly)
* extension[whereValid] ^short = "Where the qualification is valid"
* extension[whereValid].value[x] only CodeableConcept or Reference(NatlDirEndpointQryLocation)
* extension[whereValid].valueCodeableConcept from $USPSState (required)
* extension[whereValid].value[x] 1..1
/*
Extension: Qualification
Id: qualification
Title: "Qualification"
Description: "An extension to add qualifications for an organization (e.g. accreditation) or practitionerRole (e.g. registered to prescribe controlled substances)."
* extension contains
   identifier 0..* MS and 
   code 1..1 MS and
   issuer 0..1 MS and
   status 1..1 MS and
   period 0..1 MS and 
   whereValid 0..* MS
* extension[identifier].value[x] only Identifier 
* extension[identifier].value[x] 1..1
* extension[code].value[x] only CodeableConcept
* extension[code].value[x] 1..1
* extension[code].value[x] from SpecialtyAndDegreeLicenseCertificateVS (extensible)
* extension[issuer].value[x] 1..1
* extension[issuer].value[x] only Reference(NatlDirEndpointQryOrganization)
* extension[status].value[x] 1..1
* extension[status].value[x] only  code 
* extension[status].valueCode from QualificationStatusVS (required)
* extension[status].valueCode = $QualificationStatusCS#active (exactly)
* extension[period].value[x] only Period 
* extension[period].value[x] 1..1
* extension[whereValid].value[x] only CodeableConcept or Reference(NatlDirEndpointQryLocation)
* extension[whereValid].value[x] from $USPSState (required)
* extension[whereValid].value[x] 1..1
*/
Extension: ViaIntermediary
Id: via-intermediary
Title: "Via Intermediary"
Description: "A reference to an alternative point of contact (NatlDirEndpointQry-PractitionerRole, NatlDirEndpointQry-Organization, NatlDirEndpointQry-OrganizationAffiliation, or NatlDirEndpointQry-Location) for this organization"
* value[x] only Reference(NatlDirEndpointQryPractitionerRole or NatlDirEndpointQryOrganizationAffiliation or NatlDirEndpointQryLocation or NatlDirEndpointQryOrganization) 
* value[x] 1..1 MS


---

File: repos/HL7_SLASH_fhir-directory-query/input/fsh/IndividualAndGroupSpecialties.fsh

ValueSet: IndividualAndGroupSpecialtiesVS
Title: "Individual and Group Specialties"
Description:  "Individual and Group Specialties from National Uniform Claim Committee (NUCC) Health Care Provider Taxonomy code set."
* ^experimental = false
* $NUCCProviderTaxonomy#101200000X "Drama Therapist"  // added 4/21/21
* $NUCCProviderTaxonomy#101Y00000X "Counselor" 
* $NUCCProviderTaxonomy#101YA0400X "Addiction (Substance Use Disorder) Counselor" 
* $NUCCProviderTaxonomy#101YM0800X "Mental Health Counselor" 
* $NUCCProviderTaxonomy#101YP1600X "Pastoral Counselor" 
* $NUCCProviderTaxonomy#101YP2500X "Professional Counselor" 
* $NUCCProviderTaxonomy#101YS0200X "School Counselor" 
* $NUCCProviderTaxonomy#102L00000X "Psychoanalyst" 
* $NUCCProviderTaxonomy#102X00000X "Poetry Therapist" 
* $NUCCProviderTaxonomy#103G00000X "Clinical Neuropsychologist" 
* $NUCCProviderTaxonomy#103K00000X "Behavioral Analyst" 
* $NUCCProviderTaxonomy#103T00000X "Psychologist" 
* $NUCCProviderTaxonomy#103TA0400X "Addiction (Substance Use Disorder) Psychologist" 
* $NUCCProviderTaxonomy#103TA0700X "Adult Development & Aging Psychologist" 
* $NUCCProviderTaxonomy#103TB0200X "Cognitive & Behavioral Psychologist" 
* $NUCCProviderTaxonomy#103TC0700X "Clinical Psychologist" 
* $NUCCProviderTaxonomy#103TC1900X "Counseling Psychologist" 
* $NUCCProviderTaxonomy#103TC2200X "Clinical Child & Adolescent Psychologist" 
* $NUCCProviderTaxonomy#103TE1100X "Exercise & Sports Psychologist" 
* $NUCCProviderTaxonomy#103TF0000X "Family Psychologist" 
* $NUCCProviderTaxonomy#103TF0200X "Forensic Psychologist" 
* $NUCCProviderTaxonomy#103TH0004X "Health Psychologist" 
* $NUCCProviderTaxonomy#103TH0100X "Health Service Psychologist" 
* $NUCCProviderTaxonomy#103TM1800X "Intellectual & Developmental Disabilities Psychologist" 
* $NUCCProviderTaxonomy#103TP0016X "Prescribing (Medical) Psychologist" 
* $NUCCProviderTaxonomy#103TP0814X "Psychoanalysis Psychologist" 
* $NUCCProviderTaxonomy#103TP2701X "Group Psychotherapy Psychologist" 
* $NUCCProviderTaxonomy#103TR0400X "Rehabilitation Psychologist" 
* $NUCCProviderTaxonomy#103TS0200X "School Psychologist" 
* $NUCCProviderTaxonomy#104100000X "Social Worker" 
* $NUCCProviderTaxonomy#1041C0700X "Clinical Social Worker" 
* $NUCCProviderTaxonomy#1041S0200X "School Social Worker" 
* $NUCCProviderTaxonomy#106E00000X "Assistant Behavior Analyst" 
* $NUCCProviderTaxonomy#106H00000X "Marriage & Family Therapist" 
* $NUCCProviderTaxonomy#106S00000X "Behavior Technician" 
* $NUCCProviderTaxonomy#111N00000X "Chiropractor" 
* $NUCCProviderTaxonomy#111NI0013X "Independent Medical Examiner Chiropractor" 
* $NUCCProviderTaxonomy#111NI0900X "Internist Chiropractor" 
* $NUCCProviderTaxonomy#111NN0400X "Neurology Chiropractor" 
* $NUCCProviderTaxonomy#111NN1001X "Nutrition Chiropractor" 
* $NUCCProviderTaxonomy#111NP0017X "Pediatric Chiropractor" 
* $NUCCProviderTaxonomy#111NR0200X "Radiology Chiropractor" 
* $NUCCProviderTaxonomy#111NR0400X "Rehabilitation Chiropractor" 
* $NUCCProviderTaxonomy#111NS0005X "Sports Physician Chiropractor" 
* $NUCCProviderTaxonomy#111NT0100X "Thermography Chiropractor" 
* $NUCCProviderTaxonomy#111NX0100X "Occupational Health Chiropractor" 
* $NUCCProviderTaxonomy#111NX0800X "Orthopedic Chiropractor" 
* $NUCCProviderTaxonomy#122300000X "Dentist" 
* $NUCCProviderTaxonomy#1223D0001X "Public Health Dentist" 
* $NUCCProviderTaxonomy#1223D0004X "Dentist Anesthesiologist" 
* $NUCCProviderTaxonomy#1223E0200X "Endodontist" 
* $NUCCProviderTaxonomy#1223G0001X "General Practice Dentistry" 
* $NUCCProviderTaxonomy#1223P0106X "Oral and Maxillofacial Pathology Dentist" 
* $NUCCProviderTaxonomy#1223P0221X "Pediatric Dentist" 
* $NUCCProviderTaxonomy#1223P0300X "Periodontist" 
* $NUCCProviderTaxonomy#1223P0700X "Prosthodontist" 
* $NUCCProviderTaxonomy#1223S0112X "Oral and Maxillofacial Surgery (Dentist)" 
* $NUCCProviderTaxonomy#1223X0008X "Oral and Maxillofacial Radiology Dentist" 
* $NUCCProviderTaxonomy#1223X0400X "Orthodontics and Dentofacial Orthopedic Dentist" 
* $NUCCProviderTaxonomy#1223X2210X "Orofacial Pain Dentist" 
* $NUCCProviderTaxonomy#122400000X "Denturist" 
* $NUCCProviderTaxonomy#124Q00000X "Dental Hygienist" 
* $NUCCProviderTaxonomy#125J00000X "Dental Therapist" 
* $NUCCProviderTaxonomy#125K00000X "Advanced Practice Dental Therapist" 
* $NUCCProviderTaxonomy#125Q00000X "Oral Medicinist" 
* $NUCCProviderTaxonomy#126800000X "Dental Assistant" 
* $NUCCProviderTaxonomy#126900000X "Dental Laboratory Technician" 
* $NUCCProviderTaxonomy#132700000X "Dietary Manager" 
* $NUCCProviderTaxonomy#133N00000X "Nutritionist" 
* $NUCCProviderTaxonomy#133NN1002X "Nutrition Education Nutritionist" 
* $NUCCProviderTaxonomy#133V00000X "Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1004X "Pediatric Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1005X "Renal Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1006X "Metabolic Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1101X "Gerontological Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1201X "Obesity and Weight Management Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1301X "Oncology Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1401X "Pediatric Critical Care Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1501X "Sports Dietetics Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#136A00000X "Registered Dietetic Technician" 
* $NUCCProviderTaxonomy#146D00000X "Personal Emergency Response Attendant" 
* $NUCCProviderTaxonomy#146L00000X "Paramedic" 
* $NUCCProviderTaxonomy#146M00000X "Intermediate Emergency Medical Technician" 
* $NUCCProviderTaxonomy#146N00000X "Basic Emergency Medical Technician" 
* $NUCCProviderTaxonomy#152W00000X "Optometrist" 
* $NUCCProviderTaxonomy#152WC0802X "Corneal and Contact Management Optometrist" 
* $NUCCProviderTaxonomy#152WL0500X "Low Vision Rehabilitation Optometrist" 
* $NUCCProviderTaxonomy#152WP0200X "Pediatric Optometrist" 
* $NUCCProviderTaxonomy#152WS0006X "Sports Vision Optometrist" 
* $NUCCProviderTaxonomy#152WV0400X "Vision Therapy Optometrist" 
* $NUCCProviderTaxonomy#152WX0102X "Occupational Vision Optometrist" 
* $NUCCProviderTaxonomy#156F00000X "Technician/Technologist" 
* $NUCCProviderTaxonomy#156FC0800X "Contact Lens Technician/Technologist" 
* $NUCCProviderTaxonomy#156FC0801X "Contact Lens Fitter" 
* $NUCCProviderTaxonomy#156FX1100X "Ophthalmic Technician/Technologist" 
* $NUCCProviderTaxonomy#156FX1101X "Ophthalmic Assistant" 
* $NUCCProviderTaxonomy#156FX1201X "Optometric Assistant Technician" 
* $NUCCProviderTaxonomy#156FX1202X "Optometric Technician" 
* $NUCCProviderTaxonomy#156FX1700X "Ocularist" 
* $NUCCProviderTaxonomy#156FX1800X "Optician" 
* $NUCCProviderTaxonomy#156FX1900X "Orthoptist" 
* $NUCCProviderTaxonomy#163W00000X "Registered Nurse" 
* $NUCCProviderTaxonomy#163WA0400X "Addiction (Substance Use Disorder) Registered Nurse" 
* $NUCCProviderTaxonomy#163WA2000X "Administrator Registered Nurse" 
* $NUCCProviderTaxonomy#163WC0200X "Critical Care Medicine Registered Nurse" 
* $NUCCProviderTaxonomy#163WC0400X "Case Management Registered Nurse" 
* $NUCCProviderTaxonomy#163WC1400X "College Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WC1500X "Community Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WC1600X "Continuing Education/Staff Development Registered Nurse" 
* $NUCCProviderTaxonomy#163WC2100X "Continence Care Registered Nurse" 
* $NUCCProviderTaxonomy#163WC3500X "Cardiac Rehabilitation Registered Nurse" 
* $NUCCProviderTaxonomy#163WD0400X "Diabetes Educator Registered Nurse" 
* $NUCCProviderTaxonomy#163WD1100X "Peritoneal Dialysis Registered Nurse" 
* $NUCCProviderTaxonomy#163WE0003X "Emergency Registered Nurse" 
* $NUCCProviderTaxonomy#163WE0900X "Enterostomal Therapy Registered Nurse" 
* $NUCCProviderTaxonomy#163WF0300X "Flight Registered Nurse" 
* $NUCCProviderTaxonomy#163WG0000X "General Practice Registered Nurse" 
* $NUCCProviderTaxonomy#163WG0100X "Gastroenterology Registered Nurse" 
* $NUCCProviderTaxonomy#163WG0600X "Gerontology Registered Nurse" 
* $NUCCProviderTaxonomy#163WH0200X "Home Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WH0500X "Hemodialysis Registered Nurse" 
* $NUCCProviderTaxonomy#163WH1000X "Hospice Registered Nurse" 
* $NUCCProviderTaxonomy#163WI0500X "Infusion Therapy Registered Nurse" 
* $NUCCProviderTaxonomy#163WI0600X "Infection Control Registered Nurse" 
* $NUCCProviderTaxonomy#163WL0100X "Lactation Consultant (Registered Nurse)" 
* $NUCCProviderTaxonomy#163WM0102X "Maternal Newborn Registered Nurse" 
* $NUCCProviderTaxonomy#163WM0705X "Medical-Surgical Registered Nurse" 
* $NUCCProviderTaxonomy#163WM1400X "Nurse Massage Therapist (NMT)" 
* $NUCCProviderTaxonomy#163WN0002X "Neonatal Intensive Care Registered Nurse" 
* $NUCCProviderTaxonomy#163WN0003X "Low-Risk Neonatal Registered Nurse" 
* $NUCCProviderTaxonomy#163WN0300X "Nephrology Registered Nurse" 
* $NUCCProviderTaxonomy#163WN0800X "Neuroscience Registered Nurse" 
* $NUCCProviderTaxonomy#163WN1003X "Nutrition Support Registered Nurse" 
* $NUCCProviderTaxonomy#163WP0000X "Pain Management Registered Nurse" 
* $NUCCProviderTaxonomy#163WP0200X "Pediatric Registered Nurse" 
* $NUCCProviderTaxonomy#163WP0218X "Pediatric Oncology Registered Nurse" 
* $NUCCProviderTaxonomy#163WP0807X "Child & Adolescent Psychiatric/Mental Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WP0808X "Psychiatric/Mental Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WP0809X "Adult Psychiatric/Mental Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WP1700X "Perinatal Registered Nurse" 
* $NUCCProviderTaxonomy#163WP2201X "Ambulatory Care Registered Nurse" 
* $NUCCProviderTaxonomy#163WR0006X "Registered Nurse First Assistant" 
* $NUCCProviderTaxonomy#163WR0400X "Rehabilitation Registered Nurse" 
* $NUCCProviderTaxonomy#163WR1000X "Reproductive Endocrinology/Infertility Registered Nurse" 
* $NUCCProviderTaxonomy#163WS0121X "Plastic Surgery Registered Nurse" 
* $NUCCProviderTaxonomy#163WS0200X "School Registered Nurse" 
* $NUCCProviderTaxonomy#163WU0100X "Urology Registered Nurse" 
* $NUCCProviderTaxonomy#163WW0000X "Wound Care Registered Nurse" 
* $NUCCProviderTaxonomy#163WW0101X "Ambulatory Women's Health Care Registered Nurse" 
* $NUCCProviderTaxonomy#163WX0002X "High-Risk Obstetric Registered Nurse" 
* $NUCCProviderTaxonomy#163WX0003X "Inpatient Obstetric Registered Nurse" 
* $NUCCProviderTaxonomy#163WX0106X "Occupational Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WX0200X "Oncology Registered Nurse" 
* $NUCCProviderTaxonomy#163WX0601X "Otorhinolaryngology & Head-Neck Registered Nurse" 
* $NUCCProviderTaxonomy#163WX0800X "Orthopedic Registered Nurse" 
* $NUCCProviderTaxonomy#163WX1100X "Ophthalmic Registered Nurse" 
* $NUCCProviderTaxonomy#163WX1500X "Ostomy Care Registered Nurse" 
* $NUCCProviderTaxonomy#164W00000X "Licensed Practical Nurse" 
* $NUCCProviderTaxonomy#164X00000X "Licensed Vocational Nurse" 
* $NUCCProviderTaxonomy#167G00000X "Licensed Psychiatric Technician" 
* $NUCCProviderTaxonomy#170100000X "Ph.D. Medical Genetics" 
* $NUCCProviderTaxonomy#170300000X "Genetic Counselor (M.S.)" 
* $NUCCProviderTaxonomy#171000000X "Military Health Care Provider" 
* $NUCCProviderTaxonomy#1710I1002X "Independent Duty Corpsman" 
* $NUCCProviderTaxonomy#1710I1003X "Independent Duty Medical Technicians" 
* $NUCCProviderTaxonomy#171100000X "Acupuncturist" 
* $NUCCProviderTaxonomy#171400000X "Health & Wellness Coach"   //added 04/21/21
* $NUCCProviderTaxonomy#171M00000X "Case Manager/Care Coordinator" 
* $NUCCProviderTaxonomy#171R00000X "Interpreter" 
* $NUCCProviderTaxonomy#171W00000X "Contractor" 
* $NUCCProviderTaxonomy#171WH0202X "Home Modifications Contractor" 
* $NUCCProviderTaxonomy#171WV0202X "Vehicle Modifications Contractor" 
* $NUCCProviderTaxonomy#172A00000X "Driver" 
* $NUCCProviderTaxonomy#172M00000X "Mechanotherapist" 
* $NUCCProviderTaxonomy#172P00000X "Naprapath" 
* $NUCCProviderTaxonomy#172V00000X "Community Health Worker" 
* $NUCCProviderTaxonomy#173000000X "Legal Medicine" 
* $NUCCProviderTaxonomy#173C00000X "Reflexologist" 
* $NUCCProviderTaxonomy#173F00000X "Sleep Specialist (PhD)" 
* $NUCCProviderTaxonomy#174400000X "Specialist" 
* $NUCCProviderTaxonomy#1744G0900X "Graphics Designer" 
* $NUCCProviderTaxonomy#1744P3200X "Prosthetics Case Management" 
* $NUCCProviderTaxonomy#1744R1102X "Research Study Specialist" 
* $NUCCProviderTaxonomy#1744R1103X "Research Study Abstracter/Coder" 
* $NUCCProviderTaxonomy#174H00000X "Health Educator" 
* $NUCCProviderTaxonomy#174M00000X "Veterinarian" 
* $NUCCProviderTaxonomy#174MM1900X "Medical Research Veterinarian" 
* $NUCCProviderTaxonomy#174N00000X "Lactation Consultant (Non-RN)" 
* $NUCCProviderTaxonomy#174V00000X "Clinical Ethicist" 
* $NUCCProviderTaxonomy#175F00000X "Naturopath" 
* $NUCCProviderTaxonomy#175L00000X "Homeopath" 
* $NUCCProviderTaxonomy#175M00000X "Lay Midwife" 
* $NUCCProviderTaxonomy#175T00000X "Peer Specialist" 
* $NUCCProviderTaxonomy#176B00000X "Midwife" 
* $NUCCProviderTaxonomy#176P00000X "Funeral Director" 
* $NUCCProviderTaxonomy#183500000X "Pharmacist" 
* $NUCCProviderTaxonomy#1835C0205X "Critical Care Pharmacist" 
* $NUCCProviderTaxonomy#1835G0303X "Geriatric Pharmacist" 
* $NUCCProviderTaxonomy#1835N0905X "Nuclear Pharmacist" 
* $NUCCProviderTaxonomy#1835N1003X "Nutrition Support Pharmacist" 
* $NUCCProviderTaxonomy#1835P0018X "Pharmacist Clinician (PhC)/ Clinical Pharmacy Specialist" 
* $NUCCProviderTaxonomy#1835P0200X "Pediatric Pharmacist" 
* $NUCCProviderTaxonomy#1835P1200X "Pharmacotherapy Pharmacist" 
* $NUCCProviderTaxonomy#1835P1300X "Psychiatric Pharmacist" 
* $NUCCProviderTaxonomy#1835P2201X "Ambulatory Care Pharmacist" 
* $NUCCProviderTaxonomy#1835X0200X "Oncology Pharmacist" 
* $NUCCProviderTaxonomy#183700000X "Pharmacy Technician" 
* $NUCCProviderTaxonomy#193200000X "Multi-Specialty Group" 
* $NUCCProviderTaxonomy#202C00000X "Independent Medical Examiner Physician" 
* $NUCCProviderTaxonomy#202K00000X "Phlebology Physician" 
* $NUCCProviderTaxonomy#204C00000X "Sports Medicine (Neuromusculoskeletal Medicine) Physician" 
* $NUCCProviderTaxonomy#204D00000X "Neuromusculoskeletal Medicine & OMM Physician" 
* $NUCCProviderTaxonomy#204E00000X "Oral & Maxillofacial Surgery (D.M.D.) Physician" 
* $NUCCProviderTaxonomy#204F00000X "Transplant Surgery Physician" 
* $NUCCProviderTaxonomy#204R00000X "Electrodiagnostic Medicine Physician" 
* $NUCCProviderTaxonomy#207K00000X "Allergy & Immunology Physician" 
* $NUCCProviderTaxonomy#207KA0200X "Allergy Physician" 
* $NUCCProviderTaxonomy#207KI0005X "Clinical & Laboratory Immunology (Allergy & Immunology) Physician" 
* $NUCCProviderTaxonomy#207L00000X "Anesthesiology Physician" 
* $NUCCProviderTaxonomy#207LA0401X "Addiction Medicine (Anesthesiology) Physician" 
* $NUCCProviderTaxonomy#207LC0200X "Critical Care Medicine (Anesthesiology) Physician" 
* $NUCCProviderTaxonomy#207LH0002X "Hospice and Palliative Medicine (Anesthesiology) Physician" 
* $NUCCProviderTaxonomy#207LP2900X "Pain Medicine (Anesthesiology) Physician" 
* $NUCCProviderTaxonomy#207LP3000X "Pediatric Anesthesiology Physician" 
* $NUCCProviderTaxonomy#207N00000X "Dermatology Physician" 
* $NUCCProviderTaxonomy#207ND0101X "MOHS-Micrographic Surgery Physician" 
* $NUCCProviderTaxonomy#207ND0900X "Dermatopathology Physician" 
* $NUCCProviderTaxonomy#207NI0002X "Clinical & Laboratory Dermatological Immunology Physician" 
* $NUCCProviderTaxonomy#207NP0225X "Pediatric Dermatology Physician" 
* $NUCCProviderTaxonomy#207NS0135X "Procedural Dermatology Physician" 
* $NUCCProviderTaxonomy#207P00000X "Emergency Medicine Physician" 
* $NUCCProviderTaxonomy#207PE0004X "Emergency Medical Services (Emergency Medicine) Physician" 
* $NUCCProviderTaxonomy#207PE0005X "Undersea and Hyperbaric Medicine (Emergency Medicine) Physician" 
* $NUCCProviderTaxonomy#207PH0002X "Hospice and Palliative Medicine (Emergency Medicine) Physician" 
* $NUCCProviderTaxonomy#207PP0204X "Pediatric Emergency Medicine (Emergency Medicine) Physician" 
* $NUCCProviderTaxonomy#207PS0010X "Sports Medicine (Emergency Medicine) Physician" 
* $NUCCProviderTaxonomy#207PT0002X "Medical Toxicology (Emergency Medicine) Physician" 
* $NUCCProviderTaxonomy#207Q00000X "Family Medicine" 
* $NUCCProviderTaxonomy#207QA0000X "Adolescent Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207QA0401X "Addiction Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207QA0505X "Adult Medicine Physician" 
* $NUCCProviderTaxonomy#207QB0002X "Obesity Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207QG0300X "Geriatric Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207QH0002X "Hospice and Palliative Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207QS0010X "Sports Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207QS1201X "Sleep Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician" 
* $NUCCProviderTaxonomy#207RA0000X "Adolescent Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RA0001X "Advanced Heart Failure and Transplant Cardiology Physician" 
* $NUCCProviderTaxonomy#207RA0002X "Adult Congenital Heart Disease Physician" 
* $NUCCProviderTaxonomy#207RA0201X "Allergy & Immunology (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RA0401X "Addiction Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RB0002X "Obesity Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RC0000X "Cardiovascular Disease Physician" 
* $NUCCProviderTaxonomy#207RC0001X "Clinical Cardiac Electrophysiology Physician" 
* $NUCCProviderTaxonomy#207RC0200X "Critical Care Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RE0101X "Endocrinology, Diabetes & Metabolism Physician" 
* $NUCCProviderTaxonomy#207RG0100X "Gastroenterology Physician" 
* $NUCCProviderTaxonomy#207RG0300X "Geriatric Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RH0000X "Hematology (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RH0002X "Hospice and Palliative Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RH0003X "Hematology & Oncology Physician" 
* $NUCCProviderTaxonomy#207RH0005X "Hypertension Specialist Physician" 
* $NUCCProviderTaxonomy#207RI0001X "Clinical & Laboratory Immunology (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RI0008X "Hepatology Physician" 
* $NUCCProviderTaxonomy#207RI0011X "Interventional Cardiology Physician" 
* $NUCCProviderTaxonomy#207RI0200X "Infectious Disease Physician" 
* $NUCCProviderTaxonomy#207RM1200X "Magnetic Resonance Imaging (MRI) Internal Medicine Physician" 
* $NUCCProviderTaxonomy#207RN0300X "Nephrology Physician" 
* $NUCCProviderTaxonomy#207RP1001X "Pulmonary Disease Physician" 
* $NUCCProviderTaxonomy#207RR0500X "Rheumatology Physician" 
* $NUCCProviderTaxonomy#207RS0010X "Sports Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RS0012X "Sleep Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RT0003X "Transplant Hepatology Physician" 
* $NUCCProviderTaxonomy#207RX0202X "Medical Oncology Physician" 
* $NUCCProviderTaxonomy#207SC0300X "Clinical Cytogenetics Physician" 
* $NUCCProviderTaxonomy#207SG0201X "Clinical Genetics (M.D.) Physician" 
* $NUCCProviderTaxonomy#207SG0202X "Clinical Biochemical Genetics Physician" 
* $NUCCProviderTaxonomy#207SG0203X "Clinical Molecular Genetics Physician" 
* $NUCCProviderTaxonomy#207SG0205X "Ph.D. Medical Genetics Physician" 
* $NUCCProviderTaxonomy#207SM0001X "Molecular Genetic Pathology (Medical Genetics) Physician" 
* $NUCCProviderTaxonomy#207T00000X "Neurological Surgery Physician" 
* $NUCCProviderTaxonomy#207U00000X "Nuclear Medicine Physician" 
* $NUCCProviderTaxonomy#207UN0901X "Nuclear Cardiology Physician" 
* $NUCCProviderTaxonomy#207UN0902X "Nuclear Imaging & Therapy Physician" 
* $NUCCProviderTaxonomy#207UN0903X "In Vivo & In Vitro Nuclear Medicine Physician"  
* $NUCCProviderTaxonomy#207V00000X "Obstetrics & Gynecology Physician" 
* $NUCCProviderTaxonomy#207VB0002X "Obesity Medicine (Obstetrics & Gynecology) Physician" 
* $NUCCProviderTaxonomy#207VC0200X "Critical Care Medicine (Obstetrics & Gynecology) Physician" 
* $NUCCProviderTaxonomy#207VE0102X "Reproductive Endocrinology Physician" 
* $NUCCProviderTaxonomy#207VF0040X "Female Pelvic Medicine and Reconstructive Surgery (Obstetrics & Gynecology) Physician" 
* $NUCCProviderTaxonomy#207VG0400X "Gynecology Physician" 
* $NUCCProviderTaxonomy#207VH0002X "Hospice and Palliative Medicine (Obstetrics & Gynecology) Physician" 
* $NUCCProviderTaxonomy#207VM0101X "Maternal & Fetal Medicine Physician" 
* $NUCCProviderTaxonomy#207VX0000X "Obstetrics Physician" 
* $NUCCProviderTaxonomy#207VX0201X "Gynecologic Oncology Physician" 
* $NUCCProviderTaxonomy#207W00000X "Ophthalmology Physician" 
* $NUCCProviderTaxonomy#207WX0009X "Glaucoma Specialist (Ophthalmology) Physician" 
* $NUCCProviderTaxonomy#207WX0107X "Retina Specialist (Ophthalmology) Physician" 
* $NUCCProviderTaxonomy#207WX0108X "Uveitis and Ocular Inflammatory Disease (Ophthalmology) Physician" 
* $NUCCProviderTaxonomy#207WX0109X "Neuro-ophthalmology Physician" 
* $NUCCProviderTaxonomy#207WX0110X "Pediatric Ophthalmology and Strabismus Specialist Physician" 
* $NUCCProviderTaxonomy#207WX0120X "Cornea and External Diseases Specialist Physician" 
* $NUCCProviderTaxonomy#207WX0200X "Ophthalmic Plastic and Reconstructive Surgery Physician" 
* $NUCCProviderTaxonomy#207X00000X "Orthopaedic Surgery Physician" 
* $NUCCProviderTaxonomy#207XP3100X "Pediatric Orthopaedic Surgery Physician" 
* $NUCCProviderTaxonomy#207XS0106X "Orthopaedic Hand Surgery Physician" 
* $NUCCProviderTaxonomy#207XS0114X "Adult Reconstructive Orthopaedic Surgery Physician" 
* $NUCCProviderTaxonomy#207XS0117X "Orthopaedic Surgery of the Spine Physician" 
* $NUCCProviderTaxonomy#207XX0004X "Orthopaedic Foot and Ankle Surgery Physician" 
* $NUCCProviderTaxonomy#207XX0005X "Sports Medicine (Orthopaedic Surgery) Physician" 
* $NUCCProviderTaxonomy#207XX0801X "Orthopaedic Trauma Physician" 
* $NUCCProviderTaxonomy#207Y00000X "Otolaryngology Physician" 
* $NUCCProviderTaxonomy#207YP0228X "Pediatric Otolaryngology Physician" 
* $NUCCProviderTaxonomy#207YS0012X "Sleep Medicine (Otolaryngology) Physician" 
* $NUCCProviderTaxonomy#207YS0123X "Facial Plastic Surgery Physician" 
* $NUCCProviderTaxonomy#207YX0007X "Plastic Surgery within the Head & Neck (Otolaryngology) Physician" 
* $NUCCProviderTaxonomy#207YX0602X "Otolaryngic Allergy Physician" 
* $NUCCProviderTaxonomy#207YX0901X "Otology & Neurotology Physician" 
* $NUCCProviderTaxonomy#207YX0905X "Otolaryngology/Facial Plastic Surgery Physician" 
* $NUCCProviderTaxonomy#207ZB0001X "Blood Banking & Transfusion Medicine Physician" 
* $NUCCProviderTaxonomy#207ZC0006X "Clinical Pathology Physician" 
* $NUCCProviderTaxonomy#207ZC0008X "Clinical Informatics (Pathology) Physician" 
* $NUCCProviderTaxonomy#207ZC0500X "Cytopathology Physician" 
* $NUCCProviderTaxonomy#207ZD0900X "Dermatopathology (Pathology) Physician" 
* $NUCCProviderTaxonomy#207ZF0201X "Forensic Pathology Physician" 
* $NUCCProviderTaxonomy#207ZH0000X "Hematology (Pathology) Physician" 
* $NUCCProviderTaxonomy#207ZI0100X "Immunopathology Physician" 
* $NUCCProviderTaxonomy#207ZM0300X "Medical Microbiology Physician" 
* $NUCCProviderTaxonomy#207ZN0500X "Neuropathology Physician" 
* $NUCCProviderTaxonomy#207ZP0007X "Molecular Genetic Pathology (Pathology) Physician" 
* $NUCCProviderTaxonomy#207ZP0101X "Anatomic Pathology Physician" 
* $NUCCProviderTaxonomy#207ZP0102X "Anatomic Pathology & Clinical Pathology Physician" 
* $NUCCProviderTaxonomy#207ZP0104X "Chemical Pathology Physician" 
* $NUCCProviderTaxonomy#207ZP0105X "Clinical Pathology/Laboratory Medicine Physician" 
* $NUCCProviderTaxonomy#207ZP0213X "Pediatric Pathology Physician" 
* $NUCCProviderTaxonomy#208000000X "Pediatrics Physician" 
* $NUCCProviderTaxonomy#2080A0000X "Pediatric Adolescent Medicine Physician" 
* $NUCCProviderTaxonomy#2080B0002X "Pediatric Obesity Medicine Physician" 
* $NUCCProviderTaxonomy#2080C0008X "Child Abuse Pediatrics Physician" 
* $NUCCProviderTaxonomy#2080H0002X "Pediatric Hospice and Palliative Medicine Physician" 
* $NUCCProviderTaxonomy#2080I0007X "Pediatric Clinical & Laboratory Immunology Physician" 
* $NUCCProviderTaxonomy#2080N0001X "Neonatal-Perinatal Medicine Physician" 
* $NUCCProviderTaxonomy#2080P0006X "Developmental – Behavioral Pediatrics Physician" 
* $NUCCProviderTaxonomy#2080P0008X "Pediatric Neurodevelopmental Disabilities Physician" 
* $NUCCProviderTaxonomy#2080P0201X "Pediatric Allergy/Immunology Physician" 
* $NUCCProviderTaxonomy#2080P0202X "Pediatric Cardiology Physician" 
* $NUCCProviderTaxonomy#2080P0203X "Pediatric Critical Care Medicine Physician" 
* $NUCCProviderTaxonomy#2080P0204X "Pediatric Emergency Medicine (Pediatrics) Physician" 
* $NUCCProviderTaxonomy#2080P0205X "Pediatric Endocrinology Physician" 
* $NUCCProviderTaxonomy#2080P0206X "Pediatric Gastroenterology Physician" 
* $NUCCProviderTaxonomy#2080P0207X "Pediatric Hematology & Oncology Physician" 
* $NUCCProviderTaxonomy#2080P0208X "Pediatric Infectious Diseases Physician" 
* $NUCCProviderTaxonomy#2080P0210X "Pediatric Nephrology Physician" 
* $NUCCProviderTaxonomy#2080P0214X "Pediatric Pulmonology Physician" 
* $NUCCProviderTaxonomy#2080P0216X "Pediatric Rheumatology Physician" 
* $NUCCProviderTaxonomy#2080S0010X "Pediatric Sports Medicine Physician" 
* $NUCCProviderTaxonomy#2080S0012X "Pediatric Sleep Medicine Physician" 
* $NUCCProviderTaxonomy#2080T0002X "Pediatric Medical Toxicology Physician" 
* $NUCCProviderTaxonomy#2080T0004X "Pediatric Transplant Hepatology Physician" 
* $NUCCProviderTaxonomy#208100000X "Physical Medicine & Rehabilitation Physician" 
* $NUCCProviderTaxonomy#2081H0002X "Hospice and Palliative Medicine (Physical Medicine & Rehabilitation) Physician" 
* $NUCCProviderTaxonomy#2081N0008X "Neuromuscular Medicine (Physical Medicine & Rehabilitation) Physician" 
* $NUCCProviderTaxonomy#2081P0004X "Spinal Cord Injury Medicine Physician" 
* $NUCCProviderTaxonomy#2081P0010X "Pediatric Rehabilitation Medicine Physician" 
* $NUCCProviderTaxonomy#2081P0301X "Brain Injury Medicine (Physical Medicine & Rehabilitation) Physician" 
* $NUCCProviderTaxonomy#2081P2900X "Pain Medicine (Physical Medicine & Rehabilitation) Physician" 
* $NUCCProviderTaxonomy#2081S0010X "Sports Medicine (Physical Medicine & Rehabilitation) Physician" 
* $NUCCProviderTaxonomy#208200000X "Plastic Surgery Physician" 
* $NUCCProviderTaxonomy#2082S0099X "Plastic Surgery Within the Head and Neck (Plastic Surgery) Physician" 
* $NUCCProviderTaxonomy#2082S0105X "Surgery of the Hand (Plastic Surgery) Physician" 
* $NUCCProviderTaxonomy#2083A0100X "Aerospace Medicine Physician" 
* $NUCCProviderTaxonomy#2083A0300X "Addiction Medicine (Preventive Medicine) Physician" 
* $NUCCProviderTaxonomy#2083B0002X "Obesity Medicine (Preventive Medicine) Physician" 
* $NUCCProviderTaxonomy#2083C0008X "Clinical Informatics Physician" 
* $NUCCProviderTaxonomy#2083P0011X "Undersea and Hyperbaric Medicine (Preventive Medicine) Physician" 
* $NUCCProviderTaxonomy#2083P0500X "Preventive Medicine/Occupational Environmental Medicine Physician" 
* $NUCCProviderTaxonomy#2083P0901X "Public Health & General Preventive Medicine Physician" 
* $NUCCProviderTaxonomy#2083S0010X "Sports Medicine (Preventive Medicine) Physician" 
* $NUCCProviderTaxonomy#2083T0002X "Medical Toxicology (Preventive Medicine) Physician" 
* $NUCCProviderTaxonomy#2083X0100X "Occupational Medicine Physician" 
* $NUCCProviderTaxonomy#2084A0401X "Addiction Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084A2900X "Neurocritical Care Physician" 
* $NUCCProviderTaxonomy#2084B0002X "Obesity Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084B0040X "Behavioral Neurology & Neuropsychiatry Physician" 
* $NUCCProviderTaxonomy#2084D0003X "Diagnostic Neuroimaging (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084F0202X "Forensic Psychiatry Physician" 
* $NUCCProviderTaxonomy#2084H0002X "Hospice and Palliative Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084N0008X "Neuromuscular Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084N0400X "Neurology Physician" 
* $NUCCProviderTaxonomy#2084N0402X "Neurology with Special Qualifications in Child Neurology Physician" 
* $NUCCProviderTaxonomy#2084N0600X "Clinical Neurophysiology Physician" 
* $NUCCProviderTaxonomy#2084P0005X "Neurodevelopmental Disabilities Physician" 
* $NUCCProviderTaxonomy#2084P0015X "Psychosomatic Medicine Physician" 
* $NUCCProviderTaxonomy#2084P0301X "Brain Injury Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084P0800X "Psychiatry Physician" 
* $NUCCProviderTaxonomy#2084P0802X "Addiction Psychiatry Physician" 
* $NUCCProviderTaxonomy#2084P0804X "Child & Adolescent Psychiatry Physician" 
* $NUCCProviderTaxonomy#2084P0805X "Geriatric Psychiatry Physician" 
* $NUCCProviderTaxonomy#2084P2900X "Pain Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084S0010X "Sports Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084S0012X "Sleep Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084V0102X "Vascular Neurology Physician" 
* $NUCCProviderTaxonomy#2085B0100X "Body Imaging Physician" 
* $NUCCProviderTaxonomy#2085D0003X "Diagnostic Neuroimaging (Radiology) Physician" 
* $NUCCProviderTaxonomy#2085H0002X "Hospice and Palliative Medicine (Radiology) Physician" 
* $NUCCProviderTaxonomy#2085N0700X "Neuroradiology Physician" 
* $NUCCProviderTaxonomy#2085N0904X "Nuclear Radiology Physician" 
* $NUCCProviderTaxonomy#2085P0229X "Pediatric Radiology Physician" 
* $NUCCProviderTaxonomy#2085R0001X "Radiation Oncology Physician" 
* $NUCCProviderTaxonomy#2085R0202X "Diagnostic Radiology Physician" 
* $NUCCProviderTaxonomy#2085R0203X "Therapeutic Radiology Physician" 
* $NUCCProviderTaxonomy#2085R0204X "Vascular & Interventional Radiology Physician" 
* $NUCCProviderTaxonomy#2085R0205X "Radiological Physics Physician" 
* $NUCCProviderTaxonomy#2085U0001X "Diagnostic Ultrasound Physician" 
* $NUCCProviderTaxonomy#208600000X "Surgery Physician" 
* $NUCCProviderTaxonomy#2086H0002X "Hospice and Palliative Medicine (Surgery) Physician" 
* $NUCCProviderTaxonomy#2086S0102X "Surgical Critical Care Physician" 
* $NUCCProviderTaxonomy#2086S0105X "Surgery of the Hand (Surgery) Physician" 
* $NUCCProviderTaxonomy#2086S0120X "Pediatric Surgery Physician" 
* $NUCCProviderTaxonomy#2086S0122X "Plastic and Reconstructive Surgery Physician" 
* $NUCCProviderTaxonomy#2086S0127X "Trauma Surgery Physician" 
* $NUCCProviderTaxonomy#2086S0129X "Vascular Surgery Physician" 
* $NUCCProviderTaxonomy#2086X0206X "Surgical Oncology Physician" 
* $NUCCProviderTaxonomy#208800000X "Urology Physician" 
* $NUCCProviderTaxonomy#2088F0040X "Female Pelvic Medicine and Reconstructive Surgery (Urology) Physician" 
* $NUCCProviderTaxonomy#2088P0231X "Pediatric Urology Physician" 
* $NUCCProviderTaxonomy#208C00000X "Colon & Rectal Surgery Physician" 
* $NUCCProviderTaxonomy#208D00000X "General Practice Physician" 
* $NUCCProviderTaxonomy#208G00000X "Thoracic Surgery (Cardiothoracic Vascular Surgery) Physician" 
* $NUCCProviderTaxonomy#208M00000X "Hospitalist Physician" 
* $NUCCProviderTaxonomy#208U00000X "Clinical Pharmacology Physician" 
* $NUCCProviderTaxonomy#208VP0000X "Pain Medicine Physician" 
* $NUCCProviderTaxonomy#208VP0014X "Interventional Pain Medicine Physician" 
* $NUCCProviderTaxonomy#209800000X "Legal Medicine (M.D./D.O.) Physician" 
* $NUCCProviderTaxonomy#211D00000X "Podiatric Assistant" 
* $NUCCProviderTaxonomy#213E00000X "Podiatrist" 
* $NUCCProviderTaxonomy#213EP0504X "Public Medicine Podiatrist" 
* $NUCCProviderTaxonomy#213EP1101X "Primary Podiatric Medicine Podiatrist" 
* $NUCCProviderTaxonomy#213ER0200X "Radiology Podiatrist" 
* $NUCCProviderTaxonomy#213ES0000X "Sports Medicine Podiatrist" 
* $NUCCProviderTaxonomy#213ES0103X "Foot & Ankle Surgery Podiatrist" 
* $NUCCProviderTaxonomy#213ES0131X "Foot Surgery Podiatrist" 
* $NUCCProviderTaxonomy#221700000X "Art Therapist" 
* $NUCCProviderTaxonomy#222Q00000X "Developmental Therapist" 
* $NUCCProviderTaxonomy#222Z00000X "Orthotist" 
* $NUCCProviderTaxonomy#224900000X "Mastectomy Fitter" 
* $NUCCProviderTaxonomy#224L00000X "Pedorthist" 
* $NUCCProviderTaxonomy#224P00000X "Prosthetist" 
* $NUCCProviderTaxonomy#224Y00000X "Clinical Exercise Physiologist" 
* $NUCCProviderTaxonomy#224Z00000X "Occupational Therapy Assistant" 
* $NUCCProviderTaxonomy#224ZE0001X "Environmental Modification Occupational Therapy Assistant" 
* $NUCCProviderTaxonomy#224ZF0002X "Feeding, Eating & Swallowing Occupational Therapy Assistant" 
* $NUCCProviderTaxonomy#224ZL0004X "Low Vision Occupational Therapy Assistant" 
* $NUCCProviderTaxonomy#224ZR0403X "Driving and Community Mobility Occupational Therapy Assistant" 
* $NUCCProviderTaxonomy#225000000X "Orthotic Fitter" 
* $NUCCProviderTaxonomy#225100000X "Physical Therapist" 
* $NUCCProviderTaxonomy#2251C2600X "Cardiopulmonary Physical Therapist" 
* $NUCCProviderTaxonomy#2251E1200X "Ergonomics Physical Therapist" 
* $NUCCProviderTaxonomy#2251E1300X "Clinical Electrophysiology Physical Therapist" 
* $NUCCProviderTaxonomy#2251G0304X "Geriatric Physical Therapist" 
* $NUCCProviderTaxonomy#2251H1200X "Hand Physical Therapist" 
* $NUCCProviderTaxonomy#2251H1300X "Human Factors Physical Therapist" 
* $NUCCProviderTaxonomy#2251N0400X "Neurology Physical Therapist" 
* $NUCCProviderTaxonomy#2251P0200X "Pediatric Physical Therapist" 
* $NUCCProviderTaxonomy#2251S0007X "Sports Physical Therapist" 
* $NUCCProviderTaxonomy#2251X0800X "Orthopedic Physical Therapist" 
* $NUCCProviderTaxonomy#225200000X "Physical Therapy Assistant" 
* $NUCCProviderTaxonomy#225400000X "Rehabilitation Practitioner" 
* $NUCCProviderTaxonomy#225500000X "Respiratory/Developmental/Rehabilitative Specialist/Technologist" 
* $NUCCProviderTaxonomy#2255A2300X "Athletic Trainer" 
* $NUCCProviderTaxonomy#2255R0406X "Blind Rehabilitation Specialist/Technologist" 
* $NUCCProviderTaxonomy#225600000X "Dance Therapist" 
* $NUCCProviderTaxonomy#225700000X "Massage Therapist" 
* $NUCCProviderTaxonomy#225800000X "Recreation Therapist" 
* $NUCCProviderTaxonomy#225A00000X "Music Therapist" 
* $NUCCProviderTaxonomy#225B00000X "Pulmonary Function Technologist" 
* $NUCCProviderTaxonomy#225C00000X "Rehabilitation Counselor" 
* $NUCCProviderTaxonomy#225CA2400X "Assistive Technology Practitioner Rehabilitation Counselor" 
* $NUCCProviderTaxonomy#225CA2500X "Assistive Technology Supplier Rehabilitation Counselor" 
* $NUCCProviderTaxonomy#225CX0006X "Orientation and Mobility Training Rehabilitation Counselor" 
* $NUCCProviderTaxonomy#225X00000X "Occupational Therapist" 
* $NUCCProviderTaxonomy#225XE0001X "Environmental Modification Occupational Therapist" 
* $NUCCProviderTaxonomy#225XE1200X "Ergonomics Occupational Therapist" 
* $NUCCProviderTaxonomy#225XF0002X "Feeding, Eating & Swallowing Occupational Therapist" 
* $NUCCProviderTaxonomy#225XG0600X "Gerontology Occupational Therapist" 
* $NUCCProviderTaxonomy#225XH1200X "Hand Occupational Therapist" 
* $NUCCProviderTaxonomy#225XH1300X "Human Factors Occupational Therapist" 
* $NUCCProviderTaxonomy#225XL0004X "Low Vision Occupational Therapist" 
* $NUCCProviderTaxonomy#225XM0800X "Mental Health Occupational Therapist" 
* $NUCCProviderTaxonomy#225XN1300X "Neurorehabilitation Occupational Therapist" 
* $NUCCProviderTaxonomy#225XP0019X "Physical Rehabilitation Occupational Therapist" 
* $NUCCProviderTaxonomy#225XP0200X "Pediatric Occupational Therapist" 
* $NUCCProviderTaxonomy#225XR0403X "Driving and Community Mobility Occupational Therapist" 
* $NUCCProviderTaxonomy#226000000X "Recreational Therapist Assistant" 
* $NUCCProviderTaxonomy#226300000X "Kinesiotherapist" 
* $NUCCProviderTaxonomy#227800000X "Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278C0205X "Critical Care Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278E0002X "Emergency Care Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278E1000X "Educational Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278G0305X "Geriatric Care Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278G1100X "General Care Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278H0200X "Home Health Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278P1004X "Pulmonary Diagnostics Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278P1005X "Pulmonary Rehabilitation Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278P1006X "Pulmonary Function Technologist Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278P3800X "Palliative/Hospice Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278P3900X "Neonatal/Pediatric Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278P4000X "Patient Transport Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278S1500X "SNF/Subacute Care Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#227900000X "Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279C0205X "Critical Care Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279E0002X "Emergency Care Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279E1000X "Educational Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279G0305X "Geriatric Care Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279G1100X "General Care Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279H0200X "Home Health Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279P1004X "Pulmonary Diagnostics Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279P1005X "Pulmonary Rehabilitation Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279P1006X "Pulmonary Function Technologist Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279P3800X "Palliative/Hospice Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279P3900X "Neonatal/Pediatric Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279P4000X "Patient Transport Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279S1500X "SNF/Subacute Care Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#229N00000X "Anaplastologist" 
* $NUCCProviderTaxonomy#231H00000X "Audiologist" 
* $NUCCProviderTaxonomy#231HA2400X "Assistive Technology Practitioner Audiologist" 
* $NUCCProviderTaxonomy#231HA2500X "Assistive Technology Supplier Audiologist" 
* $NUCCProviderTaxonomy#235500000X "Speech/Language/Hearing Specialist/Technologist" 
* $NUCCProviderTaxonomy#2355A2700X "Audiology Assistant" 
* $NUCCProviderTaxonomy#2355S0801X "Speech-Language Assistant" 
* $NUCCProviderTaxonomy#235Z00000X "Speech-Language Pathologist" 
* $NUCCProviderTaxonomy#237600000X "Audiologist-Hearing Aid Fitter" 
* $NUCCProviderTaxonomy#237700000X "Hearing Instrument Specialist" 
* $NUCCProviderTaxonomy#242T00000X "Perfusionist" 
* $NUCCProviderTaxonomy#243U00000X "Radiology Practitioner Assistant" 
* $NUCCProviderTaxonomy#246Q00000X "Pathology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QB0000X "Blood Banking Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QC1000X "Chemistry Pathology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QC2700X "Cytotechnology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QH0000X "Hematology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QH0401X "Hemapheresis Practitioner" 
* $NUCCProviderTaxonomy#246QH0600X "Histology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QI0000X "Immunology Pathology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QL0900X "Laboratory Management Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QL0901X "Diplomate Laboratory Management Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QM0706X "Medical Technologist" 
* $NUCCProviderTaxonomy#246QM0900X "Microbiology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246R00000X "Pathology Technician" 
* $NUCCProviderTaxonomy#246RH0600X "Histology Technician" 
* $NUCCProviderTaxonomy#246RM2200X "Medical Laboratory Technician" 
* $NUCCProviderTaxonomy#246RP1900X "Phlebotomy Technician" 
* $NUCCProviderTaxonomy#246W00000X "Cardiology Technician" 
* $NUCCProviderTaxonomy#246X00000X "Cardiovascular Specialist/Technologist" 
* $NUCCProviderTaxonomy#246XC2901X "Cardiovascular Invasive Specialist/Technologist" 
* $NUCCProviderTaxonomy#246XC2903X "Vascular Specialist/Technologist" 
* $NUCCProviderTaxonomy#246XS1301X "Sonography Specialist/Technologist" 
* $NUCCProviderTaxonomy#246Y00000X "Health Information Specialist/Technologist" 
* $NUCCProviderTaxonomy#246YC3301X "Hospital Based Coding Specialist" 
* $NUCCProviderTaxonomy#246YC3302X "Physician Office Based Coding Specialist" 
* $NUCCProviderTaxonomy#246YR1600X "Registered Record Administrator" 
* $NUCCProviderTaxonomy#246Z00000X "Other Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZA2600X "Medical Art Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZB0301X "Biomedical Engineer" 
* $NUCCProviderTaxonomy#246ZB0302X "Biomedical Photographer" 
* $NUCCProviderTaxonomy#246ZB0500X "Biochemist" 
* $NUCCProviderTaxonomy#246ZB0600X "Biostatiscian" 
* $NUCCProviderTaxonomy#246ZC0007X "Surgical Assistant" 
* $NUCCProviderTaxonomy#246ZE0500X "EEG Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZE0600X "Electroneurodiagnostic Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZG0701X "Graphics Methods Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZG1000X "Medical Geneticist (PhD) Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZI1000X "Medical Illustrator" 
* $NUCCProviderTaxonomy#246ZN0300X "Nephrology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZS0410X "Surgical Technologist" 
* $NUCCProviderTaxonomy#246ZX2200X "Orthopedic Assistant" 
* $NUCCProviderTaxonomy#247000000X "Health Information Technician" 
* $NUCCProviderTaxonomy#2470A2800X "Assistant Health Information Record Technician" 
* $NUCCProviderTaxonomy#247100000X "Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471B0102X "Bone Densitometry Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471C1101X "Cardiovascular-Interventional Technology Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471C1106X "Cardiac-Interventional Technology Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471C3401X "Computed Tomography Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471C3402X "Radiography Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471M1202X "Magnetic Resonance Imaging Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471M2300X "Mammography Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471N0900X "Nuclear Medicine Technology Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471Q0001X "Quality Management Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471R0002X "Radiation Therapy Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471S1302X "Sonography Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471V0105X "Vascular Sonography Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471V0106X "Vascular-Interventional Technology Radiologic Technologist" 
* $NUCCProviderTaxonomy#247200000X "Other Technician" 
* $NUCCProviderTaxonomy#2472B0301X "Biomedical Engineering Technician" 
* $NUCCProviderTaxonomy#2472D0500X "Darkroom Technician" 
* $NUCCProviderTaxonomy#2472E0500X "EEG Technician" 
* $NUCCProviderTaxonomy#2472R0900X "Renal Dialysis Technician" 
* $NUCCProviderTaxonomy#2472V0600X "Veterinary Technician" 
* $NUCCProviderTaxonomy#247ZC0005X "Clinical Laboratory Director (Non-physician)" 
* $NUCCProviderTaxonomy#363A00000X "Physician Assistant" 
* $NUCCProviderTaxonomy#363AM0700X "Medical Physician Assistant" 
* $NUCCProviderTaxonomy#363AS0400X "Surgical Physician Assistant" 
* $NUCCProviderTaxonomy#363L00000X "Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LA2100X "Acute Care Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LA2200X "Adult Health Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LC0200X "Critical Care Medicine Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LC1500X "Community Health Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LF0000X "Family Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LG0600X "Gerontology Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LN0000X "Neonatal Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LN0005X "Critical Care Neonatal Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LP0200X "Pediatric Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LP0222X "Critical Care Pediatric Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LP0808X "Psychiatric/Mental Health Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LP1700X "Perinatal Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LP2300X "Primary Care Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LS0200X "School Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LW0102X "Women's Health Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LX0001X "Obstetrics & Gynecology Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LX0106X "Occupational Health Nurse Practitioner" 
* $NUCCProviderTaxonomy#364S00000X "Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SA2100X "Acute Care Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SA2200X "Adult Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SC0200X "Critical Care Medicine Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SC1501X "Community Health/Public Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SC2300X "Chronic Care Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SE0003X "Emergency Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SE1400X "Ethics Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SF0001X "Family Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SG0600X "Gerontology Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SH0200X "Home Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SH1100X "Holistic Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SI0800X "Informatics Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SL0600X "Long-Term Care Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SM0705X "Medical-Surgical Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SN0000X "Neonatal Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SN0800X "Neuroscience Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0200X "Pediatric Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0807X "Child & Adolescent Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0808X "Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0809X "Adult Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0810X "Child & Family Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0811X "Chronically Ill Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0812X "Community Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0813X "Geropsychiatric Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP1700X "Perinatal Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP2800X "Perioperative Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SR0400X "Rehabilitation Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SS0200X "School Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364ST0500X "Transplantation Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SW0102X "Women's Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SX0106X "Occupational Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SX0200X "Oncology Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SX0204X "Pediatric Oncology Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#367500000X "Certified Registered Nurse Anesthetist" 
* $NUCCProviderTaxonomy#367A00000X "Advanced Practice Midwife" 
* $NUCCProviderTaxonomy#367H00000X "Anesthesiologist Assistant" 
* $NUCCProviderTaxonomy#372500000X "Chore Provider" 
* $NUCCProviderTaxonomy#372600000X "Adult Companion" 
* $NUCCProviderTaxonomy#373H00000X "Day Training/Habilitation Specialist" 
* $NUCCProviderTaxonomy#374700000X "Technician" 
* $NUCCProviderTaxonomy#3747A0650X "Attendant Care Provider" 
* $NUCCProviderTaxonomy#3747P1801X "Personal Care Attendant" 
* $NUCCProviderTaxonomy#374J00000X "Doula" 
* $NUCCProviderTaxonomy#374K00000X "Religious Nonmedical Practitioner" 
* $NUCCProviderTaxonomy#374T00000X "Religious Nonmedical Nursing Personnel" 
* $NUCCProviderTaxonomy#374U00000X "Home Health Aide" 
* $NUCCProviderTaxonomy#376G00000X "Nursing Home Administrator" 
* $NUCCProviderTaxonomy#376J00000X "Homemaker" 
* $NUCCProviderTaxonomy#376K00000X "Nurse's Aide" 
* $NUCCProviderTaxonomy#405300000X "Prevention Professional" 


---

File: repos/HL7_SLASH_fhir-directory-query/input/fsh/InsuranceNetworkEndpointExamples.fsh




Instance: AcmeofCTStdNet
InstanceOf: NatlDirEndpointQryNetwork
Description: "Acme of CT Standard Network"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryNetwork) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* partOf = Reference(Acme)
* type = OrgTypeCS#ntwk "Network"
* name = "ACME CT Preferred Provider Network"
* contact.telecom.extension[via-intermediary].valueReference = Reference(Acme)
* contact.name.family = "Kawasaki"
* contact.name.given = "Jane"


Instance: AcmeofCTPremNet
InstanceOf: NatlDirEndpointQryNetwork
Description: "Acme of CT Premium Premium Network"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryNetwork) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* partOf = Reference(Acme)
* type = OrgTypeCS#ntwk "Network"
* name = "ACME CT Premium Preferred Provider Network"
* contact.telecom.extension[via-intermediary].valueReference = Reference(Acme)
* contact.name.family = "Kawasaki"
* contact.name.given = "Jane"
* extension[location-reference].valueReference = Reference(StateOfCTLocation)

Instance: Acme
InstanceOf: NatlDirEndpointQryOrganization
Description: "Payer Organization"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryOrganization) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Acme of CT"
* type = OrgTypeCS#payer "Payer"
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[availableStartTime].valueTime = 08:00:00
* telecom[0].extension[contactpoint-availabletime][0].extension[availableEndTime].valueTime = 17:00:00
* telecom[1].system = #url
* telecom[1].value = "https://www.acmeofct.com"
* telecom[1].rank = 1
* address.line[0] = "456 Main Street"
* address.city = "Norwalk"
* address.state = "CT"
* address.postalCode = "00014-1234"
* extension[org-description].valueString = "Acme of CT is a leading provider of health and other insurance products."

Instance: AcmeQHPGold
InstanceOf: NatlDirEndpointQryInsurancePlan
Description: "Acme of CT QHP Gold Plan"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryInsurancePlan) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* name = "Acme of CT QHP Gold"
* type = InsuranceProductTypeCS#qhp "Qualified Health Plan"
* plan.type = InsurancePlanTypeCS#gold "Gold-QHP"
* ownedBy = Reference (Acme)
* administeredBy = Reference (Acme)     // 1..1
* network[0] = Reference(AcmeofCTStdNet)
* network[1] = Reference(AcmeofCTPremNet)
* coverageArea = Reference(StateOfCTLocation)
* endpoint = Reference(AcmeOfCTPortalEndpoint)
* status = #active

Instance: AcmeQHPBronze
InstanceOf: NatlDirEndpointQryInsurancePlan
Description: "Acme of CT QHP Bronze Plan"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryInsurancePlan) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* name = "Acme of CT QHP Bronze"
* type = InsuranceProductTypeCS#qhp "Qualified Health Plan"
* plan.type = InsurancePlanTypeCS#bronze "Bronze-QHP"
* ownedBy = Reference (Acme)
* administeredBy = Reference (Acme)     // 1..1
* network[0] = Reference(AcmeofCTStdNet)
* coverageArea = Reference(StateOfCTLocation)
* endpoint = Reference(AcmeOfCTPortalEndpoint)
* status = #active

Instance: StateOfCTLocation
InstanceOf: NatlDirEndpointQryLocation
Description: "State of CT Area"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "State of CT Area"
* address.state = "CT"
* extension[region].valueAttachment.contentType = #application/json
* extension[region].valueAttachment.title = "GeoJSON Outline of the State of Connecticut"
* extension[region].valueAttachment.data  = "eyAidHlwZSI6ICJGZWF0dXJlIiwgInByb3BlcnRpZXMiOiB7ICJHRU9fSUQiOiAiMDQwMDAwMFVTMDkiLCAiU1RBVEUiOiAiMDkiLCAiTkFNRSI6ICJDb25uZWN0aWN1dCIsICJMU0FEIjogIiIsICJDRU5TVVNBUkVBIjogNDg0Mi4zNTUwMDAgfSwgImdlb21ldHJ5IjogeyAidHlwZSI6ICJNdWx0aVBvbHlnb24iLCAiY29vcmRpbmF0ZXMiOiBbIFsgWyBbIC03MS44NTk1NzAsIDQxLjMyMjM5OSBdLCBbIC03MS44NjgyMzUsIDQxLjMzMDk0MSBdLCBbIC03MS44ODYzMDIsIDQxLjMzNjQxMCBdLCBbIC03MS45MTY3MTAsIDQxLjMzMjIxNyBdLCBbIC03MS45MjIwOTIsIDQxLjMzNDUxOCBdLCBbIC03MS45MjMyODIsIDQxLjMzNTExMyBdLCBbIC03MS45MzYyODQsIDQxLjMzNzk1OSBdLCBbIC03MS45NDU2NTIsIDQxLjMzNzc5OSBdLCBbIC03MS45NTY3NDcsIDQxLjMyOTg3MSBdLCBbIC03MS45NzA5NTUsIDQxLjMyNDUyNiBdLCBbIC03MS45Nzk0NDcsIDQxLjMyOTk4NyBdLCBbIC03MS45ODIxOTQsIDQxLjMyOTg2MSBdLCBbIC03MS45ODgxNTMsIDQxLjMyMDU3NyBdLCBbIC03Mi4wMDAyOTMsIDQxLjMxOTIzMiBdLCBbIC03Mi4wMDUxNDMsIDQxLjMwNjY4NyBdLCBbIC03Mi4wMTA4MzgsIDQxLjMwNzAzMyBdLCBbIC03Mi4wMjE4OTgsIDQxLjMxNjgzOCBdLCBbIC03Mi4wODQ0ODcsIDQxLjMxOTYzNCBdLCBbIC03Mi4wOTQ0NDMsIDQxLjMxNDE2NCBdLCBbIC03Mi4wOTk4MjAsIDQxLjMwNjk5OCBdLCBbIC03Mi4xMTE4MjAsIDQxLjI5OTA5OCBdLCBbIC03Mi4xMzQyMjEsIDQxLjI5OTM5OCBdLCBbIC03Mi4xNjE1ODAsIDQxLjMxMDI2MiBdLCBbIC03Mi4xNzM5MjIsIDQxLjMxNzU5NyBdLCBbIC03Mi4xNzc2MjIsIDQxLjMyMjQ5NyBdLCBbIC03Mi4xODQxMjIsIDQxLjMyMzk5NyBdLCBbIC03Mi4xOTEwMjIsIDQxLjMyMzE5NyBdLCBbIC03Mi4yMDE0MjIsIDQxLjMxNTY5NyBdLCBbIC03Mi4yMDMwMjIsIDQxLjMxMzE5NyBdLCBbIC03Mi4yMDQwMjIsIDQxLjI5OTA5NyBdLCBbIC03Mi4yMDE0MDAsIDQxLjI4ODQ3MCBdLCBbIC03Mi4yMDUxMDksIDQxLjI4NTE4NyBdLCBbIC03Mi4yMDk5OTIsIDQxLjI4NjA2NSBdLCBbIC03Mi4yMTI5MjQsIDQxLjI5MTM2NSBdLCBbIC03Mi4yMjUyNzYsIDQxLjI5OTA0NyBdLCBbIC03Mi4yMzU1MzEsIDQxLjMwMDQxMyBdLCBbIC03Mi4yNDgxNjEsIDQxLjI5OTQ4OCBdLCBbIC03Mi4yNTE4OTUsIDQxLjI5ODYyMCBdLCBbIC03Mi4yNTA1MTUsIDQxLjI5NDM4NiBdLCBbIC03Mi4yNTEzMjMsIDQxLjI4OTk5NyBdLCBbIC03Mi4yNjE0ODcsIDQxLjI4MjkyNiBdLCBbIC03Mi4zMTc3NjAsIDQxLjI3Nzc4MiBdLCBbIC03Mi4zMjc1OTUsIDQxLjI3ODQ2MCBdLCBbIC03Mi4zMzM4OTQsIDQxLjI4MjkxNiBdLCBbIC03Mi4zNDg2NDMsIDQxLjI3NzQ0NiBdLCBbIC03Mi4zNDgwNjgsIDQxLjI2OTY5OCBdLCBbIC03Mi4zODY2MjksIDQxLjI2MTc5OCBdLCBbIC03Mi4zOTg2ODgsIDQxLjI3ODE3MiBdLCBbIC03Mi40MDU5MzAsIDQxLjI3ODM5OCBdLCBbIC03Mi40NTE5MjUsIDQxLjI3ODg4NSBdLCBbIC03Mi40NzI1MzksIDQxLjI3MDEwMyBdLCBbIC03Mi40ODU2OTMsIDQxLjI3MDg4MSBdLCBbIC03Mi40OTk1MzQsIDQxLjI2NTg2NiBdLCBbIC03Mi41MDY2MzQsIDQxLjI2MDA5OSBdLCBbIC03Mi41MTg2NjAsIDQxLjI2MTI1MyBdLCBbIC03Mi41MjEzMTIsIDQxLjI2NTYwMCBdLCBbIC03Mi41Mjk0MTYsIDQxLjI2NDQyMSBdLCBbIC03Mi41MzMyNDcsIDQxLjI2MjY5MCBdLCBbIC03Mi41MzY3NDYsIDQxLjI1NjIwNyBdLCBbIC03Mi41NDcyMzUsIDQxLjI1MDQ5OSBdLCBbIC03Mi41NzExMzYsIDQxLjI2ODA5OCBdLCBbIC03Mi41ODMzMzYsIDQxLjI3MTY5OCBdLCBbIC03Mi41OTgwMzYsIDQxLjI2ODY5OCBdLCBbIC03Mi42MTcyMzcsIDQxLjI3MTk5OCBdLCBbIC03Mi42NDE1MzgsIDQxLjI2Njk5OCBdLCBbIC03Mi42NTM4MzgsIDQxLjI2NTg5NyBdLCBbIC03Mi42NjI4MzgsIDQxLjI2OTE5NyBdLCBbIC03Mi42NzIzMzksIDQxLjI2Njk5NyBdLCBbIC03Mi42ODQ5MzksIDQxLjI1NzU5NyBdLCBbIC03Mi42ODU1MzksIDQxLjI1MTI5NyBdLCBbIC03Mi42OTA0MzksIDQxLjI0NjY5NyBdLCBbIC03Mi42OTQ3NDQsIDQxLjI0NDk3MCBdLCBbIC03Mi43MTA1OTUsIDQxLjI0NDQ4MCBdLCBbIC03Mi43MTM2NzQsIDQxLjI0OTAwNyBdLCBbIC03Mi43MTEyMDgsIDQxLjI1MTAxOCBdLCBbIC03Mi43MTI0NjAsIDQxLjI1NDE2NyBdLCBbIC03Mi43MjI0MzksIDQxLjI1OTEzOCBdLCBbIC03Mi43MzI4MTMsIDQxLjI1NDcyNyBdLCBbIC03Mi43NTQ0NDQsIDQxLjI2NjkxMyBdLCBbIC03Mi43NTc0NzcsIDQxLjI2NjkxMyBdLCBbIC03Mi43ODYxNDIsIDQxLjI2NDc5NiBdLCBbIC03Mi44MTg3MzcsIDQxLjI1MjI0NCBdLCBbIC03Mi44MTkzNzIsIDQxLjI1NDA2MSBdLCBbIC03Mi44MjY4ODMsIDQxLjI1Njc1NSBdLCBbIC03Mi44NDc3NjcsIDQxLjI1NjY5MCBdLCBbIC03Mi44NTAyMTAsIDQxLjI1NTU0NCBdLCBbIC03Mi44NTQwNTUsIDQxLjI0Nzc0MCBdLCBbIC03Mi44NjEzNDQsIDQxLjI0NTI5NyBdLCBbIC03Mi44ODE0NDUsIDQxLjI0MjU5NyBdLCBbIC03Mi44OTU0NDUsIDQxLjI0MzY5NyBdLCBbIC03Mi45MDQzNDUsIDQxLjI0NzI5NyBdLCBbIC03Mi45MDUyNDUsIDQxLjI0ODI5NyBdLCBbIC03Mi45MDMwNDUsIDQxLjI1Mjc5NyBdLCBbIC03Mi44OTQ3NDUsIDQxLjI1NjE5NyBdLCBbIC03Mi44OTM4NDUsIDQxLjI1OTg5NyBdLCBbIC03Mi45MDgyMDAsIDQxLjI4MjkzMiBdLCBbIC03Mi45MTY4MjcsIDQxLjI4MjAzMyBdLCBbIC03Mi45MjAwNjIsIDQxLjI4MDA1NiBdLCBbIC03Mi45MjA4NDYsIDQxLjI2ODg5NyBdLCBbIC03Mi45MzU2NDYsIDQxLjI1ODQ5NyBdLCBbIC03Mi45NjIwNDcsIDQxLjI1MTU5NyBdLCBbIC03Mi45ODYyNDcsIDQxLjIzMzQ5NyBdLCBbIC03Mi45OTc5NDgsIDQxLjIyMjY5NyBdLCBbIC03My4wMDc1NDgsIDQxLjIxMDE5NyBdLCBbIC03My4wMTQ5NDgsIDQxLjIwNDI5NyBdLCBbIC03My4wMjAxNDksIDQxLjIwNDA5NyBdLCBbIC03My4wMjA0NDksIDQxLjIwNjM5NyBdLCBbIC03My4wMjI1NDksIDQxLjIwNzE5NyBdLCBbIC03My4wNTA2NTAsIDQxLjIxMDE5NyBdLCBbIC03My4wNTkzNTAsIDQxLjIwNjY5NyBdLCBbIC03My4wNzk0NTAsIDQxLjE5NDAxNSBdLCBbIC03My4xMDU0OTMsIDQxLjE3MjE5NCBdLCBbIC03My4xMDc5ODcsIDQxLjE2ODczOCBdLCBbIC03My4xMTAzNTIsIDQxLjE1OTY5NyBdLCBbIC03My4xMDk5NTIsIDQxLjE1Njk5NyBdLCBbIC03My4xMDgzNTIsIDQxLjE1MzcxOCBdLCBbIC03My4xMTEwNTIsIDQxLjE1MDc5NyBdLCBbIC03My4xMzAyNTMsIDQxLjE0Njc5NyBdLCBbIC03My4xNzAwNzQsIDQxLjE2MDUzMiBdLCBbIC03My4xNzA3MDEsIDQxLjE2NDk0NSBdLCBbIC03My4xNzc3NzQsIDQxLjE2NjY5NyBdLCBbIC03My4yMDI2NTYsIDQxLjE1ODA5NiBdLCBbIC03My4yMjgyOTUsIDQxLjE0MjYwMiBdLCBbIC03My4yMzUwNTgsIDQxLjE0Mzk5NiBdLCBbIC03My4yNDc5NTgsIDQxLjEyNjM5NiBdLCBbIC03My4yNjIzNTgsIDQxLjExNzQ5NiBdLCBbIC03My4yODY3NTksIDQxLjEyNzg5NiBdLCBbIC03My4yOTYzNTksIDQxLjEyNTY5NiBdLCBbIC03My4zMTE4NjAsIDQxLjExNjI5NiBdLCBbIC03My4zMzA2NjAsIDQxLjEwOTk5NiBdLCBbIC03My4zNzIyOTYsIDQxLjEwNDAyMCBdLCBbIC03My4zOTIxNjIsIDQxLjA4NzY5NiBdLCBbIC03My40MDAxNTQsIDQxLjA4NjI5OSBdLCBbIC03My40MTM2NzAsIDQxLjA3MzI1OCBdLCBbIC03My40MzUwNjMsIDQxLjA1NjY5NiBdLCBbIC03My40NTAzNjQsIDQxLjA1NzA5NiBdLCBbIC03My40NjgyMzksIDQxLjA1MTM0NyBdLCBbIC03My40NzczNjQsIDQxLjAzNTk5NyBdLCBbIC03My40OTMzMjcsIDQxLjA0ODE3MyBdLCBbIC03My41MTY5MDMsIDQxLjAzODczOCBdLCBbIC03My41MTY3NjYsIDQxLjAyOTQ5NyBdLCBbIC03My41MjI2NjYsIDQxLjAxOTI5NyBdLCBbIC03My41Mjg4NjYsIDQxLjAxNjM5NyBdLCBbIC03My41MzExNjksIDQxLjAyMTkxOSBdLCBbIC03My41MzAxODksIDQxLjAyODc3NiBdLCBbIC03My41MzI3ODYsIDQxLjAzMTY3MCBdLCBbIC03My41MzUzMzgsIDQxLjAzMTkyMCBdLCBbIC03My41NTE0OTQsIDQxLjAyNDMzNiBdLCBbIC03My41NjE5NjgsIDQxLjAxNjc5NyBdLCBbIC03My41Njc2NjgsIDQxLjAxMDg5NyBdLCBbIC03My41NzAwNjgsIDQxLjAwMTU5NyBdLCBbIC03My41ODM5NjgsIDQxLjAwMDg5NyBdLCBbIC03My41ODQ5ODgsIDQxLjAxMDUzNyBdLCBbIC03My41OTU2OTksIDQxLjAxNTk5NSBdLCBbIC03My42MDM5NTIsIDQxLjAxNTA1NCBdLCBbIC03My42NDM0NzgsIDQxLjAwMjE3MSBdLCBbIC03My42NTExNzUsIDQwLjk5NTIyOSBdLCBbIC03My42NTczMzYsIDQwLjk4NTE3MSBdLCBbIC03My42NTk2NzEsIDQwLjk4NzkwOSBdLCBbIC03My42NTg3NzIsIDQwLjk5MzQ5NyBdLCBbIC03My42NTkzNzIsIDQwLjk5OTQ5NyBdLCBbIC03My42NTU1NzEsIDQxLjAwNzY5NyBdLCBbIC03My42NTQ2NzEsIDQxLjAxMTY5NyBdLCBbIC03My42NTUzNzEsIDQxLjAxMjc5NyBdLCBbIC03My42NjI2NzIsIDQxLjAyMDQ5NyBdLCBbIC03My42NzA0NzIsIDQxLjAzMDA5NyBdLCBbIC03My42Nzk5NzMsIDQxLjA0MTc5NyBdLCBbIC03My42ODcxNzMsIDQxLjA1MDY5NyBdLCBbIC03My42OTQyNzMsIDQxLjA1OTI5NiBdLCBbIC03My43MTY4NzUsIDQxLjA4NzU5NiBdLCBbIC03My43MjI1NzUsIDQxLjA5MzU5NiBdLCBbIC03My43Mjc3NzUsIDQxLjEwMDY5NiBdLCBbIC03My42Mzk2NzIsIDQxLjE0MTQ5NSBdLCBbIC03My42MzIxNTMsIDQxLjE0NDkyMSBdLCBbIC03My41NjQ5NDEsIDQxLjE3NTE3MCBdLCBbIC03My41MTQ2MTcsIDQxLjE5ODQzNCBdLCBbIC03My41MDk0ODcsIDQxLjIwMDgxNCBdLCBbIC03My40ODI3MDksIDQxLjIxMjc2MCBdLCBbIC03My41MTgzODQsIDQxLjI1NjcxOSBdLCBbIC03My41NTA5NjEsIDQxLjI5NTQyMiBdLCBbIC03My41NDg5MjksIDQxLjMwNzU5OCBdLCBbIC03My41NDk1NzQsIDQxLjMxNTkzMSBdLCBbIC03My41NDg5NzMsIDQxLjMyNjI5NyBdLCBbIC03My41NDQ3MjgsIDQxLjM2NjM3NSBdLCBbIC03My41NDM0MjUsIDQxLjM3NjYyMiBdLCBbIC03My41NDExNjksIDQxLjQwNTk5NCBdLCBbIC03My41Mzc2NzMsIDQxLjQzMzkwNSBdLCBbIC03My41Mzc0NjksIDQxLjQzNTg5MCBdLCBbIC03My41MzY5NjksIDQxLjQ0MTA5NCBdLCBbIC03My41MzYwNjcsIDQxLjQ1MTMzMSBdLCBbIC03My41MzU5ODYsIDQxLjQ1MzA2MCBdLCBbIC03My41MzU4ODUsIDQxLjQ1NTIzNiBdLCBbIC03My41MzU4NTcsIDQxLjQ1NTcwOSBdLCBbIC03My41MzU3NjksIDQxLjQ1NzE1OSBdLCBbIC03My41MzQzNjksIDQxLjQ3NTg5NCBdLCBbIC03My41MzQyNjksIDQxLjQ3NjM5NCBdLCBbIC03My41MzQyNjksIDQxLjQ3NjkxMSBdLCBbIC03My41MzQxNTAsIDQxLjQ3ODA2MCBdLCBbIC03My41MzQwNTUsIDQxLjQ3ODk2OCBdLCBbIC03My41MzM5NjksIDQxLjQ3OTY5MyBdLCBbIC03My41MzAwNjcsIDQxLjUyNzE5NCBdLCBbIC03My41MjEwNDEsIDQxLjYxOTc3MyBdLCBbIC03My41MjAwMTcsIDQxLjY0MTE5NyBdLCBbIC03My41MTY3ODUsIDQxLjY4NzU4MSBdLCBbIC03My41MTE5MjEsIDQxLjc0MDk0MSBdLCBbIC03My41MTA5NjEsIDQxLjc1ODc0OSBdLCBbIC03My41MDUwMDgsIDQxLjgyMzc3MyBdLCBbIC03My41MDQ5NDQsIDQxLjgyNDI4NSBdLCBbIC03My41MDE5ODQsIDQxLjg1ODcxNyBdLCBbIC03My40OTgzMDQsIDQxLjg5MjUwOCBdLCBbIC03My40OTY1MjcsIDQxLjkyMjM4MCBdLCBbIC03My40OTI5NzUsIDQxLjk1ODUyNCBdLCBbIC03My40ODk2MTUsIDQyLjAwMDA5MiBdLCBbIC03My40ODczMTQsIDQyLjA0OTYzOCBdLCBbIC03My40MzI4MTIsIDQyLjA1MDU4NyBdLCBbIC03My4yOTQ0MjAsIDQyLjA0Njk4NCBdLCBbIC03My4yOTMwOTcsIDQyLjA0Njk0MCBdLCBbIC03My4yMzEwNTYsIDQyLjA0NDk0NSBdLCBbIC03My4yMjk3OTgsIDQyLjA0NDg3NyBdLCBbIC03My4wNTMyNTQsIDQyLjAzOTg2MSBdLCBbIC03Mi45OTk1NDksIDQyLjAzODY1MyBdLCBbIC03Mi44NjM3MzMsIDQyLjAzNzcxMCBdLCBbIC03Mi44NjM2MTksIDQyLjAzNzcwOSBdLCBbIC03Mi44NDcxNDIsIDQyLjAzNjg5NCBdLCBbIC03Mi44MTM1NDEsIDQyLjAzNjQ5NCBdLCBbIC03Mi44MTY3NDEsIDQxLjk5NzU5NSBdLCBbIC03Mi43NjY3MzksIDQyLjAwMjk5NSBdLCBbIC03Mi43NjYxMzksIDQyLjAwNzY5NSBdLCBbIC03Mi43NjMyNjUsIDQyLjAwOTc0MiBdLCBbIC03Mi43NjMyMzgsIDQyLjAxMjc5NSBdLCBbIC03Mi43NjEyMzgsIDQyLjAxNDU5NSBdLCBbIC03Mi43NTk3MzgsIDQyLjAxNjk5NSBdLCBbIC03Mi43NjEzNTQsIDQyLjAxODE4MyBdLCBbIC03Mi43NjIzMTAsIDQyLjAxOTc3NSBdLCBbIC03Mi43NjIxNTEsIDQyLjAyMTUyNyBdLCBbIC03Mi43NjA1NTgsIDQyLjAyMTg0NiBdLCBbIC03Mi43NTgxNTEsIDQyLjAyMDg2NSBdLCBbIC03Mi43NTc0NjcsIDQyLjAyMDk0NyBdLCBbIC03Mi43NTQwMzgsIDQyLjAyNTM5NSBdLCBbIC03Mi43NTE3MzgsIDQyLjAzMDE5NSBdLCBbIC03Mi43NTM1MzgsIDQyLjAzMjA5NSBdLCBbIC03Mi43NTc1MzgsIDQyLjAzMzI5NSBdLCBbIC03Mi43NTU4MzgsIDQyLjAzNjE5NSBdLCBbIC03Mi42OTU5MjcsIDQyLjAzNjc4OCBdLCBbIC03Mi42NDMxMzQsIDQyLjAzMjM5NSBdLCBbIC03Mi42MDc5MzMsIDQyLjAzMDc5NSBdLCBbIC03Mi42MDY5MzMsIDQyLjAyNDk5NSBdLCBbIC03Mi41OTAyMzMsIDQyLjAyNDY5NSBdLCBbIC03Mi41ODIzMzIsIDQyLjAyNDY5NSBdLCBbIC03Mi41NzMyMzEsIDQyLjAzMDE0MSBdLCBbIC03Mi41MjgxMzEsIDQyLjAzNDI5NSBdLCBbIC03Mi40NTY2ODAsIDQyLjAzMzk5OSBdLCBbIC03Mi4zMTcxNDgsIDQyLjAzMTkwNyBdLCBbIC03Mi4yNDk1MjMsIDQyLjAzMTYyNiBdLCBbIC03Mi4xMzU2ODcsIDQyLjAzMDI0NSBdLCBbIC03Mi4wNjM0OTYsIDQyLjAyNzM0NyBdLCBbIC03MS45ODczMjYsIDQyLjAyNjg4MCBdLCBbIC03MS44OTA3ODAsIDQyLjAyNDM2OCBdLCBbIC03MS44MDA2NTAsIDQyLjAyMzU2OSBdLCBbIC03MS43OTkyNDIsIDQyLjAwODA2NSBdLCBbIC03MS43OTc5MjIsIDQxLjkzNTM5NSBdLCBbIC03MS43OTQxNjEsIDQxLjg0MTEwMSBdLCBbIC03MS43OTQxNjEsIDQxLjg0MDE0MSBdLCBbIC03MS43OTI3ODYsIDQxLjgwODY3MCBdLCBbIC03MS43OTI3NjcsIDQxLjgwNzAwMSBdLCBbIC03MS43OTEwNjIsIDQxLjc3MDI3MyBdLCBbIC03MS43ODk2NzgsIDQxLjcyNDczNCBdLCBbIC03MS43ODY5OTQsIDQxLjY1NTk5MiBdLCBbIC03MS43ODkzNTYsIDQxLjU5NjkxMCBdLCBbIC03MS43OTc2ODMsIDQxLjQxNjcwOSBdLCBbIC03MS44MTgzOTAsIDQxLjQxOTU5OSBdLCBbIC03MS44Mzk2NDksIDQxLjQxMjExOSBdLCBbIC03MS44NDI1NjMsIDQxLjQwOTg1NSBdLCBbIC03MS44NDM0NzIsIDQxLjQwNTgzMCBdLCBbIC03MS44NDIxMzEsIDQxLjM5NTM1OSBdLCBbIC03MS44MzM0NDMsIDQxLjM4NDUyNCBdLCBbIC03MS44MzE2MTMsIDQxLjM3MDg5OSBdLCBbIC03MS44Mzc3MzgsIDQxLjM2MzUyOSBdLCBbIC03MS44MzU5NTEsIDQxLjM1MzkzNSBdLCBbIC03MS44Mjk1OTUsIDQxLjM0NDU0NCBdLCBbIC03MS44MzkwMTMsIDQxLjMzNDA0MiBdLCBbIC03MS44NjA1MTMsIDQxLjMyMDI0OCBdLCBbIC03MS44NTk1NzAsIDQxLjMyMjM5OSBdIF0gXSwgWyBbIFsgLTczLjQyMjE2NSwgNDEuMDQ3NTYyIF0sIFsgLTczLjQwMzYxMCwgNDEuMDYyNjg3IF0sIFsgLTczLjM2Nzg1OSwgNDEuMDg4MTIwIF0sIFsgLTczLjM1MjA1MSwgNDEuMDg4MTIwIF0sIFsgLTczLjM4NTczNSwgNDEuMDU5MjUwIF0sIFsgLTczLjQyMjE2NSwgNDEuMDQ3NTYyIF0gXSBdIF0gfSB9"



Instance: AcmeOfCTPortalEndpoint
InstanceOf: NatlDirEndpointQryEndpoint
Description: "Endpoint for Acme of CT Portal"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryEndpoint) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "Endpoint for Acme of CT Portal"
* connectionType = EndpointConnectionTypeCS#rest-non-fhir
* payloadType = EndpointPayloadTypeCS#NA
/* endpoint-type = #FHIR*/
* address = "https://urlofportal.acmect.com"
* extension[endpoint-usecase].extension[endpointUsecasetype].valueCodeableConcept = $V3ActReason#HOPERAT
* extension[endpoint-usecase].extension[standard].valueUri = "www.hl7.org"

* extension[endpoint-type].extension[endpointType].valueCodeableConcept = EndpointTypeCS#FHIR
* extension[secureEndpoint].valueBoolean = false
//* extension[SecureExchangeArtifacts].extension[secureExchangeArtifactsType].valueString = "digital certificates"
//* extension[SecureExchangeArtifacts].extension[expirationDate].valueDateTime = "2024-07-07T13:26:22.0314215+00:00"
* extension[igsSupported].extension[igsSupportedType].valueCodeableConcept  = IgTypeCS#FHIR
* extension[associatedServers].extension[associatedServersType].valueString  = "FHIR"
* extension[associatedServers].extension[serverURL].valueString  = "www.hl7.org"
* extension[dynamic-registration].extension[version].valueString  = "V1"
* extension[dynamic-registration].extension[binary].valueString  = "1"
* extension[secure-exchange-artifacts].extension[secureExchangeArtifactsType].valueString  = "1"
* extension[secure-exchange-artifacts].extension[certificate].valueBase64Binary  = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvck9wdGlvbnMiIDogIiIsCiAgICAgICAgICJ0eXBlIiA6ICJDcWxUb0VsbUluZm8iCiAgICAgIH0gXSwKICAgICAgImlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogIlRlc3RpbmdDcWxMaWJyYXJ5IiwKICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICB9LAogICAgICAic2NoZW1hSWRlbnRpZmllciIgOiB7CiAgICAgICAgICJpZCIgOiAidXJuOmhsNy1vcmc6ZWxtIiwKICAgICAgICAgInZlcnNpb24iIDogInIxIgogICAgICB9LAogICAgICAidXNpbmdzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiU3lzdGVtIiwKICAgICAgICAgICAgInVyaSIgOiAidXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVIiLAogICAgICAgICAgICAidXJpIiA6ICJodHRwOi8vaGw3Lm9yZy9maGlyIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImluY2x1ZGVzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAicGF0aCIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiNC4wLjEiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZXR1cm5zVHJ1ZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJldHVybnNGYWxzZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiZmFsc2UiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbHNvUmV0dXJuc1RydWUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogInRydWUiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbm90aGVyVHJ1ZVN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkJ1dElBbUZhbHNlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgInZhbHVlIiA6ICJmYWxzZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFsc29GYWxzZUhlcmUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogImZhbHNlIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjQwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjIuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcnVlTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJHcmVhdGVyIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGYWxzZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTGVzcyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVHJ1ZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiR3JlYXRlciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFub3RoZXJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMZXNzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmV0dXJuc0FDb2RlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlIiwKICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJjb2RpbmciLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGUiLAogICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInN5c3RlbSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJodHRwOi8vc25vbWVkLmluZm8vc2N0IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiY29kZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDgyODAwNCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRpc3BsYXkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiUG9zaXRpdmUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAidGV4dCIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJJJ20gc29tZXRoaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0KICAgfQp9Cgo="
* extension[SecureExchangeArtifacts].extension[expirationDate].valueDateTime = "2024-07-07T13:26:22.0314215+00:00"
* extension[trustFramework].extension[trustFrameworkType].valueCodeableConcept  = TrustFrameworkTypeCS#Commonwell
* extension[trustFramework].extension[qualifier].valueString  = "Yes"
* extension[trustFramework].extension[signedArtifact].valueBase64Binary  = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvck9wdGlvbnMiIDogIiIsCiAgICAgICAgICJ0eXBlIiA6ICJDcWxUb0VsbUluZm8iCiAgICAgIH0gXSwKICAgICAgImlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogIlRlc3RpbmdDcWxMaWJyYXJ5IiwKICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICB9LAogICAgICAic2NoZW1hSWRlbnRpZmllciIgOiB7CiAgICAgICAgICJpZCIgOiAidXJuOmhsNy1vcmc6ZWxtIiwKICAgICAgICAgInZlcnNpb24iIDogInIxIgogICAgICB9LAogICAgICAidXNpbmdzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiU3lzdGVtIiwKICAgICAgICAgICAgInVyaSIgOiAidXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVIiLAogICAgICAgICAgICAidXJpIiA6ICJodHRwOi8vaGw3Lm9yZy9maGlyIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImluY2x1ZGVzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAicGF0aCIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiNC4wLjEiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZXR1cm5zVHJ1ZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJldHVybnNGYWxzZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiZmFsc2UiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbHNvUmV0dXJuc1RydWUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogInRydWUiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbm90aGVyVHJ1ZVN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkJ1dElBbUZhbHNlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgInZhbHVlIiA6ICJmYWxzZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFsc29GYWxzZUhlcmUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogImZhbHNlIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjQwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjIuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcnVlTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJHcmVhdGVyIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGYWxzZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTGVzcyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVHJ1ZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiR3JlYXRlciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFub3RoZXJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMZXNzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmV0dXJuc0FDb2RlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlIiwKICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJjb2RpbmciLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGUiLAogICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInN5c3RlbSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJodHRwOi8vc25vbWVkLmluZm8vc2N0IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiY29kZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDgyODAwNCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRpc3BsYXkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiUG9zaXRpdmUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAidGV4dCIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJJJ20gc29tZXRoaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0KICAgfQp9Cgo="
* extension[trustFramework].extension[publicCertificate].valueBase64Binary  = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvck9wdGlvbnMiIDogIiIsCiAgICAgICAgICJ0eXBlIiA6ICJDcWxUb0VsbUluZm8iCiAgICAgIH0gXSwKICAgICAgImlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogIlRlc3RpbmdDcWxMaWJyYXJ5IiwKICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICB9LAogICAgICAic2NoZW1hSWRlbnRpZmllciIgOiB7CiAgICAgICAgICJpZCIgOiAidXJuOmhsNy1vcmc6ZWxtIiwKICAgICAgICAgInZlcnNpb24iIDogInIxIgogICAgICB9LAogICAgICAidXNpbmdzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiU3lzdGVtIiwKICAgICAgICAgICAgInVyaSIgOiAidXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVIiLAogICAgICAgICAgICAidXJpIiA6ICJodHRwOi8vaGw3Lm9yZy9maGlyIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImluY2x1ZGVzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAicGF0aCIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiNC4wLjEiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZXR1cm5zVHJ1ZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJldHVybnNGYWxzZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiZmFsc2UiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbHNvUmV0dXJuc1RydWUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogInRydWUiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbm90aGVyVHJ1ZVN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkJ1dElBbUZhbHNlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgInZhbHVlIiA6ICJmYWxzZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFsc29GYWxzZUhlcmUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogImZhbHNlIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjQwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjIuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcnVlTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJHcmVhdGVyIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGYWxzZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTGVzcyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVHJ1ZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiR3JlYXRlciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFub3RoZXJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMZXNzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmV0dXJuc0FDb2RlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlIiwKICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJjb2RpbmciLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGUiLAogICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInN5c3RlbSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJodHRwOi8vc25vbWVkLmluZm8vc2N0IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiY29kZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDgyODAwNCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRpc3BsYXkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiUG9zaXRpdmUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAidGV4dCIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJJJ20gc29tZXRoaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0KICAgfQp9Cgo="
* extension[secure-exchange-artifacts].extension[certificate].valueBase64Binary = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvck9wdGlvbnMiIDogIiIsCiAgICAgICAgICJ0eXBlIiA6ICJDcWxUb0VsbUluZm8iCiAgICAgIH0gXSwKICAgICAgImlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogIlRlc3RpbmdDcWxMaWJyYXJ5IiwKICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICB9LAogICAgICAic2NoZW1hSWRlbnRpZmllciIgOiB7CiAgICAgICAgICJpZCIgOiAidXJuOmhsNy1vcmc6ZWxtIiwKICAgICAgICAgInZlcnNpb24iIDogInIxIgogICAgICB9LAogICAgICAidXNpbmdzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiU3lzdGVtIiwKICAgICAgICAgICAgInVyaSIgOiAidXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVIiLAogICAgICAgICAgICAidXJpIiA6ICJodHRwOi8vaGw3Lm9yZy9maGlyIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImluY2x1ZGVzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAicGF0aCIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiNC4wLjEiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZXR1cm5zVHJ1ZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJldHVybnNGYWxzZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiZmFsc2UiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbHNvUmV0dXJuc1RydWUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogInRydWUiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbm90aGVyVHJ1ZVN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkJ1dElBbUZhbHNlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgInZhbHVlIiA6ICJmYWxzZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFsc29GYWxzZUhlcmUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogImZhbHNlIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjQwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjIuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcnVlTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJHcmVhdGVyIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGYWxzZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTGVzcyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVHJ1ZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiR3JlYXRlciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFub3RoZXJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMZXNzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmV0dXJuc0FDb2RlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlIiwKICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJjb2RpbmciLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGUiLAogICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInN5c3RlbSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJodHRwOi8vc25vbWVkLmluZm8vc2N0IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiY29kZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDgyODAwNCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRpc3BsYXkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiUG9zaXRpdmUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAidGV4dCIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJJJ20gc29tZXRoaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0KICAgfQp9Cgo="






---

File: repos/HL7_SLASH_fhir-directory-query/input/fsh/NatlDirectoryQuery.fsh

Profile: NatlDirEndpointQryCareTeam
Parent: CareTeam
Id: NatlDirEndpointQry-CareTeam
Title: "National Directory Endpoint Qry Care Team"
Description: "Defines the basic constraints and extensions on the CareTeam resource for use in a Validated Healthcare Directory"
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
* ^status = #active
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.discriminator.type = #value
* extension ^slicing.rules = #open
* extension ^mustSupport = false
* extension contains
    CareteamAlias named alias 0..*  and
    LocationReference named location 0..*  and
    HealthcareServiceReference named service 0..* and
    EndpointReference named endpoint 0..*  MS and
    UsageRestriction named restriction 0..*
* extension[alias] ^short = "Alternate name for care team"
* extension[alias] ^definition = "Alternate names by which the team is also known"
* extension[location] ^short = "Where the care team operates"
* extension[location] ^definition = "An extension to indicate the location(s) at which the care team operates"
* extension[service] ^short = "Services provided by the care team"
* extension[service] ^definition = "An extension to describe the healthcare services provided by the care team"
* extension[endpoint] ^short = "Endpoints for the care team"
* extension[endpoint] ^definition = "An extensions indicating endpoints for the care team"
* identifier MS
* identifier.extension ^slicing.discriminator.path = "url"
* identifier.extension ^slicing.discriminator.type = #value
* identifier.extension ^slicing.rules = #open
* identifier.extension ^mustSupport = false
* identifier.extension contains IdentifierStatus named status 1..1 
* identifier.extension[status] ^short = "Status"
* identifier.extension[status] ^definition = "Describes the status of an identifier"
* identifier.use 
* identifier.type 
* identifier.system 
* identifier.value 
* identifier.period 
* identifier.assigner only Reference(NatlDirEndpointQryOrganization)
* identifier.assigner 
* status 1.. 
* category 1..* MS
* name MS
* subject ..0 
* encounter ..0
* period 
* participant 
* participant.role 
* participant.member only Reference(NatlDirEndpointQryCareTeam or NatlDirEndpointQryPractitionerRole or NatlDirEndpointQryOrganization)
* participant.member 
* participant.member ^definition = "The role associated with the specific person or organization who is participating/expected to participate in the care team."
* participant.onBehalfOf ..0 
* participant.period 
* reasonCode ..0 
* reasonReference ..0 
* managingOrganization ..1 
* managingOrganization only Reference(NatlDirEndpointQryOrganization)
* telecom 
* telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..* and
       ViaIntermediary named via-intermediary 0..* 
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* telecom.system 
* telecom.value 
* note 
* note.author[x] only string or Reference(NatlDirEndpointQryPractitioner)
* note.author[x] 
* note.time 
* note.text 




Profile:        NatlDirEndpointQryEndpoint
Parent:         Endpoint
Id:             NatlDirEndpointQry-Endpoint
Title:          "National Directory Endpoint Qry Exchange Endpoint"
Description:    "The technical details of an endpoint that can be used for electronic services, such as a portal or FHIR REST services, messaging or operations, or DIRECT messaging."
* meta.lastUpdated 1..1
* extension contains 
    EndpointUsecase named endpoint-usecase 0..*  and
    IGsSupported named ig-supported 0..*  MS and
    EndpointType named endpoint-type 1..1 MS and
    SecureExchangeArtifacts named secure-exchange-artifacts 0..*  and
    TrustFramework named trust-framework 0..*  and 
    DynamicRegistration named dynamic-registration 0..*  and
    AssociatedServers named associated-servers 0..* and
    SecureEndpoint named secured-endpoint 0..1
* extension[endpoint-usecase] ^short = "Endpoint Usecase"
* status 1..1 MS 
* status = #active (exactly)  
* connectionType MS  
* connectionType from EndpointConnectionTypeVS (extensible)
* connectionType ^binding.extension[0].url = $MinValueSet
* connectionType ^binding.extension[0].valueCanonical = $MinEndpointConnectionTypeVS  
* name 
* managingOrganization only Reference(NatlDirEndpointQryOrganization)
* managingOrganization MS
* contact 
* contact.value 
* contact.system 
* payloadType 1..1  
* payloadType from EndpointPayloadTypeVS (extensible)
* payloadMimeType 
* address 
* identifier MS
* payloadMimeType MS 

Profile:        NatlDirEndpointQryHealthcareService
Parent:         HealthcareService
Id:             NatlDirEndpointQry-HealthcareService
Title:          "National Directory Endpoint Qry Exchange HealthcareService"
Description:    "The HealthCareService resource typically describes services offered by an organization/practitioner at a location. The resource may be used to encompass a variety of services covering the entire healthcare spectrum, including promotion, prevention, diagnostics, pharmacy, hospital and ambulatory care, home care, long-term care, and other health-related and community services."
* meta.lastUpdated 1..1
* extension contains
    Rating named rating 0..*  and
    NewPatients named newpatients 0..*  and
    DeliveryMethod named deliverymethod 1..* and
    PaymentAccepted named paymentaccepted  0..* and
    RequiredDocument named requiredDocument 0..* and
    FundingSource named fundingSource 0..*
* extension[newpatients] ^short = "New Patients"
* extension[deliverymethod] ^short = "Delivery Method"
* identifier.type 
* identifier.value 
* active 1..1 
* active = true 
* providedBy only Reference(NatlDirEndpointQryOrganization) 
* providedBy MS
* category 1..1 MS 
* category from HealthcareServiceCategoryVS (extensible)
* type MS
* type from HealthcareServiceTypeVS (extensible)
* specialty MS
* specialty from SpecialtiesVS (required)
* location only Reference(NatlDirEndpointQryLocation)
* location MS
* name MS
* comment 
* telecom 
* telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..*  and
       ViaIntermediary named via-intermediary 0..* 
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* telecom.system 
* telecom.value 
* coverageArea only Reference(NatlDirEndpointQryLocation)
* coverageArea MS
// * serviceProvisionCode 
// eligibility  
// program  
//* characteristic 
//* referralMethod 
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
* endpoint only Reference(NatlDirEndpointQryEndpoint)
* endpoint MS



Profile:        NatlDirEndpointQryLocation
Parent:         $USCoreLocation
Id:             NatlDirEndpointQry-Location
Title:          "National Directory Endpoint Qry Exchange Location"
Description:    "A Location is the physical place where healthcare services are provided, practitioners are employed, 
                 organizations are based, etc. Locations can range in scope from a room in a building to a geographic region/area."
* meta.lastUpdated 1..1
* extension contains
    Accessibility named accessibility 0..*  and
    NewPatients named newpatients 0..*  and
    $R4GeoJSONExtension named region 0..1 
* extension[region] ^short = "Associated Region (GeoJSON)"
* extension[newpatients] ^short = "New Patients"
* extension[accessibility] ^short = "Accessibility"
* identifier.type 
* identifier.value 
* status 1..1 
* status = $LocationStatus#active  (exactly) 
* alias 
* description 
* mode 0..0 
* type MS
* telecom 
* telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..*  and
       ViaIntermediary named via-intermediary 0..* 
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* telecom.system 
* telecom.value 
* position 
* managingOrganization 0..1 MS
* managingOrganization only Reference(NatlDirEndpointQryOrganization)
* partOf 0..1 MS
* partOf only Reference(NatlDirEndpointQryLocation)
* hoursOfOperation 
* hoursOfOperation.daysOfWeek 
* hoursOfOperation.allDay 
* hoursOfOperation.openingTime 
* hoursOfOperation.closingTime 
* availabilityExceptions 
* endpoint MS
* endpoint only Reference(NatlDirEndpointQryEndpoint)
* name MS
* address MS
* physicalType MS

/* Network -- deleted 
* identifier.id MS
* identifier.use MS
* identifier.system MS
* identifier.period MS
* identifier.assigner MS
* alias MS
* contact.name.use MS
* contact.name.text MS
* contact.name.family MS
* contact.name.given MS
* contact.name.prefix MS
* contact.name.suffix MS
* contact.name.period MS
* contact.telecom.use MS
* contact.telecom.period MS
* contact.telecom extensions -- not MS
*/
 

Profile:        NatlDirEndpointQryOrganization
Parent:         $USCoreOrganization
Id:             NatlDirEndpointQry-Organization
Title:          "National Directory Endpoint Qry Exchange Organization"
Description:    "An organization is a formal or informal grouping of people or organizations with a common purpose, such as a company, institution, corporation, community group, or healthcare practice.
Guidance:   When the contact is a department name, rather than a human (e.g., patient help line), include a blank family and given name, and provide the department name in contact.name.text"
* meta.lastUpdated 1..1
* extension contains
   Rating named rating 0..*  and
   PaymentAccepted named paymentaccepted  0..* and
   FundingSource named fundingSource 0..* and
   OrgDescription named org-description  0..1 
/** extension[qualification].extension[code].value[x] from SpecialtyAndDegreeLicenseCertificateVS (extensible)*/
* extension[org-description] ^short = "Organization Description"
* identifier MS
* identifier.type 
* identifier.value 
* identifier.assigner 0..1 MS
* active 1..1 
* active = true 
* name 
* partOf   
* partOf only Reference(NatlDirEndpointQryOrganization)
* address 0..* MS
* address.extension contains $GeolocationExtension named geolocation 0..1 
* address.type 
* address.text 
* address.line  
* address.city 
* address.state 
* address.postalCode 
* address.country 
* contact 
* contact.telecom 
* contact.telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..* and
       ViaIntermediary named via-intermediary 0..* 
* contact.telecom.extension[via-intermediary] ^short = "Via Intermediary"
* contact.telecom.value 
* contact.telecom.system 
* contact.telecom.use 
* telecom 
* telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..*  and
       ViaIntermediary named via-intermediary 0..* 
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* telecom.system 
* telecom.value 
* telecom.rank 
* type 1..* MS
* type from OrgTypeVS (extensible)
* endpoint MS
* alias MS



Profile:        NatlDirEndpointQryPractitioner
Parent:         $USCorePractitioner
Id:             NatlDirEndpointQry-Practitioner
Title:          "National Directory Endpoint Qry Exchange Practitioner"
Description:    "Practitioner is a person who is directly or indirectly involved in the provisioning of healthcare."
* meta.lastUpdated 1..1
* identifier 1..* MS
* identifier.type 
* identifier.assigner MS
* extension contains
   Rating named rating 0..*      
* identifier.value 
* active 1..1  
* active = true 
* name 1..* MS
* name.text MS
* name.family 1..1 MS
* name.given 
* address.extension contains $GeolocationExtension named geolocation 0..1  
* telecom  
* address  
* telecom.extension contains
    ContactPointAvailableTime named contactpoint-availabletime 0..*  and
    ViaIntermediary named via-intermediary 0..* 
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* qualification  MS
* qualification.extension contains 
    PractitionerQualification named practitioner-qualification 0..1 
* qualification.identifier 
* qualification.code 1..1 
* qualification.code from IndividualSpecialtyAndDegreeLicenseCertificateVS (extensible)
* qualification.issuer MS
* qualification.period 
* communication 
* communication.extension contains
   CommunicationProficiency named communication-proficiency 0..1 

/* PractitionerRole
* identifier.id MS
* identifier.use MS
* identifier.system MS
* identifier.period MS
* identifier.assigner MS
* telecom.use MS
* telecom.period MS
*/


Profile:        NatlDirEndpointQryPractitionerRole
Parent:         PractitionerRole
Id:             NatlDirEndpointQry-PractitionerRole
Title:          "National Directory Endpoint Qry Exchange PractitionerRole"
Description:    "PractionerRole describes details about a provider, which can be a practitioner or an organization. When the provider is a practitioner, 
there may be a relationship to an organization. A provider renders services to patients at a location. When the provider is a practitioner, there may also 
be a relationship to an organization. Practitioner participation in healthcare provider insurance networks may be direct or through their role at an organization."

* meta.lastUpdated 1..1
* obeys practitioner-or-organization-or-healthcareservice-or-location 
* extension contains
   Rating named rating 0..*  and 
   NewPatients named newpatients 0..*  and
   NetworkReference named network-reference 0..1  
/** extension[qualification].extension[code].value[x] from IndividualSpecialtyAndDegreeLicenseCertificateVS (extensible)*/
* extension[newpatients] ^short = "New Patients"
* extension[network-reference] ^short = "NetworkReference"
* identifier MS
* identifier.type 
* identifier.value 
* active 1..1 
//* active = true // Jira ticket FHIR-33206-SMM to support incoming/outcgoing practititcioners
* period  
* practitioner only Reference(NatlDirEndpointQryPractitioner)   // 1..1 from USCore
* organization only Reference(NatlDirEndpointQryOrganization)         // 1..1 from USCore
* practitioner 1..1 MS     // 1..1 from USCore
* organization 1..1 MS     // 1..1 from USCore
* code   MS
* code from PractitionerRoleVS
* specialty MS 
* specialty from IndividualAndGroupSpecialtiesVS (required)
* location only Reference(NatlDirEndpointQryLocation)
* location MS
* healthcareService only Reference(NatlDirEndpointQryHealthcareService)
* healthcareService MS 
* telecom 
* telecom.extension contains
    ContactPointAvailableTime named contactpoint-availabletime 0..*  and
    ViaIntermediary named via-intermediary 0..* 
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* telecom.system 1..1 
* telecom.value 1..1 
* telecom.rank 
* availableTime 
* availableTime.daysOfWeek 
* availableTime.allDay 
* availableTime.availableStartTime 
* availableTime.availableEndTime 
* notAvailable 
* notAvailable.description 
* notAvailable.during 
* endpoint only Reference(NatlDirEndpointQryEndpoint) 
* endpoint 0..*  MS



Profile:        NatlDirEndpointQryOrganizationAffiliation
Parent:         OrganizationAffiliation
Id:             NatlDirEndpointQry-OrganizationAffiliation
Title:          "National Directory Endpoint Qry Exchange OrganizationAffiliation"
Description:    "The OrganizationAffiliation resource describes relationships between two or more organizations, including the services one organization provides another, the location(s) where they provide services, the availability of those services, electronic endpoints, and other relevant information."
* meta.lastUpdated 1..1
* obeys organization-or-participatingOrganization 
/** extension[qualification].extension[code].value[x] from SpecialtyAndDegreeLicenseCertificateVS (extensible)*/
* identifier MS
* identifier.type 
* identifier.value 
* identifier.assigner MS
* active 1..1 
* active = true 
* period  //Jira ticket FHIR-33206 SMM
* organization  MS
* organization only Reference (NatlDirEndpointQryOrganization)
* participatingOrganization  MS
* participatingOrganization only Reference (NatlDirEndpointQryOrganization)
* network  
* network only Reference (NatlDirEndpointQryNetwork)
* code 
* code from OrganizationAffiliationRoleVS  (extensible)
* specialty 
* specialty from SpecialtiesVS (required)
* location  MS
* location only Reference (NatlDirEndpointQryLocation)
* healthcareService  
* healthcareService only Reference (NatlDirEndpointQryHealthcareService)
* telecom 
* telecom.system 
* telecom.value 
* telecom.rank 
* endpoint MS
* endpoint only Reference (NatlDirEndpointQryEndpoint)

/* Practitioner
* identifier.id MS
* identifier.use MS
* identifier.system MS
* identifier.period MS
* identifier.assigner MS
* name.use MS
* name.prefix MS
* name.suffix MS
* name.period MS
* gender MS
* photo MS
*/


Profile:        NatlDirEndpointQryNetwork
Parent:         $USCoreOrganization    //Organization 
Id:             NatlDirEndpointQry-Network
Title:          "National Directory Endpoint Qry Exchange Network"
Description:    "A Network refers to a healthcare provider insurance network. A healthcare provider insurance network is an aggregation of organizations and individuals that deliver a set of services across a geography through health insurance products/plans. A network is typically owned by a payer.

In the NatlDir IG, individuals and organizations are represented as participants in a National Directory Exchange Network through the practitionerRole and National Directory Exchange-organizationAffiliation resources, respectively."
* meta.lastUpdated 1..1
* extension contains
    LocationReference named location-reference 0..* MS 
* extension[location-reference] ^short = "Network coverage area"
* identifier MS
* identifier.type MS
* identifier.value MS
* identifier.assigner MS
* active 1..1 MS
* active = true (exactly)
* type from NetworkTypeVS (required)
* type 1..1 MS
* name MS
* telecom 0..0
* address 0..1 MS
* partOf 1..1 MS
* partOf only Reference(NatlDirEndpointQryOrganization)
* partOf ^short = "The organization that manages this network"
* contact MS
* contact.name MS
* contact.telecom MS
* contact.telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..*  and
       ViaIntermediary named via-intermediary 0..* 
* contact.telecom.extension[via-intermediary] ^short = "Via Intermediary"
* contact.telecom.value  MS
* contact.telecom.system  MS
* endpoint only Reference(NatlDirEndpointQryEndpoint)
* endpoint MS 

/*  Organizaiton
* identifier.id MS
* identifier.use MS
* identifier.system MS
* identifier.period MS
* identifier.assigner MS
* alias MS
* address.use MS
* address.period MS
* telecom.use MS
* telecom.period MS
*/

Profile:        NatlDirEndpointQryInsurancePlan
Parent:         InsurancePlan
Id:             NatlDirEndpointQry-InsurancePlan
Title:          "National Directory Endpoint Qry Exchange InsurancePlan"
Description:    "An InsurancePlan is a discrete package of health insurance coverage benefits that are offered under a particular network type. A given payer’s products typically differ by network type and/or covered benefits. A plan pairs a product’s covered benefits with the particular cost sharing structure offered to a consumer. A given product may comprise multiple plans (i.e. each plan offers different cost sharing requirements for the same set of covered benefits).

InsurancePlan describes a health insurance offering comprised of a list of covered benefits (i.e. the product), costs associated with those benefits (i.e. the plan), and additional information about the offering, such as who it is owned and administered by, a coverage area, contact information, etc."
* obeys network-or-NatlDirwork 
* obeys plan-type-is-distinct
* meta.lastUpdated 1..1
* identifier MS
* identifier.type 
* identifier.value 
* identifier.assigner 
* status 1..1 
* status = #active  (exactly) 
* type 1..1  MS
* type from InsuranceProductTypeVS (extensible)
* type ^short = "Product Type"
* name MS
* alias 
* ownedBy 1..1 MS
* ownedBy only Reference(NatlDirEndpointQryOrganization)
* administeredBy 1..1 MS
* administeredBy only Reference(NatlDirEndpointQryOrganization)
* coverageArea only Reference(NatlDirEndpointQryLocation)
* coverageArea MS
* contact 
* contact.name 
* contact.name.text 
* contact.telecom 
* contact.telecom.value 
* contact.telecom.system 
* endpoint only Reference(NatlDirEndpointQryEndpoint)
* endpoint  
* network only Reference(NatlDirEndpointQryNetwork)
* network  MS
* coverage.network MS
* plan ^short = "Cost sharing details for the plan"
* plan.type from InsurancePlanTypeVS (extensible)
* plan.type  
* plan.type ^short = "Categorization of the cost sharing for the plan"
* plan.coverageArea only Reference(NatlDirEndpointQryLocation)
* plan.coverageArea    
* plan.network only Reference(NatlDirEndpointQryNetwork)
* period  // Jira ticket FHIR-33206 - SMM
* coverage.benefit.type 1..1 MS



Invariant:  practitioner-or-organization-or-healthcareservice-or-location 
Description: "If NatlDirPractitionerRole.practitioner is absent  ( NatlDirPractitionerRole.organization, NatlDirPractitionerRole.healthcareservice, NatlDirPractitionerRole.location) must be present"
Expression: "practitioner.exists() or (organization.exists() or healthcareservice.exists() or location.exists())"
Severity:   #error


Invariant:  organization-or-participatingOrganization 
Description: "NatlDirEndpointQryOrganizationAffiliation.organization or  NatlDirEndpointQryOrganizationAffiliation.participatingOrganization"
Expression: "organization.exists() or participatingOrganization.exists()"
Severity:   #error

// New 09/17
Invariant:  network-or-NatlDirwork 
Description: "If an insuranceplan does not define a network, then each plan must define one"
Expression: "network.exists() or plan.network.exists.allTrue()"
Severity:   #error
//XPath:      "f:network or f:plan.network "

Invariant: plan-type-is-distinct
Description: "Each InsurancePlan.plan should have a distinct plan.type."
Expression: "plan.type.coding.code.isDistinct()"
Severity:   #error



Profile: NatlDirEndpointQryVerification
Parent: VerificationResult
Id: NatlDir-Verification
Title: "National Directory Endpoint Qry Exchange Verification"
Description: "Describes Verification requirements, source(s), status and dates for one or more elements"
* ^date = "2017-12-10T12:42:47.483-05:00"
* ^status = #active
* . ^short = "Verification"
* . ^definition = "Describes Verification requirements, source(s), status and dates for one or more elements"
* target 1..* MS
* targetLocation MS
* need 1..1 MS
* status MS
* statusDate 1..1 MS
* validationType 1..1 MS
* validationType from $verificationresult-validation-type // SMM - removed (example)
* validationType ^short = "nothing|single|multiple"
* validationType ^definition = "What the target is validated against (nothing|single source|multiple sources)"
* validationProcess 1..* MS
* validationProcess from ValidationProcessVS (example)
* validationProcess ^short = "The process(es) by which the target is validated"
* validationProcess ^definition = "The process(es) by which the target is validated"
* frequency MS
* lastPerformed MS
* nextScheduled MS
* failureAction 1..1 MS
* primarySource MS
//* primarySource.who only Reference(NatlDirOrganization or NatlDirPractitioner or NatlDirPractitionerRole)
* primarySource.who MS
* primarySource.type 1..* MS
* primarySource.type from $verificationresult-primary-source-type (example)
* primarySource.type ^short = "Type of primary source"
* primarySource.type ^definition = "Type of primary source"
* primarySource.communicationMethod 0..* MS
* primarySource.communicationMethod from $verificationresult-communication-method_1 (example)
* primarySource.validationStatus MS
* primarySource.validationDate MS
* primarySource.canPushUpdates MS
* primarySource.pushTypeAvailable MS
* attestation 1..1 MS
* attestation.who 1..1 MS
//* attestation.who only Reference(NatlDirPractitioner or NatlDirOrganization or NatlDirPractitionerRole)
//* attestation.onBehalfOf only Reference(NatlDirPractitioner or NatlDirOrganization or NatlDirPractitionerRole)
* attestation.onBehalfOf MS
* attestation.communicationMethod 1..1 MS
* attestation.communicationMethod only CodeableConcept
* attestation.communicationMethod from $verificationresult-communication-method_1 (example)
* attestation.date 1..1 MS
* attestation.sourceIdentityCertificate MS
* attestation.proxyIdentityCertificate MS
* attestation.proxySignature MS
* attestation.sourceSignature MS
* validator MS
//* validator.organization only Reference(NatlDirOrganization)
* validator.organization MS
* validator.identityCertificate MS
* validator.attestationSignature MS

Profile: NatlDirRestriction
Parent: Consent
Id: NatlDir-Restriction
Title: "National Directory Endpoint Qry Exchange Restriction"
Description: "Restriction on use/release of exchanged information"

* ^status = #active
* ^date = "2017-12-15T01:01:31.325+11:00"
* . ^short = "A policy may permit or deny recipients or roles to perform actions for specific purposes and periods of time"
* . ^alias = "Restriction"
* identifier 0..0 MS
* status MS
* status ^short = "Indicates the current state of this restriction"
* status ^comment = "This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the restriction as not currently valid."
* scope MS
* scope from ConsentVS (extensible) 
* scope ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* scope ^binding.extension.valueString = "ConsentScope"
* category MS
* category ^label = "Type"
* category ^short = "Type of restriction"
* category ^definition = "Type of restriction (conditional release (per DUA); requires flowdown agreement (for redisclosure); internal use only; release defined by access rights (as specified by the national source))"
* patient ..0 MS
* dateTime MS
* dateTime ^label = "last updated"
* dateTime ^short = "date/time of last update for this restriction"
* dateTime ^definition = "When this Restriction was issued / created / indexed."
* performer ..0 MS
* organization ..0 MS
* source[x] ..0 MS
* policy MS
* policy.authority ..0 MS
* policy.uri MS
* policy.uri ^short = "Specific policy covered by this restriction"
* policyRule  MS
* verification ..0 MS
* verification.verified MS
* verification.verifiedWith MS
* verification.verificationDate MS
* provision MS
* provision ^short = "Access rights"
* provision.type = #permit (exactly)
* provision.type MS
* provision.period ..0 MS
* provision.actor 1.. MS
* provision.actor.role MS
//* provision.actor.reference only Reference(NatlDirOrganization or NatlDirCareTeam or NatlDirPractitioner)
* provision.actor.reference MS
* provision.actor.reference ^short = "definedUserOrGroup"
* provision.action ..1 MS
* provision.action ^short = "reasonType"
* provision.action ^definition = "Describes how the reference is related to the restriction (contributes to; reason for; existance of; specific value)"
* provision.securityLabel MS
* provision.securityLabel ^short = "userType"
* provision.purpose MS
* provision.purpose ^short = "reasonName"
* provision.purpose ^definition = "Name assigned to the restriction condition"
* provision.class ..0 MS
* provision.code ..0 MS
* provision.dataPeriod ..0 MS
* provision.data ..0 MS
* provision.data.meaning MS
* provision.data.reference MS
* provision.provision ..0 MS


---

File: repos/HL7_SLASH_fhir-directory-query/input/fsh/NatlDirectoryQueryCompleteProfiles.fsh

/*
Profile:        NatlDirEndpointQryHealthcareServiceComplete
Parent:         HealthcareService
Id:             NatlDirEndpointQry-HealthcareServiceComplete
Title:          "National Directory  Endpoint Qry Exchange HealthcareService - Complete"
Description:    "The HealthCareService resource typically describes services offered by an organization/practitioner at a location. The resource may be used to encompass a variety of services covering the entire healthcare spectrum, including promotion, prevention, diagnostics, pharmacy, hospital and ambulatory care, home care, long-term care, and other health-related and community services."
* meta.lastUpdated 1..1
* extension contains
    Rating named rating 0..* MS and 
    NewPatients named newpatients 0..* MS and
    DeliveryMethod named deliverymethod 1..* MS and
    PaymentAccepted named paymentaccepted  0..* and
    RequiredDocument named requiredDocument 0..* and
    FundingSource named fundingSource 0..*
* extension[newpatients] ^short = "New Patients"
* extension[deliverymethod] ^short = "Delivery Method"
* identifier.type MS
* identifier.value MS
* active 1..1 MS
* active = true 
* providedBy only Reference(NatlDirEndpointQryOrganization) 
* providedBy MS
* category 1..1 MS
* category from HealthcareServiceCategoryVS (extensible)
* type MS
* type from HealthcareServiceTypeVS (extensible)
* specialty MS
* specialty from SpecialtiesVS (required)
* location only Reference(NatlDirEndpointQryLocation)
* location MS
* name MS
* comment MS
* telecom MS
* telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..* MS and
       ViaIntermediary named via-intermediary 0..* MS
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* telecom.system MS
* telecom.value MS
* coverageArea only Reference(NatlDirEndpointQryLocation)
* coverageArea MS
// * serviceProvisionCode MS
// eligibility  MS
// program  
//* characteristic MS
//* referralMethod MS
* appointmentRequired MS
* availableTime MS
* availableTime.daysOfWeek MS
* availableTime.allDay MS
* availableTime.availableStartTime MS
* availableTime.availableEndTime MS
* notAvailable MS
* notAvailable.description MS
* notAvailable.during MS
* availabilityExceptions MS
* endpoint only Reference(NatlDirEndpointQryEndpoint)
* endpoint MS


Profile: NatlDirEndpointQryCareTeamComplete
Parent: CareTeam
Id: NatlDirEndpointQry-CareTeamComplete
Title: "National Directory Endpoint Qry Care Team - Complete"
Description: "Defines the expanded constraints and extensions on the CareTeam resource for use in a Validated Healthcare Directory"
* ^copyright = "HL7 International"
* ^publisher = "HL7 International"
* ^status = #active
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.discriminator.type = #value
* extension ^slicing.rules = #open
* extension ^mustSupport = false
* extension contains
    CareteamAlias named alias 0..* MS and
    LocationReference named location 0..* MS and
    HealthcareServiceReference named service 0..* MS and
    EndpointReference named endpoint 0..* MS
* extension[alias] ^short = "Alternate name for care team"
* extension[alias] ^definition = "Alternate names by which the team is also known"
* extension[location] ^short = "Where the care team operates"
* extension[location] ^definition = "An extension to indicate the location(s) at which the care team operates"
* extension[service] ^short = "Services provided by the care team"
* extension[service] ^definition = "An extension to describe the healthcare services provided by the care team"
* extension[endpoint] ^short = "Endpoints for the care team"
* extension[endpoint] ^definition = "An extensions indicating endpoints for the care team"
* identifier MS
* identifier.extension ^slicing.discriminator.path = "url"
* identifier.extension ^slicing.discriminator.type = #value
* identifier.extension ^slicing.rules = #open
* identifier.extension ^mustSupport = false
* identifier.extension contains IdentifierStatus named status 1..1 MS
* identifier.extension[status] ^short = "Status"
* identifier.extension[status] ^definition = "Describes the status of an identifier"
* identifier.use MS
* identifier.type MS
* identifier.system MS
* identifier.value MS
* identifier.period MS
* identifier.assigner only Reference(NatlDirEndpointQryOrganization)
* identifier.assigner MS
* status 1.. MS
* category 1..* MS
* name MS
* subject ..0 MS
* encounter ..0
* period MS
* participant MS
* participant.role MS
* participant.member only Reference(NatlDirEndpointQryCareTeam or NatlDirEndpointQryPractitionerRole or NatlDirEndpointQryOrganization)
* participant.member MS
* participant.member ^definition = "The role associated with the specific person or organization who is participating/expected to participate in the care team."
* participant.onBehalfOf ..0 MS
* participant.period MS
* reasonCode ..0 MS
* reasonReference ..0 MS
* managingOrganization ..1 MS
* managingOrganization only Reference(NatlDirEndpointQryOrganization)
* telecom MS
* telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..* MS and
       ViaIntermediary named via-intermediary 0..* MS
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* telecom.system MS
* telecom.value MS
* note MS
* note.author[x] only string or Reference(NatlDirEndpointQryPractitioner)
* note.author[x] MS
* note.time MS
* note.text MS




Profile:        NatlDirEndpointQryEndpointComplete
Parent:         Endpoint
Id:             NatlDirEndpointQry-EndpointComplete
Title:          "National Directory Endpoint Qry Exchange Endpoint - Complete"
Description:    "The technical details of an expanded endpoint that can be used for electronic services, such as a portal or FHIR REST services, messaging or operations, or DIRECT messaging."
* meta.lastUpdated 1..1
* extension contains 
    EndpointUsecase named endpoint-usecase 0..* MS and
    IGsSupported named ig-supported 0..* MS and
    EndpointType named endpoint-type 0..* MS and
    SecureExchangeArtifacts named secure-exchange-artifacts 0..* MS and
    TrustFramework named trust-framework 0..* MS and 
    DynamicRegistration named dynamic-registration 0..* MS and
    AssociatedServers named associated-servers 0..* and
    SecureEndpoint named secured-endpoint 0..1
* extension[endpoint-usecase] ^short = "Endpoint Usecase"
* status 1..1 MS
* status = #active (exactly)  
* connectionType MS 
* connectionType from EndpointConnectionTypeVS (extensible)
* connectionType ^binding.extension[0].url = $MinValueSet
* connectionType ^binding.extension[0].valueCanonical = $MinEndpointConnectionTypeVS  
* name MS
* managingOrganization only Reference(NatlDirEndpointQryOrganization)
* managingOrganization MS
* contact MS
* contact.value MS
* contact.system MS
* payloadType 1..1 MS 
* payloadType from EndpointPayloadTypeVS (extensible)
* payloadMimeType MS
* address MS


Profile:        NatlDirEndpointQryInsurancePlanComplete
Parent:         InsurancePlan
Id:             NatlDirEndpointQry-InsurancePlanComplete
Title:          "National Directory Endpoint Qry Exchange InsurancePlan - Complete"
Description:    "An InsurancePlan is a discrete package of health insurance coverage benefits that are offered under a particular network type. A given payer’s products typically differ by network type and/or covered benefits. A plan pairs a product’s covered benefits with the particular cost sharing structure offered to a consumer. A given product may comprise multiple plans (i.e. each plan offers different cost sharing requirements for the same set of covered benefits).

InsurancePlan describes a health insurance offering comprised of a list of covered benefits (i.e. the product), costs associated with those benefits (i.e. the plan), and additional information about the offering, such as who it is owned and administered by, a coverage area, contact information, etc."
* obeys network-or-NatlDirwork 
* obeys plan-type-is-distinct
* meta.lastUpdated 1..1
* identifier.type MS
* identifier.value MS
* identifier.assigner MS
* status 1..1 MS
* status = #active  (exactly) 
* type 1..1 MS 
* type from InsuranceProductTypeVS (extensible)
* type ^short = "Product Type"
* name MS
* alias MS
* ownedBy 1..1 MS
* ownedBy only Reference(NatlDirEndpointQryOrganization)
* administeredBy 1..1 MS
* administeredBy only Reference(NatlDirEndpointQryOrganization)
* coverageArea only Reference(NatlDirEndpointQryLocation)
* coverageArea MS
* contact MS
* contact.name MS
* contact.name.text MS
* contact.telecom MS
* contact.telecom.value MS
* contact.telecom.system MS
* endpoint only Reference(NatlDirEndpointQryEndpoint)
* endpoint MS 
* network only Reference(NatlDirEndpointQryNetwork)
* network  MS
* plan ^short = "Cost sharing details for the plan"
* plan.type from InsurancePlanTypeVS (extensible)
* plan.type MS 
* plan.type ^short = "Categorization of the cost sharing for the plan"
* plan.coverageArea only Reference(NatlDirEndpointQryLocation)
* plan.coverageArea MS   
* plan.network only Reference(NatlDirEndpointQryNetwork)
* period MS // Jira ticket FHIR-33206 - SMM


Profile:        NatlDirEndpointQryLocationComplete
Parent:         $USCoreLocation
Id:             NatlDirEndpointQry-LocationComplete
Title:          "National Directory Endpoint Qry Exchange Location - Complete"
Description:    "A Location is the physical place where healthcare services are provided, practitioners are employed, 
                 organizations are based, etc. Locations can range in scope from a room in a building to a geographic region/area."
* meta.lastUpdated 1..1
* extension contains
    NewPatients named newpatients 0..* MS and
    Accessibility named accessibility 0..* MS and
    $R4GeoJSONExtension named region 0..1 MS
* extension[newpatients] ^short = "New Patients"
* extension[accessibility] ^short = "Accessibility"
* extension[region] ^short = "Associated Region (GeoJSON)"
* identifier.type MS
* identifier.value MS
* status 1..1 MS
* status = $LocationStatus#active  (exactly) 
* alias MS
* description MS
* mode 0..0
* type MS
* telecom MS
* telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..* MS and
       ViaIntermediary named via-intermediary 0..* MS
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* telecom.system MS
* telecom.value MS
* position MS
* managingOrganization 0..1 MS
* managingOrganization only Reference(NatlDirEndpointQryOrganization)
* partOf 0..1 MS
* partOf only Reference(NatlDirEndpointQryLocation)
* hoursOfOperation MS
* hoursOfOperation.daysOfWeek MS
* hoursOfOperation.allDay MS
* hoursOfOperation.openingTime MS
* hoursOfOperation.closingTime MS
* availabilityExceptions MS
* endpoint MS
* endpoint only Reference(NatlDirEndpointQryEndpoint)



Profile:        NatlDirEndpointQryNetworkComplete
Parent:         $USCoreOrganization    //Organization 
Id:             NatlDirEndpointQry-NetworkComplete
Title:          "National Directory Endpoint Qry Exchange Network - Complete"
Description:    "A Network refers to a healthcare provider insurance network. A healthcare provider insurance network is an aggregation of organizations and individuals that deliver a set of services across a geography through health insurance products/plans. A network is typically owned by a payer.

In the NatlDir IG, individuals and organizations are represented as participants in a National Directory Exchange Network through the practitionerRole and National Directory Exchange-organizationAffiliation resources, respectively."
* meta.lastUpdated 1..1
* extension contains
    LocationReference named location-reference 0..* MS
* extension[location-reference] ^short = "Network coverage area"
* identifier.type MS
* identifier.value MS
* active 1..1 MS
* active = true (exactly)
* type from NetworkTypeVS (required)
* type 1..1 MS
* name MS
* telecom 0..0
* address 0..1 MS
* partOf 1..1 MS
* partOf only Reference(NatlDirEndpointQryOrganization)
* partOf ^short = "The organization that manages this network"
* contact MS
* contact.name MS
* contact.telecom MS
* contact.telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..*  and
       ViaIntermediary named via-intermediary 0..* 
* contact.telecom.extension[via-intermediary] ^short = "Via Intermediary"
* contact.telecom.value  MS
* contact.telecom.system  MS
* endpoint only Reference(NatlDirEndpointQryEndpoint)
* endpoint MS 



Profile:        NatlDirEndpointQryOrganizationComplete
Parent:         $USCoreOrganization
Id:             NatlDirEndpointQry-OrganizationComplete
Title:          "National Directory Endpoint Qry Exchange Organization - Complete"
Description:    "An organization is a formal or informal grouping of people or organizations with a common purpose, such as a company, institution, corporation, community group, or healthcare practice.
Guidance:   When the contact is a department name, rather than a human (e.g., patient help line), include a blank family and given name, and provide the department name in contact.name.text"
* meta.lastUpdated 1..1
* extension contains
   Rating named rating 0..* MS and
   Qualification named qualification 0..*  MS and
   OrgDescription named org-description  0..1 MS
* extension[qualification].extension[code].value[x] from SpecialtyAndDegreeLicenseCertificateVS (extensible)
* extension[qualification] ^short = "Qualification"
* extension[org-description] ^short = "Organization Description"
* identifier.type MS
* identifier.value MS
* active 1..1 MS
* active = true 
* name MS
* partOf MS  
* partOf only Reference(NatlDirEndpointQryOrganization)
* address 1..* MS
* address.extension contains $GeolocationExtension named geolocation 0..1 MS
* address.type MS
* address.text MS
* address.line MS 
* address.city MS
* address.state MS
* address.postalCode MS
* address.country MS
* contact MS
* contact.telecom MS
* contact.telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..* and
       ViaIntermediary named via-intermediary 0..* 
* contact.telecom.extension[via-intermediary] ^short = "Via Intermediary"
* contact.telecom.value MS
* contact.telecom.system MS
* contact.telecom.use MS
* telecom MS
* telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..* MS and
       ViaIntermediary named via-intermediary 0..* MS
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* telecom.system MS
* telecom.value MS
* telecom.rank MS
* type 1..* MS
* type from OrgTypeVS (extensible)
* endpoint MS


Profile:        NatlDirEndpointQryOrganizationAffiliationComplete
Parent:         OrganizationAffiliation
Id:             NatlDirEndpointQry-OrganizationAffiliationComplete
Title:          "National Directory Endpoint Qry Exchange OrganizationAffiliation - Complete"
Description:    "The OrganizationAffiliation resource describes relationships between two or more organizations, including the services one organization provides another, the location(s) where they provide services, the availability of those services, electronic endpoints, and other relevant information."
* meta.lastUpdated 1..1
* obeys organization-or-participatingOrganization 
* extension contains
   Rating named rating 0..* MS and
   Qualification named qualification 0..* 
* extension[qualification].extension[code].value[x] from SpecialtyAndDegreeLicenseCertificateVS (extensible)
* identifier.type MS
* identifier.value MS
* active 1..1 MS
* active = true 
* period MS //Jira ticket FHIR-33206 SMM
* organization MS 
* organization only Reference (NatlDirEndpointQryOrganization)
* participatingOrganization MS 
* participatingOrganization only Reference (NatlDirEndpointQryOrganization)
* network MS 
* network only Reference (NatlDirEndpointQryNetwork)
* code MS
* code from OrganizationAffiliationRoleVS  (extensible)
* specialty MS
* specialty from SpecialtiesVS (required)
* location MS 
* location only Reference (NatlDirEndpointQryLocation)
* healthcareService MS 
* healthcareService only Reference (NatlDirEndpointQryHealthcareService)
* telecom MS
* telecom.system MS
* telecom.value MS
* telecom.rank MS
* endpoint MS
* endpoint only Reference (NatlDirEndpointQryEndpoint)




Profile:        NatlDirEndpointQryPractitionerComplete
Parent:         $USCorePractitioner
Id:             NatlDirEndpointQry-PractitionerComplete
Title:          "National Directory Endpoint Qry Exchange Practitioner - Complete"
Description:    "Practitioner is a person who is directly or indirectly involved in the provisioning of healthcare."
* meta.lastUpdated 1..1
* identifier.type MS
* identifier.value MS
* extension contains
   Rating named rating 0..* MS 
* active 1..1  MS
* active = true 
* name MS
* name.text MS
* name.family MS
* name.given MS
* address.extension contains $GeolocationExtension named geolocation 0..1 MS 
* telecom MS 
* address MS 
* telecom.extension contains
    ContactPointAvailableTime named contactpoint-availabletime 0..*  and
    ViaIntermediary named via-intermediary 0..* 
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* qualification MS
* qualification.extension contains 
    PractitionerQualification named practitioner-qualification 0..1 MS
* qualification.identifier MS
* qualification.code 1..1 MS
* qualification.code from IndividualSpecialtyAndDegreeLicenseCertificateVS (extensible)
* qualification.issuer MS
* qualification.period MS
* communication MS
* communication.extension contains
   CommunicationProficiency named communication-proficiency 0..1 MS



Profile:        NatlDirEndpointQryPractitionerRoleComplete
Parent:         PractitionerRole
Id:             NatlDirEndpointQry-PractitionerRoleComplete
Title:          "National Directory Endpoint Qry Exchange PractitionerRole - Complete"
Description:    "PractionerRole describes details about a provider, which can be a practitioner or an organization. When the provider is a practitioner, 
there may be a relationship to an organization. A provider renders services to patients at a location. When the provider is a practitioner, there may also 
be a relationship to an organization. Practitioner participation in healthcare provider insurance networks may be direct or through their role at an organization."

* meta.lastUpdated 1..1
* obeys practitioner-or-organization-or-healthcareservice-or-location 
* extension contains
   Rating named rating 0..* MS and
   NewPatients named newpatients 0..* MS and
   NetworkReference named network-reference 0..1 MS and
   Qualification named qualification  0..* MS
* extension[qualification].extension[code].value[x] from IndividualSpecialtyAndDegreeLicenseCertificateVS (extensible)
* extension[newpatients] ^short = "New Patients"
* extension[network-reference] ^short = "NetworkReference"
* extension[qualification] ^short = "Qualification"
* identifier.type MS
* identifier.value MS
* active 1..1 MS
//* active = true // Jira ticket FHIR-33206-SMM to support incoming/outcgoing practititcioners
* period MS 
* practitioner only Reference(NatlDirEndpointQryPractitioner)   // 1..1 from USCore
* organization only Reference(NatlDirEndpointQryOrganization)         // 1..1 from USCore
* practitioner 0..1  MS   // 1..1 from USCore
* organization 0..1   MS  // 1..1 from USCore
* code MS  
* code from PractitionerRoleVS
* specialty  MS
* specialty from IndividualAndGroupSpecialtiesVS (required)
* location only Reference(NatlDirEndpointQryLocation)
* location MS
* healthcareService only Reference(NatlDirEndpointQryHealthcareService)
* healthcareService MS 
* telecom MS
* telecom.extension contains
    ContactPointAvailableTime named contactpoint-availabletime 0..* MS and
    ViaIntermediary named via-intermediary 0..* MS
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* telecom.system 1..1 MS
* telecom.value 1..1 MS
* telecom.rank MS
* availableTime MS
* availableTime.daysOfWeek MS
* availableTime.allDay MS
* availableTime.availableStartTime MS
* availableTime.availableEndTime MS
* notAvailable MS
* notAvailable.description MS
* notAvailable.during MS
* endpoint only Reference(NatlDirEndpointQryEndpoint) 
* endpoint 0..* MS
*/




---

File: repos/HL7_SLASH_fhir-directory-query/input/fsh/NonIndividualSpecialties.fsh

ValueSet: NonIndividualSpecialtiesVS
Title: "Non-Individual Specialties"
Description:  "Non-Individual Specialties from National Uniform Claim Committee (NUCC) Health Care Provider Taxonomy code set."
* ^experimental = false
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

File: repos/HL7_SLASH_fhir-directory-query/input/fsh/OrganizationAffiliationCode.fsh


CodeSystem: OrganizationAffiliationRoleCS
Title: "Organization Affiliation Role"
Description: "Codes For Organization Affiliation Role"
* ^experimental = false
* #behavioral	"Outpatient Behavioral Health Provider" "Provider of services related to the promotion of mental health, resilience and wellbeing; the treatment of mental and substance use disorders; and the support of those who experience and/or are in recovery from these conditions, along with their families and communities."
* #bt "Member Of" "Has a relationship of participation with.  This does NOT represent a member of an insurance plan, but other types of membership such as membership of a hospital in an HIE"    // Added 7/15/2020
* #dme	"DME/Medical Supplier"	"Supplier of health care consumables or equipments supplied to patients."
* #group	"Medical Group"	"A group of people, e.g. a group of Physicians, who render health care services."
* #home	"Home Health Provider"	"Provider of health care services delivered to patients within their residence rather than a clinical setting; usually provided by nurses, home health aides, and other professionals on a regularly scheduled visit."
* #hospital	"Hospital"	"An inpatient facility, other than long-term care, providng patient treatment with specialzed medical and nursing staff and medical equipment."
* #laboratory	"Laboratory"	"Pathology and laboratory testing on clinical specimenst to obtain informaion about the health of a paeint to aid in diagnosis, treatment and prevention of disease."
* #other	"Other"		"A provider of heatlh care services not otherwise listed in this value set."
* #outpatient	"Clinic or Outpatient Facility"	 "An outpatient facility providing patient services, e.g. medical procedures, surgeries, etc."
* #pharmacy	"Pharmacy"	"An entity which provider services related to the storage, compounding, dispensing and sale of drugs."
* #transport	"Transporation Provider"	"A provider which transports patients to or from a medical facility, e.g., ambulance."
* #urgent	"Urgent Care Center"	"A center in which unscheduled health care services are provided for point-in-time evaluation or treatment of a non-life-threatening medical condition."
* #hospice "Hospice" "Hospice"
* #nurseCustodial "Nursing and Custodial Care Facility" "Nursing and Custodial Care Facility"
* #residential "Residential Treatment Facility" "Residential Treatment Facility"
* #respite "Respite Care Facility" "Respite Care Facility"
* #retail	"Retail Health Center"	"Retail Health Center"
* ^caseSensitive = true

ValueSet: OrganizationAffiliationRoleVS
Title: "OrganizationAffiliation Roles"
Description: "Value Set for Organization Affiliation Roles"
* ^experimental = false
* codes from system $HL7OrganizationRoleCS 
* exclude  $HL7OrganizationRoleCS#member  // replaced by OrganizationAffiliationRoleCS#memberof
* codes from system OrganizationAffiliationRoleCS


---

File: repos/HL7_SLASH_fhir-directory-query/input/fsh/OrganizationCareTeamExamples.fsh

Instance: HartfordOrthopedics 
InstanceOf: NatlDirEndpointQryOrganization
Description: "Hartford Orthpedic Services is a group providing Orthpods for Acme of CT at Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryOrganization)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* identifier[NPI].value = "NPI456"
* identifier[NPI].system = $NPICS
* name = "Hartford Orthopedics Services"
* type = OrgTypeCS#prvgrp "Provider Group"
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][0].valueCode  = #sat
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][1].valueCode  = #sun 
* telecom[0].extension[contactpoint-availabletime][1].extension[availableStartTime].valueTime = 08:00:00
* telecom[0].extension[contactpoint-availabletime][1].extension[availableEndTime].valueTime = 17:00:00
* telecom[1].system = #url
* telecom[1].value = "https://www.orga.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "(111)-222-3333"
* contact.telecom[0].rank = 2
* contact.telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* contact.telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* contact.telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* contact.telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* contact.telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* contact.telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* contact.telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][0].valueCode  = #sat
* contact.telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][1].valueCode  = #sun 
* contact.telecom[0].extension[contactpoint-availabletime][1].extension[availableStartTime].valueTime = 08:00:00
* contact.telecom[0].extension[contactpoint-availabletime][1].extension[availableEndTime].valueTime = 17:00:00

Instance: Hospital
InstanceOf: NatlDirEndpointQryOrganization
Description: "Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryOrganization)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* identifier[NPI].value = "NPI456"
* identifier[NPI].system = $NPICS
* name = "Hartford General Hospital"
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[1].system = #url
* telecom[1].value = "https://www.hartfordgeneralhospital.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Hartford"
* address.state = "CT"
* address.postalCode = "00014-1234"
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "(111)-222-3333"
* contact.telecom[0].rank = 1
* type = OrgTypeCS#fac "Facility"
/* 
* extension[qualification].extension[identifier]
* extension[qualification].extension[code] = 
* extension[qualification].extension[issuer].display = "CMS"
* extension[qualification].extension[status] = $QualificationStatusCS#active
*/

Instance: HospERService
InstanceOf: NatlDirEndpointQryHealthcareService
Description: "Hartford General Hospital ER"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#emerg  
* specialty =  $NUCCProviderTaxonomy#207P00000X   "Emergency Medicine Physician"
* providedBy = Reference(Hospital)
* location[0] = Reference(HospLoc1)



Instance: HospLoc1
InstanceOf: NatlDirEndpointQryLocation
Description: "Location1 of Hartford Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "Hartford Hospital Location 1"
* type = $V3RoleCode#HOSP 
* managingOrganization = Reference(Hospital)
* extension[accessibility][1].valueCodeableConcept = AccessibilityCS#pubtrans
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][5].valueCode  = #sat
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][6].valueCode  = #sun 
* telecom[1].system = #url
* telecom[1].value = "https://www.hgh.com"
* telecom[1].rank = 1
* address.line[0] = "456 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 3.0
* position.latitude = 15.0
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].daysOfWeek[4]  = #fri 
* hoursOfOperation[0].allDay = true
* hoursOfOperation[0].daysOfWeek[5]  = #sat
* hoursOfOperation[0].daysOfWeek[6]  = #sun



Instance: HospLoc2
InstanceOf: NatlDirEndpointQryLocation
Description: "Location2 of Hartford Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "Hartford Hospital Location 2"
* type = $V3RoleCode#HOSP
* managingOrganization = Reference(Hospital)
* extension[accessibility][1].valueCodeableConcept = AccessibilityCS#pubtrans
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][5].valueCode  = #sat
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][6].valueCode  = #sun 
* telecom[1].system = #url
* telecom[1].value = "https://www.hgh.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 3.0
* position.latitude = 15.0
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].daysOfWeek[4]  = #fri 
* hoursOfOperation[0].allDay = true
* hoursOfOperation[0].daysOfWeek[5]  = #sat
* hoursOfOperation[0].daysOfWeek[6]  = #sun

Instance: HartfordOrthopedicServices
InstanceOf: NatlDirEndpointQryHealthcareService
Description: "Hartford Orthopedic Services"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = DeliveryMethodCS#physical
* extension[deliverymethod].extension[virtualModalities].valueCodeableConcept = VirtualModalitiesCS#phone
* category = HealthcareServiceCategoryCS#prov 
* specialty = $NUCCProviderTaxonomy#207X00000X "Orthopaedic Surgery Physician"   // Orthopedics
* providedBy = Reference(HartfordOrthopedics)
* location[1] = Reference(HospLoc2)
* location[0] = Reference(HospLoc1)
* extension[paymentAccepted].valueCodeableConcept = $paymentTypeCS#CASH
* extension[requiredDocument].extension[document].valueString = "Insurance Card"
* extension[requiredDocument].extension[requiredDocumentId].valueString = "MV3039G"


Instance: HartfordOrthopedicAffil
InstanceOf: NatlDirEndpointQryOrganizationAffiliation
Description: "Hartford Orthopedic Services affiliation with Acme of CT Provider Network and Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = $HL7OrganizationRoleCS#provider 
* healthcareService = Reference(HartfordOrthopedicServices)
* participatingOrganization = Reference(HartfordOrthopedics)
* organization = Reference(Hospital)
* location[1] = Reference(HospLoc2)
* location[0] = Reference(HospLoc1)
* network = Reference(AcmeofCTStdNet)

Instance: HamiltonClinicAffil
InstanceOf: NatlDirEndpointQryOrganizationAffiliation
Description: "Hamilton Clinic's affiliation with Acme of CT Provider Network and Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = OrganizationAffiliationRoleCS#outpatient 
* healthcareService = Reference(HamiltonClinicServices)
* participatingOrganization = Reference(HamiltonClinic)
* location[0] = Reference(HospLoc1)
* network = Reference(AcmeofCTStdNet)


Instance: HamiltonClinicServices
InstanceOf: NatlDirEndpointQryHealthcareService
Description: "Hamilton Clinic Services"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#outpat
* specialty = $NUCCProviderTaxonomy#207Q00000X "Family Medicine Physician"  
* providedBy = Reference(HamiltonClinic)
* location[0] = Reference(HospLoc1)


Instance: HamiltonClinic
InstanceOf: NatlDirEndpointQryOrganization
Description: "Hamilton Clinic (a Division of Hartford Hospital)"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryOrganization)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* identifier[NPI].value = "NPI78"
* identifier[NPI].system = $NPICS
* name = "Hamilton Clinic"
* partOf = Reference(Hospital)
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[1].system = #url
* telecom[1].value = "https://www.hartfordgeneralhospital.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "(111)-222-3333"
* contact.telecom[0].rank = 1
* type = OrgTypeCS#fac "Facility"


Instance: BurrClinicAffil
InstanceOf: NatlDirEndpointQryOrganizationAffiliation
Description: "Burr Clinic's affiliation with Acme of CT Provider Network and Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = OrganizationAffiliationRoleCS#outpatient 
* healthcareService = Reference(BurrClinicServices)
* participatingOrganization = Reference(BurrClinic)
* location[0] = Reference(HospLoc2)
* network = Reference(AcmeofCTStdNet)
* organization = Reference(Hospital) 

Instance: BurrClinicServices
InstanceOf: NatlDirEndpointQryHealthcareService
Description: "Burr Clinic Services"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00" 
* language = #en-US
* active = true
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#outpat
* specialty = $NUCCProviderTaxonomy#101YA0400X 
* providedBy = Reference(BurrClinic)
* location[0] = Reference(HospLoc1)



Instance: BurrClinic
InstanceOf: NatlDirEndpointQryOrganization
Description: "Burr Clinic provides service to Hartford Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryOrganization)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* identifier[NPI].value = "NPI999"
* identifier[NPI].system = $NPICS
* name = "Burr Clinic"
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[1].system = #url
* telecom[1].value = "https://www.burrclinic.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "(111)-222-3333"
* contact.telecom[0].rank = 1
* type = OrgTypeCS#fac "Facility"


Instance: ConnHIE
InstanceOf: NatlDirEndpointQryOrganization
Description: "Connecticut HIE"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryOrganization)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Connecticut HIE"
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[1].system = #url
* telecom[1].value = "https://www.connhie.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "(111)-222-3333"
* contact.telecom[0].rank = 1
* type = OrgTypeCS#atyprv "Atypical Provider"

Instance: ConnHIEAffil
InstanceOf: NatlDirEndpointQryOrganizationAffiliation
Description: "Burr Clinic's affiliation with Conn HIE"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = OrganizationAffiliationRoleCS#bt
* participatingOrganization = Reference(BurrClinic)
* organization = Reference(ConnHIE)

Instance: CareTeam1
InstanceOf: NatlDirEndpointQryCareTeam
Description: "Burr Clinic's Care Team"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryCareTeam)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #proposed
* category = $loinc#LA27975-4
* extension[careteam-alias].valueString = "CareTeam1"
* extension[endpoint].valueReference = Reference(AcmeOfCTPortalEndpoint) 
* extension[service].valueReference = Reference(HansSoloService) 
* identifier.extension[status].valueCode = CredentialStatusCS#active
* extension[restriction].valueReference = Reference(PatientConsent) 

/*


Instance: PractitionerARole1
InstanceOf: NatlDirEndpointQryPractitionerRole
Description: "Dr Smith moonlighting as ER Doc at Rockville Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#PH 
* practitioner = Reference(PractitionerA)
* healthcareService = Reference(HealthCareServiceEmergency)
// specialty = internal medicine
// available M-F

Instance: PractitionerARole2
InstanceOf: NatlDirEndpointQryPractitionerRole
Description: "Dr Smith Internal Medicine at Rockville Clinic"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#PH
// specialty = internal medicine
// Available:  Sat/Sun
* healthcareService = Reference(HealthCareServiceOutpatientClinic)

Instance: HealthCareServiceOutpatientClinic
InstanceOf: NatlDirEndpointQryHealthcareService
Description: "Rockville Clinic Outpatient Internal Medicine Service"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#Outpatient
* specialty = $NUCCProviderTaxonomy#3336C0003X   // Fix to Internal Medicine
* providedBy = Reference(OrganizationInternalMedicineLLC)
* location[0] = Reference(RockvilleClinicLocation)

Instance: HealthCareServiceEmergency
InstanceOf: NatlDirEndpointQryHealthcareService
Description: "Rockville Hospital ER"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#Emergency 
* providedBy = Reference(OrganizationRockvilleHospital)
* location[0] = Reference(RockvilleHospitalLocation)


Instance: PharmacyOrganizationAffiliation1
InstanceOf: NatlDirEndpointQryOrganizationAffiliation
Description: "Organization Affiliation for PharmacyOrganizationA"
Usage: #example
* id = "1"
* meta.profile = Canonical(NatlDirEndpointQryOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* network = Reference(AcmeOfCTSPreferredProviderNetwork)
* participatingOrganization = Reference (PharmacyOrganizationA)
* healthcareService = Reference(PharmacyAHealthCareService)
* location[0] = Reference(PharmacyLocation1)
* location[1] = Reference(PharmacyLocation2)

Instance: AcmeOfCTSPreferredProviderNetwork
InstanceOf: NatlDirEndpointQryNetwork
Description: "Acme of CT Preferred Provider Network"
Usage: #example
* id = "1"
* meta.profile = Canonical(NatlDirEndpointQryNetwork)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* partOf = Reference(PayerOrganizationA)
* type = #payer 

Instance: PharmacyLocation1
InstanceOf: NatlDirEndpointQryLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "CT Location 1"
* type = $V3RoleCode#OUTPHARM
Instance: PharmacyLocation2
InstanceOf: NatlDirEndpointQryLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "CT Location 2"
* type = $V3RoleCode#OUTPHARM

Instance: PharmacyLocation3
InstanceOf: NatlDirEndpointQryLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "MA Location 1"
* type = $V3RoleCode#OUTPHARM

Instance: PharmacyLocation4
InstanceOf: NatlDirEndpointQryLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "MA Location 2"
* type = $V3RoleCode#OUTPHARM

Instance: PayerOrganizationA
InstanceOf: NatlDirEndpointQryOrganization
Description: "Payer Organization"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryOrganization)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "PayerA"
* type = $V3RoleCode#OUTPHARM
*/

---

File: repos/HL7_SLASH_fhir-directory-query/input/fsh/PharmacyExamples.fsh

Instance: PharmChain
InstanceOf: NatlDirEndpointQryOrganization
Description: "Organization that Provides Pharmacy Services"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryOrganization) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Pharm Chain"
* type = OrgTypeCS#prvgrp "Provider Group"
* identifier[NPI].system = $NPICS
* identifier[NPI].value = "NPI-ORGA"
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[availableStartTime].valueTime = 08:00:00
* telecom[0].extension[contactpoint-availabletime][0].extension[availableEndTime].valueTime = 17:00:00
* telecom[1].system = #url
* telecom[1].value = "https://www.pharmchain.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Norwalk"
* address.state = "CT"
* address.postalCode = "00014-1234"

Instance: BigBox
InstanceOf: NatlDirEndpointQryOrganization
Description: "Organization that Manages 2 of PharmChain's pharmacies"
Usage: #example
* meta.profile =  Canonical(NatlDirEndpointQryOrganization) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "BigBox"
* type = OrgTypeCS#bus "Non-Healthcare Business"
* name = "Big Box Retailer"
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[availableStartTime].valueTime = 08:00:00
* telecom[0].extension[contactpoint-availabletime][0].extension[availableEndTime].valueTime = 17:00:00
* telecom[1].system = #url
* telecom[1].value = "https://www.bixboxretailer.com"
* telecom[1].rank = 1
* address.line[0] = "456 Main Street"
* address.city = "Norwalk"
* address.state = "CT"
* address.postalCode = "00014-1234"


Instance: PharmChainRetailService
InstanceOf: NatlDirEndpointQryHealthcareService
Description: "Pharmacy Service provided by PharmChain"
Usage: #example
* meta.profile =  Canonical(NatlDirEndpointQryHealthcareService) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Pharmacy by PharmChain"
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = DeliveryMethodCS#physical
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = AcceptingPatientsCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* category = HealthcareServiceCategoryCS#pharm   "Pharmacy"
* specialty = $NUCCProviderTaxonomy#3336C0003X "Community/Retail Pharmacy"
* providedBy = Reference(PharmChain)
* location[0] = Reference(PharmLoc1)
* location[1] = Reference(PharmLoc2)
* location[2] = Reference(PharmLoc3)
* location[3] = Reference(PharmLoc4)
* telecom.extension[via-intermediary].valueReference = Reference(PharmChain)


Instance: PharmChainAffil1
InstanceOf: NatlDirEndpointQryOrganizationAffiliation
Description: "Organization Affiliation for PharmChain (Retail)"
Usage: #example
* meta.profile =  Canonical(NatlDirEndpointQryOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* network = Reference(AcmeofCTStdNet)
* participatingOrganization = Reference (PharmChain)
* healthcareService = Reference(PharmChainRetailService)
* location[0] = Reference(PharmLoc1)
* location[1] = Reference(PharmLoc2)
* code = OrganizationAffiliationRoleCS#pharmacy 
* specialty = $NUCCProviderTaxonomy#3336C0003X "Community/Retail Pharmacy"

Instance: PharmChainAffil2
InstanceOf: NatlDirEndpointQryOrganizationAffiliation
Description: "Organization Affiliation for PharmChain (Compounding)"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* network = Reference(AcmeofCTStdNet)
* specialty = $NUCCProviderTaxonomy#3336C0004X "Compounding Pharmacy"
* participatingOrganization = Reference (PharmChain)
* healthcareService = Reference(PharmChainCompService)
* location[0] = Reference(PharmLoc1)
* code = OrganizationAffiliationRoleCS#pharmacy 

Instance: PharmChainAffil3
InstanceOf: NatlDirEndpointQryOrganizationAffiliation
Description: "Organization Affiliation for PharmChain (MailOrder)"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* network = Reference(AcmeofCTStdNet)
* participatingOrganization = Reference (PharmChain)
* healthcareService = Reference(PharmChainMailService)
* code = OrganizationAffiliationRoleCS#pharmacy 
* specialty = $NUCCProviderTaxonomy#3336M0002X "Mail Order Pharmacy"


Instance: PharmChainCompService
InstanceOf: NatlDirEndpointQryHealthcareService
Description: "Compound Pharmacy Service provided by PharmacyOrganization A"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryHealthcareService) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Compounding Pharmacy by OrgA"
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#pharm "Pharmacy"
* specialty = $NUCCProviderTaxonomy#3336C0004X "Compounding Pharmacy"
* specialty.text = "Compounding Pharmacy"
* providedBy = Reference(PharmChain)
* location[0] = Reference(PharmLoc1)
* telecom.extension[via-intermediary].valueReference = Reference(PharmLoc1)

Instance: PharmChainMailService
InstanceOf: NatlDirEndpointQryHealthcareService
Description: "Mail Order Pharmacy Service provided by PharmacyOrganization A"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryHealthcareService) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Mail Order Pharmacy by OrgA"
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = DeliveryMethodCS#virtual
* extension[deliverymethod].extension[virtualModalities][0].valueCodeableConcept = VirtualModalitiesCS#web
* extension[deliverymethod].extension[virtualModalities][1].valueCodeableConcept = VirtualModalitiesCS#app 
* extension[deliverymethod].extension[virtualModalities][2].valueCodeableConcept = VirtualModalitiesCS#tdd 
* extension[deliverymethod].extension[virtualModalities][3].valueCodeableConcept =  VirtualModalitiesCS#phone 
* category = HealthcareServiceCategoryCS#pharm "Pharmacy"
* specialty = $NUCCProviderTaxonomy#3336M0002X "Mail Order Pharmacy"
* providedBy = Reference(PharmChain)
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[1].system = #url
* telecom[1].value = "https://mailorderrx.com"
* telecom[1].rank = 1



Instance: PharmLoc1
InstanceOf: NatlDirEndpointQryLocation
Description: "Location of Pharmacy1 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "OrgA CT Location 1"
* type = $V3RoleCode#OUTPHARM "outpatient pharmacy"
* managingOrganization = Reference(BigBox)
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = AcceptingPatientsCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* extension[accessibility][1].valueCodeableConcept = AccessibilityCS#pubtrans
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][0].valueCode  = #sat
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][1].valueCode  = #sun 
* telecom[0].extension[contactpoint-availabletime][1].extension[availableStartTime].valueTime = 08:00:00
* telecom[0].extension[contactpoint-availabletime][1].extension[availableEndTime].valueTime = 17:00:00
* telecom[1].system = #url
* telecom[1].value = "https://www.orga.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 3.0
* position.latitude = 15.0
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].daysOfWeek[4]  = #fri 
* hoursOfOperation[0].allDay = true
* hoursOfOperation[1].daysOfWeek[0]  = #sat
* hoursOfOperation[1].daysOfWeek[1]  = #sun
* hoursOfOperation[1].openingTime = 08:00:00
* hoursOfOperation[1].closingTime = 17:00:00



Instance: PharmLoc2
InstanceOf: NatlDirEndpointQryLocation
Description: "Location of Pharmacy2 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "OrgA CT Location 2"
* type = $V3RoleCode#OUTPHARM "outpatient pharmacy"
* managingOrganization = Reference(BigBox)
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = AcceptingPatientsCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp
* extension[accessibility][1].valueCodeableConcept = AccessibilityCS#pubtrans
* telecom[0].system = #phone
* telecom[0].value = "(777)-888-9999"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][0].valueCode  = #sat
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][1].valueCode  = #sun 
* telecom[0].extension[contactpoint-availabletime][1].extension[availableStartTime].valueTime = 08:00:00
* telecom[0].extension[contactpoint-availabletime][1].extension[availableEndTime].valueTime = 17:00:00
* telecom[1].system = #url
* telecom[1].value = "https://www.orga.com"
* telecom[1].rank = 1
* address.line[0] = "444 Main Street"
* address.city = "Rainbow"
* address.state = "CT"
* address.postalCode = "00014-1334"
* position.longitude = 9.0
* position.latitude = 18.0
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].daysOfWeek[4]  = #fri 
* hoursOfOperation[0].allDay = true
* hoursOfOperation[1].daysOfWeek[0]  = #sat
* hoursOfOperation[1].daysOfWeek[1]  = #sun
* hoursOfOperation[1].openingTime = 08:00:00
* hoursOfOperation[1].closingTime = 17:00:00


Instance: PharmLoc3
InstanceOf: NatlDirEndpointQryLocation
Description: "Location of Pharmacy3 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "OrgA MA Location 1"
* type = $V3RoleCode#OUTPHARM "outpatient pharmacy"
* managingOrganization = Reference(BigBox)
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = AcceptingPatientsCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp
* extension[accessibility][1].valueCodeableConcept = AccessibilityCS#pubtrans
* telecom[0].system = #phone
* telecom[0].value = "(444)-555-666"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][0].valueCode  = #sat
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][1].valueCode  = #sun 
* telecom[0].extension[contactpoint-availabletime][1].extension[availableStartTime].valueTime = 08:00:00
* telecom[0].extension[contactpoint-availabletime][1].extension[availableEndTime].valueTime = 17:00:00
* telecom[1].system = #url
* telecom[1].value = "https://www.orga.com"
* telecom[1].rank = 1
* address.line[0] = "456 Main Street"
* address.city = "Somewhere"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 7.0
* position.latitude = 12.0
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].allDay = true
* hoursOfOperation[1].daysOfWeek[0]  = #sun
* hoursOfOperation[1].openingTime = 08:00:00
* hoursOfOperation[1].closingTime = 17:00:00


Instance: PharmLoc4
InstanceOf: NatlDirEndpointQryLocation
Description: "Location of Pharmacy4 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "OrgA MA Location 2"
* type = $V3RoleCode#OUTPHARM "outpatient pharmacy"
* managingOrganization = Reference(BigBox)
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = AcceptingPatientsCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp
* telecom[0].system = #phone
* telecom[0].value = "(222)-333-4444"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][0].valueCode  = #sat
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][1].valueCode  = #sun 
* telecom[0].extension[contactpoint-availabletime][1].extension[availableStartTime].valueTime = 08:00:00
* telecom[0].extension[contactpoint-availabletime][1].extension[availableEndTime].valueTime = 17:00:00
* telecom[1].system = #url
* telecom[1].value = "https://www.orga.com"
* telecom[1].rank = 1
* address.line[0] = "345 Main Street"
* address.city = "Nowheresville"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 5.0
* position.latitude = 16.0
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].daysOfWeek[4]  = #fri 
* hoursOfOperation[0].allDay = true
* hoursOfOperation[1].daysOfWeek[0]  = #sat
* hoursOfOperation[1].openingTime = 08:00:00
* hoursOfOperation[1].closingTime = 17:00:00



---

File: repos/HL7_SLASH_fhir-directory-query/input/fsh/PractitionerExamples.fsh

Instance: JoeSmith
InstanceOf: NatlDirEndpointQryPractitioner
Description: "Practitioner Dr Joe Smith"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryPractitioner)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* identifier[NPI].value = "NPI323"
* identifier[NPI].system = $NPICS
* name.text = "Joe Smith, MD"
* name.family = "Smith"
* name.given[0] = "Joe"
* qualification[0].code = $V2table0360CS#MD
* qualification[0].issuer.display = "State of Illinois"
* qualification[0].code.text = "MD"
* qualification[0].extension[practitioner-qualification].extension[status].valueCode = QualificationStatusCS#active 
* qualification[0].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* qualification[1].code = $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* qualification[1].issuer.display = "American Board of Internal Medicine"
* qualification[1].code.text = "Board Certified Internal Medicine"
* qualification[1].extension[practitioner-qualification].extension[status].valueCode = QualificationStatusCS#active 
* qualification[1].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* qualification[2].code = $NUCCProviderTaxonomy#207RC0000X "Cardiovascular Disease Physician"
* qualification[2].issuer.display = "American Board of Internal Medicine"
* qualification[2].code.text = "Board Certified Cardiovascular Disease"
* qualification[2].extension[practitioner-qualification].extension[status].valueCode = QualificationStatusCS#active 
* qualification[2].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
//* rating.type = "5"
//* rating[0].value.text = "5"
* extension[rating].extension[ratingType].valueCodeableConcept = $USPSStateCS#IL 
* extension[rating].extension[ratingValue].valueString = "5"


Instance: HansSolo
InstanceOf: NatlDirEndpointQryPractitioner
Description: "Solo Practitioner Hans Solo"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryPractitioner)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* identifier[NPI].value = "NPI3233"
* identifier[NPI].system = $NPICS
* name.text = "Hans Solo, MD"
* name.family = "Solo"
* name.given[0] = "Hans"
* qualification[0].code = $V2table0360CS#MD
* qualification[0].issuer.display = "State of Illinois"
* qualification[0].code.text = "MD"
* qualification[0].extension[practitioner-qualification].extension[status].valueCode = QualificationStatusCS#active 
* qualification[0].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* qualification[1].code = $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* qualification[1].issuer.display = "American Board of Internal Medicine"
* qualification[1].code.text = "Board Certified Internal Medicine"
* qualification[1].extension[practitioner-qualification].extension[status].valueCode = QualificationStatusCS#active 
* qualification[1].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* qualification[2].code = $NUCCProviderTaxonomy#207RC0000X "Cardiovascular Disease Physician"
* qualification[2].issuer.display = "American Board of Internal Medicine"
* qualification[2].code.text = "Board Certified Cardiovascular Disease"
* qualification[2].extension[practitioner-qualification].extension[status].valueCode = QualificationStatusCS#active 
* qualification[2].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* communication[0].extension[communication-proficiency].valueCodeableConcept = LanguageProficiencyCS#30
* communication = $BCP47#ja 


Instance: HansSoloRole1
InstanceOf: NatlDirEndpointQryPractitionerRole
Description: "Hans Solo is a solo practitioner"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#ph 
* practitioner = Reference(HansSolo)
* organization = Reference(HartfordOrthopedics)
* healthcareService = Reference(HansSoloService)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* location[0] = Reference(HansSoloClinic)
* specialty =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"

// specialty = internal medicine
// available M-F



Instance: HansSoloClinic
InstanceOf: NatlDirEndpointQryLocation
Description: "Location of Hans Solo's clinic"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "OrgA CT Location 1"
* type = $V3RoleCode#OUTPHARM
* managingOrganization = Reference(BigBox)
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = AcceptingPatientsCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* extension[accessibility][1].valueCodeableConcept = AccessibilityCS#pubtrans
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[availableStartTime].valueTime = 08:00:00
* telecom[0].extension[contactpoint-availabletime][0].extension[availableEndTime].valueTime = 17:00:00
* telecom[0].extension[via-intermediary][0].valueReference = Reference(HansSoloRole1)
* telecom[1].system = #url
* telecom[1].value = "https://www.hanssolo.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 3.0
* position.latitude = 15.0
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].daysOfWeek[4]  = #fri 
* hoursOfOperation[0].openingTime = 08:00:00
* hoursOfOperation[0].closingTime = 17:00:00


Instance: Counselor
InstanceOf: NatlDirEndpointQryPractitioner
Description: "Counselor Susie Smith"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryPractitioner)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* identifier[NPI].value = "NPI3238"
* identifier[NPI].system = $NPICS
* name.text = "Susie Smith, LPC"
* name.family = "Smith"
* name.given[0] = "Susie"
* qualification[0].code.coding.display = "LPC"
* qualification[0].code.text = "LPC"
* qualification[0].issuer.display = "State of Illinois"
* qualification[0].code.text = "IL"
* qualification[0].extension[practitioner-qualification].extension[status].valueCode = QualificationStatusCS#active 
* qualification[0].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* communication[0].extension[communication-proficiency].valueCodeableConcept = LanguageProficiencyCS#30
* communication = $BCP47#ru 

Instance: CounselorRole1
InstanceOf: NatlDirEndpointQryPractitionerRole
Description: "Susie  Smith is a counselor via Telemedicine"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#co "Counselor"
* practitioner = Reference(Counselor)
* organization = Reference(BurrClinic)
* healthcareService = Reference(VirtualCounselService)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* specialty =  $NUCCProviderTaxonomy#101YP2500X  "Professional Counselor"
 

Instance: VirtualCounselService
InstanceOf: NatlDirEndpointQryHealthcareService
Description: "Virtual Counseling Service"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true 
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = DeliveryMethodCS#virtual
* extension[deliverymethod].extension[virtualModalities][0].valueCodeableConcept = VirtualModalitiesCS#web
* extension[deliverymethod].extension[virtualModalities][1].valueCodeableConcept = VirtualModalitiesCS#app 
* extension[deliverymethod].extension[virtualModalities][2].valueCodeableConcept = VirtualModalitiesCS#tdd 
* extension[deliverymethod].extension[virtualModalities][3].valueCodeableConcept =  VirtualModalitiesCS#phone 
* category = HealthcareServiceCategoryCS#prov "Medical Provider"
* specialty =  $NUCCProviderTaxonomy#101YP2500X  "Professional Counselor"

Instance: JoeSmithRole1
InstanceOf: NatlDirEndpointQryPractitionerRole
Description: "Dr Smith moonlighting as ER Doc at Hartford Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#ph 
* practitioner = Reference(JoeSmith)
* healthcareService = Reference(HospERService)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* location[0] = Reference(HospLoc1)
* specialty =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* organization = Reference(Hospital)
// specialty = internal medicine
// available M-F

Instance: JoeSmithRole2
InstanceOf: NatlDirEndpointQryPractitionerRole
Description: "Dr Smith Internal Medicine at Burr Clinic"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#ph
// specialty = internal medicine
// Available:  Sat/Sun
* practitioner = Reference(JoeSmith)
* healthcareService = Reference(BurrClinicServices)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* location[0] = Reference(HospLoc2)
* specialty =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* organization = Reference(BurrClinic)

Instance: JoeSmithRole3
InstanceOf: NatlDirEndpointQryPractitionerRole
Description: "Dr Smith Admitting Privileges at Hartford General"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#ap 
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* specialty[0] =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* specialty[1] = $NUCCProviderTaxonomy#207RC0000X "Cardiovascular Disease Physician"
* organization = Reference(Hospital)
* practitioner = Reference(JoeSmith)

Instance: AnonRole
InstanceOf: NatlDirEndpointQryPractitionerRole
Description: "Practitioner role that doesn't refer to a specific practitioner"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#ph
* healthcareService = Reference(BurrClinicServices)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* location[0] = Reference(HospLoc2)
* specialty[0] =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* organization = Reference(CancerClinic)
* practitioner = Reference(HansSolo)


Instance: HansSoloService
InstanceOf: NatlDirEndpointQryHealthcareService
Description: "Hans Solo Services"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#outpat 
* specialty = $NUCCProviderTaxonomy#207Q00000X "Family Medicine Physician"  
* location[0] = Reference(HansSoloClinic) 
* extension[fundingSource].extension[fundingOrganization].valueReference = Reference(HamiltonClinic)
* extension[fundingSource].extension[fundingSource].valueString = "Private"


Instance: CancerClinicService
InstanceOf: NatlDirEndpointQryHealthcareService
Description: "Cancer Clinic Services"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#outpat
* specialty = $NUCCProviderTaxonomy#207RX0202X "Medical Oncology Physician"  
* location[0] = Reference(CancerClinicLoc)
* providedBy = Reference(CancerClinic)

Instance: CancerClinicLoc
InstanceOf: NatlDirEndpointQryLocation
Description: "Location1 of Cancer Clinic"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "Cancer Clinic"
* type = $V3RoleCode#HOSP 
* managingOrganization = Reference(CancerClinic)
* extension[accessibility][1].valueCodeableConcept = AccessibilityCS#pubtrans
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[0].extension[via-intermediary][0].valueReference = Reference(JoeSmithRole1)

* telecom[1].system = #url
* telecom[1].value = "https://www.hgh.com"
* telecom[1].rank = 1
* address.line[0] = "456 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 3.0
* position.latitude = 15.0
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].daysOfWeek[4]  = #fri 

Instance: CancerClinic
InstanceOf: NatlDirEndpointQryOrganization
Description: "HartfordCancerClinicLLC"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryOrganization)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* identifier[NPI].value = "NPI788"
* identifier[NPI].system = $NPICS
* name = "Hamilton Clinic"
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[1].system = #url
* telecom[1].value = "https://www.Hospital.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "(111)-222-3333"
* contact.telecom[0].rank = 1
* type = OrgTypeCS#fac "Facility"



---

File: repos/HL7_SLASH_fhir-directory-query/input/fsh/README.md

# pdex-NatlDir-fsh
Davinci PDEX NatlDir using FHIR Shorthand


---

File: repos/HL7_SLASH_fhir-directory-query/input/fsh/RestrictionVerificationExamples.fsh

Instance: PatientConsent
InstanceOf: NatlDirRestriction
Description: "Patient that gives consent"
Usage: #example
* meta.profile = Canonical(NatlDirRestriction) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* status  = $ConsentCS#active
* scope = ConsentScopeCS#patient-privacy
* category = $loinc#59284-0 
* policyRule =  $ConsentPolicyCS#cric

Instance: ProviderAttestation
InstanceOf: NatlDirEndpointQryVerification
Description: "Patient that gives consent"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryVerification) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* need  = $needCS#none
* status = $verificationResultStatusCS#attested
* validationType = $verificationResultTypeCS#primary 
* statusDate = "2020-07-07T13:26:22.0314215+00:00"
* validationProcess = ValidationTypeCS#attester 
* target = Reference(JoeSmith)
* failureAction = $failureActionCS#warn
* attestation.who = Reference(JoeSmith)
* attestation.communicationMethod = $verificationresult-communication-methodCS#pull 
* attestation.date = "2020-07-07"

---

File: repos/HL7_SLASH_fhir-directory-query/input/fsh/searchParametrs.fsh

//Endpoint
Instance: Endpoint-connection-type
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by Connection Type in Endpoints"
* status = #active
* code = #connectiontype
* name = "NatlDirEndpointQryConnectiontype"
* description = "Accesses the  connection type of an Endpoint"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-endpoint-connection-type"
* base[0] = #Endpoint
* type = #token
* expression = "Endpoint.connectiontype"
* multipleOr = true
* multipleAnd = true

Instance: Endpoint-identifier
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by Indentifer in Endpoints"
* status = #active
* code = #identifier
* name = "NatlDirEndpointQryIdentifier"
* description = "Accesses the  identifier of an Endpoint"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-endpoint-identifier"
* base[0] = #Endpoint
* type = #token
* expression = "Endpoint.identifier"
* multipleOr = true
* multipleAnd = true

Instance: Endpoint-mime-type
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by mime-type in Endpoints"
* status = #active
* code = #mime-type
* name = "NatlDirEndpointQryMimetype"
* description = "Accesses the  mime-type of an Endpoint"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-endpoint-mime-type"
* base[0] = #Endpoint
* type = #token
* expression = "Endpoint.mime-type"
* multipleOr = true
* multipleAnd = true

Instance: Endpoint-organization
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by organization in Endpoints"
* status = #active
* code = #organization
* name = "NatlDirEndpointQryOrganization"
* description = "Accesses the  organization of an Endpoint"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-endpoint-organization"
* base[0] = #Endpoint
* type = #token
* expression = "Endpoint.organization"
* multipleOr = true
* multipleAnd = true

Instance: Endpoint-payload-type
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by payload-type in Endpoints"
* status = #active
* code = #payload-type
* name = "NatlDirEndpointQryPayloadtype"
* description = "Accesses the  payload-type of an Endpoint"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-endpoint-payload-type"
* base[0] = #Endpoint
* type = #token
* expression = "Endpoint.payload-type"
* multipleOr = true
* multipleAnd = true

Instance: Endpoint-status
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by status in Endpoints"
* status = #active
* code = #status
* name = "NatlDirEndpointQryStatus"
* description = "Accesses the status of an Endpoint"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-endpoint-status"
* base[0] = #Endpoint
* type = #token
* expression = "Endpoint.status"
* multipleOr = true
* multipleAnd = true

Instance: Endpoint-usecase-standard
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by usecase-standard in Endpoints"
* status = #active
* code = #usecase-standard
* name = "NatlDirEndpointQryUsecaseStandard"
* description = "Accesses the usecase-standard of an Endpoint"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-endpoint-usecase-standard"
* base[0] = #Endpoint
* type = #token
* expression = "Endpoint.usecase-standard"
* multipleOr = true
* multipleAnd = true

Instance: Endpoint-usecase-type
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by usecase-type in Endpoints"
* status = #active
* code = #usecase-type
* name = "NatlDirEndpointQryUsecasetype"
* description = "Accesses the  usecase-type of an Endpoint"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-endpoint-usecase-type"
* base[0] = #Endpoint
* type = #token
* expression = "Endpoint.usecase-type"
* multipleOr = true
* multipleAnd = true


//careTeam
Instance: careTeam-endpoint
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by endpoint in CareTeam with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-careteam-endpoint"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "CareTeamEndpointSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Careteams by `endpoint` with `mutlipleOr` enabled."
* code = #endpoint
* base[0] = #CareTeam
* type = #token
* multipleOr = true

Instance: careTeam-location
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by location in CareTeam with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-careteam-location"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "CareTeamLocationSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Careteams by `location` with `mutlipleOr` enabled."
* code = #location
* base[0] = #CareTeam
* type = #token
* multipleOr = true

Instance: careTeam-name
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by name in CareTeam with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-careteam-name"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "CareTeamNameSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Careteams by `name` with `mutlipleOr` enabled."
* code = #name
* base[0] = #CareTeam
* type = #token
* multipleOr = true

Instance: careTeam-organization
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by organization in CareTeam with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-careteam-name"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "CareTeamOrganizationSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Careteams by `organization` with `mutlipleOr` enabled."
* code = #organization
* base[0] = #CareTeam
* type = #token
* multipleOr = true

Instance: careTeam-service
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by service in CareTeam with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-careteam-name"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "CareTeamServiceSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Careteams by `service` with `mutlipleOr` enabled."
* code = #service
* base[0] = #CareTeam
* type = #token
* multipleOr = true


Instance: careTeam-category
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by category in CareTeam with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-careteam-name"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "CareTeamCategorySearchParameter"
* status = #active
* description = "This SearchParameter enables query of Careteams by `category` with `mutlipleOr` enabled."
* code = #category
* base[0] = #CareTeam
* type = #token
* multipleOr = true


//HealthcareService
Instance: HealthcareService-service-category
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by service-category in HealthcareService with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-HealthcareService-service-category"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "HealthcareServiceCategorySearchParameter"
* status = #active
* description = "This SearchParameter enables query of HealthcareService by `service-category` with `mutlipleOr` enabled."
* code = #category
* base[0] = #HealthcareService
* type = #token
* multipleOr = true

Instance: HealthcareService-coverage-area
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by coverage-area in HealthcareService with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-HealthcareService-coverage-area"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "HealthcareServiceCoverageAreaSearchParameter"
* status = #active
* description = "This SearchParameter enables query of HealthcareService by `coverage-area` with `mutlipleOr` enabled."
* code = #coverage-area
* base[0] = #HealthcareService
* type = #token
* multipleOr = true

Instance: HealthcareService-endpoint
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by endpoint in HealthcareService with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-HealthcareService-endpoint"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "HealthcareServiceCategorySearchParameter"
* status = #active
* description = "This SearchParameter enables query of HealthcareService by `endpoint` with `mutlipleOr` enabled."
* code = #endpoint
* base[0] = #HealthcareService
* type = #token
* multipleOr = true

Instance: HealthcareService-location
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by location in HealthcareService with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-HealthcareService-location"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "HealthcareServiceLocationSearchParameter"
* status = #active
* description = "This SearchParameter enables query of HealthcareService by `location` with `mutlipleOr` enabled."
* code = #location
* base[0] = #HealthcareService
* type = #token
* multipleOr = true

Instance: HealthcareService-name
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by name in HealthcareService with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-HealthcareService-name"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "HealthcareServiceNameSearchParameter"
* status = #active
* description = "This SearchParameter enables query of HealthcareService by `name` with `mutlipleOr` enabled."
* code = #name
* base[0] = #HealthcareService
* type = #token
* multipleOr = true

Instance: HealthcareService-organization
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by organization in HealthcareService with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-HealthcareService-organization"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "HealthcareServiceOrganizationSearchParameter"
* status = #active
* description = "This SearchParameter enables query of HealthcareService by `organization` with `mutlipleOr` enabled."
* code = #organization
* base[0] = #HealthcareService
* type = #token
* multipleOr = true

Instance: HealthcareService-specialty
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by specialty in HealthcareService with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-HealthcareService-specialty"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "HealthcareServiceSpecialtySearchParameter"
* status = #active
* description = "This SearchParameter enables query of HealthcareService by `specialty` with `mutlipleOr` enabled."
* code = #endpoint
* base[0] = #HealthcareService
* type = #token
* multipleOr = true

Instance: HealthcareService-service-type
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by service-type in HealthcareService with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-HealthcareService-service-type"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "HealthcareServiceServicetypeSearchParameter"
* status = #active
* description = "This SearchParameter enables query of HealthcareService by `service-type` with `mutlipleOr` enabled."
* code = #service-type
* base[0] = #HealthcareService
* type = #token
* multipleOr = true

//Location
Instance: Location-address
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by address in Location with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-Location-address"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "LocationAddressSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Location by `address` with `mutlipleOr` enabled."
* code = #address
* base[0] = #Location
* type = #token
* multipleOr = true

Instance: Location-endpoint
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by endpoint in Location with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-Location-endpoint"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "LocationEndpointSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Location by `endpoint` with `mutlipleOr` enabled."
* code = #endpoint
* base[0] = #Location
* type = #token
* multipleOr = true

Instance: Location-organization
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by organization in Location with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-Location-organization"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "LocationOrganizationSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Location by `organization` with `mutlipleOr` enabled."
* code = #organization
* base[0] = #Location
* type = #token
* multipleOr = true

Instance: Location-physicalType
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by physicalType in Location with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-Location-physicalType"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "LocationPhysicalTypeSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Location by `physicalType` with `mutlipleOr` enabled."
* code = #physicalType
* base[0] = #Location
* type = #token
* multipleOr = true

Instance: Location-partOf
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by partOf in Location with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-Location-partOf"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "LocationPartOfSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Location by `partOf` with `mutlipleOr` enabled."
* code = #partOf
* base[0] = #Location
* type = #token
* multipleOr = true

Instance: Location-type
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by type in Location with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-Location-type"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "LocationTypeSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Location by `type` with `mutlipleOr` enabled."
* code = #type
* base[0] = #Location
* type = #token
* multipleOr = true

//Organization
Instance: Organization-type
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by type in Organization with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-Organization-type"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "OrganizationTypeSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Organization by `type` with `mutlipleOr` enabled."
* code = #type
* base[0] = #Organization
* type = #token
* multipleOr = true

Instance: Organization-address
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by address in Organization with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-Organization-address"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "OrganizationAddressSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Organization by `address` with `mutlipleOr` enabled."
* code = #address
* base[0] = #Organization
* type = #token
* multipleOr = true

Instance: Organization-endpoint
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by endpoint in Organization with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-Organization-endpoint"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "OrganizationEndpointSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Organization by `endpoint` with `mutlipleOr` enabled."
* code = #endpoint
* base[0] = #Organization
* type = #token
* multipleOr = true

Instance: Organization-identifier
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by identifier in Organization with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-Organization-identifier"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "OrganizationIdentifierSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Organization by `identifier` with `mutlipleOr` enabled."
* code = #identifier
* base[0] = #Organization
* type = #token
* multipleOr = true

Instance: Organization-name
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by name in Organization with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-Organization-name"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "OrganizationNameSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Organization by `name` with `mutlipleOr` enabled."
* code = #name
* base[0] = #Organization
* type = #token
* multipleOr = true

Instance: Organization-partOf
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by partOf in Organization with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-Organization-partOf"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "OrganizationPartOfSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Organization by `partOf` with `mutlipleOr` enabled."
* code = #partOf
* base[0] = #Organization
* type = #token
* multipleOr = true

//OrganizationAffiliation
Instance: OrganizationAffiliation-endpoint
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by endpoint in OrganizationAffiliation with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-OrganizationAffiliation-endpoint"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "OrganizationAffiliationEndpointSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Organization by `endpoint` with `mutlipleOr` enabled."
* code = #endpoint
* base[0] = #OrganizationAffiliation
* type = #token
* multipleOr = true

Instance: OrganizationAffiliation-location
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by location in OrganizationAffiliation with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-OrganizationAffiliation-location"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "OrganizationAffiliationLocationSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Organization by `location` with `mutlipleOr` enabled."
* code = #location
* base[0] = #OrganizationAffiliation
* type = #token
* multipleOr = true

Instance: OrganizationAffiliation-network
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by network in OrganizationAffiliation with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-OrganizationAffiliation-network"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "OrganizationAffiliationNetworkSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Organization by `network` with `mutlipleOr` enabled."
* code = #Organization
* base[0] = #OrganizationAffiliation
* type = #token
* multipleOr = true

Instance: OrganizationAffiliation-participating-organization
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by participating-organization in OrganizationAffiliation with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-OrganizationAffiliation-participating-organization"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "OrganizationAffiliationParticipatingOrganizationfSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Organization by `participating-organization` with `mutlipleOr` enabled."
* code = #participating-organization
* base[0] = #OrganizationAffiliation
* type = #token
* multipleOr = true

Instance: OrganizationAffiliation-primary-organization
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by primary-organization in OrganizationAffiliation with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-OrganizationAffiliation-primary-organization"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "OrganizationAffiliationPrimaryOrganizationSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Organization by `primary-organization` with `mutlipleOr` enabled."
* code = #primary-organization
* base[0] = #OrganizationAffiliation
* type = #token
* multipleOr = true

Instance: OrganizationAffiliation-role
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by role in OrganizationAffiliation with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-OrganizationAffiliation-role"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "OrganizationAffiliationRoleSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Organization by `role` with `mutlipleOr` enabled."
* code = #role
* base[0] = #OrganizationAffiliation
* type = #token
* multipleOr = true

Instance: OrganizationAffiliation-service
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by service in OrganizationAffiliation with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-OrganizationAffiliation-service"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "OrganizationAffiliationServiceSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Organization by `service` with `mutlipleOr` enabled."
* code = #service
* base[0] = #OrganizationAffiliation
* type = #token
* multipleOr = true

Instance: OrganizationAffiliation-specialty
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by specialty in OrganizationAffiliation with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-OrganizationAffiliation-specialty"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "OrganizationAffiliationSpecialtySearchParameter"
* status = #active
* description = "This SearchParameter enables query of Organization by `specialty` with `mutlipleOr` enabled."
* code = #specialty
* base[0] = #OrganizationAffiliation
* type = #token
* multipleOr = true

//practitioner
Instance: practitioner-name
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by name in practitioner with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-practitioner-name"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "PractitionerNameSearchParameter"
* status = #active
* description = "This SearchParameter enables query of practitioner by `name` with `mutlipleOr` enabled."
* code = #name
* base[0] = #Practitioner
* type = #token
* multipleOr = true

Instance: practitioner-family
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by family name in practitioner with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-practitioner-family"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "PractitionerFamilySearchParameter"
* status = #active
* description = "This SearchParameter enables query of practitioner by `family` with `mutlipleOr` enabled."
* code = #family
* base[0] = #Practitioner
* type = #token
* multipleOr = true

Instance: practitioner-given
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by given name in practitioner with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-practitioner-given"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "PractitionerGivenSearchParameter"
* status = #active
* description = "This SearchParameter enables query of practitioner by `given` with `mutlipleOr` enabled."
* code = #given
* base[0] = #Practitioner
* type = #token
* multipleOr = true

Instance: practitioner-identifier
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by identifier in practitioner with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-practitioner-identifier"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "PractitionerIdentifierSearchParameter"
* status = #active
* description = "This SearchParameter enables query of practitioner by `identifier` with `mutlipleOr` enabled."
* code = #identifier
* base[0] = #Practitioner
* type = #token
* multipleOr = true

Instance: practitioner-identifier-assigner
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by identifier-assigner in practitioner with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-practitioner-identifier-assigner"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "PractitionerIdentifierAssignerSearchParameter"
* status = #active
* description = "This SearchParameter enables query of practitioner by `identifier-assigner` with `mutlipleOr` enabled."
* code = #identifier-assigner
* base[0] = #Practitioner
* type = #token
* multipleOr = true

Instance: practitioner-qualification-code
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by qualification-code in practitioner with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-practitioner-qualification-code"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "PractitionerQualificationCodeSearchParameter"
* status = #active
* description = "This SearchParameter enables query of practitioner by `qualification-code` with `mutlipleOr` enabled."
* code = #qualification-code
* base[0] = #Practitioner
* type = #token
* multipleOr = true

Instance: practitioner-qualification-issuer
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by qualification-issuer in practitioner with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-practitioner-qualification-issuer"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "PractitionerQualificationIssuerSearchParameter"
* status = #active
* description = "This SearchParameter enables query of practitioner by `qualification-issuer` with `mutlipleOr` enabled."
* code = #qualification-issuer
* base[0] = #Practitioner
* type = #token
* multipleOr = true


//practitionerRole
Instance: practitionerRole-endpoint
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by endpoint in practitionerRole with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-practitionerRole-endpoint"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "PractitionerRoleEndpointSearchParameter"
* status = #active
* description = "This SearchParameter enables query of practitionerRole by `endpoint` with `mutlipleOr` enabled."
* code = #endpoint
* base[0] = #PractitionerRole
* type = #token
* multipleOr = true

Instance: practitionerRole-location
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by location in practitionerRole with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-practitionerRole-location"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "PractitionerRoleLocationSearchParameter"
* status = #active
* description = "This SearchParameter enables query of practitionerRole by `location` with `mutlipleOr` enabled."
* code = #location
* base[0] = #PractitionerRole
* type = #token
* multipleOr = true

Instance: practitionerRole-network
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by network in practitionerRole with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-practitionerRole-network"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "PractitionerRoleNetworkSearchParameter"
* status = #active
* description = "This SearchParameter enables query of practitionerRole by `network` with `mutlipleOr` enabled."
* code = #Organization
* base[0] = #PractitionerRole
* type = #token
* multipleOr = true

Instance: practitionerRole-organization
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by organization in practitionerRole with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-practitionerRole-organization"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "PractitionerRoleOrganizationSearchParameter"
* status = #active
* description = "This SearchParameter enables query of practitionerRole by `organization` with `mutlipleOr` enabled."
* code = #organization
* base[0] = #PractitionerRole
* type = #token
* multipleOr = true

Instance: practitionerRole-practitioner
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by practitioner in practitionerRole with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-practitionerRole-practitioner"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "PractitionerRolePractitionerSearchParameter"
* status = #active
* description = "This SearchParameter enables query of practitionerRole by `practitioner` with `mutlipleOr` enabled."
* code = #Practitioner
* base[0] = #PractitionerRole
* type = #token
* multipleOr = true

Instance: practitionerRole-role
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by role in practitionerRole with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-practitionerRole-role"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "PractitionerRoleRoleSearchParameter"
* status = #active
* description = "This SearchParameter enables query of practitionerRole by `role` with `mutlipleOr` enabled."
* code = #role
* base[0] = #PractitionerRole
* type = #token
* multipleOr = true

Instance: practitionerRole-service
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by service in practitionerRole with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-practitionerRole-service"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "PractitionerRoleServiceSearchParameter"
* status = #active
* description = "This SearchParameter enables query of practitionerRole by `service` with `mutlipleOr` enabled."
* code = #service
* base[0] = #PractitionerRole
* type = #token
* multipleOr = true

Instance: practitionerRole-specialty
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by specialty in practitionerRole with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-practitionerRole-specialty"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "PractitionerRoleSpecialtySearchParameter"
* status = #active
* description = "This SearchParameter enables query of practitionerRole by `specialty` with `mutlipleOr` enabled."
* code = #specialty
* base[0] = #PractitionerRole
* type = #token
* multipleOr = true

//Network
Instance: Network-coverage-area
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by coverage-area in Network with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-Network-coverage-area"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NetworkCoverageAreaSearchParameter"
* status = #active
* description = "This SearchParameter enables query of Network by `coverage-area` with `mutlipleOr` enabled."
* code = #coverage-area
* base[0] = #Organization
* type = #token
* multipleOr = true

Instance: Network-name
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by name in Network with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-Network-name"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NameSpecialtySearchParameter"
* status = #active
* description = "This SearchParameter enables query of Network by `name` with `mutlipleOr` enabled."
* code = #name
* base[0] = #Organization
* type = #token
* multipleOr = true

//InsurancePlan
Instance: InsurancePlan-coverage-area
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by coverage-area in InsurancePlan with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-InsurancePlan-coverage-area"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "InsurancePlanCoverageAreaSearchParameter"
* status = #active
* description = "This SearchParameter enables query of InsurancePlan by `coverage-area` with `mutlipleOr` enabled."
* code = #coverage-area
* base[0] = #Organization
* type = #token
* multipleOr = true

Instance: InsurancePlan-administrated-by
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by administrated-by in InsurancePlan with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-InsurancePlan-administrated-by"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "InsurancePlanAdministratedBySearchParameter"
* status = #active
* description = "This SearchParameter enables query of InsurancePlan by `administrated-by` with `mutlipleOr` enabled."
* code = #administrated-by
* base[0] = #Organization
* type = #token
* multipleOr = true

Instance: InsurancePlan-coverage-benefit-type
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by coverage-benefit-type in InsurancePlan with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-InsurancePlan-coverage-benefit-type"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "InsurancePlanCoverageBenefittypeSearchParameter"
* status = #active
* description = "This SearchParameter enables query of InsurancePlan by `coverage-benefit-type` with `mutlipleOr` enabled."
* code = #coverage-benefit-type
* base[0] = #Organization
* type = #token
* multipleOr = true

Instance: InsurancePlan-coverage-network
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by coverage-network in InsurancePlan with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-InsurancePlan-coverage-network"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "InsurancePlanCoverageNetworkSearchParameter"
* status = #active
* description = "This SearchParameter enables query of InsurancePlan by `coverage-network` with `mutlipleOr` enabled."
* code = #coverage-network
* base[0] = #Organization
* type = #token
* multipleOr = true

Instance: InsurancePlan-identifier
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by identifier in InsurancePlan with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-InsurancePlan-identifier"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "InsurancePlanIdentifierSearchParameter"
* status = #active
* description = "This SearchParameter enables query of InsurancePlan by `identifier` with `mutlipleOr` enabled."
* code = #identifier
* base[0] = #Organization
* type = #token
* multipleOr = true

Instance: InsurancePlan-type
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by type in InsurancePlan with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-InsurancePlan-type"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "InsurancePlantypeSearchParameter"
* status = #active
* description = "This SearchParameter enables query of InsurancePlan by `type` with `mutlipleOr` enabled."
* code = #type
* base[0] = #Organization
* type = #token
* multipleOr = true

Instance: InsurancePlan-name
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by name in InsurancePlan with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-InsurancePlan-specialty"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "InsurancePlanSpecialtySearchParameter"
* status = #active
* description = "This SearchParameter enables query of InsurancePlan by `specialty` with `mutlipleOr` enabled."
* code = #name
* base[0] = #Organization
* type = #token
* multipleOr = true

Instance: InsurancePlan-owned-by
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by owned-by in InsurancePlan with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-InsurancePlan-owned-by"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "InsurancePlanOwnedBySearchParameter"
* status = #active
* description = "This SearchParameter enables query of InsurancePlan by `owned-by` with `mutlipleOr` enabled."
* code = #owned-by
* base[0] = #Organization
* type = #token
* multipleOr = true

//VerificaitonResult
Instance: VerificationResult-attestation-who
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by attestation-who in VerificationResult with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-VerificationResult-attestation-who"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "VerificationResultAttestationWhoBySearchParameter"
* status = #active
* description = "This SearchParameter enables query of VerificationResult by `attestation-who` with `mutlipleOr` enabled."
* code = #attestation-who
* base[0] = #VerificationResult
* type = #token
* multipleOr = true

Instance: VerificationResult-primarysource-who
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by primarysource-who in VerificationResult with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-VerificationResult-primarysource-who"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "VerificationResultPrimarysourceWhoBySearchParameter"
* status = #active
* description = "This SearchParameter enables query of VerificationResult by `primarysource-who` with `mutlipleOr` enabled."
* code = #primarysource-who
* base[0] = #VerificationResult
* type = #token
* multipleOr = true

Instance: VerificationResult-target
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by target in InsurancePlan with multipleOr"
* url = "https://hl7.org/fhir/us/directory-query/SearchParameter-VerificationResult-target"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "VerificationResultTargetBySearchParameter"
* status = #active
* description = "This SearchParameter enables query of VerificationResult by `target` with `mutlipleOr` enabled."
* code = #attestation-who
* base[0] = #VerificationResult
* type = #token
* multipleOr = true


---

File: repos/HL7_SLASH_fhir-directory-query/input/fsh/ValueSets.fsh


ValueSet: IdentifierStatusVS
Title: "Identifier Status Value Set"
Description: "Codes for Identifier Status"
* ^experimental = false
* codes from system CredentialStatusCS


ValueSet: ValidationProcessVS
Title: "Validation Type Value Set"
Description: "Codes to identify Validation Type"
* ^experimental = false
* ValidationTypeCS#editcheck  "edit check"
* ValidationTypeCS#valueset	"Valueset"
* ValidationTypeCS#extsource	"External source"
* ValidationTypeCS#standalone	"Stand alone"
* ValidationTypeCS#incontext	"In context"
* ValidationTypeCS#attester	"Attester"

ValueSet: IgTypeVS
Title: "IG Type Value Set"
Description: "Codes to identify IG Type"
* ^experimental = false
* codes from system IgTypeCS

ValueSet: EndpointTypeVS
Title: "Endpoint Type Value Set"
Description: "Codes to identify Endpoint Type"
* ^experimental = false
* codes from system EndpointTypeCS

ValueSet: TrustFrameworkTypeVS
Title: "Trust Framework Type Value Set"
Description: "Trust Framework Type"
* ^experimental = false
* codes from system TrustFrameworkTypeCS

ValueSet: AcceptingPatientsVS
Title: "Accepting Patients Codes Value Set"
Description: "Codes to identify if the practice is accepting new patients"
* ^experimental = false
* codes from system AcceptingPatientsCS

ValueSet: AccessibilityVS
Title: "Accessibility Value Set"
Description: "Codes for documenting general categories of accommodations available."
* ^experimental = false
* codes from system AccessibilityCS

ValueSet: DeliveryMethodVS
Title: "Delivery Methods Value Set"
Description: "Codes for documenting delivery methods."
* ^experimental = false
* codes from system DeliveryMethodCS

ValueSet: VirtualModalitiesVS
Title: "Virtual Modalities Value Set"
Description: "Codes for virtual service delivery modalities ."
* ^experimental = false
* codes from system VirtualModalitiesCS

ValueSet: SpecialtiesVS
Title: "Specialties Value Set"
Description:  "Specialties value set based on National Uniform Claim Committee (NUCC) Health Care Provider Taxonomy code set."
* ^experimental = false
* codes from valueset IndividualAndGroupSpecialtiesVS
* codes from valueset NonIndividualSpecialtiesVS

ValueSet: SpecialtyAndDegreeLicenseCertificateVS
Title: "Specialties, Degrees, Licenses, and Certificates Value Set"
Description:  "Specialties and Degree License and Certificates"
* ^experimental = false
* codes from valueset SpecialtiesVS 
* codes from system $V2table0360CS

ValueSet: IndividualSpecialtyAndDegreeLicenseCertificateVS
Title: "Individual Specialties, Degrees, Licenses, and Certificates Value Set"
Description: "Individual Specialties, Degrees, Licenses, and Certificates"
* ^experimental = false
//* codes from valueset IndividualAndGroupSpecialtiesVS
* codes from system $V2table0360CS

ValueSet: NonIndividualSpecialtyAndDegreeLicenseCertificateVS
Title: "Non-Individual Specialties, Degrees, Licenses, and Certificates Value Set"
Description: "Non-Individual Specialties, Degrees, Licenses, and Certificates"
* ^experimental = false
* codes from valueset NonIndividualSpecialtiesVS
* codes from system $V2table0360CS

ValueSet: EndpointConnectionTypeVS
Title: "Endpoint Connection Types Value Set"
Description:  "Endpoint Connection Types"
* ^experimental = false
* ^experimental = false
* codes from system $ConnectionTypeCS
* codes from system EndpointConnectionTypeCS 

ValueSet: MinEndpointConnectionTypeVS
Title: "Minimum Endpoint Connection Types Value Set"
Description:  "Minimum Endpoint Connection Types"
* ^experimental = false
* $ConnectionTypeCS#hl7-fhir-rest "HL7 FHIR"
* $ConnectionTypeCS#hl7-fhir-msg "HL7 FHIR Messaging"
* EndpointConnectionTypeCS#hl7-fhir-opn "HL7 FHIR Operation"
* $ConnectionTypeCS#direct-project	"Direct Project"
* EndpointConnectionTypeCS#rest-non-fhir "REST (not FHIR)"

ValueSet: EndpointUsecaseVS
Title: "Endpoint Usecases Value Set"
Description:  "Codes for documenting business use case by a general grouping by business area."
* ^experimental = false
* $V3ActReason#TREAT  "treatment"
* $V3ActReason#HPAYMT "healthcare payment"
* $V3ActReason#COC "coordination of care"
* $V3ActReason#COVERAGE "eligibility verification and determination"
* $V3ActReason#HOPERAT "healthcare operations"
* $V3ActReason#PUBHLTH "public health"
* $V3ActReason#HRESCH "healthcare research"
* $V3ActReason#ETREAT "emergency treatment"
* $V3ActReason#PATRQT "patient requested"   

ValueSet: ConsentVS
Title: "National Directory Consent Value Set"
Description: "Codes for use in defining access levels for sharing subsets of constrained content (as an example)."
* ^experimental = false
* codes from system $ConsentCS
//* codes from system ConsentScopeCS

ValueSet: EndpointPayloadTypeVS
Title: "Endpoint Payload Type Value Set"
Description:  "Endpoint Payload Types are constrained to NA (Not Applicable) as part of this IG"
* ^experimental = false
* EndpointPayloadTypeCS#NA  "Not Applicable"

ValueSet: NetworkTypeVS
Title: "Network Type Value Set"
Description:  "Single value describing networks."
* ^experimental = false
* OrgTypeCS#ntwk   // only Network profile uses this type 


ValueSet: OrgTypeVS
Title: "Organization Type Value Set"
Description:  "Categories of organizations based on criteria in provider directories."
* ^experimental = false
* codes from system OrgTypeCS
* exclude OrgTypeCS#ntwk   // only Network profile uses this type 

ValueSet: OrgAliasTypeVS
Title: "Organization Alias Typ Value Sete"
Description:  "Categories of an organization's Alias based on criteria in provider directories."
* ^experimental = false
* codes from system OrgAliasTypeCS

ValueSet: InsuranceProductTypeVS
Title: "Insurance Product Type Value Set"
Description: "A distinct package of health insurance coverage benefits that are offered using a particular product network type."
* ^experimental = false
* codes from system InsuranceProductTypeCS


ValueSet: InsurancePlanTypeVS
Title: "Insurance Plan Type Value Set"
Description: "Categories of cost-sharing used by plans."
* ^experimental = false
* codes from system InsurancePlanTypeCS

ValueSet: HealthcareServiceCategoryVS
Title: "Healthcare Service Category Value Set"
Description: "Broad categories of healthcare services being performed or delivered."
* ^experimental = false
* codes from system HealthcareServiceCategoryCS


ValueSet: QualificationStatusVS
Title: "Qualification Status Value Set"
Description: "The state indicating if a qualification is currently valid."
* ^experimental = false
* codes from system QualificationStatusCS


ValueSet: LanguageProficiencyVS
Title: "Language Proficiency Value Set"
Description: "Codes for documenting spoken language proficiency based on the Interagency Language Roundtable scale of abilities to communicate in a language."
* ^experimental = false
* codes from system LanguageProficiencyCS



ValueSet: PractitionerRoleVS
Title: "PractitionerRole Code Value Set"
Description: "Codes for the capabilities that an individual, group, or organization is acknowledged to have in a payer network, including general codes from the HL7 PractitionerRole Code System."
* ^experimental = false
* codes from system ProviderRoleCS
* codes from system $HL7PractitionerRoleCS



ValueSet: HealthcareServiceTypeVS
Description: "HealthCareService type Value Set"
Title: "HealthcareService Type Value Set"
* ^experimental = false
* $ServiceTypeCS#1 "Adoption/Permanent Care Info/Support" 
* $ServiceTypeCS#3 "Aged Care Information/Referral" 
* $ServiceTypeCS#8 "Home Care/Housekeeping Assistance" 
* $ServiceTypeCS#9 "Home Maintenance and Repair" 
* $ServiceTypeCS#10 "Personal Alarms/Alerts" 
* $ServiceTypeCS#11 "Personal Care for Older Persons" 
* $ServiceTypeCS#21 "Hydrotherapy" 
* $ServiceTypeCS#26 "Meditation" 
* $ServiceTypeCS#31 "Relaxation Therapy" 
* $ServiceTypeCS#33 "Western Herbal Medicine" 
* $ServiceTypeCS#34 "Family Day care" 
* $ServiceTypeCS#36 "Kindergarten Inclusion Support" 
* $ServiceTypeCS#42 "Parenting/Family Support/Education" 
* $ServiceTypeCS#51 "Blood Donation" 
* $ServiceTypeCS#55 "Health Advocacy/Liaison Service" 
* $ServiceTypeCS#67 "Sexual Health" 
* $ServiceTypeCS#68 "Speech Pathology/Therapy" 
* $ServiceTypeCS#69 "Bereavement Counselling" 
* $ServiceTypeCS#70 "Crisis Counselling" 
* $ServiceTypeCS#71 "Family Counselling/Therapy" 
* $ServiceTypeCS#72 "Family Violence Counselling" 
* $ServiceTypeCS#75 "Genetic Counselling" 
* $ServiceTypeCS#76 "Health Counselling" 
* $ServiceTypeCS#78 "Problem Gambling Counselling" 
* $ServiceTypeCS#79 "Relationship Counselling" 
* $ServiceTypeCS#80 "Sexual Assault Counselling" 
* $ServiceTypeCS#81 "Trauma Counselling" 
* $ServiceTypeCS#82 "Victims of Crime Counselling" 
* $ServiceTypeCS#96 "Disability Advocacy" 
* $ServiceTypeCS#97 "Disability Aids & Equipment" 
* $ServiceTypeCS#99 "Disability Day Programs/Activities" 
* $ServiceTypeCS#102 "Disability Supported Accommodation" 
* $ServiceTypeCS#103 "Early Childhood Intervention" 
* $ServiceTypeCS#105 "Drug and/or Alcohol Counselling" 
* $ServiceTypeCS#106 "Drug/Alcohol Information/Referral" 
* $ServiceTypeCS#107 "Needle & Syringe Exchange" 
* $ServiceTypeCS#108 "Non-resid. Alcohol/Drug Treatment" 
* $ServiceTypeCS#111 "Residential Alcohol/Drug Treatment" 
* $ServiceTypeCS#118 "Employment Placement and/or Support" 
* $ServiceTypeCS#119 "Vocational Rehabilitation" 
* $ServiceTypeCS#126 "Crisis/Emergency Accommodation" 
* $ServiceTypeCS#127 "Homelessness Support" 
* $ServiceTypeCS#128 "Housing Information/Referral" 
* $ServiceTypeCS#130 "Interpreting/Multilingual Service" 
* $ServiceTypeCS#134 "Mental Health Advocacy" 
* $ServiceTypeCS#146 "Physical Activity Programs" 
* $ServiceTypeCS#147 "Physical Fitness Testing" 
* $ServiceTypeCS#224 "Support Groups" 
* $ServiceTypeCS#230 "Patient Transport" 
* $ServiceTypeCS#233 "Abuse" 
* $ServiceTypeCS#238 "Adult Day Programs" 
* $ServiceTypeCS#245 "Aids" 
* $ServiceTypeCS#275 "Cancer Support" 
* $ServiceTypeCS#284 "Child Care" 
* $ServiceTypeCS#296 "Companion Visiting" 
* $ServiceTypeCS#301 "Contraception Inform" 
* $ServiceTypeCS#308 "Crisis Assessment An" 
* $ServiceTypeCS#309 "Crisis Assistance" 
* $ServiceTypeCS#310 "Crisis Refuge" 
* $ServiceTypeCS#316 "Depression" 
* $ServiceTypeCS#317 "Detoxification" 
* $ServiceTypeCS#323 "Divorce" 
* $ServiceTypeCS#328 "Eating Disorder" 
* $ServiceTypeCS#331 "Employment And Train" 
* $ServiceTypeCS#344 "Food" 
* $ServiceTypeCS#345 "Food Vouchers" 
* $ServiceTypeCS#352 "Grief Counselling" 
* $ServiceTypeCS#366 "Household Items" 
* $ServiceTypeCS#400 "Pain" 
* $ServiceTypeCS#409 "Postnatal" 
* $ServiceTypeCS#411 "Pregnancy Tests" 
* $ServiceTypeCS#427 "Rent Assistance" 
* $ServiceTypeCS#429 "Residential Respite" 
* $ServiceTypeCS#440 "Sexual Issues" 
* $ServiceTypeCS#446 "Speech Therapist" 
* $ServiceTypeCS#459 "Tenancy Advice" 
* $ServiceTypeCS#468 "Vocational Guidance" 
* $ServiceTypeCS#470 "Welfare Assistance" 
* $ServiceTypeCS#488 "Diabetes Educator" 
* $ServiceTypeCS#494 "Youth Services" 
* $ServiceTypeCS#495 "Youth Health" 
* $ServiceTypeCS#501 "Cancer Services" 
* $ServiceTypeCS#513 "Cancer Support Groups" 
* $ServiceTypeCS#530 "Disability Care Transport" 
* $ServiceTypeCS#531 "Aged Care Transport" 
* $ServiceTypeCS#532 "Diabetes Education s" 
* $ServiceTypeCS#534 "Young Adult Diabetes" 
* $ServiceTypeCS#535 "Pulmonary Rehabilita" 
* $ServiceTypeCS#537 "Medication Reviews" 
* $ServiceTypeCS#539 "Telephone Help Line" 
* $ServiceTypeCS#546 "Veterans Services" 
* $ServiceTypeCS#548 "Food Relief/Food/Meals" 
* $ServiceTypeCS#552 "Drug and/or Alcohol Support Groups" 
* $ServiceTypeCS#554 "Chronic Disease Management" 
* $ServiceTypeCS#559 "Women's Health" 
* $ServiceTypeCS#560 "Men's Health" 
* $ServiceTypeCS#565 "Youth Drop In/Assistance/Support" 
* $ServiceTypeCS#569 "Migrant Health Clinic" 
* $ServiceTypeCS#570 "Refugee Health Clinic" 
* $ServiceTypeCS#571 "Aboriginal Health Clinic" 
* $ServiceTypeCS#614 "Development-Life Skills" 
* $ServiceTypeCS#628 "Vehicle modifications" 


---

File: repos/HL7_SLASH_fhir-directory-query/input/pagecontent/all-examples.md

---
# jekyll header
name: all-examples
title: Examples
layout: default
---

Available for download [here](downloads.html)

<!-- ================================================ -->
<!--  use this line to include an autogenerated list of all examples from the remove it if you would like to hand generate it -->

{% include example-list-generator.md %}
<!-- ================================================ -->



---

File: repos/HL7_SLASH_fhir-directory-query/input/pagecontent/bulk-data.md



## Healthcare Directory Bulk Data Specifics
### The scope of the data selection

For the directory bulk data extraction, to request an entire copy of all content in the directory, the scope selection can be defined at the top level specifying that it would like to retrieve all content for the specified resource types from the base of the FHIR server.
```
GET [base]/$export?_type=Organization,Location,Practitioner,PractitionerRole,HealthcareService,VerificationResult, ...
```

A healthcare directory may curate such an extract on a nightly process, and simply return results without needing to scan the live system.  In the result, the value returned in the <code>transactionTime</code> in the result should contain the timestamp at which the extract was generated (including timezone information) and should be used in a subsequent call to retrieve changes since this point in time.

Once a system has a complete set of data, it is usually more efficient to ask for changes from a specific point in time. In which case the request should use the value above (<code>transactionTime</code>) to update the local directory.

```
GET [base]/$export?_type=Organization,Location,Practitioner, ... &_since=[transactionTime]
```

This behaves the same as the initial request, with the exception of the content.

It is expected that this request is more likely to return current information, rather than a pre-generated snapshot, as the transactionTime could be anything.

> <strong>Note:</strong> The current bulk data handling specification does not handle deleted items. The recommendation is that periodically a complete download should be performed to check for "gaps" to reconcile the deletions (which could be due to security changes). However, content should not usually be "deleted" it should be marked as inactive, or end dated.
>
> <strong>Proposal:</strong> Include a deletions bundle(s) for each resource type to report the deletions (when using the _since parameter). As demonstrated in the status tracking output section below, these bundles would be included in the process output as a new property "deletions". This bundle would have a type of "collection", and each entry would be indicated as a deleted item in the history.

```xml
<entry>
   <!-- no resource included for a delete -->
   <request>
     <method value="DELETE"/>
     <url value="PractitionerRole/[id]"/>
   </request>
   <!-- response carries the instant the server processed the delete -->
   <response>
     <lastModified value="2014-08-20T11:05:34.174Z"/>
   </response>
</entry>
```

> The total in the bundle will be the count of deletions in the file, the total in the operation result will indicate the number of deletion bundles in the ndjson (same as the other types).
>
> If the caller doesn't want to use the deletions, they can ignore the files in the output, and not download those specific files.


### List defined subsets

The previous sections are all that is defined by the FHIR Bulk Data extract specification, however one may choose to implement an additional parameter to permit the selection to also filter resources that are included in a specified list resource. The approach is similar to the same capability defined by FHIR [http://hl7.org/fhir/search.html#list](http://hl7.org/fhir/search.html#list)

This operation could be used by client applications such as a Primary Care System that want to only periodically update using this technique, solely using resources they currently have loaded in their "local directory" - an internal black book, which caches resources from previous searches to the system.

```
GET [base]/$export?_type=Organization,Location,Practitioner,PractitionerRole,HealthcareService&_list=List/45
```

In this example the Primary Care System would be responsible for keeping <code>List/45</code> up to date with what it is tracking. A national service may decide that permitting this List resource management is too much overhead, however local enterprise directories may support this type of functionality.

### Arbitrary subsets of data

The current bulk data export operations use the Group resource to define the set of data related to a Patient. At present there is no definition for this to be done in the directory space, unless it is at the resource level. This is possible with search and subscriptions (which leverage search) by using search parameters on the resource types and setting the parameters of interest.

When defining a subset of data, consideration should be given to what happens when data is changed to the extent that it is no longer within the context of the conditions.

One possible method would be to use a bundle of searches where each type has its own search parameters. Another way is to use a <a href="http://hl7.org/fhir/r4/graphdefinition.html" class="external-link" rel="nofollow">GraphDefinition</a> resource.

This functionality should be the subject of a connectathon to determine practical solutions.

One possibility could be to leverage the List functionality described above to maintain a state of what <em>was</em> included in previous content. However, this incurs additional overhead on the part of the server and for many systems, especially those at scale like a national system, this is likely not practical.

### Format of the bulk data extract

The bulk extract format is always an nd-json file (new-line delimited json). Each file can only contain 1 resource type in it, but can be spread across multiple files, with either a size limit or count limit imposed by the extracting system, not the requestor.

The list of these files will be returned in the Complete status output, as described in the standard Bulk Data documentation.

### Starting the extract

There are 2 options for starting the extract. The first option is a single operation specifying all the content, and the other option is for a specific type only. These were both covered above in the "selecting the scope section.

Here one will only document the use of the global export, as an initial request.

The initial request:

```
GET [base]/$export?_type=Organization,Location,Practitioner,PractitionerRole,HealthcareService
```
With headers:
```
Accept: application/fhir+json</code>
Authentication: Bearer [bearer token]</code>
Prefer: respond-async</code>
```

This will return either:
* HTTP status code of <code>4XX</code> or <code>5XX</code> with an <code>OperationOutcome</code> resource body if the request fails, or a
* HTTP status code of <code>202 Accepted</code> when successful. Which will include a <code>Content-Location</code> header with an absolute URI for subsequent status requests and optionally, an <code>OperationOutcome</code> in the resource body

Example Content-Location: <a class="external-link" style="text-decoration: underline;text-align: left;" rel="nofollow" href="http://example.org/status-tracking/request-123">http://example.org/status-tracking/request-123</a> (note that this is not necessarily a FHIR endpoint, and is not a true FHIR resource)

### Tracking the status of the extract

After a bulk data request has been started, the client MAY poll the URI provided in the <code>Content-Location</code> header.

```
GET http://example.org/status-tracking/request-123
```

This will return one of the following codes:

* HTTP status code of <code>202 Accepted</code> when still in progress (and no body has been returned)

* HTTP status code of <code>5XX</code> when a fatal error occurs, with an <code>OperationOutcome</code> in json format for the body detailing of the error
_(Note this is a fatal error in processing, not some error encountered while processing files - a complete extract can contain errors)_
* HTTP status code of <code>200 OK</code> when the processing is complete, and the result is a json object as noted in the specification (an example included below)

Refer to the build data specification for details of the completion event:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[https://github.com/smart-on-fhir/fhir-bulk-data-docs/blob/master/export.md#response---complete-status](https://github.com/smart-on-fhir/fhir-bulk-data-docs/blob/master/export.md#response---complete-status)

```javascript
{
    "transactionTime": "[instant]",
    "request": "[base]/$export?_type=Organization,Location,Practitioner,PractitionerRole,HealthcareService",
    "requiresAccessToken": true,
    "output": [
        {
            "type": "Practitioner",
            "url": "http://serverpath2/practitioner_file_1.ndjson",
            "count": 10000
        },
        {
            "type": "Practitioner",
            "url": "http://serverpath2/practitioner_file_2.ndjson",
            "count": 3017
        },
        {
            "type": "Location",
            "url": "http://serverpath2/location_file_1.ndjson",
            "count": 4182
        }
    ],
    // Note that this deletions property is a proposal, not part of the bulk data spec.
    "deletions": [
        {
            "type": "PractitionerRole",
            "url": "http://serverpath2/practitionerrole_deletions_1.ndjson", // the bundle will include the total number of deletions in the file
            "count": 23 // this is the number of bundles in the file, not the number of resources deleted
        }
    ],
    "error": [
        {
            "type": "OperationOutcome",
            "url": "http://serverpath2/err_file_1.ndjson",
            "count": 439
        }
    ]
}
```

### Retrieving the complete extract

Once the tracking of the extract returns a <code>200 OK</code> completed status, the body of the result will include the list of prepared files that can be downloaded.

Then each of these URLs can be downloaded by a simple get, ensuring to pass the Bearer token if the result indicates <code>requiresAccessToken = true</code>

While downloading, it is also recommended to includeg the header <code>Accept-Encoding: gzip</code> to compress the content as it comes down.

```
GET http://serverpath2/location_file_1.ndjson
```

(Note: our implementation will probably always gzip encode the content - as we are likely to store the processing files gzip encoded to save space in the storage system)

Once all the needed files are downloaded, one should tell the server to cleanup, as detailed in the next section.

### Finishing the extract

This is the simplest step in the process. In order to finish the extract, one will call <code>DELETE</code> on the status tracking URL.

```
DELETE http://example.org/status-tracking/request-123
```

Calling <code>DELETE</code> tells the server that we are all finished with the data, and it can be deleted/cleaned up. The server may also include some time based limits where it may only keep the data it for a set period of time before it automatically cleans it up.


## Subscriptions
A close relative to the bulk data extract is the subscriptions content.  How these will work in the context of Bulk Directory exchanges needs further experimentation and connectathon experiences.

The subscription could be setup to monitor the directory for realtime changes to resources of interest defined via search parameters.

The "urgent notifications" channel is yet to be defined but should enable specific actions such as license suspensions/revocations.


~~~json
   ...TODO edit this ...
~~~

The FHIR Subscription API allows directories to (push) data to multiple local directories based on a set of criteria in the form of a FHIR query, which are defined by the subscriber.  For example:

-  All the updated data for a particular jurisdiction or region
-  All the providers whose certification has been revoked or is expired or is about to expire.

Any newly created or updated resources that meet the criteria triggers the  Server to notify the subscriber and "forward" the results of the search criteria (e.g., the updated Practitioner, PractitionerRole and Endpoint resource - to a specified target endpoint).  An alternate workflow is for a Server notification to occur without a payload and then the subscriber would fetch the data through the REST API from a predetermined endpoint - typically a "middleman" server.

Below is an example of a subscription to push all new and updated Practitioners, PractiyionerRoles, and  Endpoints from the 'vhdir-demo' server to the 'local-dir':

~~~json
{
   "resourceType":"Bundle",
   "id":"VhDir-subscription-bundle",
   "meta":{
      "lastUpdated":"2017-01-24T01:43:30Z"
   },
   "type":"transaction",
   "entry":[
      {
         "fullUrl":"urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a",
         "resource":{
            "resourceType":"Subscription",
            "id":"vhdir-connectathon-scenario-12p",
            "status":"requested",
            "contact":[
               {
                  "system":"phone",
                  "value":"ext 4123"
               }
            ],
            "end":"2020-01-01T00:00:00Z",
            "reason":"(push) healthcare directory data to multiple local directories",
            "criteria":"Practitioner?address-postalcode:contains=02108, 02109, 02110, 02111, 02113, 02114, 02115, 02116, 02118, 02119, 02120, 02121, 02122, 02124, 02125, 02126, 02127, 02128, 02129, 02130, 02131, 02132, 02134, 02135, 02136, 02151, 02152, 02163, 02199, 02203, 02210, 02215, 02467",
            "channel":{
               "type":"rest-hook",
               "endpoint":"https://local-dir/fhir",
               "payload":"application/fhir+json",
               "header":[
                  "Authorization: Bearer secret-token-abc-123"
               ]
            }
         },
         "request":{
            "method":"POST",
            "url":"Subscription"
         }
      },
      {
         "fullUrl":"urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a",
         "resource":{
            "resourceType":"Subscription",
            "id":"vhdir-connectathon-scenario-12pr",
            "status":"requested",
            "contact":[
               {
                  "system":"phone",
                  "value":"ext 4123"
               }
            ],
            "end":"2020-01-01T00:00:00Z",
            "reason":"(push) healthcare directory data to multiple local directories",
            "criteria":"PractitionerRole?practitioner.address-postalcode:contains=02108, 02109, 02110, 02111, 02113, 02114, 02115, 02116, 02118, 02119, 02120, 02121, 02122, 02124, 02125, 02126, 02127, 02128, 02129, 02130, 02131, 02132, 02134, 02135, 02136, 02151, 02152, 02163, 02199, 02203, 02210, 02215, 02467",
            "channel":{
               "type":"rest-hook",
               "endpoint":"https://local-dir/fhir",
               "payload":"application/fhir+json",
               "header":[
                  "Authorization: Bearer secret-token-abc-123"
               ]
            }
         },
         "request":{
            "method":"POST",
            "url":"Subscription"
         }
      },
      {
         "fullUrl":"urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a",
         "resource":{
            "resourceType":"Subscription",
            "id":"vhdir-connectathon-scenario-12pe",
            "status":"requested",
            "contact":[
               {
                  "system":"phone",
                  "value":"ext 4123"
               }
            ],
            "end":"2020-01-01T00:00:00Z",
            "reason":"(push) healthcare directory data to multiple local directories",
            "criteria":"Endpoint?_has:PractitionerRole:endpoint:practitioner.address-postalcode:contains=02108, 02109, 02110, 02111, 02113, 02114, 02115, 02116, 02118, 02119, 02120, 02121, 02122, 02124, 02125, 02126, 02127, 02128, 02129, 02130, 02131, 02132, 02134, 02135, 02136, 02151, 02152, 02163, 02199, 02203, 02210, 02215, 02467",
            "channel":{
               "type":"rest-hook",
               "endpoint":"https://local-dir/fhir",
               "payload":"application/fhir+json",
               "header":[
                  "Authorization: Bearer secret-token-abc-123"
               ]
            }
         },
         "request":{
            "method":"POST",
            "url":"Subscription"
         }
      }
   ]
}
~~~

---

