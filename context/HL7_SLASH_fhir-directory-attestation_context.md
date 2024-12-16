File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/CapabilityStatement.NationalDirectory.fsh

Instance: NationalDirectoryCapabilityStatement
InstanceOf: CapabilityStatement
Title: "national-directory.meteorapp.com/metadata"
Description: "National Directory - Capability Statement"

Usage: #definition
* url = "https://national-directory.meteorapp.com/baseR4"
* name = "NationalCareDirectory"
* version = "0.1.0"
* status = #draft
* experimental = true
* publisher = "MITRE, Inc"
* kind = #capability
* date = "2022-05-03T03:25:00.108Z"
* software.version = "6.1.0"
* software.name = "Vault Server"
* software.releaseDate = "2022-05-03T03:25:00.108Z"
* fhirVersion = #4.0.1
* format = #json
* rest.mode = #server
* rest.resource[0].type = #AuditEvent
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].versioning = #no-version
* rest.resource[+].type = #Bundle
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].versioning = #no-version
* rest.resource[+].type = #CareTeam
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].versioning = #versioned
* rest.resource[+].type = #CodeSystem
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].versioning = #versioned
* rest.resource[+].type = #Communication
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].versioning = #versioned
* rest.resource[+].type = #CommunicationRequest
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].versioning = #no-version
* rest.resource[+].type = #Endpoint
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].versioning = #versioned
* rest.resource[+].type = #HealthcareService
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].versioning = #versioned
* rest.resource[+].type = #InsurancePlan
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].versioning = #versioned
* rest.resource[+].type = #Location
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].versioning = #versioned
* rest.resource[+].type = #Organization
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].versioning = #versioned
* rest.resource[+].type = #OrganizationAffiliation
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].versioning = #versioned
* rest.resource[+].type = #Practitioner
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].versioning = #versioned
* rest.resource[+].type = #PractitionerRole
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].versioning = #versioned
* rest.resource[+].type = #Provenance
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].versioning = #no-version
* rest.resource[+].type = #SearchParameter
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].versioning = #versioned
* rest.resource[+].type = #Task
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].versioning = #versioned
* rest.resource[+].type = #StructureDefinition
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].versioning = #versioned
* rest.resource[+].type = #Subscription
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].versioning = #no-version
* rest.resource[+].type = #ValueSet
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].versioning = #no-version
* rest.resource[+].type = #VerificationResult
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #patch
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].versioning = #versioned
* rest.security.extension.extension[0].url = "token"
* rest.security.extension.extension[=].valueUri = "https://national-directory.meteorapp.com/oauth/token"
* rest.security.extension.extension[+].url = "authorize"
* rest.security.extension.extension[=].valueUri = "https://national-directory.meteorapp.com/oauth/authorize"
* rest.security.extension.extension[+].url = "register"
* rest.security.extension.extension[=].valueUri = "https://national-directory.meteorapp.com/oauth/registration"
* rest.security.extension.extension[+].url = "manage"
* rest.security.extension.extension[=].valueUri = "https://national-directory.meteorapp.com/authorizations/manage"
* rest.security.extension.url = "http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Device-FederatedDir.fsh

Instance: DeviceFederatedDir
InstanceOf: Device
Title: "Device/dXuinjribcN2ARYXv"
Description: "Device - Federated Directory"
Usage: #example
* id = "dXuinjribcN2ARYXv"


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Device-NatDir.fsh

Instance: DeviceNatDir
InstanceOf: Device
Title: "Device/dTixApQCHxxheiLX3"
Description: "Device - National Directory"
Usage: #example
* id = "dTixApQCHxxheiLX3"


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Endpoint-AcmeOfCTPortalEndpoint.fsh

Instance: AcmeOfCTPortalEndpoint
InstanceOf: NatlDirAttestEndPoint
Description: "Endpoint for Acme of CT Portal"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* extension[0].extension.url = "endpointType"
* extension[=].extension.valueCodeableConcept = http://hl7.org/fhir/us/directory-query/CodeSystem/EndpointTypeCS#FHIR
* extension[=].url = "http://hl7.org/fhir/us/directory-query/StructureDefinition/endpointType"
* extension[+].extension[0].url = "endpointUsecasetype"
* extension[=].extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT
* extension[=].extension[+].url = "standard"
* extension[=].extension[=].valueUri = "www.hl7.org"
* extension[=].url = "http://hl7.org/fhir/us/directory-query/StructureDefinition/endpoint-usecase"
* extension[+].url = "http://hl7.org/fhir/us/directory-query/StructureDefinition/secureEndpoint"
* extension[=].valueBoolean = false
* extension[+].extension.url = "igsSupportedType"
* extension[=].extension.valueCodeableConcept = http://hl7.org/fhir/us/directory-query/CodeSystem/IgTypeCS#FHIR
* extension[=].url = "http://hl7.org/fhir/us/directory-query/StructureDefinition/igsSupported"
* extension[+].extension[0].url = "associatedServersType"
* extension[=].extension[=].valueString = "FHIR"
* extension[=].extension[+].url = "serverURL"
* extension[=].extension[=].valueString = "www.hl7.org"
* extension[=].url = "http://hl7.org/fhir/us/directory-query/StructureDefinition/associatedServers"
* extension[+].extension[0].url = "version"
* extension[=].extension[=].valueString = "V1"
* extension[=].extension[+].url = "binary"
* extension[=].extension[=].valueString = "1"
* extension[=].url = "http://hl7.org/fhir/us/directory-query/StructureDefinition/dynamicRegistration"
* extension[+].extension[0].url = "secureExchangeArtifactsType"
* extension[=].extension[=].valueString = "1"
* extension[=].extension[+].url = "certificate"
* extension[=].extension[=].valueBase64Binary = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvck9wdGlvbnMiIDogIiIsCiAgICAgICAgICJ0eXBlIiA6ICJDcWxUb0VsbUluZm8iCiAgICAgIH0gXSwKICAgICAgImlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogIlRlc3RpbmdDcWxMaWJyYXJ5IiwKICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICB9LAogICAgICAic2NoZW1hSWRlbnRpZmllciIgOiB7CiAgICAgICAgICJpZCIgOiAidXJuOmhsNy1vcmc6ZWxtIiwKICAgICAgICAgInZlcnNpb24iIDogInIxIgogICAgICB9LAogICAgICAidXNpbmdzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiU3lzdGVtIiwKICAgICAgICAgICAgInVyaSIgOiAidXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVIiLAogICAgICAgICAgICAidXJpIiA6ICJodHRwOi8vaGw3Lm9yZy9maGlyIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImluY2x1ZGVzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAicGF0aCIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiNC4wLjEiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZXR1cm5zVHJ1ZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJldHVybnNGYWxzZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiZmFsc2UiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbHNvUmV0dXJuc1RydWUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogInRydWUiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbm90aGVyVHJ1ZVN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkJ1dElBbUZhbHNlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgInZhbHVlIiA6ICJmYWxzZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFsc29GYWxzZUhlcmUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogImZhbHNlIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjQwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjIuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcnVlTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJHcmVhdGVyIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGYWxzZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTGVzcyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVHJ1ZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiR3JlYXRlciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFub3RoZXJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMZXNzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmV0dXJuc0FDb2RlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlIiwKICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJjb2RpbmciLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGUiLAogICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInN5c3RlbSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJodHRwOi8vc25vbWVkLmluZm8vc2N0IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiY29kZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDgyODAwNCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRpc3BsYXkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiUG9zaXRpdmUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAidGV4dCIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJJJ20gc29tZXRoaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0KICAgfQp9Cgo="
* extension[=].extension[+].url = "expirationDate"
* extension[=].extension[=].valueDateTime = "2024-07-07T13:26:22.0314215+00:00"
* extension[=].url = "http://hl7.org/fhir/us/directory-query/StructureDefinition/secureExchangeArtifacts"
* extension[+].extension[0].url = "trustFrameworkType"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/directory-query/CodeSystem/TrustFrameworkTypeCS#Commonwell
* extension[=].extension[+].url = "qualifier"
* extension[=].extension[=].valueString = "Yes"
* extension[=].extension[+].url = "signedArtifact"
* extension[=].extension[=].valueBase64Binary = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvck9wdGlvbnMiIDogIiIsCiAgICAgICAgICJ0eXBlIiA6ICJDcWxUb0VsbUluZm8iCiAgICAgIH0gXSwKICAgICAgImlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogIlRlc3RpbmdDcWxMaWJyYXJ5IiwKICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICB9LAogICAgICAic2NoZW1hSWRlbnRpZmllciIgOiB7CiAgICAgICAgICJpZCIgOiAidXJuOmhsNy1vcmc6ZWxtIiwKICAgICAgICAgInZlcnNpb24iIDogInIxIgogICAgICB9LAogICAgICAidXNpbmdzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiU3lzdGVtIiwKICAgICAgICAgICAgInVyaSIgOiAidXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVIiLAogICAgICAgICAgICAidXJpIiA6ICJodHRwOi8vaGw3Lm9yZy9maGlyIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImluY2x1ZGVzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAicGF0aCIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiNC4wLjEiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZXR1cm5zVHJ1ZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJldHVybnNGYWxzZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiZmFsc2UiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbHNvUmV0dXJuc1RydWUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogInRydWUiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbm90aGVyVHJ1ZVN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkJ1dElBbUZhbHNlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgInZhbHVlIiA6ICJmYWxzZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFsc29GYWxzZUhlcmUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogImZhbHNlIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjQwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjIuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcnVlTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJHcmVhdGVyIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGYWxzZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTGVzcyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVHJ1ZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiR3JlYXRlciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFub3RoZXJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMZXNzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmV0dXJuc0FDb2RlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlIiwKICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJjb2RpbmciLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGUiLAogICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInN5c3RlbSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJodHRwOi8vc25vbWVkLmluZm8vc2N0IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiY29kZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDgyODAwNCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRpc3BsYXkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiUG9zaXRpdmUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAidGV4dCIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJJJ20gc29tZXRoaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0KICAgfQp9Cgo="
* extension[=].extension[+].url = "publicCertificate"
* extension[=].extension[=].valueBase64Binary = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvck9wdGlvbnMiIDogIiIsCiAgICAgICAgICJ0eXBlIiA6ICJDcWxUb0VsbUluZm8iCiAgICAgIH0gXSwKICAgICAgImlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogIlRlc3RpbmdDcWxMaWJyYXJ5IiwKICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICB9LAogICAgICAic2NoZW1hSWRlbnRpZmllciIgOiB7CiAgICAgICAgICJpZCIgOiAidXJuOmhsNy1vcmc6ZWxtIiwKICAgICAgICAgInZlcnNpb24iIDogInIxIgogICAgICB9LAogICAgICAidXNpbmdzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiU3lzdGVtIiwKICAgICAgICAgICAgInVyaSIgOiAidXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVIiLAogICAgICAgICAgICAidXJpIiA6ICJodHRwOi8vaGw3Lm9yZy9maGlyIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImluY2x1ZGVzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAicGF0aCIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiNC4wLjEiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZXR1cm5zVHJ1ZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJldHVybnNGYWxzZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiZmFsc2UiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbHNvUmV0dXJuc1RydWUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogInRydWUiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbm90aGVyVHJ1ZVN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkJ1dElBbUZhbHNlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgInZhbHVlIiA6ICJmYWxzZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFsc29GYWxzZUhlcmUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogImZhbHNlIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjQwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjIuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcnVlTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJHcmVhdGVyIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGYWxzZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTGVzcyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVHJ1ZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiR3JlYXRlciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFub3RoZXJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMZXNzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmV0dXJuc0FDb2RlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlIiwKICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJjb2RpbmciLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGUiLAogICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInN5c3RlbSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJodHRwOi8vc25vbWVkLmluZm8vc2N0IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiY29kZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDgyODAwNCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRpc3BsYXkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiUG9zaXRpdmUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAidGV4dCIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJJJ20gc29tZXRoaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0KICAgfQp9Cgo="
* extension[=].url = "http://hl7.org/fhir/us/directory-query/StructureDefinition/trustFramework"
* status = #active
* connectionType = http://hl7.org/fhir/us/directory-query/CodeSystem/EndpointConnectionTypeCS#rest-non-fhir
* name = "Endpoint for Acme of CT Portal"
* payloadType = http://hl7.org/fhir/us/directory-query/CodeSystem/EndpointPayloadTypeCS#NA
* address = "https://urlofportal.acmect.com"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/ExampleScenario-DaVinciDeqm.fsh

// Instance: DaVinciDeqm
// InstanceOf: ExampleScenario
// Title: "DaVinci - Signed Measure Report"
// Description: "Scenario - DaVinci DEQM Provenance"
// Usage: #definition

// * status = #active
// * actor[0].actorId = "m6AJtyEk6sSsHWLjt"
// * actor[=].type = #entity
// * actor[=].name = "St. Jame’s Infirmary"
// * actor[+].actorId = "fZzusFYr3PBYyRnot"
// * actor[=].type = #person
// * actor[=].name = "Allison Camron, MD"

// * instance[0].resourceId = "l4bjaZGQfeNfhAEpb"
// * instance[=].resourceType = #Location
// * instance[=].name = "456 Main Street Anytown CT 00014-1234"
// * instance[+].resourceId = "hsEk35Ayonz755t6u"
// * instance[=].resourceType = #HealthcareService
// * instance[=].name = "Emergency Medicine"
// * instance[+].resourceId = "etKzBJvzbeHDZi7Gd"
// * instance[=].resourceType = #Endpoint
// * instance[=].name = "St. James Portal"

// * process[0].title = "Query directory for St. James Infirmary"
// * process[=].preConditions = ""
// * process[=].postConditions = ""
// * process[=].step[0].operation.number = "1"
// * process[=].step[=].operation.type = "read"
// * process[=].step[=].operation.initiator = "Organization/oPxE9d7Wtqjy9WEZx"
// * process[=].step[=].operation.receiver = "Device/dTixApQCHxxheiLX3"
// * process[=].step[=].operation.name = "Query St. James FHIR server for monthly care gaps report"
// * process[=].step[=].operation.description = "/MeasureReport?measure=12345&date=202205"



---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/ExampleScenario-DynamicClientRegistration.fsh

Instance: DynamicClientRegistrationScenario
InstanceOf: ExampleScenario
Title: "Dynamic Client Registration Scenario"
Description: "Scenario - Dynamic Client Registration"
Usage: #example
* id = "RsW5oCHfnQejTw9Jd"
* status = #active

* actor[0].actorId = "m6AJtyEk6sSsHWLjt"
* actor[=].type = #entity
* actor[=].name = "St. Jame’s Infirmary"
* actor[+].actorId = "fZzusFYr3PBYyRnot"
* actor[=].type = #person
* actor[=].name = "Allison Camron, MD"
* instance[0].resourceId = "l4bjaZGQfeNfhAEpb"
* instance[=].resourceType = #Location
* instance[=].name = "456 Main Street Anytown CT 00014-1234"
* instance[+].resourceId = "hsEk35Ayonz755t6u"
* instance[=].resourceType = #HealthcareService
* instance[=].name = "Emergency Medicine Physician"
* instance[+].resourceId = "etKzBJvzbeHDZi7Gd"
* instance[=].resourceType = #Endpoint
* instance[=].name = "St. James Portal"


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/ExampleScenario-FederatedQuery.fsh

Instance: FederatedQueryScenario
InstanceOf: ExampleScenario
Title: "Federated Endpoint Query"
Description: "Scenario - Federated Endpoint Query"
Usage: #example
* id = "N4qis3v6pkhtJrPFK"
* status = #active

* actor[0].actorId = "m6AJtyEk6sSsHWLjt"
* actor[=].type = #entity
* actor[=].name = "St. Jame’s Infirmary"
* actor[+].actorId = "fZzusFYr3PBYyRnot"
* actor[=].type = #person
* actor[=].name = "Allison Camron, MD"

* instance[0].resourceId = "l4bjaZGQfeNfhAEpb"
* instance[=].resourceType = #Location
* instance[=].name = "456 Main Street Anytown CT 00014-1234"

* instance[+].resourceId = "hsEk35Ayonz755t6u"
* instance[=].resourceType = #HealthcareService
* instance[=].name = "Emergency Medicine"

* instance[+].resourceId = "etKzBJvzbeHDZi7Gd"
* instance[=].resourceType = #Endpoint
* instance[=].name = "St. James Portal"

* instance[+].resourceId = "dTixApQCHxxheiLX3"
* instance[=].resourceType = #Device
* instance[=].name = "Distributed App (DApp)"

* instance[+].resourceId = "oPxE9d7Wtqjy9WEZx"
* instance[=].resourceType = #Device
* instance[=].name = "National Directory"


* process[0].title = "Query directory for St. James Infirmary"
* process[=].preConditions = ""
* process[=].postConditions = ""
* process[=].step[0].operation.number = "1"
* process[=].step[=].operation.type = "get"
* process[=].step[=].operation.initiator = "Organization/oPxE9d7Wtqjy9WEZx"
* process[=].step[=].operation.receiver = "Device/dTixApQCHxxheiLX3"
* process[=].step[=].operation.name = "Query directory for St. James Infirmary organization"
* process[=].step[=].operation.description = "/Organization?name=St. James Infirmary"

* process[=].step[+].operation.number = "2"
* process[=].step[=].operation.type = "get"
* process[=].step[=].operation.initiator = "Organization/oPxE9d7Wtqjy9WEZx"
* process[=].step[=].operation.receiver = "Device/dTixApQCHxxheiLX3"
* process[=].step[=].operation.name = "Query directory for street address"
* process[=].step[=].operation.description = "/Location?address=456 Main Street"

* process[=].step[+].operation.number = "3"
* process[=].step[=].operation.type = "get"
* process[=].step[=].operation.initiator = "Organization/oPxE9d7Wtqjy9WEZx"
* process[=].step[=].operation.receiver = "Device/dTixApQCHxxheiLX3"
* process[=].step[=].operation.name = "Query directory for street address"
* process[=].step[=].operation.description = "/Location?address-postalcode=00014"

* process[=].step[+].operation.number = "4"
* process[=].step[=].operation.type = "get"
* process[=].step[=].operation.initiator = "Organization/oPxE9d7Wtqjy9WEZx"
* process[=].step[=].operation.receiver = "Device/dTixApQCHxxheiLX3"
* process[=].step[=].operation.name = "Query directory for local services"
* process[=].step[=].operation.description = "/HealthcareService?category=emergency"

* process[=].step[+].operation.number = "5"
* process[=].step[=].operation.type = "get"
* process[=].step[=].operation.initiator = "Organization/oPxE9d7Wtqjy9WEZx"
* process[=].step[=].operation.receiver = "Device/dTixApQCHxxheiLX3"
* process[=].step[=].operation.name = "Query directory for local services"
* process[=].step[=].operation.description = "/Endpoint?name=St. James"

* process[=].step[+].operation.number = "6"
* process[=].step[=].operation.type = "get"
* process[=].step[=].operation.initiator = "Organization/oPxE9d7Wtqjy9WEZx"
* process[=].step[=].operation.receiver = "Device/dTixApQCHxxheiLX3"
* process[=].step[=].operation.name = "Query directory for physician"
* process[=].step[=].operation.description = "/Practitioner?name=Camron"





---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/ExampleScenario-NewFacilityAttestation.fsh

Instance: AttestationScenario
InstanceOf: ExampleScenario
Title: "New Facility Attestation"
Description: "Scenario - New Facility Attestation"
Usage: #example
* id = "PAsijcfHEKD9siu4h"
* status = #active

* actor[0].actorId = "m6AJtyEk6sSsHWLjt"
* actor[=].type = #entity
* actor[=].name = "St. Jame’s Infirmary"
* actor[+].actorId = "fZzusFYr3PBYyRnot"
* actor[=].type = #person
* actor[=].name = "Allison Camron, MD"


* instance[0].resourceId = "l4bjaZGQfeNfhAEpb"
* instance[=].resourceType = #Location
* instance[=].name = "456 Main Street Anytown CT 00014-1234"
* instance[+].resourceId = "hsEk35Ayonz755t6u"
* instance[=].resourceType = #HealthcareService
* instance[=].name = "Emergency Medicine Physician"
* instance[+].resourceId = "etKzBJvzbeHDZi7Gd"
* instance[=].resourceType = #Endpoint
* instance[=].name = "St. James Portal"


* instance[+].resourceId = "dTixApQCHxxheiLX3"
* instance[=].resourceType = #Device
* instance[=].name = "Distributed App (DApp)"

* instance[+].resourceId = "oPxE9d7Wtqjy9WEZx"
* instance[=].resourceType = #Device
* instance[=].name = "National Directory"


* process[0].title = "Query directory for St. James Infirmary"
* process[=].preConditions = ""
* process[=].postConditions = ""
* process[=].step[0].operation.number = "1"
* process[=].step[=].operation.type = "post"
* process[=].step[=].operation.initiator = "Organization/oPxE9d7Wtqjy9WEZx"
* process[=].step[=].operation.receiver = "Device/dTixApQCHxxheiLX3"
* process[=].step[=].operation.name = "Attest St. James Infirmary organization to the National Directory"
* process[=].step[=].operation.description = "/Organization/123"

* process[=].step[+].operation.number = "2"
* process[=].step[=].operation.type = "post"
* process[=].step[=].operation.initiator = "Organization/oPxE9d7Wtqjy9WEZx"
* process[=].step[=].operation.receiver = "Device/dTixApQCHxxheiLX3"
* process[=].step[=].operation.name = "Attest street address  to the National Directory"
* process[=].step[=].operation.description = "/Location/123"

* process[=].step[+].operation.number = "3"
* process[=].step[=].operation.type = "post"
* process[=].step[=].operation.initiator = "Organization/oPxE9d7Wtqjy9WEZx"
* process[=].step[=].operation.receiver = "Device/dTixApQCHxxheiLX3"
* process[=].step[=].operation.name = "Attest local services to the National Directory"
* process[=].step[=].operation.description = "/HealthcareService/123"

* process[=].step[+].operation.number = "4"
* process[=].step[=].operation.type = "post"
* process[=].step[=].operation.initiator = "Organization/oPxE9d7Wtqjy9WEZx"
* process[=].step[=].operation.receiver = "Device/dTixApQCHxxheiLX3"
* process[=].step[=].operation.name = "Attest local services to the National Directory"
* process[=].step[=].operation.description = "/Endpoint/123"

* process[=].step[+].operation.number = "5"
* process[=].step[=].operation.type = "post"
* process[=].step[=].operation.initiator = "Organization/oPxE9d7Wtqjy9WEZx"
* process[=].step[=].operation.receiver = "Device/dTixApQCHxxheiLX3"
* process[=].step[=].operation.name = "Attest physician to the National Directory"
* process[=].step[=].operation.description = "/Practitioner/123"


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/ExampleScenario-RestrictedWomensShelterAccess.fsh

Instance: WomensShelterScenario
InstanceOf: ExampleScenario
Title: "Protected Womens' Shelters"
Description: "Scenario - Restricted Womens' Shelter Access"
Usage: #example
* id = "5psortwYNqr2vLNwQ"
* status = #active

* actor[0].actorId = "m6AJtyEk6sSsHWLjt"
* actor[=].type = #entity
* actor[=].name = "St. Jame’s Infirmary"
* actor[+].actorId = "fZzusFYr3PBYyRnot"
* actor[=].type = #person
* actor[=].name = "Allison Camron, MD"
* instance[0].resourceId = "l4bjaZGQfeNfhAEpb"
* instance[=].resourceType = #Location
* instance[=].name = "St. James Infirmary - 456 Main Street Anytown CT 00014-1234"
* instance[+].resourceId = "hsEk35Ayonz755t6u"
* instance[=].resourceType = #HealthcareService
* instance[=].name = "Emergency Medicine Physician"
* instance[+].resourceId = "etKzBJvzbeHDZi7Gd"
* instance[=].resourceType = #Endpoint
* instance[=].name = "St. James Portal"
* instance[+].resourceId = "lWAKMdp4vCeNzcDJp"
* instance[=].resourceType = #Location
* instance[=].name = "Women's Shelter"
* instance[+].resourceId = "cotkDnGQjpHijDsRR"
* instance[=].resourceType = #Consent
* instance[=].name = "Social worker Consent for accessing women's shelter"
* instance[+].resourceId = "htvgKJ4Huue7f5Fqz"
* instance[=].resourceType = #Practitioner
* instance[=].name = "Susie Song, Social Worker"



---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/ExampleScenario-Subscriptions.fsh

Instance: SubscriptionsScenario
InstanceOf: ExampleScenario
Title: "ExampleScenario/4D7XtHwNtteDczynb"
Description: "Scenario - Subscriptions between National and Federated directories"
Usage: #example
* id = "4D7XtHwNtteDczynb"
* status = #active

// * actor[0].actorId = "m6AJtyEk6sSsHWLjt"
// * actor[=].type = #entity
// * actor[=].name = "St. Jame’s Infirmary"
// * actor[+].actorId = "fZzusFYr3PBYyRnot"
// * actor[=].type = #person
// * actor[=].name = "Allison Camron, MD"
// * instance[0].resourceId = "l4bjaZGQfeNfhAEpb"
// * instance[=].resourceType = #Location
// * instance[=].name = "456 Main Street Anytown CT 00014-1234"
// * instance[+].resourceId = "hsEk35Ayonz755t6u"
// * instance[=].resourceType = #HealthcareService
// * instance[=].name = "Emergency Medicine Physician"
// * instance[+].resourceId = "etKzBJvzbeHDZi7Gd"
// * instance[=].resourceType = #Endpoint
// * instance[=].name = "St. James Portal"


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/ExampleScenario-VerifyPractitionerCredentials.fsh

Instance: VerificationScenario
InstanceOf: ExampleScenario
Title: "Verify Practitioner Credentials"
Description: "Scenario - Verify Practitioner Credentials"
Usage: #example
* id = "DX6RLSCje9KkEcHRt"
* status = #active

* actor[0].actorId = "Practitioner/m6AJtyEk6sSsHWLjt"
* actor[=].type = #entity
* actor[=].name = "St. Jame’s Infirmary"
* actor[+].actorId = "Organization/fZzusFYr3PBYyRnot"
* actor[=].type = #person
* actor[=].name = "Allison Camron, MD"
* instance[0].resourceId = "l4bjaZGQfeNfhAEpb"
* instance[=].resourceType = #Location
* instance[=].name = "456 Main Street Anytown CT 00014-1234"
* instance[+].resourceId = "hsEk35Ayonz755t6u"
* instance[=].resourceType = #HealthcareService
* instance[=].name = "Emergency Medicine Physician"
* instance[+].resourceId = "etKzBJvzbeHDZi7Gd"
* instance[=].resourceType = #Endpoint
* instance[=].name = "St. James Portal"


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/HealthcareService-BurrClinicServices.fsh



Instance: ServiceBurrClinic
InstanceOf: NatlDirAttestHealthCareService
Description: "Hans Solo Services"
Usage: #example
* meta.profile = Canonical(NatlDirAttestHealthCareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* id = "hsMPDyHBr9gABHb2n"
* active = true
* providedBy = Reference(OrganizationBurrClinic)
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = $NatlDirectoryHealthcareServiceDeliveryMthdCS#physical
* category = $NatlDirectoryHealthcareServiceCatCS#outpat 
* specialty = $NUCCProviderTaxonomy#207Q00000X "Family Medicine Physician"  
* location[0] = Reference(HospLoc1)


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/HealthcareService-CancerClinicService.fsh


Instance: ServiceCancerClinic
InstanceOf: NatlDirAttestHealthCareService
Title: "HealthcareService/hsutdKbC5QCe7Xtfn"
Description: "HealthcareService - Medical Oncology"
Usage: #example
* meta.profile = Canonical(NatlDirAttestHealthCareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* id = "hsutdKbC5QCe7Xtfn"
* active = true
* providedBy = Reference(OrganizationBurrClinic)
* extension[deliverymethod].extension[deliveryMethodtype].valueCodeableConcept = $NatlDirectoryHealthcareServiceDeliveryMthdCS#physical
* category = $NatlDirectoryHealthcareServiceCatCS#outpat 
* specialty = $NUCCProviderTaxonomy#207Q00000X "Family Medicine Physician"  
* location = Reference(CancerClinicLoc)


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/HealthcareService-HamiltonClinicServices.fsh

Instance: ServiceHamiltonClinic
InstanceOf: HealthcareService
Title: "HealthcareService/hspy9XZcsSMcY3DJc"
Description: "HealthcareService - Family Medicine"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"
* language = #en-US
* id = "hspy9XZcsSMcY3DJc"
* extension.extension.url = "type"
* extension.extension.valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS#physical
* extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
* active = true
* providedBy = Reference(OrganizationHamiltonClinic)
* category = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS#outpat
// * specialty = http://nucc.org/provider-taxonomy#207Q00000X "Family Medicine Physician"
* location = Reference(HospLoc1)

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/HealthcareService-HansSoloService.fsh

Instance: ServiceHansSolo
InstanceOf: HealthcareService
Title: "HealthcareService/hsZchHy4Z3ufZw3tP"
Description: "HealthcareService - Family Medicine Solo Practice"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"
* language = #en-US
* id = "hsZchHy4Z3ufZw3tP"
* extension.extension.url = "type"
* extension.extension.valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS#physical
* extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
* active = true
* category = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS#outpat
// * specialty = http://nucc.org/provider-taxonomy#207Q00000X "Family Medicine Physician"
* location = Reference(CancerClinicLoc)

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/HealthcareService-HartfordOrthopedicServices.fsh

Instance: ServiceHartfordOrthopedic
InstanceOf: HealthcareService
Title: "HealthcareService/hstqm7dvng64GJYeA"
Description: "HealthcareService - Hartford Orthopedics"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"
* language = #en-US
* id = "hstqm7dvng64GJYeA"
* extension.extension.url = "type"
* extension.extension.valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS#physical
* extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
* active = true
* providedBy = Reference(OrganizationHartfordOrthopedics)
* category = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS#prov
// * specialty = http://nucc.org/provider-taxonomy#207X00000X "Orthopaedic Surgery Physician"
* location[0] = Reference(HospLoc1)
* location[+] = Reference(HospLoc2)

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/HealthcareService-HospERService.fsh

Instance: ServiceHospER
InstanceOf: HealthcareService
Title: "HealthcareService/hsEk35Ayonz755t6u"
Description: "HealthcareService - Emergency Medical Services"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"
* language = #en-US
* id = "hsEk35Ayonz755t6u"
* extension.extension.url = "type"
* extension.extension.valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS#physical
* extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
* active = true
* providedBy = Reference(OrganizationHospital)
* category = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS#emerg
// * specialty = http://nucc.org/provider-taxonomy#207P00000X "Emergency Medicine Physician"
* location = Reference(HospLoc1)

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/HealthcareService-PharmChainCompService.fsh

Instance: ServicePharmChainComp
InstanceOf: HealthcareService
Title: "HealthcareService/hsMgv7tiYyaGsijG9"
Description: "HealthcareService - Pharmacy chain compounding pharmacy service"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"
* language = #en-US
* id = "hsMgv7tiYyaGsijG9"
* extension.extension.url = "type"
* extension.extension.valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS#physical
* extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
* active = true
* providedBy = Reference(OrganizationPharmChain)
* category = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS#pharm "Pharmacy"
// * specialty = http://nucc.org/provider-taxonomy#3336C0004X "Compounding Pharmacy"
// * specialty.text = "Compounding Pharmacy"
* location = Reference(PharmLoc1)
* name = "Compounding Pharmacy by OrgA"
* telecom.extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/via-intermediary"
* telecom.extension.valueReference = Reference(PharmLoc1)

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/HealthcareService-PharmChainMailService.fsh

Instance: ServicePharmChainMail
InstanceOf: HealthcareService
Title: "HealthcareService/hs53YAqF9RbwE8K2n"
Description: "HealthcareService - Pharmacy chain mail service"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"
* language = #en-US
* id = "hs53YAqF9RbwE8K2n"
* extension.extension[0].url = "type"
* extension.extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS#virtual
* extension.extension[+].url = "virtualModalities"
* extension.extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS#web
* extension.extension[+].url = "virtualModalities"
* extension.extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS#app
* extension.extension[+].url = "virtualModalities"
* extension.extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS#tdd
* extension.extension[+].url = "virtualModalities"
* extension.extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS#phone
* extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
* active = true
* providedBy = Reference(OrganizationPharmChain)
* category = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS#pharm "Pharmacy"
// * specialty = http://nucc.org/provider-taxonomy#3336M0002X "Mail Order Pharmacy"
* name = "Mail Order Pharmacy by OrgA"
* telecom[0].system = #phone
* telecom[=].value = "(111)-222-3333"
* telecom[=].rank = 2
* telecom[+].system = #url
* telecom[=].value = "https://mailorderrx.com"
* telecom[=].rank = 1

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/HealthcareService-PharmChainRetailService.fsh

Instance: ServicePharmChainRetail
InstanceOf: HealthcareService
Title: "HealthcareService/hspFQ5Zbyc7hTzsAw"
Description: "HealthcareService - Pharmacy chain retail service"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"
* language = #en-US
* id = "hspFQ5Zbyc7hTzsAw"
* extension[0].extension.url = "type"
* extension[=].extension.valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS#physical
* extension[=].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
* extension[+].extension[0].url = "acceptingPatients"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AcceptingPatientsCS#existptonly
* extension[=].extension[+].url = "fromNetwork"
* extension[=].extension[=].valueReference = Reference(OrganizationAcmeofCTStdNet)
* extension[=].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients"
* active = true
* providedBy = Reference(OrganizationPharmChain)
* category = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS#pharm "Pharmacy"
// * specialty = http://nucc.org/provider-taxonomy#3336C0003X "Community/Retail Pharmacy"
* location[0] = Reference(PharmLoc1)
* location[+] = Reference(PharmLoc2)
* location[+] = Reference(PharmLoc3)
* location[+] = Reference(PharmLoc4)
* name = "Pharmacy by PharmChain"
* telecom.extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/via-intermediary"
* telecom.extension.valueReference = Reference(OrganizationPharmChain)

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/HealthcareService-VirtualCounselService.fsh

Instance: ServiceVirtualCounsel
InstanceOf: HealthcareService
Title: "HealthcareService/hsn93H9RbKTSH57AY"
Description: "HealthcareService - Virtual telehealth visit with professional counselor"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"
* language = #en-US
* id = "hsn93H9RbKTSH57AY"
* extension.extension[0].url = "type"
* extension.extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS#virtual
* extension.extension[+].url = "virtualModalities"
* extension.extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS#web
* extension.extension[+].url = "virtualModalities"
* extension.extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS#app
* extension.extension[+].url = "virtualModalities"
* extension.extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS#tdd
* extension.extension[+].url = "virtualModalities"
* extension.extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS#phone
* extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
* active = true
* category = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS#prov "Medical Provider"
// * specialty = http://nucc.org/provider-taxonomy#101YP2500X "Professional Counselor"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/InsurancePlan-AcmeQHPBronze.fsh

Instance: AcmeQHPBronze
InstanceOf: NatlDirAttestInsurancePlan
Title: "InsurancePlan/ipZFESpMpTshnEMrD"
Description: "Acme of Conneticut - Bronze Plan"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-InsurancePlan"
* language = #en-US
* id = "ipZFESpMpTshnEMrD"
* status = #active
* type = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/InsuranceProductTypeCS#qhp "Qualified Health Plan"
* name = "Acme of CT QHP Bronze"
* ownedBy = Reference(OrganizationAcme)
* administeredBy = Reference(OrganizationAcme)
* coverageArea = Reference(StateOfCTLocation)
* endpoint = Reference(AcmeOfCTPortalEndpoint)
* network = Reference(OrganizationAcmeofCTStdNet)
* plan.type = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/InsurancePlanTypeCS#bronze "Bronze-QHP"



---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/InsurancePlan-AcmeQHPGold.fsh

Instance: AcmeQHPGold
InstanceOf: InsurancePlan
Title: "InsurancePlan/ipHFxNkt6vAvN7qEG"
Description: "Acme of Conneticut - Gold Plan"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-InsurancePlan"
* language = #en-US
* id = "ipHFxNkt6vAvN7qEG"
* status = #active
* type = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/InsuranceProductTypeCS#qhp "Qualified Health Plan"
* name = "Acme of CT QHP Gold"
* ownedBy = Reference(OrganizationAcme)
* administeredBy = Reference(OrganizationAcme)
* coverageArea = Reference(StateOfCTLocation)
* endpoint = Reference(AcmeOfCTPortalEndpoint)
* network[0] = Reference(OrganizationAcmeofCTStdNet)
* network[+] = Reference(OrganizationAcmeofCTPremNet)
* plan.type = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/InsurancePlanTypeCS#gold "Gold-QHP"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/InsurancePlan-AcmeQHPSilver.fsh

Instance: AcmeQHPSilver
InstanceOf: InsurancePlan
Title: "InsurancePlan/ipHFxNktk8dvN7qEG"
Description: "Acme of Conneticut - Silver Plan"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-InsurancePlan"
* language = #en-US
* id = "ipHFxNktk8dvN7qEG"
* status = #active
* type = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/InsuranceProductTypeCS#qhp "Qualified Health Plan"
* name = "Acme of CT QHP Silver"
* ownedBy = Reference(OrganizationAcme)
* administeredBy = Reference(OrganizationAcme)
* coverageArea = Reference(StateOfCTLocation)
* endpoint = Reference(AcmeOfCTPortalEndpoint)
* network[0] = Reference(OrganizationAcmeofCTStdNet)
* network[+] = Reference(OrganizationAcmeofCTPremNet)
* plan.type = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/InsurancePlanTypeCS#silver "Silver-QHP"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Location-CancerClinicLoc.fsh

Instance: CancerClinicLoc
InstanceOf: NatlDirAttestLocation
Title: "Location/l4bjaZGQfeNfhAEpb"
Description: "456 Main Street, Anytown, CT, 00014"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* id = "l4bjaZGQfeNfhAEpb"
* status = #active
* name = "Cancer Clinic"
* type = http://terminology.hl7.org/CodeSystem/v3-RoleCode#HOSP
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
* managingOrganization = Reference(OrganizationHospital)
* telecom[1].system = #url
* telecom[1].value = "https://www.hgh.com"
* telecom[1].rank = 1
* address.line = "456 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 3
* position.latitude = 15
* managingOrganization = Reference(OrganizationBurrClinic)
* hoursOfOperation.daysOfWeek[0] = #mon
* hoursOfOperation.daysOfWeek[+] = #tue
* hoursOfOperation.daysOfWeek[+] = #wed
* hoursOfOperation.daysOfWeek[+] = #thu
* hoursOfOperation.daysOfWeek[+] = #fri

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Location-HospLoc1.fsh

Instance: HospLoc1
InstanceOf: NatlDirEndpointQryLocation
Title: "Location/lsH38uL5J3eYEQ5hJ"
Description: "456 Main Street, Anytown, CT 00014"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* id = "lsH38uL5J3eYEQ5hJ"
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
* managingOrganization = Reference(OrganizationHospital)
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


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Location-HospLoc2.fsh

Instance: HospLoc2
InstanceOf: Location
Title: "Location/lNxvHyHMFya5Bym6r"
Description: "123 Main Street, Anytown, CT, 00014"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"
* language = #en-US
* extension[0].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS#adacomp
* extension[+].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS#pubtrans
* status = #active
* id = "lNxvHyHMFya5Bym6r"
* name = "Hartford Hospital Location 2"
* type = http://terminology.hl7.org/CodeSystem/v3-RoleCode#HOSP
* telecom[0].extension.extension[0].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #mon
* telecom[=].extension.extension[+].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #tue
* telecom[=].extension.extension[+].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #wed
* telecom[=].extension.extension[+].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #thu
* telecom[=].extension.extension[+].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #fri
* telecom[=].extension.extension[+].url = "allDay"
* telecom[=].extension.extension[=].valueBoolean = true
* telecom[=].extension.extension[+].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #sat
* telecom[=].extension.extension[+].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #sun
* telecom[=].extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
* telecom[=].system = #phone
* telecom[=].value = "(111)-222-3333"
* telecom[=].rank = 2
* telecom[+].system = #url
* telecom[=].value = "https://www.hgh.com"
* telecom[=].rank = 1
* address.line = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 3
* position.latitude = 15
* managingOrganization = Reference(OrganizationHospital)
* hoursOfOperation.daysOfWeek[0] = #mon
* hoursOfOperation.daysOfWeek[+] = #tue
* hoursOfOperation.daysOfWeek[+] = #wed
* hoursOfOperation.daysOfWeek[+] = #thu
* hoursOfOperation.daysOfWeek[+] = #fri
* hoursOfOperation.daysOfWeek[+] = #sat
* hoursOfOperation.daysOfWeek[+] = #sun
* hoursOfOperation.allDay = true

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Location-PharmLoc1.fsh

Instance: PharmLoc1
InstanceOf: Location
Title: "Location/lMFvtQ9PuGhKCanxe"
Description: "123 Main Street, Anytown, CT, 00014"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"
* language = #en-US
* extension[0].extension[0].url = "acceptingPatients"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AcceptingPatientsCS#existptonly
* extension[=].extension[+].url = "fromNetwork"
* extension[=].extension[=].valueReference = Reference(OrganizationAcmeofCTStdNet)
* extension[=].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients"
* extension[+].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS#adacomp
* extension[+].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS#pubtrans
* status = #active
* id = "lMFvtQ9PuGhKCanxe"
* name = "OrgA CT Location 1"
* type = http://terminology.hl7.org/CodeSystem/v3-RoleCode#OUTPHARM "outpatient pharmacy"
* telecom[0].extension[0].extension[0].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #mon
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #tue
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #wed
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #thu
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #fri
* telecom[=].extension[=].extension[+].url = "allDay"
* telecom[=].extension[=].extension[=].valueBoolean = true
* telecom[=].extension[=].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
* telecom[=].extension[+].extension[0].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #sat
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #sun
* telecom[=].extension[=].extension[+].url = "availableStartTime"
* telecom[=].extension[=].extension[=].valueTime = "08:00:00"
* telecom[=].extension[=].extension[+].url = "availableEndTime"
* telecom[=].extension[=].extension[=].valueTime = "17:00:00"
* telecom[=].extension[=].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
* telecom[=].system = #phone
* telecom[=].value = "(111)-222-3333"
* telecom[=].rank = 2
* telecom[+].system = #url
* telecom[=].value = "https://www.orga.com"
* telecom[=].rank = 1
* address.line = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 3
* position.latitude = 15
* managingOrganization = Reference(OrganizationBigBox)
* hoursOfOperation[0].daysOfWeek[0] = #mon
* hoursOfOperation[=].daysOfWeek[+] = #tue
* hoursOfOperation[=].daysOfWeek[+] = #wed
* hoursOfOperation[=].daysOfWeek[+] = #thu
* hoursOfOperation[=].daysOfWeek[+] = #fri
* hoursOfOperation[=].allDay = true
* hoursOfOperation[+].daysOfWeek[0] = #sat
* hoursOfOperation[=].daysOfWeek[+] = #sun
* hoursOfOperation[=].openingTime = "08:00:00"
* hoursOfOperation[=].closingTime = "17:00:00"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Location-PharmLoc2.fsh

Instance: PharmLoc2
InstanceOf: Location
Title: "Location/lyW5mPW2nf3DHC7h6"
Description: "444 Main Street, Rainbow, CT, 00014"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"
* language = #en-US
* extension[0].extension[0].url = "acceptingPatients"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AcceptingPatientsCS#existptonly
* extension[=].extension[+].url = "fromNetwork"
* extension[=].extension[=].valueReference = Reference(OrganizationAcmeofCTStdNet)
* extension[=].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients"
* extension[+].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS#adacomp
* extension[+].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS#pubtrans
* status = #active
* id = "lyW5mPW2nf3DHC7h6"
* name = "OrgA CT Location 2"
* type = http://terminology.hl7.org/CodeSystem/v3-RoleCode#OUTPHARM "outpatient pharmacy"
* telecom[0].extension[0].extension[0].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #mon
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #tue
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #wed
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #thu
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #fri
* telecom[=].extension[=].extension[+].url = "allDay"
* telecom[=].extension[=].extension[=].valueBoolean = true
* telecom[=].extension[=].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
* telecom[=].extension[+].extension[0].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #sat
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #sun
* telecom[=].extension[=].extension[+].url = "availableStartTime"
* telecom[=].extension[=].extension[=].valueTime = "08:00:00"
* telecom[=].extension[=].extension[+].url = "availableEndTime"
* telecom[=].extension[=].extension[=].valueTime = "17:00:00"
* telecom[=].extension[=].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
* telecom[=].system = #phone
* telecom[=].value = "(777)-888-9999"
* telecom[=].rank = 2
* telecom[+].system = #url
* telecom[=].value = "https://www.orga.com"
* telecom[=].rank = 1
* address.line = "444 Main Street"
* address.city = "Rainbow"
* address.state = "CT"
* address.postalCode = "00014-1334"
* position.longitude = 9
* position.latitude = 18
* managingOrganization = Reference(OrganizationBigBox)
* hoursOfOperation[0].daysOfWeek[0] = #mon
* hoursOfOperation[=].daysOfWeek[+] = #tue
* hoursOfOperation[=].daysOfWeek[+] = #wed
* hoursOfOperation[=].daysOfWeek[+] = #thu
* hoursOfOperation[=].daysOfWeek[+] = #fri
* hoursOfOperation[=].allDay = true
* hoursOfOperation[+].daysOfWeek[0] = #sat
* hoursOfOperation[=].daysOfWeek[+] = #sun
* hoursOfOperation[=].openingTime = "08:00:00"
* hoursOfOperation[=].closingTime = "17:00:00"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Location-PharmLoc3.fsh

Instance: PharmLoc3
InstanceOf: Location
Title: "Location/lYG8WxBHX4HRoewaM"
Description: "456 Main Street, Somewhere, CT, 00014"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"
* language = #en-US
* extension[0].extension[0].url = "acceptingPatients"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AcceptingPatientsCS#existptonly
* extension[=].extension[+].url = "fromNetwork"
* extension[=].extension[=].valueReference = Reference(OrganizationAcmeofCTStdNet)
* extension[=].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients"
* extension[+].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS#adacomp
* extension[+].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS#pubtrans
* status = #active
* id = "lYG8WxBHX4HRoewaM"
* name = "OrgA MA Location 1"
* type = http://terminology.hl7.org/CodeSystem/v3-RoleCode#OUTPHARM "outpatient pharmacy"
* telecom[0].extension[0].extension[0].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #mon
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #tue
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #wed
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #thu
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #fri
* telecom[=].extension[=].extension[+].url = "allDay"
* telecom[=].extension[=].extension[=].valueBoolean = true
* telecom[=].extension[=].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
* telecom[=].extension[+].extension[0].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #sat
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #sun
* telecom[=].extension[=].extension[+].url = "availableStartTime"
* telecom[=].extension[=].extension[=].valueTime = "08:00:00"
* telecom[=].extension[=].extension[+].url = "availableEndTime"
* telecom[=].extension[=].extension[=].valueTime = "17:00:00"
* telecom[=].extension[=].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
* telecom[=].system = #phone
* telecom[=].value = "(444)-555-666"
* telecom[=].rank = 2
* telecom[+].system = #url
* telecom[=].value = "https://www.orga.com"
* telecom[=].rank = 1
* address.line = "456 Main Street"
* address.city = "Somewhere"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 7
* position.latitude = 12
* managingOrganization = Reference(OrganizationBigBox)
* hoursOfOperation[0].daysOfWeek[0] = #mon
* hoursOfOperation[=].daysOfWeek[+] = #tue
* hoursOfOperation[=].daysOfWeek[+] = #wed
* hoursOfOperation[=].daysOfWeek[+] = #thu
* hoursOfOperation[=].allDay = true
* hoursOfOperation[+].daysOfWeek = #sun
* hoursOfOperation[=].openingTime = "08:00:00"
* hoursOfOperation[=].closingTime = "17:00:00"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Location-Shelter1.fsh

Instance: PharmLoc4
InstanceOf: Location
Title: "Location/lWAKMdp4vCeNzcDJp"
Description: "Women's Shelter - 345 Main Street, Nowheresville, CT, 00014"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"
* language = #en-US
* extension[0].extension[0].url = "acceptingPatients"
* extension[=].extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AcceptingPatientsCS#existptonly
* extension[=].extension[+].url = "fromNetwork"
* extension[=].extension[=].valueReference = Reference(OrganizationAcmeofCTStdNet)
* extension[=].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients"
* extension[+].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
* extension[=].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS#adacomp
* status = #active
* id = "lWAKMdp4vCeNzcDJp"
* name = "Women's Shelter - 345 Main Street, Nowheresville, CT, 00014"
* type = http://terminology.hl7.org/CodeSystem/v3-RoleCode#OUTPHARM "outpatient pharmacy"
* telecom[0].extension[0].extension[0].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #mon
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #tue
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #wed
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #thu
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #fri
* telecom[=].extension[=].extension[+].url = "allDay"
* telecom[=].extension[=].extension[=].valueBoolean = true
* telecom[=].extension[=].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
* telecom[=].extension[+].extension[0].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #sat
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #sun
* telecom[=].extension[=].extension[+].url = "availableStartTime"
* telecom[=].extension[=].extension[=].valueTime = "08:00:00"
* telecom[=].extension[=].extension[+].url = "availableEndTime"
* telecom[=].extension[=].extension[=].valueTime = "17:00:00"
* telecom[=].extension[=].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
* telecom[=].system = #phone
* telecom[=].value = "(222)-333-4444"
* telecom[=].rank = 2
* telecom[+].system = #url
* telecom[=].value = "https://www.orga.com"
* telecom[=].rank = 1
* address.line = "345 Main Street"
* address.city = "Nowheresville"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 5
* position.latitude = 16
* managingOrganization = Reference(Organization-StJames)
* hoursOfOperation[0].daysOfWeek[0] = #mon
* hoursOfOperation[=].daysOfWeek[+] = #tue
* hoursOfOperation[=].daysOfWeek[+] = #wed
* hoursOfOperation[=].daysOfWeek[+] = #thu
* hoursOfOperation[=].daysOfWeek[+] = #fri
* hoursOfOperation[=].allDay = true
* hoursOfOperation[+].daysOfWeek = #sat
* hoursOfOperation[=].openingTime = "08:00:00"
* hoursOfOperation[=].closingTime = "21:00:00"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Location-StateOfCTLocation.fsh

Instance: StateOfCTLocation
InstanceOf: NatlDirEndpointQryLocation
Title: "Location/l3ParyXfseYrfcpJN"
Description: "State of Conneticut - Geographical Area"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"
* language = #en-US
* id = "l3ParyXfseYrfcpJN"
* extension.url = "http://hl7.org/fhir/StructureDefinition/location-boundary-geojson"
* extension.valueAttachment.contentType = #application/json
* extension.valueAttachment.data = "eyAidHlwZSI6ICJGZWF0dXJlIiwgInByb3BlcnRpZXMiOiB7ICJHRU9fSUQiOiAiMDQwMDAwMFVTMDkiLCAiU1RBVEUiOiAiMDkiLCAiTkFNRSI6ICJDb25uZWN0aWN1dCIsICJMU0FEIjogIiIsICJDRU5TVVNBUkVBIjogNDg0Mi4zNTUwMDAgfSwgImdlb21ldHJ5IjogeyAidHlwZSI6ICJNdWx0aVBvbHlnb24iLCAiY29vcmRpbmF0ZXMiOiBbIFsgWyBbIC03MS44NTk1NzAsIDQxLjMyMjM5OSBdLCBbIC03MS44NjgyMzUsIDQxLjMzMDk0MSBdLCBbIC03MS44ODYzMDIsIDQxLjMzNjQxMCBdLCBbIC03MS45MTY3MTAsIDQxLjMzMjIxNyBdLCBbIC03MS45MjIwOTIsIDQxLjMzNDUxOCBdLCBbIC03MS45MjMyODIsIDQxLjMzNTExMyBdLCBbIC03MS45MzYyODQsIDQxLjMzNzk1OSBdLCBbIC03MS45NDU2NTIsIDQxLjMzNzc5OSBdLCBbIC03MS45NTY3NDcsIDQxLjMyOTg3MSBdLCBbIC03MS45NzA5NTUsIDQxLjMyNDUyNiBdLCBbIC03MS45Nzk0NDcsIDQxLjMyOTk4NyBdLCBbIC03MS45ODIxOTQsIDQxLjMyOTg2MSBdLCBbIC03MS45ODgxNTMsIDQxLjMyMDU3NyBdLCBbIC03Mi4wMDAyOTMsIDQxLjMxOTIzMiBdLCBbIC03Mi4wMDUxNDMsIDQxLjMwNjY4NyBdLCBbIC03Mi4wMTA4MzgsIDQxLjMwNzAzMyBdLCBbIC03Mi4wMjE4OTgsIDQxLjMxNjgzOCBdLCBbIC03Mi4wODQ0ODcsIDQxLjMxOTYzNCBdLCBbIC03Mi4wOTQ0NDMsIDQxLjMxNDE2NCBdLCBbIC03Mi4wOTk4MjAsIDQxLjMwNjk5OCBdLCBbIC03Mi4xMTE4MjAsIDQxLjI5OTA5OCBdLCBbIC03Mi4xMzQyMjEsIDQxLjI5OTM5OCBdLCBbIC03Mi4xNjE1ODAsIDQxLjMxMDI2MiBdLCBbIC03Mi4xNzM5MjIsIDQxLjMxNzU5NyBdLCBbIC03Mi4xNzc2MjIsIDQxLjMyMjQ5NyBdLCBbIC03Mi4xODQxMjIsIDQxLjMyMzk5NyBdLCBbIC03Mi4xOTEwMjIsIDQxLjMyMzE5NyBdLCBbIC03Mi4yMDE0MjIsIDQxLjMxNTY5NyBdLCBbIC03Mi4yMDMwMjIsIDQxLjMxMzE5NyBdLCBbIC03Mi4yMDQwMjIsIDQxLjI5OTA5NyBdLCBbIC03Mi4yMDE0MDAsIDQxLjI4ODQ3MCBdLCBbIC03Mi4yMDUxMDksIDQxLjI4NTE4NyBdLCBbIC03Mi4yMDk5OTIsIDQxLjI4NjA2NSBdLCBbIC03Mi4yMTI5MjQsIDQxLjI5MTM2NSBdLCBbIC03Mi4yMjUyNzYsIDQxLjI5OTA0NyBdLCBbIC03Mi4yMzU1MzEsIDQxLjMwMDQxMyBdLCBbIC03Mi4yNDgxNjEsIDQxLjI5OTQ4OCBdLCBbIC03Mi4yNTE4OTUsIDQxLjI5ODYyMCBdLCBbIC03Mi4yNTA1MTUsIDQxLjI5NDM4NiBdLCBbIC03Mi4yNTEzMjMsIDQxLjI4OTk5NyBdLCBbIC03Mi4yNjE0ODcsIDQxLjI4MjkyNiBdLCBbIC03Mi4zMTc3NjAsIDQxLjI3Nzc4MiBdLCBbIC03Mi4zMjc1OTUsIDQxLjI3ODQ2MCBdLCBbIC03Mi4zMzM4OTQsIDQxLjI4MjkxNiBdLCBbIC03Mi4zNDg2NDMsIDQxLjI3NzQ0NiBdLCBbIC03Mi4zNDgwNjgsIDQxLjI2OTY5OCBdLCBbIC03Mi4zODY2MjksIDQxLjI2MTc5OCBdLCBbIC03Mi4zOTg2ODgsIDQxLjI3ODE3MiBdLCBbIC03Mi40MDU5MzAsIDQxLjI3ODM5OCBdLCBbIC03Mi40NTE5MjUsIDQxLjI3ODg4NSBdLCBbIC03Mi40NzI1MzksIDQxLjI3MDEwMyBdLCBbIC03Mi40ODU2OTMsIDQxLjI3MDg4MSBdLCBbIC03Mi40OTk1MzQsIDQxLjI2NTg2NiBdLCBbIC03Mi41MDY2MzQsIDQxLjI2MDA5OSBdLCBbIC03Mi41MTg2NjAsIDQxLjI2MTI1MyBdLCBbIC03Mi41MjEzMTIsIDQxLjI2NTYwMCBdLCBbIC03Mi41Mjk0MTYsIDQxLjI2NDQyMSBdLCBbIC03Mi41MzMyNDcsIDQxLjI2MjY5MCBdLCBbIC03Mi41MzY3NDYsIDQxLjI1NjIwNyBdLCBbIC03Mi41NDcyMzUsIDQxLjI1MDQ5OSBdLCBbIC03Mi41NzExMzYsIDQxLjI2ODA5OCBdLCBbIC03Mi41ODMzMzYsIDQxLjI3MTY5OCBdLCBbIC03Mi41OTgwMzYsIDQxLjI2ODY5OCBdLCBbIC03Mi42MTcyMzcsIDQxLjI3MTk5OCBdLCBbIC03Mi42NDE1MzgsIDQxLjI2Njk5OCBdLCBbIC03Mi42NTM4MzgsIDQxLjI2NTg5NyBdLCBbIC03Mi42NjI4MzgsIDQxLjI2OTE5NyBdLCBbIC03Mi42NzIzMzksIDQxLjI2Njk5NyBdLCBbIC03Mi42ODQ5MzksIDQxLjI1NzU5NyBdLCBbIC03Mi42ODU1MzksIDQxLjI1MTI5NyBdLCBbIC03Mi42OTA0MzksIDQxLjI0NjY5NyBdLCBbIC03Mi42OTQ3NDQsIDQxLjI0NDk3MCBdLCBbIC03Mi43MTA1OTUsIDQxLjI0NDQ4MCBdLCBbIC03Mi43MTM2NzQsIDQxLjI0OTAwNyBdLCBbIC03Mi43MTEyMDgsIDQxLjI1MTAxOCBdLCBbIC03Mi43MTI0NjAsIDQxLjI1NDE2NyBdLCBbIC03Mi43MjI0MzksIDQxLjI1OTEzOCBdLCBbIC03Mi43MzI4MTMsIDQxLjI1NDcyNyBdLCBbIC03Mi43NTQ0NDQsIDQxLjI2NjkxMyBdLCBbIC03Mi43NTc0NzcsIDQxLjI2NjkxMyBdLCBbIC03Mi43ODYxNDIsIDQxLjI2NDc5NiBdLCBbIC03Mi44MTg3MzcsIDQxLjI1MjI0NCBdLCBbIC03Mi44MTkzNzIsIDQxLjI1NDA2MSBdLCBbIC03Mi44MjY4ODMsIDQxLjI1Njc1NSBdLCBbIC03Mi44NDc3NjcsIDQxLjI1NjY5MCBdLCBbIC03Mi44NTAyMTAsIDQxLjI1NTU0NCBdLCBbIC03Mi44NTQwNTUsIDQxLjI0Nzc0MCBdLCBbIC03Mi44NjEzNDQsIDQxLjI0NTI5NyBdLCBbIC03Mi44ODE0NDUsIDQxLjI0MjU5NyBdLCBbIC03Mi44OTU0NDUsIDQxLjI0MzY5NyBdLCBbIC03Mi45MDQzNDUsIDQxLjI0NzI5NyBdLCBbIC03Mi45MDUyNDUsIDQxLjI0ODI5NyBdLCBbIC03Mi45MDMwNDUsIDQxLjI1Mjc5NyBdLCBbIC03Mi44OTQ3NDUsIDQxLjI1NjE5NyBdLCBbIC03Mi44OTM4NDUsIDQxLjI1OTg5NyBdLCBbIC03Mi45MDgyMDAsIDQxLjI4MjkzMiBdLCBbIC03Mi45MTY4MjcsIDQxLjI4MjAzMyBdLCBbIC03Mi45MjAwNjIsIDQxLjI4MDA1NiBdLCBbIC03Mi45MjA4NDYsIDQxLjI2ODg5NyBdLCBbIC03Mi45MzU2NDYsIDQxLjI1ODQ5NyBdLCBbIC03Mi45NjIwNDcsIDQxLjI1MTU5NyBdLCBbIC03Mi45ODYyNDcsIDQxLjIzMzQ5NyBdLCBbIC03Mi45OTc5NDgsIDQxLjIyMjY5NyBdLCBbIC03My4wMDc1NDgsIDQxLjIxMDE5NyBdLCBbIC03My4wMTQ5NDgsIDQxLjIwNDI5NyBdLCBbIC03My4wMjAxNDksIDQxLjIwNDA5NyBdLCBbIC03My4wMjA0NDksIDQxLjIwNjM5NyBdLCBbIC03My4wMjI1NDksIDQxLjIwNzE5NyBdLCBbIC03My4wNTA2NTAsIDQxLjIxMDE5NyBdLCBbIC03My4wNTkzNTAsIDQxLjIwNjY5NyBdLCBbIC03My4wNzk0NTAsIDQxLjE5NDAxNSBdLCBbIC03My4xMDU0OTMsIDQxLjE3MjE5NCBdLCBbIC03My4xMDc5ODcsIDQxLjE2ODczOCBdLCBbIC03My4xMTAzNTIsIDQxLjE1OTY5NyBdLCBbIC03My4xMDk5NTIsIDQxLjE1Njk5NyBdLCBbIC03My4xMDgzNTIsIDQxLjE1MzcxOCBdLCBbIC03My4xMTEwNTIsIDQxLjE1MDc5NyBdLCBbIC03My4xMzAyNTMsIDQxLjE0Njc5NyBdLCBbIC03My4xNzAwNzQsIDQxLjE2MDUzMiBdLCBbIC03My4xNzA3MDEsIDQxLjE2NDk0NSBdLCBbIC03My4xNzc3NzQsIDQxLjE2NjY5NyBdLCBbIC03My4yMDI2NTYsIDQxLjE1ODA5NiBdLCBbIC03My4yMjgyOTUsIDQxLjE0MjYwMiBdLCBbIC03My4yMzUwNTgsIDQxLjE0Mzk5NiBdLCBbIC03My4yNDc5NTgsIDQxLjEyNjM5NiBdLCBbIC03My4yNjIzNTgsIDQxLjExNzQ5NiBdLCBbIC03My4yODY3NTksIDQxLjEyNzg5NiBdLCBbIC03My4yOTYzNTksIDQxLjEyNTY5NiBdLCBbIC03My4zMTE4NjAsIDQxLjExNjI5NiBdLCBbIC03My4zMzA2NjAsIDQxLjEwOTk5NiBdLCBbIC03My4zNzIyOTYsIDQxLjEwNDAyMCBdLCBbIC03My4zOTIxNjIsIDQxLjA4NzY5NiBdLCBbIC03My40MDAxNTQsIDQxLjA4NjI5OSBdLCBbIC03My40MTM2NzAsIDQxLjA3MzI1OCBdLCBbIC03My40MzUwNjMsIDQxLjA1NjY5NiBdLCBbIC03My40NTAzNjQsIDQxLjA1NzA5NiBdLCBbIC03My40NjgyMzksIDQxLjA1MTM0NyBdLCBbIC03My40NzczNjQsIDQxLjAzNTk5NyBdLCBbIC03My40OTMzMjcsIDQxLjA0ODE3MyBdLCBbIC03My41MTY5MDMsIDQxLjAzODczOCBdLCBbIC03My41MTY3NjYsIDQxLjAyOTQ5NyBdLCBbIC03My41MjI2NjYsIDQxLjAxOTI5NyBdLCBbIC03My41Mjg4NjYsIDQxLjAxNjM5NyBdLCBbIC03My41MzExNjksIDQxLjAyMTkxOSBdLCBbIC03My41MzAxODksIDQxLjAyODc3NiBdLCBbIC03My41MzI3ODYsIDQxLjAzMTY3MCBdLCBbIC03My41MzUzMzgsIDQxLjAzMTkyMCBdLCBbIC03My41NTE0OTQsIDQxLjAyNDMzNiBdLCBbIC03My41NjE5NjgsIDQxLjAxNjc5NyBdLCBbIC03My41Njc2NjgsIDQxLjAxMDg5NyBdLCBbIC03My41NzAwNjgsIDQxLjAwMTU5NyBdLCBbIC03My41ODM5NjgsIDQxLjAwMDg5NyBdLCBbIC03My41ODQ5ODgsIDQxLjAxMDUzNyBdLCBbIC03My41OTU2OTksIDQxLjAxNTk5NSBdLCBbIC03My42MDM5NTIsIDQxLjAxNTA1NCBdLCBbIC03My42NDM0NzgsIDQxLjAwMjE3MSBdLCBbIC03My42NTExNzUsIDQwLjk5NTIyOSBdLCBbIC03My42NTczMzYsIDQwLjk4NTE3MSBdLCBbIC03My42NTk2NzEsIDQwLjk4NzkwOSBdLCBbIC03My42NTg3NzIsIDQwLjk5MzQ5NyBdLCBbIC03My42NTkzNzIsIDQwLjk5OTQ5NyBdLCBbIC03My42NTU1NzEsIDQxLjAwNzY5NyBdLCBbIC03My42NTQ2NzEsIDQxLjAxMTY5NyBdLCBbIC03My42NTUzNzEsIDQxLjAxMjc5NyBdLCBbIC03My42NjI2NzIsIDQxLjAyMDQ5NyBdLCBbIC03My42NzA0NzIsIDQxLjAzMDA5NyBdLCBbIC03My42Nzk5NzMsIDQxLjA0MTc5NyBdLCBbIC03My42ODcxNzMsIDQxLjA1MDY5NyBdLCBbIC03My42OTQyNzMsIDQxLjA1OTI5NiBdLCBbIC03My43MTY4NzUsIDQxLjA4NzU5NiBdLCBbIC03My43MjI1NzUsIDQxLjA5MzU5NiBdLCBbIC03My43Mjc3NzUsIDQxLjEwMDY5NiBdLCBbIC03My42Mzk2NzIsIDQxLjE0MTQ5NSBdLCBbIC03My42MzIxNTMsIDQxLjE0NDkyMSBdLCBbIC03My41NjQ5NDEsIDQxLjE3NTE3MCBdLCBbIC03My41MTQ2MTcsIDQxLjE5ODQzNCBdLCBbIC03My41MDk0ODcsIDQxLjIwMDgxNCBdLCBbIC03My40ODI3MDksIDQxLjIxMjc2MCBdLCBbIC03My41MTgzODQsIDQxLjI1NjcxOSBdLCBbIC03My41NTA5NjEsIDQxLjI5NTQyMiBdLCBbIC03My41NDg5MjksIDQxLjMwNzU5OCBdLCBbIC03My41NDk1NzQsIDQxLjMxNTkzMSBdLCBbIC03My41NDg5NzMsIDQxLjMyNjI5NyBdLCBbIC03My41NDQ3MjgsIDQxLjM2NjM3NSBdLCBbIC03My41NDM0MjUsIDQxLjM3NjYyMiBdLCBbIC03My41NDExNjksIDQxLjQwNTk5NCBdLCBbIC03My41Mzc2NzMsIDQxLjQzMzkwNSBdLCBbIC03My41Mzc0NjksIDQxLjQzNTg5MCBdLCBbIC03My41MzY5NjksIDQxLjQ0MTA5NCBdLCBbIC03My41MzYwNjcsIDQxLjQ1MTMzMSBdLCBbIC03My41MzU5ODYsIDQxLjQ1MzA2MCBdLCBbIC03My41MzU4ODUsIDQxLjQ1NTIzNiBdLCBbIC03My41MzU4NTcsIDQxLjQ1NTcwOSBdLCBbIC03My41MzU3NjksIDQxLjQ1NzE1OSBdLCBbIC03My41MzQzNjksIDQxLjQ3NTg5NCBdLCBbIC03My41MzQyNjksIDQxLjQ3NjM5NCBdLCBbIC03My41MzQyNjksIDQxLjQ3NjkxMSBdLCBbIC03My41MzQxNTAsIDQxLjQ3ODA2MCBdLCBbIC03My41MzQwNTUsIDQxLjQ3ODk2OCBdLCBbIC03My41MzM5NjksIDQxLjQ3OTY5MyBdLCBbIC03My41MzAwNjcsIDQxLjUyNzE5NCBdLCBbIC03My41MjEwNDEsIDQxLjYxOTc3MyBdLCBbIC03My41MjAwMTcsIDQxLjY0MTE5NyBdLCBbIC03My41MTY3ODUsIDQxLjY4NzU4MSBdLCBbIC03My41MTE5MjEsIDQxLjc0MDk0MSBdLCBbIC03My41MTA5NjEsIDQxLjc1ODc0OSBdLCBbIC03My41MDUwMDgsIDQxLjgyMzc3MyBdLCBbIC03My41MDQ5NDQsIDQxLjgyNDI4NSBdLCBbIC03My41MDE5ODQsIDQxLjg1ODcxNyBdLCBbIC03My40OTgzMDQsIDQxLjg5MjUwOCBdLCBbIC03My40OTY1MjcsIDQxLjkyMjM4MCBdLCBbIC03My40OTI5NzUsIDQxLjk1ODUyNCBdLCBbIC03My40ODk2MTUsIDQyLjAwMDA5MiBdLCBbIC03My40ODczMTQsIDQyLjA0OTYzOCBdLCBbIC03My40MzI4MTIsIDQyLjA1MDU4NyBdLCBbIC03My4yOTQ0MjAsIDQyLjA0Njk4NCBdLCBbIC03My4yOTMwOTcsIDQyLjA0Njk0MCBdLCBbIC03My4yMzEwNTYsIDQyLjA0NDk0NSBdLCBbIC03My4yMjk3OTgsIDQyLjA0NDg3NyBdLCBbIC03My4wNTMyNTQsIDQyLjAzOTg2MSBdLCBbIC03Mi45OTk1NDksIDQyLjAzODY1MyBdLCBbIC03Mi44NjM3MzMsIDQyLjAzNzcxMCBdLCBbIC03Mi44NjM2MTksIDQyLjAzNzcwOSBdLCBbIC03Mi44NDcxNDIsIDQyLjAzNjg5NCBdLCBbIC03Mi44MTM1NDEsIDQyLjAzNjQ5NCBdLCBbIC03Mi44MTY3NDEsIDQxLjk5NzU5NSBdLCBbIC03Mi43NjY3MzksIDQyLjAwMjk5NSBdLCBbIC03Mi43NjYxMzksIDQyLjAwNzY5NSBdLCBbIC03Mi43NjMyNjUsIDQyLjAwOTc0MiBdLCBbIC03Mi43NjMyMzgsIDQyLjAxMjc5NSBdLCBbIC03Mi43NjEyMzgsIDQyLjAxNDU5NSBdLCBbIC03Mi43NTk3MzgsIDQyLjAxNjk5NSBdLCBbIC03Mi43NjEzNTQsIDQyLjAxODE4MyBdLCBbIC03Mi43NjIzMTAsIDQyLjAxOTc3NSBdLCBbIC03Mi43NjIxNTEsIDQyLjAyMTUyNyBdLCBbIC03Mi43NjA1NTgsIDQyLjAyMTg0NiBdLCBbIC03Mi43NTgxNTEsIDQyLjAyMDg2NSBdLCBbIC03Mi43NTc0NjcsIDQyLjAyMDk0NyBdLCBbIC03Mi43NTQwMzgsIDQyLjAyNTM5NSBdLCBbIC03Mi43NTE3MzgsIDQyLjAzMDE5NSBdLCBbIC03Mi43NTM1MzgsIDQyLjAzMjA5NSBdLCBbIC03Mi43NTc1MzgsIDQyLjAzMzI5NSBdLCBbIC03Mi43NTU4MzgsIDQyLjAzNjE5NSBdLCBbIC03Mi42OTU5MjcsIDQyLjAzNjc4OCBdLCBbIC03Mi42NDMxMzQsIDQyLjAzMjM5NSBdLCBbIC03Mi42MDc5MzMsIDQyLjAzMDc5NSBdLCBbIC03Mi42MDY5MzMsIDQyLjAyNDk5NSBdLCBbIC03Mi41OTAyMzMsIDQyLjAyNDY5NSBdLCBbIC03Mi41ODIzMzIsIDQyLjAyNDY5NSBdLCBbIC03Mi41NzMyMzEsIDQyLjAzMDE0MSBdLCBbIC03Mi41MjgxMzEsIDQyLjAzNDI5NSBdLCBbIC03Mi40NTY2ODAsIDQyLjAzMzk5OSBdLCBbIC03Mi4zMTcxNDgsIDQyLjAzMTkwNyBdLCBbIC03Mi4yNDk1MjMsIDQyLjAzMTYyNiBdLCBbIC03Mi4xMzU2ODcsIDQyLjAzMDI0NSBdLCBbIC03Mi4wNjM0OTYsIDQyLjAyNzM0NyBdLCBbIC03MS45ODczMjYsIDQyLjAyNjg4MCBdLCBbIC03MS44OTA3ODAsIDQyLjAyNDM2OCBdLCBbIC03MS44MDA2NTAsIDQyLjAyMzU2OSBdLCBbIC03MS43OTkyNDIsIDQyLjAwODA2NSBdLCBbIC03MS43OTc5MjIsIDQxLjkzNTM5NSBdLCBbIC03MS43OTQxNjEsIDQxLjg0MTEwMSBdLCBbIC03MS43OTQxNjEsIDQxLjg0MDE0MSBdLCBbIC03MS43OTI3ODYsIDQxLjgwODY3MCBdLCBbIC03MS43OTI3NjcsIDQxLjgwNzAwMSBdLCBbIC03MS43OTEwNjIsIDQxLjc3MDI3MyBdLCBbIC03MS43ODk2NzgsIDQxLjcyNDczNCBdLCBbIC03MS43ODY5OTQsIDQxLjY1NTk5MiBdLCBbIC03MS43ODkzNTYsIDQxLjU5NjkxMCBdLCBbIC03MS43OTc2ODMsIDQxLjQxNjcwOSBdLCBbIC03MS44MTgzOTAsIDQxLjQxOTU5OSBdLCBbIC03MS44Mzk2NDksIDQxLjQxMjExOSBdLCBbIC03MS44NDI1NjMsIDQxLjQwOTg1NSBdLCBbIC03MS44NDM0NzIsIDQxLjQwNTgzMCBdLCBbIC03MS44NDIxMzEsIDQxLjM5NTM1OSBdLCBbIC03MS44MzM0NDMsIDQxLjM4NDUyNCBdLCBbIC03MS44MzE2MTMsIDQxLjM3MDg5OSBdLCBbIC03MS44Mzc3MzgsIDQxLjM2MzUyOSBdLCBbIC03MS44MzU5NTEsIDQxLjM1MzkzNSBdLCBbIC03MS44Mjk1OTUsIDQxLjM0NDU0NCBdLCBbIC03MS44MzkwMTMsIDQxLjMzNDA0MiBdLCBbIC03MS44NjA1MTMsIDQxLjMyMDI0OCBdLCBbIC03MS44NTk1NzAsIDQxLjMyMjM5OSBdIF0gXSwgWyBbIFsgLTczLjQyMjE2NSwgNDEuMDQ3NTYyIF0sIFsgLTczLjQwMzYxMCwgNDEuMDYyNjg3IF0sIFsgLTczLjM2Nzg1OSwgNDEuMDg4MTIwIF0sIFsgLTczLjM1MjA1MSwgNDEuMDg4MTIwIF0sIFsgLTczLjM4NTczNSwgNDEuMDU5MjUwIF0sIFsgLTczLjQyMjE2NSwgNDEuMDQ3NTYyIF0gXSBdIF0gfSB9"
* extension.valueAttachment.title = "GeoJSON Outline of the State of Connecticut"
* status = #active
* name = "State of Conneticut Area"
* address.state = "CT"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Organization-Acme.fsh

Instance: OrganizationAcme
InstanceOf: NatlDirEndpointQryOrganization
Title: "Organization/oGaKCfZSaoxLrDPbA"
Description: "ACME of Conneticut"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-Organization"
* language = #en-US
* id = "o4aKCfZSaoxLrDPbA"
// * extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/org-description"
// * extension.valueString = "Acme of CT is a leading provider of health and other insurance products."
* active = true
* type = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS#payer "Payer"
* name = "Acme of CT"
* telecom[0].extension.extension[0].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #mon
* telecom[=].extension.extension[+].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #tue
* telecom[=].extension.extension[+].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #wed
* telecom[=].extension.extension[+].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #thu
* telecom[=].extension.extension[+].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #fri
* telecom[=].extension.extension[+].url = "availableStartTime"
* telecom[=].extension.extension[=].valueTime = "08:00:00"
* telecom[=].extension.extension[+].url = "availableEndTime"
* telecom[=].extension.extension[=].valueTime = "17:00:00"
* telecom[=].extension.url = "http://hl7.org/fhir/us/directory-query/StructureDefinition/contactpoint-availabletime"
* telecom[=].system = #phone
* telecom[=].value = "(111)-222-3333"
* telecom[=].rank = 2
* telecom[+].system = #url
* telecom[=].value = "https://www.acmeofct.com"
* telecom[=].rank = 1
* address.line = "456 Main Street"
* address.city = "Norwalk"
* address.state = "CT"
* address.postalCode = "00014-1234"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Organization-AcmeofCTPremNet.fsh

Instance: OrganizationAcmeofCTPremNet
InstanceOf: NatlDirAttestOrganization
Title: "Organization/opgQrsHZfpYNoohzD"
Description: "ACME Premium"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* id = "o4gQrsHZfpYNoohzD"
* active = true
* type = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS#ntwk "Network"
* name = "ACME CT Premium Preferred Provider Network"
* partOf = Reference(OrganizationAcme)
* contact.name.family = "Kawasaki"
* contact.name.given = "Jane"
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "(222)-322-3333"
* contact.telecom[0].rank = 1


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Organization-AcmeofCTStdNet.fsh

Instance: OrganizationAcmeofCTStdNet
InstanceOf: NatlDirEndpointQryOrganization
Title: "Organization/o3XMGtrjTrN7mcctj"
Description: "ACME Preferred"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = Canonical(NatlDirAttestNetwork)
* language = #en-US
* id = "o4XMGtrjTrN7mcctj"
* active = true
* type = http://hl7.org/fhir/us/directory-query/CodeSystem/OrgTypeCS#ntwk "Network"
// http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS 
* name = "ACME CT Preferred Provider Network"
* partOf = Reference(OrganizationAcme)
* contact.name.family = "Kawasaki"
* contact.name.given = "Jane"




---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Organization-AcmePharmacy.fsh

Instance: Organization-AcmePharmacy
InstanceOf: Organization
Title: "Organization/ostNYGTgKk5WLrwzh"
Description: "ACME Pharmacy"
Usage: #example
* id = "o7tNYGTgKk5WLrwzh"
* name = "ACME Pharmacy"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Organization-BigBox.fsh

Instance: OrganizationBigBox
InstanceOf: Organization
Title: "Organization/o93FxH84isnGG8aqy"
Description: "Big Box, LLC"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"
* language = #en-US
* id = "o53FxH84isnGG8aqy"
* active = true
* type = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS#bus "Non-Healthcare Business"
* name = "Big Box Retailer"
* telecom[0].extension.extension[0].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #mon
* telecom[=].extension.extension[+].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #tue
* telecom[=].extension.extension[+].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #wed
* telecom[=].extension.extension[+].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #thu
* telecom[=].extension.extension[+].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #fri
* telecom[=].extension.extension[+].url = "availableStartTime"
* telecom[=].extension.extension[=].valueTime = "08:00:00"
* telecom[=].extension.extension[+].url = "availableEndTime"
* telecom[=].extension.extension[=].valueTime = "17:00:00"
* telecom[=].extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
* telecom[=].system = #phone
* telecom[=].value = "(111)-222-3333"
* telecom[=].rank = 2
* telecom[+].system = #url
* telecom[=].value = "https://www.bixboxretailer.com"
* telecom[=].rank = 1
* address.line = "456 Main Street"
* address.city = "Norwalk"
* address.state = "CT"
* address.postalCode = "00014-1234"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Organization-BurrClinic.fsh

Instance: OrganizationBurrClinic
InstanceOf: NatlDirEndpointQryOrganization
Title: "Organization/ooq79rZWvYNLtPK8D"
Description: "Burr Clinic"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"
* language = #en-US
* id = "o5q79rZWvYNLtPK8D"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "NPI999"
* active = true
* type = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS#fac "Facility"
* name = "Burr Clinic"
* telecom[0].system = #phone
* telecom[=].value = "(111)-222-3333"
* telecom[=].rank = 2
* telecom[+].system = #url
* telecom[=].value = "https://www.burrclinic.com"
* telecom[=].rank = 1
* address.line = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* contact.telecom.system = #phone
* contact.telecom.value = "(111)-222-3333"
* contact.telecom.rank = 1

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Organization-CMS.fsh

Instance: Organization-CMS
InstanceOf: Organization
Title: "Organization/oxdzMhGRoLTXdp5aE"
Description: "Centers for Medicare and Medicaid Services"
Usage: #example
* id = "oxdzMhGRoLTXdp5aE"
* name = "Centers for Medicare and Medicaid Services"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Organization-ConneticutLicenseBoard.fsh

 Instance: Organization-CtDeptPublicHealth
InstanceOf: Organization
Title: "Organization/ocb4z5LvCufWTr472"
Description: "CT Department of Public Health"
Usage: #example
* id = "ocb4z5LvCufWTr472"
* name = "State of Connecticut Department of Public Health"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Organization-ConnHIE.fsh

Instance: OrganizationConnHIE
InstanceOf: Organization
Title: "Organization/oyCXtWS6CWaH4J8c9"
Description: "Connecticut Health Information Exchange (CHIE)"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"
* language = #en-US
* id = "o5CXtWS6CWaH4J8c9"
* active = true
* type = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS#atyprv "Atypical Provider"
* name = "Connecticut HIE"
* telecom[0].system = #phone
* telecom[=].value = "(111)-222-3333"
* telecom[=].rank = 2
* telecom[+].system = #url
* telecom[=].value = "https://www.connhie.com"
* telecom[=].rank = 1
* address.line = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* contact.telecom.system = #phone
* contact.telecom.value = "(111)-222-3333"
* contact.telecom.rank = 1

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Organization-FastScanRadiology.fsh

Instance: Organization-FastScanRadiology
InstanceOf: Organization
Title: "Organization/o9ZkiSX6abYLhWWGo"
Description: "Fast Scan Radiology"
Usage: #example
* id = "o9ZkiSX6abYLhWWGo"
* name = "Fast Scan Radiology"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Organization-HamiltonClinic.fsh

Instance: OrganizationHamiltonClinic
InstanceOf: Organization
Title: "Organization/onsZhrXrLK9pXDGKX"
Description: "Hamilton Clinic"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"
* language = #en-US
* id = "o5sZhrXrLK9pXDGKX"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "NPI78"
* active = true
* type = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS#fac "Facility"
* name = "Hamilton Clinic"
* telecom[0].system = #phone
* telecom[=].value = "(111)-222-3333"
* telecom[=].rank = 2
* telecom[+].system = #url
* telecom[=].value = "https://www.hartfordgeneralhospital.com"
* telecom[=].rank = 1
* address.line = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* partOf = Reference(OrganizationHospital)
* contact.telecom.system = #phone
* contact.telecom.value = "(111)-222-3333"
* contact.telecom.rank = 1

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Organization-HartfordOrthopedics.fsh

Instance: OrganizationHartfordOrthopedics
InstanceOf: Organization
Title: "Organization/oJeQQrm6h4TQwhbAa"
Description: "Hartford Orthopedics"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"
* language = #en-US
* id = "o6eQQrm6h4TQwhbAa"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "NPI456"
* active = true
* type = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS#prvgrp "Provider Group"
* name = "Hartford Orthopedics Services"
* telecom[0].extension[0].extension[0].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #mon
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #tue
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #wed
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #thu
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #fri
* telecom[=].extension[=].extension[+].url = "allDay"
* telecom[=].extension[=].extension[=].valueBoolean = true
* telecom[=].extension[=].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
* telecom[=].extension[+].extension[0].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #sat
* telecom[=].extension[=].extension[+].url = "daysOfWeek"
* telecom[=].extension[=].extension[=].valueCode = #sun
* telecom[=].extension[=].extension[+].url = "availableStartTime"
* telecom[=].extension[=].extension[=].valueTime = "08:00:00"
* telecom[=].extension[=].extension[+].url = "availableEndTime"
* telecom[=].extension[=].extension[=].valueTime = "17:00:00"
* telecom[=].extension[=].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
* telecom[=].system = #phone
* telecom[=].value = "(111)-222-3333"
* telecom[=].rank = 2
* telecom[+].system = #url
* telecom[=].value = "https://www.orga.com"
* telecom[=].rank = 1
* address.line = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* contact.telecom.extension[0].extension[0].url = "daysOfWeek"
* contact.telecom.extension[=].extension[=].valueCode = #mon
* contact.telecom.extension[=].extension[+].url = "daysOfWeek"
* contact.telecom.extension[=].extension[=].valueCode = #tue
* contact.telecom.extension[=].extension[+].url = "daysOfWeek"
* contact.telecom.extension[=].extension[=].valueCode = #wed
* contact.telecom.extension[=].extension[+].url = "daysOfWeek"
* contact.telecom.extension[=].extension[=].valueCode = #thu
* contact.telecom.extension[=].extension[+].url = "daysOfWeek"
* contact.telecom.extension[=].extension[=].valueCode = #fri
* contact.telecom.extension[=].extension[+].url = "allDay"
* contact.telecom.extension[=].extension[=].valueBoolean = true
* contact.telecom.extension[=].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
* contact.telecom.extension[+].extension[0].url = "daysOfWeek"
* contact.telecom.extension[=].extension[=].valueCode = #sat
* contact.telecom.extension[=].extension[+].url = "daysOfWeek"
* contact.telecom.extension[=].extension[=].valueCode = #sun
* contact.telecom.extension[=].extension[+].url = "availableStartTime"
* contact.telecom.extension[=].extension[=].valueTime = "08:00:00"
* contact.telecom.extension[=].extension[+].url = "availableEndTime"
* contact.telecom.extension[=].extension[=].valueTime = "17:00:00"
* contact.telecom.extension[=].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
* contact.telecom.system = #phone
* contact.telecom.value = "(111)-222-3333"
* contact.telecom.rank = 2

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Organization-HealthHumanServices.fsh

 Instance: Organization-HHS
InstanceOf: Organization
Title: "Organization/oEQaW45BFAzMcfYx9"
Description: "Health and Human Services"
Usage: #example
* id = "oEQaW45BFAzMcfYx9"
* name = "United States Department of Health and Human Services"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Organization-Hospital.fsh

Instance: OrganizationHospital
InstanceOf: Organization
Title: "Organization/oJ8Sau8tELE3GDnqR"
Description: "Hartford General Hospital"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"
* language = #en-US
* id = "o68Sau8tELE3GDnqR"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "NPI456"
* active = true
* type = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS#fac "Facility"
* name = "Hartford General Hospital"
* telecom[0].system = #phone
* telecom[=].value = "(111)-222-3333"
* telecom[=].rank = 2
* telecom[+].system = #url
* telecom[=].value = "https://www.hartfordgeneralhospital.com"
* telecom[=].rank = 1
* address.line = "123 Main Street"
* address.city = "Hartford"
* address.state = "CT"
* address.postalCode = "00014-1234"
* contact.telecom.system = #phone
* contact.telecom.value = "(111)-222-3333"
* contact.telecom.rank = 1

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Organization-JointCommission.fsh

 Instance: Organization-JointCommission
InstanceOf: Organization
Title: "Organization/oPxE9d7Wtqjy9WEZx"
Description: "The Joint Commission on the Accreditation of Healthcare Organizations"
Usage: #example
* id = "oPxE9d7Wtqjy9WEZx"
* name = "The Joint Commission"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Organization-PharmChain.fsh

Instance: OrganizationPharmChain
InstanceOf: Organization
Title: "Organization/obC3dwiGT6Eatxkyb"
Description: "GoodRx Pharmacy"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"
* language = #en-US
* id = "o7C3dwiGT6Eatxkyb"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "NPI-ORGA"
* active = true
* type = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS#prvgrp "Provider Group"
* name = "GoodRx Pharmacy"
* telecom[0].extension.extension[0].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #mon
* telecom[=].extension.extension[+].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #tue
* telecom[=].extension.extension[+].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #wed
* telecom[=].extension.extension[+].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #thu
* telecom[=].extension.extension[+].url = "daysOfWeek"
* telecom[=].extension.extension[=].valueCode = #fri
* telecom[=].extension.extension[+].url = "availableStartTime"
* telecom[=].extension.extension[=].valueTime = "08:00:00"
* telecom[=].extension.extension[+].url = "availableEndTime"
* telecom[=].extension.extension[=].valueTime = "17:00:00"
* telecom[=].extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
* telecom[=].system = #phone
* telecom[=].value = "(111)-222-3333"
* telecom[=].rank = 2
* telecom[+].system = #url
* telecom[=].value = "https://www.pharmchain.com"
* telecom[=].rank = 1
* address.line = "123 Main Street"
* address.city = "Norwalk"
* address.state = "CT"
* address.postalCode = "00014-1234"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Organization-PostOffice.fsh

 Instance: Organization-PostOffice
InstanceOf: Organization
Title: "Organization/ow7KqRFWWHrxKQW34"
Description: "US Post Office"
Usage: #example
* id = "ow7KqRFWWHrxKQW34"
* name = "United States Post Office"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Organization-StJames.fsh

Instance: Organization-StJames
InstanceOf: Organization
Description: "St. Jame's Infirmary"
Title: "Organization/o6AJtyEk6sSsHWLjt"
Usage: #example
* id = "o6AJtyEk6sSsHWLjt"
* name = "St. James Infirmary"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/OrganizationAffiliation-BurrClinicAffil.fsh

Instance: BurrClinicAffil
InstanceOf: OrganizationAffiliation
Title: "OrganizationAffiliation/oa3oxC4yKJnB2E7on"
Description: "Burr Clinic Outpatient Network"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"
* language = #en-US
* id = "oa3oxC4yKJnB2E7on"
* active = true
* organization = Reference(OrganizationHospital)
* participatingOrganization = Reference(OrganizationBurrClinic)
* network = Reference(OrganizationAcmeofCTStdNet)
* code = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrganizationAffiliationRoleCS#outpatient
* location = Reference(HospLoc2)
* healthcareService = Reference(ServiceBurrClinic)

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/OrganizationAffiliation-ConnHIEAffil.fsh

Instance: ConnHIEAffil
InstanceOf: OrganizationAffiliation
Title: "OrganizationAffiliation/oamEcy7YASttYnaxK"
Description: "Connecticut HIE Network"
Usage: #example
* id = "oamEcy7YASttYnaxK"
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"
* language = #en-US
* active = true
* organization = Reference(OrganizationConnHIE)
* participatingOrganization = Reference(OrganizationBurrClinic)
* code = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrganizationAffiliationRoleCS#bt

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/OrganizationAffiliation-HamiltonClinicAffil.fsh

Instance: HamiltonClinicAffil
InstanceOf: OrganizationAffiliation
Title: "OrganizationAffiliation/oaqirA9KjALpeDBjs"
Description: "Hamilton Clinic Outpatient Network"
Usage: #example
* id = "oaqirA9KjALpeDBjs"
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"
* language = #en-US
* active = true
* participatingOrganization = Reference(OrganizationHamiltonClinic)
* network = Reference(OrganizationAcmeofCTStdNet)
* code = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrganizationAffiliationRoleCS#outpatient
* location = Reference(HospLoc1)
* healthcareService = Reference(ServiceHamiltonClinic)

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/OrganizationAffiliation-HartfordOrthopedicAffil.fsh

Instance: HartfordOrthopedicAffil
InstanceOf: OrganizationAffiliation
Title: "OrganizationAffiliation/oareedAzJMQsamimk"
Description: "Hartford Orthopedic Provider Network"
Usage: #example
* id = "oareedAzJMQsamimk"
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"
* language = #en-US
* active = true
* organization = Reference(OrganizationHospital)
* participatingOrganization = Reference(OrganizationHartfordOrthopedics)
* network = Reference(OrganizationAcmeofCTStdNet)
* code = http://hl7.org/fhir/organization-role#provider
* location[0] = Reference(HospLoc1)
* location[+] = Reference(HospLoc2)
* healthcareService = Reference(ServiceHartfordOrthopedic)

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/OrganizationAffiliation-PharmChainAffil1.fsh

Instance: PharmChainAffil1
InstanceOf: OrganizationAffiliation
Title: "OrganizationAffiliation/oaGKaodXJgcsnAwr4"
Description: "GoodRx Retail Pharmacy Network"
Usage: #example
* id = "oaGKaodXJgcsnAwr4"
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"
* language = #en-US
* active = true
* participatingOrganization = Reference(OrganizationPharmChain)
* network = Reference(OrganizationAcmeofCTStdNet)
* code = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrganizationAffiliationRoleCS#pharmacy
// * specialty = http://nucc.org/provider-taxonomy#3336C0003X "Community/Retail Pharmacy"
* location[0] = Reference(PharmLoc1)
* location[+] = Reference(PharmLoc2)
* healthcareService = Reference(ServicePharmChainRetail) 

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/OrganizationAffiliation-PharmChainAffil2.fsh

Instance: PharmChainAffil2
InstanceOf: OrganizationAffiliation
Title: "OrganizationAffiliation/oaHDdxsHhAJ9dZFhL"
Description: "GoodRx Compounding Pharmacy Network"
Usage: #example
* id = "oaHDdxsHhAJ9dZFhL"
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"
* language = #en-US
* active = true
* participatingOrganization = Reference(OrganizationPharmChain)
* network = Reference(OrganizationAcmeofCTStdNet)
* code = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrganizationAffiliationRoleCS#pharmacy
// * specialty = http://nucc.org/provider-taxonomy#3336C0004X "Compounding Pharmacy"
* location = Reference(PharmLoc1)
* healthcareService = Reference(ServicePharmChainComp)

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/OrganizationAffiliation-PharmChainAffil3.fsh

Instance: PharmChainAffil3
InstanceOf: NatlDirAttestOrganizationAffiliation
Title: "OrganizationAffiliation/oaPTusDv4SHhKWHJG"
Description: "GoodRx Mail Order Network"
Usage: #example
* id = "oaPTusDv4SHhKWHJG"
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"
* language = #en-US
* active = true
* participatingOrganization = Reference(OrganizationPharmChain)
* network = Reference(OrganizationAcmeofCTStdNet)
* code = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrganizationAffiliationRoleCS#pharmacy
// * specialty = http://nucc.org/provider-taxonomy#3336M0002X "Mail Order Pharmacy"
* healthcareService = Reference(ServicePharmChainMail)

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Practitioner-AllisonCamron.fsh

Instance: PractitionerAllisonCamron 
InstanceOf: Practitioner
Title: "Practitioner/pZzusFYr3PBYyRnot"
Description: "Practitioner - Allison Camron"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* id = "pZzusFYr3PBYyRnot"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "NPI323"
* active = true
* name.text = "Allison Camron, MD"
* name.family = "Camron"
* name.given = "Allison"
* qualification[0].code.coding.display = "LPC"
* qualification[0].code.text = "LPC"
* qualification[0].issuer.display = "State of Illinois"
* qualification[0].code.text = "IL"
* qualification[0].extension[practitioner-qualification].extension[status].valueCode = $NatlDirectoryQualStatusCS#active 
* qualification[0].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
//* extension[communication-proficiency].valueCodeableConcept = $NatlDirectoryLangProfCS#30


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Practitioner-CounselorSong.fsh

Instance: PractitionerCounselor
InstanceOf: Practitioner
Title: "Practitioner/pBvMREMS3HpzyJgwa"
Description: "Practitioner - Susie Song, Social Worker"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Practitioner"
* language = #en-US
* id = "pBvMREMS3HpzyJgwa"
* extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/communication-proficiency"
* extension.valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/LanguageProficiencyCS#30
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "NPI3238"
* active = true
* name.text = "Susie Song, LPC"
* name.family = "Song"
* name.given = "Susie"
* qualification.extension.extension[0].url = "status"
* qualification.extension.extension[=].valueCode = #active
* qualification.extension.extension[+].url = "whereValid"
* qualification.extension.extension[=].valueCodeableConcept = https://www.usps.com/#IL
* qualification.extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
* qualification.code.coding.display = "LPC"
* qualification.code.text = "IL"
* qualification.issuer.display = "State of Illinois"
* communication = urn:ietf:bcp:47#ru

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Practitioner-HansSolo.fsh

Instance: PractitionerHansSolo
InstanceOf: Practitioner
Title: "Practitioner/p6x5NWQPoKgyTKjAk"
Description: "Practitioner - Han Solo"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Practitioner"
* language = #en-US
* id = "p6x5NWQPoKgyTKjAk"
* extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/communication-proficiency"
* extension.valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/LanguageProficiencyCS#30
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "NPI3233"
* active = true
* name.text = "Hans Solo, MD"
* name.family = "Solo"
* name.given = "Hans"
* qualification[0].extension.extension[0].url = "status"
* qualification[=].extension.extension[=].valueCode = #active
* qualification[=].extension.extension[+].url = "whereValid"
* qualification[=].extension.extension[=].valueCodeableConcept = https://www.usps.com/#IL
* qualification[=].extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
* qualification[=].code = http://terminology.hl7.org/CodeSystem/v2-0360#MD
* qualification[=].code.text = "MD"
* qualification[=].issuer.display = "State of Illinois"
* qualification[+].extension.extension[0].url = "status"
* qualification[=].extension.extension[=].valueCode = #active
* qualification[=].extension.extension[+].url = "whereValid"
* qualification[=].extension.extension[=].valueCodeableConcept = https://www.usps.com/#IL
* qualification[=].extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
* qualification[=].code = http://nucc.org/provider-taxonomy#207R00000X "Internal Medicine Physician"
* qualification[=].code.text = "Board Certified Internal Medicine"
* qualification[=].issuer.display = "American Board of Internal Medicine"
* qualification[+].extension.extension[0].url = "status"
* qualification[=].extension.extension[=].valueCode = #active
* qualification[=].extension.extension[+].url = "whereValid"
* qualification[=].extension.extension[=].valueCodeableConcept = https://www.usps.com/#IL
* qualification[=].extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
* qualification[=].code = http://nucc.org/provider-taxonomy#207RC0000X "Cardiovascular Disease Physician"
* qualification[=].code.text = "Board Certified Cardiovascular Disease"
* qualification[=].issuer.display = "American Board of Internal Medicine"
* communication = urn:ietf:bcp:47#ja

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Practitioner-JoeSmith.fsh

Instance: PractitionerJoeSmith
InstanceOf: NatlDirAttestPractitioner
Title: "Practitioner/pFhDpHhMzBsSvmLb9"
Description: "Practitioner - Joe Smith"
Usage: #example
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


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/PractitionerRole-AnonRole.fsh


Instance: AnonRole 
InstanceOf: NatlDirAttestPractitionerRole
Title: "PractitionerRole/rALFxTbdo6nEq5za6"
Description: "Role - Anonymous users not registered with the system"
Usage: #example
* meta.profile = Canonical(NatlDirExPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* id = "rALFxTbdo6nEq5za6"
* active = true
* code = $NatlDirEndpointQryPractitionerRoleCode#ph 
* organization = Reference(OrganizationBurrClinic)
* location = Reference(HospLoc2)
* healthcareService = Reference(ServiceBurrClinic)
* practitioner = Reference(PractitionerHansSolo)
* extension[network-reference].valueReference = Reference(OrganizationAcmeofCTStdNet) 
* specialty =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/PractitionerRole-CounselorRole1.fsh

Instance: CounselorRole1
InstanceOf: PractitionerRole
Title: "PractitionerRole/rCY6ePpLywTbfx3yp"
Description: "Role - Conselor or therapist"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-PractitionerRole"
* language = #en-US
* id = "rCY6ePpLywTbfx3yp"
* extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/network-reference"
* extension.valueReference = Reference(OrganizationAcmeofCTStdNet)
* active = true
* practitioner = Reference(PractitionerCounselor)
* code = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/ProviderRoleCS#co "Counselor"
* specialty = http://nucc.org/provider-taxonomy#101YP2500X "Professional Counselor"
* healthcareService = Reference(ServiceVirtualCounsel)

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/PractitionerRole-HansSoloRole1.fsh

Instance: HansSoloRole1
InstanceOf: PractitionerRole
Title: "PractitionerRole/rDAkiyGndx8FT5jpj"
Description: "Role - Part time physician, part time smuggler"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-PractitionerRole"
* language = #en-US
* id = "rDAkiyGndx8FT5jpj"
* extension[0].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/network-reference"
* extension[=].valueReference = Reference(OrganizationAcmeofCTStdNet)
* extension[+].extension[0].url = "code"
* extension[=].extension[=].valueCodeableConcept = http://nucc.org/provider-taxonomy#207R00000X
* extension[=].extension[+].url = "status"
* extension[=].extension[=].valueCode = #active
* extension[=].extension[+].url = "issuer"
* extension[=].extension[=].valueReference.display = "American Board of Internal Medicine"
* extension[=].url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/qualification"
* active = true
* practitioner = Reference(PractitionerHansSolo)
* code = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/ProviderRoleCS#ph
* specialty = http://nucc.org/provider-taxonomy#207R00000X "Internal Medicine Physician"
* location = Reference(HospLoc1)
* healthcareService = Reference(ServiceHansSolo)

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/PractitionerRole-JoeSmithRole1.fsh

Instance: JoeSmithRole1
InstanceOf: PractitionerRole
Title: "PractitionerRole/rtaTdfxSNTmqqnDeJ"
Description: "Role - Self defined role 1"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-PractitionerRole"
* language = #en-US
* id = "rtaTdfxSNTmqqnDeJ"
* extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/network-reference"
* extension.valueReference = Reference(OrganizationAcmeofCTStdNet)
* active = true
* practitioner = Reference(PractitionerJoeSmith)
* organization = Reference(OrganizationHospital)
* code = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/ProviderRoleCS#ph
* specialty = http://nucc.org/provider-taxonomy#207R00000X "Internal Medicine Physician"
* location = Reference(HospLoc1)
* healthcareService = Reference(ServiceHospER) 

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/PractitionerRole-JoeSmithRole2.fsh

Instance: JoeSmithRole2
InstanceOf: PractitionerRole
Title: "PractitionerRole/rP5Wt9gxQwyL7M8fX"
Description: "Role - Self defined role 2"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-PractitionerRole"
* language = #en-US
* id = "rP5Wt9gxQwyL7M8fX"
* extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/network-reference"
* extension.valueReference = Reference(OrganizationAcmeofCTStdNet)
* active = true
* organization = Reference(OrganizationBurrClinic)
* code = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/ProviderRoleCS#ph
* specialty = http://nucc.org/provider-taxonomy#207R00000X "Internal Medicine Physician"
* location = Reference(HospLoc2)
* healthcareService = Reference(ServiceBurrClinic)

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/PractitionerRole-JoeSmithRole3.fsh

Instance: JoeSmithRole3
InstanceOf: PractitionerRole
Title: "PractitionerRole/rGCrprwcPa3fj629w"
Description: "Role - Self defined role 3"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-PractitionerRole"
* language = #en-US
* id = "rGCrprwcPa3fj629w"
* extension.url = "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/network-reference"
* extension.valueReference = Reference(OrganizationAcmeofCTStdNet)
* active = true
* organization = Reference(OrganizationHospital)
* code = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/ProviderRoleCS#ap
* specialty[0] = http://nucc.org/provider-taxonomy#207R00000X "Internal Medicine Physician"
* specialty[+] = http://nucc.org/provider-taxonomy#207RC0000X "Cardiovascular Disease Physician"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Restriction-WomensShelters.fsh

Instance: RestrictionWomensShelter
InstanceOf: Consent
Title: "Consent/cotkDnGQjpHijDsRR"
Description: "Restriction (Consent) on accessing Women's Shelter locations to certified Social Workers only"
Usage: #example
* id = "cotkDnGQjpHijDsRR"
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy "Privacy Consent" 
* category = http://terminology.hl7.org/CodeSystem/consentcategorycodes#rsreid "Re-identifiable Information Access"
* policy.authority = "https://otda.ny.gov/programs/shelter/regulations.asp"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/StructureDefinition.MatchQuality.fsh

// Instance: StructureDefinitionMatchQuality
// InstanceOf: StructureDefinition
// Title: "Match Quality"
// Description: "StructureDefinition - Trusted Client Attestation"
// Usage: #definition
// * id = "match-quality"
// * name = "Match Quality"
// * status = #active
// * kind = #primitive-type
// * abstract = false
// * type = http://hl7.org/fhir/data-types#Bundle "Bundle"
// * url = "http://hl7.org/fhir/StructureDefinition/geolocation"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Subscription.Org-rest-hook.fsh

Instance: Subscription-RestHook
InstanceOf: Subscription
Title: "Subscription/s7aTc2yk4YQyBRify"
Description: "Subscription updates arrive via POST, PUSH, PATCH operations to HTTP endpoints."
Usage: #example
* id = "s7aTc2yk4YQyBRify"
* status = #active
* criteria = "{}"
* channel.type = #rest-hook
* channel.endpoint = "https://federated-dir.meteorapp.com/baseR4/Organization"
* reason = "Back-end subscription updates for a specific federated directory (running on localhost)"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/Subscription.Org-websocket.fsh

Instance: Subscription-Webhook
InstanceOf: Subscription
Title: "Subscription/s6kJSgzdtcHzpuSP2"
Description: "Subscription updates arrive via websockets."
Usage: #example
* id = "s6kJSgzdtcHzpuSP2"
* status = #active
* criteria = "{}"
* channel.type = #websocket
* channel.endpoint = "Organizations"
* reason = "Application user-interface for public facing web client"


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/TestScript-Attestation.fsh

Instance: AttestationTestScript
InstanceOf: TestScript
Title: "Attestation"
Description: "TestScript - Attestation of new clinic information."
Usage: #definition
* id = "48twF7WfuXkxdnHkh"
* url = "http://"
* status = #draft
* name = "Attestation"
* title = "Attestation"
* date = "2022-06-14T21:41:40.107Z"
* publisher = "FHIR at Scale Taskforce (FAST) && FHIR Foundry"
* version = "0.0.1"
* jurisdiction = urn:iso:std:iso:3166#US
* fixture[0].id = "d08a86ad-a356-5ac6-9056-773ac6642b2a"
* fixture[=].autocreate = true
* fixture[=].autodelete = true 
* fixture[=].resource.type = "Organization"
* fixture[=].resource = Reference(Organization-StJames) "St. James Infirmary"
* fixture[+].id = "f40d0e54-38c6-536e-bb0c-bb1077096f43"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* fixture[=].resource.type = "Organization"
* fixture[=].resource = Reference(OrganizationHamiltonClinic) "Cancer Clinic" 
* fixture[+].id = "1419369a-4b9e-5efc-bb5c-75d4612b8d0d"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* fixture[=].resource.type = "HealthcareService"
* fixture[=].resource = Reference(ServiceHospER)
* fixture[+].id = "906ab31c-1103-512a-9817-7f65e8203a5b"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* fixture[=].resource.type = "Endpoint"
* fixture[=].resource = Reference(AcmeOfCTPortalEndpoint) "Endpoint for St James Hospital"
* fixture[+].id = "523c5dcd-978d-5769-8a5b-835832af9dca"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
// * fixture[=].resource.name.text = "Allison Camron, MD"
// * fixture[=].resource.name.family = "Camron"
// * fixture[=].resource.name.given = "Allison"
* fixture[=].resource.type = "Practitioner"
* fixture[=].resource = Reference(PractitionerAllisonCamron)
* test[0].id = "839236b5-6d9c-5332-8211-ad4bb93110b6"
* test[=].name = "St. James Infirmary"
* test[=].action[0].operation.method = #put
* test[=].action[=].operation.label = "St. James Infirmary"
* test[=].action[=].operation.description = "PUT {{hostname}}/baseR4/Organization/o6AJtyEk6sSsHWLjt"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/baseR4/Organization/o6AJtyEk6sSsHWLjt"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#update
* test[=].action[=].operation.resource = #Organization
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 200(OK)."
* test[=].action[=].assert.response = #okay
* test[=].action[=].assert.warningOnly = false
* test[+].id = "dbe0ce7b-9557-5ed2-91c8-f3779ed20c64"
* test[=].name = "456 Main Street"
* test[=].action[0].operation.method = #put
* test[=].action[=].operation.label = "456 Main Street"
* test[=].action[=].operation.description = "PUT {{hostname}}/baseR4/Location/l4bjaZGQfeNfhAEpb"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/baseR4/Location/l4bjaZGQfeNfhAEpb"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#update
* test[=].action[=].operation.resource = #Location
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 200(OK)."
* test[=].action[=].assert.response = #okay
* test[=].action[=].assert.warningOnly = false
* test[+].id = "973efcd9-1ca3-573a-991d-d615d43489c0"
* test[=].name = "Emergency Medical Services"
* test[=].action[0].operation.method = #put
* test[=].action[=].operation.label = "Emergency Medical Services"
* test[=].action[=].operation.description = "PUT {{hostname}}/baseR4/HealthcareService/hsEk35Ayonz755t6u"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/baseR4/HealthcareService/hsEk35Ayonz755t6u"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#update
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 200(OK)."
* test[=].action[=].assert.response = #okay
* test[=].action[=].assert.warningOnly = false
* test[+].id = "e62cf94a-278e-5692-b965-ff02dfb41c35"
* test[=].name = "St. James Infirmary - Patient Portal"
* test[=].action[0].operation.method = #put
* test[=].action[=].operation.label = "St. James Infirmary - Patient Portal"
* test[=].action[=].operation.description = "PUT {{hostname}}/baseR4/Endpoint/etKzBJvzbeHDZi7Gd?resourceType=Endpoint"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/baseR4/Endpoint/etKzBJvzbeHDZi7Gd?resourceType=Endpoint"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#update
* test[=].action[=].operation.resource = #Endpoint
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 200(OK)."
* test[=].action[=].assert.response = #okay
* test[=].action[=].assert.warningOnly = false
* test[+].id = "6d556f90-795c-5363-a64a-fffd3fd7c515"
* test[=].name = "Dr. Allison Camron"
* test[=].action[0].operation.method = #put
* test[=].action[=].operation.label = "Dr. Allison Camron"
* test[=].action[=].operation.description = "PUT {{hostname}}/baseR4/Practitioner/pZzusFYr3PBYyRnot?resourceType=Practitioner"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/baseR4/Practitioner/pZzusFYr3PBYyRnot?resourceType=Practitioner"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#update
* test[=].action[=].operation.resource = #Practitioner
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 200(OK)."
* test[=].action[=].assert.response = #okay
* test[=].action[=].assert.warningOnly = false

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/TestScript-DynamicClientRegistration.fsh

Instance: DynamicClientRegistrationTestScript
InstanceOf: TestScript
Title: "Dynamic Client Registration"
Description: "TestScript - Dynamic Client Registration"
Usage: #definition
* id = "gszMyXpwsdoAjJZeh"
* url = "http://"
* status = #draft
* name = "UDAP_Dynamic_Client_Registration"
* title = "UDAP Dynamic Client Registration"
* date = "2022-06-14T23:24:46.024Z"
* publisher = "FHIR at Scale Taskforce (FAST) && FHIR Foundry"
* version = "0.0.1"
* jurisdiction = urn:iso:std:iso:3166#US
* fixture[0].id = "47be8943-2604-5d89-abb9-5c4e13a5120b"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* fixture[+].id = "8b3f5577-4344-5c5e-91a0-ac4942632496"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* fixture[+].id = "b079ec7f-b12a-5fec-bd06-338c44571163"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* fixture[+].id = "f6c54af2-61fd-586d-afde-2d402ebf33af"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* fixture[+].id = "ff897a54-61db-5461-aebb-a42fc4ed0e4d"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* test[0].id = "61dcf836-8376-5637-90e0-24ede617b7b7"
* test[=].name = "National Directory - FHIR Metadata"
* test[=].action[0].operation.method = #get
* test[=].action[=].operation.label = "National Directory - FHIR Metadata"
* test[=].action[=].operation.description = "GET {{hostname}}/baseR4/metadata"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/baseR4/metadata"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#read
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 200(OK)."
* test[=].action[=].assert.response = #okay
* test[=].action[=].assert.warningOnly = false
* test[+].id = "72dc5199-fe6f-5c22-bf91-73f0d040d35f"
* test[=].name = "National Directory - UDAP Metadata"
* test[=].action[0].operation.method = #get
* test[=].action[=].operation.label = "National Directory - UDAP Metadata"
* test[=].action[=].operation.description = "GET {{hostname}}/.well-known/udap"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/.well-known/udap"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#read
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 200(OK)."
* test[=].action[=].assert.response = #okay
* test[=].action[=].assert.warningOnly = false
* test[+].id = "563db1ef-42e4-51e2-915d-714a157af21d"
* test[=].name = "Registration (UDAP)"
* test[=].action[0].operation.method = #post
* test[=].action[=].operation.label = "Registration (UDAP)"
* test[=].action[=].operation.description = "POST {{hostname}}/oauth/registration"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/oauth/registration"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#create
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 201(Success)."
* test[=].action[=].assert.response = #created
* test[=].action[=].assert.warningOnly = false
* test[+].id = "e3daf953-6237-5170-8750-3100c0d76cb3"
* test[=].name = "Registration (SMART on FHIR)"
* test[=].action[0].operation.method = #post
* test[=].action[=].operation.label = "Registration (SMART on FHIR)"
* test[=].action[=].operation.description = "POST {{hostname}}/oauth/registration"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/oauth/registration"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#create
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 201(Success)."
* test[=].action[=].assert.response = #created
* test[=].action[=].assert.warningOnly = false
* test[+].id = "dcd8fa9d-767f-5c63-9648-dffa6974d322"
* test[=].name = "Authorize - Stand Alone"
* test[=].action[0].operation.method = #get
* test[=].action[=].operation.label = "Authorize - Stand Alone"
* test[=].action[=].operation.description = "GET {{hostname}}/oauth/authorize"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/oauth/authorize"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#read
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 200(OK)."
* test[=].action[=].assert.response = #okay
* test[=].action[=].assert.warningOnly = false
* test[+].id = "e61c9e92-fcdc-5ca3-8b0c-c80d55b50e4e"
* test[=].name = "Authorize - EHR Launch"
* test[=].action[0].operation.method = #get
* test[=].action[=].operation.label = "Authorize - EHR Launch"
* test[=].action[=].operation.description = "GET {{hostname}}/oauth/authorize"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/oauth/authorize"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#read
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 200(OK)."
* test[=].action[=].assert.response = #okay
* test[=].action[=].assert.warningOnly = false
* test[+].id = "cca5c045-fedd-5617-9803-7542eed48739"
* test[=].name = "Token request"
* test[=].action[0].operation.method = #get
* test[=].action[=].operation.label = "Token request"
* test[=].action[=].operation.description = "GET {{hostname}}/oauth/token"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/oauth/token"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#read
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 200(OK)."
* test[=].action[=].assert.response = #okay
* test[=].action[=].assert.warningOnly = false

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/TestScript-FederatedQuery.fsh

Instance: FederatedQueryTestScript
InstanceOf: TestScript
Title: "Federated Query"
Description: "TestScript - Distribute App (DApp) access to a centralized directory."
Usage: #definition
* id = "fquA2atodHs6n3cYs"
* url = "http://example.org/ExampleScenario/FederatedQuery"
* status = #active
* name = "Federated_Query"
* title = ""
* date = "2022-06-03T18:08:03.756Z"
* publisher = ""
* version = "0.0.1"
* fixture[0].resource = Reference(Organization-StJames) "St. Jame’s Infirmary"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* fixture[+].resource = Reference(PractitionerAllisonCamron) "Allison Camron, MD"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* fixture[+].resource.type = "Organization"
* fixture[=].resource = Reference(OrganizationHamiltonClinic) "456 Main Street Anytown CT 00014-1234"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* fixture[+].resource.type = "HealthcareService"
* fixture[=].resource = Reference(ServiceHospER) "Emergency Medicine"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* fixture[+].resource.type = "Endpoint"
* fixture[=].resource = Reference(AcmeOfCTPortalEndpoint) "St. James Portal"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* fixture[+].resource.type = "Device"
* fixture[=].resource = Reference(DeviceFederatedDir) "Distributed App (DApp)"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* fixture[+].resource.type = "Device" 
* fixture[=].resource = Reference(DeviceNatDir) "National Directory"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* test.name = "Query directory for St. James Infirmary"
* test.action[0].operation.method = #get 
* test.action[=].operation.label = "Query directory for St. James Infirmary organization"
* test.action[=].operation.description = "/Organization?name=St. James Infirmary"
* test.action[=].operation.targetId = "dTixApQCHxxheiLX3"
* test.action[=].operation.sourceId = "oPxE9d7Wtqjy9WEZx"
* test.action[=].operation.encodeRequestUrl = false
* test.action[=].operation.url = "/Organization?name=St. James Infirmary"
* test.action[+].operation.method = #get 
* test.action[=].operation.label = "Query directory for street address"
* test.action[=].operation.description = "/Location?address=456 Main Street"
* test.action[=].operation.targetId = "dTixApQCHxxheiLX3"
* test.action[=].operation.sourceId = "oPxE9d7Wtqjy9WEZx"
* test.action[=].operation.encodeRequestUrl = false
* test.action[=].operation.url = "/Location?address=456 Main Street"
* test.action[+].operation.method = #get 
* test.action[=].operation.label = "Query directory for street address"
* test.action[=].operation.description = "/Location?address-postalcode=00014"
* test.action[=].operation.targetId = "dTixApQCHxxheiLX3"
* test.action[=].operation.sourceId = "oPxE9d7Wtqjy9WEZx"
* test.action[=].operation.encodeRequestUrl = false
* test.action[=].operation.url = "/Location?address-postalcode=00014"
* test.action[+].operation.method = #get 
* test.action[=].operation.label = "Query directory for local services"
* test.action[=].operation.description = "/HealthcareService?category=emergency"
* test.action[=].operation.targetId = "dTixApQCHxxheiLX3"
* test.action[=].operation.sourceId = "oPxE9d7Wtqjy9WEZx"
* test.action[=].operation.encodeRequestUrl = false
* test.action[=].operation.url = "/HealthcareService?category=emergency"
* test.action[+].operation.method = #get 
* test.action[=].operation.label = "Query directory for local services"
* test.action[=].operation.description = "/Endpoint?name=St. James"
* test.action[=].operation.targetId = "dTixApQCHxxheiLX3"
* test.action[=].operation.sourceId = "oPxE9d7Wtqjy9WEZx"
* test.action[=].operation.encodeRequestUrl = false
* test.action[=].operation.url = "/Endpoint?name=St. James"
* test.action[+].operation.method = #get 
* test.action[=].operation.label = "Query directory for physician"
* test.action[=].operation.description = "/Practitioner?name=Camron"
* test.action[=].operation.targetId = "dTixApQCHxxheiLX3"
* test.action[=].operation.sourceId = "oPxE9d7Wtqjy9WEZx"
* test.action[=].operation.encodeRequestUrl = false
* test.action[=].operation.url = "/Practitioner?name=Camron"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/TestScript-ProviderQualificationVerification.fsh

Instance: ProviderQualificationVerification
InstanceOf: TestScript
Title: "Verification"
Description: "TestScript - Verification of provider qualifications"
Usage: #definition
* id = "mqrNfC6BttERhMEZ9"
* status = #active
* name = "Provider_Qualification_Verification"
* url = "http://"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/TestScript-RestrictedAccessToShelters.fsh

Instance: RestrictedDataTestScript
InstanceOf: TestScript
Title: "Restricted Access"
Description: "TestScript - Restricted access to women's shelters."
Usage: #definition
* id = "XA9eSGbRZR7Nrz2Gd"
* url = "http://"
* status = #draft
* name = "Tiered_OAuth_Restricted_Data"
* title = "Tiered OAuth - Restricted Access to Womens Shelters"
* date = "2022-06-14T23:19:30.696Z"
* publisher = "FHIR at Scale Taskforce (FAST) && FHIR Foundry"
* version = "0.0.1"
* jurisdiction = urn:iso:std:iso:3166#US
* fixture[0].id = "73594318-988d-5647-b3d8-1f1841578c27"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* fixture[=].resource.type = "Location"
* fixture[=].resource = Reference(PharmLoc2) "OrgA CT Location 2" 
* fixture[+].id = "43552bb8-5e5e-58e2-b233-36727b1d9d87"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* fixture[=].resource.type = "ExampleScenario"
* fixture[=].resource = Reference(WomensShelterScenario)
* test[0].id = "4222467a-7bc0-54e4-9879-88fa0c05c412"
* test[=].name = "Social Worker - Access Role"
* test[=].action[0].operation.method = #put
* test[=].action[=].operation.label = "Social Worker - Access Role"
* test[=].action[=].operation.description = "PUT {{hostname}}/baseR4/PractitionerRole/rCY6ePpLywTbfx3yp"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/baseR4/PractitionerRole/rCY6ePpLywTbfx3yp"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#update
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 201(Success)."
* test[=].action[=].assert.response = #created
* test[=].action[=].assert.warningOnly = false
* test[+].id = "ef27765c-a138-5669-b255-17bb91d30cc0"
* test[=].name = "Women's Shelter Location"
* test[=].action[0].operation.method = #put
* test[=].action[=].operation.label = "Women's Shelter Location"
* test[=].action[=].operation.description = "PUT {{hostname}}/baseR4/Location/lyW5mPW2nf3DHC7h6"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/baseR4/Location/lyW5mPW2nf3DHC7h6"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#update
* test[=].action[=].operation.resource = #Location
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 201(Success)."
* test[=].action[=].assert.response = #created
* test[=].action[=].assert.warningOnly = false
* test[+].id = "309ca261-92bf-5063-ba69-77f29c52c671"
* test[=].name = "Restriction on accessing Women's Shelters"
* test[=].action[0].operation.method = #put
* test[=].action[=].operation.label = "Restriction on accessing Women's Shelters"
* test[=].action[=].operation.description = "PUT {{hostname}}/baseR4/Restriction/cotkDnGQjpHijDsRR"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/baseR4/Restriction/cotkDnGQjpHijDsRR"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#update
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 201(Success)."
* test[=].action[=].assert.response = #created
* test[=].action[=].assert.warningOnly = false
* test[+].id = "5fa71b21-0437-58c1-9110-2e19b3ada768"
* test[=].name = "Betty Busybody"
* test[=].action[0].operation.method = #put
* test[=].action[=].operation.label = "Betty Busybody"
* test[=].action[=].operation.description = "PUT {{hostname}}/baseR4/Practitioner"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/baseR4/Practitioner"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#update
* test[=].action[=].operation.resource = #Practitioner
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 201(Success)."
* test[=].action[=].assert.response = #created
* test[=].action[=].assert.warningOnly = false

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/TestScript-Subscriptions.fsh

Instance: SubscriptionTestScript
InstanceOf: TestScript
Title: "Subscriptions"
Description: "TestScript - PUSH messaging via Subscriptions from National Directory to Federated instances."
Usage: #definition
* id = "odYxqzPToJTN3A8GN"
* url = "http://"
* status = #draft
* name = "Subscriptions"
* title = "Subscriptions"
* date = "2022-06-14T23:07:30.522Z"
* publisher = "FHIR at Scale Taskforce (FAST) && FHIR Foundry"
* version = "0.0.1"
* jurisdiction = urn:iso:std:iso:3166#US
* fixture[0].id = "2118c65c-f320-567c-baa9-efd1ad4abb8d"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* fixture[=].resource.type = "Subscription"
* fixture[=].resource = Reference(Subscription-RestHook)
* fixture[+].id = "4d5c229a-1c32-5418-89e6-6bc75887e055"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* fixture[=].resource.type = "Subscription"
* fixture[=].resource = Reference(Subscription-RestHook)
* fixture[+].id = "69c02b22-fb36-5b29-a62e-530e7b583efd"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
* fixture[=].resource.type = "Organization"
* fixture[=].resource = Reference(Organization-StJames) "St. James Infirmary - Covid Ward"
* fixture[+].id = "e751df8a-4678-5744-9344-4813e27c066c"
* fixture[=].autocreate = true
* fixture[=].autodelete = true
// * fixture[=].resource.display.text = "Allison Camron, MD"
// * fixture[=].resource.display.family = "Camron"
// * fixture[=].resource.display.given = "Allison"
* fixture[=].resource.type = "Practitioner"
* fixture[=].resource = Reference(PractitionerAllisonCamron)
* test[0].id = "85ab6581-ce9e-5981-bdf1-9150958d20e3"
* test[=].name = "Subscribe to Organization updates via rest-hooks"
* test[=].action[0].operation.method = #put
* test[=].action[=].operation.label = "Subscribe to Organization updates via rest-hooks"
* test[=].action[=].operation.description = "PUT {{hostname}}/baseR4/Subscription/s7aTc2yk4YQyBRify"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/baseR4/Subscription/s7aTc2yk4YQyBRify"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#update
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 201(Success)."
* test[=].action[=].assert.response = #created
* test[=].action[=].assert.warningOnly = false
* test[+].id = "730b1dcf-a077-5989-90c3-29b5290d9b07"
* test[=].name = "Delete Subscription"
* test[=].action[0].operation.method = #delete
* test[=].action[=].operation.label = "Delete Subscription"
* test[=].action[=].operation.description = "DELETE {{hostname}}/baseR4/Subscription/s7aTc2yk4YQyBRify"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/baseR4/Subscription/s7aTc2yk4YQyBRify"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#delete
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 204(Gone)."
* test[=].action[=].assert.response = #noContent
* test[=].action[=].assert.warningOnly = false
* test[+].id = "31c11e63-c042-5f13-8470-e5706042c7c8"
* test[=].name = "Attest a new Organization (St. James Infirmary)"
* test[=].action[0].operation.method = #put
* test[=].action[=].operation.label = "Attest a new Organization (St. James Infirmary)"
* test[=].action[=].operation.description = "PUT {{hostname}}/baseR4/Organization/o6AJtyEk6sSsHWLjt"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/baseR4/Organization/o6AJtyEk6sSsHWLjt"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#update
* test[=].action[=].operation.resource = #Organization
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 201(Success)."
* test[=].action[=].assert.response = #created
* test[=].action[=].assert.warningOnly = false
* test[+].id = "6c0476a3-c808-51ca-9986-3dcbaa584286"
* test[=].name = "Delete an existing Organization (St. James Infirmary)"
* test[=].action[0].operation.method = #delete
* test[=].action[=].operation.label = "Delete an existing Organization (St. James Infirmary)"
* test[=].action[=].operation.description = "DELETE {{hostname}}/baseR4/Organization/o6AJtyEk6sSsHWLjt"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/baseR4/Organization/o6AJtyEk6sSsHWLjt"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#delete
* test[=].action[=].operation.resource = #Organization
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 204(Gone)."
* test[=].action[=].assert.response = #noContent
* test[=].action[=].assert.warningOnly = false
* test[+].id = "b2e518b3-c12c-5b3b-b7d7-f0dda6aa3733"
* test[=].name = "Attest a new Practitioner (Dr. Allison Camron)"
* test[=].action[0].operation.method = #put
* test[=].action[=].operation.label = "Attest a new Practitioner (Dr. Allison Camron)"
* test[=].action[=].operation.description = "PUT {{hostname}}/baseR4/Practitioner/fZzusFYr3PBYyRnot"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/baseR4/Practitioner/fZzusFYr3PBYyRnot"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#update
* test[=].action[=].operation.resource = #Practitioner
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 201(Success)."
* test[=].action[=].assert.response = #created
* test[=].action[=].assert.warningOnly = false
* test[+].id = "d4044822-df8b-51dd-86fe-5c1582a7c501"
* test[=].name = "Delete an existing Practitioner (Allison Camron)"
* test[=].action[0].operation.method = #delete
* test[=].action[=].operation.label = "Delete an existing Practitioner (Allison Camron)"
* test[=].action[=].operation.description = "DELETE {{hostname}}/baseR4/Practitioner/fZzusFYr3PBYyRnot"
* test[=].action[=].operation.accept = #json
* test[=].action[=].operation.encodeRequestUrl = true
* test[=].action[=].operation.url = "{{hostname}}/baseR4/Practitioner/fZzusFYr3PBYyRnot"
* test[=].action[=].operation.type = http://terminology.hl7.org/CodeSystem/testscript-operation-codes#delete
* test[=].action[=].operation.resource = #Practitioner
* test[=].action[+].assert.description = "Confirm that the returned HTTP status is 204(Gone)."
* test[=].action[=].assert.response = #noContent
* test[=].action[=].assert.warningOnly = false

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/UdapMetadata.fsh

// Instance: UdapMetadata
// InstanceOf: Basic
// Title: "UDAP Metadata"
// Description: "National Directory - UDAP Metadata"
// Usage: #example
// * x5c = "-----BEGIN PUBLIC KEY-----\r\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAi0IlmAWwsjhg9fMJfQgy\r\nvGrAGP4CRWbBFkIS+rJObUMcjkPnWQYIJxq7wKnc/po8S0Dro/7R8T8anNOtuki6\r\nsc7VSXFmhDpUhGq2kQbJfg+D8Tl6ZzZozSxW19YxWVaOpOKkEFl1I7hK2UcP3Qml\r\nt0/Yxkf+G2xZjwJZADGbU5ER5XwYslpezTfBeKV8tc6DITR1I5UaFIftw/ZXj1kB\r\ngI5QyPowhm+IngWRagHtOc/JBEN11G+vlHAdCrfKNLGRWlj/AGbK7I8vPVxHrp+z\r\nZRpHx9UR3QVTQLSJFn0YjQzQSIxChQ8/iW0cmJsu802MXi3ovo+OPoFMOHf12D6/\r\ntQIDAQAB\r\n-----END PUBLIC KEY-----\r\n"
// * udap_versions_supported = "1"
// * udap_certifications_supported = "https://vhdir.meteorapp.com/udap/profiles/example-certification"
// * udap_certifications_required = "https://vhdir.meteorapp.com/udap/profiles/example-certification"
// * grant_types_supported[0] = "authorization_code"
// * grant_types_supported[+] = "refresh_token"
// * grant_types_supported[+] = "client_credentials"
// * scopes_supported[0] = "openid"
// * scopes_supported[+] = "launch/patient"
// * scopes_supported[+] = "system/AuditEvent.read"
// * scopes_supported[+] = "system/Bundle.read"
// * scopes_supported[+] = "system/CareTeam.read"
// * scopes_supported[+] = "system/CodeSystem.read"
// * scopes_supported[+] = "system/Communication.read"
// * scopes_supported[+] = "system/CommunicationRequest.read"
// * scopes_supported[+] = "system/Endpoint.read"
// * scopes_supported[+] = "system/HealthcareService.read"
// * scopes_supported[+] = "system/InsurancePlan.read"
// * scopes_supported[+] = "system/Location.read"
// * scopes_supported[+] = "system/Organization.read"
// * scopes_supported[+] = "system/OrganizationAffiliation.read"
// * scopes_supported[+] = "system/Practitioner.read"
// * scopes_supported[+] = "system/PractitionerRole.read"
// * scopes_supported[+] = "system/Provenance.read"
// * scopes_supported[+] = "system/SearchParameter.read"
// * scopes_supported[+] = "system/Task.read"
// * scopes_supported[+] = "system/StructureDefinition.read"
// * scopes_supported[+] = "system/Subscription.read"
// * scopes_supported[+] = "system/ValueSet.read"
// * scopes_supported[+] = "system/VerificationResult.read"
// * authz_endpoint = "https://vhdir.meteorapp.com/oauth/authorize"
// * authorization = "https://vhdir.meteorapp.com/oauth/authorize"
// * authz = "https://vhdir.meteorapp.com/oauth/authorize"
// * authorization_endpoint = "https://vhdir.meteorapp.com/oauth/authorize"
// * token_endpoint = "https://vhdir.meteorapp.com/oauth/token"
// * token_endpoint_auth_methods_supported = "private_key_jwt"
// * token_endpoint_auth_signing_alg_values_supported[0] = "RS256"
// * token_endpoint_auth_signing_alg_values_supported[+] = "ES384"
// * registration_endpoint = "https://vhdir.meteorapp.com/oauth/registration"
// * registration_endpoint_jwt_signing_alg_values_supported[0] = "RS256"
// * registration_endpoint_jwt_signing_alg_values_supported[+] = "ES384"
// * raw_metadata.iss = "https://vhdir.meteorapp.com/"
// * raw_metadata.sub = "https://vhdir.meteorapp.com/"
// * raw_metadata.exp = 1651548304
// * raw_metadata.iat = 1651548304
// * raw_metadata.jti = "random-value-aGDaG5MTDypGMvDhq"
// * raw_metadata.authorization_endpoint = "https://vhdir.meteorapp.com/oauth/authorize"
// * raw_metadata.token_endpoint = "https://vhdir.meteorapp.com/oauth/token"
// * raw_metadata.registration_endpoint = "https://vhdir.meteorapp.com/oauth/registration"
// * udap_profiles_supported[0] = "udap_authz"
// * udap_profiles_supported[+] = "udap_dcr"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/examples/ValueSet-HealthcareProviderTaxonomy.fsh

ValueSet: HealthcareProviderTaxonomy
Title: "Healthcare Provider Taxonomy" 
Description: "NPPI Healthcare Provider Taxonomy" 
//* ^id = "2.16.840.1.114222.4.11.1066"
* ^meta.versionId = "14"
* ^meta.lastUpdated = "2020-05-27T10:18:19.000-04:00"
* ^version = "20190521"
* ^status = #active
* ^url = "http://"
* ^date = "2020-05-26T18:25:55-04:00"
* ^publisher = "HL7 Terminology"
* ^expansion.identifier = "urn:uuid:14041323-9260-4b5e-bae1-0f1fa4efd85c"
* ^expansion.timestamp = "2022-07-10T18:42:43-04:00"
* ^expansion.total = 856
* ^expansion.offset = 0
* ^expansion.parameter[0].name = "count"
* ^expansion.parameter[=].valueInteger = 1000
* ^expansion.parameter[+].name = "offset"
* ^expansion.parameter[=].valueInteger = 0
* ^expansion.contains[0].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #101200000X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Drama Therapist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #101Y00000X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Counselor"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #101YA0400X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Counselor, Addiction (Substance Use Disorder)"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #101YM0800X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Counselor, Mental Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #101YP1600X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Counselor, Pastoral"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #101YP2500X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Counselor, Professional"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #101YS0200X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Counselor, School"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #102L00000X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Psychoanalyst"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #102X00000X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Poetry Therapist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103G00000X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Clinical Neuropsychologist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103K00000X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Behavior Analyst"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103T00000X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Psychologist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103TA0400X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Psychologist, Addiction (Substance Use Disorder)"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103TA0700X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Psychologist, Adult Development & Aging"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103TB0200X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Psychologist, Cognitive & Behavioral"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103TC0700X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Psychologist, Clinical"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103TC1900X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Psychologist, Counseling"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103TC2200X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Psychologist, Clinical Child & Adolescent"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103TE1100X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Psychologist, Exercise & Sports"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103TF0000X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Psychologist, Family"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103TF0200X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Psychologist, Forensic"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103TH0004X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Psychologist, Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103TH0100X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Psychologist, Health Service"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103TM1800X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Psychologist, Intellectual & Developmental Disabilities"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103TP0016X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Psychologist, Prescribing (Medical)"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103TP0814X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Psychologist, Psychoanalysis"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103TP2701X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Psychologist, Group Psychotherapy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103TR0400X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Psychologist, Rehabilitation"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #103TS0200X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Psychologist, School"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #104100000X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Social Worker"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1041C0700X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Social Worker, Clinical"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1041S0200X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Social Worker, School"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #106E00000X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Assistant Behavior Analyst"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #106H00000X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Marriage & Family Therapist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #106S00000X
* ^expansion.contains[=].display = "Behavioral Health & Social Service Providers; Behavior Technician"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #111N00000X
* ^expansion.contains[=].display = "Chiropractic Providers; Chiropractor"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #111NI0013X
* ^expansion.contains[=].display = "Chiropractic Providers; Chiropractor, Independent Medical Examiner"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #111NI0900X
* ^expansion.contains[=].display = "Chiropractic Providers; Chiropractor, Internist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #111NN0400X
* ^expansion.contains[=].display = "Chiropractic Providers; Chiropractor, Neurology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #111NN1001X
* ^expansion.contains[=].display = "Chiropractic Providers; Chiropractor, Nutrition"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #111NP0017X
* ^expansion.contains[=].display = "Chiropractic Providers; Chiropractor, Pediatric Chiropractor"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #111NR0200X
* ^expansion.contains[=].display = "Chiropractic Providers; Chiropractor, Radiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #111NR0400X
* ^expansion.contains[=].display = "Chiropractic Providers; Chiropractor, Rehabilitation"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #111NS0005X
* ^expansion.contains[=].display = "Chiropractic Providers; Chiropractor, Sports Physician"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #111NT0100X
* ^expansion.contains[=].display = "Chiropractic Providers; Chiropractor, Thermography"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #111NX0100X
* ^expansion.contains[=].display = "Chiropractic Providers; Chiropractor, Occupational Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #111NX0800X
* ^expansion.contains[=].display = "Chiropractic Providers; Chiropractor, Orthopedic"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #122300000X
* ^expansion.contains[=].display = "Dental Providers; Dentist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1223D0001X
* ^expansion.contains[=].display = "Dental Providers; Dentist, Dental Public Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1223D0004X
* ^expansion.contains[=].display = "Dental Providers; Dentist, Dentist Anesthesiologist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1223E0200X
* ^expansion.contains[=].display = "Dental Providers; Dentist, Endodontics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1223G0001X
* ^expansion.contains[=].display = "Dental Providers; Dentist, General Practice"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1223P0106X
* ^expansion.contains[=].display = "Dental Providers; Dentist, Oral and Maxillofacial Pathology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1223P0221X
* ^expansion.contains[=].display = "Dental Providers; Dentist, Pediatric Dentistry"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1223P0300X
* ^expansion.contains[=].display = "Dental Providers; Dentist, Periodontics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1223P0700X
* ^expansion.contains[=].display = "Dental Providers; Dentist, Prosthodontics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1223S0112X
* ^expansion.contains[=].display = "Dental Providers; Dentist, Oral and Maxillofacial Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1223X0008X
* ^expansion.contains[=].display = "Dental Providers; Dentist, Oral and Maxillofacial Radiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1223X0400X
* ^expansion.contains[=].display = "Dental Providers; Dentist, Orthodontics and Dentofacial Orthopedics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1223X2210X
* ^expansion.contains[=].display = "Dental Providers; Dentist, Orofacial Pain"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #122400000X
* ^expansion.contains[=].display = "Dental Providers; Denturist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #124Q00000X
* ^expansion.contains[=].display = "Dental Providers; Dental Hygienist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #125J00000X
* ^expansion.contains[=].display = "Dental Providers; Dental Therapist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #125K00000X
* ^expansion.contains[=].display = "Dental Providers; Advanced Practice Dental Therapist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #125Q00000X
* ^expansion.contains[=].display = "Dental Providers; Oral Medicinist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #126800000X
* ^expansion.contains[=].display = "Dental Providers; Dental Assistant"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #126900000X
* ^expansion.contains[=].display = "Dental Providers; Dental Laboratory Technician"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #132700000X
* ^expansion.contains[=].display = "Dietary & Nutritional Service Providers; Dietary Manager"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #133N00000X
* ^expansion.contains[=].display = "Dietary & Nutritional Service Providers; Nutritionist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #133NN1002X
* ^expansion.contains[=].display = "Dietary & Nutritional Service Providers; Nutritionist, \"Nutrition, Education\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #133V00000X
* ^expansion.contains[=].display = "Dietary & Nutritional Service Providers; \"Dietitian, Registered\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #133VN1004X
* ^expansion.contains[=].display = "Dietary & Nutritional Service Providers; \"Dietitian, Registered\", \"Nutrition, Pediatric\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #133VN1005X
* ^expansion.contains[=].display = "Dietary & Nutritional Service Providers; \"Dietitian, Registered\", \"Nutrition, Renal\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #133VN1006X
* ^expansion.contains[=].display = "Dietary & Nutritional Service Providers; \"Dietitian, Registered\", \"Nutrition, Metabolic\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #133VN1101X
* ^expansion.contains[=].display = "Dietary & Nutritional Service Providers; \"Dietitian, Registered\", \"Nutrition, Gerontological\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #133VN1201X
* ^expansion.contains[=].display = "Dietary & Nutritional Service Providers; \"Dietitian, Registered\", \"Nutrition, Obesity and Weight Management\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #133VN1301X
* ^expansion.contains[=].display = "Dietary & Nutritional Service Providers; \"Dietitian, Registered\", \"Nutrition, Oncology\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #133VN1401X
* ^expansion.contains[=].display = "Dietary & Nutritional Service Providers; \"Dietitian, Registered\", \"Nutrition, Pediatric Critical Care\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #133VN1501X
* ^expansion.contains[=].display = "Dietary & Nutritional Service Providers; \"Dietitian, Registered\", \"Nutrition, Sports Dietetics\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #136A00000X
* ^expansion.contains[=].display = "Dietary & Nutritional Service Providers; \"Dietetic Technician, Registered\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #146D00000X
* ^expansion.contains[=].display = "Emergency Medical Service Providers; Personal Emergency Response Attendant"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #146L00000X
* ^expansion.contains[=].display = "Emergency Medical Service Providers; \"Emergency Medical Technician, Paramedic\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #146M00000X
* ^expansion.contains[=].display = "Emergency Medical Service Providers; \"Emergency Medical Technician, Intermediate\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #146N00000X
* ^expansion.contains[=].display = "Emergency Medical Service Providers; \"Emergency Medical Technician, Basic\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #152W00000X
* ^expansion.contains[=].display = "Eye and Vision Services Providers; Optometrist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #152WC0802X
* ^expansion.contains[=].display = "Eye and Vision Services Providers; Optometrist, Corneal and Contact Management"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #152WL0500X
* ^expansion.contains[=].display = "Eye and Vision Services Providers; Optometrist, Low Vision Rehabilitation"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #152WP0200X
* ^expansion.contains[=].display = "Eye and Vision Services Providers; Optometrist, Pediatrics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #152WS0006X
* ^expansion.contains[=].display = "Eye and Vision Services Providers; Optometrist, Sports Vision"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #152WV0400X
* ^expansion.contains[=].display = "Eye and Vision Services Providers; Optometrist, Vision Therapy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #152WX0102X
* ^expansion.contains[=].display = "Eye and Vision Services Providers; Optometrist, Occupational Vision"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #156F00000X
* ^expansion.contains[=].display = "Eye and Vision Services Providers; Technician/Technologist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #156FC0800X
* ^expansion.contains[=].display = "Eye and Vision Services Providers; Technician/Technologist, Contact Lens"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #156FC0801X
* ^expansion.contains[=].display = "Eye and Vision Services Providers; Technician/Technologist, Contact Lens Fitter"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #156FX1100X
* ^expansion.contains[=].display = "Eye and Vision Services Providers; Technician/Technologist, Ophthalmic"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #156FX1101X
* ^expansion.contains[=].display = "Eye and Vision Services Providers; Technician/Technologist, Ophthalmic Assistant"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #156FX1201X
* ^expansion.contains[=].display = "Eye and Vision Services Providers; Technician/Technologist, Optometric Assistant"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #156FX1202X
* ^expansion.contains[=].display = "Eye and Vision Services Providers; Technician/Technologist, Optometric Technician"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #156FX1700X
* ^expansion.contains[=].display = "Eye and Vision Services Providers; Technician/Technologist, Ocularist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #156FX1800X
* ^expansion.contains[=].display = "Eye and Vision Services Providers; Technician/Technologist, Optician"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #156FX1900X
* ^expansion.contains[=].display = "Eye and Vision Services Providers; Technician/Technologist, Orthoptist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163W00000X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WA0400X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Addiction (Substance Use Disorder)"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WA2000X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Administrator"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WC0200X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Critical Care Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WC0400X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Case Management"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WC1400X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, College Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WC1500X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Community Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WC1600X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Continuing Education/Staff Development"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WC2100X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Continence Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WC3500X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Cardiac Rehabilitation"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WD0400X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Diabetes Educator"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WD1100X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, \"Dialysis, Peritoneal\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WE0003X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Emergency"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WE0900X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Enterostomal Therapy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WF0300X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Flight"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WG0000X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, General Practice"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WG0100X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Gastroenterology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WG0600X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Gerontology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WH0200X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Home Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WH0500X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Hemodialysis"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WH1000X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Hospice"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WI0500X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Infusion Therapy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WI0600X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Infection Control"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WL0100X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Lactation Consultant"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WM0102X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Maternal Newborn"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WM0705X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Medical-Surgical"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WM1400X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Nurse Massage Therapist (NMT)"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WN0002X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Neonatal Intensive Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WN0003X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, \"Neonatal, Low-Risk\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WN0300X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Nephrology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WN0800X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Neuroscience"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WN1003X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Nutrition Support"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WP0000X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Pain Management"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WP0200X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Pediatrics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WP0218X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Pediatric Oncology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WP0807X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, \"Psychiatric/Mental Health, Child & Adolescent\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WP0808X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Psychiatric/Mental Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WP0809X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, \"Psychiatric/Mental Health, Adult\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WP1700X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Perinatal"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WP2201X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Ambulatory Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WR0006X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Registered Nurse First Assistant"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WR0400X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Rehabilitation"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WR1000X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Reproductive Endocrinology/Infertility"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WS0121X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Plastic Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WS0200X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, School"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WU0100X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Urology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WW0000X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Wound Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WW0101X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, \"Women's Health Care, Ambulatory\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WX0002X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, \"Obstetric, High-Risk\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WX0003X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, \"Obstetric, Inpatient\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WX0106X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Occupational Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WX0200X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Oncology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WX0601X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Otorhinolaryngology & Head-Neck"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WX0800X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Orthopedic"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WX1100X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Ophthalmic"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #163WX1500X
* ^expansion.contains[=].display = "Nursing Service Providers; Registered Nurse, Ostomy Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #164W00000X
* ^expansion.contains[=].display = "Nursing Service Providers; Licensed Practical Nurse"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #164X00000X
* ^expansion.contains[=].display = "Nursing Service Providers; Licensed Vocational Nurse"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #167G00000X
* ^expansion.contains[=].display = "Nursing Service Providers; Licensed Psychiatric Technician"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #170100000X
* ^expansion.contains[=].display = "Other Service Providers; \"Medical Genetics, Ph.D. Medical Genetics\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #170300000X
* ^expansion.contains[=].display = "Other Service Providers; \"Genetic Counselor, MS\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #171000000X
* ^expansion.contains[=].display = "Other Service Providers; Military Health Care Provider"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1710I1002X
* ^expansion.contains[=].display = "Other Service Providers; Military Health Care Provider, Independent Duty Corpsman"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1710I1003X
* ^expansion.contains[=].display = "Other Service Providers; Military Health Care Provider, Independent Duty Medical Technicians"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #171100000X
* ^expansion.contains[=].display = "Other Service Providers; Acupuncturist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #171400000X
* ^expansion.contains[=].display = "Other Service Providers; Health & Wellness Coach"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #171M00000X
* ^expansion.contains[=].display = "Other Service Providers; Case Manager/Care Coordinator"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #171R00000X
* ^expansion.contains[=].display = "Other Service Providers; Interpreter"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #171W00000X
* ^expansion.contains[=].display = "Other Service Providers; Contractor"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #171WH0202X
* ^expansion.contains[=].display = "Other Service Providers; Contractor, Home Modifications"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #171WV0202X
* ^expansion.contains[=].display = "Other Service Providers; Contractor, Vehicle Modifications"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #172A00000X
* ^expansion.contains[=].display = "Other Service Providers; Driver"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #172M00000X
* ^expansion.contains[=].display = "Other Service Providers; Mechanotherapist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #172P00000X
* ^expansion.contains[=].display = "Other Service Providers; Naprapath"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #172V00000X
* ^expansion.contains[=].display = "Other Service Providers; Community Health Worker"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #173000000X
* ^expansion.contains[=].display = "Other Service Providers; Legal Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #173C00000X
* ^expansion.contains[=].display = "Other Service Providers; Reflexologist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #173F00000X
* ^expansion.contains[=].display = "Other Service Providers; \"Sleep Specialist, PhD\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #174200000X
* ^expansion.contains[=].display = "Other Service Providers; Meals"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #174400000X
* ^expansion.contains[=].display = "Other Service Providers; Specialist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1744G0900X
* ^expansion.contains[=].display = "Other Service Providers; Specialist, Graphics Designer"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1744P3200X
* ^expansion.contains[=].display = "Other Service Providers; Specialist, Prosthetics Case Management"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1744R1102X
* ^expansion.contains[=].display = "Other Service Providers; Specialist, Research Study"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1744R1103X
* ^expansion.contains[=].display = "Other Service Providers; Specialist, Research Data Abstracter/Coder"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #174H00000X
* ^expansion.contains[=].display = "Other Service Providers; Health Educator"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #174M00000X
* ^expansion.contains[=].display = "Other Service Providers; Veterinarian"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #174MM1900X
* ^expansion.contains[=].display = "Other Service Providers; Veterinarian, Medical Research"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #174N00000X
* ^expansion.contains[=].display = "Other Service Providers; \"Lactation Consultant, Non-RN\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #174V00000X
* ^expansion.contains[=].display = "Other Service Providers; Clinical Ethicist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #175F00000X
* ^expansion.contains[=].display = "Other Service Providers; Naturopath"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #175L00000X
* ^expansion.contains[=].display = "Other Service Providers; Homeopath"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #175M00000X
* ^expansion.contains[=].display = "Other Service Providers; \"Midwife, Lay\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #175T00000X
* ^expansion.contains[=].display = "Other Service Providers; Peer Specialist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #176B00000X
* ^expansion.contains[=].display = "Other Service Providers; Midwife"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #176P00000X
* ^expansion.contains[=].display = "Other Service Providers; Funeral Director"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #177F00000X
* ^expansion.contains[=].display = "Other Service Providers; Lodging"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #183500000X
* ^expansion.contains[=].display = "Pharmacy Service Providers; Pharmacist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1835C0205X
* ^expansion.contains[=].display = "Pharmacy Service Providers; Pharmacist, Critical Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1835G0303X
* ^expansion.contains[=].display = "Pharmacy Service Providers; Pharmacist, Geriatric"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1835N0905X
* ^expansion.contains[=].display = "Pharmacy Service Providers; Pharmacist, Nuclear"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1835N1003X
* ^expansion.contains[=].display = "Pharmacy Service Providers; Pharmacist, Nutrition Support"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1835P0018X
* ^expansion.contains[=].display = "Pharmacy Service Providers; Pharmacist, Pharmacist Clinician (PhC)/ Clinical Pharmacy Specialist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1835P0200X
* ^expansion.contains[=].display = "Pharmacy Service Providers; Pharmacist, Pediatrics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1835P1200X
* ^expansion.contains[=].display = "Pharmacy Service Providers; Pharmacist, Pharmacotherapy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1835P1300X
* ^expansion.contains[=].display = "Pharmacy Service Providers; Pharmacist, Psychiatric"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1835P2201X
* ^expansion.contains[=].display = "Pharmacy Service Providers; Pharmacist, Ambulatory Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #1835X0200X
* ^expansion.contains[=].display = "Pharmacy Service Providers; Pharmacist, Oncology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #183700000X
* ^expansion.contains[=].display = "Pharmacy Service Providers; Pharmacy Technician"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #193200000X
* ^expansion.contains[=].display = "Group; Multi-Specialty"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #193400000X
* ^expansion.contains[=].display = "Group; Single Specialty"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #202C00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Independent Medical Examiner"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #202K00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Phlebology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #204C00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; \"Neuromusculoskeletal Medicine, Sports Medicine\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #204D00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Neuromusculoskeletal Medicine & OMM"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #204E00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Oral & Maxillofacial Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #204F00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Transplant Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #204R00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Electrodiagnostic Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207K00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Allergy & Immunology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207KA0200X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Allergy & Immunology, Allergy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207KI0005X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Allergy & Immunology, Clinical & Laboratory Immunology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207L00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Anesthesiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207LA0401X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Anesthesiology, Addiction Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207LC0200X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Anesthesiology, Critical Care Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207LH0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Anesthesiology, Hospice and Palliative Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207LP2900X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Anesthesiology, Pain Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207LP3000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Anesthesiology, Pediatric Anesthesiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207N00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Dermatology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207ND0101X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Dermatology, MOHS-Micrographic Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207ND0900X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Dermatology, Dermatopathology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207NI0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Dermatology, Clinical & Laboratory Dermatological Immunology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207NP0225X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Dermatology, Pediatric Dermatology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207NS0135X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Dermatology, Procedural Dermatology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207P00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Emergency Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207PE0004X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Emergency Medicine, Emergency Medical Services"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207PE0005X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Emergency Medicine, Undersea and Hyperbaric Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207PH0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Emergency Medicine, Hospice and Palliative Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207PP0204X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Emergency Medicine, Pediatric Emergency Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207PS0010X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Emergency Medicine, Sports Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207PT0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Emergency Medicine, Medical Toxicology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207Q00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Family Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207QA0000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Family Medicine, Adolescent Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207QA0401X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Family Medicine, Addiction Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207QA0505X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Family Medicine, Adult Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207QB0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Family Medicine, Obesity Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207QG0300X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Family Medicine, Geriatric Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207QH0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Family Medicine, Hospice and Palliative Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207QS0010X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Family Medicine, Sports Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207QS1201X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Family Medicine, Sleep Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207R00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RA0000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Adolescent Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RA0001X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Advanced Heart Failure and Transplant Cardiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RA0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Adult Congenital Heart Disease"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RA0201X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Allergy & Immunology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RA0401X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Addiction Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RB0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Obesity Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RC0000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Cardiovascular Disease"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RC0001X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Clinical Cardiac Electrophysiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RC0200X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Critical Care Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RE0101X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, \"Endocrinology, Diabetes & Metabolism\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RG0100X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Gastroenterology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RG0300X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Geriatric Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RH0000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Hematology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RH0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Hospice and Palliative Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RH0003X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Hematology & Oncology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RH0005X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Hypertension Specialist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RI0001X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Clinical & Laboratory Immunology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RI0008X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Hepatology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RI0011X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Interventional Cardiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RI0200X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Infectious Disease"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RM1200X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Magnetic Resonance Imaging (MRI)"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RN0300X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Nephrology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RP1001X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Pulmonary Disease"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RR0500X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Rheumatology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RS0010X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Sports Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RS0012X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Sleep Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RT0003X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Transplant Hepatology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207RX0202X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Internal Medicine, Medical Oncology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207SC0300X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Medical Genetics, Clinical Cytogenetics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207SG0201X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Medical Genetics, Clinical Genetics (M.D.)"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207SG0202X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Medical Genetics, Clinical Biochemical Genetics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207SG0203X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Medical Genetics, Clinical Molecular Genetics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207SG0205X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Medical Genetics, Ph.D. Medical Genetics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207SM0001X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Medical Genetics, Molecular Genetic Pathology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207T00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Neurological Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207U00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Nuclear Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207UN0901X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Nuclear Medicine, Nuclear Cardiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207UN0902X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Nuclear Medicine, Nuclear Imaging & Therapy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207UN0903X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Nuclear Medicine, In Vivo & In Vitro Nuclear Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207V00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Obstetrics & Gynecology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207VB0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Obstetrics & Gynecology, Obesity Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207VC0200X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Obstetrics & Gynecology, Critical Care Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207VE0102X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Obstetrics & Gynecology, Reproductive Endocrinology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207VF0040X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Obstetrics & Gynecology, Female Pelvic Medicine and Reconstructive Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207VG0400X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Obstetrics & Gynecology, Gynecology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207VH0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Obstetrics & Gynecology, Hospice and Palliative Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207VM0101X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Obstetrics & Gynecology, Maternal & Fetal Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207VX0000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Obstetrics & Gynecology, Obstetrics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207VX0201X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Obstetrics & Gynecology, Gynecologic Oncology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207W00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Ophthalmology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207WX0009X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Ophthalmology, Glaucoma Specialist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207WX0107X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Ophthalmology, Retina Specialist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207WX0108X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Ophthalmology, Uveitis and Ocular Inflammatory Disease"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207WX0109X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Ophthalmology, Neuro-ophthalmology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207WX0110X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Ophthalmology, Pediatric Ophthalmology and Strabismus Specialist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207WX0120X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Ophthalmology, Cornea and External Diseases Specialist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207WX0200X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Ophthalmology, Ophthalmic Plastic and Reconstructive Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207X00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Orthopaedic Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207XP3100X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Orthopaedic Surgery, Pediatric Orthopaedic Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207XS0106X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Orthopaedic Surgery, Hand Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207XS0114X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Orthopaedic Surgery, Adult Reconstructive Orthopaedic Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207XS0117X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Orthopaedic Surgery, Orthopaedic Surgery of the Spine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207XX0004X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Orthopaedic Surgery, Foot and Ankle Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207XX0005X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Orthopaedic Surgery, Sports Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207XX0801X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Orthopaedic Surgery, Orthopaedic Trauma"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207Y00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Otolaryngology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207YP0228X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Otolaryngology, Pediatric Otolaryngology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207YS0012X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Otolaryngology, Sleep Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207YS0123X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Otolaryngology, Facial Plastic Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207YX0007X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Otolaryngology, Plastic Surgery within the Head & Neck"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207YX0602X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Otolaryngology, Otolaryngic Allergy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207YX0901X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Otolaryngology, Otology & Neurotology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207YX0905X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Otolaryngology, Otolaryngology/Facial Plastic Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207ZB0001X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pathology, Blood Banking & Transfusion Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207ZC0006X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pathology, Clinical Pathology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207ZC0008X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pathology, Clinical Informatics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207ZC0500X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pathology, Cytopathology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207ZD0900X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pathology, Dermatopathology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207ZF0201X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pathology, Forensic Pathology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207ZH0000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pathology, Hematology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207ZI0100X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pathology, Immunopathology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207ZM0300X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pathology, Medical Microbiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207ZN0500X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pathology, Neuropathology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207ZP0007X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pathology, Molecular Genetic Pathology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207ZP0101X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pathology, Anatomic Pathology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207ZP0102X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pathology, Anatomic Pathology & Clinical Pathology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207ZP0104X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pathology, Chemical Pathology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207ZP0105X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pathology, Clinical Pathology/Laboratory Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #207ZP0213X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pathology, Pediatric Pathology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #208000000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080A0000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Adolescent Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080B0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Obesity Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080C0008X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Child Abuse Pediatrics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080H0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Hospice and Palliative Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080I0007X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Clinical & Laboratory Immunology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080N0001X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Neonatal-Perinatal Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080P0006X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Developmental - Behavioral Pediatrics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080P0008X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Neurodevelopmental Disabilities"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080P0201X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Pediatric Allergy/Immunology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080P0202X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Pediatric Cardiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080P0203X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Pediatric Critical Care Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080P0204X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Pediatric Emergency Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080P0205X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Pediatric Endocrinology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080P0206X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Pediatric Gastroenterology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080P0207X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Pediatric Hematology-Oncology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080P0208X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Pediatric Infectious Diseases"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080P0210X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Pediatric Nephrology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080P0214X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Pediatric Pulmonology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080P0216X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Pediatric Rheumatology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080S0010X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Sports Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080S0012X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Sleep Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080T0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Medical Toxicology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2080T0004X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pediatrics, Pediatric Transplant Hepatology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #208100000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Physical Medicine & Rehabilitation"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2081H0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Physical Medicine & Rehabilitation, Hospice and Palliative Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2081N0008X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Physical Medicine & Rehabilitation, Neuromuscular Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2081P0004X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Physical Medicine & Rehabilitation, Spinal Cord Injury Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2081P0010X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Physical Medicine & Rehabilitation, Pediatric Rehabilitation Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2081P0301X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Physical Medicine & Rehabilitation, Brain Injury Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2081P2900X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Physical Medicine & Rehabilitation, Pain Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2081S0010X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Physical Medicine & Rehabilitation, Sports Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #208200000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Plastic Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2082S0099X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Plastic Surgery, Plastic Surgery Within the Head and Neck"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2082S0105X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Plastic Surgery, Surgery of the Hand"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2083A0100X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Preventive Medicine, Aerospace Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2083A0300X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Preventive Medicine, Addiction Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2083B0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Preventive Medicine, Obesity Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2083C0008X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Preventive Medicine, Clinical Informatics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2083P0011X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Preventive Medicine, Undersea and Hyperbaric Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2083P0500X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Preventive Medicine, Preventive Medicine/Occupational Environmental Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2083P0901X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Preventive Medicine, Public Health & General Preventive Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2083S0010X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Preventive Medicine, Sports Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2083T0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Preventive Medicine, Medical Toxicology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2083X0100X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Preventive Medicine, Occupational Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084A0401X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Addiction Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084A2900X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Neurocritical Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084B0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Obesity Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084B0040X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Behavioral Neurology & Neuropsychiatry"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084D0003X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Diagnostic Neuroimaging"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084E0001X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Epilepsy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084F0202X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Forensic Psychiatry"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084H0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Hospice and Palliative Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084N0008X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Neuromuscular Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084N0400X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Neurology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084N0402X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Neurology with Special Qualifications in Child Neurology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084N0600X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Clinical Neurophysiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084P0005X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Neurodevelopmental Disabilities"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084P0015X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Psychosomatic Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084P0301X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Brain Injury Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084P0800X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Psychiatry"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084P0802X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Addiction Psychiatry"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084P0804X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Child & Adolescent Psychiatry"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084P0805X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Geriatric Psychiatry"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084P2900X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Pain Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084S0010X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Sports Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084S0012X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Sleep Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2084V0102X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Psychiatry & Neurology, Vascular Neurology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2085B0100X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Radiology, Body Imaging"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2085D0003X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Radiology, Diagnostic Neuroimaging"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2085H0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Radiology, Hospice and Palliative Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2085N0700X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Radiology, Neuroradiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2085N0904X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Radiology, Nuclear Radiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2085P0229X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Radiology, Pediatric Radiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2085R0001X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Radiology, Radiation Oncology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2085R0202X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Radiology, Diagnostic Radiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2085R0203X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Radiology, Therapeutic Radiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2085R0204X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Radiology, Vascular & Interventional Radiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2085R0205X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Radiology, Radiological Physics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2085U0001X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Radiology, Diagnostic Ultrasound"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #208600000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2086H0002X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Surgery, Hospice and Palliative Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2086S0102X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Surgery, Surgical Critical Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2086S0105X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Surgery, Surgery of the Hand"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2086S0120X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Surgery, Pediatric Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2086S0122X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Surgery, Plastic and Reconstructive Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2086S0127X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Surgery, Trauma Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2086S0129X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Surgery, Vascular Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2086X0206X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Surgery, Surgical Oncology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #208800000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Urology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2088F0040X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Urology, Female Pelvic Medicine and Reconstructive Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2088P0231X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Urology, Pediatric Urology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #208C00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Colon & Rectal Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #208D00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; General Practice"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #208G00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Thoracic Surgery (Cardiothoracic Vascular Surgery)"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #208M00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Hospitalist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #208U00000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Clinical Pharmacology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #208VP0000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pain Medicine, Pain Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #208VP0014X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Pain Medicine, Interventional Pain Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #209800000X
* ^expansion.contains[=].display = "Allopathic & Osteopathic Physicians; Legal Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #211D00000X
* ^expansion.contains[=].display = "Podiatric Medicine & Surgery Service Providers; \"Assistant, Podiatric\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #213E00000X
* ^expansion.contains[=].display = "Podiatric Medicine & Surgery Service Providers; Podiatrist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #213EP0504X
* ^expansion.contains[=].display = "Podiatric Medicine & Surgery Service Providers; Podiatrist, Public Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #213EP1101X
* ^expansion.contains[=].display = "Podiatric Medicine & Surgery Service Providers; Podiatrist, Primary Podiatric Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #213ER0200X
* ^expansion.contains[=].display = "Podiatric Medicine & Surgery Service Providers; Podiatrist, Radiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #213ES0000X
* ^expansion.contains[=].display = "Podiatric Medicine & Surgery Service Providers; Podiatrist, Sports Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #213ES0103X
* ^expansion.contains[=].display = "Podiatric Medicine & Surgery Service Providers; Podiatrist, Foot & Ankle Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #213ES0131X
* ^expansion.contains[=].display = "Podiatric Medicine & Surgery Service Providers; Podiatrist, Foot Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #221700000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Art Therapist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #222Q00000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Developmental Therapist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #222Z00000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Orthotist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #224900000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Mastectomy Fitter"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #224L00000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Pedorthist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #224P00000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Prosthetist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #224Y00000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Clinical Exercise Physiologist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #224Z00000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Occupational Therapy Assistant"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #224ZE0001X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Occupational Therapy Assistant, Environmental Modification"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #224ZF0002X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Occupational Therapy Assistant, \"Feeding, Eating & Swallowing\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #224ZL0004X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Occupational Therapy Assistant, Low Vision"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #224ZR0403X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Occupational Therapy Assistant, Driving and Community Mobility"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225000000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Orthotic Fitter"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225100000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Physical Therapist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2251C2600X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Physical Therapist, Cardiopulmonary"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2251E1200X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Physical Therapist, Ergonomics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2251E1300X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Physical Therapist, \"Electrophysiology, Clinical\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2251G0304X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Physical Therapist, Geriatrics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2251H1200X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Physical Therapist, Hand"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2251H1300X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Physical Therapist, Human Factors"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2251N0400X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Physical Therapist, Neurology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2251P0200X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Physical Therapist, Pediatrics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2251S0007X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Physical Therapist, Sports"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2251X0800X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Physical Therapist, Orthopedic"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225200000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Physical Therapy Assistant"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225400000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Rehabilitation Practitioner"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225500000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Specialist/Technologist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2255A2300X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Specialist/Technologist, Athletic Trainer"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2255R0406X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Specialist/Technologist, \"Rehabilitation, Blind\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225600000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Dance Therapist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225700000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Massage Therapist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225800000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Recreation Therapist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225A00000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Music Therapist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225B00000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Pulmonary Function Technologist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225C00000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Rehabilitation Counselor"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225CA2400X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Rehabilitation Counselor, Assistive Technology Practitioner"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225CA2500X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Rehabilitation Counselor, Assistive Technology Supplier"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225CX0006X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Rehabilitation Counselor, Orientation and Mobility Training Provider"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225X00000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Occupational Therapist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225XE0001X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Occupational Therapist, Environmental Modification"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225XE1200X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Occupational Therapist, Ergonomics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225XF0002X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Occupational Therapist, \"Feeding, Eating & Swallowing\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225XG0600X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Occupational Therapist, Gerontology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225XH1200X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Occupational Therapist, Hand"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225XH1300X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Occupational Therapist, Human Factors"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225XL0004X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Occupational Therapist, Low Vision"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225XM0800X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Occupational Therapist, Mental Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225XN1300X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Occupational Therapist, Neurorehabilitation"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225XP0019X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Occupational Therapist, Physical Rehabilitation"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225XP0200X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Occupational Therapist, Pediatrics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #225XR0403X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Occupational Therapist, Driving and Community Mobility"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #226000000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Recreational Therapist Assistant"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #226300000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Kinesiotherapist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #227800000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Certified\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2278C0205X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Certified\", Critical Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2278E0002X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Certified\", Emergency Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2278E1000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Certified\", Educational"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2278G0305X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Certified\", Geriatric Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2278G1100X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Certified\", General Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2278H0200X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Certified\", Home Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2278P1004X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Certified\", Pulmonary Diagnostics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2278P1005X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Certified\", Pulmonary Rehabilitation"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2278P1006X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Certified\", Pulmonary Function Technologist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2278P3800X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Certified\", Palliative/Hospice"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2278P3900X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Certified\", Neonatal/Pediatrics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2278P4000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Certified\", Patient Transport"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2278S1500X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Certified\", SNF/Subacute Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #227900000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Registered\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2279C0205X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Registered\", Critical Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2279E0002X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Registered\", Emergency Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2279E1000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Registered\", Educational"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2279G0305X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Registered\", Geriatric Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2279G1100X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Registered\", General Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2279H0200X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Registered\", Home Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2279P1004X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Registered\", Pulmonary Diagnostics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2279P1005X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Registered\", Pulmonary Rehabilitation"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2279P1006X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Registered\", Pulmonary Function Technologist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2279P3800X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Registered\", Palliative/Hospice"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2279P3900X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Registered\", Neonatal/Pediatrics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2279P4000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Registered\", Patient Transport"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2279S1500X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; \"Respiratory Therapist, Registered\", SNF/Subacute Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #229N00000X
* ^expansion.contains[=].display = "\"Respiratory, Developmental, Rehabilitative and Restorative Service Providers\"; Anaplastologist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #231H00000X
* ^expansion.contains[=].display = "\"Speech, Language and Hearing Service Providers\"; Audiologist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #231HA2400X
* ^expansion.contains[=].display = "\"Speech, Language and Hearing Service Providers\"; Audiologist, Assistive Technology Practitioner"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #231HA2500X
* ^expansion.contains[=].display = "\"Speech, Language and Hearing Service Providers\"; Audiologist, Assistive Technology Supplier"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #235500000X
* ^expansion.contains[=].display = "\"Speech, Language and Hearing Service Providers\"; Specialist/Technologist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2355A2700X
* ^expansion.contains[=].display = "\"Speech, Language and Hearing Service Providers\"; Specialist/Technologist, Audiology Assistant"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2355S0801X
* ^expansion.contains[=].display = "\"Speech, Language and Hearing Service Providers\"; Specialist/Technologist, Speech-Language Assistant"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #235Z00000X
* ^expansion.contains[=].display = "\"Speech, Language and Hearing Service Providers\"; Speech-Language Pathologist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #237600000X
* ^expansion.contains[=].display = "\"Speech, Language and Hearing Service Providers\"; Audiologist-Hearing Aid Fitter"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #237700000X
* ^expansion.contains[=].display = "\"Speech, Language and Hearing Service Providers\"; Hearing Instrument Specialist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #242T00000X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Perfusionist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #243U00000X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Radiology Practitioner Assistant"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246Q00000X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Pathology\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246QB0000X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Pathology\", Blood Banking"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246QC1000X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Pathology\", Chemistry"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246QC2700X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Pathology\", Cytotechnology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246QH0000X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Pathology\", Hematology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246QH0401X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Pathology\", Hemapheresis Practitioner"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246QH0600X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Pathology\", Histology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246QI0000X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Pathology\", Immunology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246QL0900X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Pathology\", Laboratory Management"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246QL0901X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Pathology\", \"Laboratory Management, Diplomate\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246QM0706X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Pathology\", Medical Technologist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246QM0900X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Pathology\", Microbiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246R00000X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Technician, Pathology\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246RH0600X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Technician, Pathology\", Histology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246RM2200X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Technician, Pathology\", Medical Laboratory"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246RP1900X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Technician, Pathology\", Phlebotomy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246W00000X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Technician, Cardiology\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246X00000X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Specialist/Technologist Cardiovascular"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246XC2901X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Specialist/Technologist Cardiovascular, Cardiovascular Invasive Specialist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246XC2903X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Specialist/Technologist Cardiovascular, Vascular Specialist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246XS1301X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Specialist/Technologist Cardiovascular, Sonography"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246Y00000X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Health Information\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246YC3301X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Health Information\", \"Coding Specialist, Hospital Based\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246YC3302X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Health Information\", \"Coding Specialist, Physician Office Based\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246YR1600X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Health Information\", Registered Record Administrator"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246Z00000X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Other\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246ZA2600X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Other\", \"Art, Medical\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246ZB0301X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Other\", Biomedical Engineering"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246ZB0302X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Other\", Biomedical Photographer"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246ZB0500X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Other\", Biochemist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246ZB0600X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Other\", Biostatistician"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246ZC0007X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Other\", Surgical Assistant"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246ZE0500X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Other\", EEG"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246ZE0600X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Other\", Electroneurodiagnostic"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246ZG0701X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Other\", Graphics Methods"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246ZG1000X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Other\", \"Geneticist, Medical (PhD)\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246ZI1000X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Other\", \"Illustration, Medical\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246ZN0300X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Other\", Nephrology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246ZS0410X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Other\", Surgical Technologist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #246ZX2200X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Specialist/Technologist, Other\", Orthopedic Assistant"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #247000000X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Technician, Health Information\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2470A2800X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Technician, Health Information\", Assistant Record Technician"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #247100000X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Radiologic Technologist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2471B0102X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Radiologic Technologist, Bone Densitometry"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2471C1101X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Radiologic Technologist, Cardiovascular-Interventional Technology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2471C1106X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Radiologic Technologist, Cardiac-Interventional Technology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2471C3401X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Radiologic Technologist, Computed Tomography"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2471C3402X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Radiologic Technologist, Radiography"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2471M1202X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Radiologic Technologist, Magnetic Resonance Imaging"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2471M2300X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Radiologic Technologist, Mammography"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2471N0900X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Radiologic Technologist, Nuclear Medicine Technology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2471Q0001X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Radiologic Technologist, Quality Management"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2471R0002X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Radiologic Technologist, Radiation Therapy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2471S1302X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Radiologic Technologist, Sonography"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2471V0105X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Radiologic Technologist, Vascular Sonography"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2471V0106X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; Radiologic Technologist, Vascular-Interventional Technology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #247200000X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Technician, Other\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2472B0301X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Technician, Other\", Biomedical Engineering"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2472D0500X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Technician, Other\", Darkroom"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2472E0500X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Technician, Other\", EEG"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2472R0900X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Technician, Other\", Renal Dialysis"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2472V0600X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Technician, Other\", Veterinary"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #247ZC0005X
* ^expansion.contains[=].display = "\"Technologists, Technicians & Other Technical Service Providers\"; \"Technician, Pathology\", \"Clinical Laboratory Director, Non-physician\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #251300000X
* ^expansion.contains[=].display = "Agencies; Local Education Agency (LEA)"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #251B00000X
* ^expansion.contains[=].display = "Agencies; Case Management"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #251C00000X
* ^expansion.contains[=].display = "Agencies; \"Day Training, Developmentally Disabled Services\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #251E00000X
* ^expansion.contains[=].display = "Agencies; Home Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #251F00000X
* ^expansion.contains[=].display = "Agencies; Home Infusion"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #251G00000X
* ^expansion.contains[=].display = "Agencies; \"Hospice Care, Community Based\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #251J00000X
* ^expansion.contains[=].display = "Agencies; Nursing Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #251K00000X
* ^expansion.contains[=].display = "Agencies; Public Health or Welfare"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #251S00000X
* ^expansion.contains[=].display = "Agencies; Community/Behavioral Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #251T00000X
* ^expansion.contains[=].display = "Agencies; Program of All-Inclusive Care for the Elderly (PACE) Provider Organization"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #251V00000X
* ^expansion.contains[=].display = "Agencies; Voluntary or Charitable"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #251X00000X
* ^expansion.contains[=].display = "Agencies; Supports Brokerage"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #252Y00000X
* ^expansion.contains[=].display = "Agencies; Early Intervention Provider Agency"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #253J00000X
* ^expansion.contains[=].display = "Agencies; Foster Care Agency"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #253Z00000X
* ^expansion.contains[=].display = "Agencies; In Home Supportive Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261Q00000X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QA0005X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Ambulatory Family Planning Facility"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QA0006X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Ambulatory Fertility Facility"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QA0600X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Adult Day Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QA0900X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Amputee"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QA1903X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Ambulatory Surgical"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QA3000X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Augmentative Communication"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QB0400X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Birthing"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QC0050X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Critical Access Hospital"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QC1500X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Community Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QC1800X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Corporate Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QD0000X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Dental"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QD1600X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Developmental Disabilities"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QE0002X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Emergency Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QE0700X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, End-Stage Renal Disease (ESRD) Treatment"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QE0800X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Endoscopy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QF0050X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, \"Family Planning, Non-Surgical\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QF0400X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Federally Qualified Health Center (FQHC)"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QG0250X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Genetics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QH0100X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Health Service"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QH0700X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Hearing and Speech"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QI0500X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Infusion Therapy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QL0400X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Lithotripsy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QM0801X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Mental Health (Including Community Mental Health Center)"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QM0850X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Adult Mental Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QM0855X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Adolescent and Children Mental Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QM1000X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Migrant Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QM1100X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Military/U.S. Coast Guard Outpatient"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QM1101X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Military and U.S. Coast Guard Ambulatory Procedure"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QM1102X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Military Outpatient Operational (Transportable) Component"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QM1103X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Military Ambulatory Procedure Visits Operational (Transportable)"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QM1200X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Magnetic Resonance Imaging (MRI)"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QM1300X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Multi-Specialty"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QM2500X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Medical Specialty"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QM2800X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Methadone"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QM3000X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Medically Fragile Infants and Children Day Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QP0904X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, \"Public Health, Federal\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QP0905X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, \"Public Health, State or Local\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QP1100X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Podiatric"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QP2000X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Physical Therapy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QP2300X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Primary Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QP2400X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Prison Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QP3300X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Pain"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QR0200X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Radiology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QR0206X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, \"Radiology, Mammography\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QR0207X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, \"Radiology, Mobile Mammography\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QR0208X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, \"Radiology, Mobile\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QR0400X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Rehabilitation"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QR0401X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, \"Rehabilitation, Comprehensive Outpatient Rehabilitation Facility (CORF)\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QR0404X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, \"Rehabilitation, Cardiac Facilities\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QR0405X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, \"Rehabilitation, Substance Use Disorder\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QR0800X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Recovery Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QR1100X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Research"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QR1300X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Rural Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QS0112X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Oral and Maxillofacial Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QS0132X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Ophthalmologic Surgery"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QS1000X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Student Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QS1200X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Sleep Disorder Diagnostic"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QU0200X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Urgent Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QV0200X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, VA"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QX0100X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Occupational Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QX0200X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, Oncology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #261QX0203X
* ^expansion.contains[=].display = "Ambulatory Health Care Facilities; Clinic/Center, \"Oncology, Radiation\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #273100000X
* ^expansion.contains[=].display = "Hospital Units; Epilepsy Unit"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #273R00000X
* ^expansion.contains[=].display = "Hospital Units; Psychiatric Unit"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #273Y00000X
* ^expansion.contains[=].display = "Hospital Units; Rehabilitation Unit"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #275N00000X
* ^expansion.contains[=].display = "Hospital Units; Medicare Defined Swing Bed Unit"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #276400000X
* ^expansion.contains[=].display = "Hospital Units; \"Rehabilitation, Substance Use Disorder Unit\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #281P00000X
* ^expansion.contains[=].display = "Hospitals; Chronic Disease Hospital"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #281PC2000X
* ^expansion.contains[=].display = "Hospitals; Chronic Disease Hospital, Children"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #282E00000X
* ^expansion.contains[=].display = "Hospitals; Long Term Care Hospital"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #282J00000X
* ^expansion.contains[=].display = "Hospitals; Religious Nonmedical Health Care Institution"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #282N00000X
* ^expansion.contains[=].display = "Hospitals; General Acute Care Hospital"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #282NC0060X
* ^expansion.contains[=].display = "Hospitals; General Acute Care Hospital, Critical Access"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #282NC2000X
* ^expansion.contains[=].display = "Hospitals; General Acute Care Hospital, Children"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #282NR1301X
* ^expansion.contains[=].display = "Hospitals; General Acute Care Hospital, Rural"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #282NW0100X
* ^expansion.contains[=].display = "Hospitals; General Acute Care Hospital, Women"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #283Q00000X
* ^expansion.contains[=].display = "Hospitals; Psychiatric Hospital"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #283X00000X
* ^expansion.contains[=].display = "Hospitals; Rehabilitation Hospital"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #283XC2000X
* ^expansion.contains[=].display = "Hospitals; Rehabilitation Hospital, Children"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #284300000X
* ^expansion.contains[=].display = "Hospitals; Special Hospital"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #286500000X
* ^expansion.contains[=].display = "Hospitals; Military Hospital"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2865M2000X
* ^expansion.contains[=].display = "Hospitals; Military Hospital, Military General Acute Care Hospital"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #2865X1600X
* ^expansion.contains[=].display = "Hospitals; Military Hospital, Military General Acute Care Hospital. Operational (Transportable)"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #291900000X
* ^expansion.contains[=].display = "Laboratories; Military Clinical Medical Laboratory"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #291U00000X
* ^expansion.contains[=].display = "Laboratories; Clinical Medical Laboratory"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #292200000X
* ^expansion.contains[=].display = "Laboratories; Dental Laboratory"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #293D00000X
* ^expansion.contains[=].display = "Laboratories; Physiological Laboratory"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #302F00000X
* ^expansion.contains[=].display = "Managed Care Organizations; Exclusive Provider Organization"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #302R00000X
* ^expansion.contains[=].display = "Managed Care Organizations; Health Maintenance Organization"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #305R00000X
* ^expansion.contains[=].display = "Managed Care Organizations; Preferred Provider Organization"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #305S00000X
* ^expansion.contains[=].display = "Managed Care Organizations; Point of Service"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #310400000X
* ^expansion.contains[=].display = "Nursing & Custodial Care Facilities; Assisted Living Facility"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3104A0625X
* ^expansion.contains[=].display = "Nursing & Custodial Care Facilities; Assisted Living Facility, \"Assisted Living, Mental Illness\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3104A0630X
* ^expansion.contains[=].display = "Nursing & Custodial Care Facilities; Assisted Living Facility, \"Assisted Living, Behavioral Disturbances\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #310500000X
* ^expansion.contains[=].display = "Nursing & Custodial Care Facilities; \"Intermediate Care Facility, Mental Illness\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #311500000X
* ^expansion.contains[=].display = "Nursing & Custodial Care Facilities; Alzheimer Center (Dementia Center)"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #311Z00000X
* ^expansion.contains[=].display = "Nursing & Custodial Care Facilities; Custodial Care Facility"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #311ZA0620X
* ^expansion.contains[=].display = "Nursing & Custodial Care Facilities; Custodial Care Facility, Adult Care Home"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #313M00000X
* ^expansion.contains[=].display = "Nursing & Custodial Care Facilities; Nursing Facility/Intermediate Care Facility"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #314000000X
* ^expansion.contains[=].display = "Nursing & Custodial Care Facilities; Skilled Nursing Facility"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3140N1450X
* ^expansion.contains[=].display = "Nursing & Custodial Care Facilities; Skilled Nursing Facility, \"Nursing Care, Pediatric\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #315D00000X
* ^expansion.contains[=].display = "Nursing & Custodial Care Facilities; \"Hospice, Inpatient\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #315P00000X
* ^expansion.contains[=].display = "Nursing & Custodial Care Facilities; \"Intermediate Care Facility, Mentally Retarded\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #320600000X
* ^expansion.contains[=].display = "Residential Treatment Facilities; \"Residential Treatment Facility, Intellectual and/or Developmental Disabilities\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #320700000X
* ^expansion.contains[=].display = "Residential Treatment Facilities; \"Residential Treatment Facility, Physical Disabilities\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #320800000X
* ^expansion.contains[=].display = "Residential Treatment Facilities; \"Community Based Residential Treatment Facility, Mental Illness\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #320900000X
* ^expansion.contains[=].display = "Residential Treatment Facilities; \"Community Based Residential Treatment Facility, Intellectual and/or Developmental Disabilities\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #322D00000X
* ^expansion.contains[=].display = "Residential Treatment Facilities; \"Residential Treatment Facility, Emotionally Disturbed Children\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #323P00000X
* ^expansion.contains[=].display = "Residential Treatment Facilities; Psychiatric Residential Treatment Facility"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #324500000X
* ^expansion.contains[=].display = "Residential Treatment Facilities; Substance Abuse Rehabilitation Facility"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3245S0500X
* ^expansion.contains[=].display = "Residential Treatment Facilities; Substance Abuse Rehabilitation Facility, \"Substance Abuse Treatment, Children\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #331L00000X
* ^expansion.contains[=].display = "Suppliers; Blood Bank"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #332000000X
* ^expansion.contains[=].display = "Suppliers; Military/U.S. Coast Guard Pharmacy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #332100000X
* ^expansion.contains[=].display = "Suppliers; Department of Veterans Affairs (VA) Pharmacy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #332800000X
* ^expansion.contains[=].display = "Suppliers; Indian Health Service/Tribal/Urban Indian Health (I/T/U) Pharmacy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #332900000X
* ^expansion.contains[=].display = "Suppliers; Non-Pharmacy Dispensing Site"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #332B00000X
* ^expansion.contains[=].display = "Suppliers; Durable Medical Equipment & Medical Supplies"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #332BC3200X
* ^expansion.contains[=].display = "Suppliers; Durable Medical Equipment & Medical Supplies, Customized Equipment"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #332BD1200X
* ^expansion.contains[=].display = "Suppliers; Durable Medical Equipment & Medical Supplies, Dialysis Equipment & Supplies"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #332BN1400X
* ^expansion.contains[=].display = "Suppliers; Durable Medical Equipment & Medical Supplies, Nursing Facility Supplies"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #332BP3500X
* ^expansion.contains[=].display = "Suppliers; Durable Medical Equipment & Medical Supplies, Parenteral & Enteral Nutrition"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #332BX2000X
* ^expansion.contains[=].display = "Suppliers; Durable Medical Equipment & Medical Supplies, Oxygen Equipment & Supplies"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #332G00000X
* ^expansion.contains[=].display = "Suppliers; Eye Bank"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #332H00000X
* ^expansion.contains[=].display = "Suppliers; Eyewear Supplier"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #332S00000X
* ^expansion.contains[=].display = "Suppliers; Hearing Aid Equipment"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #332U00000X
* ^expansion.contains[=].display = "Suppliers; Home Delivered Meals"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #333300000X
* ^expansion.contains[=].display = "Suppliers; Emergency Response System Companies"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #333600000X
* ^expansion.contains[=].display = "Suppliers; Pharmacy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3336C0002X
* ^expansion.contains[=].display = "Suppliers; Pharmacy, Clinic Pharmacy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3336C0003X
* ^expansion.contains[=].display = "Suppliers; Pharmacy, Community/Retail Pharmacy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3336C0004X
* ^expansion.contains[=].display = "Suppliers; Pharmacy, Compounding Pharmacy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3336H0001X
* ^expansion.contains[=].display = "Suppliers; Pharmacy, Home Infusion Therapy Pharmacy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3336I0012X
* ^expansion.contains[=].display = "Suppliers; Pharmacy, Institutional Pharmacy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3336L0003X
* ^expansion.contains[=].display = "Suppliers; Pharmacy, Long Term Care Pharmacy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3336M0002X
* ^expansion.contains[=].display = "Suppliers; Pharmacy, Mail Order Pharmacy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3336M0003X
* ^expansion.contains[=].display = "Suppliers; Pharmacy, Managed Care Organization Pharmacy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3336N0007X
* ^expansion.contains[=].display = "Suppliers; Pharmacy, Nuclear Pharmacy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3336S0011X
* ^expansion.contains[=].display = "Suppliers; Pharmacy, Specialty Pharmacy"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #335E00000X
* ^expansion.contains[=].display = "Suppliers; Prosthetic/Orthotic Supplier"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #335G00000X
* ^expansion.contains[=].display = "Suppliers; Medical Foods Supplier"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #335U00000X
* ^expansion.contains[=].display = "Suppliers; Organ Procurement Organization"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #335V00000X
* ^expansion.contains[=].display = "Suppliers; Portable X-ray and/or Other Portable Diagnostic Imaging Supplier"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #341600000X
* ^expansion.contains[=].display = "Transportation Services; Ambulance"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3416A0800X
* ^expansion.contains[=].display = "Transportation Services; Ambulance, Air Transport"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3416L0300X
* ^expansion.contains[=].display = "Transportation Services; Ambulance, Land Transport"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3416S0300X
* ^expansion.contains[=].display = "Transportation Services; Ambulance, Water Transport"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #341800000X
* ^expansion.contains[=].display = "Transportation Services; Military/U.S. Coast Guard Transport"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3418M1110X
* ^expansion.contains[=].display = "Transportation Services; Military/U.S. Coast Guard Transport, \"Military or U.S. Coast Guard Ambulance, Ground Transport\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3418M1120X
* ^expansion.contains[=].display = "Transportation Services; Military/U.S. Coast Guard Transport, \"Military or U.S. Coast Guard Ambulance, Air Transport\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3418M1130X
* ^expansion.contains[=].display = "Transportation Services; Military/U.S. Coast Guard Transport, \"Military or U.S. Coast Guard Ambulance, Water Transport\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #342000000X
* ^expansion.contains[=].display = "Transportation Services; Transportation Network Company"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #343800000X
* ^expansion.contains[=].display = "Transportation Services; Secured Medical Transport (VAN)"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #343900000X
* ^expansion.contains[=].display = "Transportation Services; Non-emergency Medical Transport (VAN)"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #344600000X
* ^expansion.contains[=].display = "Transportation Services; Taxi"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #344800000X
* ^expansion.contains[=].display = "Transportation Services; Air Carrier"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #347B00000X
* ^expansion.contains[=].display = "Transportation Services; Bus"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #347C00000X
* ^expansion.contains[=].display = "Transportation Services; Private Vehicle"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #347D00000X
* ^expansion.contains[=].display = "Transportation Services; Train"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #347E00000X
* ^expansion.contains[=].display = "Transportation Services; Transportation Broker"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363A00000X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Physician Assistant"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363AM0700X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Physician Assistant, Medical"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363AS0400X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Physician Assistant, Surgical"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363L00000X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Nurse Practitioner"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363LA2100X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Nurse Practitioner, Acute Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363LA2200X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Nurse Practitioner, Adult Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363LC0200X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Nurse Practitioner, Critical Care Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363LC1500X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Nurse Practitioner, Community Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363LF0000X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Nurse Practitioner, Family"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363LG0600X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Nurse Practitioner, Gerontology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363LN0000X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Nurse Practitioner, Neonatal"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363LN0005X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Nurse Practitioner, \"Neonatal, Critical Care\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363LP0200X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Nurse Practitioner, Pediatrics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363LP0222X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Nurse Practitioner, \"Pediatrics, Critical Care\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363LP0808X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Nurse Practitioner, Psychiatric/Mental Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363LP1700X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Nurse Practitioner, Perinatal"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363LP2300X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Nurse Practitioner, Primary Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363LS0200X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Nurse Practitioner, School"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363LW0102X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Nurse Practitioner, Women's Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363LX0001X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Nurse Practitioner, Obstetrics & Gynecology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #363LX0106X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Nurse Practitioner, Occupational Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364S00000X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SA2100X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Acute Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SA2200X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Adult Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SC0200X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Critical Care Medicine"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SC1501X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Community Health/Public Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SC2300X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Chronic Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SE0003X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Emergency"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SE1400X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Ethics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SF0001X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Family Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SG0600X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Gerontology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SH0200X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Home Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SH1100X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Holistic"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SI0800X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Informatics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SL0600X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Long-Term Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SM0705X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Medical-Surgical"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SN0000X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Neonatal"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SN0800X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Neuroscience"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SP0200X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Pediatrics"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SP0807X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, \"Psychiatric/Mental Health, Child & Adolescent\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SP0808X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Psychiatric/Mental Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SP0809X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, \"Psychiatric/Mental Health, Adult\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SP0810X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, \"Psychiatric/Mental Health, Child & Family\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SP0811X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, \"Psychiatric/Mental Health, Chronically Ill\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SP0812X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, \"Psychiatric/Mental Health, Community\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SP0813X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, \"Psychiatric/Mental Health, Geropsychiatric\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SP1700X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Perinatal"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SP2800X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Perioperative"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SR0400X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Rehabilitation"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SS0200X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, School"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364ST0500X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Transplantation"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SW0102X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Women's Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SX0106X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Occupational Health"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SX0200X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, Oncology"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #364SX0204X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Clinical Nurse Specialist, \"Oncology, Pediatrics\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #367500000X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; \"Nurse Anesthetist, Certified Registered\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #367A00000X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Advanced Practice Midwife"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #367H00000X
* ^expansion.contains[=].display = "Physician Assistants & Advanced Practice Nursing Providers; Anesthesiologist Assistant"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #372500000X
* ^expansion.contains[=].display = "Nursing Service Related Providers; Chore Provider"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #372600000X
* ^expansion.contains[=].display = "Nursing Service Related Providers; Adult Companion"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #373H00000X
* ^expansion.contains[=].display = "Nursing Service Related Providers; Day Training/Habilitation Specialist"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #374700000X
* ^expansion.contains[=].display = "Nursing Service Related Providers; Technician"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3747A0650X
* ^expansion.contains[=].display = "Nursing Service Related Providers; Technician, Attendant Care Provider"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #3747P1801X
* ^expansion.contains[=].display = "Nursing Service Related Providers; Technician, Personal Care Attendant"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #374J00000X
* ^expansion.contains[=].display = "Nursing Service Related Providers; Doula"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #374K00000X
* ^expansion.contains[=].display = "Nursing Service Related Providers; Religious Nonmedical Practitioner"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #374T00000X
* ^expansion.contains[=].display = "Nursing Service Related Providers; Religious Nonmedical Nursing Personnel"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #374U00000X
* ^expansion.contains[=].display = "Nursing Service Related Providers; Home Health Aide"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #376G00000X
* ^expansion.contains[=].display = "Nursing Service Related Providers; Nursing Home Administrator"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #376J00000X
* ^expansion.contains[=].display = "Nursing Service Related Providers; Homemaker"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #376K00000X
* ^expansion.contains[=].display = "Nursing Service Related Providers; Nurse's Aide"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #385H00000X
* ^expansion.contains[=].display = "Respite Care Facility; Respite Care"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #385HR2050X
* ^expansion.contains[=].display = "Respite Care Facility; Respite Care, Respite Care Camp"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #385HR2055X
* ^expansion.contains[=].display = "Respite Care Facility; Respite Care, \"Respite Care, Mental Illness, Child\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #385HR2060X
* ^expansion.contains[=].display = "Respite Care Facility; Respite Care, \"Respite Care, Intellectual and/or Developmental Disabilities, Child\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #385HR2065X
* ^expansion.contains[=].display = "Respite Care Facility; Respite Care, \"Respite Care, Physical Disabilities, Child\""
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #390200000X
* ^expansion.contains[=].display = "\"Student, Health Care\"; Student in an Organized Health Care Education/Training Program"
* ^expansion.contains[+].system = "http://nucc.org/provider-taxonomy"
* ^expansion.contains[=].version = "21.1"
* ^expansion.contains[=].code = #405300000X
* ^expansion.contains[=].display = "Other Service Providers; Prevention Professional"

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/Aliases.fsh

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
Alias: $validationprocess = https://hl7.org/fhir/uv/vhdir/2018Sep/vhdir/ValueSet/validationprocess
Alias: $verificationresult-primary-source-type = http://hl7.org/fhir/ValueSet/verificationresult-primary-source-type
Alias: $verificationresult-communication-method_1 = http://hl7.org/fhir/ValueSet/verificationresult-communication-method
Alias: $identifierstatus = https://hl7.org/fhir/uv/vhdir/2018Sep/vhdir/ValueSet/identifierstatus
Alias: $aliastype = https://hl7.org/fhir/uv/vhdir/2018Sep/vhdir/ValueSet/aliastype
Alias: $digitalcertificatetype = https://hl7.org/fhir/uv/vhdir/2018Sep/vhdir/ValueSet/digitalcertificatetype
Alias: $digitalcertificateuse = https://hl7.org/fhir/uv/vhdir/2018Sep/vhdir/ValueSet/digitalcertificateuse
Alias: $digitalcertificatestandard = https://hl7.org/fhir/uv/vhdir/2018Sep/vhdir/ValueSet/digitalcertificatestandard
Alias: $digitalcertificatetrustframework = https://hl7.org/fhir/uv/vhdir/2018Sep/vhdir/ValueSet/digitalcertificatetrustframework

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

Alias: $QualificationStatusCS = http://hl7.org/fhir/us/davinci-pdex-NatlDir/CodeSystem/QualificationStatusCS
Alias: $MinEndpointConnectionTypeVS = https://hl7.org/fhir/us/davinci-pdex-plan-net/ValueSet/MinEndpointConnectionTypeVS
Alias: $QualificationStatusCS = http://hl7.org/fhir/us/davinci-pdex-NatlDir/CodeSystem/QualificationStatusCS
Alias: $IgFormatCodeVS = http://hl7.org/fhir/ValueSet/formatcodes




/*
Alias: $NatlDirEndpointQryEndpoint =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-Endpoint
Alias: $NatlDirEndpointQryHealthcareService =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-HealthcareService
Alias: $NatlDirEndpointQryInsurancePlan = http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-InsurancePlan
Alias: $NatlDirEndpointQryLocation =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-Location
Alias: $NatlDirEndpointQryNetwork =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-Network

Alias: $NatlDirEndpointQryOrganization =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-Organization
Alias: $NatlDirEndpointQryOrganizationAffiliation =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-OrganizationAffiliation
Alias: $NatlDirEndpointQryPractitioner =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-Practitioner
*/

Alias: $NatlDirectoryEndPoint =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-Endpoint

Alias: $NatlDirectoryCareTeam =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-CareTeam
Alias: $NatlDirectoryHealthCareService =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-HealthcareService
Alias: $NatlDirectoryInsurancePlan = http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-InsurancePlan
Alias: $NatlDirectoryLocation =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-Location
Alias: $NatlDirectoryNetwork =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-Network
Alias: $NatlDirectoryOrganization =         	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-Organization
Alias: $NatlDirectoryOrganizationAffiliation =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-OrganizationAffiliation
Alias: $NatlDirectoryPractitioner =            	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-Practitioner
Alias: $NatlDirEndpointQryPractitionerRole =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-PractitionerRole
Alias: $NatlDirectoryPractitionerRole  =	    http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-PractitionerRole
//Alias: $NatlDirEndpointQryPractitionerRole =	http://hl7.org/fhir/us/directory-exchange/StructureDefinition/NatlDirEx-PractitionerRole
Alias: $consent = https://hl7.org/fhir/uv/vhdir/2018Sep/vhdir/ValueSet/consent

Alias: $NatlDirExOrganizationAffiliation =	http://hl7.org/fhir/us/directory-query/StructureDefinition/NatlDirEndpointQry-OrganizationAffiliation
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

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/CodeSystems.fsh


CodeSystem: ConsentCS
Title: "NatDir Consent Code System"
Description:  "Codes for use in defining access levels for sharing subsets of constrained content (as an example)"
* ^experimental = false
* #protect "Protect" "The data (or subset of data) provided should be only made available to the people, or types of people explicitly declared in the consent."
* ^caseSensitive = true

CodeSystem: ConsentScopeCS
Title: "NatDir ConsentScopeCodes Code System"
Description:  "This value set includes the four Consent scope codes."
* ^experimental = false
* #adr "Advanced Care Directive" "Actions to be taken if they are no longer able to make decisions for themselves."
* #research "Research" "Consent to participate in research protocol and information sharing required."
* #patient-privacy "Privacy Consent" "Agreement to collect, access, use or disclose (share) information."
* #treatment "Treatment" "Consent to undergo a specific treatment."
* ^caseSensitive = true


CodeSystem: IgTypeCS
Title: "IG Type Code System"
Description: "IG Type Code System"
* ^experimental = false
* #FHIR	"FHIR"
* #direct	"Direct"
* ^caseSensitive = false  

CodeSystem: EndpointTypeCS
Title: "Endpoint Type"
Description: "Endpoint Type Code System"
* ^experimental = false
* #FHIR	"FHIR Server"
* #OpEndpoint	"Operation Endpoint"
* #CDS	"CDS Hooks"
* ^caseSensitive = false

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
* ^caseSensitive = false

CodeSystem: AcceptingPatientsCS
Title: "Accepting Patients Code System"
Description: "Codes to identify if the practice is accepting new patients"
* ^experimental = false
* ^experimental = false
* #nopt	"Not Accepting" "Not accepting patients"
* #newpt	"Accepting" "Accepting patients"
* #existptonly	"Accepting existing patients" "Accepting existing patients"
* #existptfam	"Accepting existing patients and their families" "Accepting existing patients and members of their families"
* ^caseSensitive = false

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
* ^caseSensitive = false

CodeSystem: DeliveryMethodCS
Title: "Delivery Methods Code System"
Description: "Categories of healthcare service delivery methods."
* ^experimental = false
* #virtual	"Virtual" "Delivery not requiring provider and patient to be physically co-located, such as tele-medicine"
* #physical	"Physical" "Traditional delivery requiring provider and patient to be physically co-located."
* ^caseSensitive = false

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
* ^caseSensitive = false

CodeSystem:  EndpointConnectionTypeCS
  Title: "Endpoint Connection Types Code System"
  Description:  "Extension codes for http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
* ^experimental = false
* #hl7-fhir-opn "HL7 FHIR Operation" "Interact with a FHIR server interface using FHIR's RESTful interface using an operation other than messaging. For details on its version/capabilities you should connect the value in Endpoint.address and retrieve the FHIR CapabilityStatement."
* #rest-non-fhir "REST (not FHIR)" "Interact with a server using HTTP/REST but not FHIR.  Should be used for web portals."
* ^caseSensitive = false 

CodeSystem:  EndpointPayloadTypeCS
  Title: "Endpoint Payload Types Code System"
  Description:  "Endpoint Payload Types are constrained to NA (Not Applicable) as part of this IG"
* ^experimental = false
* #NA "Not Applicable" "Not Applicable"
* ^caseSensitive = false

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
* ^caseSensitive = false

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
* ^caseSensitive = false

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
* ^caseSensitive = false

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
* ^caseSensitive = false

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
* ^caseSensitive = false

CodeSystem: ProviderRoleCS
Title: "Provider Role Code System"
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
* ^caseSensitive = false



CodeSystem:  LanguageProficiencyCS
Title: "Language Proficiency Code System"
Description: "Codes for documenting spoken language proficiency based on the Interagency Language Roundtable scale."
* ^experimental = false
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
* ^caseSensitive = false

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/NatlDirectory.fsh


/**/


Profile: NatlDirAttestCareTeam 
Parent: $NatlDirectoryCareTeam
Id: NatlDirAttest-CareTeam
Title: "NatDir Care Team"
Description: "Defines the basic constraints and extensions on the CareTeam resource for use in a Validated Healthcare Directory"
* identifier.use 0..1
* extension[restriction] ^short = "Restriction"
* extension[restriction] ^definition = "Identifies and conveys information about restrictions on the use or release of exchanged information, e.g. information that can only be shared under particular condition, such as a signed data use agreement between parties"


Profile:        NatlDirAttestEndPoint
Parent:         $NatlDirectoryEndPoint
Id:             NatlDirAttest-Endpoint
Title:          "NatDir Endpoint"
Description:    "The technical details of an endpoint that can be used for electronic services, such as a portal or FHIR REST services, messaging or operations, or DIRECT messaging."

Profile:        NatlDirAttestHealthCareService
Parent:         $NatlDirectoryHealthCareService
Id:             NatlDirAttest-HealthcareService
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


Profile:        NatlDirAttestInsurancePlan
Parent:         $NatlDirectoryInsurancePlan
Id:             NatlDirAttest-InsurancePlan
Title:          "NatDir InsurancePlan"
Description:    "An InsurancePlan is a discrete package of health insurance coverage benefits that are offered under a particular network type. A given payer’s products typically differ by network type and/or covered benefits. A plan pairs a product’s covered benefits with the particular cost sharing structure offered to a consumer. A given product may comprise multiple plans (i.e. each plan offers different cost sharing requirements for the same set of covered benefits)."


Profile:        NatlDirAttestLocation
Parent:         $NatlDirectoryLocation
Id:             NatlDirAttest-Location
Title:          "NatDir Location"
Description:    "A Location is the physical place where healthcare services are provided, practitioners are employed, 
                 organizations are based, etc. Locations can range in scope from a room in a building to a geographic region/area."


Profile:        NatlDirAttestNetwork
Parent:         $NatlDirectoryNetwork    //Organization 
Id:             NatlDirAttest-Network
Title:          "NatDir Network"
Description:    "A Network refers to a healthcare provider insurance network. A healthcare provider insurance network is an aggregation of organizations and individuals that deliver a set of services across a geography through health insurance products/plans. A network is typically owned by a payer."

Profile:        NatlDirAttestOrganization
Parent:         $NatlDirectoryOrganization
Id:             NatlDirAttest-Organization
Title:          "NatDir Organization"
Description:    "An organization is a formal or informal grouping of people or organizations with a common purpose, such as a company, institution, corporation, community group, or healthcare practice.
Guidance:   When the contact is a department name, rather than a human (e.g., patient help line), include a blank family and given name, and provide the department name in contact.name.text"
//* partOf only Reference(NatlDirAttestOrganization)

Profile:        NatlDirAttestOrganizationAffiliation
Parent:         $NatlDirectoryOrganizationAffiliation
Id:             NatlDirAttest-OrganizationAffiliation
Title:          "NatDir OrganizationAffiliation"
Description:    "The OrganizationAffiliation resource describes relationships between two or more organizations, including the services one organization provides another, the location(s) where they provide services, the availability of those services, electronic endpoints, and other relevant information."


Profile:        NatlDirAttestPractitioner
Parent:         $NatlDirectoryPractitioner
Id:             NatlDirAttest-Practitioner
Title:          "NatDir Practitioner"
Description:    "Practitioner is a person who is directly or indirectly involved in the provisioning of healthcare."


Profile:        NatlDirAttestPractitionerRole
Parent:         $NatlDirectoryPractitionerRole
Id:             NatlDirAttest-PractitionerRole
Title:          "NatDir PractitionerRole"
Description:    "PractionerRole describes details about a provider, which can be a practitioner or an organization. When the provider is a practitioner, 
there may be a relationship to an organization. A provider renders services to patients at a location. When the provider is a practitioner, there may also 
be a relationship to an organization. Practitioner participation in healthcare provider insurance networks may be direct or through their role at an organization."


Profile: NatlDirAttestValidation
Parent: VerificationResult
Id: NatlDir-Validation
Title: "NatlDir Validation"
Description: "Describes validation requirements, source(s), status and dates for one or more elements"
* ^date = "2017-12-10T12:42:47.483-05:00"
* ^status = #active
* . ^short = "Validation"
* . ^definition = "Describes validation requirements, source(s), status and dates for one or more elements"
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
// This introduces a dependency to vhdir that is not in sushi-config. This is only an example binding
// * validationProcess from $validationprocess (example)
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




Profile:  NatlDirAttestUsageRestriction
Parent: Consent
Id:  NatlDirEx-restriction
Title: "NatlDirEx Restriction"
Description: "Restriction on use/release of exchanged information"
* ^status = #active
* ^date = "2017-12-15T01:01:31.325+11:00"
* . ^short = "A policy may permit or deny recipients or roles to perform actions for specific purposes and periods of time"
* . ^alias = "Restriction"
* identifier ..0 MS
* status MS
* status ^short = "Indicates the current state of this restriction"
* status ^comment = "This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the restriction as not currently valid."
* scope MS
// Creates a dependency on an old specification that was never officially published
//* scope from $consent (extensible)
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
//* policyRule ..0 MS
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
* provision.actor.reference only Reference( Organization or  CareTeam or  Practitioner)
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



Extension: NatlDirAttestUsageRestriction
Id: natlDirAtt-usage-restriction
Title: "NatlDirExr Usage Restriction"
Description: """The FHIR specification contains a security meta tag which can be used to inform systems of the sensitivity of resources, as well as by access control mechanisms to ensure content isn't exposed that shouldn't be.
This mechanism only goes to the resource level, this reference to a usage-restriction (consent) extends this further into the resource, and can be applied to any element, and may apply to all properties beneath the element (e.g. If applied to an identifier on a practitioner, then all the properties of the identifier should not be exposed unless it is understood)
This will be expected to be used as a modifier extension."""
* ^context.type = #fhirpath
* ^context.expression = "descendants()"
* ^date = "2017-10-20T10:59:36.931+11:00"
* . ^short = "Restriction"
* . ^definition = "Identifies and conveys information about restrictions on the use or release of exchanged information, e.g. information that can only be shared under particular condition, such as a signed data use agreement between parties"
* valueReference 1.. MS
* valueReference only Reference(NatlDirExRestriction)
* valueReference ^sliceName = "valueReference"
* valueReference ^short = "Reference"
* valueReference ^definition = "Reference to the restriction resource (consent)"
* valueReference ^comment = "This is anticipated to usually be a reference to a contained resource (this eases distribution, and permits the same consent applying to multiple properties in the same resource)"
* valueReference.identifier ..0


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/OrganizationAffiliationCode.fsh


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

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/README.md

# pdex-NatlDir-fsh
Davinci PDEX NatlDir using FHIR Shorthand


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/RestrictionVerificationExamples.fsh

Instance: PatientConsent
InstanceOf: NatlDirAttestUsageRestriction
Description: "Patient that gives consent"
Usage: #example 
* meta.profile = Canonical(NatlDirAttestUsageRestriction) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* status  = $ConsentCS#active
* scope = $NatlDirectoryConsentScopeCS#patient-privacy
* category = $loinc#59284-0 
* policyRule =  $ConsentPolicyCS#cric

Instance: ProviderAttestation
InstanceOf: NatlDirAttestValidation
Description: "Patient that gives consent"
Usage: #example
* meta.profile = Canonical(NatlDirAttestValidation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* need  = $needCS#none
* status = $verificationResultStatusCS#attested
* validationType = $verificationResultTypeCS#primary 
* statusDate = "2020-07-07T13:26:22.0314215+00:00"
* validationProcess = $NatlDirectoryValidationTypeCS#attester 
* target = Reference(PractitionerJoeSmith)
* failureAction = $failureActionCS#warn
* attestation.who = Reference(PractitionerJoeSmith)
* attestation.communicationMethod = $verificationresult-communication-methodCS#pull 
* attestation.date = "2020-07-07"


Instance: CareTeam1
InstanceOf: NatlDirAttestCareTeam
Description: "Burr Clinic's Care Team" 
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #proposed
* category = $loinc#LA27975-4
* extension[careteam-alias].valueString = "CareTeam1"
* extension[endpoint].valueReference = Reference(AcmeOfCTPortalEndpoint) 
* extension[service].valueReference = Reference(ServiceHansSolo) 
* identifier.extension[status].valueCode = $NatlDirectoryCredentialStatusCS#active
* extension[restriction].valueReference = Reference(PatientConsent) 

---

File: repos/HL7_SLASH_fhir-directory-attestation/input/fsh/ValueSets.fsh

ValueSet: ConsentVS
Title: "NatDir Consent Scopes Valueset"
Description: "Codes for use in defining access levels for sharing subsets of constrained content (as an example)."
* ^experimental = false
* codes from system ConsentCS
* codes from system ConsentScopeCS


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/pagecontent/all-examples.md

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

File: repos/HL7_SLASH_fhir-directory-attestation/input/pagecontent/bulk-data.md



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

File: repos/HL7_SLASH_fhir-directory-attestation/input/pagecontent/capstatements.md

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

File: repos/HL7_SLASH_fhir-directory-attestation/input/pagecontent/change-notes.md

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

File: repos/HL7_SLASH_fhir-directory-attestation/input/pagecontent/conformance.md

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

Source Resource: [XML](CapabilityStatement-NatlDir.xml.html)/[JSON](CapabilityStatement-NatlDir.json.html)

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

File: repos/HL7_SLASH_fhir-directory-attestation/input/pagecontent/downloads.md

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


### Postman Examples

Examples of the API calls in this guide are available in [Postman](https://www.postman.com/) format.

- [Postman Collection](NationalDirectory.PostmanCollection.json.zip)

### Downloadable Copy of Entire Specification

A downloadable version of this IG is available so it can be hosted locally:

- [Downloadable Copy](full-ig.zip)


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/pagecontent/example-list-generator.md

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

File: repos/HL7_SLASH_fhir-directory-attestation/input/pagecontent/extensions.md

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

File: repos/HL7_SLASH_fhir-directory-attestation/input/pagecontent/general-guidance.md

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

## National Directory Scope

This implementation guide uses the term ‘national directory’ because it encompasses all individuals and entities that provide services which may impact an individual’s health and well-being. We did not limit the definition of a directory to include only those individuals/entities that are licensed to practice medicine and/or bill for healthcare services. Rather, the directory is intended to include data about community/social service entities and non-licensed administrative/support staff, among others.

Patient/caregiver information, however, is considered out of scope.

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

File: repos/HL7_SLASH_fhir-directory-attestation/input/pagecontent/guidance.md

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

File: repos/HL7_SLASH_fhir-directory-attestation/input/pagecontent/history.md

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

File: repos/HL7_SLASH_fhir-directory-attestation/input/pagecontent/index.md

---
title: National Directory Attestation and Verification Implementation Guide HomePage
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

The National Healthcare Directory Attestation and Verification Implementation Guide  is based on [FHIR Version 4.0](http://build.fhir.org/). It was developed in cooperation with the [Office of the National Coordinator for Health Information Technology (ONC)](http://www.healthit.gov/newsroom/about-onc) and [Federal Health Architecture (FHA)](https://www.healthit.gov/policy-researchers-implementers/federal-health-architecture-fha) with guidance from HL7 International, the Patient Administration Workgroup, and the HL7 US Realm Steering Committee.

It describes the architectural considerations for attesting to, validating, and exchanging data from a central source of validated provider data, as well as a RESTful FHIR API for accessing data from a VHDir.

Although we developed this guide from the conceptual starting point of a national source of validated provider data, we recognize that implementers may have different business needs, contexts, or use cases. Therefore, we have strived to make this guide as broadly applicable as possible. Every implementation may not use all of the content in this guide. It serves as a “floor” for the exchange of validated provider data, while describing additional data elements and capabilities that support more robust implementations.

Likewise, we provide general guidance about the technical architecture and capabilities of a central source of validated provider data, but are not prescriptive about what an implementation must include.  




## National Directory Attestation and Verification  Profiles

The list of National Directory Attestation and Verification Profiles is shown below.  Each profile defines the minimum mandatory elements, extensions and terminology requirements that **MUST** be present. For each profile, requirements and guidance are given in a simple narrative summary. A formal hierarchical table that presents a [logical view] of the content in both a differential and snapshot view is also provided along with references to appropriate terminologies and examples.  In addition each profile has a "Quick Start" section which is intended as an implementer friendly overview of the required search and read operations.

{% include list-simple-profiles.xhtml %}


## National Directory Attestation and Verification Conformance Requirements

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

File: repos/HL7_SLASH_fhir-directory-attestation/input/pagecontent/link-list.md

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

File: repos/HL7_SLASH_fhir-directory-attestation/input/pagecontent/logo.md

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

File: repos/HL7_SLASH_fhir-directory-attestation/input/pagecontent/profiles.md

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

File: repos/HL7_SLASH_fhir-directory-attestation/input/pagecontent/schematron-list-generator.md

{% for p in site.static_files %}
  {% if p.name contains '.sch' %}
  {% assign title = p.name | remove: '.sch' | split: '-' %}
- [{% for word in title  %}{{ word | capitalize }} {% endfor %}]({{ p.path | remove: '/' }})
  {% endif %}
{% endfor %}


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/pagecontent/searchparameters.md

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

<!--
{% raw %}
{% include list-simple-searchparameters.xhtml %}
{% endraw %}
-->

{% include sp_list.md %}


---

File: repos/HL7_SLASH_fhir-directory-attestation/input/pagecontent/security.md

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

