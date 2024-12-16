File: repos/HL7_SLASH_fhir-saner/input/fsh/aliases.fsh

Alias: $Base = http://hl7.org/fhir/uv/saner
Alias: HSLOC = https://www.cdc.gov/nhsn/cdaportal/terminology/codesystem/hsloc.html
Alias: ICD10CM = http://hl7.org/fhir/sid/icd-10-cm
Alias: SCT = http://snomed.info/sct
Alias: LOINC = http://loinc.org
Alias: RXNORM = http://www.nlm.nih.gov/research/umls/rxnorm
Alias: ROLECODE = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: UCUM = http://unitsofmeasure.com
Alias: CPT = http://www.ama-assn.org/go/cpt
Alias: SCORING = http://terminology.hl7.org/CodeSystem/measure-scoring
Alias: MTYPE = http://terminology.hl7.org/CodeSystem/measure-type
Alias: RESTYPE = http://hl7.org/fhir/resource-types
Alias: MESIMP = http://terminology.hl7.org/CodeSystem/measure-improvement-notation
Alias: SPECTYPE = http://terminology.hl7.org/CodeSystem/special-values
Alias: MEASVALS = http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues
Alias: MEASPOP = http://terminology.hl7.org/CodeSystem/measure-population
Alias: LIBTYPE = http://terminology.hl7.org/CodeSystem/library-type


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-DataSource-ComputeMeasure.fsh


Instance: DataSource-ComputeMeasure
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Data Source implementing the Compute Measure transaction."""
* insert SanerDefinitionContent
* name = "DataSource_ComputeMeasure"
* title = "Data Source implementing the Compute Measure transaction."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the requirements for the Data Source implementing the Compute Measure transaction."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[PatientSlice].type = #Patient

* rest[serverSlice].resource[PatientSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[PatientSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[PatientSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[PatientSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[PatientSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[PatientSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[PatientSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[PatientSlice].searchParam[1].name = "date"
* rest[serverSlice].resource[PatientSlice].searchParam[1].type = #date
* rest[serverSlice].resource[PatientSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[PatientSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[PatientSlice].searchParam[2].name = "class"
* rest[serverSlice].resource[PatientSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[PatientSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[PatientSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[PatientSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[PatientSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[PatientSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[PatientSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[PatientSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[PatientSlice].extension[1].extension[0].valueString = "_id"
* rest[serverSlice].resource[PatientSlice].extension[1].extension[1].url = "required"
* rest[serverSlice].resource[PatientSlice].extension[1].extension[1].valueString = "class"
* rest[serverSlice].resource[PatientSlice].extension[1].extension[2].url = "optional"
* rest[serverSlice].resource[PatientSlice].extension[1].extension[2].valueString = "date"

* rest[serverSlice].resource[EncounterSlice].type = #Encounter

* rest[serverSlice].resource[EncounterSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[EncounterSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[EncounterSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[EncounterSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].searchParam[1].name = "date"
* rest[serverSlice].resource[EncounterSlice].searchParam[1].type = #date
* rest[serverSlice].resource[EncounterSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].searchParam[2].name = "class"
* rest[serverSlice].resource[EncounterSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[EncounterSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].searchParam[3].name = "patient"
* rest[serverSlice].resource[EncounterSlice].searchParam[3].type = #reference
* rest[serverSlice].resource[EncounterSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].searchParam[4].name = "encounter"
* rest[serverSlice].resource[EncounterSlice].searchParam[4].type = #reference
* rest[serverSlice].resource[EncounterSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].searchParam[4].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].searchParam[5].name = "code"
* rest[serverSlice].resource[EncounterSlice].searchParam[5].type = #token
* rest[serverSlice].resource[EncounterSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].searchParam[5].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[EncounterSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[EncounterSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[EncounterSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[1].extension[0].valueString = "_id"
* rest[serverSlice].resource[EncounterSlice].extension[1].extension[1].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[1].extension[1].valueString = "class"
* rest[serverSlice].resource[EncounterSlice].extension[1].extension[2].url = "optional"
* rest[serverSlice].resource[EncounterSlice].extension[1].extension[2].valueString = "date"

* rest[serverSlice].resource[EncounterSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[0].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[0].valueString = "_id"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[1].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[1].valueString = "patient"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[2].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[2].valueString = "encounter"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[3].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[3].valueString = "code"

* rest[serverSlice].resource[AllergyIntoleranceSlice].type = #AllergyIntolerance

* rest[serverSlice].resource[AllergyIntoleranceSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[AllergyIntoleranceSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[AllergyIntoleranceSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[3].type = #token
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[ConditionSlice].type = #Condition

* rest[serverSlice].resource[ConditionSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[ConditionSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConditionSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConditionSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[ConditionSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[ConditionSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConditionSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConditionSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[ConditionSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[ConditionSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConditionSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConditionSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[ConditionSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[ConditionSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConditionSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConditionSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[ConditionSlice].searchParam[3].type = #token
* rest[serverSlice].resource[ConditionSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConditionSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConditionSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[DiagnosticReportSlice].type = #DiagnosticReport

* rest[serverSlice].resource[DiagnosticReportSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[DiagnosticReportSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DiagnosticReportSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[3].type = #token
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[MedicationRequestSlice].type = #MedicationRequest

* rest[serverSlice].resource[MedicationRequestSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[MedicationRequestSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationRequestSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationRequestSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationRequestSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationRequestSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationRequestSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[3].type = #token
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationRequestSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[ObservationSlice].type = #Observation

* rest[serverSlice].resource[ObservationSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[ObservationSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ObservationSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ObservationSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[ObservationSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[ObservationSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ObservationSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ObservationSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[ObservationSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[ObservationSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ObservationSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ObservationSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[ObservationSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[ObservationSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ObservationSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[ObservationSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[ObservationSlice].searchParam[3].type = #token
* rest[serverSlice].resource[ObservationSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ObservationSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[ObservationSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[ProcedureSlice].type = #Procedure

* rest[serverSlice].resource[ProcedureSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[ProcedureSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ProcedureSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ProcedureSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[ProcedureSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[ProcedureSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ProcedureSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ProcedureSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[ProcedureSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[ProcedureSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ProcedureSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ProcedureSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[ProcedureSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[ProcedureSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ProcedureSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[ProcedureSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[ProcedureSlice].searchParam[3].type = #token
* rest[serverSlice].resource[ProcedureSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ProcedureSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[ProcedureSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[ServiceRequestSlice].type = #ServiceRequest

* rest[serverSlice].resource[ServiceRequestSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[ServiceRequestSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ServiceRequestSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ServiceRequestSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ServiceRequestSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ServiceRequestSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[ServiceRequestSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[3].type = #token
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[ServiceRequestSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[DocumentReferenceSlice].type = #DocumentReference

* rest[serverSlice].resource[DocumentReferenceSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[DocumentReferenceSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DocumentReferenceSlice].interaction[0].extension.valueCode = #SHOULD

* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[3].type = #token
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[FamilyMemberHistorySlice].type = #FamilyMemberHistory

* rest[serverSlice].resource[FamilyMemberHistorySlice].interaction[0].code = #search-type
* rest[serverSlice].resource[FamilyMemberHistorySlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[FamilyMemberHistorySlice].interaction[0].extension.valueCode = #SHOULD

* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[0].type = #reference
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[1].type = #reference
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[2].type = #reference
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[3].name = "code"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[3].type = #token
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[MedicationAdministrationSlice].type = #MedicationAdministration

* rest[serverSlice].resource[MedicationAdministrationSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[MedicationAdministrationSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationAdministrationSlice].interaction[0].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[3].type = #token
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[MedicationDispenseSlice].type = #MedicationDispense

* rest[serverSlice].resource[MedicationDispenseSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[MedicationDispenseSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationDispenseSlice].interaction[0].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[3].type = #token
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[MedicationStatementSlice].type = #MedicationStatement

* rest[serverSlice].resource[MedicationStatementSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[MedicationStatementSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationStatementSlice].interaction[0].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MedicationStatementSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationStatementSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationStatementSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationStatementSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[3].type = #token
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationStatementSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[3].valueString = "code"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-DataSource.fsh


Instance: DataSource
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Data Source."""
* insert SanerDefinitionContent
* name = "DataSource"
* title = "Data Source."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the requirements for the Data Source."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[PatientSlice].type = #Patient

* rest[serverSlice].resource[PatientSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[PatientSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[PatientSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[PatientSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[PatientSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[PatientSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[PatientSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[PatientSlice].searchParam[1].name = "date"
* rest[serverSlice].resource[PatientSlice].searchParam[1].type = #date
* rest[serverSlice].resource[PatientSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[PatientSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[PatientSlice].searchParam[2].name = "class"
* rest[serverSlice].resource[PatientSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[PatientSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[PatientSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[PatientSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[PatientSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[PatientSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[PatientSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[PatientSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[PatientSlice].extension[1].extension[0].valueString = "_id"
* rest[serverSlice].resource[PatientSlice].extension[1].extension[1].url = "required"
* rest[serverSlice].resource[PatientSlice].extension[1].extension[1].valueString = "class"
* rest[serverSlice].resource[PatientSlice].extension[1].extension[2].url = "optional"
* rest[serverSlice].resource[PatientSlice].extension[1].extension[2].valueString = "date"

* rest[serverSlice].resource[EncounterSlice].type = #Encounter

* rest[serverSlice].resource[EncounterSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[EncounterSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[EncounterSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[EncounterSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].searchParam[1].name = "date"
* rest[serverSlice].resource[EncounterSlice].searchParam[1].type = #date
* rest[serverSlice].resource[EncounterSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].searchParam[2].name = "class"
* rest[serverSlice].resource[EncounterSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[EncounterSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].searchParam[3].name = "patient"
* rest[serverSlice].resource[EncounterSlice].searchParam[3].type = #reference
* rest[serverSlice].resource[EncounterSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].searchParam[4].name = "encounter"
* rest[serverSlice].resource[EncounterSlice].searchParam[4].type = #reference
* rest[serverSlice].resource[EncounterSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].searchParam[4].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].searchParam[5].name = "code"
* rest[serverSlice].resource[EncounterSlice].searchParam[5].type = #token
* rest[serverSlice].resource[EncounterSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].searchParam[5].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[EncounterSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[EncounterSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[EncounterSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[1].extension[0].valueString = "_id"
* rest[serverSlice].resource[EncounterSlice].extension[1].extension[1].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[1].extension[1].valueString = "class"
* rest[serverSlice].resource[EncounterSlice].extension[1].extension[2].url = "optional"
* rest[serverSlice].resource[EncounterSlice].extension[1].extension[2].valueString = "date"

* rest[serverSlice].resource[EncounterSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[0].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[0].valueString = "_id"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[1].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[1].valueString = "patient"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[2].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[2].valueString = "encounter"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[3].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[3].valueString = "code"

* rest[serverSlice].resource[AllergyIntoleranceSlice].type = #AllergyIntolerance

* rest[serverSlice].resource[AllergyIntoleranceSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[AllergyIntoleranceSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[AllergyIntoleranceSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[3].type = #token
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[ConditionSlice].type = #Condition

* rest[serverSlice].resource[ConditionSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[ConditionSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConditionSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConditionSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[ConditionSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[ConditionSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConditionSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConditionSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[ConditionSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[ConditionSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConditionSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConditionSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[ConditionSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[ConditionSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConditionSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConditionSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[ConditionSlice].searchParam[3].type = #token
* rest[serverSlice].resource[ConditionSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConditionSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConditionSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[DiagnosticReportSlice].type = #DiagnosticReport

* rest[serverSlice].resource[DiagnosticReportSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[DiagnosticReportSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DiagnosticReportSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[3].type = #token
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[MedicationRequestSlice].type = #MedicationRequest

* rest[serverSlice].resource[MedicationRequestSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[MedicationRequestSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationRequestSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationRequestSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationRequestSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationRequestSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationRequestSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[3].type = #token
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationRequestSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[ObservationSlice].type = #Observation

* rest[serverSlice].resource[ObservationSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[ObservationSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ObservationSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ObservationSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[ObservationSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[ObservationSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ObservationSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ObservationSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[ObservationSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[ObservationSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ObservationSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ObservationSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[ObservationSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[ObservationSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ObservationSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[ObservationSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[ObservationSlice].searchParam[3].type = #token
* rest[serverSlice].resource[ObservationSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ObservationSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[ObservationSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[ProcedureSlice].type = #Procedure

* rest[serverSlice].resource[ProcedureSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[ProcedureSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ProcedureSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ProcedureSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[ProcedureSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[ProcedureSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ProcedureSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ProcedureSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[ProcedureSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[ProcedureSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ProcedureSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ProcedureSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[ProcedureSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[ProcedureSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ProcedureSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[ProcedureSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[ProcedureSlice].searchParam[3].type = #token
* rest[serverSlice].resource[ProcedureSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ProcedureSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[ProcedureSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[ServiceRequestSlice].type = #ServiceRequest

* rest[serverSlice].resource[ServiceRequestSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[ServiceRequestSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ServiceRequestSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ServiceRequestSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ServiceRequestSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ServiceRequestSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[ServiceRequestSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[3].type = #token
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[ServiceRequestSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[DocumentReferenceSlice].type = #DocumentReference

* rest[serverSlice].resource[DocumentReferenceSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[DocumentReferenceSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DocumentReferenceSlice].interaction[0].extension.valueCode = #SHOULD

* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[3].type = #token
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[FamilyMemberHistorySlice].type = #FamilyMemberHistory

* rest[serverSlice].resource[FamilyMemberHistorySlice].interaction[0].code = #search-type
* rest[serverSlice].resource[FamilyMemberHistorySlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[FamilyMemberHistorySlice].interaction[0].extension.valueCode = #SHOULD

* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[0].type = #reference
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[1].type = #reference
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[2].type = #reference
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[3].name = "code"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[3].type = #token
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[MedicationAdministrationSlice].type = #MedicationAdministration

* rest[serverSlice].resource[MedicationAdministrationSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[MedicationAdministrationSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationAdministrationSlice].interaction[0].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[3].type = #token
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[MedicationDispenseSlice].type = #MedicationDispense

* rest[serverSlice].resource[MedicationDispenseSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[MedicationDispenseSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationDispenseSlice].interaction[0].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[3].type = #token
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[MedicationStatementSlice].type = #MedicationStatement

* rest[serverSlice].resource[MedicationStatementSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[MedicationStatementSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationStatementSlice].interaction[0].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MedicationStatementSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationStatementSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationStatementSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationStatementSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[3].type = #token
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationStatementSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[3].valueString = "code"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureComputer-ComputeMeasure.fsh


Instance: MeasureComputer-ComputeMeasure
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Measure Computer implementing the Compute Measure transaction."""
* insert SanerDefinitionContent
* name = "MeasureComputer_ComputeMeasure"
* title = "Measure Computer implementing the Compute Measure transaction."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the requirements for the Measure Computer implementing the Compute Measure transaction."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[MeasureSlice].type = #Measure

* rest[clientSlice].resource[MeasureSlice].operation[0].name = "evaluate-measure"
* rest[clientSlice].resource[MeasureSlice].operation[0].definition = "http://hl7.org/fhir/uv/saner/OperationDefinition/Measure-evaluate-measure"
* rest[clientSlice].resource[MeasureSlice].operation[0].documentation = "Evaluate the measure"

* rest[clientSlice].resource[PatientSlice].type = #Patient

* rest[clientSlice].resource[PatientSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[PatientSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[PatientSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[PatientSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[PatientSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[PatientSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[PatientSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[PatientSlice].searchParam[1].name = "date"
* rest[clientSlice].resource[PatientSlice].searchParam[1].type = #date
* rest[clientSlice].resource[PatientSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[PatientSlice].searchParam[1].extension.valueCode = #MAY

* rest[clientSlice].resource[PatientSlice].searchParam[2].name = "class"
* rest[clientSlice].resource[PatientSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[PatientSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[PatientSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[PatientSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[PatientSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[PatientSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[PatientSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[PatientSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[PatientSlice].extension[1].extension[0].valueString = "_id"
* rest[clientSlice].resource[PatientSlice].extension[1].extension[1].url = "required"
* rest[clientSlice].resource[PatientSlice].extension[1].extension[1].valueString = "class"
* rest[clientSlice].resource[PatientSlice].extension[1].extension[2].url = "optional"
* rest[clientSlice].resource[PatientSlice].extension[1].extension[2].valueString = "date"

* rest[clientSlice].resource[EncounterSlice].type = #Encounter

* rest[clientSlice].resource[EncounterSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[EncounterSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[EncounterSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[EncounterSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[EncounterSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[EncounterSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[EncounterSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[EncounterSlice].searchParam[1].name = "date"
* rest[clientSlice].resource[EncounterSlice].searchParam[1].type = #date
* rest[clientSlice].resource[EncounterSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[EncounterSlice].searchParam[1].extension.valueCode = #MAY

* rest[clientSlice].resource[EncounterSlice].searchParam[2].name = "class"
* rest[clientSlice].resource[EncounterSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[EncounterSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[EncounterSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[EncounterSlice].searchParam[3].name = "patient"
* rest[clientSlice].resource[EncounterSlice].searchParam[3].type = #reference
* rest[clientSlice].resource[EncounterSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[EncounterSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[EncounterSlice].searchParam[4].name = "encounter"
* rest[clientSlice].resource[EncounterSlice].searchParam[4].type = #reference
* rest[clientSlice].resource[EncounterSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[EncounterSlice].searchParam[4].extension.valueCode = #SHALL

* rest[clientSlice].resource[EncounterSlice].searchParam[5].name = "code"
* rest[clientSlice].resource[EncounterSlice].searchParam[5].type = #token
* rest[clientSlice].resource[EncounterSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[EncounterSlice].searchParam[5].extension.valueCode = #SHALL

* rest[clientSlice].resource[EncounterSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[EncounterSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[EncounterSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[EncounterSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[EncounterSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[EncounterSlice].extension[1].extension[0].valueString = "_id"
* rest[clientSlice].resource[EncounterSlice].extension[1].extension[1].url = "required"
* rest[clientSlice].resource[EncounterSlice].extension[1].extension[1].valueString = "class"
* rest[clientSlice].resource[EncounterSlice].extension[1].extension[2].url = "optional"
* rest[clientSlice].resource[EncounterSlice].extension[1].extension[2].valueString = "date"

* rest[clientSlice].resource[EncounterSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[EncounterSlice].extension[2].extension[0].url = "required"
* rest[clientSlice].resource[EncounterSlice].extension[2].extension[0].valueString = "_id"
* rest[clientSlice].resource[EncounterSlice].extension[2].extension[1].url = "required"
* rest[clientSlice].resource[EncounterSlice].extension[2].extension[1].valueString = "patient"
* rest[clientSlice].resource[EncounterSlice].extension[2].extension[2].url = "required"
* rest[clientSlice].resource[EncounterSlice].extension[2].extension[2].valueString = "encounter"
* rest[clientSlice].resource[EncounterSlice].extension[2].extension[3].url = "required"
* rest[clientSlice].resource[EncounterSlice].extension[2].extension[3].valueString = "code"

* rest[clientSlice].resource[AllergyIntoleranceSlice].type = #AllergyIntolerance

* rest[clientSlice].resource[AllergyIntoleranceSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[AllergyIntoleranceSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[AllergyIntoleranceSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[3].type = #token
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[AllergyIntoleranceSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[AllergyIntoleranceSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[AllergyIntoleranceSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[AllergyIntoleranceSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[AllergyIntoleranceSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[AllergyIntoleranceSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[AllergyIntoleranceSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[AllergyIntoleranceSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[AllergyIntoleranceSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[ConditionSlice].type = #Condition

* rest[clientSlice].resource[ConditionSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[ConditionSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConditionSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[ConditionSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[ConditionSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[ConditionSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConditionSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[ConditionSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[ConditionSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[ConditionSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConditionSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[ConditionSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[ConditionSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[ConditionSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConditionSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[ConditionSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[ConditionSlice].searchParam[3].type = #token
* rest[clientSlice].resource[ConditionSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConditionSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[ConditionSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[ConditionSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[ConditionSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[ConditionSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[ConditionSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[ConditionSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[ConditionSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[ConditionSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[ConditionSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[DiagnosticReportSlice].type = #DiagnosticReport

* rest[clientSlice].resource[DiagnosticReportSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[DiagnosticReportSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DiagnosticReportSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[3].type = #token
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[DiagnosticReportSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[DiagnosticReportSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[DiagnosticReportSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[DiagnosticReportSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[DiagnosticReportSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[DiagnosticReportSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[DiagnosticReportSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[DiagnosticReportSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[DiagnosticReportSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[MedicationRequestSlice].type = #MedicationRequest

* rest[clientSlice].resource[MedicationRequestSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[MedicationRequestSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationRequestSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[MedicationRequestSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationRequestSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationRequestSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationRequestSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[3].type = #token
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationRequestSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MedicationRequestSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[MedicationRequestSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[MedicationRequestSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[MedicationRequestSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[MedicationRequestSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[MedicationRequestSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[MedicationRequestSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[MedicationRequestSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[ObservationSlice].type = #Observation

* rest[clientSlice].resource[ObservationSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[ObservationSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ObservationSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[ObservationSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[ObservationSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[ObservationSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ObservationSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[ObservationSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[ObservationSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[ObservationSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ObservationSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[ObservationSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[ObservationSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[ObservationSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ObservationSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[ObservationSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[ObservationSlice].searchParam[3].type = #token
* rest[clientSlice].resource[ObservationSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ObservationSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[ObservationSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[ObservationSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[ObservationSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[ObservationSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[ObservationSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[ObservationSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[ObservationSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[ObservationSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[ObservationSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[ProcedureSlice].type = #Procedure

* rest[clientSlice].resource[ProcedureSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[ProcedureSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ProcedureSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[ProcedureSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[ProcedureSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[ProcedureSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ProcedureSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[ProcedureSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[ProcedureSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[ProcedureSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ProcedureSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[ProcedureSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[ProcedureSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[ProcedureSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ProcedureSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[ProcedureSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[ProcedureSlice].searchParam[3].type = #token
* rest[clientSlice].resource[ProcedureSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ProcedureSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[ProcedureSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[ProcedureSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[ProcedureSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[ProcedureSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[ProcedureSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[ProcedureSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[ProcedureSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[ProcedureSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[ProcedureSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[ServiceRequestSlice].type = #ServiceRequest

* rest[clientSlice].resource[ServiceRequestSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[ServiceRequestSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ServiceRequestSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[ServiceRequestSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[ServiceRequestSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[ServiceRequestSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[ServiceRequestSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[3].type = #token
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[ServiceRequestSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[ServiceRequestSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[ServiceRequestSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[ServiceRequestSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[ServiceRequestSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[ServiceRequestSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[ServiceRequestSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[ServiceRequestSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[ServiceRequestSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[DocumentReferenceSlice].type = #DocumentReference

* rest[clientSlice].resource[DocumentReferenceSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[DocumentReferenceSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DocumentReferenceSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[3].type = #token
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[DocumentReferenceSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[DocumentReferenceSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[DocumentReferenceSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[DocumentReferenceSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[DocumentReferenceSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[DocumentReferenceSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[DocumentReferenceSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[DocumentReferenceSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[DocumentReferenceSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[FamilyMemberHistorySlice].type = #FamilyMemberHistory

* rest[clientSlice].resource[FamilyMemberHistorySlice].interaction[0].code = #search-type
* rest[clientSlice].resource[FamilyMemberHistorySlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[FamilyMemberHistorySlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[0].type = #reference
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[1].type = #reference
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[2].type = #reference
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[3].name = "code"
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[3].type = #token
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[FamilyMemberHistorySlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[FamilyMemberHistorySlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[FamilyMemberHistorySlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[FamilyMemberHistorySlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[FamilyMemberHistorySlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[FamilyMemberHistorySlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[FamilyMemberHistorySlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[FamilyMemberHistorySlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[FamilyMemberHistorySlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[MedicationAdministrationSlice].type = #MedicationAdministration

* rest[clientSlice].resource[MedicationAdministrationSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[MedicationAdministrationSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationAdministrationSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[3].type = #token
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationAdministrationSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MedicationAdministrationSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[MedicationAdministrationSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[MedicationAdministrationSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[MedicationAdministrationSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[MedicationAdministrationSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[MedicationAdministrationSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[MedicationAdministrationSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[MedicationAdministrationSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[MedicationDispenseSlice].type = #MedicationDispense

* rest[clientSlice].resource[MedicationDispenseSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[MedicationDispenseSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationDispenseSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[3].type = #token
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationDispenseSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MedicationDispenseSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[MedicationDispenseSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[MedicationDispenseSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[MedicationDispenseSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[MedicationDispenseSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[MedicationDispenseSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[MedicationDispenseSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[MedicationDispenseSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[MedicationStatementSlice].type = #MedicationStatement

* rest[clientSlice].resource[MedicationStatementSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[MedicationStatementSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationStatementSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[MedicationStatementSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationStatementSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationStatementSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationStatementSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[3].type = #token
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationStatementSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MedicationStatementSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[MedicationStatementSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[MedicationStatementSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[MedicationStatementSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[MedicationStatementSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[MedicationStatementSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[MedicationStatementSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[MedicationStatementSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[MeasureSlice].type = #Measure

* rest[serverSlice].resource[MeasureSlice].operation[0].name = "evaluate-measure"
* rest[serverSlice].resource[MeasureSlice].operation[0].definition = "http://hl7.org/fhir/uv/saner/OperationDefinition/Measure-evaluate-measure"
* rest[serverSlice].resource[MeasureSlice].operation[0].documentation = "Evaluate the measure"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureComputer.fsh


Instance: MeasureComputer
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Measure Computer."""
* insert SanerDefinitionContent
* name = "MeasureComputer"
* title = "Measure Computer"
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the requirements for the Measure Computer."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[MeasureSlice].type = #Measure

* rest[clientSlice].resource[MeasureSlice].operation[0].name = "evaluate-measure"
* rest[clientSlice].resource[MeasureSlice].operation[0].definition = "http://hl7.org/fhir/uv/saner/OperationDefinition/Measure-evaluate-measure"
* rest[clientSlice].resource[MeasureSlice].operation[0].documentation = "Evaluate the measure"

* rest[clientSlice].resource[PatientSlice].type = #Patient

* rest[clientSlice].resource[PatientSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[PatientSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[PatientSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[PatientSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[PatientSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[PatientSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[PatientSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[PatientSlice].searchParam[1].name = "date"
* rest[clientSlice].resource[PatientSlice].searchParam[1].type = #date
* rest[clientSlice].resource[PatientSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[PatientSlice].searchParam[1].extension.valueCode = #MAY

* rest[clientSlice].resource[PatientSlice].searchParam[2].name = "class"
* rest[clientSlice].resource[PatientSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[PatientSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[PatientSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[PatientSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[PatientSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[PatientSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[PatientSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[PatientSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[PatientSlice].extension[1].extension[0].valueString = "_id"
* rest[clientSlice].resource[PatientSlice].extension[1].extension[1].url = "required"
* rest[clientSlice].resource[PatientSlice].extension[1].extension[1].valueString = "class"
* rest[clientSlice].resource[PatientSlice].extension[1].extension[2].url = "optional"
* rest[clientSlice].resource[PatientSlice].extension[1].extension[2].valueString = "date"

* rest[clientSlice].resource[EncounterSlice].type = #Encounter

* rest[clientSlice].resource[EncounterSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[EncounterSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[EncounterSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[EncounterSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[EncounterSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[EncounterSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[EncounterSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[EncounterSlice].searchParam[1].name = "date"
* rest[clientSlice].resource[EncounterSlice].searchParam[1].type = #date
* rest[clientSlice].resource[EncounterSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[EncounterSlice].searchParam[1].extension.valueCode = #MAY

* rest[clientSlice].resource[EncounterSlice].searchParam[2].name = "class"
* rest[clientSlice].resource[EncounterSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[EncounterSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[EncounterSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[EncounterSlice].searchParam[3].name = "patient"
* rest[clientSlice].resource[EncounterSlice].searchParam[3].type = #reference
* rest[clientSlice].resource[EncounterSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[EncounterSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[EncounterSlice].searchParam[4].name = "encounter"
* rest[clientSlice].resource[EncounterSlice].searchParam[4].type = #reference
* rest[clientSlice].resource[EncounterSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[EncounterSlice].searchParam[4].extension.valueCode = #SHALL

* rest[clientSlice].resource[EncounterSlice].searchParam[5].name = "code"
* rest[clientSlice].resource[EncounterSlice].searchParam[5].type = #token
* rest[clientSlice].resource[EncounterSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[EncounterSlice].searchParam[5].extension.valueCode = #SHALL

* rest[clientSlice].resource[EncounterSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[EncounterSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[EncounterSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[EncounterSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[EncounterSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[EncounterSlice].extension[1].extension[0].valueString = "_id"
* rest[clientSlice].resource[EncounterSlice].extension[1].extension[1].url = "required"
* rest[clientSlice].resource[EncounterSlice].extension[1].extension[1].valueString = "class"
* rest[clientSlice].resource[EncounterSlice].extension[1].extension[2].url = "optional"
* rest[clientSlice].resource[EncounterSlice].extension[1].extension[2].valueString = "date"

* rest[clientSlice].resource[EncounterSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[EncounterSlice].extension[2].extension[0].url = "required"
* rest[clientSlice].resource[EncounterSlice].extension[2].extension[0].valueString = "_id"
* rest[clientSlice].resource[EncounterSlice].extension[2].extension[1].url = "required"
* rest[clientSlice].resource[EncounterSlice].extension[2].extension[1].valueString = "patient"
* rest[clientSlice].resource[EncounterSlice].extension[2].extension[2].url = "required"
* rest[clientSlice].resource[EncounterSlice].extension[2].extension[2].valueString = "encounter"
* rest[clientSlice].resource[EncounterSlice].extension[2].extension[3].url = "required"
* rest[clientSlice].resource[EncounterSlice].extension[2].extension[3].valueString = "code"

* rest[clientSlice].resource[AllergyIntoleranceSlice].type = #AllergyIntolerance

* rest[clientSlice].resource[AllergyIntoleranceSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[AllergyIntoleranceSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[AllergyIntoleranceSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[3].type = #token
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[AllergyIntoleranceSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[AllergyIntoleranceSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[AllergyIntoleranceSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[AllergyIntoleranceSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[AllergyIntoleranceSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[AllergyIntoleranceSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[AllergyIntoleranceSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[AllergyIntoleranceSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[AllergyIntoleranceSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[AllergyIntoleranceSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[ConditionSlice].type = #Condition

* rest[clientSlice].resource[ConditionSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[ConditionSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConditionSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[ConditionSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[ConditionSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[ConditionSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConditionSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[ConditionSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[ConditionSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[ConditionSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConditionSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[ConditionSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[ConditionSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[ConditionSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConditionSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[ConditionSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[ConditionSlice].searchParam[3].type = #token
* rest[clientSlice].resource[ConditionSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConditionSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[ConditionSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[ConditionSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[ConditionSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[ConditionSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[ConditionSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[ConditionSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[ConditionSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[ConditionSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[ConditionSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[DiagnosticReportSlice].type = #DiagnosticReport

* rest[clientSlice].resource[DiagnosticReportSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[DiagnosticReportSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DiagnosticReportSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[3].type = #token
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DiagnosticReportSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[DiagnosticReportSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[DiagnosticReportSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[DiagnosticReportSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[DiagnosticReportSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[DiagnosticReportSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[DiagnosticReportSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[DiagnosticReportSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[DiagnosticReportSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[DiagnosticReportSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[MedicationRequestSlice].type = #MedicationRequest

* rest[clientSlice].resource[MedicationRequestSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[MedicationRequestSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationRequestSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[MedicationRequestSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationRequestSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationRequestSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationRequestSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[3].type = #token
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationRequestSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationRequestSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MedicationRequestSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[MedicationRequestSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[MedicationRequestSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[MedicationRequestSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[MedicationRequestSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[MedicationRequestSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[MedicationRequestSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[MedicationRequestSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[ObservationSlice].type = #Observation

* rest[clientSlice].resource[ObservationSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[ObservationSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ObservationSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[ObservationSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[ObservationSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[ObservationSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ObservationSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[ObservationSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[ObservationSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[ObservationSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ObservationSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[ObservationSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[ObservationSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[ObservationSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ObservationSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[ObservationSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[ObservationSlice].searchParam[3].type = #token
* rest[clientSlice].resource[ObservationSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ObservationSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[ObservationSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[ObservationSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[ObservationSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[ObservationSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[ObservationSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[ObservationSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[ObservationSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[ObservationSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[ObservationSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[ProcedureSlice].type = #Procedure

* rest[clientSlice].resource[ProcedureSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[ProcedureSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ProcedureSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[ProcedureSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[ProcedureSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[ProcedureSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ProcedureSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[ProcedureSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[ProcedureSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[ProcedureSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ProcedureSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[ProcedureSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[ProcedureSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[ProcedureSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ProcedureSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[ProcedureSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[ProcedureSlice].searchParam[3].type = #token
* rest[clientSlice].resource[ProcedureSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ProcedureSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[ProcedureSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[ProcedureSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[ProcedureSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[ProcedureSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[ProcedureSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[ProcedureSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[ProcedureSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[ProcedureSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[ProcedureSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[ServiceRequestSlice].type = #ServiceRequest

* rest[clientSlice].resource[ServiceRequestSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[ServiceRequestSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ServiceRequestSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[ServiceRequestSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[ServiceRequestSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[ServiceRequestSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[ServiceRequestSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[3].type = #token
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ServiceRequestSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[ServiceRequestSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[ServiceRequestSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[ServiceRequestSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[ServiceRequestSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[ServiceRequestSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[ServiceRequestSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[ServiceRequestSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[ServiceRequestSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[ServiceRequestSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[DocumentReferenceSlice].type = #DocumentReference

* rest[clientSlice].resource[DocumentReferenceSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[DocumentReferenceSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DocumentReferenceSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[3].type = #token
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[DocumentReferenceSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[DocumentReferenceSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[DocumentReferenceSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[DocumentReferenceSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[DocumentReferenceSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[DocumentReferenceSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[DocumentReferenceSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[DocumentReferenceSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[DocumentReferenceSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[DocumentReferenceSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[FamilyMemberHistorySlice].type = #FamilyMemberHistory

* rest[clientSlice].resource[FamilyMemberHistorySlice].interaction[0].code = #search-type
* rest[clientSlice].resource[FamilyMemberHistorySlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[FamilyMemberHistorySlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[0].type = #reference
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[1].type = #reference
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[2].type = #reference
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[3].name = "code"
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[3].type = #token
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[FamilyMemberHistorySlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[FamilyMemberHistorySlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[FamilyMemberHistorySlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[FamilyMemberHistorySlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[FamilyMemberHistorySlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[FamilyMemberHistorySlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[FamilyMemberHistorySlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[FamilyMemberHistorySlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[FamilyMemberHistorySlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[FamilyMemberHistorySlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[MedicationAdministrationSlice].type = #MedicationAdministration

* rest[clientSlice].resource[MedicationAdministrationSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[MedicationAdministrationSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationAdministrationSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[3].type = #token
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationAdministrationSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationAdministrationSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MedicationAdministrationSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[MedicationAdministrationSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[MedicationAdministrationSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[MedicationAdministrationSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[MedicationAdministrationSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[MedicationAdministrationSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[MedicationAdministrationSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[MedicationAdministrationSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[MedicationDispenseSlice].type = #MedicationDispense

* rest[clientSlice].resource[MedicationDispenseSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[MedicationDispenseSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationDispenseSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[3].type = #token
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationDispenseSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationDispenseSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MedicationDispenseSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[MedicationDispenseSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[MedicationDispenseSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[MedicationDispenseSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[MedicationDispenseSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[MedicationDispenseSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[MedicationDispenseSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[MedicationDispenseSlice].extension[0].extension[3].valueString = "code"

* rest[clientSlice].resource[MedicationStatementSlice].type = #MedicationStatement

* rest[clientSlice].resource[MedicationStatementSlice].interaction[0].code = #search-type
* rest[clientSlice].resource[MedicationStatementSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationStatementSlice].interaction[0].extension.valueCode = #SHOULD

* rest[clientSlice].resource[MedicationStatementSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[0].type = #reference
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationStatementSlice].searchParam[1].name = "patient"
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[1].type = #reference
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationStatementSlice].searchParam[2].name = "encounter"
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[2].type = #reference
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[2].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationStatementSlice].searchParam[3].name = "code"
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[3].type = #token
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MedicationStatementSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[MedicationStatementSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MedicationStatementSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[MedicationStatementSlice].extension[0].extension[0].valueString = "_id"
* rest[clientSlice].resource[MedicationStatementSlice].extension[0].extension[1].url = "required"
* rest[clientSlice].resource[MedicationStatementSlice].extension[0].extension[1].valueString = "patient"
* rest[clientSlice].resource[MedicationStatementSlice].extension[0].extension[2].url = "required"
* rest[clientSlice].resource[MedicationStatementSlice].extension[0].extension[2].valueString = "encounter"
* rest[clientSlice].resource[MedicationStatementSlice].extension[0].extension[3].url = "required"
* rest[clientSlice].resource[MedicationStatementSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[MeasureSlice].type = #Measure

* rest[serverSlice].resource[MeasureSlice].operation[0].name = "evaluate-measure"
* rest[serverSlice].resource[MeasureSlice].operation[0].definition = "http://hl7.org/fhir/uv/saner/OperationDefinition/Measure-evaluate-measure"
* rest[serverSlice].resource[MeasureSlice].operation[0].documentation = "Evaluate the measure"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureConsumer-Aggregate.fsh


Instance: MeasureConsumer-Aggregate
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Consumer implementing the Aggregate Option."""
* insert SanerDefinitionContent
* name = "MeasureConsumer_Aggregate"
* title = "Measure Consumer implementing the Aggregate Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Consumer implementing the Aggregate Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[MeasureReportSlice].type = #MeasureReport
* rest[serverSlice].resource[MeasureReportSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasureReport"

* rest[serverSlice].resource[MeasureReportSlice].operation[0].name = "aggregate"
* rest[serverSlice].resource[MeasureReportSlice].operation[0].definition = "http://hl7.org/fhir/uv/saner/OperationDefinition/MeasureReport-aggregate"
* rest[serverSlice].resource[MeasureReportSlice].operation[0].documentation = "Aggregate"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureConsumer-CSV-Pull.fsh


Instance: MeasureConsumer-CSV-Pull
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Consumer implementing the CSV Option and the Pull Option."""
* insert SanerDefinitionContent
* name = "MeasureConsumer_CSV_Pull"
* title = "Measure Consumer implementing the CSV Option and the Pull Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Consumer implementing the CSV Option and the Pull Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[MeasureReportSlice].type = #MeasureReport
* rest[clientSlice].resource[MeasureReportSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasureReport"

* rest[clientSlice].resource[MeasureReportSlice].operation[0].name = "read-csv"
* rest[clientSlice].resource[MeasureReportSlice].operation[0].definition = "http://hl7.org/fhir/uv/saner/OperationDefinition/MeasureReport-read-csv"
* rest[clientSlice].resource[MeasureReportSlice].operation[0].documentation = "Read in CSV Format"

* rest[clientSlice].resource[MeasureReportSlice].operation[1].name = "search-csv"
* rest[clientSlice].resource[MeasureReportSlice].operation[1].definition = "http://hl7.org/fhir/uv/saner/OperationDefinition/MeasureReport-search-csv"
* rest[clientSlice].resource[MeasureReportSlice].operation[1].documentation = "Search in CSV Format"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureConsumer-CSV-Push.fsh


Instance: MeasureConsumer-CSV-Push
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Consumer implementing the CSV Option and the Push Option."""
* insert SanerDefinitionContent
* name = "MeasureConsumer_CSV_Push"
* title = "Measure Consumer implementing the CSV Option and the Push Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Consumer implementing the CSV Option and the Push Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[MeasureSlice].type = #Measure
* rest[serverSlice].resource[MeasureSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasure"

* rest[serverSlice].resource[MeasureSlice].operation[0].name = "report-csv"
* rest[serverSlice].resource[MeasureSlice].operation[0].definition = "http://hl7.org/fhir/uv/saner/OperationDefinition/Measure-report-csv"
* rest[serverSlice].resource[MeasureSlice].operation[0].documentation = "Create or update a MeasureReport from CSV Format"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureConsumer-ProduceMeasure-CSV-Push.fsh


Instance: MeasureConsumer-ProduceMeasure-CSV-Push
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Consumer implementing the Produce Measure transaction with the CSV Option and the Push Option."""
* insert SanerDefinitionContent
* name = "MeasureConsumer_ProduceMeasure_CSV_Push"
* title = "Measure Consumer implementing the Produce Measure transaction with the CSV Option and the Push Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Consumer implementing the Produce Measure transaction with the CSV Option and the Push Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[MeasureSlice].type = #Measure

* rest[serverSlice].resource[MeasureSlice].operation[0].name = "report-csv"
* rest[serverSlice].resource[MeasureSlice].operation[0].definition = "http://hl7.org/fhir/uv/saner/OperationDefinition/Measure-report-csv"
* rest[serverSlice].resource[MeasureSlice].operation[0].documentation = "Create or update a MeasureReport from CSV Format"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureConsumer-ProduceMeasure-Push.fsh


Instance: MeasureConsumer-ProduceMeasure-Push
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Consumer implementing the Produce Measure transaction with the Push Option."""
* insert SanerDefinitionContent
* name = "MeasureConsumer_ProduceMeasure_Push"
* title = "Measure Consumer implementing the Produce Measure transaction with the Push Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Consumer implementing the Produce Measure transaction with the Push Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[MeasureReportSlice].type = #MeasureReport

* rest[serverSlice].resource[MeasureReportSlice].interaction[0].code = #create
* rest[serverSlice].resource[MeasureReportSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].interaction[1].code = #update
* rest[serverSlice].resource[MeasureReportSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].interaction[1].extension.valueCode = #SHALL


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureConsumer-ProduceMeasure-SupplementalData.fsh


Instance: MeasureConsumer-ProduceMeasure-SupplementalData
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Consumer implementing the Produce Measure transaction with the Supplemental Data Option."""
* insert SanerDefinitionContent
* name = "MeasureConsumer_ProduceMeasure_SupplementalData"
* title = "Measure Consumer implementing the Produce Measure transaction with the Supplemental Data Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Consumer implementing the Produce Measure transaction with the Supplemental Data Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server


* rest[serverSlice].interaction[0].code = #batch
* rest[serverSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].interaction[0].extension.valueCode = #SHALL
* rest[serverSlice].interaction[0].documentation = "Communicate a MeasureReport with supplemental data in a Bundle using the [FHIR batch](https://www.hl7.org/fhir/http.html#transaction) operation. The MeasureReport shall be the first entry in the Bundle. Referenced MeasureReport.evaluatedResource elements shall appear as subsequent entries in the Bundle."


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureConsumer-Pull.fsh


Instance: MeasureConsumer-Pull
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Consumer implementing the Pull Option."""
* insert SanerDefinitionContent
* name = "MeasureConsumer_Pull"
* title = "Measure Consumer implementing the Pull Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Consumer implementing the Pull Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[LocationSlice].type = #Location

* rest[clientSlice].resource[LocationSlice].interaction[0].code = #read
* rest[clientSlice].resource[LocationSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LocationSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[LocationSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[LocationSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LocationSlice].interaction[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[LocationSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[LocationSlice].searchParam[0].type = #token
* rest[clientSlice].resource[LocationSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LocationSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[LocationSlice].searchParam[1].name = "name"
* rest[clientSlice].resource[LocationSlice].searchParam[1].type = #string
* rest[clientSlice].resource[LocationSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LocationSlice].searchParam[1].extension.valueCode = #MAY

* rest[clientSlice].resource[LocationSlice].searchParam[2].name = "identifier"
* rest[clientSlice].resource[LocationSlice].searchParam[2].type = #token
* rest[clientSlice].resource[LocationSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LocationSlice].searchParam[2].extension.valueCode = #MAY

* rest[clientSlice].resource[LocationSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[LocationSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LocationSlice].searchInclude[0].extension.valueCode = #MAY

* rest[clientSlice].resource[LocationSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[LocationSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[LocationSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[LocationSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[LocationSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[LocationSlice].extension[1].extension[0].valueString = "name"
* rest[clientSlice].resource[LocationSlice].extension[1].extension[1].url = "optional"
* rest[clientSlice].resource[LocationSlice].extension[1].extension[1].valueString = "identifier"

* rest[clientSlice].resource[LocationSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[LocationSlice].extension[2].extension[0].url = "required"
* rest[clientSlice].resource[LocationSlice].extension[2].extension[0].valueString = "identifier"

* rest[clientSlice].resource[MeasureReportSlice].type = #MeasureReport
* rest[clientSlice].resource[MeasureReportSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasureReport"

* rest[clientSlice].resource[MeasureReportSlice].interaction[0].code = #read
* rest[clientSlice].resource[MeasureReportSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureReportSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[MeasureReportSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].interaction[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureReportSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[0].type = #token
* rest[clientSlice].resource[MeasureReportSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureReportSlice].searchParam[1].name = "_lastUpdated"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[1].type = #date
* rest[clientSlice].resource[MeasureReportSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[1].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureReportSlice].searchParam[2].name = "date"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[2].type = #date
* rest[clientSlice].resource[MeasureReportSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[2].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureReportSlice].searchParam[3].name = "period"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[3].type = #date
* rest[clientSlice].resource[MeasureReportSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureReportSlice].searchParam[4].name = "measure"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[4].type = #uri
* rest[clientSlice].resource[MeasureReportSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[4].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureReportSlice].searchParam[5].name = "measure.title"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[5].type = #string
* rest[clientSlice].resource[MeasureReportSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[5].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureReportSlice].searchParam[6].name = "subject"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[6].type = #reference
* rest[clientSlice].resource[MeasureReportSlice].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[6].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureReportSlice].searchParam[7].name = "subject:identifier"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[7].type = #token
* rest[clientSlice].resource[MeasureReportSlice].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[7].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureReportSlice].searchParam[8].name = "subject:Location.near"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[8].type = #special
* rest[clientSlice].resource[MeasureReportSlice].searchParam[8].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[8].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureReportSlice].searchParam[9].name = "reporter"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[9].type = #reference
* rest[clientSlice].resource[MeasureReportSlice].searchParam[9].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[9].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureReportSlice].searchParam[10].name = "reporter:identifier"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[10].type = #token
* rest[clientSlice].resource[MeasureReportSlice].searchParam[10].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[10].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureReportSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[MeasureReportSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchInclude[0].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureReportSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureReportSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[MeasureReportSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[MeasureReportSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[0].valueString = "period"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[1].url = "required"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[1].valueString = "measure"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[2].url = "optional"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[2].valueString = "_lastUpdated"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[3].url = "optional"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[3].valueString = "date"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[4].url = "optional"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[4].valueString = "measure.title"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[5].url = "optional"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[5].valueString = "subject"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[6].url = "optional"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[6].valueString = "subject:identifier"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[7].url = "optional"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[7].valueString = "subject:Location.near"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[8].url = "optional"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[8].valueString = "reporter"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[9].url = "optional"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[9].valueString = "reporter:identifier"

* rest[clientSlice].resource[MeasureSlice].type = #Measure
* rest[clientSlice].resource[MeasureSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasure"

* rest[clientSlice].resource[MeasureSlice].interaction[0].code = #read
* rest[clientSlice].resource[MeasureSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[MeasureSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].interaction[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[MeasureSlice].searchParam[0].type = #token
* rest[clientSlice].resource[MeasureSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureSlice].searchParam[1].name = "_text"
* rest[clientSlice].resource[MeasureSlice].searchParam[1].type = #string
* rest[clientSlice].resource[MeasureSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[1].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchParam[2].name = "_content"
* rest[clientSlice].resource[MeasureSlice].searchParam[2].type = #string
* rest[clientSlice].resource[MeasureSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[2].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchParam[3].name = "definition-text"
* rest[clientSlice].resource[MeasureSlice].searchParam[3].type = #string
* rest[clientSlice].resource[MeasureSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[3].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchParam[4].name = "code"
* rest[clientSlice].resource[MeasureSlice].searchParam[4].type = #token
* rest[clientSlice].resource[MeasureSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[4].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchParam[5].name = "code:in"
* rest[clientSlice].resource[MeasureSlice].searchParam[5].type = #token
* rest[clientSlice].resource[MeasureSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[5].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[MeasureSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchInclude[0].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[MeasureSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[0].valueString = "_text"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[1].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[1].valueString = "_content"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[2].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[2].valueString = "definition-text"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[3].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[3].valueString = "code"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[4].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[4].valueString = "code:in"

* rest[clientSlice].resource[MeasureSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[0].valueString = "_content"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[1].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[1].valueString = "definition-text"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[2].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[2].valueString = "code"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[3].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[3].valueString = "code:in"

* rest[clientSlice].resource[MeasureSlice].extension[3].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[0].valueString = "definition-text"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[1].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[1].valueString = "code"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[2].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[2].valueString = "code:in"

* rest[clientSlice].resource[MeasureSlice].extension[4].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[0].valueString = "code"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[1].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[1].valueString = "code:in"

* rest[clientSlice].resource[MeasureSlice].extension[5].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[5].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[5].extension[0].valueString = "code:in"

* rest[clientSlice].resource[OrganizationSlice].type = #Organization

* rest[clientSlice].resource[OrganizationSlice].interaction[0].code = #read
* rest[clientSlice].resource[OrganizationSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[OrganizationSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[OrganizationSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[OrganizationSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[OrganizationSlice].interaction[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[OrganizationSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[OrganizationSlice].searchParam[0].type = #token
* rest[clientSlice].resource[OrganizationSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[OrganizationSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[OrganizationSlice].searchParam[1].name = "name"
* rest[clientSlice].resource[OrganizationSlice].searchParam[1].type = #string
* rest[clientSlice].resource[OrganizationSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[OrganizationSlice].searchParam[1].extension.valueCode = #MAY

* rest[clientSlice].resource[OrganizationSlice].searchParam[2].name = "identifier"
* rest[clientSlice].resource[OrganizationSlice].searchParam[2].type = #token
* rest[clientSlice].resource[OrganizationSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[OrganizationSlice].searchParam[2].extension.valueCode = #MAY

* rest[clientSlice].resource[OrganizationSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[OrganizationSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[OrganizationSlice].searchInclude[0].extension.valueCode = #MAY

* rest[clientSlice].resource[OrganizationSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[OrganizationSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[OrganizationSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[OrganizationSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[OrganizationSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[OrganizationSlice].extension[1].extension[0].valueString = "name"
* rest[clientSlice].resource[OrganizationSlice].extension[1].extension[1].url = "optional"
* rest[clientSlice].resource[OrganizationSlice].extension[1].extension[1].valueString = "identifier"

* rest[clientSlice].resource[OrganizationSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[OrganizationSlice].extension[2].extension[0].url = "required"
* rest[clientSlice].resource[OrganizationSlice].extension[2].extension[0].valueString = "identifier"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureConsumer-Push.fsh


Instance: MeasureConsumer-Push
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Consumer implementing the Push Option."""
* insert SanerDefinitionContent
* name = "MeasureConsumer_Push"
* title = "Measure Consumer implementing the Push Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Consumer implementing the Push Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[MeasureReportSlice].type = #MeasureReport
* rest[serverSlice].resource[MeasureReportSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasureReport"

* rest[serverSlice].resource[MeasureReportSlice].interaction[0].code = #create
* rest[serverSlice].resource[MeasureReportSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].interaction[1].code = #update
* rest[serverSlice].resource[MeasureReportSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].interaction[1].extension.valueCode = #SHALL


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureConsumer-QueryMeasure-CSV-Pull.fsh


Instance: MeasureConsumer-QueryMeasure-CSV-Pull
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Consumer implementing the Query Measure transaction with the CSV Option and the Pull Option."""
* insert SanerDefinitionContent
* name = "MeasureConsumer_QueryMeasure_CSV_Pull"
* title = "Measure Consumer implementing the Query Measure transaction with the CSV Option and the Pull Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Consumer implementing the Query Measure transaction with the CSV Option and the Pull Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[MeasureReportSlice].type = #MeasureReport
* rest[clientSlice].resource[MeasureReportSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasureReport"

* rest[clientSlice].resource[MeasureReportSlice].operation[0].name = "read-csv"
* rest[clientSlice].resource[MeasureReportSlice].operation[0].definition = "http://hl7.org/fhir/uv/saner/OperationDefinition/MeasureReport-read-csv"
* rest[clientSlice].resource[MeasureReportSlice].operation[0].documentation = "Read in CSV Format"

* rest[clientSlice].resource[MeasureReportSlice].operation[1].name = "search-csv"
* rest[clientSlice].resource[MeasureReportSlice].operation[1].definition = "http://hl7.org/fhir/uv/saner/OperationDefinition/MeasureReport-search-csv"
* rest[clientSlice].resource[MeasureReportSlice].operation[1].documentation = "Search in CSV Format"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureConsumer-QueryMeasure-Pull.fsh


Instance: MeasureConsumer-QueryMeasure-Pull
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Consumer implementing the Query Measure transaction with the Pull Option."""
* insert SanerDefinitionContent
* name = "MeasureConsumer_QueryMeasure_Pull"
* title = "Measure Consumer implementing the Query Measure transaction with the Pull Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Consumer implementing the Query Measure transaction with the Pull Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[LocationSlice].type = #Location

* rest[clientSlice].resource[LocationSlice].interaction[0].code = #read
* rest[clientSlice].resource[LocationSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LocationSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[LocationSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[LocationSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LocationSlice].interaction[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[LocationSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[LocationSlice].searchParam[0].type = #token
* rest[clientSlice].resource[LocationSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LocationSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[LocationSlice].searchParam[1].name = "name"
* rest[clientSlice].resource[LocationSlice].searchParam[1].type = #string
* rest[clientSlice].resource[LocationSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LocationSlice].searchParam[1].extension.valueCode = #MAY

* rest[clientSlice].resource[LocationSlice].searchParam[2].name = "identifier"
* rest[clientSlice].resource[LocationSlice].searchParam[2].type = #token
* rest[clientSlice].resource[LocationSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LocationSlice].searchParam[2].extension.valueCode = #MAY

* rest[clientSlice].resource[LocationSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[LocationSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LocationSlice].searchInclude[0].extension.valueCode = #MAY

* rest[clientSlice].resource[LocationSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[LocationSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[LocationSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[LocationSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[LocationSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[LocationSlice].extension[1].extension[0].valueString = "name"
* rest[clientSlice].resource[LocationSlice].extension[1].extension[1].url = "optional"
* rest[clientSlice].resource[LocationSlice].extension[1].extension[1].valueString = "identifier"

* rest[clientSlice].resource[LocationSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[LocationSlice].extension[2].extension[0].url = "required"
* rest[clientSlice].resource[LocationSlice].extension[2].extension[0].valueString = "identifier"

* rest[clientSlice].resource[MeasureReportSlice].type = #MeasureReport
* rest[clientSlice].resource[MeasureReportSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasureReport"

* rest[clientSlice].resource[MeasureReportSlice].interaction[0].code = #read
* rest[clientSlice].resource[MeasureReportSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureReportSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[MeasureReportSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].interaction[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureReportSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[0].type = #token
* rest[clientSlice].resource[MeasureReportSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureReportSlice].searchParam[1].name = "_lastUpdated"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[1].type = #date
* rest[clientSlice].resource[MeasureReportSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[1].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureReportSlice].searchParam[2].name = "date"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[2].type = #date
* rest[clientSlice].resource[MeasureReportSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[2].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureReportSlice].searchParam[3].name = "period"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[3].type = #date
* rest[clientSlice].resource[MeasureReportSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[3].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureReportSlice].searchParam[4].name = "measure"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[4].type = #uri
* rest[clientSlice].resource[MeasureReportSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[4].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureReportSlice].searchParam[5].name = "measure.title"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[5].type = #string
* rest[clientSlice].resource[MeasureReportSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[5].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureReportSlice].searchParam[6].name = "subject"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[6].type = #reference
* rest[clientSlice].resource[MeasureReportSlice].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[6].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureReportSlice].searchParam[7].name = "subject:identifier"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[7].type = #token
* rest[clientSlice].resource[MeasureReportSlice].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[7].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureReportSlice].searchParam[8].name = "subject:Location.near"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[8].type = #special
* rest[clientSlice].resource[MeasureReportSlice].searchParam[8].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[8].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureReportSlice].searchParam[9].name = "reporter"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[9].type = #reference
* rest[clientSlice].resource[MeasureReportSlice].searchParam[9].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[9].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureReportSlice].searchParam[10].name = "reporter:identifier"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[10].type = #token
* rest[clientSlice].resource[MeasureReportSlice].searchParam[10].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchParam[10].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureReportSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[MeasureReportSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].searchInclude[0].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureReportSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureReportSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[MeasureReportSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[MeasureReportSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[0].valueString = "period"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[1].url = "required"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[1].valueString = "measure"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[2].url = "optional"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[2].valueString = "_lastUpdated"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[3].url = "optional"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[3].valueString = "date"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[4].url = "optional"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[4].valueString = "measure.title"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[5].url = "optional"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[5].valueString = "subject"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[6].url = "optional"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[6].valueString = "subject:identifier"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[7].url = "optional"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[7].valueString = "subject:Location.near"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[8].url = "optional"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[8].valueString = "reporter"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[9].url = "optional"
* rest[clientSlice].resource[MeasureReportSlice].extension[1].extension[9].valueString = "reporter:identifier"

* rest[clientSlice].resource[MeasureSlice].type = #Measure
* rest[clientSlice].resource[MeasureSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasure"

* rest[clientSlice].resource[MeasureSlice].interaction[0].code = #read
* rest[clientSlice].resource[MeasureSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[MeasureSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].interaction[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[MeasureSlice].searchParam[0].type = #token
* rest[clientSlice].resource[MeasureSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureSlice].searchParam[1].name = "_text"
* rest[clientSlice].resource[MeasureSlice].searchParam[1].type = #string
* rest[clientSlice].resource[MeasureSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[1].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchParam[2].name = "_content"
* rest[clientSlice].resource[MeasureSlice].searchParam[2].type = #string
* rest[clientSlice].resource[MeasureSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[2].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchParam[3].name = "definition-text"
* rest[clientSlice].resource[MeasureSlice].searchParam[3].type = #string
* rest[clientSlice].resource[MeasureSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[3].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchParam[4].name = "code"
* rest[clientSlice].resource[MeasureSlice].searchParam[4].type = #token
* rest[clientSlice].resource[MeasureSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[4].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchParam[5].name = "code:in"
* rest[clientSlice].resource[MeasureSlice].searchParam[5].type = #token
* rest[clientSlice].resource[MeasureSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[5].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[MeasureSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchInclude[0].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[MeasureSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[0].valueString = "_text"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[1].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[1].valueString = "_content"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[2].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[2].valueString = "definition-text"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[3].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[3].valueString = "code"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[4].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[4].valueString = "code:in"

* rest[clientSlice].resource[MeasureSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[0].valueString = "_content"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[1].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[1].valueString = "definition-text"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[2].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[2].valueString = "code"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[3].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[3].valueString = "code:in"

* rest[clientSlice].resource[MeasureSlice].extension[3].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[0].valueString = "definition-text"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[1].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[1].valueString = "code"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[2].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[2].valueString = "code:in"

* rest[clientSlice].resource[MeasureSlice].extension[4].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[0].valueString = "code"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[1].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[1].valueString = "code:in"

* rest[clientSlice].resource[MeasureSlice].extension[5].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[5].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[5].extension[0].valueString = "code:in"

* rest[clientSlice].resource[OrganizationSlice].type = #Organization

* rest[clientSlice].resource[OrganizationSlice].interaction[0].code = #read
* rest[clientSlice].resource[OrganizationSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[OrganizationSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[OrganizationSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[OrganizationSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[OrganizationSlice].interaction[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[OrganizationSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[OrganizationSlice].searchParam[0].type = #token
* rest[clientSlice].resource[OrganizationSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[OrganizationSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[OrganizationSlice].searchParam[1].name = "name"
* rest[clientSlice].resource[OrganizationSlice].searchParam[1].type = #string
* rest[clientSlice].resource[OrganizationSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[OrganizationSlice].searchParam[1].extension.valueCode = #MAY

* rest[clientSlice].resource[OrganizationSlice].searchParam[2].name = "identifier"
* rest[clientSlice].resource[OrganizationSlice].searchParam[2].type = #token
* rest[clientSlice].resource[OrganizationSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[OrganizationSlice].searchParam[2].extension.valueCode = #MAY

* rest[clientSlice].resource[OrganizationSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[OrganizationSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[OrganizationSlice].searchInclude[0].extension.valueCode = #MAY

* rest[clientSlice].resource[OrganizationSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[OrganizationSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[OrganizationSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[OrganizationSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[OrganizationSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[OrganizationSlice].extension[1].extension[0].valueString = "name"
* rest[clientSlice].resource[OrganizationSlice].extension[1].extension[1].url = "optional"
* rest[clientSlice].resource[OrganizationSlice].extension[1].extension[1].valueString = "identifier"

* rest[clientSlice].resource[OrganizationSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[OrganizationSlice].extension[2].extension[0].url = "required"
* rest[clientSlice].resource[OrganizationSlice].extension[2].extension[0].valueString = "identifier"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureConsumer-SupplementalData.fsh


Instance: MeasureConsumer-SupplementalData
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Consumer implementing the Supplemental Data Option."""
* insert SanerDefinitionContent
* name = "MeasureConsumer_SupplementalData"
* title = "Measure Consumer implementing the Supplemental Data Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Consumer implementing the Supplemental Data Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server


* rest[serverSlice].interaction[0].code = #batch
* rest[serverSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].interaction[0].extension.valueCode = #SHALL
* rest[serverSlice].interaction[0].documentation = "Communicate a MeasureReport with supplemental data in a Bundle using the [FHIR batch](https://www.hl7.org/fhir/http.html#transaction) operation. The MeasureReport shall be the first entry in the Bundle. Referenced MeasureReport.evaluatedResource elements shall appear as subsequent entries in the Bundle."


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureDefinitionConsumer-QueryMeasureDefinition.fsh


Instance: MeasureDefinitionConsumer-QueryMeasureDefinition
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Measure Definition Consumer implementing the Query Measure Definition transaction."""
* insert SanerDefinitionContent
* name = "MeasureDefinitionConsumer_QueryMeasureDefinition"
* title = "Measure Definition Consumer implementing the Query Measure Definition transaction."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the requirements for the Measure Definition Consumer implementing the Query Measure Definition transaction."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[MeasureSlice].type = #Measure
* rest[clientSlice].resource[MeasureSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasure"

* rest[clientSlice].resource[MeasureSlice].interaction[0].code = #read
* rest[clientSlice].resource[MeasureSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[MeasureSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].interaction[1].extension.valueCode = #SHOULD

* rest[clientSlice].resource[MeasureSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[MeasureSlice].searchParam[0].type = #token
* rest[clientSlice].resource[MeasureSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureSlice].searchParam[1].name = "url"
* rest[clientSlice].resource[MeasureSlice].searchParam[1].type = #uri
* rest[clientSlice].resource[MeasureSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureSlice].searchParam[2].name = "_text"
* rest[clientSlice].resource[MeasureSlice].searchParam[2].type = #string
* rest[clientSlice].resource[MeasureSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[2].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchParam[3].name = "_content"
* rest[clientSlice].resource[MeasureSlice].searchParam[3].type = #string
* rest[clientSlice].resource[MeasureSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[3].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchParam[4].name = "definition-text"
* rest[clientSlice].resource[MeasureSlice].searchParam[4].type = #string
* rest[clientSlice].resource[MeasureSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[4].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchParam[5].name = "code"
* rest[clientSlice].resource[MeasureSlice].searchParam[5].type = #token
* rest[clientSlice].resource[MeasureSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[5].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchParam[6].name = "code:in"
* rest[clientSlice].resource[MeasureSlice].searchParam[6].type = #token
* rest[clientSlice].resource[MeasureSlice].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[6].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[MeasureSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchInclude[0].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[MeasureSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[0].valueString = "url"

* rest[clientSlice].resource[MeasureSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[0].valueString = "_text"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[1].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[1].valueString = "_content"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[2].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[2].valueString = "definition-text"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[3].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[3].valueString = "code"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[4].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[4].valueString = "code:in"

* rest[clientSlice].resource[MeasureSlice].extension[3].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[0].valueString = "_content"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[1].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[1].valueString = "definition-text"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[2].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[2].valueString = "code"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[3].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[3].valueString = "code:in"

* rest[clientSlice].resource[MeasureSlice].extension[4].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[0].valueString = "definition-text"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[1].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[1].valueString = "code"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[2].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[2].valueString = "code:in"

* rest[clientSlice].resource[MeasureSlice].extension[5].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[5].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[5].extension[0].valueString = "code"
* rest[clientSlice].resource[MeasureSlice].extension[5].extension[1].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[5].extension[1].valueString = "code:in"

* rest[clientSlice].resource[MeasureSlice].extension[6].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[6].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[6].extension[0].valueString = "code:in"

* rest[clientSlice].resource[LibrarySlice].type = #Library

* rest[clientSlice].resource[LibrarySlice].interaction[0].code = #read
* rest[clientSlice].resource[LibrarySlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LibrarySlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[LibrarySlice].interaction[1].code = #search-type
* rest[clientSlice].resource[LibrarySlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LibrarySlice].interaction[1].extension.valueCode = #SHOULD

* rest[clientSlice].resource[LibrarySlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[LibrarySlice].searchParam[0].type = #token
* rest[clientSlice].resource[LibrarySlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LibrarySlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[LibrarySlice].searchParam[1].name = "url"
* rest[clientSlice].resource[LibrarySlice].searchParam[1].type = #uri
* rest[clientSlice].resource[LibrarySlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LibrarySlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[LibrarySlice].searchInclude[0] = "*"
* rest[clientSlice].resource[LibrarySlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LibrarySlice].searchInclude[0].extension.valueCode = #MAY

* rest[clientSlice].resource[LibrarySlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[LibrarySlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[LibrarySlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[LibrarySlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[LibrarySlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[LibrarySlice].extension[1].extension[0].valueString = "url"

* rest[clientSlice].resource[ValueSetSlice].type = #ValueSet

* rest[clientSlice].resource[ValueSetSlice].interaction[0].code = #read
* rest[clientSlice].resource[ValueSetSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ValueSetSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[ValueSetSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[ValueSetSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ValueSetSlice].interaction[1].extension.valueCode = #SHOULD

* rest[clientSlice].resource[ValueSetSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[ValueSetSlice].searchParam[0].type = #token
* rest[clientSlice].resource[ValueSetSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ValueSetSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[ValueSetSlice].searchParam[1].name = "url"
* rest[clientSlice].resource[ValueSetSlice].searchParam[1].type = #uri
* rest[clientSlice].resource[ValueSetSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ValueSetSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[ValueSetSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[ValueSetSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ValueSetSlice].searchInclude[0].extension.valueCode = #MAY

* rest[clientSlice].resource[ValueSetSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[ValueSetSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[ValueSetSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[ValueSetSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[ValueSetSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[ValueSetSlice].extension[1].extension[0].valueString = "url"

* rest[clientSlice].resource[CodeSystemSlice].type = #CodeSystem

* rest[clientSlice].resource[CodeSystemSlice].interaction[0].code = #read
* rest[clientSlice].resource[CodeSystemSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[CodeSystemSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[CodeSystemSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[CodeSystemSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[CodeSystemSlice].interaction[1].extension.valueCode = #SHOULD

* rest[clientSlice].resource[CodeSystemSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[CodeSystemSlice].searchParam[0].type = #token
* rest[clientSlice].resource[CodeSystemSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[CodeSystemSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[CodeSystemSlice].searchParam[1].name = "url"
* rest[clientSlice].resource[CodeSystemSlice].searchParam[1].type = #uri
* rest[clientSlice].resource[CodeSystemSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[CodeSystemSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[CodeSystemSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[CodeSystemSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[CodeSystemSlice].searchInclude[0].extension.valueCode = #MAY

* rest[clientSlice].resource[CodeSystemSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[CodeSystemSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[CodeSystemSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[CodeSystemSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[CodeSystemSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[CodeSystemSlice].extension[1].extension[0].valueString = "url"

* rest[clientSlice].resource[ConceptMapSlice].type = #ConceptMap

* rest[clientSlice].resource[ConceptMapSlice].interaction[0].code = #read
* rest[clientSlice].resource[ConceptMapSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConceptMapSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[ConceptMapSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[ConceptMapSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConceptMapSlice].interaction[1].extension.valueCode = #SHOULD

* rest[clientSlice].resource[ConceptMapSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[ConceptMapSlice].searchParam[0].type = #token
* rest[clientSlice].resource[ConceptMapSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConceptMapSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[ConceptMapSlice].searchParam[1].name = "url"
* rest[clientSlice].resource[ConceptMapSlice].searchParam[1].type = #uri
* rest[clientSlice].resource[ConceptMapSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConceptMapSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[ConceptMapSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[ConceptMapSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConceptMapSlice].searchInclude[0].extension.valueCode = #MAY

* rest[clientSlice].resource[ConceptMapSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[ConceptMapSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[ConceptMapSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[ConceptMapSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[ConceptMapSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[ConceptMapSlice].extension[1].extension[0].valueString = "url"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureDefinitionConsumer.fsh


Instance: MeasureDefinitionConsumer
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Measure Definition Consumer."""
* insert SanerDefinitionContent
* name = "MeasureDefinitionConsumer"
* title = "Measure Definition Consumer."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the requirements for the Measure Definition Consumer."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[MeasureSlice].type = #Measure
* rest[clientSlice].resource[MeasureSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasure"

* rest[clientSlice].resource[MeasureSlice].interaction[0].code = #read
* rest[clientSlice].resource[MeasureSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[MeasureSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].interaction[1].extension.valueCode = #SHOULD

* rest[clientSlice].resource[MeasureSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[MeasureSlice].searchParam[0].type = #token
* rest[clientSlice].resource[MeasureSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureSlice].searchParam[1].name = "url"
* rest[clientSlice].resource[MeasureSlice].searchParam[1].type = #uri
* rest[clientSlice].resource[MeasureSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureSlice].searchParam[2].name = "_text"
* rest[clientSlice].resource[MeasureSlice].searchParam[2].type = #string
* rest[clientSlice].resource[MeasureSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[2].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchParam[3].name = "_content"
* rest[clientSlice].resource[MeasureSlice].searchParam[3].type = #string
* rest[clientSlice].resource[MeasureSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[3].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchParam[4].name = "definition-text"
* rest[clientSlice].resource[MeasureSlice].searchParam[4].type = #string
* rest[clientSlice].resource[MeasureSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[4].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchParam[5].name = "code"
* rest[clientSlice].resource[MeasureSlice].searchParam[5].type = #token
* rest[clientSlice].resource[MeasureSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[5].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchParam[6].name = "code:in"
* rest[clientSlice].resource[MeasureSlice].searchParam[6].type = #token
* rest[clientSlice].resource[MeasureSlice].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchParam[6].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[MeasureSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureSlice].searchInclude[0].extension.valueCode = #MAY

* rest[clientSlice].resource[MeasureSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[MeasureSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[1].extension[0].valueString = "url"

* rest[clientSlice].resource[MeasureSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[0].valueString = "_text"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[1].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[1].valueString = "_content"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[2].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[2].valueString = "definition-text"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[3].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[3].valueString = "code"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[4].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[2].extension[4].valueString = "code:in"

* rest[clientSlice].resource[MeasureSlice].extension[3].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[0].valueString = "_content"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[1].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[1].valueString = "definition-text"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[2].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[2].valueString = "code"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[3].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[3].extension[3].valueString = "code:in"

* rest[clientSlice].resource[MeasureSlice].extension[4].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[0].valueString = "definition-text"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[1].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[1].valueString = "code"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[2].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[4].extension[2].valueString = "code:in"

* rest[clientSlice].resource[MeasureSlice].extension[5].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[5].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[5].extension[0].valueString = "code"
* rest[clientSlice].resource[MeasureSlice].extension[5].extension[1].url = "optional"
* rest[clientSlice].resource[MeasureSlice].extension[5].extension[1].valueString = "code:in"

* rest[clientSlice].resource[MeasureSlice].extension[6].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[MeasureSlice].extension[6].extension[0].url = "required"
* rest[clientSlice].resource[MeasureSlice].extension[6].extension[0].valueString = "code:in"

* rest[clientSlice].resource[LibrarySlice].type = #Library

* rest[clientSlice].resource[LibrarySlice].interaction[0].code = #read
* rest[clientSlice].resource[LibrarySlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LibrarySlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[LibrarySlice].interaction[1].code = #search-type
* rest[clientSlice].resource[LibrarySlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LibrarySlice].interaction[1].extension.valueCode = #SHOULD

* rest[clientSlice].resource[LibrarySlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[LibrarySlice].searchParam[0].type = #token
* rest[clientSlice].resource[LibrarySlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LibrarySlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[LibrarySlice].searchParam[1].name = "url"
* rest[clientSlice].resource[LibrarySlice].searchParam[1].type = #uri
* rest[clientSlice].resource[LibrarySlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LibrarySlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[LibrarySlice].searchInclude[0] = "*"
* rest[clientSlice].resource[LibrarySlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[LibrarySlice].searchInclude[0].extension.valueCode = #MAY

* rest[clientSlice].resource[LibrarySlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[LibrarySlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[LibrarySlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[LibrarySlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[LibrarySlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[LibrarySlice].extension[1].extension[0].valueString = "url"

* rest[clientSlice].resource[ValueSetSlice].type = #ValueSet

* rest[clientSlice].resource[ValueSetSlice].interaction[0].code = #read
* rest[clientSlice].resource[ValueSetSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ValueSetSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[ValueSetSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[ValueSetSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ValueSetSlice].interaction[1].extension.valueCode = #SHOULD

* rest[clientSlice].resource[ValueSetSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[ValueSetSlice].searchParam[0].type = #token
* rest[clientSlice].resource[ValueSetSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ValueSetSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[ValueSetSlice].searchParam[1].name = "url"
* rest[clientSlice].resource[ValueSetSlice].searchParam[1].type = #uri
* rest[clientSlice].resource[ValueSetSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ValueSetSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[ValueSetSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[ValueSetSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ValueSetSlice].searchInclude[0].extension.valueCode = #MAY

* rest[clientSlice].resource[ValueSetSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[ValueSetSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[ValueSetSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[ValueSetSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[ValueSetSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[ValueSetSlice].extension[1].extension[0].valueString = "url"

* rest[clientSlice].resource[CodeSystemSlice].type = #CodeSystem

* rest[clientSlice].resource[CodeSystemSlice].interaction[0].code = #read
* rest[clientSlice].resource[CodeSystemSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[CodeSystemSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[CodeSystemSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[CodeSystemSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[CodeSystemSlice].interaction[1].extension.valueCode = #SHOULD

* rest[clientSlice].resource[CodeSystemSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[CodeSystemSlice].searchParam[0].type = #token
* rest[clientSlice].resource[CodeSystemSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[CodeSystemSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[CodeSystemSlice].searchParam[1].name = "url"
* rest[clientSlice].resource[CodeSystemSlice].searchParam[1].type = #uri
* rest[clientSlice].resource[CodeSystemSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[CodeSystemSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[CodeSystemSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[CodeSystemSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[CodeSystemSlice].searchInclude[0].extension.valueCode = #MAY

* rest[clientSlice].resource[CodeSystemSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[CodeSystemSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[CodeSystemSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[CodeSystemSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[CodeSystemSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[CodeSystemSlice].extension[1].extension[0].valueString = "url"

* rest[clientSlice].resource[ConceptMapSlice].type = #ConceptMap

* rest[clientSlice].resource[ConceptMapSlice].interaction[0].code = #read
* rest[clientSlice].resource[ConceptMapSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConceptMapSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[ConceptMapSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[ConceptMapSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConceptMapSlice].interaction[1].extension.valueCode = #SHOULD

* rest[clientSlice].resource[ConceptMapSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[ConceptMapSlice].searchParam[0].type = #token
* rest[clientSlice].resource[ConceptMapSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConceptMapSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[ConceptMapSlice].searchParam[1].name = "url"
* rest[clientSlice].resource[ConceptMapSlice].searchParam[1].type = #uri
* rest[clientSlice].resource[ConceptMapSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConceptMapSlice].searchParam[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[ConceptMapSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[ConceptMapSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[ConceptMapSlice].searchInclude[0].extension.valueCode = #MAY

* rest[clientSlice].resource[ConceptMapSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[ConceptMapSlice].extension[0].extension[0].url = "required"
* rest[clientSlice].resource[ConceptMapSlice].extension[0].extension[0].valueString = "_id"

* rest[clientSlice].resource[ConceptMapSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[clientSlice].resource[ConceptMapSlice].extension[1].extension[0].url = "required"
* rest[clientSlice].resource[ConceptMapSlice].extension[1].extension[0].valueString = "url"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureDefinitionSource-QueryMeasureDefinition.fsh


Instance: MeasureDefinitionSource-QueryMeasureDefinition
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Measure Definition Source implementing the Query Measure Definition transaction."""
* insert SanerDefinitionContent
* name = "MeasureDefinitionSource_QueryMeasureDefinition"
* title = "Measure Definition Source implementing the Query Measure Definition transaction."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the requirements for the Measure Definition Source implementing the Query Measure Definition transaction."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[MeasureSlice].type = #Measure
* rest[serverSlice].resource[MeasureSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasure"

* rest[serverSlice].resource[MeasureSlice].interaction[0].code = #read
* rest[serverSlice].resource[MeasureSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[MeasureSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[MeasureSlice].searchParam[0].type = #token
* rest[serverSlice].resource[MeasureSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureSlice].searchParam[1].name = "url"
* rest[serverSlice].resource[MeasureSlice].searchParam[1].type = #uri
* rest[serverSlice].resource[MeasureSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureSlice].searchParam[2].name = "_text"
* rest[serverSlice].resource[MeasureSlice].searchParam[2].type = #string
* rest[serverSlice].resource[MeasureSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[2].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchParam[3].name = "_content"
* rest[serverSlice].resource[MeasureSlice].searchParam[3].type = #string
* rest[serverSlice].resource[MeasureSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[3].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchParam[4].name = "definition-text"
* rest[serverSlice].resource[MeasureSlice].searchParam[4].type = #string
* rest[serverSlice].resource[MeasureSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[4].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchParam[5].name = "code"
* rest[serverSlice].resource[MeasureSlice].searchParam[5].type = #token
* rest[serverSlice].resource[MeasureSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[5].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchParam[6].name = "code:in"
* rest[serverSlice].resource[MeasureSlice].searchParam[6].type = #token
* rest[serverSlice].resource[MeasureSlice].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[6].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[MeasureSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchInclude[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[MeasureSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[0].valueString = "url"

* rest[serverSlice].resource[MeasureSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[0].valueString = "_text"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[1].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[1].valueString = "_content"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[2].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[2].valueString = "definition-text"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[3].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[3].valueString = "code"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[4].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[4].valueString = "code:in"

* rest[serverSlice].resource[MeasureSlice].extension[3].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[0].valueString = "_content"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[1].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[1].valueString = "definition-text"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[2].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[2].valueString = "code"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[3].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[3].valueString = "code:in"

* rest[serverSlice].resource[MeasureSlice].extension[4].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[0].valueString = "definition-text"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[1].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[1].valueString = "code"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[2].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[2].valueString = "code:in"

* rest[serverSlice].resource[MeasureSlice].extension[5].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[5].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[5].extension[0].valueString = "code"
* rest[serverSlice].resource[MeasureSlice].extension[5].extension[1].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[5].extension[1].valueString = "code:in"

* rest[serverSlice].resource[MeasureSlice].extension[6].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[6].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[6].extension[0].valueString = "code:in"

* rest[serverSlice].resource[LibrarySlice].type = #Library

* rest[serverSlice].resource[LibrarySlice].interaction[0].code = #read
* rest[serverSlice].resource[LibrarySlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LibrarySlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[LibrarySlice].interaction[1].code = #search-type
* rest[serverSlice].resource[LibrarySlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LibrarySlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[LibrarySlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[LibrarySlice].searchParam[0].type = #token
* rest[serverSlice].resource[LibrarySlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LibrarySlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[LibrarySlice].searchParam[1].name = "url"
* rest[serverSlice].resource[LibrarySlice].searchParam[1].type = #uri
* rest[serverSlice].resource[LibrarySlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LibrarySlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[LibrarySlice].searchInclude[0] = "*"
* rest[serverSlice].resource[LibrarySlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LibrarySlice].searchInclude[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[LibrarySlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[LibrarySlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[LibrarySlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[LibrarySlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[LibrarySlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[LibrarySlice].extension[1].extension[0].valueString = "url"

* rest[serverSlice].resource[ValueSetSlice].type = #ValueSet

* rest[serverSlice].resource[ValueSetSlice].interaction[0].code = #read
* rest[serverSlice].resource[ValueSetSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ValueSetSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ValueSetSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[ValueSetSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ValueSetSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ValueSetSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[ValueSetSlice].searchParam[0].type = #token
* rest[serverSlice].resource[ValueSetSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ValueSetSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ValueSetSlice].searchParam[1].name = "url"
* rest[serverSlice].resource[ValueSetSlice].searchParam[1].type = #uri
* rest[serverSlice].resource[ValueSetSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ValueSetSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ValueSetSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[ValueSetSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ValueSetSlice].searchInclude[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ValueSetSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ValueSetSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[ValueSetSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[ValueSetSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ValueSetSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[ValueSetSlice].extension[1].extension[0].valueString = "url"

* rest[serverSlice].resource[CodeSystemSlice].type = #CodeSystem

* rest[serverSlice].resource[CodeSystemSlice].interaction[0].code = #read
* rest[serverSlice].resource[CodeSystemSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[CodeSystemSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[CodeSystemSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[CodeSystemSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[CodeSystemSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[CodeSystemSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[CodeSystemSlice].searchParam[0].type = #token
* rest[serverSlice].resource[CodeSystemSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[CodeSystemSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[CodeSystemSlice].searchParam[1].name = "url"
* rest[serverSlice].resource[CodeSystemSlice].searchParam[1].type = #uri
* rest[serverSlice].resource[CodeSystemSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[CodeSystemSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[CodeSystemSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[CodeSystemSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[CodeSystemSlice].searchInclude[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[CodeSystemSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[CodeSystemSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[CodeSystemSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[CodeSystemSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[CodeSystemSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[CodeSystemSlice].extension[1].extension[0].valueString = "url"

* rest[serverSlice].resource[ConceptMapSlice].type = #ConceptMap

* rest[serverSlice].resource[ConceptMapSlice].interaction[0].code = #read
* rest[serverSlice].resource[ConceptMapSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConceptMapSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConceptMapSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[ConceptMapSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConceptMapSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConceptMapSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[ConceptMapSlice].searchParam[0].type = #token
* rest[serverSlice].resource[ConceptMapSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConceptMapSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConceptMapSlice].searchParam[1].name = "url"
* rest[serverSlice].resource[ConceptMapSlice].searchParam[1].type = #uri
* rest[serverSlice].resource[ConceptMapSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConceptMapSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConceptMapSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[ConceptMapSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConceptMapSlice].searchInclude[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConceptMapSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ConceptMapSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[ConceptMapSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[ConceptMapSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ConceptMapSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[ConceptMapSlice].extension[1].extension[0].valueString = "url"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureDefinitionSource.fsh


Instance: MeasureDefinitionSource
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Measure Definition Source."""
* insert SanerDefinitionContent
* name = "MeasureDefinitionSource"
* title = "Measure Definition Source."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the requirements for the Measure Definition Source."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[MeasureSlice].type = #Measure
* rest[serverSlice].resource[MeasureSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasure"

* rest[serverSlice].resource[MeasureSlice].interaction[0].code = #read
* rest[serverSlice].resource[MeasureSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[MeasureSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[MeasureSlice].searchParam[0].type = #token
* rest[serverSlice].resource[MeasureSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureSlice].searchParam[1].name = "url"
* rest[serverSlice].resource[MeasureSlice].searchParam[1].type = #uri
* rest[serverSlice].resource[MeasureSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureSlice].searchParam[2].name = "_text"
* rest[serverSlice].resource[MeasureSlice].searchParam[2].type = #string
* rest[serverSlice].resource[MeasureSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[2].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchParam[3].name = "_content"
* rest[serverSlice].resource[MeasureSlice].searchParam[3].type = #string
* rest[serverSlice].resource[MeasureSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[3].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchParam[4].name = "definition-text"
* rest[serverSlice].resource[MeasureSlice].searchParam[4].type = #string
* rest[serverSlice].resource[MeasureSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[4].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchParam[5].name = "code"
* rest[serverSlice].resource[MeasureSlice].searchParam[5].type = #token
* rest[serverSlice].resource[MeasureSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[5].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchParam[6].name = "code:in"
* rest[serverSlice].resource[MeasureSlice].searchParam[6].type = #token
* rest[serverSlice].resource[MeasureSlice].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[6].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[MeasureSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchInclude[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[MeasureSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[0].valueString = "url"

* rest[serverSlice].resource[MeasureSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[0].valueString = "_text"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[1].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[1].valueString = "_content"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[2].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[2].valueString = "definition-text"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[3].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[3].valueString = "code"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[4].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[4].valueString = "code:in"

* rest[serverSlice].resource[MeasureSlice].extension[3].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[0].valueString = "_content"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[1].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[1].valueString = "definition-text"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[2].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[2].valueString = "code"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[3].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[3].valueString = "code:in"

* rest[serverSlice].resource[MeasureSlice].extension[4].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[0].valueString = "definition-text"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[1].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[1].valueString = "code"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[2].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[2].valueString = "code:in"

* rest[serverSlice].resource[MeasureSlice].extension[5].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[5].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[5].extension[0].valueString = "code"
* rest[serverSlice].resource[MeasureSlice].extension[5].extension[1].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[5].extension[1].valueString = "code:in"

* rest[serverSlice].resource[MeasureSlice].extension[6].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[6].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[6].extension[0].valueString = "code:in"

* rest[serverSlice].resource[LibrarySlice].type = #Library

* rest[serverSlice].resource[LibrarySlice].interaction[0].code = #read
* rest[serverSlice].resource[LibrarySlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LibrarySlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[LibrarySlice].interaction[1].code = #search-type
* rest[serverSlice].resource[LibrarySlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LibrarySlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[LibrarySlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[LibrarySlice].searchParam[0].type = #token
* rest[serverSlice].resource[LibrarySlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LibrarySlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[LibrarySlice].searchParam[1].name = "url"
* rest[serverSlice].resource[LibrarySlice].searchParam[1].type = #uri
* rest[serverSlice].resource[LibrarySlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LibrarySlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[LibrarySlice].searchInclude[0] = "*"
* rest[serverSlice].resource[LibrarySlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LibrarySlice].searchInclude[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[LibrarySlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[LibrarySlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[LibrarySlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[LibrarySlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[LibrarySlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[LibrarySlice].extension[1].extension[0].valueString = "url"

* rest[serverSlice].resource[ValueSetSlice].type = #ValueSet

* rest[serverSlice].resource[ValueSetSlice].interaction[0].code = #read
* rest[serverSlice].resource[ValueSetSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ValueSetSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ValueSetSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[ValueSetSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ValueSetSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ValueSetSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[ValueSetSlice].searchParam[0].type = #token
* rest[serverSlice].resource[ValueSetSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ValueSetSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ValueSetSlice].searchParam[1].name = "url"
* rest[serverSlice].resource[ValueSetSlice].searchParam[1].type = #uri
* rest[serverSlice].resource[ValueSetSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ValueSetSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ValueSetSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[ValueSetSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ValueSetSlice].searchInclude[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ValueSetSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ValueSetSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[ValueSetSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[ValueSetSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ValueSetSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[ValueSetSlice].extension[1].extension[0].valueString = "url"

* rest[serverSlice].resource[CodeSystemSlice].type = #CodeSystem

* rest[serverSlice].resource[CodeSystemSlice].interaction[0].code = #read
* rest[serverSlice].resource[CodeSystemSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[CodeSystemSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[CodeSystemSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[CodeSystemSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[CodeSystemSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[CodeSystemSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[CodeSystemSlice].searchParam[0].type = #token
* rest[serverSlice].resource[CodeSystemSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[CodeSystemSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[CodeSystemSlice].searchParam[1].name = "url"
* rest[serverSlice].resource[CodeSystemSlice].searchParam[1].type = #uri
* rest[serverSlice].resource[CodeSystemSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[CodeSystemSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[CodeSystemSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[CodeSystemSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[CodeSystemSlice].searchInclude[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[CodeSystemSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[CodeSystemSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[CodeSystemSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[CodeSystemSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[CodeSystemSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[CodeSystemSlice].extension[1].extension[0].valueString = "url"

* rest[serverSlice].resource[ConceptMapSlice].type = #ConceptMap

* rest[serverSlice].resource[ConceptMapSlice].interaction[0].code = #read
* rest[serverSlice].resource[ConceptMapSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConceptMapSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConceptMapSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[ConceptMapSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConceptMapSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConceptMapSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[ConceptMapSlice].searchParam[0].type = #token
* rest[serverSlice].resource[ConceptMapSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConceptMapSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConceptMapSlice].searchParam[1].name = "url"
* rest[serverSlice].resource[ConceptMapSlice].searchParam[1].type = #uri
* rest[serverSlice].resource[ConceptMapSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConceptMapSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConceptMapSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[ConceptMapSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConceptMapSlice].searchInclude[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConceptMapSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ConceptMapSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[ConceptMapSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[ConceptMapSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ConceptMapSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[ConceptMapSlice].extension[1].extension[0].valueString = "url"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureSource-Aggregate.fsh


Instance: MeasureSource-Aggregate
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Source implementing the Aggregate Option."""
* insert SanerDefinitionContent
* name = "MeasureSource_Aggregate"
* title = "Measure Source implementing the Aggregate Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Source implementing the Aggregate Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[MeasureReportSlice].type = #MeasureReport
* rest[clientSlice].resource[MeasureReportSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasureReport"

* rest[clientSlice].resource[MeasureReportSlice].operation[0].name = "aggregate"
* rest[clientSlice].resource[MeasureReportSlice].operation[0].definition = "http://hl7.org/fhir/uv/saner/OperationDefinition/MeasureReport-aggregate"
* rest[clientSlice].resource[MeasureReportSlice].operation[0].documentation = "Aggregate"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureSource-CSV-Pull.fsh


Instance: MeasureSource-CSV-Pull
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Source implementing the CSV Option and the Pull Option."""
* insert SanerDefinitionContent
* name = "MeasureSource_CSV_Pull"
* title = "Measure Source implementing the CSV Option and the Pull Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Source implementing the CSV Option and the Pull Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[MeasureReportSlice].type = #MeasureReport
* rest[serverSlice].resource[MeasureReportSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasureReport"

* rest[serverSlice].resource[MeasureReportSlice].operation[0].name = "read-csv"
* rest[serverSlice].resource[MeasureReportSlice].operation[0].definition = "http://hl7.org/fhir/uv/saner/OperationDefinition/MeasureReport-read-csv"
* rest[serverSlice].resource[MeasureReportSlice].operation[0].documentation = "Read in CSV Format"

* rest[serverSlice].resource[MeasureReportSlice].operation[1].name = "search-csv"
* rest[serverSlice].resource[MeasureReportSlice].operation[1].definition = "http://hl7.org/fhir/uv/saner/OperationDefinition/MeasureReport-search-csv"
* rest[serverSlice].resource[MeasureReportSlice].operation[1].documentation = "Search in CSV Format"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureSource-CSV-Push.fsh


Instance: MeasureSource-CSV-Push
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Source implementing the CSV Option and the Push Option."""
* insert SanerDefinitionContent
* name = "MeasureSource_CSV_Push"
* title = "Measure Source implementing the CSV Option and the Push Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Source implementing the CSV Option and the Push Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[MeasureSlice].type = #Measure
* rest[clientSlice].resource[MeasureSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasure"

* rest[clientSlice].resource[MeasureSlice].operation[0].name = "report-csv"
* rest[clientSlice].resource[MeasureSlice].operation[0].definition = "http://hl7.org/fhir/uv/saner/OperationDefinition/Measure-report-csv"
* rest[clientSlice].resource[MeasureSlice].operation[0].documentation = "Create or update a MeasureReport from CSV Format"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureSource-ProduceMeasure-CSV-Push.fsh


Instance: MeasureSource-ProduceMeasure-CSV-Push
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Source implementing the Produce Measure transaction with the CSV Option and the Push Option."""
* insert SanerDefinitionContent
* name = "MeasureSource_ProduceMeasure_CSV_Push"
* title = "Measure Source implementing the Produce Measure transaction with the CSV Option and the Push Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Source implementing the Produce Measure transaction with the CSV Option and the Push Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[MeasureSlice].type = #Measure

* rest[clientSlice].resource[MeasureSlice].operation[0].name = "report-csv"
* rest[clientSlice].resource[MeasureSlice].operation[0].definition = "http://hl7.org/fhir/uv/saner/OperationDefinition/Measure-report-csv"
* rest[clientSlice].resource[MeasureSlice].operation[0].documentation = "Create or update a MeasureReport from CSV Format"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureSource-ProduceMeasure-Push.fsh


Instance: MeasureSource-ProduceMeasure-Push
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Source implementing the Produce Measure transaction with the Push Option."""
* insert SanerDefinitionContent
* name = "MeasureSource_ProduceMeasure_Push"
* title = "Measure Source implementing the Produce Measure transaction with the Push Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Source implementing the Produce Measure transaction with the Push Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[MeasureReportSlice].type = #MeasureReport

* rest[clientSlice].resource[MeasureReportSlice].interaction[0].code = #create
* rest[clientSlice].resource[MeasureReportSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureReportSlice].interaction[1].code = #update
* rest[clientSlice].resource[MeasureReportSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].interaction[1].extension.valueCode = #SHALL


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureSource-ProduceMeasure-SupplementalData.fsh


Instance: MeasureSource-ProduceMeasure-SupplementalData
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Source implementing the Produce Measure transaction with the Supplemental Data Option."""
* insert SanerDefinitionContent
* name = "MeasureSource_ProduceMeasure_SupplementalData"
* title = "Measure Source implementing the Produce Measure transaction with the Supplemental Data Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Source implementing the Produce Measure transaction with the Supplemental Data Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client


* rest[clientSlice].interaction[0].code = #batch
* rest[clientSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].interaction[0].extension.valueCode = #SHALL
* rest[clientSlice].interaction[0].documentation = "Communicate a MeasureReport with supplemental data in a Bundle using the [FHIR batch](https://www.hl7.org/fhir/http.html#transaction) operation. The MeasureReport shall be the first entry in the Bundle. Referenced MeasureReport.evaluatedResource elements shall appear as subsequent entries in the Bundle."


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureSource-Pull.fsh


Instance: MeasureSource-Pull
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Source implementing the Pull Option."""
* insert SanerDefinitionContent
* name = "MeasureSource_Pull"
* title = "Measure Source implementing the Pull Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Source implementing the Pull Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[LocationSlice].type = #Location

* rest[serverSlice].resource[LocationSlice].interaction[0].code = #read
* rest[serverSlice].resource[LocationSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LocationSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[LocationSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[LocationSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LocationSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[LocationSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[LocationSlice].searchParam[0].type = #token
* rest[serverSlice].resource[LocationSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LocationSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[LocationSlice].searchParam[1].name = "name"
* rest[serverSlice].resource[LocationSlice].searchParam[1].type = #string
* rest[serverSlice].resource[LocationSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LocationSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[LocationSlice].searchParam[2].name = "identifier"
* rest[serverSlice].resource[LocationSlice].searchParam[2].type = #token
* rest[serverSlice].resource[LocationSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LocationSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[LocationSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[LocationSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LocationSlice].searchInclude[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[LocationSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[LocationSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[LocationSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[LocationSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[LocationSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[LocationSlice].extension[1].extension[0].valueString = "name"
* rest[serverSlice].resource[LocationSlice].extension[1].extension[1].url = "optional"
* rest[serverSlice].resource[LocationSlice].extension[1].extension[1].valueString = "identifier"

* rest[serverSlice].resource[LocationSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[LocationSlice].extension[2].extension[0].url = "required"
* rest[serverSlice].resource[LocationSlice].extension[2].extension[0].valueString = "identifier"

* rest[serverSlice].resource[MeasureReportSlice].type = #MeasureReport
* rest[serverSlice].resource[MeasureReportSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasureReport"

* rest[serverSlice].resource[MeasureReportSlice].interaction[0].code = #read
* rest[serverSlice].resource[MeasureReportSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[MeasureReportSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[0].type = #token
* rest[serverSlice].resource[MeasureReportSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchParam[1].name = "_lastUpdated"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[1].type = #date
* rest[serverSlice].resource[MeasureReportSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchParam[2].name = "date"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[2].type = #date
* rest[serverSlice].resource[MeasureReportSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchParam[3].name = "period"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[3].type = #date
* rest[serverSlice].resource[MeasureReportSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchParam[4].name = "measure"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[4].type = #uri
* rest[serverSlice].resource[MeasureReportSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[4].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchParam[5].name = "measure.title"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[5].type = #string
* rest[serverSlice].resource[MeasureReportSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[5].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureReportSlice].searchParam[6].name = "subject"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[6].type = #reference
* rest[serverSlice].resource[MeasureReportSlice].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[6].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchParam[7].name = "subject:identifier"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[7].type = #token
* rest[serverSlice].resource[MeasureReportSlice].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[7].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchParam[8].name = "subject:Location.near"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[8].type = #special
* rest[serverSlice].resource[MeasureReportSlice].searchParam[8].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[8].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureReportSlice].searchParam[9].name = "reporter"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[9].type = #reference
* rest[serverSlice].resource[MeasureReportSlice].searchParam[9].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[9].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchParam[10].name = "reporter:identifier"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[10].type = #token
* rest[serverSlice].resource[MeasureReportSlice].searchParam[10].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[10].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[MeasureReportSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchInclude[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureReportSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[MeasureReportSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[MeasureReportSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[0].valueString = "period"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[1].url = "required"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[1].valueString = "measure"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[2].url = "optional"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[2].valueString = "_lastUpdated"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[3].url = "optional"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[3].valueString = "date"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[4].url = "optional"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[4].valueString = "measure.title"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[5].url = "optional"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[5].valueString = "subject"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[6].url = "optional"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[6].valueString = "subject:identifier"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[7].url = "optional"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[7].valueString = "subject:Location.near"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[8].url = "optional"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[8].valueString = "reporter"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[9].url = "optional"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[9].valueString = "reporter:identifier"

* rest[serverSlice].resource[MeasureSlice].type = #Measure
* rest[serverSlice].resource[MeasureSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasure"

* rest[serverSlice].resource[MeasureSlice].interaction[0].code = #read
* rest[serverSlice].resource[MeasureSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[MeasureSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[MeasureSlice].searchParam[0].type = #token
* rest[serverSlice].resource[MeasureSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureSlice].searchParam[1].name = "_text"
* rest[serverSlice].resource[MeasureSlice].searchParam[1].type = #string
* rest[serverSlice].resource[MeasureSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[1].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchParam[2].name = "_content"
* rest[serverSlice].resource[MeasureSlice].searchParam[2].type = #string
* rest[serverSlice].resource[MeasureSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[2].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchParam[3].name = "definition-text"
* rest[serverSlice].resource[MeasureSlice].searchParam[3].type = #string
* rest[serverSlice].resource[MeasureSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[3].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchParam[4].name = "code"
* rest[serverSlice].resource[MeasureSlice].searchParam[4].type = #token
* rest[serverSlice].resource[MeasureSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[4].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchParam[5].name = "code:in"
* rest[serverSlice].resource[MeasureSlice].searchParam[5].type = #token
* rest[serverSlice].resource[MeasureSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[5].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[MeasureSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchInclude[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[MeasureSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[0].valueString = "_text"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[1].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[1].valueString = "_content"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[2].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[2].valueString = "definition-text"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[3].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[3].valueString = "code"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[4].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[4].valueString = "code:in"

* rest[serverSlice].resource[MeasureSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[0].valueString = "_content"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[1].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[1].valueString = "definition-text"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[2].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[2].valueString = "code"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[3].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[3].valueString = "code:in"

* rest[serverSlice].resource[MeasureSlice].extension[3].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[0].valueString = "definition-text"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[1].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[1].valueString = "code"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[2].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[2].valueString = "code:in"

* rest[serverSlice].resource[MeasureSlice].extension[4].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[0].valueString = "code"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[1].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[1].valueString = "code:in"

* rest[serverSlice].resource[MeasureSlice].extension[5].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[5].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[5].extension[0].valueString = "code:in"

* rest[serverSlice].resource[OrganizationSlice].type = #Organization

* rest[serverSlice].resource[OrganizationSlice].interaction[0].code = #read
* rest[serverSlice].resource[OrganizationSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[OrganizationSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[OrganizationSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[OrganizationSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[OrganizationSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[OrganizationSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[OrganizationSlice].searchParam[0].type = #token
* rest[serverSlice].resource[OrganizationSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[OrganizationSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[OrganizationSlice].searchParam[1].name = "name"
* rest[serverSlice].resource[OrganizationSlice].searchParam[1].type = #string
* rest[serverSlice].resource[OrganizationSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[OrganizationSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[OrganizationSlice].searchParam[2].name = "identifier"
* rest[serverSlice].resource[OrganizationSlice].searchParam[2].type = #token
* rest[serverSlice].resource[OrganizationSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[OrganizationSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[OrganizationSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[OrganizationSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[OrganizationSlice].searchInclude[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[OrganizationSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[OrganizationSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[OrganizationSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[OrganizationSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[OrganizationSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[OrganizationSlice].extension[1].extension[0].valueString = "name"
* rest[serverSlice].resource[OrganizationSlice].extension[1].extension[1].url = "optional"
* rest[serverSlice].resource[OrganizationSlice].extension[1].extension[1].valueString = "identifier"

* rest[serverSlice].resource[OrganizationSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[OrganizationSlice].extension[2].extension[0].url = "required"
* rest[serverSlice].resource[OrganizationSlice].extension[2].extension[0].valueString = "identifier"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureSource-Push.fsh


Instance: MeasureSource-Push
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Source implementing the Push Option."""
* insert SanerDefinitionContent
* name = "MeasureSource_Push"
* title = "Measure Source implementing the Push Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Source implementing the Push Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[MeasureReportSlice].type = #MeasureReport
* rest[clientSlice].resource[MeasureReportSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasureReport"

* rest[clientSlice].resource[MeasureReportSlice].interaction[0].code = #create
* rest[clientSlice].resource[MeasureReportSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[MeasureReportSlice].interaction[1].code = #update
* rest[clientSlice].resource[MeasureReportSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[MeasureReportSlice].interaction[1].extension.valueCode = #SHALL


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureSource-QueryMeasure-CSV-Pull.fsh


Instance: MeasureSource-QueryMeasure-CSV-Pull
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Source implementing the Query Measure transaction with the CSV Option and the Pull Option."""
* insert SanerDefinitionContent
* name = "MeasureSource_QueryMeasure_CSV_Pull"
* title = "Measure Source implementing the Query Measure transaction with the CSV Option and the Pull Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Source implementing the Query Measure transaction with the CSV Option and the Pull Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[MeasureReportSlice].type = #MeasureReport
* rest[serverSlice].resource[MeasureReportSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasureReport"

* rest[serverSlice].resource[MeasureReportSlice].operation[0].name = "read-csv"
* rest[serverSlice].resource[MeasureReportSlice].operation[0].definition = "http://hl7.org/fhir/uv/saner/OperationDefinition/MeasureReport-read-csv"
* rest[serverSlice].resource[MeasureReportSlice].operation[0].documentation = "Read in CSV Format"

* rest[serverSlice].resource[MeasureReportSlice].operation[1].name = "search-csv"
* rest[serverSlice].resource[MeasureReportSlice].operation[1].definition = "http://hl7.org/fhir/uv/saner/OperationDefinition/MeasureReport-search-csv"
* rest[serverSlice].resource[MeasureReportSlice].operation[1].documentation = "Search in CSV Format"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureSource-QueryMeasure-Pull.fsh


Instance: MeasureSource-QueryMeasure-Pull
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Source implementing the Query Measure transaction with the Pull Option."""
* insert SanerDefinitionContent
* name = "MeasureSource_QueryMeasure_Pull"
* title = "Measure Source implementing the Query Measure transaction with the Pull Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Source implementing the Query Measure transaction with the Pull Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[LocationSlice].type = #Location

* rest[serverSlice].resource[LocationSlice].interaction[0].code = #read
* rest[serverSlice].resource[LocationSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LocationSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[LocationSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[LocationSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LocationSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[LocationSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[LocationSlice].searchParam[0].type = #token
* rest[serverSlice].resource[LocationSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LocationSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[LocationSlice].searchParam[1].name = "name"
* rest[serverSlice].resource[LocationSlice].searchParam[1].type = #string
* rest[serverSlice].resource[LocationSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LocationSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[LocationSlice].searchParam[2].name = "identifier"
* rest[serverSlice].resource[LocationSlice].searchParam[2].type = #token
* rest[serverSlice].resource[LocationSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LocationSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[LocationSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[LocationSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[LocationSlice].searchInclude[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[LocationSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[LocationSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[LocationSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[LocationSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[LocationSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[LocationSlice].extension[1].extension[0].valueString = "name"
* rest[serverSlice].resource[LocationSlice].extension[1].extension[1].url = "optional"
* rest[serverSlice].resource[LocationSlice].extension[1].extension[1].valueString = "identifier"

* rest[serverSlice].resource[LocationSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[LocationSlice].extension[2].extension[0].url = "required"
* rest[serverSlice].resource[LocationSlice].extension[2].extension[0].valueString = "identifier"

* rest[serverSlice].resource[MeasureReportSlice].type = #MeasureReport
* rest[serverSlice].resource[MeasureReportSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasureReport"

* rest[serverSlice].resource[MeasureReportSlice].interaction[0].code = #read
* rest[serverSlice].resource[MeasureReportSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[MeasureReportSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[0].type = #token
* rest[serverSlice].resource[MeasureReportSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchParam[1].name = "_lastUpdated"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[1].type = #date
* rest[serverSlice].resource[MeasureReportSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchParam[2].name = "date"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[2].type = #date
* rest[serverSlice].resource[MeasureReportSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchParam[3].name = "period"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[3].type = #date
* rest[serverSlice].resource[MeasureReportSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchParam[4].name = "measure"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[4].type = #uri
* rest[serverSlice].resource[MeasureReportSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[4].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchParam[5].name = "measure.title"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[5].type = #string
* rest[serverSlice].resource[MeasureReportSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[5].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureReportSlice].searchParam[6].name = "subject"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[6].type = #reference
* rest[serverSlice].resource[MeasureReportSlice].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[6].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchParam[7].name = "subject:identifier"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[7].type = #token
* rest[serverSlice].resource[MeasureReportSlice].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[7].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchParam[8].name = "subject:Location.near"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[8].type = #special
* rest[serverSlice].resource[MeasureReportSlice].searchParam[8].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[8].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureReportSlice].searchParam[9].name = "reporter"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[9].type = #reference
* rest[serverSlice].resource[MeasureReportSlice].searchParam[9].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[9].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchParam[10].name = "reporter:identifier"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[10].type = #token
* rest[serverSlice].resource[MeasureReportSlice].searchParam[10].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchParam[10].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[MeasureReportSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureReportSlice].searchInclude[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureReportSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureReportSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[MeasureReportSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[MeasureReportSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[0].valueString = "period"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[1].url = "required"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[1].valueString = "measure"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[2].url = "optional"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[2].valueString = "_lastUpdated"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[3].url = "optional"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[3].valueString = "date"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[4].url = "optional"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[4].valueString = "measure.title"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[5].url = "optional"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[5].valueString = "subject"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[6].url = "optional"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[6].valueString = "subject:identifier"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[7].url = "optional"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[7].valueString = "subject:Location.near"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[8].url = "optional"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[8].valueString = "reporter"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[9].url = "optional"
* rest[serverSlice].resource[MeasureReportSlice].extension[1].extension[9].valueString = "reporter:identifier"

* rest[serverSlice].resource[MeasureSlice].type = #Measure
* rest[serverSlice].resource[MeasureSlice].supportedProfile[0] = "http://hl7.org/fhir/uv/saner/StructureDefinition/PublicHealthMeasure"

* rest[serverSlice].resource[MeasureSlice].interaction[0].code = #read
* rest[serverSlice].resource[MeasureSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[MeasureSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[MeasureSlice].searchParam[0].type = #token
* rest[serverSlice].resource[MeasureSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureSlice].searchParam[1].name = "_text"
* rest[serverSlice].resource[MeasureSlice].searchParam[1].type = #string
* rest[serverSlice].resource[MeasureSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[1].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchParam[2].name = "_content"
* rest[serverSlice].resource[MeasureSlice].searchParam[2].type = #string
* rest[serverSlice].resource[MeasureSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[2].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchParam[3].name = "definition-text"
* rest[serverSlice].resource[MeasureSlice].searchParam[3].type = #string
* rest[serverSlice].resource[MeasureSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[3].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchParam[4].name = "code"
* rest[serverSlice].resource[MeasureSlice].searchParam[4].type = #token
* rest[serverSlice].resource[MeasureSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[4].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchParam[5].name = "code:in"
* rest[serverSlice].resource[MeasureSlice].searchParam[5].type = #token
* rest[serverSlice].resource[MeasureSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchParam[5].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MeasureSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[MeasureSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MeasureSlice].searchInclude[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MeasureSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[MeasureSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[0].valueString = "_text"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[1].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[1].valueString = "_content"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[2].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[2].valueString = "definition-text"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[3].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[3].valueString = "code"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[4].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[1].extension[4].valueString = "code:in"

* rest[serverSlice].resource[MeasureSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[0].valueString = "_content"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[1].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[1].valueString = "definition-text"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[2].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[2].valueString = "code"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[3].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[2].extension[3].valueString = "code:in"

* rest[serverSlice].resource[MeasureSlice].extension[3].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[0].valueString = "definition-text"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[1].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[1].valueString = "code"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[2].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[3].extension[2].valueString = "code:in"

* rest[serverSlice].resource[MeasureSlice].extension[4].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[0].valueString = "code"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[1].url = "optional"
* rest[serverSlice].resource[MeasureSlice].extension[4].extension[1].valueString = "code:in"

* rest[serverSlice].resource[MeasureSlice].extension[5].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MeasureSlice].extension[5].extension[0].url = "required"
* rest[serverSlice].resource[MeasureSlice].extension[5].extension[0].valueString = "code:in"

* rest[serverSlice].resource[OrganizationSlice].type = #Organization

* rest[serverSlice].resource[OrganizationSlice].interaction[0].code = #read
* rest[serverSlice].resource[OrganizationSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[OrganizationSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[OrganizationSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[OrganizationSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[OrganizationSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[OrganizationSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[OrganizationSlice].searchParam[0].type = #token
* rest[serverSlice].resource[OrganizationSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[OrganizationSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[OrganizationSlice].searchParam[1].name = "name"
* rest[serverSlice].resource[OrganizationSlice].searchParam[1].type = #string
* rest[serverSlice].resource[OrganizationSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[OrganizationSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[OrganizationSlice].searchParam[2].name = "identifier"
* rest[serverSlice].resource[OrganizationSlice].searchParam[2].type = #token
* rest[serverSlice].resource[OrganizationSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[OrganizationSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[OrganizationSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[OrganizationSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[OrganizationSlice].searchInclude[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[OrganizationSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[OrganizationSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[OrganizationSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[OrganizationSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[OrganizationSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[OrganizationSlice].extension[1].extension[0].valueString = "name"
* rest[serverSlice].resource[OrganizationSlice].extension[1].extension[1].url = "optional"
* rest[serverSlice].resource[OrganizationSlice].extension[1].extension[1].valueString = "identifier"

* rest[serverSlice].resource[OrganizationSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[OrganizationSlice].extension[2].extension[0].url = "required"
* rest[serverSlice].resource[OrganizationSlice].extension[2].extension[0].valueString = "identifier"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatement-MeasureSource-SupplementalData.fsh


Instance: MeasureSource-SupplementalData
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the additional requirements for the Measure Source implementing the Supplemental Data Option."""
* insert SanerDefinitionContent
* name = "MeasureSource_SupplementalData"
* title = "Measure Source implementing the Supplemental Data Option."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the additional requirements for the Measure Source implementing the Supplemental Data Option."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client


* rest[clientSlice].interaction[0].code = #batch
* rest[clientSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].interaction[0].extension.valueCode = #SHALL
* rest[clientSlice].interaction[0].documentation = "Communicate a MeasureReport with supplemental data in a Bundle using the [FHIR batch](https://www.hl7.org/fhir/http.html#transaction) operation. The MeasureReport shall be the first entry in the Bundle. Referenced MeasureReport.evaluatedResource elements shall appear as subsequent entries in the Bundle."


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CapabilityStatements.fsh

Profile:        CapabilityStatementWithSlices
Parent:         CapabilityStatement
Title:          "Capability Statements with Slices"
Description:    "A Capability Statement with slicing defined"
* ^abstract = true
* insert SanerStructureDefinitionContent

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
    ParametersSlice 0..*

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


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/CodeSystem-agerange.fsh

CodeSystem: IHE_ADX_agerange
Id: IHE-ADX-agerange
Title: "Age Range Coding System"
Description: """The description below includes text from CP-QRPH-238. The normative text describing this code system can be found at
https://www.ihe.net/uploadedFiles/Documents/QRPH/IHE_QRPH_Suppl_ADX.pdf#page=78

The representation of age group ranges code should be unambiguous, human readable and machine-readable. There being no commonly
available coding system or convention for expressing or representing age ranges for aggregate data exchange, ADX expresses an
age group band through two simple durations as defined in the ISO 8601. The definition below provides the grammar for a coding
system.  The URL for this Coding System is [http://profiles.ihe.net/fhir/CodeSystem/IHE_ADX_agerange](./CodeSystem-IHE-ADX-agerange.html) (for use in HL7® FHIR®),
and the OID is 1.3.6.1.4.1.19376.1.7.3.1.1.29.1 (for use in HL7® CDA® and Version 3 standards).

ADX describes an age group range as two durations:  &ltduration1&gt -- &ltduration2&gt. Where duration1 specifies the beginning of the
age group band (everyone who is this age and above) and duration2 signify the upper bound of the age group band.
Therefore, age groups like '1-9 years' means everyone who is at least one year old and less than 10 years old represented as
P1Y--P10Y,age group like '10-14 years' means everyone who is at least 10 years old and less than 15 years old is represented
as P10Y--P15Y.

Durations define the amount if an intervening time between two time points. These durations are represented in the
form P[n]Y[n]M[n]DT[n]H[n]M[n]S or P[n]W. The [n] is replaced by the value for each of the time elements that follow
the [n] and the letters have the meaning:

* P is the duration designator (for period) placed at the start of the duration representation.
* Y is the year designator that follows the value for the number of years.
* M is the month designator that follows the value for the number of months.
* W is the week designator that follows the value for the number of weeks.
* D is the day designator that follows the value for the number of days.
* T is the time designator that precedes the time components of the representation.
* H is the hour designator that follows the value for the number of hours.
* M is the minute designator that follows the value for the number of minutes.
* S is the second designator that follows the value for the number of seconds.
"""
* ^experimental = false
/* ^url = "http://profiles.ihe.net/fhir/CodeSystem/IHE_ADX_agerange"*/
* ^status = #active
* ^publisher = "IHE"
* ^contact[0].name = "IHE"
* ^contact[0].telecom.system = #url
* ^contact[0].telecom.value = "http://ihe.net"
* ^contact[1].name = "Keith W. Boone"
* ^contact[1].telecom.system = #email
* ^contact[1].telecom.value = "kboone@ainq.com"
* ^copyright = "Some content from IHE Copyright 2015 [IHE International, Inc](http://www.ihe.net/Governance/#Intellectual_Property)."
* ^caseSensitive = true

* #P0M--P7M "0-6 Months" "A age of less than 7 months old"
* #P0Y--P1Y "<1 Year"  "A age of less than 1 year old"
* #P1Y--P5Y "1-4 Years" "A age greater or equal to 1 and less than 5 years"
* #P5Y--P10Y "5-9 Years" "A age greater or equal to 5 and less than 10 years"
* #P10Y--P15Y "10-14 Years" "A age greater or equal to 10 and less than 15 years"
* #P15Y--P20Y "15-19 Years" "A age greater or equal to 15 and less than 20 years"
* #P20Y--P9999Y "20+ Years" "A age greater or equal to 20 and years"


* #P0Y--P20Y "< 20 Years" "A age of less than 20 years old"
* #P20Y--P30Y "20-30 Years" "A age greater or equal to 20 and less than 30 years"
* #P30Y--P40Y "30-40 Years" "A age greater or equal to 30 and less than 40 years"
* #P20Y--P40Y "20-40 Years" "A age greater or equal to 20 and less than 40 years"
* #P40Y--P50Y "40-50 Years" "A age greater or equal to 40 and less than 50 years"
* #P50Y--P60Y "50-60 Years" "A age greater or equal to 50 and less than 60 years"
* #P40Y--P60Y "40-60 Years" "A age greater or equal to 40 and less than 60 years"
* #P60Y--P70Y "60-70 Years" "A age greater or equal to 60 and less than 70 years"
* #P70Y--P80Y "70-80 Years" "A age greater or equal to 70 and less than 80 years"
* #P60Y--P80Y "60-80 Years" "A age greater or equal to 60 and less than 80 years"
* #P80Y--P9999Y "80+ Years" "A age greater or equal to 80 years"


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/ComputableCDCPatientImpactAndHospitalCapacityText.fsh

RuleSet: ComputableCDCPatientImpactAndHospitalCapacityText
* text.status = #generated
* text.div = """
<div xmlns="http://www.w3.org/1999/xhtml">
 <h3>Patient Impact and Hospital Capacity</h3>
 <p>The url for this measure is <code>http://hl7.org/fhir/uv/saner/Measure/ComputableCDCPatientImpactAndHospitalCapacity</code>.
 </p>
 <p>This measure demonstrates automated reporting on bed availability and use at a facility
 location based on CDC/NHSN reporting requirements. It is used to illustrate automation
 of measure reporting using the SANER Implementation guide.
 </p>
 <dl>
 <dt>Frequency</dt>
 <dd>This measure is expected to be reported every 1 day.</dd>
 <dt>Publisher</dt>
 <dd>HL7 International</dd>
 <dt>Contacts</dt>
 <dd>HL7 Public Health Workgroup (http://hl7.org/Special/committees/pher/index.cfm)</dd>
 <dd>Keith W. Boone (mailto:kboone@ainq.com)</dd>
 <dt>Status</dt>
 <dd>draft</dd>
 </dl>
 <h4>Definitions</h4><dl><dt>Ventilator</dt> <dd>Any device used to support, assist or control respiration
 (inclusive of the weaning period) through the application of positive pressure to
 the airway when delivered via an artificial airway, specifically an oral/nasal endotracheal
 or tracheostomy tube. Note: Ventilation and lung expansion devices that deliver positive
 pressure to the airway (for example: CPAP, BiPAP, bi-level, IPPB and PEEP) via non-invasive
 means (for example: nasal prongs, nasal mask, full face mask, total mask, etc.) are
 not considered ventilators unless positive pressure is delivered via an artificial
 airway (oral/nasal endotracheal or tracheostomy tube). </dd> <dt>Beds</dt> <dd>Baby
 beds in mom's room count as 1 bed, even if there are multiple baby beds Follow-up
 in progress if staffed is less than licensed. Total includes all beds, even if with
 surge beds it exceeds licensed beds. </dd> <dt>ICU beds</dt> <dd>Include NICU</dd>
 </dl>
 <h4>Group: Hospital COVID-19 Patient Encounters Reporting</h4>
 <p></p>
 <dl>
 <dt>Codes</dt>
 <dd>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasureGroupSystem#Encounters Encounters</li>
 </ul>
 </dd>
 </dl>
 <dl>
 <dt>subject</dt>
 <dd>Patient in room</dd>
 <dt>scoring</dt>
 <dd>queue-length</dd>
 <dt>type</dt>
 <dd>structure</dd>
 <dt>improvementNotation</dt>
 <dd>decrease</dd>
 </dl>
 <h5>Population: Patients with suspected or confirmed COVID-19 in any location.</h5>
 <p>Active encounters where the encounter diagnosis is suspected or confirmed COVID-19,
 or a Condition of suspected or confirmed COVID-19 was created during that encounter.
 This includes the patients with laboratory-confirmed or clinically diagnosed COVID-19.
 <dl><dt>Confirmed</dt> <dd>A patient with a laboratory confirmed COVID-19 diagnosis</dd>
 <dt>Suspected</dt> <dd>A patient without a laboratory confirmed COVID-19 diagnosis
 who, in accordance with CDC’s Interim Public Health Guidance for Evaluating Persons
 Under Investigation (PUIs), has signs and symptoms compatible with COVID-19 (most
 patients with confirmed COVID-19 have developed fever and/or symptoms of acute respiratory
 illness, such as cough, shortness of breath or myalgia/fatigue).</dd> </dl>
 </p>
 <dl>
 <dt>Codes</dt>
 <dd>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numC19Pats All COVID-19 Confirmed or Suspected Patients</li>
 </ul>
 <ul>
 <li>http://terminology.hl7.org/CodeSystem/measure-population#initial-population </li>
 </ul>
 </dd>
 </dl>
 <h5>Expression: NumC19Pats</h5>
 <p>This expression finds encounters that were active or finished in the reporting period,
 and their referenced Patient, Condition and Observation resources. It filters these
 based on cases where Encounter reports a reason or condition in the SuspectedOrDiagnosedCOVID19
 value set, or where a positive lab test from the Covid19Labs valueset, or where the
 patient has any such associated Condition or Observation resources in the prior two
 weeks.
 </p>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre> ( %Base + 'Encounter?' + '_include=Encounter:subject&amp;_include=Encounter:Condition&amp;' + '_include=Encounter:reasonReference' + '&amp;status=in-progress,finished' + '&amp;date=ge' + %ReportingPeriod.start.toString() + '&amp;date=lt' + %ReportingPeriod.end.toString() ).resolve().select(entry.resource). where( iif(myMemberOf((Encounter.reasonCode | Condition.code), %SuspectedOrConfirmedCOVID19Diagnoses.url) | Observation.where((myMemberOf(code, %Covid19Labs.url) and myMemberOf(value, %PositiveResults.url)) ), true, iif( Patient.distinct().where( %Base + 'Observation?_count=1' + '&amp;status=registered,preliminary,final,amended,corrected' + '&amp;patient=' + $this.id + '&amp;date=gt' + (dateSubtract(%ReportingPeriod.start, 14 'days')).toString() + '&amp;code:in=' + %Covid19Labs.url + '&amp;value-concept:in=' + %PositiveResults.url ).resolve().select(entry.resource as Observation).exists(), true, Patient.distinct().where( %Base + 'Condition?_count=1'+ '&amp;status:not=refuted&amp;status:not=entered-in-error' + '&amp;patient=' + $this.id + '&amp;verificationStatus:not=refuted,entered-in-error' + '&amp;date=gt' + (dateSubtract(%ReportingPeriod.start, 14 'days')).toString() + '&amp;code:in=' + SuspectedOrConfirmedCOVID19Diagnoses.url ).resolve().select(entry.resource as Condition).exists() ) ) ) .distinct() .aggregate( iif($total.subject contains $this.subject, $total, $total | $this ) )</pre><h5>Stratifier: By Location and Ventilator Status</h5>
 <p>Stratifies the population by Location (inpatient vs ED/Overflow/Other) and Ventilator
 Status (Ventilated vs Not Ventilated)
 </p>
 <h5>Expression</h5>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>iif(%NumVentUse.id contains Encounter.subject, iif(myMemberOf(Encounter.location.location.resolve().type, %InpatientLocations.url), 'InpVentilated', 'OFVentilated'), iif(myMemberOf(Encounter.location.location.resolve().type, %InpatientLocations.url), 'InpNotVentilated', 'OFNotVentilated') )</pre><h4>Group: Hospital Onset COVID-19 Patient Encounters Reporting</h4>
 <p></p>
 <dl>
 <dt>Codes</dt>
 <dd>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasureGroupSystem#AcquiredCovid Acquired COVID-19 in Hospital</li>
 </ul>
 </dd>
 </dl>
 <dl>
 <dt>subject</dt>
 <dd>Hospital Acquired COVID-19</dd>
 <dt>scoring</dt>
 <dd>event-growth</dd>
 <dt>type</dt>
 <dd>outcome</dd>
 <dt>improvementNotation</dt>
 <dd>decrease</dd>
 </dl>
 <h5>Population: Patients with suspected or confirmed COVID-19 in an inpatient location</h5>
 <p>Patients with suspected or confirmed COVID-19 in an inpatient location</p>
 <dl>
 <dt>Codes</dt>
 <dd>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numC19HospPats Hospitalized COVID-19 Patients</li>
 </ul>
 <ul>
 <li>http://terminology.hl7.org/CodeSystem/measure-population#initial-population </li>
 </ul>
 </dd>
 </dl>
 <h5>Expression: NumC19HospPats</h5>
 <p>Uses the value of NumC19Pat as the initial population</p>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>%NumC19Pats.entry.resource.location.location.resolve().where(myMemberOf(type, %InpatientLocations.url))</pre><h5>Population: Hospital Onset COVID-19 Patients</h5>
 <p>Hospital Onset COVID-19 Patients</p>
 <dl>
 <dt>Codes</dt>
 <dd>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numC19HOPats Hospital Onset COVID-19 Patients</li>
 </ul>
 <ul>
 <li>http://terminology.hl7.org/CodeSystem/measure-population#numerator </li>
 </ul>
 </dd>
 </dl>
 <h5>Expression: NumC19HOPats</h5>
 <p>Filters the initial population by ruling out those patients whose first suspected
 or confirmed diagnosis or lab result appears less than 14 days from admission.
 </p>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>Encounter.where( iif(dateAdd(period.start,14 'days') &gt; today(), false, iif( (%Base + 'Condition?_count=1'+ '&amp;status:not=refuted&amp;status:not=entered-in-error' + '&amp;patient=' + $this.subject + '&amp;verificationStatus:not=refuted,entered-in-error' + '&amp;date=gt' + (dateAdd($this.period.start,14 'days')).toString() + '&amp;date=le' + (dateSubtract($this.period.start,14 'days')).toString() + '&amp;code:in=' + %SuspectedOrConfirmedCOVID19Diagnoses.url ).resolve().select(entry.resource as Condition).exists(), false, (%Base + 'Observation?_count=1' + '&amp;status=registered,preliminary,final,amended,corrected' + '&amp;patient=' + $this.subject + '&amp;date=gt' + (dateSubtract($this.period.start, 14 'days')).toString() + '&amp;date=le' + (dateAdd($this.period.start,14 'days')).toString() + '&amp;code:in=' + %Covid19Labs.url + '&amp;value-concept:in=' + %PositiveResults.url ).resolve().select(entry.resource as Observation) .empty() ) ) ).select(patient).resolve().trace('patients', id)</pre><h5>Population: Cumulative Hospital Onset COVID-19 Patients</h5>
 <p>Cumulative Hospital Onset COVID-19 Patients</p>
 <dl>
 <dt>Codes</dt>
 <dd>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#cumC19HOPats Cumulative Hospital Onset COVID-19 Patients</li>
 </ul>
 <ul>
 <li>http://terminology.hl7.org/CodeSystem/measure-population#denominator </li>
 </ul>
 </dd>
 </dl>
 <h5>Expression: CumC19HOPats</h5>
 <p>omputes the cumulative total from the prior measure report and the number of new infections
 detected in the current reporting period.
 </p>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>iif(%PriorReport.empty(), 0, %PriorReport.group[1].population[2].count + %NumC19HOPats.total)</pre><h5>Stratifier: By Age Group</h5>
 <p>Stratifies the population by Age Group</p>
 <h5>Expression</h5>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>Patient.select( iif(dateAdd(birthDate, 20 'years') &lt; today(), 'P0Y--P20Y', iif(dateAdd(birthDate, 30 'years') &lt; today(), 'P20Y--P30Y', iif(dateAdd(birthDate, 40 'years') &lt; today(), 'P30Y--P40Y', iif(dateAdd(birthDate, 50 'years') &lt; today(), 'P40Y--P50Y', iif(dateAdd(birthDate, 60 'years') &lt; today(), 'P50Y--P60Y', iif(dateAdd(birthDate, 70 'years') &lt; today(), 'P60Y--P70Y', iif(dateAdd(birthDate, 80 'years') &lt; today(), 'P70Y--P80Y', 'P80Y-P9999Y') ) ) ) ) ) ) )</pre><h5>Stratifier: By Gender</h5>
 <p>Stratifies the population by Gender</p>
 <h5>Expression</h5>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>Patient.gender</pre><h5>Stratifier: By Ethnicity</h5>
 <p>Stratifies the population by Ethnicity</p>
 <h5>Expression</h5>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>Patient.extension('http://hl7.org/fhir/us/core/StructureDefinition/us-ethnicity-category').extension('ombCategory').valueCoding.code</pre><h5>Stratifier: By Race</h5>
 <p>Stratifies the population by Race</p>
 <h5>Expression</h5>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>Patient .extension('http://hl7.org/fhir/us/core/StructureDefinition/us-core-race') .extension('ombCategory') .select( iif(valueCoding.count() &gt; 1, 'Mixed', iif(valueCoding.system = 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor', 'Unknown', valueCoding.code ) ) )</pre><h4>Group: COVID-19 Patient Death Reporting</h4>
 <p></p>
 <dl>
 <dt>Codes</dt>
 <dd>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasureGroupSystem#CovidDeaths COVID-19 Deaths</li>
 </ul>
 </dd>
 </dl>
 <dl>
 <dt>subject</dt>
 <dd>Patients with conformed or suspected COVID-19 who have died</dd>
 <dt>scoring</dt>
 <dd>event-growth</dd>
 <dt>type</dt>
 <dd>outcome</dd>
 <dt>improvementNotation</dt>
 <dd>decrease</dd>
 </dl>
 <h5>Population: Patients with suspected or confirmed COVID-19 in any location.</h5>
 <p>Patients with suspected or confirmed COVID-19 in any location.</p>
 <dl>
 <dt>Codes</dt>
 <dd>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numC19Pats All COVID-19 Confirmed or Suspected Patients</li>
 </ul>
 <ul>
 <li>http://terminology.hl7.org/CodeSystem/measure-population#initial-population </li>
 </ul>
 </dd>
 </dl>
 <h5>Expression</h5>
 <p>COVID-19 Patients in an inpatient setting</p>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>%NumC19Pats.entry.resource</pre><h5>Population: Patients with suspected or confirmed COVID-19 who died in the hospital, ED, or any
 overflow location
 </h5>
 <p>Patients with suspected or confirmed COVID-19 who died in the hospital, ED, or any
 overflow location
 </p>
 <dl>
 <dt>Codes</dt>
 <dd>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numC19Died COVID-19 Patient Deaths</li>
 </ul>
 <ul>
 <li>http://terminology.hl7.org/CodeSystem/measure-population#numerator </li>
 </ul>
 </dd>
 </dl>
 <h5>Expression: NumC19Died</h5>
 <p>Filters the initial population by selecting those who have died.</p>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>Encounter.where( iif( hospitalization.where( myMemberOf(dispositionCode, %PatientExpired) ), true, subject.resolve().where(deceasedBoolean = true | deceasedDateTime.exists()) ) ).select(subject).resolve()</pre><h5>Population: Cumulative total of Patients with suspected or confirmed COVID-19 who died in the
 hospital, ED, or any overflow location
 </h5>
 <p>Cumulative total of Patients with suspected or confirmed COVID-19 who died in the
 hospital, ED, or any overflow location
 </p>
 <dl>
 <dt>Codes</dt>
 <dd>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#cumC19Died Cumulative COVID-19 Patient Deaths</li>
 </ul>
 <ul>
 <li>http://terminology.hl7.org/CodeSystem/measure-population#denominator </li>
 </ul>
 </dd>
 </dl>
 <h5>Expression: CumC19Died</h5>
 <p>Computes the cumulative total from the prior measure report and the number of new
 deaths in the current reporting period.
 </p>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>iif(%PriorReport.empty(), 0, %PriorReport.group[2].population[2].count + %NumC29Died.count())</pre><h5>Stratifier: By Age Group</h5>
 <p>Stratifies the population by Age Group</p>
 <h5>Expression</h5>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>Patient.select( iif(dateAdd(birthDate, 20 'years') &lt; today(), 'P0Y--P20Y', iif(dateAdd(birthDate, 30 'years') &lt; today(), 'P20Y--P30Y', iif(dateAdd(birthDate, 40 'years') &lt; today(), 'P30Y--P40Y', iif(dateAdd(birthDate, 50 'years') &lt; today(), 'P40Y--P50Y', iif(dateAdd(birthDate, 60 'years') &lt; today(), 'P50Y--P60Y', iif(dateAdd(birthDate, 70 'years') &lt; today(), 'P60Y--P70Y', iif(dateAdd(birthDate, 80 'years') &lt; today(), 'P70Y--P80Y', 'P80Y-P9999Y') ) ) ) ) ) ) )</pre><h5>Stratifier: By Gender</h5>
 <p>Stratifies the population by Gender</p>
 <h5>Expression</h5>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>Patient.gender</pre><h5>Stratifier: By Ethnicity</h5>
 <p>Stratifies the population by Ethnicity</p>
 <h5>Expression</h5>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>Patient.extension('http://hl7.org/fhir/us/core/StructureDefinition/us-ethnicity-category').extension('ombCategory').valueCoding.code</pre><h5>Stratifier: By Race</h5>
 <p>Stratifies the population by Race</p>
 <h5>Expression</h5>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>Patient .extension('http://hl7.org/fhir/us/core/StructureDefinition/us-core-race') .extension('ombCategory') .select( iif(valueCoding.code contains '1992-5', 'A', ' ') + iif(valueCoding.code contains '2054-5', 'B', ' ') + iif(valueCoding.code contains '2076-8', 'H', ' ') + iif(valueCoding.code contains '2028-9', 'S', ' ') + iif(valueCoding.code contains '2106-3', 'W', ' ') )</pre><h4>Group: Ventilator Reporting</h4>
 <p></p>
 <dl>
 <dt>Codes</dt>
 <dd>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasureGroupSystem#Ventilators Ventilators</li>
 </ul>
 </dd>
 </dl>
 <dl>
 <dt>subject</dt>
 <dd>Ventilator capacity</dd>
 <dt>scoring</dt>
 <dd>capacity</dd>
 <dt>type</dt>
 <dd>structure</dd>
 <dt>improvementNotation</dt>
 <dd>decrease</dd>
 </dl>
 <h5>Population: Total number of ventilators</h5>
 <p>Count of all ventilators that can support patient care, whether or not they are presently
 in use.
 </p>
 <dl>
 <dt>Codes</dt>
 <dd>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numVent Mechanical Ventilators</li>
 </ul>
 <ul>
 <li>http://terminology.hl7.org/CodeSystem/measure-population#denominator </li>
 </ul>
 </dd>
 </dl>
 <h5>Expression: NumVent</h5>
 <p>Computes the total number of ventilators from the previously reported MeasureReport</p>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>iif(trace('PriorReport exists:', %PriorReport.exists()), %PriorReport.group[3].population[0].count, 0)</pre><h5>Population: Total number of ventilators in use</h5>
 <p>Count of all ventilators in use.</p>
 <dl>
 <dt>Codes</dt>
 <dd>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numVentUse Mechanical Ventilators in Use</li>
 </ul>
 <ul>
 <li>http://terminology.hl7.org/CodeSystem/measure-population#numerator </li>
 </ul>
 </dd>
 </dl>
 <h5>Expression: NumVentUse</h5>
 <p>dentifies the number of ventilators in use by counting Patient with an Observation
 or Procedure resource from an appropriate value set indicating ventilator use.
 </p>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>( %Base + 'Encounter?' + 'status=in-progress,finished' + '&amp;_include=Encounter:subject' + '&amp;date=ge' + %ReportingPeriod.start.toString() + '&amp;date=lt' + %ReportingPeriod.end.toString() ).resolve() .select(entry.resource as Patient) .where( iif( ( %Base + 'Observation?_count=1'+ '&amp;status=registered,preliminary,final,amended,corrected' + '&amp;patient=' + $this.id + '&amp;verificationStatus:not=refuted,entered-in-error' + '&amp;date=gt' + %ReportingPeriod.start.toString() + '&amp;date=le' + %ReportingPeriod.end.toString() + '&amp;code:in=' + %VentilatorObservations.url ).resolve().select(entry.resource as Observation).exists(), true, ( %Base + 'Procedure?_count=1'+ '&amp;status=in-progress,competed' + '&amp;patient=' + $this.id + '&amp;date=gt' + %ReportingPeriod.start.toString() + '&amp;date=le' + %ReportingPeriod.end.toString() + '&amp;code:in=' + %VentilatorProcedures.url ).resolve().select(entry.resource as Procedure).exists() ) )</pre><h5>Population: Total number of ventilators not presently in use.</h5>
 <p>Count of all ventilators not presently in use.</p>
 <dl>
 <dt>Codes</dt>
 <dd>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numVentAvail Mechanical Ventilators Available</li>
 </ul>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasurePopulationSystem#numerator-complement </li>
 </ul>
 </dd>
 </dl>
 <h5>Expression: NumVentAvail</h5>
 <p>omputes the number of ventilators available by substracting the number of ventilators
 in use determined by population 1 from thee total number of ventilators given in population
 0
 </p>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>%NumVent - %NumVentUse.total.toInteger()</pre><h4>Group: Bed Reporting</h4>
 <p></p>
 <dl>
 <dt>Codes</dt>
 <dd>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasureGroupSystem#Beds Beds</li>
 </ul>
 </dd>
 </dl>
 <dl>
 <dt>subject</dt>
 <dd>Bed capacity</dd>
 <dt>scoring</dt>
 <dd>capacity</dd>
 <dt>type</dt>
 <dd>structure</dd>
 <dt>improvementNotation</dt>
 <dd>decrease</dd>
 </dl>
 <h5>Population: Total number of beds</h5>
 <p>Total number of all Inpatient and outpatient beds, including all staffed, ICU, licensed,
 and overflow (surge) beds used for inpatients or outpatients
 </p>
 <dl>
 <dt>Codes</dt>
 <dd>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numTotBeds All Hospital Beds</li>
 </ul>
 <ul>
 <li>http://terminology.hl7.org/CodeSystem/measure-population#denominator </li>
 </ul>
 </dd>
 </dl>
 <h5>Expression: NumTotBeds</h5>
 <p>Computes the total number of beds from the previously reported MeasureReport</p>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>iif(%PriorReport.exists(),%PriorReport.group[3].population[0].count,0)</pre><h5>Population: Total number of beds in use</h5>
 <p>Total number of all Inpatient and outpatient beds that are occupied</p>
 <dl>
 <dt>Codes</dt>
 <dd>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numTotBedsOcc Hospital Beds Occupied</li>
 </ul>
 <ul>
 <li>http://terminology.hl7.org/CodeSystem/measure-population#numerator </li>
 </ul>
 </dd>
 </dl>
 <h5>Expression: NumTotBedsOcc</h5>
 <p>Identifies the number of beds in use by counting the most recent Encounter for each
 patient where the encounter was in-progress or finished within the period.
 </p>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>( %Base + 'Encounter?' + 'status=in-progress' + '&amp;date=ge' + %ReportingPeriod.start.toString() + '&amp;date=lt' + %ReportingPeriod.end.toString() ).resolve().select(entry.resource as Encounter) .aggregate( iif($total.select(location[0]).location contains $this.location.location.first(), $total, $total | $this ) )</pre><h5>Population: Total number of hospital beds available</h5>
 <p>Total number of all hospital inpatient and outpatient beds that are available</p>
 <dl>
 <dt>Codes</dt>
 <dd>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numTotBedsAvail Hospital Beds Available</li>
 </ul>
 <ul>
 <li>http://hl7.org/fhir/uv/saner/CodeSystem/MeasurePopulationSystem#numerator-complement </li>
 </ul>
 </dd>
 </dl>
 <h5>Expression: NumTotBedsAvail</h5>
 <p>omputes the number of beds available by substracting the number of beds in use determined
 by population 1 from the total number of beds given in population 0
 </p>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>%NumTotBeds - %NumTotBedsOcc.count()</pre><h5>Stratifier: By Type of Location</h5>
 <p>Inpatient Non-ICU, Inpatient ICU, Other</p>
 <h5>Expression</h5>
 <p>Determines the location of the encounter based on the membership of location.type
 in the InpatientLocations and ICULocations ValueSet resources. When location.type
 is assigned to any other value, it is reported to be Other
 </p>
 <dl>
 <dt>Language</dt>
 <dd>text/fhirpath</dd>
 </dl><pre>Encounter.location.location.resolve() .iif(myMemberOf(type, %InpatientLocations.url), iif (myMemberOf(type, %ICULocations.url), 'Inpatient ICU', 'Inpatient Non-ICU' ), 'Other' )</pre><h5>References</h5>


 <ul>
 <li><a href="https://www.cdc.gov/nhsn/pdfs/commup/email-covid19-pihc-508.pdf" title="CDC/NHSN COVID-19 Patient Impact &amp; Hospital Capacity Module Home Page">NHSN COVID-19 Reporting</a></li>
 <li><a href="https://web.archive.org/web/20200407141902/https://www.cdc.gov/nhsn/pdfs/covid19/import-covid19-data-508.pdf" title="Importing COVID-19 Patient Module Denominator data for Patient Safety Component">How to import COVID-19 Summary Data</a></li>
 <li><a href="https://www.ohsu.edu/sites/default/files/2020-03/NHSN%20COVID-19%20Patient%20Impact%20and%20Hospital%20Capacity%20Module-%20Data%20Elements....pdf" title="Instructions for Completion of the COVID-19 Patient Impact and Hospital Capacity Module Form (CDC 57.130)">Table of Instructions</a></li>
 <li><a href="https://www.cdc.gov/nhsn/pdfs/covid19/ltcf/fac-import-csv-508.pdf" title="CDC/NHSN COVID-19 Reporting CSV File Template">CSV File Template</a></li>
 </ul>
</div>"""


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/ComputableNHSNMeasureLibrary.fsh

Instance: ComputableNHSNMeasureLibrary
InstanceOf: PublicHealthMeasureLibrary
Description: "This library contains references to the value sets used for the Computable NHSN Measure"
// We aren't automating anything other than patient impact and hospital capacity, this library
// will be referenced by other NHSN inspired measures but will not be used by them.

* insert SanerDefinitionContent
* id = "ComputableNHSNMeasureLibrary"
* name = "ComputableNHSNMeasureLibrary"
* url = "http://hl7.org/fhir/uv/saner/Library/ComputableNHSNMeasureLibrary"
* title = "Computable NHSN Patient Impact and Hospital Capacity Measure Library"
* type = LIBTYPE#asset-collection
* useContext.code = http://terminology.hl7.org/CodeSystem/usage-context-type#focus
* useContext.valueCodeableConcept = SCT#840539006 "COVID-19"
* author.name = "HL7 Public Health Workgroup"
* author.telecom.system = #email
* author.telecom.value = "mailto:pher@lists.hl7.org"
* insert NHSNArtifacts

* content[0].id = "BedLocationOperationalStatus"
* content[0].url = Canonical(BedLocationOperationalStatus)
* content[0].title = "Bed Location Operational Status"
* content[0].contentType = #application/fhir+xml

* content[1].id = "ConfirmedCOVID19Diagnoses"
* content[1].url = Canonical(ConfirmedCOVID19Diagnoses)
* content[1].title = "Confirmed COVID-19 Diagnosis Values"
* content[1].contentType = #application/fhir+xml

* content[2].id = "PositiveResults"
* content[2].url = Canonical(PositiveResults)
* content[2].title = "Confirmed COVID-19 Diagnosis"
* content[2].contentType = #application/fhir+xml

* content[3].id = "Covid19Labs"
* content[3].url = Canonical(Covid19Labs)
* content[3].title = "COVID-19 Diagnostic Test"
* content[3].contentType = #application/fhir+xml

* content[4].id = "NegativeResults"
* content[4].url = Canonical(NegativeResults)
* content[4].title = "COVID-19 Not Detected"
* content[4].contentType = #application/fhir+xml

* content[5].id = "COVID19Antibody"
* content[5].url = Canonical(COVID19Antibody)
* content[5].title = "COVID19Antibody"
* content[5].contentType = #application/fhir+xml

* content[6].id = "COVID19DXICD10"
* content[6].url = Canonical(COVID19DXICD10)
* content[6].title = "COVID19DXICD10"
* content[6].contentType = #application/fhir+xml

* content[7].id = "COVID19DXSNOMED"
* content[7].url = Canonical(COVID19DXSNOMED)
* content[7].title = "COVID19DXSNOMED"
* content[7].contentType = #application/fhir+xml

* content[8].id = "COVID19Exposures"
* content[8].url = Canonical(COVID19Exposures)
* content[8].title = "COVID19Exposures"
* content[8].contentType = #application/fhir+xml

* content[9].id = "COVID19Organism"
* content[9].url = Canonical(COVID19Organism)
* content[9].title = "COVID19Organism"
* content[9].contentType = #application/fhir+xml

* content[10].id = "HealthcareServiceLocation"
* content[10].url = Canonical(HealthcareServiceLocation)
* content[10].title = "HealthcareServiceLocation"
* content[10].contentType = #application/fhir+xml

* content[11].id = "ICULocations"
* content[11].url = Canonical(ICULocations)
* content[11].title = "ICU Locations"
* content[11].contentType = #application/fhir+xml

* content[12].id = "InpatientLocations"
* content[12].url = Canonical(InpatientLocations)
* content[12].title = "Inpatient Locations"
* content[12].contentType = #application/fhir+xml

* content[13].id = "MeasureGroups"
* content[13].url = Canonical(MeasureGroups)
* content[13].title = "Measure Groups"
* content[13].contentType = #application/fhir+xml

* content[14].id = "MeasurePopulations"
* content[14].url = Canonical(MeasurePopulations)
* content[14].title = "Measure Populations"
* content[14].contentType = #application/fhir+xml

* content[15].id = "MeasureRateAggregationValues"
* content[15].url = Canonical(MeasureRateAggregationValues)
* content[15].title = "Measure Rate Aggregation Value Set"
* content[15].contentType = #application/fhir+xml

* content[16].id = "MeasureStatus"
* content[16].url = Canonical(MeasureStatus)
* content[16].title = "Measure Status Values"
* content[16].contentType = #application/fhir+xml

* content[17].id = "PatientsOnVentilator"
* content[17].url = Canonical(PatientsOnVentilator)
* content[17].title = "Observations for Patients on a Ventilator"
* content[17].contentType = #application/fhir+xml

* content[18].id = "PatientDeaths"
* content[18].url = Canonical(PatientDeaths)
* content[18].title = "Patient Died"
* content[18].contentType = #application/fhir+xml

* content[19].id = "Remdesivir"
* content[19].url = Canonical(Remdesivir)
* content[19].title = "Remdesivir"
* content[19].contentType = #application/fhir+xml

* content[20].id = "SARSCoV2GeneticLabs"
* content[20].url = Canonical(SARSCoV2GeneticLabs)
* content[20].title = "SARSCoV2 Genetic Labs"
* content[20].contentType = #application/fhir+xml

* content[21].id = "SARSCoV2Labs"
* content[21].url = Canonical(SARSCoV2Labs)
* content[21].title = "SARSCoV2Labs"
* content[21].contentType = #application/fhir+xml

* content[22].id = "SuspectedCOVID19Diagnoses"
* content[22].url = Canonical(SuspectedCOVID19Diagnoses)
* content[22].title = "Suspected COVID-19 Diagnosis Values"
* content[22].contentType = #application/fhir+xml

* content[23].id = "SuspectedOrConfirmedCOVID19Diagnoses"
* content[23].url = Canonical(SuspectedOrConfirmedCOVID19Diagnoses)
* content[23].title = "Suspected Or Diagnosed COVID-19"
* content[23].contentType = #application/fhir+xml

* content[24].id = "VentilatorDevices"
* content[24].url = Canonical(VentilatorDevices)
* content[24].title = "Ventilator Devices"
* content[24].contentType = #application/fhir+xml

* content[25].id = "VentilatorObservations"
* content[25].url = Canonical(VentilatorObservations)
* content[25].title = "Ventilator Observations"
* content[25].contentType = #application/fhir+xml

* content[26].id = "VentilatorProcedures"
* content[26].url = Canonical(VentilatorProcedures)
* content[26].title = "Ventilator Procedures"
* content[26].contentType = #application/fhir+xml

* content[27].id = "VTEReports"
* content[27].url = Canonical(VTEReports)
* content[27].title = "Codes for reports about VTE Diagnosics"
* content[27].contentType = #application/fhir+xml

* content[28].id = "AllCOVID19RiskFactors"
* content[28].url = Canonical(AllCOVID19RiskFactors)
* content[28].title = "All COVID-19 Risk Factors"
* content[28].contentType = #application/fhir+xml

* content[29].id = "NeoplasticCOVID19RiskFactors"
* content[29].url = Canonical(NeoplasticCOVID19RiskFactors)
* content[29].title = "Neoplastic COVID-19 Risk Factors"
* content[29].contentType = #application/fhir+xml

* content[30].id = "COPDCOVID19RiskFactors"
* content[30].url = Canonical(COPDCOVID19RiskFactors)
* content[30].title = "COPD COVID-19 Risk Factors"
* content[30].contentType = #application/fhir+xml

* content[31].id = "TobaccoCOVID19RiskFactors"
* content[31].url = Canonical(TobaccoCOVID19RiskFactors)
* content[31].title = "Tobacco COVID-19 Risk Factors"
* content[31].contentType = #application/fhir+xml

* content[32].id = "HypertensionCOVID19RiskFactors"
* content[32].url = Canonical(HypertensionCOVID19RiskFactors)
* content[32].title = "Hypertension COVID-19 Risk Factors"
* content[32].contentType = #application/fhir+xml

* content[33].id = "CardiovascularCOVID19RiskFactors"
* content[33].url = Canonical(CardiovascularCOVID19RiskFactors)
* content[33].title = "Cardiovascular COVID-19 Risk Factors"
* content[33].contentType = #application/fhir+xml

* content[34].id = "ObesityCOVID19RiskFactors"
* content[34].url = Canonical(ObesityCOVID19RiskFactors)
* content[34].title = "Obesity COVID-19 Risk Factors"
* content[34].contentType = #application/fhir+xml

* content[35].id = "SickleCellCOVID19RiskFactors"
* content[35].url = Canonical(SickleCellCOVID19RiskFactors)
* content[35].title = "Sickle Cell COVID-19 Risk Factors"
* content[35].contentType = #application/fhir+xml

* content[36].id = "KidneyDiseaseCOVID19RiskFactors"
* content[36].url = Canonical(KidneyDiseaseCOVID19RiskFactors)
* content[36].title = "Kidney Disease COVID-19 Risk Factors"
* content[36].contentType = #application/fhir+xml

* content[37].id = "PregnancyCOVID19RiskFactors"
* content[37].url = Canonical(PregnancyCOVID19RiskFactors)
* content[37].title = "Pregnancy COVID-19 Risk Factors"
* content[37].contentType = #application/fhir+xml

* content[38].id = "DiabetesCOVID19RiskFactors"
* content[38].url = Canonical(DiabetesCOVID19RiskFactors)
* content[38].title = "Diabetes COVID-19 Risk Factors"
* content[38].contentType = #application/fhir+xml

* content[39].id = "IsolationPrecautions"
* content[39].url = Canonical(IsolationPrecautions)
* content[39].title = "COVID-19 Isolation Precautions"
* content[39].contentType = #application/fhir+xml

* content[40].id = "COVID19Complications"
* content[40].url = Canonical(COVID19Complications)
* content[40].title = "COVID-19 Complications"
* content[40].contentType = #application/fhir+xml


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/ComputableNHSNReporting.fsh

Instance: ComputableCDCPatientImpactAndHospitalCapacity
InstanceOf: PublicHealthMeasure
Title: "Computable CDC Patient Impact and Hospital Capacity"
Description: "This measure demonstrates automated reporting on bed availability and use at a facility location based on CDC/NHSN reporting requirements."
Usage: #example
* insert SanerDefinitionContent

* insert ComputableCDCPatientImpactAndHospitalCapacityText
* useContext.code = http://terminology.hl7.org/CodeSystem/usage-context-type#focus
* useContext.valueCodeableConcept = SCT#840539006 "COVID-19"
* description = """
    This measure demonstrates automated reporting on bed availability and use at a facility location based on CDC/NHSN reporting requirements.
    It is used to illustrate automation of measure reporting using the SANER Implementation guide.
"""
* definition = """
Ventilator: Any device used to support, assist or control respiration (inclusive of the weaning period) through the application of positive
pressure to the airway when delivered via an artificial airway, specifically an oral/nasal endotracheal or tracheostomy tube.
Note: Ventilation and lung expansion devices that deliver positive pressure to the airway (for example: CPAP, BiPAP, bi-level, IPPB and
PEEP) via non-invasive means (for example: nasal prongs, nasal mask, full face mask, total mask, etc.) are not considered ventilators
unless positive pressure is delivered via an artificial airway (oral/nasal endotracheal or tracheostomy tube).

Beds: Baby beds in mom's room count as 1 bed, even if there are multiple baby beds. Follow-up in progress if staffed is less than licensed.
Total includes all beds, even if with surge beds it exceeds licensed beds.

ICU beds: Include NICU
"""
* author.name = "Centers for Disease Control/National Healthcare Safety Network (CDC/NHSN)"  // Fully spelled out name (Acronym)
* author.telecom.system = #email
* author.telecom.value = "mailto:nhsn@cdc.gov"  // adding the url schema so that tooling won't be annoyed.
* insert DailyReporting
* name = "ComputableCDCPatientImpactAndHospitalCapacity"
* url = "http://hl7.org/fhir/uv/saner/Measure/ComputableCDCPatientImpactAndHospitalCapacity"
* title = "Patient Impact and Hospital Capacity"  // Official name of measure being represented as given by the author
* insert NHSNArtifacts
* library = Canonical(ComputableNHSNMeasureLibrary)

// COVID-19 Patients
* group[0].code.coding = MeasureGroupSystem#Encounters
* group[0].code.coding.display = "Encounters"
* group[0].code.text = "Hospital COVID-19 Patient Encounters Reporting"
 //* with group[0].extension[groupAtts] do
* group[0].extension[groupAtts].extension[scoring].valueCodeableConcept = http://hl7.org/fhir/uv/saner/CodeSystem/PublicHealthMeasureScoring#queue-length
* group[0].extension[groupAtts].extension[type].valueCodeableConcept = MTYPE#structure
* group[0].extension[groupAtts].extension[improvementNotation].valueCodeableConcept = MESIMP#decrease
 //** with extension[subject] do
* group[0].extension[groupAtts].extension[subject].valueCodeableConcept.coding[ResourceType] = RESTYPE#Encounter
* group[0].extension[groupAtts].extension[subject].valueCodeableConcept.coding[Snomed] = SCT#398284004
* group[0].extension[groupAtts].extension[subject].valueCodeableConcept.coding[Snomed].display = "Patient in room"
* group[0].extension[groupAtts].extension[subject].valueCodeableConcept.text = "Patient in room"
* group[0].extension[groupAtts].extension[rateAggregation].valueString = "point-in-time"
 //* with group[0].population[0] do
 //** with code do
* group[0].population[0].code.coding = MEASVALS#numC19Pats
* group[0].population[0].code.coding.display = "All COVID-19 Confirmed or Suspected Patients"
* group[0].population[0].code.coding[1] = MEASPOP#initial-population
* group[0].population[0].code.text = "Patients with suspected or confirmed COVID-19 in any location."
* group[0].population[0].description = """
Active encounters where the encounter diagnosis is suspected or confirmed COVID-19,  or a Condition of suspected or confirmed COVID-19 was created during that encounter.  This includes the patients with laboratory-confirmed
 or clinically diagnosed COVID-19.

Confirmed: A patient with a laboratory confirmed COVID-19 diagnosis

Suspected: A patient without a laboratory confirmed COVID-19 diagnosis who, in accordance with CDC’s Interim Public Health Guidance
for Evaluating Persons Under Investigation (PUIs), has signs and symptoms compatible with COVID-19 (most patients with confirmed
COVID-19 have developed fever and/or symptoms of acute respiratory illness, such as cough, shortness of breath or myalgia/fatigue)."""

* group[0].population[0].criteria.name = "NumC19Pats"  // Note: Follow PascalCase conventions for names
* group[0].population[0].criteria.description = """
This expression finds encounters that were active or finished in the reporting period, and their referenced Patient, Condition and Observation resources.
It filters these based on cases where Encounter reports a reason or condition in the SuspectedOrConfirmedCOVID19Diagnoses value set, or
where a positive lab test from the Covid19Labs valueset, or where the patient has any such associated Condition or Observation resources
in the prior two weeks.
"""
* group[0].population[0].criteria.language = #text/fhirpath
* group[0].population[0].criteria.expression =
  """findAll('Encounter',
        including('subject','condition','reasonReference'),
        with('status').equalTo('in-progress'|'finished'),
        with('date').within(%ReportingPeriod)
     ).onServers(%Base).
     where(
       iif(myMemberOf((Encounter.reasonCode | Condition.code), %SuspectedOrConfirmedCOVID19Diagnoses.url) |
           Observation.where((myMemberOf(code, %Covid19Labs.url) and myMemberOf(value, %PositiveResults.url))
         ), true,
         iif(
           Patient.distinct()
              .whereExists('Observation',
                for('patient', $this),
                with('status').equalTo(
                    'registered' | 'preliminary' | 'final' | 'amended' | 'corrected'),
                with('date').greaterThan(%ReportingPeriod.start - 14 'days'),
                with('code').in(%Covid19Labs),
                with('value-concept).in(%PositiveResults)
           ).onServers(%Base), true,
           Patient.distinct()
              .whereExists('Condition',
                for('patient', $this),
                with('verification-status').notEqualTo('refuted'|'entered-in-error').
                with('date').greaterThan(%ReportingPeriod.start - 14 'days'),
                with('code').in(%SuspectedOrConfirmedCOVID19Diagnoses.url)
           ).exists()
         )
      )
    )
    .distinct()
    .aggregate(
      iif($total.subject contains $this.subject,
          $total, $total | $this
      )
    )"""

* group[0].population[0].criteria.extension[MeasureAlternateCriteria].valueExpression.name = "NumC19Pats"
* group[0].population[0].criteria.extension[MeasureAlternateCriteria].valueExpression.language = #text/cql
* group[0].population[0].criteria.extension[MeasureAlternateCriteria].valueExpression.description = "Alternate definition for Active encounters using CQL"
* group[0].population[0].criteria.extension[MeasureAlternateCriteria].valueExpression.expression = "NumberOfCOVID19Patients"

// Technically, this should be done by stratifier.component
* group[0].stratifier[0].code.text = "By Location and Ventilator Status"
* group[0].stratifier[0].description = "Stratifies the population by Location (inpatient vs ED/Overflow/Other) and Ventilator Status (Ventilated vs Not Ventilated)"
* group[0].stratifier[0].criteria.language = #text/fhirpath
* group[0].stratifier[0].criteria.description = """
   For each Encounter,
     if the encounter subject has been ventilated
       if the Encounter location is an inpatient loocation,
         return InpVentilated
       Otherwise
         return OFVentilated
     else
       if the Encounter location is an inpatient loocation,
         return InpNotVentilated
       Otherwise
         return OFNotVentilated
     end if
 """
* group[0].stratifier[0].criteria.expression = """
      iif(%NumVentUse.id contains Encounter.subject,
          iif(myMemberOf(Encounter.location.location.resolve().type, %InpatientLocations.url), 'InpVentilated', 'OFVentilated'),
          iif(myMemberOf(Encounter.location.location.resolve().type, %InpatientLocations.url), 'InpNotVentilated', 'OFNotVentilated')
      )
 """
// Hospital Acquired COVID-19
* group[1].code.coding = MeasureGroupSystem#AcquiredCovid
* group[1].code.coding.display = "Acquired COVID-19 in Hospital"
* group[1].code.text = "Hospital Onset COVID-19 Patient Encounters Reporting"
* group[1].extension[groupAtts].extension[scoring].valueCodeableConcept = http://hl7.org/fhir/uv/saner/CodeSystem/PublicHealthMeasureScoring#event-growth
* group[1].extension[groupAtts].extension[type].valueCodeableConcept = MTYPE#outcome
* group[1].extension[groupAtts].extension[improvementNotation].valueCodeableConcept = MESIMP#decrease
* group[1].extension[groupAtts].extension[subject].valueCodeableConcept.coding[ResourceType] = RESTYPE#Patient
* group[1].extension[groupAtts].extension[subject].valueCodeableConcept.coding[Snomed] = #"116154003|Patient|: 20401003|With| = (840539006|Disease caused by 2019 novel coronavirus|: 246512002|Timing| = 277056009|Hospital Acquired|)"
* group[1].extension[groupAtts].extension[subject].valueCodeableConcept.coding[Snomed].display = "Patient where With = Disease caused by 2019 novel coronavirus where Timing = Hospital acquired"
* group[1].extension[groupAtts].extension[subject].valueCodeableConcept.text = "Hospital Acquired COVID-19"
* group[1].extension[groupAtts].extension[rateAggregation].valueString = "cumulative"

* group[1].population[0].code.coding = MEASVALS#numC19HospPats
* group[1].population[0].code.coding.display = "Hospitalized COVID-19 Patients"
* group[1].population[0].code.coding[1] = MEASPOP#initial-population
* group[1].population[0].code.text = "Patients with suspected or confirmed COVID-19 in an inpatient location"
* group[1].population[0].description = "Patients with suspected or confirmed COVID-19 in an inpatient location"
* group[1].population[0].criteria.name = "NumC19HospPats"
* group[1].population[0].criteria.description = "Uses the value of NumC19Pat as the initial population"
* group[1].population[0].criteria.language = #text/fhirpath
* group[1].population[0].criteria.expression = """
 %NumC19Pats.entry.resource.location.location.resolve().where(myMemberOf(type, %InpatientLocations.url))
 """

 //* with group[1].population[1].code do
* group[1].population[1].code.coding = MEASVALS#numC19HOPats
* group[1].population[1].code.coding.display = "Hospital Onset COVID-19 Patients"
* group[1].population[1].code.coding[1] = MEASPOP#numerator
* group[1].population[1].code.text = "Hospital Onset COVID-19 Patients"
* group[1].population[1].description = "Hospital Onset COVID-19 Patients"
 // This expression will be reused to compute the value for the CumC19HOPats
 // population so it must have a name.
* group[1].population[1].criteria.name = "NumC19HOPats"
* group[1].population[1].criteria.description = """
Filters the initial population by ruling out those patients whose first suspected or
confirmed diagnosis or lab result appears less than 14 days from admission."""
* group[1].population[1].criteria.language = #text/fhirpath
* group[1].population[1].criteria.expression = """
    Encounter.where(
      iif(dateAdd(period.start,14 'days') > today(),
        false,
        iif(
          whereExists('Condition',
            with('status').notEqualTo('refuted'|'entered-in-error'),
            with('patient').equalTo($this.subject),
            with('verificationStatus').notEqualTo('refuted'|'entered-in-error'),
            with('date').greaterThan($this.period.start - 14 'days'),
            with('date').lessThanOrEqualTo($this.period.start - 14 'days'),
            with('code').in(%SuspectedOrConfirmedCOVID19Diagnoses.url)
          ).onServers(%Base),
          false,
          whereExists('Observation',
            with('status').equalTo('registered'|'preliminary'|'final'|'amended'|'corrected'),
            with('patient').equalTo($this.subject),
            with('date').greaterThan($this.period.start - 14 'days'),
            with('date').lessThanOrEqualTo($this.period.start - 14 'days'),
            with('code').in(%Covid19Labs.url)
            with('value-concept').in(%PositiveResults.url)
          ).onServers(%Base).not()
        )
      )
    ).select(patient).resolve().trace('patients', id)
 """


 //* with group[1].population[2].code do
* group[1].population[2].code.coding = MEASVALS#cumC19HOPats
* group[1].population[2].code.coding.display = "Cumulative Hospital Onset COVID-19 Patients"
* group[1].population[2].code.coding[1] = MEASPOP#denominator
* group[1].population[2].code.text = "Cumulative Hospital Onset COVID-19 Patients"
* group[1].population[2].description = "Cumulative Hospital Onset COVID-19 Patients"
* group[1].population[2].criteria.name = "CumC19HOPats"
* group[1].population[2].criteria.description = """
Computes the cumulative total from the prior measure report and the number of new
 infections detected in the current reporting period."""
* group[1].population[2].criteria.language = #text/fhirpath
* group[1].population[2].criteria.expression = """
    iif(%PriorReport.empty(), 0, %PriorReport.group[1].population[2].count + %NumC19HOPats.total)
"""

 //* with group[1].stratifier[0] do
* group[1].stratifier[0].code.text = "By Age Group"
* group[1].stratifier[0].description = "Stratifies the population by Age Group"
* group[1].stratifier[0].criteria.language = #text/fhirpath
* group[1].stratifier[0].criteria.description = """If birth date + N years < today, return the code for the patient < N Years of age for values
 of N from 20, 30, 40, 50, 60, 70 and 80, otherise return the code for over 80"""
* group[1].stratifier[0].criteria.expression = """
    Patient.select(
      iif(dateAdd(birthDate, 20 'years') < today(), 'P0Y--P20Y',
        iif(dateAdd(birthDate, 30 'years') < today(), 'P20Y--P30Y',
          iif(dateAdd(birthDate, 40 'years') < today(), 'P30Y--P40Y',
            iif(dateAdd(birthDate, 50 'years') < today(), 'P40Y--P50Y',
              iif(dateAdd(birthDate, 60 'years') < today(), 'P50Y--P60Y',
                iif(dateAdd(birthDate, 70 'years') < today(), 'P60Y--P70Y',
                  iif(dateAdd(birthDate, 80 'years') < today(), 'P70Y--P80Y', 'P80Y-P9999Y')
                )
              )
            )
          )
        )
      )
    )
 """

 //* with group[1].stratifier[1] do
* group[1].stratifier[1].code.text = "By Gender"
* group[1].stratifier[1].description = "Stratifies the population by Gender"
* group[1].stratifier[1].criteria.language = #text/fhirpath
* group[1].stratifier[1].criteria.description = "Return the patient gender"
* group[1].stratifier[1].criteria.expression = "Patient.gender"

 //* with group[1].stratifier[2] do
* group[1].stratifier[2].code.text = "By Ethnicity"
* group[1].stratifier[2].description = "Stratifies the population by Ethnicity"
* group[1].stratifier[2].criteria.language = #text/fhirpath
* group[1].stratifier[2].criteria.description = "Return the patient enthnicity code"
* group[1].stratifier[2].criteria.expression = """
    Patient.extension('http://hl7.org/fhir/us/core/StructureDefinition/us-ethnicity-category').extension('ombCategory').valueCoding.code
    """

 //* with group[1].stratifier[3] do
* group[1].stratifier[3].code.text = "By Race"
* group[1].stratifier[3].description = "Stratifies the population by Race"
* group[1].stratifier[3].criteria.language = #text/fhirpath
* group[1].stratifier[3].criteria.description = "Return the patient race code"
* group[1].stratifier[3].criteria.expression = """
    Patient
    .extension('http://hl7.org/fhir/us/core/StructureDefinition/us-core-race')
    .extension('ombCategory')
    .select(
      iif(valueCoding.count() > 1,
         'Mixed',
         iif(valueCoding.system = 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor',
             'Unknown',
             valueCoding.code
         )
      )
    )
    """

// COVID-19 Deaths
 //* with group[2].code do
* group[2].code.coding = MeasureGroupSystem#CovidDeaths
* group[2].code.coding.display = "COVID-19 Deaths"
* group[2].code.text =  "COVID-19 Patient Death Reporting"
 //* with group[2].extension[groupAtts] do
* group[2].extension[groupAtts].extension[scoring].valueCodeableConcept = http://hl7.org/fhir/uv/saner/CodeSystem/PublicHealthMeasureScoring#event-growth
* group[2].extension[groupAtts].extension[type].valueCodeableConcept = MTYPE#outcome
* group[2].extension[groupAtts].extension[improvementNotation].valueCodeableConcept = MESIMP#decrease
 //** with extension[subject] do
* group[2].extension[groupAtts].extension[subject].valueCodeableConcept.coding[ResourceType] = RESTYPE#Patient
* group[2].extension[groupAtts].extension[subject].valueCodeableConcept.coding[Snomed] = SCT#419620001 "Death"
* group[2].extension[groupAtts].extension[subject].valueCodeableConcept.coding[Snomed].display = "Death"
* group[2].extension[groupAtts].extension[subject].valueCodeableConcept.text = "Patients with conformed or suspected COVID-19 who have died"
* group[2].extension[groupAtts].extension[rateAggregation].valueString = "cumulative"

 //* with group[2].population[0].code do
* group[2].population[0].code.coding = MEASVALS#numC19Pats
* group[2].population[0].code.coding.display = "All COVID-19 Confirmed or Suspected Patients"
* group[2].population[0].code.coding[1] = MEASPOP#initial-population
* group[2].population[0].code.text = "Patients with suspected or confirmed COVID-19 in any location."
* group[2].population[0].description = "Patients with suspected or confirmed COVID-19 in any location."
* group[2].population[0].criteria.description = "COVID-19 Patients in an inpatient setting"
 // This criteria does not have a name because it duplicates a previously computed criteria
* group[2].population[0].criteria.language = #text/fhirpath
* group[2].population[0].criteria.expression = "%NumC19Pats.entry.resource"

 //* with group[2].population[1].code do
* group[2].population[1].code.coding = MEASVALS#numC19Died
* group[2].population[1].code.coding.display = "COVID-19 Patient Deaths"
* group[2].population[1].code.coding[1] = MEASPOP#numerator
* group[2].population[1].code.text = "Patients with suspected or confirmed COVID-19 who died in the hospital, ED, or any overflow location"
* group[2].population[1].description = "Patients with suspected or confirmed COVID-19 who died in the hospital, ED, or any overflow location"
* group[2].population[1].criteria.name = "NumC19Died"
* group[2].population[1].criteria.description = """
Filters the initial population by selecting those who have died."""
* group[2].population[1].criteria.language = #text/fhirpath
* group[2].population[1].criteria.expression = """
    Encounter.where(
      iif(
        hospitalization.where(
          myMemberOf(dispositionCode, %PatientExpired)
        ),
        true,
        subject.resolve().where(deceasedBoolean = true | deceasedDateTime.exists())
      )
    ).select(subject).resolve()
 """

 //* with group[2].population[2].code do
* group[2].population[2].code.coding = MEASVALS#cumC19Died
* group[2].population[2].code.coding.display = "Cumulative COVID-19 Patient Deaths"
* group[2].population[2].code.coding[1] = MEASPOP#denominator
* group[2].population[2].code.text = "Cumulative total of Patients with suspected or confirmed COVID-19 who died in the hospital, ED, or any overflow location"
* group[2].population[2].description = "Cumulative total of Patients with suspected or confirmed COVID-19 who died in the hospital, ED, or any overflow location"
* group[2].population[2].criteria.name = "CumC19Died"
* group[2].population[2].criteria.description = """
Computes the cumulative total from the prior measure report and the number of new deaths in the current reporting period."""
* group[2].population[2].criteria.language = #text/fhirpath
* group[2].population[2].criteria.expression = """
    iif(%PriorReport.empty(), 0, %PriorReport.group[2].population[2].count + %NumC29Died.count())"""

 //* with group[2].stratifier[0] do
* group[2].stratifier[0].code.text = "By Age Group"
* group[2].stratifier[0].description = "Stratifies the population by Age Group"
* group[2].stratifier[0].criteria.language = #text/fhirpath
* group[2].stratifier[0].criteria.description = """If birth date + N years < today, return the code for the patient < N Years of age for values
 of N from 20, 30, 40, 50, 60, 70 and 80, otherise return the code for over 80"""
* group[2].stratifier[0].criteria.expression = """
    Patient.select(
      iif(dateAdd(birthDate, 20 'years') < today(), 'P0Y--P20Y',
        iif(dateAdd(birthDate, 30 'years') < today(), 'P20Y--P30Y',
          iif(dateAdd(birthDate, 40 'years') < today(), 'P30Y--P40Y',
            iif(dateAdd(birthDate, 50 'years') < today(), 'P40Y--P50Y',
              iif(dateAdd(birthDate, 60 'years') < today(), 'P50Y--P60Y',
                iif(dateAdd(birthDate, 70 'years') < today(), 'P60Y--P70Y',
                  iif(dateAdd(birthDate, 80 'years') < today(), 'P70Y--P80Y', 'P80Y-P9999Y')
                )
              )
            )
          )
        )
      )
    )
 """

 //* with group[2].stratifier[1] do
* group[2].stratifier[1].code.text = "By Gender"
* group[2].stratifier[1].description = "Stratifies the population by Gender"
* group[2].stratifier[1].criteria.language = #text/fhirpath
* group[2].stratifier[1].criteria.description = "Return the patient gender"
* group[2].stratifier[1].criteria.expression = "Patient.gender"

 //* with group[2].stratifier[2] do
* group[2].stratifier[2].code.text = "By Ethnicity"
* group[2].stratifier[2].description = "Stratifies the population by Ethnicity"
* group[2].stratifier[2].criteria.language = #text/fhirpath
* group[2].stratifier[2].criteria.description = "Return the patient ethnicity code"
* group[2].stratifier[2].criteria.expression = """
    Patient.extension('http://hl7.org/fhir/us/core/StructureDefinition/us-ethnicity-category').extension('ombCategory').valueCoding.code
    """

 //* with group[2].stratifier[3] do
* group[2].stratifier[3].code.text = "By Race"
* group[2].stratifier[3].description = "Stratifies the population by Race"
* group[2].stratifier[3].criteria.language = #text/fhirpath
* group[2].stratifier[3].criteria.description = "Return the patient race code"
* group[2].stratifier[3].criteria.expression = """
    Patient
    .extension('http://hl7.org/fhir/us/core/StructureDefinition/us-core-race')
    .extension('ombCategory')
    .select(
      iif(valueCoding.code contains '1992-5', 'A', ' ') +
      iif(valueCoding.code contains '2054-5', 'B', ' ') +
      iif(valueCoding.code contains '2076-8', 'H', ' ') +
      iif(valueCoding.code contains '2028-9', 'S', ' ') +
      iif(valueCoding.code contains '2106-3', 'W', ' ')
    )
    """

// Ventiltors
* group[3].extension[MeasureExpectation].valueCode = http://terminology.hl7.org/CodeSystem/conformance-expectation#SHOULD
* group[3].code.coding = MeasureGroupSystem#Ventilators
* group[3].code.coding.display = "Ventilators"
* group[3].code.text = "Ventilator Reporting"
* group[3].extension[groupAtts].extension[scoring].valueCodeableConcept = http://hl7.org/fhir/uv/saner/CodeSystem/PublicHealthMeasureScoring#capacity
* group[3].extension[groupAtts].extension[type].valueCodeableConcept = MTYPE#structure
* group[3].extension[groupAtts].extension[improvementNotation].valueCodeableConcept = MESIMP#decrease
* group[3].extension[groupAtts].extension[subject].valueCodeableConcept.coding[ResourceType] = RESTYPE#Device
* group[3].extension[groupAtts].extension[subject].valueCodeableConcept.coding[Snomed] = SCT#257463002 "Ventilator Outlet"
* group[3].extension[groupAtts].extension[subject].valueCodeableConcept.text = "Ventilator capacity"
* group[3].extension[groupAtts].extension[rateAggregation].valueString = "point-in-time"

* group[3].population[0].code.coding[0] = MEASVALS#numVent "Mechanical Ventilators"
* group[3].population[0].code.coding[1] = MEASPOP#denominator
* group[3].population[0].code.text = "Total number of ventilators"
* group[3].population[0].description = "Count of all ventilators that can support patient care, whether or not they are presently in use."
* group[3].population[0].criteria.name = "NumVent"
* group[3].population[0].criteria.description = """
Computes the total number of ventilators from the previously reported MeasureReport"""
* group[3].population[0].criteria.language = #text/fhirpath
* group[3].population[0].criteria.expression = "iif(trace('PriorReport exists:', %PriorReport.exists()), %PriorReport.group[3].population[0].count, 0)"

* group[3].population[1].code.coding[0] = MEASVALS#numVentUse "Mechanical Ventilators in Use"
* group[3].population[1].code.coding[1] = MEASPOP#numerator
* group[3].population[1].code.text = "Total number of ventilators in use"
* group[3].population[1].description = "Count of all ventilators in use."
* group[3].population[1].criteria.name = "NumVentUse"
* group[3].population[1].criteria.description = """
Identifies the number of ventilators in use by counting Patient with an Observation
 or Procedure resource from an appropriate value set indicating ventilator use."""
* group[3].population[1].criteria.language = #text/fhirpath
* group[3].population[1].criteria.expression = """
       findAll('Encounter',
        including('subject'),
        with('status').equalTo('in-progress'|'finished'),
        with('date').within(%ReportingPeriod)
       ).onServers(%Base)
       .select(entry.resource as Patient)
       .where(
         iif(
           whereExists('Observation',
             with('status').equalTo('registered'|'preliminary'|'final'|'amended'|'corrected'),
             with('patient').equalTo($this.id),
             with('verificationStatus').notEqualTo('refuted'|'entered-in-error'),
             with('date').within(%ReportingPeriod),
             with('code').in(%VentilatorObservations.url)
           ).onServers(%Base)
           true,
           whereExists('Procedure',
             with('status').equalTo('in-progress'|'completed'),
             with('patient').equalTo($this.id),
             with('date').within(%ReportingPeriod),
             with('code').in(%VentilatorProcedures.url)
           ).onServers(%Base)
         )
       )
 """

* group[3].population[2].code.coding[0] = MEASVALS#numVentAvail "Mechanical Ventilators Available"
* group[3].population[2].code.coding[1] = http://hl7.org/fhir/uv/saner/CodeSystem/MeasurePopulationSystem#numerator-complement
* group[3].population[2].code.text = "Total number of ventilators not presently in use."
* group[3].population[2].description = "Count of all ventilators not presently in use."
* group[3].population[2].criteria.name = "NumVentAvail"
* group[3].population[2].criteria.description = """
Computes the number of ventilators available by substracting the number of ventilators in use
 determined by population 1 from thee total number of ventilators given in population 0
 """
* group[3].population[2].criteria.language = #text/fhirpath
* group[3].population[2].criteria.expression = "%NumVent - %NumVentUse.total.toInteger()"

// Beds
* group[4].code.coding = MeasureGroupSystem#Beds
* group[4].code.coding.display = "Beds"
* group[4].code.text = "Bed Reporting"
* group[4].extension[groupAtts].extension[scoring].valueCodeableConcept = http://hl7.org/fhir/uv/saner/CodeSystem/PublicHealthMeasureScoring#capacity
* group[4].extension[groupAtts].extension[type].valueCodeableConcept = MTYPE#structure
* group[4].extension[groupAtts].extension[improvementNotation].valueCodeableConcept = MESIMP#decrease
* group[4].extension[groupAtts].extension[subject].valueCodeableConcept.coding[ResourceType] = RESTYPE#Device
* group[4].extension[groupAtts].extension[subject].valueCodeableConcept.coding[Snomed] = SCT#91537007 "Hospital Bed"
* group[4].extension[groupAtts].extension[subject].valueCodeableConcept.text = "Bed capacity"
* group[4].extension[groupAtts].extension[rateAggregation].valueString = "point-in-time"

* group[4].population[0].code.coding[0] = MEASVALS#numTotBeds "All Hospital Beds"
* group[4].population[0].code.coding[1] = MEASPOP#denominator
* group[4].population[0].code.text = "Total number of beds"
* group[4].population[0].description = """
 Total number of all Inpatient and outpatient beds, including all staffed, ICU,
 licensed, and overflow (surge) beds used for inpatients or outpatients"""
* group[4].population[0].criteria.name = "NumTotBeds"
* group[4].population[0].criteria.description = """
Computes the total number of beds from the previously reported MeasureReport"""
* group[4].population[0].criteria.language = #text/fhirpath
* group[4].population[0].criteria.expression = "iif(%PriorReport.exists(),%PriorReport.group[3].population[0].count,0)"


* group[4].population[1].code.coding[0] = MEASVALS#numTotBedsOcc "Hospital Beds Occupied"
* group[4].population[1].code.coding[1] = MEASPOP#numerator
* group[4].population[1].code.text = "Total number of beds in use"
* group[4].population[1].description = "Total number of all Inpatient and outpatient beds that are occupied"
* group[4].population[1].criteria.name = "NumTotBedsOcc"
* group[4].population[1].criteria.description = """
 Identifies the number of beds in use by counting the most recent Encounter for each patient where the encounter
 was in-progress or finished within the period.
   """
* group[4].population[1].criteria.language = #text/fhirpath
* group[4].population[1].criteria.expression = """
       findAll('Encounter',
         with('status').equalTo('in-progress'),
         with('date').within(%ReportingPeriod)
       ).onServers(%Base)
       .aggregate(
          iif($total.select(location[0]).location contains $this.location.location.first(),
              $total,
              $total | $this
          )
       )
 """

* group[4].population[2].code.coding[0] = MEASVALS#numTotBedsAvail "Hospital Beds Available"
* group[4].population[2].code.coding[1] = http://hl7.org/fhir/uv/saner/CodeSystem/MeasurePopulationSystem#numerator-complement
* group[4].population[2].code.text = "Total number of hospital beds available"
* group[4].population[2].description = "Total number of all hospital inpatient and outpatient beds that are available"
* group[4].population[2].criteria.name = "NumTotBedsAvail"
* group[4].population[2].criteria.description = """
Computes the number of beds  available by substracting the number of beds in use
 determined by population 1 from the total number of beds given in population 0
 """
* group[4].population[2].criteria.language = #text/fhirpath
* group[4].population[2].criteria.expression = "%NumTotBeds - %NumTotBedsOcc.count()"

* group[4].stratifier.code.text = "By Type of Location"
* group[4].stratifier.description = "Inpatient Non-ICU, Inpatient ICU, Other"
* group[4].stratifier.criteria.description = """
 Determines the location of the encounter based on the membership
 of location.type in the InpatientLocations and ICULocations ValueSet resources.
 When location.type is assigned to any other value, it is reported to be Other
 """
* group[4].stratifier.criteria.language = #text/fhirpath
* group[4].stratifier.criteria.expression = """
    Encounter.location.location.resolve()
    .iif(myMemberOf(type, %InpatientLocations.url),
        iif (myMemberOf(type, %ICULocations.url),
            'Inpatient ICU',
            'Inpatient Non-ICU'
        ),
        'Other'
    )
"""


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/ConceptMapHAVE.fsh

Instance:  HAvBED2toFHIR
Title: "HAvBED2 to FHIR Concept Map"
InstanceOf: http://hl7.org/fhir/StructureDefinition/ConceptMap
Description: "This Concept Map provides mappings from terms used in the HAvBED2 specification to HL7 FHIR"
* insert SanerDefinitionContent
* name = "HAvBED2toFHIR"
* title = "HAvBED2 to FHIR Concept Map"
* description = "This Concept Map provides mappings from terms used in the HAvBED2 specification to HL7 FHIR"
* experimental = true
* date = "2020-03-24"
* sourceUri = "https://archive.ahrq.gov/prep/havbed2/"
* group[0].target = "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
* group[0].element[0].code = #AdultICU
* group[0].element[0].display = "Adult ICU bed type"
* group[0].element[0].target.code = #ICU
* group[0].element[0].target.equivalence = #equivalent
* group[0].element[0].target.comment = "These can support critically ill or injured patients, including ventilator support This category includes all major subtypes of ICU beds, including neurological, cardiac, trauma, or medical, with the exception that this category does not include burn ICU beds"
* group[0].element[1].code = #PediatricICU
* group[0].element[1].display = "Pediatric ICU beds."
* group[0].element[1].target.code = #PEDICU
* group[0].element[1].target.equivalence = #equivalent
* group[0].element[1].target.comment = "This is similar to adult ICU beds, but for patients 17-years-old and younger."
* group[0].element[2].code = #NeonatalICU
* group[0].element[2].display = "Neonatal ICU beds"
* group[0].element[2].target.code = #PEDNICU
* group[0].element[2].target.equivalence = #equivalent
* group[0].element[2].target.comment = "Neonatal ICU beds"
* group[0].element[3].code = #ED
* group[0].element[3].display = "Emergency Department beds used for acute care"
* group[0].element[3].target.code = #ER
* group[0].element[3].target.equivalence = #equivalent
* group[0].element[3].target.comment = "Emergency Department beds used for acute care"
* group[0].element[4].code = #MedicalSurgical
* group[0].element[4].display = "Medical-surgical beds"
* group[0].element[4].target.code = #HU
* group[0].element[4].target.equivalence = #equivalent
* group[0].element[4].target.comment = "These are also thought of as ward beds. These beds may or may not include cardiac telemetry capability"
* group[0].element[5].code = #RehabLongTermCare
* group[0].element[5].display = "Rehabilitation/Long term care beds"
* group[0].element[5].target.code = #RHU
* group[0].element[5].target.equivalence = #equivalent
* group[0].element[5].target.comment = "Beds designated as long term care rehabilitation. These do not include floor beds"
* group[0].element[6].code = #Pediatrics
* group[0].element[6].display = "Pediatrics beds."
* group[0].element[6].target.code = #PEDU
* group[0].element[6].target.equivalence = #equivalent
* group[0].element[6].target.comment = "These are ward medical/surgical beds for patients 17-years-old and younger"
* group[0].element[7].code = #Psychiatric
* group[0].element[7].display = "Ward beds on a closed/locked psychiatric unit or ward beds where a patient will be staffed by an attendant."
* group[0].element[7].target.code = #PHU
* group[0].element[7].target.equivalence = #equivalent
* group[0].element[7].target.comment = "Ward beds on a closed/locked psychiatric unit or ward beds where a patient will be staffed by an attendant."
* group[0].element[8].code = #Burn
* group[0].element[8].display = "Burn beds"
* group[0].element[8].target.equivalence = #unmatched
* group[0].element[9].code = #NurseryBeds
* group[0].element[9].display = "Neonatal or newborn care beds including all bed types other than Neonatal ICU"
* group[0].element[9].target.equivalence = #unmatched
* group[0].element[10].code = #OperatingRooms
* group[0].element[10].display = "Operating rooms which are equipped, staffed and could be made available for patient care in a short period of time"
* group[0].element[10].target.equivalence = #unmatched
* group[0].element[11].code = #NegativeFlowIsolation
* group[0].element[11].display = "Negative airflow isolation beds."
* group[0].element[11].target.equivalence = #unmatched
* group[0].element[12].code = #OtherIsolation
* group[0].element[12].display = "Isolation beds."
* group[0].element[12].target.equivalence = #unmatched
* group[0].element[13].code = #NONISO
* group[0].element[13].display = "Non-Isolation beds."
* group[0].element[13].target.equivalence = #unmatched


---

File: repos/HL7_SLASH_fhir-saner/input/fsh/EnvironmentalEvent.fsh

ValueSet: EventContext
Title: "Event Context"
Description: "This Value Set enables classification of environmental events for categorizing measures."
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* http://snomed.info/sct#82145005     "Avalanche"
* http://snomed.info/sct#48071004     "Cyclone"
* http://snomed.info/sct#8766005      "Earthquake"
* http://snomed.info/sct#255710008    "Environmental stimuli"
* http://snomed.info/sct#20936008     "Fire storm"
* http://snomed.info/sct#111056004    "Flood"
* http://snomed.info/sct#256236005    "Fog"
* http://snomed.info/sct#49061008     "Landslide"
* http://snomed.info/sct#5193003      "Lightning"
* http://snomed.info/sct#102410009    "Pollution"
* http://snomed.info/sct#257451007    "Running water"
* http://snomed.info/sct#59262002     "Snowstorm"
* http://snomed.info/sct#257494002    "Thunder"
* http://snomed.info/sct#19224001     "Tidal wave"
* http://snomed.info/sct#24454008     "Torrential rain"
* http://snomed.info/sct#90978007     "Volcanic eruption"
* http://snomed.info/sct#90569008     "Wind"



---

File: repos/HL7_SLASH_fhir-saner/input/images-source/ActorsAndTransactions.plantuml

@startuml
skinparam FolderBorderColor white
skinparam FolderFontColor white
skinparam Shadowing false
folder Actors {
agent "Measure Source" as MeasureSource
agent "Measure Consumer" as MeasureConsumer
agent "Measure Definition Source" as MeasureDefinitionSource
agent "Measure Definition Consumer" as MeasureDefinitionConsumer
agent "Data Source" as DataSource
MeasureSource -- MeasureConsumer : "Query Measure [PULL-TX] ↑\nProduce Measure [PUSH-TX] ↓\nCompute Measure [COMPUTE-MX] ↕"
MeasureConsumer -- MeasureConsumer : "Communicate Results [REPORT-TX] ↕"
MeasureDefinitionSource -- MeasureDefinitionConsumer : "Query Measure Definition [PULL-MX] ↑"
MeasureComputer -- MeasureComputer : "Compute Measure [COMPUTE-MX] ↕"
MeasureComputer -- DataSource : "Compute Measure [COMPUTE-MX] ↓"
}
rectangle "Measure Intermediary" as MeasureIntermediary { 
agent "Measure Source" as MeasureSourced3e582
agent "Measure Consumer" as MeasureConsumerd3e582
}
rectangle "Measure Computer" as MeasureComputer { 
agent "Measure Source" as MeasureSourced3e668
agent "Measure Definition Consumer" as MeasureDefinitionConsumerd3e668
}
MeasureIntermediary -[hidden]- MeasureComputer
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/ActorsMultilevelReporting.plantuml

@startuml
title Intermediaries enable multi-level reporting
rectangle "Hospital EHR System A" as Hospital1 {
agent "Measure Source" as MeasureSource1
agent "Measure Consumer" as MeasureConsumer1
}

rectangle "Hospital EHR System B" as Hospital2 {
agent "Measure Source" as MeasureSource2
agent "Measure Consumer" as MeasureConsumer2
}

rectangle "Alternate Data Sources" as MiscData {
agent "CSV" as MiscData1
agent "XML" as MiscData2
agent "JSON" as MiscData3
agent "BulkFHIR" as MiscData4
}

rectangle "Intermediary" as HospitalGroup1 {
agent "Transform Process" as TransformProcess1
agent "Measure Source\n(FHIR Server)" as MeasureIntermediary1
agent "Measure Consumer" as MeasureIntermediaryConsumer1
}

rectangle "Regional Public Health Authority" as PublicHealth1 {
agent "Transform Process" as TransformProcess2
agent "Measure Source\n(FHIR Server)" as MeasureIntermediary2
agent "Measure Consumer" as MeasureIntermediaryConsumer2
}

rectangle "National Public Health Authority" as NationalAgency1 {
agent "Transform Process" as TransformProcess3
agent "Measure Source\n(FHIR Server)" as MeasureIntermediary3
agent "Measure Consumer" as MeasureIntermediaryConsumer3
}


MeasureSource1 <-- MeasureConsumer1 : Pull
MeasureSource2 <-- MeasureConsumer2 : Pull

MiscData1 --> TransformProcess1 : Push
MiscData2 <-- TransformProcess1 : Pull
MiscData3 <-- TransformProcess2: Pull
MiscData4 --> TransformProcess3: Push

MeasureSource1 --> TransformProcess1 : Push with Dump
MeasureSource2 <-- TransformProcess1 : Pull with Dump
TransformProcess1 --> MeasureIntermediary1 : Push
MeasureIntermediary1 <-- MeasureIntermediaryConsumer1 : Pull

TransformProcess2 -->  MeasureIntermediary1: Pull
TransformProcess2 --> MeasureIntermediary2 : Push
MeasureIntermediary2 <-- MeasureIntermediaryConsumer2 : Pull

TransformProcess3 -->  MeasureIntermediary2: Pull
TransformProcess3 --> MeasureIntermediary3 : Push
MeasureIntermediary3 <-- MeasureIntermediaryConsumer3 : Pull

@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/architecture.plantuml

@startuml
agent "Measure Source"
agent "Measure Consumer"
storage "External Storage"
agent "EHR System"
agent "Interface Engine"
database "System Database"
agent "Bed Management"
agent "Central Monitoring"
agent "ED System"
agent "Equipment Tracking"
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/Bridge.plantuml

@startuml
title Bridging between Push and Pull with a FHIR Server
rectangle "Hospital EHR System" as Hospital {
agent "Measure Source" as MeasureSource
}
rectangle Bridge {
agent "Measure Intermediary" as MeasureIntermediary
}
rectangle "Public Health Agency" as Agency {
agent "Measure Consumer\n(FHIR Server)" as MeasureConsumer
}


MeasureSource -> MeasureIntermediary : Push
MeasureIntermediary -> MeasureConsumer : Pull


@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/ConceptualModel.plantuml

@startuml
agent "Measure Report" as MeasureReport
agent Measure
agent Group
agent "Countable Entity" as CountableEntity

MeasureReport -> Measure : Is Defined By
MeasureReport ..> CountableEntity : Assesses
Measure  o-> Group : Counts

Group --> CountableEntity : Has Member
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/FHIRServer.plantuml

@startuml
rectangle "FHIR Server (Intermediary)" as MeasureIntermediary {
agent "Measure Source" as MeasureSource1
agent "Measure Consumer" as MeasureConsumer1
MeasureSource1 == MeasureConsumer1
}

rectangle "Hospital EHR System" {
agent "Measure Source" as MeasureSource
MeasureSource -> MeasureConsumer1 : Push with API
}

rectangle "Public Health Agency" {
agent "Measure Consumer" as MeasureConsumer
MeasureConsumer -> MeasureSource1 : Pull with API
}

@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/HospitalPushToExternalStorageAdaptedToPullAPI-0.plantuml

@startuml
title Hospital Does most of the Work
rectangle "Hospital EHR System" as Hospital {
agent "Measure Source" as MeasureSource
storage "External Storage" as ExternalStorage
agent "Measure Intermediary" as MeasureIntermediary
}
rectangle "Public Health Agency" as Agency {
agent "Measure Consumer" as MeasureConsumer
}


MeasureSource -> ExternalStorage : Push
ExternalStorage <- MeasureIntermediary : Pull
MeasureIntermediary <- MeasureConsumer : Pull

@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/HospitalPushToExternalStorageAdaptedToPullAPI-1.plantuml

@startuml
title Public Health Adapts FHIR Server to Hospital Owned Storage
rectangle "Hospital EHR System" as Hospital {
agent "Measure Source" as MeasureSource
storage "External Storage" as ExternalStorage
}
rectangle "Public Health Agency" as Agency {
agent "Measure Intermediary" as MeasureIntermediary
agent "Measure Consumer\n(FHIR Server)" as MeasureConsumer
}


MeasureSource -> ExternalStorage : Push
ExternalStorage <- MeasureIntermediary : Pull
MeasureIntermediary <- MeasureConsumer : Pull

@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/HospitalPushToExternalStorageAdaptedToPullAPI-2.plantuml

@startuml
title Public Health does Most of the Work
rectangle "Hospital EHR System" as Hospital {
agent "Measure Source" as MeasureSource
}
rectangle "Public Health Agency" as Agency {
storage "External Storage" as ExternalStorage
agent "Measure Intermediary" as MeasureIntermediary
agent "Measure Consumer" as MeasureConsumer
}


MeasureSource -> ExternalStorage : Push
ExternalStorage <- MeasureIntermediary : Pull
MeasureIntermediary <- MeasureConsumer : Pull


@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/HospitalPushToPublicHealth.plantuml

@startuml
rectangle "Hospital EHR System" {
agent "Measure Source" as MeasureSource
}

rectangle "Public Health Agency" {
agent "Measure Consumer\n<i>(FHIR Server)</i>" as MeasureConsumer
}
MeasureSource -> MeasureConsumer : Push with API

@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/HospitalPushToPublicHealthStorage.plantuml

@startuml
rectangle "Hospital EHR System" {
agent "Measure Source" as MeasureSource
}

rectangle "Public Health Agency" {
storage "External Storage" as ExternalStorage
agent "Measure Consumer" as MeasureConsumer
}

MeasureSource -> ExternalStorage : Push with Dump
ExternalStorage <- MeasureConsumer : Pull with Dump

@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/Model.plantuml

@startuml
class MeasureReport <<(R,Red)>>
class Measure <<(R,Red)>>
class Group <<(R,Red)>>
class Characteristic <<(E,Yellow)>>
class CountableEntity <<(P,Cyan)>>
class Field <<(E,Yellow)>>

MeasureReport o->  Measure : Is Defined By
Measure  o->  Group : Has Subject
Group *-- Characteristic : "Stratified By             "
Group o-->  CountableEntity : "Has Member"

(Group, CountableEntity) .. Characteristic : Identifies Field Of

CountableEntity  *-   Field : Composed of
Characteristic --> Field : Names

MeasureReport ..> CountableEntity : "Assesses        \n\n\n"
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/PublicHealthPullFromHospital.plantuml

@startuml
rectangle "Hospital EHR System" {
agent "Measure Source\n<i>(FHIR Server)</i>" as MeasureSource
}

rectangle "Public Health Agency" {
agent "Measure Consumer" as MeasureConsumer
}
MeasureSource <- MeasureConsumer : Pull with API

@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/PublicHealthPullFromHospitalStorage.plantuml

@startuml
rectangle "Hospital EHR System" {
storage "External Storage" as ExternalStorage
agent "Measure Source" as MeasureSource
}
rectangle "Public Health Agency" {
agent "Measure Consumer" as MeasureConsumer
}
ExternalStorage <-- MeasureConsumer : Pull with Dump
MeasureSource -> ExternalStorage : Push with Dump

@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/Slicer.plantuml

@startuml
rectangle "FHIR Server" as MeasureIntermediary {
agent "Measure Source" as MeasureSource1
agent "Measure Consumer" as MeasureConsumer1
MeasureSource1 == MeasureConsumer1
}

rectangle "Slicer" as MeasureIntermediary2 {
agent "Measure Consumer" as MeasureConsumer2
agent "Measure Source" as MeasureSource2
MeasureConsumer2 ==> MeasureSource2 : Transform\nfrom\n Measure to\nGroup
}

MeasureConsumer2 -> MeasureSource1 : "    Pull API    \n(Measure)"
MeasureSource2 -> MeasureConsumer1 : "    Push API    \n(Group)"

@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/technology-environment.plantuml

@startuml
digraph tech {
    node [shape=box;color="#A80036";fontname="SansSerif";fontsize=12;style=filled;fillcolor="#FEFECE"]
    edge [color="#A80036";]
    fontname="SansSerif";
    labelloc=b;
    rankdir=BT;
    aspect=1.33;
    compound=true;
    subgraph cluster_opi {
        subgraph cluster_Infrastructure {
            label="Infrastructure";color=black;
            SEC [label="Security Infrastructure";target=parent;URL="technology_environment.html#ehr-systems"]
            CnC [label="Command and Control";target=parent;URL="technology_environment.html#command-and-control-systems"]
            MPI [label="Master Patient Index";target=parent;URL="technology_environment.html#master-patient-index"]
        }

        subgraph op {
            subgraph cluster_Operations {
                label="Operations"
                rank=same;
                AM [label="Asset Management";target=parent;URL="technology_environment.html#asset-management-systems"]
                BM [label="Bed Management";target=parent;URL="technology_environment.html#bed-management-aka-housekeeping-systems"]
                INV [label="Inventory Control";target=parent;URL="technology_environment.html#inventory-control-systems"]
                WM [label="Workforce Management";target=parent;URL="technology_environment.html#workforce-managementstaff-scheduling-systems"]
            }
            subgraph cluster_Payment {
                rank=same;
                label="Payment"
                RCM [label="Revenue Cycle Management";target=parent;URL="technology_environment.html#revenue-cycle-managementbilling-systems"]
            }
        }
    }
    subgraph cluster_Treatment {
        label="Treatment"
        subgraph cmehr { rank=same;
          CM[label="Care Management";target=parent;URL="technology_environment.html#care-management-systems"]
          EHR[label="EHR Systems";target=parent;URL="technology_environment.html#ehr-systems"]
        }

        subgraph cluster_Departments {
            label="Departments"
            DS[label="Departmental System";target=parent;URL="technology_environment.html#departmental-systems"]
            subgraph cluster_ICU {
                label="ICU"
                ICM[label="ICU Central Monitoring";target=parent;URL="technology_environment.html#icucentral-monitoring-systems"]
            }
            subgraph cluster_Laboratory {
                label="Laboratory";
                LIS [label="Laboratory Information System";target=parent;URL="technology_environment.html#laboratory-information-systems-lis"]
            }
            subgraph cluster_LDD {
                label="Labor and Delivery";
                LnD[label="Labor and Delivery System";target=parent;URL="technology_environment.html#labor-and-delivery-systems"]
            }
            subgraph cluster_Imaging {
                label="Imaging";
                PACS[label="Picture Archiving and Communication System (PACS)";target=parent;URL="technology_environment.html#picture-archival-and-communication-systems-pacs"]
                RIS[label="Radiology Information System (RIS)";target=parent;URL="technology_environment.html#radiology-information-systems-ris"]
            }
            subgraph cluster_ED {
                label="Emergency Department";
                ED[label="ED System";target=parent;URL="technology_environment.html#emergency-department-systems"]
            }
            RIS -> DS [arrowhead=onormal]
            LIS -> DS [arrowhead=onormal]
            LnD -> DS [arrowhead=onormal]
            ICM -> DS [arrowhead=onormal]
            ED -> DS [arrowhead=onormal]
        }
        DS -> EHR [arrowhead=none]
        PACS -> RIS [arrowhead=none;ltailport=s;lheadport=n]
    }

    RCM -> MPI [ltail=cluster_Payment,lhead=cluster_Infrastructure,ltailport=nw,lheadport=sw,constraint=false;color=transparent;];
    CM -> RCM [arrowhead=none;ltailport=s;lheadport=n;color=transparent;]
    WM -> SEC [ltail=cluster_Operations,lhead=cluster_Infrastructure;color=transparent;];

}
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/transaction-1-seq.plantuml

@startuml
hide footbox
participant "Measure Consumer" as MeasureConsumer
participant "Measure Source" as MeasureSource
"MeasureConsumer" -> "MeasureSource" : 1. Search Request
activate "MeasureConsumer"
activate "MeasureSource"
"MeasureSource" --> "MeasureConsumer" : 2. Search Response
deactivate "MeasureConsumer"
deactivate "MeasureSource"
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/transaction-1-uc.plantuml

@startuml

agent "Measure Source" as MeasureSource

agent "Measure Consumer" as MeasureConsumer
usecase (Query Measure) as (PULL-TX)
MeasureSource --> (PULL-TX)
MeasureConsumer --> (PULL-TX)
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/transaction-2-seq.plantuml

@startuml
hide footbox
participant "Measure Source" as MeasureSource
participant "Measure Consumer" as MeasureConsumer
"MeasureSource" -> "MeasureConsumer" : 1. Push Measure
activate "MeasureSource"
activate "MeasureConsumer"
return
deactivate "MeasureSource"
deactivate "MeasureConsumer"
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/transaction-2-uc.plantuml

@startuml

agent "Measure Source" as MeasureSource

agent "Measure Consumer" as MeasureConsumer
usecase (Produce Measure) as (PUSH-TX)
MeasureSource --> (PUSH-TX)
MeasureConsumer --> (PUSH-TX)
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/transaction-3-seq.plantuml

@startuml
hide footbox
participant "Measure Definition Consumer" as MeasureDefinitionConsumer
participant "Measure Definition Source" as MeasureDefinitionSource
"MeasureDefinitionConsumer" -> "MeasureDefinitionSource" : 1. Search Request
activate "MeasureDefinitionConsumer"
activate "MeasureDefinitionSource"
"MeasureDefinitionSource" --> "MeasureDefinitionConsumer" : 2. Search Response
deactivate "MeasureDefinitionConsumer"
deactivate "MeasureDefinitionSource"
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/transaction-3-uc.plantuml

@startuml

agent "Measure Definition Source" as MeasureDefinitionSource

agent "Measure Definition Consumer" as MeasureDefinitionConsumer
usecase (Query Measure Definition) as (PULL-MX)
MeasureDefinitionSource --> (PULL-MX)
MeasureDefinitionConsumer --> (PULL-MX)
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/transaction-4-seq.plantuml

@startuml
hide footbox
participant "Measure Computer" as MeasureComputer
participant "Data Source" as DataSource
participant "Measure Source" as MeasureSource
participant "Measure Consumer" as MeasureConsumer
"MeasureComputer" -> "MeasureComputer" : 1. Compute Measure
activate "MeasureComputer"
deactivate "MeasureComputer"
"MeasureComputer" -> "DataSource" : 2. Search FHIR Resources
activate "MeasureComputer"
activate "DataSource"
"DataSource" --> "MeasureComputer" : 3. Search Response
deactivate "MeasureComputer"
deactivate "DataSource"
"MeasureSource" -> "MeasureConsumer" : 4. Report Measure
activate "MeasureSource"
activate "MeasureConsumer"
return
deactivate "MeasureSource"
deactivate "MeasureConsumer"
"MeasureConsumer" -> "MeasureSource" : 5. Query Measure
activate "MeasureConsumer"
activate "MeasureSource"
return
deactivate "MeasureConsumer"
deactivate "MeasureSource"
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/transaction-4-uc.plantuml

@startuml

agent "Measure Source" as MeasureSource

agent "Measure Consumer" as MeasureConsumer

agent "Measure Computer" as MeasureComputer

agent "Data Source" as DataSource
usecase (Compute Measure) as (COMPUTE-MX)
MeasureSource --> (COMPUTE-MX)
MeasureConsumer --> (COMPUTE-MX)
MeasureComputer --> (COMPUTE-MX)
DataSource --> (COMPUTE-MX)
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/transaction-5-seq.plantuml

@startuml
hide footbox
participant "Measure Consumer" as MeasureConsumer
"MeasureConsumer" -> "MeasureConsumer" : 1. Communicate Measure
activate "MeasureConsumer"
deactivate "MeasureConsumer"
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/transaction-5-uc.plantuml

@startuml

agent "Measure Consumer" as MeasureConsumer
usecase (Communicate Results) as (REPORT-TX)
MeasureConsumer --> (REPORT-TX)
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/usecase1-processflow.plantuml

@startuml
hide footbox
actor "ICU/Central Monitoring System"
actor "Bed Management System"
actor "EHR"
actor "ED System"
actor "Measure Collector"
actor "Public Health Agency"
"ICU/Central Monitoring System" -> "ICU/Central Monitoring System" : 1. ICU/Central Monitoring System collects data
activate "ICU/Central Monitoring System"
activate "ICU/Central Monitoring System"
"ICU/Central Monitoring System" -> "Measure Collector" : 2. ICU/Central Monitoring System Reports\non multiple data elements\n(measure populations)
activate "Measure Collector"
return
deactivate "Measure Collector"
deactivate "ICU/Central Monitoring System"
deactivate "ICU/Central Monitoring System"
"Bed Management System" -> "Measure Collector" : 3. Bed Management System Reports\non multiple data elements\n(measure populations)
activate "Bed Management System"
activate "Measure Collector"
return
deactivate "Bed Management System"
deactivate "Measure Collector"
"EHR" -> "Measure Collector" : 4. EHR System reports\non multiple data elements\n(measure populations)
activate "EHR"
activate "Measure Collector"
return
deactivate "EHR"
deactivate "Measure Collector"
"ED System" -> "Measure Collector" : 5. The ED System reports\non patients in the ED and/or overflow area.
activate "ED System"
activate "Measure Collector"
return
deactivate "ED System"
deactivate "Measure Collector"
"Measure Collector" -> "Measure Collector" : 6. Measure Collector aggregates reports for\ntransmission to a Public Health Agency
activate "Measure Collector"
activate "Measure Collector"
deactivate "Measure Collector"
deactivate "Measure Collector"
"Measure Collector" -> "Public Health Agency" : 7. Transmit Aggregated MeasureReport Data
activate "Measure Collector"
activate "Public Health Agency"
return
deactivate "Measure Collector"
deactivate "Public Health Agency"
"Public Health Agency" -> "Measure Collector" : 8. A Public Health Agency queries the\nhospitals Measure Collector\nfor the most recent reports.
activate "Public Health Agency"
activate "Measure Collector"
"Measure Collector" --> "Public Health Agency" : 9. Transmit Aggregated MeasureReport Data
deactivate "Public Health Agency"
deactivate "Measure Collector"
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/usecase2-processflow.plantuml

@startuml
hide footbox
actor "Public Health User"
participant "Measure Aggregating System [Measure Intermediary]" as MeasureIntermediary
participant "Measure Reporting and Analytics System [Measure Consumer]" as MeasureConsumer
participant "Reporting Sources [Measure Source]" as MeasureSource
"MeasureIntermediary" -> "MeasureSource" : 1. Measure Intermediary aggregates data from one or Measure Sources
activate "MeasureIntermediary"
activate "MeasureSource"
return
deactivate "MeasureIntermediary"
deactivate "MeasureSource"
"Public Health User" -> "MeasureConsumer" : 2. User Initiates Search
activate "Public Health User"
activate "MeasureConsumer"
"MeasureConsumer" -> "MeasureIntermediary" : 3. Get Aggregated Results
activate "MeasureIntermediary"
"MeasureIntermediary" --> "MeasureConsumer" : 4. Aggregated Results
deactivate "MeasureIntermediary"
"MeasureConsumer" --> "Public Health User" : 5. Display Results
deactivate "Public Health User"
deactivate "MeasureConsumer"
"Public Health User" -> "MeasureConsumer" : 6. User refines Focus or Form of Display
activate "Public Health User"
activate "MeasureConsumer"
"MeasureConsumer" -> "MeasureIntermediary" : 7. Get Aggregated Results
activate "MeasureIntermediary"
"MeasureIntermediary" --> "MeasureConsumer" : 8. Aggregated Results
deactivate "MeasureIntermediary"
"MeasureConsumer" --> "Public Health User" : 9. Display Refined Results
deactivate "Public Health User"
deactivate "MeasureConsumer"
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/usecase3-processflow.plantuml

@startuml
hide footbox
participant "Reporting Organization [Measure Definition Consumer]" as MeasureDefinitionConsumer
participant "Defining Agency [Measure Definition Source]" as MeasureDefinitionSource
"MeasureDefinitionConsumer" -> "MeasureDefinitionSource" : 1. Query for New or Updated Measures
activate "MeasureDefinitionConsumer"
activate "MeasureDefinitionSource"
"MeasureDefinitionSource" --> "MeasureDefinitionConsumer" : 2. Return matching measure specifications
deactivate "MeasureDefinitionConsumer"
deactivate "MeasureDefinitionSource"
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/usecase4-processflow.plantuml

@startuml
hide footbox
participant "Reporting Organization [Measure Definition Consumer]" as MeasureDefinitionConsumer
participant "Hospital Reporting System Public Health Agency [Measure Computer]" as MeasureComputer
participant "Defining Agency [Measure Definition Source]" as MeasureDefinitionSource
participant "Hospital EHR System [Data Source]" as DataSource
participant "Measure Consumer" as MeasureConsumer
"MeasureDefinitionConsumer" -> "MeasureDefinitionSource" : 1. Query for New or Updated Measures
activate "MeasureDefinitionConsumer"
activate "MeasureDefinitionSource"
return
deactivate "MeasureDefinitionConsumer"
deactivate "MeasureDefinitionSource"
"MeasureComputer" -> "MeasureComputer" : 2. Compute Measure
activate "MeasureComputer"
activate "MeasureComputer"
"MeasureComputer" -> "DataSource" : 3. Gather Data
activate "DataSource"
"DataSource" --> "MeasureComputer" : 4. Returns Matching FHIR Resources
deactivate "DataSource"
deactivate "MeasureComputer"
deactivate "MeasureComputer"
"MeasureComputer" -> "MeasureConsumer" : 5. Send Measures to a Measure Consumer
activate "MeasureComputer"
activate "MeasureConsumer"
return
deactivate "MeasureComputer"
deactivate "MeasureConsumer"
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/images-source/usecase5-processflow.plantuml

@startuml
hide footbox
participant "Hospital Reporting System [Measure Computer]" as MeasureComputer
participant "Hospital EHR System [Data Source]" as DataSource
"MeasureComputer" -> "MeasureComputer" : 1. Compute Measure
activate "MeasureComputer"
activate "MeasureComputer"
"MeasureComputer" -> "DataSource" : 2. Gather Measure Data
activate "DataSource"
"DataSource" --> "MeasureComputer" : 3. Returns Matching FHIR Resources
deactivate "DataSource"
"MeasureComputer" -> "DataSource" : 4. Gather Supplemental Data
activate "DataSource"
"DataSource" --> "MeasureComputer" : 5. Returns Supplemental FHIR Resources
deactivate "DataSource"
deactivate "MeasureComputer"
deactivate "MeasureComputer"
@enduml


---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureConsumer-API-Pull-intro.md

See <a href='actors.html#measure-consumer'>Measure Consumer</a> and the <a href='actors.html#pull-option'>Pull</a>option in Actors for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureConsumer-API-Pull-Questionnaire-intro.md

See <a href='actors.html#measure-consumer'>Measure Consumer</a> and the <a href='actors.html#pull-option'>Pull</a> and  <a href='actors.html#questionnaire-option'>Questionnaire</a>options in Actors for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureConsumer-API-Push-intro.md

See <a href='actors.html#measure-consumer'>Measure Consumer</a> and the <a href='actors.html#push-option'>Push</a> option in Actors for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureConsumer-CSV-Pull-intro.md

See <a href='actors.html#measure-consumer'>Measure Consumer</a> and the <a href='actors.html#csv-option'>CSV</a> and <a href='actors.html#pull-option'>Pull</a> options in Actors for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureConsumer-CSV-Push-intro.md

See <a href='actors.html#measure-consumer'>Measure Consumer</a> and the <a href='actors.html#csv-option'>CSV</a> and <a href='actors.html#push-option'>Push</a> options in Actors for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureConsumer-ProduceMeasure-API-Push-intro.md

See <a href='transaction-2.html'>Produce Measure</a> for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureConsumer-ProduceMeasure-CSV-Push-intro.md

See <a href='transaction-2.html'>Produce Measure</a> for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureConsumer-QueryMeasure-API-Pull-intro.md

See <a href='transaction-1.html'>Query Measure</a> for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureConsumer-QueryMeasure-API-Pull-Questionnaire-intro.md

See <a href='transaction-1.html'>Query Measure</a> for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureConsumer-QueryMeasure-CSV-Pull-intro.md

See <a href='transaction-1.html'>Query Measure</a> for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureSource-API-Pull-intro.md

See <a href='actors.html#measure-source'>Measure Source</a> and the <a href='actors.html#pull-option'>Pull</a> option in Actors for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureSource-API-Pull-Questionnaire-intro.md

See <a href='actors.html#measure-source'>Measure Source</a> and the <a href='actors.html#pull-option'>Pull</a> and  <a href='actors.html#questionnaire-option'>Questionnaire</a>options in Actors for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureSource-API-Push-intro.md

See <a href='actors.html#measure-source'>Measure Source</a> and the <a href='actors.html#push-option'>Push</a> option in Actors for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureSource-CSV-Pull-intro.md

See <a href='actors.html#measure-source'>Measure Source</a> and the <a href='actors.html#csv-option'>CSV</a> and <a href='actors.html#pull-option'>Pull</a> options in Actors for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureSource-CSV-Push-intro.md

See <a href='actors.html#measure-source'>Measure Source</a> and the <a href='actors.html#csv-option'>CSV</a> and <a href='actors.html#push-option'>Push</a> options in Actors for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureSource-ProduceMeasure-API-Push-intro.md

See <a href='transaction-2.html'>Produce Measure</a> for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureSource-ProduceMeasure-CSV-Push-intro.md

See <a href='transaction-2.html'>Produce Measure</a> for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureSource-QueryMeasure-API-Pull-intro.md

See <a href='transaction-1.html'>Query Measure</a> for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureSource-QueryMeasure-API-Pull-Questionnaire-intro.md

See <a href='transaction-1.html'>Query Measure</a> for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/CapabilityStatement-MeasureSource-QueryMeasure-CSV-Pull-intro.md

See <a href='transaction-1.html'>Query Measure</a> for details.

---

File: repos/HL7_SLASH_fhir-saner/input/includes/Measure-CDCPatientImpactAndHospitalCapacity-intro.md

<p>This measure demonstrates reporting on bed availability and use at a facility location based on CDC/NHSN reporting requirements.</p>

<div>
<h3>Related artifacts</h3>
<ul>
<li><a href='https://www.cdc.gov/nhsn/acute-care-hospital/covid19/'>CDC/NHSN COVID-19 Acute Care Module Home Page</a></li>
<li><a href='https://www.cdc.gov/nhsn/pdfs/covid19/import-covid19-data-508.pdf'>Facility - How to Upload COVID-19 CSV Data Files</a></li>
<li><a href='https://www.cdc.gov/nhsn/pdfs/covid19/fac-analysis-qrg-508.pdf'>NHSN COVID-19 Module Analysis Reports</a></li>
<li><a href='https://www.cdc.gov/nhsn/pdfs/covid19/57.130-toi-508.pdf'>Instructions for Completion of the COVID-19 Patient Impact and Hospital Capacity Pathway (CDC 57.130)</a></li>
<li><a href='https://www.cdc.gov/nhsn/pdfs/covid19/57.130-covid19-pimhc-blank-p.pdf'>Patient Impact and Hospital Capacity Pathway Form</a></li>
<li><a href='https://www.cdc.gov/nhsn/pdfs/covid19/covid19-test-csv-import.csv'>CDC/NHSN COVID-19 Acute Care Patient Impact Reporting CSV File Template</a></li>
</div>

<div>
<h3>Definitions</h3>
<dl>
<dt>Ventilator</dt>
<dd>Any device used to support, assist or control respiration (inclusive of the weaning period) through the application of positive
pressure to the airway when delivered via an artificial airway, specifically an oral/nasal endotracheal or tracheostomy tube.
Note: Ventilation and lung expansion devices that deliver positive pressure to the airway (for example: CPAP, BiPAP, bi-level, IPPB and
PEEP) via non-invasive means (for example: nasal prongs, nasal mask, full face mask, total mask, etc.) are not considered ventilators
unless positive pressure is delivered via an artificial airway (oral/nasal endotracheal or tracheostomy tube).</dd>

<dt>Beds</dt>
<dd>Baby beds in mom's room count as 1 bed, even if there are multiple baby beds
Follow-up in progress if staffed is less than licensed.
Total includes all beds, even if with surge beds it exceeds licensed beds.</dd>

<dt>ICU beds</dt>
<dd>Include NICU (from CDC Webinar 31-Mar-2020) (outstanding question on burn unit)</dd>
</dl>
</div>

<div>
<h3>Group Definitions</h3>

<table class='grid'>
<thead>
<tr><th>Group System</th><th>Group Code</th><th>Population System</th><th>Population Code</th></tr>
</thead>
<tbody>
<tr><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasureGroupSystem</td><td>Beds</td><td><nobr/></td><td><nobr/></td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues<br/>http://terminology.hl7.org/CodeSystem/measure-population</td><td>numTotBeds<br/>initial-population</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numBeds</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numBedsOcc</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numICUBeds</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numICUBedsOcc</td></tr>
<tr><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasureGroupSystem</td><td>Ventilators</td><td><nobr/></td><td><nobr/></td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues<br/>http://terminology.hl7.org/CodeSystem/measure-population</td><td>numVent<br/>initial-population</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numVentUse</td></tr>
<tr><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasureGroupSystem</td><td>Encounters</td><td><nobr/></td><td><nobr/></td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numC19HospPats</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numC19MechVentPats</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numC19HOPats</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numC19OverflowPats</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numC19OFMechVentPats</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numC19Died</td></tr>
</tbody>
</table>
</div>

---

File: repos/HL7_SLASH_fhir-saner/input/includes/Measure-FEMADailyHospitalCOVID19Reporting-intro.md


<p>This measure demonstrates reporting about Daily Laboratory Testing at a inpatient test sites capturing laboratory orders and results daily increase and cumulative counts.</p>

<div>
<h3>Related artifacts</h3>

<ul>
<li><a href='https://www.cms.gov/newsroom/press-releases/trump-administration-engages-americas-hospitals-unprecedented-data-sharing'>Trump Administration Engages America�s Hospitals in Unprecedented Data Sharing
<li><a href='https://www.whitehouse.gov/briefings-statements/text-letter-vice-president-hospital-administrators/'>Text of a Letter from the Vice President to Hospital Administrators</a></li>
<li><a href='https://www.aha.org/advisory/2020-03-30-coronavirus-update-administration-requests-hospitals-report-daily-covid-19'>Administration Requests Hospitals Report Daily on COVID-19 Testing Results, Bed and Ventilator</a></li>
<li><a href='https://images.magnetmail.net/images/clients/AHA_MCHF/attach/2020/March/0330/Template_for_Daily_Hospital_COVID19_Reporting.xlsx'>Template for Daily Hospital COVID-19 Reporting.xlsx</a></li>
</ul>

<div>
<h3>Group Definitions</h3>

Group System|Group Code|Population System|Population Code
------------|----------|-----------------|---------------
http://hl7.org/fhir/uv/saner/CodeSystem/MeasureGroupSystem|positiveIncreasePercent|<nobr/>|<nobr/>
<nobr/>|<nobr/>|http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues<br/>http://terminology.hl7.org/CodeSystem/measure-population|totalOrdersIncrease<br/>initial-population
<nobr/>|<nobr/>|http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues<br/>http://terminology.hl7.org/CodeSystem/measure-population|totalTestResultsIncrease<br/>denominator
<nobr/>|<nobr/>|http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues<br/>http://terminology.hl7.org/CodeSystem/measure-population|positiveIncrease<br/>numerator
http://hl7.org/fhir/uv/saner/CodeSystem/MeasureGroupSystem|positivePercent|<nobr/>|<nobr/>
<nobr/>|<nobr/>|http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues<br/>http://terminology.hl7.org/CodeSystem/measure-population|totalOrders<br/>initial-population
<nobr/>|<nobr/>|http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues<br/>http://terminology.hl7.org/CodeSystem/measure-population|totalTestResults<br/>denominator
<nobr/>|<nobr/>|http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues<br/>http://terminology.hl7.org/CodeSystem/measure-population|positive<br/>numerator
<nobr/>|<nobr/>|http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues<br/>http://terminology.hl7.org/CodeSystem/measure-population|rejected<br/>denominator-exclusion


---

File: repos/HL7_SLASH_fhir-saner/input/includes/OperationDefinition-MeasureReport-aggregate-intro.md

This operation enables multiple reports to be aggregated:
* From multiple systems reporting partial results within a facility into a singular consolidated report which can be reported to local, regional and national agencies.
* From multiple reports over a period of time from a given location, e.g., to aggregate daily measure reports into a weekly report.
* From multiple subjects within a geographic region into a MeasureReport describing that region.


### Aggregating MeasureReport Resources
The process for aggregating MeasureReport resources up to a geographic region or time period
follows the steps below:

1. Collect all MeasureReport resources to be aggregated.
   Note: All MeasureReport resources being aggregated **shall** refererence a common Measure in MeasureReport.measure.
2. Determine the subject of the report (the larger location)
3. Compute the start of the time period for the aggregate as the minimum of MeasureReport.period.start for all MeasureReport resources being aggregated.
4. Compute the end of the time period for the aggregate as the maximum of MeasureReport.period.end for all MeasureReport resources being aggregated.
5. Compute the population.count values found in group.population and group.stratifier.stratum.population from the matching population.count values in
the MeasureReport
6. Compute the group.measureScore and group.stratifier.stratum.measure score for each group and stratum from the computed counts.

### Aggregating Population count values
Measures aggregate values according to the [Measure Rate Aggregation Values](ValueSet-MeasureRateAggregationValues.html) value set.
Across facilities, population counts are always summed. Within a facility the different population types are aggregated differently when
aggregating over a larger time period.

* count<br/>
  All population count values are summed.
* point-in-time<br/>
  The most recent population count value is the "aggregated" value, representing the final point-in-time
  measure.
* cumulative<br/>
  The initial population and numerator are summed, being a count of individual events.
  The denominator population takes on the value of the report at the end of the time period (the most recent value), beeing a cumulative count.

Measure scores are recomputed based on measure populations after aggregation following the usual rules for measure scoring.


---

File: repos/HL7_SLASH_fhir-saner/input/includes/StructureDefinition-PublicHealthMeasure-intro.md

This Implementation Guide defines a profile for Measure to be used for Public Health reporting for Situational Awareness, rather than Quality Reporting.
The measures using this profile are intended to support reporting about the health system capacity to provide adequate care for patients during a health system
emergency, whether it is regional, national or global.  In this, the purpose and function of situational awareness measures have a different focus and intent
than those used for quality reporting.

### Describing and Identifying a Measure
Each measure has a Title, the name by which it is commonly known by people, and by which it can be readily found in an information system.
Titles **should** not be overly long (to enable recall by people), but **should** be descriptive enough to distinguish different measures published
by the same organization.  A subtitle may be present to provide additional descriptive detail.

1. `Measure.title` **should** be less than 64 characters in length.
2. `Measure.subtitle` **may** be present.

#### Software Component Name
Computer friendly names enable developers to create software tools that facilitate measure implementation and automation.  This profile
recommends transforming the title into a name by removing spaces and special characters (any character other than A-Z, a-z and 0-9),
using PascalCase to seperate boundaries between words. This allows the name to be used in most computing languages and as
the `id` for the resource in systems where user defined identifiers are supported for id values.

1. `Measure.name` **shall** be present.
2. `Measure.name` **should** match the pattern `[A-Z][A-Za-z0-9]+`.
3. `Measure.id` **should** be equal to `Measure.name`.

#### Canonical URL
The canonical URL is a unique identifier which represents the Measure within MeasureReport resources defined by that Measure. Tooling for FHIR
(e.g., the FHIR IG Publisher, SUSHI, Simplifier) follows a protocol for automatically constructing these URLs. This guide makes several
recommendations for URLs used by a publisher.  The example below is used to illustrate the recommendations

     https:\//example.com/saner/covid19/Measure/MyMeasureName

1. All Measure URLs for measures published by the same organization **should** have the same base URL. The Base URL part **should** be memorable.
   In the example above, `https:\//example.com/saner` is the base URL.
2. The base URL **should** be less than 40 characters in length.
3. The penultimate path part of the URL may be used to categorize measures in some way, e.g., by topic (e.g., COVID-19, Hurricane) or type of
   facility (e.g., Hospital, Ambulatory, LTC) to which they apply. In the example above, `covid19` is the category.  This category **should**
   also be encoded in Measure.useContext (see [Classifying Measures](#classifying-measures) below).
4. The last path part in the URL **should** be Measure. Following this recomendation simplifies the use of FHIR IG Development tools to
   generate Measure resources.  In the example above, the last path part is `Measure`.
5. The computable name given in the Measure **should** be the last part of the URL. Again, this simplifies measure development using existing
   FHIR IG Development tools. In the example above, `MyMeasureName` is the name of the measure.
6. The URL **should** resolve to an HTML page that describes the measure, or provides access to it as a FHIR Resource and ideally, would
   return HTML, XML or JSON representations based on the requested mime type.

#### Versioning
Measures can change over time. This guide requires that the Measure version information recorded be performed as follows:

1. A measure **shall** do one of the following:
   * be recorded in the form defined by [Semantic Versioning](https://semver.org/), e.g.: version 1.2.3 is the third patch to the second minor
     update of the first major release, or
   * be recorded by date using ISO 8601 format with hyphens and no time component, e.g.: 2020-07-25 for the measure released on July 25, 2020.
2. If versions can be updated more frequently than by day, a publisher **shall** use semantic versioning.

The use of semantic versioning is preferred because this is the form required in FHIR implementation guides, and it enables support for versioning
of measures using FHIR Implementation Guide tools. This is also the format for versioning that has been the most widely adopted by the IT industry.

##### Meanings of Major, Minor and Patch with respect to Measures

Major
: A major update adds one or more required elements to the Measure that **shall** be present in a MeasureReport to be considered valid
  by the receiving system. The definition of valid is defined by the measure developer, and need not be the same as that performed
  by FHIR validation tools. The FHIR Validator will fail a MeasureReport that does not include all the groups, populations and strata
  defined in the Measure, even though these components might otherwise be considered optional by the measure developer.

Minor
: A minor update adds one or more recommended or optional elements to the Measure.

Patch
: A patch can clarify or correct information that does not impact the interpretation of the measure.

#### Status of a Measure
This profile requires that the publication status of a measure be reported (this is a general requirement of all Measure resources), and
furthermore, that it's experimental status **shall** also be reported.

The usage of status values is described below:
draft
: The measure is presently under development. Measures presently under development **shall** also be recorded as being experimental.

active
: The measure is ready for, or being used, either in pilots or production. The experimental status for the measure **shall** be used to distinguish between
measures that are being piloted (`experimental=true`) or in production (`experimental=false`).

retired
: The measure **should** no longer be used in production. Measures which are retired before ever becoming active in production **shall** have experimental=true,
while those which have been available for production use **shall** have `experimental=false`.

Measures which have been used in the past **should** remain available for access for use when data has been used in production to enable systems to
interpret historical data recorded using the measure.

### The Subject of Measurement
In quality measurement, the subject of a measure in FHIR describes to whom or what the measure applies.  For situational awareness, this guide restricts the
subject of measurement to locations, representing a specific facility, site within a facility, or a broader geographic region (which can be defined as
a collection of facilities within that geographic region). These measures can also be used by an organization to manage sites and facilities based on
other organizing criteria, but are generally intended to support geographic rather than organizational boundaries.

1. `Measure.subjectCodeableConcept` **shall** have the value `http://hl7.org/fhir/resource-types#Location`

### Classifying Measures
Measures can be classified in different ways, e.g., by clinical venue, program, type of healthcare provider, et cetera.

In the following: **shall** indicates a [required](http://hl7.org/fhir/codesystem-binding-strength.html#binding-strength-required) binding for
the vocabulary, and **should** indicates a [preferred](http://hl7.org/fhir/codesystem-binding-strength.html#binding-strength-preferred) binding.

#### Measures Focused on a Particular Disease
1. Measures focusing on a particular disease **shall** record that focus in Measure.useContext, where:<br/>
`Measure.useContext.code = [http://terminology.hl7.org/CodeSystem/usage-context-type#focus](https://www.hl7.org/fhir/codesystem-usage-context-type.html#usage-context-type-focus)`<br/>
and<br/>
2. `Measure.useContext.valueCodableConcept` is an appropriate code from a vocabulary identifying the disease of interest.
It **should** come from SNOMED CT codes descending from
[64572001 Disease (disorder)](https://browser.ihtsdotools.org/?perspective=full&conceptId1=64572001).

#### Measures Focused on a Particular Kind of Event
1. Measures focusing on a particular kind of event (e.g., Pandemic, Hurricane, Fire, Flood) **shall** record their focus in Measure.useContext, where:<br/>
`Measure.useContext.code = `[http://snomed.info/sct#272379006 Event](https://browser.ihtsdotools.org/?perspective=full&conceptId1=272379006)<br/>
and<br/>
2. `Measure.useContext.valueCodableConcept` **should** come from SNOMED CT Codes descending from 276746005 Environmental Event
to classify the type of event. See [Event Context](ValueSet-EventContext.html) for the Value Set for this classification.

#### Measures Focused on a Particular Specialty
1. Measures focusing on a particular specialty **shall** record the specialty in Measure.useContext, where:<br/>
`Measure.useContext.code = `[http://terminology.hl7.org/CodeSystem/usage-context-type#user](https://www.hl7.org/fhir/codesystem-usage-context-type.html#usage-context-type-user)<br/>
and<br/>
2. `Measure.useContext.valueCodableConcept` **shall** be an appropriate code from a vocabulary identifying the provider specialty.
3. The value **should** come from SNOMED CT terms descending from [394658006 Clinical Specialty](https://browser.ihtsdotools.org/?perspective=full&conceptId1=394658006).

#### Measures Focused on a Clinical <span id="venue">Venue</span> (e.g., hospital, long-term care, ambulatory care)
1. Measures focused on a particular clinical venue **shall** record the type of venue in Measure.useContext, where<br/>
`Measure.useContext.code = [http://terminology.hl7.org/CodeSystem/usage-context-type#venue](https://www.hl7.org/fhir/codesystem-usage-context-type.html#usage-context-type-venue)`<br/>
and<br/>
2. `Measure.useContext.valueCodableConcept` **shall** be an appropriate code from a vocabulary identifying the venue (e.g., hospitals, pharmacies, long term care facilities).
3. These codes **should** come from:
   * http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType OR
   * Terms descending from SNOMED CT [43741000 Environment](https://browser.ihtsdotools.org/?perspective=full&conceptId1=276339004)

#### Measures from a Given Program
1. Measures developed to support a given program (e.g., the CDC National Healthcare Safety Network) **shall** identify the program in Measure.useContext, where<br/>
`Measure.useContext.code = [http://terminology.hl7.org/CodeSystem/usage-context-type#program](https://www.hl7.org/fhir/codesystem-usage-context-type.html#usage-context-type-program)`<br/>
and<br/>
2. `Measure.useContext.valueCodableConcept.text` is a string identifying the program of work (e.g., the CDC National Healthcare Safety Network).

### Measure Publication
A measure is published by some appropriate authority, for example a governmental agency focused on public health or emergency response,
or an organization working with such a governmental agency. Measures for situational awareness are not expected to endure a ballot process,
but will instead be created by authorities using a well established governance process. The reason for this is that as the emergent situation
progresses, new measures will be needed as the situation changes, or existing measures may need to be updated to address issues found during use.

Measures are published by organizations rather than individuals.  This profile requires that the organization be identified in `Measure.publisher`,
and furthermore, that there is at least one organizational e-mail address which can be used to contact that publisher about the Measure in `Measure.contact`

### <span id='national-cores'>Use of Appropriate National Models</span>
Many countries have developed national healthcare information models in various states of completion. This IG requires the use of national core standards
or guides to localize the PublicHealthMeasure to ensure a consistent data model for automation.

1. A conforming PublicHealthMeasure **shall** specify a jurisdiction to enable support for validation against national requirements.
2. A measure defined for international use **may** specify an international juristiction, or multiple jurisdictions where that is feasible.

Setting the Measure jurisdiction ensures that resources referenced by the Measure or MeasureReport conform to appropriate national standards.

### Measure Reporting Period
A measure **shall** suggest the approrpriate reporting frequency and period using the [ReportingPeriod](StructureDefinition-ReportingPeriod.html] extension.

### Measure Requirements
A measure may indicate the requirements for sending the content of a measure group, population or stratum within a MeasureReport by
using the  [MeasureExpection](StructureDefinition-MeasureExpectation.html) extension on the Measure.group, Measure.group.population or Measure.group.stratifier element. The MeasureExpectation
extension works like the [Expectation extension](https://www.hl7.org/fhir/extension-capabilitystatement-expectation.html) on CapabilityStatement resources,
but applies to the requirements for the content of a MeasureReport.

### Stratifiers
Stratifiers partition a measure so that it counts subsets of the measure population
within the numerator or other measure population by some attribute that classifies the population.
Common stratifications often used in healthcare settings include age, sex at birth[^2] and race and ethnicity.
Constraints on the [Measure.group.stratifier](https://hl7.org/fhir/measure-definitions.html#Measure.group.stratifier)
component of a Measure and further describes the elements of that component to support strata.

[^2]: Also commonly referred to as gender, but is then confused with self-reported gender identity, so this guide uses the term sex at birth.

Each stratifier has the following features:

name
: The human readable name for the stratifier.
This can be found in `stratifier.code.coding.display`

code
: A code that uniquely identifies the stratifier (e.g., age, sex at birth, race, ethnicity).
This can be found in `stratifier.code.coding.code` and `stratifier.code.coding.system`
1. Codes used in this attribute **should** descend
from [SNOMED CT 363787002 Observable Entity](https://browser.ihtsdotools.org/?perspective=full&conceptId1=363787002)

description
: A description of the purpose of the stratifier, explaining what function it serves.
This can be found in `stratifier.code.text`

value set
: A list of values that describe the different categories into which counted elements are classified for stratification.
Individual values in this value set can be found in `stratifier.component.code` and an explaination of their function
appears in `stratifier.component.description`.
1. Codes used in this attribute **should** descend
from [SNOMED CT 404684003 Clinical Finding](https://browser.ihtsdotools.org/?perspective=full&conceptId1=404684003)



---

File: repos/HL7_SLASH_fhir-saner/input/includes/StructureDefinition-ReportingPeriod-intro.md

This Implementation Guide defines an exenstion supporting the definition of a recommended reporting period for a measure using the
[Timing](https://www.hl7.org/fhir/datatypes.html#Timing) data type.  Specifying the reporting period enables systems to schedule automated reporting activities.


### Specifying the frequncy and period for Measure Reporting
1. The timing ***shall** contain one repeat describing the reporting frequency and period, more than one repeat component is not necessary for
almost all cases of measures reported for COVID-19 to date.
2. The repeat.frequency **shall** be one, so that the Timing value simply indicates the duration of the reporting period (e.g., every 8 hours, every day, every week).
3. The base period for reporting **shall** be specified (e.g., daily, weekly, monthly) in [repeat.periodUnit](https://www.hl7.org/fhir/datatypes-definitions.html#Timing.repeat.periodUnit).
4. The number of periods to include **shall** be specified [repeat.period](https://www.hl7.org/fhir/datatypes-definitions.html#Timing.repeat.period).
5. The value of repeat.boundsPeriod.start **may** be specified to indicate the offset.

### Specifying the days of week or time of day for reporting
1. The starting time for the reporting period with a period of 1 day or larger **shall** be midnight local time unless otherwise specified.
2. The starting time offset or day for reporting period **may** be specified in [boundsPeriod.start](https://www.hl7.org/fhir/datatypes-definitions.html#Timing.repeat.boundsPeriod)
   to indicate the offset hour, day of week or day of month.


### Examples
See the [CDC Patient Impact and Hospital Capacity example Measure](Measure-CDCPatientImpactAndHospitalCapacity.json.html) for an example use of this extension in a resource.

The example below illustrates a measure with a reporting period of one report provided every one day for data as of midnight.
```
   "extension": [
     {
       "url": "http://hl7.org/fhir/uv/saner/StructureDefinition/ReportingPeriod",
       "valueTiming": {
         "repeat": {
           "frequency": 1,    // one report
           "period": 1,       // every one
           "periodUnit": "d", //          day
           "boundsPeriod": {
             "start":  "2020-09-01T00:00:00"  // reported starting on midnight 9/1/2020
           }
         }
       }
     }
   ]
```

The example below illustrates a measure with a reporting period every 8 hours (i.e., three reports per day) for data as of 2am, 10am and 6pm.

```
   "extension": [
     {
       "url": "http://hl7.org/fhir/uv/saner/StructureDefinition/ReportingPeriod",
       "valueTiming": {
         "repeat": {
           "frequency": 1,    // one report
           "period": 8,       // every eight
           "periodUnit": "h", //          hours
           "boundsPeriod": {
             "start":  "2020-09-01T02:00:00"  // reported starting on 2am as of 9/1/2020
           }
         }
       }
     }
   ]
```

The example below illustrates a measure with a reporting period of once a week on Monday 8/31/2020 at midnight

```
   "extension": [
     {
       "url": "http://hl7.org/fhir/uv/saner/StructureDefinition/ReportingPeriod",
       "valueTiming": {
         "repeat": {
           "frequency": 1,    // one report
           "period": 1,       // every one
           "periodUnit": "w", //          week
           "boundsPeriod": {
             "start":  "2020-08-31T00:00:00"  // reported starting on 8/31/2020 at midnight
           }
         }
       }
     }
   ]
```


---

File: repos/HL7_SLASH_fhir-saner/input/includes/ValueSet-2.16.840.1.113762.1.4.1032.116-intro.md

<h3 id='vsac-snapshot'>This ValueSet is a SNAPSHOT of a ValueSet in VSAC</h3>
<p>This ValueSet resource is a snapshot of a ValueSet made available through the US Value Set Authority
Center (VSAC).  It is included as an aid to interpretation of the implementation guide, and to support initial
implementation.  The ValueSet resource **should** be obtained directly from VSAC using the
following URL:</p>

<p><a href='http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.116'>http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.116</a></p>

<p>To download ValueSet resources or their expansions from VSAC, users must have a Unified Medical Language System (UMLS) User Account.  Accounts
can be requested via the <a href='https://uts.nlm.nih.gov/license.html'>US National Institutes of Health UMLS License page</a>.  While licenses are free,
it can take up to 3 business days to activate a license, and requests are only processed between 9am and 5pm during normal business hours.
</p>


---

File: repos/HL7_SLASH_fhir-saner/input/includes/ValueSet-2.16.840.1.113762.1.4.1032.117-intro.md

<h3 id='vsac-snapshot'>This ValueSet is a SNAPSHOT of a ValueSet in VSAC</h3>
<p>This ValueSet resource is a snapshot of a ValueSet made available through the US Value Set Authority
Center (VSAC).  It is included as an aid to interpretation of the implementation guide, and to support initial
implementation.  The ValueSet resource **should** be obtained directly from VSAC using the
following URL:</p>

<p><a href='http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.117'>http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.117</a></p>

<p>To download ValueSet resources or their expansions from VSAC, users must have a Unified Medical Language System (UMLS) User Account.  Accounts
can be requested via the <a href='https://uts.nlm.nih.gov/license.html'>US National Institutes of Health UMLS License page</a>.  While licenses are free,
it can take up to 3 business days to activate a license, and requests are only processed between 9am and 5pm during normal business hours.
</p>


---

