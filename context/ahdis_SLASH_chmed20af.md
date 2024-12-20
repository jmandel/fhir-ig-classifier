File: repos/ahdis_SLASH_chmed20af/sushi-config.yaml

id: ch.chmed.emediplan
canonical: http://chmed.emediplan.ch/fhir
name: CHMED
status: active
version: 3.0.0-ci-build
date: 2023-10-17
fhirVersion: 4.0.1
copyrightYear: 2017+
releaseLabel: ci-build # ci-build | draft | qa-preview | ballot | trial-use | release | update | normative+trial-use
publisher:
  name: IG eMediplan
  url: http://www.emediplan.ch

parameters:
  apply-publisher: false
  allow-extensible-warnings: true
  display-warnings: true 

title: CHMED Implementation Guide
description: FHIR Implementation Guide for eMediplan
license: CC0-1.0
copyright: CC0-1.0
jurisdiction: urn:iso:std:iso:3166#CHE

dependencies:
  ch.fhir.ig.ch-emed: 4.0.0-ballot
  ch.fhir.ig.ch-core: 4.0.0-ballot

# ----- Define IG tabs (page content) -----
menu:
  Home: index.html
  Documents: documents.html
  Use Cases:
    German: usecases-german.html
    French: usecases-french.html
  Profiles: profiles.html
  Extensions: extensions.html
  Terminology: terminology.html
  Dosage: dosage.html
  Artifacts: artifacts.html

# ----- Define own titles (default: IG Publisher generates titles) -----
pages:
  index.md:
    title: Home
  documents.md:
    title: FHIR Documents
  usecases-german.md:
    title: Anwendungsfälle
  usecases-french.md:
    title: Cas d'application 
  profiles.md:
    title: Profiles
  extensions.md:
    title: Extensions
  terminology.md:
    title: Terminology
  dosage.md:
    title: Dosage
  changelog.md:
    title: Changelog
  changelog_v0.2.0.md:
    title: Changelog v0.2.0 (2019-06-11)


---

// File: input/pagecontent/changelog_v0.2.0.md

Updated draft version of the implementation guide for the FHIR based definition of [CHMED16A (V1.6)](https://emediplan.ch/dbFile/305/u-ce40/dl/eMediplan_CHMED16A_V1.6.pdf), based on [FHIR Release 4](http://hl7.org/fhir/R4/).  

- Adapt ig.json to new FHIR Version and structure
- Convert the StructutreDefintions from STU3 with R4 with the convert functionality of matchbox
- Adjust problems in differentials in StructureDefinitions 
- CodeSystem: just minor updates (designation values are not displayed: this is due to the ig publisher, need to do a feature reqeust to add support) 
- ValueSets: just minor updates
- Observation: conversion of CodeSystem Url
- Condition: clinicalStatus changed to Coding with terminology clinicalStatus, fixed errors in snapshot generation
- TimeOfGestation: changed profile that validation is supported (http://chmed16af.emediplan.ch/fhir/StructureDefinition/chmed16af-obs-timeofgestation), needs pull request [gf#21240](https://github.com/hapifhir/org.hl7.fhir.core/pull/21), is now integrated
- Questionnaire PMC example fixed for validation error (wrong order) and warning
- QuestionnaireRespone.questionnaire instead of QuestionnaireRespone.reference
- MedicationStatement.taken will be set to unk for conversion STU3->R4
- MediciationRequest is now allowed[x], restricted valueBoelan, adjusted in examples and converter
- New extension for private fields for patient, incl. conversion, adjusted in the documentation 
- SimpleQuanity profile for Unitcodes (new)
- New Dosage profile for R4 instead of having it embedded in MedciationRequest and MedicationStatment 
   - In STU3 0..* Dosage, Dosage has 0..1 rate[x] and 0..1 dose[x]
   - In R4 0..* Dosage, Dosage has 0..* doseRate with 0..1 rate[x] and 0..1 dose[x]
- Adding Composition examples in STU3 and conversion to R4
- Rebuilt bundles (with matchbox IgUploader and $document operation)
- History added (see also http://wiki.hl7.org/index.php?title=Process_for_Publishing_a_FHIR_IG):
    1. package-list.json needs to be defined at cannonical url. then 
    2. adapted https://github.com/HL7/fhir-ig-history-template to use javascript instead of cfml, workaround for cors issued with current build to redirect manual point to the canonical history page http://chmed16af.emediplan.ch/fhir/history.html if package-list.json cannot be reslved
- Fixed Bundle.entry[1].resource.subject.reference	error with pull request    
- migrated to version 0.2.0
- publication of 0.2.0
- StructureMaps are provided to transform from 0.1.0 to 0.2.0 and back. The original are in the maps0.1.0 and maps0.2.0 directory. With a special ig publisher edition this maps are converted to StructureMaps. To faciliate online build the StructureMaps are then copied.

```
cp ./output/StructureMap-*.xml ./resources/structuremap/
cd ./resources/structuremap/
rename -e 's/StructureMap-//' *.xml
cd ..
cd ..
```


---

// File: input/pagecontent/changelog.md


All significant changes to this FHIR implementation guide will be documented on this page.

### v3.0.0 (2023)
* Adjustments to the current published [CH EMED 4.0.0-ballot](https://fhir.ch/ig/ch-emed/4.0.0-ballot/index.html) (see [changelog](http://fhir.ch/ig/ch-emed/changelog.html))
* Div. updates according the new specification [eMedication Plan ChMed23A (V1.0)](https://emediplan.ch/wp-content/uploads/2023/09/20230815_eMediplan_ChMed23A_1.0-AND-eMediplan_ChMed23A_Posology_1.0.pdf) (see changelog integrated in the document)
   * Renaming the implementation guide: CHMED20AF -> CHMED (version independent)
   * Changing the canonical url: http://chmed20af.emediplan.ch -> http://chmed.emediplan.ch
   * Development of different dosages based on 'eMedication Plan ChMed23A Posology', see [Dosage](dosage.html)
* Fixed [issues](https://github.com/ahdis/chmed/milestone/1?closed=1)


### v2.0.0 (2021-06-30)
* Adjustments to the current published [CH EMED v1.0.0](http://fhir.ch/ig/ch-emed/1.0.0/index.html) 
* Fixed [issues](https://github.com/ahdis/chmed/milestone/4?closed=1)


### v1.0.0 (2020-06-03)
* Integration of the Swiss EPR context
   * Depending on [CH EMED v0.1.0](http://fhir.ch/ig/ch-emed/0.1.0/index.html)
   * Renaming the implementation guide: CHMED16AF -> CHMED20AF
   * Changing the canonical url: http://chmed16af.emediplan.ch -> http://chmed20af.emediplan.ch
* Remove the QR Code in the FHIR specification of CHMED16A
* Fixed [issues](https://github.com/ahdis/chmed/milestone/3?closed=1)


### v0.2.0 (2019-06-11)
Updated draft version of the implementation guide for the FHIR based definition of [CHMED16A (V1.6)](https://emediplan.ch/dbFile/305/u-ce40/dl/eMediplan_CHMED16A_V1.6.pdf), based on [FHIR Release 4](http://hl7.org/fhir/R4/).     
For detailed information see [here](changelog_v0.2.0.html).


### v0.1.0 (2017-05-17)
Initial draft version of the implementation guide for the FHIR based definition of CHMED16A (V1.5), based on [FHIR Release 3 (STU)](http://hl7.org/fhir/STU3/). 


---

// File: input/pagecontent/documents.md

Two CHMED exchange formats are defined:
1. [Medication Card document (CARD)](#medication-card-document) (MedicationPlan (MP))
2. [Medication Prescription document (PRE)](#medication-prescription-document) (Prescription (Rx))

These exchange formats are defined as a [document](https://hl7.org/fhir/R4/documents.html) type that corresponds to a [Bundle](https://hl7.org/fhir/R4/bundle.html) as a FHIR resource. A Bundle has a list of entries. The first entry is the [Composition](https://hl7.org/fhir/R4/composition.html), in which all contained entries are then referenced.

{% include img.html img="documents.png" caption="Fig. 3: Schematic illustration of the FHIR documents for the exchange formats " width="70%" %}

### Medication Card document
The Medication Card document provides as complete an overview as possible of all **current medications** for a patient at a given point in time (such as the end of a hospitalization or other encounter). The purpose of this document is to inform the patient and clinicians (therapists, etc.) of the current medication information.

#### Bundle (CARD)
The Bundle resource defines the Medication Card document and its content, which are contained as entries.
* [Profile](StructureDefinition-chmed-card-bundle.html)
* [Mapping eMediplan](StructureDefinition-chmed-card-bundle-mappings.html#mappings-for-emediplan-https-emediplan-ch-wp-content-uploads-202)
* [Examples](StructureDefinition-chmed-card-bundle-examples.html)

#### Composition (CARD)
The Composition resource defines the healthcare-related information that is assembled together into a single Medication Card document. The Composition resource provides the basic structure of a FHIR document.
* [Profile](StructureDefinition-chmed-card-composition.html)
* [Mapping eMediplan](StructureDefinition-chmed-card-composition-mappings.html#mappings-for-emediplan-https-emediplan-ch-wp-content-uploads-202)
* [Examples](StructureDefinition-chmed-card-composition-examples.html)

#### Medication Card Section (CARD)
The medication card section contains the entries for the current medication of a patient. A medication consumed by a patient is recorded as MedicationStatement resource.
* [Profile](StructureDefinition-chmed-card-medicationstatement.html)
* [Mapping eMediplan](StructureDefinition-chmed-card-medicationstatement-mappings.html#mappings-for-emediplan-https-emediplan-ch-wp-content-uploads-202)
* [Examples](StructureDefinition-chmed-card-medicationstatement-examples.html)

#### Health Concerns Section (CARD)
The health concerns section contains the patient's medical data (Observation resources) and possible risks (Condition resources).   

* First day of last menstruation: [Profile](StructureDefinition-chmed-obs-dateoflastmenstruation.html), [Mapping eMediplan](StructureDefinition-chmed-obs-dateoflastmenstruation-mappings.html#mappings-for-emediplan-https-emediplan-ch-wp-content-uploads-202), [Examples](StructureDefinition-chmed-obs-dateoflastmenstruation-examples.html)
* Premature baby: [Profile](StructureDefinition-chmed-obs-prematurebaby.html), [Mapping eMediplan](StructureDefinition-chmed-obs-prematurebaby-mappings.html#mappings-for-emediplan-https-emediplan-ch-wp-content-uploads-202), [Examples](StructureDefinition-chmed-obs-prematurebaby-examples.html) 
* Time of gestation: [Profile](StructureDefinition-chmed-obs-timeofgestation.html), [Mapping eMediplan](StructureDefinition-chmed-obs-timeofgestation-mappings.html#mappings-for-emediplan-https-emediplan-ch-wp-content-uploads-202), [Examples](StructureDefinition-chmed-obs-timeofgestation-examples.html) 
* Risks: [Profile](StructureDefinition-chmed-condition-risks.html), [Mapping eMediplan](StructureDefinition-chmed-condition-risks-mappings.html#mappings-for-emediplan-https-emediplan-ch-wp-content-uploads-202), [Examples](StructureDefinition-chmed-condition-risks-examples.html) 
* Body weight: [Profile](StructureDefinition-chmed-obs-bodyweight.html), [Mapping eMediplan](StructureDefinition-chmed-obs-bodyweight-mappings.html#mappings-for-emediplan-https-emediplan-ch-wp-content-uploads-202), [Examples](StructureDefinition-chmed-obs-bodyweight-examples.html) 
* Body height: [Profile](StructureDefinition-chmed-obs-bodyheight.html), [Mapping eMediplan](StructureDefinition-chmed-obs-bodyheight-mappings.html#mappings-for-emediplan-https-emediplan-ch-wp-content-uploads-202), [Examples](StructureDefinition-chmed-obs-bodyheight-examples.html) 

_If the [risk category](ValueSet-chmed-valueset-risks-category.html) is specified without any [risk](ValueSet-chmed-valueset-risks-cdscode.html) being specified in the list of risks, the entire risk category is considered as explicitly excluded for the current patient. If the category does not exist, the risks are considered as unknown for the patient._

#### Annotation Section (CARD)
The annotation section can be used to provide comments that cannot be declared in any of the other sections in the document. The comments are provided as [narrative](http://hl7.org/fhir/R4/narrative.html#Narrative).

#### Original Representation Section (CARD)
In this section, according to the [Swiss exchange format](http://fhir.ch/ig/ch-emed/medication-card-document.html), the original representation of the Medication Card document shall be embedded as a PDF in PDF/A-1 or PDF/A-2 format. The PDF is represented by a [Binary](http://hl7.org/fhir/R4/binary.html) resource (base64 encoded). 



### Medication Prescription document
The Medication Prescription document describes the content and format of a **prescription document** generated during the process in which a health care professional decides that the patient needs medication (ONE or MORE).

#### Bundle (PRE)
The Bundle resource defines the Medication Prescription document and its content, which are contained as entries.
* [Profile](StructureDefinition-chmed-pre-bundle.html)
* [Mapping eMediplan](StructureDefinition-chmed-pre-bundle-mappings.html#mappings-for-emediplan-https-emediplan-ch-wp-content-uploads-202)
* [Examples](StructureDefinition-chmed-pre-bundle-examples.html)

#### Composition (PRE)
The Composition resource defines the healthcare-related information that is assembled together into a single Medication Prescription document. The Composition resource provides the basic structure of a FHIR document.
* [Profile](StructureDefinition-chmed-pre-composition.html)
* [Mapping eMediplan](StructureDefinition-chmed-pre-composition-mappings.html#mappings-for-emediplan-https-emediplan-ch-wp-content-uploads-202)
* [Examples](StructureDefinition-chmed-pre-composition-examples.html)

#### Medication Prescription Section (PRE)
The medication prescription section contains the entries for the prescriped medications of a patient. An order or request of the medication to a patient is represented as MedicationRequest resource.
* [Profile](StructureDefinition-chmed-pre-medicationrequest.html) 
* [Mapping eMediplan](StructureDefinition-chmed-pre-medicationrequest-mappings.html#mappings-for-emediplan-https-emediplan-ch-wp-content-uploads-202)
* [Examples](StructureDefinition-chmed-pre-medicationrequest-examples.html)

#### Annotation Section (PRE)
The same as in Medication Card document, see description in the [annotation section above](#annotation-section-card).

#### Original Representation Section (PRE)
The same as in Medication Card document, see description in the [original representation section above](#original-representation-section-card).


---

// File: input/pagecontent/dosage.md

The model of the ChMed23A Posology and the CHMED Dosage (FHIR) differ due to the FHIR dosage structure. This has an effect on how to map the different attributes from ChMed23A to CHMED.

### ChMed23A Posology and CHMED Dosage (FHIR)
* The [eMedication Plan ChMed23A Posology](https://emediplan.ch/wp-content/uploads/2023/09/20230815_eMediplan_ChMed23A_1.0-AND-eMediplan_ChMed23A_Posology_1.0.pdf) defines for a *Medicament* object 0-N *Posology* objects. The posology of a medicament describes **when**, **which quantity** of the medicament must be applied. Different kind of posologies can be specified with the available *PosologyDetail* objects.
* In FHIR a *[MedicationStatement](http://hl7.org/fhir/R4/medicationstatement.html)/[MedicationRequest](http://hl7.org/fhir/R4/medicationrequest.html)* can have n *[Dosages](https://www.hl7.org/fhir/R4/dosage.html)* with one *[Timing](https://www.hl7.org/fhir/R4/datatypes.html#Timing)* (which can have repeating timing defintions).

**Example**:

ChMed23A format for Posology:
```
{
  "dtFrom": "2023-07-13",
  "dtTo": "2023-08-13",
  "relMeal": 1,
  "inRes": false,
  "po": { … },
}
```

CHMED format for Dosage (see also [full example](MedicationStatement-dosage-example.json.html)):
```json
  "dosage" : [
    {
      "additionalInstruction" : [
        {
          "coding" : [
            {
              "system" : "http://snomed.info/sct",
              "code" : "307165006",
              "display" : "Before meal (qualifier value)"
            }
          ]
        }
      ],
      "timing" : {
        "repeat" : {
          "boundsPeriod" : {
            "start" : "2023-07-13",
            "end" : "2023-08-13"
          }
        }
      },
      "asNeededBoolean" : false
    }
  ]
```

#### CHMED Dosage (FHIR)
The [CHMED Dosage](StructureDefinition-chmed-dosage.html) data type profile includes additional specification to be able to map the dosage according to the requirements of the eMedication Plan ChMed23A Posology.

<div markdown="5" class="dragon">
    <p>
      <b>Relation to CH EMED</b>
    </p>
    <p>
      CHMED is based on CH EMED, the Swiss exchange format that currently does not support complex structured dosing (see details <a href="https://fhir.ch/ig/ch-emed/dosage.html">here</a>). A normal dosage (e.g. according to the 1-1-1-1 scheme) is compatible between all formats (ChMed23A, CHMED, CH EMED). For more complex dosages, as described below, there is only conditional compatibility. The critical points are described in the respective examples below.
    </p>
    <p>
      Please note that the FHIR representations of the CHMED dosage are suggestions. By gaining experience, there may be optimizations to be made. If you have any feedback/input, please use the 'Propose a change' link in the footer of the page.
    </p>
</div>
<p>&nbsp;</p>

<span style="color:red">NOTE:</span>    
**CH EMED**: The exchange format requires the structured specification of units when defining [quantity](http://fhir.ch/ig/ch-emed/StructureDefinition-ch-emed-quantity.html), [range](http://fhir.ch/ig/ch-emed/StructureDefinition-ch-emed-range.html) and [ratio](https://fhir.ch/ig/ch-emed/StructureDefinition-ch-emed-ratio.html). Therefore the unit is always shown in the CHMED examples below, where quantity or range is given.     
**ChMed23A**: The unit of the dosage specified is set on the *Medicament* object and also mandatory if the posology is defined. Because of the different level the unit is not shown in each ChMed23 examples below.

### PosologyDetail Objects
Different [types of PosologyDetail objects](ValueSet-chmed-valueset-posology-detail-object-type.html) are available. E.g. the daily posology object can be used to easily define daily dosages for morning, noon, evening and night or a sequence can be used to specify a complex posology like ‘take daily for 2 weeks, then take a break of 2 days”.   

Details and examples for the 5 types ([Daily](#daily), [FreeText](#freetext), [Single](#single), [Cyclic](#cyclic), [Sequence](#sequence)) are shown in the following sections.   

#### Daily
Describes when (morning, noon, evening, night) and how much of a medicament must be applied daily, using a simple structure.

##### Day segments
1. Morning -> [MORN](http://hl7.org/fhir/R4/valueset-event-timing.html)
2. Noon -> [NOON](http://hl7.org/fhir/R4/valueset-event-timing.html)
3. Evening -> [EVE](http://hl7.org/fhir/R4/valueset-event-timing.html)
4. Night -> [NIGHT](http://hl7.org/fhir/R4/valueset-event-timing.html)

<span style="color:red">NOTE:</span>     
**CH EMED**: In the structured form, the format 1-1-1-1, meaning the administration time in the morning, at noon, in the evening, at night, is supported. For [normal dosing](https://fhir.ch/ig/ch-emed/dosage.html#normal-dosing), the dose quantity is the same at the defined administration times (e.g. 1-0-0-0, 1-0-1-0). For [split dosing](https://fhir.ch/ig/ch-emed/dosage.html#normal-dosing), the dose quantity varies depending on the administration time (e.g. 1-0-2-0, 2-1-2-0). For split dosing more than one dosage element is used. The dosage sequences are numbered in ascending order (starting with 1).     
**CHMED**: To be able to map the posology detail object [sequence](#sequence) as well, the sequence element numbering must be handled differently. If more than one dosage element is used, sequence = 0 in all elements does mean, the dosage is concurrent (see example 1.5-0-2-0 in this section). If the sequence number is different (1, 2 etc.) the dosage is sequential (see example in the sequence section).   

**Example 1-0-1-0:** Take daily 1 in the morning and 1 in the evening.

ChMed23A format:
```
{
	"t": 1, // Daily
	"ds": [ 
		1, // 1 pill in the morning 
		0 
		1, // 1 pill in the evening 
		0 
	] 
}
```

CHMED format:
```json
  "dosage" : [
    {
      "extension" : [
        {
          "url" : "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-posology-detail-object-type",
          "valueCoding" : {
            "system" : "http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-posology-detail-object-type",
            "code" : "1",
            "display" : "Daily"
          }
        }
      ],
      "timing" : {
        "repeat" : {
          "when" : [
            "MORN",
            "EVE"
          ]
        }
      },
      "doseAndRate" : [
        {
          "doseQuantity" : {
            "value" : 1,
            "unit" : "Piece",
            "system" : "http://unitsofmeasure.org",
            "code" : "{Piece}"
          }
        }
      ]
    }
  ]
```
   

**Example 1.5-0-2-0:** Take daily 1.5 in the morning and 2 in the evening.

ChMed23A format:
```
{
	"t": 1, // Daily
	"ds": [ 
		1.5, // 1.5 (pills) in the morning 
		0, 
		2, // 2 (pills) in the evening 
		0 
	] 
}
```

CHMED format:
```json
  "dosage" : [
    {
      "extension" : [
        {
          "url" : "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-posology-detail-object-type",
          "valueCoding" : {
            "system" : "http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-posology-detail-object-type",
            "code" : "1",
            "display" : "Daily"
          }
        }
      ],
      "sequence" : 0,
      "timing" : {
        "repeat" : {
          "when" : [
            "MORN"
          ]
        }
      },
      "doseAndRate" : [
        {
          "doseQuantity" : {
            "value" : 1.5,
            "unit" : "Piece",
            "system" : "http://unitsofmeasure.org",
            "code" : "{Piece}"
          }
        }
      ]
    },
    {
      "sequence" : 0,
      "timing" : {
        "repeat" : {
          "when" : [
            "EVE"
          ]
        }
      },
      "doseAndRate" : [
        {
          "doseQuantity" : {
            "value" : 2,
            "unit" : "Piece",
            "system" : "http://unitsofmeasure.org",
            "code" : "{Piece}"
          }
        }
      ]
    }
  ]
```  


#### FreeText
Describes an unstructured posology consisting of free text.

<span style="color:red">NOTE:</span>     
**ChMed23A**: Medicament.appInstr (Dosage.patientInstruction) -> _Please note: For unstructured posology we recommend using the Posology object FreeText instead of AppInstr._

**Example:** Free text.

ChMed23A format:
```
{ 
	"t": 2, // Free text 
	"text": "Take one pill. Wait one hour. If symptoms persist, take a second pill and wait 30 minutes. If symptoms persist, contact doctor."
}
```

CHMED format:
```json
  "dosage" : [
    {
      "extension" : [
        {
          "url" : "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-posology-detail-object-type",
          "valueCoding" : {
            "system" : "http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-posology-detail-object-type",
            "code" : "2",
            "display" : "FreeText"
          }
        }
      ],
      "patientInstruction" : "Take one pill. Wait one hour. If symptoms persist, take a second pill and wait 30 minutes. If symptoms persist, contact doctor."
    }
  ]
```


#### Single
Describes a single application of a medicament. With the TimedDosage object, there are several possibilities to specify when the single application takes place.

**Example:** Take 1.

ChMed23A format:
```
{ 
	"t": 3, // Single application
	"tdo": { 
		"t": 1, // Dosage only
		"d": { 
			"t": 1, // Simple dosage
			"a": 1 // Amount of 1 
		} 
	} 
}
```

CHMED format:
```json
  "dosage" : [
    {
      "extension" : [
        {
          "url" : "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-posology-detail-object-type",
          "valueCoding" : {
            "system" : "http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-posology-detail-object-type",
            "code" : "3",
            "display" : "Single"
          }
        },
        {
          "url" : "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-timed-dosage-object-type",
          "valueCoding" : {
            "system" : "http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-timed-dosage-object-type",
            "code" : "1",
            "display" : "DosageOnly"
          }
        }
      ],
      "doseAndRate" : [
        {
          "doseQuantity" : {
            "value" : 1,
            "unit" : "Piece",
            "system" : "http://unitsofmeasure.org",
            "code" : "{Piece}"
          }
        }
      ]
    }
  ]
```


#### Cyclic
Describes the application of a medicament at constant intervals.

##### Time units
1. Second -> [s](http://hl7.org/fhir/R4/valueset-units-of-time.html)
2. Minute -> [min](http://hl7.org/fhir/R4/valueset-units-of-time.html)
3. Hour -> [h](http://hl7.org/fhir/R4/valueset-units-of-time.html)
4. Day -> [d](http://hl7.org/fhir/R4/valueset-units-of-time.html)
5. Week -> [wk](http://hl7.org/fhir/R4/valueset-units-of-time.html)
6. Month -> [mo](http://hl7.org/fhir/R4/valueset-units-of-time.html)
7. Year -> [a](http://hl7.org/fhir/R4/valueset-units-of-time.html)

**Example:** 1 pill twice a week.

ChMed23A format:
```
{ 
	"t": 4, // Cyclic
	"cyDuU": 5, // weekly duration unit 
	"cyDu": 5, // Cycle duration of 5 (week) 
	"tdo": { 
		"t": 1, // Doasage only 
		"d": { 
			"t": 1, // Simple dosage
			"a": 1 // Amount of 1
		} 
	}, 
	"tdpc": 2 // take twice within cycle 
}
```

CHMED format:
```json
  "dosage" : [
    {
      "extension" : [
        {
          "url" : "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-posology-detail-object-type",
          "valueCoding" : {
            "system" : "http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-posology-detail-object-type",
            "code" : "4",
            "display" : "Cyclic"
          }
        },
        {
          "url" : "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-timed-dosage-object-type",
          "valueCoding" : {
            "system" : "http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-timed-dosage-object-type",
            "code" : "1",
            "display" : "DosageOnly"
          }
        }
      ],
      "timing" : {
        "repeat" : {
          "frequency" : 2,
          "period" : 5,
          "periodUnit" : "wk"
        }
      },
      "doseAndRate" : [
        {
          "doseQuantity" : {
            "value" : 1,
            "unit" : "Piece",
            "system" : "http://unitsofmeasure.org",
            "code" : "{Piece}"
          }
        }
      ]
    }
  ]
```

#### Sequence 
Allows multiple posologies to be combined with a pause as a sequence.

<span style="color:red">NOTE:</span>    
**CHMED**: It can only be mapped to FHIR if the cycle duration unit (cyDuU) and the unit of the duration (duU) have the same time units.

**Example:** Take daily 1 for 21 days, then take a break of 7 days.

ChMed23A format:
```
{
  "t": 5, // Sequence
  "sos": [
    {
      "t": 1, // Posology sequence
      "po": {
        "t": 4, // Cyclic
        "cyDuU": 4, // Daily cycle duration unit
        "cyDu": 1, // Take every 1 (day)
        "td": {
          "t": 1, // Dosage only
          "d": {
            "t": 1, // Simple dosage
            "a": 1 // Amount of 1
          }
        },
        "tdpc": 1 // take once within cycle
      },
      "duU": 4, // Daily duration unit
      "du": 21 // Duration of 21 (days)
    },
    {
      "t": 2, // Pause
      "duU": 4, // Daily duration unit
      "du": 7 // Duration of 7 (days) 
    } 
  ] 
}
```

CHMED format:
```json
  "dosage" : [
    {
      "extension" : [
        {
          "url" : "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-posology-detail-object-type",
          "valueCoding" : {
            "system" : "http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-posology-detail-object-type",
            "code" : "5",
            "display" : "Sequence"
          }
        },
        {
          "url" : "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-posology-detail-object-type",
          "valueCoding" : {
            "system" : "http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-posology-detail-object-type",
            "code" : "4",
            "display" : "Cyclic"
          }
        },
        {
          "url" : "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-timed-dosage-object-type",
          "valueCoding" : {
            "system" : "http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-timed-dosage-object-type",
            "code" : "1",
            "display" : "DosageOnly"
          }
        }
      ],
      "sequence" : 1,
      "timing" : {
        "repeat" : {
          "count" : 21,
          "frequency" : 1,
          "period" : 1,
          "periodUnit" : "d"
        }
      },
      "doseAndRate" : [
        {
          "doseQuantity" : {
            "value" : 1,
            "unit" : "Tablet (unit of presentation)",
            "system" : "http://snomed.info/sct",
            "code" : "732936001"
          }
        }
      ]
    },
    {
      "sequence" : 2,
      "timing" : {
        "repeat" : {
          "count" : 7,
          "frequency" : 1,
          "period" : 1,
          "periodUnit" : "d"
        }
      },
      "doseAndRate" : [
        {
          "doseQuantity" : {
            "value" : 0,
            "unit" : "Tablet (unit of presentation)",
            "system" : "http://snomed.info/sct",
            "code" : "732936001"
          }
        }
      ]
    }
  ]
```




### TimedDosage Objects
Different [types of TimedDosage objects](ValueSet-chmed-valueset-timed-dosage-object-type.html) are available to specify the moment and amount of an application of a medicament. All TimedDosage objects must specify an amount to be applied. It is not mandatory to specify the moment of the application, but it is possible to set them precisely (time of day) or vaguely (day of week or month, day segment etc.).

Details and examples for the 6 types ([DosageOnly](#dosageonly), [Times](#times), [DaySegments](#daysegments), [WeekDays](#weekdays), [DaysOfMonth](#daysofmonth), [Interval](#interval)) are shown in the following sections.

#### DosageOnly
Specifies a dosage without specifying a precise moment for taking.

**Example:** Take 1.

ChMed23A format:
```
{ 
	"t": 1, // Dosage only
	"do": { 
		"t": 1, // Simple dosage
		"a": 1 // Amount of 1 
	} 
}
```

CHMED format:
```json
  "dosage" : [
    {
      "extension" : [
        {
          "url" : "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-timed-dosage-object-type",
          "valueCoding" : {
            "system" : "http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-timed-dosage-object-type",
            "code" : "1",
            "display" : "DosageOnly"
          }
        }
      ],
      "doseAndRate" : [
        {
          "doseQuantity" : {
            "value" : 1,
            "unit" : "Piece",
            "system" : "http://unitsofmeasure.org",
            "code" : "{Piece}"
          }
        }
      ]
    }
  ]
```

#### Times
Specifies precise times when a medicament must be applied.

**Example:** Take 1 at 08:00.

ChMed23A format:
```
{ 
	"t": 2, // Times
	"ts": [ 
		{ 
			"dt": "08:00:00", // Time of day
			"do": { 
				"t": 1, // Simple dosage
				"a": 1 // Amount of 1 
			} 
		} 
	] 
}
```

CHMED format:
```json
  "dosage" : [
    {
      "extension" : [
        {
          "url" : "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-timed-dosage-object-type",
          "valueCoding" : {
            "system" : "http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-timed-dosage-object-type",
            "code" : "2",
            "display" : "Times"
          }
        }
      ],
      "timing" : {
        "repeat" : {
          "timeOfDay" : [
            "08:00:00"
          ]
        }
      },
      "doseAndRate" : [
        {
          "doseQuantity" : {
            "value" : 1,
            "unit" : "Piece",
            "system" : "http://unitsofmeasure.org",
            "code" : "{Piece}"
          }
        }
      ]
    }
  ]
```

#### DaySegments
Specifies the day segment (morning, noon, evening, night) when a medicament must be applied.

**Example:** Take 1 in the evening.

ChMed23A format:
```
{ 
	"t": 3, // day segments 
	"ss": [ 
		{ 
			"s": 3, // Evening
			"do": { 
				"t": 1, // Simple dosage
				"a": 1 // Amount of 1 
			} 
		} 
	] 
}
```

CHMED format:
```json
  "dosage" : [
    {
      "extension" : [
        {
          "url" : "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-timed-dosage-object-type",
          "valueCoding" : {
            "system" : "http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-timed-dosage-object-type",
            "code" : "3",
            "display" : "DaySegments"
          }
        }
      ],
      "timing" : {
        "repeat" : {
          "when" : [
            "EVE"
          ]
        }
      },
      "doseAndRate" : [
        {
          "doseQuantity" : {
            "value" : 1,
            "unit" : "Piece",
            "system" : "http://unitsofmeasure.org",
            "code" : "{Piece}"
          }
        }
      ]
    }
  ]
```

#### WeekDays
Specifies on which days of the week a medicament must be applied.

##### Days of week
1. Monday -> [mon](http://hl7.org/fhir/R4/valueset-days-of-week.html)
2. Tuesday -> [tue](http://hl7.org/fhir/R4/valueset-days-of-week.html)
3. Wednesday -> [wed](http://hl7.org/fhir/R4/valueset-days-of-week.html)
4. Thursday -> [thu](http://hl7.org/fhir/R4/valueset-days-of-week.html)
5. Friday -> [fri](http://hl7.org/fhir/R4/valueset-days-of-week.html)
6. Saturday -> [sat](http://hl7.org/fhir/R4/valueset-days-of-week.html)
7. Sunday  -> [sun](http://hl7.org/fhir/R4/valueset-days-of-week.html)

**Example:** Take 1 on Monday, Wednesday and Friday.

ChMed23A format:
```
{ 
	"t": 4, // Weekdays
	"wds": [ 1, 3, 5 ], // Monday, Wednesday, Friday 
	"tdo": { 
		"t": 1, // Dosage only
		"do": { 
			"t": 1, // Simple dosage
			"a": 1 // Amount of 1 
		} 
	} 
}
```

CHMED format:
```json
  "dosage" : [
    {
      "extension" : [
        {
          "url" : "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-timed-dosage-object-type",
          "valueCoding" : {
            "system" : "http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-timed-dosage-object-type",
            "code" : "4",
            "display" : "WeekDays"
          }
        }
      ],
      "timing" : {
        "repeat" : {
          "dayOfWeek" : [
            "mon",
            "wed",
            "fri"
          ]
        }
      },
      "doseAndRate" : [
        {
          "doseQuantity" : {
            "value" : 1,
            "unit" : "Piece",
            "system" : "http://unitsofmeasure.org",
            "code" : "{Piece}"
          }
        }
      ]
    }
  ]
```

#### DaysOfMonth
Specifies on which days of the month a medicament must be applied.

**Example:** Take 1 on the 1st and 15th of the month.

ChMed23A format:
```
{ 
	"t": 5, // Days of month
	"doms": [ 1, 15 ], // Specified days in month 
	"tdo": { 
		"t": 1, // Dosage only
		"do": { 
			"t": 1, // Simple dosage
			"a": 1 // Amount of 1 
		} 
	} 
}
```

CHMED format:
```json
  "dosage" : [
    {
      "extension" : [
        {
          "url" : "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-timed-dosage-object-type",
          "valueCoding" : {
            "system" : "http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-timed-dosage-object-type",
            "code" : "5",
            "display" : "DaysOfMonth"
          }
        }
      ],
      "timing" : {
        "repeat" : {
          "extension" : [
            {
              "url" : "http://hl7.org/fhir/StructureDefinition/timing-dayOfMonth",
              "valuePositiveInt" : 1
            },
            {
              "url" : "http://hl7.org/fhir/StructureDefinition/timing-dayOfMonth",
              "valuePositiveInt" : 15
            }
          ]
        }
      },
      "doseAndRate" : [
        {
          "doseQuantity" : {
            "value" : 1,
            "unit" : "Piece",
            "system" : "http://unitsofmeasure.org",
            "code" : "{Piece}"
          }
        }
      ]
    }
  ]
```

#### Interval
Specifies the application of a medicament with a minimal interval between two applications.

**Example:** Apply medication with a minimal interval of 6 hours between two applications.

ChMed23A format:
```
{ 
	"t": 6, // Interval 
	"do": {
    "t": 1, // Simple dosage
    "a": 1 // Amount of 1
  }, 
	"miDuU": 3, // Hours interval unit
	"miDu": 6 // Every 6 (hours)
}
```

CHMED format:
```json
  "dosage" : [
    {
      "extension" : [
        {
          "url" : "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-timed-dosage-object-type",
          "valueCoding" : {
            "system" : "http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-timed-dosage-object-type",
            "code" : "6",
            "display" : "Interval"
          }
        }
      ],
      "maxDosePerPeriod" : {
        "numerator" : {
          "value" : 1,
          "unit" : "Piece",
          "system" : "http://unitsofmeasure.org",
          "code" : "{Piece}"
        },
        "denominator" : {
          "value" : 6,
          "unit" : "Hour",
          "system" : "http://unitsofmeasure.org",
          "code" : "h"
        }
      }
    }
  ]
```


### Dosage Objects
Dosage objects describe the amount of a medication that must be applied.     
Note that the unit of the amount is specified by the unit set for the Medicament.  

Details and examples for the 3 types ([DosageSimple](#dosagesimple), [DosageFromTo](#dosagefromto), [DosageRange](#dosagerange)) are shown in the following sections.

#### DosageSimple
Specifies a simple amount. E.g. 1 (pill) or 10 (ml).

**Example:** Take 1.

ChMed23A format:
```
{ 
	"t": 1, // Simple dosage 
	"a": 1 // Amount of 1 
}
```

CHMED format:
```json
  "dosage" : [
    {
      "doseAndRate" : [
        {
          "doseQuantity" : {
            "value" : 1,
            "unit" : "Piece",
            "system" : "http://unitsofmeasure.org",
            "code" : "{Piece}"
          }
        }
      ]
    }
  ]
```

#### DosageFromTo
Specifies how a dosage changes during time. This can be e.g. used for infusions.

<span style="color:red">NOTE:</span>    
**CHMED**: The extension [CHMED Dose Quantity To](StructureDefinition-chmed-dose-quantity-to.html) has been defined to change the quantity from the starting quantity continously to the final quantity.

**Example:** Start with a dosage of 5, end with a dosage of 10 during a time interval of 45 minutes.

ChMed23A format:
```
{ 
	"t": 2, // From/to dosage
	"aFrom": 5, // Start amount is 5 
	"aTo": 10, // End amount is 10 
	"duU": 2, // Duration unit is minutes 
	"du": 45 // Duration is 45 (minutes) 
}
```

CHMED format:
```json
  "dosage" : [
    {
      "timing" : {
        "repeat" : {
          "duration" : 45,
          "durationUnit" : "min"
        }
      },
      "doseAndRate" : [
        {
          "doseQuantity" : {
            "extension" : [
              {
                "url" : "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-dose-quantity-to",
                "valueQuantity" : {
                  "value" : 10,
                  "unit" : "milliliter",
                  "system" : "http://unitsofmeasure.org",
                  "code" : "mL"
                }
              }
            ],
            "value" : 5,
            "unit" : "milliliter",
            "system" : "http://unitsofmeasure.org",
            "code" : "mL"
          }
        }
      ]
    }
  ]
```

#### DosageRange
With a dosage range a minimum and a maximum amount must be specified.

**Example:** Take min 1 and max 3.

ChMed23A format:
```
{ 
	"t": 3, // Dosage range
	"aMin": 1.0, // Minimum amount of 1 
	"aMax": 3.0 // Maximum amount of 3
}
```

CHMED format:
```json
  "dosage" : [
    {
      "doseAndRate" : [
        {
          "doseRange" : {
            "low" : {
              "value" : 1.0,
              "unit" : "Piece",
              "system" : "http://unitsofmeasure.org",
              "code" : "{Piece}"
            },
            "high" : {
              "value" : 3.0,
              "unit" : "Piece",
              "system" : "http://unitsofmeasure.org",
              "code" : "{Piece}"
            }
          }
        }
      ]
    }
  ]
```

### Sequence Objects
Sequence objects can be used to specify a sequence of posologies that have to be respected in the correct
order and can possibly be repeated.   
Every sequence specifies its duration (including the unit).

Details and examples for the 2 types ([PosologySequence](#posologysequence), [Pause](#pause)) are shown in the following sections.

#### PosologySequence
Wraps any type of PosologyDetail object in order to create a sequence.

**Example:** Take 1 daily for 21 days.

ChMed23A format:
```
{ 
  "t": 1, // Sequence
  "po": { 
    "t": 4, // Cyclic
    "cyDuU": 4, // Unit is day
    "cyDu": 1, // Cycle lasts 1 (day) 
    "tdo": { 
      "t": 1, // Dosage only
      "do": { 
        "t": 1, // Simple dosage 
        "a": 1 // Amount of 1 
      } 
    },
    "tdpc": 1 
  }, 
  "duU": 4, // Unit is day
  "du": 21 // Sequence lasts 21 (days) 
}
```

CHMED format: see example in section [Sequence](#sequence)

#### Pause
Specifies a duration of a break where the medication doesn’t have to be applied.

**Example:** Break of 7 days.

ChMed23A format:
```
{ 
  "t": 2, // Pause
  "duU": 4, // Unit is day
  "du": 7 // Pause lasts 7 (days) 
}
```

CHMED format: see example in section [Sequence](#sequence)

### Application Objects
Application objects specify a dosage that must be applied at certain times; either at a precise time or in a day’s
segment (morning, noon, evening or night).

Details and examples for the 2 possibilities ([ApplicationAtTime](#applicationattime), [ApplicationInSegment](#applicationinsegment)) are shown in the following sections.

#### ApplicationAtTime
Specifies a precise moment in time when a medicament must be applied.

**Example:** Take 1 at 08:00.

ChMed23A format:
```
{ 
  "dt": "08:00:00", // Take at 8 in the morning
  "do": { 
    "t": 1, // Simple dosage
    "a": 1 // Amount of 1 
  } 
}
```

CHMED format: see example in section [Times](#times)

#### ApplicationInSegment
Specifies a day segment (morning, noon, evening or night) when a medicament must be applied.

**Example:** Take 1 in the evening.

ChMed23A format:
```
{ 
  "s": 3, // evening
  "do": { 
    "t": 1, // Simple dosage
    "a": 1 // Amount of 1 
  } 
}
```

CHMED format: see example in section [DaySegments](#daysegments)


---

// File: input/pagecontent/extensions.md

### Extensions for Medication documents
* [CHMED Extension](StructureDefinition-chmed-extension.html)     
CHMED extension can be used to include additional information. NOTE: The extension can include itself as a nested extension (see example).
* [CHMED Recipient](StructureDefinition-chmed-recipient.html)     
CHMED extension for the recipient (GLN) of the electronic prescription. To be used if the electronic prescription is to be transmitted electronically to a healthcare professional.
* [CHMED sic](StructureDefinition-chmed-sic.html)     
CHMED extension sic erat scriptum (latin) is intended to avoid misunderstandings between the physician and pharmacist and indicates to the pharmacist that the physician has deliberately chosen the prescription and wishes to prescribe the drug in exactly this way and not otherwise.

### Extensions for Dosage
* [CHMED Dose Quantity To](StructureDefinition-chmed-dose-quantity-to.html)     
CHMED extension for representing the change of a dose quantity (from a starting quantity continously) to this final quantity
* [CHMED Posology Detail Object Type](StructureDefinition-chmed-posology-detail-object-type.html)     
CHMED extension for the type of the posology detail objects defined in 'eMedication Plan ChMed Posology'
* [CHMED Timed Dosage Object Type](StructureDefinition-chmed-timed-dosage-object-type.html)     
CHMED extension for the type of the timed dosage object defined in 'eMedication Plan ChMed Posology'


---

// File: input/pagecontent/index.md

### Background

Medication plans are a central pillar of any eHealth solution. To enable interoperability between eHealth systems in Switzerland, the organisation [IG eMediplan](https://emediplan.ch/) was founded in 2016. Its aim is to support and provide public, open-source, medication plan formats used by a broad group of stakeholders from the public and private sectors.

{% include img.html img="mediplan_example.jpg" caption="Fig. 1: eMediplan example (see also Use Case 1)" %}

### eMedication Plan ChMed23A
The [eMedication Plan ChMed23A](https://emediplan.ch/wp-content/uploads/2023/09/20230815_eMediplan_ChMed23A_1.0-AND-eMediplan_ChMed23A_Posology_1.0.pdf) describes the specification and reference implementation of the object model for a medication plan, the so-called ChMed23A.

The reference consists of the content and layout specification for the electronic document, a JSON file containing a medication.

The content and layout specification for a paper-based layout used in Print/PDF scenarios is described in the document 'eMediplan_Paper-based_Layout'.

A ChMed23A can be transmitted using the so called ChTransmissionFormat, which specifies the type of the content and includes the compressed and Base64 encoded content.

ChFormat: <span style="color:blue;">{inputType}</span>.<span style="color:lightgreen;">{compressed-base64-payload}</span>     
Example: <span style="color:blue;">ChMed23A</span>.    
<span style="color:lightgreen;">H4sIAAAAAAAACq2OOw4CMQxE7zIt2ZUTAmzcLZsGiU+KUCEKYKlokIACRbk7jkLBAWisZz/NyAmb6/gAHxJ</span>      
<span style="color:lightgreen;">WI7hsGgqhnsIOnBDBRmF4+9cebCuBtUL0Xy38g73MnIu+DxX/1nRUkCRiv1zLl9tzOF1uIloqxj9FGTKmId1oHcn</span>      
<span style="color:lightgreen;">xtGM7a+28c9YtJqSZCPkD+iD8fPQAAAA=</span>      

This allows IT systems to store and transmit electronic medication plans in the form of a JSON file in UTF-8. It also enables the medication plan to be transmitted in a print-based form by using QR barcodes. Therefore, the medication plan is readable by users and systems alike. This is necessary to guarantee simple handling.

The possibility to transmit and store the compressed and Base64 encoded chunked payload (mainly to not exceed the maximum character size supported by a QR code), will be considered in the future.   
Here is an example which describes how to create chunks that fit on one line in this document:   
Chunk 1: ChMed23A.1/4.H4sIAAAAAAAACq2OOw4CMQxE7zIt2ZUTAmzcLZsGiU+KUCEKYKlokIACRbk7jk   
Chunk 2: ChMed23A.2/4.LBAWisZz/NyAmb6/gAHxJWI7hsGgqhnsIOnBDBRmF4+9cebCuBtUL0Xy38g73MnI   
Chunk 3: ChMed23A.3/4.u+DxX/1nRUkCRiv1zLl9tzOF1uIloqxj9FGTKmId1oHcnxtGM7a+28c9YtJqSZCPkD+   
Chunk 4: ChMed23A.4/4.iD8fPQAAAA=   

### CHMED Implementation Guide

#### eMediplan on FHIR
The purpose of this implementation guide (IG) is to specify the medication exchange formats given by eMediplan based on the [FHIR® (R4)](http://hl7.org/fhir/R4/index.html) standard from [HL7®](https://www.hl7.org/).

Extending the eMediplan format to a FHIR-based definition (CHMED) has the following advantages:
* CHMED formats can be [validated](https://www.hl7.org/fhir/validation.html) for correctness and data types are well defined. 
* It provides the foundation for base interoperability for other medication projects. For example CHMED depends on [CH EMED](http://fhir.ch/ig/ch-emed/index.html), the medication exchange format in the context of the EPR in Switzerland.

The CHMED format can be either in JSON or XML format. However, both formats are too large in size to be exchanged in a QR code as defined by eMediplan.   

HCI Solutions AG has built a **converter** for all software houses that have integrated the eMediplan format. It transforms the eMediplan format to the CHMED format and back. If you have any questions or require further information, please contact <hotline@hcisolutions.ch>.

{% include img.html img="formats.png" caption="Fig. 2: Format overview" width="100%" %}

#### MustSupport
The meaning of the flag [mustSupport](https://www.hl7.org/fhir/profiling.html#mustsupport) for this implementation guide follows the [definition of CH EMED](https://fhir.ch/ig/ch-emed/index.html#mustsupport), the Swiss eMedication IG from which CHMED is derived.

#### Download
You can download this implementation guide in [npm format](https://confluence.hl7.org/display/FHIR/NPM+Package+Specification) from [here](package.tgz).

#### Changelog
[Significant changes](changelog.html) to this specification since its initial version.

#### IP Statements

{% include ip-statements.xhtml %}

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

---

// File: input/pagecontent/profiles.md

### General Profiles for Medication documents
* [CHMED PractitionerRole](StructureDefinition-chmed-practitionerrole.html)   
Profile for the PractitionerRole resource
* [CHMED Practitioner](StructureDefinition-chmed-practitioner.html)   
Profile for the Practitioner resource
* [CHMED Organization](StructureDefinition-chmed-organization.html)   
Profile for the Organization resource

* [CHMED Medication](StructureDefinition-chmed-medication.html)   
Profile for the Medication resource

### Specific Profiles for Medication Card document
* [CHMED Medication Card document](StructureDefinition-chmed-card-bundle.html)   
Profile for the Bundle resource to represent the entire, current medication of a patient
* [CHMED Medication Card Composition](StructureDefinition-chmed-card-composition.html)   
Profile for the Composition resource of the Medication Card document
* [CHMED MedicationStatement](StructureDefinition-chmed-card-medicationstatement.html)   
Profile for the MedicationStatement resource of the Medication Card document

* [CHMED First Day of Last Menstruation](StructureDefinition-chmed-obs-dateoflastmenstruation.html)   
Profile for the Observation resource to represent the first day of the last menstruation
* [CHMED Premature Baby](StructureDefinition-chmed-obs-prematurebaby.html)   
Profile for the Observation resource to represent a premature baby
* [CHMED Time of Gestation](StructureDefinition-chmed-obs-timeofgestation.html)   
Profile for the Observation resource to represent the time of gestation
* [CHMED Risks](StructureDefinition-chmed-condition-risks.html)   
Profile for the Condition resource to represent the risks
* [CHMED Body Weight](StructureDefinition-chmed-obs-bodyweight.html)   
Profile for the Observation resource to represent the body weight
* [CHMED Body Height](StructureDefinition-chmed-obs-bodyheight.html)   
Profile for the Observation resource to represent the body height

* [CHMED Patient (CARD)](StructureDefinition-chmed-card-patient.html)   
Profile for the Patient resource, referenced in the CHMED Medication Card Composition

### Specific Profiles for Medication Prescription document
* [CHMED Medication Prescription document](StructureDefinition-chmed-pre-bundle.html)   
Profile for the Bundle resource to represent the prescribed medication of a patient
* [CHMED Medication Prescription Composition](StructureDefinition-chmed-pre-composition.html)   
Profile for the Composition resource of the Medication Prescription document
* [CHMED MedicationRequest](StructureDefinition-chmed-pre-medicationrequest.html)   
Profile for the MedicationRequest resource of the Medication Prescription document

* [CHMED Patient (PRE)](StructureDefinition-chmed-pre-patient.html)   
Profile for the Patient resource, referenced in the CHMED Medication Prescription Composition



---

// File: input/pagecontent/terminology.md

*The code systems and value sets are provided for free by HCI Solutions AG.*

### Terminology for Risks
* ValueSet [CHMED Risk Categories](ValueSet-chmed-valueset-risks-category.html)
   * includes all codes defined in CodeSystem [CHMED Risk Categories](CodeSystem-chmed-codesystem-risks-category.html) 
   * binded to element [Condition.category](StructureDefinition-chmed-condition-risks.html)
   * source: eMedication Plan ChMed23A
* ValueSet [CHMED Risks](ValueSet-chmed-valueset-risks-cdscode.html)
   * includes all codes defined in CodeSystem [CHMED Risks](CodeSystem-chmed-codesystem-risks-cdscode.html)
   * binded to element [Condition.code](StructureDefinition-chmed-condition-risks.html)
   * source: [CDSCODE](https://index.hcisolutions.ch/DataDoc/element/cdscode) in INDEX database by HCI Solutions AG
* ConceptMap [Risk Categories to Risks](ConceptMap-RiskCategories-to-Risks.html) to describe the relationship between them


### Terminology for Medicament
* CH EMED ValueSet [UnitCode](http://fhir.ch/ig/ch-emed/ValueSet/UnitCode)
   * includes codes from CodeSystem [`http://snomed.info/sct`](http://www.snomed.org/) and [`http://unitsofmeasure.org`](http://unitsofmeasure.org/)
   * binded to data type [CH EMED Quantity with units](http://fhir.ch/ig/ch-emed/StructureDefinition/ch-emed-quantity)
   * ConceptMap [CH EMED UnitCode to CDTYP9](ConceptMap-CHEMEDUnitCode-to-CDTYP9.html) to describe the relationship between CH EMED UnitCode and [CHMED Unit](CodeSystem-chmed-codesystem-cdtyp9.html)
   * source: [CDTYP9](https://index.hcisolutions.ch/index/current/get.aspx?schema=CODE&keytype=CDTYP&key=9) in INDEX database by HCI Solutions AG
* CH EMED ValueSet [EDQM - RouteOfAdministration](http://fhir.ch/ig/ch-emed/ValueSet/edqm-routeofadministration)
   * includes codes from CH EMED CodeSystem [EDQM - Standard Terms](http://fhir.ch/ig/ch-emed/CodeSystem/edqm-standardterms)
   * binded to element Dosage.route
   * ConceptMap [CH EMED EDQM RouteOfAdministration to CDTYP61](ConceptMap-CHEMEDEDQMROA-to-CDTYP61.html) to describe the relationship between EDQM - RouteOfAdminstration and [CHMED Route of Administration](CodeSystem-chmed-codesystem-cdtyp61.html)
   * source: [CDTYP61](https://index.hcisolutions.ch/index/current/get.aspx?schema=CODE&keytype=CDTYP&key=61&xsl=table.xslt) in INDEX database by HCI Solutions AG
* ValueSet [CHMED Method of Administration](ValueSet-chmed-valueset-cdtyp62.html)
   * includes codes from CodeSystem [CHMED Method of Administration](CodeSystem-chmed-codesystem-cdtyp62.html)
   * binded to element Dosage.method
   * source: [CDTYP62](https://index.hcisolutions.ch/index/current/get.aspx?schema=CODE&keytype=CDTYP&key=62&xsl=table.xslt) in INDEX database by HCI Solutions AG

### Terminology for Posology
* ValueSet [CHMED Posology Detail Object Type](ValueSet-chmed-valueset-posology-detail-object-type.html)
   * includes all codes defined in CodeSystem [CHMED Posology Detail Object Type](CodeSystem-chmed-codesystem-posology-detail-object-type.html)
   * binded to element [Dosage.extension:posologyDetailObjectType](StructureDefinition-chmed-dosage.html)
* ValueSet [CHMED Timed Dosage Object Type](ValueSet-chmed-valueset-timed-dosage-object-type.html)
   * includes all codes from in CodeSystem [CHMED Timed Dosage Object Type](CodeSystem-chmed-codesystem-timed-dosage-object-type.html)
   * binded to element [Dosage.extension:timedDosageObjectType](StructureDefinition-chmed-dosage.html)
* ValueSet [CHMED Relative to Meal](ValueSet-chmed-valueset-relative-to-meal.html)
   * includes codes defined in CodeSystem [`http://snomed.info/sct`](http://www.snomed.org/)
   * binded to element [Dosage.additionalInstructions](StructureDefinition-chmed-dosage.html)


---

// File: input/pagecontent/usecases-french.md

Les cas d'application suivants servent à illustrer les scénarios de la médication électronique tels qu'ils se présentent lors de l'utilisation de Medication Card document et de Medication Prescription document. Les cas sont censés représenter de manière exemplaire les documents FHIR. Ils n'ont pas encore été validés sur le plan du contenu et de la clinique.

### Cas pratique 1
Monsieur Peter Muster, né le 1er novembre 1943, se voit prescrire un antibiotique le 9 février 2023 en raison d'une infection ([Medication Prescription document](Bundle-pre1-bundle.html)). Le Dr Not Franz prescrit le traitement médicamenteux du 9 au 19 février 2023. M. Muster doit prendre 1 comprimé le matin et 1 comprimé le soir après le repas.

Le 9 février 2023, le Dr F. Weise, médecin de famille de Peter Muster, établit un eMediplan ([Medication Card document](Bundle-card1-bundle.html)) pour son patient. Celui-ci lui permet d'avoir un aperçu complet de tous ses médicaments actuels. Monsieur Muster est ravi du plan de médication! (Voir l'exemple d'eMediplan sur [Home](index.html).)


---

// File: input/pagecontent/usecases-german.md

Die nachfolgenden Anwendungsfälle dienen der Illustration der Szenarien der eMedikation, wie sie bei der Verwendung von Medication Card document und Medication Prescription document auftreten. Die Fälle sollen exemplarisch die Repräsentation der FHIR Dokumente darstellen. Sie wurden inhaltlich und klinisch noch nicht validiert.

### Fallbeispiel 1
Herr Peter Muster, geboren am 1. November 1943, bekommt am 9. Februar 2023 aufgrund einer Infektion ein Antibiotikum verschrieben ([Medication Prescription document](Bundle-pre1-bundle.html)). Dr. Not Franz verordnet die medikamentöse Behandlung vom 9. bis 19. Februar 2023. Herr Muster soll jeweils 1 Tablette am Morgen und am Abend nach dem Essen einnehmen.

Dr. med. F. Weise, die Hausärztin von Peter Muster, stellt am 9. Februar 2023 für ihren Patienten einen eMediplan ([Medication Card document](Bundle-card1-bundle.html)) zusammen. Mit diesem hat er einen vollständigen Überblick über all seine aktuellen Medikamente. Herr Muster ist vom Medikationsplan begeistert! (Siehe eMediplan Beispiel auf [Home](index.html).)


---

// File: input/fsh/aliases.fsh

Alias: $sct =                                   http://snomed.info/sct
Alias: $loinc =                                 http://loinc.org
Alias: $atc =                                   http://www.whocc.no/atc
Alias: $ucum =                                  http://unitsofmeasure.org

Alias: $v2-0203 =                               http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $condition-clinical =                    http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $observation-category =                  http://terminology.hl7.org/CodeSystem/observation-category
Alias: $v3-substanceAdminSubstitution =         http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution

Alias: $bodyheight =                            http://hl7.org/fhir/StructureDefinition/bodyheight
Alias: $bodyweight =                            http://hl7.org/fhir/StructureDefinition/bodyweight

Alias: $chmed-codesystem-risks-category =       http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-risks-category
Alias: $chmed-codesystem-risks-cdscode =        http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-risks-cdscode
Alias: $chmed-cs-posology-detail-object-type =  http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-posology-detail-object-type
Alias: $chmed-cs-timed-dosage-object-type =     http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-timed-dosage-object-type
Alias: $chmed-cs-cdtyp62 =                      http://chmed.emediplan.ch/fhir/CodeSystem/chmed-codesystem-cdtyp62

// CH EMED & CH EPR Term & CH Core
Alias: $ch-emed-practitioner =                  http://fhir.ch/ig/ch-emed/StructureDefinition/ch-emed-practitioner
Alias: $ch-emed-practitionerrole =              http://fhir.ch/ig/ch-emed/StructureDefinition/ch-emed-practitionerrole
Alias: $ch-emed-organization =                  http://fhir.ch/ig/ch-emed/StructureDefinition/ch-emed-organization
Alias: $ch-emed-ext-substitution =              http://fhir.ch/ig/ch-emed/StructureDefinition/ch-emed-ext-substitution
Alias: $edqm-routeofadministration =            http://fhir.ch/ig/ch-emed/ValueSet/edqm-routeofadministration
Alias: $ch-core-gln-identifier =                http://fhir.ch/ig/ch-core/StructureDefinition/ch-core-gln-identifier


// Others

Alias: $ext-dayOfMonth =                        http://hl7.org/fhir/StructureDefinition/timing-dayOfMonth

---

// File: input/fsh/dosage/datatypes/Dosage.fsh

Profile: CHMEDDosage
Parent: Dosage
Id: chmed-dosage
Title: "CHMED Dosage"
Description: "Dosage according to the 'eMedication Plan ChMed Posology'"
* . ^short = "CHMED Dosage"
* extension contains CHMEDPosologyDetailObjectType named posologyDetailObjectType 0..*
* extension contains CHMEDTimedDosageObjectType named timedDosageObjectType 0..1
* additionalInstruction from RelativeToMeal (required)
* timing.repeat.extension contains $ext-dayOfMonth named dayOfMonth 0..*
* route from $edqm-routeofadministration (required)
* method from CDTYP62 (required)
* doseAndRate.doseRange only CHEMEDRangeWithEmedUnits
* doseAndRate.doseQuantity only CHEMEDQuantityWithEmedUnits
* doseAndRate.doseQuantity.extension contains CHMEDDoseQuantityTo named doseQuantityTo 0..1
* maxDosePerPeriod only CHEMEDRatioWithEmedUnits

---

// File: input/fsh/dosage/instances/dosage-example.fsh

Instance: dosage-example
InstanceOf: CHMEDMedicationStatementCard
Title: "Posology"
Description: "Example of a Dosage - eMedication Plan ChMed Posology Example"
Usage: #example
* contained = medication
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:ed4f417e-2488-4588-b172-c394bde1d60e"
* status = #active
* medicationReference.reference = "#medication"
* subject = Reference(card1-patient-petermuster)

/* example 5.2 */
* dosage[baseEntry][+].additionalInstruction = $sct#307165006 "Before meal (qualifier value)"
* dosage[baseEntry][=].timing.repeat.boundsPeriod.start = "2023-07-13"
* dosage[baseEntry][=].timing.repeat.boundsPeriod.end = "2023-08-13"
* dosage[baseEntry][=].asNeededBoolean = false


/* example 6.1 daily -> normal dosage
* dosage[baseEntry][+].extension[+].url = "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-posology-detail-object-type"
* dosage[baseEntry][=].extension[=].valueCoding = $chmed-cs-posology-detail-object-type#1 "Daily"
* dosage[baseEntry][=].timing.repeat.when[+] = #MORN
* dosage[baseEntry][=].timing.repeat.when[+] = #EVE
* dosage[baseEntry][=].doseAndRate.doseQuantity = 1 '{Piece}' "Piece"
*/

/* example 6.1 daily -> split dosage
* dosage[baseEntry][+].sequence = 0
* dosage[baseEntry][=].extension[+].url = "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-posology-detail-object-type"
* dosage[baseEntry][=].extension[=].valueCoding = $chmed-cs-posology-detail-object-type#1 "Daily"
* dosage[baseEntry][=].timing.repeat.when = #MORN
* dosage[baseEntry][=].doseAndRate.doseQuantity = 1.5 '{Piece}' "Piece"
* dosage[additionalEntry][+].sequence = 0
* dosage[additionalEntry][=].timing.repeat.when = #EVE
* dosage[additionalEntry][=].doseAndRate.doseQuantity = 2 '{Piece}' "Piece"
*/

/* example 6.2. free text
* dosage[baseEntry][+].extension[+].url = "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-posology-detail-object-type"
* dosage[baseEntry][=].extension[=].valueCoding = $chmed-cs-posology-detail-object-type#2 "FreeText"
* dosage[baseEntry][=].patientInstruction = "Take one pill. Wait one hour. If symptoms persist, take a second pill and wait 30 minutes. If symptoms persist, contact doctor."
*/

/* example 6.3 single
* dosage[baseEntry][+].extension[+].url = "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-posology-detail-object-type"
* dosage[baseEntry][=].extension[=].valueCoding = $chmed-cs-posology-detail-object-type#3 "Single"
* dosage[baseEntry][=].extension[+].url = "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-timed-dosage-object-type"
* dosage[baseEntry][=].extension[=].valueCoding = $chmed-cs-timed-dosage-object-type#1 "DosageOnly"
* dosage[baseEntry][=].doseAndRate.doseQuantity = 1 '{Piece}' "Piece"
*/

/* example 6.4 cyclic 
* dosage[baseEntry][+].extension[+].url = "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-posology-detail-object-type"
* dosage[baseEntry][=].extension[=].valueCoding = $chmed-cs-posology-detail-object-type#4 "Cyclic"
* dosage[baseEntry][=].extension[+].url = "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-timed-dosage-object-type"
* dosage[baseEntry][=].extension[=].valueCoding = $chmed-cs-timed-dosage-object-type#1 "DosageOnly"
* dosage[baseEntry][=].timing.repeat.frequency = 2
* dosage[baseEntry][=].timing.repeat.period = 5
* dosage[baseEntry][=].timing.repeat.periodUnit = #wk
* dosage[baseEntry][=].doseAndRate.doseQuantity = 1 '{Piece}' "Piece"
*/

/* example 6.5 sequence 
* dosage[baseEntry][+].sequence = 1
* dosage[baseEntry][=].extension[+].url = "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-posology-detail-object-type"
* dosage[baseEntry][=].extension[=].valueCoding = $chmed-cs-posology-detail-object-type#5 "Sequence"
* dosage[baseEntry][=].extension[+].url = "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-posology-detail-object-type"
* dosage[baseEntry][=].extension[=].valueCoding = $chmed-cs-posology-detail-object-type#4 "Cyclic"
* dosage[baseEntry][=].extension[+].url = "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-timed-dosage-object-type"
* dosage[baseEntry][=].extension[=].valueCoding = $chmed-cs-timed-dosage-object-type#1 "DosageOnly"
* dosage[baseEntry][=].timing.repeat.count = 21
* dosage[baseEntry][=].timing.repeat.frequency = 1
* dosage[baseEntry][=].timing.repeat.period = 1
* dosage[baseEntry][=].timing.repeat.periodUnit = #d
* dosage[baseEntry][=].doseAndRate.doseQuantity[+].value = 1
* dosage[baseEntry][=].doseAndRate.doseQuantity[=].unit = "Tablet (unit of presentation)"
* dosage[baseEntry][=].doseAndRate.doseQuantity[=].system = "http://snomed.info/sct"
* dosage[baseEntry][=].doseAndRate.doseQuantity[=].code = #732936001
* dosage[additionalEntry][+].sequence = 2
* dosage[additionalEntry][=].timing.repeat.count = 7
* dosage[additionalEntry][=].timing.repeat.frequency = 1
* dosage[additionalEntry][=].timing.repeat.period = 1
* dosage[additionalEntry][=].timing.repeat.periodUnit = #d
* dosage[additionalEntry][=].doseAndRate.doseQuantity[+].value = 0
* dosage[additionalEntry][=].doseAndRate.doseQuantity[=].unit = "Tablet (unit of presentation)"
* dosage[additionalEntry][=].doseAndRate.doseQuantity[=].system = "http://snomed.info/sct"
* dosage[additionalEntry][=].doseAndRate.doseQuantity[=].code = #732936001
*/

/* example 7.1 dosage only 
* dosage[baseEntry][+].extension[+].url = "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-timed-dosage-object-type"
* dosage[baseEntry][=].extension[=].valueCoding = $chmed-cs-timed-dosage-object-type#1 "DosageOnly"
* dosage[baseEntry][=].doseAndRate.doseQuantity = 1 '{Piece}' "Piece"
*/

/* example 7.2 times 
* dosage[baseEntry][+].extension[+].url = "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-timed-dosage-object-type"
* dosage[baseEntry][=].extension[=].valueCoding = $chmed-cs-timed-dosage-object-type#2 "Times"
* dosage[baseEntry][=].timing.repeat.timeOfDay = "08:00:00"
* dosage[baseEntry][=].doseAndRate.doseQuantity = 1 '{Piece}' "Piece"
*/

/* example 7.3 day segments
* dosage[baseEntry][+].extension[+].url = "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-timed-dosage-object-type"
* dosage[baseEntry][=].extension[=].valueCoding = $chmed-cs-timed-dosage-object-type#3 "DaySegments"
* dosage[baseEntry][=].timing.repeat.when = #EVE
* dosage[baseEntry][=].doseAndRate.doseQuantity = 1 '{Piece}' "Piece"
*/

/* example 7.4 week days
* dosage[baseEntry][+].extension[+].url = "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-timed-dosage-object-type"
* dosage[baseEntry][=].extension[=].valueCoding = $chmed-cs-timed-dosage-object-type#4 "WeekDays"
* dosage[baseEntry][=].timing.repeat.dayOfWeek[+] = #mon
* dosage[baseEntry][=].timing.repeat.dayOfWeek[+] = #wed
* dosage[baseEntry][=].timing.repeat.dayOfWeek[+] = #fri
* dosage[baseEntry][=].doseAndRate.doseQuantity = 1 '{Piece}' "Piece"
*/

/* example 7.5 days of month
* dosage[baseEntry][+].extension[+].url = "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-timed-dosage-object-type"
* dosage[baseEntry][=].extension[=].valueCoding = $chmed-cs-timed-dosage-object-type#5 "DaysOfMonth"
* dosage[baseEntry][=].timing.repeat.extension[+].url = "http://hl7.org/fhir/StructureDefinition/timing-dayOfMonth"
* dosage[baseEntry][=].timing.repeat.extension[=].valuePositiveInt = 1
* dosage[baseEntry][=].timing.repeat.extension[+].url = "http://hl7.org/fhir/StructureDefinition/timing-dayOfMonth"
* dosage[baseEntry][=].timing.repeat.extension[=].valuePositiveInt = 15
* dosage[baseEntry][=].doseAndRate.doseQuantity = 1 '{Piece}' "Piece"
*/

/* example 7.6 interval
* dosage[baseEntry][+].extension[+].url = "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-timed-dosage-object-type"
* dosage[baseEntry][=].extension[=].valueCoding = $chmed-cs-timed-dosage-object-type#6 "Interval"
* dosage[baseEntry][=].maxDosePerPeriod.numerator = 1 '{Piece}' "Piece"
* dosage[baseEntry][=].maxDosePerPeriod.denominator = 6 'h' "Hour"
*/

/* example 8.1 dosage simple
* dosage[baseEntry][+].doseAndRate.doseQuantity = 1 '{Piece}' "Piece"
*/

/* example 8.2 dosage from to
* dosage[baseEntry][+].doseAndRate.doseQuantity[+] = 5 'mL' "milliliter"
* dosage[baseEntry][=].doseAndRate.doseQuantity[=].extension[+].url = "http://chmed.emediplan.ch/fhir/StructureDefinition/chmed-dose-quantity-to"
* dosage[baseEntry][=].doseAndRate.doseQuantity[=].extension[=].valueQuantity = 10 'mL' "milliliter"
* dosage[baseEntry][=].timing.repeat.duration = 45
* dosage[baseEntry][=].timing.repeat.durationUnit = #min
*/

/* example 8.3 range
* dosage[baseEntry][+].doseAndRate.doseRange.low = 1.0 '{Piece}' "Piece"
* dosage[baseEntry][=].doseAndRate.doseRange.high = 3.0 '{Piece}' "Piece"
*/


---

// File: input/fsh/dosage/instances/inline-medication.fsh

Instance: medication
InstanceOf: CHMEDMedication
Usage: #inline
* code.text = "Medication example used for dosage examples"


---

// File: input/fsh/extensions/DoseQuantityTo.fsh

Extension: CHMEDDoseQuantityTo
Id: chmed-dose-quantity-to
Title: "CHMED Dose Quantity To"
Description: "CHMED extension for representing the change of a dose quantity (from a starting quantity continously) to this final quantity"
* ^context[0].type = #extension
* ^context[=].expression = "Quantity"
* ^context[+].type = #element
* ^context[=].expression = "Dosage.doseAndRate.doseQuantity"
* . ^short = "CHMED Dose Quantity To"
* valueQuantity only CHEMEDQuantityWithEmedUnits
* valueQuantity 1..




---

// File: input/fsh/extensions/Extension.fsh

Extension: CHMEDExtension
Id: chmed-extension
Title: "CHMED Extension"
Description: "CHMED extension can be used to include additional information. NOTE: The extension can include itself as a nested extension (see example)."
* ^context[0].type = #element
* ^context[=].expression = "Composition"
* ^context[+].type = #element
* ^context[=].expression = "Composition.section"
* ^context[+].type = #element
* ^context[=].expression = "Patient"
* ^context[+].type = #element
* ^context[=].expression = "MedicationStatement"
* ^context[+].type = #element
* ^context[=].expression = "MedicationRequest"
* ^context[+].type = #extension
* ^context[=].expression = Canonical(CHMEDExtension)
* . ^short = "CHMED Extension"
* extension contains
    nm 1..1 and
    val 0..1 and
    schema 1..1
* extension[nm] ^short = "The name of the field"
* extension[nm].value[x] only string
* extension[nm].value[x] 1..
* extension[val] ^short = "The value of the field"
* extension[val].value[x] only string
* extension[val].value[x] 1..
* extension[schema] ^short = "The schema can be any string and can be used to determine how to interpret the extension"
* extension[schema].value[x] only string
* extension[schema].value[x] 1..



Mapping: eMediplan-for-CHMEDExtension
Id: eMediplan
Title: "eMediplan"
Source: CHMEDExtension
Target: "https://emediplan.ch/wp-content/uploads/2023/09/20230815_eMediplan_ChMed23A_1.0-AND-eMediplan_ChMed23A_Posology_1.0.pdf"
* -> "Extension" 
* extension[nm].valueString -> "nm"
* extension[val].valueString -> "val"
* extension[schema].valueString -> "schema"


---

// File: input/fsh/extensions/PosologyDetailObjectType.fsh

Extension: CHMEDPosologyDetailObjectType
Id: chmed-posology-detail-object-type
Title: "CHMED Posology Detail Object Type"
Description: "CHMED extension for the type of the posology detail objects defined in 'eMedication Plan ChMed Posology'"
* ^context[0].type = #element
* ^context[=].expression = "Dosage"
* . ^short = "CHMED Posology Detail Object Type"
* valueCoding from PosologyDetailObjectType (required)
* valueCoding 1..


---

// File: input/fsh/extensions/Receiver.fsh

Extension: CHMEDRecipient
Id: chmed-recipient
Title: "CHMED Recipient"
Description: "CHMED extension for the recipient (GLN) of the electronic prescription. To be used if the electronic prescription is to be transmitted electronically to a healthcare professional."
* ^context[0].type = #element
* ^context[=].expression = "Composition"
* . ^short = "CHMED Recipient"
* valueIdentifier 1..
* valueIdentifier only $ch-core-gln-identifier



Mapping: eMediplan-for-CHMEDRecipient
Id: eMediplan
Title: "eMediplan"
Source: CHMEDRecipient
Target: "https://emediplan.ch/wp-content/uploads/2023/09/20230815_eMediplan_ChMed23A_1.0-AND-eMediplan_ChMed23A_Posology_1.0.pdf"
* -> "Medication.rec" 
* valueIdentifier -> "rec"


---

// File: input/fsh/extensions/Sic.fsh

Extension: CHMEDSic
Id: chmed-sic
Title: "CHMED Sic"
Description: "CHMED extension sic erat scriptum (latin) is intended to avoid misunderstandings between the physician and pharmacist and indicates to the pharmacist that the physician has deliberately chosen the prescription and wishes to prescribe the drug in exactly this way and not otherwise."
* ^context[0].type = #element
* ^context[=].expression = "MedicationRequest"
* . ^short = "CHMED Sic"
* valueBoolean 1..



Mapping: eMediplan-for-CHMEDSic
Id: eMediplan
Title: "eMediplan"
Source: CHMEDSic
Target: "https://emediplan.ch/wp-content/uploads/2023/09/20230815_eMediplan_ChMed23A_1.0-AND-eMediplan_ChMed23A_Posology_1.0.pdf"
* -> "Medicament.sic" 
* valueBoolean -> "sic"


---

// File: input/fsh/extensions/TimedDosageObjectType.fsh

Extension: CHMEDTimedDosageObjectType
Id: chmed-timed-dosage-object-type
Title: "CHMED Timed Dosage Object Type"
Description: "CHMED extension for the type of the timed dosage object defined in 'eMedication Plan ChMed Posology'"
* ^context[0].type = #element
* ^context[=].expression = "Dosage"
* . ^short = "CHMED Timed Dosage Object Type"
* valueCoding from TimedDosageObjectType (required)
* valueCoding 1..


---

// File: input/fsh/instances/binary/binary-pdf-example.fsh

Instance: binary-pdf-example
InstanceOf: Binary
Title: "PDF Example"
Description: "Example of a Binary"
Usage: #example
* language = #de-CH
* contentType = #application/pdf
* data = "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TWFwVHlwZSAyIGRlZiAxIGJlZ2luY29kZXNwYWNlcmFuZ2UgPDAwMDA+IDxGRkZGPiBlbmRjb2Rlc3BhY2VyYW5nZSAxMSBiZWdpbmJmY2hhciA8MDAwMz4gPDAwMjA+IDwwMDE4PiA8MDA0ND4gPDAwMUM+IDwwMDQ1PiA8MDAyNj4gPDAwNDY+IDwwMDU3PiA8MDA1MD4gPDAxMDI+IDwwMDYxPiA8MDExRT4gPDAwNjU+IDwwMTZGPiA8MDA2Qz4gPDAxNzU+IDwwMDZEPiA8MDE4OT4gPDAwNzA+IDwwMUM2PiA8MDA3OD4gZW5kYmZjaGFyIGVuZGNtYXAgQ01hcE5hbWUgY3VycmVudGRpY3QgL0NNYXAgZGVmaW5lcmVzb3VyY2UgcG9wIGVuZCBlbmQgCmVuZHN0cmVhbQplbmRvYmoKOSAwIG9iagpbIDMgMyAyMjYgMjQgMjQgNjA2IDI4IDI4IDQ4OCAzOCAzOCA0NTkgODcgODcgNTA3IDI1OCAyNTggNDcwIDI4NiAyODYgNDk0IDM2NyAzNjcgMjIwIDM3MyAzNzMgNzkxIDM5MyAzOTMgNTE5IDQ1NCA0NTQgNDE4IF0KZW5kb2JqCjYgMCBvYmoKWyAtNzkxIC0yNjggNzkxIDk1MiBdCmVuZG9iago3IDAgb2JqCjc5MQplbmRvYmoKMiAwIG9iago8PAovQ291bnQgMQovS2lkcyBbIDMgMCBSIF0KL1R5cGUgL1BhZ2VzCj4+CmVuZG9iagoxIDAgb2JqCjw8Ci9QYWdlcyAyIDAgUgovVHlwZSAvQ2F0YWxvZwo+PgplbmRvYmoKMTQgMCBvYmoKPDwKL0F1dGhvciAobWljaGEpCi9DcmVhdGlvbkRhdGUgKEQ6MjAyMTA0MTYxNjMxNTArMDInMDAnKQovTW9kRGF0ZSAoRDoyMDIxMDQxNjE2MzE1MCswMicwMCcpCi9Qcm9kdWNlciAoTWljcm9zb2Z0OiBQcmludCBUbyBQREYpCi9UaXRsZSAoTWljcm9zb2Z0IFdvcmQgLSBEb2N1bWVudDEpCj4+CmVuZG9iagp4cmVmCjAgMTUNCjAwMDAwMDAwMDAgNjU1MzUgZg0KMDAwMDE5NDA4MCAwMDAwMCBuDQowMDAwMTk0MDIxIDAwMDAwIG4NCjAwMDAxOTMxMzIgMDAwMDAgbg0KMDAwMDAwMDAwOSAwMDAwMCBuDQowMDAwMDAwMDM1IDAwMDAwIG4NCjAwMDAxOTM5NjUgMDAwMDAgbg0KMDAwMDE5NDAwMiAwMDAwMCBuDQowMDAwMDAwMDU4IDAwMDAwIG4NCjAwMDAxOTM4MjYgMDAwMDAgbg0KMDAwMDE5MzI5NSAwMDAwMCBuDQowMDAwMTkyMzc5IDAwMDAwIG4NCjAwMDAxOTI4NTEgMDAwMDAgbg0KMDAwMDE5MzA4NyAwMDAwMCBuDQowMDAwMTk0MTI5IDAwMDAwIG4NCnRyYWlsZXIKPDwKL0luZm8gMTQgMCBSCi9Sb290IDEgMCBSCi9TaXplIDE1Cj4+CnN0YXJ0eHJlZgoxOTQzMTUKJSVFT0YK"

---

