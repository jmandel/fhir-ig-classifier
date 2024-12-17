File: repos/hl7ch_SLASH_ch-epr-term/sushi-config.yaml

# https://fshschool.org/docs/sushi/configuration/#exhaustive-example
id: ch.fhir.ig.ch-term
canonical: http://fhir.ch/ig/ch-term
url: http://fhir.ch/ig/ch-term/ImplementationGuide/ch.fhir.ig.ch-term
name: CH_TERM
title: CH Term (R4)
description: Implementation Guide for Swiss Terminology
status: active
experimental: false
date: 2024-12-17
version: 3.1.0
fhirVersion: 4.0.1
copyrightYear: 2019+
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
  ihe.formatcode.fhir: 1.3.0
  hl7.terminology: 6.1.0
  
pages:
  index.md:
    title: Home
  codesystems.md:
    title: Code Systems
  valuesets.md:
    title: Value Sets
  conceptmaps.md:
    title: Concept Maps     
  namingsystems.md:
    title: Naming Systems 
  changelog.md:
    title: Changelog

menu:
  Home: index.html
  Code Systems: codesystems.html
  Value Sets: valuesets.html
  Concept Maps: conceptmaps.html
  Naming Systems: namingsystems.html
  Artifacts: artifacts.html

FSHOnly: false

# For parameters defined by core FHIR see: 
# http://build.fhir.org/codesystem-guide-parameter-code.html.
# For parameters defined by the FHIR Tools IG  see:
# http://build.fhir.org/ig/FHIR/fhir-tools-ig/branches/master/CodeSystem-ig-parameters.html
parameters:
  excludettl: true
  path-resource:
    - input/resources/codesystem
    - input/resources/conceptmap
    - input/resources/namingsystem
    - input/resources/valueset
    - fsh-generated/resources
  allow-extensible-warnings: true
  display-warnings: true  
  special-url:
    - urn:oid:2.16.756.5.30.1.127.3.5
    - urn:oid:2.16.756.5.30.1.127.3.6
    - urn:oid:2.16.756.5.30.1.127.3.10.6
    - urn:oid:2.16.756.5.30.1.127.3.10.9
    - urn:oid:2.16.756.5.30.1.127.3.10.10
    - urn:oid:2.16.756.5.30.1.127.3.10.12
    - urn:oid:2.16.756.5.30.1.127.3.10.14
    - urn:oid:2.16.756.5.30.1.127.3.10.18
    - urn:oid:2.16.756.5.30.1.127.3.10.5
    - urn:oid:2.16.756.5.30.1.127.3.10.7
    - urn:oid:0.4.0.127.0.16.1.1.2.1 # edqm-standardterms
    - urn:oid:1.3.6.1.4.1.19376.1.9.2.1 # ihe-pharmaceuticaladvicestatuslist
    - http://fhir.ch/ig/ch-core/CodeSystem/ech-7-cantonflabbreviation
    - http://fhir.ch/ig/ch-core/CodeSystem/bfs-medstats-17-admitsource
    - http://fhir.ch/ig/ch-core/CodeSystem/bfs-medstats-18-admittype
    - http://fhir.ch/ig/ch-core/CodeSystem/bfs-medstats-19-admitrole
    - http://fhir.ch/ig/ch-core/CodeSystem/bfs-medstats-20-encounterclass
    - http://fhir.ch/ig/ch-core/CodeSystem/bfs-medstats-21-encountertype
    - http://fhir.ch/ig/ch-core/CodeSystem/bfs-medstats-25-mainguarantor
    - http://fhir.ch/ig/ch-core/CodeSystem/mainguarantor
    - http://fhir.ch/ig/ch-core/CodeSystem/bfs-medstats-27-dischargedecision
    - http://fhir.ch/ig/ch-core/CodeSystem/bfs-medstats-28-dischargedestination
    - http://fhir.ch/ig/ch-core/CodeSystem/bfs-medstats-29-dischargeencounter
    - http://fhir.ch/ig/ch-core/CodeSystem/ech-10
    - http://fhir.ch/ig/ch-core/CodeSystem/ech-11
    - http://fhir.ch/ig/ch-core/CodeSystem/ech-11-maritaldata-separation
    - http://fhir.ch/ig/ch-core/CodeSystem/ech-11-maritalstatus
    - http://fhir.ch/ig/ch-core/CodeSystem/ech-11-sex
    - http://fhir.ch/ig/ch-core/CodeSystem/ech-11-religion
    - http://fhir.ch/ig/ch-core/CodeSystem/ech-46-emailcategory
    - http://fhir.ch/ig/ch-core/CodeSystem/ech-46-internetcategory
    - http://fhir.ch/ig/ch-core/CodeSystem/ech-46-phonecategory
    - http://fhir.ch/ig/ch-core/ConceptMap/bfs-encounter-class-to-fhir
    - http://fhir.ch/ig/ch-core/ConceptMap/documententry-confidentialitycode-to-fhir
    - http://fhir.ch/ig/ch-core/ConceptMap/ech-46-emailcategory-to-fhir
    - http://fhir.ch/ig/ch-core/ConceptMap/ech-46-internetcategory-to-fhir
    - http://fhir.ch/ig/ch-core/ConceptMap/ech-46-phonecategory-to-fhir
    - http://fhir.ch/ig/ch-core/ConceptMap/maritalstatus-ech11-to-fhir
    - http://fhir.ch/ig/ch-core/ConceptMap/sex-ech11-to-fhir
    - http://fhir.ch/ig/ch-core/ValueSet/ech-7-cantonabbreviation
    - http://fhir.ch/ig/ch-core/ValueSet/ech-7-cantonflabbreviation
    - http://fhir.ch/ig/ch-core/ValueSet/bfs-medstats-17-admitsource
    - http://fhir.ch/ig/ch-core/ValueSet/bfs-medstats-18-admittype
    - http://fhir.ch/ig/ch-core/ValueSet/bfs-medstats-19-admitrole
    - http://fhir.ch/ig/ch-core/ValueSet/bfs-medstats-20-encounterclass
    - http://fhir.ch/ig/ch-core/ValueSet/bfs-medstats-21-encountertype
    - http://fhir.ch/ig/ch-core/ValueSet/mainguarantor
    - http://fhir.ch/ig/ch-core/ValueSet/bfs-medstats-27-dischargedecision
    - http://fhir.ch/ig/ch-core/ValueSet/bfs-medstats-28-dischargedestination
    - http://fhir.ch/ig/ch-core/ValueSet/bfs-medstats-29-dischargeencounter
    - http://fhir.ch/ig/ch-core/ValueSet/ch-core-encounter-participation-type
    - http://fhir.ch/ig/ch-core/ValueSet/ch-core-maritalstatus
    - http://fhir.ch/ig/ch-core/ValueSet/ch-core-religion
    - http://fhir.ch/ig/ch-core/ValueSet/ech-10-linetype
    - http://fhir.ch/ig/ch-core/ValueSet/ech-11-firstnamedatatype
    - http://fhir.ch/ig/ch-core/ValueSet/ech-11-maritaldata-separation
    - http://fhir.ch/ig/ch-core/ValueSet/ech-11-maritalstatus
    - http://fhir.ch/ig/ch-core/ValueSet/ech-11-namedatatype
    - http://fhir.ch/ig/ch-core/ValueSet/ech-11-sex
    - http://fhir.ch/ig/ch-core/ValueSet/ech-46-emailcategory
    - http://fhir.ch/ig/ch-core/ValueSet/ech-46-internetcategory
    - http://fhir.ch/ig/ch-core/ValueSet/ech-46-phonecategory
    - http://fhir.ch/ig/ch-allergyintolerance/CodeSystem/allergyintolerance-category-supplement
    - http://fhir.ch/ig/ch-allergyintolerance/CodeSystem/allergyintolerance-clinical-supplement
    - http://fhir.ch/ig/ch-allergyintolerance/CodeSystem/allergyintolerance-criticality-supplement
    - http://fhir.ch/ig/ch-allergyintolerance/CodeSystem/allergyintolerance-severity-supplement
    - http://fhir.ch/ig/ch-allergyintolerance/CodeSystem/allergyintolerance-type-supplement
    - http://fhir.ch/ig/ch-allergyintolerance/CodeSystem/allergyintolerance-verification-supplement
    - http://fhir.ch/ig/ch-allergyintolerance/ValueSet/CHAllergyIntoleranceConditionValueSet
    - http://fhir.ch/ig/ch-allergyintolerance/ValueSet/CHAllergyIntoleranceReactionManifestationValueSet
    - http://fhir.ch/ig/ch-allergyintolerance/ValueSet/CHAllergyIntoleranceReactionSubstanceValueSet
    - http://fhir.ch/ig/ch-allergyintolerance/ValueSet/CHAllergyIntoleranceValueSet
    - http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs
    - http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs
    - http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-recommendation-categories-cs
    - http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-recommendation-forecast-status-cs
    - http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-route-of-administration-vs
    - http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-targetdiseasesandillnessesundergoneforimmunization-vs
    - http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-vaccines-snomedct-vs
    - http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-vaccines-vs
    - http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-ch-vaccination-plan-immunizations-vs
    - http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-recommendation-categories-vs
    - http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-recommendation-forecast-status-vs
    - http://fhir.ch/ig/ch-vacd/ConceptMap/ch-vacd-targetdiseases-vaccines-cm
    - http://fhir.ch/ig/ch-vacd/ConceptMap/ch-vacd-vaccines-sct-sm-cm
    - http://fhir.ch/ig/ch-vacd/ConceptMap/ch-vacd-vaccines-sct-targetdiseases-cm
    - http://fhir.ch/ig/ch-vacd/ConceptMap/ch-vacd-vaccines-sm-sct-cm
    - http://fhir.ch/ig/ch-vacd/ConceptMap/ch-vacd-vaccines-targetdiseases-cm
    - http://fhir.ch/ig/ch-etoc/CodeSystem/ch-etoc-conditioncategory


---

// File: input/pagecontent/changelog.md


All significant changes to this FHIR implementation guide will be documented on this page.   

### v3.1.0 (2024-12-17)
* [#45](https://github.com/hl7ch/ch-term/issues/45): remove duplicated entries in ConceptMaps
* [#38](https://github.com/hl7ch/ch-term/issues/38): Monthly Check of CS/VS for Swissmedic Vaccines
* [#52](https://github.com/hl7ch/ch-term/issues/52): Translation CH VACD Swiss Recommendation Forecast Status
* [#54](https://github.com/hl7ch/ch-term/issues/54): 
   * CS/VS for CH AllergyIntolerance: change experimental from true to false and status from draft to active
   * ConceptMap for CH VACD: change status from draft to active 
* [#58](https://github.com/hl7ch/ch-term/issues/58): Update Vaccines CS/VS/CM with August/September 2024 vaccines
* [#59](https://github.com/hl7ch/ch-term/issues/59): Adapt translation in the vaccination VS/CS
* [#61](https://github.com/hl7ch/ch-term/issues/61): Remove wrong meta.source from all CH AllergyIntolerance ValueSets (they are not imported from Art-Decor)
* [#69](https://github.com/hl7ch/ch-term/issues/69): TargetDisease To VaccineCode Mapping (Patrick Tobler (CISTEC))
* [#70](https://github.com/hl7ch/ch-term/issues/70): Update dependencies: ihe.formatcode.fhir#1.3.0, hl7.terminology#6.1.0
* [#73](https://github.com/hl7ch/ch-term/issues/73): Fix Mapping link error in CM Snomed CT VaccineCode To SwissMedic VaccineCode
 

#### Open Issues
During the ballots 2024, the following comments came in, which will be taken into account in the further development of CH Term:

* [#41](https://github.com/hl7ch/ch-term/issues/41): Terminology for ServiceRequest Category

See also open issues on [GitHub](https://github.com/hl7ch/ch-term/issues).

### v3.0.0 (2024-05-15)
* [#23](https://github.com/hl7ch/ch-term/issues/23): Rename IG from CH EPR Term to CH EPR
   * Update section introduction on home
   * Change canonical URLs (ValueSets & ConceptMaps)
* [#24](https://github.com/hl7ch/ch-term/issues/24): Integration of terminology from CH Core and the following exchange formats:
   * [CH Core #274](https://github.com/hl7ch/ch-core/issues/274)
      * [#30](https://github.com/hl7ch/ch-term/issues/30): Add missing CS eCH-011 Religion
      * [#31](https://github.com/hl7ch/ch-term/issues/31): Replace OID
   * [CH EMED #256](https://github.com/hl7ch/ch-emed/issues/256)
   * [CH AllergyIntolerance #91](https://github.com/hl7ch/ch-allergyintolerance/issues/91)
   * [CH VACD #212](https://github.com/hl7ch/ch-vacd/issues/212)
   * [CH eTOC #82](https://github.com/hl7ch/ch-etoc/issues/82)
   * ServiceRequest Category (origin in CH LAB-Order and CH RAD-Order) (see [#39](https://github.com/hl7ch/ch-term/issues/39))
* Enabling fsh files as source
* [CH EMED #245](https://github.com/hl7ch/ch-emed/issues/245): Add EDQM Administration Method
* [CH EMED #253](https://github.com/hl7ch/ch-emed/issues/253): EDQM Standard Terms: change value for CodeSystem.content from 'complete' to 'fragment' because not all EDQM codes are included
* [CH EMED #252](https://github.com/hl7ch/ch-emed/issues/252): SCT code for {Piece} 'Piece' (UCUM)
* [CH EMED #250](https://github.com/hl7ch/ch-emed/issues/250): Add nmol 'nanomole' (UCUM) and 413568008 'Application - unit of product usage (qualifier value)' (SCT) to VS UnitCode
* [CH Core #116](https://github.com/hl7ch/ch-core/issues/116): Add CS/VS for main guarantor (Coverage.type)

### v2.0.10 (2023-12-19)
* Version 202306.1-stable
   * See [https://ehealthsuisse.art-decor.org/ch-epr-html-20230608T154548/project.html](https://ehealthsuisse.art-decor.org/ch-epr-html-20230608T154548/project.html)

### v2.0.9 (2023-06-27)
* Version 202306.1-stable
   * See [https://ehealthsuisse.art-decor.org/ch-epr-html-20230608T154548/project.html](https://ehealthsuisse.art-decor.org/ch-epr-html-20230608T154548/project.html)

### v2.0.8 (2022-12-21)
* 	Version 202212.0-stable
   * See [https://ehealthsuisse.art-decor.org/ch-epr-html-20221201T141037/project.html](https://ehealthsuisse.art-decor.org/ch-epr-html-20221201T141037/project.html)   

### v2.0.7 (2022-01-31)
* Version 202104.0-stable
   * See [http://ehealthsuisse.art-decor.org/ch-epr-html-20210416T020411/terminology.html](http://ehealthsuisse.art-decor.org/ch-epr-html-20210416T020411/terminology.html)
   * Minor update, depending on ihe.formatcode.fhir#1.0.0	

### v2.0.6 (2021-12-22)
* Version 202104.0-stable
   * See [http://ehealthsuisse.art-decor.org/ch-epr-html-20210416T020411/terminology.html](http://ehealthsuisse.art-decor.org/ch-epr-html-20210416T020411/terminology.html)
   * Minor update, see also [#6](https://github.com/hl7ch/ch-term/issues/6)	     

### v2.0.5 (2021-04-23)
* Version 202104.0-stable
   * See [http://ehealthsuisse.art-decor.org/ch-epr-html-20210416T020411/terminology.html](http://ehealthsuisse.art-decor.org/ch-epr-html-20210416T020411/terminology.html)    

### v2.0.4 (2020-06-22)
* Version 202004.1-stable
   * See [http://ehealthsuisse.art-decor.org/ch-epr-html-20200622T124207/project.html#_20200622124207](http://ehealthsuisse.art-decor.org/ch-epr-html-20200622T124207/project.html#_20200622124207)

### v2.0.3 (2020-04-23)
* Version 202004.0-stable
   * See [http://ehealthsuisse.art-decor.org/ch-epr-html-20200423T125505/project.html#_20200423125505](http://ehealthsuisse.art-decor.org/ch-epr-html-20200423T125505/project.html#_20200423125505)   

### v2.0.2 (2020-02-26)
* Version 201907.2-stable
   * See [http://ehealthsuisse.art-decor.org/ch-epr-html-20200226T180620/project.html#_20200226180620](http://ehealthsuisse.art-decor.org/ch-epr-html-20200226T180620/project.html#_20200226180620)  

### v2.0.1 (2019-11-11)
* EPR Annex 3 and 9, Version 201907.1-stable	
* Update to FHIR version 4.0.1

### v2.0.0 (2019-09-13)
* EPR Annex 3 and 9, Version 201907.0-stable	     


---

// File: input/pagecontent/codesystems.md

  
{% include list-simple-codesystems.xhtml %}


---

// File: input/pagecontent/conceptmaps.md


{% include list-simple-conceptmaps.xhtml %}


---

// File: input/pagecontent/index.md

### Introduction
This FHIR® implementation guide contains terminology that is used in Switzerland for the core profiles, various exchange formats and also in the context of the Swiss electronic patient record (EPR). See also [fhir.ch](https://fhir.ch/).

The EPR metadata is specified in the Annexes of the Swiss EPR [FDHA Ordinance](https://www.bag.admin.ch/bag/de/home/gesetze-und-bewilligungen/gesetzgebung/gesetzgebung-mensch-gesundheit/gesetzgebung-elektronisches-patientendossier.html) on the electronic patient record in Switzerland.    
The EPR artifacts are based on the [CH-EPR](http://ehealthsuisse.art-decor.org/index.php?prefix=ch-epr-) [ART-DECOR](https://www.art-decor.org/mediawiki/index.php/Main_Page) project which has been [published by eHealth Suisse](http://ehealthsuisse.art-decor.org/).

<div markdown="1" class="stu-note">

[Significant changes, open and closed issues](changelog.html)

</div>

**Download**: You can download this implementation guide in [npm format](https://confluence.hl7.org/display/FHIR/NPM+Package+Specification) from [here](package.tgz).

### Scope
This implementation guide contains the Swiss terminology defined via FHIR processable artifacts:
* [Code Systems](codesystems.html)
* [Value Sets](valuesets.html)
* [Concept Maps](conceptmaps.html)
* [Naming Systems](namingsystems.html)

### Collaboration
This implementation guide is the product of collaborative work undertaken with participants from:

* [Swiss FHIR Implementers Community](https://www.fhir.ch)
* [HL7 Switzerland](https://www.hl7.ch)
* [eHealth Suisse](https://www.e-health-suisse.ch/startseite.html)

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

### Disclaimer
HL7 SWITZERLAND PROVIDES THE DATA HEREUNDER AS IS WITHOUT WARRANTY WHATSOEVER. HL7 SWITZERLAND DOES NOT WARRANT OR REPRESENT THAT ANY DATA PROVIDED IN THIS IMPLEMENTATION GUIDE IS CORRECT. IT IS PROVIDED WITHOUT ANY WARRANTY WHATSOEVER, WHETHER EXPRESS, IMPLIED OR OTHERWISE, REGARDING ITS ACCURACY, COMPLETENESS NONINFRINGEMENT OF INTELLECTUAL PROPERTY. USE AT YOUR OWN RISK!


---

// File: input/pagecontent/namingsystems.md


{% include list-simple-namingsystems.xhtml %}


---

// File: input/pagecontent/valuesets.md


{% include list-simple-valuesets.xhtml %}


---

// File: input/fsh/ALIASES.fsh

Alias: $v3-substanceAdminSubstitution =                 http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution
Alias: $sct =                                           http://snomed.info/sct

Alias: $edqm =                                          http://standardterms.edqm.eu
Alias: $ch-vacd-swissmedic-cs =                         http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs
Alias: $ch-vacd-myvaccines-cs =                         http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs
Alias: $ch-vacd-recommendation-categories-cs =          http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-recommendation-categories-cs
Alias: $ch-vacd-recommendation-forecast-status-cs =     http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-recommendation-forecast-status-cs
Alias: $bfs-medstats-25-mainguarantor =                 http://fhir.ch/ig/ch-core/CodeSystem/bfs-medstats-25-mainguarantor
Alias: $mainguarantor =                                 http://fhir.ch/ig/ch-core/CodeSystem/mainguarantor


---

// File: input/fsh/codesystem/ch-etoc-conditioncategory.fsh

CodeSystem: ChEtocConditionCategory
Id: ch-etoc-conditioncategory
Title: "Condition Category"
Description: "Additional codes for condition category."
* ^url = "http://fhir.ch/ig/ch-etoc/CodeSystem/ch-etoc-conditioncategory"
* ^experimental = false
* ^caseSensitive = true
* #illness "Illness"
* #procedure "Procedure"
* #primary-diagnosis "Primary Diagnosis"
* #secondary-diagnosis "Secondary Diagnosis"
* #social-history-condition "Social History"
* #functional-status-condition "Functional Status"


---

// File: input/fsh/codesystem/ch-vacd-myvaccines-cs.fsh

CodeSystem: OldSwissVaccinesCodesystem
Id: ch-vacd-myvaccines-cs
Title: "CH VACD Old Swiss Vaccines"
Description: "Old vaccines codes earlier available in Switzerland."
* ^url = "http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs"
* ^meta.source = "http://myvaccines.ch"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/resource-effectivePeriod"
* ^extension.valuePeriod.start = "2021-01-24T00:00:00+01:00"
* ^identifier.use = #official
* ^identifier.system = "http://fhir.ch/ig/ch-vacd/cs/vaccines-old"
* ^identifier.value = "old-vaccines"
* ^version = "2021-01-24T00:00:00"
* ^status = #active
* ^experimental = false
* ^publisher = "eHealth Suisse"
* ^contact.name = "eHealth Suisse"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "www.e-health-suisse.ch"
* ^content = #complete
* ^caseSensitive = true
* #14 "MoRu-Viraten"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "MoRu-Viraten"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "MoRu-Viraten"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "MoRu-Viraten"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "MoRu-Viraten"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "MoRu-Viraten"
* #17 "Poliomyelitis Impfstoff Berna"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Poliomyelitis Impfstoff Berna"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Poliomyelitis vaccin Berna"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Poliomyelitis vaccino Berna"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Poliomyelitis vaccin Berna"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Poliomyelitis vaccine Berna"
* #23 "Triviraten"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Triviraten"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Triviraten"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Triviraten"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Triviraten"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Triviraten"
* #25 "Vivotif L"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Vivotif L"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Vivotif L"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Vivotif L"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Vivotif L"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Vivotif L"
* #35 "Infanrix DTPa"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Infanrix DTPa"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Infanrix DTPa"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Infanrix DTPa"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Infanrix DTPa"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Infanrix DTPa"
* #39 "Infanrix Penta"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Infanrix Penta"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Infanrix Penta"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Infanrix Penta"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Infanrix Penta"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Infanrix Penta"
* #47 "Attenuvax"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Attenuvax"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Attenuvax"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Attenuvax"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Attenuvax"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Attenuvax"
* #48 "BCG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "BCG"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "BCG"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "BCG"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "BCG"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "BCG"
* #53 "HBVAXPRO 5"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "HBVAXPRO 5"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "HBVAXPRO 5"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "HBVAXPRO 5"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "HBVAXPRO 5"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "HBVAXPRO 5"
* #55 "Meningokokken-Impfstoff A+C Mérieux"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Meningokokken-Impfstoff A+C Mérieux"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Vaccin méningococcique A+C Mérieux"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Vaccino meningococcico A+C Mérieux"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccin da meningokokken A+C Mérieux"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Meningococcal vaccine A+C Mérieux"
* #56 "Meruvax"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Meruvax"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Meruvax"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Meruvax"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Meruvax"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Meruvax"
* #73 "Infanrix DTPa+Hib"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Infanrix DTPa+Hib"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Infanrix DTPa+Hib"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Infanrix DTPa+Hib"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Infanrix DTPa+Hib"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Infanrix DTPa+Hib"
* #74 "Twinrix 360/10"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Twinrix 360/10"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Twinrix 360/10"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Twinrix 360/10"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Twinrix 360/10"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Twinrix 360/10"
* #75 "Pluserix"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Pluserix"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Pluserix"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Pluserix"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Pluserix"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Pluserix"
* #76 "Acel Immune"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Acel Immune"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Acel Immune"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Acel Immune"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Acel Immune"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Acel Immune"
* #77 "Acel P"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Acel P"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Acel P"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Acel P"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Acel P"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Acel P"
* #78 "Act-Hib"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Act-Hib"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Act-Hib"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Act-Hib"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Act-Hib"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Act-Hib"
* #79 "Anatoxal DiTePer"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Anatoxal DiTePer"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Anatoxal DiTePer"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Anatoxal DiTePer"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Anatoxal DiTePer"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Anatoxal DiTePer"
* #80 "Anatoxal DiTe Erwachsene"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Anatoxal DiTe Erwachsene"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Anatoxal DiTe adultes"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Anatoxal DiTe adulti"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Anatoxal DiTe persunas creschidas"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Anatoxal DiTe adults"
* #81 "Anatoxal DiTe N Erwachsene"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Anatoxal DiTe N Erwachsene"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Anatoxal DiTe N adultes"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Anatoxal DiTe N adulti"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Anatoxal DiTe N persunas creschidas"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Anatoxal DiTe N adults"
* #82 "Anatoxal Di"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Anatoxal Di"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Anatoxal Di"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Anatoxal Di"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Anatoxal Di"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Anatoxal Di"
* #83 "Anatoxal Te"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Anatoxal Te"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Anatoxal Te"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Anatoxal Te"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Anatoxal Te"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Anatoxal Te"
* #84 "Anatoxal Te N"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Anatoxal Te N"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Anatoxal Te N"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Anatoxal Te N"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Anatoxal Te N"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Anatoxal Te N"
* #86 "Arilvax"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Arilvax"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Arilvax"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Arilvax"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Arilvax"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Arilvax"
* #87 "BCG Vaccin Mérieux"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "BCG Vaccin Mérieux"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "BCG Vaccin Mérieux"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "BCG Vaccin Mérieux"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "BCG Vaccin Mérieux"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "BCG Vaccin Mérieux"
* #88 "Biviraten"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Biviraten"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Biviraten"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Biviraten"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Biviraten"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Biviraten"
* #91 "Ervevax"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Ervevax"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Ervevax"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Ervevax"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Ervevax"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Ervevax"
* #92 "HibTiter"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "HibTiter"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "HibTiter"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "HibTiter"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "HibTiter"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "HibTiter"
* #93 "Infanrix DTPa-HBV"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Infanrix DTPa-HBV"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Infanrix DTPa-HBV"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Infanrix DTPa-HBV"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Infanrix DTPa-HBV"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Infanrix DTPa-HBV"
* #94 "Lyssavac Berna"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Lyssavac Berna"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Lyssavac Berna"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Lyssavac Berna"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Lyssavac Berna"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Lyssavac Berna"
* #95 "Vaccin méningococcique A+C Mérieux"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Vaccin méningococcique A+C Mérieux"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Vaccin méningococcique A+C Mérieux"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Vaccin méningococcique A+C Mérieux"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Vaccin méningococcique A+C Mérieux"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Vaccin méningococcique A+C Mérieux"
* #96 "MM Vax"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "MM Vax"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "MM Vax"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "MM Vax"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "MM Vax"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "MM Vax"
* #97 "Mumaten"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Mumaten"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Mumaten"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Mumaten"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Mumaten"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Mumaten"
* #98 "Pedvax"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Pedvax"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Pedvax"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Pedvax"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Pedvax"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Pedvax"
* #99 "Pentacoq"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Pentacoq"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Pentacoq"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Pentacoq"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Pentacoq"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Pentacoq"
* #100 "Pnu-Immune"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Pnu-Immune"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Pnu-Immune"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Pnu-Immune"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Pnu-Immune"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Pnu-Immune"
* #101 "Polio Salk"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Polio Salk"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Polio Salk"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Polio Salk"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Polio Salk"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Polio Salk"
* #102 "Polio Sabin"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Polio Sabin"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Polio Sabin"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Polio Sabin"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Polio Sabin"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Polio Sabin"
* #103 "Poloral"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Poloral"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Poloral"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Poloral"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Poloral"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Poloral"
* #106 "Tetracoq"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Tetracoq"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Tetracoq"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Tetracoq"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Tetracoq"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Tetracoq"
* #107 "Tetramune"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Tetramune"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Tetramune"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Tetramune"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Tetramune"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Tetramune"
* #110 "Vaqta"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Vaqta"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Vaqta"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Vaqta"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Vaqta"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Vaqta"
* #111 "Rubeaten"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Rubeaten"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Rubeaten"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Rubeaten"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Rubeaten"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Rubeaten"
* #112 "Rudivax"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Rudivax"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Rudivax"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Rudivax"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Rudivax"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Rudivax"
* #115 "Havrix 360"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Havrix 360"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Havrix 360"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Havrix 360"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Havrix 360"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Havrix 360"
* #117 "Almevax"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Almevax"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Almevax"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Almevax"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Almevax"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Almevax"
* #118 "Hevac B"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Hevac B"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Hevac B"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Hevac B"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Hevac B"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Hevac B"
* #119 "MMR-I"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "MMR-I"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "MMR-I"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "MMR-I"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "MMR-I"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "MMR-I"
* #120 "Moruman"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Moruman"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Moruman"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Moruman"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Moruman"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Moruman"
* #121 "Rimparix"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Rimparix"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Rimparix"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Rimparix"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Rimparix"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Rimparix"
* #122 "Rubevac"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Rubevac"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Rubevac"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Rubevac"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Rubevac"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Rubevac"
* #123 "Trimovax"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Trimovax"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Trimovax"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Trimovax"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Trimovax"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Trimovax"
* #126 "Ditanrix pediatric"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Ditanrix pediatric"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Ditanrix pediatric"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Ditanrix pediatric"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Ditanrix pediatric"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Ditanrix pediatric"
* #127 "Eolarix"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Eolarix"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Eolarix"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Eolarix"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Eolarix"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Eolarix"
* #128 "FSME-Immun Injekt"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "FSME-Immun Injekt"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "FSME-Immun Inject"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "FSME-Immun Iniettare"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "FSME-Immun inject"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "FSME-Immun Inject"
* #133 "ProHibit"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "ProHibit"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "ProHibit"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "ProHibit"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "ProHibit"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "ProHibit"
* #134 "Anatoxal DiTe Kinder"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Anatoxal DiTe Kinder"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Anatoxal DiTe enfants"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Anatoxal DiTe bambini"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Anatoxal DiTe uffants"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Anatoxal DiTe children"
* #136 "Celtura"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Celtura"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Celtura"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Celtura"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Celtura"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Celtura"
* #137 "Focetria"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Focetria"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Focetria"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Focetria"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Focetria"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Focetria"
* #138 "K1, K2, K3"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "K1, K2, K3"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "K1, K2, K3"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "K1, K2, K3"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "K1, K2, K3"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "K1, K2, K3"
* #139 "Koprowski"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Koprowski"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Koprowski"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Koprowski"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Koprowski"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Koprowski"
* #141 "Pandemrix"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Pandemrix"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Pandemrix"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Pandemrix"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Pandemrix"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Pandemrix"
* #142 "Prohibit DTP"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Prohibit DTP"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Prohibit DTP"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Prohibit DTP"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Prohibit DTP"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Prohibit DTP"
* #143 "TAB oral"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "TAB oral"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "TAB oral"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "TAB oral"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "TAB oral"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "TAB oral"
* #144 "Variola"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Variola"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Variola"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Variola"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Variola"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Variola"
* #147 "Polio Koprowski (K1-K3)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Polio Koprowski (K1-K3)"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Polio Koprowski (K1-K3)"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Polio Koprowski (K1-K3)"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Polio Koprowski (K1-K3)"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Polio Koprowski (K1-K3)"
* #148 "Polio Lilly"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Polio Lilly"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Polio Lilly"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Polio Lilly"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Polio Lilly"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Polio Lilly"
* #151 "Di Anatoxal"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Di Anatoxal"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Di Anatoxal"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Di Anatoxal"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Di Anatoxal"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Di Anatoxal"
* #154 "DiTe Anatoxal Kinder / Enfants"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "DiTe Anatoxal Kinder"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "DiTe Anatoxal enfants"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "DiTe Anatoxal bambini"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "DiTe Anatoxal uffants"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "DiTe Anatoxal children"
* #155 "DiTePer Anatoxal"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "DiTePer Anatoxal"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "DiTePer Anatoxal"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "DiTePer Anatoxal"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "DiTePer Anatoxal"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "DiTePer Anatoxal"
* #162 "HBVAX DNA 5"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "HBVAX DNA 5"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "HBVAX DNA 5"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "HBVAX DNA 5"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "HBVAX DNA 5"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "HBVAX DNA 5"
* #163 "HBVAX DNA 10"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "HBVAX DNA 10"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "HBVAX DNA 10"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "HBVAX DNA 10"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "HBVAX DNA 10"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "HBVAX DNA 10"
* #164 "HBVAX DNA 40"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "HBVAX DNA 40"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "HBVAX DNA 40"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "HBVAX DNA 40"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "HBVAX DNA 40"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "HBVAX DNA 40"
* #165 "Havrix junior"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Havrix junior"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Havrix junior"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Havrix junior"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Havrix junior"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Havrix junior"
* #166 "Infanrix"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Infanrix"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Infanrix"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Infanrix"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Infanrix"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Infanrix"
* #168 "Tanrix"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Tanrix"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Tanrix"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Tanrix"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Tanrix"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Tanrix"
* #169 "Vaccin variole"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Vaccin variole"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Vaccin variole"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Vaccin variole"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Vaccin variole"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Vaccin variole"
* #170 "Engerix-B 40"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Engerix-B 40"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Engerix-B 40"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Engerix-B 40"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Engerix-B 40"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Engerix-B 40"
* #172 "Hepavax"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Hepavax"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Hepavax"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Hepavax"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Hepavax"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Hepavax"
* #16 "Orochol E"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Orochol E"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Orochol E"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Orochol E"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Orochol E"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Orochol E"


---

// File: input/fsh/codesystem/ch-vacd-recommendation-categories-cs.fsh

CodeSystem: SwissImmunizationRecommendationCategoriesCodesystem
Id: ch-vacd-recommendation-categories-cs
Title: "CH VACD Swiss Immunization Recommendation Categories"
Description: "Immunization recommendation categories available in Switzerland."
* ^url = "http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-recommendation-categories-cs"
* ^meta.source = "http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-recommendation-categories-vs"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/resource-effectivePeriod"
* ^extension.valuePeriod.start = "2021-01-24T00:00:00+01:00"
* ^identifier.use = #official
* ^identifier.system = "http://art-decor.org/ns/oids/vs"
* ^identifier.value = "urn:oid:2.16.756.5.30.1.127.3.3.4"
* ^version = "2021-01-24T00:00:00"
* ^status = #active
* ^experimental = false
* ^publisher = "eHealth Suisse"
* ^contact.name = "eHealth Suisse"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "www.e-health-suisse.ch"
* ^content = #complete
* ^caseSensitive = true
* #41501 "Empfohlene Basisimpfungen"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Empfohlene Basisimpfungen"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Empfohlene Basisimpfungen"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Empfohlene Basisimpfungen"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Empfohlene Basisimpfungen"
* #41502 "Empfohlene ergänzende Impfungen"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Empfohlene ergänzende Impfungen"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Empfohlene ergänzende Impfungen"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Empfohlene ergänzende Impfungen"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Empfohlene ergänzende Impfungen"
* #41503 "Empfohlene Impfungen für Risikogruppen"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Empfohlene Impfungen für Risikogruppen"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Empfohlene Impfungen für Risikogruppen"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Empfohlene Impfungen für Risikogruppen"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Empfohlene Impfungen für Risikogruppen"
* #41504 "Impfungen ohne Empfehlungen"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Impfungen ohne Empfehlungen"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Impfungen ohne Empfehlungen"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Impfungen ohne Empfehlungen"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Impfungen ohne Empfehlungen"

---

// File: input/fsh/codesystem/ch-vacd-recommendation-forecast-status-cs.fsh

CodeSystem: SwissRecommendationForecastStatusCodesystem
Id: ch-vacd-recommendation-forecast-status-cs
Title: "CH VACD Swiss Recommendation Forecast Status"
Description: "Immunization recommendation forecast status values."
* ^url = "http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-recommendation-forecast-status-cs"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/resource-effectivePeriod"
* ^extension.valuePeriod.start = "2022-04-28T00:00:00+01:00"
* ^identifier.use = #official
* ^identifier.system = "http://fhir.ch/ig/ch-vacd/cs/entry-conflict"
* ^identifier.value = "entry-conflict"
* ^status = #active
* ^experimental = false
* ^publisher = "eHealth Suisse"
* ^contact.name = "eHealth Suisse"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "www.e-health-suisse.ch"
* ^content = #complete
* ^caseSensitive = true

* #due "Due"
  * ^definition = "The patient is due for their next vaccination."
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Die nächste Impfung des Patienten/der Patientin ist fällig."
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Le patient doit recevoir son prochain vaccin."
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Il paziente deve effettuare la prossima vaccinazione."
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "La pazienta sto survegnir la proxima vaccinaziun."
  * ^designation[+].language = #en-US
  * ^designation[=].value = "The patient is due for their next vaccination."


* #overdue "Overdue"
  * ^definition = "The patient is considered overdue for their next vaccination."
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Die nächste Impfung des Patienten/der Patientin ist überfällig."
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Le patient est en retard pour son prochain vaccin."
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Il paziente è in ritardo per la prossima vaccinazione."
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "La pazienta vegn considerada sco danvanz per sia proxima vaccinaziun."
  * ^designation[+].language = #en-US
  * ^designation[=].value = "The patient is considered overdue for their next vaccination."

* #immune "Immune"
  * ^definition = "The patient is immune to the target disease and further immunization against the disease is not likely to provide benefit."
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Der Patient/die Patientin ist gegen die Zielkrankheit immun, und eine weitere Impfung dagegen würde wahrscheinlich keinen Nutzen bringen."
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Le patient est immunisé contre la maladie cible, et une immunisation supplémentaire n’est pas susceptible d’apporter de bénéfice."
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Il paziente è immune alla malattia target ed è improbabile che un'ulteriore immunizzazione apporti benefici."
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Il pazient è immun cunter la malsogna da mira, ed in'ulteriura immunisaziun cunter la malsogna na po betg chaschunar avantatgs."
  * ^designation[+].language = #en-US
  * ^designation[=].value = "The patient is immune to the target disease and further immunization against the disease is not likely to provide benefit."

* #consultadvise "Consult Advice"
  * ^definition = "The patient may be contraindicated but get health care advice."
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Der Patient/die Patientin kann eine Kontraindikation aufweisen, erhält aber eine Gesundheitsberatung."
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Le patient pourrait présenter une contre-indication. Demandez conseil à un spécialiste."
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Il paziente potrebbe avere una controindicazione, ma riceve una consulenza sanitaria."
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Il pazient po s'annunziar, ma po sa laschar cussegliar en il sectur da sanadad."
  * ^designation[+].language = #en-US
  * ^designation[=].value = "The patient may be contraindicated but get health care advice."

* #indicated "Indicated"
  * ^definition = "The patient is indicated for further doses."
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Für den Patienten/die Patientin sind weitere Dosen indiziert."
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Des doses supplémentaires sont indiquées pour le patient."
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Il paziente può ricevere ulteriori dosi."
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Il pazient è inditgà per ulteriuras dosas."
  * ^designation[+].language = #en-US
  * ^designation[=].value = "The patient is indicated for further doses."


* #contraindicated "Contraindicated"
  * ^definition = "The patient is contraindicated for further doses."
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Für den Patienten/die Patientin sind weitere Dosen kontraindiziert."
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Des doses supplémentaires sont contre-indiquées pour le patient."
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Per il paziente è controdindicato  ricevere ulteriori dosi."
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Tar ulteriuras dosas vegn la pazienta u il pazient annunzià fauss."
  * ^designation[+].language = #en-US
  * ^designation[=].value = "The patient is contraindicated for further doses."

* #complete "Complete"
  * ^definition = "The patient is fully protected and no further doses are recommended."
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Der Patient/die Patientin ist vollständig geschützt, und es werden keine weiteren Dosen empfohlen."
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Le patient bénéficie d’une protection complète, et aucune autre dose n’est recommandée."
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Il paziente dispone di una protezione completa e non sono raccomandate ulteriori dosi."
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Il pazient è protegì cumplainamain ed i na vegnan recumandadas naginas ulteriuras dosas."
  * ^designation[+].language = #en-US
  * ^designation[=].value = "The patient is fully protected and no further doses are recommended."

* #notrelevant "NotRelevant"
  * ^definition = "There is no relevance for this patient."
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Die Impfung ist für den Patienten/die Patientin nicht relevant."
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Cette vaccination n’est pas pertinente pour ce patient."
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Non rilevante per questo paziente."
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Per quest pazient n'è nagina relevanza."
  * ^designation[+].language = #en-US
  * ^designation[=].value = "There is no relevance for this patient."


---

// File: input/fsh/codesystem/ch-vacd-swissmedic-cs.fsh

CodeSystem: SwissMedicAuthorizedVaccinesCodesystem
Id: ch-vacd-swissmedic-cs
Title: "CH VACD Swissmedic Authorized Vaccines"
Description: "The vaccines swissmedic has given an autorization number."
* ^url = "http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs"
* ^meta.source = "https://www.swissmedic.ch"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/resource-effectivePeriod"
* ^extension.valuePeriod.start = "2021-01-24T00:00:00+01:00"
* ^identifier.use = #official
* ^identifier.system = "http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs"
* ^identifier.value = "authorized-vaccines"
* ^version = "2021-01-24T00:00:00"
* ^status = #active
* ^experimental = false
* ^publisher = "eHealth Suisse"
* ^contact.name = "eHealth Suisse"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "www.e-health-suisse.ch"
* ^content = #complete
* ^caseSensitive = true
//683	01	FSME-Immun 0.25 ml Junior, Suspension zur intramuskulären Injektion	Pfizer AG	B	10.10.2003	10.10.2003	09.10.2023	J07BA01
* #683 "FSME-Immun 0.25 ml Junior"
  * ^definition = "FSME-Immun 0.25 ml Junior, Suspension zur intramuskulären Injektion	Pfizer AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "FSME-Immun 0.25 ml Junior"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "FSME-Immun 0.25 ml Junior"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "FSME-Immun 0.25 ml Junior"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "FSME-Immun 0.25 ml Junior"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "FSME-Immun 0.25 ml Junior"
//450	02	FSME-Immun CC, Suspension zur intramuskulären Injektion	Pfizer AG	B	06.08.1979	05.11.2001	unbegrenzt	J07BA01
* #450 "FSME-Immun CC"
  * ^definition = "FSME-Immun CC, Suspension zur intramuskulären Injektion	Pfizer AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "FSME-Immun CC"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "FSME-Immun CC"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "FSME-Immun CC"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "FSME-Immun CC"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "FSME-Immun CC"
//656	01	NeisVac-C, Injektionssuspension	Pfizer AG	B	04.06.2002	04.06.2002	09.06.2022	J07AH07
* #656 "NeisVac-C"
  * ^definition = "NeisVac-C, Injektionssuspension	Pfizer AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "NeisVac-C"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "NeisVac-C"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "NeisVac-C"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "NeisVac-C"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "NeisVac-C"
//627	01	Encepur N, Injektionssuspension	Bavarian Nordic Switzerland AG	B	08.11.1999	12.04.2007	31.03.2022	J07BA01
* #627 "Encepur N"
  * ^definition = "Encepur N, Injektionssuspension Bavarian Nordic Switzerland AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Encepur N"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Encepur N"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Encepur N"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Encepur N"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Encepur N"
//628	01	Encepur N Kinder, Injektionssuspension	Bavarian Nordic Switzerland AG	B	20.04.1998	21.11.2007	unbegrenzt	J07BA01
* #628 "Encepur N Kinder / Enfants"
  * ^definition = "Encepur N Kinder, Injektionssuspension	Bavarian Nordic Switzerland AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Encepur N Kinder"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Encepur N enfants"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Encepur N bambini"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Encepur N uffants"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Encepur N childrean"
* #572 "Epaxal"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Epaxal"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Epaxal"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Epaxal"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Epaxal"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Epaxal"
* #544 "Heprecomb"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Heprecomb"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Heprecomb"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Heprecomb"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Heprecomb"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Heprecomb"
* #642 "Heprecomb Kinder"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Heprecomb Kinder"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Heprecomb enfants"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Heprecomb bambini"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Heprecomb uffants"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Heprecomb childrean"
* #614 "Inflexal V"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Inflexal V"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Inflexal V"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Inflexal V"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Inflexal V"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Inflexal V"
* #657 "Menjugate"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Menjugate"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Menjugate"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Menjugate"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Menjugate"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Menjugate"
* #533 "Moraten"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Moraten"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Moraten"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Moraten"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Moraten"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Moraten"
* #555 "Orochol"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Orochol"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Orochol"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Orochol"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Orochol"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Orochol"
* #685 "Rabipur"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Rabipur"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Rabipur"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Rabipur"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Rabipur"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Rabipur"
* #702 "Td-pur"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Td-pur"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Td-pur"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Td-pur"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Td-pur"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Td-pur"
* #686 "Td-Virelon"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Td-Virelon"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Td-Virelon"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Td-Virelon"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Td-Virelon"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Td-Virelon"
* #467 "Vivotif"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Vivotif"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Vivotif"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Vivotif"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Vivotif"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Vivotif"
* #637 "Boostrix"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Boostrix"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Boostrix"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Boostrix"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Boostrix"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Boostrix"
* #681 "Boostrix Polio"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Boostrix Polio"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Boostrix Polio"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Boostrix Polio"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Boostrix Polio"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Boostrix Polio"
* #567 "Ditanrix"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Ditanrix"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Ditanrix"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Ditanrix"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Ditanrix"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Ditanrix"
//551	03	Engerix-B 10, Injektionssuspension	GlaxoSmithKline AG	B	04.10.1989	01.05.2002	30.09.2022	J07BC01
* #551 "Engerix-B 10"
  * ^definition = "Engerix-B 10, Injektionssuspension	GlaxoSmithKline AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Engerix-B 10"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Engerix-B 10"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Engerix-B 10"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Engerix-B 10"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Engerix-B 10"
//534	01	Engerix-B 20, Injektionssuspension	GlaxoSmithKline AG	B	03.12.1986	03.12.1986	31.03.2022	J07BC01
* #534 "Engerix-B 20"
  * ^definition = "Engerix-B 20, Injektionssuspension	GlaxoSmithKline AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Engerix-B 20"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Engerix-B 20"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Engerix-B 20"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Engerix-B 20"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Engerix-B 20"
* #583 "Fluarix"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Fluarix"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Fluarix"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Fluarix"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Fluarix"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Fluarix"
* #558 "Havrix 1440"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Havrix 1440"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Havrix 1440"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Havrix 1440"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Havrix 1440"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Havrix 1440"
* #599 "Havrix 720"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Havrix 720"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Havrix 720"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Havrix 720"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Havrix 720"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Havrix 720"
* #603 "Hiberix"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Hiberix"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Hiberix"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Hiberix"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Hiberix"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Hiberix"
* #638 "Infanrix DTPa-IPV"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Infanrix DTPa-IPV"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Infanrix DTPa-IPV"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Infanrix DTPa-IPV"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Infanrix DTPa-IPV"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Infanrix DTPa-IPV"
* #619 "Infanrix DTPa-IPV+Hib"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Infanrix DTPa-IPV+Hib"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Infanrix DTPa-IPV+Hib"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Infanrix DTPa-IPV+Hib"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Infanrix DTPa-IPV+Hib"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Infanrix DTPa-IPV+Hib"
* #640 "Infanrix hexa"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Infanrix hexa"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Infanrix hexa"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Infanrix hexa"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Infanrix hexa"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Infanrix hexa"
* #652 "Mencevax ACWY"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Mencevax ACWY"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Mencevax ACWY"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Mencevax ACWY"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Mencevax ACWY"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Mencevax ACWY"
* #669 "Poliorix"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Poliorix"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Poliorix"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Poliorix"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Poliorix"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Poliorix"
//615	01	Priorix, Pulver und Lösungsmittel zur Herstellung einer Injektionslösung	GlaxoSmithKline AG	B	22.12.1998	22.12.1998	21.12.2023	J07BD52
* #615 "Priorix"
  * ^definition = "Priorix, Pulver und Lösungsmittel zur Herstellung einer Injektionslösung	GlaxoSmithKline AG	B	22.12.1998	22.12.1998	21.12.2023	J07BD52"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Priorix"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Priorix"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Priorix"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Priorix"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Priorix"
* #592 "Twinrix 720/20"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Twinrix 720/20"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Twinrix 720/20"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Twinrix 720/20"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Twinrix 720/20"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Twinrix 720/20"
* #585 "Varilrix"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Varilrix"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Varilrix"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Varilrix"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Varilrix"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Varilrix"
* #528 "Gen H-B-Vax 10"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Gen H-B-Vax 10"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Gen H-B-Vax 10"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Gen H-B-Vax 10"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Gen H-B-Vax 10"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Gen H-B-Vax 10"
//545	01	HBVAXPRO 40, Injektionssuspension	MSD Merck Sharp & Dohme AG	B	18.04.1988	18.04.1988	unbegrenzt	J07BC01
* #545 "HBVAXPRO 40"
  * ^definition = "HBVAXPRO 40, Injektionssuspension MSD Merck Sharp & Dohme AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "HBVAXPRO 40"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "HBVAXPRO 40"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "HBVAXPRO 40"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "HBVAXPRO 40"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "HBVAXPRO 40"
* #610 "Gen H-B-Vax 5"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Gen H-B-Vax 5"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Gen H-B-Vax 5"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Gen H-B-Vax 5"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Gen H-B-Vax 5"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Gen H-B-Vax 5"
//663	01	HBVAXPRO 10, Injektionssuspension	MSD Merck Sharp & Dohme AG	B	20.08.2002	20.08.2002	13.08.2022	J07BC01
* #663 "HBVAXPRO 10"
  * ^definition = "HBVAXPRO 10, Injektionssuspension MSD Merck Sharp & Dohme AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "HBVAXPRO 10"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "HBVAXPRO 10"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "HBVAXPRO 10"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "HBVAXPRO 10"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "HBVAXPRO 10"
* #268 "MMR-II"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "MMR-II"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "MMR-II"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "MMR-II"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "MMR-II"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "MMR-II"
* #247 "Mumpsvax"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Mumpsvax"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Mumpsvax"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Mumpsvax"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Mumpsvax"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Mumpsvax"
* #373 "Mutagrip"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Mutagrip"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Mutagrip"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Mutagrip"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Mutagrip"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Mutagrip"
* #613 "Pentavac"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Pentavac"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Pentavac"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Pentavac"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Pentavac"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Pentavac"

//65675	01	Pneumovax-23, Injektionslösung in einer Fertigspritze	MSD Merck Sharp & Dohme AG	B	26.02.2016	26.02.2016	unbegrenzt	J07AL01
* #509 "Pneumovax-23"
  * ^definition = "Pneumovax-23, Injektionslösung in einer Fertigspritze	MSD Merck Sharp & Dohme AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Pneumovax-23"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Pneumovax-23"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Pneumovax-23"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Pneumovax-23"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Pneumovax-23"
* #646 "Revaxis"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Revaxis"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Revaxis"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Revaxis"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Revaxis"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Revaxis"
* #520 "Stamaril"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Stamaril"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Stamaril"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Stamaril"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Stamaril"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Stamaril"
* #612 "Tetravac"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Tetravac"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Tetravac"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Tetravac"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Tetravac"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Tetravac"

* #417 "Tollwut Impfstoff Mérieux"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Tollwut Impfstoff Mérieux"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Rage vaccin Mérieux"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Rabbia vaccino Mérieux"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Frenesia vaccin Mérieux"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Rage vaccine Mérieux"
* #688 "Varivax"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Varivax"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Varivax"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Varivax"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Varivax"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Varivax"
* #485 "Influvac"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Influvac"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Influvac"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Influvac"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Influvac"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Influvac"
* #660 "Influvac plus"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Influvac plus"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Influvac plus"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Influvac plus"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Influvac plus"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Influvac plus"
* #654 "Meningitec"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Meningitec"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Meningitec"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Meningitec"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Meningitec"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Meningitec"
* #643 "Prevenar-7"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Prevenar-7"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Prevenar-7"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Prevenar-7"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Prevenar-7"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Prevenar-7"
* #644 "Hexavac"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Hexavac"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Hexavac"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Hexavac"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Hexavac"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Hexavac"


//711	02	Diphtherie- und Tetanus-Adsorbatimpfstoff für Erwachsene und Kinder ab 7 Jahren, Injektionssuspension	Emergent BioSolutions Berna GmbH	B	5/19/2006	7/20/2021	unbegrenzt	J07AM51
//711	01	Diphtherie- und Tetanus-Adsorbatimpfstoff für Kinder unter 8 Jahren, Injektionssuspension	Emergent BioSolutions Berna GmbH	B	5/19/2006	5/19/2006	unbegrenzt	J07AM51
* #711 "DiTe pediatric adsorbed"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "DiTe pediatric adsorbed"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "DiTe pediatric adsorbed"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "DiTe pediatric adsorbed"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "DiTe pediatric adsorbed"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "DiTe pediatric adsorbed"

* #711-01 "Diphtherie- und Tetanus-Adsorbatimpfstoff für Kinder unter 8 Jahren"
  * ^definition = "Diphtherie- und Tetanus-Adsorbatimpfstoff für Kinder unter 8 Jahren, Injektionssuspension, Emergent BioSolutions Berna GmbH"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Diphtherie- und Tetanus-Adsorbatimpfstoff für Kinder unter 8 Jahren"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Diphtérie- et tétanos-vaccin adsorbant pour les enfants de moins de 8 ans"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Difterite e tetano vaccino adsorbito per bambini di età inferiore agli 8 anni"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Difteria e tetanus vaccin d’asorbat per uffants sut 8 onns"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Diphtheria and tetanus adsorbate vaccine for children under 8 years of age"

* #711-02 "Diphtherie- und Tetanus-Adsorbatimpfstoff für Erwachsene und Kinder ab 7 Jahren"
  * ^definition = "Diphtherie- und Tetanus-Adsorbatimpfstoff für Erwachsene und Kinder ab 7 Jahren, Injektionssuspension, Emergent BioSolutions Berna GmbH"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Diphtherie- und Tetanus-Adsorbatimpfstoff für Erwachsene und Kinder ab 7 Jahren"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Diphtérie- et tétanos-vaccin adsorbant pour pour les adultes et les enfants à partir de 7 ans"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Difterite e tetano vaccino adsorbito per adulti e bambini dai 7 anni in su"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Difteria e tetanus vaccin d’asorbat per persunas creschidas e per uffants a partir da 7 onns"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Diphtheria and tetanus adsorbate vaccine for adults and children over 7 years old"

* #704 "Dukoral"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Dukoral"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Dukoral"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Dukoral"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Dukoral"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Dukoral"
* #483 "Rimevax"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Rimevax"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Rimevax"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Rimevax"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Rimevax"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Rimevax"
* #707 "Tetanol pur"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Tetanol pur"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Tetanol pur"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Tetanol pur"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Tetanol pur"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Tetanol pur"
* #57735 "Gardasil"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Gardasil"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Gardasil"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Gardasil"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Gardasil"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Gardasil"
* #709 "Zostavax"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Zostavax"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Zostavax"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Zostavax"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Zostavax"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Zostavax"
* #58158 "Priorix-Tetra"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Priorix-Tetra"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Priorix-Tetra"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Priorix-Tetra"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Priorix-Tetra"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Priorix-Tetra"
* #696 "BCG SSI"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "BCG SSI"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "BCG SSI"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "BCG SSI"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "BCG SSI"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "BCG SSI"
* #58317 "Fluad"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Fluad"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Fluad"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Fluad"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Fluad"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Fluad"
* #60150 "Rotarix"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Rotarix"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Rotarix"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Rotarix"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Rotarix"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Rotarix"
//703	01	M-M-RVAXPRO, Lyophilisat und Lösungsmittel	MSD Merck Sharp & Dohme AG	B	13.02.2007	13.02.2007	unbegrenzt	J07BD52
* #703 "M-M-RVAXPRO"
  * ^definition = "M-M-RVAXPRO, Lyophilisat und Lösungsmittel	MSD Merck Sharp & Dohme AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "MMRVaxPro"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "MMRVaxPro"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "MMRVaxPro"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "MMRVaxPro"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "MMRVaxPro"
* #58506 "Measles vaccine live"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Measles vaccine live"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Measles vaccine live"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Measles vaccine live"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Measles vaccine live"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Measles vaccine live"
* #59267 "Agrippal"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Agrippal"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Agrippal"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Agrippal"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Agrippal"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Agrippal"
* #58271 "Optaflu"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Optaflu"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Optaflu"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Optaflu"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Optaflu"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Optaflu"
* #57814 "Cervarix"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Cervarix"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Cervarix"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Cervarix"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Cervarix"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Cervarix"

//60129	01	Prevenar 13, Injektionssuspension in einer Fertigspritze	Pfizer AG	B	12.08.2010	12.08.2010	unbegrenzt	J07AL02
* #60129 "Prevenar 13"
  * ^definition = "Prevenar 13, Injektionssuspension in einer Fertigspritze	Pfizer AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Prevenar 13"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Prevenar 13"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Prevenar 13"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Prevenar 13"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Prevenar 13"
* #59147 "Ixiaro"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Ixiaro"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Ixiaro"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Ixiaro"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Ixiaro"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Ixiaro"
* #62502 "Menveo"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Menveo"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Menveo"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Menveo"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Menveo"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Menveo"
* #600 "DiTe Anatoxal Erwachsene / Adultes"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "DiTe Anatoxal Erwachsene"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "DiTe Anatoxal adultes"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "DiTe Anatoxal adulti"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "DiTe Anatoxal persunas creschidas"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "DiTe Anatoxal adults"
* #690 "DiTe Anatoxal N Erwachsene / Adultes"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "DiTe Anatoxal N Erwachsene"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "DiTe Anatoxal N adultes"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "DiTe Anatoxal N adulti"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "DiTe Anatoxal N persunas creshidas"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "DiTe Anatoxal N adults"

* #689 "Te Anatoxal N"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Te Anatoxal N"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Te Anatoxal N"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Te Anatoxal N"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Te Anatoxal N"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Te Anatoxal N"
* #62961 "Fluarix Tetra"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Fluarix Tetra"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Fluarix Tetra"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Fluarix Tetra"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Fluarix Tetra"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Fluarix Tetra"
* #66037 "Menjugate liquid"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Menjugate liquid"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Menjugate liquid"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Menjugate liquid"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Menjugate liquid"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Menjugate liquid"

//699	01	ProQuad, Pulver und Lösungsmittel zur Herstellung einer Injektionssuspension	MSD Merck Sharp & Dohme AG	B	11/8/2010	11/8/2010	unbegrenzt	J07BD54
* #699 "ProQuad"
  * ^definition = "ProQuad, Pulver und Lösungsmittel zur Herstellung einer Injektionssuspension, MSD Merck Sharp & Dohme AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "ProQuad"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "ProQuad"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "ProQuad"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "ProQuad"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "ProQuad"

* #65387 "Gardasil 9"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Gardasil 9"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Gardasil 9"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Gardasil 9"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Gardasil 9"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Gardasil 9"

* #66940 "Vaxelis"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Vaxelis"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Vaxelis"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Vaxelis"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Vaxelis"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Vaxelis"

//65730	01	Bexsero, Injektionssuspension	GlaxoSmithKline AG	B	23.11.2017	23.11.2017	22.11.2022	J07AH09
* #65730 "Bexsero"
  * ^definition = "Bexsero, Injektionssuspension GlaxoSmithKline AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Bexsero"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Bexsero"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Bexsero"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Bexsero"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Bexsero"

//68087	02	Influvac Tetra 0.5 ml, Injektionssuspension	Mylan Pharma GmbH	B	28.10.2020	19.08.2021	27.10.2025	J07BB02
* #68087 "Influvac Tetra"
  * ^definition = "Influvac Tetra 0.5 ml, Injektionssuspension Mylan Pharma GmbH"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Influvac Tetra"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Influvac Tetra"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Influvac Tetra"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Influvac Tetra"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Influvac Tetra"

//66427	05	VaxigripTetra, Suspension pour injection dans une seringue pré-remplie	Sanofi-Aventis (Suisse) SA	B	12.06.2018	11.08.2021	11.06.2023	J07BB02
* #66427 "VaxigripTetra"
  * ^definition = "VaxigripTetra, Suspension pour injection dans une seringue pré-remplie	Sanofi-Aventis (Suisse) SA"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "VaxigripTetra"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "VaxigripTetra"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "VaxigripTetra"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "VaxigripTetra"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "VaxigripTetra"

// 68267	01	Spikevax, Injektionsdispersion	Moderna Switzerland GmbH	B	12.01.2021	12.01.2021	11.01.2023	J07B
* #68267 "Spikevax (COVID-19 Vaccine, Moderna)"
  * ^definition = "Spikevax, Injektionsdispersion	Moderna Switzerland GmbH"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Spikevax (COVID-19 Vaccine, Moderna)"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Spikevax (COVID-19 Vaccine, Moderna)"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Spikevax (COVID-19 Vaccine, Moderna)"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Spikevax (COVID-19 Vaccine, Moderna)"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Spikevax (COVID-19 Vaccine, Moderna)"

// 68225	01	Comirnaty, Konzentrat zur Herstellung einer Injektionsdispersion	Pfizer AG	B	19.12.2020	19.12.2020	18.12.2022	J07BX
* #68225 "Comirnaty (COVID-19 Vaccine, Pfizer)"
  * ^definition = "Comirnaty, Konzentrat zur Herstellung einer Injektionsdispersion	Pfizer AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Comirnaty (COVID-19 Vaccine, Pfizer)"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Comirnaty (COVID-19 Vaccine, Pfizer)"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Comirnaty (COVID-19 Vaccine, Pfizer)"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Comirnaty (COVID-19 Vaccine, Pfizer)"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Comirnaty (COVID-19 Vaccine, Pfizer)"

//68235	01	COVID-19 Vaccine Janssen, Injektionssuspension	Janssen-Cilag AG	B	22.03.2021	22.03.2021	21.03.2023	J07BX
* #68235 "COVID-19 Vaccine Janssen"
  * ^definition = "COVID-19 Vaccine Janssen, Injektionssuspension	Janssen-Cilag AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "COVID-19 Vaccine Janssen"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "COVID-19 Vaccine Janssen"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "COVID-19 Vaccine Janssen"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "COVID-19 Vaccine Janssen"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "COVID-19 Vaccine Janssen"

//67482	01	Flucelvax Tetra, Injektionssuspension	Medius AG	B	04.05.2021	04.05.2021	03.05.2026	J07BB02
// added 2021-11-19
* #67482 "Flucelvax Tetra"
  * ^definition = "Flucelvax Tetra, Injektionssuspension	Medius AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Flucelvax Tetra"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Flucelvax Tetra"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Flucelvax Tetra"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Flucelvax Tetra"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Flucelvax Tetra"

//67704	01	Efluelda 0.7 ml, suspension injectable en seringue préremplie	Sanofi-Aventis (Suisse) SA	B	21.07.2021	21.07.2021	20.07.2026	J07BB02
// added 2021-11-19
* #67704 "Efluelda 0.7 ml"
  * ^definition = "Efluelda 0.7 ml, suspension injectable en seringue préremplie	Sanofi-Aventis (Suisse) SA"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Efluelda 0.7 ml"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Efluelda 0.7 ml"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Efluelda 0.7 ml"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Efluelda 0.7 ml"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Efluelda 0.7 ml"

//67987	01	Shingrix, Pulver und Suspension zur Herstellung einer Injektionssuspension	GlaxoSmithKline AG	B	07.10.2021	07.10.2021	06.10.2026	J07BK03
// added 2021-11-19
* #67987 "Shingrix"
  * ^definition = "Shingrix, Pulver und Suspension zur Herstellung einer Injektionssuspension	GlaxoSmithKline AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Shingrix"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Shingrix"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Shingrix"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Shingrix"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Shingrix"

// 68003	01	Supemtek 0.5 ml, solution injectable dans une seringue pré-remplie	Sanofi-Aventis (Suisse) SA	B	28.10.2021	28.10.2021	27.10.2026	J07BB02
// added 2021-11-19
* #68003 "Supemtek 0.5 ml"
  * ^definition = "Supemtek 0.5 ml, solution injectable dans une seringue pré-remplie	Sanofi-Aventis (Suisse) SA"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Supemtek 0.5 ml"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Supemtek 0.5 ml"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Supemtek 0.5 ml"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Supemtek 0.5 ml"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Supemtek 0.5 ml"

//66161	01	Foclivia, Injektionssuspension in einer Durchstechflasche	Emergent BioSolutions Berna GmbH	B	20.04.2018	20.04.2018	19.04.2023	J07BB02
// added 2021-11-19
* #66161 "Foclivia (Durchstechflasche)"
  * ^definition = "Foclivia, Injektionssuspension in einer Durchstechflasche	Emergent BioSolutions Berna GmbH"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Foclivia (Durchstechflasche)"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Foclivia (flacon multidoses)"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Foclivia (flacone multidose)"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Foclivia (flacona multidosa)"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Foclivia (penetration bottle)"

//66156	01	Foclivia, Injektionssuspension in einer Fertigspritze	Emergent BioSolutions Berna GmbH	B	20.04.2018	20.04.2018	19.04.2023	J07BB02
// added 2021-11-19
* #66156 "Foclivia (Fertigspritze)"
  * ^definition = "Foclivia, Injektionssuspension in einer Fertigspritze	Emergent BioSolutions Berna GmbH"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Foclivia (Fertigspritze)"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Foclivia (seringue préremplie)"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Foclivia (siringa preriempita)"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Foclivia (siringa prominenta)"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Foclivia (pre-filled syringe)"


//68473	01	Nuvaxovid 0.5 ml, Injektionsdispersion	Future Health Pharma GmbH	B	12.04.2022	12.04.2022	20.09.2028	J07BX03
// added 2021-11-19
* #68473 "Nuvaxovid 0.5 ml, Injektionsdispersion"
  * ^definition = "Nuvaxovid 0.5 ml, Injektionsdispersion,	Future Health Pharma GmbH"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Nuvaxovid 0.5 ml"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Nuvaxovid 0.5 ml"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Nuvaxovid 0.5 ml"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Nuvaxovid 0.5 ml"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Nuvaxovid 0.5 ml"


// added data by list of 20221031 from Swissmedic
//68358	01	Ervebo, Injektionslösung	MSD Merck Sharp & Dohme AG	B	11/10/2021	11/10/2021	11/9/2026	J07BX02
// added 2022-11-03
* #68358 "Ervebo, Injektionslösung"
  * ^definition = "Ervebo, Injektionslösung, MSD Merck Sharp & Dohme AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Ervebo"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Ervebo"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Ervebo"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Ervebo"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Ervebo"

//68710	01	Comirnaty® 30 Mikrogramm/Dosis, gebrauchsfertige Injektionsdispersion  für Personen ab 12  Jahren	Pfizer AG	B	12/10/2021	12/10/2021	12/18/2022	J07BX
// added 2022-11-03
* #68710-01 "Comirnaty® 30 Mikrogramm/Dosis"
  * ^definition = "Comirnaty® 30 Mikrogramm/Dosis, gebrauchsfertige Injektionsdispersion für Personen ab 12 Jahren, Pfizer AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Comirnaty® 30 Mikrogramm/Dosis, für Personen ab 12 Jahren"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Comirnaty® 30 microgrammes/dose, pour les personnes de plus de 12 ans"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Comirnaty® 30 microgrammi/dose, per persone di età superiore ai 12 anni"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Comirnaty® 30 microgram/dosa, per persunas sur 12 onns"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Comirnaty® 30 microgram/dose, for people over 12 years"


//68710	02	Comirnaty® 10 Mikrogramm/Dosis, Konzentrat zur Herstellung einer Injektionsdispersion	Pfizer AG	B	12/10/2021	12/10/2021	12/18/2022	J07BX
// added 2022-11-03
* #68710-02 "Comirnaty® 10 Mikrogramm/Dosis"
  * ^definition = "Comirnaty® 10 Mikrogramm/Dosis, Konzentrat zur Herstellung einer Injektionsdispersion, Pfizer AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Comirnaty® 10 Mikrogramm/Dosis"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Comirnaty® 10 microgrammes/dose"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Comirnaty® 10 microgrammi/dose"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Comirnaty® 10 Mikrogramm/dosa"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Comirnaty® 10 microgram/dose"

//68710	03	Comirnaty 3 Mikrogramm/Dosis Konzentrat zur Herstellung einer Injektionsdispersion	Pfizer AG	B	10.12.2021	04.09.2023	16.03.2028	J07BN01
// added 2023-10-10
* #68710-03 "Comirnaty® 3 Mikrogramm/Dosis"
  * ^definition = "Comirnaty® 3 Mikrogramm/Dosis, Konzentrat zur Herstellung einer Injektionsdispersion, Pfizer AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Comirnaty® 3 Mikrogramm/Dosis"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Comirnaty® 3 microgrammes/dose"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Comirnaty® 3 microgrammi/dose"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Comirnaty® 3 Mikrogramm/dosa"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Comirnaty® 3 microgram/dose"


//68462	01	Fluenz Tetra, Nasenspray, Suspension	AstraZeneca AG	B	5/11/2022	5/11/2022	5/10/2027	J07BB03
// added 2022-11-03
* #68462 "Fluenz Tetra"
  * ^definition = "Fluenz Tetra, Nasenspray, Suspension, AstraZeneca AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Fluenz Tetra"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Fluenz Tetra"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Fluenz Tetra"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Fluenz Tetra"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Fluenz Tetra"

//69009	01	Spikevax Bivalent Original / Omicron	Moderna Switzerland GmbH	B	8/26/2022	8/26/2022	8/25/2024	J07B
// added 2022-11-03
* #69009 "Spikevax Bivalent Original / Omicron"
  * ^definition = "Spikevax Bivalent Original / Omicron, Moderna Switzerland GmbH"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron"

//68110	01	Adacel-Polio 0.5 ml, suspension injectable en seringue préremplie	Sanofi-Aventis (Suisse) SA	B	8/26/2022	8/26/2022	8/25/2027	J07CA02
// added 2022-11-03
* #68110 "Adacel-Polio 0.5 ml"
  * ^definition = "Adacel-Polio 0.5 ml, suspension injectable en seringue préremplie, Sanofi-Aventis (Suisse) SA"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Adacel-Polio 0.5 ml"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Adacel-Polio 0.5 ml"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Adacel-Polio 0.5 ml"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Adacel-Polio 0.5 ml"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Adacel-Polio 0.5 ml"

//68317	01	Adacel 0.5 ml, suspension injectable en seringue préremplie	Sanofi-Aventis (Suisse) SA	B	8/26/2022	8/26/2022	8/25/2027	J07AJ52
// added 2022-11-03
* #68317 "Adacel 0.5 ml"
  * ^definition = "Adacel 0.5 ml, suspension injectable en seringue préremplie, Sanofi-Aventis (Suisse) SA"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Adacel 0.5 ml"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Adacel 0.5 ml"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Adacel 0.5 ml"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Adacel 0.5 ml"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Adacel 0.5 ml"

//68221	01	MenQuadfi, solution injectable	Sanofi-Aventis (Suisse) SA	B	10/5/2022	10/5/2022	10/4/2027	J07AH08
// added 2022-11-03
* #68221 "MenQuadfi"
  * ^definition = "MenQuadfi, solution injectable, Sanofi-Aventis (Suisse) SA"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "MenQuadfi"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "MenQuadfi"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "MenQuadfi"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "MenQuadfi"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "MenQuadfi"


//69123	01	Spikevax Bivalent Original / Omicron 10 mg/ml, Fertigspritze	Moderna Switzerland GmbH	B	11.11.2022	11.11.2022	25.08.2024	J07BX03
// added 2023-02-21
* #69123 "Spikevax Bivalent Original / Omicron 10 mg/ml, Fertigspritze"
  * ^definition = "Spikevax Bivalent Original / Omicron 10 mg/ml, Fertigspritze, Moderna Switzerland GmbH"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron 10 mg/ml, Fertigspritze"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron 10 mg/ml, seringue préremplie"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron 10 mg/ml, siringa preriempita"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron 10 mg/ml, squitta finida"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron 10 mg/ml, pre-filled syringe"


//69010	01	Spikevax, Fertigspritze	Moderna Switzerland GmbH	B	13.10.2022	13.10.2022	26.09.2023	J07BX03
// added 2023-02-21
* #69010 "Spikevax, Fertigspritze"
  * ^definition = "Spikevax, Fertigspritze,	Moderna Switzerland GmbH"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Spikevax, Fertigspritze"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Spikevax, seringue préremplie"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Spikevax, siringa preriempita"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Spikevax, squitta finida"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Spikevax, pre-filled syringe"

//69047	01	Comirnaty® Original/Omicron BA.1 15/15 µg pro Dosis gebrauchsfertige Injektionsdispersion für Personen ab 18 Jahren	Pfizer AG	B	10.10.2022	10.10.2022	09.10.2024	J07BX03
// added 2023-02-21
* #69047 "Comirnaty® Original/Omicron BA.1 15/15 µg pro Dosis"
  * ^definition = "Comirnaty® Original/Omicron BA.1 15/15 µg pro Dosis, gebrauchsfertige Injektionsdispersion für Personen ab 18 Jahren, Pfizer AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Comirnaty® Original/Omicron BA.1 15/15 µg pro Dosis"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Comirnaty® Original/Omicron BA.1 15/15 µg par dose"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Comirnaty® Original/Omicron BA.1 15/15 µg per dose"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Comirnaty® Original/Omicron BA.1 15/15 µg pro dosa"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Comirnaty® Original/Omicron BA.1 15/15 µg per dose"


//69127	01	Comirnaty Original/Omicron BA. 4-5 0.225 mg, Injektionsdispersion	Pfizer AG	B	06.04.2023	06.04.2023	05.04.2028	J07BX03
// added 2023-05-19
* #69127 "Comirnaty Original/Omicron BA. 4-5 0.225 mg"
  * ^definition = "Comirnaty Original/Omicron BA. 4-5 0.225 mg, Injektionsdispersion,	Pfizer AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Comirnaty Original/Omicron BA. 4-5 0.225 mg"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Comirnaty Original/Omicron BA. 4-5 0.225 mg"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Comirnaty Original/Omicron BA. 4-5 0.225 mg"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Comirnaty Original/Omicron BA. 4-5 0.225 mg"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Comirnaty Original/Omicron BA. 4-5 0.225 mg"

//69189	01	Spikevax Bivalent Original / Omicron BA.4-5, dispersion for injection	Moderna Switzerland GmbH	B	03.03.2023	03.03.2023	02.03.2028	J07BX03
// added 2023-05-19
* #69189 "Spikevax Bivalent Original / Omicron BA.4-5, dispersion for injection"
  * ^definition = "Spikevax Bivalent Original / Omicron BA.4-5, dispersion for injection,	Moderna Switzerland GmbH"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron BA.4-5"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron BA.4-5"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron BA.4-5"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron BA.4-5"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron BA.4-5"

//69211	01	Spikevax Bivalent Original / Omicron BA.4-5, Fertigspritze	Moderna Switzerland GmbH	B	21.03.2023	21.03.2023	20.03.2028	J07BX03
// added 2023-05-19
* #69211 "Spikevax Bivalent Original / Omicron BA.4-5, Fertigspritze"
  * ^definition = "Spikevax Bivalent Original / Omicron BA.4-5, Fertigspritze,	Moderna Switzerland GmbH"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron BA.4-5, Fertigspritze"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron BA.4-5, Fertigspritze"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron BA.4-5, Fertigspritze"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron BA.4-5, Fertigspritze"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Spikevax Bivalent Original / Omicron BA.4-5, Fertigspritze"

//68752	01	Vaxneuvance, Injektionssuspension	MSD Merck Sharp & Dohme AG	B	14.02.2023	14.02.2023	13.02.2028	J07AL02
// added 2023-05-19
* #68752 "Vaxneuvance, Injektionssuspension"
  * ^definition = "Vaxneuvance, Injektionssuspension,	MSD Merck Sharp & Dohme AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Vaxneuvance"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Vaxneuvance"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Vaxneuvance"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Vaxneuvance"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Vaxneuvance"

//69465	01	Spikevax XBB.1.5 0.10 mg/ml, Dispersion zur Injektion	Moderna Switzerland GmbH	B	26.09.2023	26.09.2023	25.09.2028	J07BX
// added 2023-10-10
* #69465 "Spikevax XBB.1.5 0.10 mg/ml, Dispersion zur Injektion"
  * ^definition = "Spikevax XBB.1.5 0.10 mg/ml, Dispersion zur Injektion	Moderna Switzerland GmbH"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Spikevax XBB.1.5 0.10 mg/ml"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Spikevax XBB.1.5 0.10 mg/ml"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Spikevax XBB.1.5 0.10 mg/ml"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Spikevax XBB.1.5 0.10 mg/ml"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Spikevax XBB.1.5 0.10 mg/ml"

//69484	01	Spikevax XBB.1.5 0.10 mg/ml, Dispersion zur Injektion	Moderna Switzerland GmbH	B	26.09.2023	26.09.2023	25.09.2028	J07BX
// added 2023-10-10
* #69484 "Spikevax XBB.1.5 0.10 mg/ml, Dispersion zur Injektion"
  * ^definition = "Spikevax XBB.1.5 0.10 mg/ml, Dispersion zur Injektion	Moderna Switzerland GmbH"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Spikevax XBB.1.5 0.10 mg/ml"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Spikevax XBB.1.5 0.10 mg/ml"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Spikevax XBB.1.5 0.10 mg/ml"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Spikevax XBB.1.5 0.10 mg/ml"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Spikevax XBB.1.5 0.10 mg/ml"

//69488	01	Comirnaty Omicron XBB.1.5 (30 Mikrogramm)/Dosis, Injektionsdispersion	Pfizer AG	B	20.09.2023	20.09.2023	19.09.2028	J07BN01
// added 2023-10-10
* #69488 "Comirnaty Omicron XBB.1.5 (30 Mikrogramm)/Dosis, Injektionsdispersion"
  * ^definition = "Comirnaty Omicron XBB.1.5 (30 Mikrogramm)/Dosis, Injektionsdispersion	Pfizer AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Comirnaty Omicron XBB.1.5 (30 Mikrogramm)/Dosis"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Comirnaty Omicron XBB.1.5 (30 Mikrogramm)/dose"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Comirnaty Omicron XBB.1.5 (30 Mikrogramm)/dose"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Comirnaty Omicron XBB.1.5 (30 Mikrogramm)/dosa"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Comirnaty Omicron XBB.1.5 (30 Mikrogramm)/dose"


// 69310	01	AREXVY, Pulver und Suspension zur Herstellung einer Injektionssuspension	GlaxoSmithKline AG	B	02.05.2024	02.05.2024	01.05.2029	J07BX05	X	X	X
// added 2024-06-13
* #69310 "AREXVY, Pulver und Suspension zur Herstellung einer Injektionssuspension	GlaxoSmithKline AG"
  * ^definition = "AREXVY"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "AREXVY"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "AREXVY"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "AREXVY"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "AREXVY"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "AREXVY"

// 69173	01	Jynneos, Injektionssuspension	Bavarian Nordic Switzerland AG	B	01.03.2024	01.03.2024	28.02.2029	J07BX	X		X	X
// added 2024-06-13
* #69173 "Jynneos, Injektionssuspension	Bavarian Nordic Switzerland AG"
  * ^definition = "Jynneos"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Jynneos"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Jynneos"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Jynneos"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Jynneos"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Jynneos"

// 69222	01	Prevenar 20, Injektionssuspension in einer Fertigspritze	Pfizer AG	B	26.03.2024	26.03.2024	25.03.2029	J07AL02	X		X	X
// added 2024-06-13
* #69222 "Prevenar 20, Injektionssuspension in einer Fertigspritze	Pfizer AG"
  * ^definition = "Prevenar 20"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Prevenar 20"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Prevenar 20"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Prevenar 20"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Prevenar 20"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Prevenar 20"

// 69815	01	Comirnaty Omicron XBB.1.5, 0.042 mg, Injektionsdispersion in einer Fertigspritze	Pfizer AG	B	26.06.2024	26.06.2024	25.06.2029	J07BN01	X		X	X
// added 2024-08-09
* #69815 "Comirnaty Omicron XBB.1.5, 0.042 mg, Injektionsdispersion in einer Fertigspritze	Pfizer AG"
  * ^definition = "Comirnaty Omicron XBB.1.5, 0.042 mg"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Comirnaty Omicron XBB.1.5, 0.042 mg"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Comirnaty Omicron XBB.1.5, 0.042 mg"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Comirnaty Omicron XBB.1.5, 0.042 mg"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Comirnaty Omicron XBB.1.5, 0.042 mg"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Comirnaty Omicron XBB.1.5, 0.042 mg"

// 69403	01	Qdenga 0.5 ml, Pulver und Lösungsmittel für eine Injektionslösung in einer vorgefüllten Spritze	Takeda Pharma AG	B	29.07.2024	29.07.2024	28.07.2029	J07BX04	X		X	X
// added 2024-08-09
* #69403 "Qdenga 0.5 ml, Pulver und Lösungsmittel für eine Injektionslösung in einer vorgefüllten Spritze	Takeda Pharma AG"
  * ^definition = "Qdenga 0.5 ml, Pulver und Lösungsmittel für eine Injektionslösung"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Qdenga 0.5 ml"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Qdenga 0.5 ml"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Qdenga 0.5 ml"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Qdenga 0.5 ml"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Qdenga 0.5 ml"

// 69913 	01 	Comirnaty JN.1 0.042 mg, Injektionsdispersion in einer Fertigspritze 	Pfizer AG 	B 	12.08.2024 	12.08.2024 	11.08.2029 	J07BN01
// added 2024-10-17
* #69913 "Comirnaty JN.1 0.042 mg, Injektionsdispersion in einer Fertigspritze, Pfizer AG"
  * ^definition = "Comirnaty JN.1 0.042 mg, Injektionsdispersion in einer Fertigspritze, Pfizer AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Comirnaty JN.1 0.042 mg"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Comirnaty JN.1 0.042 mg"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Comirnaty JN.1 0.042 mg"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Comirnaty JN.1 0.042 mg"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Comirnaty JN.1 0.042 mg"
// 69912 	01 	Comirnaty JN.1 30 μg, Injektionsdispersion 	Pfizer AG 	B 	12.08.2024 	21.08.2024 	11.08.2029 	J07BN01
// added 2024-10-17
* #69912-01 "Comirnaty JN.1 30 μg, Injektionsdispersion, Pfizer AG"
  * ^definition = "Comirnaty JN.1 30 μg, Injektionsdispersion, Pfizer AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Comirnaty JN.1 30 μg"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Comirnaty JN.1 30 μg"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Comirnaty JN.1 30 μg"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Comirnaty JN.1 30 μg"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Comirnaty JN.1 30 μg"
// 69912 	02 	Comirnaty JN.1 10 μg, Injektionsdispersion 	Pfizer AG 	B 	12.08.2024 	21.08.2024 	11.08.2029 	J07BN01
// added 2024-10-17
* #69912-02 "Comirnaty JN.1 10 μg, Injektionsdispersion, Pfizer AG"
  * ^definition = "Comirnaty JN.1 10 μg, Injektionsdispersion, Pfizer AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Comirnaty JN.1 10 μg"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Comirnaty JN.1 10 μg"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Comirnaty JN.1 10 μg"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Comirnaty JN.1 10 μg"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Comirnaty JN.1 10 μg"
// 69691 	01 	Abrysvo, Pulver und Lösungsmittel zur Herstellung einer Injektionslösung 	Pfizer AG 	B 	23.08.2024 	23.08.2024 	22.08.2029 	J07BX
// added 2024-10-17
* #69691 "Abrysvo, Pulver und Lösungsmittel zur Herstellung einer Injektionslösung, Pfizer AG"
  * ^definition = "Abrysvo, Pulver und Lösungsmittel zur Herstellung einer Injektionslösung, Pfizer AG"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Abrysvo"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Abrysvo"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Abrysvo"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Abrysvo"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Abrysvo"
// 69788 	01 	Spikevax JN.1 (mRNA-1273.167), 0.10mg/ml, Dispersion zur Injektion 	Moderna Switzerland GmbH 	B 	09.09.2024 	09.09.2024 	08.09.2029 	J07BX
// added 2024-10-17
* #69788 "Spikevax JN.1 (mRNA-1273.167), 0.10mg/ml, Dispersion zur Injektion, Moderna Switzerland GmbH"
  * ^definition = "Spikevax JN.1 (mRNA-1273.167), 0.10mg/ml, Dispersion zur Injektion, Moderna Switzerland GmbH"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Spikevax JN.1 (mRNA-1273.167), 0.10mg/ml"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Spikevax JN.1 (mRNA-1273.167), 0.10mg/ml"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Spikevax JN.1 (mRNA-1273.167), 0.10mg/ml"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "Spikevax JN.1 (mRNA-1273.167), 0.10mg/ml"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Spikevax JN.1 (mRNA-1273.167), 0.10mg/ml"


---

// File: input/fsh/codesystem/CSfromCHAllergyIntolerance.fsh

CodeSystem: AllergyIntoleranceClinicalStatus
Id: allergyintolerance-clinical-supplement
Title: "CH AllergyIntolerance Clinical Status"
Description: "Code supplement with translations of CHAllergyIntolerance clinical status"
* ^url = "http://fhir.ch/ig/ch-allergyintolerance/CodeSystem/allergyintolerance-clinical-supplement"
* ^status = #active
* ^experimental = false
* ^content = #supplement
* ^supplements = "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical"
* #active "Active"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Aktiv"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Actif"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Attiva"
* #inactive "Inactive"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Inaktiv"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Inactif"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Inattiva"
* #resolved "Resolved"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Behoben"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Résolu"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Risolta"

CodeSystem: AllergyIntoleranceVerificationStatus
Id: allergyintolerance-verification-supplement
Title: "CH AllergyIntolerance Verification Status"
Description: "Code supplement with translations of CHAllergyIntolerance verification status"
* ^url = "http://fhir.ch/ig/ch-allergyintolerance/CodeSystem/allergyintolerance-verification-supplement"
* ^status = #active
* ^experimental = false
* ^content = #supplement
* ^supplements = "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification"
* #unconfirmed "Unconfirmed"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Unbestätigt"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Pas confirmé"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Non confermata"
* #confirmed "Confirmed"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Bestätigt"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Confirmé"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Confermata"
* #refuted "Refuted"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Widerlegt"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Réfuté"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Contestata"
* #entered-in-error "Entered in Error"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Irrtümlich eingegeben"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Saisie erronée"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Immessa per errore"

CodeSystem: AllergyIntoleranceType
Id: allergyintolerance-type-supplement
Title: "CH AllergyIntolerance Type"
Description: "Code supplement with translations of CHAllergyIntolerance type"
* ^url = "http://fhir.ch/ig/ch-allergyintolerance/CodeSystem/allergyintolerance-type-supplement"
* ^status = #active
* ^experimental = false
* ^content = #supplement
* ^supplements = "http://hl7.org/fhir/allergy-intolerance-type"
* #allergy "Allergy"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Allergie"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Allergie"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Allergia"
* #intolerance "Intolerance"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Intoleranz"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Intolérance"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Intolleranza"

CodeSystem: AllergyIntoleranceCriticalityStatus
Id: allergyintolerance-criticality-supplement
Title: "CH AllergyIntolerance Criticality Status"
Description: "Code supplement with translations of CHAllergyIntolerance criticality status"
* ^url = "http://fhir.ch/ig/ch-allergyintolerance/CodeSystem/allergyintolerance-criticality-supplement"
* ^status = #active
* ^experimental = false
* ^content = #supplement
* ^supplements = "http://hl7.org/fhir/allergy-intolerance-criticality"
* #low "Low Risk"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Geringes Risiko"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Risque faible"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Basso rischio"
* #high "High Risk"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Hohes Risiko"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Risque élevé"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Alto rischio"
* #unable-to-assess "Unable to Assess Risk"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Risikobewertung nicht möglich"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Impossible d’évaluer le risque"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Rischio non valutabile"

CodeSystem: AllergyIntoleranceSeverityStatus
Id: allergyintolerance-severity-supplement
Title: "CH AllergyIntolerance Severity Status"
Description: "Code supplement with translations of CHAllergyIntolerance severity status"
* ^url = "http://fhir.ch/ig/ch-allergyintolerance/CodeSystem/allergyintolerance-severity-supplement"
* ^status = #active
* ^experimental = false
* ^content = #supplement
* ^supplements = "http://hl7.org/fhir/reaction-event-severity"
* #mild "Mild"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Mild"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Faible"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Lieve"
* #moderate "Moderate"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Moderat"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Moyen"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Moderata"
* #severe "Severe"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Schwer"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Grave"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Grave"

CodeSystem: AllergyIntoleranceCategory
Id: allergyintolerance-category-supplement
Title: "CH AllergyIntolerance Category"
Description: "Code supplement with translations of CHAllergyIntolerance category"
* ^url = "http://fhir.ch/ig/ch-allergyintolerance/CodeSystem/allergyintolerance-category-supplement"
* ^status = #active
* ^experimental = false
* ^content = #supplement
* ^supplements = "http://hl7.org/fhir/allergy-intolerance-category"
* #food "Food"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Lebensmittel"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "aliment"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "alimento"
* #medication "Medication"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Arzneimittel"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "médicament"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "medicamento"
* #environment "Environment"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Umweltstoffe"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "environnement"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "ambiente"
* #biologic "Biologic"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Biologische Präparate"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "biologique"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "biologico"


---

// File: input/fsh/codesystem/ECH007CantonFLAbbreviation.fsh

// https://www.ech.ch/de/ech/ech-0007/6.0
// https://www.ech.ch/sites/default/files/imce/eCH-Dossier/0001-0030/eCH-0007/6.00/Beilagen/eCH-0007-6-0.xsd

CodeSystem: ECH007CantonFLAbbreviation
Id: ech-7-cantonflabbreviation
Title: "eCH-0007 Canton Abbreviation incl. FL (Fürstentum Liechtenstein)"
Description: "eCH-0007 defines cantonAbbreviation/cantonFLAbbreviation (Kantonskürzel inkl. Fürstentum Liechtenstein), see [here](https://www.ech.ch/de/ech/ech-0007/6.0)."
* ^experimental = false
* ^caseSensitive = true
* ^content = #complete
* ^url = "http://fhir.ch/ig/ch-core/CodeSystem/ech-7-cantonflabbreviation"
* #AG
* #AR
* #AI
* #BL
* #BS
* #BE
* #FR
* #GE
* #GL
* #GR
* #JU
* #LU
* #NE 
* #NW 
* #OW
* #SH
* #SZ 
* #SO 
* #SG 
* #TI 
* #TG 
* #UR
* #VD
* #VS
* #ZG
* #ZH
* #FL


---

// File: input/fsh/codesystem/mainguarantor.fsh

CodeSystem: BfsMedstats25Mainguarantor
Id: bfs-medstats-25-mainguarantor
Title: "BFS Medizinische Statistik - 25 1.4.V02 - Hauptkostenträger für Grundversicherungsleistungen / Prise en charge des soins de base / Unità d’imputazione principale per le prestazioni dell’assicurazione di base"
Description: "BFS defines variables for medical statistic (german, french, italian) see [BFS](https://www.bfs.admin.ch/bfs/de/home/statistiken/kataloge-datenbanken/publikationen.assetdetail.7066232.html). Angabe des Hauptgaranten, der für die Kosten der Grundversicherungsleistungen des Spitalaufenthalts im Wesentlichen aufkommt. Keine Mehrfachnennungen möglich."
* ^experimental = false
* ^caseSensitive = true
* ^compositional = false
* ^content = #complete
* ^url = "http://fhir.ch/ig/ch-core/CodeSystem/bfs-medstats-25-mainguarantor"

* #1 "Krankenversicherung (obligat.)"
* #2 "Invalidenversicherung"
* #3 "Militärversicherung"
* #4 "Unfallversicherung"
* #5 "Selbstzahler (z.B. Ausländer ohne Grundversicherung)"
* #8 "andere"
* #9 "unbekannt"



CodeSystem: Mainguarantor
Id: mainguarantor
Title: "Main guarantor"
Description: "BFS defines variables for the main guarantor, see [CodeSystem BfsMedstats25Mainguarantor](CodeSystem-bfs-medstats-25-mainguarantor.html). In the Swiss healthcare system, an additional value is used that is not covered by the BFS variables, so the code for supplementary insurance is defined here."
* ^experimental = false
* ^caseSensitive = true
* ^url = "http://fhir.ch/ig/ch-core/CodeSystem/mainguarantor"

* #ZV "Zusatzversicherung"


---

// File: input/fsh/codesystem/ServiceRequestCategory.fsh

CodeSystem: ServiceRequestCategory
Id: servicerequest-category
Title: "ServiceRequest Category"
Description: "Codes for the category of service request used to define the requested service."
* ^experimental = false
* ^caseSensitive = true

// CH LAB-Order
* #RequestForLabExam	"Anforderung von Laboruntersuchungen"	"Electronic ordering of laboratory tests and/or panels"
* #RequestForAdditionalExam	"Nachverordnung von weiteren Laboruntersuchungen bei derselben Probe"	"Electronic ordering of additional laboratory tests for referenced specimen"
* #RequestForPrecedentReport	"Anforderung vorangehender Laborberichte"	"Electronic ordering of laboratory diagnositic reports"
* #RequestForPrecedentReportAndImages	"Anforderung vorangehender Bilddokumente"	"Electronic ordering of laboratory images"
* #RequestFor2ndOpinion	"Anforderung einer Zweitmeinung"	"Electronic ordering of 2nd opinion"
* #ProposalForAdditionalExam	"Vorschlag für weitere Untersuchungen"	"Electronic proposal for additional exam"
* #RequestForHistopathExam	"Anforderung von histopathologischen Untersuchungen"	"Electronic ordering of histopathologic tests and/or panels"

// CH RAD-Order
* #RequestForPreviousReport	"Befundbericht früherer Untersuchung(en)"
* #RequestForPreviousReportAndImages	"Bilder und Befundberichte früherer Untersuchung(en)"
* #ImagingRequest	"Bildgebende Diagnostik"
* #RadIntervention	"Interventionelle Radiologie"
* #SecondOpinion	"Zweitmeinung"
* #ImagingRequestWithIntervention	"Bildgebende Diagnostik und Intervention"
* #RemoteReporting	"Fernbefundung"

---

// File: input/fsh/conceptmap/ch-vacd-targetdiseases-vaccines-cm.fsh

Instance: ch-vacd-targetdiseases-vaccines-cm
InstanceOf: ConceptMap
Usage: #definition
* url = "http://fhir.ch/ig/ch-vacd/ConceptMap/ch-vacd-targetdiseases-vaccines-cm"
* name = "TargetDiseaseToVaccineCodeMapping"
* title = "TargetDisease To VaccineCode Mapping"
* description = "Mappings from target disease to vaccine code according to the correcsponding valuesets"
* status = #active
* publisher = "eHealth Suisse"
* contact.name = "eHealth Suisse"
* contact.telecom.system = #url
* contact.telecom.value = "https://www.e-health-suisse.ch/"
* experimental = false
* copyright = "This artefact includes content from SNOMED Clinical Terms® (SNOMED CT®) which is copyright of the International Health Terminology Standards Development Organisation (IHTSDO). Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license - for more information contact http://www.snomed.org/snomed-ct/getsnomed-ct or info@snomed.org."
* sourceUri = "http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-targetdiseasesandillnessesundergoneforimmunization-vs"
* targetUri = "http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-vaccines-vs"

// //////////////////////////////////////////////////////////////////////////////////////////
// vaccines with swiss medic number                                                       ///
// //////////////////////////////////////////////////////////////////////////////////////////
* group[0].id = "group1"
* group[=].source = "http://snomed.info/sct"
* group[=].target = "http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs"
* group[=].element[0].code = #397430003
* group[=].element[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[+].code = #619
* group[=].element[=].target[=].display = "Infanrix DTPa-IPV+Hib"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #638
* group[=].element[=].target[=].display = "Infanrix DTPa-IPV"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #612
* group[=].element[=].target[=].display = "Tetravac"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #600
* group[=].element[=].target[=].display = "DiTe Anatoxal Erwachsene / Adultes"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #613
* group[=].element[=].target[=].display = "Pentavac"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #690
* group[=].element[=].target[=].display = "DiTe Anatoxal N Erwachsene / Adultes"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #567
* group[=].element[=].target[=].display = "Ditanrix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #702
* group[=].element[=].target[=].display = "Td-pur"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #644
* group[=].element[=].target[=].display = "Hexavac"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #640
* group[=].element[=].target[=].display = "Infanrix hexa"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #646
* group[=].element[=].target[=].display = "Revaxis"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #637
* group[=].element[=].target[=].display = "Boostrix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #686
* group[=].element[=].target[=].display = "Td-Virelon"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #681
* group[=].element[=].target[=].display = "Boostrix Polio"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #711
* group[=].element[=].target[=].display = "DiTe pediatric adsorbed"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #711-01
* group[=].element[=].target[=].display = "Diphtherie- und Tetanus-Adsorbatimpfstoff für Kinder unter 8 Jahren"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #711-02
* group[=].element[=].target[=].display = "Diphtherie- und Tetanus-Adsorbatimpfstoff für Erwachsene und Kinder ab 7 Jahren"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-12-01
* group[=].element[=].target[+].code = #66940
* group[=].element[=].target[=].display = "Vaxelis"
* group[=].element[=].target[=].equivalence = #relatedto

// added 2022-11-03
* group[=].element[=].target[+].code = #68317
* group[=].element[=].target[=].display = "Adacel 0.5 ml"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-11-03
* group[=].element[=].target[+].code = #68110
* group[=].element[=].target[=].display = "Adacel-Polio 0.5 ml"
* group[=].element[=].target[=].equivalence = #relatedto


* group[=].element[+].code = #76902006
* group[=].element[=].display = "Tetanus (disorder)"
* group[=].element[=].target[+].code = #619
* group[=].element[=].target[=].display = "Infanrix DTPa-IPV+Hib"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #638
* group[=].element[=].target[=].display = "Infanrix DTPa-IPV"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #612
* group[=].element[=].target[=].display = "Tetravac"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #600
* group[=].element[=].target[=].display = "DiTe Anatoxal Erwachsene / Adultes"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #613
* group[=].element[=].target[=].display = "Pentavac"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #690
* group[=].element[=].target[=].display = "DiTe Anatoxal N Erwachsene / Adultes"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #567
* group[=].element[=].target[=].display = "Ditanrix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #702
* group[=].element[=].target[=].display = "Td-pur"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #644
* group[=].element[=].target[=].display = "Hexavac"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #640
* group[=].element[=].target[=].display = "Infanrix hexa"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #707
* group[=].element[=].target[=].display = "Tetanol pur"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #646
* group[=].element[=].target[=].display = "Revaxis"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #637
* group[=].element[=].target[=].display = "Boostrix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #686
* group[=].element[=].target[=].display = "Td-Virelon"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #689
* group[=].element[=].target[=].display = "Te Anatoxal N"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #681
* group[=].element[=].target[=].display = "Boostrix Polio"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #711
* group[=].element[=].target[=].display = "DiTe pediatric adsorbed"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #711-01
* group[=].element[=].target[=].display = "Diphtherie- und Tetanus-Adsorbatimpfstoff für Kinder unter 8 Jahren"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #711-02
* group[=].element[=].target[=].display = "Diphtherie- und Tetanus-Adsorbatimpfstoff für Erwachsene und Kinder ab 7 Jahren"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-11-03
* group[=].element[=].target[+].code = #68317
* group[=].element[=].target[=].display = "Adacel 0.5 ml"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-11-03
* group[=].element[=].target[+].code = #68110
* group[=].element[=].target[=].display = "Adacel-Polio 0.5 ml"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-12-01
* group[=].element[=].target[+].code = #66940
* group[=].element[=].target[=].display = "Vaxelis"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #27836007
* group[=].element[=].display = "Pertussis (disorder)"
* group[=].element[=].target[+].code = #619
* group[=].element[=].target[=].display = "Infanrix DTPa-IPV+Hib"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #640
* group[=].element[=].target[=].display = "Infanrix hexa"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #638
* group[=].element[=].target[=].display = "Infanrix DTPa-IPV"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #612
* group[=].element[=].target[=].display = "Tetravac"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #637
* group[=].element[=].target[=].display = "Boostrix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #613
* group[=].element[=].target[=].display = "Pentavac"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #681
* group[=].element[=].target[=].display = "Boostrix Polio"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #644
* group[=].element[=].target[=].display = "Hexavac"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-11-03
* group[=].element[=].target[+].code = #68317
* group[=].element[=].target[=].display = "Adacel 0.5 ml"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-11-03
* group[=].element[=].target[+].code = #68110
* group[=].element[=].target[=].display = "Adacel-Polio 0.5 ml"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-12-01
* group[=].element[=].target[+].code = #66940
* group[=].element[=].target[=].display = "Vaxelis"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #398102009
* group[=].element[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[+].code = #619
* group[=].element[=].target[=].display = "Infanrix DTPa-IPV+Hib"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #640
* group[=].element[=].target[=].display = "Infanrix hexa"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #638
* group[=].element[=].target[=].display = "Infanrix DTPa-IPV"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #669
* group[=].element[=].target[=].display = "Poliorix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #612
* group[=].element[=].target[=].display = "Tetravac"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #646
* group[=].element[=].target[=].display = "Revaxis"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #613
* group[=].element[=].target[=].display = "Pentavac"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #686
* group[=].element[=].target[=].display = "Td-Virelon"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #681
* group[=].element[=].target[=].display = "Boostrix Polio"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #644
* group[=].element[=].target[=].display = "Hexavac"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-11-03
* group[=].element[=].target[+].code = #68110
* group[=].element[=].target[=].display = "Adacel-Polio 0.5 ml"
* group[=].element[=].target[=].equivalence = #relatedto
//added 2022-12-01
* group[=].element[=].target[+].code = #66940
* group[=].element[=].target[=].display = "Vaxelis"
* group[=].element[=].target[=].equivalence = #relatedto


* group[=].element[+].code = #709410003
* group[=].element[=].display = "Haemophilus influenzae type b infection (disorder)"
* group[=].element[=].target[+].code = #619
* group[=].element[=].target[=].display = "Infanrix DTPa-IPV+Hib"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #640
* group[=].element[=].target[=].display = "Infanrix hexa"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #603
* group[=].element[=].target[=].display = "Hiberix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #613
* group[=].element[=].target[=].display = "Pentavac"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #644
* group[=].element[=].target[=].display = "Hexavac"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-12-01
* group[=].element[=].target[+].code = #66940
* group[=].element[=].target[=].display = "Vaxelis"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #40468003
* group[=].element[=].display = "Viral hepatitis, type A (disorder)"
* group[=].element[=].target[+].code = #558
* group[=].element[=].target[=].display = "Havrix 1440"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #599
* group[=].element[=].target[=].display = "Havrix 720"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #592
* group[=].element[=].target[=].display = "Twinrix 720/20"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #572
* group[=].element[=].target[=].display = "Epaxal"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #66071002
* group[=].element[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[+].code = #640
* group[=].element[=].target[=].display = "Infanrix hexa"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #528
* group[=].element[=].target[=].display = "Gen H-B-Vax 10"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #544
* group[=].element[=].target[=].display = "Heprecomb"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #551
* group[=].element[=].target[=].display = "Engerix-B 10"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #610
* group[=].element[=].target[=].display = "Gen H-B-Vax 5"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #663
* group[=].element[=].target[=].display = "HBVAXPRO 10"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #545
* group[=].element[=].target[=].display = "HBVAXPRO 40"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #534
* group[=].element[=].target[=].display = "Engerix-B 20"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #592
* group[=].element[=].target[=].display = "Twinrix 720/20"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #642
* group[=].element[=].target[=].display = "Heprecomb Kinder"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #644
* group[=].element[=].target[=].display = "Hexavac"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-12-01
* group[=].element[=].target[+].code = #66940
* group[=].element[=].target[=].display = "Vaxelis"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #14189004
* group[=].element[=].display = "Measles (disorder)"
* group[=].element[=].target[+].code = #268
* group[=].element[=].target[=].display = "MMR-II"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #483
* group[=].element[=].target[=].display = "Rimevax"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #703
* group[=].element[=].target[=].display = "MMRVaxPro"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #58506
* group[=].element[=].target[=].display = "Measles vaccine live"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #533
* group[=].element[=].target[=].display = "Moraten"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #615
* group[=].element[=].target[=].display = "Priorix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #58158
* group[=].element[=].target[=].display = "Priorix-Tetra"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-12-01
* group[=].element[=].target[+].code = #699	
* group[=].element[=].target[=].display = "ProQuad"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #36989005
* group[=].element[=].display = "Mumps (disorder)"
* group[=].element[=].target[+].code = #268
* group[=].element[=].target[=].display = "MMR-II"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #247
* group[=].element[=].target[=].display = "Mumpsvax"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #703
* group[=].element[=].target[=].display = "MMRVaxPro"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #615
* group[=].element[=].target[=].display = "Priorix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #58158
* group[=].element[=].target[=].display = "Priorix-Tetra"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-12-01
* group[=].element[=].target[+].code = #699	
* group[=].element[=].target[=].display = "ProQuad"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #36653000
* group[=].element[=].display = "Rubella (disorder)"
* group[=].element[=].target[+].code = #268
* group[=].element[=].target[=].display = "MMR-II"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #703
* group[=].element[=].target[=].display = "MMRVaxPro"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #615
* group[=].element[=].target[=].display = "Priorix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #58158
* group[=].element[=].target[=].display = "Priorix-Tetra"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-12-01
* group[=].element[=].target[+].code = #699	
* group[=].element[=].target[=].display = "ProQuad"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #712986001
* group[=].element[=].display = "Central European encephalitis (disorder)"
* group[=].element[=].target[+].code = #628
* group[=].element[=].target[=].display = "Encepur N Kinder / Enfants"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #627
* group[=].element[=].target[=].display = "Encepur N"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #683
* group[=].element[=].target[=].display = "FSME-Immun 0.25 ml Junior"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #450
* group[=].element[=].target[=].display = "FSME-Immun CC"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #23511006
* group[=].element[=].display = "Meningococcal infectious disease (disorder)"
* group[=].element[=].target[+].code = #654
* group[=].element[=].target[=].display = "Meningitec"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #62502
* group[=].element[=].target[=].display = "Menveo"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #656
* group[=].element[=].target[=].display = "NeisVac-C"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #652
* group[=].element[=].target[=].display = "Mencevax ACWY"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #657
* group[=].element[=].target[=].display = "Menjugate"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2024-02-15, issue 208
* group[=].element[=].target[+].code = #65730
* group[=].element[=].target[=].display = "Bexsero"
* group[=].element[=].target[=].equivalence = #relatedto


// added 2022-11-03
* group[=].element[=].target[+].code = #68221
* group[=].element[=].target[=].display = "MenQuadfi"
* group[=].element[=].target[=].equivalence = #relatedto


* group[=].element[+].code = #719590007
* group[=].element[=].display = "Influenza caused by seasonal influenza virus (disorder)"
* group[=].element[=].target[+].code = #583
* group[=].element[=].target[=].display = "Fluarix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #614
* group[=].element[=].target[=].display = "Inflexal V"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #58271
* group[=].element[=].target[=].display = "Optaflu"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #660
* group[=].element[=].target[=].display = "Influvac plus"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #373
* group[=].element[=].target[=].display = "Mutagrip"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #62961
* group[=].element[=].target[=].display = "Fluarix Tetra"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #58317
* group[=].element[=].target[=].display = "Fluad"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #59267
* group[=].element[=].target[=].display = "Agrippal"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #485
* group[=].element[=].target[=].display = "Influvac"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #66427
* group[=].element[=].target[=].display = "VaxigripTetra"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-12-01
* group[=].element[=].target[+].code = #68087	
* group[=].element[=].target[=].display = "Influvac Tetra"
* group[=].element[=].target[=].equivalence = #relatedto

// added 2021-11-19
//67482	01	Flucelvax Tetra, Injektionssuspension	Medius AG	B	04.05.2021	04.05.2021	03.05.2026	J07BB02
//67704	01	Efluelda 0.7 ml, suspension injectable en seringue préremplie	Sanofi-Aventis (Suisse) SA	B	21.07.2021	21.07.2021	20.07.2026	J07BB02
//68003	01	Supemtek 0.5 ml, solution injectable dans une seringue pré-remplie	Sanofi-Aventis (Suisse) SA	B	28.10.2021	28.10.2021	27.10.2026	J07BB02
* group[=].element[=].target[+].code = #67482
* group[=].element[=].target[=].display = "Flucelvax Tetra"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #67704
* group[=].element[=].target[=].display = "Efluelda 0.7 ml"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #68003
* group[=].element[=].target[=].display = "Supemtek 0.5 ml"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-11-03
* group[=].element[=].target[+].code = #68462
* group[=].element[=].target[=].display = "Fluenz Tetra"
* group[=].element[=].target[=].equivalence = #relatedto


* group[=].element[+].code = #63650001
* group[=].element[=].display = "Cholera (disorder)"
* group[=].element[=].target[+].code = #704
* group[=].element[=].target[=].display = "Dukoral"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #555
* group[=].element[=].target[=].display = "Orochol"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #14168008
* group[=].element[=].display = "Rabies (disorder)"
* group[=].element[=].target[+].code = #685
* group[=].element[=].target[=].display = "Rabipur"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #417
* group[=].element[=].target[=].display = "Tollwut Impfstoff Mérieux"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #4834000
* group[=].element[=].display = "Typhoid fever (disorder)"
* group[=].element[=].target.code = #467
* group[=].element[=].target.display = "Vivotif"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #38907003
* group[=].element[=].display = "Varicella (disorder)"
* group[=].element[=].target[+].code = #688
* group[=].element[=].target[=].display = "Varivax"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #585
* group[=].element[=].target[=].display = "Varilrix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #58158
* group[=].element[=].target[=].display = "Priorix-Tetra"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-12-01
* group[=].element[=].target[+].code = #699	
* group[=].element[=].target[=].display = "ProQuad"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #56717001
* group[=].element[=].display = "Tuberculosis (disorder)"
* group[=].element[=].target.code = #696
* group[=].element[=].target.display = "BCG SSI"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #16541001
* group[=].element[=].display = "Yellow fever (disorder)"
* group[=].element[=].target.code = #520
* group[=].element[=].target.display = "Stamaril"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #16814004
* group[=].element[=].display = "Pneumococcal infectious disease (disorder)"
* group[=].element[=].target[+].code = #60129
* group[=].element[=].target[=].display = "Prevenar 13"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #643
* group[=].element[=].target[=].display = "Prevenar-7"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #509
* group[=].element[=].target[=].display = "Pneumovax-23"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2023-05-19
* group[=].element[=].target[+].code = #68752
* group[=].element[=].target[=].display = "Vaxneuvance"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #69222
* group[=].element[=].target[=].display = "Prevenar 20"
* group[=].element[=].target[=].equivalence = #relatedto


* group[=].element[+].code = #240532009
* group[=].element[=].display = "Human papillomavirus infection (disorder)"
* group[=].element[=].target[+].code = #57735
* group[=].element[=].target[=].display = "Gardasil"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #65387
* group[=].element[=].target[=].display = "Gardasil 9"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[=].target[+].code = #57814
* group[=].element[=].target[=].display = "Cervarix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #4740000
* group[=].element[=].display = "Herpes zoster (disorder)"
* group[=].element[=].target.code = #709
* group[=].element[=].target.display = "Zostavax"
* group[=].element[=].target.equivalence = #relatedto
// added 2021-11-19
* group[=].element[=].target.code = #67987
* group[=].element[=].target.display = "Shingrix"
* group[=].element[=].target.equivalence = #relatedto


* group[=].element[+].code = #18624000
* group[=].element[=].display = "Disease caused by Rotavirus (disorder)"
* group[=].element[=].target.code = #60150
* group[=].element[=].target.display = "Rotarix"
* group[=].element[=].target.equivalence = #relatedto
* group[=].element[+].code = #52947006
* group[=].element[=].display = "Japanese encephalitis virus disease (disorder)"
* group[=].element[=].target.code = #59147
* group[=].element[=].target.display = "Ixiaro"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #840539006
* group[=].element[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[+].code = #68225
* group[=].element[=].target[=].display = "Comirnaty (COVID-19 Vaccine, Pfizer)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #68267
* group[=].element[=].target[=].display = "Spikevax (COVID-19 Vaccine, Moderna)"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2021-11-19
* group[=].element[=].target[+].code = #68235
* group[=].element[=].target[=].display = "COVID-19 Vaccine Janssen"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-06-27
* group[=].element[=].target[+].code = #68473
* group[=].element[=].target[=].display = "Nuvaxovid 0.5 ml"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-11-03
* group[=].element[=].target[+].code = #68710-01
* group[=].element[=].target[=].display = "Comirnaty® 30 Mikrogramm/Dosis"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-11-03
* group[=].element[=].target[+].code = #68710-02
* group[=].element[=].target[=].display = "Comirnaty® 10 Mikrogramm/Dosis"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2023-10-10
* group[=].element[=].target[+].code = #68710-03
* group[=].element[=].target[=].display = "Comirnaty® 3 Mikrogramm/Dosis"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2022-11-03
* group[=].element[=].target[+].code = #69009
* group[=].element[=].target[=].display = "Spikevax Bivalent Original / Omicron"
* group[=].element[=].target[=].equivalence = #relatedto

//69123	01	Spikevax Bivalent Original / Omicron 10 mg/ml, Fertigspritze	Moderna Switzerland GmbH	B	11.11.2022	11.11.2022	25.08.2024	J07BX03
// added 2023-02-21
* group[=].element[=].target[+].code = #69123
* group[=].element[=].target[=].display = "Spikevax Bivalent Original / Omicron 10 mg/ml, Fertigspritze"
* group[=].element[=].target[=].equivalence = #relatedto

//69010	01	Spikevax, Fertigspritze	Moderna Switzerland GmbH	B	13.10.2022	13.10.2022	26.09.2023	J07BX03
// added 2023-02-21
* group[=].element[=].target[+].code = #69010
* group[=].element[=].target[=].display = "Spikevax, Fertigspritze"
* group[=].element[=].target[=].equivalence = #relatedto

//69047	01	Comirnaty® Original/Omicron BA.1 15/15 µg pro Dosis gebrauchsfertige Injektionsdispersion für Personen ab 18 Jahren	Pfizer AG	B	10.10.2022	10.10.2022	09.10.2024	J07BX03
// added 2023-02-21
* group[=].element[=].target[+].code = #69047
* group[=].element[=].target[=].display = "Comirnaty® Original/Omicron BA.1 15/15 µg pro Dosis"
* group[=].element[=].target[=].equivalence = #relatedto


//69127	01	Comirnaty Original/Omicron BA. 4-5 0.225 mg, Injektionsdispersion	Pfizer AG	B	06.04.2023	06.04.2023	05.04.2028	J07BX03
// added 2023-05-19
* group[=].element[=].target[+].code = #69127
* group[=].element[=].target[=].display = "Comirnaty Original/Omicron BA. 4-5 0.225 mg"
* group[=].element[=].target[=].equivalence = #relatedto

//69189	01	Spikevax Bivalent Original / Omicron BA.4-5, dispersion for injection	Moderna Switzerland GmbH	B	03.03.2023	03.03.2023	02.03.2028	J07BX03
// added 2023-05-19
* group[=].element[=].target[+].code = #69189
* group[=].element[=].target[=].display = "Spikevax Bivalent Original / Omicron BA.4-5"
* group[=].element[=].target[=].equivalence = #relatedto

//69211	01	Spikevax Bivalent Original / Omicron BA.4-5, Fertigspritze	Moderna Switzerland GmbH	B	21.03.2023	21.03.2023	20.03.2028	J07BX03
// added 2023-05-19
* group[=].element[=].target[+].code = #69211
* group[=].element[=].target[=].display = "Spikevax Bivalent Original / Omicron BA.4-5, Fertigspritze"
* group[=].element[=].target[=].equivalence = #relatedto


//69465	01	Spikevax XBB.1.5 0.10 mg/ml, Dispersion zur Injektion	Moderna Switzerland GmbH	B	26.09.2023	26.09.2023	25.09.2028	J07BX
// added 2023-10-10
* group[=].element[=].target[+].code = #69465
* group[=].element[=].target[=].display = "Spikevax XBB.1.5 0.10 mg/ml"
* group[=].element[=].target[=].equivalence = #relatedto

//69484	01	Spikevax XBB.1.5 0.10 mg/ml, Dispersion zur Injektion	Moderna Switzerland GmbH	B	26.09.2023	26.09.2023	25.09.2028	J07BX
// added 2023-10-10
* group[=].element[=].target[+].code = #69484
* group[=].element[=].target[=].display = "Spikevax XBB.1.5 0.10 mg/ml"
* group[=].element[=].target[=].equivalence = #relatedto

//69488	01	Comirnaty Omicron XBB.1.5 (30 Mikrogramm)/Dosis, Injektionsdispersion	Pfizer AG	B	20.09.2023	20.09.2023	19.09.2028	J07BN01
// added 2023-10-10
* group[=].element[=].target[+].code = #69488
* group[=].element[=].target[=].display = "Comirnaty Omicron XBB.1.5 (30 Mikrogramm)/Dosis"
* group[=].element[=].target[=].equivalence = #relatedto

//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69815|'Comirnaty Omicron XBB.1.5, 0.042 mg, Injektionsdispersion in einer Fertigspritze	Pfizer AG'
// added 2024-08-09
* group[=].element[=].target[+].code = #69815
* group[=].element[=].target[=].display = "Comirnaty Omicron XBB.1.5, 0.042 mg"
* group[=].element[=].target[=].equivalence = #relatedto

//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69913 "Comirnaty JN.1 0.042 mg, Injektionsdispersion in einer Fertigspritze, Pfizer AG"
// added 2024-10-17
* group[=].element[=].target[+].code = #69913
* group[=].element[=].target[=].display = "Comirnaty JN.1 0.042 mg, Injektionsdispersion in einer Fertigspritze, Pfizer AG"
* group[=].element[=].target[=].equivalence = #relatedto

//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69912-01 "Comirnaty JN.1 30 μg, Injektionsdispersion, Pfizer AG"
// added 2024-10-17
* group[=].element[=].target[+].code = #69912-01
* group[=].element[=].target[=].display = "Comirnaty JN.1 30 μg, Injektionsdispersion, Pfizer AG"
* group[=].element[=].target[=].equivalence = #relatedto

//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69912-02 "Comirnaty JN.1 10 μg, Injektionsdispersion, Pfizer AG"
// added 2024-10-17
* group[=].element[=].target[+].code = #69912-02
* group[=].element[=].target[=].display = "Comirnaty JN.1 10 μg, Injektionsdispersion, Pfizer AG"
* group[=].element[=].target[=].equivalence = #relatedto

//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69788 "Spikevax JN.1 (mRNA-1273.167), 0.10mg/ml, Dispersion zur Injektion, Moderna Switzerland GmbH"
// added 2024-10-17
* group[=].element[=].target[+].code = #69788
* group[=].element[=].target[=].display = "Spikevax JN.1 (mRNA-1273.167), 0.10mg/ml, Dispersion zur Injektion, Moderna Switzerland GmbH"
* group[=].element[=].target[=].equivalence = #relatedto


// added 2021-11-19
//66161	01	Foclivia, Injektionssuspension in einer Durchstechflasche	Emergent BioSolutions Berna GmbH	B	20.04.2018	20.04.2018	19.04.2023	J07BB02
//66156	01	Foclivia, Injektionssuspension in einer Fertigspritze	Emergent BioSolutions Berna GmbH	B	20.04.2018	20.04.2018	19.04.2023	J07BB02
* group[=].element[+].code = #719865001
* group[=].element[=].display = "Influenza caused by pandemic influenza virus (disorder)"
* group[=].element[=].target[+].code = #66161
* group[=].element[=].target[=].display = "Foclivia (Durchstechflasche)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #66156
* group[=].element[=].target[=].display = "Foclivia (Fertigspritze)"
* group[=].element[=].target[=].equivalence = #relatedto

// added 2022-11-03
* group[=].element[+].code = #37109004
* group[=].element[=].display = "Ebola virus disease (disorder)"
* group[=].element[=].target[+].code = #68358
* group[=].element[=].target[=].display = "Ervebo, Injektionslösung"
* group[=].element[=].target[=].equivalence = #relatedto

// added 2022-12-01
* group[=].element[+].code = #860805006
* group[=].element[=].display = "Encephalomyelitis caused by Neisseria meningitidis (disorder)"
* group[=].element[=].target[+].code = #66037	
* group[=].element[=].target[=].display = "Menjugate liquid"
* group[=].element[=].target[=].equivalence = #relatedto

// added 2024-06-28
* group[=].element[+].code = #359814004
* group[=].element[=].display = "Monkeypox (disorder)"
* group[=].element[=].target[+].code = #69173	
* group[=].element[=].target[=].display = "Jynneos"
* group[=].element[=].target[=].equivalence = #relatedto

// added 2024-11-27
* group[=].element[+].code = #67924001
* group[=].element[=].display = "Smallpox (disorder)"
* group[=].element[=].target[+].code = #69173
* group[=].element[=].target[=].display = "Jynneos"
* group[=].element[=].target[=].equivalence = #relatedto


// added 2024-06-21
* group[=].element[+].code = #55735004
* group[=].element[=].display = "Respiratory syncytial virus infection (disorder)"
* group[=].element[=].target[+].code = #69310	
* group[=].element[=].target[=].display = "AREXVY"
* group[=].element[=].target[=].equivalence = #relatedto
//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69691|Abrysvo
// added 2024-10-17
* group[=].element[=].target[+].code = #69691	
* group[=].element[=].target[=].display = "Abrysvo"
* group[=].element[=].target[=].equivalence = #relatedto



//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69403|'Qdenga 0.5 ml, Pulver und Lösungsmittel für eine Injektionslösung in einer vorgefüllten Spritze	Takeda Pharma AG'
// added 2024-08-09
* group[=].element[+].code = #38362002
* group[=].element[=].display = "Dengue (disorder)"
* group[=].element[=].target[+].code = #69403	
* group[=].element[=].target[=].display = "Qdenga 0.5 ml"
* group[=].element[=].target[=].equivalence = #relatedto

// TODO
//ERROR, http://snomed.info/sct|111852003|'Vaccinia (disorder)': The source code '111852003|Vaccinia (disorder)' is defined in the valueset but not in the conceptmap.
// added 2024-08-
* group[+].id = "group3"
* group[=].source = "http://snomed.info/sct"
* group[=].target = "http://snomed.info/sct"
* group[=].element[+].code = #111852003
* group[=].element[=].display = "Vaccinia (disorder)"
* group[=].element[=].target[+].code = #787859002 
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"



// //////////////////////////////////////////////////////////////////////////////////////////
// Old vaccines, missing swiss medic number                                               ///
// //////////////////////////////////////////////////////////////////////////////////////////
* group[+].id = "group2"
* group[=].source = "http://snomed.info/sct"
* group[=].target = "http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs"
* group[=].element[0].code = #397430003
* group[=].element[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[+].code = #93
* group[=].element[=].target[=].display = "Infanrix DTPa-HBV"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #99
* group[=].element[=].target[=].display = "Pentacoq"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #73
* group[=].element[=].target[=].display = "Infanrix DTPa+Hib"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #80
* group[=].element[=].target[=].display = "Anatoxal DiTe Erwachsene"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #126
* group[=].element[=].target[=].display = "Ditanrix pediatric"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #81
* group[=].element[=].target[=].display = "Anatoxal DiTe N Erwachsene"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #154
* group[=].element[=].target[=].display = "DiTe Anatoxal Kinder / Enfants"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #107
* group[=].element[=].target[=].display = "Tetramune"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #82
* group[=].element[=].target[=].display = "Anatoxal Di"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #35
* group[=].element[=].target[=].display = "Infanrix DTPa"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #142
* group[=].element[=].target[=].display = "Prohibit DTP"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #39
* group[=].element[=].target[=].display = "Infanrix Penta"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #106
* group[=].element[=].target[=].display = "Tetracoq"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #166
* group[=].element[=].target[=].display = "Infanrix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #134
* group[=].element[=].target[=].display = "Anatoxal DiTe Kinder"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #79
* group[=].element[=].target[=].display = "Anatoxal DiTePer"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76
* group[=].element[=].target[=].display = "Acel Immune"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #155
* group[=].element[=].target[=].display = "DiTePer Anatoxal"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #151
* group[=].element[=].target[=].display = "Di Anatoxal"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #76902006
* group[=].element[=].display = "Tetanus (disorder)"
* group[=].element[=].target[+].code = #93
* group[=].element[=].target[=].display = "Infanrix DTPa-HBV"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #99
* group[=].element[=].target[=].display = "Pentacoq"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #73
* group[=].element[=].target[=].display = "Infanrix DTPa+Hib"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #80
* group[=].element[=].target[=].display = "Anatoxal DiTe Erwachsene"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #84
* group[=].element[=].target[=].display = "Anatoxal Te N"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #126
* group[=].element[=].target[=].display = "Ditanrix pediatric"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #81
* group[=].element[=].target[=].display = "Anatoxal DiTe N Erwachsene"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #154
* group[=].element[=].target[=].display = "DiTe Anatoxal Kinder / Enfants"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #83
* group[=].element[=].target[=].display = "Anatoxal Te"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #107
* group[=].element[=].target[=].display = "Tetramune"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #168
* group[=].element[=].target[=].display = "Tanrix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #35
* group[=].element[=].target[=].display = "Infanrix DTPa"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #142
* group[=].element[=].target[=].display = "Prohibit DTP"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #39
* group[=].element[=].target[=].display = "Infanrix Penta"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #106
* group[=].element[=].target[=].display = "Tetracoq"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #166
* group[=].element[=].target[=].display = "Infanrix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #134
* group[=].element[=].target[=].display = "Anatoxal DiTe Kinder"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #79
* group[=].element[=].target[=].display = "Anatoxal DiTePer"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76
* group[=].element[=].target[=].display = "Acel Immune"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #155
* group[=].element[=].target[=].display = "DiTePer Anatoxal"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #27836007
* group[=].element[=].display = "Pertussis (disorder)"
* group[=].element[=].target[+].code = #39
* group[=].element[=].target[=].display = "Infanrix Penta"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #106
* group[=].element[=].target[=].display = "Tetracoq"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #166
* group[=].element[=].target[=].display = "Infanrix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #93
* group[=].element[=].target[=].display = "Infanrix DTPa-HBV"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #99
* group[=].element[=].target[=].display = "Pentacoq"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #73
* group[=].element[=].target[=].display = "Infanrix DTPa+Hib"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #79
* group[=].element[=].target[=].display = "Anatoxal DiTePer"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76
* group[=].element[=].target[=].display = "Acel Immune"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #107
* group[=].element[=].target[=].display = "Tetramune"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #155
* group[=].element[=].target[=].display = "DiTePer Anatoxal"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #35
* group[=].element[=].target[=].display = "Infanrix DTPa"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #142
* group[=].element[=].target[=].display = "Prohibit DTP"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #77
* group[=].element[=].target[=].display = "Acel P"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #398102009
* group[=].element[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[+].code = #39
* group[=].element[=].target[=].display = "Infanrix Penta"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #102
* group[=].element[=].target[=].display = "Polio Sabin"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #106
* group[=].element[=].target[=].display = "Tetracoq"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #139
* group[=].element[=].target[=].display = "Koprowski"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #148
* group[=].element[=].target[=].display = "Polio Lilly"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #99
* group[=].element[=].target[=].display = "Pentacoq"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #147
* group[=].element[=].target[=].display = "Polio Koprowski (K1-K3)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #138
* group[=].element[=].target[=].display = "K1, K2, K3"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #101
* group[=].element[=].target[=].display = "Polio Salk"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #17
* group[=].element[=].target[=].display = "Poliomyelitis Impfstoff Berna"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #103
* group[=].element[=].target[=].display = "Poloral"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #709410003
* group[=].element[=].display = "Haemophilus influenzae type b infection (disorder)"
* group[=].element[=].target[+].code = #92
* group[=].element[=].target[=].display = "HibTiter"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #78
* group[=].element[=].target[=].display = "Act-Hib"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #99
* group[=].element[=].target[=].display = "Pentacoq"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #73
* group[=].element[=].target[=].display = "Infanrix DTPa+Hib"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #133
* group[=].element[=].target[=].display = "ProHibit"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #107
* group[=].element[=].target[=].display = "Tetramune"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #98
* group[=].element[=].target[=].display = "Pedvax"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #142
* group[=].element[=].target[=].display = "Prohibit DTP"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #40468003
* group[=].element[=].display = "Viral hepatitis, type A (disorder)"
* group[=].element[=].target[+].code = #165
* group[=].element[=].target[=].display = "Havrix junior"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #74
* group[=].element[=].target[=].display = "Twinrix 360/10"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #115
* group[=].element[=].target[=].display = "Havrix 360"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #110
* group[=].element[=].target[=].display = "Vaqta"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #66071002
* group[=].element[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[+].code = #39
* group[=].element[=].target[=].display = "Infanrix Penta"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #172
* group[=].element[=].target[=].display = "Hepavax"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #118
* group[=].element[=].target[=].display = "Hevac B"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #93
* group[=].element[=].target[=].display = "Infanrix DTPa-HBV"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #164
* group[=].element[=].target[=].display = "HBVAX DNA 40"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #53
* group[=].element[=].target[=].display = "HBVAXPRO 5"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #170
* group[=].element[=].target[=].display = "Engerix-B 40"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #74
* group[=].element[=].target[=].display = "Twinrix 360/10"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #163
* group[=].element[=].target[=].display = "HBVAX DNA 10"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #162
* group[=].element[=].target[=].display = "HBVAX DNA 5"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #14189004
* group[=].element[=].display = "Measles (disorder)"
* group[=].element[=].target[+].code = #14
* group[=].element[=].target[=].display = "MoRu-Viraten"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #23
* group[=].element[=].target[=].display = "Triviraten"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #47
* group[=].element[=].target[=].display = "Attenuvax"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #119
* group[=].element[=].target[=].display = "MMR-I"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #88
* group[=].element[=].target[=].display = "Biviraten"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #75
* group[=].element[=].target[=].display = "Pluserix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #121
* group[=].element[=].target[=].display = "Rimparix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #120
* group[=].element[=].target[=].display = "Moruman"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #127
* group[=].element[=].target[=].display = "Eolarix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #96
* group[=].element[=].target[=].display = "MM Vax"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #123
* group[=].element[=].target[=].display = "Trimovax"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #36989005
* group[=].element[=].display = "Mumps (disorder)"
* group[=].element[=].target[+].code = #75
* group[=].element[=].target[=].display = "Pluserix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #97
* group[=].element[=].target[=].display = "Mumaten"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #121
* group[=].element[=].target[=].display = "Rimparix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #96
* group[=].element[=].target[=].display = "MM Vax"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #119
* group[=].element[=].target[=].display = "MMR-I"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #123
* group[=].element[=].target[=].display = "Trimovax"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #88
* group[=].element[=].target[=].display = "Biviraten"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #36653000
* group[=].element[=].display = "Rubella (disorder)"
* group[=].element[=].target[+].code = #117
* group[=].element[=].target[=].display = "Almevax"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #14
* group[=].element[=].target[=].display = "MoRu-Viraten"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #23
* group[=].element[=].target[=].display = "Triviraten"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #91
* group[=].element[=].target[=].display = "Ervevax"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #119
* group[=].element[=].target[=].display = "MMR-I"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #75
* group[=].element[=].target[=].display = "Pluserix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #56
* group[=].element[=].target[=].display = "Meruvax"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #127
* group[=].element[=].target[=].display = "Eolarix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #122
* group[=].element[=].target[=].display = "Rubevac"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #123
* group[=].element[=].target[=].display = "Trimovax"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #111
* group[=].element[=].target[=].display = "Rubeaten"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #112
* group[=].element[=].target[=].display = "Rudivax"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #712986001
* group[=].element[=].display = "Central European encephalitis (disorder)"
* group[=].element[=].target.code = #128
* group[=].element[=].target.display = "FSME-Immun Injekt"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #63650001
* group[=].element[=].display = "Cholera (disorder)"
* group[=].element[=].target.code = #16
* group[=].element[=].target.display = "Orochol E"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #14168008
* group[=].element[=].display = "Rabies (disorder)"
* group[=].element[=].target.code = #94
* group[=].element[=].target.display = "Lyssavac Berna"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #4834000
* group[=].element[=].display = "Typhoid fever (disorder)"
* group[=].element[=].target[+].code = #25
* group[=].element[=].target[=].display = "Vivotif L"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #143
* group[=].element[=].target[=].display = "TAB oral"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #56717001
* group[=].element[=].display = "Tuberculosis (disorder)"
* group[=].element[=].target[+].code = #87
* group[=].element[=].target[=].display = "BCG Vaccin Mérieux"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #48
* group[=].element[=].target[=].display = "BCG"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #16541001
* group[=].element[=].display = "Yellow fever (disorder)"
* group[=].element[=].target.code = #86
* group[=].element[=].target.display = "Arilvax"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #16814004
* group[=].element[=].display = "Pneumococcal infectious disease (disorder)"
* group[=].element[=].target.code = #100
* group[=].element[=].target.display = "Pnu-Immune"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #23511006
* group[=].element[=].display = "Meningococcal infectious disease (disorder)"
* group[=].element[=].target.code = #55
* group[=].element[=].target.display = "Meningokokken-Impfstoff A+C Mérieux"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #719865001
* group[=].element[=].display = "Influenza caused by pandemic influenza virus (disorder)"
* group[=].element[=].target[+].code = #136
* group[=].element[=].target[=].display = "Celtura"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #137
* group[=].element[=].target[=].display = "Focetria"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #141
* group[=].element[=].target[=].display = "Pandemrix"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #67924001
* group[=].element[=].display = "Smallpox (disorder)"
* group[=].element[=].target[+].code = #169
* group[=].element[=].target[=].display = "Vaccin variole"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #144
* group[=].element[=].target[=].display = "Variola"
* group[=].element[=].target[=].equivalence = #relatedto


---

// File: input/fsh/conceptmap/ch-vacd-vaccines-sct-sm-cm.fsh

Instance: ch-vacd-vaccines-sct-sm-cm
InstanceOf: ConceptMap
Usage: #definition
* url = "http://fhir.ch/ig/ch-vacd/ConceptMap/ch-vacd-vaccines-sct-sm-cm"
* name = "VaccineCodeSMToVaccineCodeSCT"
* title = "Snomed CT VaccineCode  To SwissMedic VaccineCode"
* description = "Mappings from vaccine code to vaccine code"
* status = #active
* publisher = "eHealth Suisse"
* contact.name = "eHealth Suisse"
* contact.telecom.system = #url
* contact.telecom.value = "https://www.e-health-suisse.ch/"
* copyright = "This artefact includes content from SNOMED Clinical Terms® (SNOMED CT®) which is copyright of the International Health Terminology Standards Development Organisation (IHTSDO). Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license - for more information contact http://www.snomed.org/snomed-ct/getsnomed-ct or info@snomed.org."
* experimental = false
* targetUri = "http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-vaccines-vs"
* sourceUri = "http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-vaccines-snomedct-vs"

* group[+].source = "http://snomed.info/sct"
* group[=].target = "http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs"
* group[=].element[0].code = #871719005
* group[=].element[=].display = "Vaccine product containing only Tick-borne encephalitis virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #683
* group[=].element[=].target[=].display = "FSME-Immun 0.25 ml Junior"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #450
* group[=].element[=].target[=].display = "FSME-Immun CC"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #627
* group[=].element[=].target[=].display = "Encepur N"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #628
* group[=].element[=].target[=].display = "Encepur N Kinder / Enfants"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871866001
* group[=].element[=].display = "Vaccine product containing only Neisseria meningitidis serogroup C antigen (medicinal product)"
* group[=].element[=].target[+].code = #656
* group[=].element[=].target[=].display = "NeisVac-C"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #657
* group[=].element[=].target[=].display = "Menjugate"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #654
* group[=].element[=].target[=].display = "Meningitec"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #62502
* group[=].element[=].target[=].display = "Menveo"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871751006
* group[=].element[=].display = "Vaccine product containing only Hepatitis A virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #572
* group[=].element[=].target[=].display = "Epaxal"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #558
* group[=].element[=].target[=].display = "Havrix 1440"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #599
* group[=].element[=].target[=].display = "Havrix 720"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871822003
* group[=].element[=].display = "Vaccine product containing only Hepatitis B virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #544
* group[=].element[=].target[=].display = "Heprecomb"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #642
* group[=].element[=].target[=].display = "Heprecomb Kinder"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #551
* group[=].element[=].target[=].display = "Engerix-B 10"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #534
* group[=].element[=].target[=].display = "Engerix-B 20"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #528
* group[=].element[=].target[=].display = "Gen H-B-Vax 10"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #545
* group[=].element[=].target[=].display = "HBVAXPRO 40"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #610
* group[=].element[=].target[=].display = "Gen H-B-Vax 5"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #663
* group[=].element[=].target[=].display = "HBVAXPRO 10"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871765008
* group[=].element[=].display = "Vaccine product containing only Measles morbillivirus antigen (medicinal product)"
* group[=].element[=].target[+].code = #533
* group[=].element[=].target[=].display = "Moraten"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #483
* group[=].element[=].target[=].display = "Rimevax"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #58506
* group[=].element[=].target[=].display = "Measles vaccine live"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #991000221105
* group[=].element[=].display = "Vaccine product containing only Vibrio cholerae antigen (medicinal product)"
* group[=].element[=].target[+].code = #555
* group[=].element[=].target[=].display = "Orochol"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #704
* group[=].element[=].target[=].display = "Dukoral"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871726005
* group[=].element[=].display = "Vaccine product containing only Rabies lyssavirus antigen (medicinal product)"
* group[=].element[=].target[+].code = #685
* group[=].element[=].target[=].display = "Rabipur"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #417
* group[=].element[=].target[=].display = "Tollwut Impfstoff Mérieux"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871826000
* group[=].element[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[+].code = #702
* group[=].element[=].target[=].display = "Td-pur"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #567
* group[=].element[=].target[=].display = "Ditanrix"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #711
* group[=].element[=].target[=].display = "DiTe pediatric adsorbed"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #711-01
* group[=].element[=].target[=].display = "Diphtherie- und Tetanus-Adsorbatimpfstoff für Kinder unter 8 Jahren"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #711-02
* group[=].element[=].target[=].display = "Diphtherie- und Tetanus-Adsorbatimpfstoff für Erwachsene und Kinder ab 7 Jahren"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #600
* group[=].element[=].target[=].display = "DiTe Anatoxal Erwachsene / Adultes"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #690
* group[=].element[=].target[=].display = "DiTe Anatoxal N Erwachsene / Adultes"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871837004
* group[=].element[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[+].code = #686
* group[=].element[=].target[=].display = "Td-Virelon"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #646
* group[=].element[=].target[=].display = "Revaxis"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #961000221100
* group[=].element[=].display = "Vaccine product containing only Salmonella enterica subspecies enterica serovar Typhi antigen (medicinal product)"
* group[=].element[=].target[+].code = #467
* group[=].element[=].target[=].display = "Vivotif"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871875004
* group[=].element[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[+].code = #637
* group[=].element[=].target[=].display = "Boostrix"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #68317
* group[=].element[=].target[=].display = "Adacel 0.5 ml"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871878002
* group[=].element[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[+].code = #681
* group[=].element[=].target[=].display = "Boostrix Polio"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #638
* group[=].element[=].target[=].display = "Infanrix DTPa-IPV"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #612
* group[=].element[=].target[=].display = "Tetravac"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #68110
* group[=].element[=].target[=].display = "Adacel-Polio 0.5 ml"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871764007
* group[=].element[=].display = "Vaccine product containing only Haemophilus influenzae type B antigen (medicinal product)"
* group[=].element[=].target[+].code = #603
* group[=].element[=].target[=].display = "Hiberix"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871887006
* group[=].element[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[+].code = #619
* group[=].element[=].target[=].display = "Infanrix DTPa-IPV+Hib"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #613
* group[=].element[=].target[=].display = "Pentavac"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871895005
* group[=].element[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Hepatitis B virus and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[+].code = #640
* group[=].element[=].target[=].display = "Infanrix hexa"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #644
* group[=].element[=].target[=].display = "Hexavac"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #66940
* group[=].element[=].target[=].display = "Vaxelis"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871739009
* group[=].element[=].display = "Vaccine product containing only Human poliovirus antigen (medicinal product)"
* group[=].element[=].target[+].code = #669
* group[=].element[=].target[=].display = "Poliorix"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871831003
* group[=].element[=].display = "Vaccine product containing only Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)"
* group[=].element[=].target[+].code = #615
* group[=].element[=].target[=].display = "Priorix"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #268
* group[=].element[=].target[=].display = "MMR-II"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #703
* group[=].element[=].target[=].display = "MMRVaxPro"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871803007
* group[=].element[=].display = "Vaccine product containing only Hepatitis A and Hepatitis B virus antigens (medicinal product)"
* group[=].element[=].target[+].code = #592
* group[=].element[=].target[=].display = "Twinrix 720/20"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871737006
* group[=].element[=].display = "Vaccine product containing only Mumps orthorubulavirus antigen (medicinal product)"
* group[=].element[=].target[+].code = #247
* group[=].element[=].target[=].display = "Mumpsvax"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #1052328007
* group[=].element[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 4, 6B, 9V, 14, 18C, 19F, and 23F capsular polysaccharide antigens conjugated (medicinal product)"
* group[=].element[=].target[+].code = #509
* group[=].element[=].target[=].display = "Pneumovax-23"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #643
* group[=].element[=].target[=].display = "Prevenar-7"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #60129
* group[=].element[=].target[=].display = "Prevenar 13"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871717007
* group[=].element[=].display = "Vaccine product containing only Yellow fever virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #520
* group[=].element[=].target[=].display = "Stamaril"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871742003
* group[=].element[=].display = "Vaccine product containing only Clostridium tetani antigen (medicinal product)"
* group[=].element[=].target[+].code = #707
* group[=].element[=].target[=].display = "Tetanol pur"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #689
* group[=].element[=].target[=].display = "Te Anatoxal N"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #2001000221108
* group[=].element[=].display = "Vaccine product containing only Human papillomavirus 6, 11, 16 and 18 antigens (medicinal product)"
* group[=].element[=].target[+].code = #57735
* group[=].element[=].target[=].display = "Gardasil"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #57814
* group[=].element[=].target[=].display = "Cervarix"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #65387
* group[=].element[=].target[=].display = "Gardasil 9"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #1156183006
* group[=].element[=].display = "Vaccine product containing only Human alphaherpesvirus 3 recombinant surface glycoprotein E antigen (medicinal product)"
* group[=].element[=].target[+].code = #709
* group[=].element[=].target[=].display = "Zostavax"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #67987
* group[=].element[=].target[=].display = "Shingrix"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871908002
* group[=].element[=].display = "Vaccine product containing only Human alphaherpesvirus 3 and Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)"
* group[=].element[=].target[+].code = #58158
* group[=].element[=].target[=].display = "Priorix-Tetra"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #699
* group[=].element[=].target[=].display = "ProQuad"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871761004
* group[=].element[=].display = "Vaccine product containing only Rotavirus antigen (medicinal product)"
* group[=].element[=].target[+].code = #60150
* group[=].element[=].target[=].display = "Rotarix"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871724008
* group[=].element[=].display = "Vaccine product containing only Japanese encephalitis virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #59147
* group[=].element[=].target[=].display = "Ixiaro"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #1119349007
* group[=].element[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[+].code = #68267
* group[=].element[=].target[=].display = "Spikevax (COVID-19 Vaccine, Moderna)"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #68225
* group[=].element[=].target[=].display = "Comirnaty (COVID-19 Vaccine, Pfizer)"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #68710-01
* group[=].element[=].target[=].display = "Comirnaty® 30 Mikrogramm/Dosis"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #68710-02
* group[=].element[=].target[=].display = "Comirnaty® 10 Mikrogramm/Dosis"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #68710-03
* group[=].element[=].target[=].display = "Comirnaty® 3 Mikrogramm/Dosis"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #69009
* group[=].element[=].target[=].display = "Spikevax Bivalent Original / Omicron"
* group[=].element[=].target[=].equivalence = #equivalent

// added 2023-02-21
* group[=].element[=].target[+].code = #69047
* group[=].element[=].target[=].display = "Comirnaty® Original/Omicron BA.1 15/15 µg pro Dosis"
* group[=].element[=].target[=].equivalence = #equivalent
// added 2023-05-19
* group[=].element[=].target[+].code = #69127
* group[=].element[=].target[=].display = "Comirnaty Original/Omicron BA. 4-5 0.225 mg"
* group[=].element[=].target[=].equivalence = #equivalent
// added 2023-05-19
* group[=].element[=].target[+].code = #69189
* group[=].element[=].target[=].display = "Spikevax Bivalent Original / Omicron BA.4-5"
* group[=].element[=].target[=].equivalence = #equivalent
// added 2023-05-19
* group[=].element[=].target[+].code = #69211
* group[=].element[=].target[=].display = "Spikevax Bivalent Original / Omicron BA.4-5, Fertigspritze"
* group[=].element[=].target[=].equivalence = #equivalent

//69465	01	Spikevax XBB.1.5 0.10 mg/ml, Dispersion zur Injektion	Moderna Switzerland GmbH	B	26.09.2023	26.09.2023	25.09.2028	J07BX
// added 2023-10-10
* group[=].element[=].target[+].code = #69465
* group[=].element[=].target[=].display = "Spikevax XBB.1.5 0.10 mg/ml"
* group[=].element[=].target[=].equivalence = #equivalent

//69484	01	Spikevax XBB.1.5 0.10 mg/ml, Dispersion zur Injektion	Moderna Switzerland GmbH	B	26.09.2023	26.09.2023	25.09.2028	J07BX
// added 2023-10-10
* group[=].element[=].target[+].code = #69484
* group[=].element[=].target[=].display = "Spikevax XBB.1.5 0.10 mg/ml"
* group[=].element[=].target[=].equivalence = #equivalent

//69488	01	Comirnaty Omicron XBB.1.5 (30 Mikrogramm)/Dosis, Injektionsdispersion	Pfizer AG	B	20.09.2023	20.09.2023	19.09.2028	J07BN01
// added 2023-10-10
* group[=].element[=].target[+].code = #69488
* group[=].element[=].target[=].display = "Comirnaty Omicron XBB.1.5 (30 Mikrogramm)/Dosis"
* group[=].element[=].target[=].equivalence = #equivalent


* group[=].element[+].code = #1162643001
* group[=].element[=].display = "Vaccine product containing only severe acute respiratory syndrome coronavirus 2 recombinant spike protein antigen (medicinal product)"
* group[=].element[=].target[+].code = #68473
* group[=].element[=].target[=].display = "Nuvaxovid 0.5 ml"
* group[=].element[=].target[=].equivalence = #equivalent


* group[=].element[+].code = #29061000087103
* group[=].element[=].display = "Vaccine product containing only recombinant non-replicating viral vector encoding Severe acute respiratory syndrome coronavirus 2 spike protein (medicinal product)"
* group[=].element[=].target[+].code = #68235
* group[=].element[=].target[=].display = "COVID-19 Vaccine Janssen"
* group[=].element[=].target[=].equivalence = #equivalent

// added 2023-05-19
* group[=].element[+].code = #1252708008
* group[=].element[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F, 22F, 23F, and 33F capsular polysaccharide conjugated antigens (medicinal product)"
* group[=].element[=].target[+].code = #68752
* group[=].element[=].target[=].display = "Vaxneuvance"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #60129
* group[=].element[=].target[=].display = "Prevenar 13"
* group[=].element[=].target[=].equivalence = #relatedto

//ERROR, http://snomed.info/sct|871873006|'Vaccine product containing only Neisseria meningitidis serogroup A, C, W135 and Y antigens (medicinal product)': The source code 'http://snomed.info/sct|871873006|Vaccine product containing only Neisseria meningitidis serogroup A, C, W135 and Y antigens (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #871873006
* group[=].element[=].display = "Vaccine product containing only Neisseria meningitidis serogroup A, C, W135 and Y antigens (medicinal product)"
* group[=].element[=].target[+].code = #654
* group[=].element[=].target[=].display = "Meningitec"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #62502
* group[=].element[=].target[=].display = "Menveo"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #656
* group[=].element[=].target[=].display = "NeisVac-C"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #652
* group[=].element[=].target[=].display = "Mencevax ACWY"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #657
* group[=].element[=].target[=].display = "Menjugate"
* group[=].element[=].target[=].equivalence = #relatedto

//ERROR, http://snomed.info/sct|871919004|'Vaccine product containing only live attenuated Human alphaherpesvirus 3 antigen (medicinal product)': The source code 'http://snomed.info/sct|871919004|Vaccine product containing only live attenuated Human alphaherpesvirus 3 antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #871919004
* group[=].element[=].display = "Vaccine product containing only live attenuated Human alphaherpesvirus 3 antigen (medicinal product)"
* group[=].element[=].target[+].code = #688
* group[=].element[=].target[=].display = "Varivax"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #585
* group[=].element[=].target[=].display = "Varilrix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #58158
* group[=].element[=].target[=].display = "Priorix-Tetra"
* group[=].element[=].target[=].equivalence = #relatedto


//ERROR, http://snomed.info/sct|1119254000|'Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F, and 23F capsular polysaccharide antigens (medicinal product)': The source code 'http://snomed.info/sct|1119254000|Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F, and 23F capsular polysaccharide antigens (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #1119254000
* group[=].element[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F, and 23F capsular polysaccharide antigens (medicinal product)': The source code 'http://snomed.info/sct|1119254000|Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F, and 23F capsular polysaccharide antigens (medicinal product)"
* group[=].element[=].target[+].code = #60129
* group[=].element[=].target[=].display = "Prevenar 13"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #643
* group[=].element[=].target[=].display = "Prevenar-7"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #509
* group[=].element[=].target[=].display = "Pneumovax-23"
* group[=].element[=].target[=].equivalence = #relatedto

//ERROR, http://snomed.info/sct|981000221107|'Streptococcus pneumoniae Danish serotype 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, and 33F capsular polysaccharide antigens only vaccine product': The source code 'http://snomed.info/sct|981000221107|Streptococcus pneumoniae Danish serotype 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, and 33F capsular polysaccharide antigens only vaccine product' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #981000221107
* group[=].element[=].display = "Streptococcus pneumoniae Danish serotype 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, and 33F capsular polysaccharide antigens only vaccine product"
* group[=].element[=].target[+].code = #60129
* group[=].element[=].target[=].display = "Prevenar 13"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #643
* group[=].element[=].target[=].display = "Prevenar-7"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #509
* group[=].element[=].target[=].display = "Pneumovax-23"
* group[=].element[=].target[=].equivalence = #relatedto

//ERROR, http://snomed.info/sct|1181000221105|'Vaccine product containing only Influenza virus antigen (medicinal product)': The source code 'http://snomed.info/sct|1181000221105|Vaccine product containing only Influenza virus antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #1181000221105
* group[=].element[=].display = "Vaccine product containing only Influenza virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #583
* group[=].element[=].target[=].display = "Fluarix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #614
* group[=].element[=].target[=].display = "Inflexal V"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #58271
* group[=].element[=].target[=].display = "Optaflu"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #660
* group[=].element[=].target[=].display = "Influvac plus"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #373
* group[=].element[=].target[=].display = "Mutagrip"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #62961
* group[=].element[=].target[=].display = "Fluarix Tetra"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #58317
* group[=].element[=].target[=].display = "Fluad"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #59267
* group[=].element[=].target[=].display = "Agrippal"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #485
* group[=].element[=].target[=].display = "Influvac"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #66427
* group[=].element[=].target[=].display = "VaxigripTetra"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #68087	
* group[=].element[=].target[=].display = "Influvac Tetra"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #66161
* group[=].element[=].target[=].display = "Foclivia (Durchstechflasche)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #66156
* group[=].element[=].target[=].display = "Foclivia (Fertigspritze)"
* group[=].element[=].target[=].equivalence = #relatedto

//ERROR, http://snomed.info/sct|1861000221106|'Vaccine product containing only live attenuated Mycobacterium bovis antigen (medicinal product)': The source code 'http://snomed.info/sct|1861000221106|Vaccine product containing only live attenuated Mycobacterium bovis antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #1861000221106
* group[=].element[=].display = "Vaccine product containing only live attenuated Mycobacterium bovis antigen (medicinal product)"
* group[=].element[=].target.code = #696
* group[=].element[=].target.display = "BCG SSI"
* group[=].element[=].target.equivalence = #relatedto

//ERROR, http://snomed.info/sct|1991000221106|'Vaccine product containing only Human papillomavirus 16 and 18 antigens (medicinal product)': The source code 'http://snomed.info/sct|1991000221106|Vaccine product containing only Human papillomavirus 16 and 18 antigens (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #1991000221106
* group[=].element[=].display = "Vaccine product containing only Human papillomavirus 16 and 18 antigens (medicinal product)"
* group[=].element[=].target[+].code = #57814
* group[=].element[=].target[=].display = "Cervarix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #57735
* group[=].element[=].target[=].display = "Gardasil"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #65387
* group[=].element[=].target[=].display = "Gardasil 9"
* group[=].element[=].target[=].equivalence = #relatedto


//ERROR, http://snomed.info/sct|1209197008|'Vaccine product containing only Human papillomavirus 6, 11, 16, 18, 31, 33, 45, 52 and 58 antigens (medicinal product)': The source code 'http://snomed.info/sct|1209197008|Vaccine product containing only Human papillomavirus 6, 11, 16, 18, 31, 33, 45, 52 and 58 antigens (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #1209197008
* group[=].element[=].display = "Vaccine product containing only Human papillomavirus 6, 11, 16, 18, 31, 33, 45, 52 and 58 antigens (medicinal product)"
* group[=].element[=].target[+].code = #65387
* group[=].element[=].target[=].display = "Gardasil 9"
* group[=].element[=].target[=].equivalence = #relatedto

//ERROR, http://snomed.info/sct|1981000221108|'Vaccine product containing only Neisseria meningitidis serogroup B antigen (medicinal product)': The source code 'http://snomed.info/sct|1981000221108|Vaccine product containing only Neisseria meningitidis serogroup B antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #1981000221108
* group[=].element[=].display = "Vaccine product containing only Neisseria meningitidis serogroup B antigen (medicinal product)"
* group[=].element[=].target[+].code = #66037	
* group[=].element[=].target[=].display = "Menjugate liquid"
* group[=].element[=].target[=].equivalence = #relatedto


//ERROR, http://snomed.info/sct|1119220001|'Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, and 33F capsular polysaccharide antigens (medicinal product)': The source code 'http://snomed.info/sct|1119220001|Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, and 33F capsular polysaccharide antigens (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #1119220001
* group[=].element[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, and 33F capsular polysaccharide antigens (medicinal product)': The source code 'http://snomed.info/sct|1119220001|Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, and 33F capsular polysaccharide antigens (medicinal product)"
* group[=].element[=].target[+].code = #68752
* group[=].element[=].target[=].display = "Vaxneuvance"
* group[=].element[=].target[=].equivalence = #relatedto


// ERROR, http://snomed.info/sct|840563003|'Vaccine product containing Dengue virus antigen (medicinal product)': The source code '840563003|Vaccine product containing Dengue virus antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
// added 2024-08-14
* group[=].element[+].code = #840563003
* group[=].element[=].display = "Vaccine product containing Dengue virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #69403
* group[=].element[=].target[=].display = "Qdenga 0.5 ml"
* group[=].element[=].target[=].equivalence = #relatedto

// ERROR, http://snomed.info/sct|836421005|'Vaccine product containing Ebolavirus antigen (medicinal product)': The source code '836421005|Vaccine product containing Ebolavirus antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
// added 2024-08-14
* group[=].element[+].code = #836421005
* group[=].element[=].display = "Vaccine product containing Ebolavirus antigen (medicinal product)"
* group[=].element[=].target[+].code = #68358
* group[=].element[=].target[=].display = "Ervebo"
* group[=].element[=].target[=].equivalence = #relatedto

// ERROR, http://snomed.info/sct|836375003|'Vaccine product containing Hepatitis A virus antigen (medicinal product)': The source code '836375003|Vaccine product containing Hepatitis A virus antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
// added 2024-08-14
* group[=].element[+].code = #836375003
* group[=].element[=].display = "Vaccine product containing Hepatitis A virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #68003
* group[=].element[=].target[=].display = "Supemtek 0.5 ml"
* group[=].element[=].target[=].equivalence = #relatedto

// ERROR, http://snomed.info/sct|836495005|'Vaccine product containing Human alphaherpesvirus 3 antigen (medicinal product)': The source code '836495005|Vaccine product containing Human alphaherpesvirus 3 antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #836495005
* group[=].element[=].display = "Vaccine product containing Human alphaherpesvirus 3 antigen (medicinal product)"
* group[=].element[=].target[+].code = #585
* group[=].element[=].target[=].display = "Varilrix"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #688
* group[=].element[=].target[=].display = "Varivax"
* group[=].element[=].target[=].equivalence = #relatedto

// ERROR, http://snomed.info/sct|836377006|'Vaccine product containing Influenza virus antigen (medicinal product)': The source code '836377006|Vaccine product containing Influenza virus antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #836377006
* group[=].element[=].display = "Vaccine product containing Influenza virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #66161
* group[=].element[=].target[=].display = "Foclivia (Durchstechflasche)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #66156
* group[=].element[=].target[=].display = "Foclivia (Fertigspritze)"
* group[=].element[=].target[=].equivalence = #relatedto

// $sct#51311000087100 "Vaccine product containing only Human orthopneumovirus antigen (medicinal product)"
// added 2024-10-17
* group[=].element[+].code = #51311000087100
* group[=].element[=].display = "Vaccine product containing only Human orthopneumovirus antigen (medicinal product)"
* group[=].element[=].target[+].code = #69310
* group[=].element[=].target[=].display = "AREXVY"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #69691 
* group[=].element[=].target[=].display = "Abrysvo, Pulver und Lösungsmittel zur Herstellung einer Injektionslösung, Pfizer AG"
* group[=].element[=].target[=].equivalence = #relatedto


// TODO
//ERROR, http://snomed.info/sct|836389008|'Vaccine product containing Vaccinia virus antigen (medicinal product)': The source code '836389008|Vaccine product containing Vaccinia virus antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #836389008
* group[=].element[=].display = "Vaccine product containing Vaccinia virus antigen (medicinal product)"
//* group[=].element[=].target[+].code = #
//* group[=].element[=].target[=].display = ""
* group[=].element[=].target[+].equivalence = #unmatched
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://snomed.info/sct|836402002|'Vaccine product containing live attenuated Mycobacterium bovis antigen (medicinal product)': The source code '836402002|Vaccine product containing live attenuated Mycobacterium bovis antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #836402002
* group[=].element[=].display = "Vaccine product containing live attenuated Mycobacterium bovis antigen (medicinal product)"
//* group[=].element[=].target[+].code = #
//* group[=].element[=].target[=].display = ""
* group[=].element[=].target[+].equivalence = #unmatched
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://snomed.info/sct|836401009|'Vaccine product containing Neisseria meningitidis antigen (medicinal product)': The source code '836401009|Vaccine product containing Neisseria meningitidis antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #836401009
* group[=].element[=].display = "Vaccine product containing Neisseria meningitidis antigen (medicinal product)"
//* group[=].element[=].target[+].code = #
//* group[=].element[=].target[=].display = ""
* group[=].element[=].target[+].equivalence = #unmatched
* group[=].element[=].target[=].comment = "TODO: mapping needed"



// //////////////////////////////////////////////////////////////////////////////////////////
// Old vaccines, missing swiss medic number                                               ///
// //////////////////////////////////////////////////////////////////////////////////////////

* group[+].source = "http://snomed.info/sct"
* group[=].target = "http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs"
* group[=].element[+].code = #871739009
* group[=].element[=].display = "Vaccine product containing only Human poliovirus antigen (medicinal product)"
* group[=].element[=].target[+].code = #17
* group[=].element[=].target[=].display = "Poliomyelitis Impfstoff Berna"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #101
* group[=].element[=].target[=].display = "Polio Salk"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #102
* group[=].element[=].target[=].display = "Polio Sabin"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #103
* group[=].element[=].target[=].display = "Poloral"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #138
* group[=].element[=].target[=].display = "K1, K2, K3"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #139
* group[=].element[=].target[=].display = "Koprowski"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #147
* group[=].element[=].target[=].display = "Polio Koprowski (K1-K3)"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #148
* group[=].element[=].target[=].display = "Polio Lilly"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #961000221100
* group[=].element[=].display = "Vaccine product containing only Salmonella enterica subspecies enterica serovar Typhi antigen (medicinal product)"
* group[=].element[=].target[+].code = #25
* group[=].element[=].target[=].display = "Vivotif L"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #143
* group[=].element[=].target[=].display = "TAB oral"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871875004
* group[=].element[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[+].code = #35
* group[=].element[=].target[=].display = "Infanrix DTPa"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #76
* group[=].element[=].target[=].display = "Acel Immune"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #79
* group[=].element[=].target[=].display = "Anatoxal DiTePer"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #155
* group[=].element[=].target[=].display = "DiTePer Anatoxal"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #166
* group[=].element[=].target[=].display = "Infanrix"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871765008
* group[=].element[=].display = "Vaccine product containing only Measles morbillivirus antigen (medicinal product)"
* group[=].element[=].target[+].code = #47
* group[=].element[=].target[=].display = "Attenuvax"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #120
* group[=].element[=].target[=].display = "Moruman"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871822003
* group[=].element[=].display = "Vaccine product containing only Hepatitis B virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #53
* group[=].element[=].target[=].display = "HBVAXPRO 5"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #118
* group[=].element[=].target[=].display = "Hevac B"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #162
* group[=].element[=].target[=].display = "HBVAX DNA 5"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #163
* group[=].element[=].target[=].display = "HBVAX DNA 10"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #164
* group[=].element[=].target[=].display = "HBVAX DNA 40"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #170
* group[=].element[=].target[=].display = "Engerix-B 40"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #172
* group[=].element[=].target[=].display = "Hepavax"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871866001
* group[=].element[=].display = "Vaccine product containing only Neisseria meningitidis serogroup C antigen (medicinal product)"
* group[=].element[=].target[+].code = #55
* group[=].element[=].target[=].display = "Meningokokken-Impfstoff A+C Mérieux"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871803007
* group[=].element[=].display = "Vaccine product containing only Hepatitis A and Hepatitis B virus antigens (medicinal product)"
* group[=].element[=].target[+].code = #74
* group[=].element[=].target[=].display = "Twinrix 360/10"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871831003
* group[=].element[=].display = "Vaccine product containing only Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)"
* group[=].element[=].target[+].code = #75
* group[=].element[=].target[=].display = "Pluserix"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #119
* group[=].element[=].target[=].display = "MMR-I"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #123
* group[=].element[=].target[=].display = "Trimovax"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871764007
* group[=].element[=].display = "Vaccine product containing only Haemophilus influenzae type B antigen (medicinal product)"
* group[=].element[=].target[+].code = #78
* group[=].element[=].target[=].display = "Act-Hib"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #92
* group[=].element[=].target[=].display = "HibTiter"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #98
* group[=].element[=].target[=].display = "Pedvax"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #133
* group[=].element[=].target[=].display = "ProHibit"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871826000
* group[=].element[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[+].code = #80
* group[=].element[=].target[=].display = "Anatoxal DiTe Erwachsene"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #81
* group[=].element[=].target[=].display = "Anatoxal DiTe N Erwachsene"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #126
* group[=].element[=].target[=].display = "Ditanrix pediatric"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #134
* group[=].element[=].target[=].display = "Anatoxal DiTe Kinder"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #154
* group[=].element[=].target[=].display = "DiTe Anatoxal Kinder / Enfants"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871742003
* group[=].element[=].display = "Vaccine product containing only Clostridium tetani antigen (medicinal product)"
* group[=].element[=].target[+].code = #83
* group[=].element[=].target[=].display = "Anatoxal Te"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #84
* group[=].element[=].target[=].display = "Anatoxal Te N"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #168
* group[=].element[=].target[=].display = "Tanrix"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871717007
* group[=].element[=].display = "Vaccine product containing only Yellow fever virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #86
* group[=].element[=].target[=].display = "Arilvax"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871726005
* group[=].element[=].display = "Vaccine product containing only Rabies lyssavirus antigen (medicinal product)"
* group[=].element[=].target[+].code = #94
* group[=].element[=].target[=].display = "Lyssavac Berna"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871737006
* group[=].element[=].display = "Vaccine product containing only Mumps orthorubulavirus antigen (medicinal product)"
* group[=].element[=].target[+].code = #97
* group[=].element[=].target[=].display = "Mumaten"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871887006
* group[=].element[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[+].code = #99
* group[=].element[=].target[=].display = "Pentacoq"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #1052328007
* group[=].element[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 4, 6B, 9V, 14, 18C, 19F, and 23F capsular polysaccharide antigens conjugated (medicinal product)"
* group[=].element[=].target[+].code = #100
* group[=].element[=].target[=].display = "Pnu-Immune"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871878002
* group[=].element[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[+].code = #106
* group[=].element[=].target[=].display = "Tetracoq"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871751006
* group[=].element[=].display = "Vaccine product containing only Hepatitis A virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #110
* group[=].element[=].target[=].display = "Vaqta"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #115
* group[=].element[=].target[=].display = "Havrix 360"
* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #165
* group[=].element[=].target[=].display = "Havrix junior"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #871719005
* group[=].element[=].display = "Vaccine product containing only Tick-borne encephalitis virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #128
* group[=].element[=].target[=].display = "FSME-Immun Injekt"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #991000221105
* group[=].element[=].display = "Vaccine product containing only Vibrio cholerae antigen (medicinal product)"
* group[=].element[=].target[+].code = #16
* group[=].element[=].target[=].display = "Orochol E"
* group[=].element[=].target[=].equivalence = #equivalent


//ERROR, http://snomed.info/sct|871873006|'Vaccine product containing only Neisseria meningitidis serogroup A, C, W135 and Y antigens (medicinal product)': The source code 'http://snomed.info/sct|871873006|Vaccine product containing only Neisseria meningitidis serogroup A, C, W135 and Y antigens (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #871873006
* group[=].element[=].display = "Vaccine product containing only Neisseria meningitidis serogroup A, C, W135 and Y antigens (medicinal product)"
* group[=].element[=].target.code = #55
* group[=].element[=].target.display = "Meningokokken-Impfstoff A+C Mérieux"
* group[=].element[=].target.equivalence = #relatedto

//ERROR, http://snomed.info/sct|1119254000|'Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F, and 23F capsular polysaccharide antigens (medicinal product)': The source code 'http://snomed.info/sct|1119254000|Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F, and 23F capsular polysaccharide antigens (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #1119254000
* group[=].element[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F, and 23F capsular polysaccharide antigens (medicinal product)': The source code 'http://snomed.info/sct|1119254000|Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F, and 23F capsular polysaccharide antigens (medicinal product)"
* group[=].element[=].target.code = #100
* group[=].element[=].target.display = "Pnu-Immune"
* group[=].element[=].target.equivalence = #relatedto

//ERROR, http://snomed.info/sct|981000221107|'Streptococcus pneumoniae Danish serotype 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, and 33F capsular polysaccharide antigens only vaccine product': The source code 'http://snomed.info/sct|981000221107|Streptococcus pneumoniae Danish serotype 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, and 33F capsular polysaccharide antigens only vaccine product' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #981000221107
* group[=].element[=].display = "Streptococcus pneumoniae Danish serotype 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, and 33F capsular polysaccharide antigens only vaccine product': The source code 'http://snomed.info/sct|981000221107|Streptococcus pneumoniae Danish serotype 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, and 33F capsular polysaccharide antigens only vaccine product"
* group[=].element[=].target.code = #100
* group[=].element[=].target.display = "Pnu-Immune"
* group[=].element[=].target.equivalence = #relatedto

// TODO ??
//ERROR, http://snomed.info/sct|871919004|'Vaccine product containing only live attenuated Human alphaherpesvirus 3 antigen (medicinal product)': The source code 'http://snomed.info/sct|871919004|Vaccine product containing only live attenuated Human alphaherpesvirus 3 antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
//ERROR, http://snomed.info/sct|1181000221105|'Vaccine product containing only Influenza virus antigen (medicinal product)': The source code 'http://snomed.info/sct|1181000221105|Vaccine product containing only Influenza virus antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
//ERROR, http://snomed.info/sct|1861000221106|'Vaccine product containing only live attenuated Mycobacterium bovis antigen (medicinal product)': The source code 'http://snomed.info/sct|1861000221106|Vaccine product containing only live attenuated Mycobacterium bovis antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
//ERROR, http://snomed.info/sct|1991000221106|'Vaccine product containing only Human papillomavirus 16 and 18 antigens (medicinal product)': The source code 'http://snomed.info/sct|1991000221106|Vaccine product containing only Human papillomavirus 16 and 18 antigens (medicinal product)' is defined in the valueset but not in the conceptmap.
//ERROR, http://snomed.info/sct|1209197008|'Vaccine product containing only Human papillomavirus 6, 11, 16, 18, 31, 33, 45, 52 and 58 antigens (medicinal product)': The source code 'http://snomed.info/sct|1209197008|Vaccine product containing only Human papillomavirus 6, 11, 16, 18, 31, 33, 45, 52 and 58 antigens (medicinal product)' is defined in the valueset but not in the conceptmap.
//ERROR, http://snomed.info/sct|1981000221108|'Vaccine product containing only Neisseria meningitidis serogroup B antigen (medicinal product)': The source code 'http://snomed.info/sct|1981000221108|Vaccine product containing only Neisseria meningitidis serogroup B antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
//ERROR, http://snomed.info/sct|1119220001|'Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, and 33F capsular polysaccharide antigens (medicinal product)': The source code 'http://snomed.info/sct|1119220001|Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, and 33F capsular polysaccharide antigens (medicinal product)' is defined in the valueset but not in the conceptmap.



---

// File: input/fsh/conceptmap/ch-vacd-vaccines-sct-targetdiseases-cm.fsh

Instance: ch-vacd-vaccines-sct-targetdiseases-cm
InstanceOf: ConceptMap
Usage: #definition
* url = "http://fhir.ch/ig/ch-vacd/ConceptMap/ch-vacd-vaccines-sct-targetdiseases-cm"
* name = "SnomedCTVaccineCodeToTargetDiseaseMapping"
* title = "Snomed CT VaccineCode To TargetDisease Mapping"
* description = "Mappings from SnomedCT vaccine code to target disease according to the correcsponding valuesets"
* status = #active
* publisher = "eHealth Suisse"
* contact.name = "eHealth Suisse"
* contact.telecom.system = #url
* contact.telecom.value = "https://www.e-health-suisse.ch/"
* copyright = "This artefact includes content from SNOMED Clinical Terms® (SNOMED CT®) which is copyright of the International Health Terminology Standards Development Organisation (IHTSDO). Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license - for more information contact http://www.snomed.org/snomed-ct/getsnomed-ct or info@snomed.org."
* experimental = false
* sourceUri = "http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-vaccines-snomedct-vs"
* targetUri = "http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-targetdiseasesandillnessesundergoneforimmunization-vs"


* group[0].source = "http://snomed.info/sct"
* group[=].target = "http://snomed.info/sct"


* group[=].element[+].code = #871717007
* group[=].element[=].display = "Vaccine product containing only Yellow fever virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #16541001
* group[=].element[=].target[=].display =  "Yellow fever (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871719005
* group[=].element[=].display = "Vaccine product containing only Tick-borne encephalitis virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #712986001
* group[=].element[=].target[=].display =  "Central European encephalitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871724008	
* group[=].element[=].display = "Vaccine product containing only Japanese encephalitis virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #52947006
* group[=].element[=].target[=].display =  "Japanese encephalitis virus disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto



* group[=].element[+].code = #871726005	
* group[=].element[=].display = "Vaccine product containing only Rabies lyssavirus antigen (medicinal product)"
* group[=].element[=].target[+].code = #14168008
* group[=].element[=].target[=].display = "Rabies (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871737006	
* group[=].element[=].display = "Vaccine product containing only Mumps orthorubulavirus antigen (medicinal product)"
* group[=].element[=].target[+].code = #36989005
* group[=].element[=].target[=].display =  "Mumps (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871739009	
* group[=].element[=].display = "Vaccine product containing only Human poliovirus antigen (medicinal product)"
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display =  "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871742003	
* group[=].element[=].display = "Vaccine product containing only Clostridium tetani antigen (medicinal product)"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display =  "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871751006	
* group[=].element[=].display = "Vaccine product containing only Hepatitis A virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #40468003
* group[=].element[=].target[=].display =  "Viral hepatitis, type A (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871761004	
* group[=].element[=].display = "Vaccine product containing only Rotavirus antigen (medicinal product)"
* group[=].element[=].target[+].code = #18624000
* group[=].element[=].target[=].display =  "Disease caused by Rotavirus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871764007	
* group[=].element[=].display = "Vaccine product containing only Haemophilus influenzae type B antigen (medicinal product)"
* group[=].element[=].target[+].code = #709410003
* group[=].element[=].target[=].display =  "Haemophilus influenzae type b infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871765008	
* group[=].element[=].display = "Vaccine product containing only Measles morbillivirus antigen (medicinal product)"
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display =  "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871803007	
* group[=].element[=].display = "Vaccine product containing only Hepatitis A and Hepatitis B virus antigens (medicinal product)"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #40468003
* group[=].element[=].target[=].display = "Viral hepatitis, type A (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871822003	
* group[=].element[=].display = "Vaccine product containing only Hepatitis B virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display =  "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871826000	
* group[=].element[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display =  "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display =  "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871831003	
* group[=].element[=].display = "Vaccine product containing only Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)"
* group[=].element[=].target[+].code = #36653000
* group[=].element[=].target[=].display =  "Rubella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display =  "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #36989005
* group[=].element[=].target[=].display =  "Mumps (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871837004	
* group[=].element[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display =  "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display =  "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display =  "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871866001	
* group[=].element[=].display = "Vaccine product containing only Neisseria meningitidis serogroup C antigen (medicinal product)"
* group[=].element[=].target[+].code = #23511006
* group[=].element[=].target[=].display =  "Meningococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871873006	
* group[=].element[=].display = "Vaccine product containing only Neisseria meningitidis serogroup A, C, W135 and Y antigens (medicinal product)"
* group[=].element[=].target[+].code = #23511006
* group[=].element[=].target[=].display =  "Meningococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871875004	
* group[=].element[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display =  "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display =  "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display =  "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871878002	
* group[=].element[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display =  "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display =  "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display =  "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display =  "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871887006	
* group[=].element[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[+].code = #709410003
* group[=].element[=].target[=].display =  "Haemophilus influenzae type b infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display =  "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display =  "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display =  "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display =  "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871895005	
* group[=].element[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Hepatitis B virus and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[+].code = #709410003
* group[=].element[=].target[=].display =  "Haemophilus influenzae type b infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display =  "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display =  "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display =  "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display =  "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display =  "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871908002	
* group[=].element[=].display = "Vaccine product containing only Human alphaherpesvirus 3 and Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)"
* group[=].element[=].target[+].code = #38907003
* group[=].element[=].target[=].display =  "Varicella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #36653000
* group[=].element[=].target[=].display =  "Rubella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display =  "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #36989005
* group[=].element[=].target[=].display =  "Mumps (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #871919004	
* group[=].element[=].display = "Vaccine product containing only live attenuated Human alphaherpesvirus 3 antigen (medicinal product)"
* group[=].element[=].target[+].code = #38907003
* group[=].element[=].target[=].display =  "Varicella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #4740000
* group[=].element[=].target[=].display =  "Herpes zoster (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #1052328007	
* group[=].element[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 4, 6B, 9V, 14, 18C, 19F, and 23F capsular polysaccharide antigens conjugated (medicinal product)"
* group[=].element[=].target[+].code = #16814004
* group[=].element[=].target[=].display =  "Pneumococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #1119254000	
* group[=].element[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F, and 23F capsular polysaccharide antigens (medicinal product)"
* group[=].element[=].target[+].code = #16814004
* group[=].element[=].target[=].display =  "Pneumococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #1119349007	
* group[=].element[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display =  "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #1156183006	
* group[=].element[=].display = "Vaccine product containing only Human alphaherpesvirus 3 recombinant surface glycoprotein E antigen (medicinal product)"
* group[=].element[=].target[+].code = #4740000
* group[=].element[=].target[=].display =  "Herpes zoster (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #961000221100	
* group[=].element[=].display = "Vaccine product containing only Salmonella enterica subspecies enterica serovar Typhi antigen (medicinal product)"
* group[=].element[=].target[+].code = #4834000
* group[=].element[=].target[=].display =  "Typhoid fever (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #981000221107	
* group[=].element[=].display = "Streptococcus pneumoniae Danish serotype 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, and 33F capsular polysaccharide antigens only vaccine product"
* group[=].element[=].target[+].code = #16814004
* group[=].element[=].target[=].display =  "Pneumococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #991000221105	
* group[=].element[=].display = "Vaccine product containing only Vibrio cholerae antigen (medicinal product)"
* group[=].element[=].target[+].code = #63650001
* group[=].element[=].target[=].display =  "Cholera (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #1181000221105	
* group[=].element[=].display = "Vaccine product containing only Influenza virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #719590007
* group[=].element[=].target[=].display =  "Influenza caused by seasonal influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #719865001
* group[=].element[=].target[=].display =  "Influenza caused by pandemic influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #1861000221106	
* group[=].element[=].display = "Vaccine product containing only live attenuated Mycobacterium bovis antigen (medicinal product)"
* group[=].element[=].target[+].code = #56717001
* group[=].element[=].target[=].display =  "Tuberculosis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #240532009
* group[=].element[=].target[=].display =  "Human papillomavirus infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #2001000221108	
* group[=].element[=].display = "Vaccine product containing only Human papillomavirus 6, 11, 16 and 18 antigens (medicinal product)"
* group[=].element[=].target[+].code = #240532009
* group[=].element[=].target[=].display =  "Human papillomavirus infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #29061000087103	
* group[=].element[=].display = "Vaccine product containing only recombinant non-replicating viral vector encoding Severe acute respiratory syndrome coronavirus 2 spike protein (medicinal product)"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display =  "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

// added 2022-06-08
* group[=].element[+].code = #1162643001
* group[=].element[=].display = "Vaccine product containing only severe acute respiratory syndrome coronavirus 2 recombinant spike protein antigen (medicinal product)"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display =  "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto


//ERROR, http://snomed.info/sct|1991000221106|'Vaccine product containing only Human papillomavirus 16 and 18 antigens (medicinal product)': The source code 'http://snomed.info/sct|1991000221106|Vaccine product containing only Human papillomavirus 16 and 18 antigens (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #1991000221106
* group[=].element[=].display = "Vaccine product containing only Human papillomavirus 16 and 18 antigens (medicinal product)"
* group[=].element[=].target[+].code = #240532009
* group[=].element[=].target[=].display = "Human papillomavirus infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//ERROR, http://snomed.info/sct|1209197008|'Vaccine product containing only Human papillomavirus 6, 11, 16, 18, 31, 33, 45, 52 and 58 antigens (medicinal product)': The source code 'http://snomed.info/sct|1209197008|Vaccine product containing only Human papillomavirus 6, 11, 16, 18, 31, 33, 45, 52 and 58 antigens (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #1209197008
* group[=].element[=].display = "Vaccine product containing only Human papillomavirus 6, 11, 16, 18, 31, 33, 45, 52 and 58 antigens (medicinal product)"
* group[=].element[=].target[+].code = #240532009
* group[=].element[=].target[=].display = "Human papillomavirus infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//ERROR, http://snomed.info/sct|1981000221108|'Vaccine product containing only Neisseria meningitidis serogroup B antigen (medicinal product)': The source code 'http://snomed.info/sct|1981000221108|Vaccine product containing only Neisseria meningitidis serogroup B antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #1981000221108
* group[=].element[=].display = "Vaccine product containing only Neisseria meningitidis serogroup B antigen (medicinal product)"
* group[=].element[=].target[+].code = #860805006
* group[=].element[=].target[=].display = "Encephalomyelitis caused by Neisseria meningitidis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//ERROR, http://snomed.info/sct|1119220001|'Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, and 33F capsular polysaccharide antigens (medicinal product)': The source code 'http://snomed.info/sct|1119220001|Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, and 33F capsular polysaccharide antigens (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #1119220001
* group[=].element[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, and 33F capsular polysaccharide antigens (medicinal product)"
* group[=].element[=].target[+].code = #16814004
* group[=].element[=].target[=].display = "Pneumococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//ERROR, http://snomed.info/sct|1252708008|'Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F, 22F, 23F, and 33F capsular polysaccharide conjugated antigens (medicinal product)': The source code 'http://snomed.info/sct|1252708008|Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F, 22F, 23F, and 33F capsular polysaccharide conjugated antigens (medicinal product)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #1252708008
* group[=].element[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F, 22F, 23F, and 33F capsular polysaccharide conjugated antigens (medicinal product)"
* group[=].element[=].target[+].code = #16814004
* group[=].element[=].target[=].display = "Pneumococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto


// added 2024-08-09
* group[=].element[+].code = #840563003
* group[=].element[=].display = "Vaccine product containing Dengue virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #38362002
* group[=].element[=].target[=].display = "Dengue (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

// added 2024-08-09
* group[=].element[+].code = #836389008
* group[=].element[=].display = "Vaccine product containing Vaccinia virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #111852003
* group[=].element[=].target[=].display = "Vaccinia (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

// ERROR, http://snomed.info/sct|836401009|'Vaccine product containing Neisseria meningitidis antigen (medicinal product)': The source code '836401009|Vaccine product containing Neisseria meningitidis antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
// added 2024-08-14
* group[=].element[+].code = #836401009
* group[=].element[=].display = "Vaccine product containing Neisseria meningitidis antigen (medicinal product)"
* group[=].element[=].target[+].code = #860805006
* group[=].element[=].target[=].display = "Encephalomyelitis caused by Neisseria meningitidis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

// ERROR, http://snomed.info/sct|836377006|'Vaccine product containing Influenza virus antigen (medicinal product)': The source code '836377006|Vaccine product containing Influenza virus antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
// added 2024-08-14
* group[=].element[+].code = #836377006
* group[=].element[=].display = "Vaccine product containing Influenza virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #719865001
* group[=].element[=].target[=].display = "Influenza caused by pandemic influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

// ERROR, http://snomed.info/sct|836495005|'Vaccine product containing Human alphaherpesvirus 3 antigen (medicinal product)': The source code '836495005|Vaccine product containing Human alphaherpesvirus 3 antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
// added 2024-08-14
* group[=].element[+].code = #836495005
* group[=].element[=].display = "Vaccine product containing Human alphaherpesvirus 3 antigen (medicinal product)"
* group[=].element[=].target[+].code = #38907003
* group[=].element[=].target[=].display = "Varicella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

// ERROR, http://snomed.info/sct|836375003|'Vaccine product containing Hepatitis A virus antigen (medicinal product)': The source code '836375003|Vaccine product containing Hepatitis A virus antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
// added 2024-08-14
* group[=].element[+].code = #836375003
* group[=].element[=].display = "Vaccine product containing Hepatitis A virus antigen (medicinal product)"
* group[=].element[=].target[+].code = #40468003 
* group[=].element[=].target[=].display = "Viral hepatitis, type A (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

// ERROR, http://snomed.info/sct|836421005|'Vaccine product containing Ebolavirus antigen (medicinal product)': The source code '836421005|Vaccine product containing Ebolavirus antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
// added 2024-08-14
* group[=].element[+].code = #836421005
* group[=].element[=].display = "Vaccine product containing Ebolavirus antigen (medicinal product)"
* group[=].element[=].target[+].code = #37109004
* group[=].element[=].target[=].display = "Ebola virus disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

// added 2024-10-17
// $sct#51311000087100 "Vaccine product containing only Human orthopneumovirus antigen (medicinal product)"
* group[=].element[+].code = #51311000087100
* group[=].element[=].display = "Vaccine product containing only Human orthopneumovirus antigen (medicinal product)"
* group[=].element[=].target[+].code = #55735004 
* group[=].element[=].target[=].display = "Respiratory syncytial virus infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

// TODO
// ERROR, http://snomed.info/sct|836402002|'Vaccine product containing live attenuated Mycobacterium bovis antigen (medicinal product)': The source code '836402002|Vaccine product containing live attenuated Mycobacterium bovis antigen (medicinal product)' is defined in the valueset but not in the conceptmap.
// added 2024-08-14
* group[=].element[+].code = #836402002
* group[=].element[=].display = "Vaccine product containing live attenuated Mycobacterium bovis antigen (medicinal product)"
//* group[=].element[=].target[+].code = #
//* group[=].element[=].target[=].display = ""
//* group[=].element[=].target[=].equivalence = #relatedto

---

// File: input/fsh/conceptmap/ch-vacd-vaccines-sm-sct-cm.fsh

Instance: ch-vacd-vaccines-sm-sct-cm
InstanceOf: ConceptMap
Usage: #definition
* url = "http://fhir.ch/ig/ch-vacd/ConceptMap/ch-vacd-vaccines-sm-sct-cm"
* name = "VaccineCodeSMToVaccineCodeSCT"
* title = "SwissMedic VaccineCode To Snomed CT VaccineCode"
* description = "Mappings from vaccine code to vaccine code"
* status = #active
* publisher = "eHealth Suisse"
* contact.name = "eHealth Suisse"
* contact.telecom.system = #url
* contact.telecom.value = "https://www.e-health-suisse.ch/"
* copyright = "This artefact includes content from SNOMED Clinical Terms® (SNOMED CT®) which is copyright of the International Health Terminology Standards Development Organisation (IHTSDO). Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license - for more information contact http://www.snomed.org/snomed-ct/getsnomed-ct or info@snomed.org."
* experimental = false
* sourceUri = "http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-vaccines-vs"
* targetUri = "http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-vaccines-snomedct-vs"

* group[+].source = "http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs"
* group[=].target = "http://snomed.info/sct"
* group[=].element[+].code = #683
* group[=].element[=].display = "FSME-Immun 0.25 ml Junior"
* group[=].element[=].target[+].code = #871719005
* group[=].element[=].target[=].display = "Vaccine product containing only Tick-borne encephalitis virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #450
* group[=].element[=].display = "FSME-Immun CC"
* group[=].element[=].target[+].code = #871719005
* group[=].element[=].target[=].display = "Vaccine product containing only Tick-borne encephalitis virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #656
* group[=].element[=].display = "NeisVac-C"
* group[=].element[=].target[+].code = #871866001
* group[=].element[=].target[=].display = "Vaccine product containing only Neisseria meningitidis serogroup C antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #627
* group[=].element[=].display = "Encepur N"
* group[=].element[=].target[+].code = #871719005
* group[=].element[=].target[=].display = "Vaccine product containing only Tick-borne encephalitis virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #628
* group[=].element[=].display = "Encepur N Kinder / Enfants"
* group[=].element[=].target[+].code = #871719005
* group[=].element[=].target[=].display = "Vaccine product containing only Tick-borne encephalitis virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #572
* group[=].element[=].display = "Epaxal"
* group[=].element[=].target[+].code = #871751006
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis A virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #544
* group[=].element[=].display = "Heprecomb"
* group[=].element[=].target[+].code = #871822003
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis B virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #642
* group[=].element[=].display = "Heprecomb Kinder"
* group[=].element[=].target[+].code = #871822003
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis B virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #657
* group[=].element[=].display = "Menjugate"
* group[=].element[=].target[+].code = #871866001
* group[=].element[=].target[=].display = "Vaccine product containing only Neisseria meningitidis serogroup C antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #533
* group[=].element[=].display = "Moraten"
* group[=].element[=].target[+].code = #871765008
* group[=].element[=].target[=].display = "Vaccine product containing only Measles morbillivirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #555
* group[=].element[=].display = "Orochol"
* group[=].element[=].target[+].code = #991000221105
* group[=].element[=].target[=].display = "Vaccine product containing only Vibrio cholerae antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #685
* group[=].element[=].display = "Rabipur"
* group[=].element[=].target[+].code = #871726005
* group[=].element[=].target[=].display = "Vaccine product containing only Rabies lyssavirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #702
* group[=].element[=].display = "Td-pur"
* group[=].element[=].target[+].code = #871826000
* group[=].element[=].target[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #686
* group[=].element[=].display = "Td-Virelon"
* group[=].element[=].target[+].code = #871837004
* group[=].element[=].target[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #467
* group[=].element[=].display = "Vivotif"
* group[=].element[=].target[+].code = #961000221100
* group[=].element[=].target[=].display = "Vaccine product containing only Salmonella enterica subspecies enterica serovar Typhi antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #637
* group[=].element[=].display = "Boostrix"
* group[=].element[=].target[+].code = #871875004
* group[=].element[=].target[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #681
* group[=].element[=].display = "Boostrix Polio"
* group[=].element[=].target[+].code = #871878002
* group[=].element[=].target[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #567
* group[=].element[=].display = "Ditanrix"
* group[=].element[=].target[+].code = #871826000
* group[=].element[=].target[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #551
* group[=].element[=].display = "Engerix-B 10"
* group[=].element[=].target[+].code = #871822003
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis B virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #534
* group[=].element[=].display = "Engerix-B 20"
* group[=].element[=].target[+].code = #871822003
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis B virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #558
* group[=].element[=].display = "Havrix 1440"
* group[=].element[=].target[+].code = #871751006
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis A virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #599
* group[=].element[=].display = "Havrix 720"
* group[=].element[=].target[+].code = #871751006
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis A virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #603
* group[=].element[=].display = "Hiberix"
* group[=].element[=].target[+].code = #871764007
* group[=].element[=].target[=].display = "Vaccine product containing only Haemophilus influenzae type B antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #638
* group[=].element[=].display = "Infanrix DTPa-IPV"
* group[=].element[=].target[+].code = #871878002
* group[=].element[=].target[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #619
* group[=].element[=].display = "Infanrix DTPa-IPV+Hib"
* group[=].element[=].target[+].code = #871887006
* group[=].element[=].target[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #640
* group[=].element[=].display = "Infanrix hexa"
* group[=].element[=].target[+].code = #871895005
* group[=].element[=].target[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Hepatitis B virus and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #669
* group[=].element[=].display = "Poliorix"
* group[=].element[=].target[+].code = #871739009
* group[=].element[=].target[=].display = "Vaccine product containing only Human poliovirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #615
* group[=].element[=].display = "Priorix"
* group[=].element[=].target[+].code = #871831003
* group[=].element[=].target[=].display = "Vaccine product containing only Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #592
* group[=].element[=].display = "Twinrix 720/20"
* group[=].element[=].target[+].code = #871803007
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis A and Hepatitis B virus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #528
* group[=].element[=].display = "Gen H-B-Vax 10"
* group[=].element[=].target[+].code = #871822003
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis B virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #545
* group[=].element[=].display = "HBVAXPRO 40"
* group[=].element[=].target[+].code = #871822003
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis B virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #610
* group[=].element[=].display = "Gen H-B-Vax 5"
* group[=].element[=].target[+].code = #871822003
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis B virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #663
* group[=].element[=].display = "HBVAXPRO 10"
* group[=].element[=].target[+].code = #871822003
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis B virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #268
* group[=].element[=].display = "MMR-II"
* group[=].element[=].target[+].code = #871831003
* group[=].element[=].target[=].display = "Vaccine product containing only Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #247
* group[=].element[=].display = "Mumpsvax"
* group[=].element[=].target[+].code = #871737006
* group[=].element[=].target[=].display = "Vaccine product containing only Mumps orthorubulavirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #613
* group[=].element[=].display = "Pentavac"
* group[=].element[=].target[+].code = #871887006
* group[=].element[=].target[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #509
* group[=].element[=].display = "Pneumovax-23"
* group[=].element[=].target[+].code = #1052328007
* group[=].element[=].target[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 4, 6B, 9V, 14, 18C, 19F, and 23F capsular polysaccharide antigens conjugated (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #646
* group[=].element[=].display = "Revaxis"
* group[=].element[=].target[+].code = #871837004
* group[=].element[=].target[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #520
* group[=].element[=].display = "Stamaril"
* group[=].element[=].target[+].code = #871717007
* group[=].element[=].target[=].display = "Vaccine product containing only Yellow fever virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #612
* group[=].element[=].display = "Tetravac"
* group[=].element[=].target[+].code = #871878002
* group[=].element[=].target[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #417
* group[=].element[=].display = "Tollwut Impfstoff Mérieux"
* group[=].element[=].target[+].code = #871726005
* group[=].element[=].target[=].display = "Vaccine product containing only Rabies lyssavirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #654
* group[=].element[=].display = "Meningitec"
* group[=].element[=].target[+].code = #871866001
* group[=].element[=].target[=].display = "Vaccine product containing only Neisseria meningitidis serogroup C antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #643
* group[=].element[=].display = "Prevenar-7"
* group[=].element[=].target[+].code = #1052328007
* group[=].element[=].target[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 4, 6B, 9V, 14, 18C, 19F, and 23F capsular polysaccharide antigens conjugated (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #644
* group[=].element[=].display = "Hexavac"
* group[=].element[=].target[+].code = #871895005
* group[=].element[=].target[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Hepatitis B virus and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #711
* group[=].element[=].display = "DiTe pediatric adsorbed"
* group[=].element[=].target[+].code = #871826000
* group[=].element[=].target[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #711-01
* group[=].element[=].display = "Diphtherie- und Tetanus-Adsorbatimpfstoff für Kinder unter 8 Jahren"
* group[=].element[=].target[+].code = #871826000
* group[=].element[=].target[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #711-02
* group[=].element[=].display = "Diphtherie- und Tetanus-Adsorbatimpfstoff für Erwachsene und Kinder ab 7 Jahren"
* group[=].element[=].target[+].code = #871826000
* group[=].element[=].target[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #704
* group[=].element[=].display = "Dukoral"
* group[=].element[=].target[+].code = #991000221105
* group[=].element[=].target[=].display = "Vaccine product containing only Vibrio cholerae antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #483
* group[=].element[=].display = "Rimevax"
* group[=].element[=].target[+].code = #871765008
* group[=].element[=].target[=].display = "Vaccine product containing only Measles morbillivirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #707
* group[=].element[=].display = "Tetanol pur"
* group[=].element[=].target[+].code = #871742003
* group[=].element[=].target[=].display = "Vaccine product containing only Clostridium tetani antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #57735
* group[=].element[=].display = "Gardasil"
* group[=].element[=].target[+].code = #2001000221108
* group[=].element[=].target[=].display = "Vaccine product containing only Human papillomavirus 6, 11, 16 and 18 antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #709
* group[=].element[=].display = "Zostavax"
* group[=].element[=].target[+].code = #1156183006
* group[=].element[=].target[=].display = "Vaccine product containing only Human alphaherpesvirus 3 recombinant surface glycoprotein E antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #58158
* group[=].element[=].display = "Priorix-Tetra"
* group[=].element[=].target[+].code = #871908002
* group[=].element[=].target[=].display = "Vaccine product containing only Human alphaherpesvirus 3 and Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #60150
* group[=].element[=].display = "Rotarix"
* group[=].element[=].target[+].code = #871761004
* group[=].element[=].target[=].display = "Vaccine product containing only Rotavirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #703
* group[=].element[=].display = "MMRVaxPro"
* group[=].element[=].target[+].code = #871831003
* group[=].element[=].target[=].display = "Vaccine product containing only Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #58506
* group[=].element[=].display = "Measles vaccine live"
* group[=].element[=].target[+].code = #871765008
* group[=].element[=].target[=].display = "Vaccine product containing only Measles morbillivirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #57814
* group[=].element[=].display = "Cervarix"
* group[=].element[=].target[+].code = #2001000221108
* group[=].element[=].target[=].display = "Vaccine product containing only Human papillomavirus 6, 11, 16 and 18 antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #60129
* group[=].element[=].display = "Prevenar 13"
* group[=].element[=].target[+].code = #1052328007
* group[=].element[=].target[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 4, 6B, 9V, 14, 18C, 19F, and 23F capsular polysaccharide antigens conjugated (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #59147
* group[=].element[=].display = "Ixiaro"
* group[=].element[=].target[+].code = #871724008
* group[=].element[=].target[=].display = "Vaccine product containing only Japanese encephalitis virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #62502
* group[=].element[=].display = "Menveo"
* group[=].element[=].target[+].code = #871866001
* group[=].element[=].target[=].display = "Vaccine product containing only Neisseria meningitidis serogroup C antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #600
* group[=].element[=].display = "DiTe Anatoxal Erwachsene / Adultes"
* group[=].element[=].target[+].code = #871826000
* group[=].element[=].target[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #690
* group[=].element[=].display = "DiTe Anatoxal N Erwachsene / Adultes"
* group[=].element[=].target[+].code = #871826000
* group[=].element[=].target[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #689
* group[=].element[=].display = "Te Anatoxal N"
* group[=].element[=].target[+].code = #871742003
* group[=].element[=].target[=].display = "Vaccine product containing only Clostridium tetani antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #699
* group[=].element[=].display = "ProQuad"
* group[=].element[=].target[+].code = #871908002
* group[=].element[=].target[=].display = "Vaccine product containing only Human alphaherpesvirus 3 and Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #65387
* group[=].element[=].display = "Gardasil 9"
* group[=].element[=].target[+].code = #2001000221108
* group[=].element[=].target[=].display = "Vaccine product containing only Human papillomavirus 6, 11, 16 and 18 antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #66940
* group[=].element[=].display = "Vaxelis"
* group[=].element[=].target[+].code = #871895005
* group[=].element[=].target[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Hepatitis B virus and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #68267
* group[=].element[=].display = "Spikevax (COVID-19 Vaccine, Moderna)"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #68225
* group[=].element[=].display = "Comirnaty (COVID-19 Vaccine, Pfizer)"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent



* group[=].element[+].code = #67987
* group[=].element[=].display = "Shingrix"
* group[=].element[=].target[+].code = #1156183006
* group[=].element[=].target[=].display = "Vaccine product containing only Human alphaherpesvirus 3 recombinant surface glycoprotein E antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #68710-01
* group[=].element[=].display = "Comirnaty® 30 Mikrogramm/Dosis"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #68710-02
* group[=].element[=].display = "Comirnaty® 10 Mikrogramm/Dosis"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #68710-03
* group[=].element[=].display = "Comirnaty® 3 Mikrogramm/Dosis"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #69009
* group[=].element[=].display = "Spikevax Bivalent Original / Omicron"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent


* group[=].element[+].code = #68235
* group[=].element[=].display = "COVID-19 Vaccine Janssen"
* group[=].element[=].target[+].code = #29061000087103
* group[=].element[=].target[=].display = "Vaccine product containing only recombinant non-replicating viral vector encoding Severe acute respiratory syndrome coronavirus 2 spike protein (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #68473
* group[=].element[=].display = "Nuvaxovid 0.5 ml, Injektionsdispersion"
* group[=].element[=].target[+].code = #1162643001
* group[=].element[=].target[=].display = "Vaccine product containing only severe acute respiratory syndrome coronavirus 2 recombinant spike protein antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent


* group[=].element[+].code = #68110
* group[=].element[=].display = "Adacel-Polio 0.5 ml"
* group[=].element[=].target[+].code = #871878002
* group[=].element[=].target[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #68317
* group[=].element[=].display = "Adacel 0.5 ml"
* group[=].element[=].target[+].code = #871875004
* group[=].element[=].target[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent


//69123	01	Spikevax Bivalent Original / Omicron 10 mg/ml, Fertigspritze	Moderna Switzerland GmbH	B	11.11.2022	11.11.2022	25.08.2024	J07BX03
// added 2023-02-21
* group[=].element[+].code = #69123
* group[=].element[=].display = "Spikevax Bivalent Original / Omicron 10 mg/ml, Fertigspritze"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent


//69010	01	Spikevax, Fertigspritze	Moderna Switzerland GmbH	B	13.10.2022	13.10.2022	26.09.2023	J07BX03
// added 2023-02-21
* group[=].element[+].code = #69010
* group[=].element[=].display = "Spikevax, Fertigspritze"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

//69047	01	Comirnaty® Original/Omicron BA.1 15/15 µg pro Dosis gebrauchsfertige Injektionsdispersion für Personen ab 18 Jahren	Pfizer AG	B	10.10.2022	10.10.2022	09.10.2024	J07BX03
// added 2023-02-21
* group[=].element[+].code = #69047
* group[=].element[=].display = "Comirnaty® Original/Omicron BA.1 15/15 µg pro Dosis"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent


//69127	01	Comirnaty Original/Omicron BA. 4-5 0.225 mg, Injektionsdispersion	Pfizer AG	B	06.04.2023	06.04.2023	05.04.2028	J07BX03
// added 2023-05-19
* group[=].element[+].code = #69127
* group[=].element[=].display = "Comirnaty Original/Omicron BA. 4-5 0.225 mg"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

//69189	01	Spikevax Bivalent Original / Omicron BA.4-5, dispersion for injection	Moderna Switzerland GmbH	B	03.03.2023	03.03.2023	02.03.2028	J07BX03
// added 2023-05-19
* group[=].element[+].code = #69189
* group[=].element[=].display = "Spikevax Bivalent Original / Omicron BA.4-5, dispersion for injection"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

//69211	01	Spikevax Bivalent Original / Omicron BA.4-5, Fertigspritze	Moderna Switzerland GmbH	B	21.03.2023	21.03.2023	20.03.2028	J07BX03
// added 2023-05-19
* group[=].element[+].code = #69211
* group[=].element[=].display = "Spikevax Bivalent Original / Omicron BA.4-5, Fertigspritze"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

//68752	01	Vaxneuvance, Injektionssuspension	MSD Merck Sharp & Dohme AG	B	14.02.2023	14.02.2023	13.02.2028	J07AL02
// added 2023-05-19
* group[=].element[+].code = #68752
* group[=].element[=].display = "Vaxneuvance"
* group[=].element[=].target[+].code = #1252708008
* group[=].element[=].target[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F, 22F, 23F, and 33F capsular polysaccharide conjugated antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

//69465	01	Spikevax XBB.1.5 0.10 mg/ml, Dispersion zur Injektion	Moderna Switzerland GmbH	B	26.09.2023	26.09.2023	25.09.2028	J07BX
// added 2023-10-10
* group[=].element[+].code = #69465
* group[=].element[=].display = "Spikevax XBB.1.5 0.10 mg/ml"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

//69484	01	Spikevax XBB.1.5 0.10 mg/ml, Dispersion zur Injektion	Moderna Switzerland GmbH	B	26.09.2023	26.09.2023	25.09.2028	J07BX
// added 2023-10-10
* group[=].element[+].code = #69484
* group[=].element[=].display = "Spikevax XBB.1.5 0.10 mg/ml"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

//69488	01	Comirnaty Omicron XBB.1.5 (30 Mikrogramm)/Dosis, Injektionsdispersion	Pfizer AG	B	20.09.2023	20.09.2023	19.09.2028	J07BN01
// added 2023-10-10
* group[=].element[+].code = #69488
* group[=].element[=].display = "Comirnaty Omicron XBB.1.5 (30 Mikrogramm)/Dosis"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69815|'Comirnaty Omicron XBB.1.5, 0.042 mg, Injektionsdispersion in einer Fertigspritze	Pfizer AG': The source code '69815|Comirnaty Omicron XBB.1.5, 0.042 mg, Injektionsdispersion in einer Fertigspritze	Pfizer AG' is defined in the valueset but not in the conceptmap.
// added 2024-08-09
* group[=].element[+].code = #69815
* group[=].element[=].display = "Comirnaty Omicron XBB.1.5, 0.042 mg"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69403|'Qdenga 0.5 ml, Pulver und Lösungsmittel für eine Injektionslösung in einer vorgefüllten Spritze	Takeda Pharma AG': The source code '69403|Qdenga 0.5 ml, Pulver und Lösungsmittel für eine Injektionslösung in einer vorgefüllten Spritze	Takeda Pharma AG' is defined in the valueset but not in the conceptmap.
// added 2024-08-09 840563003|Vaccine product containing Dengue virus antigen (medicinal product) 
* group[=].element[+].code = #69403
* group[=].element[=].display = "Qdenga 0.5 ml"
* group[=].element[=].target[+].code = #840563003
* group[=].element[=].target[=].display = "Vaccine product containing Dengue virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69222|'Prevenar 20, Injektionssuspension in einer Fertigspritze	Pfizer AG': The source code '69222|Prevenar 20, Injektionssuspension in einer Fertigspritze	Pfizer AG' is defined in the valueset but not in the conceptmap.
// added 2024-08-09 
* group[=].element[+].code = #69222
* group[=].element[=].display = "Prevenar 20"
* group[=].element[=].target[+].code = #1052328007
* group[=].element[=].target[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 4, 6B, 9V, 14, 18C, 19F, and 23F capsular polysaccharide antigens conjugated (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|614|'Inflexal V': The source code '614|Inflexal V' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #614
* group[=].element[=].display = "Inflexal V"
* group[=].element[=].target[+].code = #1181000221105
* group[=].element[=].target[=].display = "Vaccine product containing only Influenza virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|583|'Fluarix': The source code '583|Fluarix' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #583
* group[=].element[=].display = "Fluarix"
* group[=].element[=].target[+].code = #1181000221105
* group[=].element[=].target[=].display = "Vaccine product containing only Influenza virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|373|'Mutagrip': The source code '373|Mutagrip' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #373
* group[=].element[=].display = "Mutagrip"
* group[=].element[=].target[+].code = #1181000221105
* group[=].element[=].target[=].display = "Vaccine product containing only Influenza virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|485|'Influvac': The source code '485|Influvac' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #485
* group[=].element[=].display = "Influvac"
* group[=].element[=].target[+].code = #1181000221105
* group[=].element[=].target[=].display = "Vaccine product containing only Influenza virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|660|'Influvac plus': The source code '660|Influvac plus' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #660
* group[=].element[=].display = "Influvac plus"
* group[=].element[=].target[+].code = #1181000221105
* group[=].element[=].target[=].display = "Vaccine product containing only Influenza virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|58317|'Fluad': The source code '58317|Fluad' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #58317
* group[=].element[=].display = "Fluad"
* group[=].element[=].target[+].code = #1181000221105
* group[=].element[=].target[=].display = "Vaccine product containing only Influenza virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|59267|'Agrippal': The source code '59267|Agrippal' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #59267
* group[=].element[=].display = "Agrippal"
* group[=].element[=].target[+].code = #1181000221105
* group[=].element[=].target[=].display = "Vaccine product containing only Influenza virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|58271|'Optaflu': The source code '58271|Optaflu' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #58271
* group[=].element[=].display = "Optaflu"
* group[=].element[=].target[+].code = #1181000221105
* group[=].element[=].target[=].display = "Vaccine product containing only Influenza virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|62961|'Fluarix Tetra': The source code '62961|Fluarix Tetra' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #62961
* group[=].element[=].display = "Fluarix Tetra"
* group[=].element[=].target[+].code = #1181000221105
* group[=].element[=].target[=].display = "Vaccine product containing only Influenza virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|66427|'VaxigripTetra': The source code '66427|VaxigripTetra' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #66427
* group[=].element[=].display = "VaxigripTetra"
* group[=].element[=].target[+].code = #1181000221105
* group[=].element[=].target[=].display = "Vaccine product containing only Influenza virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|68087|'Influvac Tetra': The source code '68087|Influvac Tetra' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #68087
* group[=].element[=].display = "Influvac Tetra"
* group[=].element[=].target[+].code = #1181000221105
* group[=].element[=].target[=].display = "Vaccine product containing only Influenza virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|67482|'Flucelvax Tetra': The source code '67482|Flucelvax Tetra' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #67482
* group[=].element[=].display = "Flucelvax Tetra"
* group[=].element[=].target[+].code = #1181000221105
* group[=].element[=].target[=].display = "Vaccine product containing only Influenza virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|67704|'Efluelda 0.7 ml': The source code '67704|Efluelda 0.7 ml' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #67704
* group[=].element[=].display = "Efluelda 0.7 ml"
* group[=].element[=].target[+].code = #1181000221105
* group[=].element[=].target[=].display = "Vaccine product containing only Influenza virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|68462|'Fluenz Tetra': The source code '68462|Fluenz Tetra' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #68462
* group[=].element[=].display = "Fluenz Tetra"
* group[=].element[=].target[+].code = #1181000221105
* group[=].element[=].target[=].display = "Vaccine product containing only Influenza virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|66161|'Foclivia (Durchstechflasche)': The source code '66161|Foclivia (Durchstechflasche)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #66161
* group[=].element[=].display = "Foclivia (Durchstechflasche)"
* group[=].element[=].target[+].code = #836377006 
* group[=].element[=].target[=].display = "Vaccine product containing Influenza virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|66156|'Foclivia (Fertigspritze)': The source code '66156|Foclivia (Fertigspritze)' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #66156
* group[=].element[=].display = "Foclivia (Fertigspritze)"
* group[=].element[=].target[+].code = #836377006 
* group[=].element[=].target[=].display = "Vaccine product containing Influenza virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|585|'Varilrix': The source code '585|Varilrix' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #585
* group[=].element[=].display = "Varilrix"
* group[=].element[=].target[+].code = #836495005
* group[=].element[=].target[=].display = "Vaccine product containing Human alphaherpesvirus 3 antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent
// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|688|'Varivax': The source code '688|Varivax' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #688
* group[=].element[=].display = "Varivax"
* group[=].element[=].target[+].code = #836495005
* group[=].element[=].target[=].display = "Vaccine product containing Human alphaherpesvirus 3 antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|696|'BCG SSI': The source code '696|BCG SSI' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #696
* group[=].element[=].display = "BCG SSI"
* group[=].element[=].target[+].code = #836402002 
* group[=].element[=].target[=].display = "Vaccine product containing live attenuated Mycobacterium bovis antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|68003|'Supemtek 0.5 ml': The source code '68003|Supemtek 0.5 ml' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #68003
* group[=].element[=].display = "Supemtek 0.5 ml"
* group[=].element[=].target[+].code = #836375003 
* group[=].element[=].target[=].display = "Vaccine product containing Hepatitis A virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent


// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|68358|'Ervebo, Injektionslösung': The source code '68358|Ervebo, Injektionslösung' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #68358
* group[=].element[=].display = "Ervebo"
* group[=].element[=].target[+].code = #836421005 
* group[=].element[=].target[=].display = "Vaccine product containing Ebolavirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent


// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69310|'AREXVY, Pulver und Suspension zur Herstellung einer Injektionssuspension	GlaxoSmithKline AG': The source code '69310|AREXVY, Pulver und Suspension zur Herstellung einer Injektionssuspension	GlaxoSmithKline AG' is defined in the valueset but not in the conceptmap.
// added 2024-08-09 
* group[=].element[+].code = #69310
* group[=].element[=].display = "AREXVY"
* group[=].element[=].target[+].code = #51311000087100 
* group[=].element[=].target[=].display = "Vaccine product containing only Human orthopneumovirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69913 "Comirnaty JN.1 0.042 mg, Injektionsdispersion in einer Fertigspritze, Pfizer AG"
// added 2024-10-17
* group[=].element[+].code = #69913
* group[=].element[=].display = "Comirnaty JN.1 0.042 mg, Injektionsdispersion in einer Fertigspritze, Pfizer AG"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69912-01 "Comirnaty JN.1 30 μg, Injektionsdispersion, Pfizer AG"
// added 2024-10-17
* group[=].element[+].code = #69912-01
* group[=].element[=].display = "Comirnaty JN.1 30 μg, Injektionsdispersion, Pfizer AG"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69912-02 "Comirnaty JN.1 10 μg, Injektionsdispersion, Pfizer AG"
// added 2024-10-17
* group[=].element[+].code = #69912-02
* group[=].element[=].display = "Comirnaty JN.1 10 μg, Injektionsdispersion, Pfizer AG"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69788 "Spikevax JN.1 (mRNA-1273.167), 0.10mg/ml, Dispersion zur Injektion, Moderna Switzerland GmbH"
// added 2024-10-17
* group[=].element[+].code = #69788
* group[=].element[=].display = "Spikevax JN.1 (mRNA-1273.167), 0.10mg/ml, Dispersion zur Injektion, Moderna Switzerland GmbH"
* group[=].element[=].target[+].code = #1119349007
* group[=].element[=].target[=].display = "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69691 "Abrysvo, Pulver und Lösungsmittel zur Herstellung einer Injektionslösung, Pfizer AG"
// added 2024-10-17
* group[=].element[+].code = #69691
* group[=].element[=].display = "Abrysvo, Pulver und Lösungsmittel zur Herstellung einer Injektionslösung, Pfizer AG"
* group[=].element[=].target[+].code = #51311000087100 
* group[=].element[=].target[=].display = "Vaccine product containing only Human orthopneumovirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// TODO
// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|652|'Mencevax ACWY': The source code '652|Mencevax ACWY' is defined in the valueset but not in the conceptmap.
// added 2024-08-14 
* group[=].element[+].code = #652
* group[=].element[=].display = "Mencevax ACWY"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"
// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|66037|'Menjugate liquid': The source code '66037|Menjugate liquid' is defined in the valueset but not in the conceptmap.
// added 2024-08-14 
* group[=].element[+].code = #66037
* group[=].element[=].display = "Menjugate liquid"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"
// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|65730|'Bexsero': The source code '65730|Bexsero' is defined in the valueset but not in the conceptmap.
// added 2024-08-14 
* group[=].element[+].code = #65730
* group[=].element[=].display = "Bexsero"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"
// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69173|'Jynneos, Injektionssuspension	Bavarian Nordic Switzerland AG': The source code '69173|Jynneos, Injektionssuspension	Bavarian Nordic Switzerland AG' is defined in the valueset but not in the conceptmap.
// added 2024-08-09 
* group[=].element[+].code = #69173
* group[=].element[=].display = "Jynneos"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|68221|'MenQuadfi': The source code '68221|MenQuadfi' is defined in the valueset but not in the conceptmap.
// added 2024-08-09 
* group[=].element[+].code = #68221
* group[=].element[=].display = "MenQuadfi"
//* group[=].element[=].target[+].code = #836401009
//* group[=].element[=].target[=].display = "Vaccine product containing Neisseria meningitidis antigen (medicinal product)"
//* group[=].element[=].target[=].equivalence = #equivalent
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"




// //////////////////////////////////////////////////////////////////////////////////////////
// Old vaccines, missing swiss medic number                                               ///
// //////////////////////////////////////////////////////////////////////////////////////////
* group[+].source = "http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs"
* group[=].target = "http://snomed.info/sct"
* group[=].element[+].code = #17
* group[=].element[=].display = "Poliomyelitis Impfstoff Berna"
* group[=].element[=].target[+].code = #871739009
* group[=].element[=].target[=].display = "Vaccine product containing only Human poliovirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #25
* group[=].element[=].display = "Vivotif L"
* group[=].element[=].target[+].code = #961000221100
* group[=].element[=].target[=].display = "Vaccine product containing only Salmonella enterica subspecies enterica serovar Typhi antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #35
* group[=].element[=].display = "Infanrix DTPa"
* group[=].element[=].target[+].code = #871875004
* group[=].element[=].target[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #47
* group[=].element[=].display = "Attenuvax"
* group[=].element[=].target[+].code = #871765008
* group[=].element[=].target[=].display = "Vaccine product containing only Measles morbillivirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #53
* group[=].element[=].display = "HBVAXPRO 5"
* group[=].element[=].target[+].code = #871822003
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis B virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #55
* group[=].element[=].display = "Meningokokken-Impfstoff A+C Mérieux"
* group[=].element[=].target[+].code = #871866001
* group[=].element[=].target[=].display = "Vaccine product containing only Neisseria meningitidis serogroup C antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #74
* group[=].element[=].display = "Twinrix 360/10"
* group[=].element[=].target[+].code = #871803007
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis A and Hepatitis B virus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #75
* group[=].element[=].display = "Pluserix"
* group[=].element[=].target[+].code = #871831003
* group[=].element[=].target[=].display = "Vaccine product containing only Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #76
* group[=].element[=].display = "Acel Immune"
* group[=].element[=].target[+].code = #871875004
* group[=].element[=].target[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #78
* group[=].element[=].display = "Act-Hib"
* group[=].element[=].target[+].code = #871764007
* group[=].element[=].target[=].display = "Vaccine product containing only Haemophilus influenzae type B antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #79
* group[=].element[=].display = "Anatoxal DiTePer"
* group[=].element[=].target[+].code = #871875004
* group[=].element[=].target[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #80
* group[=].element[=].display = "Anatoxal DiTe Erwachsene"
* group[=].element[=].target[+].code = #871826000
* group[=].element[=].target[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #81
* group[=].element[=].display = "Anatoxal DiTe N Erwachsene"
* group[=].element[=].target[+].code = #871826000
* group[=].element[=].target[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #83
* group[=].element[=].display = "Anatoxal Te"
* group[=].element[=].target[+].code = #871742003
* group[=].element[=].target[=].display = "Vaccine product containing only Clostridium tetani antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #84
* group[=].element[=].display = "Anatoxal Te N"
* group[=].element[=].target[+].code = #871742003
* group[=].element[=].target[=].display = "Vaccine product containing only Clostridium tetani antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #86
* group[=].element[=].display = "Arilvax"
* group[=].element[=].target[+].code = #871717007
* group[=].element[=].target[=].display = "Vaccine product containing only Yellow fever virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #92
* group[=].element[=].display = "HibTiter"
* group[=].element[=].target[+].code = #871764007
* group[=].element[=].target[=].display = "Vaccine product containing only Haemophilus influenzae type B antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #94
* group[=].element[=].display = "Lyssavac Berna"
* group[=].element[=].target[+].code = #871726005
* group[=].element[=].target[=].display = "Vaccine product containing only Rabies lyssavirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #97
* group[=].element[=].display = "Mumaten"
* group[=].element[=].target[+].code = #871737006
* group[=].element[=].target[=].display = "Vaccine product containing only Mumps orthorubulavirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #98
* group[=].element[=].display = "Pedvax"
* group[=].element[=].target[+].code = #871764007
* group[=].element[=].target[=].display = "Vaccine product containing only Haemophilus influenzae type B antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #99
* group[=].element[=].display = "Pentacoq"
* group[=].element[=].target[+].code = #871887006
* group[=].element[=].target[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #100
* group[=].element[=].display = "Pnu-Immune"
* group[=].element[=].target[+].code = #1052328007
* group[=].element[=].target[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 4, 6B, 9V, 14, 18C, 19F, and 23F capsular polysaccharide antigens conjugated (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #101
* group[=].element[=].display = "Polio Salk"
* group[=].element[=].target[+].code = #871739009
* group[=].element[=].target[=].display = "Vaccine product containing only Human poliovirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #102
* group[=].element[=].display = "Polio Sabin"
* group[=].element[=].target[+].code = #871739009
* group[=].element[=].target[=].display = "Vaccine product containing only Human poliovirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #103
* group[=].element[=].display = "Poloral"
* group[=].element[=].target[+].code = #871739009
* group[=].element[=].target[=].display = "Vaccine product containing only Human poliovirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #106
* group[=].element[=].display = "Tetracoq"
* group[=].element[=].target[+].code = #871878002
* group[=].element[=].target[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #110
* group[=].element[=].display = "Vaqta"
* group[=].element[=].target[+].code = #871751006
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis A virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #115
* group[=].element[=].display = "Havrix 360"
* group[=].element[=].target[+].code = #871751006
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis A virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #118
* group[=].element[=].display = "Hevac B"
* group[=].element[=].target[+].code = #871822003
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis B virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #119
* group[=].element[=].display = "MMR-I"
* group[=].element[=].target[+].code = #871831003
* group[=].element[=].target[=].display = "Vaccine product containing only Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #120
* group[=].element[=].display = "Moruman"
* group[=].element[=].target[+].code = #871765008
* group[=].element[=].target[=].display = "Vaccine product containing only Measles morbillivirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #123
* group[=].element[=].display = "Trimovax"
* group[=].element[=].target[+].code = #871831003
* group[=].element[=].target[=].display = "Vaccine product containing only Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #126
* group[=].element[=].display = "Ditanrix pediatric"
* group[=].element[=].target[+].code = #871826000
* group[=].element[=].target[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #128
* group[=].element[=].display = "FSME-Immun Injekt"
* group[=].element[=].target[+].code = #871719005
* group[=].element[=].target[=].display = "Vaccine product containing only Tick-borne encephalitis virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #133
* group[=].element[=].display = "ProHibit"
* group[=].element[=].target[+].code = #871764007
* group[=].element[=].target[=].display = "Vaccine product containing only Haemophilus influenzae type B antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #134
* group[=].element[=].display = "Anatoxal DiTe Kinder"
* group[=].element[=].target[+].code = #871826000
* group[=].element[=].target[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #138
* group[=].element[=].display = "K1, K2, K3"
* group[=].element[=].target[+].code = #871739009
* group[=].element[=].target[=].display = "Vaccine product containing only Human poliovirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #139
* group[=].element[=].display = "Koprowski"
* group[=].element[=].target[+].code = #871739009
* group[=].element[=].target[=].display = "Vaccine product containing only Human poliovirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #143
* group[=].element[=].display = "TAB oral"
* group[=].element[=].target[+].code = #961000221100
* group[=].element[=].target[=].display = "Vaccine product containing only Salmonella enterica subspecies enterica serovar Typhi antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #147
* group[=].element[=].display = "Polio Koprowski (K1-K3)"
* group[=].element[=].target[+].code = #871739009
* group[=].element[=].target[=].display = "Vaccine product containing only Human poliovirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #148
* group[=].element[=].display = "Polio Lilly"
* group[=].element[=].target[+].code = #871739009
* group[=].element[=].target[=].display = "Vaccine product containing only Human poliovirus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #154
* group[=].element[=].display = "DiTe Anatoxal Kinder / Enfants"
* group[=].element[=].target[+].code = #871826000
* group[=].element[=].target[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #155
* group[=].element[=].display = "DiTePer Anatoxal"
* group[=].element[=].target[+].code = #871875004
* group[=].element[=].target[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #162
* group[=].element[=].display = "HBVAX DNA 5"
* group[=].element[=].target[+].code = #871822003
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis B virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #163
* group[=].element[=].display = "HBVAX DNA 10"
* group[=].element[=].target[+].code = #871822003
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis B virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #164
* group[=].element[=].display = "HBVAX DNA 40"
* group[=].element[=].target[+].code = #871822003
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis B virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #165
* group[=].element[=].display = "Havrix junior"
* group[=].element[=].target[+].code = #871751006
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis A virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #166
* group[=].element[=].display = "Infanrix"
* group[=].element[=].target[+].code = #871875004
* group[=].element[=].target[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #168
* group[=].element[=].display = "Tanrix"
* group[=].element[=].target[+].code = #871742003
* group[=].element[=].target[=].display = "Vaccine product containing only Clostridium tetani antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #170
* group[=].element[=].display = "Engerix-B 40"
* group[=].element[=].target[+].code = #871822003
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis B virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #172
* group[=].element[=].display = "Hepavax"
* group[=].element[=].target[+].code = #871822003
* group[=].element[=].target[=].display = "Vaccine product containing only Hepatitis B virus antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = #16
* group[=].element[=].display = "Orochol E"
* group[=].element[=].target[+].code = #991000221105
* group[=].element[=].target[=].display = "Vaccine product containing only Vibrio cholerae antigen (medicinal product)"
* group[=].element[=].target[=].equivalence = #equivalent

// TODO
// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|14|'MoRu-Viraten': The source code '14|MoRu-Viraten' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #14
* group[=].element[=].display = "MoRu-Viraten"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|23|'Triviraten': The source code '23|Triviraten' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #23
* group[=].element[=].display = "Triviraten"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|39|'Infanrix Penta': The source code '39|Infanrix Penta' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #39
* group[=].element[=].display = "Infanrix Penta"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|48|'BCG': The source code '48|BCG' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #48
* group[=].element[=].display = "BCG"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|56|'Meruvax': The source code '56|Meruvax' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #56
* group[=].element[=].display = "Meruvax"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|73|'Infanrix DTPa+Hib': The source code '73|Infanrix DTPa+Hib' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #73
* group[=].element[=].display = "Infanrix DTPa+Hib"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|77|'Acel P': The source code '77|Acel P' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #77
* group[=].element[=].display = "Acel P"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|82|'Anatoxal Di': The source code '82|Anatoxal Di' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #82
* group[=].element[=].display = "Anatoxal Di"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|87|'BCG Vaccin Mérieux': The source code '87|BCG Vaccin Mérieux' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #87
* group[=].element[=].display = "BCG Vaccin Mérieux"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|88|'Biviraten': The source code '88|Biviraten' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #88
* group[=].element[=].display = "Biviraten"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|91|'Ervevax': The source code '91|Ervevax' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #91
* group[=].element[=].display = "Ervevax"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|93|'Infanrix DTPa-HBV': The source code '93|Infanrix DTPa-HBV' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #93
* group[=].element[=].display = "Infanrix DTPa-HBV"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|95|'Vaccin méningococcique A+C Mérieux': The source code '95|Vaccin méningococcique A+C Mérieux' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #95
* group[=].element[=].display = "Vaccin méningococcique A+C Mérieux"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|96|'MM Vax': The source code '96|MM Vax' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #96
* group[=].element[=].display = "MM Vax"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|107|'Tetramune': The source code '107|Tetramune' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #107
* group[=].element[=].display = "Tetramune"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|111|'Rubeaten': The source code '111|Rubeaten' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #111
* group[=].element[=].display = "Rubeaten"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|112|'Rudivax': The source code '112|Rudivax' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #112
* group[=].element[=].display = "Rudivax"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|117|'Almevax': The source code '117|Almevax' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #117
* group[=].element[=].display = "Almevax"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|121|'Rimparix': The source code '121|Rimparix' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #121
* group[=].element[=].display = "Rimparix"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|122|'Rubevac': The source code '122|Rubevac' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #122
* group[=].element[=].display = "Rubevac"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|127|'Eolarix': The source code '127|Eolarix' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #127
* group[=].element[=].display = "Eolarix"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|136|'Celtura': The source code '136|Celtura' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #136
* group[=].element[=].display = "Celtura"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|137|'Focetria': The source code '137|Focetria' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #137
* group[=].element[=].display = "Focetria"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|141|'Pandemrix': The source code '141|Pandemrix' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #141
* group[=].element[=].display = "Pandemrix"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|142|'Prohibit DTP': The source code '142|Prohibit DTP' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #142
* group[=].element[=].display = "Prohibit DTP"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|144|'Variola': The source code '144|Variola' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #144
* group[=].element[=].display = "Variola"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|151|'Di Anatoxal': The source code '151|Di Anatoxal' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #151
* group[=].element[=].display = "Di Anatoxal"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"

// ERROR, http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs|169|'Vaccin variole': The source code '169|Vaccin variole' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #169
* group[=].element[=].display = "Vaccin variole"
* group[=].element[=].target[+].code = #787859002  
* group[=].element[=].target[=].display = "Vaccine product (medicinal product)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[=].comment = "TODO: mapping needed"



---

// File: input/fsh/conceptmap/ch-vacd-vaccines-targetdiseases-cm.fsh

Instance: ch-vacd-vaccines-targetdiseases-cm
InstanceOf: ConceptMap
Usage: #definition
* url = "http://fhir.ch/ig/ch-vacd/ConceptMap/ch-vacd-vaccines-targetdiseases-cm"
* name = "VaccineCodeToTargetDiseaseMapping"
* title = "VaccineCode To TargetDisease Mapping"
* description = "Mappings from vaccine code to target disease according to the correcsponding valuesets"
* status = #active
* publisher = "eHealth Suisse"
* contact.name = "eHealth Suisse"
* contact.telecom.system = #url
* contact.telecom.value = "https://www.e-health-suisse.ch/"
* copyright = "This artefact includes content from SNOMED Clinical Terms® (SNOMED CT®) which is copyright of the International Health Terminology Standards Development Organisation (IHTSDO). Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license - for more information contact http://www.snomed.org/snomed-ct/getsnomed-ct or info@snomed.org."
* experimental = false
* sourceUri = "http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-vaccines-vs"
* targetUri = "http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-targetdiseasesandillnessesundergoneforimmunization-vs"

// //////////////////////////////////////////////////////////////////////////////////////////
// vaccines with swiss medic number                                                       ///
// //////////////////////////////////////////////////////////////////////////////////////////
* group[0].source = "http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs"
* group[=].target = "http://snomed.info/sct"
* group[=].element[0].code = #683
* group[=].element[=].display = "FSME-Immun 0.25 ml Junior"
* group[=].element[=].target[+].code = #712986001
* group[=].element[=].target[=].display = "Central European encephalitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #450
* group[=].element[=].display = "FSME-Immun CC"
* group[=].element[=].target[+].code = #712986001
* group[=].element[=].target[=].display = "Central European encephalitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #656
* group[=].element[=].display = "NeisVac-C"
* group[=].element[=].target[+].code = #23511006
* group[=].element[=].target[=].display = "Meningococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #627
* group[=].element[=].display = "Encepur N"
* group[=].element[=].target[+].code = #712986001
* group[=].element[=].target[=].display = "Central European encephalitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #628
* group[=].element[=].display = "Encepur N Kinder / Enfants"
* group[=].element[=].target[+].code = #712986001
* group[=].element[=].target[=].display = "Central European encephalitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #572
* group[=].element[=].display = "Epaxal"
* group[=].element[=].target[+].code = #40468003
* group[=].element[=].target[=].display = "Viral hepatitis, type A (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #544
* group[=].element[=].display = "Heprecomb"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #642
* group[=].element[=].display = "Heprecomb Kinder"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #614
* group[=].element[=].display = "Inflexal V"
* group[=].element[=].target[+].code = #719590007
* group[=].element[=].target[=].display = "Influenza caused by seasonal influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #657
* group[=].element[=].display = "Menjugate"
* group[=].element[=].target[+].code = #23511006
* group[=].element[=].target[=].display = "Meningococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #533
* group[=].element[=].display = "Moraten"
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display = "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #555
* group[=].element[=].display = "Orochol"
* group[=].element[=].target[+].code = #63650001
* group[=].element[=].target[=].display = "Cholera (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #685
* group[=].element[=].display = "Rabipur"
* group[=].element[=].target[+].code = #14168008
* group[=].element[=].target[=].display = "Rabies (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #702
* group[=].element[=].display = "Td-pur"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #686
* group[=].element[=].display = "Td-Virelon"
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #467
* group[=].element[=].display = "Vivotif"
* group[=].element[=].target[+].code = #4834000
* group[=].element[=].target[=].display = "Typhoid fever (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #637
* group[=].element[=].display = "Boostrix"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #681
* group[=].element[=].display = "Boostrix Polio"
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #567
* group[=].element[=].display = "Ditanrix"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #551
* group[=].element[=].display = "Engerix-B 10"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #534
* group[=].element[=].display = "Engerix-B 20"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #583
* group[=].element[=].display = "Fluarix"
* group[=].element[=].target[+].code = #719590007
* group[=].element[=].target[=].display = "Influenza caused by seasonal influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #558
* group[=].element[=].display = "Havrix 1440"
* group[=].element[=].target[+].code = #40468003
* group[=].element[=].target[=].display = "Viral hepatitis, type A (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #599
* group[=].element[=].display = "Havrix 720"
* group[=].element[=].target[+].code = #40468003
* group[=].element[=].target[=].display = "Viral hepatitis, type A (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #603
* group[=].element[=].display = "Hiberix"
* group[=].element[=].target[+].code = #709410003
* group[=].element[=].target[=].display = "Haemophilus influenzae type b infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #638
* group[=].element[=].display = "Infanrix DTPa-IPV"
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #619
* group[=].element[=].display = "Infanrix DTPa-IPV+Hib"
* group[=].element[=].target[+].code = #709410003
* group[=].element[=].target[=].display = "Haemophilus influenzae type b infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #640
* group[=].element[=].display = "Infanrix hexa"
* group[=].element[=].target[+].code = #709410003
* group[=].element[=].target[=].display = "Haemophilus influenzae type b infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #652
* group[=].element[=].display = "Mencevax ACWY"
* group[=].element[=].target[+].code = #23511006
* group[=].element[=].target[=].display = "Meningococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #860805006
* group[=].element[=].target[=].display = "Encephalomyelitis caused by Neisseria meningitidis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #669
* group[=].element[=].display = "Poliorix"
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #615
* group[=].element[=].display = "Priorix"
* group[=].element[=].target[+].code = #36653000
* group[=].element[=].target[=].display = "Rubella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display = "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #36989005
* group[=].element[=].target[=].display = "Mumps (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #592
* group[=].element[=].display = "Twinrix 720/20"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #40468003
* group[=].element[=].target[=].display = "Viral hepatitis, type A (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #585
* group[=].element[=].display = "Varilrix"
* group[=].element[=].target[+].code = #38907003
* group[=].element[=].target[=].display = "Varicella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #528
* group[=].element[=].display = "Gen H-B-Vax 10"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #545
* group[=].element[=].display = "HBVAXPRO 40"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #610
* group[=].element[=].display = "Gen H-B-Vax 5"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #663
* group[=].element[=].display = "HBVAXPRO 10"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #268
* group[=].element[=].display = "MMR-II"
* group[=].element[=].target[+].code = #36653000
* group[=].element[=].target[=].display = "Rubella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display = "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #36989005
* group[=].element[=].target[=].display = "Mumps (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #247
* group[=].element[=].display = "Mumpsvax"
* group[=].element[=].target[+].code = #36989005
* group[=].element[=].target[=].display = "Mumps (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #373
* group[=].element[=].display = "Mutagrip"
* group[=].element[=].target[+].code = #719590007
* group[=].element[=].target[=].display = "Influenza caused by seasonal influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #613
* group[=].element[=].display = "Pentavac"
* group[=].element[=].target[+].code = #709410003
* group[=].element[=].target[=].display = "Haemophilus influenzae type b infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #509
* group[=].element[=].display = "Pneumovax-23"
* group[=].element[=].target[+].code = #16814004
* group[=].element[=].target[=].display = "Pneumococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #646
* group[=].element[=].display = "Revaxis"
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #520
* group[=].element[=].display = "Stamaril"
* group[=].element[=].target[+].code = #16541001
* group[=].element[=].target[=].display = "Yellow fever (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #612
* group[=].element[=].display = "Tetravac"
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #417
* group[=].element[=].display = "Tollwut Impfstoff Mérieux"
* group[=].element[=].target[+].code = #14168008
* group[=].element[=].target[=].display = "Rabies (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #688
* group[=].element[=].display = "Varivax"
* group[=].element[=].target[+].code = #38907003
* group[=].element[=].target[=].display = "Varicella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #485
* group[=].element[=].display = "Influvac"
* group[=].element[=].target[+].code = #719590007
* group[=].element[=].target[=].display = "Influenza caused by seasonal influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #660
* group[=].element[=].display = "Influvac plus"
* group[=].element[=].target[+].code = #719590007
* group[=].element[=].target[=].display = "Influenza caused by seasonal influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #654
* group[=].element[=].display = "Meningitec"
* group[=].element[=].target[+].code = #23511006
* group[=].element[=].target[=].display = "Meningococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #643
* group[=].element[=].display = "Prevenar-7"
* group[=].element[=].target[+].code = #16814004
* group[=].element[=].target[=].display = "Pneumococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #644
* group[=].element[=].display = "Hexavac"
* group[=].element[=].target[+].code = #709410003
* group[=].element[=].target[=].display = "Haemophilus influenzae type b infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #711
* group[=].element[=].display = "DiTe pediatric adsorbed"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #711-01
* group[=].element[=].display = "Diphtherie- und Tetanus-Adsorbatimpfstoff für Kinder unter 8 Jahren"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #711-02
* group[=].element[=].display = "Diphtherie- und Tetanus-Adsorbatimpfstoff für Erwachsene und Kinder ab 7 Jahren"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto


* group[=].element[+].code = #704
* group[=].element[=].display = "Dukoral"
* group[=].element[=].target[+].code = #63650001
* group[=].element[=].target[=].display = "Cholera (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #483
* group[=].element[=].display = "Rimevax"
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display = "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #707
* group[=].element[=].display = "Tetanol pur"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #57735
* group[=].element[=].display = "Gardasil"
* group[=].element[=].target[+].code = #240532009
* group[=].element[=].target[=].display = "Human papillomavirus infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #709
* group[=].element[=].display = "Zostavax"
* group[=].element[=].target[+].code = #4740000
* group[=].element[=].target[=].display = "Herpes zoster (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #58158
* group[=].element[=].display = "Priorix-Tetra"
* group[=].element[=].target[+].code = #38907003
* group[=].element[=].target[=].display = "Varicella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #36653000
* group[=].element[=].target[=].display = "Rubella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display = "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #36989005
* group[=].element[=].target[=].display = "Mumps (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #696
* group[=].element[=].display = "BCG SSI"
* group[=].element[=].target[+].code = #56717001
* group[=].element[=].target[=].display = "Tuberculosis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #58317
* group[=].element[=].display = "Fluad"
* group[=].element[=].target[+].code = #719590007
* group[=].element[=].target[=].display = "Influenza caused by seasonal influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #60150
* group[=].element[=].display = "Rotarix"
* group[=].element[=].target[+].code = #18624000
* group[=].element[=].target[=].display = "Disease caused by Rotavirus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #703
* group[=].element[=].display = "MMRVaxPro"
* group[=].element[=].target[+].code = #36653000
* group[=].element[=].target[=].display = "Rubella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display = "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #36989005
* group[=].element[=].target[=].display = "Mumps (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #58506
* group[=].element[=].display = "Measles vaccine live"
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display = "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #59267
* group[=].element[=].display = "Agrippal"
* group[=].element[=].target[+].code = #719590007
* group[=].element[=].target[=].display = "Influenza caused by seasonal influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #58271
* group[=].element[=].display = "Optaflu"
* group[=].element[=].target[+].code = #719590007
* group[=].element[=].target[=].display = "Influenza caused by seasonal influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #57814
* group[=].element[=].display = "Cervarix"
* group[=].element[=].target[+].code = #240532009
* group[=].element[=].target[=].display = "Human papillomavirus infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #60129
* group[=].element[=].display = "Prevenar 13"
* group[=].element[=].target[+].code = #16814004
* group[=].element[=].target[=].display = "Pneumococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #59147
* group[=].element[=].display = "Ixiaro"
* group[=].element[=].target[+].code = #52947006
* group[=].element[=].target[=].display = "Japanese encephalitis virus disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #62502
* group[=].element[=].display = "Menveo"
* group[=].element[=].target[+].code = #23511006
* group[=].element[=].target[=].display = "Meningococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #600
* group[=].element[=].display = "DiTe Anatoxal Erwachsene / Adultes"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #690
* group[=].element[=].display = "DiTe Anatoxal N Erwachsene / Adultes"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #689
* group[=].element[=].display = "Te Anatoxal N"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #62961
* group[=].element[=].display = "Fluarix Tetra"
* group[=].element[=].target[+].code = #719590007
* group[=].element[=].target[=].display = "Influenza caused by seasonal influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

* group[=].element[+].code = #68267
* group[=].element[=].display = "Spikevax (COVID-19 Vaccine, Moderna)"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #68225
* group[=].element[=].display = "Comirnaty (COVID-19 Vaccine, Pfizer)"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
// added 2021-11-19
* group[=].element[+].code = #68235
* group[=].element[=].display = "COVID-19 Vaccine Janssen"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

// added 2021-11-19
* group[=].element[+].code = #67987
* group[=].element[=].display = "Shingrix"
* group[=].element[=].target[+].code = #4740000
* group[=].element[=].target[=].display = "Herpes zoster (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

// TODO
//67482	01	Flucelvax Tetra, Injektionssuspension	Medius AG	B	04.05.2021	04.05.2021	03.05.2026	J07BB02
// added 2021-11-19
* group[=].element[+].code = #67482
* group[=].element[=].display = "Flucelvax Tetra"
* group[=].element[=].target[+].code = #719590007
* group[=].element[=].target[=].display = "Influenza caused by seasonal influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//67704	01	Efluelda 0.7 ml, suspension injectable en seringue préremplie	Sanofi-Aventis (Suisse) SA	B	21.07.2021	21.07.2021	20.07.2026	J07BB02
// added 2021-11-19
* group[=].element[+].code = #67704
* group[=].element[=].display = "Efluelda 0.7 ml"
* group[=].element[=].target[+].code = #719590007
* group[=].element[=].target[=].display = "Influenza caused by seasonal influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

// 68003	01	Supemtek 0.5 ml, solution injectable dans une seringue pré-remplie	Sanofi-Aventis (Suisse) SA	B	28.10.2021	28.10.2021	27.10.2026	J07BB02
// added 2021-11-19
* group[=].element[+].code = #68003
* group[=].element[=].display = "Supemtek 0.5 ml"
* group[=].element[=].target[+].code = #719590007
* group[=].element[=].target[=].display = "Influenza caused by seasonal influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//66161	01	Foclivia, Injektionssuspension in einer Durchstechflasche	Emergent BioSolutions Berna GmbH	B	20.04.2018	20.04.2018	19.04.2023	J07BB02
// added 2021-11-19
* group[=].element[+].code = #66161
* group[=].element[=].display = "Foclivia (Durchstechflasche)"
* group[=].element[=].target[+].code = #719865001
* group[=].element[=].target[=].display = "Influenza caused by pandemic influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//66156	01	Foclivia, Injektionssuspension in einer Fertigspritze	Emergent BioSolutions Berna GmbH	B	20.04.2018	20.04.2018	19.04.2023	J07BB02
// added 2021-11-19
* group[=].element[+].code = #66156
* group[=].element[=].display = "Foclivia (Fertigspritze)"
* group[=].element[=].target[+].code = #719865001
* group[=].element[=].target[=].display = "Influenza caused by pandemic influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//68473	01	Nuvaxovid 0.5 ml, Injektionsdispersion	Future Health Pharma GmbH	B	12.04.2022	12.04.2022	20.09.2028	J07BX03
// added 2022-06-08
* group[=].element[+].code = #68473
* group[=].element[=].display = "Nuvaxovid 0.5 ml"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//68358	01	Ervebo, Injektionslösung	MSD Merck Sharp & Dohme AG	B	11/10/2021	11/10/2021	11/9/2026	J07BX02
// added 2022-11-03
* group[=].element[+].code = #68358
* group[=].element[=].display = "Ervebo, Injektionslösung"
* group[=].element[=].target[+].code = #37109004
* group[=].element[=].target[=].display = "Ebola virus disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//68710	01	Comirnaty® 30 Mikrogramm/Dosis, gebrauchsfertige Injektionsdispersion  für Personen ab 12  Jahren	Pfizer AG	B	12/10/2021	12/10/2021	12/18/2022	J07BX
// added 2022-11-03
* group[=].element[+].code = #68710-01
* group[=].element[=].display = "Comirnaty® 30 Mikrogramm/Dosis"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto


//68710	02	Comirnaty® 10 Mikrogramm/Dosis, Konzentrat zur Herstellung einer Injektionsdispersion	Pfizer AG	B	12/10/2021	12/10/2021	12/18/2022	J07BX
// added 2022-11-03
* group[=].element[+].code = #68710-02
* group[=].element[=].display = "Comirnaty® 10 Mikrogramm/Dosis"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//68710	03	Comirnaty 3 Mikrogramm/Dosis Konzentrat zur Herstellung einer Injektionsdispersion	Pfizer AG	B	10.12.2021	04.09.2023	16.03.2028	J07BN01
// added 2023-10-10
* group[=].element[+].code = #68710-03
* group[=].element[=].display = "Comirnaty® 3 Mikrogramm/Dosis"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//68462	01	Fluenz Tetra, Nasenspray, Suspension	AstraZeneca AG	B	5/11/2022	5/11/2022	5/10/2027	J07BB03
// added 2022-11-03
* group[=].element[+].code = #68462
* group[=].element[=].display = "Fluenz Tetra"
* group[=].element[=].target[+].code = #719590007
* group[=].element[=].target[=].display = "Influenza caused by seasonal influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//69009	01	Spikevax Bivalent Original / Omicron	Moderna Switzerland GmbH	B	8/26/2022	8/26/2022	8/25/2024	J07B
// added 2022-11-03
* group[=].element[+].code = #69009
* group[=].element[=].display = "Spikevax Bivalent Original / Omicron"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//68110	01	Adacel-Polio 0.5 ml, suspension injectable en seringue préremplie	Sanofi-Aventis (Suisse) SA	B	8/26/2022	8/26/2022	8/25/2027	J07CA02
// added 2022-11-03
* group[=].element[+].code = #68110
* group[=].element[=].display = "Adacel-Polio 0.5 ml"
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto


//68317	01	Adacel 0.5 ml, suspension injectable en seringue préremplie	Sanofi-Aventis (Suisse) SA	B	8/26/2022	8/26/2022	8/25/2027	J07AJ52
// added 2022-11-03
* group[=].element[+].code = #68317
* group[=].element[=].display = "Adacel 0.5 ml"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//68221	01	MenQuadfi, solution injectable	Sanofi-Aventis (Suisse) SA	B	10/5/2022	10/5/2022	10/4/2027	J07AH08
// added 2022-11-03
* group[=].element[+].code = #68221
* group[=].element[=].display = "MenQuadfi"
* group[=].element[=].target[+].code = #23511006
* group[=].element[=].target[=].display = "Meningococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #860805006
* group[=].element[=].target[=].display = "Encephalomyelitis caused by Neisseria meningitidis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto


//66427	05	VaxigripTetra, Suspension pour injection dans une seringue pré-remplie	Sanofi-Aventis (Suisse) SA	B	12.06.2018	11.08.2021	11.06.2023	J07BB02
// added 2022-12-01
* group[=].element[+].code = #66427
* group[=].element[=].display = "VaxigripTetra"
* group[=].element[=].target[+].code = #719590007
* group[=].element[=].target[=].display = "Influenza caused by seasonal influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

// added 2022-12-01
* group[=].element[+].code = #65387
* group[=].element[=].display = "Gardasil 9"
* group[=].element[=].target[+].code = #240532009
* group[=].element[=].target[=].display = "Human papillomavirus infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

// added 2022-12-01
* group[=].element[+].code = #66940
* group[=].element[=].display = "Vaxelis"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #398102009	
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003	
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #709410003
* group[=].element[=].target[=].display = "Haemophilus influenzae type b infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

// added 2024-02-15, issue 208
* group[=].element[+].code = #65730	
* group[=].element[=].display = "Bexsero"
* group[=].element[=].target[+].code = #23511006
* group[=].element[=].target[=].display = "Meningococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

// added 2022-12-01
* group[=].element[+].code = #68087	
* group[=].element[=].display = "Influvac Tetra"
* group[=].element[=].target[+].code = #719590007
* group[=].element[=].target[=].display = "Influenza caused by seasonal influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

// added 2022-12-01
* group[=].element[+].code = #66037
* group[=].element[=].display = "Menjugate liquid"
* group[=].element[=].target[+].code = #860805006
* group[=].element[=].target[=].display = "Encephalomyelitis caused by Neisseria meningitidis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto


// added 2022-12-01
* group[=].element[+].code = #699
* group[=].element[=].display = "ProQuad"
* group[=].element[=].target[+].code = #36653000
* group[=].element[=].target[=].display = "Rubella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display = "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #36989005
* group[=].element[=].target[=].display = "Mumps (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #38907003	
* group[=].element[=].target[=].display = "Varicella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto


//69123	01	Spikevax Bivalent Original / Omicron 10 mg/ml, Fertigspritze	Moderna Switzerland GmbH	B	11.11.2022	11.11.2022	25.08.2024	J07BX03
// added 2023-02-21
* group[=].element[+].code = #69123
* group[=].element[=].display = "Spikevax Bivalent Original / Omicron 10 mg/ml, Fertigspritze"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto


//69010	01	Spikevax, Fertigspritze	Moderna Switzerland GmbH	B	13.10.2022	13.10.2022	26.09.2023	J07BX03
// added 2023-02-21
* group[=].element[+].code = #69010
* group[=].element[=].display = "Spikevax, Fertigspritze"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//69047	01	Comirnaty® Original/Omicron BA.1 15/15 µg pro Dosis gebrauchsfertige Injektionsdispersion für Personen ab 18 Jahren	Pfizer AG	B	10.10.2022	10.10.2022	09.10.2024	J07BX03
// added 2023-02-21
* group[=].element[+].code = #69047
* group[=].element[=].display = "Comirnaty® Original/Omicron BA.1 15/15 µg pro Dosis"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto


//69127	01	Comirnaty Original/Omicron BA. 4-5 0.225 mg, Injektionsdispersion	Pfizer AG	B	06.04.2023	06.04.2023	05.04.2028	J07BX03
// added 2023-05-19
* group[=].element[+].code = #69127
* group[=].element[=].display = "Comirnaty Original/Omicron BA. 4-5 0.225 mg"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//69189	01	Spikevax Bivalent Original / Omicron BA.4-5, dispersion for injection	Moderna Switzerland GmbH	B	03.03.2023	03.03.2023	02.03.2028	J07BX03
// added 2023-05-19
* group[=].element[+].code = #69189
* group[=].element[=].display = "Spikevax Bivalent Original / Omicron BA.4-5"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//69211	01	Spikevax Bivalent Original / Omicron BA.4-5, Fertigspritze	Moderna Switzerland GmbH	B	21.03.2023	21.03.2023	20.03.2028	J07BX03
// added 2023-05-19
* group[=].element[+].code = #69211
* group[=].element[=].display = "Spikevax Bivalent Original / Omicron BA.4-5, Fertigspritze"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//68752	01	Vaxneuvance, Injektionssuspension	MSD Merck Sharp & Dohme AG	B	14.02.2023	14.02.2023	13.02.2028	J07AL02
// added 2023-05-19
* group[=].element[+].code = #68752
* group[=].element[=].display = "Vaxneuvance"
* group[=].element[=].target[+].code = #16814004
* group[=].element[=].target[=].display = "Pneumococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto


//69465	01	Spikevax XBB.1.5 0.10 mg/ml, Dispersion zur Injektion	Moderna Switzerland GmbH	B	26.09.2023	26.09.2023	25.09.2028	J07BX
// added 2023-10-10
* group[=].element[+].code = #69465
* group[=].element[=].display = "Spikevax XBB.1.5 0.10 mg/ml"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//69484	01	Spikevax XBB.1.5 0.10 mg/ml, Dispersion zur Injektion	Moderna Switzerland GmbH	B	26.09.2023	26.09.2023	25.09.2028	J07BX
// added 2023-10-10
* group[=].element[+].code = #69484
* group[=].element[=].display = "Spikevax XBB.1.5 0.10 mg/ml"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//69488	01	Comirnaty Omicron XBB.1.5 (30 Mikrogramm)/Dosis, Injektionsdispersion	Pfizer AG	B	20.09.2023	20.09.2023	19.09.2028	J07BN01
// added 2023-10-10
* group[=].element[+].code = #69488
* group[=].element[=].display = "Comirnaty Omicron XBB.1.5 (30 Mikrogramm)/Dosis"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto


//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69310|'AREXVY, Pulver und Suspension zur Herstellung einer Injektionssuspension	GlaxoSmithKline AG': The source code 'http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69310|AREXVY, Pulver und Suspension zur Herstellung einer Injektionssuspension	GlaxoSmithKline AG' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #69310
* group[=].element[=].display = "AREXVY"
* group[=].element[=].target[+].code = #55735004 
* group[=].element[=].target[=].display = "Respiratory syncytial virus infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69173|'Jynneos, Injektionssuspension	Bavarian Nordic Switzerland AG': The source code 'http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69173|Jynneos, Injektionssuspension	Bavarian Nordic Switzerland AG' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #69173
* group[=].element[=].display = "Jynneos"
* group[=].element[=].target[+].code = #359814004
* group[=].element[=].target[=].display = "Monkeypox (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #67924001
* group[=].element[=].target[=].display = "Smallpox (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69222|'Prevenar 20, Injektionssuspension in einer Fertigspritze	Pfizer AG': The source code 'http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69222|Prevenar 20, Injektionssuspension in einer Fertigspritze	Pfizer AG' is defined in the valueset but not in the conceptmap.
* group[=].element[+].code = #69222
* group[=].element[=].display = "Prevenar 20"
* group[=].element[=].target[+].code = #16814004 
* group[=].element[=].target[=].display = "Pneumococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69815|'Comirnaty Omicron XBB.1.5, 0.042 mg, Injektionsdispersion in einer Fertigspritze	Pfizer AG'
* group[=].element[+].code = #69815
* group[=].element[=].display = "Comirnaty Omicron XBB.1.5, 0.042 mg"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69403|'Qdenga 0.5 ml, Pulver und Lösungsmittel für eine Injektionslösung in einer vorgefüllten Spritze	Takeda Pharma AG'
* group[=].element[+].code = #69403
* group[=].element[=].display = "Qdenga 0.5 ml"
* group[=].element[=].target[+].code = #38362002
* group[=].element[=].target[=].display = "Dengue (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto


//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69913 "Comirnaty JN.1 0.042 mg, Injektionsdispersion in einer Fertigspritze, Pfizer AG"
// added 2024-10-17
* group[=].element[+].code = #69913
* group[=].element[=].display = "Comirnaty JN.1 0.042 mg, Injektionsdispersion in einer Fertigspritze, Pfizer AG"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69912-01 "Comirnaty JN.1 30 μg, Injektionsdispersion, Pfizer AG"
// added 2024-10-17
* group[=].element[+].code = #69912-01
* group[=].element[=].display = "Comirnaty JN.1 30 μg, Injektionsdispersion, Pfizer AG"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69912-02 "Comirnaty JN.1 10 μg, Injektionsdispersion, Pfizer AG"
// added 2024-10-17
* group[=].element[+].code = #69912-02
* group[=].element[=].display = "Comirnaty JN.1 10 μg, Injektionsdispersion, Pfizer AG"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69691 "Abrysvo, Pulver und Lösungsmittel zur Herstellung einer Injektionslösung, Pfizer AG"
// added 2024-10-17
* group[=].element[+].code = #69691
* group[=].element[=].display = "Abrysvo, Pulver und Lösungsmittel zur Herstellung einer Injektionslösung, Pfizer AG"
* group[=].element[=].target[+].code = #55735004 
* group[=].element[=].target[=].display = "Respiratory syncytial virus infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto

//http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-swissmedic-cs|69788 "Spikevax JN.1 (mRNA-1273.167), 0.10mg/ml, Dispersion zur Injektion, Moderna Switzerland GmbH"
// added 2024-10-17
* group[=].element[+].code = #69788
* group[=].element[=].display = "Spikevax JN.1 (mRNA-1273.167), 0.10mg/ml, Dispersion zur Injektion, Moderna Switzerland GmbH"
* group[=].element[=].target[+].code = #840539006
* group[=].element[=].target[=].display = "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto



// //////////////////////////////////////////////////////////////////////////////////////////
// Old vaccines, missing swiss medic number                                               ///
// //////////////////////////////////////////////////////////////////////////////////////////
* group[+].source = "http://fhir.ch/ig/ch-vacd/CodeSystem/ch-vacd-myvaccines-cs"
* group[=].target = "http://snomed.info/sct"
* group[=].element[0].code = #14
* group[=].element[=].display = "MoRu-Viraten"
* group[=].element[=].target[+].code = #36653000
* group[=].element[=].target[=].display = "Rubella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display = "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #16
* group[=].element[=].display = "Orochol E"
* group[=].element[=].target[+].code = #63650001
* group[=].element[=].target[=].display = "Cholera (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #17
* group[=].element[=].display = "Poliomyelitis Impfstoff Berna"
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #23
* group[=].element[=].display = "Triviraten"
* group[=].element[=].target[+].code = #36653000
* group[=].element[=].target[=].display = "Rubella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display = "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #25
* group[=].element[=].display = "Vivotif L"
* group[=].element[=].target[+].code = #4834000
* group[=].element[=].target[=].display = "Typhoid fever (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #35
* group[=].element[=].display = "Infanrix DTPa"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #39
* group[=].element[=].display = "Infanrix Penta"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #47
* group[=].element[=].display = "Attenuvax"
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display = "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #48
* group[=].element[=].display = "BCG"
* group[=].element[=].target[+].code = #56717001
* group[=].element[=].target[=].display = "Tuberculosis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #53
* group[=].element[=].display = "HBVAXPRO 5"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #55
* group[=].element[=].display = "Meningokokken-Impfstoff A+C Mérieux"
* group[=].element[=].target[+].code = #23511006
* group[=].element[=].target[=].display = "Meningococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #56
* group[=].element[=].display = "Meruvax"
* group[=].element[=].target[+].code = #36653000
* group[=].element[=].target[=].display = "Rubella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #73
* group[=].element[=].display = "Infanrix DTPa+Hib"
* group[=].element[=].target[+].code = #709410003
* group[=].element[=].target[=].display = "Haemophilus influenzae type b infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #74
* group[=].element[=].display = "Twinrix 360/10"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #40468003
* group[=].element[=].target[=].display = "Viral hepatitis, type A (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #75
* group[=].element[=].display = "Pluserix"
* group[=].element[=].target[+].code = #36653000
* group[=].element[=].target[=].display = "Rubella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display = "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #36989005
* group[=].element[=].target[=].display = "Mumps (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #76
* group[=].element[=].display = "Acel Immune"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #77
* group[=].element[=].display = "Acel P"
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #78
* group[=].element[=].display = "Act-Hib"
* group[=].element[=].target[+].code = #709410003
* group[=].element[=].target[=].display = "Haemophilus influenzae type b infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #79
* group[=].element[=].display = "Anatoxal DiTePer"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #80
* group[=].element[=].display = "Anatoxal DiTe Erwachsene"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #81
* group[=].element[=].display = "Anatoxal DiTe N Erwachsene"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #82
* group[=].element[=].display = "Anatoxal Di"
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #83
* group[=].element[=].display = "Anatoxal Te"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #84
* group[=].element[=].display = "Anatoxal Te N"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #86
* group[=].element[=].display = "Arilvax"
* group[=].element[=].target[+].code = #16541001
* group[=].element[=].target[=].display = "Yellow fever (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #87
* group[=].element[=].display = "BCG Vaccin Mérieux"
* group[=].element[=].target[+].code = #56717001
* group[=].element[=].target[=].display = "Tuberculosis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #88
* group[=].element[=].display = "Biviraten"
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display = "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #36989005
* group[=].element[=].target[=].display = "Mumps (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #91
* group[=].element[=].display = "Ervevax"
* group[=].element[=].target[+].code = #36653000
* group[=].element[=].target[=].display = "Rubella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #92
* group[=].element[=].display = "HibTiter"
* group[=].element[=].target[+].code = #709410003
* group[=].element[=].target[=].display = "Haemophilus influenzae type b infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #93
* group[=].element[=].display = "Infanrix DTPa-HBV"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #94
* group[=].element[=].display = "Lyssavac Berna"
* group[=].element[=].target[+].code = #14168008
* group[=].element[=].target[=].display = "Rabies (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #96
* group[=].element[=].display = "MM Vax"
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display = "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #36989005
* group[=].element[=].target[=].display = "Mumps (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #97
* group[=].element[=].display = "Mumaten"
* group[=].element[=].target[+].code = #36989005
* group[=].element[=].target[=].display = "Mumps (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #98
* group[=].element[=].display = "Pedvax"
* group[=].element[=].target[+].code = #709410003
* group[=].element[=].target[=].display = "Haemophilus influenzae type b infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #99
* group[=].element[=].display = "Pentacoq"
* group[=].element[=].target[+].code = #709410003
* group[=].element[=].target[=].display = "Haemophilus influenzae type b infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #100
* group[=].element[=].display = "Pnu-Immune"
* group[=].element[=].target[+].code = #16814004
* group[=].element[=].target[=].display = "Pneumococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #101
* group[=].element[=].display = "Polio Salk"
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #102
* group[=].element[=].display = "Polio Sabin"
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #103
* group[=].element[=].display = "Poloral"
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #106
* group[=].element[=].display = "Tetracoq"
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #107
* group[=].element[=].display = "Tetramune"
* group[=].element[=].target[+].code = #709410003
* group[=].element[=].target[=].display = "Haemophilus influenzae type b infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #110
* group[=].element[=].display = "Vaqta"
* group[=].element[=].target[+].code = #40468003
* group[=].element[=].target[=].display = "Viral hepatitis, type A (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #111
* group[=].element[=].display = "Rubeaten"
* group[=].element[=].target[+].code = #36653000
* group[=].element[=].target[=].display = "Rubella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #112
* group[=].element[=].display = "Rudivax"
* group[=].element[=].target[+].code = #36653000
* group[=].element[=].target[=].display = "Rubella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #115
* group[=].element[=].display = "Havrix 360"
* group[=].element[=].target[+].code = #40468003
* group[=].element[=].target[=].display = "Viral hepatitis, type A (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #117
* group[=].element[=].display = "Almevax"
* group[=].element[=].target[+].code = #36653000
* group[=].element[=].target[=].display = "Rubella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #118
* group[=].element[=].display = "Hevac B"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #119
* group[=].element[=].display = "MMR-I"
* group[=].element[=].target[+].code = #36653000
* group[=].element[=].target[=].display = "Rubella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display = "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #36989005
* group[=].element[=].target[=].display = "Mumps (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #120
* group[=].element[=].display = "Moruman"
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display = "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #121
* group[=].element[=].display = "Rimparix"
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display = "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #36989005
* group[=].element[=].target[=].display = "Mumps (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #122
* group[=].element[=].display = "Rubevac"
* group[=].element[=].target[+].code = #36653000
* group[=].element[=].target[=].display = "Rubella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #123
* group[=].element[=].display = "Trimovax"
* group[=].element[=].target[+].code = #36653000
* group[=].element[=].target[=].display = "Rubella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display = "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #36989005
* group[=].element[=].target[=].display = "Mumps (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #126
* group[=].element[=].display = "Ditanrix pediatric"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #127
* group[=].element[=].display = "Eolarix"
* group[=].element[=].target[+].code = #36653000
* group[=].element[=].target[=].display = "Rubella (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #14189004
* group[=].element[=].target[=].display = "Measles (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #128
* group[=].element[=].display = "FSME-Immun Injekt"
* group[=].element[=].target[+].code = #712986001
* group[=].element[=].target[=].display = "Central European encephalitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #133
* group[=].element[=].display = "ProHibit"
* group[=].element[=].target[+].code = #709410003
* group[=].element[=].target[=].display = "Haemophilus influenzae type b infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #134
* group[=].element[=].display = "Anatoxal DiTe Kinder"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #136
* group[=].element[=].display = "Celtura"
* group[=].element[=].target[+].code = #719865001
* group[=].element[=].target[=].display = "Influenza caused by pandemic influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #137
* group[=].element[=].display = "Focetria"
* group[=].element[=].target[+].code = #719865001
* group[=].element[=].target[=].display = "Influenza caused by pandemic influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #138
* group[=].element[=].display = "K1, K2, K3"
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #139
* group[=].element[=].display = "Koprowski"
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #141
* group[=].element[=].display = "Pandemrix"
* group[=].element[=].target[+].code = #719865001
* group[=].element[=].target[=].display = "Influenza caused by pandemic influenza virus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #142
* group[=].element[=].display = "Prohibit DTP"
* group[=].element[=].target[+].code = #709410003
* group[=].element[=].target[=].display = "Haemophilus influenzae type b infection (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #143
* group[=].element[=].display = "TAB oral"
* group[=].element[=].target[+].code = #4834000
* group[=].element[=].target[=].display = "Typhoid fever (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #144
* group[=].element[=].display = "Variola"
* group[=].element[=].target[+].code = #67924001
* group[=].element[=].target[=].display = "Smallpox (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #147
* group[=].element[=].display = "Polio Koprowski (K1-K3)"
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #148
* group[=].element[=].display = "Polio Lilly"
* group[=].element[=].target[+].code = #398102009
* group[=].element[=].target[=].display = "Acute poliomyelitis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #151
* group[=].element[=].display = "Di Anatoxal"
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #154
* group[=].element[=].display = "DiTe Anatoxal Kinder / Enfants"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #155
* group[=].element[=].display = "DiTePer Anatoxal"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #162
* group[=].element[=].display = "HBVAX DNA 5"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #163
* group[=].element[=].display = "HBVAX DNA 10"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #164
* group[=].element[=].display = "HBVAX DNA 40"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #165
* group[=].element[=].display = "Havrix junior"
* group[=].element[=].target[+].code = #40468003
* group[=].element[=].target[=].display = "Viral hepatitis, type A (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #166
* group[=].element[=].display = "Infanrix"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #27836007
* group[=].element[=].target[=].display = "Pertussis (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[=].target[+].code = #397430003
* group[=].element[=].target[=].display = "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #168
* group[=].element[=].display = "Tanrix"
* group[=].element[=].target[+].code = #76902006
* group[=].element[=].target[=].display = "Tetanus (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #169
* group[=].element[=].display = "Vaccin variole"
* group[=].element[=].target[+].code = #67924001
* group[=].element[=].target[=].display = "Smallpox (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #170
* group[=].element[=].display = "Engerix-B 40"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #172
* group[=].element[=].display = "Hepavax"
* group[=].element[=].target[+].code = #66071002
* group[=].element[=].target[=].display = "Viral hepatitis type B (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
* group[=].element[+].code = #95
* group[=].element[=].display = "Vaccin méningococcique A+C Mérieux"
* group[=].element[=].target[+].code = #23511006 
* group[=].element[=].target[=].display = "Meningococcal infectious disease (disorder)"
* group[=].element[=].target[=].equivalence = #relatedto
		


---

// File: input/fsh/namingsystem/ForumDatenaustausch.fsh

Instance: forum-datenaustausch-tariff
InstanceOf: NamingSystem
Usage: #definition
* name = "ForumDatenaustauschTariffType"
* status = #active
* kind = #identifier
* date = "2023-04-20T00:00:00+02:00"
* description = "Identification for Forum Datenaustausch tariff types. 

The detailed tariff list is avaible at this [url](https://www.forum-datenaustausch.ch/de/referenzdaten/)

Naming Convention for fore each tariff type is:

http://forum-datenaustausch.ch/tariff/[A-Z0-9]{3}
"
* uniqueId[0].type = #uri
* uniqueId[=].value = "http://forum-datenaustausch.ch/tariff"
* uniqueId[=].preferred = true


---

// File: input/fsh/valueset/ActSubstanceAdminSubstitutionCode.fsh

ValueSet: ActSubstanceAdminSubstitutionCode
Id: ActSubstanceAdminSubstitutionCode
Title: "ActSubstanceAdminSubstitutionCode"
Description: "ActSubstanceAdminSubstitutionCode"
//* ^status = #active
* ^experimental = false
* include codes from system $v3-substanceAdminSubstitution
    where concept is-a #_ActSubstanceAdminSubstitutionCode
* exclude $v3-substanceAdminSubstitution#_ActSubstanceAdminSubstitutionCode
* exclude $v3-substanceAdminSubstitution#N


---

// File: input/fsh/valueset/AdministrationMethodEDQM.fsh

ValueSet: AdministrationMethodEDQM
Id: edqm-administrationmethod
Title: "EDQM - Administration Method"
Description: "ValueSet Administration method from EDQM, AME, see https://standardterms.edqm.eu/#"
* ^experimental = false
* urn:oid:0.4.0.127.0.16.1.1.2.1#0004 "Administration"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0004 ^designation[0].language = #de-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0004 ^designation[=].value = "Administration"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0004 ^designation[+].language = #fr-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0004 ^designation[=].value = "Administration"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0004 ^designation[+].language = #it-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0004 ^designation[=].value = "Somministrazione"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0004 ^designation[+].language = #rm-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0004 ^designation[=].value = "Administraziun"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0005 "Application"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0005 ^designation[0].language = #de-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0005 ^designation[=].value = "Applikation"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0005 ^designation[+].language = #fr-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0005 ^designation[=].value = "Application"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0005 ^designation[+].language = #it-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0005 ^designation[=].value = "Applicazione"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0005 ^designation[+].language = #rm-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0005 ^designation[=].value = "Applicaziun"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0006 "Bathing"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0006 ^designation[0].language = #de-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0006 ^designation[=].value = "Baden"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0006 ^designation[+].language = #fr-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0006 ^designation[=].value = "Baigner"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0006 ^designation[+].language = #it-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0006 ^designation[=].value = "Bagnare"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0006 ^designation[+].language = #rm-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0006 ^designation[=].value = "Bogn"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0007 "Chewing"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0007 ^designation[0].language = #de-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0007 ^designation[=].value = "Kauen"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0007 ^designation[+].language = #fr-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0007 ^designation[=].value = "Mâcher"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0007 ^designation[+].language = #it-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0007 ^designation[=].value = "Masticare"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0007 ^designation[+].language = #rm-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0007 ^designation[=].value = "Tschavera"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0008 "Gargling"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0008 ^designation[0].language = #de-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0008 ^designation[=].value = "Gurgeln"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0008 ^designation[+].language = #fr-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0008 ^designation[=].value = "Se gargariser"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0008 ^designation[+].language = #it-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0008 ^designation[=].value = "Gargarizzare"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0008 ^designation[+].language = #rm-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0008 ^designation[=].value = "Sgarguglias"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0009 "Infusion"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0009 ^designation[0].language = #de-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0009 ^designation[=].value = "Infusion"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0009 ^designation[+].language = #fr-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0009 ^designation[=].value = "Perfusion"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0009 ^designation[+].language = #it-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0009 ^designation[=].value = "Infusione"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0009 ^designation[+].language = #rm-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0009 ^designation[=].value = "Infusiun"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0010 "Inhalation"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0010 ^designation[0].language = #de-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0010 ^designation[=].value = "Inhalation"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0010 ^designation[+].language = #fr-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0010 ^designation[=].value = "Inhalation"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0010 ^designation[+].language = #it-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0010 ^designation[=].value = "Inalazione"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0010 ^designation[+].language = #rm-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0010 ^designation[=].value = "Inhalaziun"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0011 "Injection"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0011 ^designation[0].language = #de-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0011 ^designation[=].value = "Injektion"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0011 ^designation[+].language = #fr-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0011 ^designation[=].value = "Injection"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0011 ^designation[+].language = #it-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0011 ^designation[=].value = "Iniezione"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0011 ^designation[+].language = #rm-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0011 ^designation[=].value = "Injecziun"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0012 "Insertion"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0012 ^designation[0].language = #de-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0012 ^designation[=].value = "Insertion"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0012 ^designation[+].language = #fr-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0012 ^designation[=].value = "Insertion"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0012 ^designation[+].language = #it-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0012 ^designation[=].value = "Inserzione"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0012 ^designation[+].language = #rm-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0012 ^designation[=].value = "Inserziun"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0013 "Instillation"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0013 ^designation[0].language = #de-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0013 ^designation[=].value = "Instillation"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0013 ^designation[+].language = #fr-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0013 ^designation[=].value = "Instillation"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0013 ^designation[+].language = #it-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0013 ^designation[=].value = "Instillazione"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0013 ^designation[+].language = #rm-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0013 ^designation[=].value = "Installaziun"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0014 "Orodispersion"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0014 ^designation[0].language = #de-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0014 ^designation[=].value = "Orodispersion"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0014 ^designation[+].language = #fr-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0014 ^designation[=].value = "Orodispersion"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0014 ^designation[+].language = #it-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0014 ^designation[=].value = "Orodispersione"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0014 ^designation[+].language = #rm-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0014 ^designation[=].value = "Dispersiun d'odi"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0015 "Rinsing/washing"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0015 ^designation[0].language = #de-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0015 ^designation[=].value = "Spülen/Waschen"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0015 ^designation[+].language = #fr-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0015 ^designation[=].value = "Rincer/Laver"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0015 ^designation[+].language = #it-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0015 ^designation[=].value = "Sciacquare/Lavare"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0015 ^designation[+].language = #rm-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0015 ^designation[=].value = "Derschentar/Lavar"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0017 "Spraying"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0017 ^designation[0].language = #de-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0017 ^designation[=].value = "Sprühen"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0017 ^designation[+].language = #fr-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0017 ^designation[=].value = "Pulvériser"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0017 ^designation[+].language = #it-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0017 ^designation[=].value = "Spray"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0017 ^designation[+].language = #rm-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0017 ^designation[=].value = "Squitta"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0018 "Sucking"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0018 ^designation[0].language = #de-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0018 ^designation[=].value = "Lutschen"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0018 ^designation[+].language = #fr-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0018 ^designation[=].value = "Sucer"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0018 ^designation[+].language = #it-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0018 ^designation[=].value = "Succhiare"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0018 ^designation[+].language = #rm-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0018 ^designation[=].value = "Luschezza"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0019 "Swallowing"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0019 ^designation[0].language = #de-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0019 ^designation[=].value = "Schlucken"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0019 ^designation[+].language = #fr-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0019 ^designation[=].value = "Avaler"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0019 ^designation[+].language = #it-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0019 ^designation[=].value = "Per deglutizione"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0019 ^designation[+].language = #rm-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0019 ^designation[=].value = "Tragutter"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0020 "Not specified"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0020 ^designation[0].language = #de-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0020 ^designation[=].value = "Keine Angaben"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0020 ^designation[+].language = #fr-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0020 ^designation[=].value = "Non spécifié"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0020 ^designation[+].language = #it-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0020 ^designation[=].value = "Non specificato"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0020 ^designation[+].language = #rm-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0020 ^designation[=].value = "Naginas indicaziuns"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0111 "Burning"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0111 ^designation[0].language = #de-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0111 ^designation[=].value = "Brennen"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0111 ^designation[+].language = #fr-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0111 ^designation[=].value = "Brûler"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0111 ^designation[+].language = #it-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0111 ^designation[=].value = "Bruciare"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0111 ^designation[+].language = #rm-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0111 ^designation[=].value = "Arder"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0112 "Dialysis"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0112 ^designation[0].language = #de-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0112 ^designation[=].value = "Dialyse"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0112 ^designation[+].language = #fr-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0112 ^designation[=].value = "Dialyse"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0112 ^designation[+].language = #it-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0112 ^designation[=].value = "Dialisi"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0112 ^designation[+].language = #rm-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0112 ^designation[=].value = "Dialisa"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0113 "Implantation"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0113 ^designation[0].language = #de-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0113 ^designation[=].value = "Implantation"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0113 ^designation[+].language = #fr-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0113 ^designation[=].value = "Implantation"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0113 ^designation[+].language = #it-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0113 ^designation[=].value = "Impianto"
* urn:oid:0.4.0.127.0.16.1.1.2.1#0113 ^designation[+].language = #rm-CH
* urn:oid:0.4.0.127.0.16.1.1.2.1#0113 ^designation[=].value = "Implantaziun"


---

// File: input/fsh/valueset/ch-vacd-ch-vaccination-plan-immunizations-vs.fsh

ValueSet: SwissVaccinationPlanImmunizations
Id: ch-vacd-ch-vaccination-plan-immunizations-vs
Title: "CH VACD Swiss Vaccination Plan Immunizations"
Description: "Immunization procedures for recommendations according to the vaccination plan."
* ^url = "http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-ch-vaccination-plan-immunizations-vs"
* ^status = #active
* ^experimental = false

* $sct#42284007 "Administration of vaccine product containing only live attenuated Mycobacterium bovis antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "BCG-Impfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination par le BCG"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro la tubercolosi"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter tuberculosa"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "BCG vaccination"
* $sct#76668005 "Administration of vaccine product containing only Corynebacterium diphtheriae antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Diphterie-Impfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination contre la diphtérie"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro la difterite"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter difteria"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Diphtheria vaccination"
* $sct#127787002 "Administration of vaccine product containing only Haemophilus influenzae type B antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Impfung gegen Haemophilus influenzae Typ B"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination contre l'Haemophilus influenzae de type B"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro l'Haemophilus influenzae di tipo b"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter hemofilus influenza tip B"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Haemophilus influenzae type b vaccination"
* $sct#243789007 "Administration of vaccine product containing only Hepatitis A virus antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Hepatitis-A-Impfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination contre l'hépatite A"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro l'epatite A"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter hepatitis A"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Hepatitis A vaccination"
* $sct#16584000 "Administration of vaccine product containing only Hepatitis B virus antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Hepatitis-B-Impfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination contre l'hépatite B"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro l'epatite B"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter hepatitis B"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Hepatitis B vaccination"
* $sct#86198006 "Administration of vaccine product containing only Influenza virus antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Grippeimpfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination contre l'influenza"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro l'influenza"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter la grippa"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Influenza vaccination"
* $sct#314759000 "Administration of vaccine product containing only Japanese encephalitis virus antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Impfung gegen Japanische Enzephalitis"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination contre l'encéphalite japonaise"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Jvaccinazione contro l'encefalite giapponese"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter l'encefalitis giapunaisa"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Japanese encephalitis vaccination"
* $sct#47435007 "Administration of vaccine product containing only Measles morbillivirus antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Masernimpfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination antirougeoleuse"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro il morbillo"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter il virustgel"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Measles vaccination"

// new by expert review 202201
* $sct#719596001 "Administration of vaccine product containing only Neisseria meningitidis serogroup C antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Meningitis-C-Impfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination contre la méningite C"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro la meningite C"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter meninghitis C"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Meningitis C vaccination"

* $sct#314417000 "Administration of vaccine product containing only Neisseria meningitidis serogroup A and C antigens (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Meningitis-A-und-C-Impfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination contre les méningites A et C"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro la meningite A e C"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter meninghitis A e C"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Meningitis A and C vaccination"

* $sct#871874000 "Administration of vaccine product containing only Neisseria meningitidis serogroup A, C, W135 and Y antigens (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Meningitis-A, C-, W135- und Y-Impfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination contre les méningites A, C, W135 et Y"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro la meningite A, C, W135 e Y"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter meninghitis A, C, W135 ed Y"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Meningitis A, C, W135 and Y vaccination"

* $sct#50583002 "Administration of vaccine product containing only Mumps orthorubulavirus antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Mumpsimpfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination contre les oreillons"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro la parotite"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter il glandun"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Mumps vaccination"
* $sct#761841000 "Administration of vaccine product containing only Human papillomavirus antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Impfung gegen humane Papillomaviren"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination contre le papillomavirus humain"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro il virus del papilloma umano"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter ils papillomavirus umans"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Human papillomavirus vaccination"
* $sct#39343008 "Administration of vaccine product containing only Bordetella pertussis antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Pertussis-Impfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination contre la coqueluche"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro la pertosse"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter la tuss chanina"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Pertussis vaccination"

// new by expert review 202201
* $sct#1119368005 "Administration of vaccine product containing only Streptococcus pneumoniae Danish serotype 4, 6B, 9V, 14, 18C, 19F, and 23F capsular polysaccharide antigens conjugated (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "7-valente Pneumokokken-Konjugatimpfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination antipneumococcique conjugué 7-valent"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione con vaccino coniugato eptavalente contro gli pneumococchi"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter pneumococcus cun vaccin fusiunà valenza 7"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Pneumococcal 7-valent conjugate vaccination"

* $sct#1119366009 "Administration of vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F, and 23F capsular polysaccharide antigens (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "13-valente Pneumokokken-Konjugatimpfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination antipneumococcique conjugué 13-valent"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione con vaccino coniugato 13-valente contro gli pneumococchi"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter pneumococcus cun vaccin fusiunà valenza 13"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Pneumococcal 13-valent conjugate vaccination"

* $sct#1119367000 "Administration of vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, and 33F capsular polysaccharide antigens (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "23-valente Pneumokokken-Konjugatimpfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination antipneumococcique conjugué 23- valent"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione con vaccino coniugato 23-valente contro gli pneumococchi"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter pneumococcus cun vaccin fusiunà valenza 23"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Pneumococcal 23-valent conjugate vaccination"


* $sct#72093006 "Administration of vaccine product containing only Human poliovirus antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Polio-Impfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination contre la poliomyélite"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro la poliomielite"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter poliomielitica"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Poliomyelitis vaccination"
* $sct#34631000 "Administration of vaccine product containing only Rabies lyssavirus antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Tollwut-Impfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination contre la rage"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro la rabbia"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter la frenesia"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Rabies vaccination"
* $sct#82314000 "Administration of vaccine product containing only Rubella virus antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Röteln-Impfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination contre la rubéole"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro la rosolia"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter la rubella"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Rubella vaccination"
* $sct#127786006 "Administration of vaccine product containing only Clostridium tetani antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Tetanus-Impfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination contre le tétanos"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro il tetano"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter tetanus"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Tetanus vaccination"
* $sct#281658005 "Administration of vaccine product containing only Tick-borne encephalitis virus antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "FSME-Impfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination contre l'encéphalite à tiques"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro la meningoencefalite da zecche"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter la meningoencefalitis da zeccas"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Tick-borne encephalitis vaccination"
* $sct#15483003 "Administration of vaccine product containing only Salmonella enterica subspecies enterica serovar Typhi antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Typhus-Impfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination antityphoïdique"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro la febbre tifoidea"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter tifus"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Typhoid vaccination"

// new by expert review 202201
* $sct#737081007 "Administration of vaccine product containing only Human alphaherpesvirus 3 antigen for chickenpox (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Varizellen-Zoster-Impfung gegen Windpocken"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination varicelle-zona contre la varicelle"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro il virus varicella-zoster: solo varicella"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter la virola selvadia"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Varicella-zoster vaccination for chickenpox"
* $sct#722215002 "Administration of vaccine product containing only Human alphaherpesvirus 3 antigen for shingles (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Varizellen-Zoster-Impfung gegen Gürtelrose"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination varicelle-zona contre le zona"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro il virus varicella-zoster: solo herpes zoster"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter herpes zoster"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Varicella-zoster vaccination for shingles"


* $sct#67308009 "Administration of vaccine product containing only Yellow fever virus antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Gelbfieber-Impfung"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination contre la fièvre jaune"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro la febbre gialla"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter la fevra melna"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Yellow fever vaccination"

// new by expert review 202201
* $sct#1157107003 "Administration of vaccine product containing only recombinant non-replicating viral vector encoding Severe acute respiratory syndrome coronavirus 2 spike protein (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Nicht replizierende virale Vektorimpfung gegen COVID-19"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "administration d'un vaccin à vecteur viral recombinant non réplicatif contre le COVID-19"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione con vaccino a vettore virale non replicante anti-COVID-19"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter COVID-19 cun vaccin vectorial viral betg replitgant"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "COVID-19 non-replicating viral vector vaccination"

* $sct#1119350007 "Administration of vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "mRNA-Impfung gegen COVID-19"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "administration d'un vaccin à ARNm du SARS-CoV-2"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione con vaccino a mRNA anti-COVID-19"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter COVID-19 cun vaccin mRNA"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "COVID-19 mRNA vaccination"

//added 20220624
//1209198003	Administration of vaccine product containing only Human papillomavirus 6, 11, 16, 18, 31, 33, 45, 52 and 58 antigen (procedure)	Impfung gegen die humanen Papillomaviren 6, 11, 16, 18, 31, 33, 45, 52 und 58	Human papillomavirus 6, 11, 16, 18, 31, 33, 45, 52 and 58 vaccination	vaccination contre le papillomavirus humain 6, 11, 16, 18, 31, 33, 45, 52 and 58	TO DO	Impfung gegen die humanen Papillomaviren 6, 11, 16, 18, 31, 33, 45, 52 und 58
* $sct#1209198003 "Administration of vaccine product containing only Human papillomavirus 6, 11, 16, 18, 31, 33, 45, 52 and 58 antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Impfung gegen die humanen Papillomaviren 6, 11, 16, 18, 31, 33, 45, 52 und 58"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination contre le papillomavirus humain 6, 11, 16, 18, 31, 33, 45, 52 and 58"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione contro i papillomavirus umani 6, 11, 16, 18, 31, 33, 45, 52 e 58"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter ils papillomavirus umans 6, 11, 16, 18, 31, 33, 45, 52 e 58"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Human papillomavirus 6, 11, 16, 18, 31, 33, 45, 52 and 58 vaccination"


//added 20220624
//1162645008	Administration of vaccine product containing only severe acute respiratory syndrome coronavirus 2 recombinant spike protein antigen (procedure)	Impfung gegen Covid-19 mit rekombinanten Spike-Protein-Antigenen	COVID-19 recombinant spike protein antigen vaccination	vaccination antigénique à protéine Spike recombinante contre le COVID-19	TO DO	Impfung gegen Covid-19 mit rekombinanten Spike-Protein-Antigenen
* $sct#1162645008 "Administration of vaccine product containing only severe acute respiratory syndrome coronavirus 2 recombinant spike protein antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Impfung gegen Covid-19 mit rekombinanten Spike-Protein-Antigenen"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "vaccination antigénique à protéine Spike recombinante contre le COVID-19"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "vaccinazione con vaccino antigenico anti-COVID-19 con proteina spike ricombinante"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziun cunter COVID-19 cun antigens dal protein spike recumbinant"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "COVID-19 recombinant spike protein antigen vaccination"


---

// File: input/fsh/valueset/ch-vacd-recommendation-categories-vs.fsh

ValueSet: SwissImmunizationRecommendationCategories
Id: ch-vacd-recommendation-categories-vs
Title: "CH VACD Recommendation Categories for Immunizations"
Description: "Immunization recommendation categories."
* ^url = "http://fhir.ch/ig/ch-vacd/ValueSet/ch-vacd-recommendation-categories-vs"
* ^status = #active
* ^experimental = false


* $sct#42284007 "Administration of vaccine product containing only live attenuated Mycobacterium bovis antigen (procedure)"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "BCG-Impfung"

* $ch-vacd-recommendation-categories-cs#41501 "REC_BASE"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Empfohlene Basisimpfungen"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Vaccinations recommandées de base"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Vaccinazioni raccomandate di base"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziuns da basa recumandadas"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Recommended primary vaccinations"
* $ch-vacd-recommendation-categories-cs#41502 "REC_COMPL"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Empfohlene ergänzende Impfungen"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Vaccinations recommandées complémentaires"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Vaccinazioni raccomandate complementari"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziuns cumplementaras recumandadas"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Recommended booster vaccinations"
* $ch-vacd-recommendation-categories-cs#41503 "REC_RISK"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Empfohlene Impfungen für Risikogruppen"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Vaccinations recommandées à des groupes à risque"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Vaccinazioni raccomandate a gruppi a rischio"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziuns recumandadas per gruppas da ristga"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Recommended vaccinations for risk groups"
* $ch-vacd-recommendation-categories-cs#41504 "REC_NONE"
  * ^designation[0].language = #de-CH
  * ^designation[=].value = "Impfungen ohne Empfehlungen"
  * ^designation[+].language = #fr-CH
  * ^designation[=].value = "Vaccinations sans recommandation d’utilisatio"
  * ^designation[+].language = #it-CH
  * ^designation[=].value = "Vaccinazioni senza raccomandazione d’utilizzo"
  * ^designation[+].language = #rm-CH
  * ^designation[=].value = "vaccinaziuns senza recumandaziuns"
  * ^designation[+].language = #en-US
  * ^designation[=].value = "Vaccinations without recommendations"

---

