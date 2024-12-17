File: repos/HL7_SLASH_vrdr/sushi-config.yaml

canonical: http://hl7.org/fhir/us/vrdr
title: "Vital Records Death Reporting (VRDR) FHIR Implementation Guide"
fhirVersion: 4.0.1
FSHOnly: false
applyExtensionMetadataToRoot: false
id: hl7.fhir.us.vrdr
name: VRDR
status: active
version: 3.0.0
releaseLabel: STU3
dependencies:
  hl7.fhir.us.core: 
    version: 5.0.1
    id: hl7fhiruscore
  hl7.fhir.us.vr-common-library: 
    version: 2.0.0 
    id: hl7fhirusvrcommonlibrary
  us.cdc.phinvads:
    uri: http://fhir.org/packages/us.cdc.phinvads/ImplementationGuide/us.cdc.phinvads
    version: 0.12.0 
  hl7.fhir.us.odh:
    version: 1.3.0
    id: odh

pages:
  index.md:
    title: Home
  credits.md:
    title: Credits
  background.md:
    title: Background
  scope_of_the_vrdr_fhir_ig.md:
    title: Scope of the VRDR IG
  usage.md:
    title: Usage
  conformance.md:
    title: Conformance
  artifacts.html:
    title: Artifacts Summary
  vrdr_forms_mapping.md:
    title: VRDR Forms Mapping
  DeathRecordDataDictionary.md:
    title: Death Record Data Dictionary
  MortalityRosterDataDictionary.md:
    title: Mortality Roster Data Dictionary
  downloads.md:
    title: Download Specification
  change_log.md:
    title: Change Log
  content-transitions.md:
    title: Content Transitions 
menu:
  Home:
    Home: index.html
    Background: background.html
    Scope: scope_of_the_vrdr_fhir_ig.html
    Credits: credits.html
  Implementer Guidance:
    Usage Notes: usage.html
    Conformance: conformance.html
    Death Record Data Dictionary: DeathRecordDataDictionary.html
    Mortality Roster Data Dictionary: MortalityRosterDataDictionary.html
    IJE Mapping to FHIR (csv):  IJE_File_Layouts_and_FHIR_Mapping_24-06-21.csv
    IJE Mapping to FHIR (xlsx): IJE_File_Layouts_and_FHIR_Mapping_24-06-21.xlsx
    Forms Mapping: vrdr_forms_mapping.html
  Artifacts: artifacts.html
  Changes:
    Change Log: change_log.html
    STU2.2 to STU3 Changes: content-transitions.html
  Downloads: downloads.html

groups:
  DecedentDemographics:
    name: Decedent Demographics
    description: Demographic data includes information about related persons (Mother, Father, and Spouse) and social determinants such as education level. The information in this profile group are provided by a decedent informant.
    resources:
    - Decedent
    - DecedentAge
    - DecedentEducationLevel
    - DecedentMother
    - DecedentFather
    - DecedentSpouse
    - DecedentMilitaryService
    - DecedentUsualWork
  RecordLinkages:
    name: Vital Records Linkages
    description: These profiles support exchange of vital records identifiers for events that are related to the decedent.  Jurisdictions may provide linkages to birth records for all deaths within the first year of life, and linkages to birth or fetal death records when the for pregnancy-related events within one year of death. 
    resources:
    - BirthRecordIdentifier
    - BirthRecordIdentifierChild
    - FetalDeathRecordIdentifier
  DeathInvestigation:
    name: Death Investigation
    description: Data obtained during the course of investigating a death. Many of these items are conditionally present in a death certification transaction depending on whether or not an autopsy was performed, an injury incident occurred, or a transportation event was involved. The details on the pronouncement performer can be provided using USCore Practitioner profile.
    resources:
    - AutopsyPerformedIndicator
    - DeathDate 
    - DecedentPregnancyStatus
    - DeathLocation
    - ExaminerContacted
    - InjuryLocation
    - InjuryIncident 
    - SurgeryDate
    - TobaccoUseContributedToDeath 
  DeathCertification:
    name: Death Certification
    description: Data related to the primary concern of the VRDR IG, Death Certification. In this group, the causes of death and the causal pathway are documented and attested to by a death certifier (coroner or medical examiner).
    resources:
    - Certifier
    - CauseOfDeathPart1
    - CauseOfDeathPart2
    - DeathCertification 
    - MannerOfDeath 
  DecedentDisposition:
    name: Decedent Disposition
    description: Data related to the disposition of the decedents remains. The data in this profile group is typically provided by the funeral home performing the disposition services. The content of this profile group is authenticated by the funeral home director. Additional content can be included using standard USCore profiles, and can be included to specify the Funeral Home Director, the Licensee, and the Mortician.
    resources:
    - DispositionLocation
    - DecedentDispositionMethod
    - FuneralHome
    - Mortician 
  CodedObservations:
    name: Coded Observations
    description: Coded Observations based on the submitted death record.
    resources:
    - ActivityAtTimeOfDeath
    - AutomatedUnderlyingCauseOfDeath
    - ManualUnderlyingCauseOfDeath
    - RecordAxisCauseOfDeath
    - EntityAxisCauseOfDeath
    - PlaceOfInjury
    # - StructureDefinition/vrdr-coded-race-and-ethnicity
    - CodingStatusValues
  DocumentsAndBundles:
    name: Bundles and Compositions
    description: Bundles and Compositions used to transmit death record content.
    resources:
    - DeathCertificate
    - DeathCertificateDocument 
    - CauseOfDeathCodedContentBundle
    - DemographicCodedContentBundle
    - IndustryOccupationCodedContentBundle
    - MortalityRosterBundle

  Entensions:
    name: Extensions 
    description: Extensions 
    resources:
    - AliasStatus
    - FilingFormat
    - StateSpecificField
    - NVSSSexAtDeath
    - SpouseAlive
    - ReplaceStatus
    - PractitionerRole
  
  CodeSystems:
    name: CodeSystems
    description: CodeSystems 
    resources:
    - ActivityAtTimeOfDeathCS
    - DateOfDeathDeterminationMethodsCS
    - DeathPregnancyStatusCS
    - DocumentSectionCS
    - FilingFormatCS
    - IntentionalRejectCS
    - LocationTypeCS
    - ObservationsCS
    - ComponentCS
    - OrganizationTypeCS
    - ReplaceStatusCS
    - SuperMicarPlaceOfInjuryCS
    - SystemRejectCS
    - TransaxConversionCS

  ValueSets:
    name: ValueSets
    description: ValueSets 
    resources: 
    - AdministrativeGenderVS
    - CertifierTypesVS
    - IntentionalRejectVS
    - SystemRejectVS
    - TransaxConversionVS
    - ActivityAtTimeOfDeathVS
    - ICD10CausesOfDeathVS
    - ContributoryTobaccoUseVS
    - DateOfDeathDeterminationMethodsVS
    - DeathCertificationEventVS
    - DeathCertificationEventMaxVS
    - DeathPregnancyStatusVS
    - FilingFormatVS
    - MannerOfDeathVS
    - MethodOfDispositionVS
    - PlaceOfDeathVS
    - PlaceOfInjuryVS
    - PlaceOfInjuryOtherVS
    - ReplaceStatusVS
    - SpouseAliveVS
    - TransportationIncidentRoleVS
    - vrdr-edit-bypass-01-vs
    - vrdr-edit-bypass-012-vs
    - vrdr-edit-bypass-0124-vs

  ConceptMaps:
    name: ConceptMaps
    description: ConceptMaps 
    resources: 
    - ActivityAtTimeOfDeathCM
    - AdministrativeGenderCM
    - CertifierTypesCM
    - ContributoryTobaccoUseCM
    - DeathPregnancyStatusCM
    - EditBypass01CM
    - EditBypass012CM
    - EditBypass0124CM
    - FilingFormatCM
    - IntentionalRejectCM
    - MannerOfDeathCM
    - MethodOfDispositionCM
    - PlaceOfDeathCM
    - PlaceOfInjuryCM
    - ReplaceStatusCM
    - SpouseAliveCM
    - SystemRejectCM
    - TransaxConversionCM
    - TransportationIncidentRoleCM

  ExampleDeathRecord:
    name: Example Death Record Submission
    description: Example of a complete Death Record Submission 
    resources:
    - DeathCertificateDocument-UT-1
    - DeathCertificateUT-Example1
    - DecedentUT-Example1 
    - InputRaceAndEthnicityUT-Example1
    - PractitionerUT-Certifier
    - PractitionerUT-Pronouncer
    - BirthRecordIdentifierUT-Example1 
    - EducationUT-Example1
    - FatherUT-Example1
    - MotherUT-Example1
    - AutopsyPerformedIndicatorUT-Example1
    - CauseOfDeathPart1UT-Example1 
    - DeathDateUT-Example1
    - DeathLocationUT-Example1 
    - AgeUT-Example1 
    - DispositionMethodUT-Example1 
    - DispositionLocationUT-Example1
    - UsualWorkUT-Example1
    - MilitaryServiceUT-Example1
    - PregnancyUT-Example1 
    - ExaminerContactedUT-Example1 
    - FuneralHomeUT-Example1
    - InjuryIncidentUT-Example1 
    - MannerOfDeathUT-Example1 
    - TobaccoUseUT-Example1 
    - ProcedureDeathCertificationUT-Example1
    - EmergingIssuesUT-Example1

  ExampleBundles:
    name: Other Example Bundles
    description: Example Death Certificate, Coded Content, and Mortality Roster Bundles
    resources:
    - CauseOfDeathCodedContentBundle-Example1
    - DemographicCodedContentBundle-Example1
    - IndustryOccupationCodedContentBundle-Example1
    - MortalityRosterBundle-Example1
    - DeathCertificateDocument-Example1
    - DeathCertificateDocument-Example2

  OtherExamples:
    name: Other Example Instances 
    description: Other Example instances illustrating various aspects of the profiles.
    resources:
    - DeathCertification-Example1
    - DeathCertification-Example2  
    - AutopsyPerformedIndicator-Example1
    - BirthRecordIdentifier-Example1
    - BirthRecordIdentifierChild-Example1
    - FetalDeathRecordIdentifier-Example1
    - CauseOfDeathPart1-Example1
    - CauseOfDeathPart1-Example2
    - CauseOfDeathPart2-Example1
    - Certifier-Example1
    - AutomatedUnderlyingCauseOfDeath-Example1
    - RecordAxisCauseOfDeath-Example1
    - RecordAxisCauseOfDeath-Example2
    - EntityAxisCauseOfDeath-Example1
    - EntityAxisCauseOfDeath-Example2
    - EntityAxisCauseOfDeath-Example3
    - EntityAxisCauseOfDeath-Example4
    - ManualUnderlyingCauseOfDeath-Example1
    - PlaceOfInjury-Example1
    - ActivityAtTimeOfDeath-Example1
    - CodedRaceAndEthnicity-Example1
    - InputRaceAndEthnicity-Example1
    - CodingStatusValues-Example1
    - DeathCertificate-Example1
    - DeathCertificate-Example2
    - DeathDate-Example1
    - DeathDate-Example2
    - DeathDate-Example3
    - DeathDate-Example4
    - DeathLocation-Example1
    - DeathLocation-Example2
    - DeathLocation-Example3
    - Decedent-Example3
    - Decedent-Example2
    - Decedent-Example1
    - DecedentAge-Example1
    - DecedentDispositionMethod-Example1
    - Mortician-Example1
    - DispositionLocation-Example1
    - DecedentEducationLevel-Example1
    - DecedentMilitaryService-Example1
    - DecedentPregnancyStatus-Example1
    - DecedentUsualWork-Example1
    - DecedentUsualWork-Example2
    - EmergingIssues-Example1
    - ExaminerContacted-Example1
    - DecedentFather-Example1
    - DecedentMother-Example1
    - DecedentSpouse-Example1
    - FuneralHome-Example1
    - InjuryIncident-Example1
    - InjuryIncident-Example2
    - InjuryLocation-Example1
    - MannerOfDeath-Example1
    - SurgeryDate-Example1
    - TobaccoUseContributedToDeath-Example1
    - location-death-vr-atlanta-ga-a-freeman
    - location-injury-vr-atlanta-ga-a-freeman
    - practitioner-vital-records-janet-seito
    - procedure-death-certification-vr-a-freeman
    - us-core-patient-vr-a-freeman
    - Pronouncer-Example1
    - Certifier-Example2-no-NPI

copyrightYear: 2022+
publisher:
  name: HL7 International / Public Health
  url: http://www.hl7.org/Special/committees/pher
  email: pher@lists.HL7.org
parameters:
  show-inherited-invariants: false
  jira-code: vrdr
  path-expansion-params: '../../exp-params.json'  #path is relative to [base]/fsh-generated/resources
  version-comparison-master: true 
  auto-oid-root: 2.16.840.1.113883.4.642.40.10

jurisdiction: urn:iso:std:iso:3166#US
license: CC0-1.0

extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: pher

---

// File: input/pagecontent/acknowledgements.md

   Gork

---

// File: input/pagecontent/background.md

The Centers for Disease Control (CDC) National Center for Health Statistics (NCHS) Division of Vital Statistics (DVS) is working closely with Federal, State, and local partners to take a fresh look at how mortality data are gathered, stored, and exchanged across the United States. DVS is focused on adopting best practices for information exchange that lessen the burden on data providers (e.g., vital records offices, medical examiner and coroner offices, toxicology labs) while providing a seamlessly automated data feed to public health and public safety data requestors.

To help make the mortality data ecosystem more connected, adaptable, and robust, they have chosen to leverage modern technologies and approaches, such as RESTful APIs and HL7s Fast Healthcare Interoperability Resources (FHIR) standard.

This implementation guide is an initial step to help define a common set of protocols and practices that developers can rely on to enhance their existing products and build solutions to help make mortality data flow more seamlessly.

### Use Cases
The profiles were designed to enable standards-based interoperable exchange in support of four primary use cases:
* Transmission of Death Records by Jurisdictions to NCHS
* Transmission of Coded Cause of Death, Demographics, and Industry/Occupation information by NCHS to Jurisdictions
* Transmission of Death Records among Jurisdictions
* Transmission of Mortality Rosters among Jurisdictions

The profiles defined in this IG along with the mappings to the existing InterJurisdictional Exchange ([IJE](IJE_File_Layouts_and_FHIR_Mapping_24-06-21.csv)) format, and associated Transax ([TRX](https://www.cdc.gov/nchs/data/dvs/2003tin.pdf)), and Mortality ([MRE](https://www.cdc.gov/nchs/data/dvs/200XMOR_web_with%20clearance%20revisions-acc.pdf)) documentation.  The narrative content for each profile shows the mapping of IJE-defined death record content to the fields of the profile.  Instances of these profiles are assembled as described below in bundles to support the three use cases.  Concept maps are provided for most valuesets defined in this IG (e.g., [Tobacco Use](ConceptMap-ContributoryTobaccoUseCM.html) that document mapping between the IJE, TRX, and MRE formats and the FHIR valuesets.

#### Transmission of Death Records by Jurisdictions to NCHS
Instances of these profiles are assembled as shown below in a [DeathCertificateDocument], a profile of a FHIR Bundle of type document.  Within that Bundle are contained a [DeathCertificate], a profile of a FHIR Composition, along with instances of FHIR profiles that are referenced from the DeathCertificate.  The content of the Death Record for submission is illustrated here.  The precise content requirements for submission are established by NCHS.
<center>
<table><tr><td><img src="Slide20.png" style="width:60%;"/></td></tr></table>
</center>

#### Transmission of Coded Cause of Death and Demographics information by NCHS to Jurisdictions
Coded cause of death content can be transmitted using a [CauseOfDeathCodedContentBundle] collection bundle, as shown here.  Profiles of FHIR Observation are used to convey coded content. Note that the bundle definition includes both coded race and ethnicity data generated by NCHS, as well as the input race and ethnicity data sent by the Jurisdiction to NCHS with the death record submission.  The resulting bundle is information-content equivalent with an MRE transaction.
<center>
<table><tr><td><img src="Slide21.png" style="width:60%;"/></td></tr></table>
</center>
Coded demographic (Race and Ethnicity) content can be trasmitted using a [DemographicCodedContentBundle] collection bundle, as shown here. Note that the bundle definition includes both coded cause of death data generated by NCHS, as well as information sent by the Jurisdiction to NCHS with the death record submission.  The resulting bundle is information-content equivalent with TRX transaction.
<center>
<table><tr><td><img src="Slide22.png" style="width:60%;"/></td></tr></table>
</center>

#### Transmission of Coded Industry and Occupation information by NCHS to Jurisdictions
Coded industry and occupation can be transmitted using a [Coded Industry and Occupation Bundle] containing a single VRDR [DecedentUsualWork] instance.  This bundle is information-content equivalent to the traditional MIO files.

#### Transmission of Death Records among Jurisdictions
The VRDR IG is intended to support the full information content of the IJE format used for inter-jurisdictional exchange among jurisdictions, including both the information sent by jurisdictions to NCHS, and the coded content generated by NCHS and returned to the jurisdictions, as shown here.
<center>
<table><tr><td><img src="Slide23.png" style="width:60%;"/></td></tr></table>
</center>

#### Transmission of Mortality Rosters among Jurisdictions
The VRDR IG is intended to support the full information content of the Mortality Roster format used for inter-jurisdictional exchange among jurisdictions.  The content is constructed from a small set of VRDR profiles, within a Mortality Roster bundle, as shown here.
<center>
<table><tr><td><img src="Slide24.png" style="width:60%;"/></td></tr></table>
</center>

### References
* [2022 Mortality Data reference](https://r20.rs6.net/tn.jsp?f=001u-eBMBj0UGlhPdHxUU_w_MafJMX_8rYmjFZga3pBUoUhwcUSSzMK5lw-ncpe9c1_OCJdI66kcNI-ILEyJKT9ILqF6v3RMIxQHe-k9-IYCzq96MQmC3sO0FgIOhAgnvf_zF7l6N4k8lCQjzRnFuzO-UmCFtlHJpOYd3fjY2Cw2StY-TA-wVQOw320Sj_WyhIuq2H9GPAtpsuuBkomxjl6jizGiL_Ql0yOwjp-cUjTOTA=&c=hrGtL9tmvJ1DKGpbzqPuF3KvUpFVK0qchygyr7StLU1Sluvl9ZBcLg==&ch=hptEZrbFDWPJdXxXwQsrUk7F-lUko-MpszM6NS4g8yVkg29mqPQHXA==)
* [NCHS Instruction Manual part 8](https://www.cdc.gov/nchs/data/dvs/IMP8_2014.pdf)
* SuperMicar documentation([PDF](https://www.cdc.gov/nchs/data/dvs/2003s10.pdf), [XLS](https://www.cdc.gov/nchs/data/dvs/2003_May16.xls))
* [NCHS Procedures for Multiple-Race and Hispanic Origin Data: Collection, Coding, Editing, and Transmitting](https://www.cdc.gov/nchs/data/dvs/Multiple_race_documentation_5-10-04.pdf)

{% include markdown-link-references.md %}

---

// File: input/pagecontent/change_log.md

### VRDR STU3 Changes
- Documentation changes to align [CauseOfDeathCodedContentBundle] with TRX
* Added support for sending the State Specific Field (STATESP) back to jurisdictions as part of the TRX-equivalent [CauseOfDeathCodedContentBundle]
* Added a new [Mortician] profile in support of Funeral Home use cases.  Use of this profile is not required for submissions to NCHS.
* Support expression of state and jurisdiction for residence of decedent to support routing of records to jurisdiction 
* Eliminated the requirement to specify [DeathCertification].category since it served no real purpose and used a vague and now inactive SNOMEDCT Code (103693007 "Diagnostic procedure (procedure)"). Allowed continued use of the inactive code for the required [DeathCertificate].event.code for compatibility, but added a preferred code (307930005 "Death certificate (record artifact)").
* Documented the use of the Patient.identifier[SSN] slice for Decedent Social Security Number.  STU2.2 documented in narrative the use of the [SB] slice, but the examples used the [SSN] slice. 
* Changed the valueset for gender used by the [NVSSSexAtDeath] to use the same codesystem used by USCore and VRCL.  Added a maximum binding for backward compability with STU2.2, and provided Concept Maps for mapping the old valuesets ([AdministrativeGenderOldCM]) and new valuesets([AdministrativeGenderCM]) to IJE.
* Added profiles supporting maternal death reporting requirements to link birth certificate ([BirthRecordIdentifierChild]) or fetal death report ([FetalDeathRecordIdentifier]) associated with maternal death, and added them as optional content in DeathCertificate composition. The subject of all of three linkage identifier observations is the decedent.
* Clarified that certificate numbers are 6 digit numbers with leading zeroes allowed.  They are (unfortunately) defined as FHIR strings.
* Restricted [ExtensionLocationJurisdictionIdVitalRecords] Extension to Address.state context.
* Added a new bundle for Coded Industry and Occupation: [IndustryOccupationCodedContentBundle] with an [example](Bundle-IndustryOccupationCodedContentBundle-Example1.html) [IndustryOccupationCodedContentBundle-Example1] to address 
* Modified composition examples to use ruleset for general cleanup and to address publisher errors related to fullurl based rules around matching relative references

#### Harmonization Changes
* For a detailed description of harmonization changes see [STU2.2 to STU3 Changes](content-transitions.html).
* All references to Decedent are not references to PatientVitalRecords that is defined in VRCL.  The latter is essentially a USCorePatient profile with optional extensions for vital records uses.   This allows reuse of VRDR profiles in MDI STU2. Decedent is now a profile of PatientVitalRecords.  
* MaritalStatus valueset and corresponding concept map were moved to VRCL for general utility. Decedent profile made to reference MaritalStatus VS in VRCL. 
* [DeathLocation], [InjuryLocation], and [DispositionLocation] were updated to depend on the abstract [LocationVitalRecords](https://build.fhir.org/ig/HL7/vr-common-library/StructureDefinition-Location-vr.html) profile in VRCL. 
* Edit flag valueset harmonization: Deleted BypassEditFlagCS and referenced [VRCL Edit Flags Codesystem](https://hl7.org/fhir/us/vr-common-library/CodeSystem/CodeSystem-vr-edit-flags) instead
* Record identifiers harmonization: Removed AuxiliaryStateIdentifier1, AuxiliaryStateIdentifier2, and CertificateNumber from VRDR and referenced extensions in VRCL
* Removed LocationJurisdictionID as it exists in [VRCL](https://build.fhir.org/ig/HL7/vr-common-library/StructureDefinition-Extension-jurisdiction-id-vr.html) and is only used for the abstract [PatientVitalRecords](https://build.fhir.org/ig/HL7/vr-common-library/StructureDefinition-Patient-vr.html) and [LocationVitalRecords](https://build.fhir.org/ig/HL7/vr-common-library/StructureDefinition-Location-vr.html) profiles in VRCL. 
* [DateDay], [DateMonth], [DateYear], and [DateTime] had been used by [PartialDateTime], which has been moved to VRCL and no longer uses these extensions
* To keep general demographic and non-death-specific information in VRCL, [CodedRaceAndEthnicity], [InputRaceAndEthnicity], and [EmergingIssues] moved to VRCL
* NA code added to [DeathPregnancyStatusVS] 
* Made Certifier derive from [PractitionerVitalRecords](https://build.fhir.org/ig/HL7/vr-common-library/StructureDefinition-Practitioner-vr.html) and added extension [PractitionerRole] that can be used to distinguish certifier and mortician from other practitioner types in the bundle 
* Removed local codes meant from VRCL from [ObservationsCS]

### Changes in Previous Versions
For changes in previous versions, please see the appropriate version.

{% include markdown-link-references.md %}

---

// File: input/pagecontent/conformance.md

### General Conformance Requirements
This FHIR IG specifies the content of data bundles sent as part of the death registration process.
The current agreement among the stakeholders in this process is codified in the Interjurisdictional Exchange (IJE) format.
Senders and receivers of data defined by the IJE standard, and thus by this IG, use various subsets of the data for their exchanges.  The primary conformance requirement is that the sender and the receiver of the data agree on the required fields for their exchange, with the required fields comprising a subset of the fields defined in the IJE format.   The data dictionary([html](DeathRecordDataDictionary.html), [xlsx](IJE_File_Layouts_and_FHIR_Mapping_24-06-21.csv)) included in this IG specifies the mapping of these fields to FHIR elements.  The ability to generate and process the FHIR profiles, fields, and components referenced in the data dictionary required for the particular exchange between a sender and receiver represent the conformance requirements for this IG.   Creaters of content should consult with the intended recipient of the data to determine the precise set of fields that are required for their intended exchange.

### Capability Statement
No capability statement is included because no IG-specific operations or search capabilities are required and the only expectation is that senders can send a message bundle and receivers can receive one, where the messaging transactions are defined elsewhere.

### Must Support
Given the general conformance requirements outlined above, this IG does not add any Must Support flags to its profiles.  Fields that are used for exchange are all present in the differential view for each profile, documented in the [data dictionary](DeathRecordDataDictionary.html), and in the documentation for each profile.

### Missing Data
Where relevant, value sets bound to codeable concepts provide options to indicate that data is missing or unknown.   Some [date/time fields]({{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times) provide the ability to indicate unknown components (e.g., missing year). A bundle that does not include certain profile instances should be mapped to blank values in the IJE format.


---

// File: input/pagecontent/content-transitions.md

<style>
    table.style1 { 
        border-collapse: collapse; 
        width: 100%; 
        table-layout: fixed;
    }  
    table.style1 tbody tr {
        border-bottom: 1px solid #dddddd;
    } 
    table.style1 tbody tr:nth-of-type(even) { 
        background-color: #f3f3f3; 
    } 
    table.style1 tbody tr:last-of-type {
        border-bottom: 2px solid #98c1d9;
    }
    table.style1 td:first-of-type {
        text-align: left;
    }
    table.style1 td:nth-of-type(2) {
        text-align: center;
    }
    table.style1 td:nth-of-type(3) {
        text-align: left;
    }
</style>
{% include transitions_documentation.md %}
<br/><br/>


### New STU3 Profiles

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='StructureDefinition-vrdr-birth-record-identifier-child.html'>BirthRecordIdentifierChild</a> </td><td>Maternal Death Linkeage</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-fetal-death-record-identifier.html'>FetalDeathRecordIdentifier</a> </td><td>Maternal Death Linkeage</td></tr>
<tr><td> <a href='StructureDefinition-industry-occupation-coded-content-bundle.html'>IndustryOccupationCodedContentBundle</a></td> <td>Support exchange of Coded Industry and Occupation</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-mortician.html'>Mortician</a> </td><td>Support of Funeral Home use cases</td></tr>
</tbody>
</table>


### STU3 Profiles

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Previous Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='StructureDefinition-vrdr-activity-at-time-of-death.html'>ActivityAtTimeOfDeath</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-activity-at-time-of-death.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-automated-underlying-cause-of-death.html'>AutomatedUnderlyingCauseOfDeath</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-automated-underlying-cause-of-death.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-autopsy-performed-indicator.html'>AutopsyPerformedIndicator</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-autopsy-performed-indicator.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-birth-record-identifier.html'>BirthRecordIdentifier</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-birth-record-identifier.html'>VRDR</a> </td><td>Infant Death Linkeage</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-cause-of-death-coded-content-bundle.html'>CauseOfDeathCodedContentBundle</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-cause-of-death-coded-content-bundle.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-cause-of-death-part1.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-cause-of-death-part2.html'>CauseOfDeathPart2</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-cause-of-death-part2.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-certifier.html'>Certifier</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-certifier.html'>VRDR</a> </td><td>Now depends on <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Practitioner-vr.html'>PractitionerVitalRecords</a> profile</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-coding-status-values.html'>CodingStatusValues</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-coding-status-values.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-death-certificate.html'>DeathCertificate</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-death-certificate.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-death-certificate-document.html'>DeathCertificateDocument</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-death-certificate-document.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-death-certification.html'>DeathCertification</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-death-certification.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-death-location.html'>VRDR</a> </td><td>Now depends on abstract <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Location-vr.html'>LocationVitalRecords</a> profile</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-decedent.html'>Decedent</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-decedent.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-decedent-age.html'>DecedentAge</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-decedent-age.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-decedent-disposition-method.html'>DecedentDispositionMethod</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-decedent-disposition-method.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-decedent-education-level.html'>DecedentEducationLevel</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-decedent-education-level.html'>VRDR</a> </td><td>Based on VRCL Profile</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-decedent-father.html'>DecedentFather</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-decedent-father.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-decedent-military-service.html'>DecedentMilitaryService</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-decedent-military-service.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-decedent-mother.html'>DecedentMother</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-decedent-mother.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-decedent-spouse.html'>DecedentSpouse</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-decedent-spouse.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-decedent-usual-work.html'>DecedentUsualWork</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-decedent-usual-work.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-demographic-coded-content-bundle.html'>DemographicCodedContentBundle</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-demographic-coded-content-bundle.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-disposition-location.html'>DispositionLocation</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-disposition-location.html'>VRDR</a> </td><td>Now depends on abstract <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Location-vr.html'>LocationVitalRecords</a> profile</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-entity-axis-cause-of-death.html'>EntityAxisCauseOfDeath</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-entity-axis-cause-of-death.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-death-date.html'>DeathDate</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-death-date.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-examiner-contacted.html'>ExaminerContacted</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-examiner-contacted.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-funeral-home.html'>FuneralHome</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-funeral-home.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-injury-location.html'>InjuryLocation</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-injury-location.html'>VRDR</a> </td><td>Now depends on abstract <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Location-vr.html'>LocationVitalRecords</a> profile</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-manner-of-death.html'>MannerOfDeath</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-manner-of-death.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-manual-underlying-cause-of-death.html'>ManualUnderlyingCauseOfDeath</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-manual-underlying-cause-of-death.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-mortality-roster-bundle.html'>MortalityRosterBundle</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-mortality-roster-bundle.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-decedent-pregnancy-status.html'>DecedentPregnancyStatus</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-decedent-pregnancy-status.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-injury-incident.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-place-of-injury.html'>PlaceOfInjury</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-place-of-injury.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-record-axis-cause-of-death.html'>RecordAxisCauseOfDeath</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-record-axis-cause-of-death.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-surgery-date.html'>SurgeryDate</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-surgery-date.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-vrdr-tobacco-use-contributed-to-death.html'>TobaccoUseContributedToDeath</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-tobacco-use-contributed-to-death.html'>VRDR</a> </td><td>-</td></tr>
</tbody>
</table>

### New STU3 Extensions

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='StructureDefinition-practitioner-role.html'>PractitionerRole</a> </td><td>Distinguishes Death Certifier and Mortician from other Practitioner types</td></tr>
</tbody>
</table>

### STU3 Extensions

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Previous Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='StructureDefinition-AliasStatus.html'>AliasStatus</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-AliasStatus.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-FilingFormat.html'>FilingFormat</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-FilingFormat.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-NVSS-SexAtDeath.html'>NVSSSexAtDeath</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-NVSS-SexAtDeath.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-ReplaceStatus.html'>ReplaceStatus</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-ReplaceStatus.html'>VRDR</a> </td><td> Deprecated </td></tr>
<tr><td> <a href='StructureDefinition-SpouseAlive.html'>SpouseAlive</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-SpouseAlive.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-StateSpecificField.html'>StateSpecificField</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-StateSpecificField.html'>VRDR</a> </td><td>-</td></tr>
</tbody>
</table>

### STU3 Valuesets

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Previous Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='ValueSet-vrdr-activity-at-time-of-death-vs.html'>ActivityAtTimeOfDeathVS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-activity-at-time-of-death-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-administrative-gender-vs.html'>AdministrativeGenderVS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-administrative-gender-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-certifier-types-vs.html'>CertifierTypesVS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-certifier-types-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-contributory-tobacco-use-vs.html'>ContributoryTobaccoUseVS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-contributory-tobacco-use-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-date-of-death-determination-methods-vs.html'>DateOfDeathDeterminationMethodsVS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-date-of-death-determination-methods-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-edit-bypass-01-vs.html'>EditBypass01VS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-edit-bypass-01-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-edit-bypass-012-vs.html'>EditBypass012VS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-edit-bypass-012-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-edit-bypass-0124-vs.html'>EditBypass0124VS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-edit-bypass-0124-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-filing-format-vs.html'>FilingFormatVS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-filing-format-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-icd10-causes-of-death-vs.html'>ICD10CausesOfDeathVS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-icd10-causes-of-death-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-intentional-reject-vs.html'>IntentionalRejectVS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-intentional-reject-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-manner-of-death-vs.html'>MannerOfDeathVS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-manner-of-death-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-method-of-disposition-vs.html'>MethodOfDispositionVS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-method-of-disposition-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-place-of-death-vs.html'>PlaceOfDeathVS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-place-of-death-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-place-of-injury-vs.html'>PlaceOfInjuryVS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-place-of-injury-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-replace-status-vs.html'>ReplaceStatusVS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-replace-status-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-spouse-alive-vs.html'>SpouseAliveVS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-spouse-alive-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-system-reject-vs.html'>SystemRejectVS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-system-reject-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-transax-conversion-vs.html'>TransaxConversionVS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-transax-conversion-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-transportation-incident-role-vs.html'>TransportationIncidentRoleVS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-transportation-incident-role-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='ValueSet-vrdr-death-pregnancy-status-vs.html'>DeathPregnancyStatusVS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-pregnancy-status-vs.html'>VRDR</a> </td><td>-</td></tr>
</tbody>
</table>


### STU3 Codesystems

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Previous Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='CodeSystem-vrdr-activity-at-time-of-death-cs.html'>ActivityAtTimeOfDeathCS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-activity-at-time-of-death-cs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='CodeSystem-CodeSystem-death-pregnancy-status.html'>DeathPregnancyStatusCS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-pregnancy-status-cs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='CodeSystem-vrdr-date-of-death-determination-methods-cs.html'>DateOfDeathDeterminationMethodsCS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-date-of-death-determination-methods-cs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='CodeSystem-vrdr-document-section-cs.html'>DocumentSectionCS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-document-section-cs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='CodeSystem-vrdr-filing-format-cs.html'>FilingFormatCS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-filing-format-cs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='CodeSystem-vrdr-intentional-reject-cs.html'>IntentionalRejectCS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-intentional-reject-cs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='CodeSystem-vrdr-organization-type-cs.html'>OrganizationTypeCS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-organization-type-cs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='CodeSystem-vrdr-location-type-cs.html'>LocationTypeCS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-location-type-cs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='CodeSystem-vrdr-replace-status-cs.html'>ReplaceStatusCS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-replace-status-cs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='CodeSystem-vrdr-system-reject-cs.html'>SystemRejectCS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-system-reject-cs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='CodeSystem-vrdr-transax-conversion-cs.html'>TransaxConversionCS</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-transax-conversion-cs.html'>VRDR</a> </td><td>-</td></tr>
</tbody>
</table>


### Removed Profiles

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Current Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-emerging-issues.html'>EmergingIssues</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-input-race-and-ethnicity.html'>InputRaceAndEthnicity</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-coded-race-and-ethnicity.html'>CodedRaceAndEthnicity</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>VRCL</a> </td><td>-</td></tr>
</tbody>
</table>


### Removed Extensions

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Current Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-AuxiliaryStateIdentifier1.html'>AuxiliaryStateIdentifier1</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-AuxiliaryStateIdentifier1.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-AuxiliaryStateIdentifier2.html'>AuxiliaryStateIdentifier2</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-AuxiliaryStateIdentifier2.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-BypassEditFlag.html'>BypassEditFlag</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-BypassEditFlag.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-CertificateNumber.html'>CertificateNumber</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-CertificateNumber.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-CityCode.html'>CityCode</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-CityCode.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-Date-Day.html'>DateDay</a> </td><td>Removed</td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-Date-Month.html'>DateMonth</a> </td><td>Removed</td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-Date-Time.html'>DateTime</a> </td><td>Removed</td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-Date-Year.html'>DateYear</a> </td><td>Removed</td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-DistrictCode.html'>DistrictCode</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-DistrictCode.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-Location-Jurisdiction-Id.html'>LocationJurisdictionId</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Extension-jurisdiction-id-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-PartialDate.html'>PartialDate</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Extension-partial-date-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-PartialDateTime.html'>PartialDateTime</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Extension-partial-date-time-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-PostDirectional.html'>PostDirectional</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-PostDirectional.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-PreDirectional.html'>PreDirectional</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-PreDirectional.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-StreetDesignator.html'>StreetDesignator</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-StreetDesignator.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-StreetName.html'>StreetName</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-StreetName.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-StreetNumber.html'>StreetNumber</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-StreetNumber.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-UnitOrAptNumber.html'>UnitOrAptNumber</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-UnitOrAptNumber.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-WithinCityLimitsIndicator.html'>WithinCityLimitsIndicator</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Extension-within-city-limits-indicator-vr.html'>VRCL</a> </td><td>-</td></tr>
</tbody>
</table>


### Removed Valuesets

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Current Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-birthplace-country-vs.html'>BirthplaceCountryVS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-birthplace-country-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-canada-provinces-vs.html'>CanadaProvincesVS</a> </td><td>-</td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-edit-bypass-01234-vs.html'>EditBypass01234VS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-valueset-edit-bypass-01234-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-education-level-vs.html'>EducationLevelVS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-education-level-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-hispanic-no-unknown-vs.html'>HispanicNoUnknownVS</a> </td><td>-</td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-hispanic-origin-vs.html'>HispanicOriginVS</a> </td><td>-</td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-jurisdiction-vs.html'>JurisdictionVS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-jurisdiction-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-marital-status-vs.html'>MaritalStatusVS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-marital-status-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-race-code-vs.html'>RaceCodeVS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-race-missing-value-reason-vs.html'>RaceMissingValueReasonVS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-missing-value-reason-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-race-recode-40-vs.html'>RaceRecode40VS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-recode-40-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-residence-country-vs.html'>ResidenceCountryVS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-residence-country-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-states-territories-provinces-vs.html'>StatesTerritoriesAndProvincesVS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-usstates-territories-vs.html'>USStatesAndTerritoriesVS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-usstates-territories-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-units-of-age-vs.html'>UnitsOfAgeVS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-units-of-age-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-yes-no-unknown-vs.html'>YesNoUnknownVS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-yes-no-unknown-not-applicable-vs.html'>YesNoUnknownNotApplicableVS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-not-applicable-vr.html'>VRCL</a> </td><td>-</td></tr>
</tbody>
</table>


### Removed Codesystems

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Current Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-bypass-edit-flag-cs.html'>BypassEditFlagCS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/CodeSystem-CodeSystem-vr-edit-flags.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-canadian-provinces-cs.html'>CanadianProvincesCS</a> </td><td>-</td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-country-code-cs.html'>CountryCodeCS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/CodeSystem-CodeSystem-country-code-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-hispanic-origin-cs.html'>HispanicOriginCS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/CodeSystem-CodeSystem-hispanic-origin-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-jurisdictions-cs.html'>JurisdictionsCS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/CodeSystem-CodeSystem-jurisdictions-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-missing-value-reason-cs.html'>MissingValueReasonCS</a> </td><td>-</td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-race-code-cs.html'>RaceCodeCS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/CodeSystem-CodeSystem-race-code-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-race-recode-40-cs.html'>RaceRecode40CS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/CodeSystem-CodeSystem-race-recode-40-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-component-cs.html'>ComponentCS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/CodeSystem-codesystem-vr-component.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-observations-cs.html'>ObservationsCS</a> </td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/CodeSystem-CodeSystem-local-observation-codes-vr.html'>VRCL</a> </td><td>-</td></tr>
</tbody>
</table>



---

// File: input/pagecontent/credits.md

### Project Team
The following contributed to the development of the STU3 version of VRDR.

#### Project Facilitators 
* Veronique Benie, Computer Scientist, CDC/National Center for Health Statistics
* [Cynthia Bush](https://www.linkedin.com/in/cynthia-cindy-bush-584bb0158/), Health Scientist (Informatics), CDC/National Center for Health Statistics

#### Specification Developers 
* [Saul A. Kravitz](https://www.linkedin.com/in/skravitz/), MITRE
* [Rob Passas](https://www.linkedin.com/in/robert-passas-b2b795124/), MITRE
* [Patricia Tran](https://www.linkedin.com/in/patricia-tran-56896874/), MITRE

#### Development Team 

* [MITRE], a not-for-profit organization working in the public interest across federal, state and local governments, as well as industry and academia.

### Acknowledgements for 
* The development of the VRDR implementation guide by the [development team](credits.html#development-team) was performed under contract to CDC/NCHS/DVS under the direction of the [project facilitators](credits.html#project-facilitators).
* The published content of this guide was developed using [FHIR Shorthand syntax](http://hl7.org/fhir/uv/shorthand/) and the [SUSHI tookit](https://fshschool.org/docs/sushi/), a free, open source toolchain from the [MITRE]. Generous guidance on FHIR Shorthand and SUSHI was provided by Chris Moesel.   The data dictionaries were produced using the [makeIJEMappingFromCSVtoHTML.rb](https://github.com/HL7/vrdr/blob/master/tools/makeIJEMappingFromCSVtoHTML.rb) script developed by Rob Passas and Patricia Tran. For a description of how to maintain the data dictionary content, please see https://github.com/HL7/vrdr/blob/master/tools/README.md 
* The VRDR FHIR IG is a work product of the [HL7 Public Health Workgroup](http://www.hl7.org/Special/committees/pher/overview.cfm). The HL7 Project Insight reference number for this project is [1475](http://www.hl7.org/Special/committees/pher/projects.cfm?action=edit&ProjectNumber=1475).

### Testing Partners
The VRDR project team would like to express a special thanks to the following testing partners in their contribution to the VRDR:

* Centers for Disease Control and Prevention:
    *  Division of Cancer Prevention and Control

* Jurisdictional Vital Records Community:
    * California Department of Public Health
    * Delaware Department of Health and Social Services
    * District of Columbia Health
    * Georgia Department of Public Health
    * Michigan Department of Health & Human Services
    * National Association for Public Health Statistics and Information Systems
    * New Hampshire Department of Health and Human Services
    * New York State Department of Health
    * Utah Department of Health

* Vendor community
    * Altarum
    * Axiell
    * CNSI
    * Genesis
    * Outcome Healthcare
    * Ruvos
    * VitalChek

{% include markdown-link-references.md %}

---

// File: input/pagecontent/death_reporting_dataflow.md

The following diagram depicts the major flow of vital records of death information. Information about the decedent is captured from a variety of sources, including but not limited to electronic health record systems. Death investigation activities yield additional information concerning the manner of death, factors contributing to the cause of death, and the causal pathway of the cause of death conditions. 

<table><tr><td><img src="image002.png" style="width:100%;"/></td></tr></table>

Medicolegal Death Investigators file death certifications with state death registrars where that data are combined with information concerning the disposition of the descendants remains. State registrars report death incidents occurring in their jurisdiction to the CDCs National Center for Health Statistics (NCHS).



---

// File: input/pagecontent/DeathRecordDataDictionary.md

The following table illustrates the mappings of fields in the Interjurisdictional Exchange (IJE) formats for death to profiles and fields within this FHIR Implementation guide. This information is provided to guide implementers who are transitioning from the familiar IJE to the new FHIR format for this information.

Note that string fields in FHIR-formatted data will often be subject to the same string length limitations of the IJE format for the same content.
For example, name fields in IJE (e.g., DINSTI, GNAME) are restricted to 50 characters. Including strings longer than the IJE strength length limitations may lead to data truncation and/or business rule violations when data is sent to certain receivers, including NCHS. The IG includes maximum length restrictions on FHIR strings for some fields, and the FHIR validator will flag violations of these conformance restrictions. The IG does not impose maximum length restrictions for general FHIR fields like names and addresses since this seemed an unnatural constraint of widely used FHIR resources.

<style>
    table.style1 { 
        border-collapse: collapse; 
        width: 100%; 
        table-layout: fixed;
    }  
    table.style1 tbody tr {
    border-bottom: 1px solid #dddddd;
    } 
    table.style1 tbody tr:nth-of-type(even) { 
        background-color: #f3f3f3; 
    } 
    table.style1 tbody tr:last-of-type {
    border-bottom: 2px solid #98c1d9;
    }
    </style>
### Death Record IJE Mapping

These fields are included in a VRO's submission of a death record (only input, or non-coded, content). IJE fields that are part of the [Vital Statistics Cooperative Program (VSCP)](https://www.ncbi.nlm.nih.gov/books/NBK219877/pdf/Bookshelf_NBK219877.pdf) reporting requirements as of 2022 are denoted with a US Flag.

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 4%;'><b>#</b></td>
<td style='background-color:#98c1d9; width: 16%;'><b>Description</b></td>
<td style='background-color:#98c1d9; width: 13%;'><b>IJE Name*</b></td>
<td style='background-color:#98c1d9; width: 27%;'><b>Profile</b></td>
<td style='background-color:#98c1d9;'><b>Field</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 7%;'><b>Type</b></td>
<td style='background-color:#98c1d9; width: 14%;'><b>Value Set/Comments</b></td>
</tr>
<tr><td style='text-align: center;'>109</td><td>Was Autopsy performed</td><td>AUTOP <img height='16' img src='usflag.png' alt='AUTOP'/></td><td><a href='StructureDefinition-vrdr-autopsy-performed-indicator.html'>AutopsyPerformedIndicator</a></td><td>value</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>110</td><td>Were Autopsy Findings Available to Complete the Cause of Death?</td><td>AUTOPF <img height='16' img src='usflag.png' alt='AUTOPF'/></td><td><a href='StructureDefinition-vrdr-autopsy-performed-indicator.html'>AutopsyPerformedIndicator</a></td><td>component[autopsyResultsAvailable].value</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-not-applicable-vr.html'>ValueSetYesNoUnknownNotApplicableVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>88</td><td>Infant Death/Birth Linking - birth certificate number</td><td>BCNO <img height='16' img src='usflag.png' alt='BCNO'/></td><td><a href='StructureDefinition-vrdr-birth-record-identifier.html'>BirthRecordIdentifier</a></td><td>value</td><td>string(6)</td><td>-</td></tr>
<tr><td style='text-align: center;'>89</td><td>Infant Death/Birth Linking - year of birth</td><td>IDOB_YR <img height='16' img src='usflag.png' alt='IDOB_YR'/></td><td><a href='StructureDefinition-vrdr-birth-record-identifier.html'>BirthRecordIdentifier</a></td><td>component[birthYear].value</td><td>dateTime</td><td>YYYY component</td></tr>
<tr><td style='text-align: center;'>90</td><td>Infant Death/Birth Linking - State, U.S. Territory or Canadian Province of Birth - code</td><td>BSTATE <img height='16' img src='usflag.png' alt='BSTATE'/></td><td><a href='StructureDefinition-vrdr-birth-record-identifier.html'>BirthRecordIdentifier</a></td><td>component[birthJurisdiction].value</td><td>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-jurisdiction-vr.html'>ValueSetJurisdictionVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>185</td><td>Cause of Death Part I Line a</td><td>COD1A <img height='16' img src='usflag.png' alt='COD1A'/></td><td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td><td>value.text,   component[lineNumber] = 1</td><td>string(120)</td><td>-</td></tr>
<tr><td style='text-align: center;'>186</td><td>Cause of Death Part I Interval, Line a</td><td>INTERVAL1A <img height='16' img src='usflag.png' alt='INTERVAL1A'/></td><td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td><td>component[interval].value, component[lineNumber] = 1</td><td>string(20)</td><td>-</td></tr>
<tr><td style='text-align: center;'>187</td><td>Cause of Death Part I Line b</td><td>COD1B <img height='16' img src='usflag.png' alt='COD1B'/></td><td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td><td>value.text,   component[lineNumber] = 2</td><td>string(120)</td><td>-</td></tr>
<tr><td style='text-align: center;'>188</td><td>Cause of Death Part I Interval, Line b</td><td>INTERVAL1B <img height='16' img src='usflag.png' alt='INTERVAL1B'/></td><td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td><td>component[interval].value, component[lineNumber] = 2</td><td>string(20)</td><td>-</td></tr>
<tr><td style='text-align: center;'>189</td><td>Cause of Death Part I Line c</td><td>COD1C <img height='16' img src='usflag.png' alt='COD1C'/></td><td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td><td>value.text,   component[lineNumber] = 3</td><td>string(120)</td><td>-</td></tr>
<tr><td style='text-align: center;'>190</td><td>Cause of Death Part I Interval, Line c</td><td>INTERVAL1C <img height='16' img src='usflag.png' alt='INTERVAL1C'/></td><td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td><td>component[interval].value, component[lineNumber] = 3</td><td>string(20)</td><td>-</td></tr>
<tr><td style='text-align: center;'>191</td><td>Cause of Death Part I Line d</td><td>COD1D <img height='16' img src='usflag.png' alt='COD1D'/></td><td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td><td>value.text,   component[lineNumber] = 4</td><td>string(120)</td><td>-</td></tr>
<tr><td style='text-align: center;'>192</td><td>Cause of Death Part I Interval, Line d</td><td>INTERVAL1D <img height='16' img src='usflag.png' alt='INTERVAL1D'/></td><td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td><td>component[interval].value, component[lineNumber] = 4</td><td>string(20)</td><td>-</td></tr>
<tr><td style='text-align: center;'>193</td><td>Cause of Death Part II</td><td>OTHERCONDITION <img height='16' img src='usflag.png' alt='OTHERCONDITION'/></td><td><a href='StructureDefinition-vrdr-cause-of-death-part2.html'>CauseOfDeathPart2</a></td><td>value.text</td><td>string(240)</td><td>-</td></tr>
<tr><td style='text-align: center;'>220</td><td>Certifier's First Name</td><td>CERTFIRST</td><td><a href='StructureDefinition-vrdr-certifier.html'>Certifier</a></td><td>name.given , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>221</td><td>Certifier's Middle Name</td><td>CERTMIDDLE</td><td><a href='StructureDefinition-vrdr-certifier.html'>Certifier</a></td><td>name.given , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>222</td><td>Certifier's Last Name</td><td>CERTLAST</td><td><a href='StructureDefinition-vrdr-certifier.html'>Certifier</a></td><td>name.family , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>223</td><td>Certifier's Suffix Name</td><td>CERTSUFFIX</td><td><a href='StructureDefinition-vrdr-certifier.html'>Certifier</a></td><td>name.suffix , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>224</td><td>Certifier - Street number</td><td>CERTSTNUM</td><td><a href='StructureDefinition-vrdr-certifier.html'>Certifier</a></td><td>address.extension[stnum]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>225</td><td>Certifier - Pre Directional</td><td>CERTPREDIR</td><td><a href='StructureDefinition-vrdr-certifier.html'>Certifier</a></td><td>address.extension[predir]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>226</td><td>Certifier - Street name</td><td>CERTSTRNAME</td><td><a href='StructureDefinition-vrdr-certifier.html'>Certifier</a></td><td>address.extension[stname]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>227</td><td>Certifier - Street designator</td><td>CERTSTRDESIG</td><td><a href='StructureDefinition-vrdr-certifier.html'>Certifier</a></td><td>address.extension[stdesig]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>228</td><td>Certifier - Post Directional</td><td>CERTPOSTDIR</td><td><a href='StructureDefinition-vrdr-certifier.html'>Certifier</a></td><td>address.extension[postdir]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>229</td><td>Certifier - Unit or apt number</td><td>CERTUNITNUM</td><td><a href='StructureDefinition-vrdr-certifier.html'>Certifier</a></td><td>address.extension[unitnum]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>230</td><td>Long string address for Certifier same as above but allows states to choose the way they capture information.</td><td>CERTADDRESS</td><td><a href='StructureDefinition-vrdr-certifier.html'>Certifier</a></td><td>address.line</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>231</td><td>Certifier - City or Town name</td><td>CERTCITYTEXT</td><td><a href='StructureDefinition-vrdr-certifier.html'>Certifier</a></td><td>address.city</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>232</td><td>State, U.S. Territory or Canadian Province of Certifier - code</td><td>CERTSTATECD</td><td><a href='StructureDefinition-vrdr-certifier.html'>Certifier</a></td><td>address.state</td><td>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>233</td><td>State, U.S. Territory or Canadian Province of Certifier - literal</td><td>CERTSTATE</td><td><a href='StructureDefinition-vrdr-certifier.html'>Certifier</a></td><td>address.state (expanded from 2 letter code)</td><td>string</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td></tr>
<tr><td style='text-align: center;'>234</td><td>Certifier - Zip</td><td>CERTZIP</td><td><a href='StructureDefinition-vrdr-certifier.html'>Certifier</a></td><td>address.postalCode</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>6</td><td>Source flag: paper/electronic</td><td>MFILED <img height='16' img src='usflag.png' alt='MFILED'/></td><td><a href='StructureDefinition-vrdr-death-certificate.html'>DeathCertificate</a></td><td>extension[filingFormat]</td><td>codeable</td><td><a href='ValueSet-vrdr-filing-format-vs.html'>FilingFormatVS</a></td></tr>
<tr><td style='text-align: center;'>96</td><td>Date of Registration--Year</td><td>DOR_YR <img height='16' img src='usflag.png' alt='DOR_YR'/></td><td><a href='StructureDefinition-vrdr-death-certificate.html'>DeathCertificate</a></td><td>date</td><td>dateTime</td><td>-</td></tr>
<tr><td style='text-align: center;'>97</td><td>Date of Registration--Month</td><td>DOR_MO <img height='16' img src='usflag.png' alt='DOR_MO'/></td><td><a href='StructureDefinition-vrdr-death-certificate.html'>DeathCertificate</a></td><td>date</td><td>dateTime</td><td>-</td></tr>
<tr><td style='text-align: center;'>98</td><td>Date of Registration--Day</td><td>DOR_DY <img height='16' img src='usflag.png' alt='DOR_DY'/></td><td><a href='StructureDefinition-vrdr-death-certificate.html'>DeathCertificate</a></td><td>date</td><td>dateTime</td><td>-</td></tr>
<tr><td style='text-align: center;'>122</td><td>State Specific Data</td><td>STATESP <img height='16' img src='usflag.png' alt='STATESP'/></td><td><a href='StructureDefinition-vrdr-death-certificate.html'>DeathCertificate</a></td><td>extension[stateSpecificField]</td><td>string(30)</td><td>-</td></tr>
<tr><td style='text-align: center;'>184</td><td>Replacement Record</td><td>REPLACE (*deprecated*)</td><td><a href='StructureDefinition-vrdr-death-certificate.html'>DeathCertificate</a></td><td>extension[replaceStatus]</td><td>codeable</td><td><a href='ValueSet-vrdr-replace-status-vs.html'>ReplaceStatusVS</a></td></tr>
<tr><td style='text-align: center;'>3</td><td>Certificate Number</td><td>FILENO <img height='16' img src='usflag.png' alt='FILENO'/></td><td><a href='StructureDefinition-vrdr-death-certificate-document.html'>DeathCertificateDocument</a></td><td>identifier.extension[certificateNumber].value</td><td>string(6)</td><td>-</td></tr>
<tr><td style='text-align: center;'>5</td><td>Auxiliary State file number</td><td>AUXNO <img height='16' img src='usflag.png' alt='AUXNO'/></td><td><a href='StructureDefinition-vrdr-death-certificate-document.html'>DeathCertificateDocument</a></td><td>identifier.extension[auxiliaryStateIdentifier1].value</td><td>string(12)</td><td>-</td></tr>
<tr><td style='text-align: center;'>121</td><td>Auxiliary State file number</td><td>AUXNO2 <img height='16' img src='usflag.png' alt='AUXNO2'/></td><td><a href='StructureDefinition-vrdr-death-certificate-document.html'>DeathCertificateDocument</a></td><td>identifier.extension[auxiliaryStateIdentifier2].value</td><td>string(12)</td><td>-</td></tr>
<tr><td style='text-align: center;'>NA</td><td>Death Record Identifier</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-vrdr-death-certificate-document.html'>DeathCertificateDocument</a></td><td>identifier.value</td><td>string(12)</td><td>YYYYJJNNNNNN,  YYYY = death year JJ = jurisdiction  and NNNNNN = certificate number</td></tr>
<tr><td style='text-align: center;'>119</td><td>Title of Certifier</td><td>CERTL</td><td><a href='StructureDefinition-vrdr-death-certification.html'>DeathCertification</a></td><td>performer.function (note that if value is "OTH" then performed.function.text should contain 'Full Text for Other Individual Legally Allowed to Certify')</td><td>codeable</td><td><a href='ValueSet-vrdr-certifier-types-vs.html'>CertifierTypesVS</a></td></tr>
<tr><td style='text-align: center;'>235</td><td>Certifier Date Signed</td><td>CERTDATE</td><td><a href='StructureDefinition-vrdr-death-certification.html'>DeathCertification</a></td><td>performed</td><td>dateTime</td><td>-</td></tr>
<tr><td style='text-align: center;'>119</td><td>Title of Certifier</td><td>CERTL</td><td><a href='StructureDefinition-vrdr-death-certification.html'>DeathCertification</a></td><td>performer.function (note that if value is "OTH" then performed.function.text should contain 'Full Text for Other Individual Legally Allowed to Certify')</td><td>codeable</td><td><a href='ValueSet-vrdr-certifier-types-vs.html'>CertifierTypesVS</a></td></tr>
<tr><td style='text-align: center;'>235</td><td>Certifier Date Signed</td><td>CERTDATE</td><td><a href='StructureDefinition-vrdr-death-certification.html'>DeathCertification</a></td><td>performed</td><td>dateTime</td><td>-</td></tr>
<tr><td style='text-align: center;'>1</td><td>Date of Death--Year</td><td>DOD_YR <img height='16' img src='usflag.png' alt='DOD_YR'/></td><td><a href='StructureDefinition-vrdr-death-date.html'>DeathDate</a></td><td>value</td><td>dateTime</td><td>Required for processing</td></tr>
<tr><td style='text-align: center;'>31</td><td>Place of Death</td><td>DPLACE <img height='16' img src='usflag.png' alt='DPLACE'/></td><td><a href='StructureDefinition-vrdr-death-date.html'>DeathDate</a></td><td>component[placeOfDeath].value</td><td>codeable</td><td><a href='ValueSet-vrdr-place-of-death-vs.html'>PlaceOfDeathVS</a></td></tr>
<tr><td style='text-align: center;'>34</td><td>Date of Death--Month</td><td>DOD_MO <img height='16' img src='usflag.png' alt='DOD_MO'/></td><td><a href='StructureDefinition-vrdr-death-date.html'>DeathDate</a></td><td>value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>35</td><td>Date of Death--Day</td><td>DOD_DY <img height='16' img src='usflag.png' alt='DOD_DY'/></td><td><a href='StructureDefinition-vrdr-death-date.html'>DeathDate</a></td><td>value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>36</td><td>Time of Death</td><td>TOD <img height='16' img src='usflag.png' alt='TOD'/></td><td><a href='StructureDefinition-vrdr-death-date.html'>DeathDate</a></td><td>value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>218</td><td>Person Pronouncing Date Signed</td><td>PPDATESIGNED</td><td><a href='StructureDefinition-vrdr-death-date.html'>DeathDate</a></td><td>component[datetimePronouncedDead].valueDateTime</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>219</td><td>Person Pronouncing Time Pronounced</td><td>PPTIME</td><td><a href='StructureDefinition-vrdr-death-date.html'>DeathDate</a></td><td>component[datetimePronouncedDead].valueDateTime if a date is also specified, or component[datetimePronouncedDead].valueTime if no date is specified</td><td>dateTime or time</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>2</td><td>State, U.S. Territory or Canadian Province of Death - code</td><td>DSTATE <img height='16' img src='usflag.png' alt='DSTATE'/></td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>address.state or address.state.extension[nationalReportingJurisdictionId]</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a> in state field or <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-jurisdiction-vr.html'>ValueSetJurisdictionVitalRecords</a> in extension</td></tr>
<tr><td style='text-align: center;'>32</td><td>County of Death Occurrence</td><td>COD <img height='16' img src='usflag.png' alt='COD'/></td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>address.district.extension[districtCode]</td><td>integer</td><td>see <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#county-codes'>CountyCodes</a></td></tr>
<tr><td style='text-align: center;'>129</td><td>Death Institution name</td><td>DINSTI <img height='16' img src='usflag.png' alt='DINSTI'/></td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>name</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>130</td><td>Long String address for place of death</td><td>ADDRESS_D <img height='16' img src='usflag.png' alt='ADDRESS_D'/></td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>address.line</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>131</td><td>Place of death. Street number</td><td>STNUM_D <img height='16' img src='usflag.png' alt='STNUM_D'/></td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>address.extension[stnum]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>132</td><td>Place of death. Pre Directional</td><td>PREDIR_D <img height='16' img src='usflag.png' alt='PREDIR_D'/></td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>address.extension[predir]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>133</td><td>Place of death. Street name</td><td>STNAME_D <img height='16' img src='usflag.png' alt='STNAME_D'/></td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>address.extension[stname]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>134</td><td>Place of death. Street designator</td><td>STDESIG_D <img height='16' img src='usflag.png' alt='STDESIG_D'/></td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>address.extension[stdesig]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>135</td><td>Place of death. Post Directional</td><td>POSTDIR_D <img height='16' img src='usflag.png' alt='POSTDIR_D'/></td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>address.extension[postdir]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>136</td><td>Place of death. City or Town name</td><td>CITYTEXT_D <img height='16' img src='usflag.png' alt='CITYTEXT_D'/></td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>address.city</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>137</td><td>Place of death. State name literal</td><td>STATETEXT_D <img height='16' img src='usflag.png' alt='STATETEXT_D'/></td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>address.state (expanded from 2 letter code)</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>138</td><td>Place of death. Zip code</td><td>ZIP9_D <img height='16' img src='usflag.png' alt='ZIP9_D'/></td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>address.postalCode</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>139</td><td>Place of death. County of Death</td><td>COUNTYTEXT_D <img height='16' img src='usflag.png' alt='COUNTYTEXT_D'/></td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>address.district</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>140</td><td>Place of death. City FIPS code</td><td>CITYCODE_D <img height='16' img src='usflag.png' alt='CITYCODE_D'/></td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>address.city.extension[cityCode]</td><td>integer</td><td>see <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#city-codes'>CityCodes</a></td></tr>
<tr><td style='text-align: center;'>141</td><td>Place of death. Longitude</td><td>LONG_D</td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>position.longitude</td><td>float</td><td>-</td></tr>
<tr><td style='text-align: center;'>142</td><td>Place of Death. Latitude</td><td>LAT_D</td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>position.latitude</td><td>float</td><td>-</td></tr>
<tr><td style='text-align: center;'>239</td><td>Country of Death - Code</td><td>DTHCOUNTRYCD</td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>address.country</td><td>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-residence-country-vr.html'>ValueSetResidenceCountryVitalRecords</a>.  Note: For US Death certificates should be US</td></tr>
<tr><td style='text-align: center;'>240</td><td>Country of Death - Literal</td><td>DTHCOUNTRY</td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>address.country  (expanded from 2 letter code)</td><td>string</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#country-literals'>CountryLiterals</a>.   Not used. For US Death certificates should be 'United States'.</td></tr>
<tr><td style='text-align: center;'>7</td><td>Decedent's Legal Name--Given</td><td>GNAME <img height='16' img src='usflag.png' alt='GNAME'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>name.given , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>8</td><td>Decedent's Legal Name--Middle</td><td>MNAME <img height='16' img src='usflag.png' alt='MNAME'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>name.given , name.use = official (first letter)</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>9</td><td>Decedent's Legal Name--Last</td><td>LNAME <img height='16' img src='usflag.png' alt='LNAME'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>name.family , name.use = official. (absence is equivalent to 'UNKNOWN'.)</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>10</td><td>Decedent's Legal Name--Suffix</td><td>SUFF <img height='16' img src='usflag.png' alt='SUFF'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>name.suffix , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>13</td><td>Sex</td><td>SEX <img height='16' img src='usflag.png' alt='SEX'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>extension[NVSS-SexAtDeath]</td><td>codeable</td><td><a href='ValueSet-vrdr-administrative-gender-vs.html'>AdministrativeGenderVS</a></td></tr>
<tr><td style='text-align: center;'>NA</td><td>Gender</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>gender</td><td>codeable</td><td><a href='ValueSet-vrdr-administrative-gender-vs.html'>AdministrativeGenderVS</a> - See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#gender'>Note on Gender</a></td></tr>
<tr><td style='text-align: center;'>15</td><td>Social Security Number</td><td>SSN <img height='16' img src='usflag.png' alt='SSN'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>identifier.value where system = 'http://hl7.org/fhir/sid/us-ssn and type.coding.code="SS"</td><td>string</td><td>type.coding.code="SB" is deprecated but also supported for compatibility</td></tr>
<tr><td style='text-align: center;'>19</td><td>Date of Birth--Year</td><td>DOB_YR <img height='16' img src='usflag.png' alt='DOB_YR'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>birthDate.value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>20</td><td>Date of Birth--Month</td><td>DOB_MO <img height='16' img src='usflag.png' alt='DOB_MO'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>birthDate.value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>21</td><td>Date of Birth--Day</td><td>DOB_DY <img height='16' img src='usflag.png' alt='DOB_DY'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>birthDate.value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>22</td><td>Birthplace--Country</td><td>BPLACE_CNT <img height='16' img src='usflag.png' alt='BPLACE_CNT'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>extension[patient-birthPlace].value[x].country</td><td>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-birthplace-country-vr.html'>ValueSetBirthplaceCountryVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>23</td><td>State, U.S. Territory or Canadian Province of Birth - code</td><td>BPLACE_ST <img height='16' img src='usflag.png' alt='BPLACE_ST'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>extension[patient-birthPlace].value[x].state</td><td>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>24</td><td>Decedent's Residence--City</td><td>CITYC <img height='16' img src='usflag.png' alt='CITYC'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.city.extension[cityCode]</td><td>integer</td><td>see <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#city-codes'>CityCodes</a></td></tr>
<tr><td style='text-align: center;'>25</td><td>Decedent's Residence--County</td><td>COUNTYC <img height='16' img src='usflag.png' alt='COUNTYC'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.district.extension[districtCode]</td><td>integer</td><td>see <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#county-codes'>CountyCodes</a></td></tr>
<tr><td style='text-align: center;'>26</td><td>State, U.S. Territory or Canadian Province of Decedent's residence - code</td><td>STATEC <img height='16' img src='usflag.png' alt='STATEC'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.state</td><td>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>27</td><td>Decedent's Residence--Country</td><td>COUNTRYC <img height='16' img src='usflag.png' alt='COUNTRYC'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.country</td><td>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-residence-country-vr.html'>ValueSetResidenceCountryVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>28</td><td>Decedent's Residence--Inside City Limits</td><td>LIMITS <img height='16' img src='usflag.png' alt='LIMITS'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.city.extension[withinCityLimits]</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>29</td><td>Marital Status</td><td>MARITAL <img height='16' img src='usflag.png' alt='MARITAL'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>maritalStatus</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-marital-status-vr.html'>ValueSetMaritalStatusVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>30</td><td>Marital Status--Edit Flag</td><td>MARITAL_BYPASS <img height='16' img src='usflag.png' alt='MARITAL_BYPASS'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>maritalStatus.extension[BypassEditFlag]</td><td>codeable</td><td><a href='ValueSet-vrdr-edit-bypass-0124-vs.html'>EditBypass0124VS</a></td></tr>
<tr><td style='text-align: center;'>143</td><td>Decedent's spouse living at decedent's DOD?</td><td>SPOUSELV</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>extension[Spouse-Alive]</td><td>codeable</td><td><a href='ValueSet-vrdr-spouse-alive-vs.html'>SpouseAliveVS</a></td></tr>
<tr><td style='text-align: center;'>146</td><td>Decedent's Residence - Street number</td><td>STNUM_R <img height='16' img src='usflag.png' alt='STNUM_R'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.extension[stnum]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>147</td><td>Decedent's Residence - Pre Directional</td><td>PREDIR_R <img height='16' img src='usflag.png' alt='PREDIR_R'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.extension[predir]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>148</td><td>Decedent's Residence - Street name</td><td>STNAME_R <img height='16' img src='usflag.png' alt='STNAME_R'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.extension[stname]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>149</td><td>Decedent's Residence - Street designator</td><td>STDESIG_R <img height='16' img src='usflag.png' alt='STDESIG_R'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.extension[stdesig]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>150</td><td>Decedent's Residence - Post Directional</td><td>POSTDIR_R <img height='16' img src='usflag.png' alt='POSTDIR_R'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.extension[postdir]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>151</td><td>Decedent's Residence - Unit or apt number</td><td>UNITNUM_R <img height='16' img src='usflag.png' alt='UNITNUM_R'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.extension[unitnum]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>152</td><td>Decedent's Residence - City or Town name</td><td>CITYTEXT_R <img height='16' img src='usflag.png' alt='CITYTEXT_R'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.city</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>153</td><td>Decedent's Residence - ZIP code</td><td>ZIP9_R <img height='16' img src='usflag.png' alt='ZIP9_R'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.postalCode</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>154</td><td>Decedent's Residence - County</td><td>COUNTYTEXT_R <img height='16' img src='usflag.png' alt='COUNTYTEXT_R'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.district</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>155</td><td>Decedent's Residence - State name</td><td>STATETEXT_R <img height='16' img src='usflag.png' alt='STATETEXT_R'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.state (expanded from 2 letter code)</td><td>string</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td></tr>
<tr><td style='text-align: center;'>156</td><td>Decedent's Residence - COUNTRY name</td><td>COUNTRYTEXT_R <img height='16' img src='usflag.png' alt='COUNTRYTEXT_R'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.country (expanded from 2 letter code)</td><td>string</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#country-literals'>CountryLiterals</a></td></tr>
<tr><td style='text-align: center;'>157</td><td>Long string address for decedent's place of residence same as above but allows states to choose the way they capture information.</td><td>ADDRESS_R <img height='16' img src='usflag.png' alt='ADDRESS_R'/></td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.line[0]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>166</td><td>Middle Name of Decedent</td><td>DMIDDLE</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>name.given , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>194</td><td>Decedent's Maiden Name</td><td>DMAIDEN</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>name.text , name.use = maiden</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>195</td><td>Decedent's Birth Place City - Code</td><td>DBPLACECITYCODE</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>extension[patient-birthPlace].value[x].city.extension[cityCode]</td><td>integer</td><td>see <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#city-codes'>CityCodes</a></td></tr>
<tr><td style='text-align: center;'>196</td><td>Decedent's Birth Place City - Literal</td><td>DBPLACECITY</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>extension[patient-birthPlace].value[x].city</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>201</td><td>Informant's Relationship</td><td>INFORMRELATE</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>contact.relationship.text</td><td>string (30 characters)</td><td>-</td></tr>
<tr><td style='text-align: center;'>238</td><td>State, U.S. Territory or Canadian Province of Birth - literal</td><td>STATEBTH</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>extension[patient-birthPlace].value[x].state or extension[patient-birthPlace].value[x].state.extension[nationalReportingJurisdictionId] if present    (expanded from 2 letter code)</td><td>string</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td></tr>
<tr><td style='text-align: center;'>246</td><td>Marital Descriptor</td><td>MARITAL_DESCRIP</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>maritalStatus.text</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>16</td><td>Decedent's Age--Type</td><td>AGETYPE <img height='16' img src='usflag.png' alt='AGETYPE'/></td><td><a href='StructureDefinition-vrdr-decedent-age.html'>DecedentAge</a></td><td>valueQuantity.code</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-units-of-age-vr.html'>ValueSetUnitsOfAgeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>17</td><td>Decedent's Age--Units</td><td>AGE <img height='16' img src='usflag.png' alt='AGE'/></td><td><a href='StructureDefinition-vrdr-decedent-age.html'>DecedentAge</a></td><td>valueQuantity.value</td><td>decimal</td><td>-</td></tr>
<tr><td style='text-align: center;'>18</td><td>Decedent's Age--Edit Flag</td><td>AGE_BYPASS <img height='16' img src='usflag.png' alt='AGE_BYPASS'/></td><td><a href='StructureDefinition-vrdr-decedent-age.html'>DecedentAge</a></td><td>value.extension[BypassEditFlag].value</td><td>codeable</td><td>See <a href='usage.html#decedent-name'>Note on Decedent Name</a></td></tr>
<tr><td style='text-align: center;'>33</td><td>Method of Disposition</td><td>DISP <img height='16' img src='usflag.png' alt='DISP'/></td><td><a href='StructureDefinition-vrdr-decedent-disposition-method.html'>DecedentDispositionMethod</a></td><td>value</td><td>codeable</td><td><a href='ValueSet-vrdr-method-of-disposition-vs.html'>MethodOfDispositionVS</a></td></tr>
<tr><td style='text-align: center;'>37</td><td>Decedent's Education</td><td>DEDUC <img height='16' img src='usflag.png' alt='DEDUC'/></td><td><a href='StructureDefinition-vrdr-decedent-education-level.html'>DecedentEducationLevel</a></td><td>value</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-education-level-vr.html'>ValueSetEducationLevelVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>38</td><td>Decedent's Education--Edit Flag</td><td>DEDUC_BYPASS <img height='16' img src='usflag.png' alt='DEDUC_BYPASS'/></td><td><a href='StructureDefinition-vrdr-decedent-education-level.html'>DecedentEducationLevel</a></td><td>value.extension[ByPassEdit].value</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-valueset-edit-bypass-01234-vr.html'>ValueSetEditBypass01234VitalRecords</a></td></tr>
<tr><td style='text-align: center;'>12</td><td>Father's Surname</td><td>FLNAME</td><td><a href='StructureDefinition-vrdr-decedent-father.html'>DecedentFather</a></td><td>name.family</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>167</td><td>Father's First Name</td><td>DDADF</td><td><a href='StructureDefinition-vrdr-decedent-father.html'>DecedentFather</a></td><td>name.given , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>168</td><td>Father's Middle Name</td><td>DDADMID</td><td><a href='StructureDefinition-vrdr-decedent-father.html'>DecedentFather</a></td><td>name.given , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>199</td><td>Father's Suffix</td><td>FATHERSUFFIX</td><td><a href='StructureDefinition-vrdr-decedent-father.html'>DecedentFather</a></td><td>name.suffix , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>128</td><td>Decedent ever served in Armed Forces?</td><td>ARMEDF <img height='16' img src='usflag.png' alt='ARMEDF'/></td><td><a href='StructureDefinition-vrdr-decedent-military-service.html'>DecedentMilitaryService</a></td><td>value</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>169</td><td>Mother's First Name</td><td>DMOMF</td><td><a href='StructureDefinition-vrdr-decedent-mother.html'>DecedentMother</a></td><td>name.given , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>170</td><td>Mother's Middle Name</td><td>DMOMMID</td><td><a href='StructureDefinition-vrdr-decedent-mother.html'>DecedentMother</a></td><td>name.given , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>171</td><td>Mother's Maiden Surname</td><td>DMOMMDN</td><td><a href='StructureDefinition-vrdr-decedent-mother.html'>DecedentMother</a></td><td>name.family , name.use = maiden</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>200</td><td>Mother's Suffix</td><td>MOTHERSSUFFIX</td><td><a href='StructureDefinition-vrdr-decedent-mother.html'>DecedentMother</a></td><td>name.suffix , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>144</td><td>Spouse's First Name</td><td>SPOUSEF</td><td><a href='StructureDefinition-vrdr-decedent-spouse.html'>DecedentSpouse</a></td><td>name.given</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>145</td><td>Husband's Surname/Wife's Maiden Last Name</td><td>SPOUSEL</td><td><a href='StructureDefinition-vrdr-decedent-spouse.html'>DecedentSpouse</a></td><td>name.family, name.use = maiden</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>197</td><td>Spouse's Middle Name</td><td>SPOUSEMIDNAME</td><td><a href='StructureDefinition-vrdr-decedent-spouse.html'>DecedentSpouse</a></td><td>name.given , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>198</td><td>Spouse's Suffix</td><td>SPOUSESUFFIX</td><td><a href='StructureDefinition-vrdr-decedent-spouse.html'>DecedentSpouse</a></td><td>name.suffix , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>112</td><td>Pregnancy</td><td>PREG <img height='16' img src='usflag.png' alt='PREG'/></td><td><a href='StructureDefinition-vrdr-decedent-pregnancy-status.html'>DecedentPregnancyStatus</a></td><td>value</td><td>codeable</td><td><a href='ValueSet-vrdr-death-pregnancy-status-vs.html'>DeathPregnancyStatusVS</a></td></tr>
<tr><td style='text-align: center;'>113</td><td>If Female--Edit Flag: From EDR only</td><td>PREG_BYPASS <img height='16' img src='usflag.png' alt='PREG_BYPASS'/></td><td><a href='StructureDefinition-vrdr-decedent-pregnancy-status.html'>DecedentPregnancyStatus</a></td><td>value.extension[BypassEditFlag].value</td><td>codeable</td><td><a href='ValueSet-vrdr-edit-bypass-012-vs.html'>EditBypass012VS</a></td></tr>
<tr><td style='text-align: center;'>202</td><td>State, U.S. Territory or Canadian Province of Disposition - code</td><td>DISPSTATECD</td><td><a href='StructureDefinition-vrdr-disposition-location.html'>DispositionLocation</a></td><td>address.state</td><td>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>203</td><td>Disposition State or Territory - Literal</td><td>DISPSTATE</td><td><a href='StructureDefinition-vrdr-disposition-location.html'>DispositionLocation</a></td><td>address.state (expanded from 2 letter code)</td><td>string</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td></tr>
<tr><td style='text-align: center;'>204</td><td>Disposition City - Code</td><td>DISPCITYCODE</td><td><a href='StructureDefinition-vrdr-disposition-location.html'>DispositionLocation</a></td><td>address.city.extension[cityCode].value</td><td>integer</td><td>see <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#city-codes'>CityCodes</a></td></tr>
<tr><td style='text-align: center;'>205</td><td>Disposition City - Literal</td><td>DISPCITY</td><td><a href='StructureDefinition-vrdr-disposition-location.html'>DispositionLocation</a></td><td>address.city</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>172</td><td>Was case Referred to Medical Examiner/Coroner?</td><td>REFERRED</td><td><a href='StructureDefinition-vrdr-examiner-contacted.html'>ExaminerContacted</a></td><td>value</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>206</td><td>Funeral Facility Name</td><td>FUNFACNAME</td><td><a href='StructureDefinition-vrdr-funeral-home.html'>FuneralHome</a></td><td>name</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>207</td><td>Funeral Facility - Street number</td><td>FUNFACSTNUM</td><td><a href='StructureDefinition-vrdr-funeral-home.html'>FuneralHome</a></td><td>address.extension[stnum]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>208</td><td>Funeral Facility - Pre Directional</td><td>FUNFACPREDIR</td><td><a href='StructureDefinition-vrdr-funeral-home.html'>FuneralHome</a></td><td>address.extension[predir]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>209</td><td>Funeral Facility - Street name</td><td>FUNFACSTRNAME</td><td><a href='StructureDefinition-vrdr-funeral-home.html'>FuneralHome</a></td><td>address.extension[stname]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>210</td><td>Funeral Facility - Street designator</td><td>FUNFACSTRDESIG</td><td><a href='StructureDefinition-vrdr-funeral-home.html'>FuneralHome</a></td><td>address.extension[stdesig]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>211</td><td>Funeral Facility - Post Directional</td><td>FUNPOSTDIR</td><td><a href='StructureDefinition-vrdr-funeral-home.html'>FuneralHome</a></td><td>address.extension[postdir]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>212</td><td>Funeral Facility - Unit or apt number</td><td>FUNUNITNUM</td><td><a href='StructureDefinition-vrdr-funeral-home.html'>FuneralHome</a></td><td>address.extension[unitnum]</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>213</td><td>Long string address for Funeral Facility same as above but allows states to choose the way they capture information.</td><td>FUNFACADDRESS</td><td><a href='StructureDefinition-vrdr-funeral-home.html'>FuneralHome</a></td><td>address.line</td><td>string</td><td>address.line</td></tr>
<tr><td style='text-align: center;'>214</td><td>Funeral Facility - City or Town name</td><td>FUNCITYTEXT</td><td><a href='StructureDefinition-vrdr-funeral-home.html'>FuneralHome</a></td><td>address.city</td><td>string</td><td>address.city</td></tr>
<tr><td style='text-align: center;'>215</td><td>State, U.S. Territory or Canadian Province of Funeral Facility - code</td><td>FUNSTATECD</td><td><a href='StructureDefinition-vrdr-funeral-home.html'>FuneralHome</a></td><td>address.state</td><td>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>216</td><td>State, U.S. Territory or Canadian Province of Funeral Facility - literal</td><td>FUNSTATE</td><td><a href='StructureDefinition-vrdr-funeral-home.html'>FuneralHome</a></td><td>address.state (expanded from 2 letter code)</td><td>string</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td></tr>
<tr><td style='text-align: center;'>217</td><td>Funeral Facility - ZIP</td><td>FUNZIP</td><td><a href='StructureDefinition-vrdr-funeral-home.html'>FuneralHome</a></td><td>address.postalCode</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>176</td><td>County of Injury - literal</td><td>COUNTYTEXT_I</td><td><a href='StructureDefinition-vrdr-injury-location.html'>InjuryLocation</a></td><td>address.district</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>177</td><td>County of Injury code</td><td>COUNTYCODE_I</td><td><a href='StructureDefinition-vrdr-injury-location.html'>InjuryLocation</a></td><td>address.district.extension[districtCode].value</td><td>integer</td><td>see <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#county-codes'>CountyCodes</a></td></tr>
<tr><td style='text-align: center;'>178</td><td>Town/city of Injury - literal</td><td>CITYTEXT_I</td><td><a href='StructureDefinition-vrdr-injury-location.html'>InjuryLocation</a></td><td>address.city</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>179</td><td>Town/city of Injury code</td><td>CITYCODE_I</td><td><a href='StructureDefinition-vrdr-injury-location.html'>InjuryLocation</a></td><td>address.city.extension[cityCode].value</td><td>integer</td><td>see <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#city-codes'>CityCodes</a></td></tr>
<tr><td style='text-align: center;'>180</td><td>State, U.S. Territory or Canadian Province of Injury - code</td><td>STATECODE_I</td><td><a href='StructureDefinition-vrdr-injury-location.html'>InjuryLocation</a></td><td>address.state</td><td>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>181</td><td>Place of injury. Longitude</td><td>LONG_I</td><td><a href='StructureDefinition-vrdr-injury-location.html'>InjuryLocation</a></td><td>position.longitude</td><td>float</td><td>-</td></tr>
<tr><td style='text-align: center;'>182</td><td>Place of injury. Latitude</td><td>LAT_I</td><td><a href='StructureDefinition-vrdr-injury-location.html'>InjuryLocation</a></td><td>position.latitude</td><td>float</td><td>-</td></tr>
<tr><td style='text-align: center;'>237</td><td>State, U.S. Territory or Canadian Province of Injury - literal</td><td>STINJURY</td><td><a href='StructureDefinition-vrdr-injury-location.html'>InjuryLocation</a></td><td>address.state (expanded from 2 letter code)</td><td>string</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td></tr>
<tr><td style='text-align: center;'>114</td><td>Date of injury--month</td><td>DOI_MO <img height='16' img src='usflag.png' alt='DOI_MO'/></td><td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td><td>effective.value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>115</td><td>Date of injury--day</td><td>DOI_DY <img height='16' img src='usflag.png' alt='DOI_DY'/></td><td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td><td>effective.value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>116</td><td>Date of injury--year</td><td>DOI_YR <img height='16' img src='usflag.png' alt='DOI_YR'/></td><td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td><td>effective.value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>117</td><td>Time of injury</td><td>TOI_HR <img height='16' img src='usflag.png' alt='TOI_HR'/></td><td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td><td>effective.value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>118</td><td>Injury at work</td><td>WORKINJ <img height='16' img src='usflag.png' alt='WORKINJ'/></td><td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td><td>component[workInjuryIndicator].value</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-not-applicable-vr.html'>ValueSetYesNoUnknownNotApplicableVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>126</td><td>Time of Injury Unit</td><td>TOI_UNIT <img height='16' img src='usflag.png' alt='TOI_UNIT'/></td><td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td><td>effective.value</td><td>implicit</td><td></td></tr>
<tr><td style='text-align: center;'>173</td><td>Place of Injury- literal</td><td>POILITRL <img height='16' img src='usflag.png' alt='POILITRL'/></td><td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td><td>component[placeOfInjury].value.text</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>174</td><td>Describe How Injury Occurred</td><td>HOWINJ <img height='16' img src='usflag.png' alt='HOWINJ'/></td><td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td><td>value.text</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>175</td><td>If Transportation Accident, Specify</td><td>TRANSPRT <img height='16' img src='usflag.png' alt='TRANSPRT'/></td><td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td><td>component[transportationRole].value.  (if value.code = OTH) the role should be specified in value.text)</td><td>codeable</td><td><a href='ValueSet-vrdr-transportation-incident-role-vs.html'>TransportationIncidentRoleVS</a></td></tr>
<tr><td style='text-align: center;'>100</td><td>Manner of Death</td><td>MANNER</td><td><a href='StructureDefinition-vrdr-manner-of-death.html'>MannerOfDeath</a></td><td>value</td><td>codeable</td><td><a href='ValueSet-vrdr-manner-of-death-vs.html'>MannerOfDeathVS</a></td></tr>
<tr><td style='text-align: center;'>248</td><td>Blank for One-Byte Field 1</td><td>PLACE1_1 <img height='16' img src='usflag.png' alt='PLACE1_1'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue1_1].value</td><td>string(1)</td><td></td></tr>
<tr><td style='text-align: center;'>249</td><td>Blank for One-Byte Field 2</td><td>PLACE1_2 <img height='16' img src='usflag.png' alt='PLACE1_2'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue1_2].value</td><td>string(1)</td><td></td></tr>
<tr><td style='text-align: center;'>250</td><td>Blank for One-Byte Field 3</td><td>PLACE1_3 <img height='16' img src='usflag.png' alt='PLACE1_3'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue1_3].value</td><td>string(1)</td><td></td></tr>
<tr><td style='text-align: center;'>251</td><td>Blank for One-Byte Field 4</td><td>PLACE1_4 <img height='16' img src='usflag.png' alt='PLACE1_4'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue1_4].value</td><td>string(1)</td><td></td></tr>
<tr><td style='text-align: center;'>252</td><td>Blank for One-Byte Field 5</td><td>PLACE1_5 <img height='16' img src='usflag.png' alt='PLACE1_5'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue1_5].value</td><td>string(1)</td><td></td></tr>
<tr><td style='text-align: center;'>253</td><td>Blank for One-Byte Field 6</td><td>PLACE1_6 <img height='16' img src='usflag.png' alt='PLACE1_6'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue1_6].value</td><td>string(1)</td><td></td></tr>
<tr><td style='text-align: center;'>254</td><td>Blank for Eight-Byte Field 1</td><td>PLACE8_1 <img height='16' img src='usflag.png' alt='PLACE8_1'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue8_1].value</td><td>string(8)</td><td></td></tr>
<tr><td style='text-align: center;'>255</td><td>Blank for Eight-Byte Field 2</td><td>PLACE8_2 <img height='16' img src='usflag.png' alt='PLACE8_2'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue8_2].value</td><td>string(8)</td><td></td></tr>
<tr><td style='text-align: center;'>256</td><td>Blank for Eight-Byte Field 3</td><td>PLACE8_3 <img height='16' img src='usflag.png' alt='PLACE8_3'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue8_3].value</td><td>string(8)</td><td></td></tr>
<tr><td style='text-align: center;'>257</td><td>Blank for Twenty-Byte Field</td><td>PLACE20 <img height='16' img src='usflag.png' alt='PLACE20'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue20].value</td><td>string(20)</td><td></td></tr>
<tr><td style='text-align: center;'>84</td><td>Occupation -- Literal</td><td>OCCUP <img height='16' img src='usflag.png' alt='OCCUP'/></td><td><a href='StructureDefinition-vrdr-decedent-usual-work.html'>DecedentUsualWork</a></td><td>value.text</td><td>string(40)</td><td>-</td></tr>
<tr><td style='text-align: center;'>86</td><td>Industry -- Literal</td><td>INDUST <img height='16' img src='usflag.png' alt='INDUST'/></td><td><a href='StructureDefinition-vrdr-decedent-usual-work.html'>DecedentUsualWork</a></td><td>component [odh-UsualIndustry	].value.text</td><td>string(40)</td><td>-</td></tr>
<tr><td style='text-align: center;'>39</td><td>Decedent of Hispanic Origin?--Mexican</td><td>DETHNIC1 <img height='16' img src='usflag.png' alt='DETHNIC1'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicMexican].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>40</td><td>Decedent of Hispanic Origin?--Puerto Rican</td><td>DETHNIC2 <img height='16' img src='usflag.png' alt='DETHNIC2'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicPuertoRican].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>41</td><td>Decedent of Hispanic Origin?--Cuban</td><td>DETHNIC3 <img height='16' img src='usflag.png' alt='DETHNIC3'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicCuban].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>42</td><td>Decedent of Hispanic Origin?--Other</td><td>DETHNIC4 <img height='16' img src='usflag.png' alt='DETHNIC4'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicOther].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>43</td><td>Decedent of Hispanic Origin?--Other, Literal</td><td>DETHNIC5 <img height='16' img src='usflag.png' alt='DETHNIC5'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>44</td><td>Decedent's Race--White</td><td>RACE1 <img height='16' img src='usflag.png' alt='RACE1'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[White].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>45</td><td>Decedent's Race--Black or African American</td><td>RACE2 <img height='16' img src='usflag.png' alt='RACE2'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[BlackOrAfricanAmerican].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>46</td><td>Decedent's Race--American Indian or Alaska Native</td><td>RACE3 <img height='16' img src='usflag.png' alt='RACE3'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AmericanIndianOrAlaskanNative].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>47</td><td>Decedent's Race--Asian Indian</td><td>RACE4 <img height='16' img src='usflag.png' alt='RACE4'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AsianIndian].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>48</td><td>Decedent's Race--Chinese</td><td>RACE5 <img height='16' img src='usflag.png' alt='RACE5'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Chinese].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>49</td><td>Decedent's Race--Filipino</td><td>RACE6 <img height='16' img src='usflag.png' alt='RACE6'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Filipino].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>50</td><td>Decedent's Race--Japanese</td><td>RACE7 <img height='16' img src='usflag.png' alt='RACE7'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Japanese].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>51</td><td>Decedent's Race--Korean</td><td>RACE8 <img height='16' img src='usflag.png' alt='RACE8'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Korean].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>52</td><td>Decedent's Race--Vietnamese</td><td>RACE9 <img height='16' img src='usflag.png' alt='RACE9'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Vietnamese].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>53</td><td>Decedent's Race--Other Asian</td><td>RACE10 <img height='16' img src='usflag.png' alt='RACE10'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherAsian].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>54</td><td>Decedent's Race--Native Hawaiian</td><td>RACE11 <img height='16' img src='usflag.png' alt='RACE11'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[NativeHawaiian].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>55</td><td>Decedent's Race--Guamanian or Chamorro</td><td>RACE12 <img height='16' img src='usflag.png' alt='RACE12'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[GuamanianOrChamorro].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>56</td><td>Decedent's Race--Samoan</td><td>RACE13 <img height='16' img src='usflag.png' alt='RACE13'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Samoan].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>57</td><td>Decedent's Race--Other Pacific Islander</td><td>RACE14 <img height='16' img src='usflag.png' alt='RACE14'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherPacificIslander].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>58</td><td>Decedent's Race--Other</td><td>RACE15 <img height='16' img src='usflag.png' alt='RACE15'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherRace].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>59</td><td>Decedent's Race--First American Indian or Alaska Native Literal</td><td>RACE16 <img height='16' img src='usflag.png' alt='RACE16'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[FirstAmericanIndianOrAlaskanNativeLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>60</td><td>Decedent's Race--Second American Indian or Alaska Native Literal</td><td>RACE17 <img height='16' img src='usflag.png' alt='RACE17'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[SecondAmericanIndianOrAlaskanNativeLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>61</td><td>Decedent's Race--First Other Asian Literal</td><td>RACE18 <img height='16' img src='usflag.png' alt='RACE18'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[FirstOtherAsianLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>62</td><td>Decedent's Race--Second Other Asian Literal</td><td>RACE19 <img height='16' img src='usflag.png' alt='RACE19'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[SecondOtherAsianLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>63</td><td>Decedent's Race--First Other Pacific Islander Literal</td><td>RACE20 <img height='16' img src='usflag.png' alt='RACE20'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[FirstOtherPacificIslanderLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>64</td><td>Decedent's Race--Second Other Pacific Islander Literal</td><td>RACE21 <img height='16' img src='usflag.png' alt='RACE21'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[SecondOtherPacificIslanderLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>65</td><td>Decedent's Race--First Other Literal</td><td>RACE22 <img height='16' img src='usflag.png' alt='RACE22'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[FirstOtherRaceLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>66</td><td>Decedent's Race--Second Other Literal</td><td>RACE23 <img height='16' img src='usflag.png' alt='RACE23'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[SecondOtherRaceLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>83</td><td>Decedent's Race--Missing</td><td>RACE_MVR</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[MissingValueReason].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-missing-value-reason-vr.html'>ValueSetRaceMissingValueReasonVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>123</td><td>Surgery Date--month</td><td>SUR_MO</td><td><a href='StructureDefinition-vrdr-surgery-date.html'>SurgeryDate</a></td><td>value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>124</td><td>Surgery Date--day</td><td>SUR_DY</td><td><a href='StructureDefinition-vrdr-surgery-date.html'>SurgeryDate</a></td><td>value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>125</td><td>Surgery Date--year</td><td>SUR_YR</td><td><a href='StructureDefinition-vrdr-surgery-date.html'>SurgeryDate</a></td><td>value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>111</td><td>Did Tobacco Use Contribute to Death?</td><td>TOBAC <img height='16' img src='usflag.png' alt='TOBAC'/></td><td><a href='StructureDefinition-vrdr-tobacco-use-contributed-to-death.html'>TobaccoUseContributedToDeath</a></td><td>value</td><td>codeable</td><td><a href='ValueSet-vrdr-contributory-tobacco-use-vs.html'>ContributoryTobaccoUseVS</a></td></tr>
</tbody>
</table>
### Coded Content (Cause of Death)

These fields are included in the coded cause of death content sent by NCHS to VROs (including input, or non-coded, content). In total, these are equivalent to the Transax (TRX) content. Although not mapped to IJE, the death record identifier (YYYYJJNNNNNN) also includes death year and death state.

*Coded content is generated by NCHS and sent to VROs, and may be shared among VROs.

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 4%;'><b>#</b></td>
<td style='background-color:#98c1d9; width: 16%;'><b>Description</b></td>
<td style='background-color:#98c1d9; width: 13%;'><b>IJE Name*</b></td>
<td style='background-color:#98c1d9; width: 27%;'><b>Profile</b></td>
<td style='background-color:#98c1d9;'><b>Field</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 7%;'><b>Type</b></td>
<td style='background-color:#98c1d9; width: 14%;'><b>Value Set/Comments</b></td>
</tr>
<tr><td style='text-align: center;'>120</td><td>Activity at time of death (computer generated)</td><td>INACT</td><td><a href='StructureDefinition-vrdr-activity-at-time-of-death.html'>ActivityAtTimeOfDeath</a></td><td>value</td><td>codeable</td><td><a href='ValueSet-vrdr-activity-at-time-of-death-vs.html'>ActivityAtTimeOfDeathVS</a></td></tr>
<tr><td style='text-align: center;'>105</td><td>ACME Underlying Cause</td><td>ACME_UC</td><td><a href='StructureDefinition-vrdr-automated-underlying-cause-of-death.html'>AutomatedUnderlyingCauseOfDeath</a></td><td>value</td><td>codeable</td><td><a href='ValueSet-vrdr-icd10-causes-of-death-vs.html'>ICD10CausesOfDeathVS</a></td></tr>
<tr><td style='text-align: center;'>109</td><td>Was Autopsy performed</td><td>AUTOP</td><td><a href='StructureDefinition-vrdr-autopsy-performed-indicator.html'>AutopsyPerformedIndicator</a></td><td>value</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>110</td><td>Were Autopsy Findings Available to Complete the Cause of Death?</td><td>AUTOPF</td><td><a href='StructureDefinition-vrdr-autopsy-performed-indicator.html'>AutopsyPerformedIndicator</a></td><td>component[autopsyResultsAvailable].value</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-not-applicable-vr.html'>ValueSetYesNoUnknownNotApplicableVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>3</td><td>Certificate Number</td><td>FILENO</td><td><a href='StructureDefinition-vrdr-cause-of-death-coded-content-bundle.html'>CauseOfDeathCodedContentBundle</a></td><td>identifier.extension[certificateNumber].value</td><td>string(6)</td><td>-</td></tr>
<tr><td style='text-align: center;'>5 or 121</td><td>Auxiliary State file number</td><td>AUXNO or AUXNO2</td><td><a href='StructureDefinition-vrdr-cause-of-death-coded-content-bundle.html'>CauseOfDeathCodedContentBundle</a></td><td>identifier.extension[auxiliaryStateIdentifier1].value</td><td>string(12)</td><td>When the Jurisdiction provides AUXNO2, it will be stored in this field.  If the Jurisdiction only provides AUXNO, that value will be stored in this field</td></tr>
<tr><td style='text-align: center;'>122</td><td>State Specific Data</td><td>STATESP</td><td><a href='StructureDefinition-vrdr-cause-of-death-coded-content-bundle.html'>CauseOfDeathCodedContentBundle</a></td><td>identifier.extension[stateSpecificField].value</td><td>string(30)</td><td>-</td></tr>
<tr><td style='text-align: center;'>NA</td><td>Death Record Identifier</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-vrdr-cause-of-death-coded-content-bundle.html'>CauseOfDeathCodedContentBundle</a></td><td>identifier.value</td><td>string(12)</td><td>YYYYJJNNNNNN,  YYYY = death year JJ = jurisdiction  and NNNNNN = certificate number</td></tr>
<tr><td style='text-align: center;'>185</td><td>Cause of Death Part I Line a</td><td>COD1A</td><td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td><td>value.text,   component[lineNumber] = 1</td><td>string(120)</td><td>-</td></tr>
<tr><td style='text-align: center;'>186</td><td>Cause of Death Part I Interval, Line a</td><td>INTERVAL1A</td><td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td><td>component[interval].value, component[lineNumber] = 1</td><td>string(20)</td><td>-</td></tr>
<tr><td style='text-align: center;'>187</td><td>Cause of Death Part I Line b</td><td>COD1B</td><td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td><td>value.text,   component[lineNumber] = 2</td><td>string(120)</td><td>-</td></tr>
<tr><td style='text-align: center;'>188</td><td>Cause of Death Part I Interval, Line b</td><td>INTERVAL1B</td><td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td><td>component[interval].value, component[lineNumber] = 2</td><td>string(20)</td><td>-</td></tr>
<tr><td style='text-align: center;'>189</td><td>Cause of Death Part I Line c</td><td>COD1C</td><td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td><td>value.text,   component[lineNumber] = 3</td><td>string(120)</td><td>-</td></tr>
<tr><td style='text-align: center;'>190</td><td>Cause of Death Part I Interval, Line c</td><td>INTERVAL1C</td><td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td><td>component[interval].value, component[lineNumber] = 3</td><td>string(20)</td><td>-</td></tr>
<tr><td style='text-align: center;'>191</td><td>Cause of Death Part I Line d</td><td>COD1D</td><td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td><td>value.text,   component[lineNumber] = 4</td><td>string(120)</td><td>-</td></tr>
<tr><td style='text-align: center;'>192</td><td>Cause of Death Part I Interval, Line d</td><td>INTERVAL1D</td><td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td><td>component[interval].value, component[lineNumber] = 4</td><td>string(20)</td><td>-</td></tr>
<tr><td style='text-align: center;'>193</td><td>Cause of Death Part II</td><td>OTHERCONDITION</td><td><a href='StructureDefinition-vrdr-cause-of-death-part2.html'>CauseOfDeathPart2</a></td><td>value.text</td><td>string(240)</td><td>-</td></tr>
<tr><td style='text-align: center;'>91</td><td>Receipt date -- Year</td><td>R_YR</td><td><a href='StructureDefinition-vrdr-coding-status-values.html'>CodingStatusValues</a></td><td>parameter[receiptDate].value</td><td>date</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>92</td><td>Receipt date -- Month</td><td>R_MO</td><td><a href='StructureDefinition-vrdr-coding-status-values.html'>CodingStatusValues</a></td><td>parameter[receiptDate].value</td><td>date</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>93</td><td>Receipt date -- Day</td><td>R_DY</td><td><a href='StructureDefinition-vrdr-coding-status-values.html'>CodingStatusValues</a></td><td>parameter[receiptDate].value</td><td>date</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>101</td><td>Intentional Reject</td><td>INT_REJ</td><td><a href='StructureDefinition-vrdr-coding-status-values.html'>CodingStatusValues</a></td><td>parameter[intentionalReject].value</td><td>codeable</td><td><a href='ValueSet-vrdr-intentional-reject-vs.html'>IntentionalRejectVS</a></td></tr>
<tr><td style='text-align: center;'>102</td><td>Acme System Reject Codes</td><td>SYS_REJ</td><td><a href='StructureDefinition-vrdr-coding-status-values.html'>CodingStatusValues</a></td><td>parameter[acmeSystemReject].value</td><td>codeable</td><td>[ACMESystemRejectVS]</td></tr>
<tr><td style='text-align: center;'>107</td><td>Transax conversion flag: Computer Generated</td><td>TRX_FLG</td><td><a href='StructureDefinition-vrdr-coding-status-values.html'>CodingStatusValues</a></td><td>parameter[transaxConversion].value</td><td>codeable</td><td><a href='ValueSet-vrdr-transax-conversion-vs.html'>TransaxConversionVS</a></td></tr>
<tr><td style='text-align: center;'>NA</td><td>coder status</td><td>CS (TRX Field, no IJE Mapping)</td><td><a href='StructureDefinition-vrdr-coding-status-values.html'>CodingStatusValues</a></td><td>parameter[coderStatus].value</td><td>integer</td><td>-</td></tr>
<tr><td style='text-align: center;'>NA</td><td>shipment number</td><td>SHIP (TRX Field, no IJE Mapping)</td><td><a href='StructureDefinition-vrdr-coding-status-values.html'>CodingStatusValues</a></td><td>parameter[shipmentNumber].value</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>119</td><td>Title of Certifier</td><td>CERTL</td><td><a href='StructureDefinition-vrdr-death-certification.html'>DeathCertification</a></td><td>performer.function (note that if value is "OTH" then performed.function.text should contain 'Full Text for Other Individual Legally Allowed to Certify')</td><td>codeable</td><td><a href='ValueSet-vrdr-certifier-types-vs.html'>CertifierTypesVS</a></td></tr>
<tr><td style='text-align: center;'>235</td><td>Certifier Date Signed</td><td>CERTDATE</td><td><a href='StructureDefinition-vrdr-death-certification.html'>DeathCertification</a></td><td>performed</td><td>dateTime</td><td>-</td></tr>
<tr><td style='text-align: center;'>112</td><td>Pregnancy</td><td>PREG</td><td><a href='StructureDefinition-vrdr-decedent-pregnancy-status.html'>DecedentPregnancyStatus</a></td><td>value</td><td>codeable</td><td><a href='ValueSet-vrdr-death-pregnancy-status-vs.html'>DeathPregnancyStatusVS</a></td></tr>
<tr><td style='text-align: center;'>113</td><td>If Female--Edit Flag: From EDR only</td><td>PREG_BYPASS</td><td><a href='StructureDefinition-vrdr-decedent-pregnancy-status.html'>DecedentPregnancyStatus</a></td><td>value.extension[BypassEditFlag].value</td><td>codeable</td><td><a href='ValueSet-vrdr-edit-bypass-012-vs.html'>EditBypass012VS</a></td></tr>
<tr><td style='text-align: center;'>106</td><td>Entity-axis codes</td><td>EAC</td><td><a href='StructureDefinition-vrdr-entity-axis-cause-of-death.html'>EntityAxisCauseOfDeath</a></td><td>Each entry is a 4-tuple (value, component[position], component[lineNumber], component[e-code-indicator]) </td><td>codeable</td><td><a href='ValueSet-vrdr-icd10-causes-of-death-vs.html'>ICD10CausesOfDeathVS</a></td></tr>
<tr><td style='text-align: center;'>114</td><td>Date of injury--month</td><td>DOI_MO</td><td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td><td>effective.value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>115</td><td>Date of injury--day</td><td>DOI_DY</td><td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td><td>effective.value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>116</td><td>Date of injury--year</td><td>DOI_YR</td><td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td><td>effective.value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>117</td><td>Time of injury</td><td>TOI_HR</td><td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td><td>effective.value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>118</td><td>Injury at work</td><td>WORKINJ</td><td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td><td>component[workInjuryIndicator].value</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-not-applicable-vr.html'>ValueSetYesNoUnknownNotApplicableVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>126</td><td>Time of Injury Unit</td><td>TOI_UNIT</td><td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td><td>effective.value</td><td>implicit</td><td></td></tr>
<tr><td style='text-align: center;'>173</td><td>Place of Injury- literal</td><td>POILITRL</td><td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td><td>component[placeOfInjury].value.text</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>174</td><td>Describe How Injury Occurred</td><td>HOWINJ</td><td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td><td>value.text</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>175</td><td>If Transportation Accident, Specify</td><td>TRANSPRT</td><td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td><td>component[transportationRole].value.  (if value.code = OTH) the role should be specified in value.text)</td><td>codeable</td><td><a href='ValueSet-vrdr-transportation-incident-role-vs.html'>TransportationIncidentRoleVS</a></td></tr>
<tr><td style='text-align: center;'>100</td><td>Manner of Death</td><td>MANNER</td><td><a href='StructureDefinition-vrdr-manner-of-death.html'>MannerOfDeath</a></td><td>value</td><td>codeable</td><td><a href='ValueSet-vrdr-manner-of-death-vs.html'>MannerOfDeathVS</a></td></tr>
<tr><td style='text-align: center;'>104</td><td>Manual Underlying Cause</td><td>MAN_UC</td><td><a href='StructureDefinition-vrdr-manual-underlying-cause-of-death.html'>ManualUnderlyingCauseOfDeath</a></td><td>value</td><td>codeable</td><td><a href='ValueSet-vrdr-icd10-causes-of-death-vs.html'>ICD10CausesOfDeathVS</a></td></tr>
<tr><td style='text-align: center;'>103</td><td>Place of Injury (computer generated)</td><td>INJPL</td><td><a href='StructureDefinition-vrdr-place-of-injury.html'>PlaceOfInjury</a></td><td>value</td><td>codeable</td><td>A code from <a href='ValueSet-vrdr-place-of-injury-vs.html'>PlaceOfInjuryVS</a> is required, an optional code from <a href='ValueSet-vrdr-place-of-injury-other-vs.html'>PlaceOfInjuryOtherVS</a> can also be provided when the primary code is Other.</td></tr>
<tr><td style='text-align: center;'>108</td><td>Record-axis codes</td><td>RAC</td><td><a href='StructureDefinition-vrdr-record-axis-cause-of-death.html'>RecordAxisCauseOfDeath</a></td><td>Each entry is a 3-tuple (value, component[position], component[WouldBeUnderlyingCauseOfDeathWithoutPregnancy])</td><td>codeable</td><td><a href='ValueSet-vrdr-icd10-causes-of-death-vs.html'>ICD10CausesOfDeathVS</a></td></tr>
<tr><td style='text-align: center;'>123</td><td>Surgery Date--month</td><td>SUR_MO</td><td><a href='StructureDefinition-vrdr-surgery-date.html'>SurgeryDate</a></td><td>value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>124</td><td>Surgery Date--day</td><td>SUR_DY</td><td><a href='StructureDefinition-vrdr-surgery-date.html'>SurgeryDate</a></td><td>value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>125</td><td>Surgery Date--year</td><td>SUR_YR</td><td><a href='StructureDefinition-vrdr-surgery-date.html'>SurgeryDate</a></td><td>value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>111</td><td>Did Tobacco Use Contribute to Death?</td><td>TOBAC</td><td><a href='StructureDefinition-vrdr-tobacco-use-contributed-to-death.html'>TobaccoUseContributedToDeath</a></td><td>value</td><td>codeable</td><td><a href='ValueSet-vrdr-contributory-tobacco-use-vs.html'>ContributoryTobaccoUseVS</a></td></tr>
</tbody>
</table>
### Coded Content (Demographic)

These fields are included in the coded demographic content sent by NCHS to VROs (including input, or non-coded, content). In total, these are equivalent to the legacy Mortality, Race and Ethnicity (MRE) content. Although not mapped to IJE, the death record identifier (YYYYJJNNNNNN) also includes death year and death state.

*Coded content is generated by NCHS and sent to VROs, and may be shared among VROs.

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 4%;'><b>#</b></td>
<td style='background-color:#98c1d9; width: 16%;'><b>Description</b></td>
<td style='background-color:#98c1d9; width: 13%;'><b>IJE Name*</b></td>
<td style='background-color:#98c1d9; width: 27%;'><b>Profile</b></td>
<td style='background-color:#98c1d9;'><b>Field</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 7%;'><b>Type</b></td>
<td style='background-color:#98c1d9; width: 14%;'><b>Value Set/Comments</b></td>
</tr>
<tr><td style='text-align: center;'>3</td><td>Certificate Number</td><td>FILENO</td><td><a href='StructureDefinition-vrdr-demographic-coded-content-bundle.html'>DemographicCodedContentBundle</a></td><td>identifier.extension[certificateNumber].value</td><td>string(6)</td><td>-</td></tr>
<tr><td style='text-align: center;'>5</td><td>Auxiliary State file number</td><td>AUXNO</td><td><a href='StructureDefinition-vrdr-demographic-coded-content-bundle.html'>DemographicCodedContentBundle</a></td><td>identifier.extension[auxiliaryStateIdentifier1].value</td><td>string(12)</td><td>-</td></tr>
<tr><td style='text-align: center;'>121</td><td>Auxiliary State file number</td><td>AUXNO2</td><td><a href='StructureDefinition-vrdr-demographic-coded-content-bundle.html'>DemographicCodedContentBundle</a></td><td>identifier.extension[auxiliaryStateIdentifier2].value</td><td>string(12)</td><td>-</td></tr>
<tr><td style='text-align: center;'>NA</td><td>Death Record Identifier</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-vrdr-demographic-coded-content-bundle.html'>DemographicCodedContentBundle</a></td><td>identifier.value</td><td>string(12)</td><td>YYYYJJNNNNNN,  YYYY = death year JJ = jurisdiction  and NNNNNN = certificate number</td></tr>
<tr><td style='text-align: center;'>39</td><td>Decedent of Hispanic Origin?--Mexican</td><td>DETHNIC1</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicMexican].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>40</td><td>Decedent of Hispanic Origin?--Puerto Rican</td><td>DETHNIC2</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicPuertoRican].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>41</td><td>Decedent of Hispanic Origin?--Cuban</td><td>DETHNIC3</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicCuban].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>42</td><td>Decedent of Hispanic Origin?--Other</td><td>DETHNIC4</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicOther].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>43</td><td>Decedent of Hispanic Origin?--Other, Literal</td><td>DETHNIC5</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>44</td><td>Decedent's Race--White</td><td>RACE1</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[White].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>45</td><td>Decedent's Race--Black or African American</td><td>RACE2</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[BlackOrAfricanAmerican].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>46</td><td>Decedent's Race--American Indian or Alaska Native</td><td>RACE3</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AmericanIndianOrAlaskanNative].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>47</td><td>Decedent's Race--Asian Indian</td><td>RACE4</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AsianIndian].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>48</td><td>Decedent's Race--Chinese</td><td>RACE5</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Chinese].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>49</td><td>Decedent's Race--Filipino</td><td>RACE6</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Filipino].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>50</td><td>Decedent's Race--Japanese</td><td>RACE7</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Japanese].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>51</td><td>Decedent's Race--Korean</td><td>RACE8</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Korean].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>52</td><td>Decedent's Race--Vietnamese</td><td>RACE9</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Vietnamese].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>53</td><td>Decedent's Race--Other Asian</td><td>RACE10</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherAsian].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>54</td><td>Decedent's Race--Native Hawaiian</td><td>RACE11</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[NativeHawaiian].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>55</td><td>Decedent's Race--Guamanian or Chamorro</td><td>RACE12</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[GuamanianOrChamorro].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>56</td><td>Decedent's Race--Samoan</td><td>RACE13</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Samoan].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>57</td><td>Decedent's Race--Other Pacific Islander</td><td>RACE14</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherPacificIslander].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>58</td><td>Decedent's Race--Other</td><td>RACE15</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherRace].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>boolean</td><td>-</td></tr>
<tr><td style='text-align: center;'>59</td><td>Decedent's Race--First American Indian or Alaska Native Literal</td><td>RACE16</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[FirstAmericanIndianOrAlaskanNativeLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>60</td><td>Decedent's Race--Second American Indian or Alaska Native Literal</td><td>RACE17</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[SecondAmericanIndianOrAlaskanNativeLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>61</td><td>Decedent's Race--First Other Asian Literal</td><td>RACE18</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[FirstOtherAsianLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>62</td><td>Decedent's Race--Second Other Asian Literal</td><td>RACE19</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[SecondOtherAsianLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>63</td><td>Decedent's Race--First Other Pacific Islander Literal</td><td>RACE20</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[FirstOtherPacificIslanderLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>64</td><td>Decedent's Race--Second Other Pacific Islander Literal</td><td>RACE21</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[SecondOtherPacificIslanderLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>65</td><td>Decedent's Race--First Other Literal</td><td>RACE22</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[FirstOtherRaceLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>66</td><td>Decedent's Race--Second Other Literal</td><td>RACE23</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[SecondOtherRaceLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>83</td><td>Decedent's Race--Missing</td><td>RACE_MVR</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[MissingValueReason].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-missing-value-reason-vr.html'>ValueSetRaceMissingValueReasonVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>67</td><td>First Edited Code</td><td>RACE1E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FirstEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>68</td><td>Second Edited Code</td><td>RACE2E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SecondEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>69</td><td>Third Edited Code</td><td>RACE3E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[ThirdEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>70</td><td>Fourth Edited Code</td><td>RACE4E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FourthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>71</td><td>Fifth Edited Code</td><td>RACE5E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FifthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>72</td><td>Sixth Edited Code</td><td>RACE6E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SixthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>73</td><td>Seventh Edited Code</td><td>RACE7E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SeventhEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>74</td><td>Eighth Edited Code</td><td>RACE8E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[EighthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>75</td><td>First American Indian Code</td><td>RACE16C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FirstAmericanIndianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>76</td><td>Second American Indian Code</td><td>RACE17C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SecondAmericanIndianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>77</td><td>First Other Asian Code</td><td>RACE18C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FirstOtherAsianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>78</td><td>Second Other Asian Code</td><td>RACE19C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SecondOtherAsianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>79</td><td>First Other Pacific Islander Code</td><td>RACE20C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FirstOtherPacificIslanderCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>80</td><td>Second Other Pacific Islander Code</td><td>RACE21C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SecondOtherPacificIslanderCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>81</td><td>First Other Race Code</td><td>RACE22C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FirstOtherRaceCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>82</td><td>Second Other Race Code</td><td>RACE23C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SecondOtherRaceCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>160</td><td>Hispanic</td><td>DETHNICE</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[HispanicCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-hispanic-origin-vr.html'>ValueSetHispanicOriginVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>247</td><td>Hispanic Code for Literal</td><td>DETHNIC5C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[HispanicCodeForLiteral].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-hispanic-origin-vr.html'>ValueSetHispanicOriginVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>NA</td><td>Race Recode 40  (No longer provided as of 2022)</td><td>*NO IJE MAPPING*</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-recode-40-vr.html'>ValueSetRaceRecode40VitalRecords</a>.value</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-recode-40-vr.html'>ValueSetRaceRecode40VitalRecords</a></td></tr>
</tbody>
</table>
### Coded Content (Usual Work)

These fields are included in the coded industry and occupation content that is produced by the National Institute of Occupational Safety and Health (NIOSH) and delivered to VROs via NCHS (including input, or non-coded, content).

*Coded content is generated by NCHS and sent to VROs, and may be shared among VROs.

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 4%;'><b>#</b></td>
<td style='background-color:#98c1d9; width: 16%;'><b>Description</b></td>
<td style='background-color:#98c1d9; width: 13%;'><b>IJE Name*</b></td>
<td style='background-color:#98c1d9; width: 27%;'><b>Profile</b></td>
<td style='background-color:#98c1d9;'><b>Field</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 7%;'><b>Type</b></td>
<td style='background-color:#98c1d9; width: 14%;'><b>Value Set/Comments</b></td>
</tr>
<tr><td style='text-align: center;'>3</td><td>Certificate Number</td><td>FILENO</td><td><a href='StructureDefinition-industry-occupation-coded-content-bundle.html'>IndustryOccupationCodedContentBundle</a></td><td>identifier.extension[certificateNumber].value</td><td>string(6)</td><td>-</td></tr>
<tr><td style='text-align: center;'>5</td><td>Auxiliary State file number</td><td>AUXNO</td><td><a href='StructureDefinition-industry-occupation-coded-content-bundle.html'>IndustryOccupationCodedContentBundle</a></td><td>identifier.extension[auxiliaryStateIdentifier1].value</td><td>string(12)</td><td>-</td></tr>
<tr><td style='text-align: center;'>121</td><td>Auxiliary State file number</td><td>AUXNO2</td><td><a href='StructureDefinition-industry-occupation-coded-content-bundle.html'>IndustryOccupationCodedContentBundle</a></td><td>identifier.extension[auxiliaryStateIdentifier2].value</td><td>string(12)</td><td>-</td></tr>
<tr><td style='text-align: center;'>NA</td><td>Death Record Identifier</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-industry-occupation-coded-content-bundle.html'>IndustryOccupationCodedContentBundle</a></td><td>identifier.value</td><td>string(12)</td><td>YYYYJJNNNNNN,  YYYY = death year JJ = jurisdiction  and NNNNNN = certificate number</td></tr>
<tr><td style='text-align: center;'>84</td><td>Occupation -- Literal</td><td>OCCUP</td><td><a href='StructureDefinition-vrdr-decedent-usual-work.html'>DecedentUsualWork</a></td><td>value.text</td><td>string(40)</td><td>-</td></tr>
<tr><td style='text-align: center;'>86</td><td>Industry -- Literal</td><td>INDUST</td><td><a href='StructureDefinition-vrdr-decedent-usual-work.html'>DecedentUsualWork</a></td><td>component [odh-UsualIndustry	].value.text</td><td>string(40)</td><td>-</td></tr>
<tr><td style='text-align: center;'>94</td><td>Occupation -- 4 digit Code</td><td>OCCUPC4</td><td><a href='StructureDefinition-vrdr-decedent-usual-work.html'>DecedentUsualWork</a></td><td>valueCodeableConcept.coding[occupationCDCCensus2018]</td><td>codeable</td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8065'>PHVS_Occupation_CDC_Census2018VS</a></td></tr>
<tr><td style='text-align: center;'>94</td><td>Occupation -- 2018 Standard Occupational Classification (SOC)</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-vrdr-decedent-usual-work.html'>DecedentUsualWork</a></td><td>valueCodeableConcept.coding[occupationCDCSOC2018]</td><td>codeable</td><td><a href='http://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8068'>PHVS_Occupation_CDC_SOC2018</a></td></tr>
<tr><td style='text-align: center;'>95</td><td>Industry -- 4 digit Code</td><td>INDUSTC4</td><td><a href='StructureDefinition-vrdr-decedent-usual-work.html'>DecedentUsualWork</a></td><td>component[odh-UsualIndustry].valueCodeableConcept.coding[industryCDCCensus2018]</td><td>codeable</td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8066'>PHVS_Industry_CDC_Census2018VS</a></td></tr>
<tr><td style='text-align: center;'>95</td><td>Industry -- North American Industry Classification System (NAICS)</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-vrdr-decedent-usual-work.html'>DecedentUsualWork</a></td><td>component[odh-UsualIndustry].valueCodeableConcept.coding[industryCDCNAICS2017]</td><td>codeable</td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8067'>PHVS_Industry_CDC_NAICS2017</a></td></tr>
</tbody>
</table>
### Not Implemented Content

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 4%;'><b>#</b></td>
<td style='background-color:#98c1d9; width: 16%;'><b>Description</b></td>
<td style='background-color:#98c1d9; width: 8%;'><b>IJE Name*</b></td>
<td style='background-color:#98c1d9; width: 14%;'><b>Value Set/Comments</b></td>
</tr>
<tr><td style='text-align: center;'>4</td><td>Void flag</td><td>VOID</td><td>The NCHS Vital Records FHIR Messaging Implementation Guide is used to indicate that a record should be voided.</td></tr>
<tr><td style='text-align: center;'>11</td><td>Alias Record Flag</td><td>ALIAS</td><td>The NCHS Vital Records FHIR Messaging Implementation Guide is used to indicate that a record is an alias.</td></tr>
<tr><td style='text-align: center;'>14</td><td>Sex--Edit Flag</td><td>SEX_BYPASS</td><td>-</td></tr>
<tr><td style='text-align: center;'>85</td><td>Occupation -- Code</td><td>OCCUPC</td><td>-</td></tr>
<tr><td style='text-align: center;'>87</td><td>Industry -- Code</td><td>INDUSTC</td><td>-</td></tr>
<tr><td style='text-align: center;'>99</td><td>FILLER 2 for expansion</td><td></td><td>-</td></tr>
<tr><td style='text-align: center;'>127</td><td>For possible future change in transax</td><td>BLANK1</td><td>-</td></tr>
<tr><td style='text-align: center;'>158</td><td>Old NCHS residence state code</td><td>RESSTATE</td><td>-</td></tr>
<tr><td style='text-align: center;'>159</td><td>Old NCHS residence city/county combo code</td><td>RESCON</td><td>-</td></tr>
<tr><td style='text-align: center;'>161</td><td>Bridged Race</td><td>NCHSBRIDGE</td><td>-</td></tr>
<tr><td style='text-align: center;'>162</td><td>Hispanic - old NCHS single ethnicity codes</td><td>HISPOLDC</td><td>-</td></tr>
<tr><td style='text-align: center;'>163</td><td>Race - old NCHS single race codes</td><td>RACEOLDC</td><td>-</td></tr>
<tr><td style='text-align: center;'>164</td><td>Hispanic Origin - Specify</td><td>HISPSTSP</td><td>-</td></tr>
<tr><td style='text-align: center;'>165</td><td>Race - Specify</td><td>RACESTSP</td><td>-</td></tr>
<tr><td style='text-align: center;'>183</td><td>Old NCHS education code if collected - receiving state will recode as they prefer</td><td>OLDEDUC</td><td>-</td></tr>
<tr><td style='text-align: center;'>236</td><td>Date Filed</td><td>FILEDATE</td><td>-</td></tr>
<tr><td style='text-align: center;'>241</td><td>SSA State Source of Death</td><td>SSADTHCODE</td><td>-</td></tr>
<tr><td style='text-align: center;'>242</td><td>SSA Foreign Country Indicator</td><td>SSAFOREIGN</td><td>-</td></tr>
<tr><td style='text-align: center;'>243</td><td>SSA EDR Verify Code</td><td>SSAVERIFY</td><td>-</td></tr>
<tr><td style='text-align: center;'>244</td><td>SSA Date of SSN Verification</td><td>SSADATEVER</td><td>-</td></tr>
<tr><td style='text-align: center;'>245</td><td>SSA Date of State Transmission</td><td>SSADATETRANS</td><td>-</td></tr>
<tr><td style='text-align: center;'>258</td><td>Blank for future expansion</td><td>BLANK2</td><td>-</td></tr>
<tr><td style='text-align: center;'>259</td><td>Blank for Jurisdictional Use Only</td><td>BLANK3</td><td>-</td></tr>
</tbody>
</table>


---

// File: input/pagecontent/downloads.md

### Download

You can also download:

* [this entire guide](full-ig.zip)
* the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
* the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on IHE GitHub [https://github.com/HL7/vrdr](https://github.com/HL7/vrdr).

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}

---

// File: input/pagecontent/index.md


### Overview

The VRDR FHIR IG specifies the the use of FHIR resources for the bidirectional exchange of mortality data between Jurisdictional Vital Records Offices (JVRO), and between JVROs and the U.S. Centers for Disease Control and Prevention (CDC)/National Center for Health Statistics (NCHS).  Jurisdictional Vital Records Offices (JVROs) submit vital records data (deaths, births, and fetal deaths) to NCHS under the terms bilateral contracts under the  Vital Statistics Cooperative Program  ([VSCP](https://www.ncbi.nlm.nih.gov/books/NBK219877/pdf/Bookshelf_NBK219877.pdf)).
The focus of this IG is the specification of data elements, not exchange mechanisms. The exchanged data entities are intended to be bundles representing death records and associated coded content.

Bidirectional exchange of mortality data between JVRO and NCHS is essential to support effective public health surveillance and emergency response efforts. Modernization of the reporting process should improve the timelineness of resporting and accuracy, and reduce costs. 

The VRDR FHIR IG lays the foundation for expansion of automated standards-driven information exchange to include tributary flows of information from entities such as physicians, medical examiners, coroners, funeral directors, and family members to JVROs and between JVROs and secondary users of detailed mortality data and aggregate statistics.

This FHIR implementation guide is the primary work product of [project #1475](https://bit.ly/34DRIoA) "Vital Records Mortality and Morbidity Reporting FHIR IG" sponsored by the Health Level Seven (HL7) Public Health Work Group (PHWG).   This guide and related materials are based on reporting specifications in U.S. jurisdictions. The data content of this IG are based upon the [U.S. Standard Certificate of Death](https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf), and the associated [edit specification](https://www.cdc.gov/nchs/data/dvs/death_edit_specifications.pdf) for submission of death records to NCHS. 

### Development History
The [STU2.2 version of this IG](https://hl7.org/fhir/us/vrdr/STU2.2/) published in 2023 served as the basis for production submission of death records by jurisdictions to NCHS.  

The primary change in the STU3 version of this IG is the refactoring of content driven by the [harmonization of vital records FHIR Implementation Guides]({{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/vr_ig_harmonization.html).  This introduces a dependency on the [Vital Records Common Library FHIR IG]({{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}) and loosening some unnecessary constraints so that VRDR resources can be reused within the [Medicolegal Death Investigation STU2 FHIR IG](https://hl7.org/fhir/us/mdi/2.0.0-snapshot1/) that is under development. This STU3 version also includes improved documentation, support for linkages from maternal death records to associated fetal death or birth records, and support for exchange of coded industry and occupation data. 

See the [change log](change_log.html) for an updated list of changes.


### Authors

<table>
<thead>
<tr>
<th>Name</th>
<th>Email/URL</th>
</tr>
</thead>
<tbody>
<tr>
<td>HL7 International - Public Health</td>
<td><a href="http://www.hl7.org/Special/committees/pher" target="_new">http://www.hl7.org/Special/committees/pher</a></td>
</tr>
<tr>
<td>Cynthia Bush, Health Scientist (Informatics), CDC/National Center for Health Statistics</td>
<td><a href="mailto:pdz1@cdc.gov">pdz1@cdc.gov</a></td>
</tr>
<tr>
<td>Saul A. Kravitz, MITRE Corporation</td>
<td><a href="mailto:saul@mitre.org">saul@mitre.org</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/MortalityRosterDataDictionary.md

The following table illustrates the mappings of fields in the Interjurisdictional Exchange (IJE) formats for mortality to profiles and fields within this FHIR Implementation guide. This information is provided to guide implementers who are transitioning from the familiar IJE to the new FHIR format for this information.

Note that string fields in FHIR-formatted data will often be subject to the same string length limitations of the IJE format for the same content.
For example, name fields in IJE (e.g., DINSTI, GNAME) are restricted to 50 characters. Including strings longer than the IJE strength length limitations may lead to data truncation and/or business rule violations when data is sent to certain receivers, including NCHS. The IG includes maximum length restrictions on FHIR strings for some fields, and the FHIR validator will flag violations of these conformance restrictions. The IG does not impose maximum length restrictions for general FHIR fields like names and addresses since this seemed an unnatural constraint of widely used FHIR resources.

<style>
    table.style1 { 
        border-collapse: collapse; 
        width: 100%; 
        table-layout: fixed;
    }  
    table.style1 tbody tr {
    border-bottom: 1px solid #dddddd;
    } 
    table.style1 tbody tr:nth-of-type(even) { 
        background-color: #f3f3f3; 
    } 
    table.style1 tbody tr:last-of-type {
    border-bottom: 2px solid #98c1d9;
    }
    </style>
### Mortality Roster IJE Mapping

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 4%;'><b>#</b></td>
<td style='background-color:#98c1d9; width: 16%;'><b>Description</b></td>
<td style='background-color:#98c1d9; width: 13%;'><b>IJE Name*</b></td>
<td style='background-color:#98c1d9; width: 27%;'><b>Profile</b></td>
<td style='background-color:#98c1d9;'><b>Field</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 7%;'><b>Type</b></td>
<td style='background-color:#98c1d9; width: 14%;'><b>Value Set/Comments</b></td>
</tr>
<tr><td style='text-align: center;'>8</td><td>Date of Death--Month</td><td>DOD_MO</td><td><a href='StructureDefinition-vrdr-death-date.html'>DeathDate</a></td><td>value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>9</td><td>Date of Death--Day</td><td>DOD_DY</td><td><a href='StructureDefinition-vrdr-death-date.html'>DeathDate</a></td><td>value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>10</td><td>Date of Death--Year</td><td>DOD_YR</td><td><a href='StructureDefinition-vrdr-death-date.html'>DeathDate</a></td><td>value</td><td>dateTime</td><td>Required for processing</td></tr>
<tr><td style='text-align: center;'>6</td><td>State, U.S. Territory or Canadian Province of Death - literal</td><td>STATETEXT_D</td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>address.state (expanded from 2 letter code)</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>7</td><td>State, U.S. Territory or Canadian Province of Death - code</td><td>DSTATE</td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>address.state or address.state.extension[nationalReportingJurisdictionId]</td><td>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a> or <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-jurisdiction-vr.html'>ValueSetJurisdictionVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>30</td><td>Death Country - Code</td><td>DCOUNTRYC</td><td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td><td>address.country</td><td>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-residence-country-vr.html'>ValueSetResidenceCountryVitalRecords</a>.  Note: For US Death certificates should be US.</td></tr>
<tr><td style='text-align: center;'>1</td><td>State, U.S. Territory or Canadian Province of Birth - literal</td><td>STATEBTH</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>extension[patient-birthPlace].value[x].state or extension[patient-birthPlace].value[x].state.extension[nationalReportingJurisdictionId] if present    (expanded from 2 letter code)</td><td>string</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td></tr>
<tr><td style='text-align: center;'>2</td><td>State, U.S. Territory or Canadian Province of Birth - code</td><td>BPLACE_ST</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>extension[patient-birthPlace].value[x].state or extension[patient-birthPlace].value[x].state.extension[nationalReportingJurisdictionId] if present</td><td>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-jurisdiction-vr.html'>ValueSetJurisdictionVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>3</td><td>Decedent's Legal Name--Given</td><td>GNAME</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>name.given , name.use = official</td><td>string</td><td>See <a href='usage.html#decedent-name'>Note on Decedent Name</a></td></tr>
<tr><td style='text-align: center;'>4</td><td>Decedent's Legal Name--Middle</td><td>MIDNAME</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>name.given , name.use = official (first letter)</td><td>string</td><td>See <a href='usage.html#decedent-name'>Note on Decedent Name</a></td></tr>
<tr><td style='text-align: center;'>5</td><td>Decedent's Legal Name--Last</td><td>LNAME</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>name.family , name.use = official</td><td>string</td><td>See <a href='usage.html#decedent-name'>Note on Decedent Name</a></td></tr>
<tr><td style='text-align: center;'>11</td><td>Date of Birth--Month</td><td>DOB_MO</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>birthDate.value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>12</td><td>Date of Birth--Day</td><td>DOB_DY</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>birthDate.value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>13</td><td>Date of Birth--Year</td><td>DOB_YR</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>birthDate.value</td><td>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>14</td><td>Sex</td><td>SEX</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>extension[NVSS-SexAtDeath]</td><td>codeable</td><td><a href='ValueSet-vrdr-administrative-gender-vs.html'>AdministrativeGenderVS</a></td></tr>
<tr><td style='text-align: center;'>NA</td><td>Gender</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>gender</td><td>codeable</td><td><a href='ValueSet-vrdr-administrative-gender-vs.html'>AdministrativeGenderVS</a> - See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#gender'>Note on Gender</a></td></tr>
<tr><td style='text-align: center;'>22</td><td>Decedent's Suffix</td><td>SUFF</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>name.suffix , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>26</td><td>Decedent's Maiden Name</td><td>DMAIDEN</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>name.text , name.use = maiden</td><td>string</td><td></td></tr>
<tr><td style='text-align: center;'>27</td><td>State, U.S. Territory or Canadian Province of Decedent's Residence - literal</td><td>STATETEXT_R</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.state (expanded from 2 letter code)</td><td>string</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td></tr>
<tr><td style='text-align: center;'>28</td><td>State, U.S. Territory or Canadian Province of Decedent's Residence - code</td><td>STATEC</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.state</td><td>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>29</td><td>Birthplace Country - Code</td><td>BPLACE_CT</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>extension[patient-birthPlace].value[x].country</td><td>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-birthplace-country-vr.html'>ValueSetBirthplaceCountryVitalRecords</a>.</td></tr>
<tr><td style='text-align: center;'>31</td><td>Decedent's Residence Country - Code</td><td>COUNTRYC</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>address.country</td><td>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-residence-country-vr.html'>ValueSetResidenceCountryVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>32</td><td>Decedent's SSN (may be used by some jurisdictions when allowed by law, to match with the SSN contained with the birth record)</td><td>SSN</td><td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td><td>identifier.value where system = 'http://hl7.org/fhir/sid/us-ssn and type.coding.code="SS"</td><td>string</td><td>type.coding.code="SB" is deprecated but also supported for compatibility</td></tr>
<tr><td style='text-align: center;'>16</td><td>Father's First Name</td><td>DADFNAME</td><td><a href='StructureDefinition-vrdr-decedent-father.html'>DecedentFather</a></td><td>name.given , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>17</td><td>Father's Middle Name</td><td>DADMIDNAME</td><td><a href='StructureDefinition-vrdr-decedent-father.html'>DecedentFather</a></td><td>name.given , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>18</td><td>Father's Surname</td><td>DADLNAME</td><td><a href='StructureDefinition-vrdr-decedent-father.html'>DecedentFather</a></td><td>name.family</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>23</td><td>Father's Suffix</td><td>DADSUFF</td><td><a href='StructureDefinition-vrdr-decedent-father.html'>DecedentFather</a></td><td>name.suffix , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>19</td><td>Mother's Given Name</td><td>MOMGNAME</td><td><a href='StructureDefinition-vrdr-decedent-mother.html'>DecedentMother</a></td><td>name.given , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>20</td><td>Mother's Middle Name</td><td>MOMMIDNAME</td><td><a href='StructureDefinition-vrdr-decedent-mother.html'>DecedentMother</a></td><td>name.given , name.use = official</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>21</td><td>Mother's Maiden Surname</td><td>MOMMAIDNAME</td><td><a href='StructureDefinition-vrdr-decedent-mother.html'>DecedentMother</a></td><td>name.family , name.use = maiden</td><td>string</td><td>-</td></tr>
<tr><td style='text-align: center;'>24</td><td>Mother's Suffix</td><td>MOMSUFF</td><td><a href='StructureDefinition-vrdr-decedent-mother.html'>DecedentMother</a></td><td>name.suffix , name.use = official</td><td>string</td><td>-</td></tr>
</tbody>
</table>
### Not Implemented Content

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 4%;'><b>#</b></td>
<td style='background-color:#98c1d9; width: 16%;'><b>Description</b></td>
<td style='background-color:#98c1d9; width: 8%;'><b>IJE Name*</b></td>
<td style='background-color:#98c1d9; width: 14%;'><b>Value Set/Comments</b></td>
</tr>
<tr><td style='text-align: center;'>25</td><td>Filler</td><td>BLANK1</td><td></td></tr>
<tr><td style='text-align: center;'>35</td><td>Blank for Future Expansion</td><td>BLANK2</td><td></td></tr>
</tbody>
</table>


---

// File: input/pagecontent/Practitioner-Certifier-Example2-no-NPI-intro.md

This example shows how to provide an instance of a Practitioner resource, in this case a death certifier, that is fully conformant
with both VRDR and USCore, even though the NPI of the practitioner is not available.   


---

// File: input/pagecontent/scope_of_the_vrdr_fhir_ig.md

### Scope
The scope of this VRDR FHIR IG is the reporting of incidents of death by State Registrars to the NCHS. The data content of this dataflow contains an aggregation of data collected in preceding dataflows and used in additional dataflows related to the secondary use of death information such as clinical research, law enforcement, and health policy determination.

<center>
<table><tr><td><img src="Scope.png" style="width:100%;"/></td></tr></table>
</center>

While the scope of this IG is limited to death reporting by State Registrars to the NCHS, the FHIR Resource Profiles have been designed with the intent of being reusable in related preceding and antecedent dataflows.

### Relationship with other Implementation Guides
* [NCHS Vital Records FHIR Messaging Implementation Guide](https://build.fhir.org/ig/nightingaleproject/vital_records_fhir_messaging_ig/branches/main/index.html):   The VRDR IG specifies the content of messages sent between JVROs and NCHS.  This associated IG specifies the messaging envelopes used for actual exchange of the content.
* [HL7 MDI Implementation Guide](https://build.fhir.org/ig/HL7/fhir-mdi-ig/):  The Medico-Legal Death Investigation (MDI) IG specifies FHIR content for the closely related MDI activity.  The MDI STU2 has been refactored to depend on both VRDR and the [Vital Records Common Library IG] as part of the [harmonization of vital records FHIR Implementation Guides]({{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/vr_ig_harmonization.html).

{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-industry-occupation-coded-content-bundle-intro.md

### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>3</td>
  <td>Certificate Number</td>
  <td>FILENO</td>
  <td>identifier.extension[certificateNumber].value</td>
  <td>string(6)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>5</td>
  <td>Auxiliary State file number</td>
  <td>AUXNO</td>
  <td>identifier.extension[auxiliaryStateIdentifier1].value</td>
  <td>string(12)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>121</td>
  <td>Auxiliary State file number</td>
  <td>AUXNO2</td>
  <td>identifier.extension[auxiliaryStateIdentifier2].value</td>
  <td>string(12)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>NA</td>
  <td>Death Record Identifier</td>
  <td>*NO IJE MAPPING*</td>
  <td>identifier.value</td>
  <td>string(12)</td>
  <td>YYYYJJNNNNNN,  YYYY = death year JJ = jurisdiction  and NNNNNN = certificate number</td>
</tr>

</tbody>
</table>

</details>
<p></p>



---

// File: input/pagecontent/StructureDefinition-vrdr-activity-at-time-of-death-intro.md

### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>120</td>
  <td>Activity at time of death (computer generated)</td>
  <td>INACT</td>
  <td>value</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-activity-at-time-of-death-vs.html'>ActivityAtTimeOfDeathVS</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>



---

// File: input/pagecontent/StructureDefinition-vrdr-automated-underlying-cause-of-death-intro.md

### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>105</td>
  <td>ACME Underlying Cause</td>
  <td>ACME_UC</td>
  <td>value</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-icd10-causes-of-death-vs.html'>ICD10CausesOfDeathVS</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>



---

// File: input/pagecontent/StructureDefinition-vrdr-autopsy-performed-indicator-intro.md

The Autopsy Performed Indicator profile captures the following values:

### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>109</td>
  <td>Was Autopsy performed</td>
  <td>AUTOP</td>
  <td>value</td>
  <td>codeable</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>110</td>
  <td>Were Autopsy Findings Available to Complete the Cause of Death?</td>
  <td>AUTOPF</td>
  <td>component[autopsyResultsAvailable].value</td>
  <td>codeable</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-not-applicable-vr.html'>ValueSetYesNoUnknownNotApplicableVitalRecords</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>


### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>33</td>
  <td>Was an Autopsy Performed?</td>
  <td>value</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>34</td>
  <td>Were Autopsy Findings Available to Complete the Cause of Death?</td>
  <td>component[autopsyResultsAvailable].value</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-birth-record-identifier-intro.md

The BirthRecordIdentifier captures the key identifiers for the Decedent's birth record. It is relevant only in the case where the birth took place in a recognized jurisdiction.
### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>88</td>
  <td>Infant Death/Birth Linking - birth certificate number</td>
  <td>BCNO</td>
  <td>value</td>
  <td>string(6)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>89</td>
  <td>Infant Death/Birth Linking - year of birth</td>
  <td>IDOB_YR</td>
  <td>component[birthYear].value</td>
  <td>dateTime</td>
  <td>YYYY component</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>90</td>
  <td>Infant Death/Birth Linking - State, U.S. Territory or Canadian Province of Birth - code</td>
  <td>BSTATE</td>
  <td>component[birthJurisdiction].value</td>
  <td>string</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-jurisdiction-vr.html'>ValueSetJurisdictionVitalRecords</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>



---

// File: input/pagecontent/StructureDefinition-vrdr-cause-of-death-coded-bundle-intro.md

This bundle is information-content equivalent to the traditional NCHS TRX format.

  This bundle contains:
  * Coded Content:
    * Activity at Time of Death <a href='StructureDefinition-vrdr-activity-at-time-of-death.html'>ActivityAtTimeOfDeath</a>
    * Underlying Cause of Death -- <a href='StructureDefinition-vrdr-automated-underlying-cause-of-death.html'>AutomatedUnderlyingCauseOfDeath</a> and <a href='StructureDefinition-vrdr-manual-underlying-cause-of-death.html'>ManualUnderlyingCauseOfDeath</a>
    * Entity Axis Cause of Death <a href='StructureDefinition-vrdr-entity-axis-cause-of-death.html'>EntityAxisCauseOfDeath</a>
    * Record Axis Cause of Death <a href='StructureDefinition-vrdr-record-axis-cause-of-death.html'>RecordAxisCauseOfDeath</a>
    * Place of Injury <a href='StructureDefinition-vrdr-place-of-injury.html'>PlaceOfInjury</a>
    * Coding Status Values <a href='StructureDefinition-vrdr-coding-status-values.html'>CodingStatusValues</a> - various flags that are part of the TRX format
  * Input Content:
    * Cause of Death Part 1 - <a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a>
    * Cause of Death Part 2 - <a href='StructureDefinition-vrdr-cause-of-death-part2.html'>CauseOfDeathPart2</a>
    * Manner of Death - <a href='StructureDefinition-vrdr-manner-of-death.html'>MannerOfDeath</a>
    * Autopsy Performed Indicator - <a href='StructureDefinition-vrdr-autopsy-performed-indicator.html'>AutopsyPerformedIndicator</a>
    * Death Certification - <a href='StructureDefinition-vrdr-death-certification.html'>DeathCertification</a>
    * Injury Incident - <a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a>
    * Tobacco Use Contributed to Death - <a href='StructureDefinition-vrdr-tobacco-use-contributed-to-death.html'>TobaccoUseContributedToDeath</a>
    * Decedent Pregnancy Status - <a href='StructureDefinition-vrdr-decedent-pregnancy-status.html'>DecedentPregnancyStatus</a>
    * Surgery Date - <a href='StructureDefinition-vrdr-surgery-date.html'>SurgeryDate</a>
### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>3</td>
  <td>Certificate Number</td>
  <td>FILENO</td>
  <td>identifier.extension[certificateNumber].value</td>
  <td>string(6)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>5 or 121</td>
  <td>Auxiliary State file number</td>
  <td>AUXNO or AUXNO2</td>
  <td>identifier.extension[auxiliaryStateIdentifier1].value</td>
  <td>string(12)</td>
  <td>When the Jurisdiction provides AUXNO2, it will be stored in this field.  If the Jurisdiction only provides AUXNO, that value will be stored in this field</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>122</td>
  <td>State Specific Data</td>
  <td>STATESP</td>
  <td>identifier.extension[stateSpecificField].value</td>
  <td>string(30)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>NA</td>
  <td>Death Record Identifier</td>
  <td>*NO IJE MAPPING*</td>
  <td>identifier.value</td>
  <td>string(12)</td>
  <td>YYYYJJNNNNNN,  YYYY = death year JJ = jurisdiction  and NNNNNN = certificate number</td>
</tr>

</tbody>
</table>

</details>
<p></p>



---

// File: input/pagecontent/StructureDefinition-vrdr-cause-of-death-coded-content-bundle-intro.md

This bundle is information-content equivalent to the traditional NCHS TRX format.

  This bundle contains:
  * Coded Content:
    * Activity at Time of Death <a href='StructureDefinition-vrdr-activity-at-time-of-death.html'>ActivityAtTimeOfDeath</a>
    * Underlying Cause of Death -- <a href='StructureDefinition-vrdr-automated-underlying-cause-of-death.html'>AutomatedUnderlyingCauseOfDeath</a> and <a href='StructureDefinition-vrdr-manual-underlying-cause-of-death.html'>ManualUnderlyingCauseOfDeath</a>
    * Entity Axis Cause of Death <a href='StructureDefinition-vrdr-entity-axis-cause-of-death.html'>EntityAxisCauseOfDeath</a>
    * Record Axis Cause of Death <a href='StructureDefinition-vrdr-record-axis-cause-of-death.html'>RecordAxisCauseOfDeath</a>
    * Place of Injury <a href='StructureDefinition-vrdr-place-of-injury.html'>PlaceOfInjury</a>
    * Coding Status Values <a href='StructureDefinition-vrdr-coding-status-values.html'>CodingStatusValues</a> - various flags that are part of the TRX format
  * Input Content:
    * Cause of Death Part 1 - <a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a>
    * Cause of Death Part 2 - <a href='StructureDefinition-vrdr-cause-of-death-part2.html'>CauseOfDeathPart2</a>
    * Manner of Death - <a href='StructureDefinition-vrdr-manner-of-death.html'>MannerOfDeath</a>
    * Autopsy Performed Indicator - <a href='StructureDefinition-vrdr-autopsy-performed-indicator.html'>AutopsyPerformedIndicator</a>
    * Death Certification - <a href='StructureDefinition-vrdr-death-certification.html'>DeathCertification</a>
    * Injury Incident - <a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a>
    * Tobacco Use Contributed to Death - <a href='StructureDefinition-vrdr-tobacco-use-contributed-to-death.html'>TobaccoUseContributedToDeath</a>
    * Decedent Pregnancy Status - <a href='StructureDefinition-vrdr-decedent-pregnancy-status.html'>DecedentPregnancyStatus</a>
    * Surgery Date - <a href='StructureDefinition-vrdr-surgery-date.html'>SurgeryDate</a>
### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>3</td>
  <td>Certificate Number</td>
  <td>FILENO</td>
  <td>identifier.extension[certificateNumber].value</td>
  <td>string(6)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>5 or 121</td>
  <td>Auxiliary State file number</td>
  <td>AUXNO or AUXNO2</td>
  <td>identifier.extension[auxiliaryStateIdentifier1].value</td>
  <td>string(12)</td>
  <td>When the Jurisdiction provides AUXNO2, it will be stored in this field.  If the Jurisdiction only provides AUXNO, that value will be stored in this field</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>122</td>
  <td>State Specific Data </td>
  <td>STATESP</td>
  <td>identifier.extension[stateSpecificField]</td>
  <td>string(30)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>NA</td>
  <td>Death Record Identifier</td>
  <td>*NO IJE MAPPING*</td>
  <td>identifier.value</td>
  <td>string(12)</td>
  <td>YYYYJJNNNNNN,  YYYY = death year JJ = jurisdiction  and NNNNNN = certificate number</td>
</tr>

</tbody>
</table>

</details>
<p></p>



---

// File: input/pagecontent/StructureDefinition-vrdr-cause-of-death-part1-intro.md

The certifier of death can be specified by reference to a USCore Practitioner instance (the <a href='StructureDefinition-vrdr-certifier.html'>Certifier</a> profile may be used) from the 'performer' field.   This instance should be included in the <a href='StructureDefinition-vrdr-death-certificate-document.html'>DeathCertificateDocument</a>. 

### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>185</td>
  <td>Cause of Death Part I Line a</td>
  <td>COD1A</td>
  <td>value.text,   component[lineNumber] = 1</td>
  <td>string(120)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>186</td>
  <td>Cause of Death Part I Interval, Line a</td>
  <td>INTERVAL1A</td>
  <td>component[interval].value, component[lineNumber] = 1</td>
  <td>string(20)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>187</td>
  <td>Cause of Death Part I Line b</td>
  <td>COD1B</td>
  <td>value.text,   component[lineNumber] = 2</td>
  <td>string(120)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>188</td>
  <td>Cause of Death Part I Interval, Line b</td>
  <td>INTERVAL1B</td>
  <td>component[interval].value, component[lineNumber] = 2</td>
  <td>string(20)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>189</td>
  <td>Cause of Death Part I Line c</td>
  <td>COD1C</td>
  <td>value.text,   component[lineNumber] = 3</td>
  <td>string(120)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>190</td>
  <td>Cause of Death Part I Interval, Line c</td>
  <td>INTERVAL1C</td>
  <td>component[interval].value, component[lineNumber] = 3</td>
  <td>string(20)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>191</td>
  <td>Cause of Death Part I Line d</td>
  <td>COD1D</td>
  <td>value.text,   component[lineNumber] = 4</td>
  <td>string(120)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>192</td>
  <td>Cause of Death Part I Interval, Line d</td>
  <td>INTERVAL1D</td>
  <td>component[interval].value, component[lineNumber] = 4</td>
  <td>string(20)</td>
  <td>-</td>
</tr>

</tbody>
</table>

</details>
<p></p>


### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>32Part1</td>
  <td>Cause of Death Line a</td>
  <td>value.text, component[lineNumber] = 1</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>32Part1</td>
  <td>Cause of Death Line b</td>
  <td>value.text, component[lineNumber] = 2</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>32Part1</td>
  <td>Cause of Death Line c</td>
  <td>value.text, component[lineNumber] = 3</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>32Part1</td>
  <td>Cause of Death Line d</td>
  <td>value.text, component[lineNumber] = 4</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-cause-of-death-part2-intro.md

The certifier of death can be specified by reference to a USCore Practitioner instance (the <a href='StructureDefinition-vrdr-certifier.html'>Certifier</a> profile may be used) from the 'performer' field.   This instance should be included in the <a href='StructureDefinition-vrdr-death-certificate-document.html'>DeathCertificateDocument</a>.

### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>193</td>
  <td>Cause of Death Part II</td>
  <td>OTHERCONDITION</td>
  <td>value.text</td>
  <td>string(240)</td>
  <td>-</td>
</tr>

</tbody>
</table>

</details>
<p></p>


### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>32Part2</td>
  <td>Other Cause of Death</td>
  <td>value.text</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-certifier-intro.md

Note: The Certifier profile is based on the [US Core Practitioner](http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-practitioner.html) which requires an identifier be included.
The death record submission process does not require an identifier.  As a result, death record submissions that are complete will be flagged as invalid by the FHIR validator, unless they include an identifier. 

The VRDR IG profiles require a <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Practitioner-vr.html'>PractitionerVitalRecords</a> instance for references to the Certifier.  This is to ensure that these profiles are not over-constrained for use by the MDI IG.

### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>220</td>
  <td>Certifier's First Name</td>
  <td>CERTFIRST</td>
  <td>name.given , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>221</td>
  <td>Certifier's Middle Name</td>
  <td>CERTMIDDLE</td>
  <td>name.given , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>222</td>
  <td>Certifier's Last Name</td>
  <td>CERTLAST</td>
  <td>name.family , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>223</td>
  <td>Certifier's Suffix Name</td>
  <td>CERTSUFFIX</td>
  <td>name.suffix , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>224</td>
  <td>Certifier - Street number</td>
  <td>CERTSTNUM</td>
  <td>address.extension[stnum]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>225</td>
  <td>Certifier - Pre Directional</td>
  <td>CERTPREDIR</td>
  <td>address.extension[predir]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>226</td>
  <td>Certifier - Street name</td>
  <td>CERTSTRNAME</td>
  <td>address.extension[stname]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>227</td>
  <td>Certifier - Street designator</td>
  <td>CERTSTRDESIG</td>
  <td>address.extension[stdesig]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>228</td>
  <td>Certifier - Post Directional</td>
  <td>CERTPOSTDIR</td>
  <td>address.extension[postdir]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>229</td>
  <td>Certifier - Unit or apt number</td>
  <td>CERTUNITNUM</td>
  <td>address.extension[unitnum]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>230</td>
  <td>Long string address for Certifier same as above but allows states to choose the way they capture information.</td>
  <td>CERTADDRESS</td>
  <td>address.line</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>231</td>
  <td>Certifier - City or Town name</td>
  <td>CERTCITYTEXT</td>
  <td>address.city</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>232</td>
  <td>State, U.S. Territory or Canadian Province of Certifier - code</td>
  <td>CERTSTATECD</td>
  <td>address.state</td>
  <td>string</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>233</td>
  <td>State, U.S. Territory or Canadian Province of Certifier - literal</td>
  <td>CERTSTATE</td>
  <td>address.state (expanded from 2 letter code)</td>
  <td>string</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>234</td>
  <td>Certifier - Zip</td>
  <td>CERTZIP</td>
  <td>address.postalCode</td>
  <td>string</td>
  <td>-</td>
</tr>

</tbody>
</table>

</details>
<p></p>


### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>46</td>
  <td>Name, Address, and Zip Code of Person Completing Cause of Death</td>
  <td>name, address</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>47</td>
  <td>Title of Certifier</td>
  <td>qualification</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>48</td>
  <td>License Number</td>
  <td>identifier:NPI</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-coding-status-values-intro.md

### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>91</td>
  <td>Receipt date -- Year</td>
  <td>R_YR</td>
  <td>parameter[receiptDate].value</td>
  <td>date</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>92</td>
  <td>Receipt date -- Month</td>
  <td>R_MO</td>
  <td>parameter[receiptDate].value</td>
  <td>date</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>93</td>
  <td>Receipt date -- Day</td>
  <td>R_DY</td>
  <td>parameter[receiptDate].value</td>
  <td>date</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>101</td>
  <td>Intentional Reject</td>
  <td>INT_REJ</td>
  <td>parameter[intentionalReject].value</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-intentional-reject-vs.html'>IntentionalRejectVS</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>102</td>
  <td>Acme System Reject Codes</td>
  <td>SYS_REJ</td>
  <td>parameter[acmeSystemReject].value</td>
  <td>codeable</td>
  <td>[ACMESystemRejectVS]</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>107</td>
  <td>Transax conversion flag: Computer Generated</td>
  <td>TRX_FLG</td>
  <td>parameter[transaxConversion].value</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-transax-conversion-vs.html'>TransaxConversionVS</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>NA</td>
  <td>coder status</td>
  <td>CS (TRX Field, no IJE Mapping)</td>
  <td>parameter[coderStatus].value</td>
  <td>integer</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>NA</td>
  <td>shipment number</td>
  <td>SHIP (TRX Field, no IJE Mapping)</td>
  <td>parameter[shipmentNumber].value</td>
  <td>string</td>
  <td>-</td>
</tr>

</tbody>
</table>

</details>
<p></p>



---

// File: input/pagecontent/StructureDefinition-vrdr-death-certificate-document-intro.md

The Death Certificate is a Bundle document that contains the <a href='StructureDefinition-vrdr-death-certificate.html'>DeathCertificate</a> Composition and the other instances comprising the content of the death record.

  Notes:
  * The DeathCertification.performed and DeathCertificateDocument.attester.time should both be set to the death certification time.
  * THe DeathCertificate is the first entry in the DeathCertificateDocument, and includes references to other entries in that Bundle.
  * The unique record identifier for every record consistes of YYYYJJFFFFFF, where YYYY is the year, JJ is the two character jurisdiction code, and FFFFFF is the six digit death certificate number.

In addition to  the <a href='StructureDefinition-vrdr-death-certificate.html'>DeathCertificate</a> Composition it includes the following content:
### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>3</td>
  <td>Certificate Number</td>
  <td>FILENO</td>
  <td>identifier.extension[certificateNumber].value</td>
  <td>string(6)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>5</td>
  <td>Auxiliary State file number</td>
  <td>AUXNO</td>
  <td>identifier.extension[auxiliaryStateIdentifier1].value</td>
  <td>string(12)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>121</td>
  <td>Auxiliary State file number</td>
  <td>AUXNO2</td>
  <td>identifier.extension[auxiliaryStateIdentifier2].value</td>
  <td>string(12)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>NA</td>
  <td>Death Record Identifier</td>
  <td>*NO IJE MAPPING*</td>
  <td>identifier.value</td>
  <td>string(12)</td>
  <td>YYYYJJNNNNNN,  YYYY = death year JJ = jurisdiction  and NNNNNN = certificate number</td>
</tr>

</tbody>
</table>

</details>
<p></p>



---

// File: input/pagecontent/StructureDefinition-vrdr-death-certificate-intro.md

The Death Certificate profile is a composition referencing the core content of a death registration transmitted in the associated DeathCertificateDocument Bundle.

Notes:
* The DeathCertificate is the first entry in the DeathCertificateDocument, and includes references to other entries in that Bundle.

Additional content can be included in the Death Certificate Document and should referenced in the Death Certificate  based on standard resources and profiles.
At present, standard USCore profiles can be used, and these are not cited in this Implementation Guide.
For example:
* Funeral Home Licensee (USCorePractitioner)
* Funeral Home Director (USCorePractitioner)
* Death Pronouncement Performer (USCorePractitioner)

The content is broken down into the following sections:
* Decedent Demographics
    * <a href='StructureDefinition-vrdr-birth-record-identifier.html'>BirthRecordIdentifier</a>
    * <a href='StructureDefinition-vrdr-fetal-death-record-identifier.html'>FetalDeathRecordIdentifier</a>
    * <a href='StructureDefinition-vrdr-birth-record-identifier-child.html'>BirthRecordIdentifierChild</a>
    * <a href='StructureDefinition-vrdr-decedent.html'>Decedent</a>
    * <a href='StructureDefinition-vrdr-decedent-age.html'>DecedentAge</a>
    * <a href='StructureDefinition-vrdr-decedent-education-level.html'>DecedentEducationLevel</a>
    * <a href='StructureDefinition-vrdr-decedent-father.html'>DecedentFather</a>
    * <a href='StructureDefinition-vrdr-decedent-military-service.html'>DecedentMilitaryService</a>
    * <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a>
    * <a href='StructureDefinition-vrdr-decedent-mother.html'>DecedentMother</a>
    * <a href='StructureDefinition-vrdr-decedent-spouse.html'>DecedentSpouse</a>
    * <a href='StructureDefinition-vrdr-decedent-usual-work.html'>DecedentUsualWork</a>
* Death Investigation
    * <a href='StructureDefinition-vrdr-autopsy-performed-indicator.html'>AutopsyPerformedIndicator</a>
    * <a href='StructureDefinition-vrdr-death-date.html'>DeathDate</a>
    * <a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a>
    * <a href='StructureDefinition-vrdr-decedent-pregnancy-status.html'>DecedentPregnancyStatus</a>
    * <a href='StructureDefinition-vrdr-examiner-contacted.html'>ExaminerContacted</a>
    * <a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a>
    * <a href='StructureDefinition-vrdr-injury-location.html'>InjuryLocation</a>
    * <a href='StructureDefinition-vrdr-surgery-date.html'>SurgeryDate</a>
    * <a href='StructureDefinition-vrdr-tobacco-use-contributed-to-death.html'>TobaccoUseContributedToDeath</a>
* Death Certification
    * <a href='StructureDefinition-vrdr-certifier.html'>Certifier</a>
    * <a href='StructureDefinition-vrdr-death-certification.html'>DeathCertification</a>
    * <a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a>
    * <a href='StructureDefinition-vrdr-cause-of-death-part2.html'>CauseOfDeathPart2</a>
    * <a href='StructureDefinition-vrdr-manner-of-death.html'>MannerOfDeath</a>
* Decedent Disposition
    * <a href='StructureDefinition-vrdr-decedent-disposition-method.html'>DecedentDispositionMethod</a>
    * <a href='StructureDefinition-vrdr-disposition-location.html'>DispositionLocation</a>
    * <a href='StructureDefinition-vrdr-funeral-home.html'>FuneralHome</a>
* Coded Content
    * <a href='StructureDefinition-vrdr-activity-at-time-of-death.html'>ActivityAtTimeOfDeath</a>
    * <a href='StructureDefinition-vrdr-automated-underlying-cause-of-death.html'>AutomatedUnderlyingCauseOfDeath</a>
    * <a href='StructureDefinition-vrdr-manual-underlying-cause-of-death.html'>ManualUnderlyingCauseOfDeath</a>
    * <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a>
    * <a href='StructureDefinition-vrdr-entity-axis-cause-of-death.html'>EntityAxisCauseOfDeath</a>
    * <a href='StructureDefinition-vrdr-record-axis-cause-of-death.html'>RecordAxisCauseOfDeath</a>
    * <a href='StructureDefinition-vrdr-place-of-injury.html'>PlaceOfInjury</a>
    * <a href='StructureDefinition-vrdr-coding-status-values.html'>CodingStatusValues</a>

**Note:**
For NCHS submissions the replacement record status (REPLACE) has been deprecated within the VRDR IG, and this field be ignored.
The replacement status of a submission is now specified as a message parameter and described in the <a href='https://build.fhir.org/ig/nightingaleproject/vital_records_fhir_messaging_ig/branches/main/message.html#message-structure-and-content'>NCHS Vital Records Messaging IG</a>.


### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>6</td>
  <td>Source flag: paper/electronic</td>
  <td>MFILED</td>
  <td>extension[filingFormat]</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-filing-format-vs.html'>FilingFormatVS</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>96</td>
  <td>Date of Registration--Year</td>
  <td>DOR_YR</td>
  <td>date</td>
  <td>dateTime</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>97</td>
  <td>Date of Registration--Month</td>
  <td>DOR_MO</td>
  <td>date</td>
  <td>dateTime</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>98</td>
  <td>Date of Registration--Day</td>
  <td>DOR_DY</td>
  <td>date</td>
  <td>dateTime</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>122</td>
  <td>State Specific Data</td>
  <td>STATESP</td>
  <td>extension[stateSpecificField]</td>
  <td>string(30)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>184</td>
  <td>Replacement Record</td>
  <td>REPLACE (*deprecated*)</td>
  <td>extension[replaceStatus]</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-replace-status-vs.html'>ReplaceStatusVS</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>


### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>50</td>
  <td>For Registrar Only-Date Filed</td>
  <td>date</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-death-certification-intro.md


  Note:
  * The DeathCertification.performed and DeathCertificateDocument.attester.time should both be set to the death certification time.
  * The DeathCertification.performer.actor is required by the <a href='{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-procedure.html'>USCore Procedure Profile</a>,
  but is not required by the death record submission use case. The referenced Practitioner may use the <a href='StructureDefinition-vrdr-certifier.html'>Certifier</a> profile and the instance should be included in the <a href='StructureDefinition-vrdr-death-certificate-document.html'>DeathCertificateDocument</a>.


### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>119</td>
  <td>Title of Certifier</td>
  <td>CERTL</td>
  <td>performer.function (note that if value is "OTH" then performed.function.text should contain 'Full Text for Other Individual Legally Allowed to Certify')</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-certifier-types-vs.html'>CertifierTypesVS</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>235</td>
  <td>Certifier Date Signed</td>
  <td>CERTDATE</td>
  <td>performed</td>
  <td>dateTime</td>
  <td>-</td>
</tr>

</tbody>
</table>

</details>
<p></p>


### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>45</td>
  <td>Certifier</td>
  <td>performer.function</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>49</td>
  <td>Date Certified</td>
  <td>performed</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-death-date-intro.md

The profile includes a component for the time of death pronouncement that is not currently used for death certificate submission.

  The certificate signing date is passed via the <a href='StructureDefinition-vrdr-death-certification.html'>DeathCertification</a> profile.

  The death date specifies the date the death occurred, not the date the record was submitted.

  The pronouncer of death can be specified by reference to a USCore Practitioner instance from the 'performer' field.   This instance should be included in the <a href='StructureDefinition-vrdr-death-certificate-document.html'>DeathCertificateDocument</a> and referenced from the <a href='StructureDefinition-vrdr-death-certificate.html'>DeathCertificate</a>.

  The method of date of death determination is not used for the Death Record submission process, and thus does not appear in the table below.  The binding
  to <a href='ValueSet-vrdr-date-of-death-determination-methods-vs.html'>DateOfDeathDeterminationMethodsVS</a> is included for compatibility with the Medicolegal Death Investigation (<a href='https://hl7.org/fhir/us/mdi/'>MDI</a>) Implementation Guide.  The valueset only
includes the values used by MDI, but is bound [extensibly](http://hl7.org/fhir/R4/terminologies.html#extensible).  If a jurisdiction chooses to use this field, and requires additional values (e.g., 'presumed'), these values can be used
while remaining in full conformance with the VRDR IG.

### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>1</td>
  <td>Date of Death--Year</td>
  <td>DOD_YR</td>
  <td>value</td>
  <td>dateTime</td>
  <td>Required for processing</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>31</td>
  <td>Place of Death</td>
  <td>DPLACE</td>
  <td>component[placeOfDeath].value</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-place-of-death-vs.html'>PlaceOfDeathVS</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>34</td>
  <td>Date of Death--Month</td>
  <td>DOD_MO</td>
  <td>value</td>
  <td>dateTime</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>35</td>
  <td>Date of Death--Day</td>
  <td>DOD_DY</td>
  <td>value</td>
  <td>dateTime</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>36</td>
  <td>Time of Death</td>
  <td>TOD</td>
  <td>value</td>
  <td>dateTime</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>218</td>
  <td>Person Pronouncing Date Signed</td>
  <td>PPDATESIGNED</td>
  <td>component[datetimePronouncedDead].valueDateTime</td>
  <td>dateTime</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>219</td>
  <td>Person Pronouncing Time Pronounced</td>
  <td>PPTIME</td>
  <td>component[datetimePronouncedDead].valueDateTime if a date is also specified, or component[datetimePronouncedDead].valueTime if no date is specified</td>
  <td>dateTime or time</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>

<details>

<summary>

<strong class='context-menu'> Mortality Roster </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>8</td>
  <td>Date of Death--Month</td>
  <td>DOD_MO</td>
  <td>value</td>
  <td>dateTime</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>9</td>
  <td>Date of Death--Day</td>
  <td>DOD_DY</td>
  <td>value</td>
  <td>dateTime</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>10</td>
  <td>Date of Death--Year</td>
  <td>DOD_YR</td>
  <td>value</td>
  <td>dateTime</td>
  <td>Required for processing</td>
</tr>

</tbody>
</table>

</details>
<p></p>


### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>14</td>
  <td>Place of Death</td>
  <td>component[placeOfDeath].value</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>24</td>
  <td>Date Pronounced Dead</td>
  <td>component[datetimePronouncedDead ].valueDateTime</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>25</td>
  <td>Time Pronounced Dead</td>
  <td>component[datetimePronouncedDead ].valueDateTime</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>28</td>
  <td>Date signed</td>
  <td>effective</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>29</td>
  <td>Actual or Presumed Date of Death</td>
  <td>value</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>30</td>
  <td>Actual or Presumed Time of Death</td>
  <td>value</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-death-location-intro.md


### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>2</td>
  <td>State, U.S. Territory or Canadian Province of Death - code</td>
  <td>DSTATE</td>
  <td>address.state or address.state.extension[nationalReportingJurisdictionId]</td>
  <td>codeable</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a> in state field or <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-jurisdiction-vr.html'>ValueSetJurisdictionVitalRecords</a> in extension</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>32</td>
  <td>County of Death Occurrence</td>
  <td>COD</td>
  <td>address.district.extension[districtCode]</td>
  <td>integer</td>
  <td>see <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#county-codes'>CountyCodes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>129</td>
  <td>Death Institution name</td>
  <td>DINSTI</td>
  <td>name</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>130</td>
  <td>Long String address for place of death</td>
  <td>ADDRESS_D</td>
  <td>address.line</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>131</td>
  <td>Place of death. Street number</td>
  <td>STNUM_D</td>
  <td>address.extension[stnum]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>132</td>
  <td>Place of death. Pre Directional</td>
  <td>PREDIR_D</td>
  <td>address.extension[predir]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>133</td>
  <td>Place of death. Street name</td>
  <td>STNAME_D</td>
  <td>address.extension[stname]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>134</td>
  <td>Place of death. Street designator</td>
  <td>STDESIG_D</td>
  <td>address.extension[stdesig]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>135</td>
  <td>Place of death. Post Directional</td>
  <td>POSTDIR_D</td>
  <td>address.extension[postdir]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>136</td>
  <td>Place of death. City or Town name</td>
  <td>CITYTEXT_D</td>
  <td>address.city</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>137</td>
  <td>Place of death. State name literal</td>
  <td>STATETEXT_D</td>
  <td>address.state (expanded from 2 letter code)</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>138</td>
  <td>Place of death. Zip code</td>
  <td>ZIP9_D</td>
  <td>address.postalCode</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>139</td>
  <td>Place of death. County of Death</td>
  <td>COUNTYTEXT_D</td>
  <td>address.district</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>140</td>
  <td>Place of death. City FIPS code</td>
  <td>CITYCODE_D</td>
  <td>address.city.extension[cityCode]</td>
  <td>integer</td>
  <td>see <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#city-codes'>CityCodes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>141</td>
  <td>Place of death. Longitude</td>
  <td>LONG_D</td>
  <td>position.longitude</td>
  <td>float</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>142</td>
  <td>Place of Death. Latitude</td>
  <td>LAT_D</td>
  <td>position.latitude</td>
  <td>float</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>239</td>
  <td>Country of Death - Code</td>
  <td>DTHCOUNTRYCD</td>
  <td>address.country</td>
  <td>string</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-residence-country-vr.html'>ValueSetResidenceCountryVitalRecords</a>.  Note: For US Death certificates should be US</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>240</td>
  <td>Country of Death - Literal</td>
  <td>DTHCOUNTRY</td>
  <td>address.country  (expanded from 2 letter code)</td>
  <td>string</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#country-literals'>CountryLiterals</a>.   Not used. For US Death certificates should be 'United States'.</td>
</tr>

</tbody>
</table>

</details>
<p></p>

<details>

<summary>

<strong class='context-menu'> Mortality Roster </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>6</td>
  <td>State, U.S. Territory or Canadian Province of Death - literal</td>
  <td>STATETEXT_D</td>
  <td>address.state (expanded from 2 letter code)</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>7</td>
  <td>State, U.S. Territory or Canadian Province of Death - code</td>
  <td>DSTATE</td>
  <td>address.state or address.state.extension[nationalReportingJurisdictionId]</td>
  <td>codeable</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a> or <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-jurisdiction-vr.html'>ValueSetJurisdictionVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>30</td>
  <td>Death Country - Code</td>
  <td>DCOUNTRYC</td>
  <td>address.country</td>
  <td>string</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-residence-country-vr.html'>ValueSetResidenceCountryVitalRecords</a>.  Note: For US Death certificates should be US.</td>
</tr>

</tbody>
</table>

</details>
<p></p>

### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>17</td>
  <td>County of Death</td>
  <td>address.district</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-decedent-age-intro.md

The DecedentAge profile of Observation records the decedents age at time of death.

  Notes:
  * When present, the effective date of this observation shall be equal to the decedent's date of death.
  * Age is derived as the difference in time between the decedent's death date and birth date.  Age is an integer value, reported in the largest appropriate unit.
  An age of 1 year and 1 month should be reported as 1 year, not 13 months, or 1.083 years.  Although the FHIR quantity provides a decimal value, only the integer component
  of the value will be used by NCHS.
  * The appropriate units for age are defined here:

  |  Age Range  | Units |
  |:---:|:---:|
  | age < 1 hr | minutes |
  | 1 hr &le; age < 24 hours | hours |
  | 1 day &le; age < 28 days (1 \"month\") | days |
  | 1 month &le;  age  < 12 months | months |
  | 1 year &le; age &le; 135 | years|
  | age unknown | unknown |
  {: .grid }


### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>16</td>
  <td>Decedent's Age--Type</td>
  <td>AGETYPE</td>
  <td>valueQuantity.code</td>
  <td>codeable</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-units-of-age-vr.html'>ValueSetUnitsOfAgeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>17</td>
  <td>Decedent's Age--Units</td>
  <td>AGE</td>
  <td>valueQuantity.value</td>
  <td>decimal</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>18</td>
  <td>Decedent's Age--Edit Flag</td>
  <td>AGE_BYPASS</td>
  <td>value.extension[BypassEditFlag].value</td>
  <td>codeable</td>
  <td>See <a href='usage.html#decedent-name'>Note on Decedent Name</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>


### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>4a</td>
  <td>Age</td>
  <td>value</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>4b</td>
  <td>Under 1 Year</td>
  <td>value</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>4c</td>
  <td>Under 1 Day</td>
  <td>value</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-decedent-disposition-method-intro.md


### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>33</td>
  <td>Method of Disposition</td>
  <td>DISP</td>
  <td>value</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-method-of-disposition-vs.html'>MethodOfDispositionVS</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>

### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>18</td>
  <td>Method of Disposition</td>
  <td>value</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-decedent-education-level-intro.md


### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>37</td>
  <td>Decedent's Education</td>
  <td>DEDUC</td>
  <td>value</td>
  <td>codeable</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-education-level-vr.html'>ValueSetEducationLevelVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>38</td>
  <td>Decedent's Education--Edit Flag</td>
  <td>DEDUC_BYPASS</td>
  <td>value.extension[ByPassEdit].value</td>
  <td>codeable</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-valueset-edit-bypass-01234-vr.html'>ValueSetEditBypass01234VitalRecords</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>

### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>51</td>
  <td>Decedent's Education</td>
  <td>value</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-decedent-father-intro.md


### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>12</td>
  <td>Father's Surname</td>
  <td>FLNAME</td>
  <td>name.family</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>167</td>
  <td>Father's First Name</td>
  <td>DDADF</td>
  <td>name.given , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>168</td>
  <td>Father's Middle Name</td>
  <td>DDADMID</td>
  <td>name.given , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>199</td>
  <td>Father's Suffix</td>
  <td>FATHERSUFFIX</td>
  <td>name.suffix , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>

</tbody>
</table>

</details>
<p></p>

<details>

<summary>

<strong class='context-menu'> Mortality Roster </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>16</td>
  <td>Father's First Name</td>
  <td>DADFNAME</td>
  <td>name.given , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>17</td>
  <td>Father's Middle Name</td>
  <td>DADMIDNAME</td>
  <td>name.given , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>18</td>
  <td>Father's Surname</td>
  <td>DADLNAME</td>
  <td>name.family</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>23</td>
  <td>Father's Suffix</td>
  <td>DADSUFF</td>
  <td>name.suffix , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>

</tbody>
</table>

</details>
<p></p>

### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>11</td>
  <td>Father's Name</td>
  <td>name</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-decedent-intro.md

The Decedent profile contains basic information about the decedent, including data that are essential to the death record.

  Note: The Decedent profile is based on the [US Core Patient Profile](http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-patient.html) which requires gender.  A value of 'unknown' will satisfy this requirement.
  The death record submission use case uses NCHS's definition of sex at time of death which is different than gender.  Complete death record submissions may fail FHIR validation
  due to lack of a value for gender.

### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>7</td>
  <td>Decedent's Legal Name--Given</td>
  <td>GNAME</td>
  <td>name.given , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>8</td>
  <td>Decedent's Legal Name--Middle</td>
  <td>MNAME</td>
  <td>name.given , name.use = official (first letter)</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>9</td>
  <td>Decedent's Legal Name--Last</td>
  <td>LNAME</td>
  <td>name.family , name.use = official. (absence is equivalent to 'UNKNOWN'.)</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>10</td>
  <td>Decedent's Legal Name--Suffix</td>
  <td>SUFF</td>
  <td>name.suffix , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>13</td>
  <td>Sex</td>
  <td>SEX</td>
  <td>extension[NVSS-SexAtDeath]</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-administrative-gender-vs.html'>AdministrativeGenderVS</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>NA</td>
  <td>Gender</td>
  <td>*NO IJE MAPPING*</td>
  <td>gender</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-administrative-gender-vs.html'>AdministrativeGenderVS</a> - See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#gender'>Note on Gender</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>15</td>
  <td>Social Security Number</td>
  <td>SSN</td>
  <td>identifier.value where system = 'http://hl7.org/fhir/sid/us-ssn and type.coding.code="SS"</td>
  <td>string</td>
  <td>type.coding.code="SB" is deprecated but also supported for compatibility</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>19</td>
  <td>Date of Birth--Year</td>
  <td>DOB_YR</td>
  <td>birthDate.value</td>
  <td>dateTime</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>20</td>
  <td>Date of Birth--Month</td>
  <td>DOB_MO</td>
  <td>birthDate.value</td>
  <td>dateTime</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>21</td>
  <td>Date of Birth--Day</td>
  <td>DOB_DY</td>
  <td>birthDate.value</td>
  <td>dateTime</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>22</td>
  <td>Birthplace--Country</td>
  <td>BPLACE_CNT</td>
  <td>extension[patient-birthPlace].value[x].country</td>
  <td>string</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-birthplace-country-vr.html'>ValueSetBirthplaceCountryVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>23</td>
  <td>State, U.S. Territory or Canadian Province of Birth - code</td>
  <td>BPLACE_ST</td>
  <td>extension[patient-birthPlace].value[x].state</td>
  <td>string</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>24</td>
  <td>Decedent's Residence--City</td>
  <td>CITYC</td>
  <td>address.city.extension[cityCode]</td>
  <td>integer</td>
  <td>see <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#city-codes'>CityCodes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>25</td>
  <td>Decedent's Residence--County</td>
  <td>COUNTYC</td>
  <td>address.district.extension[districtCode]</td>
  <td>integer</td>
  <td>see <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#county-codes'>CountyCodes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>26</td>
  <td>State, U.S. Territory or Canadian Province of Decedent's residence - code</td>
  <td>STATEC</td>
  <td>address.state</td>
  <td>string</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>27</td>
  <td>Decedent's Residence--Country</td>
  <td>COUNTRYC</td>
  <td>address.country</td>
  <td>string</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-residence-country-vr.html'>ValueSetResidenceCountryVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>28</td>
  <td>Decedent's Residence--Inside City Limits</td>
  <td>LIMITS</td>
  <td>address.city.extension[withinCityLimits]</td>
  <td>codeable</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>29</td>
  <td>Marital Status</td>
  <td>MARITAL</td>
  <td>maritalStatus</td>
  <td>codeable</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-marital-status-vr.html'>ValueSetMaritalStatusVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>30</td>
  <td>Marital Status--Edit Flag</td>
  <td>MARITAL_BYPASS</td>
  <td>maritalStatus.extension[BypassEditFlag]</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-edit-bypass-0124-vs.html'>EditBypass0124VS</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>143</td>
  <td>Decedent's spouse living at decedent's DOD?</td>
  <td>SPOUSELV</td>
  <td>extension[Spouse-Alive]</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-spouse-alive-vs.html'>SpouseAliveVS</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>146</td>
  <td>Decedent's Residence - Street number</td>
  <td>STNUM_R</td>
  <td>address.extension[stnum]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>147</td>
  <td>Decedent's Residence - Pre Directional</td>
  <td>PREDIR_R</td>
  <td>address.extension[predir]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>148</td>
  <td>Decedent's Residence - Street name</td>
  <td>STNAME_R</td>
  <td>address.extension[stname]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>149</td>
  <td>Decedent's Residence - Street designator</td>
  <td>STDESIG_R</td>
  <td>address.extension[stdesig]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>150</td>
  <td>Decedent's Residence - Post Directional</td>
  <td>POSTDIR_R</td>
  <td>address.extension[postdir]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>151</td>
  <td>Decedent's Residence - Unit or apt number</td>
  <td>UNITNUM_R</td>
  <td>address.extension[unitnum]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>152</td>
  <td>Decedent's Residence - City or Town name</td>
  <td>CITYTEXT_R</td>
  <td>address.city</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>153</td>
  <td>Decedent's Residence - ZIP code</td>
  <td>ZIP9_R</td>
  <td>address.postalCode</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>154</td>
  <td>Decedent's Residence - County</td>
  <td>COUNTYTEXT_R</td>
  <td>address.district</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>155</td>
  <td>Decedent's Residence - State name</td>
  <td>STATETEXT_R</td>
  <td>address.state (expanded from 2 letter code)</td>
  <td>string</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>156</td>
  <td>Decedent's Residence - COUNTRY name</td>
  <td>COUNTRYTEXT_R</td>
  <td>address.country (expanded from 2 letter code)</td>
  <td>string</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#country-literals'>CountryLiterals</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>157</td>
  <td>Long string address for decedent's place of residence same as above but allows states to choose the way they capture information.</td>
  <td>ADDRESS_R</td>
  <td>address.line[0]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>166</td>
  <td>Middle Name of Decedent</td>
  <td>DMIDDLE</td>
  <td>name.given , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>194</td>
  <td>Decedent's Maiden Name</td>
  <td>DMAIDEN</td>
  <td>name.text , name.use = maiden</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>195</td>
  <td>Decedent's Birth Place City - Code</td>
  <td>DBPLACECITYCODE</td>
  <td>extension[patient-birthPlace].value[x].city.extension[cityCode]</td>
  <td>integer</td>
  <td>see <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#city-codes'>CityCodes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>196</td>
  <td>Decedent's Birth Place City - Literal</td>
  <td>DBPLACECITY</td>
  <td>extension[patient-birthPlace].value[x].city</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>201</td>
  <td>Informant's Relationship</td>
  <td>INFORMRELATE</td>
  <td>contact.relationship.text</td>
  <td>string (30 characters)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>238</td>
  <td>State, U.S. Territory or Canadian Province of Birth - literal</td>
  <td>STATEBTH</td>
  <td>extension[patient-birthPlace].value[x].state or extension[patient-birthPlace].value[x].state.extension[nationalReportingJurisdictionId] if present    (expanded from 2 letter code)</td>
  <td>string</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>246</td>
  <td>Marital Descriptor</td>
  <td>MARITAL_DESCRIP</td>
  <td>maritalStatus.text</td>
  <td>string</td>
  <td>-</td>
</tr>

</tbody>
</table>

</details>
<p></p>

<details>

<summary>

<strong class='context-menu'> Mortality Roster </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>1</td>
  <td>State, U.S. Territory or Canadian Province of Birth - literal</td>
  <td>STATEBTH</td>
  <td>extension[patient-birthPlace].value[x].state or extension[patient-birthPlace].value[x].state.extension[nationalReportingJurisdictionId] if present    (expanded from 2 letter code)</td>
  <td>string</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>2</td>
  <td>State, U.S. Territory or Canadian Province of Birth - code</td>
  <td>BPLACE_ST</td>
  <td>extension[patient-birthPlace].value[x].state or extension[patient-birthPlace].value[x].state.extension[nationalReportingJurisdictionId] if present</td>
  <td>string</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-jurisdiction-vr.html'>ValueSetJurisdictionVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>3</td>
  <td>Decedent's Legal Name--Given</td>
  <td>GNAME</td>
  <td>name.given , name.use = official</td>
  <td>string</td>
  <td>See <a href='usage.html#decedent-name'>Note on Decedent Name</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>4</td>
  <td>Decedent's Legal Name--Middle</td>
  <td>MIDNAME</td>
  <td>name.given , name.use = official (first letter)</td>
  <td>string</td>
  <td>See <a href='usage.html#decedent-name'>Note on Decedent Name</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>5</td>
  <td>Decedent's Legal Name--Last</td>
  <td>LNAME</td>
  <td>name.family , name.use = official</td>
  <td>string</td>
  <td>See <a href='usage.html#decedent-name'>Note on Decedent Name</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>11</td>
  <td>Date of Birth--Month</td>
  <td>DOB_MO</td>
  <td>birthDate.value</td>
  <td>dateTime</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>12</td>
  <td>Date of Birth--Day</td>
  <td>DOB_DY</td>
  <td>birthDate.value</td>
  <td>dateTime</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>13</td>
  <td>Date of Birth--Year</td>
  <td>DOB_YR</td>
  <td>birthDate.value</td>
  <td>dateTime</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>14</td>
  <td>Sex</td>
  <td>SEX</td>
  <td>extension[NVSS-SexAtDeath]</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-administrative-gender-vs.html'>AdministrativeGenderVS</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>NA</td>
  <td>Gender</td>
  <td>*NO IJE MAPPING*</td>
  <td>gender</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-administrative-gender-vs.html'>AdministrativeGenderVS</a> - See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#gender'>Note on Gender</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>22</td>
  <td>Decedent's Suffix</td>
  <td>SUFF</td>
  <td>name.suffix , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>26</td>
  <td>Decedent's Maiden Name</td>
  <td>DMAIDEN</td>
  <td>name.text , name.use = maiden</td>
  <td>string</td>
  <td></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>27</td>
  <td>State, U.S. Territory or Canadian Province of Decedent's Residence - literal</td>
  <td>STATETEXT_R</td>
  <td>address.state (expanded from 2 letter code)</td>
  <td>string</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>28</td>
  <td>State, U.S. Territory or Canadian Province of Decedent's Residence - code</td>
  <td>STATEC</td>
  <td>address.state</td>
  <td>string</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>29</td>
  <td>Birthplace Country - Code</td>
  <td>BPLACE_CT</td>
  <td>extension[patient-birthPlace].value[x].country</td>
  <td>string</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-birthplace-country-vr.html'>ValueSetBirthplaceCountryVitalRecords</a>.</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>31</td>
  <td>Decedent's Residence Country - Code</td>
  <td>COUNTRYC</td>
  <td>address.country</td>
  <td>string</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-residence-country-vr.html'>ValueSetResidenceCountryVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>32</td>
  <td>Decedent's SSN (may be used by some jurisdictions when allowed by law, to match with the SSN contained with the birth record)</td>
  <td>SSN</td>
  <td>identifier.value where system = 'http://hl7.org/fhir/sid/us-ssn and type.coding.code="SS"</td>
  <td>string</td>
  <td>type.coding.code="SB" is deprecated but also supported for compatibility</td>
</tr>

</tbody>
</table>

</details>
<p></p>


### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>1</td>
  <td>Decedent's Legal Name</td>
  <td>name</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>2</td>
  <td>Sex</td>
  <td>extension:NVSS-SexAtDeath</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>3</td>
  <td>Social Security Number</td>
  <td>identifier:SSN</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>5</td>
  <td>Date of Birth</td>
  <td>birthDate</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>6</td>
  <td>Birthplace</td>
  <td>extension:birthPlace</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>7a</td>
  <td>Residence-State</td>
  <td>address.state</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>7b</td>
  <td>County</td>
  <td>address.district</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>7c</td>
  <td>City or Town</td>
  <td>address.city</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>7d</td>
  <td>Street and Number</td>
  <td>address.line</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>7e</td>
  <td>Apt No</td>
  <td>address.extension:unitnumber</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>7f</td>
  <td>Zip Code</td>
  <td>address.postalCode</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>7g</td>
  <td>Inside City Limits?</td>
  <td>address.extension:withinCityLimitsIndicator</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>9</td>
  <td>Marital Status at Time of Death</td>
  <td>maritalStatus</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>13a</td>
  <td>Informant's Name</td>
  <td>contact.name</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>13b</td>
  <td>Informant's Relationship to Decedent</td>
  <td>contact.type.text</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>13c</td>
  <td>Informant's Mailing Address</td>
  <td>contact.type.address</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-decedent-military-service-intro.md


### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>128</td>
  <td>Decedent ever served in Armed Forces?</td>
  <td>ARMEDF</td>
  <td>value</td>
  <td>codeable</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>

### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>8</td>
  <td>Ever in US Armed Forces?</td>
  <td>value</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-decedent-mother-intro.md


### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>169</td>
  <td>Mother's First Name</td>
  <td>DMOMF</td>
  <td>name.given , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>170</td>
  <td>Mother's Middle Name</td>
  <td>DMOMMID</td>
  <td>name.given , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>171</td>
  <td>Mother's Maiden Surname</td>
  <td>DMOMMDN</td>
  <td>name.family , name.use = maiden</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>200</td>
  <td>Mother's Suffix</td>
  <td>MOTHERSSUFFIX</td>
  <td>name.suffix , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>

</tbody>
</table>

</details>
<p></p>

<details>

<summary>

<strong class='context-menu'> Mortality Roster </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>19</td>
  <td>Mother's Given Name</td>
  <td>MOMGNAME</td>
  <td>name.given , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>20</td>
  <td>Mother's Middle Name</td>
  <td>MOMMIDNAME</td>
  <td>name.given , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>21</td>
  <td>Mother's Maiden Surname</td>
  <td>MOMMAIDNAME</td>
  <td>name.family , name.use = maiden</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>24</td>
  <td>Mother's Suffix</td>
  <td>MOMSUFF</td>
  <td>name.suffix , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>

</tbody>
</table>

</details>
<p></p>

### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>12</td>
  <td>Mother's Name Prior to First Marriage</td>
  <td>name , name.use = maiden</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-decedent-pregnancy-status-intro.md


### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>112</td>
  <td>Pregnancy</td>
  <td>PREG</td>
  <td>value</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-death-pregnancy-status-vs.html'>DeathPregnancyStatusVS</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>113</td>
  <td>If Female--Edit Flag: From EDR only</td>
  <td>PREG_BYPASS</td>
  <td>value.extension[BypassEditFlag].value</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-edit-bypass-012-vs.html'>EditBypass012VS</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>

### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>36</td>
  <td>Pregnancy Status</td>
  <td>value</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-decedent-spouse-intro.md


### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>144</td>
  <td>Spouse's First Name</td>
  <td>SPOUSEF</td>
  <td>name.given</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>145</td>
  <td>Husband's Surname/Wife's Maiden Last Name</td>
  <td>SPOUSEL</td>
  <td>name.family, name.use = maiden</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>197</td>
  <td>Spouse's Middle Name</td>
  <td>SPOUSEMIDNAME</td>
  <td>name.given , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>198</td>
  <td>Spouse's Suffix</td>
  <td>SPOUSESUFFIX</td>
  <td>name.suffix , name.use = official</td>
  <td>string</td>
  <td>-</td>
</tr>

</tbody>
</table>

</details>
<p></p>

### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>10</td>
  <td>Surviving Spouse's Name</td>
  <td>name</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-decedent-usual-work-intro.md

### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>84</td>
  <td>Occupation -- Literal</td>
  <td>OCCUP</td>
  <td>value.text</td>
  <td>string(40)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>86</td>
  <td>Industry -- Literal</td>
  <td>INDUST</td>
  <td>component [odh-UsualIndustry	].value.text</td>
  <td>string(40)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>94</td>
  <td>Occupation -- 4 digit Code</td>
  <td>OCCUPC4</td>
  <td>valueCodeableConcept.coding[occupationCDCCensus2018]</td>
  <td>codeable</td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8065'>PHVS_Occupation_CDC_Census2018VS</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>94</td>
  <td>Occupation -- 2018 Standard Occupational Classification (SOC)</td>
  <td>*NO IJE MAPPING*</td>
  <td>valueCodeableConcept.coding[occupationCDCSOC2018]</td>
  <td>codeable</td>
  <td><a href='http://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8068'>PHVS_Occupation_CDC_SOC2018</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>95</td>
  <td>Industry -- 4 digit Code</td>
  <td>INDUSTC4</td>
  <td>component[odh-UsualIndustry].valueCodeableConcept.coding[industryCDCCensus2018]</td>
  <td>codeable</td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8066'>PHVS_Industry_CDC_Census2018VS</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>95</td>
  <td>Industry -- North American Industry Classification System (NAICS)</td>
  <td>*NO IJE MAPPING*</td>
  <td>component[odh-UsualIndustry].valueCodeableConcept.coding[industryCDCNAICS2017]</td>
  <td>codeable</td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8067'>PHVS_Industry_CDC_NAICS2017</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>



---

// File: input/pagecontent/StructureDefinition-vrdr-demographic-coded-content-bundle-intro.md

  This bundle is information-content equivalent to the traditional NCHS MRE format.


  This bundle contains:
  * Coded Content:
    * Coded Race and Ethnicity - <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a>
  * Input Content:
    * Input Race and Ethnicity - <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a>
### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>3</td>
  <td>Certificate Number</td>
  <td>FILENO</td>
  <td>identifier.extension[certificateNumber].value</td>
  <td>string(6)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>5</td>
  <td>Auxiliary State file number</td>
  <td>AUXNO</td>
  <td>identifier.extension[auxiliaryStateIdentifier1].value</td>
  <td>string(12)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>121</td>
  <td>Auxiliary State file number</td>
  <td>AUXNO2</td>
  <td>identifier.extension[auxiliaryStateIdentifier2].value</td>
  <td>string(12)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>NA</td>
  <td>Death Record Identifier</td>
  <td>*NO IJE MAPPING*</td>
  <td>identifier.value</td>
  <td>string(12)</td>
  <td>YYYYJJNNNNNN,  YYYY = death year JJ = jurisdiction  and NNNNNN = certificate number</td>
</tr>

</tbody>
</table>

</details>
<p></p>



---

// File: input/pagecontent/StructureDefinition-vrdr-disposition-location-intro.md

Implementors are free to use the name field for the name of the disposition location.

### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>202</td>
  <td>State, U.S. Territory or Canadian Province of Disposition - code</td>
  <td>DISPSTATECD</td>
  <td>address.state</td>
  <td>string</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>203</td>
  <td>Disposition State or Territory - Literal</td>
  <td>DISPSTATE</td>
  <td>address.state (expanded from 2 letter code)</td>
  <td>string</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>204</td>
  <td>Disposition City - Code</td>
  <td>DISPCITYCODE</td>
  <td>address.city.extension[cityCode].value</td>
  <td>integer</td>
  <td>see <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#city-codes'>CityCodes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>205</td>
  <td>Disposition City - Literal</td>
  <td>DISPCITY</td>
  <td>address.city</td>
  <td>string</td>
  <td>-</td>
</tr>

</tbody>
</table>

</details>
<p></p>


### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>19</td>
  <td>Place of Disposition</td>
  <td>name</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>20</td>
  <td>Location-City, Town, and State</td>
  <td>address</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-entity-axis-cause-of-death-intro.md

### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>106</td>
  <td>Entity-axis codes</td>
  <td>EAC</td>
  <td>Each entry is a 4-tuple (value, component[position], component[lineNumber], component[e-code-indicator]) </td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-icd10-causes-of-death-vs.html'>ICD10CausesOfDeathVS</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>



---

// File: input/pagecontent/StructureDefinition-vrdr-examiner-contacted-intro.md


### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>172</td>
  <td>Was case Referred to Medical Examiner/Coroner?</td>
  <td>REFERRED</td>
  <td>value</td>
  <td>codeable</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>

### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>31</td>
  <td>Was Medical Examiner or Coroner Contacted?</td>
  <td>value</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-funeral-home-intro.md


### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>206</td>
  <td>Funeral Facility Name</td>
  <td>FUNFACNAME</td>
  <td>name</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>207</td>
  <td>Funeral Facility - Street number</td>
  <td>FUNFACSTNUM</td>
  <td>address.extension[stnum]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>208</td>
  <td>Funeral Facility - Pre Directional</td>
  <td>FUNFACPREDIR</td>
  <td>address.extension[predir]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>209</td>
  <td>Funeral Facility - Street name</td>
  <td>FUNFACSTRNAME</td>
  <td>address.extension[stname]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>210</td>
  <td>Funeral Facility - Street designator</td>
  <td>FUNFACSTRDESIG</td>
  <td>address.extension[stdesig]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>211</td>
  <td>Funeral Facility - Post Directional</td>
  <td>FUNPOSTDIR</td>
  <td>address.extension[postdir]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>212</td>
  <td>Funeral Facility - Unit or apt number</td>
  <td>FUNUNITNUM</td>
  <td>address.extension[unitnum]</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>213</td>
  <td>Long string address for Funeral Facility same as above but allows states to choose the way they capture information.</td>
  <td>FUNFACADDRESS</td>
  <td>address.line</td>
  <td>string</td>
  <td>address.line</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>214</td>
  <td>Funeral Facility - City or Town name</td>
  <td>FUNCITYTEXT</td>
  <td>address.city</td>
  <td>string</td>
  <td>address.city</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>215</td>
  <td>State, U.S. Territory or Canadian Province of Funeral Facility - code</td>
  <td>FUNSTATECD</td>
  <td>address.state</td>
  <td>string</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>216</td>
  <td>State, U.S. Territory or Canadian Province of Funeral Facility - literal</td>
  <td>FUNSTATE</td>
  <td>address.state (expanded from 2 letter code)</td>
  <td>string</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>217</td>
  <td>Funeral Facility - ZIP</td>
  <td>FUNZIP</td>
  <td>address.postalCode</td>
  <td>string</td>
  <td>-</td>
</tr>

</tbody>
</table>

</details>
<p></p>

### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>15</td>
  <td>Facility Name</td>
  <td>name</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>16</td>
  <td>City or Town, State, and Zip Code</td>
  <td>address</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>21</td>
  <td>Name and Complete Address of Funeral Facility</td>
  <td>name, address</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>23</td>
  <td>License Number</td>
  <td>identifier:NPI</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-injury-incident-intro.md


### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>114</td>
  <td>Date of injury--month</td>
  <td>DOI_MO</td>
  <td>effective.value</td>
  <td>dateTime</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>115</td>
  <td>Date of injury--day</td>
  <td>DOI_DY</td>
  <td>effective.value</td>
  <td>dateTime</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>116</td>
  <td>Date of injury--year</td>
  <td>DOI_YR</td>
  <td>effective.value</td>
  <td>dateTime</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>117</td>
  <td>Time of injury</td>
  <td>TOI_HR</td>
  <td>effective.value</td>
  <td>dateTime</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>118</td>
  <td>Injury at work</td>
  <td>WORKINJ</td>
  <td>component[workInjuryIndicator].value</td>
  <td>codeable</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-not-applicable-vr.html'>ValueSetYesNoUnknownNotApplicableVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>126</td>
  <td>Time of Injury Unit</td>
  <td>TOI_UNIT</td>
  <td>effective.value</td>
  <td>implicit</td>
  <td></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>173</td>
  <td>Place of Injury- literal</td>
  <td>POILITRL</td>
  <td>component[placeOfInjury].value.text</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>174</td>
  <td>Describe How Injury Occurred</td>
  <td>HOWINJ</td>
  <td>value.text</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>175</td>
  <td>If Transportation Accident, Specify</td>
  <td>TRANSPRT</td>
  <td>component[transportationRole].value.  (if value.code = OTH) the role should be specified in value.text)</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-transportation-incident-role-vs.html'>TransportationIncidentRoleVS</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>

### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>38</td>
  <td>Date of Injury</td>
  <td>effective</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>39</td>
  <td>Time of Injury</td>
  <td>effective</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>40</td>
  <td>Place of Injury</td>
  <td>component[placeOfInjury].value.text</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>41</td>
  <td>Injury at Work?</td>
  <td>component[workInjuryIndicator].value</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>43</td>
  <td>Describe How Injury Occurred</td>
  <td>value.text</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
<tr>
  <td style='text-align: center'>44</td>
  <td>If Transportation Injury, Specify</td>
  <td>component[transportationRole].value</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-injury-location-intro.md


### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>176</td>
  <td>County of Injury - literal</td>
  <td>COUNTYTEXT_I</td>
  <td>address.district</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>177</td>
  <td>County of Injury code</td>
  <td>COUNTYCODE_I</td>
  <td>address.district.extension[districtCode].value</td>
  <td>integer</td>
  <td>see <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#county-codes'>CountyCodes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>178</td>
  <td>Town/city of Injury - literal</td>
  <td>CITYTEXT_I</td>
  <td>address.city</td>
  <td>string</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>179</td>
  <td>Town/city of Injury code</td>
  <td>CITYCODE_I</td>
  <td>address.city.extension[cityCode].value</td>
  <td>integer</td>
  <td>see <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#city-codes'>CityCodes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>180</td>
  <td>State, U.S. Territory or Canadian Province of Injury - code</td>
  <td>STATECODE_I</td>
  <td>address.state</td>
  <td>string</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>181</td>
  <td>Place of injury. Longitude</td>
  <td>LONG_I</td>
  <td>position.longitude</td>
  <td>float</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>182</td>
  <td>Place of injury. Latitude</td>
  <td>LAT_I</td>
  <td>position.latitude</td>
  <td>float</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>237</td>
  <td>State, U.S. Territory or Canadian Province of Injury - literal</td>
  <td>STINJURY</td>
  <td>address.state (expanded from 2 letter code)</td>
  <td>string</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>

### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>42</td>
  <td>Location of Injury</td>
  <td>address</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-manner-of-death-intro.md

A reference to the <a href='StructureDefinition-vrdr-certifier.html'>Certifier</a> may be provided through the performer field.

### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>100</td>
  <td>Manner of Death</td>
  <td>MANNER</td>
  <td>value</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-manner-of-death-vs.html'>MannerOfDeathVS</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>


### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>37</td>
  <td>Manner of Death</td>
  <td>value</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/StructureDefinition-vrdr-manual-underlying-cause-of-death-intro.md

### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>104</td>
  <td>Manual Underlying Cause</td>
  <td>MAN_UC</td>
  <td>value</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-icd10-causes-of-death-vs.html'>ICD10CausesOfDeathVS</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>



---

// File: input/pagecontent/StructureDefinition-vrdr-mortality-roster-bundle-intro.md

### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality Roster </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>15</td>
  <td>State File Number</td>
  <td>FILENO</td>
  <td>identifier.extension[certificateNumber].value</td>
  <td>string(6)</td>
  <td>-</td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>33</td>
  <td>Alias Record Flag</td>
  <td>ALIAS</td>
  <td>meta.extension[aliasStatus].value</td>
  <td>boolean</td>
  <td></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>34</td>
  <td>Replacement Record Flag</td>
  <td>REPLACE</td>
  <td>meta.extension[replaceStatus].value</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-replace-status-vs.html'>ReplaceStatusVS</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality Roster</td>
  <td>NA</td>
  <td>Death Record Identifier</td>
  <td>*NO IJE MAPPING*</td>
  <td>identifier.value</td>
  <td>string(12)</td>
  <td>YYYYJJNNNNNN,  YYYY = death year JJ = jurisdiction  and NNNNNN = certificate number</td>
</tr>

</tbody>
</table>

</details>
<p></p>



---

// File: input/pagecontent/StructureDefinition-vrdr-place-of-injury-intro.md

This profile is used to provide the coded Place of Injury.  The Observation.value must provide a value from <a href='ValueSet-vrdr-place-of-injury-vs.html'>PlaceOfInjuryVS</a> which corresponds to the TRX codes provided by NCHS.  In addition, backwards compatibility with the SuperMICAR places of injury is supported with an optional code from the <a href='ValueSet-vrdr-place-of-injury-other-vs.html'>PlaceOfInjuryOtherVS</a> valueset, which corresponds to additional place values.   The SuperMICAR value should only be provided when the coded place is 'Other'.  This backwards compatibility is provided for the convenience of jurisdictions. NCHS does not generate SuperMICAR codes.
### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>103</td>
  <td>Place of Injury (computer generated)</td>
  <td>INJPL</td>
  <td>value</td>
  <td>codeable</td>
  <td>A code from <a href='ValueSet-vrdr-place-of-injury-vs.html'>PlaceOfInjuryVS</a> is required, an optional code from <a href='ValueSet-vrdr-place-of-injury-other-vs.html'>PlaceOfInjuryOtherVS</a> can also be provided when the primary code is Other.</td>
</tr>

</tbody>
</table>

</details>
<p></p>



---

// File: input/pagecontent/StructureDefinition-vrdr-record-axis-cause-of-death-intro.md



   Additional information on Record Axis Cause of death can be found in the case of multiple causes of death can be found in this CDC [publication](https://www.cdc.gov/nchs/data/dvs/Multiple-Cause-Record-Layout-2020.pdf)
.  Previously a subset of records classified to ICD-10 CHAPTER XV - Pregnancy, childbirth and the puerperium (O00-O99) were flagged by the presence of a '1' in the 5th position of the 2nd condition (position = 2).
These are instances where a decedent < 45 years of age has been classified as a maternal
death using input from the information entered in the <a href='StructureDefinition-vrdr-decedent-pregnancy-status.html'>DecedentPregnancyStatus</a>, and the 2nd condition represents the cause of death
to which the given record would be classified had the causes of death been processed without [National Vital Statistics Reports Volume 69, Number 2 January, 2020 (cdc.gov)](https://www.cdc.gov/nchs/data/nvsr/nvsr69/nvsr69-02-508.pdf).


In the FHIR encoding, in lieu of using the 5th position of the ICD10 code, a flag has been added to each Record Cause of Death condition that should be set to true in these cases, and should be absent or false elsewhere.
### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>108</td>
  <td>Record-axis codes</td>
  <td>RAC</td>
  <td>Each entry is a 3-tuple (value, component[position], component[WouldBeUnderlyingCauseOfDeathWithoutPregnancy])</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-icd10-causes-of-death-vs.html'>ICD10CausesOfDeathVS</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>



---

// File: input/pagecontent/StructureDefinition-vrdr-surgery-date-intro.md

### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>123</td>
  <td>Surgery Date--month</td>
  <td>SUR_MO</td>
  <td>value</td>
  <td>dateTime</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>124</td>
  <td>Surgery Date--day</td>
  <td>SUR_DY</td>
  <td>value</td>
  <td>dateTime</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>125</td>
  <td>Surgery Date--year</td>
  <td>SUR_YR</td>
  <td>value</td>
  <td>dateTime</td>
  <td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>



---

// File: input/pagecontent/StructureDefinition-vrdr-tobacco-use-contributed-to-death-intro.md


### IJE Mapping

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>111</td>
  <td>Did Tobacco Use Contribute to Death?</td>
  <td>TOBAC</td>
  <td>value</td>
  <td>codeable</td>
  <td><a href='ValueSet-vrdr-contributory-tobacco-use-vs.html'>ContributoryTobaccoUseVS</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>

### Form Mapping
<details>

<summary>

<strong class='context-menu' >Form Mapping</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Item #</strong></th>
    <th><strong>Form Field</strong></th>
    <th><strong>FHIR Profile Field</strong></th>
    <th><strong>Reference</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>35</td>
  <td>Did Tobacco Use Contribute to Death?</td>
  <td>value</td>
  <td><a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'> Certificate of Death</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/SurveillanceDataDictionary.md

### Surveillance Data Dictionary

| **Description**   |  **IJE Name**  | **Profile**  |  **Field**  |  **Type**  | **Value Set**  |
| --------- |  ---------- | :------------: | ---------- | ---------- | -------------- |
 | Was Autopsy performed | AUTOP| [AutopsyPerformedIndicator]| value | codeable | [YesNoUnknownVS] | 
 | Were Autopsy Findings Available to Complete the Cause of Death? | AUTOPF| [AutopsyPerformedIndicator]| component[ autopsyPerformedIndicator ].value | codeable | [YesNoUnknownNotApplicableVS] | 
 | Cause of Death Part I Line a (literal) | COD1A| [CauseOfDeathPart1]| value.text,   component[lineNumber] = 1 | string(120) | - | 
 | Cause of Death Part I Line a (coded) | *NO IJE MAPPING*| [CauseOfDeathPart1]| value.coding,   component[lineNumber] = 1 | codeable | [ICD10CausesOfDeathVS] | 
 | Cause of Death Part I Interval, Line a | INTERVAL1A - optional| [CauseOfDeathPart1]| component[interval].value, component[lineNumber] = 1 | string(20) | - | 
 | Cause of Death Part I Line b (literal) | COD1B| [CauseOfDeathPart1]| value.text,   component[lineNumber] = 2 | string(120) | - | 
 | Cause of Death Part I Line b (coded) | *NO IJE MAPPING*| [CauseOfDeathPart1]| value.coding,   component[lineNumber] = 2 | codeable | [ICD10CausesOfDeathVS] | 
 | Cause of Death Part I Interval, Line b | INTERVAL1B| [CauseOfDeathPart1]| component[interval].value, component[lineNumber] = 2 | string(20) | - | 
 | Cause of Death Part I Line c (literal) | COD1C| [CauseOfDeathPart1]| value.text,   component[lineNumber] = 3 | string(120) | - | 
 | Cause of Death Part I Line c (coded) | *NO IJE MAPPING*| [CauseOfDeathPart1]| value.coding,   component[lineNumber] = 3 | codeable | [ICD10CausesOfDeathVS] | 
 | Cause of Death Part I Interval, Line c | INTERVAL1C| [CauseOfDeathPart1]| component[interval].value, component[lineNumber] = 3 | string(20) | - | 
 | Cause of Death Part I Line d (literal) | COD1D| [CauseOfDeathPart1]| value.text,   component[lineNumber] = 4 | string(120) | - | 
 | Cause of Death Part I Line d (coded) | *NO IJE MAPPING*| [CauseOfDeathPart1]| value.coding,   component[lineNumber] = 4 | codeable | [ICD10CausesOfDeathVS] | 
 | Cause of Death Part I Interval, Line d | INTERVAL1D| [CauseOfDeathPart1]| component[interval].value, component[lineNumber] = 4 | string(20) | - | 
 | Cause of Death Part II (literal) | OTHERCONDITION| [CauseOfDeathPart2]| value.text | string(240) | - | 
 | Cause of Death Part II (coded) | *NO IJE MAPPING*| [CauseOfDeathPart2]| value.coding | codeable | [ICD10CausesOfDeathVS] | 
 | Source flag: paper/electronic | MFILED| [DeathCertificate]| extension[ filingFormat]  | codeable |  [FilingFormatVS] | 
 | Date of Registration--Year | DOR_YR| [DeathCertificate]| date | dateTime | - | 
 | Date of Registration--Month | DOR_MO| [DeathCertificate]| date | dateTime | - | 
 | Date of Registration--Day | DOR_DY| [DeathCertificate]| date | dateTime | - | 
 | State Specific Data  | STATESP| [DeathCertificate]| extension[ stateSpecificField] | string(30) | - | 
 | Replacement Record  | REPLACE| [DeathCertificate]| extension[replaceStatus].value | codeable | [ReplaceStatusVS] | 
 | Death Record Identifier | *NO IJE MAPPING*| [DeathCertificateDocument]| identifier.value | string(12) | YYYYJJNNNNNN,  YYYY = death year JJ = jurisdiction  and NNNNNN = certificate number | 
 | Certificate Number | FILENO| [DeathCertificateDocument]| identifier.extension[ certificateNumber].value | string(6) | - | 
 | Auxiliary State file number | AUXNO| [DeathCertificateDocument]| identifier.extension[auxiliaryStateIdentifier1].value | string(12) | - | 
 | Auxiliary State file number | AUXNO2| [DeathCertificateDocument]| identifier.extension[auxiliaryStateIdentifier2].value | string(12) | - | 
 | Date of Death--Year | DOD_YR| [DeathDate]| value | dateTime | Required for processing | 
 | Place of Death | DPLACE| [DeathDate]| component[placeOfDeath].value | codeable | [PlaceOfDeathVS] | 
 | Date of Death--Month | DOD_MO| [DeathDate]| value | dateTime | See [PartialDatesAndTimes] | 
 | Date of Death--Day | DOD_DY| [DeathDate]| value | dateTime | See [PartialDatesAndTimes] | 
 | Time of Death | TOD| [DeathDate]| value | dateTime | See [PartialDatesAndTimes] | 
 | Person Pronouncing Date Signed | PPDATESIGNED| [DeathDate]| component[datetimePronouncedDead	].value | dateTime | - | 
 | Person Pronouncing Time Pronounced | PPTIME| [DeathDate]| component[datetimePronouncedDead].value | dateTime | - | 
 | Title of Certifier | CERTL| [DeathCertification]| performer.function (note that if value is "OTH" then performed.function.text should contain 'Full Text for Other Individual Legally Allowed to Certify') | codeable | [CertifierTypesVS] | 
 | Certifier Date Signed | CERTDATE| [DeathCertification]| performed | dateTime | - | 
 | State, U.S. Territory or Canadian Province of Death - code | DSTATE| [DeathLocation]| address.state or address.state.extension[nationalReportingJurisdictionId ] | codeable | [StatesTerritoriesProvincesVS] in state field or [JurisdictionVS] in extension | 
 | County of Death Occurrence | COD| [DeathLocation]| address.district.extension[countyCode] | integer | see [CountyCodes] | 
 | Death Institution name | DINSTI| [DeathLocation]| name | string  | - | 
 | Long String address for place of death | ADDRESS_D| [DeathLocation]| address.line | string  | - | 
 | Place of death. Street number | STNUM_D| [DeathLocation]| address.extension[stnum] | string | - | 
 | Place of death. Pre Directional | PREDIR_D| [DeathLocation]| address.extension[predir] | string | - | 
 | Place of death. Street name | STNAME_D| [DeathLocation]| address.extension[stname] | string | - | 
 | Place of death. Street designator | STDESIG_D| [DeathLocation]| address.extension[stdesig] | string | - | 
 | Place of death. Post Directional | POSTDIR_D| [DeathLocation]| address.extension[postdir] | string | - | 
 | Place of death. City or Town name | CITYTEXT_D| [DeathLocation]| address.city | string | - | 
 | Place of death. State name literal | STATETEXT_D| [DeathLocation]| address.state (expanded from 2 letter code) | string | - | 
 | Place of death. Zip code | ZIP9_D| [DeathLocation]| address.postalCode | string | - | 
 | Place of death. County of Death | COUNTYTEXT_D| [DeathLocation]| address.district | string | - | 
 | Place of death. City FIPS code | CITYCODE_D| [DeathLocation]| address.city.extension[ cityCode] | integer | see [CityCodes] | 
 | Place of death. Longitude | LONG_D| [DeathLocation]| position.longitude | float | - | 
 | Place of Death. Latitude | LAT_D| [DeathLocation]| position.latitude | float | - | 
 | Country of Death - Code | DTHCOUNTRYCD| [DeathLocation]| address.country  | string  | [ResidenceCountryVS].  Note: For US Death certificates should be US | 
 | Country of Death - Literal | DTHCOUNTRY| [DeathLocation]| address.country  (expanded from 2 letter code) | string  | See [CountryLIterals].   Not used. For US Death certificates should be 'United States'. | 
 | Decedent's Legal Name--Given  | GNAME| [Decedent]| name.given , name.use = official | string | - | 
 | Decedent's Legal Name--Middle | MNAME| [Decedent]| name.given , name.use = official (first letter) | string | - | 
 | Decedent's Legal Name--Last | LNAME| [Decedent]| name.family , name.use = official | string | - | 
 | Decedent's Legal Name--Suffix | SUFF| [Decedent]| name.suffix , name.use = official | string | - | 
 | Sex | SEX| [Decedent]| extension[NVSS-SexAtDeath]  | codeable | [AdministrativeGenderVS] | 
 | Social Security Number | SSN| [Decedent]| identifier.value where system = 'http://hl7.org/fhir/sid/us-ssn and type.coding.code="SB" | string | - | 
 | Date of Birth--Year | DOB_YR| [Decedent]| birthDate | dateTime | See [PartialDatesAndTimes] | 
 | Date of Birth--Month | DOB_MO| [Decedent]| birthDate | dateTime | See [PartialDatesAndTimes] | 
 | Date of Birth--Day | DOB_DY| [Decedent]| birthDate | dateTime | See [PartialDatesAndTimes] | 
 | Birthplace--Country | BPLACE_CNT| [Decedent]| extension[patient-birthPlace].value[x].country  | string | [BirthplaceCountryVS] | 
 | State, U.S. Territory or Canadian Province of Birth - code | BPLACE_ST| [Decedent]| extension[patient-birthPlace].value[x].state | string | [StatesTerritoriesProvincesVS] | 
 | Decedent's Residence--City | CITYC| [Decedent]| address.city.extension[ cityCode ] | string | see [CityCodes] | 
 | Decedent's Residence--County | COUNTYC| [Decedent]| address.district.extension[ countyCode ] | string | see [CountyCodes] | 
 | State, U.S. Territory or Canadian Province of Decedent's residence - code | STATEC| [Decedent]| address.state | string | [StatesTerritoriesProvincesVS] | 
 | Decedent's Residence--Country | COUNTRYC| [Decedent]| address.country | string | [ResidenceCountryVS] | 
 | Decedent's Residence--Inside City Limits | LIMITS| [Decedent]| address.city.extension[ withinCityLimits]  | codeable | [YesNoUnknownVS] | 
 | Marital Status | MARITAL| [Decedent]| maritalStatus | codeable |  [MaritalStatusVS] | 
 | Decedent's spouse living at decedent's DOD? | SPOUSELV| [Decedent]| extension[SpouseAlive]  | codeable |  [SpouseAliveVS] | 
 | Decedent's Residence - Street number | STNUM_R| [Decedent]| address.extension[stnum] | string | - | 
 | Decedent's Residence - Pre Directional | PREDIR_R| [Decedent]| address.extension[predir] | string | - | 
 | Decedent's Residence - Street name | STNAME_R| [Decedent]| address.extension[stname] | string | - | 
 | Decedent's Residence - Street designator | STDESIG_R| [Decedent]| address.extension[stdesig] | string | - | 
 | Decedent's Residence - Post Directional | POSTDIR_R| [Decedent]| address.extension[postdir] | string | - | 
 | Decedent's Residence - Unit or apt number | UNITNUM_R| [Decedent]| address.extension[unitnum] | string | - | 
 | Decedent's Residence - City or Town name | CITYTEXT_R| [Decedent]| address.city | string | - | 
 | Decedent's Residence - ZIP code | ZIP9_R| [Decedent]| address.postalCode | string | - | 
 | Decedent's Residence - County | COUNTYTEXT_R| [Decedent]| address.district | string | - | 
 | Decedent's Residence - State name | STATETEXT_R | [Decedent]| address.state (expanded from 2 letter code) | string | See [StateLiterals] | 
 | Decedent's Residence - COUNTRY name | COUNTRYTEXT_R| [Decedent]| address.country (expanded from 2 letter code) | string | See [CountryLiterals] | 
 | Long string address for decedent's place of residence same as above but allows states to choose the way they capture information. | ADDRESS_R| [Decedent]| address.line[0] | string | - | 
 | Middle Name of Decedent  | DMIDDLE| [Decedent]| name.given , name.use = official | string | - | 
 | Decedent's Maiden Name | DMAIDEN| [Decedent]| name.text , name.use=maiden | string | - | 
 | Decedent's Birth Place City - Code | DBPLACECITYCODE| [Decedent]| extension[patient-birthPlace].value[x].city.extension[ cityCode] | integer | see [CityCodes] | 
 | Decedent's Birth Place City - Literal | DBPLACECITY| [Decedent]| extension[patient-birthPlace].value[x].city | string | - | 
 | Informant's Relationship | INFORMRELATE| [Decedent]| contact.type.text  | string (30 characters) | - | 
 | State, U.S. Territory or Canadian Province of Birth - literal | STATEBTH| [Decedent]| extension[patient-birthPlace].value[x].state or extension[patient-birthPlace].value[x].state.extension[ nationalReportingJurisdictionId] if present    (expanded from 2 letter code) | string | See [StateLiterals] | 
 | Marital Descriptor | MARITAL_DESCRIP| [Decedent]| maritalStatus.text  | string | - | 
 | Decedent's Age--Type | AGETYPE| [DecedentAge]| valueQuantity.code | codeable | [UnitsOfAgeVS] | 
 | Decedent's Age--Units | AGE | [DecedentAge]| valueQuantity.value | decimal | - | 
 | Decedent's Age--Edit Flag | AGE_BYPASS| [DecedentAge]| value.extension[BypassEditFlag].value | codeable | [EditBypass01VS] | 
 | Father's Surname | FLNAME| [DecedentFather]| name.family | string | - | 
 | Father's First Name | DDADF| [DecedentFather]| name.given , name.use = official | string | - | 
 | Father's Middle Name | DDADMID| [DecedentFather]| name.given , name.use = official | string | - | 
 | Father's Suffix | FATHERSUFFIX| [DecedentFather]| name.suffix , name.use = official | string | - | 
 | Mother's First Name | DMOMF| [DecedentMother]| name.given , name.use = official | string | - | 
 | Mother's Middle Name | DMOMMID| [DecedentMother]| name.given , name.use = official | string | - | 
 | Mother's Maiden Surname | DMOMMDN| [DecedentMother]| name.family , name.type=maiden | string  | - | 
 | Mother's Suffix | MOTHERSSUFFIX| [DecedentMother]| name.suffix , name.use = official | string | - | 
 | Spouse's First Name | SPOUSEF| [DecedentSpouse]| name.given | string | - | 
 | Husband's Surname/Wife's Maiden Last Name | SPOUSEL | [DecedentSpouse]| name.family, name.use = maiden | string | - | 
 | Spouse's Middle Name | SPOUSEMIDNAME| [DecedentSpouse]| name.given , name.use = official | string | - | 
 | Spouse's Suffix | SPOUSESUFFIX| [DecedentSpouse]| name.suffix , name.use = official | string | - | 
 | Pregnancy | PREG| [DecedentPregnancyStatus]| value | codeable | [PregnancyStatusVS] | 
 | Date of injury--month | DOI_MO| [InjuryIncident]| effective | dateTime | See [PartialDatesAndTimes] | 
 | Date of injury--day | DOI_DY| [InjuryIncident]| effective | dateTime | See [PartialDatesAndTimes] | 
 | Date of injury--year | DOI_YR| [InjuryIncident]| effective | dateTime | See [PartialDatesAndTimes] | 
 | Time of injury | TOI_HR| [InjuryIncident]| effective | dateTime | See [PartialDatesAndTimes] | 
 | Injury at work | WORKINJ| [InjuryIncident]| component[InjuryAtWork].value | codeable | [YesNoUnknownNotApplicableVS] | 
 | Time of Injury Unit | TOI_UNIT| [InjuryIncident]| effective | implicit |  | 
 | Place of Injury- literal | POILITRL| [InjuryIncident]| component[ placeOfInjury ].value.text | string | - | 
 | Describe How Injury Occurred | HOWINJ| [InjuryIncident]| value.text | string | - | 
 | If Transportation Accident, Specify | TRANSPRT| [InjuryIncident]| component[ transportationRole ].value.  (if value.code = OTH) the role should be specified in value.text) | codeable | [TransportationIncidentRoleVS] | 
 | County of Injury - literal | COUNTYTEXT_I| [InjuryLocation]| address.district | string | - | 
 | County of Injury code | COUNTYCODE_I| [InjuryLocation]| address.district.extension[ countyCode].value | integer | see [CountyCodes] | 
 | Town/city of Injury - literal | CITYTEXT_I| [InjuryLocation]| address.city | string | - | 
 | Town/city of Injury code | CITYCODE_I| [InjuryLocation]| address.city.extension[ cityCode].value | integer | see [CityCodes] | 
 | State, U.S. Territory or Canadian Province of Injury - code | STATECODE_I| [InjuryLocation]| address.state | string | [StatesTerritoriesProvincesVS] | 
 | Place of injury. Longitude | LONG_I| [InjuryLocation]| position.longitude | float | - | 
 | Place of injury. Latitude | LAT_I| [InjuryLocation]| position.latitude | float | - | 
 | State, U.S. Territory or Canadian Province of Injury - literal | STINJURY| [InjuryLocation]| address.state (expanded from 2 letter code) | string | See [StateLiterals] | 
 | Decedent of Hispanic Origin?--Mexican | DETHNIC1| [InputRaceAndEthnicity]| component[ HispanicMexican].valueCoding | codeable | [HispanicNoUnknownVS] | 
 | Decedent of Hispanic Origin?--Puerto Rican | DETHNIC2| [InputRaceAndEthnicity]| component[ HispanicPuertoRican].valueCoding | codeable | [HispanicNoUnknownVS] | 
 | Decedent of Hispanic Origin?--Cuban | DETHNIC3| [InputRaceAndEthnicity]| component[ HispanicCuban ].valueCoding | codeable | [HispanicNoUnknownVS] | 
 | Decedent of Hispanic Origin?--Other | DETHNIC4| [InputRaceAndEthnicity]| component[ HispanicOther ].valueCoding | codeable | [HispanicNoUnknownVS] | 
 | Decedent of Hispanic Origin?--Other, Literal | DETHNIC5| [InputRaceAndEthnicity]| component[ HispanicLiteral ].valueString | string | - | 
 | Decedent's Race--White | RACE1| [InputRaceAndEthnicity]| component[ White].valueBoolean | boolean | - | 
 | Decedent's Race--Black or African American | RACE2| [InputRaceAndEthnicity]| component[ BlackOrAfricanAmerican].valueBoolean | boolean | - | 
 | Decedent's Race--American Indian or Alaska Native | RACE3| [InputRaceAndEthnicity]| component[ AmericanIndianOrAlaskanNative].valueBoolean | boolean | - | 
 | Decedent's Race--Asian Indian | RACE4| [InputRaceAndEthnicity]| component[ AsianIndian].valueBoolean | boolean | - | 
 | Decedent's Race--Chinese | RACE5| [InputRaceAndEthnicity]| component[ Chinese].valueBoolean | boolean | - | 
 | Decedent's Race--Filipino | RACE6| [InputRaceAndEthnicity]| component[ Filipino].valueBoolean | boolean | - | 
 | Decedent's Race--Japanese | RACE7| [InputRaceAndEthnicity]| component[ Japanese].valueBoolean | boolean | - | 
 | Decedent's Race--Korean | RACE8| [InputRaceAndEthnicity]| component[ Korean].valueBoolean | boolean | - | 
 | Decedent's Race--Vietnamese | RACE9| [InputRaceAndEthnicity]| component[ Vietnamese].valueBoolean | boolean | - | 
 | Decedent's Race--Other Asian | RACE10| [InputRaceAndEthnicity]| component[ OtherAsian].valueBoolean | boolean | - | 
 | Decedent's Race--Native Hawaiian | RACE11| [InputRaceAndEthnicity]| component[ NativeHawaiian].valueBoolean | boolean | - | 
 | Decedent's Race--Guamanian or Chamorro | RACE12| [InputRaceAndEthnicity]| component[ GuamanianOrChamorro].valueBoolean | boolean | - | 
 | Decedent's Race--Samoan | RACE13| [InputRaceAndEthnicity]| component[ Samoan].valueBoolean | boolean | - | 
 | Decedent's Race--Other Pacific Islander | RACE14| [InputRaceAndEthnicity]| component[ OtherPacificIslander].valueBoolean | boolean | - | 
 | Decedent's Race--Other | RACE15| [InputRaceAndEthnicity]| component[ OtherRace].valueBoolean | boolean | - | 
 | Decedent's Race--First American Indian or Alaska Native Literal | RACE16| [InputRaceAndEthnicity]| component[ AmericanIndianorAlaskanNativeLiteral1].valueString | string | - | 
 | Decedent's Race--Second American Indian or Alaska Native Literal | RACE17| [InputRaceAndEthnicity]| component[ AmericanIndianorAlaskanNativeLiteral2].valueString | string | - | 
 | Decedent's Race--First Other Asian Literal | RACE18| [InputRaceAndEthnicity]| component[ OtherAsianLiteral1].valueString | string | - | 
 | Decedent's Race--Second Other Asian Literal | RACE19| [InputRaceAndEthnicity]| component[ OtherAsianLiteral2].valueString | string | - | 
 | Decedent's Race--First Other Pacific Islander Literal | RACE20| [InputRaceAndEthnicity]| component[ OtherPacificIslandLiteral1].valueString | string | - | 
 | Decedent's Race--Second Other Pacific Islander Literal | RACE21| [InputRaceAndEthnicity]| component[ OtherPacificIslandLiteral2].valueString | string | - | 
 | Decedent's Race--First Other Literal | RACE22| [InputRaceAndEthnicity]| component[ OtherRaceLiteral1].valueString | string | - | 
 | Decedent's Race--Second Other Literal | RACE23| [InputRaceAndEthnicity]| component[ OtherRaceLiteral2].valueString | string | - | 
 | Decedent's Race--Missing | RACE_MVR| [InputRaceAndEthnicity]| component[ MissingValueReason].valueCoding | codeable | [RaceMissingValueReasonVS]  | 
 | Manner of Death | MANNER| [MannerOfDeath]| value | codeable | [MannerOfDeathVS] | 
 | Surgery Date--month | SUR_MO| [SurgeryDate]| value | dateTime | See [PartialDatesAndTimes] | 
 | Surgery Date--day | SUR_DY| [SurgeryDate]| value | dateTime | See [PartialDatesAndTimes] | 
 | Surgery Date--year | SUR_YR| [SurgeryDate]| value | dateTime | See [PartialDatesAndTimes] | 
 | Did Tobacco Use Contribute to Death? | TOBAC| [TobaccoUseContributedToDeath]| value | codeable | [ContributoryTobaccoUseVS] | 
 | Place of Injury (computer generated) | INJPL| [PlaceOfInjury]| value | codeable | [PlaceOfInjuryVS] | 
{: .grid }
{% include markdown-link-references.md %}


---

// File: input/pagecontent/transitions_documentation.md


### Note

Below are descriptions for each of the headers found in the transition tables. The tables are meant to describe changes to resources and their movements between IGs.

| **Field Name** | **Description** |
| :-----------: | :-----------: |
| Name | Name of the resource (past or present) |
| Previous Version/Location | Previous location of resource (links to past version) |
| Current Version/Location | Current location of resource (links to current version) |
| Comments/Updates  | Description of changes specific to the resource | 
{: .grid }

---

// File: input/pagecontent/usage.md

### Miscellaneous Comments
* *Missing or Required Data*:  The resources in this IG are designed to support a variety of use cases, each with its own rules about what data elements are required.  The focus on this IG has been how to represent data elements used in death reporting, not whether a particular data element is required in a particular exchange.  This IG has a high degree of optionality among and within its data profiles.  Implementers of this IG should specify their own rules for missing or required data elements. 
* *Guidance on Must Support*:  Pursuant to the above-described high level of optionality in this IG, no additonal must-support flags have been specified beyond those established by the US Core base profiles.   Use-case specific business rules that are outside of this IG will be used by recipients of data to determine if necessary data is missing.
* *Support for Legacy Inter-Jurisdictional Exchange (IJE) fields*:
    * This IG aims to support all data elements in use for exchange of death records among jurisdictional vital records offices, and between vital records offices and NCHS.   
    * The mapping of data elements to FHIR data elements is provided by [data dictionaries](DeathRecordDataDictionary.html).   Any data element for which there was any evidence of use was mapped.   
    * 
    Some data elements have been [deprecated](https://build.fhir.org/ig/HL7/vrdr/DeathRecordDataDictionary.html#not-implemented-content), and are not supported. 

### Usage Notes in Vital Records Common Library
Usage notes for extensions that have been transitioned from VRDR to VRCL are found in [VRCL's usage page]({{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html).

### Alias, Replace, Void Actions
The ALIAS and VOID IJE fields are used to direct an action be performed on a death record.  These actions are now specified through message types in the accompanying Vital Records Messaging Implementation Guide message descriptions for [Alias](https://build.fhir.org/ig/nightingaleproject/vital_records_fhir_messaging_ig/branches/main/message.html#alias) and [Void](https://build.fhir.org/ig/nightingaleproject/vital_records_fhir_messaging_ig/branches/main/message.html#void).  Sending a replacement death record is also specified through the [Replace](https://build.fhir.org/ig/nightingaleproject/vital_records_fhir_messaging_ig/branches/main/message.html#replace) message type, but the status of the replacement is mapped to the VRDR IG (see [DeathCertificate]).

### Local Time
All event times should be recorded as the local time and local time zone where they took place.

### Decedent Name
Profile conformance requires that either a first, last, or middle name be provided based on US Core requirements.  If no name components are available, a data absent reason should be provided for at least one name component in order to conform to the profile requirements.

NCHS submission requires only a last name. Last name is required for NCHS submission.  If the decedent's legal name is unknown, name.family should be reported as 'UNKNOWN', or omitted. Placeholder names such as 'John Doe' or 'Jane Doe' should not be reported.

### Birthplace State and Country
Recording birthplace state and country is described in [Instruction Manual Part 8a (2004), Section I](https://www.cdc.gov/nchs/data/dvs/imp8a_printversion_112706.pdf).

| **address.country** | **address.state** | **BPLACE_CNT** | **BPLACE_ST** | **Comment** | 
| ------------------- | ----------------- | -------------- | ------------- | ----------- | 
| US or CA | Valid 2-letter state | Same as FHIR | Same as FHIR | &nbsp; 
| US  | Invalid code, Blank, or UNK | US  | ZZ  |  UNK is equivalent to ZZ. | 
| CA  | Invalid, Blank, or UNK | CA  | XX  |  | 
| Other valid country code (except ZZ, and obviously US and CA) | All values. | Same as FHIR | XX  |  | 
| ZZ or other invalid values | All values. | ZZ  | ZZ  | ZZ is a valid country code in the valueset. | 
{: .grid }

{% include markdown-link-references.md %}



---

// File: input/pagecontent/vrdr_fhir_ig_uml_data_model.md

The [VRDR FHIR IG UML Data Model](http://www.hl7.org/documentcenter/public/wg/pher/Profile%20Structural%20Definitions.png) is a graphical representation of the VRDR FHIR IG resource profile structural definitions. The diagram uses the Unified Modeling Language (UML) notation wherein each class represents a resource profile, attributes represent constrained resource elements, and relationships represent directed references from one profile to another. The color scheme used for classes are based upon the partitioning of the IG into four profile groups.

<center>
	<table><tr><td><img src="Profile Structural Definitions.png" style="width:100%;"/></td></tr></table>
	</center>

---

// File: input/pagecontent/vrdr_forms_mapping.md

<style>
    table.style1 { 
        border-collapse: collapse; 
        width: 100%; 
        table-layout: fixed;
    }  
    table.style1 tbody tr {
    border-bottom: 1px solid #dddddd;
    } 
    table.style1 tbody tr:nth-of-type(even) { 
        background-color: #f3f3f3; 
    } 
    table.style1 tbody tr:last-of-type {
    border-bottom: 2px solid #98c1d9;
    }
    </style>
This page provides the mapping from standard forms and worksheets used to exchange death information to the FHIR resources as defined in this IG.

This IG supports communicating information from an EHR system to the jurisdictional vital records offices and to NCHS for standard reporting forms:
 * [U.S. Standard Certificate Of Death](https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf) ([see table](vrdr_forms_mapping.html#us-standard-certificate-of-death-mapping))

Information on updates to the death forms can be found at NVSS [Revisions of the U.S. Standard Certificates and Reports](https://www.cdc.gov/nchs/nvss/revisions-of-the-us-standard-certificates-and-reports.htm)

### <a href='https://www.cdc.gov/nchs/data/dvs/DEATH11-03final-ACC.pdf'>U.S. Standard Certificate of Death Mapping</a>

<table  align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<thead>
  <tr>
    <td style='background-color:#98c1d9; text-align: center; width: 5%;'><b>Item #</b></td>
    <td style='background-color:#98c1d9; width: 25%;'><b>Form Element</b></td>
    <td style='background-color:#98c1d9; width: 25%;'><b>FHIR Profile</b></td>
    <td style='background-color:#98c1d9; width: 20%;'><b>FHIR Field</b></td>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>1</td>
  <td>Decedent's Legal Name</td>
  <td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td>
  <td>name</td>
</tr>
<tr>
  <td style='text-align: center'>2</td>
  <td>Sex</td>
  <td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td>
  <td><a href='StructureDefinition-NVSS-SexAtDeath.html'>extension:NVSS-SexAtDeath</a></td>
</tr>
<tr>
  <td style='text-align: center'>3</td>
  <td>Social Security Number</td>
  <td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td>
  <td>identifier:SSN</td>
</tr>
<tr>
  <td style='text-align: center'>4a</td>
  <td>Age</td>
  <td><a href='StructureDefinition-vrdr-decedent-age.html'>DecedentAge</a></td>
  <td>value</td>
</tr>
<tr>
  <td style='text-align: center'>4b</td>
  <td>Under 1 Year</td>
  <td><a href='StructureDefinition-vrdr-decedent-age.html'>DecedentAge</a></td>
  <td>value</td>
</tr>
<tr>
  <td style='text-align: center'>4c</td>
  <td>Under 1 Day</td>
  <td><a href='StructureDefinition-vrdr-decedent-age.html'>DecedentAge</a></td>
  <td>value</td>
</tr>
<tr>
  <td style='text-align: center'>5</td>
  <td>Date of Birth</td>
  <td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td>
  <td>birthDate</td>
</tr>
<tr>
  <td style='text-align: center'>6</td>
  <td>Birthplace</td>
  <td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td>
  <td><a href='http://hl7.org/fhir/extensions/StructureDefinition-patient-birthPlace.html'>extension:birthPlace</a></td>
</tr>
<tr>
  <td style='text-align: center'>7a</td>
  <td>Residence-State</td>
  <td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td>
  <td>address.state</td>
</tr>
<tr>
  <td style='text-align: center'>7b</td>
  <td>County</td>
  <td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td>
  <td>address.district</td>
</tr>
<tr>
  <td style='text-align: center'>7c</td>
  <td>City or Town</td>
  <td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td>
  <td>address.city</td>
</tr>
<tr>
  <td style='text-align: center'>7d</td>
  <td>Street and Number</td>
  <td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td>
  <td>address.line</td>
</tr>
<tr>
  <td style='text-align: center'>7e</td>
  <td>Apt No</td>
  <td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-UnitOrAptNumber.html'>address.extension:unitnumber</a></td>
</tr>
<tr>
  <td style='text-align: center'>7f</td>
  <td>Zip Code</td>
  <td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td>
  <td>address.postalCode</td>
</tr>
<tr>
  <td style='text-align: center'>7g</td>
  <td>Inside City Limits?</td>
  <td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Extension-within-city-limits-indicator-vr.html'>address.extension:withinCityLimitsIndicator</a></td>
</tr>
<tr>
  <td style='text-align: center'>8</td>
  <td>Ever in US Armed Forces?</td>
  <td><a href='StructureDefinition-vrdr-decedent-military-service.html'>DecedentMilitaryService</a></td>
  <td>value</td>
</tr>
<tr>
  <td style='text-align: center'>9</td>
  <td>Marital Status at Time of Death</td>
  <td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td>
  <td>maritalStatus</td>
</tr>
<tr>
  <td style='text-align: center'>10</td>
  <td>Surviving Spouse's Name</td>
  <td><a href='StructureDefinition-vrdr-decedent-spouse.html'>DecedentSpouse</a></td>
  <td>name</td>
</tr>
<tr>
  <td style='text-align: center'>11</td>
  <td>Father's Name</td>
  <td><a href='StructureDefinition-vrdr-decedent-father.html'>DecedentFather</a></td>
  <td>name</td>
</tr>
<tr>
  <td style='text-align: center'>12</td>
  <td>Mother's Name Prior to First Marriage</td>
  <td><a href='StructureDefinition-vrdr-decedent-mother.html'>DecedentMother</a></td>
  <td>name , name.use = maiden</td>
</tr>
<tr>
  <td style='text-align: center'>13a</td>
  <td>Informant's Name</td>
  <td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td>
  <td>contact.name</td>
</tr>
<tr>
  <td style='text-align: center'>13b</td>
  <td>Informant's Relationship to Decedent</td>
  <td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td>
  <td>contact.type.text</td>
</tr>
<tr>
  <td style='text-align: center'>13c</td>
  <td>Informant's Mailing Address</td>
  <td><a href='StructureDefinition-vrdr-decedent.html'>Decedent</a></td>
  <td>contact.type.address</td>
</tr>
<tr>
  <td style='text-align: center'>14</td>
  <td>Place of Death</td>
  <td><a href='StructureDefinition-vrdr-death-date.html'>DeathDate</a></td>
  <td>component[placeOfDeath].value</td>
</tr>
<tr>
  <td style='text-align: center'>15</td>
  <td>Facility Name</td>
  <td><a href='StructureDefinition-vrdr-funeral-home.html'>FuneralHome</a></td>
  <td>name</td>
</tr>
<tr>
  <td style='text-align: center'>16</td>
  <td>City or Town, State, and Zip Code</td>
  <td><a href='StructureDefinition-vrdr-funeral-home.html'>FuneralHome</a></td>
  <td>address</td>
</tr>
<tr>
  <td style='text-align: center'>17</td>
  <td>County of Death</td>
  <td><a href='StructureDefinition-vrdr-death-location.html'>DeathLocation</a></td>
  <td>address.district</td>
</tr>
<tr>
  <td style='text-align: center'>18</td>
  <td>Method of Disposition</td>
  <td><a href='StructureDefinition-vrdr-decedent-disposition-method.html'>DecedentDispositionMethod</a></td>
  <td>value</td>
</tr>
<tr>
  <td style='text-align: center'>19</td>
  <td>Place of Disposition</td>
  <td><a href='StructureDefinition-vrdr-disposition-location.html'>DispositionLocation</a></td>
  <td>name</td>
</tr>
<tr>
  <td style='text-align: center'>20</td>
  <td>Location-City, Town, and State</td>
  <td><a href='StructureDefinition-vrdr-disposition-location.html'>DispositionLocation</a></td>
  <td>address</td>
</tr>
<tr>
  <td style='text-align: center'>21</td>
  <td>Name and Complete Address of Funeral Facility</td>
  <td><a href='StructureDefinition-vrdr-funeral-home.html'>FuneralHome</a></td>
  <td>name, address</td>
</tr>
<tr>
  <td style='text-align: center'>23</td>
  <td>License Number</td>
  <td><a href='StructureDefinition-vrdr-funeral-home.html'>FuneralHome</a></td>
  <td>identifier:NPI</td>
</tr>
<tr>
  <td style='text-align: center'>24</td>
  <td>Date Pronounced Dead</td>
  <td><a href='StructureDefinition-vrdr-death-date.html'>DeathDate</a></td>
  <td>component[datetimePronouncedDead ].valueDateTime</td>
</tr>
<tr>
  <td style='text-align: center'>25</td>
  <td>Time Pronounced Dead</td>
  <td><a href='StructureDefinition-vrdr-death-date.html'>DeathDate</a></td>
  <td>component[datetimePronouncedDead ].valueDateTime</td>
</tr>
<tr>
  <td style='text-align: center'>27</td>
  <td>License Number</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Practitioner-vr.html'>PractitionerVitalRecords</a></td>
  <td>identifier:NPI</td>
</tr>
<tr>
  <td style='text-align: center'>28</td>
  <td>Date signed</td>
  <td><a href='StructureDefinition-vrdr-death-date.html'>DeathDate</a></td>
  <td>effective</td>
</tr>
<tr>
  <td style='text-align: center'>29</td>
  <td>Actual or Presumed Date of Death</td>
  <td><a href='StructureDefinition-vrdr-death-date.html'>DeathDate</a></td>
  <td>value</td>
</tr>
<tr>
  <td style='text-align: center'>30</td>
  <td>Actual or Presumed Time of Death</td>
  <td><a href='StructureDefinition-vrdr-death-date.html'>DeathDate</a></td>
  <td>value</td>
</tr>
<tr>
  <td style='text-align: center'>31</td>
  <td>Was Medical Examiner or Coroner Contacted?</td>
  <td><a href='StructureDefinition-vrdr-examiner-contacted.html'>ExaminerContacted</a></td>
  <td>value</td>
</tr>
<tr>
  <td style='text-align: center'>32Part1</td>
  <td>Cause of Death Line a</td>
  <td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td>
  <td>value.text, component[lineNumber] = 1</td>
</tr>
<tr>
  <td style='text-align: center'>32Part1</td>
  <td>Cause of Death Line b</td>
  <td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td>
  <td>value.text, component[lineNumber] = 2</td>
</tr>
<tr>
  <td style='text-align: center'>32Part1</td>
  <td>Cause of Death Line c</td>
  <td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td>
  <td>value.text, component[lineNumber] = 3</td>
</tr>
<tr>
  <td style='text-align: center'>32Part1</td>
  <td>Cause of Death Line d</td>
  <td><a href='StructureDefinition-vrdr-cause-of-death-part1.html'>CauseOfDeathPart1</a></td>
  <td>value.text, component[lineNumber] = 4</td>
</tr>
<tr>
  <td style='text-align: center'>32Part2</td>
  <td>Other Cause of Death</td>
  <td><a href='StructureDefinition-vrdr-cause-of-death-part2.html'>CauseOfDeathPart2</a></td>
  <td>value.text</td>
</tr>
<tr>
  <td style='text-align: center'>33</td>
  <td>Was an Autopsy Performed?</td>
  <td><a href='StructureDefinition-vrdr-autopsy-performed-indicator.html'>AutopsyPerformedIndicator</a></td>
  <td>value</td>
</tr>
<tr>
  <td style='text-align: center'>34</td>
  <td>Were Autopsy Findings Available to Complete the Cause of Death?</td>
  <td><a href='StructureDefinition-vrdr-autopsy-performed-indicator.html'>AutopsyPerformedIndicator</a></td>
  <td>component[autopsyResultsAvailable].value</td>
</tr>
<tr>
  <td style='text-align: center'>35</td>
  <td>Did Tobacco Use Contribute to Death?</td>
  <td><a href='StructureDefinition-vrdr-tobacco-use-contributed-to-death.html'>TobaccoUseContributedToDeath</a></td>
  <td>value</td>
</tr>
<tr>
  <td style='text-align: center'>36</td>
  <td>Pregnancy Status</td>
  <td><a href='StructureDefinition-vrdr-decedent-pregnancy-status.html'>DecedentPregnancyStatus</a></td>
  <td>value</td>
</tr>
<tr>
  <td style='text-align: center'>37</td>
  <td>Manner of Death</td>
  <td><a href='StructureDefinition-vrdr-manner-of-death.html'>MannerOfDeath</a></td>
  <td>value</td>
</tr>
<tr>
  <td style='text-align: center'>38</td>
  <td>Date of Injury</td>
  <td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td>
  <td>effective</td>
</tr>
<tr>
  <td style='text-align: center'>39</td>
  <td>Time of Injury</td>
  <td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td>
  <td>effective</td>
</tr>
<tr>
  <td style='text-align: center'>40</td>
  <td>Place of Injury</td>
  <td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td>
  <td>component[placeOfInjury].value.text</td>
</tr>
<tr>
  <td style='text-align: center'>41</td>
  <td>Injury at Work?</td>
  <td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td>
  <td>component[workInjuryIndicator].value</td>
</tr>
<tr>
  <td style='text-align: center'>42</td>
  <td>Location of Injury</td>
  <td><a href='StructureDefinition-vrdr-injury-location.html'>InjuryLocation</a></td>
  <td>address</td>
</tr>
<tr>
  <td style='text-align: center'>43</td>
  <td>Describe How Injury Occurred</td>
  <td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td>
  <td>value.text</td>
</tr>
<tr>
  <td style='text-align: center'>44</td>
  <td>If Transportation Injury, Specify</td>
  <td><a href='StructureDefinition-vrdr-injury-incident.html'>InjuryIncident</a></td>
  <td>component[transportationRole].value</td>
</tr>
<tr>
  <td style='text-align: center'>45</td>
  <td>Certifier</td>
  <td><a href='StructureDefinition-vrdr-death-certification.html'>DeathCertification</a></td>
  <td>performer.function</td>
</tr>
<tr>
  <td style='text-align: center'>46</td>
  <td>Name, Address, and Zip Code of Person Completing Cause of Death</td>
  <td><a href='StructureDefinition-vrdr-certifier.html'>Certifier</a></td>
  <td>name, address</td>
</tr>
<tr>
  <td style='text-align: center'>47</td>
  <td>Title of Certifier</td>
  <td><a href='StructureDefinition-vrdr-certifier.html'>Certifier</a></td>
  <td>qualification</td>
</tr>
<tr>
  <td style='text-align: center'>48</td>
  <td>License Number</td>
  <td><a href='StructureDefinition-vrdr-certifier.html'>Certifier</a></td>
  <td>identifier:NPI</td>
</tr>
<tr>
  <td style='text-align: center'>49</td>
  <td>Date Certified</td>
  <td><a href='StructureDefinition-vrdr-death-certification.html'>DeathCertification</a></td>
  <td>performed</td>
</tr>
<tr>
  <td style='text-align: center'>50</td>
  <td>For Registrar Only-Date Filed</td>
  <td><a href='StructureDefinition-vrdr-death-certificate.html'>DeathCertificate</a></td>
  <td>date</td>
</tr>
<tr>
  <td style='text-align: center'>51</td>
  <td>Decedent's Education</td>
  <td><a href='StructureDefinition-vrdr-decedent-education-level.html'>DecedentEducationLevel</a></td>
  <td>value</td>
</tr>
<tr>
  <td style='text-align: center'>52</td>
  <td>Decedent of Hispanic Origin?</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td>
  <td>component.value, subject is Decedent</td>
</tr>
<tr>
  <td style='text-align: center'>53</td>
  <td>Decedent's Race</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td>
  <td>component.value, subject is Decedent</td>
</tr>
<tr>
  <td style='text-align: center'>54</td>
  <td>Decedent's Usual Occupation</td>
  <td><a href='StructureDefinition-vrdr-decedent-usual-work.html'>DecedentUsualWork</a></td>
  <td>value.text</td>
</tr>
<tr>
  <td style='text-align: center'>55</td>
  <td>Kind of Business/Industry</td>
  <td><a href='StructureDefinition-vrdr-decedent-usual-work.html'>DecedentUsualWork</a></td>
  <td>component [odh-UsualIndustry].value.text</td>
</tr>
</tbody>
</table>


---

// File: input/fsh/changelog.md

## Change Log

### As of 25 October 2023

#### **Bundles and Compositions**
- CauseOfDeathCodedContentBundle-new
- DeathCertificateDocument-new
- DemographicCodedContentBundle-new
- SD_DeathCertificate
- SD_MortalityRosterBundle

#### **Harmonized Profiles**
- SD_CauseOfDeathPart1-new
- SD_CauseOfDeathPart2-new
- SD_DeathCertification-new
- SD_DeathDate-new
- SD_Decedent-new
- SD_DecedentDispositionMethod-new
- SD_DecedentFatherMotherSpouse-new
- SD_DecedentPregnancyStatus-new
- SD_InjuryIncident-new
- SD_MannerOfDeath-new
- SD_TobaccoUseContributedToDeath-new

#### **Superseded Content**
- CM_PregnancyStatus
- CS_PlaceOfInjury
- CS_PregnancyStatus
- DEF_ConceptMapRuleSets
- EX_DeathCertificateDocument_ID_1
- EX_DeathCertificateDocument_ID_5
- EX_DeathCertificateDocument_NJ_1
- EX_DeathCertificateDocument
- EX_MortalityRosterBundle
- SD_CodedContentBundles
- SD_CodedRaceAndEthnicity
- SD_InputRaceAndEthnicity
- SD_PartialDateTime
- SD_WithinCityLimitsIndicatorExtension
- VS_PregnancyStatus
- VS_YesNoNotApplicableVariations


---

// File: input/includes/markdown-link-references.md

<!-- Sushi-generated links -->
{% include fsh-link-references.md %}

<!-- MISC -->
[MITRE]: https://www.mitre.org/
[Georgia Institute of Technology (GTRI)]: https://www.gatech.edu/
[Hi3 Solutions Corporation]: https://www.facebook.com/hi3solutions/
[MDI]: https://hl7.org/fhir/us/mdi/
[NCHS Vital Records Messaging IG]: https://build.fhir.org/ig/nightingaleproject/vital_records_fhir_messaging_ig/branches/main/message.html#message-structure-and-content
[Vital Records Common Library IG]: https://hl7.org/fhir/us/vr-common-library/
<!-- USCORE -->
[USCore Procedure Profile]: {{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-procedure.html
[CDCOccupationVS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7186
[CDCIndustryVS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7187
[MortalityRosterDataDictionary]: MortalityRosterDataDictionary.html
<!-- PHINVADs VS -->
[PHVS_Occupation_CDC_Census2010VS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7186
[PHVS_Industry_CDC_Census2010VS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7187
[PHVS_Occupation_CDC_Census2012VS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8026
[PHVS_Industry_CDC_Census2012VS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8027
[PHVS_Occupation_CDC_Census2018VS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8065
[PHVS_Industry_CDC_Census2018VS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8066
[PHVS_Occupation_CDC_SOC2018]: http://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8068
[PHVS_Industry_CDC_NAICS2017]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8067
<!-- Pages -->
[Artifacts]: artifacts.html
[Background]: background.html
[ChangeLog]: change_log.html
[Credits]: credits.html
[ScopeOfVRDRIG]: scope_of_the_vrdr_fhir_ig.html
[Terminology]: terminology_bindings.html
[PartialDatesAndTimes]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times
[Note on Decedent Name]: usage.html#decedent-name
[Note on Gender]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#gender
[CityCodes]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#city-codes
[CountyCodes]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#county-codes
[StateLiterals]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals
[CountryLiterals]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#country-literals
<!-- VRCL Content -->
[ExtensionDistrictCodeVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-DistrictCode.html
[EmergingIssues]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}StructureDefinition-Observation-emerging-issues-vr.html
[InputRaceAndEthnicity]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html
[CodedRaceAndEthnicity]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html
[ExtensionLocationJurisdictionIdVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Extension-jurisdiction-id-vr.html
[ExtensionPartialDateVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Extension-partial-date-vr.html
[ExtensionPartialDateTimeVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Extension-partial-date-time-vr.html
[ExtensionCityCodeVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-CityCode.html

[ValueSetYesNoUnknownNotApplicableVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-not-applicable-vr.html
[ValueSetYesNoUnknownVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html
[alueSetJurisdictionVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-jurisdiction-vr.html
[ValueSetStatesTerritoriesAndProvincesVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html
[ObservationEmergingIssuesVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html
[ValueSetJurisdictionVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-jurisdiction-vr.html
[ValueSetResidenceCountryVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-residence-country-vr.html
[ValueSetRaceCodeVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html
[ValueSetHispanicOriginVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-hispanic-origin-vr.html
[ValueSetRaceRecode40VitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-recode-40-vr.html
[ValueSetUnitsOfAgeVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-units-of-age-vr.html
[ValueSetEducationLevelVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-education-level-vr.html
[ValueSetEditBypass01234VitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-valueset-edit-bypass-01234-vr.html
[ValueSetBirthplaceCountryVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-birthplace-country-vr.html
[ValueSetMaritalStatusVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-marital-status-vr.html
[ValueSetRaceMissingValueReasonVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-missing-value-reason-vr.html
[ObservationCodedRaceAndEthnicityVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html
[ObservationInputRaceAndEthnicityVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html
[PractitionerVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Practitioner-vr.html
[CodeSystemCountryCodeVitalRecords]: {{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/CodeSystem-CodeSystem-country-code-vr.html


---

// File: input/fsh/aliases.fsh

// External CS and VS
Alias: $v2-0532 = http://terminology.hl7.org/CodeSystem/v2-0532
Alias: $admingender = http://hl7.org/fhir/administrative-gender
Alias: $v3-AdminGender = http://terminology.hl7.org/CodeSystem/v3-AdministrativeGender
Alias: $maritalStatus = http://hl7.org/fhir/ValueSet/marital-status
Alias: $roleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $contactRole = http://terminology.hl7.org/CodeSystem/v2-0131
Alias: $degreeLicenseCertificateV2 = http://terminology.hl7.org/CodeSystem/v2-0360
Alias: $HL7_EducationLevelCS = 	http://terminology.hl7.org/CodeSystem/v3-EducationLevel
Alias: $v2-0131 = http://terminology.hl7.org/CodeSystem/v2-0131
Alias: $v2-0136 = http://terminology.hl7.org/CodeSystem/v2-0136
Alias: $v3-NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: $v3-EducationLevel = http://terminology.hl7.org/CodeSystem/v3-EducationLevel
Alias: $v3-MaritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $loinc = http://loinc.org
Alias: $sct = http://snomed.info/sct
Alias: $icd10 = http://hl7.org/fhir/sid/icd-10
Alias: $ICD10VS = http://hl7.org/fhir/ValueSet/icd-10
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $list-order = http://terminology.hl7.org/CodeSystem/list-order
Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $location-physical-type = http://terminology.hl7.org/CodeSystem/location-physical-type
Alias: $organization-type = http://terminology.hl7.org/CodeSystem/organization-type
Alias: $patient-birthPlace = http://hl7.org/fhir/StructureDefinition/patient-birthPlace
Alias: $v3-ServiceDeliveryLocationRoleType = http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType
Alias: $statesVS = http://hl7.org/fhir/us/core/ValueSet/us-core-usps-state
Alias: $statesCS = https://www.usps.com/
Alias: $UCUM = http://unitsofmeasure.org
Alias: $ssn = http://hl7.org/fhir/sid/us-ssn
// Alias: $provinces = http://canadapost.ca/CodeSystem/ProvinceCodes
Alias: $provinces = http://canadapost.ca

Alias: $dataabsentreason401 = http://hl7.org/fhir/CodeSystem/data-absent-reason|4.0.1  
Alias: $DataAbsentReason = http://hl7.org/fhir/StructureDefinition/data-absent-reason
// USCore
Alias: USCoreRelatedPerson = http://hl7.org/fhir/us/core/StructureDefinition/us-core-relatedperson
Alias: USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner


// PHINVADS ValueSets - only occupation and industry remain
Alias: $PHVS_Industry_CDC_Census2018 = http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.8066
Alias: $PHVS_Occupation_CDC_Census2018 = http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.8065
Alias: $PHVS_Industry_CDC_Census2012 = http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.8027
Alias: $PHVS_Occupation_CDC_Census2012 = http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.8026

// Vital Records Common Library
Alias: $IJE = http://hl7.org/fhir/us/vr-common-library/CodeSystem/codesystem-ije-vr



---

// File: input/fsh/bundlescompositions/SD_CauseOfDeathCodedContentBundle.fsh

Profile: CauseOfDeathCodedContentBundle
Parent: Bundle
Id: vrdr-cause-of-death-coded-content-bundle
Title: "Cause of Death Coded Content Bundle"
Description: "Cause of Death Coded Content Bundle (Bundle): A bundle containing instances of the resources comprising cause of death coded content.  This bundle is information-content equivalent to the traditional NCHS TRX format."
* insert RequireMetaProfile(CauseOfDeathCodedContentBundle)
* identifier.value ^short = "Death Record Identifier (YYYYJJNNNNNN)"
* identifier.value ^definition = "A unique value used by the NCHS to identify a death record. The NCHS uniquely identifies death records by combining three concepts: the year of death (as a four digit number), the jurisdiction of death (as a two character jurisdiction identifier), and the death certificate number assigned by the jurisdiction (a number with up to six digits, left padded with zeros). "
* identifier.value ^maxLength = 12
* identifier 1..1
* identifier.extension contains
    CertificateNumberVitalRecords named certificateNumber 0..1 and
    AuxiliaryStateIdentifier1VitalRecords named auxiliaryStateIdentifier1 0..1 and
// There isn't really a good home for this extension, so we will tack it onto the identifier.
    StateSpecificField named stateSpecificField 0..1
* type 1..1
* type only code
* type = #collection (exactly)
* entry.resource 1..1 // each entry must have a resource
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slicing based on the profile"
// Coded Content
* insert BundleSlice(  ActivityAtTimeOfDeath,  0, 1,  ActivityAtTimeOfDeath,  ActivityAtTimeOfDeath,  ActivityAtTimeOfDeath )
* insert BundleSlice(  AutomatedUnderlyingCauseOfDeath,  0, 1,  AutomatedUnderlyingCauseOfDeath,  AutomatedUnderlyingCauseOfDeath,  AutomatedUnderlyingCauseOfDeath)
* insert BundleSlice(  ManualUnderlyingCauseOfDeath,  0, 1,  ManualUnderlyingCauseOfDeath,  ManualUnderlyingCauseOfDeath,  ManualUnderlyingCauseOfDeath)
* insert BundleSlice(  EntityAxisCauseOfDeath,  0, 20,  EntityAxisCauseOfDeath,  EntityAxisCauseOfDeath,  EntityAxisCauseOfDeath)
* insert BundleSlice(  RecordAxisCauseOfDeath,  0, 20,  RecordAxisCauseOfDeath,  RecordAxisCauseOfDeath,  RecordAxisCauseOfDeath)
* insert BundleSlice(  PlaceOfInjury,  0, 1,  PlaceOfInjury,  PlaceOfInjury,  PlaceOfInjury)
* insert BundleSlice(  CodingStatusValues,  0, 1,  CodingStatusValues,  CodingStatusValues,  CodingStatusValues)
// Input Content
* insert BundleSlice(  CauseOfDeathPart1,  0, 4,  CauseOfDeathPart1,  CauseOfDeathPart1,  CauseOfDeathPart1)
//* insert BundleSlice(  CauseOfDeathPathway,  0, 1,  CauseOfDeathPathway,  CauseOfDeathPathway,  CauseOfDeathPathway)
* insert BundleSlice(  CauseOfDeathPart2,  0, 1,  CauseOfDeathPart2,  CauseOfDeathPart2,  CauseOfDeathPart2)
* insert BundleSlice(  MannerOfDeath,  0, 1,  MannerOfDeath,  MannerOfDeath,  MannerOfDeath)
* insert BundleSlice(  AutopsyPerformedIndicator,  0, 1,  AutopsyPerformedIndicator,  AutopsyPerformedIndicator,  AutopsyPerformedIndicator)
* insert BundleSlice(  DeathCertification,  0, 1,  DeathCertification,  DeathCertification,  DeathCertification)
* insert BundleSlice(  InjuryIncident,  0, 1,  InjuryIncident,  InjuryIncident,  InjuryIncident)
* insert BundleSlice(  TobaccoUseContributedToDeath,  0, 1,  TobaccoUseContributedToDeath,  TobaccoUseContributedToDeath,  TobaccoUseContributedToDeath)
* insert BundleSlice(  DecedentPregnancyStatus,  0, 1,  DecedentPregnancyStatus,  DecedentPregnancyStatus,  DecedentPregnancyStatus)
* insert BundleSlice(  SurgeryDate,  0, 1,  SurgeryDate,  SurgeryDate,  SurgeryDate)



---

// File: input/fsh/bundlescompositions/SD_DeathCertificate.fsh



Profile: DeathCertificate
Parent: Composition
Id: vrdr-death-certificate
Title: "Death Certificate"
Description: "The body of the death certificate document (Composition)."
* insert RequireMetaProfile(DeathCertificate)
* status 1..1
* status only code
* status from CompositionStatus (required)
* type 1..1
* type only CodeableConcept
* type = $loinc#64297-5 // "Death certificate"
* extension contains
    FilingFormat named filingFormat 0..1 and
    ReplaceStatus named replaceStatus 0..1 and
    StateSpecificField named stateSpecificField 0..1
* extension[FilingFormat] ^short = "Filing Format"
* extension[ReplaceStatus] ^short = "Replace Status (deprecated)"
* extension[StateSpecificField] ^short = "State Specific Field"
* subject 1..1
* subject only Reference(Decedent)
// * date 1..1
* date ^short = "Date of Registration"
//* attester 1..1
* attester only BackboneElement
* attester.mode 1..1
* attester.mode only code
* attester.mode = #legal (exactly)
// * attester.time 1..1
// * attester.time ^short = "Death Certification time."
* attester.party only Reference(PractitionerVitalRecords)
* attester.party ^short = "Certifier."
* event 1..1
* event only BackboneElement
* event.code 1..1
* event.code only CodeableConcept
* event.code from DeathCertificationEventVS (preferred)
* event.code ^binding.extension[http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet].valueCanonical = Canonical(DeathCertificationEventMaxVS)
* event.detail 1..1
* event.detail only Reference(DeathCertification)
* section ^slicing.discriminator.type = #pattern
* section ^slicing.discriminator.path = "code"
* section ^slicing.rules = #open
* section.code 1..1
// * section contains DecedentDemographics 0..1
// * section[DecedentDemographics].code = DocumentSectionCS#DecedentDemographics
// * section[DecedentDemographics] ^label = "DecedentDemographics"
// * section[DecedentDemographics] ^short = "DecedentDemographics}"
// * section[DecedentDemographics].entry ^slicing.discriminator.type = #profile
// * section[DecedentDemographics].entry ^slicing.discriminator.path = "$this.resolve()"
// * section[DecedentDemographics].entry ^slicing.rules = #open
* insert CompositionSectionEntrySlicing(DecedentDemographics)
* insert CompositionSectionEntrySlicing(DeathInvestigation)
* insert CompositionSectionEntrySlicing(DeathCertification)
* insert CompositionSectionEntrySlicing(DecedentDisposition)
* insert CompositionSectionEntrySlicing(CodedContent)
//
* insert BundleSectionSlice(DecedentDemographics, Decedent, 1, 1, Decedent, Decedent, Decedent)
* insert BundleSectionSlice(DecedentDemographics, Father,  0, 1, DecedentFather, DecedentFather, DecedentFather)
* insert BundleSectionSlice(DecedentDemographics, Mother,  0, 1, DecedentMother, DecedentMother, DecedentMother)
* insert BundleSectionSlice(DecedentDemographics, Spouse,  0, 1, DecedentSpouse, DecedentSpouse, DecedentSpouse)
* insert BundleSectionSlice(DecedentDemographics, Age,  0, 1, DecedentAge, DecedentAge, DecedentAge)
* insert BundleSectionSlice(DecedentDemographics, BirthRecordID,  0, 1, BirthRecordIdentifier, BirthRecordIdentifier, BirthRecordIdentifier)
* insert BundleSectionSlice(DecedentDemographics, FetalDeathRecordID,  0, 1, FetalDeathRecordIdentifier, FetalDeathRecordIdentifier, FetalDeathRecordIdentifier)
* insert BundleSectionSlice(DecedentDemographics, BirthRecordIDChild,  0, 1, BirthRecordIdentifierChild, BirthRecordIdentifierChild, BirthRecordIdentifierChild)
* insert BundleSectionSlice(DecedentDemographics, EducationLevel,  0, 1, DecedentEducationLevel, DecedentEducationLevel, DecedentEducationLevel)
* insert BundleSectionSlice(DecedentDemographics, MilitaryService,  0, 1, DecedentMilitaryService, DecedentMilitaryService, DecedentMilitaryService)
* insert BundleSectionSlice(DecedentDemographics, UsualWork,  0, 1, DecedentUsualWork, DecedentUsualWork, DecedentUsualWork)
* insert BundleSectionSlice(DecedentDemographics, EmergingIssues,  0, 1, EmergingIssues, EmergingIssues, ObservationEmergingIssuesVitalRecords)
* insert BundleSectionSlice(DecedentDemographics, InputRaceAndEthnicity,  0, 1, InputRaceAndEthnicity, InputRaceAndEthnicity, ObservationInputRaceAndEthnicityVitalRecords)
//
* insert BundleSectionSlice(DeathInvestigation, ExaminerContacted, 0, 1, ExaminerContacted, ExaminerContacted, ExaminerContacted)
* insert BundleSectionSlice(DeathInvestigation, PregnancyStatus, 0, 1, DecedentPregnancyStatus, DecedentPregnancyStatus, DecedentPregnancyStatus)
* insert BundleSectionSlice(DeathInvestigation, TobaccoUse,  0, 1, TobaccoUse, TobaccoUse, TobaccoUseContributedToDeath)
// * insert BundleSectionSlice(DeathInvestigation, DeathOrInjuryLocation,  0, 2, Death or Injury  Location, Death or Injury Location, Location)
* insert BundleSectionSlice(DeathInvestigation, DeathLocation,  0, 1, Death Location, Death Location, DeathLocation)
* insert BundleSectionSlice(DeathInvestigation, InjuryLocation,  0, 1, Injury  Location, Injury Location, InjuryLocation)
  // See https://jira.hl7.org/browse/FHIR-41807
  // * insert BundleSectionSlice(DeathInvestigation, PlaceOfInjury,  0, 1, PlaceOfInjury, PlaceOfInjury, PlaceOfInjury)
* insert BundleSectionSlice(DeathInvestigation, InjuryIncident,  0, 1, InjuryIncident, InjuryIncident, InjuryIncident)
* insert BundleSectionSlice(DeathInvestigation, Autopsy,  0, 1, AutopsyPerformedIndicator, AutopsyPerformedIndicator, AutopsyPerformedIndicator)
//* insert BundleSectionSlice(DeathInvestigation, DeathLocation,  0, 1, DeathLocation, DeathLocation, DeathLocation)
* insert BundleSectionSlice(DeathInvestigation, DeathDate,  0, 1, DeathDate, DeathDate, DeathDate)
* insert BundleSectionSlice(DeathInvestigation, SurgeryDate,  0, 1, SurgeryDate, SurgeryDate, SurgeryDate)
//
* insert BundleSectionSlice(DeathCertification, Certifier,  0, 1, Certifier, Certifier, PractitionerVitalRecords)
* insert BundleSectionSlice(DeathCertification, DeathCertification,  0, 1, DeathCertification, DeathCertification, DeathCertification)
* insert BundleSectionSlice(DeathCertification, MannerOfDeath,  0, 1, MannerOfDeath, MannerOfDeath, MannerOfDeath)
* insert BundleSectionSlice(DeathCertification, CauseOfDeathPart1,  0, 4, CauseOfDeathPart1, CauseOfDeathPart1, CauseOfDeathPart1)
* insert BundleSectionSlice(DeathCertification, CauseOfDeathPart2,  0, 1, CauseOfDeathPart2, CauseOfDeathPart2, CauseOfDeathPart2)
// * insert BundleSectionSlice(DeathCertification, CauseOfDeathPathway,  0, 1, CauseOfDeathPathway, CauseOfDeathPathway, CauseOfDeathPathway)
//
* insert BundleSectionSlice(DecedentDisposition, DispositionLocation,  0, 1, DispositionLocation, DispositionLocation, DispositionLocation)
* insert BundleSectionSlice(DecedentDisposition, FuneralHome,  0, 1, FuneralHome, FuneralHome, FuneralHome)
* insert BundleSectionSlice(DecedentDisposition, DispositionMethod,  0, 1, DispositionMethod, DispositionMethod, DecedentDispositionMethod)
* insert BundleSectionSlice(DecedentDisposition, Mortician,  0, 1, Mortician, Mortician, Mortician)
//
* insert BundleSectionSlice(CodedContent, ActivityAtTimeOfDeath,  0, 1,  ActivityAtTimeOfDeath,  ActivityAtTimeOfDeath,  ActivityAtTimeOfDeath)
* insert BundleSectionSlice(CodedContent, AutomatedUnderlyingCauseOfDeath,  0, 1,  AutomatedUnderlyingCauseOfDeath,  AutomatedUnderlyingCauseOfDeath,  AutomatedUnderlyingCauseOfDeath)
* insert BundleSectionSlice(CodedContent, ManualUnderlyingCauseOfDeath,  0, 1,  ManualUnderlyingCauseOfDeath,  ManualUnderlyingCauseOfDeath,  ManualUnderlyingCauseOfDeath)
* insert BundleSectionSlice(CodedContent, CodedRaceAndEthnicity,  0, 1,  CodedRaceAndEthnicity,  CodedRaceAndEthnicity,  ObservationCodedRaceAndEthnicityVitalRecords)
* insert BundleSectionSlice(CodedContent, EntityAxisCauseOfDeath,  0, 20,  EntityAxisCauseOfDeath,  EntityAxisCauseOfDeath,  EntityAxisCauseOfDeath)
* insert BundleSectionSlice(CodedContent, RecordAxisCauseOfDeath,  0, 20,  RecordAxisCauseOfDeath,  RecordAxisCauseOfDeath,  RecordAxisCauseOfDeath)
* insert BundleSectionSlice(CodedContent, PlaceOfInjury,  0, 1,  PlaceOfInjury,  PlaceOfInjury,  PlaceOfInjury)
* insert BundleSectionSlice(CodedContent, CodingStatusValues,  0, 1,  CodingStatusValues,  CodingStatusValues,  CodingStatusValues)
// // * section[DecedentDisposition].code = DocumentSectionCS#Disposition "Decedent Disposition"
// // * section[DecedentDisposition].entry ^slicing.discriminator.type = #profile
// // * section[DecedentDisposition].entry ^slicing.discriminator.path = "$this.resolve()"
// // * section[DecedentDisposition].entry ^slicing.rules = #open
// * section[DecedentDisposition].entry contains
//     DispositionLocation 0..* and
//     FuneralHome 0..1 and
// //    Mortician 0..1 and   ** Can be included using USCorePractitioner
//     DispositionMethod 0..1
// //    and FuneralServiceLicensee 0..1   ** Can be included using USCorePractitionerRole
// * section[DecedentDisposition].entry[DispositionLocation] only Reference(DispositionLocation)
// * section[DecedentDisposition].entry[FuneralHome] only Reference(FuneralHome)
// // * section[DecedentDisposition].entry[Mortician] only Reference(Mortician)
// * section[DecedentDisposition].entry[DispositionMethod] only Reference(DecedentDispositionMethod)
// // * section[DecedentDisposition].entry[FuneralServiceLicensee] only Reference(FuneralServiceLicensee)

---

// File: input/fsh/bundlescompositions/SD_DeathCertificateDocument.fsh

Profile: DeathCertificateDocument
Parent: Bundle
Id: vrdr-death-certificate-document
Title: "Death Certificate Document"
Description: "The resources comprising the death certificate composition (Bundle/Document)."
* insert BundleIdentifiers
* type = #document (exactly)
* entry ^slicing.discriminator.type = #profile
  * ^slicing.discriminator.path = "resource"
  * ^slicing.rules = #open
  * ^slicing.description = "Slicing based on the profile"
* entry contains DeathCertificate 1..1
  * resource 1..
* entry[DeathCertificate] ^short = "Death Certificate"
  * ^definition = "Death Certificate"
  * resource only DeathCertificate

---

// File: input/fsh/bundlescompositions/SD_DemographicCodedContentBundle.fsh

Profile: DemographicCodedContentBundle
Parent: Bundle
Id: vrdr-demographic-coded-content-bundle
Title: "Demographic Coded Content Bundle"
Description: "Demographic Coded Content Bundle (Bundle): A bundle containing instances of the resources comprising demographic (race and ethnicity) coded content."
* insert RequireMetaProfile(CodedContentDocument)
* insert BundleIdentifiers
* type 1..1
* type only code
* type = #collection (exactly)
* entry.resource 1..1 // each entry must have a resource
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slicing based on the profile"
* insert BundleSlice(  CodedRaceAndEthnicity,  0, 1,  CodedRaceAndEthnicity,  CodedRaceAndEthnicity,  ObservationCodedRaceAndEthnicityVitalRecords)
* insert BundleSlice(  InputRaceAndEthnicity,  0, 1,  InputRaceAndEthnicity,  InputRaceAndEthnicity,  ObservationInputRaceAndEthnicityVitalRecords)


---

// File: input/fsh/bundlescompositions/SD_IndustryOccupationCodedContentBundle.fsh

Profile: IndustryOccupationCodedContentBundle
Parent: Bundle
Id: industry-occupation-coded-content-bundle
Title: "Industry Occupation Coded Content Bundle"
Description: "Industry and Occupation Coded Content Bundle (Bundle):  A bundle containing  coded industry and occupation data for a decedent.   This bundle is information-content equivalent to the traditional MIO files."
* insert RequireMetaProfile(CodedContentDocument)
* insert BundleIdentifiers
* type 1..1
* type only code
* type = #collection (exactly)
* entry.resource 1..1 // each entry must have a resource
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slicing based on the profile"
* insert BundleSlice(CodedIndustryAndOccupation,  0, 1, DecedentUsualWork, DecedentUsualWork,  DecedentUsualWork)




---

// File: input/fsh/bundlescompositions/SD_MortalityRosterBundle.fsh

Profile: MortalityRosterBundle
Parent: Bundle
Id: vrdr-mortality-roster-bundle
Title: "Mortality Roster Bundle"
Description: "Mortality Roster Bundle (Bundle): A bundle containing instances of the resources comprising mortality roster content.  This bundle is information-content equivalent to the traditional Mortality Roster.
The mortality roster is a supplemental report of death for the purpose of notifying the decedent's jurisdiction of birth that the death has occurred. The roster data points are sufficient to locate the birth certificate of the decedent but do not otherwise contain the full death record.
Once received, the jurisdiction of birth uses the mortality roster data to locate the record of birth and marks it as deceased."
* insert RequireMetaProfile(MortalityRosterBundle)
* insert BundleIdentifiers // includes certificate number
* type 1..1
* type only code
* type = #collection (exactly)
// Note:  Bundle extends the base Resource type rather than the DomainResource type,
// so there actually isn't an extension element to add extensions to.
// A workaround is to add extensions to meta:
* meta.extension contains
    AliasStatus named aliasStatus 0..1 and
    ReplaceStatus named replaceStatus 0..1
* entry.resource 1..1 // each entry must have a resource
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slicing based on the profile"
* insert BundleSlice(  Decedent,  1, 1,  Decedent,  Decedent,  Decedent)
* insert BundleSlice(  DecedentFather,  0, 1,  DecedentFather,  DecedentFather,  DecedentFather)
* insert BundleSlice(  DecedentMother,  0, 1,  DecedentMother,  DecedentMother,  DecedentMother)
* insert BundleSlice(  DeathLocation,  0, 1,  DeathLocation,  DeathLocation,  DeathLocation)
* insert BundleSlice(  DeathDate,  0, 1,  DeathDate,  DeathDate,  DeathDate)


---

// File: input/fsh/codesystems/CS_ActivityAtTimeOfDeath.fsh

CodeSystem: ActivityAtTimeOfDeathCS
Id: vrdr-activity-at-time-of-death-cs
Title: "Activity at Time of Death CodeSystem"
Description: "Activity at Time of Death Codesystem"
* ^caseSensitive = false
* ^status = #active
* #0 "While engaged in sports activity"
* #1 "While engaged in leisure activities."
* #2 "While working for income"
* #3 "While engaged in other types of work"
* #4 "While resting, sleeping, eating, or engaging in other vital activities"
* #8 "While engaged in other specified activities."
* #9 "During unspecified activity"
* ^experimental = false


---

// File: input/fsh/codesystems/CS_DateOfDeathDerterminationMethods.fsh

CodeSystem: DateOfDeathDeterminationMethodsCS
Id: vrdr-date-of-death-determination-methods-cs
Title: "Date of Death Determination Methods"
Description: "Date of Death Determination Methods CodeSystem"
* ^content = #complete
* ^caseSensitive = false
* #exact "Exact"
* #approximate "Approximate"
* #presumed "Presumed Date of Death"
* #court-appointed "Court Appointed"
* ^experimental = false
* ^status = #active



---

// File: input/fsh/codesystems/CS_DeathPregnancyStatus.fsh

CodeSystem: DeathPregnancyStatusCS
Id: CodeSystem-death-pregnancy-status
Title: "Death Pregnancy Status Codesystem"
Description: "Codes that reflect whether the decedent was pregnant at or around the time of death."
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* ^content = #complete
* #1 "Not pregnant within past year"
* #2 "Pregnant at time of death"
* #3 "Not pregnant, but pregnant within 42 days of death"
* #4 "Not pregnant, but pregnant 43 days to 1 year before death"
* #9 "Unknown if pregnant within the past year"
* #8 "Not Applicable: Computer generated"
* #7 "Not reported on certificate"

---

// File: input/fsh/codesystems/CS_DocumentSection.fsh

CodeSystem: DocumentSectionCS
Id: vrdr-document-section-cs
Title: "Document Section"
Description: "Document Section Code System"
* insert boilerplate
* ^content = #complete
* ^caseSensitive = false
* #DecedentDemographics "Decedent Demographics" "Contains decedent demographic data. Demographic data includes information about related persons (Mother, Father, and Spouse) and social determinants such as education level. The information in this document section are provided by a decedent informant."
* #DeathInvestigation "Death Investigation" "Contains data obtained during the course of investigating a death. Many of these items are conditionally present in a death certification transaction depending on whether or not a autopsy was performed, an injury incident occurred, or a transportation event was involved."
* #DeathCertification "Death Certification" "Contains data related to the primary concern of the VRDR IG, Death Certification. In this group the causes of death and the causal pathway are documented and attested to by a death certifier (coroner or medical examiner)."
* #DecedentDisposition "Decedent Disposition" "Contains data related to the disposition of the decedents remains. The data in this profile group is typically provided by the funeral home performing the disposition services. The content of this section is authenticated by the funeral home director."
* #CodedContent "Coded Content" "Contains coded cause of death and demographic data generated by NCHS from the content of the submitted death record."
* ^experimental = false
* ^status = #active


---

// File: input/fsh/codesystems/CS_FilingFormat.fsh


CodeSystem: FilingFormatCS
Id: vrdr-filing-format-cs
Title: "Filing Formats"
Description: "Death Certificate Filing Formats CodeSystem"
* ^caseSensitive = false
* #electronic "Electronic" "Electronic mode"
* #paper "Paper" "Paper mode"
* #mixed "Mixed" "Mixed mode"
* ^experimental = false
* ^status = #active


---

// File: input/fsh/codesystems/CS_IntentionalReject.fsh

CodeSystem: IntentionalRejectCS
Id: vrdr-intentional-reject-cs
Title: "Intentional Reject"
Description: "Intentional Reject CodeSystem"
* ^caseSensitive = true
* #1 "Reject1" "Reject1"
* #2 "Reject2" "Reject2"
* #3 "Reject3" "Reject3"
* #4 "Reject4" "Reject4"
* #5 "Reject5" "Reject5"
* #9 "Reject9" "Reject9"
* ^experimental = false
* ^status = #active


---

// File: input/fsh/codesystems/CS_LocationType.fsh

CodeSystem: LocationTypeCS
Id: vrdr-location-type-cs
Title: "Location Type"
Description: "Location Type Code System"
* insert boilerplate
* ^caseSensitive = false
* ^compositional = true
* ^versionNeeded = false
* ^content = #complete
* #injury "Injury Location"
* #disposition "Disposition Location"
* #death "Death Location"
* ^experimental = false
* ^status = #active


---

// File: input/fsh/codesystems/CS_ObservationComponentCodes.fsh

CodeSystem: ObservationsCS
Id: vrdr-observations-cs
Title: "Local Observation Codes"
Description: "Local Observation Codes for observations that lack an appropriate LOINC code"
* insert boilerplate
* ^content = #complete
* ^caseSensitive = false
* #emergingissues "Emerging Issues" "NCHS-required emerging issues data."
* #codedraceandethnicity "Coded Race and Ethnicity" "Coded Race and Ethnicity Data produced by NCHS from submitted death record"
* #inputraceandethnicity "Race and Ethnicity Data submitted by Jurisdictions to NCHS"
* #decedentbirthrecordidentifier "Birth Record Identifier of Decedent"
* #childbirthrecordidentifier "Birth Record Identifier of Child"
* #fetaldeathrecordidentifier "Fetal Death Record Identifier of Fetus"
* ^experimental = false
* ^status = #active

CodeSystem: ComponentCS
Id: vrdr-component-cs
Title: "Local Component Codes"
Description: "Local Component Codes for observation components that lack an appropriate LOINC code"
* insert boilerplate
* ^content = #complete
* ^caseSensitive = false
* #position "position"
* #lineNumber "line number"
* #eCodeIndicator "e Code Indicator"
* #wouldBeUnderlyingCauseOfDeathWithoutPregnancy "Would be underlying cause of death without pregnancy."
* ^experimental = false
* ^status = #active



CodeSystem: OrganizationTypeCS
Id: vrdr-organization-type-cs
Title: "Local Organization Type"
Description: "Local Organization Types"
* insert boilerplate
* ^content = #complete
* ^caseSensitive = false
* #funeralhome "Funeral Home" "Funeral Home."
* ^experimental = false
* ^status = #active


---

// File: input/fsh/codesystems/CS_ReplaceStatus.fsh

CodeSystem: ReplaceStatusCS
Id: vrdr-replace-status-cs
Title: "Replacement Status of Death Record Submission CodeSystem"
Description: "Replacement Status of Death Record Submission CodeSystem"
* ^caseSensitive = false
* ^experimental = false
* #original "original record"
* #updated "updated record"
* #updated_notforNCHS "updated record not for nchs"
* ^status = #active

---

// File: input/fsh/codesystems/CS_SuperMicarPlaceOfInjury.fsh

CodeSystem: SuperMicarPlaceOfInjuryCS
Id: vrdr-system-placeofinjury-cs
Title: "Supermicar Place Of Injury CodeSystem"
Description: "Supermicar Place Of Injury CodeSystem"
* ^caseSensitive = true
* ^experimental = false
* ^status = #active
* #A "Home" "Home"  // TRX #0
* #B "Farm" "Farm" // TRX #7
* #C "Residential Institution" "Residential Institution" // TRX #1
* #D "Military Residence" "Military Residence"           // ** TRX - expands on #8 (other)
* #E "Hospital" "Hospital"                               // ** TRX - expands on #8 (other)
* #F "School, Other Institutions, Administrative Area" "School, Other Institutions, Administrative Area" //TRX #2
* #G "Industrial and Construction Area" "Industrial and Construction Area" // TRX #6
* #H "Garage/Warehouse" "Garage/Warehouse"               // ** TRX - expands on #8 (other)
* #I "Trade and Service Area" "Trade and Service Area"   // TRX #5
* #J "Mine/Quarry" "Mine/Quarry"                         // ** TRX - expands on #8 (other)
* #K "Street/highway" "Street/highway"                   // TRX #4
* #L "Public Recreation Area" "Public Recreation Area"   // ** TRX - expands on #8 (other)
* #M "Institutional Recreation Area" "Institutional Recreation Area" // ** TRX - expands on #8 (other)
* #N "Sports and Recreation Area" "Sports and Recreation Area" // TRX #3
* #O "Other" "Other"                                     // TRX #8
* #P "Other specified place" "Other specified place"     // ** TRX - expands on #8 (other)
* #Q "Street/highway" "Street/highway"                   // TRX #9

---

// File: input/fsh/codesystems/CS_SystemReject.fsh


CodeSystem: SystemRejectCS
Id: vrdr-system-reject-cs
Title: "System Reject Code System"
Description: "System Reject Code System"
* ^caseSensitive = true
* ^experimental = false
* ^status = #active
* #0 "Not Rejected" "Not Rejected"
* #1 "MICAR Reject Dictionary Match" "MICAR Reject  Dictionary match"
* #2 "ACME Reject" "ACME Reject"
* #3 "MICAR Reject Rule Application" "MICAR Reject Rule Application"
* #4 "Record Reviewed" "Record Reviewed"


---

// File: input/fsh/codesystems/CS_TransaxConversion.fsh

CodeSystem: TransaxConversionCS
Id: vrdr-transax-conversion-cs
Title: "Transax Conversion CodeSystem"
Description: "Transax Conversion Code System"
* ^caseSensitive = true
* ^experimental = false
* ^status = #active
* #3 "Conversion using non-ambivalent table entries" "Conversion using non-ambivalent table entries"
* #4 "Conversion using ambivalent table entries" "Conversion using ambivalent table entries"
* #5 "Duplicate entity-axis codes deleted; no other action involved" "Duplicate entity-axis codes deleted; no other action involved"
* #6 "Artificial code conversion; no other action" "Artificial code conversion; no other action"

---

// File: input/fsh/ConceptMaps/CM_ActivityAtTimeOfDeath.fsh


Instance: ActivityAtTimeOfDeathCM
InstanceOf: ConceptMap
Description: "Concept Map for ActivityAtTimeOfDeath Value Set"
Usage: #definition
* experimental = false
* insert ConceptMapIntro(ActivityAtTimeOfDeath, ActivityAtTimeOfDeathVS)
* insert AddGroup($IJE,[[Canonical(ActivityAtTimeOfDeathCS)]])
* insert MapConcept(#0, "While engaged in sports activity", #0,  "While engaged in sports activity")
* insert MapConcept(#1, "While engaged in leisure activities.", #1,  "While engaged in leisure activities.")
* insert MapConcept(#2, "While working for income", #2,  "While working for income")
* insert MapConcept(#3, "While engaged in other types of work", #3,  "While engaged in other types of work")
* insert MapConcept(#4, "While resting\, sleeping\, eating\, or engaging in other vital activities", #4,  "While resting\, sleeping\, eating\, or engaging in other vital activities")
* insert MapConcept(#8, "While engaged in other specified activities.", #8,  "While engaged in other specified activities.")
* insert MapConcept(#9, "During unspecified activity", #9,  "During unspecified activity")

---

// File: input/fsh/ConceptMaps/CM_AdministrativeGender.fsh

Instance: AdministrativeGenderCM
InstanceOf: ConceptMap
Usage: #definition
* experimental = false
* insert ConceptMapIntro(AdministrativeGender, AdministrativeGenderVS)
* insert AddGroup($IJE,$admingender)
* insert MapConcept( #M,  "Male",#male, "Male")
* insert MapConcept( #F,  "Female",#female, "Female")
* insert MapConcept( #U,  "Unknown",#unknown, "Unknown")

---

// File: input/fsh/ConceptMaps/CM_CertifierTypes.fsh

Instance: CertifierTypesCM
// Id: vrdr-certifier-types-cm
InstanceOf: ConceptMap
Usage: #definition
* experimental = false
* insert ConceptMapIntro(CertifierTypes, CertifierTypesVS)
* insert AddGroup($IJE,$sct)
* insert MapConcept( #D ,  "Certifying Physician",#434651000124107 , "Certifying physician.")
* insert MapConcept( #P ,  "Pronouncing and Certifying Physician",#434641000124105 , "Pronouncing & Certifying physician.")
* insert MapConcept( #M ,  "Medical Examiner/Coroner",#455381000124109 , "Medical Examiner/Coroner")
* insert AddGroup($IJE,$v3-NullFlavor)
* insert MapConcept( #freetext ,  "Other Individual Legally Allowed to Certify",#OTH , "other")


---

// File: input/fsh/ConceptMaps/CM_ContributoryTobaccoUse.fsh

Instance: ContributoryTobaccoUseCM
InstanceOf: ConceptMap
// Id:  vrdr-contributory-tobacco-use-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(ContributoryTobaccoUse, ContributoryTobaccoUseVS)
* insert AddGroup($IJE,$sct)
* insert MapConcept( #Y,  "Yes",#373066001, "Yes")
* insert MapConcept( #N,  "No",#373067005, "No")
* insert MapConcept( #P,  "Probably",#2931005, "Probably")
* insert AddGroup($IJE,$v3-NullFlavor)
* insert MapConcept( #U,  "Unknown",#UNK, "unknown")
* insert MapConcept( #C,  "Not on certificate",#NI, "NoInformation")

---

// File: input/fsh/ConceptMaps/CM_DeathPregnancyStatus.fsh

Instance: DeathPregnancyStatusCM
InstanceOf: ConceptMap
// Id: vrdr-pregnancy-status-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(PregnancyStatus, DeathPregnancyStatusVS)
* insert AddGroup($IJE,Canonical(DeathPregnancyStatusCS\))
* insert MapConcept( #1,  "Not pregnant within past year",#1, "Not pregnant within past year")
* insert MapConcept( #2,  "Pregnant at time of death",#2, "Pregnant at time of death")
* insert MapConcept( #3,  "Not pregnant\, but pregnant within 42 days of death",#3, "Not pregnant\, but pregnant within 42 days of death")
* insert MapConcept( #4,  "Not pregnant\, but pregnant 43 days to 1 year before death",#4, "Not pregnant\, but pregnant 43 days to 1 year before death")
* insert MapConcept( #7,  "Not reported on certificate",#7, "Not reported on certificate")
* insert MapConcept( #9,  "Unknown if pregnant within the past year",#9, "Unknown if pregnant within the past year")
* insert AddGroup($IJE,$v3-NullFlavor)
* insert MapConcept( #8 ,  "Not Applicable",#NA , "not applicable")

---

// File: input/fsh/ConceptMaps/CM_EditBypass.fsh


Instance: EditBypass01CM
InstanceOf: ConceptMap
// Id: vrdr-edit-bypass-01-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(EditBypass01, EditBypass01VS)
* insert AddGroup($IJE,[[Canonical(CodeSystemEditFlagsVitalRecords)]])
* insert MapConcept(#0, "Edit Passed", #0,  "Edit Passed")
* insert MapConcept(#1, "Edit Failed\, Data Queried\, and Verified", #1,  "Edit Failed\, Data Queried\, and Verified")

Instance: EditBypass012CM
InstanceOf: ConceptMap
// Id: vrdr-edit-bypass-012-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(EditBypass012, EditBypass012VS)
* insert AddGroup($IJE,[[Canonical(CodeSystemEditFlagsVitalRecords)]])
* insert MapConcept(#0, "Edit Passed", #0,  "Edit Passed")
* insert MapConcept(#1, "Edit Failed\, Data Queried\, and Verified", #1,  "Edit Failed\, Data Queried\, and Verified")
* insert MapConcept(#2, "Edit Failed\, Data Queried\, but not Verified", #2,  "Edit Failed\, Data Queried\, but not Verified")

Instance: EditBypass0124CM
InstanceOf: ConceptMap
// Id: vrdr-edit-bypass-0124-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(EditBypass0124, EditBypass0124VS)
* insert AddGroup($IJE,[[Canonical(CodeSystemEditFlagsVitalRecords)]])
* insert MapConcept(#0, "Edit Passed", #0,  "Edit Passed")
* insert MapConcept(#1, "Edit Failed\, Data Queried\, and Verified", #1,  "Edit Failed\, Data Queried\, and Verified")
* insert MapConcept(#2, "Edit Failed\, Data Queried\, but not Verified", #2,  "Edit Failed\, Data Queried\, but not Verified")
* insert MapConcept(#4, "Edit Failed\, Query Needed", #4,  "Edit Failed\, Query Needed")


---

// File: input/fsh/ConceptMaps/CM_FilingFormat.fsh

Instance: FilingFormatCM
InstanceOf: ConceptMap
// Id: vrdr-filing-format-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(FilingFormat, FilingFormatVS)
* insert AddGroup($IJE,[[Canonical(FilingFormatCS)]])
* insert MapConcept(#0, "Electronic mode", #electronic,  "Electronic")
* insert MapConcept(#1, "Paper mode", #paper,  "Paper")
* insert MapConcept(#2, "Mixed mode", #mixed,  "Mixed")

---

// File: input/fsh/ConceptMaps/CM_IntentionalReject.fsh


Instance: IntentionalRejectCM
InstanceOf: ConceptMap
// Id: vrdr-intentional-reject-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(IntentionalReject, IntentionalRejectVS)
* insert AddGroup($IJE,[[Canonical(IntentionalRejectCS)]])
* insert MapConcept(#1, "Reject1", #1,  "Reject1")
* insert MapConcept(#2, "Reject2", #2,  "Reject2")
* insert MapConcept(#3, "Reject3", #3,  "Reject3")
* insert MapConcept(#4, "Reject4", #4,  "Reject4")
* insert MapConcept(#5, "Reject5", #5,  "Reject5")
* insert MapConcept(#9, "Reject9", #9,  "Reject9")


---

// File: input/fsh/ConceptMaps/CM_MannerOfDeath.fsh

Instance: MannerOfDeathCM
InstanceOf: ConceptMap
// Id: vrdr-manner-of-death-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(MannerOfDeath, MannerOfDeathVS)
* insert AddGroup($IJE,$sct)
* insert MapConcept( #N,  "Natural",#38605008, "Natural death")
* insert MapConcept( #A,  "Accident",#7878000, "Accidental death")
* insert MapConcept( #S,  "Suicide",#44301001, "Suicide")
* insert MapConcept( #H,  "Homicide",#27935005, "Homicide")
* insert MapConcept( #P,  "Pending Investigation",#185973002, "Patient awaiting investigation")
* insert MapConcept( #C,  "Could not be determined",#65037004, "Death\, manner undetermined")

---

// File: input/fsh/ConceptMaps/CM_MethodOfDisposition.fsh

Instance: MethodOfDispositionCM
InstanceOf: ConceptMap
// Id: vrdr-method-of-disposition-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(MethodOfDisposition, MethodOfDispositionVS)
* insert AddGroup($IJE,$sct)
* insert MapConcept( #B,  "Burial",#449971000124106, "Burial")
* insert MapConcept( #C,  "Cremation",#449961000124104, "Cremation")
* insert MapConcept( #D,  "Donation",#449951000124101, "Donation")
* insert MapConcept( #E,  "Entombment",#449931000124108, "Entombment")
* insert MapConcept( #R,  "Removal from State",#449941000124103, "Removal from State")
* insert AddGroup($IJE,$v3-NullFlavor)
* insert MapConcept( #O,  "Other",#OTH, "other")
* insert MapConcept( #U,  "Unknown",#UNK, "unknown")


---

// File: input/fsh/ConceptMaps/CM_PlaceOfDeathVS.fsh

Instance: PlaceOfDeathCM
InstanceOf: ConceptMap
// Id: vrdr-place-of-death-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(PlaceOfDeath, PlaceOfDeathVS)
* insert AddGroup($IJE,$sct)
* insert MapConcept( #1,  "Inpatient",#16983000, "Death in hospital")
* insert MapConcept( #2,  "Emergency Room/Outpatient",#450391000124102, "Death in hospital-based emergency department or outpatient department")
* insert MapConcept( #3,  "Dead on Arrival",#63238001, "Dead on arrival at hospital")
* insert MapConcept( #4,  "Decedent's Home",#440081000124100, "Death in home")
* insert MapConcept( #5,  "Hospice Facility",#440071000124103, "Death in hospice")
* insert MapConcept( #6,  "Nursing Home/Long Term Care Facility",#450381000124100, "Death in nursing home or long term care facility")
* insert AddGroup($IJE,$v3-NullFlavor)
* insert MapConcept( #7,  "Other",#OTH, "other")
* insert MapConcept( #9,  "Unknown",#UNK, "unknown")


---

// File: input/fsh/ConceptMaps/CM_PlaceOfInjury.fsh

Instance: PlaceOfInjuryCM
InstanceOf: ConceptMap
Usage: #definition
* experimental = false
// Id: vrdr-place-of-injury-cm
* insert ConceptMapIntro(PlaceOfInjury, PlaceOfInjuryVS)
* insert AddGroup($IJE,$loinc)
* insert MapConcept( #0,  "Home",#LA14084-0, "Home")
* insert MapConcept( #1,  "Residential Institution",#LA14085-7, "Residential Institution")
* insert MapConcept( #2,  "School\, Other Institutions\, Administrative Area",#LA14086-5, "School")
* insert MapConcept( #3,  "Sports and Recreation Area",#LA14088-1, "Sports or Recreation Area")
* insert MapConcept( #4,  "Street/highway",#LA14089-9, "Street or highway")
* insert MapConcept( #5,  "Trade and Service Area",#LA14090-7, "Trade or service area")
* insert MapConcept( #6,  "Industrial and Construction Area",#LA14091-5, "Industrial or construction area")
* insert MapConcept( #7,  "Farm",#LA14092-3, "Farm")
* insert MapConcept( #9,  "Unspecified Place",#LA14093-1, "Unspecified")
* insert AddGroup($IJE,$v3-NullFlavor)
* insert MapConcept( #8,  "Other specified Place",#OTH, "other")


---

// File: input/fsh/ConceptMaps/CM_ReplaceStatus.fsh

Instance: ReplaceStatusCM
InstanceOf: ConceptMap
// Id: vrdr-replace-status-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(ReplaceStatus, ReplaceStatusVS)
* insert AddGroup($IJE,[[Canonical(ReplaceStatusCS)]])
* insert MapConcept(#0, "Original Submission", #original,  "original record")
* insert MapConcept(#1, "Updated Submission", #updated,  "updated record")
* insert MapConcept(#2, "Updated Submission - not for NCHS", #updated_notforNCHS,  "updated record not for nchs")

---

// File: input/fsh/ConceptMaps/CM_SpouseAlive.fsh

Instance: SpouseAliveCM
InstanceOf: ConceptMap
// Id: vrdr-marital-status-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(SpouseAlive, SpouseAliveVS)
* insert AddGroup($IJE,$v2-0136)
* insert MapConcept( #1,  "Yes",#Y, "Yes")
* insert MapConcept( #2,  "No",#N, "No")
* insert AddGroup($IJE,$v3-NullFlavor)
* insert MapConcept( #8,  "Unmarried",#NA, "not applicable")
* insert MapConcept( #9,  "Unknown",#UNK, "unknown")

---

// File: input/fsh/ConceptMaps/CM_SystemReject.fsh


Instance: SystemRejectCM
InstanceOf: ConceptMap
// Id: vrdr-System-reject-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(SystemReject, SystemRejectVS)
* insert AddGroup($IJE,[[Canonical(SystemRejectCS)]])
* insert MapConcept(#0, "Not Rejected", #0,  "Not Rejected")
* insert MapConcept(#1, "MICAR Reject Dictionary Match", #1,  "MICAR Reject Dictionary Match")
* insert MapConcept(#2, "ACME Reject", #2,  "ACME Reject")
* insert MapConcept(#3, "MICAR Reject Rule Application", #3,  "MICAR Reject Rule Application")
* insert MapConcept(#4, "Record Reviewed", #4,  "Record Reviewed")


---

// File: input/fsh/ConceptMaps/CM_TransaxConversion.fsh


Instance: TransaxConversionCM
InstanceOf: ConceptMap
// Id: vrdr-transax-conversion-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(TransaxConversion, TransaxConversionVS)
* insert AddGroup($IJE,[[Canonical(TransaxConversionCS)]])
* insert MapConcept(#3, "Conversion using non-ambivalent table entries", #3,  "Conversion using non-ambivalent table entries")
* insert MapConcept(#4, "Conversion using ambivalent table entries", #4,  "Conversion using ambivalent table entries")
* insert MapConcept(#5, "Duplicate entity-axis codes deleted; no other action involved", #5,  "Duplicate entity-axis codes deleted; no other action involved")
* insert MapConcept(#6, "Artificial code conversion; no other action", #6,  "Artificial code conversion; no other action")


---

// File: input/fsh/ConceptMaps/CM_TransportationIncidentRole.fsh

Instance: TransportationIncidentRoleCM
InstanceOf: ConceptMap
// Id: vrdr-transportation-incident-role-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(TransportationIncidentRole, TransportationIncidentRoleVS)
* insert AddGroup($IJE,$sct)
* insert MapConcept( #DR,  "Driver/Operator",#236320001, "Vehicle driver")
* insert MapConcept( #PA,  "Driver/Operator",#257500003, "Vehicle passenger")
* insert MapConcept( #PE,  "Driver/Operator",#257518000, "Pedestrian")
* insert AddGroup($IJE,$v3-NullFlavor)
* insert MapConcept( #blank ,  "Blank",#NA , "not applicable")
* insert MapConcept( #blank ,  "Blank",#UNK , "unknown")
* insert MapConcept( #freetext ,  "Any other Role",#OTH , "other")

---

// File: input/fsh/extensions/SD_AliasStatusExtension.fsh

Extension: AliasStatus
Id: AliasStatus
Title: "Alias Status of a Death Roster"
Description: "Alias Status of a Death Roster.  If true, is an alias record."
* value[x] 1..1
* value[x] only boolean
* insert ExtensionContextResource(Bundle)
* insert ExtensionContextResource(Composition)
* insert ExtensionContextResource(Bundle.meta)


---

// File: input/fsh/extensions/SD_FilingFormatExtension.fsh

Extension: FilingFormat
Id: FilingFormat
Title: "Filing Format"
Description: "Filing Format Extension."
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from FilingFormatVS (required)
* insert ExtensionContextResource(Composition)



---

// File: input/fsh/extensions/SD_IdentifierAndStateSpecificExtensions.fsh

Extension: StateSpecificField
Id: StateSpecificField
Title: "State Specific Field"
Description: "An arbitratry string included by a submitting jurisdiction"
* value[x] 1..1
* value[x] only string
* valueString ^maxLength = 30
* insert ExtensionContextResource(Composition)
* insert ExtensionContextResource(Identifier)
* insert ExtensionContextResource(Bundle)

---

// File: input/fsh/extensions/SD_NVSSSexAtDeath_extension.fsh

Extension: NVSSSexAtDeath
Id: NVSS-SexAtDeath
Title: "NVSS SexAtDeath"
Description: "Sex on visual inspection at the time of death by the funeral home"
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from AdministrativeGenderVS (preferred)
* insert ExtensionContextResource(Patient)


Extension: SpouseAlive
Id: SpouseAlive
Title: "Spouse Is Alive"
Description: "Spouse is Alive."
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from SpouseAliveVS (required)
* insert ExtensionContextResource(Patient)


---

// File: input/fsh/extensions/SD_PractitionerRole.fsh

Extension: PractitionerRole
Id: practitioner-role
Title: "Practitioner Role"
Description: "Used to indicate the role played by a practitioner to facilitate simple FHIRPath-based queries."
* insert ExtensionContextResource(Practitioner)
* value[x] 1..1
* value[x] only code


---

// File: input/fsh/extensions/SD_ReplaceStatusExtension.fsh

Extension: ReplaceStatus
Id: ReplaceStatus
Title: "Replacement Status of a Death Record (deprecated)"
Description: "Replacement Status of a Death Record.  The use of this extension has been deprecated and wil be ignored for NCHS submissions.  See the [NCHS Vital Records Messaging IG]
for a description of how to specify replace status at the message level."
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from ReplaceStatusVS (required)
* value[x] ^short = "Replacement Status of a Death Record (deprecated)"
* insert ExtensionContextResource(Composition)
* insert ExtensionContextResource(Bundle)
* insert ExtensionContextResource(Bundle.meta)



---

// File: input/fsh/instances/EX_AutopsyPerformedIndicator.fsh

Instance: AutopsyPerformedIndicator-Example1
InstanceOf: AutopsyPerformedIndicator
Usage: #example
Description: "AutopsyPerformedIndicator-Example1"
* insert AddMetaProfile(AutopsyPerformedIndicator)
* status = #final
* subject = Reference(Decedent-Example1)
* valueCodeableConcept = $v2-0136#Y "Yes"
* component[autopsyResultsAvailable].valueCodeableConcept = $v2-0136#Y "Yes"

---

// File: input/fsh/instances/EX_BirthRecordIdentifier.fsh

Instance: BirthRecordIdentifier-Example1
InstanceOf: BirthRecordIdentifier
Usage: #example
Description: "BirthRecordIdentifier-Example1 - identifier of the decedent's birth certificate"
* insert AddMetaProfile(BirthRecordIdentifier)
* status = #final
* subject = Reference(Decedent-Example1)
* valueString = "717171"
* component[birthJurisdiction].valueString = "YC"
* component[birthYear].valueDateTime = "1961"

Instance: BirthRecordIdentifierChild-Example1
InstanceOf: BirthRecordIdentifierChild
Usage: #example
Description: "BirthRecordIdentifierChild-Example1 - identifier of the decedent's child's birth certificate number"
* insert AddMetaProfile(BirthRecordIdentifierChild)
* status = #final
* subject = Reference(Decedent-Example1)
* valueString = "717171"
* component[birthJurisdiction].valueString = "YC"
* component[birthYear].valueDateTime = "1961"

Instance: FetalDeathRecordIdentifier-Example1
InstanceOf: FetalDeathRecordIdentifier
Usage: #example
Description: "FetalDeathRecordIdentifier-Example1 - identifier of the decedent's fetus's fetal death record"
* insert AddMetaProfile(FetalDeathRecordIdentifier)
* status = #final
* subject = Reference(Decedent-Example1)
* valueString = "717171"
* component[deathJurisdiction].valueString = "YC"
* component[year].valueDateTime = "1961"

---

// File: input/fsh/instances/EX_CausesOfDeath.fsh

Instance: CauseOfDeathPart1-Example1
InstanceOf: CauseOfDeathPart1
Usage: #example
Description: "CauseOfDeathPart1New-Example1"
* meta.profile = Canonical(CauseOfDeathPart1)
* valueCodeableConcept.text = "Cardiopulmonary arrest"
* subject = Reference(Decedent-Example1)
* component[lineNumber].valueInteger = 1
* component[interval].valueString = "4 hours"
* performer = Reference(Certifier-Example1)
* status = #final

Instance: CauseOfDeathPart1-Example2
InstanceOf: CauseOfDeathPart1
Usage: #example
Description: "CauseOfDeathPart1New-Example2"
* meta.profile = Canonical(CauseOfDeathPart1)
* valueCodeableConcept.text = "Eclampsia"
* component[lineNumber].valueInteger = 2
* component[interval].valueString = "3 months"
* subject = Reference(Decedent-Example1)
* performer = Reference(Certifier-Example1)
* status = #final

Instance: CauseOfDeathPart2-Example1
InstanceOf: CauseOfDeathPart2
Usage: #example
Description: "CauseOfDeathPart2New-Example1"
* meta.profile = Canonical(CauseOfDeathPart2)
* valueCodeableConcept.text = "hypertensive heart disease"
* subject = Reference(Decedent-Example1)
* performer = Reference(Certifier-Example1)
* status = #final

// Instance: CauseOfDeathPathway-Example1
// InstanceOf: CauseOfDeathPathway
// Usage: #example
// Description: "CauseOfDeathPathway-Example1"
// * insert AddMetaProfile(CauseOfDeathPathway)
// * status = #current
// * source = Reference(Certifier-Example1)
// // * orderedBy = $list-order#priority "Sorted by Priority"
// * entry[0].item = Reference(CauseOfDeathPart1New-Example1)
// * entry[+].item = Reference(CauseOfDeathPart1New-Example2)






---

// File: input/fsh/instances/EX_Certifier.fsh


/*  Certifier */
Instance: Certifier-Example1
InstanceOf: Certifier
Usage: #example
Description: "Certifier-Example1"
* insert AddMetaProfile(Certifier)
* name.use = #official
* name.family = "Black"
* name.given = "Jim"
* address.line = "44 South Street"
* address.city = "Bird in Hand"
* address.state = "PA"
* address.postalCode = "17505"
* address.country = "US"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9941339100"

Instance: Certifier-Example2-no-NPI
InstanceOf: Certifier
Usage: #example
Description: "Certifier-Example2 (no NPI)"
* insert AddMetaProfile(Certifier)
* name.use = #official
* name.family = "Black"
* name.given = "Jim"
* address.line = "44 South Street"
* address.city = "Bird in Hand"
* address.state = "PA"
* address.postalCode = "17505"
* address.country = "US"
* identifier.extension[0]
  * url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
  * valueCode = #unknown

---

// File: input/fsh/instances/EX_CodedContentBundles_New.fsh


RuleSet: Identifiers2020NY000182
* identifier.value = "2020NY000182"
* identifier.extension[certificateNumber].valueString = "000182"
* identifier.extension[auxiliaryStateIdentifier1].valueString = "000000000001"
* identifier.extension[auxiliaryStateIdentifier2].valueString = "100000000001"

Instance: CauseOfDeathCodedContentBundle-Example1
InstanceOf: CauseOfDeathCodedContentBundle
Usage: #example
Description: "CauseofDeathCodedContentBundle-Example1"
* insert AddMetaProfile(CauseOfDeathCodedContentBundle)
* identifier.system = "http://nchs.cdc.gov/vrdr_id"
* identifier.value = "2020NY000182"
* identifier.extension[certificateNumber].valueString = "000182"
* identifier.extension[auxiliaryStateIdentifier1].valueString = "000000000001"
* identifier.extension[stateSpecificField].valueString = "state specific content"
* timestamp = "2020-10-20T14:48:35.401641-04:00"
* insert addentry(Observation, ActivityAtTimeOfDeath-Example1)
* insert addentry(Observation, ManualUnderlyingCauseOfDeath-Example1)
* insert addentry(Observation, AutomatedUnderlyingCauseOfDeath-Example1)
* insert addentry(Observation, RecordAxisCauseOfDeath-Example1)
* insert addentry(Observation, EntityAxisCauseOfDeath-Example1)
* insert addentry(Observation, EntityAxisCauseOfDeath-Example2)
* insert addentry(Observation, EntityAxisCauseOfDeath-Example3)
* insert addentry(Observation, EntityAxisCauseOfDeath-Example4)
* insert addentry(Observation, PlaceOfInjury-Example1)
* insert addentry(Parameter, CodingStatusValues-Example1)
// Input Data
* insert addentry(Observation, DecedentPregnancyStatus-Example1)
* insert addentry(Observation, TobaccoUseContributedToDeath-Example1)
* insert addentry(Observation, SurgeryDate-Example1)
* insert addentry(Observation, MannerOfDeath-Example1)
* insert addentry(Observation, InjuryIncident-Example1)
* insert addentry(Procedure, DeathCertification-Example2)
* insert addentry(Observation, CauseOfDeathPart1-Example1)
* insert addentry(Observation, CauseOfDeathPart1-Example2)
* insert addentry(Observation, CauseOfDeathPart2-Example1)
// * insert addentry(List, CauseOfDeathPathway-Example1)
* insert addentry(Observation, AutopsyPerformedIndicator-Example1)


Instance: DemographicCodedContentBundle-Example1
InstanceOf: DemographicCodedContentBundle
Usage: #example
Description: "DemographicCodedContentBundle-Example1"
* insert AddMetaProfile(DemographicCodedContentBundle)
* identifier.system = "http://nchs.cdc.gov/vrdr_id"
* insert Identifiers2020NY000182
* timestamp = "2020-10-20T14:48:35.401641-04:00"
* insert addentry(Observation, InputRaceAndEthnicity-Example1)
// Input Data
* insert addentry(Observation, CodedRaceAndEthnicity-Example1)


---

// File: input/fsh/instances/EX_CodedObservations.fsh

Instance: AutomatedUnderlyingCauseOfDeath-Example1
InstanceOf: AutomatedUnderlyingCauseOfDeath
Usage: #example
Description: "AutomatedUnderlyingCauseOfDeath-Example1"
* insert AddMetaProfile(AutomatedUnderlyingCauseOfDeath)
* status = #final
* subject.display = "NCHS generated"
* valueCodeableConcept = $icd10#J96.0

Instance: RecordAxisCauseOfDeath-Example1
InstanceOf: RecordAxisCauseOfDeath
Usage: #example
Description: "RecordAxisCauseOfDeath-Example1"
* insert AddMetaProfile(RecordAxisCauseOfDeath)
* status = #final
* subject.display = "NCHS generated"
* valueCodeableConcept = $icd10#J96.0
* component[position].valueInteger = 1

Instance: RecordAxisCauseOfDeath-Example2
InstanceOf: RecordAxisCauseOfDeath
Usage: #example
Description: "RecordAxisCauseOfDeath-Example2"
* insert AddMetaProfile(RecordAxisCauseOfDeath)
* status = #final
* subject.display = "NCHS generated"
* valueCodeableConcept = $icd10#T27.3
* component[position].valueInteger = 2

Instance: EntityAxisCauseOfDeath-Example1
InstanceOf: EntityAxisCauseOfDeath
Usage: #example
Description: "EntityAxisCauseOfDeath-Example1"
* insert AddMetaProfile(EntityAxisCauseOfDeath)
* status = #final
* subject.display = "NCHS generated"
* valueCodeableConcept = $icd10#J96.0
* component[lineNumber].valueInteger = 1
* component[position].valueInteger = 1

Instance: EntityAxisCauseOfDeath-Example2
InstanceOf: EntityAxisCauseOfDeath
Usage: #example
Description: "EntityAxisCauseOfDeath-Example2"
* insert AddMetaProfile(EntityAxisCauseOfDeath)
* status = #final
* subject.display = "NCHS generated"
* valueCodeableConcept = $icd10#T27.3
* component[lineNumber].valueInteger = 2
* component[position].valueInteger = 1

Instance: EntityAxisCauseOfDeath-Example3
InstanceOf: EntityAxisCauseOfDeath
Usage: #example
Description: "EntityAxisCauseOfDeath-Example3"
* insert AddMetaProfile(EntityAxisCauseOfDeath)
* status = #final
* subject.display = "NCHS generated"
* valueCodeableConcept = $icd10#X00
* component[lineNumber].valueInteger = 2
* component[position].valueInteger = 2
* component[eCodeIndicator].valueBoolean = true

Instance: EntityAxisCauseOfDeath-Example4
InstanceOf: EntityAxisCauseOfDeath
Usage: #example
Description: "EntityAxisCauseOfDeath-Example3"
* insert AddMetaProfile(EntityAxisCauseOfDeath)
* status = #final
* subject.display = "NCHS generated"
* valueCodeableConcept = $icd10#T27.2
* component[lineNumber].valueInteger = 2
* component[position].valueInteger = 3
* component[eCodeIndicator].valueBoolean = false


Instance: ManualUnderlyingCauseOfDeath-Example1
InstanceOf: ManualUnderlyingCauseOfDeath
Usage: #example
Description: "ManualUnderlyingCauseOfDeath-Example1"
* insert AddMetaProfile(ManualUnderlyingCauseOfDeath)
* status = #final
* subject.display = "NCHS generated"
* valueCodeableConcept = $icd10#J96.0

Instance: PlaceOfInjury-Example1
InstanceOf: PlaceOfInjury
Usage: #example
Description: "PlaceOfInjury-Example1"
* insert AddMetaProfile(PlaceOfInjury)
* status = #final
* subject.display = "NCHS generated"
* valueCodeableConcept = $loinc#LA14084-0	"Home"

Instance: ActivityAtTimeOfDeath-Example1
InstanceOf: ActivityAtTimeOfDeath
Usage: #example
Description: "ActivityAtTimeOfDeath-Example1"
* insert AddMetaProfile(ActivityAtTimeOfDeath)
* status = #final
* subject.display = "NCHS generated"
* valueCodeableConcept = ActivityAtTimeOfDeathCS#1 "While engaged in leisure activities."

Instance: CodedRaceAndEthnicity-Example1
InstanceOf: ObservationCodedRaceAndEthnicityVitalRecords
Usage: #example
Description: "CodedRaceAndEthnicity-Example1"
* insert AddMetaProfile(CodedRaceAndEthnicity)
* status = #final
* code = CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicity
* subject.display = "NCHS generated"
* component[FirstEditedCode].valueCodeableConcept = CodeSystemRaceCodeVitalRecords#101 "White"
* component[SecondEditedCode].valueCodeableConcept = CodeSystemRaceCodeVitalRecords#122 "Israeli"
* component[FirstAmericanIndianCode].valueCodeableConcept = CodeSystemRaceCodeVitalRecords#A31 "Arikara"
* component[RaceRecode40].valueCodeableConcept = CodeSystemRaceRecode40VitalRecords#20 "AIAN and Asian"
* component[HispanicCode].valueCodeableConcept = CodeSystemHispanicOriginVitalRecords#233 "Chilean"


Instance: InputRaceAndEthnicity-Example1
InstanceOf: ObservationInputRaceAndEthnicityVitalRecords
Usage: #example
Description: "InputRaceAndEthnicity-Example1"
* insert AddMetaProfile(InputRaceAndEthnicity)
* status = #final
* code = CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicity
* subject.display = "NCHS generated"
* component[White].valueBoolean = true
* component[BlackOrAfricanAmerican].valueBoolean = false
* component[BlackOrAfricanAmerican].valueBoolean = false
* component[AmericanIndianOrAlaskanNative].valueBoolean = true
* component[AsianIndian].valueBoolean = false
* component[Chinese].valueBoolean = false
* component[Filipino].valueBoolean = false
* component[Japanese].valueBoolean = false
* component[Korean].valueBoolean = false
* component[Vietnamese].valueBoolean = false
* component[OtherAsian].valueBoolean = true
* component[NativeHawaiian].valueBoolean = false
* component[GuamanianOrChamorro].valueBoolean = false
* component[Samoan].valueBoolean = false
* component[OtherPacificIslander].valueBoolean = false
* component[OtherRace].valueBoolean = false
* component[FirstOtherAsianLiteral].valueString = "Malaysian"
* component[FirstAmericanIndianOrAlaskanNativeLiteral].valueString = "Arikara"
* component[HispanicMexican].valueCodeableConcept = $v2-0136#Y "Yes"
* component[HispanicCuban].valueCodeableConcept = $v2-0136#Y "Yes"
* component[HispanicPuertoRican].valueCodeableConcept = $v2-0136#Y "Yes"
* component[HispanicOther].valueCodeableConcept = $v2-0136#N "No"

Instance: CodingStatusValues-Example1
InstanceOf: CodingStatusValues
Usage: #example
Description:   "CodingStatusValues-Example1"
* insert AddMetaProfile(CodingStatusValues)
* parameter[shipmentNumber].valueString = "A2B2"
* parameter[receiptDate].valueDate = "2021-12-12"
* parameter[coderStatus].valueInteger = 5
* parameter[intentionalReject].valueCodeableConcept = IntentionalRejectCS#1 "Reject1"
* parameter[acmeSystemReject].valueCodeableConcept = SystemRejectCS#0 "Not Rejected"
* parameter[transaxConversion].valueCodeableConcept = TransaxConversionCS#3 "Conversion using non-ambivalent table entries"


---

// File: input/fsh/instances/Ex_DeathCertificateDocument_UT.fsh

Instance: DeathCertificateDocument-UT-1
InstanceOf: DeathCertificateDocument
Description: "Example Record from UT"
Usage: #example
* timestamp = "2022-12-23T19:55:16.4587968+00:00"
* identifier.extension[certificateNumber].valueString = "000003"
* identifier.extension[auxiliaryStateIdentifier1].valueString = "2022000003"
* identifier.system = "http://nchs.cdc.gov/vrdr_id"
* identifier.value = "2022UT000003"
* type = #document
* insert addentry(Composition, DeathCertificateUT-Example1)
* insert addentry(Patient,DecedentUT-Example1)
* insert addentry(Procedure, ProcedureDeathCertificationUT-Example1)
* insert addentry(Practitioner, PractitionerUT-Certifier)
* insert addentry(Practitioner, PractitionerUT-Pronouncer)
* insert addentry(RelatedPerson, MotherUT-Example1)
* insert addentry(RelatedPerson, FatherUT-Example1)
* insert addentry(Observation, InputRaceAndEthnicityUT-Example1)
* insert addentry(Observation, BirthRecordIdentifierUT-Example1)
* insert addentry(Observation, EducationUT-Example1)
* insert addentry(Observation, PregnancyUT-Example1)
* insert addentry(Observation, AutopsyPerformedIndicatorUT-Example1)
* insert addentry(Observation, CauseOfDeathPart1UT-Example1)
* insert addentry(Observation, DeathDateUT-Example1)
* insert addentry(Organization, FuneralHomeUT-Example1)
* insert addentry(Observation, MannerOfDeathUT-Example1)
* insert addentry(Observation, TobaccoUseUT-Example1)
* insert addentry(Observation, InjuryIncidentUT-Example1)
* insert addentry(Observation, EmergingIssuesUT-Example1)
* insert addentry(Location, DeathLocationUT-Example1)
* insert addentry(Location, DispositionLocationUT-Example1)
* insert addentry(Observation, MilitaryServiceUT-Example1)
* insert addentry(Observation, AgeUT-Example1)
* insert addentry(Observation, UsualWorkUT-Example1)
* insert addentry(Observation, DispositionMethodUT-Example1)


Instance: DeathCertificateUT-Example1
InstanceOf: DeathCertificate
Usage: #example
Description: "DeathCertificateUT-Example1"
* extension[FilingFormat].valueCodeableConcept = FilingFormatCS#electronic
* extension[StateSpecificField].valueString = "20220101"
* status = #final
* title = "Death Certificate for Davis Lineberry Jr"
* type = $loinc#64297-5 "Death certificate"
* subject = Reference(DecedentUT-Example1)
* date = "2022-12-01T02:46:13-05:00"
* author = Reference(PractitionerUT-Certifier)
* attester.mode = #legal
* attester.party = Reference(PractitionerUT-Certifier)
* event.code = $sct#307930005 "Death certificate (record artifact)"
* event.detail = Reference(ProcedureDeathCertificationUT-Example1)
* section[DecedentDemographics]
  * entry[0] = Reference(DecedentUT-Example1)
  * entry[+] = Reference(BirthRecordIdentifierUT-Example1)
  * entry[+] = Reference(InputRaceAndEthnicityUT-Example1)
  * entry[+] = Reference(EducationUT-Example1)
  * entry[+] = Reference(AgeUT-Example1 )
  * entry[+] = Reference(FatherUT-Example1)
  * entry[+] = Reference(MotherUT-Example1)
  * entry[+] = Reference(UsualWorkUT-Example1)
  * entry[+] = Reference(MilitaryServiceUT-Example1)
  * entry[+] = Reference(EmergingIssuesUT-Example1)
* section[DeathCertification]
  * entry[0] = Reference(PractitionerUT-Certifier)
  * entry[+] = Reference(InjuryIncidentUT-Example1)
  * entry[+] = Reference(ProcedureDeathCertificationUT-Example1)
//  * entry[+] = Reference(DeathCertificationUT-Example1)
* section[DeathInvestigation]
  * entry[0] = Reference(AutopsyPerformedIndicatorUT-Example1)
  * entry[+] = Reference(CauseOfDeathPart1UT-Example1 )
  * entry[+] = Reference(DeathDateUT-Example1)
  * entry[+] = Reference(PregnancyUT-Example1 )
  * entry[+] = Reference(TobaccoUseUT-Example1 )
  * entry[+] = Reference(DeathLocationUT-Example1 )
  * entry[+] = Reference(MannerOfDeathUT-Example1 )
* section[DecedentDisposition]
  * entry[0] = Reference(FuneralHomeUT-Example1)
  * entry[+] = Reference(DispositionMethodUT-Example1 )
  * entry[+] = Reference(DispositionLocationUT-Example1 )


Instance: DecedentUT-Example1 // f906300e-3622-459c-8201-af0d9b90fb75
InstanceOf: Decedent
Usage: #example 
Description: "DecedentUT-Example1"
* extension[NVSSSexAtDeath].valueCodeableConcept = http://hl7.org/fhir/administrative-gender#male "Male"
//* extension[+].url = "http://hl7.org/fhir/StructureDefinition/patient-birthPlace"
//* extension[http://hl7.org/fhir/StructureDefinition/patient-birthPlace]
* extension[birthPlace]
  * valueAddress.use = #old
  * valueAddress.state = "CO"
  * valueAddress.country = "US"
* identifier[SSN].value = "429471420"
* name[currentLegalName]
  * family = "Lineberry"
  * given = "Davis"
  * suffix = "Jr"
* gender = #male
* birthDate = "2021-03-04"
// * birthDate.extension[partialDateTime]
//   * extension[year].valueUnsignedInt = 2021
//   * extension[month].valueUnsignedInt = 3
//   * extension[day].valueUnsignedInt = 4
* address.extension[stnum].valueString = "2722"
* address.extension[predir].valueString = "N"
* address.extension[stname].valueString = "Pin Oak"
* address.extension[stdesig].valueString = "Dr"
* address.extension[withinCityLimitsIndicator].valueCoding = $v2-0136#Y "Yes"
* address.line = "2722 N Pin Oak Dr"
* address.city = "Laramie"
* address.city.extension[cityCode].valuePositiveInt = 45050
* address.district = "Albany"
* address.district.extension[districtCode].valuePositiveInt = 1
* address.state = "WY"
* address.postalCode = "82070"
* address.country = "US"
* maritalStatus.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"
* maritalStatus = $v3-MaritalStatus#S "Never Married"

Instance: InputRaceAndEthnicityUT-Example1
InstanceOf: ObservationInputRaceAndEthnicityVitalRecords
Usage: #example
Description: "InputRaceAndEthnicityUT-Example1"
// * id = "0a1ded2c-6140-4abc-9128-0af93e2f2ea5"
* status = #final
* subject = Reference(DecedentUT-Example1)
* code = CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicity 
* component[White].valueBoolean = true
* component[BlackOrAfricanAmerican].valueBoolean = false
* component[AmericanIndianOrAlaskanNative].valueBoolean = true
* component[FirstAmericanIndianOrAlaskanNativeLiteral].valueString = "Cheyenne"
* component[Chinese].valueBoolean = false
* component[Japanese].valueBoolean = false
* component[NativeHawaiian].valueBoolean = false
* component[Filipino].valueBoolean = false
* component[OtherAsian].valueBoolean = false
* component[AsianIndian].valueBoolean = false
* component[Korean].valueBoolean = false
* component[Samoan].valueBoolean = false
* component[Vietnamese].valueBoolean = false
* component[GuamanianOrChamorro].valueBoolean = false
* component[OtherPacificIslander].valueBoolean = false
* component[OtherRace].valueBoolean = false
* component[HispanicMexican].valueCodeableConcept = $v2-0136#N "No"
* component[HispanicCuban].valueCodeableConcept = $v2-0136#N "No"
* component[HispanicPuertoRican].valueCodeableConcept = $v2-0136#N "No"
* component[HispanicOther].valueCodeableConcept = $v2-0136#N "No"

Instance: PractitionerUT-Certifier 
InstanceOf: Certifier 
Usage: #example
Description: "Certifying Practitioner"
// * id = "practitioner-ut-example1"
* identifier.value = "161632-1999"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* name.use = #official
* name.family = "Harrison"
* name.given[0] = "William"
* name.given[+] = "Henry"
* address.use = #work
* address.line[0] = "123 Fake St"
* address.line[+] = "apt # 123"
* address.city = "Salt Lake"
* address.state = "UT"
* address.postalCode = "84111"
* address.country = "US"

Instance: PractitionerUT-Pronouncer  
InstanceOf: USCorePractitionerProfile  
Usage: #example
Description: "Pronouncing Practitioner"
* identifier.value = "161632-2000"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* name.use = #official
* name.family = "Welby"
* name.given[0] = "Marcus"
* name.given[+] = "Edwin"
* address.use = #work
* address.line[0] = "123 Unreal St"
* address.line[+] = "apt # 123"
* address.city = "Ogden"
* address.state = "UT"
* address.postalCode = "84067"
* address.country = "US"

Instance: BirthRecordIdentifierUT-Example1 //b2b59a71-0a15-41dd-97ef-84b494bcd2c0
InstanceOf: BirthRecordIdentifier
Usage: #example
Description: "BirthRecordIdentifierUT-Example1"
* subject = Reference(DecedentUT-Example1)
* valueString = "001023"
* component[birthYear].valueDateTime = "2021"
* component[birthJurisdiction].valueString = "CO"

Instance: EducationUT-Example1
InstanceOf: ObservationEducationLevelVitalRecords
Usage: #example
Description: "EducationUT-Example1"
* subject = Reference(DecedentUT-Example1)
* status = #final
* code = $loinc#80913-7 "Highest level of education [US Standard Certificate of Death]"
* valueCodeableConcept.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"
* valueCodeableConcept = $v3-EducationLevel#ELEM "Elementary School"

Instance: FatherUT-Example1
InstanceOf: DecedentFather
Usage: #example
Description: "FatherUT-Example1"
* patient = Reference(DecedentUT-Example1)
* relationship = $v3-RoleCode#FTH "father"
* name.use = #official
* name.family = "Lineberry"
* name.given[0] = "*"
* name.given[+] = "*"

Instance: MotherUT-Example1
InstanceOf: DecedentMother
Usage: #example
Description: "MotherUT-Example1"
* patient = Reference(DecedentUT-Example1)
* relationship = $v3-RoleCode#MTH "mother"
* name.use = #official
* name.family = "*"
* name.given[0] = "*"
* name.given[+] = "*"

Instance: AutopsyPerformedIndicatorUT-Example1
InstanceOf: AutopsyPerformedIndicator
Usage: #example
Description: "AutopsyPerformedIndicatorUT-Example1"
// * id = "95176132-1030-418d-b1a4-594872f6bec7"
* subject = Reference(DecedentUT-Example1)
* valueCodeableConcept = $v3-NullFlavor#UNK "Unknown"
* component[autopsyResultsAvailable].valueCodeableConcept = $v3-NullFlavor#UNK "Unknown"

Instance: CauseOfDeathPart1UT-Example1 
InstanceOf: CauseOfDeathPart1
Usage: #example
Description: "CauseOfDeathPart1UT-Example1 "
* subject = Reference(DecedentUT-Example1)
* performer = Reference(PractitionerUT-Certifier)
* valueCodeableConcept.text = "Pending"
* component[lineNumber].valueInteger = 1
* component[interval].valueString = "Pending"
* status = #preliminary

Instance: DeathDateUT-Example1
InstanceOf: DeathDate
Usage: #example
Description: "DeathDateUT-Example1"
* status = #final 
* subject = Reference(DecedentUT-Example1)
* effectiveDateTime = "2022-01-17T20:23:00-05:00"
* performer = Reference(PractitionerUT-Pronouncer)
* valueDateTime.extension[partialDateTime]
  * extension[year].valueUnsignedInt = 2022
  * extension[month].valueUnsignedInt = 1
  * extension[day].valueUnsignedInt = 17
  * extension[time].valueTime = "18:23:00"
//* valueDateTime.extension.url = Canonical(ExtensionDateTimePartAbsentReasonVitalRecords)
* component.code = $loinc#58332-8 "Location of death"
* component.valueCodeableConcept = $sct#16983000 "Death in hospital"

Instance: DeathLocationUT-Example1 
InstanceOf: DeathLocation
Usage: #example
Description: "DeathLocationUT-Example1"
* name = "Salt Lake Regional Medical Cen"
* description = "Facility"
* address.city = "Salt Lake City"
* address.state = "UT"

Instance: AgeUT-Example1 
InstanceOf: DecedentAge
Usage: #example
Description: "AgeUT-Example1 "
// * id = "7eda2a2c-f92d-4885-949f-34c500241300"
* subject = Reference(DecedentUT-Example1)
//* valueQuantity.extension.url = "http://hl7.org/fhir/us/vrdr/StructureDefinition/BypassEditFlag"
* valueQuantity.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"
* valueQuantity = 10 'mo' "Months"

Instance: DispositionMethodUT-Example1 
InstanceOf: DecedentDispositionMethod
Usage: #example
Description: "DispositionMethodUT-Example1"
* status = #final 
* subject = Reference(DecedentUT-Example1)
* valueCodeableConcept = $sct#449971000124106 "Burial"

Instance: DispositionLocationUT-Example1
InstanceOf: DispositionLocation
Usage: #example
Description: "DispositionLocationUT-Example1"
// * id = "8371fc22-95da-4f72-a4be-674fc267cb7a"
* name = "Salt Lake City Cemetery"
* address.city = "Salt Lake City"
* address.state = "UT"
* address.country = "US"

Instance: UsualWorkUT-Example1
InstanceOf: DecedentUsualWork
Usage: #example
Description: "UsualWorkUT-Example1"
// * id = "0051e0b6-6990-4190-93a6-87442b4a50aa"
* status = #final
* subject = Reference(DecedentUT-Example1)
* valueCodeableConcept.text = "Infant"
* component[odh-UsualIndustry].valueCodeableConcept.text = "Never Worked"


Instance: MilitaryServiceUT-Example1
InstanceOf: DecedentMilitaryService
Usage: #example
Description: "MilitaryServiceUT-Example1"
// * id = "60bb97be-43fd-4e36-bd0d-49a7efdcbcda"
* subject = Reference(DecedentUT-Example1)
* valueCodeableConcept = $v2-0136#N "No"

Instance: PregnancyUT-Example1 
InstanceOf: DecedentPregnancyStatus
Usage: #example
Description: "PregnancyUT-Example1"
* status = #final 
* subject = Reference(DecedentUT-Example1)
//* valueCodeableConcept.extension[0].url = "http://hl7.org/fhir/us/vrdr/StructureDefinition/BypassEditFlag"
* valueCodeableConcept.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"
* valueCodeableConcept = $v3-NullFlavor#NA "Not applicable"

Instance: ExaminerContactedUT-Example1 
InstanceOf: ExaminerContacted
Usage: #example
Description: "ExaminerContactedUT-Example1"
* subject = Reference(DecedentUT-Example1)
* valueCodeableConcept = $v2-0136#N "No"

Instance: FuneralHomeUT-Example1
InstanceOf: FuneralHome
Usage: #example
Description: "FuneralHomeUT-Example1"
* active = true
* name = "Colonial Memorial Mortuary"
* address.line = "2128 South State"
* address.city = "Salt Lake City"
* address.district = "Salt Lake"
* address.state = "UT"
* address.postalCode = "84115"
* address.country = "US"

Instance: InjuryIncidentUT-Example1 
InstanceOf: InjuryIncident
Usage: #example
Description: "InjuryIncidentUT-Example1"
* status = #final 
* subject = Reference(DecedentUT-Example1)
* component[workInjuryIndicator].valueCodeableConcept = $v3-NullFlavor#UNK "Unknown"

Instance: MannerOfDeathUT-Example1 
InstanceOf: MannerOfDeath
Usage: #example
Description: "MannerOfDeathUT-Example1"
* status = #final 
* subject = Reference(DecedentUT-Example1)
* performer = Reference(PractitionerUT-Certifier)
* valueCodeableConcept = $sct#185973002 "Patient awaiting investigation"

Instance: TobaccoUseUT-Example1 
InstanceOf: TobaccoUseContributedToDeath
Usage: #example
Description: "TobaccoUseUT-Example1"
//* id = "8942bdc4-b1dd-4458-aa6a-158e22ea3d24"
* subject = Reference(DecedentUT-Example1)
* valueCodeableConcept = $sct#373067005 "No"

Instance: ProcedureDeathCertificationUT-Example1
InstanceOf: DeathCertification
Usage: #example
Description: "ProcedureDeathCertificationUT-Example1"
// * id = procedure-death-certification-ut-example1 
* status = #completed
* identifier.value = "161632-1999"
// * category = $sct#103693007 "Diagnostic procedure"
// * code = $sct#308646001 "Death certification"
* subject = Reference(DecedentUT-Example1)
* performer.function = $sct#434641000124105 "Death certification and verification by physician (procedure)"
* performer.actor = Reference(PractitionerUT-Certifier)
* performedDateTime = "2021-11-14T16:39:40-05:00"

Instance: EmergingIssuesUT-Example1
InstanceOf: ObservationEmergingIssuesVitalRecords
Usage: #example
Description: "EmergingIssuesUT-Example1"
// * id = "3a1d5d86-4399-48ad-9d55-a22ddd283bfa"
* subject = Reference(DecedentUT-Example1)
* component[EmergingIssue20].valueString = "043-A-110234"

---

// File: input/fsh/instances/EX_DeathCertificateDocument.fsh

Instance: DeathCertificateDocument-Example1
InstanceOf: DeathCertificateDocument
Usage: #example
Description: "DeathCertificateDocument-Example1"
* insert AddMetaProfile(DeathCertificateDocument)
* identifier.system = "http://nchs.cdc.gov/vrdr_id"
* insert Identifiers2020NY000182
* type = #document
* timestamp = "2020-10-20T14:48:35.401641-04:00"
* insert addentry(Composition, DeathCertificate-Example1)
* insert addentry(Patient, Decedent-Example1)
* insert addentry(RelatedPerson, DecedentFather-Example1)
* insert addentry(RelatedPerson, DecedentMother-Example1)
* insert addentry(RelatedPerson, DecedentSpouse-Example1)
* insert addentry(Observation, DecedentAge-Example1)
* insert addentry(Observation, InputRaceAndEthnicity-Example1)
* insert addentry(Observation, BirthRecordIdentifier-Example1)
* insert addentry(Observation, DecedentEducationLevel-Example1)
* insert addentry(Observation, DecedentMilitaryService-Example1)
* insert addentry(Observation, DecedentUsualWork-Example1)
* insert addentry(Observation, EmergingIssues-Example1)
* insert addentry(Observation, DecedentPregnancyStatus-Example1)
* insert addentry(Observation, TobaccoUseContributedToDeath-Example1)
* insert addentry(Observation, DeathDate-Example1)
* insert addentry(Practitioner, Pronouncer-Example1)
* insert addentry(Observation, SurgeryDate-Example1)
* insert addentry(Observation, ExaminerContacted-Example1)
* insert addentry(Observation, MannerOfDeath-Example1)
* insert addentry(Location, DeathLocation-Example1)
* insert addentry(Location, InjuryLocation-Example1)
* insert addentry(Observation, InjuryIncident-Example1)
* insert addentry(Practitioner, Certifier-Example1)
* insert addentry(Procedure, DeathCertification-Example1)
* insert addentry(Observation, CauseOfDeathPart1-Example1)
* insert addentry(Observation, CauseOfDeathPart1-Example2)
* insert addentry(Observation, CauseOfDeathPart2-Example1)
//* insert addentry(List, CauseOfDeathPathway-Example1)
* insert addentry(Location, DispositionLocation-Example1)
* insert addentry(Organization, FuneralHome-Example1)
* insert addentry(Observation, DecedentDispositionMethod-Example1)
* insert addentry(Observation, AutopsyPerformedIndicator-Example1)
* insert addentry(Practitioner, Mortician-Example1)

Instance: DeathCertificate-Example1
InstanceOf: DeathCertificate
Usage: #example
Description: "DeathCertificate-Example1"
Title: "DeathCertificate Example1"
*  status = #final
*  type = $loinc#64297-5 "Death certificate"
* insert addReferenceComposition(subject, Patient, Decedent-Example1)
*  date = "2020-11-15T16:39:54-05:00"
* insert addReferenceComposition(author, Practitioner, Certifier-Example1)
*  title = "Death Certificate"
*  attester.mode = #legal
*  attester.time = "2020-11-14T16:39:40-05:00"
* event.code = $sct#307930005 "Death certificate (record artifact)"
* insert addReferenceComposition(attester.party, Practitioner, Certifier-Example1)
* insert addReferenceComposition(event.detail, Procedure, DeathCertification-Example1)
*  extension[filingFormat].valueCodeableConcept = FilingFormatCS#electronic
*  extension[replaceStatus].valueCodeableConcept = ReplaceStatusCS#original
*  extension[stateSpecificField].valueString = "State Specific Content"
* section[DecedentDemographics]
  * insert addNamedEntryComposition(Decedent, Patient, Decedent-Example1) 
  * insert addNamedEntryComposition(Father, RelatedPerson, DecedentFather-Example1) 
  * insert addNamedEntryComposition(Mother, RelatedPerson, DecedentMother-Example1) 
  * insert addNamedEntryComposition(Spouse, RelatedPerson, DecedentSpouse-Example1) 
  * insert addNamedEntryComposition(Age, Observation, DecedentAge-Example1) 
  * insert addNamedEntryComposition(BirthRecordID, Observation, BirthRecordIdentifier-Example1) 
  * insert addNamedEntryComposition(EducationLevel, Observation, DecedentEducationLevel-Example1) 
  * insert addNamedEntryComposition(MilitaryService, Observation, DecedentMilitaryService-Example1) 
  * insert addNamedEntryComposition(UsualWork, Observation, DecedentUsualWork-Example1) 
  * insert addNamedEntryComposition(InputRaceAndEthnicity, Observation, InputRaceAndEthnicity-Example1) 
  * insert addNamedEntryComposition(EmergingIssues, Observation, EmergingIssues-Example1) 
* section[DeathInvestigation]
  * insert addNamedEntryComposition(ExaminerContacted, Observation, ExaminerContacted-Example1) 
  * insert addNamedEntryComposition(PregnancyStatus, Observation, DecedentPregnancyStatus-Example1) 
  * insert addNamedEntryComposition(TobaccoUse, Observation, TobaccoUseContributedToDeath-Example1) 
  * insert addNamedEntryComposition(Autopsy, Observation, AutopsyPerformedIndicator-Example1) 
  * insert addNamedEntryComposition(DeathLocation, Location, DeathLocation-Example1) 
  * insert addNamedEntryComposition(InjuryLocation, Location, InjuryLocation-Example1) 
  * insert addNamedEntryComposition(InjuryIncident, Observation, InjuryIncident-Example1) 
  * insert addNamedEntryComposition(DeathDate, Observation, DeathDate-Example1) 
  * insert addNamedEntryComposition(SurgeryDate, Observation, SurgeryDate-Example1) 
* section[DeathCertification]
  * insert addNamedEntryComposition(Certifier, Practitioner, Certifier-Example1) 
  * insert addNamedEntryComposition(DeathCertification, Procedure, DeathCertification-Example1) 
  * insert addNamedEntryComposition(MannerOfDeath, Observation, MannerOfDeath-Example1) 
  * insert addNamedEntryComposition(CauseOfDeathPart1, Observation, CauseOfDeathPart1-Example1) 
  * insert addNamedEntryComposition(CauseOfDeathPart1, Observation, CauseOfDeathPart1-Example2) 
  * insert addNamedEntryComposition(CauseOfDeathPart2, Observation, CauseOfDeathPart2-Example1) 
* section[DecedentDisposition]
  * insert addNamedEntryComposition(DispositionLocation, Location, DispositionLocation-Example1) 
  * insert addNamedEntryComposition(FuneralHome, Organization, FuneralHome-Example1) 
  * insert addNamedEntryComposition(DispositionMethod, Observation, DecedentDispositionMethod-Example1) 
  * insert addNamedEntryComposition(Mortician, Practitioner, Mortician-Example1) 

Instance: DeathCertificate-Example2
InstanceOf: DeathCertificate
Usage: #example
Description: "DeathCertificate-Example2 (with coded content)"
Title: "DeathCertificate Example2"
* status = #final
*  type = $loinc#64297-5 "Death certificate"
* insert addReferenceComposition(subject, Patient, Decedent-Example1)
*  date = "2020-11-15T16:39:54-05:00"
* insert addReferenceComposition(author, Practitioner, Certifier-Example1)
*  title = "Death Certificate"
*  attester.mode = #legal
*  attester.time = "2020-11-14T16:39:40-05:00"
* event.code = $sct#307930005 "Death certificate (record artifact)"
* insert addReferenceComposition(attester.party, Practitioner, Certifier-Example1)
* insert addReferenceComposition(event.detail, Procedure, DeathCertification-Example1)
*  extension[filingFormat].valueCodeableConcept = FilingFormatCS#electronic
*  extension[replaceStatus].valueCodeableConcept = ReplaceStatusCS#original
*  extension[stateSpecificField].valueString = "State Specific Content"
// *  section[DecedentDemographics].entry[Decedent].resource = Decedent-Example1
// The next line shouldn't be necessary
//*  section[DecedentDemographics].code = DocumentSectionCS#DecedentDemographics
* section[DecedentDemographics]
  * insert addNamedEntryComposition(Decedent, Patient, Decedent-Example1) 
  * insert addNamedEntryComposition(Father, RelatedPerson, DecedentFather-Example1) 
  * insert addNamedEntryComposition(Mother, RelatedPerson, DecedentMother-Example1) 
  * insert addNamedEntryComposition(Spouse, RelatedPerson, DecedentSpouse-Example1) 
  * insert addNamedEntryComposition(Age, Observation, DecedentAge-Example1) 
  * insert addNamedEntryComposition(BirthRecordID, Observation, BirthRecordIdentifier-Example1) 
  * insert addNamedEntryComposition(EducationLevel, Observation, DecedentEducationLevel-Example1) 
  * insert addNamedEntryComposition(MilitaryService, Observation, DecedentMilitaryService-Example1) 
  * insert addNamedEntryComposition(UsualWork, Observation, DecedentUsualWork-Example1) 
  * insert addNamedEntryComposition(InputRaceAndEthnicity, Observation, InputRaceAndEthnicity-Example1) 
  * insert addNamedEntryComposition(EmergingIssues, Observation, EmergingIssues-Example1) 
* section[DeathInvestigation]
  * insert addNamedEntryComposition(ExaminerContacted, Observation, ExaminerContacted-Example1) 
  * insert addNamedEntryComposition(PregnancyStatus, Observation, DecedentPregnancyStatus-Example1) 
  * insert addNamedEntryComposition(TobaccoUse, Observation, TobaccoUseContributedToDeath-Example1) 
  * insert addNamedEntryComposition(Autopsy, Observation, AutopsyPerformedIndicator-Example1) 
  * insert addNamedEntryComposition(DeathLocation, Location, DeathLocation-Example1) 
  * insert addNamedEntryComposition(InjuryLocation, Location, InjuryLocation-Example1) 
  * insert addNamedEntryComposition(InjuryIncident, Observation, InjuryIncident-Example2) 
  * insert addNamedEntryComposition(DeathDate, Observation, DeathDate-Example2) 
  * insert addNamedEntryComposition(SurgeryDate, Observation, SurgeryDate-Example1) 
* section[DeathCertification]
  * insert addNamedEntryComposition(Certifier, Practitioner, Certifier-Example1) 
  * insert addNamedEntryComposition(DeathCertification, Procedure, DeathCertification-Example1) 
  * insert addNamedEntryComposition(MannerOfDeath, Observation, MannerOfDeath-Example1) 
  * insert addNamedEntryComposition(CauseOfDeathPart1, Observation, CauseOfDeathPart1-Example1) 
  * insert addNamedEntryComposition(CauseOfDeathPart1, Observation, CauseOfDeathPart1-Example2) 
  * insert addNamedEntryComposition(CauseOfDeathPart2, Observation, CauseOfDeathPart2-Example1) 
* section[DecedentDisposition]
  * insert addNamedEntryComposition(DispositionLocation, Location, DispositionLocation-Example1) 
  * insert addNamedEntryComposition(FuneralHome, Organization, FuneralHome-Example1) 
  * insert addNamedEntryComposition(DispositionMethod, Observation, DecedentDispositionMethod-Example1) 
  * insert addNamedEntryComposition(Mortician, Practitioner, Mortician-Example1) 
* section[CodedContent]
  * insert addNamedEntryComposition(ActivityAtTimeOfDeath, Observation, ActivityAtTimeOfDeath-Example1) 
  * insert addNamedEntryComposition(PlaceOfInjury, Observation, PlaceOfInjury-Example1) 
  * insert addNamedEntryComposition(CodedRaceAndEthnicity, Observation, CodedRaceAndEthnicity-Example1) 
  * insert addNamedEntryComposition(ManualUnderlyingCauseOfDeath, Observation, ManualUnderlyingCauseOfDeath-Example1) 
  * insert addNamedEntryComposition(AutomatedUnderlyingCauseOfDeath, Observation, AutomatedUnderlyingCauseOfDeath-Example1) 
  * insert addNamedEntryComposition(RecordAxisCauseOfDeath, Observation, RecordAxisCauseOfDeath-Example1) 
  * insert addNamedEntryComposition(EntityAxisCauseOfDeath, Observation, EntityAxisCauseOfDeath-Example1) 
  * insert addNamedEntryComposition(CodingStatusValues, Parameters, CodingStatusValues-Example1) 

Instance: DeathCertificateDocument-Example2
InstanceOf: DeathCertificateDocument
Usage: #example
Description: "DeathCertificateDocument-Example2 (with coded content)"
* insert AddMetaProfile(DeathCertificateDocument)
* identifier.system = "http://nchs.cdc.gov/vrdr_id"
* insert Identifiers2020NY000182
* type = #document
* timestamp = "2020-10-20T14:48:35.401641-04:00"
* insert addentry(Composition, DeathCertificate-Example2)
* insert addentry(Patient, Decedent-Example1)
* insert addentry(RelatedPerson, DecedentFather-Example1)
* insert addentry(RelatedPerson, DecedentMother-Example1)
* insert addentry(RelatedPerson, DecedentSpouse-Example1)
* insert addentry(Observation, DecedentAge-Example1)
* insert addentry(Observation, InputRaceAndEthnicity-Example1)
* insert addentry(Observation, BirthRecordIdentifier-Example1)
* insert addentry(Observation, DecedentEducationLevel-Example1)
* insert addentry(Observation, DecedentMilitaryService-Example1)
* insert addentry(Observation, DecedentUsualWork-Example1)
* insert addentry(Observation, EmergingIssues-Example1)
* insert addentry(Observation, DecedentPregnancyStatus-Example1)
* insert addentry(Observation, TobaccoUseContributedToDeath-Example1)
* insert addentry(Observation, DeathDate-Example2)
* insert addentry(Practitioner, Pronouncer-Example1)
* insert addentry(Observation, SurgeryDate-Example1)
* insert addentry(Observation, ExaminerContacted-Example1)
* insert addentry(Observation, MannerOfDeath-Example1)
* insert addentry(Location, DeathLocation-Example1)
* insert addentry(Location, InjuryLocation-Example1)
* insert addentry(Observation, InjuryIncident-Example2)
* insert addentry(Practitioner, Certifier-Example1)
* insert addentry(Procedure, DeathCertification-Example1)
* insert addentry(Observation, CauseOfDeathPart1-Example1)
* insert addentry(Observation, CauseOfDeathPart1-Example2)
* insert addentry(Observation, CauseOfDeathPart2-Example1)
//* insert addentry(List, CauseOfDeathPathway-Example1)
* insert addentry(Location, DispositionLocation-Example1)
* insert addentry(Organization, FuneralHome-Example1)
* insert addentry(Observation, DecedentDispositionMethod-Example1)
* insert addentry(Observation, AutopsyPerformedIndicator-Example1)
* insert addentry(Practitioner, Mortician-Example1)
* insert addentry(Observation, ActivityAtTimeOfDeath-Example1)
* insert addentry(Observation, CodedRaceAndEthnicity-Example1)
* insert addentry(Observation, ManualUnderlyingCauseOfDeath-Example1)
* insert addentry(Observation, AutomatedUnderlyingCauseOfDeath-Example1)
* insert addentry(Observation, RecordAxisCauseOfDeath-Example1)
* insert addentry(Observation, EntityAxisCauseOfDeath-Example1)
* insert addentry(Observation, PlaceOfInjury-Example1)
* insert addentry(Parameters, CodingStatusValues-Example1)


---

// File: input/fsh/instances/EX_DeathCertification.fsh



Instance: DeathCertification-Example1
InstanceOf: DeathCertification
Usage: #example
Description: "DeathCertification-Example1"
* insert AddMetaProfile(DeathCertification)
* identifier.value = "180"
* status = #completed
* code = $sct#308646001 "Death certification"
* subject = Reference(Decedent-Example1)
* performedDateTime = "2020-11-14T16:39:40-05:00"
* performer.function = $v3-NullFlavor#OTH "Other"
* performer.function.text = "Nurse Practitioner"
// $sct#434641000124105 "Death certification and verification by physician"
* performer.actor = Reference(Certifier-Example1)

Instance: DeathCertification-Example2
InstanceOf: DeathCertification
Usage: #example
Description: "DeathCertification-Example1"
* insert AddMetaProfile(DeathCertification)
* identifier.value = "180"
* status = #completed
* code = $sct#308646001 "Death certification"
* subject = Reference(Decedent-Example1)
* performedDateTime = "2020-11-14T16:39:40-05:00"
* performer.function = $sct#434641000124105 "Death certification and verification by physician (procedure)"
* performer.actor = Reference(Certifier-Example1)


---

// File: input/fsh/instances/EX_DeathDate.fsh

Instance: DeathDate-Example1
InstanceOf: DeathDate
Usage: #example
Description: "DeathDate-Example1"
* insert AddMetaProfile(DeathDate)
* subject = Reference(Decedent-Example1)
* effectiveDateTime = "2020-11-12T16:39:40-05:00"
* performer = Reference(Pronouncer-Example1)
// * valueDateTime = "2020-11-12T16:39:40-05:00"
* valueDateTime.extension[partialDateTime].extension[day].valueUnsignedInt = 12
* valueDateTime.extension[partialDateTime].extension[month].valueUnsignedInt = 11
* valueDateTime.extension[partialDateTime].extension[year].valueUnsignedInt = 2020
//* valueDateTime.extension[partialDateTime].extension[time].valueTime = "12:13:14"
* valueDateTime.extension[partialDateTime].extension[time].valueTime.extension[dataabsent].valueCode = $dataabsentreason401#unknown
* component[datetimePronouncedDead].valueDateTime = "2020-11-13T16:39:40-05:00"
* component[placeOfDeath].valueCodeableConcept = $sct#16983000 "Death in hospital"
* status = #final

Instance: DeathDate-Example2
InstanceOf: DeathDate
Usage: #example
Description: "DeathDate-Example1"
* insert AddMetaProfile(DeathDate)
* subject = Reference(Decedent-Example1)
* effectiveDateTime = "2020-11-12T16:39:40-05:00"
* performer = Reference(Pronouncer-Example1)
// * valueDateTime = "2020-11-12T16:39:40-05:00"
//* valueDateTime.extension[partialDateTime].extension[day].valueUnsignedInt = 12
* valueDateTime.extension[partialDateTime].extension[day].valueUnsignedInt.extension[dataabsent].valueCode = $dataabsentreason401#unknown
* valueDateTime.extension[partialDateTime].extension[month].valueUnsignedInt = 11
* valueDateTime.extension[partialDateTime].extension[year].valueUnsignedInt = 2020
* valueDateTime.extension[partialDateTime].extension[time].valueTime = "12:13:14"
* valueDateTime.extension[partialDateTime].extension[time].valueTime.extension[dataabsent].valueCode = $dataabsentreason401#unknown
* component[datetimePronouncedDead].valueDateTime = "2020-11-13T16:39:40-05:00"
* component[placeOfDeath].valueCodeableConcept = $sct#16983000 "Death in hospital"
* status = #final

Instance: DeathDate-Example3
InstanceOf: DeathDate
Usage: #example
Description: "DeathDate-Example3 - Stripped down for Mortality Roster"
* insert AddMetaProfile(DeathDate)
* subject = Reference(Decedent-Example3)
* effectiveDateTime = "2020-11-12T16:39:40-05:00"
// * performer = Reference(Pronouncer-Example1)
// * valueDateTime = "2020-11-12T16:39:40-05:00"
//* valueDateTime.extension[partialDateTime].extension[day].valueUnsignedInt = 12
* valueDateTime.extension[partialDateTime].extension[day].valueUnsignedInt.extension[dataabsent].valueCode = $dataabsentreason401#unknown
* valueDateTime.extension[partialDateTime].extension[month].valueUnsignedInt = 11
* valueDateTime.extension[partialDateTime].extension[year].valueUnsignedInt = 2020
//* valueDateTime.extension[partialDateTime].extension[time].valueTime = "12:13:14"
* valueDateTime.extension[partialDateTime].extension[time].valueTime.extension[dataabsent].valueCode = $dataabsentreason401#unknown // required
//* component[datetimePronouncedDead].valueDateTime = "2020-11-13T16:39:40-05:00"
//* component[placeOfDeath].valueCodeableConcept = $sct#16983000 "Death in hospital"
* status = #final

Instance: DeathDate-Example4
InstanceOf: DeathDate
Usage: #example
Description: "DeathDate-Example4 - an example with only a death time"
* insert AddMetaProfile(DeathDate)
* subject = Reference(Decedent-Example1)
* effectiveDateTime = "2020-11-12T16:39:40-05:00"
* performer = Reference(Pronouncer-Example1)
// * valueDateTime = "2020-11-12T16:39:40-05:00"
//* valueDateTime.extension[partialDateTime].extension[day].valueUnsignedInt = 12
* valueDateTime.extension[partialDateTime].extension[day].valueUnsignedInt.extension[dataabsent].valueCode = #unknown
* valueDateTime.extension[partialDateTime].extension[month].valueUnsignedInt = 11
* valueDateTime.extension[partialDateTime].extension[year].valueUnsignedInt = 2020
* valueDateTime.extension[partialDateTime].extension[time].valueTime = "12:13:14"
* valueDateTime.extension[partialDateTime].extension[time].valueTime.extension[dataabsent].valueCode = #unknown
* component[datetimePronouncedDead].valueTime = "16:39:40"
* component[placeOfDeath].valueCodeableConcept = $sct#16983000 "Death in hospital"
* status = #final

---

// File: input/fsh/instances/EX_DeathLocation.fsh

Instance: DeathLocation-Example1
InstanceOf: DeathLocation
Usage: #example
Description: "DeathLocation-Example1 - State = Jurisdiction"
* insert AddMetaProfile(DeathLocation)
* name = "Pecan Grove Nursing Home"
* description = "nursing home"
* address.city = "Albany"
* address.state = "NY"
* address.country = "US"
* position.latitude = 38.889248
* position.longitude = -77.050636

Instance: DeathLocation-Example2
InstanceOf: DeathLocation
Usage: #example
Description: "DeathLocation-Example2 - State != Jurisdiction"
* insert AddMetaProfile(DeathLocation)
* name = "Pecan Grove Nursing Home"
* description = "nursing home"
* address.city = "Queens"
* address.state = "NY"
* address.state.extension[nationalReportingJurisdictionId].valueString = "YC"
* address.country = "US"
//* position.latitude = 38.889248
//* position.longitude = -77.050636

Instance: DeathLocation-Example3
InstanceOf: DeathLocation
Usage: #example
Description: "DeathLocation-Example3 - Stripped Down for Mortality Roster"
* insert AddMetaProfile(DeathLocation)
* name = "Pecan Grove Nursing Home" // required by USCore
//* description = "nursing home"
//* address.city = "Albany"
* address.state = "NY"
* address.country = "US"
//* position.latitude = 38.889248
//* position.longitude = -77.050636


---

// File: input/fsh/instances/EX_Decedent.fsh

Instance: Decedent-Example3
InstanceOf: Decedent
Usage: #example
Description: "Decedent-Example3 - Stripped down for Mortality Roster"
* insert AddMetaProfile(DecedentNew)
// * extension[Spouse-Alive].valueCodeableConcept = $v2-0136#Y
* extension[NVSS-SexAtDeath].valueCodeableConcept = $admingender#unknown "Unknown"
// * extension[$patient-birthPlace].valueAddress.city = "Brooklyn"
* extension[$patient-birthPlace].valueAddress.state = "NY"
* extension[$patient-birthPlace].valueAddress.country = "US"
* identifier.type = $v2-0203#SB "Social Beneficiary Identifier"
* identifier.system = "http://hl7.org/fhir/sid/us-ssn"
* identifier.value = "987654321"
* name[0].use = #official
* name[0].family = "Patel"
* name[0].given = "Madelyn"
* name[1].use = #maiden
* name[1].text = "Joyce McCain"
* name[1].family = "McCain"
* name[1].given = "Joyce"
* gender = #female   // required by USCore
* birthDate = "1978-03-12"
//* birthDate.extension[partialDate].extension[day].valueInteger.extension[dataabsent].valueCode = $dataabsentreason401#NA
// * birthDate.extension[partialDateTime].extension[day].valueUnsignedInt = 10
// * birthDate.extension[partialDateTime].extension[month].valueUnsignedInt = 11
// * birthDate.extension[partialDateTime].extension[year].valueUnsignedInt = 2004
// * address.extension[WithinCityLimitsIndicator].valueCoding = $v2-0136#Y "Yes"
//* address.line = "5590 E Lockwood Drive SW, #1"
//* address.city = "Queens"
* address.state = "NY"
//* address.district = "Kings"
//* address.city.extension[cityCode].valuePositiveInt = 01234
//* address.district.extension[districtCode].valuePositiveInt  = 321
//* address.country = "US"
//* address.extension[unitnumber].valueString = "#1"
//* address.extension[stnum].valueString = "5590"
//* address.extension[stname].valueString = "Lockwood"
//* address.extension[stdesig].valueString = "Drive"
//* address.extension[predir].valueString = "E"
//* address.extension[postdir].valueString = "SW"
//* maritalStatus = $v3-MaritalStatus#S "Never Married"
//* maritalStatus.extension[bypassEditFlag].valueCodeableConcept = BypassEditFlagCS#0 "Edit Passed"
//* contact.name.text = "Joe Smith"
//* contact.relationship.text = "Friend of family"


Instance: Decedent-Example2
InstanceOf: Decedent
Usage: #example
Description: "Decedent-Example2 - with birth jurisdiction"
* insert AddMetaProfile(DecedentNew)
* extension[Spouse-Alive].valueCodeableConcept = $v2-0136#Y
* extension[NVSS-SexAtDeath].valueCodeableConcept = $admingender#unknown "Unknown"
* extension[$patient-birthPlace].valueAddress.city = "Brooklyn"
* extension[$patient-birthPlace].valueAddress.state = "NY"
* extension[$patient-birthPlace].valueAddress.country = "US"
* identifier.type = $v2-0203#SB "Social Beneficiary Identifier"
* identifier.system = "http://hl7.org/fhir/sid/us-ssn"
* identifier.value = "987654321"
* name[0].use = #official
* name[0].family = "Patel"
* name[0].given = "Madelyn"
* name[1].use = #maiden
* name[1].text = "Joyce McCain"
* name[1].given = "Joyce"
* name[1].family = "McCain"
* gender = #female
* birthDate = "1978-03-12"
//* birthDate.extension[partialDate].extension[day].valueInteger.extension[dataabsent].valueCode = $dataabsentreason401#NA
// * birthDate.extension[partialDateTime].extension[day].valueUnsignedInt = 10
// * birthDate.extension[partialDateTime].extension[month].valueUnsignedInt = 11
// * birthDate.extension[partialDateTime].extension[year].valueUnsignedInt = 2004
* address.extension[withinCityLimitsIndicator].valueCoding = $v2-0136#Y "Yes"
* address.line = "5590 E Lockwood Drive SW, #1"
* address.city = "Queens"
* address.state = "NY"
* address.district = "Kings"
* address.city.extension[cityCode].valuePositiveInt = 01234
* address.district.extension[districtCode].valuePositiveInt  = 321
* address.country = "US"
* address.extension[unitnumber].valueString = "#1"
* address.extension[stnum].valueString = "5590"
* address.extension[stname].valueString = "Lockwood"
* address.extension[stdesig].valueString = "Drive"
* address.extension[predir].valueString = "E"
* address.extension[postdir].valueString = "SW"
* maritalStatus = $v3-MaritalStatus#S "Never Married"
* maritalStatus.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"
* contact.name.text = "Joe Smith"
* contact.relationship.text = "Friend of family"
* contact.relationship = $v2-0131#U

Instance: Decedent-Example1
InstanceOf: Decedent
Usage: #example
Description: "Decedent-Example1"
* insert AddMetaProfile(DecedentNew)
* extension[Spouse-Alive].valueCodeableConcept = $v2-0136#Y
* extension[NVSS-SexAtDeath].valueCodeableConcept = $admingender#unknown "Unknown"
* extension[$patient-birthPlace].valueAddress.city = "Roanoke"
* extension[$patient-birthPlace].valueAddress.state = "VA"
* extension[$patient-birthPlace].valueAddress.country = "US"
* identifier.type = $v2-0203#SB "Social Beneficiary Identifier"
* identifier.system = "http://hl7.org/fhir/sid/us-ssn"
* identifier.value = "987654321"
* name.use = #official
* name.family = "Patel"
* name.given = "Madelyn"
* gender = #female
* birthDate = "1978-03-12"
//* birthDate.extension[partialDate].extension[day].valueInteger.extension[dataabsent].valueCode = $dataabsentreason401#NA
// * birthDate.extension[partialDateTime].extension[day].valueUnsignedInt = 10
// * birthDate.extension[partialDateTime].extension[month].valueUnsignedInt = 11
// * birthDate.extension[partialDateTime].extension[year].valueUnsignedInt = 2004
* address.extension[withinCityLimitsIndicator].valueCoding = $v2-0136#Y "Yes"
* address.line = "5590 Lockwood Drive"
* address.city = "Danville"
* address.state = "VA"
* address.district = "Fairfax"
* address.city.extension[cityCode].valuePositiveInt = 01234
* address.district.extension[districtCode].valuePositiveInt  = 321
* address.country = "US"
* address.extension[stname].valueString = "Lockwood"
* maritalStatus = $v3-MaritalStatus#S "Never Married"
* maritalStatus.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"
* contact.name.text = "Joe Smith"
* contact.relationship.text = "Friend of family"
* contact.relationship = $v2-0131#U

---

// File: input/fsh/instances/EX_DecedentAge.fsh

Instance: DecedentAge-Example1
InstanceOf: DecedentAge
Usage: #example
Description: "DecedentAge-Example1"
* insert AddMetaProfile(DecedentAge)
* status = #final
* subject = Reference(Decedent-Example1)
* valueQuantity.value = 42
* valueQuantity.code = #a
* valueQuantity.system = $UCUM
* valueQuantity.unit = "years"
* valueQuantity.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"


---

// File: input/fsh/instances/EX_DecedentDispositionMethod.fsh

Instance: DecedentDispositionMethod-Example1
InstanceOf: DecedentDispositionMethod
Usage: #example
Description: "DecedentDispositionMethod-Example1"
* insert AddMetaProfile(DecedentDispositionMethod)
* status = #final
* subject = Reference(Decedent-Example1)
* performer = Reference(Mortician-Example1)
* valueCodeableConcept = $sct#449971000124106 "Burial"
//* extension[dispositionLocationReference].valueReference  = Reference(DispositionLocation-Example1)

/*  Mortician */
Instance: Mortician-Example1
InstanceOf: Mortician 
Usage: #example
Description: "Mortician-Example1"
* insert AddMetaProfile(USCorePractitionerProfile)
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "212222AB"
* name.use = #official
* name.family = "Smith"
* name.given[0] = "Ronald"
* name.given[+] = "Q"

Instance: DispositionLocation-Example1
InstanceOf: DispositionLocation
Usage: #example
Description: "DispositionLocation-Example1"
* insert AddMetaProfile(DispositionLocation)
* name = "Rosewood Cemetary"
* address.line = "303 Rosewood Ave"
* address.city = "Danville"
* address.state = "VA"
* address.postalCode = "24541"
* address.country = "US"
* physicalType = $location-physical-type#si "Site"

---

// File: input/fsh/instances/EX_DecedentEducationLevel.fsh

Instance: DecedentEducationLevel-Example1
InstanceOf: DecedentEducationLevel    // SHould probably make a VRDR Education lEvel profile wiht this fixed
Usage: #example
Description: "DeathDate-Example1"
* insert AddMetaProfile(DecedentEducationLevel)
* subject = Reference(Decedent-Example1)
* valueCodeableConcept = $v3-EducationLevel#SEC "Some secondary or high school education" 


---

// File: input/fsh/instances/EX_DecedentMilitaryService.fsh

Instance: DecedentMilitaryService-Example1
InstanceOf: DecedentMilitaryService
Usage: #example
Description: "DecedentMilitaryService-Example1"
* insert AddMetaProfile(DecedentMilitaryService)
* subject = Reference(Decedent-Example1)
* status = #final
* valueCodeableConcept = $v2-0136#Y "Yes"


---

// File: input/fsh/instances/EX_DecedentPregnancyStatus.fsh

Instance: DecedentPregnancyStatus-Example1
InstanceOf: DecedentPregnancyStatus
Usage: #example
Description: "DecedentPregnancyStatus-Example1"
* insert AddMetaProfile(ObservationDecedentPregnancyVitalRecords)
* subject = Reference(Decedent-Example1)
* status = #final
* valueCodeableConcept = DeathPregnancyStatusCS#2 "Pregnant at time of death"
* valueCodeableConcept.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#2 "Edit Failed, Data Queried, but not Verified"


---

// File: input/fsh/instances/EX_DecedentUsualWork.fsh

Instance: DecedentUsualWork-Example1
InstanceOf: DecedentUsualWork
Usage: #example
Description: "DecedentUsualWork-Example1 - without coded values"
* insert AddMetaProfile(DecedentUsualWork)
* status = #final
* subject = Reference(Decedent-Example1)
* valueCodeableConcept.text = "secretary"
//* valueCodeableConcept.coding = $v3-NullFlavor#UNK "unknown"
//* component[odh-UsualIndustry].code = $loinc#21844-6 "History of Usual industry"
* component[odh-UsualIndustry].valueCodeableConcept.text = "State agency"
//* component.valueCodeableConcept.coding = $v3-NullFlavor#UNK "unknown"
//* effectivePeriod.start = "2001"
//* effectivePeriod.end = "2005"

Instance: DecedentUsualWork-Example2
InstanceOf: DecedentUsualWork
Usage: #example
Description: "DecedentUsualWork-Example2 - with coded values"
* insert AddMetaProfile(DecedentUsualWork)
* status = #final
* subject = Reference(Decedent-Example1)
//* valueCodeableConcept.coding = $v3-NullFlavor#UNK "unknown"
* valueCodeableConcept.text = "secretary"
//* component.code = $loinc#21844-6 "History of Usual industry"
//* component.valueCodeableConcept.coding = $v3-NullFlavor#UNK "unknown"
* component[odh-UsualIndustry].valueCodeableConcept.text = "State agency"
//* effectivePeriod.start = "2001"
//* effectivePeriod.end = "2005"


---

// File: input/fsh/instances/EX_EmergingIssues.fsh


Instance: EmergingIssues-Example1
InstanceOf: ObservationEmergingIssuesVitalRecords
Usage: #example
Description: "EmergingIssues-Example1 make sure it is example"
* subject = Reference(Decedent-Example1)
* status = #final
* insert AddMetaProfile(ObservationEmergingIssuesVitalRecords)
* component[EmergingIssue1_1].valueString = "H"
* component[EmergingIssue1_2].valueString = "I"
* component[EmergingIssue8_1].valueString = "Hi 8_1"
* component[EmergingIssue20].valueString = "Hi 20_1"

---

// File: input/fsh/instances/EX_ExaminerContacted.fsh

Instance: ExaminerContacted-Example1
InstanceOf: ExaminerContacted
Usage: #example
Description: "AutopsyPerformedIndicator-Example1"
* insert AddMetaProfile(ExaminerContacted)
* status = #final
* subject = Reference(Decedent-Example1)
* valueCodeableConcept = $v2-0136#Y "Yes"


---

// File: input/fsh/instances/EX_FatherMotherSpouse.fsh


Instance: DecedentFather-Example1
InstanceOf: DecedentFather
Usage: #example
Description: "DecedentFather-Example1"
* insert AddMetaProfile(DecedentFather)
* patient = Reference(Decedent-Example1)
* name.text = "Decedent Dad"
* name.use = #official
* name.given = "John"
* name.family = "Smith"
* name.suffix = "Sr"


Instance: DecedentMother-Example1
InstanceOf: DecedentMother
Usage: #example
Description: "DecedentFather-Example1"
* insert AddMetaProfile(DecedentMother)
* patient = Reference(Decedent-Example1)
* name.text = "Decedent Mom"
* name.use = #maiden
* name.given = "Jane"
* name.family = "Suzette"

Instance: DecedentSpouse-Example1
InstanceOf: DecedentSpouse
Usage: #example
Description: "DecedentSpouse-Example1"
* insert AddMetaProfile(DecedentSpouse)
* patient = Reference(Decedent-Example1)
* name.text = "Decedent Spouse"
* name.use = #maiden
* name.given = "Samuel"
* name.family = "Gazette"
* name.suffix = "III"


---

// File: input/fsh/instances/EX_FuneralHome.fsh

Instance: FuneralHome-Example1
InstanceOf: FuneralHome
Usage: #example
Description: "FuneralHome-Example1"
* insert AddMetaProfile(FuneralHome)
* active = true
* type = OrganizationTypeCS#funeralhome "Funeral Home"
* name = "Lancaster Funeral Home and Crematory"
* address.line = "211 High Street"
* address.city = "Lancaster"
* address.state = "PA"
* address.postalCode = "17573"
* address.country = "US"


---

// File: input/fsh/instances/EX_IndustryOccupationCodedContentBundle.fsh

Instance: IndustryOccupationCodedContentBundle-Example1
InstanceOf: IndustryOccupationCodedContentBundle
Usage: #example
Title: "IndustryOccupationCodedContentBundle-Example1"
Description: "IndustryOccupationCodedContentBundle-Example1"
* insert AddMetaProfile(IndustryOccupationCodedContentBundle)
* identifier.system = "http://nchs.cdc.gov/vrdr_id"
* insert Identifiers2020NY000182
* timestamp = "2020-10-20T14:48:35.401641-04:00"
* insert addentry(Observation, DecedentUsualWork-Example1)

---

// File: input/fsh/instances/EX_InjuryIncident.fsh

Instance: InjuryIncident-Example1
InstanceOf: InjuryIncident
Usage: #example
Description: "InjuryIncident-Example1 (with literal transportationRole)"
* insert AddMetaProfile(InjuryIncident)
//* extension[injuryLocationReference].valueReference = Reference(InjuryLocation-Example1)
* status = #final
* subject = Reference(Decedent-Example1)
* effectiveDateTime = "2019-11-02T13:00:00-05:00"
* valueCodeableConcept.text  = "drug toxicity"
* component[workInjuryIndicator].valueCodeableConcept = $v2-0136#N "No"
* component[placeOfInjury].valueCodeableConcept.text = "Home"
* component[transportationRole].valueCodeableConcept = $v3-NullFlavor#OTH "Other"
* component[transportationRole].valueCodeableConcept.text = "Hoverboard Rider"

Instance: InjuryIncident-Example2
InstanceOf: InjuryIncident
Usage: #example
Description: "InjuryIncident-Example2 (with coded transportationRole)"
* insert AddMetaProfile(InjuryIncident)
//* extension[injuryLocationReference].valueReference = Reference(InjuryLocation-Example1)
* status = #final
* subject = Reference(Decedent-Example1)
* effectiveDateTime = "2019-11-02T13:00:00-05:00"
* valueCodeableConcept.text  = "drug toxicity"
* component[workInjuryIndicator].valueCodeableConcept = $v2-0136#N "No"
* component[placeOfInjury].valueCodeableConcept.text = "Home"
* component[transportationRole].valueCodeableConcept = $sct#257518000 "Pedestrian"

Instance: InjuryLocation-Example1
InstanceOf: InjuryLocation
Usage: #example
Description: "InjuryLocation-Example1"
* insert AddMetaProfile(InjuryLocation)
* description = "5590 Lockwood Drive 20621 US"
* name = "Home"
* address.text = "5590 Lockwood Drive 20621 US"

---

// File: input/fsh/instances/EX_MannerOfDeath.fsh

Instance: MannerOfDeath-Example1
InstanceOf: MannerOfDeath
Usage: #example
Description: "MannerOfDeath-Example1"
* insert AddMetaProfile(MannerOfDeath)
* subject = Reference(Decedent-Example1)
* valueCodeableConcept = $sct#38605008 "Natural death"
* performer = Reference(Certifier-Example1)


---

// File: input/fsh/instances/EX_MortalityRosterBundle.fsh

Instance: MortalityRosterBundle-Example1
InstanceOf: MortalityRosterBundle
Usage: #example
Description: "MortalityRosterBundle-Example1"
* insert AddMetaProfile(MortalityRosterBundle)
* insert Identifiers2020NY000182
* meta.extension[aliasStatus].valueBoolean = false
* meta.extension[replaceStatus].valueCodeableConcept = ReplaceStatusCS#original "original record"
* timestamp = "2020-10-20T14:48:35.401641-04:00"
* insert addentry(Patient, Decedent-Example3)
* insert addentry(RelatedPerson, DecedentFather-Example1)
* insert addentry(RelatedPerson, DecedentMother-Example1)
* insert addentry(Observation, DeathDate-Example3)
* insert addentry(Location, DeathLocation-Example3)


---

// File: input/fsh/instances/EX_Pronouncer.fsh

/*  Pronouncer */
Instance: Pronouncer-Example1
InstanceOf: USCorePractitionerProfile
Usage: #example
Description: "Pronouncer-Example1"
* insert AddMetaProfile(USCorePractitionerProfile)
* name.use = #official
* name.family = "Purple"
* name.given = "Jane"
* address.line = "44 South Street"
* address.city = "Rockville"
* address.state = "MD"
* address.postalCode = "20854"
* address.country = "US"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9941339101"

---

// File: input/fsh/instances/EX_SurgeryDate.fsh

Instance: SurgeryDate-Example1
InstanceOf: SurgeryDate
Usage: #example
Description: "SurgeryDate-Example1"
* insert AddMetaProfile(SurgeryDate)
* effectiveDateTime = "2019-11-12"
* subject = Reference(Decedent-Example1)

---

// File: input/fsh/instances/EX_TobaccoUseContributedToDeath.fsh

Instance: TobaccoUseContributedToDeath-Example1
InstanceOf: TobaccoUseContributedToDeath
Usage: #example
Description: "TobaccoUseContributedToDeath-Example1"
* insert AddMetaProfile(TobaccoUseContributedToDeath)
* subject = Reference(Decedent-Example1)
* valueCodeableConcept = $sct#373066001 "Yes"


---

// File: input/fsh/instances/location-death-vr-atlanta-ga-a-freeman.fsh

Instance: location-death-vr-atlanta-ga-a-freeman
InstanceOf: DeathLocation
Title: "Atlanta GA Death Location - Freeman"
Description: "Example "
Usage: #example
* identifier
  * system = "http://www.acme.org/location"
  * value = "29"
* status = #active
* name = "Atlanta GA Death Location - Freeman"
//* type = CodeSystemMDI#death
* address
  * use = #home
  * type = #physical
  * line = "400 Windstream Street"
  * city = "Atlanta"
  * district = "Fulton County"
  * state = "GA"
  * country = "US"

---

// File: input/fsh/instances/location-injury-vr-atlanta-ga-a-freeman.fsh

Instance: location-injury-vr-atlanta-ga-a-freeman
InstanceOf: InjuryLocation
Title: "Atlanta GA Injury Location - Freeman"
Description: "Example "
Usage: #example
* identifier
  * system = "http://www.acme.org/location"
  * value = "29"
* status = #active
* name = "Atlanta GA Injury Location - Freeman"
//* type = CodeSystemMDI#injury
* address
  * use = #home
  * type = #physical
  * line = "400 Windstream Street"
  * city = "Atlanta"
  * district = "Fulton County"
  * state = "GA"
  * country = "US"

---

// File: input/fsh/instances/practitioner-vital-records-janet-seito.fsh

Instance: practitioner-vital-records-janet-seito
InstanceOf: PractitionerVitalRecords
Title: "Practitioner - Vital Records - Janet Seito"
Description: "Practitioner - Vital Records: Janet Seito example"
Usage: #example
* identifier
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "223347044"
* name
  * family = "Janet"
  * given = "Seito"
  * suffix = "D.O."
// This seems like a mistake (not by us)
// * name
//   * family = "Jones"
//   * given = "Avery"
//   * suffix = "M.D."
* qualification.code = $sct#76231001 "Osteopath"

---

// File: input/fsh/instances/procedure-death-certification-vr-a-freeman.fsh

Instance: procedure-death-certification-vr-a-freeman
InstanceOf: DeathCertification
Title: "Procedure - Death Certification Vital Records - A Freeman"
Description: "Example "
Usage: #example
* identifier.value = "180"
* status = #completed
* subject.reference = "Patient/us-core-patient-vr-a-freeman"
* performedDateTime = "2022-01-18T16:39:40-05:00"
* performer
  * function = $sct#455381000124109 "Death certification by medical examiner or coroner (procedure)"
  * actor = Reference(practitioner-vital-records-janet-seito) // "Practitioner/us-core-practitioner-vr-s-jones"

---

