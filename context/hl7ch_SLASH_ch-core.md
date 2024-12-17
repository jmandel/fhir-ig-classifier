File: repos/hl7ch_SLASH_ch-core/sushi-config.yaml

id: ch.fhir.ig.ch-core
canonical: http://fhir.ch/ig/ch-core
url: http://fhir.ch/ig/ch-core/ImplementationGuide/ch.fhir.ig.ch-core
name: CH_Core
title: CH Core (R4)
description: FHIR implementation guide CH Core
status: active
experimental: false
date: 2024-12-17
version: 5.0.0
fhirVersion: 4.0.1
copyrightYear: 2020+
releaselabel: trial-use # ci-build | draft | qa-preview | ballot | trial-use | release | update | normative+trial-use
publisher:
  name: HL7 Switzerland
  url: https://www.hl7.ch/
contact:
  - name: HL7 Switzerland
    telecom:
      - system: url
        value: https://www.hl7.ch/
        use: work
license: CC0-1.0
copyright: CC0-1.0
jurisdiction: urn:iso:std:iso:3166#CH

dependencies:
  ch.fhir.ig.ch-term: current #3.0.x
  hl7.terminology: 6.1.0

pages:
  index.md:
    title: Home
  guidance.md:
    title: Guidance  
  profiles.md:
    title: Profiles
  extensions.md:
    title: Extensions
  changelog.md:
    title: Changelog          

menu:
  Home: index.html
  Guidance: 
    SNOMED CT Swiss Extension: guidance.html#snomed-ct-swiss-extension
    Readable Representation of EPR Documents: guidance.html#readable-representation-of-epr-documents
  Profiles: profiles.html
  Extensions: extensions.html
  Artifacts: artifacts.html

resources:
  Bundle/DocumentContainingOriginalRepresentationAsPdfA:
    name: Transfer note for radiological diagnostics
    description: EPR Document containing original representation as PDF-A (fullUrls of entries with ‘urn:uuid:’)
    exampleBoolean: true
      
# For parameters defined by core FHIR see: 
# http://build.fhir.org/codesystem-guide-parameter-code.html.
# For parameters defined by the FHIR Tools IG  see:
# http://build.fhir.org/ig/FHIR/fhir-tools-ig/branches/master/CodeSystem-ig-parameters.html
parameters:
  excludettl: true
  path-resource:
#    - input/examples/bundle
    - input/resources/codesystem
    - input/resources/conceptmap
    - input/resources/namingsystem
    - input/resources/valueset
    - fsh-generated/resources  
  special-url:
    - urn:oid:2.16.840.1.113883.6.316
    - urn:oid:2.16.756.5.30.1.127.3.10.10
    - http://fhir.ch/ig/ch-emed/StructureDefinition/ch-emed-ext-substitution
    - http://fhir.ch/ig/ch-emed/StructureDefinition/ch-emed-ext-treatmentreason
  allow-extensible-warnings: true
  display-warnings: true  

FSHOnly: false
applyExtensionMetadataToRoot: false
instanceOptions:
  setMetaProfile: always
  setId: always
  manualSliceOrdering: true


---

// File: input/pagecontent/changelog.md

All significant changes to this FHIR implementation guide will be documented on this page.   

### STU 5 (2024-12-17)

#### Open Issues
During the ballot, the following comments came in, which will be taken into account in the further development of CH Core:

* [#299](https://github.com/hl7ch/ch-core/issues/299):
   * Add guidance for the [RESTful use](https://hl7.org/fhir/r4/http.html), including the [SMART on FHIR mechanism](https://hl7.org/fhir/smart-app-launch/).
   * Compatibility with the [International Patient Access (IPA) specification](https://hl7.org/fhir/uv/ipa/).
   * Define formal descriptions of capabilities per actor (server/client), e.g. [IPA-Patient](https://hl7.org/fhir/uv/ipa/StructureDefinition-ipa-patient.html). See also [implementation obligations](https://build.fhir.org/obligations.html).
   * Clarification of the relationship to the EPR and the supported exchange mechanisms. 
* [CH Term #41](https://github.com/hl7ch/ch-term/issues/41): Revision (harmonization, usage SCT) of code system and value set ServiceRequest Category

See also open issues on [GitHub](https://github.com/hl7ch/ch-core/issues).

#### Changed / Updated
* [#303](https://github.com/hl7ch/ch-core/issues/303): Entry Resource Cross References, Usage/Description
* [#294](https://github.com/hl7ch/ch-core/issues/294): Differentiation of severity of constraint ch-pat-1 for CH Core Patient (warning) and CH Core Patient EPR (error)
* [#293](https://github.com/hl7ch/ch-core/issues/293): Clarification of the description for Patient.gender
* [#300](https://github.com/hl7ch/ch-core/issues/293): Add guidance for readable representation of EPR documents and update example

#### Fixed
* [#306](https://github.com/hl7ch/ch-core/issues/306): Replace deprecated discriminator (`pattern` -> `value`)

#### Issues resolved without amendment (in IG)
* [#289](https://github.com/hl7ch/ch-core/issues/289): Validation issue with display values; fixed with new version of IG publisher


### STU 5 Ballot (2024-05-16)

#### Added
* [#284](https://github.com/hl7ch/ch-core/issues/284): Check BER/UIDB identifiers
* [#119](https://github.com/hl7ch/ch-core/issues/119): Introduce base profiles (from exchange formats) in CH Core
   * CH Core MedicationStatement, CH Core MedicationAdministration, CH Core MedicationDispense, CH Core MedicationRequest, CH Core Medication
   * CH Core Condition
   * CH Core AllergyIntolerance
   * CH Core Immunization, CH Core ImmunizationRecommendation
   * CH Core ServiceRequest
* [#116](https://github.com/hl7ch/ch-core/issues/116): Add value set bindings to these elements: 
   * Coverage.type -> http://fhir.ch/ig/ch-term/ValueSet/mainguarantor (preferred)
   * Coverage.class.type -> http://fhir.ch/ig/ch-core/ValueSet/bfs-medstats-21-encountertype (extensible)

#### Changed / Updated
* [#272](https://github.com/hl7ch/ch-core/issues/272): Update the CHCoreDocumentReference EPR-XDS mapping
* [#269](https://github.com/hl7ch/ch-core/issues/269): max cardinality for only one gln for practitioner
* [CH Term #23](https://github.com/hl7ch/ch-epr-term/issues/23): Changes according to the renaming of CH EPR Term to CH Term
* [#274](https://github.com/hl7ch/ch-core/issues/274): Move terminology to CH Term
* [#287](https://github.com/hl7ch/ch-core/issues/287): Unified identifier slicing (Coverage, Practitioner)

#### Fixed
* [#277](https://github.com/hl7ch/ch-core/issues/277): update the expression of constraints ch-docref-1/2

### STU 4 (2023-12-28)
* [#270](https://github.com/hl7ch/ch-core/issues/270): 4.0.1 Technical correction for invalid package

#### Added
* [#233](https://github.com/hl7ch/ch-core/issues/233): CH Core Address: Include eCH-0007 cantonAbbreviation
* [#244](https://github.com/hl7ch/ch-core/issues/244): Guidance how to use SNOMED CT codes from the Swiss Extension
* [#254](https://github.com/hl7ch/ch-core/issues/254): Separate data type profile for identifiers (ZSR, UIDB, BER)
* [#262](https://github.com/hl7ch/ch-core/issues/262): New extension to reference entries in i.e. other documents

#### Changed / Updated
* [#242](https://github.com/hl7ch/ch-core/issues/242): Update the description for type of [CH Core Composition EPR](StructureDefinition-ch-core-composition-epr.html)
* [#238](https://github.com/hl7ch/ch-core/issues/238): Update context of [Extension EPR Time](StructureDefinition-ch-ext-epr-time.html) with MedicationRequest.requester
* [#246](https://github.com/hl7ch/ch-core/issues/246): Only allow an UUID as Bundle.identifier in the EPR context
* [#181](https://github.com/hl7ch/ch-core/issues/181): Change slicing from Patient.contact:nameOfFahter/nameOfMother to Patient.contact:nameOfParent according to eCH RFC 2019-9: _geschlechtsneutrale Bezeichnung für Namen der Eltern_ and remove chapter numbers in mapping of eCH
* [#252](https://github.com/hl7ch/ch-core/issues/252): Technical Correction of FHIRPath constraints with .value

#### Fixed
* [#235](https://github.com/hl7ch/ch-core/issues/235)/[#265](https://github.com/hl7ch/ch-core/issues/265): Fix GLN constraint/adapt Practitioner.identifier in example
* [#247](https://github.com/hl7ch/ch-core/issues/247): Fix constraint text and refactor expression (ch-core-doc-1)
* [#256](https://github.com/hl7ch/ch-core/issues/256): Fix references in example with UUID as fullUrl based on rules around matching relative references
* [#257](https://github.com/hl7ch/ch-core/issues/257): Warning instead of errors for GLN, EPR-SPID, AHVN13 and VEKA datatype profiles
* [#266](https://github.com/hl7ch/ch-core/issues/266): Fix error with ConceptMap

### STU 4 Ballot (2023-06-27)

#### Added
* [#196](https://github.com/hl7ch/ch-core/issues/196): Data type profile [VEKAIdentifier](StructureDefinition-ch-core-veka-identifier.html) for [Coverage.identifier](StructureDefinition-ch-core-coverage.html) and new also for [Patient.identifier](StructureDefinition-ch-core-patient.html)
* [#204](https://github.com/hl7ch/ch-core/issues/204): Introduce data type profiles for ContactPoints (email, phone, internet) according eCH-0046 (including extensions and terminology) and add them to the telecom element of Patient, Practitioner, Organization, Location
* [#224](https://github.com/hl7ch/ch-core/issues/224): Forum Datenaustausch tariff Naming System

#### Changed / Updated
* [#206](https://github.com/hl7ch/ch-core/issues/206): Improve acronyms definition
* [#191](https://github.com/hl7ch/ch-core/issues/191): [CH Core Patient](StructureDefinition-ch-core-patient.html) - Relax max cardinality to * for EPR-SPID and AHVN13
* [#195](https://github.com/hl7ch/ch-core/issues/195): [CH Core Address](StructureDefinition-ch-core-address.html) - Add extension iso21090-ADXP-streetName to CH Core Address line
* [#198](https://github.com/hl7ch/ch-core/issues/198): [CH Core Composition EPR](StructureDefinition-ch-core-composition-epr-definitions.html#diff_Composition.extension:informationRecipient) - Relax information recipient cardinality to zero
* [#194](https://github.com/hl7ch/ch-core/issues/194): [CH Core Composition EPR](StructureDefinition-ch-core-composition-epr.html) - Relax attester:legalAuthenticator.time cardinality to zero
* [#200](https://github.com/hl7ch/ch-core/issues/200): Remove display values from patternCodeableConcepts or fixedValues, remove minimum cardinality = 1 for display values, using official display values in examples (valid with http://tx.fhir.org/r4).
* [#193](https://github.com/hl7ch/ch-core/issues/193): Remove CDA elements (mapping, ch-ext-epr-sectionid, ch-ext-epr-versionnumber, adapt descriptions) 
* [#31](https://github.com/hl7ch/ch-core/issues/31): Improve profiling for identifiers to avoid duplicated elements in the snapshot table
* [#205](https://github.com/hl7ch/ch-core/issues/205): Concretization of the mapping of Patient.telecom for versions as of HL7 v2.7
* [#181](https://github.com/hl7ch/ch-core/issues/181): Updated used eCH standards (incl. versions) to [introduction (home)](index.html#introduction) (standards themselves currently have no updates)
* [#217](https://github.com/hl7ch/ch-core/issues/217): Add language tag to instances, to be able to validate the translation of codes
* [#215](https://github.com/hl7ch/ch-core/issues/215): Relax binding strength to value sets from 'required' to 'extensible'
* [#225](https://github.com/hl7ch/ch-core/issues/225): Fix FHIRPath expression
* [#226](https://github.com/hl7ch/ch-core/issues/226): Change license for ImplementationGuide / StructureDefinition to CC0 1.0 Universal (CC0 1.0)
* [#222](https://github.com/hl7ch/ch-core/issues/222): PractitionerRole EPR: code binding

### STU 3 (2022-12-20)

#### Added
* [#172](https://github.com/hl7ch/ch-core/issues/172): Generic CH Core extension [Author of the content](StructureDefinition-ch-ext-author.html) (fusion of the extensions from CH EMED and CH VACD)
* [#158](https://github.com/hl7ch/ch-core/issues/158), [#189](https://github.com/hl7ch/ch-core/issues/189): Include new IG fragments (IP Statements, Cross Version Analysis, Dependency Table, Globals Table); CH Core can be used for both R4 and R4B, packages are available for both versions

#### Changed / Updated
* [#150](https://github.com/hl7ch/ch-core/issues/150): Expansion of the context of the extension [EPR Time](StructureDefinition-ch-ext-epr-time.html)
* [#160](https://github.com/hl7ch/ch-core/issues/160): Slicing on repeating element
* [#154](https://github.com/hl7ch/ch-core/issues/154): Improve description of example instances, see [Artifacts](artifacts.html#example-example-instances)
* [#162](https://github.com/hl7ch/ch-core/issues/162): Update narrative text in examples
* [#176](https://github.com/hl7ch/ch-core/issues/162): Clean up differentials
* [#175](https://github.com/hl7ch/ch-core/issues/175): Rename the profile [CH Core EPR-Consent](StructureDefinition-ch-core-epr-consent.html)
* [#173](https://github.com/hl7ch/ch-core/issues/173): Define aggregation mode (contained, referenced) for [Coverage.payor](StructureDefinition-ch-core-coverage.html)
* [#170](https://github.com/hl7ch/ch-core/issues/170): Check the slicing and update suppressed messages
* [#153](https://github.com/hl7ch/ch-core/issues/153): Rephrasing of the sentence for the exchange formats (current and general validity)

#### Fixed
* [#163](https://github.com/hl7ch/ch-core/issues/163): Typo
* [#159](https://github.com/hl7ch/ch-core/issues/159): Add element 'experimental' (false) to CS/VS
* [#161](https://github.com/hl7ch/ch-core/issues/161): Use 'patternCodeableConcept' instead of 'fixedCodeableConcept' for [Consent.policyRule](StructureDefinition-ch-core-epr-consent.html)
* [#167](https://github.com/hl7ch/ch-core/issues/167): Fix URIs in ConceptMaps 'MaritalStatus eCH-011 to FHIR mapping', 'Sex eCH-011 to FHIR mapping'
* [#152](https://github.com/hl7ch/ch-core/issues/152): Changes status form 'draft' to 'active'

#### Issues resolved without amendment (in IG)
* [#39](https://github.com/hl7ch/ch-core/issues/39): Consent code for ch-epr has been added in [hl7.terminology](https://terminology.hl7.org/4.0.0/CodeSystem-consentpolicycodes.html) published 2022-09-14	(version 4.0.0)
* [#174](https://github.com/hl7ch/ch-core/issues/174): Verification/confirmation that the eCH-011 values for gender are still up-to-date
* [#157](https://github.com/hl7ch/ch-core/issues/157): Fixed dead link on the [HL7.ch FHIR IG Balloting](https://github.com/hl7ch/ch-core/wiki/HL7.ch-FHIR-IG-Balloting) page
* [#156](https://github.com/hl7ch/ch-core/issues/156): Change default branch from 'master' to 'main' to postponed to a later publication due to dependence on IG Publisher


### STU 3 Ballot (2022-06-29)

#### Added
* [#123](https://github.com/hl7ch/ch-core/issues/123) ([#137](https://github.com/hl7ch/ch-core/issues/137), [#140](https://github.com/hl7ch/ch-core/issues/140)): GLN and EPR-SPID checks
* [#135](https://github.com/hl7ch/ch-core/issues/135): Add an Identifier data type for AHVN13 with check for correctness
* [#131](https://github.com/hl7ch/ch-core/issues/131): Update change log/STU note box according to the latest requirements
  
#### Changed / Updated
* [#133](https://github.com/hl7ch/ch-core/issues/133): Fix example OIDs
* [#129](https://github.com/hl7ch/ch-core/issues/129): Wrong slicing for Composition.author.extension:ch-ext-epr-time profiles/structures
* [#144](https://github.com/hl7ch/ch-core/issues/144): Improve slicing that info entry[x] warnings are not shown (CH Core Document, CH Core Document EPR)
* [#122](https://github.com/hl7ch/ch-core/issues/122): No fixed value for Status of Composition EPR
* [#121](https://github.com/hl7ch/ch-core/issues/121): Relax Custodian cardinality in CH Core Composition EPR
* [#118](https://github.com/hl7ch/ch-core/issues/118), [#127](https://github.com/hl7ch/ch-core/issues/127), [#142](https://github.com/hl7ch/ch-core/issues/142): Typos
* [#132](https://github.com/hl7ch/ch-core/issues/132): Fix link of concept map
* [#124](https://github.com/hl7ch/ch-core/issues/124): Fix description for a least one given/family HumanName if provided
* [#145](https://github.com/hl7ch/ch-core/issues/145): Update title of the profiles


### STU 2 (2021-04-24)

- [#57](https://github.com/hl7ch/ch-core/issues/57) cardinality 0..1 for ch-ext-epr-versionNumber in Composition
- [#58](https://github.com/hl7ch/ch-core/issues/58) IMP instead of INP in encounter
- [#59](https://github.com/hl7ch/ch-core/issues/59) adapt extension EPR Information Recipient for ch-core
- [#60](https://github.com/hl7ch/ch-core/issues/60) relax card. in CH Core Organization
- [#61](https://github.com/hl7ch/ch-core/issues/61) slice setup incorrect on address lines
- [#63](https://github.com/hl7ch/ch-core/issues/63) PractitionerRole example HPWengerRole has an invalid specialty coding
- [#65](https://github.com/hl7ch/ch-core/issues/65) CH-Core dependsOn CH-EPR-TERM current
- [#66](https://github.com/hl7ch/ch-core/issues/66) Encounter: specify a type for the visit number Fallnummer
- [#67](https://github.com/hl7ch/ch-core/issues/67) Add CC license to ch-core implementation guide
- [#70](https://github.com/hl7ch/ch-core/issues/70) fix resource narrative status if narrative text has been defined
- [#77](https://github.com/hl7ch/ch-core/issues/77) ch-core-document: add check that fullUrl exists and is an absolute url
- [#85](https://github.com/hl7ch/ch-core/issues/85) EPRDataEnterer: valueReference only to Practitioner (not Person)
- [#90](https://github.com/hl7ch/ch-core/issues/90) description callName in eCH-011 Types
- [#91](https://github.com/hl7ch/ch-core/issues/91) dataenterer as PractitionerRole
- [#92](https://github.com/hl7ch/ch-core/issues/92) PDF requirements for CH Core Composition  
- [#93](https://github.com/hl7ch/ch-core/issues/93) EPR Data Enterer map to PractitionerRole instead of Practitioner
- [#94](https://github.com/hl7ch/ch-core/issues/94) Precise description for salutation, title in HumanName
- [#95](https://github.com/hl7ch/ch-core/issues/95) EPR Document fix Bundler.identifier to uuid
- [#96](https://github.com/hl7ch/ch-core/issues/96), [#97](https://github.com/hl7ch/ch-core/issues/97) Composition.identifier instead of setId Extension 
- [#98](https://github.com/hl7ch/ch-core/issues/98) renamed Composition Patient Profile EPR to Patient Profile EPR
- [#100](https://github.com/hl7ch/ch-core/issues/100), [#101](https://github.com/hl7ch/ch-core/issues/101), [#102](https://github.com/hl7ch/ch-core/issues/102), [#103](https://github.com/hl7ch/ch-core/issues/103) Reference to CH Core profiles
- [#104](https://github.com/hl7ch/ch-core/issues/104) CH Core Consent Profile naming


### STU 1 (2020-04-21)
- [Initial version, summary of changes](https://github.com/hl7ch/ch-core/issues?q=is%3Aissue+milestone%3A%22v1.0.0+STU1+Final+Publication%22+is%3Aclosed)


---

// File: input/pagecontent/extensions.md


{% include list-extensions.xhtml %}


---

// File: input/pagecontent/guidance.md

### SNOMED CT Swiss Extension
Within the EPR, SNOMED CT is used for the metadata and in the exchange formats, see [here](index.html#metadata-annex-3-and-annex-9).   
SNOMED CT is designed so that the International Edition can be complemented by creating extensions to meet national or local requirements. Since December 2021, the Swiss Extension is available and includes translations in German, French and Italian. 

* [SNOMED CT Browser](https://browser.ihtsdotools.org/): International Edition & Swiss Extension
* [Swiss Extension](https://confluence.ihtsdotools.org/display/DOCEXTPG/4.4.2+Edition+URI+Examples): 
   * Focus Module ID: 2011000195101
   * Edition URI: [http://snomed.info/sct/2011000195101](http://snomed.info/sct/2011000195101) 

The **guidance** for Switzerland is that the `version` element should only be added when using codes from the Swiss extension.    
In the following sections, the usage in [instances](#usage-in-instances) and [value sets](#usage-in-value-sets) is illustrated exemplarily.

#### Usage in Instances
To illustrate how the SNOMED CT codes (international vs. Swiss extension) are used in instances, examples of the CH EMED exchange format are shown below.  

**SNOMED CT international**: 721912009 "Medication summary document (record artifact)"   

Composition.type of a Medication Prescription document (see [full example](https://fhir.ch/ig/ch-emed/Bundle-2-6-MedicationPrescription.json.html)):
```json
"type" : {
  "coding" : [
    {
      "system" : "http://snomed.info/sct",
      "code" : "761938008",
      "display" : "Medicinal prescription record (record artifact)"
    }
  ]
}
```
<p>&nbsp;</p>

**SNOMED CT Swiss extension**: 82291000195104 "Medication dispense document (record artifact)"   

Composition.type of a Medication Dispense document (see [full example](https://fhir.ch/ig/ch-emed/Bundle-1-2-MedicationDispense.json.html)): 
```json
"type" : {
  "coding" : [
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/2011000195101",
      "code" : "82291000195104",
      "display" : "Medication dispense document (record artifact)"
    }
  ]
}
```
<p>&nbsp;</p>

#### Usage in Value Sets
To illustrate how the SNOMED CT codes (international vs. Swiss extension) are used in value sets, examples of the CH Term are shown below.  

**SNOMED CT international**: 17621005 "Normal (qualifier value)"    

ValueSet.compose.include of the DocumentEntry.confidentialityCode ValueSet (see [full ValueSet](https://fhir.ch/ig/ch-term/ValueSet-DocumentEntry.confidentialityCode.html)):
```json
"compose" : {
  "include" : [
    {
      "system" : "http://snomed.info/sct",
      "concept" : [
        {
          "code" : "17621005",
          "display" : "Normal (qualifier value)"
        }
      ]
    }
  ]
}
```
<p>&nbsp;</p>

**SNOMED CT Swiss extension**: 1141000195107 "Secret (qualifier value)"      

ValueSet.compose.include of the DocumentEntry.confidentialityCode ValueSet (see [full ValueSet](https://fhir.ch/ig/ch-term/ValueSet-DocumentEntry.confidentialityCode.html)):
```json
"compose" : {
  "include" : [
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/2011000195101",
      "concept" : [
        {
          "code" : "1141000195107",
          "display" : "Secret (qualifier value)",
        }
      ]
    }
  ]
}
```
<p>&nbsp;</p>


### Readable Representation of EPR Documents
Representation (display) of FHIR Documents (Bundle) in the the context of the Swiss EPR:

1. Exchange formats for the Swiss EPR require a readable representation.
2. For this purpose, the `originalRepresentation` section has been defined in the [CH Core Composition EPR profile](StructureDefinition-ch-core-composition-epr.html), from where a embedded PDF as a Binary resource is linked. According to the EPR ordonnance the PDF has to be in PDF/A-1 or PDF/A-2 format.
3. This is one possible way for the readable representation of EPR documents. It is used, for example, in the CH EMED exchange format (Medication Card document, Medication Prescription document). 

#### Including the PDF in the FHIR Document
To include the PDF in the FHIR document, it is added to the Bundle ([CH Core Document EPR profile](StructureDefinition-ch-core-document-epr.html)) as an entry containing a [Binary resource](https://hl7.org/fhir/R4/binary.html). From the section `originalRepresentation` in the Composition ([CH Core Composition EPR profile](StructureDefinition-ch-core-composition-epr.html)) points a link from the narrative text to the entry of the Bundle (`Bundle.entry.id`) including the PDF.

#### Example
The below example snippets show the relevant parts of the EPR document example [Transfer note for radiological diagnostics](Bundle-DocumentContainingOriginalRepresentationAsPdfA.json.html):

Section `originalRepresentation` of the Composition entry -> `Composition.section.text`: 
{% fragment Bundle/DocumentContainingOriginalRepresentationAsPdfA JSON BASE:Bundle.entry[0].resource.section.where(code.coding.code = '55108-5') %}

<p>&nbsp;</p>

Binary entry -> `Bundle.entry.id`: 
{% fragment Bundle/DocumentContainingOriginalRepresentationAsPdfA JSON EXCEPT:Bundle.entry.where(id = '8f304c87-ed20-4e9a-b928-db4116eb6594') %}

<p>&nbsp;</p>


---

// File: input/pagecontent/index.md

### Introduction
This implementation guide is provided to support the use of FHIR<sup>&reg;&copy;</sup> in Switzerland.

This guide is a working specification. We anticipate that it will be implemented and tested by FHIR system producers whose feedback will help improve its content. With this standard for trial use, we are looking for feedback on whether the following goals have been met: 
- The guide provides guidance on essential resources for identifiers, code systems, value sets and naming systems in Switzerland, specifically in relation to the Swiss Electronic Patient Record ([EPR](https://www.patientendossier.ch/en)).
- The guide defines extensions that are necessary for local use in Switzerland.
- The guide covers the requirements for [eCH-0010 postal address (V7.0)](https://www.ech.ch/de/ech/ech-0010/7.0), [eCH-0046 contact (V5.0)](https://www.ech.ch/de/ech/ech-0046/5.0) and [eCH-0011 personal data (V8.1)](https://www.ech.ch/de/ech/ech-0011/8.1) (including [eCH-0007 municipality (V6.0)](https://www.ech.ch/de/ech/ech-0007/6.0) and [eCH-0021 additional personal data (V7.0)](https://www.ech.ch/de/ech/ech-0021/7.0)).
- The guide incorporates Federal Statistics Office (BFS) variables for medical statistics. See [BFS](https://www.bfs.admin.ch/bfs/de/home/statistiken/kataloge-datenbanken/publikationen.assetdetail.7066232.html) (available in German, French and Italian).

**Note**: This implementation guide is not (yet) a FHIR API specification, this will be a goal for the next iteration.

<div markdown="1" class="stu-note">

[Significant changes, open and closed issues.](changelog.html)

</div>

**Download**: You can download this implementation guide in [NPM format](https://confluence.hl7.org/display/FHIR/NPM+Package+Specification) from [here](package.tgz).

### Relation to the Swiss EPR
The Annexes to the Swiss [Electronic Patient Record](https://www.patientendossier.ch/en) (EPR) law specify the technical and semantic requirements for interoperability.

#### Metadata (Annex 3 and Annex 9)
Metadata relating to the Swiss EPR is defined in Annexes 3 and 9 by the [Ministry of Health](https://www.bag.admin.ch/bag/de/home/gesetze-und-bewilligungen/gesetzgebung/gesetzgebung-mensch-gesundheit/gesetzgebung-elektronisches-patientendossier.html). [eHealth Suisse](https://www.e-health-suisse.ch/en/home.html) maintains the value sets with additional provided translations in ART-DECOR in the [CH-EPR](https://art-decor.org/art-decor/decor-project--ch-epr-) project. All code systems and value sets from the CH-EPR project are exported to the FHIR implementation guide [CH Term](http://fhir.ch/ig/ch-term/index.html), which forms the basis for CH Core.

#### Exchange formats (Annex 4)
Exchange formats for the Swiss EPR are defined in Annex 4. Exchange formats can be represented as FHIR documents.

- [CH Core Document Profile EPR](StructureDefinition-ch-core-document.html): the base definition for a structured document in the Swiss EPR.
- [CH Core Composition Profile EPR](StructureDefinition-ch-core-composition-epr.html): the base definition for a composition, providing the basic structure of the FHIR document. 

#### XDS (Annex 5, Amendment 1)
Requirements for IHE XDS are given in Annex 5. The [CH Core DocumentReference Profile EPR](StructureDefinition-ch-core-documentreference-epr.html) defines how metadata used in the EPR is to be mapped to XDS Metadata. Please note that the IHE MHD profile, which includes the document reference resource, is not yet specified in the Annexes, a draft implementation guide is [CH EPR mHealth](http://fhir.ch/ig/ch-epr-mhealth/index.html).

#### CH:ATC Profile (Annex 5, Amendment 2.2)
The CH ATC profile defines the requirements for a patient’s audit trail. [CH ATC](http://fhir.ch/ig/ch-atc/index.html) is a FHIR implementation guide based on FHIR STU3 and R4. There is currently no relationship between CH ATC and CH Core.

### Scope
This document presents Swiss use concepts defined via FHIR processable artifacts:

* [Profiles](profiles.html) - useful constraints of essential FHIR resources and data types for Swiss use. 
* [Extensions](extensions.html) -  FHIR extensions that are added for local use, covering necessary Swiss concepts. 
* [Terminology](https://fhir.ch/ig/ch-term/index.html) - defined or referenced code systems and value sets for Switzerland. 

See also the guidance section with detailed descriptions about some special topics:
* [SNOMED CT Swiss Extension](guidance.html#snomed-ct-swiss-extension)
* [Readable Representation of EPR Documents](guidance.html#readable-representation-of-epr-documents)

### Governance
The CH Core implementation guide is managed by HL7 Switzerland in the [HL7 Switzerland FHIR technical committee](https://www.hl7.ch/technisches-komitee/), see also [source](https://github.com/hl7ch/ch-core).

### Collaboration
This guide is the product of collaborative work undertaken with participants from:

* [Swiss FHIR Implementers Community](https://www.fhir.ch)
* [HL7 Switzerland](https://www.hl7.ch)
* [eHealth Suisse](https://www.e-health-suisse.ch/en/home.html)

### Safety Considerations
This implementation guide defines data elements, resources, formats, and methods for exchanging healthcare data between different participants in the healthcare process. As such, clinical safety is a key concern. Additional guidance regarding safety for the specification’s many and various implementations is available at: [https://www.hl7.org/FHIR/safety.html](https://www.hl7.org/FHIR/safety.html).

Although the present specification does gives users the opportunity to observe data protection and data security regulations, its use does not guarantee compliance with these regulations. Effective compliance must be ensured by appropriate measures during implementation projects and in daily operations. The corresponding implementation measures are explained in the standard. 
In addition, the present specification can only influence compliance with the security regulations in the technical area of standardization. It cannot influence organizational and contractual matters.

### IP Statements
This document is licensed under Creative Commons "No Rights Reserved" ([CC0](https://creativecommons.org/publicdomain/zero/1.0/)).

HL7®, HEALTH LEVEL SEVEN®, FHIR® and the FHIR <img src="icon-fhir-16.png" style="float: none; margin: 0px; padding: 0px; vertical-align: bottom"/>&reg; are trademarks owned by Health Level Seven International, registered with the United States Patent and Trademark Office.

This implementation guide contains and references intellectual property owned by third parties ("Third Party IP"). Acceptance of these License Terms does not grant any rights with respect to Third Party IP. The licensee alone is responsible for identifying and obtaining any necessary licenses or authorizations to utilize Third Party IP in connection with the specification or otherwise.

{% include ip-statements.xhtml %}

### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

### Dependency Table

{% include dependency-table.xhtml %}

### Globals Table

{% include globals-table.xhtml %}

---

// File: input/pagecontent/profiles.md

### Resource Profiles
The following profiles set the minimum expectations to record, search and fetch health data associated with a Patient:

{% include list-profiles.xhtml %}


### Data Type Profiles
These define constraints on FHIR data types for systems conforming to this implementation guide:

  <div>
{% for sd_hash in site.data.structuredefinitions -%}
{%- assign sd = sd_hash[1] -%}
{%- if sd.kind  == "complex-type" and sd.type != "Extension" -%}

    <li>
      <a href="{{sd.path}}">{{sd.title}}</a>
    </li>
{%- endif -%}
{%- endfor -%}  

  </div>


---

// File: input/pagecontent/StructureDefinition-ch-core-ext-entry-resource-cross-references-intro.md

### Scope and Usage

This Extension can be used to reference entry to entry in two different documents (i.e. Bundle[type=document]).
If you have to change attributes of an entry (i.e. Immunization) which is documented in a FHIR document Bundle/Composition,
you create a new document - or a copy of - with the same content.
* First you change the attributes of the entry which have to be changed.
* Second you add the *relatesTo* information to the *Composition* in the *new document*.
* Third you add this extension to the Immunization entry in the new document. 
  * The *entry* slice will be filled with the Identifier of the entry in the original document and define the resource type (Immunization). 
  * The *container* slice will be filled with the Identifier and resource type of the Composition in the original document.
  * The *relationcode* slice will be set with the corresponding code (i.e. replaces).

You can use this extension for all kind of resources and containers.


---

// File: input/fsh/aliases.fsh

Alias: $v3-ParticipationFunction =                  http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction
Alias: $consentscope =                              http://terminology.hl7.org/CodeSystem/consentscope
Alias: $v3-ActCode =                                http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $consentpolicycodes =                        http://terminology.hl7.org/CodeSystem/consentpolicycodes
Alias: $v2-0203 =                                   http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $v3-MaritalStatus =                          http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $v3-ReligiousAffiliation =                   http://terminology.hl7.org/CodeSystem/v3-ReligiousAffiliation
Alias: $v3-RoleCode =                               http://terminology.hl7.org/CodeSystem/v3-RoleCode

Alias: $loinc =                                     http://loinc.org
Alias: $sct =                                       http://snomed.info/sct
Alias: $standardterms =                             http://standardterms.edqm.eu

Alias: $IHE.FormatCode.codesystem =                 http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem

Alias: $bfs-medstats-18-admittype =                 http://fhir.ch/ig/ch-core/CodeSystem/bfs-medstats-18-admittype
Alias: $bfs-medstats-18-admittype_1 =               http://fhir.ch/ig/ch-core/ValueSet/bfs-medstats-18-admittype
Alias: $bfs-medstats-19-admitrole =                 http://fhir.ch/ig/ch-core/CodeSystem/bfs-medstats-19-admitrole
Alias: $bfs-medstats-19-admitrole_1 =               http://fhir.ch/ig/ch-core/ValueSet/bfs-medstats-19-admitrole
Alias: $bfs-medstats-27-dischargedecision =         http://fhir.ch/ig/ch-core/CodeSystem/bfs-medstats-27-dischargedecision
Alias: $bfs-medstats-27-dischargedecision_1 =       http://fhir.ch/ig/ch-core/ValueSet/bfs-medstats-27-dischargedecision
Alias: $bfs-medstats-28-dischargedestination =      http://fhir.ch/ig/ch-core/CodeSystem/bfs-medstats-28-dischargedestination
Alias: $bfs-medstats-28-dischargedestination_1 =    http://fhir.ch/ig/ch-core/ValueSet/bfs-medstats-28-dischargedestination
Alias: $bfs-medstats-17-admitsource =               http://fhir.ch/ig/ch-core/CodeSystem/bfs-medstats-17-admitsource
Alias: $bfs-medstats-17-admitsource_1 =             http://fhir.ch/ig/ch-core/ValueSet/bfs-medstats-17-admitsource
Alias: $bfs-medstats-29-dischargeencounter =        http://fhir.ch/ig/ch-core/CodeSystem/bfs-medstats-29-dischargeencounter
Alias: $bfs-medstats-29-dischargeencounter_1 =      http://fhir.ch/ig/ch-core/ValueSet/bfs-medstats-29-dischargeencounter
Alias: $ech-11-maritaldata-separation =             http://fhir.ch/ig/ch-core/CodeSystem/ech-11-maritaldata-separation
Alias: $ech-11-maritaldata-separation_1 =           http://fhir.ch/ig/ch-core/ValueSet/ech-11-maritaldata-separation
Alias: $cs-servicerequest-category =                http://fhir.ch/ig/ch-term/CodeSystem/servicerequest-category
Alias: $vs-servicerequest-category =                http://fhir.ch/ig/ch-term/ValueSet/servicerequest-category

Alias: $ch-core-maritalstatus =                     http://fhir.ch/ig/ch-core/ValueSet/ch-core-maritalstatus
Alias: $ech-10-linetype =                           http://fhir.ch/ig/ch-core/ValueSet/ech-10-linetype
Alias: $ech-11-firstnamedatatype =                  http://fhir.ch/ig/ch-core/ValueSet/ech-11-firstnamedatatype
Alias: $ech-11-namedatatype =                       http://fhir.ch/ig/ch-core/ValueSet/ech-11-namedatatype

Alias: $ech-46-phonecategory =                      http://fhir.ch/ig/ch-core/CodeSystem/ech-46-phonecategory
Alias: $ech-46-emailcategory =                      http://fhir.ch/ig/ch-core/CodeSystem/ech-46-emailcategory
Alias: $ech-46-internetcategory =                   http://fhir.ch/ig/ch-core/CodeSystem/ech-46-internetcategory
Alias: $ech-11-maritalstatus =                      http://fhir.ch/ig/ch-core/CodeSystem/ech-11-maritalstatus
Alias: $ech-11 =                                    http://fhir.ch/ig/ch-core/CodeSystem/ech-11

Alias: $patient-birthPlace =                        http://hl7.org/fhir/StructureDefinition/patient-birthPlace
Alias: $iso21090-SC-coding =                        http://hl7.org/fhir/StructureDefinition/iso21090-SC-coding
Alias: $iso21090-ADXP-streetName =                  http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName
Alias: $iso21090-ADXP-houseNumber =                 http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber
Alias: $iso21090-ADXP-unitID =                      http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-unitID
Alias: $iso21090-ADXP-postBox =                     http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox
Alias: $iso21090-EN-qualifier =                     http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier
Alias: $patient-citizenship =                       http://hl7.org/fhir/StructureDefinition/patient-citizenship
Alias: $patient-religion =                          http://hl7.org/fhir/StructureDefinition/patient-religion

Alias: $DocumentEntry.typeCode =                    http://fhir.ch/ig/ch-term/ValueSet/DocumentEntry.typeCode
Alias: $DocumentEntry.classCode =                   http://fhir.ch/ig/ch-term/ValueSet/DocumentEntry.classCode
Alias: $DocumentEntry.confidentialityCode =         http://fhir.ch/ig/ch-term/ValueSet/DocumentEntry.confidentialityCode
Alias: $DocumentEntry.mimeType =                    http://fhir.ch/ig/ch-term/ValueSet/DocumentEntry.mimeType
Alias: $DocumentEntry.languageCode =                http://fhir.ch/ig/ch-term/ValueSet/DocumentEntry.languageCode
Alias: $DocumentEntry.formatCode =                  http://fhir.ch/ig/ch-term/ValueSet/DocumentEntry.formatCode
Alias: $DocumentEntry.healthcareFacilityTypeCode =  http://fhir.ch/ig/ch-term/ValueSet/DocumentEntry.healthcareFacilityTypeCode
Alias: $DocumentEntry.practiceSettingCode =         http://fhir.ch/ig/ch-term/ValueSet/DocumentEntry.practiceSettingCode
Alias: $HCProfessional.hcSpecialisation =           http://fhir.ch/ig/ch-term/ValueSet/HCProfessional.hcSpecialisation
Alias: $HCProfessional.hcProfession =               http://fhir.ch/ig/ch-term/ValueSet/HCProfessional.hcProfession

Alias: $SwissMedicVacCS =                             http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs
Alias: $SwissVaccinesVS =                             http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-vaccines-vs
Alias: $SnomedCTForVaccineCodeVS =                    http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-vaccines-snomedct-vs                         
Alias: $ChVacdTargetDiseasesAndIllnessesUndegoneVS =  http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-targetdiseasesandillnessesundergoneforimmunization-vs
Alias: $RouteOfAdministrationImmunizationVS =         http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-route-of-administration-vs
Alias: $SwissVaccinationPlanImmunizationsVS =         http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-ch-vaccination-plan-immunizations-vs
Alias: $SwissImmunizationRecommendationCategoriesVS = http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-recommendation-categories-vs
Alias: $SwissRecommendationForecastStatus =   http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-recommendation-forecast-status-vs

---

// File: input/fsh/extensions/Accident.fsh

Extension: Accident
Id: ch-ext-accident
Title: "If an encounter is caused by an accident"
Description: "Extension to define an encounter that is caused by an accident and at which time the accident happened"

* ^context.type = #element
* ^context.expression = "Encounter.hospitalization"

* . ^definition = "Extension to define an encounter is caused by an accident and at which time the accident happened"
* extension contains
    tag 0..1 and
    dateTime 0..1
* extension[tag] only Extension
* extension[tag] ^short = "Information if it was an accident"
* extension[tag].url only uri
* extension[tag].valueBoolean 1..
* extension[tag].valueBoolean only boolean
* extension[tag].valueBoolean ^short = "Flag to indicate that it was an accident"
* extension[dateTime] ^short = "Timestamp of the authorship/data input"
* extension[dateTime].url only uri
* extension[dateTime].valueDateTime 1..
* extension[dateTime].valueDateTime only dateTime
* extension[dateTime].valueDateTime ^short = "date and time of accident"
* url only uri







---

// File: input/fsh/extensions/Author.fsh

Extension: Author
Id: ch-ext-author
Title: "Author of the content"
Description: "Extension to reference the person (and her/his organization) who is responsible for the content 
    (e.g. an author of an eMedication document or a recorder of an immunization). 
    This extension is used to differentiate on entry level between the author of the content (represented with this extension) and 
    the author of the medical decision or the performer of an event (represented e.g. with Resource.performer/informationSource)."

* ^context[0].type = #element
* ^context[=].expression = "MedicationStatement"
* ^context[+].type = #element
* ^context[=].expression = "MedicationDispense"
* ^context[+].type = #element
* ^context[=].expression = "MedicationRequest"
* ^context[+].type = #element
* ^context[=].expression = "Observation"
* ^context[+].type = #element
* ^context[=].expression = "Immunization"
* url only uri
* valueReference 1..
* valueReference only Reference(CHCorePatient or CHCorePractitionerRole or RelatedPerson)
* valueReference ^short = "Author of the content"
* valueReference.extension ^slicing.discriminator.type = #value
* valueReference.extension ^slicing.discriminator.path = "url"
* valueReference.extension ^slicing.rules = #open
* valueReference.extension contains 
    EPRTime named time 0..1
* valueReference.extension[time] ^short = "Timestamp of the authorship/data input"
* valueReference.reference 1..

---

// File: input/fsh/extensions/BfsDischargeDecision.fsh

Extension: BfsDischargeDecision
Id: ch-ext-bfs-ms-dischargedecision
Title: "BFS Extension Medical Statistic: Discharge Décision for Encounter"
Description: "BFS Extension Discharge Décision for Encounter"

* ^context.type = #element
* ^context.expression = "Encounter.hospitalization"

* url only uri
* valueCoding 0..1
* valueCoding only Coding
* valueCoding from $bfs-medstats-27-dischargedecision_1 (extensible)
* valueCoding ^short = "Value of extension"
* valueCoding ^definition = "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list)."
* valueCoding ^binding.description = "A set of codes advising a system or user which name in a set of names to select for a given purpose."

---

// File: input/fsh/extensions/BfsDischargeDestination.fsh

Extension: BfsDischargeDestination
Id: ch-ext-bfs-ms-dischargedestination
Title: "BFS Extension Medical Statistic: Discharge Destination for Encounter"
Description: "BFS Extension Discharge Destination for Encounter"

* ^context.type = #element
* ^context.expression = "Encounter.hospitalization"

* url only uri
* valueCoding 0..1
* valueCoding only Coding
* valueCoding from $bfs-medstats-28-dischargedestination_1 (extensible)
* valueCoding ^short = "Value of extension"
* valueCoding ^definition = "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list)."
* valueCoding ^binding.description = "A set of codes advising a system or user which name in a set of names to select for a given purpose."

---

// File: input/fsh/extensions/BfsMsAdmitRole.fsh

Extension: BfsMsAdmitRole
Id: ch-ext-bfs-ms-admitrole
Title: "BFS Extension Medical Statistic: Admit Role for Encounter"
Description: "BFS Extension Admit Role for Encounter"

* ^context.type = #element
* ^context.expression = "Encounter.hospitalization"

* url only uri
* valueCoding 0..1
* valueCoding only Coding
* valueCoding from $bfs-medstats-19-admitrole_1 (extensible)
* valueCoding ^short = "Value of extension"
* valueCoding ^definition = "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list)."
* valueCoding ^binding.description = "A set of codes advising a system or user which name in a set of names to select for a given purpose."





---

// File: input/fsh/extensions/ChCorePatientEch11PlaceOfBirth.fsh

Extension: ChCorePatientEch11PlaceOfBirth
Parent: $patient-birthPlace
Id: ch-core-patient-ech-11-placeofbirth
Title: "Place of Birth according to eCH-0011"
Description: "The registered place of birth of the patient."

* . ^short = "Place of birth for patient according to eCH-0011"
* . ^definition = "The registered place of birth of the patient."
* valueAddress only CHCoreAddressEch11PlaceOfBirth

---

// File: input/fsh/extensions/ChCorePatientEch11PlaceOfOrigin.fsh

Extension: ChCorePatientEch11PlaceOfOrigin
Id: ch-core-patient-ech-11-placeoforigin
Title: "Place of Origin according to eCH-0011"
Description: "The place of origin of the patient."

* ^context.type = #element
* ^context.expression = "Patient"

* . ^short = "Place of origin for patient according to eCH-0011"
* . ^definition = "The registered place of origin of the patient."
* url only uri
* valueAddress only CHCoreAddressECH11PlaceOfOrigin

---

// File: input/fsh/extensions/ECH0010AddressLineType.fsh

Extension: ECH0010AddressLineType
Id: ch-ext-ech-10-linetype
Title: "Address Line Type"
Description: "eCH-0010: Extension to define line types for addresses"

* ^context.type = #element
* ^context.expression = "Address.line"

* . ^definition = "eCH-0010: Extension to define line types for an address"
* url only uri
* valueCode 0..1
* valueCode only code
* valueCode from $ech-10-linetype (extensible)
* valueCode ^short = "Value of extension"
* valueCode ^definition = "Value of extension - may be a resource or one of a constrained set of the data types (see\r\n       Extensibility in the spec for list)."
* valueCode ^binding.description = "A set of codes advising a system or user which name in a set of names to select for a\r\n         given purpose."

---

// File: input/fsh/extensions/ECH007MunicipalityId.fsh

Extension: ECH007MunicipalityId
Id: ch-ext-ech-7-municipalityid
Title: "eCH-0007 Municipality Id – BFS Gemeindenummer"
Description: "eCH-0007: Extension to define a BFS Number for a municipality"

* ^context.type = #element
* ^context.expression = "Address.city"

* . ^definition = "Extension for eCH-0011 - bfs number (ministry of statistics number)"
* url only uri
* valueString 0..1
* valueString only string
* valueString ^short = "Value of extension"
* valueString ^definition = "BFS number"

---

// File: input/fsh/extensions/ECH011FirstName.fsh

Extension: ECH011FirstName
Id: ch-ext-ech-11-firstname
Title: "First Name"
Description: "eCH-0011: Extension to define first name type"

* ^context.type = #element
* ^context.expression = "HumanName.given"

* . ^short = "Extension"
* . ^definition = "eCH-0011: Extension to define first name type"
* url only uri
* valueCode 0..1
* valueCode only code
* valueCode from $ech-11-firstnamedatatype (extensible)
* valueCode ^short = "Value of extension"
* valueCode ^definition = "Value of extension - may be a resource or one of a constrained set of the data types (see\r\n       Extensibility in the spec for list)."
* valueCode ^binding.description = "A set of codes advising a system or user which name in a set of names to select for a\r\n         given purpose."

---

// File: input/fsh/extensions/ECH011MaritalDataSeparation.fsh

Extension: ECH011MaritalDataSeparation
Id: ch-ext-ech-11-maritaldata-separation
Title: "Marital Data - Separation Type"
Description: "eCH-0011: Extension to define the separation type. For married but separated persons and for persons in a registered partnership but living separately."

* ^context.type = #element
* ^context.expression = "Patient.maritalStatus"

* . ^definition = "Extension for eCH-0011 - MaritalData - separation"
* url only uri
* valueCodeableConcept 0..1
* valueCodeableConcept only CodeableConcept
* valueCodeableConcept from $ech-11-maritaldata-separation_1 (extensible)
* valueCodeableConcept ^short = "Value of extension"
* valueCodeableConcept ^definition = "CodeableConcept for separation type"
* valueCodeableConcept ^binding.description = "ValueSet separation type"

---

// File: input/fsh/extensions/ECH011Name.fsh

Extension: ECH011Name
Id: ch-ext-ech-11-name
Title: "Name"
Description: "eCH-0011: Extension to define name type"

* ^context.type = #element
* ^context.expression = "HumanName.family"

* . ^definition = "Extension for eCH-0011 - namedatatype"
* url only uri
* valueCode 0..1
* valueCode only code
* valueCode from $ech-11-namedatatype (extensible)
* valueCode ^short = "Value of extension"
* valueCode ^definition = "Value of extension - may be a resource or one of a constrained set of the data types (see\r\n       Extensibility in the spec for list)."
* valueCode ^binding.description = "A set of codes advising a system or user which name in a set of names to select for a\r\n         given purpose."

---

// File: input/fsh/extensions/ECH46EmailCategory.fsh

Extension: ECH46EmailCategory
Id: ch-ext-ech-46-emailcategory
Title: "eCH-0046 Email Category"
Description: "Extension to define the e-mail category according to eCH-0046"

* ^context.type = #element
* ^context.expression = "ContactPoint.use"
* url only uri
* valueCodeableConcept 1..1
* valueCodeableConcept from http://fhir.ch/ig/ch-core/ValueSet/ech-46-emailcategory (extensible)
* valueCodeableConcept.coding ^short = "Predefined category"
* valueCodeableConcept.text ^short = "Category as free text should only be used if none of the predefined categories apply"

---

// File: input/fsh/extensions/ECH46InternetCategory.fsh

Extension: ECH46InternetCategory
Id: ch-ext-ech-46-internetcategory
Title: "eCH-0046 Internet Category"
Description: "Extension to define the internet category according to eCH-0046"

* ^context.type = #element
* ^context.expression = "ContactPoint.use"
* url only uri
* valueCodeableConcept 1..1
* valueCodeableConcept from http://fhir.ch/ig/ch-core/ValueSet/ech-46-internetcategory (extensible)
* valueCodeableConcept.coding ^short = "Predefined category"
* valueCodeableConcept.text ^short = "Category as free text should only be used if none of the predefined categories apply"

---

// File: input/fsh/extensions/ECH46PhoneCategory.fsh

Extension: ECH46PhoneCategory
Id: ch-ext-ech-46-phonecategory
Title: "eCH-0046 Phone Category"
Description: "Extension to define the phone category according to eCH-0046"

* ^context.type = #element
* ^context.expression = "ContactPoint.use"
* url only uri
* valueCodeableConcept 1..1
* valueCodeableConcept from http://fhir.ch/ig/ch-core/ValueSet/ech-46-phonecategory (extensible)
* valueCodeableConcept.coding ^short = "Predefined category"
* valueCodeableConcept.text ^short = "Category as free text should only be used if none of the predefined categories apply"

---

// File: input/fsh/extensions/EncounterSupsectedReadmission.fsh

Extension: EncounterSupsectedReadmission
Id: ch-ext-encounter-susp-readmission
Title: "Encounter, Suspected Readmission"
Description: "Encounter Extension for suspected readmission"

* ^context.type = #element
* ^context.expression = "Encounter.hospitalization"

* url only uri
* valueBoolean 0..1
* valueBoolean only boolean
* valueBoolean ^short = "Value of extension"
* valueBoolean ^definition = "True if it is a suspected readmission, false otherwise"

---

// File: input/fsh/extensions/EPRConfidentialityCode.fsh

Extension: EPRConfidentialityCode
Id: ch-ext-epr-confidentialitycode
Title: "EPR Confidentiality Code"
Description: "Extension for the confidentiality code according to the Swiss EPR regulation"

* ^context.type = #element
* ^context.expression = "Composition.confidentiality"

* . ^definition = "Extension to define the confidentiality code of the document"
* url only uri
* valueCodeableConcept 1..1
* valueCodeableConcept only CodeableConcept
* valueCodeableConcept from $DocumentEntry.confidentialityCode (extensible)
* valueCodeableConcept ^short = "Value of extension"
* valueCodeableConcept.coding 1..1
* valueCodeableConcept.coding.system 1..1
* valueCodeableConcept.coding.code 1..1

---

// File: input/fsh/extensions/EPRDataEnterer.fsh

Extension: EPRDataEnterer
Id: ch-ext-epr-dataenterer
Title: "EPR Data Enterer"
Description: "Extension to define the information about the person and organisation that entered data and the time of the data input"

* ^context.type = #element
* ^context.expression = "Composition"

* . ^definition = "Extension to define the information about the person and organization that entered data and the time of the data input"
* extension contains
    enterer 1..1 and
    EPRTime named timestamp 0..1
* extension[enterer] only Extension
* extension[enterer] ^short = "Information about the person and organization that entered data"
* extension[enterer].url only uri
* extension[enterer].valueReference 1..
* extension[enterer].valueReference only Reference(CHCorePractitionerRole)
* extension[enterer].valueReference ^short = "Person other than the author"
* extension[timestamp] ^short = "Timestamp of the authorship/data input"
* url only uri

---

// File: input/fsh/extensions/EPRInformationRecipient.fsh

Extension: EPRInformationRecipient
Id: ch-ext-epr-informationrecipient
Title: "EPR Information Recipient"
Description: "Extension for a recipient of this document (corresponds to the addressee of a letter - person or organization)"

* ^context.type = #element
* ^context.expression = "Composition"
* . 0..*
* . ^short = "Extension"
* . ^definition = "Extension to define the information about the recipient"
* url only uri
* valueReference 1..
* valueReference only Reference(CHCorePractitioner or CHCorePatient or RelatedPerson or CHCoreOrganization)

---

// File: input/fsh/extensions/EPRTime.fsh

Extension: EPRTime
Id: ch-ext-epr-time
Title: "EPR Time"
Description: "Additional timestamp for the author or other elements."

* ^context[0].type = #element
* ^context[=].expression = "Composition.extension"
* ^context[+].type = #element
* ^context[=].expression = "Composition.author"
* ^context[+].type = #element
* ^context[=].expression = "Composition.section.author"
* ^context[+].type = #element
* ^context[=].expression = "MedicationStatement.informationSource"
* ^context[+].type = #element
* ^context[=].expression = "MedicationStatement.extension"
* ^context[+].type = #element
* ^context[=].expression = "Observation.extension"
* ^context[+].type = #element
* ^context[=].expression = "Observation.performer"
* ^context[+].type = #element
* ^context[=].expression = "MedicationDispense.extension"
* ^context[+].type = #element
* ^context[=].expression = "MedicationDispense.performer.actor"
* ^context[+].type = #element
* ^context[=].expression = "MedicationRequest.extension"
* ^context[+].type = #element
* ^context[=].expression = "MedicationRequest.performer"
* ^context[+].type = #element
* ^context[=].expression = "MedicationRequest.requester"
* ^context[+].type = #element
* ^context[=].expression = "Extension.valueReference"

* . ^definition = "Extension to define the timestamp of the authorship/data input"
* url only uri
* valueDateTime 1..1
* valueDateTime only dateTime
* valueDateTime ^short = "Value of extension"

---

// File: input/fsh/extensions/ResourcesCrossReferences.fsh

Extension: EntryResourceCrossReferences
Id: ch-core-ext-entry-resource-cross-references
Title: "Entry Resource Cross References"
Description: "Extension to make a reference beween resources as entries in i.e. document bundles."
* ^status = #active
* ^date = "2023-11-02T00:00:00+00:00"
* ^publisher = "HL7 Schweiz"
* ^context.type = #element
* ^context.expression = "DomainResource"
* . 0..*
* . ^short = "Entry Resource Cross References"
* . ^definition = "Extension to make a reference beween resources as entries in i.e. document bundles."
* extension contains
    entry 1..1 and
    container 1..1 and
    relationcode 1..1
* extension[entry] only Extension
* extension[entry] ^short = "Reference to the related entry"
* extension[entry] ^definition = "Reference to the related entry."
* extension[entry].extension 0..0
* extension[entry].url only uri
* extension[entry].valueReference ^short = "Reference to the entry resource in an other container i.e. Bundle"
* extension[entry].valueReference.reference 0..0
* extension[entry].valueReference.type 1..1
* extension[entry].valueReference.type ^short = "Entry resource type"
* extension[entry].valueReference.type ^definition = "The resource type of the referenced entry"
* extension[entry].valueReference.identifier 1..1
* extension[entry].valueReference.identifier ^short = "Identifier of entry"
* extension[entry].valueReference.identifier ^definition = "A identifier of the referenced entry"
* extension[container] only Extension
* extension[container] ^short = "Reference to the related container resource"
* extension[container] ^definition = "Reference to the related container resource"
* extension[container].extension 0..0
* extension[container].url only uri
* extension[container].valueReference ^short = "Reference to the container resource i.e. Bundle.composition containinig the referenced entry"
* extension[container].valueReference.reference 0..0
* extension[container].valueReference.type 1..1
* extension[container].valueReference.type ^short = "Container resource type"
* extension[container].valueReference.type ^definition = "The resource type of the container containing the referenced entry"
* extension[container].valueReference.identifier 1..1
* extension[container].valueReference.identifier ^short = "Identifier of container"
* extension[container].valueReference.identifier ^definition = "A identifier of the container containing the referenced entry"

* extension[relationcode] only Extension
* extension[relationcode] ^short = "Reference to the related document"
* extension[relationcode] ^definition = "Reference to the related document"
* extension[relationcode].extension 0..0
* extension[relationcode].url only uri
* extension[relationcode].valueCode 1.. 
* extension[relationcode].valueCode only code
* extension[relationcode].valueCode from DocumentRelationshipType (required)
* extension[relationcode].valueCode ^short = "The type of relationship between the elements in the documents."

---

// File: input/fsh/extensions/Substitution.fsh

Extension: CHEMEDExtSubstitution
Id: ch-emed-ext-substitution
Title: "Substitution"
Description: "This extension is used to indicate whether the medication can be substituted for this patient, i.e. whether it is allowed. 
                        (For a prescription, MedicationRequest.substitution is used to record whether a substitution is allowed or not. 
                        When dispensing, a performed substitution is recorded in MedicationDispense.substitution.)"
* ^url = "http://fhir.ch/ig/ch-emed/StructureDefinition/ch-emed-ext-substitution"
* ^context.type = #element
* ^context.expression = "MedicationStatement"
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from http://terminology.hl7.org/ValueSet/v3-ActSubstanceAdminSubstitutionCode (preferred)
* value[x] ^short = "Whether substitution is allowed or not"

---

// File: input/fsh/extensions/TreatmentReason.fsh

Extension: CHEMEDExtTreatmentReason
Id: ch-emed-ext-treatmentreason
Title: "Treatment Reason"
Description: "Extension to represent the treatment reason"
* ^url = "http://fhir.ch/ig/ch-emed/StructureDefinition/ch-emed-ext-treatmentreason"
* ^context.type = #element
* ^context.expression = "MedicationDispense"
* value[x] 1..1
* value[x] only string
* value[x] ^short = "Treatment reason"


---

// File: input/fsh/instances/allergyintolerance/AllergyToCatDander.fsh

Instance: AllergyToCatDander
InstanceOf: CHCoreAllergyIntolerance
Usage: #example
Description: "Example for AllergyIntolerance"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical#active "Active"
* verificationStatus = http://terminology.hl7.org/CodeSystem/allergyintolerance-verification#confirmed "Confirmed"
* type = #allergy
* category = #biologic
* criticality = #low
* code = $sct#232346004 "Allergy to cat dander (finding)"
* patient = Reference(ElisabethBroennimannByBFH)
* reaction.extension[certainty].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/reaction-event-certainty#confirmed "Confirmed"
* reaction.extension[exposureDescription].valueString = "Animal shelter"
* reaction.substance = $sct#260152009 "Cat dander (substance)"
* reaction.manifestation = $sct#271807003 "Eruption of skin (disorder)"
* reaction.severity = #mild


---

// File: input/fsh/instances/bundle/1-ZuweisungZurRadiologischenDiagnostik-FHIR.fsh

Instance: 1-ZuweisungZurRadiologischenDiagnostik-FHIR
InstanceOf: CHCoreDocumentEPR
Usage: #example
Title: "Zuweisung zur radiologischen Diagnostik"
Description: "Document EPR (fullUrls of entries with ‘http’)"
* meta.profile[0] = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-document"
* meta.profile[+] = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-document-epr"
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:31397b31-be60-47e1-bec6-f37816d42b0c"
* type = #document
* timestamp = "2017-10-03T17:33:00+01:00"
* entry[0].fullUrl = "http://test.fhir.ch/r4/Composition/ZuweisungZurRadiologischenDiagnostik"
* entry[=].resource = ZuweisungZurRadiologischenDiagnostik
* entry[+].fullUrl = "http://test.fhir.ch/r4/Practitioner/AllzeitBereit"
* entry[=].resource = AllzeitBereit
* entry[+].fullUrl = "http://test.fhir.ch/r4/Patient/MaxMuster"
* entry[=].resource = MaxMuster
* entry[+].fullUrl = "http://test.fhir.ch/r4/Organization/GruppenpraxisCH"
* entry[=].resource = GruppenpraxisCH
* entry[+].fullUrl = "http://test.fhir.ch/r4/Organization/Radiologieinstitut"
* entry[=].resource = Radiologieinstitut
* entry[+].fullUrl = "http://test.fhir.ch/r4/PractitionerRole/SchreibKraftAtGruppenpraxisCH"
* entry[=].resource = SchreibKraftAtGruppenpraxisCH
* entry[+].fullUrl = "http://test.fhir.ch/r4/Practitioner/SchreibKraft"
* entry[=].resource = SchreibKraft

---

// File: input/fsh/instances/bundle/2-ResourceCrossReferencesDokument.fsh

Instance: 2-ResourceCrossReferencesDokument
InstanceOf: CHCoreDocument
Usage: #example
Title: "Dokument Eintrag referenz zu anderem Eintrag in einem anderen Dokument"
Description: "Ein Beispieldokument mit einem Eintrag welcher die Extension zur kreuzreferenzierung auf einen anderen Eintrag in einem anderen Dokument enthält."
* meta.profile[0] = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-document"
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:66403c99-f41f-4225-bbea-3e34ac1c0d3c"
* type = #document
* timestamp = "2023-11-02T12:00:00+01:00"
* entry[+].fullUrl = "http://test.fhir.ch/r4/Composition/ResourceCrossReferencesDokumentComposition"
* entry[=].resource = ResourceCrossReferencesDokumentComposition
* entry[+].fullUrl = "http://test.fhir.ch/r4/Practitioner/AllzeitBereit"
* entry[=].resource = AllzeitBereit
* entry[+].fullUrl = "http://test.fhir.ch/r4/Patient/MaxMuster"
* entry[=].resource = MaxMuster
* entry[+].fullUrl = "http://test.fhir.ch/r4/Immunization/ImmunizationEntry"
* entry[=].resource = ImmunizationEntry
* entry[+].fullUrl = "http://test.fhir.ch/r4/Organization/GruppenpraxisCH"
* entry[=].resource = GruppenpraxisCH


Instance: ImmunizationEntry
InstanceOf: Immunization
Title: "Immunization example for Immunization Administration"
Description: "An Immunization example with extension for cross dokument referencing."
Usage: #example
* id = "ImmunizationEntry"
* extension[+].url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-ext-entry-resource-cross-references"
* extension[=].extension[+].url = "entry"
* extension[=].extension[=].valueReference.identifier.system = "urn:ietf:rfc:3986"
* extension[=].extension[=].valueReference.identifier.value = "urn:uuid:19aaeae7-05cc-4b97-9d03-a65ae4aac2ac"
* extension[=].extension[=].valueReference.type = ResourceType#Immunization
* extension[=].extension[+].url = "container"
* extension[=].extension[=].valueReference.identifier.system = "urn:ietf:rfc:3986"
* extension[=].extension[=].valueReference.identifier.value = "urn:uuid:1d118906-ede6-4109-bca1-0fc25f58bc69"
* extension[=].extension[=].valueReference.type = ResourceType#Composition
* extension[=].extension[+].url = "relationcode"
* extension[=].extension[=].valueCode = #replaces
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:9f326dee-1265-4b59-88b3-fd63bb2da934"
* status = #completed
* vaccineCode = $sct#871751006 "Vaccine product containing only Hepatitis A virus antigen (medicinal product)"
* patient = Reference(http://test.fhir.ch/r4/Patient/MaxMuster)
* occurrenceDateTime = "2021-06-01"
* recorded = "2021-06-02T00:00:00.390+02:00"
* lotNumber = "AHAVB946A"
* route = http://standardterms.edqm.eu#20035000 "Intramuscular use"
* performer.actor = Reference(http://test.fhir.ch/r4/Practitioner/AllzeitBereit)
* protocolApplied.targetDisease[0] = $sct#40468003 "Viral hepatitis, type A (disorder)"
* protocolApplied.doseNumberPositiveInt = 1
* note.authorReference = Reference(http://test.fhir.ch/r4/Practitioner/AllzeitBereit)
* note.time = "2021-06-01"
* note.text = "Der Patient hat diese Impfung ohne jegliche Nebenwirkungen gut vertragen."


Instance: ResourceCrossReferencesDokumentComposition
InstanceOf: Composition
Title: "Patient Document 1 Stammgemeinschaft Composition"
Description: "Example for Composition Immunization Administration"
Usage: #example
* id = "ResourceCrossReferencesDokumentComposition"
* language = #en-US
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:e652561f-5df2-418e-8cb4-b4b07fd2ee42"
* status = #final
* type = $sct#41000179103 "Immunization record"
* subject = Reference(http://test.fhir.ch/r4/Patient/MaxMuster)
* date = "2021-06-01T00:00:00+02:00"
* author = Reference(http://test.fhir.ch/r4/Practitioner/AllzeitBereit)
* title = "Immunization Administration"
* confidentiality.extension.url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-epr-confidentialitycode"
* confidentiality.extension.valueCodeableConcept = $sct#17621005 "Normal (qualifier value)"
* confidentiality = #N
* section[0].id = "administration"
* section[=].title = "Immunization Administration"
* section[=].code = $loinc#11369-6 "Hx of Immunization"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en-US\" lang=\"en-US\"><p><b>Code: </b><span>Hx of Immunization (http://loinc.org#11369-6)</span></p><p><b>Entries:</b></p><table><tr><td><a href=\"Immunization-ImmunizationEntry.html\">Immunization/ImmunizationEntry</a></td></tr></table></div>"
* section[=].entry = Reference(http://test.fhir.ch/r4/Immunization/ImmunizationEntry)


---

// File: input/fsh/instances/composition/ZuweisungZurRadiologischenDiagnostik.fsh

Instance: ZuweisungZurRadiologischenDiagnostik
InstanceOf: CHCoreCompositionEPR  
Usage: #example
Title: "Zuweisung zur radiologischen Diagnostik"
Description: "Composition EPR with the information about the transfer in different sections"
* meta.profile[0] = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-composition"
* meta.profile[+] = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-composition-epr"
* language = #de-CH
* extension[0].url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-epr-informationrecipient"
* extension[=].valueReference = Reference(Radiologieinstitut)
* extension[+].extension[0].url = "enterer"
* extension[=].extension[=].valueReference = Reference(PractitionerRole/SchreibKraftAtGruppenpraxisCH)
* extension[=].extension[+].url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-epr-time"
* extension[=].extension[=].valueDateTime = "2017-10-03T13:15:00+01:00"
* extension[=].url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-epr-dataenterer"
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:31397b31-be60-47e1-bec6-f37816d42b0c"
* status = #final
* type.coding[0] = $loinc#28616-1 "Physician Transfer note"
* type.coding[+] = $sct#371535009 "Transfer summary report"
* subject = Reference(MaxMuster)
* date = "2017-10-03T17:33:00+01:00"
* author.extension.url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-epr-time"
* author.extension.valueDateTime = "2017-10-03T16:09:00+01:00"
* author = Reference(AllzeitBereit)
* title = "Zuweisung zur Radiologischen Diagnostik"
* confidentiality.extension.url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-epr-confidentialitycode"
* confidentiality.extension.valueCodeableConcept = $sct#17621005 "Normal"
* confidentiality = #N
* attester.mode = #legal
* attester.time = "2017-10-03"
* attester.party = Reference(AllzeitBereit)
* custodian = Reference(GruppenpraxisCH)
* section[0].title = "Gewünschte Untersuchung"
* section[=].text.status = #additional
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n        Der Patient erwartet Ihr Aufgebot zur Untersuchung.<br/><i>Spezifizierung der gewünschten Untersuchung</i><br/></div>"
* section[+].title = "Dringlichkeit / Wunschtermin"
* section[=].text.status = #additional
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><i>Angaben zum gewünschten Termin</i></div>"
* section[+].title = "Fragestellung"
* section[=].text.status = #additional
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><i>Grund für die Durchführung der Untersuchung und Angaben zum aktuellen Leiden resp. zum Grund der Untersuchung</i></div>"
* section[+].title = "Angaben zum Patienten"
* section[=].text.status = #additional
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><i>Erfolgte Voruntersuchungen<br/>\r\n        Befundkopie – Empfänger</i><br/></div>"
* section[+].title = "Klinische Angaben"
* section[=].text.status = #additional
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><i>Beschreibung des aktuellen Leidens<br/>\r\n\t\t\t\tSchwangerschaft ja / nein<br/>\r\n\t\t\t\tLaborwerte (Quick / Tc, Kreatinin)<br/>\r\n\t\t\t\tBekannte Allergien</i><br/></div>"

---

// File: input/fsh/instances/condition/Urticaria.fsh

Instance: Urticaria
InstanceOf: CHCoreCondition
Usage: #example
Description: "Example for Condition"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* verificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status#unconfirmed
* category = http://terminology.hl7.org/CodeSystem/condition-category#problem-list-item
* severity = $sct#6736007 "Moderate (severity modifier) (qualifier value)"
* code = $sct#126485001 "Urticaria (disorder)"
* subject = Reference(ElisabethBroennimannByBFH)
* onsetDateTime = "2021-12"


---

// File: input/fsh/instances/consent/EncounterExcludedForEpr.fsh

Instance: EncounterExcludedForEpr
InstanceOf: CHCoreEPRConsent
Usage: #example
Title: "Consent for Swiss EPR with Encounter exclusions"
Description: "Consent that Patient has a Swiss EPR but exclude it for a specific Encounter"
* status = #active
* scope = $consentscope#patient-privacy "Privacy Consent"
* category[VSCat] = $v3-ActCode#IDSCL "information disclosure"
* patient.reference = "Patient/ElisabethBroennimannByBFH"
* patient.display = "Elisabeth Broennimann"
* dateTime = "2020-12-28"
* organization.display = "Stammgemeinschaft XYZ"
* policy.authority = "https://www.admin.ch/opc/de/classified-compilation/20111795/index.html"
* policyRule = $consentpolicycodes#ch-epr
* provision.type = #deny
* provision.data.meaning = #instance
* provision.data.reference.type = "Encounter"
* provision.data.reference.reference = "Encounter/EncounterAccidentBroennimann"

---

// File: input/fsh/instances/consent/PatientHasEpr.fsh

Instance: PatientHasEpr
InstanceOf: CHCoreEPRConsent
Usage: #example
Title: "Consent for Swiss EPR"
Description: "Consent that Patient has a Swiss EPR"
* status = #active
* scope = $consentscope#patient-privacy "Privacy Consent"
* category[VSCat] = $v3-ActCode#IDSCL "information disclosure"
* patient.reference = "Patient/FranzMuster"
* patient.display = "Franz Muster"
* dateTime = "2020-12-28"
* organization.display = "Stammgemeinschaft XYZ"
* policy.authority = "https://www.admin.ch/opc/de/classified-compilation/20111795/index.html"
* policyRule = $consentpolicycodes#ch-epr

---

// File: input/fsh/instances/coverage/CoverageBroennimann.fsh

Instance: CoverageBroennimann
InstanceOf: CHCoreCoverage
Usage: #example
Title: "Coverage Broennimann"
Description: "Coverage with Mrs. Broenimann as beneficiary and the health insurance Sanitas as issuer of the policy (represented as contained resource)"
* meta.source = "https://www.ti.bfh.ch/de/bachelor/medizininformatik.html"
* contained = sanitas
* identifier[insuranceCardNumber][0].system = "urn:oid:2.16.756.5.30.1.123.100.1.1.1"
* identifier[insuranceCardNumber][=].value = "80756015090002647590"
// test case identifier slicing https://github.com/hl7ch/ch-core/issues/287
// * identifier[+].type = http://fhir.ch/ig/ch-orf/CodeSystem/ch-orf-cs-coverageidentifiertype#Self "Self-payer"
* status = #active
* beneficiary.reference = "Patient/ElisabethBroennimannByBFH"
* payor.reference = "#sanitas"


---

// File: input/fsh/instances/documentreference/Docu.fsh

Instance: Docu
InstanceOf: CHCoreDocumentReference
Usage: #example
Title: "DocumentReference to a PDF"
Description: "DocumentReference with metadata about the document and the referenced document (PDF) as Base64 attachment"
* status = #current
* type = $sct#371532007 "Progress report"
* category = $sct#371525003 "Clinical procedure report"
* securityLabel = $sct#17621005 "Normal"

* content.attachment.contentType = #application/pdf
// Testcase for ch-docref-1: not included in the VS
// * content.attachment.contentType = #image/svg+xml

* content.attachment.language = #de-CH
* content.attachment.data = "JVBERi0xLjcNCiW1tbW1DQoxIDAgb2JqDQo8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFIvTGFuZyhkZS1DSCkgL1N0cnVjdFRyZWVSb290IDEwIDAgUi9NYXJrSW5mbzw8L01hcmtlZCB0cnVlPj4vTWV0YWRhdGEgMjAgMCBSL1ZpZXdlclByZWZlcmVuY2VzIDIxIDAgUj4+DQplbmRvYmoNCjIgMCBvYmoNCjw8L1R5cGUvUGFnZXMvQ291bnQgMS9LaWRzWyAzIDAgUl0gPj4NCmVuZG9iag0KMyAwIG9iag0KPDwvVHlwZS9QYWdlL1BhcmVudCAyIDAgUi9SZXNvdXJjZXM8PC9Gb250PDwvRjEgNSAwIFI+Pi9FeHRHU3RhdGU8PC9HUzcgNyAwIFIvR1M4IDggMCBSPj4vUHJvY1NldFsvUERGL1RleHQvSW1hZ2VCL0ltYWdlQy9JbWFnZUldID4+L01lZGlhQm94WyAwIDAgNTk1LjMyIDg0MS45Ml0gL0NvbnRlbnRzIDQgMCBSL0dyb3VwPDwvVHlwZS9Hcm91cC9TL1RyYW5zcGFyZW5jeS9DUy9EZXZpY2VSR0I+Pi9UYWJzL1MvU3RydWN0UGFyZW50cyAwPj4NCmVuZG9iag0KNCAwIG9iag0KPDwvRmlsdGVyL0ZsYXRlRGVjb2RlL0xlbmd0aCAxNzY+Pg0Kc3RyZWFtDQp4nK2OTQuCQBiE7wv7H+aoQeu76+quIB78pEAwEjpERxOhovL/Qyoe6t4cBgaGmQdegzj26myXg5IEaZ7hxRkJmmWtkSAEUSB8BauliBTeHWenDR6cpS1nXikhpSCN9srZ3CZIGBJWaZiQRGjR3qdedTTox2ka/ZLsmirOzk7aDePT9Z2hu8GV5DTuVjv5bKV7QbvnrJi+Dpz9gU2qQGj1zbYgrST4/UNRZ/gAkc45Rw0KZW5kc3RyZWFtDQplbmRvYmoNCjUgMCBvYmoNCjw8L1R5cGUvRm9udC9TdWJ0eXBlL1RydWVUeXBlL05hbWUvRjEvQmFzZUZvbnQvQkNERUVFK0NhbGlicmkvRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nL0ZvbnREZXNjcmlwdG9yIDYgMCBSL0ZpcnN0Q2hhciAzMi9MYXN0Q2hhciAxMTUvV2lkdGhzIDE4IDAgUj4+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bXA6Q3JlYXRvclRvb2w+TWljcm9zb2Z0wq4gV29yZCBmw7xyIE9mZmljZSAzNjU8L3htcDpDcmVhdG9yVG9vbD48eG1wOkNyZWF0ZURhdGU+MjAxOS0wOS0wMlQxODoxOTo1OSswMjowMDwveG1wOkNyZWF0ZURhdGU+PHhtcDpNb2RpZnlEYXRlPjIwMTktMDktMDJUMTg6MTk6NTkrMDI6MDA8L3htcDpNb2RpZnlEYXRlPjwvcmRmOkRlc2NyaXB0aW9uPgo8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iPgo8eG1wTU06RG9jdW1lbnRJRD51dWlkOkNCOUZCOTkzLTNDQzQtNDE3MC1BMUM3LTc5RUFGQkM3RjZDMzwveG1wTU06RG9jdW1lbnRJRD48eG1wTU06SW5zdGFuY2VJRD51dWlkOkNCOUZCOTkzLTNDQzQtNDE3MC1BMUM3LTc5RUFGQkM3RjZDMzwveG1wTU06SW5zdGFuY2VJRD48L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCjwvcmRmOlJERj48L3g6eG1wbWV0YT48P3hwYWNrZXQgZW5kPSJ3Ij8+DQplbmRzdHJlYW0NCmVuZG9iag0KMjEgMCBvYmoNCjw8L0Rpc3BsYXlEb2NUaXRsZSB0cnVlPj4NCmVuZG9iag0KMjIgMCBvYmoNCjw8L1R5cGUvWFJlZi9TaXplIDIyL1dbIDEgNCAyXSAvUm9vdCAxIDAgUi9JbmZvIDkgMCBSL0lEWzw5M0I5OUZDQkM0M0M3MDQxQTFDNzc5RUFGQkM3RjZDMz48OTNCOTlGQ0JDNDNDNzA0MUExQzc3OUVBRkJDN0Y2QzM+XSAvRmlsdGVyL0ZsYXRlRGVjb2RlL0xlbmd0aCA4Nj4+DQpzdHJlYW0NCnicY2AAgv//GYGkIAMDiFoGoe6BKcY3YIrpGZhi7gNTLLUQahOEeg6UB2tnglDMEIoFQrFCKEYIBVXJBtTH+gWsnb0BTHEEg6m0P2CqOJ6BAQBAWAzTDQplbmRzdHJlYW0NCmVuZG9iag0KeHJlZg0KMCAyMw0KMDAwMDAwMDAxMCA2NTUzNSBmDQowMDAwMDAwMDE3IDAwMDAwIG4NCjAwMDAwMDAxNjYgMDAwMDAgbg0KMDAwMDAwMDIyMiAwMDAwMCBuDQowMDAwMDAwNDkyIDAwMDAwIG4NCjAwMDAwMDA3NDIgMDAwMDAgbg0KMDAwMDAwMDkxMCAwMDAwMCBuDQowMDAwMDAxMTQ5IDAwMDAwIG4NCjAwMDAwMDEyMDIgMDAwMDAgbg0KMDAwMDAwMTI1NSAwMDAwMCBuDQowMDAwMDAwMDExIDY1NTM1IGYNCjAwMDAwMDAwMTIgNjU1MzUgZg0KMDAwMDAwMDAxMyA2NTUzNSBmDQowMDAwMDAwMDE0IDY1NTM1IGYNCjAwMDAwMDAwMTUgNjU1MzUgZg0KMDAwMDAwMDAxNiA2NTUzNSBmDQowMDAwMDAwMDE3IDY1NTM1IGYNCjAwMDAwMDAwMDAgNjU1MzUgZg0KMDAwMDAwMTkyMCAwMDAwMCBuDQowMDAwMDAyMTMxIDAwMDAwIG4NCjAwMDAwMjYzNjQgMDAwMDAgbg0KMDAwMDAyOTUzNSAwMDAwMCBuDQowMDAwMDI5NTgwIDAwMDAwIG4NCnRyYWlsZXINCjw8L1NpemUgMjMvUm9vdCAxIDAgUi9JbmZvIDkgMCBSL0lEWzw5M0I5OUZDQkM0M0M3MDQxQTFDNzc5RUFGQkM3RjZDMz48OTNCOTlGQ0JDNDNDNzA0MUExQzc3OUVBRkJDN0Y2QzM+XSA+Pg0Kc3RhcnR4cmVmDQoyOTg2NQ0KJSVFT0YNCnhyZWYNCjAgMA0KdHJhaWxlcg0KPDwvU2l6ZSAyMy9Sb290IDEgMCBSL0luZm8gOSAwIFIvSURbPDkzQjk5RkNCQzQzQzcwNDFBMUM3NzlFQUZCQzdGNkMzPjw5M0I5OUZDQkM0M0M3MDQxQTFDNzc5RUFGQkM3RjZDMz5dIC9QcmV2IDI5ODY1L1hSZWZTdG0gMjk1ODA+Pg0Kc3RhcnR4cmVmDQozMDQ4MQ0KJSVFT0Y="
* content.format = $IHE.FormatCode.codesystem#urn:ihe:rad:PDF "XDS-I PDF (XDS-I)"
* context.facilityType = $sct#22232009 "Hospital"
* context.practiceSetting = $sct#394802001 "General medicine"

---

// File: input/fsh/instances/encounter/EncounterAccidentBroennimann.fsh

Instance: EncounterAccidentBroennimann
InstanceOf: CHCoreEncounter
Usage: #example
Title: "Encounter Accident Broennimann"
Description: "Inpatient Encounter of Mrs. Broennimann which is flagged as an accident"
* meta.source = "https://www.ti.bfh.ch/de/bachelor/medizininformatik.html"
* identifier[VisitNumber].type = $v2-0203#VN "Visit number"
* identifier[VisitNumber].system = "http://www.ti.bfh.ch/example/fallnummerdomain"
* identifier[VisitNumber].value = "12345"
* status = #finished
* class = $v3-ActCode#IMP "inpatient encounter"
* priority = $bfs-medstats-18-admittype#1 "Notfall (Behandlung innerhalb von 12 Std. unabdingbar)"
* subject.reference = "Patient/ElisabethBroennimannByBFH"
* period.start = "2020-12-20T16:00:00+02:00"
* period.end = "2020-12-22T16:15:00+02:00"

* hospitalization.extension[BfsAdmitRole].url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-bfs-ms-admitrole"
* hospitalization.extension[BfsAdmitRole].valueCoding = $bfs-medstats-19-admitrole#2 "Rettungsdienst (Ambulanz, Polizei)"

* hospitalization.extension[accident].extension[tag].url = "tag"
* hospitalization.extension[accident].extension[tag].valueBoolean = true
* hospitalization.extension[accident].extension[dateTime].url = "dateTime"
* hospitalization.extension[accident].extension[dateTime].valueDateTime = "2020-12-20T15:15:00+02:00"
* hospitalization.extension[accident].url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-accident"

* hospitalization.extension[readmission].url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-encounter-susp-readmission"
* hospitalization.extension[readmission].valueBoolean = false

* hospitalization.extension[BfsDischargeDecision].url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-bfs-ms-dischargedecision"
* hospitalization.extension[BfsDischargeDecision].valueCoding = $bfs-medstats-27-dischargedecision#1 "auf Initiative des Behandelnden"

* hospitalization.extension[BfsDischargeDestination].url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-bfs-ms-dischargedestination"
* hospitalization.extension[BfsDischargeDestination].valueCoding = $bfs-medstats-28-dischargedestination#1 "Zuhause"

* hospitalization.admitSource = $bfs-medstats-17-admitsource#1 "Zuhause"

* hospitalization.dischargeDisposition = $bfs-medstats-29-dischargeencounter#1 "geheilt/kein Behandlungsbedarf"

---

// File: input/fsh/instances/encounter/EncounterAmbulantBroennimann.fsh

Instance: EncounterAmbulantBroennimann
InstanceOf: CHCoreEncounter
Usage: #example
Title: "Encounter Ambulant Broennimann"
Description: "Ambulant Encounter of Mrs. Broennimann, representing the visit number (Fallnummer) and the BFS variables"
* meta.source = "https://www.ti.bfh.ch/de/bachelor/medizininformatik.html"
* identifier.type = $v2-0203#VN "Visit number"
* identifier.system = "http://www.ti.bfh.ch/example/fallnummerdomain"
* identifier.value = "1234"
* status = #finished
* class = $v3-ActCode#AMB "ambulatory"
* priority = $bfs-medstats-18-admittype#2 "angemeldet, geplant"
* subject.reference = "Patient/ElisabethBroennimannByBFH"
* period.start = "2019-04-22T16:00:00+02:00"
* period.end = "2019-04-22T16:15:00+02:00"

* hospitalization.extension[BfsAdmitRole].url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-bfs-ms-admitrole"
* hospitalization.extension[BfsAdmitRole].valueCoding = $bfs-medstats-19-admitrole#1 "selbst, Angehörige"

* hospitalization.extension[BfsDischargeDecision].url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-bfs-ms-dischargedecision"
* hospitalization.extension[BfsDischargeDecision].valueCoding = $bfs-medstats-27-dischargedecision#1 "auf Initiative des Behandelnden"

* hospitalization.extension[BfsDischargeDestination].url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-bfs-ms-dischargedestination"
* hospitalization.extension[BfsDischargeDestination].valueCoding = $bfs-medstats-28-dischargedestination#1 "Zuhause"

* hospitalization.admitSource = $bfs-medstats-17-admitsource#1 "Zuhause"
* hospitalization.dischargeDisposition = $bfs-medstats-29-dischargeencounter#1 "geheilt/kein Behandlungsbedarf"

---

// File: input/fsh/instances/immunization/Immunization.fsh

Instance: CHCoreImmunizationExample
InstanceOf: CHCoreImmunization
Title: "CH Core Immunization Example"
Description: "Example of Immunization resource for use in Swiss specific use cases."
Usage: #example
* extension[0].url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-author"
* extension[=].valueReference = Reference(ImmunizationPractitionerRoleExample)
* identifier.system = "urn:oid:2.16.756.5.30.1.147.1.3.1"
* identifier.value = "1829774"
* status = #completed
* vaccineCode = $SwissMedicVacCS#637 "Boostrix"
* patient = Reference(ImmunizationPatientExample)
* occurrenceDateTime = "2017-09-15T09:12:56+02:00"
* recorded = "2017-09-15T09:12:56+02:00"
* lotNumber = "12-34244"
* route = $standardterms#20035000 "Intramuscular use"
* performer.actor = Reference (ImmunizationPractitionerRoleExample)
* protocolApplied.targetDisease[0] = $sct#397430003 "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* protocolApplied.targetDisease[+] = $sct#76902006 "Tetanus (disorder)"
* protocolApplied.targetDisease[+] = $sct#27836007 "Pertussis (disorder)"
* protocolApplied.doseNumberPositiveInt = 1

Instance: ImmunizationPatientExample
InstanceOf: CHCorePatient
Title: "Patient example for immunization"
Description: "Example of Patient resource for use in Swiss specific immunization use cases."
Usage: #example
* identifier[+].system = "urn:oid:1.2.3.4"
* identifier[=].value = "12345678"
* identifier[=].type = http://terminology.hl7.org/CodeSystem/v2-0203#MR
* name.family = "Wegmueller"
* name.given = "Monika"
* telecom.system = #phone
* telecom.value = "tel:+41.32.685.12.34"
* telecom.use = #home
* gender = #female
* birthDate = "1967-02-10"
* address.type = #both
* address.line = "Leidensweg 10"
* address.city = "Specimendorf"
* address.postalCode = "9876"
* address.country = "CH"

Instance: ImmunizationAuthorExample
InstanceOf: CHCorePractitioner
Title: "Author example for immunization"
Description: "Example of Practitioner resource for use in Swiss specific immunization use cases."
Usage: #example
* identifier.system = "urn:oid:2.51.1.3"
* identifier.value = "7601888888884"
* active = true
* name.family = "Bereit"
* name.given = "Allzeit"
* name.prefix = "Dr. med."
* telecom[0].system = #phone
* telecom[=].value = "tel:+41.32.234.55.66"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "fax:+41.32.234.55.67"
* telecom[=].use = #work
* telecom[+].system = #email
* telecom[=].value = "mailto:bereit@gruppenpraxis.ch"
* telecom[=].use = #work
* telecom[+].system = #url
* telecom[=].value = "http://www.gruppenpraxis.ch"
* telecom[=].use = #work
* address.type = #physical
* address.line = "Doktorgasse 2"
* address.city = "Musterhausen"
* address.postalCode = "8888"
* address.country = "CH"

Instance: ImmunizationPractitionerRoleExample
InstanceOf: CHCorePractitionerRole
Title: "PractitionerRole example for immunization"
Description: "Example of PractitionerRole resource for use in Swiss specific immunization use cases."
Usage: #example
* active = true
* practitioner = Reference(ImmunizationAuthorExample)
* organization = Reference(ImmunizationOrganizationExample)

Instance: ImmunizationOrganizationExample
InstanceOf: CHCoreOrganization
Title: "Organization example for immunization"
Description: "Example of Organization resource for use in Swiss specific immunization use cases."
Usage: #example
* identifier.system = "urn:oid:2.51.1.3"
* identifier.value = "7601888888884"
* name = "Gruppenpraxis CH"
* telecom[0].system = #phone
* telecom[=].value = "tel:+41.32.234.55.66"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "fax:+41.32.234.55.67"
* telecom[=].use = #work
* telecom[+].system = #email
* telecom[=].value = "mailto:bereit@gruppenpraxis.ch"
* telecom[=].use = #work
* telecom[+].system = #url
* telecom[=].value = "http://www.gruppenpraxis.ch"
* telecom[=].use = #work
* address.line = "Doktorgasse 2"
* address.city = "Musterhausen"
* address.state = "ZH"
* address.postalCode = "8888"
* address.country = "CH"

---

// File: input/fsh/instances/immunizationrecommendation/ImmunizationRecommendation.fsh

Instance: CHCoreImmunizationRecommendationExample
InstanceOf: CHCoreImmunizationRecommendation
Title: "CH Core ImmunizationRecommendation Example"
Description: "Example of ImmunizationRecommendation resource for use in Swiss specific use cases."
Usage: #example
* patient = Reference(ImmunizationPatientExample)
* authority = Reference(ImmunizationOrganizationExample)
* date = "2021-06-01T00:00:00+02:00"
* recommendation.vaccineCode = $SwissMedicVacCS#58317 "Fluad"
* recommendation.targetDisease = $sct#63650001 "Cholera (disorder)"
* recommendation.forecastStatus = http://terminology.hl7.org/CodeSystem/immunization-recommendation-status#due
* recommendation.forecastReason = http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-recommendation-categories-cs#41503 "Empfohlene Impfungen für Risikogruppen"
* recommendation.dateCriterion.code = $loinc#30980-7 "Date vaccine due"
* recommendation.dateCriterion.value = "2021-06-01T00:00:00+02:00"

// Instance: ImmunizationPatientExample
// InstanceOf: CHCorePatient
// Title: "Patient example for immunization"
// Description: "Example of Patient resource for use in Swiss specific immunization use cases."
// Usage: #example
// * identifier[+].system = "urn:oid:1.2.3.4"
// * identifier[=].value = "12345678"
// * identifier[=].type = http://terminology.hl7.org/CodeSystem/v2-0203#MR
// * name.family = "Wegmueller"
// * name.given = "Monika"
// * telecom.system = #phone
// * telecom.value = "tel:+41.32.685.12.34"
// * telecom.use = #home
// * gender = #female
// * birthDate = "1967-02-10"
// * address.type = #both
// * address.line = "Leidensweg 10"
// * address.city = "Specimendorf"
// * address.postalCode = "9876"
// * address.country = "CH"

// Instance: ImmunizationAuthorExample
// InstanceOf: CHCorePractitioner
// Title: "Author example for immunization"
// Description: "Example of Practitioner resource for use in Swiss specific immunization use cases."
// Usage: #example
// * identifier.system = "urn:oid:2.51.1.3"
// * identifier.value = "7601888888884"
// * active = true
// * name.family = "Bereit"
// * name.given = "Allzeit"
// * name.prefix = "Dr. med."
// * telecom[0].system = #phone
// * telecom[=].value = "tel:+41.32.234.55.66"
// * telecom[=].use = #work
// * telecom[+].system = #fax
// * telecom[=].value = "fax:+41.32.234.55.67"
// * telecom[=].use = #work
// * telecom[+].system = #email
// * telecom[=].value = "mailto:bereit@gruppenpraxis.ch"
// * telecom[=].use = #work
// * telecom[+].system = #url
// * telecom[=].value = "http://www.gruppenpraxis.ch"
// * telecom[=].use = #work
// * address.type = #physical
// * address.line = "Doktorgasse 2"
// * address.city = "Musterhausen"
// * address.postalCode = "8888"
// * address.country = "CH"

// Instance: ImmunizationPractitionerRoleExample
// InstanceOf: CHCorePractitionerRole
// Title: "PractitionerRole example for immunization"
// Description: "Example of PractitionerRole resource for use in Swiss specific immunization use cases."
// Usage: #example
// * active = true
// * practitioner = Reference(ImmunizationAuthorExample)
// * organization = Reference(ImmunizationOrganizationExample)

// Instance: ImmunizationOrganizationExample
// InstanceOf: CHCoreOrganization
// Title: "Organization example for immunization"
// Description: "Example of Organization resource for use in Swiss specific immunization use cases."
// Usage: #example
// * identifier.system = "urn:oid:2.51.1.3"
// * identifier.value = "7601888888884"
// * name = "Gruppenpraxis CH"
// * telecom[0].system = #phone
// * telecom[=].value = "tel:+41.32.234.55.66"
// * telecom[=].use = #work
// * telecom[+].system = #fax
// * telecom[=].value = "fax:+41.32.234.55.67"
// * telecom[=].use = #work
// * telecom[+].system = #email
// * telecom[=].value = "mailto:bereit@gruppenpraxis.ch"
// * telecom[=].use = #work
// * telecom[+].system = #url
// * telecom[=].value = "http://www.gruppenpraxis.ch"
// * telecom[=].use = #work
// * address.line = "Doktorgasse 2"
// * address.city = "Musterhausen"
// * address.state = "ZH"
// * address.postalCode = "8888"
// * address.country = "CH"

---

// File: input/fsh/instances/medicationadministration/3-2-MedAdminFentanyl.fsh

Instance: 3-2-MedAdminFentanyl
InstanceOf: CHCoreMedicationAdministration
Title: "Medication Administration Fentanyl"
Description: "Example for MedicationAdministration"
Usage: #example
* contained = Fentanyl
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:8ef0d745-e218-4636-abac-ea842ca6a421"
* status = #completed
* medicationReference.reference = "#Fentanyl"
* subject = Reference(ElisabethBroennimannByBFH)
* effectiveDateTime = "2020-02-03T14:32:00+01:00"
* performer.actor = Reference(HPWengerRole)
* reasonCode.text = "Schmerzbehandlung"
* dosage.route = urn:oid:0.4.0.127.0.16.1.1.2.1#20045000 "Intravenous use"
* dosage.route.text = "intravenöse Anwendung"
* dosage.dose = 1 http://snomed.info/sct#732978007 "Ampule (unit of presentation)"


Instance: Fentanyl
InstanceOf: CHCoreMedication
Usage: #inline
* code = urn:oid:2.51.1.1#7680539870027 "FENTANYL Sintetica Inj Lös 0.5 mg/10ml" // = 0.05 mg/ml
* code.text = "FENTANYL Sintetica Inj Lös 0.5 mg/10ml"
* form = urn:oid:0.4.0.127.0.16.1.1.2.1#11201000 "Solution for injection"
* form.text = "Injektionslösung"
* amount.numerator = 10 http://snomed.info/sct#732978007 "Ampule (unit of presentation)"
* amount.denominator = 1 http://snomed.info/sct#1681000175101 "Package - unit of product usage (qualifier value)"
* ingredient.itemCodeableConcept = $sct#373492002 "Fentanyl (substance)"
* ingredient.itemCodeableConcept.text = "Fentanyl"
* ingredient.strength.numerator = 0.5 'mg' "milligram"
* ingredient.strength.denominator = 10 'mL' "milligram"


---

// File: input/fsh/instances/medicationdispense/2-4-MedDispBeloczok.fsh

Instance: 2-4-MedDispBeloczok
InstanceOf: CHCoreMedicationDispense
Title: "1-2 Medication Dispense with Medication Beloc Zok"
Description: "Example for MedicationDispense (two dosage elements)"
Usage: #example
* contained = Beloczok
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:d8143fea-4778-11e6-beb8-9e71128cae77"
* status = #completed
* medicationReference.reference = "#Beloczok"
* subject.reference = "Patient/ElisabethBroennimannByBFH"
* quantity = 1 http://snomed.info/sct#1681000175101 "Package - unit of product usage (qualifier value)"
* performer.actor.reference = "PractitionerRole/HPWengerRole"
* whenHandedOver = "2012-02-04T14:00:00+01:00"
* dosageInstruction[0].sequence = 1
* dosageInstruction[=].patientInstruction = "-"
* dosageInstruction[=].timing.repeat.boundsPeriod.start = "2012-02-04"
* dosageInstruction[=].timing.repeat.when = #MORN
* dosageInstruction[=].route = urn:oid:0.4.0.127.0.16.1.1.2.1#20053000 "Oral use"
* dosageInstruction[=].route.text = "zum Einnehmen"
* dosageInstruction[=].doseAndRate.doseQuantity = 1 http://snomed.info/sct#732936001 "Tablet (unit of presentation)"
* dosageInstruction[+].sequence = 2
* dosageInstruction[=].timing.repeat.when = #EVE
* dosageInstruction[=].doseAndRate.doseQuantity = 0.5 http://snomed.info/sct#732936001 "Tablet (unit of presentation)"
* substitution.wasSubstituted = true
* substitution.type = http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution#E "equivalent"


Instance: Beloczok
InstanceOf: CHCoreMedication
Usage: #inline
* code = urn:oid:2.51.1.1#7680521101306 "BELOC ZOK Ret Tabl 50 mg 30 Stk"
* code.text = "BELOC ZOK Ret Tabl 50 mg"
* form = urn:oid:0.4.0.127.0.16.1.1.2.1#10219000 "Tablet"
* form.text = "Tablette"
* amount.numerator = 20 http://snomed.info/sct#732936001 "Tablet (unit of presentation)"
* amount.denominator = 1 http://snomed.info/sct#1681000175101 "Package - unit of product usage (qualifier value)"
* ingredient.itemCodeableConcept = $sct#372826007 "Metoprolol (substance)"
* ingredient.itemCodeableConcept.text = "Metoprolol"
* ingredient.strength.numerator = 50 'mg' "milligram"
* ingredient.strength.denominator = 1 http://snomed.info/sct#732936001 "Tablet (unit of presentation)"


---

// File: input/fsh/instances/medicationrequest/2-6-MedReqNorvasc.fsh

Instance: 2-6-MedReqNorvasc
InstanceOf: CHCoreMedicationRequest
Title: "2-6 Medication Request with Medication Norvasc"
Description: "Example for MedicationRequest (with substitution)"
Usage: #example
* contained = Norvasc
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:d41d72ba-2100-11e6-b67b-9e71128cae77"
* status = #active
* intent = #order
* medicationReference.reference = "#Norvasc"
* subject.reference = "Patient/ElisabethBroennimannByBFH"
* authoredOn = "2012-02-04T14:00:00+01:00"
* requester.reference = "PractitionerRole/HPWengerRole"
* reasonCode.text = "Behandlungsgrund"
* dosageInstruction.patientInstruction = "Instruktion für die Patientin"
* dosageInstruction.timing.repeat.boundsPeriod.start = "2012-02-04"
* dosageInstruction.timing.repeat.when[0] = #MORN
* dosageInstruction.timing.repeat.when[+] = #EVE
* dosageInstruction.route = urn:oid:0.4.0.127.0.16.1.1.2.1#20053000 "Oral use"
* dosageInstruction.route.text = "zum Einnehmen"
* dosageInstruction.doseAndRate.doseQuantity = 1 http://snomed.info/sct#732936001 "Tablet (unit of presentation)"
* dispenseRequest.validityPeriod.start = "2012-02-04"
* dispenseRequest.validityPeriod.end = "2012-05-03"
* substitution.allowedCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution#E "equivalent"


Instance: Norvasc
InstanceOf: CHCoreMedication
Usage: #inline
* code = urn:oid:2.51.1.1#7680500440334 "NORVASC Tabl 10 mg"
* code.text = "NORVASC Tabl 10 mg"
* form = urn:oid:0.4.0.127.0.16.1.1.2.1#10219000 "Tablet"
* form.text = "Tablette"
* amount.numerator = 20 http://snomed.info/sct#732936001 "Tablet (unit of presentation)"
* amount.denominator = 1 http://snomed.info/sct#1681000175101 "Package - unit of product usage (qualifier value)"
* ingredient.itemCodeableConcept = $sct#386864001 "Amlodipine (substance)"
* ingredient.itemCodeableConcept.text = "Amlodipine"
* ingredient.strength.numerator = 10 'mg' "milligram"
* ingredient.strength.denominator = 1 http://snomed.info/sct#732936001 "Tablet (unit of presentation)"


---

// File: input/fsh/instances/medicationstatement/1-1-MedStatTriatec.fsh

Instance: 1-1-MedStatTriatec
InstanceOf: CHCoreMedicationStatement
Title: "1-1 Medication Statement with Medication Triatec"
Description: "Example for MedicationStatement (one dosage element)"
Usage: #example
* contained = Triatec
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:c9f758a1-296c-4710-84d4-e181db8c7478"
* status = #active
* medicationReference.reference = "#Triatec"
* subject.reference = "Patient/ElisabethBroennimannByBFH"
* dateAsserted = "2011-11-29T11:00:00+01:00"
* informationSource.reference = "PractitionerRole/HPWengerRole"
* reasonCode.text = "Bluthochdruck"
* dosage.patientInstruction = "-"
* dosage.timing.repeat.boundsPeriod.start = "2011-11-29"
* dosage.timing.repeat.when = #MORN
* dosage.route = urn:oid:0.4.0.127.0.16.1.1.2.1#20053000 "Oral use"
* dosage.route.text = "zum Einnehmen"
* dosage.doseAndRate.doseQuantity = 0.5 http://snomed.info/sct#732936001 "Tablet (unit of presentation)"


Instance: Triatec
InstanceOf: CHCoreMedication
Usage: #inline
* code = urn:oid:2.51.1.1#7680538751228 "TRIATEC Tabl 2.5 mg 20 Stk"
* code.text = "TRIATEC Tabl 2.5 mg"
* form = urn:oid:0.4.0.127.0.16.1.1.2.1#10219000 "Tablet"
* form.text = "Tablette"
* amount.numerator = 20 http://snomed.info/sct#732936001 "Tablet (unit of presentation)"
* amount.denominator = 1 http://snomed.info/sct#1681000175101 "Package - unit of product usage (qualifier value)"
* ingredient.itemCodeableConcept = $sct#386872004 "Ramipril (substance)"
* ingredient.itemCodeableConcept.text = "Ramipril"
* ingredient.strength.numerator = 2.5 'mg' "milligram"
* ingredient.strength.denominator = 1 http://snomed.info/sct#732936001 "Tablet (unit of presentation)"


---

// File: input/fsh/instances/organization/GruppenpraxisCH.fsh

Instance: GruppenpraxisCH
InstanceOf: CHCoreOrganizationEPR
Usage: #example
Title: "Gruppenpraxis CH"
Description: "Organization EPR with GLN, different contact details (e.g. phone, email) and address"
* id = "GruppenpraxisCH"
* meta.profile[0] = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-organization"
* meta.profile[+] = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-organization-epr"
* identifier.system = "urn:oid:2.51.1.3"
* identifier.value = "7601000201041"
* name = "Gruppenpraxis CH"
* telecom[phone][0].system = #phone
* telecom[phone][=].value = "+41322345566"
* telecom[phone][=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "+41322346677"
* telecom[=].use = #work
* telecom[email][+].system = #email
* telecom[email].value = "bereit@gruppenpraxis.ch"
* telecom[email].use = #work
* telecom[internet][+].system = #url
* telecom[internet][=].value = "http://www.gruppenpraxis.ch"
* telecom[internet][=].use = #work
* address.use = #work
* address.line[0] = "Doktorgasse"
* address.line[+] = "2"
* address.city = "Musterhausen"
* address.postalCode = "8888"
* address.country = "CH"

---

// File: input/fsh/instances/organization/PhysiotherapieCH.fsh

Instance: PhysiotherapieCH
InstanceOf: CHCoreOrganizationEPR
Usage: #example
Title: "Physiotherapie CH"
Description: "Organization with GLN (ending on 0), UIDB, BER"
* meta.profile[0] = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-organization"
* meta.profile[+] = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-organization-epr"
* identifier[GLN].system = "urn:oid:2.51.1.3"
* identifier[GLN].value = "7601002331470"
* identifier[UIDB].system = "urn:oid:2.16.756.5.35"
* identifier[UIDB].value = "CHE109322551"
* identifier[BER].system = "urn:oid:2.16.756.5.45"
* identifier[BER].value = "A62088168"
* name = "Physiotherapie CH"

---

// File: input/fsh/instances/organization/Radiologieinstitut.fsh

Instance: Radiologieinstitut
InstanceOf: CHCoreOrganizationEPR
Usage: #example
Title: "Radiologieinstitut"
Description: "Organization EPR with specified healthcare facility type (Diagnostic institution)"
* meta.profile[0] = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-organization"
* meta.profile[+] = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-organization-epr"
* identifier.system = "urn:oid:2.51.1.3"
* identifier.value = "7601000618627"
* type = $sct#722171005 "Diagnostic institution"
* name = "RoDiag Radiologieinstitut"
* address.use = #work
* address.line[0] = "Röntgenstr."
* address.line[+] = "1"
* address.city = "Musterhausen"
* address.postalCode = "8888"
* address.country = "CH"

---

// File: input/fsh/instances/organization/sanitas.fsh

Instance: sanitas
InstanceOf: CHCoreOrganization
Usage: #inline
* name = "Sanitas"

---

// File: input/fsh/instances/organization/SpitalSeeblick.fsh

Instance: SpitalSeeblick
InstanceOf: CHCoreOrganizationEPR
Usage: #example
Title: "Spital Seeblick"
Description: "Organization with specified healthcare facility type (Hospital)"
* meta.profile[0] = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-organization"
* meta.profile[+] = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-organization-epr"
* identifier.system = "urn:oid:2.51.1.3"
* identifier.value = "7601000618306"
* type = $sct#22232009 "Hospital"
* name = "Spital Seeblick"
* telecom.system = #phone
* telecom.value = "032 863 12 01"
* address.line = "Ausblick 11"
* address.city = "Zürich"
* address.postalCode = "8000"

---

// File: input/fsh/instances/patient/ElisabethBroennimannByBFH.fsh

Instance: ElisabethBroennimannByBFH
InstanceOf: CHCorePatient
Usage: #example
Title: "Elisabeth Broennimann by BFH"
Description: "Patient with insurance card number as identifier, contact details, marital status (eCH & FHIR) and reference to the general practitioner (GP)"
* meta.source = "https://www.ti.bfh.ch/de/bachelor/medizininformatik.html"
* identifier.system = "urn:oid:2.16.756.5.30.1.123.100.1.1.1"
* identifier.value = "80756015090002647590"
* name.family = "Brönnimann-Bertholet"
* name.given = "Elisabeth"
* telecom[0].system = #phone
* telecom[=].value = "+41 32 321 61 11"
* telecom[=].use = #home
* telecom[+].system = #email
* telecom[=].value = "elisabeth@broennimann.today"
* gender = #female
* birthDate = "1937-05-03"
// [0] ch-addr-2 correct
* address[0].use = #home
* address[=].line = "Kreuzweg 11"
* address[=].city = "Biel/Bienne"
* address[=].postalCode = "2500"
* address[=].state = "BE"
* address[=].country = "Schweiz"
* address[=].country.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-SC-coding"
* address[=].country.extension.valueCoding = urn:iso:std:iso:3166#CH
/* test cases for invariant ch-addr-2 
// [1] ch-addr-2 correct
* address[+].use = #home
* address[=].line = "Kreuzweg 11"
* address[=].city = "Biel/Bienne"
* address[=].postalCode = "2500"
* address[=].state = "BE"
* address[=].country = "Schweiz"
* address[=].country.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-SC-coding"
* address[=].country.extension.valueCoding = urn:iso:std:iso:3166#CHE
// [2] ch-addr-2 correct
* address[+].use = #home
* address[=].line = "Kreuzweg 11"
* address[=].city = "Biel/Bienne"
* address[=].postalCode = "2500"
* address[=].state = "BE"
* address[=].country = "Schweiz"
// [3] ch-addr-2 correct
* address[+].use = #home
* address[=].line = "Kreuzweg 11"
* address[=].city = "Biel/Bienne"
* address[=].postalCode = "2500"
* address[=].state = "BE"
* address[=].country = "Schweiz"
* address[=].country.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-SC-coding"
* address[=].country.extension.valueCoding = urn:iso:std:iso:3166#DE
// [4] ch-addr-2 incorrect
* address[+].use = #home
* address[=].line = "Kreuzweg 11"
* address[=].city = "Biel/Bienne"
* address[=].postalCode = "2500"
* address[=].state = "Bern"
* address[=].country = "Schweiz"
* address[=].country.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-SC-coding"
* address[=].country.extension.valueCoding = urn:iso:std:iso:3166#CH
// [5] ch-addr-2correct
* address[+].use = #home
* address[=].line = "Kreuzweg 11"
* address[=].city = "Biel/Bienne"
* address[=].postalCode = "2500"
* address[=].state = "Bern"
* address[=].country = "Schweiz"
* address[=].country.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-SC-coding"
* address[=].country.extension.valueCoding = urn:iso:std:iso:3166#DE
*/
* maritalStatus.coding[0] = $ech-11-maritalstatus#2 "verheiratet"
* maritalStatus.coding[+] = $v3-MaritalStatus#M "married"
* generalPractitioner.reference = "Practitioner/HanspeterWengerByBFH"

---

// File: input/fsh/instances/patient/FranzMuster.fsh

Instance: FranzMuster
InstanceOf: CHCorePatient
Usage: #example
Title: "Franz Muster"
Description: "Patient with place of birth, place of origin (Heimatort), religion, local PID and language of correspondence"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/patient-birthPlace"
* extension[=].valueAddress.city = "Paris"
* extension[=].valueAddress.country = "Frankreich"
* extension[+].url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-patient-ech-11-placeoforigin"
* extension[=].valueAddress.city = "Köniz"
* extension[=].valueAddress.state = "BE"
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/patient-religion"
* extension[=].valueCodeableConcept = $v3-ReligiousAffiliation#1077 "Protestant"
* identifier.type = $v2-0203#MR
* identifier.system = "urn:oid:2.16.756.5.30.999999.1"
* identifier.value = "012/08.111111"
* name.family = "Muster"
* name.given = "Franz"
* gender = #male
* birthDate = "1995-01-27"
* maritalStatus = $ech-11-maritalstatus#6 "in eingetragener Partnerschaft"
* communication.language = urn:ietf:bcp:47#de-CH
* communication.language.text = "Deutsch (Schweiz)"
* communication.preferred = true

---

// File: input/fsh/instances/patient/ManuelaMuster.fsh

Instance: ManuelaMuster
InstanceOf: CHCorePatient
Usage: #example
Title: "Manuela Muster"
Description: "Patient with EPR-SPID ending on 0"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/patient-birthPlace"
* extension[=].valueAddress.city = "Paris"
* extension[=].valueAddress.country = "Frankreich"
* extension[+].url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-patient-ech-11-placeoforigin"
* extension[=].valueAddress.city = "Köniz"
* extension[=].valueAddress.state = "BE"
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/patient-religion"
* extension[=].valueCodeableConcept = $v3-ReligiousAffiliation#1077 "Protestant"
* identifier[EPR-SPID].system = "urn:oid:2.16.756.5.30.1.127.3.10.3"
* identifier[EPR-SPID].value = "761337615317835750"
* name.family = "Muster"
* name.given = "Manuela"
* gender = #female
* birthDate = "1997-02-21"
* maritalStatus = $ech-11-maritalstatus#6 "in eingetragener Partnerschaft"
* communication.language = urn:ietf:bcp:47#de-CH
* communication.language.text = "Deutsch (Schweiz)"
* communication.preferred = true

---

// File: input/fsh/instances/patient/MarvinMuster.fsh

Instance: MarvinMuster
InstanceOf: CHCorePatient
Usage: #example
Title: "Marvin Muster"
Description: "Patient with AHVN13/NAVS13 as identifier"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/patient-birthPlace"
* extension[=].valueAddress.city = "Salzburg"
* extension[=].valueAddress.country = "Österreich"
* extension[+].url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-patient-ech-11-placeoforigin"
* extension[=].valueAddress.city = "Zug"
* extension[=].valueAddress.state = "ZG"
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/patient-religion"
* extension[=].valueCodeableConcept = $v3-ReligiousAffiliation#1036 "Orthodox"
* identifier.system = "urn:oid:2.16.756.5.32"
* identifier.value = "7562295883070"
* name.family = "Muster"
* name.given = "Marvin"
* gender = #male
* birthDate = "1997-01-26"
* maritalStatus = $ech-11-maritalstatus#6 "in eingetragener Partnerschaft"
* communication.language = urn:ietf:bcp:47#de-CH
* communication.language.text = "Deutsch (Schweiz)"
* communication.preferred = true

---

// File: input/fsh/instances/patient/MaxMuster.fsh

Instance: MaxMuster
InstanceOf: CHCorePatientEPR
Usage: #example
Title: "Max Muster"
Description: "Patient EPR with eCH-0011 family & and given name, eCH-0046 contact points and reference to the organization that is the custodian of the patient record"
* id = "MaxMuster"
* meta.profile[0] = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-patient"
* meta.profile[+] = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-patient-epr"
* language = #de-CH
* identifier.type = $v2-0203#MR
* identifier.system = "urn:oid:2.16.756.888888.3.1"
* identifier.value = "8733"
* name.use = #official
* name.family.extension.url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-11-name"
* name.family.extension.valueCode = #officialName
* name.family = "Muster"
* name.given = "Max"
* name.given.extension.url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-11-firstname"
* name.given.extension.valueCode = #officialFirstName

* telecom[phone][0].system = #phone
* telecom[phone][=].value = "+41326851234"
* telecom[phone][=].use.extension.url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-46-phonecategory"
* telecom[phone][=].use.extension.valueCodeableConcept = $ech-46-phonecategory#1 "private Telefonnummer"
* telecom[phone][=].use = #home

* telecom[phone][+].system = #phone
* telecom[phone][=].value = "079 333 22 11"
* telecom[phone][=].use.extension.url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-46-phonecategory"
* telecom[phone][=].use.extension.valueCodeableConcept = $ech-46-phonecategory#2 "private Mobil-Nummer"
* telecom[phone][=].use = #mobile

* telecom[phone][+].system = #phone
* telecom[phone][=].value = "+41321237788"
* telecom[phone][=].use.extension.url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-46-phonecategory"
* telecom[phone][=].use.extension.valueCodeableConcept = $ech-46-phonecategory#6 "geschäftliche Nummer (Durchwahl)"
* telecom[phone][=].use = #work

* telecom[email][+].system = #email
* telecom[email][=].value = "max.muster@example.com"
* telecom[email][=].use.extension.url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-46-emailcategory"
* telecom[email][=].use.extension.valueCodeableConcept = $ech-46-emailcategory#1 "private Email-Adresse"
* telecom[email][=].use = #home

* telecom[internet][+].system = #url
* telecom[internet][=].value = "http://example.com"
* telecom[internet][=].use.extension.url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-46-internetcategory"
* telecom[internet][=].use.extension.valueCodeableConcept = $ech-46-internetcategory#2 "geschäftliche Internet-Adresse"
* telecom[internet][=].use = #work

* telecom[+].system = #sms
* telecom[=].value = "079 333 22 11"

* gender = #male
* birthDate = "1938-12-12"
* address.use = #home
* address.line[0] = "Leidensweg"
* address.line[+] = "10"
* address.city = "Specimendorf"
* address.postalCode = "9999"
* address.country = "CH"
* managingOrganization = Reference(GruppenpraxisCH)

---

// File: input/fsh/instances/patient/PersonEch011.fsh

Instance: PersonEch011
InstanceOf: CHCorePatient
Usage: #example
Title: "Person eCH-011"
Description: "Patient eCH-011 with names, marital status and separation type, delivery address if it is not the address of the patient (detailed explanation in narrative)"
* text.status = #additional
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"de-CH\" lang=\"de-CH\"><div>Example according to eCH-011</div>\r\n\r\n            3.3.2 nameData – Namensangaben\r\n            <ul><li>Amtlicher Name (zwingend) – officialName, siehe Kapitel 3.3.2.1</li><li>Amtliche Vornamen (zwingend) – firstName, siehe Kapitel 3.3.2.2</li><li>Ledigname (optional) – originalName, siehe Kapitel 3.3.2.3</li><li>Allianzname (optional) – allianceName, siehe Kapitel 3.3.2.4</li><li>Aliasname (optional) – aliasName, siehe Kapitel 3.3.2.5</li><li>Andere amtliche Name (optional) – otherName, siehe Kapitel 3.3.2.6</li><li>Rufname (optional) – callName, siehe Kapitel 3.3.2.7</li><li>entweder\r\n                    <ul><li>Name im ausländischen Pass (optional) - nameOnForeignPassport, siehe Kapitel 3.3.2.8 oder</li><li>Name gemäss Deklaration (optional) – declaredForeignName, siehe Kapitel 3.3.2.9</li></ul></li></ul>\r\n            \r\n            3.3.5 maritalData - Zivilstandsangaben\r\n            <ul><li>Zivilstand in eingetragener Partnerschaft (married), aber freiwillig getrennt lebend</li></ul>\r\n\r\n            3.3.8 contactData – Kontaktangaben   \r\n            <ul><li>Zusätzlich Beispiel für Zustelladresse, falls es nicht die Adresse des Patienten direkt ist, mit Angaben von eCH-0010</li></ul></div>"
* language = #de-CH

* name[0].use = #official
// Amtlicher Name (zwingend) – officialName, siehe Kapitel 3.3.2.1, Extension is optional, but when used the use attribute value must be offical
* name[=].family.extension.url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-11-name"
* name[=].family.extension.valueCode = #officialName
* name[=].family = "Amtlicher Name"
// Amtliche Vornamen (zwingend) – firstName, siehe Kapitel 3.3.2.2
* name[=].given = "Amtliche Vornamen (zwingend)"
* name[=].given.extension.url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-11-firstname"
* name[=].given.extension.valueCode = #officialFirstName

// Allianzname (optional) – allianceName, siehe Kapitel 3.3.2.4
* name[+].family.extension.url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-11-name"
* name[=].family.extension.valueCode = #allianceName
* name[=].family = "Allianzname"

// Ledigname (optional) – originalName, siehe Kapitel 3.3.2.3
* name[+].use = #maiden
* name[=].family.extension.url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-11-name"
* name[=].family.extension.valueCode = #originalName
* name[=].family = "Ledigname (optional) – originalName"

* name[+].family.extension.url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-11-name"
* name[=].family.extension.valueCode = #aliasName
* name[=].family = "Alias name"

* gender = #female
* birthDate = "1982-03-20"
* maritalStatus.extension.url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-11-maritaldata-separation"
* maritalStatus.extension.valueCodeableConcept = $ech-11-maritaldata-separation#1 "Freiwillig getrennt"
* maritalStatus.coding[0] = $v3-MaritalStatus#M
* maritalStatus.coding[+] = $ech-11-maritalstatus#6 "in eingetragener Partnerschaft"
* contact.relationship = $ech-11#contactData
* contact.name.family = "Dalkiliç"
* contact.name.given = "Fabio Nicola"
* contact.address.line[0] = "addressLine1 sollte für personifizierte Adressangaben verwendet werden (z.B. c/o- Adresse)."
* contact.address.line[+] = "addressLine2 solle für unpersonifizierte Adressangaben verwendet werden (z.B. Zu- satzangaben zur Lokalisation, z.B. Chalet Edelweiss)."
* contact.address.line[+] = "Strassenbezeichnungen in Postadressen. Es kann sich dabei auch um den Namen einer Lokalität, eines Weilers etc. handeln. No. 10 Wohung 5"
* contact.address.line[+] = "Postfach"
* contact.address.line[0].extension.url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-10-linetype"
* contact.address.line[=].extension.valueCode = #addressLine1
* contact.address.line[+].extension.url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-10-linetype"
* contact.address.line[=].extension.valueCode = #addressLine2
* contact.address.line[+].extension[0].url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-10-linetype"
* contact.address.line[=].extension[=].valueCode = #street
* contact.address.line[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* contact.address.line[=].extension[=].valueString = "Strassenbezeichnug"
* contact.address.line[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* contact.address.line[=].extension[=].valueString = "10"
* contact.address.line[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-unitID"
* contact.address.line[=].extension[=].valueString = "5"
* contact.address.line[+].extension[0].url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-10-linetype"
* contact.address.line[=].extension[=].valueCode = #postOfficeBoxText
* contact.address.line[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox"
* contact.address.line[=].extension[=].valueString = "12345678"
* contact.address.city = "Ort"
* contact.address.postalCode = "PLZ"
* contact.address.country.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-SC-coding"
* contact.address.country.extension.valueCoding = urn:iso:std:iso:3166#CH
* contact.address.country = "Schweiz"
// Zustelladresse falls es nicht die Adresse des Patienten direkt ist

---

// File: input/fsh/instances/patient/UpiEprTestKrcmarevic.fsh

Instance: UpiEprTestKrcmarevic
InstanceOf: CHCorePatient
Usage: #example
Title: "UPI EPR Test Krcmarevic"
Description: "Test Patient from UPI for Swiss EPR Projectathon"
* text.status = #additional
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div><ul><li><b>EPR-SPID</b>: 7560521127080</li><li><b>Date of Birth</b>: 20.03.1982</li><li><b>First Name</b>: Claude-Hélène Marguerite</li><li><b>Official Name</b>: Krcmarevic</li><li><b>Original Name</b>: Scheuble</li><li><b>Sex</b>: 2 (Needs transformation to HL7 ValueSet, see <a href=\"https://fhir.ch/ig/ch-term/ConceptMap-sex-ech11-to-fhir.html\">ConceptMap Sex eCH-011 to FHIR mapping</a>)</li><li><b>Mother</b></li><ul><li><b>First Name</b>: Hui Xue</li><li><b>Last Name</b>: Dalkiliç</li></ul><li><b>Father</b></li><ul><li><b>First Name</b>: Fabio Nicola</li><li><b>Last Name</b>: Dalkiliç</li></ul><li><b>Nationality</b>: Switzerland (8100)</li><li><b>Country of Birth</b>: Switzerland (8100)</li><li><b>Place of Birth</b>: Zürich (261)</li></ul></div><div>\r\n                Base test data for Projectathon from UPI, see <a href=\"https://docs.google.com/spreadsheets/d/1yWPhTI7DDgYDMXPVFGRmdb50c8TuUnQp9fECM3iGTBo/edit#gid=0\">Google Doc for more examples.</a></div></div>"

* extension[citizenship].extension.url = "code"
* extension[citizenship].extension.valueCodeableConcept = urn:iso:std:iso:3166#CH "Switzerland"
* extension[citizenship].url = "http://hl7.org/fhir/StructureDefinition/patient-citizenship"

* extension[placeOfBirth].url = "http://hl7.org/fhir/StructureDefinition/patient-birthPlace"
* extension[placeOfBirth].valueAddress.city.extension[bfs].url = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-7-municipalityid"
* extension[placeOfBirth].valueAddress.city.extension[bfs].valueString = "261"
* extension[placeOfBirth].valueAddress.city = "Zürich"
* extension[placeOfBirth].valueAddress.country.extension[countrycode].url = "http://hl7.org/fhir/StructureDefinition/iso21090-SC-coding"
* extension[placeOfBirth].valueAddress.country.extension[countrycode].valueCoding = urn:iso:std:iso:3166#CH
* extension[placeOfBirth].valueAddress.country = "Switzerland"

* identifier[EPR-SPID].system = "urn:oid:2.16.756.5.30.1.127.3.10.3"
* identifier[EPR-SPID].value = "761337611234567897"

* name[0].use = #official
* name[=].family = "Krcmarevic"
* name[=].given = "Claude-Hélène Marguerite"
* name[+].use = #maiden
* name[=].family = "Scheuble"
* gender = #female
* birthDate = "1982-03-20"

* contact[nameOfParent][0].relationship = $v3-RoleCode#PRN "parent"
* contact[nameOfParent][=].name.family = "Dalkiliç"
* contact[nameOfParent][=].name.given = "Hui Xue"
* contact[nameOfParent][+].relationship = $v3-RoleCode#PRN "parent"
* contact[nameOfParent][=].name.family = "Dalkiliç"
* contact[nameOfParent][=].name.given = "Fabio Nicola"


---

// File: input/fsh/instances/practitioner/AgparMarc.fsh

Instance: AgparMarc
InstanceOf: CHCorePractitioner
Usage: #example
Title: "Agpar Marc"
Description: "Practitioner with GLN and name"
* identifier.system = "urn:oid:2.51.1.3"
* identifier.value = "7610000050719"
* name.family = "Agpar"
* name.given = "Marc"

---

// File: input/fsh/instances/practitioner/AllzeitBereit.fsh

Instance: AllzeitBereit
InstanceOf: CHCorePractitionerEPR
Usage: #example
Title: "Allzeit Bereit"
Description: "Practitioner EPR with name with prefixes (salutation, academic title, legal status) and suffix (‘Facharzt für Allgemeine Medizin’)"
* id = "AllzeitBereit"
* meta.profile[0] = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-practitioner"
* meta.profile[+] = "http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-practitioner-epr"
* identifier[GLN].system = "urn:oid:2.51.1.3"
* identifier[GLN].value = "7601000201041"
* name.use = #official
* name.family = "Bereit"
* name.given = "Allzeit"
* name.prefix[0] = "Herr"
* name.prefix[+] = "Dr. med."
* name.prefix[+] = "Allg. Gruppenpraxis AG"
* name.prefix[1].extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier"
* name.prefix[=].extension.valueCode = #AC
* name.prefix[+].extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier"
* name.prefix[=].extension.valueCode = #LS
* name.suffix = "Facharzt für Allgemeine Medizin"

---

// File: input/fsh/instances/practitioner/HanspeterWengerByBFH.fsh

Instance: HanspeterWengerByBFH
InstanceOf: CHCorePractitioner
Usage: #example
Title: "Hanspeter Wenger by BFH"
Description: "Practitioner with GLN and ZSR, name with prefixes, gender and birth date"
* meta.source = "https://www.ti.bfh.ch/de/bachelor/medizininformatik.html"
* identifier[GLN].system = "urn:oid:2.51.1.3"
* identifier[GLN].value = "7601000050717"
* identifier[ZSR].system = "urn:oid:2.16.756.5.30.1.123.100.2.1.1"
* identifier[ZSR].value = "Q123456"
* name.family = "Wenger"
* name.given = "Hanspeter"
* name.prefix[0] = "Herr"
* name.prefix[+] = "Dr. med."
* name.prefix[=].extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier"
* name.prefix[=].extension.valueCode = #AC
* gender = #male
* birthDate = "1965-12-13"

---

// File: input/fsh/instances/practitioner/SchreibKraft.fsh

Instance: SchreibKraft
InstanceOf: CHCorePractitioner
Usage: #example
Title: "Schreib Kraft"
Description: "Practitioner (physician assistants) with local identifier (neither GLN nor ZSR)"
* id = "SchreibKraft"
* identifier.system = "urn:oid:2.999.1.2.3.4"
* identifier.value = "0812763"
// local identifier
* name.use = #official
* name.family = "Kraft"
* name.given = "Schreib"

---

// File: input/fsh/instances/practitionerrole/HPWengerRole.fsh

Instance: HPWengerRole
InstanceOf: CHCorePractitionerRoleEpr
Usage: #example
Title: "Hanspeter Wenger @ Spital Seeblick"
Description: "PractitionerRole EPR with profession (role) and specialisation"
* practitioner.reference = "Practitioner/HanspeterWengerByBFH"
* organization.reference = "Organization/SpitalSeeblick"
* code = $sct#309343006 "Physician"
* specialty = urn:oid:2.16.756.5.30.1.127.3.5#1040 "General medical practitioner"

---

// File: input/fsh/instances/practitionerrole/SchreibKraftAtGruppenpraxisCH.fsh

Instance: SchreibKraftAtGruppenpraxisCH
InstanceOf: CHCorePractitionerRole
Usage: #example
Title: "Schreib Kraft @ Gruppenpraxis CH"
Description: "PractitionerRole with referenced practitioner and organization"
* id = "SchreibKraftAtGruppenpraxisCH"
* practitioner.reference = "Practitioner/SchreibKraft"
* organization.reference = "Organization/GruppenpraxisCH"

---

// File: input/fsh/instances/servicerequest/LabOrder.fsh

Instance: LabOrder
InstanceOf: ServiceRequest
Usage: #example
Title: "Laboratory Order"
Description: "Example for ServiceRequest"
* status = #active
* intent = #order
* priority = #routine
* category = $cs-servicerequest-category#RequestForLabExam "Anforderung von Laboruntersuchungen"
* code = $loinc#2164-2 "Creatinine renal clearance in 24 hour Urine and Serum or Plasma"
* subject = Reference(Patient/ElisabethBroennimannByBFH)
* requester = Reference(PractitionerRole/HPWengerRole)
* insurance = Reference(Coverage/CoverageBroennimann)


---

// File: input/fsh/invariants/ahvn13-digit-check.fsh

Invariant: ahvn13-digit-check
Description: "AHVN13 / NAVS13 must pass digit check - https://www.gs1.org/services/how-calculate-check-digit-manually"
Severity: #warning
Expression: "(((10-(28+(substring(3,1).toInteger()*3)+(substring(4,1).toInteger()*1)+(substring(5,1).toInteger()*3)+(substring(6,1).toInteger()*1)+(substring(7,1).toInteger()*3)+(substring(8,1).toInteger()*1)+(substring(9,1).toInteger()*3)+(substring(10,1).toInteger()*1)+(substring(11,1).toInteger()*3))mod(10))mod(10))=substring(12,1).toInteger())"

---

// File: input/fsh/invariants/ahvn13-length.fsh

Invariant: ahvn13-length
Description: "AHVN13 / NAVS13 must be exactly 13 characters long"
Severity: #warning
Expression: "matches('^[0-9]{13}$')"

---

// File: input/fsh/invariants/ahvn13-startswith756.fsh

Invariant: ahvn13-startswith756
Description: "AHVN13 / NAVS13 must start with 756"
Severity: #warning
Expression: "startsWith('756')"

---

// File: input/fsh/invariants/ber.fsh

Invariant: ber-length
Description: "BER must start with a letter followed by 8 digits"
Severity: #warning
Expression: "matches('^[A-Z][0-9]{8}$')"

Invariant: ber-modulus-11
Description: "BER must pass the modulus 11 check"
Severity: #warning
Expression: "11-((substring(1,1).toInteger()*5)+(substring(2,1).toInteger()*4)+(substring(3,1).toInteger()*3)+(substring(4,1).toInteger()*2)+(substring(5,1).toInteger()*7)+(substring(6,1).toInteger()*6)+(substring(7,1).toInteger()*5))mod(11)=substring(8,1).toInteger()"

---

// File: input/fsh/invariants/ch-addr.fsh

Invariant: ch-addr-1
Description: "ISO Country Alpha-2 or ISO Country Alpha-3 code"
Severity: #error
Expression: "((value.code.length()=2) and value.code.memberOf('http://hl7.org/fhir/ValueSet/iso3166-1-2')) or ((value.code.length() = 3) and value.code.memberOf('http://hl7.org/fhir/ValueSet/iso3166-1-3'))"


Invariant: ch-addr-2
Description: "For a Swiss address, a canton abbreviation from the value set 'eCH-0007 Canton Abbreviation' must be used."
Severity: #error
Expression: "country.extension.where(url = 'http://hl7.org/fhir/StructureDefinition/iso21090-SC-coding').empty() or 
            (country.extension.where(url = 'http://hl7.org/fhir/StructureDefinition/iso21090-SC-coding').value.code.startsWith('CH') = false) or 
            (country.extension.where(url = 'http://hl7.org/fhir/StructureDefinition/iso21090-SC-coding').value.code.startsWith('CH').exists() and 
             (state.empty() or state.memberOf('http://fhir.ch/ig/ch-core/ValueSet/ech-7-cantonabbreviation')))"


---

// File: input/fsh/invariants/ch-core-doc.fsh

Invariant: ch-core-doc-1
Description: "The fullUrl must be an absolute URL server address or an UUID"
Severity: #error
Expression: "startsWith('http') or startsWith('urn:uuid:') = true"


Invariant: ch-core-doc-2
Description: "The identifier must be an UUID"
Severity: #error
Expression: "startsWith('urn:uuid:')"


---

// File: input/fsh/invariants/ch-core-hm-1.fsh

Invariant: ch-core-hm-1
Description: "if officalName with eCH-011 Extension is specified, it can only be put on a name where use attribute is official"
Severity: #error
Expression: "family.extension.where(url='http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-11-name' and value='officialName').empty() or (family.extension.where(url='http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-11-name' and value='officialName').exists() and use='official')"

---

// File: input/fsh/invariants/ch-core-hm-2.fsh

Invariant: ch-core-hm-2
Description: "if orginalName with eCH-011 Extension is specified, it can only be put on a name where use attribute is maiden"
Severity: #error
Expression: "family.extension.where(url='http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-11-name' and value='originalName').empty() or ((family.extension.where(url='http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-11-name' and value='originalName').exists() and use='maiden'))"

---

// File: input/fsh/invariants/ch-core-hm-3.fsh

Invariant: ch-core-hm-3
Description: "ch-ext-ech-11-name can only be put on a family name"
Severity: #error
Expression: "descendants().extension.where(url='http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-11-name').count()=family.extension.where(url='http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-11-name').count()"

---

// File: input/fsh/invariants/ch-core-hm-4.fsh

Invariant: ch-core-hm-4
Description: "ch-ext-ech-11-firstname can only be put on a given name"
Severity: #error
Expression: "descendants().extension.where(url='http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-11-firstname').count()=given.extension.where(url='http://fhir.ch/ig/ch-core/StructureDefinition/ch-ext-ech-11-firstname').count()"

---

// File: input/fsh/invariants/ch-docref-1.fsh

Invariant: ch-docref-1
Description: "The codes from the following ValueSet are 'preferred': http://fhir.ch/ig/ch-term/ValueSet/DocumentEntry.mimeType"
// Binding preferred: Instances are encouraged to draw from the specified codes for interoperability purposes but are not required to do so to be considered conformant.
Severity: #warning
Expression: "memberOf('http://fhir.ch/ig/ch-term/ValueSet/DocumentEntry.mimeType')"

---

// File: input/fsh/invariants/ch-docref-2.fsh

Invariant: ch-docref-2
Description: "The codes from the following ValueSet shall be used if one of them can be applied (aka 'extensible'): http://fhir.ch/ig/ch-term/ValueSet/DocumentEntry.mimeType"
// Binding extensible: codes in this element SHALL be from the specified value set if any of the codes within the value set can apply to the concept being communicated.
Severity: #warning
Expression: "memberOf('http://fhir.ch/ig/ch-term/ValueSet/DocumentEntry.mimeType')"

---

// File: input/fsh/invariants/ch-medication.fsh

Invariant: ch-meddis-1
Description: "If no substitution was performed, no type is expected."
Severity: #warning
Expression: "wasSubstituted = true or (wasSubstituted = false and type.exists().not())"


---

// File: input/fsh/invariants/ch-pat-1_ch-pat-1-epr.fsh

Invariant: ch-pat-1
Description: "If one ore more human names are provided, at least one human name should have a family and a given name."
Severity: #warning
Expression: "name.where(family.exists() and given.exists()).count()>0 or name.empty()"

Invariant: ch-pat-1-epr
Description: "At least one human name shall have a family and a given name."
Severity: #error
Expression: "name.where(family.exists() and given.exists()).count()>0"


---

// File: input/fsh/invariants/ch-pat-2.fsh

Invariant: ch-pat-2
Description: "gender 'unknown' is currently not used in Switzerland in eCH and the EPR"
Severity: #warning
Expression: "gender.empty() or gender!='unknown'"


---

// File: input/fsh/invariants/ch-pat-3.fsh

Invariant: ch-pat-3
Description: "ISO Country Alpha-2 or ISO Country Alpha-3 code"
Severity: #error
Expression: "((extension.where(url='code').value.coding.code.length()=2) and extension.where(url='code').value.coding.code.memberOf('http://hl7.org/fhir/ValueSet/iso3166-1-2')) or ((extension.where(url='code').value.coding.code.length() = 3) and extension.where(url='code').value.coding.code.memberOf('http://hl7.org/fhir/ValueSet/iso3166-1-3'))"

---

// File: input/fsh/invariants/ch-pract-1.fsh

Invariant: ch-pract-1
Description: "If a HumanName is provided, at least one HumanName must have a given and family name."
Severity: #error
Expression: "name.where(family.exists() and given.exists()).count()>0 or name.empty()"

---

// File: input/fsh/invariants/ch-pract-2.fsh

Invariant: ch-pract-2
Description: "gender unknown is currently not used in Switzerland in eCH and the EPR"
Severity: #warning
Expression: "gender.empty() or gender!='unknown'"

---

// File: input/fsh/invariants/epr-spid-length.fsh

Invariant: epr-spid-length
Description: "EPR-SPID must be exactly 18 characters long"
Severity: #warning
Expression: "matches('^[0-9]{18}$')"

---

// File: input/fsh/invariants/epr-spid-modulus-10.fsh

Invariant: epr-spid-modulus-10
Description: "EPR-SPID must pass the modulus 10 check - https://www.gs1.org/services/how-calculate-check-digit-manually"
Severity: #warning
Expression: "(((10-((68+(substring(8,1).toInteger()*3)+(substring(9,1).toInteger()*1)+(substring(10,1).toInteger()*3)+(substring(11,1).toInteger()*1)+(substring(12,1).toInteger()*3)+(substring(13,1).toInteger()*1)+(substring(14,1).toInteger()*3)+(substring(15,1).toInteger()*1)+(substring(16,1).toInteger()*3))mod(10)))mod(10))=substring(17,1).toInteger())"

---

// File: input/fsh/invariants/epr-spid-startswith76133761.fsh

Invariant: epr-spid-startswith76133761
Description: "EPR-SPID must start with 76133761"
Severity: #warning
Expression: "startsWith('76133761')"

---

// File: input/fsh/invariants/gln.fsh

Invariant: gln-length
Description: "GLN must be exactly 13 characters long"
Severity: #warning
Expression: "matches('^[0-9]{13}$')"

Invariant: gln-modulus-10
Description: "GLN must pass the modulus 10 check - https://www.gs1.org/services/how-calculate-check-digit-manually"
Severity: #warning
Expression: "(((10-((substring(0,1).toInteger()*1)+(substring(1,1).toInteger()*3)+(substring(2,1).toInteger()*1)+(substring(3,1).toInteger()*3)+(substring(4,1).toInteger()*1)+(substring(5,1).toInteger()*3)+(substring(6,1).toInteger()*1)+(substring(7,1).toInteger()*3)+(substring(8,1).toInteger()*1)+(substring(9,1).toInteger()*3)+(substring(10,1).toInteger()*1)+(substring(11,1).toInteger()*3))mod(10))mod(10))=substring(12,1).toInteger())"

Invariant: gln-startswith76
Description: "GLN must start with 76 for Swiss HCP"
Severity: #warning
Expression: "startsWith('76')"

---

// File: input/fsh/invariants/uidb.fsh

Invariant: uidb-length
Description: "UIDB must start with 'CHE' followed by 9 digits"
Severity: #warning
Expression: "matches('^CHE[0-9]{9}$')"

Invariant: uidb-modulus-11
Description: "UIDB must pass the modulus 11 check"
Severity: #warning
Expression: "11-((substring(3,1).toInteger()*5)+(substring(4,1).toInteger()*4)+(substring(5,1).toInteger()*3)+(substring(6,1).toInteger()*2)+(substring(7,1).toInteger()*7)+(substring(8,1).toInteger()*6)+(substring(9,1).toInteger()*5)+(substring(10,1).toInteger()*4))mod(11)=substring(11,1).toInteger()"

---

// File: input/fsh/invariants/veka-length.fsh

Invariant: veka-length
Description: "Insurance card number must be exactly 20 characters long"
Severity: #warning
Expression: "matches('^[0-9]{20}$')"

---

// File: input/fsh/invariants/veka-startswith807560.fsh

Invariant: veka-startswith807560
Description: "Insurance card number must start with 807560"
Severity: #warning
Expression: "startsWith('807560')"

---

// File: input/fsh/profiles-datatypes/CHCoreAddress.fsh

Profile: CHCoreAddress
Parent: Address
Id: ch-core-address
Title: "CH Core Address"
Description: "address incorporating eCH-0010 postal address extensions"

* . ^short = "An address expressed using postal conventions (as opposed to GPS or other location definition formats)"
* obeys ch-addr-2
* line.extension ^slicing.discriminator[0].type = #value
* line.extension ^slicing.discriminator[=].path = "url"
* line.extension ^slicing.discriminator[+].type = #value
* line.extension ^slicing.discriminator[=].path = "value"
* line.extension ^slicing.ordered = true
* line.extension ^slicing.rules = #open
* line.extension contains
    ECH0010AddressLineType named addressLine1 0..1 and
    ECH0010AddressLineType named addressLine2 0..1 and
    ECH0010AddressLineType named street 0..1 and
    $iso21090-ADXP-streetName named streetName 0..1 and
    $iso21090-ADXP-houseNumber named houseNumber 0..1 and
    $iso21090-ADXP-unitID named unitID 0..1 and
    ECH0010AddressLineType named postOfficeBoxText 0..1 and
    $iso21090-ADXP-postBox named postOfficeBoxNumber 0..1
* line.extension[addressLine1].valueCode 1..
* line.extension[addressLine1].valueCode only code
* line.extension[addressLine1].valueCode = #addressLine1 (exactly)
* line.extension[addressLine2].valueCode 1..
* line.extension[addressLine2].valueCode only code
* line.extension[addressLine2].valueCode = #addressLine2 (exactly)
* line.extension[street].valueCode 1..
* line.extension[street].valueCode only code
* line.extension[street].valueCode = #street (exactly)
* line.extension[streetName] ^short = "street part of the street line, e.g. withouth housenumber"
* line.extension[houseNumber] ^short = "houseNumber part of the street line"
* line.extension[unitID] ^short = "unitID, dwellingNumber part of the street line"
* line.extension[postOfficeBoxText] ^short = "Postbox addresses need an postbox text and optional postbox number"
* line.extension[postOfficeBoxText].valueCode 1..
* line.extension[postOfficeBoxText].valueCode only code
* line.extension[postOfficeBoxText].valueCode = #postOfficeBoxText (exactly)
* line.extension[postOfficeBoxNumber] ^short = "Optional postOfficeBoxNumber as a separate part of the postOfficeBoxText"
* city.extension ^slicing.discriminator[0].type = #value
* city.extension ^slicing.discriminator[=].path = "url"
* city.extension ^slicing.rules = #open
* city.extension contains 
    ECH007MunicipalityId named bfs 0..1
* state from ECH007CantonFLAbbreviation (example)
* state ^binding.description = "Use these values for a Swiss or Liechtenstein address"
* country.extension ^slicing.discriminator[0].type = #value
* country.extension ^slicing.discriminator[=].path = "url"
* country.extension ^slicing.rules = #open
* country.extension contains 
    $iso21090-SC-coding named countrycode 0..1
* country.extension[countrycode] obeys ch-addr-1
* country.extension[countrycode] ^short = "ISO Country Alpha-2 or ISO Country Alpha-3 code"
* country.extension[countrycode] ^definition = "The content of the country code element (if present) SHALL be selected EITHER from ValueSet ISO Country Alpha-2 http://hl7.org/fhir/ValueSet/iso3166-1-2 OR MAY be selected from ISO Country Alpha-3 Value Set http://hl7.org/fhir/ValueSet/iso3166-1-3, if the country is not specified in value Set ISO Country Alpha-2 http://hl7.org/fhir/ValueSet/iso3166-1-2."




Mapping: eCH-0011-for-CHCoreAddress
Id: eCH-0011
Title: "eCH-0011 Datenstandard Personendaten"
Source: CHCoreAddress
Target: "http://www.ech.ch/standards/39485"
* city.extension[bfs] -> "BFS Number for municipality Switzerland"

Mapping: eCH-for-CHCoreAddress
Id: eCH
Title: "eCH Standards"
Source: CHCoreAddress
Target: "https://www.ech.ch/"
* -> "eCH-0010: addressInformation"
* line.extension[addressLine1] -> "eCH-0010: addressLine1"
* line.extension[addressLine2] -> "eCH-0010: addressLine2"
* line.extension[street] -> "eCH-0010: street"
* line.extension[streetName] -> "eCH-0010: streetName"
* line.extension[houseNumber] -> "eCH-0010: houseNumber"
* line.extension[unitID] -> "eCH-0010: dwellingNumber"
* line.extension[postOfficeBoxText] -> "eCH-0010: postOfficeBoxText"
* line.extension[postOfficeBoxNumber] -> "eCH-0010: postOfficeBoxNumber"
* city -> "eCH-0010: town"
* district -> "eCH-0010: locality"
* state -> "eCH-0010: locality"
* postalCode -> "eCH-0010: swissZipCode, swissZipCodeAddOn, swissZipCodeId, foreignZipCode"
* country -> "eCH-0010: country"

---

// File: input/fsh/profiles-datatypes/CHCoreAddressECH10.fsh

Profile: CHCoreAddressECH10
Parent: CHCoreAddress
Id: ch-core-address-ech-10
Title: "CH Core Postal Address"
Description: "Postal address according to eCH-0010"

* . ^short = "An address expressed using postal conventions (as opposed to GPS or other location definition formats)"
* type 0..1
* type only code
* type = #postal (exactly)
* type ^short = "postal"
* city 1..1 SU
* city only string
* city ^alias = "Municpality"
* postalCode 1..1
* postalCode only string
* postalCode ^short = "Postal code for area"
* postalCode ^definition = "A postal code designating a region defined by the postal service."
* postalCode ^alias = "Zip"
* country 1..1
* country only string
* period 0..0
* period only Period
* period ^short = "Time period when address was/is in use"
* period ^definition = "Time period when address was/is in use."
* period ^requirements = "Allows addresses to be placed in historical context."

Mapping: eCH-for-CHCoreAddressECH10
Id: eCH
Title: "eCH Standards"
Source: CHCoreAddressECH10
Target: "https://www.ech.ch/"
* -> "eCH-0010: addressInformation"
* city -> "eCH-0010: town"
* postalCode -> "eCH-0010: swissZipCode, swissZipCodeAddOn, swissZipCodeId, foreignZipCode"
* country -> "eCH-0010: country"

---

// File: input/fsh/profiles-datatypes/CHCoreAddressEch11PlaceOfBirth.fsh

Profile: CHCoreAddressEch11PlaceOfBirth
Parent: CHCoreAddress
Id: ch-core-address-ech-11-placeofbirth
Title: "Address for Place of Birth"
Description: "PlaceOfBirth for ech-11"

* . ^short = "An address expressed using postal conventions (as opposed to GPS or other location definition formats)"
* use 0..0
* use only code
* use ^short = "home | work | temp | old | billing - purpose of this address"
* use ^definition = "The purpose of this address."
* use ^comment = "Applications can assume that an address is current unless it explicitly says that it is temporary or old."
* use ^requirements = "Allows an appropriate address to be chosen from a list of many."
* type 0..0
* type only code
* type ^short = "postal | physical | both"
* text 0..0
* text only string
* text ^short = "Text representation of the address"
* text ^definition = "Specifies the entire address as it should be displayed e.g. on a postal label. This may be provided instead of or as well as the specific parts."
* text ^comment = "Can provide both a text representation and parts. Applications updating an address SHALL ensure that  when both text and parts are present,  no content is included in the text that isn't found in a part."
* text ^requirements = "A renderable, unencoded form."
* line 0..0
* line only string
* line ^short = "Street name, number, direction & P.O. Box etc."
* line ^definition = "This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information."
* city 0..1 SU
* city only string
* city ^short = "Place of Birth (municipality)"
* city ^definition = "optional if country is not Switzerland"
* city ^alias[0] = "Municpality"
* district 0..0 SU
* district only string
* district ^short = "District name (aka county)"
* district ^definition = "The name of the administrative area (county)."
* district ^comment = "District is sometimes known as county, but in some regions 'county' is used in place of city (municipality), so county name should be conveyed in city instead."
* district ^alias[0] = "County"
* state 0..1 SU
* state only string
* state ^short = "Canton"
* state ^definition = "Canton 2 letter abbreviation"
* state ^alias[0] = "Province"
* state ^alias[+] = "Territory"
* postalCode 0..0
* postalCode only string
* postalCode ^short = "Postal code for area"
* postalCode ^definition = "A postal code designating a region defined by the postal service."
* postalCode ^alias[0] = "Zip"
* country 0..1 SU
* country only string
* country ^short = "Country if place of Birth is not Switzerland"
* country ^definition = "Country if place of Birth is not Switzerland"
* period 0..0
* period only Period
* period ^short = "Time period when address was/is in use"
* period ^definition = "Time period when address was/is in use."
* period ^requirements = "Allows addresses to be placed in historical context."


Mapping: eCH-0011-for-CHCoreAddressEch11PlaceOfBirth
Id: eCH-0011
Title: "eCH-0011 Datenstandard Personendaten"
Source: CHCoreAddressEch11PlaceOfBirth
Target: "http://www.ech.ch/standards/39485"
* -> "3.3.2 placeOfBirth"
* city -> "Place of Birth (BFS-323, BFS-324)"
* city.extension[bfs] -> "placeOfBirth - BFS Number for municipality Switzerland - BFS-323"
* country -> "BFS-322"


---

// File: input/fsh/profiles-datatypes/CHCoreAddressECH11PlaceOfOrigin.fsh

Profile: CHCoreAddressECH11PlaceOfOrigin
Parent: CHCoreAddress
Id: ch-core-address-ech-11-placeoforigin
Title: "Address for Place of Origin"
Description: "Place of Origin for eCH-0011"

* . ^short = "An address expressed using postal conventions (as opposed to GPS or other location definition formats)"
* use 0..0
* use only code
* use ^short = "home | work | temp | old | billing - purpose of this address"
* use ^definition = "The purpose of this address."
* use ^comment = "Applications can assume that an address is current unless it explicitly says that it is temporary or old."
* use ^requirements = "Allows an appropriate address to be chosen from a list of many."
* type 0..0
* type only code
* type ^short = "postal | physical | both"
* text 0..0
* text only string
* text ^short = "Text representation of the address"
* text ^definition = "Specifies the entire address as it should be displayed e.g. on a postal label. This may be provided instead of or as well as the specific parts."
* text ^comment = "Can provide both a text representation and parts. Applications updating an address SHALL ensure that  when both text and parts are present,  no content is included in the text that isn't found in a part."
* text ^requirements = "A renderable, unencoded form."
* line 0..0
* line only string
* line ^short = "Street name, number, direction & P.O. Box etc."
* line ^definition = "This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information."
* city 0..1 SU
* city only string
* city ^short = "Name of place of origin (municipality)"
* city ^definition = "optional if country is not Switzerland"
* city ^alias[0] = "Municpality"
* district 0..0 SU
* district only string
* district ^short = "District name (aka county)"
* district ^definition = "The name of the administrative area (county)."
* district ^comment = "District is sometimes known as county, but in some regions 'county' is used in place of city (municipality), so county name should be conveyed in city instead."
* district ^alias[0] = "County"
* state 1..1
* state ^short = "Canton"
* state ^definition = "Canton 2 letter abbreviation"
* state ^alias[0] = "Province"
* state ^alias[+] = "Territory"
* postalCode 0..0
* postalCode only string
* postalCode ^short = "Postal code for area"
* postalCode ^definition = "A postal code designating a region defined by the postal service."
* postalCode ^alias[0] = "Zip"
* country 0..0 SU
* country only string
* country ^short = "Country if place of orgin is not Switzerland"
* country ^definition = "Country if place of orgin is not Switzerland"
* country.extension[countrycode] 0..1
* country.extension[countrycode] only $iso21090-SC-coding
* country.extension[countrycode] ^short = "ISO Country Alpha-2 or ISO Country Alpha-3 code"
* country.extension[countrycode] ^definition = "The content of the country code element (if present) SHALL be selected EITHER from ValueSet ISO Country Alpha-2 http://hl7.org/fhir/ValueSet/iso3166-1-2 OR MAY be selected from ISO Country Alpha-3 Value Set http://hl7.org/fhir/ValueSet/iso3166-1-3, if the country is not specified in value Set ISO Country Alpha-2 http://hl7.org/fhir/ValueSet/iso3166-1-2."
* period 0..0
* period only Period
* period ^short = "Time period when address was/is in use"
* period ^definition = "Time period when address was/is in use."
* period ^requirements = "Allows addresses to be placed in historical context."


Mapping: eCH-0011-for-CHCoreAddressECH11PlaceOfOrigin
Id: eCH-0011
Title: "eCH-0011 Datenstandard Personendaten"
Source: CHCoreAddressECH11PlaceOfOrigin
Target: "http://www.ech.ch/standards/39485"
* -> "3.3.10 placeoforigin"
* city -> "3.3.10.1 originName, BFS-42"
* state -> "3.3.10.2 canton"
* country.extension[countrycode] -> "3.3.6 nationalityData"


---

// File: input/fsh/profiles-datatypes/CHCoreContactPointECH46Email.fsh

Profile: CHCoreContactPointECH46Email
Parent: ContactPoint
Id: ch-core-contactpoint-ech-46-email
Title: "CH Core ContactPoint eCH-0046 Email"
Description: "E-mail address as contact point of a person or organization according to eCH-0046"

* . ^short = "CH Core ContactPoint eCH-0046 Email"
* system 1..
* system = #email (exactly)
* value 1..
* use.extension ^slicing.discriminator.type = #value
* use.extension ^slicing.discriminator.path = "url"
* use.extension ^slicing.rules = #open
* use.extension contains ECH46EmailCategory named emailCategory 0..1

Mapping: eCH-for-CHCoreContactPointECH46Email
Id: eCH
Title: "eCH Standards"
Source: CHCoreContactPointECH46Email
Target: "https://www.ech.ch/"
* -> "eCH-0046: email"
* system -> "eCH-0046: emailType"
* value -> "eCH-0046: emailAddress"
* use -> "eCH-0046: emailCategory/otherEmailCategory"
* use.extension[emailCategory] -> "eCH-0046: emailCategory"
* period -> "eCH-0046: validity"
* period.start -> "eCH-0046: dateFrom"
* period.end -> "eCH-0046: dateTo"

---

// File: input/fsh/profiles-datatypes/CHCoreContactPointECH46Internet.fsh

Profile: CHCoreContactPointECH46Internet
Parent: ContactPoint
Id: ch-core-contactpoint-ech-46-internet
Title: "CH Core ContactPoint eCH-0046 Internet"
Description: "Internet address as contact point of a person or organization according to eCH-0046"

* . ^short = "CH Core ContactPoint eCH-0046 Internet"
* system 1..
* system = #url (exactly)
* value 1..
* use.extension ^slicing.discriminator.type = #value
* use.extension ^slicing.discriminator.path = "url"
* use.extension ^slicing.rules = #open
* use.extension contains ECH46InternetCategory named internetCategory 0..1

Mapping: eCH-for-CHCoreContactPointECH46Internet
Id: eCH
Title: "eCH Standards"
Source: CHCoreContactPointECH46Internet
Target: "https://www.ech.ch/"
* -> "eCH-0046: internet"
* system -> "eCH-0046: internetType"
* value -> "eCH-0046: internetAddress"
* use -> "eCH-0046: internetCategory/otherInternetCategory"
* use.extension[internetCategory] -> "eCH-0046: internetCategory"
* period -> "eCH-0046: validity"
* period.start -> "eCH-0046: dateFrom"
* period.end -> "eCH-0046: dateTo"

---

// File: input/fsh/profiles-datatypes/CHCoreContactPointECH46Phone.fsh

Profile: CHCoreContactPointECH46Phone
Parent: ContactPoint
Id: ch-core-contactpoint-ech-46-phone
Title: "CH Core ContactPoint eCH-0046 Phone"
Description: "Phone number as contact point of a person or organization according to eCH-0046"

* . ^short = "CH Core ContactPoint eCH-0046 Phone"
* system 1..
* system = #phone (exactly)
* value 1..
* use.extension ^slicing.discriminator.type = #value
* use.extension ^slicing.discriminator.path = "url"
* use.extension ^slicing.rules = #open
* use.extension contains ECH46PhoneCategory named phoneCategory 0..1


Mapping: eCH-for-CHCoreContactPointECH46Phone
Id: eCH
Title: "eCH Standards"
Source: CHCoreContactPointECH46Phone
Target: "https://www.ech.ch/"
* -> "eCH-0046: phone"
* system -> "eCH-0046: phoneType"
* value -> "eCH-0046: phoneNumber"
* use -> "eCH-0046: phoneCategory/otherPhoneCategory"
* use.extension[phoneCategory] -> "eCH-0046: phoneNumberCategory"
* period -> "eCH-0046: validity"
* period.start -> "eCH-0046: dateFrom"
* period.end -> "eCH-0046: dateTo"

---

// File: input/fsh/profiles-datatypes/CHCoreDosage.fsh

Profile: CHCoreDosage
Parent: Dosage
Id: ch-core-dosage
Title: "CH Core Dosage"
Description: "Dosage for medication use cases"
* . ^short = "CH Core Dosage"
* route from http://fhir.ch/ig/ch-term/ValueSet/edqm-routeofadministration (preferred)
* method from http://fhir.ch/ig/ch-term/ValueSet/edqm-administrationmethod (preferred)
* doseAndRate.dose[x] only CHCoreRangeWithEmedUnits or CHCoreQuantityWithEmedUnits


---

// File: input/fsh/profiles-datatypes/CHCoreHumanName.fsh

Profile: CHCoreHumanName
Parent: HumanName
Id: ch-core-humanname
Title: "Human Name"
Description: "Name with extensions for ech-11"

* obeys ch-core-hm-1 and ch-core-hm-2 and ch-core-hm-3 and ch-core-hm-4
* . ^short = "Name of a human - parts and usage"
* . ^definition = "A human's name with the ability to identify parts and usage."
* . ^comment = "Names may be changed, or repudiated, or people may have different names in different contexts. Names may be divided into parts of different type that have variable significance depending on context, though the division into parts does not always matter. With personal names, the different parts might or might not be imbued with some implicit meaning; various cultures associate different importance with the name parts and the degree to which systems must care about name parts around the world varies widely."
* family 0..1 SU
* family only string
* family ^short = "Family name (often called 'Surname')"
* family ^definition = "The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father."
* family ^comment = "Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures)."
* family ^alias[0] = "surname"
* family.extension ^slicing.discriminator.type = #value
* family.extension ^slicing.discriminator.path = "url"
* family.extension ^slicing.rules = #open
* family.extension contains ECH011Name named ech11name 0..1
* given 0..* SU
* given only string
* given ^short = "Given names (not always 'first'). Includes middle names"
* given ^definition = "Given name."
* given ^comment = "If only initials are recorded, they may be used in place of the full name parts. Initials may be separated into multiple given names but often aren't due to paractical limitations.  This element is not called \"first name\" since given names do not always come first."
* given ^alias[0] = "first name"
* given ^alias[+] = "middle name"
* given ^orderMeaning = "Given Names appear in the correct order for presenting the name"
* given.extension ^slicing.discriminator.type = #value
* given.extension ^slicing.discriminator.path = "url"
* given.extension ^slicing.rules = #open
* given.extension contains ECH011FirstName named ech11firstname 0..1
* prefix 0..* SU
* prefix only string
* prefix ^short = "For a salutation use a prefix without the iso21090-EN-qualifier extension. For academical titles and legal status use the http://hl7.org/fhir/ExtensionDefinition/iso21090-EN-qualifier with the codes AC, LS."
* prefix ^definition = "Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name."
* prefix ^orderMeaning = "Prefixes appear in the correct order for presenting the name"
* prefix.extension ^slicing.discriminator.type = #value
* prefix.extension ^slicing.discriminator.path = "url"
* prefix.extension ^slicing.rules = #open
* prefix.extension contains $iso21090-EN-qualifier named salutationandtitle 0..*
* prefix.extension[salutationandtitle] ^short = "For academical titles and legal status use the http://hl7.org/fhir/ExtensionDefinition/iso21090-EN-qualifier with the codes AC, LS."


Mapping: eCH-for-CHCoreHumanName
Id: eCH
Title: "eCH-Standards"
Source: CHCoreHumanName
Target: "http://www.ech.ch/"
* family -> "eCH-0010: lastName"
* family.extension[ech11name] -> "eCH-0011: officialName, originalName, allianceName, nameOnForeignPassport, aliasName, otherName, declaredForeignName"
* given -> "eCH-0010: firstName equivalent to callName of eCH-0011"
* given.extension[ech11firstname] -> "eCH-0011: officialFirstName, callName, allianceName, firstNameOnForeignPassport, declaredForeignFirstName"
* prefix -> "eCH-0010: mrMrs, title"


---

// File: input/fsh/profiles-datatypes/CHCoreQuantityWithEmedUnits.fsh

Profile: CHCoreQuantityWithEmedUnits
Parent: SimpleQuantity
Id: ch-core-quantity-with-emed-units
Title: "CH Core Quantity with EMED Units"
Description: "A quantity with defined units"
* value 1..
* unit 1..
* system 1..
* code 1..
* code from http://fhir.ch/ig/ch-term/ValueSet/UnitCode (preferred)


---

// File: input/fsh/profiles-datatypes/CHCoreRangeWithEmedUnits.fsh

Profile: CHCoreRangeWithEmedUnits
Parent: Range
Id: ch-core-range-with-emed-units
Title: "CH Core Range with EMED Units"
Description: "A range with defined quantity/units"
* low only CHCoreQuantityWithEmedUnits
* high only CHCoreQuantityWithEmedUnits


---

// File: input/fsh/profiles-datatypes/CHCoreRatioWithEmedUnits.fsh

Profile: CHCoreRatioWithEmedUnits
Parent: Ratio
Id: ch-emed-ratio-with-emed-units
Title: "CH EMED Ratio with EMED Units"
Description: "A ratio with defined units"
* numerator 1..
* numerator only CHCoreQuantityWithEmedUnits
* denominator 1..
* denominator only CHCoreQuantityWithEmedUnits

---

// File: input/fsh/profiles-datatypes/Identifier.fsh

// ------------------------------- Patient.identifier ------------------------------- //

Profile: AHVN13Identifier
Parent: Identifier
Id: ch-core-ahvn13-identifier
Title: "AHVN13 / NAVS13 Identifier"
Description: "Identifier holding a 13 digit social security number. The number shall have exactly 13 digits and shall not contain point characters for separation."
* system 1..
* system = "urn:oid:2.16.756.5.32" (exactly)
* value 1..
* value obeys ahvn13-length and ahvn13-startswith756 and ahvn13-digit-check

Profile: EPRSPIDIdentifier
Parent: Identifier
Id: ch-core-epr-spid-identifier
Title: "EPR-SPID Identifier"
Description: "EPR-SPID Identifier (https://www.fedlex.admin.ch/eli/cc/2017/205/de)"
* system 1..
* system = "urn:oid:2.16.756.5.30.1.127.3.10.3" (exactly)
* value 1..
* value obeys epr-spid-length and epr-spid-startswith76133761 and epr-spid-modulus-10

Profile: VEKAIdentifier
Parent: Identifier
Id: ch-core-veka-identifier
Title: "Insurance Card Number (Identifier)"
Description: "Identifier in 20-digit format. The number shall have exactly 20 digits and start with 756."
* system 1..
* system = "urn:oid:2.16.756.5.30.1.123.100.1.1.1" (exactly)
* value 1..
* value obeys veka-length and veka-startswith807560
* period.end ^short = "Expiration date of the insurance card"


// ------------------------------- Practitioner/Organization.identifier ------------------------------- //

Profile: GLNIdentifier
Parent: Identifier
Id: ch-core-gln-identifier
Title: "GLN Identifier"
Description: "Identifier holding a 13 digit GLN"
* system 1..
* system = "urn:oid:2.51.1.3" (exactly)
* value 1..
* value obeys gln-length and gln-modulus-10 and gln-startswith76

Profile: ZSRIdentifier
Parent: Identifier
Id: ch-core-zsr-identifier
Title: "ZSR Identifier"
Description: "Identifier holding a number for ZSR (Zahlstellenregister), RCC (Registre des codes-créanciers), RCC (Registro dei codici creditori)"
* system 1..
* system = "urn:oid:2.16.756.5.30.1.123.100.2.1.1" (exactly)
* system ^short = "OID of the ZSR/RCC"
* value 1..
* value ^short = "ZSR/RCC number"


// ------------------------------- Organization.identifier ------------------------------- //

Profile: BERIdentifier
Parent: Identifier
Id: ch-core-ber-identifier
Title: "BER Identifier"
Description: "Identifier holding a number for BER (Business and Enterprise Register), BUR (Betriebs- und Unternehmensregister), REE (Registre des entreprises et des établissements), RIS (Registro delle imprese e degli stabilimenti)"
* value obeys ber-length and ber-modulus-11
* system 1..
* system = "urn:oid:2.16.756.5.45" (exactly)
* system ^short = "OID of the BER/BUR/REE/RIS"
* value 1..
* value ^short = "BER/BUR/REE/RIS number"

Profile: UIDBIdentifier
Parent: Identifier
Id: ch-core-uidb-identifier
Title: "UIDB Identifier"
Description: "Identifier holding a number for UIDB (Unique Identification Business), UID (Verwendung der Unternehmens-Identifikationsnummer), IDE (Utilisation du numéro d'identification des entreprises), IDI (Utilizzo del numero d'identificazione delle imprese)"
* value obeys uidb-length and uidb-modulus-11
* system 1..
* system = "urn:oid:2.16.756.5.35" (exactly)
* system ^short = "OID of the UIDB/UID/IDE/IDI"
* value 1..
* value ^short = "UIDB/UID/IDE/IDI number"


---

// File: input/fsh/profiles-resources/CHCoreAllergyIntolerance.fsh

Profile: CHCoreAllergyIntolerance
Parent: AllergyIntolerance
Id: ch-core-allergyintolerance
Title: "CH Core AllergyIntolerance"
Description: "Base definition of the AllergyIntolerance resource for use in Swiss specific use cases." 
// IPS: * extension contains http://hl7.org/fhir/uv/ips/StructureDefinition/abatement-dateTime-uv-ips named abatement-datetime ..1 
* code from  http://fhir.ch/ig/ch-allergyintolerance/ValueSet/CHAllergyIntoleranceValueSet (preferred)
* patient only Reference(CHCorePatient)
* recorder only Reference(CHCorePractitioner or CHCorePractitionerRole or CHCorePatient or RelatedPerson)
* asserter only Reference(CHCorePractitioner or CHCorePractitionerRole or CHCorePatient or RelatedPerson)
* reaction.extension contains 
    http://hl7.org/fhir/StructureDefinition/allergyintolerance-certainty named certainty 0..1 and
    http://hl7.org/fhir/StructureDefinition/allergyintolerance-duration named duration 0..1 and
    http://hl7.org/fhir/StructureDefinition/openEHR-location named location 0..1 and
    http://hl7.org/fhir/StructureDefinition/openEHR-exposureDate named exposureDate 0..1 and
    http://hl7.org/fhir/StructureDefinition/openEHR-exposureDuration named exposureDuration 0..1 and
    http://hl7.org/fhir/StructureDefinition/openEHR-exposureDescription named exposureDescription 0..1 and
    http://hl7.org/fhir/StructureDefinition/openEHR-management named management 0..1 
* reaction.substance from http://fhir.ch/ig/ch-allergyintolerance/ValueSet/CHAllergyIntoleranceReactionSubstanceValueSet (preferred)
* reaction.manifestation from http://fhir.ch/ig/ch-allergyintolerance/ValueSet/CHAllergyIntoleranceReactionManifestationValueSet (preferred)


---

// File: input/fsh/profiles-resources/CHCoreComposition.fsh

Profile: CHCoreComposition
Parent: Composition
Id: ch-core-composition
Title: "CH Core Composition"
Description: "Base definition of the Composition resource for use in Swiss specific use cases."

* . ^short = "CH Core Composition"
* subject only Reference(CHCorePatient)
* subject.reference 1..
* encounter only Reference(CHCoreEncounter)
* author only Reference(CHCorePractitioner or CHCorePractitionerRole or Device or CHCorePatient or RelatedPerson or CHCoreOrganization)
* author.reference 1..
* attester.party only Reference(CHCorePatient or RelatedPerson or CHCorePractitioner or CHCorePractitionerRole or CHCoreOrganization)
* attester.party.reference 1..
* custodian only Reference(CHCoreOrganization)
* custodian.reference 1..
* relatesTo.target[x] only Identifier or Reference(CHCoreComposition)
* section.author only Reference(CHCorePractitioner or CHCorePractitionerRole or Device or CHCorePatient or RelatedPerson or CHCoreOrganization)

---

// File: input/fsh/profiles-resources/CHCoreCompositionEPR.fsh

Profile: CHCoreCompositionEPR
Parent: CHCoreComposition
Id: ch-core-composition-epr
Title: "CH Core Composition EPR"
Description: "Definition of the Composition resource for use in the context of the electronic patient record (EPR)."
* . ^short = "CH Core Composition EPR"
* language 1..
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains
    EPRInformationRecipient named informationRecipient 0..* and
    EPRDataEnterer named dataEnterer 0..1
* identifier 1..
* identifier.system 1..
* identifier.system = "urn:ietf:rfc:3986" (exactly)
* identifier.value 1..
* type 1..
* type from $DocumentEntry.typeCode (extensible)
* type ^short = "Kind of composition"

* subject 1..
* subject only Reference(CHCorePatientEPR)
* author only Reference(CHCorePractitionerEPR or CHCorePractitionerRoleEpr or Device or CHCorePatientEPR or RelatedPerson or CHCoreOrganizationEPR)
* author.extension ^slicing.discriminator.type = #value
* author.extension ^slicing.discriminator.path = "url"
* author.extension ^slicing.rules = #open
* author.extension contains 
    EPRTime named time 0..1
* author.extension[time] ^short = "Timestamp of the authorship/data input"
* confidentiality 1..
* confidentiality.extension ^slicing.discriminator.type = #value
* confidentiality.extension ^slicing.discriminator.path = "url"
* confidentiality.extension ^slicing.rules = #open
* confidentiality.extension contains EPRConfidentialityCode named confidentialityCode 1..1
* attester ^slicing.discriminator.type = #value
* attester ^slicing.discriminator.path = "mode"
* attester ^slicing.rules = #open
* attester contains 
    legalAuthenticator 0..1
* attester[legalAuthenticator] ^short = "legal authenticator"
* attester[legalAuthenticator].mode = #legal (exactly)
* attester[legalAuthenticator].party 1..
* attester[legalAuthenticator].party only Reference(CHCorePatientEPR or RelatedPerson or CHCorePractitionerEPR or CHCorePractitionerRoleEpr)
* custodian only Reference(CHCoreOrganizationEPR)
* relatesTo.target[x] only Identifier or Reference(CHCoreCompositionEPR)

* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code"
* section ^slicing.ordered = false
* section ^slicing.rules = #open
* section.author only Reference(CHCorePractitionerEPR or CHCorePractitionerRoleEpr or Device or CHCorePatientEPR or RelatedPerson or CHCoreOrganizationEPR)

* section contains 
    originalRepresentation 0..1
* section[originalRepresentation] ^short = "Contains the original representation as a PDF of the current document."
* section[originalRepresentation].title 1..1
* section[originalRepresentation].title ^short = "Original representation"
* section[originalRepresentation].code 1..
* section[originalRepresentation].code = $loinc#55108-5
* section[originalRepresentation].text 1..1
* section[originalRepresentation].text ^short = "Representation of the original view"
* section[originalRepresentation].entry 1..1
* section[originalRepresentation].entry only Reference(Binary)
* section[originalRepresentation].entry ^short = "According to the EPR ordonnance the PDF has to be in PDF/A-1 or PDF/A-2 format."
* section[originalRepresentation].section 0..0


---

// File: input/fsh/profiles-resources/CHCoreCondition.fsh

Profile: CHCoreCondition
Parent: Condition
Id: ch-core-condition
Title: "CH Core Condition"
Description: "Base definition of the Condition resource for use in Swiss specific use cases."
* subject only Reference(CHCorePatient or Group)
* recorder only Reference(CHCorePractitioner or CHCorePractitionerRole or CHCorePatient or RelatedPerson)
* asserter only Reference(CHCorePractitioner or CHCorePractitionerRole or CHCorePatient or RelatedPerson)

* category from http://hl7.org/fhir/ValueSet/condition-category (extensible)
* category ^binding.extension[0].extension[0].url = "purpose"
* category ^binding.extension[=].extension[=].valueCode = #candidate
* category ^binding.extension[=].extension[+].url = "valueSet"
* category ^binding.extension[=].extension[=].valueCanonical = "http://fhir.ch/ig/ch-term/ValueSet/condition-category"
* category ^binding.extension[=].extension[+].url = "documentation"
* category ^binding.extension[=].extension[=].valueMarkdown = "An alternative additional binding to the value set used in CH eTOC."
* category ^binding.extension[=].url = "http://hl7.org/fhir/tools/StructureDefinition/additional-binding"

* code from http://hl7.org/fhir/ValueSet/condition-code (example)
* code ^binding.extension[0].extension[0].url = "purpose"
* code ^binding.extension[=].extension[=].valueCode = #candidate
* code ^binding.extension[=].extension[+].url = "valueSet"
* code ^binding.extension[=].extension[=].valueCanonical = "http://fhir.ch/ig/ch-allergyintolerance/ValueSet/CHAllergyIntoleranceConditionValueSet"
* code ^binding.extension[=].extension[+].url = "documentation"
* code ^binding.extension[=].extension[=].valueMarkdown = "An alternative additional binding to the value set used in CH AllergyIntolerance."
* code ^binding.extension[=].url = "http://hl7.org/fhir/tools/StructureDefinition/additional-binding"


---

// File: input/fsh/profiles-resources/CHCoreCoverage.fsh

Profile: CHCoreCoverage
Parent: Coverage
Id: ch-core-coverage
Title: "CH Core Coverage"
Description: "Base definition of the Coverage resource for use in Swiss specific use cases."

* ^purpose = "Coverage information which can be shared"
* . ^short = "CH Core Coverage"
* . ^definition = "This is basic constraint on Coverage for use in CH Core resources."
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "$this"
* identifier ^slicing.rules = #open
* identifier contains insuranceCardNumber 0..*
* identifier[insuranceCardNumber] only VEKAIdentifier
* identifier[insuranceCardNumber] ^short = "Insurance card number of the patient (20 digits)"
* identifier[insuranceCardNumber] ^definition = "Cardnumber Swiss insurance card v1"
* identifier[insuranceCardNumber] ^patternIdentifier.system = "urn:oid:2.16.756.5.30.1.123.100.1.1.1"
* policyHolder only Reference(CHCorePatient or RelatedPerson or CHCoreOrganization)
* subscriber only Reference(CHCorePatient or RelatedPerson)
* beneficiary only Reference(CHCorePatient)
* payor only Reference(CHCoreOrganization or CHCorePatient or RelatedPerson)
* payor ^short = "Issuer of the policy (if it is not the patient him/herself, represent the payor as a contained resource)"
* payor ^type.aggregation[0] = #contained
* payor ^type.aggregation[+] = #referenced
* type from http://fhir.ch/ig/ch-term/ValueSet/mainguarantor (preferred)
* class.type from http://fhir.ch/ig/ch-core/ValueSet/bfs-medstats-21-encountertype (extensible) // Cannot override extensible binding with preferred binding. 



---

// File: input/fsh/profiles-resources/CHCoreDocument.fsh

Profile: CHCoreDocument
Parent: Bundle
Id: ch-core-document
Title: "CH Core Document"
Description: "Base definition of the Bundle resource for use in Swiss specific use cases."

* . ^short = "CH Core Document"
* identifier 1..
* identifier.system 1..
* identifier.value 1..
* type = #document (exactly)
* type ^short = "document"
* timestamp 1..

* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry.fullUrl 1..
* entry.fullUrl obeys ch-core-doc-1
* entry contains
    Composition 1..1 and
    Patient 0..* and
    Practitioner 0..* and
    PractitionerRole 0..* and
    Organization 0..* and
    RelatedPerson 0..* and
    Device 0..* and
    Encounter 0..* and
    Location 0..*
* entry[Composition].resource 1..
* entry[Composition].resource ^type.profile = Canonical(CHCoreComposition)
* entry[Patient].resource 1..
* entry[Patient].resource ^type.profile = Canonical(CHCorePatient)
* entry[Practitioner].resource 1..
* entry[Practitioner].resource ^type.profile = Canonical(CHCorePractitioner)
* entry[PractitionerRole].resource 1..
* entry[PractitionerRole].resource ^type.profile = Canonical(CHCorePractitionerRole)
* entry[Organization].resource 1..
* entry[Organization].resource ^type.profile = Canonical(CHCoreOrganization)
* entry[RelatedPerson].resource 1..
* entry[RelatedPerson].resource ^type.profile = Canonical(RelatedPerson)
* entry[Device].resource 1..
* entry[Device].resource ^type.profile = Canonical(Device)
* entry[Encounter].resource 1..
* entry[Encounter].resource ^type.profile = Canonical(CHCoreEncounter)
* entry[Location].resource 1..
* entry[Location].resource ^type.profile = Canonical(CHCoreLocation)

---

// File: input/fsh/profiles-resources/CHCoreDocumentEPR.fsh

Profile: CHCoreDocumentEPR
Parent: CHCoreDocument
Id: ch-core-document-epr
Title: "CH Core Document EPR"
Description: "Definition of the Bundle resource for use in the context of the electronic patient record (EPR)."
* . ^short = "CH Core Document EPR"
* identifier.system = "urn:ietf:rfc:3986" (exactly)
* identifier.value obeys ch-core-doc-2
* identifier.value ^example.label = "CH Core"
* identifier.value ^example.valueString = "urn:uuid:daa8cd41-34a1-4a9c-9a6d-cd3f850142e9"
* type = #document (exactly)
* type ^short = "document"
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry[Composition].resource only CHCoreCompositionEPR
* entry contains 
    Binary 0..*
* entry[Binary].resource 1..
* entry[Binary].resource ^type.profile = Canonical(Binary)

---

// File: input/fsh/profiles-resources/CHCoreDocumentReference.fsh

Profile: CHCoreDocumentReference
Parent: DocumentReference
Id: ch-core-documentreference
Title: "CH Core DocumentReference"
Description: "Base definition of the DocumentReference resource for use in Swiss specific use cases."

* . ^short = "CH Core DocumentReference"
* type from $DocumentEntry.typeCode (preferred)

* category from $DocumentEntry.classCode (preferred)

* subject only Reference(CHCorePatient or CHCorePractitioner or Group or Device)
* author only Reference(CHCorePractitioner or CHCorePractitionerRole or CHCoreOrganization or Device or CHCorePatient or RelatedPerson)
* authenticator only Reference(CHCorePractitioner or CHCorePractitionerRole or CHCoreOrganization)
* custodian only Reference(CHCoreOrganization)
* relatesTo.target only Reference(CHCoreDocumentReference)

* securityLabel from $DocumentEntry.confidentialityCode (extensible)

* content.attachment.contentType obeys ch-docref-1
* content.attachment.language from $DocumentEntry.languageCode (preferred)

* content.format from $DocumentEntry.formatCode (preferred)
* context.encounter only Reference(CHCoreEncounter or EpisodeOfCare)
* context.facilityType from $DocumentEntry.healthcareFacilityTypeCode (preferred)
* context.practiceSetting from $DocumentEntry.practiceSettingCode (preferred)
* context.sourcePatientInfo only Reference(CHCorePatient)


Mapping: EPR-XDS
Id: EPR-XDS
Title: "XDS metadata"
Source: CHCoreDocumentReference
Target: "https://profiles.ihe.net/ITI/MHD/index.html"
* status -> "approved -> status=current, deprecated -> status=superseded. Other status values are allowed but are not defined in this mapping to XDS, see https://profiles.ihe.net/ITI/MHD/ConceptMap-FhirStatusVsStatusCode.html"

---

// File: input/fsh/profiles-resources/CHCoreDocumentReferenceEPR.fsh

Profile: CHCoreDocumentReferenceEPR
Parent: CHCoreDocumentReference
Id: ch-core-documentreference-epr
Title: "CH Core DocumentReference EPR"
Description: "Definition of the DocumentReference resource for use in the context of the electronic patient record (EPR)."
* . ^short = "CH Core DocumentReference EPR"

* type 1..
* type from $DocumentEntry.typeCode (extensible)

* category 1..
* category from $DocumentEntry.classCode (extensible)

* subject 1..
* subject only Reference(CHCorePatientEPR)
* subject.reference 1..
* date 1..
* author 1..
* author only Reference(CHCorePractitionerEPR or CHCorePractitionerRoleEpr or Device or CHCorePatientEPR or RelatedPerson)
* author.reference 1..
* authenticator only Reference(CHCorePractitionerEPR or CHCorePractitionerRoleEpr or CHCoreOrganizationEPR)
* custodian only Reference(CHCoreOrganizationEPR)

* securityLabel 1..
* securityLabel from $DocumentEntry.confidentialityCode (extensible)

* content.attachment.contentType 1..
// content.attachment.contentType from $DocumentEntry.mimeType (extensible) -> not allowed on a required binding in FHIR core -> add constraint, like in CHCoreDocumentReference
* content.attachment.contentType obeys ch-docref-2
* content.attachment.language 1..
* content.attachment.language from $DocumentEntry.languageCode (extensible)
* content.attachment.url 1..

* content.format 1..
* content.format from $DocumentEntry.formatCode (extensible)

* context.facilityType from $DocumentEntry.healthcareFacilityTypeCode (extensible)
* context.practiceSetting from $DocumentEntry.practiceSettingCode (extensible)
* context.sourcePatientInfo only Reference(CHCorePatientEPR)

---

// File: input/fsh/profiles-resources/CHCoreEncounter.fsh

Profile: CHCoreEncounter
Parent: Encounter
Id: ch-core-encounter
Title: "CH Core Encounter"
Description: "Base definition of the Encounter resource for use in Swiss specific use cases."

* ^purpose = "Core patient demographics which can be shared"
* . ^short = "CH Core Encounter"
* . ^definition = "This is basic constraint on Encounter for use in CH Core resources."
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "$this"
* identifier ^slicing.rules = #open
* identifier contains 
    VisitNumber 0..*
* identifier[VisitNumber] ^short = "Visit number (Fallnummer)"
* identifier[VisitNumber] ^patternIdentifier.type = $v2-0203#VN
* identifier[VisitNumber].system 1..
* identifier[VisitNumber].value 1..
* class ^short = "AMB | IMP : See mapping from BFS Medizinische Statistik BFS Encounter Class to FHIR"
* class ^definition = "See mapping from BFS Medizinische Statistik [BFS Encounter Class to FHIR mapping](http://fhir.ch/ig/ch-term/ConceptMap-bfs-encounter-class-to-fhir.html)"
* priority from $bfs-medstats-18-admittype_1 (extensible)
* priority ^short = "BFS Medizinische Statistik - Eintrittsart / Mode d’admission / Genere di ricovero"
* subject 1..
* subject only Reference(CHCorePatient)
* participant.type from http://fhir.ch/ig/ch-core/ValueSet/ch-core-encounter-participation-type (extensible)
* participant.individual only Reference(CHCorePractitioner)

* hospitalization.extension ^slicing.discriminator.type = #value
* hospitalization.extension ^slicing.discriminator.path = "url"
* hospitalization.extension ^slicing.rules = #open
* hospitalization.extension contains
    BfsMsAdmitRole named BfsAdmitRole 0..1 and
    Accident named accident 0..1 and
    EncounterSupsectedReadmission named readmission 0..1 and
    BfsDischargeDecision named BfsDischargeDecision 0..1 and
    BfsDischargeDestination named BfsDischargeDestination 0..1
* hospitalization.extension[BfsAdmitRole] ^short = "BFS Medizinische Statistik - Einweisende Instanz"
* hospitalization.extension[accident] ^short = "Flag if hospitalization was due to an accident"
* hospitalization.extension[readmission] ^short = "Flag to indicate if it is a suspected readmission"
* hospitalization.extension[BfsDischargeDecision] ^short = "BFS Medizinische Statistik - Entscheid für Austritt"
* hospitalization.extension[BfsDischargeDestination] ^short = "BFS Medizinische Statistik - Aufenthalt nach Austritt"

* hospitalization.origin only Reference(CHCoreLocation or CHCoreOrganization)
* hospitalization.admitSource from $bfs-medstats-17-admitsource_1 (extensible)
* hospitalization.admitSource ^short = "BFS Medizinische Statistik - Aufenthaltsort vor dem Eintritt / Séjour avant l’admission / Luogo di soggiorno prima dell’ammissione"
* hospitalization.destination only Reference(CHCoreLocation or CHCoreOrganization)
* hospitalization.dischargeDisposition from $bfs-medstats-29-dischargeencounter_1 (preferred)
* hospitalization.dischargeDisposition ^short = "BFS Medizinische Statistik - Behandlung nach Austritt"
* hospitalization.dischargeDisposition ^binding.description = "BFS Medizinische Statistik - Behandlung nach Austritt"

* location.location only Reference(CHCoreLocation)
* serviceProvider only Reference(CHCoreOrganization)
* partOf only Reference(CHCoreEncounter)


---

// File: input/fsh/profiles-resources/CHCoreEPRConsent.fsh

Profile: CHCoreEPRConsent
Parent: Consent
Id: ch-core-epr-consent
Title: "CH Core EPR-Consent"
Description: "Definition of the Consent resource to document that a patient has an electronic patient record (EPR) in Switzerland. The actual consent conditions are held within the EPR, this consent is the documentation in an organization that the patient has stated he/she has an EPR and this needs to be verified at the time of document publishing or reading. In addition a patient can request that specific information will not be published from the organization to the EPR. This can be documented with one or more references to encounters to exclude the consent for these."

* . ^short = "CH Core EPR-Consent"
* scope = $consentscope#patient-privacy
* category ^slicing.discriminator[0].type = #value
* category ^slicing.discriminator[=].path = "coding.code"
* category ^slicing.discriminator[+].type = #value
* category ^slicing.discriminator[=].path = "coding.system"
* category ^slicing.ordered = false
* category ^slicing.rules = #open
* category contains VSCat 1..1
* category[VSCat].coding 1..
* category[VSCat].coding.system 1..1
* category[VSCat].coding.system = "http://terminology.hl7.org/CodeSystem/v3-ActCode" (exactly)
* category[VSCat].coding.code 1..1
* category[VSCat].coding.code = #IDSCL (exactly)
* category[VSCat].coding.code ^short = "information disclosure"
* patient 1..
* patient only Reference(CHCorePatient)
* patient ^short = "The patient to whom this EPR consent applies"
* performer only Reference(CHCoreOrganization or CHCorePatient or CHCorePractitioner or RelatedPerson or CHCorePractitionerRole)
* organization only Reference(CHCoreOrganization)
* policyRule = $consentpolicycodes#ch-epr
* provision ^short = "Exceptions to the EPR consent"
* provision.type 1..
* provision.type = #deny (exactly)
* provision.type ^short = "deny"
* provision.type ^definition = "Encounters can be added here where the consent for the EPR does not apply."
* provision.data.meaning = #instance (exactly)
* provision.data.reference only Reference(CHCoreEncounter)
* provision.data.reference ^short = "Excluded encounter for EPR"
* provision.data.reference ^definition = "A reference to the encounter where the consent for the EPR does not apply."

---

// File: input/fsh/profiles-resources/CHCoreImmunization.fsh

Profile: CHCoreImmunization
Parent: Immunization
Id: ch-core-immunization
Title: "CH Core Immunization"
Description: "Base definition of the Immunization resource for use in Swiss specific use cases."
* . ^short = "CH Core Immunization"
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains
    Author named recorder 0..1
* extension[recorder] ^definition = "The recorder Reference of the immunization. May be a Practitioner or a Patient"
* vaccineCode from $SwissVaccinesVS (preferred)
* vaccineCode.coding ^slicing.discriminator.type = #value
* vaccineCode.coding ^slicing.discriminator.path = "$this"
* vaccineCode.coding ^slicing.description = "Slice based on code value"
* vaccineCode.coding ^slicing.rules = #open
* vaccineCode.coding contains 
    swissVaccines 0..1 and
    snomedctVaccines 0..1 
* vaccineCode.coding[swissVaccines] from $SwissVaccinesVS (required)
* vaccineCode.coding[swissVaccines] ^short = "Swiss Vaccine Code"
* vaccineCode.coding[swissVaccines] ^definition = "Swiss Vaccine Code"
* vaccineCode.coding[snomedctVaccines] from $SnomedCTForVaccineCodeVS (required)
* vaccineCode.coding[snomedctVaccines] ^short = "Vaccine Code by SNOMED CT"
* vaccineCode.coding[snomedctVaccines] ^definition = "Vaccine Code by SNOMED CT"
* patient only Reference(CHCorePatient)
* patient ^short = "Patient"
* encounter only Reference(CHCoreEncounter)
* encounter ^short = "Encounter"
* route from $RouteOfAdministrationImmunizationVS (preferred)
* route ^short = "How vaccine entered body."
* performer.actor only Reference(CHCorePractitioner or CHCorePractitionerRole or CHCoreOrganization)
* performer.actor ^short = "The performer who applied the vaccine"
* protocolApplied.targetDisease from $ChVacdTargetDiseasesAndIllnessesUndegoneVS (preferred)
* protocolApplied.targetDisease ^binding.extension[0].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* protocolApplied.targetDisease ^binding.extension[=].valueString = "Disease"
* protocolApplied.targetDisease ^binding.extension[+].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding"
* protocolApplied.targetDisease ^binding.extension[=].valueBoolean = true
* protocolApplied.targetDisease ^binding.description = "The code for disease."



---

// File: input/fsh/profiles-resources/CHCoreImmunizationRecommendation.fsh

Profile: CHCoreImmunizationRecommendation
Parent: ImmunizationRecommendation
Id: ch-core-immunization-recommendation
Title: "CH Core Immunization Recommendation"
Description: "Base definition of the ImmunizationRecommendation resource for use in Swiss specific use cases."
* . ^short = "CH Core Immunization Recommendation"
* patient only Reference(CHCorePatient)
* patient ^short = "Patient"
* authority only Reference(CHCoreOrganization)
* recommendation.vaccineCode from $SwissVaccinationPlanImmunizationsVS (preferred)
* recommendation.vaccineCode ^short = "Immunization Recommendation Vaccine Code"
* recommendation.vaccineCode ^binding.extension[0].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* recommendation.vaccineCode ^binding.extension[=].valueString = "VaccineCode"
* recommendation.vaccineCode ^binding.extension[+].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding"
* recommendation.vaccineCode ^binding.extension[=].valueBoolean = true
* recommendation.vaccineCode ^binding.description = "The code for vaccine product administered."

* recommendation.targetDisease from $ChVacdTargetDiseasesAndIllnessesUndegoneVS (preferred)
* recommendation.targetDisease ^binding.extension[0].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* recommendation.targetDisease ^binding.extension[=].valueString = "Disease"
* recommendation.targetDisease ^binding.extension[+].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding"
* recommendation.targetDisease ^binding.extension[=].valueBoolean = true
* recommendation.targetDisease ^binding.description = "The code for disease."

* recommendation.forecastReason from $SwissImmunizationRecommendationCategoriesVS (preferred)
* recommendation.forecastReason ^binding.extension[0].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* recommendation.forecastReason ^binding.extension[=].valueString = "Disease"
* recommendation.forecastReason ^binding.extension[+].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding"
* recommendation.forecastReason ^binding.extension[=].valueBoolean = true
* recommendation.forecastReason ^binding.description = "The reason the forecast is done."

* recommendation.forecastStatus from $SwissRecommendationForecastStatus (preferred)
* recommendation.forecastStatus ^binding.extension[0].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* recommendation.forecastStatus ^binding.extension[=].valueString = "Disease"
* recommendation.forecastStatus ^binding.extension[+].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding"
* recommendation.forecastStatus ^binding.extension[=].valueBoolean = true
* recommendation.forecastStatus ^binding.description = "The reason the forecast is done."

* recommendation.supportingImmunization only Reference(CHCoreImmunization or ImmunizationEvaluation)

---

// File: input/fsh/profiles-resources/CHCoreLocation.fsh

Profile: CHCoreLocation
Parent: Location
Id: ch-core-location
Title: "CH Core Location"
Description: "Base definition of the Location resource for use in Swiss specific use cases."

* . ^short = "CH Core Location"
* name 1..
* telecom ^slicing.discriminator.type = #value
* telecom ^slicing.discriminator.path = "system"
* telecom ^slicing.rules = #open
* telecom.system 1..
* telecom.value 1..
* telecom contains
    email 0..* and
    phone 0..* and
    internet 0..*
* telecom[email] only CHCoreContactPointECH46Email
* telecom[phone] only CHCoreContactPointECH46Phone
* telecom[internet] only CHCoreContactPointECH46Internet
* address only CHCoreAddressECH10
* managingOrganization only Reference(CHCoreOrganization)


Mapping: eCH-for-CHCoreLocation
Id: eCH
Title: "eCH Standards"
Source: CHCoreLocation
Target: "https://www.ech.ch/"
* telecom -> "eCH-0046: Contact"
* telecom[email] -> "eCH-0046: email"
* telecom[phone] -> "eCH-0046: phone"
* telecom[internet] -> "eCH-0046: internet"


---

// File: input/fsh/profiles-resources/CHCoreMedication.fsh

Profile: CHCoreMedication
Parent: Medication
Id: ch-core-medication
Title: "CH Core Medication"
Description: "Base definition of the Medication resource for use in Swiss specific use cases."
* . ^short = "CH Core Medication"
* code.coding ^slicing.discriminator.type = #value
* code.coding ^slicing.discriminator.path = "system"
* code.coding ^slicing.rules = #open
* code.coding contains 
    GTIN 0..* and
    ATC 0..*
* code.coding[GTIN] ^short = "GTIN for Swiss products"
* code.coding[GTIN].system 1..1
* code.coding[GTIN].system = "urn:oid:2.51.1.1" (exactly)
* code.coding[GTIN].system ^short = "Global Trade Item Number (GS1)"
* code.coding[GTIN].code 1..1
* code.coding[ATC] ^short = "ATC for foreign products"
* code.coding[ATC].system 1..1
* code.coding[ATC].system = "http://www.whocc.no/atc" (exactly)
* code.coding[ATC].system ^short = "Anatomical Therapeutic Chemical (ATC) Classification"
* code.coding[ATC].code 1..1
* form from http://fhir.ch/ig/ch-term/ValueSet/edqm-pharmaceuticaldoseform (preferred)
* amount only CHCoreRatioWithEmedUnits
* ingredient.item[x] only CodeableConcept or Reference(http://hl7.org/fhir/StructureDefinition/Substance or CHCoreMedication)
* ingredient.item[x] from http://fhir.ch/ig/ch-term/ValueSet/ActivePharmaceuticalIngredient (preferred)
* ingredient.strength only CHCoreRatioWithEmedUnits


Profile: CHCoreMedicationStatement
Parent: MedicationStatement
Id: ch-core-medicationstatement
Title: "CH Core MedicationStatement"
Description: "Base definition of the MedicationStatement resource for use in Swiss specific use cases."
* . ^short = "CH Core MedicationStatement"
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains CHEMEDExtSubstitution named substitution 0..1
* extension[substitution] ^short = "Whether substitution is allowed or not"
* medication[x] only CodeableConcept or Reference(CHCoreMedication) 
* subject only Reference(CHCorePatient or Group)
* informationSource only Reference(CHCorePatient or CHCorePractitioner or CHCorePractitionerRole or RelatedPerson or CHCoreOrganization)
* dosage only CHCoreDosage


Profile: CHCoreMedicationAdministration
Parent: MedicationAdministration
Id: ch-core-medicationadministration
Title: "CH Core MedicationAdministration"
Description: "Base definition of the MedicationAdministration resource for use in Swiss specific use cases."
* . ^short = "CH Core MedicationAdministration"
* medication[x] only CodeableConcept or Reference(CHCoreMedication)
* subject only Reference(CHCorePatient or Group)
* performer.actor only Reference(CHCorePractitioner or CHCorePractitionerRole or CHCorePatient or RelatedPerson or Device)
// BackboneElement in this resource
* dosage.route from http://fhir.ch/ig/ch-term/ValueSet/edqm-routeofadministration (preferred)
* dosage.method from http://fhir.ch/ig/ch-term/ValueSet/edqm-administrationmethod (preferred)
* dosage.dose only CHCoreQuantityWithEmedUnits
* dosage.rate[x] only CHCoreRatioWithEmedUnits or CHCoreQuantityWithEmedUnits


Profile: CHCoreMedicationDispense
Parent: MedicationDispense
Id: ch-core-medicationdispense
Title: "CH Core MedicationDispense"
Description: "Base definition of the MedicationDispense resource for use in Swiss specific use cases."
* . ^short = "CH Core MedicationDispense"
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains CHEMEDExtTreatmentReason named treatmentReason 0..*
* medication[x] only CodeableConcept or Reference(CHCoreMedication)
* subject only Reference(CHCorePatient or Group)
* performer.actor only Reference(CHCorePractitioner or CHCorePractitionerRole or CHCoreOrganization or CHCorePatient or Device or RelatedPerson)
* dosageInstruction only CHCoreDosage
* substitution obeys ch-meddis-1
* substitution.wasSubstituted ^short = "Whether a substitution was (true) or was not (false) performed on the dispense"
* substitution.type from http://fhir.ch/ig/ch-term/ValueSet/ActSubstanceAdminSubstitutionCode (preferred)
* substitution.type ^short = "If 'wasSubstituted = true', the type can be defined in addition (optional). If 'wasSubstituted = false', no type is expected."


Profile: CHCoreMedicationRequest
Parent: MedicationRequest
Id: ch-core-medicationrequest
Title: "CH Core MedicationRequest"
Description: "Base definition of the MedicationRequest resource for use in Swiss specific use cases."
* . ^short = "CH Core MedicationRequest"
* medication[x] only CodeableConcept or Reference(CHCoreMedication)
* subject only Reference(CHCorePatient or Group)
* requester only Reference(CHCorePractitioner or CHCorePractitionerRole or CHCoreOrganization or CHCorePatient or RelatedPerson or Device)
* dosageInstruction only CHCoreDosage
* substitution.allowedCodeableConcept from http://fhir.ch/ig/ch-term/ValueSet/ActSubstanceAdminSubstitutionCode (preferred)


---

// File: input/fsh/profiles-resources/CHCoreOrganization.fsh

Profile: CHCoreOrganization
Parent: Organization
Id: ch-core-organization
Title: "CH Core Organization"
Description: "Base definition of the Organization resource for use in Swiss specific use cases."

* . ^short = "CH Core Organization"
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "$this"
* identifier ^slicing.rules = #open
* identifier contains
    BER 0..1 and
    UIDB 0..1 and
    ZSR 0..1 and
    GLN 0..1
* identifier[BER] only BERIdentifier
* identifier[BER] ^short = "BER (Business and Enterprise Register), BUR (Betriebs- und Unternehmensregister), REE (Registre des entreprises et des établissements), RIS (Registro delle imprese e degli stabilimenti)"
* identifier[BER] ^definition = "See [BER](http://fhir.ch/ig/ch-term/NamingSystem/ber)"
* identifier[BER] ^patternIdentifier.system = "urn:oid:2.16.756.5.45"
* identifier[UIDB] only UIDBIdentifier
* identifier[UIDB] ^short = "UIDB (Unique Identification Business), UID (Verwendung der Unternehmens-Identifikationsnummer), IDE (Utilisation du numéro d'identification des entreprises), IDI (Utilizzo del numero d'identificazione delle imprese)"
* identifier[UIDB] ^definition = "See [UIDB](http://fhir.ch/ig/ch-term/NamingSystem/uidb)"
* identifier[UIDB] ^patternIdentifier.system = "urn:oid:2.16.756.5.35"
* identifier[ZSR] only ZSRIdentifier
* identifier[ZSR] ^short = "ZSR (Zahlstellenregister), RCC (Registre des codes-créanciers), RCC (Registro dei codici creditori)"
* identifier[ZSR] ^definition = "See [ZSR/RCC](http://fhir.ch/ig/ch-term/NamingSystem/zsr)"
* identifier[ZSR] ^patternIdentifier.system = "urn:oid:2.16.756.5.30.1.123.100.2.1.1"
* identifier[GLN] only GLNIdentifier
* identifier[GLN] ^short = "Global Location Number (GLN)"
* identifier[GLN] ^definition = "See [GLN](http://fhir.ch/ig/ch-term/NamingSystem/gln)"
* identifier[GLN] ^patternIdentifier.system = "urn:oid:2.51.1.3"
* type from $DocumentEntry.healthcareFacilityTypeCode (preferred)

* telecom ^slicing.discriminator.type = #value
* telecom ^slicing.discriminator.path = "system"
* telecom ^slicing.rules = #open
* telecom.system 1..
* telecom.value 1..
* telecom contains
    email 0..* and
    phone 0..* and
    internet 0..*
* telecom[email] only CHCoreContactPointECH46Email
* telecom[phone] only CHCoreContactPointECH46Phone
* telecom[internet] only CHCoreContactPointECH46Internet
* address only CHCoreAddress


Mapping: eCH-for-CHCoreOrganization
Id: eCH
Title: "eCH Standards"
Source: CHCoreOrganization
Target: "https://www.ech.ch/"
* telecom -> "eCH-0046: Contact"
* telecom[email] -> "eCH-0046: email"
* telecom[phone] -> "eCH-0046: phone"
* telecom[internet] -> "eCH-0046: internet"


---

// File: input/fsh/profiles-resources/CHCoreOrganizationEPR.fsh

Profile: CHCoreOrganizationEPR
Parent: CHCoreOrganization
Id: ch-core-organization-epr
Title: "CH Core Organization EPR"
Description: "Definition of the Organization resource for use in the context of the electronic patient record (EPR)."

* . ^short = "CH Core Organization EPR"
* type from $DocumentEntry.healthcareFacilityTypeCode (extensible)
* address ..1

---

// File: input/fsh/profiles-resources/CHCorePatient.fsh

Profile: CHCorePatient
Parent: Patient
Id: ch-core-patient
Title: "CH Core Patient"
Description: "Base definition of the Patient resource for use in Swiss specific use cases. Relevant are definitions by the eCH-0010 V7.0 data standard mailing address and eCH-0011 V8.1 data standard pesond data.
The CH Core Patient is based upon the core FHIR Patient Resource and designed to meet the applicable patient demographic data elements in Switzerland. 
See also [BFS](https://www.bfs.admin.ch/bfs/de/home/register/personenregister/registerharmonisierung/nomenklaturen.html) for further information"

* ^purpose = "Core patient demographics which can be shared"
* obeys ch-pat-1 and ch-pat-2
* . ^short = "CH Core Patient"
* . ^definition = "The CH Core Patient is based upon the core FHIR Patient Resource and designed to meet the applicable patient demographic data elements in Switzerland. See also https://www.bfs.admin.ch/bfs/de/home/register/personenregister/registerharmonisierung/nomenklaturen.html for further information"
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains
    ChCorePatientEch11PlaceOfBirth named placeOfBirth 0..1 and
    ChCorePatientEch11PlaceOfOrigin named placeOfOrigin 0..* and
    $patient-citizenship named citizenship 0..* and
    $patient-religion named religion 0..1
* extension[placeOfBirth] ^short = "Place of birth of patient"
* extension[placeOfOrigin] ^short = "Place of origin(s) of patient"
* extension[citizenship] obeys ch-pat-3
* extension[citizenship] ^short = "Citizenship(s) of patient"
* extension[citizenship] ^definition = "The content of the country code element (if present) SHALL be selected EITHER from ValueSet ISO Country Alpha-2 http://hl7.org/fhir/ValueSet/iso3166-1-2 OR MAY be selected from ISO Country Alpha-3 Value Set http://hl7.org/fhir/ValueSet/iso3166-1-3, if the country is not specified in value Set ISO Country Alpha-2 http://hl7.org/fhir/ValueSet/iso3166-1-2."
* extension[religion] ^short = "Religion of patient"
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "$this"
* identifier ^slicing.rules = #open
* identifier contains
    EPR-SPID 0..* and
    AHVN13 0..* and
    LocalPid 0..* and
    insuranceCardNumber 0..*
* identifier[EPR-SPID] only EPRSPIDIdentifier
* identifier[EPR-SPID] ^short = "EPR-SPID"
* identifier[EPR-SPID] ^definition = "EPR-SPID: The Central Compensation Office (ZAS; CCO) assigns and manages the new patient identification number according to the EPRA (EPR-SPID), which is only linked internally in the CCO with the AHV number. It maintains the UPI identification database (Unique Personal Identifier Database), which the EPR communities may access. The law regulates how the the EPR-SPID can be used. SR 816.111 states (Art. 10 para. 3 EPDV) that communities must ensure that the EPR-SPID number cannot be not stored in document repositories or document registries."
* identifier[EPR-SPID] ^patternIdentifier.system = "urn:oid:2.16.756.5.30.1.127.3.10.3"
* identifier[AHVN13] only AHVN13Identifier
* identifier[AHVN13] ^short = "AHVN13 / NAVS13 of the patient (13 digits starting with 756, no separation points)"
* identifier[AHVN13] ^definition = "The AHVN13 / NAVS13 - (abbreviation for new thirteen-digit Social Security number) - is an administrative identifier for natural persons in Switzerland. It is issued, announced and administered by the Central Compensation Office. It is available to all organisations and communities for which there is a legal basis."
* identifier[AHVN13] ^patternIdentifier.system = "urn:oid:2.16.756.5.32"
* identifier[LocalPid] ^short = "Local patient identifier(s)"
* identifier[LocalPid] ^patternIdentifier.type = $v2-0203#MR
* identifier[LocalPid].system 1..
* identifier[LocalPid].value 1..
* identifier[insuranceCardNumber] only VEKAIdentifier
* identifier[insuranceCardNumber] ^short = "Insurance card number of the patient (20 digits)"
* identifier[insuranceCardNumber] ^definition = "Cardnumber Swiss insurance card v1"
* identifier[insuranceCardNumber] ^patternIdentifier.system = "urn:oid:2.16.756.5.30.1.123.100.1.1.1"

* name only CHCoreHumanName
* telecom ^slicing.discriminator.type = #value
* telecom ^slicing.discriminator.path = "system"
* telecom ^slicing.rules = #open
* telecom.system 1..
* telecom.value 1..
* telecom contains
    email 0..* and
    phone 0..* and
    internet 0..*
* telecom[email] only CHCoreContactPointECH46Email
* telecom[phone] only CHCoreContactPointECH46Phone
* telecom[internet] only CHCoreContactPointECH46Internet
* gender ^short = "male | female | other | unknown* (* see warning 'ch-pat-2')"
* deceased[x] only boolean or dateTime
* address only CHCoreAddress
* maritalStatus from $ch-core-maritalstatus (extensible)
* maritalStatus.extension ^slicing.discriminator.type = #value
* maritalStatus.extension ^slicing.discriminator.path = "url"
* maritalStatus.extension ^slicing.rules = #open
* maritalStatus.extension contains 
    ECH011MaritalDataSeparation named maritalDataSeparation 0..1
* maritalStatus.extension[maritalDataSeparation] ^short = "MaritalData Separation"

* contact ^slicing.discriminator.type = #value
* contact ^slicing.discriminator.path = "relationship"
* contact ^slicing.ordered = false
* contact ^slicing.rules = #open
* contact contains
    contact 0..1 and
    nameOfParent 0..* 
* contact[contact] ^short = "Contact data if it is not address of patient"
* contact[contact].relationship ..1
* contact[contact].relationship = $ech-11#contactData
* contact[contact].telecom 0..0
* contact[contact].address 1..
* contact[contact].address only CHCoreAddressECH10
* contact[nameOfParent] ^short = "Name of parent"
* contact[nameOfParent].relationship ..1
* contact[nameOfParent].relationship = $v3-RoleCode#PRN
* contact[nameOfParent].name 1..
* communication ^slicing.discriminator.type = #value
* communication ^slicing.discriminator.path = "preferred"
* communication ^slicing.ordered = false
* communication ^slicing.rules = #open
* communication contains 
    languageOfCorrespondence 0..1
* communication[languageOfCorrespondence] ^short = "Language of correspondence"
* communication[languageOfCorrespondence].preferred 1..
* communication[languageOfCorrespondence].preferred = true (exactly)



Mapping: eCH-for-CHCorePatient
Id: eCH
Title: "eCH-Standards"
Source: CHCorePatient
Target: "http://www.ech.ch/"
* extension[placeOfBirth] -> "eCH-0011: placeOfBirth BFS-322, BFS-323, BFS 324"
* extension[placeOfOrigin] -> "eCH-0011: placeOfOrigin, BFS-42"
* extension[citizenship] -> "eCH-0011: nationalityData"
* extension[religion] -> "eCH-0011: religion, BFS-711"
* name -> "eCH-0011: nameData"
* telecom -> "eCH-0046: Contact"
* telecom[email] -> "eCH-0046: email"
* telecom[phone] -> "eCH-0046: phone"
* telecom[internet] -> "eCH-0046: internet"
* gender -> "eCH-0011: sex. sexType, BFS-33, see ConceptMap http://fhir.ch/ig/ch-core/ConceptMap/sex-ech11-to-fhir"
* birthDate -> "eCH-0011: birthData, BFS-31"
* deceased[x] -> "eCH-0011: deathData, deathPeriod, dateFrom, BFS-361"
* maritalStatus -> "eCH-0011: maritalData, BFS-341, see ConceptMap http://fhir.ch/ig/ch-core/ConceptMap/maritalstatus-ech11-to-fhir"
* maritalStatus.extension[maritalDataSeparation] -> "eCH-0011: separation - Trennung BFS-343"
* contact[contact] -> "eCH-0011: contactData, BFS-61"
* contact[nameOfParent] -> "eCH-0021: nameOfParent"
* communication[languageOfCorrespondence] -> "eCH-0011: languageOfCorrespondance: de, fr, it, rm = Rhaeto-Romance, en, other languages ISO 639-1"

Mapping: v2-for-CHCorePatient
Id: v2
Title: "HL7 v2 Mapping"
Source: CHCorePatient
Target: "http://hl7.org/v2"
* telecom -> "-> as of HL7 v2.7 PID-40 (leave PID-13 and PID-14 empty)"



---

// File: input/fsh/profiles-resources/CHCorePatientEPR.fsh

Profile: CHCorePatientEPR
Parent: CHCorePatient
Id: ch-core-patient-epr
Title: "CH Core Patient EPR"
Description: "Definition of the Patient resource for use in the context of the electronic patient record (EPR). It is used to include the patient in an EPR document (referenced in Composition/DocumentReference)."
* ^purpose = "Core patient demographics which can be shared"
* . ^short = "CH Core Patient EPR (to include the patient in an EPR document)"
* obeys ch-pat-1-epr
* identifier 1..
* identifier[EPR-SPID] 0..0
* identifier[AHVN13] 0..0
* name 1..
* gender 1..
* birthDate 1..

---

// File: input/fsh/profiles-resources/CHCorePractitioner.fsh

Profile: CHCorePractitioner
Parent: Practitioner
Id: ch-core-practitioner
Title: "CH Core Practitioner"
Description: "Base definition of the Practitioner resource for use in Swiss specific use cases."

* ^purpose = "Core practitioner data which can be shared"
* obeys ch-pract-1 and ch-pract-2
* . ^short = "CH Core Practitioner"
* . ^definition = "The CH Core Practitioner is based upon the core FHIR Practitioner Resource and designed to meet the applicable practitioner demographic data elements in Switzerland. See also https://www.bfs.admin.ch/bfs/de/home/register/personenregister/registerharmonisierung/nomenklaturen.html for further information"
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "$this"
* identifier ^slicing.rules = #open
* identifier contains
    GLN 0..1 and
    ZSR 0..*
* identifier[GLN] only GLNIdentifier
* identifier[GLN] ^short = "GLN (Global Location Number)"
* identifier[GLN] ^definition = "See [GLN](http://fhir.ch/ig/ch-term/NamingSystem/gln)"
* identifier[GLN] ^patternIdentifier.system = "urn:oid:2.51.1.3"
* identifier[ZSR] only ZSRIdentifier
* identifier[ZSR] ^short = "ZSR (Zahlstellenregister), RCC (Registre des codes-créanciers), RCC (Registro dei codici creditori)"
* identifier[ZSR] ^definition = "The [ZSR/RCC](http://fhir.ch/ig/ch-term/NamingSystem/zsr) number is issued to self-employed, natural or legal persons (organisations) who can and want to work at the expense of health insurance."
* identifier[ZSR] ^patternIdentifier.system = "urn:oid:2.16.756.5.30.1.123.100.2.1.1"
* name only CHCoreHumanName
* telecom ^slicing.discriminator.type = #value
* telecom ^slicing.discriminator.path = "system"
* telecom ^slicing.rules = #open
* telecom.system 1..
* telecom.value 1..
* telecom contains
    email 0..* and
    phone 0..* and
    internet 0..*
* telecom[email] only CHCoreContactPointECH46Email
* telecom[phone] only CHCoreContactPointECH46Phone
* telecom[internet] only CHCoreContactPointECH46Internet
* address only CHCoreAddress
* gender ^short = "male | female | other"



Mapping: eCH-for-CHCorePractitioner
Id: eCH
Title: "eCH-Standards"
Source: CHCorePractitioner
Target: "http://www.ech.ch/"
* name -> "eCH-0011: nameData"
* telecom -> "eCH-0046: Contact"
* telecom[email] -> "eCH-0046: email"
* telecom[phone] -> "eCH-0046: phone"
* telecom[internet] -> "eCH-0046: internet"
* gender -> "eCH-0011: sex. sexType, BFS-33, see ConceptMap http://fhir.ch/ig/ch-core/ConceptMap/sex-ech11-to-fhir"
* birthDate -> "eCH-0011: birthData, BFS-31"
* communication -> "eCH-0011: languageOfCorrespondance: de, fr, it, rm = Rhaeto-Romance, en, other languages ISO 639-1"

---

// File: input/fsh/profiles-resources/CHCorePractitionerEPR.fsh

Profile: CHCorePractitionerEPR
Parent: CHCorePractitioner
Id: ch-core-practitioner-epr
Title: "CH Core Practitioner EPR"
Description: "Definition of the Practitioner resource for use in the context of the electronic patient record (EPR)."

* ^purpose = "Core practitioner data which can be shared"
* . ^short = "CH Core Practitioner EPR"
* identifier[GLN] 1..1
* name 1..

---

// File: input/fsh/profiles-resources/CHCorePractitionerRole.fsh

Profile: CHCorePractitionerRole
Parent: PractitionerRole
Id: ch-core-practitionerrole
Title: "CH Core PractitionerRole"
Description: "Base definition of the PractitionerRole resource for use in Swiss specific use cases."

* ^purpose = "Core PractitionerRole data which can be shared"
* . ^short = "CH Core PractitionerRole"
* practitioner only Reference(CHCorePractitioner)
* organization only Reference(CHCoreOrganization)
* code from $HCProfessional.hcProfession (preferred)
* specialty from $HCProfessional.hcSpecialisation (preferred)
* location only Reference(CHCoreLocation)

---

// File: input/fsh/profiles-resources/CHCorePractitionerRoleEpr.fsh

Profile: CHCorePractitionerRoleEpr
Parent: CHCorePractitionerRole
Id: ch-core-practitionerrole-epr
Title: "CH Core PractitionerRole EPR"
Description: "Definition of the PractitionerRole resource for use in the context of the electronic patient record (EPR)."
* ^purpose = "Core PractitionerRole EPR data which can be shared"
* practitioner only Reference(CHCorePractitionerEPR)
* organization only Reference(CHCoreOrganizationEPR)
* code from $HCProfessional.hcProfession (extensible)
* specialty from $HCProfessional.hcSpecialisation (extensible)


---

// File: input/fsh/profiles-resources/CHCoreServiceRequest.fsh

Profile: CHCoreServiceRequest
Parent: ServiceRequest
Id: ch-core-servicerequest
Title: "CH Core ServiceRequest"
Description: "Base definition of the ServiceRequest resource for use in Swiss specific use cases."
* . ^short = "CH Core ServiceRequest"
* basedOn only Reference(CarePlan or CHCoreServiceRequest or CHCoreMedicationRequest)
* category from $vs-servicerequest-category (example)
* subject only Reference(CHCorePatient or Group or CHCoreLocation or Device)
* encounter only Reference(CHCoreEncounter)
* requester only Reference(CHCorePractitioner or CHCorePractitionerRole or CHCoreOrganization or CHCorePatient or RelatedPerson or Device)
* performer only Reference(CHCorePractitioner or CHCorePractitionerRole or CHCoreOrganization or CareTeam or HealthcareService or CHCorePatient or Device or RelatedPerson)
* reasonReference only Reference(CHCoreCondition or Observation or DiagnosticReport or CHCoreDocumentReference)
* insurance only Reference(CHCoreCoverage or ClaimResponse)


---

// File: input/data/features.yml

---
feedback:
    active: true
    formUrl: https://docs.google.com/forms/d/e/1FAIpQLSeZjRSISsMmPJawlA6EbFNg1kQyu013AilssLb5AohZ2vUCDw/viewform?usp=sf_link


---

// File: input/examplesNonValid/patient/UnknownGender.fsh

Instance: GenderUnknown
InstanceOf: CHCorePatient
Usage: #example
Title: "Gender 'unknown'"
Description: "Text example to trigger contraint 'ch-pat-2'"
* name 
  * family = "Test"
  * given = "Patient"
* gender = #unknown


---

