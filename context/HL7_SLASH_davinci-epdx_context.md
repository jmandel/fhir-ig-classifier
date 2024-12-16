File: repos/HL7_SLASH_davinci-epdx/input/fsh/aliases.fsh

//USCore
Alias: $USCorePatient = http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
Alias: $USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias: $USCorePractitionerRole = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole
Alias: $USCoreOrganization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias: $USCoreLocation = http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
Alias: $USCoreMedication = http://hl7.org/fhir/us/core/StructureDefinition/us-core-medication
Alias: $USCoreAllergyIntolerance = http://hl7.org/fhir/us/core/StructureDefinition/us-core-allergyintolerance
Alias: $USCoreCarePlan = http://hl7.org/fhir/us/core/StructureDefinition/us-core-careplan
Alias: $USCoreCareTeam = http://hl7.org/fhir/us/core/StructureDefinition/us-core-careteam
Alias: $USCoreCondition = http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition
Alias: $USCoreDiagnosticReportLab = http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab
Alias: $USCoreDiagnosticReportNote = http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note
Alias: $USCoreDocumentReference = http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference
Alias: $USCoreEncounter = http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter
Alias: $USCoreGoal = http://hl7.org/fhir/us/core/StructureDefinition/us-core-goal
Alias: $USCoreImmunization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization
Alias: $USCoreImplantableDevice = http://hl7.org/fhir/us/core/StructureDefinition/us-core-implantable-device
Alias: $USCoreMedicationRequest = http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest
Alias: $USCorePediatricBmiForAge = http://hl7.org/fhir/us/core/StructureDefinition/pediatric-bmi-for-age
Alias: $USCorePediatricWeightForHeight = http://hl7.org/fhir/us/core/StructureDefinition/pediatric-weight-for-height
Alias: $USCoreProcedure = http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure
Alias: $USCoreProvenance = http://hl7.org/fhir/us/core/StructureDefinition/us-core-provenance
Alias: $USCorePulseOximetry = http://hl7.org/fhir/us/core/StructureDefinition/us-core-pulse-oximetry
Alias: $USCoreSmokingStatus = http://hl7.org/fhir/us/core/StructureDefinition/us-core-smokingstatus

// R4 Base Specification
Alias: $R4ObservationVitalSigns = http://hl7.org/fhir/StructureDefinition/vitalsigns



// Da Vinci Pdex IG
Alias: $PdexDevice = http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-device
Alias: $PdexMedicationDispense = http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-medicationdispense
//  Alias: $PdexSourceProvenance = http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-source-provenance
Alias: $PdexProvenance = http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-provenance
Alias: $Provenance = http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-provenance
Alias: $MemberMatchResult = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/PdexMultiMemberMatchResultCS
Alias: $MemberAttribution = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/PdexMemberAttributionCS

// Code Systems
Alias: $FDANationalDrugCodeCS = http://hl7.org/fhir/sid/ndc
Alias: $DeviceStatus = http://hl7.org/fhir/device-status
Alias: $SignatureTypeCS = urn:iso-astm:E1762-95:2013
Alias: $V2IdentifierTypeCS = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $IdentifierTypeCS = http://terminology.hl7.org/CodeSystem/v2-0203


// SNOMED CT
Alias: $SnomedCT = http://snomed.info/sct|http://snomed.info/sct/731000124108

// PDex Base
Alias: $Base = http://hl7.org/fhir/us/davinci-pdex

// EOB
Alias: $Process-Priority = http://hl7.org/fhir/ValueSet/process-priority

Alias: $CPT = http://www.ama-assn.org/go/cpt
Alias: $HL7ClaimTypeCS = http://terminology.hl7.org/CodeSystem/claim-type
Alias: $HL7AdjudicationCS = http://terminology.hl7.org/CodeSystem/adjudication
Alias: $HL7DataAbsentReason = http://terminology.hl7.org/CodeSystem/data-absent-reason
Alias: $HL7DiagnosisType = http://terminology.hl7.org/CodeSystem/ex-diagnosistype
Alias: $HL7ProcessPriority = http://terminology.hl7.org/CodeSystem/processpriority
Alias: $HL7FundsReserve = http://terminology.hl7.org/CodeSystem/fundsreserve
Alias: $HL7RelatedClaim = http://terminology.hl7.org/CodeSystem/ex-relatedclaimrelationship

// X12
Alias: $X12ServiceType = https://x12.org/codes/service-type-codes
Alias: $X12ClaimAdjustmentReasonCodes = https://x12.org/codes/claim-adjustment-reason-codes

// Point to CARIN BB Adjudication Code System
// FHIR-48088
Alias: $AdjudicationCS = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication

// National Directory
// NDH Import
Alias: $ConnectionTypeCS = http://terminology.hl7.org/CodeSystem/endpoint-connection-type
Alias: $FHIRVersionCS = http://hl7.org/fhir/FHIR-version
Alias: $DaysOfWeekVS  = http://hl7.org/fhir/ValueSet/days-of-week

//// NDH Aliases
Alias: $ExtnEndpointUsecase = http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-endpoint-usecase
Alias: $ExtnIGsSupported = http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-igsSupported
Alias: $ExtnSecureExchangeArtifacts = http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-secureExchangeArtifacts
Alias: $ExtnTrustFramework = http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-trustFramework
Alias: $ExtnSecureEndpoint = http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-secureEndpoint
Alias: $ExtnAssociatedServers = http://hl7.org/fhir/us/ndh/StructureDefinition/base-ext-associatedServers

Alias: $AssocServersTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/NdhAssociatedServersTypeCS
Alias: $NdhAssociatedServersTypeVS = http://hl7.org/fhir/us/ndh/ValueSet/NdhAssociatedServersTypeVS
Alias: $CredentialStatusCS = http://hl7.org/fhir/us/ndh/CodeSystem/CredentialStatusCS

Alias: $EndpointAccessControlMechanismCS = http://hl7.org/fhir/us/ndh/CodeSystem/EndpointAccessControlMechanismCS
Alias: $EndpointAccessControlMechanismVS = http://hl7.org/fhir/us/ndh/ValueSet/EndpointAccessControlMechanismVS
Alias: $EndpointConnectionTypeVersionCS = http://hl7.org/fhir/us/ndh/CodeSystem/EndpointConnectionTypeVersionCS
Alias: $EndpointConnectionTypeVersionVS = http://hl7.org/fhir/us/ndh/ValueSet/EndpointConnectionTypeVersionVS
Alias: $EndpointConnectionTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/EndpointConnectionTypeCS
Alias: $EndpointConnectionTypeVS = http://hl7.org/fhir/us/ndh/ValueSet/EndpointConnectionTypeVS
Alias: $EndpointFhirMimeTypeVS = http://hl7.org/fhir/us/ndh/ValueSet/EndpointFhirMimeTypeVS
Alias: $EndpointPayloadTypeVS = http://hl7.org/fhir/us/ndh/ValueSet/EndpointPayloadTypeVS
Alias: $EndPointUseCaseCS = http://hl7.org/fhir/us/ndh/CodeSystem/NdhFhirEndpointUseCaseCS
Alias: $SecureExchangeArtifactsCS = http://hl7.org/fhir/us/ndh/CodeSystem/NdhSecureExchangeArtifactsCS
Alias: $EndpointPayloadTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/EndpointPayloadTypeCS
Alias: $EndpointTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/EndpointTypeCS
Alias: $OrgTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/OrgTypeCS
Alias: $NdhFhirEndpointUseCaseCS = http://hl7.org/fhir/us/ndh/CodeSystem/NdhFhirEndpointUseCaseCS
Alias: $NdhVerificationStatusCS = http://hl7.org/fhir/us/ndh/CodeSystem/NdhVerificationStatusCS
Alias: $TrustFrameworkTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/TrustFrameworkTypeCS
Alias: $TrustProfileCS = http://hl7.org/fhir/us/ndh/CodeSystem/TrustProfileCS
Alias: $TrustProfileVS = http://hl7.org/fhir/us/ndh/ValueSet/TrustProfileVS
Alias: $IdentifierStatusVS = http://hl7.org/fhir/us/ndh/ValueSet/IdentifierStatusVS
Alias: $NdhFhirEndpointUseCaseVS = http://hl7.org/fhir/us/ndh/ValueSet/NdhFhirEndpointUseCaseVS
Alias: $TrustFrameworkTypeVS = http://hl7.org/fhir/us/ndh/ValueSet/TrustFrameworkTypeVS
Alias: $NdhVerificationStatusCS = http://hl7.org/fhir/us/ndh/CodeSystem/NdhVerificationStatusCS
Alias: $NdhVerificationStatusVS = http://hl7.org/fhir/us/ndh/ValueSet/NdhVerificationStatusVS
Alias: $NdhSecureExchangeArtifactsCS = http://hl7.org/fhir/us/ndh/CodeSystem/NdhSecureExchangeArtifactsCS
Alias: $NdhSecureExchangeArtifactsVS = http://hl7.org/fhir/us/ndh/ValueSet/NdhSecureExchangeArtifactsVS

// NDH incorporated into PDex
// Alias: $AssocServersTypeCS = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/NdhAssociatedServersTypeCS
// Alias: $ExtnEndpointUsecase = http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/base-ext-endpoint-usecase
// Alias: $ExtnIGsSupported = http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/base-ext-igsSupported
// Alias: $ExtnSecureExchangeArtifacts = http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/base-ext-secureExchangeArtifacts
// Alias: $ExtnTrustFramework = http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/base-ext-trustFramework
// Alias: $ExtnSecureEndpoint = http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/base-ext-secureEndpoint
// Alias: $ExtnAssociatedServers = http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/base-ext-associatedServers
// Alias: $EndpointAccessControlMechanismCS = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/EndpointAccessControlMechanismCS
// Alias: $EndpointConnectionTypeCS = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/EndpointConnectionTypeCS
// Alias: $EndPointUseCaseCS = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/NdhFhirEndpointUseCaseCS
// Alias: $SecureExchangeArtifactsCS = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/NdhSecureExchangeArtifactsCS
// Alias: $EndpointPayloadTypeCS = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/EndpointPayloadTypeCS
// Alias: $EndpointTypeCS = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/EndpointTypeCS
// Alias: $NdhVerificationStatusCS = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/NdhVerificationStatusCS
// Alias: $TrustFrameworkTypeCS = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/TrustFrameworkTypeCS
// Alias: $TrustProfileCS = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/TrustProfileCS
Alias: $NUCCProviderTaxonomy = http://nucc.org/provider-taxonomy
Alias: $NPICS = http://hl7.org/fhir/sid/us-npi

// Replaced NDH ValueSets defined in ValueSets-NDH.fsh

// CMS HCPS Codes
Alias: $CMSHCPCSCodes = https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets
Alias: $CMSHIPPSCodes = https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/ProspMedicareFeeSvcPmtGen/HIPPSCodes
Alias: $CMSRemittanceAdviceRemarkCodes = https://x12.org/codes/remittance-advice-remark-codes

// Da Vinci Prior Authorization Support 1.2.0-ballot
Alias: $ExtensionItemTraceNumber = http://hl7.org/fhir/us/davinci-pas/StructureDefinition/extension-itemTraceNumber
Alias: $ExtensionItemPreAuthIssueDate = http://hl7.org/fhir/us/davinci-pas/StructureDefinition/extension-itemPreAuthIssueDate
Alias: $ExtensionItemPreAuthPeriod = http://hl7.org/fhir/us/davinci-pas/StructureDefinition/extension-itemPreAuthPeriod
Alias: $ExtensionAuthorizationNumber = http://hl7.org/fhir/us/davinci-pas/StructureDefinition/extension-authorizationNumber
Alias: $ExtensionAdministrationReferenceNumber = http://hl7.org/fhir/us/davinci-pas/StructureDefinition/extension-administrationReferenceNumber
Alias: $ExtensionItemAuthorizedDate = http://hl7.org/fhir/us/davinci-pas/StructureDefinition/extension-itemAuthorizedDate
Alias: $ExtensionItemAuthorizedDetail = http://hl7.org/fhir/us/davinci-pas/StructureDefinition/extension-itemAuthorizedDetail
Alias: $ExtensionItemAuthorizedProvider = http://hl7.org/fhir/us/davinci-pas/StructureDefinition/extension-itemAuthorizedProvider
Alias: $ExtensionCommunicatedDiagnosis = http://hl7.org/fhir/us/davinci-pas/StructureDefinition/extension-communicatedDiagnosis


//Other Aliases
Alias: $BCP13 = urn:ietf:bcp:13

// ATR
Alias: $ATRGroup = http://hl7.org/fhir/us/davinci-atr/StructureDefinition/atr-group
Alias: $DaVinciPatientList = http://hl7.org/fhir/us/davinci-atr/StructureDefinition/davinci-patient-list

// HRex Aliases
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $coverage-class = http://terminology.hl7.org/CodeSystem/coverage-class
Alias: $consentscope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $uscore-provenance-participant-type = http://hl7.org/fhir/us/core/CodeSystem/us-core-provenance-participant-type
Alias: $provenance-participant-type = http://terminology.hl7.org/CodeSystem/provenance-participant-type
Alias: $v3-ParticipationType = http://terminology.hl7.org/CodeSystem/v3-ParticipationType
Alias: $consentaction = http://terminology.hl7.org/CodeSystem/consentaction
Alias: $standard-status = http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
Alias: $fmm = http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm

// Da Vinci Hrex IG
Alias: $HrexCoverage = http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-coverage
//Alias: $HrexCoverage = http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/hrex-coverage
Alias: $HrexOperationMemberMatch = http://hl7.org/fhir/us/davinci-hrex/OperationDefinition/member-match
Alias: $HRexConsent = http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-consent

// Terminology Server
Alias: $CoverageRelationship = http://terminology.hl7.org/CodeSystem/subscriber-relationship

// PDex Provenance Code Systems
Alias: $pdex-provenance-participant-type = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/ProvenanceAgentRoleType
Alias: $pdex-provenance-payer-data-source = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/ProvenancePayerDataSource


---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/BundleProvenanceExample.fsh

Instance: BundleWithProvenance
InstanceOf: Bundle
Description: "A bundle that returns provenance using _revinclude=Provenance:target"
* id = "3000002"
* meta.profile = "http://hl7.org/fhir/StructureDefinition/Bundle"
* type = http://hl7.org/fhir/bundle-type#searchset "Search Results"
* timestamp = "2020-09-28T23:26:23.217+00:00"
* total = 1
* link[0].relation = "self"
* link[0].url = "https://example.com/base/fhir/MedicationDispense?ct=W3sidG9rZW4iOiIrUklEOn53MThjQUk5RlVPZ0lEQUFBQUFBQU"
* entry[0].fullUrl = "https://example.com/base/MedicationDispense/1000001"
* entry[0].resource.resourceType = "MedicationDispense"
* entry[0].resource.id = "1000001"
* entry[0].resource.status = http://terminology.hl7.org/CodeSystem/medicationdispense-status#completed
* entry[0].resource.medicationCodeableConcept = $FDANationalDrugCodeCS#54458-872-10
* entry[0].resource.subject.reference = "Patient/1"
* entry[0].resource.performer.actor.reference = "Practitioner/4"
* entry[0].resource.location.reference = "Location/5"
* entry[0].resource.type =  http://terminology.hl7.org/CodeSystem/v3-ActCode#RF
* entry[0].resource.quantity.value = 60
* entry[0].resource.daysSupply.value = 30
* entry[0].search.mode = http://hl7.org/fhir/search-entry-mode#match
* entry[1].fullUrl = "https://example.com/base/Provenance/321000001"
* entry[1].resource.resourceType = "Provenance"
* entry[1].resource.id = "321000001"
* entry[1].resource.meta.versionId = "1"
* entry[1].resource.meta.lastUpdated = "2020-09-28T23:26:23.217+00:00"
* entry[1].resource.meta.profile = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-provenance"
* entry[1].resource.target[0].reference = "MedicationDispense/1000001"
* entry[1].resource.recorded = "2020-07-12T18:26:23.217+00:00"
* entry[1].resource.agent[0].type = $uscore-provenance-participant-type#transmitter "Transmitter"
* entry[1].resource.agent[0].who.reference = "Organization/Payer1"
* entry[1].resource.entity.role = http://hl7.org/fhir/provenance-entity-role#source
* entry[1].resource.entity.what.display = "No reference available"
* entry[1].resource.entity.extension.url = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/ProvenanceSourceFrom"
* entry[1].resource.entity.extension.valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/ProvenancePayerDataSource#hl7ccda "HL7 C-CDA"
* entry[1].search.mode = http://hl7.org/fhir/search-entry-mode#include


Instance: BundleConditionWithProvenance
InstanceOf: Bundle
Description: "A bundle that returns Conditions with provenance using _revinclude=Provenance:target"
* id = "3000003"
* meta.profile = "http://hl7.org/fhir/StructureDefinition/Bundle"
* type = http://hl7.org/fhir/bundle-type#searchset "Search Results"
* timestamp = "2020-09-28T23:26:23.217+00:00"
* total = 2
* link[0].relation = "self"
* link[0].url = "https://example.com/base/fhir/Condition?ct=W1sidG9rZW4iOiIrUklEOn53MThjQUk5RlVPZ0lEQUFBQUFBQU"
* entry[0].fullUrl = "https://example.com/base/Condition/101"
* entry[0].resource.resourceType = "Condition"
* entry[0].resource.id = "101"
* entry[0].resource.clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* entry[0].resource.verificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status#confirmed
* entry[0].resource.category = http://terminology.hl7.org/CodeSystem/condition-category#problem-list-item
* entry[0].resource.code = http://snomed.info/sct#442311008 "liveborn born in hospital"
* entry[0].resource.subject.reference = "Patient/1"
* entry[0].resource.onsetDateTime = "1995-09-20"
* entry[0].search.mode = http://hl7.org/fhir/search-entry-mode#match
* entry[1].fullUrl = "https://example.com/base/Condition/102"
* entry[1].resource.resourceType = "Condition"
* entry[1].resource.id = "102"
* entry[1].resource.clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* entry[1].resource.verificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status#confirmed
* entry[1].resource.category = http://terminology.hl7.org/CodeSystem/condition-category#problem-list-item "Problem List Item"
* entry[1].resource.code = http://snomed.info/sct#247824007 "Fear of becoming fat"
* entry[1].resource.subject.reference = "Patient/1"
* entry[1].resource.onsetDateTime = "2020-03-13"
* entry[1].search.mode = http://hl7.org/fhir/search-entry-mode#match
* entry[2].fullUrl = "https://example.com/base/Provenance/3101"
* entry[2].resource.resourceType = "Provenance"
* entry[2].resource.id = "3101"
* entry[2].resource.meta.versionId = "1"
* entry[2].resource.meta.lastUpdated = "2020-09-28T23:26:23.217+00:00"
* entry[2].resource.meta.profile = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-provenance"
* entry[2].resource.target[0].reference = "Condition/101"
* entry[2].resource.recorded = "1995-09-20T18:26:23.217+00:00"
* entry[2].resource.agent[0].type.coding = $provenance-participant-type#author "Author"
* entry[2].resource.agent[0].who.reference = "Organization/ProviderOrg2"
* entry[2].resource.entity.role = http://hl7.org/fhir/provenance-entity-role#source
* entry[2].resource.entity.what.display = "No reference available"
* entry[2].resource.entity.extension.url = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/ProvenanceSourceFrom"
* entry[2].resource.entity.extension.valueCodeableConcept = $pdex-provenance-payer-data-source#hl7ccda "HL7 C-CDA"
* entry[2].search.mode = http://hl7.org/fhir/search-entry-mode#include



Instance: BundleExamplePayer1
InstanceOf: Bundle
Description: "The bundle pulled from Payer1 by Payer 2 when a member switches to Payer 2. Patient, 2 Encounters and 2 Provenance records."
* id = "1000000-1"
* meta.profile = "http://hl7.org/fhir/StructureDefinition/Bundle"
* type = http://hl7.org/fhir/bundle-type#transaction-response
* timestamp = "2019-12-31T20:26:23.217+00:00"
// * total = 3
* link[0].relation = "self"
* link[0].url = "https://example.com/base/fhir/Patient?ct=W2idG9rZW4iOiIrUklEOn53MThjQUk5RlVPZ0lEQUFBQUFBQU"
* entry[0].fullUrl = "https://example.com/base/Patient/1"
* entry[0].resource.resourceType = "Patient"
* entry[0].resource.id = "1"
* entry[0].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
* entry[0].resource.meta.lastUpdated = "2019-07-07T13:26:22.0314215+00:00"
* entry[0].resource.language = #en-US
* entry[0].resource.active = true
* entry[0].resource.name[0].family = "Appleseed"
* entry[0].resource.name[0].given[0] = "Johnny"
* entry[0].resource.telecom[0].system = http://hl7.org/fhir/contact-point-system#phone
* entry[0].resource.telecom[0].value = "(443)555-1212"
* entry[0].resource.telecom[0].rank = 1
* entry[0].resource.telecom[1].system = http://hl7.org/fhir/contact-point-system#phone
* entry[0].resource.telecom[1].value = "(410)678-2323"
* entry[0].resource.telecom[1].rank = 2
* entry[0].resource.gender = http://hl7.org/fhir/administrative-gender#male
* entry[0].resource.birthDate = "1986-01-01"
* entry[0].resource.address[0].type = http://hl7.org/fhir/address-type#physical
* entry[0].resource.address[0].line[0] = "123 Main Street"
* entry[0].resource.address[0].city = "Pittsburgh"
* entry[0].resource.address[0].state = "PA"
* entry[0].resource.address[0].postalCode = "12519"
* entry[0].resource.maritalStatus = http://terminology.hl7.org/CodeSystem/v3-NullFlavor#UNK
* entry[0].resource.identifier[0].type = http://terminology.hl7.org/CodeSystem/v2-0203#MB
* entry[0].resource.identifier[0].value = "https://www.xxxhealthplan.com/fhir/memberidentifier#1234-234-1243-12345678901"
* entry[0].resource.identifier[0].system = "https://www.xxxhealthplan.com/fhir/memberidentifier"
* entry[0].resource.identifier[1].type = http://terminology.hl7.org/CodeSystem/v2-0203#MR
* entry[0].resource.identifier[1].value = "1234-234-1243-12345678901m"
* entry[0].resource.identifier[1].system = "https://www.xxxhealthplan.com/fhir/medicalrecordnumber"
* entry[0].resource.identifier[2].type = http://terminology.hl7.org/CodeSystem/v2-0203#XV
* entry[0].resource.identifier[2].value = "1234-234-1243-12345678901u"
* entry[0].resource.identifier[2].system = "https://www.xxxhealthplan.com/fhir/uniquememberidentifier"
* entry[0].resource.identifier[3].type = http://terminology.hl7.org/CodeSystem/v2-0203#PT
* entry[0].resource.identifier[3].value = "1234-234-1243-12345678901a"
* entry[0].resource.identifier[3].system = "https://www.xxxhealthplan.com/fhir/patacctnum"
// * entry[0].search.mode = http://hl7.org/fhir/search-entry-mode#match
* entry[0].response.status = "200"
* entry[1].fullUrl = "https://example.com/base/Encounter/6-1"
* entry[1].resource.resourceType = "Encounter"
* entry[1].resource.id = "6-1"
* entry[1].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter"
* entry[1].resource.meta.lastUpdated = "2019-07-14T19:26:23.217+00:00"
* entry[1].resource.status = http://hl7.org/fhir/encounter-status#finished "Finished"
* entry[1].resource.class =  http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "Ambulatory"
* entry[1].resource.type =  $SnomedCT#11429006 "Consultation"
* entry[1].resource.subject.reference = "Patient/1"
// * entry[1].search.mode = http://hl7.org/fhir/search-entry-mode#match
* entry[1].response.status = "200"
* entry[2].fullUrl = "https://example.com/base/Encounter/7-1"
* entry[2].resource.resourceType = "Encounter"
* entry[2].resource.id = "7-1"
* entry[2].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter"
* entry[2].resource.meta.lastUpdated = "2019-10-15T20:26:23.217+00:00"
* entry[2].resource.status = http://hl7.org/fhir/encounter-status#finished "Finished"
* entry[2].resource.class =  http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "Ambulatory"
* entry[2].resource.type =  $SnomedCT#11429006 "Consultation"
* entry[2].resource.subject.reference = "Patient/1"
// * entry[2].search.mode = http://hl7.org/fhir/search-entry-mode#match
* entry[2].response.status = "200"
* entry[3].fullUrl = "https://example.com/base/Provenance/1000002-1"
* entry[3].resource.resourceType = "Provenance"
* entry[3].resource.id = "1000002-1"
* entry[3].resource.meta.versionId = "1"
* entry[3].resource.meta.profile = $PdexProvenance
* entry[3].resource.meta.lastUpdated = "2019-07-14T19:26:23.217+00:00"
* entry[3].resource.target[0].reference = "https://example.com/base/Encounter/6-1"
* entry[3].resource.recorded = "2020-07-10T16:26:23.217+00:00"
* entry[3].resource.agent[0].type.coding = $provenance-participant-type#author "Author"
* entry[3].resource.agent[0].who.reference = "Organization/ProviderOrg1"
* entry[3].resource.entity.role = http://hl7.org/fhir/provenance-entity-role#source
* entry[3].resource.entity.what.display = "No reference available"
* entry[3].resource.entity.extension[sourceFormat].valueCodeableConcept = $pdex-provenance-payer-data-source#hl7ccda "HL7 C-CDA"
* entry[3].resource.entity.extension.url = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/ProvenanceSourceFrom"
// * entry[3].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[3].response.status = "200"
* entry[4].fullUrl = "https://example.com/base/Provenance/1000003-1"
* entry[4].resource.resourceType = "Provenance"
* entry[4].resource.id = "1000003-1"
* entry[4].resource.meta.versionId = "1"
* entry[4].resource.meta.lastUpdated = "2019-10-15T20:26:23.217+00:00"
* entry[4].resource.target[0].reference = "Encounter/7-1"
* entry[4].resource.recorded = "2020-07-10T16:26:23.217+00:00"
* entry[4].resource.agent[0].type.coding = $provenance-participant-type#author "Author"
* entry[4].resource.agent[0].who.reference = "Organization/ProviderOrg1"
* entry[4].resource.entity.role = http://hl7.org/fhir/provenance-entity-role#source
* entry[4].resource.entity.what.display = "No reference available"
* entry[4].resource.entity.extension[sourceFormat].valueCodeableConcept = $pdex-provenance-payer-data-source#hl7ccda "HL7 C-CDA"
* entry[4].resource.entity.extension.url = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/ProvenanceSourceFrom"
// * entry[4].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[4].response.status = "200"
* entry[5].fullUrl = "https://example.com/base/Provenance/1000004-1"
* entry[5].resource.resourceType = "Provenance"
* entry[5].resource.id = "1000004-1"
* entry[5].resource.meta.versionId = "1"
* entry[5].resource.meta.lastUpdated = "2019-12-31T20:26:23.217+00:00"
* entry[5].resource.target[0].reference = "Bundle/1000000-1"
* entry[5].resource.recorded = "2019-12-31T20:26:23.217+00:00"
* entry[5].resource.agent[0].type = $uscore-provenance-participant-type#transmitter "Transmitter"
* entry[5].resource.agent[0].who.reference = "Organization/Payer1"
* entry[5].resource.agent[0].role.coding = http://terminology.hl7.org/CodeSystem/contractsignertypecodes#TRANS
// * entry[5].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[5].response.status = "200"



Instance: BundleExamplePayer2
InstanceOf: Bundle
Description: "The bundle pulled from Payer2 by Payer 3 when a member switches to Payer 3. Patient, 2 Encounters and 2 Provenance records plus new records from Payer 2."
* id = "1000000-2"
* meta.profile = "http://hl7.org/fhir/StructureDefinition/Bundle"
* type = http://hl7.org/fhir/bundle-type#transaction-response
* timestamp = "2019-12-31T20:26:23.217+00:00"
// * total = 4
* link[0].relation = "self"
* link[0].url = "https://example.com/base/fhir/Patient?ct=W4sidG9rZW4iOiIrUklEOn53MThjQUk5RlVPZ0lEQUFBQUFBQU"
* entry[0].fullUrl = "https://example.com/base/Patient/1-2"
* entry[0].resource.resourceType = "Patient"
* entry[0].resource.id = "1-2"
* entry[0].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
* entry[0].resource.meta.lastUpdated = "2019-07-07T13:26:22.0314215+00:00"
* entry[0].resource.language = #en-US
* entry[0].resource.active = true
* entry[0].resource.name[0].family = "Appleseed"
* entry[0].resource.name[0].given[0] = "Johnny"
* entry[0].resource.telecom[0].system = http://hl7.org/fhir/contact-point-system#phone
* entry[0].resource.telecom[0].value = "(443)555-1212"
* entry[0].resource.telecom[0].rank = 1
* entry[0].resource.telecom[1].system = http://hl7.org/fhir/contact-point-system#phone
* entry[0].resource.telecom[1].value = "(410)678-2323"
* entry[0].resource.telecom[1].rank = 2
* entry[0].resource.gender = http://hl7.org/fhir/administrative-gender#male
* entry[0].resource.birthDate = "1986-01-01"
* entry[0].resource.address[0].type = http://hl7.org/fhir/address-type#physical
* entry[0].resource.address[0].line[0] = "123 Main Street"
* entry[0].resource.address[0].city = "Pittsburgh"
* entry[0].resource.address[0].state = "PA"
* entry[0].resource.address[0].postalCode = "12519"
* entry[0].resource.maritalStatus = http://terminology.hl7.org/CodeSystem/v3-NullFlavor#UNK
* entry[0].resource.identifier[0].type = http://terminology.hl7.org/CodeSystem/v2-0203#MB
* entry[0].resource.identifier[0].value = "https://www.xxxhealthplan.com/fhir/memberidentifier#1234-234-1243-12345678901"
* entry[0].resource.identifier[0].system = "https://www.xxxhealthplan.com/fhir/memberidentifier"
* entry[0].resource.identifier[1].type = http://terminology.hl7.org/CodeSystem/v2-0203#MR
* entry[0].resource.identifier[1].value = "1234-234-1243-12345678901m"
* entry[0].resource.identifier[1].system = "https://www.xxxhealthplan.com/fhir/medicalrecordnumber"
* entry[0].resource.identifier[2].type = http://terminology.hl7.org/CodeSystem/v2-0203#XV
* entry[0].resource.identifier[2].value = "1234-234-1243-12345678901u"
* entry[0].resource.identifier[2].system = "https://www.xxxhealthplan.com/fhir/uniquememberidentifier"
* entry[0].resource.identifier[3].type = http://terminology.hl7.org/CodeSystem/v2-0203#PT
* entry[0].resource.identifier[3].value = "1234-234-1243-12345678901a"
* entry[0].resource.identifier[3].system = "https://www.xxxhealthplan.com/fhir/patacctnum"
// * entry[0].search.mode = http://hl7.org/fhir/search-entry-mode#match
* entry[0].response.status = "200"
* entry[1].fullUrl = "https://example.com/base/Encounter/6-1-2"
* entry[1].resource.resourceType = "Encounter"
* entry[1].resource.id = "6-1-2"
* entry[1].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter"
* entry[1].resource.meta.lastUpdated = "2019-07-14T19:26:23.217+00:00"
* entry[1].resource.status = http://hl7.org/fhir/encounter-status#finished "Finished"
* entry[1].resource.class =  http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "Ambulatory"
* entry[1].resource.type =  $SnomedCT#11429006 "Consultation"
* entry[1].resource.subject.reference = "Patient/1-2"
// * entry[1].search.mode = http://hl7.org/fhir/search-entry-mode#match
* entry[1].response.status = "200"
* entry[2].fullUrl = "https://example.com/base/Encounter/7-1-2"
* entry[2].resource.resourceType = "Encounter"
* entry[2].resource.id = "7-1-2"
* entry[2].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter"
* entry[2].resource.meta.lastUpdated = "2019-10-15T20:26:23.217+00:00"
* entry[2].resource.status = http://hl7.org/fhir/encounter-status#finished "Finished"
* entry[2].resource.class =  http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "Ambulatory"
* entry[2].resource.type =  $SnomedCT#11429006 "Consultation"
* entry[2].resource.subject.reference = "Patient/1-2"
// * entry[2].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[2].response.status = "200"
* entry[3].fullUrl = "https://example.com/base/Encounter/8-2"
* entry[3].resource.resourceType = "Encounter"
* entry[3].resource.id = "8-2"
* entry[3].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter"
* entry[3].resource.meta.lastUpdated = "2020-06-15T20:26:23.217+00:00"
* entry[3].resource.status = http://hl7.org/fhir/encounter-status#finished "Finished"
* entry[3].resource.class =  http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "Ambulatory"
* entry[3].resource.type =  $SnomedCT#11429006 "Consultation"
* entry[3].resource.subject.reference = "Patient/1-2"
// * entry[3].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[3].response.status = "200"
* entry[4].fullUrl = "https://example.com/base/Provenance/1000002-1-2"
* entry[4].resource.resourceType = "Provenance"
* entry[4].resource.id = "1000002-1-2"
* entry[4].resource.meta.versionId = "1"
* entry[4].resource.meta.profile = $PdexProvenance
* entry[4].resource.meta.lastUpdated = "2019-07-14T19:26:23.217+00:00"
* entry[4].resource.target[0].reference = "https://example.com/base/Encounter/6-1-2"
* entry[4].resource.recorded = "2020-07-10T16:26:23.217+00:00"
* entry[4].resource.agent[0].type.coding = $provenance-participant-type#author "Author"
* entry[4].resource.agent[0].who.reference = "Organization/ProviderOrg1"
* entry[4].resource.entity.role = http://hl7.org/fhir/provenance-entity-role#source
* entry[4].resource.entity.what.display = "No reference available"
* entry[4].resource.entity.extension[sourceFormat].valueCodeableConcept = $pdex-provenance-payer-data-source#hl7ccda "HL7 C-CDA"
* entry[4].resource.entity.extension.url = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/ProvenanceSourceFrom"
// * entry[4].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[4].response.status = "200"
* entry[5].fullUrl = "https://example.com/base/Provenance/1000003-1-2"
* entry[5].resource.resourceType = "Provenance"
* entry[5].resource.id = "1000003-1-2"
* entry[5].resource.meta.versionId = "1"
* entry[5].resource.meta.lastUpdated = "2019-10-15T20:26:23.217+00:00"
* entry[5].resource.target[0].reference = "Encounter/7-1-2"
* entry[5].resource.recorded = "2020-07-10T16:26:23.217+00:00"
* entry[5].resource.agent[0].type.coding = $provenance-participant-type#author "Author"
* entry[5].resource.agent[0].who.reference = "Organization/ProviderOrg1"
* entry[5].resource.entity.role = http://hl7.org/fhir/provenance-entity-role#source
* entry[5].resource.entity.what.display = "No reference available"
* entry[5].resource.entity.extension[0].valueCodeableConcept = $pdex-provenance-payer-data-source#hl7ccda "HL7 C-CDA"
* entry[5].resource.entity.extension[0].url = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/ProvenanceSourceFrom"
// * entry[5].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[5].response.status = "200"
* entry[6].fullUrl = "https://example.com/base/Provenance/1000004-1-2"
* entry[6].resource.resourceType = "Provenance"
* entry[6].resource.id = "1000004-1-2"
* entry[6].resource.meta.versionId = "1"
* entry[6].resource.meta.lastUpdated = "2019-12-31T20:26:23.217+00:00"
* entry[6].resource.target[0].reference = "Patient/1-2"
* entry[6].resource.target[1].reference = "Encounter/6-1-2"
* entry[6].resource.target[2].reference = "Encounter/7-1-2"
* entry[6].resource.target[3].reference = "Provenance/1000002-1-2"
* entry[6].resource.target[4].reference = "Provenance/1000003-1-2"
* entry[6].resource.recorded = "2019-12-31T20:26:23.217+00:00"
* entry[6].resource.agent[0].type = $uscore-provenance-participant-type#transmitter "Transmitter"
* entry[6].resource.agent[0].who.reference = "Organization/Payer1"
* entry[6].resource.agent[0].role.coding = http://terminology.hl7.org/CodeSystem/contractsignertypecodes#TRANS
// * entry[6].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[6].response.status = "200"
* entry[7].fullUrl = "https://example.com/base/Provenance/1000004-2"
* entry[7].resource.resourceType = "Provenance"
* entry[7].resource.id = "1000004-2"
* entry[7].resource.meta.versionId = "1"
* entry[7].resource.meta.lastUpdated = "2020-06-15T20:26:23.217+00:00"
* entry[7].resource.target[0].reference = "Encounter/8-2"
* entry[7].resource.recorded = "2020-06-15T20:26:23.217+00:00"
* entry[7].resource.agent[0].type.coding = $provenance-participant-type#author "Author"
* entry[7].resource.agent[0].who.reference = "Organization/ProviderOrg1"
* entry[7].resource.entity.role = http://hl7.org/fhir/provenance-entity-role#source
* entry[7].resource.entity.what.display = "No reference available"
* entry[7].resource.entity.extension[0].valueCodeableConcept = $pdex-provenance-payer-data-source#hl7ccda "HL7 C-CDA"
* entry[7].resource.entity.extension[0].url = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/ProvenanceSourceFrom"
// * entry[7].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[7].response.status = "200"
* entry[8].fullUrl = "https://example.com/base/Provenance/1000005-2"
* entry[8].resource.resourceType = "Provenance"
* entry[8].resource.id = "1000005-2"
* entry[8].resource.meta.versionId = "1"
* entry[8].resource.meta.lastUpdated = "2020-12-31T20:26:23.217+00:00"
* entry[8].resource.target[0].reference = "Bundle/1000000-2"
* entry[8].resource.recorded = "2019-12-31T20:26:23.217+00:00"
* entry[8].resource.agent[0].type = $uscore-provenance-participant-type#transmitter "Transmitter"
* entry[8].resource.agent[0].who.reference = "Organization/Payer1"
* entry[8].resource.agent[0].role.coding = http://terminology.hl7.org/CodeSystem/contractsignertypecodes#TRANS
// * entry[8].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[8].response.status = "200"


Instance: BundleExamplePayer3
InstanceOf: Bundle
Description: "The bundle pulled from Payer3 by Payer 4 when a member switches to Payer 4. Patient, 2 Encounters and 2 Provenance records originating from Payer 1 plus new records from Payer 2 and Payer 3, including supporting Provenance records."
* id = "1000000-3"
* meta.profile = "http://hl7.org/fhir/StructureDefinition/Bundle"
* type = http://hl7.org/fhir/bundle-type#transaction-response
* timestamp = "2021-12-31T20:26:23.217+00:00"
// * total = 5
* link[0].relation = "self"
* link[0].url = "https://example.com/base/fhir/Patient?ct=W5sidG9rZW4iOiIrUklEOn53MThjQUk5RlVPZ0lEQUFBQUFBQU"
* entry[0].fullUrl = "https://example.com/base/Patient/1-3"
* entry[0].resource.resourceType = "Patient"
* entry[0].resource.id = "1-3"
* entry[0].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
* entry[0].resource.meta.lastUpdated = "2021-01-07T13:26:22.0314215+00:00"
* entry[0].resource.language = #en-US
* entry[0].resource.active = true
* entry[0].resource.name[0].family = "Appleseed"
* entry[0].resource.name[0].given[0] = "Johnny"
* entry[0].resource.telecom[0].system = http://hl7.org/fhir/contact-point-system#phone
* entry[0].resource.telecom[0].value = "(443)555-1212"
* entry[0].resource.telecom[0].rank = 1
* entry[0].resource.telecom[1].system = http://hl7.org/fhir/contact-point-system#phone
* entry[0].resource.telecom[1].value = "(410)678-2323"
* entry[0].resource.telecom[1].rank = 2
* entry[0].resource.gender = http://hl7.org/fhir/administrative-gender#male
* entry[0].resource.birthDate = "1986-01-01"
* entry[0].resource.address[0].type = http://hl7.org/fhir/address-type#physical
* entry[0].resource.address[0].line[0] = "123 Main Street"
* entry[0].resource.address[0].city = "Pittsburgh"
* entry[0].resource.address[0].state = "PA"
* entry[0].resource.address[0].postalCode = "12519"
* entry[0].resource.maritalStatus = http://terminology.hl7.org/CodeSystem/v3-NullFlavor#UNK
* entry[0].resource.identifier[0].type = http://terminology.hl7.org/CodeSystem/v2-0203#MB
* entry[0].resource.identifier[0].value = "https://www.xxxhealthplan.com/fhir/memberidentifier#1234-234-1243-12345678901"
* entry[0].resource.identifier[0].system = "https://www.xxxhealthplan.com/fhir/memberidentifier"
* entry[0].resource.identifier[1].type = http://terminology.hl7.org/CodeSystem/v2-0203#MR
* entry[0].resource.identifier[1].value = "1234-234-1243-12345678901m"
* entry[0].resource.identifier[1].system = "https://www.xxxhealthplan.com/fhir/medicalrecordnumber"
* entry[0].resource.identifier[2].type = http://terminology.hl7.org/CodeSystem/v2-0203#XV
* entry[0].resource.identifier[2].value = "1234-234-1243-12345678901u"
* entry[0].resource.identifier[2].system = "https://www.xxxhealthplan.com/fhir/uniquememberidentifier"
* entry[0].resource.identifier[3].type = http://terminology.hl7.org/CodeSystem/v2-0203#PT
* entry[0].resource.identifier[3].value = "1234-234-1243-12345678901a"
* entry[0].resource.identifier[3].system = "https://www.xxxhealthplan.com/fhir/patacctnum"
// * entry[0].search.mode = http://hl7.org/fhir/search-entry-mode#match
* entry[0].response.status = "200"
* entry[1].fullUrl = "https://example.com/base/Encounter/6-1-2-3"
* entry[1].resource.resourceType = "Encounter"
* entry[1].resource.id = "6-1-2-3"
* entry[1].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter"
* entry[1].resource.meta.lastUpdated = "2021-01-14T19:26:23.217+00:00"
* entry[1].resource.status = http://hl7.org/fhir/encounter-status#finished "Finished"
* entry[1].resource.class =  http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "Ambulatory"
* entry[1].resource.type =  $SnomedCT#11429006 "Consultation"
* entry[1].resource.subject.reference = "Patient/1-2"
// * entry[1].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[1].response.status = "200"
* entry[2].fullUrl = "https://example.com/base/Encounter/7-1-2-3"
* entry[2].resource.resourceType = "Encounter"
* entry[2].resource.id = "7-1-2-3"
* entry[2].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter"
* entry[2].resource.meta.lastUpdated = "2021-01-15T20:26:23.217+00:00"
* entry[2].resource.status = http://hl7.org/fhir/encounter-status#finished "Finished"
* entry[2].resource.class =  http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "Ambulatory"
* entry[2].resource.type =  $SnomedCT#11429006 "Consultation"
* entry[2].resource.subject.reference = "Patient/1-3"
// * entry[2].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[2].response.status = "200"
* entry[3].fullUrl = "https://example.com/base/Encounter/8-2-3"
* entry[3].resource.resourceType = "Encounter"
* entry[3].resource.id = "8-2-3"
* entry[3].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter"
* entry[3].resource.meta.lastUpdated = "2021-03-15T20:26:23.217+00:00"
* entry[3].resource.status = http://hl7.org/fhir/encounter-status#finished "Finished"
* entry[3].resource.class =  http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "Ambulatory"
* entry[3].resource.type =  $SnomedCT#11429006 "Consultation"
* entry[3].resource.subject.reference = "Patient/1-3"
// * entry[3].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[3].response.status = "200"
* entry[4].fullUrl = "https://example.com/base/Provenance/1000002-1-2-3"
* entry[4].resource.resourceType = "Provenance"
* entry[4].resource.id = "1000002-1-2-3"
* entry[4].resource.meta.versionId = "1"
* entry[4].resource.meta.profile = $PdexProvenance
* entry[4].resource.meta.lastUpdated = "2021-01-14T19:26:23.217+00:00"
* entry[4].resource.target[0].reference = "https://example.com/base/Encounter/6-1-2-3"
* entry[4].resource.recorded = "2020-07-10T16:26:23.217+00:00"
* entry[4].resource.agent[0].type.coding = $provenance-participant-type#author "Author"
* entry[4].resource.agent[0].who.reference = "Organization/ProviderOrg1"
* entry[4].resource.entity.role = http://hl7.org/fhir/provenance-entity-role#source
* entry[4].resource.entity.what.display = "No reference available"
* entry[4].resource.entity.extension[sourceFormat].valueCodeableConcept = $pdex-provenance-payer-data-source#hl7ccda "HL7 C-CDA"
* entry[4].resource.entity.extension.url = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/ProvenanceSourceFrom"
// * entry[4].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[4].response.status = "200"
* entry[5].fullUrl = "https://example.com/base/Provenance/1000003-1-2-3"
* entry[5].resource.resourceType = "Provenance"
* entry[5].resource.id = "1000003-1-2-3"
* entry[5].resource.meta.versionId = "1"
* entry[5].resource.meta.lastUpdated = "2021-10-01T20:26:23.217+00:00"
* entry[5].resource.target[0].reference = "Encounter/7-1-2-3"
* entry[5].resource.recorded = "2020-07-10T16:26:23.217+00:00"
* entry[5].resource.agent[0].type.coding = $provenance-participant-type#author "Author"
* entry[5].resource.agent[0].who.reference = "Organization/ProviderOrg1"
* entry[5].resource.entity.role = http://hl7.org/fhir/provenance-entity-role#source
* entry[5].resource.entity.what.display = "No reference available"
* entry[5].resource.entity.extension[sourceFormat].valueCodeableConcept = $pdex-provenance-payer-data-source#hl7ccda "HL7 C-CDA"
* entry[5].resource.entity.extension.url = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/ProvenanceSourceFrom"
// * entry[5].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[5].response.status = "200"
* entry[6].fullUrl = "https://example.com/base/Provenance/1000005-2"
* entry[6].resource.resourceType = "Provenance"
* entry[6].resource.id = "1000005-2"
* entry[6].resource.meta.versionId = "1"
* entry[6].resource.meta.lastUpdated = "2021-10-01T20:26:23.217+00:00"
* entry[6].resource.target[0].reference = "Encounter/8-2-3"
* entry[6].resource.recorded = "2021-03-10T16:26:23.217+00:00"
* entry[6].resource.agent[0].type.coding = $provenance-participant-type#author "Author"
* entry[6].resource.agent[0].who.reference = "Organization/ProviderOrg1"
* entry[6].resource.entity.role = http://hl7.org/fhir/provenance-entity-role#source
* entry[6].resource.entity.what.display = "No reference available"
* entry[6].resource.entity.extension[sourceFormat].valueCodeableConcept = $pdex-provenance-payer-data-source#hl7ccda "HL7 C-CDA"
* entry[6].resource.entity.extension.url = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/ProvenanceSourceFrom"
// * entry[6].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[6].response.status = "200"
* entry[7].fullUrl = "https://example.com/base/Provenance/1000004-1-2-3"
* entry[7].resource.resourceType = "Provenance"
* entry[7].resource.id = "1000004-1-2-3"
* entry[7].resource.meta.versionId = "1"
* entry[7].resource.meta.lastUpdated = "2019-12-31T20:26:23.217+00:00"
* entry[7].resource.target[0].reference = "Patient/1-3"
* entry[7].resource.target[1].reference = "Encounter/6-1-2-3"
* entry[7].resource.target[2].reference = "Encounter/7-1-2-3"
* entry[7].resource.target[3].reference = "Provenance/1000002-1-2-3"
* entry[7].resource.target[4].reference = "Provenance/1000003-1-2-3"
* entry[7].resource.recorded = "2019-12-31T20:26:23.217+00:00"
* entry[7].resource.agent[0].type = $uscore-provenance-participant-type#transmitter "Transmitter"
* entry[7].resource.agent[0].who.reference = "Organization/Payer1"
* entry[7].resource.agent[0].role.coding = http://terminology.hl7.org/CodeSystem/contractsignertypecodes#TRANS
// * entry[7].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[7].response.status = "200"
* entry[8].fullUrl = "https://example.com/base/Provenance/1000004-2"
* entry[8].resource.resourceType = "Provenance"
* entry[8].resource.id = "1000004-2"
* entry[8].resource.meta.versionId = "1"
* entry[8].resource.meta.lastUpdated = "2020-06-15T20:26:23.217+00:00"
* entry[8].resource.target[0].reference = "Encounter/8-2-3"
* entry[8].resource.target[1].reference = "Provenance/1000005-2"
* entry[8].resource.recorded = "2020-06-15T20:26:23.217+00:00"
* entry[8].resource.agent[0].type.coding = $provenance-participant-type#author "Author"
* entry[8].resource.agent[0].who.reference = "Organization/ProviderOrg1"
* entry[8].resource.entity.role = http://hl7.org/fhir/provenance-entity-role#source
* entry[8].resource.entity.what.display = "No reference available"
* entry[8].resource.entity.extension[sourceFormat].valueCodeableConcept = $pdex-provenance-payer-data-source#hl7ccda "HL7 C-CDA"
* entry[8].resource.entity.extension.url = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/ProvenanceSourceFrom"
// * entry[8].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[8].response.status = "200"
* entry[9].fullUrl = "https://example.com/base/Provenance/1000005-2-3"
* entry[9].resource.resourceType = "Provenance"
* entry[9].resource.id = "1000005-2-3"
* entry[9].resource.meta.versionId = "1"
* entry[9].resource.meta.lastUpdated = "2020-12-31T20:26:23.217+00:00"
* entry[9].resource.target[0].reference = "Bundle/1000000-2"
* entry[9].resource.recorded = "2019-12-31T20:26:23.217+00:00"
* entry[9].resource.agent[0].type = $uscore-provenance-participant-type#transmitter "Transmitter"
* entry[9].resource.agent[0].who.reference = "Organization/Payer1"
* entry[9].resource.agent[0].role.coding = http://terminology.hl7.org/CodeSystem/contractsignertypecodes#TRANS
// * entry[9].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[9].response.status = "200"
* entry[10].fullUrl = "https://example.com/base/Provenance/1000006-3"
* entry[10].resource.resourceType = "Provenance"
* entry[10].resource.id = "1000006-3"
* entry[10].resource.meta.versionId = "1"
* entry[10].resource.meta.lastUpdated = "2020-12-31T20:26:23.217+00:00"
* entry[10].resource.target[0].reference = "Bundle/1000000-2"
* entry[10].resource.recorded = "2019-12-31T20:26:23.217+00:00"
* entry[10].resource.agent[0].type = $uscore-provenance-participant-type#transmitter "Transmitter"
* entry[10].resource.agent[0].who.reference = "Organization/Payer1"
* entry[10].resource.agent[0].role.coding = http://terminology.hl7.org/CodeSystem/contractsignertypecodes#TRANS
// * entry[10].search.mode = http://hl7.org/fhir/search-entry-mode#include
* entry[10].response.status = "200"


---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/CodeSystems-NDH.fsh

// CodeSystems used for NDH. Ported here to enable publication of PDex IG.
// * CodeSystems
// CredentialStatusCS - Redirect to NDH
// EndpointAccessControlMechanismCS - Redirect to NDH
// EndpointConnectionTypeCS - Redirect to NDH
// EndpointConnectionTypeVersionCS - Redirect to NDH
// EndpointFhirMimeTypeCS - Redirect to NDH
// EndpointHieSpecificConnectionTypeCS - No longer referenced
// EndpointPayloadTypeCS - Redirect to NDH
// NdhAssociatedServersTypeCS - Redirect to NDH
// NdhFhirEndpointUseCaseCS - Redirect to NDH
// NdhSecureExchangeArtifactsCS - Redirect to NDH
// NdhVerificationStatusCS - Redirect to NDH
// TrustFrameworkTypeCS - Redirect to NDH
// TrustProfileCS - Redirect to NDH


// CodeSystem: CredentialStatusCS
// Title: "Credential Status Code System"
// Description: "This code system contains codes for indicating the status of a credential, such as an identifier or qualification."
// * ^experimental = false
// * #active	"active"	"The credential may be considered valid for use."
// * #inactive "inactive"	"The credential may not be considered valid for use."
// * #issued-in-error	"issued in error"	"The credential was mistakenly assigned and should not be considered valid for use."
// * #revoked	"revoked"	"The credential was revoked by the issuing organization and should not be considered valid for use."
// * #pending	"pending"	"The credential has not been officially assigned. It may or may not be considered valid for use."
// * #unknown	"unknown"	"The status of this credential is unknown. It may or may not be considered valid for use."
// * ^caseSensitive = true
// * ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
// * ^extension.valueCode = #fm



// //web-server security (username token, x.509 certificate, saml assertion, kerberos ticket)
// CodeSystem: EndpointAccessControlMechanismCS
// Title: "Endpoint Access Control Mechanism Code System"
// Description: "Endpoint Access Control Mechanism"
// * ^experimental = false
// * ^caseSensitive = true
// * #public  "Public" "Public"
// * #opaque-access-token "Opaque Access Token" "Opaque Access Token"
// * #jwt-access-token "JWT Access Token" "JWT Access Token"
// * #mutual-tls "Mutual TLS" "Mutual TLS"
// * #wss-saml-token "WSS SAML Token" "WSS SAML Token"
// * #wss-username-token "WSS User Name Token" "WSS User Name Token"
// * #wss-kerberos-token "WSS Kerberos Token" "WSS Kerberos Token"
// * #wss-x509-token "WSS X509 Token" "WSS X509 Token"
// * #wss-custom-token "WSS Custom Token" "WSS Custom Token"
// * ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
// * ^extension.valueCode = #fm


// CodeSystem:  EndpointConnectionTypeCS
//   Title: "Endpoint Connection Types (additional) Code System"
//   Description:  "Extension codes for http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
// * ^experimental = false
// * #hl7-fhir-opn "HL7 FHIR Operation" "Interact with a FHIR server interface using FHIR's RESTful interface using an operation other than messaging. For details on its version/capabilities you should connect the value in Endpoint.address and retrieve the FHIR CapabilityStatement."
// * #rest-non-fhir "REST (not FHIR)" "Interact with a server using HTTP/REST but not FHIR.  Should be used for web portals."
// * #ihe-xcpd "IHE XCPD" "IHE Cross Community Patient Discovery Profile (XCPD) - http://wiki.ihe.net/index.php/Cross-Community_Patient_Discovery"
// * #ihe-xca "IHE XCA" "IHE Cross Community Access Profile (XCA) - http://wiki.ihe.net/index.php/Cross-Community_Access"
// * #ihe-xdr "IHE XDR" "IHE Cross-Enterprise Document Reliable Exchange (XDR) - http://wiki.ihe.net/index.php/Cross-enterprise_Document_Reliable_Interchange"
// * #ihe-xds "IHE XDS" "IHE Cross-Enterprise Document Sharing (XDS) - http://wiki.ihe.net/index.php/Cross-Enterprise_Document_Sharing"
// * #ihe-iid "IHE IID" "IHE Invoke Image Display (IID) - http://wiki.ihe.net/index.php/Invoke_Image_Display"
// * #ihe-pdq "IHE PDQ" "IHE Patient Demographics Query (PDQ) - http://wiki.ihe.net/index.php/Patient_Demographics_Query"
// * #ihe-pix "IHE PIX" "IHE Patient Identity Feed (PIX) - http://wiki.ihe.net/index.php/Patient_Identity_Feed"
// * #ihe-mhd "IHE MHD" "IHE Mobile Healthcare (MHD) - http://wiki.ihe.net/index.php/Mobile_Healthcare"
// * ^caseSensitive = true
// * ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
// * ^extension.valueCode = #fm



// //since our Ig fhir base is 4.0.1, http://hl7.org/fhir/FHIR-version will not contain the version beyond 4.0.1
// //Therefore we have to define this value set to indicate the endpont beyond 4.0.1
// CodeSystem: EndpointConnectionTypeVersionCS
// Title: "Endpoint Connection Type Version Code System"
// Description: "Endpoint Connection Type Version"
// * ^experimental = false
// * #4.3.0 "4.3.0" "FHIR Release 4B"
// * ^caseSensitive = true
// * ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
// * ^extension.valueCode = #fm


// NOLONGER Referenced
// CodeSystem: EndpointFhirMimeTypeCS
// Title: "Endpoint FHIR MimeType Code System"
// Description: "Endpoint FHIR MimeType"
// * ^experimental = false
// * ^caseSensitive = true
// * #application/fhir+json "fhr+json"
// * #application/fhir+xml "fhir+xml"
// * #application/fhir+turtle "fhir+turtle"
// * ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
// * ^extension.valueCode = #fm


// // No longer referenced
// CodeSystem: EndpointHieSpecificConnectionTypeCS
// Title: "Endpoint HIE Specific Connection Type Code System"
// Description: "Endpoint HIE Specific Connection Type"
// * ^experimental = false
// * #XCPD-InitGateway-PatientDiscovery-AsyncResponse "XCPD-InitGateway-PatientDiscovery-AsyncResponse" "XCPD InitiatingGateway ITI-55 Cross Gateway Patient Discovery Asynchronous Response"
// * #XCPD-RespGateway-PatientDiscovery "XCPD-RespGateway-PatientDiscovery" "XCPD RespondingGateway ITI-55 Cross Gateway Patient Discovery Synchronous"
// * #XCPD-RespGateway-PatientDiscovery-Async "XCPD-RespGateway-PatientDiscovery-Async" "XCPD RespondingGateway ITI-55 Cross Gateway Patient Discovery Asynchronous"
// * #XCA-InitGateway-Query "XCA-InitGateway-Query" "XCA InitiatingGateway ITI-18 Registry Stored Query Synchronous"
// * #XCA-InitGateway-Retrieve "XCA-InitGateway-Retrieve" "XCA InitiatingGateway ITI-43 Retrieve Document Set Synchronous"
// * #XCA-InitGateway-Query-Async "XCA-InitGateway-Query-Async" "XCA InitiatingGateway ITI-18 Registry Stored Query Asynchronous"
// * #XCA-InitGateway-Retrieve-Async "XCA-InitGateway-Retrieve-Async" "XCA InitiatingGateway ITI-43 Retrieve Document Set Asynchronous"
// * #XCA-InitGateway-Query-AsyncResponse "XCA-InitGateway-Query-AsyncResponse" "XCA InitiatingGateway ITI-38 Cross Gateway Query Asynchronous Response"
// * #XCA-InitGateway-Retrieve-AsyncResponse "XCA-InitGateway-Retrieve-AsyncResponse" "XCA InitiatingGateway ITI-39 Cross Gateway Retrieve Asynchronous Response"
// * #XCA-RespGateway-Query "XCA-RespGateway-Query" "XCA RespondingGateway ITI-38 Cross Gateway Query Synchronous"
// * #XCA-RespGateway-Retrieve "XCA-RespGateway-Retrieve" "XCA RespondingGateway ITI-39 Cross Gateway Retrieve Synchronous"
// * #XCA-RespGateway-Query-Async "XCA-RespGateway-Query-Async" "XCA RespondingGateway ITI-38 Cross Gateway Query Asynchronous"
// * #XCA-RespGateway-Retrieve-Async "XCA-RespGateway-Retrieve-Async" "XCA RespondingGateway ITI-39 Cross Gateway Retrieve Asynchronous"
// * #XDS-Registry-Feed "XDS-Registry-Feed" "XDS Registry ITI-8 Patient Identity Feed Synchronous"
// * #XDS-Registry-Feed-v3 "XDS-Registry-Feed-v3" "XDS Registry ITI-44 Patient Identity Feed HL7v3 Synchronous"
// * #XDS-Registry-Register "XDS-Registry-Register" "XDS Registry ITI-42 Register Document Set-b Synchronous"
// * #XDS-Registry-Query "XDS-Registry-Query" "XDS Registry ITI-18 Registry Stored Query Synchronous"
// * #XDS-Registry-RegOnDemand "XDS-Registry-RegOnDemand" "XDS Registry ITI-61 Register On-Demand Document Entry Synchronous"
// * #XDS-Registry-Register-Async "XDS-Registry-Register-Async" "XDS Registry ITI-42 Register Document Set-b Asynchronous"
// * #XDS-Registry-Query-Async "XDS-Registry-Query-Async" "XDS Registry ITI-18 Registry Stored Query Asynchronous"
// * #XDS-Registry-RegOnDemand-Async "XDS-Registry-RegOnDemand-Async" "XDS Registry ITI-61 Register On-Demand Document Entry Asynchronous"
// * #XDS-Repository-ProvideReg "XDS-Repository-ProvideReg" "XDS Repository ITI-41 Provide&Register Document Set-b Synchronous"
// * #XDS-Repository-Retrieve "XDS-Repository-Retrieve" "XDS Repository/IntegratedSourceRepository ITI-43 Retrieve Document Set Synchronous"
// * #XDS-Repository-ProvideReg-Async "XDS-Repository-ProvideReg-Async" "XDS Repository ITI-41 Provide&Register Document Set-b Asynchronous"
// * #XDS-Repository-Retrieve-Async "XDS-Repository-Retrieve-Async" "XDS Repository/IntegratedSourceRepository ITI-43 Retrieve Document Set Asynchronous"
// * #XDS-Repository-Register-AsyncResponse "XDS-Repository-Register-AsyncResponse" "XDS Repository/IntegratedSourceRepository ITI-42 Register Document Set-b Asynchronous Response"
// * #XDS-OnDemandSource-Retrieve "XDS-OnDemandSource-Retrieve" "XDS OnDemandSource ITI-43 Retrieve Document Set Synchronous"
// * #XDS-OnDemandSource-Retrieve-Async "XDS-OnDemandSource-Retrieve-Async" "XDS OnDemandSource ITI-43 Retrieve Document Set Asynchronous"
// * #XDS-OnDemandSource-RegOnDemand-AsyncResponse "XDS-OnDemandSource-RegOnDemand-AsyncResponse" "XDS OnDemandSource ITI-61 Register On-Demand Document Entry Asynchronous Response"
// * #XDS-Source-ProvideReg-AsyncResponse "XDS-Source-ProvideReg-AsyncResponse" "XDS Document Source ITI-41 Provide&Register Document Set-b Asynchronous Response"
// * #XDS-Consumer-Query-AsyncResponse "XDS-Consumer-Query-AsyncResponse" "XDS Document Consumer ITI-18 Registry Stored Query Asynchronous Response"
// * #XDS-Consumer-Retrieve-AsyncResponse "XDS-Consumer-Retrieve-AsyncResponse" "XDS Document Consumer ITI-43 Retrieve Document Set Asynchronous Response"
// * #PDQ-Supplier-Query "PDQ-Supplier-Query" "PDQ Patient Demographics Supplier ITI-21 Patient Demographics Query Synchronous"
// * #PDQ-Supplier-VisitQuery "PDQ-Supplier-VisitQuery" "PDQ Patient Demographics Supplier ITI-22 Patient Demographics and Visit Query Synchronous"
// * #PIX-Xmanager-Feed "PIX-Xmanager-Feed" "PIX Patient Identity Cross-Reference Manager ITI-8 Patient Identity Feed Synchronous"
// * #PIX-Xmanager-Feed-v3 "PIX-Xmanager-Feed-v3" "PIX Patient Identity Cross-Reference Manager ITI-30 Patient Identity Management Synchronous"
// * #PIX-Xmanager-Query "PIX-Xmanager-Query" "PIX Patient Identity Cross-Reference Manager ITI-9 PIX Query Synchronous"
// * #PIX-Consumer "PIX-Consumer" "PIX Patient Identifier Cross-reference Consumer ITI-10 PIX Update Notification Synchronous"
// * #XDR-Recipient-ProvideReg "XDR-Recipient-ProvideReg" "XDR Document Recipient ITI-41 Provide and Register Document Set-B Synchronous"
// * #MHD-Recipient-ProvideReg "MHD-Recipient-ProvideReg" "MHD Document Recipient ITI-65 Provide Document Bundle"
// * ^caseSensitive = true
// * ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
// * ^extension.valueCode = #fm


// Alias: $EndpointPayloadTypeCS = http://hl7.org/fhir/us/ndh/CodeSystem/EndpointPayloadTypeCS
// CodeSystem: EndpointPayloadTypeCS
//   Title: "Endpoint Payload Types Code System"
//   Description:  "Endpoint Payload Types are constrained to NA (Not Applicable) as part of this IG"
// * ^experimental = false
// * #NA "Not Applicable" "Not Applicable"
// * ^caseSensitive = true
// * ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
// * ^extension.valueCode = #fm



// CodeSystem: NdhAssociatedServersTypeCS
// Title: "NDH Associated Servers Type Code System"
// Description: "NDH Associated Servers Type"
// * ^experimental = false
//// * #fhir "FHIR" "FHIR"
// * #proxy-server "Proxy Server" "Proxy Server"
//// * #paticipant-gateway-server "Participant Gateway Server"   "Participant Gateway Server"
//// * #service-prvider-server "Service Provider Server" "Service Provider Server"
// * #indentity-provider-server "Identity Provider Server" "Identity Provider Server"
// * #record-locator-service-server "Record Locator Service Server"  "Record Locator Service Server"
//// * #consent-managment-service-server "Consent Management Service Server" "Consent Management Service Server"
//// * #audit-logging-server "Audit Logging Server"   "Audit Logging Server"
//// * #payer-gateway-server "Payer Gateway Server" "Payer Gateway Server"
//// * #data-requestor-server "Data Requestor Server"  "Data Requestor Server"
//// * #data-provider-server "Data Provider Server" "Data Provider Server"
// * #master-patient-index-server "Master Patient Index (MPI) Server" "Master Patient Index (MPI) Server"
// * #authorization-authentication-server "Authorization/Authentication Server" "Authorization/Authentication Server"
// * #authorization-registration-server "Authorization/Registration Server" "Authorization/Registration Server"
//// * #query-broker-server "Query Broker Server" "Query Broker Server"
//// * #data-source-server "Data Source Server" "Data Source Server"
//// * #hie-gateway-server "HIE Gateway Server"  "HIE Gateway Server"
//// * #provider-directory-server "Provider Directory Server" "Provider Directory Server"
//// * #patient-identity-matching-server "Patient Identity Matching Server" "Patient Identity Matching Server"
//// * #query-health-service-server "Query Health Service Server" "Query Health Service Server"
//// * #certificate-authority-server "Certificate Authority Server" "Certificate Authority Server"
//// * #trust-anchor-bundle-server "Trust Anchor Bundle Server" "Trust Anchor Bundle Server"
//// * #direct-service-server "Direct Service Server" "Direct Service Server"
// * ^caseSensitive = true
// * ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
// * ^extension.valueCode = #fm



// CodeSystem: NdhFhirEndpointUseCaseCS
// Title: "NDH FHIR Endpoint Use Case Code System"
// Description: "NDH FHIR Endpoint Use Case"
// * ^experimental = false
// * ^caseSensitive = true
// * ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
// * ^extension.valueCode = #fm
// * #cdex "CDex" "Clinical Data Exchange"
// * #patientAccess "Patient Access" "Patient Access"
// * #pasOperation "PAS Operation" "PAS Operation"
// * #payerAttachment "Payer Attachment" "Payer Attachment"
// * #payerToPayer "Payer to Payer" "Payer to Payer"
// * #providerApi "Provider API" "Provider API" //FHIR-41273


// CodeSystem: NdhSecureExchangeArtifactsCS
// Title: "NDH Secure Exchange Artifacts Code System"
// Description: "NDH Secure Exchange Artifacts"
// * ^experimental = false
// * ^caseSensitive = true
// * #x509-ssl-tls-certificates "X509 SSL/TLS certificates" "SSL/TLS certificates"
// * #x509-mtls-certificate "X509 MTLS certificate" "MTLS certificate"
// * #x509-identity-certificate "X509 identity certificate" "X509 identity certificate"
// * #x509-signing-certificate "X509 signing certificate" "X509 signing certificate"
// * #x509-encryption-certificate "X509 encryption certificate" "X509 encryption certificate"
//// * #x-509-certificates "X.509 certificates" "X.509 certificates"
//// * #open-pgp-certificates "OpenPGP certificates" "OpenPGP certificates"
//// * #kerberos-certificates "Kerberos certificates" "Kerberos certificates"
//// * #saml-certificates "SAML certificates" "SAML certificates"
//// * #self-signed-certificates "Self-signed certificates" "Self-signed certificates"
//// * #authorization-server-certificate "Authorization server certificate" "Authorization server certificate"
//// * #token-endpoint-certificate "Token endpoint certificate" "Token endpoint certificate"
//// * #jwks-endpoint-certificate "JWKS endpoint certificate" "JWKS endpoint certificate"
//// * #userinfo-endpoint-certificate "Userinfo endpoint certificate" "Userinfo endpoint certificate"
//// * #revocation-endpoint-certificate "Revocation endpoint certificate" "Revocation endpoint certificate"
//// * #introspection-endpoint-certificate "Introspection endpoint certificate" "Introspection endpoint certificate"
//// * #registration-endpoint-certificate "Registration endpoint certificate" "Registration endpoint certificate"
//// * #management-endpoint-certificate "Management endpoint certificate" "Management endpoint certificate"
// * ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
// * ^extension.valueCode = #fm


// CodeSystem: NdhVerificationStatusCS
// Title: "NDH Resource Instance Verification Status Code System"
// Description: "NDH Resource Instance Verification Status"
// * ^experimental = false
// * ^caseSensitive = true
// * #complete "Complete" "Complete"
// * #incomplete "Incomplete" "Incomplete"
// * #not-required "Not Required" "Not Required"
// * ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
// * ^extension.valueCode = #fm


// CodeSystem: TrustFrameworkTypeCS
// Title: "Trust FrameworkType Code System"
// Description: "Trust Framework Type"
// * ^experimental = false
// * #DirectTrust "Direct Trust"
// * #CareQuality "Carequality"
// * #Commonwell "Commonwell"
// * #TEFCA "TEFCA"
// * #PayerToPayer	"Payer to Payer Trust Network"
// * #Exchange	"Exchange Required by Federal Regulations"
// * #PCDH "Patient Centered Data Home"
// * ^caseSensitive = true
// * ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
// * ^extension.valueCode = #fm


// CodeSystem: TrustProfileCS
// Title: "Trust Profile Code System"
// Description: "Trust Profile"
// * ^experimental = false
// * ^caseSensitive = true
// * #udap "UDAP" "UDAP"
// * #smart "SMART" "SMART"
// * ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
// * ^extension.valueCode = #fm


---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/CodeSystems.fsh

/*
   Code Systems for Provenance
*/


CodeSystem: ProvenanceAgentRoleType
  Title: "Provenance Roles"
  Description: "CodeSystem for types of role relating to the creation or communication of referenced resources"
* ^experimental = false
* ^caseSensitive = false
* ^jurisdiction.coding = urn:iso:std:iso:3166#US
* ^caseSensitive = false
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm
// Remove duplicate codes that are defined in http://hl7.org/fhir/us/core/CodeSystem/us-core-provenance-participant-type
// or in http://terminology.hl7.org/CodeSystem/provenance-participant-type
// * #author "Author" "Person or entity that originated the referenced resource"
// * #custodian "Custodian" "The entity that is accountable for maintaining a true an accurate copy of the original record"
* #source "Source" "Organization, Practitioner or Payer who was the source of the referenced resource"
* #author "Author" "An agent that originates, or significant changes to, the entity and therefore has responsibility for the information given in the entity"
// * #transmitter "Transmitter" "Provenance Transmitter"


CodeSystem: ProvenancePayerDataSource
Title: "Provenance Payer Data Source Format"
Description: "CodeSystem for source formats that identify what non-FHIR source was used to create FHIR record(s)"
* ^jurisdiction.coding = urn:iso:std:iso:3166#US
* ^experimental = false
* ^caseSensitive = false
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm
* #hl7v2other "HL7 v2" "HL7 v2 Message"
* #hl7v2oru "HL7 v2 ORU" "HL7 v2 Structured Observation Report(ORU) message"
* #hl7v2adt "HL7 v2 ADT" "HL7 v2 Admit, Discharge Transfer (ADT) message"
* #hl7v2r01 "HL7 v2 R01" "HL7 v2 Observation (R01) message"
* #hl7v2rsp "HL7 v2 RSP" "HL7 V2 Immunization Record Response"
* #hl7v2orm "HL7 v2 ORM" "HL7 v2 Orders"
* #hl7v2mdm "HL7 v2 MDM" "Medical Document Management"
* #hl7v2vxu "HL7 v2 VXU" "HL7 V2 Immunization Transaction"
* #hl7v3 "HL7 v3" "HL7 v3 Message"
* #hl7ccda "HL7 C-CDA" "HL7 Consolidated-Clinical Document Architecture"
* #hl7cda "HL7 CDA" "HL7 CDA documents that are not C-CDA"
* #hl7cdaqrda "HL7 CDA QRDA" "HL7 Quality Reporting Document"
* #hl7fhirdstu2 "FHIR DSTU2" "HL7 FHIR DSTU2"
* #hl7fhirdstu3 "FHIR STU3" "HL7 FHIR STU3"
* #hl7fhirr4 "FHIR R4" "HL7 FHIR R4"
* #x12837 "837 claim" "X12 837 Claim"
* #x12278 "278" "X12 Prior Authorization"
* #x12275 "275" "X12 Attachment"
* #x12other "X12" "X12 non-specific transaction"
* #script "NCPDP SCRIPT" "National Council for Prescription Drug Programs (NCPDP) SCRIPT message (eRx)"
* #ncpdp "NCPDP Telecommunication" "NCPDP Telecommunication transaction (pharmacy claims)"
* #capture "Direct Capture" "Direct Capture, such as into a payers case management system"
* #customtx "Trading Partner Format" "Trading Partner Proprietary format"
* #image "Image" "Fax or scanned document"
* #unstructured "Unstructured Document" "PDF, text and other unstructured document"
* #other "Other" "Any other document format not specifically defined"


// Use THO IDentifierType $IdentifierTypeCS = http://terminology.hl7.org/CodeSystem/v2-0203

// FHIR-48088
// CodeSystem: IdentifierTypeCS
// Title: "Identifier Type"
// Description: "Identifier Type"
// * ^jurisdiction.coding = urn:iso:std:iso:3166#US
// * ^experimental = false
// * ^caseSensitive = false
// * ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
// * ^extension.valueCode = #fm
// * #tax "Tax ID Number" "Tax ID Number"
// * #npi "National Provider Identifier" "National Provider Identifier"
// * #clia "CLIA" "CLIA"
// * #payerid "Payer ID" "Payer ID"
// * #mb "Member ID" "Member ID"
// * #mr "Medical Record Number" "Medical Record Number"
// * #pt "Patient Account Number" "Patient Account Number"
// * #um "Unique Member ID" "Unique Member ID"
// * #cn "Claim Number" "Claim Number"



CodeSystem: PriorAuthorizationValueCodes
Title: "Prior Authorization Values"
Description: "Codes used to define Prior Authorization categories"
* ^experimental = false
* ^caseSensitive = false
* ^jurisdiction.coding = urn:iso:std:iso:3166#US
* ^caseSensitive = false
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm
* #submitted "Submitted" "Proposed amounts of units or services"
* #eligible "Eligible" "Eligible/agreed items or services"
* #utilized "Utilized" "Amount of items or services consumed to date"


CodeSystem: PDexAdjudicationDiscriminator
Title: "PDex Adjudication Discriminator"
Description: "Used as the discriminator for the data elements in adjudication and item.adjudication"
* ^experimental = false
* ^caseSensitive = false
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm
* #allowedunits	"allowed units" "defines the adjudication slice to define allowed units"
* #consumedunits "consumed units" "defines the adjudication slice to define consumed units"
* #denialreason "Denial Reason" "defines the adjudication slice to identify the denial reason"
* ^copyright = "This CodeSystem is not copyrighted."
* ^caseSensitive = false

// CodeSystemStubs.fsh contains stubs for external codesystems.
// taken from CARIN-BB
// Add Carin-BB Code System to Aliases
// FHIR-48088
// CodeSystem: PDexAdjudicationCS
// Title: "PDex Adjudication Codes"
// Description: "Describes the various amount fields used when payers receive and adjudicate a claim.  It complements the values defined in http://terminology.hl7.org/CodeSystem/adjudication."
// * ^experimental = false
// * ^caseSensitive = false
// * ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
// * ^extension.valueCode = #fm
// * #coinsurance "Co-insurance" "The amount the insured individual pays, as a set percentage of the cost of covered medical services, as an out-of-pocket payment to the provider. Example: Insured pays 20% and the insurer pays 80%."
// * #noncovered "Noncovered" "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
// * #priorpayerpaid "Prior payer paid" "The reduction in the payment amount to reflect the carrier as a secondary payor."
// * #paidbypatient "Paid by patient" "The amount paid by the patient at the point of service."
// * #paidtoprovider "Paid to provider" "The amount paid to the provider."
// * #paidtopatient "Paid to patient" "paid to patient"
// * #memberliability "Member liability" "The amount of the member's liability."
// * #discount "Discount" "The amount of the discount"
// * #drugcost "Drug cost" "Price paid for the drug excluding mfr or other discounts.  It typically is the sum of the following components: ingredient cost, dispensing fee, sales tax, and vaccine administration"
// * #paid "Paid" "paid"
// * #denied "Denied"  "denied"
// * ^copyright = "This CodeSystem is not copyrighted."
// * #innetwork "In-network" "in-network"
// * #outofnetwork "Out-of-network" "out-of-network"
// * #other "Other" "other"
// * #contracted "Contracted" "contracted"
// * #non-contracted "Non-contracted" "non-contracted"
// * #subscriber "Subscriber" "subscriber"
// * #provider "Provider" "provider"
// * #paid "Paid" "paid"
// * #denied "Denied"  "denied"
// * #submitted "Submitted" "The total submitted amount for the claim or group or line item."
// * #allowed "Allowed" "Allowed"
// * #deductible "Deductible" "Amount deducted from the eligible amount prior to adjudication."
// * #copay "copay" "Patient Co-Payment"
// * #payment "Payment" "payment"


CodeSystem: PDexPayerAdjudicationStatus
Title: "PDex Payer Adjudication Status"
Description: "Describes the various status fields used when payers adjudicate a claim, such as whether the claim was adjudicated in or out of network, if the provider was contracted or non-contracted for the service"
* ^experimental = false
* ^caseSensitive = false
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm
* #innetwork	"In Network" "Indicates the claim or claim line was paid in network.  This does not indicate the contracting status of the provider"
* #outofnetwork "Out Of Network" "Indicates the claim or claim line was paid out of network.  This does not indicate the contracting status of the provider"
* #other "Other" "Indicates other network status or when a network does not apply"
* #contracted "Contracted" "Indicates the provider was contracted for the service"
* #noncontracted "Non-Contracted" "Indicates the provider was not contracted for the service"
* #paid "Paid" "Indicates if the claim was approved for payment"
* #denied "Denied" "Indicates if the claim was denied"
* #partiallypaid "Partially Paid" "Indicates that some line items on the claim were denied"
* ^copyright = "This CodeSystem is not copyrighted."
* ^caseSensitive = false

CodeSystem: PDexSupportingInfoType
Title: "PDex Supporting Info Type"
Description: "Claim Information Category - Used as the discriminator for supportingInfo"
* ^experimental = false
* ^caseSensitive = false
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm
* #admissionperiod  "Admission Period" "Dates corresponding with the admission and discharge of the beneficiary to a facility"
* #pointoforigin  "Point Of Origin"  "UB-04 Source of Admission (FL-15) identifies the place where the patient was identified as needing admission to a facility."
* #admtype	"Admission Type"  "UB-04 Priority of the admission (FL-14) indicates, for example, an admission type of elective indicates that the patient's condition permitted time for medical services to be scheduled."
* #billingnetworkcontractingstatus	"Billing Network Contracting Status"       "Indicates that the Billing Provider has a contract with the Payer as of the effective date of service or admission."
* #brandgenericindicator	"Brand Generic Indicator" "NCPDP code indicating whether the plan adjudicated the claim as a brand or generic drug."
* #clmrecvddate	"Claim Received Date" "Date the claim was received by the payer."
* #compoundcode "Compound Code" "NCPDP code indicating whether or not the prescription is a compound."
* #dawcode "DAW (Dispense As Written) Code" "NCPDP code indicating the prescriber's instruction regarding substitution of generic equivalents or order to dispense the specific prescribed medication."
* #dayssupply	"Days Supply" "NCPDP value indicating the Number of days supply of medication dispensed by the pharmacy."
* #discharge-status  "Discharge Status"   "UB-04 Discharge Status (FL-17) indicates the patient’s status as of the discharge date for a facility stay."
* #drg	"DRG"	"DRG (Diagnosis Related Group), including the code system, the DRG version and the code value"
* #performingnetworkcontractingstatus	"Performing Network Contracting Status" "Indicates that the Performing Provider has a contract with the Payer as of the effective date of service or admission."
* #refillnum	"Refill Number"	  "NCPDP value indicating the number fill of the current dispensed supply (0, 1, 2, etc.)"
* #rxorigincode	"Rx Origin Code" "NCPDP code indicating whether the prescription was transmitted as an electronic prescription, by phone, by fax, or as a written paper copy."
* #servicefacility  "Service Facility" "The facility where the service occurred.  Examples include hospitals, nursing homes, laboratories or homeless shelters."
* #typeofbill "Type of Bill"  "UB-04 Type of Bill (FL-04) provides specific information for payer purposes."
* #medicalrecordnumber "Medical Record Number" "Patient Medical Record Number associated with the specific claim."
* #patientaccountnumber "Patient Account Number" "Patient Account Number associated with the specific claim."
* ^copyright = "This CodeSystem is not copyrighted."
* ^caseSensitive = false


CodeSystem: PDexIdentifierType
Title: "PDex Identifier Type"
Description: "Identifier Type codes that extend those defined in http://terminology.hl7.org/CodeSystem/v2-0203 to define the type of identifier payers and providers assign to claims and patients"
* ^experimental = false
* ^caseSensitive = false
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm
// * #tax "Tax ID Number" "Tax ID Number"  - use the TAX code from the base codesystem
* #npi "National Provider Identifier" "National Provider Identifier"
//* #clia "CLIA" "CLIA"
* #payerid "Payer ID" "Payer ID"
* #naiccode "NAIC Code" "NAIC Code"
//* #mb "Member ID" "Member ID" - not needed - defined in HL7
// * #mr "Medical Record Number" "Medical Record Number" - use the MR code from the base codesystem
* #pat "Patient Account Number" "Patient Account Number"
* #um "Unique Member ID" "Indicates that the patient identifier is a unique member identifier assigned by a payer across all lines of business"
* #uc "Unique Claim ID" "Indicates that the claim identifier is that assigned by a payer for a claim received from a provider or subscriber"
* ^copyright = "This CodeSystem is not copyrighted."
* ^caseSensitive = false

// --------------------------
// // Utilizing https://hl7.org/fhir/us/ndh/2023Sep/CodeSystem/OrgTypeCS
// FHIR-48088
// CodeSystem: OrgTypeCS
// Title: "Organization Type"
// Description: "Categories of organizations based on criteria in provider directories."
// * ^experimental = false
// * ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
// * ^extension.valueCode = #fm
// * #fac "Facility" "A physical healthcare facility"
// * #prvgrp "Provider Group" "A healthcare provider entity"
// * #payer "Payer" "A healthcare payer"
// * #atyprv "Atypical Provider" "Providers that do not provide healthcare"
// * #bus "Non-Healthcare Business" "An organization that does not meet the definitions of a Healthcare or Atypical Provider, and is not a payer or healthcare facility"
// * #ntwk "Network" "A healthcare provider insurance network"
// * ^caseSensitive = true

//CodeSystem: PDexServiceTypeCodes
//Title: "Service Type Codes"
//Description: "X12 Service Type Codes used in Prior Authorization"
//* ^experimental = false
//* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
//* ^extension.valueCode = #fm

// -----------------------------------
// CodeSystem: PdexProviderExportModeCS
// Title: "PDex Provider Export Mode"
// Description: "Data Export Mode Types for Provider Export Operation."
// * ^experimental = false
// * ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
// * ^extension.valueCode = #fm
// * #delta "Delta" "Request new data/records since last requested date for a regular, pre-defined set of resource types."
// * #snapshot "Snapshot" "Retrieve data for snapshot purposes that will NOT be incorporated into the Patient Record."
// * #p2p "Payer-to-Payer" "Retrieve data for purposes of Payer-to-Payer Exchange."
// * ^caseSensitive = true

// -----------------------------------
CodeSystem: PdexMultiMemberMatchResultCS
Title: "PDex Multi-Member Match Result Code System"
Description: "Code set to describe the results group from a multi-member Match operation"
* ^experimental = false
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm
* #match "Matched" "Group of successfully matched members from a multi-member match operation."
* #nomatch "Not Matched" "Group of submitted members that failed to result in a match in the multi-member match operation."
* #consentconstraint "Consent Constraint" "Group of successfully matched members but consent request cannot be complied with."
* ^caseSensitive = true

// ----------------------------------
CodeSystem: PdexMemberAttributionCS
Title: "PDex Provider Access API Attribution Code System"
Description: "Code set to identify group resources from a Member Attribution Process that is used by Provider Access API."
* ^experimental = false
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm
* #pdexprovidergroup "PDex Provider Group" "Group of members used for PDex Provider Access API. Group is generated by an Attribution process."
* ^caseSensitive = true


---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/CodeSystemStubs.fsh

// CodeSystems
RuleSet: CodeSystemStubBoilerplate
* ^publisher = "HL7 International - Financial Management Work Group"
* ^contact[0].name = "HL7 International - Financial Management Work Group"
* ^contact[0].telecom[0].system = #url
* ^contact[0].telecom[0].value = "http://hl7.org/Special/committees/fm"
* ^contact[0].telecom[1].system = #email
* ^contact[0].telecom[1].value = "fmlists@lists.hl7.org"
* ^contact[1].name = "Mark Scrimshire"
* ^contact[1].telecom[0].system = #email
* ^contact[1].telecom[0].value = "mailto:mark.scrimshire@onyxhealth.io"
* ^jurisdiction[0].coding[0].system = "urn:iso:std:iso:3166"
* ^jurisdiction[0].coding[0].code = #US
* ^jurisdiction[0].coding[0].display = "United States of America"
* ^experimental = false
* ^caseSensitive = false
* ^content = #not-present
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


ValueSet: PDexPAInstitutionalProcedureCodes
Title: "Procedure Codes - AMA CPT - CMS HCPCS - CMS HIPPS"
Description: """
The Value Set is a combination of three Code Systems: CPT (HCPCS I), HCPCS II procedure codes, and HIPPS rate codes. They are submitted by providers to payers to convey the specific procedure performed. Procedure Codes leverage US Core Procedure Codes composition.

The target set for this value set are the procedure codes from the CPT and HCPCS files and the rate codes from the HIPPS files.

The Current Procedural Terminology (CPT) code set, created and maintained by the American Medical Association, is the language of medicine today and the code to its future. This system of terminology is the most widely accepted medical nomenclature used to report medical procedures and services under public and private health insurance programs. CPT coding is also used for administrative management purposes such as claims processing and developing guidelines for medical care review. Each year, via a rigorous, evidence-based and transparent process, the independent CPT Editorial Panel revises, creates or deletes hundreds of codes in order to reflect current medical practice.

Designated by the U.S. Department of Health and Human Services under the Health Insurance Portability and Accountability Act (HIPAA) as a national coding set for physician and other health care professional services and procedures, CPT’s evidence-based codes accurately encompass the full range of health care services.

All CPT codes are five-digits and can be either numeric or alphanumeric, depending on the category. CPT code descriptors are clinically focused and utilize common standards so that a diverse set of users can have common understanding across the clinical health care paradigm.

There are various types of CPT codes:

**Category I:** These codes have descriptors that correspond to a procedure or service. Codes range from 00100–99499 and are generally ordered into sub-categories based on procedure/service type and anatomy.

**Category II:** These alphanumeric tracking codes are supplemental codes used for performance measurement. Using them is optional and not required for correct coding.

**Category III:** These are temporary alphanumeric codes for new and developing technology, procedures and services. They were created for data collection, assessment and in some instances, payment of new services and procedures that currently don’t meet the criteria for a Category I code.

**Proprietary Laboratory Analyses (PLA) codes:** Recently added to the CPT code set, these codes describe proprietary clinical laboratory analyses and can be either provided by a single (solesource) laboratory or licensed or marketed to multiple providing laboratories that are cleared or approved by the Food and Drug Administration (FDA)). This category includes but is not limited to Advanced Diagnostic Laboratory Tests (ADLTs) and Clinical Diagnostic Laboratory Tests (CDLTs), as defined under the Protecting Access to Medicare Act of 2014 (PAMA).

To obtain CPT, please see the license request form [here](http://info.commerce.ama-assn.org/ama-data-file-request-2020)

The Level II HCPCS codes, which are established by CMS's Alpha-Numeric Editorial Panel, primarily represent items and supplies and non-physician services not covered by the American Medical Association's Current Procedural Terminology-4 (CPT-4) codes; Medicare, Medicaid, and private health insurers use HCPCS procedure and modifier codes for claims processing.  Level II alphanumeric procedure and modifier codes comprise the A to V range.

General information can be found here: [https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo](https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo)

Releases can be found here: [https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets](https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets)

These files contain the Level II alphanumeric HCPCS procedure and modifier codes, their long and short descriptions, and applicable Medicare administrative, coverage and pricing data.

The Health Insurance Prospective Payment System (HIPPS) rate codes represent specific sets
of patient characteristics (or case-mix groups) health insurers use to make payment
determinations under several prospective payment systems. Case-mix groups are
developed based on research into utilization patterns among various provider types. For
the payment systems that use HIPPS codes, clinical assessment data is the basic input. A
standard patient assessment instrument is interpreted by case-mix grouping software
algorithms, which assign the case mix group. For payment purposes, at least one HIPPS
code is defined to represent each case-mix group. These HIPPS codes are reported on
claims to insurers.
Institutional providers use HIPPS codes on claims in association with special revenue
codes. One revenue code is defined for each prospective payment system that requires
HIPPS codes. HIPPS codes are placed in data element SV202 on the electronic 837
institutional claims transaction, using an HP qualifier, or in Form Locator (FL) 44
(\"HCPCS/rate\") on a paper UB-04 claims form. The associated revenue code is placed in
data element SV201 or in FL 42. In certain circumstances, multiple HIPPS codes may
appear on separate lines of a single claim.

HIPPS codes are alpha-numeric codes of five digits. Each code contains intelligence,
with certain positions of the code indicating the case mix group itself, and other positions
providing additional information. The additional information varies among HIPPS codes
pertaining to different payment systems, but often provides information about the clinical
assessment used to arrive at the code. Which positions of the code carry the case mix
group information may also vary by payment systems.
"""
* ^experimental = false
* codes from system $CPT
* codes from system $CMSHCPCSCodes
* codes from system $CMSHIPPSCodes
* include $HL7DataAbsentReason#not-applicable "Not Applicable"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm
* ^copyright = "Current Procedural Terminology (CPT) is copyright 2020 American Medical Association. All rights reserved
See information on the use of HCPCS Level I (proprietary and owned by American Medical Association) and Level II codes [here](https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo/HCPCS_Coding_Questions)
CMS maintains HIPPS. There are no known constraints on the use of HIPPS. See more information about HIPPS codes [here](https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/ProspMedicareFeeSvcPmtGen/HIPPSCodes)"

//CodeSystem: CMSHCPCSCodes
//Title: "Healthcare Common Procedure Coding System (HCPCS) level II alphanumeric codes"
//Description: "The Level II HCPCS codes, which are established by CMS's Alpha-Numeric Editorial Panel, primarily represent items and supplies and non-physician services not covered by the American Medical Association's Current Procedural Terminology-4 (CPT-4) codes; Medicare, Medicaid, and private health insurers use HCPCS procedure and modifier codes for claims processing.  Level II alphanumeric procedure and modifier codes comprise the A to V range.
//
//General information can be found here: [https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo](https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo)
//
//Releases can be found here: [https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets](https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets)
//
//These files contain the Level II alphanumeric HCPCS procedure and modifier codes, their long and short descriptions, and applicable Medicare administrative, coverage and pricing data."
//* ^url =  "http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets"
//* ^experimental = false
//* ^caseSensitive = false
//* insert CodeSystemStubBoilerplate
//* insert HCPCSCopyrightNotice

//CodeSystem: CMSHIPPSCodes
//Title: "Health Insurance Prospective Payment System (HIPPS)"
//Description: "Health Insurance Prospective Payment System (HIPPS) rate codes represent specific sets
//of patient characteristics (or case-mix groups) health insurers use to make payment
//determinations under several prospective payment systems. Case-mix groups are
//developed based on research into utilization patterns among various provider types. For
//the payment systems that use HIPPS codes, clinical assessment data is the basic input. A
//standard patient assessment instrument is interpreted by case-mix grouping software
//algorithms, which assign the case mix group. For payment purposes, at least one HIPPS
//code is defined to represent each case-mix group. These HIPPS codes are reported on
//claims to insurers.
//Institutional providers use HIPPS codes on claims in association with special revenue
//codes. One revenue code is defined for each prospective payment system that requires
//HIPPS codes. HIPPS codes are placed in data element SV202 on the electronic 837
//institutional claims transaction, using an HP qualifier, or in Form Locator (FL) 44
//(\"HCPCS/rate\") on a paper UB-04 claims form. The associated revenue code is placed in
//data element SV201 or in FL 42. In certain circumstances, multiple HIPPS codes may
//appear on separate lines of a single claim.
//
//HIPPS codes are alpha-numeric codes of five digits. Each code contains intelligence,
//with certain positions of the code indicating the case mix group itself, and other positions
//providing additional information. The additional information varies among HIPPS codes
//pertaining to different payment systems, but often provides information about the clinical
//assessment used to arrive at the code. Which positions of the code carry the case mix
//group information may also vary by payment systems."
//* ^url =  "https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/ProspMedicareFeeSvcPmtGen/HIPPSCodes"
//* ^experimental = false
//* ^caseSensitive = false
//* insert CodeSystemStubBoilerplate
//* insert HIPPSCopyrightNotice

RuleSet: HIPPSCopyrightNotice
* ^copyright = """
CMS maintains HIPPS. There are no known constraints on the use of HIPPS.
See more information about HIPPS codes [here](https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/ProspMedicareFeeSvcPmtGen/HIPPSCodes)
"""

ValueSet: X12ClaimAdjustmentReasonCodesCMSRemittanceAdviceRemarkCodes
Title: "X12 Claim Adjustment Reason Codes - Remittance Advice Remark Codes"
Description: """
X12, chartered by the American National Standards Institute for more than 40 years, develops and maintains EDI standards and XML schemas which drive business processes globally. X12's diverse membership includes technologists and business process experts in health care, insurance, transportation, finance, government, supply chain and other industries.

The X12 Claim Adjustment Reason Codes describe why a claim or service line was paid differently than it was billed. These codes are listed within an X12 implementation guide (TR3) and maintained by X12.

Remittance Advice Remark Codes (RARCs) are used to provide additional explanation for an adjustment already described by a Claim Adjustment Reason Code (CARC) or to convey information about remittance processing.

Each RARC identifies a specific message as shown in the Remittance Advice Remark Code List. There are two types of RARCs, supplemental and informational. The majority of the RARCs are supplemental; these are generally referred to as RARCs without further distinction. Supplemental RARCs provide additional explanation for an adjustment already described by a CARC. The second type of RARC is informational; these RARCs are all prefaced with Alert: and are often referred to as Alerts. Alerts are used to convey information about remittance processing and are never related to a specific adjustment or CARC.

External code lists maintained by X12 and external code lists maintained by others and distributed by WPC on behalf of the maintainer can be found here:

[https://x12.org/codes](https://x12.org/codes)

Click on the name of any external code list to access more information about the code list, view the codes, or submit a maintenance request. These external code lists were previously published on either [www.wpc-edi.com/reference](http://www.wpc-edi.com/reference) or [www.x12.org/codes](http://www.x12.org/codes).
"""
* ^experimental = false
* codes from system $X12ClaimAdjustmentReasonCodes
* codes from system $CMSRemittanceAdviceRemarkCodes
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm
* ^copyright = """
**Intellectual Property Information**

  All X12 products are subject to this IP policy, including published and draft works.

  X12 is the only organization authorized to grant permission for use of X12 products. Users of all X12 products should make sure that they understand the permissible uses, as well as the limitations on such usage, as outlined below.

Additional IP information can be found here: [https://x12.org/products/ip-use](https://x12.org/products/ip-use)

  **Licensing Information**

  Send an email to ip@x12.org to request permission to reproduce X12 IP. Include your name, organization, title, address, city, state, zip, email, a detailed description of the Submitted Artifact, including the underlying or cited X12 Product, and a detailed description of the intended audience and planned distribution method for the Artifact.

Additional information on X12 licensing program can be found here:

  [https://x12.org/products/licensing-program](https://x12.org/products/licensing-program)

  **Purchasing Information:**

  To purchase code list subscriptions call (425) 562-2245 or email admin@wpc-edi.com

  The Centers for Medicare & Medicaid Services (CMS) maintain Remittance Advice Remark Codes (RARC) used throughout the US health care industry.
"""

//CodeSystem: X12ClaimAdjustmentReasonCodes
//Title: "X12 Claim Adjustment Reason Codes"
//Description: "X12, chartered by the American National Standards Institute for more than 40 years, develops and maintains EDI standards and XML schemas which drive business processes globally. X12's diverse membership includes technologists and business process experts in health care, insurance, transportation, finance, government, supply chain and other industries.
//
//The X12 Claim Adjustment Reason Codes describe why a claim or service line was paid differently than it was billed. These codes are listed within an X12 implementation guide (TR3) and maintained by X12.
//
//External code lists maintained by X12 and external code lists maintained by others and distributed by WPC on behalf of the maintainer can be found here:
//
//[https://x12.org/codes](https://x12.org/codes)
//
//Click on the name of any external code list to access more information about the code list, view the codes, or submit a maintenance request. These external code lists were previously published on either [www.wpc-edi.com/reference](http://www.wpc-edi.com/reference) or [www.x12.org/codes](http://www.x12.org/codes)."
//* ^url = "https://x12.org/codes/claim-adjustment-reason-codes"
//* ^experimental = false
//* ^caseSensitive = false
//* insert CodeSystemStubBoilerplate
//* ^copyright = "**Intellectual Property Information**
//
//  All X12 products are subject to this IP policy, including published and draft works.
//
//  X12 is the only organization authorized to grant permission for use of X12 products. Users of all X12 products should make sure that they understand the permissible uses, as well as the limitations on such usage, as outlined below.
//
//Additional IP information can be found here: [https://x12.org/products/ip-use](https://x12.org/products/ip-use)
//
//  **Licensing Information**
//
//  Send an email to ip@x12.org to request permission to reproduce X12 IP. Include your name, organization, title, address, city, state, zip, email, a detailed description of the Submitted Artifact, including the underlying or cited X12 Product, and a detailed description of the intended audience and planned distribution method for the Artifact.
//
//Additional information on X12 licensing program can be found here:
//
//  [https://x12.org/products/licensing-program](https://x12.org/products/licensing-program)
//
//  **Purchasing Information:**
//
//  To purchase code list subscriptions call (425) 562-2245 or email admin@wpc-edi.com."


//CodeSystem: CMSRemittanceAdviceRemarkCodes
//Title: "X12 Remittance Advice Remark Codes"
//Description: "X12, chartered by the American National Standards Institute for more than 40 years, develops and maintains EDI standards and XML schemas which drive business processes globally. X12's diverse membership includes technologists and business process experts in health care, insurance, transportation, finance, government, supply chain and other industries.
//
//Remittance Advice Remark Codes (RARCs) are used to provide additional explanation for an adjustment already described by a Claim Adjustment Reason Code (CARC) or to convey information about remittance processing.
//
//Each RARC identifies a specific message as shown in the Remittance Advice Remark Code List. There are two types of RARCs, supplemental and informational. The majority of the RARCs are supplemental; these are generally referred to as RARCs without further distinction. Supplemental RARCs provide additional explanation for an adjustment already described by a CARC. The second type of RARC is informational; these RARCs are all prefaced with Alert: and are often referred to as Alerts. Alerts are used to convey information about remittance processing and are never related to a specific adjustment or CARC.
//
//External code lists maintained by X12 and external code lists maintained by others and distributed by WPC on behalf of the maintainer, including the RARC codes. Can be found here:
//
//[https://x12.org/codes](https://x12.org/codes)
//
//Click on the name of any external code list to access more information about the code list, view the codes, or submit a maintenance request. These external code lists were previously published on either [www.wpc-edi.com/reference](http://www.wpc-edi.com/reference) or [www.x12.org/codes](http://www.x12.org/codes)."
//* ^url = "https://x12.org/codes/remittance-advice-remark-codes"
//* ^experimental = false
//* ^caseSensitive = false
//* insert CodeSystemStubBoilerplate
//* ^copyright = "**Intellectual Property Information**
//
//  All X12 products are subject to this IP policy, including published and draft works.
//
//  X12 is the only organization authorized to grant permission for use of X12 products. Users of all X12 products should make sure that they understand the permissible uses, as well as the limitations on such usage, as outlined below.
//
//Additional IP information can be found here: [https://x12.org/products/ip-use](https://x12.org/products/ip-use)
//
//  **Licensing Information**
//
//  Send an email to ip@x12.org to request permission to reproduce X12 IP. Include your name, organization, title, address, city, state, zip, email, a detailed description of the Submitted Artifact, including the underlying or cited X12 Product, and a detailed description of the intended audience and planned distribution method for the Artifact.
//
//Additional information on X12 licensing program can be found here:
//
//  [https://x12.org/products/licensing-program](https://x12.org/products/licensing-program)
//
//  **Purchasing Information:**
//
//  To purchase code list subscriptions call (425) 562-2245 or email admin@wpc-edi.com."


---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/ExampleCoverage.fsh

Instance: PDexCoverageExample
InstanceOf: $HrexCoverage
Description: "Health Plan Coverage for Prior Authorization"
Usage: #example
* id = "Coverage1"
* status = http://hl7.org/fhir/fm-status#active "Active"
* identifier[memberid].system = "http://example.org/old-payer/identifiers/coverage"
* identifier[memberid].value = "234567"
* subscriberId = "93542106"
* beneficiary.reference = "Patient/1"
* relationship = $CoverageRelationship#self
* payor.reference = "Organization/Payer1"



---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/ExampleDocumentReference.fsh

Instance: ExampleDocumentReference
InstanceOf: us-core-documentreference
Description: "Example of a US Core DocumentReference with a linked PDF document. The document could also be embedded."
Usage: #example
* id = "123456"
* status = http://hl7.org/fhir/document-reference-status#current
// * type = http://hl7.org/fhir/us/core/ValueSet/us-core-documentreference-type#UNK
//* type = http://terminology.hl7.org/CodeSystem/v3-NullFlavor#UNK
* type =  http://loinc.org#34133-9
// * type =  http://loinc.org#51852-2
// * category = http://hl7.org/fhir/us/core/ValueSet/us-core-documentreference-category#clinical-note
* category = http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category#clinical-note
* subject.reference = "Patient/1"
* date = "2020-10-09T15:26:23.217+00:00"
* author.reference = "Organization/ProviderOrg1"
* custodian.reference = "Organization/Payer1"
// * content[0].format = http://hl7.org/fhir/ValueSet/formatcodes#urn:ihe:iti:xds:2017:mimeTypeSufficient
* content[0].format.system =  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
* content[0].format.display = "urn:ihe:iti:xds:2017:mimeTypeSufficient"
* content[0].attachment.contentType = #application/pdf
* content[0].attachment.url = "/Binary/1-pdf"
* content[0].attachment.title = """
  Uri where the data can be found = [base]/Binary/1-pdf
  or base64encode document and include in content.attachment.data element
  """


Instance: ExampleDocRefProvenance
InstanceOf: pdex-provenance
Description: "Example of a PDex Provenance record for a PDF embedded or linked in a DocumentReference resource."
Usage: #example
* id = "1000016"
* meta.versionId = "1"
* meta.lastUpdated = "2020-10-09T15:26:23.217+00:00"
* target[0].reference = "DocumentReference/123456"
* recorded = "2020-10-09T15:26:23.217+00:00"
* agent[0].type = http://hl7.org/fhir/us/core/CodeSystem/us-core-provenance-participant-type#transmitter "Transmitter"
* agent[0].who.reference = "Organization/ProviderOrg1"
* entity.role = http://hl7.org/fhir/provenance-entity-role#source
* entity.what.display = "No reference available"
* entity.extension[sourceFormat].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/ProvenancePayerDataSource#unstructured



---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/ExampleExtensions.fsh

// Example Extensions

Instance: Example-Last-Transmitted
InstanceOf: LastTransmission
Description: "Example extension to record date of last transmission for member in PDex Provider Group."
Usage: #inline
* valueDateTime = "2024-03-21T17:18:00.000Z"


Instance: Example-Last-Types
InstanceOf: LastTypes
Description: "Example extension to record resources requested for member in PDex Provider Group."
Usage: #inline
* valueString = "Patient,Condition,Observation,Procedure"


Instance: Example-Last-Filters
InstanceOf: LastFilters
Description: "Example extension to record filters on resources requested for member in PDex Provider Group."
Usage: #inline
* valueString = "Condition?recordedDate=ge2023-09-23,Procedure?performed=ge2023-03-21"


// ---------------------------------------
// Prior Authorization ExplanationOfBenefit Adjudication All Slices
// Add Date Time
Instance: Example-WhenAdjudicated
InstanceOf: WhenAdjudicated
Description: "Example of when an adjudication action took place. NOTE: that this extension may be replaced by an inter-version extension after R6 version of the EOB implements this DataTime element."
Usage: #inline
* valueDateTime = "2024-07-23T17:26:23.217+00:00"


---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/ExampleMedicationDispenseExampleDispense.fsh

Instance: ExampleMedicationDispenseClaim
InstanceOf:  PdexMedicationDispense
Description: "Example of a MedicationDispense from a Claim"
* id = "1000001"
* meta.versionId = "1"
* meta.lastUpdated = "2024-04-17T15:26:23.217+00:00"
//  * extension[refillNum].id = "1"
* extension[refillNum].valueQuantity.value = 1
* status = http://terminology.hl7.org/CodeSystem/medicationdispense-status#completed
* medicationCodeableConcept = $FDANationalDrugCodeCS#54458-872-10
* subject.reference = "Patient/1"
* performer.actor.reference = "Practitioner/4"
* location.reference = "Location/5"
* type =  http://terminology.hl7.org/CodeSystem/v3-ActCode#RF
* quantity.value = 60
* whenHandedOver = 2024-04-15T09:00:23.217+00:00
* daysSupply.value = 30



---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/ExamplemTLSBundle.fsh

Instance: example-mtls-endpoint-bundle
InstanceOf: MtlsBundle
Description: "Example of mTLSbundle for Payer Endpoint for Payer-to-Payer Exchange"
Usage: #example
* meta.lastUpdated = "2022-07-04T15:00:00.000Z"
* type = http://hl7.org/fhir/R4/codesystem-bundle-type.html#collection "Collection"
* timestamp = "2022-07-04T15:00:00.000Z"
// * entry[0].resource = "Organization/DiamondOnyxHealth1"
* link[0].relation = "self"
* link[0].url = "https://example.com/base/fhir/Bundle?ct=W3sidG9rZW4iOiIrUklEOn53MThjQUk5RlVPZ0lEQUFBQUFBQU"
* entry[0].fullUrl = "https://example.com/base/fhir/Organization/DiamondOnyxHealth2"
* entry[0].resource.resourceType = "Organization"
* entry[0].resource.id = "DiamondOnyxHealth2"
* entry[0].resource.identifier.value = "DiamondOnyxHealth2"
//* entry[0].resource.meta.lastUpdated = "2022-07-04T15:00:00.000Z"
//* entry[0].resource.active = true
//* entry[0].resource.name = "DiamondOnyxHealth IT Vendor Managing Organization"
//* entry[0].resource.type = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/OrgTypeCS#bus "Non-Healthcare Business"
//* entry[0].resource.endpoint.reference = "Endpoint/diamond-mtls-endpoint2"

* entry[1].fullUrl = "https://example.com/base/fhir/Endpoint/Diamond-mtls-endpoint2"
* entry[1].resource.resourceType = "Endpoint"
* entry[1].resource.id = "Diamond-mtls-endpoint2"
* entry[1].resource.identifier.value = "Diamond-mtls-endpoint2"
* entry[1].resource.status = http://hl7.org/fhir/endpoint-status#active "Active"
* entry[1].resource.connectionType = http://terminology.hl7.org/CodeSystem/endpoint-connection-type#hl7-fhir-rest "HL7 FHIR"
* entry[1].resource.payloadType = $EndpointPayloadTypeCS#NA "Not Applicable"
* entry[1].resource.name = "Payer-Payer Exchange"
* entry[1].resource.managingOrganization.reference = "Organization/DiamondOnyxHealth1"
* entry[1].resource.address = "https://mtls-dev-dmdh.safhir.io/mtlsendpoint"
//* entry[1].resource.extension[endpoint-usecase][+].extension[endpointUsecasetype].valueCodeableConcept = NdhFhirEndpointUseCaseCS#payerToPayer "Payer to Payer"
//* entry[1].resource.extension[endpoint-usecase][=].extension[standard].valueUri = "http://hl7.org/fhir/us/davinci-pdex/2022May/index.html"
//* entry[1].resource.extension[fhir-ig][+].extension[ig-publication].valueUri = "http://hl7.org/fhir/us/davinci-pdex/2022May/index.html"
//* entry[1].resource.extension[fhir-ig][=].extension[ig-name].valueString = "Da Vinci Payer Data Exchange"
//* entry[1].resource.extension[fhir-ig][=].extension[ig-version].valueString = "2.0.0"
//* entry[1].resource.extension[trust-framework].extension[trustFrameworkType].valueCodeableConcept = $TrustFrameworkTypeCS#PayerToPayer "Payer to Payer Trust Network"
//* entry[1].resource.extension[trust-framework].extension[qualifier].valueString = "Yes"
//* entry[1].resource.extension[trust-framework].extension[signedArtifact].valueBase64Binary = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvck9wdGlvbnMiIDogIiIsCiAgICAgICAgICJ0eXBlIiA6ICJDcWxUb0VsbUluZm8iCiAgICAgIH0gXSwKICAgICAgImlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogIlRlc3RpbmdDcWxMaWJyYXJ5IiwKICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICB9LAogICAgICAic2NoZW1hSWRlbnRpZmllciIgOiB7CiAgICAgICAgICJpZCIgOiAidXJuOmhsNy1vcmc6ZWxtIiwKICAgICAgICAgInZlcnNpb24iIDogInIxIgogICAgICB9LAogICAgICAidXNpbmdzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiU3lzdGVtIiwKICAgICAgICAgICAgInVyaSIgOiAidXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVIiLAogICAgICAgICAgICAidXJpIiA6ICJodHRwOi8vaGw3Lm9yZy9maGlyIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImluY2x1ZGVzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAicGF0aCIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiNC4wLjEiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZXR1cm5zVHJ1ZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJldHVybnNGYWxzZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiZmFsc2UiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbHNvUmV0dXJuc1RydWUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogInRydWUiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbm90aGVyVHJ1ZVN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkJ1dElBbUZhbHNlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgInZhbHVlIiA6ICJmYWxzZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFsc29GYWxzZUhlcmUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogImZhbHNlIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjQwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjIuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcnVlTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJHcmVhdGVyIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGYWxzZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTGVzcyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVHJ1ZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiR3JlYXRlciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFub3RoZXJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMZXNzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmV0dXJuc0FDb2RlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlIiwKICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJjb2RpbmciLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGUiLAogICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInN5c3RlbSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJodHRwOi8vc25vbWVkLmluZm8vc2N0IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiY29kZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDgyODAwNCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRpc3BsYXkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiUG9zaXRpdmUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAidGV4dCIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJJJ20gc29tZXRoaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0KICAgfQp9Cgo="
//* entry[1].resource.extension[trust-framework].extension[publicCertificate].valueBase64Binary = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvck9wdGlvbnMiIDogIiIsCiAgICAgICAgICJ0eXBlIiA6ICJDcWxUb0VsbUluZm8iCiAgICAgIH0gXSwKICAgICAgImlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogIlRlc3RpbmdDcWxMaWJyYXJ5IiwKICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICB9LAogICAgICAic2NoZW1hSWRlbnRpZmllciIgOiB7CiAgICAgICAgICJpZCIgOiAidXJuOmhsNy1vcmc6ZWxtIiwKICAgICAgICAgInZlcnNpb24iIDogInIxIgogICAgICB9LAogICAgICAidXNpbmdzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiU3lzdGVtIiwKICAgICAgICAgICAgInVyaSIgOiAidXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVIiLAogICAgICAgICAgICAidXJpIiA6ICJodHRwOi8vaGw3Lm9yZy9maGlyIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImluY2x1ZGVzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAicGF0aCIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiNC4wLjEiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZXR1cm5zVHJ1ZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJldHVybnNGYWxzZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiZmFsc2UiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbHNvUmV0dXJuc1RydWUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogInRydWUiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbm90aGVyVHJ1ZVN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkJ1dElBbUZhbHNlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgInZhbHVlIiA6ICJmYWxzZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFsc29GYWxzZUhlcmUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogImZhbHNlIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjQwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjIuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcnVlTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJHcmVhdGVyIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGYWxzZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTGVzcyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVHJ1ZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiR3JlYXRlciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFub3RoZXJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMZXNzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmV0dXJuc0FDb2RlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlIiwKICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJjb2RpbmciLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGUiLAogICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInN5c3RlbSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJodHRwOi8vc25vbWVkLmluZm8vc2N0IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiY29kZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDgyODAwNCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRpc3BsYXkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiUG9zaXRpdmUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAidGV4dCIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJJJ20gc29tZXRoaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0KICAgfQp9Cgo="
//* entry[1].resource.extension[dynamic-registration].extension[trustProfile].valueCodeableConcept = $TrustProfileCS#smart "SMART"
//* entry[1].resource.extension[dynamic-registration].extension[version].valueString = "1.0"
//* entry[1].resource.extension[associated-servers].extension[associatedServersType].valueCodeableConcept = $AssocServersTypeCS#authorization-registration-server "Authorization/Registration Server"
//* entry[1].resource.extension[associated-servers].extension[serverURL].valueString = "https://example.com/oauth/registration/"
//* entry[1].resource.extension[access-control-mechanism].valueCodeableConcept = $EndpointAccessControlMechanismCS#mutual-tls "Mutual TLS"
//* entry[1].resource.extension[connection-type-version].valueCodeableConcept = $EndpointConnectionTypeCS#hl7-fhir-opn "HL7 FHIR Operation"
//* entry[1].resource.extension[endpoint-rank].valuePositiveInt = 1
//* entry[1].resource.extension[verification-status].valueCodeableConcept = $NdhVerificationStatusCS#not-required "Not Required"
//* entry[1].resource.payloadType = $EndpointPayloadTypeCS#NA "Not Applicable"
//* extension[MtlsSignedObject].extension[ObjectType].valueCodeableConcept = MtlsObjectCodeCS#MTLS "mTLS signed Object"
//* extension[MtlsSignedObject].extension[Object].valueBase64Binary = "MIIE+zCCA+OgAwIBAgISA/DY57CPqtRoFlG0JOdQZnRzMA0GCSqGSIb3DQEBCwUAMDIxCzAJBgNVBAYTAlVTMRYwFAYDVQQKEw1MZXQncyBFbmNyeXB0MQswCQYDVQQDEwJSMzAeFw0yMzA3MjcwMTU2NTBaFw0yMzEwMjUwMTU2NDlaMCIxIDAeBgNVBAMTF210bHMtZGV2LWRtZGguc2FmaGlyLmlvMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArgSWqFdWPDyX93O9ERnzAzfCqKLFrEsAnOSS5/fyil2qAE85y3/1v8VsrSsiUHz2SUXxQQ0dJGBT3jlZB+KZ9AtNhEAvvQiWtuzNNgO8Q7iVeh/8C+WP7XazGXzaEcpbtOqoM+JGqwWkRu2zlpJmFjAhIIasQMFH2HOWOukRN+8J4n6xy1JqqpDiUc3N77trY+R3PbuEfv0vOLwUYTBq+k1y3gQOy/Xl7l5J9+ugC3ftk+PMmByTbU6+ZDAK6QAGoY2SdwzY4dG36KlYsWA08cvgLUs3IaMxPK008YVx27a6/mJua3xhTnh/6muGyOUpmlYBCJJg43FOskeqNIIxaQIDAQABo4ICGTCCAhUwDgYDVR0PAQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMBAf8EAjAAMB0GA1UdDgQWBBT2H5abr3gkO0t5KpwP0K966DCuZTAfBgNVHSMEGDAWgBQULrMXt1hWy65QCUDmH6+dixTCxjBVBggrBgEFBQcBAQRJMEcwIQYIKwYBBQUHMAGGFWh0dHA6Ly9yMy5vLmxlbmNyLm9yZzAiBggrBgEFBQcwAoYWaHR0cDovL3IzLmkubGVuY3Iub3JnLzAiBgNVHREEGzAZghdtdGxzLWRldi1kbWRoLnNhZmhpci5pbzATBgNVHSAEDDAKMAgGBmeBDAECATCCAQQGCisGAQQB1nkCBAIEgfUEgfIA8AB1ALc++yTfnE26dfI5xbpY9Gxd/ELPep81xJ4dCYEl7bSZAAABiZVHEwAAAAQDAEYwRAIgVM1RAExo1mO7EDQ11PFzE6ewkx9TBzSrQMsxX9dkC5QCIA2tta+kt2aSk8lwqLBCEiSSSPXLg/1sbHrODtCjACsZAHcAejKMVNi3LbYg6jjgUh7phBZwMhOFTTvSK8E6V6NS61IAAAGJlUcTCAAABAMASDBGAiEAl1l1FIWpFnVupbIKz+PlPLmgKAtxkJiK6s9uVD1P81MCIQDRsPgnSaFlQbr4KdMc/B3KWZwjkXqoUmI6x1XApPY6gjANBgkqhkiG9w0BAQsFAAOCAQEAhELGwBfs7GsABz5kCUyLunMbdsb6VKjPrBABVTbG9amFcBVxDBSRBNx/NC8itT5k4u2JRnvjVQ/N2vtRqRZR564TwVnMow2ZIW2v9vUhQeX3LkIzzJq0CCLDO39PX1YPUDVCkzH1RV4AxuM26+We4+xmnXixNK6iKJjCvW2S0Q9CA6lQ2COi/tgUq8IIoKy5vFfjHsXul9aGMdzK39fxmO8QRysKBIVWfzb62bUNFO9FGVc7GbEGocqy20TiKBkUjR27T97Q1cMDwtzLwS/G2YKnEVtIJLk/cKG4UKcWx+pCHqvDaHRWUNQ2kofypCS+lLBQFQhXpSG8IwzOww54Kg=="



// * entry[1].resource.extension[MtlsSignedObject].extension[ObjectType].valueCodeableConcept = MtlsObjectCodeCS#MTLS "mTLS signed Object"
// * entry[1].resource.extension[MtlsSignedObject].extension[Object].valueBase64Binary = "MIIE+zCCA+OgAwIBAgISA/DY57CPqtRoFlG0JOdQZnRzMA0GCSqGSIb3DQEBCwUAMDIxCzAJBgNVBAYTAlVTMRYwFAYDVQQKEw1MZXQncyBFbmNyeXB0MQswCQYDVQQDEwJSMzAeFw0yMzA3MjcwMTU2NTBaFw0yMzEwMjUwMTU2NDlaMCIxIDAeBgNVBAMTF210bHMtZGV2LWRtZGguc2FmaGlyLmlvMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArgSWqFdWPDyX93O9ERnzAzfCqKLFrEsAnOSS5/fyil2qAE85y3/1v8VsrSsiUHz2SUXxQQ0dJGBT3jlZB+KZ9AtNhEAvvQiWtuzNNgO8Q7iVeh/8C+WP7XazGXzaEcpbtOqoM+JGqwWkRu2zlpJmFjAhIIasQMFH2HOWOukRN+8J4n6xy1JqqpDiUc3N77trY+R3PbuEfv0vOLwUYTBq+k1y3gQOy/Xl7l5J9+ugC3ftk+PMmByTbU6+ZDAK6QAGoY2SdwzY4dG36KlYsWA08cvgLUs3IaMxPK008YVx27a6/mJua3xhTnh/6muGyOUpmlYBCJJg43FOskeqNIIxaQIDAQABo4ICGTCCAhUwDgYDVR0PAQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMBAf8EAjAAMB0GA1UdDgQWBBT2H5abr3gkO0t5KpwP0K966DCuZTAfBgNVHSMEGDAWgBQULrMXt1hWy65QCUDmH6+dixTCxjBVBggrBgEFBQcBAQRJMEcwIQYIKwYBBQUHMAGGFWh0dHA6Ly9yMy5vLmxlbmNyLm9yZzAiBggrBgEFBQcwAoYWaHR0cDovL3IzLmkubGVuY3Iub3JnLzAiBgNVHREEGzAZghdtdGxzLWRldi1kbWRoLnNhZmhpci5pbzATBgNVHSAEDDAKMAgGBmeBDAECATCCAQQGCisGAQQB1nkCBAIEgfUEgfIA8AB1ALc++yTfnE26dfI5xbpY9Gxd/ELPep81xJ4dCYEl7bSZAAABiZVHEwAAAAQDAEYwRAIgVM1RAExo1mO7EDQ11PFzE6ewkx9TBzSrQMsxX9dkC5QCIA2tta+kt2aSk8lwqLBCEiSSSPXLg/1sbHrODtCjACsZAHcAejKMVNi3LbYg6jjgUh7phBZwMhOFTTvSK8E6V6NS61IAAAGJlUcTCAAABAMASDBGAiEAl1l1FIWpFnVupbIKz+PlPLmgKAtxkJiK6s9uVD1P81MCIQDRsPgnSaFlQbr4KdMc/B3KWZwjkXqoUmI6x1XApPY6gjANBgkqhkiG9w0BAQsFAAOCAQEAhELGwBfs7GsABz5kCUyLunMbdsb6VKjPrBABVTbG9amFcBVxDBSRBNx/NC8itT5k4u2JRnvjVQ/N2vtRqRZR564TwVnMow2ZIW2v9vUhQeX3LkIzzJq0CCLDO39PX1YPUDVCkzH1RV4AxuM26+We4+xmnXixNK6iKJjCvW2S0Q9CA6lQ2COi/tgUq8IIoKy5vFfjHsXul9aGMdzK39fxmO8QRysKBIVWfzb62bUNFO9FGVc7GbEGocqy20TiKBkUjR27T97Q1cMDwtzLwS/G2YKnEVtIJLk/cKG4UKcWx+pCHqvDaHRWUNQ2kofypCS+lLBQFQhXpSG8IwzOww54Kg=="

* entry[2].fullUrl = "https://example.com/base/fhir/Organization/DiamondOnyxHealth3"
* entry[2].resource.resourceType = "Organization"
* entry[2].resource.id = "DiamondOnyxHealth3"
* entry[2].resource.identifier.value = "DiamondOnyxHealth3"
//* entry[2].resource.meta.lastUpdated = "2022-07-04T16:00:00.000Z"
//* entry[2].resource.active = true
//* entry[2].resource.name = "DiamondOnyxHealth Payer Organization"
//* entry[2].resource.type = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/OrgTypeCS#payer "Payer"
//* entry[2].resource.endpoint.reference = "Endpoint/diamond-mtls-endpoint2"


* signature.type = $SignatureTypeCS#1.2.840.10065.1.12.1.1 "Author's Signature"
* signature.when = "2022-07-04T15:00:00.000Z"
* signature.who.reference = "Organization/DiamondOnyxHealth2"
* signature.sigFormat = urn:ietf:bcp:13#application/x-x509-ca-cert
* signature.data = "MIIHLDCCBRSgAwIBAgIBAjANBgkqhkiG9w0BAQsFADCBlDELMAkGA1UEBhMCVVMxETAPBgNVBAgMCE1hcnlsYW5kMRIwEAYDVQQHDAlCQUxUSU1PUkUxFjAUBgNVBAoMDU9ueXhIZWFsdGguaW8xEDAOBgNVBAsMB0RhVmluY2kxEjAQBgNVBAMMCWNhLXNlcnZlcjEgMB4GCSqGSIb3DQEJARYRc3VwcG9ydEBzYWZoaXIuaW8wHhcNMjIwNzA2MjEzNzUzWhcNMjcwMTExMjEzNzUzWjB9MQswCQYDVQQGEwJVUzERMA8GA1UECAwITWFyeWxhbmQxFjAUBgNVBAoMDU9ueXhIZWFsdGguaW8xEDAOBgNVBAsMB0RhVmluY2kxDzANBgNVBAMMBnNlcnZlcjEgMB4GCSqGSIb3DQEJARYRc3VwcG9ydEBzYWZoaXIuaW8wggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQCaT1TWD4SbpW2jIYMJ5+XKOX5fAvFkBvh5oBiYw39op7GwcxuWXRCEaW2RZs0g1AWECLxoNpInYRwTA9yfWgkGACOk7vyndJk0rFupeNPsz4G+4/cKo8RCDiMXFls0C0JdluKuCNZpPPDCOOGRo/uKbNNSlD0h6WnuXon5dxC456J53HyJN3eiNpES3DYA4t2FRw7H4OcgAj+NUL8ObL+fXT3S1SspdAwwLwwxP5imsBDRbQll6QfohpiYWOb7qq2wgDg4zLNhdgHYjzo1B/BBw8VVC3xc1eGmHSit0wwwxqhW0tTQq5eDjGXjcuH+RccgzskCV4DV/kyy650IQ2fJer1HjV95PptHWGddfub607rmuJaxJt6K3qNNKVMoJ5Oa0VrL/grToa1craMyVmmLny99r5hBrIkpocNRHEjpXyC2saRJaw+/SrY0yTz+4HH3LMEXskQrMZy5t6ea5ttBh8nu0RnjriLRwRt7N7x4aifQbQsFcnAHR5hejE5ddfaop+dwxrSbSbAY8AzxsIUS8o/P4yRzBnIWJ9pHsie2f8G1HL+gV/S7ydXDY557RS2pIGhRG7mrG53NlcyeDfqBdgBiMbgwB3EKedQHRmvBNLYxLWjzFhqxJGh8eebLKdIz8pLBbDd/EfZrGsdWLHXJzQVhgw0kvEyi4Nz6vMsj1wIDAQABo4IBnTCCAZkwCQYDVR0TBAIwADARBglghkgBhvhCAQEEBAMCBkAwMwYJYIZIAYb4QgENBCYWJE9wZW5TU0wgR2VuZXJhdGVkIFNlcnZlciBDZXJ0aWZpY2F0ZTAdBgNVHQ4EFgQU9k21J6NamOapnKsvDOdaMgx2yckwgdQGA1UdIwSBzDCByYAUheDIC8s3tQVysz1yc27KXoWOJ5ChgZqkgZcwgZQxCzAJBgNVBAYTAlVTMREwDwYDVQQIDAhNYXJ5bGFuZDESMBAGA1UEBwwJQkFMVElNT1JFMRYwFAYDVQQKDA1Pbnl4SGVhbHRoLmlvMRAwDgYDVQQLDAdEYVZpbmNpMRIwEAYDVQQDDAljYS1zZXJ2ZXIxIDAeBgkqhkiG9w0BCQEWEXN1cHBvcnRAc2FmaGlyLmlvghR+2HAsO5YuwZbFABlmBbNOsnjbozAOBgNVHQ8BAf8EBAMCBaAwEwYDVR0lBAwwCgYIKwYBBQUHAwEwKQYDVR0RBCIwIIcEwKgAcocECgACD4ISc2VydmVyLmV4YW1wbGUuY29tMA0GCSqGSIb3DQEBCwUAA4ICAQBqgzWlyKc7efnuu3o5RQlFhlFHsrqER9lHY5De7593fY4lccnmSEQ64zXUNHMm+27RTxsHcNVegisNxXXhXQq6/qWnmxGCVLv82AECRP9gT+uCf7ERejFwmpVZNdXDCjUbesreVhlxuPKNV/NTSGnkqlgB4qYFjChV/a6n9OKtjeQwFskW0g2nNqax8wmWd5WHwwP5lbtE95PUdfnbVpyZTZYT/Ik1/jSpOzh9Njmy0gCX3OyX7kD2z2dAI/GaDvFB4UeSaZh8bHTSd7bKEvdoKNFVSgixW32Vg0qzcoEbOS6hkalJJoZ5riHj9WuKJz/bkKxluNoWGzWG5om3/JJ+RWcCKR5xDG0/+PLulXQlVj4hNxqxj4JHjBvvsvqbLoLrmWoP8nzVPli2mP8jsfHV2r9/EgNYc524FUUNywIp8tlzgu0PqjJslkgalyg/SjJGXolecBqnEbsO+Z0HIjZAXXh7VihHB4XMrYaJe5r7Go9rfEQ1R6haR8GxqMDnSf47YArr7eEb7WaR6fLvsHGxF7nuNEBCf6H1xTgZZ2VpPF8YaR+EZ9bt0xsGNcrkBf1BqWtjd3M9ZMjfP5Yid5eTBLl1RNuYlUW+021qDir5Vfh7bSHJtn+ld8m4ctdgEbn+o5t/EGgJUqMkQGN079cKRqzvauPLsGaFv+28rA2KDQ=="






// --------------------------------
// "took .pem file (X509 Encoded) and converted to base64Binary using
// https://tomeko.net/online_tools/PEM_to_base64.php?lang=en
// Convert back with:
// https://tomeko.net/online_tools/base64_to_PEM.php?lang=en"
// --------------------------------
//* extension[MtlsSignedObject].extension[Object].valueBase64Binary = """
//-----BEGIN CERTIFICATE-----
//MIIE+zCCA+OgAwIBAgISA/DY57CPqtRoFlG0JOdQZnRzMA0GCSqGSIb3DQEBCwUA
//MDIxCzAJBgNVBAYTAlVTMRYwFAYDVQQKEw1MZXQncyBFbmNyeXB0MQswCQYDVQQD
//EwJSMzAeFw0yMzA3MjcwMTU2NTBaFw0yMzEwMjUwMTU2NDlaMCIxIDAeBgNVBAMT
//F210bHMtZGV2LWRtZGguc2FmaGlyLmlvMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A
//MIIBCgKCAQEArgSWqFdWPDyX93O9ERnzAzfCqKLFrEsAnOSS5/fyil2qAE85y3/1
//v8VsrSsiUHz2SUXxQQ0dJGBT3jlZB+KZ9AtNhEAvvQiWtuzNNgO8Q7iVeh/8C+WP
//7XazGXzaEcpbtOqoM+JGqwWkRu2zlpJmFjAhIIasQMFH2HOWOukRN+8J4n6xy1Jq
//qpDiUc3N77trY+R3PbuEfv0vOLwUYTBq+k1y3gQOy/Xl7l5J9+ugC3ftk+PMmByT
//bU6+ZDAK6QAGoY2SdwzY4dG36KlYsWA08cvgLUs3IaMxPK008YVx27a6/mJua3xh
//Tnh/6muGyOUpmlYBCJJg43FOskeqNIIxaQIDAQABo4ICGTCCAhUwDgYDVR0PAQH/
//BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMBAf8E
//AjAAMB0GA1UdDgQWBBT2H5abr3gkO0t5KpwP0K966DCuZTAfBgNVHSMEGDAWgBQU
//LrMXt1hWy65QCUDmH6+dixTCxjBVBggrBgEFBQcBAQRJMEcwIQYIKwYBBQUHMAGG
//FWh0dHA6Ly9yMy5vLmxlbmNyLm9yZzAiBggrBgEFBQcwAoYWaHR0cDovL3IzLmku
//bGVuY3Iub3JnLzAiBgNVHREEGzAZghdtdGxzLWRldi1kbWRoLnNhZmhpci5pbzAT
//BgNVHSAEDDAKMAgGBmeBDAECATCCAQQGCisGAQQB1nkCBAIEgfUEgfIA8AB1ALc+
//+yTfnE26dfI5xbpY9Gxd/ELPep81xJ4dCYEl7bSZAAABiZVHEwAAAAQDAEYwRAIg
//VM1RAExo1mO7EDQ11PFzE6ewkx9TBzSrQMsxX9dkC5QCIA2tta+kt2aSk8lwqLBC
//EiSSSPXLg/1sbHrODtCjACsZAHcAejKMVNi3LbYg6jjgUh7phBZwMhOFTTvSK8E6
//V6NS61IAAAGJlUcTCAAABAMASDBGAiEAl1l1FIWpFnVupbIKz+PlPLmgKAtxkJiK
//6s9uVD1P81MCIQDRsPgnSaFlQbr4KdMc/B3KWZwjkXqoUmI6x1XApPY6gjANBgkq
//hkiG9w0BAQsFAAOCAQEAhELGwBfs7GsABz5kCUyLunMbdsb6VKjPrBABVTbG9amF
//cBVxDBSRBNx/NC8itT5k4u2JRnvjVQ/N2vtRqRZR564TwVnMow2ZIW2v9vUhQeX3
//LkIzzJq0CCLDO39PX1YPUDVCkzH1RV4AxuM26+We4+xmnXixNK6iKJjCvW2S0Q9C
//A6lQ2COi/tgUq8IIoKy5vFfjHsXul9aGMdzK39fxmO8QRysKBIVWfzb62bUNFO9F
//GVc7GbEGocqy20TiKBkUjR27T97Q1cMDwtzLwS/G2YKnEVtIJLk/cKG4UKcWx+pC
//HqvDaHRWUNQ2kofypCS+lLBQFQhXpSG8IwzOww54Kg==
//-----END CERTIFICATE-----


---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/ExamplemTLSEndpoint.fsh

// ---------------------------------

Instance: diamond-mtls-endpoint1
InstanceOf: mtls-endpoint
Description: "NDH Endpoint compliant Profile as an example of Payer mTLS Endpoint that is linked from Organization and incorporated in bundle"
Usage: #example
* identifier.value = "Diamond-mtls-endpoint1"
* status = http://hl7.org/fhir/endpoint-status#active "Active"
* meta.lastUpdated = "2022-07-04T15:00:00.000Z"
* connectionType = http://terminology.hl7.org/CodeSystem/endpoint-connection-type#hl7-fhir-rest "HL7 FHIR"
* name = "Payer-Payer Exchange"
* managingOrganization.reference = "Organization/DiamondOnyxHealth1"
* address = "https://p2p.diamondonyx.example.com/mtlsendpoint"
// * extension[endpoint-usecase].extension[endpointUsecasetype].uri = "endpointUsecasetype"
* extension[endpoint-usecase][+].extension[endpointUsecasetype].valueCodeableConcept = NdhFhirEndpointUseCaseCS#payerToPayer "Payer to Payer"
* extension[endpoint-usecase][=].extension[standard].valueUri = "hl7.org/fhir/us/davinci-pdex"
// * extension[fhir-ig].extension[ig-publication].uri = "ig-publication"
* extension[fhir-ig][+].extension[ig-publication].valueUri = "hl7.org/fhir/us/davinci-pdex"
// * extension[fhir-ig][=].extension[ig-name].valueUri = "ig-name"
* extension[fhir-ig][=].extension[ig-name].valueString = "Da Vinci Payer Data Exchange"
* extension[fhir-ig][=].extension[ig-version].valueString = "2.0.0"
* extension[trust-framework].extension[trustFrameworkType].valueCodeableConcept = $TrustFrameworkTypeCS#PayerToPayer "Payer to Payer Trust Network"
* extension[trust-framework].extension[qualifier].valueString = "Yes"
* extension[trust-framework].extension[signedArtifact].valueBase64Binary = "TUlJRUdEQ0NBd0FDRkRadnUxQTdWWTJlT083b2h3Q2ZvMmxFS1hORU1BMEdDU3FHU0liM0RRRUJDd1VBTUlIUQpNUXN3Q1FZRFZRUUdFd0pWVXpFUk1BOEdBMVVFQ0F3SVRXRnllV3hoYm1ReEZUQVRCZ05WQkFjTURGZHBibVJ6CmIzSWdUV2xzYkRFZE1Cc0dBMVVFQ2d3VVQyNTVlQ0JVWldOb2JtOXNiMmQ1TENCTVRFTXhGekFWQmdOVkJBc00KRGxCaGVXVnlMWFJ2TFZCaGVXVnlNVEV3THdZRFZRUUREQ2gwY25WemRDMXRZVzVoWjJWeUxYQmhlV1Z5ZEc5dwpZWGxsY2k1dmJubDRhR1ZoYkhSb0xtbHZNU3d3S2dZSktvWklodmNOQVFrQkZoMXRZWEpyTG5OamNtbHRjMmhwCmNtVkFiMjU1ZUdobFlXeDBhQzVwYnpBZUZ3MHlNekE0TVRFeE5qSTBNakZhRncweU5EQTRNVEF4TmpJME1qRmEKTUlHL01Rc3dDUVlEVlFRR0V3SlZVekVSTUE4R0ExVUVDQXdJVFdGeWVXeGhibVF4RlRBVEJnTlZCQWNNREZkcApibVJ6YjNJZ1RXbHNiREVXTUJRR0ExVUVDZ3dOVDI1NWVFaGxZV3gwYUM1cGJ6RWVNQndHQTFVRUN3d1ZUMjU1CmVFOVRMVkJoZVdWeUxYUnZMVkJoZVdWeU1TQXdIZ1lEVlFRRERCZHRkR3h6TFdSbGRpMWtiV1JvTG5OaFptaHAKY2k1cGJ6RXNNQ29HQ1NxR1NJYjNEUUVKQVJZZGJXRnlheTV6WTNKcGJYTm9hWEpsUUc5dWVYaG9aV0ZzZEdndQphVzh3Z2dFaU1BMEdDU3FHU0liM0RRRUJBUVVBQTRJQkR3QXdnZ0VLQW9JQkFRQ3VCSmFvVjFZOFBKZjNjNzBSCkdmTUROOEtvb3NXc1N3Q2M1SkxuOS9LS1hhb0FUem5MZi9XL3hXeXRLeUpRZlBaSlJmRkJEUjBrWUZQZU9Wa0gKNHBuMEMwMkVRQys5Q0phMjdNMDJBN3hEdUpWNkgvd0w1WS90ZHJNWmZOb1J5bHUwNnFnejRrYXJCYVJHN2JPVwprbVlXTUNFZ2hxeEF3VWZZYzVZNjZSRTM3d25pZnJITFVtcXFrT0pSemMzdnUydGo1SGM5dTRSKy9TODR2QlJoCk1HcjZUWExlQkE3TDllWHVYa24zNjZBTGQrMlQ0OHlZSEpOdFRyNWtNQXJwQUFhaGpaSjNETmpoMGJmb3FWaXgKWURUeHkrQXRTemNob3pFOHJUVHhoWEhidHJyK1ltNXJmR0ZPZUgvcWE0Ykk1U21hVmdFSWttRGpjVTZ5UjZvMApnakZwQWdNQkFBRXdEUVlKS29aSWh2Y05BUUVMQlFBRGdnRUJBS1JpMGlabTFuellmbmZlTXRycjlYaStTQlRFCm1lbktjMlB2N2pEWjRnU1dsejByTXRnTHg2Q2JhMzlwTm03L2drSmZMT2VaUG1kMFJzOVh5a1RQWXVXM0k0VWoKZGprUUk2MVpDZkxGS0szRXVmYVUxYXM1RUQvK1FIQmM2Y25ETVlsMk9nbVJqU1VCVGJkMDByZUR0TjlnUEdXOQpoYzY4cXZpOEhNRDhFZnBOQ1ZWR2lGMlRtdjh3RU1VL0p3TDM0eHJZMmh1bmJ3SWJwOHM2NTJGblQ1Sk93eWUzCjN0c1lENE9zNkVrTnlsY0RjdlRtOFk0ZnEwc0RQbGF3ZFREa3FVNldtTkZUVCtwQzEvNFhTanlzbTV2STd0eTUKd0hLWkVnOXBZS05yVW9YYWpYdzB1WTJIVzdXcy8xUW5aS3gyalFGb1lQRG0xOXRPdXRjY0RoSDRYdDA9Cg=="
* extension[trust-framework].extension[publicCertificate].valueBase64Binary = "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUE1TFA2YXNiZVRuUVlOaEtOUTg3VApUOTZMYkY1ZXVFVEVpMTZXZXR6K1pka1p6dHZ6TnVKQ0hFdUZDTUFCSEMrb25iMGpad3Y1Mk5zU2xkRHRjUjZDCkdzM2xpRzdCUHVUeExTaVgrRTZnbzhBQ0lqSDFCTkZNMC90WmFpZEo5RTRvWnhab09VUm05RFFMN0xUa0M1eGYKMWt0a3k0NHFWck9SWTg3bk1pNHZPc3dSOXZwcVZDNzlYa3lyK3ZlZWJtbFFhVG9NajBpaWVxNDk1Y3hYTmtINgpNZ0Z3Yy9FQTRpdFVZU2E3RzltMmdScmcwVlJrbGw1bTVBaGxWNHduQzZHQ1RmS1NDVmwxM1NFN1hvRm5LNjdYCnlla2E4dDRlcWY3aEVhZEp5WWlVOGNzUkFHT1Q3bm5kNThMcnlheTVxS0FmdEV1bmNEQ2dNbVhWeE9CcDRSb1QKS3dJREFRQUIKLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg=="
* extension[dynamic-registration].extension[trustProfile].valueCodeableConcept = $TrustProfileCS#smart "SMART"
* extension[dynamic-registration].extension[version].valueString = "1.0"
* extension[secure-exchange-artifacts].extension[secureExchangeArtifactsType].valueCodeableConcept  = NdhSecureExchangeArtifactsCS#x509-ssl-tls-certificates
* extension[secure-exchange-artifacts].extension[certificate].valueBase64Binary  = "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvck9wdGlvbnMiIDogIiIsCiAgICAgICAgICJ0eXBlIiA6ICJDcWxUb0VsbUluZm8iCiAgICAgIH0gXSwKICAgICAgImlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogIlRlc3RpbmdDcWxMaWJyYXJ5IiwKICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICB9LAogICAgICAic2NoZW1hSWRlbnRpZmllciIgOiB7CiAgICAgICAgICJpZCIgOiAidXJuOmhsNy1vcmc6ZWxtIiwKICAgICAgICAgInZlcnNpb24iIDogInIxIgogICAgICB9LAogICAgICAidXNpbmdzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiU3lzdGVtIiwKICAgICAgICAgICAgInVyaSIgOiAidXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVIiLAogICAgICAgICAgICAidXJpIiA6ICJodHRwOi8vaGw3Lm9yZy9maGlyIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImluY2x1ZGVzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAicGF0aCIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiNC4wLjEiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZXR1cm5zVHJ1ZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJldHVybnNGYWxzZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiZmFsc2UiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbHNvUmV0dXJuc1RydWUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogInRydWUiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbm90aGVyVHJ1ZVN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkJ1dElBbUZhbHNlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgInZhbHVlIiA6ICJmYWxzZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFsc29GYWxzZUhlcmUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogImZhbHNlIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjQwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjIuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcnVlTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJHcmVhdGVyIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGYWxzZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTGVzcyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVHJ1ZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiR3JlYXRlciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFub3RoZXJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMZXNzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiUmV0dXJuc0FDb2RlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIlR1cGxlIiwKICAgICAgICAgICAgICAgImVsZW1lbnQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJjb2RpbmciLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGlzdCIsCiAgICAgICAgICAgICAgICAgICAgICJlbGVtZW50IiA6IFsgewogICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiVHVwbGUiLAogICAgICAgICAgICAgICAgICAgICAgICAiZWxlbWVudCIgOiBbIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogInN5c3RlbSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJodHRwOi8vc25vbWVkLmluZm8vc2N0IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiY29kZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDgyODAwNCIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIm5hbWUiIDogImRpc3BsYXkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfVN0cmluZyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiUG9zaXRpdmUiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAidGV4dCIsCiAgICAgICAgICAgICAgICAgICJ2YWx1ZSIgOiB7CiAgICAgICAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9U3RyaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICJJJ20gc29tZXRoaW5nIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0KICAgfQp9Cgo="
* extension[secure-exchange-artifacts].extension[expirationDate].valueDateTime = "2024-07-07T13:26:22.0314215+00:00"
* extension[associated-servers].extension[associatedServersType].valueCodeableConcept = $AssocServersTypeCS#authorization-authentication-server "Authorization/Authentication Server"
* extension[associated-servers].extension[serverURL].valueString = "https://example.com/oauth/registration/"
* extension[access-control-mechanism].valueCodeableConcept = $EndpointAccessControlMechanismCS#mutual-tls "Mutual TLS"
* extension[connection-type-version].valueCodeableConcept = $EndpointConnectionTypeCS#hl7-fhir-opn "HL7 FHIR Operation"
* extension[endpoint-rank].valuePositiveInt = 1
* extension[verification-status].valueCodeableConcept = $NdhVerificationStatusCS#not-required "Not Required"
* payloadType = $EndpointPayloadTypeCS#NA "Not Applicable"
* extension[MtlsSignedObject].extension[ObjectType].valueCodeableConcept = MtlsObjectCodeCS#MTLS "mTLS signed Object"
* extension[MtlsSignedObject].extension[Object].valueBase64Binary = "MIIE+zCCA+OgAwIBAgISA/DY57CPqtRoFlG0JOdQZnRzMA0GCSqGSIb3DQEBCwUAMDIxCzAJBgNVBAYTAlVTMRYwFAYDVQQKEw1MZXQncyBFbmNyeXB0MQswCQYDVQQDEwJSMzAeFw0yMzA3MjcwMTU2NTBaFw0yMzEwMjUwMTU2NDlaMCIxIDAeBgNVBAMTF210bHMtZGV2LWRtZGguc2FmaGlyLmlvMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArgSWqFdWPDyX93O9ERnzAzfCqKLFrEsAnOSS5/fyil2qAE85y3/1v8VsrSsiUHz2SUXxQQ0dJGBT3jlZB+KZ9AtNhEAvvQiWtuzNNgO8Q7iVeh/8C+WP7XazGXzaEcpbtOqoM+JGqwWkRu2zlpJmFjAhIIasQMFH2HOWOukRN+8J4n6xy1JqqpDiUc3N77trY+R3PbuEfv0vOLwUYTBq+k1y3gQOy/Xl7l5J9+ugC3ftk+PMmByTbU6+ZDAK6QAGoY2SdwzY4dG36KlYsWA08cvgLUs3IaMxPK008YVx27a6/mJua3xhTnh/6muGyOUpmlYBCJJg43FOskeqNIIxaQIDAQABo4ICGTCCAhUwDgYDVR0PAQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMBAf8EAjAAMB0GA1UdDgQWBBT2H5abr3gkO0t5KpwP0K966DCuZTAfBgNVHSMEGDAWgBQULrMXt1hWy65QCUDmH6+dixTCxjBVBggrBgEFBQcBAQRJMEcwIQYIKwYBBQUHMAGGFWh0dHA6Ly9yMy5vLmxlbmNyLm9yZzAiBggrBgEFBQcwAoYWaHR0cDovL3IzLmkubGVuY3Iub3JnLzAiBgNVHREEGzAZghdtdGxzLWRldi1kbWRoLnNhZmhpci5pbzATBgNVHSAEDDAKMAgGBmeBDAECATCCAQQGCisGAQQB1nkCBAIEgfUEgfIA8AB1ALc++yTfnE26dfI5xbpY9Gxd/ELPep81xJ4dCYEl7bSZAAABiZVHEwAAAAQDAEYwRAIgVM1RAExo1mO7EDQ11PFzE6ewkx9TBzSrQMsxX9dkC5QCIA2tta+kt2aSk8lwqLBCEiSSSPXLg/1sbHrODtCjACsZAHcAejKMVNi3LbYg6jjgUh7phBZwMhOFTTvSK8E6V6NS61IAAAGJlUcTCAAABAMASDBGAiEAl1l1FIWpFnVupbIKz+PlPLmgKAtxkJiK6s9uVD1P81MCIQDRsPgnSaFlQbr4KdMc/B3KWZwjkXqoUmI6x1XApPY6gjANBgkqhkiG9w0BAQsFAAOCAQEAhELGwBfs7GsABz5kCUyLunMbdsb6VKjPrBABVTbG9amFcBVxDBSRBNx/NC8itT5k4u2JRnvjVQ/N2vtRqRZR564TwVnMow2ZIW2v9vUhQeX3LkIzzJq0CCLDO39PX1YPUDVCkzH1RV4AxuM26+We4+xmnXixNK6iKJjCvW2S0Q9CA6lQ2COi/tgUq8IIoKy5vFfjHsXul9aGMdzK39fxmO8QRysKBIVWfzb62bUNFO9FGVc7GbEGocqy20TiKBkUjR27T97Q1cMDwtzLwS/G2YKnEVtIJLk/cKG4UKcWx+pCHqvDaHRWUNQ2kofypCS+lLBQFQhXpSG8IwzOww54Kg=="



// ---------------------------------------------------------
Instance: diamond-mtls-endpoint2
InstanceOf: mtls-endpoint
Description: "National Directory Query Endpoint Profile as an example of Payer mTLS Endpoint that is linked from Organization and incorporated in bundle"
Usage: #example
* identifier.value = "Diamond-mtls-endpoint2"
* status = http://hl7.org/fhir/endpoint-status#active "Active"
* meta.lastUpdated = "2022-07-04T15:00:00.000Z"
* connectionType = http://terminology.hl7.org/CodeSystem/endpoint-connection-type#hl7-fhir-rest "HL7 FHIR"
* name = "Payer-Payer Exchange"
* managingOrganization.reference = "Organization/DiamondOnyxHealth1"
* address = "https://mtls-dev-dmdh.safhir.io/mtlsendpoint"
* extension[endpoint-usecase][+].extension[endpointUsecasetype].valueCodeableConcept = NdhFhirEndpointUseCaseCS#payerToPayer "Payer to Payer"
* extension[endpoint-usecase][=].extension[standard].valueUri = "hl7.org/fhir/us/davinci-pdex"
* extension[fhir-ig][+].extension[ig-publication].valueUri = "hl7.org/fhir/us/davinci-pdex/2022May"
* extension[fhir-ig][=].extension[ig-name].valueString = "Da Vinci Payer Data Exchange"
* extension[fhir-ig][=].extension[ig-version].valueString = "2.0.0"
* extension[trust-framework].extension[trustFrameworkType].valueCodeableConcept = $TrustFrameworkTypeCS#PayerToPayer "Payer to Payer Trust Network"
* extension[trust-framework].extension[qualifier].valueString = "Yes"
* extension[trust-framework].extension[signedArtifact].valueBase64Binary = "TUlJRUdEQ0NBd0FDRkRadnUxQTdWWTJlT083b2h3Q2ZvMmxFS1hORU1BMEdDU3FHU0liM0RRRUJDd1VBTUlIUQpNUXN3Q1FZRFZRUUdFd0pWVXpFUk1BOEdBMVVFQ0F3SVRXRnllV3hoYm1ReEZUQVRCZ05WQkFjTURGZHBibVJ6CmIzSWdUV2xzYkRFZE1Cc0dBMVVFQ2d3VVQyNTVlQ0JVWldOb2JtOXNiMmQ1TENCTVRFTXhGekFWQmdOVkJBc00KRGxCaGVXVnlMWFJ2TFZCaGVXVnlNVEV3THdZRFZRUUREQ2gwY25WemRDMXRZVzVoWjJWeUxYQmhlV1Z5ZEc5dwpZWGxsY2k1dmJubDRhR1ZoYkhSb0xtbHZNU3d3S2dZSktvWklodmNOQVFrQkZoMXRZWEpyTG5OamNtbHRjMmhwCmNtVkFiMjU1ZUdobFlXeDBhQzVwYnpBZUZ3MHlNekE0TVRFeE5qSTBNakZhRncweU5EQTRNVEF4TmpJME1qRmEKTUlHL01Rc3dDUVlEVlFRR0V3SlZVekVSTUE4R0ExVUVDQXdJVFdGeWVXeGhibVF4RlRBVEJnTlZCQWNNREZkcApibVJ6YjNJZ1RXbHNiREVXTUJRR0ExVUVDZ3dOVDI1NWVFaGxZV3gwYUM1cGJ6RWVNQndHQTFVRUN3d1ZUMjU1CmVFOVRMVkJoZVdWeUxYUnZMVkJoZVdWeU1TQXdIZ1lEVlFRRERCZHRkR3h6TFdSbGRpMWtiV1JvTG5OaFptaHAKY2k1cGJ6RXNNQ29HQ1NxR1NJYjNEUUVKQVJZZGJXRnlheTV6WTNKcGJYTm9hWEpsUUc5dWVYaG9aV0ZzZEdndQphVzh3Z2dFaU1BMEdDU3FHU0liM0RRRUJBUVVBQTRJQkR3QXdnZ0VLQW9JQkFRQ3VCSmFvVjFZOFBKZjNjNzBSCkdmTUROOEtvb3NXc1N3Q2M1SkxuOS9LS1hhb0FUem5MZi9XL3hXeXRLeUpRZlBaSlJmRkJEUjBrWUZQZU9Wa0gKNHBuMEMwMkVRQys5Q0phMjdNMDJBN3hEdUpWNkgvd0w1WS90ZHJNWmZOb1J5bHUwNnFnejRrYXJCYVJHN2JPVwprbVlXTUNFZ2hxeEF3VWZZYzVZNjZSRTM3d25pZnJITFVtcXFrT0pSemMzdnUydGo1SGM5dTRSKy9TODR2QlJoCk1HcjZUWExlQkE3TDllWHVYa24zNjZBTGQrMlQ0OHlZSEpOdFRyNWtNQXJwQUFhaGpaSjNETmpoMGJmb3FWaXgKWURUeHkrQXRTemNob3pFOHJUVHhoWEhidHJyK1ltNXJmR0ZPZUgvcWE0Ykk1U21hVmdFSWttRGpjVTZ5UjZvMApnakZwQWdNQkFBRXdEUVlKS29aSWh2Y05BUUVMQlFBRGdnRUJBS1JpMGlabTFuellmbmZlTXRycjlYaStTQlRFCm1lbktjMlB2N2pEWjRnU1dsejByTXRnTHg2Q2JhMzlwTm03L2drSmZMT2VaUG1kMFJzOVh5a1RQWXVXM0k0VWoKZGprUUk2MVpDZkxGS0szRXVmYVUxYXM1RUQvK1FIQmM2Y25ETVlsMk9nbVJqU1VCVGJkMDByZUR0TjlnUEdXOQpoYzY4cXZpOEhNRDhFZnBOQ1ZWR2lGMlRtdjh3RU1VL0p3TDM0eHJZMmh1bmJ3SWJwOHM2NTJGblQ1Sk93eWUzCjN0c1lENE9zNkVrTnlsY0RjdlRtOFk0ZnEwc0RQbGF3ZFREa3FVNldtTkZUVCtwQzEvNFhTanlzbTV2STd0eTUKd0hLWkVnOXBZS05yVW9YYWpYdzB1WTJIVzdXcy8xUW5aS3gyalFGb1lQRG0xOXRPdXRjY0RoSDRYdDA9Cg=="
* extension[trust-framework].extension[publicCertificate].valueBase64Binary = "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUE1TFA2YXNiZVRuUVlOaEtOUTg3VApUOTZMYkY1ZXVFVEVpMTZXZXR6K1pka1p6dHZ6TnVKQ0hFdUZDTUFCSEMrb25iMGpad3Y1Mk5zU2xkRHRjUjZDCkdzM2xpRzdCUHVUeExTaVgrRTZnbzhBQ0lqSDFCTkZNMC90WmFpZEo5RTRvWnhab09VUm05RFFMN0xUa0M1eGYKMWt0a3k0NHFWck9SWTg3bk1pNHZPc3dSOXZwcVZDNzlYa3lyK3ZlZWJtbFFhVG9NajBpaWVxNDk1Y3hYTmtINgpNZ0Z3Yy9FQTRpdFVZU2E3RzltMmdScmcwVlJrbGw1bTVBaGxWNHduQzZHQ1RmS1NDVmwxM1NFN1hvRm5LNjdYCnlla2E4dDRlcWY3aEVhZEp5WWlVOGNzUkFHT1Q3bm5kNThMcnlheTVxS0FmdEV1bmNEQ2dNbVhWeE9CcDRSb1QKS3dJREFRQUIKLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg=="
* extension[dynamic-registration].extension[trustProfile].valueCodeableConcept = $TrustProfileCS#smart "SMART"
* extension[dynamic-registration].extension[version].valueString = "1.0"
* extension[associated-servers].extension[associatedServersType].valueCodeableConcept = $AssocServersTypeCS#authorization-authentication-server "Authorization/Authentication Server"
* extension[associated-servers].extension[serverURL].valueString = "https://example.com/oauth/registration/"
* extension[access-control-mechanism].valueCodeableConcept = $EndpointAccessControlMechanismCS#mutual-tls "Mutual TLS"
* extension[connection-type-version].valueCodeableConcept = $EndpointConnectionTypeCS#hl7-fhir-opn "HL7 FHIR Operation"
* extension[endpoint-rank].valuePositiveInt = 1
* extension[verification-status].valueCodeableConcept = $NdhVerificationStatusCS#not-required "Not Required"
* payloadType = $EndpointPayloadTypeCS#NA "Not Applicable"
* extension[MtlsSignedObject].extension[ObjectType].valueCodeableConcept = MtlsObjectCodeCS#MTLS "mTLS signed Object"
* extension[MtlsSignedObject].extension[Object].valueBase64Binary = "MIIE+zCCA+OgAwIBAgISA/DY57CPqtRoFlG0JOdQZnRzMA0GCSqGSIb3DQEBCwUAMDIxCzAJBgNVBAYTAlVTMRYwFAYDVQQKEw1MZXQncyBFbmNyeXB0MQswCQYDVQQDEwJSMzAeFw0yMzA3MjcwMTU2NTBaFw0yMzEwMjUwMTU2NDlaMCIxIDAeBgNVBAMTF210bHMtZGV2LWRtZGguc2FmaGlyLmlvMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArgSWqFdWPDyX93O9ERnzAzfCqKLFrEsAnOSS5/fyil2qAE85y3/1v8VsrSsiUHz2SUXxQQ0dJGBT3jlZB+KZ9AtNhEAvvQiWtuzNNgO8Q7iVeh/8C+WP7XazGXzaEcpbtOqoM+JGqwWkRu2zlpJmFjAhIIasQMFH2HOWOukRN+8J4n6xy1JqqpDiUc3N77trY+R3PbuEfv0vOLwUYTBq+k1y3gQOy/Xl7l5J9+ugC3ftk+PMmByTbU6+ZDAK6QAGoY2SdwzY4dG36KlYsWA08cvgLUs3IaMxPK008YVx27a6/mJua3xhTnh/6muGyOUpmlYBCJJg43FOskeqNIIxaQIDAQABo4ICGTCCAhUwDgYDVR0PAQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMBAf8EAjAAMB0GA1UdDgQWBBT2H5abr3gkO0t5KpwP0K966DCuZTAfBgNVHSMEGDAWgBQULrMXt1hWy65QCUDmH6+dixTCxjBVBggrBgEFBQcBAQRJMEcwIQYIKwYBBQUHMAGGFWh0dHA6Ly9yMy5vLmxlbmNyLm9yZzAiBggrBgEFBQcwAoYWaHR0cDovL3IzLmkubGVuY3Iub3JnLzAiBgNVHREEGzAZghdtdGxzLWRldi1kbWRoLnNhZmhpci5pbzATBgNVHSAEDDAKMAgGBmeBDAECATCCAQQGCisGAQQB1nkCBAIEgfUEgfIA8AB1ALc++yTfnE26dfI5xbpY9Gxd/ELPep81xJ4dCYEl7bSZAAABiZVHEwAAAAQDAEYwRAIgVM1RAExo1mO7EDQ11PFzE6ewkx9TBzSrQMsxX9dkC5QCIA2tta+kt2aSk8lwqLBCEiSSSPXLg/1sbHrODtCjACsZAHcAejKMVNi3LbYg6jjgUh7phBZwMhOFTTvSK8E6V6NS61IAAAGJlUcTCAAABAMASDBGAiEAl1l1FIWpFnVupbIKz+PlPLmgKAtxkJiK6s9uVD1P81MCIQDRsPgnSaFlQbr4KdMc/B3KWZwjkXqoUmI6x1XApPY6gjANBgkqhkiG9w0BAQsFAAOCAQEAhELGwBfs7GsABz5kCUyLunMbdsb6VKjPrBABVTbG9amFcBVxDBSRBNx/NC8itT5k4u2JRnvjVQ/N2vtRqRZR564TwVnMow2ZIW2v9vUhQeX3LkIzzJq0CCLDO39PX1YPUDVCkzH1RV4AxuM26+We4+xmnXixNK6iKJjCvW2S0Q9CA6lQ2COi/tgUq8IIoKy5vFfjHsXul9aGMdzK39fxmO8QRysKBIVWfzb62bUNFO9FGVc7GbEGocqy20TiKBkUjR27T97Q1cMDwtzLwS/G2YKnEVtIJLk/cKG4UKcWx+pCHqvDaHRWUNQ2kofypCS+lLBQFQhXpSG8IwzOww54Kg=="


---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/ExamplemTLSOrganization.fsh

//// ------------------------------
//
//Instance: mtlsorganization1
//InstanceOf: MtlsOrganization
//Description: "Example of mTLS Managing Organization"
//* id = "DiamondOnyxHealth3"
//* identifier.value = "DiamondOnyxHealth3"
//* meta.lastUpdated = "2022-07-04T15:00:00.000Z"
//* active = true
//* name = "DiamondOnyxHealth"
//* type = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/OrgTypeCS#payer "Payer"
//* telecom.system = http://hl7.org/fhir/contact-point-system#url "URL"
//* telecom.value = "https://diamond.1.onyxhealth.io"
//* endpoint.reference = "Endpoint/diamond-mtls-endpoint1"



// ------------------------------
Instance: mtlsorganization2
//InstanceOf: $USCoreOrganization
InstanceOf: MtlsOrganization
Description: "Example of mTLS Organization"
Usage: #example
* id = "DiamondOnyxHealth1"
//* identifier.type = $V2IdentifierTypeCS#TAX
//* identifier.value = "DiamondOnyxHealth1"
//* identifier.system = "http://diamondonyxhealth.io/payer/plan"
* meta.lastUpdated = "2022-07-04T15:00:00.000Z"
* active = true
* type = $OrgTypeCS#payer "Payer"
* name = "DiamondOnyxHealth"
* telecom.system = http://hl7.org/fhir/contact-point-system#url "URL"
* telecom.value = "https://diamond.1.onyxhealth.io"


Instance: Acme
InstanceOf: MtlsOrganization
Description: "Payer Organization"
Usage: #example
//* meta.profile = Canonical(NdhOrganization)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Acme of CT"
* type = OrgTypeCS#payer "Payer"
* identifier[NPI].value = "1356362586"
* identifier[NPI].system = $NPICS
* identifier.extension[identifier-status].valueCode = CredentialStatusCS#active
//* extension[qualification][0].extension[code].valueCodeableConcept =   $NUCCProviderTaxonomy#3336C0003X "Community/Retail Pharmacy"
//* extension[qualification][=].extension[status].valueCode = http://hl7.org/fhir/us/ndh/CodeSystem/QualificationStatusCS#active
//* alias[0].extension[org-alias-type].valueCodeableConcept = http://hl7.org/fhir/us/ndh/CodeSystem/OrgAliasTypeCS#historical
//* alias[=].extension[org-alias-period].valuePeriod.start = 2011-05-23
//* alias[=].extension[org-alias-period].valuePeriod.end = 2011-05-27
//* alias[=].value = "Acme History"
//* extension[insurance-reference][0].valueReference = Reference(AcmeQHPBronze)
//* extension[insuranceplan].valueReference = Reference(AcmeQHPBronze)
//* extension[endpoint].valueReference = Reference(AcmeOfCTPortalEndpoint)
//* telecom[+].system = #phone
//* telecom[=].value = "(111)-222-3333"
//* telecom[=].rank = 2
//* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon
//* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #tue
//* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #wed
//* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #thu
//* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #fri
//* telecom[=].extension[contactpoint-availabletime][0].extension[availableStartTime].valueTime = 08:00:00
//* telecom[=].extension[contactpoint-availabletime][0].extension[availableEndTime].valueTime = 17:00:00
//* telecom[1].system = #url
//* telecom[1].value = "https://www.acmeofct.com"
//* telecom[1].rank = 1

* telecom[+].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #tue
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #wed
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #thu
* telecom[=].extension[contactpoint-availabletime][0].extension[daysOfWeek][+].valueCode  = #fri
* telecom[=].extension[contactpoint-availabletime][0].extension[availableStartTime].valueTime = 08:00:00
* telecom[=].extension[contactpoint-availabletime][0].extension[availableEndTime].valueTime = 17:00:00


* address.line[0] = "456 Main Street"
* address.city = "Norwalk"
* address.state = "CT"
* address.postalCode = "00014-1234"
//* extension[org-description].valueString = "Acme of CT is a leading provider of health and other insurance products."


---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/ExampleMultiMemberMatchParameters.fsh

// Example of Multi-Member Match Request
Instance: Multimembermatchpayerrequestexample
InstanceOf: pdex-parameters-multi-member-match-bundle-in
Title: "$multi-member-match payer example request"
Description: "Example of more than one member being submitted to the PDex Payer-to-Payer Multiple Member Match Operation."
Usage: #example
* id = "payer-multi-member-match-in"
// * parameter[0].name = "MemberBundle"
* parameter[0].part[MemberPatient]
  * resource
    * resourceType = "Patient"
    * text.status = #generated
    * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Default Generated text for resource.</div>"
    * id = "1"
    * identifier
      * type = $V2IdentifierTypeCS#MB
      * system = "http://example.org/old-payer/identifiers/member"
      * value = "55678"
      * assigner.display = "Old Payer"
    * name
      * use = #official
      * family = "Person"
      * given[0] = "Patricia"
      * given[+] = "Ann"
    * gender = #female
    * birthDate = "1974-12-25"
// ----------------------
* parameter[=].part[CoverageToMatch]
  * resource
    * resourceType = "Coverage"
    * text.status = #generated
    * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Default Generated text for resource.</div>"
    * id = "9876B1"
    * identifier[memberid]
      * system = "http://example.org/old-payer"
      * value = "DH10001235"
    * status = #draft
    * subscriberId = "1234564321"
    * relationship = $CoverageRelationship#self
    * beneficiary.reference = "Patient/1"
    * period
      * start = "2011-05-23"
      * end = "2012-05-23"
    * payor
      * identifier
        * system = "http://hl7.org/fhir/sid/us-npi"
        * value = "9876543210"
      * display = "Old Health Plan"
    * class[group]
      * type = $coverage-class#group
      * value = "CB135"
    * class[plan]
      * type = $coverage-class#plan
      * value = "B37FC"
    * class[+]
      * type = $coverage-class#subplan
      * value = "P7"
    * class[+]
      * type = $coverage-class#class
      * value = "SILVER"
// ----------------------
* parameter[=].part[Consent]
  * resource
    * resourceType = "Consent"
    * text.status = #generated
    * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Default Generated text for resource.</div>"
    * id = "consent-1"
    * status = #active
    * scope = $consentscope#patient-privacy
    * category[disclosure] = $v3-ActCode#IDSCL
    * patient.reference = "Patient/1"
    * performer.reference = "Patient/1"
    * sourceReference.reference = "http://example.org/DocumentReference/someconsent-1"
    * policy.uri = "http://hl7.org/fhir/us/davinci-hrex/StructureDefinition-hrex-consent.html#regular"
    * provision
      * type = #permit
      * period
        * start = "2023-12-01"
        * end = "2024-03-31"
      * actor[source]
        * role = $provenance-participant-type#performer
        * reference
          * identifier
            * system = "http://hl7.org/fhir/sid/us-npi"
            * value = "9876543210"
          * display = "Old Health Plan"
      * actor[recipient]
        * role = $v3-ParticipationType#IRCP
        * reference
          * identifier
            * system = "http://hl7.org/fhir/sid/us-npi"
            * value = "0123456789"
          * display = "New Health Plan"
      * action = $consentaction#disclose
// ----------------------
* parameter[=].part[CoverageToLink]
  * resource
    * resourceType = "Coverage"
    * text.status = #generated
    * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Default Generated text for resource.</div>"
    * id = "AA87654"
    * identifier[memberid]
      * system = "http://example.org/new-payer/identifiers/coverage"
      * value = "234567"
    * status = #active
    * subscriberId = "23456754321"
    * relationship = $CoverageRelationship#self
    * beneficiary.reference = "Patient/1"
    * payor
      * identifier
        * system = "http://hl7.org/fhir/sid/us-npi"
        * value = "0123456789"
      * display = "New Health Plan"
// ------------------
// Record 2 in bundle
// ------------------
// * parameter[+].name = "MemberBundle"
* parameter[+].part[MemberPatient]
  * resource
    * resourceType = "Patient"
    * text.status = #generated
    * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Default Generated text for resource.</div>"
    * id = "2"
    * identifier
      * type = $V2IdentifierTypeCS#MB
      * system = "http://example.org/old-payer/identifiers/member"
      * value = "45567"
      * assigner.display = "Old Payer"
    * name
      * use = #official
      * family = "Smith"
      * given[0] = "William"
      * given[+] = "John"
    * gender = #female
    * birthDate = "1958-12-25"
* parameter[=].part[CoverageToMatch]
//  * name = "CoverageToMatch"
  * resource
    * resourceType = "Coverage"
    * text.status = #generated
    * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Default Generated text for resource.</div>"
    * id = "876B10"
    * identifier[memberid]
      * system = "http://example.org/old-payer"
      * value = "DH10001235"
    * status = #draft
    * subscriberId = "9876543789"
    * relationship = $CoverageRelationship#self
    * beneficiary.reference = "Patient/2"
    * period
      * start = "2011-05-23"
      * end = "2012-05-23"
    * payor
      * identifier
        * system = "http://hl7.org/fhir/sid/us-npi"
        * value = "9876543210"
      * display = "Old Health Plan"
    * class[group]
      * type = $coverage-class#group
      * value = "CB135"
    * class[plan]
      * type = $coverage-class#plan
      * value = "B37FC"
    * class[+]
      * type = $coverage-class#subplan
      * value = "P7"
    * class[+]
      * type = $coverage-class#class
      * value = "SILVER"
* parameter[=].part[Consent]
//  * name = "Consent"
  * resource
    * resourceType = "Consent"
    * text.status = #generated
    * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Default Generated text for resource.</div>"
    * id = "consent-2"
    * status = #active
    * scope = $consentscope#patient-privacy
    * category[disclosure] = $v3-ActCode#IDSCL
    * patient.reference = "Patient/2"
    * performer.reference = "Patient/2"
    * sourceReference.reference = "http://example.org/DocumentReference/someconsen-2"
    * policy.uri = "http://hl7.org/fhir/us/davinci-hrex/StructureDefinition-hrex-consent.html#regular"
    * provision
      * type = #permit
      * period
        * start = "2023-12-01"
        * end = "2024-03-31"
      * actor[source]
        * role = $provenance-participant-type#performer
        * reference
          * identifier
            * system = "http://hl7.org/fhir/sid/us-npi"
            * value = "9876543210"
          * display = "Old Health Plan"
      * actor[recipient]
        * role = $v3-ParticipationType#IRCP
        * reference
          * identifier
            * system = "http://hl7.org/fhir/sid/us-npi"
            * value = "0123456789"
          * display = "New Health Plan"
      * action = $consentaction#disclose
* parameter[=].part[CoverageToLink]
//  * name = "CoverageToLink"
  * resource
    * resourceType = "Coverage"
    * text.status = #generated
    * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Default Generated text for resource.</div>"
    * id = "AA87654"
    * identifier[memberid]
      * system = "http://example.org/new-payer/identifiers/coverage"
      * value = "234567"
    * status = #active
    * subscriberId = "432156789"
    * relationship = $CoverageRelationship#self
    * beneficiary.reference = "Patient/2"
    * payor
      * identifier
        * system = "http://hl7.org/fhir/sid/us-npi"
        * value = "0123456789"
      * display = "New Health Plan"

// End of Example

// ----------------------------------------------
// Example of Multi-Member Match Response
Instance: Multimembermatchpayerresponseexample
InstanceOf: pdex-parameters-multi-member-match-bundle-out
Title: "$multi-member-match payer example response"
Description: "Example of group record being returned in response to PDex Payer-to-Payer Multiple Member Match Operation."
Usage: #example
* id = "payer-multi-member-match-out"
* parameter[ResourceIdentifier]
  * name = "ResourceIdentifier"
  * resource
    * resourceType = "Group"
    * text.status = #generated
    * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Default Generated text for resource.</div>"
    * id = "07e72a15407547bf9d03f522aa536a72"
    * contained[0] = input-1
    * contained[+] = input-2
    * type =  http://hl7.org/fhir/group-type#person "Person"
    * actual = true
    * code = $MemberMatchResult#match "Matched"
    * managingEntity
      * identifier
        * system = "http://hl7.org/fhir/sid/us-npi"
        * value = "9876543210"
      * display = "Old Health Plan"
    * identifier
      // new health plan taken from submission to multi-member match operation
      * system = "http://hl7.org/fhir/sid/us-npi"
      * value = "0123456789"
    * member[0]
      * entity
        * reference = "Patient/1001"
        * extension[matchedMember].valueReference.reference = "#1"
    * member[+]
      * entity
        * reference = "Patient/2002"
        * extension[matchedMember].valueReference.reference = "#2"
* parameter[NoMatch]
  * name = "NoMatch"
  * resource
    * resourceType = "Group"
    * text.status = #generated
    * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Default Generated text for resource.</div>"
    * contained[0] = input-3
    * type =  http://hl7.org/fhir/group-type#person "Person"
    * actual = true
    * code = $MemberMatchResult#nomatch "Not Matched"
    * managingEntity
      * identifier
        * system = "http://hl7.org/fhir/sid/us-npi"
        * value = "9876543210"
      * display = "Old Health Plan"
    * identifier
      // new health plan taken from submission to multi-member match operation
      * system = "http://hl7.org/fhir/sid/us-npi"
      * value = "0123456789"
    * member[0]
      * entity
        * reference = "#3"
        * extension[nonMatchedMember].valueReference.reference = "#3"
* parameter[ConsentConstraint]
  * name = "ConsentConstraint"
  * resource
    * resourceType = "Group"
    * text.status = #generated
    * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Default Generated text for resource.</div>"
    * contained[0] = input-4
    * type =  http://hl7.org/fhir/group-type#person "Person"
    * actual = true
    * code = $MemberMatchResult#consentconstraint "Consent Constraint"
    * managingEntity
      * identifier
        * system = "http://hl7.org/fhir/sid/us-npi"
        * value = "9876543210"
      * display = "Old Health Plan"
    * identifier
      // new health plan taken from submission to multi-member match operation
      * system = "http://hl7.org/fhir/sid/us-npi"
      * value = "0123456789"
    * member[0]
      * entity
        * reference = "#4"
        * extension[nonMatchedMember].valueReference.reference = "#4"



// ------------------------------------------------------------
// Contained resource examples
// ---------------------------
// Patient/1 from Request
Instance: input-1
InstanceOf: Patient
Usage: #inline
* id = "1"
* identifier
  * type = $V2IdentifierTypeCS#MB
  * system = "http://example.org/old-payer/identifiers/member"
  * value = "55678"
  * assigner.display = "Old Payer"
* name
  * use = #official
  * family = "Person"
  * given[0] = "Patricia"
  * given[+] = "Ann"
* gender = #female
* birthDate = "1974-12-25"

// ---------------------------
// Patient/2 from Request
Instance: input-2
InstanceOf: Patient
Usage: #inline
* id = "2"
* identifier
  * type = $V2IdentifierTypeCS#MB
  * system = "http://example.org/old-payer/identifiers/member"
  * value = "45567"
  * assigner.display = "Old Payer"
* name
  * use = #official
  * family = "Smith"
  * given[0] = "William"
  * given[+] = "John"
* gender = #male
* birthDate = "1958-12-25"

// ---------------------------
// Patient/3 from Request
Instance: input-3
InstanceOf: Patient
Usage: #inline
* id = "3"
* identifier
  * type = $V2IdentifierTypeCS#MB
  * system = "http://example.org/old-payer/identifiers/member"
  * value = "45567"
  * assigner.display = "Old Payer"
* name
  * use = #official
  * family = "Jones"
  * given[0] = "Adam"
  * given[+] = "Jacob"
* gender = #male
* birthDate = "1957-12-25"

// ---------------------------
// Patient/4 from Request
Instance: input-4
InstanceOf: Patient
Usage: #inline
* id = "4"
* identifier
  * type = $V2IdentifierTypeCS#MB
  * system = "http://example.org/old-payer/identifiers/member"
  * value = "45567"
  * assigner.display = "Old Payer"
* name
  * use = #official
  * family = "Noway"
  * given[0] = "Janis"
  * given[+] = "Noelle"
* gender = #female
* birthDate = "1956-12-25"




---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/ExamplePDexMemberMatchGroup.fsh

// Example of PDex Member Match Group
// ------------------------------
// MemberMatchGroup
Instance: example-pdex-member-match-group
InstanceOf:  PDexMemberMatchGroup
Description: "Example of PDex Member Match Group that returns successful matches and creates a Group resource for use with bulk operations."
Usage: #example
* meta.lastUpdated = "2024-03-20T09:00:00.000Z"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Default Generated text for resource.</div>"
* contained[0] = input-1
* contained[+] = input-2
* id = "07e72a15407547bf9d03f522aa536a72.1"
* type = http://hl7.org/fhir/group-type#person "Person"
* actual = true
* code = $MemberMatchResult#match "Matched"
* characteristic.code.coding = $MemberMatchResult#match "Matched"
* characteristic.valueReference.identifier.system = "http://hl7.org/fhir/sid/us-npi"
* characteristic.valueReference.identifier.value = "0123456789"
* characteristic.exclude = false
* characteristic.period.start = "2024-03-20"
* name = "Matched Members"
* managingEntity
  * identifier
    * system = "http://hl7.org/fhir/sid/us-npi"
    * value = "9876543210"
  * display = "Old Health Plan"
* identifier
  // new health plan taken from submission to multi-member match operation
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "0123456789"
* member[0]
  * entity
    * reference = "Patient/1001"
    * extension[matchedMember].valueReference.reference = "#1"
* member[+]
  * entity
    * reference = "Patient/2002"
    * extension[matchedMember].valueReference.reference = "#2"

// Example of Member No Match Group
// ------------------------------
// MemberNoMatchGroup
Instance: example-pdex-member-no-match-group
InstanceOf:  PDexMemberNoMatchGroup
Description: "Example of PDex Member Match Group that returns unsuccessful matches."
Usage: #example
* meta.lastUpdated = "2024-03-20T09:00:00.000Z"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Default Generated text for resource.</div>"
* contained[0] = input-3
* type =  http://hl7.org/fhir/group-type#person "Person"
* actual = true
* code = $MemberMatchResult#nomatch "Not Matched"
* managingEntity
  * identifier
    * system = "http://hl7.org/fhir/sid/us-npi"
    * value = "9876543210"
  * display = "Old Health Plan"
* identifier
  // new health plan taken from submission to multi-member match operation
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "0123456789"
* member[0]
  * entity
    * reference = "#3"
    * extension[nonMatchedMember].valueReference.reference = "#3"

// Example of Consent Constraint Group
// ------------------------------
// MemberNoMatchGroup
Instance: example-pdex-member-consent-constraint-group
InstanceOf:  PDexMemberNoMatchGroup
Description: "Example of PDex Member Match Group that returns matches that fail the consent decision flow."
Usage: #example
* meta.lastUpdated = "2024-03-20T09:00:00.000Z"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Default Generated text for resource.</div>"
* contained[0] = input-4
* type =  http://hl7.org/fhir/group-type#person "Person"
* actual = true
* code = $MemberMatchResult#consentconstraint "Consent Constraint"
* managingEntity
  * identifier
    * system = "http://hl7.org/fhir/sid/us-npi"
    * value = "9876543210"
  * display = "Old Health Plan"
* identifier
  // new health plan taken from submission to multi-member match operation
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "0123456789"
* member[0]
  * entity
    * reference = "#4"
    * extension[nonMatchedMember].valueReference.reference = "#4"


---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/ExamplePDexProviderAccessConsent.fsh

// Example of PDex Provider Access Consent
Instance: Example-Consent-Provider-Opt-Out
InstanceOf: pdex-provider-consent
Title: "PDex Provider Access Consent Example"
Description: "An example of a PDex Provider Access Consent where a member expresses their desire to opt-out of sharing their data via the Provider Access API."
Usage: #example
* id = "no-consent-1"
* status = #active
* scope = $consentscope#patient-privacy
* category[disclosure] = $v3-ActCode#IDSCL
* patient.reference = "Patient/1"
* performer.reference = "Patient/1"
* organization = Reference(Payer1-1)
* policyRule = http://terminology.hl7.org/CodeSystem/consentpolicycodes#cric "Common Rule Informed Consent"
* provision
  * type = #deny
  * period
    * start = "2024-06-11"
  * actor[source]
    * role = $provenance-participant-type#performer
    * reference
      * identifier
        * system = "http://hl7.org/fhir/sid/us-npi"
        * value = "0123456789"
      * display = "My Health Plan"
  * action = $consentaction#disclose



---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/ExamplePDexProviderGroup.fsh

Instance: Example-PDex-Provider-Group
InstanceOf: PDexProviderGroup
Description: "Example of a Payer-generated Member Attribution List for an In-Network/Contracted Provider."
Usage: #example
* meta.lastUpdated = "2024-03-21T17:18:00.000Z"
* extension[attributionListStatus].valueCode = #final
* extension[optedOut].valueQuantity.value = 5.0
* identifier[npi].system = "http://hl7.org/fhir/sid/us-npi"
* identifier[npi].value = "1122334455"
* identifier[tin].system = "urn:oid:2.16.840.1.113883.4.4"
* identifier[tin].value = "99-12345"
* code = $MemberAttribution#pdexprovidergroup "PDex Provider Group"
* active = true
* type = #person
* actual = true
* name = "Attributed List of Health Plan Members for Practitioner 1122334455."
* managingEntity.reference = "Organization/ProviderOrg1"
* characteristic.code = $MemberAttribution#pdexprovidergroup "PDex Provider Group"
* characteristic.valueReference.identifier.system = "http://hl7.org/fhir/sid/us-npi"
* characteristic.valueReference.identifier.value = "0123456789"
* characteristic.exclude = false
* characteristic.period.start = "2024-03-21"

* member[0].id = "0"
* member[=].entity.reference = "Patient/1001"
* member[=].extension[lastTransmitted].valueDateTime = "2024-03-21T17:18:00.000Z"
* member[=].extension[lastResources].valueString = "Patient,Condition,Observation,Procedure"
* member[=].extension[lastFilters].valueString = "Condition?recordedDate=ge2023-09-23,Procedure?performed=ge2023-03-21"



---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/ExamplePriorAuthEOB.fsh

Instance: PdexPriorAuth
InstanceOf: PdexPriorAuthorization
Description: "PDex Prior Authorization based on EOB Inpatient Example"
Usage: #example
* id = "PDexPriorAuth1"
//* id = "1234-234-1243-12345678901-20190101-20191031"
//* meta.profile[supportedProfile] = Canonical(PdexPriorAuthorization)
* meta.lastUpdated = "2024-02-06T09:14:11+00:00"
* language = #en-US
* status = #active
* identifier.value = "PA123412341234123412341234"
* identifier.system = "https://www.exampleplan.com/fhir/EOBIdentifier"
//* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
//* extension.valueCode = #fm
* extension[levelOfServiceType].valueCodeableConcept = https://codesystem.x12.org/005010/1338#U "Urgent"
//* extension[levelOfServiceType].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"


* type = $HL7ClaimTypeCS#institutional
* type.text = "Institutional"
* preAuthRefPeriod.start = "2021-10-01"
* preAuthRefPeriod.end = "2021-10-31"

* use = #preauthorization
* patient = Reference(Patient/1)
* insurer = Reference(Organization/Payer1)
* insurer.display = "Example Health Plan"
* billablePeriod.start = "2021-10-01"
* billablePeriod.end = "2021-10-31"
* created = "2021-09-20T00:00:00+00:00"
* provider = Reference(Organization/Payer2)
* provider.display = "Another Example Health Plan"
* priority = http://terminology.hl7.org/CodeSystem/processpriority#normal "Normal"
* fundsReserveRequested = $HL7FundsReserve#provider "Provider"
* fundsReserve = $HL7FundsReserve#none "None"
* related[0].relationship = $HL7RelatedClaim#associated "Associated Claim"
* related[0].reference.value = "XCLM1001"
* careTeam[0].provider = Reference(Organization/Payer1)
* careTeam[0].sequence = 1
* careTeam[0].responsible = true
* insurance.coverage = Reference(883210)

* item.sequence = 1
* item.category = $X12ServiceType#3 "Consultation"
// * item[0].productOrService = http://www.ama-assn.org/go/cpt#99202
* item.productOrService = $CPT#99202
* item.productOrService = https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/ProspMedicareFeeSvcPmtGen/HIPPSCodes#BB201 "Behavior Only, ADL Index 6 - 10/Medicare 5 day assessment (Full)"

* item.adjudication[adjudicationamounttype].extension[reviewAction].url = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/extension-reviewAction"
* item.adjudication[adjudicationamounttype].extension[adjudicationActionDate].valueDateTime = "2024-07-23T17:26:23.217+00:00"

* item.adjudication[adjudicationamounttype].id = "1"
* item.adjudication[adjudicationamounttype].category = $HL7AdjudicationCS#submitted "Submitted Amount"
* item.adjudication[adjudicationamounttype].amount.value = 300.99
* item.adjudication[adjudicationamounttype].amount.currency = urn:iso:std:iso:4217#USD "United States dollar"
// * item.adjudication.[adjudicationamounttype].category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
* item.adjudication[adjudicationamounttype].extension[reviewAction].extension[number].valueString = "AUTH0001"
* item.adjudication[adjudicationamounttype].extension[reviewAction].extension[code].valueCodeableConcept = https://codesystem.x12.org/005010/306#A1 "Certified in total"

//* item[0].adjudication[allowedunits].id = "2"
//* item[0].adjudication[allowedunits].category = $HL7AdjudicationCS#submitted "Submitted Amount"
//* item[0].adjudication[allowedunits].value = 1.0
//
//* item[0].adjudication[denialreason].category.coding
//* item[0].adjudication[denialreason].id = "3"
//* item[0].adjudication[denialreason].reason =
//* item[0].adjudication[denialreason].category = $HL7AdjudicationCS#submitted "Submitted Amount"
//* item[0].adjudication[denialreason].value = 0.0

//* item[0].adjudication[consumedunits].id = "4"
//* item[0].adjudication[consumedunits].category = $HL7AdjudicationCS#submitted "Submitted Amount"
//* item[0].adjudication[consumedunits].value = 0.0


* outcome = #queued
* diagnosis[0].diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#G89.4
* diagnosis[0].type = $HL7DiagnosisType#principal
* diagnosis[0].sequence = 1
* insurance[0].focal = true
* insurance[0].coverage[0] = Reference(Coverage/Coverage1)


* total.category = http://hl7.org/fhir/us/davinci-pdex/CodeSystem/PriorAuthorizationValueCodes#eligible "Eligible"
* total.extension[priorauth-utilization].url = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/PriorAuthorizationUtilization"
* total.extension[priorauth-utilization].valueQuantity.value = 1
* total.amount.value = 100
* total.amount.currency = #USD


---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/Extensions-mTLS.fsh

Extension: MtlsSignedObject
Id: pdex-mtls-signedobject-extension
Title: "mTLS Signed Object"
Description: "mTLS Endpoint Signed Object Extension"
* ^context.type = #element
* ^context.expression = "Endpoint"
* extension contains
  ObjectType 1..1 MS and
  Object 1..1 MS
* extension[ObjectType].value[x] only CodeableConcept
* extension[ObjectType].value[x] from MtlsObjectTypeVS (extensible)
* extension[Object].value[x] only base64Binary
// * extension[Object].value[x] only string
// * extension[Object].value[x] ^short = "This should be base64Binary but valuebase64Binary won't compile. Therefore setting to string"
* extension[Object].value[x] ^short = "took .pem file (X509 Encoded) and converted to base64Binary using https://tomeko.net/online_tools/PEM_to_base64.php?lang=en \n Convert back with https://tomeko.net/online_tools/base64_to_PEM.php?lang=en"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


// --------------------------------
ValueSet: MtlsObjectTypeVS
Title: "mTLS Signed Object Types"
Description: "The Object type"
* ^experimental = false
* codes from system MtlsObjectCodeCS
* ^copyright = "This Valueset is not copyrighted."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm

// --------------------------------
CodeSystem: MtlsObjectCodeCS
Title: "mTLS Object Type Code"
Description: "Codes for the Signed Object Types"
* ^experimental = false
* ^caseSensitive = false
* #MTLS "mTLS signed Object"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/Extensions.fsh

//
//  Extensions for Payer Data Exchange
//

Extension: ProvenanceSourceFrom
Title: "An attribute to describe the data source a resource was constructed from"
Description: "Attributes that identify the source record format from which data in the referenced resources was derived"
* insert PdexStructureDefinitionContent

//  * extension contains
//  source 0..1
* ^experimental = true
* ^context.type = #element
* ^context.expression = "Provenance.entity"

* value[x] ^short = "Source record format from which data was derived"
//  * extension[source].url ProvenancePayerSourceFormat
//  * extension[source].value[x] only CodeableConcept
//  * extension[source].valueCodeableConcept from ProvenancePayerSourceFormat (extensible)
* value[x] only CodeableConcept
* valueCodeableConcept from ProvenancePayerSourceFormat (extensible)
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm

//
//Extension for MedicationDispense
//

Extension: DispenseRefill
Title: "An attribute to express the refill number of a prescription"
Description: "Attribute that identifies the refill number of a prescription. e.g., 0, 1, 2, etc."
* insert PdexStructureDefinitionContent
// Attempting to resolve warning: Review the extension type: extensions should not have a context of Element unless it's really intended that they can be used anywhere
//* ^context.type = #element
* ^context.type = #element
* ^context.expression = "MedicationDispense"
* value[x] ^short = "Refill number of this prescription"
* value[x] only Quantity
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm

// * extension contains refillNum 0..1=
// * extension[refillNum] ^short = "Refill number of this prescription"
// * extension[refillNum].valueQuantity only Quantity


Extension: PriorAuthorizationUtilization
Title: "An attribute to express the amount of a service or item that has been utilized"
Description: "Attribute that expresses the amount of an item or service that has been consumed under the current prior authorization."
* insert PdexStructureDefinitionContent
// Attempting to resolve warning: Review the extension type: extensions should not have a context of Element unless it's really intended that they can be used anywhere
//* ^context.type = #element
* ^context.type = #element
* ^context.expression = "ExplanationOfBenefit.total"
* value[x] ^short = "Amount/Quantity of an item or service that has been consumed/utilized"
* value[x] only Quantity or Ratio
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm

Extension: LevelOfServiceCode
Id: extension-levelOfServiceCode
Description: "A code specifying the level of service being requested (UM06)"
* ^context.type = #element
* ^context.expression = "ExplanationOfBenefit"
* value[x] only CodeableConcept
* valueCodeableConcept from https://valueset.x12.org/x217/005010/request/2000E/UM/1/06/00/1338 (required)
* valueCodeableConcept ^binding.description = "Codes specifying the level of service rendered. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


Extension: ReviewAction
Id: extension-reviewAction
Description: "The details of the review action that is necessary for the authorization."
* ^experimental = true
* ^context.type = #element
* ^context.expression = "ExplanationOfBenefit.item.adjudication"
* extension contains ReviewActionCode named code 0..1 and number 0..1 and reasonCode 0..* and secondSurgicalOpinionFlag 0..1
* extension[code] ^short = "Healthcare Services Outcome"
* extension[number].value[x] only string
* extension[number] ^short = "Item Level Review Number"
* extension[reasonCode].value[x] only CodeableConcept
* extension[reasonCode].valueCodeableConcept from X12278ReviewDecisionReasonCode (required)
* extension[reasonCode] ^short = "Explanation of the pending, review denial or partial approval"
* extension[secondSurgicalOpinionFlag].value[x] only boolean
* extension[secondSurgicalOpinionFlag] ^short = "Whether a second surgical opinion is need for approval"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm

Extension: ReviewActionCode
Id: extension-reviewActionCode
Description: "The code describing the result of the review."
* ^context.type = #element
* ^context.expression = "ExplanationOfBenefit.item.adjudication.extension"
* value[x] only CodeableConcept
* valueCodeableConcept from https://valueset.x12.org/x217/005010/response/2000F/HCR/1/01/00/306 (required)
* valueCodeableConcept ^binding.description = "Codes indicating type of action. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


//Extension; Fhirig
//Id: fhir-ig-extension
//Description: "Payer-to-Payer FHIR IG"
//

// --------------------------------------------
// NDH Extensions
// --------------------------------------------

// Extensions used for NDH. Ported here to enable publication of PDex IG.
//* extension contains
//    AssociatedServers named associated-servers 0..* and
//    DynamicRegistration named dynamic-registration 0..*  and
//    EndpointAccessControlMechanism named access-control-mechanism 0..1 and
//    EndpointConnectionTypeVersion named connection-type-version 0..* and
//    EndpointRank named endpoint-rank 0..1 and
//    EndpointUsecase named endpoint-usecase 0..* and
//    FhirIg named fhir-ig 0..* and
//    IdentifierStatus
//    SecureExchangeArtifacts named secure-exchange-artifacts 0..*  and
//    TrustFramework named trust-framework 0..*  and
//    VerificationStatus named verification-status 0..1

Extension: AssociatedServers
Id: base-ext-associatedServers
Title: "NDH Associated Servers"
Description: "Associated Servers"
// Attempting to resolve warning: Review the extension type: extensions should not have a context of Element unless it's really intended that they can be used anywhere
* ^context.type = #element
* ^context.expression = "Endpoint"
* extension contains
   associatedServersType  1..1 MS and
   serverURL 0..1 MS
* extension[associatedServersType].value[x] only CodeableConcept
* extension[associatedServersType] ^short = "Associated Server Type"
* extension[associatedServersType].value[x] 1..1
* extension[associatedServersType].value[x] from NdhAssociatedServersTypeVS (extensible)
* extension[serverURL].value[x] only string
* extension[serverURL] ^short = "Binary"
* extension[serverURL].value[x] 1..1
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


Extension: ContactPointAvailableTime
Id: base-ext-contactpoint-availabletime
Title: "NDH Contactpoint Availabletime"
Description: "An extension representing the days and times a contact point is available"
* value[x] 0..0
// Attempting to resolve warning: Review the extension type: extensions should not have a context of Element unless it's really intended that they can be used anywhere
* ^context.type = #fhirpath
* ^context.expression = "descendants()"
//* ^context.type = #element
//* ^context.expression = ["Endpoint",
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
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"

* ^extension.valueCode = #fm


Extension: DynamicRegistration
Id: base-ext-dynamicRegistration
Title: "NDH Dynamic Registration"
Description: "Dynamic Registration"
// Attempting to resolve warning: Review the extension type: extensions should not have a context of Element unless it's really intended that they can be used anywhere
* ^context.type = #element
* ^context.expression = "Endpoint"
* extension contains
   trustProfile 0..1 and
   version  0..1 MS
   //binary 1..1 MS
* extension[trustProfile].value[x] only CodeableConcept
* extension[trustProfile].value[x] from TrustProfileVS (extensible)
* extension[version].value[x] only string
* extension[version] ^short = "Trust Profile Version"
* extension[version].value[x] 0..1
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


Extension: EndpointAccessControlMechanism
Id: base-ext-endpointAccessControlMechanism
Title: "NDH Endpoint Access Control Mechanism"
Description: "Endpoint Access Control Mechanism"
// Attempting to resolve warning: Review the extension type: extensions should not have a context of Element unless it's really intended that they can be used anywhere
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from EndpointAccessControlMechanismVS (extensible)
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


Extension: EndpointConnectionTypeVersion
Id: base-ext-endpoint-connection-type-version
Title: "NDH Endpoint Connection Type Version"
Description: "An extension for endpoint connection type version"
// Attempting to resolve warning: Review the extension type: extensions should not have a context of Element unless it's really intended that they can be used anywhere
//* ^context.type = #element
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 0..1 MS
* value[x] only CodeableConcept
* value[x] from EndpointConnectionTypeVersionVS (extensible)
//* valueCodeableConcept from EndpointConnectionTypeVersionVS (extensible)
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


Extension: EndpointRank
Id: base-ext-endpoint-rank
Title: "NDH Endpoint Rank"
Description: "Order established by a Role, Organization… for Endpoints capable of transferring the same content"
// Attempting to resolve warning: Review the extension type: extensions should not have a context of Element unless it's really intended that they can be used anywhere
//* ^context.type = #element
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 1..1
* value[x] only positiveInt
//* valuePositiveInt 1..1
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


Extension: EndpointUsecase
Id: base-ext-endpoint-usecase
Title: "NDH Endpoint Usecase"
Description: "EndpointUseCase is an enumeration of the specific use cases (service descriptions) supported by the endpoint"
// Attempting to resolve warning: Review the extension type: extensions should not have a context of Element unless it's really intended that they can be used anywhere
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 0..0
* extension contains
   endpointUsecasetype 1..1 MS and
   standard 0..1 MS
* extension[endpointUsecasetype] ^short = "An indication of the type of services supported by the endpoint"
* extension[endpointUsecasetype].value[x] only  CodeableConcept
* extension[endpointUsecasetype].value[x]  1..1
* extension[endpointUsecasetype].value[x] from NdhFhirEndpointUseCaseVS (extensible)
* extension[standard] ^short = "A URI to a published standard describing the services supported by the endpoint (e.g. an HL7 implementation guide)"
* extension[standard].value[x] only uri
* extension[standard].value[x] 1..1
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


Extension: FhirIg
Id: base-ext-fhir-ig
Title: "NDH FHIR IG"
Description: "FHIR IG"
// Attempting to resolve warning: Review the extension type: extensions should not have a context of Element unless it's really intended that they can be used anywhere
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 0..0
* extension contains
   ig-publication 0..1 and
   ig-name 0..1 and
   ig-version 0..1
* extension[ig-publication].value[x] only uri
* extension[ig-publication] ^short = "IG Publication"
* extension[ig-name] ^short = "IG Name"
* extension[ig-name].value[x] only string
* extension[ig-name].value[x] 1..1
* extension[ig-version].value[x] only string
* extension[ig-version] ^short = "IG Version"
* extension[ig-version].value[x] 1..1
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


Extension: IdentifierStatus
Id: base-ext-identifier-status
Title: "NDH Identifier Status"
Description: "Describes the status of an identifier"
// Attempting to resolve warning: Review the extension type: extensions should not have a context of Element unless it's really intended that they can be used anywhere
* ^context.type = #element
* ^context.expression = "Endpoint"
* ^context.expression = "Identifier"
* ^context.type = #element
* ^date = "2017-11-20T11:33:43.51-05:00"
* value[x] 1..1 MS
* value[x] only code
* value[x] from IdentifierStatusVS (required)
* value[x] ^short = "active|inactive|issued-in-error|revoked|pending"
//* valueCode from IdentifierStatusVS (required)
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


Extension: SecureExchangeArtifacts
Id: base-ext-secureExchangeArtifacts
Title: "NDH Secure Exchange Artifacts"
Description: "Secure Exchange Artifacts"
// Attempting to resolve warning: Review the extension type: extensions should not have a context of Element unless it's really intended that they can be used anywhere
* ^context.type = #element
* ^context.expression = "Endpoint"
* extension contains
   secureExchangeArtifactsType  1..1 MS and
   certificate 0..1 MS and
   expirationDate 0..1
* extension[secureExchangeArtifactsType].value[x] only CodeableConcept
* extension[secureExchangeArtifactsType] ^short = "Secure Artifact Type"
* extension[secureExchangeArtifactsType].value[x] 1..1
* extension[secureExchangeArtifactsType].value[x] from NdhSecureExchangeArtifactsVS (extensible)
* extension[certificate].value[x] only base64Binary
* extension[certificate].value[x] 1..1
* extension[certificate] ^short = "Certificate"
* extension[expirationDate].value[x] only dateTime
* extension[expirationDate].value[x] 1..1
* extension[expirationDate] ^short = "Expiration Date"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


Extension: TrustFramework
Id: base-ext-trustFramework
Title: "NDH Trust Framework"
Description: "Trust Framework"
// Attempting to resolve warning: Review the extension type: extensions should not have a context of Element unless it's really intended that they can be used anywhere
* ^context.type = #element
* ^context.expression = "Endpoint"
* extension contains
   trustFrameworkType  1..1 MS and
   qualifier 0..1 MS and
   signedArtifact 0..1 and
   publicCertificate 0..1
* extension[trustFrameworkType].value[x] only CodeableConcept
* extension[trustFrameworkType] ^short = "Trust Framework Type"
* extension[trustFrameworkType].value[x] from TrustFrameworkTypeVS (extensible)
* extension[qualifier].value[x] only string
* extension[qualifier] ^short = "Qualifier"
* extension[qualifier].value[x] 1..1
* extension[signedArtifact].value[x] only base64Binary
* extension[signedArtifact] ^short = "Signed Artifact"
* extension[signedArtifact].value[x] 1..1
* extension[publicCertificate].value[x] only base64Binary
* extension[publicCertificate] ^short = "Public Certificate"
* extension[publicCertificate].value[x] 1..1
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


Extension: VerificationStatus
Id: base-ext-verification-status
Title: "NDH Verification Status"
Description: "Indicates a resource instance verification status"
// Attempting to resolve warning: Review the extension type: extensions should not have a context of Element unless it's really intended that they can be used anywhere
* ^context.type = #element
* ^context.expression = "Endpoint"
* value[x] 0..1
* value[x] only CodeableConcept
* value[x] from NdhVerificationStatusVS (extensible)
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm



// ---------------------------------------
// // Provider Access API ATRGroup Attribution Extensions


// date/time data exported for member
Extension: LastTransmission
Id: base-ext-last-transmission
Title: "Member Last Transmission"
Description: "Indicates the last date/time that data ware requested and transmitted for a member as part of a data delta access request."
* ^context.type = #element
* ^context.expression = "Group.member"
* value[x] 0..1
* value[x] only dateTime
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


// type of data exported (taken from _type parameter in DavinciDataExport Operation
Extension: LastTypes
Id: base-ext-last-types
Title: "Member Last Resource Types"
Description: "Indicates the resources exported in the last export operation. This string can be taken from the DaVinci Data Export Request _type Parameter."
* ^context.type = #element
* ^context.expression = "Group.member"
* value[x] 0..1
* value[x] only string
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


// type of data exported with filter (taken from _typeFilter parameter in DavinciDataExport Operation
Extension: LastFilters
Id: base-ext-last-typefilter
Title: "Member Last Resource Filters"
Description: "Indicates the filters applied to the resources exported in the last export operation. This string can be taken from the DaVinci Data Export Request _typeFilter Parameter."
* ^context.type = #element
* ^context.expression = "Group.member"
* value[x] 0..1
* value[x] only string
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm



// ---------------------------------------
// Payer-to-Payer Group Attribution Extensions
// Patient Parameters from the Member-Match Operation used to perform the member-match
// Named matchedMember in Member-match response
Extension: MatchParameters
Id: base-ext-match-parameters
Title: "Member-Match Input Patient Parameter"
Description: "Input Patient Parameter supplied for the individual member match (Patient Demographics)."
* ^context.type = #element
* ^context.expression = "Group.member.entity"
* value[x] 0..1
// * value[x] only Reference(PDexMultiMemberMatchRequestParameters)
* value[x] only Reference(Patient)

* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


// ---------------------------------------
// Provider Access API ATRGroup Attribution Extensions
Extension: MembersOptedOut
Id: base-ext-members-opted-out
Title: "Members Opted-out"
Description: "Indicates the number of members that have opted out of sharing "
* ^context.type = #element
* ^context.expression = "Group"
* value[x] 0..1
* value[x] only Quantity
* value[x] ^comment = "Number of Attributed Members that are excluded through opt-out."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


// ---------------------------------------
// Prior Authorization ExplanationOfBenefit Adjudication All Slices
// Add Date Time
Extension: WhenAdjudicated
Id: base-ext-when-adjudicated
Title: "When Adjudicated"
Description: "Date and Time when Adjudication Action took place. NOTE: that this extension may be replaced by an inter-version extension after R6 version of the EOB implements this DataTime element."
* ^context[0].type = #element
* ^context[0].expression = "ExplanationOfBenefit.adjudication"
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit.item.adjudication"
* value[x] 0..1
* value[x] only dateTime
* value[x] ^comment = "Date or data and time when the adjudication action occured."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #fm


---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/HrexCoverageExample.fsh

Instance: ExampleCoverage
InstanceOf: $HrexCoverage
Description: "Example of a Coverage for a Member"
* id = "883210"
* meta.versionId = "1"
* meta.lastUpdated = "2020-10-28T09:26:23.217+00:00"
* identifier[memberid].system = "http://example.org/someOrg/identifiers/whatever"
* identifier[memberid].value = "1039399818"
* status = http://hl7.org/fhir/fm-status#active
* subscriberId = "97531"
* beneficiary.reference = "Patient/1"
* relationship = $CoverageRelationship#self
* payor.reference = "Organization/Payer1"


---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/Operation-bulk-member-match.fsh

Instance: bulk-member-match
InstanceOf: OperationDefinition
Title: "PDex Bulk Member Match Operation"
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-pdex/OperationDefinition/bulk-member-match"
* name = "BulkMemberMatch"
* title = "PDex Bulk Member Match Operation"
* status = #active
* kind = #operation
* description = "The **$bulk-member-match** operation that can be invoked by either a payer or an EHR or other system, allows one health plan to retrieve a unique identifier for a group resource containing matched members from another health plan using a member's demographic, coverage information with an accompanying consent record.  This identifier can then be used to perform subsequent queries and operations. Health Plans implementing a deterministic match will require a match on member id or subscriber id at a minimum (i.e. A pure demographic match will not be supported by such implementations.)."
* affectsState = true
* code = #bulk-member-match
* resource = #Group
* system = false
* type = true
* instance = false
* inputProfile = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-parameters-multi-member-match-bundle-in"
* outputProfile = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-parameters-multi-member-match-bundle-out"
* parameter[0]
* parameter[0].name = #MatchRequest
* parameter[0].use = #in
* parameter[0].min = 1
* parameter[0].max = "1"
* parameter[0].type = #Reference
* parameter[0].targetProfile = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-parameters-multi-member-match-bundle-in"
* parameter[0].documentation = "Bundle of Member information. Repeat bundle for each member to be submitted to bulk member-match, as defined in PDex $multi-member-match request."
// //  * insert parameter(#MemberBundle, #in, 1,"1", #Resource, "Bundle of Member information. Repeat bundle for each member to be submitted to bulk member-match, as defined in pdex-parameters-multi-member-match-bundle-in.")
// * parameter[0].part[0]
//   * insert parameter(#MemberPatient, #in, 1, "1", #Resource, "Parameter submitted by the new plan **SHALL** contain US Core Patient containing member demographics.")
//   * referencedFrom[0]
//     * source = "CoverageToMatch"
//     * sourceId = "beneficiary"
//   * referencedFrom[+]
//     * source = "CoverageToLink"
//     * sourceId = "beneficiary"
// * parameter[+].part[+]
//   * insert parameter(#Consent, #in, 1, "1", #Resource, "Consent held by the system seeking the match that grants permission to access the patient information information on the system for whom a patient is sought.")
// * parameter[=].part[+]
//   * insert parameter(#CoverageToMatch, #in, 1, "1", #Resource, "Parameter that identifies the coverage to be matched by the receiving payer.  It contains the coverage details of health plan coverage provided by the member\, typically from their health plan coverage card.")
// * parameter[=].part[+]
//   * insert parameter(#CoverageToLink, #in, 0, "1", #Resource, "Parameter that identifies the coverage information of the member as they are known by the requesting payer.  This information allows the matching payer to link their member coverage information to that of the requesting payer to ease subsequent exchanges\, including evaluating authorization to share information in subsequent queries.  This parameter is optional as this operation may be invoked by non-payer systems.  However\, it is considered 'mustSupport'.  If the client invoking the operation is a payer\, they SHALL include their coverage information for the member when invoking the operation.")
// * parameter[=].part[+]
//   * insert parameter(#MemberIdentifier, #out, 1, "1", #Identifier, "This is the member identifier information for the patient as known by the server that is the target of the operation.")

* parameter[1]
* parameter[1].name = #MatchResponse
* parameter[1].use = #out
* parameter[1].min = 1
* parameter[1].max = "1"
* parameter[1].type = #Reference
* parameter[1].targetProfile = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-parameters-multi-member-match-bundle-out"
* parameter[1].documentation = "Bundle of Groups returned from Member Match Operation. There can be up to three (3) groups: Matched, Not-Matched and ConsentConstrained."


// * parameter[+].name = #ResourceIdentifier
// * parameter[=].resource = PDexMemberMatchGroup
// * parameter[=].use = #out
// * parameter[=].min = 0
// * parameter[=].max = "1"
// * parameter[=].type = #Parameters
// * parameter[=].documentation = "A group resource representing matched members."


// * parameter[+].name = #NoMatch
// * parameter[=].resource = PDexMemberNoMatchGroup
// * parameter[=].use = #out
// * parameter[=].min = 0
// * parameter[=].max = "1"
// * parameter[=].type = #Parameters
// * parameter[=].documentation = "A group resource representing Non-Matched members."

// * parameter[+].name = #ConsentConstraint
// * parameter[=].resource = PDexMemberNoMatchGroup
// * parameter[=].use = #out
// * parameter[=].min = 0
// * parameter[=].max = "1"
// * parameter[=].type = #Parameters
// * parameter[=].documentation = "A group resource representing members that may have matched but Payer is unable to comply with Consent conditions."



---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/pdex-payer-access-server-capability-statement.fsh

Instance: pdex-payer-access-server
InstanceOf: CapabilityStatement
Title: "PDex Payer-Access Server CapabilityStatement"
Description: "This Section describes the expected capabilities of the PDex Payer-to-Payer API Server actor which supports US Core 3.1.1 or US Core 6.1.0 and is responsible for providing responses to the queries submitted by PDex Payer-to-Payer Requestors. The complete list of FHIR profiles, RESTful operations, and search parameters supported by PDex Payer Access Server for US Core 3.1.1 and US Core 6.1.0 are defined. PDex Payer Access Clients have the option of choosing from this list to access necessary data based on their local use cases and other contextual requirements."
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension.valueCode = #fm
* url = "http://hl7.org/fhir/us/davinci-pdex/CapabilityStatement/pdex-payer-access-server"
* version = "2.1.0"
* name = "PdexPayerAccessServerCapabilityStatement"
* title = "PDex Payer Access Server CapabilityStatement"
* status = #active
* experimental = false
* date = "2024-05-02"
* publisher = "HL7 International / Financial Management"
* contact[0].name = "HL7 International / Financial Management"
* contact[=].telecom[0].system = #url
* contact[=].telecom[=].value = "http://www.hl7.org/Special/committees/fm"
* contact[=].telecom[+].system = #email
* contact[=].telecom[=].value = "fm@lists.HL7.org"
* contact[+].name = "Mark Scrimshire (mark.scrimshire@onyxhealth.io)"
* contact[=].telecom.system = #email
* contact[=].telecom.value = "mailto:mark.scrimshire@onyxhealth.io"
* contact[+].name = "HL7 International - Financial Management"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://www.hl7.org/Special/committees/fm"
* description = "This Section describes the expected capabilities of the PDex Payer Access Server actor which is responsible for providing responses to the queries submitted by the PDex Payer Access Requestors. The complete list of FHIR profiles, RESTful operations, and search parameters supported by PDex Payer Access Servers are defined. PDex Payer Access Clients have the option of choosing from this list to access necessary data based on their local use cases and other contextual requirements."
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* kind = #requirements
* fhirVersion = #4.0.1
* format = #json
* patchFormat = #application/json-patch+json
* implementationGuide = "http://hl7.org/fhir/us/davinci-pdex/ImplementationGuide/hl7.fhir.us.davinci-pdex|2.0.0"
* rest.mode = #server
* rest.documentation = "The PDex Payer Access Server **SHALL**: \n1. Support the US Core 3.1.1 or US Core 6.1.0 resources accessed via the Group resource.\n2. Implement the RESTful behavior according to the FHIR specification for bulk asynchronous access.\n3. Support json source formats for all US Core and PDex interactions. \n4. Return the following response classes:\n  - (Status 400): invalid parameter\n  - (Status 401/4xx): unauthorized request\n  - (Status 403): insufficient scope \n  - (Status 404): unknown resource \n  - (Status 410): deleted resource.\n\nThe PDex Payer Access Server **SHOULD**: \n1. Identify the US Core profiles supported as part of the FHIR `meta.profile` attribute for each instance."
* rest.security.description = "1. See the [US Core Security Considerations](http://hl7.org/fhir/us/core/security.html) section for requirements and recommendations. 2. A server **SHALL** reject any unauthorized requests by returning an `HTTP 401` unauthorized response code."
* rest.resource[0].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
// ------------------------------------

// Update Group
* rest.resource[=].type = #Group
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-member-match-group"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Allows discovery of existing groups. SHOULD be limited to groups a requestor is permitted to access."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Allows retrieval of a specific Group Resource."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[=].documentation = "Allows retrieval of a historical version of a Group Resource."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[=].documentation = "Allows review of changes to a Group Resource over time."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].interaction[=].documentation = "Retrieve the change history fora Group Resource."
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Group-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "characteristic"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Group-characteristic"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A common characteristic of all members of a group."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "Group-characteristic-value-reference"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/davinci-atr/SearchParameter/Group-characteristic-value-reference"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "multipleAnd: It's up to the server whether the parameter may repeat in order to specify multiple values that must all be true. multipleOr: The parameter may only have one value (no comma separators)."
* rest.resource[=].operation[0].name = "bulk-member-match"
* rest.resource[=].operation[=].definition = "http://hl7.org/fhir/us/davinci-pdex/OperationDefinition/bulk-member-match"
* rest.resource[=].operation[=].documentation = "Client will submit multi-member-match-request bundle. Server will respond with a multi-member-match-response and instantiate a Group resource conforming to the PDexMemberMatchGroup that contains a set of matched members that the Server identified."
* rest.resource[=].operation[+].name = "davinci-data-export"
* rest.resource[=].operation[=].definition = "http://hl7.org/fhir/us/davinci-atr/OperationDefinition/davinci-data-export"
* rest.resource[=].operation[=].documentation = "Each DaVinci use case as part of its implementation guide can define the exportType parameter and the behavior expected."

// ----------------------------------


---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/pdex-provider-access-server-capability-statement.fsh

Instance: pdex-provider-access-server
InstanceOf: CapabilityStatement
Title: "PDex provider-access Server CapabilityStatement"
Description: "This Section describes the expected capabilities of the PDex Payer-to-Payer API Server actor which supports US Core 3.1.1 or US Core 6.1.0 and is responsible for providing responses to the queries submitted by PDex Payer-to-Payer Requestors. The complete list of FHIR profiles, RESTful operations, and search parameters supported by PDex Provider Access Server for US Core 3.1.1 and US Core 6.1.0 are defined. PDex Provider Access Clients have the option of choosing from this list to access necessary data based on their local use cases and other contextual requirements."
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension.valueCode = #fm
* url = "http://hl7.org/fhir/us/davinci-pdex/CapabilityStatement/pdex-provider-access-server"
* version = "2.1.0"
* name = "PdexProviderAccessServerCapabilityStatement"
* title = "PDex Provider Access Server CapabilityStatement"
* status = #active
* experimental = false
* date = "2024-05-02"
* publisher = "HL7 International / Financial Management"
* contact[0].name = "HL7 International / Financial Management"
* contact[=].telecom[0].system = #url
* contact[=].telecom[=].value = "http://www.hl7.org/Special/committees/fm"
* contact[=].telecom[+].system = #email
* contact[=].telecom[=].value = "fm@lists.HL7.org"
* contact[+].name = "Mark Scrimshire (mark.scrimshire@onyxhealth.io)"
* contact[=].telecom.system = #email
* contact[=].telecom.value = "mailto:mark.scrimshire@onyxhealth.io"
* contact[+].name = "HL7 International - Financial Management"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://www.hl7.org/Special/committees/fm"
* description = "This Section describes the expected capabilities of the PDex Provider Access Server actor which is responsible for providing responses to the queries submitted by the PDex Provider Access Requestors. The complete list of FHIR profiles, RESTful operations, and search parameters supported by PDex Provider Access Servers are defined. PDex Provider Access Clients have the option of choosing from this list to access necessary data based on their local use cases and other contextual requirements."
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* kind = #requirements
* fhirVersion = #4.0.1
* format = #json
* patchFormat = #application/json-patch+json
* implementationGuide = "http://hl7.org/fhir/us/davinci-pdex/ImplementationGuide/hl7.fhir.us.davinci-pdex|2.0.0"
* rest.mode = #server
* rest.documentation = "The PDex Provider Access Server **SHALL**: \n1. Support the US Core 3.1.1 or US Core 6.1.0 resources accessed via the Group resource.\n2. Implement the RESTful behavior according to the FHIR specification for bulk asynchronous access.\n3. Support json source formats for all US Core and PDex interactions. \n4. Return the following response classes:\n  - (Status 400): invalid parameter\n  - (Status 401/4xx): unauthorized request\n  - (Status 403): insufficient scope \n  - (Status 404): unknown resource \n  - (Status 410): deleted resource.\n\nThe PDex Provider Access Server **SHOULD**: \n1. Identify the US Core profiles supported as part of the FHIR `meta.profile` attribute for each instance."
* rest.security.description = "1. See the [US Core Security Considerations](http://hl7.org/fhir/us/core/security.html) section for requirements and recommendations. 2. A server **SHALL** reject any unauthorized requests by returning an `HTTP 401` unauthorized response code."
* rest.resource[0].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
// ------------------------------------

// Update Group
* rest.resource[=].type = #Group
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-atr/StructureDefinition/atr-group"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-provider-group"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Allows discovery of existing groups. SHOULD be limited to groups a requestor is permitted to access."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Allows retrieval of a specific Group Resource."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[=].documentation = "Allows retrieval of a historical version of a Group Resource."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[=].documentation = "Allows review of changes to a Group Resource over time."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].interaction[=].documentation = "Retrieve the change history fora Group Resource."
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Group-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "characteristic"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Group-characteristic"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A common characteristic of all members of a group."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "Group-characteristic-value-reference"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/davinci-atr/SearchParameter/Group-characteristic-value-reference"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "multipleAnd: It's up to the server whether the parameter may repeat in order to specify multiple values that must all be true. multipleOr: The parameter may only have one value (no comma separators)."
* rest.resource[=].operation[+].name = "davinci-data-export"
* rest.resource[=].operation[=].definition = "http://hl7.org/fhir/us/davinci-atr/OperationDefinition/davinci-data-export"
* rest.resource[=].operation[=].documentation = "Each DaVinci use case as part of its implementation guide can define the exportType parameter and the behavior expected."

// ----------------------------------


---

File: repos/HL7_SLASH_davinci-epdx/input/fsh/pdex-server-capability-statement-6-1.fsh

Instance: pdex-server-6-1
InstanceOf: CapabilityStatement
Title: "PDex Server CapabilityStatement with US core 6.1 support"
Description: "This Section describes the expected capabilities of the PDex with US Core 6.1 Support Server actor which is responsible for providing responses to the queries submitted by the PDex Requestors. The complete list of FHIR profiles, RESTful operations, and search parameters supported by PDex and US Core Servers are defined. Systems implementing this capability statement should meet the ONC 2015 Common Clinical Data Set (CCDS) access requirement for Patient Selection 170.315(g)(7) and Application Access - Data Category Request 170.315(g)(8) and the ONC [U.S. Core Data for Interoperability (USCDI) Version 3 July 2022](https://www.healthit.gov/isa/sites/isa/files/2022-07/USCDI-Version-3-July-2022-Final.pdf).  PDex Clients have the option of choosing from this list to access necessary data based on their local use cases and other contextual requirements."
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension.valueCode = #fm
* url = "http://hl7.org/fhir/us/davinci-pdex/CapabilityStatement/pdex-server-6-1"
* version = "2.1.0"
* name = "PDexServerCapabilityStatement61"
* title = "PDex Server CapabilityStatement with US core 6.1 support"
* status = #active
* experimental = false
* date = "2024-10-20"
* publisher = "HL7 International / Financial Management"
* contact[0].name = "HL7 International / Financial Management"
* contact[=].telecom[0].system = #url
* contact[=].telecom[=].value = "http://www.hl7.org/Special/committees/fm"
* contact[=].telecom[+].system = #email
* contact[=].telecom[=].value = "fm@lists.HL7.org"
* contact[+].name = "Mark Scrimshire (mark.scrimshire@onyxhealth.io)"
* contact[=].telecom.system = #email
* contact[=].telecom.value = "mailto:mark.scrimshire@onyxhealth.io"
* contact[+].name = "HL7 International - Financial Management"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://www.hl7.org/Special/committees/fm"
* description = "This Section describes the expected capabilities of the PDex with US Core 6.1 Support Server actor which is responsible for providing responses to the queries submitted by the PDex Requestors. The complete list of FHIR profiles, RESTful operations, and search parameters supported by PDex and US Core Servers are defined. Systems implementing this capability statement should meet the ONC 2015 Common Clinical Data Set (CCDS) access requirement for Patient Selection 170.315(g)(7) and Application Access - Data Category Request 170.315(g)(8) and the ONC [U.S. Core Data for Interoperability (USCDI) Version 3 July 2022](https://www.healthit.gov/isa/sites/isa/files/2022-07/USCDI-Version-3-July-2022-Final.pdf).  PDex Clients have the option of choosing from this list to access necessary data based on their local use cases and other contextual requirements."
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* copyright = "Used by permission of HL7 International, all rights reserved Creative Commons License"
* kind = #requirements
* instantiates = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server"
* instantiates.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* instantiates.extension.valueCode = #SHALL
* fhirVersion = #4.0.1
* format[0] = #json
* format[+] = #xml
* format[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHALL
* format[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHOULD
* patchFormat = #application/json-patch+json
* patchFormat.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* patchFormat.extension.valueCode = #SHOULD
* implementationGuide[0] = "http://hl7.org/fhir/smart-app-launch/ImplementationGuide/hl7.fhir.uv.smart-app-launch|2.1.0"
* implementationGuide[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* implementationGuide[=].extension.valueCode = #SHOULD
* implementationGuide[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* implementationGuide[=].extension.valueCode = #SHOULD
* rest.mode = #server
* rest.documentation = "The PDex Server with US Core 6.1. Support **SHALL**:\n\n1. Support the US Core Patient resource profile AND at least one additional resource profile from the list of US Core Profiles AND and all Must Support US Core Profiles and resources it references.\n     - Refer to the US Core 6.1 Capability Statement to determine [Must Support Reference between Profiles](https://www.hl7.org/fhir/us/core/STU6.1/CapabilityStatement-us-core-server.html#summary-of-must-support-references-between-profiles). The table summarizes the Must Support references to other US Core Profiles and FHIR resources for each US Core Profile:\n1. Implement the RESTful behavior according to the FHIR specification.\n1. Follow the requirements documented in the [US Core 6.1 General Requirements](https://hl7.org/fhir/us/core/STU6.1/general-requirements.html) and [US Core Must Support](https://hl7.org/fhir/us/core/STU6.1/must-support.html) pages\n1. Return the following response classes:\n   - (Status 400): invalid parameter\n   - (Status 401/4xx): unauthorized request\n   - (Status 403): insufficient scopes\n   - (Status 404): unknown resource\n1. Support JSON source formats for all US Core interactions.\n\nThe US Core Server **SHOULD**:\n\n1. Follow the guidance documented in the [US Core 6.1 General Guidance](https://hl7.org/fhir/us/core/STU6.1/general-guidance.html) page\n1. Support XML source formats for all US Core interactions.\n1. Identify the US Core profiles supported as part of the FHIR `meta.profile` attribute for each instance.\n"
* rest.security.description = "1. See the [US Core 6.1 General Security Considerations](https://hl7.org/fhir/us/core/STU6.1/security.html) section for requirements and recommendations.\n1. A server **SHALL** reject any unauthorized requests by returning an `HTTP 401` \"Unauthorized\", `HTTP 403` \"Forbidden\", or `HTTP 404` \"Not Found\""
* rest.resource[0].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "clinical-status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #AllergyIntolerance
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-allergyintolerance"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchRevInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchRevInclude.extension.valueCode = #SHALL
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "clinical-status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-allergyintolerance-clinical-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-allergyintolerance-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #CarePlan
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careplan"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "* Additional considerations for systems aligning with [HL7 Consolidated (C-CDA)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=492) Care Plan requirements:\n    - US Core Goal **SHOULD** be present in CarePlan.goal\n    - US Core Condition **SHOULD** be present in CarePlan.addresses\n    - Assessment and Plan **MAY** be included as narrative text"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchRevInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchRevInclude.extension.valueCode = #SHALL
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-careplan-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-careplan-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *second + time offset*.\n\nA server **SHALL** support a value precise to the *second + time offset*."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-careplan-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-careplan-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "role"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #CareTeam
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careteam"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "In order to access care team member's names, identifiers, locations, and contact information, the CareTeam profile supports several types of care team participants. They are represented as references to other profiles and include the following four profiles which are marked as must support:\n  1. US Core Practitioner Profile\n  1. US Core PractitionerRole Profile\n  1. US Core Patient Profile\n  1. US Core RelatedPerson Profile\n\n  * Although *both* US Core Practitioner Profile and US Core PractitionerRole are must support, the server system is not required to support both types of references (and `_include` search parameters), but **SHALL** support *at least* one of them.\n  * The client application **SHALL** support all four profile references.\n  * Because the *US Core PractitionerRole Profile* supplies the provider's location and contact information and a reference to the Practitioner, server systems **SHOULD** reference it instead of the *US Core Practitioner Profile*.\n  * Servers that supports only *US Core Practitioner Profile* **SHALL** provide implementation specific guidance how to access a provider's location and contact information using only the Practitioner resource."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchInclude[0] = "CareTeam:participant:PractitionerRole"
* rest.resource[=].searchInclude[+] = "CareTeam:participant:Practitioner"
* rest.resource[=].searchInclude[+] = "CareTeam:participant:Patient"
* rest.resource[=].searchInclude[+] = "CareTeam:participant:RelatedPerson"
* rest.resource[=].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest.resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest.resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest.resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchRevInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchRevInclude.extension.valueCode = #SHALL
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-careteam-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-careteam-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "role"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-careteam-role"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "recorded-date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "asserted-date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "clinical-status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "onset-date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "abatement-date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "clinical-status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "encounter"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #Condition
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition-encounter-diagnosis"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition-problems-health-concerns"
* rest.resource[=].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].documentation = "* For Encounter Diagnosis use the *US Core Condition Encounter Diagnosis Profile*.\n    * When `Condition.category` is \"encounter-diagnosis\" the encounter, **SHOULD** be referenced in `Condition.encounter`.\n* For Problems and Health Concerns use the *US Core Condition Problems and Health Concerns Profile*.\n    * When `Condition.category` is a \"problems-list-item\", the `Condition.clinicalStatus **SHOULD NOT** be unknown.\n* There is no single element in Condition that represents the date of diagnosis. It may be the assertedDate Extension, `Condition.onsetDateTime`, or `Condition.recordedDate`.\n    * Although all three are marked as must support, the server is not required to support all.\n\t* A server **SHALL** support `Condition.recordedDate`.\n    * A server **SHALL** support at least one of the assertedDate Extension and `Condition.onsetDateTime`. A server may support both, which means they support all 3 locations.\n    * The client application **SHALL** support all three elements."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchRevInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchRevInclude.extension.valueCode = #SHALL
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-condition-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "clinical-status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-condition-clinical-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-condition-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "onset-date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-condition-onset-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *second + time offset*.\n\nA server **SHALL** support a value precise to the *second + time offset*."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "asserted-date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-condition-asserted-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *second + time offset*.\n\nA server **SHALL** support a value precise to the *second + time offset*."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "recorded-date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-condition-recorded-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *second + time offset*.\n\nA server **SHALL** support a value precise to the *second + time offset*."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "abatement-date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-condition-abatement-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *second + time offset*.\n\nA server **SHALL** support a value precise to the *second + time offset*."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-condition-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "encounter"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-condition-encounter"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."

// ---------------------------------------
* rest.resource[+].type = #Consent
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-provider-consent"
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].interaction[+].code = #search-type
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #history-instance
* rest.resource[=].interaction[+].code = #history-type
* rest.resource[=].readHistory = true
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[0].name = "_id"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-condition-patient"
* rest.resource[=].searchParam[=].type = #reference

// ---------------------------------------

* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHALL
* rest.resource[=].type = #Coverage
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-coverage"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchRevInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchRevInclude.extension.valueCode = #SHALL
* rest.resource[=].searchParam.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam.extension.valueCode = #SHALL
* rest.resource[=].searchParam.name = "patient"
* rest.resource[=].searchParam.definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-coverage-patient"
* rest.resource[=].searchParam.type = #reference
* rest.resource[=].searchParam.documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "type"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #Device
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-implantable-device"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-device"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "* Implantable medical devices that have UDI information **SHALL** represent the UDI code in `Device.udiCarrier.carrierHRF`.\n   - All of the five UDI-PI elements that are present in the UDI code **SHALL** be represented in the corresponding US Core Implantable Device Profile element.\n   \n   UDI may not be present in all scenarios such as historical implantable devices, patient reported implant information, payer reported devices, or improperly documented implants. If UDI is not present and the manufacturer and/or model number information is available, they **SHOULD** be included to support historical reports of implantable medical devices as follows:\n\n   manufacturer -> `Device.manufacturer`  \n   model -> `Device.model`  \n\n* Servers **SHOULD** support query by Device.type to allow clients to request the patient's devices by a specific type. Note: The Device.type is too granular to differentiate implantable vs. non-implantable devices."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchRevInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchRevInclude.extension.valueCode = #SHALL
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-device-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-device-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-device-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #DiagnosticReport
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab"
* rest.resource[=].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchRevInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchRevInclude.extension.valueCode = #SHALL
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-diagnosticreport-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-diagnosticreport-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-diagnosticreport-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-diagnosticreport-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-diagnosticreport-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *second + time offset*.\n\nA server **SHALL** support a value precise to the *second + time offset*."
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "type"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "type"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "period"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #DocumentReference
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "* The `DocumentReference.type` binding **SHALL** support at a minimum the [US Core 6.1 5 Common Clinical Notes](https://hl7.org/fhir/us/core/STU6.1/ValueSet-us-core-clinical-note-type.html) and may extend to the full US Core DocumentReference Type Value Set\n* The DocumentReference resources can represent the referenced content using either an address where the document can be retrieved using `DocumentReference.attachment.url` or the content as inline base64 encoded data using `DocumentReference.attachment.data`.\n    *  Although both are marked as must support, the server system is not required to support an address, and inline base64 encoded data, but **SHALL** support at least one of these elements.\n    *  The client application **SHALL** support both elements.\n    *  The `content.url` may refer to a FHIR Binary Resource (i.e. [base]/Binary/[id]), FHIR Document Bundle (i.e [base]/Bundle/[id] or another endpoint.\n        * If the endpoint is outside the FHIR base URL, it **SHOULD NOT** require additional authorization to access.\n* Every DocumentReference must have a responsible Organization. The organization responsible for the DocumentReference **SHALL** be present either in `DocumentReference.custodian` or accessible in the Provenance resource targeting the DocumentReference using `Provenance.agent.who` or `Provenance.agent.onBehalfOf`."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchRevInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchRevInclude.extension.valueCode = #SHALL
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-documentreference-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-documentreference-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-documentreference-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-documentreference-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-documentreference-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-documentreference-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *second + time offset*.\n\nA server **SHALL** support a value precise to the *second + time offset*."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "period"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-documentreference-period"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *second + time offset*.\n\nA server **SHALL** support a value precise to the *second + time offset*."
* rest.resource[=].operation.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].operation.extension.valueCode = #SHALL
* rest.resource[=].operation.name = "docref"
* rest.resource[=].operation.definition = "http://hl7.org/fhir/us/core/OperationDefinition/docref"
* rest.resource[=].operation.documentation = "A server **SHALL** be capable of responding to a $docref operation and  capable of returning at least a reference to a generated CCD document, if available. **MAY** provide references to other 'on-demand' and 'stable' documents (or 'delayed/deferred assembly') that meet the query parameters as well. If a context date range is supplied the server ** SHOULD**  provide references to any document that falls within the date range.  If no date range is supplied, then the server **SHALL** provide references to last or current document(s).  **SHOULD** document what resources, if any, are returned as included resources\n\n`GET [base]/DocumentReference/$docref?patient=[id]`"
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "type"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "class"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "location"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "discharge-disposition"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #Encounter
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "* The Encounter resource can represent a reason using either a code with `Encounter.reasonCode`, or a reference with `Encounter.reasonReference` to  Condition or other resource.\n   * Although both are marked as must support, the server systems are not required to support both a code and a reference, but they **SHALL** support *at least one* of these elements.\n   * The client application **SHALL** support both elements.\n   * if `Encounter.reasonReference` references an Observation, it **SHOULD** conform to a US Core Observation if applicable. (for example, a laboratory result should conform to the US Core Laboratory Result Observation Profile)\n\n* The location address can be represented by either by the Location referenced by `Encounter.location.location` or indirectly through the Organization referenced by `Encounter.serviceProvider`.\n   * Although both are marked as must support, the server systems are not required to support both `Encounter.location.location` and `Encounter.serviceProvider`, but they **SHALL** support *at least one* of these elements.\n   * The client application **SHALL** support both elements.\n   * if using `Encounter.location.location` it **SHOULD** conform to US Core Location."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchRevInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchRevInclude.extension.valueCode = #SHALL
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-encounter-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "class"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-encounter-class"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-encounter-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *second + time offset*.\n\nA server **SHALL** support a value precise to the *second + time offset*."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-encounter-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-encounter-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "location"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-encounter-location"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-encounter-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-encounter-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "discharge-disposition"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-encounter-discharge-disposition"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHALL
* rest.resource[=].type = #Endpoint
* rest.resource[=].documentation = "The Media Resource is a Must Support referenced resource when using the US Core PractitionerRole Profile."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "target-date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "description"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "lifecycle-status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #Goal
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-goal"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "* Although both `Goal.startDate` and `Goal.target.dueDate` are marked as must support, the server system is not required to support both, but **SHALL** support at least one of these elements. The client application **SHALL** support both elements."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchRevInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchRevInclude.extension.valueCode = #SHALL
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "lifecycle-status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-goal-lifecycle-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-goal-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "target-date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-goal-target-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *day*.\n\nA server **SHALL** support a value a value precise to the *day*."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "description"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-goal-description"
* rest.resource[=].searchParam[=].type = #token
// ------------------------------------

// Add Group
* rest.resource[+].type = #Group
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-atr/StructureDefinition/atr-group"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-provider-group"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-member-match-group"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Allows discovery of existing groups. SHOULD be limited to groups a requestor is permitted to access."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Allows retrieval of a specific Group Resource."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[=].documentation = "Allows retrieval of a historical version of a Group Resource."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[=].documentation = "Allows review of changes to a Group Resource over time."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].interaction[=].documentation = "Retrieve the change history fora Group Resource."
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Group-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "characteristic"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Group-characteristic"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A common characteristic of all members of a group."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "Group-characteristic-value-reference"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/davinci-atr/SearchParameter/Group-characteristic-value-reference"
* rest.resource[=].searchParam[=].type = #composite
* rest.resource[=].searchParam[=].documentation = "multipleAnd: It's up to the server whether the parameter may repeat in order to specify multiple values that must all be true. multipleOr: The parameter may only have one value (no comma separators)."
* rest.resource[=].operation[0].name = "bulk-member-match"
* rest.resource[=].operation[=].definition = "http://hl7.org/fhir/us/davinci-pdex/OperationDefinition/bulk-member-match"
* rest.resource[=].operation[=].documentation = "Client will submit multi-member-match-request bundle. Server will respond with a multi-member-match-response and instantiate a Group resource conforming to the PDexMemberMatchGroup that contains a set of matched members that the Server identified."
* rest.resource[=].operation[+].name = "davinci-data-export"
* rest.resource[=].operation[=].definition = "http://hl7.org/fhir/us/davinci-atr/OperationDefinition/davinci-data-export"
* rest.resource[=].operation[=].documentation = "Each DaVinci use case as part of its implementation guide can define the exportType parameter and the behavior expected."


// -----------------------
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #Immunization
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "* Based upon the ONC U.S. Core Data for Interoperability (USCDI) requirements, CVX vaccine codes are required and the NDC vaccine codes **SHOULD** be supported as translations to them."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchRevInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchRevInclude.extension.valueCode = #SHALL
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-immunization-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-immunization-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-immunization-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *second + time offset*.\n\nA server **SHALL** support a value precise to the *second + time offset*."
* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHALL
* rest.resource[=].type = #Location
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-location"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "* The US Core Location  and PractitionerRole Profiles are not explicitly referenced in any US Core Profile. However they **SHOULD** be used as the default profile if referenced by another US Core profile."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-location-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "address"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-location-address"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "address-city"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-location-address-city"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "address-state"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-location-address-state"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "address-postalcode"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-location-address-postalcode"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHALL
* rest.resource[=].type = #Medication
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medication"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "* The  MedicationRequest resource can represent a medication, using an external reference to a Medication resource. If an external Medication Resource is used in a MedicationRequest, then the READ  **SHALL**  be supported."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "type"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #MedicationDispense
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationdispense"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-medicationdispense"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "* The MedicationDispense resources can represent a medication using either a code or refer to the Medication resource. When referencing Medication, the resource may be [contained](http://hl7.org/fhir/R4/references.html#contained) or an external resource. The server application **MAY** choose any one way or more than one method, but if an external reference to Medication is used, the server **SHALL** support the _include` parameter for searching this element. The client application must support all methods.\n\n For example, A server **SHALL** be capable of returning dispense records for all medications for a patient using one of or both:\n\n `GET /MedicationDispense?patient=[id]`\n\n `GET /MedicationDispense?patient=[id]&_include=MedicationDispense:medication`\n"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchInclude = "MedicationDispense:medication"
* rest.resource[=].searchInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchInclude.extension.valueCode = #SHOULD
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchRevInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchRevInclude.extension.valueCode = #SHALL
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-medicationdispense-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-medicationdispense-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-medicationdispense-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."

* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "intent"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "encounter"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "intent"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "intent"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "authoredon"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "intent"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #MedicationRequest
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "* The MedicationRequest resources can represent a medication using either a code or refer to the Medication resource. When referencing Medication, the resource may be [contained](http://hl7.org/fhir/R4/references.html#contained) or an external resource. The server application **MAY** choose any one way or more than one method, but if an external reference to Medication is used, the server **SHALL** support the _include` parameter for searching this element. The client application must support all methods.\n\n For example, A server **SHALL** be capable of returning all medications for a patient using one of or both:\n\n `GET /MedicationRequest?patient=[id]`\n\n `GET /MedicationRequest?patient=[id]&_include=MedicationRequest:medication`\n\n* The MedicationRequest resource can represent that information is from a secondary source using either a boolean flag or reference in `MedicationRequest.reportedBoolean`, or a reference using `MedicationRequest.reportedReference` to Practitioner or other resource.\n   *   Although both are marked as must support, the server systems are not required to support both a boolean and a reference, but **SHALL** choose to support at least one of these elements.\n   *  The client application **SHALL** support both elements."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchInclude = "MedicationRequest:medication"
* rest.resource[=].searchInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchInclude.extension.valueCode = #SHOULD
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchRevInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchRevInclude.extension.valueCode = #SHALL
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-medicationrequest-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "intent"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-medicationrequest-intent"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-medicationrequest-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "encounter"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-medicationrequest-encounter"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "authoredon"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-medicationrequest-authoredon"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *second + time offset*.\n\nA server **SHALL** support a value precise to the *second + time offset*."
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"

* rest.resource[=].type = #Observation
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-pregnancystatus"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-pregnancyintent"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-occupation"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-respiratory-rate"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-simple-observation"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-heart-rate"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-body-temperature"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/pediatric-weight-for-height"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-pulse-oximetry"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-smokingstatus"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-sexual-orientation"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-head-circumference"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-body-height"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-bmi"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-screening-assessment"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-blood-pressure"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-clinical-result"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/pediatric-bmi-for-age"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/head-occipital-frontal-circumference-percentile"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-body-weight"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-vital-signs"
* rest.resource[=].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].documentation = "* Systems **SHOULD** support `Observation.effectivePeriod` to accurately represent tests that are collected over a period of time (for example, a 24-Hour Urine Collection test).\n* An Observation without a value, **SHALL** include a reason why the data is absent unless there are component observations, or references to other Observations that are grouped within it\n    * Systems that never provide an observation without a value are not required to support `Observation.dataAbsentReason`\n*  An `Observation.component` without a value, **SHALL** include a reason why the data is absent.\n    * Systems that never provide an component observation without a component value are not required to support `Observation.component.dataAbsentReason`.\n* Systems **SHOULD** support `Observation.effectivePeriod` to accurately represent procedure tests that are collected over a period of time.\n\n"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchRevInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchRevInclude.extension.valueCode = #SHALL
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-observation-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-observation-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-observation-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-observation-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *second + time offset*.\n\nA server **SHALL** support a value precise to the *second + time offset*."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-observation-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."

* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHALL
* rest.resource[=].type = #Organization
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "* Systems **SHALL** support National Provider Identifier (NPI) for organizations and **SHOULD** support Clinical Laboratory Improvement Amendments (CLIA) identifiers for `Organization.Identifier`."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD

* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-organization-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "address"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-organization-address"
* rest.resource[=].searchParam[=].type = #string

* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "birthdate"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "family"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "family"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "gender"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "birthdate"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "name"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "gender"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "name"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "death-date"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "family"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #Patient
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "* For ONC's USCDI requirements, each Patient must support the following additional elements. These elements are included in the formal definition of the profile. The patient examples include all of these elements.\n\n  1. contact detail (e.g. a telephone number or an email address)\n  1. a communication language\n  1. a race\n  1. an ethnicity\n  1. a birth sex*\n  1. previous name\n     - Previous name is represented by providing an end date in the `Patient.name.period` element for a previous name.\n  1. suffix\n     - Suffix is represented using the `Patient.name.suffix` element.\n* The Patient's Social Security Numbers **SHOULD NOT** be used as a patient identifier in `Patient.identifier.value`."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD

* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchRevInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchRevInclude.extension.valueCode = #SHALL
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "birthdate"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-birthdate"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *day*.\n\nA server **SHALL** support a value a value precise to the *day*."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "death-date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-death-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *day*.\n\nA server **SHALL** support a value a value precise to the *day*."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "family"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-family"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A server **SHALL** support a value precise to the *day*."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "gender"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-gender"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "given"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-given"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].operation.name = "member-match"
* rest.resource[=].operation.definition = "http://hl7.org/fhir/us/davinci-hrex/OperationDefinition/member-match"

* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHALL
* rest.resource[=].type = #Practitioner
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "Servers that support only US Core Practitioner Profile **SHALL** provide implementation specific guidance how to access a provider’s location and contact information using only the Practitioner resource.\n"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-practitioner-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-practitioner-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-practitioner-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."

* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHALL
* rest.resource[=].type = #PractitionerRole
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "* The US Core Location  and PractitionerRole Profiles are not explicitly referenced in any US Core Profile. However they **SHOULD** be used as the default profile if referenced by another US Core profile."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchInclude[0] = "PractitionerRole:endpoint"
* rest.resource[=].searchInclude[+] = "PractitionerRole:practitioner"
* rest.resource[=].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest.resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "specialty"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-practitionerrole-specialty"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "practitioner"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-practitionerrole-practitioner"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."

* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #Procedure
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "* Procedure codes can be taken from SNOMED-CT, CPT, HCPCS II, ICD-10-PCS, CDT. LOINC.\n  * Only LOINC concepts that reflect actual procedures **SHOULD** be used\n* A procedure including an implantable device **SHOULD** use `Procedure.focalDevice` with a reference to the *US Core Implantable Device Profile*."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchRevInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchRevInclude.extension.valueCode = #SHALL
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-procedure-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-procedure-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-procedure-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *second + time offset*.\n\nA server **SHALL** support a value precise to the *second + time offset*."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-procedure-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."

* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHALL
* rest.resource[=].type = #Provenance
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-provenance"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-provenance"
* rest.resource[=].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].documentation = "* The US Core Provenance resource **SHALL** be supported for these US Core resources:\n    * AllergyIntolerance\n    * CarePlan\n    * CareTeam\n    * Condition\n    * Coverage\n    * Device\n    * DiagnosticReport\n    * DocumentReference\n    * Encounter\n    * Goal\n    * Immunization\n    * MedicationDispense\n    * MedicationRequest\n    * Observation\n    * Patient\n    * Procedure\n    * QuestionnaireResponse\n    * RelatedPerson\n    * ServiceRequest\n* If a system receives a provider in `Provenance.agent.who` as free text they must capture who sent them the information as the organization. On request they **SHALL** provide this organization as the source and **MAY** include the free text provider.\n* Systems that need to know the activity has occurred **SHOULD** populate the activity."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHOULD
* rest.resource[=].type = #Questionnaire
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "US Core defines two ways to represent the questions and responses to screening and assessment instruments:\n\n- Observation: US Core Observation Screening Assessment Profile\n- Questionnaire/QuestionnaireResponse: SDC Base Questionnaire/US Core QuestionnaireResponse Profile\n\nUS Core Servers **SHALL** support US Core Observation Screening Assessment Profile and **SHOULD** support the  SDC Base Questionnaire Profile/US Core QuestionnaireResponse Profile"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type

* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "questionnaire"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "authored"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #QuestionnaireResponse
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-questionnaireresponse"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "US Core defines two ways to represent the questions and responses to screening and assessment instruments:\n\n- Observation: US Core Observation Screening Assessment Profile\n- Questionnaire/QuestionnaireResponse: SDC Base Questionnaire/US Core QuestionnaireResponse Profile\n\nUS Core Servers **SHALL** support US Core Observation Screening Assessment Profile and **SHOULD** support the  SDC Base Questionnaire Profile/US Core QuestionnaireResponse Profile"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchRevInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchRevInclude.extension.valueCode = #SHOULD
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-questionnaireresponse-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-questionnaireresponse-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-questionnaireresponse-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "authored"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-questionnaireresponse-authored"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *second + time offset*.\n\nA server **SHALL** support a value precise to the *second + time offset*."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "questionnaire"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-questionnaireresponse-questionnaire"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."

* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "name"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #RelatedPerson
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-relatedperson"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchRevInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchRevInclude.extension.valueCode = #SHALL
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-relatedperson-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-relatedperson-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-relatedperson-name"
* rest.resource[=].searchParam[=].type = #string

* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "authored"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "authored"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #ServiceRequest
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-servicerequest"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchRevInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchRevInclude.extension.valueCode = #SHALL
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-servicerequest-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-servicerequest-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-servicerequest-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-servicerequest-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "authored"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-servicerequest-authored"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *second + time offset*.\n\nA server **SHALL** support a value precise to the *second + time offset*."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-servicerequest-id"
* rest.resource[=].searchParam[=].type = #token

* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHALL
* rest.resource[=].type = #Specimen
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-specimen"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].referencePolicy.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].referencePolicy.extension.valueCode = #SHOULD
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-specimen-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-specimen-patient"
* rest.resource[=].searchParam[=].type = #reference

* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHOULD
* rest.resource[=].type = #ValueSet
* rest.resource[=].operation.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].operation.extension.valueCode = #SHOULD
* rest.resource[=].operation.name = "expand"
* rest.resource[=].operation.definition = "http://hl7.org/fhir/OperationDefinition/ValueSet-expand"
* rest.resource[=].operation.documentation = "If a server supports DocumentReference for creating, using, and sharing clinical notes, it **SHOULD** also support the `context` and `contextdirection` parameters of the $expand operation to enable clients to determine the supported note and report types, as well as the supported read/write formats for notes on the server."
* rest.interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #MAY
* rest.interaction[=].code = #transaction
* rest.interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #MAY
* rest.interaction[=].code = #batch
* rest.interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #MAY
* rest.interaction[=].code = #search-system
* rest.interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #MAY
* rest.interaction[=].code = #history-system


---

File: repos/HL7_SLASH_davinci-epdx/input/images-source/pdex/authorization-consent.plantuml

@startuml
skinparam svgDimensionStyle false
autonumber
participant "Payer2 | New Payer | Requesting Payer" as Payer2
participant "Payer1 | Old Payer | Receiving Payer" as Payer1
participant "Payer Directory | Certificate Authority" as PayerDirectory
== Connection Intitialization ==
group #LightGreen Step 1a: Verify Exchange, establish mutual TLS, and verify trust.
	Payer2 -> PayerDirectory : Query
  note left
  	Payer2 searches registry
    for Payer1 details
  endnote
	PayerDirectory -> Payer2 : Return endpoint, mutual TLS public cert,
	Payer2 -> Payer2 : Verify Cert
	Payer2 -> Payer1 : Establish Mutual TLS
	Payer1 -> PayerDirectory : Query mutual TLS Public Cert
  note right
  	Payer1 queries registry
    for Payer2 details
  endnote
	PayerDirectory ->> Payer1 : Return mTLS public cert
	Payer1 -> Payer1 : Verify Cert
end
group #lightGreen Step 1b: OAuth 2.0 Dynamic Registration via mTLS connection
	Payer2 -> Payer1 : Request registration (JWT with registration details)
	note left
  	Payer2 submits JWT with
    service registration details
  endnote
  Payer1 -> Payer2 : Return Client Credentials (ClientID/ClientSecret)

end
== Secure Transaction Capability Established ==

== Member Connection ==
group Step 2a: Get $MemberMatch Operation Token
	Payer2 -> Payer1 : Use OAuth2.0 token endpoint to request access \nto $MemberMatch operation only
  Payer1 -> Payer2 : Return access token
  note right
  	Token endpoint issues access token using
    Payer2 OAuth Credentials
  endnote
end
group Step 2b: Establish common member - secure transaction
	Payer2 -> Payer1 : Send bundle (Patient Demographics, \nCoverage & Consent) to $MemberMatch operation
	Payer1 -> Payer1 : Verify member
  Payer1 -> Payer1 : Store or Compute Consent \n(all / non-sensitive) for Member
  note right
  Member: ID
  Payer: ID (Client Credential)
  Policy: all | non-sensitive
  Consent Period: start, end
  This information will be need to be checked
  when Access Token is issued in Step 3.
  An active consent information will only be stored if the Policy
  Scope can be complied with. An inability to comply with the scope
  will lead to a 422 error being returned from the $member-match.
  endnote

	Payer1 -> Payer2 : Return Member Identifier (Member ID)
  note right
    This process assumes Payer1 provides a unique ID for
    the member that crosses all relevant
    contract arrangements.

    Payer1 may determine concurrent coverage is in effect
    and covered by member consent to trigger reciprocal
    app registration and $MemberMatch request

  	Payer2 receives the Member Identifier (Patient FHIR ID) from Payer1.
    The Member Identifier (Patient FHIR ID) is only returned if member
    is matched AND consent can be complied with
    per date and policy constraints.
  endnote
end

group Step 3: Request Access token for Member Access
	Payer2 -> Payer1 : Use OAuth2.0 token endpoint to \nrequest access using Member Identifier
  note right
  	Token endpoint matches to member using
    Member Identifier and queries consent records to find
    the latest active consent that matches on Member and Payer Identifiers.
    The Access Token process then confirms current date is within
    the consent period and the policy scope can be complied with. Checking the consent
    record is active provides for the receiving payer to invalidate the consent record
    if a request is recieved via other channels to cancel the consent.
  endnote
  Payer1 -> Payer2 : Return access token
  note right
  	token is scoped to single Patient
  endnote
end
== Data Requests ==
group #LightBlue Step 4: Exchange PDex (USCDI) Information via API
  Payer2 -> Payer1 : Use Patient-scoped access token to access API
	Payer1 -> Payer2 : Return $everything or \nincremental data as appropriate/supported \nby Payer1 Capability Statement
  note right
  	Use retrieval method, as defined in use case scenarios, such as:
      1.) Individual search against each USCDI resource
      2.) $everything operation
      3.) asynchronous Bulk FHIR methods.
  endnote
end
@enduml


---

File: repos/HL7_SLASH_davinci-epdx/input/images-source/pdex/bulk-p2p-exchange.plantuml

@startuml
skinparam svgDimensionStyle false
participant "Payer2 | New Payer | Requesting Payer" as Payer2
participant "Payer1 | Old Payer | Receiving Payer" as Payer1
== Connection Intitialization ==
group #lightGreen Step 1: OAuth 2.0 Dynamic Registration or alternative
	Payer2 -> Payer1 : Request registration (JWT with registration details)
	note left
  	Payer2 submits JWK Set with
    service registration details
  endnote
  Payer1 -> Payer2 : Return Client Credentials (ClientID/ClientSecret)

end
== Secure Transaction Capability Established ==

== Bulk Member Match ==
group Step 2a: Get $MemberMatch Operation Token
	Payer2 -> Payer1 : Use OAuth2.0 token endpoint to request access \nto $MemberMatch operation only
  Payer1 -> Payer2 : Return access token
  note right
  	Token endpoint issues access token using
    Payer2 OAuth Credentials
  endnote
end
group Step 2b: Establish Common Members - secure operation
	Payer2 -> Payer1 : Send bundle of bundles (Patient Demographics, \nCoverage & Consent for each member) to $MemberMatch operation
	Payer1 -> Payer1 : Match EACH member
  Payer1 -> Payer1 : Store or Compute Consent \n(all / non-sensitive) for EACH Member
  note right
  Member: ID
  Payer: ID (Client Credential)
  Policy: all | non-sensitive
  Consent Period: start, end
  This information will be need to be checked
  when Access Token is issued in Step 3.
  An active consent information will only be stored if the Policy
  Scope can be complied with. An inability to comply with the scope
  will lead to a 422 error being returned from the $member-match for the
  member.
  endnote
  note left
  Successful Match results in Patient/{ID} for Member
  being appended to a dynamically created Group record by Payer 1.
  endnote
	Payer1 -> Payer2 : Return Group Identifier (Group FHIR ID).
  note right
    This process assumes Payer1 provides Patient/{ID} for
    each member that crosses all relevant
    contract arrangements.

    Payer1 may determine concurrent coverage is in effect
    and covered by member consent to trigger reciprocal
    app registration and $MemberMatch requests to Payer 2.

  	Payer2 receives the Group/{ID} from Payer1.
    The Group/{ID} contains matched members where consent
    can be complied with per date and policy constraints.
  endnote
end

group Step 3: Request Access token forGroup/{ID}
	Payer2 -> Payer1 : Use OAuth2.0 token endpoint to \nrequest access using Group/{ID}/$davinci-data-export
  Payer1 -> Payer2 : Return access token
end
== Data Requests ==
group #LightBlue Step 4: Exchange PDex (USCDI) Information via API
  Payer2 -> Payer1 : Use Access Token to call \n/Group/{ID}/$davinci-data-export operation.
	Payer1 -> Payer2 : Performs Async operation as per \nFHIR Bulk Data Export specification to return bundle to requesting Payer
  note right
  	Operation will validate Consent Scope and Valid Consent Period.
    This will be based upon data saved during Member-Match process for
    each Member.
    Payer1 should check whether Member has provided more recent overriding
    consent instruction directly.
  endnote
end
@enduml


---

File: repos/HL7_SLASH_davinci-epdx/input/images-source/pdex/credential-consent-flow.plantuml

@startuml
skinparam svgDimensionStyle false

participant "Payer2 | New Payer | Requesting Payer" as Payer2
participant "Payer1 | Old Payer | Receiving Payer" as Payer1
participant "Payer Directory | Certificate Authority" as PayerDirectory

== Data Requests ==
group #Pink Step 3: Request NON-SCOPED Access token
	Payer2 -> Payer1 : **16** Use OAuth2.0 token endpoint to \nrequest access
  note right #LightGrey
  	Client Credentials used to obtain token.
  	Token is NOT scoped to Patient/Member.
  endnote
  Payer1 -> Payer2 : **17** Return access token

end

group #Pink Step 4: Exchange PDex (USCDI) Information via API
  Payer2 -> Payer1 : **18** Use NON-SCOPED access token to access API
	Payer1 -> Payer2 : **19** Return $everything-pdex or \nincremental data as appropriate/supported \nby Payer1 Capability Statement
  note right #LightGrey
  	When a NON-SCOPED access token is provided each query to
    a resource endpoint will need to perform a consent query
    to confirm that access is permitted.

    This control **could** be performed by implementing a custom function.
    The function would perform the consent validation and then retrieve
    the relevant data and return to Payer2.
  endnote
end
@enduml


---

File: repos/HL7_SLASH_davinci-epdx/input/images-source/pdex/member-match-consent-decision-flow.plantuml

@startuml
skinparam svgDimensionStyle false

start
note left
Bulk Member-match Consent Decision Flow
endnote
if (is bundle format valid) then (no)
  #pink:return 422 Unprocessable Entity in
  Operation Outcome - Bad bundle format;
  stop
else (yes)
label MatchMember
if (Is Member Matched?) then (Yes)
  :check consent;
else (nothing)
  #pink:Write Member to NotMatched Group;
  detach
endif


switch (Can Payer Comply with Consent Request?)
case (Sensitive Data is excluded)
  #palegreen:write Member to Matched Member Group;

case (Sensitive data is tagged)
  #palegreen:write member to Matched Member Group;

case (Sensitive data is NOT tagged)
  #pink:write member to Consent Contraint Group;

endswitch

label returngroups
:write MatchedMember Group to FHIR Store;
:compile Member-Match response;
note right
  Return:
    1. Matched Member Group
    2. NotMatched Group
    3. Consent Constraint Group
endnote
:Return Groups in response bundle;
stop

@enduml


---

File: repos/HL7_SLASH_davinci-epdx/input/images-source/pdex/provider-access-api.plantuml

@startuml
skinparam svgDimensionStyle false
participant "In-Network Provider" as Provider
participant "Provider Representative | EMR" as EMR
Participant "Member | Patient" as Member
participant "Payer" as Payer
entity "Attribution Process" as Attribution
database "Payer FHIR Store" as FHIRServer
database "Claims" as Claims
== Member Attribution Creation and Maintenance ==
Payer -> Attribution : Attribution rules and data
note right
  Payer provides
  Attribution processing rules
  and any Additional Data Sources
endnote
Claims -> Attribution : Historical Claims data
note right
  Claims data provides evidence of a
  treatment relationship between
  Member and Provider
endnote
Member -> Attribution : Opt-in/Opt-out decision
note left
  Default is for Member to be
  Opted-in to data sharing
endnote
EMR --> Attribution: AppointmentBook Hook
note left #LawnGreen
  CDS Hooks (as defined in
  Da Vinci CRD IG)
endnote
note right
  Hooks provide a potential indicator of
  an impending treatment relationship
endnote
EMR --> Attribution: EncounterStart Hook
Attribution -> FHIRServer: PDexProviderGroup
note right
	PDexProviderGroup Group resource at
  Organization + Location + Provider
  level of granularity
endnote

== Provider Bulk Access API ==
Provider -> EMR: Authorizes Representative
note left
  Provider/Provider Organization authorizes
  EMR/Provider Representative to retrieve
  Attribution data on their behalf
endnote
EMR -> Payer: Request SMART Bulk Access Credential
Payer -> EMR: Payer issues Bulk Access Credential
EMR -> FHIRServer: SEARCH /Group
FHIRServer -> EMR: Bundle response
note right #Pink
  PDexProviderGroup resources returned.
  Group records returned will be bounded by the
  access permission of the Provider Representative
endnote
EMR -> FHIRServer: /Group/{id}/$davinci-data-export
note left
  Bulk request can request a subset of Members,
  a subset of resources and/or a date period.
endnote
FHIRServer -> EMR: $DaVinci-data-export notifies Requestor that transaction is completed
note right
FHIR Store compiles bundles in response to
request, notifies Requestor and Requestor retrieves
Bulk NDJson bundle(s). Content comprises:
- US Core Clinical data,
- PDex Prior Authorizations
- CARIN EOBs (Non-Financial profiled claims and encounter data)
endnote
@enduml


---

File: repos/HL7_SLASH_davinci-epdx/input/images-source/pdex/single-member-match-consent-decision-flow.plantuml

@startuml
skinparam svgDimensionStyle false

start
note left
Single Member-match Consent Decision Flow
endnote
if (is bundle format valid) then (no)
  #pink:return 422 Unprocessable Entity in
  Operation Outcome - Bad bundle format;
  stop
else (yes)
label MatchMember
if (Is Member Matched?) then (Yes)
  :check consent;
else (nothing)
  #pink:return 422 Unprocessable Entity in
  Operation Outcome - No Match;
  detach
endif


switch (Can Payer Comply with Consent Request?)
case (Sensitive Data is excluded)
  #palegreen:Capture Consent.
  Return Matched Member Information;

case (Sensitive data is tagged)
  #palegreen:Capture Consent.
  Return Matched Member Information;

case (Sensitive data is NOT tagged)
  #pink:return 422 Unprocessable Entity in
          Operation Outcome - Consent Constraint;

endswitch
stop

@enduml


---

File: repos/HL7_SLASH_davinci-epdx/input/images-source/authorization-consent.plantuml

@startuml
skinparam svgDimensionStyle false
autonumber
participant "Payer2 | New Payer | Requesting Payer" as Payer2
participant "Payer1 | Old Payer | Receiving Payer" as Payer1
participant "Payer Directory | Certificate Authority" as PayerDirectory
== Connection Intitialization ==
group #LightGreen Step 1a: Verify Exchange, establish mutual TLS, and verify trust.
	Payer2 -> PayerDirectory : Query
  note left
  	Payer2 searches registry
    for Payer1 details
  endnote
	PayerDirectory -> Payer2 : Return endpoint, mutual TLS public cert,
	Payer2 -> Payer2 : Verify Cert
	Payer2 -> Payer1 : Establish Mutual TLS
	Payer1 -> PayerDirectory : Query mutual TLS Public Cert
  note right
  	Payer1 queries registry
    for Payer2 details
  endnote
	PayerDirectory ->> Payer1 : Return mTLS public cert
	Payer1 -> Payer1 : Verify Cert
end
group #lightGreen Step 1b: OAuth 2.0 Dynamic Registration via mTLS connection
	Payer2 -> Payer1 : Request registration (JWT with registration details)
	note left
  	Payer2 submits JWT with
    service registration details
  endnote
  Payer1 -> Payer2 : Return Client Credentials (ClientID/ClientSecret)

end
== Secure Transaction Capability Established ==

== Member Connection ==
group Step 2a: Get $MemberMatch Operation Token
	Payer2 -> Payer1 : Use OAuth2.0 token endpoint to request access \nto $MemberMatch operation only
  Payer1 -> Payer2 : Return access token
  note right
  	Token endpoint issues access token using
    Payer2 OAuth Credentials
  endnote
end
group Step 2b: Establish common member - secure transaction
	Payer2 -> Payer1 : Send bundle (Patient Demographics, \nCoverage & Consent) to $MemberMatch operation
	Payer1 -> Payer1 : Verify member
  Payer1 -> Payer1 : Store or Compute Consent \n(all / non-sensitive) for Member
  note right
  Member: ID
  Payer: ID (Client Credential)
  Policy: all | non-sensitive
  Consent Period: start, end
  This information will be need to be checked
  when Access Token is issued in Step 3.
  An active consent information will only be stored if the Policy
  Scope can be complied with. An inability to comply with the scope
  will lead to a 422 error being returned from the $member-match.
  endnote

	Payer1 -> Payer2 : Return Member Identifier (Patient FHIR ID)
  note right
    This process assumes Payer1 provides a unique ID for
    the member that crosses all relevant
    contract arrangements.

    Payer1 may determine concurrent coverage is in effect
    and covered by member consent to trigger reciprocal
    app registration and $MemberMatch request

  	Payer2 receives the Member Identifier (Patient FHIR ID) from Payer1.
    The Member Identifier (Patient FHIR ID) is only returned if member
    is matched AND consent can be complied with
    per date and policy constraints.
  endnote
end

group Step 3: Request Access token for Member Access
	Payer2 -> Payer1 : Use OAuth2.0 token endpoint to \nrequest access using Member Identifier
  note right
  	Token endpoint matches to member using
    Member Identifier and queries consent records to find
    the latest active consent that matches on Member and Payer Identifiers.
    The Access Token process then confirms current date is within
    the consent period and the policy scope can be complied with. Checking the consent
    record is active provides for the receiving payer to invalidate the consent record
    if a request is recieved via other channels to cancel the consent.
  endnote
  Payer1 -> Payer2 : Return access token
  note right
  	token is scoped to single Patient
  endnote
end
== Data Requests ==
group #LightBlue Step 4: Exchange PDex (USCDI) Information via API
  Payer2 -> Payer1 : Use Patient-scoped access token to access API
	Payer1 -> Payer2 : Return $everything or \nincremental data as appropriate/supported \nby Payer1 Capability Statement
  note right
  	Use retrieval method, as defined in use case scenarios, such as:
      1.) Individual search against each USCDI resource
      2.) $everything operation
      3.) asynchronous Bulk FHIR methods.
  endnote
end
@enduml


---

File: repos/HL7_SLASH_davinci-epdx/input/images-source/bulk-p2p-exchange.plantuml

@startuml
skinparam svgDimensionStyle false
participant "Payer2 | New Payer | Requesting Payer" as Payer2
participant "Payer1 | Old Payer | Receiving Payer" as Payer1
== Connection Intitialization ==
group #lightGreen Step 1: OAuth 2.0 Dynamic Registration or alternative
	Payer2 -> Payer1 : Request registration (JWT with registration details)
	note left
  	Payer2 submits JWK Set with
    service registration details
  endnote
  Payer1 -> Payer2 : Return Client Credentials (ClientID/ClientSecret)

end
== Secure Transaction Capability Established ==

== Bulk Member Match ==
group Step 2a: Get $MemberMatch Operation Token
	Payer2 -> Payer1 : Use OAuth2.0 token endpoint to request access \nto $MemberMatch operation only
  Payer1 -> Payer2 : Return access token
  note right
  	Token endpoint issues access token using
    Payer2 OAuth Credentials
  endnote
end
group Step 2b: Establish Common Members - secure operation
	Payer2 -> Payer1 : Send bundle of bundles (Patient Demographics, \nCoverage & Consent for each member) to $MemberMatch operation
	Payer1 -> Payer1 : Match EACH member
  Payer1 -> Payer1 : Store or Compute Consent \n(all / non-sensitive) for EACH Member
  note right
  Member: ID
  Payer: ID (Client Credential)
  Policy: all | non-sensitive
  Consent Period: start, end
  This information will be need to be checked
  when Access Token is issued in Step 3.
  An active consent information will only be stored if the Policy
  Scope can be complied with. An inability to comply with the scope
  will lead to a 422 error being returned from the $member-match for the
  member.
  endnote
  note left
  Successful Match results in Patient/{ID} for Member
  being appended to a dynamically created Group record by Payer 1.
  endnote
	Payer1 -> Payer2 : Return Group Identifier (Group FHIR ID).
  note right
    This process assumes Payer1 provides Patient/{ID} for
    each member that crosses all relevant
    contract arrangements.

    Payer1 may determine concurrent coverage is in effect
    and covered by member consent to trigger reciprocal
    app registration and $MemberMatch requests to Payer 2.

  	Payer2 receives the Group/{ID} from Payer1.
    The Group/{ID} contains matched members where consent
    can be complied with per date and policy constraints.
  endnote
end

group Step 3: Request Access token forGroup/{ID}
	Payer2 -> Payer1 : Use OAuth2.0 token endpoint to \nrequest access using Group/{ID}/$davinci-data-export
  Payer1 -> Payer2 : Return access token
end
== Data Requests ==
group #LightBlue Step 4: Exchange PDex (USCDI) Information via API
  Payer2 -> Payer1 : Use Access Token to call \n/Group/{ID}/$davinci-data-export operation.
	Payer1 -> Payer2 : Performs Async operation as per \nFHIR Bulk Data Export specification to return bundle to requesting Payer
  note right
  	Operation will validate Consent Scope and Valid Consent Period.
    This will be based upon data saved during Member-Match process for
    each Member.
    Payer1 should check whether Member has provided more recent overriding
    consent instruction directly.
  endnote
end
@enduml


---

File: repos/HL7_SLASH_davinci-epdx/input/images-source/credential-consent-flow.plantuml

@startuml
skinparam svgDimensionStyle false

participant "Payer2 | New Payer | Requesting Payer" as Payer2
participant "Payer1 | Old Payer | Receiving Payer" as Payer1
participant "Payer Directory | Certificate Authority" as PayerDirectory

== Data Requests ==
group #Pink Step 3: Request NON-SCOPED Access token
	Payer2 -> Payer1 : **16** Use OAuth2.0 token endpoint to \nrequest access
  note right #LightGrey
  	Client Credentials used to obtain token.
  	Token is NOT scoped to Patient/Member.
  endnote
  Payer1 -> Payer2 : **17** Return access token

end

group #Pink Step 4: Exchange PDex (USCDI) Information via API
  Payer2 -> Payer1 : **18** Use NON-SCOPED access token to access API
	Payer1 -> Payer2 : **19** Return $everything-pdex or \nincremental data as appropriate/supported \nby Payer1 Capability Statement
  note right #LightGrey
  	When a NON-SCOPED access token is provided each query to
    a resource endpoint will need to perform a consent query
    to confirm that access is permitted.

    This control **could** be performed by implementing a custom function.
    The function would perform the consent validation and then retrieve
    the relevant data and return to Payer2.
  endnote
end
@enduml


---

File: repos/HL7_SLASH_davinci-epdx/input/images-source/member-match-consent-decision-flow.plantuml

@startuml
skinparam svgDimensionStyle false

start
note left
Bulk Member-match Consent Decision Flow
endnote
if (is bundle format valid) then (no)
  #pink:return 422 Unprocessable Entity in
  Operation Outcome - Bad bundle format;
  stop
else (yes)
label MatchMember
if (Is Member Matched?) then (Yes)
  :check consent;
else (nothing)
  #pink:Write Member to NotMatched Group;
  detach
endif


switch (Can Payer Comply with Consent Request?)
case (Sensitive Data is excluded)
  #palegreen:write Member to Matched Member Group;

case (Sensitive data is tagged)
  #palegreen:write member to Matched Member Group;

case (Sensitive data is NOT tagged)
  #pink:write member to Consent Contraint Group;

endswitch

label returngroups
:write MatchedMember Group to FHIR Store;
:compile Member-Match response;
note right
  Return:
    1. Matched Member Group
    2. NotMatched Group
    3. Consent Constraint Group
endnote
:Return Groups in response bundle;
stop

@enduml


---

File: repos/HL7_SLASH_davinci-epdx/input/images-source/provider-access-api.plantuml

@startuml
skinparam svgDimensionStyle false
participant "In-Network Provider" as Provider
participant "Provider Representative | EMR" as EMR
Participant "Member | Patient" as Member
participant "Payer" as Payer
entity "Attribution Process" as Attribution
database "Payer FHIR Store" as FHIRServer
database "Claims" as Claims
== Member Attribution Creation and Maintenance ==
Payer -> Attribution : Attribution rules and data
note right
  Payer provides
  Attribution processing rules
  and any Additional Data Sources
endnote
Claims -> Attribution : Historical Claims data
note right
  Claims data provides evidence of a
  treatment relationship between
  Member and Provider
endnote
Member -> Attribution : Opt-in/Opt-out decision
note left
  Default is for Member to be
  Opted-in to data sharing
endnote
EMR --> Attribution: AppointmentBook Hook
note left #LawnGreen
  CDS Hooks (as defined in
  Da Vinci CRD IG)
endnote
note right
  Hooks provide a potential indicator of
  an impending treatment relationship
endnote
EMR --> Attribution: EncounterStart Hook
Attribution -> FHIRServer: PDexProviderGroup
note right
	PDexProviderGroup Group resource at
  Organization + Location + Provider
  level of granularity
endnote

== Provider Bulk Access API ==
Provider -> EMR: Authorizes Representative
note left
  Provider/Provider Organization authorizes
  EMR/Provider Representative to retrieve
  Attribution data on their behalf
endnote
EMR -> Payer: Request SMART Bulk Access Credential
Payer -> EMR: Payer issues Bulk Access Credential
EMR -> FHIRServer: SEARCH /Group
FHIRServer -> EMR: Bundle response
note right #Pink
  PDexProviderGroup resources returned.
  Group records returned will be bounded by the
  access permission of the Provider Representative
endnote
EMR -> FHIRServer: /Group/{id}/$davinci-data-export
note left
  Bulk request can request a subset of Members,
  a subset of resources and/or a date period.
endnote
FHIRServer -> EMR: $DaVinci-data-export notifies Reuestor that transaction is completed
note right
FHIR Store compiles bundles in response to
request, notifies requestor and requestor retrieves
Bulk NDJson bundle(s). Content comprises:
- US Core Clinical data,
- PDex Prior Authorizations
- CARIN EOBs (Non-Financial profiled claims and encounter data)
endnote
@enduml

---

File: repos/HL7_SLASH_davinci-epdx/input/images-source/single-member-match-consent-decision-flow.plantuml

@startuml
skinparam svgDimensionStyle false

start
note left
Single Member-match Consent Decision Flow
endnote
if (is bundle format valid) then (no)
  #pink:return 422 Unprocessable Entity in
  Operation Outcome - Bad bundle format;
  stop
else (yes)
label MatchMember
if (Is Member Matched?) then (Yes)
  :check consent;
else (nothing)
  #pink:return 422 Unprocessable Entity in
  Operation Outcome - No Match;
  detach
endif


switch (Can Payer Comply with Consent Request?)
case (Sensitive Data is excluded)
  #palegreen:Capture Consent.
  Return Matched Member Information;

case (Sensitive data is tagged)
  #palegreen:Capture Consent.
  Return Matched Member Information;

case (Sensitive data is NOT tagged)
  #pink:return 422 Unprocessable Entity in
          Operation Outcome - Consent Constraint;

endswitch
stop

@enduml


---

File: repos/HL7_SLASH_davinci-epdx/input/includes/sd-list-generator.md

{%- for sd_hash in site.data.structuredefinitions -%}
{%- assign sd1= sd_hash[1] -%}
{%- unless sd1.type == "Extension" -%}
{% assign types =  types | append: "," | append: sd1.type %}
{%- endunless -%}
{% endfor %}
{% assign my_types = types | split: "," %}
{% assign my_types = my_types | sort | uniq %}
{% for i in my_types offset:1 %}
<h4>{{ i }}</h4>
  <ul>
    {%- for sd_hash in site.data.structuredefinitions -%}
      {%- assign sd1 = sd_hash[1] -%}
      {%- if sd1.type == i %}
        {%- assign new = false -%}
        {%- assign parent = false -%}
        {%- assign child = false -%}
        {%- for sd_hash2 in site.data.structuredefinitions -%}
          {%- assign sd2 = sd_hash2[1] -%}
          {% if sd1.basename == sd2.name %}
            {%- assign child = true -%}
            {% break %}
          {% elsif sd1.name == sd2.basename%}
             {%- assign parent = true -%}
             {% break %}
          {% endif %}
        {% endfor %}


        {%- for new_stuff in site.data.new_stuff -%}
           {%- if new_stuff == sd1.name -%}
             {%- assign new = true -%}
             {%- break -%}
           {%- endif -%}
        {%- endfor -%}

          {%- unless parent or child -%}
            {%- if new -%}
              <li><a href="{{sd1.path}}"><span class="bg-success" markdown="1">{{sd1.title}}</span><!-- new-content --></a></li>
            {% else %}
              <li><a href="{{sd1.path}}">{{sd1.title}}</a></li>
            {% endif %}
          {%- endunless -%}

          {%- if parent -%}
            {%- if new -%}
              <li><a href="{{sd1.path}}"><span class="bg-success" markdown="1">{{sd1.title}}</span><!-- new-content --></a>
            {% else %}
              <li><a href="{{sd1.path}}">{{sd1.title}}</a>
            {% endif %}
                <ul>
                {%- for sd_hash3 in site.data.structuredefinitions -%}
                  {%- assign sd3 = sd_hash3[1] -%}
                  {% if sd1.name == sd3.basename %}
                    {%- assign new = false -%}
                    {% for new_stuff in site.data.new_stuff %}
                         {%- if new_stuff == sd3.name -%}
                           {%- assign new = true -%}
                           {%- break -%}
                         {%- endif -%}
                    {%- endfor -%}


                      {%- if new -%}
                        <li><a href="{{sd3.path}}"><span class="bg-success" markdown="1">{{sd3.title}}</span><!-- new-content --></a></li>
                      {% else %}
                        <li><a href="{{sd3.path}}">{{sd3.title}}</a></li>
                      {% endif %}

                  {% endif %}
                {% endfor %}
                </ul>
            </li>
          {%- endif -%}
      {%- endif -%}
    {%- endfor -%}
  </ul>
{% endfor %}


---

File: repos/HL7_SLASH_davinci-epdx/input/intro-notes/CapabilityStatement-pdex-payer-access-server-intro.md



{% include style_insert_table_blue.html %}

This capability statement is for use with the Payer-to-Payer Bulk Access API.
It makes the $bulk-member-match and $davinci-data-export operations available to other payers that
have the appropriate credentials to access the secured APIs.

The $davinci-data-export operation should support the export of Profiles supporting US Core 3.1.1 or US Core 6.1.0.
Other profiles that can be included in the export are:
- CARIN Blue Button non-Financial Profiles.
- PDex Prior Authorization Profile.




---

File: repos/HL7_SLASH_davinci-epdx/input/intro-notes/CapabilityStatement-pdex-provider-access-server-intro.md



{% include style_insert_table_blue.html %}

This capability statement is for use with the Provider Access Bulk API.
It makes the $davinci-data-export operations available to in-network providers that
have the appropriate credentials to access the secured APIs via a group resource that provides a list
of Patients/Members that are identified as having a treatment relationship and have not opted out of sharing
their data with providers.

The $davinci-data-export operation should support the export of Profiles supporting US Core 3.1.1 or US Core 6.1.0.
Other profiles that can be included in the export are:
- CARIN Blue Button non-Financial Profiles.
- PDex Prior Authorization Profile.




---

File: repos/HL7_SLASH_davinci-epdx/input/intro-notes/CapabilityStatement-pdex-server-6-1-intro.md



{% include style_insert_table_blue.html %}



---

File: repos/HL7_SLASH_davinci-epdx/input/intro-notes/CapabilityStatement-pdex-server-intro.md



{% include style_insert_table_blue.html %}



---

File: repos/HL7_SLASH_davinci-epdx/input/intro-notes/OperationDefinition-patient-everything-pdex-intro.md

This operation is used to return all the clinical information related to a single patient described in the resource or context on which this operation is invoked. The response is a bundle of type “searchset”. At a minimum, the patient resource(s) itself is returned, along with any other clinical (as defined by USCDI) resources that the server has that are related to the patient, and that are available for the given user. The server also returns whatever resources are needed to support the records - e.g., linked practitioners, medications, locations, organizations etc. It should be noted that the server may need to filter resources to exclude resource profiles that fall outside of the clinical context. For example, excluding Blue Button claims that use the ExplanationOfBenefit resource, while including PDex Prior Authorizations that use the same base resource.

The list of resources related to a single patient can be found in the [Data Retrieval Methods](payertopayerexchange.html#data-retrieval-methods) section of the [Payer-to-Payer Exchange](payertopayerexchange.html) page of this IG.

The intended use for this operation is to provide a payer with access to the entire clinical record. The server SHOULD return at least all resources that it has that are in the patient compartment for the identified patient(s), and any resource referenced from those, including binaries and attachments. In the US Realm, at a minimum, the resources returned SHALL include all the data covered by the meaningful use common data elements as defined in the US Core [3.1.1]({{site.data.fhir.ver.uscore3}}) or [6.1.0]({{site.data.fhir.ver.uscore6}}) Implementation Guide. The PDex Implementation Guide adds Pdex-Device, Pdex-MedicationDispense and Pdex-PriorAuthorization to the clinical resource set. Other applicable implementation guides may make additional rules about how much information that is returned.


---

File: repos/HL7_SLASH_davinci-epdx/input/intro-notes/PdexProvenance-intro.md

## Examples

Four example Provenance records are provided:

- Payer is transmitting a bundle [ExampleProvenanceTransmitter](Provenance-1000001.html)
- Organization as source of a record [ExampleProvenanceAuthor](Provenance-1000002.html)
- Solo Practitioner as source of a record [ExampleProvenanceSoloPractitioner](Provenance-1000003.html)
- Payer as source of a record [ExampleProvenancePayerSource](Provenance-1000004.html).




---

File: repos/HL7_SLASH_davinci-epdx/input/intro-notes/SearchParameter-group-code-intro.md

#### Search By Group Code

This search parameter enables a query against the Group resource to identify the following types of groups:

- pdexprovidergroup
- match
- nomatch
- consentconstraint

The FHIR Store **MAY** only have records for **pdexprovidergroup**, as used by the [Provider Access API](provider-access-api.html),
and **match**, as used by the [Payer-to-Payer Bulk API](payertopayerbulkexchange.html) for members that successfully matched.

These codes relate to the following Group Profiles:

- [PDex Provider Group](StructureDefinition-pdex-provider-group.html) for Attributed Members used in the [Provider Access API](provider-access-api.html).
- [PDex Member Match Group](StructureDefinition-pdex-member-match-group.html) for Matched Members in the  [Payer-to-Payer Bulk API](payertopayerbulkexchange.html).


---

File: repos/HL7_SLASH_davinci-epdx/input/intro-notes/StructureDefinition-hrex-coverage-intro.md

## Future Development of Coverage 

Coverage is a resource that is used by a number of use cases and 
Implementation Guides. The Coverage resource included in the PDex
Implementation Guide will be superceded by the Coverage profile 
that is defined in the HRex Implementation Guide.

<p id="publish-box">
Check the Da Vinci Health Record Exchange IG Directory of Published Versions <a href="http://hl7.org/fhir/us/davinci-hrex/history.html">History Page</a>> for release information: <a href="http://hl7.org/fhir/us/davinci-hrex/history.html">http://hl7.org/fhir/us/davinci-hrex/history.html</a>
</p>


---

File: repos/HL7_SLASH_davinci-epdx/input/intro-notes/StructureDefinition-pdex-device-intro.md



US Core supports the [US Core Implantable Device](http://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-implantable-device.html) resource. However, 
 payers may need to record information about other non-implantable devices that are used by their members. The PDex-Device profile is used to record this type of information. 

NOTE: FHIR-29796: PDex Device uses base resource not US Core Implantable Device Profile. 
Pdex-Device enables payers to record non-implantable device data. 
CGP Voted on variance approval: Drew Torres/Eric Haas: 9-0-0

In future versions of this IG there is a desire to ensure that all Device identification information is exchanged using the PDex Device or US Core Implantable Device resource.  

{% include style_insert_table_blue.html %}

he essential fields (Must Support or Cardinality greater than 0..*) to be provided in the [PDex Device](StructureDefinition-pdex-device.html) resource are:

{% include style_insert_table_blue.html %}

| R4 Element                         | Name              | Cardinality | Type                               |
|------------------------------------|-------------------|:-----------:|------------------------------------|
| Device.type                        |  type             |     1..1    | CodeableConcept                    |
| Device.patient                     |  patient          |     1..1    | Reference(US Core Patient Profile) |


<i>[Table Definition](index.html#mapping-adjudicated-claims-encounter-and-prior-authorization-information)</i>




---

File: repos/HL7_SLASH_davinci-epdx/input/intro-notes/StructureDefinition-pdex-device-notes.md


[Return to PdexDevice Page](PdexDevice.html)


---

File: repos/HL7_SLASH_davinci-epdx/input/intro-notes/StructureDefinition-pdex-member-match-group-notes.md


#### Mandatory Search Parameters

1. **SHALL** support searching for code for a Group.
   [Group_Code Search Parameter](SearchParameter-group-code.html)

   `GET [base]/Group?code={code}`

   Example:

   GET [base]/Group?code="match"

   NOTE:

   Server should limit responses to records that requesting user or service (i.e. Payer in case of Member-Match) is permitted to access.
   For example, Matched Group lists for a Payer.


[Back to Artifacts](artifacts.html#structures-resource-profiles)

---

File: repos/HL7_SLASH_davinci-epdx/input/intro-notes/StructureDefinition-pdex-parameters-multi-member-match-bundle-in-intro.md

### Request Parameters

The Multiple Member Match Operation Request Profile is based upon the original PDex Member Match Operation Request 
Parameters.

The Multiple Member Match Request specifies a repeating parameter bundle element, 
with one parameter bundle per Member. Each Bundle includes:

- MemberPatient: - [HRex Patient demographics](http://hl7.org/fhir/us/davinci-hrex/StructureDefinition-hrex-patient-demographics.html)
- CoverageToMatch - details of prior health plan coverage provided by the member, typically from their health plan coverage card. Uses the [HRex Coverage Profile](http://hl7.org/fhir/us/davinci-hrex/StructureDefinition-hrex-coverage.html).
- CoverageToLink - Optional element. Details of new or prospective health plan coverage, provided by the health plan based upon the member’s enrolment. Uses the [HRex Coverage Profile](http://hl7.org/fhir/us/davinci-hrex/StructureDefinition-hrex-coverage.html).
- Consent - Record of consent received by requesting payer from Member to retrieve their records from the prior payer. This is an opt-in. Uses the [HRex Consent Profile](http://hl7.org/fhir/us/davinci-hrex/STU1/StructureDefinition-hrex-consent.html).




---

File: repos/HL7_SLASH_davinci-epdx/input/intro-notes/StructureDefinition-pdex-priorauthorization-intro.md

[Previous Page - US Core PractitionerRole](USCorePractitionerRole.html)



The PDex Prior Authorization profile has been created to enable Payers to communicate prior authorization decisions and changes to the status of a prior authorization to members.

Payers SHALL make available pending and active prior authorization decisions and related clinical documentation and forms for items and services, not including prescription drugs, including the date the prior authorization was approved, the date the authorization ends, as well as the units and services approved and those used to date, no later than one (1) business day after a provider initiates a prior authorization for the beneficiary or there is a change of status for the prior authorization.

A slice has been defined for meta.profile that makes the URI for the Structure Definition a required field. The ExplanationOfBenefit resource is used to express claims information to members in accordance with the [Carin Blue Button Implementation Guide](http://hl7.org/fhir/us/carin-bb/). By setting the value of ExplanationOfBenefit.Use to "preauthorization" in Prior Authorization resources a Payer will be able to exclude, or include, Prior Authorization records, dependent upon the use case. For the PDex IG it would be a case of setting “use=preauthorization” as a search parameter to include only Prior Authorization records.

        [BaseURL]/ExplanationOfBenefit?use=preauthorization&patient=Patient/1




---

File: repos/HL7_SLASH_davinci-epdx/input/intro-notes/StructureDefinition-pdex-priorauthorization-notes.md



[Return to Parent Page](PDexPriorAuthorization.html)

[Next Page - US Core Procedure](USCoreProcedure.html)


---

File: repos/HL7_SLASH_davinci-epdx/input/intro-notes/StructureDefinition-pdex-provider-consent-intro.md

### Provider Access Opt-out

The CMS Prior Authorization Rule (CMS-0057) requires that a health plan enables a member to choose to opt-out of sharing their data
with providers via the [Provider Access API](provider-access-api.html). By default a member is opted-in to data sharing with Providers
that have an existing, or impending treatment relationship. This implementation Guide provides a [Consent profile](StructureDefinition-pdex-provider-consent.html)
that expresses a Member's decision to opt-out, i.e., Deny sharing of their data, A Member can also revoke that denial.




---

File: repos/HL7_SLASH_davinci-epdx/input/intro-notes/StructureDefinition-pdex-provider-group-notes.md


#### Mandatory Search Parameters

1. **SHALL** support searching for code for a Group.
     [Group_Code Search Parameter](SearchParameter-group-code.html)

    `GET [base]/Group?code={code}`

    Example:

    GET [base]/Group?code="pdexprovidergroup"

    NOTE:

    Server should limit responses to records that requesting user or service is permitted to access.
    For example, Attributed Group lists for Practitioners working in a Facility where the system accessing is accessing on behalf of the facility.


[Back to Artifacts](artifacts.html#structures-resource-profiles)

---

File: repos/HL7_SLASH_davinci-epdx/input/pagecontent/cds-hooks.md


[Previous Page - Use Case Scenarios](usecasescenarios.html)

<div class="stu-note">
<b><i>This page was published in STU1.0. It has been superceded by the Provider Access API requirements 
in the CMS Prior Authorization Rule (CMS-0057).
There has been limited, if any implementation of the CDS Hooks capability defined in this guide. 
This section on CDS Hooks will be removed in the next version of this IG.
</i></b>
</div>


This section of the implementation guide defines the specific conformance requirements for systems wishing to conform to this Payer Data Exchange (PDex) Implementation Guide. The bulk of it focuses on the implementation of the CDS Hooks Specification to meet PDex use-cases. It also describes the use of SMART on FHIR and provides guidance on privacy, security and other implementation requirements.

This IG uses a combination of CDS-Hooks and SMART-on-FHIR to enable Providers to issue a query to a Health Plan and to retrieve information about their patient (the Health Plan member) that they **MAY** review and choose to commit to the patient record in their EMR.

CDS Hooks enables the Health Plan to be queried either via an on-demand transaction triggered from a SMART-on-FHIR app, or from a workflow event in the EMR that triggers the hook, such as when an appointment is booked for a patient.

The bulk of the functionality of this specification is implemented using CDS Hooks. The [Hooks specification]( https://cds-hooks.hl7.org/) is small. Implementers should read and be familiar with all of it.

CDS Hooks is a relatively new technology. It is considered a Standard for Trial Use, meaning that it will continue to evolve based on implementer feedback and may change in ways that are not compatible with the current draft. As well, the initial version of the specification has focused on the core architecture and a relatively simple set of capabilities. Additional capabilities will be introduced in future versions.

To meet requirements identified by Da Vinci project participants, it is necessary to introduce some additional capabilities above and beyond what is currently found in the CDS Hooks specification. This section of the PDex implementation guide describes those additional capabilities and the mechanism the implementation guide proposes to implement them. The purpose of these customizations is to enable testing at connectathons and to support feedback into the CDS Hooks design process.

When interacting with EMR systems that support FHIR R4 the SMART App **SHALL** evaluate the EMR System's CapabilityStatement that the implementation has deemed relevant to this SMART-on-FHIR application to determine which of the records selected by the Provider can be written to the EMR via the FHIR API.

Where the EMR's FHIR API does not enable the SMART App to write a resource via the API, the SMART App **SHOULD** write the records that it is permitted to write to the API. The remaining selected records **SHOULD** be retained in the EMR in the most appropriate form to allow the provider access to the information when needed.
Each capability listed here has been proposed to the CDS Hooks community and may well become part of the official specification, either in the initial release, or in some future release. However, there is a significant likelihood that the manner in which the requirements are met may vary somewhat from a syntax or even an architectural approach. Future versions of this implementation guide will be updated to align with how these requirements are addressed in future versions of the CDS Hook specification. This implementation guide will not be able to be Normative (locked into backward compatibility mode) until the underlying CDS Hooks content is also normative.

This implementation guide extends/customizes CDS Hooks in 4 ways: 
* Support for FHIR R4 
* Extending the appointment-book hook
* A hook configuration mechanism
* Additional response capabilities. 

Each way is described in the following sections.

### Support for FHIR R4

The hooks published in the CDS Hooks specification provide a list of context resources for the DSTU2 and STU3 versions of FHIR. The CDS Hook specification won't be updated to include R4 resources until after R4 is finalized. Because this implementation guide is being written to support FHIR R4 as well as STU3 and Argonaut (DSTU2), it provides guidance on what R4 resources are relevant for each hook (both pre-existing hooks, as well as newly proposed hooks).

It is possible that the actual list of R4 resources provided for the hooks will differ from that proposed in this IG. Future versions of the Implementation Guide will adjust accordingly.

The CDS Hooks payload received from an EMR can include DSTU2, STU3 or R4 resources. The Payer's CDS Hooks service **SHALL** handle the content in the JSON hooks payload, regardless of version of FHIR used for incorporated resources.

The health plan's CDS Hooks service **SHALL** provide access to FHIR R4 resources based on Profiles identified in the US Core, Da Vinci PDex and HRex IGs.

The SMART-on-FHIR App that **MAY** be called from the returned CDS Hooks card will not translate R4 profiles to earlier versions of FHIR. 

When interacting with EMR systems that support FHIR R4 the SMART App **SHALL** evaluate the EMR System's CapabilityStatement to determine which of the records selected by the Provider can be written to the EMR via the FHIR API. Where the EMR's FHIR API does not enable the SMART App to write a resource via the API the SMART App shall write the records that it is permitted to write to the API. The remaining selected records **SHALL** be compiled into a FHIR bundle, a PDF **SHALL** be created to provide a human-readable version of the bundle and both documents **SHALL** be attached as a DocumentReference and committed to the patient's record. 

Where an EMR providing an R4 API prevents the attaching of a FHIR bundle to a DocumentReference the SMART APP **SHALL** attempt to write the selected records based upon the options listed below for graceful write degradation.

#### Graceful Write Degradation

When interacting with EMR systems that support FHIR versions prior to FHIR R4 the SMART App **SHALL**, where permitted by the target EMR, create a DocumentReference and encapsulate a PDF, human-readable version of the records being committed, together with a document bundle that encapsulates the FHIR resources from the health plan that the provider has selected to commit to the patient's record.

Where the EMR does not support the attachment of FHIR Bundles to a DocumentReference record the SMART App **SHALL** create a human-readable PDF version of the selected resources then attach this document to the DocumentReference and commit to the patient's record.

Where the EMR does not support the attachment of PDF Documents to a DocumentReference record the SMART App **SHALL** create an HTML or XHTML document that contains the selected resources then attach this document to the DocumentReference and commit to the patient's record.

Where the EMR does not support the attachment of HTML/XHTML documents to a DocumentReference record the SMART App **SHALL** create a human-readable ASCII text version of the selected resources then attach this to the DocumentReference and commit to the patient's record.

To summarize this graceful degradation in functionality the priority for writing information to a target EMR should be:

1. Write information to the respective target resources
2. Where data can't be written to target resources, create a Document Reference that comprises a FHIR bundle and a human-readable PDF of the records being committed.
3. Where the DocumentReference resource does not support committing a FHIR bundle, store the PDF document.
4. Where the DocumentReference does not support writing a PDF, store an HTML or XHTML version.
5. Where the DocumentReference does not support HTML or XHTML content, write an ASCII text version.

### Adding or Modifying Hooks

The base CDS hooks 1.0 specification defines the following hooks: 

- patient-view
- medication-prescribe
- order-review
- order-select
- order-sign
- appointment-book
- encounter-start
- encounter-discharge.

The expectation is that new hooks will be defined by and eventually formally approved by the community. The formal process for this proposal and maturity development process is still evolving. Individuals interested in this process can provide feedback [here](https://cds-hooks.hl7.org).

#### Additional Hooks

Defining new hooks is an expected part of the CDS Hooks specification and there is no need for hooks to be officially registered with the community for them to be used. However, using registered hooks increases the likelihood of broad adoption by the community - which increases the likelihood of broad uptake of this implementation guide. The project is proposing hooks that build on proposals made in the Da Vinci CRD IG. 

#### Modified Hooks

This IG uses a modified appointment-book hook. Subscriber Id is declared as an OPTIONAL context field. 

Subscriber Id or Member Id, if available, **SHOULD** be taken from the Patient's Coverage record, or be manually entered by the Provider via the SMART-on-FHIR App.

If the Member Id is not available, the Subscriber ID and the patient information from the Coverage.beneficiary element **SHOULD** be used to uniquely identify the member.

### PDex Hooks

Sharing of Member health information via PDex **SHALL** use the CDS Hooks specification. Connection to health plan systems **SHALL** be supported via the following hook:

- appointment-book.

The overall flow of the SMART-on-FHIR and CDS-Hooks interaction is summarized in the diagram below:

<table>
	<tr>
		<td>
			<img  width="100%" height="auto"  src="PDEX-SMART-Hook-SMART-InteractionMethods1.png">
		</td>
	</tr>	
</table>

It is possible that this hook will change over the course of the review/approval process, including changes to the names of the hooks, and their context parameters or other information. Future versions of this implementation guide will be updated to align with such changes. Additional hooks may also be added.

This IG defines an extension to the appointment-book hook. The additional optional context fields are:

- MemberId (optional): The number that identifies the unique person in the health plan system.

NOTE: Even pre-existing hooks are not yet locked down as normative and similar changes are possible, though perhaps less likely.

A sample of the CDS Hook for appointment-book is included below:

<pre>
{
  "hookInstance": "d1577c69-dfbe-44ad-ba6d-3e05e953b2ea",
  "fhirServer": "http://fhir.example.com",
  "fhirAuthorization" : {
       "access_token" : "some-opaque-fhir-access-token",
       "token_type" : "Bearer",
       "expires_in" : 300,
       "scope" : "patient/Patient.read patient/Observation.read",
       "subject" : "cds-service4"
     },
  "hook": "appointment-book",
  "user": "Practitioner/example",
  "context": {
    "userId" : "Practitioner/A12365498",
    "patientId" : "EMR1239876",
    "encounterId" : "654",
    "appointments" : [],
		}
		"extension" : {
        "memberId" : "HP567123489", 
				"coverage" :  "Coverage/{{id}}
		}
  }
</pre>

If a Health Plan does not provide a Member Id on a coverage card the extension can reference a Coverage resource that contains the Subscriber Id, plan details and the beneficiary information (i.e., the member demographic information).

Any identifiers associated with the coverage for the patient (which may include patient demographics) **SHOULD** be obtained from the FHIR Coverage record for the patient, or **MAY** be entered manually by the provider via the SMART-on-FHIR App.

#### Hook Configuration

PDex supports three common scenarios where CDS Hooks **SHOULD** be used:

- New Patient presents at Provider
- Patient returns to Provider
- Patient presents at Specialist.

The hook interaction for these scenarios is:

* appointment-book.

When a Card is returned from the CDS Hooks appointment-book service by a Health Plan it will provide the following elements:
- An AppContext that enables the launch of a (pre-registered and credentialed) SMART-on-FHIR to perform the next steps.
The URL for the Health Plan’s FHIR API
- A result code indicating the result of a Member Search
- The returned information MAY include a link to a SMART-on-FHIR App to enable selection of resources by the Clinician that will be written to the Clinician’s EMR system
- An information card with a human-readable interpretation of the Member Search Result
- The information card MAY include a link to launch the SMART-on-FHIR App using the appContext to enable the Clinician to query information about their patient using the Health Plan’s FHIR API.
 

The SMART-on-FHIR App **MAY** be configured with default FHIR search queries that can be set by the Clinician, or their organization. 
 
 Examples of preset search query parameters **MAY** include, but are not limited to:
- Period (Start and, optionally, End date)
- Excluded Practitioner(s)
- Excluded Organization(s)
- Excluded Location(s)

The latter three items are used to enable the Provider to exclude information that they may already have in their system.
These query parameters are examples of FHIR API queries. Any valid FHIR search query for a Patient **MAY** be constructed by the Provider. The potentially valid search query parameters will be limited by the options provided in the Health Plan's FHIR API CapabilityStatement.

As a minimum, the Health Plan's FHIR API **SHALL** limit returned results to the records that are related to the Patient/Member that is the subject of the Provider query.

As a minimum, search of FHIR Resources **SHOULD** support the following query parameters where appropriate for a Resource Type:

- \_lastUpdated (e.g. Last Updated after yyyy-mm-dd.HH:MM:ss
- Period (i.e., Date / Time filters)
- Inclusions or exclusions based upon Organization, Location or Practitioners.

An example CDS Hooks Response Card is shown below:

<pre>
{
  "cards": [
    {
      "summary": "Provider Member History Request",
      "indicator": "success",
      "detail": "Response from Payer Appointment-Book Hook",
      "source": {
        "label": "Static Member History Response",
        "url": "https://example.com/fhir/"
      },
      "links": [
        {
          "label": "SMART Example App",
          "url": "https://smart.example.com/fhir/Patient/123456789",
          "type": "smart"
        }
      ]
    }
  ]
 }

</pre>


### Systems

This Implementation Guide sets expectations for two types of systems:

1. Client Systems
2. Payer Systems.

#### Client Systems
Client systems are electronic medical records, Pharmacy systems and other clinical and administrative systems are responsible for the ordering and execution of patient-related services. These are systems whose users have a need for discovery of patient information from health plans who have provided coverage to the patient.

#### Payer Systems
Payer systems are systems run by health plans/insurers that provide insurance coverage to the patient and can provide claims history clinical information and benefits information about the patient.

The requirements and expectations described here are not intended to be exhaustive. Health plans and clients **MAY** support additional hooks, additional card patterns, additional resources, additional extensions, etc. The purpose of this Implementation Guide is to establish a baseline of expected behavior that communication partners can rely on and then build from. Future versions of this specification will evolve based on implementer feedback.

[Next Page - Workflow Examples](workflowexamples.html)


---

