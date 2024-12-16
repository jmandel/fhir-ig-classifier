File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CE to CodeableConcept.fsh

// HL7 Data Type - FHIR R4_ CE[CodeableConcept] - Sheet1.csv
Instance: DatatypeCEToCodeableConcept
InstanceOf: ConceptMap
Title: "Datatype CE to CodeableConcept Map"
* title = "Datatype CE to CodeableConcept Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CE to the FHIR CodeableConcept Data Type."
* id = "datatype-ce-to-codeableconcept"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-ce-to-codeableconcept"
* version = "1.0"
* name = "DatatypeCEToCodeableConcept"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CE"
* targetUri = "CodeableConcept"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CE to CodeableConcept.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1Wc_6Qyv_GP1dY33yMLX7435-J9QjLEdFg6u3EZF1tV0/edit#gid=0"
* group.element[0].code = #CE.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #coding[1].code
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"code"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "coding[1].code"
* group.element[1].code = #CE.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Text"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #coding[1].display
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "coding[1].display"
* group.element[2].code = #CE.3
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ID"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Name of Coding System"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #coding[1].system
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"uri"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "coding[1].system"
* group.element[2].target.comment = "This is only an indirect mapping in that the vocabulary table will give the actual uri."
* group.element[3].code = #CE.4
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ST"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Alternate Identifier"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #coding[2].code
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"code"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "coding[2].code"
* group.element[4].code = #CE.5
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"ST"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 0
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Alternate Text"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #coding[2].display
* group.element[4].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].target.extension[0].extension[0].url = "type"
* group.element[4].target.extension[0].extension[0].valueCode = #"string"
* group.element[4].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[4].target.extension[0].extension[1].valueInteger = 1
* group.element[4].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[4].target.extension[0].extension[2].valueInteger = 1
* group.element[4].target.display = "coding[2].display"
* group.element[5].code = #CE.6
* group.element[5].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].extension[0].extension[0].url = "type"
* group.element[5].extension[0].extension[0].valueCode = #"ID"
* group.element[5].extension[0].extension[1].url = "cardinalityMin"
* group.element[5].extension[0].extension[1].valueInteger = 0
* group.element[5].extension[0].extension[2].url = "cardinalityMax"
* group.element[5].extension[0].extension[2].valueInteger = 1
* group.element[5].display = "Name of Alternate Coding System"
* group.element[5].target.equivalence = #equivalent
* group.element[5].target.code = #coding[2].system
* group.element[5].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].target.extension[0].extension[0].url = "type"
* group.element[5].target.extension[0].extension[0].valueCode = #"uri"
* group.element[5].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[5].target.extension[0].extension[1].valueInteger = 1
* group.element[5].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[5].target.extension[0].extension[2].valueInteger = 1
* group.element[5].target.display = "coding[2].system"
* group.element[5].target.comment = "This is only an indirect mapping in that the vocabulary table will give the actual uri"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CF to CodeableConcept.fsh

// HL7 Data Type - FHIR R4_ CF[CodeableConcept] - Sheet1.csv
Instance: DatatypeCFToCodeableConcept
InstanceOf: ConceptMap
Title: "Datatype CF to CodeableConcept Map"
* title = "Datatype CF to CodeableConcept Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CF to the FHIR CodeableConcept Data Type."
* id = "datatype-cf-to-codeableconcept"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cf-to-codeableconcept"
* version = "1.0"
* name = "DatatypeCFToCodeableConcept"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CF"
* targetUri = "CodeableConcept"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CF to CodeableConcept.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/10noQAsbbgOydDvG2Kk6CiPddQYLfNev2uwufgiSsaoc/edit#gid=0"
* group.element[0].code = #CWE.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #coding[1].code
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"code"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "coding[1].code"
* group.element[1].code = #CWE.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"FT"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Text"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #coding[1].display
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "coding[1].display"
* group.element[2].code = #CWE.3
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ID"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Name of Coding System"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #coding[1].system
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"uri"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "coding[1].system"
* group.element[2].target.comment = "This is only an indirect mapping in that the vocabulary table will give the actual uri."
* group.element[3].code = #CWE.4
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ST"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Alternate Identifier"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #coding[2].code
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"code"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "coding[2].code"
* group.element[4].code = #CWE.5
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"FT"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 0
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Alternate Text"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #coding[2].display
* group.element[4].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].target.extension[0].extension[0].url = "type"
* group.element[4].target.extension[0].extension[0].valueCode = #"string"
* group.element[4].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[4].target.extension[0].extension[1].valueInteger = 1
* group.element[4].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[4].target.extension[0].extension[2].valueInteger = 1
* group.element[4].target.display = "coding[2].display"
* group.element[5].code = #CWE.6
* group.element[5].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].extension[0].extension[0].url = "type"
* group.element[5].extension[0].extension[0].valueCode = #"ID"
* group.element[5].extension[0].extension[1].url = "cardinalityMin"
* group.element[5].extension[0].extension[1].valueInteger = 0
* group.element[5].extension[0].extension[2].url = "cardinalityMax"
* group.element[5].extension[0].extension[2].valueInteger = 1
* group.element[5].display = "Name of Alternate Coding System"
* group.element[5].target.equivalence = #equivalent
* group.element[5].target.code = #coding[2].system
* group.element[5].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].target.extension[0].extension[0].url = "type"
* group.element[5].target.extension[0].extension[0].valueCode = #"uri"
* group.element[5].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[5].target.extension[0].extension[1].valueInteger = 1
* group.element[5].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[5].target.extension[0].extension[2].valueInteger = 1
* group.element[5].target.display = "coding[2].system"
* group.element[5].target.comment = "This is only an indirect mapping in that the vocabulary table will give the actual uri"
* group.element[6].code = #CWE.7
* group.element[6].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].extension[0].extension[0].url = "type"
* group.element[6].extension[0].extension[0].valueCode = #"ST"
* group.element[6].extension[0].extension[1].url = "cardinalityMin"
* group.element[6].extension[0].extension[1].valueInteger = 0
* group.element[6].extension[0].extension[2].url = "cardinalityMax"
* group.element[6].extension[0].extension[2].valueInteger = 1
* group.element[6].display = "Coding System Version ID"
* group.element[6].target.equivalence = #equivalent
* group.element[6].target.code = #coding[1].version
* group.element[6].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].target.extension[0].extension[0].url = "type"
* group.element[6].target.extension[0].extension[0].valueCode = #"string"
* group.element[6].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[6].target.extension[0].extension[1].valueInteger = 1
* group.element[6].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[6].target.extension[0].extension[2].valueInteger = 1
* group.element[6].target.display = "coding[1].version"
* group.element[7].code = #CWE.8
* group.element[7].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].extension[0].extension[0].url = "type"
* group.element[7].extension[0].extension[0].valueCode = #"ST"
* group.element[7].extension[0].extension[1].url = "cardinalityMin"
* group.element[7].extension[0].extension[1].valueInteger = 0
* group.element[7].extension[0].extension[2].url = "cardinalityMax"
* group.element[7].extension[0].extension[2].valueInteger = 1
* group.element[7].display = "Alternate Coding System Version ID"
* group.element[7].target.equivalence = #equivalent
* group.element[7].target.code = #coding[2].version
* group.element[7].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].target.extension[0].extension[0].url = "type"
* group.element[7].target.extension[0].extension[0].valueCode = #"string"
* group.element[7].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[7].target.extension[0].extension[1].valueInteger = 1
* group.element[7].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[7].target.extension[0].extension[2].valueInteger = 1
* group.element[7].target.display = "coding[2].version"
* group.element[8].code = #CWE.9
* group.element[8].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].extension[0].extension[0].url = "type"
* group.element[8].extension[0].extension[0].valueCode = #"ST"
* group.element[8].extension[0].extension[1].url = "cardinalityMin"
* group.element[8].extension[0].extension[1].valueInteger = 0
* group.element[8].extension[0].extension[2].url = "cardinalityMax"
* group.element[8].extension[0].extension[2].valueInteger = 1
* group.element[8].display = "Original Text"
* group.element[8].target.equivalence = #equivalent
* group.element[8].target.code = #text
* group.element[8].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].target.extension[0].extension[0].url = "type"
* group.element[8].target.extension[0].extension[0].valueCode = #"string"
* group.element[8].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[8].target.extension[0].extension[1].valueInteger = 1
* group.element[8].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[8].target.extension[0].extension[2].valueInteger = 1
* group.element[8].target.display = "text"
* group.element[9].code = #CWE.10
* group.element[9].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[9].extension[0].extension[0].url = "type"
* group.element[9].extension[0].extension[0].valueCode = #"ST"
* group.element[9].extension[0].extension[1].url = "cardinalityMin"
* group.element[9].extension[0].extension[1].valueInteger = 0
* group.element[9].extension[0].extension[2].url = "cardinalityMax"
* group.element[9].extension[0].extension[2].valueInteger = 1
* group.element[9].display = "Second Alternate Identifier"
* group.element[9].target.equivalence = #equivalent
* group.element[9].target.code = #coding[3].code
* group.element[9].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[9].target.extension[0].extension[0].url = "type"
* group.element[9].target.extension[0].extension[0].valueCode = #"code"
* group.element[9].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[9].target.extension[0].extension[1].valueInteger = 1
* group.element[9].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[9].target.extension[0].extension[2].valueInteger = 1
* group.element[9].target.display = "coding[3].code"
* group.element[10].code = #CWE.11
* group.element[10].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[10].extension[0].extension[0].url = "type"
* group.element[10].extension[0].extension[0].valueCode = #"FT"
* group.element[10].extension[0].extension[1].url = "cardinalityMin"
* group.element[10].extension[0].extension[1].valueInteger = 0
* group.element[10].extension[0].extension[2].url = "cardinalityMax"
* group.element[10].extension[0].extension[2].valueInteger = 1
* group.element[10].display = "Second Alternate Text"
* group.element[10].target.equivalence = #equivalent
* group.element[10].target.code = #coding[3].display
* group.element[10].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[10].target.extension[0].extension[0].url = "type"
* group.element[10].target.extension[0].extension[0].valueCode = #"string"
* group.element[10].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[10].target.extension[0].extension[1].valueInteger = 1
* group.element[10].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[10].target.extension[0].extension[2].valueInteger = 1
* group.element[10].target.display = "coding[3].display"
* group.element[11].code = #CWE.12
* group.element[11].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[11].extension[0].extension[0].url = "type"
* group.element[11].extension[0].extension[0].valueCode = #"ID"
* group.element[11].extension[0].extension[1].url = "cardinalityMin"
* group.element[11].extension[0].extension[1].valueInteger = 0
* group.element[11].extension[0].extension[2].url = "cardinalityMax"
* group.element[11].extension[0].extension[2].valueInteger = 1
* group.element[11].display = "Name of Second Alternate Coding System"
* group.element[11].target.equivalence = #equivalent
* group.element[11].target.code = #coding[3].system
* group.element[11].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[11].target.extension[0].extension[0].url = "type"
* group.element[11].target.extension[0].extension[0].valueCode = #"uri"
* group.element[11].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[11].target.extension[0].extension[1].valueInteger = 1
* group.element[11].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[11].target.extension[0].extension[2].valueInteger = 1
* group.element[11].target.display = "coding[3].system"
* group.element[12].code = #CWE.13
* group.element[12].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[12].extension[0].extension[0].url = "type"
* group.element[12].extension[0].extension[0].valueCode = #"ST"
* group.element[12].extension[0].extension[1].url = "cardinalityMin"
* group.element[12].extension[0].extension[1].valueInteger = 0
* group.element[12].extension[0].extension[2].url = "cardinalityMax"
* group.element[12].extension[0].extension[2].valueInteger = 1
* group.element[12].display = "Second Alternate Coding System Version ID"
* group.element[12].target.equivalence = #equivalent
* group.element[12].target.code = #coding[3].version
* group.element[12].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[12].target.extension[0].extension[0].url = "type"
* group.element[12].target.extension[0].extension[0].valueCode = #"string"
* group.element[12].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[12].target.extension[0].extension[1].valueInteger = 1
* group.element[12].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[12].target.extension[0].extension[2].valueInteger = 1
* group.element[12].target.display = "coding[3].version"
* group.element[12].target.comment = "This is only an indirect mapping in that the vocabulary table will give the actual uri."


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CNE to CodeableConcept.fsh

// HL7 Data Type - FHIR R4_ CNE[CodeableConcept] - Sheet1.csv
Instance: DatatypeCNEToCodeableConcept
InstanceOf: ConceptMap
Title: "Datatype CNE to CodeableConcept Map"
* title = "Datatype CNE to CodeableConcept Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CNE to the FHIR CodeableConcept Data Type."
* id = "datatype-cne-to-codeableconcept"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cne-to-codeableconcept"
* version = "1.0"
* name = "DatatypeCNEToCodeableConcept"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CNE"
* targetUri = "CodeableConcept"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CNE to CodeableConcept.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1N7hrAWsVEsXG4kYonykU2gQXbnfla8GVlwyLKzHX0ww/edit#gid=0"
* group.element[0].code = #CNE.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #coding[1].code
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"code"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "coding[1].code"
* group.element[1].code = #CNE.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Text"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #coding[1].display
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "coding[1].display"
* group.element[2].code = #CNE.3
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ID"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Name of Coding System"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #coding[1].system
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"uri"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "coding[1].system"
* group.element[2].target.comment = "This is only an indirect mapping in that the vocabulary table will give the actual uri."
* group.element[3].code = #CNE.4
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ST"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Alternate Identifier"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #coding[2].code
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"code"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "coding[2].code"
* group.element[4].code = #CNE.5
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"ST"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 0
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Alternate Text"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #coding[2].display
* group.element[4].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].target.extension[0].extension[0].url = "type"
* group.element[4].target.extension[0].extension[0].valueCode = #"string"
* group.element[4].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[4].target.extension[0].extension[1].valueInteger = 1
* group.element[4].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[4].target.extension[0].extension[2].valueInteger = 1
* group.element[4].target.display = "coding[2].display"
* group.element[5].code = #CNE.6
* group.element[5].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].extension[0].extension[0].url = "type"
* group.element[5].extension[0].extension[0].valueCode = #"ID"
* group.element[5].extension[0].extension[1].url = "cardinalityMin"
* group.element[5].extension[0].extension[1].valueInteger = 0
* group.element[5].extension[0].extension[2].url = "cardinalityMax"
* group.element[5].extension[0].extension[2].valueInteger = 1
* group.element[5].display = "Name of Alternate Coding System"
* group.element[5].target.equivalence = #equivalent
* group.element[5].target.code = #coding[2].system
* group.element[5].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].target.extension[0].extension[0].url = "type"
* group.element[5].target.extension[0].extension[0].valueCode = #"uri"
* group.element[5].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[5].target.extension[0].extension[1].valueInteger = 1
* group.element[5].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[5].target.extension[0].extension[2].valueInteger = 1
* group.element[5].target.display = "coding[2].system"
* group.element[5].target.comment = "This is only an indirect mapping in that the vocabulary table will give the actual uri"
* group.element[6].code = #CNE.7
* group.element[6].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].extension[0].extension[0].url = "type"
* group.element[6].extension[0].extension[0].valueCode = #"ST"
* group.element[6].extension[0].extension[1].url = "cardinalityMin"
* group.element[6].extension[0].extension[1].valueInteger = 0
* group.element[6].extension[0].extension[2].url = "cardinalityMax"
* group.element[6].extension[0].extension[2].valueInteger = 1
* group.element[6].display = "Coding System Version ID"
* group.element[6].target.equivalence = #equivalent
* group.element[6].target.code = #coding[1].version
* group.element[6].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].target.extension[0].extension[0].url = "type"
* group.element[6].target.extension[0].extension[0].valueCode = #"string"
* group.element[6].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[6].target.extension[0].extension[1].valueInteger = 1
* group.element[6].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[6].target.extension[0].extension[2].valueInteger = 1
* group.element[6].target.display = "coding[1].version"
* group.element[7].code = #CNE.8
* group.element[7].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].extension[0].extension[0].url = "type"
* group.element[7].extension[0].extension[0].valueCode = #"ST"
* group.element[7].extension[0].extension[1].url = "cardinalityMin"
* group.element[7].extension[0].extension[1].valueInteger = 0
* group.element[7].extension[0].extension[2].url = "cardinalityMax"
* group.element[7].extension[0].extension[2].valueInteger = 1
* group.element[7].display = "Alternate Coding System Version ID"
* group.element[7].target.equivalence = #equivalent
* group.element[7].target.code = #coding[2].version
* group.element[7].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].target.extension[0].extension[0].url = "type"
* group.element[7].target.extension[0].extension[0].valueCode = #"string"
* group.element[7].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[7].target.extension[0].extension[1].valueInteger = 1
* group.element[7].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[7].target.extension[0].extension[2].valueInteger = 1
* group.element[7].target.display = "coding[2].version"
* group.element[8].code = #CNE.9
* group.element[8].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].extension[0].extension[0].url = "type"
* group.element[8].extension[0].extension[0].valueCode = #"ST"
* group.element[8].extension[0].extension[1].url = "cardinalityMin"
* group.element[8].extension[0].extension[1].valueInteger = 0
* group.element[8].extension[0].extension[2].url = "cardinalityMax"
* group.element[8].extension[0].extension[2].valueInteger = 1
* group.element[8].display = "Original Text"
* group.element[8].target.equivalence = #equivalent
* group.element[8].target.code = #text
* group.element[8].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].target.extension[0].extension[0].url = "type"
* group.element[8].target.extension[0].extension[0].valueCode = #"string"
* group.element[8].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[8].target.extension[0].extension[1].valueInteger = 1
* group.element[8].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[8].target.extension[0].extension[2].valueInteger = 1
* group.element[8].target.display = "text"
* group.element[9].code = #CNE.10
* group.element[9].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[9].extension[0].extension[0].url = "type"
* group.element[9].extension[0].extension[0].valueCode = #"ST"
* group.element[9].extension[0].extension[1].url = "cardinalityMin"
* group.element[9].extension[0].extension[1].valueInteger = 0
* group.element[9].extension[0].extension[2].url = "cardinalityMax"
* group.element[9].extension[0].extension[2].valueInteger = 1
* group.element[9].display = "Second Alternate Identifier"
* group.element[9].target.equivalence = #equivalent
* group.element[9].target.code = #coding[3].code
* group.element[9].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[9].target.extension[0].extension[0].url = "type"
* group.element[9].target.extension[0].extension[0].valueCode = #"code"
* group.element[9].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[9].target.extension[0].extension[1].valueInteger = 1
* group.element[9].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[9].target.extension[0].extension[2].valueInteger = 1
* group.element[9].target.display = "coding[3].code"
* group.element[10].code = #CNE.11
* group.element[10].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[10].extension[0].extension[0].url = "type"
* group.element[10].extension[0].extension[0].valueCode = #"ST"
* group.element[10].extension[0].extension[1].url = "cardinalityMin"
* group.element[10].extension[0].extension[1].valueInteger = 0
* group.element[10].extension[0].extension[2].url = "cardinalityMax"
* group.element[10].extension[0].extension[2].valueInteger = 1
* group.element[10].display = "Second Alternate Text"
* group.element[10].target.equivalence = #equivalent
* group.element[10].target.code = #coding[3].display
* group.element[10].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[10].target.extension[0].extension[0].url = "type"
* group.element[10].target.extension[0].extension[0].valueCode = #"string"
* group.element[10].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[10].target.extension[0].extension[1].valueInteger = 1
* group.element[10].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[10].target.extension[0].extension[2].valueInteger = 1
* group.element[10].target.display = "coding[3].display"
* group.element[11].code = #CNE.12
* group.element[11].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[11].extension[0].extension[0].url = "type"
* group.element[11].extension[0].extension[0].valueCode = #"ID"
* group.element[11].extension[0].extension[1].url = "cardinalityMin"
* group.element[11].extension[0].extension[1].valueInteger = 0
* group.element[11].extension[0].extension[2].url = "cardinalityMax"
* group.element[11].extension[0].extension[2].valueInteger = 1
* group.element[11].display = "Name of Second Alternate Coding System"
* group.element[11].target.equivalence = #equivalent
* group.element[11].target.code = #coding[3].system
* group.element[11].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[11].target.extension[0].extension[0].url = "type"
* group.element[11].target.extension[0].extension[0].valueCode = #"uri"
* group.element[11].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[11].target.extension[0].extension[1].valueInteger = 1
* group.element[11].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[11].target.extension[0].extension[2].valueInteger = 1
* group.element[11].target.display = "coding[3].system"
* group.element[12].code = #CNE.13
* group.element[12].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[12].extension[0].extension[0].url = "type"
* group.element[12].extension[0].extension[0].valueCode = #"ST"
* group.element[12].extension[0].extension[1].url = "cardinalityMin"
* group.element[12].extension[0].extension[1].valueInteger = 0
* group.element[12].extension[0].extension[2].url = "cardinalityMax"
* group.element[12].extension[0].extension[2].valueInteger = 1
* group.element[12].display = "Second Alternate Coding System Version ID"
* group.element[12].target.equivalence = #equivalent
* group.element[12].target.code = #coding[3.version
* group.element[12].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[12].target.extension[0].extension[0].url = "type"
* group.element[12].target.extension[0].extension[0].valueCode = #"string"
* group.element[12].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[12].target.extension[0].extension[1].valueInteger = 1
* group.element[12].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[12].target.extension[0].extension[2].valueInteger = 1
* group.element[12].target.display = "coding[3.version"
* group.element[12].target.comment = "This is only an indirect mapping in that the vocabulary table will give the actual uri."


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CNN to Practitioner.fsh

// HL7 Data Type - FHIR R4_ CNN[Practitioner] - Sheet1.csv
Instance: DatatypeCNNToPractitioner
InstanceOf: ConceptMap
Title: "Datatype CNN to Practitioner Map"
* title = "Datatype CNN to Practitioner Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CNN to the FHIR Practitioner Resource."
* id = "datatype-cnn-to-practitioner"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cnn-to-practitioner"
* version = "1.0"
* name = "DatatypeCNNToPractitioner"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CNN"
* targetUri = "Practitioner"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CNN to Practitioner.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/10RIiHor6MGnmIBrj1tKkhW2kkrgvODeTjDpJAj3R40Q/edit#gid=0"
* group.element[0].code = #CNN.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "ID Number"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #identifier.value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "identifier.value"
* group.element[1].code = #CNN.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Family Name"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #name.family
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "name.family"
* group.element[2].code = #CNN.3
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ST"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Given Name"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #name.given[1]
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"string"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = -1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = -1
* group.element[2].target.display = "name.given[1]"
* group.element[3].code = #CNN.4
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ST"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Second and Further Given Names or Initials Thereof"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #name.given[2]
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"string"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = -1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = -1
* group.element[3].target.display = "name.given[2]"
* group.element[4].code = #CNN.5
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"ST"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 0
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Suffix (e.g., JR or III)"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #name.suffix[1]
* group.element[4].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].target.extension[0].extension[0].url = "type"
* group.element[4].target.extension[0].extension[0].valueCode = #"string"
* group.element[4].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[4].target.extension[0].extension[1].valueInteger = -1
* group.element[4].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[4].target.extension[0].extension[2].valueInteger = -1
* group.element[4].target.display = "name.suffix[1]"
* group.element[5].code = #CNN.6
* group.element[5].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].extension[0].extension[0].url = "type"
* group.element[5].extension[0].extension[0].valueCode = #"ST"
* group.element[5].extension[0].extension[1].url = "cardinalityMin"
* group.element[5].extension[0].extension[1].valueInteger = 0
* group.element[5].extension[0].extension[2].url = "cardinalityMax"
* group.element[5].extension[0].extension[2].valueInteger = 1
* group.element[5].display = "Prefix (e.g., DR)"
* group.element[5].target.equivalence = #equivalent
* group.element[5].target.code = #name.prefix
* group.element[5].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].target.extension[0].extension[0].url = "type"
* group.element[5].target.extension[0].extension[0].valueCode = #"string"
* group.element[5].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[5].target.extension[0].extension[1].valueInteger = -1
* group.element[5].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[5].target.extension[0].extension[2].valueInteger = -1
* group.element[5].target.display = "name.prefix"
* group.element[6].code = #CNN.7
* group.element[6].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].extension[0].extension[0].url = "type"
* group.element[6].extension[0].extension[0].valueCode = #"IS"
* group.element[6].extension[0].extension[1].url = "cardinalityMin"
* group.element[6].extension[0].extension[1].valueInteger = 0
* group.element[6].extension[0].extension[2].url = "cardinalityMax"
* group.element[6].extension[0].extension[2].valueInteger = 1
* group.element[6].display = "Degree (e.g., MD)"
* group.element[6].target.equivalence = #equivalent
* group.element[6].target.code = #name.suffix[2]
* group.element[6].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].target.extension[0].extension[0].url = "type"
* group.element[6].target.extension[0].extension[0].valueCode = #"string"
* group.element[6].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[6].target.extension[0].extension[1].valueInteger = -1
* group.element[6].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[6].target.extension[0].extension[2].valueInteger = -1
* group.element[6].target.display = "name.suffix[2]"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CQ to code.fsh

// HL7 Data Type - FHIR R4_ CQ[code] - Sheet1.csv
Instance: DatatypeCQToCode
InstanceOf: ConceptMap
Title: "Datatype CQ to code Map"
* title = "Datatype CQ to code Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CQ to the FHIR code Data Type."
* id = "datatype-cq-to-code"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cq-to-code"
* version = "1.0"
* name = "DatatypeCQToCode"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CQ"
* targetUri = "code"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CQ to code.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1BFNRs6fNoqFyXGmzfYB1-G3SGCMuHXuLAk0vXQyittQ/edit#gid=0"
* group.element[0].code = #CQ.2
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"CWE"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Units"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #$value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"code"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "$value"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CQ to decimal.fsh

// HL7 Data Type - FHIR R4_ CQ[decimal] - Sheet1.csv
Instance: DatatypeCQToDecimal
InstanceOf: ConceptMap
Title: "Datatype CQ to decimal Map"
* title = "Datatype CQ to decimal Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CQ to the FHIR decimal Data Type."
* id = "datatype-cq-to-decimal"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cq-to-decimal"
* version = "1.0"
* name = "DatatypeCQToDecimal"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CQ"
* targetUri = "decimal"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CQ to decimal.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/12vu2fD4SxfM1d8T-ifKbbbsCy-SMyWCyAcb0PRxBICU/edit#gid=0"
* group.element[0].code = #CQ.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"NM"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Quantity"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #$value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"decimal"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "$value"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CQ to Quantity.fsh

// HL7 Data Type - FHIR R4_ CQ[Quantity] - Sheet1.csv
Instance: DatatypeCQToQuantity
InstanceOf: ConceptMap
Title: "Datatype CQ to Quantity Map"
* title = "Datatype CQ to Quantity Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CQ to the FHIR Quantity Data Type."
* id = "datatype-cq-to-quantity"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cq-to-quantity"
* version = "1.0"
* name = "DatatypeCQToQuantity"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CQ"
* targetUri = "Quantity"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CQ to Quantity.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1Hb0fSXbCl6EUvwRSOjAz0TdYTvgphzcfkc6iQjGPLGo/edit#gid=0"
* group.element[0].code = #CQ.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"NM"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Quantity"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"decimal"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "value"
* group.element[1].code = #CQ.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"CWE"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Units"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #unit
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "unit"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CQ to unsignedInt.fsh

// HL7 Data Type - FHIR R4_ CQ[unsignedInt] - Sheet1.csv
Instance: DatatypeCQToUnsignedInt
InstanceOf: ConceptMap
Title: "Datatype CQ to unsignedInt Map"
* title = "Datatype CQ to unsignedInt Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CQ to the FHIR unsignedInt Data Type."
* id = "datatype-cq-to-unsignedint"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cq-to-unsignedint"
* version = "1.0"
* name = "DatatypeCQToUnsignedInt"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CQ"
* targetUri = "unsignedInt"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CQ to unsignedInt.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1vztiQ1Egc2E91ZVonjtUtB-aBsNq4jYOIFqqK6RnyHw/edit#gid=0"
* group.element[0].code = #CQ.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"NM"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Quantity"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #$value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"unsignedInt"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "$value"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CWE to Annotation.fsh

// HL7 Data Type - FHIR R4_ CWE[Annotation] - Sheet1.csv
Instance: DatatypeCWEToAnnotation
InstanceOf: ConceptMap
Title: "Datatype CWE to Annotation Map"
* title = "Datatype CWE to Annotation Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CWE to the FHIR Annotation Data Type."
* id = "datatype-cwe-to-annotation"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cwe-to-annotation"
* version = "1.0"
* name = "DatatypeCWEToAnnotation"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CWE"
* targetUri = "Annotation"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CWE to Annotation.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1iqys8nuFDvOmbxp5CQjvX6FbuqEmZygJaZyp9rShzqA/edit#gid=0"
* group.element[0].code = #CWE
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #text
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"markdown"
* group.element[0].target.display = "text"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CWE to code.fsh

// HL7 Data Type - FHIR R4_ CWE[code] - Sheet1.csv
Instance: DatatypeCWEToCode
InstanceOf: ConceptMap
Title: "Datatype CWE to code Map"
* title = "Datatype CWE to code Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CWE to the FHIR code Data Type."
* id = "datatype-cwe-to-code"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cwe-to-code"
* version = "1.0"
* name = "DatatypeCWEToCode"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CWE"
* targetUri = "code"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CWE to code.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1rpYMOlalOZCth8iaAF8Az7unnYuucYtz91jFhU0usKw/edit#gid=0"
* group.element[0].code = #CWE.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #$value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"code"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "$value"
* group.element[1].code = #CWE.4
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Alternate Identifier"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #$value
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"code"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "$value"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CWE to CodeableConcept.fsh

// HL7 Data Type - FHIR R4_ CWE[CodeableConcept] - Sheet1.csv
Instance: DatatypeCWEToCodeableConcept
InstanceOf: ConceptMap
Title: "Datatype CWE to CodeableConcept Map"
* title = "Datatype CWE to CodeableConcept Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CWE to the FHIR CodeableConcept Data Type."
* id = "datatype-cwe-to-codeableconcept"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cwe-to-codeableconcept"
* version = "1.0"
* name = "DatatypeCWEToCodeableConcept"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CWE"
* targetUri = "CodeableConcept"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CWE to CodeableConcept.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/11lVAfG6s5woVJf2_gy6fUiEM0xFtOAjgQJ_xJvkxfXo/edit#gid=0"
* group.element[0].code = #CWE.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #coding[1].code
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"code"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "coding[1].code"
* group.element[1].code = #CWE.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Text"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #coding[1].display
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "coding[1].display"
* group.element[2].code = #CWE.3
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ID"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Name of Coding System"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #coding[1].system
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"uri"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "coding[1].system"
* group.element[2].target.comment = "This is only an indirect mapping in that the vocabulary table will give the actual uri."
* group.element[3].code = #CWE.4
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ST"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Alternate Identifier"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #coding[2].code
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"code"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "coding[2].code"
* group.element[4].code = #CWE.5
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"ST"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 0
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Alternate Text"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #coding[2].display
* group.element[4].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].target.extension[0].extension[0].url = "type"
* group.element[4].target.extension[0].extension[0].valueCode = #"string"
* group.element[4].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[4].target.extension[0].extension[1].valueInteger = 1
* group.element[4].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[4].target.extension[0].extension[2].valueInteger = 1
* group.element[4].target.display = "coding[2].display"
* group.element[5].code = #CWE.6
* group.element[5].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].extension[0].extension[0].url = "type"
* group.element[5].extension[0].extension[0].valueCode = #"ID"
* group.element[5].extension[0].extension[1].url = "cardinalityMin"
* group.element[5].extension[0].extension[1].valueInteger = 0
* group.element[5].extension[0].extension[2].url = "cardinalityMax"
* group.element[5].extension[0].extension[2].valueInteger = 1
* group.element[5].display = "Name of Alternate Coding System"
* group.element[5].target.equivalence = #equivalent
* group.element[5].target.code = #coding[2].system
* group.element[5].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].target.extension[0].extension[0].url = "type"
* group.element[5].target.extension[0].extension[0].valueCode = #"uri"
* group.element[5].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[5].target.extension[0].extension[1].valueInteger = 1
* group.element[5].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[5].target.extension[0].extension[2].valueInteger = 1
* group.element[5].target.display = "coding[2].system"
* group.element[5].target.comment = "This is only an indirect mapping in that the vocabulary table will give the actual uri"
* group.element[6].code = #CWE.7
* group.element[6].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].extension[0].extension[0].url = "type"
* group.element[6].extension[0].extension[0].valueCode = #"ST"
* group.element[6].extension[0].extension[1].url = "cardinalityMin"
* group.element[6].extension[0].extension[1].valueInteger = 0
* group.element[6].extension[0].extension[2].url = "cardinalityMax"
* group.element[6].extension[0].extension[2].valueInteger = 1
* group.element[6].display = "Coding System Version ID"
* group.element[6].target.equivalence = #equivalent
* group.element[6].target.code = #coding[1].version
* group.element[6].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].target.extension[0].extension[0].url = "type"
* group.element[6].target.extension[0].extension[0].valueCode = #"string"
* group.element[6].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[6].target.extension[0].extension[1].valueInteger = 1
* group.element[6].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[6].target.extension[0].extension[2].valueInteger = 1
* group.element[6].target.display = "coding[1].version"
* group.element[7].code = #CWE.8
* group.element[7].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].extension[0].extension[0].url = "type"
* group.element[7].extension[0].extension[0].valueCode = #"ST"
* group.element[7].extension[0].extension[1].url = "cardinalityMin"
* group.element[7].extension[0].extension[1].valueInteger = 0
* group.element[7].extension[0].extension[2].url = "cardinalityMax"
* group.element[7].extension[0].extension[2].valueInteger = 1
* group.element[7].display = "Alternate Coding System Version ID"
* group.element[7].target.equivalence = #equivalent
* group.element[7].target.code = #coding[2].version
* group.element[7].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].target.extension[0].extension[0].url = "type"
* group.element[7].target.extension[0].extension[0].valueCode = #"string"
* group.element[7].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[7].target.extension[0].extension[1].valueInteger = 1
* group.element[7].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[7].target.extension[0].extension[2].valueInteger = 1
* group.element[7].target.display = "coding[2].version"
* group.element[8].code = #CWE.9
* group.element[8].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].extension[0].extension[0].url = "type"
* group.element[8].extension[0].extension[0].valueCode = #"ST"
* group.element[8].extension[0].extension[1].url = "cardinalityMin"
* group.element[8].extension[0].extension[1].valueInteger = 0
* group.element[8].extension[0].extension[2].url = "cardinalityMax"
* group.element[8].extension[0].extension[2].valueInteger = 1
* group.element[8].display = "Original Text"
* group.element[8].target.equivalence = #equivalent
* group.element[8].target.code = #text
* group.element[8].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].target.extension[0].extension[0].url = "type"
* group.element[8].target.extension[0].extension[0].valueCode = #"string"
* group.element[8].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[8].target.extension[0].extension[1].valueInteger = 1
* group.element[8].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[8].target.extension[0].extension[2].valueInteger = 1
* group.element[8].target.display = "text"
* group.element[9].code = #CWE.10
* group.element[9].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[9].extension[0].extension[0].url = "type"
* group.element[9].extension[0].extension[0].valueCode = #"ST"
* group.element[9].extension[0].extension[1].url = "cardinalityMin"
* group.element[9].extension[0].extension[1].valueInteger = 0
* group.element[9].extension[0].extension[2].url = "cardinalityMax"
* group.element[9].extension[0].extension[2].valueInteger = 1
* group.element[9].display = "Second Alternate Identifier"
* group.element[9].target.equivalence = #equivalent
* group.element[9].target.code = #coding[3].code
* group.element[9].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[9].target.extension[0].extension[0].url = "type"
* group.element[9].target.extension[0].extension[0].valueCode = #"code"
* group.element[9].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[9].target.extension[0].extension[1].valueInteger = 1
* group.element[9].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[9].target.extension[0].extension[2].valueInteger = 1
* group.element[9].target.display = "coding[3].code"
* group.element[10].code = #CWE.11
* group.element[10].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[10].extension[0].extension[0].url = "type"
* group.element[10].extension[0].extension[0].valueCode = #"ST"
* group.element[10].extension[0].extension[1].url = "cardinalityMin"
* group.element[10].extension[0].extension[1].valueInteger = 0
* group.element[10].extension[0].extension[2].url = "cardinalityMax"
* group.element[10].extension[0].extension[2].valueInteger = 1
* group.element[10].display = "Second Alternate Text"
* group.element[10].target.equivalence = #equivalent
* group.element[10].target.code = #coding[3].display
* group.element[10].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[10].target.extension[0].extension[0].url = "type"
* group.element[10].target.extension[0].extension[0].valueCode = #"string"
* group.element[10].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[10].target.extension[0].extension[1].valueInteger = 1
* group.element[10].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[10].target.extension[0].extension[2].valueInteger = 1
* group.element[10].target.display = "coding[3].display"
* group.element[11].code = #CWE.12
* group.element[11].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[11].extension[0].extension[0].url = "type"
* group.element[11].extension[0].extension[0].valueCode = #"ID"
* group.element[11].extension[0].extension[1].url = "cardinalityMin"
* group.element[11].extension[0].extension[1].valueInteger = 0
* group.element[11].extension[0].extension[2].url = "cardinalityMax"
* group.element[11].extension[0].extension[2].valueInteger = 1
* group.element[11].display = "Name of Second Alternate Coding System"
* group.element[11].target.equivalence = #equivalent
* group.element[11].target.code = #coding[3].system
* group.element[11].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[11].target.extension[0].extension[0].url = "type"
* group.element[11].target.extension[0].extension[0].valueCode = #"uri"
* group.element[11].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[11].target.extension[0].extension[1].valueInteger = 1
* group.element[11].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[11].target.extension[0].extension[2].valueInteger = 1
* group.element[11].target.display = "coding[3].system"
* group.element[12].code = #CWE.13
* group.element[12].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[12].extension[0].extension[0].url = "type"
* group.element[12].extension[0].extension[0].valueCode = #"ST"
* group.element[12].extension[0].extension[1].url = "cardinalityMin"
* group.element[12].extension[0].extension[1].valueInteger = 0
* group.element[12].extension[0].extension[2].url = "cardinalityMax"
* group.element[12].extension[0].extension[2].valueInteger = 1
* group.element[12].display = "Second Alternate Coding System Version ID"
* group.element[12].target.equivalence = #equivalent
* group.element[12].target.code = #coding[3].version
* group.element[12].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[12].target.extension[0].extension[0].url = "type"
* group.element[12].target.extension[0].extension[0].valueCode = #"string"
* group.element[12].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[12].target.extension[0].extension[1].valueInteger = 1
* group.element[12].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[12].target.extension[0].extension[2].valueInteger = 1
* group.element[12].target.display = "coding[3].version"
* group.element[12].target.comment = "This is only an indirect mapping in that the vocabulary table will give the actual uri."


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CWE to Coding.fsh

// HL7 Data Type - FHIR R4_ CWE[Coding] - Sheet1.csv
Instance: DatatypeCWEToCoding
InstanceOf: ConceptMap
Title: "Datatype CWE to Coding Map"
* title = "Datatype CWE to Coding Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CWE to the FHIR Coding Data Type."
* id = "datatype-cwe-to-coding"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cwe-to-coding"
* version = "1.0"
* name = "DatatypeCWEToCoding"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CWE"
* targetUri = "Coding"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CWE to Coding.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/16EsPaP--u_j82g6YeV81ZHcJdzk0EzNbNs_hTdkek_A/edit#gid=0"
* group.element[0].code = #CWE.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #code
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"code"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "code"
* group.element[1].code = #CWE.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Text"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #display
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "display"
* group.element[2].code = #CWE.3
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ID"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Name of Coding System"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #system
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"uri"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "system"
* group.element[2].target.comment = "This is only an indirect mapping in that the vocabulary table will give the actual uri."
* group.element[3].code = #CWE.7
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ST"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Coding System Version ID"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #version
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"string"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "version"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CWE to Device.fsh

// HL7 Data Type - FHIR R4_ CWE[Device] - Sheet1.csv
Instance: DatatypeCWEToDevice
InstanceOf: ConceptMap
Title: "Datatype CWE to Device Map"
* title = "Datatype CWE to Device Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CWE to the FHIR Device Resource."
* id = "datatype-cwe-to-device"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cwe-to-device"
* version = "1.0"
* name = "DatatypeCWEToDevice"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CWE"
* targetUri = "Device"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CWE to Device.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/13LJngzZ_t2CzddzgZu8MR1dbNJfyH9mWN1cRzRs7VIQ/edit#gid=0"
* group.element[0].code = #CWE.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #identifier[1].value
* group.element[0].target.display = "identifier[1].value"
* group.element[1].code = #CWE.1
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Identifier"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #definition(DeviceDefinition.identifier[1].value)
* group.element[1].target.display = "definition(DeviceDefinition.identifier[1].value)"
* group.element[2].code = #CWE.2
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ST"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Text"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #deviceName[1].name
* group.element[2].target.display = "deviceName[1].name"
* group.element[3].code = #CWE.2
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ST"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Text"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #deviceName[1].type
* group.element[3].target.display = "deviceName[1].type"
* group.element[4].code = #CWE.3
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"ID"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 0
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Name of Coding System"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #identifier[1].system
* group.element[4].target.display = "identifier[1].system"
* group.element[5].code = #CWE.3
* group.element[5].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].extension[0].extension[0].url = "type"
* group.element[5].extension[0].extension[0].valueCode = #"ID"
* group.element[5].extension[0].extension[1].url = "cardinalityMin"
* group.element[5].extension[0].extension[1].valueInteger = 0
* group.element[5].extension[0].extension[2].url = "cardinalityMax"
* group.element[5].extension[0].extension[2].valueInteger = 1
* group.element[5].display = "Name of Coding System"
* group.element[5].target.equivalence = #equivalent
* group.element[5].target.code = #definition(DeviceDefinition.identifier[1].system)
* group.element[5].target.display = "definition(DeviceDefinition.identifier[1].system)"
* group.element[6].code = #CWE.4
* group.element[6].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].extension[0].extension[0].url = "type"
* group.element[6].extension[0].extension[0].valueCode = #"ST"
* group.element[6].extension[0].extension[1].url = "cardinalityMin"
* group.element[6].extension[0].extension[1].valueInteger = 0
* group.element[6].extension[0].extension[2].url = "cardinalityMax"
* group.element[6].extension[0].extension[2].valueInteger = 1
* group.element[6].display = "Alternate Identifier"
* group.element[6].target.equivalence = #equivalent
* group.element[6].target.code = #identifier[2].value
* group.element[6].target.display = "identifier[2].value"
* group.element[7].code = #CWE.4
* group.element[7].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].extension[0].extension[0].url = "type"
* group.element[7].extension[0].extension[0].valueCode = #"ST"
* group.element[7].extension[0].extension[1].url = "cardinalityMin"
* group.element[7].extension[0].extension[1].valueInteger = 0
* group.element[7].extension[0].extension[2].url = "cardinalityMax"
* group.element[7].extension[0].extension[2].valueInteger = 1
* group.element[7].display = "Alternate Identifier"
* group.element[7].target.equivalence = #equivalent
* group.element[7].target.code = #definition(DeviceDefinition.identifier[2].value)
* group.element[7].target.display = "definition(DeviceDefinition.identifier[2].value)"
* group.element[8].code = #CWE.5
* group.element[8].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].extension[0].extension[0].url = "type"
* group.element[8].extension[0].extension[0].valueCode = #"ST"
* group.element[8].extension[0].extension[1].url = "cardinalityMin"
* group.element[8].extension[0].extension[1].valueInteger = 0
* group.element[8].extension[0].extension[2].url = "cardinalityMax"
* group.element[8].extension[0].extension[2].valueInteger = 1
* group.element[8].display = "Alternate Text"
* group.element[8].target.equivalence = #equivalent
* group.element[8].target.code = #deviceName[2].name
* group.element[8].target.display = "deviceName[2].name"
* group.element[9].code = #CWE.5
* group.element[9].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[9].extension[0].extension[0].url = "type"
* group.element[9].extension[0].extension[0].valueCode = #"ST"
* group.element[9].extension[0].extension[1].url = "cardinalityMin"
* group.element[9].extension[0].extension[1].valueInteger = 0
* group.element[9].extension[0].extension[2].url = "cardinalityMax"
* group.element[9].extension[0].extension[2].valueInteger = 1
* group.element[9].display = "Alternate Text"
* group.element[9].target.equivalence = #equivalent
* group.element[9].target.code = #deviceName[2].type
* group.element[9].target.display = "deviceName[2].type"
* group.element[10].code = #CWE.6
* group.element[10].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[10].extension[0].extension[0].url = "type"
* group.element[10].extension[0].extension[0].valueCode = #"ID"
* group.element[10].extension[0].extension[1].url = "cardinalityMin"
* group.element[10].extension[0].extension[1].valueInteger = 0
* group.element[10].extension[0].extension[2].url = "cardinalityMax"
* group.element[10].extension[0].extension[2].valueInteger = 1
* group.element[10].display = "Name of Alternate Coding System"
* group.element[10].target.equivalence = #equivalent
* group.element[10].target.code = #identifier[2].system
* group.element[10].target.display = "identifier[2].system"
* group.element[11].code = #CWE.6
* group.element[11].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[11].extension[0].extension[0].url = "type"
* group.element[11].extension[0].extension[0].valueCode = #"ID"
* group.element[11].extension[0].extension[1].url = "cardinalityMin"
* group.element[11].extension[0].extension[1].valueInteger = 0
* group.element[11].extension[0].extension[2].url = "cardinalityMax"
* group.element[11].extension[0].extension[2].valueInteger = 1
* group.element[11].display = "Name of Alternate Coding System"
* group.element[11].target.equivalence = #equivalent
* group.element[11].target.code = #definition(DeviceDefinition.identifier[2].system)
* group.element[11].target.display = "definition(DeviceDefinition.identifier[2].system)"
* group.element[12].code = #CWE.9
* group.element[12].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[12].extension[0].extension[0].url = "type"
* group.element[12].extension[0].extension[0].valueCode = #"ST"
* group.element[12].extension[0].extension[1].url = "cardinalityMin"
* group.element[12].extension[0].extension[1].valueInteger = 0
* group.element[12].extension[0].extension[2].url = "cardinalityMax"
* group.element[12].extension[0].extension[2].valueInteger = 1
* group.element[12].display = "Original Text"
* group.element[12].target.equivalence = #equivalent
* group.element[12].target.code = #deviceName[4].name
* group.element[12].target.display = "deviceName[4].name"
* group.element[13].code = #CWE.9
* group.element[13].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[13].extension[0].extension[0].url = "type"
* group.element[13].extension[0].extension[0].valueCode = #"ST"
* group.element[13].extension[0].extension[1].url = "cardinalityMin"
* group.element[13].extension[0].extension[1].valueInteger = 0
* group.element[13].extension[0].extension[2].url = "cardinalityMax"
* group.element[13].extension[0].extension[2].valueInteger = 1
* group.element[13].display = "Original Text"
* group.element[13].target.equivalence = #equivalent
* group.element[13].target.code = #deviceName[4].type
* group.element[13].target.display = "deviceName[4].type"
* group.element[14].code = #CWE.10
* group.element[14].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[14].extension[0].extension[0].url = "type"
* group.element[14].extension[0].extension[0].valueCode = #"ST"
* group.element[14].extension[0].extension[1].url = "cardinalityMin"
* group.element[14].extension[0].extension[1].valueInteger = 0
* group.element[14].extension[0].extension[2].url = "cardinalityMax"
* group.element[14].extension[0].extension[2].valueInteger = 1
* group.element[14].display = "Second Alternate Identifier"
* group.element[14].target.equivalence = #equivalent
* group.element[14].target.code = #identifier[3].value
* group.element[14].target.display = "identifier[3].value"
* group.element[15].code = #CWE.10
* group.element[15].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[15].extension[0].extension[0].url = "type"
* group.element[15].extension[0].extension[0].valueCode = #"ST"
* group.element[15].extension[0].extension[1].url = "cardinalityMin"
* group.element[15].extension[0].extension[1].valueInteger = 0
* group.element[15].extension[0].extension[2].url = "cardinalityMax"
* group.element[15].extension[0].extension[2].valueInteger = 1
* group.element[15].display = "Second Alternate Identifier"
* group.element[15].target.equivalence = #equivalent
* group.element[15].target.code = #definition(DeviceDefinition.identifier[3].value)
* group.element[15].target.display = "definition(DeviceDefinition.identifier[3].value)"
* group.element[16].code = #CWE.11
* group.element[16].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[16].extension[0].extension[0].url = "type"
* group.element[16].extension[0].extension[0].valueCode = #"ST"
* group.element[16].extension[0].extension[1].url = "cardinalityMin"
* group.element[16].extension[0].extension[1].valueInteger = 0
* group.element[16].extension[0].extension[2].url = "cardinalityMax"
* group.element[16].extension[0].extension[2].valueInteger = 1
* group.element[16].display = "Second Alternate Text"
* group.element[16].target.equivalence = #equivalent
* group.element[16].target.code = #deviceName[3].name
* group.element[16].target.display = "deviceName[3].name"
* group.element[17].code = #CWE.11
* group.element[17].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[17].extension[0].extension[0].url = "type"
* group.element[17].extension[0].extension[0].valueCode = #"ST"
* group.element[17].extension[0].extension[1].url = "cardinalityMin"
* group.element[17].extension[0].extension[1].valueInteger = 0
* group.element[17].extension[0].extension[2].url = "cardinalityMax"
* group.element[17].extension[0].extension[2].valueInteger = 1
* group.element[17].display = "Second Alternate Text"
* group.element[17].target.equivalence = #equivalent
* group.element[17].target.code = #deviceName[3].type
* group.element[17].target.display = "deviceName[3].type"
* group.element[18].code = #CWE.12
* group.element[18].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[18].extension[0].extension[0].url = "type"
* group.element[18].extension[0].extension[0].valueCode = #"ID"
* group.element[18].extension[0].extension[1].url = "cardinalityMin"
* group.element[18].extension[0].extension[1].valueInteger = 0
* group.element[18].extension[0].extension[2].url = "cardinalityMax"
* group.element[18].extension[0].extension[2].valueInteger = 1
* group.element[18].display = "Name of Second Alternate Coding System"
* group.element[18].target.equivalence = #equivalent
* group.element[18].target.code = #identifier[3].system
* group.element[18].target.display = "identifier[3].system"
* group.element[19].code = #CWE.12
* group.element[19].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[19].extension[0].extension[0].url = "type"
* group.element[19].extension[0].extension[0].valueCode = #"ID"
* group.element[19].extension[0].extension[1].url = "cardinalityMin"
* group.element[19].extension[0].extension[1].valueInteger = 0
* group.element[19].extension[0].extension[2].url = "cardinalityMax"
* group.element[19].extension[0].extension[2].valueInteger = 1
* group.element[19].display = "Name of Second Alternate Coding System"
* group.element[19].target.equivalence = #equivalent
* group.element[19].target.code = #definition(DeviceDefinition.identifier[3].system)
* group.element[19].target.display = "definition(DeviceDefinition.identifier[3].system)"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CWE to Duration.fsh

// HL7 Data Type - FHIR R4_ CWE[Duration] - Sheet1.csv
Instance: DatatypeCWEToDuration
InstanceOf: ConceptMap
Title: "Datatype CWE to Duration Map"
* title = "Datatype CWE to Duration Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CWE to the FHIR Duration Data Type."
* id = "datatype-cwe-to-duration"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cwe-to-duration"
* version = "1.0"
* name = "DatatypeCWEToDuration"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CWE"
* targetUri = "Duration"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CWE to Duration.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1ntf81Wves7hw4mvMMBYLqzR3La76-rtndbiz39IFnMU/edit#gid=0"
* group.element[0].code = #CWE.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #duration
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"code"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "duration"
* group.element[1].code = #CWE.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Text"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #duration
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"code"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "duration"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CWE to Identifier.fsh

// HL7 Data Type - FHIR R4_ CWE[Identifier] - Sheet1.csv
Instance: DatatypeCWEToIdentifier
InstanceOf: ConceptMap
Title: "Datatype CWE to Identifier Map"
* title = "Datatype CWE to Identifier Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CWE to the FHIR Identifier Data Type."
* id = "datatype-cwe-to-identifier"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cwe-to-identifier"
* version = "1.0"
* name = "DatatypeCWEToIdentifier"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CWE"
* targetUri = "Identifier"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CWE to Identifier.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1uMJal5GjmIC2nJcjd6m0kDY0o7iuOb9O3oSwTjpHtYs/edit#gid=0"
* group.element[0].code = #CWE.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #[1].value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "[1].value"
* group.element[1].code = #CWE.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Text"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #[1].name
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "[1].name"
* group.element[2].code = #CWE.3
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ID"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Name of Coding System"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #[1].system
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"uri"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "[1].system"
* group.element[2].target.comment = "Some mapping of the CWE.3 value to an actual uri will be necessary"
* group.element[3].code = #CWE.4
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ST"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Alternate Identifier"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #[2].value
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"string"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "[2].value"
* group.element[4].code = #CWE.5
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"ST"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 0
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Alternate Text"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #[2].name
* group.element[4].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].target.extension[0].extension[0].url = "type"
* group.element[4].target.extension[0].extension[0].valueCode = #"string"
* group.element[4].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[4].target.extension[0].extension[1].valueInteger = 1
* group.element[4].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[4].target.extension[0].extension[2].valueInteger = 1
* group.element[4].target.display = "[2].name"
* group.element[5].code = #CWE.6
* group.element[5].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].extension[0].extension[0].url = "type"
* group.element[5].extension[0].extension[0].valueCode = #"ID"
* group.element[5].extension[0].extension[1].url = "cardinalityMin"
* group.element[5].extension[0].extension[1].valueInteger = 0
* group.element[5].extension[0].extension[2].url = "cardinalityMax"
* group.element[5].extension[0].extension[2].valueInteger = 1
* group.element[5].display = "Name of Alternate Coding System"
* group.element[5].target.equivalence = #equivalent
* group.element[5].target.code = #[2].system
* group.element[5].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].target.extension[0].extension[0].url = "type"
* group.element[5].target.extension[0].extension[0].valueCode = #"uri"
* group.element[5].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[5].target.extension[0].extension[1].valueInteger = 1
* group.element[5].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[5].target.extension[0].extension[2].valueInteger = 1
* group.element[5].target.display = "[2].system"
* group.element[5].target.comment = "Some mapping of the CWE.3 value to an actual uri will be necessary"
* group.element[6].code = #CWE.10
* group.element[6].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].extension[0].extension[0].url = "type"
* group.element[6].extension[0].extension[0].valueCode = #"ST"
* group.element[6].extension[0].extension[1].url = "cardinalityMin"
* group.element[6].extension[0].extension[1].valueInteger = 0
* group.element[6].extension[0].extension[2].url = "cardinalityMax"
* group.element[6].extension[0].extension[2].valueInteger = 1
* group.element[6].display = "Second Alternate Identifier"
* group.element[6].target.equivalence = #equivalent
* group.element[6].target.code = #[3].value
* group.element[6].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].target.extension[0].extension[0].url = "type"
* group.element[6].target.extension[0].extension[0].valueCode = #"string"
* group.element[6].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[6].target.extension[0].extension[1].valueInteger = 1
* group.element[6].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[6].target.extension[0].extension[2].valueInteger = 1
* group.element[6].target.display = "[3].value"
* group.element[7].code = #CWE.11
* group.element[7].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].extension[0].extension[0].url = "type"
* group.element[7].extension[0].extension[0].valueCode = #"ST"
* group.element[7].extension[0].extension[1].url = "cardinalityMin"
* group.element[7].extension[0].extension[1].valueInteger = 0
* group.element[7].extension[0].extension[2].url = "cardinalityMax"
* group.element[7].extension[0].extension[2].valueInteger = 1
* group.element[7].display = "Second Alternate Text"
* group.element[7].target.equivalence = #equivalent
* group.element[7].target.code = #[3].name
* group.element[7].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].target.extension[0].extension[0].url = "type"
* group.element[7].target.extension[0].extension[0].valueCode = #"string"
* group.element[7].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[7].target.extension[0].extension[1].valueInteger = 1
* group.element[7].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[7].target.extension[0].extension[2].valueInteger = 1
* group.element[7].target.display = "[3].name"
* group.element[8].code = #CWE.13
* group.element[8].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].extension[0].extension[0].url = "type"
* group.element[8].extension[0].extension[0].valueCode = #"ST"
* group.element[8].extension[0].extension[1].url = "cardinalityMin"
* group.element[8].extension[0].extension[1].valueInteger = 0
* group.element[8].extension[0].extension[2].url = "cardinalityMax"
* group.element[8].extension[0].extension[2].valueInteger = 1
* group.element[8].display = "Second Alternate Coding System Version ID"
* group.element[8].target.equivalence = #equivalent
* group.element[8].target.code = #[3].system
* group.element[8].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].target.extension[0].extension[0].url = "type"
* group.element[8].target.extension[0].extension[0].valueCode = #"uri"
* group.element[8].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[8].target.extension[0].extension[1].valueInteger = 1
* group.element[8].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[8].target.extension[0].extension[2].valueInteger = 1
* group.element[8].target.display = "[3].system"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CWE to Organization.fsh

// HL7 Data Type - FHIR R4_ CWE[Organization] - Sheet1.csv
Instance: DatatypeCWEToOrganization
InstanceOf: ConceptMap
Title: "Datatype CWE to Organization Map"
* title = "Datatype CWE to Organization Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CWE to the FHIR Organization Resource."
* id = "datatype-cwe-to-organization"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cwe-to-organization"
* version = "1.0"
* name = "DatatypeCWEToOrganization"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CWE"
* targetUri = "Organization"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CWE to Organization.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1WA2er1u1qS9eHFuGDo_MDZstWxdyg_34YnlohIO2dBU/edit#gid=0"
* group.element[0].code = #CWE.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #identifier.value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "identifier.value"
* group.element[1].code = #CWE.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Text"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #name
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "name"
* group.element[2].code = #CWE.3
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ID"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Name of Coding System"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #identifier.system
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"uri"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "identifier.system"
* group.element[3].code = #CWE.9
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ST"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Original Text"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #name
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"string"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "name"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CWE to PractitionerRole.fsh

// HL7 Data Type - FHIR R4_ CWE[PractitionerRole] - Sheet1.csv
Instance: DatatypeCWEToPractitionerRole
InstanceOf: ConceptMap
Title: "Datatype CWE to PractitionerRole Map"
* title = "Datatype CWE to PractitionerRole Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CWE to the FHIR PractitionerRole Resource."
* id = "datatype-cwe-to-practitionerrole"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cwe-to-practitionerrole"
* version = "1.0"
* name = "DatatypeCWEToPractitionerRole"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CWE"
* targetUri = "PractitionerRole"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CWE to PractitionerRole.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/17rAsM14GKm-hwj88gnygm2C6lVt_nYnzJ6SR0sM_2qo/edit#gid=0"
* group.element[0].code = #CWE.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #code.coding[1].code
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"code"
* group.element[0].target.display = "code.coding[1].code"
* group.element[1].code = #CWE.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Text"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #code.coding[1].display
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.display = "code.coding[1].display"
* group.element[2].code = #CWE.3
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ID"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Name of Coding System"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #code.coding[1].system
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"uri"
* group.element[2].target.display = "code.coding[1].system"
* group.element[2].target.comment = "CWE.3 needs to converted to proper uri for the coding system used, considering CWE.14"
* group.element[3].code = #CWE.4
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ST"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Alternate Identifier"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #code.coding[2].code
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"code"
* group.element[3].target.display = "code.coding[2].code"
* group.element[4].code = #CWE.5
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"ST"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 0
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Alternate Text"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #code.coding[2].display
* group.element[4].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].target.extension[0].extension[0].url = "type"
* group.element[4].target.extension[0].extension[0].valueCode = #"string"
* group.element[4].target.display = "code.coding[2].display"
* group.element[5].code = #CWE.6
* group.element[5].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].extension[0].extension[0].url = "type"
* group.element[5].extension[0].extension[0].valueCode = #"ID"
* group.element[5].extension[0].extension[1].url = "cardinalityMin"
* group.element[5].extension[0].extension[1].valueInteger = 0
* group.element[5].extension[0].extension[2].url = "cardinalityMax"
* group.element[5].extension[0].extension[2].valueInteger = 1
* group.element[5].display = "Name of Alternate Coding System"
* group.element[5].target.equivalence = #equivalent
* group.element[5].target.code = #code.coding[2].system
* group.element[5].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].target.extension[0].extension[0].url = "type"
* group.element[5].target.extension[0].extension[0].valueCode = #"uri"
* group.element[5].target.display = "code.coding[2].system"
* group.element[5].target.comment = "CWE.6 needs to converted to proper uri for the coding system used, considering CWE.17"
* group.element[6].code = #CWE.9
* group.element[6].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].extension[0].extension[0].url = "type"
* group.element[6].extension[0].extension[0].valueCode = #"ST"
* group.element[6].extension[0].extension[1].url = "cardinalityMin"
* group.element[6].extension[0].extension[1].valueInteger = 0
* group.element[6].extension[0].extension[2].url = "cardinalityMax"
* group.element[6].extension[0].extension[2].valueInteger = 1
* group.element[6].display = "Original Text"
* group.element[6].target.equivalence = #equivalent
* group.element[6].target.code = #code.text
* group.element[6].target.display = "code.text"
* group.element[7].code = #CWE.10
* group.element[7].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].extension[0].extension[0].url = "type"
* group.element[7].extension[0].extension[0].valueCode = #"ST"
* group.element[7].extension[0].extension[1].url = "cardinalityMin"
* group.element[7].extension[0].extension[1].valueInteger = 0
* group.element[7].extension[0].extension[2].url = "cardinalityMax"
* group.element[7].extension[0].extension[2].valueInteger = 1
* group.element[7].display = "Second Alternate Identifier"
* group.element[7].target.equivalence = #equivalent
* group.element[7].target.code = #code.coding[3].code
* group.element[7].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].target.extension[0].extension[0].url = "type"
* group.element[7].target.extension[0].extension[0].valueCode = #"code"
* group.element[7].target.display = "code.coding[3].code"
* group.element[8].code = #CWE.11
* group.element[8].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].extension[0].extension[0].url = "type"
* group.element[8].extension[0].extension[0].valueCode = #"ST"
* group.element[8].extension[0].extension[1].url = "cardinalityMin"
* group.element[8].extension[0].extension[1].valueInteger = 0
* group.element[8].extension[0].extension[2].url = "cardinalityMax"
* group.element[8].extension[0].extension[2].valueInteger = 1
* group.element[8].display = "Second Alternate Text"
* group.element[8].target.equivalence = #equivalent
* group.element[8].target.code = #code.coding[3].display
* group.element[8].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].target.extension[0].extension[0].url = "type"
* group.element[8].target.extension[0].extension[0].valueCode = #"string"
* group.element[8].target.display = "code.coding[3].display"
* group.element[9].code = #CWE.12
* group.element[9].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[9].extension[0].extension[0].url = "type"
* group.element[9].extension[0].extension[0].valueCode = #"ID"
* group.element[9].extension[0].extension[1].url = "cardinalityMin"
* group.element[9].extension[0].extension[1].valueInteger = 0
* group.element[9].extension[0].extension[2].url = "cardinalityMax"
* group.element[9].extension[0].extension[2].valueInteger = 1
* group.element[9].display = "Name of Second Alternate Coding System"
* group.element[9].target.equivalence = #equivalent
* group.element[9].target.code = #code.coding[3].system
* group.element[9].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[9].target.extension[0].extension[0].url = "type"
* group.element[9].target.extension[0].extension[0].valueCode = #"uri"
* group.element[9].target.display = "code.coding[3].system"
* group.element[9].target.comment = "CWE.12 needs to converted to proper uri for the coding system used, consdiering CWE.13"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CWE to Quantity.fsh

// HL7 Data Type - FHIR R4_ CWE[Quantity] - Sheet1.csv
Instance: DatatypeCWEToQuantity
InstanceOf: ConceptMap
Title: "Datatype CWE to Quantity Map"
* title = "Datatype CWE to Quantity Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CWE to the FHIR Quantity Data Type."
* id = "datatype-cwe-to-quantity"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cwe-to-quantity"
* version = "1.0"
* name = "DatatypeCWEToQuantity"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CWE"
* targetUri = "Quantity"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CWE to Quantity.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/10NSiYc6zH_no7e-kRsnq4ZcosHYAHYKSa9wPvnY-Yfk/edit#gid=0"
* group.element[0].code = #CWE.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #Quantity.code
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"code"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "Quantity.code"
* group.element[0].target.comment = "The source of Quantity.value will likely come from a different field (eg. OBX-5 may populate Quantity.value while OBX-6 populates the remaining Quantity elements)."
* group.element[1].code = #CWE.1
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Identifier"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #Quantity.unit
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "Quantity.unit"
* group.element[2].code = #CWE.2
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ST"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Text"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #Quantity.unit
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"string"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "Quantity.unit"
* group.element[3].code = #CWE.3
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ID"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Name of Coding System"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #Quantity.system
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"uri"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "Quantity.system"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CWE to string.fsh

// HL7 Data Type - FHIR R4_ CWE[string] - Sheet1.csv
Instance: DatatypeCWEToString
InstanceOf: ConceptMap
Title: "Datatype CWE to string Map"
* title = "Datatype CWE to string Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CWE to the FHIR string Data Type."
* id = "datatype-cwe-to-string"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cwe-to-string"
* version = "1.0"
* name = "DatatypeCWEToString"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CWE"
* targetUri = "string"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CWE to string.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1r_ejjzPHKpkLImJFkHStL0veWe-yN96Tdv93U17mLVQ/edit#gid=0"
* group.element[0].code = #CWE.2
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Text"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #$value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "$value"
* group.element[1].code = #CWE.9
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Original Text"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #$value
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "$value"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CWE to uri.fsh

// HL7 Data Type - FHIR R4_ CWE[uri] - Sheet1.csv
Instance: DatatypeCWEToUri
InstanceOf: ConceptMap
Title: "Datatype CWE to uri Map"
* title = "Datatype CWE to uri Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CWE to the FHIR uri Data Type."
* id = "datatype-cwe-to-uri"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cwe-to-uri"
* version = "1.0"
* name = "DatatypeCWEToUri"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CWE"
* targetUri = "uri"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CWE to uri.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/17uu9lTeyxn8IG_OXCQK6sZZmVXLgncFZUkfB7OUZ2_M/edit#gid=0"
* group.element[0].code = #CWE.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #$value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"url"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "$value"
* group.element[1].code = #CWE.4
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Alternate Identifier"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #$value
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"url"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "$value"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CWE[DurationUnit] to Timing.fsh

// HL7 Data Type - FHIR R4_ CWE[Timing-DurationUnit] - Sheet1.csv
Instance: DatatypeCWEDurationUnitToTiming
InstanceOf: ConceptMap
Title: "Datatype CWE to Timing Map"
* title = "Datatype CWE to Timing Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CWE to the FHIR Timing Data Type."
* id = "datatype-cwe-durationunit-to-timing"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cwe-durationunit-to-timing"
* version = "1.0"
* name = "DatatypeCWEDurationUnitToTiming"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CWE"
* targetUri = "Timing"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CWE[DurationUnit] to Timing.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1peXd1bfzbP54t4Ns267PTNjDR1wX1HqF28C6o5P_-LY/edit#gid=0"
* group.element[0].code = #CWE.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #repeat.durationUnit
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"code"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "repeat.durationUnit"
* group.element[0].target.comment = "The durationUnit is limited to a required set of UCUM units"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CWE[SupportingInfo] to Observation.fsh

// HL7 Data Type - FHIR R4_ CWE[Observation-SupportingInfo] - Sheet1.csv
Instance: DatatypeCWESupportingInfoToObservation
InstanceOf: ConceptMap
Title: "Datatype CWE to Observation Map"
* title = "Datatype CWE to Observation Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CWE to the FHIR Observation Resource."
* id = "datatype-cwe-supportinginfo-to-observation"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cwe-supportinginfo-to-observation"
* version = "1.0"
* name = "DatatypeCWESupportingInfoToObservation"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CWE"
* targetUri = "Observation"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CWE[SupportingInfo] to Observation.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1vSwxT_mkiwYr4ueODQhxrOM7Q79Y14SXcF3oHejKmE4/edit#gid=0"
* group.element[0].code = #CWE
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #code
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"CodeableConcept"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "code"
* group.element[1].code = #CWE
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #status
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"code"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "status"
* group.element[2].code = #CWE.1
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ST"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Identifier"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #value.CodeableConcept.coding[1].code
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"code"
* group.element[2].target.display = "value.CodeableConcept.coding[1].code"
* group.element[3].code = #CWE.2
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ST"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Text"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #value.CodeableConcept.coding[1].display
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"string"
* group.element[3].target.display = "value.CodeableConcept.coding[1].display"
* group.element[4].code = #CWE.3
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"ID"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 0
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Name of Coding System"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #value.CodeableConcept.coding[1].system
* group.element[4].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].target.extension[0].extension[0].url = "type"
* group.element[4].target.extension[0].extension[0].valueCode = #"uri"
* group.element[4].target.display = "value.CodeableConcept.coding[1].system"
* group.element[5].code = #CWE.4
* group.element[5].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].extension[0].extension[0].url = "type"
* group.element[5].extension[0].extension[0].valueCode = #"ST"
* group.element[5].extension[0].extension[1].url = "cardinalityMin"
* group.element[5].extension[0].extension[1].valueInteger = 0
* group.element[5].extension[0].extension[2].url = "cardinalityMax"
* group.element[5].extension[0].extension[2].valueInteger = 1
* group.element[5].display = "Alternate Identifier"
* group.element[5].target.equivalence = #equivalent
* group.element[5].target.code = #value.CodeableConcept.coding[2].code
* group.element[5].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].target.extension[0].extension[0].url = "type"
* group.element[5].target.extension[0].extension[0].valueCode = #"code"
* group.element[5].target.display = "value.CodeableConcept.coding[2].code"
* group.element[6].code = #CWE.5
* group.element[6].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].extension[0].extension[0].url = "type"
* group.element[6].extension[0].extension[0].valueCode = #"ST"
* group.element[6].extension[0].extension[1].url = "cardinalityMin"
* group.element[6].extension[0].extension[1].valueInteger = 0
* group.element[6].extension[0].extension[2].url = "cardinalityMax"
* group.element[6].extension[0].extension[2].valueInteger = 1
* group.element[6].display = "Alternate Text"
* group.element[6].target.equivalence = #equivalent
* group.element[6].target.code = #value.CodeableConcept.coding[2].display
* group.element[6].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].target.extension[0].extension[0].url = "type"
* group.element[6].target.extension[0].extension[0].valueCode = #"string"
* group.element[6].target.display = "value.CodeableConcept.coding[2].display"
* group.element[7].code = #CWE.6
* group.element[7].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].extension[0].extension[0].url = "type"
* group.element[7].extension[0].extension[0].valueCode = #"ID"
* group.element[7].extension[0].extension[1].url = "cardinalityMin"
* group.element[7].extension[0].extension[1].valueInteger = 0
* group.element[7].extension[0].extension[2].url = "cardinalityMax"
* group.element[7].extension[0].extension[2].valueInteger = 1
* group.element[7].display = "Name of Alternate Coding System"
* group.element[7].target.equivalence = #equivalent
* group.element[7].target.code = #value.CodeableConcept.coding[2].system
* group.element[7].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].target.extension[0].extension[0].url = "type"
* group.element[7].target.extension[0].extension[0].valueCode = #"uri"
* group.element[7].target.display = "value.CodeableConcept.coding[2].system"
* group.element[8].code = #CWE.10
* group.element[8].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].extension[0].extension[0].url = "type"
* group.element[8].extension[0].extension[0].valueCode = #"ST"
* group.element[8].extension[0].extension[1].url = "cardinalityMin"
* group.element[8].extension[0].extension[1].valueInteger = 0
* group.element[8].extension[0].extension[2].url = "cardinalityMax"
* group.element[8].extension[0].extension[2].valueInteger = 1
* group.element[8].display = "Second Alternate Identifier"
* group.element[8].target.equivalence = #equivalent
* group.element[8].target.code = #value.CodeableConcept.coding[3].code
* group.element[8].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].target.extension[0].extension[0].url = "type"
* group.element[8].target.extension[0].extension[0].valueCode = #"code"
* group.element[8].target.display = "value.CodeableConcept.coding[3].code"
* group.element[9].code = #CWE.11
* group.element[9].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[9].extension[0].extension[0].url = "type"
* group.element[9].extension[0].extension[0].valueCode = #"ST"
* group.element[9].extension[0].extension[1].url = "cardinalityMin"
* group.element[9].extension[0].extension[1].valueInteger = 0
* group.element[9].extension[0].extension[2].url = "cardinalityMax"
* group.element[9].extension[0].extension[2].valueInteger = 1
* group.element[9].display = "Second Alternate Text"
* group.element[9].target.equivalence = #equivalent
* group.element[9].target.code = #value.CodeableConcept.coding[3].display
* group.element[9].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[9].target.extension[0].extension[0].url = "type"
* group.element[9].target.extension[0].extension[0].valueCode = #"string"
* group.element[9].target.display = "value.CodeableConcept.coding[3].display"
* group.element[10].code = #CWE.13
* group.element[10].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[10].extension[0].extension[0].url = "type"
* group.element[10].extension[0].extension[0].valueCode = #"ST"
* group.element[10].extension[0].extension[1].url = "cardinalityMin"
* group.element[10].extension[0].extension[1].valueInteger = 0
* group.element[10].extension[0].extension[2].url = "cardinalityMax"
* group.element[10].extension[0].extension[2].valueInteger = 1
* group.element[10].display = "Second Alternate Coding System Version ID"
* group.element[10].target.equivalence = #equivalent
* group.element[10].target.code = #value.CodeableConcept.coding[3].system
* group.element[10].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[10].target.extension[0].extension[0].url = "type"
* group.element[10].target.extension[0].extension[0].valueCode = #"uri"
* group.element[10].target.display = "value.CodeableConcept.coding[3].system"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CX to Identifier.fsh

// HL7 Data Type - FHIR R4_ CX[Identifier] - Sheet1.csv
Instance: DatatypeCXToIdentifier
InstanceOf: ConceptMap
Title: "Datatype CX to Identifier Map"
* title = "Datatype CX to Identifier Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CX to the FHIR Identifier Data Type."
* id = "datatype-cx-to-identifier"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cx-to-identifier"
* version = "1.0"
* name = "DatatypeCXToIdentifier"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CX"
* targetUri = "Identifier"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CX to Identifier.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1wZsWZMw0kBpu-oWB1U3iljL0m_7PLGM9tFfSqBUoRU4/edit#gid=0"
* group.element[0].code = #CX.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "ID Number"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "value"
* group.element[1].code = #CX.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Identifier Check Digit"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #extension[1].url
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"uri"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "extension[1].url"
* group.element[2].code = #CX.2
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ST"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Identifier Check Digit"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #extension[1].valueString
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"string"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "extension[1].valueString"
* group.element[3].code = #CX.3
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ID"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Check Digit Scheme"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #extension[2].url
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"uri"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "extension[2].url"
* group.element[4].code = #CX.3
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"ID"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 0
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Check Digit Scheme"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #extension[2].valueString
* group.element[4].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].target.extension[0].extension[0].url = "type"
* group.element[4].target.extension[0].extension[0].valueCode = #"string"
* group.element[4].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[4].target.extension[0].extension[1].valueInteger = 1
* group.element[4].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[4].target.extension[0].extension[2].valueInteger = 1
* group.element[4].target.display = "extension[2].valueString"
* group.element[5].code = #CX.4
* group.element[5].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].extension[0].extension[0].url = "type"
* group.element[5].extension[0].extension[0].valueCode = #"HD"
* group.element[5].extension[0].extension[1].url = "cardinalityMin"
* group.element[5].extension[0].extension[1].valueInteger = 0
* group.element[5].extension[0].extension[2].url = "cardinalityMax"
* group.element[5].extension[0].extension[2].valueInteger = 1
* group.element[5].display = "Assigning Authority"
* group.element[5].target.equivalence = #equivalent
* group.element[5].target.code = #assigner(Organization)
* group.element[5].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].target.extension[0].extension[0].url = "type"
* group.element[5].target.extension[0].extension[0].valueCode = #"Reference(Organization)"
* group.element[5].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[5].target.extension[0].extension[1].valueInteger = 1
* group.element[5].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[5].target.extension[0].extension[2].valueInteger = 1
* group.element[5].target.display = "assigner(Organization)"
* group.element[6].code = #CX.4
* group.element[6].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].extension[0].extension[0].url = "type"
* group.element[6].extension[0].extension[0].valueCode = #"HD"
* group.element[6].extension[0].extension[1].url = "cardinalityMin"
* group.element[6].extension[0].extension[1].valueInteger = 0
* group.element[6].extension[0].extension[2].url = "cardinalityMax"
* group.element[6].extension[0].extension[2].valueInteger = 1
* group.element[6].display = "Assigning Authority"
* group.element[6].target.equivalence = #equivalent
* group.element[6].target.code = #system
* group.element[6].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].target.extension[0].extension[0].url = "type"
* group.element[6].target.extension[0].extension[0].valueCode = #"uri"
* group.element[6].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[6].target.extension[0].extension[1].valueInteger = 1
* group.element[6].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[6].target.extension[0].extension[2].valueInteger = 1
* group.element[6].target.display = "system"
* group.element[6].target.comment = "Typically the assigning authority reflects an organization, but if it is an actual system (EHR 1 vs. EHR 2, both supporting the same organization where one cannot get more specific), then CX.4 should be mapped to .system"
* group.element[7].code = #CX.5
* group.element[7].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].extension[0].extension[0].url = "type"
* group.element[7].extension[0].extension[0].valueCode = #"ID"
* group.element[7].extension[0].extension[1].url = "cardinalityMin"
* group.element[7].extension[0].extension[1].valueInteger = 1
* group.element[7].extension[0].extension[2].url = "cardinalityMax"
* group.element[7].extension[0].extension[2].valueInteger = 1
* group.element[7].display = "Identifier Type Code"
* group.element[7].target.equivalence = #equivalent
* group.element[7].target.code = #type.coding.code
* group.element[7].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].target.extension[0].extension[0].url = "type"
* group.element[7].target.extension[0].extension[0].valueCode = #"code"
* group.element[7].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[7].target.extension[0].extension[1].valueInteger = 1
* group.element[7].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[7].target.extension[0].extension[2].valueInteger = 1
* group.element[7].target.display = "type.coding.code"
* group.element[8].code = #CX.7
* group.element[8].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].extension[0].extension[0].url = "type"
* group.element[8].extension[0].extension[0].valueCode = #"DT"
* group.element[8].extension[0].extension[1].url = "cardinalityMin"
* group.element[8].extension[0].extension[1].valueInteger = 0
* group.element[8].extension[0].extension[2].url = "cardinalityMax"
* group.element[8].extension[0].extension[2].valueInteger = 1
* group.element[8].display = "Effective Date"
* group.element[8].target.equivalence = #equivalent
* group.element[8].target.code = #period.start
* group.element[8].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].target.extension[0].extension[0].url = "type"
* group.element[8].target.extension[0].extension[0].valueCode = #"dateTime"
* group.element[8].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[8].target.extension[0].extension[1].valueInteger = 1
* group.element[8].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[8].target.extension[0].extension[2].valueInteger = 1
* group.element[8].target.display = "period.start"
* group.element[9].code = #CX.8
* group.element[9].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[9].extension[0].extension[0].url = "type"
* group.element[9].extension[0].extension[0].valueCode = #"DT"
* group.element[9].extension[0].extension[1].url = "cardinalityMin"
* group.element[9].extension[0].extension[1].valueInteger = 0
* group.element[9].extension[0].extension[2].url = "cardinalityMax"
* group.element[9].extension[0].extension[2].valueInteger = 1
* group.element[9].display = "Expiration Date"
* group.element[9].target.equivalence = #equivalent
* group.element[9].target.code = #period.end
* group.element[9].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[9].target.extension[0].extension[0].url = "type"
* group.element[9].target.extension[0].extension[0].valueCode = #"dateTime"
* group.element[9].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[9].target.extension[0].extension[1].valueInteger = 1
* group.element[9].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[9].target.extension[0].extension[2].valueInteger = 1
* group.element[9].target.display = "period.end"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CX to string.fsh

// HL7 Data Type - FHIR R4_ CX[string] - Sheet1.csv
Instance: DatatypeCXToString
InstanceOf: ConceptMap
Title: "Datatype CX to string Map"
* title = "Datatype CX to string Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CX to the FHIR string Data Type."
* id = "datatype-cx-to-string"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cx-to-string"
* version = "1.0"
* name = "DatatypeCXToString"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CX"
* targetUri = "string"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CX to string.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1IWUHkEnYB8mCCwzvO9cyt0OGsvIBUG0IAygcMgvInPk/edit#gid=0"
* group.element[0].code = #CX.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "ID Number"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #$value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "$value"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype CX[Mother] to RelatedPerson.fsh

// HL7 Data Type - FHIR R4_ CX[RelatedPerson-Mother] - Sheet1.csv
Instance: DatatypeCXMotherToRelatedPerson
InstanceOf: ConceptMap
Title: "Datatype CX to RelatedPerson Map"
* title = "Datatype CX to RelatedPerson Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype CX to the FHIR RelatedPerson Resource."
* id = "datatype-cx-mother-to-relatedperson"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-cx-mother-to-relatedperson"
* version = "1.0"
* name = "DatatypeCXMotherToRelatedPerson"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "CX"
* targetUri = "RelatedPerson"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype CX[Mother] to RelatedPerson.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1_Wxt3nDxMfR946FnjQSNPgPSNgxh7mHPeHooHGX2jeU/edit#gid=0"
* group.element[0].code = #CX.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "ID Number"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #identifier.value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "identifier.value"
* group.element[1].code = #CX.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Identifier Check Digit"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #identifier.extension[1].url
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"uri"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "identifier.extension[1].url"
* group.element[2].code = #CX.2
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ST"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Identifier Check Digit"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #identifier.extension[1].valueString
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"string"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "identifier.extension[1].valueString"
* group.element[3].code = #CX.3
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ID"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Check Digit Scheme"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #identifier.extension[2].url
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"uri"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "identifier.extension[2].url"
* group.element[4].code = #CX.3
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"ID"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 0
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Check Digit Scheme"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #identifier.extension[2].valueString
* group.element[4].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].target.extension[0].extension[0].url = "type"
* group.element[4].target.extension[0].extension[0].valueCode = #"string"
* group.element[4].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[4].target.extension[0].extension[1].valueInteger = 1
* group.element[4].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[4].target.extension[0].extension[2].valueInteger = 1
* group.element[4].target.display = "identifier.extension[2].valueString"
* group.element[5].code = #CX.4
* group.element[5].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].extension[0].extension[0].url = "type"
* group.element[5].extension[0].extension[0].valueCode = #"HD"
* group.element[5].extension[0].extension[1].url = "cardinalityMin"
* group.element[5].extension[0].extension[1].valueInteger = 0
* group.element[5].extension[0].extension[2].url = "cardinalityMax"
* group.element[5].extension[0].extension[2].valueInteger = 1
* group.element[5].display = "Assigning Authority"
* group.element[5].target.equivalence = #equivalent
* group.element[5].target.code = #identifier.assigner(Organization)
* group.element[5].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].target.extension[0].extension[0].url = "type"
* group.element[5].target.extension[0].extension[0].valueCode = #"Reference(Organization)"
* group.element[5].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[5].target.extension[0].extension[1].valueInteger = 1
* group.element[5].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[5].target.extension[0].extension[2].valueInteger = 1
* group.element[5].target.display = "identifier.assigner(Organization)"
* group.element[6].code = #CX.4
* group.element[6].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].extension[0].extension[0].url = "type"
* group.element[6].extension[0].extension[0].valueCode = #"HD"
* group.element[6].extension[0].extension[1].url = "cardinalityMin"
* group.element[6].extension[0].extension[1].valueInteger = 0
* group.element[6].extension[0].extension[2].url = "cardinalityMax"
* group.element[6].extension[0].extension[2].valueInteger = 1
* group.element[6].display = "Assigning Authority"
* group.element[6].target.equivalence = #equivalent
* group.element[6].target.code = #identifier.system
* group.element[6].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].target.extension[0].extension[0].url = "type"
* group.element[6].target.extension[0].extension[0].valueCode = #"uri"
* group.element[6].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[6].target.extension[0].extension[1].valueInteger = 1
* group.element[6].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[6].target.extension[0].extension[2].valueInteger = 1
* group.element[6].target.display = "identifier.system"
* group.element[6].target.comment = "Typically the assigning authority reflects an organization, but if it is an actual system (EHR 1 vs. EHR 2, both supporting the same organization where one cannot get more specific), then CX.4 should be mapped to .system"
* group.element[7].code = #CX.5
* group.element[7].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].extension[0].extension[0].url = "type"
* group.element[7].extension[0].extension[0].valueCode = #"ID"
* group.element[7].extension[0].extension[1].url = "cardinalityMin"
* group.element[7].extension[0].extension[1].valueInteger = 1
* group.element[7].extension[0].extension[2].url = "cardinalityMax"
* group.element[7].extension[0].extension[2].valueInteger = 1
* group.element[7].display = "Identifier Type Code"
* group.element[7].target.equivalence = #equivalent
* group.element[7].target.code = #identifier.type.coding.code
* group.element[7].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].target.extension[0].extension[0].url = "type"
* group.element[7].target.extension[0].extension[0].valueCode = #"code"
* group.element[7].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[7].target.extension[0].extension[1].valueInteger = 1
* group.element[7].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[7].target.extension[0].extension[2].valueInteger = 1
* group.element[7].target.display = "identifier.type.coding.code"
* group.element[8].code = #CX.7
* group.element[8].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].extension[0].extension[0].url = "type"
* group.element[8].extension[0].extension[0].valueCode = #"DT"
* group.element[8].extension[0].extension[1].url = "cardinalityMin"
* group.element[8].extension[0].extension[1].valueInteger = 0
* group.element[8].extension[0].extension[2].url = "cardinalityMax"
* group.element[8].extension[0].extension[2].valueInteger = 1
* group.element[8].display = "Effective Date"
* group.element[8].target.equivalence = #equivalent
* group.element[8].target.code = #identifier.period.start
* group.element[8].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].target.extension[0].extension[0].url = "type"
* group.element[8].target.extension[0].extension[0].valueCode = #"dateTime"
* group.element[8].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[8].target.extension[0].extension[1].valueInteger = 1
* group.element[8].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[8].target.extension[0].extension[2].valueInteger = 1
* group.element[8].target.display = "identifier.period.start"
* group.element[9].code = #CX.8
* group.element[9].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[9].extension[0].extension[0].url = "type"
* group.element[9].extension[0].extension[0].valueCode = #"DT"
* group.element[9].extension[0].extension[1].url = "cardinalityMin"
* group.element[9].extension[0].extension[1].valueInteger = 0
* group.element[9].extension[0].extension[2].url = "cardinalityMax"
* group.element[9].extension[0].extension[2].valueInteger = 1
* group.element[9].display = "Expiration Date"
* group.element[9].target.equivalence = #equivalent
* group.element[9].target.code = #identifier.period.end
* group.element[9].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[9].target.extension[0].extension[0].url = "type"
* group.element[9].target.extension[0].extension[0].valueCode = #"dateTime"
* group.element[9].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[9].target.extension[0].extension[1].valueInteger = 1
* group.element[9].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[9].target.extension[0].extension[2].valueInteger = 1
* group.element[9].target.display = "identifier.period.end"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype DLD[Discharge] to Location.fsh

// HL7 Data Type - FHIR R4_ DLD[Location-Discharge] - Sheet1.csv
Instance: DatatypeDLDDischargeToLocation
InstanceOf: ConceptMap
Title: "Datatype DLD to Location Map"
* title = "Datatype DLD to Location Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype DLD to the FHIR Location Resource."
* id = "datatype-dld-discharge-to-location"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-dld-discharge-to-location"
* version = "1.0"
* name = "DatatypeDLDDischargeToLocation"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "DLD"
* targetUri = "Location"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype DLD[Discharge] to Location.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1lUw9g0EWTpvOZ-4GBPpvOh-djKs_38GZTDxhMz3WgwE/edit#gid=0"
* group.element[0].code = #DLD.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"CWE"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Discharge to Location"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #type
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"CodeableConcept"
* group.element[0].target.display = "type"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype DLN to Identifier.fsh

// HL7 Data Type - FHIR R4_ DLN[Identifier] - Sheet1.csv
Instance: DatatypeDLNToIdentifier
InstanceOf: ConceptMap
Title: "Datatype DLN to Identifier Map"
* title = "Datatype DLN to Identifier Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype DLN to the FHIR Identifier Data Type."
* id = "datatype-dln-to-identifier"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-dln-to-identifier"
* version = "1.0"
* name = "DatatypeDLNToIdentifier"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "DLN"
* targetUri = "Identifier"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype DLN to Identifier.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1bcpPkFAMCKkvyN4w-XFAKYTaMMz-rmRWqZAkaTzMrYY/edit#gid=0"
* group.element[0].code = #DLN.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "License Number"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "value"
* group.element[1].code = #DLN.1
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 1
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "License Number"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #type.coding.code
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"CodeableConcept"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "type.coding.code"
* group.element[2].code = #DLN.1
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ST"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 1
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "License Number"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #type.coding.sytem
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"uri"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "type.coding.sytem"
* group.element[3].code = #DLN.2
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"CWE"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Issuing State, Province, Country"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #system
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"uri"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "system"
* group.element[4].code = #DLN.3
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"DT"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 0
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Expiration Date"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #period.end
* group.element[4].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].target.extension[0].extension[0].url = "type"
* group.element[4].target.extension[0].extension[0].valueCode = #"dateTime"
* group.element[4].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[4].target.extension[0].extension[1].valueInteger = 1
* group.element[4].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[4].target.extension[0].extension[2].valueInteger = 1
* group.element[4].target.display = "period.end"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype DR to dateTime.fsh

// HL7 Data Type - FHIR R4_ DR[dateTime] - Sheet1.csv
Instance: DatatypeDRToDateTime
InstanceOf: ConceptMap
Title: "Datatype DR to dateTime Map"
* title = "Datatype DR to dateTime Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype DR to the FHIR dateTime Data Type."
* id = "datatype-dr-to-datetime"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-dr-to-datetime"
* version = "1.0"
* name = "DatatypeDRToDateTime"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "DR"
* targetUri = "dateTime"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype DR to dateTime.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1tE6xgT7ns7kFg0aBWUgKociuXfuKrdnm01Gy6nHWcOU/edit#gid=0"
* group.element[0].code = #DR.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"DTM"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Range Start Date/Time"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #$value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"dateTime"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "$value"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype DR to Period.fsh

// HL7 Data Type - FHIR R4_ DR[Period] - Sheet1.csv
Instance: DatatypeDRToPeriod
InstanceOf: ConceptMap
Title: "Datatype DR to Period Map"
* title = "Datatype DR to Period Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype DR to the FHIR Period Data Type."
* id = "datatype-dr-to-period"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-dr-to-period"
* version = "1.0"
* name = "DatatypeDRToPeriod"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "DR"
* targetUri = "Period"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype DR to Period.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1Y-KQhTaOTH5XsQKiQkYsF_DVBA0BRTNH3lDXyUDJlyY/edit#gid=0"
* group.element[0].code = #DR.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"DTM"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Range Start Date/Time"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #start
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"dateTime"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "start"
* group.element[1].code = #DR.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"DTM"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Range End Date/Time"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #end
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"dateTime"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "end"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype DTM to dateTime.fsh

// HL7 Data Type - FHIR R4_ DTM[dateTime] - Sheet1.csv
Instance: DatatypeDTMToDateTime
InstanceOf: ConceptMap
Title: "Datatype DTM to dateTime Map"
* title = "Datatype DTM to dateTime Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype DTM to the FHIR dateTime Data Type."
* id = "datatype-dtm-to-datetime"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-dtm-to-datetime"
* version = "1.0"
* name = "DatatypeDTMToDateTime"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "DTM"
* targetUri = "dateTime"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype DTM to dateTime.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1_9GXAgL9iXUNRxQ-jQoTMuyqNPNb7ZzIanNszwqHR3M/edit#gid=0"
* group.element[0].code = #DTM.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "cardinalityMin"
* group.element[0].extension[0].extension[0].valueInteger = 1
* group.element[0].extension[0].extension[1].url = "cardinalityMax"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #$value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"DateTime"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "$value"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype DTM[Time] to Annotation.fsh

// HL7 Data Type - FHIR R4_ DTM[Annotation-Time] - Sheet1.csv
Instance: DatatypeDTMTimeToAnnotation
InstanceOf: ConceptMap
Title: "Datatype DTM to Annotation Map"
* title = "Datatype DTM to Annotation Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype DTM to the FHIR Annotation Data Type."
* id = "datatype-dtm-time-to-annotation"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-dtm-time-to-annotation"
* version = "1.0"
* name = "DatatypeDTMTimeToAnnotation"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "DTM"
* targetUri = "Annotation"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype DTM[Time] to Annotation.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1F5jpv1JbXEGHMvGjxy3ji_zOQBJ69x_8sBoaLDIgF1g/edit#gid=0"
* group.element[0].code = #DTM.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "cardinalityMin"
* group.element[0].extension[0].extension[0].valueInteger = 1
* group.element[0].extension[0].extension[1].url = "cardinalityMax"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #time
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"dateTime"
* group.element[0].target.display = "time"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype ED to Attachment.fsh

// HL7 Data Type - FHIR R4_ ED[Attachment] - Sheet1.csv
Instance: DatatypeEDToAttachment
InstanceOf: ConceptMap
Title: "Datatype ED to Attachment Map"
* title = "Datatype ED to Attachment Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype ED to the FHIR Attachment Data Type."
* id = "datatype-ed-to-attachment"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-ed-to-attachment"
* version = "1.0"
* name = "DatatypeEDToAttachment"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "ED"
* targetUri = "Attachment"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype ED to Attachment.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1SGCbdWUV21fClCmnt3zNqOMzeV5Bt2FcBIoO7eP51YM/edit#gid=0"
* group.element[0].code = #ED.2
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ID"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Type of Data"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #extension[1].url
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"uri"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "extension[1].url"
* group.element[1].code = #ED.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ID"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 1
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Type of Data"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #extension[1].valueCodeableConcept
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"CodeableConcept"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "extension[1].valueCodeableConcept"
* group.element[2].code = #ED.3
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ID"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Data Subtype"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #contentType
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"code"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "contentType"
* group.element[3].code = #ED.5
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"TX"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 1
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Data"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #data
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"base64Binary"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "data"
* group.element[3].target.comment = "Implementations are not always accurate, so to be safe you may want to always assess OBX-5.5 to determine the correct .contentType."
* group.element[4].code = #ED.5
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"TX"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 1
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Data"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #data
* group.element[4].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].target.extension[0].extension[0].url = "type"
* group.element[4].target.extension[0].extension[0].valueCode = #"base64Binary"
* group.element[4].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[4].target.extension[0].extension[1].valueInteger = 1
* group.element[4].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[4].target.extension[0].extension[2].valueInteger = 1
* group.element[4].target.display = "data"
* group.element[4].target.comment = "Implementations are not always accurate, so to be safe you may want to always assess OBX-5.5 to determine the correct .contentType."


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype ED to DocumentReference.fsh

// HL7 Data Type - FHIR R4_ ED[DocumentReference] - Sheet1.csv
Instance: DatatypeEDToDocumentReference
InstanceOf: ConceptMap
Title: "Datatype ED to DocumentReference Map"
* title = "Datatype ED to DocumentReference Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype ED to the FHIR DocumentReference Resource."
* id = "datatype-ed-to-documentreference"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-ed-to-documentreference"
* version = "1.0"
* name = "DatatypeEDToDocumentReference"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "ED"
* targetUri = "DocumentReference"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype ED to DocumentReference.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1LnY0-HZxstOum6gIlV73mLi2z_7p06HkiEwI8myaN6w/edit#gid=0"
* group.element[0].code = #ED.2
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ID"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Type of Data"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #content.attachment.extension[1].url
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"uri"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "content.attachment.extension[1].url"
* group.element[1].code = #ED.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ID"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 1
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Type of Data"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #content.attachment.extension[1].valueCodeableConcept
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"CodeableConcept"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "content.attachment.extension[1].valueCodeableConcept"
* group.element[2].code = #ED.3
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ID"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Data Subtype"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #content.attachment.contentType
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"code"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "content.attachment.contentType"
* group.element[3].code = #ED.5
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"TX"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 1
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Data"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #content.attachment.data
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"base64Binary"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "content.attachment.data"
* group.element[3].target.comment = "Implementations are not always accurate, so to be safe you may want to always assess OBX-5.5 to determine the correct .contentType."
* group.element[4].code = #ED.5
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"TX"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 1
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Data"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #content.attachment.data
* group.element[4].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].target.extension[0].extension[0].url = "type"
* group.element[4].target.extension[0].extension[0].valueCode = #"base64Binary"
* group.element[4].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[4].target.extension[0].extension[1].valueInteger = 1
* group.element[4].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[4].target.extension[0].extension[2].valueInteger = 1
* group.element[4].target.display = "content.attachment.data"
* group.element[4].target.comment = "Implementations are not always accurate, so to be safe you may want to always assess OBX-5.5 to determine the correct .contentType."


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype EI to Coding.fsh

// HL7 Data Type - FHIR R4_ EI[Coding] - Sheet1.csv
Instance: DatatypeEIToCoding
InstanceOf: ConceptMap
Title: "Datatype EI to Coding Map"
* title = "Datatype EI to Coding Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype EI to the FHIR Coding Data Type."
* id = "datatype-ei-to-coding"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-ei-to-coding"
* version = "1.0"
* name = "DatatypeEIToCoding"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "EI"
* targetUri = "Coding"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype EI to Coding.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1VUiS1wxVE8cPLeWbJs8HP3rjuwlc9Dg4fSBLsHMKWDg/edit#gid=0"
* group.element[0].code = #EI.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Entity Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #code
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "code"
* group.element[1].code = #EI.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"IS"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Namespace ID"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #system
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"uri"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "system"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype EI to Condition.fsh

// HL7 Data Type - FHIR R4_ EI[Condition] - Sheet1.csv
Instance: DatatypeEIToCondition
InstanceOf: ConceptMap
Title: "Datatype EI to Condition Map"
* title = "Datatype EI to Condition Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype EI to the FHIR Condition Resource."
* id = "datatype-ei-to-condition"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-ei-to-condition"
* version = "1.0"
* name = "DatatypeEIToCondition"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "EI"
* targetUri = "Condition"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype EI to Condition.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1JZT3RMYHWaeaCiurh4LAkxGpGIp4U8RbbQBQ1yt5KK4/edit#gid=0"
* group.element[0].code = #EI.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Entity Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #identifier.value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "identifier.value"
* group.element[1].code = #EI.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"IS"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Namespace ID"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #assigner(Organization[1].identifier[1].value)
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.display = "assigner(Organization[1].identifier[1].value)"
* group.element[1].target.comment = "Note that, even though the HL7 v2 component sounds like a type or category of organization (using IS), the intent is to point to the specific oranization that assigned the identifier value in EI.1"
* group.element[2].code = #EI.3
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ST"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Universal ID"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #assigner(Organization[1].identifier[2].value)
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"uri"
* group.element[2].target.display = "assigner(Organization[1].identifier[2].value)"
* group.element[3].code = #EI.4
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ID"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Universal ID Type"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #assigner(Organization[1].identifier[2].type)
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"CodeableConcept"
* group.element[3].target.display = "assigner(Organization[1].identifier[2].type)"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype EI to Procedure.fsh

// HL7 Data Type - FHIR R4_ EI[Procedure] - Sheet1.csv
Instance: DatatypeEIToProcedure
InstanceOf: ConceptMap
Title: "Datatype EI to Procedure Map"
* title = "Datatype EI to Procedure Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype EI to the FHIR Procedure Resource."
* id = "datatype-ei-to-procedure"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-ei-to-procedure"
* version = "1.0"
* name = "DatatypeEIToProcedure"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "EI"
* targetUri = "Procedure"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype EI to Procedure.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1F9EQJuromm8LqDjGALP2ueidGKmIHJQOQmg2SGZKG64/edit#gid=0"
* group.element[0].code = #EI.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Entity Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #identifier.value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[0].valueInteger = -1
* group.element[0].target.extension[0].extension[1].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[1].valueInteger = -1
* group.element[0].target.display = "identifier.value"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype EI[DefaultAssigner] to Identifier.fsh

// HL7 Data Type - FHIR R4_ EI[Identifier-DefaultAssigner] - Sheet1.csv
Instance: DatatypeEIDefaultAssignerToIdentifier
InstanceOf: ConceptMap
Title: "Datatype EI to Identifier Map"
* title = "Datatype EI to Identifier Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype EI to the FHIR Identifier Data Type."
* id = "datatype-ei-defaultassigner-to-identifier"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-ei-defaultassigner-to-identifier"
* version = "1.0"
* name = "DatatypeEIDefaultAssignerToIdentifier"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "EI"
* targetUri = "Identifier"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype EI[DefaultAssigner] to Identifier.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1P-B_L7iPadbO4VD2zcyjUGfEeXtjlYqgUNTd7idvohE/edit#gid=0"
* group.element[0].code = #EI.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Entity Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #value
* group.element[0].target.display = "value"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype EI[Extension] to Identifier.fsh

// HL7 Data Type - FHIR R4_ EI[Identifier-Extension] - Sheet1.csv
Instance: DatatypeEIExtensionToIdentifier
InstanceOf: ConceptMap
Title: "Datatype EI to Identifier Map"
* title = "Datatype EI to Identifier Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype EI to the FHIR Identifier Data Type."
* id = "datatype-ei-extension-to-identifier"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-ei-extension-to-identifier"
* version = "1.0"
* name = "DatatypeEIExtensionToIdentifier"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "EI"
* targetUri = "Identifier"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype EI[Extension] to Identifier.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1pKB8A1ZmR2uym9H5Isdh8VNvO30t61xpjHBjaUKGaio/edit#gid=0"
* group.element[0].code = #EI.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Entity Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "value"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype EI[Organization] to Identifier.fsh

// HL7 Data Type - FHIR R4_ EI[Identifier-Organization] - Sheet1.csv
Instance: DatatypeEIOrganizationToIdentifier
InstanceOf: ConceptMap
Title: "Datatype EI to Identifier Map"
* title = "Datatype EI to Identifier Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype EI to the FHIR Identifier Data Type."
* id = "datatype-ei-organization-to-identifier"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-ei-organization-to-identifier"
* version = "1.0"
* name = "DatatypeEIOrganizationToIdentifier"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "EI"
* targetUri = "Identifier"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype EI[Organization] to Identifier.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/13TeEW85bdgVNB9RZPaKKI9Q1xBCoMGppd5gNBbhH9qc/edit#gid=0"
* group.element[0].code = #EI.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Entity Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #value
* group.element[0].target.display = "value"
* group.element[1].code = #EI.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"IS"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Namespace ID"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #assigner(Organization[1].identifier[1].value)
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.display = "assigner(Organization[1].identifier[1].value)"
* group.element[1].target.comment = "Note that, even though the HL7 v2 component sounds like a type or category of organization (using IS), the intent is to point to the specific oranization that assigned the identifier value in EI.1"
* group.element[2].code = #EI.3
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ST"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Universal ID"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #assigner(Organization[1].identifier[2].value)
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"uri"
* group.element[2].target.display = "assigner(Organization[1].identifier[2].value)"
* group.element[3].code = #EI.4
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ID"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Universal ID Type"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #assigner(Organization[1].identifier[2].type)
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"CodeableConcept"
* group.element[3].target.display = "assigner(Organization[1].identifier[2].type)"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype EI[System] to Identifier.fsh

// HL7 Data Type - FHIR R4_ EI[Identifier-System] - Sheet1.csv
Instance: DatatypeEISystemToIdentifier
InstanceOf: ConceptMap
Title: "Datatype EI to Identifier Map"
* title = "Datatype EI to Identifier Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype EI to the FHIR Identifier Data Type."
* id = "datatype-ei-system-to-identifier"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-ei-system-to-identifier"
* version = "1.0"
* name = "DatatypeEISystemToIdentifier"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "EI"
* targetUri = "Identifier"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype EI[System] to Identifier.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/17jRe8mmxmN4n609AzQ5Q6j07KaTc0UMnVvLEfwxOHzY/edit#gid=0"
* group.element[0].code = #EI.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Entity Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #$value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.display = "$value"
* group.element[1].code = #EI.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"IS"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Namespace ID"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #system
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"url"
* group.element[1].target.display = "system"
* group.element[2].code = #EI.3
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ST"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Universal ID"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #system
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"url"
* group.element[2].target.display = "system"
* group.element[3].code = #EI.4
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ID"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Universal ID Type"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #type
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"CodeableConcept"
* group.element[3].target.display = "type"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype EI[UDICarrier] to Device.fsh

// HL7 Data Type - FHIR R4_ EI[Device-UDICarrier] - Sheet1.csv
Instance: DatatypeEIUDICarrierToDevice
InstanceOf: ConceptMap
Title: "Datatype EI to Device Map"
* title = "Datatype EI to Device Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype EI to the FHIR Device Resource."
* id = "datatype-ei-udicarrier-to-device"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-ei-udicarrier-to-device"
* version = "1.0"
* name = "DatatypeEIUDICarrierToDevice"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "EI"
* targetUri = "Device"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype EI[UDICarrier] to Device.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1uMZ5C8gEzU9qMKXYUUdesF9HFubW6s8BFYzD-DOgRro/edit#gid=0"
* group.element[0].code = #EI.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Entity Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #udiCarrier.deviceIdentifier
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "udiCarrier.deviceIdentifier"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype EIP[FillerAssignedIdentifier] to Identifier.fsh

// HL7 Data Type - FHIR R4_ EIP[Identifier-FillerAssignedIdentifier] - Sheet1.csv
Instance: DatatypeEIPFillerAssignedIdentifierToIdentifier
InstanceOf: ConceptMap
Title: "Datatype EIP to Identifier Map"
* title = "Datatype EIP to Identifier Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype EIP to the FHIR Identifier Data Type."
* id = "datatype-eip-fillerassignedidentifier-to-identifier"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-eip-fillerassignedidentifier-to-identifier"
* version = "1.0"
* name = "DatatypeEIPFillerAssignedIdentifierToIdentifier"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "EIP"
* targetUri = "Identifier"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype EIP[FillerAssignedIdentifier] to Identifier.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1NQIzGuwmDkvB-OVjTlzW_bgkt19DXOgj3KnLl3JhmuE/edit#gid=0"
* group.element[0].code = #EIP.2
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"EI"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Filler Assigned Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[0].target.display = "value"
* group.element[1].code = #EIP.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"EI"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Filler Assigned Identifier"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #type.coding.code
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"code"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "type.coding.code"
* group.element[2].code = #EIP.2
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"EI"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Filler Assigned Identifier"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #type.coding.system
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"uri"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "type.coding.system"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype EIP[PlacerAssignedIdentifier] to Identifier.fsh

// HL7 Data Type - FHIR R4_ EIP[Identifier-PlacerAssignedIdentifier] - Sheet1.csv
Instance: DatatypeEIPPlacerAssignedIdentifierToIdentifier
InstanceOf: ConceptMap
Title: "Datatype EIP to Identifier Map"
* title = "Datatype EIP to Identifier Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype EIP to the FHIR Identifier Data Type."
* id = "datatype-eip-placerassignedidentifier-to-identifier"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-eip-placerassignedidentifier-to-identifier"
* version = "1.0"
* name = "DatatypeEIPPlacerAssignedIdentifierToIdentifier"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "EIP"
* targetUri = "Identifier"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype EIP[PlacerAssignedIdentifier] to Identifier.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1Ez3350XkVw7cS5ufWsFVpVXV884WOtutsWFfEAZUUvo/edit#gid=0"
* group.element[0].code = #EIP.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"EI"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Placer Assigned Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[0].target.display = "value"
* group.element[1].code = #EIP.1
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"EI"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Placer Assigned Identifier"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #type.coding.code
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"code"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "type.coding.code"
* group.element[2].code = #EIP.1
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"EI"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Placer Assigned Identifier"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #type.coding.system
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"uri"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "type.coding.system"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype FN to HumanName.fsh

// HL7 Data Type - FHIR R4_ FN[HumanName] - Sheet1.csv
Instance: DatatypeFNToHumanName
InstanceOf: ConceptMap
Title: "Datatype FN to HumanName Map"
* title = "Datatype FN to HumanName Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype FN to the FHIR HumanName Data Type."
* id = "datatype-fn-to-humanname"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-fn-to-humanname"
* version = "1.0"
* name = "DatatypeFNToHumanName"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "FN"
* targetUri = "HumanName"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype FN to HumanName.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/16_unbJhBhLcdgy0KhkwtNfZiK2RzGOVghUlm6VKjWmc/edit#gid=0"
* group.element[0].code = #FN.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Surname"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #family
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "family"
* group.element[1].code = #FN.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Own Surname Prefix"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #family.extension[1].url
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"uri"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "family.extension[1].url"
* group.element[2].code = #FN.2
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ST"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Own Surname Prefix"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #family.extension[1].valueString
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"string"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "family.extension[1].valueString"
* group.element[3].code = #FN.3
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ST"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Own Surname"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #family.extension[2].url
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"uri"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "family.extension[2].url"
* group.element[4].code = #FN.3
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"ST"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 0
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Own Surname"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #family.extension[2].valueString
* group.element[4].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].target.extension[0].extension[0].url = "type"
* group.element[4].target.extension[0].extension[0].valueCode = #"string"
* group.element[4].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[4].target.extension[0].extension[1].valueInteger = 1
* group.element[4].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[4].target.extension[0].extension[2].valueInteger = 1
* group.element[4].target.display = "family.extension[2].valueString"
* group.element[5].code = #FN.4
* group.element[5].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].extension[0].extension[0].url = "type"
* group.element[5].extension[0].extension[0].valueCode = #"ST"
* group.element[5].extension[0].extension[1].url = "cardinalityMin"
* group.element[5].extension[0].extension[1].valueInteger = 0
* group.element[5].extension[0].extension[2].url = "cardinalityMax"
* group.element[5].extension[0].extension[2].valueInteger = 1
* group.element[5].display = "Surname Prefix from Partner/Spouse"
* group.element[5].target.equivalence = #equivalent
* group.element[5].target.code = #family.extension[3].url
* group.element[5].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].target.extension[0].extension[0].url = "type"
* group.element[5].target.extension[0].extension[0].valueCode = #"uri"
* group.element[5].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[5].target.extension[0].extension[1].valueInteger = 1
* group.element[5].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[5].target.extension[0].extension[2].valueInteger = 1
* group.element[5].target.display = "family.extension[3].url"
* group.element[6].code = #FN.4
* group.element[6].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].extension[0].extension[0].url = "type"
* group.element[6].extension[0].extension[0].valueCode = #"ST"
* group.element[6].extension[0].extension[1].url = "cardinalityMin"
* group.element[6].extension[0].extension[1].valueInteger = 0
* group.element[6].extension[0].extension[2].url = "cardinalityMax"
* group.element[6].extension[0].extension[2].valueInteger = 1
* group.element[6].display = "Surname Prefix from Partner/Spouse"
* group.element[6].target.equivalence = #equivalent
* group.element[6].target.code = #family.extension[3].valueString
* group.element[6].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].target.extension[0].extension[0].url = "type"
* group.element[6].target.extension[0].extension[0].valueCode = #"string"
* group.element[6].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[6].target.extension[0].extension[1].valueInteger = 1
* group.element[6].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[6].target.extension[0].extension[2].valueInteger = 1
* group.element[6].target.display = "family.extension[3].valueString"
* group.element[7].code = #FN.5
* group.element[7].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].extension[0].extension[0].url = "type"
* group.element[7].extension[0].extension[0].valueCode = #"ST"
* group.element[7].extension[0].extension[1].url = "cardinalityMin"
* group.element[7].extension[0].extension[1].valueInteger = 0
* group.element[7].extension[0].extension[2].url = "cardinalityMax"
* group.element[7].extension[0].extension[2].valueInteger = 1
* group.element[7].display = "Surname from Partner/Spouse"
* group.element[7].target.equivalence = #equivalent
* group.element[7].target.code = #family.extension[3].url
* group.element[7].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].target.extension[0].extension[0].url = "type"
* group.element[7].target.extension[0].extension[0].valueCode = #"uri"
* group.element[7].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[7].target.extension[0].extension[1].valueInteger = 1
* group.element[7].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[7].target.extension[0].extension[2].valueInteger = 1
* group.element[7].target.display = "family.extension[3].url"
* group.element[8].code = #FN.5
* group.element[8].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].extension[0].extension[0].url = "type"
* group.element[8].extension[0].extension[0].valueCode = #"ST"
* group.element[8].extension[0].extension[1].url = "cardinalityMin"
* group.element[8].extension[0].extension[1].valueInteger = 0
* group.element[8].extension[0].extension[2].url = "cardinalityMax"
* group.element[8].extension[0].extension[2].valueInteger = 1
* group.element[8].display = "Surname from Partner/Spouse"
* group.element[8].target.equivalence = #equivalent
* group.element[8].target.code = #family.extension[3].valueString
* group.element[8].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].target.extension[0].extension[0].url = "type"
* group.element[8].target.extension[0].extension[0].valueCode = #"string"
* group.element[8].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[8].target.extension[0].extension[1].valueInteger = 1
* group.element[8].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[8].target.extension[0].extension[2].valueInteger = 1
* group.element[8].target.display = "family.extension[3].valueString"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype FT[Comment] to Annotation.fsh

// HL7 Data Type - FHIR R4_ FT[Annotation-Comment] - Sheet1.csv
Instance: DatatypeFTCommentToAnnotation
InstanceOf: ConceptMap
Title: "Datatype FT to Annotation Map"
* title = "Datatype FT to Annotation Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype FT to the FHIR Annotation Data Type."
* id = "datatype-ft-comment-to-annotation"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-ft-comment-to-annotation"
* version = "1.0"
* name = "DatatypeFTCommentToAnnotation"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "FT"
* targetUri = "Annotation"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype FT[Comment] to Annotation.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1dHH3qkL9xxzPYl4gMeyjI2IZgTK9OaR1ssIVZyxsAEg/edit?gid=0#gid=0"
* group.element[0].code = #FT-1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"FT"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Formatted Text"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #text
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"markdown"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "text"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype HD to Device.fsh

// HL7 Data Type - FHIR R4_ HD[Device] - Sheet1.csv
Instance: DatatypeHDToDevice
InstanceOf: ConceptMap
Title: "Datatype HD to Device Map"
* title = "Datatype HD to Device Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype HD to the FHIR Device Resource."
* id = "datatype-hd-to-device"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-hd-to-device"
* version = "1.0"
* name = "DatatypeHDToDevice"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "HD"
* targetUri = "Device"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype HD to Device.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/17DkmOwfcOoVQObJa39jY65XiEbXR7ozzvlgw6S_S0a4/edit?gid=0#gid=0"
* group.element[0].code = #HD.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"IS"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Namespace ID"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #identifier[1].value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.display = "identifier[1].value"
* group.element[0].target.comment = "Need gForge (#20522) to change MessageHeader.destination.endpoint from 1..1 to 0..1.  Must be a reachable address."
* group.element[1].code = #HD.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Universal ID"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #identifier[2].value
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.display = "identifier[2].value"
* group.element[2].code = #HD.3
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ID"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Universal ID Type"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #identifier[2].type
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"CodeableConcept"
* group.element[2].target.display = "identifier[2].type"
* group.element[2].target.comment = "Request that DNS, ISO, and UUID (and other Table 0301 values) are added to: http://hl7.org/fhir/valueset-identifier-type.html"
* group.element[3].code = #HD.3
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ID"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Universal ID Type"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #identifier[2].system
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"uri"
* group.element[3].target.display = "identifier[2].system"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype HD to Identifier.fsh

// HL7 Data Type - FHIR R4_ HD[Identifier] - Sheet1.csv
Instance: DatatypeHDToIdentifier
InstanceOf: ConceptMap
Title: "Datatype HD to Identifier Map"
* title = "Datatype HD to Identifier Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype HD to the FHIR Identifier Data Type."
* id = "datatype-hd-to-identifier"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-hd-to-identifier"
* version = "1.0"
* name = "DatatypeHDToIdentifier"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "HD"
* targetUri = "Identifier"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype HD to Identifier.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1Ao9N1tFgkzTMGA1y0stCr0sgDk6vVtzT6TnpdByshC4/edit#gid=0"
* group.element[0].code = #HD.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"IS"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Namespace ID"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #value[1]
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "value[1]"
* group.element[1].code = #HD.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Universal ID"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #value[2]
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "value[2]"
* group.element[2].code = #HD.3
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ID"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Universal ID Type"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #type[2]
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"CodeableConcept"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "type[2]"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype HD to Location.fsh

// HL7 Data Type - FHIR R4_ HD[Location] - Sheet1.csv
Instance: DatatypeHDToLocation
InstanceOf: ConceptMap
Title: "Datatype HD to Location Map"
* title = "Datatype HD to Location Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype HD to the FHIR Location Resource."
* id = "datatype-hd-to-location"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-hd-to-location"
* version = "1.0"
* name = "DatatypeHDToLocation"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "HD"
* targetUri = "Location"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype HD to Location.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/126xjG_YCcKYzO7f10dtlBOBUMNZZXkteoE2zNu-_J40/edit#gid=0"
* group.element[0].code = #HD.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"IS"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Namespace ID"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #name
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "name"
* group.element[1].code = #HD.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Universal ID"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #identifier.value
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "identifier.value"
* group.element[2].code = #HD.2
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ST"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Universal ID"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #physicalType.coding.code
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"code"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "physicalType.coding.code"
* group.element[3].code = #HD.2
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ST"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Universal ID"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #physicalType.coding.system
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"uri"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "physicalType.coding.system"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype HD to Organization.fsh

// HL7 Data Type - FHIR R4_ HD[Organization] - Sheet1.csv
Instance: DatatypeHDToOrganization
InstanceOf: ConceptMap
Title: "Datatype HD to Organization Map"
* title = "Datatype HD to Organization Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype HD to the FHIR Organization Resource."
* id = "datatype-hd-to-organization"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-hd-to-organization"
* version = "1.0"
* name = "DatatypeHDToOrganization"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "HD"
* targetUri = "Organization"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype HD to Organization.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1zLANrSl_qRMGtJED5BnklU9EipB4xeU4rgmtr03hbIA/edit#gid=0"
* group.element[0].code = #HD.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"IS"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Namespace ID"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #identifier[1].value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.display = "identifier[1].value"
* group.element[0].target.comment = "Need gForge (#20522) to change MessageHeader.destination.endpoint from 1..1 to 0..1.  Must be a reachable address."
* group.element[1].code = #HD.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Universal ID"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #identifier[2].value
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.display = "identifier[2].value"
* group.element[2].code = #HD.3
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ID"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Universal ID Type"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #identifier[2].type
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"CodeableConcept"
* group.element[2].target.display = "identifier[2].type"
* group.element[2].target.comment = "Request that DNS, ISO, and UUID (and other Table 0301 values) are added to: http://hl7.org/fhir/valueset-identifier-type.html"
* group.element[3].code = #HD.3
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ID"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Universal ID Type"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #identifier[2].system
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"uri"
* group.element[3].target.display = "identifier[2].system"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype HD to uri.fsh

// HL7 Data Type - FHIR R4_ HD[uri] - Sheet1.csv
Instance: DatatypeHDToUri
InstanceOf: ConceptMap
Title: "Datatype HD to uri Map"
* title = "Datatype HD to uri Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype HD to the FHIR uri Data Type."
* id = "datatype-hd-to-uri"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-hd-to-uri"
* version = "1.0"
* name = "DatatypeHDToUri"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "HD"
* targetUri = "uri"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype HD to uri.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1geX7fy4NBWzKR3gxwYCuG8DtlzY-W8Yp6fu9r2Qnpxo/edit#gid=0"
* group.element[0].code = #HD.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"IS"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Namespace ID"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #$value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"url"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "$value"
* group.element[1].code = #HD.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Universal ID"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #$value
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"url"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "$value"
* group.element[2].code = #HD.2
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ST"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Universal ID"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #$value
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"url"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "$value"
* group.element[3].code = #HD.2
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ST"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Universal ID"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #$value
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"url"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "$value"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype HD[endpoint] to MessageHeader.destination.fsh

// HL7 Data Type - FHIR R4_ HD[MessageHeader.destination-endpoint] - Sheet1.csv
Instance: DatatypeHDEndpointToMessageHeaderDestination
InstanceOf: ConceptMap
Title: "Datatype HD to MessageHeader.destination Map"
* title = "Datatype HD to MessageHeader.destination Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype HD to the FHIR MessageHeader.destination Data Type."
* id = "datatype-hd-endpoint-to-messageheader-destination"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-hd-endpoint-to-messageheader-destination"
* version = "1.0"
* name = "DatatypeHDEndpointToMessageHeaderDestination"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "HD"
* targetUri = "MessageHeader.destination"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype HD[endpoint] to MessageHeader.destination.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1T99UdnCSjoGpbamAvfVEZMDN5wKRtc0gUlWZ0ufRd6c/edit#gid=0"
* group.element[0].code = #HD.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"IS"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Namespace ID"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #name
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.display = "name"
* group.element[0].target.comment = "Not sure whether used, and if used, what a reasonable extension name would be.  We believe that source.endpoint should be Universal ID when both Namespace ID and Universal ID are valued."
* group.element[1].code = #HD.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Universal ID"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #endpoint
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"uri"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "endpoint"
* group.element[2].code = #HD.2
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ST"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Universal ID"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #endpoint
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"uri"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "endpoint"
* group.element[3].code = #HD.2
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ST"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Universal ID"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #endpoint
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"uri"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "endpoint"
* group.element[4].code = #HD.3
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"ST"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 0
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Univeral ID Type"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #endpoint.extension.url
* group.element[4].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].target.extension[0].extension[0].url = "type"
* group.element[4].target.extension[0].extension[0].valueCode = #"uri"
* group.element[4].target.display = "endpoint.extension.url"
* group.element[5].code = #HD.3
* group.element[5].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].extension[0].extension[0].url = "type"
* group.element[5].extension[0].extension[0].valueCode = #"ST"
* group.element[5].extension[0].extension[1].url = "cardinalityMin"
* group.element[5].extension[0].extension[1].valueInteger = 0
* group.element[5].extension[0].extension[2].url = "cardinalityMax"
* group.element[5].extension[0].extension[2].valueInteger = 1
* group.element[5].display = "Univeral ID Type"
* group.element[5].target.equivalence = #equivalent
* group.element[5].target.code = #endpoint.extension.valueCode
* group.element[5].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].target.extension[0].extension[0].url = "type"
* group.element[5].target.extension[0].extension[0].valueCode = #"code"
* group.element[5].target.display = "endpoint.extension.valueCode"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype HD[endpoint] to MessageHeader.source.fsh

// HL7 Data Type - FHIR R4_ HD[MessageHeader.source-endpoint] - Sheet1.csv
Instance: DatatypeHDEndpointToMessageHeaderSource
InstanceOf: ConceptMap
Title: "Datatype HD to MessageHeader.source Map"
* title = "Datatype HD to MessageHeader.source Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype HD to the FHIR MessageHeader.source Data Type."
* id = "datatype-hd-endpoint-to-messageheader-source"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-hd-endpoint-to-messageheader-source"
* version = "1.0"
* name = "DatatypeHDEndpointToMessageHeaderSource"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "HD"
* targetUri = "MessageHeader.source"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype HD[endpoint] to MessageHeader.source.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/18o2QLSHQPkRr1S0vax7G4tuuXQnhE9wJl0n1kjupS7U/edit#gid=0"
* group.element[0].code = #HD.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"IS"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Namespace ID"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #name
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.display = "name"
* group.element[1].code = #HD.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Universal ID"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #endpoint
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"uri"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "endpoint"
* group.element[2].code = #HD.2
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ST"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Universal ID"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #endpoint
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"uri"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "endpoint"
* group.element[3].code = #HD.2
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ST"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Universal ID"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #endpoint
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"uri"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "endpoint"
* group.element[4].code = #HD.2
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"ST"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 0
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Universal ID"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #endpoint
* group.element[4].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].target.extension[0].extension[0].url = "type"
* group.element[4].target.extension[0].extension[0].valueCode = #"uri"
* group.element[4].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[4].target.extension[0].extension[1].valueInteger = 1
* group.element[4].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[4].target.extension[0].extension[2].valueInteger = 1
* group.element[4].target.display = "endpoint"
* group.element[5].code = #HD.2
* group.element[5].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].extension[0].extension[0].url = "type"
* group.element[5].extension[0].extension[0].valueCode = #"ST"
* group.element[5].extension[0].extension[1].url = "cardinalityMin"
* group.element[5].extension[0].extension[1].valueInteger = 0
* group.element[5].extension[0].extension[2].url = "cardinalityMax"
* group.element[5].extension[0].extension[2].valueInteger = 1
* group.element[5].display = "Universal ID"
* group.element[5].target.equivalence = #equivalent
* group.element[5].target.code = #name
* group.element[5].target.display = "name"
* group.element[6].code = #HD.3
* group.element[6].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].extension[0].extension[0].url = "type"
* group.element[6].extension[0].extension[0].valueCode = #"ST"
* group.element[6].extension[0].extension[1].url = "cardinalityMin"
* group.element[6].extension[0].extension[1].valueInteger = 0
* group.element[6].extension[0].extension[2].url = "cardinalityMax"
* group.element[6].extension[0].extension[2].valueInteger = 1
* group.element[6].display = "Univeral ID Type"
* group.element[6].target.equivalence = #equivalent
* group.element[6].target.code = #endpoint.extension[1].url
* group.element[6].target.display = "endpoint.extension[1].url"
* group.element[7].code = #HD.3
* group.element[7].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].extension[0].extension[0].url = "type"
* group.element[7].extension[0].extension[0].valueCode = #"ST"
* group.element[7].extension[0].extension[1].url = "cardinalityMin"
* group.element[7].extension[0].extension[1].valueInteger = 0
* group.element[7].extension[0].extension[2].url = "cardinalityMax"
* group.element[7].extension[0].extension[2].valueInteger = 1
* group.element[7].display = "Univeral ID Type"
* group.element[7].target.equivalence = #equivalent
* group.element[7].target.code = #endpoint.extension[1].valueCode
* group.element[7].target.display = "endpoint.extension[1].valueCode"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype HD[name] to MessageHeader.destination.fsh

// HL7 Data Type - FHIR R4_ HD[MessageHeader.destination-name] - Sheet1.csv
Instance: DatatypeHDNameToMessageHeaderDestination
InstanceOf: ConceptMap
Title: "Datatype HD to MessageHeader.destination Map"
* title = "Datatype HD to MessageHeader.destination Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype HD to the FHIR MessageHeader.destination Data Type."
* id = "datatype-hd-name-to-messageheader-destination"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-hd-name-to-messageheader-destination"
* version = "1.0"
* name = "DatatypeHDNameToMessageHeaderDestination"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "HD"
* targetUri = "MessageHeader.destination"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype HD[name] to MessageHeader.destination.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1MZ2k1XgrAcvf4KCxSx_2bKwrdtOZHQDvKgCmXwrDUqY/edit#gid=0"
* group.element[0].code = #HD.2
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Universal ID"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #name
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.display = "name"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype HD[name] to MessageHeader.source.fsh

// HL7 Data Type - FHIR R4_ HD[MessageHeader.source-name] - Sheet1.csv
Instance: DatatypeHDNameToMessageHeaderSource
InstanceOf: ConceptMap
Title: "Datatype HD to MessageHeader.source Map"
* title = "Datatype HD to MessageHeader.source Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype HD to the FHIR MessageHeader.source Data Type."
* id = "datatype-hd-name-to-messageheader-source"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-hd-name-to-messageheader-source"
* version = "1.0"
* name = "DatatypeHDNameToMessageHeaderSource"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "HD"
* targetUri = "MessageHeader.source"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype HD[name] to MessageHeader.source.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1IOOZxQ8rqWsm1zlWNJPLy91rAdFiTTbLJcFLfa_hN18/edit#gid=0"
* group.element[0].code = #HD.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"IS"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Namespace ID"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #name
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.display = "name"
* group.element[1].code = #HD.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Universal ID"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #software
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.display = "software"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype ID to boolean.fsh

// HL7 Data Type - FHIR R4_ ID[boolean] - Sheet1.csv
Instance: DatatypeIDToBoolean
InstanceOf: ConceptMap
Title: "Datatype ID to boolean Map"
* title = "Datatype ID to boolean Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype ID to the FHIR boolean Data Type."
* id = "datatype-id-to-boolean"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-id-to-boolean"
* version = "1.0"
* name = "DatatypeIDToBoolean"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "ID"
* targetUri = "boolean"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype ID to boolean.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/12tPvyla2Ion3sHXGxbbX3OdLpKI8BYpHfsuUKIuqHvk/edit#gid=0"
* group.element[0].code = #ID.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "cardinalityMin"
* group.element[0].extension[0].extension[0].valueInteger = 1
* group.element[0].extension[0].extension[1].url = "cardinalityMax"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #$value
* group.element[0].target.display = "$value"
* group.element[0].target.comment = "Note that the vocabulary mapping is done at the segment's field level."


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype ID to code.fsh

// HL7 Data Type - FHIR R4_ ID[code] - Sheet1.csv
Instance: DatatypeIDToCode
InstanceOf: ConceptMap
Title: "Datatype ID to code Map"
* title = "Datatype ID to code Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype ID to the FHIR code Data Type."
* id = "datatype-id-to-code"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-id-to-code"
* version = "1.0"
* name = "DatatypeIDToCode"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "ID"
* targetUri = "code"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype ID to code.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1ymA-PgLgEKGCJjE8wi11exeKKhersWoHt96YGxUkrlU/edit#gid=0"
* group.element[0].code = #ID.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "cardinalityMin"
* group.element[0].extension[0].extension[0].valueInteger = 1
* group.element[0].extension[0].extension[1].url = "cardinalityMax"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #$value
* group.element[0].target.display = "$value"
* group.element[0].target.comment = "Note that the vocabulary mapping is done at the segment's field level."


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype ID to CodeableConcept.fsh

// HL7 Data Type - FHIR R4_ ID[CodeableConcept] - Sheet1.csv
Instance: DatatypeIDToCodeableConcept
InstanceOf: ConceptMap
Title: "Datatype ID to CodeableConcept Map"
* title = "Datatype ID to CodeableConcept Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype ID to the FHIR CodeableConcept Data Type."
* id = "datatype-id-to-codeableconcept"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-id-to-codeableconcept"
* version = "1.0"
* name = "DatatypeIDToCodeableConcept"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "ID"
* targetUri = "CodeableConcept"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype ID to CodeableConcept.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1lKNOp9adRZq86xYTl1U_VtsIr4qTUmETR2sU3S9Ie8M/edit#gid=0"
* group.element[0].code = #ID.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #coding.code
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"code"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "coding.code"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype ID to Coding.fsh

// HL7 Data Type - FHIR R4_ ID[Coding] - Sheet1.csv
Instance: DatatypeIDToCoding
InstanceOf: ConceptMap
Title: "Datatype ID to Coding Map"
* title = "Datatype ID to Coding Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype ID to the FHIR Coding Data Type."
* id = "datatype-id-to-coding"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-id-to-coding"
* version = "1.0"
* name = "DatatypeIDToCoding"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "ID"
* targetUri = "Coding"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype ID to Coding.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1DR9Rw8yw4F4RhbpHd0RE9ng-KLTb81RmuTOxTgVcaVc/edit#gid=0"
* group.element[0].code = #ID.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #code
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"code"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "code"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype ID to string.fsh

// HL7 Data Type - FHIR R4_ ID[string] - Sheet1.csv
Instance: DatatypeIDToString
InstanceOf: ConceptMap
Title: "Datatype ID to string Map"
* title = "Datatype ID to string Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype ID to the FHIR string Data Type."
* id = "datatype-id-to-string"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-id-to-string"
* version = "1.0"
* name = "DatatypeIDToString"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "ID"
* targetUri = "string"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype ID to string.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1yp6o8IUNiO7IiSe21GU9NJmwAjRTBw87ZUn4TFCTG4s/edit#gid=0"
* group.element[0].code = #ID.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "cardinalityMin"
* group.element[0].extension[0].extension[0].valueInteger = 1
* group.element[0].extension[0].extension[1].url = "cardinalityMax"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #$value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "$value"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype ID[UniversalID] to CodeableConcept.fsh

// HL7 Data Type - FHIR R4_ ID[CodeableConcept-UniversalID] - Sheet1.csv
Instance: DatatypeIDUniversalIDToCodeableConcept
InstanceOf: ConceptMap
Title: "Datatype ID to CodeableConcept Map"
* title = "Datatype ID to CodeableConcept Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype ID to the FHIR CodeableConcept Data Type."
* id = "datatype-id-universalid-to-codeableconcept"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-id-universalid-to-codeableconcept"
* version = "1.0"
* name = "DatatypeIDUniversalIDToCodeableConcept"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "ID"
* targetUri = "CodeableConcept"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype ID[UniversalID] to CodeableConcept.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1YnP5iXEswInGxwYcRjg81HU4ACsjRJPpQVfOzwVRdIg/edit#gid=0"
* group.element[0].code = #ID.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #coding.code
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"code"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "coding.code"
* group.element[1].code = #ID.1
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Identifier"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #coding.system
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"uri"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "coding.system"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype IS to code.fsh

// HL7 Data Type - FHIR R4_ IS[code] - Sheet1.csv
Instance: DatatypeISToCode
InstanceOf: ConceptMap
Title: "Datatype IS to code Map"
* title = "Datatype IS to code Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype IS to the FHIR code Data Type."
* id = "datatype-is-to-code"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-is-to-code"
* version = "1.0"
* name = "DatatypeISToCode"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "IS"
* targetUri = "code"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype IS to code.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/110zIdufyvcKXndEAuYtFE5Ky9RgPFRA8wyy5z_T7eZE/edit#gid=0"
* group.element[0].code = #IS.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "cardinalityMin"
* group.element[0].extension[0].extension[0].valueInteger = 1
* group.element[0].extension[0].extension[1].url = "cardinalityMax"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #$value
* group.element[0].target.display = "$value"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype IS to CodeableConcept.fsh

// HL7 Data Type - FHIR R4_ IS[CodeableConcept] - Sheet1.csv
Instance: DatatypeISToCodeableConcept
InstanceOf: ConceptMap
Title: "Datatype IS to CodeableConcept Map"
* title = "Datatype IS to CodeableConcept Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype IS to the FHIR CodeableConcept Data Type."
* id = "datatype-is-to-codeableconcept"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-is-to-codeableconcept"
* version = "1.0"
* name = "DatatypeISToCodeableConcept"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "IS"
* targetUri = "CodeableConcept"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype IS to CodeableConcept.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1fBH2ZjXa4pzEl8am0-MuY8NOibIh7nn2TkwimzilGaU/edit#gid=0"
* group.element[0].code = #IS.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #coding.code
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"code"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "coding.code"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype IS to string.fsh

// HL7 Data Type - FHIR R4_ IS[string] - Sheet1.csv
Instance: DatatypeISToString
InstanceOf: ConceptMap
Title: "Datatype IS to string Map"
* title = "Datatype IS to string Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype IS to the FHIR string Data Type."
* id = "datatype-is-to-string"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-is-to-string"
* version = "1.0"
* name = "DatatypeISToString"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "IS"
* targetUri = "string"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype IS to string.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1QGUiAHG5X-tdMrfrM9JNPYvdxKzq2NqhM7r26o0sfTE/edit#gid=0"
* group.element[0].code = #IS.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "cardinalityMin"
* group.element[0].extension[0].extension[0].valueInteger = 1
* group.element[0].extension[0].extension[1].url = "cardinalityMax"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #$value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"string"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "$value"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype MSG to code.fsh

// HL7 Data Type - FHIR R4_ MSG[code] - Sheet1.csv
Instance: DatatypeMSGToCode
InstanceOf: ConceptMap
Title: "Datatype MSG to code Map"
* title = "Datatype MSG to code Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype MSG to the FHIR code Data Type."
* id = "datatype-msg-to-code"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-msg-to-code"
* version = "1.0"
* name = "DatatypeMSGToCode"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "MSG"
* targetUri = "code"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype MSG to code.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1MUSwqOQpaBrr_sqAVpsszpYTmy2EuhTTRFLLT-FKL7A/edit#gid=0"
* group.element[0].code = #MSG.2
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ID"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Trigger Event"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #$this
* group.element[0].target.display = "$this"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype MSG to Coding.fsh

// HL7 Data Type - FHIR R4_ MSG[Coding] - Sheet1.csv
Instance: DatatypeMSGToCoding
InstanceOf: ConceptMap
Title: "Datatype MSG to Coding Map"
* title = "Datatype MSG to Coding Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype MSG to the FHIR Coding Data Type."
* id = "datatype-msg-to-coding"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-msg-to-coding"
* version = "1.0"
* name = "DatatypeMSGToCoding"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "MSG"
* targetUri = "Coding"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype MSG to Coding.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1_JTzM3A-qTbPJfspjEO-VB0Bmx3zoxQz_E2mKUAB4lM/edit#gid=0"
* group.element[0].code = #MSG
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #display
* group.element[0].target.display = "display"
* group.element[1].code = #MSG.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ID"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 1
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Trigger Event"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #code
* group.element[1].target.display = "code"
* group.element[2].code = #MSG.2
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ID"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 1
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Trigger Event"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #system
* group.element[2].target.display = "system"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype MSG to MessageHeader.fsh

// HL7 Data Type - FHIR R4_ MSG[MessageHeader] - Sheet1.csv
Instance: DatatypeMSGToMessageHeader
InstanceOf: ConceptMap
Title: "Datatype MSG to MessageHeader Map"
* title = "Datatype MSG to MessageHeader Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype MSG to the FHIR MessageHeader Resource."
* id = "datatype-msg-to-messageheader"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-msg-to-messageheader"
* version = "1.0"
* name = "DatatypeMSGToMessageHeader"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "MSG"
* targetUri = "MessageHeader"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype MSG to MessageHeader.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1appiDYpk63FqFSOU7wuR2rmvTTffeBJGXKDDVDRdWTY/edit#gid=0"
* group.element[0].code = #MSG.2
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ID"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Trigger Event"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #eventCoding.code
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"code"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "eventCoding.code"
* group.element[1].code = #MSG.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ID"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 1
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Trigger Event"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #eventCoding.system
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"uri"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "eventCoding.system"
* group.element[2].code = #MSG.3
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ID"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 1
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Message Structure"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #definition
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"canonical"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "definition"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype NA to NumericArray.fsh

// HL7 Data Type - FHIR R4_ NA[NumericArray] - Sheet1.csv
Instance: DatatypeNAToNumericArray
InstanceOf: ConceptMap
Title: "Datatype NA to NumericArray Map"
* title = "Datatype NA to NumericArray Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype NA to the FHIR NumericArray Data Type."
* id = "datatype-na-to-numericarray"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-na-to-numericarray"
* version = "1.0"
* name = "DatatypeNAToNumericArray"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "NA"
* targetUri = "NumericArray"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype NA to NumericArray.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1EpipDfc7vCbZO1yq8d9O5FDxEk9aInAld3u9ldaie8Y/edit#gid=0"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype NDL to PractitionerRole.fsh

// HL7 Data Type - FHIR R4_ NDL[PractitionerRole] - Sheet1.csv
Instance: DatatypeNDLToPractitionerRole
InstanceOf: ConceptMap
Title: "Datatype NDL to PractitionerRole Map"
* title = "Datatype NDL to PractitionerRole Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype NDL to the FHIR PractitionerRole Resource."
* id = "datatype-ndl-to-practitionerrole"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-ndl-to-practitionerrole"
* version = "1.0"
* name = "DatatypeNDLToPractitionerRole"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "NDL"
* targetUri = "PractitionerRole"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype NDL to PractitionerRole.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/11OXFdsd0KLUaUQRmYawlszF5dcRZQ6CGJudPaBFTmPM/edit#gid=0"
* group.element[0].code = #NDL.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"CNN"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Name"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #practitioner(Practitioner)
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"Reference(Practitioner)"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "practitioner(Practitioner)"
* group.element[1].code = #NDL.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"DTM"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Start Date/time"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #period.start
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"dateTime"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "period.start"
* group.element[2].code = #NDL.3
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"DTM"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "End Date/time"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #period.end
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"dateTime"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "period.end"
* group.element[3].code = #NDL.4
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"IS"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Point of Care"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #[1].identifier
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[3].target.display = "[1].identifier"
* group.element[4].code = #NDL.4
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"IS"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 0
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Point of Care"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #[1].mode
* group.element[4].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].target.extension[0].extension[0].url = "type"
* group.element[4].target.extension[0].extension[0].valueCode = #"code"
* group.element[4].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[4].target.extension[0].extension[1].valueInteger = 1
* group.element[4].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[4].target.extension[0].extension[2].valueInteger = 1
* group.element[4].target.display = "[1].mode"
* group.element[5].code = #NDL.4
* group.element[5].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].extension[0].extension[0].url = "type"
* group.element[5].extension[0].extension[0].valueCode = #"IS"
* group.element[5].extension[0].extension[1].url = "cardinalityMin"
* group.element[5].extension[0].extension[1].valueInteger = 0
* group.element[5].extension[0].extension[2].url = "cardinalityMax"
* group.element[5].extension[0].extension[2].valueInteger = 1
* group.element[5].display = "Point of Care"
* group.element[5].target.equivalence = #equivalent
* group.element[5].target.code = #[1].physicalType.coding.code
* group.element[5].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].target.extension[0].extension[0].url = "type"
* group.element[5].target.extension[0].extension[0].valueCode = #"code"
* group.element[5].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[5].target.extension[0].extension[1].valueInteger = 1
* group.element[5].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[5].target.extension[0].extension[2].valueInteger = 1
* group.element[5].target.display = "[1].physicalType.coding.code"
* group.element[6].code = #NDL.4
* group.element[6].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].extension[0].extension[0].url = "type"
* group.element[6].extension[0].extension[0].valueCode = #"IS"
* group.element[6].extension[0].extension[1].url = "cardinalityMin"
* group.element[6].extension[0].extension[1].valueInteger = 0
* group.element[6].extension[0].extension[2].url = "cardinalityMax"
* group.element[6].extension[0].extension[2].valueInteger = 1
* group.element[6].display = "Point of Care"
* group.element[6].target.equivalence = #equivalent
* group.element[6].target.code = #[1].physicalType.coding.system
* group.element[6].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].target.extension[0].extension[0].url = "type"
* group.element[6].target.extension[0].extension[0].valueCode = #"uri"
* group.element[6].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[6].target.extension[0].extension[1].valueInteger = 1
* group.element[6].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[6].target.extension[0].extension[2].valueInteger = 1
* group.element[6].target.display = "[1].physicalType.coding.system"
* group.element[7].code = #NDL.4
* group.element[7].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].extension[0].extension[0].url = "type"
* group.element[7].extension[0].extension[0].valueCode = #"IS"
* group.element[7].extension[0].extension[1].url = "cardinalityMin"
* group.element[7].extension[0].extension[1].valueInteger = 0
* group.element[7].extension[0].extension[2].url = "cardinalityMax"
* group.element[7].extension[0].extension[2].valueInteger = 1
* group.element[7].display = "Point of Care"
* group.element[7].target.equivalence = #equivalent
* group.element[7].target.code = #[1].partOf.reference(Location[5])
* group.element[7].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].target.extension[0].extension[0].url = "type"
* group.element[7].target.extension[0].extension[0].valueCode = #"string"
* group.element[7].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[7].target.extension[0].extension[1].valueInteger = 1
* group.element[7].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[7].target.extension[0].extension[2].valueInteger = 1
* group.element[7].target.display = "[1].partOf.reference(Location[5])"
* group.element[8].code = #NDL.5
* group.element[8].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].extension[0].extension[0].url = "type"
* group.element[8].extension[0].extension[0].valueCode = #"IS"
* group.element[8].extension[0].extension[1].url = "cardinalityMin"
* group.element[8].extension[0].extension[1].valueInteger = 0
* group.element[8].extension[0].extension[2].url = "cardinalityMax"
* group.element[8].extension[0].extension[2].valueInteger = 1
* group.element[8].display = "Room"
* group.element[8].target.equivalence = #equivalent
* group.element[8].target.code = #[2].identifier
* group.element[8].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].target.extension[0].extension[0].url = "type"
* group.element[8].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[8].target.display = "[2].identifier"
* group.element[9].code = #NDL.5
* group.element[9].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[9].extension[0].extension[0].url = "type"
* group.element[9].extension[0].extension[0].valueCode = #"IS"
* group.element[9].extension[0].extension[1].url = "cardinalityMin"
* group.element[9].extension[0].extension[1].valueInteger = 0
* group.element[9].extension[0].extension[2].url = "cardinalityMax"
* group.element[9].extension[0].extension[2].valueInteger = 1
* group.element[9].display = "Room"
* group.element[9].target.equivalence = #equivalent
* group.element[9].target.code = #[2].mode
* group.element[9].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[9].target.extension[0].extension[0].url = "type"
* group.element[9].target.extension[0].extension[0].valueCode = #"code"
* group.element[9].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[9].target.extension[0].extension[1].valueInteger = 1
* group.element[9].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[9].target.extension[0].extension[2].valueInteger = 1
* group.element[9].target.display = "[2].mode"
* group.element[10].code = #NDL.5
* group.element[10].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[10].extension[0].extension[0].url = "type"
* group.element[10].extension[0].extension[0].valueCode = #"IS"
* group.element[10].extension[0].extension[1].url = "cardinalityMin"
* group.element[10].extension[0].extension[1].valueInteger = 0
* group.element[10].extension[0].extension[2].url = "cardinalityMax"
* group.element[10].extension[0].extension[2].valueInteger = 1
* group.element[10].display = "Room"
* group.element[10].target.equivalence = #equivalent
* group.element[10].target.code = #[2].physicalType.coding.code
* group.element[10].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[10].target.extension[0].extension[0].url = "type"
* group.element[10].target.extension[0].extension[0].valueCode = #"code"
* group.element[10].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[10].target.extension[0].extension[1].valueInteger = 1
* group.element[10].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[10].target.extension[0].extension[2].valueInteger = 1
* group.element[10].target.display = "[2].physicalType.coding.code"
* group.element[11].code = #NDL.5
* group.element[11].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[11].extension[0].extension[0].url = "type"
* group.element[11].extension[0].extension[0].valueCode = #"IS"
* group.element[11].extension[0].extension[1].url = "cardinalityMin"
* group.element[11].extension[0].extension[1].valueInteger = 0
* group.element[11].extension[0].extension[2].url = "cardinalityMax"
* group.element[11].extension[0].extension[2].valueInteger = 1
* group.element[11].display = "Room"
* group.element[11].target.equivalence = #equivalent
* group.element[11].target.code = #[2].physicalType.coding.system
* group.element[11].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[11].target.extension[0].extension[0].url = "type"
* group.element[11].target.extension[0].extension[0].valueCode = #"uri"
* group.element[11].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[11].target.extension[0].extension[1].valueInteger = 1
* group.element[11].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[11].target.extension[0].extension[2].valueInteger = 1
* group.element[11].target.display = "[2].physicalType.coding.system"
* group.element[12].code = #NDL.5
* group.element[12].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[12].extension[0].extension[0].url = "type"
* group.element[12].extension[0].extension[0].valueCode = #"IS"
* group.element[12].extension[0].extension[1].url = "cardinalityMin"
* group.element[12].extension[0].extension[1].valueInteger = 0
* group.element[12].extension[0].extension[2].url = "cardinalityMax"
* group.element[12].extension[0].extension[2].valueInteger = 1
* group.element[12].display = "Room"
* group.element[12].target.equivalence = #equivalent
* group.element[12].target.code = #[2].partOf.reference(Location[1])
* group.element[12].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[12].target.extension[0].extension[0].url = "type"
* group.element[12].target.extension[0].extension[0].valueCode = #"string"
* group.element[12].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[12].target.extension[0].extension[1].valueInteger = 1
* group.element[12].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[12].target.extension[0].extension[2].valueInteger = 1
* group.element[12].target.display = "[2].partOf.reference(Location[1])"
* group.element[13].code = #NDL.6
* group.element[13].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[13].extension[0].extension[0].url = "type"
* group.element[13].extension[0].extension[0].valueCode = #"IS"
* group.element[13].extension[0].extension[1].url = "cardinalityMin"
* group.element[13].extension[0].extension[1].valueInteger = 0
* group.element[13].extension[0].extension[2].url = "cardinalityMax"
* group.element[13].extension[0].extension[2].valueInteger = 1
* group.element[13].display = "Bed"
* group.element[13].target.equivalence = #equivalent
* group.element[13].target.code = #[3].identifier
* group.element[13].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[13].target.extension[0].extension[0].url = "type"
* group.element[13].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[13].target.display = "[3].identifier"
* group.element[14].code = #NDL.6
* group.element[14].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[14].extension[0].extension[0].url = "type"
* group.element[14].extension[0].extension[0].valueCode = #"IS"
* group.element[14].extension[0].extension[1].url = "cardinalityMin"
* group.element[14].extension[0].extension[1].valueInteger = 0
* group.element[14].extension[0].extension[2].url = "cardinalityMax"
* group.element[14].extension[0].extension[2].valueInteger = 1
* group.element[14].display = "Bed"
* group.element[14].target.equivalence = #equivalent
* group.element[14].target.code = #[3].mode
* group.element[14].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[14].target.extension[0].extension[0].url = "type"
* group.element[14].target.extension[0].extension[0].valueCode = #"code"
* group.element[14].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[14].target.extension[0].extension[1].valueInteger = 1
* group.element[14].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[14].target.extension[0].extension[2].valueInteger = 1
* group.element[14].target.display = "[3].mode"
* group.element[15].code = #NDL.6
* group.element[15].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[15].extension[0].extension[0].url = "type"
* group.element[15].extension[0].extension[0].valueCode = #"IS"
* group.element[15].extension[0].extension[1].url = "cardinalityMin"
* group.element[15].extension[0].extension[1].valueInteger = 0
* group.element[15].extension[0].extension[2].url = "cardinalityMax"
* group.element[15].extension[0].extension[2].valueInteger = 1
* group.element[15].display = "Bed"
* group.element[15].target.equivalence = #equivalent
* group.element[15].target.code = #[3].physicalType.coding.code
* group.element[15].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[15].target.extension[0].extension[0].url = "type"
* group.element[15].target.extension[0].extension[0].valueCode = #"code"
* group.element[15].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[15].target.extension[0].extension[1].valueInteger = 1
* group.element[15].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[15].target.extension[0].extension[2].valueInteger = 1
* group.element[15].target.display = "[3].physicalType.coding.code"
* group.element[16].code = #NDL.6
* group.element[16].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[16].extension[0].extension[0].url = "type"
* group.element[16].extension[0].extension[0].valueCode = #"IS"
* group.element[16].extension[0].extension[1].url = "cardinalityMin"
* group.element[16].extension[0].extension[1].valueInteger = 0
* group.element[16].extension[0].extension[2].url = "cardinalityMax"
* group.element[16].extension[0].extension[2].valueInteger = 1
* group.element[16].display = "Bed"
* group.element[16].target.equivalence = #equivalent
* group.element[16].target.code = #[3].physicalType.coding.system
* group.element[16].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[16].target.extension[0].extension[0].url = "type"
* group.element[16].target.extension[0].extension[0].valueCode = #"uri"
* group.element[16].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[16].target.extension[0].extension[1].valueInteger = 1
* group.element[16].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[16].target.extension[0].extension[2].valueInteger = 1
* group.element[16].target.display = "[3].physicalType.coding.system"
* group.element[17].code = #NDL.6
* group.element[17].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[17].extension[0].extension[0].url = "type"
* group.element[17].extension[0].extension[0].valueCode = #"IS"
* group.element[17].extension[0].extension[1].url = "cardinalityMin"
* group.element[17].extension[0].extension[1].valueInteger = 0
* group.element[17].extension[0].extension[2].url = "cardinalityMax"
* group.element[17].extension[0].extension[2].valueInteger = 1
* group.element[17].display = "Bed"
* group.element[17].target.equivalence = #equivalent
* group.element[17].target.code = #[3].partOf.reference(Location[2])
* group.element[17].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[17].target.extension[0].extension[0].url = "type"
* group.element[17].target.extension[0].extension[0].valueCode = #"string"
* group.element[17].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[17].target.extension[0].extension[1].valueInteger = 1
* group.element[17].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[17].target.extension[0].extension[2].valueInteger = 1
* group.element[17].target.display = "[3].partOf.reference(Location[2])"
* group.element[18].code = #NDL.7
* group.element[18].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[18].extension[0].extension[0].url = "type"
* group.element[18].extension[0].extension[0].valueCode = #"HD"
* group.element[18].extension[0].extension[1].url = "cardinalityMin"
* group.element[18].extension[0].extension[1].valueInteger = 0
* group.element[18].extension[0].extension[2].url = "cardinalityMax"
* group.element[18].extension[0].extension[2].valueInteger = 1
* group.element[18].display = "Facility"
* group.element[18].target.equivalence = #equivalent
* group.element[18].target.code = #[4].identifier
* group.element[18].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[18].target.extension[0].extension[0].url = "type"
* group.element[18].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[18].target.display = "[4].identifier"
* group.element[19].code = #NDL.7
* group.element[19].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[19].extension[0].extension[0].url = "type"
* group.element[19].extension[0].extension[0].valueCode = #"HD"
* group.element[19].extension[0].extension[1].url = "cardinalityMin"
* group.element[19].extension[0].extension[1].valueInteger = 0
* group.element[19].extension[0].extension[2].url = "cardinalityMax"
* group.element[19].extension[0].extension[2].valueInteger = 1
* group.element[19].display = "Facility"
* group.element[19].target.equivalence = #equivalent
* group.element[19].target.code = #[4].mode
* group.element[19].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[19].target.extension[0].extension[0].url = "type"
* group.element[19].target.extension[0].extension[0].valueCode = #"code"
* group.element[19].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[19].target.extension[0].extension[1].valueInteger = 1
* group.element[19].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[19].target.extension[0].extension[2].valueInteger = 1
* group.element[19].target.display = "[4].mode"
* group.element[20].code = #NDL.7
* group.element[20].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[20].extension[0].extension[0].url = "type"
* group.element[20].extension[0].extension[0].valueCode = #"HD"
* group.element[20].extension[0].extension[1].url = "cardinalityMin"
* group.element[20].extension[0].extension[1].valueInteger = 0
* group.element[20].extension[0].extension[2].url = "cardinalityMax"
* group.element[20].extension[0].extension[2].valueInteger = 1
* group.element[20].display = "Facility"
* group.element[20].target.equivalence = #equivalent
* group.element[20].target.code = #[4].physicalType.coding.code
* group.element[20].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[20].target.extension[0].extension[0].url = "type"
* group.element[20].target.extension[0].extension[0].valueCode = #"code"
* group.element[20].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[20].target.extension[0].extension[1].valueInteger = 1
* group.element[20].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[20].target.extension[0].extension[2].valueInteger = 1
* group.element[20].target.display = "[4].physicalType.coding.code"
* group.element[21].code = #NDL.7
* group.element[21].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[21].extension[0].extension[0].url = "type"
* group.element[21].extension[0].extension[0].valueCode = #"HD"
* group.element[21].extension[0].extension[1].url = "cardinalityMin"
* group.element[21].extension[0].extension[1].valueInteger = 0
* group.element[21].extension[0].extension[2].url = "cardinalityMax"
* group.element[21].extension[0].extension[2].valueInteger = 1
* group.element[21].display = "Facility"
* group.element[21].target.equivalence = #equivalent
* group.element[21].target.code = #[4].physicalType.coding.system
* group.element[21].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[21].target.extension[0].extension[0].url = "type"
* group.element[21].target.extension[0].extension[0].valueCode = #"uri"
* group.element[21].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[21].target.extension[0].extension[1].valueInteger = 1
* group.element[21].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[21].target.extension[0].extension[2].valueInteger = 1
* group.element[21].target.display = "[4].physicalType.coding.system"
* group.element[22].code = #NDL.8
* group.element[22].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[22].extension[0].extension[0].url = "type"
* group.element[22].extension[0].extension[0].valueCode = #"IS"
* group.element[22].extension[0].extension[1].url = "cardinalityMin"
* group.element[22].extension[0].extension[1].valueInteger = 0
* group.element[22].extension[0].extension[2].url = "cardinalityMax"
* group.element[22].extension[0].extension[2].valueInteger = 1
* group.element[22].display = "Location Status"
* group.element[22].target.equivalence = #equivalent
* group.element[22].target.code = #[1].status
* group.element[22].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[22].target.extension[0].extension[0].url = "cardinalityMin"
* group.element[22].target.extension[0].extension[0].valueInteger = 1
* group.element[22].target.extension[0].extension[1].url = "cardinalityMax"
* group.element[22].target.extension[0].extension[1].valueInteger = 1
* group.element[22].target.display = "[1].status"
* group.element[23].code = #NDL.8
* group.element[23].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[23].extension[0].extension[0].url = "type"
* group.element[23].extension[0].extension[0].valueCode = #"IS"
* group.element[23].extension[0].extension[1].url = "cardinalityMin"
* group.element[23].extension[0].extension[1].valueInteger = 0
* group.element[23].extension[0].extension[2].url = "cardinalityMax"
* group.element[23].extension[0].extension[2].valueInteger = 1
* group.element[23].display = "Location Status"
* group.element[23].target.equivalence = #equivalent
* group.element[23].target.code = #[2].status
* group.element[23].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[23].target.extension[0].extension[0].url = "cardinalityMin"
* group.element[23].target.extension[0].extension[0].valueInteger = 1
* group.element[23].target.extension[0].extension[1].url = "cardinalityMax"
* group.element[23].target.extension[0].extension[1].valueInteger = 1
* group.element[23].target.display = "[2].status"
* group.element[24].code = #NDL.8
* group.element[24].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[24].extension[0].extension[0].url = "type"
* group.element[24].extension[0].extension[0].valueCode = #"IS"
* group.element[24].extension[0].extension[1].url = "cardinalityMin"
* group.element[24].extension[0].extension[1].valueInteger = 0
* group.element[24].extension[0].extension[2].url = "cardinalityMax"
* group.element[24].extension[0].extension[2].valueInteger = 1
* group.element[24].display = "Location Status"
* group.element[24].target.equivalence = #equivalent
* group.element[24].target.code = #[3].status
* group.element[24].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[24].target.extension[0].extension[0].url = "cardinalityMin"
* group.element[24].target.extension[0].extension[0].valueInteger = 1
* group.element[24].target.extension[0].extension[1].url = "cardinalityMax"
* group.element[24].target.extension[0].extension[1].valueInteger = 1
* group.element[24].target.display = "[3].status"
* group.element[25].code = #NDL.8
* group.element[25].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[25].extension[0].extension[0].url = "type"
* group.element[25].extension[0].extension[0].valueCode = #"IS"
* group.element[25].extension[0].extension[1].url = "cardinalityMin"
* group.element[25].extension[0].extension[1].valueInteger = 0
* group.element[25].extension[0].extension[2].url = "cardinalityMax"
* group.element[25].extension[0].extension[2].valueInteger = 1
* group.element[25].display = "Location Status"
* group.element[25].target.equivalence = #equivalent
* group.element[25].target.code = #[4].status
* group.element[25].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[25].target.extension[0].extension[0].url = "cardinalityMin"
* group.element[25].target.extension[0].extension[0].valueInteger = 1
* group.element[25].target.extension[0].extension[1].url = "cardinalityMax"
* group.element[25].target.extension[0].extension[1].valueInteger = 1
* group.element[25].target.display = "[4].status"
* group.element[26].code = #NDL.8
* group.element[26].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[26].extension[0].extension[0].url = "type"
* group.element[26].extension[0].extension[0].valueCode = #"IS"
* group.element[26].extension[0].extension[1].url = "cardinalityMin"
* group.element[26].extension[0].extension[1].valueInteger = 0
* group.element[26].extension[0].extension[2].url = "cardinalityMax"
* group.element[26].extension[0].extension[2].valueInteger = 1
* group.element[26].display = "Location Status"
* group.element[26].target.equivalence = #equivalent
* group.element[26].target.code = #[5].status
* group.element[26].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[26].target.extension[0].extension[0].url = "cardinalityMin"
* group.element[26].target.extension[0].extension[0].valueInteger = 1
* group.element[26].target.extension[0].extension[1].url = "cardinalityMax"
* group.element[26].target.extension[0].extension[1].valueInteger = 1
* group.element[26].target.display = "[5].status"
* group.element[27].code = #NDL.8
* group.element[27].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[27].extension[0].extension[0].url = "type"
* group.element[27].extension[0].extension[0].valueCode = #"IS"
* group.element[27].extension[0].extension[1].url = "cardinalityMin"
* group.element[27].extension[0].extension[1].valueInteger = 0
* group.element[27].extension[0].extension[2].url = "cardinalityMax"
* group.element[27].extension[0].extension[2].valueInteger = 1
* group.element[27].display = "Location Status"
* group.element[27].target.equivalence = #equivalent
* group.element[27].target.code = #[6].status
* group.element[27].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[27].target.extension[0].extension[0].url = "cardinalityMin"
* group.element[27].target.extension[0].extension[0].valueInteger = 1
* group.element[27].target.extension[0].extension[1].url = "cardinalityMax"
* group.element[27].target.extension[0].extension[1].valueInteger = 1
* group.element[27].target.display = "[6].status"
* group.element[28].code = #NDL.10
* group.element[28].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[28].extension[0].extension[0].url = "type"
* group.element[28].extension[0].extension[0].valueCode = #"IS"
* group.element[28].extension[0].extension[1].url = "cardinalityMin"
* group.element[28].extension[0].extension[1].valueInteger = 0
* group.element[28].extension[0].extension[2].url = "cardinalityMax"
* group.element[28].extension[0].extension[2].valueInteger = 1
* group.element[28].display = "Building"
* group.element[28].target.equivalence = #equivalent
* group.element[28].target.code = #[5].identifier
* group.element[28].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[28].target.extension[0].extension[0].url = "type"
* group.element[28].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[28].target.display = "[5].identifier"
* group.element[29].code = #NDL.10
* group.element[29].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[29].extension[0].extension[0].url = "type"
* group.element[29].extension[0].extension[0].valueCode = #"IS"
* group.element[29].extension[0].extension[1].url = "cardinalityMin"
* group.element[29].extension[0].extension[1].valueInteger = 0
* group.element[29].extension[0].extension[2].url = "cardinalityMax"
* group.element[29].extension[0].extension[2].valueInteger = 1
* group.element[29].display = "Building"
* group.element[29].target.equivalence = #equivalent
* group.element[29].target.code = #[5].mode
* group.element[29].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[29].target.extension[0].extension[0].url = "type"
* group.element[29].target.extension[0].extension[0].valueCode = #"code"
* group.element[29].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[29].target.extension[0].extension[1].valueInteger = 1
* group.element[29].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[29].target.extension[0].extension[2].valueInteger = 1
* group.element[29].target.display = "[5].mode"
* group.element[30].code = #NDL.10
* group.element[30].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[30].extension[0].extension[0].url = "type"
* group.element[30].extension[0].extension[0].valueCode = #"IS"
* group.element[30].extension[0].extension[1].url = "cardinalityMin"
* group.element[30].extension[0].extension[1].valueInteger = 0
* group.element[30].extension[0].extension[2].url = "cardinalityMax"
* group.element[30].extension[0].extension[2].valueInteger = 1
* group.element[30].display = "Building"
* group.element[30].target.equivalence = #equivalent
* group.element[30].target.code = #[5].physicalType.coding.code
* group.element[30].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[30].target.extension[0].extension[0].url = "type"
* group.element[30].target.extension[0].extension[0].valueCode = #"code"
* group.element[30].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[30].target.extension[0].extension[1].valueInteger = 1
* group.element[30].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[30].target.extension[0].extension[2].valueInteger = 1
* group.element[30].target.display = "[5].physicalType.coding.code"
* group.element[31].code = #NDL.10
* group.element[31].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[31].extension[0].extension[0].url = "type"
* group.element[31].extension[0].extension[0].valueCode = #"IS"
* group.element[31].extension[0].extension[1].url = "cardinalityMin"
* group.element[31].extension[0].extension[1].valueInteger = 0
* group.element[31].extension[0].extension[2].url = "cardinalityMax"
* group.element[31].extension[0].extension[2].valueInteger = 1
* group.element[31].display = "Building"
* group.element[31].target.equivalence = #equivalent
* group.element[31].target.code = #[5].physicalType.coding.system
* group.element[31].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[31].target.extension[0].extension[0].url = "type"
* group.element[31].target.extension[0].extension[0].valueCode = #"uri"
* group.element[31].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[31].target.extension[0].extension[1].valueInteger = 1
* group.element[31].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[31].target.extension[0].extension[2].valueInteger = 1
* group.element[31].target.display = "[5].physicalType.coding.system"
* group.element[32].code = #NDL.10
* group.element[32].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[32].extension[0].extension[0].url = "type"
* group.element[32].extension[0].extension[0].valueCode = #"IS"
* group.element[32].extension[0].extension[1].url = "cardinalityMin"
* group.element[32].extension[0].extension[1].valueInteger = 0
* group.element[32].extension[0].extension[2].url = "cardinalityMax"
* group.element[32].extension[0].extension[2].valueInteger = 1
* group.element[32].display = "Building"
* group.element[32].target.equivalence = #equivalent
* group.element[32].target.code = #[5].partOf.reference(Location[4])
* group.element[32].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[32].target.extension[0].extension[0].url = "type"
* group.element[32].target.extension[0].extension[0].valueCode = #"string"
* group.element[32].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[32].target.extension[0].extension[1].valueInteger = 1
* group.element[32].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[32].target.extension[0].extension[2].valueInteger = 1
* group.element[32].target.display = "[5].partOf.reference(Location[4])"
* group.element[33].code = #NDL.11
* group.element[33].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[33].extension[0].extension[0].url = "type"
* group.element[33].extension[0].extension[0].valueCode = #"IS"
* group.element[33].extension[0].extension[1].url = "cardinalityMin"
* group.element[33].extension[0].extension[1].valueInteger = 0
* group.element[33].extension[0].extension[2].url = "cardinalityMax"
* group.element[33].extension[0].extension[2].valueInteger = 1
* group.element[33].display = "Floor"
* group.element[33].target.equivalence = #equivalent
* group.element[33].target.code = #[6].identifier
* group.element[33].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[33].target.extension[0].extension[0].url = "type"
* group.element[33].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[33].target.display = "[6].identifier"
* group.element[34].code = #NDL.11
* group.element[34].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[34].extension[0].extension[0].url = "type"
* group.element[34].extension[0].extension[0].valueCode = #"IS"
* group.element[34].extension[0].extension[1].url = "cardinalityMin"
* group.element[34].extension[0].extension[1].valueInteger = 0
* group.element[34].extension[0].extension[2].url = "cardinalityMax"
* group.element[34].extension[0].extension[2].valueInteger = 1
* group.element[34].display = "Floor"
* group.element[34].target.equivalence = #equivalent
* group.element[34].target.code = #[6].mode
* group.element[34].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[34].target.extension[0].extension[0].url = "type"
* group.element[34].target.extension[0].extension[0].valueCode = #"code"
* group.element[34].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[34].target.extension[0].extension[1].valueInteger = 1
* group.element[34].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[34].target.extension[0].extension[2].valueInteger = 1
* group.element[34].target.display = "[6].mode"
* group.element[35].code = #NDL.11
* group.element[35].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[35].extension[0].extension[0].url = "type"
* group.element[35].extension[0].extension[0].valueCode = #"IS"
* group.element[35].extension[0].extension[1].url = "cardinalityMin"
* group.element[35].extension[0].extension[1].valueInteger = 0
* group.element[35].extension[0].extension[2].url = "cardinalityMax"
* group.element[35].extension[0].extension[2].valueInteger = 1
* group.element[35].display = "Floor"
* group.element[35].target.equivalence = #equivalent
* group.element[35].target.code = #[6].physicalType.coding.code
* group.element[35].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[35].target.extension[0].extension[0].url = "type"
* group.element[35].target.extension[0].extension[0].valueCode = #"code"
* group.element[35].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[35].target.extension[0].extension[1].valueInteger = 1
* group.element[35].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[35].target.extension[0].extension[2].valueInteger = 1
* group.element[35].target.display = "[6].physicalType.coding.code"
* group.element[36].code = #NDL.11
* group.element[36].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[36].extension[0].extension[0].url = "type"
* group.element[36].extension[0].extension[0].valueCode = #"IS"
* group.element[36].extension[0].extension[1].url = "cardinalityMin"
* group.element[36].extension[0].extension[1].valueInteger = 0
* group.element[36].extension[0].extension[2].url = "cardinalityMax"
* group.element[36].extension[0].extension[2].valueInteger = 1
* group.element[36].display = "Floor"
* group.element[36].target.equivalence = #equivalent
* group.element[36].target.code = #[6].physicalType.coding.system
* group.element[36].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[36].target.extension[0].extension[0].url = "type"
* group.element[36].target.extension[0].extension[0].valueCode = #"uri"
* group.element[36].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[36].target.extension[0].extension[1].valueInteger = 1
* group.element[36].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[36].target.extension[0].extension[2].valueInteger = 1
* group.element[36].target.display = "[6].physicalType.coding.system"
* group.element[37].code = #NDL.11
* group.element[37].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[37].extension[0].extension[0].url = "type"
* group.element[37].extension[0].extension[0].valueCode = #"IS"
* group.element[37].extension[0].extension[1].url = "cardinalityMin"
* group.element[37].extension[0].extension[1].valueInteger = 0
* group.element[37].extension[0].extension[2].url = "cardinalityMax"
* group.element[37].extension[0].extension[2].valueInteger = 1
* group.element[37].display = "Floor"
* group.element[37].target.equivalence = #equivalent
* group.element[37].target.code = #[6].partOf.reference(Location[1])
* group.element[37].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[37].target.extension[0].extension[0].url = "type"
* group.element[37].target.extension[0].extension[0].valueCode = #"string"
* group.element[37].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[37].target.extension[0].extension[1].valueInteger = 1
* group.element[37].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[37].target.extension[0].extension[2].valueInteger = 1
* group.element[37].target.display = "[6].partOf.reference(Location[1])"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype NM to positiveInt.fsh

// HL7 Data Type - FHIR R4_ NM[positiveInt] - Sheet1.csv
Instance: DatatypeNMToPositiveInt
InstanceOf: ConceptMap
Title: "Datatype NM to positiveInt Map"
* title = "Datatype NM to positiveInt Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype NM to the FHIR positiveInt Data Type."
* id = "datatype-nm-to-positiveint"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-nm-to-positiveint"
* version = "1.0"
* name = "DatatypeNMToPositiveInt"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "NM"
* targetUri = "positiveInt"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype NM to positiveInt.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1I1IbZW4etDX-TRXqeYr3mmLJZq55pILgoOOBx4gwBJU/edit#gid=0"
* group.element[0].code = #NM.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].display = "Numeric"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #$value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"integer"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "$value"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype NM to Quantity.fsh

// HL7 Data Type - FHIR R4_ NM[Quantity] - Sheet1.csv
Instance: DatatypeNMToQuantity
InstanceOf: ConceptMap
Title: "Datatype NM to Quantity Map"
* title = "Datatype NM to Quantity Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype NM to the FHIR Quantity Data Type."
* id = "datatype-nm-to-quantity"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-nm-to-quantity"
* version = "1.0"
* name = "DatatypeNMToQuantity"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "NM"
* targetUri = "Quantity"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype NM to Quantity.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1g4uO4eRFeRsOhiR5G_PIqMs8rTMIxjF1qk9izKcunnI/edit#gid=0"
* group.element[0].code = #NM.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "cardinalityMin"
* group.element[0].extension[0].extension[0].valueInteger = 1
* group.element[0].extension[0].extension[1].url = "cardinalityMax"
* group.element[0].extension[0].extension[1].valueInteger = 1
* group.element[0].display = "Numeric"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #$value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"decimal"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "$value"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype NM[LengthOfStay] to Quantity.fsh

// HL7 Data Type - FHIR R4_ NM[Quantity-LengthOfStay] - Sheet1.csv
Instance: DatatypeNMLengthOfStayToQuantity
InstanceOf: ConceptMap
Title: "Datatype NM to Quantity Map"
* title = "Datatype NM to Quantity Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype NM to the FHIR Quantity Data Type."
* id = "datatype-nm-lengthofstay-to-quantity"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-nm-lengthofstay-to-quantity"
* version = "1.0"
* name = "DatatypeNMLengthOfStayToQuantity"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "NM"
* targetUri = "Quantity"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype NM[LengthOfStay] to Quantity.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/10xbEUhs5LEydlRYgH_Ok_9y8Vn_b3peUxFfHJLtNMmI/edit#gid=0"
* group.element[0].code = #NM.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].display = "Numeric"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #value
* group.element[0].target.display = "value"
* group.element[1].code = #NM.1
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].display = "Numeric"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #unit
* group.element[1].target.display = "unit"
* group.element[2].code = #NM.1
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"ST"
* group.element[2].display = "Numeric"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #system
* group.element[2].target.display = "system"
* group.element[3].code = #NM.1
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"ST"
* group.element[3].display = "Numeric"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #code
* group.element[3].target.display = "code"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype NR to Range.fsh

// HL7 Data Type - FHIR R4_ NR[Range] - Sheet1.csv
Instance: DatatypeNRToRange
InstanceOf: ConceptMap
Title: "Datatype NR to Range Map"
* title = "Datatype NR to Range Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype NR to the FHIR Range Data Type."
* id = "datatype-nr-to-range"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-nr-to-range"
* version = "1.0"
* name = "DatatypeNRToRange"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "NR"
* targetUri = "Range"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype NR to Range.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1o7Z8P8sOk9fjHiUYFfv1hVNhuKVdm34MmivLiyqdXUY/edit#gid=0"
* group.element[0].code = #NR.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"NM"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Low Value"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #low.value
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"decimal"
* group.element[0].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[2].valueInteger = 1
* group.element[0].target.display = "low.value"
* group.element[1].code = #NR.2
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"NM"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Num1"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #high.value
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"decimal"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "high.value"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype OG[Subidentifier] to Extension.fsh

// HL7 Data Type - FHIR R4_ OG[Extension-Subidentifier] - Sheet1.csv
Instance: DatatypeOGSubidentifierToExtension
InstanceOf: ConceptMap
Title: "Datatype OG to Extension Map"
* title = "Datatype OG to Extension Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype OG to the FHIR Extension Data Type."
* id = "datatype-og-subidentifier-to-extension"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-og-subidentifier-to-extension"
* version = "1.0"
* name = "DatatypeOGSubidentifierToExtension"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "OG"
* targetUri = "Extension"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype OG[Subidentifier] to Extension.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/1b5obkzO4CkZ8IRVI_b2kaKrPbHAgdNMvjc-ez3IxJig/edit#gid=0"
* group.element[0].code = #OG.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"ST"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Original Sub-Identifier"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #extension[1]:group.url
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "cardinalityMin"
* group.element[0].target.extension[0].extension[0].valueInteger = 1
* group.element[0].target.extension[0].extension[1].url = "cardinalityMax"
* group.element[0].target.extension[0].extension[1].valueInteger = 1
* group.element[0].target.display = "extension[1]:group.url"
* group.element[1].code = #OG.1
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"ST"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Original Sub-Identifier"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #extension[1]:orginal-sub-identiier.valueString
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"string"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "extension[1]:orginal-sub-identiier.valueString"
* group.element[2].code = #OG.2
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"NM"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Group"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #extension[1]:group.url
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[0].valueInteger = 1
* group.element[2].target.extension[0].extension[1].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.display = "extension[1]:group.url"
* group.element[3].code = #OG.2
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"NM"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Group"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #extension[1]:group.valueDecimal
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"decimal"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "extension[1]:group.valueDecimal"
* group.element[4].code = #OG.3
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"NM"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 0
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Sequence"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #extension[1]:group.url
* group.element[4].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].target.extension[0].extension[0].url = "cardinalityMin"
* group.element[4].target.extension[0].extension[0].valueInteger = 1
* group.element[4].target.extension[0].extension[1].url = "cardinalityMax"
* group.element[4].target.extension[0].extension[1].valueInteger = 1
* group.element[4].target.display = "extension[1]:group.url"
* group.element[5].code = #OG.3
* group.element[5].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].extension[0].extension[0].url = "type"
* group.element[5].extension[0].extension[0].valueCode = #"NM"
* group.element[5].extension[0].extension[1].url = "cardinalityMin"
* group.element[5].extension[0].extension[1].valueInteger = 0
* group.element[5].extension[0].extension[2].url = "cardinalityMax"
* group.element[5].extension[0].extension[2].valueInteger = 1
* group.element[5].display = "Sequence"
* group.element[5].target.equivalence = #equivalent
* group.element[5].target.code = #extension[1]:group.valueDecimal
* group.element[5].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].target.extension[0].extension[0].url = "type"
* group.element[5].target.extension[0].extension[0].valueCode = #"decimal"
* group.element[5].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[5].target.extension[0].extension[1].valueInteger = 1
* group.element[5].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[5].target.extension[0].extension[2].valueInteger = 1
* group.element[5].target.display = "extension[1]:group.valueDecimal"
* group.element[6].code = #OG.4
* group.element[6].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].extension[0].extension[0].url = "type"
* group.element[6].extension[0].extension[0].valueCode = #"ST"
* group.element[6].extension[0].extension[1].url = "cardinalityMin"
* group.element[6].extension[0].extension[1].valueInteger = 0
* group.element[6].extension[0].extension[2].url = "cardinalityMax"
* group.element[6].extension[0].extension[2].valueInteger = 1
* group.element[6].display = "Identifier"
* group.element[6].target.equivalence = #equivalent
* group.element[6].target.code = #extension[1]:group.url
* group.element[6].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].target.extension[0].extension[0].url = "cardinalityMin"
* group.element[6].target.extension[0].extension[0].valueInteger = 1
* group.element[6].target.extension[0].extension[1].url = "cardinalityMax"
* group.element[6].target.extension[0].extension[1].valueInteger = 1
* group.element[6].target.display = "extension[1]:group.url"
* group.element[7].code = #OG.4
* group.element[7].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].extension[0].extension[0].url = "type"
* group.element[7].extension[0].extension[0].valueCode = #"ST"
* group.element[7].extension[0].extension[1].url = "cardinalityMin"
* group.element[7].extension[0].extension[1].valueInteger = 0
* group.element[7].extension[0].extension[2].url = "cardinalityMax"
* group.element[7].extension[0].extension[2].valueInteger = 1
* group.element[7].display = "Identifier"
* group.element[7].target.equivalence = #equivalent
* group.element[7].target.code = #extension[1]:identifier.valueString
* group.element[7].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].target.extension[0].extension[0].url = "type"
* group.element[7].target.extension[0].extension[0].valueCode = #"string"
* group.element[7].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[7].target.extension[0].extension[1].valueInteger = 1
* group.element[7].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[7].target.extension[0].extension[2].valueInteger = 1
* group.element[7].target.display = "extension[1]:identifier.valueString"


---

File: repos/HL7_SLASH_v2-to-fhir/input/fsh/Datatype PL to Location.fsh

// HL7 Data Type - FHIR R4_ PL[Location] - Sheet1.csv
Instance: DatatypePLToLocation
InstanceOf: ConceptMap
Title: "Datatype PL to Location Map"
* title = "Datatype PL to Location Map"
* description = "This ConceptMap represents a mapping from the HL7 V2 Datatype PL to the FHIR Location Resource."
* id = "datatype-pl-to-location"
* url = "http://hl7.org/fhir/uv/v2mappings/datatype-pl-to-location"
* version = "1.0"
* name = "DatatypePLToLocation"
* status = #active
* experimental = true
* date = "2024-12-11"
* publisher = "HL7 International, Inc"
* contact.telecom.system = #email
* contact.telecom.value = "v2-to-fhir@lists.hl7.org"
* copyright = "Copyright (c) 2020, HL7 International, Inc., All Rights Reserved."
* sourceUri = "PL"
* targetUri = "Location"
* extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/RelatedArtifact"
* extension[0].extension[0].url = "type"
* extension[0].extension[0].valueCode = #derived-from
* extension[0].extension[1].url = "label"
* extension[0].extension[1].valueString = "Datatype PL to Location.fsh"
* extension[0].extension[2].url = "url"
* extension[0].extension[2].valueUri = "https://docs.google.com/spreadsheets/d/17b4wqJOzGieNBSdHYZt3ymKucsRDd_h8leaiz_umG7E/edit#gid=0"
* group.element[0].code = #PL.1
* group.element[0].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].extension[0].extension[0].url = "type"
* group.element[0].extension[0].extension[0].valueCode = #"HD"
* group.element[0].extension[0].extension[1].url = "cardinalityMin"
* group.element[0].extension[0].extension[1].valueInteger = 0
* group.element[0].extension[0].extension[2].url = "cardinalityMax"
* group.element[0].extension[0].extension[2].valueInteger = 1
* group.element[0].display = "Point of Care"
* group.element[0].target.equivalence = #equivalent
* group.element[0].target.code = #[4].identifier[1]
* group.element[0].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[0].target.extension[0].extension[0].url = "type"
* group.element[0].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[0].target.display = "[4].identifier[1]"
* group.element[1].code = #PL.1
* group.element[1].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].extension[0].extension[0].url = "type"
* group.element[1].extension[0].extension[0].valueCode = #"HD"
* group.element[1].extension[0].extension[1].url = "cardinalityMin"
* group.element[1].extension[0].extension[1].valueInteger = 0
* group.element[1].extension[0].extension[2].url = "cardinalityMax"
* group.element[1].extension[0].extension[2].valueInteger = 1
* group.element[1].display = "Point of Care"
* group.element[1].target.equivalence = #equivalent
* group.element[1].target.code = #[4].location(Location.mode)
* group.element[1].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[1].target.extension[0].extension[0].url = "type"
* group.element[1].target.extension[0].extension[0].valueCode = #"code"
* group.element[1].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[1].target.extension[0].extension[1].valueInteger = 1
* group.element[1].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[1].target.extension[0].extension[2].valueInteger = 1
* group.element[1].target.display = "[4].location(Location.mode)"
* group.element[2].code = #PL.1
* group.element[2].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].extension[0].extension[0].url = "type"
* group.element[2].extension[0].extension[0].valueCode = #"HD"
* group.element[2].extension[0].extension[1].url = "cardinalityMin"
* group.element[2].extension[0].extension[1].valueInteger = 0
* group.element[2].extension[0].extension[2].url = "cardinalityMax"
* group.element[2].extension[0].extension[2].valueInteger = 1
* group.element[2].display = "Point of Care"
* group.element[2].target.equivalence = #equivalent
* group.element[2].target.code = #[4].location(Location.physicalType.coding.code)
* group.element[2].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[2].target.extension[0].extension[0].url = "type"
* group.element[2].target.extension[0].extension[0].valueCode = #"code"
* group.element[2].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[2].target.extension[0].extension[1].valueInteger = 1
* group.element[2].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[2].target.extension[0].extension[2].valueInteger = 1
* group.element[2].target.display = "[4].location(Location.physicalType.coding.code)"
* group.element[3].code = #PL.1
* group.element[3].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].extension[0].extension[0].url = "type"
* group.element[3].extension[0].extension[0].valueCode = #"HD"
* group.element[3].extension[0].extension[1].url = "cardinalityMin"
* group.element[3].extension[0].extension[1].valueInteger = 0
* group.element[3].extension[0].extension[2].url = "cardinalityMax"
* group.element[3].extension[0].extension[2].valueInteger = 1
* group.element[3].display = "Point of Care"
* group.element[3].target.equivalence = #equivalent
* group.element[3].target.code = #[4].location(Location.physicalType.coding.system)
* group.element[3].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[3].target.extension[0].extension[0].url = "type"
* group.element[3].target.extension[0].extension[0].valueCode = #"uri"
* group.element[3].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[3].target.extension[0].extension[1].valueInteger = 1
* group.element[3].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[3].target.extension[0].extension[2].valueInteger = 1
* group.element[3].target.display = "[4].location(Location.physicalType.coding.system)"
* group.element[4].code = #PL.1
* group.element[4].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].extension[0].extension[0].url = "type"
* group.element[4].extension[0].extension[0].valueCode = #"HD"
* group.element[4].extension[0].extension[1].url = "cardinalityMin"
* group.element[4].extension[0].extension[1].valueInteger = 0
* group.element[4].extension[0].extension[2].url = "cardinalityMax"
* group.element[4].extension[0].extension[2].valueInteger = 1
* group.element[4].display = "Point of Care"
* group.element[4].target.equivalence = #equivalent
* group.element[4].target.code = #[4].partOf.reference(Location[6])
* group.element[4].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[4].target.extension[0].extension[0].url = "type"
* group.element[4].target.extension[0].extension[0].valueCode = #"string"
* group.element[4].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[4].target.extension[0].extension[1].valueInteger = 1
* group.element[4].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[4].target.extension[0].extension[2].valueInteger = 1
* group.element[4].target.display = "[4].partOf.reference(Location[6])"
* group.element[5].code = #PL.2
* group.element[5].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].extension[0].extension[0].url = "type"
* group.element[5].extension[0].extension[0].valueCode = #"HD"
* group.element[5].extension[0].extension[1].url = "cardinalityMin"
* group.element[5].extension[0].extension[1].valueInteger = 0
* group.element[5].extension[0].extension[2].url = "cardinalityMax"
* group.element[5].extension[0].extension[2].valueInteger = 1
* group.element[5].display = "Room"
* group.element[5].target.equivalence = #equivalent
* group.element[5].target.code = #[2].identifier[1]
* group.element[5].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[5].target.extension[0].extension[0].url = "type"
* group.element[5].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[5].target.display = "[2].identifier[1]"
* group.element[6].code = #PL.2
* group.element[6].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].extension[0].extension[0].url = "type"
* group.element[6].extension[0].extension[0].valueCode = #"HD"
* group.element[6].extension[0].extension[1].url = "cardinalityMin"
* group.element[6].extension[0].extension[1].valueInteger = 0
* group.element[6].extension[0].extension[2].url = "cardinalityMax"
* group.element[6].extension[0].extension[2].valueInteger = 1
* group.element[6].display = "Room"
* group.element[6].target.equivalence = #equivalent
* group.element[6].target.code = #[2].mode
* group.element[6].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[6].target.extension[0].extension[0].url = "type"
* group.element[6].target.extension[0].extension[0].valueCode = #"code"
* group.element[6].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[6].target.extension[0].extension[1].valueInteger = 1
* group.element[6].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[6].target.extension[0].extension[2].valueInteger = 1
* group.element[6].target.display = "[2].mode"
* group.element[7].code = #PL.2
* group.element[7].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].extension[0].extension[0].url = "type"
* group.element[7].extension[0].extension[0].valueCode = #"HD"
* group.element[7].extension[0].extension[1].url = "cardinalityMin"
* group.element[7].extension[0].extension[1].valueInteger = 0
* group.element[7].extension[0].extension[2].url = "cardinalityMax"
* group.element[7].extension[0].extension[2].valueInteger = 1
* group.element[7].display = "Room"
* group.element[7].target.equivalence = #equivalent
* group.element[7].target.code = #[2].physicalType.coding.code
* group.element[7].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[7].target.extension[0].extension[0].url = "type"
* group.element[7].target.extension[0].extension[0].valueCode = #"code"
* group.element[7].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[7].target.extension[0].extension[1].valueInteger = 1
* group.element[7].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[7].target.extension[0].extension[2].valueInteger = 1
* group.element[7].target.display = "[2].physicalType.coding.code"
* group.element[8].code = #PL.2
* group.element[8].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].extension[0].extension[0].url = "type"
* group.element[8].extension[0].extension[0].valueCode = #"HD"
* group.element[8].extension[0].extension[1].url = "cardinalityMin"
* group.element[8].extension[0].extension[1].valueInteger = 0
* group.element[8].extension[0].extension[2].url = "cardinalityMax"
* group.element[8].extension[0].extension[2].valueInteger = 1
* group.element[8].display = "Room"
* group.element[8].target.equivalence = #equivalent
* group.element[8].target.code = #[2].physicalType.coding.system
* group.element[8].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[8].target.extension[0].extension[0].url = "type"
* group.element[8].target.extension[0].extension[0].valueCode = #"uri"
* group.element[8].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[8].target.extension[0].extension[1].valueInteger = 1
* group.element[8].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[8].target.extension[0].extension[2].valueInteger = 1
* group.element[8].target.display = "[2].physicalType.coding.system"
* group.element[9].code = #PL.2
* group.element[9].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[9].extension[0].extension[0].url = "type"
* group.element[9].extension[0].extension[0].valueCode = #"HD"
* group.element[9].extension[0].extension[1].url = "cardinalityMin"
* group.element[9].extension[0].extension[1].valueInteger = 0
* group.element[9].extension[0].extension[2].url = "cardinalityMax"
* group.element[9].extension[0].extension[2].valueInteger = 1
* group.element[9].display = "Room"
* group.element[9].target.equivalence = #equivalent
* group.element[9].target.code = #[2].partOf.reference(Location[3])
* group.element[9].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[9].target.extension[0].extension[0].url = "type"
* group.element[9].target.extension[0].extension[0].valueCode = #"string"
* group.element[9].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[9].target.extension[0].extension[1].valueInteger = 1
* group.element[9].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[9].target.extension[0].extension[2].valueInteger = 1
* group.element[9].target.display = "[2].partOf.reference(Location[3])"
* group.element[10].code = #PL.3
* group.element[10].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[10].extension[0].extension[0].url = "type"
* group.element[10].extension[0].extension[0].valueCode = #"HD"
* group.element[10].extension[0].extension[1].url = "cardinalityMin"
* group.element[10].extension[0].extension[1].valueInteger = 0
* group.element[10].extension[0].extension[2].url = "cardinalityMax"
* group.element[10].extension[0].extension[2].valueInteger = 1
* group.element[10].display = "Bed"
* group.element[10].target.equivalence = #equivalent
* group.element[10].target.code = #[1].identifier[1]
* group.element[10].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[10].target.extension[0].extension[0].url = "type"
* group.element[10].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[10].target.display = "[1].identifier[1]"
* group.element[11].code = #PL.3
* group.element[11].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[11].extension[0].extension[0].url = "type"
* group.element[11].extension[0].extension[0].valueCode = #"HD"
* group.element[11].extension[0].extension[1].url = "cardinalityMin"
* group.element[11].extension[0].extension[1].valueInteger = 0
* group.element[11].extension[0].extension[2].url = "cardinalityMax"
* group.element[11].extension[0].extension[2].valueInteger = 1
* group.element[11].display = "Bed"
* group.element[11].target.equivalence = #equivalent
* group.element[11].target.code = #[1].mode
* group.element[11].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[11].target.extension[0].extension[0].url = "type"
* group.element[11].target.extension[0].extension[0].valueCode = #"code"
* group.element[11].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[11].target.extension[0].extension[1].valueInteger = 1
* group.element[11].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[11].target.extension[0].extension[2].valueInteger = 1
* group.element[11].target.display = "[1].mode"
* group.element[12].code = #PL.3
* group.element[12].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[12].extension[0].extension[0].url = "type"
* group.element[12].extension[0].extension[0].valueCode = #"HD"
* group.element[12].extension[0].extension[1].url = "cardinalityMin"
* group.element[12].extension[0].extension[1].valueInteger = 0
* group.element[12].extension[0].extension[2].url = "cardinalityMax"
* group.element[12].extension[0].extension[2].valueInteger = 1
* group.element[12].display = "Bed"
* group.element[12].target.equivalence = #equivalent
* group.element[12].target.code = #[1].physicalType.coding.code
* group.element[12].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[12].target.extension[0].extension[0].url = "type"
* group.element[12].target.extension[0].extension[0].valueCode = #"code"
* group.element[12].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[12].target.extension[0].extension[1].valueInteger = 1
* group.element[12].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[12].target.extension[0].extension[2].valueInteger = 1
* group.element[12].target.display = "[1].physicalType.coding.code"
* group.element[13].code = #PL.3
* group.element[13].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[13].extension[0].extension[0].url = "type"
* group.element[13].extension[0].extension[0].valueCode = #"HD"
* group.element[13].extension[0].extension[1].url = "cardinalityMin"
* group.element[13].extension[0].extension[1].valueInteger = 0
* group.element[13].extension[0].extension[2].url = "cardinalityMax"
* group.element[13].extension[0].extension[2].valueInteger = 1
* group.element[13].display = "Bed"
* group.element[13].target.equivalence = #equivalent
* group.element[13].target.code = #[1].physicalType.coding.system
* group.element[13].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[13].target.extension[0].extension[0].url = "type"
* group.element[13].target.extension[0].extension[0].valueCode = #"uri"
* group.element[13].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[13].target.extension[0].extension[1].valueInteger = 1
* group.element[13].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[13].target.extension[0].extension[2].valueInteger = 1
* group.element[13].target.display = "[1].physicalType.coding.system"
* group.element[14].code = #PL.3
* group.element[14].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[14].extension[0].extension[0].url = "type"
* group.element[14].extension[0].extension[0].valueCode = #"HD"
* group.element[14].extension[0].extension[1].url = "cardinalityMin"
* group.element[14].extension[0].extension[1].valueInteger = 0
* group.element[14].extension[0].extension[2].url = "cardinalityMax"
* group.element[14].extension[0].extension[2].valueInteger = 1
* group.element[14].display = "Bed"
* group.element[14].target.equivalence = #equivalent
* group.element[14].target.code = #[1].partOf.reference(Location[2])
* group.element[14].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[14].target.extension[0].extension[0].url = "type"
* group.element[14].target.extension[0].extension[0].valueCode = #"string"
* group.element[14].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[14].target.extension[0].extension[1].valueInteger = 1
* group.element[14].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[14].target.extension[0].extension[2].valueInteger = 1
* group.element[14].target.display = "[1].partOf.reference(Location[2])"
* group.element[15].code = #PL.4
* group.element[15].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[15].extension[0].extension[0].url = "type"
* group.element[15].extension[0].extension[0].valueCode = #"HD"
* group.element[15].extension[0].extension[1].url = "cardinalityMin"
* group.element[15].extension[0].extension[1].valueInteger = 0
* group.element[15].extension[0].extension[2].url = "cardinalityMax"
* group.element[15].extension[0].extension[2].valueInteger = 1
* group.element[15].display = "Facility"
* group.element[15].target.equivalence = #equivalent
* group.element[15].target.code = #[6].identifier[1]
* group.element[15].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[15].target.extension[0].extension[0].url = "type"
* group.element[15].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[15].target.display = "[6].identifier[1]"
* group.element[16].code = #PL.4
* group.element[16].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[16].extension[0].extension[0].url = "type"
* group.element[16].extension[0].extension[0].valueCode = #"HD"
* group.element[16].extension[0].extension[1].url = "cardinalityMin"
* group.element[16].extension[0].extension[1].valueInteger = 0
* group.element[16].extension[0].extension[2].url = "cardinalityMax"
* group.element[16].extension[0].extension[2].valueInteger = 1
* group.element[16].display = "Facility"
* group.element[16].target.equivalence = #equivalent
* group.element[16].target.code = #[6].mode
* group.element[16].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[16].target.extension[0].extension[0].url = "type"
* group.element[16].target.extension[0].extension[0].valueCode = #"code"
* group.element[16].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[16].target.extension[0].extension[1].valueInteger = 1
* group.element[16].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[16].target.extension[0].extension[2].valueInteger = 1
* group.element[16].target.display = "[6].mode"
* group.element[17].code = #PL.4
* group.element[17].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[17].extension[0].extension[0].url = "type"
* group.element[17].extension[0].extension[0].valueCode = #"HD"
* group.element[17].extension[0].extension[1].url = "cardinalityMin"
* group.element[17].extension[0].extension[1].valueInteger = 0
* group.element[17].extension[0].extension[2].url = "cardinalityMax"
* group.element[17].extension[0].extension[2].valueInteger = 1
* group.element[17].display = "Facility"
* group.element[17].target.equivalence = #equivalent
* group.element[17].target.code = #[6].physicalType.coding.code
* group.element[17].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[17].target.extension[0].extension[0].url = "type"
* group.element[17].target.extension[0].extension[0].valueCode = #"code"
* group.element[17].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[17].target.extension[0].extension[1].valueInteger = 1
* group.element[17].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[17].target.extension[0].extension[2].valueInteger = 1
* group.element[17].target.display = "[6].physicalType.coding.code"
* group.element[18].code = #PL.4
* group.element[18].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[18].extension[0].extension[0].url = "type"
* group.element[18].extension[0].extension[0].valueCode = #"HD"
* group.element[18].extension[0].extension[1].url = "cardinalityMin"
* group.element[18].extension[0].extension[1].valueInteger = 0
* group.element[18].extension[0].extension[2].url = "cardinalityMax"
* group.element[18].extension[0].extension[2].valueInteger = 1
* group.element[18].display = "Facility"
* group.element[18].target.equivalence = #equivalent
* group.element[18].target.code = #[6].physicalType.coding.system
* group.element[18].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[18].target.extension[0].extension[0].url = "type"
* group.element[18].target.extension[0].extension[0].valueCode = #"uri"
* group.element[18].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[18].target.extension[0].extension[1].valueInteger = 1
* group.element[18].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[18].target.extension[0].extension[2].valueInteger = 1
* group.element[18].target.display = "[6].physicalType.coding.system"
* group.element[19].code = #PL.7
* group.element[19].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[19].extension[0].extension[0].url = "type"
* group.element[19].extension[0].extension[0].valueCode = #"HD"
* group.element[19].extension[0].extension[1].url = "cardinalityMin"
* group.element[19].extension[0].extension[1].valueInteger = 0
* group.element[19].extension[0].extension[2].url = "cardinalityMax"
* group.element[19].extension[0].extension[2].valueInteger = 1
* group.element[19].display = "Building"
* group.element[19].target.equivalence = #equivalent
* group.element[19].target.code = #[5].identifier[1]
* group.element[19].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[19].target.extension[0].extension[0].url = "type"
* group.element[19].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[19].target.display = "[5].identifier[1]"
* group.element[20].code = #PL.7
* group.element[20].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[20].extension[0].extension[0].url = "type"
* group.element[20].extension[0].extension[0].valueCode = #"HD"
* group.element[20].extension[0].extension[1].url = "cardinalityMin"
* group.element[20].extension[0].extension[1].valueInteger = 0
* group.element[20].extension[0].extension[2].url = "cardinalityMax"
* group.element[20].extension[0].extension[2].valueInteger = 1
* group.element[20].display = "Building"
* group.element[20].target.equivalence = #equivalent
* group.element[20].target.code = #[5].mode
* group.element[20].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[20].target.extension[0].extension[0].url = "type"
* group.element[20].target.extension[0].extension[0].valueCode = #"code"
* group.element[20].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[20].target.extension[0].extension[1].valueInteger = 1
* group.element[20].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[20].target.extension[0].extension[2].valueInteger = 1
* group.element[20].target.display = "[5].mode"
* group.element[21].code = #PL.7
* group.element[21].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[21].extension[0].extension[0].url = "type"
* group.element[21].extension[0].extension[0].valueCode = #"HD"
* group.element[21].extension[0].extension[1].url = "cardinalityMin"
* group.element[21].extension[0].extension[1].valueInteger = 0
* group.element[21].extension[0].extension[2].url = "cardinalityMax"
* group.element[21].extension[0].extension[2].valueInteger = 1
* group.element[21].display = "Building"
* group.element[21].target.equivalence = #equivalent
* group.element[21].target.code = #[5].physicalType.coding.code
* group.element[21].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[21].target.extension[0].extension[0].url = "type"
* group.element[21].target.extension[0].extension[0].valueCode = #"code"
* group.element[21].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[21].target.extension[0].extension[1].valueInteger = 1
* group.element[21].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[21].target.extension[0].extension[2].valueInteger = 1
* group.element[21].target.display = "[5].physicalType.coding.code"
* group.element[22].code = #PL.7
* group.element[22].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[22].extension[0].extension[0].url = "type"
* group.element[22].extension[0].extension[0].valueCode = #"HD"
* group.element[22].extension[0].extension[1].url = "cardinalityMin"
* group.element[22].extension[0].extension[1].valueInteger = 0
* group.element[22].extension[0].extension[2].url = "cardinalityMax"
* group.element[22].extension[0].extension[2].valueInteger = 1
* group.element[22].display = "Building"
* group.element[22].target.equivalence = #equivalent
* group.element[22].target.code = #[5].physicalType.coding.system
* group.element[22].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[22].target.extension[0].extension[0].url = "type"
* group.element[22].target.extension[0].extension[0].valueCode = #"uri"
* group.element[22].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[22].target.extension[0].extension[1].valueInteger = 1
* group.element[22].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[22].target.extension[0].extension[2].valueInteger = 1
* group.element[22].target.display = "[5].physicalType.coding.system"
* group.element[23].code = #PL.7
* group.element[23].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[23].extension[0].extension[0].url = "type"
* group.element[23].extension[0].extension[0].valueCode = #"HD"
* group.element[23].extension[0].extension[1].url = "cardinalityMin"
* group.element[23].extension[0].extension[1].valueInteger = 0
* group.element[23].extension[0].extension[2].url = "cardinalityMax"
* group.element[23].extension[0].extension[2].valueInteger = 1
* group.element[23].display = "Building"
* group.element[23].target.equivalence = #equivalent
* group.element[23].target.code = #[5].partOf.reference(Location[5])
* group.element[23].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[23].target.extension[0].extension[0].url = "type"
* group.element[23].target.extension[0].extension[0].valueCode = #"string"
* group.element[23].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[23].target.extension[0].extension[1].valueInteger = 1
* group.element[23].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[23].target.extension[0].extension[2].valueInteger = 1
* group.element[23].target.display = "[5].partOf.reference(Location[5])"
* group.element[24].code = #PL.8
* group.element[24].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[24].extension[0].extension[0].url = "type"
* group.element[24].extension[0].extension[0].valueCode = #"HD"
* group.element[24].extension[0].extension[1].url = "cardinalityMin"
* group.element[24].extension[0].extension[1].valueInteger = 0
* group.element[24].extension[0].extension[2].url = "cardinalityMax"
* group.element[24].extension[0].extension[2].valueInteger = 1
* group.element[24].display = "Floor"
* group.element[24].target.equivalence = #equivalent
* group.element[24].target.code = #[3].identifier[1]
* group.element[24].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[24].target.extension[0].extension[0].url = "type"
* group.element[24].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[24].target.display = "[3].identifier[1]"
* group.element[25].code = #PL.8
* group.element[25].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[25].extension[0].extension[0].url = "type"
* group.element[25].extension[0].extension[0].valueCode = #"HD"
* group.element[25].extension[0].extension[1].url = "cardinalityMin"
* group.element[25].extension[0].extension[1].valueInteger = 0
* group.element[25].extension[0].extension[2].url = "cardinalityMax"
* group.element[25].extension[0].extension[2].valueInteger = 1
* group.element[25].display = "Floor"
* group.element[25].target.equivalence = #equivalent
* group.element[25].target.code = #[3].mode
* group.element[25].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[25].target.extension[0].extension[0].url = "type"
* group.element[25].target.extension[0].extension[0].valueCode = #"code"
* group.element[25].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[25].target.extension[0].extension[1].valueInteger = 1
* group.element[25].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[25].target.extension[0].extension[2].valueInteger = 1
* group.element[25].target.display = "[3].mode"
* group.element[26].code = #PL.8
* group.element[26].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[26].extension[0].extension[0].url = "type"
* group.element[26].extension[0].extension[0].valueCode = #"HD"
* group.element[26].extension[0].extension[1].url = "cardinalityMin"
* group.element[26].extension[0].extension[1].valueInteger = 0
* group.element[26].extension[0].extension[2].url = "cardinalityMax"
* group.element[26].extension[0].extension[2].valueInteger = 1
* group.element[26].display = "Floor"
* group.element[26].target.equivalence = #equivalent
* group.element[26].target.code = #[3].physicalType.coding.code
* group.element[26].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[26].target.extension[0].extension[0].url = "type"
* group.element[26].target.extension[0].extension[0].valueCode = #"code"
* group.element[26].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[26].target.extension[0].extension[1].valueInteger = 1
* group.element[26].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[26].target.extension[0].extension[2].valueInteger = 1
* group.element[26].target.display = "[3].physicalType.coding.code"
* group.element[27].code = #PL.8
* group.element[27].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[27].extension[0].extension[0].url = "type"
* group.element[27].extension[0].extension[0].valueCode = #"HD"
* group.element[27].extension[0].extension[1].url = "cardinalityMin"
* group.element[27].extension[0].extension[1].valueInteger = 0
* group.element[27].extension[0].extension[2].url = "cardinalityMax"
* group.element[27].extension[0].extension[2].valueInteger = 1
* group.element[27].display = "Floor"
* group.element[27].target.equivalence = #equivalent
* group.element[27].target.code = #[3].physicalType.coding.system
* group.element[27].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[27].target.extension[0].extension[0].url = "type"
* group.element[27].target.extension[0].extension[0].valueCode = #"uri"
* group.element[27].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[27].target.extension[0].extension[1].valueInteger = 1
* group.element[27].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[27].target.extension[0].extension[2].valueInteger = 1
* group.element[27].target.display = "[3].physicalType.coding.system"
* group.element[28].code = #PL.8
* group.element[28].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[28].extension[0].extension[0].url = "type"
* group.element[28].extension[0].extension[0].valueCode = #"HD"
* group.element[28].extension[0].extension[1].url = "cardinalityMin"
* group.element[28].extension[0].extension[1].valueInteger = 0
* group.element[28].extension[0].extension[2].url = "cardinalityMax"
* group.element[28].extension[0].extension[2].valueInteger = 1
* group.element[28].display = "Floor"
* group.element[28].target.equivalence = #equivalent
* group.element[28].target.code = #[3].partOf.reference(Location[4])
* group.element[28].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[28].target.extension[0].extension[0].url = "type"
* group.element[28].target.extension[0].extension[0].valueCode = #"string"
* group.element[28].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[28].target.extension[0].extension[1].valueInteger = 1
* group.element[28].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[28].target.extension[0].extension[2].valueInteger = 1
* group.element[28].target.display = "[3].partOf.reference(Location[4])"
* group.element[29].code = #PL.9
* group.element[29].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[29].extension[0].extension[0].url = "type"
* group.element[29].extension[0].extension[0].valueCode = #"ST"
* group.element[29].extension[0].extension[1].url = "cardinalityMin"
* group.element[29].extension[0].extension[1].valueInteger = 0
* group.element[29].extension[0].extension[2].url = "cardinalityMax"
* group.element[29].extension[0].extension[2].valueInteger = 1
* group.element[29].display = "Location Description"
* group.element[29].target.equivalence = #equivalent
* group.element[29].target.code = #[1].location(Location.description)
* group.element[29].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[29].target.extension[0].extension[0].url = "type"
* group.element[29].target.extension[0].extension[0].valueCode = #"string"
* group.element[29].target.extension[0].extension[1].url = "cardinalityMin"
* group.element[29].target.extension[0].extension[1].valueInteger = 1
* group.element[29].target.extension[0].extension[2].url = "cardinalityMax"
* group.element[29].target.extension[0].extension[2].valueInteger = 1
* group.element[29].target.display = "[1].location(Location.description)"
* group.element[30].code = #PL.10
* group.element[30].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[30].extension[0].extension[0].url = "type"
* group.element[30].extension[0].extension[0].valueCode = #"EI"
* group.element[30].extension[0].extension[1].url = "cardinalityMin"
* group.element[30].extension[0].extension[1].valueInteger = 0
* group.element[30].extension[0].extension[2].url = "cardinalityMax"
* group.element[30].extension[0].extension[2].valueInteger = 1
* group.element[30].display = "Comprehensive Location Identifier"
* group.element[30].target.equivalence = #equivalent
* group.element[30].target.code = #[1].identifier[2]
* group.element[30].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[30].target.extension[0].extension[0].url = "type"
* group.element[30].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[30].target.display = "[1].identifier[2]"
* group.element[31].code = #PL.10
* group.element[31].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[31].extension[0].extension[0].url = "type"
* group.element[31].extension[0].extension[0].valueCode = #"EI"
* group.element[31].extension[0].extension[1].url = "cardinalityMin"
* group.element[31].extension[0].extension[1].valueInteger = 0
* group.element[31].extension[0].extension[2].url = "cardinalityMax"
* group.element[31].extension[0].extension[2].valueInteger = 1
* group.element[31].display = "Comprehensive Location Identifier"
* group.element[31].target.equivalence = #equivalent
* group.element[31].target.code = #[2].identifier[2]
* group.element[31].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[31].target.extension[0].extension[0].url = "type"
* group.element[31].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[31].target.display = "[2].identifier[2]"
* group.element[32].code = #PL.10
* group.element[32].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[32].extension[0].extension[0].url = "type"
* group.element[32].extension[0].extension[0].valueCode = #"EI"
* group.element[32].extension[0].extension[1].url = "cardinalityMin"
* group.element[32].extension[0].extension[1].valueInteger = 0
* group.element[32].extension[0].extension[2].url = "cardinalityMax"
* group.element[32].extension[0].extension[2].valueInteger = 1
* group.element[32].display = "Comprehensive Location Identifier"
* group.element[32].target.equivalence = #equivalent
* group.element[32].target.code = #[5].identifier[2]
* group.element[32].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[32].target.extension[0].extension[0].url = "type"
* group.element[32].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[32].target.display = "[5].identifier[2]"
* group.element[33].code = #PL.10
* group.element[33].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[33].extension[0].extension[0].url = "type"
* group.element[33].extension[0].extension[0].valueCode = #"EI"
* group.element[33].extension[0].extension[1].url = "cardinalityMin"
* group.element[33].extension[0].extension[1].valueInteger = 0
* group.element[33].extension[0].extension[2].url = "cardinalityMax"
* group.element[33].extension[0].extension[2].valueInteger = 1
* group.element[33].display = "Comprehensive Location Identifier"
* group.element[33].target.equivalence = #equivalent
* group.element[33].target.code = #[3].identifier[2]
* group.element[33].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[33].target.extension[0].extension[0].url = "type"
* group.element[33].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[33].target.display = "[3].identifier[2]"
* group.element[34].code = #PL.10
* group.element[34].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[34].extension[0].extension[0].url = "type"
* group.element[34].extension[0].extension[0].valueCode = #"EI"
* group.element[34].extension[0].extension[1].url = "cardinalityMin"
* group.element[34].extension[0].extension[1].valueInteger = 0
* group.element[34].extension[0].extension[2].url = "cardinalityMax"
* group.element[34].extension[0].extension[2].valueInteger = 1
* group.element[34].display = "Comprehensive Location Identifier"
* group.element[34].target.equivalence = #equivalent
* group.element[34].target.code = #[4].identifier[2]
* group.element[34].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[34].target.extension[0].extension[0].url = "type"
* group.element[34].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[34].target.display = "[4].identifier[2]"
* group.element[35].code = #PL.10
* group.element[35].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[35].extension[0].extension[0].url = "type"
* group.element[35].extension[0].extension[0].valueCode = #"EI"
* group.element[35].extension[0].extension[1].url = "cardinalityMin"
* group.element[35].extension[0].extension[1].valueInteger = 0
* group.element[35].extension[0].extension[2].url = "cardinalityMax"
* group.element[35].extension[0].extension[2].valueInteger = 1
* group.element[35].display = "Comprehensive Location Identifier"
* group.element[35].target.equivalence = #equivalent
* group.element[35].target.code = #[6].identifier[2]
* group.element[35].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[35].target.extension[0].extension[0].url = "type"
* group.element[35].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[35].target.display = "[6].identifier[2]"
* group.element[36].code = #PL.10
* group.element[36].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[36].extension[0].extension[0].url = "type"
* group.element[36].extension[0].extension[0].valueCode = #"EI"
* group.element[36].extension[0].extension[1].url = "cardinalityMin"
* group.element[36].extension[0].extension[1].valueInteger = 0
* group.element[36].extension[0].extension[2].url = "cardinalityMax"
* group.element[36].extension[0].extension[2].valueInteger = 1
* group.element[36].display = "Comprehensive Location Identifier"
* group.element[36].target.equivalence = #equivalent
* group.element[36].target.code = #[1].identifier[2]
* group.element[36].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[36].target.extension[0].extension[0].url = "type"
* group.element[36].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[36].target.display = "[1].identifier[2]"
* group.element[37].code = #PL.10
* group.element[37].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[37].extension[0].extension[0].url = "type"
* group.element[37].extension[0].extension[0].valueCode = #"EI"
* group.element[37].extension[0].extension[1].url = "cardinalityMin"
* group.element[37].extension[0].extension[1].valueInteger = 0
* group.element[37].extension[0].extension[2].url = "cardinalityMax"
* group.element[37].extension[0].extension[2].valueInteger = 1
* group.element[37].display = "Comprehensive Location Identifier"
* group.element[37].target.equivalence = #equivalent
* group.element[37].target.code = #[2].identifier[2]
* group.element[37].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[37].target.extension[0].extension[0].url = "type"
* group.element[37].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[37].target.display = "[2].identifier[2]"
* group.element[38].code = #PL.10
* group.element[38].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[38].extension[0].extension[0].url = "type"
* group.element[38].extension[0].extension[0].valueCode = #"EI"
* group.element[38].extension[0].extension[1].url = "cardinalityMin"
* group.element[38].extension[0].extension[1].valueInteger = 0
* group.element[38].extension[0].extension[2].url = "cardinalityMax"
* group.element[38].extension[0].extension[2].valueInteger = 1
* group.element[38].display = "Comprehensive Location Identifier"
* group.element[38].target.equivalence = #equivalent
* group.element[38].target.code = #[4].identifier[2]
* group.element[38].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[38].target.extension[0].extension[0].url = "type"
* group.element[38].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[38].target.display = "[4].identifier[2]"
* group.element[39].code = #PL.10
* group.element[39].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[39].extension[0].extension[0].url = "type"
* group.element[39].extension[0].extension[0].valueCode = #"EI"
* group.element[39].extension[0].extension[1].url = "cardinalityMin"
* group.element[39].extension[0].extension[1].valueInteger = 0
* group.element[39].extension[0].extension[2].url = "cardinalityMax"
* group.element[39].extension[0].extension[2].valueInteger = 1
* group.element[39].display = "Comprehensive Location Identifier"
* group.element[39].target.equivalence = #equivalent
* group.element[39].target.code = #[3].identifier[2]
* group.element[39].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[39].target.extension[0].extension[0].url = "type"
* group.element[39].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[39].target.display = "[3].identifier[2]"
* group.element[40].code = #PL.10
* group.element[40].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[40].extension[0].extension[0].url = "type"
* group.element[40].extension[0].extension[0].valueCode = #"EI"
* group.element[40].extension[0].extension[1].url = "cardinalityMin"
* group.element[40].extension[0].extension[1].valueInteger = 0
* group.element[40].extension[0].extension[2].url = "cardinalityMax"
* group.element[40].extension[0].extension[2].valueInteger = 1
* group.element[40].display = "Comprehensive Location Identifier"
* group.element[40].target.equivalence = #equivalent
* group.element[40].target.code = #[5].identifier[2]
* group.element[40].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[40].target.extension[0].extension[0].url = "type"
* group.element[40].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[40].target.display = "[5].identifier[2]"
* group.element[41].code = #PL.10
* group.element[41].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[41].extension[0].extension[0].url = "type"
* group.element[41].extension[0].extension[0].valueCode = #"EI"
* group.element[41].extension[0].extension[1].url = "cardinalityMin"
* group.element[41].extension[0].extension[1].valueInteger = 0
* group.element[41].extension[0].extension[2].url = "cardinalityMax"
* group.element[41].extension[0].extension[2].valueInteger = 1
* group.element[41].display = "Comprehensive Location Identifier"
* group.element[41].target.equivalence = #equivalent
* group.element[41].target.code = #[6].identifier[2]
* group.element[41].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[41].target.extension[0].extension[0].url = "type"
* group.element[41].target.extension[0].extension[0].valueCode = #"Identifier"
* group.element[41].target.display = "[6].identifier[2]"
* group.element[42].code = #PL.11
* group.element[42].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[42].extension[0].extension[0].url = "type"
* group.element[42].extension[0].extension[0].valueCode = #"HD"
* group.element[42].extension[0].extension[1].url = "cardinalityMin"
* group.element[42].extension[0].extension[1].valueInteger = 0
* group.element[42].extension[0].extension[2].url = "cardinalityMax"
* group.element[42].extension[0].extension[2].valueInteger = 1
* group.element[42].display = "Assigning Authority for Location"
* group.element[42].target.equivalence = #equivalent
* group.element[42].target.code = #[1-6].identifier[1].assigner(Organization)
* group.element[42].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[42].target.extension[0].extension[0].url = "type"
* group.element[42].target.extension[0].extension[0].valueCode = #"Reference"
* group.element[42].target.display = "[1-6].identifier[1].assigner(Organization)"
* group.element[43].code = #PL.11
* group.element[43].extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[43].extension[0].extension[0].url = "type"
* group.element[43].extension[0].extension[0].valueCode = #"HD"
* group.element[43].extension[0].extension[1].url = "cardinalityMin"
* group.element[43].extension[0].extension[1].valueInteger = 0
* group.element[43].extension[0].extension[2].url = "cardinalityMax"
* group.element[43].extension[0].extension[2].valueInteger = 1
* group.element[43].display = "Assigning Authority for Location"
* group.element[43].target.equivalence = #equivalent
* group.element[43].target.code = #[1-6].identifier[2].assigner(Organization)
* group.element[43].target.extension[0].url = "http://hl7.org/fhir/uv/v2mappings/StructureDefinition/TypeInfo"
* group.element[43].target.extension[0].extension[0].url = "type"
* group.element[43].target.extension[0].extension[0].valueCode = #"Reference"
* group.element[43].target.display = "[1-6].identifier[2].assigner(Organization)"


---

File: repos/HL7_SLASH_v2-to-fhir/input/images/README.md

If you have images, they go in this folder.

---

File: repos/HL7_SLASH_v2-to-fhir/input/images-source/README.md

If you have source files which are used to generate images (e.g., A Power Point presentation, they go here.)

---

File: repos/HL7_SLASH_v2-to-fhir/input/pagecontent/acknowledgements.md

HL7 would like to thank the following individuals for their contributions to this project:

* [Hans Buitendijk](https://www.linkedin.com/in/buitendijk-hans-203599/) - Project Co-Lead - Cerner Corporation
* Craig Newman - Project Co-Lead - Altarum
* [Keith Boone](https://www.linkedin.com/in/keithwboone/) - Publishing Facilitator - Audacious Inquiry
* [Rob Hausam](https://www.linkedin.com/in/robert-hausam-a273aa7/) - OO WG Co-Chair - Hausam Consulting LLC
* Deepak Bansal - Microsoft
* [David Burgess](https://www.linkedin.com/in/david-burgess-272648a4/) - LabCorp
* [Grahame Grieve](https://www.linkedin.com/in/grahame-grieve-952637/)
* [Yatish Gupta](https://www.linkedin.com/in/yatish-gupta-a0053724/) - Google
* [Michael Hansen](https://www.linkedin.com/in/michael-hansen-77b15711/) - Microsoft
* [Ralf Herzog](https://www.linkedin.com/in/ralf-h-91897a146/) - Roche
* [Sajjad Hussain](https://www.linkedin.com/in/contact-sajjad/) - Google
* [Deb Markussen](https://www.linkedin.com/in/deb-markussen-7772046/) - Cerner Corporation
* [Roman Polyanovsky](https://www.linkedin.com/in/roman-polyanovsky/) - Google
* [Jason Suchon](https://www.linkedin.com/in/jason-suchon-5504147/) - Metastar
* [Caitlin Voegele](https://www.linkedin.com/in/caitlin-voegele/) - Microsoft
* [Kathy Walsh](https://www.linkedin.com/in/katherine-walsh-15536145/) - LabCorp
* Danny Wise - Allscripts
* [Robert Worden](https://www.linkedin.com/in/robert-worden-b3a5843/)

If you actively participate in the project, or have contributed content, but you are not listed, please let us know to acknowledge your contributions.



---

