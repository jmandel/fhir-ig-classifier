File: repos/HL7_SLASH_fhir-directory-exchange/input/fsh/Aliases.fsh

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
Alias: $verificationresult-validation-type = http://hl7.org/fhir/ValueSet/verificationresult-validation-type
//Alias: $validationprocess = http://hl7.org/fhir/uv/vhdir/ValueSet/validationprocess
Alias: $verificationresult-primary-source-type = http://hl7.org/fhir/ValueSet/verificationresult-primary-source-type
Alias: $verificationresult-communication-method_1 = http://hl7.org/fhir/ValueSet/verificationresult-communication-method
Alias: $identifierstatus = http://hl7.org/fhir/uv/vhdir/ValueSet/identifierstatus
Alias: $aliastype = http://hl7.org/fhir/uv/vhdir/ValueSet/aliastype
Alias: $digitalcertificatetype = http://hl7.org/fhir/uv/vhdir/ValueSet/digitalcertificatetype
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
///Alias:  $NUCCProviderTaxonomy  = https://taxonomy.nucc.org
Alias:  $V2table0360VS = http://terminology.hl7.org/ValueSet/v2-0360 
Alias:  $V2table0360CS = http://terminology.hl7.org/CodeSystem/v2-0360 
Alias:  $yesNoVS = http://terminology.hl7.org/ValueSet/v2-0136


// NatlDir defined CS that mimic VHDir CodeSystems

Alias: $LanguageProficiency = http://hl7.org/fhir/us/davinci-pdex-NatlDir/CodeSystem/LanguageProficiencyCS
Alias: $MinEndpointConnectionTypeVS = http://hl7.org/fhir/us/davinci-pdex-NatlDir/ValueSet/MinEndpointConnectionTypeVS
Alias: $IgFormatCodeVS = http://hl7.org/fhir/ValueSet/formatcodes
/*

Alias: $NatlDirEndpointQryEndpoint =	http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDir-Endpoint
Alias: $NatlDirEndpointQryHealthcareService =	http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDir-HealthcareService
Alias: $NatlDirEndpointQryInsurancePlan = http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDir-InsurancePlan
Alias: $NatlDirEndpointQryLocation =	http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDir-Location
Alias: $NatlDirEndpointQryNetwork =	http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDir-Network

Alias: $NatlDirEndpointQryOrganization =	http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDir-Organization
Alias: $NatlDirEndpointQryOrganizationAffiliation =	http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDir-OrganizationAffiliation
Alias: $NatlDirEndpointQryPractitioner =	http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDir-Practitioner
*/
Alias: $NatlDirectoryCareTeam =	http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDirEndpointQry-CareTeam
Alias: $NatlDirectoryEndPoint =	http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDirEndpointQry-Endpoint
Alias: $NatlDirectoryHealthCareService =	http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDirEndpointQry-HealthcareService
Alias: $NatlDirectoryInsurancePlan = http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDirEndpointQry-InsurancePlan
Alias: $NatlDirectoryLocation =	http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDirEndpointQry-Location
Alias: $NatlDirectoryNetwork =	http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDirEndpointQry-Network
Alias: $NatlDirectoryOrganization =         	http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDirEndpointQry-Organization
Alias: $NatlDirExOrganizationAffiliation =	http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDirEndpointQry-OrganizationAffiliation
Alias: $NatlDirectoryPractitioner =            	http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDirEndpointQry-Practitioner
Alias: $NatlDirEndpointQryPractitionerRole =	http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDirEndpointQry-PractitionerRole
Alias: $NatlDirEndpointQryPractitionerRoleCode = http://hl7.org/fhir/us/directory-query/CodeSystem/ProviderRoleCS
Alias: $NatlDirectoryRestriction  =	    http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDir-Restriction
Alias: $NatlDirectoryValidation  =	    http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDir-Verification
Alias: $NatlDirectoryEndpointTypeCS  =	    http://hl7.org/fhir/us/directory-query/CodeSystem/EndpointTypeCS
Alias: $NatlDirectoryHealthcareServiceDeliveryMthdCS  =	    http://hl7.org/fhir/us/directory-query/CodeSystem/DeliveryMethodCS
Alias: $NatlDirectoryOrgTypeCS  =	    http://hl7.org/fhir/us/directory-query/CodeSystem/OrgTypeCS
Alias: $NatlDirectoryInsProdTypCS  =	    http://hl7.org/fhir/us/directory-query/CodeSystem/InsuranceProductTypeCS
Alias: $NatlDirectoryInsPlanTypCS  =	    http://hl7.org/fhir/us/directory-query/CodeSystem/InsurancePlanTypeCS
Alias: $NatlDirectoryEndpointConnTypeCS  =	    http://hl7.org/fhir/us/directory-query/CodeSystem/EndpointConnectionTypeCS
Alias: $NatlDirectoryEndpointPayldTypeCS  =	    http://hl7.org/fhir/us/directory-query/CodeSystem/EndpointPayloadTypeCS
Alias: $NatlDirectoryAccessibilityCS  =	    http://hl7.org/fhir/us/directory-query/CodeSystem/AccessibilityCS
Alias: $NatlDirectoryHealthcareServiceCatCS  =	    http://hl7.org/fhir/us/directory-query/CodeSystem/HealthcareServiceCategoryCS
Alias: $NatlDirectoryProvdrRoleCS  =	    http://hl7.org/fhir/us/directory-query/CodeSystem/ProviderRoleCS
Alias: $NatlDirectoryVirModalitiesCS  =	    http://hl7.org/fhir/us/directory-query/CodeSystem/VirtualModalitiesCS
Alias: $NatlDirectoryQualStatusCS  =	    http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/QualificationStatusCS
Alias: $NatlDirectoryAcceptPatientsCSCS  =	    http://hl7.org/fhir/us/directory-query/CodeSystem/AcceptingPatientsCS
Alias: $NatlDirectoryDelvMthdCS  =	    http://hl7.org/fhir/us/directory-query/CodeSystem/DeliveryMethodCS
Alias: $NatlDirectoryLangProfCS  =	    http://hl7.org/fhir/us/directory-query/CodeSystem/LanguageProficiencyCS
Alias: $NatlDirectoryValidationTypeCS  =	    http://hl7.org/fhir/us/directory-query/CodeSystem/ValidationTypeCS
Alias: $NatlDirectoryConsentScopeCS  =	    http://hl7.org/fhir/us/directory-query/CodeSystem/ConsentScopeCS
Alias: $NatlDirectoryIGTypeCS  =	    http://hl7.org/fhir/us/directory-query/CodeSystem/IgTypeCS
Alias: $NatlDirectorytrustFrameworkCS = http://hl7.org/fhir/us/directory-query/CodeSystem/TrustFrameworkTypeCS

Alias: $NatlDirectoryOrgAffRoleCS = http://hl7.org/fhir/us/directory-query/CodeSystem/OrganizationAffiliationRoleCS
Alias: $NatlDirectoryCredentialStatusCS = http://hl7.org/fhir/us/directory-query/CodeSystem/CredentialStatusCS

Alias: $loinc = http://loinc.org
Alias: $IgFormatCodeVS = http://hl7.org/fhir/ValueSet/formatcodes

Alias: $failureActionCS = 	http://terminology.hl7.org/CodeSystem/failure-action
Alias: $needCS = 	http://terminology.hl7.org/CodeSystem/need
Alias: $verificationResultStatusCS = 	http://hl7.org/fhir/CodeSystem/status
Alias: $verificationResultTypeCS = http://terminology.hl7.org/CodeSystem/validation-type
Alias: $loinc = http://loinc.org
Alias: $ConsentCS = http://hl7.org/fhir/consent-state-codes
Alias: $ConsentPolicyCS = http://terminology.hl7.org/CodeSystem/consentpolicycodes
Alias: $verificationresult-communication-methodCS = http://terminology.hl7.org/CodeSystem/verificationresult-communication-method

---

File: repos/HL7_SLASH_fhir-directory-exchange/input/fsh/cap-statement-rulesets-complete.fsh

// Defines expanded operations for the server
RuleSet: Federated_Query_CapabilityStatement_Expanded
* status = #draft
* experimental = true
* date = "2022-02-15T07:15:00.000000-04:00"
* kind = #requirements
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1
* implementationGuide = "https://hl7.org/fhir/us/directory-exchange/"
* rest[0].mode = #server
* rest.documentation =  "http://www.w3.org/1999/xhtml\"><h2 id=\"title\">Capability Statement Basic Federated Endpoint Server  </h2><ul><li><b>Official URL:</b><code>http://hl7.org/fhir/us/directory-query/CapabilityStatement/directory-query-basic-endpoint</code></li><li><b>Implementation Guide Version:</b> 0.0.1</li><li><b>FHIR Version:</b> 4.0.1</li><li><b>Intended Use:</b> Requirements</li><li><b>Supported Formats:</b>\n\t\t\t\t\n                    XML, JSON\n\t\t\t\t\n\t\t\t\t</li><li><b>Published:</b> 2022-02-15 07:15:00.000000-04:00</li><li><b>Published by:</b> HL7 Patient Administration Working Group</li><li><b>Status:</b> Draft (experimental)</li></ul><p>Capabilities for a basic Query Server for Health Services where endpoint search capabilities are met</p><!-- No support expectation extension --><h3 class=\"no_toc\" id=\"igs\">Support the Following Implementation Guides:</h3><ul><li><a href=\"http://hl7.org/fhir/us/directory-exchange/\">http://hl7.org/fhir/us/directory-exchange/</a></li></ul><!-- REST Behavior --><h3 id=\"behavior\">FHIR Server RESTful Capabilities</h3><p>A Federated Query server <strong>SHALL</strong>:</p><ol><li>Support all profiles defined in this Implementation Guide..</li><li>Implement the RESTful behavior according to the FHIR specification.</li><li>Return the following response classes:\n<ul><li>(Status 400): invalid parameter</li><li>(Status 401/4xx): unauthorized request</li><li>(Status 403): insufficient scope</li><li>(Status 404): unknown resource</li><li>(Status 410): deleted resource.</li></ul>\n</li><li>Support json source formats for all mCODE interactions.</li><li>Identify the mCODE  profiles supported as part of the FHIR <code>meta.profile</code> attribute for each instance.</li><li>Support the searchParameters on each profile individually and in combination.</li></ol><p>The Federated Query Server <strong>SHOULD</strong>:</p><ol><li>Support xml source formats for all mCODE interactions.</li></ol><p id=\"security\"><strong>Security:</strong></p><ol><li>See the <a href=\"https://www.hl7.org/fhir/security.html#general\">General Security Considerations</a> section for requirements and recommendations.</li><li>A client <strong>SHALL</strong> reject any unauthorized requests by returning an <code>HTTP 401</code> unauthorized response code.</li></ol><h3 class=\"no_toc\" id=\"resource--details\">RESTful Capabilities by Resource/Profile:</h3><p><strong>Summary</strong></p><table class=\"grid\"><thead><tr><th>Resource Type</th><th>Supported Interactions</th><th>Supported Profiles</th><th>Supported Searches</th><th>Supported <code>_includes</code></th><th>Supported <code>_revincludes</code></th><th>Supported Operations</th></tr></thead><tbody><tr><td><a href=\"#endpoint\">endpoint</a></td><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Profiles --><td><a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Endpoint.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Endpoint.html)</a></td><!-- Supported Searches --><td>\n\t\t\t\t\t\t\t\t\t\tidentifier, usecase-type\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _includes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _revincludes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Operations --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td></tr><tr><td><a href=\"#healthcareservice\">healthcareService</a></td><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Profiles --><td><a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-HealthcareService.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-HealthcareService.html)</a></td><!-- Supported Searches --><td>\n\t\t\t\t\t\t\t\t\t\tservice-category, coverage-area, endpoint, location, name, organization, specialty, service-type\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _includes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _revincludes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Operations --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td></tr><tr><td><a href=\"#insuranceplan\">InsurancePlan</a></td><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Profiles --><td><a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-InsurancePlan.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-InsurancePlan.html)</a></td><!-- Supported Searches --><td>\n\t\t\t\t\t\t\t\t\t\tcoverage-area, administrated-by, coverage-benefit-type, coverage-network, identifier, type, name, owned-by\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _includes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _revincludes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Operations --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td></tr><tr><td><a href=\"#location\">location</a></td><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Profiles --><td><a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-location.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-location.html)</a></td><!-- Supported Searches --><td>\n\t\t\t\t\t\t\t\t\t\taddress, endpoint, organization, physicalType, partOf, type\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _includes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _revincludes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Operations --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td></tr><tr><td><a href=\"#network\">network</a></td><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Profiles --><td><a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-network.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-network.html)</a></td><!-- Supported Searches --><td>\n\t\t\t\t\t\t\t\t\t\tcoverage-area, name\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _includes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _revincludes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Operations --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td></tr><tr><td><a href=\"#organization\">organization</a></td><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Profiles --><td><a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Organization.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Organization.html)</a></td><!-- Supported Searches --><td>\n\t\t\t\t\t\t\t\t\t\ttype, address, endpoint, identifier, name, partOf\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _includes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _revincludes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Operations --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td></tr><tr><td><a href=\"#organizationaffiliation\">OrganizationAffiliation</a></td><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Profiles --><td><a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-OrganizationAffiliation.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-OrganizationAffiliation.html)</a></td><!-- Supported Searches --><td>\n\t\t\t\t\t\t\t\t\t\tendpoint, location, network, participating-organization, primary-organization, role, service, specialty\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _includes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _revincludes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Operations --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td></tr><tr><td><a href=\"#practitioner\">Practitioner</a></td><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Profiles --><td><a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Practitioner.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Practitioner.html)</a></td><!-- Supported Searches --><td>\n\t\t\t\t\t\t\t\t\t\tname, family, given, identifier, identifier-assigner, qualification-code, qualification-issuer\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _includes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _revincludes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Operations --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td></tr><tr><td><a href=\"#practitionerrole\">PractitionerRole</a></td><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Profiles --><td><a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-PractitionerRole.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-PractitionerRole.html)</a></td><!-- Supported Searches --><td>\n\t\t\t\t\t\t\t\t\t\tendpoint, location, network, organization, Practicioner, role, service, specialty\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _includes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _revincludes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Operations --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td></tr><tr><td><a href=\"#restriction\">Restriction</a></td><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Profiles --><td><a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Restriction.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Restriction.html)</a></td><!-- Supported Searches --><td>\n\t\t\t\t\t\t\t\t\t\t_id, _id, _lastUpdated, plan-type, name, coverage-area, owned=by, administrated-by\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _includes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _revincludes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Operations --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td></tr><tr><td><a href=\"#validation\">Validation</a></td><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Profiles --><td><a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Validation.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Validation.html)</a></td><!-- Supported Searches --><td>\n\t\t\t\t\t\t\t\t\t\tattestation-who, primarysource-who, target\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _includes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _revincludes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Operations --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td></tr><tr><td><a href=\"#careteam\">CareTeam</a></td><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Profiles --><td><a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-CareTeam.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-CareTeam.html)</a></td><!-- Supported Searches --><td>\n\t\t\t\t\t\t\t\t\t\tendpoint, location, name, organization, service, category\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _includes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported _revincludes --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td><!-- Supported Operations --><td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td></tr></tbody></table><!-- Resource Details --><h4 class=\"no_toc\" id=\"endpoint\">endpoint</h4><p>Conformance Expectation:\t<strong>SHALL</strong></p><p>Supported Profiles:</p><ul><li><strong>SHALL</strong> support:\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Endpoint.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Endpoint.html)</a>\n\t\t\t\t\t\t\t\t\t\t</li></ul><h4 class=\"no_toc\" id=\"healthcareservice\">healthcareService</h4><p>Conformance Expectation:\t<strong>(conformance expectation undefined)</strong></p><p>Supported Profiles:</p><ul><li><strong>MAY</strong> support:\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-HealthcareService.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-HealthcareService.html)</a>\n\t\t\t\t\t\t\t\t\t\t</li></ul><h4 class=\"no_toc\" id=\"insuranceplan\">InsurancePlan</h4><p>Conformance Expectation:\t<strong>(conformance expectation undefined)</strong></p><p>Supported Profiles:</p><ul><li><strong>MAY</strong> support:\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-InsurancePlan.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-InsurancePlan.html)</a>\n\t\t\t\t\t\t\t\t\t\t</li></ul><h4 class=\"no_toc\" id=\"location\">location</h4><p>Conformance Expectation:\t<strong>(conformance expectation undefined)</strong></p><p>Supported Profiles:</p><ul><li><strong>SHOULD</strong> support:\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-location.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-location.html)</a>\n\t\t\t\t\t\t\t\t\t\t</li></ul><h4 class=\"no_toc\" id=\"network\">network</h4><p>Conformance Expectation:\t<strong>(conformance expectation undefined)</strong></p><p>Supported Profiles:</p><ul><li><strong>MAY</strong> support:\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-network.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-network.html)</a>\n\t\t\t\t\t\t\t\t\t\t</li></ul><h4 class=\"no_toc\" id=\"organization\">organization</h4><p>Conformance Expectation:\t<strong>(conformance expectation undefined)</strong></p><p>Supported Profiles:</p><ul><li><strong>SHALL</strong> support:\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Organization.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Organization.html)</a>\n\t\t\t\t\t\t\t\t\t\t</li></ul><h4 class=\"no_toc\" id=\"organizationaffiliation\">OrganizationAffiliation</h4><p>Conformance Expectation:\t<strong>(conformance expectation undefined)</strong></p><p>Supported Profiles:</p><ul><li><strong>MAY</strong> support:\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-OrganizationAffiliation.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-OrganizationAffiliation.html)</a>\n\t\t\t\t\t\t\t\t\t\t</li></ul><h4 class=\"no_toc\" id=\"practitioner\">Practitioner</h4><p>Conformance Expectation:\t<strong>(conformance expectation undefined)</strong></p><p>Supported Profiles:</p><ul><li><strong>SHOULD</strong> support:\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Practitioner.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Practitioner.html)</a>\n\t\t\t\t\t\t\t\t\t\t</li></ul><h4 class=\"no_toc\" id=\"practitionerrole\">PractitionerRole</h4><p>Conformance Expectation:\t<strong>(conformance expectation undefined)</strong></p><p>Supported Profiles:</p><ul><li><strong>SHOULD</strong> support:\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-PractitionerRole.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-PractitionerRole.html)</a>\n\t\t\t\t\t\t\t\t\t\t</li></ul><h4 class=\"no_toc\" id=\"restriction\">Restriction</h4><p>Conformance Expectation:\t<strong>(conformance expectation undefined)</strong></p><p>Supported Profiles:</p><ul><li><strong>MAY</strong> support:\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Restriction.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Restriction.html)</a>\n\t\t\t\t\t\t\t\t\t\t</li></ul><h4 class=\"no_toc\" id=\"validation\">Validation</h4><p>Conformance Expectation:\t<strong>(conformance expectation undefined)</strong></p><p>Supported Profiles:</p><ul><li><strong>MAY</strong> support:\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Validation.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-Validation.html)</a>\n\t\t\t\t\t\t\t\t\t\t</li></ul><h4 class=\"no_toc\" id=\"careteam\">CareTeam</h4><p>Conformance Expectation:\t<strong>(conformance expectation undefined)</strong></p><p>Supported Profiles:</p><ul><li><strong>MAY</strong> support:\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-CareTeam.html\">(https://hl7.org/fhir/us/directory-exchange/StructureDefinition-NatlDirEx-CareTeam.html)</a>\n\t\t\t\t\t\t\t\t\t\t</li></ul></div>"
* rest.security.description = "1. See the [General Security Considerations](http://www.hl7.org/fhir/security.html#general) section for requirements and recommendations.\n1. A client **SHALL** reject any unauthorized requests by returning an `HTTP 401` unauthorized response code."
* rest.documentation =  "A Federated Query server **SHALL**:\n\n1. Support all profiles defined in this Implementation Guide..\n1.  Implement the RESTful behavior according to the FHIR specification.\n1. Return the following response classes:\n   - (Status 400): invalid parameter\n   - (Status 401/4xx): unauthorized request\n   - (Status 403): insufficient scope\n   - (Status 404): unknown resource\n   - (Status 410): deleted resource.\n1. Support json source formats for all Federated Query interactions.\n1. Identify the Federated Query  profiles supported as part of the FHIR `meta.profile` attribute for each instance.\n1. Support the searchParameters on each profile individually and in combination.\n\nThe Federated Query Server **SHOULD**:\n\n1. Support xml source formats for all Federated Query interactions.\n"
* rest.security.description = "1. See the [General Security Considerations](http://www.hl7.org/fhir/security.html#general) section for requirements and recommendations.\n1. A client **SHALL** reject any unauthorized requests by returning an `HTTP 401` unauthorized response code."
//endpoint connection-type, identifier, mime-type, organization, payload-type, status, usecase-standard, usecase-type, 
* rest[0].resource[0].type = #Endpoint
* rest[0].resource[0].supportedProfile[0] = "http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-Endpoint"
* rest[0].resource[0].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[0].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[0].name = "identifier"
* rest[0].resource[0].searchParam[0].type = #token
* rest[0].resource[0].searchParam[1].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-endpoint-identifier"
* rest[0].resource[0].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[1].name = "connection-type"
* rest[0].resource[0].searchParam[1].type = #token
* rest[0].resource[0].searchParam[1].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Endpoint-connection-type"
* rest[0].resource[0].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[2].name = "mime-type"
* rest[0].resource[0].searchParam[2].type = #token
* rest[0].resource[0].searchParam[2].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Endpoint-mime-type"
* rest[0].resource[0].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[3].name = "organization"
* rest[0].resource[0].searchParam[3].type = #token
* rest[0].resource[0].searchParam[3].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Endpoint-organization"
* rest[0].resource[0].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[4].name = "payload-type"
* rest[0].resource[0].searchParam[4].type = #token
* rest[0].resource[0].searchParam[4].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Endpoint-payload-type"
* rest[0].resource[0].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[5].name = "usecase-standard"
* rest[0].resource[0].searchParam[5].type = #token
* rest[0].resource[0].searchParam[5].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Endpoint-usecase-standard"
* rest[0].resource[0].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[6].name = "status"
* rest[0].resource[0].searchParam[6].type = #token
* rest[0].resource[0].searchParam[6].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Endpoint-status"
* rest[0].resource[0].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[7].name = "usecase-type"
* rest[0].resource[0].searchParam[7].type = #token
* rest[0].resource[0].searchParam[7].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Endpoint-usecase-type"
* rest[0].resource[0].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[7].extension.valueCode = #SHALL

//careteam
//search parameters: endpoint, location, name, organization, service, category
* rest[0].resource[10].type = #CareTeam
* rest[0].resource[10].supportedProfile[0] = "http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-CareTeam"
* rest[0].resource[10].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[9].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[0].name = "endpoint"
* rest[0].resource[10].searchParam[0].type = #token
* rest[0].resource[10].searchParam[0].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-CareTeam-Endpoint"
* rest[0].resource[10].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[1].name = "location"
* rest[0].resource[10].searchParam[1].type = #token
* rest[0].resource[10].searchParam[1].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-CareTeam-location"
* rest[0].resource[10].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[2].name = "name"
* rest[0].resource[10].searchParam[2].type = #token
* rest[0].resource[10].searchParam[2].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-CareTeam-name"
* rest[0].resource[10].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[3].name = "organization"
* rest[0].resource[10].searchParam[3].type = #token
* rest[0].resource[10].searchParam[3].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-CareTeam-organization"
* rest[0].resource[10].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[4].name = "service"
* rest[0].resource[10].searchParam[4].type = #token
* rest[0].resource[10].searchParam[4].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-CareTeam-service"
* rest[0].resource[10].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[5].name = "category"
* rest[0].resource[10].searchParam[5].type = #token
* rest[0].resource[10].searchParam[5].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-CareTeam-category"
* rest[0].resource[10].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[5].extension.valueCode = #SHALL

//healthcare service
* rest[0].resource[1].type = #HealthcareService
* rest[0].resource[1].supportedProfile[0] = "http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-HealthcareService"
* rest[0].resource[1].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[1].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[0].name = "service-category"
* rest[0].resource[1].searchParam[0].type = #token
* rest[0].resource[1].searchParam[0].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-HealthcareService-service-category"
* rest[0].resource[1].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[1].name = "coverage-area"
* rest[0].resource[1].searchParam[1].type = #token
* rest[0].resource[1].searchParam[1].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-HealthcareService-coverage-area"
* rest[0].resource[1].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[2].name = "endpoint"
* rest[0].resource[1].searchParam[2].type = #token
* rest[0].resource[1].searchParam[2].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-HealthcareService-Endpoint"
* rest[0].resource[1].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[3].name = "location"
* rest[0].resource[1].searchParam[3].type = #token
* rest[0].resource[1].searchParam[3].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-HealthcareService-location"
* rest[0].resource[1].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[4].name = "name"
* rest[0].resource[1].searchParam[4].type = #token
* rest[0].resource[1].searchParam[4].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-HealthcareService-name"
* rest[0].resource[1].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[5].name = "organization"
* rest[0].resource[1].searchParam[5].type = #token
* rest[0].resource[1].searchParam[5].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-HealthcareService-organization"
* rest[0].resource[1].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[6].name = "specialty"
* rest[0].resource[1].searchParam[6].type = #token
* rest[0].resource[1].searchParam[6].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-HealthcareService-specialty"
* rest[0].resource[1].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[7].name = "service-type"
* rest[0].resource[1].searchParam[7].type = #token
* rest[0].resource[1].searchParam[7].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-HealthcareService-service-type"
* rest[0].resource[1].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[7].extension.valueCode = #SHALL

//Location
* rest[0].resource[3].type = #Location
* rest[0].resource[3].supportedProfile[0] = "http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-Location"
* rest[0].resource[3].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[3].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[0].name = "address"
* rest[0].resource[3].searchParam[0].type = #token
* rest[0].resource[3].searchParam[0].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-location-address"
* rest[0].resource[3].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[1].name = "endpoint"
* rest[0].resource[3].searchParam[1].type = #token
* rest[0].resource[3].searchParam[1].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-location-Endpoint"
* rest[0].resource[3].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[2].name = "organization"
* rest[0].resource[3].searchParam[2].type = #token
* rest[0].resource[3].searchParam[2].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-location-organization"
* rest[0].resource[3].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[3].name = "physicalType"
* rest[0].resource[3].searchParam[3].type = #token
* rest[0].resource[3].searchParam[3].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-location-physicalType"
* rest[0].resource[3].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[4].name = "partOf"
* rest[0].resource[3].searchParam[4].type = #token
* rest[0].resource[3].searchParam[4].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-location-partOf"
* rest[0].resource[3].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[5].name = "type"
* rest[0].resource[3].searchParam[5].type = #token
* rest[0].resource[3].searchParam[5].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-location-type"
* rest[0].resource[3].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[5].extension.valueCode = #SHALL




//organization
* rest[0].resource[4].type = #Organization
* rest[0].resource[4].supportedProfile[0] = "http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-Organization"
* rest[0].resource[4].supportedProfile[1] = "http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-Network"
* rest[0].resource[4].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[4].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[0].name = "type"
* rest[0].resource[4].searchParam[0].type = #token
* rest[0].resource[4].searchParam[0].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-organization-type"
* rest[0].resource[4].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[1].name = "address"
* rest[0].resource[4].searchParam[1].type = #token
* rest[0].resource[4].searchParam[1].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-organization-address"
* rest[0].resource[4].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[2].name = "endpoint"
* rest[0].resource[4].searchParam[2].type = #token
* rest[0].resource[4].searchParam[2].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-organization-Endpoint"
* rest[0].resource[4].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[3].name = "identifier"
* rest[0].resource[4].searchParam[3].type = #token
* rest[0].resource[4].searchParam[3].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-organization-identifier"
* rest[0].resource[4].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[4].name = "name"
* rest[0].resource[4].searchParam[4].type = #token
* rest[0].resource[4].searchParam[4].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-organization-name"
* rest[0].resource[4].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[5].name = "partOf"
* rest[0].resource[4].searchParam[5].type = #token
* rest[0].resource[4].searchParam[5].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-organization-partOf"
* rest[0].resource[4].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[6].name = "coverage-area"
* rest[0].resource[4].searchParam[6].type = #token
* rest[0].resource[4].searchParam[6].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-location-coverage-area"
* rest[0].resource[4].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[7].name = "NetworkName"
* rest[0].resource[4].searchParam[7].type = #token
* rest[0].resource[4].searchParam[7].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-network-name"
* rest[0].resource[4].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[7].extension.valueCode = #SHALL



//OrganizationAffiliation
* rest[0].resource[5].type = #OrganizationAffiliation
* rest[0].resource[5].supportedProfile[0] = "http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-OrganizationAffiliation"
* rest[0].resource[5].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[5].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[0].name = "endpoint"
* rest[0].resource[5].searchParam[0].type = #token
* rest[0].resource[5].searchParam[0].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-organizationAffiliation-Endpoint"
* rest[0].resource[5].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[1].name = "location"
* rest[0].resource[5].searchParam[1].type = #token
* rest[0].resource[5].searchParam[1].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-organizationAffiliation-location"
* rest[0].resource[5].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[2].name = "network"
* rest[0].resource[5].searchParam[2].type = #token
* rest[0].resource[5].searchParam[2].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-organizationAffiliation-network"
* rest[0].resource[5].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[3].name = "participating-organization"
* rest[0].resource[5].searchParam[3].type = #token
* rest[0].resource[5].searchParam[3].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-organizationAffiliation-participating-organization"
* rest[0].resource[5].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[4].name = "primary-organization"
* rest[0].resource[5].searchParam[4].type = #token
* rest[0].resource[5].searchParam[4].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-organizationAffiliation-primary-organization"
* rest[0].resource[5].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[5].name = "role"
* rest[0].resource[5].searchParam[5].type = #token
* rest[0].resource[5].searchParam[5].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-organizationAffiliation-role"
* rest[0].resource[5].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[6].name = "service"
* rest[0].resource[5].searchParam[6].type = #token
* rest[0].resource[5].searchParam[6].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-organizationAffiliation-service"
* rest[0].resource[5].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[7].name = "specialty"
* rest[0].resource[5].searchParam[7].type = #token
* rest[0].resource[5].searchParam[7].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-organizationAffiliation-specialty"
* rest[0].resource[5].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[7].extension.valueCode = #SHALL


//Practitioner
* rest[0].resource[6].type = #Practitioner
* rest[0].resource[6].supportedProfile[0] = "http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-Practitioner"
* rest[0].resource[6].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[6].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[0].name = "name"
* rest[0].resource[6].searchParam[0].type = #token
* rest[0].resource[6].searchParam[0].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Practitioner-name"
* rest[0].resource[6].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[1].name = "family"
* rest[0].resource[6].searchParam[1].type = #token
* rest[0].resource[6].searchParam[1].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Practitioner-family"
* rest[0].resource[6].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[2].name = "given"
* rest[0].resource[6].searchParam[2].type = #token
* rest[0].resource[6].searchParam[2].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Practitioner-given"
* rest[0].resource[6].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[3].name = "identifier"
* rest[0].resource[6].searchParam[3].type = #token
* rest[0].resource[6].searchParam[3].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Practitioner-identifier"
* rest[0].resource[6].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[4].name = "identifier-assigner"
* rest[0].resource[6].searchParam[4].type = #token
* rest[0].resource[6].searchParam[4].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Practitioner-identifier-assigner"
* rest[0].resource[6].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[5].name = "qualification-code"
* rest[0].resource[6].searchParam[5].type = #token
* rest[0].resource[6].searchParam[5].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Practitioner-qualification-code"
* rest[0].resource[6].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[6].name = "qualification-issuer"
* rest[0].resource[6].searchParam[6].type = #token
* rest[0].resource[6].searchParam[6].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Practitioner-qualification-issuer"
* rest[0].resource[6].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[6].extension.valueCode = #SHALL

//PractitionerRole
* rest[0].resource[7].type = #PractitionerRole
* rest[0].resource[7].supportedProfile[0] = "http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-PractitionerRole"
* rest[0].resource[7].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[7].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[0].name = "endpoint"
* rest[0].resource[7].searchParam[0].type = #token
* rest[0].resource[7].searchParam[0].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-PractitionerRole-Endpoint"
* rest[0].resource[7].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[1].name = "location"
* rest[0].resource[7].searchParam[1].type = #token
* rest[0].resource[7].searchParam[1].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-PractitionerRole-location"
* rest[0].resource[7].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[2].name = "network"
* rest[0].resource[7].searchParam[2].type = #token
* rest[0].resource[7].searchParam[2].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-PractitionerRole-network"
* rest[0].resource[7].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[3].name = "organization"
* rest[0].resource[7].searchParam[3].type = #token
* rest[0].resource[7].searchParam[3].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-PractitionerRole-organization"
* rest[0].resource[7].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[4].name = "Practicioner"
* rest[0].resource[7].searchParam[4].type = #token
* rest[0].resource[7].searchParam[4].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-PractitionerRole-Practicioner"
* rest[0].resource[7].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[5].name = "role"
* rest[0].resource[7].searchParam[5].type = #token
* rest[0].resource[7].searchParam[5].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-PractitionerRole-role"
* rest[0].resource[7].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[6].name = "service"
* rest[0].resource[7].searchParam[6].type = #token
* rest[0].resource[7].searchParam[6].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-PractitionerRole-service"
* rest[0].resource[7].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[7].name = "specialty"
* rest[0].resource[7].searchParam[7].type = #token
* rest[0].resource[7].searchParam[7].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-PractitionerRole-specialty"
* rest[0].resource[7].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[7].extension.valueCode = #SHALL

//Insurance Plan
* rest[0].resource[2].type = #InsurancePlan
* rest[0].resource[2].supportedProfile[0] = "http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-InsurancePlan"
* rest[0].resource[2].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[2].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[0].name = "coverage-area"
* rest[0].resource[2].searchParam[0].type = #token
* rest[0].resource[2].searchParam[0].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-InsurancePlan-coverage-area"
* rest[0].resource[2].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[1].name = "administrated-by"
* rest[0].resource[2].searchParam[1].type = #token
* rest[0].resource[2].searchParam[1].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-InsurancePlan-administrated-by"
* rest[0].resource[2].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[2].name = "coverage-benefit-type"
* rest[0].resource[2].searchParam[2].type = #token
* rest[0].resource[2].searchParam[2].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-InsurancePlan-coverage-benefit-type"
* rest[0].resource[2].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[3].name = "coverage-network"
* rest[0].resource[2].searchParam[3].type = #token
* rest[0].resource[2].searchParam[3].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-InsurancePlan-coverage-network"
* rest[0].resource[2].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[4].name = "identifier"
* rest[0].resource[2].searchParam[4].type = #token
* rest[0].resource[2].searchParam[4].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-InsurancePlan-identifier"
* rest[0].resource[2].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[5].name = "type"
* rest[0].resource[2].searchParam[5].type = #token
* rest[0].resource[2].searchParam[5].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-InsurancePlan-type"
* rest[0].resource[2].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[6].name = "name"
* rest[0].resource[2].searchParam[6].type = #token
* rest[0].resource[2].searchParam[6].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-InsurancePlan-name"
* rest[0].resource[2].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[7].name = "owned-by"
* rest[0].resource[2].searchParam[7].type = #token
* rest[0].resource[2].searchParam[7].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-InsurancePlan-owned-by"
* rest[0].resource[2].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[7].extension.valueCode = #SHALL


//Restriction
* rest[0].resource[8].type = #Consent
* rest[0].resource[8].supportedProfile[0] = "http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-Restriction"
* rest[0].resource[8].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[8].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[0].name = "_id"
* rest[0].resource[8].searchParam[0].type = #token
* rest[0].resource[8].searchParam[0].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Restriction-identifier"
* rest[0].resource[8].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[1].name = "_lastUpdated"
* rest[0].resource[8].searchParam[1].type = #token
* rest[0].resource[8].searchParam[1].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Restriction-lastUpdated"
* rest[0].resource[8].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[2].name = "plan-type"
* rest[0].resource[8].searchParam[2].type = #token
* rest[0].resource[8].searchParam[2].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Restriction-plan-type"
* rest[0].resource[8].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[3].name = "name"
* rest[0].resource[8].searchParam[3].type = #token
* rest[0].resource[8].searchParam[3].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Restriction-name"
* rest[0].resource[8].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[4].name = "coverage-area"
* rest[0].resource[8].searchParam[4].type = #token
* rest[0].resource[8].searchParam[4].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Restriction-coverage-area"
* rest[0].resource[8].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[5].name = "owned=by"
* rest[0].resource[8].searchParam[5].type = #token
* rest[0].resource[8].searchParam[5].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Restriction-owned-by"
* rest[0].resource[8].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[6].name = "administrated-by"
* rest[0].resource[8].searchParam[6].type = #token
* rest[0].resource[8].searchParam[6].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Restriction-administrated-by"
* rest[0].resource[8].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[6].extension.valueCode = #SHALL

//Validation
* rest[0].resource[9].type = #VerificationResult
* rest[0].resource[9].supportedProfile[0] = "http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-Validation"
* rest[0].resource[9].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[9].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[9].searchParam[0].name = "attestation-who"
* rest[0].resource[9].searchParam[0].type = #token
* rest[0].resource[9].searchParam[0].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Validation-attestation-who"
* rest[0].resource[9].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[9].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[9].searchParam[1].name = "primarysource-who"
* rest[0].resource[9].searchParam[1].type = #token
* rest[0].resource[9].searchParam[1].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Validation-primarysource-who"
* rest[0].resource[9].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[9].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[9].searchParam[2].name = "target"
* rest[0].resource[9].searchParam[2].type = #token
* rest[0].resource[9].searchParam[2].definition = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Validation-target"
* rest[0].resource[9].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[9].searchParam[2].extension.valueCode = #SHALL




---

File: repos/HL7_SLASH_fhir-directory-exchange/input/fsh/cap-statement-rulesets.fsh

// Defines common operations for the server
RuleSet: Federated_Query_CapabilityStatement_Common
* status = #draft
* experimental = true
* date = "2022-02-15T07:15:00.000000-04:00"
* kind = #requirements
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1
* implementationGuide = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/"
* rest[0].mode = #server
* rest.documentation =  "A Federated Query server **SHALL**:\n\n1. Support all profiles defined in this Implementation Guide..\n1.  Implement the RESTful behavior according to the FHIR specification.\n1. Return the following response classes:\n   - (Status 400): invalid parameter\n   - (Status 401/4xx): unauthorized request\n   - (Status 403): insufficient scope\n   - (Status 404): unknown resource\n   - (Status 410): deleted resource.\n1. Support json source formats for all Federated Query interactions.\n1. Identify the Federated Query  profiles supported as part of the FHIR `meta.profile` attribute for each instance.\n1. Support the searchParameters on each profile individually and in combination.\n\nThe Federated Query Server **SHOULD**:\n\n1. Support xml source formats for all Federated Query interactions.\n"
* rest.security.description = "1. See the [General Security Considerations](https://www.hl7.org/fhir/security.html#general) section for requirements and recommendations.\n1. A client **SHALL** reject any unauthorized requests by returning an `HTTP 401` unauthorized response code."
//endpoint connection-type, identifier, mime-type, organization, payload-type, status, usecase-standard, usecase-type, 
* rest[0].resource[0].type = #Endpoint
* rest[0].resource[0].supportedProfile[0] = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/StructureDefinition-NatlDirEndpointQry-Endpoint.html"
* rest[0].resource[0].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[0].name = "identifier"
* rest[0].resource[0].searchParam[0].type = #token
* rest[0].resource[0].searchParam[0].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-endpoint-identifier"
* rest[0].resource[0].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[1].name = "connection-type"
* rest[0].resource[0].searchParam[1].type = #token
* rest[0].resource[0].searchParam[1].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-endpoint-connection-type.html"
* rest[0].resource[0].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[2].name = "mime-type"
* rest[0].resource[0].searchParam[2].type = #token
* rest[0].resource[0].searchParam[2].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-endpoint-mime-type.html"
* rest[0].resource[0].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[3].name = "organization"
* rest[0].resource[0].searchParam[3].type = #token
* rest[0].resource[0].searchParam[3].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-endpoint-organization.html"
* rest[0].resource[0].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[4].name = "payload-type"
* rest[0].resource[0].searchParam[4].type = #token
* rest[0].resource[0].searchParam[4].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-endpoint-payload-type.html"
* rest[0].resource[0].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[5].name = "usecase-standard"
* rest[0].resource[0].searchParam[5].type = #token
* rest[0].resource[0].searchParam[5].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-endpoint-usecase-standard.html"
* rest[0].resource[0].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[6].name = "status"
* rest[0].resource[0].searchParam[6].type = #token
* rest[0].resource[0].searchParam[6].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-endpoint-status.html"
* rest[0].resource[0].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[0].searchParam[7].name = "usecase-type"
* rest[0].resource[0].searchParam[7].type = #token
* rest[0].resource[0].searchParam[7].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-endpoint-usecase-type.html"
* rest[0].resource[0].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[7].extension.valueCode = #SHALL

//careteam
//search parameters: endpoint, location, name, organization, service, category
* rest[0].resource[10].type = #CareTeam
* rest[0].resource[10].supportedProfile[0] = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/StructureDefinition-NatlDirEndpointQry-CareTeam.html"
* rest[0].resource[10].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[9].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[0].name = "endpoint"
* rest[0].resource[10].searchParam[0].type = #token
* rest[0].resource[10].searchParam[0].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-CareTeam-endpoint"
* rest[0].resource[10].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[1].name = "location"
* rest[0].resource[10].searchParam[1].type = #token
* rest[0].resource[10].searchParam[1].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-CareTeam-location"
* rest[0].resource[10].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[2].name = "name"
* rest[0].resource[10].searchParam[2].type = #token
* rest[0].resource[10].searchParam[2].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-CareTeam-name"
* rest[0].resource[10].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[3].name = "organization"
* rest[0].resource[10].searchParam[3].type = #token
* rest[0].resource[10].searchParam[3].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-CareTeam-organization"
* rest[0].resource[10].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[4].name = "service"
* rest[0].resource[10].searchParam[4].type = #token
* rest[0].resource[10].searchParam[4].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-CareTeam-service"
* rest[0].resource[10].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[10].searchParam[5].name = "category"
* rest[0].resource[10].searchParam[5].type = #token
* rest[0].resource[10].searchParam[5].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-CareTeam-category"
* rest[0].resource[10].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[10].searchParam[5].extension.valueCode = #SHALL

//healthcare service
* rest[0].resource[1].type = #HealthcareService
* rest[0].resource[1].supportedProfile[0] = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/StructureDefinition-NatlDirEndpointQry-HealthcareService.html"
* rest[0].resource[1].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[1].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[0].name = "service-category"
* rest[0].resource[1].searchParam[0].type = #token
* rest[0].resource[1].searchParam[0].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-HealthcareService-service-category"
* rest[0].resource[1].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[1].name = "coverage-area"
* rest[0].resource[1].searchParam[1].type = #token
* rest[0].resource[1].searchParam[1].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-HealthcareService-coverage-area"
* rest[0].resource[1].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[2].name = "endpoint"
* rest[0].resource[1].searchParam[2].type = #token
* rest[0].resource[1].searchParam[2].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-HealthcareService-endpoint"
* rest[0].resource[1].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[3].name = "location"
* rest[0].resource[1].searchParam[3].type = #token
* rest[0].resource[1].searchParam[3].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-HealthcareService-location"
* rest[0].resource[1].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[4].name = "name"
* rest[0].resource[1].searchParam[4].type = #token
* rest[0].resource[1].searchParam[4].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-HealthcareService-name"
* rest[0].resource[1].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[5].name = "organization"
* rest[0].resource[1].searchParam[5].type = #token
* rest[0].resource[1].searchParam[5].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-HealthcareService-organization"
* rest[0].resource[1].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[6].name = "specialty"
* rest[0].resource[1].searchParam[6].type = #token
* rest[0].resource[1].searchParam[6].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-HealthcareService-specialty"
* rest[0].resource[1].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[1].searchParam[7].name = "service-type"
* rest[0].resource[1].searchParam[7].type = #token
* rest[0].resource[1].searchParam[7].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-HealthcareService-service-type"
* rest[0].resource[1].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[7].extension.valueCode = #SHALL

//Location
* rest[0].resource[3].type = #Location
* rest[0].resource[3].supportedProfile[0] = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/StructureDefinition-NatlDirEndpointQry-location.html"
* rest[0].resource[3].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[3].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[0].name = "address"
* rest[0].resource[3].searchParam[0].type = #token
* rest[0].resource[3].searchParam[0].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-location-address"
* rest[0].resource[3].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[1].name = "endpoint"
* rest[0].resource[3].searchParam[1].type = #token
* rest[0].resource[3].searchParam[1].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-location-endpoint"
* rest[0].resource[3].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[2].name = "organization"
* rest[0].resource[3].searchParam[2].type = #token
* rest[0].resource[3].searchParam[2].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-location-organization"
* rest[0].resource[3].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[3].name = "physicalType"
* rest[0].resource[3].searchParam[3].type = #token
* rest[0].resource[3].searchParam[3].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-location-physicalType"
* rest[0].resource[3].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[4].name = "partOf"
* rest[0].resource[3].searchParam[4].type = #token
* rest[0].resource[3].searchParam[4].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-location-partOf"
* rest[0].resource[3].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[3].searchParam[5].name = "type"
* rest[0].resource[3].searchParam[5].type = #token
* rest[0].resource[3].searchParam[5].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-location-type"
* rest[0].resource[3].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[5].extension.valueCode = #SHALL


//organization
* rest[0].resource[4].type = #Organization
* rest[0].resource[4].supportedProfile[0] = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/StructureDefinition-NatlDirEndpointQry-Organization.html"
* rest[0].resource[4].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[4].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[0].name = "type"
* rest[0].resource[4].searchParam[0].type = #token
* rest[0].resource[4].searchParam[0].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-organization-type"
* rest[0].resource[4].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[1].name = "address"
* rest[0].resource[4].searchParam[1].type = #token
* rest[0].resource[4].searchParam[1].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-organization-address"
* rest[0].resource[4].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[2].name = "endpoint"
* rest[0].resource[4].searchParam[2].type = #token
* rest[0].resource[4].searchParam[2].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-organization-endpoint"
* rest[0].resource[4].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[3].name = "identifier"
* rest[0].resource[4].searchParam[3].type = #token
* rest[0].resource[4].searchParam[3].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-organization-identifier"
* rest[0].resource[4].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[4].name = "name"
* rest[0].resource[4].searchParam[4].type = #token
* rest[0].resource[4].searchParam[4].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-organization-name"
* rest[0].resource[4].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[5].name = "partOf"
* rest[0].resource[4].searchParam[5].type = #token
* rest[0].resource[4].searchParam[5].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-organization-partOf"
* rest[0].resource[4].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[6].name = "coverage-area"
* rest[0].resource[4].searchParam[6].type = #token
* rest[0].resource[4].searchParam[6].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-location-coverage-area"
* rest[0].resource[4].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[4].searchParam[7].name = "Networkname"
* rest[0].resource[4].searchParam[7].type = #token
* rest[0].resource[4].searchParam[7].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-network-name"
* rest[0].resource[4].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[7].extension.valueCode = #SHALL


//OrganizationAffiliation
* rest[0].resource[5].type = #OrganizationAffiliation
* rest[0].resource[5].supportedProfile[0] = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/StructureDefinition-NatlDirEndpointQry-OrganizationAffiliation.html"
* rest[0].resource[5].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[5].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[0].name = "endpoint"
* rest[0].resource[5].searchParam[0].type = #token
* rest[0].resource[5].searchParam[0].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-OrganizationAffiliation-endpoint"
* rest[0].resource[5].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[1].name = "location"
* rest[0].resource[5].searchParam[1].type = #token
* rest[0].resource[5].searchParam[1].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-OrganizationAffiliation-location"
* rest[0].resource[5].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[2].name = "network"
* rest[0].resource[5].searchParam[2].type = #token
* rest[0].resource[5].searchParam[2].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-OrganizationAffiliation-network"
* rest[0].resource[5].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[3].name = "participating-organization"
* rest[0].resource[5].searchParam[3].type = #token
* rest[0].resource[5].searchParam[3].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-OrganizationAffiliation-participating-organization"
* rest[0].resource[5].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[4].name = "primary-organization"
* rest[0].resource[5].searchParam[4].type = #token
* rest[0].resource[5].searchParam[4].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-OrganizationAffiliation-primary-organization"
* rest[0].resource[5].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[5].name = "role"
* rest[0].resource[5].searchParam[5].type = #token
* rest[0].resource[5].searchParam[5].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-OrganizationAffiliation-role"
* rest[0].resource[5].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[6].name = "service"
* rest[0].resource[5].searchParam[6].type = #token
* rest[0].resource[5].searchParam[6].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-OrganizationAffiliation-service"
* rest[0].resource[5].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[5].searchParam[7].name = "specialty"
* rest[0].resource[5].searchParam[7].type = #token
* rest[0].resource[5].searchParam[7].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-OrganizationAffiliation-specialty"
* rest[0].resource[5].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[5].searchParam[7].extension.valueCode = #SHALL


//Practitioner
* rest[0].resource[6].type = #Practitioner
* rest[0].resource[6].supportedProfile[0] = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/StructureDefinition-NatlDirEndpointQry-Practitioner.html"
* rest[0].resource[6].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[6].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[0].name = "name"
* rest[0].resource[6].searchParam[0].type = #token
* rest[0].resource[6].searchParam[0].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-Practitioner-name"
* rest[0].resource[6].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[1].name = "family"
* rest[0].resource[6].searchParam[1].type = #token
* rest[0].resource[6].searchParam[1].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-Practitioner-family"
* rest[0].resource[6].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[2].name = "given"
* rest[0].resource[6].searchParam[2].type = #token
* rest[0].resource[6].searchParam[2].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-Practitioner-given"
* rest[0].resource[6].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[3].name = "identifier"
* rest[0].resource[6].searchParam[3].type = #token
* rest[0].resource[6].searchParam[3].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-Practitioner-identifier"
* rest[0].resource[6].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[4].name = "identifier-assigner"
* rest[0].resource[6].searchParam[4].type = #token
* rest[0].resource[6].searchParam[4].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-Practitioner-identifier-assigner"
* rest[0].resource[6].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[5].name = "qualification-code"
* rest[0].resource[6].searchParam[5].type = #token
* rest[0].resource[6].searchParam[5].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-Practitioner-qualification-code"
* rest[0].resource[6].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[6].searchParam[6].name = "qualification-issuer"
* rest[0].resource[6].searchParam[6].type = #token
* rest[0].resource[6].searchParam[6].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-Practitioner-qualification-issuer"
* rest[0].resource[6].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[6].searchParam[6].extension.valueCode = #SHALL

//PractitionerRole
* rest[0].resource[7].type = #PractitionerRole
* rest[0].resource[7].supportedProfile[0] = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/StructureDefinition-NatlDirEndpointQry-PractitionerRole.html"
* rest[0].resource[7].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[7].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[0].name = "endpoint"
* rest[0].resource[7].searchParam[0].type = #token
* rest[0].resource[7].searchParam[0].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-PractitionerRole-endpoint"
* rest[0].resource[7].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[1].name = "location"
* rest[0].resource[7].searchParam[1].type = #token
* rest[0].resource[7].searchParam[1].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-PractitionerRole-location"
* rest[0].resource[7].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[2].name = "network"
* rest[0].resource[7].searchParam[2].type = #token
* rest[0].resource[7].searchParam[2].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-PractitionerRole-network"
* rest[0].resource[7].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[3].name = "organization"
* rest[0].resource[7].searchParam[3].type = #token
* rest[0].resource[7].searchParam[3].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-PractitionerRole-organization"
* rest[0].resource[7].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[4].name = "Practicioner"
* rest[0].resource[7].searchParam[4].type = #token
* rest[0].resource[7].searchParam[4].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-PractitionerRole-Practicioner"
* rest[0].resource[7].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[5].name = "role"
* rest[0].resource[7].searchParam[5].type = #token
* rest[0].resource[7].searchParam[5].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-PractitionerRole-role"
* rest[0].resource[7].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[6].name = "service"
* rest[0].resource[7].searchParam[6].type = #token
* rest[0].resource[7].searchParam[6].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-PractitionerRole-service"
* rest[0].resource[7].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[7].searchParam[7].name = "specialty"
* rest[0].resource[7].searchParam[7].type = #token
* rest[0].resource[7].searchParam[7].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-PractitionerRole-specialty"
* rest[0].resource[7].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[7].searchParam[7].extension.valueCode = #SHALL


//Insurance Plan
* rest[0].resource[2].type = #InsurancePlan
* rest[0].resource[2].supportedProfile[0] = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/StructureDefinition-NatlDirEndpointQry-InsurancePlan.html"
* rest[0].resource[2].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[2].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[0].name = "coverage-area"
* rest[0].resource[2].searchParam[0].type = #token
* rest[0].resource[2].searchParam[0].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-InsurancePlan-coverage-area"
* rest[0].resource[2].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[1].name = "administrated-by"
* rest[0].resource[2].searchParam[1].type = #token
* rest[0].resource[2].searchParam[1].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-InsurancePlan-administrated-by"
* rest[0].resource[2].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[2].name = "coverage-benefit-type"
* rest[0].resource[2].searchParam[2].type = #token
* rest[0].resource[2].searchParam[2].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-InsurancePlan-coverage-benefit-type"
* rest[0].resource[2].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[3].name = "coverage-network"
* rest[0].resource[2].searchParam[3].type = #token
* rest[0].resource[2].searchParam[3].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-InsurancePlan-coverage-network"
* rest[0].resource[2].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[4].name = "identifier"
* rest[0].resource[2].searchParam[4].type = #token
* rest[0].resource[2].searchParam[4].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-InsurancePlan-identifier"
* rest[0].resource[2].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[5].name = "type"
* rest[0].resource[2].searchParam[5].type = #token
* rest[0].resource[2].searchParam[5].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-InsurancePlan-type"
* rest[0].resource[2].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[6].name = "name"
* rest[0].resource[2].searchParam[6].type = #token
* rest[0].resource[2].searchParam[6].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-InsurancePlan-name"
* rest[0].resource[2].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[6].extension.valueCode = #SHALL
* rest[0].resource[2].searchParam[7].name = "owned-by"
* rest[0].resource[2].searchParam[7].type = #token
* rest[0].resource[2].searchParam[7].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-InsurancePlan-owned-by"
* rest[0].resource[2].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[7].extension.valueCode = #SHALL


//Restriction
* rest[0].resource[8].type = #Consent
* rest[0].resource[8].supportedProfile[0] = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/StructureDefinition-NatlDirEndpointQry-Restriction.html"
* rest[0].resource[8].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[8].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[0].name = "_id"
* rest[0].resource[8].searchParam[0].type = #token
* rest[0].resource[8].searchParam[0].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-Restriction-identifier"
* rest[0].resource[8].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[1].name = "_lastUpdated"
* rest[0].resource[8].searchParam[1].type = #token
* rest[0].resource[8].searchParam[1].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-Restriction-lastUpdated"
* rest[0].resource[8].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[2].name = "plan-type"
* rest[0].resource[8].searchParam[2].type = #token
* rest[0].resource[8].searchParam[2].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-Restriction-plan-type"
* rest[0].resource[8].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[2].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[3].name = "name"
* rest[0].resource[8].searchParam[3].type = #token
* rest[0].resource[8].searchParam[3].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-Restriction-name"
* rest[0].resource[8].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[3].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[4].name = "coverage-area"
* rest[0].resource[8].searchParam[4].type = #token
* rest[0].resource[8].searchParam[4].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-Restriction-coverage-area"
* rest[0].resource[8].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[4].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[5].name = "owned=by"
* rest[0].resource[8].searchParam[5].type = #token
* rest[0].resource[8].searchParam[5].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-Restriction-owned-by"
* rest[0].resource[8].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[5].extension.valueCode = #SHALL
* rest[0].resource[8].searchParam[6].name = "administrated-by"
* rest[0].resource[8].searchParam[6].type = #token
* rest[0].resource[8].searchParam[6].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-Restriction-administrated-by"
* rest[0].resource[8].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[8].searchParam[6].extension.valueCode = #SHALL

//Verification
* rest[0].resource[9].type = #VerificationResult
* rest[0].resource[9].supportedProfile[0] = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/StructureDefinition-NatlDirEndpointQry-Validation.html"
* rest[0].resource[9].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[0].resource[9].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[9].searchParam[0].name = "attestation-who"
* rest[0].resource[9].searchParam[0].type = #token
* rest[0].resource[9].searchParam[0].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-Validation-attestation-who"
* rest[0].resource[9].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[9].searchParam[0].extension.valueCode = #SHALL
* rest[0].resource[9].searchParam[1].name = "primarysource-who"
* rest[0].resource[9].searchParam[1].type = #token
* rest[0].resource[9].searchParam[1].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-Validation-primarysource-who"
* rest[0].resource[9].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[9].searchParam[1].extension.valueCode = #SHALL
* rest[0].resource[9].searchParam[2].name = "target"
* rest[0].resource[9].searchParam[2].type = #token
* rest[0].resource[9].searchParam[2].definition = "https://build.fhir.org/ig/HL7/fhir-directory-exchange/SearchParameter-Validation-target"
* rest[0].resource[9].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[9].searchParam[2].extension.valueCode = #SHALL




---

File: repos/HL7_SLASH_fhir-directory-exchange/input/fsh/cap-statements.fsh





//National Directory

Instance: fhir-national-directory
InstanceOf: CapabilityStatement
Usage: #definition
* description = "Capabilities for a validated national directory server"
* name = "CapabilityStatementFhirNationalDirectory"
* text.div = "<div></div>"
* title = "Capability Statement National Directory"
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

* **SHALL** support:[(http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Organization.html)](http://hl7.org/fhir/us/directory-query/2022Sep/StructureDefinition-NatlDirEndpointQry-Organization.html)

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



---

File: repos/HL7_SLASH_fhir-directory-exchange/input/fsh/CodeSystems.fsh



---

File: repos/HL7_SLASH_fhir-directory-exchange/input/fsh/extensions.fsh



---

File: repos/HL7_SLASH_fhir-directory-exchange/input/fsh/InsuranceNetworkExamples.fsh




Instance: AcmeofCTStdNet
InstanceOf: NatlDirExNetwork
Description: "Acme of CT Standard Network"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryNetwork) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* partOf = Reference(Acme)
* type = $NatlDirectoryOrgTypeCS#ntwk "Network"
* name = "ACME CT Preferred Provider Network"
* contact.telecom.extension[via-intermediary].valueReference = Reference(Acme)
* contact.name.family = "Kawasaki"
* contact.name.given = "Jane"


Instance: AcmeofCTPremNet
InstanceOf: NatlDirExNetwork
Description: "Acme of CT Premium Premium Network"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryNetwork) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* partOf = Reference(Acme)
* type = $NatlDirectoryOrgTypeCS#ntwk "Network"
* name = "ACME CT Premium Preferred Provider Network"
* contact.telecom.extension[via-intermediary].valueReference = Reference(Acme)
* contact.name.family = "Kawasaki"
* contact.name.given = "Jane"
* extension[location-reference].valueReference = Reference(StateOfCTLocation)

Instance: Acme
InstanceOf: NatlDirExOrganization
Description: "Payer Organization"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryOrganization) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Acme of CT"
* type = $NatlDirectoryOrgTypeCS#payer "Payer"
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
InstanceOf: NatlDirExInsurancePlan
Description: "Acme of CT QHP Gold Plan"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryInsurancePlan) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* name = "Acme of CT QHP Gold"
* type = $NatlDirectoryInsProdTypCS#qhp "Qualified Health Plan"
* plan.type = $NatlDirectoryInsPlanTypCS#gold "Gold-QHP"
* ownedBy = Reference (Acme)
* administeredBy = Reference (Acme)     // 1..1
* network[0] = Reference(AcmeofCTStdNet)
* network[1] = Reference(AcmeofCTPremNet)
* coverageArea = Reference(StateOfCTLocation)
* endpoint = Reference(AcmeOfCTPortalEndpoint)
* status = #active

Instance: AcmeQHPBronze
InstanceOf: NatlDirExInsurancePlan
Description: "Acme of CT QHP Bronze Plan"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryInsurancePlan) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* name = "Acme of CT QHP Bronze"
* type = $NatlDirectoryInsProdTypCS#qhp "Qualified Health Plan"
* plan.type = $NatlDirectoryInsPlanTypCS#bronze "Bronze-QHP"
* ownedBy = Reference (Acme)
* administeredBy = Reference (Acme)     // 1..1
* network[0] = Reference(AcmeofCTStdNet)
* coverageArea = Reference(StateOfCTLocation)
* endpoint = Reference(AcmeOfCTPortalEndpoint)
* status = #active

Instance: StateOfCTLocation
InstanceOf: NatlDirExLocation
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
InstanceOf: NatlDirExEndPoint
Description: "Endpoint for Acme of CT Portal"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryEndpoint) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "Endpoint for Acme of CT Portal"
* connectionType = $NatlDirectoryEndpointConnTypeCS#rest-non-fhir
* payloadType = $NatlDirectoryEndpointPayldTypeCS#NA
/* endpoint-type = #FHIR*/
* address = "https://urlofportal.acmect.com"
* extension[endpoint-usecase].extension[endpointUsecasetype].valueCodeableConcept = $V3ActReason#HOPERAT
* extension[endpoint-usecase].extension[standard].valueUri = "www.hl7.org"

* extension[endpoint-type].extension[endpointType].valueCodeableConcept = $NatlDirectoryEndpointTypeCS#FHIR
* extension[secureEndpoint].valueBoolean = false
//* extension[SecureExchangeArtifacts].extension[secureExchangeArtifactsType].valueString = "digital certificates"
//* extension[SecureExchangeArtifacts].extension[expirationDate].valueDateTime = "2024-07-07T13:26:22.0314215+00:00"
* extension[igsSupported].extension[igsSupportedType].valueCodeableConcept  = $NatlDirectoryIGTypeCS#FHIR
* extension[associatedServers].extension[associatedServersType].valueString  = "FHIR"
* extension[associatedServers].extension[serverURL].valueString  = "www.hl7.org"
* extension[dynamic-registration].extension[version].valueString  = "V1"
* extension[dynamic-registration].extension[binary].valueString  = "1"
* extension[secure-exchange-artifacts].extension[secureExchangeArtifactsType].valueString  = "1"
* extension[secure-exchange-artifacts].extension[certificate].valueBase64Binary  = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvck9wdGlvbnMiIDogIiIsCiAgICAgICAgICJ0eXBlIiA6ICJDcWxUb0VsbUluZm8iCiAgICAgIH0gXSwKICAgICAgImlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogIlRlc3RpbmdDcWxMaWJyYXJ5IiwKICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICB9LAogICAgICAic2NoZW1hSWRlbnRpZmllciIgOiB7CiAgICAgICAgICJpZCIgOiAidXJuOmhsNy1vcmc6ZWxtIiwKICAgICAgICAgInZlcnNpb24iIDogInIxIgogICAgICB9LAogICAgICAidXNpbmdzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiU3lzdGVtIiwKICAgICAgICAgICAgInVyaSIgOiAidXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVIiLAogICAgICAgICAgICAidXJpIiA6ICJodHRwOi8vaGw3Lm9yZy9maGlyIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImluY2x1ZGVzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAicGF0aCIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiNC4wLjEiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZXR1cm5zVHJ1ZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJldHVybnNGYWxzZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiZmFsc2UiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbHNvUmV0dXJuc1RydWUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogInRydWUiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbm90aGVyVHJ1ZVN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkJ1dElBbUZhbHNlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgInZhbHVlIiA6ICJmYWxzZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFsc29GYWxzZUhlcmUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogImZhbHNlIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjQwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjIuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcnVlTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJHcmVhdGVyIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGYWxzZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTGVzcyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVHJ1ZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiR3JlYXRlciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFub3RoZXJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMZXNzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmV0dXJuc0FDb2RlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlIiwKICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJjb2RpbmciLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGUiLAogICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInN5c3RlbSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJodHRwOi8vc25vbWVkLmluZm8vc2N0IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiY29kZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDgyODAwNCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRpc3BsYXkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiUG9zaXRpdmUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAidGV4dCIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJJJ20gc29tZXRoaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0KICAgfQp9Cgo="
* extension[SecureExchangeArtifacts].extension[expirationDate].valueDateTime = "2024-07-07T13:26:22.0314215+00:00"
* extension[trustFramework].extension[trustFrameworkType].valueCodeableConcept  = $NatlDirectorytrustFrameworkCS#Commonwell
* extension[trustFramework].extension[qualifier].valueString  = "Yes"
* extension[trustFramework].extension[signedArtifact].valueBase64Binary  = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvck9wdGlvbnMiIDogIiIsCiAgICAgICAgICJ0eXBlIiA6ICJDcWxUb0VsbUluZm8iCiAgICAgIH0gXSwKICAgICAgImlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogIlRlc3RpbmdDcWxMaWJyYXJ5IiwKICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICB9LAogICAgICAic2NoZW1hSWRlbnRpZmllciIgOiB7CiAgICAgICAgICJpZCIgOiAidXJuOmhsNy1vcmc6ZWxtIiwKICAgICAgICAgInZlcnNpb24iIDogInIxIgogICAgICB9LAogICAgICAidXNpbmdzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiU3lzdGVtIiwKICAgICAgICAgICAgInVyaSIgOiAidXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVIiLAogICAgICAgICAgICAidXJpIiA6ICJodHRwOi8vaGw3Lm9yZy9maGlyIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImluY2x1ZGVzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAicGF0aCIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiNC4wLjEiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZXR1cm5zVHJ1ZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJldHVybnNGYWxzZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiZmFsc2UiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbHNvUmV0dXJuc1RydWUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogInRydWUiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbm90aGVyVHJ1ZVN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkJ1dElBbUZhbHNlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgInZhbHVlIiA6ICJmYWxzZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFsc29GYWxzZUhlcmUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogImZhbHNlIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjQwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjIuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcnVlTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJHcmVhdGVyIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGYWxzZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTGVzcyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVHJ1ZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiR3JlYXRlciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFub3RoZXJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMZXNzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmV0dXJuc0FDb2RlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlIiwKICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJjb2RpbmciLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGUiLAogICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInN5c3RlbSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJodHRwOi8vc25vbWVkLmluZm8vc2N0IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiY29kZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDgyODAwNCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRpc3BsYXkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiUG9zaXRpdmUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAidGV4dCIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJJJ20gc29tZXRoaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0KICAgfQp9Cgo="
* extension[trustFramework].extension[publicCertificate].valueBase64Binary  = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvck9wdGlvbnMiIDogIiIsCiAgICAgICAgICJ0eXBlIiA6ICJDcWxUb0VsbUluZm8iCiAgICAgIH0gXSwKICAgICAgImlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogIlRlc3RpbmdDcWxMaWJyYXJ5IiwKICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICB9LAogICAgICAic2NoZW1hSWRlbnRpZmllciIgOiB7CiAgICAgICAgICJpZCIgOiAidXJuOmhsNy1vcmc6ZWxtIiwKICAgICAgICAgInZlcnNpb24iIDogInIxIgogICAgICB9LAogICAgICAidXNpbmdzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiU3lzdGVtIiwKICAgICAgICAgICAgInVyaSIgOiAidXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVIiLAogICAgICAgICAgICAidXJpIiA6ICJodHRwOi8vaGw3Lm9yZy9maGlyIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImluY2x1ZGVzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAicGF0aCIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiNC4wLjEiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZXR1cm5zVHJ1ZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJldHVybnNGYWxzZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiZmFsc2UiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbHNvUmV0dXJuc1RydWUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogInRydWUiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbm90aGVyVHJ1ZVN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkJ1dElBbUZhbHNlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgInZhbHVlIiA6ICJmYWxzZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFsc29GYWxzZUhlcmUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogImZhbHNlIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjQwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjIuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcnVlTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJHcmVhdGVyIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGYWxzZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTGVzcyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVHJ1ZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiR3JlYXRlciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFub3RoZXJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMZXNzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmV0dXJuc0FDb2RlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlIiwKICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJjb2RpbmciLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGUiLAogICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInN5c3RlbSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJodHRwOi8vc25vbWVkLmluZm8vc2N0IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiY29kZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDgyODAwNCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRpc3BsYXkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiUG9zaXRpdmUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAidGV4dCIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJJJ20gc29tZXRoaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0KICAgfQp9Cgo="
* extension[secure-exchange-artifacts].extension[certificate].valueBase64Binary = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvck9wdGlvbnMiIDogIiIsCiAgICAgICAgICJ0eXBlIiA6ICJDcWxUb0VsbUluZm8iCiAgICAgIH0gXSwKICAgICAgImlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogIlRlc3RpbmdDcWxMaWJyYXJ5IiwKICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICB9LAogICAgICAic2NoZW1hSWRlbnRpZmllciIgOiB7CiAgICAgICAgICJpZCIgOiAidXJuOmhsNy1vcmc6ZWxtIiwKICAgICAgICAgInZlcnNpb24iIDogInIxIgogICAgICB9LAogICAgICAidXNpbmdzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiU3lzdGVtIiwKICAgICAgICAgICAgInVyaSIgOiAidXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVIiLAogICAgICAgICAgICAidXJpIiA6ICJodHRwOi8vaGw3Lm9yZy9maGlyIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImluY2x1ZGVzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAicGF0aCIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiNC4wLjEiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZXR1cm5zVHJ1ZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJldHVybnNGYWxzZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiZmFsc2UiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbHNvUmV0dXJuc1RydWUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogInRydWUiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbm90aGVyVHJ1ZVN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkJ1dElBbUZhbHNlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgInZhbHVlIiA6ICJmYWxzZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFsc29GYWxzZUhlcmUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogImZhbHNlIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjQwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjIuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcnVlTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJHcmVhdGVyIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGYWxzZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTGVzcyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVHJ1ZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiR3JlYXRlciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFub3RoZXJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMZXNzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmV0dXJuc0FDb2RlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlIiwKICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJjb2RpbmciLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGUiLAogICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInN5c3RlbSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJodHRwOi8vc25vbWVkLmluZm8vc2N0IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiY29kZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDgyODAwNCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRpc3BsYXkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiUG9zaXRpdmUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAidGV4dCIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJJJ20gc29tZXRoaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0KICAgfQp9Cgo="







---

File: repos/HL7_SLASH_fhir-directory-exchange/input/fsh/NatlDirectory.fsh

Profile: NatlDirExCareTeam 
Parent: $NatlDirectoryCareTeam
Id: NatlDirEx-CareTeam
Title: "National Directory Care Team"
Description: "Defines the basic constraints and extensions on the CareTeam resource for use in a Validated Healthcare Directory"
* extension[restriction] ^short = "Restriction"
* extension[restriction] ^definition = "Identifies and conveys information about restrictions on the use or release of exchanged information, e.g. information that can only be shared under particular condition, such as a signed data use agreement between parties"
//* participant 1..*

Profile:        NatlDirExEndPoint
Parent:         $NatlDirectoryEndPoint
Id:             NatlDirEx-Endpoint
Title:          "National Directory Endpoint"
Description:    "The technical details of an endpoint that can be used for electronic services, such as a portal or FHIR REST services, messaging or operations, or DIRECT messaging."
* extension[associated-servers] MS
* extension[secured-endpoint] MS
* identifier MS
* identifier.assigner MS

Profile:        NatlDirExHealthCareService
Parent:         $NatlDirectoryHealthCareService
Id:             NatlDirEx-HealthcareService
Title:          "National Directory HealthcareService"
Description:    "The HealthCareService resource typically describes services offered by an organization/practitioner at a location. The resource may be used to encompass a variety of services covering the entire healthcare spectrum, including promotion, prevention, diagnostics, pharmacy, hospital and ambulatory care, home care, long-term care, and other health-related and community services."
* extension[newpatients] MS
* identifier MS
* serviceProvisionCode MS
* eligibility MS
* program MS 
* communication MS
* referralMethod MS
* characteristic MS
* communication MS
* referralMethod MS


Profile:        NatlDirExInsurancePlan
Parent:         $NatlDirectoryInsurancePlan
Id:             NatlDirEx-InsurancePlan
Title:          "National Directory InsurancePlan"
Description:    "An InsurancePlan is a discrete package of health insurance coverage benefits that are offered under a particular network type. A given payer’s products typically differ by network type and/or covered benefits. A plan pairs a product’s covered benefits with the particular cost sharing structure offered to a consumer. A given product may comprise multiple plans (i.e. each plan offers different cost sharing requirements for the same set of covered benefits)."


Profile:        NatlDirExLocation
Parent:         $NatlDirectoryLocation
Id:             NatlDirEx-Location
Title:          "National Directory Location"
Description:    "A Location is the physical place where healthcare services are provided, practitioners are employed, 
                 organizations are based, etc. Locations can range in scope from a room in a building to a geographic region/area."
* identifier MS
 

Profile:        NatlDirExNetwork
Parent:         $NatlDirectoryNetwork    //Organization 
Id:             NatlDirEx-Network
Title:          "National Directory Network"
Description:    "A Network refers to a healthcare provider insurance network. A healthcare provider insurance network is an aggregation of organizations and individuals that deliver a set of services across a geography through health insurance products/plans. A network is typically owned by a payer."



Profile:        NatlDirExOrganization
Parent:         $NatlDirectoryOrganization
Id:             NatlDirEx-Organization
Title:          "National Directory Organization"
Description:    "An organization is a formal or informal grouping of people or organizations with a common purpose, such as a company, institution, corporation, community group, or healthcare practice.
Guidance:   When the contact is a department name, rather than a human (e.g., patient help line), include a blank family and given name, and provide the department name in contact.name.text"
//* extension[qualification].extension[whereValid].value[x] MS

Profile:        NatlDirExOrganizationAffiliation
Parent:         $NatlDirExOrganizationAffiliation
Id:             NatlDirEx-OrganizationAffiliation
Title:          "National Directory OrganizationAffiliation"
Description:    "The OrganizationAffiliation resource describes relationships between two or more organizations, including the services one organization provides another, the location(s) where they provide services, the availability of those services, electronic endpoints, and other relevant information."
* identifier.type MS
* identifier.value MS
* identifier.assigner MS 


Profile:        NatlDirExPractitioner
Parent:         $NatlDirectoryPractitioner
Id:             NatlDirEx-Practitioner
Title:          "National Directory Practitioner"
Description:    "Practitioner is a person who is directly or indirectly involved in the provisioning of healthcare."


Profile:        NatlDirExPractitionerRole
Parent:         $NatlDirEndpointQryPractitionerRole
Id:             NatlDirEx-PractitionerRole
Title:          "National Directory PractitionerRole"
Description:    "PractionerRole describes details about a provider, which can be a practitioner or an organization. When the provider is a practitioner, 
there may be a relationship to an organization. A provider renders services to patients at a location. When the provider is a practitioner, there may also 
be a relationship to an organization. Practitioner participation in healthcare provider insurance networks may be direct or through their role at an organization."
* identifier.type MS
* identifier.value MS
* identifier.assigner MS 

Profile:        NatlDirExRestriction
Parent:         $NatlDirectoryRestriction
Id:             NatlDirEx-Restriction
Title:          "National Directory Restriction"
Description:    "Restriction describes details about a..."

Profile:        NatlDirExValidation
Parent:         $NatlDirectoryValidation
Id:             NatlDirEx-Validation
Title:          "National Directory Validation"
Description:    "Validation describes details about..."


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/fsh/OrganizationExamples.fsh

Instance: HartfordOrthopedics
InstanceOf: NatlDirExOrganization
Description: "Hartford Orthpedic Services is a group providing Orthpods for Acme of CT at Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirExOrganization)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* identifier[NPI].value = "NPI456"
* identifier[NPI].system = $NPICS
* name = "Hartford Orthopedics Services"
* type = $NatlDirectoryOrgTypeCS#prvgrp "Provider Group"
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
InstanceOf: NatlDirExOrganization
Description: "Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirExOrganization)
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
* type = $NatlDirectoryOrgTypeCS#fac "Facility"
/* 
* extension[qualification].extension[identifier]
* extension[qualification].extension[code] = 
* extension[qualification].extension[issuer].display = "CMS"
* extension[qualification].extension[status] = $QualificationStatusCS#active
*/


Instance: HospERService
InstanceOf: NatlDirExHealthCareService
Description: "Hartford General Hospital ER"
Usage: #example
* meta.profile = Canonical(NatlDirExHealthCareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
//* extension[deliverymethod].extension[type].valueCodeableConcept = $NatlDirectoryHealthcareServiceDeliveryMthdCS#physical
* category = $NatlDirectoryHealthcareServiceCatCS#emerg  
* specialty =  $NUCCProviderTaxonomy#207P00000X   "Emergency Medicine Physician"
* providedBy = Reference(Hospital)
* location[0] = Reference(HospLoc1)
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = $NatlDirectoryDelvMthdCS#physical


Instance: HospLoc1
InstanceOf: NatlDirExLocation
Description: "Location1 of Hartford Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirExLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "Hartford Hospital Location 1"
* type = $V3RoleCode#HOSP 
* managingOrganization = Reference(Hospital)
* extension[accessibility][1].valueCodeableConcept = $NatlDirectoryAccessibilityCS#pubtrans
* extension[accessibility][0].valueCodeableConcept = $NatlDirectoryAccessibilityCS#adacomp
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
InstanceOf: NatlDirExLocation
Description: "Location2 of Hartford Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirExLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "Hartford Hospital Location 2"
* type = $V3RoleCode#HOSP
* managingOrganization = Reference(Hospital)
* extension[accessibility][1].valueCodeableConcept = $NatlDirectoryAccessibilityCS#pubtrans
* extension[accessibility][0].valueCodeableConcept = $NatlDirectoryAccessibilityCS#adacomp
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
InstanceOf: NatlDirExHealthCareService
Description: "Hartford Orthopedic Services"
Usage: #example
* meta.profile = Canonical(NatlDirExHealthCareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
//* extension[deliverymethod].extension[type].valueCodeableConcept = $NatlDirectoryHealthcareServiceDeliveryMthdCS#physical
* category = $NatlDirectoryHealthcareServiceCatCS#prov 
* specialty = $NUCCProviderTaxonomy#207X00000X "Orthopaedic Surgery Physician"   // Orthopedics
* providedBy = Reference(HartfordOrthopedics)
* location[1] = Reference(HospLoc2)
* location[0] = Reference(HospLoc1)
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = $NatlDirectoryDelvMthdCS#physical

Instance: HartfordOrthopedicAffil
InstanceOf: NatlDirExOrganizationAffiliation
Description: "Hartford Orthopedic Services affiliation with Acme of CT Provider Network and Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirExOrganizationAffiliation)
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
InstanceOf: NatlDirExOrganizationAffiliation
Description: "Hamilton Clinic's affiliation with Acme of CT Provider Network and Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirExOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = $NatlDirectoryOrgAffRoleCS#outpatient 
* healthcareService = Reference(HamiltonClinicServices)
* participatingOrganization = Reference(HamiltonClinic)
* location[0] = Reference(HospLoc1)
* network = Reference(AcmeofCTStdNet)


Instance: HamiltonClinicServices
InstanceOf: NatlDirExHealthCareService
Description: "Hamilton Clinic Services"
Usage: #example
* meta.profile = Canonical(NatlDirExHealthCareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* category = $NatlDirectoryHealthcareServiceCatCS#outpat
* specialty = $NUCCProviderTaxonomy#207Q00000X "Family Medicine Physician"  
* providedBy = Reference(HamiltonClinic)
* location[0] = Reference(HospLoc1)
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = $NatlDirectoryDelvMthdCS#physical

Instance: HamiltonClinic
InstanceOf: NatlDirExOrganization
Description: "Hamilton Clinic (a Division of Hartford Hospital)"
Usage: #example
* meta.profile = Canonical(NatlDirExOrganization)
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
* type = $NatlDirectoryOrgTypeCS#fac "Facility"


Instance: BurrClinicAffil
InstanceOf: NatlDirExOrganizationAffiliation
Description: "Burr Clinic's affiliation with Acme of CT Provider Network and Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirExOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = $NatlDirectoryOrgAffRoleCS#outpatient 
* healthcareService = Reference(BurrClinicServices)
* participatingOrganization = Reference(BurrClinic)
* location[0] = Reference(HospLoc2)
* network = Reference(AcmeofCTStdNet)
* organization = Reference(Hospital)

Instance: BurrClinicServices
InstanceOf: NatlDirExHealthCareService
Description: "Burr Clinic Services"
Usage: #example
* meta.profile = Canonical(NatlDirExHealthCareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
//* extension[deliverymethod].extension[type].valueCodeableConcept = $NatlDirectoryHealthcareServiceDeliveryMthdCS#physical
* category = $NatlDirectoryHealthcareServiceCatCS#outpat
* specialty = $NUCCProviderTaxonomy#207Q00000X "Family Medicine Physician"  
* providedBy = Reference(BurrClinic)
* location[0] = Reference(HospLoc1)
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = $NatlDirectoryDelvMthdCS#physical

Instance: BurrClinic
InstanceOf: NatlDirExOrganization
Description: "Burr Clinic provides service to Hartford Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirExOrganization)
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
* type = $NatlDirectoryOrgTypeCS#fac "Facility"


Instance: ConnHIE
InstanceOf: NatlDirExOrganization
Description: "Connecticut HIE"
Usage: #example
* meta.profile = Canonical(NatlDirExOrganization)
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
* type = $NatlDirectoryOrgTypeCS#atyprv "Atypical Provider"

Instance: ConnHIEAffil
InstanceOf: NatlDirExOrganizationAffiliation
Description: "Burr Clinic's affiliation with Conn HIE"
Usage: #example
* meta.profile = Canonical(NatlDirExOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = $NatlDirectoryOrgAffRoleCS#bt
* participatingOrganization = Reference(BurrClinic)
* organization = Reference(ConnHIE)


Instance: CareTeam1
InstanceOf: NatlDirExCareTeam
Description: "Burr Clinic's Care Team" 
Usage: #example
* meta.profile = Canonical(NatlDirExCareTeam)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #proposed
* category = $loinc#LA27975-4
* extension[careteam-alias].valueString = "CareTeam1"
* extension[endpoint].valueReference = Reference(AcmeOfCTPortalEndpoint) 
* extension[service].valueReference = Reference(HansSoloService) 
* identifier.extension[status].valueCode = $NatlDirectoryCredentialStatusCS#active
* extension[restriction].valueReference = Reference(PatientConsent) 
//* participant.role[0].valueCodeableConcept = $SCT#2481008

/*


Instance: PractitionerARole1
InstanceOf: NatlDirExPractitionerRole
Description: "Dr Smith moonlighting as ER Doc at Rockville Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirExPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = $NatlDirectoryProvdrRoleCS#PH 
* practitioner = Reference(PractitionerA)
* healthcareService = Reference(HealthCareServiceEmergency)
// specialty = internal medicine
// available M-F

Instance: PractitionerARole2
InstanceOf: NatlDirExPractitionerRole
Description: "Dr Smith Internal Medicine at Rockville Clinic"
Usage: #example
* meta.profile = Canonical(NatlDirExPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = $NatlDirectoryProvdrRoleCS#PH
// specialty = internal medicine
// Available:  Sat/Sun
* healthcareService = Reference(HealthCareServiceOutpatientClinic)

Instance: HealthCareServiceOutpatientClinic
InstanceOf: NatlDirExHealthcareService
Description: "Rockville Clinic Outpatient Internal Medicine Service"
Usage: #example
* meta.profile = Canonical(NatlDirExHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = $NatlDirectoryHealthcareServiceDeliveryMthdCS#physical
* category = $NatlDirectoryHealthcareServiceCatCS#Outpatient
* specialty = $NUCCProviderTaxonomy#3336C0003X   // Fix to Internal Medicine
* providedBy = Reference(OrganizationInternalMedicineLLC)
* location[0] = Reference(RockvilleClinicLocation)

Instance: HealthCareServiceEmergency
InstanceOf: NatlDirExHealthcareService
Description: "Rockville Hospital ER"
Usage: #example
* meta.profile = Canonical(NatlDirExPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = $NatlDirectoryHealthcareServiceDeliveryMthdCS#physical
* category = $NatlDirectoryHealthcareServiceCatCS#Emergency 
* providedBy = Reference(OrganizationRockvilleHospital)
* location[0] = Reference(RockvilleHospitalLocation)


Instance: PharmacyOrganizationAffiliation1
InstanceOf: NatlDirExOrganizationAffiliation
Description: "Organization Affiliation for PharmacyOrganizationA"
Usage: #example
* id = "1"
* meta.profile = Canonical(NatlDirExOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* network = Reference(AcmeOfCTSPreferredProviderNetwork)
* participatingOrganization = Reference (PharmacyOrganizationA)
* healthcareService = Reference(PharmacyAHealthCareService)
* location[0] = Reference(PharmacyLocation1)
* location[1] = Reference(PharmacyLocation2)

Instance: AcmeOfCTSPreferredProviderNetwork
InstanceOf: NatlDirExNetwork
Description: "Acme of CT Preferred Provider Network"
Usage: #example
* id = "1"
* meta.profile = Canonical(NatlDirExNetwork)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* partOf = Reference(PayerOrganizationA)
* type = #payer 

Instance: PharmacyLocation1
InstanceOf: NatlDirExLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(NatlDirExLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "CT Location 1"
* type = $V3RoleCode#OUTPHARM
Instance: PharmacyLocation2
InstanceOf: NatlDirExLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(NatlDirExLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "CT Location 2"
* type = $V3RoleCode#OUTPHARM

Instance: PharmacyLocation3
InstanceOf: NatlDirExLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(NatlDirExLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "MA Location 1"
* type = $V3RoleCode#OUTPHARM

Instance: PharmacyLocation4
InstanceOf: NatlDirExLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(NatlDirExLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "MA Location 2"
* type = $V3RoleCode#OUTPHARM

Instance: PayerOrganizationA
InstanceOf: NatlDirExOrganization
Description: "Payer Organization"
Usage: #example
* meta.profile = Canonical(NatlDirExOrganization)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "PayerA"
* type = $V3RoleCode#OUTPHARM
*/

---

File: repos/HL7_SLASH_fhir-directory-exchange/input/fsh/PharmacyExamples.fsh

Instance: PharmChain
InstanceOf: NatlDirExOrganization
Description: "Organization that Provides Pharmacy Services"
Usage: #example
* meta.profile = Canonical(NatlDirExOrganization) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Pharm Chain"
* type = $NatlDirectoryOrgTypeCS#prvgrp "Provider Group"
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
InstanceOf: NatlDirExOrganization
Description: "Organization that Manages 2 of PharmChain's pharmacies"
Usage: #example
* meta.profile =  Canonical(NatlDirExOrganization) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "BigBox"
* type = $NatlDirectoryOrgTypeCS#bus "Non-Healthcare Business"
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
InstanceOf: NatlDirExHealthCareService
Description: "Pharmacy Service provided by PharmChain"
Usage: #example
* meta.profile =  Canonical(NatlDirExHealthCareService) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Pharmacy by PharmChain"
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = $NatlDirectoryDelvMthdCS#physical
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = $NatlDirectoryAcceptPatientsCSCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* category = $NatlDirectoryHealthcareServiceCatCS#pharm   "Pharmacy"
* specialty = $NUCCProviderTaxonomy#3336C0003X "Community/Retail Pharmacy"
* providedBy = Reference(PharmChain)
* location[0] = Reference(PharmLoc1)
* location[1] = Reference(PharmLoc2)
* location[2] = Reference(PharmLoc3)
* location[3] = Reference(PharmLoc4)
* telecom.extension[via-intermediary].valueReference = Reference(PharmChain)
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = $NatlDirectoryDelvMthdCS#physical

Instance: PharmChainAffil1
InstanceOf: NatlDirExOrganizationAffiliation
Description: "Organization Affiliation for PharmChain (Retail)"
Usage: #example
* meta.profile =  Canonical(NatlDirExOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* network = Reference(AcmeofCTStdNet)
* participatingOrganization = Reference (PharmChain)
* healthcareService = Reference(PharmChainRetailService)
* location[0] = Reference(PharmLoc1)
* location[1] = Reference(PharmLoc2)
* code = $NatlDirectoryOrgAffRoleCS#pharmacy 
* specialty = $NUCCProviderTaxonomy#3336C0003X "Community/Retail Pharmacy"

Instance: PharmChainAffil2
InstanceOf: NatlDirExOrganizationAffiliation
Description: "Organization Affiliation for PharmChain (Compounding)"
Usage: #example
* meta.profile = Canonical(NatlDirExOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* network = Reference(AcmeofCTStdNet)
* specialty = $NUCCProviderTaxonomy#3336C0004X "Compounding Pharmacy"
* participatingOrganization = Reference (PharmChain)
* healthcareService = Reference(PharmChainCompService)
* location[0] = Reference(PharmLoc1)
* code = $NatlDirectoryOrgAffRoleCS#pharmacy 

Instance: PharmChainAffil3
InstanceOf: NatlDirExOrganizationAffiliation
Description: "Organization Affiliation for PharmChain (MailOrder)"
Usage: #example
* meta.profile = Canonical(NatlDirExOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* network = Reference(AcmeofCTStdNet)
* participatingOrganization = Reference (PharmChain)
* healthcareService = Reference(PharmChainMailService)
* code = $NatlDirectoryOrgAffRoleCS#pharmacy 
* specialty = $NUCCProviderTaxonomy#3336M0002X "Mail Order Pharmacy"


Instance: PharmChainCompService
InstanceOf: NatlDirExHealthCareService
Description: "Compound Pharmacy Service provided by PharmacyOrganization A"
Usage: #example
* meta.profile = Canonical(NatlDirExHealthCareService) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Compounding Pharmacy by OrgA"
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = $NatlDirectoryDelvMthdCS#physical
* category = $NatlDirectoryHealthcareServiceCatCS#pharm "Pharmacy"
* specialty = $NUCCProviderTaxonomy#3336C0004X "Compounding Pharmacy"
* specialty.text = "Compounding Pharmacy"
* providedBy = Reference(PharmChain)
* location[0] = Reference(PharmLoc1)
* telecom.extension[via-intermediary].valueReference = Reference(PharmLoc1)
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = $NatlDirectoryDelvMthdCS#physical


Instance: PharmChainMailService
InstanceOf: NatlDirExHealthCareService
Description: "Mail Order Pharmacy Service provided by PharmacyOrganization A"
Usage: #example
* meta.profile = Canonical(NatlDirExHealthCareService) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Mail Order Pharmacy by OrgA"
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = $NatlDirectoryDelvMthdCS#virtual
* extension[deliverymethod].extension[virtualModalities][0].valueCodeableConcept = $NatlDirectoryVirModalitiesCS#web
* extension[deliverymethod].extension[virtualModalities][1].valueCodeableConcept = $NatlDirectoryVirModalitiesCS#app 
* extension[deliverymethod].extension[virtualModalities][2].valueCodeableConcept = $NatlDirectoryVirModalitiesCS#tdd 
* extension[deliverymethod].extension[virtualModalities][3].valueCodeableConcept =  $NatlDirectoryVirModalitiesCS#phone 
* category = $NatlDirectoryHealthcareServiceCatCS#pharm "Pharmacy"
* specialty = $NUCCProviderTaxonomy#3336M0002X "Mail Order Pharmacy"
* providedBy = Reference(PharmChain)
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[1].system = #url
* telecom[1].value = "https://mailorderrx.com"
* telecom[1].rank = 1
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = $NatlDirectoryDelvMthdCS#physical


Instance: PharmLoc1
InstanceOf: NatlDirExLocation
Description: "Location of Pharmacy1 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(NatlDirExLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "OrgA CT Location 1"
* type = $V3RoleCode#OUTPHARM "outpatient pharmacy"
* managingOrganization = Reference(BigBox)
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = $NatlDirectoryAcceptPatientsCSCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* extension[accessibility][1].valueCodeableConcept = $NatlDirectoryAccessibilityCS#pubtrans
* extension[accessibility][0].valueCodeableConcept = $NatlDirectoryAccessibilityCS#adacomp
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
InstanceOf: NatlDirExLocation
Description: "Location of Pharmacy2 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(NatlDirExLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "OrgA CT Location 2"
* type = $V3RoleCode#OUTPHARM "outpatient pharmacy"
* managingOrganization = Reference(BigBox)
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = $NatlDirectoryAcceptPatientsCSCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* extension[accessibility][0].valueCodeableConcept = $NatlDirectoryAccessibilityCS#adacomp
* extension[accessibility][1].valueCodeableConcept = $NatlDirectoryAccessibilityCS#pubtrans
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
InstanceOf: NatlDirExLocation
Description: "Location of Pharmacy3 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(NatlDirExLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "OrgA MA Location 1"
* type = $V3RoleCode#OUTPHARM "outpatient pharmacy"
* managingOrganization = Reference(BigBox)
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = $NatlDirectoryAcceptPatientsCSCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* extension[accessibility][0].valueCodeableConcept = $NatlDirectoryAccessibilityCS#adacomp
* extension[accessibility][1].valueCodeableConcept = $NatlDirectoryAccessibilityCS#pubtrans
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
InstanceOf: NatlDirExLocation
Description: "Location of Pharmacy4 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(NatlDirExLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "OrgA MA Location 2"
* type = $V3RoleCode#OUTPHARM "outpatient pharmacy"
* managingOrganization = Reference(BigBox)
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = $NatlDirectoryAcceptPatientsCSCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* extension[accessibility][0].valueCodeableConcept = $NatlDirectoryAccessibilityCS#adacomp
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

File: repos/HL7_SLASH_fhir-directory-exchange/input/fsh/PractitionerExamples.fsh


Instance: Counselor
InstanceOf: NatlDirExPractitioner
Description: "Counselor Susie Smith"
Usage: #example
* meta.profile = Canonical(NatlDirExPractitioner)
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
* qualification[0].extension[practitioner-qualification].extension[status].valueCode = $NatlDirectoryQualStatusCS#active 
* qualification[0].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* communication[0].extension[communication-proficiency].valueCodeableConcept = $NatlDirectoryLangProfCS#30
* communication = $BCP47#ru 
* extension[rating].extension[ratingType].valueCodeableConcept = $USPSStateCS#IL 
* extension[rating].extension[ratingValue].valueString = "5"

Instance: JoeSmith
InstanceOf: NatlDirExPractitioner
Description: "Practitioner Dr Joe Smith"
Usage: #example
* meta.profile = Canonical(NatlDirExPractitioner)
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
* qualification[0].extension[practitioner-qualification].extension[status].valueCode = $NatlDirectoryQualStatusCS#active 
* qualification[0].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* qualification[1].code = $NUCCProviderTaxonomy#103TC1900X  "Counseling Psychologist"
* qualification[1].issuer.display = "American Board of Internal Medicine"
* qualification[1].code.text = "Board Certified Internal Medicine"
* qualification[1].extension[practitioner-qualification].extension[status].valueCode = $NatlDirectoryQualStatusCS#active 
* qualification[1].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* qualification[2].code = $NUCCProviderTaxonomy#207Q00000X "Family Medicine Physician"
* qualification[2].issuer.display = "American Board of Internal Medicine"
* qualification[2].code.text = "Board Certified Cardiovascular Disease"
* qualification[2].extension[practitioner-qualification].extension[status].valueCode = $NatlDirectoryQualStatusCS#active 
* qualification[2].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* communication = $BCP47#ru 

Instance: HansSolo
InstanceOf: NatlDirExPractitioner
Description: "Solo Practitioner Hans Solo"
Usage: #example
* meta.profile = Canonical(NatlDirExPractitioner)
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
* qualification[0].extension[practitioner-qualification].extension[status].valueCode = $NatlDirectoryQualStatusCS#active 
* qualification[0].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* qualification[1].code = $NUCCProviderTaxonomy#103TC1900X  "Counseling Psychologist"
* qualification[1].issuer.display = "American Board of Internal Medicine"
* qualification[1].code.text = "Board Certified Internal Medicine"
* qualification[1].extension[practitioner-qualification].extension[status].valueCode = $NatlDirectoryQualStatusCS#active 
* qualification[1].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* qualification[2].code = $NUCCProviderTaxonomy#207K00000X "Allergy & Immunology Physician"
* qualification[2].issuer.display = "American Board of Internal Medicine"
* qualification[2].code.text = "Board Certified Cardiovascular Disease"
* qualification[2].extension[practitioner-qualification].extension[status].valueCode = $NatlDirectoryQualStatusCS#active 
* qualification[2].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* communication[0].extension[communication-proficiency].valueCodeableConcept = $NatlDirectoryLangProfCS#30
* communication = $BCP47#ja 



Instance: HansSoloRole1
InstanceOf: NatlDirExPractitionerRole
Description: "Hans Solo is a solo practitioner"
Usage: #example
* meta.profile = Canonical(NatlDirExPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = $NatlDirEndpointQryPractitionerRoleCode#ph 
* practitioner = Reference(HansSolo)
* organization = Reference(HartfordOrthopedics)
* healthcareService = Reference(HansSoloService)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* location[0] = Reference(HansSoloClinic)
* specialty =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"

// specialty = internal medicine
// available M-F

Instance: HansSoloService
InstanceOf: NatlDirExHealthCareService
Description: "Hans Solo Services"
Usage: #example
* meta.profile = Canonical(NatlDirExHealthCareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = $NatlDirectoryHealthcareServiceDeliveryMthdCS#physical
* category = $NatlDirectoryHealthcareServiceCatCS#outpat 
* specialty = $NUCCProviderTaxonomy#207Q00000X "Family Medicine Physician"  
* location[0] = Reference(HansSoloClinic)

Instance: HansSoloClinic
InstanceOf: NatlDirExLocation
Description: "Location of Hans Solo's clinic"
Usage: #example
* meta.profile = Canonical(NatlDirExLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "OrgA CT Location 1"
* type = $V3RoleCode#OUTPHARM
* managingOrganization = Reference(BigBox)
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = $NatlDirectoryAcceptPatientsCSCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* extension[accessibility][1].valueCodeableConcept = $NatlDirectoryAccessibilityCS#pubtrans
* extension[accessibility][0].valueCodeableConcept = $NatlDirectoryAccessibilityCS#adacomp
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



Instance: CounselorRole1
InstanceOf: NatlDirExPractitionerRole
Description: "Susie  Smith is a counselor via Telemedicine"
Usage: #example
* meta.profile = Canonical(NatlDirExPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = $NatlDirectoryProvdrRoleCS#co "Counselor"
* practitioner = Reference(Counselor)
* organization = Reference(BurrClinic)
* healthcareService = Reference(VirtualCounselService)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* specialty =  $NUCCProviderTaxonomy#101YP2500X  "Professional Counselor"


Instance: VirtualCounselService
InstanceOf: NatlDirExHealthCareService
Description: "Virtual Counseling Service"
Usage: #example
* meta.profile = Canonical(NatlDirExHealthCareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US 
* active = true
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = $NatlDirectoryHealthcareServiceDeliveryMthdCS#virtual
* extension[deliverymethod].extension[virtualModalities][0].valueCodeableConcept = $NatlDirectoryVirModalitiesCS#web
* extension[deliverymethod].extension[virtualModalities][1].valueCodeableConcept = $NatlDirectoryVirModalitiesCS#app 
* extension[deliverymethod].extension[virtualModalities][2].valueCodeableConcept = $NatlDirectoryVirModalitiesCS#tdd 
* extension[deliverymethod].extension[virtualModalities][3].valueCodeableConcept =  $NatlDirectoryVirModalitiesCS#phone 
* category = $NatlDirectoryHealthcareServiceCatCS#prov "Medical Provider"
* specialty =  $NUCCProviderTaxonomy#103TC1900X  "Counseling Psychologist"

Instance: JoeSmithRole1
InstanceOf: NatlDirExPractitionerRole
Description: "Dr Smith moonlighting as ER Doc at Hartford Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirExPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = $NatlDirectoryProvdrRoleCS#ph 
* practitioner = Reference(JoeSmith)
* healthcareService = Reference(HospERService)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* location[0] = Reference(HospLoc1)
* specialty =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* organization = Reference(Hospital)
// specialty = internal medicine
// available M-F

Instance: JoeSmithRole2
InstanceOf: NatlDirExPractitionerRole
Description: "Dr Smith Internal Medicine at Burr Clinic"
Usage: #example
* meta.profile = Canonical(NatlDirExPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = $NatlDirectoryProvdrRoleCS#ph
// specialty = internal medicine
// Available:  Sat/Sun
* practitioner = Reference(JoeSmith)
* healthcareService = Reference(BurrClinicServices)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* location[0] = Reference(HospLoc2)
* specialty =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* organization = Reference(BurrClinic)

Instance: JoeSmithRole3
InstanceOf: NatlDirExPractitionerRole
Description: "Dr Smith Admitting Privileges at Hartford General"
Usage: #example
* meta.profile = Canonical(NatlDirExPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = $NatlDirectoryProvdrRoleCS#ap 
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* specialty[0] =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* specialty[1] = $NUCCProviderTaxonomy#207K00000X "Allergy & Immunology Physician"
* organization = Reference(Hospital)
* practitioner = Reference(JoeSmith)

Instance: AnonRole
InstanceOf: NatlDirExPractitionerRole
Description: "Practitioner role that doesn't refer to a specific practitioner"
Usage: #example
* meta.profile = Canonical(NatlDirExPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = $NatlDirectoryProvdrRoleCS#ph
* healthcareService = Reference(BurrClinicServices)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* location[0] = Reference(HospLoc2)
* specialty[0] =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* organization = Reference(CancerClinic)
* practitioner = Reference(HansSolo)

Instance: CancerClinicService
InstanceOf: NatlDirExHealthCareService
Description: "Cancer Clinic Services"
Usage: #example
* meta.profile = Canonical(NatlDirExHealthCareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = $NatlDirectoryHealthcareServiceDeliveryMthdCS#physical
* category = $NatlDirectoryHealthcareServiceCatCS#outpat
* providedBy = Reference(CancerClinic)
* specialty = $NUCCProviderTaxonomy#207RX0202X "Medical Oncology Physician"  
* location[0] = Reference(CancerClinicLoc)

Instance: CancerClinicLoc
InstanceOf: NatlDirExLocation
Description: "Location1 of Cancer Clinic"
Usage: #example
* meta.profile = Canonical(NatlDirExLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "Cancer Clinic"
* type = $V3RoleCode#HOSP 
* managingOrganization = Reference(CancerClinic)
* extension[accessibility][1].valueCodeableConcept = $NatlDirectoryAccessibilityCS#pubtrans
* extension[accessibility][0].valueCodeableConcept = $NatlDirectoryAccessibilityCS#adacomp
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
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
InstanceOf: NatlDirExOrganization
Description: "HartfordCancerClinicLLC"
Usage: #example
* meta.profile = Canonical(NatlDirExOrganization)
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
* type = $NatlDirectoryOrgTypeCS#fac "Facility"



---

File: repos/HL7_SLASH_fhir-directory-exchange/input/fsh/README.md

# pdex-NatlDir-fsh
Davinci PDEX NatlDir using FHIR Shorthand


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/fsh/RestrictionVerificationExamples.fsh

Instance: PatientConsent
InstanceOf: NatlDirExRestriction
Description: "Patient that gives consent"
Usage: #example 
* meta.profile = Canonical(NatlDirRestriction) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* status  = $ConsentCS#active
* scope = $NatlDirectoryConsentScopeCS#patient-privacy
* category = $loinc#59284-0 
* policyRule =  $ConsentPolicyCS#cric

Instance: ProviderAttestation
InstanceOf: NatlDirExValidation
Description: "Patient that gives consent"
Usage: #example
* meta.profile = Canonical(NatlDirEndpointQryVerification) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* need  = $needCS#none
* status = $verificationResultStatusCS#attested
* validationType = $verificationResultTypeCS#primary 
* statusDate = "2020-07-07T13:26:22.0314215+00:00"
* validationProcess = $NatlDirectoryValidationTypeCS#attester 
* target = Reference(JoeSmith)
* failureAction = $failureActionCS#warn
* attestation.who = Reference(JoeSmith)
* attestation.communicationMethod = $verificationresult-communication-methodCS#pull 
* attestation.date = "2020-07-07"

---

File: repos/HL7_SLASH_fhir-directory-exchange/input/fsh/searchParametrs.fsh

//Endpoint
Instance: Endpoint-connection-type
InstanceOf: SearchParameter
Usage: #definition
Title: "Search by Connection Type in Endpoints"
* status = #active
* code = #connectiontype
* name = "NatDirExNatlDirConnectiontype"
* description = "Accesses the  connection type of an Endpoint"
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-endpoint-connection-type"
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
* name = "NatDirExNatlDirEndpointQryIdentifier"
* description = "Accesses the  identifier of an Endpoint"
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-endpoint-identifier"
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
* name = "NatDirExNatlDirEndpointQryMimetype"
* description = "Accesses the  mime-type of an Endpoint"
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-endpoint-mime-type"
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
* name = "NatDirExNatlDirEndpointQryOrganization"
* description = "Accesses the  organization of an Endpoint"
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-endpoint-organization"
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
* name = "NatDirExNatlDirEndpointQryPayloadtype"
* description = "Accesses the  payload-type of an Endpoint"
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-endpoint-payload-type"
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
* name = "NatDirExNatlDirEndpointQryStatus"
* description = "Accesses the status of an Endpoint"
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-endpoint-status"
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
* name = "NatDirExNatlDirEndpointQryUsecaseStandard"
* description = "Accesses the usecase-standard of an Endpoint"
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-endpoint-usecase-standard"
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
* name = "NatDirExNatlDirEndpointQryUsecasetype"
* description = "Accesses the  usecase-type of an Endpoint"
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-endpoint-usecase-type"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-careteam-endpoint"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExcareTeamEndpointSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-careteam-location"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExcareTeamLocationSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-careteam-name"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExcareTeamNameSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-careteam-name"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExcareTeamOrganizationSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-careteam-name"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExcareTeamServiceSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-careteam-name"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExcareTeamCategorySearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-HealthcareService-service-category"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExHealthcareServiceCategorySearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-HealthcareService-coverage-area"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExHealthcareServiceCoverageAreaSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-HealthcareService-endpoint"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExHealthcareServiceCategorySearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-HealthcareService-location"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExHealthcareServiceLocationSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-HealthcareService-name"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExHealthcareServiceNameSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-HealthcareService-organization"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExHealthcareServiceOrganizationSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-HealthcareService-specialty"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExHealthcareServiceSpecialtySearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-HealthcareService-service-type"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExHealthcareServiceServicetypeSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Location-address"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExLocationAddressSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Location-endpoint"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExLocationEndpointSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Location-organization"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExLocationOrganizationSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Location-physicalType"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExLocationPhysicalTypeSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Location-partOf"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExLocationPartOfSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Location-type"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExLocationTypeSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Organization-type"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExOrganizationTypeSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Organization-address"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExOrganizationAddressSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Organization-endpoint"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExOrganizationEndpointSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Organization-identifier"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExOrganizationIdentifierSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Organization-name"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExOrganizationNameSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Organization-partOf"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExOrganizationPartOfSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-OrganizationAffiliation-endpoint"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExOrganizationAffiliationEndpointSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-OrganizationAffiliation-location"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExOrganizationAffiliationLocationSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-OrganizationAffiliation-network"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExOrganizationAffiliationNetworkSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-OrganizationAffiliation-participating-organization"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExOrganizationAffiliationParticipatingOrganizationfSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-OrganizationAffiliation-primary-organization"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExOrganizationAffiliationPrimaryOrganizationSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-OrganizationAffiliation-role"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExOrganizationAffiliationRoleSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-OrganizationAffiliation-service"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExOrganizationAffiliationServiceSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-OrganizationAffiliation-specialty"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExOrganizationAffiliationSpecialtySearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-practitioner-name"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExpractitionerNameSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-practitioner-family"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExpractitionerFamilySearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-practitioner-given"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExpractitionerGivenSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-practitioner-identifier"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExpractitionerIdentifierSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-practitioner-identifier-assigner"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExpractitionerIdentifierAssignerSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-practitioner-qualification-code"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExpractitionerQualificationCodeSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-practitioner-qualification-issuer"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExpractitionerQualificationIssuerSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-practitionerRole-endpoint"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExpractitionerRoleEndpointSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-practitionerRole-location"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExpractitionerRoleLocationSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-practitionerRole-network"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExpractitionerRoleNetworkSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-practitionerRole-organization"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExpractitionerRoleQrganizationSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-practitionerRole-practitioner"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExpractitionerRolePractitionerSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-practitionerRole-role"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExpractitionerRoleRoleSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-practitionerRole-service"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExpractitionerRoleServiceSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-practitionerRole-specialty"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExpractitionerRoleSpecialtySearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Network-coverage-area"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExNetworkCoverageAreaSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-Network-name"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExnameSpecialtySearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-InsurancePlan-coverage-area"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExInsurancePlanCoverageAreaSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-InsurancePlan-administrated-by"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExInsurancePlanAdministratedbySearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-InsurancePlan-coverage-benefit-type"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExInsurancePlanCoverageBenefittypeSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-InsurancePlan-coverage-network"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExInsurancePlanCoverageNetworkSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-InsurancePlan-identifier"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExInsurancePlanIdentifierSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-InsurancePlan-type"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExInsurancePlantypeSearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-InsurancePlan-specialty"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExInsurancePlanSpecialtySearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-InsurancePlan-owned-by"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExInsurancePlanOwnedBySearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-VerificationResult-attestation-who"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExVerificationResultAttestationWhoBySearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-VerificationResult-primarysource-who"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExVerificationResultPrimarysourceWhoBySearchParameter"
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
* url = "https://hl7.org/fhir/us/directory-exchange/SearchParameter-VerificationResult-target"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
* name = "NatDirExVerificationResultTargetbySearchParameter"
* status = #active
* description = "This SearchParameter enables query of VerificationResult by `target` with `mutlipleOr` enabled."
* code = #attestation-who
* base[0] = #VerificationResult
* type = #token
* multipleOr = true


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/fsh/ValueSets.fsh




---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/all-examples.md

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

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/bulk-data.md



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

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/capstatements.md

---
title: CapabilityStatements defined for this Implementation Guide
layout: default
active: capstatements
---
<!-- TOC  the css styling for this is \pages\assets\css\project.css under 'markdown-toc'-->

* Do not remove this line (it will not be displayed)
{:toc}

<!-- end TOC -->

{% include list-simple-capabilitystatements.xhtml %}

<br/>

<!--
```
Steps for adding this narrative to CapStatements  - if you don't want to generate it

1) Create narrative in markdown
2) View Page source in Browser and copy the html content and save as .xhtml file

3) Edit xhtml content  ( I use xml spy since can view in browser mode )

1) Change title

2)  Edit  or remove TOC  ( contains both client and server links)

3) Remove any relative links to build (e.g., xml / json views)  since these will break if not viewed inside of IG

4) Remove or replace any unsupported xhtml characters:  You can catch these using the w3 validator or by trying to view in browser
   e.g., replace ";&nbsp" with "&#160;"

4) Insert in CapabilityStatement.text.div as xhtml
    Make CapabilityStatement.text.status = "additional"

e.g.
 <text>
    <status value="additional"/>
    <div xmlns="http://www.w3.org/1999/xhtml">
...(inserted xhtml here)...
   </div>

save CapabilityStatement file

-->


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/careteam-alias-summary.md

#### Complete Summary of the Mandatory Requirements

This extension is optional. If used, it SHALL include a text value indicating the name of the alias.



---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/change-notes.md

---
title: Change Notes
layout: default
active: change notes
topofpage: true
sectionnumbering: true
F: http://build.fhir.org/
---

The Validated Healthcare Directory Implementation guide was developed under the [ONC Healthcare Directory Initiative (HcDir)](https://oncprojectracking.healthit.gov/wiki/display/TechLabSC/Healthcare+Directory). HcDir was a US initiative sponsored by the Office of the National Coordinator (ONC) and Federal Health Architecture (FHA) which aimed to create FHIR profiles for access to a national validated dataset of healthcare directory data.

This implementation guide was was initially developed under FHIR Release 3 (STU) and ported into FHIR Release 4 (STU), and considered the Provider Directory resources created under [The Argonaut Project](http://argonautwiki.hl7.org/index.php?title=Main_Page).

Changes Since the January 2018 for comment ballot:

* Inclusion of many guidance pages
* Refinement of profiles based on ballot feedback
* Alignment with R4 core updates
  * OrganizationRole -> OrganizationAffiliation
  * ProductPlan -> InsurancePlan
  * Location boundaries using R4 standard extension
* Inclusion of many missing valuesets
* Completion of unfinished definitions

A future iteration of this guide will align with the US Core R4 build, and provide tight bindings for US usage, along with the current international profile bindings.


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/conformance.md

## Validated Healthcare Directory Conformance Requirements
{:.no_toc}

This section outlines conformance requirements for the Validated Healthcare Directory and Client applications, identifying the specific profiles that need to be supported, the specific RESTful operations that need to be supported, and the search parameters that need to be supported. 

---

<!-- TOC  the css styling for this is \pages\assets\css\project.css under 'markdown-toc'-->
**Contents**

* Do not remove this line (it will not be displayed)
{:toc}

---

<!-- end TOC -->


### Conformance requirements for the Validated Healthcare Directory

1. FHIR Version: 4.0
1. Supported formats: xml, json
1. Published: Draft
1. Published by: Health Level Seven International the Patient Administration Workgroup and the HL7 US Realm Steering Committee.

This section describes the expected capabilities of the Validated Healthcare Directory actor that is responsible for providing responses to the queries submitted by the Validated Healthcare Directory Requestors. The complete list of FHIR profiles, RESTful operations, and search parameters supported by Validated Healthcare Directory are defined. 

#### Behavior

Description:

The Validated Healthcare Directory responder **SHALL**: 

1. Support the Validated Healthcare Directory resource profiles.
1. Implement the RESTful behavior according to the FHIR specification.
1. Return the following response classes:
   - (Status 200): successful operation
   - (Status 400): invalid parameter
   - (Status 401/4xx): unauthorized request
   - (Status 403): insufficient scope
   - (Status 404): unknown resource
   - (Status 410): deleted resource.
1. Support *json* resource formats for all Validated Healthcare Directory interactions.
1. Declare a CapabilityStatement identifying the list of profiles, operations, search parameter supported.

The Validated Healthcare Directory responder **SHOULD**:

1. Support *xml* resource formats for all Validated Healthcare Directory interactions.
1. Identify the Validated Healthcare Directory profiles supported as part of the FHIR `meta.profile` attribute for each instance.

#### Security:

The Validated Healthcare Directorys responder **SHALL**:

1. Implement the [security requirements](security.html) documented in the this IG.
1. A server has ensured that every API request includes a valid Authorization token, supplied via: `Authorization: Bearer {server-specific-token-here}`
1. A server has rejected any unauthorized requests by returning an `HTTP 401` Unauthorized response code.

#### Profile Interaction Summary:

1. All servers **SHALL** make available the [read](http://hl7.org/fhir/STU3/http.html#read) and [search](http://hl7.org/fhir/STU3/http.html#search) interactions for all the Profiles.
1. All servers **SHOULD** make available the [vread](http://hl7.org/fhir/STU3/http.html#vread) and [history-instance](http://hl7.org/fhir/STU3/http.html#history) interactions for all the Profiles.

#### Summary of Validated Healthcare Directory search criteria:

Specific server search capabilities are under analysis. 

#### Resource  Details:

{:.no_toc}

Supported Profiles:  Specific profile support requirements are under analysis.

<p></p>


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/downloads.md

---
title: Downloads
layout: default
active: downloads
---

### Package File

The following package file includes an NPM package file used by many of the FHIR tools.  It contains all the value sets, profiles, extensions, list of pages and urls in the IG, etc defined as part of the this version of the Implementation Guides. This file should be the first choice whenever generating any implementation artifacts since it contains all of the rules about what makes the profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply in order to make a conformant implementation. See the overview on validating [FHIR profiles and resources]({{site.data.fhir.path}}validation.html):

- [Package](package.tgz){::download="true"}

### Schematrons

Schematrons are also available for download and listed below:

<!-- ================================================ -->
<!--  use this line to include an autogenerated list of all examples from the remove it if you would like to hand generate it -->

{% include schematron-list-generator.md %}
<!-- ================================================ -->

### Examples

all the examples that are used in this Implementation Guide available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)

### Downloadable Copy of Entire Specification

A downloadable version of this IG is available so it can be hosted locally:

- [Downloadable Copy](full-ig.zip)


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/example-list-generator.md

{% for p in site.html_pages %}
{% unless p.name contains 'ttl' or p.name contains 'json' or  p.name contains 'xml' or  p.name contains 'definitions' or p.name contains 'mappings'%}
    {% assign title = p.name | remove: ".html" | remove: ".md" | split: '-' %}
    {% for e in site.example_types %}
      {% if title contains e %}
- [{% for word in title %}{{ word | capitalize }} {% endfor %}]({{ p.path }})
      {% endif %}
    {% endfor %}
  {% endunless %}
{% endfor %}


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/extensions.md

---
title: Extensions defined for the Validated Healthcare Directory Implementation Guide
layout: default
active: extensions
topofpage: true
sectionnumbering: true
F: http://build.fhir.org/
---


This page lists the [Extensions](http://hl7.org/fhir/STU3/extensibility.html) defined as part of the VhDir implementation Guide. A [registry of standard extensions](http://hl7.org/fhir/STU3/extensibility-registry.html) can be found in the FHIR specification and additional extensions may be registered on the HL7 FHIR registry at http://hl7.org/fhir/registry.

{% include list-simple-extensions.xhtml %}


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/general-guidance.md

## Background

Healthcare directories play a critical role in enabling identification of individual providers and service organizations, as well as characteristics about them, their relationships, and the means by which to access and exchange patient information among them electronically. Healthcare directories support a variety of use cases, including:

- Electronic endpoint discovery
- Referrals and transitions of care
- Health plan enrollment
- Provider selection
- Service selection
- Provider credentialing/privileging

Today, many health and social care organizations maintain directories, including providers, payers, health information exchange organizations (HIEs/HIOs), health information service providers (HISPs), social services organizations, government agencies, and credentialing organizations. However, despite their importance, health and social care directory activities remain scattered, uncoordinated, and are often not interoperable. As a result, the industry collectively spends significant time and resources registering and validating demographic information for individual and organizational providers for purposes such as information exchange, referrals, licensure, credentialing, certification, and payment.

Providers and service organizations often have to submit and manage information about themselves and relationships to a variety of stakeholders. In the US healthcare sector, providers often contract with ten or more health plans, and are required to regularly submit similar information to each plan for inclusion in a provider network and directory. Likewise, provider credentialing and hospital privileging processes require similar documentation. The Council for Affordable Quality Healthcare [estimated](https://www.caqh.org/explorations/white-paper-defining-provider-data-dilemma) that just maintaining provider databases costs the US healthcare industry at least $2 billion annually.

Due to the high cost of acquiring and maintaining provider, organization and service information, existing healthcare directories often contain information that is inaccurate, out of date, or not validated.

## Healthcare Directory Scope 

This implementation guide uses the term ‘healthcare directory’ because it encompasses all individuals and entities that provide services which may impact an individual’s health and well-being. We did not limit the definition of a directory to include only those individuals/entities that are licensed to practice medicine and/or bill for healthcare services. Rather, the directory is intended to include data about community/social service entities and non-licensed administrative/support staff, among others.

Patient/caregiver information, however, is considered out of scope.

## ONC/FHA Healthcare Directory Effort

On April 5th and 6th, 2016, the Office of the National Coordinator for Health Information Technology (ONC) and the Federal Health Architecture (FHA) jointly hosted a Provider Directory Workshop to convene public and private stakeholders to review challenges, share successes, and generate new ideas around provider directory standards and solutions. Although participants described different use cases for healthcare directories, they agreed that healthcare data quality is a persistent challenge across the industry.

To address concerns about data quality, reduce administrative burden, and improve consumer satisfaction, ONC and FHA launched a new healthcare directory effort in July 2016. The project sought to: (1) define the architecture of a central source of validated healthcare directory data, and (2) develop a Fast Healthcare Interoperability Resources (FHIR) Implementation Guide, describing the exchange of information between a central source of validated healthcare directory data and local environments (e.g.. provider organizations, payers, HIEs, social service directories).

Such a central source would include a broad set of provider, organizational, and service data to support a variety of healthcare directory use cases. Data would be validated against primary sources (post office, state licensing boards, ...) and made available to distributed access and workflow directories through a national FHIR-based exchange standard. Instead of submitting the same information to each local directory, providers and organizations would only have to attest to the majority of their information to the central source.

For more information on the ONC and FHA effort see the [ONC Techlab `Healthcare` Directory Project](https://oncprojectracking.healthit.gov/wiki/display/TechLabSC/Healthcare+Directory)

## Relation to the Da Vinci PlanNet Directory 

The [PDEX Payer Network Implementation Guide (PDex PlanNet IG)](http://hl7.org/fhir/us/davinci-pdex-plan-net/STU1/index.html) is based conceptually on the [Validated Healthcare Directory Implementation Guide (VHDir IG)](http://hl7.org/fhir/uv/vhdir/2018Sep/index.html), an international standard. The VHDir IG is based on [FHIR Version 4.0](http://hl7.org/fhir/R4/index.html). It was developed in cooperation with the [Office of the National Coordinator for Health Information Technology (ONC)](http://www.healthit.gov/newsroom/about-onc) and the [Federal Health Architecture (FHA)](https://www.healthit.gov/policy-researchers-implementers/federal-health-architecture-fha) with guidance from HL7 International, the Patient Administration Workgroup, and the HL7 US Realm Steering Committee.

The PDEX Payer Network IG defines a FHIR interface to a health insurer’s insurance plans, their associated networks, and the organizations and providers that participate in these networks. Publication of this data through a standard FHIR-based API enables third parties to develop applications, through which consumers and providers can query the participants in a payer’s network that may provide services that address their health care needs. 

## FHIR At Scale Taskforce Effort

The purpose of the FHIR at Scale Taskforce (*FAST*) is to augment and support recent HL7® Fast Healthcare Interoperability Resources (FHIR®) efforts focused on ecosystem issues that, if mitigated, can accelerate adoption. A number of regulatory and technical barriers, as well as required core capabilities, have been identified related to Directory, Versioning, and Scale. This Implementation Guide includes the work from FAST with regard to a national endpoint directory. FAST Directory work is focused on defining the issues related to making electronic endpoints available .  Since these endpoints are associated with providers, organizations, and services, prior work on VHDir and PlanNet was used as the foundation data model.  The FHIR endpoint resource provides the structure on which this national directory effort can make endpoints discoverable in the context of the specific providers, organizations and services and  their relationships. 

For more information on the FAST Directory effort see the FAST Accelerator pages on Confluence.

## Use Cases 

To determine which resources to profile, extensions to create, etc. we reviewed a number of use cases supported by healthcare directories today:

- Basic Information Exchange
  - A1. Enable electronic exchange (e.g. discovery of electronic endpoints such as IHE/EHR endpoints, FHIR server URLs, Direct addresses) - enables the electronic exchange of health information by supporting the ability to discover electronic service information including electronic endpoints or electronic addresses
  - A2. Find an individual and/or organization (even if no electronic endpoint is available) - enables users to find contact and other identifying information about healthcare organizations and individual healthcare providers
- Patient/Payer/Service focused
  - B1. Find provider/service accessibility information (specialty, office hours, languages spoken, taking patients) - enables individuals and consumers to find contact and other accessibility information for individual healthcare providers and/or health and social service organizations
  - B2. Relationship between provider and insurance plan (insurance accepted) or plan and provider (network) - enables individual healthcare providers, organizations, and payers to discover the relationships between providers, organizations, and payers, as well as additional details about the relationships and entities involved
  - B3. Plan selection and enrollment - enables individuals and consumers to find information about health plans for the purposes of enrollment, including information about the health care providers and organizations that participate in a particular payer network, plan, or product and other information that can help the consumer make an informed choice about choosing the plan that best meets their health care needs
  - B4. Claims management (adjudication, prior authorization, payment) - enables entities to discover information about providers to support claims processing, adjudication, prior authorization, and other reimbursement/payment related activities
- Care Delivery / Value Based Care
  - C1. Provider relationship with a patient (e.g. for alerts) - supports discovery of provider-patient relationships to enable cross-organization workflows and processes for care coordination
  - C2. Provider relationship with other providers in the context of a patient (e.g. care team communications) - enables individual providers/organizations/care team members to identify each other, communicate and exchange information, expand the care team (e.g. referrals), and coordinate care within and across organizational boundaries
- Other
  - D1. Provider credentialing - supports the process of establishing and evaluating the qualifications of a health care provider by verifying the provider’s experience, expertise, interests, and willingness to provide medical care
  - D2. Quality or regulatory reporting (e.g. aggregate data, plan networks) - enables providers and health plans to consolidate and standardize the electronic exchange of quality-related data and performance results, in addition to helping providers use their own information consistently to "report once"
  - D3. Detection of fraud; inappropriate approval of services and/or payment for services - enables discovery of provider information for evaluating or responding to suspected cases of fraud or improper approval/payment for healthcare services

For each use case, we described the general information requirements necessary to support the use case. We then specified the general information requirements as discrete data elements using FHIR resources. Therefore, this implementation guide covers a broad set of data elements supporting a range of use cases that may reasonably be collected, validated, and exchanged from a central source of validated provider data.

## Resource Relationships

Note: the following diagrams provide a high-level view of the relationships between resources used in this IG. They do not necessarily reflect all of the relationships/references between resources.

### Practitioner

A practitioner is a person who is directly or indirectly involved in the provisioning of healthcare.

### Practitioner Role

PractionerRole describes the relationship between a practitioner and an organization. A practitioner provides services to the organization at a location. Practitioners also participate in healthcare provider insurance networks through their role at an organization.

**Figure 1: PractionerRole**

[![Diagram1.jpg](diagram1.jpg)](diagram1.jpg)

### Organization Affiliation

Similar to PractitionerRole, OrganizationAffiliation describes relationships between organizations. For example: 1) the relationship between an organization and an association it is a member of (e.g. hospitals in a hospital association), 2) an organization that provides services to another organization, such as an organization contracted to provide mental health care for another organization as part of a healthcare provider insurance network, and 3) distinct organizations forming a partnership to provide services (e.g. a cancer center).

**Figure 2: OrganizationAffiliation**

[![Diagram2.jpg](diagram2.jpg)](diagram2.jpg)

### Network / Insurance Plan

A network is a group of practitioners and organizations that provide healthcare services for individuals enrolled in a health insurance product/plan (typically on behalf of a payer).

**Figure 3: Network / Insurance Plan**

[![Diagram3.jpg](diagram3.jpg)](diagram3.jpg)

---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/general-guidanceOld.md

---
title: General Guidance and Background Information
layout: default
active: guidance
topofpage: true
sectionnumbering: true
F: http://build.fhir.org/
---

<!-- TOC  the css styling for this is \pages\assets\css\project.css under 'markdown-toc'-->
**Contents**

* Do not remove this line (it will not be displayed)
{:toc}

---

<!-- end TOC -->

##  Background

Healthcare directories play a critical role in enabling identification of individual providers and provider organizations, as well as characteristics about them, their relationships, and the means by which to access and exchange health information among them electronically. Healthcare directories support a variety of use cases, including:

* Electronic endpoint discovery
* Referrals and transitions of care
* Health plan enrollment
* Provider selection
* Provider credentialing/privileging

Today, many healthcare organizations maintain directories, including providers, payers, health information exchange organizations (HIEs/HIOs), health information service providers (HISPs), government agencies, and credentialing organizations. However, despite their importance, healthcare directory activities remain scattered, uncoordinated, and are often not interoperable. As a result, the healthcare industry collectively spends significant time and resources registering and validating demographic information for individual and organizational providers for purposes such as licensure, credentialing, certification, and payment.

Providers often have to submit and manage information about themselves and their places of employment to a variety of stakeholders. In the US, providers often contract with ten or more health plans, and are required to regularly submit similar information to each plan for inclusion in a provider directory. Likewise, provider credentialing and hospital privileging processes require similar documentation. The Council for Affordable Quality Healthcare [has estimated](https://www.caqh.org/explorations/white-paper-defining-provider-data-dilemma) that maintaining provider databases costs the US healthcare industry at least $2 billion annually.

Due to the high cost of acquiring and maintaining provider information and keeping it current, existing healthcare directories often contain information that is inaccurate, out of date, or not validated.

## Healthcare Directory vs. Provider Directory

This implementation guide uses the term ‘healthcare directory’ instead of ‘provider directory’ because it encompasses all individuals and entities that provide services which may impact an individual’s health and well-being. We did not limit the definition of a directory to include only those individuals/entities that are licensed to practice medicine and/or bill for healthcare services. Rather, a validated healthcare directory may include data about community/social service entities and non-licensed administrative/support staff, among others.

Patient/caregiver information, however, is considered out of scope for a VHDir.

## ONC/FHA Healthcare Directory Effort

On April 5th and 6th, 2016, the Office of the National Coordinator for Health Information Technology (ONC) and the Federal Health Architecture (FHA) jointly hosted a Provider Directory Workshop to convene public and private stakeholders to review challenges, share successes, and generate new ideas around provider directory standards and solutions. Although participants described different use cases for healthcare directories, they agreed that provider data quality is a persistent challenge across the industry. 

To address concerns about data quality, reduce administrative burden, and improve consumer satisfaction, ONC and FHA launched a new healthcare directory effort in July 2016. The project sought to: (1) define the architecture of a central source of validated healthcare directory data, and (2) develop a Fast Healthcare Interoperability Resources (FHIR) Implementation Guide describing the exchange of information between a central source of validated healthcare directory data and local environments (e.g. provider organizations, payers, HIEs).

Such a central source would include a broad set of provider data to support a variety of healthcare directory use cases. Data would be validated against primary sources (e.g. state licensing boards for licensure information) and available to local environments through a national FHIR-based exchange standard. Instead of submitting the same information to each payer and provider organization they worked with, providers would only have to attest to the majority of their information to the central source.

For more information on the ONC and FHA effort see the [ONC Techlab Healthcare Directory Project](https://oncprojectracking.healthit.gov/wiki/display/TechLabSC/Healthcare+Directory)

## Relation to US Core and other IGs

This implementation guide was written for an international audience. We expect different jurisdictions considering implementing a VHDir will design their implementations in accordance with jurisdictional requirements, such as national profiles/IGs. In the United States, for example, we expect a VHDir would align with an R4 version of the US Core IG once it becomes available.

## The Validated Healthcare Directory Data Model

To determine which resources to profile, extensions to create, etc. we reviewed a number of use cases supported by healthcare directories today:

* Basic Information Exchange
  * A1. Enable electronic exchange (e.g. discovery of electronic endpoints such as IHE/EHR endpoints, FHIR server URLs, Direct addresses) - enables the electronic exchange of health information by supporting the ability to discover electronic service information including electronic endpoints or electronic addresses
  * A2. Find an individual and/or organization (even if no electronic endpoint is available) - enables users to find  contact and other identifying information about healthcare organizations and individual healthcare providers
* Patient/Payer focused	
  * B1. Find provider accessibility information (specialty, office hours, languages spoken, taking patients) - enables individuals and consumers to find contact and other accessibility information for individual healthcare providers and/or healthcare organizations
  * B2. Relationship between provider and insurance plan (insurance accepted) or plan and provider (network) - enables individual healthcare providers, organizations, and payers to discover the relationships between providers, organizations, and payers, as well as additional details about the relationships and entities involved
  * B3. Plan selection and enrollment - enables individuals and consumers to find information about health plans for the purposes of enrollment, including information about the  health care providers and organizations that participate in a particular payer network, plan, or product and other information that can help the consumer make an informed choice about choosing the plan that best meets their health care needs
  * B4. Claims management (adjudication, prior authorization, payment) - enables entities to discover information about providers to support claims processing, adjudication, prior authorization, and other reimbursement/payment related activities
* Care Delivery / Value Based Care	
  * C1. Provider relationship with a patient (e.g. for alerts) - supports discovery of provider-patient relationships to enable cross-organization workflows and processes for care coordination
  * C2. Provider relationship with other providers in context of a patient (e.g. care team communications) - enables individual providers/organizations/care team members to identify each other, communicate and exchange information, expand the care team (e.g. referrals), and coordinate care within and across organizational boundaries
* Other	
  * D1. Provider credentialing -  supports the process of establishing and evaluating the qualifications of a health care provider by verifying the provider’s experience, expertise, interests, and willingness to provide medical care
  * D2. Quality or regulatory reporting (e.g. aggregate data, plan networks) - enables providers and health plans to consolidate and standardize the electronic exchange of quality-related data and performance results in addition to helping providers use their own information consistently to "report once"
  * D3. Detection of fraud; inappropriate approval of services and/or payment for services - enables discovery of provider information for evaluating or responding to suspected cases of fraud or improper approval/payment for healthcare services

For each use case, we described the general information requirements necessary to support the use case. We then specified the general information requirements as discrete data elements using FHIR resources. Therefore, this implementation guide covers a broad set of data elements supporting a range of use cases that may reasonably be collected, validated, and exchanged from a central source of validated provider data.

## Overview of Validated Healthcare Directory - Resource Relationships

Note: the following diagrams provide a high-level view of the relationships between resources used in this IG. They do not necessarily reflect all of the relationships/references between resources.

### Practitioner

A practitioner is a person who is directly or indirectly involved in the provisioning of healthcare.

### Practitioner Role

PractionerRole describes the relationship between a practitioner and an organization. A practitioner provides services to the organization at a location.  Practitioners also participate in healthcare provider insurance networks through their role at an organization.

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 1: PractionerRole </strong></figcaption>
  <img src="diagram1.jpg" class="figure-img img-responsive img-rounded center-block" alt="Diagram1.jpg" />
</figure>

### Organization Affiliation

Similar to PractitionerRole, OrganizationAffiliation describes relationships between organizations. For example: 1) the relationship between an organization and an association it is a member of (e.g. hospitals in a hospital association),  2) an organization that provides services to another organization, such as an organization contracted to provide mental health care for another organization as part of a healthcare provider insurance network, and 3) distinct organizations forming a partnership to provide services (e.g. a cancer center).

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 2: OrganizationAffiliation </strong></figcaption>
  <img src="diagram2.jpg" class="figure-img img-responsive img-rounded center-block" alt="Diagram2.jpg" />
</figure>

### Network / Insurance Plan

A network is a group of practitioners and organizations that provide healthcare services for individuals enrolled in a health insurance product/plan (typically on behalf of a payer).

<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 3: Network / Insurance Plan </strong></figcaption>
  <img src="diagram3.jpg" class="figure-img img-responsive img-rounded center-block" alt="Diagram3.jpg" />
</figure>


------------------------------------------------------------------------


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/guidance.md

---
title: Guidance
layout: default
active: guidance
topofpage: true
---

- 2.1 - [General Guidance](general-guidance.html)
- 2.2 - [Technical Guidance](technical-guidance.html)
- 2.3 - [Bulk Data and Subscriptions](bulk-data.html)


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/history.md

---
title: Validated Healthcare Directory Implementation Guide
layout: default
active: history
topofpage: true
sectionnumbering: true
F: http://build.fhir.org/
---

This captures the base rules for all FHIR implementation in USA. The following versions of the Validated Healthcare Directory Implementation Guide are been published:

* [Draft](index.html): Working Draft Version


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/index.md

---
title: National Directory Implementation Guide HomePage
layout: default
active: home
topofpage: true
sectionnumbering: true
F: http://build.fhir.org/
---

## Introduction

><span style="color:red">**Alert:**
FAST is in the process of combining the three National Directory IGs into a single IG (National Directory for Healthcare Providers and Services -- NDH) based on feedback from the community. The combined IG is located at: **http://build.fhir.org/ig/HL7/fhir-us-ndh/branches/master/index.html**. While useful information may be found in this IG, please use the combined IG as the basis for the National Directory / NDH IG standard. </span>

---

The National Healthcare Directory Implementation Guide  is based on [FHIR Version 4.0](http://build.fhir.org/). It was developed in cooperation with the [Office of the National Coordinator for Health Information Technology (ONC)](http://www.healthit.gov/newsroom/about-onc) and [Federal Health Architecture (FHA)](https://www.healthit.gov/policy-researchers-implementers/federal-health-architecture-fha) with guidance from HL7 International, the Patient Administration Workgroup, and the HL7 US Realm Steering Committee.

It describes the architectural considerations for attesting to, validating, and exchanging data from a central source of validated provider data, as well as a RESTful FHIR API for accessing data from a VHDir.

Although we developed this guide from the conceptual starting point of a national source of validated provider data, we recognize that implementers may have different business needs, contexts, or use cases. Therefore, we have strived to make this guide as broadly applicable as possible. Every implementation may not use all of the content in this guide. It serves as a “floor” for the exchange of validated provider data, while describing additional data elements and capabilities that support more robust implementations.

Likewise, we provide general guidance about the technical architecture and capabilities of a central source of validated provider data, but are not prescriptive about what an implementation must include.  




## National Directory Profiles

The list of National Directory Profiles is shown below.  Each profile defines the minimum mandatory elements, extensions and terminology requirements that **MUST** be present. For each profile, requirements and guidance are given in a simple narrative summary. A formal hierarchical table that presents a [logical view] of the content in both a differential and snapshot view is also provided along with references to appropriate terminologies and examples.  In addition each profile has a "Quick Start" section which is intended as an implementer friendly overview of the required search and read operations.

{% include list-simple-profiles.xhtml %}


## National Directory Conformance Requirements

The [Capability Statements Section](capstatements.html) outlines conformance requirements for National Directory Servers and Client applications, identifying the specific profiles, RESTful operations and search parameters that need to be supported.

Note: The individual National Directory profiles identify the structural constraints, terminology bindings and invariants, however, implementers must refer to the conformance requirements for details on the RESTful operations, specific profiles and the search parameters applicable to each of the National Directory actors.

----

Primary Authors: Dan Chaput, Alex Kontur, Brian Postlethwaite, Bob Dieterle, Sean Mahoney

[Argonaut]: http://argonautwiki.hl7.org/index.php?title=Main_Page
[National Directory Security]: US Core-security.html
[Office of the National Coordinator for Health Information Technology (ONC)]: http://www.healthit.gov/newsroom/about-onc
[Data Access Framework]: http://wiki.siframework.org/Data+Access+Framework+Homepage
[profiles]: http://hl7.org/fhir/STU3/profiling.html
[logical view]: http://hl7.org/fhir/STU3/formats.html#table
[StructureDefinitions]: http://hl7.org/fhir/STU3/structuredefinition.html
[Value sets]: http://hl7.org/fhir/STU3/valueset.html
[CodeSystem]: http://hl7.org/fhir/STU3/codesystem.html
[ConceptMap]: http://hl7.org/fhir/STU3/conceptmap.html
[NamingSystem]: http://hl7.org/fhir/STU3/namingsystem.html
[FHIR Conformance Rules]: http://hl7.org/fhir/STU3/CapabilityStatement-rules.html
[dataAbsentReason]: http://hl7.org/fhir/STU3/extension-data-absent-reason.html
[FHIR Terminology]: http://hl7.org/fhir/STU3/terminologies.html
[FHIR RESTful API]: http://hl7.org/fhir/STU3/http.html
[HTTP]: http://hl7.org/fhir/STU3/http.html
[FHIR Data Types]: http://hl7.org/fhir/STU3/datatypes.html
[FHIR Search]: http://hl7.org/fhir/STU3/search.html
[FHIR Resource]: http://hl7.org/fhir/STU3/formats.html
[2015 Edition Common Clinical Data Set]: guidance.html#edition-common-clinical-data-set


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/link-list.md

[code]: {{site.data.fhir.path}}/datatypes.html#code "FHIR code definition"
[string]: {{site.data.fhir.path}}/datatypes.html#string "FHIR string definition"
[dateTime]: {{site.data.fhir.path}}/datatypes.html#dateTime "FHIR dateTime definition"
[instant]: {{site.data.fhir.path}}/datatypes.html#instant "FHIR instant definition"
[date]: {{site.data.fhir.path}}/datatypes.html#date "FHIR date definition"
[Quantity]: {{site.data.fhir.path}}/datatypes.html#quantity "FHIR Quantity definition"
[Range]: {{site.data.fhir.path}}/datatypes.html#range "FHIR Range definition"
[Ratio]: {{site.data.fhir.path}}/datatypes.html#ratio "FHIR Ratio definition"
[Timing]: {{site.data.fhir.path}}/datatypes.html#timing "FHIR Timing definition"
[Medication]:{{site.data.fhir.path}}/medication.html "FHIR Medication definition"
[MedicationRequest]:{{site.data.fhir.path}}/medicationrequest.html "FHIR MedicationRequest definition"
[MedicationStatement]:{{site.data.fhir.path}}/medicationstatement.html "FHIR MedicationStatement definition"
[MedicationDispense]:{{site.data.fhir.path}}/medicationdispense.html "FHIR MedicationDispense definition"
[Observation]:{{site.data.fhir.path}}/observation.html "FHIR Observation definition"
[MedicationDispense]:{{site.data.fhir.path}}/MedicationDispense.html "FHIR MedicationDispense definition"
[Location]:{{site.data.fhir.path}}/location.html "FHIR Location definition"
[todo]: todo.html "still under construction"
[Pattern]: {{site.data.fhir.path}}/#ElementDefinition.pattern_x_ "FHIR pattern definition"
[required]: {{site.data.fhir.path}}/terminologies.html#required
[extensible]: {{site.data.fhir.path}}/terminologies.html#extensible
[Smart on FHIR Launch]: (http://docs.smarthealthit.org/authorization/) "SMART App Authorization Guide"
 [FHIR search API]: ({{site.data.fhir.path}}/search.html) "FHIR search API documentation"
 [DocumentReference]: ({{site.data.fhir.path}}/documentreference.html) "FHIR DocumentReference Resource documentation"
 [Binary]: ({{site.data.fhir.path}}/binary.html) "FHIR Binary Resource documentation"
[FHIR API for Binary data]: ({{site.data.fhir.path}}/binary.html#rest) "FServing Binary Resources using the RESTful API"
[Postman Collection]: :https://www.getpostman.com/collections/0a54cd0197a5f2fc98d4
[contained]: ({{site.data.fhir.path}}/references#contained.html) "FHIR contained resource documentation"
[General Guidance](general-guidance.html)
[Technical Guidance](technical-guidance.html)
[Bulk Data and Subscriptions](bulk-data.html)


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/logo.md

<!--
<a id="your-logo" no-external="true" href="http://www.hl7.org">
<img height="50" alt="visit the hl7 website" width="42" src="assets/images/hl7-logo.png"/>
</a>

your logo here

[![visit our website](assets/images/org_logo.png)](your web site.html)
{: .img-responsive #org_logo}

can only resize using html  or css ;-(

-->


<a no-external="true" href="http://www.hl7.org">
<img alt="visit our website" class="img-responsive project-logo" src="org_logo.png"/>
</a>


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/profiles.md

---
title: Resource Profiles and Extensions
layout: default
active: profiles
topofpage: true
sectionnumbering: true
F: http://build.fhir.org/
---

## Profiles
The following profiles set the minimum expectations to search and retrieve validated directory data associated with healthcare entities:

  {%  include list-simple-profiles.xhtml %}

## Extensions
The following extensions are used in the above profiles:

  {%  include list-simple-extensions.xhtml %}


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/schematron-list-generator.md

{% for p in site.static_files %}
  {% if p.name contains '.sch' %}
  {% assign title = p.name | remove: '.sch' | split: '-' %}
- [{% for word in title  %}{{ word | capitalize }} {% endfor %}]({{ p.path | remove: '/' }})
  {% endif %}
{% endfor %}


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/searchparameters.md

---
title: Operations and Search Parameters
layout: default
active: searchparameters
topofpage: true
sectionnumbering: true
F: http://build.fhir.org/
---

The following search parameters have been defined for the Validated Healthcare Directory Implementation Guide.  For more information on the [FHIR RESTful search api](http://hl7.org/fhir/search.html) and the standard [Search Param Registry](http://hl7.org/fhir/searchparameter-registry.html) see the FHIR specification.

<!-- Operations

{% raw %}
  {% include list-simple-operationdefinitions.xhtml %}
{% endraw %}

-->

Search Parameter

  {%  include list-simple-searchparameters.xhtml %}




---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/security.md

---
title: General Security Considerations
layout: default
active: security
topofpage: true
sectionnumbering: true
F: http://build.fhir.org/
---
 
The following are the security considerations that implementers should follow:
* All implementers of FHIR servers and clients should pay attention to [FHIR Security](http://hl7.org/fhir/security.html) considerations. 
* In addition to the [FHIR Security](http://hl7.org/fhir/security.html) considerations, the VhDir requests need to contain specific information about National Healthcare Directory client identity and organization information. 
* Providing this information using FHIR Search APIs is very cumbersome and is not necessary. This kind of information can be collected by the VhDir Authorization Server during application registration and avoid repeating the information on each request. 
* These mechanisms are outlined in detail in the [SMART Backend Services Authorization Guide](http://docs.smarthealthit.org/authorization/backend-services/). 


The following are security conformance requirements for VhDir actors:
* National Healthcare Directory actors *SHALL* use the [SMART Backend Services Authorization Guide] to collect the necessary requestor information appropriate for making the VhDir data request. 
* National Healthcare Directory actors *SHALL* reference a single time source to establish a common time base for security auditing across the system.
* National Healthcare Directory actors *SHALL* use the [AuditEvent] resource to capture audit logs of the various transactions. VhDir actors *SHOULD* capture as many AuditEvent resource data elements as appropriate based on requirements of FHIR [Audit Logging] and local policies.
* National Healthcare Directory transactions *SHALL* use TLS version 1.2 or higher to secure the transmission channel unless the transmission is taking place over a more secure network.(Using TLS even within a secured network environment is still encouraged to provide defense in depth.) US Federal systems implementing VhDir actors *SHOULD* conform with FIPS PUB 140-2.
* National Healthcare Directory actors *SHALL* conform to [FHIR Communications] requirements. 
* National Healthcare Directory actors *SHOULD* retain Provenance information using the [FHIR Provenance] resource. 


The following are security conformance requirements for the overall program/system:

* National Healthcare Directory implementers *SHOULD* establish a risk analysis and management regime that conforms with HIPAA security regulatory requirements. In addition, implementers in the US Federal systems *SHOULD* conform with the risk management and mitigation requirements defined in NIST 800 series documents. This *SHOULD* include security category assignment in accordance with NIST 800-60 vol. 2 Appendix D.14. The coordination of risk management and the related security and privacy controls – policies, administrative practices, and technical controls – *SHOULD* be defined in the Business Associate Agreements.
* The time service used for auditing *SHOULD* be documented in the Business Associate Agreements.



  [FHIR Communications]: http://hl7.org/fhir/STU3/security.html#http
  [Smart On FHIR]: http://fhir-docs.smarthealthit.org/argonaut-dev/authorization/backend-services/
  [FHIR Security Labels]: http://hl7.org/fhir/STU3/security-labels.html
  [General Security Considerations]: #general-security-considerations
  [FHIR Provenance]: http://hl7.org/fhir/STU3/provenance.html
  [FHIR Digital Signatures]: http://hl7.org/fhir/STU3/security.html#digital%20signatures
  [SMART Backend Services Authorization Guide]:http://docs.smarthealthit.org/authorization/backend-services/

  [security considerations]: http://hl7.org/fhir/STU3/security.html
  [Communications]: http://hl7.org/fhir/STU3/security.html#http
  [Authentication]: http://hl7.org/fhir/STU3/security.html#authentication
  [Authorization/Access Control]: http://hl7.org/fhir/STU3/security.html#authorization/access%20control
  [Audit Logging]: http://hl7.org/fhir/STU3/security.html#audit%20logging
  [Digital Signatures]: http://hl7.org/fhir/STU3/security.html#digital%20signatures
  [Security Labels]: http://hl7.org/fhir/STU3/security-labels.html
  [Narrative]: http://hl7.org/fhir/STU3/security.html#narrative
  [AuditEvent]: http://hl7.org/fhir/STU3/auditevent.html
  [Audit Logging]: http://hl7.org/fhir/STU3/security.html#audit
  [Consent]: http://hl7.org/fhir/STU3/consent.html


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/technical-guidance.md

## National Directory Concept Diagram

This diagram depicts the high-level conceptual design of a central source of national directory data.

**Figure 1: National Directory Concept Diagram**  

<figure class="figure">
  <img src="National Directory Drawing 2022-02-04.jpg" class="figure-img img-responsive img-rounded center-block" alt="conceptDiagram" />
</figure>

In this diagram, RESTful FHIR APIs facilitate the movement of data into and out of a verified healthcare directory at different points, including:

- Attestation: Individuals and organizations (via an authorized representative) attest to information about themselves, their relationships, and services for inclusion in the verified national directory. See [below](https://github.com/HL7/directory-exchange/blob/master/input/pagecontent/technical-guidance.md#attestation) for more information about attestation.
- Validation: An implementer of the verified national directory must validate attested data against the underlying standards defined in the National Directory Exchange IG.  See [below](https://github.com/HL7/directory-exchange/blob/master/input/pagecontent/technical-guidance.md#validation)  for more information about attestation.
- Verification: An implementer of the verified healthcare directory (not shown in the diagram) may verify  attested data against primary sources, thereby verifying the truthfulness and accuracy of the attested data. For example, an implementer might verify a provider’s medical license against records maintained by a state licensure board. Verification may occur initially, when attested data is first submitted, and/or on a regular basis as determined by the National Directory implementer and/or applicable laws, regulations, or policies. See [below](https://github.com/HL7/directory-exchange/blob/master/input/pagecontent/technical-guidance.md#verification) for more information about verification.
- Exchange: A verified natinal directory would make validated/verified directory data available to local workflow environments to support various business needs. Local workflow environments include, but are not limited to, payer organizations, provider organizations, health information exchanges (HIEs), health information service providers (HISPs), Community Information Exchanges (CIEs), government agencies, and any other entities that maintain a healthcare directory and/or have a need for verified provider data. See the National Directory Exchange IG  for more information about exchange.
- Query: A distributed or network directory may choose to be compliant with one or more of the Query Conformance statements to indicate the standard Queries and response information provided to their users as defined in the National Directory Query IG.

**Figure 2: Relationship Between Implementation Guides**  
<figure class="figure">
  <img src="Inheritance.jpg" class="figure-img img-responsive img-rounded center-block" alt="IG Relationships" />
</figure>


**Figure 3: Profile and Extension Inheritance Between Implementation Guides**  
<figure class="figure">
  <img src="IGRelationships.jpg" class="figure-img img-responsive img-rounded center-block" alt="IG Relationships" />
</figure>

## Exchange 

The primary focus of this implementation guide is a RESTful API for obtaining data from a Verified National Directory. The exchange API only supports a one-directional flow of information from a Verified National Directory into local environments (i.e. HTTP GETs).

Verified National Directory IG conformant implementation:

- SHALL support profiles: Organization, Practitioner, Location, PractitionerRole, Endpoint, Validation, HealthcareService,  Restriction, OrganizationAffiliation
- SHOULD support profiles: CareTeam, Network, InsurancePlan

In profiles, the "Must Support" flag indicates if data exists for the specific property, then it must be represented as defined in the Verified National Directory IG. If the element is not available from a system, this is not required, and may be omitted.

Conceptually, this guide was written to describe the flow of information from a central source of verified healthcare directory data to local workflow environments. We envisioned a national verified national directory which functioned as a “source of truth” for a broad set of provider data available to support local business needs and use cases. A local environment could readily obtain all or a subset of the data it needed from the verified national directory and have confidence that the information was accurate. If necessary, a local environment could supplement verified national directory data with additional data sourced and/or maintained locally. For example, a local environment doing provider credentialing might rely on verified healthcare directory for demographic information about a provider (e.g. name, address, educational history, license information, etc.), but also ask the provider for supplementary information such as their work history, liability insurance coverage, or military experience. Likewise, we envisioned that a verified healthcare directory would primarily share information with other systems, rather than individual end users or the general public.

The content of this guide, however, does not preclude it from being implemented for smaller “local” directories, or accessed by the general public. Generally, conformance requirements throughout the guide are less tightly constrained so as to support a wider variety of possible implementations. We did not want to set strict requirements about the overall design, technical architecture, capabilities, etc. of a verified national directory that might prevent adoption of this standard. For example, although we would expect a verified national directory to gather and share information about healthcare provider insurance networks and health plans, implementations are not required to do so to be considered conformant.

The verified national directory may contain a large amount of data that will not be relevant to all use cases or local needs. Therefore, the exchange API defines a number of search parameters to enable users to express the scope of a subset of data they care to access. For example, implementations are required to support searches for Organizations based on address, endpoint, identifier, name/alias, and relationship to a parent organization. In general, parameters for selecting resources based on a business identifier, status, type, or relationship (i.e. reference) are required for all implementations. Most parameters may be used in combination with other parameters and support more “advanced” capabilities like modifiers and chains.

The verified national directory exchange API currently supports more than one method for accessing directory data.  First, a real-time GET of a set of information. However, stakeholders may need other capabilities to support different business needs. For instance, stakeholders may need access to large amounts of data in a single session to either initially seed or refresh their local data repositories. Depending on the scope of data a stakeholder is trying to access, a real-time pull may not be the most effective method for acquiring large data sets. The FHIR specification provides support for [asynchronous interactions](http://build.fhir.org/async.html), using the Bulk Data standard, which may be necessary for implementers to facilitate processing of large amounts of data.

Verified national directory implementation should also consider providing capabilities for users to subscribe to receive updates about the data they care about. A subscribe/publish model can help alleviate the need for stakeholders to periodically query for new data and/or changes to data they have already obtained.Restricted Content 

We envision a verified national directory as a public or semi-public utility and make a significant portion of the information openly available. However, a verified national directory may include sensitive data that is not publicly accessible or accessible to every verified healthcare directory stakeholder. For example, an implementer might not want to make data about military personnel, emergency responders/volunteers, or domestic violence shelters available to everyone with access to the verified national directory, or to users in a local environment who have access to data obtained from a verified national directory.

We expect that a verified national directory operational policies and legal agreements will clearly delineate which data stakeholders can access, and if necessary, require stakeholders to protect the privacy/confidentiality of sensitive information in downstream local environments. As such, we have included a Restriction profile based on the Consent resource to convey any restrictions associated with a data element, collection of elements, or resource obtained from a verified national directory.

## Redundancy & Ambiguity Across Resources 

Although FHIR resources define discrete business objects, related resources may have similar data elements. For example, the HealthcareService, PractitionerRole, and Location resources all include data elements describing availability. In some circumstances, values in these common data elements may not align across resources, potentially creating ambiguity. For example, in this IG, a Location resource might indicate that the location no longer accepts patients. However, a PractitionerRole resource for a provider working at the location might indicate that the provider is accepting patients (e.g., by referral only). In some cases, these inconsistencies are valid representations of the complexities of healthcare systems. In others, data might have been entered in error, outdated, or otherwise inaccurate.

The FHIR specification does not provide guidance on managing common elements across resources to reduce redundancy or ambiguity. Likewise, this implementation guide does not provide additional guidance. Implementations should consider further constraining profiles, creating invariants, or requiring data sources (e.g., attesters) to contribute data in a consistent format. Some resources include elements for describing exceptions, such as the AvailabilityExceptions field on HealthcareService, Location, and PractitionerRole. Additionally, the verification processes may help discover and address inconsistencies across resources.

---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/terminology.md

---
title: Terminology defined for the Validated Healthcare Directory Implementation Guide
layout: default
active: terminology
topofpage: true
sectionnumbering: true
F: http://build.fhir.org/
---

This page lists the ValueSets, CodeSystems, and ConceptMaps defined as part of the Validated Healthcare Directory implementation Guide. For more information on using codes in resources, see the <!-- >[guidance section](guidance.html#using-codes-in-vhdir-profiles) as well as in --> the [FHIR specification](http://hl7.org/fhir/STU3/terminologies.html).

## Value Sets

{% include list-simple-valuesets.xhtml %}

<p/><p/>

## Code Systems

See the [FHIR terminology section](http://hl7.org/fhir/STU3/terminologies-systems.html) for a complete discussion on code systems and a list of codes system names used in FHIR. The following additional names (URIs) have been identified for this implementation guide,   If a URI is listed here, it **SHALL** be used in the Validated Healthcare Directory profiles in preference to any other code system name.

**Code systems published in this IG** - Includes Validated Healthcare Directory defined code systems and externally defined code systems. 

{% include list-simple-codesystems.xhtml %}

<p/><p/>

## ConceptMaps defined as part of the Validated Healthcare Directory Implementation Guide

{% include list-simple-conceptmaps.xhtml %}


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/pagecontent/todo.md

---
title: Implemenation Guide Todo List
layout: default
active: todo
---

     ...todo...


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/tmpfsh/tmp/InsuranceNetworkExamples.fsh




Instance: AcmeofCTStdNet
InstanceOf: NatlDirNetwork
Description: "Acme of CT Standard Network"
Usage: #example
* meta.profile = Canonical(NatlDirNetwork) 
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
InstanceOf: NatlDirNetwork
Description: "Acme of CT Premium Premium Network"
Usage: #example
* meta.profile = Canonical(NatlDirNetwork) 
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
InstanceOf: NatlDirOrganization
Description: "Payer Organization"
Usage: #example
* meta.profile = Canonical(NatlDirOrganization) 
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
InstanceOf: NatlDirInsurancePlan
Description: "Acme of CT QHP Gold Plan"
Usage: #example
* meta.profile = Canonical(NatlDirInsurancePlan) 
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
InstanceOf: NatlDirInsurancePlan
Description: "Acme of CT QHP Bronze Plan"
Usage: #example
* meta.profile = Canonical(NatlDirInsurancePlan) 
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
InstanceOf: NatlDirLocation
Description: "State of CT Area"
Usage: #example
* meta.profile = Canonical(NatlDirLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "State of CT Area"
* address.state = "CT"
* extension[region].valueAttachment.contentType = #application/json
* extension[region].valueAttachment.title = "GeoJSON Outline of the State of Connecticut"
* extension[region].valueAttachment.data  = "eyAidHlwZSI6ICJGZWF0dXJlIiwgInByb3BlcnRpZXMiOiB7ICJHRU9fSUQiOiAiMDQwMDAwMFVTMDkiLCAiU1RBVEUiOiAiMDkiLCAiTkFNRSI6ICJDb25uZWN0aWN1dCIsICJMU0FEIjogIiIsICJDRU5TVVNBUkVBIjogNDg0Mi4zNTUwMDAgfSwgImdlb21ldHJ5IjogeyAidHlwZSI6ICJNdWx0aVBvbHlnb24iLCAiY29vcmRpbmF0ZXMiOiBbIFsgWyBbIC03MS44NTk1NzAsIDQxLjMyMjM5OSBdLCBbIC03MS44NjgyMzUsIDQxLjMzMDk0MSBdLCBbIC03MS44ODYzMDIsIDQxLjMzNjQxMCBdLCBbIC03MS45MTY3MTAsIDQxLjMzMjIxNyBdLCBbIC03MS45MjIwOTIsIDQxLjMzNDUxOCBdLCBbIC03MS45MjMyODIsIDQxLjMzNTExMyBdLCBbIC03MS45MzYyODQsIDQxLjMzNzk1OSBdLCBbIC03MS45NDU2NTIsIDQxLjMzNzc5OSBdLCBbIC03MS45NTY3NDcsIDQxLjMyOTg3MSBdLCBbIC03MS45NzA5NTUsIDQxLjMyNDUyNiBdLCBbIC03MS45Nzk0NDcsIDQxLjMyOTk4NyBdLCBbIC03MS45ODIxOTQsIDQxLjMyOTg2MSBdLCBbIC03MS45ODgxNTMsIDQxLjMyMDU3NyBdLCBbIC03Mi4wMDAyOTMsIDQxLjMxOTIzMiBdLCBbIC03Mi4wMDUxNDMsIDQxLjMwNjY4NyBdLCBbIC03Mi4wMTA4MzgsIDQxLjMwNzAzMyBdLCBbIC03Mi4wMjE4OTgsIDQxLjMxNjgzOCBdLCBbIC03Mi4wODQ0ODcsIDQxLjMxOTYzNCBdLCBbIC03Mi4wOTQ0NDMsIDQxLjMxNDE2NCBdLCBbIC03Mi4wOTk4MjAsIDQxLjMwNjk5OCBdLCBbIC03Mi4xMTE4MjAsIDQxLjI5OTA5OCBdLCBbIC03Mi4xMzQyMjEsIDQxLjI5OTM5OCBdLCBbIC03Mi4xNjE1ODAsIDQxLjMxMDI2MiBdLCBbIC03Mi4xNzM5MjIsIDQxLjMxNzU5NyBdLCBbIC03Mi4xNzc2MjIsIDQxLjMyMjQ5NyBdLCBbIC03Mi4xODQxMjIsIDQxLjMyMzk5NyBdLCBbIC03Mi4xOTEwMjIsIDQxLjMyMzE5NyBdLCBbIC03Mi4yMDE0MjIsIDQxLjMxNTY5NyBdLCBbIC03Mi4yMDMwMjIsIDQxLjMxMzE5NyBdLCBbIC03Mi4yMDQwMjIsIDQxLjI5OTA5NyBdLCBbIC03Mi4yMDE0MDAsIDQxLjI4ODQ3MCBdLCBbIC03Mi4yMDUxMDksIDQxLjI4NTE4NyBdLCBbIC03Mi4yMDk5OTIsIDQxLjI4NjA2NSBdLCBbIC03Mi4yMTI5MjQsIDQxLjI5MTM2NSBdLCBbIC03Mi4yMjUyNzYsIDQxLjI5OTA0NyBdLCBbIC03Mi4yMzU1MzEsIDQxLjMwMDQxMyBdLCBbIC03Mi4yNDgxNjEsIDQxLjI5OTQ4OCBdLCBbIC03Mi4yNTE4OTUsIDQxLjI5ODYyMCBdLCBbIC03Mi4yNTA1MTUsIDQxLjI5NDM4NiBdLCBbIC03Mi4yNTEzMjMsIDQxLjI4OTk5NyBdLCBbIC03Mi4yNjE0ODcsIDQxLjI4MjkyNiBdLCBbIC03Mi4zMTc3NjAsIDQxLjI3Nzc4MiBdLCBbIC03Mi4zMjc1OTUsIDQxLjI3ODQ2MCBdLCBbIC03Mi4zMzM4OTQsIDQxLjI4MjkxNiBdLCBbIC03Mi4zNDg2NDMsIDQxLjI3NzQ0NiBdLCBbIC03Mi4zNDgwNjgsIDQxLjI2OTY5OCBdLCBbIC03Mi4zODY2MjksIDQxLjI2MTc5OCBdLCBbIC03Mi4zOTg2ODgsIDQxLjI3ODE3MiBdLCBbIC03Mi40MDU5MzAsIDQxLjI3ODM5OCBdLCBbIC03Mi40NTE5MjUsIDQxLjI3ODg4NSBdLCBbIC03Mi40NzI1MzksIDQxLjI3MDEwMyBdLCBbIC03Mi40ODU2OTMsIDQxLjI3MDg4MSBdLCBbIC03Mi40OTk1MzQsIDQxLjI2NTg2NiBdLCBbIC03Mi41MDY2MzQsIDQxLjI2MDA5OSBdLCBbIC03Mi41MTg2NjAsIDQxLjI2MTI1MyBdLCBbIC03Mi41MjEzMTIsIDQxLjI2NTYwMCBdLCBbIC03Mi41Mjk0MTYsIDQxLjI2NDQyMSBdLCBbIC03Mi41MzMyNDcsIDQxLjI2MjY5MCBdLCBbIC03Mi41MzY3NDYsIDQxLjI1NjIwNyBdLCBbIC03Mi41NDcyMzUsIDQxLjI1MDQ5OSBdLCBbIC03Mi41NzExMzYsIDQxLjI2ODA5OCBdLCBbIC03Mi41ODMzMzYsIDQxLjI3MTY5OCBdLCBbIC03Mi41OTgwMzYsIDQxLjI2ODY5OCBdLCBbIC03Mi42MTcyMzcsIDQxLjI3MTk5OCBdLCBbIC03Mi42NDE1MzgsIDQxLjI2Njk5OCBdLCBbIC03Mi42NTM4MzgsIDQxLjI2NTg5NyBdLCBbIC03Mi42NjI4MzgsIDQxLjI2OTE5NyBdLCBbIC03Mi42NzIzMzksIDQxLjI2Njk5NyBdLCBbIC03Mi42ODQ5MzksIDQxLjI1NzU5NyBdLCBbIC03Mi42ODU1MzksIDQxLjI1MTI5NyBdLCBbIC03Mi42OTA0MzksIDQxLjI0NjY5NyBdLCBbIC03Mi42OTQ3NDQsIDQxLjI0NDk3MCBdLCBbIC03Mi43MTA1OTUsIDQxLjI0NDQ4MCBdLCBbIC03Mi43MTM2NzQsIDQxLjI0OTAwNyBdLCBbIC03Mi43MTEyMDgsIDQxLjI1MTAxOCBdLCBbIC03Mi43MTI0NjAsIDQxLjI1NDE2NyBdLCBbIC03Mi43MjI0MzksIDQxLjI1OTEzOCBdLCBbIC03Mi43MzI4MTMsIDQxLjI1NDcyNyBdLCBbIC03Mi43NTQ0NDQsIDQxLjI2NjkxMyBdLCBbIC03Mi43NTc0NzcsIDQxLjI2NjkxMyBdLCBbIC03Mi43ODYxNDIsIDQxLjI2NDc5NiBdLCBbIC03Mi44MTg3MzcsIDQxLjI1MjI0NCBdLCBbIC03Mi44MTkzNzIsIDQxLjI1NDA2MSBdLCBbIC03Mi44MjY4ODMsIDQxLjI1Njc1NSBdLCBbIC03Mi44NDc3NjcsIDQxLjI1NjY5MCBdLCBbIC03Mi44NTAyMTAsIDQxLjI1NTU0NCBdLCBbIC03Mi44NTQwNTUsIDQxLjI0Nzc0MCBdLCBbIC03Mi44NjEzNDQsIDQxLjI0NTI5NyBdLCBbIC03Mi44ODE0NDUsIDQxLjI0MjU5NyBdLCBbIC03Mi44OTU0NDUsIDQxLjI0MzY5NyBdLCBbIC03Mi45MDQzNDUsIDQxLjI0NzI5NyBdLCBbIC03Mi45MDUyNDUsIDQxLjI0ODI5NyBdLCBbIC03Mi45MDMwNDUsIDQxLjI1Mjc5NyBdLCBbIC03Mi44OTQ3NDUsIDQxLjI1NjE5NyBdLCBbIC03Mi44OTM4NDUsIDQxLjI1OTg5NyBdLCBbIC03Mi45MDgyMDAsIDQxLjI4MjkzMiBdLCBbIC03Mi45MTY4MjcsIDQxLjI4MjAzMyBdLCBbIC03Mi45MjAwNjIsIDQxLjI4MDA1NiBdLCBbIC03Mi45MjA4NDYsIDQxLjI2ODg5NyBdLCBbIC03Mi45MzU2NDYsIDQxLjI1ODQ5NyBdLCBbIC03Mi45NjIwNDcsIDQxLjI1MTU5NyBdLCBbIC03Mi45ODYyNDcsIDQxLjIzMzQ5NyBdLCBbIC03Mi45OTc5NDgsIDQxLjIyMjY5NyBdLCBbIC03My4wMDc1NDgsIDQxLjIxMDE5NyBdLCBbIC03My4wMTQ5NDgsIDQxLjIwNDI5NyBdLCBbIC03My4wMjAxNDksIDQxLjIwNDA5NyBdLCBbIC03My4wMjA0NDksIDQxLjIwNjM5NyBdLCBbIC03My4wMjI1NDksIDQxLjIwNzE5NyBdLCBbIC03My4wNTA2NTAsIDQxLjIxMDE5NyBdLCBbIC03My4wNTkzNTAsIDQxLjIwNjY5NyBdLCBbIC03My4wNzk0NTAsIDQxLjE5NDAxNSBdLCBbIC03My4xMDU0OTMsIDQxLjE3MjE5NCBdLCBbIC03My4xMDc5ODcsIDQxLjE2ODczOCBdLCBbIC03My4xMTAzNTIsIDQxLjE1OTY5NyBdLCBbIC03My4xMDk5NTIsIDQxLjE1Njk5NyBdLCBbIC03My4xMDgzNTIsIDQxLjE1MzcxOCBdLCBbIC03My4xMTEwNTIsIDQxLjE1MDc5NyBdLCBbIC03My4xMzAyNTMsIDQxLjE0Njc5NyBdLCBbIC03My4xNzAwNzQsIDQxLjE2MDUzMiBdLCBbIC03My4xNzA3MDEsIDQxLjE2NDk0NSBdLCBbIC03My4xNzc3NzQsIDQxLjE2NjY5NyBdLCBbIC03My4yMDI2NTYsIDQxLjE1ODA5NiBdLCBbIC03My4yMjgyOTUsIDQxLjE0MjYwMiBdLCBbIC03My4yMzUwNTgsIDQxLjE0Mzk5NiBdLCBbIC03My4yNDc5NTgsIDQxLjEyNjM5NiBdLCBbIC03My4yNjIzNTgsIDQxLjExNzQ5NiBdLCBbIC03My4yODY3NTksIDQxLjEyNzg5NiBdLCBbIC03My4yOTYzNTksIDQxLjEyNTY5NiBdLCBbIC03My4zMTE4NjAsIDQxLjExNjI5NiBdLCBbIC03My4zMzA2NjAsIDQxLjEwOTk5NiBdLCBbIC03My4zNzIyOTYsIDQxLjEwNDAyMCBdLCBbIC03My4zOTIxNjIsIDQxLjA4NzY5NiBdLCBbIC03My40MDAxNTQsIDQxLjA4NjI5OSBdLCBbIC03My40MTM2NzAsIDQxLjA3MzI1OCBdLCBbIC03My40MzUwNjMsIDQxLjA1NjY5NiBdLCBbIC03My40NTAzNjQsIDQxLjA1NzA5NiBdLCBbIC03My40NjgyMzksIDQxLjA1MTM0NyBdLCBbIC03My40NzczNjQsIDQxLjAzNTk5NyBdLCBbIC03My40OTMzMjcsIDQxLjA0ODE3MyBdLCBbIC03My41MTY5MDMsIDQxLjAzODczOCBdLCBbIC03My41MTY3NjYsIDQxLjAyOTQ5NyBdLCBbIC03My41MjI2NjYsIDQxLjAxOTI5NyBdLCBbIC03My41Mjg4NjYsIDQxLjAxNjM5NyBdLCBbIC03My41MzExNjksIDQxLjAyMTkxOSBdLCBbIC03My41MzAxODksIDQxLjAyODc3NiBdLCBbIC03My41MzI3ODYsIDQxLjAzMTY3MCBdLCBbIC03My41MzUzMzgsIDQxLjAzMTkyMCBdLCBbIC03My41NTE0OTQsIDQxLjAyNDMzNiBdLCBbIC03My41NjE5NjgsIDQxLjAxNjc5NyBdLCBbIC03My41Njc2NjgsIDQxLjAxMDg5NyBdLCBbIC03My41NzAwNjgsIDQxLjAwMTU5NyBdLCBbIC03My41ODM5NjgsIDQxLjAwMDg5NyBdLCBbIC03My41ODQ5ODgsIDQxLjAxMDUzNyBdLCBbIC03My41OTU2OTksIDQxLjAxNTk5NSBdLCBbIC03My42MDM5NTIsIDQxLjAxNTA1NCBdLCBbIC03My42NDM0NzgsIDQxLjAwMjE3MSBdLCBbIC03My42NTExNzUsIDQwLjk5NTIyOSBdLCBbIC03My42NTczMzYsIDQwLjk4NTE3MSBdLCBbIC03My42NTk2NzEsIDQwLjk4NzkwOSBdLCBbIC03My42NTg3NzIsIDQwLjk5MzQ5NyBdLCBbIC03My42NTkzNzIsIDQwLjk5OTQ5NyBdLCBbIC03My42NTU1NzEsIDQxLjAwNzY5NyBdLCBbIC03My42NTQ2NzEsIDQxLjAxMTY5NyBdLCBbIC03My42NTUzNzEsIDQxLjAxMjc5NyBdLCBbIC03My42NjI2NzIsIDQxLjAyMDQ5NyBdLCBbIC03My42NzA0NzIsIDQxLjAzMDA5NyBdLCBbIC03My42Nzk5NzMsIDQxLjA0MTc5NyBdLCBbIC03My42ODcxNzMsIDQxLjA1MDY5NyBdLCBbIC03My42OTQyNzMsIDQxLjA1OTI5NiBdLCBbIC03My43MTY4NzUsIDQxLjA4NzU5NiBdLCBbIC03My43MjI1NzUsIDQxLjA5MzU5NiBdLCBbIC03My43Mjc3NzUsIDQxLjEwMDY5NiBdLCBbIC03My42Mzk2NzIsIDQxLjE0MTQ5NSBdLCBbIC03My42MzIxNTMsIDQxLjE0NDkyMSBdLCBbIC03My41NjQ5NDEsIDQxLjE3NTE3MCBdLCBbIC03My41MTQ2MTcsIDQxLjE5ODQzNCBdLCBbIC03My41MDk0ODcsIDQxLjIwMDgxNCBdLCBbIC03My40ODI3MDksIDQxLjIxMjc2MCBdLCBbIC03My41MTgzODQsIDQxLjI1NjcxOSBdLCBbIC03My41NTA5NjEsIDQxLjI5NTQyMiBdLCBbIC03My41NDg5MjksIDQxLjMwNzU5OCBdLCBbIC03My41NDk1NzQsIDQxLjMxNTkzMSBdLCBbIC03My41NDg5NzMsIDQxLjMyNjI5NyBdLCBbIC03My41NDQ3MjgsIDQxLjM2NjM3NSBdLCBbIC03My41NDM0MjUsIDQxLjM3NjYyMiBdLCBbIC03My41NDExNjksIDQxLjQwNTk5NCBdLCBbIC03My41Mzc2NzMsIDQxLjQzMzkwNSBdLCBbIC03My41Mzc0NjksIDQxLjQzNTg5MCBdLCBbIC03My41MzY5NjksIDQxLjQ0MTA5NCBdLCBbIC03My41MzYwNjcsIDQxLjQ1MTMzMSBdLCBbIC03My41MzU5ODYsIDQxLjQ1MzA2MCBdLCBbIC03My41MzU4ODUsIDQxLjQ1NTIzNiBdLCBbIC03My41MzU4NTcsIDQxLjQ1NTcwOSBdLCBbIC03My41MzU3NjksIDQxLjQ1NzE1OSBdLCBbIC03My41MzQzNjksIDQxLjQ3NTg5NCBdLCBbIC03My41MzQyNjksIDQxLjQ3NjM5NCBdLCBbIC03My41MzQyNjksIDQxLjQ3NjkxMSBdLCBbIC03My41MzQxNTAsIDQxLjQ3ODA2MCBdLCBbIC03My41MzQwNTUsIDQxLjQ3ODk2OCBdLCBbIC03My41MzM5NjksIDQxLjQ3OTY5MyBdLCBbIC03My41MzAwNjcsIDQxLjUyNzE5NCBdLCBbIC03My41MjEwNDEsIDQxLjYxOTc3MyBdLCBbIC03My41MjAwMTcsIDQxLjY0MTE5NyBdLCBbIC03My41MTY3ODUsIDQxLjY4NzU4MSBdLCBbIC03My41MTE5MjEsIDQxLjc0MDk0MSBdLCBbIC03My41MTA5NjEsIDQxLjc1ODc0OSBdLCBbIC03My41MDUwMDgsIDQxLjgyMzc3MyBdLCBbIC03My41MDQ5NDQsIDQxLjgyNDI4NSBdLCBbIC03My41MDE5ODQsIDQxLjg1ODcxNyBdLCBbIC03My40OTgzMDQsIDQxLjg5MjUwOCBdLCBbIC03My40OTY1MjcsIDQxLjkyMjM4MCBdLCBbIC03My40OTI5NzUsIDQxLjk1ODUyNCBdLCBbIC03My40ODk2MTUsIDQyLjAwMDA5MiBdLCBbIC03My40ODczMTQsIDQyLjA0OTYzOCBdLCBbIC03My40MzI4MTIsIDQyLjA1MDU4NyBdLCBbIC03My4yOTQ0MjAsIDQyLjA0Njk4NCBdLCBbIC03My4yOTMwOTcsIDQyLjA0Njk0MCBdLCBbIC03My4yMzEwNTYsIDQyLjA0NDk0NSBdLCBbIC03My4yMjk3OTgsIDQyLjA0NDg3NyBdLCBbIC03My4wNTMyNTQsIDQyLjAzOTg2MSBdLCBbIC03Mi45OTk1NDksIDQyLjAzODY1MyBdLCBbIC03Mi44NjM3MzMsIDQyLjAzNzcxMCBdLCBbIC03Mi44NjM2MTksIDQyLjAzNzcwOSBdLCBbIC03Mi44NDcxNDIsIDQyLjAzNjg5NCBdLCBbIC03Mi44MTM1NDEsIDQyLjAzNjQ5NCBdLCBbIC03Mi44MTY3NDEsIDQxLjk5NzU5NSBdLCBbIC03Mi43NjY3MzksIDQyLjAwMjk5NSBdLCBbIC03Mi43NjYxMzksIDQyLjAwNzY5NSBdLCBbIC03Mi43NjMyNjUsIDQyLjAwOTc0MiBdLCBbIC03Mi43NjMyMzgsIDQyLjAxMjc5NSBdLCBbIC03Mi43NjEyMzgsIDQyLjAxNDU5NSBdLCBbIC03Mi43NTk3MzgsIDQyLjAxNjk5NSBdLCBbIC03Mi43NjEzNTQsIDQyLjAxODE4MyBdLCBbIC03Mi43NjIzMTAsIDQyLjAxOTc3NSBdLCBbIC03Mi43NjIxNTEsIDQyLjAyMTUyNyBdLCBbIC03Mi43NjA1NTgsIDQyLjAyMTg0NiBdLCBbIC03Mi43NTgxNTEsIDQyLjAyMDg2NSBdLCBbIC03Mi43NTc0NjcsIDQyLjAyMDk0NyBdLCBbIC03Mi43NTQwMzgsIDQyLjAyNTM5NSBdLCBbIC03Mi43NTE3MzgsIDQyLjAzMDE5NSBdLCBbIC03Mi43NTM1MzgsIDQyLjAzMjA5NSBdLCBbIC03Mi43NTc1MzgsIDQyLjAzMzI5NSBdLCBbIC03Mi43NTU4MzgsIDQyLjAzNjE5NSBdLCBbIC03Mi42OTU5MjcsIDQyLjAzNjc4OCBdLCBbIC03Mi42NDMxMzQsIDQyLjAzMjM5NSBdLCBbIC03Mi42MDc5MzMsIDQyLjAzMDc5NSBdLCBbIC03Mi42MDY5MzMsIDQyLjAyNDk5NSBdLCBbIC03Mi41OTAyMzMsIDQyLjAyNDY5NSBdLCBbIC03Mi41ODIzMzIsIDQyLjAyNDY5NSBdLCBbIC03Mi41NzMyMzEsIDQyLjAzMDE0MSBdLCBbIC03Mi41MjgxMzEsIDQyLjAzNDI5NSBdLCBbIC03Mi40NTY2ODAsIDQyLjAzMzk5OSBdLCBbIC03Mi4zMTcxNDgsIDQyLjAzMTkwNyBdLCBbIC03Mi4yNDk1MjMsIDQyLjAzMTYyNiBdLCBbIC03Mi4xMzU2ODcsIDQyLjAzMDI0NSBdLCBbIC03Mi4wNjM0OTYsIDQyLjAyNzM0NyBdLCBbIC03MS45ODczMjYsIDQyLjAyNjg4MCBdLCBbIC03MS44OTA3ODAsIDQyLjAyNDM2OCBdLCBbIC03MS44MDA2NTAsIDQyLjAyMzU2OSBdLCBbIC03MS43OTkyNDIsIDQyLjAwODA2NSBdLCBbIC03MS43OTc5MjIsIDQxLjkzNTM5NSBdLCBbIC03MS43OTQxNjEsIDQxLjg0MTEwMSBdLCBbIC03MS43OTQxNjEsIDQxLjg0MDE0MSBdLCBbIC03MS43OTI3ODYsIDQxLjgwODY3MCBdLCBbIC03MS43OTI3NjcsIDQxLjgwNzAwMSBdLCBbIC03MS43OTEwNjIsIDQxLjc3MDI3MyBdLCBbIC03MS43ODk2NzgsIDQxLjcyNDczNCBdLCBbIC03MS43ODY5OTQsIDQxLjY1NTk5MiBdLCBbIC03MS43ODkzNTYsIDQxLjU5NjkxMCBdLCBbIC03MS43OTc2ODMsIDQxLjQxNjcwOSBdLCBbIC03MS44MTgzOTAsIDQxLjQxOTU5OSBdLCBbIC03MS44Mzk2NDksIDQxLjQxMjExOSBdLCBbIC03MS44NDI1NjMsIDQxLjQwOTg1NSBdLCBbIC03MS44NDM0NzIsIDQxLjQwNTgzMCBdLCBbIC03MS44NDIxMzEsIDQxLjM5NTM1OSBdLCBbIC03MS44MzM0NDMsIDQxLjM4NDUyNCBdLCBbIC03MS44MzE2MTMsIDQxLjM3MDg5OSBdLCBbIC03MS44Mzc3MzgsIDQxLjM2MzUyOSBdLCBbIC03MS44MzU5NTEsIDQxLjM1MzkzNSBdLCBbIC03MS44Mjk1OTUsIDQxLjM0NDU0NCBdLCBbIC03MS44MzkwMTMsIDQxLjMzNDA0MiBdLCBbIC03MS44NjA1MTMsIDQxLjMyMDI0OCBdLCBbIC03MS44NTk1NzAsIDQxLjMyMjM5OSBdIF0gXSwgWyBbIFsgLTczLjQyMjE2NSwgNDEuMDQ3NTYyIF0sIFsgLTczLjQwMzYxMCwgNDEuMDYyNjg3IF0sIFsgLTczLjM2Nzg1OSwgNDEuMDg4MTIwIF0sIFsgLTczLjM1MjA1MSwgNDEuMDg4MTIwIF0sIFsgLTczLjM4NTczNSwgNDEuMDU5MjUwIF0sIFsgLTczLjQyMjE2NSwgNDEuMDQ3NTYyIF0gXSBdIF0gfSB9"



Instance: AcmeOfCTPortalEndpoint
InstanceOf: NatlDirEndpoint
Description: "Endpoint for Acme of CT Portal"
Usage: #example
* meta.profile = Canonical(NatlDirEndpoint) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "Endpoint for Acme of CT Portal"
* connectionType = EndpointConnectionTypeCS#rest-non-fhir
* payloadType = EndpointPayloadTypeCS#NA
* address = "https://urlofportal.acmect.com"
* extension[endpoint-usecase].extension[type].valueCodeableConcept = $V3ActReason#HOPERAT


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/tmpfsh/tmp/OrganizationExamples.fsh

Instance: HartfordOrthopedics 
InstanceOf: NatlDirOrganization
Description: "Hartford Orthpedic Services is a group providing Orthpods for Acme of CT at Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirOrganization)
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
InstanceOf: NatlDirOrganization
Description: "Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirOrganization)
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
InstanceOf: NatlDirHealthcareService
Description: "Hartford General Hospital ER"
Usage: #example
* meta.profile = Canonical(NatlDirHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#emerg  
* specialty =  $NUCCProviderTaxonomy#207P00000X   "Emergency Medicine"
* providedBy = Reference(Hospital)
* location[0] = Reference(HospLoc1)



Instance: HospLoc1
InstanceOf: NatlDirLocation
Description: "Location1 of Hartford Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirLocation) 
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
InstanceOf: NatlDirLocation
Description: "Location2 of Hartford Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirLocation) 
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
InstanceOf: NatlDirHealthcareService
Description: "Hartford Orthopedic Services"
Usage: #example
* meta.profile = Canonical(NatlDirHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#prov 
* specialty = $NUCCProviderTaxonomy#207X00000X "Orthopedic Surgery"   // Orthopedics
* providedBy = Reference(HartfordOrthopedics)
* location[1] = Reference(HospLoc2)
* location[0] = Reference(HospLoc1)

Instance: HartfordOrthopedicAffil
InstanceOf: NatlDirOrganizationAffiliation
Description: "Hartford Orthopedic Services affiliation with Acme of CT Provider Network and Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirOrganizationAffiliation)
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
InstanceOf: NatlDirOrganizationAffiliation
Description: "Hamilton Clinic's affiliation with Acme of CT Provider Network and Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = OrganizationAffiliationRoleCS#outpatient 
* healthcareService = Reference(HamiltonClinicServices)
* participatingOrganization = Reference(HamiltonClinic)
* location[0] = Reference(HospLoc1)
* network = Reference(AcmeofCTStdNet)


Instance: HamiltonClinicServices
InstanceOf: NatlDirHealthcareService
Description: "Hamilton Clinic Services"
Usage: #example
* meta.profile = Canonical(NatlDirHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#outpat
* specialty = $NUCCProviderTaxonomy#207Q00000X "Family Medicine"  
* providedBy = Reference(HamiltonClinic)
* location[0] = Reference(HospLoc1)


Instance: HamiltonClinic
InstanceOf: NatlDirOrganization
Description: "Hamilton Clinic (a Division of Hartford Hospital)"
Usage: #example
* meta.profile = Canonical(NatlDirOrganization)
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
InstanceOf: NatlDirOrganizationAffiliation
Description: "Burr Clinic's affiliation with Acme of CT Provider Network and Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirOrganizationAffiliation)
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
InstanceOf: NatlDirHealthcareService
Description: "Burr Clinic Services"
Usage: #example
* meta.profile = Canonical(NatlDirHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#outpat
* specialty = $NUCCProviderTaxonomy#207Q00000X "Family Medicine"  
* providedBy = Reference(BurrClinic)
* location[0] = Reference(HospLoc1)


Instance: BurrClinic
InstanceOf: NatlDirOrganization
Description: "Burr Clinic provides service to Hartford Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirOrganization)
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
InstanceOf: NatlDirOrganization
Description: "Connecticut HIE"
Usage: #example
* meta.profile = Canonical(NatlDirOrganization)
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
InstanceOf: NatlDirOrganizationAffiliation
Description: "Burr Clinic's affiliation with Conn HIE"
Usage: #example
* meta.profile = Canonical(NatlDirOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = OrganizationAffiliationRoleCS#bt
* participatingOrganization = Reference(BurrClinic)
* organization = Reference(ConnHIE)


/*


Instance: PractitionerARole1
InstanceOf: NatlDirPractitionerRole
Description: "Dr Smith moonlighting as ER Doc at Rockville Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#PH 
* practitioner = Reference(PractitionerA)
* healthcareService = Reference(HealthCareServiceEmergency)
// specialty = internal medicine
// available M-F

Instance: PractitionerARole2
InstanceOf: NatlDirPractitionerRole
Description: "Dr Smith Internal Medicine at Rockville Clinic"
Usage: #example
* meta.profile = Canonical(NatlDirPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#PH
// specialty = internal medicine
// Available:  Sat/Sun
* healthcareService = Reference(HealthCareServiceOutpatientClinic)

Instance: HealthCareServiceOutpatientClinic
InstanceOf: NatlDirHealthcareService
Description: "Rockville Clinic Outpatient Internal Medicine Service"
Usage: #example
* meta.profile = Canonical(NatlDirHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#Outpatient
* specialty = $NUCCProviderTaxonomy#3336C0003X   // Fix to Internal Medicine
* providedBy = Reference(OrganizationInternalMedicineLLC)
* location[0] = Reference(RockvilleClinicLocation)

Instance: HealthCareServiceEmergency
InstanceOf: NatlDirHealthcareService
Description: "Rockville Hospital ER"
Usage: #example
* meta.profile = Canonical(NatlDirPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#Emergency 
* providedBy = Reference(OrganizationRockvilleHospital)
* location[0] = Reference(RockvilleHospitalLocation)


Instance: PharmacyOrganizationAffiliation1
InstanceOf: NatlDirOrganizationAffiliation
Description: "Organization Affiliation for PharmacyOrganizationA"
Usage: #example
* id = "1"
* meta.profile = Canonical(NatlDirOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* network = Reference(AcmeOfCTSPreferredProviderNetwork)
* participatingOrganization = Reference (PharmacyOrganizationA)
* healthcareService = Reference(PharmacyAHealthCareService)
* location[0] = Reference(PharmacyLocation1)
* location[1] = Reference(PharmacyLocation2)

Instance: AcmeOfCTSPreferredProviderNetwork
InstanceOf: NatlDirNetwork
Description: "Acme of CT Preferred Provider Network"
Usage: #example
* id = "1"
* meta.profile = Canonical(NatlDirNetwork)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* partOf = Reference(PayerOrganizationA)
* type = #payer 

Instance: PharmacyLocation1
InstanceOf: NatlDirLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(NatlDirLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "CT Location 1"
* type = $V3RoleCode#OUTPHARM
Instance: PharmacyLocation2
InstanceOf: NatlDirLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(NatlDirLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "CT Location 2"
* type = $V3RoleCode#OUTPHARM

Instance: PharmacyLocation3
InstanceOf: NatlDirLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(NatlDirLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "MA Location 1"
* type = $V3RoleCode#OUTPHARM

Instance: PharmacyLocation4
InstanceOf: NatlDirLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(NatlDirLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "MA Location 2"
* type = $V3RoleCode#OUTPHARM

Instance: PayerOrganizationA
InstanceOf: NatlDirOrganization
Description: "Payer Organization"
Usage: #example
* meta.profile = Canonical(NatlDirOrganization)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "PayerA"
* type = $V3RoleCode#OUTPHARM
*/

---

File: repos/HL7_SLASH_fhir-directory-exchange/input/tmpfsh/tmp/PharmacyExamples.fsh

Instance: PharmChain
InstanceOf: NatlDirOrganization
Description: "Organization that Provides Pharmacy Services"
Usage: #example
* meta.profile = Canonical(NatlDirOrganization) 
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
InstanceOf: NatlDirOrganization
Description: "Organization that Manages 2 of PharmChain's pharmacies"
Usage: #example
* meta.profile =  Canonical(NatlDirOrganization) 
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
InstanceOf: NatlDirHealthcareService
Description: "Pharmacy Service provided by PharmChain"
Usage: #example
* meta.profile =  Canonical(NatlDirHealthcareService) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Pharmacy by PharmChain"
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
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
InstanceOf: NatlDirOrganizationAffiliation
Description: "Organization Affiliation for PharmChain (Retail)"
Usage: #example
* meta.profile =  Canonical(NatlDirOrganizationAffiliation)
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
InstanceOf: NatlDirOrganizationAffiliation
Description: "Organization Affiliation for PharmChain (Compounding)"
Usage: #example
* meta.profile = Canonical(NatlDirOrganizationAffiliation)
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
InstanceOf: NatlDirOrganizationAffiliation
Description: "Organization Affiliation for PharmChain (MailOrder)"
Usage: #example
* meta.profile = Canonical(NatlDirOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* network = Reference(AcmeofCTStdNet)
* participatingOrganization = Reference (PharmChain)
* healthcareService = Reference(PharmChainMailService)
* code = OrganizationAffiliationRoleCS#pharmacy 
* specialty = $NUCCProviderTaxonomy#3336M0002X "Mail Order Pharmacy"


Instance: PharmChainCompService
InstanceOf: NatlDirHealthcareService
Description: "Compound Pharmacy Service provided by PharmacyOrganization A"
Usage: #example
* meta.profile = Canonical(NatlDirHealthcareService) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Compounding Pharmacy by OrgA"
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#pharm "Pharmacy"
* specialty = $NUCCProviderTaxonomy#3336C0004X "Compounding Pharmacy"
* specialty.text = "Compounding Pharmacy"
* providedBy = Reference(PharmChain)
* location[0] = Reference(PharmLoc1)
* telecom.extension[via-intermediary].valueReference = Reference(PharmLoc1)

Instance: PharmChainMailService
InstanceOf: NatlDirHealthcareService
Description: "Mail Order Pharmacy Service provided by PharmacyOrganization A"
Usage: #example
* meta.profile = Canonical(NatlDirHealthcareService) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Mail Order Pharmacy by OrgA"
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#virtual
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
InstanceOf: NatlDirLocation
Description: "Location of Pharmacy1 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(NatlDirLocation) 
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
InstanceOf: NatlDirLocation
Description: "Location of Pharmacy2 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(NatlDirLocation) 
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
InstanceOf: NatlDirLocation
Description: "Location of Pharmacy3 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(NatlDirLocation) 
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
InstanceOf: NatlDirLocation
Description: "Location of Pharmacy4 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(NatlDirLocation) 
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

File: repos/HL7_SLASH_fhir-directory-exchange/input/tmpfsh/tmp/PractitionerExamples.fsh

Instance: JoeSmith
InstanceOf: NatlDirPractitioner
Description: "Practitioner Dr Joe Smith"
Usage: #example
* meta.profile = Canonical(NatlDirPractitioner)
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
* qualification[1].code = $NUCCProviderTaxonomy#207R00000X "Internal Medicine"
* qualification[1].issuer.display = "American Board of Internal Medicine"
* qualification[1].code.text = "Board Certified Internal Medicine"
* qualification[1].extension[practitioner-qualification].extension[status].valueCode = QualificationStatusCS#active 
* qualification[1].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* qualification[2].code = $NUCCProviderTaxonomy#207RC0000X "Cardiovascular Disease"
* qualification[2].issuer.display = "American Board of Internal Medicine"
* qualification[2].code.text = "Board Certified Cardiovascular Disease"
* qualification[2].extension[practitioner-qualification].extension[status].valueCode = QualificationStatusCS#active 
* qualification[2].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 


Instance: HansSolo
InstanceOf: NatlDirPractitioner
Description: "Solo Practitioner Hans Solo"
Usage: #example
* meta.profile = Canonical(NatlDirPractitioner)
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
* qualification[1].code = $NUCCProviderTaxonomy#207R00000X "Internal Medicine"
* qualification[1].issuer.display = "American Board of Internal Medicine"
* qualification[1].code.text = "Board Certified Internal Medicine"
* qualification[1].extension[practitioner-qualification].extension[status].valueCode = QualificationStatusCS#active 
* qualification[1].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* qualification[2].code = $NUCCProviderTaxonomy#207RC0000X "Cardiovascular Disease"
* qualification[2].issuer.display = "American Board of Internal Medicine"
* qualification[2].code.text = "Board Certified Cardiovascular Disease"
* qualification[2].extension[practitioner-qualification].extension[status].valueCode = QualificationStatusCS#active 
* qualification[2].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* extension[communication-proficiency].valueCodeableConcept = LanguageProficiencyCS#30
* communication = $BCP47#ja 


Instance: HansSoloRole1
InstanceOf: NatlDirPractitionerRole
Description: "Hans Solo is a solo practitioner"
Usage: #example
* meta.profile = Canonical(NatlDirPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#ph 
* practitioner = Reference(HansSolo)
* healthcareService = Reference(HansSoloService)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* location[0] = Reference(HansSoloClinic)
* specialty =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine"
* extension[qualification].extension[code].valueCodeableConcept = $NUCCProviderTaxonomy#207R00000X 
* extension[qualification].extension[issuer].valueReference.display = "American Board of Internal Medicine"
* extension[qualification].extension[status].valueCode = QualificationStatusCS#active 
// specialty = internal medicine
// available M-F

Instance: HansSoloService
InstanceOf: NatlDirHealthcareService
Description: "Hans Solo Services"
Usage: #example
* meta.profile = Canonical(NatlDirHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#outpat 
* specialty = $NUCCProviderTaxonomy#207Q00000X "Family Medicine"  
* location[0] = Reference(HansSoloClinic)

Instance: HansSoloClinic
InstanceOf: NatlDirLocation
Description: "Location of Hans Solo's clinic"
Usage: #example
* meta.profile = Canonical(NatlDirLocation) 
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
InstanceOf: NatlDirPractitioner
Description: "Counselor Susie Smith"
Usage: #example
* meta.profile = Canonical(NatlDirPractitioner)
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
* extension[communication-proficiency].valueCodeableConcept = LanguageProficiencyCS#30
* communication = $BCP47#ru 

Instance: CounselorRole1
InstanceOf: NatlDirPractitionerRole
Description: "Susie  Smith is a counselor via Telemedicine"
Usage: #example
* meta.profile = Canonical(NatlDirPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#co "Counselor"
* practitioner = Reference(Counselor)
* healthcareService = Reference(VirtualCounselService)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* specialty =  $NUCCProviderTaxonomy#101YP2500X  "Professional Counselor"


Instance: VirtualCounselService
InstanceOf: NatlDirHealthcareService
Description: "Virtual Counseling Service"
Usage: #example
* meta.profile = Canonical(NatlDirHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#virtual
* extension[deliverymethod].extension[virtualModalities][0].valueCodeableConcept = VirtualModalitiesCS#web
* extension[deliverymethod].extension[virtualModalities][1].valueCodeableConcept = VirtualModalitiesCS#app 
* extension[deliverymethod].extension[virtualModalities][2].valueCodeableConcept = VirtualModalitiesCS#tdd 
* extension[deliverymethod].extension[virtualModalities][3].valueCodeableConcept =  VirtualModalitiesCS#phone 
* category = HealthcareServiceCategoryCS#prov "Medical Provider"
* specialty =  $NUCCProviderTaxonomy#101YP2500X  "Professional"

Instance: JoeSmithRole1
InstanceOf: NatlDirPractitionerRole
Description: "Dr Smith moonlighting as ER Doc at Hartford Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#ph 
* practitioner = Reference(JoeSmith)
* healthcareService = Reference(HospERService)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* location[0] = Reference(HospLoc1)
* specialty =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine"
* organization = Reference(Hospital)
// specialty = internal medicine
// available M-F

Instance: JoeSmithRole2
InstanceOf: NatlDirPractitionerRole
Description: "Dr Smith Internal Medicine at Burr Clinic"
Usage: #example
* meta.profile = Canonical(NatlDirPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#ph
// specialty = internal medicine
// Available:  Sat/Sun
* healthcareService = Reference(BurrClinicServices)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* location[0] = Reference(HospLoc2)
* specialty =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine"
* organization = Reference(BurrClinic)

Instance: JoeSmithRole3
InstanceOf: NatlDirPractitionerRole
Description: "Dr Smith Admitting Privileges at Hartford General"
Usage: #example
* meta.profile = Canonical(NatlDirPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#ap 
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* specialty[0] =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine"
* specialty[1] = $NUCCProviderTaxonomy#207RC0000X "Cardiovascular Disease"
* organization = Reference(Hospital)

Instance: AnonRole
InstanceOf: NatlDirPractitionerRole
Description: "Practitioner role that doesn't refer to a specific practitioner"
Usage: #example
* meta.profile = Canonical(NatlDirPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#ph
* healthcareService = Reference(BurrClinicServices)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* location[0] = Reference(HospLoc2)
* specialty[0] =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine"
* organization = Reference(CancerClinic)

Instance: CancerClinicService
InstanceOf: NatlDirHealthcareService
Description: "Cancer Clinic Services"
Usage: #example
* meta.profile = Canonical(NatlDirHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#outpat
* providedBy = Reference(CancerClinic)
* specialty = $NUCCProviderTaxonomy#207RX0202X "Medical Oncology"  
* location[0] = Reference(CancerClinicLoc)

Instance: CancerClinicLoc
InstanceOf: NatlDirLocation
Description: "Location1 of Cancer Clinic"
Usage: #example
* meta.profile = Canonical(NatlDirLocation) 
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
InstanceOf: NatlDirOrganization
Description: "HartfordCancerClinicLLC"
Usage: #example
* meta.profile = Canonical(NatlDirOrganization)
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

File: repos/HL7_SLASH_fhir-directory-exchange/input/tmpfsh/Aliases.fsh

// USCore Aliases
Alias:   $USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias:   $USCoreOrganization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias:   $USCoreLocation = http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
Alias:   $USCorePractitionerRole = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole
Alias:   $us-core-provider-role-vs = http://hl7.org/fhir/us/core/ValueSet/us-core-provider-role
Alias:   $us-core-provider-specialty-vs = http://hl7.org/fhir/us/core/ValueSet/us-core-provider-specialty

//VhDir Aliases
Alias: $SCT = http://snomed.info/sct
Alias: $GeolocationExtension = http://hl7.org/fhir/StructureDefinition/geolocation
Alias: $consent = http://hl7.org/fhir/uv/vhdir/ValueSet/consent
Alias: $verificationresult-validation-type = http://hl7.org/fhir/ValueSet/verificationresult-validation-type
Alias: $validationprocess = http://hl7.org/fhir/uv/vhdir/ValueSet/validationprocess
Alias: $verificationresult-primary-source-type = http://hl7.org/fhir/ValueSet/verificationresult-primary-source-type
Alias: $verificationresult-communication-method_1 = http://hl7.org/fhir/ValueSet/verificationresult-communication-method
Alias: $identifierstatus = http://hl7.org/fhir/uv/vhdir/ValueSet/identifierstatus
Alias: $aliastype = http://hl7.org/fhir/uv/vhdir/ValueSet/aliastype
Alias: $digitalcertificatetype = http://hl7.org/fhir/uv/vhdir/ValueSet/digitalcertificatetype
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
///Alias:  $NUCCProviderTaxonomy  = https://taxonomy.nucc.org
Alias:  $V2table0360VS = http://terminology.hl7.org/ValueSet/v2-0360 
Alias:  $V2table0360CS = http://terminology.hl7.org/CodeSystem/v2-0360 
Alias:  $yesNoVS = http://terminology.hl7.org/ValueSet/v2-0136


// NatlDir defined CS that mimic VHDir CodeSystems
Alias: $LanguageProficiency = http://hl7.org/fhir/us/davinci-pdex-NatlDir/CodeSystem/LanguageProficiencyCS
Alias: $QualificationStatusCS = http://hl7.org/fhir/us/davinci-pdex-NatlDir/CodeSystem/QualificationStatusCS
Alias: $MinEndpointConnectionTypeVS = http://hl7.org/fhir/us/davinci-pdex-NatlDir/ValueSet/MinEndpointConnectionTypeVS
Alias: $QualificationStatusCS = http://hl7.org/fhir/us/davinci-pdex-NatlDir/CodeSystem/QualificationStatusCS
Alias: $IgFormatCodeVS = http://hl7.org/fhir/ValueSet/formatcodes


Alias: $NatlDirectoryCareTeam =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDir-CareTeam

Alias: $NatlDirectoryEndPoint =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDir-Endpoint
Alias: $NatlDirectoryHealthCareService =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDir-HealthcareService
Alias: $NatlDirectoryInsurancePlan = http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDir-InsurancePlan
Alias: $NatlDirectoryLocation =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDir-Location
Alias: $NatlDirectoryNetwork =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDir-Network
Alias: $NatlDirectoryOrganization =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDir-Organization
Alias: $NatlDirectoryOrganizationAfflication =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDir-OrganizationAffiliation
Alias: $NatlDirectoryPractitioner =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDir-Practitioner
Alias: $NatlDirectoryPractitionerRole =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDir-PractitionerRole


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/tmpfsh/CodeSystems.fsh

CodeSystem: IgTypeCS
Title: "IG Type"
Description: "IG Type"
* #FHIR	"FHIR"
* #direct	"Direct"

CodeSystem: EndpointTypeCS
Title: "IG Type"
Description: "IG Type"
* #FHIR	"FHIR Server"
* #OpEndpoint	"Operation Endpoint"
* #CDS	"CDS Hooks"

CodeSystem: TrustFrameworkTypeCS
Title: "Trust FrameworkType"
Description: "Trust Framework Type"
* #DirectTrust	"Direct Trust"
* #CareQuality	"Carequality"
* #Commonwell	"Commonwell"
* #TEFCA	"TEFCA"
* #PayerToPayer	"Payer to Payer Trust Network"
* #Exchange	"Exchange Required by Federal Regulations"
* #PCDH "Patient Centered Data Home"

CodeSystem: AcceptingPatientsCS
Title: "Accepting Patients Codes"
Description: "Codes to identify if the practice is accepting new patients"
* #nopt	"Not Accepting" "Not accepting patients"
* #newpt	"Accepting" "Accepting patients"
* #existptonly	"Accepting existing patients" "Accepting existing patients"
* #existptfam	"Accepting existing patients and their families" "Accepting existing patients and members of their families"

CodeSystem: AccessibilityCS
Title: "Accessibility"
Description: "General categories of accommodations available."
* #cultcomp	"Cultural competence"	"Provides services that meet the social, cultural, and linguistic needs of persons."
* #handiaccess	"handicap accessible"	"Provides access to persons with disabilities."
* #adacomp	"ADA compliant"	"Provides access which complies with the Americans with Disabilities Act and/or amendments."
* #pubtrans	"public transit options"	"Provides access using public transportation modes."
* #anssrvc	"answering service"	"Provides capability to communicate when intended recipient is not immediately available."
* #cognitive	"cognitive"	"Provides services for cognitively impaired persons."
* #mobility	"mobility"	"Provides services for mobility impaired persons."

CodeSystem: DeliveryMethodCS
Title: "Delivery Methods"
Description: "Categories of healthcare service delivery methods."
* #virtual	"Virtual" "Delivery not requiring provider and patient to be physically co-located, such as tele-medicine"
* #physical	"Physical" "Traditional delivery requiring provider and patient to be physically co-located."

CodeSystem: VirtualModalitiesCS
Title: "Virtual Modalities"
Description: "Categories of virtual service delivery modalities."
* #phone	"phone" "Voice Telephone"
* #video	"video chat" "Video Chat"
* #tdd	"TDD" "Telecommunications Device for the Deaf"
* #sms	"SMS" "SMS Text Messaging"
* #app  "App" "Mobile Application"
* #web  "Website" "Website accessed through browser"

CodeSystem:  EndpointConnectionTypeCS
  Title: "Endpoint Connection Types (additional)"
  Description:  "Extension codes for http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
* #hl7-fhir-opn "HL7 FHIR Operation" "Interact with a FHIR server interface using FHIR's RESTful interface using an operation other than messaging. For details on its version/capabilities you should connect the value in Endpoint.address and retrieve the FHIR CapabilityStatement."
* #rest-non-fhir "REST (not FHIR)" "Interact with a server using HTTP/REST but not FHIR.  Should be used for web portals."
 

CodeSystem:  EndpointPayloadTypeCS
  Title: "Endpoint Payload Types"
  Description:  "Endpoint Payload Types are constrained to NA (Not Applicable) as part of this IG"
* #NA "Not Applicable" "Not Applicable"
 
 CodeSystem: HealthcareServiceCategoryCS
 Title: "Healthcare Service Category"
 Description: "Broad categories of healthcare services being performed or delivered"
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

CodeSystem: InsuranceProductTypeCS
Title: "Insurance Product Type"
Description:  "A distinct package of health insurance coverage benefits that are offered using a particular product network type."
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

CodeSystem: InsurancePlanTypeCS
Title: "Insurance Plan Type"
Description:  "Categories of cost-sharing used by plans"
* #platinum "Platinum-QHP" "Plan with highest monthly premium and lowest costs when you need care	A Qualified Health Plan with the highest monthly premiums and smallest out-of-pocket costs for the member in comparison to other metal-category plans"
* #gold "Gold-QHP" "Plan with high monthly premium and low costs when you need care	A Qualified Health Plan with the higher monthly premiums and smaller out-of-pocket costs for the member in comparison to other metal-category plans"
* #silver "Silver-QHP" "Plan with moderate monthly premium and moderate costs when you need care	A Qualified Health Plan with the lower monthly premiums and larger out-of-pocket costs for the member in comparison to other metal-category plans"
* #bronze "Bronze-QHP" "Plan with lowest monthly premium and highest costs when you need care	A Qualified Health Plan with the lowest monthly premiums and largest out-of-pocket costs for the member in comparison to other metal-category plans"
* #catastrophic "Catastrophic-QHP" "A plan with low monthly premiums and very high deductibles and are available only to those under 30 or with certain special exemptions."
* #lowdeductible "Low Deductible" "A plan that requires the insured to pay out of pocket a smaller proportion of incurred health care costs than a traditional insurance plan."
* #highdeductible "High Deductible" "A plan that requires the insured to pay out of pocket a larger proportion of incurred health care costs than a traditional insurance plan."
* #catastrophicplan "Catastrophic Plan" "A plan that requires the insured to pay out of pocket a much larger proportion of incurred health care costs than a traditional insurance plan."

CodeSystem:  OrgTypeCS
  Title: "Organization Type"
  Description:  "Categories of organizations based on criteria in provider directories."
* #fac "Facility" "A physical healthcare facility."
* #prvgrp "Provider Group" "A healthcare provider entity"
* #payer "Payer" "A healthcare payer."
* #atyprv "Atypical Provider" "Providers that do not provide healthcare"
* #bus "Non-Healthcare Business" "An organization that does not meet the definitions of a Healthcare or Atypical Provider, and is not a payer or healthcare facility"
* #ntwk "Network" "A healthcare provider insurance network"


CodeSystem: QualificationStatusCS
Title: "Qualification Status"
Description: "The state indicating if a qualification is currently valid."
* #active "active" "The credential may be considered valid for use."
* #inactive "inactive" "The credential may not be considered valid for use."
* #issiner "issued in error" "The credential was mistakenly assigned and should not be considered valid for use."
* #revoked "revoked" "The credential was revoked by the issuing organization and should not be considered valid for use."
* #pending "pending" "The credential has not been officially assigned. It may or may not be considered valid for use."
* #unknown "unknown" "The status of this credential is unknown. It may or may not be considered valid for use."


CodeSystem: ProviderRoleCS
Title: "Provider Role Codes"
Description: "A capability that an individual, group, or organization is acknowledged to have in a payer network."
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





CodeSystem:  LanguageProficiencyCS
Title: "Language Proficiency"
Description: "Codes for documenting spoken language proficiency based on the Interagency Language Roundtable scale of abilities to communicate in a language."
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


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/tmpfsh/InsuranceNetworkExamples.fsh




Instance: AcmeofCTStdNet
InstanceOf: NatlDirNetwork
Description: "Acme of CT Standard Network"
Usage: #example
* meta.profile = Canonical(NatlDirNetwork) 
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
InstanceOf: NatlDirNetwork
Description: "Acme of CT Premium Premium Network"
Usage: #example
* meta.profile = Canonical(NatlDirNetwork) 
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
InstanceOf: NatlDirOrganization
Description: "Payer Organization"
Usage: #example
* meta.profile = Canonical(NatlDirOrganization) 
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
InstanceOf: NatlDirInsurancePlan
Description: "Acme of CT QHP Gold Plan"
Usage: #example
* meta.profile = Canonical(NatlDirInsurancePlan) 
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
InstanceOf: NatlDirInsurancePlan
Description: "Acme of CT QHP Bronze Plan"
Usage: #example
* meta.profile = Canonical(NatlDirInsurancePlan) 
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
InstanceOf: NatlDirLocation
Description: "State of CT Area"
Usage: #example
* meta.profile = Canonical(NatlDirLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "State of CT Area"
* address.state = "CT"
* extension[region].valueAttachment.contentType = #application/json
* extension[region].valueAttachment.title = "GeoJSON Outline of the State of Connecticut"
* extension[region].valueAttachment.data  = "eyAidHlwZSI6ICJGZWF0dXJlIiwgInByb3BlcnRpZXMiOiB7ICJHRU9fSUQiOiAiMDQwMDAwMFVTMDkiLCAiU1RBVEUiOiAiMDkiLCAiTkFNRSI6ICJDb25uZWN0aWN1dCIsICJMU0FEIjogIiIsICJDRU5TVVNBUkVBIjogNDg0Mi4zNTUwMDAgfSwgImdlb21ldHJ5IjogeyAidHlwZSI6ICJNdWx0aVBvbHlnb24iLCAiY29vcmRpbmF0ZXMiOiBbIFsgWyBbIC03MS44NTk1NzAsIDQxLjMyMjM5OSBdLCBbIC03MS44NjgyMzUsIDQxLjMzMDk0MSBdLCBbIC03MS44ODYzMDIsIDQxLjMzNjQxMCBdLCBbIC03MS45MTY3MTAsIDQxLjMzMjIxNyBdLCBbIC03MS45MjIwOTIsIDQxLjMzNDUxOCBdLCBbIC03MS45MjMyODIsIDQxLjMzNTExMyBdLCBbIC03MS45MzYyODQsIDQxLjMzNzk1OSBdLCBbIC03MS45NDU2NTIsIDQxLjMzNzc5OSBdLCBbIC03MS45NTY3NDcsIDQxLjMyOTg3MSBdLCBbIC03MS45NzA5NTUsIDQxLjMyNDUyNiBdLCBbIC03MS45Nzk0NDcsIDQxLjMyOTk4NyBdLCBbIC03MS45ODIxOTQsIDQxLjMyOTg2MSBdLCBbIC03MS45ODgxNTMsIDQxLjMyMDU3NyBdLCBbIC03Mi4wMDAyOTMsIDQxLjMxOTIzMiBdLCBbIC03Mi4wMDUxNDMsIDQxLjMwNjY4NyBdLCBbIC03Mi4wMTA4MzgsIDQxLjMwNzAzMyBdLCBbIC03Mi4wMjE4OTgsIDQxLjMxNjgzOCBdLCBbIC03Mi4wODQ0ODcsIDQxLjMxOTYzNCBdLCBbIC03Mi4wOTQ0NDMsIDQxLjMxNDE2NCBdLCBbIC03Mi4wOTk4MjAsIDQxLjMwNjk5OCBdLCBbIC03Mi4xMTE4MjAsIDQxLjI5OTA5OCBdLCBbIC03Mi4xMzQyMjEsIDQxLjI5OTM5OCBdLCBbIC03Mi4xNjE1ODAsIDQxLjMxMDI2MiBdLCBbIC03Mi4xNzM5MjIsIDQxLjMxNzU5NyBdLCBbIC03Mi4xNzc2MjIsIDQxLjMyMjQ5NyBdLCBbIC03Mi4xODQxMjIsIDQxLjMyMzk5NyBdLCBbIC03Mi4xOTEwMjIsIDQxLjMyMzE5NyBdLCBbIC03Mi4yMDE0MjIsIDQxLjMxNTY5NyBdLCBbIC03Mi4yMDMwMjIsIDQxLjMxMzE5NyBdLCBbIC03Mi4yMDQwMjIsIDQxLjI5OTA5NyBdLCBbIC03Mi4yMDE0MDAsIDQxLjI4ODQ3MCBdLCBbIC03Mi4yMDUxMDksIDQxLjI4NTE4NyBdLCBbIC03Mi4yMDk5OTIsIDQxLjI4NjA2NSBdLCBbIC03Mi4yMTI5MjQsIDQxLjI5MTM2NSBdLCBbIC03Mi4yMjUyNzYsIDQxLjI5OTA0NyBdLCBbIC03Mi4yMzU1MzEsIDQxLjMwMDQxMyBdLCBbIC03Mi4yNDgxNjEsIDQxLjI5OTQ4OCBdLCBbIC03Mi4yNTE4OTUsIDQxLjI5ODYyMCBdLCBbIC03Mi4yNTA1MTUsIDQxLjI5NDM4NiBdLCBbIC03Mi4yNTEzMjMsIDQxLjI4OTk5NyBdLCBbIC03Mi4yNjE0ODcsIDQxLjI4MjkyNiBdLCBbIC03Mi4zMTc3NjAsIDQxLjI3Nzc4MiBdLCBbIC03Mi4zMjc1OTUsIDQxLjI3ODQ2MCBdLCBbIC03Mi4zMzM4OTQsIDQxLjI4MjkxNiBdLCBbIC03Mi4zNDg2NDMsIDQxLjI3NzQ0NiBdLCBbIC03Mi4zNDgwNjgsIDQxLjI2OTY5OCBdLCBbIC03Mi4zODY2MjksIDQxLjI2MTc5OCBdLCBbIC03Mi4zOTg2ODgsIDQxLjI3ODE3MiBdLCBbIC03Mi40MDU5MzAsIDQxLjI3ODM5OCBdLCBbIC03Mi40NTE5MjUsIDQxLjI3ODg4NSBdLCBbIC03Mi40NzI1MzksIDQxLjI3MDEwMyBdLCBbIC03Mi40ODU2OTMsIDQxLjI3MDg4MSBdLCBbIC03Mi40OTk1MzQsIDQxLjI2NTg2NiBdLCBbIC03Mi41MDY2MzQsIDQxLjI2MDA5OSBdLCBbIC03Mi41MTg2NjAsIDQxLjI2MTI1MyBdLCBbIC03Mi41MjEzMTIsIDQxLjI2NTYwMCBdLCBbIC03Mi41Mjk0MTYsIDQxLjI2NDQyMSBdLCBbIC03Mi41MzMyNDcsIDQxLjI2MjY5MCBdLCBbIC03Mi41MzY3NDYsIDQxLjI1NjIwNyBdLCBbIC03Mi41NDcyMzUsIDQxLjI1MDQ5OSBdLCBbIC03Mi41NzExMzYsIDQxLjI2ODA5OCBdLCBbIC03Mi41ODMzMzYsIDQxLjI3MTY5OCBdLCBbIC03Mi41OTgwMzYsIDQxLjI2ODY5OCBdLCBbIC03Mi42MTcyMzcsIDQxLjI3MTk5OCBdLCBbIC03Mi42NDE1MzgsIDQxLjI2Njk5OCBdLCBbIC03Mi42NTM4MzgsIDQxLjI2NTg5NyBdLCBbIC03Mi42NjI4MzgsIDQxLjI2OTE5NyBdLCBbIC03Mi42NzIzMzksIDQxLjI2Njk5NyBdLCBbIC03Mi42ODQ5MzksIDQxLjI1NzU5NyBdLCBbIC03Mi42ODU1MzksIDQxLjI1MTI5NyBdLCBbIC03Mi42OTA0MzksIDQxLjI0NjY5NyBdLCBbIC03Mi42OTQ3NDQsIDQxLjI0NDk3MCBdLCBbIC03Mi43MTA1OTUsIDQxLjI0NDQ4MCBdLCBbIC03Mi43MTM2NzQsIDQxLjI0OTAwNyBdLCBbIC03Mi43MTEyMDgsIDQxLjI1MTAxOCBdLCBbIC03Mi43MTI0NjAsIDQxLjI1NDE2NyBdLCBbIC03Mi43MjI0MzksIDQxLjI1OTEzOCBdLCBbIC03Mi43MzI4MTMsIDQxLjI1NDcyNyBdLCBbIC03Mi43NTQ0NDQsIDQxLjI2NjkxMyBdLCBbIC03Mi43NTc0NzcsIDQxLjI2NjkxMyBdLCBbIC03Mi43ODYxNDIsIDQxLjI2NDc5NiBdLCBbIC03Mi44MTg3MzcsIDQxLjI1MjI0NCBdLCBbIC03Mi44MTkzNzIsIDQxLjI1NDA2MSBdLCBbIC03Mi44MjY4ODMsIDQxLjI1Njc1NSBdLCBbIC03Mi44NDc3NjcsIDQxLjI1NjY5MCBdLCBbIC03Mi44NTAyMTAsIDQxLjI1NTU0NCBdLCBbIC03Mi44NTQwNTUsIDQxLjI0Nzc0MCBdLCBbIC03Mi44NjEzNDQsIDQxLjI0NTI5NyBdLCBbIC03Mi44ODE0NDUsIDQxLjI0MjU5NyBdLCBbIC03Mi44OTU0NDUsIDQxLjI0MzY5NyBdLCBbIC03Mi45MDQzNDUsIDQxLjI0NzI5NyBdLCBbIC03Mi45MDUyNDUsIDQxLjI0ODI5NyBdLCBbIC03Mi45MDMwNDUsIDQxLjI1Mjc5NyBdLCBbIC03Mi44OTQ3NDUsIDQxLjI1NjE5NyBdLCBbIC03Mi44OTM4NDUsIDQxLjI1OTg5NyBdLCBbIC03Mi45MDgyMDAsIDQxLjI4MjkzMiBdLCBbIC03Mi45MTY4MjcsIDQxLjI4MjAzMyBdLCBbIC03Mi45MjAwNjIsIDQxLjI4MDA1NiBdLCBbIC03Mi45MjA4NDYsIDQxLjI2ODg5NyBdLCBbIC03Mi45MzU2NDYsIDQxLjI1ODQ5NyBdLCBbIC03Mi45NjIwNDcsIDQxLjI1MTU5NyBdLCBbIC03Mi45ODYyNDcsIDQxLjIzMzQ5NyBdLCBbIC03Mi45OTc5NDgsIDQxLjIyMjY5NyBdLCBbIC03My4wMDc1NDgsIDQxLjIxMDE5NyBdLCBbIC03My4wMTQ5NDgsIDQxLjIwNDI5NyBdLCBbIC03My4wMjAxNDksIDQxLjIwNDA5NyBdLCBbIC03My4wMjA0NDksIDQxLjIwNjM5NyBdLCBbIC03My4wMjI1NDksIDQxLjIwNzE5NyBdLCBbIC03My4wNTA2NTAsIDQxLjIxMDE5NyBdLCBbIC03My4wNTkzNTAsIDQxLjIwNjY5NyBdLCBbIC03My4wNzk0NTAsIDQxLjE5NDAxNSBdLCBbIC03My4xMDU0OTMsIDQxLjE3MjE5NCBdLCBbIC03My4xMDc5ODcsIDQxLjE2ODczOCBdLCBbIC03My4xMTAzNTIsIDQxLjE1OTY5NyBdLCBbIC03My4xMDk5NTIsIDQxLjE1Njk5NyBdLCBbIC03My4xMDgzNTIsIDQxLjE1MzcxOCBdLCBbIC03My4xMTEwNTIsIDQxLjE1MDc5NyBdLCBbIC03My4xMzAyNTMsIDQxLjE0Njc5NyBdLCBbIC03My4xNzAwNzQsIDQxLjE2MDUzMiBdLCBbIC03My4xNzA3MDEsIDQxLjE2NDk0NSBdLCBbIC03My4xNzc3NzQsIDQxLjE2NjY5NyBdLCBbIC03My4yMDI2NTYsIDQxLjE1ODA5NiBdLCBbIC03My4yMjgyOTUsIDQxLjE0MjYwMiBdLCBbIC03My4yMzUwNTgsIDQxLjE0Mzk5NiBdLCBbIC03My4yNDc5NTgsIDQxLjEyNjM5NiBdLCBbIC03My4yNjIzNTgsIDQxLjExNzQ5NiBdLCBbIC03My4yODY3NTksIDQxLjEyNzg5NiBdLCBbIC03My4yOTYzNTksIDQxLjEyNTY5NiBdLCBbIC03My4zMTE4NjAsIDQxLjExNjI5NiBdLCBbIC03My4zMzA2NjAsIDQxLjEwOTk5NiBdLCBbIC03My4zNzIyOTYsIDQxLjEwNDAyMCBdLCBbIC03My4zOTIxNjIsIDQxLjA4NzY5NiBdLCBbIC03My40MDAxNTQsIDQxLjA4NjI5OSBdLCBbIC03My40MTM2NzAsIDQxLjA3MzI1OCBdLCBbIC03My40MzUwNjMsIDQxLjA1NjY5NiBdLCBbIC03My40NTAzNjQsIDQxLjA1NzA5NiBdLCBbIC03My40NjgyMzksIDQxLjA1MTM0NyBdLCBbIC03My40NzczNjQsIDQxLjAzNTk5NyBdLCBbIC03My40OTMzMjcsIDQxLjA0ODE3MyBdLCBbIC03My41MTY5MDMsIDQxLjAzODczOCBdLCBbIC03My41MTY3NjYsIDQxLjAyOTQ5NyBdLCBbIC03My41MjI2NjYsIDQxLjAxOTI5NyBdLCBbIC03My41Mjg4NjYsIDQxLjAxNjM5NyBdLCBbIC03My41MzExNjksIDQxLjAyMTkxOSBdLCBbIC03My41MzAxODksIDQxLjAyODc3NiBdLCBbIC03My41MzI3ODYsIDQxLjAzMTY3MCBdLCBbIC03My41MzUzMzgsIDQxLjAzMTkyMCBdLCBbIC03My41NTE0OTQsIDQxLjAyNDMzNiBdLCBbIC03My41NjE5NjgsIDQxLjAxNjc5NyBdLCBbIC03My41Njc2NjgsIDQxLjAxMDg5NyBdLCBbIC03My41NzAwNjgsIDQxLjAwMTU5NyBdLCBbIC03My41ODM5NjgsIDQxLjAwMDg5NyBdLCBbIC03My41ODQ5ODgsIDQxLjAxMDUzNyBdLCBbIC03My41OTU2OTksIDQxLjAxNTk5NSBdLCBbIC03My42MDM5NTIsIDQxLjAxNTA1NCBdLCBbIC03My42NDM0NzgsIDQxLjAwMjE3MSBdLCBbIC03My42NTExNzUsIDQwLjk5NTIyOSBdLCBbIC03My42NTczMzYsIDQwLjk4NTE3MSBdLCBbIC03My42NTk2NzEsIDQwLjk4NzkwOSBdLCBbIC03My42NTg3NzIsIDQwLjk5MzQ5NyBdLCBbIC03My42NTkzNzIsIDQwLjk5OTQ5NyBdLCBbIC03My42NTU1NzEsIDQxLjAwNzY5NyBdLCBbIC03My42NTQ2NzEsIDQxLjAxMTY5NyBdLCBbIC03My42NTUzNzEsIDQxLjAxMjc5NyBdLCBbIC03My42NjI2NzIsIDQxLjAyMDQ5NyBdLCBbIC03My42NzA0NzIsIDQxLjAzMDA5NyBdLCBbIC03My42Nzk5NzMsIDQxLjA0MTc5NyBdLCBbIC03My42ODcxNzMsIDQxLjA1MDY5NyBdLCBbIC03My42OTQyNzMsIDQxLjA1OTI5NiBdLCBbIC03My43MTY4NzUsIDQxLjA4NzU5NiBdLCBbIC03My43MjI1NzUsIDQxLjA5MzU5NiBdLCBbIC03My43Mjc3NzUsIDQxLjEwMDY5NiBdLCBbIC03My42Mzk2NzIsIDQxLjE0MTQ5NSBdLCBbIC03My42MzIxNTMsIDQxLjE0NDkyMSBdLCBbIC03My41NjQ5NDEsIDQxLjE3NTE3MCBdLCBbIC03My41MTQ2MTcsIDQxLjE5ODQzNCBdLCBbIC03My41MDk0ODcsIDQxLjIwMDgxNCBdLCBbIC03My40ODI3MDksIDQxLjIxMjc2MCBdLCBbIC03My41MTgzODQsIDQxLjI1NjcxOSBdLCBbIC03My41NTA5NjEsIDQxLjI5NTQyMiBdLCBbIC03My41NDg5MjksIDQxLjMwNzU5OCBdLCBbIC03My41NDk1NzQsIDQxLjMxNTkzMSBdLCBbIC03My41NDg5NzMsIDQxLjMyNjI5NyBdLCBbIC03My41NDQ3MjgsIDQxLjM2NjM3NSBdLCBbIC03My41NDM0MjUsIDQxLjM3NjYyMiBdLCBbIC03My41NDExNjksIDQxLjQwNTk5NCBdLCBbIC03My41Mzc2NzMsIDQxLjQzMzkwNSBdLCBbIC03My41Mzc0NjksIDQxLjQzNTg5MCBdLCBbIC03My41MzY5NjksIDQxLjQ0MTA5NCBdLCBbIC03My41MzYwNjcsIDQxLjQ1MTMzMSBdLCBbIC03My41MzU5ODYsIDQxLjQ1MzA2MCBdLCBbIC03My41MzU4ODUsIDQxLjQ1NTIzNiBdLCBbIC03My41MzU4NTcsIDQxLjQ1NTcwOSBdLCBbIC03My41MzU3NjksIDQxLjQ1NzE1OSBdLCBbIC03My41MzQzNjksIDQxLjQ3NTg5NCBdLCBbIC03My41MzQyNjksIDQxLjQ3NjM5NCBdLCBbIC03My41MzQyNjksIDQxLjQ3NjkxMSBdLCBbIC03My41MzQxNTAsIDQxLjQ3ODA2MCBdLCBbIC03My41MzQwNTUsIDQxLjQ3ODk2OCBdLCBbIC03My41MzM5NjksIDQxLjQ3OTY5MyBdLCBbIC03My41MzAwNjcsIDQxLjUyNzE5NCBdLCBbIC03My41MjEwNDEsIDQxLjYxOTc3MyBdLCBbIC03My41MjAwMTcsIDQxLjY0MTE5NyBdLCBbIC03My41MTY3ODUsIDQxLjY4NzU4MSBdLCBbIC03My41MTE5MjEsIDQxLjc0MDk0MSBdLCBbIC03My41MTA5NjEsIDQxLjc1ODc0OSBdLCBbIC03My41MDUwMDgsIDQxLjgyMzc3MyBdLCBbIC03My41MDQ5NDQsIDQxLjgyNDI4NSBdLCBbIC03My41MDE5ODQsIDQxLjg1ODcxNyBdLCBbIC03My40OTgzMDQsIDQxLjg5MjUwOCBdLCBbIC03My40OTY1MjcsIDQxLjkyMjM4MCBdLCBbIC03My40OTI5NzUsIDQxLjk1ODUyNCBdLCBbIC03My40ODk2MTUsIDQyLjAwMDA5MiBdLCBbIC03My40ODczMTQsIDQyLjA0OTYzOCBdLCBbIC03My40MzI4MTIsIDQyLjA1MDU4NyBdLCBbIC03My4yOTQ0MjAsIDQyLjA0Njk4NCBdLCBbIC03My4yOTMwOTcsIDQyLjA0Njk0MCBdLCBbIC03My4yMzEwNTYsIDQyLjA0NDk0NSBdLCBbIC03My4yMjk3OTgsIDQyLjA0NDg3NyBdLCBbIC03My4wNTMyNTQsIDQyLjAzOTg2MSBdLCBbIC03Mi45OTk1NDksIDQyLjAzODY1MyBdLCBbIC03Mi44NjM3MzMsIDQyLjAzNzcxMCBdLCBbIC03Mi44NjM2MTksIDQyLjAzNzcwOSBdLCBbIC03Mi44NDcxNDIsIDQyLjAzNjg5NCBdLCBbIC03Mi44MTM1NDEsIDQyLjAzNjQ5NCBdLCBbIC03Mi44MTY3NDEsIDQxLjk5NzU5NSBdLCBbIC03Mi43NjY3MzksIDQyLjAwMjk5NSBdLCBbIC03Mi43NjYxMzksIDQyLjAwNzY5NSBdLCBbIC03Mi43NjMyNjUsIDQyLjAwOTc0MiBdLCBbIC03Mi43NjMyMzgsIDQyLjAxMjc5NSBdLCBbIC03Mi43NjEyMzgsIDQyLjAxNDU5NSBdLCBbIC03Mi43NTk3MzgsIDQyLjAxNjk5NSBdLCBbIC03Mi43NjEzNTQsIDQyLjAxODE4MyBdLCBbIC03Mi43NjIzMTAsIDQyLjAxOTc3NSBdLCBbIC03Mi43NjIxNTEsIDQyLjAyMTUyNyBdLCBbIC03Mi43NjA1NTgsIDQyLjAyMTg0NiBdLCBbIC03Mi43NTgxNTEsIDQyLjAyMDg2NSBdLCBbIC03Mi43NTc0NjcsIDQyLjAyMDk0NyBdLCBbIC03Mi43NTQwMzgsIDQyLjAyNTM5NSBdLCBbIC03Mi43NTE3MzgsIDQyLjAzMDE5NSBdLCBbIC03Mi43NTM1MzgsIDQyLjAzMjA5NSBdLCBbIC03Mi43NTc1MzgsIDQyLjAzMzI5NSBdLCBbIC03Mi43NTU4MzgsIDQyLjAzNjE5NSBdLCBbIC03Mi42OTU5MjcsIDQyLjAzNjc4OCBdLCBbIC03Mi42NDMxMzQsIDQyLjAzMjM5NSBdLCBbIC03Mi42MDc5MzMsIDQyLjAzMDc5NSBdLCBbIC03Mi42MDY5MzMsIDQyLjAyNDk5NSBdLCBbIC03Mi41OTAyMzMsIDQyLjAyNDY5NSBdLCBbIC03Mi41ODIzMzIsIDQyLjAyNDY5NSBdLCBbIC03Mi41NzMyMzEsIDQyLjAzMDE0MSBdLCBbIC03Mi41MjgxMzEsIDQyLjAzNDI5NSBdLCBbIC03Mi40NTY2ODAsIDQyLjAzMzk5OSBdLCBbIC03Mi4zMTcxNDgsIDQyLjAzMTkwNyBdLCBbIC03Mi4yNDk1MjMsIDQyLjAzMTYyNiBdLCBbIC03Mi4xMzU2ODcsIDQyLjAzMDI0NSBdLCBbIC03Mi4wNjM0OTYsIDQyLjAyNzM0NyBdLCBbIC03MS45ODczMjYsIDQyLjAyNjg4MCBdLCBbIC03MS44OTA3ODAsIDQyLjAyNDM2OCBdLCBbIC03MS44MDA2NTAsIDQyLjAyMzU2OSBdLCBbIC03MS43OTkyNDIsIDQyLjAwODA2NSBdLCBbIC03MS43OTc5MjIsIDQxLjkzNTM5NSBdLCBbIC03MS43OTQxNjEsIDQxLjg0MTEwMSBdLCBbIC03MS43OTQxNjEsIDQxLjg0MDE0MSBdLCBbIC03MS43OTI3ODYsIDQxLjgwODY3MCBdLCBbIC03MS43OTI3NjcsIDQxLjgwNzAwMSBdLCBbIC03MS43OTEwNjIsIDQxLjc3MDI3MyBdLCBbIC03MS43ODk2NzgsIDQxLjcyNDczNCBdLCBbIC03MS43ODY5OTQsIDQxLjY1NTk5MiBdLCBbIC03MS43ODkzNTYsIDQxLjU5NjkxMCBdLCBbIC03MS43OTc2ODMsIDQxLjQxNjcwOSBdLCBbIC03MS44MTgzOTAsIDQxLjQxOTU5OSBdLCBbIC03MS44Mzk2NDksIDQxLjQxMjExOSBdLCBbIC03MS44NDI1NjMsIDQxLjQwOTg1NSBdLCBbIC03MS44NDM0NzIsIDQxLjQwNTgzMCBdLCBbIC03MS44NDIxMzEsIDQxLjM5NTM1OSBdLCBbIC03MS44MzM0NDMsIDQxLjM4NDUyNCBdLCBbIC03MS44MzE2MTMsIDQxLjM3MDg5OSBdLCBbIC03MS44Mzc3MzgsIDQxLjM2MzUyOSBdLCBbIC03MS44MzU5NTEsIDQxLjM1MzkzNSBdLCBbIC03MS44Mjk1OTUsIDQxLjM0NDU0NCBdLCBbIC03MS44MzkwMTMsIDQxLjMzNDA0MiBdLCBbIC03MS44NjA1MTMsIDQxLjMyMDI0OCBdLCBbIC03MS44NTk1NzAsIDQxLjMyMjM5OSBdIF0gXSwgWyBbIFsgLTczLjQyMjE2NSwgNDEuMDQ3NTYyIF0sIFsgLTczLjQwMzYxMCwgNDEuMDYyNjg3IF0sIFsgLTczLjM2Nzg1OSwgNDEuMDg4MTIwIF0sIFsgLTczLjM1MjA1MSwgNDEuMDg4MTIwIF0sIFsgLTczLjM4NTczNSwgNDEuMDU5MjUwIF0sIFsgLTczLjQyMjE2NSwgNDEuMDQ3NTYyIF0gXSBdIF0gfSB9"



Instance: AcmeOfCTPortalEndpoint
InstanceOf: NatlDirEndpoint
Description: "Endpoint for Acme of CT Portal"
Usage: #example
* meta.profile = Canonical(NatlDirEndpoint) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "Endpoint for Acme of CT Portal"
* connectionType = EndpointConnectionTypeCS#rest-non-fhir
* payloadType = EndpointPayloadTypeCS#NA
* address = "https://urlofportal.acmect.com"
* extension[endpoint-usecase].extension[type].valueCodeableConcept = $V3ActReason#HOPERAT


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/tmpfsh/NatlDirectoryQuery.fsh

Profile: NatlDirEndpointQryCareTeam
Parent: $NatlDirectoryCareTeam
Id: NatlDirEndpointQry-CareTeam
Title: "National Directory Endpoint Query Care Team"
Description: "Defines the basic constraints and extensions on the CareTeam resource for use in a Validated Healthcare Directory"
* identifier.use 0..1


Profile:        NatlDirEndpointQryEndpoint
Parent:         $NatlDirectoryEndPoint
Id:             NatlDirEndpointQry-Endpoint
Title:          "National Directory Endpoint Query Endpoint"
Description:    "The technical details of an endpoint that can be used for electronic services, such as a portal or FHIR REST services, messaging or operations, or DIRECT messaging."

Profile:        NatlDirHealthcareEndpointQryService
Parent:         $NatlDirectoryHealthCareService
Id:             NatlDirEndpointQry-HealthcareService
Title:          "National Directory Endpoint Query HealthcareService"
Description:    "The HealthCareService resource typically describes services offered by an organization/practitioner at a location. The resource may be used to encompass a variety of services covering the entire healthcare spectrum, including promotion, prevention, diagnostics, pharmacy, hospital and ambulatory care, home care, long-term care, and other health-related and community services."


Profile:        NatlDirEndpointQryInsurancePlan
Parent:         $NatlDirectoryInsurancePlan
Id:             NatlDirEndpointQry-InsurancePlan
Title:          "National Directory Endpoint Query InsurancePlan"
Description:    "An InsurancePlan is a discrete package of health insurance coverage benefits that are offered under a particular network type. A given payer’s products typically differ by network type and/or covered benefits. A plan pairs a product’s covered benefits with the particular cost sharing structure offered to a consumer. A given product may comprise multiple plans (i.e. each plan offers different cost sharing requirements for the same set of covered benefits)."


Profile:        NatlDirEndpointQryLocation
Parent:         $NatlDirectoryLocation
Id:             NatlDirEndpointQry-Location
Title:          "National Directory Endpoint Query Location"
Description:    "A Location is the physical place where healthcare services are provided, practitioners are employed, 
                 organizations are based, etc. Locations can range in scope from a room in a building to a geographic region/area."


Profile:        NatlDirEndpointQryNetwork
Parent:         $NatlDirectoryNetwork    //Organization 
Id:             NatlDirEndpointQry-Network
Title:          "National Directory Endpoint Query Network"
Description:    "A Network refers to a healthcare provider insurance network. A healthcare provider insurance network is an aggregation of organizations and individuals that deliver a set of services across a geography through health insurance products/plans. A network is typically owned by a payer."


Profile:        NatlDirEndpointQryOrganization
Parent:         $NatlDirectoryOrganization
Id:             NatlDirEndpointQry-Organization
Title:          "National Directory Endpoint Query Organization"
Description:    "An organization is a formal or informal grouping of people or organizations with a common purpose, such as a company, institution, corporation, community group, or healthcare practice.
Guidance:   When the contact is a department name, rather than a human (e.g., patient help line), include a blank family and given name, and provide the department name in contact.name.text"


Profile:        NatlDirEndpointQryOrganizationAffiliation
Parent:         $NatlDirectoryOrganizationAfflication
Id:             NatlDirEndpointQry-OrganizationAffiliation
Title:          "National Directory Endpoint Query OrganizationAffiliation"
Description:    "The OrganizationAffiliation resource describes relationships between two or more organizations, including the services one organization provides another, the location(s) where they provide services, the availability of those services, electronic endpoints, and other relevant information."


Profile:        NatlDirEndpointQryPractitioner
Parent:         $NatlDirectoryPractitioner
Id:             NatlDirEndpointQry-Practitioner
Title:          "National Directory Endpoint Query Practitioner"
Description:    "Practitioner is a person who is directly or indirectly involved in the provisioning of healthcare."


Profile:        NatlDirEndpointQryPractitionerRole
Parent:         $NatlDirectoryPractitionerRole
Id:             NatlDirEndpointQry-PractitionerRole
Title:          "National Directory Endpoint Query PractitionerRole"
Description:    "PractionerRole describes details about a provider, which can be a practitioner or an organization. When the provider is a practitioner, 
there may be a relationship to an organization. A provider renders services to patients at a location. When the provider is a practitioner, there may also 
be a relationship to an organization. Practitioner participation in healthcare provider insurance networks may be direct or through their role at an organization."




---

File: repos/HL7_SLASH_fhir-directory-exchange/input/tmpfsh/OrganizationAffiliationCode.fsh


CodeSystem: OrganizationAffiliationRoleCS
Title: "Organization Affiliation Role"
Description: "Codes For Organization Affiliation Role"
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


ValueSet: OrganizationAffiliationRoleVS
Title: "OrganizationAffiliation Roles"
Description: "Value Set for Organization Affiliation Roles"
* codes from system $HL7OrganizationRoleCS 
* exclude  $HL7OrganizationRoleCS#member  // replaced by OrganizationAffiliationRoleCS#memberof
* codes from system OrganizationAffiliationRoleCS


---

File: repos/HL7_SLASH_fhir-directory-exchange/input/tmpfsh/OrganizationExamples.fsh

Instance: HartfordOrthopedics 
InstanceOf: NatlDirOrganization
Description: "Hartford Orthpedic Services is a group providing Orthpods for Acme of CT at Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirOrganization)
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
InstanceOf: NatlDirOrganization
Description: "Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirOrganization)
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
InstanceOf: NatlDirHealthcareService
Description: "Hartford General Hospital ER"
Usage: #example
* meta.profile = Canonical(NatlDirHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#emerg  
* specialty =  $NUCCProviderTaxonomy#207P00000X   "Emergency Medicine"
* providedBy = Reference(Hospital)
* location[0] = Reference(HospLoc1)



Instance: HospLoc1
InstanceOf: NatlDirLocation
Description: "Location1 of Hartford Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirLocation) 
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
InstanceOf: NatlDirLocation
Description: "Location2 of Hartford Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirLocation) 
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
InstanceOf: NatlDirHealthcareService
Description: "Hartford Orthopedic Services"
Usage: #example
* meta.profile = Canonical(NatlDirHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#prov 
* specialty = $NUCCProviderTaxonomy#207X00000X "Orthopedic Surgery"   // Orthopedics
* providedBy = Reference(HartfordOrthopedics)
* location[1] = Reference(HospLoc2)
* location[0] = Reference(HospLoc1)

Instance: HartfordOrthopedicAffil
InstanceOf: NatlDirOrganizationAffiliation
Description: "Hartford Orthopedic Services affiliation with Acme of CT Provider Network and Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirOrganizationAffiliation)
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
InstanceOf: NatlDirOrganizationAffiliation
Description: "Hamilton Clinic's affiliation with Acme of CT Provider Network and Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = OrganizationAffiliationRoleCS#outpatient 
* healthcareService = Reference(HamiltonClinicServices)
* participatingOrganization = Reference(HamiltonClinic)
* location[0] = Reference(HospLoc1)
* network = Reference(AcmeofCTStdNet)


Instance: HamiltonClinicServices
InstanceOf: NatlDirHealthcareService
Description: "Hamilton Clinic Services"
Usage: #example
* meta.profile = Canonical(NatlDirHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#outpat
* specialty = $NUCCProviderTaxonomy#207Q00000X "Family Medicine"  
* providedBy = Reference(HamiltonClinic)
* location[0] = Reference(HospLoc1)


Instance: HamiltonClinic
InstanceOf: NatlDirOrganization
Description: "Hamilton Clinic (a Division of Hartford Hospital)"
Usage: #example
* meta.profile = Canonical(NatlDirOrganization)
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
InstanceOf: NatlDirOrganizationAffiliation
Description: "Burr Clinic's affiliation with Acme of CT Provider Network and Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirOrganizationAffiliation)
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
InstanceOf: NatlDirHealthcareService
Description: "Burr Clinic Services"
Usage: #example
* meta.profile = Canonical(NatlDirHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#outpat
* specialty = $NUCCProviderTaxonomy#207Q00000X "Family Medicine"  
* providedBy = Reference(BurrClinic)
* location[0] = Reference(HospLoc1)


Instance: BurrClinic
InstanceOf: NatlDirOrganization
Description: "Burr Clinic provides service to Hartford Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirOrganization)
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
InstanceOf: NatlDirOrganization
Description: "Connecticut HIE"
Usage: #example
* meta.profile = Canonical(NatlDirOrganization)
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
InstanceOf: NatlDirOrganizationAffiliation
Description: "Burr Clinic's affiliation with Conn HIE"
Usage: #example
* meta.profile = Canonical(NatlDirOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = OrganizationAffiliationRoleCS#bt
* participatingOrganization = Reference(BurrClinic)
* organization = Reference(ConnHIE)


/*


Instance: PractitionerARole1
InstanceOf: NatlDirPractitionerRole
Description: "Dr Smith moonlighting as ER Doc at Rockville Hospital"
Usage: #example
* meta.profile = Canonical(NatlDirPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#PH 
* practitioner = Reference(PractitionerA)
* healthcareService = Reference(HealthCareServiceEmergency)
// specialty = internal medicine
// available M-F

Instance: PractitionerARole2
InstanceOf: NatlDirPractitionerRole
Description: "Dr Smith Internal Medicine at Rockville Clinic"
Usage: #example
* meta.profile = Canonical(NatlDirPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#PH
// specialty = internal medicine
// Available:  Sat/Sun
* healthcareService = Reference(HealthCareServiceOutpatientClinic)

Instance: HealthCareServiceOutpatientClinic
InstanceOf: NatlDirHealthcareService
Description: "Rockville Clinic Outpatient Internal Medicine Service"
Usage: #example
* meta.profile = Canonical(NatlDirHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#Outpatient
* specialty = $NUCCProviderTaxonomy#3336C0003X   // Fix to Internal Medicine
* providedBy = Reference(OrganizationInternalMedicineLLC)
* location[0] = Reference(RockvilleClinicLocation)

Instance: HealthCareServiceEmergency
InstanceOf: NatlDirHealthcareService
Description: "Rockville Hospital ER"
Usage: #example
* meta.profile = Canonical(NatlDirPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#Emergency 
* providedBy = Reference(OrganizationRockvilleHospital)
* location[0] = Reference(RockvilleHospitalLocation)


Instance: PharmacyOrganizationAffiliation1
InstanceOf: NatlDirOrganizationAffiliation
Description: "Organization Affiliation for PharmacyOrganizationA"
Usage: #example
* id = "1"
* meta.profile = Canonical(NatlDirOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* network = Reference(AcmeOfCTSPreferredProviderNetwork)
* participatingOrganization = Reference (PharmacyOrganizationA)
* healthcareService = Reference(PharmacyAHealthCareService)
* location[0] = Reference(PharmacyLocation1)
* location[1] = Reference(PharmacyLocation2)

Instance: AcmeOfCTSPreferredProviderNetwork
InstanceOf: NatlDirNetwork
Description: "Acme of CT Preferred Provider Network"
Usage: #example
* id = "1"
* meta.profile = Canonical(NatlDirNetwork)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* partOf = Reference(PayerOrganizationA)
* type = #payer 

Instance: PharmacyLocation1
InstanceOf: NatlDirLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(NatlDirLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "CT Location 1"
* type = $V3RoleCode#OUTPHARM
Instance: PharmacyLocation2
InstanceOf: NatlDirLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(NatlDirLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "CT Location 2"
* type = $V3RoleCode#OUTPHARM

Instance: PharmacyLocation3
InstanceOf: NatlDirLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(NatlDirLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "MA Location 1"
* type = $V3RoleCode#OUTPHARM

Instance: PharmacyLocation4
InstanceOf: NatlDirLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(NatlDirLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "MA Location 2"
* type = $V3RoleCode#OUTPHARM

Instance: PayerOrganizationA
InstanceOf: NatlDirOrganization
Description: "Payer Organization"
Usage: #example
* meta.profile = Canonical(NatlDirOrganization)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "PayerA"
* type = $V3RoleCode#OUTPHARM
*/

---

File: repos/HL7_SLASH_fhir-directory-exchange/input/tmpfsh/PharmacyExamples.fsh

Instance: PharmChain
InstanceOf: NatlDirOrganization
Description: "Organization that Provides Pharmacy Services"
Usage: #example
* meta.profile = Canonical(NatlDirOrganization) 
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
InstanceOf: NatlDirOrganization
Description: "Organization that Manages 2 of PharmChain's pharmacies"
Usage: #example
* meta.profile =  Canonical(NatlDirOrganization) 
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
InstanceOf: NatlDirHealthcareService
Description: "Pharmacy Service provided by PharmChain"
Usage: #example
* meta.profile =  Canonical(NatlDirHealthcareService) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Pharmacy by PharmChain"
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
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
InstanceOf: NatlDirOrganizationAffiliation
Description: "Organization Affiliation for PharmChain (Retail)"
Usage: #example
* meta.profile =  Canonical(NatlDirOrganizationAffiliation)
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
InstanceOf: NatlDirOrganizationAffiliation
Description: "Organization Affiliation for PharmChain (Compounding)"
Usage: #example
* meta.profile = Canonical(NatlDirOrganizationAffiliation)
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
InstanceOf: NatlDirOrganizationAffiliation
Description: "Organization Affiliation for PharmChain (MailOrder)"
Usage: #example
* meta.profile = Canonical(NatlDirOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* network = Reference(AcmeofCTStdNet)
* participatingOrganization = Reference (PharmChain)
* healthcareService = Reference(PharmChainMailService)
* code = OrganizationAffiliationRoleCS#pharmacy 
* specialty = $NUCCProviderTaxonomy#3336M0002X "Mail Order Pharmacy"


Instance: PharmChainCompService
InstanceOf: NatlDirHealthcareService
Description: "Compound Pharmacy Service provided by PharmacyOrganization A"
Usage: #example
* meta.profile = Canonical(NatlDirHealthcareService) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Compounding Pharmacy by OrgA"
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#pharm "Pharmacy"
* specialty = $NUCCProviderTaxonomy#3336C0004X "Compounding Pharmacy"
* specialty.text = "Compounding Pharmacy"
* providedBy = Reference(PharmChain)
* location[0] = Reference(PharmLoc1)
* telecom.extension[via-intermediary].valueReference = Reference(PharmLoc1)

Instance: PharmChainMailService
InstanceOf: NatlDirHealthcareService
Description: "Mail Order Pharmacy Service provided by PharmacyOrganization A"
Usage: #example
* meta.profile = Canonical(NatlDirHealthcareService) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Mail Order Pharmacy by OrgA"
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#virtual
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
InstanceOf: NatlDirLocation
Description: "Location of Pharmacy1 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(NatlDirLocation) 
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
InstanceOf: NatlDirLocation
Description: "Location of Pharmacy2 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(NatlDirLocation) 
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
InstanceOf: NatlDirLocation
Description: "Location of Pharmacy3 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(NatlDirLocation) 
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
InstanceOf: NatlDirLocation
Description: "Location of Pharmacy4 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(NatlDirLocation) 
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

