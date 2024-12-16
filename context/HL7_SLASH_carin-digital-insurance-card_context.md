File: repos/HL7_SLASH_carin-digital-insurance-card/input/fsh/scripts/README.md

# CapStatement
FHIR CapabilityStatement generation via python script and Jinja template

Modified from: Eric Haas tool available at: https://github.com/Healthedata1/MyNotebooks/blob/master/CapStatement/R4CapStatement_Maker.ipynb

This tool is mostly adaptations of Eric's great original work.

## Getting Started

Dependecies: 
    fhirclient 
    pandas
    xlrd
    openpyxl
    stringcase
    jinja2
    commonmark
    lxml


To install all dependencies: `pip3 install -r requirements.txt`
to run on windows: `python -m pip ...`

NOTE: fhirclient can be installed via pip or copied from this repository (note that fhirclient is not being maintained in this respository)
The fhirclient requires the r4models to be installed (also included in this repository in the fhirclient folder. These modified R4 models need to be installed with the fhirclient pip site-package in [installdir]/lib/python/site-packages/fhirclient


## Genertate CapabilityStatement with Narrative from xslx file

Usage: `python3 R4CapStatement_Maker.py [xlsx file]`

## Genertate CapabilityStatement Narrative from existing CapabilityStatement

Usage: `python3 R4CapStatement_NarrativeMaker.py [json file] {[Artifacts Folder]}`

Currently creates a new CapabilityStatement json file prefixed with "Narrative-" 

Artifacts folder is optional. It is the location of the locally (pre)built FHIR IG artifacts (output folder). This is used to retrieve the names (title) of artifacts to use as the link text in the generated narrative. 
For any artifacts for which a name was not retrieved (e.g. no artifact folder provided or externally defined references), the script will attempt to retrieve the artifact (and name) using the artifact's specified url.


## Future Plans

Clean up beyond quick and dirty tool.

Merge the two scripts into one script.

Potentially merge with other tooling (including from Eric Haas) to create a single toolset.


---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/fsh/Aliases.fsh

//USCore -

Alias:   $USCorePatient = http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
Alias:   $USCoreOrganization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias:   $SubscriberRelationiship = http://hl7.org/fhir/ValueSet/subscriber-relationship
Alias:   $CoverageClassCS = http://terminology.hl7.org/CodeSystem/coverage-class
Alias:   $OrganizationIdentifierType   =  http://terminology.hl7.org/CodeSystem/v2-0203
Alias:   $IdentifierType   =  http://terminology.hl7.org/CodeSystem/v2-0203
Alias:   $HL7CopayTypeCS = http://terminology.hl7.org/CodeSystem/coverage-copay-type
Alias:   $HL7CopayTypeVS = http://hl7.org/fhir/ValueSet/coverage-copay-type
Alias:   $HL7ContactTypeCS = http://terminology.hl7.org/CodeSystem/contactentity-type
Alias:   $HL7ContactTypeVS = http://hl7.org/fhir/ValueSet/contactentity-type
Alias:   $HL7DataAbsentReason = http://terminology.hl7.org/CodeSystem/data-absent-reason
Alias:   $NAICCodeCS = urn:oid:2.16.840.1.113883.6.300
Alias:   $TAXCodeCS = urn:oid:2.16.840.1.113883.4.4
Alias:   $ISOColorCS = http://terminology.hl7.org/CodeSystem/IECColourManagement

// Da Vinci PDex Drug Formulary

Alias: $DrugTierCS = http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-DrugTierCS-TEMPORARY-TRIAL-USE

// THO
Alias: $HL7WorkGroup = http://terminology.hl7.org/CodeSystem/hl7-work-group|7.0.0

---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/fsh/CodeSystems.fsh


CodeSystem: C4DICIdentifierType
Title: "C4DIC Identifier Type"
Description: "Identifier Type codes that extend those defined in http://terminology.hl7.org/CodeSystem/v2-0203 to define the type of identifier payers and providers assign to insurers and patients"
* #payerid "Payer ID" "Payer ID"
* #um "Unique Member ID" "Indicates that the patient identifier is a unique member identifier assigned by a payer across all lines of business"
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false
* ^caseSensitive = true
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims





CodeSystem: C4DICExtendedCoverageClassCS
Title: "C4DIC Extended Coverage Class"
Description: "This code system includes an extended set of Coverage Class codes."
* #division "Division"
* #network "Network"
* #rxiin "RxIIN"
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false
* ^caseSensitive = true
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims


CodeSystem: C4DICExtendedCopayTypeCS
Title: "C4DIC Extended Copay Type"
Description: "This code system includes an extended set of Copay Type codes."
* #FamOutDed "Family Out of Network Deductible"
* #FamInDed "Family In Network Deductible"
* #FamRxOutDed "Family Pharmacy Out of Network Deductible"
* #FamRxInDed "Family Pharmacy In Network Deductible"
* #FamOutMax "Family Out of Network Out of Pocket Maximum"
* #FamInMax "Family In Network Out of Pocket Maximum"
* #FamRxOutMax "Family Pharmacy Out of Network Out of Pocket Maximum"
* #FamRxInMax "Family Pharmacy In Network Out of Pocket Maximum"
* #IndOutDed "Invidual Out of Network Deductible"
* #IndInDed "Individual In Network Deductible"
* #IndRxOutDed "Individual Pharmacy Out of Network Deductible"
* #IndRxInDed "Individual Pharmacy In Network Deductible"
* #IndOutMax "Individual Out of Network Out of Pocket Maximum"
* #IndInMax "Individual In Network Out of Pocket Maximum"
* #IndRxOutMax "Individual Pharmacy Out of Network Out of Pocket Maximum"
* #IndRxInMax "Individual Pharmacy In Network Out of Pocket Maximum"
* #rx "Prescription"
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false
* ^caseSensitive = true
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims


CodeSystem: C4DICExtendedContactTypeCS
Title: "C4DIC Extended Contact Type"
Description: "This code system includes an extended set of Contact Type codes."
* #pharma "Pharmacists"
* #rxmailorder "Mail Order Pharmacy"
* #provider "Provider Service"
* #virtual "Virtual Care Services"
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false
* ^caseSensitive = true
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims



---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/fsh/CodeSystemStubs.fsh

/*
The code system was added to THO
CodeSystem: ISOColorCS
Title: "C4DIC ISO Color Codes"
Description: "ISO Color Measurement and Management Codes"
* ^url = "https://terminology.hl7.org/CodeSystem-IECColourManagement.html"
* ^caseSensitive = true
* ^content = #not-present
*/



---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/fsh/CoverageProfile.fsh

Profile: C4DICCoverage
Parent: Coverage
Id: C4DIC-Coverage
Title: "C4DIC Coverage"
Description: "Data that reflect a payer’s coverage of the member."

* extension contains
   PlanBeneficiaries named C4DIC-PlanBeneficiaries-extension 0..* and
   AdditionalCardInformation named C4DIC-AdditionalCardInformation-extension 0..* and
   ColorPalette named C4DIC-ColorPalette-extension 0..1 and
   Logo named C4DIC-Logo-extension 0..1 and
   QRCode named C4DIC-QRCode-extension 0..* and
   Barcode named C4DIC-Barcode-extension 0..* and
   SupportingImage named C4DIC-SupportingImage-extension 0..* and
   CardIssueDate named C4DIC-CardIssueDate-extension 0..1

* meta 1..1 MS
* meta.lastUpdated 1..1 MS
* meta.profile 1..*

* insert Metaprofile-supportedProfile-slice
* meta.profile[supportedProfile] = Canonical(C4DICCoverage)
* identifier MS

* identifier.type from C4DICCoverageIdentifierType (extensible)
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.ordered = false   // can be omitted, since false is the default
* identifier ^slicing.description = "Slice based on $this pattern"

* identifier contains
   memberid 1..1 MS

* identifier[memberid] ^short = "Member ID"
* identifier[memberid].type = $IdentifierType#MB
* identifier[memberid].system 1..1 MS
* identifier[memberid].value 1..1 MS
* identifier[memberid].assigner 1..1 MS

* status MS
* type 1..1 MS

* subscriber 1..1 MS
* subscriber.reference 1..1 MS
* subscriberId 1..1 MS

* beneficiary 1..1 MS
* beneficiary.reference 1..1 MS
* beneficiary only Reference(C4DICPatient)

* dependent MS

* relationship 1..1 MS
* relationship from $SubscriberRelationiship (required)

* period MS

* payor 1..1 MS
* payor only Reference (C4DICOrganization)

* class MS
* class.type from C4DICCoverageClassVS (required)
* class ^slicing.discriminator.type = #pattern
* class ^slicing.discriminator.path = "type"
* class ^slicing.rules = #open
* class ^slicing.ordered = false   // can be omitted, since false is the default
* class ^slicing.description = "Slice based on value pattern"
* class contains
   group 0..1  MS and
   plan 0..1 MS and
   division 0..1 MS and
   network 0..1 MS and
   rxbin 0..1 MS and
   rxpcn 0..1 MS and
   rxgroup 0..1 MS and
   rxid 0..1 MS and
   rxiin 0..1 MS

* class[group].type = $CoverageClassCS#group
* class[plan].type = $CoverageClassCS#plan
* class[division].type = C4DICExtendedCoverageClassCS#division
* class[network].type = C4DICExtendedCoverageClassCS#network
* class[rxbin].type = $CoverageClassCS#rxbin
* class[rxpcn].type = $CoverageClassCS#rxpcn
* class[rxgroup].type = $CoverageClassCS#rxgroup
* class[rxid].type = $CoverageClassCS#rxid
* class[rxiin].type = C4DICExtendedCoverageClassCS#rxiin

* costToBeneficiary MS
* costToBeneficiary.type 1..1 MS
* costToBeneficiary.type from C4DICCopayTypeVS (extensible)
* costToBeneficiary.type ^comment = "Includes codes to represent the drug tier of a particular medication in a health plan. Base set are examples. Each plan may have its own controlled vocabulary. Therefore the codes used here should relate to the tier codes used in the member's drug formulary"
* costToBeneficiary.value[x] only Money
* costToBeneficiary.valueMoney 1..1 MS
* costToBeneficiary.valueMoney obeys ValueMoney-details-or-extension
* costToBeneficiary.valueMoney.extension contains
   BeneficiaryCostString named C4DIC-BeneficiaryCostString-extension 0..1 MS


* costToBeneficiary.valueMoney.value 0..1 MS
* costToBeneficiary.valueMoney.currency 0..1 MS

* meta.lastUpdated ^comment = "Defines the date the coverage that was effective as of the date of service or admission (163). The Coverage Reference Resource SHALL be returned with data that was effective as of the date of service or admission of the claim"
* meta.profile ^comment = "meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest. CPCDS data element (190)"
* status ^comment = "Identfies the status of the coverage information (default: active) (133)"
* type ^comment = "Identifies if the coverage is PPO, HMO, POS, etc. (3)"
* subscriberId  ^comment = "The identifier assigned by the Payer on the subscriber's ID card (132)"
* beneficiary ^comment = "Identifier for a member assigned by the Payer.  If members receive ID cards, that is the identifier that should be provided (1).  This is the party who receives treatment for which the costs are reimbursed under the coverage. alternate path:  EOB.patient(Patient).identifier"
* relationship ^comment = "Relationship of the member to the person insured (subscriber). (72)"
* period ^comment = "Date that the contract became effective (74) and Date that the contract was terminated or coverage changed (75)"
* payor ^comment = "Issuer of the Policy (2)"
* class[group].value ^comment = "Employer account identifier (134)"
* class[group].name ^comment = "Name of the Employer Account (135)"
* class[plan].value ^comment = "Business concept used by a health plan to describe its benefit offerings (154)"
* class[plan].name ^comment = "Name of the health plan benefit offering assigned to the Plan Identfier (155)"

* costToBeneficiary.valueMoney.extension[BeneficiaryCostString] ^comment = "Either valueMoney.value and valueMoney.currency is MS or Beneficiary Cost String extension is MS"
* costToBeneficiary.valueMoney.value ^comment = "Either valueMoney.value and valueMoney.currency is MS or Beneficiary Cost String extension is MS"
* costToBeneficiary.valueMoney.currency ^comment = "Either valueMoney.value and valueMoney.currency is MS or Beneficiary Cost String extension is MS"

RuleSet: Metaprofile-supportedProfile-slice
* meta.profile ^slicing.discriminator.type = #pattern
* meta.profile ^slicing.discriminator.path = "$this"
* meta.profile ^slicing.rules = #open
* meta.profile ^slicing.ordered = false
* meta.profile ^slicing.description = "Slice based on value"
* meta.profile contains supportedProfile 1..1



Invariant: ValueMoney-details-or-extension
Description: "costToBeneficiary SHALL have (value AND currency) OR Beneficiary Cost String extension, but not both"
Expression: "((value.exists() and currency.exists()) xor extension.where(url='http://hl7.org/fhir/us/insurance-card/StructureDefinition/C4DIC-BeneficiaryCostString-extension').exists()) and ((value.exists() xor currency.exists())).not()"
Severity: #error



---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/fsh/Examples.fsh

Instance: Example-Coverage-FSH
InstanceOf: C4DICCoverage
Description: "Coverage Example 1 in FSH"
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2021-04-06T10:49:02.473+00:00"
* meta.profile[supportedProfile] = "http://hl7.org/fhir/us/insurance-card/StructureDefinition/C4DIC-Coverage"

* extension[PlanBeneficiaries][+].extension[memberId].valueString = "102345672-01"
* extension[PlanBeneficiaries][=].extension[name].valueHumanName.family = "Doe"
* extension[PlanBeneficiaries][=].extension[name].valueHumanName.given = "John"

* extension[PlanBeneficiaries][+].extension[memberId].valueString = "102345672-02"
* extension[PlanBeneficiaries][=].extension[name].valueHumanName.family = "Doe"
* extension[PlanBeneficiaries][=].extension[name].valueHumanName.given = "jane"

* extension[PlanBeneficiaries][+].extension[memberId].valueString = "102345672-03"
* extension[PlanBeneficiaries][=].extension[name].valueHumanName.family = "Doe"
* extension[PlanBeneficiaries][=].extension[name].valueHumanName.given = "Jimmy"

* extension[PlanBeneficiaries][+].extension[memberId].valueString = "102345672-04"
* extension[PlanBeneficiaries][=].extension[name].valueHumanName.family = "Doe"
* extension[PlanBeneficiaries][=].extension[name].valueHumanName.given = "Ginny"


* extension[AdditionalCardInformation][+].valueAnnotation.text = "If you use a TTY, call 711.\nYou may be asked to present this card when you receive care or fill a perscription. This card does not gaurentee coverage. Intentionally misusing this card may be considered fraud or a violation of the law.\nWe encourage you to use a primary care physician as a valuable resource and personal health advocate."


* extension[CardIssueDate].valueDate = "2020-12-15"

* extension[ColorPalette].extension[BackgroundColor].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/IECColourManagement##00bfff
* extension[ColorPalette].extension[ForegroundColor].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/IECColourManagement##000000
* extension[ColorPalette].extension[HighlightColor].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/IECColourManagement##ceebf5

* extension[Logo]
  * extension[label].valueString = "ACME Inc."
  * extension[description].valueString = "Company logo"
  * extension[image].valueAttachment.contentType = #image/png
  * extension[image].valueAttachment.data = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAkCAQAAAAqEXJRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflCBoOCChye9NTAAAAsklEQVQ4y+WSsQrCMBCGv9ZCUdwUBEcfR+c+kVPewHdxdxEcBQW1FBTpkFoQ6iJxiSHaRCdB9L/l5+6/kP/uAHpMOKCeYoegDdBlUyveY06zwZghPvQpYe3tVyhmARdi/DhGVvnEVLMRLc1irOcWRpqanAx5g98QRI6WhI6dsAcVkrB82IW0BTmr2rJkgHr5heIzNgsqv+CMYEDutlkh9ARSt81/PpjvONqt4XvDMq6alTdjhHqxFxxRQAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOC0yNlQxNDowODo0MCswMDowMF+TI3oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDgtMjZUMTQ6MDg6NDArMDA6MDAuzpvGAAAAAElFTkSuQmCC"



* extension[QRCode][+]
  * extension[label].valueString = "Some label for this QR code"
  * extension[description].valueString = "Usage text for this QR code for the end user"
  * extension[image].valueAttachment.contentType = #image/png
  * extension[image].valueAttachment.data = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAkCAQAAAAqEXJRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflCBoOCChye9NTAAAAsklEQVQ4y+WSsQrCMBCGv9ZCUdwUBEcfR+c+kVPewHdxdxEcBQW1FBTpkFoQ6iJxiSHaRCdB9L/l5+6/kP/uAHpMOKCeYoegDdBlUyveY06zwZghPvQpYe3tVyhmARdi/DhGVvnEVLMRLc1irOcWRpqanAx5g98QRI6WhI6dsAcVkrB82IW0BTmr2rJkgHr5heIzNgsqv+CMYEDutlkh9ARSt81/PpjvONqt4XvDMq6alTdjhHqxFxxRQAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOC0yNlQxNDowODo0MCswMDowMF+TI3oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDgtMjZUMTQ6MDg6NDArMDA6MDAuzpvGAAAAAElFTkSuQmCC"

* extension[Barcode][+]
  * extension[label].valueString = "Some label for this Barcode"
  * extension[description].valueString = "Usage text for this Barcode for the end user"
  * extension[image].valueAttachment.contentType = #image/png
  * extension[image].valueAttachment.data = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAkCAQAAAAqEXJRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflCBoOCChye9NTAAAAsklEQVQ4y+WSsQrCMBCGv9ZCUdwUBEcfR+c+kVPewHdxdxEcBQW1FBTpkFoQ6iJxiSHaRCdB9L/l5+6/kP/uAHpMOKCeYoegDdBlUyveY06zwZghPvQpYe3tVyhmARdi/DhGVvnEVLMRLc1irOcWRpqanAx5g98QRI6WhI6dsAcVkrB82IW0BTmr2rJkgHr5heIzNgsqv+CMYEDutlkh9ARSt81/PpjvONqt4XvDMq6alTdjhHqxFxxRQAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOC0yNlQxNDowODo0MCswMDowMF+TI3oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDgtMjZUMTQ6MDg6NDArMDA6MDAuzpvGAAAAAElFTkSuQmCC"

* extension[SupportingImage][+]
  * extension[label].valueString = "Some label text"
  * extension[description].valueString = "Some text for the end user about the usage/meaning of this image"
  * extension[image].valueAttachment.contentType = #image/png
  * extension[image].valueAttachment.data = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAkCAQAAAAqEXJRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflCBoOCChye9NTAAAAsklEQVQ4y+WSsQrCMBCGv9ZCUdwUBEcfR+c+kVPewHdxdxEcBQW1FBTpkFoQ6iJxiSHaRCdB9L/l5+6/kP/uAHpMOKCeYoegDdBlUyveY06zwZghPvQpYe3tVyhmARdi/DhGVvnEVLMRLc1irOcWRpqanAx5g98QRI6WhI6dsAcVkrB82IW0BTmr2rJkgHr5heIzNgsqv+CMYEDutlkh9ARSt81/PpjvONqt4XvDMq6alTdjhHqxFxxRQAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOC0yNlQxNDowODo0MCswMDowMF+TI3oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDgtMjZUMTQ6MDg6NDArMDA6MDAuzpvGAAAAAElFTkSuQmCC"


* identifier[memberid].type = http://terminology.hl7.org/CodeSystem/v2-0203#MB "Member Number"
* identifier[memberid].system = "https://www.acmeinsurance.com/glossary/memberid"
* identifier[memberid].value = "102345672-02"
* identifier[memberid].assigner.display = "Acme Insurance Co"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/v3-ActCode#HIP "health insurance plan policy"
* type.text = "health insurance plan policy"
* subscriber = Reference(Patient/Example-Patient1) "John Doe"
* subscriberId = "102345672-01"
* beneficiary = Reference(Patient/Example-Patient2) "Jane Doe"
* dependent = "02"
* relationship = http://terminology.hl7.org/CodeSystem/subscriber-relationship#spouse "Spouse"
* relationship.text = "Spouse"
* period.start = "2021-01-01"
* payor = Reference(Organization/Example-PayerOrganization1) "Acme Insurance Co"


* class[+].type = http://terminology.hl7.org/CodeSystem/coverage-class#group
* class[=].value = "993355"
* class[=].name = "Stars Inc"
* class[+].type = http://terminology.hl7.org/CodeSystem/coverage-class#plan
* class[=].value = "11461128"
* class[=].name = "Acme Gold Plus"
* class[+].type = http://hl7.org/fhir/us/insurance-card/CodeSystem/C4DICExtendedCoverageClassCS#division
* class[=].value = "11"
* class[+].type = http://hl7.org/fhir/us/insurance-card/CodeSystem/C4DICExtendedCoverageClassCS#network
* class[=].value = "561490"
* class[=].name = "Acme Gold Plus South"
* class[+].type = http://terminology.hl7.org/CodeSystem/coverage-class#rxbin
* class[=].value = "100045"
* class[+].type = http://terminology.hl7.org/CodeSystem/coverage-class#rxpcn
* class[=].value = "1234000"

* costToBeneficiary[+].type = http://hl7.org/fhir/us/insurance-card/CodeSystem/C4DICExtendedCopayTypeCS#FamOutDed "Family Out of Network Deductible"
* costToBeneficiary[=].valueMoney.value = 10000
* costToBeneficiary[=].valueMoney.currency = #USD
* costToBeneficiary[+].type = http://hl7.org/fhir/us/insurance-card/CodeSystem/C4DICExtendedCopayTypeCS#FamInDed "Family In Network Deductible"
* costToBeneficiary[=].valueMoney.value = 8000
* costToBeneficiary[=].valueMoney.currency = #USD
* costToBeneficiary[+].type = http://hl7.org/fhir/us/insurance-card/CodeSystem/C4DICExtendedCopayTypeCS#FamRxOutDed "Family Pharmacy Out of Network Deductible"
* costToBeneficiary[=].valueMoney.value = 2000
* costToBeneficiary[=].valueMoney.currency = #USD
* costToBeneficiary[+].type = http://hl7.org/fhir/us/insurance-card/CodeSystem/C4DICExtendedCopayTypeCS#FamRxInDed "Family Pharmacy In Network Deductible"
* costToBeneficiary[=].valueMoney.value = 1500
* costToBeneficiary[=].valueMoney.currency = #USD
* costToBeneficiary[+].type = http://hl7.org/fhir/us/insurance-card/CodeSystem/C4DICExtendedCopayTypeCS#FamOutMax "Family Out of Network Out of Pocket Maximum"
* costToBeneficiary[=].valueMoney.value = 12000
* costToBeneficiary[=].valueMoney.currency = #USD
* costToBeneficiary[+].type = http://hl7.org/fhir/us/insurance-card/CodeSystem/C4DICExtendedCopayTypeCS#FamInMax "Family In Network Out of Pocket Maximum"
* costToBeneficiary[=].valueMoney.value = 10000
* costToBeneficiary[=].valueMoney.currency = #USD
* costToBeneficiary[+].type = http://hl7.org/fhir/us/insurance-card/CodeSystem/C4DICExtendedCopayTypeCS#FamRxOutMax "Family Pharmacy Out of Network Out of Pocket Maximum"
* costToBeneficiary[=].valueMoney.value = 3000
* costToBeneficiary[=].valueMoney.currency = #USD
* costToBeneficiary[+].type = http://hl7.org/fhir/us/insurance-card/CodeSystem/C4DICExtendedCopayTypeCS#FamRxInMax "Family Pharmacy In Network Out of Pocket Maximum"
* costToBeneficiary[=].valueMoney.value = 2000
* costToBeneficiary[=].valueMoney.currency = #USD

//* costToBeneficiary[+].type = http://terminology.hl7.org/CodeSystem/coverage-copay-type#gpvisit
//* costToBeneficiary[=].valueMoney.extension[BeneficiaryCostString][+].valueString = "N/A"
//* costToBeneficiary[=].valueMoney.extension[BeneficiaryCostString][=].url = "http://hl7.org/fhir/us/insurance-card/StructureDefinition/C4DIC-BeneficiaryCostString-extension"
//
//* costToBeneficiary[+].type = http://terminology.hl7.org/CodeSystem/coverage-copay-type#spvisit
//* costToBeneficiary[=].valueMoney.extension[BeneficiaryCostString][+].valueString = "N/A"
//* costToBeneficiary[=].valueMoney.extension[BeneficiaryCostString][=].url = "http://hl7.org/fhir/us/insurance-card/StructureDefinition/C4DIC-BeneficiaryCostString-extension"
//
//* costToBeneficiary[+].type = http://terminology.hl7.org/CodeSystem/coverage-copay-type#emergency
//* costToBeneficiary[=].valueMoney.extension[BeneficiaryCostString][+].valueString = "N/A"
//* costToBeneficiary[=].valueMoney.extension[BeneficiaryCostString][=].url = "http://hl7.org/fhir/us/insurance-card/StructureDefinition/C4DIC-BeneficiaryCostString-extension"

//* costToBeneficiary[+].type = http://hl7.org/fhir/us/insurance-card/CodeSystem/C4DICExtendedCopayTypeCS#rx
//* costToBeneficiary[=].valueMoney.extension[BeneficiaryCostString][+].valueString = "DED THEN $10/$40/$70/25%"
//* costToBeneficiary[=].valueMoney.extension[BeneficiaryCostString][=].url = "http://hl7.org/fhir/us/insurance-card/StructureDefinition/C4DIC-BeneficiaryCostString-extension"


---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/fsh/Extensions.fsh


Extension: PlanBeneficiaries
Id: C4DIC-PlanBeneficiaries-extension
Title: "Plan Beneficiaries"
Description: "This extension allows for the representation of all of the members on the plan with corresponding Names and MemberIDs. This enables health plans to pass this information along with the Coverage resources to align with how this content is printed on physical insurance cards."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims
* ^context[0].type = #element
* ^context[0].expression = "Coverage"
* extension contains
	memberId 1..1 MS and
    name 1..1 MS and
	personReference 0..1

* extension[memberId] ^short = "Member Id as string"
* extension[memberId].value[x] only string or id
* extension[memberId].value[x] 1..1
* extension[name] ^short = "Member Name"
* extension[name].value[x] only HumanName
* extension[name].value[x] 1..1
* extension[name].valueHumanName.family 1..1 MS
* extension[name].valueHumanName.given 0..* MS
* extension[personReference] ^short = "Reference to the Person resource"
* extension[personReference].value[x] only Reference(Person)
* extension[personReference].value[x] 1..1
//* extension[personReference].valueReference only Reference(Person)



Extension: BeneficiaryCostString
Id: C4DIC-BeneficiaryCostString-extension
Title: "Beneficiary Cost as String"
Description: "This extension allows for the representation of copay details as strings. This can be passed as part of the Coverage resource where payors need to communicate costToBeneficiary details that cannot be expressed as SimpleQuantity or Money data types."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims
* ^context[0].type = #element
//* ^context[0].expression = "Coverage"
* ^context[0].expression = "Coverage.costToBeneficiary.value.ofType(Money)"

* value[x] only string
* valueString ^short = "Cost represented as a string of text"
* valueString 1..1


Extension: AdditionalCardInformation
Id: C4DIC-AdditionalCardInformation-extension
Title: "Additional Insurance Card Information"
Description: "This extension enables the passing of free text items often found on insurance cards. Health plans may provide this extension as part of the Coverage resource to communicate concepts such as TTY, disclaimers about eligibility or limits to coverage, notice of dental or vision coverage, etc."
* value[x] 1..1
* value[x] only Annotation
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims
* ^context[0].type = #element
* ^context[0].expression = "Coverage"

Extension: CardIssueDate
Id: C4DIC-CardIssueDate-extension
Title: "Card Issue Date"
Description: "This extension allows for the expression of the date at which the insurance card was issued by the payer. The health plan may pass this along with the Coverage resource to indicate when the information became in force. Please note, this data element is distinct from the coverage period for the health plan as the insurance card may be provided in advance of the coverage start date or following the coverage start date (for example, in the event a replacement card is needed.)"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims
* ^context[0].type = #element
* ^context[0].expression = "Coverage"
* value[x] 1..1
* value[x] only date

Extension: BackgroundColor
Id: C4DIC-BackgroundColor-extension
Title: "Background Color"
Description: "This extension enables an insurance company to provide a background color to be used by consuming applications when they render the information found on an insurance card for the insurance plan member. When rendering foreground and background colors, the implementer SHOULD not use the same foreground and background colors and instead should algorithmically determine a high color contrast."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims
* ^context[+].type = #element
* ^context[=].expression = "Coverage.extension"
* value[x] only CodeableConcept
* valueCodeableConcept 1..1
* valueCodeableConcept from ISOColorVS

/*
* valueCodeableConcept.coding ^slicing.discriminator.path = "system"
* valueCodeableConcept.coding ^slicing.rules = #open
* valueCodeableConcept.coding ^slicing.discriminator.type = #pattern
* valueCodeableConcept.coding ^slicing.ordered = false   // can be omitted, since false is the default
* valueCodeableConcept.coding ^slicing.description = "Slice based on $this pattern"

* valueCodeableConcept.coding contains
    isoColor 1..1
//* valueCodeableConcept.coding[isoColor].system = "urn:iso:std:iso-iec:61966:2-1"
* valueCodeableConcept.coding[isoColor] from ISOColorVS
* valueCodeableConcept.coding[isoColor]
* valueCodeableConcept.coding[isoColor].code 1..1
*/

Extension: HighlightColor
Id: C4DIC-HighlightColor-extension
Title: "Highlight Color"
Description: "This extension enables an insurance company to provide a highlight color to be used by consuming applications when they render the information found on an insurance card for the insurance plan member. When rendering foreground and background colors, the implementer SHOULD not use the same foreground and background colors and instead should algorithmically determine a high color contrast."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims
* ^context[+].type = #element
* ^context[=].expression = "Coverage.extension"
* value[x] only CodeableConcept
* valueCodeableConcept 1..1
* valueCodeableConcept from ISOColorVS
/*
* valueCodeableConcept.coding ^slicing.discriminator.path = "system"
* valueCodeableConcept.coding ^slicing.rules = #open
* valueCodeableConcept.coding ^slicing.discriminator.type = #pattern
* valueCodeableConcept.coding ^slicing.ordered = false   // can be omitted, since false is the default
* valueCodeableConcept.coding ^slicing.description = "Slice based on $this pattern"
* valueCodeableConcept.coding contains
    isoColor 1..1
* valueCodeableConcept.coding[isoColor].system = "urn:iso:std:iso-iec:61966:2-1"
* valueCodeableConcept.coding[isoColor].code 1..1
*/

Extension: ForegroundColor
Id: C4DIC-ForegroundColor-extension
Title: "Foreground Color"
Description: "This extension enables an insurance company to provide a foreground color to be used by consuming applications when they render the information found on an insurance card for the insurance plan member. When rendering foreground and background colors, the implementer SHOULD not use the same foreground and background colors and instead should algorithmically determine a high color contrast."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims
* ^context[+].type = #element
* ^context[=].expression = "Coverage.extension"
* value[x] only CodeableConcept
* valueCodeableConcept 1..1
* valueCodeableConcept from ISOColorVS

/*
* valueCodeableConcept.coding ^slicing.discriminator.path = "system"
* valueCodeableConcept.coding ^slicing.rules = #open
* valueCodeableConcept.coding ^slicing.discriminator.type = #pattern
* valueCodeableConcept.coding ^slicing.ordered = false   // can be omitted, since false is the default
* valueCodeableConcept.coding ^slicing.description = "Slice based on $this pattern"

* valueCodeableConcept.coding contains
   isoColor 1..1
//* valueCodeableConcept.coding[isoColor].system = "urn:iso:std:iso-iec:61966:2-1"
* valueCodeableConcept.coding[isoColor] from ISOColorVS
* valueCodeableConcept.coding[isoColor]
* valueCodeableConcept.coding[isoColor].code 1..1
*/

Extension: ColorPalette
Id: C4DIC-ColorPalette-extension
Title: "Color Palette"
Description: "This extension groups the Foreground, Background and Highlight color extensions into a single extension. When rendering foreground and background colors, the implementer SHOULD not use the same foreground and background colors and instead should algorithmically determine a high color contrast."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims
* ^context[0].type = #element
* ^context[0].expression = "Coverage"
* extension contains
     ForegroundColor named C4DIC-ForegroundColor-extension 0..1 and
     BackgroundColor named C4DIC-BackgroundColor-extension 0..1 and
     HighlightColor named C4DIC-HighlightColor-extension 0..1



Extension: Logo
Id: C4DIC-Logo-extension
Title: "Logo"
Description: "This extension enables payers to provide an image of their company or organization logo for use by consuming applications when rendering the coverage information for use by the health plan member. This may assist in making the information provided feel more relevant or recongizable by the member. The extension also allows for the health plan to provide a Label for the image which can be displayed in the consuming application as well as a Description of the content in the image file. Detailed descriptions are encouraged to assist with accessibility."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims
* ^context[0].type = #element
* ^context[0].expression = "Coverage"
* extension contains
	description 1..1 and
	image 1..1 and
	label 1..1
* extension[description].value[x] only string
* extension[image].value[x] only Attachment or Reference(DocumentReference)
// Perhaps value[x] should be 1..1, or else there is no requirement to have the actual image(reference or attachment)
// * extension[image].value[x] 1..1
* extension[image].valueAttachment.contentType 1..1
* extension[image].valueAttachment.data 1..1

* extension[image].valueReference only Reference(DocumentReference)
* extension[image].valueReference.reference 1..1

* extension[label].value[x] only string

Extension: QRCode
Id: C4DIC-QRCode-extension
Title: "QR Code"
Description: "This extension enables payers to provide an image of the QR code found on a member's physicial insurance card. This image may be displayed by consuming applications when rendering the coverage information for use by the health plan member. Often there are data elements relevant to the health plan coverage encoded in the QR code. The extension also allows for the health plan to provide a Label for the image which can be displayed in the consuming application as well as a Description of the content in the image file. Detailed descriptions are encouraged to assist with accessibility."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims
* ^context[0].type = #element
* ^context[0].expression = "Coverage"
* extension contains
	description 1..1 and
	image 1..1 and
	label 1..1
* extension[description].value[x] only string
* extension[image].value[x] only Attachment or Reference(DocumentReference)
// Perhaps value[x] should be 1..1, or else there is no requirement to have the actual image(reference or attachment)
// * extension[image].value[x] 1..1
* extension[image].valueAttachment.contentType 1..1
* extension[image].valueAttachment.data 1..1

* extension[image].valueReference only Reference(DocumentReference)
* extension[image].valueReference.reference 1..1

* extension[label].value[x] only string

Extension: Barcode
Id: C4DIC-Barcode-extension
Title: "Barcode"
Description: "This extension enables payers to provide an image of the barcode found on a member's physicial insurance card. This image may be displayed by consuming applications when rendering the coverage information for use by the health plan member. Often there are data elements relevant to the health plan coverage encoded in the barcode. The extension also allows for the health plan to provide a Label for the image which can be displayed in the consuming application as well as a Description of the content in the image file. Detailed descriptions are encouraged to assist with accessibility."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims
* ^context[0].type = #element
* ^context[0].expression = "Coverage"
* extension contains
	description 1..1 and
	image 1..1 and
	label 1..1
* extension[description].value[x] only string
* extension[image].value[x] only Attachment or Reference(DocumentReference)
// Perhaps value[x] should be 1..1, or else there is no requirement to have the actual image(reference or attachment)
// * extension[image].value[x] 1..1
* extension[image].valueAttachment.contentType 1..1
* extension[image].valueAttachment.data 1..1

* extension[image].valueReference only Reference(DocumentReference)
* extension[image].valueReference.reference 1..1

* extension[label].value[x] only string

Extension: SupportingImage
Id: C4DIC-SupportingImage-extension
Title: "Supporting image"
Description: "This extension enables payers to provide other supporting images found on a member's physicial insurance card. A supporting image may be displayed by consuming applications when rendering the coverage information for use by the health plan member. These images may communicate additional information to the member such as the type of coverage provided or partner logos. The extension also allows for the health plan to provide a Label for the image which can be displayed in the consuming application as well as a Description of the content in the image file. Detailed descriptions are encouraged to assist with accessibility."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims
* ^context[0].type = #element
* ^context[0].expression = "Coverage"
* extension contains
	description 1..1 and
	image 1..1 and
	label 1..1
* extension[description].value[x] only string
* extension[image].value[x] only Attachment or Reference(DocumentReference)
// Perhaps value[x] should be 1..1, or else there is no requirement to have the actual image(reference or attachment)
// * extension[image].value[x] 1..1
* extension[image].valueAttachment.contentType 1..1
* extension[image].valueAttachment.data 1..1

* extension[image].valueReference only Reference(DocumentReference)
* extension[image].valueReference.reference 1..1

* extension[label].value[x] only string


// ---- Attempting Invariant to prevent foreground and background color being the same.
Invariant:  foreground-and-background-color-nor-equal
Description: "In Color Palette extension if forground or background color are present they can not be equal."
Expression: "extension('ForegroundColor').exists() and extension('BackgroundColor').exists() and (extension('ForegroundColor')=extension('BackgroundColor'))"
Severity:   #error


---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/fsh/OrganizationProfile.fsh

Profile: C4DICOrganization
Parent: $USCoreOrganization
Id: C4DIC-Organization
Title: "C4DIC Organization"
Description: "This profile builds upon the US Core Organization profile. It is used to convey a payer organization."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims

* meta 1..1 MS

* meta.lastUpdated 1..1 MS

* meta.profile 1..*



* insert Metaprofile-supportedProfile-slice

* meta.profile[supportedProfile] = Canonical(C4DICOrganization)



* identifier contains

payerid 0..* MS


* identifier[payerid] ^short = "Payer ID"

* identifier[payerid] ^patternIdentifier.type = C4DICIdentifierType#payerid

* identifier[payerid] ^comment = "Internal value assigned by the payer responsible for the coverage"


* contact MS
/*
* contact.purpose from C4DICContactTypeVS /*(required)*/
/*
* contact ^slicing.discriminator.type = #pattern

* contact ^slicing.discriminator.path = "type"

* contact ^slicing.rules = #open

* contact ^slicing.ordered = false // can be omitted, since false is the default

* contact ^slicing.description = "Slice based on value pattern"

* contact contains

PATINF 0..1 MS and

PAYOR 0..1 MS and

pharma 0..1 MS and

rxmailorder 0..* MS and

provider 0..* MS and

virtual 0..* MS



/* is there a way we can loop through these contact types instead of having to

manually define them one by one?

CAS: Yes, just define your valueSet with the codes of interest. See "C4DICContactTypeVS" in ValueSets.fsh.
    If you want to allow other codes where needed make it (extensible) - See below
*/
/*
* contact[PATINF].purpose = $HL7ContactTypeCS#PATINF

* contact[PAYOR].purpose = $HL7ContactTypeCS#PAYOR

* contact[pharma].purpose = C4DICExtendedContactTypeCS#pharma

* contact[rxmailorder].purpose = C4DICExtendedContactTypeCS#rxmailorder

* contact[provider].purpose = C4DICExtendedContactTypeCS#provider

* contact[virtual].purpose = C4DICExtendedContactTypeCS#virtual

*/

* contact.purpose from C4DICContactTypeVS (extensible)


* contact.telecom MS

* contact.address MS



* meta.lastUpdated ^comment = "Defines the date the Resource was created or updated, whichever comes last. Payers SHALL provide the last time the data was updated or the date of creation in the payer’s system of record, whichever comes last. Apps will use the meta.lastUpdated value to determine if the Reference resources are as of the current date or date of service."

* meta.profile ^comment = "meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics. Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest."


---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/fsh/PatientProfile.fsh

Profile: C4DICPatient
Parent: Patient
Id: C4DIC-Patient
Title: "C4DIC Patient"
Description: "The goal of this profile is to describe a data-minimized version of Patient used to convey information about the Member who has health insurance coverage. Information that would normally not appear on a health insurance card is not required. The use of this profile is only approved for conveying information related to a health insurance card as part of this IG."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims

// Inherited short and definition include animals
* . ^short = "Information about an individual who has health insurance coverage"
* . ^definition = "Demographics and other administrative information about an individual with insurance coverage provided by a health plan."

* meta 1..1 MS
* meta.lastUpdated 1..1 MS
* meta.lastUpdated ^comment = "Defines the date the Resource was created or updated, whichever comes last.  Payers SHALL provide the last time the data was updated or the date of creation in the payer’s system of record, whichever comes last."
* meta.profile 1..*
* meta.profile ^comment = "meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest."
* insert Metaprofile-supportedProfile-slice
* meta.profile[supportedProfile] = Canonical(C4DICPatient)

* name 1..1 MS
* name.family 1..1 MS
* name.family ^comment = "Where an individual has only one name, payers SHALL provide the information as family name to ensure consistency."
* name.given 0..* MS

* birthDate 0..1
* birthDate ^comment = "MAY be excluded. This data element is printed on some physical insurance cards, but not all."

* gender 0..1
* gender ^comment = "MAY be excluded. Gender is not a data element typically found on physical insurance cards. Furthermore, self-identified gender may change over time. Including this element could create a situation where the gender element in the provided resource does not match that in another form of identification or does not match the member's self-identified gender."


---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/fsh/README.md

# insurance-card-fsh
CARIN Digital Insurance Card using FHIR Shorthand


---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/fsh/ValueSets.fsh


ValueSet: C4DICCoverageIdentifierType
Title: "C4DIC Coverage Identifier Type"
Description: "Identifies the type of identifier for payer coverage"
* C4DICIdentifierType#um
* $IdentifierType#MB
* $IdentifierType#MR
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = true


ValueSet: C4DICCoverageClassVS
Title: "C4DIC Coverage Class"
Description: "This value set includes an extended set of coverage class codes."
* codes from system $CoverageClassCS
* codes from system C4DICExtendedCoverageClassCS
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = true
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims


ValueSet: C4DICCopayTypeVS
Title: "C4DIC Copay Type"
Description: "This value set includes an extended set of copay type codes."
* codes from valueset $HL7CopayTypeVS
* codes from system C4DICExtendedCopayTypeCS
* codes from system $DrugTierCS
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = true
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims

ValueSet: C4DICContactTypeVS
Title: "C4DIC Contact Type"
Description: "This value set includes an extended set of contact type codes."
* $HL7ContactTypeCS#PATINF
* $HL7ContactTypeCS#PAYOR
* codes from system C4DICExtendedContactTypeCS
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims

ValueSet: ISOColorVS
Title: "C4DIC ISO Color"
Description: "ISO Color Measurement and Management"
* codes from system $ISOColorCS
* ^experimental = false
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #claims




---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/pagecontent/Authorization_Authentication_and_Registration.md


### FHIR Security and Privacy Guidance
<p>Security and privacy are critical aspects to consider with any interface where data, like that described in this Implementation Guide, is shared or otherwise made accessible. Implementers of this Implementation Guide should make sure their APIs are secure in accordance with guidance defined in the FHIR standard where applicable: </p>

* The FHIR Security specification provides guidance related to communication security, authentication, authorization/access control, audit, digital signatures, attachments, labels, narrative, and input validation. The FHIR security specification is available <a href="http://hl7.org/fhir/R4/security.html">here</a>
* The FHIR Security and Privacy Module describes access control and authorization considerations to protect a FHIR server, how to document permissions granted, and how to keep records of performed events. The FHIR Security and privacy module can be found <a href="http://hl7.org/fhir/R4/secpriv-module.html">here</a>
* The FHIR Implementer’s Safety Checklist helps implementers be sure that they have considered all the parts of FHIR that impact their system design regarding privacy, security, provenance, and safety. The FHIR safety check list is available <a href="http://hl7.org/fhir/R4/safety.html">here</a>

### Legal and Regulatory Requirements
<p>Implementers must ensure that APIs fully and successfully implement privacy and security features such as, but not limited to, those required to comply with HIPAA privacy and security requirements and other applicable law protecting the privacy and security of protected health information. Note that the HIPAA regulations apply only to HIPAA covered entities and their business associates. After information leaves the control of an entity covered under HIPAA, the HIPAA regulations do not apply. FTC consumer protection laws and other state and federal laws may apply.</p>

### SMART on FHIR Application Launch
<p>Client applications and Payers SHALL support the standalone launch sequence (launch/Patient) of the <a href="http://hl7.org/fhir/smart-app-launch/app-launch.html">SMART App Launch framework</a> for user authorization and client authentication. Payers SHALL publish their authorization and token endpoints for discovery in accordance with the SMART App Launch framework. If the app needs to authenticate the identity of the end-user, it MAY include two OpenID Connect scopes: openid and fhirUser. When these scopes are requested, and the request is granted, the app MAY receive an id token along with the access token.</p>

### Authorization and Authentication
<p>The use of this Implementation Guide is predicated on client applications being registered with a payer’s system of record in order to retrieve a client_id and client_secret for API access. The registration process is outside the scope of this IG. </p>

<p>This IG is also predicated on an insurance plan member (or their personal representative) consenting for their data to be shared with a consumer-facing application. This process follows the SMART on FHIR protocols linked above and typically involves the member (or their personal representative) agreeing to the terms of service and privacy policies of both the insurance plan and the consuming application before the data exchange takes place.</p>


---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/pagecontent/Background.md

### Introduction
<p>This Implementation Guide was born out of the CARIN Alliance Payer's Implementer Forum where representatives from major health insurance companies in the US come together to collaborate on FHIR server implementation. In 2020, participants of the forum indicated a need for better guidance on how to represent the full data elements found on physical insurance cards within a FHIR-based transaction. In particular, participating payers noted the following challenges when trying to build out FHIR Coverage resources including all the necessary data elements:</p>

* The base Coverage resource allows for representation of the patient for whom the Coverage resource pertains as well as the subscriber. There is not a standard way to represent all of the beneficiaries for the plan and their corresponding member IDs the way they would be found on a physical insurance card.
* The Coverage resource "network" field allows for only one single string. There is a need to allow for a unique identifier for the network as well as a consumer-friendly name which is often printed on the physical insurance card.
* The Coverage resource does not allow for expression of copays in the form of text strings. Some copays are able to represented as the required SimpleQuantity or Money data types while others require strings.
* There is a need to standardize how images often found on insurance cards are able to be expressed in a FHIR-based transaction in a way that is predictable and renderable by consuming applications.

While STU 1.0.0 focused on a FHIR API-based exchange of digital insurance cards, in 2023, the need was identified to create portable, verifiable versions of digital insurance cards. In [version 1.1.0], the IG was expanded to include support for SMART Health Links.


### Overview
<p>Payers can leverage the Coverage resource, the Organization resource, and the Patient resource to represent the essential information found on the physicial insurance card. This Implementation Guide creates 3 FHIR profiles to enable the standardized exchange of this information. The purpose of each profile is as follows:</p>

* C4DIC Coverage: The CARIN for Digital Insurance Card profile for the Coverage resource communicates the insurance plan information 
* C4DIC Organization: The CARIN for Digital Insurance Card profile for the Organization resource communicates the contact information for the plan (often found on the back of the physical insurance card)
* C4DIC Patient: The CARIN for Digital Insurance Card profile for the Patient resource communicates additional demographic information such as date of birth for the member whose data is being retrieved

<p>The below diagram outlines how these profiles relate. As shown below, the coverage.payor field will contain a reference to the corresponding Organization resource, and the coverage.beneficiary field will contain a reference to the corresponding Patient resource for the member whose data is being retrieved.</p>

<p><img style="width: 85%; float: none; align: middle;" src="ResourceDiagram.png"/></p>

### Additional Information

<p>For additional information about the exchange of insurance card information please visit these pages:</p>

* <a href="Use_Case.html">Use Case</a>
* <a href="Physical_Insurance_Card_Data_Elements.html">Physical Insurance Card Data Elements</a>

### Boundaries

<p>This Implementation Guide enables the digital exchange and digital rendering of the elements found on a person’s physical insurance card. The primary use case is to support insurance members who wish to retrieve their current proof of insurance coverage digitally via a consumer-facing application. </p>
<p>This IG does NOT address eligibility checks between health providers and the insurance company. </p>
<p>Prescription benefit information is addressed in this implementation guide, but it does not replace pharmacy-specific benefit card standards, i.e. NCPDP standards, and is being provided to augment existing physical insurance cards where pharmacy benefits may need to be included with other coverage.</p>
<p>In keeping with the 80/20 rule, this IG does not solve for all possible insurance card data elements. If additional data elements of interest are identified by the community, they will be integrated in STU2 of this IG. For example, there are a few unique fields relevant to Medicare cards that were unable to be incorporated into this initial IG development cycle (i.e. CMS Contract Number, PBP Code, Segment ID). </p>



---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/pagecontent/ChangeHistory.md


{% include style_insert_table_blue.html %}

### Changes and Updates for version 1.1.0 (from version 1.0.0)

| JIRA Ticket                                         | Change                                                                           |
|-----------------------------------------------------|----------------------------------------------------------------------------------|
| Publisher 1.6.2 requires auto-oid-root value        | hl7.fhir.us.insurance-card = 2.16.840.1.113883.4.642.40.9                                                                     |
| Publication Prep                                    | Change Version to 1.1.0                                                          | 
| [FHIR-43141](https://jira.hl7.org/browse/FHIR-43141) | Please tighten your extension contexts                                           | 
| [FHIR-43109](https://jira.hl7.org/browse/FHIR-43109) | Extensions should have more specific context                                     | 
| [FHIR-42840](https://jira.hl7.org/browse/FHIR-42840) | Copay type lists Rx but Tiers are needed                                         | 
| [FHIR-42779](https://jira.hl7.org/browse/FHIR-42779) | Background color is specified, therefore the foreground should also be specified | 

#### Home Page
[https://build.fhir.org/ig/HL7/carin-digital-insurance-card/index.html](https://build.fhir.org/ig/HL7/carin-digital-insurance-card/index.html)
Update the intro to reflect the SHL use case.

1.1 Introduction
This implementation guide describes the CARIN for Digital Insurance Card (C4DIC) Framework, providing a set of resources that payers can display to consumers via a FHIR API or SMART Health Link. This implementation guide focuses on standardizing how data elements from the physical insurance card can be transmitted in a FHIR-based exchange, leveraging the Coverage resource as well as Patient and Organization resources. See the Table of Contents for more information.

#### Background
[https://build.fhir.org/ig/HL7/carin-digital-insurance-card/Background.html](https://build.fhir.org/ig/HL7/carin-digital-insurance-card/Background.html)
Add a reference to updating the IG to include SHLs at the end of Introduction 2.1:
While STU 1.0.0 focused on a FHIR API -based exchange of digital insurance cards, in 2023, the need was identified to create portable, verifiable versions of digital insurance cards. In STU 1.1.0, the IG was expanded to include support for SMART Health Links.

#### Use Cases
[https://build.fhir.org/ig/HL7/carin-digital-insurance-card/Use_Case.html#use-cases](https://build.fhir.org/ig/HL7/carin-digital-insurance-card/Use_Case.html#use-cases)
Add a new sub-use-case for SHLs as a means for consumer access and exchange:
The Digital Insurance Card can also be made available to the member in a verifiable, tamper-proof package that the subscriber can store, manage, and share with healthcare providers as they see fit. In this model, the payer provides the member with a QR code or URL representing their digital insurance card, likely using the same modalities used to share digital cards today (e.g. payer mobile application, website, email). The member is able to present the QR code to be scanned during in-person visits or provide the QR code or URL to mobile or web forms during online registration or check-in flows. The provider then uses the QR code or URL to retrieve the Digital Insurance Card and verify its authenticity.
SMART Health Cards are a FHIR-based verifiable credential technical framework that has been made available to hundreds of millions of people around the world for proof of vaccination and infectious disease laboratory testing results.
SMART Health Links are a derivation of SMART Health Cards that enable larger and dynamic data payloads as well as other methods of interaction.


_Flow:_
Payer shares the insurance card with a member (e.g., as a QR code and text-based link, via the payer website, mobile application, secure messaging, etc)
Member downloads/retrieves the QR code and/or link.
Member stores the QR code and link as they see fit, with options ranging from printing on paper to storing in health apps or wallets capable of interpreting SMART Health Links.
Member presents the SMART Health Link to healthcare provider
In-person:
Member presents the QR code on their device or paper
Check-in staff or kiosk scan the QR code
Online:
Member provides the insurance card to the online check-in app or web flow by pasting the link into a field, uploading a image of the QR, or in the future via API-based methods tailored to wallet and health apps
Healthcare provider processes the SMART Health Link and retrieves the insurance card information from the Payor (or designated data hosting service), verifying cryptographic signatures if desired
Healthcare provider, EHR vendor, or other platform vendor incorporates insurance information into existing workflows

#### Guidance

[https://build.fhir.org/ig/HL7/carin-digital-insurance-card/General_Guidance.html](https://build.fhir.org/ig/HL7/carin-digital-insurance-card/General_Guidance.html)

_Add a section for SHL-based implementation:_
**A Payer, to provide members with SMART Health Digital Insurance Cards:**

**SHALL** generate a complete and appropriate FHIR bundle using as described in this specification, including Coverage, Organization, and Patient information, as well as any additional information defined by this IG’s extensions.
**SHALL** follow the SMART Health Cards specification to create a SMART Health Card containing the FHIR bundle.
**SHALL** create the SMART Health Card as a JWS string, as defined by https://spec.smarthealth.cards/#health-cards-are-encoded-as-compact-serialization-json-web-signatures-jws.
**SHOULD** implement revocation as defined by https://spec.smarthealth.cards/#revocation.

**SHALL** follow the SMART Health Links specification to create a SMART Health Link referencing the SMART Health Card.
**SHALL** include the SMART Health Card as `application/smart-health-card`, a JSON file with a `.verifiableCredential array` containing the SMART Health Card JWS string, as specified by https://spec.smarthealth.cards#via-file-download.
**SHALL NOT** require the user to set a passcode, and SHALL NOT enforce a passcode by default.

**SHALL** share the Digital Insurance Card with the member as other personal information would be shared.
**SHALL** provide the member the SMART Health Link in text URI format as well as   QR format, as described here .https://docs.smarthealthit.org/smart-health-links/spec#sharing-user-transmits-a-shlink.
**SHALL** in close proximity to the link and QR code, specify to the member
Data referenced in the link.
Expiration date.
Whether or not the information is updated over time.
Caution about sharing the link with parties they trust.



**A Consumer App, in helping members manage and share their Digital Insurance Card:**
Can process the SMART Health Link as described here [https://docs.smarthealthit.org/smart-health-links/spec#shl-receiving-application-processes-a-shlink](https://docs.smarthealthit.org/smart-health-links/spec#shl-receiving-application-processes-a-shlink).
**SHALL** display the included data elements for the card.
If the `flag: L` is present, indicating the contents are for long term use, the application SHALL update the display of the contents or display a message noting that the contents may be stale.

**SHALL** display the expiration date, `exp` (if present)  for the card.
**SHALL** inform the user if the card has been revoked, as specified by [https://spec.smarthealth.cards/#revocation](https://spec.smarthealth.cards/#revocation).
**SHALL** update the display of data from the SMART Health Link
**SHALL** provide the member with the ability to share the SMART Health Link as they see fit.
**SHALL** provide the member the SMART Health Link in text URI format as well as QR code, as described here [https://docs.smarthealthit.org/smart-health-links/spec#sharing-user-transmits-a-shlink](https://docs.smarthealthit.org/smart-health-links/spec#sharing-user-transmits-a-shlink).
**SHALL** in close proximity to the link and QR code, caution the member about sharing the link with parties they trust.


**Providers, receiving the Digital Insurance Card:**
Can process the SMART Health Link as described here [https://docs.smarthealthit.org/smart-health-links/spec#shl-receiving-application-processes-a-shlink](https://docs.smarthealthit.org/smart-health-links/spec#shl-receiving-application-processes-a-shlink).


---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/pagecontent/Downloads.md

<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://hl7.org/fhir ../../input-cache/schemas-r5/fhir-single.xsd">

<ul>
<li><a href="full-ig.zip">Full Specification (zip)</a></li>
<li><a href="definitions.json.zip">JSON Definitions (zip)</a></li>
<li><a href="examples.json.zip">JSON Examples (zip)</a></li>
<li><a href="definitions.xml.zip">XML Definitions (zip)</a></li>
<li><a href="definitions.ttl.zip">Turtle Definitions</a></li>
</ul>

</div>

---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/pagecontent/Example-PayerOrganization1.json-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"PayerOrganizationExample1"
</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-09-08T00:00:00+00:00"
</td></tr>
<tr><td>meta.source</td><td>
"Organization/PayerOrganizationExample1"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/insurance-card/StructureDefinition/C4BB-Organization"</td></tr>
<tr><td>identifier[0].type.coding[0].system</td><td>
"http://hl7.org/fhir/us/insurance-card/CodeSystem/C4BBIdentifierType"
</td></tr>
<tr><td>identifier[0].type.coding[0].code</td><td>
#naiccode
</td></tr>
<tr><td>identifier[0].type.coding[0].display</td><td>
"NAIC Code"
</td></tr>
<tr><td>identifier[0].type.text</td><td>
"NAIC Code"
</td></tr>
<tr><td>identifier[0].system</td><td>
"urn:oid:2.16.840.1.113883.6.300"
</td></tr>
<tr><td>identifier[0].value</td><td>
95216
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/organization-type"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#pay
</td></tr>
<tr><td>type[0].text</td><td>
"Payer"
</td></tr>
<tr><td>name</td><td>
"UPMC Health Plan"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
1-844-220-4785 TTY: 711
</td></tr>
<tr><td>telecom[0].use</td><td>
"work"
</td></tr>
<tr><td>telecom[1].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[1].value</td><td>
1-866-406-8762
</td></tr>
<tr><td>telecom[1].use</td><td>
"work"
</td></tr>
<tr><td>address[0].type</td><td>
"physical"
</td></tr>
<tr><td>address[0].line[0]</td><td>"UPMC Health Plan"</td></tr>
<tr><td>address[0].line[1]</td><td>"Attn: Commercial Plans"</td></tr>
<tr><td>address[0].line[2]</td><td>"U.S. Steel Tower"</td></tr>
<tr><td>address[0].line[3]</td><td>"600 Grant Street"</td></tr>
<tr><td>address[0].city</td><td>
"Pittsburgh"
</td></tr>
<tr><td>address[0].state</td><td>
"PA"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"15219"
</td></tr>
</table>


---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/pagecontent/General_Guidance.md

<a name="actors"></a>
### Actors

The following actors are part of the CARIN IG for Digital Insurance Card:

* CARIN IG for Digital Insurance Requestor or Consumer App: An application that initiates a data access request to retrieve patient data. This can be thought of as the client in a client-server interaction.
* CARIN IG for Digital Insurance Responder or Health Plan API: A product that responds to the data access request providing patient data. This can be thought of as the server in a client-server interaction.

<a name="conformance-verbs"></a>
### Conformance Verbs

<p>The conformance verbs - <strong>SHALL, SHOULD, MAY</strong> - used in this guide are defined in <a style="font-size: 14px;" href="http://hl7.org/fhir/R4/conformance-rules.html">FHIR Conformance Rules.</a></p>

<a name="must-support"></a>
### Must Support

<p>For profiles defined in other IGs, the meaning of Must Support is established in the defining IG. Note that the Must Support requirements for this IG are modeled after the US Core implementation guide. The requirements for Health Plan API actors are modeled on those for US Core Responders, and the requirements for Consumer App actors is modeled on those for US Core Requestors. When querying and reading CARIN IG for Digital Insurance Card Profiles, Must Support on any profile data element SHALL be interpreted as follows:</p>

<li>Health Plan API actors <strong>SHALL</strong>&nbsp;be capable of populating all data elements as part of the query results as specified by the CARIN for Digital Insurance Card CapabilityStatement.</li>
<li>Consumer App actors <strong>SHALL</strong> be capable of processing resource instances containing the data elements without generating an error or causing the application to fail.</li>
<li>Consumer App actors <strong>SHALL</strong> be capable of displaying the data elements for human use.</li>
<li>In situations where information on a particular data element is not present and the reason for absence is unknown, Health Plan API actors SHALL NOT include the data elements in the resource instance returned as part of the query results.</li>
<li>In situations where information on a particular data element is missing and the Health Plan API actor knows the precise reason for the absence of data, Health Plan API actors SHALL send the reason for the missing information using either the nullFlavors or dataAbsentReason extensions.</li>
<li>When querying Health Plan APIs, Consumer App actors SHALL interpret missing data elements within resource instances as data not present in the Health Plan API actor's system. Consumer App actors SHALL be able to process resource instances with missing data without generating an error or causing the application to fail for the user. Consumer App actors SHOULD configure their applications to translate nullFalvors and dataAbsentReason extensions into a user-friendly message indicating the data has not been provided by the Health Plan API actor.</li>

<p>NOTE: Readers are advised to understand <a href="http://hl7.org/fhir/R4/terminologies.html">FHIR Terminology</a> requirements, <a href="http://hl7.org/fhir/R4/http.html">FHIR RESTful API</a> based on the HTTP protocol, along with <a href="http://hl7.org/fhir/R4/datatypes.html">FHIR Data Types</a>, <a href="http://hl7.org/fhir/R4/search.html">FHIR Search</a> and <a href="http://hl7.org/fhir/R4/resource.html">FHIR Resource</a> formats before implementing CARIN IG for Digital Insurance Card requirements.</p>
  
<a name="missing-data"></a>
  
### Missing Data

<p>If the source system does not have data for a Must Support data element with minimum cardinality = 0, the data element is omitted from the resource. If the source system does not have data for a required data element (in other words, where the minimum cardinality is &gt; 0), follow guidance defined in the core FHIR specification and summarized in the&nbsp;<a href="http://hl7.org/fhir/us/core/general-guidance.html#missing-data">US Core.</a></p>

<a name="conformance-to-us-core-profiles"></a>

### Conformance to US Core Profiles

<p>Any Health Plan API actor in this IG SHALL:</p>
  
* Be able to populate all profile data elements that have a minimum cardinality >= 1 and/or flagged as *Must Support* as defined by that profiles StructureDefinition.
* Conform to the US Core Server Capability Statement expectations for that profile's type.

<p>Any Consumer App actor in this IG SHALL:</p>
* Be able to process and retain all profile data elements that have a minimum cardinality >= 1 and/or flagged as Must Support as defined by that profiles StructureDefinition.
* Conform to the US Core Client Capability Statement expectations for that profiles type.

<a name="common-clinical-data-set"></a>

### U.S. Core Data for Interoperability and 2015 Edition Common Clinical Data Set

<p>The US Core Profiles were originally designed to meet the 2015 Edition certification criterion for Patient Selection 170.315(g)(7), and Application Access - Data Category Request 170.315(g)(8). They were created for each item in the&nbsp;<a href="https://www.healthit.gov/sites/default/files/ccds_reference_document_v1_1.pdf">2015 Edition Common Clinical Data Set (CCDS).&nbsp;</a>The 3.1.0 version of the US Core Profiles IG includes new requirements from the latest proposed ONC&nbsp;<a href="https://www.healthit.gov/topic/laws-regulation-and-policy/notice-proposed-rulemaking-improve-interoperability-health">U.S. Core Data for Interoperability(USCDI)&nbsp;</a>.</p>

### A Payer, to provide members with SMART Health Digital Insurance Cards:

- **SHALL** generate a complete and appropriate FHIR bundle using as described in this specification, including Coverage, Organization, and Patient information, as well as any additional information defined by this IG’s extensions.
- **SHALL** follow the [SMART Health Cards specification](https://spec.smarthealth.cards/) to create a SMART Health Card containing the FHIR bundle.
  - **SHALL** create the SMART Health Card as a JWS string, as defined by [https://spec.smarthealth.cards/#health-cards-are-encoded-as-compact-serialization-json-web-signatures-jws](https://spec.smarthealth.cards/#health-cards-are-encoded-as-compact-serialization-json-web-signatures-jws).
  - **SHOULD** implement revocation as defined by [https://spec.smarthealth.cards/#revocation](https://spec.smarthealth.cards/#revocation).

- **SHALL** follow the [SMART Health Links specification](https://docs.smarthealthit.org/smart-health-links/spec) to create a SMART Health Link referencing the SMART Health Card.
  - **SHALL** include the SMART Health Card as `application/smart-health-card`, a JSON file with a `.verifiableCredential array` containing the SMART Health Card JWS string, as specified by [https://spec.smarthealth.cards#via-file-download](https://spec.smarthealth.cards#via-file-download).
  - **SHALL NOT** require the user to set a passcode, and SHALL NOT enforce a passcode by default.

- **SHALL** share the Digital Insurance Card with the member as other personal information would be shared.
 - **SHALL** provide the member the SMART Health Link in text URI format as well as   QR format, as described here [https://docs.smarthealthit.org/smart-health-links/spec#sharing-user-transmits-a-shlink](https://docs.smarthealthit.org/smart-health-links/spec#sharing-user-transmits-a-shlink).
 - **SHALL** in close proximity to the link and QR code, specify to the member:
   - Data referenced in the link.
   - Expiration date.
   - Whether or not the information is updated over time.
   - Caution about sharing the link with parties they trust.

### A Consumer App, in helping members manage and share their Digital Insurance Card:
- Can process the SMART Health Link as described here [https://docs.smarthealthit.org/smart-health-links/spec#shl-receiving-application-processes-a-shlink](https://docs.smarthealthit.org/smart-health-links/spec#shl-receiving-application-processes-a-shlink).
- **SHALL** display the included data elements for the card.
  - If the `flag: L` is present, indicating the contents are for long term use, the application SHALL update the display of the contents or display a message noting that the contents may be stale.

- **SHALL** display the expiration date, `exp` (if present)  for the card.
- **SHALL** inform the user if the card has been revoked, as specified by [https://spec.smarthealth.cards/#revocation](https://spec.smarthealth.cards/#revocation).
- **SHALL** update the display of data from the SMART Health Link
- **SHALL** provide the member with the ability to share the SMART Health Link as they see fit.
  - **SHALL** provide the member the SMART Health Link in text URI format as well as QR code, as described here [https://docs.smarthealthit.org/smart-health-links/spec#sharing-user-transmits-a-shlink](https://docs.smarthealthit.org/smart-health-links/spec#sharing-user-transmits-a-shlink).
  - **SHALL** in close proximity to the link and QR code, caution the member about sharing the link with parties they trust.

### Providers, receiving the Digital Insurance Card:

Can process the SMART Health Link as described here [https://docs.smarthealthit.org/smart-health-links/spec#shl-receiving-application-processes-a-shlink](https://docs.smarthealthit.org/smart-health-links/spec#shl-receiving-application-processes-a-shlink).

### Color Palette Extension

When rendering foreground and background colors, the implementer SHOULD not use the same foreground and background colors and instead should algorithmically determine a high color contrast.


---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/pagecontent/ImplementationGuide-hl7.fhir.us.insurance-card.md



||| 
|-----------------------------------------------------------------------------|--------------------------|
| *Official URL*: http://hl7.org/fhir/us/insurance-card  | *Version*: 1.1.0                 |
| *NPM package name*: hl7.fhir.us.insurance-card                            |*ComputableName*: CARINForDigitalInsuranceCard |
| *Copyright/Legal*: Used by permission of HL7 International, all rights reserved Creative Commons License |


{:.grid}


{{ site.data.ig.description }}

- [XML](ImplementationGuide-hl7.fhir.us.insurance-card.xml)
- [JSON](ImplementationGuide-hl7.fhir.us.insurance-card.json)

### Cross Version Analysis

{% capture cross-version-analysis %}{% include cross-version-analysis.xhtml %}{% endcapture %}{{ cross-version-analysis | remove: '<p>' | remove: '</p>'}}

### IG Dependencies

This IG Contains the following dependencies on other IGs.

{% include dependency-table.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### Copyrights

{% capture ip-statement %}{% include ip-statements.xhtml %}{% endcapture %}

{{ ip-statement | remove: '<p>' | remove: '</p>'}}



---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/pagecontent/index.md

<a name="introduction"> </a>
### Introduction

This implementation guide describes the CARIN for Digital Insurance Card (C4DIC) Framework, providing a set of resources that payers can display to consumers via a FHIR API or SMART Health Link. This implementation guide focuses on standardizing how data elements from the physical insurance card can be transmitted in a FHIR-based exchange, leveraging the Coverage resource as well as Patient and Organization resources. See the [Table of Contents](toc.html) for more information.

<a name="the-carin-alliance"></a>
### The CARIN Alliance
The CARIN (Creating Access to Real-time Information Now through Consumer-Directed Exchange) Alliance is an [HL7 FHIR Accelerator program](http://www.hl7.org/about/fhir-accelerator/index.cfm) which brings implementers together to advance the use of HL7 FHIR standards in health care. The [CARIN Alliance Health Plan Workgroup](https://www.carinalliance.com/our-work/health-plan/) was organized to develop a FHIR-based API that could be implemented by a consumer-facing application. The goal of the CARIN Alliance Health Plan Workgroup is to develop an agreed upon set of data fields to exchange with consumers and a FHIR-based implementation guide for health plans and consumer facing applications to use to implement the API.

<a name="authors"> </a>
### Authors

* Primary
    * Cille Kissel Watkins (Humana) – [Ckissel@humana.com](mailto:Ckissel@humana.com)
    * Mark Roberts (Leavitt Partners, LLC) - [mark.roberts@leavittpartners.com](mailto:mark.roberts@leavittpartners.com)
    * HL7 Payer/Provider Workgroup

* Secondary
    * Adam Culbertson (Humana) – [Aculbertson1@humana.com](mailto:Aculbertson1@humana.com)
    * Anthony Gatti (Humana) [agatti@humana.com](mailto:agatti@humana.com)
    * Ryan Howells (Leavitt Partners, LLC) - [ryan.howells@leavittpartners.com](mailto:ryan.howells@leavittpartners.com)
    * Joshua Kelly (Automate Medical) [josh@automatemedical.com](mailto:josh@automatemedical.com)
    * Gail Kocher (Blue Cross Blue Shield Association) [Gail.Kocher@bcbsa.com](mailto:Gail.Kocher@bcbsa.com)
    * Pamela Maklari (Cognizant) [Pamela.Maklari@cognizant.com](mailto:Pamela.Maklari@cognizant.com)
    * Julia Meade Tulli (Anthem) [julia.tulli@anthem.com](mailto:julia.tulli@anthem.com)
    * Mark Scrimshire (Onyx Technology, LLC) - [mark.scrimshire@onyxhealth.io](mailto:mark.scrimshire@onyxhealth.io)
    * Corey Spears (MITRE) [cspears@mitre.org](mailto:cspears@mitre.org)
    * Sarah Young (Anthem) [Sarah.Young@anthem.com](mailto:Sarah.Young@anthem.com)
    * HL7 Financial Management Workgroup
    * HL7 Security Workgroup 


### Acknowledgements
This IG was developed using FHIR Shorthand syntax and the SUSHI tookit, a free, open source toolchain from the MITRE Corporation. Valuable guidance on FSH and assistance with the FHIR IG builds were provided by Corey Spears (MITRE) and Vince Van Dintel (Humana). 

### Change History

Check out the [Change History](ChangeHistory.html) page to see which Jira tickets have been applied.



---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/pagecontent/Patient-ExamplePatient1-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Patient"
</td></tr>
<tr><td>id</td><td>
"ExamplePatient1"
</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-10-30T09:48:01.8512764-04:00"
</td></tr>
<tr><td>meta.source</td><td>
"Organization/PayerOrganizationExample1"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/insurance-card/StructureDefinition/C4BB-Patient"</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>identifier[0].type.coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v2-0203"
</td></tr>
<tr><td>identifier[0].type.coding[0].code</td><td>
#MB
</td></tr>
<tr><td>identifier[0].type.coding[0].display</td><td>
"Member Number"
</td></tr>
<tr><td>identifier[0].type.text</td><td>
"An identifier for the insured of an insurance policy (this insured always has a subscriber), usually assigned by the insurance carrier."
</td></tr>
<tr><td>identifier[0].system</td><td>
"https://www.upmchealthplan.com/fhir/memberidentifier"
</td></tr>
<tr><td>identifier[0].value</td><td>
88800933501
</td></tr>
<tr><td>identifier[0].assigner.reference</td><td>
"Organization/PayerOrganizationExample1"
</td></tr>
<tr><td>identifier[0].assigner.display</td><td>
"UPMC Health Plan"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>name[0].family</td><td>
"Test"
</td></tr>
<tr><td>name[0].given[0]</td><td>"Member 01"</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
5555555551
</td></tr>
<tr><td>telecom[0].rank</td><td>
"1"
</td></tr>
<tr><td>telecom[1].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[1].value</td><td>
5555555552
</td></tr>
<tr><td>telecom[1].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[2].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[2].value</td><td>
5555555553
</td></tr>
<tr><td>telecom[2].rank</td><td>
"3"
</td></tr>
<tr><td>telecom[3].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[3].value</td><td>
5555555554
</td></tr>
<tr><td>telecom[3].rank</td><td>
"4"
</td></tr>
<tr><td>telecom[4].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[4].value</td><td>
5555555555
</td></tr>
<tr><td>telecom[4].use</td><td>
"home"
</td></tr>
<tr><td>telecom[4].rank</td><td>
"5"
</td></tr>
<tr><td>telecom[5].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[5].value</td><td>
5555555556
</td></tr>
<tr><td>telecom[5].use</td><td>
"work"
</td></tr>
<tr><td>telecom[5].rank</td><td>
"6"
</td></tr>
<tr><td>telecom[6].system</td><td>
"email"
</td></tr>
<tr><td>telecom[6].value</td><td>
GXXX@XXXX.com
</td></tr>
<tr><td>telecom[6].rank</td><td>
"7"
</td></tr>
<tr><td>telecom[7].system</td><td>
"fax"
</td></tr>
<tr><td>telecom[7].value</td><td>
5555555557
</td></tr>
<tr><td>telecom[7].rank</td><td>
"8"
</td></tr>
<tr><td>gender</td><td>
"male"
</td></tr>
<tr><td>birthDate</td><td>
"1943-01-01"
</td></tr>
<tr><td>address[0].type</td><td>
"physical"
</td></tr>
<tr><td>address[0].line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"PITTSBURGH"
</td></tr>
<tr><td>address[0].state</td><td>
"PA"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"15239"
</td></tr>
<tr><td>address[1].type</td><td>
"physical"
</td></tr>
<tr><td>address[1].line[0]</td><td>"456 Murray Avenue"</td></tr>
<tr><td>address[1].city</td><td>
"PITTSBURGH"
</td></tr>
<tr><td>address[1].state</td><td>
"PA"
</td></tr>
<tr><td>address[1].postalCode</td><td>
"15217"
</td></tr>
<tr><td>maritalStatus.coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v3-NullFlavor"
</td></tr>
<tr><td>maritalStatus.coding[0].code</td><td>
#UNK
</td></tr>
<tr><td>maritalStatus.text</td><td>
"unknown"
</td></tr>
<tr><td>communication[0].language.coding[0].system</td><td>
"urn:ietf:bcp:47"
</td></tr>
<tr><td>communication[0].language.coding[0].code</td><td>
#en
</td></tr>
<tr><td>communication[0].language.text</td><td>
"English"
</td></tr>
<tr><td>communication[0].preferred</td><td>
"true"
</td></tr>
<tr><td>managingOrganization.reference</td><td>
"Organization/PayerOrganizationExample1"
</td></tr>
<tr><td>managingOrganization.display</td><td>
"UPMC Health Plan"
</td></tr>
</table>


---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/pagecontent/Physical_Insurance_Card_Data_Elements.md

### Physical Insurance Card Data Elements
<p>This table outlines the necessary data elements found on physical insurance cards. This list of data elements was compiled through collaboration with numerous subject-matter experts across major insurance companies in the US. The authors of this IG also consulted the following resources for additional guidance:</p>

*	WEDI Health Identification Card Implementation Guide
*	WEDI Virtual Clipboard
*	NYS DFS Title 11, section 52.69
*	CAA/No Surprises Act, section 107 
*	SMART Health Card IG (related to QR codes)

<table border="1">
    <tr>
      <td><b>Data Element</b></td>
      <td><b>Description</b></td>
      <td><b>FHIR Mapping</b></td>
    </tr>
    <tr>
        <td><b>Member Name</b></td>
      <td>Member's first and last name and may include middle name or initial. Note: A member is any individual covered by the benefits offered by an entity, such as an employer or insurance company. </td>
      <td>coverage.extension C4DIC-PlanBeneficiaries-extension (enables represenation of all members), coverage.beneficiary (reflecting the patient for whom this resource is being pulled), patient.name (reflecting the patient for whom this resource is being pulled)</td>
    </tr>
    <tr>
      <td><b>Member ID</b></td>
      <td>The unique identifier for the organization's membership</td>
      <td>coverage.extension C4DIC-PlanBeneficiaries-extension (enables represenation of all members), coverage.identifier (reflecting the patient for whom this resource is being pulled), coverage.subscriberId (representing the subscriber of the plan)</td>
    </tr>
    <tr>
      <td><b>Dependent Number</b></td>
      <td>Identifies the unique dependent under the plan. Note: A Dependent is an individual, other than the subscriber, who has insurance coverage under the benefits selected by a subscriber</td>
      <td>coverage.dependent</td>
    </tr>
    <tr>
      <td><b>Subscriber</b></td>
      <td>An individual or entity that selects benefits offered by an entity, such as an employer, government, or insurance company</td>
      <td>coverage.subscriber</td>
    </tr>
    <tr>
      <td><b>Patient Relationship to Subscriber</b></td>
      <td>Describes how the beneficiary and how the plan subscriber are related</td>
      <td>coverage.relationship</td>
    </tr>
    <tr>
      <td><b>Plan Type</b></td>
      <td>Refers to how plans provide coverage and from which network. Also may be called Product Type. Exampe HMO, PPO</td>
      <td>coverage.type</td>
    </tr>
    <tr>
      <td><b>Payer ID</b></td>
      <td>This is the Unique ID assigned to each payer</td>
      <td>organization.identifier</td>
    </tr>
    <tr>
      <td><b>Payer Name</b></td>
      <td>The name of the payer</td>
      <td>coverage.payor.display, organization.name</td>
    </tr>
    <tr>
      <td><b>Group ID</b></td>
      <td>The unique ID for the group you get insurance coverage from. Typically refers to an employer group.</td>
      <td>coverage.class where type = group</td>
    </tr>
    <tr>
      <td><b>Group Name</b></td>
      <td>The group from which your insurance coverage is from. Typically your employer.</td>
      <td>coverage.class where type = group</td>
    </tr>
    <tr>
      <td><b>Division ID</b></td>
      <td>This is a sub-group from the group that identifed which cohort an individaul is assigned.</td>
      <td>coverage.class where type = division</td>
    </tr>
    <tr>
      <td><b>Primary Network ID</b></td>
      <td>Identifes a group of providers in one network.</td>
      <td>coverage.class where type = network</td>
    </tr>
    <tr>
      <td><b>Primary Network Name</b></td>
      <td>The name of the group that identifies a group of providers in a network.</td>
      <td>coverage.class where type = network</td>
    </tr>
    <tr>
      <td><b>Secondary Network ID</b></td>
      <td>Identifes a group of providers in one network.</td>
      <td>coverage.class where type = network</td>
    </tr>
    <tr>
      <td><b>Secondary Network Name</b></td>
      <td>Is the name of the group that identifies a group of providers in a network.</td>
      <td>coverage.class where type = network</td>
    </tr>
    <tr>
      <td><b>RxBIN</b></td>
      <td>Bank identification number used to locate your pharmacy member profile under the PBM system</td>
      <td>coverage.class where type = rxbin</td>
    </tr>
    <tr>
      <td><b>RxIIN</b></td>
      <td>ANSI issued Issuer Identification Number</td>
      <td>coverage.class where type = rxiin</td>
    </tr>
    <tr>
      <td><b>RxPCN</b></td>
      <td>Processor control number tells the pharmacy which group you're in so they can process your prescription payment correctly</td>
      <td>coverage.class where type = rxpcn</td>
    </tr>
    <tr>
      <td><b>RxGRP</b></td>
      <td>RX group number</td>
      <td>coverage.class where type = rxgroup</td>
    </tr>
    <tr>
      <td><b>RxID</b></td>
      <td>NCPDP Cardholder ID defined as 'the Insurance ID assigned to the cardholder or identification number used by the plan'</td>
      <td>coverage.class where type = rxid</td>
    </tr>
    <tr>
      <td><b>Free text fields</b></td>
      <td>Additional contextual information often found on the back of physical insurance cards. Could include TTY,
        disclaimers about eligibility, and/or limits to coverage. Could include notice of dental/vision coverage.</td>
      <td>coverage.extension C4DIC-AdditionalCardInformation-extension </td>
    </tr>
    <tr>
      <td><b>Individual or Family Out of Network Deductible</b></td>
      <td>The amount you must pay before your insurance plan's benefits begin. Out of Network amount</td>
      <td>coverage.costToBeneficiary (where value can be represented as valueMoney), coverage.extension C4DIC-AdditionalCardInformation-extension (where string is required)</td>
    </tr>
    <tr>
      <td><b>Individual or Family In Network Deductible</b></td>
      <td>The amount you must pay before your insurance plan's benefits begin. In network amount</td>
      <td>coverage.costToBeneficiary (where value can be represented as valueMoney), coverage.extension C4DIC-AdditionalCardInformation-extension (where string is required)</td>
    </tr>
    <tr>
      <td><b>Individual or Family Pharmacy Out of Network Deductible</b></td>
      <td>The amount you must pay before your insurance plan's benefits begin. Pharmacy Out of Network amount.</td>
      <td>coverage.costToBeneficiary (where value can be represented as valueMoney), coverage.extension C4DIC-AdditionalCardInformation-extension (where string is required)</td>
    </tr>
    <tr>
      <td><b>Individual or Family Pharmacy In Network Deductible</b></td>
      <td>The amount you must pay before your insurance plan's benefits begin. Pharmacy In Network amount.</td>
      <td>coverage.costToBeneficiary (where value can be represented as valueMoney), coverage.extension C4DIC-AdditionalCardInformation-extension (where string is required)</td>
    </tr>
    <tr>
      <td><b>Individual or Family Out of Network Out of Pocket Max</b></td>
      <td>The limit on the amount of money you have to pay for covered health services. Out of Network amount.</td>
      <td>coverage.costToBeneficiary (where value can be represented as valueMoney), coverage.extension C4DIC-AdditionalCardInformation-extension (where string is required)</td>
    </tr>
    <tr>
      <td><b>Individual or Family In Network Out of Pocket Max</b></td>
      <td>The limit on the amount of money you have to pay for covered health services. In Network amount.</td>
      <td>coverage.costToBeneficiary (where value can be represented as valueMoney), coverage.extension C4DIC-AdditionalCardInformation-extension (where string is required)</td>
    </tr>
    <tr>
      <td><b>Individual or Family Pharmacy Out of Network Out of Pocket Max</b></td>
      <td>The limit on the amount of money you have to pay for covered health services. Pharmacy Out of Network amount.</td>
      <td>coverage.costToBeneficiary (where value can be represented as valueMoney), coverage.extension C4DIC-AdditionalCardInformation-extension (where string is required)</td>
    </tr>
    <tr>
      <td><b>Individual or Family Pharmacy In Network Out of Pocket Max</b></td>
      <td>The limit on the amount of money you have to pay for covered health services. Pharmacy In Network amount.</td>
      <td>coverage.costToBeneficiary (where value can be represented as valueMoney), coverage.extension C4DIC-AdditionalCardInformation-extension (where string is required)</td>
    </tr>
        <tr>
      <td><b>Card issuance date</b></td>
      <td>Date when the insurance company issued the insurance card</td>
      <td>coverage.extension C4DIC-CardIssueDate-extension</td>
    </tr>
    <tr>
      <td><b>Date of Birth</b></td>
      <td>Date of Birth of the beneficiary</td>
      <td>patient.birthDate</td>
    </tr>
    <tr>
      <td colspan="3"><b>Payer Contact Details: The contact details often found on the back of the physical insurance card. Please note, there may be multiple types of contacts for different purposes such as member support, pharmacist inquiries, etc.</b></td>
    </tr>
    <tr>
      <td><i>&emsp;Claims Address</i></td>
      <td><i>Address to send provider claims to for adjudication.</i></td>
      <td><i>organization.contact.address</i></td>
    </tr>
    <tr>
      <td><i>&emsp;Phone</i></td>
      <td><i>Phone numbers. Need to support multiple types of phone numbers for different purposes (physician, member, pharmacist, etc.)</i></td>
      <td><i>organization.contact.telecom</i></td>
    </tr>
    <tr>
      <td><i>&emsp;Web Address</i></td>
      <td><i>The public internet address of the payer</i></td>
      <td><i>organization.contact.telecom</i></td>
    </tr>
    <tr>
      <td><i>&emsp;Customer Service</i></td>
      <td><i>This is the customer-facing number for member service questions</i></td>
      <td><i>organization.contact.telecom</i></td>
    </tr>
        <tr>
      <td colspan="3"><b>Copay Designation & Amounts: Payment required for various types of health care services</b></td>
    </tr>
    <tr>
      <td><i>&emsp;PCP office visits</i></td>
      <td><i>Copay for PCP office visits</i></td>
      <td><i>coverage.costToBeneficiary (where value can be represented as valueMoney), coverage.extension C4DIC-AdditionalCardInformation-extension (where string is required)</i></td>
    </tr>
    <tr>
      <td><i>&emsp;Specialist office visits</i></td>
      <td><i>Copay for specialist office visits</i></td>
      <td><i>coverage.costToBeneficiary (where value can be represented as valueMoney), coverage.extension C4DIC-AdditionalCardInformation-extension (where string is required)</i></td>
    </tr>
    <tr>
      <td><i>&emsp;Urgent care</i></td>
      <td><i>Copay for urgent care visits</i></td>
      <td><i>coverage.costToBeneficiary (where value can be represented as valueMoney), coverage.extension C4DIC-AdditionalCardInformation-extension (where string is required</i>)</td>
    </tr>
    <tr>
      <td><i>&emsp;ER visits</i></td>
      <td><i>Copay for ER visits</i></td>
      <td><i>coverage.costToBeneficiary (where value can be represented as valueMoney), coverage.extension C4DIC-AdditionalCardInformation-extension (where string is required)</i></td>
    </tr>
    <tr>
      <td><i>&emsp;Prescription drugs, retail pharmacy, 30-day supply</i></td>
      <td><i>Copay for prescription drugs</i></td>
      <td><i>coverage.costToBeneficiary (where value can be represented as valueMoney), coverage.extension C4DIC-AdditionalCardInformation-extension (where string is required)</i></td>
    </tr>
    <tr>
      <td colspan="3"><b>Images: Images often found on the front or back of the physical insurance card</b></td>
    </tr>
    <tr>
      <td><i>&emsp;Logo</i></td>
      <td><i>A company logo or image to represent the company</i></td>
      <td><i>coverage.extension C4DIC-Logo-extension</i></td>
    </tr>
    <tr>
      <td><i>&emsp;Barcode</i></td>
      <td><i>Machine readable code in the form of numbers or patterns or special charaters.</i></td>
      <td><i>coverage.extension C4DIC-Barcode-extension</i></td>
    </tr>
    <tr>
      <td><i>&emsp;QR code</i></td>
      <td><i>Scannable code in the form of patterns.</i></td>
      <td><i>coverage.extension C4DIC-QRCode-extension</i></td>
    </tr>
    <tr>
      <td><i>&emsp;Other supporting images</i></td>
      <td><i>Partner logos, images indicating the type of coverage provided, etc.</i></td>
      <td><i>coverage.extension C4DIC-SupportingImage-extension</i></td>
    </tr>
</table>


---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/pagecontent/Search_Parameters.md

<h3>Search Parameters Required By This Implementation Guide</h3>
<table class="grid">
<thead>
			<tr>
				<th>Conformance</th>
                <th>Resource</th>
				<th>Parameter</th>
				<th>Type</th>
				<th>Example</th>
			</tr>
</thead>
<tbody>
<tr>
				<td>
					<strong>SHALL</strong>
				</td>
                <td>
					<strong><a href="http://hl7.org/fhir/R4/coverage.html">Coverage</a></strong>
				</td>
				<td>
					<a href="http://hl7.org/fhir/R4/search.html#id">_id</a>
				</td>
				<td>token</td>
				<td>
					<code class="highlighter-rouge">GET [base]/Coverage?_id=[id]</code>
				</td>
			</tr>
			<tr>
								<td>
					<strong>SHALL</strong>
				</td>
                <td>
					<strong><a href="http://hl7.org/fhir/R4/coverage.html">Coverage</a></strong>
				</td>
				<td>
					<a href="http://hl7.org/fhir/R4/search.html#profile">_profile</a>
				</td>
				<td>reference</td>
				<td>
					<code class="highlighter-rouge">GET [base]/Coverage?_profile=http://hl7.org/fhir/us/insurance-card/StructureDefinition/C4DIC-Coverage</code>
				</td>
			</tr>
			<tr>
				<td>
					<strong>SHALL</strong>
				</td>
                <td>
					<strong><a href="http://hl7.org/fhir/R4/coverage.html">Coverage</a></strong>
				</td>
				<td>
					<a href="http://hl7.org/fhir/R4/search.html#lastUpdated">_lastUpdated</a>
				</td>
				<td>date</td>
				<td>
					<code class="highlighter-rouge">GET [base]/Coverage?_lastUpdated=[dateTime]</code>
				</td>
			</tr>
			<tr>
				<td>
					<strong>SHALL</strong>
				</td>
                <td>
					<strong><a href="http://hl7.org/fhir/R4/coverage.html">Coverage</a></strong>
				</td>
				<td>
					<a href="http://hl7.org/fhir/R4/coverage.html#search">beneficiary</a>
				</td>
				<td>reference</td>
				<td>
					<code class="highlighter-rouge">GET [base]/Coverage?beneficiary=[beneficiary]</code>
				</td>
			</tr>
			<tr>
				<td>
					<strong>SHALL</strong>
				</td>
                <td>
					<strong><a href="http://hl7.org/fhir/R4/coverage.html">Coverage</a></strong>
				</td>
				<td>
					<a href="http://hl7.org/fhir/R4/coverage.html#search">subscriber</a>
				</td>
				<td>reference</td>
				<td>
					<code class="highlighter-rouge">GET [base]/Coverage?subscriber=[system]|[code]</code>
				</td>
			</tr>
			<tr>
				<td>
					<strong>SHALL</strong>
				</td>
                <td>
					<strong><a href="http://hl7.org/fhir/R4/coverage.html">Coverage</a></strong>
				</td>
				<td>
					<a href="http://hl7.org/fhir/R4/coverage.html#search">patient</a>
				</td>
				<td>reference</td>
				<td>
					<code class="highlighter-rouge">GET [base]/Coverage?patient=[system]|[code]</code>
				</td>
			</tr>
			<tr>
				<td>
					<strong>SHALL</strong>
				</td>
                <td>
					<strong><a href="http://hl7.org/fhir/R4/coverage.html">Coverage</a></strong>
				</td>
				<td>
					<a href="http://hl7.org/fhir/R4/coverage.html#search">identifier</a>
				</td>
				<td>token</td>
				<td>
					<code class="highlighter-rouge">GET [base]/Coverage?identifier=[identifier]</code>
				</td>
			</tr>
	<tr>
				<td>
					<strong>SHALL</strong>
				</td>
                <td>
					<strong><a href="http://hl7.org/fhir/R4/coverage.html">Coverage</a></strong>
				</td>
				<td>
					<a href="http://hl7.org/fhir/R4/coverage.html#search">period</a>
				</td>
				<td>date</td>
				<td>
					<code class="highlighter-rouge">GET [base]/Coverage?period=[date]</code>
				</td>
			</tr>
	<tr>
				<td>
					<strong>SHALL</strong>
				</td>
                <td>
					<strong><a href="http://hl7.org/fhir/R4/coverage.html">Coverage</a></strong>
				</td>
				<td>
					<a href="http://hl7.org/fhir/R4/coverage.html#search">status</a>
				</td>
				<td>token</td>
				<td>
					<code class="highlighter-rouge">GET [base]/Coverage?status=[status]</code>
				</td>
			</tr>
            <tr>
				<td>
					<strong>SHALL</strong>
				</td>
                <td>
					<strong><a href="http://hl7.org/fhir/R4/organization.html">Organization</a></strong>
				</td>
				<td>
					<a href="http://hl7.org/fhir/R4/search.html#id">_id</a>
				</td>
				<td>token</td>
				<td>
					<code class="highlighter-rouge">GET [base]/Organization?_id=[id]</code>
				</td>
			</tr>
            <tr>
				<td>
					<strong>SHALL</strong>
				</td>
                <td>
					<strong><a href="http://hl7.org/fhir/R4/patient.html">Patient</a></strong>
				</td>
				<td>
					<a href="http://hl7.org/fhir/R4/search.html#id">_id</a>
				</td>
				<td>token</td>
				<td>
					<code class="highlighter-rouge">GET [base]/Patient?_id=[id]</code>
				</td>
			</tr>
			<tr>
				<td>
					<strong>SHALL</strong>
				</td>
                <td>
					<strong><a href="http://hl7.org/fhir/R4/patient.html">Patient</a></strong>
				</td>
				<td>
					<a href="http://hl7.org/fhir/R4/search.html#lastUpdated">_lastUpdated</a>
				</td>
				<td>date</td>
				<td>
					<code class="highlighter-rouge">GET [base]/Patient?_lastUpdated=[dateTime]</code>
				</td>
			</tr>
			<tr>
				<td>
					<strong>SHALL</strong>
				</td>
                <td>
					<strong><a href="http://hl7.org/fhir/R4/patient.html">Patient</a></strong>
				</td>
				<td>
					<a href="http://hl7.org/fhir/R4/patient.html#search">identifier</a>
				</td>
				<td>token</td>
				<td>
					<code class="highlighter-rouge">GET [base]/Patient?identifier=[type]/[id]</code>
				</td>
			</tr>
			<tr>
				<td>
					<strong>SHALL</strong>
				</td>
                <td>
					<strong><a href="http://hl7.org/fhir/R4/patient.html">Patient</a></strong>
				</td>
				<td>
					<a href="http://hl7.org/fhir/R4/patient.html#search">name</a>
				</td>
				<td>string</td>
				<td>
					<code class="highlighter-rouge">GET [base]/Patient?name=[type]/[id]</code>
				</td>
			</tr>


</tbody>
</table>


---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/pagecontent/StructureDefinition-C4BB-Coverage-intro.md

<h4 class="x_MsoNormal">Notes on Fields</h4>
<ul>
<li class="x_MsoNormal">The Coverage FHIR Resource defines a comprehensive set of data elements.&nbsp; Many of them are not relevant to this use case.&nbsp; When reviewing the Profile Snapshot, several data elements previously hidden are now exposed.&nbsp; Fields intended for consideration to be provided in the API are marked as <a href="3_General_Guidance.html#must-support">Must Support</a>; i.e., a red <span style="color: #ffffff; background-color: #ff0000;">S</span> or have a minimum cardinality of 1.&nbsp; All other data elements are not expected to be sent by a Responder; if they are sent a Requestor can choose to ignore them</li>
<li>The Coverage Reference Resource shall be returned with data that was effective as of the date of service of the claim</li>
<li class="x_MsoNormal">The numbers, e.g. (1), following the data element descriptions correlate to the MapID in the <a href="CPCDSDataDictionary.docx">CPCDS Data Dictionary</a> and the <a href="CPCDStoFHIRProfilesMapping.xlsx">Mapping Worksheet</a>&nbsp;as described&nbsp;<a href="4_Common_Payer_Consumer_Data_Set.html">here.</a></li>
<li class="x_MsoNormal">meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest.</li>
</ul>




---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/pagecontent/StructureDefinition-C4BB-Organization-intro.md

<h4 class="x_MsoNormal">Notes on Fields</h4>
<ul>
<li class="x_MsoNormal">The Organization FHIR Resource defines a comprehensive set of data elements.&nbsp; Many of them are not relevant to this use case.&nbsp; When reviewing the Profile Snapshot, several data elements previously hidden are now exposed.&nbsp; Fields intended for consideration to be provided in the API are marked as <a href="3_General_Guidance.html#must-support">Must Support</a>; i.e., a red <span style="color: #ffffff; background-color: #ff0000;">S</span> or have a minimum cardinality of 1.&nbsp; All other data elements are not expected to be sent by a Responder; if they are sent a Requestor can choose to ignore them</li>
<li class="x_MsoNormal">Payers may decide to provide either the data that was in effect as of the date of service or the current data<strong>.&nbsp;</strong></li>
<li class="x_MsoNormal">.identifier[NPI]:&nbsp; Value is conditional depending on the Referring Resource.&nbsp; Populate Service Facility NPI with the value 'NPI has not been assigned' if an NPI has not been assigned to the Service Location Organization</li>
<li class="x_MsoNormal">.address:&nbsp; Enter address of the location where the services were rendered.&nbsp; If the location is a component of the Billing Provider, do not populate this data element</li>
<li class="x_MsoNormal">.meta.lastUpdated:&nbsp;Payers SHALL provide the last time the data was updated or the date of creation in the payer’s system of record, whichever comes last.  Apps will use the meta.lastUpdated value to determine if the Reference resources are as of the current date or date of service. </li>
<li class="x_MsoNormal">The CPCDS data elements are defined in the data element comments.&nbsp; The numbers, e.g. (1), following the data element descriptions in the comments correlate to the MapID in the&nbsp;<a href="CPCDSDataDictionary.docx" >CPCDS Data Dictionary</a>&nbsp;and the&nbsp;<a href="CPCDStoFHIRProfilesMapping.xlsx">Mapping Worksheet</a>&nbsp;as described&nbsp;<a href="4_Common_Payer_Consumer_Data_Set.html">here.</a></li>
<li class="x_MsoNormal">meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest.</li>
</ul>
<p>&nbsp;</p>


---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/pagecontent/StructureDefinition-C4BB-Patient-intro.md

<h4 class="x_MsoNormal">Notes on Fields</h4>
<ul>
<li class="x_MsoNormal">The Patient FHIR Resource defines a comprehensive set of data elements.&nbsp; Many of them are not relevant to this use case.&nbsp; When reviewing the Profile Snapshot, several data elements previously hidden are now exposed.&nbsp; Fields intended for consideration to be provided in the API are marked as <a href="3_General_Guidance.html#must-support">Must Support</a>; i.e., a red <span style="color: #ffffff; background-color: #ff0000;">S</span> or have a minimum cardinality of 1.&nbsp; All other data elements are not expected to be sent by a Responder; if they are sent a Requestor can choose to ignore them</li>
<li class="x_MsoNormal">The Member Id is the identifier payers assign to a beneficiary for a contract; it may be different for various lines of business; ie. QHP vs MA. The Unique Member Id is a mastered identifier across all lines of business.</li>
<li class="x_MsoNormal">Payers may decide to provide either the data that was in effect as of the date of service or the current data.</li>
<li class="x_MsoNormal">.meta.lastUpdated:&nbsp;Payers SHALL provide the last time the data was updated or the date of creation in the payer’s system of record, whichever comes last.  Apps will use the meta.lastUpdated value to determine if the Reference resources are as of the current date or date of service. </li>
<li class="x_MsoNormal">The CPCDS data elements are defined in the data element comments.&nbsp; The numbers, e.g. (1), following the data element descriptions in the comments correlate to the MapID in the&nbsp;<a href="CPCDSDataDictionary.docx" >CPCDS Data Dictionary</a>&nbsp;and the&nbsp;<a href="CPCDStoFHIRProfilesMapping.xlsx">Mapping Worksheet</a>&nbsp;as described&nbsp;<a href="4_Common_Payer_Consumer_Data_Set.html">here.</a></li>
<li class="x_MsoNormal">meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest.</li>
</ul>
<p>&nbsp;</p>


---

File: repos/HL7_SLASH_carin-digital-insurance-card/input/pagecontent/Use_Case.md

<a name="terms-and-concepts"></a>
### Terms and Concepts
<table class="codes" border="1">
<thead>
<tr>
<td><strong>Term</strong></td>
<td><strong>Definition</strong></td>
</tr>
</thead>
<tbody>
<tr>
<td>Subscriber</td>
<td>An individual or entity that selects benefits offered by an entity, such as an employer, government, or insurance company</td>
</tr>
<tr>
<td>Dependent</td>
<td>An individual, other than the subscriber, who has insurance coverage under the benefits selected by a subscriber</td>
</tr>
<tr>
<td>Member</td>
<td>Any individual covered by the benefits offered by an entity, such as an employer or insurance company. In the US, some government programs refer to Members as Beneficiaries.</td>
</tr>
<tr>
<td>Patient</td>
<td>
<p>An individual who has received, is receiving or intends to receive health care services. (Health care services as defined by federal and state regulations.)</p>
</td>
</tr>
<tr>
<td>Personal Representative</td>
<td>Per the HIPAA privacy regulations at 45 CFR 164.502(g), a <a href="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/personal-representatives/index.html">personal-representative</a> is someone authorized under state or other applicable law to act on behalf of the individual in making health care related decisions (such as a parent, guardian, or person with a medical power of attorney)</td>
</tr>
<tr>
<td>Payer</td>
<td>
<p>Public or private party which offers and/or administers health insurance plan(s) or coverage and/or pays claims directly or indirectly. Examples include:</p>
<ul>
<li>Insurance Company</li>
<li>Health Maintenance Organization</li>
<li>Medicare</li>
<li>Third-party Administrator</li>
<li>Repricer</li>
</ul>
</td>
</tr>
</tbody>
</table>

<a name="use-cases"></a>
### Use Case - Consumer Access to their Insurance Card Data
<h4>Background</h4>
<p>This implementation guide is designed to standardize the way that health insurance companies provide the data elements found on the physical insurance card in a FHIR-based API exchange. The primary use case is to support insurance members (or their personal representatives) who wish to retrieve their current proof of insurance coverage digitally via a consumer-facing application. This will provide an alternative to using the physical insurance card as proof of insurance. </p>
<h5>Scenario</h5>
<p>When an individual visits a healthcare provider, they may be asked to provide proof of insurance prior to receiving care. Instead of relying on their physical insurance card, the individual may pull out their phone and open a digital application to display their insurance card information. This will assist in cases of a lost or forgotten physical insurance card. The provider can capture the necessary information for proof of insurance based on the information displayed in the consumer-facing application. </p>
<h4>Consumer-Directed Exchange</h4>
<p>Consumer-directed exchange occurs when a consumer or an authorized caregiver invokes their HIPAA Individual Right of Access (45 CFR 164.524) and requests their digital health information from a HIPAA covered entity (CE) via an application or other third-party data steward.&nbsp;</p>
<p><img style="width: 85%; float: none; align: middle;" src="UseCaseDiagram.jpg"/></p>
<h4>Technical Workflow</h4>
<p>Precondition: Consumer App registers with a payer endpoint and receives a client ID and client secret<p>
<p><img style="width: 100%; float: none; align: middle;" src="CARINSequence.png" /> <b>Actors:</b></p>
<ul>
<li>Consumer (aka Subscriber, Member, Dependent, Patient, or Personal Representative)</li>
<li>Consumer App (aka digital third-party application selected by and primarily for the Consumer with a consumer-facing user interface)</li>
<li>Health Plan API (aka Payer, Covered Entity)</li>
<li>Health Plan&rsquo;s Identity and Access Authorization server</li>
</ul>
<p><b>Flow:</b></p>
<ol>
<li>Consumer App presents a list of potential Payers / Health Plans that can be accessed by the Consumer.</li>
<li>Consumer selects the Payer / Health Plan to initiate the login and consent flow.</li>
<li>Consumer App redirects to the Health Plan’s Identity and Access Authorization server. Please note: The Health Plan may leverage a Third Party authentication service or technology for user login.</li>
<li>Consumer enters the credentials and consents to data sharing.</li>
<li>Health Plan's Identity and Access Authorization server validates the credentials, generates and returns to the Consumer App an OIDC token with authorized Consumer identities encoded.</li>
<li>Consumer App successfully links the user to the Payer / Health Plan and notifies the Consumer.</li>
<li>Consumer App requests the Coverage resource and associated resources as desired (i.e. Organization and/or Patient) along with the token and PatientID from step #5.</li>
<li>Health Plan’s Authorization server validates the access token.</li>
<li>Health Plan's FHIR API responds to the Consumer App with a bundle of the requested FHIR resources.</li>
<li>Consumer App receives the FHIR data and presents the information to the consumer.</li>
</ol>

<a name="use-cases-access-and-exchange"></a>
<h3>Use Case - Consumer Access and Exchange</h3>

<p>The Digital Insurance Card can also be made available to the member in a verifiable, tamper-proof package that the subscriber can store, manage, and share with healthcare providers as they see fit. In this model, the payer provides the member with a QR code or URL representing their digital insurance card, likely using the same modalities used to share digital cards today (e.g. payer mobile application, website, email). The member is able to present the QR code to be scanned during in-person visits or provide the QR code or URL to mobile or web forms during online registration or check-in flows. The provider then uses the QR code or URL to retrieve the Digital Insurance Card and verify its authenticity.</p>

<p>[SMART Health Cards](https://spec.smarthealth.cards/) are a FHIR-based verifiable credential technical framework that has been made available to hundreds of millions of people around the world for proof of vaccination and infectious disease laboratory testing results.</p>

<p>[SMART Health Links](https://docs.smarthealthit.org/smart-health-links/design) are a derivation of SMART Health Cards that enable larger and dynamic data payloads as well as other methods of interaction.</p>

<p><b>Flow:</b></p>
<ol>
<li>Payer shares the insurance card with a member (e.g., as a QR code and text-based link, via the payer website, mobile application, secure messaging, etc.).</li>
<li>Member downloads/retrieves the QR code and/or link.</li>
<li>Member stores the QR code and link as they see fit, with options ranging from printing on paper to storing in health apps or wallets capable of interpreting SMART Health Links.</li>
<li>Member presents the SMART Health Link to healthcare provider.</li>
</ol>
<h4><b>In-person:</b></h4>
<ol>
<li>Member presents the QR code on their device or paper.</li>
<li>Check-in staff or kiosk scan the QR code.</li>
</ol>

<h4><b>Online:</b></h4>
<ol>
<li>Member provides the insurance card to the online check-in app or web flow by pasting the link into a field, uploading a image of the QR, or in the future via API-based methods tailored to wallet and health apps.</li>
<li>Healthcare provider processes the SMART Health Link and retrieves the insurance card information from the Payor (or designated data hosting service), verifying cryptographic signatures if desired.</li>
<li>Healthcare provider, EHR vendor, or other platform vendor incorporates insurance information into existing workflows.</li>
</ol>


---

