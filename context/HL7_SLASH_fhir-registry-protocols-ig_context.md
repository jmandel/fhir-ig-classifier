File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/aliases.fsh

Alias: $loinc = http://loinc.org
Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $message-events = http://example.org/fhir/message-events
Alias: $message-reasons-encounter = http://terminology.hl7.org/CodeSystem/message-reasons-encounter
Alias: $sct = http://snomed.info/sct
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $ucum = http://unitsofmeasure.org
Alias: $rxnorm = http://www.nlm.nih.gov/research/umls/rxnorm
Alias: $part = http://terminology.hl7.org/CodeSystem/v3-ParticipationType
Alias: $dar = http://terminology.hl7.org/CodeSystem/data-absent-reason
Alias: $hl7-discharge = http://terminology.hl7.org/CodeSystem/discharge-disposition
Alias: $ncdrq = http://hl7.org/fhir/us/registry-protocols/ValueSet/ncdrq
Alias: $accerror = http://hl7.org/fhir/us/registry-protocols/CodeSystem/NCDRValidationErrors
Alias: $yn = http://terminology.hl7.org/CodeSystem/v2-0532
Alias: $cpt = http://www.ama-assn.org/go/cpt

---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/antiarrythmics.fsh

ValueSet: Antiarrhythmics
Title: "All Antiarrhythmics"
Description: "Listing of all antiarrythmics used in CathPCI procedures"
* ^experimental = true

//Injectable
* $rxnorm#1010846 "5 ML lidocaine hydrochloride 40 MG/ML Injection [Xylocaine]"
* $rxnorm#1046408 "100 ML amiodarone hydrochloride 1.5 MG/ML Injection [Nexterone]"
* $rxnorm#1654037 "20 ML adenosine 3 MG/ML Injection [Adenoscan]"
* $rxnorm#1654041 "30 ML adenosine 3 MG/ML Injection [Adenoscan]"
* $rxnorm#727357 "4 ML adenosine 3 MG/ML Prefilled Syringe [Adenocard]"
* $rxnorm#727361 "2 ML adenosine 3 MG/ML Prefilled Syringe [Adenocard]"
* $rxnorm#1046410 "200 ML amiodarone hydrochloride 1.8 MG/ML Injection [Nexterone]"
* $rxnorm#979122 "10 ML ibutilide fumarate 0.1 MG/ML Injection [Corvert]"
* $rxnorm#1010845 "lidocaine hydrochloride 40 MG/ML [Xylocaine]"
* $rxnorm#1046407 "amiodarone hydrochloride 1.5 MG/ML [Nexterone]"
* $rxnorm#564663 "adenosine 3 MG/ML [Adenoscan]"
* $rxnorm#573584 "adenosine 3 MG/ML [Adenocard]"
* $rxnorm#1046409 "amiodarone hydrochloride 1.8 MG/ML [Nexterone]"
* $rxnorm#979121 "ibutilide fumarate 0.1 MG/ML [Corvert]"
* $rxnorm#1737344 "lidocaine Injection [Xylocaine]"
* $rxnorm#1663270 "amiodarone Injection [Nexterone]"
* $rxnorm#1654036 "adenosine Injection [Adenoscan]"
* $rxnorm#727356 "adenosine Prefilled Syringe [Adenocard]"
* $rxnorm#1728045 "ibutilide Injection [Corvert]"
* $rxnorm#1186620 "Xylocaine Injectable Product"
* $rxnorm#1182874 "Nexterone Injectable Product"
* $rxnorm#1170625 "Adenoscan Injectable Product"
* $rxnorm#1170624 "Adenocard Injectable Product"
* $rxnorm#1170980 "Corvert Injectable Product"
* $rxnorm#1010844 "5 ML lidocaine hydrochloride 40 MG/ML Injection"
* $rxnorm#1012068 "5 ML lidocaine hydrochloride 20 MG/ML Prefilled Syringe"
* $rxnorm#1046406 "100 ML amiodarone hydrochloride 1.5 MG/ML Injection"
* $rxnorm#1654035 "20 ML adenosine 3 MG/ML Injection"
* $rxnorm#1654040 "30 ML adenosine 3 MG/ML Injection"
* $rxnorm#1654169 "2 ML adenosine 3 MG/ML Injection"
* $rxnorm#1654186 "4 ML adenosine 3 MG/ML Injection"
* $rxnorm#1663224 "3 ML amiodarone hydrochloride 50 MG/ML Injection"
* $rxnorm#1663244 "9 ML amiodarone hydrochloride 50 MG/ML Injection"
* $rxnorm#1663248 "18 ML amiodarone hydrochloride 50 MG/ML Injection"
* $rxnorm#1737723 "250 ML lidocaine hydrochloride 8 MG/ML Injection"
* $rxnorm#1737742 "250 ML lidocaine hydrochloride 4 MG/ML Injection"
* $rxnorm#1737744 "500 ML lidocaine hydrochloride 4 MG/ML Injection"
* $rxnorm#2176262 "10 ML bretylium tosylate 50 MG/ML Injection"
* $rxnorm#727355 "4 ML adenosine 3 MG/ML Prefilled Syringe"
* $rxnorm#727360 "2 ML adenosine 3 MG/ML Prefilled Syringe"
* $rxnorm#834357 "3 ML amiodarone hydrochloride 50 MG/ML Prefilled Syringe"
* $rxnorm#849876 "200 ML amiodarone hydrochloride 1.8 MG/ML Injection"
* $rxnorm#857886 "procainamide hydrochloride 100 MG/ML Injectable Solution"
* $rxnorm#857962 "procainamide hydrochloride 500 MG/ML Injectable Solution"
* $rxnorm#979120 "10 ML ibutilide fumarate 0.1 MG/ML Injection"
* $rxnorm#1010843 "lidocaine hydrochloride 40 MG/ML"
* $rxnorm#1010670 "lidocaine hydrochloride 20 MG/ML"
* $rxnorm#1046405 "amiodarone hydrochloride 1.5 MG/ML"
* $rxnorm#315283 "adenosine 3 MG/ML"
* $rxnorm#833531 "amiodarone hydrochloride 50 MG/ML"
* $rxnorm#1011251 "lidocaine hydrochloride 8 MG/ML"
* $rxnorm#1010859 "lidocaine hydrochloride 4 MG/ML"
* $rxnorm#2176260 "bretylium tosylate 50 MG/ML"
* $rxnorm#849875 "amiodarone hydrochloride 1.8 MG/ML"
* $rxnorm#857885 "procainamide hydrochloride 100 MG/ML"
* $rxnorm#857961 "procainamide hydrochloride 500 MG/ML"
* $rxnorm#979119 "ibutilide fumarate 0.1 MG/ML"
* $rxnorm#1737342 "lidocaine Injection"
* $rxnorm#727604 "lidocaine Prefilled Syringe"
* $rxnorm#1663223 "amiodarone Injection"
* $rxnorm#1654034 "adenosine Injection"
* $rxnorm#2176261 "bretylium Injection"
* $rxnorm#727353 "adenosine Prefilled Syringe"
* $rxnorm#727379 "amiodarone Prefilled Syringe"
* $rxnorm#373597 "procainamide Injectable Solution"
* $rxnorm#1728043 "ibutilide Injection"
* $rxnorm#1164658 "lidocaine Injectable Product"
* $rxnorm#1151981 "amiodarone Injectable Product"
* $rxnorm#1153467 "adenosine Injectable Product"
* $rxnorm#1163088 "bretylium Injectable Product"
* $rxnorm#1161726 "procainamide Injectable Product"
* $rxnorm#1160662 "ibutilide Injectable Product"
//Oral
* $rxnorm#1362706 "mexiletine hydrochloride 150 MG Oral Capsule"
* $rxnorm#1362712 "mexiletine hydrochloride 200 MG Oral Capsule"
* $rxnorm#1362720 "mexiletine hydrochloride 250 MG Oral Capsule"
* $rxnorm#309958 "disopyramide 100 MG Oral Capsule"
* $rxnorm#309960 "disopyramide 150 MG Oral Capsule"
* $rxnorm#310003 "dofetilide 0.125 MG Oral Capsule"
* $rxnorm#310004 "dofetilide 0.25 MG Oral Capsule"
* $rxnorm#310005 "dofetilide 0.5 MG Oral Capsule"
* $rxnorm#636793 "12 HR disopyramide 100 MG Extended Release Oral Capsule"
* $rxnorm#636794 "12 HR disopyramide 150 MG Extended Release Oral Capsule"
* $rxnorm#833528 "amiodarone hydrochloride 200 MG Oral Tablet"
* $rxnorm#834346 "amiodarone hydrochloride 200 MG Oral Tablet [Pacerone]"
* $rxnorm#834350 "amiodarone hydrochloride 400 MG Oral Tablet [Pacerone]"
* $rxnorm#835956 "amiodarone hydrochloride 100 MG Oral Tablet"
* $rxnorm#835958 "amiodarone hydrochloride 100 MG Oral Tablet [Pacerone]"
* $rxnorm#852877 "quinidine sulfate 200 MG Oral Tablet"
* $rxnorm#852913 "quinidine sulfate 300 MG Oral Tablet"
* $rxnorm#852920 "quinidine gluconate 324 MG Extended Release Oral Tablet"
* $rxnorm#854856 "dronedarone 400 MG Oral Tablet"
* $rxnorm#861156 "12 HR propafenone hydrochloride 225 MG Extended Release Oral Capsule"
* $rxnorm#861164 "12 HR propafenone hydrochloride 325 MG Extended Release Oral Capsule"
* $rxnorm#861171 "12 HR propafenone hydrochloride 425 MG Extended Release Oral Capsule"
* $rxnorm#861424 "propafenone hydrochloride 150 MG Oral Tablet"
* $rxnorm#861427 "propafenone hydrochloride 225 MG Oral Tablet"
* $rxnorm#861430 "propafenone hydrochloride 300 MG Oral Tablet"
* $rxnorm#886662 "flecainide acetate 50 MG Oral Tablet"
* $rxnorm#886666 "flecainide acetate 100 MG Oral Tablet"
* $rxnorm#886671 "flecainide acetate 150 MG Oral Tablet"


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/CapabilityStatement-RS-SRRD.fsh

/*
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
*/

Instance: RS-SRRD
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Registry Submitter implementing the Search / Retrieve Registry Definition transaction."""
* insert CREDSDefinitionContent
* name = "RS_SRRD"
* title = "Registry Submitter implementing the Search / Retrieve Registry Definition transaction."
* date = "2023-05-09"
* kind = #requirements
* description = "Defines the requirements for the Registry Submitter implementing the Search / Retrieve Registry Definition transaction."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[StructureDefinitionSlice].type = #StructureDefinition

* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].code = #read
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[0].type = #token
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[1].name = "url"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[1].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[1].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[2].name = "name"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[2].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[2].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[3].name = "identifier"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[3].type = #token
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[3].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[4].name = "publisher"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[4].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[4].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[5].name = "context"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[5].type = #token
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[5].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[6].name = "status"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[6].type = #token
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[6].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[7].name = "_lastUpdated"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[7].type = #date
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[7].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[8].name = "date"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[8].type = #date
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[8].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[8].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[9].name = "_text"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[9].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[9].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[9].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[10].name = "_content"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[10].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[10].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[10].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[StructureDefinitionSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchInclude[0].extension.valueCode = #MAY


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/CapabilityStatement-RS.fsh

/*
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
*/

Instance: RS
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Registry Submitter."""
* insert CREDSDefinitionContent
* name = "RS"
* title = "Registry Submitter."
* date = "2023-05-09"
* kind = #requirements
* description = "Defines the requirements for the Registry Submitter."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[StructureDefinitionSlice].type = #StructureDefinition

* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].code = #read
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[0].type = #token
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[1].name = "url"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[1].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[1].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[2].name = "name"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[2].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[2].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[3].name = "identifier"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[3].type = #token
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[3].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[4].name = "publisher"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[4].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[4].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[5].name = "context"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[5].type = #token
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[5].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[6].name = "status"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[6].type = #token
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[6].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[7].name = "_lastUpdated"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[7].type = #date
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[7].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[8].name = "date"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[8].type = #date
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[8].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[8].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[9].name = "_text"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[9].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[9].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[9].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[10].name = "_content"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[10].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[10].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[10].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[StructureDefinitionSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchInclude[0].extension.valueCode = #MAY


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/CapabilityStatement-RSDC-CURD.fsh

/*
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
*/

Instance: RSDC-CURD
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Registry Submission Definition Creator implementing the Create / Update Registry Definition transaction."""
* insert CREDSDefinitionContent
* name = "RSDC_CURD"
* title = "Registry Submission Definition Creator implementing the Create / Update Registry Definition transaction."
* date = "2023-05-09"
* kind = #requirements
* description = "Defines the requirements for the Registry Submission Definition Creator implementing the Create / Update Registry Definition transaction."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[StructureDefinitionSlice].type = #StructureDefinition

* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].code = #create
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].code = #update
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].extension.valueCode = #SHALL


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/CapabilityStatement-RSDC.fsh

/*
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
*/

Instance: RSDC
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Registry Submission Definition Creator."""
* insert CREDSDefinitionContent
* name = "RSDC"
* title = "Registry Submission Definition Creator."
* date = "2023-05-09"
* kind = #requirements
* description = "Defines the requirements for the Registry Submission Definition Creator."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[StructureDefinitionSlice].type = #StructureDefinition

* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].code = #create
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].code = #update
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].extension.valueCode = #SHALL


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/CapabilityStatement-RSDR-CURD.fsh

/*
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
*/

Instance: RSDR-CURD
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Registry Submission Definition Repository implementing the Create / Update Registry Definition transaction."""
* insert CREDSDefinitionContent
* name = "RSDR_CURD"
* title = "Registry Submission Definition Repository implementing the Create / Update Registry Definition transaction."
* date = "2023-05-09"
* kind = #requirements
* description = "Defines the requirements for the Registry Submission Definition Repository implementing the Create / Update Registry Definition transaction."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[StructureDefinitionSlice].type = #StructureDefinition

* rest[serverSlice].resource[StructureDefinitionSlice].interaction[0].code = #create
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].interaction[1].code = #update
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[1].extension.valueCode = #SHALL


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/CapabilityStatement-RSDR-SRRD.fsh

/*
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
*/

Instance: RSDR-SRRD
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Registry Submission Definition Repository implementing the Search / Retrieve Registry Definition transaction."""
* insert CREDSDefinitionContent
* name = "RSDR_SRRD"
* title = "Registry Submission Definition Repository implementing the Search / Retrieve Registry Definition transaction."
* date = "2023-05-09"
* kind = #requirements
* description = "Defines the requirements for the Registry Submission Definition Repository implementing the Search / Retrieve Registry Definition transaction."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[StructureDefinitionSlice].type = #StructureDefinition

* rest[serverSlice].resource[StructureDefinitionSlice].interaction[0].code = #read
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[0].type = #token
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[1].name = "url"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[1].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[2].name = "name"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[2].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[3].name = "identifier"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[3].type = #token
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[4].name = "publisher"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[4].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[4].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[5].name = "context"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[5].type = #token
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[5].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[6].name = "status"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[6].type = #token
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[6].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[7].name = "_lastUpdated"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[7].type = #date
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[7].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[8].name = "date"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[8].type = #date
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[8].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[8].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[9].name = "_text"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[9].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[9].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[9].extension.valueCode = #SHOULD

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[10].name = "_content"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[10].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[10].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[10].extension.valueCode = #SHOULD

* rest[serverSlice].resource[StructureDefinitionSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[StructureDefinitionSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchInclude[0].extension.valueCode = #SHALL


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/CapabilityStatement-RSDR.fsh

/*
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
*/

Instance: RSDR
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Registry Submission Definition Repository."""
* insert CREDSDefinitionContent
* name = "RSDR"
* title = "Registry Submission Definition Repository."
* date = "2023-05-09"
* kind = #requirements
* description = "Defines the requirements for the Registry Submission Definition Repository."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[StructureDefinitionSlice].type = #StructureDefinition

* rest[serverSlice].resource[StructureDefinitionSlice].interaction[0].code = #read
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].interaction[2].code = #create
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].interaction[3].code = #update
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[0].type = #token
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[1].name = "url"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[1].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[2].name = "name"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[2].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[3].name = "identifier"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[3].type = #token
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[4].name = "publisher"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[4].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[4].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[5].name = "context"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[5].type = #token
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[5].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[6].name = "status"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[6].type = #token
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[6].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[7].name = "_lastUpdated"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[7].type = #date
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[7].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[8].name = "date"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[8].type = #date
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[8].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[8].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[9].name = "_text"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[9].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[9].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[9].extension.valueCode = #SHOULD

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[10].name = "_content"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[10].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[10].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[10].extension.valueCode = #SHOULD

* rest[serverSlice].resource[StructureDefinitionSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[StructureDefinitionSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchInclude[0].extension.valueCode = #SHALL


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/CapabilityStatements.fsh

Profile:        CapabilityStatementWithSlices
Parent:         CapabilityStatement
Title:          "Capability Statements with Slices"
Description:    "A Capability Statement with slicing defined"
* ^abstract = true
* insert CREDSStructureDefinitionContent

* rest ^slicing.discriminator.type = #value
* rest ^slicing.discriminator.path = "mode"
* rest ^slicing.rules = #open
* rest ^slicing.description = "Slice based on the rest.mode pattern"
* rest contains clientSlice 0..1 and serverSlice 0..1
* rest[clientSlice].mode = #client (exactly)
* rest[serverSlice].mode = #server (exactly)


* rest.resource ^slicing.discriminator.type = #value
* rest.resource ^slicing.discriminator.path = "type"
* rest.resource ^slicing.rules = #open
* rest.resource ^slicing.description = "Slice based on the rest.resource.type pattern"
* rest.resource contains
    LocationSlice 0..1 and
    OrganizationSlice 0..1 and
    MeasureSlice 0..1 and
    MeasureReportSlice 0..1 and
    QuestionnaireSlice 0..1 and
    QuestionnaireResponseSlice 0..1 and
    LibrarySlice 0..* and
    ConceptMapSlice 0..* and
    ValueSetSlice 0..* and
    CodeSystemSlice 0..* and
    PatientSlice 0..* and
    AllergyIntoleranceSlice 0..* and
    ConditionSlice 0..* and
    DocumentReferenceSlice 0..* and
    DiagnosticReportSlice 0..* and
    EncounterSlice 0..* and
    FamilyMemberHistorySlice 0..* and
    MedicationAdministrationSlice 0..* and
    MedicationDispenseSlice 0..* and
    MedicationRequestSlice 0..* and
    MedicationStatementSlice 0..* and
    ObservationSlice 0..* and
    ProcedureSlice 0..* and
    ServiceRequestSlice 0..* and
    ParametersSlice 0..* and
    StructureDefinitionSlice 0..* and
    StructureMapSlice 0..*


* rest.resource[LocationSlice].type = #Location (exactly)
* rest.resource[OrganizationSlice].type = #Organization (exactly)
* rest.resource[MeasureSlice].type = #Measure (exactly)
* rest.resource[MeasureReportSlice].type = #MeasureReport (exactly)
* rest.resource[QuestionnaireSlice].type = #Questionnaire (exactly)
* rest.resource[QuestionnaireResponseSlice].type = #QuestionnaireResponse (exactly)
* rest.resource[LibrarySlice].type = #Library (exactly)
* rest.resource[ConceptMapSlice].type = #ConceptMap (exactly)
* rest.resource[ValueSetSlice].type = #ValueSet (exactly)
* rest.resource[CodeSystemSlice].type = #CodeSystem (exactly)
* rest.resource[PatientSlice].type = #Patient (exactly)
* rest.resource[AllergyIntoleranceSlice].type = #AllergyIntolerance (exactly)
* rest.resource[ConditionSlice].type = #Condition (exactly)
* rest.resource[DocumentReferenceSlice].type = #DocumentReference (exactly)
* rest.resource[DiagnosticReportSlice].type = #DiagnosticReport (exactly)
* rest.resource[EncounterSlice].type = #Encounter (exactly)
* rest.resource[FamilyMemberHistorySlice].type = #FamilyMemberHistory (exactly)
* rest.resource[MedicationAdministrationSlice].type = #MedicationAdministration (exactly)
* rest.resource[MedicationDispenseSlice].type = #MedicationDispense (exactly)
* rest.resource[MedicationRequestSlice].type = #MedicationRequest (exactly)
* rest.resource[MedicationStatementSlice].type = #MedicationStatement (exactly)
* rest.resource[ObservationSlice].type = #Observation (exactly)
* rest.resource[ProcedureSlice].type = #Procedure (exactly)
* rest.resource[ServiceRequestSlice].type = #ServiceRequest (exactly)
* rest.resource[ParametersSlice].type = #Parameters (exactly)
* rest.resource[StructureDefinitionSlice].type = #StructureDefinition (exactly)
* rest.resource[StructureMapSlice].type = #StructureMap (exactly)


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/Cath-PCI-SD-Example-detailed.fsh

Logical: CathPCI_Submission_Map_detailed
Id: ACCNCDRCathPCIDetailed
Title: "Cath-PCI Detailed Submission Map"
Description: """This is an example of the data that would be used for a Cath-PCI Submission.
The full map is a logical model as that allows conformance to the FHIR Standard the way a custom Resource would not.
Each element has the short name of the data, a full description and the paths to fetch and place the information, by data standard type, for each.
A section (such as Demographics) is a BackboneElement (holds no values).  All subordinate elements are strings.
Each mapping includes the following:
* identity = standard used for the mapping (e.g., FHIR)
* language = mime type that matches identity
* map = FHIRPath expression of the path to the data
* comment = *Output mapping only* Profile for inclusion in the Submission Bundle if not the Core resource

Environment Variables used:
%patient (Patient resource for the subject of the procedure)
%period (Encounter period i.e. Encounter.period)
%procedure (Cath PCI Procedure resource)
%procedure.period (CathPCI Procedure period i.e., Procedure.performedPeriod)
"""
// * ^baseDefinition = "http://hl7.org/fhir//StructureDefinition/base"
* ^version = "5.0"
* ^identifier.use = #official
* ^date = "2021-11-01"
* ^publisher = "American College of Cardiology"
* ^contact.name = "Jane Smith"
* ^contact.telecom.system = #email
* ^contact.telecom.value = "mailto:noreply@acc.org"
* ^kind = #logical
//Mappings so that things show up in the mappings page on the IG
* ^mapping[+].identity = "FHIR"
* ^mapping[=].uri = "http://fhir.hl7.org"
* ^mapping[=].name = "Fast Health Interoperability Resources"
* ^mapping[=].comment = "Path to where in a FHIR Resource the data element is found"
* ^mapping[+].identity = "CDA"
* ^mapping[=].uri = "http://build.fhir.org/ig/HL7/cda-core-2.0/"
* ^mapping[=].name = "Clinical Document Architecture"
* ^mapping[=].comment = "Path to where in a CDA 2.0/CCDA 2.1 Document the data element is found"
* ^mapping[+].identity = "HL7V2"
* ^mapping[=].uri = "http://www.hl7.eu/refactored/index.html"
* ^mapping[=].name = "HL7 V2 Messages"
* ^mapping[=].comment = "Path to where in a HL7 V2 Message the data element is found"
* ^mapping[+].identity = "Output"
* ^mapping[=].uri = "http://hl7.org/fhir/us/core"
* ^mapping[=].name = "Submission Data Output location"
* ^mapping[=].comment = "Location within the requirements profile to place the data for submission in US Core or FHIR Core Resources"

* administration 1..1 BackboneElement "Adminstrative Data"

* administration.event 1..1 code "EventCode" "Code used for reason of submission"
* administration.event ^fixedCode = $message-events#CathPCI-Discharge
* administration.event ^mapping[+].identity = "Output"
* administration.event ^mapping[=].language = #application/fhir
* administration.event ^mapping[=].map = "MessageHeader.eventCoding"

* administration.participantId 1..1 string "Facility ID" "ACC Assigned Facilty ID"
* administration.participantId ^mapping[+].identity = "Output"
* administration.participantId ^mapping[=].language = #application/fhir
* administration.participantId ^mapping[=].map = "MessageHeader.source.name"

* administration.vendorIdentifier 1..1 string "Vendor Identifier" "Software Vendor ID"
* administration.vendorIdentifier ^mapping[+].identity = "Output"
* administration.vendorIdentifier ^mapping[=].language = #application/fhir
* administration.vendorIdentifier ^mapping[=].map = "MessageHeader.source.software"

* administration.vendorSoftwareVersion 1..1 string "Software Version" "Vendor Software Version"
* administration.vendorSoftwareVersion ^mapping[+].identity = "Output"
* administration.vendorSoftwareVersion ^mapping[=].language = #application/fhir
* administration.vendorSoftwareVersion ^mapping[=].map = "MessageHeader.source.version"

* administration.status  1..1 code "Submission Status" "Status of the Submission, always final"
* administration.status ^fixedCode = #final
* administration.status ^mapping[+].identity = "Output"
* administration.status ^mapping[=].language = #application/fhir
* administration.status ^mapping[=].map = "Composition.type"
 
* administration.type  1..1 code "Submission Type" "Submission Type, always Episode of Care Record"
* administration.type ^fixedCode = $loinc#11516-2 "Physician Episode of care medical records"
* administration.type ^mapping[+].identity = "Output"
* administration.type ^mapping[=].language = #application/fhir
* administration.type ^mapping[=].map = "Composition.status"

* administration.timeFrameOfDataSubmission 1..1 string "Submission Period" "Time Frame of Data Submission quarter start (e.g., Q2 start date Apr 1)"
* administration.timeFrameOfDataSubmission ^mapping[+].identity = "Output"
* administration.timeFrameOfDataSubmission ^mapping[=].language = #application/fhir
* administration.timeFrameOfDataSubmission ^mapping[=].map = "Composition.event.period.start"

* administration.registryIdentifier 1..1 string "Registry Identifier"
* administration.registryIdentifier ^fixedString = "ACC-NCDR-CathPCI-5.0"
* administration.registryIdentifier ^mapping[+].identity = "Output"
* administration.registryIdentifier ^mapping[=].language = #application/fhir
* administration.registryIdentifier ^mapping[=].map = "Composition.title"

* administration.submissionType  1..1 string "Submission Type"
* administration.submissionType ^mapping[+].identity = "Output"
* administration.submissionType ^mapping[=].language = #application/fhir
* administration.submissionType ^mapping[=].map = "MessageHeader.reason.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/SubmissionType)"

* administration.date 1..1 string "Submission DateTime" "Date and Time of the Submission"
* administration.date ^mapping[+].identity = "FHIR"
* administration.date ^mapping[=].language = #application/fhir
* administration.date ^mapping[=].map = "now()"
* administration.date ^mapping[+].identity = "Output"
* administration.date ^mapping[=].language = #application/fhir
* administration.date ^mapping[=].map = "Composition.date"

* administration.author 1..1 string "Submission Organization" "Organization Submitting the Record"
* administration.author ^mapping[+].identity = "FHIR"
* administration.author ^mapping[=].language = #application/fhir
* administration.author ^mapping[=].map = "Organization"
* administration.author ^mapping[+].identity = "Output"
* administration.author ^mapping[=].language = #application/fhir
* administration.author ^mapping[=].map = "Composition.author"

* demographics 1..1 string "The Patient who is the subject of this record"
* demographics ^mapping[+].identity = "FHIR"
* demographics ^mapping[=].language = #application/fhir 
* demographics ^mapping[=].map = "Patient"
* demographics ^mapping[+].identity = "Output"
* demographics ^mapping[=].language = #application/fhir 
* demographics ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient and %patient" 

* episodeInformation 1..1 BackboneElement "Episode information"

* episodeInformation.episodeUniqueKey 1..1 string "Episode Unique Key" "Indicate the unique key associated with each patient episode record as assigned by the EMR/EHR or your software application."
* episodeInformation.episodeUniqueKey ^mapping[+].identity = "FHIR"
* episodeInformation.episodeUniqueKey ^mapping[=].language = #application/fhir
* episodeInformation.episodeUniqueKey ^mapping[=].map = "Encounter.where(reason.resolve().is(FHIR.Procedure) and reason.resolve().code.codable.code=415070008 )"
* episodeInformation.episodeUniqueKey ^mapping[+].identity = "Output"
* episodeInformation.episodeUniqueKey ^mapping[=].language = #application/fhir
* episodeInformation.episodeUniqueKey ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter and %encounter"

* episodeInformation.healthInsurancePaymentSource  1..* string "Health Insurers" "Health Insurance Provider"
* episodeInformation.healthInsurancePaymentSource ^mapping[+].identity = "FHIR"
* episodeInformation.healthInsurancePaymentSource ^mapping[=].language = #application/fhir
* episodeInformation.healthInsurancePaymentSource ^mapping[=].map = "Coverage"
* episodeInformation.healthInsurancePaymentSource ^mapping[+].identity = "Output"
* episodeInformation.healthInsurancePaymentSource ^mapping[=].language = #application/fhir
* episodeInformation.healthInsurancePaymentSource ^mapping[=].map = "Coverage"

* episodeInformation.healthInsuranceClaimNumber 1..* string "Health Insurance Claim Number" "Medicare Claim Number"
* episodeInformation.healthInsuranceClaimNumber ^mapping[+].identity = "FHIR"
* episodeInformation.healthInsuranceClaimNumber ^mapping[=].language = #application/fhir
* episodeInformation.healthInsuranceClaimNumber ^mapping[=].map = "ClaimResponse.where(type = medi).identifier.value"
* episodeInformation.healthInsuranceClaimNumber ^mapping[+].identity = "Output"
* episodeInformation.healthInsuranceClaimNumber ^mapping[=].language = #application/fhir
* episodeInformation.healthInsuranceClaimNumber ^mapping[=].map = "ClaimResponse"

* episodeInformation.patientRestriction 0..1 string "Patient Restriction" "patient requested for their information not to be used for any research or studies for the associated episode of care."
* episodeInformation.patientRestriction ^mapping[+].identity = "FHIR"
* episodeInformation.patientRestriction ^mapping[=].language = #application/fhir
* episodeInformation.patientRestriction ^mapping[=].map = "Consent.where(scope = research)"
* episodeInformation.patientRestriction ^mapping[+].identity = "Output"
* episodeInformation.patientRestriction ^mapping[=].language = #application/fhir
* episodeInformation.patientRestriction ^mapping[=].map = "Consent"

* episodeInformation.admittingProvider 1..1 string "Admitting Provider"
* episodeInformation.admittingProvider ^mapping[+].identity = "FHIR"
* episodeInformation.admittingProvider ^mapping[=].language = #application/fhir
* episodeInformation.admittingProvider ^mapping[=].map = "Encounter.participant.where( type.coding.code = 'ADM' ).individual.resolve()"
* episodeInformation.admittingProvider ^mapping[+].identity = "Output"
* episodeInformation.admittingProvider ^mapping[=].language = #application/fhir
* episodeInformation.admittingProvider ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"

* episodeInformation.attendingProvider 1..1 string "Attending Provider"
* episodeInformation.attendingProvider ^mapping[+].identity = "FHIR"
* episodeInformation.attendingProvider ^mapping[=].language = #application/fhir
* episodeInformation.attendingProvider ^mapping[=].map = "Encounter.participant.where( type.coding.code = 'ATND' ).individual.resolve()"
* episodeInformation.attendingProvider ^mapping[+].identity = "Output"
* episodeInformation.attendingProvider ^mapping[=].language = #application/fhir
* episodeInformation.attendingProvider ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"

* researchStudy 0..* string "ACC Research Study" "ACC study the patient is currently enrolled"
* researchStudy ^mapping[+].identity = "Output"
* researchStudy ^mapping[=].language = #application/fhir
* researchStudy ^mapping[=].map = "ResearchStudy"

* historyAndRiskFactors 1..1 BackboneElement "History and Risk Factors"

* historyAndRiskFactors.familyHistoryOfPrematureCoronaryArteryDisease 0..1 string "Family History of Premature Coronary Artery Disease"
* historyAndRiskFactors.familyHistoryOfPrematureCoronaryArteryDisease ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.familyHistoryOfPrematureCoronaryArteryDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.familyHistoryOfPrematureCoronaryArteryDisease ^mapping[=].map = "Observation.where(code.coding.code = '80985-5')"
* historyAndRiskFactors.familyHistoryOfPrematureCoronaryArteryDisease ^mapping[+].identity = "Output"
* historyAndRiskFactors.familyHistoryOfPrematureCoronaryArteryDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.familyHistoryOfPrematureCoronaryArteryDisease ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation"

* historyAndRiskFactors.priorMyocardialInfarction  0..1 string "Prior MI Incidence"
* historyAndRiskFactors.priorMyocardialInfarction ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.priorMyocardialInfarction ^mapping[=].language = #application/fhir
* historyAndRiskFactors.priorMyocardialInfarction ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PriorMyocardialInfarction) and %encounter.actualPeriod.start > (occurrenceDateTime - 1 day))"
* historyAndRiskFactors.priorMyocardialInfarction ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.priorMyocardialInfarction ^mapping[=].language = #application/fhir
* historyAndRiskFactors.priorMyocardialInfarction ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PriorMyocardialInfarction) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.priorMyocardialInfarction ^mapping[+].identity = "Output"
* historyAndRiskFactors.priorMyocardialInfarction ^mapping[=].language = #application/fhir
* historyAndRiskFactors.priorMyocardialInfarction ^mapping[=].map = "http://hl7.org/fhir/us/core//StructureDefinition/us-core-condition-problems-health-concerns.where(category = 'problem-list-item')"

* historyAndRiskFactors.priorPercutaneousCoronaryIntervention  0..1 string "Prior PCI Incidence"
* historyAndRiskFactors.priorPercutaneousCoronaryIntervention ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.priorPercutaneousCoronaryIntervention ^mapping[=].language = #application/fhir
* historyAndRiskFactors.priorPercutaneousCoronaryIntervention ^mapping[=].map = "Procedure.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/priorPercutaneousCoronaryIntervention) and %encounter.actualPeriod.start > (occurrenceDateTime - 1 day))"
* historyAndRiskFactors.priorPercutaneousCoronaryIntervention ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.priorPercutaneousCoronaryIntervention ^mapping[=].language = #application/fhir
* historyAndRiskFactors.priorPercutaneousCoronaryIntervention ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/priorPercutaneousCoronaryIntervention) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.priorPercutaneousCoronaryIntervention ^mapping[+].identity = "Output"
* historyAndRiskFactors.priorPercutaneousCoronaryIntervention ^mapping[=].language = #application/fhir
* historyAndRiskFactors.priorPercutaneousCoronaryIntervention ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation"

* historyAndRiskFactors.priorCoronaryArteryBypassGraft  0..1 string "Prior CABG Incidence"
* historyAndRiskFactors.priorCoronaryArteryBypassGraft ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.priorCoronaryArteryBypassGraft ^mapping[=].language = #application/fhir
* historyAndRiskFactors.priorCoronaryArteryBypassGraft ^mapping[=].map = "Procedure.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PriorCABG) and %encounter.actualPeriod.start > (occurrenceDateTime - 1 day))"
* historyAndRiskFactors.priorCoronaryArteryBypassGraft ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.priorCoronaryArteryBypassGraft ^mapping[=].language = #application/fhir
* historyAndRiskFactors.priorCoronaryArteryBypassGraft ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PriorCABG) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.priorCoronaryArteryBypassGraft ^mapping[+].identity = "Output"
* historyAndRiskFactors.priorCoronaryArteryBypassGraft ^mapping[=].language = #application/fhir
* historyAndRiskFactors.priorCoronaryArteryBypassGraft ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation"

* historyAndRiskFactors.cerebrovascularDisease 0..1 string "Current Cerebrovascual Disease"
* historyAndRiskFactors.cerebrovascularDisease ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.cerebrovascularDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.cerebrovascularDisease ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PriorCerebrovascularDisease) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.cerebrovascularDisease ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.cerebrovascularDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.cerebrovascularDisease ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PriorCerebrovascularDisease) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.cerebrovascularDisease ^mapping[+].identity = "Output"
* historyAndRiskFactors.cerebrovascularDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.cerebrovascularDisease ^mapping[=].map = "http://hl7.org/fhir/us/core//StructureDefinition/us-core-condition-problems-health-concerns.where(category = 'problem-list-item')"

* historyAndRiskFactors.diabetesMellitus 0..1 string "Current Diabetes Mellitus"
* historyAndRiskFactors.diabetesMellitus ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.diabetesMellitus ^mapping[=].language = #application/fhir
* historyAndRiskFactors.diabetesMellitus ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PriorOrCurrentDiabetesMellitus) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.diabetesMellitus ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.diabetesMellitus ^mapping[=].language = #application/fhir
* historyAndRiskFactors.diabetesMellitus ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PriorOrCurrentDiabetesMellitus) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.diabetesMellitus ^mapping[+].identity = "Output"
* historyAndRiskFactors.diabetesMellitus ^mapping[=].language = #application/fhir
* historyAndRiskFactors.diabetesMellitus ^mapping[=].map = "http://hl7.org/fhir/us/core//StructureDefinition/us-core-condition-problems-health-concerns.where(category = 'problem-list-item')"

* historyAndRiskFactors.currentlyOnDialysis 0..1 string "Patient on Dialysis"
* historyAndRiskFactors.currentlyOnDialysis ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.currentlyOnDialysis ^mapping[=].language = #application/fhir
* historyAndRiskFactors.currentlyOnDialysis ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/HemodialysisOrPeritonealDialysis) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.currentlyOnDialysis ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.currentlyOnDialysis ^mapping[=].language = #application/fhir
* historyAndRiskFactors.currentlyOnDialysis ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/HemodialysisOrPeritonealDialysis) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.currentlyOnDialysis ^mapping[+].identity = "Output"
* historyAndRiskFactors.currentlyOnDialysis ^mapping[=].language = #application/fhir
* historyAndRiskFactors.currentlyOnDialysis ^mapping[=].map = "http://hl7.org/fhir/us/core//StructureDefinition/us-core-condition-problems-health-concerns.where(category = 'problem-list-item')"

* historyAndRiskFactors.canadianStudyOfHealthAndAgingClinicalFrailtyScale 0..1 string "Frailty Scale"
* historyAndRiskFactors.canadianStudyOfHealthAndAgingClinicalFrailtyScale ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.canadianStudyOfHealthAndAgingClinicalFrailtyScale ^mapping[=].language = #application/fhir
* historyAndRiskFactors.canadianStudyOfHealthAndAgingClinicalFrailtyScale ^mapping[=].map = "Observation.where(code.coding.code = '763264000' ) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.canadianStudyOfHealthAndAgingClinicalFrailtyScale ^mapping[+].identity = "Output"
* historyAndRiskFactors.canadianStudyOfHealthAndAgingClinicalFrailtyScale ^mapping[=].language = #application/fhir
* historyAndRiskFactors.canadianStudyOfHealthAndAgingClinicalFrailtyScale ^mapping[=].map = "http://hl7.org/fhir/us/core//StructureDefinition/us-core-observation"

* historyAndRiskFactors.chronicLungDisease  0..1 string "Current Chronic Lung Disease"
* historyAndRiskFactors.chronicLungDisease ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.chronicLungDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.chronicLungDisease ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ChronicLungDisease) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.chronicLungDisease ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.chronicLungDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.chronicLungDisease ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ChronicLungDisease) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.chronicLungDisease ^mapping[+].identity = "Output"
* historyAndRiskFactors.chronicLungDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.chronicLungDisease ^mapping[=].map = "http://hl7.org/fhir/us/core//StructureDefinition/us-core-condition-problems-health-concerns.where(category = 'problem-list-item')"

* historyAndRiskFactors.peripheralArterialDisease  0..1 string "Peripheral Arterial Disease Instance"
* historyAndRiskFactors.peripheralArterialDisease ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.peripheralArterialDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.peripheralArterialDisease ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PeripheralArterialOcclusiveDisease) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.peripheralArterialDisease ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.peripheralArterialDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.peripheralArterialDisease ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PeripheralArterialOcclusiveDisease) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.peripheralArterialDisease ^mapping[+].identity = "Output"
* historyAndRiskFactors.peripheralArterialDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.peripheralArterialDisease ^mapping[=].map = "http://hl7.org/fhir/us/core//StructureDefinition/us-core-condition-problems-health-concerns.where(category = 'problem-list-item')"

* historyAndRiskFactors.hypertension 0..1 string "Hypertension Instance"
* historyAndRiskFactors.hypertension ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.hypertension ^mapping[=].language = #application/fhir
* historyAndRiskFactors.hypertension ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/Hypertension))"
* historyAndRiskFactors.hypertension ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.hypertension ^mapping[=].language = #application/fhir
* historyAndRiskFactors.hypertension ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/Hypertension))"
* historyAndRiskFactors.hypertension ^mapping[+].identity = "Output"
* historyAndRiskFactors.hypertension ^mapping[=].language = #application/fhir
* historyAndRiskFactors.hypertension ^mapping[=].map = "http://hl7.org/fhir/us/core//StructureDefinition/us-core-condition-problems-health-concerns.where(category = 'problem-list-item')"

* historyAndRiskFactors.dyslipidemia 0..1 string "Dyslipidemia Instance"
* historyAndRiskFactors.dyslipidemia ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.dyslipidemia ^mapping[=].language = #application/fhir
* historyAndRiskFactors.dyslipidemia ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/Dyslipidemia))"
* historyAndRiskFactors.dyslipidemia ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.dyslipidemia ^mapping[=].language = #application/fhir
* historyAndRiskFactors.dyslipidemia ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/Dyslipidemia))"
* historyAndRiskFactors.dyslipidemia ^mapping[+].identity = "Output"
* historyAndRiskFactors.dyslipidemia ^mapping[=].language = #application/fhir
* historyAndRiskFactors.dyslipidemia ^mapping[=].map = "http://hl7.org/fhir/us/core//StructureDefinition/us-core-condition-problems-health-concerns.where(category = 'problem-list-item')"

* historyAndRiskFactors.tobaccoUse 1..1 string "Smoking status and usage"  "This is for encoding all smoking status, including quantity"
* historyAndRiskFactors.tobaccoUse ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.tobaccoUse ^mapping[=].language = #application/fhir
* historyAndRiskFactors.tobaccoUse ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/Dyslipidemia))"
* historyAndRiskFactors.tobaccoUse ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.tobaccoUse ^mapping[=].language = #application/fhir
* historyAndRiskFactors.tobaccoUse ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/Dyslipidemia))"
* historyAndRiskFactors.tobaccoUse ^mapping[+].identity = "Output"
* historyAndRiskFactors.tobaccoUse ^mapping[=].language = #application/fhir
* historyAndRiskFactors.tobaccoUse ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-smokingstatus"

* historyAndRiskFactors.height  1..1 string "Patient Height"
* historyAndRiskFactors.height ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.height ^mapping[=].language = #application/fhir
* historyAndRiskFactors.height ^mapping[=].map = "Observation.where(code.coding.code = '8302-2')"
* historyAndRiskFactors.height ^mapping[+].identity = "Output"
* historyAndRiskFactors.height ^mapping[=].language = #application/fhir
* historyAndRiskFactors.height ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-body-height"

* historyAndRiskFactors.weight 1..1 string "Patient Weight"
* historyAndRiskFactors.weight ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.weight ^mapping[=].language = #application/fhir
* historyAndRiskFactors.weight ^mapping[=].map = "Observation.where(code.coding.code = '3141-9')"
* historyAndRiskFactors.weight ^mapping[+].identity = "Output"
* historyAndRiskFactors.weight ^mapping[=].language = #application/fhir
* historyAndRiskFactors.weight ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-body-weight"

* cardiacStatus 1..1 BackboneElement "Cardiac Status"
* cardiacStatus.cardiacArrestOutofHealthcareFacility 0..1 string "Cardiac Arrest Out of Healthcare Facility" "Indicate if a cardiac arrest event occurred outside of any healthcare facility."
* cardiacStatus.cardiacArrestOutofHealthcareFacility ^mapping[+].identity = "Output"
* cardiacStatus.cardiacArrestOutofHealthcareFacility ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestOutofHealthcareFacility ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=10001424808 andvalueBoolean.exists())"

* cardiacStatus.cardiacArrestWitnessed 0..1 string "Cardiac Arrest Witnessed" "Indicate if the out-of-hospital cardiac arrest was witnessed by another person."
* cardiacStatus.cardiacArrestWitnessed ^mapping[+].identity = "Output"
* cardiacStatus.cardiacArrestWitnessed ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestWitnessed ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/Observation.where(code.coding.system = 'http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014082 and valueBoolean.exists())"

* cardiacStatus.cardiacArrestAfterArrivalofEMS 0..1 string "Cardiac Arrest After Arrival of Emergency Medical Services" "Indicate if the out-of-hospital cardiac arrest occurred after arrival of Emergency Medical Services (EMS)."
* cardiacStatus.cardiacArrestAfterArrivalofEMS ^mapping[+].identity = "Output"
* cardiacStatus.cardiacArrestAfterArrivalofEMS ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestAfterArrivalofEMS ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014081 and valueBoolean.exists())"

* cardiacStatus.firstCardiacArrestRhythm 0..1 string "First Cardiac Arrest Rhythm" "Indicate if the out-of-hospital cardiac arrest occurred after arrival of Emergency Medical Services (EMS)."
* cardiacStatus.firstCardiacArrestRhythm ^mapping[+].identity = "Output"
* cardiacStatus.firstCardiacArrestRhythm ^mapping[=].language = #application/fhir
* cardiacStatus.firstCardiacArrestRhythm ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014081 and valueCode.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/FirstCardiacArrestRhythm))"

* cardiacStatus.cardiacArrestatTransferringHealthcareFacility 0..1 string "Cardiac Arrest at Transferring Healthcare Facility" "Indicate if the patient had cardiac arrest at the transferring healthcare facility prior to arrival at the current facility."
* cardiacStatus.cardiacArrestatTransferringHealthcareFacility ^mapping[+].identity = "Output"
* cardiacStatus.cardiacArrestatTransferringHealthcareFacility ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestatTransferringHealthcareFacility ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=000000 and valueBoolean.exists())"

* procedureInformation 1..1 BackboneElement "CathPCI Procedure Information" 

* procedureInformation.systolicBloodPressure 1..1 string "Blood Pressure (Systolic)"
* procedureInformation.systolicBloodPressure ^mapping[+].identity = "FHIR"
* procedureInformation.systolicBloodPressure ^mapping[=].language = #application/fhir
* procedureInformation.systolicBloodPressure ^mapping[=].map = "Observation.where(code.coding.code = '8480-6')"
* procedureInformation.systolicBloodPressure ^mapping[+].identity = "Output"
* procedureInformation.systolicBloodPressure ^mapping[=].language = #application/fhir
* procedureInformation.systolicBloodPressure ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-blood-pressure"

* procedureInformation.pciPatientProcedure  1..1 string "PCI Procedure" "Results of this query will fill the %Procedure and %procedure.period environment variables"
* procedureInformation.pciPatientProcedure ^mapping[+].identity = "FHIR"
* procedureInformation.pciPatientProcedure ^mapping[=].language = #application/fhir
* procedureInformation.pciPatientProcedure ^mapping[=].map = "Procedure.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/'PercutaneousCoronaryIntervention') and performedPeriod.exists() )"
* procedureInformation.pciPatientProcedure ^mapping[+].identity = "Output"
* procedureInformation.pciPatientProcedure ^mapping[=].language = #application/fhir
* procedureInformation.pciPatientProcedure ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure"

* procedureInformation.diagnosticCoronaryAngiographyProcedure  0..1 string "Diagnostic Coronary Angiography"
* procedureInformation.diagnosticCoronaryAngiographyProcedure ^mapping[+].identity = "FHIR"
* procedureInformation.diagnosticCoronaryAngiographyProcedure ^mapping[=].language = #application/fhir
* procedureInformation.diagnosticCoronaryAngiographyProcedure ^mapping[=].map = "Procedure.where(code.coding.code = '80994-7' and performedPeriod.start >= %period.start and performedPeriod.end <= %period.end )"
* procedureInformation.diagnosticCoronaryAngiographyProcedure ^mapping[+].identity = "Output"
* procedureInformation.diagnosticCoronaryAngiographyProcedure ^mapping[=].language = #application/fhir
* procedureInformation.diagnosticCoronaryAngiographyProcedure ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure"

* procedureInformation.diagnosticCatheterizationOperator  0..1 string "Diagnostic Catheterization Operator" 
* procedureInformation.diagnosticCatheterizationOperator ^mapping[+].identity = "FHIR"
* procedureInformation.diagnosticCatheterizationOperator ^mapping[=].language = #application/fhir
* procedureInformation.diagnosticCatheterizationOperator ^mapping[=].map = "Procedure.where(code.coding.code = '80994-7' and performedPeriod.start >= %period.start and performedPeriod <= %period.end ).performer.actor.resolve())"
* procedureInformation.diagnosticCatheterizationOperator ^mapping[+].identity = "Output"
* procedureInformation.diagnosticCatheterizationOperator ^mapping[=].language = #application/fhir
* procedureInformation.diagnosticCatheterizationOperator ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitoner"

* procedureInformation.diagnosticLeftHeartCath 0..1 string "Instance of Left Heart Diagnostic Catheterization"
* procedureInformation.diagnosticLeftHeartCath ^mapping[+].identity = "FHIR"
* procedureInformation.diagnosticLeftHeartCath ^mapping[=].language = #application/fhir
* procedureInformation.diagnosticLeftHeartCath ^mapping[=].map = "Procedure.where(code.coding.code = '67629009' and performedPeriod.start >= %period.start and performedPeriod.end <= %period.end)"
* procedureInformation.diagnosticLeftHeartCath ^mapping[+].identity = "Output"
* procedureInformation.diagnosticLeftHeartCath ^mapping[=].language = #application/fhir
* procedureInformation.diagnosticLeftHeartCath ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure"

* procedureInformation.lvefPercentDiagnosticLeftHeartCath 1..1 string "Diagnositic Left Heart Cath LVEF%"
* procedureInformation.lvefPercentDiagnosticLeftHeartCath ^mapping[+].identity = "FHIR"
* procedureInformation.lvefPercentDiagnosticLeftHeartCath ^mapping[=].language = #application/fhir
* procedureInformation.lvefPercentDiagnosticLeftHeartCath ^mapping[=].map = "Observation.where(code.coding.code = '10230-1' and effectiveDate ge %period.start)"
* procedureInformation.lvefPercentDiagnosticLeftHeartCath ^mapping[+].identity = "Output"
* procedureInformation.lvefPercentDiagnosticLeftHeartCath ^mapping[=].language = #application/fhir
* procedureInformation.lvefPercentDiagnosticLeftHeartCath ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-clinical-test"

* procedureInformation.concomitantProceduresPerformed 0..* string "Concomitant Procedures Performed" 
* procedureInformation.concomitantProceduresPerformed ^mapping[+].identity = "Output"
* procedureInformation.concomitantProceduresPerformed ^mapping[=].language = #application/fhir
* procedureInformation.concomitantProceduresPerformed ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ConcomitantProceduresPerformedType))"

* procedureInformation.cumulativeAirKerma  1..* string "Cumulative Air Kerma" 
* procedureInformation.cumulativeAirKerma ^mapping[+].identity = "FHIR"
* procedureInformation.cumulativeAirKerma ^mapping[=].language = #application/fhir
* procedureInformation.cumulativeAirKerma ^mapping[=].map = "Observation.where(code.coding.code = '228850003' and (effectivePeriod.start >= %period.start and effectivePeriod.end <= %period.end)"
* procedureInformation.cumulativeAirKerma ^mapping[+].identity = "Output"
* procedureInformation.cumulativeAirKerma ^mapping[=].language = #application/fhir
* procedureInformation.cumulativeAirKerma ^mapping[=].map = "Observation"

* procedureInformation.fluoroscopyTime 1..* string "Total Flouroscopy Time"  "Indicate the total fluoroscopy time recorded to the nearest 0.1-minute."
* procedureInformation.fluoroscopyTime ^mapping[+].identity = "Output"
* procedureInformation.fluoroscopyTime ^mapping[=].language = #application/fhir
* procedureInformation.fluoroscopyTime ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014077 and valueTime.exists()"

* procedureInformation.doseAreaProduct 1..* string "Total Flouroscopy Dose"  "Indicate the total fluoroscopy dose to the nearest integer. The value recorded should include the total dose for the lab visit."
* procedureInformation.doseAreaProduct ^mapping[+].identity = "Output"
* procedureInformation.doseAreaProduct ^mapping[=].language = #application/fhir
* procedureInformation.doseAreaProduct ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100000994 and valueQuantity.exists()"

* procedureInformation.arterialCrossOver 1..* string "Arterial Cross Over" "Indicate if the procedure involved a crossover to a different access site."
* procedureInformation.arterialCrossOver ^mapping[+].identity = "Output"
* procedureInformation.arterialCrossOver ^mapping[=].language = #application/fhir
* procedureInformation.arterialCrossOver ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014075 and valueBoolean.exists()"

* procedureInformation.venousAccess 1..* string "Venous Access" "Indicate if a venous access was obtained for the purpose of the diagnostic or PCI procedure."
* procedureInformation.venousAccess ^mapping[+].identity = "Output"
* procedureInformation.venousAccess ^mapping[=].language = #application/fhir
* procedureInformation.venousAccess ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014075 and valueBoolean.exists("

* procedureInformation.cardiacArrestAtThisFacility  1..* string "Cardiac Arrest at this Facility" "Indicate if a cardiac arrest event occurred at this facility PRIOR to the cath lab visit."
* procedureInformation.cardiacArrestAtThisFacility ^mapping[+].identity = "FHIR"
* procedureInformation.cardiacArrestAtThisFacility ^mapping[=].language = #application/fhir
* procedureInformation.cardiacArrestAtThisFacility ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/CardiacArrest) and (effectivePeriod.start> %period.start and effectivePeriod.start < %procedure.period.start))"
* procedureInformation.cardiacArrestAtThisFacility ^mapping[+].identity = "Output"
* procedureInformation.cardiacArrestAtThisFacility ^mapping[=].language = #application/fhir
* procedureInformation.cardiacArrestAtThisFacility ^mapping[=].map = "Observation"

* procedureInformation.preprocedureInformation  1..1 BackboneElement "Pre-procedure Information"
* procedureInformation.preprocedureInformation.heartFailure  1..* string "Heart Failure" "Indicate if the patient has been diagnosed with heart failure, diagnosis date and the Heart Failure type."
* procedureInformation.preprocedureInformation.heartFailure ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureInformation.heartFailure ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.heartFailure ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/HeartFailure) and recordedDate.exists())"
* procedureInformation.preprocedureInformation.heartFailure ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.heartFailure ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.heartFailure ^mapping[=].map = "Condition"

* procedureInformation.preprocedureInformation.newYorkHeartAssociationClassification 1..* string "New York Heart Association Classification" "Indicate the patient's latest dyspnea or functional class, coded as the New York Heart Association (NYHA) classification."
* procedureInformation.preprocedureInformation.newYorkHeartAssociationClassification ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureInformation.newYorkHeartAssociationClassification ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.newYorkHeartAssociationClassification ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/NewYorkHeartAssociationQuery))"
* procedureInformation.preprocedureInformation.newYorkHeartAssociationClassification ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.newYorkHeartAssociationClassification ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.newYorkHeartAssociationClassification ^mapping[=].map = "Observation.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/NewYorkHeartAssociationAnswers)"

* procedureInformation.preprocedureInformation.diagnosticTest  1..1 BackboneElement "Pre-procedure Diagnostic Tests"

* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAssessment 0..* string "Electrocardiac Assessment" "Indicate the results of the electrocardiac assessment." 
* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAssessment ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAssessment ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAssessment ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142467 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ElectrocardiacAssessmentResults) and Observation.method.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ElectrocardiacAssessmentMethod)"

* procedureInformation.preprocedureInformation.diagnosticTest.newAntiarrhythmicTherapyInitiatedPriorToCathLab 1..* string "New Antiarrhythmic Therapy Initiated Prior to Cath Lab" "Indicate if the patient received a NEW antiarrhythmic therapy PRIOR to evaluation within the cath lab."
* procedureInformation.preprocedureInformation.diagnosticTest.newAntiarrhythmicTherapyInitiatedPriorToCathLab ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureInformation.diagnosticTest.newAntiarrhythmicTherapyInitiatedPriorToCathLab ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.newAntiarrhythmicTherapyInitiatedPriorToCathLab ^mapping[=].map = "MedicationStatement.where(medicationCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/Antiarrhythmics) and effectiveDateTime < %Encounter.period.start and effeciveDateTime < %Encounter.period.start - 30 days)"
* procedureInformation.preprocedureInformation.diagnosticTest.newAntiarrhythmicTherapyInitiatedPriorToCathLab ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.newAntiarrhythmicTherapyInitiatedPriorToCathLab ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.newAntiarrhythmicTherapyInitiatedPriorToCathLab ^mapping[=].map = "MedicationStatement"

* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAbnormalityType 0..* string "Electrocardiac Assessment Abnormality Type" "Indicate the findings of the electrocardiac assessment."
* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAbnormalityType ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAbnormalityType ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAbnormalityType ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/AbnormalElectrocardiacAssessment)"
* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAbnormalityType ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAbnormalityType ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAbnormalityType ^mapping[=].map = "Observation.where(valueCodeableConcept.exists() or valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ElectrocardiacAbnormalityType)"

* procedureInformation.preprocedureInformation.diagnosticTest.nonSustainedVentricularTachycardiaType 0..* string "Non-Sustained Ventricular Tachycardia Type" "Last value between 30 days prior to 1st procedure (or previous procedure) and current procedure"
* procedureInformation.preprocedureInformation.diagnosticTest.nonSustainedVentricularTachycardiaType ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.nonSustainedVentricularTachycardiaType ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.nonSustainedVentricularTachycardiaType ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142475 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/NonSustainedVentricularTachycardiaType)"

* procedureInformation.preprocedureInformation.diagnosticTest.lvef 1..* string "LVEF % (Pre-Procedure)" "Indicate the best estimate of the most recent left ventricular ejection fraction within 6 months of procedure."
* procedureInformation.preprocedureInformation.diagnosticTest.lvef ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.lvef ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.lvef ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001027 and valueQuantity.exists())"

* procedureInformation.preprocedureInformation.diagnosticTest.cardiacCta 0..* string "Cardiac CTA"
* procedureInformation.preprocedureInformation.diagnosticTest.cardiacCta ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.cardiacCta ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.cardiacCta ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001257 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/CardiacCTAResults)"

* procedureInformation.preprocedureInformation.diagnosticTest.agatstonCalciumScore 0..* string "Agatston Calcium Score"
* procedureInformation.preprocedureInformation.diagnosticTest.agatstonCalciumScore ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureInformation.diagnosticTest.agatstonCalciumScore ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.agatstonCalciumScore ^mapping[=].map = "Observation.where(code.coding.code = '450360000')"
* procedureInformation.preprocedureInformation.diagnosticTest.agatstonCalciumScore ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.agatstonCalciumScore ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.agatstonCalciumScore ^mapping[=].map = "Observation"

* procedureInformation.preprocedureInformation.diagnosticTest.priorDcapWithoutIntervention 0..* string "Prior Diagnostic Coronary Angiography Procedure without intervention" "Indicate if the patient had a prior diagnostic coronary angiography procedure without a subsequent intervention." 
* procedureInformation.preprocedureInformation.diagnosticTest.priorDcapWithoutIntervention ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.priorDcapWithoutIntervention ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.priorDcapWithoutIntervention ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=10001424782 and valueBoolean.exists())"

* procedureInformation.preprocedureInformation.diagnosticTest.priorDcapResults 0..* string "Prior Diagnostic Coronary Angiography Procedure results" "Indicate the results of the prior diagnostic coronary angiography."
* procedureInformation.preprocedureInformation.diagnosticTest.priorDcapResults ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.priorDcapResults ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.priorDcapResults ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=10001424784 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PriorDiagnosticCoronaryAngiographyProcedureResults))"

* procedureInformation.preprocedureInformation.diagnosticTest.heartRate 0..* string "Heart Rate"
* procedureInformation.preprocedureInformation.diagnosticTest.heartRate ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureInformation.diagnosticTest.heartRate ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.heartRate ^mapping[=].map = "Observation.where(code.coding.code = '8867-4')"
* procedureInformation.preprocedureInformation.diagnosticTest.heartRate ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.heartRate ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.heartRate ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-heart-rate"

* procedureInformation.preprocedureInformation.diagnosticTest.stressTest 0..* string "Indicate Stress Test Performed and results"
* procedureInformation.preprocedureInformation.diagnosticTest.stressTest ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.stressTest ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.stressTest ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142432 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/StressTestResults) and Observation.method.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/StressTest))" 

* procedureInformation.preprocedureInformation.diagnosticTest.stressTest.riskOrExtentOfIschemia 0..* string  "Stress Test Risk/Extent of Ischemia" "Indicate the risk or extent of ischemia for the non-invasive stress test."
* procedureInformation.preprocedureInformation.diagnosticTest.stressTest.riskOrExtentOfIschemia ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.stressTest.riskOrExtentOfIschemia ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.stressTest.riskOrExtentOfIschemia ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142434 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/StressTestRiskExtentofIschemia))"

* procedureInformation.preprocedureInformation.preprocedureMedication 0..* string "PreProcedure Medication" "Indicate the assigned identification number associated with the medications the patient was prescribed or received." 
* procedureInformation.preprocedureInformation.preprocedureMedication ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureInformation.preprocedureMedication ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.preprocedureMedication ^mapping[=].map = "MedicationAdministration.where(effectiveDateTime >= %period.start - 2 weeks and effeciveDateTime < %procedure.period.start)"
* procedureInformation.preprocedureInformation.preprocedureMedication ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.preprocedureMedication ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.preprocedureMedication ^mapping[=].map = "MedicationAdministration"

* procedureInformation.preprocedureInformation.saQuestionnaire  7..* string  "Responses to the Seattle Angina Questionnaire"
* procedureInformation.preprocedureInformation.saQuestionnaire ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.saQuestionnaire ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.saQuestionnaire ^mapping[=].map = "Observation.where(code.coding.system='http://loinc.org' and code.coding.code=88479-1 and component.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/SeattleAnginaQs) and component.valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/SeattleAnginaAs))"

* procedureInformation.preprocedureInformation.roseDyspneaScale  4..* string  "Responses to the Rose Dyspnea Scale Questionnaire"
* procedureInformation.preprocedureInformation.roseDyspneaScale ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.roseDyspneaScale ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.roseDyspneaScale ^mapping[=].map = "Observation.where(code.coding.system='http://loinc.org' and code.coding.code=89440-2 and component.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/RoseDyspneaQ) and component.valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/YesNo))"

* procedureInformation.closureMethods 1..1 BackboneElement "Method and Device used for procedure closures"

* procedureInformation.closureMethods.arterialAccessClosureMethod 0..* string  "Arterial Access Closure Method"
* procedureInformation.closureMethods.arterialAccessClosureMethod ^mapping[+].identity = "Output"
* procedureInformation.closureMethods.arterialAccessClosureMethod ^mapping[=].language = #application/fhir
* procedureInformation.closureMethods.arterialAccessClosureMethod ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014074 and valueString.exists())"

* procedureInformation.closureMethods.closureMethodUdi 0..* string  "Arterial Access Closure Devices"
* procedureInformation.closureMethods.closureMethodUdi ^mapping[+].identity = "FHIR"
* procedureInformation.closureMethods.closureMethodUdi ^mapping[=].language = #application/fhir
* procedureInformation.closureMethods.closureMethodUdi ^mapping[=].map = "%procedure.focalDevice.manipulated.resolve()"
* procedureInformation.closureMethods.closureMethodUdi ^mapping[+].identity = "Output"
* procedureInformation.closureMethods.closureMethodUdi ^mapping[=].language = #application/fhir
* procedureInformation.closureMethods.closureMethodUdi ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-implantable-device"

* procedureInformation.preprocedureLabs 1..1 BackboneElement "Preprocedure Lab Results"

* procedureInformation.preprocedureLabs.hemoglobin 1..* string "Hemoglobin" "Indicate the hemoglobin (Hgb) value in g/dL."
* procedureInformation.preprocedureLabs.hemoglobin ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureLabs.hemoglobin ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.hemoglobin ^mapping[=].map = "Observation.where(code.coding.code = '718-7' and effectiveDateTime >= %procedure.period.end - 30 days and effectiveDateTime < %procedure.period.start)"
* procedureInformation.preprocedureLabs.hemoglobin ^mapping[+].identity = "Output"
* procedureInformation.preprocedureLabs.hemoglobin ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.hemoglobin ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.preprocedureLabs.creatinine 1..* string "Creatinine" "Indicate the creatinine (Cr) level in mg/dL."
* procedureInformation.preprocedureLabs.creatinine ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureLabs.creatinine ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.creatinine ^mapping[=].map = "Observation.where(code.coding.code = '2160-0' and effectiveDateTime >= %period.start and effectiveDateTime < %procedure.period.start)"
* procedureInformation.preprocedureLabs.creatinine ^mapping[+].identity = "Output"
* procedureInformation.preprocedureLabs.creatinine ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.creatinine ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.preprocedureLabs.troponinI  1..* string "PreProcedure Troponin I" "Indicate the Troponin I result in ng/mL."
* procedureInformation.preprocedureLabs.troponinI ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureLabs.troponinI ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.troponinI ^mapping[=].map = "Observation.where(code.coding.code = '10839-9' and effectiveDateTime >= %period.start and effectiveDateTime < %procedure.period.start)"
* procedureInformation.preprocedureLabs.troponinI ^mapping[+].identity = "Output"
* procedureInformation.preprocedureLabs.troponinI ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.troponinI ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.preprocedureLabs.troponinT  1..* string "PreProcedure Troponin T" "Indicate the Troponin I result in ng/mL."
* procedureInformation.preprocedureLabs.troponinI ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureLabs.troponinI ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.troponinI ^mapping[=].map = "Observation.where(code.coding.code = '6598-7' and effectiveDateTime >= %period.start and effectiveDateTime < %procedure.period.start)"
* procedureInformation.preprocedureLabs.troponinI ^mapping[+].identity = "Output"
* procedureInformation.preprocedureLabs.troponinI ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.troponinI ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.preprocedureLabs.totalCholesterol  1..* string "PreProcedure Total Cholesterol" "Indicate the cholesterol level mg/dL."
* procedureInformation.preprocedureLabs.totalCholesterol ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureLabs.totalCholesterol ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.totalCholesterol ^mapping[=].map = "Observation.where(code.coding.code = '2093-3' and  and effectiveDateTime >= %procedure.period.start - 30 days and effectiveDateTime < %procedure.period.start)"
* procedureInformation.preprocedureLabs.totalCholesterol ^mapping[+].identity = "Output"
* procedureInformation.preprocedureLabs.totalCholesterol ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.totalCholesterol ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.preprocedureLabs.highDensityLipoprotein  1..* string "PreProcedure Total Cholesterol" "Indicate the cholesterol level mg/dL."
* procedureInformation.preprocedureLabs.highDensityLipoprotein ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureLabs.highDensityLipoprotein ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.highDensityLipoprotein ^mapping[=].map = "Observation.where(code.coding.code = '2085-9' and  and effectiveDateTime >= %procedure.period.start - 30 days and effectiveDateTime < %procedure.period.start)"
* procedureInformation.preprocedureLabs.highDensityLipoprotein ^mapping[+].identity = "Output"
* procedureInformation.preprocedureLabs.highDensityLipoprotein ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.highDensityLipoprotein ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.postprocedureLabs 1..1 BackboneElement "Results of Postprocedure Labs"

* procedureInformation.postprocedureLabs.hemoglobin 1..* string "Hemoglobin" "Indicate the hemoglobin (Hgb) value in g/dL."
* procedureInformation.postprocedureLabs.hemoglobin ^mapping[+].identity = "FHIR"
* procedureInformation.postprocedureLabs.hemoglobin ^mapping[=].language = #application/fhir
* procedureInformation.postprocedureLabs.hemoglobin ^mapping[=].map = "Observation.where(code.coding.code = '718-7' and effectiveDateTime >= %procedure.period.end and effectiveDateTime < %procedure.period.end + 72 hours)"
* procedureInformation.postprocedureLabs.hemoglobin ^mapping[+].identity = "Output"
* procedureInformation.postprocedureLabs.hemoglobin ^mapping[=].language = #application/fhir
* procedureInformation.postprocedureLabs.hemoglobin ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.postprocedureLabs.creatinine 1..* string "Creatinine" "Indicate the creatinine (Cr) level in mg/dL."
* procedureInformation.postprocedureLabs.creatinine ^mapping[+].identity = "FHIR"
* procedureInformation.postprocedureLabs.creatinine ^mapping[=].language = #application/fhir
* procedureInformation.postprocedureLabs.creatinine ^mapping[=].map = "Observation.where(code.coding.code = '2160-0' and effectiveDateTime >= %procedure.period.end and effectiveDateTime < %procedure.period.end + 5 days)"
* procedureInformation.postprocedureLabs.creatinine ^mapping[+].identity = "Output"
* procedureInformation.postprocedureLabs.creatinine ^mapping[=].language = #application/fhir
* procedureInformation.postprocedureLabs.creatinine ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.postprocedureLabs.troponinI  1..* string "PreProcedure Troponin I" "Indicate the Troponin I result in ng/mL."
* procedureInformation.postprocedureLabs.troponinI ^mapping[+].identity = "FHIR"
* procedureInformation.postprocedureLabs.troponinI ^mapping[=].language = #application/fhir
* procedureInformation.postprocedureLabs.troponinI ^mapping[=].map = "Observation.where(code.coding.code = '10839-9' and effectiveDateTime >= %procedure.period.end + 6 hours and effectiveDateTime < %procedure.period.end + 24 hours)"
* procedureInformation.postprocedureLabs.troponinI ^mapping[+].identity = "Output"
* procedureInformation.postprocedureLabs.troponinI ^mapping[=].language = #application/fhir
* procedureInformation.postprocedureLabs.troponinI ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.postprocedureLabs.troponinT  1..* string "PreProcedure Troponin T" "Indicate the Troponin I result in ng/mL."
* procedureInformation.postprocedureLabs.troponinI ^mapping[+].identity = "FHIR"
* procedureInformation.postprocedureLabs.troponinI ^mapping[=].language = #application/fhir
* procedureInformation.postprocedureLabs.troponinI ^mapping[=].map = "Observation.where(code.coding.code = '6598-7' and effectiveDateTime >= %procedure.period.end + 6 hours and effectiveDateTime < %procedure.period.end + 24 hours)"
* procedureInformation.postprocedureLabs.troponinI ^mapping[+].identity = "Output"
* procedureInformation.postprocedureLabs.troponinI ^mapping[=].language = #application/fhir
* procedureInformation.postprocedureLabs.troponinI ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.cathLabVisit 1..1 BackboneElement "Information Regarding the Cath Lab Procedure"

* procedureInformation.cathLabVisit.indicationsForCathLabVisit 0..* string  "Indications for Cath Lab Visit" "Indicate the patient symptoms or condition prompting the cath lab visit."

* procedureInformation.cathLabVisit.chestPainSymptomAssessment  0..* string "Chest Pain Symptom Assessment" "Indicate the chest pain symptom assessment as diagnosed by the physician or described by the patient."
* procedureInformation.cathLabVisit.chestPainSymptomAssessment ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.chestPainSymptomAssessment ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.chestPainSymptomAssessment ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001274 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ChestPainSymptomAssessment))"

* procedureInformation.cathLabVisit.cardiovascularInstabilitytype 0..* string "Cardiovascular Instability Type" "Cardiovascular instability includes, but is not limited to, persistent ischemic symptoms (such as chest pain or ST elevation), cardiogenic shock, ventricular arrhythmias, symptoms of acute heart failure, or hemodynamic instability (not cardiogenic shock)."
* procedureInformation.cathLabVisit.cardiovascularInstabilitytype ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.cardiovascularInstabilitytype ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.cardiovascularInstabilitytype ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014004 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/CardiacInstabilityType))"

* procedureInformation.cathLabVisit.ventricularSupport 0..* string "Ventricular Support" "Indicate if the patient required any type of ventricular support (i.e. IV vasopressors or mechanical)."
* procedureInformation.cathLabVisit.ventricularSupport ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.ventricularSupport ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.ventricularSupport ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001276 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/VentricularSupport))"

* procedureInformation.cathLabVisit.pharmacologicVasopressorSupport 0..* string "Pharmacologic Vasopressor Support" "Indicate if the patient required pharmacologic vasopressor support."
* procedureInformation.cathLabVisit.pharmacologicVasopressorSupport ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.pharmacologicVasopressorSupport ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.pharmacologicVasopressorSupport ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001277 and valueBoolen.exists())"

* procedureInformation.cathLabVisit.mechanicalVentricularSupportTiming 0..* string "Mechanical Ventricular Support Timing" "Indicate when the mechanical ventricular support device was placed."
* procedureInformation.cathLabVisit.mechanicalVentricularSupportTiming ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.mechanicalVentricularSupportTiming ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.mechanicalVentricularSupportTiming ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001277 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/MechanicalVentricularSupportTiming))"

* procedureInformation.cathLabVisit.evaluationForSurgeryType 0..* string "Evaluation for Surgery Type" "Indicate the type of surgery for which the diagnostic coronary angiography is being performed."
* procedureInformation.cathLabVisit.evaluationForSurgeryType ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.evaluationForSurgeryType ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.evaluationForSurgeryType ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014009 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/MechanicalVentricularSupportTiming))"

* procedureInformation.cathLabVisit.functionalCapacity 1..* string "Functional Capacity" "Indicate the functional capacity of the patient as documented by the physician in the medical record."
* procedureInformation.cathLabVisit.functionalCapacity ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.functionalCapacity ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.functionalCapacity ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142418 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/FunctionalCapacity))"

* procedureInformation.cathLabVisit.surgicalRisk 0..* string "Surgical Risk" "Indicate the surgical risk category as documented by the physician in the medical record."
* procedureInformation.cathLabVisit.surgicalRisk ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.surgicalRisk ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.surgicalRisk ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142420 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/SurgicalRisk))"

* procedureInformation.cathLabVisit.solidOrganTransplantdonor  0..* string "Instance and Type of Organ Donor"
* procedureInformation.cathLabVisit.solidOrganTransplantdonor ^mapping[+].identity = "FHIR"
* procedureInformation.cathLabVisit.solidOrganTransplantdonor ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.solidOrganTransplantdonor ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/OrganDonor) or code.coding.code = '51032003')"
* procedureInformation.cathLabVisit.solidOrganTransplantdonor ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.solidOrganTransplantdonor ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.solidOrganTransplantdonor ^mapping[=].map = "Observation"

* procedureInformation.cathLabVisit.valvularDiseaseStenosis   0..* string "Valvular Disease Stenosis" "Indicate the severity and cardiac valve(s) with stenosis as diagnosed by the physician."
* procedureInformation.cathLabVisit.valvularDiseaseStenosis ^mapping[+].identity = "FHIR"
* procedureInformation.cathLabVisit.valvularDiseaseStenosis ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.valvularDiseaseStenosis ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ValvularStenosis))"
* procedureInformation.cathLabVisit.valvularDiseaseStenosis ^mapping[+].identity = "FHIR"
* procedureInformation.cathLabVisit.valvularDiseaseStenosis ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.valvularDiseaseStenosis ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ValvularStenosis))"
* procedureInformation.cathLabVisit.valvularDiseaseStenosis ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.valvularDiseaseStenosis ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.valvularDiseaseStenosis ^mapping[=].map = "Observation.where(Observation.valueCodeableConcept.exists() or Observation.valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ValvularDiseaseStenosisSeverity)"


* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation 0..* string "Valvular Disease Stenosis"
* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation ^mapping[+].identity = "FHIR"
* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ValvularStenosis))"
* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation ^mapping[+].identity = "FHIR"
* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ValvularStenosis))"
* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation ^mapping[=].map = "Observation.where(Observation.valueCodeableConcept.exists() or Observation.valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ValvularDiseaseRegurgitationSeverity)"

* procedureInformation.coronaryAnatomy 1..1 BackboneElement "Coronary Anatomy"

* procedureInformation.coronaryAnatomy.nativeVessel 1..1 BackboneElement "Native Vessel"

* procedureInformation.coronaryAnatomy.nativeVessel.lesionSegmentNumber 0..* string "Native Lesion Segment Number"
* procedureInformation.coronaryAnatomy.nativeVessel.lesionSegmentNumber ^mapping[+].identity = "Output"
* procedureInformation.coronaryAnatomy.nativeVessel.lesionSegmentNumber ^mapping[=].language = #application/fhir
* procedureInformation.coronaryAnatomy.nativeVessel.lesionSegmentNumber ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012984 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/LesionSegmentNumber)"

* procedureInformation.coronaryAnatomy.nativeVessel.coronaryVesselStenosis 0..* string "Coronary Vessel Stenosis" "Indicate the best estimate of the most severe percent stenosis in the segment of the native coronary vessel identified."
* procedureInformation.coronaryAnatomy.nativeVessel.coronaryVesselStenosis ^mapping[+].identity = "Output"
* procedureInformation.coronaryAnatomy.nativeVessel.coronaryVesselStenosis ^mapping[=].language = #application/fhir
* procedureInformation.coronaryAnatomy.nativeVessel.coronaryVesselStenosis ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012981 and valueQuantity.exists())"

* procedureInformation.coronaryAnatomy.nativeVessel.adjunctiveMeasurementsObtained 0..* string "Adjunctive Measurements Obtained" "Indicate if an invasive diagnostic measurement was obtained of the native vessel segment."
* procedureInformation.coronaryAnatomy.nativeVessel.adjunctiveMeasurementsObtained ^mapping[+].identity = "Output"
* procedureInformation.coronaryAnatomy.nativeVessel.adjunctiveMeasurementsObtained ^mapping[=].language = #application/fhir
* procedureInformation.coronaryAnatomy.nativeVessel.adjunctiveMeasurementsObtained ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012979 and valueBoolean.exists()"

* procedureInformation.coronaryAnatomy.nativeVessel.instantaneousWaveFreeRatio 0..* string "Instantaneous Wave-Free Ratio" "Indicate the instantaneous wave-free ratio (iFR ratio) of the native vessel segment."
* procedureInformation.coronaryAnatomy.nativeVessel.instantaneousWaveFreeRatio ^mapping[+].identity = "Output"
* procedureInformation.coronaryAnatomy.nativeVessel.instantaneousWaveFreeRatio ^mapping[=].language = #application/fhir
* procedureInformation.coronaryAnatomy.nativeVessel.instantaneousWaveFreeRatio ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012980 and valueBoolean.exists())"

* procedureInformation.coronaryAnatomy.graftVessel 1..1 BackboneElement "Graft Vessel"

* procedureInformation.coronaryAnatomy.graftVessel.lesionSegmentNumber  0..* string "Graft Lesion Segment Number"
* procedureInformation.coronaryAnatomy.graftVessel.lesionSegmentNumber ^mapping[+].identity = "Output"
* procedureInformation.coronaryAnatomy.graftVessel.lesionSegmentNumber ^mapping[=].language = #application/fhir
* procedureInformation.coronaryAnatomy.graftVessel.lesionSegmentNumber ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012984 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/LesionSegmentNumber))"

* procedureInformation.coronaryAnatomy.graftVessel.coronaryVesselStenosis 0..* string "Coronary Vessel Stenosis" "Indicate the best estimate of the most severe percent stenosis in the segment of the graft coronary vessel identified."
* procedureInformation.coronaryAnatomy.graftVessel.coronaryVesselStenosis ^mapping[+].identity = "Output"
* procedureInformation.coronaryAnatomy.graftVessel.coronaryVesselStenosis ^mapping[=].language = #application/fhir
* procedureInformation.coronaryAnatomy.graftVessel.coronaryVesselStenosis ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012982 and valueQuantity.exists())"

* procedureInformation.coronaryAnatomy.graftVessel.cabg 0..1 string "Graft Vessel CABG" "Indicate the vessel that was used for the coronary artery bypass graft."
* procedureInformation.coronaryAnatomy.graftVessel.cabg ^mapping[+].identity = "Output"
* procedureInformation.coronaryAnatomy.graftVessel.cabg ^mapping[=].language = #application/fhir
* procedureInformation.coronaryAnatomy.graftVessel.cabg ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012983 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/GraftVesselCABGVessel))"

* procedureInformation.coronaryAnatomy.graftVessel.adjunctiveMeasurementsObtained 0..1 string "Adjunctive Measurements Obtained" "Indicate if an invasive diagnostic measurement was obtained of the graft vessel intra-procedure."
* procedureInformation.coronaryAnatomy.graftVessel.adjunctiveMeasurementsObtained ^mapping[+].identity = "Output"
* procedureInformation.coronaryAnatomy.graftVessel.adjunctiveMeasurementsObtained ^mapping[=].language = #application/fhir
* procedureInformation.coronaryAnatomy.graftVessel.adjunctiveMeasurementsObtained ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012982 and valueBoolean.exists())"

* procedureInformation.coronaryAnatomy.graftVessel.instantaneousWaveFreeRatio  0..* string "Instantaneous Wave Free Ratio" "Indicate the instantaneous wave-free ratio (iFR ratio) of the graft vessel segment."
* procedureInformation.coronaryAnatomy.graftVessel.instantaneousWaveFreeRatio ^mapping[+].identity = "Output"
* procedureInformation.coronaryAnatomy.graftVessel.instantaneousWaveFreeRatio ^mapping[=].language = #application/fhir
* procedureInformation.coronaryAnatomy.graftVessel.instantaneousWaveFreeRatio ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012980 and valueBoolean.exists())"

* procedureInformation.pciProcedure 1..1 BackboneElement "information regarding the PCI Procedure"

* procedureInformation.pciProcedure.pciStatus 0..* string "PCI Status" "Indicate the status of the PCI. The status is determined at the time the operator decides to perform a PCI."
* procedureInformation.pciProcedure.pciStatus ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.pciStatus ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.pciStatus ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012986 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PCIStatus))"

* procedureInformation.pciProcedure.hypothermiaInduced 0..* string "Hypothermia Induced Timing" "Indicate when hypothermia was initiated."
* procedureInformation.pciProcedure.hypothermiaInduced ^mapping[+].identity = "FHIR"
* procedureInformation.pciProcedure.hypothermiaInduced ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.hypothermiaInduced ^mapping[=].map = "Procedure.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/HypothermiaInduced))"
* procedureInformation.pciProcedure.hypothermiaInduced ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.hypothermiaInduced ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.hypothermiaInduced ^mapping[=].map = "Procedure.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013039 and valueDateTime.exists())"

* procedureInformation.pciProcedure.decisionForPciWithSurgicalConsult 1..* string "Decision for PCI with Surgical Consult" "Indicate if a cardiac surgical consult was obtained prior to engaging in PCI."
* procedureInformation.pciProcedure.decisionForPciWithSurgicalConsult ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.decisionForPciWithSurgicalConsult ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.decisionForPciWithSurgicalConsult ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142366 and valueBoolean.exists())"

* procedureInformation.pciProcedure.cardiovascularTreatmentDecision 1..* string "Cardiovascular Treatment Decision" "Indicate the cardiovascular surgery recommendation and/or patient/family decision."
* procedureInformation.pciProcedure.cardiovascularTreatmentDecision ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.cardiovascularTreatmentDecision ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.cardiovascularTreatmentDecision ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142367 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/CardiovascularTreatmentDecision))"


* procedureInformation.pciProcedure.pciForMultivesselDisease  1..* string "PCI for MultiVessel Disease" "Indicate if the PCI procedure was performed in the presence of multi-vessel disease."
* procedureInformation.pciProcedure.pciForMultivesselDisease ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.pciForMultivesselDisease ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.pciForMultivesselDisease ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013007 and valueBoolean.exists())"


* procedureInformation.pciProcedure.multiVesselProcedureType  0..* string "Multi-vessel Procedure Type" "Indicate the type of multi-vessel PCI procedure that was performed during this lab visit."
* procedureInformation.pciProcedure.multiVesselProcedureType ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.multiVesselProcedureType ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.multiVesselProcedureType ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013008 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/MultivesselProcedureType))"

* procedureInformation.pciProcedure.percutaneousCoronaryInterventionIndication 1..* string "Percutaneous Coronary Intervention Indication" "Indicate the reason the percutaneous coronary intervention PCI is being performed."
* procedureInformation.pciProcedure.percutaneousCoronaryInterventionIndication ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.percutaneousCoronaryInterventionIndication ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.percutaneousCoronaryInterventionIndication ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100000880 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PCIIndications))"

* procedureInformation.pciProcedure.acuteCoronarySyndromeSymptom 1..* string "Acute Coronary Syndrome Symptom" "Acute Coronary Syndrome Symptom"
* procedureInformation.pciProcedure.acuteCoronarySyndromeSymptom ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.acuteCoronarySyndromeSymptom ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.acuteCoronarySyndromeSymptom ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013003 and valueDateTime.exists())"

* procedureInformation.pciProcedure.syntaxScore 1..1 string "Syntax Score" "Indicate the Syntax Score for the PCI procedure."
* procedureInformation.pciProcedure.syntaxScore ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.syntaxScore ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.syntaxScore ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=10001424796 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/SyntaxScore))"

* procedureInformation.pciProcedure.stemiOrStemiEquivalentFirstNoted  0..1 string "STEMI or STEMI Equivalent First Noted" "Indicate if a STEMI or STEMI equivalent was noted on either the first ECG or a subsequent ECG."
* procedureInformation.pciProcedure.stemiOrStemiEquivalentFirstNoted ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.stemiOrStemiEquivalentFirstNoted ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.stemiOrStemiEquivalentFirstNoted     ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100000180 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/STEMIFirstNoted))"

* procedureInformation.pciProcedure.subsequentEcgWithStemiOrStemiEquivalent  0..1 string "Subsequent ECG with STEMI or STEMI Equivalent" "Indicate the Subsequent ECG date and time."
* procedureInformation.pciProcedure.subsequentEcgWithStemiOrStemiEquivalent ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.subsequentEcgWithStemiOrStemiEquivalent ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.subsequentEcgWithStemiOrStemiEquivalent ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012995 and valueDateTime.exists())"

* procedureInformation.pciProcedure.subsequentEcgObtainedInEmergencyDepartment 0..1 string "Subsequent ECG obtained in Emergency Department" "Indicate if the subsequent ECG was obtained in the Emergency Department at this facility."
* procedureInformation.pciProcedure.subsequentEcgObtainedInEmergencyDepartment ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.subsequentEcgObtainedInEmergencyDepartment ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.subsequentEcgObtainedInEmergencyDepartment ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012995 and valueBoolean.exists())"

* procedureInformation.pciProcedure.patientTransferredInForImmediatePciForStemi 0..1 string "Patient Transferred In for Immediate PCI for STEMI" "Indicate if the patient was transferred from another facility to have a primary PCI for STEMI at this facility."
* procedureInformation.pciProcedure.patientTransferredInForImmediatePciForStemi ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.patientTransferredInForImmediatePciForStemi ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.patientTransferredInForImmediatePciForStemi ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014084 and valueBoolean.exists())"

* procedureInformation.pciProcedure.emergencyDepartmentPresentationAtReferringFacility 0..1 string "Emergency Department Presentation at Referring Facility" "Code the date and time of arrival to the original, transferring facility as documented in the medical record."
* procedureInformation.pciProcedure.emergencyDepartmentPresentationAtReferringFacility ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.emergencyDepartmentPresentationAtReferringFacility ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.emergencyDepartmentPresentationAtReferringFacility ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012999 and valueDateTime.exists())"

* procedureInformation.pciProcedure.firstDeviceActivation 0..1 string "First Device Activation" "Indicate the date and time the first device was activated regardless of type of device used."
* procedureInformation.pciProcedure.firstDeviceActivation ^comment = """
Use the earliest time from the following:
1. Time of the first balloon inflation.
2. Time of the first stent deployment.
3. Time of the first treatment of lesion (AngjoJet or other thrombectomy/aspiration device, laser, rotational atherectomy).
4. If the lesion cannot be crossed with a guidewire or device (and thus none of the above apply), use the time of guidewire introduction.
This is a process measure about the timeliness of treatment. It is NOT a clinical outcomes measure based on TIMI flow or clinical reperfusion. It does not matter whether the baseline angiogram showed TIMI 3 flow or if the final post-PCI angiogram showed TIMI 0 flow. What is being measured is the time of the first mechanical treatment of the culprit lesion, not the time when TIMI 3 flow was (or was not) restored.
""" 
* procedureInformation.pciProcedure.firstDeviceActivation ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.firstDeviceActivation ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.firstDeviceActivation ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012993 and valueDateTime.exists())"

* procedureInformation.pciProcedure.patientCenteredReasonForDelayInPci 0..1 string "Patient Centered Reason for Delay in PCI" "Indicate the patient-centered reason for delay in performing the percutaneous coronary intervention (PCI), if needed."
* procedureInformation.pciProcedure.patientCenteredReasonForDelayInPci ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.patientCenteredReasonForDelayInPci ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.patientCenteredReasonForDelayInPci ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012993 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PatientCenteredReasonforDelay))"

* procedureInformation.pciProcedure.pciOperator 1..1 string "PCI Operator" "The operator who is performing the PCI procedure"
* procedureInformation.pciProcedure.pciOperator ^mapping[+].identity = "FHIR"
* procedureInformation.pciProcedure.pciOperator ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.pciOperator ^mapping[=].map = "%Procedure.participant.where( function.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PCIOperator) ).actor.resolve()"
* procedureInformation.pciProcedure.pciOperator ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.pciOperator ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.pciOperator ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"

* procedureInformation.pciProcedure.arterialAccessSite 1..1 string "Arterial Access Site" "Indicate the location of percutaneous entry for the procedure."
* procedureInformation.pciProcedure.arterialAccessSite ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.arterialAccessSite ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.arterialAccessSite ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014079 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ArterialAccessSite))"

* procedureInformation.pciProcedure.mechanicalVentilatorSupport 1..1 string "Mechanical Ventricular Support" "Indicate if the patient required mechanical ventricular support."
* procedureInformation.pciProcedure.mechanicalVentilatorSupport ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.mechanicalVentilatorSupport ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.mechanicalVentilatorSupport ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014009 and valueBoolean.exists())"

* procedureInformation.pciProcedure.mechanicalVentilatorSupportDevice 0..* string "Mechanical Ventricular Support Device" "Indicate the mechanical ventricular support device used."
* procedureInformation.pciProcedure.mechanicalVentilatorSupportDevice ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.mechanicalVentilatorSupportDevice ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.mechanicalVentilatorSupportDevice ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001278 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/VentricularSupportDeviceType))"

* procedureInformation.pciProcedure.pciProcedureMedicationCode 0..* string "PCI Procedure Medication Code" "Medications administred intra-procedure"
* procedureInformation.pciProcedure.pciProcedureMedicationCode ^mapping[+].identity = "FHIR"
* procedureInformation.pciProcedure.pciProcedureMedicationCode ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.pciProcedureMedicationCode ^mapping[=].map = "MedicationStatement.where(effectiveDateTime >= %procedure.period.start and effectiveDateTime <= %procedure.period.end)"
* procedureInformation.pciProcedure.pciProcedureMedicationCode ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.pciProcedureMedicationCode ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.pciProcedureMedicationCode ^mapping[=].map = "MedicationStatement"

* procedureInformation.pciProcedure.lesionsAndDevices 1..1 BackboneElement "Information on the Lesions treated and Devices Used"

* procedureInformation.pciProcedure.lesionsAndDevices.lesionCounter 0..* string "Lesion Counter" "The lesion counter is used to distinguish between multiple lesions on which a PCI is attempted or performed."
* procedureInformation.pciProcedure.lesionsAndDevices.lesionCounter ^comment = """When specifying intracoronary devices, list all treated lesions in which the device was utilized.
The software-assigned lesion counter should start at one and be incremented by one for each lesion. The lesion counter is reset back to one for each new PCI lab visit.
At least one lesion must be specified for each PCI procedure.""" 
* procedureInformation.pciProcedure.lesionsAndDevices.lesionCounter ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.lesionCounter ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.lesionCounter ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142441 and valueQuantity.exists())"

//Note: This is a possible multi-code, Observation only holds one value.  Would need to put answers in .component
* procedureInformation.pciProcedure.lesionsAndDevices.nativeLesionSegmentNumber 0..* string "Native Lesion Segment Number" "Indicate the segment that the current lesion spans." 
* procedureInformation.pciProcedure.lesionsAndDevices.nativeLesionSegmentNumber ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.nativeLesionSegmentNumber ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.nativeLesionSegmentNumber ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012984 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/LesionSegmentNumber))"

* procedureInformation.pciProcedure.lesionsAndDevices.culpritStenosis 1..1 string "Culprit Stenosis" "Indicate if the stenosis is considered to be responsible for the acute coronary syndrome."
* procedureInformation.pciProcedure.lesionsAndDevices.culpritStenosis ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.culpritStenosis ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.culpritStenosis ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=371895000 and valueBoolean.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.stenosisImmediatelyPriorToTreatment 0..* string "Stenosis Immediately Prior to Treatment" "Indicate the percent diameter stenosis immediately prior to the treatment of this lesion."
* procedureInformation.pciProcedure.lesionsAndDevices.stenosisImmediatelyPriorToTreatment ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.stenosisImmediatelyPriorToTreatment ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.stenosisImmediatelyPriorToTreatment ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142442 and valueQuantity.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.chronicTotalOcclusion 1..1 string "Chronic Total Occlusion" "Indicate if the segment with 100% pre-procedure stenosis was presumed to be 100% occluded for at least 3 months previous to this procedure AND not related to a clinical event prompting (or leading to) this procedure."
* procedureInformation.pciProcedure.lesionsAndDevices.chronicTotalOcclusion ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.chronicTotalOcclusion ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.chronicTotalOcclusion ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100000290 and valueBoolean.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.timiFlowPreIntervention 0..* string "TIMI Flow (Pre-Intervention)" "Indicate the pre-intervention TIMI flow."
* procedureInformation.pciProcedure.lesionsAndDevices.timiFlowPreIntervention ^comment = "If a lesion spans multiple segments with different TIMI flow, code the lowest TIMI flow within the entire lesion."
* procedureInformation.pciProcedure.lesionsAndDevices.timiFlowPreIntervention ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.timiFlowPreIntervention ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.timiFlowPreIntervention ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=112000000348 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/TIMIFlow))"

* procedureInformation.pciProcedure.lesionsAndDevices.previouslyTreatedLesion 0..1 string "Previously Treated Lesion" "Indicate the date the lesion has been treated in a prior episode of care."
* procedureInformation.pciProcedure.lesionsAndDevices.previouslyTreatedLesion ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.previouslyTreatedLesion ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.previouslyTreatedLesion ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013015 and valueDateTime.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.inStentRestenosis 0..1 string "In-stent Restenosis" "Indicate if the previously treated and stented lesion is being treated for in-stent restenosis."
* procedureInformation.pciProcedure.lesionsAndDevices.inStentRestenosis ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.inStentRestenosis ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.inStentRestenosis ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013014 and valueBoolean.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.inStentThrombosis 0..1 string "In-stent Thrombosis" "Indicate if the previously treated and stented lesion is being treated because of the presence of a thrombus in the stent."
* procedureInformation.pciProcedure.lesionsAndDevices.inStentThrombosis ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.inStentThrombosis ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.inStentThrombosis ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013014 and valueBoolean.exists())"


* procedureInformation.pciProcedure.lesionsAndDevices.stentType  0..1 string "Stent Type" "Indicate the type of stent used in the previously treated lesion."
* procedureInformation.pciProcedure.lesionsAndDevices.stentType ^comment = """
 If a patient has multiple stents in the lesion code 'bioabsorbable' over either of the other two options when it is present.  
If a DES and BMS are present in the lesion, code 'DES'."""
* procedureInformation.pciProcedure.lesionsAndDevices.stentType ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.stentType ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.stentType ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100000856 and valueCodableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/StentType))"

* procedureInformation.pciProcedure.lesionsAndDevices.lesionInGraft 0..1 string "Lesion In Graft" "Indicated if the lesion is in a coronary artery bypass graft."
* procedureInformation.pciProcedure.lesionsAndDevices.lesionInGraft ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.lesionInGraft ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.lesionInGraft ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142443 and valueBoolean.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.typeOfCabgGraft  0..1 string "Type of CABG Graft" "Indicate in which type of bypass graft the lesion is located."
* procedureInformation.pciProcedure.lesionsAndDevices.typeOfCabgGraft ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.typeOfCabgGraft ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.typeOfCabgGraft ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013028 and valueCodableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/CABGType))"
 
* procedureInformation.pciProcedure.lesionsAndDevices.locationInGraft 0..1 string "Location in Graft" "Indicate the location of the most severe stenosis, if the lesion is in the graft."
* procedureInformation.pciProcedure.lesionsAndDevices.locationInGraft ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.locationInGraft ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.locationInGraft ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013028 and valueCodableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/LocationInGraft))"

* procedureInformation.pciProcedure.lesionsAndDevices.navigateThroughGraftToNativeLesion 0..1 string "Navigate through Graft to Native Lesion" "Indicate if treatment of the native artery lesion required navigating through a graft (to reach the lesion)."
* procedureInformation.pciProcedure.lesionsAndDevices.navigateThroughGraftToNativeLesion ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.navigateThroughGraftToNativeLesion ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.navigateThroughGraftToNativeLesion ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142348 and valueBoolean.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.lesionComplexity  0..1 string "Lesion Complexity" "Indicate the complexity of the lesion"
* procedureInformation.pciProcedure.lesionsAndDevices.lesionComplexity ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.lesionComplexity ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.lesionComplexity ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100000866 and valueCodableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/LesionComplexity))"


* procedureInformation.pciProcedure.lesionsAndDevices.lesionLength  0..1 string "Lesion Length"  "Indicate the length of the treated lesion in millimeters."
* procedureInformation.pciProcedure.lesionsAndDevices.lesionLength ^comment = """If the lesion length is not available it is acceptable to code the length of the device used to treat the lesion.  

If multiple devices are used sequentially, total the individual device lengths.

Information obtained after the baseline angiogram can be used to help determine lesion length (e.g. for total occlusions where the distal vessel can not be visualized)."""
* procedureInformation.pciProcedure.lesionsAndDevices.lesionLength ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.lesionLength ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.lesionLength ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013030 and valueQuantity.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.severeCalcification  0..1 string "Severe Calcification" "Indicate if there was severe calcification of the lesion."
* procedureInformation.pciProcedure.lesionsAndDevices.severeCalcification ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.severeCalcification ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.severeCalcification ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142350 and valueBoolean.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.guidewireAcrossLesion   0..1 string "Guidewire Across Lesion" "Indicate if a guidewire successfully crossed the lesion."
* procedureInformation.pciProcedure.lesionsAndDevices.guidewireAcrossLesion ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.guidewireAcrossLesion ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.guidewireAcrossLesion ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100000851 and valueBoolean.exists())"


* procedureInformation.pciProcedure.lesionsAndDevices.deviceDeployed  0..1 string "Device Deployed" "Indicate if a device was deployed during the procedure."
* procedureInformation.pciProcedure.lesionsAndDevices.deviceDeployed ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.deviceDeployed ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.deviceDeployed ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142349 and valueBoolean.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.postInterventionStenosis  0..1 string "Stenosis (Post-Intervention)" "Indicate the post-intervention percent stenosis for the treated lesion."
* procedureInformation.pciProcedure.lesionsAndDevices.postInterventionStenosis ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.postInterventionStenosis ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.postInterventionStenosis ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142461 and valueQuantity.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.postInterventionTimiFlow  0..1 string "TIMI Flow (Post-Intervention)" "Indicate the post-intervention TIMI flow."
* procedureInformation.pciProcedure.lesionsAndDevices.postInterventionTimiFlow ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.postInterventionTimiFlow ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.postInterventionTimiFlow ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013016 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/TIMIFlow))"

* procedureInformation.pciProcedure.intracoronaryDevices 1..1 BackboneElement "Devices used during the PCI procedure"

* procedureInformation.pciProcedure.intracoronaryDevices.device 0..1 string "Intracoronary Device(s) Used" "Indicate the devices utilized during the current procedure."
* procedureInformation.pciProcedure.intracoronaryDevices.device ^mapping[+].identity = "FHIR"
* procedureInformation.pciProcedure.intracoronaryDevices.device ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.intracoronaryDevices.device ^mapping[=].map = "Procedure.focalDevice.manipulated.resolve().memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/CardiacCatheter)"
* procedureInformation.pciProcedure.intracoronaryDevices.device ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.intracoronaryDevices.device ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.intracoronaryDevices.device ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-implantable-device"


//* procedureInformation.pciProcedure.intracoronaryDevices.associatedLesion  How to indicate multiple components?

* procedureInformation.pciProcedure.intraAndPostProcedureEvents 1..1 BackboneElement "Events occuring Intra and post-procedure"

* procedureInformation.pciProcedure.intraAndPostProcedureEvents.event 0..1 string "Intra/Post-Procedure Events" "Indicate the event that occurred between the procedure and the next procedure or discharge."
* procedureInformation.pciProcedure.intraAndPostProcedureEvents.event ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.intraAndPostProcedureEvents.event ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.intraAndPostProcedureEvents.event ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142478 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/IntraAndPostEvents) and effectiveDateTime.exists())"

* procedureInformation.pciProcedure.intraAndPostProcedureEvents.significantCoronaryArteryDissection  0..1 string "Significant Coronary Artery Dissection" "Indicate the post-intervention TIMI flow."
* procedureInformation.pciProcedure.intraAndPostProcedureEvents.significantCoronaryArteryDissection ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.intraAndPostProcedureEvents.significantCoronaryArteryDissection ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.intraAndPostProcedureEvents.significantCoronaryArteryDissection ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100000883 and valueBoolean.exists())"

* procedureInformation.pciProcedure.intraAndPostProcedureEvents.numberOfUnitsOfPrbcsTransfused 0..1 string "Number of units of PRBCs transfused" "Indicate the number of transfusion(s) of packed red blood cells."
* procedureInformation.pciProcedure.intraAndPostProcedureEvents.numberOfUnitsOfPrbcsTransfused ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.intraAndPostProcedureEvents.numberOfUnitsOfPrbcsTransfused ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.intraAndPostProcedureEvents.numberOfUnitsOfPrbcsTransfused ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014031 and valueQuantity.exists()) and effectiveDateTime.exists()"

* discharge 1..1 BackboneElement "Discharge Information"

* discharge.interventionsThisHospitalization 0..1 string "Interventions This Hospitalization" "Indicate other interventions (percutaneous or surgical) that occurred during this hospitalization."
* discharge.interventionsThisHospitalization ^mapping[+].identity = "Output"
* discharge.interventionsThisHospitalization ^mapping[=].language = #application/fhir
* discharge.interventionsThisHospitalization ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001284 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/InterventionTypes)"

* discharge.cabgStatus 0..1 string "CABG Status" "Indicate the status of the coronary artery bypass graft (CABG) surgery."
* discharge.cabgStatus ^mapping[+].identity = "Output"
* discharge.cabgStatus ^mapping[=].language = #application/fhir
* discharge.cabgStatus ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014080 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/CABGStatus)"

* discharge.cabgIndication 0..1 string "CABG Indication" "Indicate the reason coronary artery bypass graft (CABG) surgery is being performed."
* discharge.cabgStatus ^mapping[+].identity = "Output"
* discharge.cabgStatus ^mapping[=].language = #application/fhir
* discharge.cabgStatus ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001289 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/CABGIndication)"

* discharge.dischargeProvider 1..1 string "Discharge Provider" "Provider that discharged the patient"
* discharge.dischargeProvider ^mapping[+].identity = "FHIR"
* discharge.dischargeProvider ^mapping[=].language = #application/fhir
* discharge.dischargeProvider ^mapping[=].map = "Encounter.where(type.code.coding.code=58000006).participant.individual.resolve()"
* discharge.dischargeProvider ^mapping[+].identity = "Output"
* discharge.dischargeProvider ^mapping[=].language = #application/fhir
* discharge.dischargeProvider ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"
 
* discharge.transferredForCabg 0..1 string "Transferred for CABG" "Indicate if the patient was transferred for the purpose of performing a coronary artery bypass graft."
* discharge.transferredForCabg ^mapping[+].identity = "Output"
* discharge.transferredForCabg ^mapping[=].language = #application/fhir
* discharge.transferredForCabg ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001296 and valueBoolean.exists())"

* discharge.cabgPlannedAfterDischarge 0..1 string "CABG Planned after Discharge" "Indicate if the patient has a CABG planned after discharge."
* discharge.cabgPlannedAfterDischarge ^mapping[+].identity = "Output"
* discharge.cabgPlannedAfterDischarge ^mapping[=].language = #application/fhir
* discharge.cabgPlannedAfterDischarge ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=10001424792 and valueBoolean.exists())"

* discharge.cardiacRehabilitationReferral 0..1 string "Cardiac Rehabilitation Referral" "Indicate if there was written documentation of a referral for the patient (by the physician, nurse, or other personnel) to an outpatient cardiac rehabilitation program, or a documented medical or patient-centered reason why such a referral was not made."
* discharge.cardiacRehabilitationReferral ^mapping[+].identity = "Output"
* discharge.cardiacRehabilitationReferral ^mapping[=].language = #application/fhir
* discharge.cardiacRehabilitationReferral ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014067 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/CardiacRehabilitationReferral))"

* discharge.deathDuringTheProcedure 0..1 string "Death During the Procedure" "Indicate if the patient expired during the procedure."
* discharge.deathDuringTheProcedure ^comment = """Make sure to only capture 'Death during the procedure' in the procedure appropriate registry. 
For example, if the patient had a CathPCI procedure and a TVT procedure in the same episode of care (hospitalization) but different cath lab visits and the death occurred during the TVT procedure.
Code 'Yes' only in the TVT Registry and not the CathPCI Registry.  If the CathPCI procedure and TVT procedure occurred during the same cath lab visit then code 'Yes' in both registries."""
* discharge.deathDuringTheProcedure ^mapping[+].identity = "Output"
* discharge.deathDuringTheProcedure ^mapping[=].language = #application/fhir
* discharge.deathDuringTheProcedure ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014067 and valueBoolean.exists())"

* discharge.dischargeMedicationReconciliationCompleted 0..1 string "Discharge Medication Reconciliation Completed" "Indicate if the medication reconciliation was completed as recommended by the Joint Commission's National Patient Safety Goals."
* discharge.dischargeMedicationReconciliationCompleted ^mapping[+].identity = "Output"
* discharge.dischargeMedicationReconciliationCompleted ^mapping[=].language = #application/fhir
* discharge.dischargeMedicationReconciliationCompleted ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013084 and valueBoolean.exists())"

* discharge.dischargeMedicationsReconciled 0..* string "Discharge Medications Reconciled" "Indicate the specific medication classes that were reconciled."
* discharge.dischargeMedicationsReconciled ^mapping[+].identity = "Output"
* discharge.dischargeMedicationsReconciled ^mapping[=].language = #application/fhir
* discharge.dischargeMedicationsReconciled ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013085 and valueBoolean.exists())"

---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/Cath-PCI-SD-Example.fsh

Logical: Example_Submission_map
Id: ExampleMap
Title: "Example Submission Map"
Description: """This is an example of the data that would be used for a Resgistry Submission.
The full map is a logical model as that allows conformance to the FHIR Standard the way a custom Resource would not.
Each element has the short name of the data, a full description and the paths to fetch and place the information, by data standard type, for each.
A section (such as Demographics) is a BackboneElement (holds no values).  All subordinate elements are strings.
Each mapping includes the following:
* identity = standard used for the mapping (e.g., FHIR)
* language = mime type that matches identity
* map = FHIRPath expression of the path to the data
* comment = *Output mapping only* Resource/Profile for inclusion in the Submission Bundle
"""
// * ^baseDefinition = "http://hl7.org/fhir/StructureDefinition/base"
* ^version = "5.0"
* ^identifier.use = #official
* ^date = "2021-11-01"
* ^publisher = "Example Registry"
* ^contact.name = "Jane Smith"
* ^contact.telecom.system = #email
* ^contact.telecom.value = "mailto:noreply@example.org"
* ^kind = #logical
//Mappings so that things show up in the mappings page on the IG
* ^mapping[+].identity = "FHIR"
* ^mapping[=].uri = "http://fhir.hl7.org"
* ^mapping[=].name = "Fast Health Interoperability Resources"
* ^mapping[=].comment = "Path to where in a FHIR Resource the data element is found"
* ^mapping[+].identity = "CDA"
* ^mapping[=].uri = "http://build.fhir.org/ig/HL7/cda-core-2.0/"
* ^mapping[=].name = "Clinical Document Architecture"
* ^mapping[=].comment = "Path to where in a CDA 2.0/CCDA 2.1 Document the data element is found"
* ^mapping[+].identity = "HL7V2"
* ^mapping[=].uri = "http://www.hl7.eu/refactored/index.html"
* ^mapping[=].name = "HL7 V2 Messages"
* ^mapping[=].comment = "Path to where in a HL7 V2 Message the data element is found"
* ^mapping[+].identity = "Output"
* ^mapping[=].uri = "http://hl7.org/fhir/us/core"
* ^mapping[=].name = "Submission Data Output location"
* ^mapping[=].comment = "Location within the requirements profile to place the data for submission in US Core or FHIR Core Resources"

* demographics 1..1 BackboneElement "Patient Demographics"

* demographics.lastName 1..1 string "Last Name" "Indicate the patient's last name. Hyphenated names should be recorded with a hyphen."
* demographics.lastName ^mapping[+].identity = "FHIR" // Always "Source Standard"
* demographics.lastName ^mapping[=].language = #application/fhir // mimetype of standard 
* demographics.lastName ^mapping[=].map = "Patient.name.family" // actual Xpath to data 
* demographics.lastName ^mapping[+].identity = "CDA"
* demographics.lastName ^mapping[=].language = #application/hl7-sda+xml // actual registered mimetype
* demographics.lastName ^mapping[=].map = "ClinicalDocument.recordTarget.patient.name.family"
* demographics.lastName ^mapping[+].identity = "HL7V2"
* demographics.lastName ^mapping[=].language = #application/edi-hl7v2 // discussed in InM but I don"t know if it was registered
* demographics.lastName ^mapping[=].map = "ADT_A01.PID.5.1" 
* demographics.lastName ^mapping[+].identity = "Output"
* demographics.lastName ^mapping[=].language = #application/fhir // output is always FHIR 
* demographics.lastName ^mapping[=].map = "Patient.name.family" // actual Xpath to data within profile in requirements
* demographics.lastName ^mapping[=].comment = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient.name.family" // profile for Bundle inclusion

* demographics.firstName 1..1 string "First Name" "Indicate the patient's first name."
* demographics.firstName ^mapping[+].identity = "FHIR"
* demographics.firstName ^mapping[=].language = #application/fhir
* demographics.firstName ^mapping[=].map = "Patient.name.given[0]"
* demographics.firstName ^mapping[+].identity = "CDA"
* demographics.firstName ^mapping[=].language = #application/hl7-sda+xml
* demographics.firstName ^mapping[=].map = "ClinicalDocument.recordTarget.patient.name.given[1]"
* demographics.firstName ^mapping[+].identity = "HL7V2"
* demographics.firstName ^mapping[=].language = #application/edi-hl7v2
* demographics.firstName ^mapping[=].map = "ADT_A01.PID.5.2"
* demographics.firstName ^mapping[+].identity = "Output"
* demographics.firstName ^mapping[=].language = #application/fhir 
* demographics.firstName ^mapping[=].map = "Patient.name.given" 
* demographics.firstName ^mapping[=].comment = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient.name.given[0]"

* demographics.middleName 0..* string "Middle Name" "Indicate the patient's middle names."
* demographics.middleName ^mapping[+].identity = "FHIR"
* demographics.middleName ^mapping[=].language = #application/fhir
* demographics.middleName ^mapping[=].map = "Patient.name.given[position()>0]"
* demographics.middleName ^mapping[+].identity = "CDA"
* demographics.middleName ^mapping[=].language = #application/hl7-sda+xml
* demographics.middleName ^mapping[=].map = "ClinicalDocument.recordTarget.patient.name.given[position()>1]"  
* demographics.middleName ^mapping[+].identity = "HL7V2"
* demographics.middleName ^mapping[=].language = #application/edi-hl7v2
* demographics.middleName ^mapping[=].map = "ADT_A01.PID.5.3"
* demographics.middleName ^mapping[+].identity = "Output"
* demographics.middleName ^mapping[=].language = #application/fhir // mimetype of standard 
* demographics.middleName ^mapping[=].map = "Patient.name.given" // actual Xpath to data within profile in requirements
* demographics.middleName ^mapping[=].comment = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient.name.given[position()>1]"

* episodeInformation 1..1 BackboneElement "CathPCI Episode Information"

* episodeInformation.episodeUniqueKey 1..1 string "Episode Unique Key" "Indicate the unique key associated with each patient episode record as assigned by the EMR/EHR or your software application."
* episodeInformation.episodeUniqueKey ^mapping[+].identity = "FHIR"
* episodeInformation.episodeUniqueKey ^mapping[=].language = #application/fhir
* episodeInformation.episodeUniqueKey ^mapping[=].map = "iif(Encounter.identifier(type.code='VN').value, Encounter.identifier(type.code='VN').value, Encounter.identifier[0].value)"
* episodeInformation.episodeUniqueKey ^mapping[+].identity = "CDA"
* episodeInformation.episodeUniqueKey ^mapping[=].language = #application/hl7-sda+xml
* episodeInformation.episodeUniqueKey ^mapping[=].map = "ClinicalDocument.componentOf.encompassingEncounter.id"  
* episodeInformation.episodeUniqueKey ^mapping[+].identity = "HL7V2"
* episodeInformation.episodeUniqueKey ^mapping[=].language = #application/edi-hl7v2
* episodeInformation.episodeUniqueKey ^mapping[=].map = "ADT_A01.PV1.19.1"
* episodeInformation.episodeUniqueKey ^mapping[+].identity = "Output"
* episodeInformation.episodeUniqueKey ^mapping[=].language = #application/fhir
* episodeInformation.episodeUniqueKey ^mapping[=].map = "Encounter.identifier"
* episodeInformation.episodeUniqueKey ^mapping[=].comment = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter.identifier[0].value)"


* arrivalInformation 1..1 BackboneElement "Patient Arrival Information"
* arrivalInformation.numberOfTransferringFacilityUnavailable 1..1 string "Number of Transferring Facility Unavailable"
* arrivalInformation.numberOfTransferringFacilityUnavailable ^mapping[+].identity = "FHIR"
* arrivalInformation.numberOfTransferringFacilityUnavailable ^mapping[=].language = #application/fhir
* arrivalInformation.numberOfTransferringFacilityUnavailable ^mapping[=].map = "resolve(Encounter.hospital.where(admitSource.coding.where(code ='hosp-trans' and system='http://terminology.hl7.org/CodeSystem/admit-source')).origin).identifier.where(system='').exists().not()"

* arrivalInformation.numberOfTransferringFacilityUnavailable ^mapping[+].identity = "Output"
* arrivalInformation.numberOfTransferringFacilityUnavailable ^mapping[=].language = #application/fhir
* arrivalInformation.numberOfTransferringFacilityUnavailable ^mapping[=].map = "Observation"
* arrivalInformation.numberOfTransferringFacilityUnavailable ^mapping[=].comment = "Observation"

* arrivalInformation.transferringFacilityAmericanHospitalAssociationName 1..1 string "Transferring Facility American Hospital Association Name"
* arrivalInformation.transferringFacilityAmericanHospitalAssociationName ^mapping[+].identity = "FHIR"
* arrivalInformation.transferringFacilityAmericanHospitalAssociationName ^mapping[=].language = #application/fhir
* arrivalInformation.transferringFacilityAmericanHospitalAssociationName ^mapping[=].map = "resolve(Encounter.hospital.where(admitSource.coding.where(code ='hosp-trans' and system='http://terminology.hl7.org/CodeSystem/admit-source')).origin).name"

* arrivalInformation.transferringFacilityAmericanHospitalAssociationName ^mapping[+].identity = "Output"
* arrivalInformation.transferringFacilityAmericanHospitalAssociationName ^mapping[=].language = #application/fhir
* arrivalInformation.transferringFacilityAmericanHospitalAssociationName ^mapping[=].map = "Observation"
* arrivalInformation.transferringFacilityAmericanHospitalAssociationName ^mapping[=].comment = "Observation"

* arrivalInformation.transferringFacilityAmericanHospitalAssociationNumber 1..1 string "Transferring Facility American Hospital Association Number"
* arrivalInformation.transferringFacilityAmericanHospitalAssociationNumber ^mapping[+].identity = "FHIR"
* arrivalInformation.transferringFacilityAmericanHospitalAssociationNumber ^mapping[=].language = #application/fhir
* arrivalInformation.transferringFacilityAmericanHospitalAssociationNumber ^mapping[=].map = "resolve(Encounter.hospital.where(admitSource.coding.where(code ='hosp-trans' and system='http://terminology.hl7.org/CodeSystem/admit-source')).origin).identifier.where(system='').value"

* arrivalInformation.transferringFacilityAmericanHospitalAssociationNumber ^mapping[+].identity = "Output"
* arrivalInformation.transferringFacilityAmericanHospitalAssociationNumber ^mapping[=].language = #application/fhir
* arrivalInformation.transferringFacilityAmericanHospitalAssociationNumber ^mapping[=].map = "Observation"
* arrivalInformation.transferringFacilityAmericanHospitalAssociationNumber ^mapping[=].comment = "Observation"

* cardiacStatus 1..1 BackboneElement "Patient Cardiac Status"

* cardiacStatus.bystanderCardiopulmonaryResuscitation 1..1 string "Bystander Cardiopulmonary Resuscitation"
* cardiacStatus.bystanderCardiopulmonaryResuscitation ^mapping[+].identity = "FHIR"
* cardiacStatus.bystanderCardiopulmonaryResuscitation ^mapping[=].language = #application/fhir
* cardiacStatus.bystanderCardiopulmonaryResuscitation ^mapping[=].map = "Observation.where(code='112000000186' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* cardiacStatus.bystanderCardiopulmonaryResuscitation ^mapping[+].identity = "Output"
* cardiacStatus.bystanderCardiopulmonaryResuscitation ^mapping[=].language = #application/fhir
* cardiacStatus.bystanderCardiopulmonaryResuscitation ^mapping[=].map = "Observation"
* cardiacStatus.bystanderCardiopulmonaryResuscitation ^mapping[=].comment = "Observation"

* cardiacStatus.cardiacArrestAfterArrivalOfEmergencyMedicalServices 1..1 string "Cardiac Arrest After Arrival of Emergency Medical Services" "Indicate if the out-of-hospital cardiac arrest occurred after arrival of Emergency Medical Services (EMS)."
* cardiacStatus.cardiacArrestAfterArrivalOfEmergencyMedicalServices ^mapping[+].identity = "FHIR"
* cardiacStatus.cardiacArrestAfterArrivalOfEmergencyMedicalServices ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestAfterArrivalOfEmergencyMedicalServices ^mapping[=].map = "Observation.where(code='100014081' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* cardiacStatus.cardiacArrestAfterArrivalOfEmergencyMedicalServices ^mapping[+].identity = "Output"
* cardiacStatus.cardiacArrestAfterArrivalOfEmergencyMedicalServices ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestAfterArrivalOfEmergencyMedicalServices ^mapping[=].map = "Observation"
* cardiacStatus.cardiacArrestAfterArrivalOfEmergencyMedicalServices ^mapping[=].comment = "Observation"

* cardiacStatus.cardiacArrestAtTransferringHealthcareFacility 1..1 string "Cardiac Arrest at Transferring Healthcare Facility" "Indicate if the patient had cardiac arrest at the transferring healthcare facility prior to arrival at the current facility."
* cardiacStatus.cardiacArrestAtTransferringHealthcareFacility ^mapping[+].identity = "FHIR"
* cardiacStatus.cardiacArrestAtTransferringHealthcareFacility ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestAtTransferringHealthcareFacility ^mapping[=].map = "Observation.where(code='100014016' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* cardiacStatus.cardiacArrestAtTransferringHealthcareFacility ^mapping[+].identity = "Output"
* cardiacStatus.cardiacArrestAtTransferringHealthcareFacility ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestAtTransferringHealthcareFacility ^mapping[=].map = "Observation"
* cardiacStatus.cardiacArrestAtTransferringHealthcareFacility ^mapping[=].comment = "Observation"

* cardiacStatus.cardiacArrestOutOfHealthcareFacility 1..1 string "Cardiac Arrest Out of Healthcare Facility" "Indicate if a cardiac arrest event occurred outside of any healthcare facility."
* cardiacStatus.cardiacArrestOutOfHealthcareFacility ^mapping[+].identity = "FHIR"
* cardiacStatus.cardiacArrestOutOfHealthcareFacility ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestOutOfHealthcareFacility ^mapping[=].map = "Observation.where(code='10001424808' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* cardiacStatus.cardiacArrestOutOfHealthcareFacility ^mapping[+].identity = "Output"
* cardiacStatus.cardiacArrestOutOfHealthcareFacility ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestOutOfHealthcareFacility ^mapping[=].map = "Observation"
* cardiacStatus.cardiacArrestOutOfHealthcareFacility ^mapping[=].comment = "Observation"

* cardiacStatus.cardiacArrestWitnessed 1..1 string "Cardiac Arrest Witnessed" "Indicate if the out-of-hospital cardiac arrest was witnessed by another person."
* cardiacStatus.cardiacArrestWitnessed ^mapping[+].identity = "FHIR"
* cardiacStatus.cardiacArrestWitnessed ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestWitnessed ^mapping[=].map = "Observation.where(code='100014082' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* cardiacStatus.cardiacArrestWitnessed ^mapping[+].identity = "Output"
* cardiacStatus.cardiacArrestWitnessed ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestWitnessed ^mapping[=].map = "Observation"
* cardiacStatus.cardiacArrestWitnessed ^mapping[=].comment = "Observation"

* cardiacStatus.firstCardiacArrestRhythm 1..1 string "First Cardiac Arrest Rhythm" "Indicate if the initial out-of-hospital cardiac arrest rhythm was a shockable rhythm."
* cardiacStatus.firstCardiacArrestRhythm ^mapping[+].identity = "FHIR"
* cardiacStatus.firstCardiacArrestRhythm ^mapping[=].language = #application/fhir
* cardiacStatus.firstCardiacArrestRhythm ^mapping[=].map = "Observation.where(code='100014013' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* cardiacStatus.firstCardiacArrestRhythm ^mapping[+].identity = "Output"
* cardiacStatus.firstCardiacArrestRhythm ^mapping[=].language = #application/fhir
* cardiacStatus.firstCardiacArrestRhythm ^mapping[=].map = "Observation"
* cardiacStatus.firstCardiacArrestRhythm ^mapping[=].comment = "Observation"

* cardiacStatus.firstCardiacArrestRhythmUnknown 1..1 string "First Cardiac Arrest Rhythm Unknown" "Indicate if the initial out-of-hospital cardiac arrest rhythm was unknown."
* cardiacStatus.firstCardiacArrestRhythmUnknown ^mapping[+].identity = "FHIR"
* cardiacStatus.firstCardiacArrestRhythmUnknown ^mapping[=].language = #application/fhir
* cardiacStatus.firstCardiacArrestRhythmUnknown ^mapping[=].map = "Observation.where(code='100014013' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* cardiacStatus.firstCardiacArrestRhythmUnknown ^mapping[+].identity = "Output"
* cardiacStatus.firstCardiacArrestRhythmUnknown ^mapping[=].language = #application/fhir
* cardiacStatus.firstCardiacArrestRhythmUnknown ^mapping[=].map = "Observation"
* cardiacStatus.firstCardiacArrestRhythmUnknown ^mapping[=].comment = "Observation"

* episodeInformation.admissionDateAndTime 1..1 string "Admission Date and Time"
* episodeInformation.admissionDateAndTime ^mapping[+].identity = "FHIR"
* episodeInformation.admissionDateAndTime ^mapping[=].language = #application/fhir
* episodeInformation.admissionDateAndTime ^mapping[=].map = "Encounter.period.start"

* episodeInformation.admissionDateAndTime ^mapping[+].identity = "Output"
* episodeInformation.admissionDateAndTime ^mapping[=].language = #application/fhir
* episodeInformation.admissionDateAndTime ^mapping[=].map = "Observation"
* episodeInformation.admissionDateAndTime ^mapping[=].comment = "Observation"

* episodeInformation.healthInsurance 1..1 string "Health Insurance""Indicate if the patient has health insurance."
* episodeInformation.healthInsurance ^mapping[+].identity = "FHIR"
* episodeInformation.healthInsurance ^mapping[=].language = #application/fhir
* episodeInformation.healthInsurance ^mapping[=].map = "Claim.where(encounter=Encounter.id).insurance.coverage.exists()"

* episodeInformation.healthInsurance ^mapping[+].identity = "Output"
* episodeInformation.healthInsurance ^mapping[=].language = #application/fhir
* episodeInformation.healthInsurance ^mapping[=].map = "Observation"
* episodeInformation.healthInsurance ^mapping[=].comment = "Observation"

* episodeInformation.healthInsuranceClaimNumber 1..1 string "Health Insurance Claim Number (HIC)" "Indicate the patient's Health Insurance Claim (HIC) number.    Note(s):  Enter the Health Insurance Claim (HIC) number for those patients covered by Medicare. Patients with other insurances will not have a HIC number."
* episodeInformation.healthInsuranceClaimNumber ^mapping[+].identity = "FHIR"
* episodeInformation.healthInsuranceClaimNumber ^mapping[=].language = #application/fhir
* episodeInformation.healthInsuranceClaimNumber ^mapping[=].map = "resolve(Claim.where(encounter=Encounter.id).insurance.coverage).identifier.value"

* episodeInformation.healthInsuranceClaimNumber ^mapping[+].identity = "Output"
* episodeInformation.healthInsuranceClaimNumber ^mapping[=].language = #application/fhir
* episodeInformation.healthInsuranceClaimNumber ^mapping[=].map = "Observation"
* episodeInformation.healthInsuranceClaimNumber ^mapping[=].comment = "Observation"

* episodeInformation.healthInsurancePaymentSource 1..* string "Health Insurance Payment Source" "Indicate the patient's health insurance payment type.    Note(s):  If the patient has multiple insurance payors, select all payors.    If there is uncertainty regarding how to identify a specific health insurance plan, please discuss with your billing department to understand how it should be identified in the registry."
* episodeInformation.healthInsurancePaymentSource ^mapping[+].identity = "FHIR"
* episodeInformation.healthInsurancePaymentSource ^mapping[=].language = #application/fhir
* episodeInformation.healthInsurancePaymentSource ^mapping[=].map = "resolve(Claim.where(encounter=Encounter.id)).insurer.display.value"

* episodeInformation.healthInsurancePaymentSource ^mapping[+].identity = "Output"
* episodeInformation.healthInsurancePaymentSource ^mapping[=].language = #application/fhir
* episodeInformation.healthInsurancePaymentSource ^mapping[=].map = "Observation"
* episodeInformation.healthInsurancePaymentSource ^mapping[=].comment = "Observation"

* episodeInformation.medicareBeneficiaryIdentifier 1..1 string "Medicare Beneficiary Identifier"
* episodeInformation.medicareBeneficiaryIdentifier ^mapping[+].identity = "FHIR"
* episodeInformation.medicareBeneficiaryIdentifier ^mapping[=].language = #application/fhir
* episodeInformation.medicareBeneficiaryIdentifier ^mapping[=].map = "Patient.identifier.where(system='http://hl7.org/fhir/sid/us-mbi').value"

* episodeInformation.medicareBeneficiaryIdentifier ^mapping[+].identity = "Output"
* episodeInformation.medicareBeneficiaryIdentifier ^mapping[=].language = #application/fhir
* episodeInformation.medicareBeneficiaryIdentifier ^mapping[=].map = "Observation"
* episodeInformation.medicareBeneficiaryIdentifier ^mapping[=].comment = "Observation"

* episodeInformation.patientEnrolledInResearchStudy 1..1 string "Patient Enrolled in Research Study" "Indicate if the patient is enrolled in an ongoing ACC - NCDR research study related to this registry."
* episodeInformation.patientEnrolledInResearchStudy ^mapping[+].identity = "FHIR"
* episodeInformation.patientEnrolledInResearchStudy ^mapping[=].language = #application/fhir
* episodeInformation.patientEnrolledInResearchStudy ^mapping[=].map = "ResearchSubject.where(patient=Patient.id and period.overlaps(Encounter.period)).exists()"

* episodeInformation.patientEnrolledInResearchStudy ^mapping[+].identity = "Output"
* episodeInformation.patientEnrolledInResearchStudy ^mapping[=].language = #application/fhir
* episodeInformation.patientEnrolledInResearchStudy ^mapping[=].map = "Observation"
* episodeInformation.patientEnrolledInResearchStudy ^mapping[=].comment = "Observation"

* episodeInformation.patientRestriction 1..1 string "Patient Restriction" "Indicate if the patient requested for their information not to be used for any research or studies for the associated episode of care.    Note(s):  Documentation must be found in the patient record to support the request of removal of their information."
* episodeInformation.patientRestriction ^mapping[+].identity = "FHIR"
* episodeInformation.patientRestriction ^mapping[=].language = #application/fhir
* episodeInformation.patientRestriction ^mapping[=].map = "Patient.meta.securityLabel.memberOf(%Restricted)"

* episodeInformation.patientRestriction ^mapping[+].identity = "Output"
* episodeInformation.patientRestriction ^mapping[=].language = #application/fhir
* episodeInformation.patientRestriction ^mapping[=].map = "Observation"
* episodeInformation.patientRestriction ^mapping[=].comment = "Observation"

* historyAndRiskFactors  1..1 BackboneElement "Patient History and Risk Factors"

* historyAndRiskFactors.basicActivitiesOfDailyLiving 1..1 string "Basic Activities of Daily Living"
* historyAndRiskFactors.basicActivitiesOfDailyLiving ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.basicActivitiesOfDailyLiving ^mapping[=].language = #application/fhir
* historyAndRiskFactors.basicActivitiesOfDailyLiving ^mapping[=].map = "Observation.where(code='112000000180' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* historyAndRiskFactors.basicActivitiesOfDailyLiving ^mapping[+].identity = "Output"
* historyAndRiskFactors.basicActivitiesOfDailyLiving ^mapping[=].language = #application/fhir
* historyAndRiskFactors.basicActivitiesOfDailyLiving ^mapping[=].map = "Observation"
* historyAndRiskFactors.basicActivitiesOfDailyLiving ^mapping[=].comment = "Observation"

* historyAndRiskFactors.basicActivitiesOfDailyLivingUnknown 1..1 string "Basic Activities of Daily Living Unknown"
* historyAndRiskFactors.basicActivitiesOfDailyLivingUnknown ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.basicActivitiesOfDailyLivingUnknown ^mapping[=].language = #application/fhir
* historyAndRiskFactors.basicActivitiesOfDailyLivingUnknown ^mapping[=].map = "Observation.where(code='112000000180' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* historyAndRiskFactors.basicActivitiesOfDailyLivingUnknown ^mapping[+].identity = "Output"
* historyAndRiskFactors.basicActivitiesOfDailyLivingUnknown ^mapping[=].language = #application/fhir
* historyAndRiskFactors.basicActivitiesOfDailyLivingUnknown ^mapping[=].map = "Observation"
* historyAndRiskFactors.basicActivitiesOfDailyLivingUnknown ^mapping[=].comment = "Observation"

* historyAndRiskFactors.cognition 1..1 string "Cognition"
* historyAndRiskFactors.cognition ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.cognition ^mapping[=].language = #application/fhir
* historyAndRiskFactors.cognition ^mapping[=].map = "Observation.where(code='112000000140' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* historyAndRiskFactors.cognition ^mapping[+].identity = "Output"
* historyAndRiskFactors.cognition ^mapping[=].language = #application/fhir
* historyAndRiskFactors.cognition ^mapping[=].map = "Observation"
* historyAndRiskFactors.cognition ^mapping[=].comment = "Observation"

* historyAndRiskFactors.cognitionUnknown 1..1 string "Cognition Unknown"
* historyAndRiskFactors.cognitionUnknown ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.cognitionUnknown ^mapping[=].language = #application/fhir
* historyAndRiskFactors.cognitionUnknown ^mapping[=].map = "Observation.where(code='112000000140' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* historyAndRiskFactors.cognitionUnknown ^mapping[+].identity = "Output"
* historyAndRiskFactors.cognitionUnknown ^mapping[=].language = #application/fhir
* historyAndRiskFactors.cognitionUnknown ^mapping[=].map = "Observation"
* historyAndRiskFactors.cognitionUnknown ^mapping[=].comment = "Observation"

* historyAndRiskFactors.smokingAmount 1..1 string "Smoking Amount" "Indicate the amount of cigarette smoking reported by the patient."
* historyAndRiskFactors.smokingAmount ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.smokingAmount ^mapping[=].language = #application/fhir
* historyAndRiskFactors.smokingAmount ^mapping[=].map = "Observation.where(code='100001256' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* historyAndRiskFactors.smokingAmount ^mapping[+].identity = "Output"
* historyAndRiskFactors.smokingAmount ^mapping[=].language = #application/fhir
* historyAndRiskFactors.smokingAmount ^mapping[=].map = "Observation"
* historyAndRiskFactors.smokingAmount ^mapping[=].comment = "Observation"

* historyAndRiskFactors.tobaccoType 1..1 string "Tobacco Type" "<<< CathPCI - Instruction >>> Indicate the type of tobacco product the patient uses. <<< CPMI - Instruction >>> Indicate the frequency that the patient uses tobacco.    Note(s): Consider use of any tobacco product as equivalent to a cigarette for referenced definitions.     "
* historyAndRiskFactors.tobaccoType ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.tobaccoType ^mapping[=].language = #application/fhir
* historyAndRiskFactors.tobaccoType ^mapping[=].map = "Observation.where(code='266918002' and system='http://snomed.info/sct' and effectiveDateTime > %Encounter.period.start).first()"

* historyAndRiskFactors.tobaccoType ^mapping[+].identity = "Output"
* historyAndRiskFactors.tobaccoType ^mapping[=].language = #application/fhir
* historyAndRiskFactors.tobaccoType ^mapping[=].map = "Observation"
* historyAndRiskFactors.tobaccoType ^mapping[=].comment = "Observation"

* historyAndRiskFactors.tobaccoUse 1..1 string "Tobacco Use" "Indicate the frequency that the patient uses tobacco. Note(s): Consider use of any tobacco product as equivalent to a cigarette for referenced definitions."
* historyAndRiskFactors.tobaccoUse ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.tobaccoUse ^mapping[=].language = #application/fhir
* historyAndRiskFactors.tobaccoUse ^mapping[=].map = "Observation.where(code='110483000' and system='http://snomed.info/sct' and effectiveDateTime > %Encounter.period.start).first()"

* historyAndRiskFactors.tobaccoUse ^mapping[+].identity = "Output"
* historyAndRiskFactors.tobaccoUse ^mapping[=].language = #application/fhir
* historyAndRiskFactors.tobaccoUse ^mapping[=].map = "Observation"
* historyAndRiskFactors.tobaccoUse ^mapping[=].comment = "Observation"

* historyAndRiskFactors.walking 1..1 string "Walking"
* historyAndRiskFactors.walking ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.walking ^mapping[=].language = #application/fhir
* historyAndRiskFactors.walking ^mapping[=].map = "Observation.where(code='116329008' and system='http://snomed.info/sct' and effectiveDateTime > %Encounter.period.start).first()"

* historyAndRiskFactors.walking ^mapping[+].identity = "Output"
* historyAndRiskFactors.walking ^mapping[=].language = #application/fhir
* historyAndRiskFactors.walking ^mapping[=].map = "Observation"
* historyAndRiskFactors.walking ^mapping[=].comment = "Observation"

* historyAndRiskFactors.walkingUnknown 1..1 string "Walking Unknown"
* historyAndRiskFactors.walkingUnknown ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.walkingUnknown ^mapping[=].language = #application/fhir
* historyAndRiskFactors.walkingUnknown ^mapping[=].map = "Observation.where(code='116329008' and system='http://snomed.info/sct' and effectiveDateTime > %Encounter.period.start).first()"

* historyAndRiskFactors.walkingUnknown ^mapping[+].identity = "Output"
* historyAndRiskFactors.walkingUnknown ^mapping[=].language = #application/fhir
* historyAndRiskFactors.walkingUnknown ^mapping[=].map = "Observation"
* historyAndRiskFactors.walkingUnknown ^mapping[=].comment = "Observation"

* researchStudy  0..1 BackboneElement "Research Study Information"

* researchStudy.researchStudyName 1..1 string "Research Study Name" "Indicate the research study name as provided by the research study protocol.    Note(s):  If the patient is in more than one research study, list each separately."
* researchStudy.researchStudyName ^mapping[+].identity = "FHIR"
* researchStudy.researchStudyName ^mapping[=].language = #application/fhir
* researchStudy.researchStudyName ^mapping[=].map = "resolve(ResearchSubject.where(patient=Patient.id and period.overlaps(Encounter.period)).researchStudy).title"

* researchStudy.researchStudyName ^mapping[+].identity = "Output"
* researchStudy.researchStudyName ^mapping[=].language = #application/fhir
* researchStudy.researchStudyName ^mapping[=].map = "Observation"
* researchStudy.researchStudyName ^mapping[=].comment = "Observation"

* researchStudy.researchStudyPatientId 1..1 string "Research Study Patient ID" "Indicate the research study patient identification number as assigned by the research protocol.    Note(s):  If the patient is in more than one research study, list each separately."
* researchStudy.researchStudyPatientId ^mapping[+].identity = "FHIR"
* researchStudy.researchStudyPatientId ^mapping[=].language = #application/fhir
* researchStudy.researchStudyPatientId ^mapping[=].map = "ResearchSubject.where( individual = Patient.id and ((( Encounter.period.start >= period.start ) and (Encounter.period.start <= period.end)) or ((Encounter.period.end >= period.start) and  (Encounter.period.end <= period.end )))).identifier"

* researchStudy.researchStudyPatientId ^mapping[+].identity = "Output"
* researchStudy.researchStudyPatientId ^mapping[=].language = #application/fhir
* researchStudy.researchStudyPatientId ^mapping[=].map = "Observation"
* researchStudy.researchStudyPatientId ^mapping[=].comment = "Observation"


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/CathPCI Valuesets.fsh

CodeSystem: HealthInsurancePaymentSourceCS
Title: "Health Insurance Payment Source CodeSystem"
Description: "Sources for Payment for Element 3010"
* ^caseSensitive = false
* ^experimental = true
* #5	"Private Health Insurance"
* #1	"Medicare"
* #2	"Medicaid"
* #31	"Military Health Care"
* #36	"State-Specific Plan (non-Medicaid)"
* #33	"Indian Health Service"


ValueSet: HealthInsurancePaymentSource
Title: "Health Insurance Payment Source"
Description: "ValueSet listing payment source codes used by ACC"
* ^experimental = true

* include codes from system  HealthInsurancePaymentSourceCS
* ncdr#100000812

ValueSet: PriorMyocardialInfarction
Title: "Prior Myocardial Infarction"
Description: "SNOMED CT codes for MI"

* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #22298006

ValueSet: PercutaneousCoronaryIntervention
Title: "PCI"
Description: "All SNOMED Codes that are PCI Procedures"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #415070008

ValueSet: CABG
Title: "Coronary artery bypass grafting"
Description: "All SNOMED Codes that are CABG Procedures"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #232717009

ValueSet: CerebrovascularDisease
Title: "Cerebrovascular Disease"
Description: "All SNOMED Codes that are Cerebrovascular Disease"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #62914000

ValueSet: DiabetesMellitus
Title: "Diabetes Mellitus"
Description: "All SNOMED Codes that are Diabetes Mellitus"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #73211009

ValueSet: HemodialysisOrPeritonealDialysis
Title: "hemodialysis or peritoneal dialysis"
Description: "All SNOMED Codes regarding hemodialysis or peritoneal dialysis"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #108241001

ValueSet: ChronicLungDisease
Id: ChronicLungDisease
Title: "Chronic Lung Disease"
Description: "Chronic Lung Disease as defined by ACC"
* ^copyright = """
* This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
* This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc
"""
* ^experimental = true
* include codes from system $sct where concept is-a #413839001 
* exclude codes from system $sct where concept is-a #40122008
* exclude $sct#123713005
* exclude $sct#22607003
* exclude $sct#254826008
* exclude $sct#29422001
* $loinc#54822-2

ValueSet:  PeripheralArterialOcclusiveDisease  
Title: "Peripheral Arterial Occlusive Disease"
Description: "All SNOMED Codes that are Chronic Lung Disease"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #399957001

ValueSet: Hypertension  
Title: "Hypertension"
Description: "All SNOMED Codes that are Hypertension"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #38341003

ValueSet: Dyslipidemia  
Title: "Dyslipidemia"
Description: "All SNOMED Codes that are Dyslipidemia"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #370992007

ValueSet: SmokingStatus
Title: "Smoking Status"
Description: """
* ^experimental = true
Patient's smoking status.  
Includes all SNOMED codes related to smoking status under 'Finding of tobacco use and exposure (finding)'
"""
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #365980008


ValueSet: CardiacArrest
Title: "Cardiac Arrest"
Description: "All SNOMED Codes related to Cardiac Arrest"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #410429000

ValueSet: HeartFailure
Id: HeartFailure
Title: "Heart Failure codes from SNOMED"
Description: "All SNOMED Codes that are Heart Failure"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #84114007

ValueSet: NewYorkHeartAssociationQuery
Id: NewYorkHeartAssociation
Title: "New York Heart Association Assessment Scale"
Description: "Includes codes from SNOMED and LOINC"
* ^experimental = true
* ^copyright = """
* This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
* This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc
"""
* $loinc#88020-3
* $sct#420816009
* $sct#762994006

ValueSet: AbnormalElectrocardiacAssessment
Id: AbnormalElectrocardiacAssessment
Title: "Abnormal Electrocardiac Assessment"
Description: "All SNOMED codes that are an abnormal Electrocardiac Assessment result"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #102594003

ValueSet: CardiacCTA
Id: CardiacCTA
Title: "CTA Heart and Coronary arteries"
Description: "CTA Heart and Coronary arteries" 
* ^experimental = true
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* $loinc#79073-3
* $loinc#86980-0
* $loinc#89927-8
* $loinc#83289-9

ValueSet: StressTest
Id: StressTest
Title: "Cath PCI Selected Stress Test"
Description: "All ACC Selected Stress Tests for the CathPCI submission"
* ^experimental = true
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* $loinc#18752-6
* $loinc#18107-3
* $loinc#49569-7
* $loinc#58750-1

ValueSet: OrganDonor
Id: OrganDonor
Title: "SNOMED Valueset of Organ Donor codes"
Description: "All SNOMED codes that are an Organ Donor (person)"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #105461009

ValueSet: ValvularStenosis
Id: ValvularStenosis
Title: "Valvular Stenosis"
Description: "Loinc codes for Valvular Stenosis"
* ^experimental = true
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* $loinc#77916-5
* $loinc#78183-1 	
* $loinc#77912-4

ValueSet: ValvularRegurgitation
Id: ValvularRegurgitation
Title: "Valvular Regurgitation"
Description: "Existance of Valvular Regurgitation"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #40445007

ValueSet: PCIOperator
Id: PCIOperator
Title: "PCI Operator SNOMED codes"
Description:  "POssible codes for PCI Operator"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $sct#1421009 
* $sct#56545009 
* $sct#304292004 
* $sct#309369000 
* $sct#309371000 

ValueSet: CardiacCatheter
Title: "SNOMED Cardiac Catheters"
Description: "SNOMED Cardiac Catheters set"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #706539002

ValueSet: PackedRedBloodCells
Title: "Packed Red Blood Ceels"
Description: "SNOMED codes for PRBC"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #431069006

ValueSet: SeattleAnginaQs
Id: SEattleAnginaQs
Title: "Seattle Angina Questions"
Description: "All LIONC codes for Seattle Angina Questions"
* ^experimental = true
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* $loinc#88476-7 	
* $loinc#88478-3
* $loinc#88477-5 	
* $loinc#88469-2
* $loinc#88480-9
* $loinc#88475-9 	
* $loinc#88473-4 	

ValueSet: SeattleAnginaAs
Id: SeattleAnginaAs
Title: "Seattle Angina Answers"
Description: "LOINC codes for the answers to SA Questions"
* ^experimental = true
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* $loinc#LA28518-1
* $loinc#LA25000-3
* $loinc#LA27770-9
* $loinc#LA13834-9
* $loinc#LA27722-0
* $loinc#LA28522-3

ValueSet: RoseDyspneaQ
Id: RoseDyspneaQ
Title: "Rose Dyspnea Questions"
Description: "LOINC codes for Rose Dyspnea Questions"
* ^experimental = true
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* $loinc#89437-8
* $loinc#89435-2
* $loinc#89438-6
* $loinc#89439-4

ValueSet: YesNo
Id: YesNo
Title: "Yes or No"
Description: "Affirmative or Negative"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $sct#373066001 
* $sct#373067005
* $yn#Y
* $yn#N

ValueSet: MyocardialInfarction
Id: MyocardialInfarction
Title: "Myocardial Infarction"
Description: "Full SNOMED set for MI"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #22298006

ValueSet: PriorCoronaryArteryBypassGraft
Id: PriorCABG
Title: "Prior History of Coronary Artery Bypass Graft"
Description: "All SNOMED and LOINC codes for CABG or Prior CABG"
* ^experimental = true
* ^copyright = """
* This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
* This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc
"""
* include codes from system $sct where concept is-a #232717009
* $loinc#88654-9 

---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/CREDSBundle-Example.fsh

Instance: CREDSBundle-Example
InstanceOf: CREDSSubmission
Usage: #example
Title: "CREDS Submission Bundle Example"
Description: "A simple example of the CREDS Submission Bundle"

* entry[mHeader].fullUrl = "urn:uuid:a4bab684-4bc2-43b7-82a0-199034a5a5b2"
* entry[mHeader].resource = CREDSMHExample
* entry[USPatient].fullUrl = "urn:uuid:261989c3-688c-4941-b767-d8d4c871217c"
* entry[USPatient].resource = 261989c3-688c-4941-b767-d8d4c871217c
* entry[2].fullUrl = "urn:uuid:ba651db0-7b10-4465-a5c4-411ced9e8254"
* entry[2].resource = CREDSEncounter

Instance: CREDSMHExample
InstanceOf: MessageHeader
Usage: #example
Title: "MessageHeader for CREDSSubmission Example"
Description: "An example MessageHeader for use within a CREDS Submission Bundle"
* eventUri = "urn:uuid:26aa1208-589a-4978-9cb7-728cc51520aa" 
* sender = Reference(VeterinariansHospital)
* enterer = Reference(USCorePractitionerexample)
* source.name = "CREDS Implementation #2"
* source.endpoint = "https://example.org/fhir"
* reason = http://terminology.hl7.org/CodeSystem/message-reasons-encounter#discharge
* focus = Reference(261989c3-688c-4941-b767-d8d4c871217c)


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/CREDSBundle.fsh

Profile: CREDSSubmission
Parent: Bundle
Id: CREDSSubmission
Title: "CREDS Submission Bundle"
Description: "This is the standard Bundle to be used with a CREDS submission"
* insert CREDSStructureDefinitionContent
* type = #collection (exactly)
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.ordered = true
* entry ^slicing.description = "Slice based on resource"

* entry 2..*
* entry contains mHeader 1..1 MS
  and USPatient 1..1 MS
  
* entry[mHeader].resource only MessageHeader
* entry[USPatient].resource only http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
/*
Instance: StructDef4KEith
InstanceOf: Bundle
Usage: #example
Title: "Just for Keith"
Description: "None"
* type = #transaction
* entry.resource = CathPCI_Submission_Map_detailed
* entry.request.method = #POST
* entry.request.url = "urn:uuid:120679c4-443d-45cd-9d39-1bc431f4fb56"
*/

---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/CREDSDefinitions.fsh

RuleSet: CREDSDefinitionContent
* status = #draft      // draft until final published
* experimental = true  // true until ready for pilot, then false
* version = "0.1.0"    // Follow IG Versioning rules
* publisher = "HL7 International"
* contact[0].name = "HL7 Clinical Interoperability Council"
* contact[0].telecom.system = #url
* contact[0].telecom.value = "http://hl7.org/Special/committees/cic/index.cfm"
* contact[1].name = "David Pyke"
* contact[1].telecom.system = #email
* contact[1].telecom.value = "mailto:dpyke@ainq.com"
* jurisdiction.coding =  http://unstats.un.org/unsd/methods/m49/m49.htm#001

// Define a rule set for commonly used rules for definition resources using other Sushi features
RuleSet: CREDSStructureDefinitionContent
* ^status = #draft      // draft until final published
* ^experimental = true  // true until ready for pilot, then false
* ^version = "0.1.0"    // Follow IG Versioning rules
* ^publisher = "HL7 International"
* ^contact[0].name = "HL7 Clinical Interoperability Council"
* ^contact[0].telecom.system = #url
* ^contact[0].telecom.value = "http://hl7.org/Special/committees/cic/index.cfm"
* ^contact[1].name = "David Pyke"
* ^contact[1].telecom.system = #email
* ^contact[1].telecom.value = "mailto:dpyke@ainq.com"
* ^jurisdiction.coding =  http://unstats.un.org/unsd/methods/m49/m49.htm#001

RuleSet: CREDSCapabilityStatementContent
* status = #draft
* experimental = true
* publisher = "HL7 Clinical Interoperability Council"
* contact[0].name = "HL7 Clinical Interoperability Council"
* contact[0].telecom.system = #web
* contact[0].telecom.value = "http://hl7.org/Special/committees/cic/index.cfm"
* contact[1].name = "David Pyke"
* contact[1].telecom.system = #email
* contact[1].telecom.value = "dpyke@ainq.com"
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #json
* format[1] = #xml
* implementationGuide = "http://hl7.org/fhir/uv/fhir-registry-protocols-ig/ImplementationGuide/hl7.fhir.uv.fhir-registry-protocols-ig"

---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/CREDSStructureDefinition.fsh

Profile: CREDSStructureDefinition
Parent: StructureDefinition
Id: CREDSStructureDefinition
Title: "CREDS Structure Definition"
Description: "StructureDefinition for use with CREDS mapping creating the base mappings for FHIR, CDA and V2"
* insert CREDSStructureDefinitionContent
// * ^kind = #logical
* identifier 1..1

* date 1..1
* publisher 1..1
* contact 1..*

* kind = #logical
* abstract = false
* type 1..1 
* ^mapping[+].identity = "FHIR"
* ^mapping[=].uri = "http://fhir.hl7.org"
* ^mapping[=].name = "Fast Health Interoperability Resources"
* ^mapping[=].comment = "Path to where in a FHIR Resource the data element is found"
* ^mapping[+].identity = "CDA"
* ^mapping[=].uri = "http://build.fhir.org/ig/HL7/cda-core-2.0/"
* ^mapping[=].name = "Clinical Document Architecture"
* ^mapping[=].comment = "Path to where in a CDA 2.0/CCDA 2.1 Document the data element is found"
* ^mapping[+].identity = "HL7V2"
* ^mapping[=].uri = "http://www.hl7.eu/refactored/index.html"
* ^mapping[=].name = "HL7 V2 Messages"
* ^mapping[=].comment = "Path to where in a HL7 V2 Message the data element is found"
* ^mapping[+].identity = "Output"
* ^mapping[=].uri = "http://hl7.org/fhir/us/core"
* ^mapping[=].name = "Submission Data Output location"
* ^mapping[=].comment = "Location within the requirements profile to place the data for submission in US Core or FHIR Core Resources"

/* * snapshot 0..0
* differential 0..0

Profile: CREDSElementDefinition
Parent: ElementDefinition
Id: CREDSElementDefinition
Title: "CREDSElementDefinition"
Description: """ElementDefinition for use within CREDS that sets the base requirements for creating the logical model
Elements specific to a Creds model are:
.short Simple name of the data required
.comment full description of the data element required

Mappings are required for data extraction and inclusion in the submission bundle  Each mapping shows:
.identity as element path (e.g., Patient.Name.Given)
.langauge as the mime type of the language (e.g., application/edi-hl7v2 for V2 message)
.map as the FHIRPath expression for use to find the data required.
.comment = *Output mapping only* Resource/Profile for inclusion in the Submission Bundle.

Element mapping should include an Output mapping unless the mapping is in a parent element in the logical model.
"""
* insert CREDSStructureDefinitionContent

* short 1..1
* comment 1..1
* type ^code = http://hl7.org/fhir/data-types#canonical
* mapping ^slicing.discriminator.type = #pattern
* mapping ^slicing.discriminator.path = "identity"
* mapping ^slicing.rules = #open
* mapping ^slicing.ordered = false
* mapping ^slicing.description = "Slice based on standard via identity"
* mapping 1..*
* mapping contains FHIR 0..*
    and CDA 0..*
    and HL7V2 0..*
    and Output 0..*
* mapping[FHIR].identity 1..1 
* mapping[FHIR].identity = "FHIR"
* mapping[FHIR].language 1..1
* mapping[FHIR].map 1..1
* mapping[FHIR].language = #application/fhir
* mapping[CDA].identity 1..1 
* mapping[CDA].identity = "CDA"
* mapping[CDA].language 1..1
* mapping[CDA].language = #application/hl7-sda+xml
* mapping[CDA].map 1..1
* mapping[HL7V2].identity 1..1 
* mapping[HL7V2].identity = "HL7V2"
* mapping[HL7V2].language 1..1
* mapping[HL7V2].language = #application/edi-hl7v2
* mapping[HL7V2]..map 1..1
* mapping[Output].identity 1..1 
* mapping[Output].identity = "Output"
* mapping[Output].language 1..1
* mapping[Output].language = #application/fhir
* mapping[Output].map 1..1
*/

---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/NCDR Codesystem.fsh

CodeSystem: NCDRCathPCI
Id: ncdr
Title: "CathPCI Associated NCDR Selection Codes"
Description: "This is the complete list of all codes from the NCDR code list used in selections for the CathPCI questionnaire."
* ^caseSensitive = false
* ^experimental = true
* #100000349 "Patient delays in providing consent for PCI"
* #100000350 "Difficulty crossing the culprit lesion"
* #100000351 "Other"
* #100000570 "STEMI - Primary PCI for Acute STEMI"
* #100000571 "STEMI - Unstable (> 12 hrs from Sx)"
* #100000572 "STEMI - Stable (> 12 hrs from Sx)"
* #100000573 "STEMI (after successful lytics)"
* #100000574 "STEMI - Rescue (After unsuccessful lytics)"
* #100000578 "First ECG"
* #100000579 "Subsequent ECG"
* #100000583 "Non-High/Non-C"
* #100000584 "High/C"
* #100000646 "Unavailable"
* #100000709 "PCI complication"
* #100000712 "PCI/CABG Hybrid Procedure"
* #100000812 "Non-US Insurance"
* #100000881 "Difficult Vascular Access"
* #100000921 "Heparin Derivative"
* #100000932 "Asymptomatic"
* #100000960 "Acute myocardial infarction"
* #100000961 "Cardiovascular hemorrhage"
* #100000962 "Cardiovascular procedure"
* #100000963 "Gastrointestinal"
* #100000964 "Heart failure"
* #100000965 "Hemorrhage"
* #100000966 "Hepatobiliary"
* #100000967 "Infection"
* #100000968 "Inflammatory/Immunologic"
* #100000969 "Malignancy"
* #100000970 "Neurological"
* #100000971 "Non-cardiovascular procedure or surgery"
* #100000972 "Other cardiovascular reason"
* #100000973 "Other non-cardiovascular reason"
* #100000974 "Pancreatic"
* #100000975 "Pulmonary"
* #100000976 "Renal"
* #100000977 "Stroke"
* #100000978 "Sudden cardiac death"
* #100000979 "Suicide"
* #100000980 "Trauma"
* #100001034 "Not Prescribed - Medical Reason"
* #100001048 "Not Prescribed - No Reason"
* #100001071 "Not Prescribed - Patient Reason"
* #100001167 "Not at all limited"
* #100001170 "Moderately limited"
* #100001171 "Quite a bit limited"
* #100001173 "Extremely limited"
* #100001197 "Somewhat satisfied"
* #100001247 "Yes - Prescribed"
* #100001249 "Other Discharge Location"
* #100001262 "Unclear Severity"
* #100001272 "Peripheral Intervention"
* #100001273 "Structural Repair"
* #100001275 "Non-anginal Chest Pain"
* #100001280 "In place at start of procedure"
* #100001281 "Inserted during procedure and prior to intervention"
* #100001285 "Elective"
* #100001286 "Urgent"
* #100001287 "Emergency"
* #100001288 "Salvage"
* #100001290 "Salvage"
* #100001291 "Recommendation from Dx Cath (instead of PCI)"
* #100001292 "PCI Failure"
* #100012987 "Elective"
* #100012988 "Urgent"
* #100012989 "Emergency"
* #100012990 "NSTE - ACS"
* #100012991 "STEMI - Stable (<= 12 hrs from Sx)"
* #100012992 "CAD (without ischemic Sx)"
* #100013001 "Cardiac Arrest and/or need for intubation before PCI"
* #100013029 "Other"
* #100013034 "Shockable"
* #100013035 "Not Shockable"
* #100013036 "Initiated Pre-PCI, <=  6 hrs post cardiac arrest"
* #100013037 "Initiated Pre-PCI,  >  6 hrs post cardiac arrest"
* #100013038 "Post PCI"
* #100013042 "Inserted after intervention has begun"
* #100013043 "(P) Pain"
* #100013072 "Yes"
* #100013074 "Contraindicated"
* #100013081 "Cost"
* #100013082 "Alternative Therapy Preferred"
* #100013083 "Negative Side Effect"
* #100013086 "Prescriptions: Cardiac"
* #100013087 "Prescriptions: Non-Cardiac"
* #100013088 "Over the Counter (OTC) Medications"
* #100013089 "Vitamins/Minerals"
* #100013090 "Herbal Supplements"
* #100013093 "Positive"
* #100013094 "Indeterminate"
* #100013097 "Low"
* #100013098 "Intermediate"
* #100014001 "Stable Known CAD"
* #100014002 "Post Cardiac Transplant"
* #100014003 "Suspected CAD"
* #100014006 "Persistent Ischemic Symptoms (chest pain, STE)"
* #100014007 "Acute Heart Failure Symptoms"
* #100014010 "TandemHeart"
* #100014011 "Impella: Left Ventricular Support"
* #100014019 "New Left Bundle Branch Block"
* #100014022 "Non-Cardiac Surgery"
* #100014023 "< 4 METS"
* #100014024 ">= 4 METS with Symptoms"
* #100014025 ">= 4 METS without Symptoms"
* #100014027 "Pancreas"
* #100014029 "High Risk: Vascular"
* #100014030 "High Risk: Non-Vascular"
* #100014034 "High Intensity Dose"
* #100014035 "Moderate Intensity Dose"
* #100014036 "Low Intensity Dose"
* #100014041 "Limited for other reasons or did not do these activities"
* #100014042 "Slightly limited"
* #100014043 "4 or more times per day"
* #100014044 "1 - 3 times per day"
* #100014045 "3 or more times per week but not every day"
* #100014046 "1 - 2 times per week"
* #100014047 "Less than once a week"
* #100014048 "None over the past 4 weeks"
* #100014049 "It has extremely limited my enjoyment of life"
* #100014050 "It has limited my enjoyment of life quite a bit"
* #100014051 "It has moderately limited my enjoyment of life"
* #100014052 "It has slightly limited my enjoyment of life"
* #100014053 "It has not limited my enjoyment of life at all"
* #100014054 "Not satisfied at all"
* #100014055 "Mostly dissatisfied"
* #100014057 "Mostly satisfied"
* #100014058 "Completely satisfied"
* #100014060 "Medical Records"
* #100014061 "Letter from Medical Provider"
* #100014062 "Phone Call"
* #100014064 "No - Reason Not Documented"
* #100014065 "No - Health Care System Reason Documented"
* #100014066 "No - Medical Reason Documented"
* #100014068 "Cardiac Surgery (non CABG)"
* #100014071 "Valvular Intervention"
* #100014072 "Structural Heart Intervention (non-valvular)"
* #100014076 "New Requirement for Dialysis"
* #100014161 "Non-Statin"
* #100014162 "Antiarrhythmic Agent Other"
* #100014173 "No - not given, reason unspecified"
* #100014234 "Unable to Assess"
* #1000142345 "Moderately Severe (3+)"
* #1000142347 "Other Organ"
* #1000142351 "Symptomatic"
* #1000142353 "Distal"
* #1000142354 "Body"
* #1000142355 "Aortic"
* #1000142358 "ACS <= 24 hrs"
* #1000142359 "ACS > 24 hrs"
* #1000142360 "Pre-operative Evaluation"
* #1000142362 "Social Security Death Master File"
* #1000142363 "Hospitalized"
* #1000142368 "Surgery not Recommended"
* #1000142369 "Surgery Recommended, Patient/Family Declined"
* #1000142370 "Surgery Recommended, Patient/Family Accepted (Hybrid Procedure)"
* #1000142371 "Bleeding - Other"
* #1000142380 "Readmission: Non-PCI Related"
* #1000142382 "1: Very Fit"
* #1000142383 "2: Well"
* #1000142384 "3: Managing Well"
* #1000142385 "4: Vulnerable"
* #1000142386 "5: Mildly Frail"
* #1000142387 "6: Moderately Frail"
* #1000142388 "7: Severely Frail"
* #1000142389 "8: Very Severely Frail"
* #1000142390 "9: Terminally Ill"
* #1000142391 "Emergent placement of LV support device before PCI"
* #1000142392 "Peripheral Angiogram"
* #1000142393 "Parachute Device Placement"
* #1000142394 "LIMA (Native Position) Angiogram"
* #1000142402 "11b-  Mid-LM"
* #1000142403 "11c -  Distal LM"
* #1000142404 "15a - Lat 1st Diag"
* #1000142405 "16a - Lat 2nd Diag"
* #1000142406 "20a - Lat 1st OM"
* #1000142407 "21a - Lat 2nd OM"
* #1000142408 "22a - Lat 3rd OM"
* #1000142409 "28a - Lat Ramus"
* #1000142410 "29a - Lat 3rd Diag"
* #1000142411 "CABG: Bypass of stented Lesion"
* #1000142412 "CABG: Bypass of non-stented Lesion"
* #1000142413 "PCI of Stented Lesion"
* #1000142414 "PCI of non-stented Lesion"
* #1000142415 "Thrombosis in stented Lesion"
* #1000142416 "Thrombosis in non-stented Lesion"
* #1000142419 "Other Vascular Complications Requiring Treatment"
* #1000142424 "Episode of Care Records Only"
* #1000142425 "Follow-Up Records Only"
* #1000142427 "Glycoprotein IIb IIIa Inhibitors"
* #1000142428 "Cardiopulmonary Support (CPS)"
* #1000142429 "Percutaneous Heart Pump (PHP)"
* #1000142430 "Myocardial Infarction: Type Unknown"
* #1000142440 "Bleeding - Access Site"
* #1000142468 "Uninterpretable"
* #1000142470 "Exercise Induced VT"
* #1000142471 "PVC - Frequent"
* #1000142472 "PVC - Infrequent"
* #1000142473 "Symptomatic Bradyarrhythmia"
* #1000142474 "Other Electrocardiac Abnormality"
* #1000142476 "New Onset Atrial Fib"
* #1000142477 "New Onset Atrial Flutter"
* #10001424781 "Newly Diagnosed"
* #10001424786 "Obstructive CAD"
* #10001424787 "Non-Obstructive CAD"
* #10001424789 "No CAD"
* #10001424790 "Worsening Angina"
* #10001424791 "Evaluation for Exercise Clearance"
* #10001424793 "Initial PCI"
* #10001424794 "Staged PCI"
* #10001424795 "Other PCI Indication"
* #10001424797 "High Syntax Score"
* #10001424798 "Intermediate Syntax Score"
* #10001424799 "Low Syntax Score"
* #10001424802 "Telemetry Monitor"
* #10001424803 "Other Electrocardiac Assessment"
* #10001424804 "None"
* #10001424809 "ST deviation >= 0.5 mm"
* #10001424810 "Procedure Type Not Listed"
* #10001424811 "Other"
* #112000000168 "No - Not Prescribed"
* #112000000188 "Impella: Right Ventricular Support"
* #112000000208 "Mitral Clip Procedure"
* #112000000375 "Low"
* #112000000376 "Intermediate Surgical Risk"
* #112000000377 "Mild"
* #112000000378 "Moderate"
* #112000000379 "Severe"
* #112000000380 "Mild (1+)"
* #112000000381 "Moderate (2+)"
* #112000000382 "Severe (4+)"
* #112000000694 "Proprotein Convertase Subtilisin Kexin Type 9 Inhibitor"
* #112000001980 "Biventricular Axial Flow Impella Catheters (BiPella)"

CodeSystem: NCDRQuestionCodesCS
Title: "NCDR Question Codes"
Description: "Codes used for CathPCI Question Codes"
* ^caseSensitive = false
* ^experimental = true
* #100000180 "STEMI or STEMI Equivalent First Noted"
* #100000290 "Chronic Total Occlusion"
* #100000517 "Health Insurance Claim Number (HIC)"
* #100000851 "Guidewire Across Lesion"
* #100000856 "Stent Type"
* #100000862 "Location in Graft"
* #100000866 "Lesion Complexity"
* #100000880 "Percutaneous Coronary Intervention Indication"
* #100000883 "Significant Coronary Artery Dissection"
* #100000922 "Patient Restriction"
* #100000923 "Death During the Procedure"
* #100000994 "Dose Area Product"
* #100001027 "LVEF Assessed (Pre-Procedure)"
* #100001072 "Health Insurance Payment Source"
* #100001095 "Patient Enrolled in Research Study"
* #100001096 "Research Study Name"
* #100001130 "Race - Other Asian"
* #100001131 "Hispanic Ethnicity Type - Other Hispanic, Latino or Spanish Origin"
* #100001201 "Diagnostic Coronary Angiography Procedure"
* #100001255 "Percutaneous Coronary Intervention of the Left Main Coronary Artery"
* #100001256 "Smoking Amount"
* #100001257 "Cardiac CTA Results"
* #100001271 "Concomitant Procedures Performed"
* #100001274 "Chest Pain Symptom Assessment"
* #100001276 "Ventricular Support"
* #100001277 "Pharmacologic Vasopressor Support"
* #100001278 "Mechanical Ventricular Support Device"
* #100001283 "Interventions this Hospitalization"
* #100001284 "Intervention Type this Hospitalization"
* #100001289 "CABG Indication"
* #100001296 "Transferred for CABG"
* #100001297 "Native Vessel with Stenosis >= 50%"
* #100012978 "Graft Vessel with Stenosis >= 50%"
* #100012979 "Native Vessel Adjunctive Measurements Obtained"
* #100012980 "Vessel Instantaneous Wave-Free Ratio"
* #100012981 "Native Coronary Vessel Stenosis"
* #100012982 "Graft Coronary Vessel Stenosis"
* #100012983 "CABG Graft Vessel"
* #100012984 "Lesion Segment Number"
* #100012986 "PCI Status"
* #100012993 "First Device Activation Date and Time"
* #100012995 "Subsequent ECG with STEMI or STEMI Equivalent Date and Time"
* #100012997 "Subsequent ECG obtained in Emergency Department"
* #100012999 "Emergency Department Presentation at Referring Facility Date and Time"
* #100013000 "Patient Centered Reason for Delay in PCI Reason"
* #100013002 "Patient Centered Reason for Delay in PCI"
* #100013003 "Acute Coronary Syndrome Symptom Date"
* #100013004 "Acute Coronary Syndrome Symptom Time"
* #100013007 "PCI for MultiVessel Disease"
* #100013008 "Multi-vessel Procedure Type"
* #100013013 "In-stent Restenosis"
* #100013014 "In-stent Thrombosis"
* #100013015 "Previously Treated Lesion"
* #100013016 "TIMI Flow (Post-Intervention)"
* #100013017 "Q1a: Difficulty walking indoors on level ground"
* #100013018 "Q1b: Difficulty gardening, vacuuming or carrying groceries"
* #100013019 "Q1c: Difficulty lifting or moving heavy objects (e.g. furniture, children)"
* #100013020 "Q2: Had chest pain, chest tightness, or angina"
* #100013021 "Q3: Had to take nitroglycerin (Tablets or spray) for  your chest pain, chest tightness or angina"
* #100013022 "Q4: Chest pain, chest tightness or angina limited your enjoyment of life"
* #100013023 "Q5: How would you feel about this"
* #100013024 "Rose Dyspnea Scale Question 1"
* #100013025 "Rose Dyspnea Scale Question 2"
* #100013026 "Rose Dyspnea Scale Question 3"
* #100013027 "Rose Dyspnea Scale Question 4"
* #100013028 "Type of CABG Graft"
* #100013030 "Lesion Length"
* #100013039 "Hypothermia Induced Timing"
* #100013057 "Medication Code"
* #100013075 "Concomitant Procedures Performed Type"
* #100013080 "Patient Rationale for not taking medication"
* #100013084 "Discharge Medication Reconciliation Completed"
* #100013085 "Discharge Medications Reconciled"
* #100014000 "Indications for Cath Lab Visit"
* #100014004 "Cardiovascular Instability"
* #100014005 "Cardiovascular Instability Type"
* #100014009 "Mechanical Ventricular Support"
* #100014013 "First Cardiac Arrest Rhythm"
* #100014016 "Cardiac Arrest at Transferring Healthcare Facility"
* #100014017 "Cardiac Arrest at this Facility"
* #100014026 "Solid Organ Transplant Type"
* #100014031 "Number of units of PRBCs transfused"
* #100014032 "Transfusion PCI"
* #100014033 "Transfusion Surgery"
* #100014059 "Method to Determine Follow-Up Status"
* #100014067 "Cardiac Rehabilitation Referral"
* #100014074 "Arterial Access Closure Method"
* #100014075 "Arterial Cross Over"
* #100014077 "Fluoroscopy Time"
* #100014079 "Arterial Access Site"
* #100014080 "CABG Status"
* #100014081 "Cardiac Arrest After Arrival of Emergency Medical Services"
* #100014082 "Cardiac Arrest Witnessed"
* #100014083 "Closure Device Counter"
* #100014084 "Patient Transferred In for Immediate PCI for STEMI"
* #100014085 "Valvular Disease Stenosis Type"
* #100014086 "Valvular Disease Regurgitation Type"
* #100014087 "Valvular Disease Stenosis Severity"
* #100014089 "Valvular Disease Regurgitation Severity"
* #100014233 "Medication Dose"
* #1000142348 "Navigate through Graft to Native Lesion"
* #1000142349 "Device Deployed"
* #1000142350 "Severe Calcification"
* #1000142356 "Graft Vessel Adjunctive Measurements Obtained"
* #1000142364 "Follow-Up Assessment Date"
* #1000142366 "Decision for PCI with Surgical Consult"
* #1000142367 "Cardiovascular Treatment Decision"
* #1000142372 "Follow-Up Reference Procedure Start Date and Time"
* #1000142373 "Follow-Up Date of Death"
* #1000142374 "Intracoronary Device(s) Used"
* #1000142375 "Intracoronary Device Diameter"
* #1000142376 "Intracoronary Device Length"
* #1000142377 "Follow-Up Events"
* #1000142378 "Follow-Up Events Occurred"
* #1000142379 "Follow-Up Event Dates"
* #1000142381 "Canadian Study of Health and Aging (CSHA) Clinical Frailty Scale"
* #1000142398 "Intracoronary Device Associated Lesion"
* #1000142417 "Follow-Up Devices Event Occurred In"
* #1000142418 "Functional Capacity"
* #1000142420 "Surgical Risk"
* #1000142421 "Venous Access"
* #1000142423 "Submission Type"
* #1000142426 "Follow-Up Unique Key"
* #1000142431 "Stress Test Performed"
* #1000142434 "Stress Test Risk/Extent of Ischemia"
* #1000142436 "Follow-Up Reference Episode Arrival Date and Time"
* #1000142437 "Follow-Up Reference Episode Discharge Date and Time"
* #1000142438 "Registry Schema Version"
* #1000142441 "Lesion Counter"
* #1000142442 "Stenosis Immediately Prior to Treatment"
* #1000142443 "Lesion In Graft"
* #1000142447 "Birth Date"
* #1000142448 "Sex"
* #1000142449 "Patient Zip Code"
* #1000142450 "Arrival Date and Time"
* #1000142451 "Admitting Provider"
* #1000142452 "Attending Provider"
* #1000142453 "Discharge Provider"
* #1000142454 "Diagnostic Catheterization Operator"
* #1000142455 "PCI Operator"
* #1000142457 "Discharge Date and Time"
* #1000142459 "Procedure End Date and Time"
* #1000142460 "Procedure Start Date and Time"
* #1000142461 "Stenosis (Post-Intervention)"
* #1000142463 "Patient Name"
* #1000142464 "Heart Failure Newly Diagnosed"
* #1000142465 "Heart Failure Type"
* #1000142467 "Electrocardiac Assessment Results"
* #1000142469 "New Antiarrhythmic Therapy Initiated Prior to Cath Lab"
* #1000142475 "Non-Sustained Ventricular Tachycardia Type"
* #1000142478 "Intra/Post-Procedure Events"
* #1000142479 "Intra/Post-Procedure Events Occurred"
* #10001424303 "Stress Test Results"
* #10001424780 "Intra/Post-Procedure Event Date and Time"
* #10001424782 "Prior Diagnostic Coronary Angiography Procedure without intervention"
* #10001424783 "Prior Diagnostic Coronary Angiography Procedure Date"
* #10001424784 "Prior Diagnostic Coronary Angiography Procedure Results"
* #10001424792 "CABG Planned after Discharge"
* #10001424796 "Syntax Score"
* #10001424801 "Electrocardiac Assessment Method"
* #10001424808 "Cardiac Arrest Out of Healthcare Facility"
* #112000000348 "TIMI Flow (Pre-Intervention)"
* #112000000349 "Closure Method Not Documented"

ValueSet: NCDRQuestionVS
Id: ncdrq
Title: "All codes used as NCDR questions for CathPCI"
Description: "Full NCDR Question Set"
* ^experimental = true
* include codes from system NCDRQuestionCodesCS


CodeSystem: NCDRValidationErrors
Id: NCDRValidationErrors
Title: "NCDRValidationErrors"
Description: "All errors for CathPCI Validation"
* ^caseSensitive = true
* ^experimental = true
* #0 "OK-0" "No Errors or Warnings."
* #1 "Length-1" "Participant ID (1000) must be less than or equal to 6."
* #2 "Length-2" "Participant Name (1010) must be less than or equal to 100."
* #3 "Length-3" "Time Frame of Data Submission (1020) must be less than or equal to 6."
* #4 "Length-4" "Transmission Number (1040) must be less than or equal to 9."
* #5 "Length-5" "Vendor Identifier (1050) must be less than or equal to 15."
* #6 "Length-6" "Vendor Software Version (1060) must be less than or equal to 20."
* #7 "Length-7" "Registry Identifier (1070) must be less than or equal to 30."
* #10 "Length-10" "First Name (2010) must be less than or equal to 50."
* #11 "Length-11" "Middle Name (2020) must be less than or equal to 50."
* #13 "Length-13" "Patient Zip Code (2065) must be less than or equal to 5."
* #16 "Length-16" "Research Study Name (3025) must be less than or equal to 50."
* #17 "Length-17" "Research Study Patient ID (3030) must be less than or equal to 50."
* #41 "Length-41" "Diagnostic Catheterization Operator First Name (7047) must be less than or equal to 50."
* #42 "Length-42" "Diagnostic Catheterization Operator Middle Name (7048) must be less than or equal to 50."
* #43 "Length-43" "Diagnostic Catheterization Operator Last Name (7046) must be less than or equal to 50."
* #45 "Length-45" "PCI Operator First Name (7052) must be less than or equal to 50."
* #46 "Length-46" "PCI Operator Middle Name (7053) must be less than or equal to 50."
* #47 "Length-47" "PCI Operator NPI (7054) must be less than or equal to 10."
* #48 "Length-48" "Diagnostic Catheterization Operator NPI (7049) must be less than or equal to 10."
* #49 "Length-49" "Lesion Counter (8000) must be less than or equal to 3."
* #50 "Length-50" "Agatston Calcium Score (5255) must be less than or equal to 4."
* #51 "Length-51" "Closure Device Counter (7330) must be less than or equal to 3."
* #55 "Length-55" "Admitting Provider NPI (3053) must be less than or equal to 10."
* #59 "Length-59" "Attending Provider NPI (3058) must be less than or equal to 10."
* #60 "Length-60" "Discharge Provider First Name (10071) must be less than or equal to 50."
* #61 "Length-61" "Discharge Provider Last Name (10070) must be less than or equal to 50."
* #62 "Length-62" "Discharge Provider Middle Name (10072) must be less than or equal to 50."
* #63 "Length-63" "Discharge Provider NPI (10073) must be less than or equal to 10."
* #70 "Length-70" "Intracoronary Device Counter (8027) must be less than or equal to 3."
* #71 "Length-71" "Research Study Name (11009) must be less than or equal to 50."
* #72 "Length-72" "Research Study Patient ID (11010) must be less than or equal to 50."
* #73 "Length-73" "Intracoronary Unique Device Identifier (8029) must be less than or equal to 150."
* #74 "Length-74" "Intracoronary Device Associated Lesion (8030) must be less than or equal to 3."
* #75 "Length-75" "Follow-Up Unique Key (10999) must be less than or equal to 50."
* #81 "Precision-81" "Height (6000) must have a precision of 5."
* #82 "Precision-82" "Weight (6005) must have a precision of 5."
* #87 "Precision-87" "Hemoglobin (6030) must have a precision of 4."
* #91 "Precision-91" "Creatinine (6050) must have a precision of 4."
* #96 "Precision-96" "Cumulative Air Kerma (7210) must have a precision of 5."
* #97 "Precision-97" "Dose Area Product (7220) must have a precision of 7."
* #98 "Precision-98" "High-density Lipoprotein (6105) must have a precision of 3."
* #99 "Precision-99" "Total Cholesterol (6100) must have a precision of 4."
* #100 "Precision-100" "Fluoroscopy Time (7214) must have a precision of 4."
* #101 "Precision-101" "Contrast Volume (7215) must have a precision of 3."
* #102 "Precision-102" "Lesion Length (8020) must have a precision of 3."
* #103 "Precision-103" "Stenosis (Post-Intervention) (8025) must have a precision of 3."
* #104 "Precision-104" "Stenosis Immediately Prior to Treatment (8004) must have a precision of 3."
* #106 "Precision-106" "LVEF % (Pre-Procedure) (5116) must have a precision of 2."
* #107 "Precision-107" "PreProcedure Troponin I  (6090) must have a precision of 6."
* #108 "Precision-108" "PostProcedure Troponin I  (8515) must have a precision of 6."
* #109 "Precision-109" "Troponin T (Pre-Procedure) (6095) must have a precision of 6."
* #110 "Precision-110" "Troponin T (Post-Procedure) (8520) must have a precision of 6."
* #111 "Precision-111" "Creatinine (8510) must have a precision of 4."
* #112 "Precision-112" "Hemoglobin (8505) must have a precision of 4."
* #113 "Precision-113" "Hemoglobin (10065) must have a precision of 4."
* #114 "Precision-114" "Creatinine (10060) must have a precision of 4."
* #116 "Precision-116" "Native Vessel Instantaneous Wave-Free Ratio (7513) must have a precision of 3."
* #117 "Precision-117" "Native Vessel Intravascular Ultrasonography (7514) must have a precision of 4."
* #118 "Precision-118" "Native Vessel Optical Coherence Tomography (7515) must have a precision of 4."
* #120 "Precision-120" "Graft Coronary Vessel Stenosis (7528) must have a precision of 3."
* #124 "Precision-124" "Number of units of PRBCs transfused (9276) must have a precision of 3."
* #125 "Precision-125" "Native Vessel Fractional Flow Reserve Ratio (7512) must have a precision of 3."
* #126 "Precision-126" "Intracoronary Device Length (8032) must have a precision of 3."
* #136 "Precision-136" "Systolic Blood Pressure (6016) must have a precision of 3."
* #138 "Precision-138" "Graft Vessel Instantaneous Wave-Free Ratio (7533) must have a precision of 3."
* #139 "Precision-139" "Graft Vessel Optical Coherence Tomography (7535) must have a precision of 4."
* #140 "Precision-140" "Graft Vessel Intravascular Ultrasonography (7534) must have a precision of 4."
* #141 "Precision-141" "Graft Vessel Fractional Flow Reserve Ratio (7532) must have a precision of 3."
* #143 "Precision-143" "Heart Rate (6011) must have a precision of 3."
* #149 "Scale-149" "Height (6000) must be a scale of 2."
* #150 "Scale-150" "Weight (6005) must be a scale of 2."
* #155 "Scale-155" "Hemoglobin (6030) must be a scale of 2."
* #159 "Scale-159" "Creatinine (6050) must be a scale of 2."
* #166 "Scale-166" "High-density Lipoprotein (6105) must be a scale of 0."
* #167 "Scale-167" "Total Cholesterol (6100) must be a scale of 0."
* #168 "Scale-168" "Fluoroscopy Time (7214) must be a scale of 1."
* #171 "Scale-171" "Stenosis (Post-Intervention) (8025) must be a scale of 0."
* #172 "Scale-172" "Stenosis Immediately Prior to Treatment (8004) must be a scale of 0."
* #174 "Scale-174" "LVEF % (Pre-Procedure) (5116) must be a scale of 0."
* #175 "Scale-175" "PreProcedure Troponin I  (6090) must be a scale of 2."
* #176 "Scale-176" "PostProcedure Troponin I  (8515) must be a scale of 2."
* #177 "Scale-177" "Troponin T (Pre-Procedure) (6095) must be a scale of 2."
* #178 "Scale-178" "Troponin T (Post-Procedure) (8520) must be a scale of 2."
* #179 "Scale-179" "Creatinine (8510) must be a scale of 2."
* #180 "Scale-180" "Hemoglobin (8505) must be a scale of 2."
* #181 "Scale-181" "Hemoglobin (10065) must be a scale of 2."
* #182 "Scale-182" "Creatinine (10060) must be a scale of 2."
* #184 "Scale-184" "Native Vessel Instantaneous Wave-Free Ratio (7513) must be a scale of 2."
* #185 "Scale-185" "Native Vessel Intravascular Ultrasonography (7514) must be a scale of 2."
* #186 "Scale-186" "Native Vessel Optical Coherence Tomography (7515) must be a scale of 2."
* #188 "Scale-188" "Graft Coronary Vessel Stenosis (7528) must be a scale of 0."
* #193 "Scale-193" "Native Vessel Fractional Flow Reserve Ratio (7512) must be a scale of 2."
* #194 "Scale-194" "Intracoronary Device Length (8032) must be a scale of 0."
* #213 "Scale-213" "Systolic Blood Pressure (6016) must be a scale of 0."
* #215 "Scale-215" "Graft Vessel Instantaneous Wave-Free Ratio (7533) must be a scale of 2."
* #216 "Scale-216" "Graft Vessel Optical Coherence Tomography (7535) must be a scale of 2."
* #217 "Scale-217" "Graft Vessel Intravascular Ultrasonography (7534) must be a scale of 2."
* #218 "Scale-218" "Graft Vessel Fractional Flow Reserve Ratio (7532) must be a scale of 2."
* #223 "Scale-223" "Heart Rate (6011) must be a scale of 0."
* #226 "Valid Min-226" "Creatinine (6050) must be greater than 0.100000."
* #228 "Valid Min-228" "High-density Lipoprotein (6105) must be greater than 0.000000."
* #229 "Valid Min-229" "Total Cholesterol (6100) must be greater than 0.000000."
* #230 "Valid Min-230" "Creatinine (8510) must be greater than 0.100000."
* #231 "Valid Min-231" "Creatinine (10060) must be greater than 0.100000."
* #234 "Valid Min-234" "Systolic Blood Pressure (6016) must be greater than 1.000000."
* #235 "Valid Min-235" "Height (6000) must be greater than 20.000000."
* #236 "Valid Min-236" "Hemoglobin (6030) must be greater than 1.000000."
* #237 "Valid Min-237" "Hemoglobin (8505) must be greater than 1.000000."
* #238 "Valid Min-238" "Hemoglobin (10065) must be greater than 1.000000."
* #242 "Valid Min-242" "Stenosis (Post-Intervention) (8025) must be greater than 0.000000."
* #243 "Valid Min-243" "Stenosis Immediately Prior to Treatment (8004) must be greater than 0.000000."
* #244 "Valid Min-244" "LVEF % (Pre-Procedure) (5116) must be greater than 1.000000."
* #246 "Valid Min-246" "Graft Coronary Vessel Stenosis (7528) must be greater than 0.000000."
* #247 "Valid Min-247" "LVEF % (Diagnostic Left Heart Cath) (7061) must be greater than 1.000000."
* #254 "Valid Min-254" "Weight (6005) must be greater than 10.000000."
* #255 "Valid Min-255" "Dose Area Product (7220) must be greater than 100.000000."
* #256 "Valid Min-256" "Dose Area Product (7220) must be greater than 100.000000."
* #257 "Valid Min-257" "Dose Area Product (7220) must be greater than 10.000000."
* #258 "Valid Min-258" "Dose Area Product (7220) must be greater than 1.000000."
* #259 "Valid Min-259" "Dose Area Product (7220) must be greater than 1000.000000."
* #260 "Valid Min-260" "Cumulative Air Kerma (7210) must be greater than 1.000000."
* #261 "Valid Min-261" "Cumulative Air Kerma (7210) must be greater than 1.000000."
* #263 "Valid Min-263" "Heart Rate (6011) must be greater than 20.000000."
* #267 "Valid Min-267" "Native Vessel Intravascular Ultrasonography (7514) must be greater than 0.000000."
* #268 "Valid Min-268" "Native Vessel Optical Coherence Tomography (7515) must be greater than 0.000000."
* #269 "Valid Min-269" "Graft Vessel Optical Coherence Tomography (7535) must be greater than 0.000000."
* #270 "Valid Min-270" "Graft Vessel Intravascular Ultrasonography (7534) must be greater than 0.000000."
* #271 "Valid Min-271" "Lesion Length (8020) must be greater than 1.000000."
* #272 "Valid Min-272" "Intracoronary Device Length (8032) must be greater than 1.000000."
* #274 "Valid Min-274" "PreProcedure Troponin I  (6090) must be greater than 0.000000."
* #275 "Valid Min-275" "PostProcedure Troponin I  (8515) must be greater than 0.000000."
* #276 "Valid Min-276" "Troponin T (Pre-Procedure) (6095) must be greater than 0.000000."
* #277 "Valid Min-277" "Troponin T (Post-Procedure) (8520) must be greater than 0.000000."
* #282 "Valid Min-282" "Fluoroscopy Time (7214) must be greater than 0.100000."
* #283 "Valid Min-283" "Participant ID (1000) must be greater than 1.000000."
* #284 "Valid Min-284" "Transmission Number (1040) must be greater than 1.000000."
* #289 "Valid Min-289" "Intracoronary Device Counter (8027) must be greater than 1.000000."
* #292 "Valid Min-292" "Native Vessel Fractional Flow Reserve Ratio (7512) must be greater than 0.000000."
* #293 "Valid Min-293" "Graft Vessel Instantaneous Wave-Free Ratio (7533) must be greater than 0.000000."
* #294 "Valid Min-294" "Graft Vessel Fractional Flow Reserve Ratio (7532) must be greater than 0.000000."
* #296 "Valid Min-296" "Lesion Counter (8000) must be greater than 1.000000."
* #297 "Valid Min-297" "Agatston Calcium Score (5255) must be greater than 0.000000."
* #298 "Valid Min-298" "Closure Device Counter (7330) must be greater than 1.000000."
* #300 "Valid Min-300" "Native Vessel Instantaneous Wave-Free Ratio (7513) must be greater than 0.000000."
* #303 "Valid Max-303" "Creatinine (6050) must be less than 30.000000."
* #305 "Valid Max-305" "High-density Lipoprotein (6105) must be less than 300.000000."
* #306 "Valid Max-306" "Total Cholesterol (6100) must be less than 1000.000000."
* #307 "Valid Max-307" "Creatinine (8510) must be less than 30.000000."
* #308 "Valid Max-308" "Creatinine (10060) must be less than 30.000000."
* #311 "Valid Max-311" "Systolic Blood Pressure (6016) must be less than 300.000000."
* #312 "Valid Max-312" "Height (6000) must be less than 260.000000."
* #313 "Valid Max-313" "Hemoglobin (6030) must be less than 50.000000."
* #314 "Valid Max-314" "Hemoglobin (8505) must be less than 50.000000."
* #315 "Valid Max-315" "Hemoglobin (10065) must be less than 50.000000."
* #316 "Valid Max-316" "Number of units of PRBCs transfused (9276) must be less than 100.000000."
* #319 "Valid Max-319" "Stenosis (Post-Intervention) (8025) must be less than 100.000000."
* #320 "Valid Max-320" "Stenosis Immediately Prior to Treatment (8004) must be less than 100.000000."
* #321 "Valid Max-321" "LVEF % (Pre-Procedure) (5116) must be less than 99.000000."
* #323 "Valid Max-323" "Graft Coronary Vessel Stenosis (7528) must be less than 100.000000."
* #324 "Valid Max-324" "LVEF % (Diagnostic Left Heart Cath) (7061) must be less than 99.000000."
* #331 "Valid Max-331" "Weight (6005) must be less than 700.000000."
* #332 "Valid Max-332" "Dose Area Product (7220) must be less than 500000.000000."
* #333 "Valid Max-333" "Dose Area Product (7220) must be less than 500000.000000."
* #334 "Valid Max-334" "Dose Area Product (7220) must be less than 50000.000000."
* #335 "Valid Max-335" "Dose Area Product (7220) must be less than 5000.000000."
* #336 "Valid Max-336" "Dose Area Product (7220) must be less than 5000000.000000."
* #337 "Valid Max-337" "Cumulative Air Kerma (7210) must be less than 50.000000."
* #338 "Valid Max-338" "Cumulative Air Kerma (7210) must be less than 50000.000000."
* #340 "Valid Max-340" "Heart Rate (6011) must be less than 300.000000."
* #344 "Valid Max-344" "Native Vessel Intravascular Ultrasonography (7514) must be less than 10.000000."
* #345 "Valid Max-345" "Native Vessel Optical Coherence Tomography (7515) must be less than 10.000000."
* #346 "Valid Max-346" "Graft Vessel Optical Coherence Tomography (7535) must be less than 10.000000."
* #347 "Valid Max-347" "Graft Vessel Intravascular Ultrasonography (7534) must be less than 10.000000."
* #348 "Valid Max-348" "Lesion Length (8020) must be less than 100.000000."
* #349 "Valid Max-349" "Intracoronary Device Length (8032) must be less than 100.000000."
* #351 "Valid Max-351" "PreProcedure Troponin I  (6090) must be less than 5000.000000."
* #352 "Valid Max-352" "PostProcedure Troponin I  (8515) must be less than 5000.000000."
* #353 "Valid Max-353" "Troponin T (Pre-Procedure) (6095) must be less than 5000.000000."
* #354 "Valid Max-354" "Troponin T (Post-Procedure) (8520) must be less than 5000.000000."
* #358 "Valid Max-358" "Contrast Volume (7215) must be less than 999.000000."
* #359 "Valid Max-359" "Fluoroscopy Time (7214) must be less than 300.000000."
* #360 "Valid Max-360" "Participant ID (1000) must be less than 999999.000000."
* #361 "Valid Max-361" "Transmission Number (1040) must be less than 999999999.000000."
* #366 "Valid Max-366" "Intracoronary Device Counter (8027) must be less than 999.000000."
* #369 "Valid Max-369" "Native Vessel Fractional Flow Reserve Ratio (7512) must be less than 1.000000."
* #370 "Valid Max-370" "Graft Vessel Instantaneous Wave-Free Ratio (7533) must be less than 1.000000."
* #371 "Valid Max-371" "Graft Vessel Fractional Flow Reserve Ratio (7532) must be less than 1.000000."
* #373 "Valid Max-373" "Lesion Counter (8000) must be less than 100.000000."
* #374 "Valid Max-374" "Agatston Calcium Score (5255) must be less than 6000.000000."
* #375 "Valid Max-375" "Closure Device Counter (7330) must be less than 999.000000."
* #377 "Valid Max-377" "Native Vessel Instantaneous Wave-Free Ratio (7513) must be less than 1.000000."
* #380 "Usual Min-380" "Creatinine (6050) is usually greater than 0.100000."
* #382 "Usual Min-382" "High-density Lipoprotein (6105) is usually greater than 0.000000."
* #383 "Usual Min-383" "Total Cholesterol (6100) is usually greater than 75.000000."
* #384 "Usual Min-384" "Creatinine (8510) is usually greater than 0.100000."
* #385 "Usual Min-385" "Creatinine (10060) is usually greater than 0.100000."
* #388 "Usual Min-388" "Systolic Blood Pressure (6016) is usually greater than 50.000000."
* #389 "Usual Min-389" "Height (6000) is usually greater than 100.000000."
* #390 "Usual Min-390" "Hemoglobin (6030) is usually greater than 5.000000."
* #391 "Usual Min-391" "Hemoglobin (8505) is usually greater than 5.000000."
* #392 "Usual Min-392" "Hemoglobin (10065) is usually greater than 5.000000."
* #393 "Usual Min-393" "Number of units of PRBCs transfused (9276) is usually greater than 1.000000."
* #396 "Usual Min-396" "Stenosis (Post-Intervention) (8025) is usually greater than 0.000000."
* #397 "Usual Min-397" "Stenosis Immediately Prior to Treatment (8004) is usually greater than 0.000000."
* #398 "Usual Min-398" "LVEF % (Pre-Procedure) (5116) is usually greater than 5.000000."
* #400 "Usual Min-400" "Graft Coronary Vessel Stenosis (7528) is usually greater than 0.000000."
* #401 "Usual Min-401" "LVEF % (Diagnostic Left Heart Cath) (7061) is usually greater than 5.000000."
* #408 "Usual Min-408" "Weight (6005) is usually greater than 40.000000."
* #409 "Usual Min-409" "Dose Area Product (7220) is usually greater than 100.000000."
* #410 "Usual Min-410" "Dose Area Product (7220) is usually greater than 100.000000."
* #411 "Usual Min-411" "Dose Area Product (7220) is usually greater than 10.000000."
* #412 "Usual Min-412" "Dose Area Product (7220) is usually greater than 1.000000."
* #413 "Usual Min-413" "Dose Area Product (7220) is usually greater than 1000.000000."
* #414 "Usual Min-414" "Cumulative Air Kerma (7210) is usually greater than 1.000000."
* #415 "Usual Min-415" "Cumulative Air Kerma (7210) is usually greater than 1.000000."
* #417 "Usual Min-417" "Heart Rate (6011) is usually greater than 50.000000."
* #421 "Usual Min-421" "Native Vessel Intravascular Ultrasonography (7514) is usually greater than 1.000000."
* #422 "Usual Min-422" "Native Vessel Optical Coherence Tomography (7515) is usually greater than 1.000000."
* #423 "Usual Min-423" "Graft Vessel Optical Coherence Tomography (7535) is usually greater than 1.000000."
* #424 "Usual Min-424" "Graft Vessel Intravascular Ultrasonography (7534) is usually greater than 1.000000."
* #425 "Usual Min-425" "Lesion Length (8020) is usually greater than 1.000000."
* #426 "Usual Min-426" "Intracoronary Device Length (8032) is usually greater than 5.000000."
* #428 "Usual Min-428" "PreProcedure Troponin I  (6090) is usually greater than 0.000000."
* #429 "Usual Min-429" "PostProcedure Troponin I  (8515) is usually greater than 0.000000."
* #430 "Usual Min-430" "Troponin T (Pre-Procedure) (6095) is usually greater than 0.000000."
* #431 "Usual Min-431" "Troponin T (Post-Procedure) (8520) is usually greater than 0.000000."
* #435 "Usual Min-435" "Contrast Volume (7215) is usually greater than 5.000000."
* #436 "Usual Min-436" "Fluoroscopy Time (7214) is usually greater than 0.100000."
* #438 "Usual Min-438" "Agatston Calcium Score (5255) is usually greater than 0.000000."
* #440 "Usual Min-440" "Native Vessel Instantaneous Wave-Free Ratio (7513) is usually greater than 0.000000."
* #444 "Usual Min-444" "Native Vessel Fractional Flow Reserve Ratio (7512) is usually greater than 0.000000."
* #445 "Usual Min-445" "Graft Vessel Instantaneous Wave-Free Ratio (7533) is usually greater than 0.000000."
* #446 "Usual Min-446" "Graft Vessel Fractional Flow Reserve Ratio (7532) is usually greater than 0.000000."
* #448 "Usual Max-448" "Creatinine (6050) is usually less than 5.000000."
* #450 "Usual Max-450" "High-density Lipoprotein (6105) is usually less than 100.000000."
* #451 "Usual Max-451" "Total Cholesterol (6100) is usually less than 300.000000."
* #452 "Usual Max-452" "Creatinine (8510) is usually less than 5.000000."
* #453 "Usual Max-453" "Creatinine (10060) is usually less than 5.000000."
* #456 "Usual Max-456" "Systolic Blood Pressure (6016) is usually less than 220.000000."
* #457 "Usual Max-457" "Height (6000) is usually less than 225.000000."
* #458 "Usual Max-458" "Hemoglobin (6030) is usually less than 20.000000."
* #459 "Usual Max-459" "Hemoglobin (8505) is usually less than 20.000000."
* #460 "Usual Max-460" "Hemoglobin (10065) is usually less than 20.000000."
* #461 "Usual Max-461" "Number of units of PRBCs transfused (9276) is usually less than 5.000000."
* #464 "Usual Max-464" "Stenosis (Post-Intervention) (8025) is usually less than 100.000000."
* #465 "Usual Max-465" "Stenosis Immediately Prior to Treatment (8004) is usually less than 100.000000."
* #466 "Usual Max-466" "LVEF % (Pre-Procedure) (5116) is usually less than 70.000000."
* #468 "Usual Max-468" "Graft Coronary Vessel Stenosis (7528) is usually less than 100.000000."
* #469 "Usual Max-469" "LVEF % (Diagnostic Left Heart Cath) (7061) is usually less than 70.000000."
* #476 "Usual Max-476" "Weight (6005) is usually less than 200.000000."
* #477 "Usual Max-477" "Dose Area Product (7220) is usually less than 70000.000000."
* #478 "Usual Max-478" "Dose Area Product (7220) is usually less than 70000.000000."
* #479 "Usual Max-479" "Dose Area Product (7220) is usually less than 7000.000000."
* #480 "Usual Max-480" "Dose Area Product (7220) is usually less than 700.000000."
* #481 "Usual Max-481" "Dose Area Product (7220) is usually less than 700000.000000."
* #482 "Usual Max-482" "Cumulative Air Kerma (7210) is usually less than 10.000000."
* #483 "Usual Max-483" "Cumulative Air Kerma (7210) is usually less than 10000.000000."
* #485 "Usual Max-485" "Heart Rate (6011) is usually less than 100.000000."
* #489 "Usual Max-489" "Native Vessel Intravascular Ultrasonography (7514) is usually less than 9.000000."
* #490 "Usual Max-490" "Native Vessel Optical Coherence Tomography (7515) is usually less than 9.000000."
* #491 "Usual Max-491" "Graft Vessel Optical Coherence Tomography (7535) is usually less than 9.000000."
* #492 "Usual Max-492" "Graft Vessel Intravascular Ultrasonography (7534) is usually less than 9.000000."
* #493 "Usual Max-493" "Lesion Length (8020) is usually less than 50.000000."
* #494 "Usual Max-494" "Intracoronary Device Length (8032) is usually less than 40.000000."
* #496 "Usual Max-496" "PreProcedure Troponin I  (6090) is usually less than 1000.000000."
* #497 "Usual Max-497" "PostProcedure Troponin I  (8515) is usually less than 1000.000000."
* #498 "Usual Max-498" "Troponin T (Pre-Procedure) (6095) is usually less than 1000.000000."
* #499 "Usual Max-499" "Troponin T (Post-Procedure) (8520) is usually less than 1000.000000."
* #503 "Usual Max-503" "Contrast Volume (7215) is usually less than 300.000000."
* #504 "Usual Max-504" "Fluoroscopy Time (7214) is usually less than 30.000000."
* #506 "Usual Max-506" "Agatston Calcium Score (5255) is usually less than 400.000000."
* #508 "Usual Max-508" "Native Vessel Instantaneous Wave-Free Ratio (7513) is usually less than 1.000000."
* #512 "Usual Max-512" "Native Vessel Fractional Flow Reserve Ratio (7512) is usually less than 1.000000."
* #513 "Usual Max-513" "Graft Vessel Instantaneous Wave-Free Ratio (7533) is usually less than 1.000000."
* #514 "Usual Max-514" "Graft Vessel Fractional Flow Reserve Ratio (7532) is usually less than 1.000000."
* #3075 "Length-3075" "Last Name (2000) must be less than or equal to 50."
* #3076 "Length-3076" "SSN (2030) must be less than or equal to 9."
* #3077 "Length-3077" "Patient ID (2040) must be less than or equal to 9."
* #3078 "Valid Min-3078" "Patient ID (2040) must be greater than 1.000000."
* #3079 "Valid Max-3079" "Patient ID (2040) must be less than 999999999.000000."
* #3080 "Length-3080" "Other ID (2045) must be less than or equal to 50."
* #3143 "Length-3143" "Health Insurance Claim Number (HIC) (3015) must be less than or equal to 20."
* #3144 "Length-3144" "PCI Operator Last Name (7051) must be less than or equal to 50."
* #3146 "Length-3146" "Admitting Provider Middle Name (3052) must be less than or equal to 50."
* #3148 "Precision-3148" "Native Coronary Vessel Stenosis (7508) must have a precision of 3."
* #3149 "Precision-3149" "Intracoronary Device Diameter (8031) must have a precision of 4."
* #3150 "Scale-3150" "Native Coronary Vessel Stenosis (7508) must be a scale of 0."
* #3151 "Scale-3151" "Intracoronary Device Diameter (8031) must be a scale of 2."
* #3152 "Valid Min-3152" "Intracoronary Device Diameter (8031) must be greater than 0.010000."
* #3153 "Valid Min-3153" "Native Coronary Vessel Stenosis (7508) must be greater than 0.000000."
* #3154 "Valid Max-3154" "Intracoronary Device Diameter (8031) must be less than 10.000000."
* #3155 "Valid Max-3155" "Native Coronary Vessel Stenosis (7508) must be less than 100.000000."
* #3156 "Usual Min-3156" "Intracoronary Device Diameter (8031) is usually greater than 1.000000."
* #3157 "Usual Min-3157" "Native Coronary Vessel Stenosis (7508) is usually greater than 0.000000."
* #3158 "Usual Max-3158" "Intracoronary Device Diameter (8031) is usually less than 6.000000."
* #3159 "Usual Max-3159" "Native Coronary Vessel Stenosis (7508) is usually less than 100.000000."
* #3160 "Length-3160" "Closure Method Unique Device Identifier (7333) must be less than or equal to 150."
* #3588 "Precision-3588" "LVEF % (Diagnostic Left Heart Cath) (7061) must have a precision of 2."
* #4111 "Valid Min-4111" "Number of units of PRBCs transfused (9276) must be greater than 0.000000."
* #4112 "Valid Min-4112" "Contrast Volume (7215) must be greater than 0.000000."
* #4666 "Length-4666" "Attending Provider First Name (3056) must be less than or equal to 50."
* #4667 "Length-4667" "Attending Provider Last Name (3055) must be less than or equal to 50."
* #4668 "Length-4668" "Attending Provider Middle Name (3057) must be less than or equal to 50."
* #4687 "Length-4687" "Admitting Provider First Name (3051) must be less than or equal to 50."
* #4688 "Length-4688" "Admitting Provider Last Name (3050) must be less than or equal to 50."
* #4909 "Outlier-4909" "Admitting Operator Identification Number[1503] is an unknown physician."
* #4910 "Outlier-4910" "Attending Operator Identification Number[1504] is an unknown physician."
* #4911 "Outlier-4911" "Diagnostic Cath Operator Identification Number[1505] is an unknown physician."
* #4912 "Outlier-4912" "PCI Operator Identification Number[1506] is an unknown physician."
* #4913 "Outlier-4913" "Discharge Operator Identification Number[1507] is an unknown physician."
* #14451 "Scale-14451" "Contrast Volume (7215) must be a scale of 0."
* #14541 "Scale-14541" "Cumulative Air Kerma (7210) must be a scale of 0."
* #14542 "Scale-14542" "Dose Area Product (7220) must be a scale of 0."
* #14543 "Scale-14543" "Lesion Length (8020) must be a scale of 0."
* #14547 "Scale-14547" "Number of units of PRBCs transfused (9276) must be a scale of 0."
* #14548 "Scale-14548" "LVEF % (Diagnostic Left Heart Cath) (7061) must be a scale of 0."
* #CM10339 "Selection-CM10339" "Level of Consciousness (10117) is applicable when Discharge status (10105) is Deceased AND If any of [Cardiac Arrest Out of Hospital (4630) = Yes OR Cardiac Arrest at Transferring Facility (4635) = Yes OR Cardiac Arrest at this Facility (7340 ) = Yes]"
* #CM11793 "Selection-CM11793" "There is more than one selection of 'First ECG' for 'STEMI or STEMI Equivalent First Noted (7835).'  Please correct your data."
* #CM12076 "Conflict Or Missing Data-CM12076" "There is a conflict between Intra/Post-Procedure Events (9001) and Intra/Post-Procedure Events Occurred (9002) is coded both Yes And No for the same Intra/Post-Procedure Events (9001) in one or more Cath Lab Visits."
* #CM13011 "Conflict Or Missing Data-CM13011" "Intra/Post-Procedure Events Occurred (9002) = null,  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events/[##]. Missing value(s) for Intra/Post-Procedure Events (9001),  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events/[##]."
* #CM13011-1 "Conflict Or Missing Data-CM13011" "There is a conflict between Intra/Post-Procedure Events Occurred (9002) = null,  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events/[##] and Intra/Post-Procedure Events (9001) = Bleeding - Access Site or Bleeding - Gastrointestinal or Other Vascular Complications Requiring Treatment or Cardiac Tamponade or Bleeding - Hematoma at Access Site or Stroke - Ischemic or Stroke - Hemorrhagic or Stroke - Undetermined or New Requirement for Dialysis or Myocardial Infarction or Heart Failure or Cardiogenic Shock or Cardiac Arrest or Bleeding - Retroperitoneal or Bleeding - Other or Bleeding - Genitourinary,  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events/[##]."
* #CM13012 "Conflict Or Missing Data-CM13012" "Follow-Up Events Occurred (11012) = null,  from [#]. Missing value(s) for Follow-Up Events (11011),  from [#]."
* #CM13012-1 "Conflict Or Missing Data-CM13012" "There is a conflict between Follow-Up Events Occurred (11012) = null,  from [#] and Follow-Up Events (11011) = Bleeding Event or CABG: Bypass of non-stented Lesion or CABG: Bypass of stented Lesion or Myocardial Infarction: NSTEMI or Myocardial Infarction: Q Wave or Myocardial Infarction: STEMI or Myocardial Infarction: Type Unknown or PCI of non-stented Lesion or PCI of Stented Lesion or Readmission: Non-PCI Related or Stroke - Hemorrhagic or Stroke - Ischemic or Stroke - Undetermined or Thrombosis in non-stented Lesion or Thrombosis in stented Lesion,  from [#]."
* #CM13400 "Conflict Or Missing Data-CM13400" "SegmentID (8001) is repeated across Lesion Counters AND the Lesions In Graft (8015) across the lesion counters that have the same segment is either 'No' or NULL in one of the lab visit. A SegmentID (8001) shall only be used 0-1 times if lesions are not within graft."
* #CM16135 "Conflict Or Missing Data-CM16135" "There is more than one Intra Post Procedure Event (9001) of 'New Requirement for Dialysis' and event occurrence ‘YES’ on this episode. Please correct your data."
* #CM16714 "Conflict Or Missing Data-CM16714" "Pharmacologic Vasopressor Support (7421) = No,  from Cath Lab Visit(s)[#]/Cath Lab Visit and Mechanical Ventricular Support (7422) = No,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Missing value(s) for Ventricular Support (7420),  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM16714-1 "Conflict Or Missing Data-CM16714" "There is a conflict between Pharmacologic Vasopressor Support (7421) = No,  from Cath Lab Visit(s)[#]/Cath Lab Visit and Mechanical Ventricular Support (7422) = No,  from Cath Lab Visit(s)[#]/Cath Lab Visit and Ventricular Support (7420) = Yes,  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM16753 "Conflict Or Missing Data-CM16753" "Percutaneous Coronary Intervention Indication (7825) = STEMI - Rescue (After unsuccessful lytics) or STEMI (after successful lytics),  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Thrombolytics (7829),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM16753-1 "Conflict Or Missing Data-CM16753" "There is a conflict between Percutaneous Coronary Intervention Indication (7825) = STEMI - Rescue (After unsuccessful lytics) or STEMI (after successful lytics),  from Cath Lab Visit(s)[#]/PCI Procedure and Thrombolytics (7829) = No,  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM18063 "Conflict Or Missing Data-CM18063" "A Shockwave Device was selected for Intracoronary Device(s) Used (8028) {instance}. Please navigate to the AUX Data Collection Tool to complete the Shockwave data set for this patient and for this specific cath lab visit."
* #CM2916 "Selection-CM2916" "Percutaneous Coronary Intervention (PCI) (7050) = No or null,  from Cath Lab Visit(s)[#]/Procedure Information. Missing value(s) for Diagnostic Coronary Angiography Procedure (7045),  from Cath Lab Visit(s)[#]/Procedure Information."
* #CM2916-1 "Selection-CM2916" "There is a conflict between Percutaneous Coronary Intervention (PCI) (7050) = No or null,  from Cath Lab Visit(s)[#]/Procedure Information and Diagnostic Coronary Angiography Procedure (7045) = No or null,  from Cath Lab Visit(s)[#]/Procedure Information."
* #CM2922 "Outlier-CM2922" "There is a conflict between Native Vessel with Stenosis >= 50% (7505) <> Yes,  from Cath Lab Visit(s)[#]/Coronary Anatomy and Graft Vessel with Stenosis >= 50% (7525) <> Yes,  from Cath Lab Visit(s)[#]/Coronary Anatomy and Percutaneous Coronary Intervention (PCI) (7050) = Yes,  from Cath Lab Visit(s)[#]/Procedure Information."
* #CM2923-1 "Selection-CM2923" "Indications for Cath Lab Visit (7400) is (Stable Known CAD). At least one of the following must be (Yes): Prior Coronary Artery Bypass Graft (4515), Prior Diagnostic Coronary Angiography Procedure without intervention (5263), Prior Myocardial Infarction (4291), Prior Percutaneous Coronary Intervention (4495), or at least one Percutaneous Coronary Intervention (PCI) (7050) is Yes in the episode."
* #CM2930 "Outlier-CM2930" "Concomitant Procedures Performed Type (7066) = Mitral Clip Procedure,  from Cath Lab Visit(s)[#]/Procedure Information. Missing value(s) for Intervention Type this Hospitalization (10031)."
* #CM2930-1 "Outlier-CM2930" "There is a conflict between Concomitant Procedures Performed Type (7066) = Mitral Clip Procedure,  from Cath Lab Visit(s)[#]/Procedure Information and Intervention Type this Hospitalization (10031) = Valvular Intervention."
* #CM2931 "Outlier-CM2931" "Concomitant Procedures Performed Type (7066) = TAVR,  from Cath Lab Visit(s)[#]/Procedure Information. Missing value(s) for Intervention Type this Hospitalization (10031)."
* #CM2931-1 "Outlier-CM2931" "There is a conflict between Concomitant Procedures Performed Type (7066) = TAVR,  from Cath Lab Visit(s)[#]/Procedure Information and Intervention Type this Hospitalization (10031) = Valvular Intervention."
* #CM2934 "Selection-CM2934" "Cath Lab Visit (7400) contains a value of 'Resuscitated Cardiac Arrest', but all of the following values = No or NULL: Cardiac Arrest Out of Hospital Healthcare Facility (4630), Cardiac Arrest at Transferring Healthcare Facility (4635), Cardiac Arrest at this Facility (7340).  Please correct your data."
* #CM2937 "Selection-CM2937" "Indications for Cath Lab Visit (7400) = New Onset Angina <= 2 months,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Missing value(s) for Percutaneous Coronary Intervention Indication (7825),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2937-1 "Selection-CM2937" "There is a conflict between Indications for Cath Lab Visit (7400) = New Onset Angina <= 2 months,  from Cath Lab Visit(s)[#]/Cath Lab Visit and Percutaneous Coronary Intervention Indication (7825) = Stable angina,  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2938 "Selection-CM2938" "Indications for Cath Lab Visit (7400) = Resuscitated Cardiac Arrest,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Missing value(s) for Percutaneous Coronary Intervention Indication (7825),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2938-1 "Selection-CM2938" "There is a conflict between Indications for Cath Lab Visit (7400) = Resuscitated Cardiac Arrest,  from Cath Lab Visit(s)[#]/Cath Lab Visit and Percutaneous Coronary Intervention Indication (7825) = Stable angina,  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2939 "Selection-CM2939" "Cardiovascular Instability (7410) = Yes,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Missing value(s) for Percutaneous Coronary Intervention Indication (7825),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2939-1 "Selection-CM2939" "There is a conflict between Cardiovascular Instability (7410) = Yes,  from Cath Lab Visit(s)[#]/Cath Lab Visit and Percutaneous Coronary Intervention Indication (7825) = Stable angina,  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2942 "Selection-CM2942" "Indications for Cath Lab Visit (7400) = New Onset Angina <= 2 months,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Missing value(s) for Percutaneous Coronary Intervention Indication (7825),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2942-1 "Selection-CM2942" "There is a conflict between Indications for Cath Lab Visit (7400) = New Onset Angina <= 2 months,  from Cath Lab Visit(s)[#]/Cath Lab Visit and Percutaneous Coronary Intervention Indication (7825) = CAD (without ischemic Sx),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2945 "Selection-CM2945" "Indications for Cath Lab Visit (7400) = Worsening Angina,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Missing value(s) for Percutaneous Coronary Intervention Indication (7825),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2945-1 "Selection-CM2945" "There is a conflict between Indications for Cath Lab Visit (7400) = Worsening Angina,  from Cath Lab Visit(s)[#]/Cath Lab Visit and Percutaneous Coronary Intervention Indication (7825) = CAD (without ischemic Sx),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2946 "Selection-CM2946" "Indications for Cath Lab Visit (7400) = Resuscitated Cardiac Arrest,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Missing value(s) for Percutaneous Coronary Intervention Indication (7825),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2946-1 "Selection-CM2946" "There is a conflict between Indications for Cath Lab Visit (7400) = Resuscitated Cardiac Arrest,  from Cath Lab Visit(s)[#]/Cath Lab Visit and Percutaneous Coronary Intervention Indication (7825) = CAD (without ischemic Sx),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2949 "Selection-CM2949" "Percutaneous Coronary Intervention Indication (7825) = STEMI - Immediate PCI for Acute STEMI,  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Multi-vessel Procedure Type (7821),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2949-1 "Selection-CM2949" "There is a conflict between Percutaneous Coronary Intervention Indication (7825) = STEMI - Immediate PCI for Acute STEMI,  from Cath Lab Visit(s)[#]/PCI Procedure and Multi-vessel Procedure Type (7821) = Staged PCI,  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2950 "Selection-CM2950" "Percutaneous Coronary Intervention Indication (7825) = STEMI - Stable (<= 12 hrs from Sx),  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Multi-vessel Procedure Type (7821),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2950-1 "Selection-CM2950" "There is a conflict between Percutaneous Coronary Intervention Indication (7825) = STEMI - Stable (<= 12 hrs from Sx),  from Cath Lab Visit(s)[#]/PCI Procedure and Multi-vessel Procedure Type (7821) = Staged PCI,  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2951 "Selection-CM2951" "Percutaneous Coronary Intervention Indication (7825) = STEMI - Stable (> 12 hrs from Sx),  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Multi-vessel Procedure Type (7821),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2951-1 "Selection-CM2951" "There is a conflict between Percutaneous Coronary Intervention Indication (7825) = STEMI - Stable (> 12 hrs from Sx),  from Cath Lab Visit(s)[#]/PCI Procedure and Multi-vessel Procedure Type (7821) = Staged PCI,  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2952 "Selection-CM2952" "Percutaneous Coronary Intervention Indication (7825) = STEMI - Unstable (> 12 hrs from Sx),  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Multi-vessel Procedure Type (7821),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2952-1 "Selection-CM2952" "There is a conflict between Percutaneous Coronary Intervention Indication (7825) = STEMI - Unstable (> 12 hrs from Sx),  from Cath Lab Visit(s)[#]/PCI Procedure and Multi-vessel Procedure Type (7821) = Staged PCI,  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2953 "Selection-CM2953" "Percutaneous Coronary Intervention Indication (7825) = STEMI (after successful lytics),  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Multi-vessel Procedure Type (7821),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2953-1 "Selection-CM2953" "There is a conflict between Percutaneous Coronary Intervention Indication (7825) = STEMI (after successful lytics),  from Cath Lab Visit(s)[#]/PCI Procedure and Multi-vessel Procedure Type (7821) = Staged PCI,  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2954 "Selection-CM2954" "Percutaneous Coronary Intervention Indication (7825) = STEMI - Rescue (After unsuccessful lytics),  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Multi-vessel Procedure Type (7821),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2954-1 "Selection-CM2954" "There is a conflict between Percutaneous Coronary Intervention Indication (7825) = STEMI - Rescue (After unsuccessful lytics),  from Cath Lab Visit(s)[#]/PCI Procedure and Multi-vessel Procedure Type (7821) = Staged PCI,  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2955 "Selection-CM2955" "Percutaneous Coronary Intervention Indication (7825) = New Onset Angina <= 2 months,  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Multi-vessel Procedure Type (7821),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2955-1 "Selection-CM2955" "There is a conflict between Percutaneous Coronary Intervention Indication (7825) = New Onset Angina <= 2 months,  from Cath Lab Visit(s)[#]/PCI Procedure and Multi-vessel Procedure Type (7821) = Staged PCI,  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2956 "Selection-CM2956" "Percutaneous Coronary Intervention Indication (7825) = NSTE - ACS,  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Multi-vessel Procedure Type (7821),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2956-1 "Selection-CM2956" "There is a conflict between Percutaneous Coronary Intervention Indication (7825) = NSTE - ACS,  from Cath Lab Visit(s)[#]/PCI Procedure and Multi-vessel Procedure Type (7821) = Staged PCI,  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM2965 "Selection-CM2965" "Level of Consciousness (PCI Procedure) (7810) = (A) Alert,  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Level of Consciousness (Discharge) (10117)."
* #CM2965-1 "Selection-CM2965" "There is a conflict between Level of Consciousness (PCI Procedure) (7810) = (A) Alert,  from Cath Lab Visit(s)[#]/PCI Procedure and Level of Consciousness (Discharge) (10117) = (P) Pain."
* #CM2966 "Selection-CM2966" "Level of Consciousness (PCI Procedure) (7810) = (V) Verbal,  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Level of Consciousness (Discharge) (10117)."
* #CM2966-1 "Selection-CM2966" "There is a conflict between Level of Consciousness (PCI Procedure) (7810) = (V) Verbal,  from Cath Lab Visit(s)[#]/PCI Procedure and Level of Consciousness (Discharge) (10117) = (P) Pain."
* #CM2967 "Selection-CM2967" "Level of Consciousness (PCI Procedure) (7810) = (A) Alert,  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Level of Consciousness (Discharge) (10117)."
* #CM2967-1 "Selection-CM2967" "There is a conflict between Level of Consciousness (PCI Procedure) (7810) = (A) Alert,  from Cath Lab Visit(s)[#]/PCI Procedure and Level of Consciousness (Discharge) (10117) = (U) Unresponsive."
* #CM2968 "Selection-CM2968" "Level of Consciousness (PCI Procedure) (7810) = (V) Verbal,  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Level of Consciousness (Discharge) (10117)."
* #CM2968-1 "Selection-CM2968" "There is a conflict between Level of Consciousness (PCI Procedure) (7810) = (V) Verbal,  from Cath Lab Visit(s)[#]/PCI Procedure and Level of Consciousness (Discharge) (10117) = (U) Unresponsive."
* #CM2969 "Selection-CM2969" "Level of Consciousness (PCI Procedure) (7810) = (P) Pain,  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Level of Consciousness (Discharge) (10117)."
* #CM2969-1 "Selection-CM2969" "There is a conflict between Level of Consciousness (PCI Procedure) (7810) = (P) Pain,  from Cath Lab Visit(s)[#]/PCI Procedure and Level of Consciousness (Discharge) (10117) = (U) Unresponsive."
* #CM2970 "Selection-CM2970" "Level of Consciousness (PCI Procedure) (7810) = (A) Alert,  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Level of Consciousness (Discharge) (10117)."
* #CM2970-1 "Selection-CM2970" "There is a conflict between Level of Consciousness (PCI Procedure) (7810) = (A) Alert,  from Cath Lab Visit(s)[#]/PCI Procedure and Level of Consciousness (Discharge) (10117) = Unable to Assess."
* #CM2971 "Selection-CM2971" "Level of Consciousness (PCI Procedure) (7810) = (U) Unresponsive,  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Level of Consciousness (Discharge) (10117)."
* #CM2971-1 "Selection-CM2971" "There is a conflict between Level of Consciousness (PCI Procedure) (7810) = (U) Unresponsive,  from Cath Lab Visit(s)[#]/PCI Procedure and Level of Consciousness (Discharge) (10117) = Unable to Assess."
* #CM2972 "Selection-CM2972" "Level of Consciousness (PCI Procedure) (7810) = (V) Verbal,  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Level of Consciousness (Discharge) (10117)."
* #CM2972-1 "Selection-CM2972" "There is a conflict between Level of Consciousness (PCI Procedure) (7810) = (V) Verbal,  from Cath Lab Visit(s)[#]/PCI Procedure and Level of Consciousness (Discharge) (10117) = Unable to Assess."
* #CM2973 "Selection-CM2973" "Level of Consciousness (PCI Procedure) (7810) = (P) Pain,  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Level of Consciousness (Discharge) (10117)."
* #CM2973-1 "Selection-CM2973" "There is a conflict between Level of Consciousness (PCI Procedure) (7810) = (P) Pain,  from Cath Lab Visit(s)[#]/PCI Procedure and Level of Consciousness (Discharge) (10117) = Unable to Assess."
* #CM2982 "Outlier-CM2982" "Percutaneous Coronary Intervention Indication (7825) = STEMI - Immediate PCI for Acute STEMI,  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Indications for Cath Lab Visit (7400),  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM2982-1 "Outlier-CM2982" "There is a conflict between Percutaneous Coronary Intervention Indication (7825) = STEMI - Immediate PCI for Acute STEMI,  from Cath Lab Visit(s)[#]/PCI Procedure and Indications for Cath Lab Visit (7400) = ACS > 24 hrs,  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM2983 "Outlier-CM2983" "Percutaneous Coronary Intervention Indication (7825) = STEMI - Stable (<= 12 hrs from Sx),  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Indications for Cath Lab Visit (7400),  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM2983-1 "Outlier-CM2983" "There is a conflict between Percutaneous Coronary Intervention Indication (7825) = STEMI - Stable (<= 12 hrs from Sx),  from Cath Lab Visit(s)[#]/PCI Procedure and Indications for Cath Lab Visit (7400) = ACS > 24 hrs,  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM2984 "Outlier-CM2984" "Percutaneous Coronary Intervention Indication (7825) = STEMI - Stable (> 12 hrs from Sx),  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Indications for Cath Lab Visit (7400),  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM2984-1 "Outlier-CM2984" "There is a conflict between Percutaneous Coronary Intervention Indication (7825) = STEMI - Stable (> 12 hrs from Sx),  from Cath Lab Visit(s)[#]/PCI Procedure and Indications for Cath Lab Visit (7400) = ACS > 24 hrs,  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM3004 "Selection-CM3004" "Lesion Complexity (8019) = Non-High/Non-C,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. Missing value(s) for Lesion Length (8020),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]."
* #CM3004-1 "Selection-CM3004" "There is a conflict between Lesion Complexity (8019) = Non-High/Non-C,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] and Lesion Length (8020) = 20,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]."
* #CM3005 "Selection-CM3005" "Percutaneous Coronary Intervention Indication (7825) = Stable angina,  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Indications for Cath Lab Visit (7400),  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM3005-1 "Selection-CM3005" "There is a conflict between Percutaneous Coronary Intervention Indication (7825) = Stable angina,  from Cath Lab Visit(s)[#]/PCI Procedure and Indications for Cath Lab Visit (7400) = ACS > 24 hrs,  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM3006 "Selection-CM3006" "Percutaneous Coronary Intervention Indication (7825) = CAD (without ischemic Sx),  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Indications for Cath Lab Visit (7400),  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM3006-1 "Selection-CM3006" "There is a conflict between Percutaneous Coronary Intervention Indication (7825) = CAD (without ischemic Sx),  from Cath Lab Visit(s)[#]/PCI Procedure and Indications for Cath Lab Visit (7400) = ACS > 24 hrs,  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM3007 "Selection-CM3007" "Percutaneous Coronary Intervention Indication (7825) = Other PCI Indication,  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Indications for Cath Lab Visit (7400),  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM3007-1 "Selection-CM3007" "There is a conflict between Percutaneous Coronary Intervention Indication (7825) = Other PCI Indication,  from Cath Lab Visit(s)[#]/PCI Procedure and Indications for Cath Lab Visit (7400) = ACS > 24 hrs,  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM3008 "Selection-CM3008" "Percutaneous Coronary Intervention Indication (7825) = Stable angina,  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Indications for Cath Lab Visit (7400),  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM3008-1 "Selection-CM3008" "There is a conflict between Percutaneous Coronary Intervention Indication (7825) = Stable angina,  from Cath Lab Visit(s)[#]/PCI Procedure and Indications for Cath Lab Visit (7400) = ACS <= 24 hrs,  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM3018 "Selection-CM3018" "Indications for Cath Lab Visit (7400) = New Onset Angina <= 2 months,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Missing value(s) for Chest Pain Symptom Assessment (7405),  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM3018-1 "Selection-CM3018" "There is a conflict between Indications for Cath Lab Visit (7400) = New Onset Angina <= 2 months,  from Cath Lab Visit(s)[#]/Cath Lab Visit and Chest Pain Symptom Assessment (7405) = Non-anginal Chest Pain,  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM3019 "Selection-CM3019" "Indications for Cath Lab Visit (7400) = New Onset Angina <= 2 months,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Missing value(s) for Chest Pain Symptom Assessment (7405),  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM3019-1 "Selection-CM3019" "There is a conflict between Indications for Cath Lab Visit (7400) = New Onset Angina <= 2 months,  from Cath Lab Visit(s)[#]/Cath Lab Visit and Chest Pain Symptom Assessment (7405) = Asymptomatic,  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM3020 "Selection-CM3020" "Indications for Cath Lab Visit (7400) = Worsening Angina,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Missing value(s) for Chest Pain Symptom Assessment (7405),  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM3020-1 "Selection-CM3020" "There is a conflict between Indications for Cath Lab Visit (7400) = Worsening Angina,  from Cath Lab Visit(s)[#]/Cath Lab Visit and Chest Pain Symptom Assessment (7405) = Non-anginal Chest Pain,  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM3021 "Selection-CM3021" "Indications for Cath Lab Visit (7400) = Worsening Angina,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Missing value(s) for Chest Pain Symptom Assessment (7405),  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM3021-1 "Selection-CM3021" "There is a conflict between Indications for Cath Lab Visit (7400) = Worsening Angina,  from Cath Lab Visit(s)[#]/Cath Lab Visit and Chest Pain Symptom Assessment (7405) = Asymptomatic,  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM3024 "Selection-CM3024" "Indications for Cath Lab Visit (7400) = ACS <= 24 hrs,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Missing value(s) for Multi-vessel Procedure Type (7821),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM3024-1 "Selection-CM3024" "There is a conflict between Indications for Cath Lab Visit (7400) = ACS <= 24 hrs,  from Cath Lab Visit(s)[#]/Cath Lab Visit and Multi-vessel Procedure Type (7821) = Staged PCI,  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM3026 "Selection-CM3026" "Indications for Cath Lab Visit (7400) = New Onset Angina <= 2 months,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Missing value(s) for Multi-vessel Procedure Type (7821),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM3026-1 "Selection-CM3026" "There is a conflict between Indications for Cath Lab Visit (7400) = New Onset Angina <= 2 months,  from Cath Lab Visit(s)[#]/Cath Lab Visit and Multi-vessel Procedure Type (7821) = Staged PCI,  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM3027 "Selection-CM3027" "Indications for Cath Lab Visit (7400) = Worsening Angina,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Missing value(s) for Multi-vessel Procedure Type (7821),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM3027-1 "Selection-CM3027" "There is a conflict between Indications for Cath Lab Visit (7400) = Worsening Angina,  from Cath Lab Visit(s)[#]/Cath Lab Visit and Multi-vessel Procedure Type (7821) = Staged PCI,  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM3028 "Selection-CM3028" "Indications for Cath Lab Visit (7400) = Resuscitated Cardiac Arrest,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Missing value(s) for Multi-vessel Procedure Type (7821),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM3028-1 "Selection-CM3028" "There is a conflict between Indications for Cath Lab Visit (7400) = Resuscitated Cardiac Arrest,  from Cath Lab Visit(s)[#]/Cath Lab Visit and Multi-vessel Procedure Type (7821) = Staged PCI,  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM3029 "Selection-CM3029" "Indications for Cath Lab Visit (7400) = Suspected CAD,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Missing value(s) for Multi-vessel Procedure Type (7821),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM3029-1 "Selection-CM3029" "There is a conflict between Indications for Cath Lab Visit (7400) = Suspected CAD,  from Cath Lab Visit(s)[#]/Cath Lab Visit and Multi-vessel Procedure Type (7821) = Staged PCI,  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM3427 "Selection-CM3427" "Patient Transferred In for Immediate PCI for STEMI (7841) = Yes,  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Subsequent ECG with STEMI or STEMI Equivalent Date and Time (7836),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM3427-1 "Selection-CM3427" "There is a conflict between Patient Transferred In for Immediate PCI for STEMI (7841) = Yes,  from Cath Lab Visit(s)[#]/PCI Procedure and Subsequent ECG with STEMI or STEMI Equivalent Date and Time (7836) = ,  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM3428 "Selection-CM3428" "Patient Transferred In for Immediate PCI for STEMI (7841) = No,  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Subsequent ECG with STEMI or STEMI Equivalent Date and Time (7836),  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM3428-1 "Selection-CM3428" "There is a conflict between Patient Transferred In for Immediate PCI for STEMI (7841) = No,  from Cath Lab Visit(s)[#]/PCI Procedure and Subsequent ECG with STEMI or STEMI Equivalent Date and Time (7836) = ,  from Cath Lab Visit(s)[#]/PCI Procedure."
* #CM3620 "Selection-CM3620" "Percutaneous Coronary Intervention Indication (7825) = Other PCI Indication,  from Cath Lab Visit(s)[#]/PCI Procedure. Missing value(s) for Indications for Cath Lab Visit (7400),  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM3620-1 "Selection-CM3620" "There is a conflict between Percutaneous Coronary Intervention Indication (7825) = Other PCI Indication,  from Cath Lab Visit(s)[#]/PCI Procedure and Indications for Cath Lab Visit (7400) = ACS <= 24 hrs,  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM4862 "Selection-CM4862" "Native Vessel with Stenosis >= 50% (7505) = Yes,  from Cath Lab Visit(s)[#]/Coronary Anatomy. Missing value(s) for Native Coronary Vessel Stenosis (7508),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]."
* #CM4862-1 "Selection-CM4862" "There is a conflict between Native Vessel with Stenosis >= 50% (7505) = Yes,  from Cath Lab Visit(s)[#]/Coronary Anatomy and Native Coronary Vessel Stenosis (7508) = 50,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]."
* #CM4882 "Selection-CM4882" "Graft Vessel with Stenosis >= 50% (7525) = Yes,  from Cath Lab Visit(s)[#]/Coronary Anatomy. Missing value(s) for Graft Coronary Vessel Stenosis (7528),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]."
* #CM4882-1 "Selection-CM4882" "There is a conflict between Graft Vessel with Stenosis >= 50% (7525) = Yes,  from Cath Lab Visit(s)[#]/Coronary Anatomy and Graft Coronary Vessel Stenosis (7528) = 50,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]."
* #CM4887 "Outlier-CM4887" "Intervention Type this Hospitalization (10031) = Structural Heart Intervention (non-valvular). Missing value(s) for Concomitant Procedures Performed Type (7066),  from Cath Lab Visit(s)[#]/Procedure Information."
* #CM4887-1 "Outlier-CM4887" "There is a conflict between Intervention Type this Hospitalization (10031) = Structural Heart Intervention (non-valvular) and Concomitant Procedures Performed Type (7066) = Structural Repair or Left Atrial Appendage Occlusion,  from Cath Lab Visit(s)[#]/Procedure Information."
* #CM5049 "Selection-CM5049" "Cardiac Arrest Witnessed (4631) = No. Missing value(s) for Cardiac Arrest After Arrival of Emergency Medical Services (4632)."
* #CM5049-1 "Selection-CM5049" "There is a conflict between Cardiac Arrest Witnessed (4631) = No and Cardiac Arrest After Arrival of Emergency Medical Services (4632) = Yes."
* #CM5308 "Selection-CM5308" "Cause of Death (11007) is 'Acute myocardial infarction' but no MI related Events (11011) are indicated"
* #CM5309 "Selection-CM5309" "Cause of Death (11007) is 'Stroke' but no stroke related Events (11011) are indicated"
* #CM5310 "Selection-CM5310" "Cause of Death (11007) is 'Cardiovascular procedure' but no PCI related Events (11011) are indicated"
* #CM5311 "Selection-CM5311" "Cause of Death (11007) is 'Cardiovascular hemorrhage' but no bleeding event (11011) was indicated"
* #CM5370 "Selection-CM5370" "Intra/Post-Procedure Events (9001) = New Requirement for Dialysis,  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events/[##] and Currently on Dialysis (4560) = Yes. Missing value(s) for Intra/Post-Procedure Events Occurred (9002),  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events/[##]."
* #CM5370-1 "Selection-CM5370" "There is a conflict between Intra/Post-Procedure Events (9001) = New Requirement for Dialysis,  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events/[##] and Currently on Dialysis (4560) = Yes and Intra/Post-Procedure Events Occurred (9002) = Yes,  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events/[##]."
* #CM7091 "Selection-CM7091" "Device Deployed (8024) = Yes,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. Missing value(s) for Intracoronary Device Associated Lesion (8030),  from Cath Lab Visit(s)[#]/Lesions and Devices/Devices[##]."
* #CM7091-1 "Selection-CM7091" "There is a conflict between Device Deployed (8024) = Yes,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] and Intracoronary Device Associated Lesion (8030) = null,  from Cath Lab Visit(s)[#]/Lesions and Devices/Devices[##]."
* #CM7113 "Selection-CM7113" "Discharge Medication Prescribed (10205) = null,  from Discharge Medications (Prescribed at Discharge - Complete for each Episode of Care in which a PCI was attempted or performed)[#]. Missing value(s) for Discharge Medication Code (10200),  from Discharge Medications (Prescribed at Discharge - Complete for each Episode of Care in which a PCI was attempted or performed)[#]."
* #CM7113-1 "Selection-CM7113" "There is a conflict between Discharge Medication Prescribed (10205) = null,  from Discharge Medications (Prescribed at Discharge - Complete for each Episode of Care in which a PCI was attempted or performed)[#] and Discharge Medication Code (10200) = Angiotensin Converting Enzyme Inhibitor or Alirocumab or Apixaban or Angiotensin II Receptor Blocker or Aspirin or Clopidogrel or Dabigatran or Edoxaban or Evolocumab or Non-Statin or Prasugrel or Rivaroxaban or Statin or Ticagrelor or Ticlopidine or Vorapaxar or Warfarin or Beta Blocker,  from Discharge Medications (Prescribed at Discharge - Complete for each Episode of Care in which a PCI was attempted or performed)[#]."
* #CM7877 "Outlier-CM7877" "Prior Myocardial Infarction (4291) = Yes. Missing value(s) for Indications for Cath Lab Visit (7400),  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM7877-1 "Outlier-CM7877" "There is a conflict between Prior Myocardial Infarction (4291) = Yes and Indications for Cath Lab Visit (7400) = Suspected CAD,  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM7880 "Selection-CM7880" "Prior Coronary Artery Bypass Graft (4515) != Yes and Intervention Type this Hospitalization (10031) != CABG or null. Missing value(s) for Lesion In Graft (8015),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]."
* #CM7880-1 "Selection-CM7880" "There is a conflict between Prior Coronary Artery Bypass Graft (4515) != Yes and Intervention Type this Hospitalization (10031) != CABG or null and Lesion In Graft (8015) = Yes,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]."
* #CM7884 "Outlier-CM7884" "PreProcedure Medication Administered (6991) = null,  from Cath Lab Visit(s)[#]/Pre-procedure Medication/Pre-Procedure Medication[##]. Missing value(s) for PreProcedure Medication Code (6986),  from Cath Lab Visit(s)[#]/Pre-procedure Medication/Pre-Procedure Medication[##]."
* #CM7884-1 "Outlier-CM7884" "There is a conflict between PreProcedure Medication Administered (6991) = null,  from Cath Lab Visit(s)[#]/Pre-procedure Medication/Pre-Procedure Medication[##] and PreProcedure Medication Code (6986) = Antiarrhythmic Agent Other or Aspirin or Beta Blocker or Calcium Channel Blocking Agent or Long Acting Nitrate or Non-Statin or Ranolazine or Statin or Proprotein Convertase Subtilisin Kexin Type 9 Inhibitor,  from Cath Lab Visit(s)[#]/Pre-procedure Medication/Pre-Procedure Medication[##]."
* #CM7885 "Selection-CM7885" "Procedure Medications Administered (7995) = null,  from Cath Lab Visit(s)[#]/PCI Procedure/[##]. Missing value(s) for PCI Procedure Medication Code (7990),  from Cath Lab Visit(s)[#]/PCI Procedure/[##]."
* #CM7885-1 "Selection-CM7885" "There is a conflict between Procedure Medications Administered (7995) = null,  from Cath Lab Visit(s)[#]/PCI Procedure/[##] and PCI Procedure Medication Code (7990) = Apixaban or Bivalirudin or Cangrelor or Clopidogrel or Dabigatran or Edoxaban or Fondaparinux or Glycoprotein IIb IIIa Inhibitors or Heparin Derivative or Low Molecular Weight Heparin or Prasugrel or Rivaroxaban or Ticagrelor or Unfractionated Heparin or Vorapaxar or Warfarin or Argatroban,  from Cath Lab Visit(s)[#]/PCI Procedure/[##]."
* #CM7886 "Outlier-CM7886" "Prior Coronary Artery Bypass Graft (4515) = Yes. Missing value(s) for Indications for Cath Lab Visit (7400),  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM7886-1 "Outlier-CM7886" "There is a conflict between Prior Coronary Artery Bypass Graft (4515) = Yes and Indications for Cath Lab Visit (7400) = Suspected CAD,  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM7887 "Outlier-CM7887" "Prior Percutaneous Coronary Intervention (4495) = Yes. Missing value(s) for Indications for Cath Lab Visit (7400),  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM7887-1 "Outlier-CM7887" "There is a conflict between Prior Percutaneous Coronary Intervention (4495) = Yes and Indications for Cath Lab Visit (7400) = Suspected CAD,  from Cath Lab Visit(s)[#]/Cath Lab Visit."
* #CM9727 "Selection-CM9727" "When Graft Vessel with Stenosis >= 50% (7525) is set to 'Yes' a CABG must be indicated in Prior Coronary Artery Bypass Graft (4515) -or- in Interventions this Hospitalization (10030/10031) with the Coronary Artery Bypass Graft Date and Time (10011) prior to the Procedure Start Date and Time (7000)"
* #DC15638-1 "Date Comparison-DC15638" "Most Recent MI Date (4296) should be greater than or equal to Birth Date (2050)."
* #DC15638-2 "Date Comparison-DC15638" "Most Recent Percutaneous Coronary Intervention Date (4503) should be greater than or equal to Birth Date (2050)."
* #DC15638-3 "Date Comparison-DC15638" "Most Recent Coronary Artery Bypass Graft Date (4521) should be greater than or equal to Birth Date (2050)."
* #DC15638-4 "Date Comparison-DC15638" "Cardiac CTA Date (5226) should be greater than or equal to Birth Date (2050)."
* #DC15638-5 "Date Comparison-DC15638" "Stress Test Date (5204) should be greater than or equal to Birth Date (2050)."
* #DC15638-6 "Date Comparison-DC15638" "Agatston Calcium Score Date (5257) should be greater than or equal to Birth Date (2050)."
* #DC15638-7 "Date Comparison-DC15638" "Prior Diagnostic Coronary Angiography Procedure Date (5264) should be greater than or equal to Birth Date (2050)."
* #DC15638-8 "Date Comparison-DC15638" "Acute Coronary Syndrome Symptom Date (7826) should be greater than or equal to Birth Date (2050)."
* #DC15638-9 "Date Comparison-DC15638" "Previously Treated Lesion Date (8009) should be greater than or equal to Birth Date (2050)."
* #DC15638-11 "Date Comparison-DC15638" "Follow-Up Assessment Date (11000) should be greater than or equal to Birth Date (2050)."
* #DC15638-12 "Date Comparison-DC15638" "Follow-Up Date of Death (11006) should be greater than or equal to Birth Date (2050)."
* #DC15638-10 "Date Comparison-DC15638" "Follow-Up Event Dates (11014) should be greater than or equal to Birth Date (2050)."
* #DC15639-1 "Date Comparison-DC15639" "Arrival Date and Time (3001) should be greater than or equal to Birth Date (2050)."
* #DC15639-12 "Date Comparison-DC15639" "Thrombolytic Therapy Date and Time (7830) should be greater than or equal to Birth Date (2050)."
* #DC15639-13 "Date Comparison-DC15639" "Subsequent ECG with STEMI or STEMI Equivalent Date and Time (7836) should be greater than or equal to Birth Date (2050)."
* #DC15639-14 "Date Comparison-DC15639" "Emergency Department Presentation at Referring Facility Date and Time (7842) should be greater than or equal to Birth Date (2050)."
* #DC15639-2 "Date Comparison-DC15639" "First Device Activation Date and Time (7845) should be greater than or equal to Birth Date (2050)."
* #DC15639-3 "Date Comparison-DC15639" "Intra/Post-Procedure Event Date and Time (9003) should be greater than or equal to Birth Date (2050)."
* #DC15639-4 "Date Comparison-DC15639" "Discharge Date and Time (10101) should be greater than or equal to Birth Date (2050)."
* #DC15639-5 "Date Comparison-DC15639" "Coronary Artery Bypass Graft Date and Time (10011) should be greater than or equal to Birth Date (2050)."
* #DC15639-6 "Date Comparison-DC15639" "Follow-Up Reference Episode Arrival Date and Time (11002) should be greater than or equal to Birth Date (2050)."
* #DC15639-7 "Date Comparison-DC15639" "Follow-Up Reference Episode Discharge Date and Time (11015) should be greater than or equal to Birth Date (2050)."
* #DC15639-8 "Date Comparison-DC15639" "Follow-Up Reference Procedure Start Date and Time (11001) should be greater than or equal to Birth Date (2050)."
* #DC15639-9 "Date Comparison-DC15639" "Procedure Start Date and Time (7000) should be greater than or equal to Birth Date (2050)."
* #DC15639-10 "Date Comparison-DC15639" "Procedure End Date and Time (7005) should be greater than or equal to Birth Date (2050)."
* #DC16710 "Date-DC16710" "Procedure End Date and Time (7005) should be less than or equal to Discharge Date and Time (10101)."
* #DC2980 "Date-DC2980" "Coronary Artery Bypass Graft Date and Time (10011) should be less than Discharge Date and Time (10101)."
* #DC2988 "Date-DC2988" "Acute Coronary Syndrome Symptom Date (7826) should be less than or equal to Procedure Start Date and Time (7000)."
* #DC2989 "Date-DC2989" "Thrombolytic Therapy Date and Time (7830) should be less than Procedure Start Date and Time (7000)."
* #DC2993 "Date-DC2993" "First Device Activation Date and Time (7845) should be greater than Procedure Start Date and Time (7000)."
* #DC2994 "Date-DC2994" "First Device Activation Date and Time (7845) should be less than Discharge Date and Time (10101)."
* #DC2995 "Date-DC2995" "Emergency Department Presentation at Referring Facility Date and Time (7842) should be less than Procedure Start Date and Time (7000)."
* #DC2996 "Date-DC2996" "Intra/Post-Procedure Event Date and Time (9003) should be greater than Arrival Date and Time (3001)."
* #DC2997 "Date-DC2997" "Intra/Post-Procedure Event Date and Time (9003) should be less than or equal to Discharge Date and Time (10101)."
* #DC3000 "Date-DC3000" "First Device Activation Date and Time (7845) should be greater than Subsequent ECG with STEMI or STEMI Equivalent Date and Time (7836)."
* #DC3011 "Date-DC3011" "Emergency Department Presentation at Referring Facility Date and Time (7842) should be less than Arrival Date and Time (3001)."
* #DC3547 "Date-DC3547" "Follow-Up Assessment Date (11000) should be greater than or equal to Follow-Up Reference Episode Discharge Date and Time (11015)."
* #DC4129 "Date-DC4129" "Procedure End Date and Time (7005) should be greater than Procedure Start Date and Time (7000)."
* #DC4290 "Date-DC4290" "Emergency Department Presentation at Referring Facility Date and Time (7842) should be less than Subsequent ECG with STEMI or STEMI Equivalent Date and Time (7836)."
* #DC4340 "Date-DC4340" "Most Recent MI Date (4296) should be less than or equal to Arrival Date and Time (3001)."
* #DC4342 "Date-DC4342" "Most Recent Coronary Artery Bypass Graft Date (4521) should be less than or equal to Arrival Date and Time (3001)."
* #DC4343 "Date-DC4343" "Discharge Date and Time (10101) should be greater than Arrival Date and Time (3001)."
* #DC4344 "Date-DC4344" "Coronary Artery Bypass Graft Date and Time (10011) should be greater than Arrival Date and Time (3001)."
* #DC4346 "Date-DC4346" "Most Recent Percutaneous Coronary Intervention Date (4503) should be less than or equal to Arrival Date and Time (3001)."
* #DC4347 "Date-DC4347" "Cardiac CTA Date (5226) should be less than or equal to Procedure Start Date and Time (7000)."
* #DC4348 "Date-DC4348" "Agatston Calcium Score Date (5257) should be less than or equal to Procedure Start Date and Time (7000)."
* #DC4349 "Date-DC4349" "Prior Diagnostic Coronary Angiography Procedure Date (5264) should be less than or equal to Procedure Start Date and Time (7000)."
* #DC4350 "Date-DC4350" "Previously Treated Lesion Date (8009) should be less than or equal to Procedure Start Date and Time (7000)."
* #DC4351 "Date-DC4351" "Procedure Start Date and Time (7000) should be greater than Arrival Date and Time (3001)."
* #DC4432 "Date-DC4432" "Stress Test Date (5204) should be less than or equal to Procedure Start Date and Time (7000)."
* #DC4809 "Date-DC4809" "Intra/Post-Procedure Event Date and Time (9003) should be greater than or equal to Procedure Start Date and Time (7000)."
* #DC5269 "Date Comparison-DC5269" "Follow-Up Event Dates (11014) should be greater than or equal to Birth Date (2050)."
* #DC5275 "Date Comparison-DC5275" "Follow-Up Assessment Date (11000) should be greater than or equal to Birth Date (2050)."
* #DC5276 "Date Comparison-DC5276" "Follow-Up Reference Procedure Start Date and Time (11001) should be greater than or equal to Birth Date (2050)."
* #DC5277 "Date Comparison-DC5277" "Follow-Up Date of Death (11006) should be greater than or equal to Birth Date (2050)."
* #DC5278 "Date Comparison-DC5278" "Follow-Up Reference Episode Arrival Date and Time (11002) should be greater than or equal to Birth Date (2050)."
* #DC5282 "Date Comparison-DC5282" "Follow-Up Reference Episode Discharge Date and Time (11015) should be greater than or equal to Birth Date (2050)."
* #DC5363 "Date-DC5363" "Follow-Up Assessment Date (11000) should be greater than or equal to Follow-Up Reference Procedure Start Date and Time (11001)."
* #DC5364 "Date-DC5364" "Follow-Up Assessment Date (11000) should be greater than or equal to Follow-Up Reference Episode Arrival Date and Time (11002)."
* #DC5365 "Date-DC5365" "Follow-Up Event Dates (11014) should be greater than or equal to Follow-Up Reference Episode Arrival Date and Time (11002)."
* #DC5366 "Date-DC5366" "Follow-Up Event Dates (11014) should be greater than or equal to Follow-Up Reference Procedure Start Date and Time (11001)."
* #DC5367 "Date-DC5367" "Follow-Up Event Dates (11014) should be greater than or equal to Follow-Up Reference Episode Discharge Date and Time (11015)."
* #DC5368 "Date-DC5368" "Follow-Up Event Dates (11014) should be less than or equal to Follow-Up Date of Death (11006)."
* #DC8052 "Date-DC8052" "Subsequent ECG with STEMI or STEMI Equivalent Date and Time (7836) should be less than Procedure Start Date and Time (7000)."
* #DD16709 "Outlier-DD16709" "Validate extended length of stay. Procedure End Date/Time(7005) to Discharge Date/Time(10101) is >= 10 days."
* #DD2998 "Outlier-DD2998" "Validate extended length of stay.  Arrival Date/Time to Discharge Date/Time is >= 30 days."
* #DD3017 "Date-DD3017" "Thrombolytic Therapy Date and Time (7830) must happen in the 7 days prior to Procedure Start Date and Time (7000)"
* #DD3463 "Outlier-DD3463" "The difference between Follow-Up Assessment Date (11000) and Follow-Up Reference Procedure Start Date and Time (11001) should be greater than or equal to 23 days."
* #DD3475 "Outlier-DD3475" "The difference between Follow-Up Assessment Date (11000) and Follow-Up Reference Procedure Start Date and Time (11001) should be less than or equal to 425 days."
* #DD4411 "Outlier-DD4411" "The difference between Procedure Start Date and Time (7000) and Subsequent ECG with STEMI or STEMI Equivalent Date and Time (7836) should be less than or equal to 1 days."
* #DD4412 "Date-DD4412" "The patient must be at least 18 years of age to be included in the CathPCI Registry"
* #DD4433 "Date-DD4433" "The difference between Procedure Start Date and Time (7000) and Acute Coronary Syndrome Symptom Date (7826) should be less than or equal to 7 days."
* #DL3486 "Exact Length-DL3486" "Patient Zip Code (2065) must have a length of 5."
* #DL3487 "Exact Length-DL3487" "SSN (2030) must have a length of 9."
* #FR1234 "Selection-FR1234" "Follow-Up Reference Episode Arrival Date and Time (11002){instance} is referencing a value not present in {rlabel} ({rseqno}){rinstance}."
* #FR1234-1 "Selection-FR1234" "Follow-Up Reference Episode Discharge Date and Time (11015){instance} is referencing a value not present in {rlabel} ({rseqno}){rinstance}."
* #OD4801 "Selection-OD4801" "Episodes identified with overlapping Discharge Date and Time (10101) and Arrival Date and Time (3001)."
* #OD5100 "Selection-OD5100" "Procedure End Date and Time (7005) overlaps with Procedure Start Date and Time (7000)."
* #PC13027 "Parent Child-PC13027" "Missing value(s) for PCI Procedure."
* #PC13028 "Parent Child-PC13028" "Missing value(s) for Lesions and Devices."
* #PC15998 "Parent Child-PC15998" "Hispanic or Latino Ethnicity (2076) = No or null. Missing value(s) for Race Calc (1900)."
* #PC18051 "Parent Child-PC18051" "Missing value(s) for A Shockwave Device was selected for Intracoronary Device(s) Used (8028). Please navigate to the AUX Data Collection Tool to complete the Shockwave data set for this patient and for this specific cath lab visit.."
* #PC2725 "Parent Child-PC2725" "Race - Asian (2072) != true. Race - Asian Indian (2080) should not have a value."
* #PC2726 "Parent Child-PC2726" "SSN N/A (2031) != false. SSN (2030) should not have a value."
* #PC2727 "Parent Child-PC2727" "Race - Asian (2072) != true. Race - Chinese (2081) should not have a value."
* #PC2728 "Parent Child-PC2728" "Hispanic or Latino Ethnicity (2076) != Yes. Hispanic Ethnicity Type - Cuban (2102) should not have a value."
* #PC2729 "Parent Child-PC2729" "Race - Asian (2072) != true. Race - Filipino (2082) should not have a value."
* #PC2730 "Parent Child-PC2730" "Race - Native Hawaiian/Pacific Islander (2074) != true. Race - Guamanian or Chamorro (2091) should not have a value."
* #PC2731 "Parent Child-PC2731" "Race - Asian (2072) != true. Race - Japanese (2083) should not have a value."
* #PC2732 "Parent Child-PC2732" "Race - Asian (2072) != true. Race - Korean (2084) should not have a value."
* #PC2733 "Parent Child-PC2733" "Hispanic or Latino Ethnicity (2076) != Yes. Hispanic Ethnicity Type - Mexican, Mexican-American, Chicano (2100) should not have a value."
* #PC2734 "Parent Child-PC2734" "Race - Native Hawaiian/Pacific Islander (2074) != true. Race - Native Hawaiian (2090) should not have a value."
* #PC2735 "Parent Child-PC2735" "Hispanic or Latino Ethnicity (2076) != Yes. Hispanic Ethnicity Type - Other Hispanic, Latino or Spanish Origin (2103) should not have a value."
* #PC2736 "Parent Child-PC2736" "Race - Native Hawaiian/Pacific Islander (2074) != true. Race - Other Pacific Islander (2093) should not have a value."
* #PC2737 "Parent Child-PC2737" "Hispanic or Latino Ethnicity (2076) != Yes. Hispanic Ethnicity Type - Puerto Rican (2101) should not have a value."
* #PC2738 "Parent Child-PC2738" "Race - Native Hawaiian/Pacific Islander (2074) != true. Race - Samoan (2092) should not have a value."
* #PC2739 "Parent Child-PC2739" "Race - Asian (2072) != true. Race - Vietnamese (2085) should not have a value."
* #PC2740 "Parent Child-PC2740" "Zip Code N/A (2066) != false. Patient Zip Code (2065) should not have a value."
* #PC2741 "Parent Child-PC2741" "Health Insurance (3005) != Yes. Health Insurance Payment Source (3010) should not have a value."
* #PC2742 "Parent Child-PC2742" "Patient Enrolled in Research Study (3020) != Yes. Research Study Name (3025) should not have a value."
* #PC2743 "Parent Child-PC2743" "Patient Enrolled in Research Study (3020) != Yes. Research Study Patient ID (3030) should not have a value."
* #PC2744 "Parent Child-PC2744" "Race - Asian (2072) != true. Race - Other Asian (2086) should not have a value."
* #PC2745 "Parent Child-PC2745" "Heart Failure (4001) != Yes,  from Cath Lab Visit(s)[#]/Pre-procedure Information. New York Heart Association Classification (4011),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC2746 "Parent Child-PC2746" "Discharge Status (10105) != Alive. Discharge Location (10110) should not have a value."
* #PC2747 "Parent Child-PC2747" "Discharge Status (10105) != Deceased. Cause of Death (10125) should not have a value."
* #PC2748 "Parent Child-PC2748" "Intervention Type this Hospitalization (10031) != CABG. Coronary Artery Bypass Graft Date and Time (10011) should not have a value."
* #PC2749 "Parent Child-PC2749" "Creatinine Not Drawn (6051) != false or null,  from Cath Lab Visit(s)[#]/Labs. Creatinine (6050),  from Cath Lab Visit(s)[#]/Labs should not have a value."
* #PC2750 "Parent Child-PC2750" "Hemoglobin Not Drawn (6031) != false or null,  from Cath Lab Visit(s)[#]/Labs. Hemoglobin (6030),  from Cath Lab Visit(s)[#]/Labs should not have a value."
* #PC2751 "Parent Child-PC2751" "High-density Lipoprotein Not Drawn (6106) != false or null,  from Cath Lab Visit(s)[#]/Labs. High-density Lipoprotein (6105),  from Cath Lab Visit(s)[#]/Labs should not have a value."
* #PC2752 "Parent Child-PC2752" "Total Cholesterol Not Drawn (6101) != false or null,  from Cath Lab Visit(s)[#]/Labs. Total Cholesterol (6100),  from Cath Lab Visit(s)[#]/Labs should not have a value."
* #PC2753 "Parent Child-PC2753" "Diagnostic Coronary Angiography Procedure (7045) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Diagnostic Catheterization Operator First Name (7047),  from Cath Lab Visit(s)[#]/Procedure Information should not have a value."
* #PC2754 "Parent Child-PC2754" "Diagnostic Coronary Angiography Procedure (7045) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Diagnostic Catheterization Operator Middle Name (7048),  from Cath Lab Visit(s)[#]/Procedure Information should not have a value."
* #PC2755 "Parent Child-PC2755" "Diagnostic Coronary Angiography Procedure (7045) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Diagnostic Catheterization Operator Last Name (7046),  from Cath Lab Visit(s)[#]/Procedure Information should not have a value."
* #PC2756 "Parent Child-PC2756" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. PCI Operator Last Name (7051),  from Cath Lab Visit(s)[#]/Procedure Information should not have a value."
* #PC2757 "Parent Child-PC2757" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. PCI Operator First Name (7052),  from Cath Lab Visit(s)[#]/Procedure Information should not have a value."
* #PC2758 "Parent Child-PC2758" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. PCI Operator Middle Name (7053),  from Cath Lab Visit(s)[#]/Procedure Information should not have a value."
* #PC2761 "Parent Child-PC2761" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Coronary Artery Perforation (9145),  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events should not have a value."
* #PC2763 "Parent Child-PC2763" "Discharge Status (10105) != Alive. Cardiac Rehabilitation Referral (10116) should not have a value."
* #PC2764 "Parent Child-PC2764" "Culprit Stenosis Unknown (8003) != false or null,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. Culprit Stenosis (8002),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC2765 "Parent Child-PC2765" "Treated with Stent (8010) != Yes,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. In-stent Restenosis (8011),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC2766 "Parent Child-PC2766" "Treated with Stent (8010) != Yes,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. In-stent Thrombosis (8012),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC2767 "Parent Child-PC2767" "Lesion In Graft (8015) != Yes,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. Location in Graft (8017),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC2768 "Parent Child-PC2768" "Previously Treated Lesion (8008) != Yes,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. Treated with Stent (8010),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC2769 "Parent Child-PC2769" "Device Deployed (8024) != Yes,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. Stenosis (Post-Intervention) (8025),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC2770 "Parent Child-PC2770" "Device Deployed (8024) != Yes,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. TIMI Flow (Post-Intervention) (8026),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC2771 "Parent Child-PC2771" "Chronic Total Occlusion Unknown (8006) != false,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. Chronic Total Occlusion (8005),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC2772 "Parent Child-PC2772" "Stent Type Unknown (8014) != false,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. Stent Type (8013),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC2773 "Parent Child-PC2773" "Percutaneous Coronary Intervention of the Left Main Coronary Artery Unknown (4502) != false. Percutaneous Coronary Intervention of the Left Main Coronary Artery (4501) should not have a value."
* #PC2774 "Parent Child-PC2774" "Agatston Calcium Score Assessed (5256) != Yes,  from Cath Lab Visit(s)[#]/Pre-procedure Information. Agatston Calcium Score (5255),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC2775 "Parent Child-PC2775" "Cardiovascular Instability (7410) != Yes,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Cardiovascular Instability Type (7415),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC2776 "Parent Child-PC2776" "Ventricular Support (7420) != Yes,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Pharmacologic Vasopressor Support (7421),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC2777 "Parent Child-PC2777" "Ventricular Support (7420) != Yes,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Mechanical Ventricular Support (7422),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC2778 "Parent Child-PC2778" "Mechanical Ventricular Support (7422) != Yes,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Mechanical Ventricular Support Device (7423),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC2779 "Parent Child-PC2779" "Percutaneous Coronary Intervention Indication (7825) != STEMI - Immediate PCI for Acute STEMI or STEMI - Stable (<= 12 hrs from Sx) or STEMI - Stable (> 12 hrs from Sx) or STEMI - Unstable (> 12 hrs from Sx),  from Cath Lab Visit(s)[#]/PCI Procedure. Acute Coronary Syndrome Symptom Date (7826),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC2780 "Parent Child-PC2780" "Acute Coronary Syndrome Symptom Date (7826) != not null,  from Cath Lab Visit(s)[#]/PCI Procedure. Acute Coronary Syndrome Symptom Time Unknown (7828),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC2781 "Parent Child-PC2781" "Cardiac Arrest Out of Healthcare Facility (4630) != Yes. Cardiac Arrest Witnessed (4631) should not have a value."
* #PC2783 "Parent Child-PC2783" "First Cardiac Arrest Rhythm Unknown (4634) != false. First Cardiac Arrest Rhythm (4633) should not have a value."
* #PC2786 "Parent Child-PC2786" "Hypothermia Induced (7806) != Yes,  from Cath Lab Visit(s)[#]/PCI Procedure. Hypothermia Induced Timing (7807),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC2787 "Parent Child-PC2787" "Valvular Disease Stenosis Type (7450) != not null,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Valvular Disease Stenosis Severity (7451),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC2788 "Parent Child-PC2788" "Indications for Cath Lab Visit (7400) != Valvular Disease,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Valvular Disease Stenosis Type (7450),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC2789 "Parent Child-PC2789" "Indications for Cath Lab Visit (7400) != Pre-operative Evaluation,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Surgical Risk (7468),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC2790 "Parent Child-PC2790" "Closure Method Not Documented (7332) != false,  from Cath Lab Visit(s)[#]/Procedure Information. Arterial Access Closure Method (7331),  from Cath Lab Visit(s)[#]/Procedure Information/[##] should not have a value."
* #PC2792 "Parent Child-PC2792" "Percutaneous Coronary Intervention Indication (7825) != STEMI - Immediate PCI for Acute STEMI,  from Cath Lab Visit(s)[#]/PCI Procedure. STEMI or STEMI Equivalent First Noted (7835),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC2793 "Parent Child-PC2793" "STEMI or STEMI Equivalent First Noted (7835) != Subsequent ECG,  from Cath Lab Visit(s)[#]/PCI Procedure. Subsequent ECG with STEMI or STEMI Equivalent Date and Time (7836),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC2794 "Parent Child-PC2794" "Percutaneous Coronary Intervention Indication (7825) != STEMI - Immediate PCI for Acute STEMI,  from Cath Lab Visit(s)[#]/PCI Procedure. First Device Activation Date and Time (7845),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC2795 "Parent Child-PC2795" "Percutaneous Coronary Intervention Indication (7825) != STEMI - Immediate PCI for Acute STEMI,  from Cath Lab Visit(s)[#]/PCI Procedure. Patient Transferred In for Immediate PCI for STEMI (7841),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC2796 "Parent Child-PC2796" "Patient Transferred In for Immediate PCI for STEMI (7841) != Yes,  from Cath Lab Visit(s)[#]/PCI Procedure. Emergency Department Presentation at Referring Facility Date and Time (7842),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC2797 "Parent Child-PC2797" "Patient Centered Reason for Delay in PCI (7850) != Yes,  from Cath Lab Visit(s)[#]/PCI Procedure. Patient Centered Reason for Delay in PCI Reason (7851),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC2798 "Parent Child-PC2798" "Acute Coronary Syndrome Symptom Time Unknown (7828) != false,  from Cath Lab Visit(s)[#]/PCI Procedure. Acute Coronary Syndrome Symptom Time (7827),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC2800 "Parent Child-PC2800" "Cardiac CTA Results Unknown (5228) != false,  from Cath Lab Visit(s)[#]/Pre-procedure Information. Cardiac CTA Results (5227),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC2801 "Parent Child-PC2801" "LVEF Assessed (Pre-Procedure) (5111) != Yes,  from Cath Lab Visit(s)[#]/Pre-procedure Information. LVEF % (Pre-Procedure) (5116),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC2802 "Parent Child-PC2802" "Mechanical Ventricular Support (7422) != Yes,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Mechanical Ventricular Support Timing (7424),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC2803 "Parent Child-PC2803" "Interventions this Hospitalization (10030) != Yes. Intervention Type this Hospitalization (10031) should not have a value."
* #PC2804 "Parent Child-PC2804" "Discharge Status (10105) != Deceased. Death During the Procedure (10120) should not have a value."
* #PC2805 "Parent Child-PC2805" "Discharge Status (10105) != Alive. Hospice Care (10115) should not have a value."
* #PC2806 "Parent Child-PC2806" "Intervention Type this Hospitalization (10031) != CABG. CABG Status (10035) should not have a value."
* #PC2807 "Parent Child-PC2807" "Intervention Type this Hospitalization (10031) != CABG. CABG Indication (10036) should not have a value."
* #PC2808 "Parent Child-PC2808" "PreProcedure Troponin I Not Drawn  (6091) != false or null,  from Cath Lab Visit(s)[#]/Labs. PreProcedure Troponin I  (6090),  from Cath Lab Visit(s)[#]/Labs should not have a value."
* #PC2809 "Parent Child-PC2809" "PostProcedure Troponin I Not Drawn (8516) != false or null,  from Cath Lab Visit(s)[#]/Labs. PostProcedure Troponin I  (8515),  from Cath Lab Visit(s)[#]/Labs should not have a value."
* #PC2810 "Parent Child-PC2810" "Troponin T Not Drawn (Pre-Procedure) (6096) != false or null,  from Cath Lab Visit(s)[#]/Labs. Troponin T (Pre-Procedure) (6095),  from Cath Lab Visit(s)[#]/Labs should not have a value."
* #PC2811 "Parent Child-PC2811" "Troponin T Not Drawn (Post-Procedure) (8521) != false or null,  from Cath Lab Visit(s)[#]/Labs. Troponin T (Post-Procedure) (8520),  from Cath Lab Visit(s)[#]/Labs should not have a value."
* #PC2812 "Parent Child-PC2812" "Creatinine Not Drawn (8511) != false or null,  from Cath Lab Visit(s)[#]/Labs. Creatinine (8510),  from Cath Lab Visit(s)[#]/Labs should not have a value."
* #PC2813 "Parent Child-PC2813" "Hemoglobin Not Drawn (8506) != false or null,  from Cath Lab Visit(s)[#]/Labs. Hemoglobin (8505),  from Cath Lab Visit(s)[#]/Labs should not have a value."
* #PC2814 "Parent Child-PC2814" "Hemoglobin Not Drawn (10066) != false. Hemoglobin (10065) should not have a value."
* #PC2815 "Parent Child-PC2815" "Creatinine Not Drawn (10061) != false. Creatinine (10060) should not have a value."
* #PC2817 "Parent Child-PC2817" "Native Lesion Segment Number (7507) != not null,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]. Native Vessel Adjunctive Measurements Obtained (7511),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC2818 "Parent Child-PC2818" "Native Vessel Adjunctive Measurements Obtained (7511) != Yes,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]. Native Vessel Intravascular Ultrasonography (7514),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC2819 "Parent Child-PC2819" "Native Vessel Adjunctive Measurements Obtained (7511) != Yes,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]. Native Vessel Optical Coherence Tomography (7515),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC2820 "Parent Child-PC2820" "Native Vessel Adjunctive Measurements Obtained (7511) != Yes,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]. Native Vessel Instantaneous Wave-Free Ratio (7513),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC2821 "Parent Child-PC2821" "Native Lesion Segment Number (7507) != not null,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]. Native Coronary Vessel Stenosis (7508),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC2822 "Parent Child-PC2822" "Graft Lesion Segment Number (7527) != not null,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]. Graft Coronary Vessel Stenosis (7528),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC2823 "Parent Child-PC2823" "CABG Graft Vessel Unknown (7530) != false,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]. CABG Graft Vessel (7529),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC2824 "Parent Child-PC2824" "Native Vessel with Stenosis >= 50% (7505) != Yes,  from Cath Lab Visit(s)[#]/Coronary Anatomy. Native Lesion Segment Number (7507),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC2825 "Parent Child-PC2825" "STEMI or STEMI Equivalent First Noted (7835) != Subsequent ECG,  from Cath Lab Visit(s)[#]/PCI Procedure. Subsequent ECG obtained in Emergency Department (7840),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC2826 "Parent Child-PC2826" "Percutaneous Coronary Intervention Indication (7825) != STEMI - Immediate PCI for Acute STEMI,  from Cath Lab Visit(s)[#]/PCI Procedure. Patient Centered Reason for Delay in PCI (7850),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC2827 "Parent Child-PC2827" "Percutaneous Coronary Intervention Indication (7825) != STEMI (after successful lytics) or STEMI - Rescue (After unsuccessful lytics),  from Cath Lab Visit(s)[#]/PCI Procedure. Thrombolytics (7829),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC2828 "Parent Child-PC2828" "Thrombolytics (7829) != Yes,  from Cath Lab Visit(s)[#]/PCI Procedure. Thrombolytic Therapy Date and Time (7830),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC2829 "Parent Child-PC2829" "PCI for MultiVessel Disease (7820) != Yes,  from Cath Lab Visit(s)[#]/PCI Procedure. Multi-vessel Procedure Type (7821),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC2830 "Parent Child-PC2830" "Previously Treated Lesion (8008) != Yes,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. Previously Treated Lesion Date (8009),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC2831 "Parent Child-PC2831" "Lesion In Graft (8015) != Yes,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. Type of CABG Graft (8016),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC2832 "Parent Child-PC2832" "Discharge Medication Code (10200) != not null,  from Discharge Medications (Prescribed at Discharge - Complete for each Episode of Care in which a PCI was attempted or performed)[#]. Discharge Medication Prescribed (10205),  from Discharge Medications (Prescribed at Discharge - Complete for each Episode of Care in which a PCI was attempted or performed)[#] should not have a value."
* #PC2834 "Parent Child-PC2834" "Concomitant Procedures Performed (7065) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Concomitant Procedures Performed Type (7066),  from Cath Lab Visit(s)[#]/Procedure Information should not have a value."
* #PC2835 "Parent Child-PC2835" "Discharge Medication Prescribed (10205) != Not Prescribed - Patient Reason,  from Discharge Medications (Prescribed at Discharge - Complete for each Episode of Care in which a PCI was attempted or performed)[#]. Patient Rationale for not taking medication (10206),  from Discharge Medications (Prescribed at Discharge - Complete for each Episode of Care in which a PCI was attempted or performed)[#] should not have a value."
* #PC2836 "Parent Child-PC2836" "Discharge Medication Reconciliation Completed (10220) != Yes. Discharge Medications Reconciled (10221) should not have a value."
* #PC2837 "Parent Child-PC2837" "Indications for Cath Lab Visit (7400) != Pre-operative Evaluation,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Solid Organ Transplant Surgery (7469),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC2838 "Parent Child-PC2838" "Solid Organ Transplant Surgery (7469) != Yes,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Solid Organ Transplant Donor (7470),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC2839 "Parent Child-PC2839" "Indications for Cath Lab Visit (7400) != Pre-operative Evaluation,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Evaluation for Surgery Type (7465),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC2840 "Parent Child-PC2840" "Functional Capacity Unknown (7467) != false,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Functional Capacity (7466),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC2841 "Parent Child-PC2841" "Solid Organ Transplant Surgery (7469) != Yes,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Solid Organ Transplant Type (7471),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC2842 "Parent Child-PC2842" "Cardiac Arrest Out of Healthcare Facility (4630) != Yes. First Cardiac Arrest Rhythm Unknown (4634) should not have a value."
* #PC2843 "Parent Child-PC2843" "Packed Red Blood Cell Transfusion (9275) != Yes,  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events. Number of units of PRBCs transfused (9276),  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events should not have a value."
* #PC2844 "Parent Child-PC2844" "Packed Red Blood Cell Transfusion (9275) != Yes,  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events. Transfusion PCI (9277),  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events should not have a value."
* #PC2845 "Parent Child-PC2845" "Packed Red Blood Cell Transfusion (9275) != Yes,  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events. Transfusion Surgery (9278),  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events should not have a value."
* #PC2846 "Parent Child-PC2846" "Follow-Up Status (11004) != Alive. Chest Pain Symptom Assessment (11005) should not have a value."
* #PC2847 "Parent Child-PC2847" "PCI Procedure Medication Code (7990) != not null,  from Cath Lab Visit(s)[#]/PCI Procedure/[##]. Procedure Medications Administered (7995),  from Cath Lab Visit(s)[#]/PCI Procedure/[##] should not have a value."
* #PC2848 "Parent Child-PC2848" "Follow-Up Medications Code (11990) != not null,  from [#]. Follow-Up Medications Prescribed (11995),  from [#] should not have a value."
* #PC2849 "Parent Child-PC2849" "Native Vessel Adjunctive Measurements Obtained (7511) != Yes,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]. Native Vessel Fractional Flow Reserve Ratio (7512),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC2850 "Parent Child-PC2850" "Prior Percutaneous Coronary Intervention (4495) != Yes. Percutaneous Coronary Intervention of the Left Main Coronary Artery Unknown (4502) should not have a value."
* #PC2851 "Parent Child-PC2851" "Indications for Cath Lab Visit (7400) != Valvular Disease,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Valvular Disease Regurgitation Type (7455),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC2852 "Parent Child-PC2852" "Valvular Disease Regurgitation Type (7455) != not null,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Valvular Disease Regurgitation Severity (7456),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC2853 "Parent Child-PC2853" "Intracoronary Device(s) Used (8028) != Absorb Bioresorbable Vascular Scaffold System or Accent Balloon or Ace Balloon or ACROSS CTO ST Balloon or Airtimes Balloon RX or Amadeus Supercross Coronary Dilatation Catheter or Andante Balloon or Angiosculpt Scoring Balloon Catheter or AngioSculpt Taper or Apex (OTW) or Apex Monorail or Apex Monorail - Flex or Apex Monorail - Push or Apex OTW - Flex or Apex OTW - Push or Apollo NC Balloon RX or Artimes SC or AXXESS Bifurcated Stent System or Azule Stent or Balloon - Peripheral (any mfr) or Balloon from deployed stent or BEO NC Balloon or BeStent2 w/ Discrete Tech OTW Stent or BioDivYsio Stents (phosphorylcholine) or Biofreedom Stent or BioMatrix Alpha or BioMatrix Flex or Biomime Morph Sirolimus Eluting Stent or Bx SONIC OTW Stent or Bx SONIC OTW Stent with HEPACOAT or Bx Velocity OTW Stent or Bx Velocity OTW Stent with HEPACOAT or Bx Velocity Rx Stent or Bx Velocity RX Stent with HEPACOAT or Champion DES (Everlimus) or Chocolate Balloon OTW or Chocolate Balloon RX or Chocolate XD PTCA Catheter or Clearway Rx or COMBO Dual Therapy Stent or Coroflex Blue NEO Stent or Coroflex ISAR Coronary Stent or CROSSFLEX LC Stent (OTW) or CROSSSAIL Coronary Dilatation Catheter or Cutting Balloon Ultra Monorail or Cutting Balloon Ultra OTW or Cutting Balloon Ultra2 (OTW) or Cutting Balloon Ultra2 Monorail or Cypher Sirolimus-eluting Stent (OTW) or Cypher Sirolimus-eluting Stent (Rx) or DESolve Bioresorbable Coronary Scaffold System or DESyne Coronary Stent or Driver MX2 (RX) or Driver OTW Coronary Stent or Driver RX or Driver Zipper MX Coronary Stent or DuraStar RX Balloon Catheter or Emerge PTCA Dilatation Catheter Monorail or Emerge PTCA Dilatation Catheter OTW or Empira NC Rx or Empira Rx or Endeavor Resolute Zotarolimus Stent RX or Endeavor Sprint - OTW or Endeavor Sprint - RX or Endeavor Stent (OTW) or Endeavor Stent MX2 or Euphora Balloon OTW or Euphora Balloon RX or Express2 OTW stent or Express2 RE stent or Firebird2 Stent or Firehawk Rapamycin Target Eluting Coronary Stent System or FireStar RX Balloon Catheter or FLASH Ostial System RX or Flextome Cutting Balloon Monorail or Flextome Cutting Balloon OTW or FORTIS II Balloon or Foxtrot NC PTCA Balloon Catheter or FX miniRAIL Rx PTCA or Glider PTCA Balloon Catheter OTW or Glider PTCA Balloon Catheter RX or Graft Ace Balloon or GRAFTMASTER RX Stent or HIGHSAIL Coronary Dilatation Catheter or Hiryu NC Balloon or IKAZUCHI X Balloon or IN.PACT Falcon or INSIGNIA or Integrity OTW Coronary Stent or Integrity RX Coronary Stent or ION Stent Monorail or ION Stent OTW or JIVE PTCA Balloon Catheter or Jostent Coronary Stent Graft or Jostent GraftMaster OTW or Kaname Bare Metal Stent or L Ranger OTW Balloon or Lacrosse NSE ALPHA Coronary Catheter or Liberte OTW Stent or Liberte RE Stent or Long Ace Balloon or Magic Touch Balloon RX or Magic WALLSTENT Self Expanding Stent or Maverick OTW Balloon or Maverick XL Monorail  RE Balloon or Maverick(2) Monorail Balloon RE or Merlin PTCA Catheter (OTW) or Metricath Gemini Catheter or Metricath GPS Catheter or MGuard Embolic Protection Stent or Micro Driver (OTW) or Micro Driver MX2 (RX) or Micro Driver RX or MINI Trek II or Mini-Trek OTW or Mini-Trek Rx or MOZEC NC PTCA Balloon or MOZEC PTCA Balloon or Multi-Link 8 LL Rx or Multi-Link Mini Vision OTW Stent or Multi-Link Mini Vision RX Stent or Multi-Link OTW ZETA Stent or Multi-Link PENTA Stent or Multi-Link Pixel Stent OTW or Multi-Link Pixel Stent RX or Multi-Link RX ZETA Stent or Multi-Link TETRA Stent or Multi-Link Ultra Stent - OTW or Multi-Link Ultra Stent - RX or Multi-Link Vision OTW Stent or Multi-Link Vision RX Stent or NC Emerge OTW or NC Emerge RX or NC Euphora OTW or NC Euphora RX or NC Merlin PTCA Catheter (OTW) or NC Monorail Balloon RE or NC Mozec RX or NC Quantum Apex Monorail or NC Quantum Apex OTW or NC Ranger OTW Balloon or NC RAPTOR OTW PTCA or NC Sprinter - RX or NC Stormer MX2 or NC Stormer OTW Balloon or NC Stormer Zipper MX or NC Traveler coronary balloon dilatation catheter or NC Trek OTW or NC Trek Rx or NIC Nano CTO Balloon OTW or NIC Nano CTO Balloon RX or Nimbus PICO Mu PTCA or Ninja FX OTW PTCA or NIR Elite Monorail RE Stent or NIR Elite OTW Stent or NIRxcell CoCr Stent RX or Nobori Stent or Omega BMS or OPENSAIL Coronary Dilatation Catheter or OPN NC Balloon RX or Orsiro Drug Eluting Stent System (BIOFLOW-II) or Pantera LEO Balloon Catheter or Pantera PRO Balloon or PathMaker PTCA Balloon Catheter or Pivot Balloon Catheter or POWERSAIL Coronary Dilatation Catheter or Presillion Plus CoCr Coronary Stent Rx or PRO-Kinetic Energy Stent OTW or PRO-Kinetic Energy Stent RX or PRO-Kinetic Energy Stent RX or Promus DES OTW or Promus DES RX or Promus Element OTW or Promus Element Plus OTW or Promus Element Plus Rx or Promus Element RX or Promus PREMIER OTW or Promus PREMIER RX or ProNOVA XR or Quantum Maverick OTW Balloon or Quantum Maverick RE Balloon or Quantum Ranger OTW Balloon or R Stent Evolution or R Stent Prodigy or R Stent SVS (small vessel system) or Radius Self Expanding Stent or Raiden 3 Balloon Catheter or RAPTOR OTW PTCA or RAPTORRAIL RE PTCA or Rebel Stent OTW or Rebel Stent RX or Resolute Integrity OTW or Resolute Integrity Rx or Resolute Onyx Stent OTW or Resolute Onyx Stent RX or Rithron-XR Coronary Stent System or RX ESPRIT Coronary Dilation Balloon or Ryujin Plus Balloon OTW or S660 with Discrete Technology OTW Stent or S670 with Discrete Technology OTW Stent or S7 with Discrete Technology OTW Stent or S7 Zipper MX Multi-Exchange Stent or Sapphire II NC Dilatation Catheter or Sapphire NC  Dilatation Catheter or SatinFlex Stent or Scoreflex Balloon Catheter or Self-Apposing Stent BMS or Self-Apposing Stent DES or SeQuent Please Balloon or SLK-View or Sprinter Balloon or Sprinter Legend - OTW or Sprinter Legend - RX or Sprinter MX2 (RX) or Sprinter OTW or Stent - Peripheral (any mfr) or Stormer OTW Balloon or Stormer Zipper MX or Surpass Superfusion Perfusion Catheter or Symbiot Covered Stent (ePTFE polymer) or SYNERGY Stent OTW or SYNERGY Stent RX or Tacrolimus Eluting Stent or Taxus Express 2 Monorail Drug Eluting Stent or Taxus Express 2 OTW Drug Eluting Stent or Taxus Express2 ATOM - OTW or Taxus Express2 ATOM - RX or Taxus Liberte Atom - OTW or Taxus Liberte Atom - RX or TAXUS Liberte Long Stent or Taxus Liberte Stent - OTW or Taxus Liberte Stent - RX or Tazuna Balloon or Tenax-XR Amorphous Silicon Carb. Coated Stent or Teneo coronary stent or TITAN MEGA PTCA or Traveler coronary balloon dilatation catheter or Trek OTW or Trek Rx or Ultimaster Coronary Stent System or Viva Balloon or Voyager NC - OTW or Voyager NC - RX or Voyager OTW Balloon or Voyager Rx Coronary Dilation Catheter or Xience Alpine OTW or Xience Alpine RX or Xience DES OTW or Xience DES RX or Xience Nano Rx or Xience Prime  Stent or Xience Prime LL Rx or Xience Prime SV Stent or Xience ProX or Xience V DES - OTW - Multilink MiniVision or Xience V DES - OTW - Multilink Vision or Xience V DES - RX - Multilink MiniVision or Xience V DES - RX - Multilink Vision or Xience Xpedition DES OTW or Xience Xpedition DES Rx or Xience Xpedition LL DES OTW or Xience Xpedition LL DES Rx or Xience Xpedition SV DES OTW or Xience Xpedition SV DES Rx or Yukon Choice BMS Coronary Stent or Yukon Choice Coronary Stent or EluNIR DES or Wolverine Cutting  Balloon or Xience Sierra DES or Takeru NC PTCA or Sapphire II Pro or COBRA PzF NanoCoated or Accuforce Non Compliant PTCA or 3V NEIL Sirolimus or Threader Mico-Dilatation Balloon OTW or Threader Micro-Dilatation Balloon RX or Trapper Balloon or Tryton Side Branch Stent or VeriFLEX OTW or VeriFLEX RX or Galaxy Rapamycin Bioresorbable or Evermine 50 or SIROFLEX DES or Reivas or Promus ELITE DES or PK Papyrus or Takeru Balloon or Cre8 EVO or Cre8 or FLUYDO PTCA or PRO-Kinetic Energy Stent or Trapliner Catheter or Synergy XD Stent or Biomime Lineage or Promus PREMIER Select or Coroflex ISAR NEO or Pro HP or Synergy Megatron or Shockwave Intravascular Lithotripsy (IVL) System or Xience Skypoint DES or Flash MINI Ostial System or TrapIT Trapping Balloon or Angiosculpt EVO or MeRes 100 BRS or Terumo Ryurei or Orsiro Mission or Firefighter NC PTCA or AGENT DCB Catheter or Synergy Everolimus-Eluting or Ultimaster Sirolimus Eluting or Onyx Frontier or Sapphire NC Plus or NC Trek Neo or CONQUERER SC PTCA Balloon Catheter or SCOREFLEX NC Scoring PTCA or ISAR Summit or BioMime or CONQUERER NC PTCA Balloon,  from Cath Lab Visit(s)[#]/Lesions and Devices/Devices[##]. Intracoronary Device Length (8032),  from Cath Lab Visit(s)[#]/Lesions and Devices/Devices[##] should not have a value."
* #PC2854 "Parent Child-PC2854" "Intracoronary Device(s) Used (8028) != Accent Balloon or Ace Balloon or ACROSS CTO ST Balloon or Airtimes Balloon RX or Andante Balloon or Apollo NC Balloon RX or Angiosculpt Scoring Balloon Catheter or Balloon - Peripheral (any mfr) or Balloon from deployed stent or BEO NC Balloon or Chocolate Balloon OTW or Chocolate Balloon RX or Cutting Balloon Ultra Monorail or Cutting Balloon Ultra OTW or Cutting Balloon Ultra2 (OTW) or Euphora Balloon OTW or Euphora Balloon RX or FireStar RX Balloon Catheter or Glider PTCA Balloon Catheter OTW or Glider PTCA Balloon Catheter RX or Graft Ace Balloon or Hiryu NC Balloon or IKAZUCHI X Balloon or JIVE PTCA Balloon Catheter or L Ranger OTW Balloon or Long Ace Balloon or Magic Touch Balloon RX or Maverick OTW Balloon or MOZEC NC PTCA Balloon or MOZEC PTCA Balloon or NC Monorail Balloon RE or NC Ranger OTW Balloon or NC Stormer OTW Balloon or NIC Nano CTO Balloon OTW or NIC Nano CTO Balloon RX or OPN NC Balloon RX or Pantera LEO Balloon Catheter or Pantera PRO Balloon or PathMaker PTCA Balloon Catheter or Pivot Balloon Catheter or Quantum Maverick OTW Balloon or Quantum Maverick RE Balloon or Quantum Ranger OTW Balloon or Raiden 3 Balloon Catheter or RX ESPRIT Coronary Dilation Balloon or Ryujin Plus Balloon OTW or Scoreflex Balloon Catheter or SeQuent Please Balloon or Sprinter Balloon or Stormer OTW Balloon or Tazuna Balloon or Threader Mico-Dilatation Balloon OTW or Threader Micro-Dilatation Balloon RX or Traveler coronary balloon dilatation catheter or Viva Balloon or Voyager OTW Balloon or DESyne Coronary Stent or Cutting Balloon Ultra2 Monorail or DuraStar RX Balloon Catheter or Kaname Bare Metal Stent or Absorb Bioresorbable Vascular Scaffold System or Amadeus Supercross Coronary Dilatation Catheter or AngioSculpt Taper or Apex (OTW) or Apex Monorail or Apex Monorail - Flex or Apex Monorail - Push or Apex OTW - Flex or Apex OTW - Push or Artimes SC or AXXESS Bifurcated Stent System or Azule Stent or BeStent2 w/ Discrete Tech OTW Stent or BioDivYsio Stents (phosphorylcholine) or Biofreedom Stent or BioMatrix Alpha or BioMatrix Flex or Biomime Morph Sirolimus Eluting Stent or Bx SONIC OTW Stent or Bx SONIC OTW Stent with HEPACOAT or Bx Velocity OTW Stent or Bx Velocity OTW Stent with HEPACOAT or Bx Velocity Rx Stent or Bx Velocity RX Stent with HEPACOAT or Champion DES (Everlimus) or Chocolate XD PTCA Catheter or Clearway Rx or COMBO Dual Therapy Stent or Coroflex Blue NEO Stent or Coroflex ISAR Coronary Stent or CROSSFLEX LC Stent (OTW) or CROSSSAIL Coronary Dilatation Catheter or Cypher Sirolimus-eluting Stent (OTW) or Cypher Sirolimus-eluting Stent (Rx) or DESolve Bioresorbable Coronary Scaffold System or Driver MX2 (RX) or Driver OTW Coronary Stent or Driver RX or Driver Zipper MX Coronary Stent or Emerge PTCA Dilatation Catheter Monorail or Emerge PTCA Dilatation Catheter OTW or Empira NC Rx or Empira Rx or Endeavor Resolute Zotarolimus Stent RX or Endeavor Sprint - OTW or Endeavor Sprint - RX or Endeavor Stent (OTW) or Endeavor Stent MX2 or Express2 OTW stent or Express2 RE stent or Firebird2 Stent or Firehawk Rapamycin Target Eluting Coronary Stent System or FLASH Ostial System RX or Flextome Cutting Balloon Monorail or Flextome Cutting Balloon OTW or FORTIS II Balloon or Foxtrot NC PTCA Balloon Catheter or FX miniRAIL Rx PTCA or GRAFTMASTER RX Stent or HIGHSAIL Coronary Dilatation Catheter or IN.PACT Falcon or INSIGNIA or Integrity OTW Coronary Stent or Integrity RX Coronary Stent or ION Stent Monorail or ION Stent OTW or Jostent Coronary Stent Graft or Jostent GraftMaster OTW or Lacrosse NSE ALPHA Coronary Catheter or Liberte OTW Stent or Liberte RE Stent or Magic WALLSTENT Self Expanding Stent or Maverick XL Monorail  RE Balloon or Maverick(2) Monorail Balloon RE or Merlin PTCA Catheter (OTW) or Metricath Gemini Catheter or Metricath GPS Catheter or MGuard Embolic Protection Stent or Micro Driver (OTW) or Micro Driver MX2 (RX) or Micro Driver RX or MINI Trek II or Mini-Trek OTW or Mini-Trek Rx or Multi-Link 8 LL Rx or Multi-Link Mini Vision OTW Stent or Multi-Link Mini Vision RX Stent or Multi-Link OTW ZETA Stent or Multi-Link PENTA Stent or Multi-Link Pixel Stent OTW or Multi-Link Pixel Stent RX or Multi-Link RX ZETA Stent or Multi-Link TETRA Stent or Multi-Link Ultra Stent - OTW or Multi-Link Ultra Stent - RX or Multi-Link Vision OTW Stent or Multi-Link Vision RX Stent or NC Emerge OTW or NC Emerge RX or NC Euphora OTW or NC Euphora RX or NC Merlin PTCA Catheter (OTW) or NC Mozec RX or NC Quantum Apex Monorail or NC Quantum Apex OTW or NC RAPTOR OTW PTCA or NC Sprinter - RX or NC Stormer MX2 or NC Stormer Zipper MX or NC Traveler coronary balloon dilatation catheter or NC Trek OTW or NC Trek Rx or Nimbus PICO Mu PTCA or Ninja FX OTW PTCA or NIR Elite Monorail RE Stent or NIR Elite OTW Stent or NIRxcell CoCr Stent RX or Nobori Stent or Omega BMS or OPENSAIL Coronary Dilatation Catheter or Orsiro Drug Eluting Stent System (BIOFLOW-II) or POWERSAIL Coronary Dilatation Catheter or Presillion Plus CoCr Coronary Stent Rx or PRO-Kinetic Energy Stent OTW or PRO-Kinetic Energy Stent RX or PRO-Kinetic Energy Stent RX or Promus DES OTW or Promus DES RX or Promus Element OTW or Promus Element Plus OTW or Promus Element Plus Rx or Promus Element RX or Promus PREMIER OTW or Promus PREMIER RX or ProNOVA XR or R Stent Evolution or R Stent Prodigy or R Stent SVS (small vessel system) or Radius Self Expanding Stent or RAPTOR OTW PTCA or RAPTORRAIL RE PTCA or Rebel Stent OTW or Rebel Stent RX or Resolute Integrity OTW or Resolute Integrity Rx or Resolute Onyx Stent OTW or Resolute Onyx Stent RX or Rithron-XR Coronary Stent System or S660 with Discrete Technology OTW Stent or S670 with Discrete Technology OTW Stent or S7 with Discrete Technology OTW Stent or S7 Zipper MX Multi-Exchange Stent or Sapphire II NC Dilatation Catheter or Sapphire NC  Dilatation Catheter or SatinFlex Stent or Self-Apposing Stent BMS or Self-Apposing Stent DES or SLK-View or Sprinter Legend - OTW or Sprinter Legend - RX or Sprinter MX2 (RX) or Sprinter OTW or Stent - Peripheral (any mfr) or Stormer Zipper MX or Surpass Superfusion Perfusion Catheter or Symbiot Covered Stent (ePTFE polymer) or SYNERGY Stent OTW or SYNERGY Stent RX or Tacrolimus Eluting Stent or Taxus Express 2 Monorail Drug Eluting Stent or Taxus Express 2 OTW Drug Eluting Stent or Taxus Express2 ATOM - OTW or Taxus Express2 ATOM - RX or Taxus Liberte Atom - OTW or Taxus Liberte Atom - RX or TAXUS Liberte Long Stent or Taxus Liberte Stent - OTW or Taxus Liberte Stent - RX or Tenax-XR Amorphous Silicon Carb. Coated Stent or Teneo coronary stent or TITAN MEGA PTCA or Trek OTW or Trek Rx or Ultimaster Coronary Stent System or Voyager NC - OTW or Voyager NC - RX or Voyager Rx Coronary Dilation Catheter or Xience Alpine OTW or Xience Alpine RX or Xience DES OTW or Xience DES RX or Xience Nano Rx or Xience Prime  Stent or Xience Prime LL Rx or Xience Prime SV Stent or Xience ProX or Xience V DES - OTW - Multilink MiniVision or Xience V DES - OTW - Multilink Vision or Xience V DES - RX - Multilink MiniVision or Xience V DES - RX - Multilink Vision or Xience Xpedition DES OTW or Xience Xpedition DES Rx or Xience Xpedition LL DES OTW or Xience Xpedition LL DES Rx or Xience Xpedition SV DES OTW or Xience Xpedition SV DES Rx or Yukon Choice BMS Coronary Stent or Yukon Choice Coronary Stent or Wolverine Cutting  Balloon or EluNIR DES or Sapphire II Pro or Takeru NC PTCA or Xience Sierra DES or Accuforce Non Compliant PTCA or VeriFLEX RX or Tryton Side Branch Stent or COBRA PzF NanoCoated or Galaxy Rapamycin Bioresorbable or 3V NEIL Sirolimus or Trapper Balloon or VeriFLEX OTW or Evermine 50 or SIROFLEX DES or Reivas or Promus ELITE DES or PK Papyrus or Takeru Balloon or Cre8 EVO or Cre8 or FLUYDO PTCA or PRO-Kinetic Energy Stent or Trapliner Catheter or Synergy XD Stent or Coroflex ISAR NEO or Promus PREMIER Select or Biomime Lineage or Pro HP or Synergy Megatron or Shockwave Intravascular Lithotripsy (IVL) System or Xience Skypoint DES or Flash MINI Ostial System or TrapIT Trapping Balloon or Angiosculpt EVO or MeRes 100 BRS or Orsiro Mission or Terumo Ryurei or AGENT DCB Catheter or Firefighter NC PTCA or Synergy Everolimus-Eluting or Ultimaster Sirolimus Eluting or Onyx Frontier or Sapphire NC Plus or NC Trek Neo or CONQUERER SC PTCA Balloon Catheter or SCOREFLEX NC Scoring PTCA or ISAR Summit or CONQUERER NC PTCA Balloon or BioMime,  from Cath Lab Visit(s)[#]/Lesions and Devices/Devices[##]. Intracoronary Device Diameter (8031),  from Cath Lab Visit(s)[#]/Lesions and Devices/Devices[##] should not have a value."
* #PC2856 "Parent Child-PC2856" "Discharge Location (10110) != Home or Discharged/transferred to an Extended care/TCU/rehab or Other Discharge Location or Skilled Nursing facility and Hospice Care (10115) != No and Discharge Status (10105) != Alive. Discharge Medication Code (10200),  from Discharge Medications (Prescribed at Discharge - Complete for each Episode of Care in which a PCI was attempted or performed)[#] should not have a value."
* #PC2857 "Parent Child-PC2857" "Discharge Medication Prescribed (10205) != Yes - Prescribed,  from Discharge Medications (Prescribed at Discharge - Complete for each Episode of Care in which a PCI was attempted or performed)[#] and Discharge Medication Code (10200) != Statin,  from Discharge Medications (Prescribed at Discharge - Complete for each Episode of Care in which a PCI was attempted or performed)[#]. Discharge Medication Dose (10207),  from Discharge Medications (Prescribed at Discharge - Complete for each Episode of Care in which a PCI was attempted or performed)[#] should not have a value."
* #PC2858 "Parent Child-PC2858" "Guidewire Across Lesion (8023) != Yes,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. Device Deployed (8024),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC2859 "Parent Child-PC2859" "PreProcedure Medication Code (6986) != not null,  from Cath Lab Visit(s)[#]/Pre-procedure Medication/Pre-Procedure Medication[##]. PreProcedure Medication Administered (6991),  from Cath Lab Visit(s)[#]/Pre-procedure Medication/Pre-Procedure Medication[##] should not have a value."
* #PC2860 "Parent Child-PC2860" "Diagnostic Left Heart Cath (7060) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. LVEF % (Diagnostic Left Heart Cath) (7061),  from Cath Lab Visit(s)[#]/Procedure Information should not have a value."
* #PC2861 "Parent Child-PC2861" "Graft Lesion Segment Number (7527) != not null,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]. Graft Vessel Adjunctive Measurements Obtained (7531),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC2862 "Parent Child-PC2862" "Graft Vessel Adjunctive Measurements Obtained (7531) != Yes,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]. Graft Vessel Instantaneous Wave-Free Ratio (7533),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC2863 "Parent Child-PC2863" "Graft Vessel Adjunctive Measurements Obtained (7531) != Yes,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]. Graft Vessel Optical Coherence Tomography (7535),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC2864 "Parent Child-PC2864" "Graft Vessel Adjunctive Measurements Obtained (7531) != Yes,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]. Graft Vessel Fractional Flow Reserve Ratio (7532),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC2865 "Parent Child-PC2865" "Graft Vessel with Stenosis >= 50% (7525) != Yes,  from Cath Lab Visit(s)[#]/Coronary Anatomy. Graft Lesion Segment Number (7527),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC2866 "Parent Child-PC2866" "Graft Vessel Adjunctive Measurements Obtained (7531) != Yes,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]. Graft Vessel Intravascular Ultrasonography (7534),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC2868 "Parent Child-PC2868" "Graft Lesion Segment Number (7527) != not null,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]. CABG Graft Vessel Unknown (7530),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC2869 "Parent Child-PC2869" "Patient Enrolled in Research Study (11008) != Yes. Research Study Name (11009) should not have a value."
* #PC2870 "Parent Child-PC2870" "Patient Enrolled in Research Study (11008) != Yes. Research Study Patient ID (11010) should not have a value."
* #PC2871 "Parent Child-PC2871" "Stenosis Immediately Prior to Treatment (8004) != 100,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. Chronic Total Occlusion Unknown (8006),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC2872 "Parent Child-PC2872" "Percutaneous Coronary Intervention Indication (7825) != STEMI - Immediate PCI for Acute STEMI or STEMI - Stable (<= 12 hrs from Sx) or STEMI - Stable (> 12 hrs from Sx) or STEMI - Unstable (> 12 hrs from Sx) or STEMI (after successful lytics) or STEMI - Rescue (After unsuccessful lytics) or NSTE - ACS,  from Cath Lab Visit(s)[#]/PCI Procedure. Culprit Stenosis Unknown (8003),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC2873 "Parent Child-PC2873" "Tobacco Use (4625) != Current - Every Day or Current - Some Days or Smoker - Current status unknown. Tobacco Type (4626) should not have a value."
* #PC2874 "Parent Child-PC2874" "Decision for PCI with Surgical Consult (7815) != Yes,  from Cath Lab Visit(s)[#]/PCI Procedure. Cardiovascular Treatment Decision (7816),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC2875 "Parent Child-PC2875" "Treated with Stent (8010) != Yes,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. Stent Type Unknown (8014),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC2876 "Parent Child-PC2876" "Follow-Up Status (11004) != Deceased. Follow-Up Date of Death (11006) should not have a value."
* #PC2877 "Parent Child-PC2877" "Follow-Up Medications Prescribed (11995) != Yes - Prescribed,  from [#] and Follow-Up Medications Code (11990) != Statin,  from [#]. Follow-Up Medication Dose (11996),  from [#] should not have a value."
* #PC2880 "Parent Child-PC2880" "Follow-Up Events (11011) != not null,  from [#]. Follow-Up Events Occurred (11012),  from [#] should not have a value."
* #PC2881 "Parent Child-PC2881" "Follow-Up Events Occurred (11012) != Yes,  from [#]. Follow-Up Event Dates (11014),  from [#] should not have a value."
* #PC2883 "Parent Child-PC2883" "Follow-Up Events Occurred (11012) != Yes,  from [#] and Follow-Up Events (11011) != CABG: Bypass of stented Lesion or PCI of Stented Lesion or Thrombosis in stented Lesion,  from [#]. Follow-Up Devices Event Occurred In (11013),  from [#] should not have a value."
* #PC2884 "Parent Child-PC2884" "Indications for Cath Lab Visit (7400) != Pre-operative Evaluation,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Functional Capacity Unknown (7467),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC2885 "Parent Child-PC2885" "Stress Test Performed (5200) != Yes,  from Cath Lab Visit(s)[#]/Pre-procedure Information. Stress Test Performed Type (5201),  from Cath Lab Visit(s)[#]/Pre-procedure Information/[##] should not have a value."
* #PC2888 "Parent Child-PC2888" "Heart Failure (4001) != Yes,  from Cath Lab Visit(s)[#]/Pre-procedure Information. Heart Failure Newly Diagnosed (4012),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC2889 "Parent Child-PC2889" "Heart Failure Type Unknown (4014) != false,  from Cath Lab Visit(s)[#]/Pre-procedure Information. Heart Failure Type (4013),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC2890 "Parent Child-PC2890" "Electrocardiac Abnormality Type (5034) != New Onset Atrial Fib,  from Cath Lab Visit(s)[#]/Pre-procedure Information. Heart Rate (6011),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC2891 "Parent Child-PC2891" "Prior Myocardial Infarction (4291) != Yes. Most Recent MI Date (4296) should not have a value."
* #PC2892 "Parent Child-PC2892" "Prior Percutaneous Coronary Intervention (4495) != Yes. Most Recent Percutaneous Coronary Intervention Date (4503) should not have a value."
* #PC2893 "Parent Child-PC2893" "Prior Coronary Artery Bypass Graft (4515) != Yes. Most Recent Coronary Artery Bypass Graft Date (4521) should not have a value."
* #PC2894 "Parent Child-PC2894" "Stress Test Performed Type (5201) != not null,  from Cath Lab Visit(s)[#]/Pre-procedure Information/[##]. Stress Test Date (5204),  from Cath Lab Visit(s)[#]/Pre-procedure Information/[##] should not have a value."
* #PC2895 "Parent Child-PC2895" "Electrocardiac Assessment Method (5037) != ECG or Telemetry Monitor or Holter Monitor or Other Electrocardiac Assessment,  from Cath Lab Visit(s)[#]/Pre-procedure Information. Electrocardiac Assessment Results (5032),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC2896 "Parent Child-PC2896" "Electrocardiac Assessment Results (5032) != Abnormal,  from Cath Lab Visit(s)[#]/Pre-procedure Information. New Antiarrhythmic Therapy Initiated Prior to Cath Lab (5033),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC2897 "Parent Child-PC2897" "Electrocardiac Assessment Results (5032) != Abnormal,  from Cath Lab Visit(s)[#]/Pre-procedure Information. Electrocardiac Abnormality Type (5034),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC2898 "Parent Child-PC2898" "Electrocardiac Abnormality Type (5034) != Non Sustained VT,  from Cath Lab Visit(s)[#]/Pre-procedure Information. Non-Sustained Ventricular Tachycardia Type (5036),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC2899 "Parent Child-PC2899" "Intra/Post-Procedure Events (9001) != not null,  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events/[##]. Intra/Post-Procedure Events Occurred (9002),  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events/[##] should not have a value."
* #PC2900 "Parent Child-PC2900" "Intra/Post-Procedure Events Occurred (9002) != Yes,  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events/[##]. Intra/Post-Procedure Event Date and Time (9003),  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events/[##] should not have a value."
* #PC2901 "Parent Child-PC2901" "Prior Diagnostic Coronary Angiography Procedure without intervention (5263) != Yes,  from Cath Lab Visit(s)[#]/Pre-procedure Information. Prior Diagnostic Coronary Angiography Procedure Date (5264),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC2902 "Parent Child-PC2902" "Prior Diagnostic Coronary Angiography Procedure without intervention (5263) != Yes,  from Cath Lab Visit(s)[#]/Pre-procedure Information. Prior Diagnostic Coronary Angiography Procedure Results Unknown (5266),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC2903 "Parent Child-PC2903" "Agatston Calcium Score (5255) != not null,  from Cath Lab Visit(s)[#]/Pre-procedure Information. Agatston Calcium Score Date (5257),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC2904 "Parent Child-PC2904" "Cardiac CTA Performed (5220) != Yes,  from Cath Lab Visit(s)[#]/Pre-procedure Information. Cardiac CTA Date (5226),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC2905 "Parent Child-PC2905" "Cardiac CTA Performed (5220) != Yes,  from Cath Lab Visit(s)[#]/Pre-procedure Information. Cardiac CTA Results Unknown (5228),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC2906 "Parent Child-PC2906" "Heart Failure (4001) != Yes,  from Cath Lab Visit(s)[#]/Pre-procedure Information. Heart Failure Type Unknown (4014),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC2907 "Parent Child-PC2907" "Prior Diagnostic Coronary Angiography Procedure Results Unknown (5266) != false,  from Cath Lab Visit(s)[#]/Pre-procedure Information. Prior Diagnostic Coronary Angiography Procedure Results (5265),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC2908 "Parent Child-PC2908" "Discharge Location (10110) != Other acute care hospital. Transferred for CABG (10111) should not have a value."
* #PC2909 "Parent Child-PC2909" "Discharge Location (10110) != Home or Discharged/transferred to an Extended care/TCU/rehab or Skilled Nursing facility or Other Discharge Location. CABG Planned after Discharge (10112) should not have a value."
* #PC2910 "Parent Child-PC2910" "Percutaneous Coronary Intervention Indication (7825) != New Onset Angina <= 2 months or Stable angina or CAD (without ischemic Sx) or Other PCI Indication,  from Cath Lab Visit(s)[#]/PCI Procedure. Syntax Score Unknown (7832),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC2911 "Parent Child-PC2911" "Syntax Score Unknown (7832) != false,  from Cath Lab Visit(s)[#]/PCI Procedure. Syntax Score (7831),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC3435 "Parent Child-PC3435" "Intracoronary Device(s) Used (8028) != not null,  from Cath Lab Visit(s)[#]/Lesions and Devices/Devices[##]. Intracoronary Device Associated Lesion (8030),  from Cath Lab Visit(s)[#]/Lesions and Devices/Devices[##] should not have a value."
* #PC3449 "Parent Child-PC3449" "Stress Test Performed Type (5201) != not null,  from Cath Lab Visit(s)[#]/Pre-procedure Information/[##]. Stress Test Results (5202),  from Cath Lab Visit(s)[#]/Pre-procedure Information/[##] should not have a value."
* #PC3450 "Parent Child-PC3450" "Stress Test Results (5202) != Positive,  from Cath Lab Visit(s)[#]/Pre-procedure Information/[##]. Stress Test Risk/Extent of Ischemia (5203),  from Cath Lab Visit(s)[#]/Pre-procedure Information/[##] should not have a value."
* #PC3703 "Parent Child-PC3703" "Tobacco Use (4625) != Current - Every Day and Tobacco Type (4626) != Cigarettes. Smoking Amount (4627) should not have a value."
* #PC3734 "Parent Child-PC3734" "Cardiac Arrest Out of Healthcare Facility (4630) != Yes and Cardiac Arrest at Transferring Healthcare Facility (4635) != Yes and Cardiac Arrest at this Facility (7340) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Hypothermia Induced (7806),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC3735 "Parent Child-PC3735" "Cardiac Arrest Out of Healthcare Facility (4630) != Yes and Cardiac Arrest at Transferring Healthcare Facility (4635) != Yes and Cardiac Arrest at this Facility (7340) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Level of Consciousness (PCI Procedure) (7810),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC3740 "Parent Child-PC3740" "Level of Consciousness (10117) is applicable when Discharge status (10105) is Deceased AND If any of [Cardiac Arrest Out of Hospital (4630) = Yes OR Cardiac Arrest at Transferring Facility (4635) = Yes OR Cardiac Arrest at this Facility (7340 ) = Yes]"
* #PC4434 "Parent Child-PC4434" "Discharge Status (10105) != Deceased. Level of Consciousness (Discharge) (10117) should not have a value."
* #PC4437 "Parent Child-PC4437" "Device Deployed (8024) != Yes,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. Intracoronary Device(s) Used (8028),  from Cath Lab Visit(s)[#]/Lesions and Devices/Devices[##] should not have a value."
* #PC4438 "Parent Child-PC4438" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Significant Coronary Artery Dissection (9146),  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events should not have a value."
* #PC4607 "Parent Child-PC4607" "Arterial Access Closure Method (7331) != not null,  from Cath Lab Visit(s)[#]/Procedure Information/[##]. Closure Device Counter (7330),  from Cath Lab Visit(s)[#]/Procedure Information/[##] should not have a value."
* #PC4608 "Parent Child-PC4608" "Intracoronary Device(s) Used (8028) != not null,  from Cath Lab Visit(s)[#]/Lesions and Devices/Devices[##]. Intracoronary Device Counter (8027),  from Cath Lab Visit(s)[#]/Lesions and Devices/Devices[##] should not have a value."
* #PC4678 "Parent Child-PC4678" "Race Calc (1900) != true. Race - White (2070) should not have a value."
* #PC4679 "Parent Child-PC4679" "Race Calc (1900) != true. Race - Black/African American (2071) should not have a value."
* #PC4680 "Parent Child-PC4680" "Race Calc (1900) != true. Race - Asian (2072) should not have a value."
* #PC4681 "Parent Child-PC4681" "Race Calc (1900) != true. Race - American Indian/Alaskan Native (2073) should not have a value."
* #PC4682 "Parent Child-PC4682" "Race Calc (1900) != true. Race - Native Hawaiian/Pacific Islander (2074) should not have a value."
* #PC4684 "Parent Child-PC4684" "Race Asian Indicator (12460) != true. Race - Asian Indian (2080) should not have a value."
* #PC4685 "Parent Child-PC4685" "Race Asian Indicator (12460) != true. Race - Chinese (2081) should not have a value."
* #PC4686 "Parent Child-PC4686" "Race Asian Indicator (12460) != true. Race - Filipino (2082) should not have a value."
* #PC4690 "Parent Child-PC4690" "Race Asian Indicator (12460) != true. Race - Japanese (2083) should not have a value."
* #PC4691 "Parent Child-PC4691" "Race Asian Indicator (12460) != true. Race - Korean (2084) should not have a value."
* #PC4692 "Parent Child-PC4692" "Race Asian Indicator (12460) != true. Race - Vietnamese (2085) should not have a value."
* #PC4693 "Parent Child-PC4693" "Race Asian Indicator (12460) != true. Race - Other Asian (2086) should not have a value."
* #PC4694 "Parent Child-PC4694" "Race Hawaiian Indicator (12461) != true. Race - Native Hawaiian (2090) should not have a value."
* #PC4695 "Parent Child-PC4695" "Race Hawaiian Indicator (12461) != true. Race - Guamanian or Chamorro (2091) should not have a value."
* #PC4696 "Parent Child-PC4696" "Race Hawaiian Indicator (12461) != true. Race - Samoan (2092) should not have a value."
* #PC4697 "Parent Child-PC4697" "Race Hawaiian Indicator (12461) != true. Race - Other Pacific Islander (2093) should not have a value."
* #PC4703 "Parent Child-PC4703" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Hemoglobin (6030),  from Cath Lab Visit(s)[#]/Labs should not have a value."
* #PC4705 "Parent Child-PC4705" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. PreProcedure Troponin I  (6090),  from Cath Lab Visit(s)[#]/Labs should not have a value."
* #PC4707 "Parent Child-PC4707" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Troponin T (Pre-Procedure) (6095),  from Cath Lab Visit(s)[#]/Labs should not have a value."
* #PC4709 "Parent Child-PC4709" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. PCI Operator Last Name (7051),  from Cath Lab Visit(s)[#]/Procedure Information should not have a value."
* #PC4710 "Parent Child-PC4710" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. PCI Operator First Name (7052),  from Cath Lab Visit(s)[#]/Procedure Information should not have a value."
* #PC4711 "Parent Child-PC4711" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. PCI Operator NPI (7054),  from Cath Lab Visit(s)[#]/Procedure Information should not have a value."
* #PC4712 "Parent Child-PC4712" "Fluoroscopy Indicator (12458) != true,  from Cath Lab Visit(s)[#]/Procedure Information. Cumulative Air Kerma (7210),  from Cath Lab Visit(s)[#]/Procedure Information should not have a value."
* #PC4713 "Parent Child-PC4713" "Fluoroscopy Indicator (12458) != true,  from Cath Lab Visit(s)[#]/Procedure Information. Fluoroscopy Time (7214),  from Cath Lab Visit(s)[#]/Procedure Information should not have a value."
* #PC4714 "Parent Child-PC4714" "Fluoroscopy Indicator (12458) != true,  from Cath Lab Visit(s)[#]/Procedure Information. Dose Area Product (7220),  from Cath Lab Visit(s)[#]/Procedure Information should not have a value."
* #PC4715 "Parent Child-PC4715" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Mechanical Ventricular Support Device (7423),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC4716 "Parent Child-PC4716" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Mechanical Ventricular Support Timing (7424),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC4717 "Parent Child-PC4717" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. PCI Status (7800),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4718 "Parent Child-PC4718" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Hypothermia Induced (7806),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4719 "Parent Child-PC4719" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Hypothermia Induced Timing (7807),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4720 "Parent Child-PC4720" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Level of Consciousness (PCI Procedure) (7810),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4721 "Parent Child-PC4721" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Decision for PCI with Surgical Consult (7815),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4722 "Parent Child-PC4722" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Cardiovascular Treatment Decision (7816),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4723 "Parent Child-PC4723" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. PCI for MultiVessel Disease (7820),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4724 "Parent Child-PC4724" "Diagnostic Coronary Angiography Procedure (7045) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Diagnostic Cath Operator Identification Number (1505),  from Cath Lab Visit(s)[#]/Procedure Information should not have a value."
* #PC4725 "Parent Child-PC4725" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. PCI Operator Identification Number (1506),  from Cath Lab Visit(s)[#]/Procedure Information should not have a value."
* #PC4729 "Parent Child-PC4729" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Multi-vessel Procedure Type (7821),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4730 "Parent Child-PC4730" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Percutaneous Coronary Intervention Indication (7825),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4731 "Parent Child-PC4731" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Acute Coronary Syndrome Symptom Date (7826),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4732 "Parent Child-PC4732" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Acute Coronary Syndrome Symptom Time (7827),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4734 "Parent Child-PC4734" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Thrombolytics (7829),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4741 "Parent Child-PC4741" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Thrombolytic Therapy Date and Time (7830),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4742 "Parent Child-PC4742" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Syntax Score (7831),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4744 "Parent Child-PC4744" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. STEMI or STEMI Equivalent First Noted (7835),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4745 "Parent Child-PC4745" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Subsequent ECG with STEMI or STEMI Equivalent Date and Time (7836),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4746 "Parent Child-PC4746" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Subsequent ECG obtained in Emergency Department (7840),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4747 "Parent Child-PC4747" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Patient Transferred In for Immediate PCI for STEMI (7841),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4748 "Parent Child-PC4748" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Emergency Department Presentation at Referring Facility Date and Time (7842),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4749 "Parent Child-PC4749" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. First Device Activation Date and Time (7845),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4750 "Parent Child-PC4750" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Patient Centered Reason for Delay in PCI (7850),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4751 "Parent Child-PC4751" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Patient Centered Reason for Delay in PCI Reason (7851),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC4752 "Parent Child-PC4752" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. PCI Procedure Medication Code (7990),  from Cath Lab Visit(s)[#]/PCI Procedure/[##] should not have a value."
* #PC4753 "Parent Child-PC4753" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Procedure Medications Administered (7995),  from Cath Lab Visit(s)[#]/PCI Procedure/[##] should not have a value."
* #PC4754 "Parent Child-PC4754" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Native Lesion Segment Number (8001),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4755 "Parent Child-PC4755" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Culprit Stenosis (8002),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4757 "Parent Child-PC4757" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Stenosis Immediately Prior to Treatment (8004),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4758 "Parent Child-PC4758" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Chronic Total Occlusion (8005),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4760 "Parent Child-PC4760" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. TIMI Flow (Pre-Intervention) (8007),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4761 "Parent Child-PC4761" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Previously Treated Lesion (8008),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4762 "Parent Child-PC4762" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Previously Treated Lesion Date (8009),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4763 "Parent Child-PC4763" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Treated with Stent (8010),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4764 "Parent Child-PC4764" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. In-stent Restenosis (8011),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4765 "Parent Child-PC4765" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. In-stent Thrombosis (8012),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4766 "Parent Child-PC4766" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Stent Type (8013),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4768 "Parent Child-PC4768" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Lesion In Graft (8015),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4769 "Parent Child-PC4769" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Location in Graft (8017),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4770 "Parent Child-PC4770" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Type of CABG Graft (8016),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4771 "Parent Child-PC4771" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Location in Graft (8017),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4772 "Parent Child-PC4772" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Navigate through Graft to Native Lesion (8018),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4773 "Parent Child-PC4773" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Lesion Complexity (8019),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4774 "Parent Child-PC4774" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Lesion Length (8020),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4775 "Parent Child-PC4775" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Severe Calcification (8021),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4776 "Parent Child-PC4776" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Bifurcation Lesion (8022),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4777 "Parent Child-PC4777" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Guidewire Across Lesion (8023),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4778 "Parent Child-PC4778" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Device Deployed (8024),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4779 "Parent Child-PC4779" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Stenosis (Post-Intervention) (8025),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4780 "Parent Child-PC4780" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. TIMI Flow (Post-Intervention) (8026),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC4781 "Parent Child-PC4781" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Intracoronary Device(s) Used (8028),  from Cath Lab Visit(s)[#]/Lesions and Devices/Devices[##] should not have a value."
* #PC4782 "Parent Child-PC4782" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Intracoronary Device Associated Lesion (8030),  from Cath Lab Visit(s)[#]/Lesions and Devices/Devices[##] should not have a value."
* #PC4783 "Parent Child-PC4783" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information and Intracoronary Device(s) Used (8028) != 3V NEIL Sirolimus or Absorb Bioresorbable Vascular Scaffold System or Accent Balloon or Accuforce Non Compliant PTCA or Ace Balloon or ACROSS CTO ST Balloon or Airtimes Balloon RX or Amadeus Supercross Coronary Dilatation Catheter or Andante Balloon or Angiosculpt Scoring Balloon Catheter or AngioSculpt Taper or Apex (OTW) or Apex Monorail or Apex Monorail - Flex or Apex Monorail - Push or Apex OTW - Flex or Apex OTW - Push or Apollo NC Balloon RX or Artimes SC or AXXESS Bifurcated Stent System or BeStent2 w/ Discrete Tech OTW Stent or Azule Stent or Balloon - Peripheral (any mfr) or Balloon from deployed stent or BEO NC Balloon or BioDivYsio Stents (phosphorylcholine) or Biomime Morph Sirolimus Eluting Stent or BioMatrix Flex or BioMatrix Alpha or Biofreedom Stent or Bx SONIC OTW Stent or Bx Velocity RX Stent with HEPACOAT or Bx Velocity Rx Stent or Bx Velocity OTW Stent with HEPACOAT or Bx Velocity OTW Stent or Bx SONIC OTW Stent with HEPACOAT or Champion DES (Everlimus) or Chocolate Balloon OTW or Chocolate Balloon RX or Chocolate XD PTCA Catheter or Clearway Rx or COBRA PzF NanoCoated or COMBO Dual Therapy Stent or Coroflex Blue NEO Stent or Coroflex ISAR Coronary Stent or CROSSFLEX LC Stent (OTW) or DESyne Coronary Stent or DESolve Bioresorbable Coronary Scaffold System or Cypher Sirolimus-eluting Stent (Rx) or Cypher Sirolimus-eluting Stent (OTW) or Cutting Balloon Ultra2 Monorail or Cutting Balloon Ultra2 (OTW) or Cutting Balloon Ultra OTW or Cutting Balloon Ultra Monorail or CROSSSAIL Coronary Dilatation Catheter or Driver MX2 (RX) or DuraStar RX Balloon Catheter or Driver Zipper MX Coronary Stent or Driver RX or Driver OTW Coronary Stent or EluNIR DES or Emerge PTCA Dilatation Catheter Monorail or Euphora Balloon RX or Euphora Balloon OTW or Endeavor Stent MX2 or Endeavor Stent (OTW) or Endeavor Sprint - RX or Endeavor Sprint - OTW or Endeavor Resolute Zotarolimus Stent RX or Empira Rx or Empira NC Rx or Emerge PTCA Dilatation Catheter OTW or Express2 OTW stent or Express2 RE stent or Firehawk Rapamycin Target Eluting Coronary Stent System or FireStar RX Balloon Catheter or FLASH Ostial System RX or Flextome Cutting Balloon Monorail or Flextome Cutting Balloon OTW or FORTIS II Balloon or Foxtrot NC PTCA Balloon Catheter or FX miniRAIL Rx PTCA or Galaxy Rapamycin Bioresorbable or Glider PTCA Balloon Catheter OTW or Glider PTCA Balloon Catheter RX or Graft Ace Balloon or GRAFTMASTER RX Stent or HIGHSAIL Coronary Dilatation Catheter or Hiryu NC Balloon or IKAZUCHI X Balloon or IN.PACT Falcon or INSIGNIA or Integrity OTW Coronary Stent or Integrity RX Coronary Stent or ION Stent Monorail or ION Stent OTW or JIVE PTCA Balloon Catheter or Jostent Coronary Stent Graft or Jostent GraftMaster OTW or Kaname Bare Metal Stent or L Ranger OTW Balloon or Lacrosse NSE ALPHA Coronary Catheter or Liberte OTW Stent or Liberte RE Stent or Long Ace Balloon or Maverick(2) Monorail Balloon RE or Maverick XL Monorail  RE Balloon or Maverick OTW Balloon or Magic WALLSTENT Self Expanding Stent or Magic Touch Balloon RX or Merlin PTCA Catheter (OTW) or PathMaker PTCA Balloon Catheter or Pantera PRO Balloon or Pantera LEO Balloon Catheter or Orsiro Drug Eluting Stent System (BIOFLOW-II) or OPN NC Balloon RX or OPENSAIL Coronary Dilatation Catheter or Omega BMS or Nobori Stent or NIRxcell CoCr Stent RX or NIR Elite OTW Stent or NIR Elite Monorail RE Stent or Ninja FX OTW PTCA or Nimbus PICO Mu PTCA or NIC Nano CTO Balloon RX or NIC Nano CTO Balloon OTW or NC Trek Rx or NC Trek OTW or NC Traveler coronary balloon dilatation catheter or NC Stormer Zipper MX or NC Stormer OTW Balloon or NC Stormer MX2 or NC Sprinter - RX or NC RAPTOR OTW PTCA or NC Ranger OTW Balloon or NC Quantum Apex OTW or NC Quantum Apex Monorail or NC Mozec RX or NC Monorail Balloon RE or NC Merlin PTCA Catheter (OTW) or NC Euphora RX or NC Euphora OTW or NC Emerge RX or NC Emerge OTW or Multi-Link Vision RX Stent or Multi-Link Vision OTW Stent or Multi-Link Ultra Stent - RX or Multi-Link Ultra Stent - OTW or Multi-Link TETRA Stent or Multi-Link RX ZETA Stent or Multi-Link Pixel Stent RX or Multi-Link Pixel Stent OTW or Multi-Link PENTA Stent or Multi-Link OTW ZETA Stent or Metricath Gemini Catheter or Metricath GPS Catheter or MGuard Embolic Protection Stent or Micro Driver (OTW) or Micro Driver MX2 (RX) or Micro Driver RX or MINI Trek II or Mini-Trek OTW or Mini-Trek Rx or MOZEC PTCA Balloon or Multi-Link 8 LL Rx or Multi-Link Mini Vision OTW Stent or Multi-Link Mini Vision RX Stent or Pivot Balloon Catheter or POWERSAIL Coronary Dilatation Catheter or Presillion Plus CoCr Coronary Stent Rx or PRO-Kinetic Energy Stent OTW or ProNOVA XR or Promus PREMIER RX or Promus PREMIER OTW or Promus Element RX or Promus Element Plus Rx or Promus Element Plus OTW or Promus Element OTW or Promus DES RX or Promus DES OTW or PRO-Kinetic Energy Stent RX or PRO-Kinetic Energy Stent RX or Quantum Maverick OTW Balloon or Quantum Maverick RE Balloon or Quantum Ranger OTW Balloon or R Stent Evolution or R Stent Prodigy or R Stent SVS (small vessel system) or Radius Self Expanding Stent or Raiden 3 Balloon Catheter or Rebel Stent RX or Rebel Stent OTW or RAPTORRAIL RE PTCA or RAPTOR OTW PTCA or Resolute Integrity OTW or Resolute Integrity Rx or Resolute Onyx Stent OTW or Resolute Onyx Stent RX or Rithron-XR Coronary Stent System or SeQuent Please Balloon or Self-Apposing Stent DES or Self-Apposing Stent BMS or Scoreflex Balloon Catheter or SatinFlex Stent or Sapphire NC  Dilatation Catheter or Sapphire II Pro or Sapphire II NC Dilatation Catheter or S7 Zipper MX Multi-Exchange Stent or S7 with Discrete Technology OTW Stent or S670 with Discrete Technology OTW Stent or S660 with Discrete Technology OTW Stent or Ryujin Plus Balloon OTW or RX ESPRIT Coronary Dilation Balloon or SLK-View or Sprinter Balloon or Sprinter Legend - OTW or Sprinter Legend - RX or Sprinter MX2 (RX) or Sprinter OTW or Stent - Peripheral (any mfr) or Stormer OTW Balloon or Stormer Zipper MX or Surpass Superfusion Perfusion Catheter or Symbiot Covered Stent (ePTFE polymer) or SYNERGY Stent OTW or SYNERGY Stent RX or Tacrolimus Eluting Stent or Takeru NC PTCA or Taxus Express 2 Monorail Drug Eluting Stent or Taxus Express 2 OTW Drug Eluting Stent or Taxus Express2 ATOM - OTW or Taxus Express2 ATOM - RX or Taxus Liberte Atom - OTW or Taxus Liberte Atom - RX or TAXUS Liberte Long Stent or Taxus Liberte Stent - OTW or Taxus Liberte Stent - RX or Tazuna Balloon or Tenax-XR Amorphous Silicon Carb. Coated Stent or Teneo coronary stent or Threader Mico-Dilatation Balloon OTW or Threader Micro-Dilatation Balloon RX or TITAN MEGA PTCA or Trapper Balloon or Traveler coronary balloon dilatation catheter or Trek OTW or Trek Rx or Tryton Side Branch Stent or Xience Xpedition SV DES Rx or Xience Xpedition SV DES OTW or Xience Xpedition LL DES Rx or Xience Xpedition LL DES OTW or Xience Xpedition DES Rx or Xience Xpedition DES OTW or Xience V DES - RX - Multilink Vision or Xience V DES - RX - Multilink MiniVision or Xience V DES - OTW - Multilink Vision or Xience V DES - OTW - Multilink MiniVision or Xience Sierra DES or Xience ProX or Xience Prime SV Stent or Xience Prime LL Rx or Xience Prime  Stent or Xience Nano Rx or Xience DES RX or Xience DES OTW or Xience Alpine RX or Xience Alpine OTW or Wolverine Cutting  Balloon or Voyager Rx Coronary Dilation Catheter or Voyager OTW Balloon or Ultimaster Coronary Stent System or VeriFLEX OTW or VeriFLEX RX or Viva Balloon or Voyager NC - OTW or Voyager NC - RX or Yukon Choice BMS Coronary Stent or Yukon Choice Coronary Stent or Firebird2 Stent or MOZEC NC PTCA Balloon or Evermine 50 or SIROFLEX DES or Reivas or Promus ELITE DES or Takeru Balloon or Cre8 EVO or Cre8 or FLUYDO PTCA or PK Papyrus or PRO-Kinetic Energy Stent or Trapliner Catheter or Synergy XD Stent or Coroflex ISAR NEO or Promus PREMIER Select or Biomime Lineage or Pro HP or Synergy Megatron or Shockwave Intravascular Lithotripsy (IVL) System or Xience Skypoint DES or Flash MINI Ostial System or TrapIT Trapping Balloon or Angiosculpt EVO or MeRes 100 BRS or Orsiro Mission or Terumo Ryurei or Firefighter NC PTCA or AGENT DCB Catheter or Synergy Everolimus-Eluting or Ultimaster Sirolimus Eluting or Sapphire NC Plus or Onyx Frontier or NC Trek Neo or SCOREFLEX NC Scoring PTCA or CONQUERER SC PTCA Balloon Catheter or BioMime or CONQUERER NC PTCA Balloon or ISAR Summit,  from Cath Lab Visit(s)[#]/Lesions and Devices/Devices[##]. Intracoronary Device Diameter (8031),  from Cath Lab Visit(s)[#]/Lesions and Devices/Devices[##] should not have a value."
* #PC4784 "Parent Child-PC4784" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information and Intracoronary Device(s) Used (8028) != 3V NEIL Sirolimus or Absorb Bioresorbable Vascular Scaffold System or Accent Balloon or Accuforce Non Compliant PTCA or Ace Balloon or ACROSS CTO ST Balloon or Airtimes Balloon RX or Amadeus Supercross Coronary Dilatation Catheter or Andante Balloon or Angiosculpt Scoring Balloon Catheter or AngioSculpt Taper or Apex (OTW) or Apex Monorail or Apex Monorail - Flex or Apex Monorail - Push or Apex OTW - Flex or Apex OTW - Push or Apollo NC Balloon RX or Artimes SC or AXXESS Bifurcated Stent System or BeStent2 w/ Discrete Tech OTW Stent or BEO NC Balloon or Balloon from deployed stent or Balloon - Peripheral (any mfr) or Azule Stent or BioDivYsio Stents (phosphorylcholine) or Biofreedom Stent or BioMatrix Flex or BioMatrix Alpha or Biomime Morph Sirolimus Eluting Stent or Bx SONIC OTW Stent or Bx SONIC OTW Stent with HEPACOAT or Bx Velocity OTW Stent or Bx Velocity OTW Stent with HEPACOAT or Bx Velocity Rx Stent or Bx Velocity RX Stent with HEPACOAT or Champion DES (Everlimus) or Chocolate Balloon OTW or Chocolate Balloon RX or Chocolate XD PTCA Catheter or Clearway Rx or COBRA PzF NanoCoated or COMBO Dual Therapy Stent or Coroflex Blue NEO Stent or Coroflex ISAR Coronary Stent or CROSSFLEX LC Stent (OTW) or DESyne Coronary Stent or DESolve Bioresorbable Coronary Scaffold System or Cypher Sirolimus-eluting Stent (Rx) or Cypher Sirolimus-eluting Stent (OTW) or Cutting Balloon Ultra2 Monorail or Cutting Balloon Ultra2 (OTW) or Cutting Balloon Ultra OTW or Cutting Balloon Ultra Monorail or CROSSSAIL Coronary Dilatation Catheter or Driver MX2 (RX) or Driver OTW Coronary Stent or Driver RX or Driver Zipper MX Coronary Stent or DuraStar RX Balloon Catheter or EluNIR DES or Emerge PTCA Dilatation Catheter Monorail or Euphora Balloon RX or Euphora Balloon OTW or Endeavor Stent MX2 or Endeavor Stent (OTW) or Endeavor Sprint - RX or Endeavor Sprint - OTW or Endeavor Resolute Zotarolimus Stent RX or Empira Rx or Empira NC Rx or Emerge PTCA Dilatation Catheter OTW or Express2 OTW stent or Express2 RE stent or Firebird2 Stent or Firehawk Rapamycin Target Eluting Coronary Stent System or FireStar RX Balloon Catheter or FLASH Ostial System RX or Flextome Cutting Balloon Monorail or Flextome Cutting Balloon OTW or FORTIS II Balloon or Foxtrot NC PTCA Balloon Catheter or FX miniRAIL Rx PTCA or Galaxy Rapamycin Bioresorbable or HIGHSAIL Coronary Dilatation Catheter or Hiryu NC Balloon or IKAZUCHI X Balloon or IN.PACT Falcon or INSIGNIA or Integrity OTW Coronary Stent or Integrity RX Coronary Stent or ION Stent Monorail or Lacrosse NSE ALPHA Coronary Catheter or L Ranger OTW Balloon or Kaname Bare Metal Stent or Jostent GraftMaster OTW or Jostent Coronary Stent Graft or JIVE PTCA Balloon Catheter or ION Stent OTW or Liberte OTW Stent or Liberte RE Stent or Long Ace Balloon or Maverick(2) Monorail Balloon RE or Maverick XL Monorail  RE Balloon or Maverick OTW Balloon or Magic WALLSTENT Self Expanding Stent or Magic Touch Balloon RX or Merlin PTCA Catheter (OTW) or Metricath Gemini Catheter or Metricath GPS Catheter or MGuard Embolic Protection Stent or Micro Driver (OTW) or Micro Driver MX2 (RX) or Micro Driver RX or MINI Trek II or Mini-Trek OTW or Mini-Trek Rx or MOZEC NC PTCA Balloon or MOZEC PTCA Balloon or Multi-Link 8 LL Rx or Multi-Link Mini Vision OTW Stent or Multi-Link Mini Vision RX Stent or Multi-Link OTW ZETA Stent or Multi-Link PENTA Stent or Multi-Link Pixel Stent OTW or Multi-Link Pixel Stent RX or Multi-Link RX ZETA Stent or Multi-Link TETRA Stent or Multi-Link Ultra Stent - OTW or Multi-Link Ultra Stent - RX or Multi-Link Vision OTW Stent or Multi-Link Vision RX Stent or NC Emerge OTW or NC Emerge RX or NC Euphora OTW or NC Euphora RX or NC Merlin PTCA Catheter (OTW) or NC Monorail Balloon RE or NC Mozec RX or NC Quantum Apex Monorail or NC Quantum Apex OTW or NC Ranger OTW Balloon or NC RAPTOR OTW PTCA or NC Sprinter - RX or NC Stormer MX2 or NC Stormer OTW Balloon or NC Stormer Zipper MX or NC Traveler coronary balloon dilatation catheter or NC Trek OTW or NC Trek Rx or NIC Nano CTO Balloon OTW or NIC Nano CTO Balloon RX or Nimbus PICO Mu PTCA or Ninja FX OTW PTCA or NIR Elite Monorail RE Stent or NIR Elite OTW Stent or NIRxcell CoCr Stent RX or Nobori Stent or Omega BMS or OPENSAIL Coronary Dilatation Catheter or OPN NC Balloon RX or Orsiro Drug Eluting Stent System (BIOFLOW-II) or Pantera LEO Balloon Catheter or Pantera PRO Balloon or PathMaker PTCA Balloon Catheter or Pivot Balloon Catheter or POWERSAIL Coronary Dilatation Catheter or Presillion Plus CoCr Coronary Stent Rx or PRO-Kinetic Energy Stent OTW or ProNOVA XR or Promus PREMIER RX or Promus PREMIER OTW or Promus Element RX or Promus Element Plus Rx or Promus Element Plus OTW or Promus Element OTW or Promus DES RX or Promus DES OTW or PRO-Kinetic Energy Stent RX or PRO-Kinetic Energy Stent RX or Quantum Maverick OTW Balloon or Quantum Maverick RE Balloon or Quantum Ranger OTW Balloon or R Stent Evolution or Rebel Stent RX or Rebel Stent OTW or RAPTORRAIL RE PTCA or RAPTOR OTW PTCA or Raiden 3 Balloon Catheter or Radius Self Expanding Stent or R Stent SVS (small vessel system) or Resolute Integrity OTW or Resolute Integrity Rx or Resolute Onyx Stent OTW or Resolute Onyx Stent RX or Rithron-XR Coronary Stent System or RX ESPRIT Coronary Dilation Balloon or SeQuent Please Balloon or Self-Apposing Stent DES or Self-Apposing Stent BMS or Scoreflex Balloon Catheter or SatinFlex Stent or Sapphire NC  Dilatation Catheter or Sapphire II Pro or Sapphire II NC Dilatation Catheter or S7 Zipper MX Multi-Exchange Stent or S7 with Discrete Technology OTW Stent or S670 with Discrete Technology OTW Stent or S660 with Discrete Technology OTW Stent or Ryujin Plus Balloon OTW or SLK-View or Sprinter Balloon or Sprinter Legend - OTW or Sprinter Legend - RX or Sprinter MX2 (RX) or Sprinter OTW or Stent - Peripheral (any mfr) or Stormer OTW Balloon or Stormer Zipper MX or Surpass Superfusion Perfusion Catheter or Symbiot Covered Stent (ePTFE polymer) or SYNERGY Stent OTW or SYNERGY Stent RX or Tacrolimus Eluting Stent or Takeru NC PTCA or Taxus Express 2 Monorail Drug Eluting Stent or Taxus Express 2 OTW Drug Eluting Stent or Taxus Express2 ATOM - OTW or Taxus Express2 ATOM - RX or Taxus Liberte Atom - OTW or Taxus Liberte Atom - RX or TAXUS Liberte Long Stent or Taxus Liberte Stent - OTW or Taxus Liberte Stent - RX or Tazuna Balloon or Tenax-XR Amorphous Silicon Carb. Coated Stent or Teneo coronary stent or Threader Mico-Dilatation Balloon OTW or Threader Micro-Dilatation Balloon RX or TITAN MEGA PTCA or Trapper Balloon or Traveler coronary balloon dilatation catheter or Trek OTW or Trek Rx or Tryton Side Branch Stent or Ultimaster Coronary Stent System or VeriFLEX OTW or VeriFLEX RX or Viva Balloon or Voyager NC - OTW or Voyager NC - RX or Voyager OTW Balloon or Voyager Rx Coronary Dilation Catheter or Wolverine Cutting  Balloon or Xience Alpine OTW or Xience Alpine RX or Xience DES OTW or Xience DES RX or Xience Nano Rx or Xience Prime  Stent or Xience Prime LL Rx or Xience Prime SV Stent or Xience ProX or Xience Sierra DES or Xience V DES - OTW - Multilink MiniVision or Xience V DES - OTW - Multilink Vision or Xience V DES - RX - Multilink MiniVision or Xience V DES - RX - Multilink Vision or Xience Xpedition DES OTW or Xience Xpedition DES Rx or Xience Xpedition LL DES OTW or Xience Xpedition LL DES Rx or Xience Xpedition SV DES OTW or Xience Xpedition SV DES Rx or Yukon Choice BMS Coronary Stent or Yukon Choice Coronary Stent or Glider PTCA Balloon Catheter OTW or Glider PTCA Balloon Catheter RX or Graft Ace Balloon or GRAFTMASTER RX Stent or R Stent Prodigy or Evermine 50 or SIROFLEX DES or Reivas or Promus ELITE DES or Takeru Balloon or Cre8 EVO or Cre8 or FLUYDO PTCA or PK Papyrus or PRO-Kinetic Energy Stent or Trapliner Catheter or Synergy XD Stent or Coroflex ISAR NEO or Promus PREMIER Select or Biomime Lineage or Pro HP or Synergy Megatron or Shockwave Intravascular Lithotripsy (IVL) System or Xience Skypoint DES or Flash MINI Ostial System or TrapIT Trapping Balloon or Angiosculpt EVO or MeRes 100 BRS or Orsiro Mission or Terumo Ryurei or AGENT DCB Catheter or Firefighter NC PTCA or Synergy Everolimus-Eluting or Ultimaster Sirolimus Eluting or Sapphire NC Plus or Onyx Frontier or NC Trek Neo or CONQUERER SC PTCA Balloon Catheter or SCOREFLEX NC Scoring PTCA or CONQUERER NC PTCA Balloon or BioMime or ISAR Summit,  from Cath Lab Visit(s)[#]/Lesions and Devices/Devices[##]. Intracoronary Device Length (8032),  from Cath Lab Visit(s)[#]/Lesions and Devices/Devices[##] should not have a value."
* #PC4785 "Parent Child-PC4785" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Hemoglobin (8505),  from Cath Lab Visit(s)[#]/Labs should not have a value."
* #PC4787 "Parent Child-PC4787" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. PostProcedure Troponin I  (8515),  from Cath Lab Visit(s)[#]/Labs should not have a value."
* #PC4789 "Parent Child-PC4789" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Troponin T (Post-Procedure) (8520),  from Cath Lab Visit(s)[#]/Labs should not have a value."
* #PC4791 "Parent Child-PC4791" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Coronary Artery Perforation (9145),  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events should not have a value."
* #PC4792 "Parent Child-PC4792" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Significant Coronary Artery Dissection (9146),  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events should not have a value."
* #PC4793 "Parent Child-PC4793" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Transfusion PCI (9277),  from Cath Lab Visit(s)[#]/Intra and Post-procedure Events should not have a value."
* #PC4794 "Parent Child-PC4794" "Episode Percutaneous Coronary Intervention Indicator (13011) != true. Hemoglobin (10065) should not have a value."
* #PC4798 "Parent Child-PC4798" "Follow-Up Status (11004) != Deceased. Cause of Death (11007) should not have a value."
* #PC4799 "Parent Child-PC4799" "Diagnostic Coronary Angiography Procedure (7045) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Diagnostic Catheterization Operator NPI (7049),  from Cath Lab Visit(s)[#]/Procedure Information should not have a value."
* #PC4808 "Parent Child-PC4808" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. PCI Operator NPI (7054),  from Cath Lab Visit(s)[#]/Procedure Information should not have a value."
* #PC5067 "Parent Child-PC5067" "Episode Percutaneous Coronary Intervention Indicator (13011) != true. Comfort Measures Only (10075) should not have a value."
* #PC5068 "Parent Child-PC5068" "Episode Percutaneous Coronary Intervention Indicator (13011) != true. Discharge Location (10110) should not have a value."
* #PC5069 "Parent Child-PC5069" "Episode Percutaneous Coronary Intervention Indicator (13011) != true. Cardiac Rehabilitation Referral (10116) should not have a value."
* #PC5289 "Parent Child-PC5289" "Race - Asian (2072) != true. Race Asian Indicator (12460) should not have a value."
* #PC5290 "Parent Child-PC5290" "Race - Native Hawaiian/Pacific Islander (2074) != true. Race Hawaiian Indicator (12461) should not have a value."
* #PC5312 "Parent Child-PC5312" "Cardiac Arrest Out of Healthcare Facility (4630) != Yes. Cardiac Arrest After Arrival of Emergency Medical Services (4632) should not have a value."
* #PC5313 "Parent Child-PC5313" "Missing value(s) for ."
* #PC5319 "Parent Child-PC5319" "Missing value(s) for Stress Testing."
* #PC5320 "Parent Child-PC5320" "Missing value(s) for Arterial Closure Method."
* #PC5321 "Parent Child-PC5321" "Missing value(s) for Valvular Disease Stenosis."
* #PC5322 "Parent Child-PC5322" "Missing value(s) for Valvular Disease Regurgitation."
* #PC5323 "Parent Child-PC5323" "Missing value(s) for If Native Vessel with Stenosis >= 50%, specify segment(s):."
* #PC5324 "Parent Child-PC5324" "Missing value(s) for If Graft Vessel with Stenosis >= 50% = 'Yes', please specify segments."
* #PC5325 "Parent Child-PC5325" "Missing value(s) for Lesions."
* #PC5326 "Parent Child-PC5326" "Missing value(s) for Intracoronary Devices."
* #PC5386 "Parent Child-PC5386" "Graft Vessel with Stenosis >= 50% (7525) != Yes,  from Cath Lab Visit(s)[#]/Coronary Anatomy. Graft Lesion Segment Number (7527),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC6411 "Parent Child-PC6411" "Hispanic or Latino Ethnicity (2076) != Yes. Hispanic Ethnicity Indicator (12462) should not have a value."
* #PC6604 "Parent Child-PC6604" "Missing value(s) for Follow Up Research Study Information."
* #PC7117 "Parent Child-PC7117" "Heart Failure (4001) != Yes,  from Cath Lab Visit(s)[#]/Pre-procedure Information and Heart Failure Type Unknown (4014) != false or null,  from Cath Lab Visit(s)[#]/Pre-procedure Information. Heart Failure Type (4013),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC7180 "Parent Child-PC7180" "Prior Percutaneous Coronary Intervention (4495) != Yes and Percutaneous Coronary Intervention of the Left Main Coronary Artery Unknown (4502) != false or null. Percutaneous Coronary Intervention of the Left Main Coronary Artery (4501) should not have a value."
* #PC7181 "Parent Child-PC7181" "Cardiac Arrest Out of Healthcare Facility (4630) != Yes and First Cardiac Arrest Rhythm Unknown (4634) != false or null. First Cardiac Arrest Rhythm (4633) should not have a value."
* #PC7182 "Parent Child-PC7182" "Cardiac CTA Performed (5220) != Yes,  from Cath Lab Visit(s)[#]/Pre-procedure Information and Cardiac CTA Results Unknown (5228) != false or null,  from Cath Lab Visit(s)[#]/Pre-procedure Information. Cardiac CTA Results (5227),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC7183 "Parent Child-PC7183" "Prior Diagnostic Coronary Angiography Procedure without intervention (5263) != Yes,  from Cath Lab Visit(s)[#]/Pre-procedure Information and Prior Diagnostic Coronary Angiography Procedure Results Unknown (5266) != false or null,  from Cath Lab Visit(s)[#]/Pre-procedure Information. Prior Diagnostic Coronary Angiography Procedure Results (5265),  from Cath Lab Visit(s)[#]/Pre-procedure Information should not have a value."
* #PC7184 "Parent Child-PC7184" "Closure Method Not Documented (7332) != false or null,  from Cath Lab Visit(s)[#]/Procedure Information. Arterial Access Closure Method (7331),  from Cath Lab Visit(s)[#]/Procedure Information/[##] should not have a value."
* #PC7185 "Parent Child-PC7185" "Functional Capacity Unknown (7467) != false or null,  from Cath Lab Visit(s)[#]/Cath Lab Visit and Indications for Cath Lab Visit (7400) != Pre-operative Evaluation,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Functional Capacity (7466),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC7186 "Parent Child-PC7186" "Acute Coronary Syndrome Symptom Time Unknown (7828) != false or null,  from Cath Lab Visit(s)[#]/PCI Procedure and Acute Coronary Syndrome Symptom Date (7826) != not null,  from Cath Lab Visit(s)[#]/PCI Procedure. Acute Coronary Syndrome Symptom Time (7827),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC7187 "Parent Child-PC7187" "Percutaneous Coronary Intervention Indication (7825) != CAD (without ischemic Sx) or Other PCI Indication or Stable angina or New Onset Angina <= 2 months,  from Cath Lab Visit(s)[#]/PCI Procedure and Syntax Score Unknown (7832) != false or null,  from Cath Lab Visit(s)[#]/PCI Procedure. Syntax Score (7831),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC7188 "Parent Child-PC7188" "Percutaneous Coronary Intervention Indication (7825) != NSTE - ACS or STEMI - Immediate PCI for Acute STEMI or STEMI - Rescue (After unsuccessful lytics) or STEMI - Stable (<= 12 hrs from Sx) or STEMI - Stable (> 12 hrs from Sx) or STEMI - Unstable (> 12 hrs from Sx) or STEMI (after successful lytics),  from Cath Lab Visit(s)[#]/PCI Procedure and Culprit Stenosis Unknown (8003) != false or null,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. Culprit Stenosis (8002),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC7189 "Parent Child-PC7189" "Chronic Total Occlusion Unknown (8006) != false or null,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] and Stenosis Immediately Prior to Treatment (8004) != 100,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. Chronic Total Occlusion (8005),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC7190 "Parent Child-PC7190" "Treated with Stent (8010) != Yes,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] and Stent Type Unknown (8014) != false or null,  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##]. Stent Type (8013),  from Cath Lab Visit(s)[#]/Lesions and Devices/Lesions[##] should not have a value."
* #PC7191 "Parent Child-PC7191" "Graft Lesion Segment Number (7527) != not null,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] and CABG Graft Vessel Unknown (7530) != false or null,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]. CABG Graft Vessel (7529),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC7221 "Parent Child-PC7221" "Missing value(s) for Arterial Closure Method."
* #PC7760 "Parent Child-PC7760" "Creatinine Not Drawn (10061) != false or null. Creatinine (10060) should not have a value."
* #PC7761 "Parent Child-PC7761" "Hemoglobin Not Drawn (10066) != false or null. Hemoglobin (10065) should not have a value."
* #PC7762 "Parent Child-PC7762" "Zip Code N/A (2066) != false or null. Patient Zip Code (2065) should not have a value."
* #PC7763 "Parent Child-PC7763" "SSN N/A (2031) != false or null. SSN (2030) should not have a value."
* #PC7764 "Parent Child-PC7764" "Episode Percutaneous Coronary Intervention Indicator (13011) != true and Discharge Status (10105) != Alive and Discharge Location (10110) != Discharged/transferred to an Extended care/TCU/rehab or Home or Other Discharge Location or Skilled Nursing facility and Hospice Care (10115) != No. Discharge Medication Reconciliation Completed (10220) should not have a value."
* #PC7765 "Parent Child-PC7765" "Episode Percutaneous Coronary Intervention Indicator (13011) != true. Hospice Care (10115) should not have a value."
* #PC7766 "Parent Child-PC7766" "Episode Percutaneous Coronary Intervention Indicator (13011) != true. Peripheral Arterial Disease (4610) should not have a value."
* #PC7767 "Parent Child-PC7767" "Episode Percutaneous Coronary Intervention Indicator (13011) != true. Chronic Lung Disease (4576) should not have a value."
* #PC7768 "Parent Child-PC7768" "Episode Percutaneous Coronary Intervention Indicator (13011) != true. Cerebrovascular Disease (4551) should not have a value."
* #PC7775 "Parent Child-PC7775" "Graft Vessel Adjunctive Measurements Obtained (7531) != Yes,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]. Adjunctive Measurement Graft Vessel Indicator (12632),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC7776 "Parent Child-PC7776" "Native Vessel Adjunctive Measurements Obtained (7511) != Yes,  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##]. Adjunctive Measurement Native Vessel Indicator (12633),  from Cath Lab Visit(s)[#]/Coronary Anatomy/[##] should not have a value."
* #PC7834 "Parent Child-PC7834" "Percutaneous Coronary Intervention (PCI) (7050) != Yes,  from Cath Lab Visit(s)[#]/Procedure Information. Hypothermia Induced (7806),  from Cath Lab Visit(s)[#]/PCI Procedure should not have a value."
* #PC8056 "Parent Child-PC8056" "Episode Percutaneous Coronary Intervention Indicator (13011) != true and Hospice Care (10115) != No and Discharge Location (10110) != Discharged/transferred to an Extended care/TCU/rehab or Home or Other Discharge Location or Skilled Nursing facility and Discharge Status (10105) != Alive. Discharge Medication Prescribed (10205),  from Discharge Medications (Prescribed at Discharge - Complete for each Episode of Care in which a PCI was attempted or performed)[#] should not have a value."
* #PC8057 "Parent Child-PC8057" "Episode Percutaneous Coronary Intervention Indicator (13011) != true and Discharge Status (10105) != Alive and Discharge Location (10110) != Home or Other Discharge Location or Skilled Nursing facility or Discharged/transferred to an Extended care/TCU/rehab and Hospice Care (10115) != No. Discharge Medication Code (10200),  from Discharge Medications (Prescribed at Discharge - Complete for each Episode of Care in which a PCI was attempted or performed)[#] should not have a value."
* #PC8230 "Parent Child-PC8230" "Prior Coronary Artery Bypass Graft (4515) = Yes. Missing value(s) for Graft Vessel with Stenosis >= 50% (7525),  from Cath Lab Visit(s)[#]/Coronary Anatomy."
* #PC8433 "Parent Child-PC8433" "Episode Percutaneous Coronary Intervention Indicator (13011) != true. Cause of Death (10125) should not have a value."
* #PC8434 "Parent Child-PC8434" "Episode Percutaneous Coronary Intervention Indicator (13011) != true. Death During the Procedure (10120) should not have a value."
* #PC8435 "Parent Child-PC8435" "Valvular Disease Regurgitation Type (7455) != null,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Valvular Disease Stenosis Type (7450),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC8436 "Parent Child-PC8436" "Valvular Disease Stenosis Type (7450) != null,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Valvular Disease Regurgitation Type (7455),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC8437 "Parent Child-PC8437" "Valvular Disease Regurgitation Type (7455) != not null,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Valvular Disease Regurgitation Severity (7456),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC8438 "Parent Child-PC8438" "Valvular Disease Stenosis Type (7450) != not null,  from Cath Lab Visit(s)[#]/Cath Lab Visit. Valvular Disease Stenosis Severity (7451),  from Cath Lab Visit(s)[#]/Cath Lab Visit should not have a value."
* #PC9843 "Parent Child-PC9843" "Episode Percutaneous Coronary Intervention Indicator (13011) != true. Smoking Amount (4627) should not have a value."
* #R4431 "Referential: Device Associated Lesion-R4431" "Intracoronary Device Associated Lesion (8030){instance} is referencing a value not present in {rlabel} ({rseqno}){rinstance}."
* #RG17798 "Registry Range-RG17798" "Discharge Date and Time (10101) must be between registry version start date and end date."
* #RG23555 "Registry Range-RG23555" "Follow-Up Assessment Date (11000) must be between registry version start date and end date."
* #RQ11075 "Report_Required-RQ11075" "First ECG Indicator(14203) must contain a value."
* #RQ2370 "Selection-RQ2370" "Participant ID(1000) must contain a value."
* #RQ2371 "Selection-RQ2371" "Participant Name(1010) must contain a value."
* #RQ2372 "Selection-RQ2372" "Time Frame of Data Submission(1020) must contain a value."
* #RQ2373 "Selection-RQ2373" "Transmission Number(1040) must contain a value."
* #RQ2374 "Selection-RQ2374" "Vendor Identifier(1050) must contain a value."
* #RQ2375 "Selection-RQ2375" "Vendor Software Version(1060) must contain a value."
* #RQ2376 "Selection-RQ2376" "Registry Identifier(1070) must contain a value."
* #RQ2377 "Outlier-RQ2377" "Last Name(2000) must contain a value."
* #RQ2378 "Outlier-RQ2378" "First Name(2010) must contain a value."
* #RQ2380 "Outlier-RQ2380" "SSN(2030) must contain a value."
* #RQ2381 "Outlier-RQ2381" "SSN N/A(2031) must contain a value."
* #RQ2382 "Selection-RQ2382" "Birth Date(2050) must contain a value."
* #RQ2385 "Outlier-RQ2385" "Zip Code N/A(2066) must contain a value."
* #RQ2391 "Outlier-RQ2391" "Hispanic or Latino Ethnicity(2076) must contain a value."
* #RQ2392 "Outlier-RQ2392" "Race - Asian Indian(2080) must contain a value."
* #RQ2393 "Outlier-RQ2393" "Race - Chinese(2081) must contain a value."
* #RQ2394 "Outlier-RQ2394" "Race - Filipino(2082) must contain a value."
* #RQ2395 "Outlier-RQ2395" "Race - Japanese(2083) must contain a value."
* #RQ2396 "Outlier-RQ2396" "Race - Korean(2084) must contain a value."
* #RQ2397 "Outlier-RQ2397" "Race - Vietnamese(2085) must contain a value."
* #RQ2398 "Outlier-RQ2398" "Race - Other Asian(2086) must contain a value."
* #RQ2399 "Outlier-RQ2399" "Race - Native Hawaiian(2090) must contain a value."
* #RQ2400 "Outlier-RQ2400" "Race - Guamanian or Chamorro(2091) must contain a value."
* #RQ2401 "Outlier-RQ2401" "Race - Samoan(2092) must contain a value."
* #RQ2402 "Outlier-RQ2402" "Race - Other Pacific Islander(2093) must contain a value."
* #RQ2403 "Outlier-RQ2403" "Hispanic Ethnicity Type - Mexican, Mexican-American, Chicano(2100) must contain a value."
* #RQ2404 "Outlier-RQ2404" "Hispanic Ethnicity Type - Puerto Rican(2101) must contain a value."
* #RQ2405 "Outlier-RQ2405" "Hispanic Ethnicity Type - Cuban(2102) must contain a value."
* #RQ2406 "Outlier-RQ2406" "Hispanic Ethnicity Type - Other Hispanic, Latino or Spanish Origin(2103) must contain a value."
* #RQ2408 "Outlier-RQ2408" "Health Insurance(3005) must contain a value."
* #RQ2409 "Outlier-RQ2409" "Health Insurance Payment Source(3010) must contain a value."
* #RQ2412 "Outlier-RQ2412" "Research Study Name(3025) must contain a value."
* #RQ2413 "Outlier-RQ2413" "Research Study Patient ID(3030) must contain a value."
* #RQ2414 "Outlier-RQ2414" "Prior Percutaneous Coronary Intervention(4495) must contain a value."
* #RQ2415 "Outlier-RQ2415" "Prior Coronary Artery Bypass Graft(4515) must contain a value."
* #RQ2416 "Outlier-RQ2416" "Diabetes Mellitus(4555) must contain a value."
* #RQ2417 "Outlier-RQ2417" "Currently on Dialysis(4560) must contain a value."
* #RQ2421 "Outlier-RQ2421" "Hemoglobin(6030) must contain a value."
* #RQ2422 "Outlier-RQ2422" "Hemoglobin Not Drawn(6031) must contain a value."
* #RQ2423 "Outlier-RQ2423" "Creatinine(6050) must contain a value."
* #RQ2424 "Outlier-RQ2424" "Creatinine Not Drawn(6051) must contain a value."
* #RQ2425 "Selection-RQ2425" "Procedure Start Date and Time(7000) must contain a value."
* #RQ2426 "Outlier-RQ2426" "Procedure End Date and Time(7005) must contain a value."
* #RQ2429 "Outlier-RQ2429" "Discharge Status(10105) must contain a value."
* #RQ2430 "Outlier-RQ2430" "Discharge Location(10110) must contain a value."
* #RQ2431 "Outlier-RQ2431" "Hospice Care(10115) must contain a value."
* #RQ2432 "Outlier-RQ2432" "Death During the Procedure(10120) must contain a value."
* #RQ2433 "Outlier-RQ2433" "Cause of Death(10125) must contain a value."
* #RQ2434 "Outlier-RQ2434" "Discharge Medication Code(10200) must contain a value."
* #RQ2435 "Outlier-RQ2435" "Discharge Medication Prescribed(10205) must contain a value."
* #RQ2436 "Selection-RQ2436" "Patient ID(2040) must contain a value."
* #RQ2437 "Outlier-RQ2437" "Hypertension(4615) must contain a value."
* #RQ2438 "Outlier-RQ2438" "Dyslipidemia(4620) must contain a value."
* #RQ2439 "Outlier-RQ2439" "Family History of Premature Coronary Artery Disease(4287) must contain a value."
* #RQ2440 "Outlier-RQ2440" "Peripheral Arterial Disease(4610) must contain a value."
* #RQ2441 "Outlier-RQ2441" "New York Heart Association Classification(4011) must contain a value."
* #RQ2442 "Outlier-RQ2442" "Coronary Artery Bypass Graft Date and Time(10011) must contain a value."
* #RQ2443 "Outlier-RQ2443" "High-density Lipoprotein(6105) must contain a value."
* #RQ2444 "Outlier-RQ2444" "Total Cholesterol(6100) must contain a value."
* #RQ2445 "Outlier-RQ2445" "Diagnostic Catheterization Operator First Name(7047) must contain a value."
* #RQ2446 "Outlier-RQ2446" "Diagnostic Catheterization Operator Middle Name(7048) must contain a value."
* #RQ2447 "Outlier-RQ2447" "Diagnostic Catheterization Operator Last Name(7046) must contain a value."
* #RQ2448 "Outlier-RQ2448" "PCI Operator Last Name(7051) must contain a value."
* #RQ2449 "Outlier-RQ2449" "PCI Operator First Name(7052) must contain a value."
* #RQ2450 "Outlier-RQ2450" "PCI Operator Middle Name(7053) must contain a value."
* #RQ2455 "Outlier-RQ2455" "Coronary Artery Perforation(9145) must contain a value."
* #RQ2457 "Outlier-RQ2457" "Packed Red Blood Cell Transfusion(9275) must contain a value."
* #RQ2458 "Outlier-RQ2458" "Cardiac CTA Performed(5220) must contain a value."
* #RQ2459 "Outlier-RQ2459" "Stress Test Date(5204) must contain a value."
* #RQ2460 "Outlier-RQ2460" "Electrocardiac Assessment Results(5032) must contain a value."
* #RQ2461 "Outlier-RQ2461" "New Antiarrhythmic Therapy Initiated Prior to Cath Lab(5033) must contain a value."
* #RQ2462 "Outlier-RQ2462" "Electrocardiac Abnormality Type(5034) must contain a value."
* #RQ2463 "Outlier-RQ2463" "Non-Sustained Ventricular Tachycardia Type(5036) must contain a value."
* #RQ2465 "Outlier-RQ2465" "Intra/Post-Procedure Events Occurred(9002) must contain a value."
* #RQ2466 "Outlier-RQ2466" "Intra/Post-Procedure Event Date and Time(9003) must contain a value."
* #RQ2467 "Outlier-RQ2467" "Prior Diagnostic Coronary Angiography Procedure without intervention(5263) must contain a value."
* #RQ2468 "Outlier-RQ2468" "Prior Diagnostic Coronary Angiography Procedure Date(5264) must contain a value."
* #RQ2469 "Outlier-RQ2469" "Prior Diagnostic Coronary Angiography Procedure Results(5265) must contain a value."
* #RQ2470 "Outlier-RQ2470" "Prior Diagnostic Coronary Angiography Procedure Results Unknown(5266) must contain a value."
* #RQ2471 "Outlier-RQ2471" "Agatston Calcium Score Date(5257) must contain a value."
* #RQ2472 "Outlier-RQ2472" "Cardiac CTA Results Unknown(5228) must contain a value."
* #RQ2473 "Outlier-RQ2473" "Cardiac CTA Date(5226) must contain a value."
* #RQ2474 "Outlier-RQ2474" "Heart Failure(4001) must contain a value."
* #RQ2475 "Outlier-RQ2475" "Heart Failure Type Unknown(4014) must contain a value."
* #RQ2480 "Outlier-RQ2480" "Cardiac Rehabilitation Referral(10116) must contain a value."
* #RQ2481 "Selection-RQ2481" "Lesion Counter(8000) must contain a value."
* #RQ2483 "Outlier-RQ2483" "Bifurcation Lesion(8022) must contain a value."
* #RQ2484 "Outlier-RQ2484" "Chronic Total Occlusion(8005) must contain a value."
* #RQ2485 "Outlier-RQ2485" "Culprit Stenosis(8002) must contain a value."
* #RQ2486 "Outlier-RQ2486" "Guidewire Across Lesion(8023) must contain a value."
* #RQ2487 "Outlier-RQ2487" "In-stent Restenosis(8011) must contain a value."
* #RQ2488 "Outlier-RQ2488" "In-stent Thrombosis(8012) must contain a value."
* #RQ2490 "Outlier-RQ2490" "Lesion In Graft(8015) must contain a value."
* #RQ2492 "Outlier-RQ2492" "Location in Graft(8017) must contain a value."
* #RQ2493 "Outlier-RQ2493" "Treated with Stent(8010) must contain a value."
* #RQ2494 "Outlier-RQ2494" "Stent Type(8013) must contain a value."
* #RQ2496 "Outlier-RQ2496" "Stenosis Immediately Prior to Treatment(8004) must contain a value."
* #RQ2497 "Outlier-RQ2497" "Previously Treated Lesion(8008) must contain a value."
* #RQ2499 "Outlier-RQ2499" "Percutaneous Coronary Intervention of the Left Main Coronary Artery(4501) must contain a value."
* #RQ2500 "Outlier-RQ2500" "Canadian Study of Health and Aging (CSHA) Clinical Frailty Scale(4561) must contain a value."
* #RQ2501 "Outlier-RQ2501" "Tobacco Use(4625) must contain a value."
* #RQ2502 "Outlier-RQ2502" "PreProcedure Medication Administered(6991) must contain a value."
* #RQ2503 "Outlier-RQ2503" "Agatston Calcium Score(5255) must contain a value."
* #RQ2504 "Outlier-RQ2504" "Cardiovascular Instability(7410) must contain a value."
* #RQ2506 "Outlier-RQ2506" "Pharmacologic Vasopressor Support(7421) must contain a value."
* #RQ2507 "Outlier-RQ2507" "Mechanical Ventricular Support(7422) must contain a value."
* #RQ2508 "Outlier-RQ2508" "Mechanical Ventricular Support Device(7423) must contain a value."
* #RQ2509 "Outlier-RQ2509" "Indications for Cath Lab Visit(7400) must contain a value."
* #RQ2510 "Outlier-RQ2510" "Percutaneous Coronary Intervention (PCI)(7050) must contain a value."
* #RQ2511 "Outlier-RQ2511" "Percutaneous Coronary Intervention Indication(7825) must contain a value."
* #RQ2512 "Outlier-RQ2512" "Acute Coronary Syndrome Symptom Date(7826) must contain a value."
* #RQ2513 "Outlier-RQ2513" "Acute Coronary Syndrome Symptom Time Unknown(7828) must contain a value."
* #RQ2514 "Outlier-RQ2514" "Cardiac Arrest Out of Healthcare Facility(4630) must contain a value."
* #RQ2515 "Outlier-RQ2515" "Cardiac Arrest Witnessed(4631) must contain a value."
* #RQ2516 "Outlier-RQ2516" "Cardiac Arrest After Arrival of Emergency Medical Services(4632) must contain a value."
* #RQ2517 "Outlier-RQ2517" "First Cardiac Arrest Rhythm(4633) must contain a value."
* #RQ2518 "Outlier-RQ2518" "Level of Consciousness (PCI Procedure)(7810) must contain a value."
* #RQ2519 "Outlier-RQ2519" "Hypothermia Induced(7806) must contain a value."
* #RQ2520 "Outlier-RQ2520" "Hypothermia Induced Timing(7807) must contain a value."
* #RQ2521 "Outlier-RQ2521" "Valvular Disease Stenosis Type(7450) must contain a value."
* #RQ2523 "Outlier-RQ2523" "Surgical Risk(7468) must contain a value."
* #RQ2524 "Outlier-RQ2524" "Arterial Access Site(7320) must contain a value."
* #RQ2525 "Outlier-RQ2525" "Arterial Cross Over(7325) must contain a value."
* #RQ2526 "Outlier-RQ2526" "Venous Access(7335) must contain a value."
* #RQ2527 "Outlier-RQ2527" "Arterial Access Closure Method(7331) must contain a value."
* #RQ2528 "Outlier-RQ2528" "Closure Method Not Documented(7332) must contain a value."
* #RQ2529 "Selection-RQ2529" "Closure Device Counter(7330) must contain a value."
* #RQ2530 "Outlier-RQ2530" "STEMI or STEMI Equivalent First Noted(7835) must contain a value."
* #RQ2531 "Outlier-RQ2531" "Subsequent ECG with STEMI or STEMI Equivalent Date and Time(7836) must contain a value."
* #RQ2532 "Outlier-RQ2532" "First Device Activation Date and Time(7845) must contain a value."
* #RQ2533 "Outlier-RQ2533" "Patient Transferred In for Immediate PCI for STEMI(7841) must contain a value."
* #RQ2534 "Outlier-RQ2534" "Emergency Department Presentation at Referring Facility Date and Time(7842) must contain a value."
* #RQ2535 "Outlier-RQ2535" "Patient Centered Reason for Delay in PCI Reason(7851) must contain a value."
* #RQ2536 "Outlier-RQ2536" "Acute Coronary Syndrome Symptom Time(7827) must contain a value."
* #RQ2537 "Outlier-RQ2537" "Prior Myocardial Infarction(4291) must contain a value."
* #RQ2547 "Outlier-RQ2547" "Cardiac CTA Results(5227) must contain a value."
* #RQ2548 "Outlier-RQ2548" "Concomitant Procedures Performed(7065) must contain a value."
* #RQ2549 "Outlier-RQ2549" "LVEF Assessed (Pre-Procedure)(5111) must contain a value."
* #RQ2550 "Outlier-RQ2550" "LVEF % (Pre-Procedure)(5116) must contain a value."
* #RQ2551 "Outlier-RQ2551" "Chest Pain Symptom Assessment(7405) must contain a value."
* #RQ2552 "Outlier-RQ2552" "Mechanical Ventricular Support Timing(7424) must contain a value."
* #RQ2553 "Outlier-RQ2553" "Interventions this Hospitalization(10030) must contain a value."
* #RQ2554 "Outlier-RQ2554" "Intervention Type this Hospitalization(10031) must contain a value."
* #RQ2555 "Outlier-RQ2555" "Comfort Measures Only(10075) must contain a value."
* #RQ2556 "Outlier-RQ2556" "CABG Status(10035) must contain a value."
* #RQ2557 "Outlier-RQ2557" "CABG Indication(10036) must contain a value."
* #RQ2564 "Outlier-RQ2564" "PostProcedure Troponin I (8515) must contain a value."
* #RQ2565 "Outlier-RQ2565" "PostProcedure Troponin I Not Drawn(8516) must contain a value."
* #RQ2566 "Outlier-RQ2566" "Troponin T (Pre-Procedure)(6095) must contain a value."
* #RQ2567 "Outlier-RQ2567" "Troponin T Not Drawn (Pre-Procedure)(6096) must contain a value."
* #RQ2568 "Outlier-RQ2568" "Troponin T (Post-Procedure)(8520) must contain a value."
* #RQ2569 "Outlier-RQ2569" "Troponin T Not Drawn (Post-Procedure)(8521) must contain a value."
* #RQ2570 "Outlier-RQ2570" "Creatinine(8510) must contain a value."
* #RQ2571 "Outlier-RQ2571" "Creatinine Not Drawn(8511) must contain a value."
* #RQ2572 "Outlier-RQ2572" "Hemoglobin(8505) must contain a value."
* #RQ2573 "Outlier-RQ2573" "Hemoglobin Not Drawn(8506) must contain a value."
* #RQ2574 "Outlier-RQ2574" "Total Cholesterol Not Drawn(6101) must contain a value."
* #RQ2575 "Outlier-RQ2575" "High-density Lipoprotein Not Drawn(6106) must contain a value."
* #RQ2576 "Outlier-RQ2576" "Hemoglobin(10065) must contain a value."
* #RQ2577 "Outlier-RQ2577" "Hemoglobin Not Drawn(10066) must contain a value."
* #RQ2578 "Outlier-RQ2578" "Creatinine(10060) must contain a value."
* #RQ2579 "Outlier-RQ2579" "Creatinine Not Drawn(10061) must contain a value."
* #RQ2580 "Outlier-RQ2580" "Coronary Circulation Dominance(7500) must contain a value."
* #RQ2581 "Outlier-RQ2581" "Native Vessel with Stenosis >= 50%(7505) must contain a value."
* #RQ2583 "Outlier-RQ2583" "Native Vessel Adjunctive Measurements Obtained(7511) must contain a value."
* #RQ2587 "Outlier-RQ2587" "Native Coronary Vessel Stenosis(7508) must contain a value."
* #RQ2588 "Outlier-RQ2588" "Graft Coronary Vessel Stenosis(7528) must contain a value."
* #RQ2589 "Outlier-RQ2589" "CABG Graft Vessel(7529) must contain a value."
* #RQ2590 "Outlier-RQ2590" "Native Lesion Segment Number(7507) must contain a value."
* #RQ2591 "Outlier-RQ2591" "PCI Status(7800) must contain a value."
* #RQ2592 "Outlier-RQ2592" "Subsequent ECG obtained in Emergency Department(7840) must contain a value."
* #RQ2593 "Outlier-RQ2593" "Patient Centered Reason for Delay in PCI(7850) must contain a value."
* #RQ2594 "Outlier-RQ2594" "Thrombolytics(7829) must contain a value."
* #RQ2595 "Outlier-RQ2595" "Thrombolytic Therapy Date and Time(7830) must contain a value."
* #RQ2596 "Outlier-RQ2596" "PCI for MultiVessel Disease(7820) must contain a value."
* #RQ2597 "Outlier-RQ2597" "Multi-vessel Procedure Type(7821) must contain a value."
* #RQ2598 "Outlier-RQ2598" "Previously Treated Lesion Date(8009) must contain a value."
* #RQ2599 "Outlier-RQ2599" "Type of CABG Graft(8016) must contain a value."
* #RQ2601 "Outlier-RQ2601" "Level of Consciousness (Discharge)(10117) must contain a value."
* #RQ2602 "Outlier-RQ2602" "Percutaneous Coronary Intervention of the Left Main Coronary Artery Unknown(4502) must contain a value."
* #RQ2603 "Outlier-RQ2603" "Agatston Calcium Score Assessed(5256) must contain a value."
* #RQ2604 "Outlier-RQ2604" "Diagnostic Left Heart Cath(7060) must contain a value."
* #RQ2605 "Outlier-RQ2605" "Concomitant Procedures Performed Type(7066) must contain a value."
* #RQ2606 "Outlier-RQ2606" "Patient Rationale for not taking medication(10206) must contain a value."
* #RQ2607 "Outlier-RQ2607" "Discharge Medication Reconciliation Completed(10220) must contain a value."
* #RQ2609 "Outlier-RQ2609" "Ventricular Support(7420) must contain a value."
* #RQ2610 "Outlier-RQ2610" "Solid Organ Transplant Surgery(7469) must contain a value."
* #RQ2611 "Outlier-RQ2611" "Solid Organ Transplant Donor(7470) must contain a value."
* #RQ2612 "Outlier-RQ2612" "Evaluation for Surgery Type(7465) must contain a value."
* #RQ2613 "Outlier-RQ2613" "Functional Capacity(7466) must contain a value."
* #RQ2614 "Outlier-RQ2614" "Solid Organ Transplant Type(7471) must contain a value."
* #RQ2615 "Outlier-RQ2615" "First Cardiac Arrest Rhythm Unknown(4634) must contain a value."
* #RQ2617 "Outlier-RQ2617" "Number of units of PRBCs transfused(9276) must contain a value."
* #RQ2618 "Outlier-RQ2618" "Transfusion PCI(9277) must contain a value."
* #RQ2619 "Outlier-RQ2619" "Transfusion Surgery(9278) must contain a value."
* #RQ2642 "Outlier-RQ2642" "Method to Determine Follow-Up Status(11003) must contain a value."
* #RQ2643 "Outlier-RQ2643" "Follow-Up Status(11004) must contain a value."
* #RQ2644 "Outlier-RQ2644" "Chest Pain Symptom Assessment(11005) must contain a value."
* #RQ2645 "Outlier-RQ2645" "Procedure Medications Administered(7995) must contain a value."
* #RQ2646 "Outlier-RQ2646" "Follow-Up Medications Prescribed(11995) must contain a value."
* #RQ2649 "Outlier-RQ2649" "Valvular Disease Regurgitation Type(7455) must contain a value."
* #RQ2650 "Outlier-RQ2650" "Valvular Disease Regurgitation Severity(7456) must contain a value."
* #RQ2653 "Outlier-RQ2653" "Discharge Medication Dose(10207) must contain a value."
* #RQ2654 "Selection-RQ2654" "Discharge Date and Time(10101) must contain a value."
* #RQ2655 "Outlier-RQ2655" "Cardiac Arrest at Transferring Healthcare Facility(4635) must contain a value."
* #RQ2656 "Outlier-RQ2656" "Cardiac Arrest at this Facility(7340) must contain a value."
* #RQ2657 "Outlier-RQ2657" "Navigate through Graft to Native Lesion(8018) must contain a value."
* #RQ2658 "Outlier-RQ2658" "Device Deployed(8024) must contain a value."
* #RQ2661 "Outlier-RQ2661" "Cerebrovascular Disease(4551) must contain a value."
* #RQ2662 "Outlier-RQ2662" "Chronic Lung Disease(4576) must contain a value."
* #RQ2663 "Outlier-RQ2663" "Systolic Blood Pressure(6016) must contain a value."
* #RQ2664 "Outlier-RQ2664" "PreProcedure Medication Code(6986) must contain a value."
* #RQ2665 "Outlier-RQ2665" "Diagnostic Coronary Angiography Procedure(7045) must contain a value."
* #RQ2667 "Outlier-RQ2667" "Graft Vessel Adjunctive Measurements Obtained(7531) must contain a value."
* #RQ2668 "Outlier-RQ2668" "Graft Vessel Instantaneous Wave-Free Ratio(7533) must contain a value."
* #RQ2669 "Outlier-RQ2669" "Graft Vessel Optical Coherence Tomography(7535) must contain a value."
* #RQ2670 "Outlier-RQ2670" "Graft Vessel Intravascular Ultrasonography(7534) must contain a value."
* #RQ2671 "Outlier-RQ2671" "Graft Vessel Fractional Flow Reserve Ratio(7532) must contain a value."
* #RQ2672 "Outlier-RQ2672" "Graft Lesion Segment Number(7527) must contain a value."
* #RQ2673 "Selection-RQ2673" "Arrival Date and Time(3001) must contain a value."
* #RQ2674 "Selection-RQ2674" "Intracoronary Device Counter(8027) must contain a value."
* #RQ2675 "Outlier-RQ2675" "CABG Graft Vessel Unknown(7530) must contain a value."
* #RQ2677 "Outlier-RQ2677" "Patient Enrolled in Research Study(11008) must contain a value."
* #RQ2678 "Outlier-RQ2678" "Research Study Name(11009) must contain a value."
* #RQ2679 "Outlier-RQ2679" "Research Study Patient ID(11010) must contain a value."
* #RQ2680 "Outlier-RQ2680" "Chronic Total Occlusion Unknown(8006) must contain a value."
* #RQ2681 "Outlier-RQ2681" "Culprit Stenosis Unknown(8003) must contain a value."
* #RQ2682 "Outlier-RQ2682" "Tobacco Type(4626) must contain a value."
* #RQ2684 "Outlier-RQ2684" "Decision for PCI with Surgical Consult(7815) must contain a value."
* #RQ2685 "Outlier-RQ2685" "Cardiovascular Treatment Decision(7816) must contain a value."
* #RQ2686 "Outlier-RQ2686" "PCI Procedure Medication Code(7990) must contain a value."
* #RQ2687 "Outlier-RQ2687" "Stent Type Unknown(8014) must contain a value."
* #RQ2689 "Outlier-RQ2689" "Follow-Up Date of Death(11006) must contain a value."
* #RQ2690 "Outlier-RQ2690" "Follow-Up Medications Code(11990) must contain a value."
* #RQ2691 "Outlier-RQ2691" "Follow-Up Medication Dose(11996) must contain a value."
* #RQ2694 "Outlier-RQ2694" "Follow-Up Events(11011) must contain a value."
* #RQ2695 "Outlier-RQ2695" "Follow-Up Events Occurred(11012) must contain a value."
* #RQ2696 "Outlier-RQ2696" "Follow-Up Event Dates(11014) must contain a value."
* #RQ2697 "Outlier-RQ2697" "Intracoronary Device Associated Lesion(8030) must contain a value."
* #RQ2698 "Outlier-RQ2698" "Follow-Up Devices Event Occurred In(11013) must contain a value."
* #RQ2699 "Outlier-RQ2699" "Functional Capacity Unknown(7467) must contain a value."
* #RQ2701 "Outlier-RQ2701" "Patient Restriction(3036) must contain a value."
* #RQ2703 "Outlier-RQ2703" "Stress Test Performed(5200) must contain a value."
* #RQ2704 "Outlier-RQ2704" "Stress Test Performed Type(5201) must contain a value."
* #RQ2710 "Outlier-RQ2710" "Heart Failure Newly Diagnosed(4012) must contain a value."
* #RQ2711 "Outlier-RQ2711" "Heart Failure Type(4013) must contain a value."
* #RQ2712 "Outlier-RQ2712" "Heart Rate(6011) must contain a value."
* #RQ2714 "Outlier-RQ2714" "Most Recent Percutaneous Coronary Intervention Date(4503) must contain a value."
* #RQ2715 "Outlier-RQ2715" "Most Recent Coronary Artery Bypass Graft Date(4521) must contain a value."
* #RQ2716 "Outlier-RQ2716" "Electrocardiac Assessment Method(5037) must contain a value."
* #RQ2717 "Outlier-RQ2717" "Transferred for CABG(10111) must contain a value."
* #RQ2718 "Outlier-RQ2718" "CABG Planned after Discharge(10112) must contain a value."
* #RQ2719 "Outlier-RQ2719" "Syntax Score(7831) must contain a value."
* #RQ2720 "Outlier-RQ2720" "Syntax Score Unknown(7832) must contain a value."
* #RQ3605 "Outlier-RQ3605" "Sex(2060) must contain a value."
* #RQ3606 "Outlier-RQ3606" "Race - White(2070) must contain a value."
* #RQ3607 "Outlier-RQ3607" "Race - Asian(2072) must contain a value."
* #RQ3608 "Outlier-RQ3608" "Race - American Indian/Alaskan Native(2073) must contain a value."
* #RQ3609 "Outlier-RQ3609" "Race - Native Hawaiian/Pacific Islander(2074) must contain a value."
* #RQ3618 "Outlier-RQ3618" "Cause of Death(11007) must contain a value."
* #RQ3621 "Outlier-RQ3621" "Race - Black/African American(2071) must contain a value."
* #RQ3623 "Outlier-RQ3623" "Significant Coronary Artery Dissection(9146) must contain a value."
* #RQ3649 "Outlier-RQ3649" "Smoking Amount(4627) must contain a value."
* #RQ3819 "Outlier-RQ3819" "Diagnostic Catheterization Operator NPI(7049) must contain a value."
* #RQ3820 "Outlier-RQ3820" "PCI Operator NPI(7054) must contain a value."
* #RQ4436 "Outlier-RQ4436" "Stress Test Risk/Extent of Ischemia(5203) must contain a value."
* #RQ4544 "Outlier-RQ4544" "Stress Test Results(5202) must contain a value."
* #RQ4545 "Selection-RQ4545" "Follow-Up Unique Key(10999) must contain a value."
* #RQ4546 "Selection-RQ4546" "Follow-Up Assessment Date(11000) must contain a value."
* #RQ4547 "Selection-RQ4547" "Follow-Up Reference Procedure Start Date and Time(11001) must contain a value."
* #RQ4548 "Selection-RQ4548" "Follow-Up Reference Episode Arrival Date and Time(11002) must contain a value."
* #RQ4549 "Selection-RQ4549" "Follow-Up Reference Episode Discharge Date and Time(11015) must contain a value."
* #RQ4609 "Outlier-RQ4609" "Native Lesion Segment Number(8001) must contain a value."
* #RQ7833 "Report_Required-RQ7833" "Cardiovascular Instability Type(7415) must contain a value."
* #RQ7906 "Report_Required-RQ7906" "Middle Name(2020) must contain a value."
* #RQ7907 "Report_Required-RQ7907" "Patient Zip Code(2065) must contain a value."
* #RQ7908 "Report_Required-RQ7908" "Admitting Provider Last Name(3050) must contain a value."
* #RQ7909 "Report_Required-RQ7909" "Admitting Provider First Name(3051) must contain a value."
* #RQ7910 "Report_Required-RQ7910" "Admitting Provider Middle Name(3052) must contain a value."
* #RQ7911 "Report_Required-RQ7911" "Admitting Provider NPI(3053) must contain a value."
* #RQ7912 "Report_Required-RQ7912" "Health Insurance Claim Number (HIC)(3015) must contain a value."
* #RQ7913 "Report_Required-RQ7913" "Patient Enrolled in Research Study(3020) must contain a value."
* #RQ7914 "Report_Required-RQ7914" "Attending Provider Last Name(3055) must contain a value."
* #RQ7915 "Report_Required-RQ7915" "Attending Provider First Name(3056) must contain a value."
* #RQ7916 "Report_Required-RQ7916" "Attending Provider Middle Name(3057) must contain a value."
* #RQ7917 "Report_Required-RQ7917" "Attending Provider NPI(3058) must contain a value."
* #RQ7918 "Report_Required-RQ7918" "Most Recent MI Date(4296) must contain a value."
* #RQ7919 "Report_Required-RQ7919" "Height(6000) must contain a value."
* #RQ7920 "Report_Required-RQ7920" "Weight(6005) must contain a value."
* #RQ7921 "Report_Required-RQ7921" "LVEF % (Diagnostic Left Heart Cath)(7061) must contain a value."
* #RQ7922 "Report_Required-RQ7922" "Fluoroscopy Time(7214) must contain a value."
* #RQ7923 "Report_Required-RQ7923" "Contrast Volume(7215) must contain a value."
* #RQ7924 "Report_Required-RQ7924" "Cumulative Air Kerma(7210) must contain a value."
* #RQ7925 "Report_Required-RQ7925" "Dose Area Product(7220) must contain a value."
* #RQ7937 "Report_Required-RQ7937" "PreProcedure Troponin I (6090) must contain a value."
* #RQ7938 "Report_Required-RQ7938" "PreProcedure Troponin I Not Drawn (6091) must contain a value."
* #RQ7939 "Report_Required-RQ7939" "Valvular Disease Stenosis Severity(7451) must contain a value."
* #RQ7940 "Report_Required-RQ7940" "Graft Vessel with Stenosis >= 50%(7525) must contain a value."
* #RQ7941 "Report_Required-RQ7941" "Native Vessel Fractional Flow Reserve Ratio(7512) must contain a value."
* #RQ7942 "Report_Required-RQ7942" "Native Vessel Instantaneous Wave-Free Ratio(7513) must contain a value."
* #RQ7943 "Report_Required-RQ7943" "Native Vessel Intravascular Ultrasonography(7514) must contain a value."
* #RQ7944 "Report_Required-RQ7944" "Native Vessel Optical Coherence Tomography(7515) must contain a value."
* #RQ7945 "Report_Required-RQ7945" "TIMI Flow (Pre-Intervention)(8007) must contain a value."
* #RQ7946 "Report_Required-RQ7946" "Lesion Complexity(8019) must contain a value."
* #RQ7947 "Report_Required-RQ7947" "Lesion Length(8020) must contain a value."
* #RQ7948 "Report_Required-RQ7948" "Severe Calcification(8021) must contain a value."
* #RQ7949 "Report_Required-RQ7949" "Stenosis (Post-Intervention)(8025) must contain a value."
* #RQ7950 "Report_Required-RQ7950" "TIMI Flow (Post-Intervention)(8026) must contain a value."
* #RQ7951 "Report_Required-RQ7951" "Intracoronary Device(s) Used(8028) must contain a value."
* #RQ7952 "Report_Required-RQ7952" "Intracoronary Device Diameter(8031) must contain a value."
* #RQ7953 "Report_Required-RQ7953" "Intra/Post-Procedure Events(9001) must contain a value."
* #RQ7954 "Report_Required-RQ7954" "Discharge Provider Last Name(10070) must contain a value."
* #RQ7955 "Report_Required-RQ7955" "Discharge Provider First Name(10071) must contain a value."
* #RQ7956 "Report_Required-RQ7956" "Discharge Provider Middle Name(10072) must contain a value."
* #RQ7957 "Report_Required-RQ7957" "Discharge Provider NPI(10073) must contain a value."
* #RQ7958 "Report_Required-RQ7958" "Discharge Medications Reconciled(10221) must contain a value."
* #RQ8144 "Report_Required-RQ8144" "Intracoronary Device Length(8032) must contain a value."
* #RX3484 "Regex-RX3484" "The value for Patient Zip Code(2065) does not match the expected format."
* #RX3485 "Length-RX3485" "The value for SSN(2030) does not match the expected format."
* #RX3637 "Regex-RX3637" "The value for Participant ID(1000) does not match the expected format."
* #SC4430 "Selection-SC4430" "CathLabVisitIndication self conflict: ACS <= 24h and ACS > 24h."
* #SC4832 "Selection-SC4832" "Cardiovascular Instability Type (7415){instance} has conflicting responses between {conflictVal}."
* #SC4833 "Selection-SC4833" "Cardiovascular Instability Type (7415){instance} has conflicting responses between {conflictVal}."
* #SC5080 "Self Conflict-SC5080" "CathLabVisitIndication self conflict: New Onset Angina and Worsening Angina."
* #SC5081 "Self Conflict-SC5081" "CathLabVisitIndication self conflict: Stable Known CAD and Suspected CAD."
* #UF6522 "Follow Up Uniqueness-UF6522" "Duplicate Follow-ups have been identified."
* #UQ3491 "Selection-UQ3491" "Duplicate Information has been provided for Valvular Disease Stenosis Type(7450)."
* #UQ3492 "Selection-UQ3492" "Duplicate Information has been provided for Valvular Disease Regurgitation Type(7455)."
* #UQ3707 "Selection-UQ3707" "Duplicate Information has been provided for Procedure Start Date and Time(7000)."
* #UQ4669 "Selection-UQ4669" "Duplicate information has been entered for Attending Operator Identification Number (1504)"
* #UQ4672 "Selection-UQ4672" "Duplicate Information has been provided for PCI Operator Identification Number(1506)."
* #UQ4676 "Selection-UQ4676" "Duplicate information has been entered for Attending Provider's NPI (3058)"
* #UQ4936 "Selection-UQ4936" "Duplicate Information has been provided for Native Lesion Segment Number(7507)."
* #UQ4937 "Selection-UQ4937" "Duplicate Information has been provided for Graft Lesion Segment Number(7527)."
* #UQ5066 "Selection-UQ5066" "Duplicate Information has been provided for Research Study Name(3025)."
* #UQ6856 "Uniqueness-UQ6856" "Duplicate Information has been provided for Stress Test Performed Type(5201)."
* #UQ8067 "Uniqueness-UQ8067" "Duplicate Information has been provided for Intra/Post-Procedure Events(9001)."
* #UQ8068 "Uniqueness-UQ8068" "Duplicate Information has been provided for Follow-Up Events(11011)."

ValueSet: NCDRErrorsVS
Id: NCDRErrorsVS
Title: "NCDRErrorsVS"
Description: "Validation errors from CathPCI submissions"
* ^experimental = true
* include codes from system NCDRValidationErrors

---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/NCDR-Answersets.fsh

ValueSet: SubmissionType
Id: SubmissionType
Title: "Submission Type"
Description: "Submission Type"
* ^experimental = true
* ncdr#1000142424
* ncdr#1000142425

ValueSet: NewYorkHeartAssociationAnswers
Title: "New York Heart Association OA Answer List"
Description: "NYHA Loinc AnsWerlist"
* ^experimental = true
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"

* $loinc#LA28408-5 "No objective evidence of cardiovascular disease"
* $loinc#LA28409-3 "Objective evidence of minimal cardiovascular disease"
* $loinc#LA28410-1 "Objective evidence of moderately severe cardiovascular disease"
* $loinc#LA28411-9 "Objective evidence of severe cardiovascular disease"

ValueSet: FirstCardiacArrestRhythm
Title: "First Cardiac Arrest Rhythm"
Description: "First Cardiac Arrest Rhythm"
* ^experimental = true
* ncdr#100013034
* ncdr#100013035

ValueSet: ElectrocardiacAssessmentResults
Title: "Electrocardiac Assessment Results"
Description: "Electrocardiac Assessment Results"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $sct#17621005
* $sct#263654008
* ncdr#1000142468

ValueSet: ElectrocardiacAbnormalityType
Id: ElectrocardiacAbnormalityType
Title: "Electrocardiac Abnormality Type"
Description: "Electrocardiac Abnormality Type"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $sct#71908006
* $sct#426525004
* $sct#444658006
* ncdr#1000142470
* $sct#59931005
* ncdr#100014019
* ncdr#1000142476
* ncdr#1000142477
* ncdr#1000142471
* ncdr#1000142472
* $sct#54016002
* $sct#28189009
* $sct#27885002
* ncdr#1000142473
* ncdr#10001424809
* ncdr#1000142474

ValueSet: NonSustainedVentricularTachycardiaType
Title: "Non-Sustained Ventricular Tachycardia Type"
Description: "Non-Sustained Ventricular Tachycardia Type"
* ^experimental = true
* ncdr#1000142351
* ncdr#10001424781
* ncdr#100000351

ValueSet: ElectrocardiacAssessmentMethod
Title: "Electrocardiac Assessment Method"
Description: "Electrocardiac Assessment Method"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $sct#164847006
* ncdr#10001424802
* $sct#86184003
* ncdr#10001424803
* ncdr#10001424804

ValueSet: StressTestResults
Id: StressTestResults
Title: "Stress Test Results"
Description: "Stress Test Results"
* ^experimental = true
* ncdr#100013083
* ncdr#100013093
* ncdr#100013094
* ncdr#100000646

ValueSet: StressTestRiskExtentofIschemia
Title: "Stress Test Risk/Extent of Ischemia"
Description: "Stress Test Risk/Extent of Ischemia"
* ^experimental = true
* ncdr#100013097
* ncdr#100000584
* ncdr#100013098
* ncdr#100000646

ValueSet: CardiacCTAResults
Id: CardiacCTAResults
Title: "Cardiac CTA Results"
Description: "Cardiac CTA Results"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* ncdr#10001424786
* ncdr#10001424787
* ncdr#100001262
* ncdr#10001424789
* $sct#128599005

ValueSet: PriorDiagnosticCoronaryAngiographyProcedureResults
Title: "Prior Diagnostic Coronary Angiography Procedure Results"
Description: "Prior Diagnostic Coronary Angiography Procedure Results"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* ncdr#10001424786
* ncdr#10001424787
* ncdr#100001262
* ncdr#10001424789
* $sct#128599005

ValueSet: ConcomitantProceduresPerformedType
Title: "Concomitant Procedures Performed Type"
Description: "Concomitant Procedures Performed Type"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $sct#197042001
* ncdr#100001273
* $sct#233032004
* ncdr#1000142393
* ncdr#112000000208
* $sct#441873006
* $sct#40403005
* $sct#252425004
* $sct#281556002
* $sct#33331003
* ncdr#1000142394
* $sct#241230009
* $sct#420013002
* ncdr#100001272
* ncdr#1000142392
* ncdr#10001424810
* $sct#250980009

ValueSet: ArterialAccessSite
Title: "Arterial Access Site"
Description: "Arterial Access Site"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $sct#7657000
* $sct#17137000
* $sct#45631007
* ncdr#100013029

ValueSet: CardiacValves
Title: "Cardiac Valves"
Description: "aortic valve, mitral valve, pulmonary valve and tricuspid valve"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $sct#34202007 "Aortic Valve"
* $sct#91134007 "Mitral Valve"
* $sct#39057004 "Pulmonary Valve"
* $sct#46030003 "Tricuspid Valve"

ValueSet: ValvularDiseaseStenosisSeverity
Title: "Valvular Disease Stenosis Severity"
Description: "Valvular Disease Stenosis Severity"
* ^experimental = true
* ncdr#112000000377
* ncdr#112000000378
* ncdr#112000000379

ValueSet: ValvularDiseaseRegurgitationSeverity
Title: "Valvular Disease Regurgitation Severity"
Description: "Valvular Disease Regurgitation Severity"
* ^experimental = true
* ncdr#112000000380
* ncdr#112000000381
* ncdr#1000142345
* ncdr#112000000382

ValueSet: LesionSegmentNumber
Title: "Lesion Segment Number"
Description: "Lesion Segment Number"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $sct#91083009 "1 - pRCA" 
* $sct#450960006 "2 - mRCA" 
* $sct#41879009 "3 - dRCA" 
* $sct#53655008 "4 - rPDA" 
* $sct#12800002 "5 - rPAV" 
* $sct#91761002 "6 - 1st RPL" 
* $sct#91762009 "7 - 2nd RPL" 
* $sct#91763004 "8 - 3rd RPL" 
* $sct#194142006 "9 - pDSP" 
* $sct#244258000 "10 - aMarg" 
* $sct#76862008 "11a - Ostial LM" 
* ncdr#1000142402 "11b-  Mid-LM" 
* ncdr#1000142403 "11c -  Distal LM" 
* $sct#68787002 "12 - pLAD" 
* $sct#91748002 "13 - mLAD" 
* $sct#36672000 "14 - dLAD" 
* $sct#91750005 "15 - 1st Diag" 
* ncdr#1000142404 "15a - Lat 1st Diag" 
* $sct#91751009 "16 - 2nd Diag" 
* ncdr#1000142405 "16a - Lat 2nd Diag" 
* $sct#244251006 "17 - LAD SP" 
* $sct#52433000 "18 - pCIRC" 
* $sct#91753007 "19 - mCIRC" 
* $sct#6511003 "19a - dCIRC" 
* $sct#91754001 "20 - 1st OM" 
* ncdr#1000142406 "20a - Lat 1st OM" 
* $sct#91755000 "21 - 2nd OM" 
* ncdr#1000142407 "21a - Lat 2nd OM" 
* $sct#91756004 "22 - 3rd OM" 
* ncdr#1000142408 "22a - Lat 3rd OM" 
* $sct#75902001 "23 - CIRC AV" 
* $sct#91757008 "24 - 1st LPL" 
* $sct#91758003 "25 - 2nd LPL" 
* $sct#91759006 "26 - 3rd LPL" 
* $sct#56322004 "27 - LPDA" 
* $sct#244252004 "28 - Ramus" 
* ncdr#1000142409 "28a - Lat Ramus" 
* $sct#91752002 "29 - 3rd Diag" 
* ncdr#1000142410 "29a - Lat 3rd Diag"

ValueSet: GraftVesselCABGVessel
Title: "Graft Vessel CABG Vessel"
Description: "Vessels used for the coronary artery bypass graft"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $sct#261402001
* $sct#261403006
* $sct#362072009
* $sct#181332001

ValueSet: PCIStatus
Title: "PCI Status Options"
Description: "The status of the PCI"
* ^experimental = true
* ncdr#100012987
* ncdr#100012988
* ncdr#100012989
* ncdr#100001290

ValueSet: HypothermiaInduced
Title: "Induced Hypothermia Codes"
Description: "All SNOMED codes about Induced Hypothermia"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #308693008

ValueSet: CardiovascularTreatmentDecision
Title: "Cardiovascular Treatment Decision Options"
Description: "Decision options for Cardiovascular Treatment consult"
* ^experimental = true
* ncdr#1000142368
* ncdr#1000142369
* ncdr#1000142370

ValueSet: MultivesselProcedureType
Title: "Multi-vessel Procedure Type"
Description: "Type of Multi-vessel Procedure Performed"
* ^experimental = true
* ncdr#10001424793
* ncdr#10001424794

ValueSet: PCIIndications
Title: "Percutaneous Coronary Intervention Indication"
Description: "Reasons the percutaneous coronary intervention PCI may be performed"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* ncdr#100000570
* ncdr#100012991
* ncdr#100000572
* ncdr#100000571
* ncdr#100000573
* ncdr#100000574
* $sct#233821000
* ncdr#100012990
* $sct#233819005
* ncdr#100012992
* ncdr#10001424795

ValueSet: SyntaxScore
Title: "Syntax Score for the PCI procedure"
Description: "Syntax Score options for the PCI procedure"
* ^experimental = true
* ncdr#10001424799
* ncdr#10001424798
* ncdr#10001424797

ValueSet: STEMIFirstNoted
Title: "STEMI or STEMI Equivalent First Noted"
Description: "ECG where STEMI or STEMI Equivalent First Noted"
* ^experimental = true
* ncdr#100000578
* ncdr#100000579

ValueSet: PatientCenteredReasonforDelay
Title: "Patient Centered Reason for Delay"
Description: "Patient Centered Reason for Delay in PCI Reason"
* ^experimental = true
* ncdr#100000881
* ncdr#100000350
* ncdr#100013001
* ncdr#100000349
* ncdr#1000142391
* ncdr#100000351

ValueSet: VentricularSupportDeviceType
Id: VentricularSupportDeviceType
Title: "Ventricular Support Device Type"
Description: "Specific Options for Ventricular Support Devices"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* ncdr#1000142428
* $sct#233573008
* ncdr#100014011
* ncdr#112000000188
* $sct#442807006
* $sct#232967006
* $sct#360065002
* ncdr#1000142429
* ncdr#100014010
* ncdr#112000001980

ValueSet: TIMIFlow
Title: "TIMI Flow"
Description: "TIMI (Thrombolysis in Myocardial Infarction) flow grades"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $sct#371867000
* $sct#371866009
* $sct#371864007
* $sct#371865008

ValueSet: StentType
Title: "CathPCI List of Stent Types"
Description: "Major Types of Stents used in CathPCI procedures"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $sct#464052002
* $sct#411191007
* $sct#705632009

ValueSet: CABGType
Title: "Coronary Artery Bypass Graft Type"
Description: "Major Types of CABG"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $sct#261402001
* $sct#181367001
* ncdr#100013029

ValueSet: LocationInGraft
Title: "Location in the CABG Graft"
Description: "Location in the CABG Graft"
* ^experimental = true
* ncdr#1000142355
* ncdr#1000142354
* ncdr#1000142353

ValueSet: LesionComplexity
Title: "Complexity of the Lesion"
Description: "ACC categories for complexity"
* ^experimental = true
* ncdr#100000583
* ncdr#100000584

ValueSet: IntraAndPostEvents
Title: "Cath PCI qualified list of Events"
Description: "Cath PCI qualified list of Events"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* ncdr#1000142440
* $sct#74474003
* $sct#417941003
* ncdr#1000142371
* $sct#95549001
* $sct#410429000
* $sct#89138009
* $sct#84114007
* $sct#22298006
* ncdr#100014076
* $sct#230706003
* $sct#422504002
* $sct#230713003
* $sct#385494008
* $sct#35304003
* ncdr#1000142419

ValueSet: InterventionTypes
Id: InterventionTypes
Title: "Intervention Types"
Description: "Intervention Types Listed at Discharge"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $sct#232717009
* ncdr#100014071
* ncdr#100014068
* ncdr#100014072
* ncdr#100014022
* $sct#252425004
* ncdr#10001424811

ValueSet: CABGStatus
Id: CABGStatus
Title: "CABG Status"
Description: "Coronary Artery Bypass Status"
* ^experimental = true
* ncdr#100001285
* ncdr#100001286
* ncdr#100001287
* ncdr#100001288

ValueSet: CABGIndication
Id: CABGIndication
Title: "CABG Indication"
Description: "ACC coronary artery bypass graft (CABG) Indications"
* ^experimental = true
* ncdr#100000712
* ncdr#100001291
* ncdr#100001292
* ncdr#100000709

ValueSet: CardiacRehabilitationReferral
Id: CardiacRehabilitationReferral
Title: "Cardiac Rehabilitation Referral"
Description: "Was Patient Referred for Cardiac Rehab"
* ^experimental = true
* ncdr#100013072
* ncdr#100014064
* ncdr#100014066
* ncdr#100014065

ValueSet: ChestPainSymptomAssessment
Id: ChestPainSymptomAssessment
Title: "Chest Pain Symptom Assessment"
Description: "Chest Pain Symptom Assessment Options"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $sct#429559004
* $sct#371807002
* ncdr#100001275
* ncdr#100000932

ValueSet: CardiacInstabilityType
Id: CardiacInstabilityType 
Title: "Cardiac Instability Type"
Description: "Cardiac Instability Type" 
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* ncdr#100014006
* $sct#422773005
* $sct#44103008
* $sct#89138009
* ncdr#100014007
* $sct#276227005

ValueSet: VentricularSupport
Id: VentricularSupport
Title: "VentricularSupport"
Description: "Forms Of Mechanical Support"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* ncdr#1000142428
* $sct#233573008
* ncdr#100014011
* ncdr#112000000188
* $sct#442807006
* $sct#232967006
* $sct#360065002
* ncdr#1000142429
* ncdr#100014010
* ncdr#112000001980


ValueSet: MechanicalVentricularSupportTiming
Id: MechanicalVentricularSupportTiming
Title: "Mechanical Ventricular Support Timing"
Description: "Mechanical Ventricular Support Timing"
* ^experimental = true
* ncdr#100001280
* ncdr#100001281
* ncdr#100013042

ValueSet: FunctionalCapacity
Id: FunctionalCapacity
Title: "Functional Capacity"
Description: "Functional Capacity in METS"
* ^experimental = true
* ncdr#100014023
* ncdr#100014025
* ncdr#100014024

ValueSet: SurgicalRisk
Id: SurgicalRisk
Title: "SurgicalRisk"
Description: "Surgeon Identified Risk"
* ^experimental = true
* ncdr#112000000375
* ncdr#112000000376
* ncdr#100014029
* ncdr#100014030

ValueSet: FamilyPrematureCAD
Id: FamilyPrematureCAD
Title: "Family History of Premature CAD"
Description: """All codes in SNOMED and LOINC indicating a family history of Premature Coronary Artery Disease
Where premature means under 55 if male and under 65 if female"""
* ^experimental = true
* ^copyright = """
* This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
* This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc
"""
* $sct#134439009
* $sct#275121006
* include codes from system $sct where concept is-a #266897007
* $loinc#80985-5

---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/OperationOutcome.fsh

Profile: CREDSOperationOutcome
Parent: OperationOutcome
Id: CREDSOperationOutcome
Title: "CREDSOperationOutcome"
Description: """The Profile for validation responses for CREDS submitted bundles.  
Each Operation Outcome begins with the Submission identifier as the first issue entry.  Each following issue element contains a single validation message
"""
* issue ^slicing.discriminator.type = #pattern
* issue ^slicing.discriminator.path = "code"
* issue ^slicing.rules = #closed
* issue ^slicing.ordered = true
* issue ^slicing.description = "Slice based on code"
* issue contains Submission 1..1 and Validation 1..*
    
* issue[Submission].severity = #information (exactly)
* issue[Submission].code = #informational (exactly)
* issue[Submission].details 0..0
* issue[Submission].diagnostics ^comment = "Record ID of the Bundle within the Submission"
* issue[Submission].location 0..0
* issue[Submission].expression 0..0

* issue[Validation].code = #processing (exactly)
* issue[Validation].details ^comment = "Custom error code from Registry indivating validation issue"
* issue[Validation].diagnostics ^comment = "Full text of the error reason"
* issue[Validation].location 0..0
* issue[Validation].expression 1..*

Instance: ACCCathPCIOutcome
InstanceOf: CREDSOperationOutcome
Usage: #example
Title: "ACCCathPCIOutcome"
Description: "Example feedback from a CathPCI Submission"
* issue[Submission].diagnostics = "CPCIExample"

* issue[Validation][+]
  * severity = #error
  * details = $accerror#RX3485
  * expression = "Demographics"
* issue[Validation][+]
  * severity = #error
  * details = $accerror#DL3487
  * expression = "Demographics"
* issue[Validation][+]
  * severity = #error
  * details = $accerror#PC2850
  * expression = "historyAndRiskFactors.priorPercutaneousCoronaryIntervention"
* issue[Validation][+]
  * severity = #error
  * details = $accerror#RQ2425
  * expression = "Procedure.dateAndTime"
* issue[Validation][+]
  * severity = #error
  * details = $accerror#CM2916
  * expression = "Procedure.diagnosticCoronaryAngiographyProcedure"


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/UploadOperation.fsh

Instance: RegistryUpload
InstanceOf: OperationDefinition
Usage: #definition
Title: "The Registry Upload of NDJSON data"
Description: """When the Registry periodic submission upload would exceed timeout limits or 
is requested as an [NDJSON](https://www.hl7.org/fhir/nd-json.html) file, use of this Upload operation is suggested.
 See the FHIR [Asynchronous API](https://www.hl7.org/fhir/async.html) for more details on asynchronous FHIR exchange.
"""
* name = "RegistryUpload"
* status = #active
* kind = http://hl7.org/fhir/operation-kind#operation
* code = #registryUpload
* resource = #Binary
* system = true
* type = false
* instance = false 
* parameter[0]
  * name = #input
  * use = #in
  * min = 1
  * max = "1"
  * type = #Binary
  * documentation = """The POST will be Binary resource consisting of the contentType element listing the mime type of
  application/fhir+ndjson and the data element consisting of a NDJSON file. Each line of the NDJSON file will comprising a 
  single patient Submission Bundle.
  The http POST will have: 
  1. the Prefer header set to respond-async and 
  2. the Accept header set to the application/fhir+ndjson format"""
* parameter[1]
  * name = #output
  * use = #out
  * min = 1
  * max = "1"
  * type = #OperationOutcome
  * documentation = """The optionally attached OperationOutcome will solely be the result of the validation that the submission file is a valid NDJSON file
  and will not have information regarding the content sumbitted.
  The result of a successful submission will be a 202 Accepted with the Content-Location pointing to a polling 
  location of the NDJSON file of OperationOutcomes. 
  Each OperationOutcome in the fetched NDJSON file will give the results of a validation exercise 
  for the individual lines within the submission file.
  """



---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/fsh/USCoreExamples.fsh

Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: RaceAndEthnicityCDC = urn:oid:2.16.840.1.113883.6.238
Alias: $v3-NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: SCT = http://snomed.info/sct

Instance: USCorePractitionerexample
InstanceOf: us-core-practitioner
Title: "Practitioner 1 Example"
Description: "This is a practitioner 1 example for the US Core Practitioner Profile"
Usage: #example
* identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* identifier[=].value = "9941339108"
* identifier[+].system = "http://www.acme.org/practitioners"
* identifier[=].value = "25456"
* name.family = "Bone"
* name.given = "Ronald"
* name.prefix = "Dr"
* address.use = #home
* address.line = "1003 Healthcare Drive"
* address.city = "Amherst"
* address.state = "MA"
* address.postalCode = "01002"

Instance: 261989c3-688c-4941-b767-d8d4c871217c
InstanceOf: us-core-patient
Title: "Patient Example"
Description: "This is a patient example for the US Core Patient Profile"
Usage: #example
* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
* meta.extension[=].valueString = "Patient Example"
* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
* meta.extension[=].valueMarkdown = "This is a patient example for the *US Core Patient Profile*."
* extension[0].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
* extension[=].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
* extension[=].extension[+].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#1002-5 "American Indian or Alaska Native"
* extension[=].extension[+].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2028-9 "Asian"
* extension[=].extension[+].url = "detailed"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#1586-7 "Shoshone"
* extension[=].extension[+].url = "detailed"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2036-2 "Filipino"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "Mixed"
* extension[+].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* extension[=].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2135-2 "Hispanic or Latino"
* extension[=].extension[+].url = "detailed"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2184-0 "Dominican"
* extension[=].extension[+].url = "detailed"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2148-5 "Mexican"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "Hispanic or Latino"
* extension[+].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex"
* extension[=].valueCode = #F
* identifier.use = #usual
* identifier.type = $v2-0203#MR "Medical Record Number"
* identifier.type.text = "Medical Record Number"
* identifier.system = "http://hospital.smarthealthit.org"
* identifier.value = "1032702"
* active = true
* name[0].use = #old
* name[=].family = "Shaw"
* name[=].given[0] = "Amy"
* name[=].given[+] = "V."
* name[=].period.start = "2016-12-06"
* name[=].period.end = "2020-07-22"
* name[+].family = "Baxter"
* name[=].given[0] = "Amy"
* name[=].given[+] = "V."
* name[=].suffix = "PharmD"
* name[=].period.start = "2020-07-22"
* telecom[0].system = #phone
* telecom[=].value = "555-555-5555"
* telecom[=].use = #home
* telecom[+].system = #email
* telecom[=].value = "amy.shaw@example.com"
* gender = #female
* birthDate = "1987-02-20"
* address[0].use = #old
* address[=].line = "49 Meadow St"
* address[=].city = "Mounds"
* address[=].state = "OK"
* address[=].postalCode = "74047"
* address[=].country = "US"
* address[=].period.start = "2016-12-06"
* address[=].period.end = "2020-07-22"
* address[+].line = "183 Mountain View St"
* address[=].city = "Mounds"
* address[=].state = "OK"
* address[=].postalCode = "74048"
* address[=].country = "US"
* address[=].period.start = "2020-07-22"

Instance: VeterinariansHospital
InstanceOf: us-core-organization
Title: "Veterinarian's Hospital"
Description: "Example of a US Core R4 Organization"
Usage:  #example

* active = true
* name = "Veterinarian's Hospital"

Instance: ExampleDischarge
InstanceOf: us-core-encounter
Title: "An Example Discharge Encounter"
Description: "Example of a US Core R4 Encounter"
Usage:  #example

* status = #finished
* class = $v3-ActCode#ACUTE
* type =  SCT#448337001 "Telemedicine consultation with patient"
* subject = Reference(261989c3-688c-4941-b767-d8d4c871217c)
* reasonCode = SCT#1917008 "Patient discharge, deceased, medicolegal case"

Instance: CREDSEncounter
InstanceOf: us-core-encounter
Title: "Example Encounter"
Description: "Example Encounter for use within the Example Notification Bundle"
Usage: #example

* status = #finished
* class = $v3-ActCode#AMB
* type = $cpt#99211
* subject = Reference(261989c3-688c-4941-b767-d8d4c871217c)
* participant.individual = Reference(USCorePractitionerexample)
* location.location = Reference(Enc-location)
* period.start = 2020-10-01T17:00:14-05:00
* period.end = 2020-10-01T18:00:14-05:00

Instance: Enc-location
InstanceOf: Location
Title: "Example Location"
Description: "Example Location for use within the Example Encounter"
Usage: #example
* status = #active
* name = "North Wing of Veterinarian's Hospital"
* managingOrganization = Reference(VeterinariansHospital)


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/ActorsAndTransactions.plantuml

/'
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
'/
@startuml
skinparam FolderBorderColor white
skinparam FolderFontColor white
skinparam Shadowing false
folder Actors {
agent "Registry Submission Definition Creator" as RSDC
agent "Registry Submission Definition Repository" as RSDR
agent "Registry Submitter" as RS
agent "Registry Submission Data Source" as RSDS
agent "Registry Submission Consumer" as RSC
RSDC -- RSDR : "Search / Retrieve Registry Definition [SRRD] ↓\nCreate / Update Registry Definition [CURD] ↓"
RSDR -- RS : "Search / Retrieve Registry Definition [SRRD] ↑"
RS -- RSDS : "Retrieve Registry Submission Data [RRSD] ↓"
RS -- RSC : "Create / Update Registry Submission [CURS] ↓\nValidate Registry Submission [VRS] ↓"
}
@enduml


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/datasources.plantuml

@startuml
rectangle "Treatment Data Sources" {
    rectangle "Care Management"
    rectangle "Clinical Data Repository"
    rectangle "EHR Systems" as EHR 
    rectangle "Departmental" as Dept {
        rectangle "Departmental Systems" as DS 
        rectangle "ED System" as ED 
        rectangle "Laboratory\nInformation System" as LIS
        LIS -up-> DS
        ED -up-> DS
        rectangle "Imaging" {
            rectangle "Radiology\nInformation Systems" as RIS 
            rectangle "PACS" as PACS 
            PACS -up- RIS
            RIS -up-> DS
        }
        rectangle "Labour and Delivery\nSystems" as LDS 
        rectangle "ICU Monitoring System" as ICU 
        LDS -up-> DS
        ICU -up-> DS 
        DS -up-> EHR
    }
}
@enduml 


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/journeymap.plantuml

@startuml
skinparam usecase {
backgroundColor DeepSkyBlue
BorderColor DarkSlateGray
ArrowColor Blue
}
scale 2/3
skinparam Note {
BackgroundColor LightBlue
BorderColor Blue
}

skinparam roundcorner 20

skinparam Participant {
FontName Arial
Style awesome
BorderColor DeepSkyBlue
BackgroundColor LightBlue
}
'actor "Registry Documenter" as RD 
'actor "Cath Team" as CT 
'actor "Registry Validator" as RV 

package "Add to Registry Worklist" {
usecase ORR as "Open Record, Review
==
Trigger: discharge event" 
    usecase fdemo as "Fill in Demographics"
}

package "Fetch Data: EHR"  as FDE {
    usecase fproc as "Fill in Procedure details"
}

package "Fetch Data: Other Sources" AS FDO {
    usecase "Review Need for\nAdditional History" as RNAH 
    note left : Connection to additional\ndata sources needed
    usecase "Access history electronically" as AHE
    usecase "Easily obtained history" as EOH 
    usecase "Access history creatively:\ndata sleuthing" as DS 
    usecase "Can't locate history, waiting" as NoHist
    
}

note left of FDE
If data exists in the EHR, retrieval can be relatively easy:
         extract data from EHR records and populate report
Challenges:
* Documenter may be unclear on meaning of clinical data
* Documenter may not know how/where to locate data 
endnote 

package "Complete/Review Record" AS CRR {
    usecase "Review Registry report" as RRR 
    usecase "Submit to Registry" as S2R 
}
note bottom of  CRR 
Challenges:
* Complexity of encounter and past patient history
* Event dates
* Data sleuthing: delays, quality concerns
endnote

package "Receive Data" {
    usecase "Receive data and evaluate" as RDE 
    usecase "Partial Data" as PD
}

package "Transform and Quality Check" AS TQC {
    usecase "Transform to Registry Format" as TRF
    usecase "Quality Check" as QC 
}
note bottom of TQC
Challenges:
* How to reduce quality deviation earlier in the process?
* Vendor adoption and business models
endnote

package "Accept Data" {
    usecase "Accept Data" as AD
}

ORR --> fdemo
fdemo --> fproc

fproc --> RNAH

RNAH --> AHE 
AHE --> EOH
RNAH --> DS 
DS <--> NoHist
EOH -->RRR 
NoHist -->RRR
RRR --> S2R

S2R -down-> RDE
S2R -down-> PD

PD -UP-> RNAH : Potential to address\nat Registry
RDE --> TRF
TRF --> QC
QC -UP-> RRR : Failed QC

QC --> AD

@enduml

---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/ndjsonflow.plantuml

@startuml
skinparam usecase {
backgroundColor DeepSkyBlue
BorderColor DarkSlateGray
ArrowColor Blue
}

skinparam Note {
BackgroundColor LightBlue
BorderColor Blue
}

skinparam roundcorner 20

skinparam Participant {
FontName Arial
Style awesome
BorderColor DeepSkyBlue
BackgroundColor LightBlue
}

Participant Submitter as Sub 
Participant Registry as Reg 

Sub --> Reg : Upload NDJSON file of records
Note over Sub
 POST https://www.example.org/fhir/$registryUpload?_format=application/fhir+ndjson HTTP/1.1
    Host:example.org
    Prefer: respond-async
    Accept: application/fhir+ndjson
    {
        "resourceType": "Binary",
        "id": "example",
        "contentType": "application/fhir-ndjson",
        "data": "[NDJSON File of CREDSBundles in base64 format]"
  }
end note

Reg --> Sub : 202 Accept
Note over Reg: Content-Location: https://www.registry.org/634aa4d0-47be-4485-90d0-5a11db28ab66.ndjson

Group Polling
Sub --> Reg : GET https://www.registry.org/634aa4d0-47be-4485-90d0-5a11db28ab66.ndjson
Reg --> Sub : 202 Accept
Note over Reg: Optionally an X-Progress header with a\ntext description of the status of the request that's\nless than 100 characters
end

Note across:  When processing complete 
Sub --> Reg : GET https://www.registry.org/634aa4d0-47be-4485-90d0-5a11db28ab66.ndjson
Reg --> Sub : 200 Success
Note over Reg : see https://www.hl7.org/fhir/async.html#3.1.6.4.0.4\nfor details of response 

@enduml



---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/simpleBoxDiagram.plantuml

@startuml simple box diagram 
partition "Registry Map Creator" {
    :Registry creates Mapping StructureDefinition;
    :Registry places Mapping StructureDefinition
     on FHIR Server;
}
partition "Registry Submitter" {
    :Submitter retrieves Mapping SD;
    :Submitter retrieves data according
     to Mapping SD from Data Sources;
    :Submitter places data into FHIR Bundle
     according to Mapping SD Output definitions;
    :Submitter posts FHIR Bundle to Registry;
}
partition "Registry Data Consumer" {
    :Accepts FHIR Bundle from Submitter;
    :Verifies data retrieved;
    :Ingests FHIR Bundle to registry DB;
}
@enduml

---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/transaction-CURD-seq.plantuml

/'
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
'/
@startuml
hide footbox
participant "Registry Submission Definition Creator" as RSDC
participant "Registry Submission Definition Repository" as RSDR
"RSDC" -> "RSDR" : 1. Create or Update Registry Submission Definition
activate "RSDC"
activate "RSDR"
"RSDR" --> "RSDC" : 2. Accept Resource
deactivate "RSDR"
@enduml


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/transaction-CURD-uc.plantuml

/'
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
'/
@startuml

agent "Registry Submission Definition Creator" as RSDC

agent "Registry Submission Definition Repository" as RSDR
usecase (Create / Update Registry Definition) as (CURD)
RSDC --> (CURD)
RSDR --> (CURD)
@enduml


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/transaction-CURS-seq.plantuml

/'
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
'/
@startuml
hide footbox
participant "Registry Submitter" as RS
participant "Registry Submission Consumer" as RSC
"RS" -> "RSC" : 1. 
activate "RS"
activate "RSC"
return
deactivate "RSC"
@enduml


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/transaction-CURS-uc.plantuml

/'
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
'/
@startuml

agent "Registry Submitter" as RS

agent "Registry Submission Consumer" as RSC
usecase (Create / Update Registry Submission) as (CURS)
RS --> (CURS)
RSC --> (CURS)
@enduml


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/transaction-RMCD-seq.plantuml

/'
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
'/
@startuml
hide footbox
participant "Registry Submitter" as RS
participant "Registry Submission Consumer" as RSC
"RS" -> "RSC" : 1. 
activate "RS"
activate "RSC"
return
deactivate "RSC"
@enduml


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/transaction-RMCD-uc.plantuml

/'
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
'/
@startuml

agent "Registry Submitter" as RS

agent "Registry Submission Consumer" as RSC
usecase (Request for Missing Data) as (RMCD)
RS --> (RMCD)
RSC --> (RMCD)
@enduml


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/transaction-RRSD-seq.plantuml

/'
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
'/
@startuml
hide footbox
participant "Registry Submitter" as RS
participant "Registry Submission Data Source" as RSDS
"RS" -> "RSDS" : 1. 
activate "RS"
activate "RSDS"
return
deactivate "RSDS"
@enduml


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/transaction-RRSD-uc.plantuml

/'
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
'/
@startuml

agent "Registry Submitter" as RS

agent "Registry Submission Data Source" as RSDS
usecase (Retrieve Registry Submission Data) as (RRSD)
RS --> (RRSD)
RSDS --> (RRSD)
@enduml


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/transaction-SRRD-seq.plantuml

/'
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
'/
@startuml
hide footbox
participant "Registry Submitter" as RS
participant "Registry Submission Definition Repository" as RSDR
participant "Registry Submission Definition Creator" as RSDC
"RS" -> "RSDR" : 1. Search Request
activate "RS"
activate "RSDR"
return
deactivate "RSDR"
"RSDC" -> "RSDR" : 2. Search Request
activate "RSDC"
activate "RSDR"
return
deactivate "RSDR"
@enduml


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/transaction-SRRD-uc.plantuml

/'
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
'/
@startuml

agent "Registry Submission Definition Creator" as RSDC

agent "Registry Submission Definition Repository" as RSDR

agent "Registry Submitter" as RS
usecase (Search / Retrieve Registry Definition) as (SRRD)
RSDC --> (SRRD)
RSDR --> (SRRD)
RS --> (SRRD)
@enduml


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/transaction-VRS-seq.plantuml

/'
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
'/
@startuml
hide footbox
participant "Registry Submitter" as RS
participant "Registry Submission Consumer" as RSC
"RS" -> "RSC" : 1. 
activate "RS"
activate "RSC"
return
deactivate "RSC"
@enduml


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/transaction-VRS-uc.plantuml

/'
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
'/
@startuml

agent "Registry Submitter" as RS

agent "Registry Submission Consumer" as RSC
usecase (Validate Registry Submission) as (VRS)
RS --> (VRS)
RSC --> (VRS)
@enduml


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/tree.plantuml

@startuml
skinparam usecase {
backgroundColor DeepSkyBlue
BorderColor DarkSlateGray
ArrowColor Blue
}

skinparam Note {
BackgroundColor LightBlue
BorderColor Blue
}

skinparam roundcorner 20

skinparam Component {
FontName Arial
Style awesome
BorderColor DeepSkyBlue
BackgroundColor LightBlue
}

[Encounter.participant]
[participant.firstName]
[participant.lastName]
[participant.NPI]
[Encounter.participant] --> [participant.firstName]
[Encounter.participant] --> [participant.lastName]
[Encounter.participant] --> [participant.NPI]
@enduml

---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/usecase-DefineSubmission-processflow.plantuml

@startuml
skinparam usecase {
backgroundColor DeepSkyBlue
BorderColor DarkSlateGray
ArrowColor Blue
}

skinparam Note {
BackgroundColor LightBlue
BorderColor Blue
}

skinparam roundcorner 20

skinparam Component {
FontName Arial
Style awesome
BorderColor DeepSkyBlue
BackgroundColor LightBlue
}
hide footbox
participant "Registry Authority [Registry Submission Definition Creator]" as RSDC
participant "Registry Definition Repository [Registry Submission Definition Repository]" as RSDR
"RSDC" -> "RSDR" : 1. Create submission definition artifacts for logical model.
activate "RSDC"
activate "RSDR"
return
deactivate "RSDC"
deactivate "RSDR"
"RSDC" -> "RSDR" : 2. Update submission definition artifacts for logical model.
activate "RSDC"
activate "RSDR"
return
deactivate "RSDC"
deactivate "RSDR"
"RSDC" -> "RSDR" : 3. Create submission definition transformation for logical model.
activate "RSDC"
activate "RSDR"
return
deactivate "RSDC"
deactivate "RSDR"
"RSDC" -> "RSDR" : 4. Update submission definition transformation for logical model.
activate "RSDC"
activate "RSDR"
return
deactivate "RSDC"
deactivate "RSDR"
@enduml


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/usecase-GetOrRefreshPatientData-processflow.plantuml


@startuml
skinparam usecase {
backgroundColor DeepSkyBlue
BorderColor DarkSlateGray
ArrowColor Blue
}

skinparam Note {
BackgroundColor LightBlue
BorderColor Blue
}

skinparam roundcorner 20

skinparam Component {
FontName Arial
Style awesome
BorderColor DeepSkyBlue
BackgroundColor LightBlue
}
hide footbox
participant "Registry Submitter [Registry Submitter]" as RS
participant "Registry Submission Data Source [Registry Submission Data Source]" as RSDS
"RS" -> "RS" : 1. Identify data sources to query for new, missing or stale data
activate "RS"
activate "RS"
deactivate "RS"
deactivate "RS"
"RS" -> "RSDS" : 2. Retrieve data from selected data sources
activate "RS"
activate "RSDS"
return
deactivate "RS"
deactivate "RSDS"
"RS" -> "RS" : 3. Extract essential data for submission from the selected data sources
activate "RS"
activate "RS"
deactivate "RS"
deactivate "RS"
"RS" -> "RS" : 4. Store essential data for later submission.
activate "RS"
activate "RS"
deactivate "RS"
deactivate "RS"
@enduml


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/usecase-GetPatientList-processflow.plantuml

/'
    This content is automatically generated from CREDS.xml by overview.xslt
'/
@startuml
hide footbox
skinparam usecase {
backgroundColor DeepSkyBlue
BorderColor DarkSlateGray
ArrowColor Blue
}

skinparam Note {
BackgroundColor LightBlue
BorderColor Blue
}

skinparam roundcorner 20

skinparam Component {
FontName Arial
Style awesome
BorderColor DeepSkyBlue
BackgroundColor LightBlue
}
participant "Registry Submission Definition Creator" as RSDC
participant "Registry Submitter" as RS
participant "Registry Submission Data Source" as RSDS

RS -> RSDC : 1. Read submission definition artifacts (logical model).
activate "RSDC"
activate "RS"
return
deactivate "RSDC"
deactivate "RS"
RS -> RSDS : 2. Search data repository for matching patients
activate "RSDS"
activate "RS"
return
deactivate "RSDS"
deactivate "RS"
@enduml


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/usecase-ReadSubmission-processflow.plantuml

/'
    This content is automatically generated from CREDS.xml by overview.xslt
'/
@startuml
hide footbox
skinparam usecase {
backgroundColor DeepSkyBlue
BorderColor DarkSlateGray
ArrowColor Blue
}

skinparam Note {
BackgroundColor LightBlue
BorderColor Blue
}

skinparam roundcorner 20

skinparam Component {
FontName Arial
Style awesome
BorderColor DeepSkyBlue
BackgroundColor LightBlue
}
participant "Registry Submission Definition Creator" as RSDC
participant "Registry Submitter [Registry Submitter]" as RS
"RSDC" -> "RS" : 1. Search submission definition artifacts in repository.
activate "RSDC"
activate "RS"
return
deactivate "RSDC"
deactivate "RS"
"RSDC" -> "RS" : 2. Read submission definition artifacts from repository.
activate "RSDC"
activate "RS"
return
deactivate "RSDC"
deactivate "RS"
@enduml


---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/images-source/workflow.plantuml

@startuml
skinparam activityDiagram  {
backgroundColor DeepSkyBlue
BorderColor DarkSlateGray
ArrowColor Blue
}

skinparam Note {
BackgroundColor LightBlue
BorderColor Blue
}

skinparam roundcorner 20

skinparam partition {
FontName Arial
Style awesome
BorderColor DeepSkyBlue
BackgroundColor LightBlue
}
:Fetch patient from\nRegistry worklist;
partition "Fetch FHIR data from\nthe data source" {
    repeat
    :Identify the\nData Source;
    :FHIR API request\nto get the data;
    repeat while (additional\nFHIR Data?)
}

partition "Fetch Non-FHIR data\nfrom other sources" {
    repeat
    :Identify the data source;
    :Use other methods\nto get the data;
    repeat while (additional\nNon-FHIR Data?)
}

partition "UI to Complete Review Data" {
    repeat
    :Capture additional data\navailable through automation;
    :Review and Sign the Record;
    repeat while (Additional\nFHIR Data?)
}

:Locally Aggregate and\nTransmit data to Registry;
@enduml

---

File: repos/HL7_SLASH_fhir-registry-protocols-ig/input/pagecontent/actors.md

<!--
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
-->

This section defines the actors in this implementation guide.

Figure 1.1-1 below shows the actors directly
involved in the CREDS
Profile and the relevant transactions between them.



<figure>
{% include ActorsAndTransactions.svg%}
<figcaption>Figure 3-1: CREDS Actor Diagram </figcaption>
</figure>
Table 3-1 lists the transactions for each actor directly involved in the CREDS Implementation Guide. To claim compliance with this guide, an actor shall
support all required transactions (labeled "R").


<table border="1" borderspacing="0" style='border: 1px solid black; border-collapse: collapse'>
<caption>
<b>
Table 3-1: CREDS Implementation Guide - Actors and Transactions
</b>
</caption>
<thead>
<tr class="odd" style='background: gray;'>
<th>Actors</th>
<th>Transactions</th>
<th>Optionality</th>
</tr>
</thead>
<tbody>
                
<tr>
                        
<td rowspan="2">
<a href="#registry-submission-definition-creator">Registry Submission Definition Creator</a>
</td>
                        
<td>
<a href='transaction-CURD.html'>
                        Create / Update Registry Definition [CURD]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
<tr>
                        
<td>
<a href='transaction-SRRD.html'>
                        Search / Retrieve Registry Definition [SRRD]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
<tr>
                        
<td rowspan="2">
<a href="#registry-submission-definition-repository">Registry Submission Definition Repository</a>
</td>
                        
<td>
<a href='transaction-CURD.html'>
                        Create / Update Registry Definition [CURD]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
<tr>
                        
<td>
<a href='transaction-SRRD.html'>
                        Search / Retrieve Registry Definition [SRRD]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
<tr>
                        
<td rowspan="4">
<a href="#registry-submitter">Registry Submitter</a>
</td>
                        
<td>
<a href='transaction-SRRD.html'>
                        Search / Retrieve Registry Definition [SRRD]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
<tr>
                        
<td>
<a href='transaction-RRSD.html'>
                        Retrieve Registry Submission Data [RRSD]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
<tr>
                        
<td>
<a href='transaction-CURS.html'>
                        Create / Update Registry Submission [CURS]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
<tr>
                        
<td>
<a href='transaction-VRS.html'>
                        Validate Registry Submission [VRS]</a>
</td>
<td align='center'>
                        O
</td>
</tr>
                    
<tr>
                        
<td rowspan="1">
<a href="#registry-submission-data-source">Registry Submission Data Source</a>
</td>
                        
<td>
<a href='transaction-RRSD.html'>
                        Retrieve Registry Submission Data [RRSD]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
<tr>
                        
<td rowspan="2">
<a href="#registry-submission-consumer">Registry Submission Consumer</a>
</td>
                        
<td>
<a href='transaction-CURS.html'>
                        Create / Update Registry Submission [CURS]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
<tr>
                        
<td>
<a href='transaction-VRS.html'>
                        Validate Registry Submission [VRS]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
</tbody>
</table>
        
        
### Actor Descriptions
The actors in this profile are described in more detail in the sections below.

#### Registry Submission Definition Creator


The
[Registry Submission Definition Creator](actors.html#registry-submission-definition-creator)
manages the definitional artifacts (logical model and transforms) supporting a clinical registry






##### Registry Submission Definition Creator Conformance

See the following CapabilityStatement resources for conformance requirements:
* [CapabilityStatement-RSDC](CapabilityStatement-RSDC.html) Defines the requirements for the Registry Submission Definition Creator.
#### Registry Submission Definition Repository


The Registry Submission Definition Repository holds the definitions for the registry submission logical model
and the tranformations data conforming to that logical model to the submission format.






##### Registry Submission Definition Repository Conformance

See the following CapabilityStatement resources for conformance requirements:
* [CapabilityStatement-RSDR](CapabilityStatement-RSDR.html) Defines the requirements for the Registry Submission Definition Repository.
#### Registry Submitter

The Registry Submitter is responsible for submitting data to a clinical registry.





##### Registry Submitter Conformance

See the following CapabilityStatement resources for conformance requirements:
* [CapabilityStatement-RS](CapabilityStatement-RS.html) Defines the requirements for the Registry Submitter.
#### Registry Submission Data Source


The Registry Submission Data Source makes clinical data available to a registry submitter so that it can be
submitted to a registry.






##### Registry Submission Data Source Conformance

See the following CapabilityStatement resources for conformance requirements:
#### Registry Submission Consumer


The Registry Submission Consumer accepts and validates registry submissions on behalf of a clinical registry.






##### Registry Submission Consumer Conformance

See the following CapabilityStatement resources for conformance requirements:

---

