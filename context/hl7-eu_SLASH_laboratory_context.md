File: repos/hl7-eu_SLASH_laboratory/input/fsh/examples/actor/actors.fsh

Instance: actor-creator-eu-lab
InstanceOf: ActorDefinition
Title: "Actor Laboratory Report Creator"
Description: """Laboratory Report Creator: a system generating and sending/providing a Laboratory Report to a Consumer or to a Repository for report storage and sharing."""
Usage: #example

* url = "http://hl7.eu/fhir/laboratory/actor-creator-eu-lab"
* name = "LabReportCreator"
* status = #active
* type = #system
// * type = #entity
* documentation = """This actor represents the Laboratory Report creators. That is the actor creating the report that can be send to a consumer or to a repository for report storage and sharing."""

Instance: actor-consumer-eu-lab
InstanceOf: ActorDefinition
Title: "Actor Laboratory Report Consumer"
Description: """Laboratory Report Report Consumer: a system receiving/querying and using a Laboratory Report."""
Usage: #example

* url = "http://hl7.eu/fhir/laboratory/actor-consumer-eu-lab"
* name = "LabReportConsumer"
* status = #active
* type = #system
// * type = #entity
* documentation = """This actor represents the Laboratory Report consumers. That is the system using the report received or retrieved.
Using includes, but is not limited to, the report display, storage or processing."""

Instance: actor-repos-eu-lab
InstanceOf: ActorDefinition
Title: "Actor Laboratory Report Repository"
Description: """Laboratory Report Report Repository: a system maintaining a copy of the received Laboratory Report, to store and make it available for the consumers."""
Usage: #example

* url = "http://hl7.eu/fhir/laboratory/actor-repos-eu-lab"
* name = "LabReportRepos"
* status = #active
* type = #system
// * type = #entity
* documentation = """This actor represents the Laboratory Report Repositories. That is any system maintaining a copy of the report received, to store and make it available for the consumers."""

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/examples/lab_report/Bundle-HepatitisPanel.fsh

Instance: BundleHepatitisPanel
InstanceOf: BundleLabReportEu
Title: "Bundle: Hepatitis Panel"
Description: "Example of Laboratory Report (Bundle) including a Hepatitis Panel"
Usage: #example
* identifier.system = "http://example.org"
* identifier.value = "V1CZ454557891308174803488707671420"
* type = #document
* timestamp = "2022-10-25T14:30:00+01:00"

* entry[composition].fullUrl = "urn:uuid:4028a0b8-37fc-4491-a8e7-0f28e6fc59b4"
* entry[composition].resource = Inline-Composition-hepatitis-panel
* entry[patient].fullUrl = "urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5"
* entry[patient].resource = Inline-Patient-hepatitis-panel
* entry[diagnosticReport].fullUrl = "urn:uuid:3a743273-237a-446a-a8da-9e7521cce614"
* entry[diagnosticReport].resource = Inline-Diag-Report-hepatitis-panel
* entry[specimen].fullUrl = "urn:uuid:3c9bd730-3ff9-40ee-9da1-4f3d5c526f13"
* entry[specimen].resource = Inline-Specimen-hepatitis-panel
* entry[observation][+].fullUrl = "urn:uuid:2c72163e-b741-44a3-aff7-c52f17f7a1ba"
* entry[observation][=].resource = Inline-Observation-hepatitis-panel
* entry[observation][+].fullUrl = "urn:uuid:104a5829-565b-46a6-85d6-36751ef79a40"
* entry[observation][=].resource = Inline-Observation-hepatitis-1
* entry[observation][+].fullUrl = "urn:uuid:01b8ec35-9b20-45a4-bd41-42eeae2fd521"
* entry[observation][=].resource = Inline-Observation-hepatitis-2
* entry[observation][+].fullUrl = "urn:uuid:096e27da-0768-47e4-b33c-9f1be93e1f88"
* entry[observation][=].resource = Inline-Observation-hepatitis-3
* entry[observation][+].fullUrl = "urn:uuid:861e7b48-5497-410a-bed8-2cde814e09fc"
* entry[observation][=].resource = Inline-Observation-hepatitis-4
* entry[observation][+].fullUrl = "urn:uuid:cc96d499-3e0e-4588-a021-4fe576766112"
* entry[observation][=].resource = Inline-Observation-hepatitis-5
* entry[+].fullUrl = "urn:uuid:608b5309-2609-4d03-b6da-c758bfa1de70"
* entry[=].resource = Inline-Organization-hepatitis-panel

Instance: Inline-Composition-hepatitis-panel
InstanceOf: Composition
Usage: #inline
* id = "4028a0b8-37fc-4491-a8e7-0f28e6fc59b4"
/* * extension[+].url = $composition-diagnostic-report-reference
* extension[=].valueReference = Reference(DiagnosticReport/3a743273-237a-446a-a8da-9e7521cce614) */
* status = #final
* type = $loinc#11502-2 "Laboratory report"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* date = "2022-10-25T14:30:00+01:00"
* author[+].display = "MUDr. Aleš Procházka"
* title = "Laboratory Report Hepatitis Panel - 27 Dec, 2020 14:30"
* confidentiality = #N
* attester[+].mode = #legal
* attester[=].time = "2020-12-27T14:30:00+01:00"
* attester[=].party = Reference(urn:uuid:608b5309-2609-4d03-b6da-c758bfa1de70)
* custodian = Reference(urn:uuid:608b5309-2609-4d03-b6da-c758bfa1de70)
* section[+].title = "Hepatitis screening panel"
* section[=].code = LaboratoryLocalCS#3002989 "Hepatitis Panel, Acute with Reflex to HBsAg Confirmation and Reflex to HCV by Quantitative NAAT"
* section[=].code.text = "Acute Hepatitis Panel, reflex to confirmation"
* section[=].entry[+] = Reference(urn:uuid:2c72163e-b741-44a3-aff7-c52f17f7a1ba)

Instance: Inline-Diag-Report-hepatitis-panel
InstanceOf: DiagnosticReport-eu-lab
Usage: #inline
* id = "3a743273-237a-446a-a8da-9e7521cce614"
// * extension[DiagnosticReportCompositionR5].url = $diagnostic-report-composition-r5
* extension[DiagnosticReportCompositionR5].valueReference = Reference(urn:uuid:4028a0b8-37fc-4491-a8e7-0f28e6fc59b4)
* status = #final
/* * category = $v2-0074#MB "Microbiology" */
* code.coding[+] = $loinc#11502-2 "Laboratory report"
* code.coding[+] = LaboratoryLocalCS#3002989 "Hepatitis Panel, Acute with Reflex to HBsAg Confirmation and Reflex to HCV by Quantitative NAAT"
* code.text = "Acute Hepatitis Panel, reflex to confirmation"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* specimen = Reference(urn:uuid:3c9bd730-3ff9-40ee-9da1-4f3d5c526f13)
* result[+] = Reference(urn:uuid:2c72163e-b741-44a3-aff7-c52f17f7a1ba)

Instance: Inline-Patient-hepatitis-panel
InstanceOf: Patient
Usage: #inline
* id = "8472931c-fbd0-437b-9ed1-4f66472c78b5"
* identifier[+].type = $v2-0203#NIIP
* identifier[=].system = "urn:oid:1.2.203.24341.1.20.2"
* identifier[=].value = "740512852"
* identifier[+].system = "urn:oid:1.2.203.24341.1.20.9.1"
* identifier[=].value = "A225961454"
* identifier[+].type = $v2-0203#PPN
* identifier[=].system = "urn:oid:2.16.840.1.113883.4.330.203"
* identifier[=].value = "5484136"
* name[+].family = "Očkovaný"
* name[=].given[+] = "František"
* gender = #male
* birthDate = "2000-03-21"

Instance: Inline-Organization-hepatitis-panel
InstanceOf: Organization
Usage: #inline
* id = "608b5309-2609-4d03-b6da-c758bfa1de70"
// * identifier[+].system = "urn:oid:1.2.203" // this is a valid OID representing the Czech Republic, though it is not being recognized as valid by the IG Publisher
* identifier[+].system = "http://example.org/czech-orgs"
* identifier[=].value = "24341"
* name = "Ministry of Health of the Czech Republic"



Instance: Inline-Specimen-hepatitis-panel
InstanceOf: Specimen-uv-ips
Usage: #inline
* id = "3c9bd730-3ff9-40ee-9da1-4f3d5c526f13"
* status = #available
* type = $sct#119364003 "Serum specimen"
* collection.collectedDateTime = "2022-10-25T13:35:00+01:00"

Instance: Inline-Observation-hepatitis-panel
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "2c72163e-b741-44a3-aff7-c52f17f7a1ba"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code = LaboratoryLocalCS#3002989 "Hepatitis Panel, Acute with Reflex to HBsAg Confirmation and Reflex to HCV by Quantitative NAAT"
* code.text = "Acute Hepatitis Panel, reflex to confirmation"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* hasMember[+] = Reference(urn:uuid:104a5829-565b-46a6-85d6-36751ef79a40)
* hasMember[+] = Reference(urn:uuid:01b8ec35-9b20-45a4-bd41-42eeae2fd521)
* hasMember[+] = Reference(urn:uuid:096e27da-0768-47e4-b33c-9f1be93e1f88)
* hasMember[+] = Reference(urn:uuid:861e7b48-5497-410a-bed8-2cde814e09fc)
* hasMember[+] = Reference(urn:uuid:cc96d499-3e0e-4588-a021-4fe576766112)

Instance: Inline-Observation-hepatitis-1
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "104a5829-565b-46a6-85d6-36751ef79a40"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code.coding[+] = LaboratoryLocalCS#0020089 "Hepatitis B Surface Antigen"
* code.coding[+] = $loinc#5196-1 "Hepatitis B virus surface Ag [Presence] in Serum or Plasma by Immunoassay"
* code.text = "Hepatitis B Surface Antigen"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#260385009 "Negative"
* interpretation = $v3-ObservationInterpretation#N "Normal"
* specimen = Reference(urn:uuid:3c9bd730-3ff9-40ee-9da1-4f3d5c526f13)
* referenceRange[+].type = $referencerange-meaning#normal "Normal Range"
* referenceRange[=].text = "Negative"

Instance: Inline-Observation-hepatitis-2
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "01b8ec35-9b20-45a4-bd41-42eeae2fd521"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code.coding[+] = LaboratoryLocalCS#0020092 "Hepatitis B Core Antibody, IgM"
* code.coding[+] = $loinc#24113-3 "Hepatitis B virus core IgM Ab [Presence] in Serum or Plasma by Immunoassay"
* code.text = "Hepatitis B Core Antibody, IgM"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#260385009 "Negative"
* interpretation = $v3-ObservationInterpretation#N "Normal"
* specimen = Reference(urn:uuid:3c9bd730-3ff9-40ee-9da1-4f3d5c526f13)
* referenceRange[+].type = $referencerange-meaning#normal "Normal Range"
* referenceRange[=].text = "Negative"

Instance: Inline-Observation-hepatitis-3
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "096e27da-0768-47e4-b33c-9f1be93e1f88"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code.coding[+] = LaboratoryLocalCS#0020093 "Hepatitis A Antibody, IgM"
* code.coding[+] = $loinc#13950-1 "Hepatitis A virus IgM Ab [Presence] in Serum or Plasma by Immunoassay"
* code.text = "Hepatitis A Antibody, IgM"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#260385009 "Negative"
* interpretation = $v3-ObservationInterpretation#N "Normal"
* specimen = Reference(urn:uuid:3c9bd730-3ff9-40ee-9da1-4f3d5c526f13)
* referenceRange[+].type = $referencerange-meaning#normal "Normal Range"
* referenceRange[=].text = "Negative"

Instance: Inline-Observation-hepatitis-4
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "861e7b48-5497-410a-bed8-2cde814e09fc"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code.coding[+] = LaboratoryLocalCS#3003128 "Hepatitis C Antibody by CIA Interp"
* code.coding[+] = $loinc#13955-0 "Hepatitis C virus Ab [Presence] in Serum or Plasma by Immunoassay"
* code.text = "Hepatitis C Antibody by CIA Interp"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#10828004 "Positive"
* interpretation = $v3-ObservationInterpretation#A "Abnormal"
* specimen = Reference(urn:uuid:3c9bd730-3ff9-40ee-9da1-4f3d5c526f13)
* referenceRange[+].type = $referencerange-meaning#normal "Normal Range"
* referenceRange[=].text = "Negative"

Instance: Inline-Observation-hepatitis-5
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "cc96d499-3e0e-4588-a021-4fe576766112"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code.coding[+] = LaboratoryLocalCS#2002404 "Hepatitis C Antibody by CIA Index"
* code.coding[+] = $loinc#57006-9 "Hepatitis C virus IgG Ab [Units/volume] in Serum by Immunoassay"
* code.text = "Hepatitis C Antibody by CIA Index"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueQuantity = 9.89 $ucum#[arb'U]/mL
* valueQuantity.unit = "IV"
* interpretation = $v3-ObservationInterpretation#H "High"
* interpretation.text = "Low Positive"
* specimen = Reference(urn:uuid:3c9bd730-3ff9-40ee-9da1-4f3d5c526f13)
* referenceRange[+].high = 0.79 $ucum#[arb'U]/mL
* referenceRange[=].high.unit = "IV"
* referenceRange[=].type = $referencerange-meaning#normal "Normal Range"
* referenceRange[+].low = 0.80 $ucum#[arb'U]/mL
* referenceRange[=].low.unit = "IV"
* referenceRange[=].high = 0.99 $ucum#[arb'U]/mL
* referenceRange[=].high.unit = "IV"
* referenceRange[=].type.text = "Equivocal"
* referenceRange[+].low = 1.00 $ucum#[arb'U]/mL
* referenceRange[=].low.unit = "IV"
* referenceRange[=].high = 10.99 $ucum#[arb'U]/mL
* referenceRange[=].high.unit = "IV"
* referenceRange[=].type.text = "Low Positive"
* referenceRange[+].low = 11.00 $ucum#[arb'U]/mL
* referenceRange[=].low.unit = "IV"
* referenceRange[=].type.text = "High Positive"


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/examples/lab_report/Bundle-IT-CDA2FHIR.fsh

Instance: IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883
InstanceOf: BundleLabReportEu
Title: "Bundle: converted from CDA"
Description: "Example of Laboratory Report (Bundle) converted from a CDA report"
Usage: #example
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.2.120.4.4"
* identifier.value = "c030702.TSTSMN63A01F205H.20220325112426.TSS1Tkju"
* identifier.assigner.display = "Regione Lazio"
* type = #document
* timestamp = "2022-03-30T11:24:26+01:00"
// 0
* entry[composition].fullUrl = "urn:uuid:26032a57-083a-4ddf-b019-e566ae02f740"
* entry[composition].resource = Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-1
* entry[patient].fullUrl = "urn:uuid:dc2b606f-3cf7-4711-a2ff-52da04b89e04"
* entry[patient].resource = dc2b606f-3cf7-4711-a2ff-52da04b89e04
* entry[diagnosticReport].fullUrl = "urn:uuid:b8c9663d-2c2b-4a5a-99ea-17eae127fc60"
* entry[diagnosticReport].resource = Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-18
* entry[specimen].fullUrl = "urn:uuid:5837e9bf-8a2b-43c3-bec8-d68dbd7fa7fb"
* entry[specimen].resource = Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-3
* entry[observation][+].fullUrl = "urn:uuid:763f7902-8103-4d10-8bd1-546a726d43ee"
* entry[observation][=].resource = Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-19
// 5
* entry[+].fullUrl = "urn:uuid:ab279a0b-320f-483b-9a5d-f1f7e8ceacb2"
* entry[=].resource = ab279a0b-320f-483b-9a5d-f1f7e8ceacb2
* entry[+].fullUrl = "urn:uuid:84b2e517-abc2-4268-975d-b12fa8174d30"
* entry[=].resource = Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-5
* entry[+].fullUrl = "urn:uuid:68740937-f732-4ff9-a2e4-bf502d2d125f"
* entry[=].resource = Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-6
* entry[+].fullUrl = "urn:uuid:a59d2bf2-7d6c-49a5-9ceb-c3f165ebd20d"
* entry[=].resource = a59d2bf2-7d6c-49a5-9ceb-c3f165ebd20d
* entry[+].fullUrl = "urn:uuid:0bbabe57-7c43-4211-9e19-81fcec65686d"
* entry[=].resource = Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-7
// 10
* entry[+].fullUrl = "urn:uuid:a199dc05-af73-44a0-a218-bda5dec557ce"
* entry[=].resource = a199dc05-af73-44a0-a218-bda5dec557ce
* entry[+].fullUrl = "urn:uuid:b2ba9ea7-8098-4f7a-a2a5-c6a51a35c61c"
* entry[=].resource = b2ba9ea7-8098-4f7a-a2a5-c6a51a35c61c
* entry[+].fullUrl = "urn:uuid:13792187-4721-4309-a8a4-4a57ffb4e6a1"
* entry[=].resource = Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-8
* entry[+].fullUrl = "urn:uuid:852cec21-4ff9-4cea-b86d-00de92b46894"
* entry[=].resource = Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-9
* entry[+].fullUrl = "urn:uuid:c20acec2-5d67-4c05-b35e-d528c35f9ed1"
* entry[=].resource = c20acec2-5d67-4c05-b35e-d528c35f9ed1
// 15
* entry[+].fullUrl = "urn:uuid:f7fa317a-66ac-4adf-9199-9bfe1e2eaa21"
* entry[=].resource = f7fa317a-66ac-4adf-9199-9bfe1e2eaa21
* entry[+].fullUrl = "urn:uuid:c1f46c0d-a0f9-41d7-8a33-15ffcf954354"
* entry[=].resource = c1f46c0d-a0f9-41d7-8a33-15ffcf954354
* entry[+].fullUrl = "urn:uuid:1d4cbcd1-e0d3-49b6-92d8-1893da8d08e1"
* entry[=].resource = Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-10
* entry[+].fullUrl = "urn:uuid:1b4b120e-0371-4878-b4c9-b69434e84c72"
* entry[=].resource = Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-11
* entry[+].fullUrl = "urn:uuid:c1bb11b3-87e6-4682-a214-10975487b643"
* entry[=].resource = c1bb11b3-87e6-4682-a214-10975487b643
// 20
* entry[+].fullUrl = "urn:uuid:508f4b29-09ca-4c94-8343-657f1923303a"
* entry[=].resource = Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-12
* entry[+].fullUrl = "urn:uuid:206fa15d-51ae-4f3d-b8d0-71ee6290ff52"
* entry[=].resource = Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-13
* entry[+].fullUrl = "urn:uuid:83ef1c55-566b-4547-affd-f6d7b993a094"
* entry[=].resource = Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-14
* entry[+].fullUrl = "urn:uuid:1a3064fd-9658-47f1-98f3-3f368761a9da"
* entry[=].resource = Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-15
* entry[+].fullUrl = "urn:uuid:6373bbff-d136-4cfe-a7bc-fab4bff2fc21"
* entry[=].resource = Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-16
// 25
* entry[+].fullUrl = "urn:uuid:0a0cfca8-f1d3-4ed5-8b04-0d6cdcee3a17"
* entry[=].resource = Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-17
* entry[+].fullUrl = "urn:uuid:d5f71fc0-6075-4fed-ad99-b3c609d27f6b"
* entry[=].resource = d5f71fc0-6075-4fed-ad99-b3c609d27f6b
* entry[+].fullUrl = "urn:uuid:195a7abc-d109-404a-9dc7-ad2e80bafc8a"
* entry[=].resource = Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-2
* entry[+].fullUrl = "urn:uuid:88868d3e-7ab1-4ee5-983e-b979c4971f5c"
* entry[=].resource = Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-4

Instance: Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-1
InstanceOf: CompositionLabReportEu
Usage: #inline
* id = "26032a57-083a-4ddf-b019-e566ae02f740"
* language = #it-IT
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.2.120.4.4"
* identifier.value = "c030702.TSTSMN63A01F205H.20220325112426.TSS1Tkju"
* identifier.assigner.display = "Regione Lazio"
* status = #final
* category[studyType] = $loinc#18719-5 "Chemistry studies (set)"
* type = http://loinc.org#11502-2 "Laboratory report"
* type.text = "Referto di laboratorio"
* subject = Reference(urn:uuid:dc2b606f-3cf7-4711-a2ff-52da04b89e04)
* encounter = Reference(urn:uuid:195a7abc-d109-404a-9dc7-ad2e80bafc8a)
* date = "2022-03-30T11:24:26+01:00"
* author[+] = Reference(urn:uuid:88868d3e-7ab1-4ee5-983e-b979c4971f5c)
* author[+] = Reference(urn:uuid:84b2e517-abc2-4268-975d-b12fa8174d30)
* title = "REFERTO DI LABORATORIO"
* confidentiality = #N
* attester[+].mode = #professional
* attester[=].party = Reference(urn:uuid:0bbabe57-7c43-4211-9e19-81fcec65686d)
* attester[+].mode = #legal
* attester[=].time = "2022-03-25T11:00:00+01:00"
* attester[=].party = Reference(urn:uuid:a199dc05-af73-44a0-a218-bda5dec557ce)
* attester[+].mode = #professional
* attester[=].time = "2022-03-25T11:00:00+01:00"
* attester[=].party = Reference(urn:uuid:13792187-4721-4309-a8a4-4a57ffb4e6a1)
* custodian = Reference(urn:uuid:a59d2bf2-7d6c-49a5-9ceb-c3f165ebd20d)
* event.period.start = "2022-03-24T11:24:26+01:00"
* event.detail = Reference(urn:uuid:1b4b120e-0371-4878-b4c9-b69434e84c72)
* section.title = "Esami delle Urine"
* section.code = http://loinc.org#18729-4 "Urinalysis studies (set)"
* section.code.text = "ESAMI DELLE URINE"
* section.section.title = "Albumina nelle Urine"
* section.section.code.coding[+] = http://loinc.org#14957-5 "Microalbumin [Mass/volume] in Urine"
* section.section.code.coding[+] = urn:oid:2.16.840.1.113883.2.9.2.30.6.11#0090334.02 "Microalbumina"
* section.section.code.text = "Microalbumin Massa/Volume in Urine"
* section.section.text.status = #generated
* section.section.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><ul><li><table id=\"nota1\"><thead><tr><th>Esame</th><th>Metodo utilizzato per l'esame</th><th>Materiale utilizzato per l'esame</th><th>Risultato dell'esame</th><th>Commenti e note</th><th>Unità di Misura</th><th>Range di Riferimento</th><th>Criteri per il range di riferimento</th><th>Interpretazione</th><th>Allegati multimediali</th></tr></thead><tbody><tr><td>Microalbumina massa/volume in urine</td><td/><td>Urine</td><td>16</td><td/><td>mg/L</td><td> 0 - 20 </td><td/><td>N</td><td/></tr></tbody></table></li></ul></div>"
* section.section.entry = Reference(urn:uuid:763f7902-8103-4d10-8bd1-546a726d43ee)


Instance: Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-18
InstanceOf: DiagnosticReportLabEu
Usage: #inline
* id = "b8c9663d-2c2b-4a5a-99ea-17eae127fc60"
* extension[DiagnosticReportCompositionR5].valueReference = Reference(urn:uuid:26032a57-083a-4ddf-b019-e566ae02f740)
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.2.120.4.4"
* identifier.value = "c030702.TSTSMN63A01F205H.20220325112426.TSS1Tkju"
* identifier.assigner.display = "Regione Lazio"
* status = #registered
/* * category = $v2-0074#LAB "Laboratory" */
* category[studyType] = $loinc#18719-5 "Chemistry studies (set)"
* code = http://loinc.org#11502-2 "Laboratory report"
* code.text = "Referto di laboratorio"
* subject = Reference(urn:uuid:dc2b606f-3cf7-4711-a2ff-52da04b89e04)
* encounter = Reference(urn:uuid:195a7abc-d109-404a-9dc7-ad2e80bafc8a)
* specimen = Reference(urn:uuid:5837e9bf-8a2b-43c3-bec8-d68dbd7fa7fb)
* result = Reference(urn:uuid:763f7902-8103-4d10-8bd1-546a726d43ee)


Instance: dc2b606f-3cf7-4711-a2ff-52da04b89e04
InstanceOf: Patient
Usage: #inline
* extension.url = "http://hl7.org/fhir/StructureDefinition/patient-birthPlace"
* extension.valueAddress.line = "Via voltri 3"
/* * extension.valueAddress.line.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-censusTract"
* extension.valueAddress.line.extension.valueString = "058091" */
* extension.valueAddress.city = "Roma"
* extension.valueAddress.district = "RM"
* extension.valueAddress.state = "120"
* extension.valueAddress.country = "100"
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.3.2"
* identifier.value = "TKLEYP93Y27Z315J"
* identifier.assigner.display = "MEF"
* name.family = "Verdi"
* name.given = "Giuseppe"
* telecom[+].system = #email
* telecom[=].value = "giuseppe.verdi@gmail.com"
* telecom[=].use = #home
* telecom[+].system = #phone
* telecom[=].value = "33224456"
* telecom[=].use = #mobile
* gender = #male
* birthDate = "1993-06-19"
* address[+].use = #home
* address[=].line = "Via Aurora 12"
/* * address[=].line.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-censusTract"
* address[=].line.extension.valueString = "058091" */
* address[=].city = "Roma"
* address[=].district = "RM"
* address[=].state = "120"
* address[=].postalCode = "00187"
* address[=].country = "100"
* address[+].use = #home
* address[=].line = "Via Canevari 12B"
/* * address[=].line.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-censusTract"
* address[=].line.extension.valueString = "058091" */
* address[=].city = "Roma"
* address[=].district = "RM"
* address[=].state = "120"
* address[=].postalCode = "00138"
* address[=].country = "100"

Instance: Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-2
InstanceOf: Encounter
Usage: #inline
* id = "195a7abc-d109-404a-9dc7-ad2e80bafc8a"
* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"
* subject = Reference(urn:uuid:dc2b606f-3cf7-4711-a2ff-52da04b89e04)
* basedOn = Reference(urn:uuid:1d4cbcd1-e0d3-49b6-92d8-1893da8d08e1)
* participant[+].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#REF
* participant[=].period.start = "2022-03-20T11:00:00+01:00"
* participant[=].individual = Reference(urn:uuid:c20acec2-5d67-4c05-b35e-d528c35f9ed1)
* participant[+].individual = Reference(urn:uuid:83ef1c55-566b-4547-affd-f6d7b993a094)
* period.start = "2022-03-30T11:24:26+01:00"
* location.location = Reference(urn:uuid:6373bbff-d136-4cfe-a7bc-fab4bff2fc21)

Instance: Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-3
InstanceOf: Specimen
Usage: #inline
* id = "5837e9bf-8a2b-43c3-bec8-d68dbd7fa7fb"
* type = urn:oid:2.16.840.1.113883.5.129#UR "Urine"
* subject = Reference(urn:uuid:dc2b606f-3cf7-4711-a2ff-52da04b89e04)

Instance: Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-4
InstanceOf: PractitionerRole
Usage: #inline
* id = "88868d3e-7ab1-4ee5-983e-b979c4971f5c"
* practitioner = Reference(urn:uuid:ab279a0b-320f-483b-9a5d-f1f7e8ceacb2)

Instance: ab279a0b-320f-483b-9a5d-f1f7e8ceacb2
InstanceOf: Practitioner
Usage: #inline
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.3.2"
* identifier.value = "MTCORV58E63L294G"
* identifier.assigner.display = "MEF"
* name.family = "Cervone"
* name.given = "Matteo"
* name.prefix = "Dr"
* telecom[+].system = #email
* telecom[=].value = "matteo.cervone@gmail.it"
* telecom[=].use = #home
* telecom[+].system = #email
* telecom[=].value = "matteo.cervone@pec.it"
* telecom[=].use = #work
* telecom[+].system = #phone
* telecom[=].value = "3478129873"
* telecom[=].use = #mobile
* address.line = "Via Milano 7"
* address.line.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-censusTract"
* address.line.extension.valueString = "058091"
* address.city = "Roma"
* address.district = "RM"
* address.state = "120"
* address.postalCode = "00184"
* address.country = "100"

Instance: Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-5
InstanceOf: PractitionerRole
Usage: #inline
* id = "84b2e517-abc2-4268-975d-b12fa8174d30"
* practitioner = Reference(urn:uuid:68740937-f732-4ff9-a2e4-bf502d2d125f)

Instance: Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-6
InstanceOf: Practitioner
Usage: #inline
* id = "68740937-f732-4ff9-a2e4-bf502d2d125f"
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.3.2"
* identifier.value = "FPSSBN85G54D398H"
* identifier.assigner.display = "MEF"
* name.family = "Mancusi"
* name.given = "Filippo"

Instance: a59d2bf2-7d6c-49a5-9ceb-c3f165ebd20d
InstanceOf: Organization
Usage: #inline
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.1.2"
* identifier.value = "120148"
* identifier.assigner.display = "Ministero della Salute"
* name = "SAN RAFFAELE NOMENTANA"
* telecom.system = #phone
* telecom.value = "390 666 0581"
* telecom.use = #work
* address.line = "Via Emilio Praga 39"
* address.line.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-censusTract"
* address.line.extension.valueString = "058091"
* address.city = "Roma"
* address.district = "RM"
* address.state = "120"
* address.postalCode = "00137"
* address.country = "100"

Instance: Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-7
InstanceOf: Practitioner
Usage: #inline
* id = "0bbabe57-7c43-4211-9e19-81fcec65686d"
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.3.2"
* identifier.value = "MURRSI88Y67R012G"
* identifier.assigner.display = "MEF"
* name.family = "Rossi"
* name.given = "Maura"
* telecom.system = #phone
* telecom.value = "062866794"
* telecom.use = #work

Instance: a199dc05-af73-44a0-a218-bda5dec557ce
InstanceOf: PractitionerRole
Usage: #inline
* practitioner = Reference(urn:uuid:b2ba9ea7-8098-4f7a-a2a5-c6a51a35c61c)

Instance: b2ba9ea7-8098-4f7a-a2a5-c6a51a35c61c
InstanceOf: Practitioner
Usage: #inline
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.3.2"
* identifier.value = "GPSDGK80E76C765V"
* identifier.assigner.display = "MEF"
* name.family = "Righi"
* name.given = "Federico"
* name.prefix = "Dttr."
* telecom[+].system = #email
* telecom[=].value = "righi.federico@gmail.com"
* telecom[=].use = #home
* telecom[+].system = #phone
* telecom[=].value = "330987986"
* telecom[=].use = #mobile
* address.line = "Via Corvetto 3"
* address.line.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-censusTract"
* address.line.extension.valueString = "058091"
* address.city = "Roma"
* address.district = "RM"
* address.state = "120"
* address.postalCode = "00164"
* address.country = "100"

Instance: Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-8
InstanceOf: PractitionerRole
Usage: #inline
* id = "13792187-4721-4309-a8a4-4a57ffb4e6a1"
* practitioner = Reference(urn:uuid:852cec21-4ff9-4cea-b86d-00de92b46894)

Instance: Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-9
InstanceOf: Practitioner
Usage: #inline
* id = "852cec21-4ff9-4cea-b86d-00de92b46894"
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.3.2"
* identifier.value = "RBTAMA67H99H467D"
* identifier.assigner.display = "MEF"
* name.family = "Rossi"
* name.given = "Roberta"
* telecom[+].system = #email
* telecom[=].value = "maggi.roberta@gmail.com"
* telecom[=].use = #home
* telecom[+].system = #phone
* telecom[=].value = "22998276800"
* telecom[=].use = #home
* address.line = "Via Corvetto 3"
* address.line.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-censusTract"
* address.line.extension.valueString = "058091"
* address.city = "Roma"
* address.district = "RM"
* address.state = "120"
* address.postalCode = "00164"
* address.country = "100"

Instance: c20acec2-5d67-4c05-b35e-d528c35f9ed1
InstanceOf: PractitionerRole
Usage: #inline
* practitioner = Reference(urn:uuid:f7fa317a-66ac-4adf-9199-9bfe1e2eaa21)
* organization = Reference(urn:uuid:c1f46c0d-a0f9-41d7-8a33-15ffcf954354)
* code = urn:oid:2.16.840.1.113883.2.9.5.1.88#PRE

Instance: f7fa317a-66ac-4adf-9199-9bfe1e2eaa21
InstanceOf: Practitioner
Usage: #inline
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.3.2"
* identifier.value = "STVMG77F45N079MF"
* identifier.assigner.display = "MEF"
* name.family = "Maggi"
* name.given = "Silvia"
* telecom.system = #email
* telecom.value = "maggi.silvia@gmail.com"
* telecom.use = #home
* address.line = "Via Vittorio Veneto 3"
* address.line.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-censusTract"
* address.line.extension.valueString = "058091"
* address.city = "Roma"
* address.district = "RM"
* address.state = "120"
* address.postalCode = "00187"
* address.country = "100"

Instance: c1f46c0d-a0f9-41d7-8a33-15ffcf954354
InstanceOf: Organization
Usage: #inline
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.1.2"
* identifier.value = "120148"
* identifier.assigner.display = "Ministero della Salute"
* name = "SAN RAFFAELE NOMENTANA"
* telecom.system = #phone
* telecom.value = "390 666 0581"
* telecom.use = #work
* address.line = "Via Emilio Praga 39"
* address.line.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-censusTract"
* address.line.extension.valueString = "058091"
* address.city = "Roma"
* address.district = "RM"
* address.state = "120"
* address.postalCode = "00137"
* address.country = "100"

Instance: Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-10
InstanceOf: ServiceRequestLabEu
Usage: #inline
* id = "1d4cbcd1-e0d3-49b6-92d8-1893da8d08e1"
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.3.9"
* identifier.value = "[NRE]"
* identifier.assigner.display = "Ministero delle Finanze"
* status = #active
* intent = #order
* category = $sct#108252007 "Laboratory procedure"
* priority = #asap
* code = http://loinc.org#14957-5 "Microalbumin [Mass/volume] in Urine"
* code.text = "Microalbumin Massa/Volume in Urine"
* subject = Reference(urn:uuid:dc2b606f-3cf7-4711-a2ff-52da04b89e04)
* encounter = Reference(urn:uuid:195a7abc-d109-404a-9dc7-ad2e80bafc8a)

Instance: Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-11
InstanceOf: PractitionerRole
Usage: #inline
* id = "1b4b120e-0371-4878-b4c9-b69434e84c72"
* practitioner = Reference(urn:uuid:c1bb11b3-87e6-4682-a214-10975487b643)
* organization = Reference(urn:uuid:508f4b29-09ca-4c94-8343-657f1923303a)

Instance: c1bb11b3-87e6-4682-a214-10975487b643
InstanceOf: Practitioner
Usage: #inline
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.3.2"
* identifier.value = "MRSSIO79H59Z317K"
* identifier.assigner.display = "MEF"
* name.family = "Rossi"
* name.given = "Mario"

Instance: Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-12
InstanceOf: Organization
Usage: #inline
* id = "508f4b29-09ca-4c94-8343-657f1923303a"
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.1.3"
* identifier.value = "327700102"
* identifier.assigner.display = "Ministero della Salute"
* name = "Nuovo Ospedale S.Agostino (MO)"
* partOf = Reference(urn:uuid:206fa15d-51ae-4f3d-b8d0-71ee6290ff52)

Instance: Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-13
InstanceOf: Organization
Usage: #inline
* id = "206fa15d-51ae-4f3d-b8d0-71ee6290ff52"
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.1.1"
* identifier.value = "080105"
* identifier.assigner.display = "Ministero della Salute"

Instance: Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-14
InstanceOf: PractitionerRole
Usage: #inline
* id = "83ef1c55-566b-4547-affd-f6d7b993a094"
* practitioner = Reference(urn:uuid:1a3064fd-9658-47f1-98f3-3f368761a9da)

Instance: Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-15
InstanceOf: Practitioner
Usage: #inline
* id = "1a3064fd-9658-47f1-98f3-3f368761a9da"
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.3.2"
* identifier.value = "SVATPR85Y37T079B"
* identifier.assigner.display = "MEF"
* name.family = "Turri"
* name.given = "Silvia"

Instance: Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-16
InstanceOf: Location
Usage: #inline
* id = "6373bbff-d136-4cfe-a7bc-fab4bff2fc21"
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.1.6"
* identifier.value = "XXX"
* identifier.assigner.display = "Ministero della Salute"
* managingOrganization = Reference(urn:uuid:0a0cfca8-f1d3-4ed5-8b04-0d6cdcee3a17)

Instance: Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-17
InstanceOf: Organization
Usage: #inline
* id = "0a0cfca8-f1d3-4ed5-8b04-0d6cdcee3a17"
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.1.2"
* identifier.value = "XXX"
* identifier.assigner.display = "Ministero della Salute"
* name = "[nome_presidio]"
* telecom.system = #phone
* telecom.value = "0115678965"
* telecom.use = #work
* partOf = Reference(urn:uuid:d5f71fc0-6075-4fed-ad99-b3c609d27f6b)

Instance: d5f71fc0-6075-4fed-ad99-b3c609d27f6b
InstanceOf: Organization
Usage: #inline
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.1.1"
* identifier.value = "XXX"
* identifier.assigner.display = "Ministero della Salute"



Instance: Inline-Instance-for-IT-CDA2FHIR-17e2cad1-c3e3-4901-adb1-c35a0b82b883-19
InstanceOf: Observation
Usage: #inline
* id = "763f7902-8103-4d10-8bd1-546a726d43ee"
* status = #final
* category = $observation-category#laboratory
* code.coding[+] = http://loinc.org#14957-5 "Microalbumin [Mass/volume] in Urine"
* code.coding[+] = urn:oid:2.16.840.1.113883.2.9.2.30.6.11#0090334.02 "Albumina nelle urine"
* code.text = "Microalbumin Massa/Volume in Urine"
* subject = Reference(urn:uuid:dc2b606f-3cf7-4711-a2ff-52da04b89e04)
* encounter = Reference(urn:uuid:195a7abc-d109-404a-9dc7-ad2e80bafc8a)
* effectiveDateTime = "2022-03-30T11:24:26+01:00"
* valueQuantity.value = 16
* valueQuantity.system = $ucum
* valueQuantity.code = #mg/L
* valueQuantity.unit = "mg/L"
* performer = Reference(urn:uuid:a199dc05-af73-44a0-a218-bda5dec557ce)
* interpretation = $v3-ObservationInterpretation#N "Normal"
* specimen = Reference(urn:uuid:5837e9bf-8a2b-43c3-bec8-d68dbd7fa7fb)
* referenceRange.low.value = 0
* referenceRange.low.unit = "mg/L"
* referenceRange.high.value = 20
* referenceRange.high.unit = "mg/L"
* referenceRange.type = $v3-ObservationInterpretation#N "Normal"

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/examples/lab_report/Bundle-MicroCultureSuscLabResultDetailed.fsh

Instance: BundleLabResultMicroCultureSusc
InstanceOf: BundleLabReportEu
Title: "Bundle: Microbiology Culture + Susceptibility"
Description: "Example of Laboratory Report (Bundle) with Microbiology Culture plus Susceptibility Results"
Usage: #example
* identifier.system = "http://example.org"
* identifier.value = "V1CZ454557891308174803488707671420"
* type = #document
* timestamp = "2022-10-25T14:30:00+01:00"
* entry[composition].fullUrl = "urn:uuid:4789a3ee-92b1-41b2-9b97-83daacf2a239"
* entry[composition].resource = Inline-Composition-micro
* entry[patient].fullUrl = "urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b"
* entry[patient].resource = Inline-Patient-micro
* entry[diagnosticReport].fullUrl = "urn:uuid:b864303b-91ab-4e29-ad74-31a7d6566875"
* entry[diagnosticReport].resource = Inline-Diag-Report-micro
* entry[specimen].fullUrl = "urn:uuid:bab0016e-1800-4e54-b595-72bd9041ffbc"
* entry[specimen].resource = Inline-Specimen-micro
* entry[observation][+].fullUrl = "urn:uuid:40278a69-87aa-470f-a38f-bff1e8aee175"
* entry[observation][=].resource = Inline-Observation-gram-stain
* entry[observation][+].fullUrl = "urn:uuid:1097929f-890e-4e27-a31d-58599f3e2479"
* entry[observation][=].resource = Inline-Observation-wbc
* entry[observation][+].fullUrl = "urn:uuid:fcf220c3-7f3e-44f8-b669-48552a20fa0a"
* entry[observation][=].resource = Inline-Observation-gs-org1
* entry[observation][+].fullUrl = "urn:uuid:2cecbd1e-4695-46dc-adf8-3ed3b95c0c1e"
* entry[observation][=].resource = Inline-Observation-gs-org1-quant
* entry[observation][+].fullUrl = "urn:uuid:331d513e-a57f-4464-9eec-25533aeb6d06"
* entry[observation][=].resource = Inline-Observation-gs-org2
* entry[observation][+].fullUrl = "urn:uuid:931c6459-0fb0-4f02-8268-08e6d94a8f5c"
* entry[observation][=].resource = Inline-Observation-gs-org2-quant
* entry[observation][+].fullUrl = "urn:uuid:8754019d-256b-4df9-94f2-f80c07e08d47"
* entry[observation][=].resource = Inline-Observation-aerobic-culture
* entry[observation][+].fullUrl = "urn:uuid:083ee3df-1381-4ed2-849f-77808eb81a36"
* entry[observation][=].resource = Inline-Observation-org-id1
* entry[observation][+].fullUrl = "urn:uuid:758d2270-a997-4a8f-872f-b3fbaef209fa"
* entry[observation][=].resource = Inline-Observation-org-id1-growth
* entry[observation][+].fullUrl = "urn:uuid:61f8e930-46e0-41ab-9448-0d1dc74925df"
* entry[observation][=].resource = Inline-Observation-org-id1-susc-panel
* entry[observation][+].fullUrl = "urn:uuid:85230b86-9b90-4faf-a750-d5fa82520ce9"
* entry[observation][=].resource = Inline-Observation-org-id1-susc-1
* entry[observation][+].fullUrl = "urn:uuid:1fb64f47-4272-43ae-a119-c3b4c3367829"
* entry[observation][=].resource = Inline-Observation-org-id1-susc-2
* entry[observation][+].fullUrl = "urn:uuid:af249f79-f487-4533-9935-d19ab7043724"
* entry[observation][=].resource = Inline-Observation-org-id1-susc-3
* entry[observation][+].fullUrl = "urn:uuid:a4469ca9-d0be-4c58-853a-44cea24484b8"
* entry[observation][=].resource = Inline-Observation-org-id1-susc-4
* entry[observation][+].fullUrl = "urn:uuid:d49839fe-515c-44b6-8d19-3cc5d48feb49"
* entry[observation][=].resource = Inline-Observation-org-id2
* entry[observation][+].fullUrl = "urn:uuid:1ada4aeb-37cd-4d76-9815-46f627f5036c"
* entry[observation][=].resource = Inline-Observation-org-id2-growth
* entry[observation][+].fullUrl = "urn:uuid:d1636a51-d6c7-48de-9de6-29d741c96937"
* entry[observation][=].resource = Inline-Observation-org-id2-susc-panel
* entry[observation][+].fullUrl = "urn:uuid:7b52c241-226a-43d3-ba6a-f2ca18d5b0dd"
* entry[observation][=].resource = Inline-Observation-org-id2-susc-1
* entry[observation][+].fullUrl = "urn:uuid:3923e71d-31b0-49d3-94f0-2c311600e54d"
* entry[observation][=].resource = Inline-Observation-org-id2-susc-2
* entry[observation][+].fullUrl = "urn:uuid:66e76861-53ed-4560-aa54-2efa5b4aff64"
* entry[observation][=].resource = Inline-Observation-org-id2-susc-3
* entry[observation][+].fullUrl = "urn:uuid:5601b27d-69a7-44eb-be1a-af632aa54109"
* entry[observation][=].resource = Inline-Observation-org-id2-susc-4
* entry[observation][+].fullUrl = "urn:uuid:5408f7d9-e6a2-492c-8ae3-dbf96b40bf6e"
* entry[observation][=].resource = Inline-Observation-anaerobic-culture
* entry[+].fullUrl = "urn:uuid:1e139f41-4d0f-43dd-ad5a-98003c520349"
* entry[=].resource = Inline-Organization-micro

Instance: Inline-Diag-Report-micro
InstanceOf: DiagnosticReportLabEu
Usage: #inline
* id = "b864303b-91ab-4e29-ad74-31a7d6566875"
* extension[DiagnosticReportCompositionR5].url = $diagnostic-report-composition-r5
* extension[DiagnosticReportCompositionR5].valueReference = Reference(urn:uuid:4789a3ee-92b1-41b2-9b97-83daacf2a239)
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:3f69e0a5-2177-4540-baab-7a5d0877428f"
* status = #final
* category[studyType] = $loinc#26436-6 "Laboratory Studies (set)" // corrected to match lab composition category specificication
* code = $loinc#11502-2 "Laboratory report"
* code.text = "Bacterial Aerobic & Anaerobic Culture & Susceptibility"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* specimen = Reference(urn:uuid:bab0016e-1800-4e54-b595-72bd9041ffbc)
* result[+] = Reference(urn:uuid:40278a69-87aa-470f-a38f-bff1e8aee175) // Inline-Observation-gram-stain
* result[+] = Reference(urn:uuid:8754019d-256b-4df9-94f2-f80c07e08d47) // Inline-Observation-aerobic-culture
* result[+] = Reference(urn:uuid:5408f7d9-e6a2-492c-8ae3-dbf96b40bf6e) // Inline-Observation-anaerobic-culture

Instance: Inline-Composition-micro
InstanceOf: CompositionLabReportEu
Usage: #inline
* id = "4789a3ee-92b1-41b2-9b97-83daacf2a239"
/* * extension[+].url = $composition-diagnostic-report-reference
* extension[=].valueReference = Reference(DiagnosticReport/b864303b-91ab-4e29-ad74-31a7d6566875) */
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:3f69e0a5-2177-4540-baab-7a5d0877428f"
* status = #final
//* category = $v2-0074#LAB "Laboratory"
* category[studyType] = $loinc#26436-6 "Laboratory Studies (set)" // corrected to match lab composition category specificication
* type = $loinc#11502-2 "Laboratory report"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* date = "2022-10-25T14:30:00+01:00"
* author[+].display = "MUDr. Aleš Procházka"
* title = "Laboratory Report Bacterial Aerobic & Anaerobic Culture and Susceptibility - 27 Dec, 2020 14:30"
* confidentiality = #N
* attester[+].mode = #legal
* attester[=].time = "2020-12-27T14:30:00+01:00"
* attester[=].party = Reference(urn:uuid:1e139f41-4d0f-43dd-ad5a-98003c520349)
* custodian = Reference(urn:uuid:1e139f41-4d0f-43dd-ad5a-98003c520349)
* section[lab-subsections].title = "Bacterial Aerobic & Anaerobic Culture & Susceptibility"
* section[lab-subsections].code = $loinc#18725-2 "Microbiology studies (set)"
* section[lab-subsections].section[+].code.text = "Gram Stain"
* section[lab-subsections].section[=].title = "Gram Stain" // Title to be checked
* section[lab-subsections].section[=].entry = Reference(urn:uuid:40278a69-87aa-470f-a38f-bff1e8aee175) // Inline-Observation-gram-stain
* section[lab-subsections].section[+].code.text = "Aerobic Culture"
* section[lab-subsections].section[=].title = "Aerobic Culture" // Title to be checked
* section[lab-subsections].section[=].entry = Reference(urn:uuid:8754019d-256b-4df9-94f2-f80c07e08d47) // Inline-Observation-aerobic-culture Inline-Observation-aerobic-culture
* section[lab-subsections].section[+].code.text = "Anaerobic Culture"
* section[lab-subsections].section[=].title = "Anaerobic Culture" // Title to be checked
* section[lab-subsections].section[=].entry = Reference(urn:uuid:5408f7d9-e6a2-492c-8ae3-dbf96b40bf6e) // Inline-Observation-anaerobic-culture Inline-Observation-anaerobic-culture

Instance: Inline-Patient-micro
InstanceOf: Patient
Usage: #inline
* id = "5bb42c3f-56fb-4bbc-b939-73910a6cce3b"
* identifier[+].type = $v2-0203#NIIP
* identifier[=].system = "urn:oid:1.2.203.24341.1.20.2"
* identifier[=].value = "740512852"
* identifier[+].system = "urn:oid:1.2.203.24341.1.20.9.1"
* identifier[=].value = "A225961454"
* identifier[+].type = $v2-0203#PPN
* identifier[=].system = "urn:oid:2.16.840.1.113883.4.330.203"
* identifier[=].value = "5484136"
* name[+].family = "Očkovaný"
* name[=].given[+] = "František"
* gender = #male
* birthDate = "2000-03-21"

Instance: Inline-Organization-micro
InstanceOf: Organization
Usage: #inline
* id = "1e139f41-4d0f-43dd-ad5a-98003c520349"
// * identifier[+].system = "urn:oid:1.2.203" // this is a valid OID representing the Czech Republic, though it is not being recognized as valid by the IG Publisher
* identifier[+].system = "http://example.org/czech-orgs"
* identifier[=].value = "24341"
* name = "Ministry of Health of the Czech Republic"



Instance: Inline-Specimen-micro
InstanceOf: SpecimenEu
Usage: #inline
* id = "bab0016e-1800-4e54-b595-72bd9041ffbc"
* status = #available
* type = $sct#119365002 "Specimen from wound"
* collection.collectedDateTime = "2022-10-25T13:35:00+01:00"

Instance: Inline-Observation-gram-stain
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "40278a69-87aa-470f-a38f-bff1e8aee175"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code.text = "Gram Stain"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* hasMember[+] = Reference(urn:uuid:1097929f-890e-4e27-a31d-58599f3e2479) // Inline-Observation-wbc
* hasMember[+] = Reference(urn:uuid:fcf220c3-7f3e-44f8-b669-48552a20fa0a) // Inline-Observation-gs-org1
* hasMember[+] = Reference(urn:uuid:331d513e-a57f-4464-9eec-25533aeb6d06) // Inline-Observation-gs-org2

Instance: Inline-Observation-wbc
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "1097929f-890e-4e27-a31d-58599f3e2479"
* status = #final
* category[laboratory] = $observation-category#laboratory
* code = $loinc#72163-9 "Leukocytes [Presence] in Specimen by Gram stain"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#2667000 "Absent"
* valueCodeableConcept.text = "None observed"

Instance: Inline-Observation-gs-org1
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "fcf220c3-7f3e-44f8-b669-48552a20fa0a"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code = $loinc#664-3 "Microscopic observation [Identifier] in Specimen by Gram stain"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#70003006 "Gram-positive cocci in clusters"
* hasMember[+] = Reference(urn:uuid:2cecbd1e-4695-46dc-adf8-3ed3b95c0c1e) // Inline-Observation-gs-org1-quant

Instance: Inline-Observation-gs-org1-quant
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "2cecbd1e-4695-46dc-adf8-3ed3b95c0c1e"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code.text = "Observed Quantity"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#441614007 "Present + out of +++"
* valueCodeableConcept.text = "+"

Instance: Inline-Observation-gs-org2
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "331d513e-a57f-4464-9eec-25533aeb6d06"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code = $loinc#664-3 "Microscopic observation [Identifier] in Specimen by Gram stain"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#87172008 "Gram-negative rods"
* hasMember[+] = Reference(urn:uuid:931c6459-0fb0-4f02-8268-08e6d94a8f5c) // Inline-Observation-gs-org2-quant

Instance: Inline-Observation-gs-org2-quant
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "931c6459-0fb0-4f02-8268-08e6d94a8f5c"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code.text = "Observed Quantity"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#441517005 "Present ++ out of +++"
* valueCodeableConcept.text = "++"

Instance: Inline-Observation-aerobic-culture
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "8754019d-256b-4df9-94f2-f80c07e08d47"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code.text = "Aerobic Culture"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* hasMember[+] = Reference(urn:uuid:083ee3df-1381-4ed2-849f-77808eb81a36) // Inline-Observation-org-id1
* hasMember[+] = Reference(urn:uuid:d49839fe-515c-44b6-8d19-3cc5d48feb49) // Inline-Observation-org-id2

Instance: Inline-Observation-org-id1
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "083ee3df-1381-4ed2-849f-77808eb81a36"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code = $loinc#634-6 "Bacteria identified in Specimen by Aerobe culture"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#3092008 "Staphylococcus aureus"
* hasMember[+] = Reference(urn:uuid:758d2270-a997-4a8f-872f-b3fbaef209fa) // Inline-Observation-org-id1-growth
* hasMember[+] = Reference(urn:uuid:61f8e930-46e0-41ab-9448-0d1dc74925df) // Inline-Observation-org-id1-susc-panel

Instance: Inline-Observation-org-id1-growth
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "758d2270-a997-4a8f-872f-b3fbaef209fa"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code.text = "Microorganism Growth"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#441517005 "Present ++ out of +++"
* valueCodeableConcept.text = "++"

Instance: Inline-Observation-org-id1-susc-panel
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "61f8e930-46e0-41ab-9448-0d1dc74925df"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code = $loinc#29576-6 "Bacterial susceptibility panel"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* hasMember[+] = Reference(urn:uuid:85230b86-9b90-4faf-a750-d5fa82520ce9)
* hasMember[+] = Reference(urn:uuid:1fb64f47-4272-43ae-a119-c3b4c3367829)
* hasMember[+] = Reference(urn:uuid:af249f79-f487-4533-9935-d19ab7043724)
* hasMember[+] = Reference(urn:uuid:a4469ca9-d0be-4c58-853a-44cea24484b8)

Instance: Inline-Observation-org-id1-susc-1
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "85230b86-9b90-4faf-a750-d5fa82520ce9"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code = $loinc#18900-1 "Cephalothin [Susceptibility]"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueQuantity.value = 2
* valueQuantity.comparator = #<=
* valueQuantity.code = #1
* valueQuantity.system = $ucum
* interpretation = $v3-ObservationInterpretation#S "Susceptible"

Instance: Inline-Observation-org-id1-susc-2
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "1fb64f47-4272-43ae-a119-c3b4c3367829"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code = $loinc#20629-2 "levoFLOXacin [Susceptibility]"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueQuantity.value = 4
* valueQuantity.comparator = #>
* valueQuantity.code = #1
* valueQuantity.system = $ucum
* interpretation = $v3-ObservationInterpretation#R "Resistant"

Instance: Inline-Observation-org-id1-susc-3
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "af249f79-f487-4533-9935-d19ab7043724"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code = $loinc#18961-3 "Oxacillin [Susceptibility]"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueQuantity.value = 0.5
* valueQuantity.code = #1
* valueQuantity.system = $ucum
* interpretation = $v3-ObservationInterpretation#S "Susceptible"

Instance: Inline-Observation-org-id1-susc-4
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "a4469ca9-d0be-4c58-853a-44cea24484b8"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code = $loinc#19000-9 "Vancomycin [Susceptibility]"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueQuantity.value = 1
* valueQuantity.comparator = #<=
* valueQuantity.code = #1
* valueQuantity.system = $ucum
* interpretation = $v3-ObservationInterpretation#S "Susceptible"

Instance: Inline-Observation-org-id2
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "d49839fe-515c-44b6-8d19-3cc5d48feb49"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code = $loinc#634-6 "Bacteria identified in Specimen by Aerobe culture"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#40886007 "Klebsiella oxytoca"
* hasMember[+] = Reference(urn:uuid:1ada4aeb-37cd-4d76-9815-46f627f5036c) // Inline-Observation-org-id2-growth
* hasMember[+] = Reference(urn:uuid:d1636a51-d6c7-48de-9de6-29d741c96937) // Inline-Observation-org-id2-susc-panel

Instance: Inline-Observation-org-id2-growth
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "1ada4aeb-37cd-4d76-9815-46f627f5036c"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code.text = "Microorganism Growth"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#263866000 "Scanty growth"

Instance: Inline-Observation-org-id2-susc-panel
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "d1636a51-d6c7-48de-9de6-29d741c96937"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code = $loinc#29576-6 "Bacterial susceptibility panel"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* hasMember[+] = Reference(urn:uuid:7b52c241-226a-43d3-ba6a-f2ca18d5b0dd)
* hasMember[+] = Reference(urn:uuid:3923e71d-31b0-49d3-94f0-2c311600e54d)
* hasMember[+] = Reference(urn:uuid:66e76861-53ed-4560-aa54-2efa5b4aff64)
* hasMember[+] = Reference(urn:uuid:5601b27d-69a7-44eb-be1a-af632aa54109)

Instance: Inline-Observation-org-id2-susc-1
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "7b52c241-226a-43d3-ba6a-f2ca18d5b0dd"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code = $loinc#18864-9 "Ampicillin [Susceptibility]"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueQuantity.value = 16
* valueQuantity.comparator = #>
* valueQuantity.code = #1
* valueQuantity.system = $ucum
* interpretation = $v3-ObservationInterpretation#R "Resistant"

Instance: Inline-Observation-org-id2-susc-2
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "3923e71d-31b0-49d3-94f0-2c311600e54d"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code = $loinc#18906-8 "Ciprofloxacin [Susceptibility]"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueQuantity.value = 0.5
* valueQuantity.comparator = #<=
* valueQuantity.code = #1
* valueQuantity.system = $ucum
* interpretation = $v3-ObservationInterpretation#S "Susceptible"

Instance: Inline-Observation-org-id2-susc-3
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "66e76861-53ed-4560-aa54-2efa5b4aff64"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code = $loinc#18928-2 "Gentamicin [Susceptibility]"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueQuantity.value = 8
* valueQuantity.comparator = #>
* valueQuantity.code = #1
* valueQuantity.system = $ucum
* interpretation = $v3-ObservationInterpretation#R "Resistant"

Instance: Inline-Observation-org-id2-susc-4
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "5601b27d-69a7-44eb-be1a-af632aa54109"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code = $loinc#18932-4 "Imipenem [Susceptibility]"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueQuantity.value = 1
* valueQuantity.comparator = #<=
* valueQuantity.code = #1
* valueQuantity.system = $ucum
* interpretation = $v3-ObservationInterpretation#S "Susceptible"

Instance: Inline-Observation-anaerobic-culture
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "5408f7d9-e6a2-492c-8ae3-dbf96b40bf6e"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Microbiology"
* code = $loinc#635-3 "Bacteria identified in Specimen by Anaerobe culture"
* code.text = "Anaerobic Culture"
* subject = Reference(urn:uuid:5bb42c3f-56fb-4bbc-b939-73910a6cce3b)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#264868006 "No growth"


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/examples/lab_report/Bundle-SimpleChemistryReport.fsh

Instance: SimpleChemistryResultReport
InstanceOf: BundleLabReportEu
Title: "Bundle: two sections"
Description: """Example of Laboratory Report (Bundle) including two sections with a single observations expressed in LOINC and with Czech national codes.
Note: this example merges results from a Czech report example with header information from an Italian one, please do not focus on possible inconsistencies between these two parts."""
Usage: #example
* identifier.system = "urn:oid:2.16.840.1.113883.2.51.1.1"
* identifier.value = "8ccab76a-82ed-403e-b974-6b28022b0997"
* identifier.assigner.display = "HL7 Europe"
* type = #document
* timestamp = "2023-03-27T13:13:19+02:00"
* entry[composition].fullUrl = "urn:uuid:26032a57-083a-4ddf-b019-e566ae02f740"  // composition
* entry[composition].resource = Inline-Instance-for-Composition-26032a57-083a-4ddf-b019-e566ae02f740
* entry[patient].fullUrl = "urn:uuid:de17bfd2-8d73-45fa-b0bb-8eb0e463ddb8" // Patient
* entry[patient].resource = Inline-Patient-de17bfd2-8d73-45fa-b0bb-8eb0e463ddb8
* entry[specimen][+].fullUrl = "urn:uuid:5837e9bf-8a2b-43c3-bec8-d68dbd7fa7fb" // Specimen 1
* entry[specimen][=].resource = Inline-Instance-for-Specimen-5837e9bf-8a2b-43c3-bec8-d68dbd7fa7fb
* entry[specimen][+].fullUrl = "urn:uuid:25dfb673-e7d6-43d0-b50b-6739f1ea9c91"  // Specimen 2
* entry[specimen][=].resource = Inline-Instance-Specimen-25dfb673-e7d6-43d0-b50b-6739f1ea9c91
* entry[practitionerRole][+].fullUrl = "urn:uuid:88868d3e-7ab1-4ee5-983e-b979c4971f5c"  // Author 1: Practitioner role
* entry[practitionerRole][=].resource = Inline-Instance-for-PractiotionerRole-88868d3e-7ab1-4ee5-983e-b979c4971f5c
* entry[practitioner][+].fullUrl = "urn:uuid:ab279a0b-320f-483b-9a5d-f1f7e8ceacb2"  // Author 1: Practitioner
* entry[practitioner][=].resource = Inl-Instance-Practitioner-ab279a0b-320f-483b-9a5d-f1f7e8ceacb2
* entry[practitionerRole][+].fullUrl = "urn:uuid:84b2e517-abc2-4268-975d-b12fa8174d30"  // Author 2: Practitioner role
* entry[practitionerRole][=].resource = Inline-Instance-for-PractitionerRole-84b2e517-abc2-4268-975d-b12fa8174d30
* entry[practitioner][+].fullUrl = "urn:uuid:68740937-f732-4ff9-a2e4-bf502d2d125f"  // Author 2: Practitioner
* entry[practitioner][=].resource = Inline-Instance-for-IT-CDA2FHIR-68740937-f732-4ff9-a2e4-bf502d2d125f
* entry[practitioner][+].fullUrl = "urn:uuid:e512e2e2-9600-4c69-a269-af3ab5421e09"  // Observation Performer: Practitioner (lab technitian)
* entry[practitioner][=].resource = Inl-Ins-Lab-technician-e512e2e2-9600-4c69-a269-af3ab5421e09
* entry[organization][+].fullUrl = "urn:uuid:ce122b36-f942-4cee-8c6d-b13ece8cf23c" // custodian: Organization
* entry[organization][=].resource = ce122b36-f942-4cee-8c6d-b13ece8cf23c
* entry[practitioner][+].fullUrl = "urn:uuid:0bbabe57-7c43-4211-9e19-81fcec65686d"  // profesisonal attester: Practitioner
* entry[practitioner][=].resource = Inline-Instance-for-IT-CDA2FHIR-0bbabe57-7c43-4211-9e19-81fcec65686d
* entry[practitionerRole][+].fullUrl = "urn:uuid:84476dc3-a732-455f-910e-f2b44428dcc9"  // legal attester: PractitionerRole
* entry[practitionerRole][=].resource = 84476dc3-a732-455f-910e-f2b44428dcc9
* entry[practitioner][+].fullUrl = "urn:uuid:8ba59ab8-3cad-47ef-8ba9-72d2fcb934c3"  // legal attester: Practitioner
* entry[practitioner][=].resource = 8ba59ab8-3cad-47ef-8ba9-72d2fcb934c3
* entry[practitionerRole][+].fullUrl = "urn:uuid:13792187-4721-4309-a8a4-4a57ffb4e6a1"  // attester: practitioner role
* entry[practitionerRole][=].resource = Inline-Instance-for-IT-CDA2FHIR-13792187-4721-4309-a8a4-4a57ffb4e6a1
* entry[practitioner][+].fullUrl = "urn:uuid:852cec21-4ff9-4cea-b86d-00de92b46894"  // attester: practitioner
* entry[practitioner][=].resource = Inline-Instance-for-IT-CDA2FHIR-852cec21-4ff9-4cea-b86d-00de92b46894
* entry[serviceRequest][+].fullUrl = "urn:uuid:1d4cbcd1-e0d3-49b6-92d8-1893da8d08e1"  // order:service request
* entry[serviceRequest][=].resource = Inline-ServiceRequest-for-IT-CDA2FHIR
* entry[practitionerRole][+].fullUrl = "urn:uuid:1b4b120e-0371-4878-b4c9-b69434e84c72"  // event.detail: practitioner role
* entry[practitionerRole][=].resource = Inline-Instance-for-IT-CDA2FHIR-1b4b120e-0371-4878-b4c9-b69434e84c72
* entry[practitioner][+].fullUrl = "urn:uuid:eb62a039-7e02-44cb-ba17-7e4fb42acdde"  // event.detail: practitioner
* entry[practitioner][=].resource = eb62a039-7e02-44cb-ba17-7e4fb42acdde
* entry[organization][+].fullUrl = "urn:uuid:508f4b29-09ca-4c94-8343-657f1923303a"  // event.detail: organization
* entry[organization][=].resource = Inline-Instance-for-IT-CDA2FHIR-508f4b29-09ca-4c94-8343-657f1923303a
* entry[organization][+].fullUrl = "urn:uuid:206fa15d-51ae-4f3d-b8d0-71ee6290ff52"  // event.detail.organization.partof: organization
* entry[organization][=].resource = Inline-Instance-for-IT-CDA2FHIR-206fa15d-51ae-4f3d-b8d0-71ee6290ff52
* entry[diagnosticReport][+].fullUrl = "urn:uuid:5679723c-4fae-4ba7-9f09-5438a827bfda"  // diagnostic report
* entry[diagnosticReport][=].resource = Inline-Instance-for-IT-CDA2FHIR-5679723c-4fae-4ba7-9f09-5438a827bfda
* entry[observation][+].fullUrl = "urn:uuid:763f7902-8103-4d10-8bd1-546a726d43ee"  // observation 1
* entry[observation][=].resource = Inline-Instance-for-Observation-763f7902-8103-4d10-8bd1-546a726d43ee
* entry[observation][+].fullUrl = "urn:uuid:18bd102e-0abf-42b0-b4e6-97e47fd385eb"  // observation 2
* entry[observation][=].resource = Inline-Instance-for-Observation-18bd102e-0abf-42b0-b4e6-97e47fd385eb

Instance: Inline-Instance-for-Composition-26032a57-083a-4ddf-b019-e566ae02f740
InstanceOf: CompositionLabReportEu
Usage: #inline

* extension[information-recipient]
  * valueReference = Reference(urn:uuid:508f4b29-09ca-4c94-8343-657f1923303a)
    * display = "Nuovo Ospedale S.Agostino (MO)"

* extension[basedOn-order-or-requisition].valueReference = Reference(urn:uuid:1d4cbcd1-e0d3-49b6-92d8-1893da8d08e1)

* id = "26032a57-083a-4ddf-b019-e566ae02f740"
* language = #cs-CZ
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.2.120.4.4"
* identifier.value = "c030702.TSTSMN63A01F205H.20220325112426.TSS1Tkju"
* identifier.assigner.display = "Regione Lazio"
* status = #final
* category[studyType] = $loinc#18719-5 "Chemistry studies (set)"
* type = http://loinc.org#11502-2 "Laboratory report"
* type.text = "Laboratorní zpráva"
* subject = Reference(urn:uuid:de17bfd2-8d73-45fa-b0bb-8eb0e463ddb8)
* date = "2022-03-30T11:24:26+01:00"
* author[+] = Reference(urn:uuid:88868d3e-7ab1-4ee5-983e-b979c4971f5c)
* author[+] = Reference(urn:uuid:84b2e517-abc2-4268-975d-b12fa8174d30)
* title = "Laboratorní zpráva"
* confidentiality = #N
* attester[+].mode = #professional
* attester[=].party = Reference(urn:uuid:0bbabe57-7c43-4211-9e19-81fcec65686d)
* attester[+].mode = #legal
* attester[=].time = "2022-03-25T11:00:00+01:00"
* attester[=].party = Reference(urn:uuid:84476dc3-a732-455f-910e-f2b44428dcc9)
* attester[+].mode = #professional
* attester[=].time = "2022-03-25T11:00:00+01:00"
* attester[=].party = Reference(urn:uuid:13792187-4721-4309-a8a4-4a57ffb4e6a1)
* custodian = Reference(urn:uuid:ce122b36-f942-4cee-8c6d-b13ece8cf23c)
* event.period.start = "2022-03-24T11:24:26+01:00"
* event.detail = Reference(urn:uuid:1b4b120e-0371-4878-b4c9-b69434e84c72)
* section[lab-subsections].title = "Laboratory examinations"
* section[lab-subsections].code = $loinc#26436-6 "Laboratory studies (set)"
* section[lab-subsections].code.text = "Laboratory studies"
* section[lab-subsections].section[+].title = "Urine examinations"  // this title should be aligned with ibservation codes
* section[lab-subsections].section[=].code.coding[+] = http://loinc.org#18729-4 "Urinalysis studies (set)"
* section[lab-subsections].section[=].code.coding[+] = urn:oid:2.16.840.1.113883.2.9.2.30.6.11#0090334.02 "XXX"
* section[lab-subsections].section[=].code.text = "ESAMI DELLE URINE"
* section[lab-subsections].section[=].text.status = #generated
// ToDo: correct html text
* section[lab-subsections].section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table id=\"nota1\">
<thead><tr><th>Date</th><th>Test</th><th>Value</th><th>Unit(s)</th><th>Reference Range</th><th>Interpretation</th></tr></thead>

<tbody>
<tr><td>2023-03-27</td><td>Urea (U) [Moles/Vol]</td><td>310</td><td>mmol/L</td><td> 67 - 580 mmol/L</td></tr>
</tbody>
</table></div>"
* section[lab-subsections].section[=].entry = Reference(urn:uuid:763f7902-8103-4d10-8bd1-546a726d43ee)

* section[lab-subsections].section[+].title = "Blood examinations"  // this title should be aligned with ibservation codes
* section[lab-subsections].section[=].code.coding[+] = http://loinc.org#18719-5 "Chemistry studies (set)"
* section[lab-subsections].section[=].code.text = "Examination of blood"
* section[lab-subsections].section[=].text.status = #generated
// ToDo: correct html text
* section[lab-subsections].section[=].text.div = 
"<div xmlns=\"http://www.w3.org/1999/xhtml\"><table id=\"nota1\">
<thead><tr><th>Date</th><th>Test</th><th>Value</th><th>Unit(s)</th><th>Reference Range</th><th>Interpretation</th></tr></thead>
<tbody>
<tr><td>2023-03-27</td><td>Sodium (Bld) [Moles/Vol]</td><td>156 +- 0.1</td><td>umol/L</td><td> 136 - 144 umol/L</td></tr>
</tbody>
</table></div>"

* section[lab-subsections].section[=].entry = Reference(urn:uuid:18bd102e-0abf-42b0-b4e6-97e47fd385eb)

Instance: Inline-Instance-for-IT-CDA2FHIR-5679723c-4fae-4ba7-9f09-5438a827bfda
InstanceOf: DiagnosticReportLabEu
Usage: #inline
* id = "5679723c-4fae-4ba7-9f09-5438a827bfda"
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.2.120.4.4"
* identifier.value = "c030702.TSTSMN63A01F205H.20220325112426.TSS1Tkju"
* identifier.assigner.display = "Regione Lazio"
* extension[DiagnosticReportCompositionR5].valueReference = Reference(urn:uuid:26032a57-083a-4ddf-b019-e566ae02f740)
* status = #registered
* category[studyType] = $loinc#18719-5 "Chemistry studies (set)"
* code = $loinc#11502-2 "Laboratory report"
* subject = Reference(urn:uuid:de17bfd2-8d73-45fa-b0bb-8eb0e463ddb8)
* specimen[+] = Reference(urn:uuid:5837e9bf-8a2b-43c3-bec8-d68dbd7fa7fb)  // Urine specimen
* result[+] = Reference(urn:uuid:763f7902-8103-4d10-8bd1-546a726d43ee)
* specimen[+] = Reference(urn:uuid:25dfb673-e7d6-43d0-b50b-6739f1ea9c91)   // Blood specimen
* result[+] = Reference(urn:uuid:18bd102e-0abf-42b0-b4e6-97e47fd385eb)


Instance: Inline-Patient-de17bfd2-8d73-45fa-b0bb-8eb0e463ddb8
InstanceOf: PatientEuCore
Usage: #inline
* id = "de17bfd2-8d73-45fa-b0bb-8eb0e463ddb8"
* identifier[+].type = $v2-0203#NIIP
//* identifier[=].system = "urn:oid:1.2.203.24341.1.20.2"
* identifier[=].system = "https://ncez.mzcr.cz/standards/fhir/sid/rcis"
* identifier[=].value = "740512852"
* identifier[+].system = "https://ncez.mzcr.cz/standards/fhir/sid/rid"
* identifier[=].value = "456789123"
* identifier[+].type = $v2-0203#PPN
* identifier[=].system = "urn:oid:2.16.840.1.113883.4.330.203"
* identifier[=].value = "5484136"
* name[+].family = "Očkovaný"
* name[=].given[+] = "František"
* name[=].text = "František Očkovaný"
* gender = #male
* birthDate = "2000-03-21"
* address[+].use = #home
* address[=].type = #physical
* address[=].text = "Malé náměstí 13a, 150 00, Praha 5"
* address[=].line[+] = "Malé náměstí 13a"
* address[=].line[=].extension[streetName].valueString = "Malé náměstí"
* address[=].line[=].extension[houseNumber].valueString = "13a"
* address[=].city = "Praha 5"
* address[=].postalCode = "150 00"
* address[=].country = "CZ"
* telecom[+].system = #email
* telecom[=].value = "frantisek.ockovany@gmail.com"
* telecom[=].use = #home
* telecom[+].system = #phone
* telecom[=].value = "+420332244556"
* telecom[=].use = #mobile

* contact[+].relationship.coding[+] = $v3-RoleCode#MTH // "matka"
* contact[=].relationship.coding[+] = $v2-0131#N // "příbuzný"
* contact[=].name.use = #usual
* contact[=].name.family = "Mrakomorová"
* contact[=].name.given[+] = "Biologická"
* contact[=].name.given[+] = "Matka"
* contact[=].name.text = "Biologická Matka Mrakomorová"
* contact[=].telecom[+].use = #mobile
* contact[=].telecom[=].system = #phone
* contact[=].telecom[=].value = "+420 604 123 456"

* contact[+].relationship.coding[+] = $v3-RoleCode#FRND // "přítel/přítelkyně"
* contact[=].relationship.coding[+] = $v2-0131#C // "Emergentní kontakt"
* contact[=].name.use = #usual
* contact[=].name.family = "Dlouhá"
* contact[=].name.given[0] = "Alena"
* contact[=].telecom.system = #phone
* contact[=].telecom.value = "+420 601 111 111"
* contact[=].telecom.use = #home
* contact[=].address[+].use = #home
* contact[=].address[=].type = #physical
* contact[=].address[=].text = "Horná ulica 18, 123 45, Trenčín, Slovensko"
* contact[=].address[=].line[+] = "Horná ulica 18"
* contact[=].address[=].line[=].extension[streetName].valueString = "Horná ulica"
* contact[=].address[=].line[=].extension[houseNumber].valueString = "18"
* contact[=].address[=].city = "Trenčín"
* contact[=].address[=].postalCode = "123 45"
* contact[=].address[=].country = "SK"

* communication.language = urn:ietf:bcp:47#cs
* generalPractitioner.identifier.system = "https://ncez.mzcr.cz/standards/fhir/sid/nrzp"
* generalPractitioner.identifier.value = "123456789"
* generalPractitioner.display = "MUDr. Josef Švejk"


Instance: Inline-Instance-for-Specimen-5837e9bf-8a2b-43c3-bec8-d68dbd7fa7fb
InstanceOf: SpecimenEu
Usage: #inline
* id = "5837e9bf-8a2b-43c3-bec8-d68dbd7fa7fb"
* type = $sct#122575003	"Urine specimen"
* subject = Reference(urn:uuid:de17bfd2-8d73-45fa-b0bb-8eb0e463ddb8)

Instance: Inline-Instance-Specimen-25dfb673-e7d6-43d0-b50b-6739f1ea9c91
InstanceOf: SpecimenEu
Usage: #inline
* id = "25dfb673-e7d6-43d0-b50b-6739f1ea9c91"
* type = $sct#119297000	"Blood specimen"
* subject = Reference(urn:uuid:de17bfd2-8d73-45fa-b0bb-8eb0e463ddb8)

Instance: Inline-Instance-for-PractiotionerRole-88868d3e-7ab1-4ee5-983e-b979c4971f5c
InstanceOf: PractitionerRoleEuCore
Usage: #inline
* id = "88868d3e-7ab1-4ee5-983e-b979c4971f5c"
* practitioner = Reference(urn:uuid:ab279a0b-320f-483b-9a5d-f1f7e8ceacb2)

Instance: Inl-Instance-Practitioner-ab279a0b-320f-483b-9a5d-f1f7e8ceacb2
InstanceOf: PractitionerEuCore
Usage: #inline
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.3.2"
* identifier.value = "MTCORV58E63L294G"
* identifier.assigner.display = "MEF"
* name.family = "Cervone"
* name.given = "Matteo"
* name.prefix = "Dr"
* telecom[+].system = #email
* telecom[=].value = "matteo.cervone@gmail.it"
* telecom[=].use = #home
* telecom[+].system = #email
* telecom[=].value = "matteo.cervone@pec.it"
* telecom[=].use = #work
* telecom[+].system = #phone
* telecom[=].value = "3478129873"
* telecom[=].use = #mobile
* address.line = "Via Milano 7"
* address.line.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-censusTract"
* address.line.extension.valueString = "058091"
* address.city = "Roma"
* address.district = "RM"
* address.state = "120"
* address.postalCode = "00184"
* address.country = "100"

Instance: Inline-Instance-for-PractitionerRole-84b2e517-abc2-4268-975d-b12fa8174d30
InstanceOf: PractitionerRoleEuCore
Usage: #inline
* id = "84b2e517-abc2-4268-975d-b12fa8174d30"
* practitioner = Reference(urn:uuid:68740937-f732-4ff9-a2e4-bf502d2d125f)

Instance: Inline-Instance-for-IT-CDA2FHIR-68740937-f732-4ff9-a2e4-bf502d2d125f
InstanceOf: PractitionerEuCore
Usage: #inline
* id = "68740937-f732-4ff9-a2e4-bf502d2d125f"
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.3.2"
* identifier.value = "FPSSBN85G54D398H"
* identifier.assigner.display = "MEF"
* name.family = "Mancusi"
* name.given = "Filippo"

Instance: ce122b36-f942-4cee-8c6d-b13ece8cf23c
InstanceOf: Organization
Usage: #inline
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.1.2"
* identifier.value = "120148"
* identifier.assigner.display = "Ministero della Salute"
* name = "SAN RAFFAELE NOMENTANA"
* telecom.system = #phone
* telecom.value = "390 666 0581"
* telecom.use = #work
* address.line = "Via Emilio Praga 39"
* address.line.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-censusTract"
* address.line.extension.valueString = "058091"
* address.city = "Roma"
* address.district = "RM"
* address.state = "120"
* address.postalCode = "00137"
* address.country = "100"

Instance: Inline-Instance-for-IT-CDA2FHIR-0bbabe57-7c43-4211-9e19-81fcec65686d
InstanceOf: PractitionerEuCore
Usage: #inline
* id = "0bbabe57-7c43-4211-9e19-81fcec65686d"
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.3.2"
* identifier.value = "MURRSI88Y67R012G"
* identifier.assigner.display = "MEF"
* name.family = "Rossi"
* name.given = "Maura"
* telecom.system = #phone
* telecom.value = "062866794"
* telecom.use = #work

Instance: Inl-Ins-Lab-technician-e512e2e2-9600-4c69-a269-af3ab5421e09
InstanceOf: PractitionerEuCore
Usage: #inline
* id = "e512e2e2-9600-4c69-a269-af3ab5421e09"
* identifier.system = "https://ncez.mzcr.cz/standards/fhir/sid/nrzp"
* identifier.value = "SOMNUMBER"
* identifier.assigner.display = "NRZP"
* name.family = "Technik"
* name.given = "Laboratorní"
* telecom.system = #phone
* telecom.value = "603 123 456"
* telecom.use = #work


Instance: 84476dc3-a732-455f-910e-f2b44428dcc9
InstanceOf: PractitionerRoleEuCore
Usage: #inline
* practitioner = Reference(urn:uuid:8ba59ab8-3cad-47ef-8ba9-72d2fcb934c3)

Instance: 8ba59ab8-3cad-47ef-8ba9-72d2fcb934c3
InstanceOf: PractitionerEuCore
Usage: #inline
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.3.2"
* identifier.value = "GPSDGK80E76C765V"
* identifier.assigner.display = "MEF"
* name.family = "Righi"
* name.given = "Federico"
* name.prefix = "Dttr."
* telecom[+].system = #email
* telecom[=].value = "righi.federico@gmail.com"
* telecom[=].use = #home
* telecom[+].system = #phone
* telecom[=].value = "330987986"
* telecom[=].use = #mobile
* address.line = "Via Corvetto 3"
* address.line.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-censusTract"
* address.line.extension.valueString = "058091"
* address.city = "Roma"
* address.district = "RM"
* address.state = "120"
* address.postalCode = "00164"
* address.country = "100"

Instance: Inline-Instance-for-IT-CDA2FHIR-13792187-4721-4309-a8a4-4a57ffb4e6a1
InstanceOf: PractitionerRoleEuCore
Usage: #inline
* id = "13792187-4721-4309-a8a4-4a57ffb4e6a1"
* practitioner = Reference(urn:uuid:852cec21-4ff9-4cea-b86d-00de92b46894)

Instance: Inline-Instance-for-IT-CDA2FHIR-852cec21-4ff9-4cea-b86d-00de92b46894
InstanceOf: PractitionerEuCore
Usage: #inline
* id = "852cec21-4ff9-4cea-b86d-00de92b46894"
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.3.2"
* identifier.value = "RBTAMA67H99H467D"
* identifier.assigner.display = "MEF"
* name.family = "Rossi"
* name.given = "Roberta"
* telecom[+].system = #email
* telecom[=].value = "maggi.roberta@gmail.com"
* telecom[=].use = #home
* telecom[+].system = #phone
* telecom[=].value = "22998276800"
* telecom[=].use = #home
* address.line = "Via Corvetto 3"
* address.line.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-censusTract"
* address.line.extension.valueString = "058091"
* address.city = "Roma"
* address.district = "RM"
* address.state = "120"
* address.postalCode = "00164"
* address.country = "100"

Instance: Inline-ServiceRequest-for-IT-CDA2FHIR
InstanceOf: ServiceRequestLabEu
Usage: #inline
* id = "1d4cbcd1-e0d3-49b6-92d8-1893da8d08e1"
* identifier.system = "http://hospital.org/lis-order"
* identifier.value = "123456"
// USARE QUESTO come Group ID
* requisition.assigner.display = "Ministero delle Finanze"
* requisition.system = "urn:oid:2.16.840.1.113883.2.9.4.3.9"
* requisition.value = "0901001234567234"
* status = #active
* intent = #order
* category = $sct#108252007 "Laboratory procedure"
* priority = #asap
* code = $loinc#14957-5 "Microalbumin [Mass/volume] in Urine"
* code.text = "Microalbumin Massa/Volume in Urine"
* subject = Reference(urn:uuid:de17bfd2-8d73-45fa-b0bb-8eb0e463ddb8)

Instance: Inline-Instance-for-IT-CDA2FHIR-1b4b120e-0371-4878-b4c9-b69434e84c72
InstanceOf: PractitionerRoleEuCore
Usage: #inline
* id = "1b4b120e-0371-4878-b4c9-b69434e84c72"
* practitioner = Reference(urn:uuid:eb62a039-7e02-44cb-ba17-7e4fb42acdde)
* organization = Reference(urn:uuid:508f4b29-09ca-4c94-8343-657f1923303a)

Instance: eb62a039-7e02-44cb-ba17-7e4fb42acdde
InstanceOf: PractitionerEuCore
Usage: #inline
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.3.2"
* identifier.value = "MRSSIO79H59Z317K"
* identifier.assigner.display = "MEF"
* name.family = "Rossi"
* name.given = "Mario"

Instance: Inline-Instance-for-IT-CDA2FHIR-508f4b29-09ca-4c94-8343-657f1923303a
InstanceOf: Organization
Usage: #inline
* id = "508f4b29-09ca-4c94-8343-657f1923303a"
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.1.3"
* identifier.value = "327700102"
* identifier.assigner.display = "Ministero della Salute"
* name = "Nuovo Ospedale S.Agostino (MO)"
* partOf = Reference(urn:uuid:206fa15d-51ae-4f3d-b8d0-71ee6290ff52)

Instance: Inline-Instance-for-IT-CDA2FHIR-206fa15d-51ae-4f3d-b8d0-71ee6290ff52
InstanceOf: Organization
Usage: #inline
* id = "206fa15d-51ae-4f3d-b8d0-71ee6290ff52"
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.1.1"
* identifier.value = "080105"
* identifier.assigner.display = "Ministero della Salute"

Instance: Inline-Instance-for-Observation-763f7902-8103-4d10-8bd1-546a726d43ee
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "763f7902-8103-4d10-8bd1-546a726d43ee"
* status = #final
* code.coding[+] = http://loinc.org#22700-9 "Urea [Moles/volume] in Urine"
* code.coding[+] = urn:oid:1.2.203.24341.11.2.2#03088 "Urea (U; látková konc. [mmol/l] Absorpční spektrofotometrie)"
* code.text = "Urea (U) [Moles/Vol]"
* method = $sct#70621000052105 "Spectrophotometric technique"
* subject = Reference(urn:uuid:de17bfd2-8d73-45fa-b0bb-8eb0e463ddb8)
* effectiveDateTime = "2023-03-27T11:24:26+01:00"
* performer[+].display = "Jan Laborant" // ToDo: consider cardinality
* valueQuantity.value = 310
* valueQuantity.system = $ucum
* valueQuantity.code = $ucum#mmol/L
* valueQuantity.unit = "mmol/L"
* interpretation = $v3-ObservationInterpretation#LU "Significantly low"
* specimen = Reference(urn:uuid:5837e9bf-8a2b-43c3-bec8-d68dbd7fa7fb)  // urine specimen
* referenceRange.low.value = 67
* referenceRange.low.unit = "mmol/L"
* referenceRange.high.value = 580
* referenceRange.high.unit = "mmol/L"
* referenceRange.type = $referencerange-meaning#normal "Normal Range"

Instance: Inline-Instance-for-Observation-18bd102e-0abf-42b0-b4e6-97e47fd385eb
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "18bd102e-0abf-42b0-b4e6-97e47fd385eb"
* status = #final
* code.coding[+] = http://loinc.org#2947-0 "Sodium [Moles/volume] in Blood"
* code.coding[+] = urn:oid:1.2.203.24341.11.2.2#2504 "Na (S; látková konc. [mmol/l] spektrofotometrie-FAES)"
* code.text = "Sodium (Bld) [Moles/Vol]"
* method = $sct#70621000052105 "Spectrophotometric technique"
* subject = Reference(urn:uuid:de17bfd2-8d73-45fa-b0bb-8eb0e463ddb8)
* effectiveDateTime = "2023-03-27T11:24:26+01:00"
* performer[+].display = "Laboratorní Technik"  // ToDo: consider cardinality
* performer[=] = Reference(urn:uuid:e512e2e2-9600-4c69-a269-af3ab5421e09)
* valueQuantity.value = 156
* valueQuantity.system = $ucum
* valueQuantity.code = $ucum#umol/L
* valueQuantity.unit = "umol/L"
* valueQuantity.extension[uncertainty].valueDecimal = 0.1
* interpretation = $v3-ObservationInterpretation#HH "Critical high"
* specimen = Reference(urn:uuid:25dfb673-e7d6-43d0-b50b-6739f1ea9c91)
* referenceRange.low.value = 136
* referenceRange.low.unit = "umol/L"
* referenceRange.high.value = 144
* referenceRange.high.unit = "umol/L"
* referenceRange.type = $referencerange-meaning#normal "Normal Range"

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/examples/lab_report/crm-example.fsh

Instance: CRMObservtionResult
InstanceOf: ObservationResultsLaboratoryEu
Title: "Observation: certified reference material"
Description: "Example of Observation with a concentration of insulin of 50 mIU/L, using as certified reference material https://www.nibsc.org/documents/ifu/66-304.pdf"
Usage: #example

* id = "4335db48-7090-45b3-a2c2-45b45f94a67c" 
* status = #final
* code.coding[+] = http://loinc.org#20448-7	"Insulin [Units/volume] in Serum or Plasma"
* code.coding[+] = http://npu-terminology.org#NPU02496 "P—Insulin; arb.subst.c.(IRP 66/304; proc.) = ? × 10-3 IU/L"
* effectiveDateTime = "2023-03-27T11:24:26+01:00"
* subject = Reference(urn:uuid:de17bfd2-8d73-45fa-b0bb-8eb0e463ddb8)
* performer[+].display = "Jan Laborant" // ToDo: consider cardinality
* valueQuantity = 50 'm[iU]/L' "mIU/L"
* extension[ObservationCertifiedRefMaterialCodeable].valueCodeableConcept = $nibsc#66/304 "Insulin, human, for immunoassay, Lyophilized, 3 IU / ampoule."
* extension[ObservationCertifiedRefMaterialIdentifer].valueIdentifier
  * system = $nibsc
  * value = "66/304"




---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/examples/lab_report/Examples.fsh

Instance: dr-lab-example
InstanceOf: DiagnosticReportLabEu
Usage: #example
* extension[DiagnosticReportCompositionR5].url = $diagnostic-report-composition-r5
* extension[DiagnosticReportCompositionR5].valueReference = Reference(comp-lab-example)
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:3f69e0a5-2177-4540-baab-7a5d0877428f"
* status = #final
* category[studyType] = $loinc#26436-6 "Laboratory Studies (set)" // corrected to match lab composition category specificication
* code = $loinc#11502-2 "Laboratory report"
* code.text = "Bacterial Aerobic & Anaerobic Culture & Susceptibility"
* subject = Reference(pat-lab-example)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* specimen.display = "Specimen from wound collected on October 25th, 2022"
* result[+] = Reference(obs-gram-stain) 
* result[+] = Reference(obs-aerobic-culture)
* result[+] = Reference(obs-anaerobic-culture)

Instance: comp-lab-example
InstanceOf: CompositionLabReportEu
Usage: #example
* extension[diagnosticReport-reference].valueReference = Reference(dr-lab-example)
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:3f69e0a5-2177-4540-baab-7a5d0877428f"
* status = #final
* category[studyType] = $loinc#26436-6 "Laboratory Studies (set)"
* type = $loinc#11502-2 "Laboratory report"
* subject = Reference(pat-lab-example)
* date = "2022-10-25T14:30:00+01:00"
* author[+].display = "MUDr. Aleš Procházka"
* title = "Laboratory Report Bacterial Aerobic & Anaerobic Culture and Susceptibility - 27 Dec, 2020 14:30"
* confidentiality = #N
* attester[+].mode = #legal
* attester[=].time = "2020-12-27T14:30:00+01:00"
* attester[=].party.display = "Best Laboratory"
* custodian.display = "Best Laboratory"
* section[lab-subsections].title = "Bacterial Aerobic & Anaerobic Culture & Susceptibility"
* section[lab-subsections].code = $loinc#18725-2 "Microbiology studies (set)"
* section[lab-subsections].section[+].code.text = "Gram Stain"
* section[lab-subsections].section[=].title = "Gram Stain" // Title to be checked
* section[lab-subsections].section[=].entry = Reference(obs-gram-stain)
* section[lab-subsections].section[+].code.text = "Aerobic Culture"
* section[lab-subsections].section[=].title = "Aerobic Culture" // Title to be checked
* section[lab-subsections].section[=].entry = Reference(obs-aerobic-culture) // obs-aerobic-culture
* section[lab-subsections].section[+].code.text = "Anaerobic Culture"
* section[lab-subsections].section[=].title = "Anaerobic Culture" // Title to be checked
* section[lab-subsections].section[=].entry = Reference(obs-anaerobic-culture) // obs-anaerobic-culture

Instance: pat-lab-example
InstanceOf: PatientEuCore
Usage: #example
* identifier[+].type = $v2-0203#NIIP
* identifier[=].system = "urn:oid:1.2.203.24341.1.20.2"
* identifier[=].value = "740512852"
* identifier[+].system = "urn:oid:1.2.203.24341.1.20.9.1"
* identifier[=].value = "A225961454"
* identifier[+].type = $v2-0203#PPN
* identifier[=].system = "urn:oid:2.16.840.1.113883.4.330.203"
* identifier[=].value = "5484136"
* name[+].family = "Očkovaný Moreira"
  * extension[fathersFamily][+].valueString = "Moreira"
  * extension[mothersFamily][+].valueString = "Očkovaný"
* name[=].given[+] = "František"
* gender = #male
* birthDate = "2000-03-21"


/* Instance: Specimen-micro
InstanceOf: SpecimenEu
Usage: #example
* id = "bab0016e-1800-4e54-b595-72bd9041ffbc"
* status = #available
* type = $sct#119365002 "Specimen from wound"
* collection.collectedDateTime = "2022-10-25T13:35:00+01:00" */

Instance: obs-gram-stain
InstanceOf: ObservationResultsLaboratoryEu
Usage: #example
/* * id = "40278a69-87aa-470f-a38f-bff1e8aee175" */
* status = #final
* category[laboratory] = $observation-category#laboratory
* code.text = "Gram Stain"
* subject = Reference(pat-lab-example)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* hasMember[+] = Reference(obs-wbc) // obs-wbc
* hasMember[+] = Reference(obs-gs-org1) // obs-gs-org1

Instance: obs-wbc
InstanceOf: ObservationResultsLaboratoryEu
Usage: #example
/* * id = "1097929f-890e-4e27-a31d-58599f3e2479" */
* status = #final
* category[laboratory] = $observation-category#laboratory
* code = $loinc#72163-9 "Leukocytes [Presence] in Specimen by Gram stain"
* subject = Reference(pat-lab-example)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#2667000 "Absent"
* valueCodeableConcept.text = "None observed"

Instance: obs-gs-org1
InstanceOf: ObservationResultsLaboratoryEu
Usage: #example
/* * id = "fcf220c3-7f3e-44f8-b669-48552a20fa0a" */
* status = #final
* category[laboratory] = $observation-category#laboratory
* code = $loinc#664-3 "Microscopic observation [Identifier] in Specimen by Gram stain"
* subject = Reference(pat-lab-example)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#70003006 "Gram-positive cocci in clusters"
* hasMember[+] = Reference(obs-gs-org1-quant) 

Instance: obs-gs-org1-quant
InstanceOf: ObservationResultsLaboratoryEu
Usage: #example
/* * id = "2cecbd1e-4695-46dc-adf8-3ed3b95c0c1e" */
* status = #final
* category[laboratory] = $observation-category#laboratory
* code.text = "Observed Quantity"
* subject = Reference(pat-lab-example)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#441614007 "Present + out of +++"
* valueCodeableConcept.text = "+"


Instance: obs-aerobic-culture
InstanceOf: ObservationResultsLaboratoryEu
Usage: #example
/* * id = "8754019d-256b-4df9-94f2-f80c07e08d47" */
* status = #final
* category[laboratory] = $observation-category#laboratory

* code.text = "Aerobic Culture"
* subject = Reference(pat-lab-example)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* hasMember[+] = Reference(obs-org-id1) 

Instance: obs-org-id1
InstanceOf: ObservationResultsLaboratoryEu
Usage: #example
/* * id = "083ee3df-1381-4ed2-849f-77808eb81a36" */
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#634-6 "Bacteria identified in Specimen by Aerobe culture"
* subject = Reference(pat-lab-example)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#3092008 "Staphylococcus aureus"
* hasMember[+] = Reference(obs-org-id1-growth) 
* hasMember[+] = Reference(obs-org-id1-susc-panel)

Instance: obs-org-id1-growth
InstanceOf: ObservationResultsLaboratoryEu
Usage: #example
/* * id = "758d2270-a997-4a8f-872f-b3fbaef209fa" */
* status = #final
* category[laboratory] = $observation-category#laboratory

* code.text = "Microorganism Growth"
* subject = Reference(pat-lab-example)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#441517005 "Present ++ out of +++"
* valueCodeableConcept.text = "++"

Instance: obs-org-id1-susc-panel
InstanceOf: ObservationResultsLaboratoryEu
Usage: #example
/* * id = "61f8e930-46e0-41ab-9448-0d1dc74925df" */
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#29576-6 "Bacterial susceptibility panel"
* subject = Reference(pat-lab-example)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* hasMember[+] = Reference(obs-org-id1-susc-1)
* hasMember[+] = Reference(obs-org-id1-susc-2)
* hasMember[+] = Reference(obs-org-id1-susc-3)
* hasMember[+] = Reference(obs-org-id1-susc-4)

Instance: obs-org-id1-susc-1
InstanceOf: ObservationResultsLaboratoryEu
Usage: #example
/* * id = "85230b86-9b90-4faf-a750-d5fa82520ce9" */
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#18900-1 "Cephalothin [Susceptibility]"
* subject = Reference(pat-lab-example)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueQuantity.value = 2
* valueQuantity.comparator = #<=
* valueQuantity.code = #1
* valueQuantity.system = $ucum
* interpretation = $v3-ObservationInterpretation#S "Susceptible"

Instance: obs-org-id1-susc-2
InstanceOf: ObservationResultsLaboratoryEu
Usage: #example
/* * id = "1fb64f47-4272-43ae-a119-c3b4c3367829" */
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#20629-2 "levoFLOXacin [Susceptibility]"
* subject = Reference(pat-lab-example)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueQuantity.value = 4
* valueQuantity.comparator = #>
* valueQuantity.code = #1
* valueQuantity.system = $ucum
* interpretation = $v3-ObservationInterpretation#R "Resistant"

Instance: obs-org-id1-susc-3
InstanceOf: ObservationResultsLaboratoryEu
Usage: #example
/* * id = "af249f79-f487-4533-9935-d19ab7043724" */
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#18961-3 "Oxacillin [Susceptibility]"
* subject = Reference(pat-lab-example)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueQuantity.value = 0.5
* valueQuantity.code = #1
* valueQuantity.system = $ucum
* interpretation = $v3-ObservationInterpretation#S "Susceptible"

Instance: obs-org-id1-susc-4
InstanceOf: ObservationResultsLaboratoryEu
Usage: #example
/* * id = "a4469ca9-d0be-4c58-853a-44cea24484b8" */
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#19000-9 "Vancomycin [Susceptibility]"
* subject = Reference(pat-lab-example)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueQuantity.value = 1
* valueQuantity.comparator = #<=
* valueQuantity.code = #1
* valueQuantity.system = $ucum
* interpretation = $v3-ObservationInterpretation#S "Susceptible"


Instance: obs-anaerobic-culture
InstanceOf: ObservationResultsLaboratoryEu
Usage: #example
/* * id = "5408f7d9-e6a2-492c-8ae3-dbf96b40bf6e" */
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#635-3 "Bacteria identified in Specimen by Anaerobe culture"
* code.text = "Anaerobic Culture"
* subject = Reference(pat-lab-example)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer[+].display = "MUDr. Aleš Procházka"
* valueCodeableConcept = $sct#264868006 "No growth"

Instance: prrole-lab-example
InstanceOf: PractitionerRoleEuCore
Usage: #example
/* * id = "88868d3e-7ab1-4ee5-983e-b979c4971f5c" */
* practitioner = Reference(pr-lab-example)

Instance: pr-lab-example
InstanceOf: PractitionerEuCore
Usage: #example
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.3.2"
* identifier.value = "MTCORV58E63L294G"
* identifier.assigner.display = "MEF"
* name.family = "Cervone"
* name.given = "Matteo"
* name.prefix = "Dr"
* telecom[+].system = #email
* telecom[=].value = "matteo.cervone@gmail.it"
* telecom[=].use = #home
* telecom[+].system = #email
* telecom[=].value = "matteo.cervone@pec.it"
* telecom[=].use = #work
* telecom[+].system = #phone
* telecom[=].value = "3478129873"
* telecom[=].use = #mobile
* address.line = "Via Milano 7"
* address.line.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-censusTract"
* address.line.extension.valueString = "058091"
* address.city = "Roma"
* address.district = "RM"
* address.state = "120"
* address.postalCode = "00184"
* address.country = "100"

Instance: srv-request-example
InstanceOf: ServiceRequestLabEu
Usage: #example
* identifier.system = "urn:oid:2.16.840.1.113883.2.9.4.3.9"
* identifier.value = "[NRE]"
* identifier.assigner.display = "Ministero delle Finanze"
* status = #active
* intent = #order
* category = $sct#108252007 "Laboratory procedure"
* priority = #asap
* code = http://loinc.org#14957-5 "Microalbumin [Mass/volume] in Urine"
* code.text = "Microalbumin Massa/Volume in Urine"
* subject = Reference(pat-lab-example)

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/examples/lab_report/Observation-result-ratio-example.fsh

Instance: LabObservtionResultRatio
InstanceOf: ObservationResultsLaboratoryEu
Title: "Observation: ratio example"
Description: "Example of Observation with ratio result"
Usage: #example

* contained[+] = TestKitExample
* contained[+] = AnalyzerExample
* id = "d29b286d-b99c-410f-af4e-9455ea49d0af"
* extension[DeviceLabTestKit].valueReference = Reference (TestKitExample)
* status = #final
* code.coding[+] = http://loinc.org#1755-8 "Albumin [Mass/time] in 24 hour Urine"
* code.text = "Albumin (24H U) [Mass/Time]"
* effectiveDateTime = "2023-03-27T11:24:26+01:00"
* subject = Reference(urn:uuid:de17bfd2-8d73-45fa-b0bb-8eb0e463ddb8)
* performer[+].display = "Jan Laborant" // ToDo: consider cardinality
* valueRatio
  * numerator = 15 'mg' "mg"
  * denominator = 24 'h' "h"
* device = Reference (AnalyzerExample)
    
/* * valueRatio.numerator.value = 15
* valueRatio.numerator.system = $ucum
* valueRatio.numerator.code = $ucum#mg
* valueRatio.numerator.unit = "mg"
* valueRatio.denominator.value = 24
* valueRatio.denominator.system = $ucum
* valueRatio.denominator.code = $ucum#h
* valueRatio.denominator.unit = "h" */

Instance: TestKitExample
InstanceOf: Device
Title: "Device: lab Test Kit example"
Description: "Example of Lab Test Kit"
Usage: #inline
* deviceName
  * name = "BEST® Micro Albuminuria Test Kit"
  * type = #manufacturer-name
* manufacturer = "Best manufacturer"

Instance: AnalyzerExample
InstanceOf: Device
Title: "Device: Analyzer example"
Description: "Example of Analyzer"
Usage: #inline
* deviceName
  * name = "BEST® FLUORESCENCE PLUS ANALYZER"
  * type = #manufacturer-name
* manufacturer = "Best manufacturer"

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/examples/lab_report/Specimen-animal.fsh

Instance: Specimen-animal-example
InstanceOf: SpecimenEu
Usage: #example
/* * contained = Patient-animal-example */
* status = #available
* type = $sct#119297000	"Blood specimen"
* subject = Reference(Patient-animal-example)
* collection.collectedDateTime = "2022-10-25T13:35:00+01:00"

Instance: Patient-animal-example
InstanceOf: PatientAnimalEu
Usage: #example
* extension[$patient-animal].extension[species].valueCodeableConcept = $sct#448169003 "Domestic cat"

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/examples/other-examples/nl-core-NameInformation-complete.fsh

Instance: nl-core-NameInformation-complete
InstanceOf: Patient
Usage: #example
// * meta.profile = "http://nictiz.nl/fhir/StructureDefinition/nl-core-Patient"
* name[0].extension.url = "http://hl7.org/fhir/StructureDefinition/humanname-assembly-order"
* name[=].extension.valueCode = #NL3
// "The extension is used to indicate that the person's family name is built up from the partner's last name \r\n           followed by the person's own last name "
* name[=].use = #official
* name[=].text = "Johanna Petronella Maria (Jo) van der Giessen-van Putten"
// "The rendered name of the person "
* name[=].family.extension[0].url = "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix"
* name[=].family.extension[=].valueString = "van"
//" The person's own last name prefix "
* name[=].family.extension[+].url = "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
* name[=].family.extension[=].valueString = "Putten"
//" The person's own last name "
* name[=].family.extension[+].url = "http://hl7.org/fhir/StructureDefinition/humanname-partner-prefix"
* name[=].family.extension[=].valueString = "van der"
//" The partner's last name prefix "
* name[=].family.extension[+].url = "http://hl7.org/fhir/StructureDefinition/humanname-partner-name"
* name[=].family.extension[=].valueString = "Giessen"
//" The partner's last name "
//" The person's combined family name. The individual parts are repeated using the appropriate extensions. "
* name[=].family = "van der Giessen-van Putten"
* name[=].given[0] = "Johanna"
* name[=].given[+] = "Petronella"
* name[=].given[+] = "Maria"
* name[=].given[0].extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier"
* name[=].given[=].extension.valueCode = #BR
//" Each official first name is communicated individually, augmented with the iso21090-EN-qualifier\r\n           extension set to \"BR\" (Birth) to indicate that it is a complete and official first name. "
* name[=].given[+].extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier"
* name[=].given[=].extension.valueCode = #BR
* name[=].given[+].extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier"
* name[=].given[=].extension.valueCode = #BR
* name[=].prefix = "PhD"
//" The scientific title of the person. "
// * name[=].fhir_comments = " The information about the offical names is communicated using a .name instance where .name.use is \r\n        set to \"official\". "
* name[+].use = #usual
* name[=].given = "Jo"
// " The given name (roepnaam, nickname) of the person is communicated using an additional .name instance with\r\n        .name.use set to \"usual\". "

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/examples/poc-ehdsi/bundle.fsh

Instance: BundleLabResultReportPOC
InstanceOf: BundleLabReportEu
Title: "Bundle: MyHealth@EU Proof Of Concept"
Description: "Example of Laboratory Report (Bundle) used in the MyHealth@EU Proof Of Concept."
Usage: #example
* identifier.system = "http://example.org"
* identifier.value = "ba91c64b-f30c-4137-a484-34bbba5e8804"
* type = #document
* timestamp = "2023-03-06T14:30:00+01:00"
* entry[composition].fullUrl = "urn:uuid:80709186-426d-4cdf-abba-034c4f80acb4"
* entry[composition].resource = Inline-Composition-laboratory-results-report-poc
* entry[diagnosticReport].fullUrl = "urn:uuid:f5d20fe5-6d14-46de-80ea-8124f427a754"
* entry[diagnosticReport].resource = Inline-Diagnostic-Report-laboratory-results-report-poc
* entry[patient].fullUrl = "urn:uuid:1d252ca0-803c-464c-87d5-f12f73c12eda"
* entry[patient].resource = Inline-Patient-laboratory-results-report-poc
* entry[observation].fullUrl = "urn:uuid:8bd279af-125a-4318-b461-ba5629b12e7f"
* entry[observation].resource = Inline-Observation-laboratory-results-report-poc
* entry[serviceRequest].fullUrl = "urn:uuid:2e861278-2e99-4ffa-befa-049467a095b2"
* entry[serviceRequest].resource = Inline-ServiceRequest-laboratory-results-report-poc
* entry[organization].fullUrl = "urn:uuid:608b5309-2609-4d03-b6da-c758bfa1de70"
* entry[organization].resource = Inline-Organization-laboratory-results-report-poc
* entry[specimen].fullUrl = "urn:uuid:cadaf2e3-b707-4207-9b63-5c29ffece051"
* entry[specimen].resource = Inline-Specimen-laboratory-results-report-poc

Instance: Inline-Composition-laboratory-results-report-poc
InstanceOf: CompositionLabReportEu
Usage: #inline
* id = "80709186-426d-4cdf-abba-034c4f80acb4"
/* * extension[+].url = $composition-diagnostic-report-reference
* extension[=].valueReference = Reference(DiagnosticReport/3a743273-237a-446a-a8da-9e7521cce614) */
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:3f69e0a5-2177-4540-baab-7a5d0877428f"
* status = #final
* category[studyType] = $loinc#26436-6 "Laboratory Studies (set)" 
* category[specialty] = $sct#394596001	"Chemical pathology"
* type = $loinc#11502-2 "Laboratory report"
* subject = Reference(urn:uuid:1d252ca0-803c-464c-87d5-f12f73c12eda)
* date = "2023-03-09T14:30:00+01:00"
* author[+].display = "Dr. Patrick Dempsey"
* title = "Laboratory Report - 10 March, 2023 14:30"
* confidentiality = #N
* attester[+].mode = #legal
* attester[=].time = "2020-12-27T14:30:00+01:00"
* attester[=].party = Reference(urn:uuid:608b5309-2609-4d03-b6da-c758bfa1de70)
* custodian = Reference(urn:uuid:608b5309-2609-4d03-b6da-c758bfa1de70)
* section[+].title = "Blood group lab result report"
* section[=].code = $loinc#26436-6 "Laboratory studies (set)"
* section[=].code.text = "LABORATORY STUDIES"
//* section[=].entry[+] = Reference(Observation/8bd279af-125a-4318-b461-ba5629b12e7f)
* section[=].entry[+] = Reference(urn:uuid:8bd279af-125a-4318-b461-ba5629b12e7f)

Instance: Inline-Diagnostic-Report-laboratory-results-report-poc
InstanceOf: DiagnosticReportLabEu
Usage: #inline
* code = $loinc#11502-2 "Laboratory report"
* extension[DiagnosticReportCompositionR5].valueReference = Reference(urn:uuid:80709186-426d-4cdf-abba-034c4f80acb4)
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:3f69e0a5-2177-4540-baab-7a5d0877428f"
* status = #final
* category[studyType] = $loinc#26436-6 "Laboratory Studies (set)" 
* category[specialty] = $sct#394596001	"Chemical pathology"
* subject = Reference(urn:uuid:1d252ca0-803c-464c-87d5-f12f73c12eda)
* effectiveDateTime = "2023-04-19T15:46:00+01:00"
* performer[+].display = "Dr. Patrick Dempsey"

Instance: Inline-Patient-laboratory-results-report-poc
InstanceOf: PatientEuCore
Usage: #inline
* id = "1d252ca0-803c-464c-87d5-f12f73c12eda"
* identifier[+].type = $v2-0203#NIIP
* identifier[=].system = "urn:oid:1.2.203.24341.1.20.2"
* identifier[=].value = "740512852"
* identifier[+].system = "urn:oid:1.2.203.24341.1.20.9.1"
* identifier[=].value = "A225961454"
* identifier[+].type = $v2-0203#PPN
* identifier[=].system = "urn:oid:2.16.840.1.113883.4.330.203"
* identifier[=].value = "5484136"
* name[+].family = "Doe"
* name[=].given[+] = "John"
* gender = #male
* birthDate = "2000-03-21"

Instance: Inline-Observation-laboratory-results-report-poc
InstanceOf: ObservationResultsLaboratoryEu
Usage: #inline
* id = "8bd279af-125a-4318-b461-ba5629b12e7f"
* status = #final
* category[laboratory] = $observation-category#laboratory
//* category[+] = $v2-0074#MB "Blood bank studies"
* code = $loinc#883-9 "ABO group [Type] in Blood"
* code.text = "Blood Group"
* subject = Reference(urn:uuid:1d252ca0-803c-464c-87d5-f12f73c12eda)
* effectiveDateTime = "2023-03-09T13:35:00+01:00"
* performer[+].display = "Dr. Patrick Dempsey"
* valueCodeableConcept = $sct#112144000 "Blood group A (finding)"
* valueCodeableConcept.text = "A"

Instance: Inline-Specimen-laboratory-results-report-poc
InstanceOf: SpecimenEu
Usage: #inline
* id = "cadaf2e3-b707-4207-9b63-5c29ffece051"
* status = #available
* type = $sct#119297000 "Blood specimen"
* type.text = "Blood specimen"

Instance: Inline-ServiceRequest-laboratory-results-report-poc
InstanceOf: ServiceRequestLabEu
Usage: #inline
* identifier.system = "http://example.org"
* identifier.value = "2e861278-2e99-4ffa-befa-049467a095b2"
* status = #active
* intent = #order
* code = $sct#108252007 "Laboratory procedure"
* subject = Reference(urn:uuid:1d252ca0-803c-464c-87d5-f12f73c12eda)
* specimen = Reference(urn:uuid:cadaf2e3-b707-4207-9b63-5c29ffece051)

Instance: Inline-Organization-laboratory-results-report-poc
InstanceOf: OrganizationUvIps
Usage: #inline
* id = "608b5309-2609-4d03-b6da-c758bfa1de70"
* name = "SAN RAFFAELE NOMENTANA"
* telecom.system = #phone
* telecom.value = "390 666 0581"
* telecom.use = #work
* address.line = "Via Emilio Praga 39"
* address.line.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-censusTract"
* address.line.extension.valueString = "058091"
* address.city = "Roma"
* address.district = "RM"
* address.state = "120"
* address.postalCode = "00137"
* address.country = "100"


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/extensions/extensions-lab.fsh


Extension: DiagnosticReportReference
Id:   composition-diagnosticReportReference
Title:  "Document DiagnosticReport Reference"
Description: "This extension provides a reference to the DiagnosticReport instance that is associated with this Composition."
// publisher, contact, and other metadata here using caret (^) syntax (omitted)
* insert ExtensionContext(Composition)
* insert SetFmmandStatusRule ( 2, trial-use)
* value[x] only Reference (DiagnosticReport)


Extension: ObservationCertifiedRefMaterialCodeable
Id:   observation-certifiedRefMaterialCodeable
Title:  "Certified Reference Material: CodeableConcept"
Description: """This extension links this observation with the certified reference material used for the calibration.
The certified reference material is identified by using a CodeableConcept.
This extension should be used when the unit is UCUM [IU].""" 
// publisher, contact, and other metadata here using caret (^) syntax (omitted)
* insert ExtensionContext(Observation)
* insert SetFmmandStatusRule ( 2, trial-use)
* value[x] only CodeableConcept
* value[x] from LabCertifiedReferenceMaterialVS (example)

Extension: ObservationCertifiedRefMaterialIdentifer
Id:   observation-certifiedRefMaterialIdentifer
Title:  "Certified Reference Material: Identifier"
Description: """This extension links this observation with the certified reference material used for the calibration.
The certified reference material is identified by using an Identifier.
This extension should be used when the unit is UCUM [IU].""" 
// publisher, contact, and other metadata here using caret (^) syntax (omitted)
* insert ExtensionContext(Observation)
* insert SetFmmandStatusRule ( 2, trial-use)
* value[x] only Identifier

Extension: DeviceLabTestKit
Id:   observation-deviceLabTestKit
Title:  "Device Laboratory Test Kit"
Description: """This extension links this observation with the laboratory test kit used for this test.
 Usually only one laboratory test kit is referred""" 
// publisher, contact, and other metadata here using caret (^) syntax (omitted)
* insert ExtensionContext(Observation)
* insert SetFmmandStatusRule ( 2, trial-use)
* value[x] only Reference(Device)

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/maps/DIagRptStatus-to-CompStatus-map.fsh

// -------------------------------------------------------------------------------
//  Concept Model. File: 					labRpt-to-fhir-map.fsh
// -------------------------------------------------------------------------------
Instance: ConceptMap-eu-diagRptStatus2CompStatus
InstanceOf: ConceptMap
Usage: #definition

* name = "ConceptMapDiagRptStatus2CompStatus"
* title = "DiagnosticReport to Composition status"
* status = #draft
* experimental = true
* description = "Proposed relationship between the statused used in the DiagnosticReport resource and that used for the Composition."
* purpose = "It shows how to value the Composition status element based on the DiagnosticReport element."
* sourceUri = "http://hl7.org/fhir/ValueSet/diagnostic-report-status"
* targetUri = "http://hl7.org/fhir/ValueSet/composition-status"

* group[+].source = "http://hl7.org/fhir/diagnostic-report-status|4.0.1"
* group[=].target = "http://hl7.org/fhir/composition-status|4.0.1"

* group[=].element[+].code = #registered
* group[=].element[=].display = "Registered"
* group[=].element[=].target.code = #preliminary
* group[=].element[=].target.display = "Preliminary"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #partial
* group[=].element[=].display = "Partial"
* group[=].element[=].target.code = #preliminary
* group[=].element[=].target.display = "Preliminary"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #preliminary
* group[=].element[=].display = "Preliminary"
* group[=].element[=].target.code = #preliminary
* group[=].element[=].target.display = "Preliminary"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #final
* group[=].element[=].display = "Final"
* group[=].element[=].target.code = #final
* group[=].element[=].target.display = "Final"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #amended
* group[=].element[=].display = "Amended"
* group[=].element[=].target.code = #amended
* group[=].element[=].target.display = "Amended"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #corrected
* group[=].element[=].display = "Corrected"
* group[=].element[=].target.code = #amended
* group[=].element[=].target.display = "Amended"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #appended
* group[=].element[=].display = "Appended"
* group[=].element[=].target.code = #amended
* group[=].element[=].target.display = "Amended"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #cancelled
* group[=].element[=].display = "Cancelled"
* group[=].element[=].target.code = #final
* group[=].element[=].target.display = "Final"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #entered-in-error
* group[=].element[=].display = "Entered in Error"
* group[=].element[=].target.code = #entered-in-error
* group[=].element[=].target.display = "Entered in Error"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #unknown
* group[=].element[=].display = "Unknown"
* group[=].element[=].target.equivalence = #unmatched

/* Commented from this version

* group[+].source = "http://hl7.org/fhir/diagnostic-report-status|5.0.0"
* group[=].target = "http://hl7.org/fhir/composition-status|5.0.0"

* group[=].element[+].code = #registered
* group[=].element[=].display = "Registered"
* group[=].element[=].target.code = #registered
* group[=].element[=].target.display = "Registered"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #partial
* group[=].element[=].display = "Partial"
* group[=].element[=].target.code = #partial
* group[=].element[=].target.display = "Partial"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #preliminary
* group[=].element[=].display = "Preliminary"
* group[=].element[=].target.code = #preliminary
* group[=].element[=].target.display = "Preliminary"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #final
* group[=].element[=].display = "Final"
* group[=].element[=].target.code = #final
* group[=].element[=].target.display = "Final"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #amended
* group[=].element[=].display = "Amended"
* group[=].element[=].target.code = #amended
* group[=].element[=].target.display = "Amended"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #corrected
* group[=].element[=].display = "Corrected"
* group[=].element[=].target.code = #corrected
* group[=].element[=].target.display = "Corrected"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #appended
* group[=].element[=].display = "Appended"
* group[=].element[=].target.code = #appended
* group[=].element[=].target.display = "Appended"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #cancelled
* group[=].element[=].display = "Cancelled"
* group[=].element[=].target.code = #cancelled
* group[=].element[=].target.display = "Cancelled"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #entered-in-error
* group[=].element[=].display = "Entered in Error"
* group[=].element[=].target.code = #entered-in-error
* group[=].element[=].target.display = "Entered in Error"
* group[=].element[=].target.equivalence = #relatedto

* group[=].element[+].code = #unknown
* group[=].element[=].display = "Unknown"
* group[=].element[=].target.code = #unknown
* group[=].element[=].target.display = "Unknown"
* group[=].element[=].target.equivalence = #relatedto
 */

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/author-to-fhir-map.fsh

// -------------------------------------------------------------------------------					
//  Concept Model. File: 					author-to-fhir-map.fsh
// -------------------------------------------------------------------------------					
Instance: author2FHIR-eu-lab					
InstanceOf: ConceptMap					
Usage: #definition					

* insert SetFmmandStatusRuleInstance ( 2, informative)					
* name = "LabRptAuthor2FHIR"					
* title = "eHN Author to this guide Map"					
* status = #draft					
* experimental = true					
* description = "eHN Author Model to this guide Map"					
* purpose = "It shows how the Laboratory Report Author data set defined by the EU eHN guidelines is mapped into this guide"					
* sourceUri = "http://hl7.eu/fhir/laboratory/StructureDefinition/Author"					
* targetUri = "http://hl7.eu/fhir/laboratory/StructureDefinition/Bundle-eu-lab"					
					
					
* group[+].source = "http://hl7.eu/fhir/laboratory/StructureDefinition/Author"					
* group[=].target = "http://hl7.eu/fhir/laboratory/StructureDefinition/Composition-eu-lab"					
					
* group[=].element[+].code = #Author.identifier					
* group[=].element[=].display = "A.1.5.1 Author identifier"					
* group[=].element[=].target.code = #Composition.author.identifier					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #Author.name					
* group[=].element[=].display = "A.1.5.2 Author name"					
* group[=].element[=].target.code = #Composition.author.name					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "Human Author and author.ofType(Practitioner)"					
* group[=].element[+].code = #Author.name					
* group[=].element[=].display = "A.1.5.2 Author name"					
* group[=].element[=].target.code = #Composition.author.Practitioner.name					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "Human Author and  author.ofType(PractitionerRole)"					
* group[=].element[+].code = #Author.name					
* group[=].element[=].display = "A.1.5.2 Author name"					
* group[=].element[=].target.code = #Composition.device.name					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "Device Author, implies author.ofType(Device)"					
* group[=].element[+].code = #Author.organization					
* group[=].element[=].display = "A.1.5.3 Author organization"					
* group[=].element[=].target.code = #Composition.author.organization					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "Human Author and author.ofType(PractitionerRole)"					
* group[=].element[+].code = #Author.organization					
* group[=].element[=].display = "A.1.5.3 Author organization"					
* group[=].element[=].target.code = #Composition.author.owner					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "Device Author, implies author.ofType(Device)"					
//---END					
//---END					
//---END					
//---END					
//---END					
					
* group[+].source = "http://hl7.eu/fhir/laboratory/StructureDefinition/Author"					
* group[=].target = "http://hl7.eu/fhir/laboratory/StructureDefinition/DiagnosticReport-eu-lab"					
					
* group[=].element[+].code = #Author.identifier					
* group[=].element[=].display = "A.1.5.1 Author identifier"					
* group[=].element[=].target.code = #DiagnosticReport.resultsInterpreter.identifier					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "If the author is the interpreter"					
* group[=].element[+].code = #Author.identifier					
* group[=].element[=].display = "A.1.5.1 Author identifier"					
* group[=].element[=].target.code = #DiagnosticReport.performer.identifier					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "If the author is the performer"					
* group[=].element[+].code = #Author.name					
* group[=].element[=].display = "A.1.5.2 Author name"					
* group[=].element[=].target.code = #DiagnosticReport.resultsInterpreter.name					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "If the author is the interpreter and 
resultsInterpreter.resolve().ofType(Practitioner)"					
* group[=].element[+].code = #Author.name					
* group[=].element[=].display = "A.1.5.2 Author name"					
* group[=].element[=].target.code = #DiagnosticReport.resultsInterpreter.practitioner.name					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "If the author is the interpreter and resultsInterpreter.resolve().ofType(PractitionerRole)"					
* group[=].element[+].code = #Author.name					
* group[=].element[=].display = "A.1.5.2 Author name"					
* group[=].element[=].target.code = #DiagnosticReport.performer.name					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "If the author is the performer and performer.resolve().ofType(Practitioner)"					
* group[=].element[+].code = #Author.name					
* group[=].element[=].display = "A.1.5.2 Author name"					
* group[=].element[=].target.code = #DiagnosticReport.performer.Practitioner.name					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "If the author is the performer and performer.resolve().ofType(PractitionerRole)"					
* group[=].element[+].code = #Author.organization					
* group[=].element[=].display = "A.1.5.3 Author organization"					
* group[=].element[=].target.code = #DiagnosticReport.resultsInterpreter.organization					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "If the author is the interpreter and resultsInterpreter.resolve().ofType(PractitionerRole)"					
* group[=].element[+].code = #Author.organization					
* group[=].element[=].display = "A.1.5.3 Author organization"					
* group[=].element[=].target.code = #DiagnosticReport.performer.organization					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "If the author is the performer and performer.resolve().ofType(PractitionerRole)"					
//---END					
//---END					
//---END					
//---END					


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/lab-author.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-author.fsh
// -------------------------------------------------------------------------------				
Logical: AuthorLabEhn				
Id: Author				
Title: "A.1.5 - Author"				
Description:  """Author (by whom the Laboratory result report or a subset of its results was authored). Section A1.5 of the eHN guideline."""				
* insert SetFmmandStatusRule (2, informative)				
* identifier 0..1 Identifier "A.1.5.1 Author identifier" """The health professional or authoring device identification number. Either an internal identifier assigned by a healthcare provider institution or (preferably) a national health professional ID such as the license or registration number.  - Preferred system(s): """				
* name 0..* HumanName "A.1.5.2 Author name" """Person or device name. - Preferred system(s): """				
* organization 0..* Organization "A.1.5.3 Author organization" """The healthcare provider organization information. - Preferred system(s): """		 		
//--- END				
//--- END				
//--- END				
//--- END				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/lab-legalAuth.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-legalAuth.fsh
// -------------------------------------------------------------------------------				
Logical: LegalAuthenticatorLabEhn				
Id: LegalAuthenticator				
Title: "A.1.6 - Legal authenticator"				
Description:  """Legal authenticator (The person taking responsibility for the medical content of the document).
Section A1.6 of the eHN guideline."""				
* insert SetFmmandStatusRule( 2, informative)				
* identifier 0..1 Identifier "A.1.6.1 Legal authenticator identifier" """The health professional identification number. Either an internal identifier assigned by a healthcare provider institution or (preferably) a national health professional ID such as the license or registration number.  - Preferred system(s): """				
* name 0..* HumanName "A.1.6.2 Legal authenticator name" """Person name. - Preferred system(s): """				
* organization 0..* Organization "A.1.6.3 Legal authenticator organization" """The healthcare provider organization information. - Preferred system(s): """		 		
* dateTime 0..1 dateTime "A.1.6.4 Authentication date and time" """Date and time when the document was authorized. - Preferred system(s): ISO 8601"""				
//--- END				
//--- END				
//--- END				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/lab-order.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-order.fsh
// -------------------------------------------------------------------------------				
Logical: OrderLabEhn				
Id: Order				
Title: "A2, A3 - Order"				
Description:  """Order information and reason. Sections A2 and A3 of the eHN guideline."""				
* insert SetFmmandStatusRule( 2, informative)				
* orderDetails 0..1 BackboneElement "A.2 Order information" """A.2 Order information (Laboratory Result Report could respond to multiple test orders) """				
* orderDetails.identifier 0..* Identifier "A.2.1 Order Id" """An identifier of the laboratory test order. Laboratory Result Report may respond to multiple orders."""				
* orderDetails.dateTime 0..* dateTime "A.2.2 Order date and time" """Date and time of the order placement. - Preferred system(s): ISO 8601"""		 		
* orderDetails.orderPlacerIdentifier 0..* Identifier "A.2.3 Order placer identifier" """The health professional identification number. Either an internal identifier assigned by a healthcare provider institution or (preferably) a national health professional ID such as the license or registration number. In case when order placer is not a health professional, e.g. by patients themselves where applicable, appropriate personal identifier should be used. """				
* orderDetails.orderPlacerName 0..* HumanName "A.2.4 Order placer name" """Person name."""				
* orderDetails.orderPlacerContacts 0..* BackboneElement "A.2.5 Order placer contact details" """Contact details of order placer (address and telecom details)."""				
* orderDetails.orderPlacerOrganization 0..* Organization "A.2.6 Order placer organization" """Order placer organization information."""				
* reason 0..* BackboneElement "A.3 Order reason" """A.3 Order reason (Laboratory Result Report could respond to multiple reasons) """				
* reason.code 0..* CodeableConcept "A.3.1 Problem / diagnosis / condition description" """Health conditions affecting the health of the patient and are important to be known for a health professional during a health encounter. Clinical conditions of the subject relevant for the results interpretation.
- Preferred system(s): ICD-10 (ICD-11 when available)
- Preferred system(s): SNOMED CT
- Preferred system(s): Orphacode"""				
//--- END				
//--- END				
//--- END				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/lab-payer.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-payer.fsh
// -------------------------------------------------------------------------------				
Logical: PayerLabEhn				
Id: Payer				
Title: "A.1.3 - Health insurance and payment information"				
Description:  """Health insurance and payment information.  Section A1.3 of the eHN guideline."""				
* insert SetFmmandStatusRule( 2, informative)				
* insurance 0..1 BackboneElement "A.1.3.1 Health insurance information" """Health insurance information is not always required, however, in some jurisdictions, the insurance number is also used as the patient identifier. It is necessary not just for identification but also forms access to funding for care."""				
* insurance.identifier 0..* Identifier "A.1.3.1.1 Health insurance code" """Unique health insurance company identification code. """				
* insurance.name 0..* string "A.1.3.1.2 Health insurance name" """Full, official name of the healthcare insurance provider. """		 		
* insurance.subjectIdentifier 0..* Identifier "A.1.3.1.3 Health insurance number" """Number or code under which the insured person is registered at the insurance provider. """				
//--- END				
//--- END				
//--- END				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
// -------------------------------------------------------------------------------				
//  Map to FHIR R4				
// -------------------------------------------------------------------------------				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/lab-recipient.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-recipient.fsh
// -------------------------------------------------------------------------------				
Logical: RecipientLabEhn				
Id: Recipient				
Title: "A.1.4 - Information recipient"				
Description:  """Information recipient (intended recipient or recipients of the report, additional recipients might be identified by the ordering party, e.g. GP, other specialist), if applicable.
Section A1.4 of the eHN guideline."""				
* insert SetFmmandStatusRule( 2, informative)				
* identifier 0..1 Identifier "A.1.4.1 Recipient identifier" """The health professional identification number.
Either an internal identifier assigned by a healthcare provider institution or (preferably) a national health professional ID such as the license or registration number.
In case when recipient is not a health professional, e.g. patient, appropriate personal identifier should be used."""				
* name 0..* HumanName "A.1.4.2 Recipient name" """Person name."""				
* organization 0..* Organization "A.1.4.3 Recipient organization" """The healthcare provider organization information."""		 		
* address 0..* Address "A.1.4.4 Address" """Mailing and home or office addresses. The addresses are always sequences of address parts (e.g., street address line, country, ZIP code, city) even if postal address formats may vary depending on the country. An address may or may not include a specific use code; if this attribute is not present it is assumed to be the default address useful for any purpose. - Preferred system(s): """				
* country 0..* CodeableConcept "A.1.4.5 Country" """Country of the recipient. - Preferred system(s): ISO 3166"""				
* telecom 0..* ContactPoint "A.1.4.6 Telecom" """Telecommunication contact information (addresses) associated to a person. Multiple telecommunication addresses might be provided. - Preferred system(s): """				
//--- END				
//--- END				
//--- END				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/lab-report.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-report.fsh
// -------------------------------------------------------------------------------				
Logical: LabReportEhn				
Id: LabReport				
Title: "A - Laboratory Report"				
Description:  """Laboratory Report. eHN guideline model."""				
* insert SetFmmandStatusRule( 2, informative)				
* header 1..1 BackboneElement "A.1 Report header data elements" """A.1 Report header data elements"""				
* header.subject 1..1 http://hl7.eu/fhir/laboratory/StructureDefinition/Subject "A.1.1 - A1.2 Patient/subject" """A.1.1 Identification of the patient/subject and A.1.2 Patient/subject related contact information  """				
* header.payer 0..1 http://hl7.eu/fhir/laboratory/StructureDefinition/Payer "A.1.3 Health insurance and payment information" """A.1.3 Health insurance and payment information"""				
* header.informationRecipient 0..1 http://hl7.eu/fhir/laboratory/StructureDefinition/Recipient "A.1.4 Information recipient" """A.1.4 Information recipient (intended recipient or recipients of the report, additional recipients might be identified by the ordering party, e.g. GP, other specialist), if applicable"""				
* header.author 0..* http://hl7.eu/fhir/laboratory/StructureDefinition/Author "A.1.5 Author" """A.1.5 Author (by whom the Laboratory result report or a subset of its results was authored)"""				
* header.legalAuthenticator 0..* http://hl7.eu/fhir/laboratory/StructureDefinition/LegalAuthenticator "A.1.6 Legal authenticator" """A.1.6 Legal authenticator (The person taking responsibility for the medical content of the document)"""				
* header.validator 0..* http://hl7.eu/fhir/laboratory/StructureDefinition/Validator "A.1.7 Result validator" """A.1.7 Result validator"""				
* header.metadata 1..1 BackboneElement "A.1.8 Laboratory report metadata" """A.1.8 Laboratory report metadata"""				
* header.metadata.documentId 1..1 Identifier "A.1.8.0 Document Id" """Unique identifier of the document"""				
* header.metadata.type 1..1 CodeableConcept "A.1.8.1 Document type" """A coded type of the document. Fixed value ""Laboratory report"" - Preferred system(s): LOINC"""				
* header.metadata.status 1..1 CodeableConcept "A.1.8.2 Document status" """The status of the laboratory test result report. E.g., preliminary, final. - Preferred system(s): hl7:DiagnosticReportStatus"""				
* header.metadata.dateTime 1..1 dateTime "A.1.8.3 Report date and time" """Date and time of the result report creation. - Preferred system(s): ISO 8601"""				
* header.metadata.title 0..1 string "A.1.8.4 Document title" """Document title, e.g. 'Laboratory Result report'"""				
* header.metadata.studyType 0..* CodeableConcept "A.1.8.5 Study type" """Type (or types) of the laboratory study performed.  - Preferred system(s): LOINC SNOMED CT """				
* header.metadata.custodian 0..1 BackboneElement "A.1.8.6 Report custodian" """Organisation that is in charge of maintaining the laboratory report """				
* header.metadata.confidentiality 0..1 CodeableConcept "A.1.8.7 Confidentiality" """Level of confidentiality of the document. Implicit value is normal. - Preferred system(s): hl7:Confidentiality"""				
* header.metadata.language 0..1 CodeableConcept "A.1.8.8 Language" """Language in which the document is written. Language is expressed by the ISO language code.- Preferred system(s):  BCP 47"""				
* header.metadata.version 0..1 string "A.1.8.9 Version" """Version of the document."""				
* order 0..* http://hl7.eu/fhir/laboratory/StructureDefinition/Order "A.2-A.3 Order" """A.2 Order information (Laboratory Result Report could respond to multiple test orders)
A.3 Order reason (Laboratory Result Report could respond to multiple reasons)
"""				
* specimen 0..* http://hl7.eu/fhir/laboratory/StructureDefinition/SpecimenLab "A.4 Specimen information" """A.4 Specimen information"""				
* result 0..* http://hl7.eu/fhir/laboratory/StructureDefinition/Result "A.5 Results data elements" """A.5 Results data elements"""				
//--- END				
//--- END				
//--- END				
				
				
				
//--------------------------------------------------------------------------------				
//  Logical Model - Comments				
//--------------------------------------------------------------------------------				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
//--- END				
//--- END				
//--- END				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/lab-result.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-result.fsh
// -------------------------------------------------------------------------------				
Logical: ResultLabEhn				
Id: Result				
Title: "A.5 - Results data elements"				
Description:  """Results data elements. Section A5 of the eHN guideline."""				
* insert SetFmmandStatusRule( 2, informative)				
* narrative 0..1 BackboneElement "A.5.1 Laboratory report narrative" """A.5.1 Laboratory report narrative"""				
* narrative.report 0..* Narrative "A.5.1.1 Narrative report" """Entire report (textual summary inside the laboratory result report document) as issued by the laboratory."""				
* narrative.notes 0..* Narrative "A.5.1.2 Comments, interpretation and recommendations" """Comments, such as a textual interpretation or advice accompanying the result report, for example."""		 		
* observation 0..* BackboneElement "A.5.2 Observation details" """A.5.2 Observation details (report could consist of multiple observations) """				
* observation.dateTime 0..* CodeableConcept "A.5.2.1 Observation date" """Date and time of the observation - Preferred system(s): ISO 8601"""				
* observation.code 0..* CodeableConcept "A.5.2.3 Observation code" """Code representing the observation using the agreed code systems.
- Preferred system(s): LOINC
 - Preferred system(s): NPU
 - Preferred system(s): SNOMED CT"""				
* observation.code.name 0..* string "A.5.2.3.1 Observation name" """Full name of the observation according to the used test coding standard."""				
* observation.code.originalName 0..* string "A.5.2.3.2 Observation original name" """Original (conventional) name of the observation as used by the laboratory"""				
* observation.code.displayName 0..* string "A.5.2.3.3 Observation display name" """Simplified (short name of the observation) for display."""				
* observation.method 0..* CodeableConcept "A.5.2.4 Observation method" """Observation method (measurement principle) to obtain the result.
- Preferred system(s): SNOMED CT"""				
* observation.device 0..* CodeableConcept "A.5.2.5 Observation device" """Device (analyser), laboratory test kit and used calibrator information (identifier, type, name, model, manufacturer)
- Preferred system(s): SNOMED CT
 - Preferred system(s): EMDN"""				
* observation.order 0..* BackboneElement "A.5.2.8 Order" """Identifies order and order placer this observation belongs to."""				
* observation.performer 0..* BackboneElement "A.5.2.9 Performer" """Identifies the originator/author and provides provenance information about the source of the results data that may have not originated with the source of the whole Laboratory Report document. """				
* observation.reporter 0..* BackboneElement "A.5.2.10 Reporter" """With certain observation results, e.g. there may also be an interpreter or a person responsible for validation."""				
* observation.result 0..* BackboneElement "A.5.2.11 Observation result" """Result of the observation including text, numeric and coded results of the measurement and measurement uncertainty. Content of the observation result will vary according to the type of the observation. 
- Preferred system(s): SNOMED CT (for ordinal or nominal scale results and result interpretation)
 - Preferred system(s): UCUM (for units)"""				
* observation.interpretation 0..* CodeableConcept "A.5.2.12 Observation interpretation" """Information about reference intervals and result interpretation.
 - Preferred system(s): SNOMED CT
 - Preferred system(s): HL7 v3 Code System ObservationInterpretation"""				
* observation.description 0..* Narrative "A.5.2.13 Result description" """Comments and narrative representation of the observation result and findings."""				
* observation.accreditationStatus 0..* BackboneElement "A.5.2.14 Accreditation status" """Accreditation status of the laboratory for the particular observation."""				
//--- END				
//--- END				
//--- END				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/lab-specimen.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-specimen.fsh
// -------------------------------------------------------------------------------				
Logical: SpecimenLabEhn				
Id: SpecimenLab				
Title: "A.4 - Specimen information"				
Description:  """Specimen information. Section A4 of the eHN guideline."""				
* insert SetFmmandStatusRule( 2, informative)				
* identifier 0..1 Identifier "A.4.1 Specimen identifier" """An identifier of the specimen which is unique within in a defined scope. Example: identifier assigned by Specimening system, identifier assigned by laboratory etc. Multiple identifiers can be used. - Preferred system(s): """				
* speciesType 0..* CodeableConcept "A.4.2 Type of species" """Biologic type of species for laboratory result reports bound to non-human subjects. - Preferred system(s): SNOMED CT"""				
* material 0..* CodeableConcept "A.4.3 Material" """Specimen material. - Preferred system(s): SNOMED CT"""		 		
* collected 0..* dateTime "A.4.4 Collection period" """Collection date time or period. - Preferred system(s): ISO 8601"""				
* anatomicLocation 0..* CodeableConcept "A.4.5 Anatomic location" """Anatomic location (body location, laterality) where the material is collected, e.g. Elbow, left - Preferred system(s): SNOMED CT"""				
* morphology 0..* CodeableConcept "A.4.6 Morphology" """Morphological abnormalities of the anatomical location where the material is taken, for example wound, ulcer. - Preferred system(s): SNOMED CT"""				
* sourceDevice 0..* CodeableConcept "A.4.7 Source Device" """If the material is not collected directly from the patient but comes from a patient-related object, e.g. a catheter
 - Preferred system(s): SNOMED CT
 - Preferred system(s): EMDN"""				
* collectionMethod 0..* CodeableConcept "A.4.8 Collection procedure/method" """If relevant for the results, the method of obtaining the specimen. - Preferred system(s): SNOMED CT"""				
* receivedDateTime 0..* dateTime "A.4.9 Received date" """Date and time that the material is handed over at the laboratory or specimen collection centre. - Preferred system(s): ISO 8601"""				
//--- END				
//--- END				
//--- END				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/lab-subject.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-subject.fsh
// -------------------------------------------------------------------------------				
Logical: SubjectLabEhn				
Id: Subject				
Title: "A1.1, A1.2 - Subject of care"				
Description:  """Patient or Subject of care. Sections A1.1 and A1.2 of the eHN guideline."""				
* insert SetFmmandStatusRule( 2, informative)				
* identification 1..1 BackboneElement "A.1.1 Identification of the patient/subject" """A.1.1 Identification of the patient/subject"""				
* identification.familyName 0..* string "A.1.1.1 Familyname/surname" """The family name/surname/last name of the patient. This field can contain more than one element or multiple fields could be present."""				
* identification.givenName 0..* string "A.1.1.2 Given name" """The given name/first name of the patient (also known as forename or first name). This field can contain more than one element. """		 		
* identification.dateOfBirth 0..1 dateTime "A.1.1.3 Date of birth" """The date of birth of the patient [ISO TS 22220]. As age of the patient might be important for correct interpretation of the test result values, complete date of birth should be provided. - Preferred system(s): Complete date, without time, following the ISO 8601 """				
* identification.identifier 0..1 Identifier "A.1.1.4 Personal identifier" """An identifier of the patient that is unique within a defined scope. Example: National ID (birth number) for Czech patient. Multiple identifiers could be provided. """				
* identification.gender 0..1 CodeableConcept "A.1.1.5 Gender" """This field must contain a recognised valid value for 'administrative gender'. 
If different, 'physiological gender' should be communicated elsewhere
Preferred system(s): - Preferred system(s): HL7 Administrative Gender """				
* addressTelecom 0..* BackboneElement "A.1.2 Patient/subject related contact information" """A.1.2 Patient/subject related contact information"""				
* addressTelecom.address 0..* Address "A.1.2.1 Address" """Mailing and home or office addresses. The addresses are always sequences of address parts (e.g. street address line, country, ZIP code, city) even if postal address formats may vary depending on the country. An address may or may not include a specific use code; if this attribute is not present it is assumed to be the default address useful for any purpose. - Preferred system(s):  ISO 3166"""				
* addressTelecom.telecom 0..* ContactPoint "A.1.2.2 Telecom" """Telecommunication contact information (addresses) associated to a person. Multiple telecommunication addresses might be provided. - Preferred system(s): """				
//--- END				
//--- END				
//--- END				
				
				
				
				
				
				
				
				
				
				
// -------------------------------------------------------------------------------				
//  Map to FHIR R4				
// -------------------------------------------------------------------------------				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/lab-validator.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-validator.fsh
// -------------------------------------------------------------------------------				
Logical: ValidatorLabEhn				
Id: Validator				
Title: "A.1.7 - Result validator"				
Description:  """Result validator. Section A1.7 of the eHN guideline."""				
* insert SetFmmandStatusRule( 2, informative)				
* identifier 0..1 Identifier "A.1.7.1 Result validator identifier" """The health professional identification number. Either an internal identifier assign by a healthcare provider institution or (preferably) a national health professional ID such as the license or registration number.  - Preferred system(s): """				
* name 0..* HumanName "A.1.7.2 Result validator name" """Person name. - Preferred system(s): """				
* organization 0..* Organization "A.1.7.3 Result validator organisation" """The healthcare provider organisation information. - Preferred system(s): """		 		
* dateTime 0..1 dateTime "A.1.7.4 Validation date and time" """Date and time when the document was validated. - Preferred system(s): ISO 8601"""				
//--- END				
//--- END				
//--- END				


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/labRpt-to-fhir-map.fsh

// -------------------------------------------------------------------------------					
//  Concept Model. File: 					labRpt-to-fhir-map.fsh
// -------------------------------------------------------------------------------					
Instance: labRpt2FHIR-eu-lab					
InstanceOf: ConceptMap					
Usage: #definition					
* insert SetFmmandStatusRuleInstance( 2, informative)					
* name = "LabRpt2FHIR"					
* title = "eHN Lab Report to this guide Map"					
* status = #draft					
* experimental = true					
* description = "eHN Lab Report to this guide Map"					
* purpose = "It shows how the Laboratory Report data set defined by the EU eHN guidelines is mapped into this guide"					
* sourceUri = "http://hl7.eu/fhir/laboratory/StructureDefinition/LabReport"					
* targetUri = "http://hl7.eu/fhir/laboratory/StructureDefinition/Bundle-eu-lab"					
					
* group[+].source = "http://hl7.eu/fhir/laboratory/StructureDefinition/LabReport"					
* group[=].target = "http://hl7.eu/fhir/laboratory/StructureDefinition/DiagnosticReport-eu-lab"					
					
* group[=].element[+].code = #LabReport.header					
* group[=].element[=].display = "A.1 Report header data elements"					
* group[=].element[=].target.code = #DiagnosticReport					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #LabReport.header.subject					
* group[=].element[=].display = "A.1.1 - A1.2 Patient/subject"					
* group[=].element[=].target.code = #DiagnosticReport.subject					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #LabReport.header.payer					
* group[=].element[=].display = "A.1.3 Health insurance and payment information"					
* group[=].element[=].target.code = #DiagnosticReport.basedOn.insurance					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "basedOn.resolve().ofType(ServiceRequest).insurance.resolve().ofType(Coverage)"					
* group[=].element[+].code = #LabReport.header.informationRecipient					
* group[=].element[=].display = "A.1.4 Information recipient"					
* group[=].element[=].target.code = #DiagnosticReport.extension:information-recipient					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #LabReport.header.author					
* group[=].element[=].display = "A.1.5 Author"					
* group[=].element[=].target.code = #DiagnosticReport.resultsInterpreter					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "If the author is the interpreter"					
* group[=].element[+].code = #LabReport.header.author					
* group[=].element[=].display = "A.1.5 Author"					
* group[=].element[=].target.code = #DiagnosticReport.performer					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "If the author is the perfomer"					
* group[=].element[+].code = #LabReport.header.legalAuthenticator					
* group[=].element[=].display = "A.1.6 Legal authenticator"					
//-- unmatched					
//-- unmatched					
* group[=].element[=].target.equivalence = #unmatched					
* group[=].element[=].target.comment = "Mapped in the Composition resource"					
* group[=].element[+].code = #LabReport.header.validator					
* group[=].element[=].display = "A.1.7 Result validator"					
//-- unmatched					
//-- unmatched					
* group[=].element[=].target.equivalence = #unmatched					
* group[=].element[=].target.comment = "Mapped in the Composition resource"					
* group[=].element[+].code = #LabReport.header.metadata					
* group[=].element[=].display = "A.1.8 Laboratory report metadata"					
* group[=].element[=].target.code = #DiagnosticReport					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #LabReport.header.metadata.documentId					
* group[=].element[=].display = "A.1.8.0 Document Id"					
* group[=].element[=].target.code = #DiagnosticReport.identifier					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "If it is the identifier of the report indipendently by its version. Otherwise you should refer to the Bundle.indentifier"					
* group[=].element[+].code = #LabReport.header.metadata.type					
* group[=].element[=].display = "A.1.8.1 Document type"					
* group[=].element[=].target.code = #DiagnosticReport.code					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #LabReport.header.metadata.status					
* group[=].element[=].display = "A.1.8.2 Document status"					
* group[=].element[=].target.code = #DiagnosticReport.status					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "For FHIR R4 the more granular status is recorded in the DiagnosticReport.status"					
* group[=].element[+].code = #LabReport.header.metadata.dateTime					
* group[=].element[=].display = "A.1.8.3 Report date and time"					
* group[=].element[=].target.code = #DiagnosticReport.effectiveDateTime					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #LabReport.header.metadata.title					
* group[=].element[=].display = "A.1.8.4 Document title"					
//-- unmatched					
//-- unmatched					
* group[=].element[=].target.equivalence = #unmatched					
* group[=].element[=].target.comment = "Mapped in the Composition resource"					
* group[=].element[+].code = #LabReport.header.metadata.studyType					
* group[=].element[=].display = "A.1.8.5 Study type"					
* group[=].element[=].target.code = #DiagnosticReport.category					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #LabReport.header.metadata.custodian					
* group[=].element[=].display = "A.1.8.6 Report custodian"					
//-- unmatched					
//-- unmatched					
* group[=].element[=].target.equivalence = #unmatched					
* group[=].element[=].target.comment = "Mapped in the Composition resource"					
* group[=].element[+].code = #LabReport.header.metadata.confidentiality					
* group[=].element[=].display = "A.1.8.7 Confidentiality"					
//-- unmatched					
//-- unmatched					
* group[=].element[=].target.equivalence = #unmatched					
* group[=].element[=].target.comment = "Mapped in the Composition resource"					
* group[=].element[+].code = #LabReport.header.metadata.language					
* group[=].element[=].display = "A.1.8.8 Language"					
* group[=].element[=].target.code = #DiagnosticReport.language					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #LabReport.header.metadata.version					
* group[=].element[=].display = "A.1.8.9 Version"					
//-- unmatched					
//-- unmatched					
* group[=].element[=].target.equivalence = #unmatched					
* group[=].element[=].target.comment = "Mapped in the Composition resource if it refers to the business report version"					
* group[=].element[+].code = #LabReport.order					
* group[=].element[=].display = "A.2-A.3 Order"					
* group[=].element[=].target.code = #DiagnosticReport.basedOn					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "basedOn.resolve().ofType(ServiceRequest)"					
* group[=].element[+].code = #LabReport.specimen					
* group[=].element[=].display = "A.4 Specimen information"					
* group[=].element[=].target.code = #DiagnosticReport.specimen					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #LabReport.result					
* group[=].element[=].display = "A.5 Results data elements"					
* group[=].element[=].target.code = #DiagnosticReport.result					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #LabReport.specimen					
* group[=].element[=].display = "A.4 Specimen information"					
* group[=].element[=].target.code = #DiagnosticReport.result.specimen					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "result.resolve().ofType(Observation)"					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
					
					
					
* group[+].source = "http://hl7.eu/fhir/laboratory/StructureDefinition/LabReport"					
* group[=].target = "http://hl7.eu/fhir/laboratory/StructureDefinition/Composition-eu-lab"					
					
					
* group[=].element[+].code = #LabReport.header					
* group[=].element[=].display = "A.1 Report header data elements"					
* group[=].element[=].target.code = #Composition					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #LabReport.header.subject					
* group[=].element[=].display = "A.1.1 - A1.2 Patient/subject"					
* group[=].element[=].target.code = #Composition.subject					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #LabReport.header.payer					
* group[=].element[=].display = "A.1.3 Health insurance and payment information"					
* group[=].element[=].target.code = #Composition.extension:basedOn-order-or-requisition.insurance					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "extension(http://hl7.eu/fhir/laboratory/StructureDefinition/composition-basedOn-order-or-requisition).resolve().ofType(ServiceRequest).insurance.resolve().ofType(Coverage)"					
* group[=].element[+].code = #LabReport.header.informationRecipient					
* group[=].element[=].display = "A.1.4 Information recipient"					
* group[=].element[=].target.code = #Composition.extension:information-recipient					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #LabReport.header.author					
* group[=].element[=].display = "A.1.5 Author"					
* group[=].element[=].target.code = #Composition.author					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #LabReport.header.legalAuthenticator					
* group[=].element[=].display = "A.1.6 Legal authenticator"					
* group[=].element[=].target.code = #Composition.attester.party					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "The person authenticated the content and accepted legal responsibility for its content.
attester.where(mode='legal')"					
* group[=].element[+].code = #LabReport.header.validator					
* group[=].element[=].display = "A.1.7 Result validator"					
* group[=].element[=].target.code = #Composition.attester.party					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "The person authenticated the content in their professional capacity.
attester.where(mode='professional')"					
* group[=].element[+].code = #LabReport.header.metadata					
* group[=].element[=].display = "A.1.8 Laboratory report metadata"					
* group[=].element[=].target.code = #Composition					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #LabReport.header.metadata.documentId					
* group[=].element[=].display = "A.1.8.0 Document Id"					
* group[=].element[=].target.code = #Composition.identifier					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "If it is the identifier of the report indipendently by its version. Otherwise you should refer to the Bundle.indentifier"					
* group[=].element[+].code = #LabReport.header.metadata.type					
* group[=].element[=].display = "A.1.8.1 Document type"					
* group[=].element[=].target.code = #Composition.type					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #LabReport.header.metadata.status					
* group[=].element[=].display = "A.1.8.2 Document status"					
* group[=].element[=].target.code = #Composition.status					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "For FHIR R4 the more granular status is recorded in the DiagnosticReport.status. Mapping rules for valuing the Compisition.status are specified in http://hl7.eu/fhir/laboratory/ConceptMap/ConceptMap-eu-diagRptStatus2CompStatus"					
* group[=].element[+].code = #LabReport.header.metadata.dateTime					
* group[=].element[=].display = "A.1.8.3 Report date and time"					
* group[=].element[=].target.code = #Composition.date					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #LabReport.header.metadata.title					
* group[=].element[=].display = "A.1.8.4 Document title"					
* group[=].element[=].target.code = #Composition.title					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #LabReport.header.metadata.studyType					
* group[=].element[=].display = "A.1.8.5 Study type"					
* group[=].element[=].target.code = #Composition.category					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #LabReport.header.metadata.custodian					
* group[=].element[=].display = "A.1.8.6 Report custodian"					
* group[=].element[=].target.code = #Composition.custodian					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #LabReport.header.metadata.confidentiality					
* group[=].element[=].display = "A.1.8.7 Confidentiality"					
* group[=].element[=].target.code = #Composition.confidentiality					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #LabReport.header.metadata.language					
* group[=].element[=].display = "A.1.8.8 Language"					
* group[=].element[=].target.code = #Composition.language					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #LabReport.header.metadata.version					
* group[=].element[=].display = "A.1.8.9 Version"					
* group[=].element[=].target.code = #Composition.extension:versionNumber					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "if it refers to the business report version"					
* group[=].element[+].code = #LabReport.order					
* group[=].element[=].display = "A.2-A.3 Order"					
* group[=].element[=].target.code = #Composition.extension:basedOn-order-or-requisition.insurance					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "extension(http://hl7.eu/fhir/laboratory/StructureDefinition/composition-basedOn-order-or-requisition).resolve().ofType(ServiceRequest)"					
* group[=].element[+].code = #LabReport.specimen					
* group[=].element[=].display = "A.4 Specimen information"					
* group[=].element[=].target.code = #Composition.section:lab-no-subsections.entry.specimen					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "If no sub sections"					
* group[=].element[+].code = #LabReport.result					
* group[=].element[=].display = "A.5 Results data elements"					
* group[=].element[=].target.code = #Composition.section:lab-no-subsections.entry					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "If no sub sections"					
* group[=].element[+].code = #LabReport.specimen					
* group[=].element[=].display = "A.4 Specimen information"					
* group[=].element[=].target.code = #Composition.section:lab-subsections.section.entry.specimen					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "If sub sections"					
* group[=].element[+].code = #LabReport.result					
* group[=].element[=].display = "A.5 Results data elements"					
* group[=].element[=].target.code = #Composition.section:lab-subsections.section.entry					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "If sub sections"					
//---END					
//---END					
//---END					
					
					
					
					
					
					
					
					
					
					


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/legalAuth-to-fhir-map.fsh

// -------------------------------------------------------------------------------					
//  Concept Model. File: 					legalAuth-to-fhir-map.fsh
// -------------------------------------------------------------------------------					
Instance: legalAuth2FHIR-eu-lab					
InstanceOf: ConceptMap					
Usage: #definition					
* insert SetFmmandStatusRuleInstance( 2, informative)					
* name = "LegalAuth2Fhir"					
* title = "eHN Recipient to this guide Map"					
* status = #draft					
* experimental = true					
* description = "eHN Legal Authenticator Model to this guide Map"					
* purpose = "It shows how theLegal Authenticator Recipient data set defined by the EU eHN guidelines is mapped into this guide"					
* sourceUri = "http://hl7.eu/fhir/laboratory/StructureDefinition/LegalAuthenticator"					
* targetUri = "http://hl7.eu/fhir/laboratory/StructureDefinition/Composition-eu-lab"					
					
* group[+].source = "http://hl7.eu/fhir/laboratory/StructureDefinition/LegalAuthenticator"					
* group[=].target = "http://hl7.eu/fhir/laboratory/StructureDefinition/Composition-eu-lab"					
					
* group[=].element[+].code = #LegalAuthenticator.identifier					
* group[=].element[=].display = "A.1.6.1 Legal authenticator identifier"					
* group[=].element[=].target.code = #Composition.attester.party.identifier					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "attester.where(mode='legal')"					
* group[=].element[+].code = #LegalAuthenticator.name					
* group[=].element[=].display = "A.1.6.2 Legal authenticator name"					
* group[=].element[=].target.code = #Composition.attester.party.name					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "attester.where(mode='legal').party.resolve().ofType(Practitioner).name"					
* group[=].element[+].code = #LegalAuthenticator.name					
* group[=].element[=].display = "A.1.6.2 Legal authenticator name"					
* group[=].element[=].target.code = #Composition.attester.party.Practitioner.name					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "attester.where(mode='legal').party.resolve().ofType(PractitionerRole).Practitioner.resolve().name"					
* group[=].element[+].code = #LegalAuthenticator.organization					
* group[=].element[=].display = "A.1.6.3 Legal authenticator organization"					
* group[=].element[=].target.code = #Composition.attester.party.organization					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "attester.where(mode='legal').party.resolve().ofType(PractitionerRole).organization.resolve()"					
* group[=].element[+].code = #LegalAuthenticator.dateTime					
* group[=].element[=].display = "A.1.6.4 Authentication date and time"					
* group[=].element[=].target.code = #Composition.attester.time					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "attester.where(mode='legal').time"					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/order-to-fhir-map.fsh

// -------------------------------------------------------------------------------					
//  Concept Model. File: 					order-to-fhir-map.fsh
// -------------------------------------------------------------------------------					
Instance: order2FHIR-eu-lab					
InstanceOf: ConceptMap					
Usage: #definition					
* insert SetFmmandStatusRuleInstance( 2, informative)					
* name = "Order2Fhir"					
* title = "eHN Order to this guide Map"					
* status = #draft					
* experimental = true					
* description = "eHN Order to this guide Map"					
* purpose = "It shows how the Order data set defined by the EU eHN guidelines is mapped into this guide"					
* sourceUri = "http://hl7.eu/fhir/laboratory/StructureDefinition/Order"					
* targetUri = "http://hl7.eu/fhir/laboratory/StructureDefinition/ServiceRequest-eu-lab"					
					
* group[+].source = "http://hl7.eu/fhir/laboratory/StructureDefinition/Order"					
* group[=].target = "http://hl7.eu/fhir/laboratory/StructureDefinition/ServiceRequest-eu-lab"					
					
* group[=].element[+].code = #Order.orderDetails					
* group[=].element[=].display = "A.2 Order information"					
* group[=].element[=].target.code = #ServiceRequest					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #Order.orderDetails.identifier					
* group[=].element[=].display = "A.2.1 Order Id"					
* group[=].element[=].target.code = #ServiceRequest.identifier					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #Order.orderDetails.identifier					
* group[=].element[=].display = "A.2.1 Order Id"					
* group[=].element[=].target.code = #ServiceRequest.requisition					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "if the Composite Request ID."					
* group[=].element[+].code = #Order.orderDetails.dateTime					
* group[=].element[=].display = "A.2.2 Order date and time"					
* group[=].element[=].target.code = #ServiceRequest.authoredOn					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #Order.orderDetails.orderPlacerIdentifier					
* group[=].element[=].display = "A.2.3 Order placer identifier"					
* group[=].element[=].target.code = #ServiceRequest.requester.identifier					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "if the Composite Request ID."					
* group[=].element[+].code = #Order.orderDetails.orderPlacerName					
* group[=].element[=].display = "A.2.4 Order placer name"					
* group[=].element[=].target.code = #ServiceRequest.requester.name					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "requester.resolve().ofType(Practitioner).name"					
* group[=].element[+].code = #Order.orderDetails.orderPlacerName					
* group[=].element[=].display = "A.2.4 Order placer name"					
* group[=].element[=].target.code = #ServiceRequest.requester.Practitioner.name					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "requester.resolve().ofType(PractitionerRole).Practitioner.resolve().name"					
* group[=].element[+].code = #Order.orderDetails.orderPlacerContacts					
* group[=].element[=].display = "A.2.5 Order placer contact details"					
* group[=].element[=].target.code = #ServiceRequest.requester.telecom					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "requester.resolve().ofType(Practitioner).telecom"					
* group[=].element[+].code = #Order.orderDetails.orderPlacerContacts					
* group[=].element[=].display = "A.2.5 Order placer contact details"					
* group[=].element[=].target.code = #ServiceRequest.requester.address					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "requester.resolve().ofType(Practitioner).address"					
* group[=].element[+].code = #Order.orderDetails.orderPlacerContacts					
* group[=].element[=].display = "A.2.5 Order placer contact details"					
* group[=].element[=].target.code = #ServiceRequest.requester.telecom					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "requester.resolve().ofType(PractitionerRole).telecom"					
* group[=].element[+].code = #Order.orderDetails.orderPlacerOrganization					
* group[=].element[=].display = "A.2.6 Order placer organization"					
* group[=].element[=].target.code = #ServiceRequest.requester.organization					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "requester.resolve().ofType(PractitionerRole).organization.resolve()"					
* group[=].element[+].code = #Order.reason					
* group[=].element[=].display = "A.3 Order reason"					
* group[=].element[=].target.code = #ServiceRequest.reasonCode					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #Order.reason					
* group[=].element[=].display = "A.3 Order reason"					
* group[=].element[=].target.code = #ServiceRequest.reasonReference					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #Order.reason.code					
* group[=].element[=].display = "A.3.1 Problem / diagnosis / condition description"					
* group[=].element[=].target.code = #ServiceRequest.reasonCode					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/payer-to-fhir-map.fsh

// -------------------------------------------------------------------------------					
//  Concept Model. File: 					payer-to-fhir-map.fsh
// -------------------------------------------------------------------------------					
Instance: payer2FHIR-eu-lab					
InstanceOf: ConceptMap					
Usage: #definition					
* insert SetFmmandStatusRuleInstance( 2, informative)					
* name = "Payer2Fhir"					
* title = "eHN Payer to this guide Map"					
* status = #draft					
* experimental = true					
* description = "eHN Payer Model to this guide Map"					
* purpose = "It shows how the Laboratory Report Payer data set defined by the EU eHN guidelines is mapped into this guide"					
* sourceUri = "http://hl7.eu/fhir/laboratory/StructureDefinition/Payer"					
* targetUri = "http://hl7.eu/fhir/laboratory/StructureDefinition/Bundle-eu-lab"					
					
* group[+].source = "http://hl7.eu/fhir/laboratory/StructureDefinition/Payer"					
* group[=].target = "http://hl7.eu/fhir/laboratory/StructureDefinition/ServiceRequest-eu-lab"					
					
* group[=].element[+].code = #Payer.insurance					
* group[=].element[=].display = "A.1.3.1 Health insurance information"					
* group[=].element[=].target.code = #ServiceRequest.insurance					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "insurance.ofType(Coverage)"					
* group[=].element[+].code = #Payer.insurance.identifier					
* group[=].element[=].display = "A.1.3.1.1 Health insurance code"					
* group[=].element[=].target.code = #ServiceRequest.insurance					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "details in Group 2"					
* group[=].element[+].code = #Payer.insurance.name					
* group[=].element[=].display = "A.1.3.1.2 Health insurance name"					
* group[=].element[=].target.code = #ServiceRequest.insurance					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "details in Group 2"					
* group[=].element[+].code = #Payer.insurance.subjectIdentifier					
* group[=].element[=].display = "A.1.3.1.3 Health insurance number"					
* group[=].element[=].target.code = #ServiceRequest.insurance					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "details in Group 2"					
//---END					
//---END					
//---END					
//---END					
					
					
* group[+].source = "http://hl7.eu/fhir/laboratory/StructureDefinition/Payer"					
* group[=].target = "http://hl7.org/fhir/StructureDefinition/Coverage"					
					
* group[=].element[+].code = #Payer.insurance					
* group[=].element[=].display = "A.1.3.1 Health insurance information"					
* group[=].element[=].target.code = #Coverage					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #Payer.insurance.identifier					
* group[=].element[=].display = "A.1.3.1.1 Health insurance code"					
* group[=].element[=].target.code = #Coverage.payor.identifier					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "payor.ofType(Organization)"					
* group[=].element[+].code = #Payer.insurance.name					
* group[=].element[=].display = "A.1.3.1.2 Health insurance name"					
* group[=].element[=].target.code = #Coverage.payor.name					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "payor.ofType(Organization)"					
* group[=].element[+].code = #Payer.insurance.subjectIdentifier					
* group[=].element[=].display = "A.1.3.1.3 Health insurance number"					
* group[=].element[=].target.code = #Coverage.policyHolder.identifier					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "If it refers to the owner of the policy"					
* group[=].element[+].code = #Payer.insurance.subjectIdentifier					
* group[=].element[=].display = "A.1.3.1.3 Health insurance number"					
* group[=].element[=].target.code = #Coverage.beneficiary.identifier					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "If it refers to the plan beneficiary"					
* group[=].element[+].code = #Payer.insurance.subjectIdentifier					
* group[=].element[=].display = "A.1.3.1.3 Health insurance number"					
* group[=].element[=].target.code = #Coverage.subscriberId					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "If it is the ID assigned to the subscriber"					
* group[=].element[+].code = #Payer.insurance.subjectIdentifier					
* group[=].element[=].display = "A.1.3.1.3 Health insurance number"					
* group[=].element[=].target.code = #Coverage.subscriber.identifier					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "If it refers to the subscriber to the policy and the Subscriber is of type Patient"					
//---END					
//---END					
//---END					
//---END					
					
					
* group[+].source = "http://hl7.eu/fhir/laboratory/StructureDefinition/Payer"					
* group[=].target = "http://hl7.eu/fhir/laboratory/StructureDefinition/Patient-eu-lab"					
					
* group[=].element[+].code = #Payer.insurance					
* group[=].element[=].display = "A.1.3.1 Health insurance information"					
//-- unmatched					
//-- unmatched					
* group[=].element[=].target.equivalence = #unmatched					
					
* group[=].element[+].code = #Payer.insurance.identifier					
* group[=].element[=].display = "A.1.3.1.1 Health insurance code"					
//-- unmatched					
//-- unmatched					
* group[=].element[=].target.equivalence = #unmatched					
					
* group[=].element[+].code = #Payer.insurance.name					
* group[=].element[=].display = "A.1.3.1.2 Health insurance name"					
//-- unmatched					
//-- unmatched					
* group[=].element[=].target.equivalence = #unmatched					
					
* group[=].element[+].code = #Payer.insurance.subjectIdentifier					
* group[=].element[=].display = "A.1.3.1.3 Health insurance number"					
* group[=].element[=].target.code = #Patient.identifier					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "Sometimes the identifier assigned by the payor (e.g. the SSN) is used as one of the Patient Identifiers"					
//---END					
//---END					
//---END					
//---END					


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/recipient-to-fhir-map.fsh

// -------------------------------------------------------------------------------					
//  Concept Model. File: 					recipient-to-fhir-map.fsh
// -------------------------------------------------------------------------------					
Instance: recipient2FHIR-eu-lab					
InstanceOf: ConceptMap					
Usage: #definition					
* insert SetFmmandStatusRuleInstance( 2, informative)					
* name = "Recipient2FHIR"					
* title = "eHN Recipient to this guide Map"					
* status = #draft					
* experimental = true					
* description = "eHN Recipient Model to this guide Map"					
* purpose = "It shows how the Laboratory Report Recipient data set defined by the EU eHN guidelines is mapped into this guide"					
* sourceUri = "http://hl7.eu/fhir/laboratory/StructureDefinition/Recipient"					
* targetUri = "http://hl7.eu/fhir/StructureDefinition/information-recipient"					
					
* group[+].source = "http://hl7.eu/fhir/laboratory/StructureDefinition/Recipient"					
* group[=].target = "http://hl7.eu/fhir/StructureDefinition/information-recipient"					
					
* group[=].element[+].code = #Recipient.identifier					
* group[=].element[=].display = "A.1.4.1 Recipient identifier"					
* group[=].element[=].target.code = #extension:information-recipient.valueReference.identifier					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #Recipient.name					
* group[=].element[=].display = "A.1.4.2 Recipient name"					
* group[=].element[=].target.code = #extension:information-recipient.valueReference.name					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #Recipient.organization					
* group[=].element[=].display = "A.1.4.3 Recipient organization"					
* group[=].element[=].target.code = #extension:information-recipient.ValueReference					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "ValueReference.resolve().ofType(Organization). If the recipient is an organization."					
* group[=].element[+].code = #Recipient.organization					
* group[=].element[=].display = "A.1.4.3 Recipient organization"					
* group[=].element[=].target.code = #extension:information-recipient.ValueReference.organization					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "ValueReference.resolve().ofType(PractitionerRole). If it is the organization the professional belong to"					
* group[=].element[+].code = #Recipient.address					
* group[=].element[=].display = "A.1.4.4 Address"					
* group[=].element[=].target.code = #extension:information-recipient.ValueReference.address					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "If ValueReference.resolve().ofType(Practitioner) OR ValueReference.resolve().ofType(Patient)"					
* group[=].element[+].code = #Recipient.country					
* group[=].element[=].display = "A.1.4.5 Country"					
* group[=].element[=].target.code = #extension:information-recipient.ValueReference.address.country					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "If ValueReference.resolve().ofType(Practitioner) OR ValueReference.resolve().ofType(Patient)"					
* group[=].element[+].code = #Recipient.telecom					
* group[=].element[=].display = "A.1.4.6 Telecom"					
* group[=].element[=].target.code = #extension:information-recipient.ValueReference.telecom					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "If ValueReference.resolve().ofType(Practitioner) OR ValueReference.resolve().ofType(Patient)"					
* group[=].element[+].code = #Recipient.address					
* group[=].element[=].display = "A.1.4.4 Address"					
* group[=].element[=].target.code = #extension:information-recipient.ValueReference.practitioner.address					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "If ValueReference.resolve().ofType(PractitionerRole)"					
* group[=].element[+].code = #Recipient.country					
* group[=].element[=].display = "A.1.4.5 Country"					
* group[=].element[=].target.code = #extension:information-recipient.ValueReference.practitioner.address.country					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "If ValueReference.resolve().ofType(PractitionerRole)"					
* group[=].element[+].code = #Recipient.telecom					
* group[=].element[=].display = "A.1.4.6 Telecom"					
* group[=].element[=].target.code = #extension:information-recipient.ValueReference.practitioner.telecom					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "If ValueReference.resolve().ofType(PractitionerRole)"					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/result-to-fhir-map.fsh

// -------------------------------------------------------------------------------					
//  Concept Model. File: 					result-to-fhir-map.fsh
// -------------------------------------------------------------------------------					
Instance: result2FHIR-eu-lab					
InstanceOf: ConceptMap					
Usage: #definition					
* insert SetFmmandStatusRuleInstance( 2, informative)					
* name = "LabRptResult2FHIR"					
* title = "eHN Result to this guide Map"					
* status = #draft					
* experimental = true					
* description = "eHN Result Model to this guide Map"					
* purpose = "It shows how the Result data set defined by the EU eHN guidelines is mapped into this guide"					
* sourceUri = "http://hl7.eu/fhir/laboratory/StructureDefinition/Result"					
* targetUri = "http://hl7.eu/fhir/laboratory/StructureDefinition/Bundle-eu-lab"					
					
					
* group[+].source = "http://hl7.eu/fhir/laboratory/StructureDefinition/Result"					
* group[=].target = "http://hl7.eu/fhir/laboratory/StructureDefinition/Observation-resultslab-eu-lab"					
					
* group[=].element[+].code = #Result.narrative					
* group[=].element[=].display = "A.5.1 Laboratory report narrative"					
//-- unmatched					
//-- unmatched					
* group[=].element[=].target.equivalence = #unmatched					
					
* group[=].element[+].code = #Result.narrative.report					
* group[=].element[=].display = "A.5.1.1 Narrative report"					
//-- unmatched					
//-- unmatched					
* group[=].element[=].target.equivalence = #unmatched					
					
* group[=].element[+].code = #Result.narrative.notes					
* group[=].element[=].display = "A.5.1.2 Comments, interpretation and recommendations"					
//-- unmatched					
//-- unmatched					
* group[=].element[=].target.equivalence = #unmatched					
					
* group[=].element[+].code = #Result.observation					
* group[=].element[=].display = "A.5.2 Observation details"					
* group[=].element[=].target.code = #Observation					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #Result.observation.dateTime					
* group[=].element[=].display = "A.5.2.1 Observation date"					
* group[=].element[=].target.code = #Observation.effective[x]					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "intended as the clinical relevant time (i.e. when the specimen was collected)"					
* group[=].element[+].code = #Result.observation.dateTime					
* group[=].element[=].display = "A.5.2.1 Observation date"					
* group[=].element[=].target.code = #Observation.issued					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "as the date the result is made available."					
* group[=].element[+].code = #Result.observation.code					
* group[=].element[=].display = "A.5.2.3 Observation code"					
* group[=].element[=].target.code = #Observation.code					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "depends on the type of test"					
* group[=].element[+].code = #Result.observation.code					
* group[=].element[=].display = "A.5.2.3 Observation code"					
* group[=].element[=].target.code = #Observation.hasMember.code					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "depends on the type of test"					
* group[=].element[+].code = #Result.observation.code					
* group[=].element[=].display = "A.5.2.3 Observation code"					
* group[=].element[=].target.code = #Observation.component.code					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "depends on the type of test"					
* group[=].element[+].code = #Result.observation.code.name					
* group[=].element[=].display = "A.5.2.3.1 Observation name"					
* group[=].element[=].target.code = #Observation.code.coding.display					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "The mapping refers to the case 'code' mapped to Observation.code. A similar mapping applies to the other cases.
This element typically  represents the 'full specified  name' designation, compared to the 'short name' of the 'A.5.2.3.3 Observation display name' element.
It is not expected that both designations are recorded in the report; consumers can use in fact terminology services and/or lookup tables to allow users to have different displays for the same coded concept."					
* group[=].element[+].code = #Result.observation.code.originalName					
* group[=].element[=].display = "A.5.2.3.2 Observation original name"					
* group[=].element[=].target.code = #Observation.code.text					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "The mapping refers to the case 'code' mapped to Observation.code. A similar mapping applies to the other cases."					
* group[=].element[+].code = #Result.observation.code.displayName					
* group[=].element[=].display = "A.5.2.3.3 Observation display name"					
* group[=].element[=].target.code = #Observation.code.coding.display					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "The mapping refers to the case 'code' mapped to Observation.code. A similar mapping applies to the other cases.
This element typically  represents the' short name' designation, compared to the 'full specified name' of the 'A.5.2.3.1 Observation name' element.
It is not expected that both designations are recorded in the report; consumers can use in fact terminology services and/or lookup tables to allow users to have different displays for the same coded concept."					
* group[=].element[+].code = #Result.observation.method					
* group[=].element[=].display = "A.5.2.4 Observation method"					
* group[=].element[=].target.code = #Observation.method					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #Result.observation.device					
* group[=].element[=].display = "A.5.2.5 Observation device"					
* group[=].element[=].target.code = #Observation.device					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "When it refers to the measuring device, including kits, and device of type Device"					
* group[=].element[+].code = #Result.observation.device					
* group[=].element[=].display = "A.5.2.5 Observation device"					
* group[=].element[=].target.code = #Observation.device.device					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "When it refers to the measuring device and device of type DeviceMeasure"					
* group[=].element[+].code = #Result.observation.device					
* group[=].element[=].display = "A.5.2.5 Observation device"					
* group[=].element[=].target.code = #Observation.device					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "With device of type DeviceMeasure.
This resource can be used to capture some information about the setting (including calibration)"					
* group[=].element[+].code = #Result.observation.order					
* group[=].element[=].display = "A.5.2.8 Order"					
* group[=].element[=].target.code = #Observation.basedOn					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #Result.observation.performer					
* group[=].element[=].display = "A.5.2.9 Performer"					
* group[=].element[=].target.code = #Observation.performer					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #Result.observation.reporter					
* group[=].element[=].display = "A.5.2.10 Reporter"					
* group[=].element[=].target.code = #Observation.performer					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "For interpreter: performer.extension:performerFunction = AUT (author)
If the person responsible for validation:  performer.extension:performerFunction = AUTHEN or LA"					
* group[=].element[+].code = #Result.observation.result					
* group[=].element[=].display = "A.5.2.11 Observation result"					
* group[=].element[=].target.code = #Observation.value[x]					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "depends on the type of test"					
* group[=].element[+].code = #Result.observation.result					
* group[=].element[=].display = "A.5.2.11 Observation result"					
* group[=].element[=].target.code = #Observation.component.value[x]					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "depends on the type of test"					
* group[=].element[+].code = #Result.observation.interpretation					
* group[=].element[=].display = "A.5.2.12 Observation interpretation"					
* group[=].element[=].target.code = #Observation.interpretation					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "depends on the type of test"					
* group[=].element[+].code = #Result.observation.interpretation					
* group[=].element[=].display = "A.5.2.12 Observation interpretation"					
* group[=].element[=].target.code = #Observation.component.interpretation					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "depends on the type of test"					
* group[=].element[+].code = #Result.observation.description					
* group[=].element[=].display = "A.5.2.13 Result description"					
* group[=].element[=].target.code = #Observation.text					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #Result.observation.accreditationStatus					
* group[=].element[=].display = "A.5.2.14 Accreditation status"					
* group[=].element[=].target.code = #Observation.performer.qualification					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "performer ofType PractitionerRole"					
* group[=].element[+].code = #Result.observation.accreditationStatus					
* group[=].element[=].display = "A.5.2.14 Accreditation status"					
* group[=].element[=].target.code = #Observation.performer.organization.qualification					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "performer ofType Organization"					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
					
					
					
					
					
* group[+].source = "http://hl7.eu/fhir/laboratory/StructureDefinition/Result"					
* group[=].target = "http://hl7.eu/fhir/laboratory/StructureDefinition/DiagnosticReport-eu-lab"					
					
* group[=].element[+].code = #Result.narrative					
* group[=].element[=].display = "A.5.1 Laboratory report narrative"					
* group[=].element[=].target.code = #DiagnosticReport					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #Result.narrative.report					
* group[=].element[=].display = "A.5.1.1 Narrative report"					
* group[=].element[=].target.code = #DiagnosticReport.text					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #Result.narrative.notes					
* group[=].element[=].display = "A.5.1.2 Comments, interpretation and recommendations"					
* group[=].element[=].target.code = #DiagnosticReport.conclusion					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "if related to the overall report conclusions"					
* group[=].element[+].code = #Result.observation					
* group[=].element[=].display = "A.5.2 Observation details"					
* group[=].element[=].target.code = #DiagnosticReport.result					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.dateTime					
* group[=].element[=].display = "A.5.2.1 Observation date"					
* group[=].element[=].target.code = #DiagnosticReport.result					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.code					
* group[=].element[=].display = "A.5.2.3 Observation code"					
* group[=].element[=].target.code = #DiagnosticReport.result					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.code.name					
* group[=].element[=].display = "A.5.2.3.1 Observation name"					
* group[=].element[=].target.code = #DiagnosticReport.result					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.code.originalName					
* group[=].element[=].display = "A.5.2.3.2 Observation original name"					
* group[=].element[=].target.code = #DiagnosticReport.result					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.code.displayName					
* group[=].element[=].display = "A.5.2.3.3 Observation display name"					
* group[=].element[=].target.code = #DiagnosticReport.result					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.method					
* group[=].element[=].display = "A.5.2.4 Observation method"					
* group[=].element[=].target.code = #DiagnosticReport.result					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.device					
* group[=].element[=].display = "A.5.2.5 Observation device"					
* group[=].element[=].target.code = #DiagnosticReport.result					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.order					
* group[=].element[=].display = "A.5.2.8 Order"					
* group[=].element[=].target.code = #DiagnosticReport.result					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.performer					
* group[=].element[=].display = "A.5.2.9 Performer"					
* group[=].element[=].target.code = #DiagnosticReport.result					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.reporter					
* group[=].element[=].display = "A.5.2.10 Reporter"					
* group[=].element[=].target.code = #DiagnosticReport.result					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.result					
* group[=].element[=].display = "A.5.2.11 Observation result"					
* group[=].element[=].target.code = #DiagnosticReport.result					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.interpretation					
* group[=].element[=].display = "A.5.2.12 Observation interpretation"					
* group[=].element[=].target.code = #DiagnosticReport.result					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.description					
* group[=].element[=].display = "A.5.2.13 Result description"					
* group[=].element[=].target.code = #DiagnosticReport.result					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.accreditationStatus					
* group[=].element[=].display = "A.5.2.14 Accreditation status"					
* group[=].element[=].target.code = #DiagnosticReport.result					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
//---END					
//---END					
//---END					
//---END					
					
					
					
* group[+].source = "http://hl7.eu/fhir/laboratory/StructureDefinition/Result"					
* group[=].target = "http://hl7.eu/fhir/laboratory/StructureDefinition/Composition-eu-lab"					
					
* group[=].element[+].code = #Result.narrative					
* group[=].element[=].display = "A.5.1 Laboratory report narrative"					
* group[=].element[=].target.code = #Composition					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #Result.narrative.report					
* group[=].element[=].display = "A.5.1.1 Narrative report"					
* group[=].element[=].target.code = #Composition.text					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #Result.narrative.report					
* group[=].element[=].display = "A.5.1.1 Narrative report"					
* group[=].element[=].target.code = #Composition.section:lab-no-subsections.text					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "if single section"					
* group[=].element[+].code = #Result.narrative.report					
* group[=].element[=].display = "A.5.1.1 Narrative report"					
* group[=].element[=].target.code = #Composition.section:lab-subsections.section.text					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "if multiple sections"					
* group[=].element[+].code = #Result.narrative.notes					
* group[=].element[=].display = "A.5.1.2 Comments, interpretation and recommendations"					
* group[=].element[=].target.code = #Composition.section:lab-no-subsections.text					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "if single section"					
* group[=].element[+].code = #Result.narrative.notes					
* group[=].element[=].display = "A.5.1.2 Comments, interpretation and recommendations"					
* group[=].element[=].target.code = #Composition.section:lab-subsections.section.text					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "if multiple sections"					
* group[=].element[+].code = #Result.observation					
* group[=].element[=].display = "A.5.2 Observation details"					
* group[=].element[=].target.code = #Composition.section:lab-no-subsections.entry					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "if single section"					
* group[=].element[+].code = #Result.observation					
* group[=].element[=].display = "A.5.2 Observation details"					
* group[=].element[=].target.code = #Composition.section:lab-subsections.section.entry					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "if multiple sections"					
* group[=].element[+].code = #Result.observation.dateTime					
* group[=].element[=].display = "A.5.2.1 Observation date"					
* group[=].element[=].target.code = #Composition.section:lab-no-subsections.entry					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.code					
* group[=].element[=].display = "A.5.2.3 Observation code"					
* group[=].element[=].target.code = #Composition.section:lab-no-subsections.entry					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.code.name					
* group[=].element[=].display = "A.5.2.3.1 Observation name"					
* group[=].element[=].target.code = #Composition.section:lab-no-subsections.entry					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.code.originalName					
* group[=].element[=].display = "A.5.2.3.2 Observation original name"					
* group[=].element[=].target.code = #Composition.section:lab-no-subsections.entry					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.code.displayName					
* group[=].element[=].display = "A.5.2.3.3 Observation display name"					
* group[=].element[=].target.code = #Composition.section:lab-no-subsections.entry					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.method					
* group[=].element[=].display = "A.5.2.4 Observation method"					
* group[=].element[=].target.code = #Composition.section:lab-no-subsections.entry					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.device					
* group[=].element[=].display = "A.5.2.5 Observation device"					
* group[=].element[=].target.code = #Composition.section:lab-no-subsections.entry					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.order					
* group[=].element[=].display = "A.5.2.8 Order"					
* group[=].element[=].target.code = #Composition.section:lab-no-subsections.entry					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.performer					
* group[=].element[=].display = "A.5.2.9 Performer"					
* group[=].element[=].target.code = #Composition.section:lab-no-subsections.entry					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.reporter					
* group[=].element[=].display = "A.5.2.10 Reporter"					
* group[=].element[=].target.code = #Composition.section:lab-no-subsections.entry					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.result					
* group[=].element[=].display = "A.5.2.11 Observation result"					
* group[=].element[=].target.code = #Composition.section:lab-no-subsections.entry					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.interpretation					
* group[=].element[=].display = "A.5.2.12 Observation interpretation"					
* group[=].element[=].target.code = #Composition.section:lab-no-subsections.entry					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.description					
* group[=].element[=].display = "A.5.2.13 Result description"					
* group[=].element[=].target.code = #Composition.section:lab-no-subsections.entry					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
* group[=].element[+].code = #Result.observation.accreditationStatus					
* group[=].element[=].display = "A.5.2.14 Accreditation status"					
* group[=].element[=].target.code = #Composition.section:lab-no-subsections.entry					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see details in the Observation group"					
//---END					
//---END					
//---END					
//---END					
//---END					


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/specimen-to-fhir-map.fsh

// -------------------------------------------------------------------------------					
//  Concept Model. File: 					specimen-to-fhir-map.fsh
// -------------------------------------------------------------------------------					
Instance: specimen2FHIR-eu-lab					
InstanceOf: ConceptMap					
Usage: #definition					
* insert SetFmmandStatusRuleInstance( 2, informative)					
* name = "Specimen2Fhir"					
* title = "eHN Specimen to this guide Map"					
* status = #draft					
* experimental = true					
* description = "eHN Specimen Model to this guide Map"					
* purpose = "It shows how the Specimen data set defined by the EU eHN guidelines is mapped into this guide"					
* sourceUri = "http://hl7.eu/fhir/laboratory/StructureDefinition/SpecimenLab"					
* targetUri = "http://hl7.eu/fhir/laboratory/StructureDefinition/Specimen-eu-lab"					
* group[+].source = "http://hl7.eu/fhir/laboratory/StructureDefinition/SpecimenLab"					
* group[=].target = "http://hl7.eu/fhir/laboratory/StructureDefinition/Specimen-eu-lab"					
					
* group[=].element[+].code = #SpecimenLab.identifier					
* group[=].element[=].display = "A.4.1 Specimen identifier"					
* group[=].element[=].target.code = #Specimen.identifier					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #SpecimenLab.speciesType					
* group[=].element[=].display = "A.4.2 Type of species"					
* group[=].element[=].target.code = #Specimen.subject.extension:patient-animal.extension:species					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "subject.ofType(Patient)"					
* group[=].element[+].code = #SpecimenLab.material					
* group[=].element[=].display = "A.4.3 Material"					
* group[=].element[=].target.code = #Specimen.type					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #SpecimenLab.collected					
* group[=].element[=].display = "A.4.4 Collection period"					
* group[=].element[=].target.code = #Specimen.collection.collected[x]					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #SpecimenLab.anatomicLocation					
* group[=].element[=].display = "A.4.5 Anatomic location"					
* group[=].element[=].target.code = #Specimen.collection.bodySite					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #SpecimenLab.anatomicLocation					
* group[=].element[=].display = "A.4.5 Anatomic location"					
* group[=].element[=].target.code = #Specimen.collection.extension:bodySite					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see Group 2 for details"					
* group[=].element[+].code = #SpecimenLab.morphology					
* group[=].element[=].display = "A.4.6 Morphology"					
* group[=].element[=].target.code = #Specimen.collection.extension:bodySite					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "see Group 2 for details"					
* group[=].element[+].code = #SpecimenLab.sourceDevice					
* group[=].element[=].display = "A.4.7 Source Device"					
* group[=].element[=].target.code = #Specimen.subject					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
* group[=].element[=].target.comment = "When the device (e.g. the catheter) is what has been examinated.
If the device is meant instead as the mean used to collect the specimen (e.g blood collected from the catheter), then, this is represented by the collectionMethod attribute and mapped into the Specimen.collection.method"					
* group[=].element[+].code = #SpecimenLab.collectionMethod					
* group[=].element[=].display = "A.4.8 Collection procedure/method"					
* group[=].element[=].target.code = #Specimen.collection.method					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #SpecimenLab.receivedDateTime					
* group[=].element[=].display = "A.4.9 Received date"					
* group[=].element[=].target.code = #Specimen.receivedTime					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
//---END					
//---END					
//---END					
//---END					
					
					
					
					
* group[+].source = "http://hl7.eu/fhir/laboratory/StructureDefinition/SpecimenLab"					
* group[=].target = "http://hl7.eu/fhir/laboratory/StructureDefinition/BodyStructure-eu-lab"					
					
* group[=].element[+].code = #SpecimenLab.anatomicLocation					
* group[=].element[=].display = "A.4.5 Anatomic location"					
* group[=].element[=].target.code = #BodyStructure.location					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #SpecimenLab.anatomicLocation					
* group[=].element[=].display = "A.4.5 Anatomic location"					
* group[=].element[=].target.code = #BodyStructure.extension:laterality					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "For details about laterality"					
* group[=].element[+].code = #SpecimenLab.morphology					
* group[=].element[=].display = "A.4.6 Morphology"					
* group[=].element[=].target.code = #BodyStructure.morphology					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
//---END					
//---END					
//---END					
					
					
					


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/subject-to-fhir-map.fsh

// -------------------------------------------------------------------------------					
//  Concept Model. File: 					subject-to-fhir-map.fsh
// -------------------------------------------------------------------------------					
Instance: subject2FHIR-eu-lab					
InstanceOf: ConceptMap					
Usage: #definition					

* insert SetFmmandStatusRuleInstance( 2, informative)						
* name = "LabRptSubject2Fhir"					
* title = "eHN Subject to this guide Map"					
* status = #draft					
* experimental = true					
* description = "eHN Subject Model to this guide Map"					
* purpose = "It shows how the Laboratory Report Subject data set defined by the EU eHN guidelines is mapped into this guide"					
* sourceUri = "http://hl7.eu/fhir/laboratory/StructureDefinition/Subject"					
* targetUri = "http://hl7.eu/fhir/laboratory/StructureDefinition/Patient-eu-lab"					
					
* group[+].source = "http://hl7.eu/fhir/laboratory/StructureDefinition/Subject"					
* group[=].target = "http://hl7.eu/fhir/laboratory/StructureDefinition/Patient-eu-lab"					
					
* group[=].element[+].code = #Subject.identification					
* group[=].element[=].display = "A.1.1 Identification of the patient/subject"					
* group[=].element[=].target.code = #Patient					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #Subject.identification.familyName					
* group[=].element[=].display = "A.1.1.1 Familyname/surname"					
* group[=].element[=].target.code = #Patient.name.family					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #Subject.identification.givenName					
* group[=].element[=].display = "A.1.1.2 Given name"					
* group[=].element[=].target.code = #Patient.name.given					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #Subject.identification.dateOfBirth					
* group[=].element[=].display = "A.1.1.3 Date of birth"					
* group[=].element[=].target.code = #Patient.birthDate					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #Subject.identification.identifier					
* group[=].element[=].display = "A.1.1.4 Personal identifier"					
* group[=].element[=].target.code = #Patient.identifier					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #Subject.identification.gender					
* group[=].element[=].display = "A.1.1.5 Gender"					
* group[=].element[=].target.code = #Patient.gender					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #Subject.addressTelecom					
* group[=].element[=].display = "A.1.2 Patient/subject related contact information"					
* group[=].element[=].target.code = #Patient					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #relatedto					
					
* group[=].element[+].code = #Subject.addressTelecom.address					
* group[=].element[=].display = "A.1.2.1 Address"					
* group[=].element[=].target.code = #Patient.address					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
* group[=].element[+].code = #Subject.addressTelecom.telecom					
* group[=].element[=].display = "A.1.2.2 Telecom"					
* group[=].element[=].target.code = #Patient.telecom					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
					
//---END					
//---END					
//---END					
//---END					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/models/validator-to-fhir-map.fsh

// -------------------------------------------------------------------------------					
//  Concept Model. File: 					validator-to-fhir-map.fsh
// -------------------------------------------------------------------------------					
Instance: validator2FHIR-eu-lab					
InstanceOf: ConceptMap					
Usage: #definition					
* insert SetFmmandStatusRuleInstance( 2, informative)					
* name = "Validator2Fhir"					
* title = "eHN Validator to this guide Map"					
* status = #draft					
* experimental = true					
* description = "eHN Validator Model to this guide Map"					
* purpose = "It shows how the Validator Recipient data set defined by the EU eHN guidelines is mapped into this guide"					
* sourceUri = "http://hl7.eu/fhir/laboratory/StructureDefinition/Validator"					
* targetUri = "http://hl7.eu/fhir/laboratory/StructureDefinition/Composition-eu-lab"					
					
* group[+].source = "http://hl7.eu/fhir/laboratory/StructureDefinition/Validator"					
* group[=].target = "http://hl7.eu/fhir/laboratory/StructureDefinition/Composition-eu-lab"					
					
* group[=].element[+].code = #Validator.identifier					
* group[=].element[=].display = "A.1.7.1 Result validator identifier"					
* group[=].element[=].target.code = #Composition.attester.party.identifier					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "attester.where(mode='professional')"					
* group[=].element[+].code = #Validator.name					
* group[=].element[=].display = "A.1.7.2 Result validator name"					
* group[=].element[=].target.code = #Composition.attester.party.name					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "attester.where(mode='professional').party.resolve().ofType(Practitioner).name"					
* group[=].element[+].code = #Validator.name					
* group[=].element[=].display = "A.1.7.2 Result validator name"					
* group[=].element[=].target.code = #Composition.attester.party.Practitioner.name					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "attester.where(mode='professional').party.resolve().ofType(PractitionerRole).Practitioner.resolve().name"					
* group[=].element[+].code = #Validator.organization					
* group[=].element[=].display = "A.1.7.3 Result validator organisation"					
* group[=].element[=].target.code = #Composition.attester.party.organization					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "attester.where(mode='professional').party.resolve().ofType(PractitionerRole).organization.resolve()"					
* group[=].element[+].code = #Validator.dateTime					
* group[=].element[=].display = "A.1.7.4 Validation date and time"					
* group[=].element[=].target.code = #Composition.attester.time					
* group[=].element[=].target.display = ""					
* group[=].element[=].target.equivalence = #equivalent					
* group[=].element[=].target.comment = "attester.where(mode='professional').time"					
//---END					
//---END					
//---END					
//---END					
//---END					
//---END					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/obligations/humanName-obl.fsh

Profile: HumanNameEuObligations
Parent: HumanNameEu
Id: HumanName-obl-eu-lab
Title:    "Human Name: Obligations"
Description: "This profile defines obligations for an human Patient name in FHIR for the purpose of this guide."
// * ^publisher = "HL7 Europe"
// * ^copyright = "HL7 Europe"
* insert SetFmmandStatusRule ( 0, informative)

// TEST OBLIGATIONS  ====>

* family insert ObligationSet1
  * extension[fathersFamily] insert ObligationSet3
  * extension[mothersFamily] insert ObligationSet3
* given insert ObligationSet1

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/obligations/observation-obl.fsh

Profile: ObservationEuObligations
Parent: ObservationResultsLaboratoryEu
Id: Observation-obl-eu-lab
Title:    "Observation: Obligations"
Description: "This profile defines obligations for Observation in FHIR for the purpose of this guide."

* insert SetFmmandStatusRule ( 0, informative)

// * extension[analysis-time] insert ObligationSet1
* extension[supportingInfo] insert ObligationSet2
* extension[triggeredBy-r5] insert ObligationSet2
* extension[triggeredBy-r5].extension[observation] insert ObligationSet1
* extension[triggeredBy-r5].extension[type] insert ObligationSet1
* status insert ObligationSet1
* category insert ObligationSet1
* code insert ObligationSet1
* subject insert ObligationSet1
* effective[x] insert ObligationSet1
* effective[x].extension[data-absent-reason] insert ObligationSet1
* performer insert ObligationSet1
* performer.extension[performerFunction] insert ObligationSet2
* hasMember insert ObligationSet1
* value[x] insert ObligationSet1
* interpretation insert ObligationSet1
* issued insert ObligationSet2
* method insert ObligationSet1
* specimen insert ObligationSet1
* component insert ObligationSet1
  * code insert ObligationSet1
  * value[x] insert ObligationSet1

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/obligations/patient-obl.fsh

Profile: PatientEuObligations
Parent: PatientEuCore
Id: Patient-obl-eu-lab
Title:    "Patient: Obligations"
Description: "This profile defines obligations for an human Patient in FHIR for the purpose of this guide."
// * ^publisher = "HL7 Europe"
// * ^copyright = "HL7 Europe"
* insert SetFmmandStatusRule ( 0, informative)

// TEST OBLIGATIONS  ====>

// Obligations at the element level 
// Server obligations
* identifier insert ObligationSet1   
* name.given insert ObligationSet1  
* name.family insert ObligationSet1
* name.text insert ObligationSet2 //can-send
* telecom insert ObligationSet2 //can-send
* gender insert ObligationSet1
* birthDate insert ObligationSet1
* generalPractitioner insert ObligationSet2 //can-send
* address insert ObligationSet1


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/obligations/serviceRequest-obl.fsh

Profile: ServiceRequestEuObligations
Parent: ServiceRequestLabEu
Id: ServiceRequest-obl-eu-lab
Title:    "ServiceRequest: Obligations"
Description: "This profile defines obligations for ServiceRequest in FHIR for the purpose of this guide."

* insert SetFmmandStatusRule ( 0, informative)

* identifier  insert ObligationSet1
* code insert ObligationSet1       
* subject insert ObligationSet1    
* requisition insert ObligationSet1
* specimen	insert ObligationSet1
* insurance insert ObligationSet1
* authoredOn insert ObligationSet1
* supportingInfo insert ObligationSet1



---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/obligations/specimen-obl.fsh

Profile: SpecimenEuObligations
Parent: SpecimenEu
Id: Specimen-obl-eu-lab
Title:    "Specimen: Obligations"
Description: "This profile defines obligations for Specimen in FHIR for the purpose of this guide."
// * ^publisher = "HL7 Europe"
// * ^copyright = "HL7 Europe"
* insert SetFmmandStatusRule ( 0, informative)

// TEST OBLIGATIONS  ====>

* subject insert ObligationSet1
* type insert ObligationSet1
* request insert ObligationSet2
* collection insert ObligationSet1
  * bodySite insert ObligationSet1
  * extension[bodySite] insert ObligationSet2
* processing.additive insert ObligationSet2
* container insert ObligationSet1
  * type insert ObligationSet1  



---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/profiles/address-eu.fsh

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Profile:    AddressEu
Parent:     Address
Id:         Address-eu
Title:      "Address (EU)"
Description: """This profile extends the Address data type for supporting streetname, housenumber and postal box."""
//-------------------------------------------------------------------------------------------
/* * ^publisher = "HL7 EU"
* ^version = "1.0.0" */
* ^experimental = false
* insert SetFmmandStatusRule ( 2, trial-use)
* line.extension ^slicing.discriminator.type = #value
* line.extension ^slicing.discriminator.path = "url"
* line.extension ^slicing.rules = #open
// * line.extension ^definition = "It is RECOMMENDED to use these extensions to define address elements."
* line.extension contains
    $iso21090-ADXP-streetName named streetName 0..* and
    $iso21090-ADXP-houseNumber named houseNumber 0..* and
    $iso21090-ADXP-postBox named postBox 0..*
* line.extension[streetName].value[x] only string
* line.extension[houseNumber].value[x] only string
* line.extension[postBox].value[x] only string
* country // ^definition = "Country, the FHIR specification defines its country field as a string and suggests using a ISO 3166 2 or 3 letter codes. Use of 2-letter code to express country is RECOMMENDED."
  * extension contains $iso21090-SC-coding named countryCode 0..1
  * extension[countryCode].valueCoding from $iso3166-1-2 (preferred)

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/profiles/bodyStructure-lab.fsh

Profile: BodyStructureEuLab
Parent: BodyStructure
Id: BodyStructure-eu-lab
Title: "Body structure: Laboratory"
Description: """This profile defines how to represent Body Structure in HL7 FHIR for the purpose of this guide."""
* extension contains $bodyStructure-laterality-r5 named laterality 0..1
* extension[laterality].valueCodeableConcept from LabLateralityEuVs (preferred)
* morphology from http://hl7.org/fhir/ValueSet/bodystructure-code (preferred)
* location from http://hl7.org/fhir/ValueSet/body-site (preferred)
* locationQualifier from LabSiteQualifierEuVs (preferred)
* image 0..0



---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/profiles/bundle-lab.fsh

//===================================
/// INVARIANTS
//===================================

Invariant: dr-comp-enc
Description: "DiagnosticReport and Composition SHALL have the same encounter"
/* Expression: "( (entry:composition.resource.encounter.empty() and entry:diagnosticReport.resource.encounter.empty() ) or entry:composition.resource.encounter = entry:diagnosticReport.resource.encounter )" */
Expression: "( (entry.resource.ofType(Composition).encounter.empty() and entry.resource.ofType(DiagnosticReport).encounter.empty() ) or entry.resource.ofType(Composition).encounter = entry.resource.ofType(DiagnosticReport).encounter )"
Severity:    #error

Invariant: dr-comp-subj
Description: "DiagnosticReport and Composition SHALL have the same subject"
Expression: "( (entry.resource.ofType(Composition).subject.empty() and entry.resource.ofType(DiagnosticReport).subject.empty() ) or entry.resource.ofType(Composition).subject = entry.resource.ofType(DiagnosticReport).subject )"
Severity:    #error


Invariant: dr-comp-type
Description: "At least one DiagnosticReport.code.coding and Composition.type.coding SHALL be equal"
Expression: "entry.resource.ofType(Composition).type.coding.intersect(entry.resource.ofType(DiagnosticReport).code.coding).exists()" 
Severity:    #error

Invariant: dr-comp-category
Description: "At least one DiagnosticReport.category.coding and Composition.category.coding SHALL be equal"
Expression: "(entry.resource.ofType(Composition).category.exists() or entry.resource.ofType(DiagnosticReport).category.exists()) implies entry.resource.ofType(Composition).category.coding.intersect(entry.resource.ofType(DiagnosticReport).category.coding).exists()" 
Severity:    #error

Invariant: dr-comp-identifier
Description: "If one or more DiagnosticReport.identifiers are given, at least one of them SHALL be equal to the Composition.identifier"
/* "Composition.identifier SHALL be equal to one of DiagnosticReport.identifier, if at least one exists" */

Expression: "(entry.resource.ofType(Composition).identifier.exists() or entry.resource.ofType(DiagnosticReport).identifier.exists()) implies entry.resource.ofType(Composition).identifier.intersect(entry.resource.ofType(DiagnosticReport).identifier).exists()" 
Severity:    #error

Invariant: one-comp
Description: "A laboratory report bundle SHALL include one and only one Composition"
Expression: "entry.resource.ofType(Composition).count() = 1"
Severity:    #error

Invariant: one-dr
Description: "A laboratory report SHALL include one and only one DiagnosticReport"
Expression: "entry.resource.ofType(DiagnosticReport).count() = 1"
Severity:    #error

//==========================
// PROFILE
//==========================

Profile: BundleLabReportEu
Parent: Bundle
Id: Bundle-eu-lab
Title: "Bundle: Laboratory Report"
Description: "Clinical document used to represent a Laboratory Report for the scope of the HL7 Europe project."
// * ^publisher = "HL7 Europe"
// * ^copyright = "HL7 Europe"
* insert SetFmmandStatusRule ( 2, trial-use)
* . ^short = "Laboratory Report bundle"
* . ^definition = "Laboratory Report bundle."

* obeys one-comp
* obeys one-dr
* obeys dr-comp-identifier
* obeys dr-comp-type
* obeys dr-comp-category
* obeys dr-comp-subj
* obeys dr-comp-enc


* identifier ^short = "Business identifier for this Laboratory Report"
* identifier 1..
* type = #document
* timestamp 1..
* total ..0
* link ..0
* entry 1..
  * link ..0
  * fullUrl 1..1
  * resource 1..
  * search ..0
  * request ..0
  * response ..0
* signature ^short = "Digital Signature of this report"

* entry ^slicing.discriminator[0].type = #type
* entry ^slicing.discriminator[0].path = "resource"
// * entry ^slicing.ordered = true => changed on 2023-07-19  to be checked
* entry ^slicing.ordered = false
* entry ^slicing.rules = #open

* entry contains composition 1..1
* entry[composition].resource only CompositionLabReportEu

* entry contains diagnosticReport 1..1
* entry[diagnosticReport].resource only DiagnosticReportLabEu

* entry contains patient 0..1
* entry[patient].resource only Patient or PatientEuCore or PatientAnimalEu

* entry contains observation 0..*
* entry[observation].resource only ObservationResultsLaboratoryEu

* entry contains specimen 0..*
* entry[specimen].resource only SpecimenEu

* entry contains serviceRequest 0..*
* entry[serviceRequest].resource only ServiceRequestLabEu

* entry contains organization 0..*
* entry[organization].resource only Organization

* entry contains practitioner 0..*
* entry[practitioner].resource only PractitionerEuCore

* entry contains practitionerRole 0..*
* entry[practitionerRole].resource only PractitionerRoleEuCore

* entry contains bodyStructure 0..*
* entry[bodyStructure].resource only BodyStructureEuLab

* entry contains encounter 0..*
* entry[encounter].resource only Encounter

* entry contains location 0..*
* entry[location].resource only Location

* entry contains provenance 0..*
* entry[provenance].resource only Provenance

* entry contains coverage 0..*
* entry[coverage].resource only Coverage

* entry contains device 0..*
* entry[device].resource only Device

//* entry contains documentReference 0..*
//* entry[documentReference].resource only DocumentReference



---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/profiles/composition-lab.fsh

Profile: CompositionLabReportEu
Parent: http://hl7.org/fhir/StructureDefinition/clinicaldocument
Id: Composition-eu-lab
Title: "Composition: Laboratory Report"
Description: "Clinical document used to represent a Laboratory Report for the scope of the HL7 Europe project."
* insert SetFmmandStatusRule ( 2, trial-use)
* . ^short = "Laboratory Report composition"
* . ^definition = "Laboratory Report composition.
\r\nA composition is a set of healthcare-related information that is assembled together into a single logical document that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. \r\nWhile a Composition defines the structure, it does not actually contain the content: rather the full content of a document is contained in a Bundle, of which the Composition is the first resource contained."

* extension contains CompositionBasedOnOrderOrRequisition named basedOn-order-or-requisition 0..*
* extension[basedOn-order-or-requisition].valueReference only Reference(ServiceRequestLabEu)

* extension contains $information-recipient named information-recipient 0..*
* extension[information-recipient].valueReference only Reference(PractitionerEuCore or Device or PatientEuCore or RelatedPerson or PractitionerRoleEuCore or Organization)

* extension contains DiagnosticReportReference named diagnosticReport-reference 0..1
* extension[diagnosticReport-reference].valueReference only Reference(DiagnosticReportLabEu)
* extension[diagnosticReport-reference].valueReference 1..1
* extension[diagnosticReport-reference].valueReference.reference 1..

  * ^comment = """Added to the FHIR R4 guide to strictly conform with the R4 rules for document bundle resources inclusion.
  Using this extension implies to accept a circular reference Composition to/from  DiagnosticReport"""

* text ^short = "Narrative text"
* insert ReportIdentifierRule
* insert ReportStatusRule
* insert ReportCategoryRule // HK: composition category seems to be related to the CDA Document Class.
                            // In case of lab report, only one value is relevant for this purpose, LOINC 26436-6 	Laboratory Studies (set)
                            // We might discuss if other categorization purposes would be useful or not.
/* * category = $loinc#26436-6 "Laboratory Studies (set)" */

* insert ReportTypeRule ( type ) // fixed LOINC code for all types of reports but allow also lab specialty to be present

  // slice the subject tp cover the three cases of human ; non-human and mixed
* insert ReportSubjectRule
* insert ReportEncounterRule
* author 1..
  * ^short = "Who and/or what authored the Laboratory Report"
  * ^definition = "Identifies who is responsible for the information in the Laboratory Report, not necessarily who typed it in."
  * insert ReportAuthorRule
  /* * obeys labRpt-author */

* attester 0.. // RH - should attester be 1.. or 0..? - since author is also required?
  * ^short = "Attests the report accuracy"
  * mode ^short = "The type of attestation"
  * time ^short = "When the report was attested by the party"
  * party
    * ^short = "Who attested the report"
    * ^comment = "For a Laboratory Report it is usually non expected that the attester would be a Patient or a RealtedPerson"

* event
  * ^short = "The laboratory service(s) being documented"
  * code ^short =	"Code(s) that apply to the laboratory service(s) being documented"
  * period ^short = "Period of time covered by the documentation"
  * detail ^short = "The laboratory service(s) being documented"

* title 1..
  * ^short = "Laboratory Report"
  * ^definition = "Official human-readable label for the composition.\r\n\r\nFor this document should be \"Laboratory Report\" or any equivalent translation"

// ServiceRequest and/or RequestGroup

/*  IS THE SLICE NEEDED IN THIS CASE ?
// check with the XDlab structure */

* section 1..
  * ^slicing.discriminator[+].type = #exists
  * ^slicing.discriminator[=].path = "$this.section"
  * ^slicing.discriminator[+].type = #exists
  * ^slicing.discriminator[=].path = "$this.entry"
/*   * ^slicing.discriminator[+].type = #type
  * ^slicing.discriminator[=].path = "$this.entry.resolve()" */
  // GC $this.code has a preferred binding, how can work ?
/*   * ^slicing.discriminator[+].type = #pattern
  * ^slicing.discriminator[=].path = "$this.code" */
  * ^slicing.ordered = false
  * ^slicing.rules = #open
  * ^definition = """The \"body\" of the report is organized as a tree of up to two levels of sections: top level sections represent laboratory specialties. A top level section SHALL contain either one text block carrying all the text results produced for this specialty along with Laboratory Data Entries or a set of Laboratory Report Item Sections. In the first case the specialty section happens to also be a leaf section. In the latter case, each (second level) leaf section contained in the (top level) specialty section represents a Report Item: i.e., a battery, a specimen study (especially in microbiology), or an individual test. In addition, any leaf section SHALL contain a Laboratory Data Entries containing the observations of that section in a machine-readable format."""

/*
Variant 2: Text and Entry - With this option, the Laboratory Specialty Section text SHALL be present and not blank. This narrative block SHALL present to the human reader, all the observations produced for this Specialty, using the various structures available in the CDA Narrative Block schema (NarrativeBlock.xsd): tables, lists, paragraphs, hyperlinks, footnotes, references to attached or embedded multimedia objects. The narrative block is fully derived from the entry containing the machine-readable result data. Additionally, a single Laboratory Report Data Processing Entry SHALL be present with attribute typeCode=\"DRIV\". This entry contains the machine-readable result data from which the narrative block of this section is derived.""" */


// --------------------------------------
// Common rules for all the sections
// ---------------------------------

* insert SectionCommonRules
/* * section.title 1..
* section.code 1..
* section.code only $CodeableConcept-uv-ips */

// -------------------------------------
// Single section  0 .. 1
// -------------------------------------
* section contains lab-no-subsections ..* // check if ..1 or ..*
* section[lab-no-subsections]
  * ^short = "Variant 1: EU Laboratory Report section with entries and no sub-sections"
  * ^definition = """Variant 1: With this option, all laboratory report data entries are provided in the top level sections and no sub-sections are allowed."""
  * insert SectionElementsRules
/*   * code from LabStudyTypesEuVs (preferred)
  * text ^short = "Text summary of the section, for human interpretation."
  * entry only Reference (ObservationResultsLaboratoryEu or DiagnosticReport)
  * entry 1..
  * section ..0 */

// -------------------------------------
// Structured sections  0 .. 1
// -------------------------------------
* section contains lab-subsections ..* // check if ..1 or ..*
* section[lab-subsections]
  * ^short = "Variant 2: EU Laboratory Report section with one to many subsections Laboratory Report Item"
  * ^definition = """Variant 2: With this option, this top level section doesn't include NEITHER a top level text NOR entry elements. Each Report Item is contained in a corresponding sub-sections which contains the Lab Report Data Entry."""
  * code only $CodeableConcept-uv-ips
  * code from LabStudyTypesEuVs (preferred)
  * text 0..0
  * entry 0..0
  * insert SectionCommonRules
  * section 1..
/*     * code 1..
    * code only $CodeableConcept-uv-ips */
    * insert SectionElementsRules
    * code from LabStudyTypesEuVs (preferred)
/*        * text ^short = "Text summary of the section, for human interpretation."
    * entry 1..
    * entry only Reference (ObservationResultsLaboratoryEu)
    * section 0..0 */

// -------------------------------------
// Annotation section  0 .. 1
// -------------------------------------

* section contains annotations ..* // check if ..1 or ..*
* section[annotations]
  * ^short = "Annotation comment"
  * ^definition = """Narrative expression of comments accompanying the report, such as suggestions for evaluation, technical notes from the laboratory, etc.

Examples:
Suggestion: This result should be evaluated in relation to the patient's medical history and clinical condition.
Technical note: A list of accredited examination(s) is available at www.laboratory.com. """

  * code = http://loinc.org#48767-8
  * text 1..
  * entry 0..0
  * section 0..0

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/profiles/diagnosticReport-lab.fsh

Profile: DiagnosticReportLabEu
Parent: DiagnosticReport
Id: DiagnosticReport-eu-lab
Title: "DiagnosticReport: Laboratory Report"
Description: "DiagnosticReport used to represent an entry of a Laboratory Report, including its context, for the scope of the HL7 Europe project."
// * ^publisher = "HL7 Europe"
// * ^copyright = "HL7 Europe"
* insert SetFmmandStatusRule ( 2, trial-use)
* . ^short = "Laboratory Report DiagnosticReport"
* . ^definition = "Laboratory Report DiagnosticReport"

* extension contains $diagnostic-report-composition-r5 named DiagnosticReportCompositionR5 1..1

* extension[DiagnosticReportCompositionR5]
  * ^short = "Associated Lab Report Composition"
  * ^definition = "This extension implements the R5 composition element. It allow to link this DiagnosticReport with the Composition documenting this Laboratory Report."
  *  valueReference 1..1
  *  valueReference only Reference(CompositionLabReportEu)

/*
content to be referred...
Specimen Collection 1.3.6.1.4.1.19376.1.3.1.2
Specimen Received 1.3.6.1.4.1.19376.1.3.1.3
Specimen Site 1.3.6.1.4.1.19376.1.3.1.8
Notification Organizer
Notifiable Condition
Case Identifier
Outbreak Identifier
Laboratory Isolate Organizer
Laboratory Battery Organizer
Laboratory Observation
Mutimedia Embedded Content
Annotation Comment
*/

* basedOn only Reference ( ServiceRequestLabEu )

* insert ReportStatusRule

/* //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Commented based on the suggestion form the 2023-05-26 meeting see https://github.com/hl7-eu/laboratory/issues/11 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
* basedOn.extension contains DiagnosticReportBasedOnRequisition named basedOn-requisition 0..* */

* identifier
  * ^comment = "Usually assigned by the Information System of the diagnostic service provider for facilitating the Report search. The order id can be used as one of the Report identifier if only one report is produced for that order."
  
* insert ReportIdentifierRule
* insert ReportCategoryRule 
// add binding
/* * code 1.. 
* code only $CodeableConcept-uv-ips
* code from LabReportTypesEuVs (preferred) // value set to be revised add alternative value sets
* code ^binding.extension.extension[0].url = "purpose"
* code ^binding.extension.extension[=].valueCode = #candidate
* code ^binding.extension.extension[+].url = "valueSet"
* code ^binding.extension.extension[=].valueCanonical = LabStudyTypesEuVs
* code ^binding.extension.extension[+].url = "documentation"
* code ^binding.extension.extension[=].valueMarkdown = """Laboratory Specialties."""
* code ^binding.extension.url = "http://hl7.org/fhir/tools/StructureDefinition/additional-binding"
* code ^binding.description = "Laboratory Specialties." */

* insert ReportTypeRule ( code )
* insert ReportSubjectRule
* insert ReportEncounterRule
* effective[x] ^short = "Clinically relevant time/time-period for report."
* performer ^short = "Responsible Diagnostic Service." // add reference to the used profiles
  * insert ReportAuthorRule
  /* * obeys labRpt-author */
* resultsInterpreter
  * insert ReportAuthorRule
  /* * obeys labRpt-author */
* specimen only Reference (SpecimenEu)
  * ^short = "Specimens this report is based on."
* result only Reference (ObservationResultsLaboratoryEu)
  * ^short = "results" 
* imagingStudy 0..0
* presentedForm ^short = "Entire report as issued (pdf recommended)"


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/profiles/humanName-eu.fsh

Profile: HumanNameEu
Parent: HumanName
Id: HumanName-eu
Title: "HumanName (Eu)"
Description: """This profile extends the HumanName data type for supporting multiple family names."""
/* * ^publisher = "HL7 Europe" */
* ^purpose = "This profile of the HumanName allows for expressing multiple family names, as requested by some jurisdictions."
* insert SetFmmandStatusRule ( 2, trial-use)

* family ^example.label = "spanish name"
* family ^example.valueString = "Valero Iglesias"
  * extension contains $humanname-fathers-family named fathersFamily 0..*
  * extension[fathersFamily]
  * extension[fathersFamily] ^example.label = "spanish name"
  * extension[fathersFamily] ^example.valueString = "Valero"
  * extension contains $humanname-mothers-family named mothersFamily 0..*
  * extension[mothersFamily]
  * extension[mothersFamily] ^example.label = "spanish name"
  * extension[mothersFamily] ^example.valueString = "Iglesias"
* given ^example.label = "spanish name" 
* given ^example.valueString = "Borja"



---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/profiles/observation-lab.fsh

Profile: ObservationResultsLaboratoryEu
// Parent: ObservationResultsEu
Parent: Observation
Id: Observation-resultslab-eu-lab
Title:    "Observation Results: laboratory"
Description: """This profile constrains the Observation resource to represent results produced by laboratory tests or panels/studies for the  HL7 Europe project.
This observation may represent the result of a simple laboratory test such as hematocrit or it may group the set of results produced by a multi-test study or panel such as a complete blood count, a dynamic function test, a urine specimen study. In the latter case, the observation carries the overall conclusion of the study and or a global interpretation by the producer of the study, in the comment element; and references the atomic results of the study as "has-member" child observations.
"""
// * ^publisher = "HL7 Europe"
// * ^copyright = "HL7 Europe"
* insert SetFmmandStatusRule ( 2, trial-use)
* ^experimental = false
* ^purpose = "This profile constrains the Observation resource to represent a laboratory in vitro diagnostic test or panel/study. In case of a panel/study, the results of the panel appear as sub-observations. In this case this top-level Observation acts as a grouper of all the observations belonging to the panel or study.  The top-level observation may carry a conclusion in the value element and or a global interpretation by the producer of the study, in the comment element."
* insert ObservationResultsEu
* obeys eu-lab-1
* obeys eu-lab-2
* . ^short = "Laboratory result for a simple test or for a panel/study"
* . ^definition = "This observation may represent the result of a simple laboratory test such as hematocrit or it may group the set of results produced by a multi-test study or panel such as a complete blood count, a dynamic function test, a urine specimen study. In the latter case, the observation carries the overall conclusion of the study and references the atomic results of the study as \"has-member\" child observations"
* . ^comment = "Represents either a lab simple observation or the group of observations produced by a laboratory study."

// * extension contains $observation-analysis-time named analysis-time 0..1
* extension contains $workflow-supportingInfo named supportingInfo 0..*

* extension contains $observation-triggeredBy-r5 named triggeredBy-r5 0..*
* extension[triggeredBy-r5].extension[observation] ^short = "Triggering observation."
* extension[triggeredBy-r5].extension[type] ^short = "The type of trigger" // from http://hl7.org/fhir/ValueSet/observation-triggeredbytype

* extension contains ObservationCertifiedRefMaterialCodeable named certifiedRefMaterialCodeable 0..*
* extension contains ObservationCertifiedRefMaterialIdentifer named certifiedRefMaterialIdentifer 0..*

* extension contains DeviceLabTestKit named labTestKit 0..*
  * ^short = "Laboratory Test Kit"
  * ^definition = """The laboratory test kit used for this test."""


* category only $CodeableConcept-uv-ips
* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category ^definition = "A code that classifies the general type of observation being made."
* category ^comment = "\"laboratory\" includes laboratory medicine and pathology"
* category contains laboratory 1..1
* category[laboratory] = http://terminology.hl7.org/CodeSystem/observation-category#laboratory
* category contains studyType 0..*
* category[studyType] only $CodeableConcept-uv-ips
* category[studyType] from LabStudyTypesEuVs
* category[studyType] ^short = "The way of grouping of the test results into clinically meaningful domains (e.g. hematology study, microbiology study, etc.)"
* category contains specialty 0..*
* category[specialty] only $CodeableConcept-uv-ips
* category[specialty] from LabSpecialtyEuVs
* category[specialty] ^short = "The clinical domain of the laboratory performing the observation (e.g. microbiology, toxicology, chemistry)"

* code
//* code from $results-laboratory-observations-uv-ips (preferred)
* code from LaboratoryResultStandardEuVs (preferred)  // new binding to EU test codes VS
* code ^definition = "Describes what was observed. Sometimes this is called the observation \"name\".  In this profile this code represents either a simple laboratory test or a laboratory study with multiple child observations"
* code ^comment = "In the context of this Observation-laboratory-uv-ips profile, when the observation plays the role of a grouper of member sub-observations, the code represent the group (for instance a panel code). In case no code is available, at least a text shall be provided."
* performer 1..
* performer only Reference(PractitionerRoleEuCore or PractitionerEuCore or $Organization-uv-ips or CareTeam or PatientEuCore or RelatedPerson)


* performer.extension contains $event-performerFunction named performerFunction 0..*
* performer.extension[performerFunction]
// * performer.extension[performerFunction] ^meaningWhenMissing = """The Performer Function is Participant"""

* dataAbsentReason ^short = "Provides a reason why the expected value is missing."
* insert ObservationResultsValueEu
* interpretation only $CodeableConcept-uv-ips
* method ^definition = "Laboratory technigue that has been used"
* method ^comment = "Laboratory technique (method of measurement) are integral parts of the test specification of some laboratory test coding systems (e.g. NPU), in LOINC hovewer measurement principle is not always present in the test definition. In some cases however knowledge of the used measurment techique is important for proper interpretation of the test result.
That's why it is important to explicitly include informaiton about measurement method is such cases."
* method only $CodeableConcept-uv-ips
* method from LabTechniqueEuVs (preferred) // added binding to an agreed eu lab measurement method value set
* specimen only Reference(SpecimenEu)
  * ^comment = "When the specimen is applicable and known it shall be documented"
// * hasMember only Reference(ObservationResultsLaboratoryEu or ObservationResultsEu)
* device ^short = "Measuring instrument"
* hasMember only Reference(ObservationResultsLaboratoryEu)
* hasMember ^definition = "A reference to another Observation profiled by Observation-results-laboratory-uv-ips. The target observation (for instance an individual test member of a panel) is considered as a sub-observation of the current one, which plays the role of a grouper."
* hasMember ^comment = "This element is used in the context of international patient summary when there is a need to group a collection of observations, because they belong to the same panel, or because they share a common interpretation comment, or a common media attachment (illustrative image or graph). In these cases, the current observation is the grouper, and its set of sub-observations are related observations using the type \"has-member\".  For a discussion on the ways Observations can be assembled in groups together see [Observation Grouping](http://hl7.org/fhir/observation.html#obsgrouping)."
* issued ^short = "Date/Time this result was made available"

//* component obeys eu-lab-2
* component
  * code only $CodeableConcept-uv-ips
  * code from $results-laboratory-observations-uv-ips (preferred)
  * insert ObservationResultsValueEu

Invariant: eu-lab-1
Description: "If observation status is other then \"registered\" or \"cancelled\", at least one of these Observation elements shall be provided:  \"value\", \"dataAbsentReason\", \"hasMember\" or \"component\""
Severity: #error
Expression: "(status in ('registered'|'cancelled')) or value.exists() or hasMember.exists() or component.exists() or dataAbsentReason.exists()"

Invariant: eu-lab-2
Description: "If observation has components and observation status is other then \"registered\" or \"cancelled\", at least one of these Observation.component elements shall be provided:  \"value\" or \"dataAbsentReason\""
Severity: #error
Expression: "component.exists() implies (status in ('registered'|'cancelled')) or component.value.exists() or component.dataAbsentReason.exists()"


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/profiles/patient-animal.fsh

Profile: PatientAnimalEu
Parent: Patient
Id: Patient-animal-eu-lab
Title:    "Patient: Animal"
Description: """This profile defines how to represent an Animal as subject of care in FHIR for the purpose of this guide.
This is used to identify the species when a specimen is collected from an animal"""
// * ^publisher = "HL7 Europe"
// * ^copyright = "HL7 Europe"
* insert SetFmmandStatusRule ( 2, trial-use)
* extension contains $patient-animal named patient-animal 1..1
* extension[patient-animal].extension[species].valueCodeableConcept from LabSpeciesTypesEuVs (example)
* extension contains $recordedSexOrGender named recordedSexOrGender 0..1
* extension[recordedSexOrGender]

* telecom ..0
  * ^short = "Use contact.telecom"
  * ^comment = "Animals do not have phones, their contacts do. Contact.telecom should be used."
* maritalStatus ..0


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/profiles/quantity-lab.fsh

Profile: QuantityEuLab
Parent: Quantity-uv-ips
Id: Quantity-eu-lab
Title: "Quantity (Eu Lab)"
Description: "This profile constrains the Quantity data type to use UCUM as the code system for units and optionally share measurement uncertainty"
// * ^publisher = "HL7 Europe"
* ^purpose = "This profile of the Quantity data type imposes the usage of the UCUM as the code system for units and allows expressing uncertainty of measurement"
* . ^short = "A measured amount using UCUM"
* . ^definition = "A measured amount (or an amount that can potentially be measured) and uncertainty of the measurement. Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.\r\nThis profile imposes that the code system for units be UCUM."
* extension contains $iso21090-uncertainty named uncertainty 0..1
* extension contains $iso21090-uncertaintyType named uncertaintyType 0..1

/* Profile: RangeEuLab
Parent: Range-uv-ips
Id: Range-eu-lab
Title: "Range (Eu) for lab observations"
Description: "Data type Range constrained to use UCUM as the code system for units and optionally share measurement uncertainty"
* ^publisher = "HL7 Europe"
* ^purpose = "This profile of the Range data type imposes the usage of the UCUM as the code system for units and allows expressing uncertainty of measurement"
* . ^short = "A measured amount range using UCUM"
* . ^definition = "A measured amount range (or an amount range that can potentially be measured) and uncertainty of the measurement. Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.\r\nThis profile imposes that the code system for units be UCUM."
* low.extension contains $iso21090-uncertainty named uncertainty 0..1
* low.extension contains $iso21090-uncertaintyType named uncertaintyType 0..1
* high.extension contains $iso21090-uncertainty named uncertainty 0..1
* high.extension contains $iso21090-uncertaintyType named uncertaintyType 0..1

 */
Profile: RatioEuLab
Parent: Ratio-uv-ips
Id: Ratio-eu-lab
Title: "Ratio (Eu Lab)"
Description: "This profile constrains the Ratio data type to use UCUM as the code system for units and optionally share measurement uncertainty"
// * ^publisher = "HL7 Europe"
* ^purpose = "This profile of the Ratio data type imposes the usage of the UCUM as the code system for units and allows expressing uncertainty of measurement"
* . ^short = "A measured ratio using UCUM"
* . ^definition = "A measured ratio (or a ratio that can potentially be measured) and uncertainty of the measurement. This profile imposes that the code system for units be UCUM."
* extension contains $iso21090-uncertainty named uncertainty 0..1
* extension contains $iso21090-uncertaintyType named uncertaintyType 0..1


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/profiles/serviceRequest-lab.fsh

Profile: ServiceRequestLabEu
Parent: ServiceRequest
Id: ServiceRequest-eu-lab
Title: "ServiceRequest: Laboratory Order"
Description: """This profile defines how to represent an laboratory orders using the HL7 FHIR ServiceRequest for the purpose of this guide."""

* insert SetFmmandStatusRule ( 2, trial-use)

* . ^short = "Laboratory Order"
* . ^definition = "Laboratory Order composition."
* identifier 1..
* code from LabOrderCodesEuVs (preferred)
* subject 1..
* subject only Reference (PatientEuCore or PatientAnimalEu or Group or Location or Device)
* requisition ^short = "Composite Request ID."
* specimen	only Reference (SpecimenEu)
  * ^short = "Specimens to be used by the laboratory procedure"
  * ^comment = """If the specimen information are known when the order is created then the ServiceRequest.specimen should be used.
If the ServiceRequest can be updated when the specimen is collected then the ServiceRequest.specimen or the Specimen.request could be used.
Otherwise the relationship is recorded in the Specimen.request element"""
  // add invariant ?
* insurance only Reference (Coverage)
* supportingInfo ^short = "Additional information: e.g AOEs and prior results"
* authoredOn ^short = "When the order was placed"


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/profiles/specimen-lab.fsh

Profile: SpecimenEu
Parent: Specimen
Id: Specimen-eu-lab
Title: "Specimen: Laboratory"
Description: """This profile defines how to represent Specimens in HL7 FHIR for the purpose of this guide."""

* insert SetFmmandStatusRule ( 2, trial-use)
* . ^short = "Laboratory Specimen"
* . ^definition = "Laboratory specimen"

* subject only Reference ( PatientEuCore or PatientAnimalEu or Group  or Device or Substance or Location)
* type from LabSpecimenTypesEuVs (preferred)
* type 0..1
  * ^comment = "If the specimen.type conveys information about the site the specimen has been collected from, then, if the bodySite if present it shall be coherent with the type."
* parent only Reference(SpecimenEu)
* request
  * ^short = "Why the specimen was collected."
  * ^comment = """If the specimen information are known when the order is created then the ServiceRequest.specimen should be used.
If the ServiceRequest can be updated when the specimen is collected then the ServiceRequest.specimen or the Specimen.request could be used.
Otherwise the relationship is recorded in the Specimen.request element"""


* collection
  * bodySite from http://hl7.org/fhir/ValueSet/body-site (preferred)
    * ^comment = "If the specimen.type conveys information about the site the specimen has been collected from, then, if the bodySite is present, it shall be coherent with the type"
  * extension contains $bodySite-reference named bodySite 0..1
  * extension[bodySite].valueReference only Reference(BodyStructureEuLab)
* processing.additive only Reference(Substance or SpecimenAdditiveSubstance)
* container
  * type from LabSpecimenContainerEu (preferred)
  * additive[x] 0..0
  * extension contains $specimen-container-device-r5 named device 0..1
  * extension[device].valueReference only Reference(Device)

// ----------------------------------------

Profile: SpecimenAdditiveSubstance
Parent: Substance
Id: Substance-additive-eu-lab
Title: "Substance: Specimen Additive Substance"
Description: """This profile defines how to represent Specimen Additive Substances in HL7 FHIR for the purpose of this guide."""
* code from LabSpecimenAdditiveEu (preferred)

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/rulesSet/observation-results.fsh

RuleSet: ObservationResultsEu
//  insert SetFmmandStatusRule ( 2, trial-use)
* status ^short = "Status of this observation (e.g. preliminary, final,...)"
* category only $CodeableConcept-uv-ips
* code only $CodeableConcept-uv-ips
// * code MS
* subject 1..
// * subject only Reference(Patient or PatientEuCore or Group or Device or Location)
* subject only Reference(PatientAnimalEu or PatientEuCore or Group or Device or Location)
* subject.reference 1..
* effective[x] 1..
* effective[x] only dateTime or Period
* effective[x].extension contains $ext-data-absent-reason named data-absent-reason 0..1
* effective[x].extension[data-absent-reason] ^short = "effective[x] absence reason"
* effective[x].extension[data-absent-reason] ^definition = "Provides a reason why the effectiveTime is missing."
* performer only Reference(PractitionerEuCore or PractitionerRoleEuCore or $Organization-uv-ips or CareTeam or PatientEuCore or RelatedPerson)
// * value[x] MS
// removed circular reference
// * hasMember only Reference(ObservationResultsEu or Observation or QuestionnaireResponse or MolecularSequence)
* hasMember only Reference(Observation or QuestionnaireResponse or MolecularSequence)
* component ^short = "Laboratory result"

RuleSet: ObservationResultsValueEu
//* value[x]
* extension contains $observation-value-r5 named value-r5 0..1
* extension[value-r5]
  * value[x] only Attachment
  * ^short = "only for result of type Attachment"

* value[x] ^slicing.discriminator.type = #type
* value[x] ^slicing.discriminator.path = "$this"
* value[x] ^slicing.rules = #closed
* valueString only string
// * valueString MS
* valueString ^sliceName = "valueString"
* valueRange only $Range-uv-ips
// no practical examples found for the time being
// reverted to the original statement
// * valueRange only Range-eu-lab
* valueRange ^sliceName = "valueRange"
//* valueRatio only $Ratio-uv-ips
* valueRatio only Ratio-eu-lab
* valueRatio ^sliceName = "valueRatio"
* valueTime only time
* valueTime ^sliceName = "valueTime"
* valueDateTime only dateTime
* valueDateTime ^sliceName = "valueDateTime"
* valuePeriod only Period
* valuePeriod ^sliceName = "valuePeriod"
// * valueQuantity only $Quantity-uv-ips
* valueQuantity only Quantity-eu-lab
// * valueQuantity MS
* valueQuantity ^sliceName = "valueQuantity"
* valueCodeableConcept only $CodeableConcept-uv-ips
// * valueCodeableConcept MS
* valueCodeableConcept from $results-coded-values-laboratory-uv-ips (preferred)
* valueCodeableConcept ^sliceName = "valueCodeableConcept"
* valueCodeableConcept ^binding.extension[0].extension[0].url = "purpose"
* valueCodeableConcept ^binding.extension[=].extension[=].valueCode = #candidate
* valueCodeableConcept ^binding.extension[=].extension[+].url = "valueSet"
* valueCodeableConcept ^binding.extension[=].extension[=].valueCanonical = "http://hl7.org/fhir/uv/ips/ValueSet/results-blood-group-snomed-ct-ips-free-set"
* valueCodeableConcept ^binding.extension[=].extension[+].url = "documentation"
* valueCodeableConcept ^binding.extension[=].extension[=].valueMarkdown = "Additional conformance binding to a blood group findings value set for laboratory result values from the SNOMED CT IPS free set for use globally (in SNOMED member and non-member jurisdictions)."
* valueCodeableConcept ^binding.extension[=].url = "http://hl7.org/fhir/tools/StructureDefinition/additional-binding"
* valueCodeableConcept ^binding.extension[+].extension[0].url = "purpose"
* valueCodeableConcept ^binding.extension[=].extension[=].valueCode = #candidate
* valueCodeableConcept ^binding.extension[=].extension[+].url = "valueSet"
* valueCodeableConcept ^binding.extension[=].extension[=].valueCanonical = "http://hl7.org/fhir/uv/ips/ValueSet/results-presence-absence-snomed-ct-ips-free-set"
* valueCodeableConcept ^binding.extension[=].extension[+].url = "documentation"
* valueCodeableConcept ^binding.extension[=].extension[=].valueMarkdown = "Additional conformance binding to a presence and absence findings (qualifier values) value set for laboratory result values from the SNOMED CT IPS free set for use globally (in SNOMED member and non-member jurisdictions)."
* valueCodeableConcept ^binding.extension[=].url = "http://hl7.org/fhir/tools/StructureDefinition/additional-binding"
* valueCodeableConcept ^binding.extension[+].extension[0].url = "purpose"
* valueCodeableConcept ^binding.extension[=].extension[=].valueCode = #candidate
* valueCodeableConcept ^binding.extension[=].extension[+].url = "valueSet"
* valueCodeableConcept ^binding.extension[=].extension[=].valueCanonical = "http://hl7.org/fhir/uv/ips/ValueSet/results-microorganism-snomed-ct-ips-free-set"
* valueCodeableConcept ^binding.extension[=].extension[+].url = "documentation"
* valueCodeableConcept ^binding.extension[=].extension[=].valueMarkdown = "Additional conformance binding to a microorganisms value set for laboratory result values from the SNOMED CT IPS free set for use globally (in SNOMED member and non-member jurisdictions)."
* valueCodeableConcept ^binding.extension[=].url = "http://hl7.org/fhir/tools/StructureDefinition/additional-binding"


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/rulesSet/rulesSet-common.fsh

RuleSet: ExtensionContext(path)
// copied by mCode
* ^context[+].type = #element
* ^context[=].expression = "{path}"


RuleSet: SetFmmandStatusRule ( fmm, status )
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = {fmm}
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status].valueCode = #{status}


RuleSet: SetFmmandStatusRuleInstance ( fmm, status )
// Rule to be used for Instances
* extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = {fmm}
* extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status].valueCode = #{status}

RuleSet: SectionComRules (short, def, code)

// * insert (Health Concern Section, test, http://loinc.org#75310-3)

* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* ^extension[0].valueString = "Section"
* ^short = "{short}"
* ^definition = "{def}"
* title 1..
* code 1..
* code only http://hl7.org/fhir/uv/ips/StructureDefinition/CodeableConcept-uv-ips
* code = {code} (exactly)
* text 1..
* text only Narrative
* emptyReason ..0
* emptyReason ^mustSupport = false

RuleSet: SectionEntrySliceComRules (short, def)
* entry ^slicing.discriminator[0].type = #type
* entry ^slicing.discriminator[0].path = "resolve()"
* entry ^slicing.ordered = false
* entry ^slicing.rules = #open
* entry ^short = "{short}"
* entry ^definition = "{def}"

RuleSet: SectionEntrySliceDefRules (name, card, short, def, profiles)
// SectionEntrySliceDefRules (flags, 0.., "Care Team", "Care Team", CareTeamEu)

* entry contains {name} 0..1
* entry[{name}] {card}
* entry[{name}] ^short = "{short}"
* entry[{name}] ^definition = "{def}"
* entry[{name}] only Reference({profiles})

//--------------------------------------------
RuleSet: NoSubSectionsRules
* section ..0
* section ^mustSupport = false

RuleSet: SectionElementsRules
* code from LabStudyTypesEuVs (preferred)
* text ^short = "Text summary of the section, for human interpretation."
* entry only Reference (ObservationResultsLaboratoryEu )
// * entry only Reference (ObservationResultsLaboratoryEu or DiagnosticReport)
// * entry ^comment = "The DiagnosticReport referred in the entry SHALL NOT be that representing the whole Laboratory Report"
* entry 1..
* section ..0

RuleSet: SectionCommonRules
* section.title 1..
* section.code 1..
* section.code only $CodeableConcept-uv-ips

RuleSet: SNOMEDCopyrightForVS
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* ^experimental = false

RuleSet: LOINCCopyrightForVS
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* ^experimental = false

RuleSet: NPUCopyrightForVS
* ^copyright = "This material contains content from NPU Terminology (http://npu-terminology.org). NPU is copyright International Federation of Clinical Chemistry (IFCC) and International Union of Pure and Applied Chemistry (IUPAC) and is available at no cost under the license at https://www.labterm.dk/."
* ^experimental = false

/* RuleSet: JCTLMCopyrightForVS
* ^copyright = "This material contains content from JCTLM Database (https://www.jctlmdb.org). The JCTLM Database is copyright Joint Committee for Traceability in Laboratory Medicine (JCTLM)."
* ^experimental = false */

RuleSet: NIBSCCopyrightForVS
* ^copyright = "This material contains content from the NIBSC Product list (https://nibsc.org/NIBSC%20Product%20List%20-%20Feb%2024.pdf). The National Institute for Biological Standards and Control part of the UK Medicines and Healthcare products Regulatory Agency (MHRA)."
* ^experimental = true

RuleSet: ObligationActorAndCode(actor, code)
* ^extension[$obligation][+].extension[code].valueCode = {code}
* ^extension[$obligation][=].extension[actor].valueCanonical = {actor}

RuleSet: ObligationElement(element)
// Used for profile level obligations. Insert after obligation code and actor
* ^extension[$obligation][=].extension[elementId].valueString = {element}


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/rulesSet/rulesSet-lab.fsh

RuleSet: ReportAuthorRule
* ^comment = "If a DiagnosticReport.resultsInterpreter exists this is expected to be a Composition.author; otherwise a DiagnosticReport.performer should be an author."

RuleSet: ReportStatusRule
* status /* obeys labRpt-status */
  * ^short = "Status of the Report" // add voc binding aligned with DiagReprt
  * ^comment = "DiagnosticReport.status and Composition.status shall be aligned, based on the http://hl7.eu/fhir/laboratory/ConceptMap/ConceptMap-eu-diagRptStatus2CompStatus mapping"


RuleSet: ReportEncounterRule
/* * encounter obeys labRpt-enc */
* encounter only Reference (Encounter)
  * ^short = "The healthcare event which this Laboratory Report is about (when test ordered)."
  * ^definition = """The healthcare event (e.g. a patient and healthcare provider interaction) which this DiagnosticReport is about."""
  * ^comment = """This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission laboratory tests).

  DiagnosticReport and Composition SHALL have the same encounter.
  """

RuleSet: ReportSubjectRule
* subject 1..
* subject /* obeys labRpt-subject */
// * subject only Reference (PatientEuCore or Patient or Group or Location or Device)
* subject only Reference (PatientEuCore or PatientAnimalEu or Group or Location or Device)
  * ^short = "Who and/or what this report is about"
  * ^definition = "Who or what this report is about. The report can be about a human patient, a living subject, a device (e.g. a machine), a location or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure)."
  * ^comment = "DiagnosticReport and Composition SHALL have the same subject"


RuleSet: ReportIdentifierRule
* identifier /* obeys labRpt-id */
  * ^short = "Report identifier"
  * ^definition = "Identifiers assigned to this Laboratory Report by the performer or other systems. It shall be common to several report versions"
  * ^comment = "Composition.identifier SHALL be equal to one of the DiagnosticReport.identifier, if at least one exists"


RuleSet: ReportTypeRule (element)
* {element} 1..
/* * {element}  obeys labRpt-code */
* {element}  only $CodeableConcept-uv-ips
* {element}  from LabReportTypesEuVs (preferred) // value set to be revised add alternative value sets
  * ^short = "Type of (Laboratory) Report"
  * ^definition = "Specifies that it refers to a Laboratory Report"
  * ^comment = "At least one DiagnosticReport.code.coding and Composition.type.coding SHALL be equal"


RuleSet: ReportCategoryRule
* category /* obeys labRpt-category */
  * ^short = "Report Category"
  * ^definition = "Specifies the Report Category: usually Laboratory"
  * ^comment = "DiagnosticReport.category and Composition.category shall be aligned"
* category only $CodeableConcept-uv-ips
* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category ^definition = "A code that classifies this laboratory report. Two basic categories has been selected in this guide: laboratory specialty and Study type. Laboratory specialty is characteristic of the laboratory that produced the test result while Study type is an arbitrary classificion of the test type."
* category contains studyType 0..*
* category[studyType] only $CodeableConcept-uv-ips
* category[studyType] from LabStudyTypesEuVs
* category[studyType]
  * ^short = "The way of grouping of the test results into clinically meaningful domains (e.g. hematology study, microbiology study, etc.)"
  * ^definition = "Laboratory services, i.e., results of tests performed, could be characterized using typology of services, commonly called study types. Study type could be seen as an attribute or grouping mechanism that assigns a common clinical sense to certain types of laboratory test results., e.g., Hemoglobin, Platelet count, etc. belongs to 'Hematology study'."
  * ^comment = "In comparison to the laboratory specialty which is an attribute of laboratory, study type is a categorization of laboratory service. It needs to be mentioned that classification of test to study types in not standardized."

// "The way of grouping of the test results into clinically meaningful domains (e.g. hematology study, microbiology study, etc.)"

* category contains specialty 0..*
* category[specialty] only $CodeableConcept-uv-ips
* category[specialty] from LabSpecialtyEuVs
* category[specialty]
  * ^short = "The clinical domain of the laboratory performing the observation (e.g. microbiology, toxicology, chemistry)"
  * ^definition = "Laboratory specialty is an attribute of any laboratory setting representing professional qualification of the laboratory to execute certain kind of laboratory tests."
  * ^comment = "Specialty could be used as parameter for searching/querying of laboratory test results."
// previuos description
// "The clinical domain of the laboratory performing the observation (e.g. microbiology, toxicology, chemistry)"


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/rulesSet/rulesSet-obligations.fsh

RuleSet: ObligationSet1
* insert ObligationActorAndCode($server, #SHALL:handle)
* insert ObligationActorAndCode($consumer, #SHALL:handle)
// * insert ObligationActorAndCode($server, #will-send)
* insert ObligationActorAndCode($creator, #SHALL:able-to-populate)
// * insert ObligationActorAndCode($creator, #can-populate)

RuleSet: ObligationSet2
* insert ObligationActorAndCode($server, #SHALL:handle)
* insert ObligationActorAndCode($consumer, #SHALL:handle)
// * insert ObligationActorAndCode($server, #can-send)
// * insert ObligationActorAndCode($creator, #can-send)
* insert ObligationActorAndCode($creator, #SHOULD:able-to-populate)

RuleSet: ObligationSet3
* insert ObligationActorAndCode($server, #SHALL:handle)
* insert ObligationActorAndCode($consumer, #SHALL:handle)
// * insert ObligationActorAndCode($server, #can-send)
// * insert ObligationActorAndCode($creator, #can-send)
* insert ObligationActorAndCode($creator, #MAY:able-to-populate) 

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/terminologies/lab-certifiedRefMaterial.fsh

ValueSet: LabCertifiedReferenceMaterialVS
Id: lab-certifiedRefMaterial-eu-lab
Title: "Laboratory Certified Reference Material"
Description: "List of the coded concepts describing the certified reference material used for the calibration, typically used when the unit of the result is UCUM [IU]."

* insert NIBSCCopyrightForVS
* insert SetFmmandStatusRule ( 1, draft)
* ^status = #draft

* $nibsc#06/140 "Pertussis antiserum (human), anti-PT IgG, Lyophilized, 335 IU and anti-PT IgA 65 IU / ampoule; anti-FHA IgG 130 IU and anti-FHA IgA 65 IU / ampoule; anti-69K IgG 65 IU and anti-PT IgA 42 IU / ampoule"
* $nibsc#00/588 "Hepatitis B virus surface antigen, subtype adw2, genotype A, Lyophilized, 33 IU/vial."
* $nibsc#01/600 "Anti-toxoplasma serum (IgG), Lyophilized, 20 IU / ampoule."
* $nibsc#01/608 "Low Molecular Weight Heparin"
* $nibsc#02/150 "Blood Coagulation Factor VIII and Von Willebrand Factor in Plasma, Human"
* $nibsc#02/206 "Blood coagulation factor XIII, Lyophilized, Activity 0.91 IU/ampoule; Antigen 0.93 IU/ampoule"
* $nibsc#02/342 "Protein C, Lyophilized, 0.85 IU/ampoule (function), 0.84 IU/ampoule (antigen)."
* $nibsc#03/116 "Blood coagulation factor V, Lyophilized, 0.74 IU of Factor V:C per ampoule"
* $nibsc#03/228 "Protein S, Lyophilized, 0.83 IU/ampoule (total antigen), 0.81 IU/ampoule (free antigen), 0.77 IU/ampoule (function)."
* $nibsc#04/102 "Blood coagulation factor XI, plasma human, Lyophilized., 0.86 International Units per ampoule"
* $nibsc#07/164 "Anti-hepatitis B immunoglobulin, Lyophilized, 100 IU/ampoule"
* $nibsc#07/316 "Blood coagulation factor VIII and von Willebrand factor, Lyophilized, Factor VIII: C 0.68 IU/ amp; Factor VIII:Antigen 1.04 IU/ amp; VWF:Antigen 1.00 IU/ amp; VWF:Ristocetin cofactor 0.87 IU/amp; VWF:Collagen binding 1.03 IU/amp; VWFpp 1.03 IU/amp"
* $nibsc#07/364 "Chorionic gonadotrophin, Lyophilized 179 International Units or 0.39 nmol per ampoule for calibration of immunossays, and 162 International Units per ampoule for calibration of biossay, ,"
* $nibsc#08/204 "Thyroid-stimulating antibody, Lyophilized, 0.113 IU / ampoule."
* $nibsc#08/258 "Antithrombin, Lyophilized, Functional potency - 0.95 IU/ampoule, Antigenic potency - 0.96 IU/ampoule"
* $nibsc#08/266 "Sex hormone binding globulin (SHBG), Lyophilized, 180 IU / ampoule."
* $nibsc#09/162 "Human cytomegalovirus DNA, Lyophilized, 5,000,000 IU/vial."
* $nibsc#09/172 "Blood coagulation factors II, VII, IX, X, Lyophilized, 0.89 IU (factor II), 0.99 IU (factor VII), 0.9 IU (factor IX), 0.89 IU (factor X) / ampoule."
* $nibsc#09/260 "Epstein Barr virus DNA, Lyophilized, 5,000,000 IU/ml"
* $nibsc#09/264 "Fibrinogen, Lyophilized, 2.7 mg/ampoule"
* $nibsc#10/152 "HIV-1 RNA, Lyophilized, 185,000 IU/ml (5.27 log10 IU/ml)"
* $nibsc#10/262 "Diphtheria Antitoxin Human IgG, Lyophilized, 2 IU / ampoule"
* $nibsc#10/264 "Hepatitis B virus DNA, Lyophilized., 850,000 IU / vial."
* $nibsc#11/176 "Heparin, low molecular weight, Lyophilized, Anti-Xa: 1068 IU/ampoule, Anti-Iia: 342 IU/ampoule"
* $nibsc#11/234 "Human serum immunoglobulin E, Lyophilized, 13,500 IU/mL"
* $nibsc#11/700 "Erythropoietin, rDNA-derived, Lyophilized, 1,650 IU / ampoule."
* $nibsc#12/252 "A Disintegrin And Metalloprotease with ThromboSpondin type 1 motifs 13 (ADAMTS13), plasma, Lyophilized., Function: 0.91 IU/ampoule Antigen: 0.92 IU/ampoule"
* $nibsc#14/114 "JC polyomavirus DNA, Lyophilized., 7.0 log10 IU/ mL"
* $nibsc#14/212 "BK polyomavirus DNA, Lyophilized., 7.2 log10 IU/ mL"
* $nibsc#15/180 "Factor XI, plasma, human, Lyophilized, Functional activity: 0.71 IU per ampoule, Antigen: 0.78 IU per ampoule"
* $nibsc#16/368 "HSV-1"
* $nibsc#17/100 "Prostate Specific Antigen (human)(total: PSA-ACT + free PSA)"
* $nibsc#17/122 "HSV-2"
* $nibsc#66/304 "Insulin, human, for immunoassay, Lyophilized, 3 IU / ampoule."
* $nibsc#67/086 "Human serum immunoglobulins G, A, and M (IgG, IgA and IgM), Lyophilized, 100 IU IgG, 100 IU IgA and 100 IU IgM/ampoule."
* $nibsc#67/343 "Erythropoietin, human, urinary, Lyophilized, 10 IU / ampoule."
* $nibsc#68/356 "Renin, human, Lyophilized, 0.1 IU / ampoule."
* $nibsc#69/194 "Glucagon, porcine, Lyophilized, 1.49 IU / ampoule."
* $nibsc#73/545 "Placental lactogen, human, for immunoassay, Lyophilized, 0.000 850 IU / ampoule."
* $nibsc#73/601 "Carcinoembryonic antigen (CEA), Lyophilized, 100 IU/ampoule"
* $nibsc#75/551 "Chorionic gonadotrophin, beta subunit, human, for immunoassay, Lyophilized, 70 IU / ampoule."
* $nibsc#75/569 "Chorionic gonadotrophin, alpha subunit, human, for immunoassay, Lyophilized, 70 IU / ampoule."
* $nibsc#75/589 "Chorionic gonadotrophin, human, Lyophilized, 650 IU / ampoule."
* $nibsc#78/554 "Luteinizing hormone, human, pituitary, alpha subunit, Lyophilized, 10 IU / ampoule."
* $nibsc#78/556 "Luteinizing hormone, human, pituitary, beta subunit, Lyophilized, 10 IU / ampoule."
* $nibsc#79/500 "Parathyroid hormone, human, for immunoassay, Lyophilized, 0.1 IU / ampoule."
* $nibsc#80/505 "Human growth hormone, pituitary, Lyophilized, 4.4 IU / ampoule."
* $nibsc#80/552 "Luteinizing hormone, human, pituitary, Lyophilized, 35 IU / ampoule."
* $nibsc#81/565 "Thyroid stimulating hormone, human, for immunoassay, Lyophilized, 11.5 x -3 log 10 IU / ampoule."
* $nibsc#82/585 "Anti-poliovirus serum (Types 1, 2, 3), Lyophilized, 11 IU/ampoule (Type 1), 32 IU/ampoule (Type 2), 3 IU/ampoule (Type 3)"
* $nibsc#82/587 "Interferon Gamma (Human, Leukocyte derived)"
* $nibsc#83/501 "Beta-thromboglobulin, Lyophilized, 500 IU/ampoule."
* $nibsc#83/505 "Platelet factor 4, Lyophilized, 400 IU/ampoule"
* $nibsc#83/575 "Follicle stimulating hormone, human, pituitary, Lyophilized, 80 IU / ampoule."
* $nibsc#84/500 "Prolactin, human, Lyophilized., 0.053 IU / ampoule."
* $nibsc#85/506 "C-reactive protein, Lyophilized, 0.049 IU/ampoule"
* $nibsc#85/669 "Atrial natriuretic factor, human, Lyophilized, 2.5 IU / ampoule."
* $nibsc#88/638 "Thyroxine-binding globulin, Lyophilized, 30 IU / ampoule."
* $nibsc#89/620 "Calcitonin, human, Lyophilized, 17.5 IU / ampoule."
* $nibsc#91/554 "Insulin-like growth factor I for bioassay, Lyophilized, 150 IU / ampoule."
* $nibsc#91/624 "Inhibin A, human, recombinant, Lyophilized, 150,000 IU / ampoule."
* $nibsc#92/510 "Follicle stimulating hormone, human, recombinant for immunoassay, Lyophilized, 60 IU / ampoule."
* $nibsc#92/654 "Plasminogen-Activator Inhibitor 1 (PAI-1), Lyophilized, Tissueplasminogen-activator: 27.5 IU of neutralising activity/ampoule. Urinary-plasminogen-activator: 7 IU of neutralising activity/ampoule."
* $nibsc#94/572 "Ferritin, recombinant, Lyophilized, 6.3 μg/ampoule"
* $nibsc#96/670 "Prostate specific antigen (90:10), Lyophilized, 1 μg total PSA per vial."
* $nibsc#97/550 "Islet cell antibodies, Lyophilized, 20 units/ampoule of islet cell antibodies; 100 units/ampoule of anti-GAD65; 100 units/ampoule of anti-IA-2."
* $nibsc#97/646 "Anti-Hepatitis A Immunoglobulin, Human (W1041) WHO International Standard"
* $nibsc#98/574 "Somatropin (rDNA-derived human growth hormone), Lyophilized, 1.95 mg protein / ampoule."
* $nibsc#AFP "Alphafoetoprotein, Lyophilized, 100,000 IU / ampoule."
* $nibsc#RAI "Anti-rabies immunoglobulin, Lyophilized, 30 IU/ampoule"
* $nibsc#rTF/16 "Thromboplastin, Human, Recombinant, Plain 5th International Standard 2016."
* $nibsc#RUBI-1-94 "Anti-rubella immunoglobulin, Lyophilized, 1,600 IU/vial"
* $nibsc#W1066 "Rheumatoid arthritis serum, Lyophilized, 100 IU/ampoule"

* $pei#7657/12 "Hepatitis D virus RNA, Lyophilized, 575,000 IU/mL"

* $niaid#Gxg01-902535 "Interferon gamma, human, recombinant, Lyophilized, 80,000 IU / ampoule."

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/terminologies/lab-laterality.fsh

ValueSet:      LabLateralityEuVs
Id:	       lab-laterality-eu-lab
Title:	       "Body Structure Laterality"
Description:   "Body Structure site laterality qualifier. It indicates the body site laterality from which a laboratory specimen is collected. (based on SNOMED CT)"


// * ^experimental = false
// * ^publisher = "HL7 Europe"
// * ^copyright = "HL7 Europe"

* insert SNOMEDCopyrightForVS
* insert SetFmmandStatusRule ( 2, trial-use)

* $sct#7771000	"Left (qualifier value)"
* $sct#24028007 "Right (qualifier value)"
* $sct#51440002 "Right and left = bilateral (qualifier value)"  // Not sure how bilateral in context of lab order/report could be used
//* $sct#261183002 "Upper (qualifier value)"
//* $sct#261122009 "Lower (qualifier value)"
//* $sct#255561001 "Medial (qualifier value)"


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/terminologies/lab-localCs.fsh

CodeSystem: LaboratoryLocalCS
Id: lab-localCs-eu-lab
Title: "Laboratory Code: example"
Description: "List of local coded concepts used for supporting the examples defined in this guide."
* ^url = "http://example.org/lab-codes"
* ^experimental = true
* ^content = #complete // #example
* ^caseSensitive = false
* insert SetFmmandStatusRule ( 1, informative)
* #3002989 "Hepatitis Panel, Acute with Reflex to HBsAg Confirmation and Reflex to HCV by Quantitative NAAT"
* #0020089 "Hepatitis B Surface Antigen"
* #0020092 "Hepatitis B Core Antibody, IgM"
* #0020093 "Hepatitis A Antibody, IgM"
* #3003128 "Hepatitis C Antibody by CIA Interp"
* #2002404 "Hepatitis C Antibody by CIA Index"


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/terminologies/lab-orderCodes-lab.fsh

ValueSet: LabOrderCodesEuVs
Id: lab-orderCodes-eu-lab
Title: "Laboratory Order"
Description: "List of LOINC Laboratory codes of type 'Order' or 'Both. This value set is built upon the IPS value set 'Results Laboratory Observation - IPS'"

// * ^publisher = "HL7 Europe"
// * ^copyright = "HL7 Europe"
* insert LOINCCopyrightForVS
* insert SetFmmandStatusRule ( 2, trial-use)
* include codes from system $loinc and valueset $results-laboratory-observations-uv-ips where ORDER_OBS = "Order"
* include codes from system $loinc and valueset $results-laboratory-observations-uv-ips where ORDER_OBS = "Both"

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/terminologies/lab-reportType-lab.fsh

ValueSet:      LabReportTypesEuVs
Id:	       lab-reportType-eu-lab
Title:	       "Laboratory Report Types"
Description:   """Laboratory Report Types.
This version includes only one code as suggested by the eHN guideline.
Category can be used for filtering per study type or specialty."""

// * ^experimental = false
// * ^publisher = "HL7 Europe"
// * ^copyright = "HL7 Europe"
* insert SetFmmandStatusRule ( 2, trial-use)
* insert LOINCCopyrightForVS
* $loinc#11502-2 "Laboratory report"

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/terminologies/lab-siteQualifier.fsh

ValueSet:      LabSiteQualifierEuVs
Id:	       lab-siteQualifier-eu-lab
Title:	       "Body Structure Qualifier"
Description:   "Body Structure site qualifier. It indicates the body site qualifier from which a laboratory specimen is collected. (based on SNOMED CT)"


// * ^experimental = false
// * ^publisher = "HL7 Europe"
// * ^copyright = "HL7 Europe"

* insert SNOMEDCopyrightForVS
* insert SetFmmandStatusRule ( 2, trial-use)

//* include codes from valueset $BodystructureLocationQualifierR5
//* exclude codes from valueset LabLateralityEuVs
* $sct#7771000 "Left"
* $sct#24028007 "Right"
* $sct#51440002 "Bilateral"
* $sct#46053002 "Distal"
* $sct#255554000 "Dorsal"
//* $sct#264147007 "Plantar" inactive concept
* $sct#261183002 "Upper"
* $sct#261122009 "Lower"
* $sct#255561001 "Medial"
* $sct#49370004 "Lateral"
* $sct#264217000 "Superior"
* $sct#261089000 "Inferior"
* $sct#255551008 "Posterior"
* $sct#351726001 "Below"
* $sct#352730000 "Above"

* $sct#40415009 "Proximal (qualifier value)"
* $sct#255549009 "Anterior (qualifier value)"
* $sct#26283006 "Superficial (qualifier value)"
* $sct#795002 "Deep (qualifier value)"
* $sct#57195005 "Basal (qualifier value)"
* $sct#3583002 "Caudal (qualifier value)"
* $sct#66787007 "Cephalic (qualifier value)"
* $sct#255481003 "Left upper quadrant (qualifier value)"
* $sct#255497008 "Right upper quadrant (qualifier value)"
* $sct#255480002 "Left lower quadrant (qualifier value)"
* $sct#255495000 "Right lower quadrant (qualifier value)"

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/terminologies/lab-specialty-lab.fsh

ValueSet:      LabSpecialtyEuVs
Id:	       lab-specialty-eu-lab
Title:	       "Laboratory Specialty"
Description:   """Laboratory Specialties.
Notes:
Note 1: This value set is based on analysis of national coding practices in 8 European countries (AT, CZ, DE, FR, IE, IT, PT, SE) and agreed by involved lab experts as a common lab specialty value set.
Note 2: Many European countries are using additional laboratory specialty types, which should be mapped towards this value set.
Note 3: In case of documented need, this value set could be extended."""

//  * ^experimental = false
// * ^publisher = "HL7 Europe"
// * ^copyright = "HL7 Europe"
* insert SNOMEDCopyrightForVS
* insert SetFmmandStatusRule ( 2, trial-use)
* $sct#394596001    "Chemical pathology"
* $sct#394916005    "Hematopathology"
* $sct#421661004    "Blood banking and transfusion medicine"
* $sct#394915009    "General pathology"
* $sct#394598000    "Immunopathology"
* $sct#408454008    "Clinical microbiology"
* $sct#1236877003   "Genetic pathology"
* $sct#1236878008   "Histocompatibility and Immunogenetics"

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/terminologies/lab-species.fsh

ValueSet:      LabSpeciesTypesEuVs
Id:	       lab-speciesType-eu-vs
Title:	       "Types of species"
Description:   """Types of animal species for non-human subjects"""


* insert SNOMEDCopyrightForVS
* insert SetFmmandStatusRule (1, draft)
* ^status = #draft

* $sct#125097000 "Domestic goat"
* $sct#125099002 "Sheep"
* $sct#34618005 "Cow"
* $sct#425134008 "Turkey"
* $sct#47290002 "Chicken"
* $sct#15778005 "Anser"
* $sct#396620009 "Duck"
* $sct#35354009 "Horse"
* $sct#85626006 "Donkey"
* $sct#132950000 "Mule"
* $sct#448771007 "Domestic dog"
* $sct#448169003 "Domestic cat"

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/terminologies/lab-specimenAdditive-lab.fsh

ValueSet:      LabSpecimenAdditiveEu
Id:	       lab-specimenAdditive-eu-lab
Title:	       "Specimen Additive"
Description:   "List of the specimen additives. Additives are commonly added to the vacutainer tubes to preserve the specimen for laboratory analysis"

* insert SNOMEDCopyrightForVS
* insert SetFmmandStatusRule ( 2, trial-use)

* $sct#1259913003   "Heparin ammonium"
* $sct#386961008    "Aprotinin"
* $sct#29725000 "Heparin calcium"
* $sct#21611007 "Boric acid"
* $sct#30531001 "Calcium oxalate"
* $sct#69519002 "Edetic acid"
* $sct#372628006    "Edetate"
* $sct#27763000 "Hydrochloric acid"
* $sct#414407009    "Hirudin"
* $sct#1256100007   "Edetate dipotassium"
* $sct#1256101006   "Edetate tripotassium"
* $sct#1256102004   "Heparin lithium"
* $sct#387418006    "Edetate disodium"
* $sct#412546005    "Sodium citrate"
* $sct#50045009 "Heparin sodium"
* $sct#6910009  "Sodium fluoride"
* $sct#50306007 "Sodium tetraborate"
* $sct#387168006    "Mannitol"
* $sct#115281000146102  "Sodium formate"

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/terminologies/lab-specimenContainer-lab.fsh

ValueSet:      LabSpecimenContainerEu
Id:	       lab-specimenContainer-eu-lab
Title:	       "Specimen Container"
Description:   "List of the containers commonly used to collect specimens (e.g. urine, blood,..)."

* insert SNOMEDCopyrightForVS
* insert SetFmmandStatusRule ( 2, trial-use)

* $sct#702290003	"Cervical cytology microscopy slide"
* $sct#706057008	"Cytology specimen container"
* $sct#706052002	"Evacuated blood collection tube"
* $sct#702292006	"Evacuated blood collection tube, K3EDTA/sodium fluoride"
* $sct#767387006	"Evacuated blood collection tube with citrate and theophylline and adenosine and dipyramidole"
* $sct#767384004	"Evacuated blood collection tube with clot activator"
* $sct#767390000	"Evacuated blood collection tube with heparin lithium and gel separator"
* $sct#767382000	"Evacuated blood collection tube with heparin sodium"
* $sct#767660003	"Evacuated blood collection tube with sodium fluoride"
* $sct#767389009	"Evacuated blood collection tube with tripotassium and ethylene diamine tetraacetic acid and aprotinin"
* $sct#702279008	"Evacuated blood collection tube, gel separator"
* $sct#702293001	"Evacuated blood collection tube, K2EDTA/aprotinin"
* $sct#702278000	"Evacuated blood collection tube, no additive/metal-free"
* $sct#702280006	"Evacuated blood collection tube, RNA stabiliser"
* $sct#702281005	"Evacuated blood collection tube, thrombin/clot activator/gel separator"
* $sct#702310001	"Evacuated saliva specimen container, sodium azide"
* $sct#706056004	"Evacuated urine specimen container"
* $sct#702302002	"Evacuated urine specimen container, boric acid (H3BO3)"
* $sct#702288004	"Evacuated urine specimen container, boric acid (H3BO3)/sodium formate"
* $sct#702289007	"Evacuated urine specimen container, ethyl paraben/sodium propionate/chlorhexidine"
* $sct#702303007	"Evacuated urine specimen container, multiple preservative"
* $sct#702308003	"Evacuated urine specimen container, no additive"
* $sct#706047007	"Fecal specimen container"
* $sct#706053007	"General specimen container"
* $sct#702268003	"General specimen container, no additive, non-sterile"
* $sct#702269006	"General specimen container, no additive, sterile"
* $sct#874799005	"Microbial cryotube"
* $sct#706050005	"Microcapillary blood collection tube"
* $sct#702275002	"Microcapillary blood collection tube, ammonium heparin"
* $sct#702276001	"Microcapillary blood collection tube, K2EDTA"
* $sct#702277005	"Microcapillary blood collection tube, no additive"
* $sct#702304001	"Microcapillary blood transfer tube, clot activator"
* $sct#702306004	"Microcapillary blood transfer tube, EDTA"
* $sct#702307008	"Microcapillary blood transfer tube, heparin"
* $sct#702305000	"Microcapillary sodium fluoride blood transfer tube"
* $sct#702224000	"Midstream urine specimen container"
* $sct#706051009	"Non-evacuated blood collection tube"
* $sct#702283008	"Non-evacuated blood collection tube with gel separator"
* $sct#702297000	"Non-evacuated blood collection tube, clot activator"
* $sct#702295008	"Non-evacuated blood collection tube, clot activator/gel separator"
* $sct#702282003	"Non-evacuated blood collection tube, EDTA"
* $sct#702299002	"Non-evacuated blood collection tube, K2EDTA"
* $sct#702298005	"Non-evacuated blood collection tube, K3EDTA"
* $sct#702284002	"Non-evacuated blood collection tube, lithium heparin"
* $sct#702300005	"Non-evacuated blood collection tube, lithium heparin/gel separator, non-sterile"
* $sct#702285001	"Non-evacuated blood collection tube, lithium heparin/gel separator, sterile"
* $sct#702286000	"Non-evacuated blood collection tube, NaEDTA/sodium fluoride"
* $sct#702256007	"Non-evacuated blood collection tube, no additive"
* $sct#702287009	"Non-evacuated blood collection tube, potassium oxalate/sodium fluoride"
* $sct#702296009	"Non-evacuated blood collection tube, sodium citrate"
* $sct#702264001	"Non-sterile urine specimen container"
* $sct#702309006	"Saliva specimen container, no additive"
* $sct#706058003	"Secretory specimen container"
* $sct#706046003	"Specimen receptacle"
* $sct#702223006	"Sputum specimen container"
* $sct#702244006	"Sterile urine specimen container"
* $sct#702232008	"Sweat specimen container"
* $sct#702294007	"Syringe-blood collection tube transfer"
* $sct#706054001    "Urine specimen container"
* $sct#767385003	"Aerobic blood culture bottle"
* $sct#767383005	"Anaerobic blood culture bottle"

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/terminologies/lab-specimenType-lab.fsh

ValueSet:      LabSpecimenTypesEuVs
Id:	       lab-specimenType-eu-lab
Title:	       "Specimen Types"
Description:   """Laboratory Specimen Types"""


* insert SNOMEDCopyrightForVS
* insert SetFmmandStatusRule ( 2, trial-use)
* $sct#258497007 "Abscess swab"
* $sct#258407001 "Abscess tissue"
* $sct#119373006 "Amniotic fluid specimen"
* $sct#122552005 "Arterial blood specimen"
* $sct#309201001 "Ascitic fluid specimen"
* $sct#119341000 "Bile specimen"
* $sct#258493006 "Bladder stone specimen"
* $sct#258582006 "Blood clot specimen"
* $sct#119297000 "Blood specimen"
* $sct#309051001 "Body fluid specimen"
* $sct#432825001 "Body secretion specimen"
* $sct#258583001 "Bone marrow clot specimen"
* $sct#119359002 "Bone marrow specimen"
* $sct#258417006 "Bone tissue specimen"
* $sct#309176002 "Bronchial brushings specimen"
* $sct#258446004 "Bronchial fluid specimen"
* $sct#258564008 "Buccal smear specimen"
* $sct#258418001 "Burn tissue"
* $sct#258448003 "Bursa fluid specimen"
* $sct#309110000 "Bursa tissue specimen"
* $sct#119350003 "Calculus specimen"
* $sct#258627009 "Cannula tip submitted as specimen"
* $sct#122554006 "Capillary blood specimen"
* $sct#309101008 "Cartilage specimen"
* $sct#119312009 "Catheter tip submitted as specimen"
* $sct#258450006 "Cerebrospinal fluid specimen"
* $sct#122580007 "Cerumen specimen"
* $sct#258452003 "Chylous fluid specimen"
* $sct#258581004 "Clotted blood specimen"
* $sct#168136008 "Colostomy fluid specimen"
* $sct#119329007 "Colostrum specimen"
* $sct#258498002 "Conjunctival swab"
* $sct#122556008 "Cord blood specimen"
* $sct#258499005 "Cough swab"
* $sct#258419009 "Curettings"
* $sct#258453008 "Cyst fluid specimen"
* $sct#258420003 "Cyst tissue"
* $sct#119338009 "Dentin specimen"
* $sct#472919007 "Device submitted as specimen"
* $sct#258454002 "Dialysate specimen"
* $sct#258439008 "Discharge specimen"
* $sct#258566005 "Deoxyribonucleic acid specimen"
* $sct#1003705007 "Drain tip submitted as specimen"
* $sct#258455001 "Drainage fluid specimen"
* $sct#119294007 "Dried blood specimen"
* $sct#258440005 "Effusion specimen"
* $sct#258456000 "Empyema fluid specimen"
* $sct#119336008 "Exhaled air specimen"
* $sct#258470000 "Prostatic fluid specimen"
* $sct#258441009 "Exudate specimen"
* $sct#309128003 "Eye fluid specimen"
* $sct#258487003 "Fecal smear"
* $sct#119339001 "Stool specimen"
* $sct#309117002 "Fascia specimen"
* $sct#258458004 "Fistula fluid specimen"
* $sct#258442002 "Fluid specimen"
* $sct#445744006 "Fluid specimen from seroma"
* $sct#309502007 "Fetus specimen"
* $sct#447103002 "Foreign body submitted as specimen"
* $sct#258492001 "Gallstone specimen"
* $sct#432657002 "Ganglion cyst specimen"
* $sct#309213006 "Gastric brushings specimen"
* $sct#309199003 "Gastrointestinal fluid specimen"
* $sct#258562007 "Genetic specimen"
* $sct#258508008 "Genital swab"
* $sct#258559009 "Gingivocrevicular fluid specimen"
* $sct#440493002 "Graft specimen from patient"
* $sct#258588005 "Hematoma specimen"
* $sct#119326000 "Hair specimen"
* $sct#258424007 "Heart valve tissue"
* $sct#258521001 "High vaginal swab"
* $sct#258461003 "Hydrocele fluid specimen"
* $sct#258462005 "Ileostomy fluid specimen"
* $sct#258479004 "Interstitial fluid specimen"
* $sct#309114009 "Ligament specimen"
* $sct#258522008 "Low vaginal swab"
* $sct#309171007 "Lower respiratory fluid specimen"
* $sct#302795002 "Lymph node aspirate"
* $sct#258488008 "Lymph node smear"
* $sct#309078004 "Lymph node tissue specimen"
* $sct#119340004 "Meconium specimen"
* $sct#119345009 "Menstrual blood specimen"
* $sct#119303007 "Microbial isolate"
* $sct#119328004 "Mother's milk specimen"
* $sct#258483004 "Mucus specimen"
* $sct#119327009 "Nail specimen"
* $sct#168141000 "Nasal fluid specimen"
* $sct#258467004 "Nasopharyngeal washings"
* $sct#433799002 "Nerve ganglion specimen"
* $sct#309129006 "Nerve tissue specimen"
* $sct#309131002 "Neuroma specimen"
* $sct#258468009 "Edema fluid specimen"
* $sct#309210009 "Esophageal brushings specimen"
* $sct#258494000 "Pancreatic stone specimen"
* $sct#122571007 "Pericardial fluid specimen"
* $sct#168139001 "Peritoneal fluid specimen"
* $sct#258469001 "Pharyngeal washings"
* $sct#119361006 "Plasma specimen"
* $sct#110913002 "Pleural cytologic material"
* $sct#418564007 "Pleural fluid specimen"
* $sct#258484005 "Postmortem tissue specimen"
* $sct#258428005 "Products of conception tissue specimen"
* $sct#119323008 "Pus specimen"
* $sct#258502009 "Pus swab"
* $sct#119351004 "Erythrocyte specimen"
* $sct#258495004 "Renal stone specimen"
* $sct#119342007 "Saliva specimen"
* $sct#258431006 "Scrapings"
* $sct#258432004 "Sebum specimen"
* $sct#119347001 "Seminal fluid specimen"
* $sct#119364003 "Serum specimen"
* $sct#309261004 "Sigmoid colon brushings specimen"
* $sct#258475005 "Sinus washings"
* $sct#119331003 "Skeletal muscle specimen"
* $sct#119325001 "Tissue specimen from skin"
* $sct#258505006 "Skin ulcer swab"
* $sct#258433009 "Smear specimen"
* $sct#309072003 "Soft tissue specimen"
* $sct#119300005 "Specimen from blood product"
* $sct#898201001 "Specimen from device"
* $sct#1003706008 "Specimen from drain tip"
* $sct#119305000 "Specimen from plasma bag"
* $sct#119349003 "Spermatozoa specimen"
* $sct#258434003 "Spun urinary sediment"
* $sct#119334006 "Sputum specimen"
* $sct#257261003 "Swab"
* $sct#445160003 "Swab of eye"
* $sct#122569007 "Sweat specimen"
* $sct#119332005 "Synovial fluid specimen"
* $sct#309123007 "Synovial specimen"
* $sct#309121009 "Synovial tissue specimen"
* $sct#440468004 "Tampon submitted as specimen"
* $sct#258465007 "Lacrimal fluid specimen"
* $sct#122594008 "Tears specimen"
* $sct#309481000 "Temporal artery specimen"
* $sct#309107007 "Tendon specimen"
* $sct#258529004 "Throat swab"
* $sct#119376003 "Tissue specimen"
* $sct#258538002 "Transudate specimen"
* $sct#258435002 "Tumor tissue specimen"
* $sct#441479001 "Fresh tissue specimen"
* $sct#439628000 "Urinary collection bag submitted as specimen"
* $sct#439580004 "Urine collection pad submitted as specimen"
* $sct#122567009 "Urine sediment specimen"
* $sct#122575003 "Urine specimen"
* $sct#258437005 "Vegetation from heart valve"
* $sct#122555007 "Venous blood specimen"
* $sct#122572000 "Vomitus specimen"
* $sct#258591005 "White blood cell specimen"
* $sct#258580003 "Whole blood specimen"
* $sct#438805006 "Whole tooth specimen"
* $sct#122566000 "Fluid specimen from wound"
* $sct#258531008 "Wound swab"
* $sct#446302006 "Air specimen"
* $sct#33631000087102 "Allogeneic bone graft material submitted as specimen"
* $sct#703430008 "Arterial cord blood specimen"
* $sct#16215211000119100 "Bartholin's gland fluid specimen"
* $sct#446129006 "Bile specimen from common bile duct"
* $sct#446817004 "Bile specimen from gallbladder"
* $sct#258490009 "Biliary stone specimen"
* $sct#309105004 "Bone biopsy specimen"
* $sct#258607008 "Bronchoalveolar lavage fluid specimen"
* $sct#122577006 "Cervical mucus specimen"
* $sct#16216411000119106 "Conjunctival smear specimen"
* $sct#1003707004 "Drain device submitted as specimen"
* $sct#309216003 "Duodenal biopsy specimen"
* $sct#122574004 "Duodenal fluid specimen"
* $sct#309166000 "Ear swab specimen"
* $sct#119314005 "Electrode submitted as specimen"
* $sct#419695002 "Environmental swab"
* $sct#309211008 "Gastric biopsy specimen"
* $sct#122573005 "Gastric contents specimen"
* $sct#258459007 "Gastric fluid specimen"
* $sct#122579009 "Genital lochia specimen"
* $sct#258512002 "Glans penis swab"
* $sct#473415003 "Intrauterine contraceptive device submitted as specimen"
* $sct#258649003 "Intravenous infusion fluid specimen"
* $sct#309049000 "Lesion specimen"
* $sct#309203003 "Liver biopsy specimen"
* $sct#258589002 "Lymph node specimen"
* $sct#258466008 "Middle ear fluid specimen"
* $sct#119298005 "Mixed venous blood specimen"
* $sct#705054005 "Muscle specimen"
* $sct#309104000 "Musculoskeletal specimen"
* $sct#447339001 "Nasal smear specimen"
* $sct#258500001 "Nasopharyngeal swab"
* $sct#16220931000119104 "Pancreas cyst fluid specimen"
* $sct#119343002 "Pancreatic fluid specimen"
* $sct#309154006 "Pituitary specimen"
* $sct#708317005 "Pooled specimen from vaginal introitus and rectal swab"
* $sct#258513007 "Prepuce swab"
* $sct#258528007 "Rectal swab"
* $sct#410580001 "Respiratory fluid specimen"
* $sct#732293002 "Salivary calculus specimen"
* $sct#309066003 "Skin biopsy specimen"
* $sct#430268003 "Specimen from bone"
* $sct#119398007 "Specimen from brain"
* $sct#122601001 "Specimen from breast obtained by biopsy"
* $sct#119307008 "Specimen from endotracheal tube"
* $sct#119399004 "Specimen from eye"
* $sct#127476006 "Specimen from fallopian tube"
* $sct#446951004 "Specimen from granulation tissue"
* $sct#127473003 "Specimen from kidney"
* $sct#119383005 "Specimen from liver"
* $sct#122610009 "Specimen from lung obtained by biopsy"
* $sct#447407009 "Specimen from necrotic tissue"
* $sct#127469001 "Specimen from pancreas"
* $sct#119403008 "Specimen from placenta"
* $sct#1003711005 "Specimen from prosthetic joint"
* $sct#608969007 "Specimen from skin"
* $sct#433308004 "Specimen from spleen"
* $sct#119379005 "Specimen from stomach"
* $sct#445447003 "Specimen from trachea obtained by aspiration"
* $sct#441903006 "Specimen obtained by bronchial aspiration"
* $sct#440674008 "Specimen obtained by lavage"
* $sct#57711000052109 "Specimen obtained by puncture procedure"
* $sct#16220971000119101 "Specimen of fluid from cyst of kidney"
* $sct#278020009 "Spot urine specimen"
* $sct#271514008 "Sternal bone marrow specimen"
* $sct#472894002 "Swab from cornea"
* $sct#472900002 "Swab from gingiva"
* $sct#472888005 "Swab from larynx"
* $sct#16210971000119108 "Swab from lesion"
* $sct#472862007 "Swab from lesion of skin"
* $sct#472879001 "Swab from placenta"
* $sct#472885008 "Swab from pressure injury"
* $sct#472883001 "Swab from surgical wound"
* $sct#472866005 "Swab from tongue"
* $sct#472867001 "Swab from tonsil"
* $sct#461911000124106 "Oropharyngeal swab"
* $sct#309478005 "Thrombus specimen"
* $sct#258480001 "Transtracheal aspirate specimen"
* $sct#258436001 "Umbilical cord tissue specimen"
* $sct#258530009 "Urethral swab"
* $sct#444937002 "Urine specimen from ureter"
* $sct#447589008 "Urine specimen obtained by single catheterization of bladder"
* $sct#446907008 "Urine specimen obtained from kidney"
* $sct#258520000 "Vaginal swab"
* $sct#703431007 "Venous cord blood specimen"
* $sct#258482009 "Vesicle fluid specimen"
* $sct#258523003 "Vulval swab"
* $sct#258662004 "Adhesive slide specimen"
* $sct#258527002 "Anal swab"
* $sct#258415003 "Biopsy specimen"
* $sct#303248007 "Blood film specimen"
* $sct#737535000 "Blood smear specimen"
* $sct#122560006 "Blood specimen from blood donor"
* $sct#866033003 "Blood specimen in aerobic blood culture bottle"
* $sct#866032008 "Blood specimen in anaerobic blood culture bottle"
* $sct#878861003 "Blood specimen in blood culture bottle"
* $sct#445295009 "Blood specimen with EDTA"
* $sct#309061008 "Breast fine needle aspirate specimen"
* $sct#309503002 "Breast nipple discharge specimen"
* $sct#309174004 "Bronchial biopsy specimen"
* $sct#119308003 "Cannula submitted as specimen"
* $sct#473409003 "Central venous catheter submitted as specimen"
* $sct#472929000 "Central venous catheter tip submitted as specimen"
* $sct#445372002 "Cerebrospinal fluid specimen from ventricle of brain"
* $sct#258524009 "Cervical swab"
* $sct#440473005 "Contact lens submitted as specimen"
* $sct#440500007 "Dried blood spot specimen"
* $sct#119319000 "Drug specimen"
* $sct#309165001 "Ear specimen"
* $sct#258575007 "Early morning urine specimen"
* $sct#446676001 "Expressed breast milk specimen"
* $sct#122568004 "Exudate specimen from wound"
* $sct#258519006 "Female genital swab"
* $sct#737357006 "Fetal blood specimen"
* $sct#698276005 "First stream urine specimen"
* $sct#733056005 "Fluid specimen from ear"
* $sct#732976006 "Fluid specimen from external auditory canal"
* $sct#16214171000119101 "Genital fluid specimen"
* $sct#258570002 "Genitourinary specimen"
* $sct#309124001 "Joint biopsy specimen"
* $sct#431361003 "Joint fluid specimen"
* $sct#309079007 "Lymph node biopsy specimen"
* $sct#309052008 "Male genital specimen"
* $sct#258574006 "Mid-stream urine specimen"
* $sct#119321005 "Milk specimen"
* $sct#119377007 "Myocardial specimen"
* $sct#16224371000119105 "Nasal lavage fluid specimen"
* $sct#16223051000119101 "Nasal sinus contents specimen"
* $sct#258411007 "Nasopharyngeal aspirate"
* $sct#441620008 "Oral fluid specimen"
* $sct#418932006 "Oral swab"
* $sct#258511009 "Penile urethral swab"
* $sct#258510005 "Penis swab"
* $sct#258526006 "Perianal swab"
* $sct#258525005 "Perineal swab"
* $sct#472923004 "Peripheral vascular catheter tip submitted as specimen"
* $sct#168140004 "Peritoneal dialysate specimen"
* $sct#788707000 "Plasma specimen or serum specimen or whole blood specimen"
* $sct#708049000 "Plasma specimen with ethylenediamine tetraacetic acid"
* $sct#309172000 "Pleura biopsy specimen"
* $sct#258471001 "Prostatic massage fluid specimen"
* $sct#708112008 "Retrouterine pouch fluid aspirate"
* $sct#258664003 "Scotch tape slide specimen"
* $sct#119348006 "Seminal plasma specimen"
* $sct#122589008 "Serum specimen from blood donor"
* $sct#122590004 "Serum specimen from patient"
* $sct#258549008 "Skin scale specimen"
* $sct#258503004 "Skin swab"
* $sct#1179252003 "Slide submitted as specimen"
* $sct#119371008 "Specimen from abscess"
* $sct#446972001 "Specimen from abscess obtained by aspiration"
* $sct#119392008 "Specimen from anus"
* $sct#127456000 "Specimen from breast"
* $sct#16211051000119109 "Specimen from deep wound"
* $sct#119396006 "Specimen from endometrium"
* $sct#440229008 "Specimen from environment"
* $sct#16212771000119105 "Specimen from eyelid obtained by biopsy"
* $sct#449446003 "Specimen from gallbladder"
* $sct#119344008 "Specimen from genital system"
* $sct#447098004 "Specimen from nail obtained by scraping"
* $sct#430248009 "Specimen from nasopharyngeal structure"
* $sct#447154002 "Specimen from nose"
* $sct#119397002 "Specimen from penis"
* $sct#434250007 "Specimen from pericardium obtained by biopsy"
* $sct#438660002 "Specimen from prosthetic device"
* $sct#446952006 "Specimen from skin obtained by scraping"
* $sct#119295008 "Specimen obtained by aspiration"
* $sct#119324002 "Specimen of unknown material"
* $sct#703691002 "Spun cerebrospinal fluid"
* $sct#258609006 "Sputum specimen obtained by aspiration from trachea"
* $sct#447488002 "Suprapubic urine specimen"
* $sct#373826004 "Surgical excision specimen"
* $sct#472896000 "Swab from blister"
* $sct#733104004 "Swab from buccal mucosa"
* $sct#472884007 "Swab from deep wound"
* $sct#472886009 "Swab from gastrostomy stoma"
* $sct#472901003 "Swab from nasal sinus"
* $sct#472881004 "Swab from pharynx"
* $sct#472882006 "Swab from superficial wound"
* $sct#33901000087104 "Swab from tracheostomy stoma"
* $sct#472871003 "Swab from ulcer"
* $sct#445364004 "Swab of axilla"
* $sct#445444005 "Swab of groin"
* $sct#445367006 "Swab of umbilicus"
* $sct#710069003 "Tick specimen"
* $sct#128157004 "Tissue specimen from brain"
* $sct#399492000 "Tissue specimen from lung"
* $sct#699874006 "Tissue specimen from pericardium"
* $sct#57741000052105 "Tracheal secretion specimen"
* $sct#472938003 "Tracheal tube submitted as specimen"
* $sct#122877000 "Upper respiratory fluid specimen obtained by tracheal aspiration"
* $sct#258604001 "Upper respiratory specimen"
* $sct#122565001 "Urinary catheter specimen"
* $sct#446130001 "Urine specimen from bladder"
* $sct#442173007 "Urine specimen from nephrostomy tube"
* $sct#446306009 "Urine specimen obtained from urinary collection bag"
* $sct#446846006 "Urine specimen obtained via indwelling urinary catheter"
* $sct#16221251000119108 "Urine specimen obtained via straight catheter"
* $sct#258577004 "Vaginal secretion specimen"
* $sct#472932002 "Vascular catheter submitted as specimen"
* $sct#703432000 "Venous plasma specimen"
* $sct#472942000 "Ventriculoperitoneal shunt submitted as specimen"
* $sct#258438000 "Vitreous humor specimen"
* $sct#119318008 "Water specimen"
* $sct#57921000052103 "Whole blood specimen with edetic acid"
* $sct#258565009 "Chorionic villi specimen"
* $sct#258599007 "Contact lens solution specimen"
* $sct#439961009 "Implant submitted as specimen"
* $sct#258603007 "Specimen from respiratory system"
* $sct#119368000 "Specimen from cyst"
* $sct#433861002 "Specimen from nasal sinus obtained by fine needle aspiration biopsy"
* $sct#734379005 "Specimen from periodontal tissue"
* $sct#119369008 "Specimen from ulcer"
* $sct#430304001 "Specimen from unspecified body site"
* $sct#127479004 "Specimen from uterus"
* $sct#122550002 "Specimen obtained by fine needle aspiration procedure"
* $sct#258576008 "Suprapubic aspirate specimen"
* $sct#445297001 "Swab of internal nose"
* $sct#699287008 "Urine specimen obtained via suprapubic indwelling urinary catheter"
* $sct#444946008 "Dialysis fluid specimen obtained before dialysis"
* $sct#122592007 "Serum or plasma specimen"
* $sct#309141004 "Adrenal gland specimen"
* $sct#309479002 "Artery specimen"
* $sct#122558009 "Blood specimen from blood product"
* $sct#122559001 "Blood specimen from control"
* $sct#122562003 "Blood specimen from newborn"
* $sct#258587000 "Buffy coat"
* $sct#433116003 "Specimen from liver obtained by fine needle aspiration biopsy"
* $sct#119346005 "Egg yolk specimen"
* $sct#122582004 "Erythrocyte specimen from blood product"
* $sct#119333000 "Fibroblast specimen"
* $sct#119320006 "Food specimen"
* $sct#122576002 "Genital mucus specimen"
* $sct#119337004 "Inhaled gas specimen"
* $sct#258606004 "Lower respiratory tract specimen"
* $sct#119316007 "Non-biological fluid specimen"
* $sct#122551003 "Peripheral blood specimen"
* $sct#119301009 "Plant specimen"
* $sct#119362004 "Platelet poor plasma specimen"
* $sct#119363009 "Platelet rich plasma specimen"
* $sct#119358005 "Platelet specimen"
* $sct#725946000 "Reticulocyte specimen"
* $sct#309508006 "Soft tissue lesion fine needle aspirate specimen"
* $sct#119391001 "Specimen from bronchus"
* $sct#119367005 "Specimen from burn injury"
* $sct#702701006 "Specimen from cervix or vagina"
* $sct#119400006 "Specimen from cornea"
* $sct#1003708009 "Specimen from drain device"
* $sct#127462005 "Specimen from heart"
* $sct#127458004 "Specimen from lung"
* $sct#122614000 "Specimen from lung obtained by fine needle aspiration procedure"
* $sct#432382007 "Specimen from lymph node obtained by fine needle aspiration biopsy"
* $sct#128155007 "Specimen from ovary"
* $sct#431406009 "Specimen from pancreas obtained by fine needle aspiration biopsy"
* $sct#441695007 "Specimen from parotid gland obtained by fine needle aspiration biopsy"
* $sct#430250001 "Specimen from peritoneum"
* $sct#127459007 "Specimen from pleura"
* $sct#119386002 "Specimen from prostate"
* $sct#384819001 "Specimen from prostate obtained by needle biopsy"
* $sct#434406008 "Specimen from salivary gland obtained by fine needle aspiration biopsy"
* $sct#441810001 "Specimen from soft tissue obtained by fine needle aspiration biopsy"
* $sct#441749007 "Specimen from submandibular gland obtained by fine needle aspiration biopsy"
* $sct#128154006 "Specimen from testis"
* $sct#119389009 "Specimen from throat"
* $sct#399680007 "Specimen from thyroid"
* $sct#119390000 "Specimen from trachea"
* $sct#399411006 "Specimen from trophoblast"
* $sct#119393003 "Specimen from urethra"
* $sct#450872001 "Specimen from urinary bladder"
* $sct#119395005 "Specimen from uterine cervix"
* $sct#119394009 "Specimen from vagina"
* $sct#119365002 "Specimen from wound"
* $sct#309146009 "Thyroid fine needle aspirate specimen"
* $sct#122638001 "Tissue specimen from small intestine"
* $sct#258444001 "Aqueous humor specimen"
* $sct#258485006 "Corneal scraping specimen"
* $sct#168137004 "Gastric aspirate specimen"
* $sct#1259931002 "Hair of face specimen"
* $sct#168145009 "Lymph specimen"
* $sct#309507001 "Muscle biopsy specimen"
* $sct#16224171000119108 "Nasotracheal aspirate"
* $sct#309068002 "Skin lesion specimen"
* $sct#396997002 "Specimen from bone marrow obtained by aspiration"
* $sct#16215771000119101 "Specimen from inguinal lymph node obtained by fine needle aspiration biopsy"
* $sct#430236006 "Specimen from nerve"
* $sct#472898004 "Swab from hand"
* $sct#472868006 "Swab from peritoneal cavity structure"
* $sct#444787003 "Swab of endocervix"
* $sct#16223971000119109 "Synovial fluid specimen obtained by fine needle aspiration procedure"
* $sct#122656001 "Tissue specimen from gallbladder"
* $sct#122736005 "Tissue specimen from placenta"
* $sct#369611008 "Tissue specimen obtained from small intestine by biopsy"
* $sct#309191000 "Tonsil biopsy specimen"
* $sct#697989009 "Anterior nares swab"
* $sct#57931000052101 "Combined cervical mucus and urine specimen"
* $sct#433324003 "Specimen from eye region"
* $sct#16216171000119108 "Specimen from liver obtained by aspiration"
* $sct#16221491000119104 "Voided urine specimen"

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/terminologies/lab-studyType-lab.fsh

ValueSet:      LabStudyTypesEuVs
Id:	       lab-studyType-eu-lab
Title:	       "Laboratory Study Types"
// TODO: Description should be adjusted according to the final set of EU study types.
Description:   """Laboratory Study Types
Notes:
Note 1:26436-6 (Laboratory studies) enables issuing a report putting together observations from multiple specialties (disciplines) in the same text block, allowing delivery of a global interpretation comment at the end of the text block that will be rendered at the end of the report.
Note 2:Mycology and parasitology, as well as bacteriology, are part of the 18725-2 (Microbiology studies (set)) studies.
Note 3:Virology MAY be included in 18725-2 (MICROBIOLOGY STUDIES) or 18727-8 (SEROLOGY STUDIES) or split between both study types, depending upon the Content Creator Actor’s choice.
"""


* insert LOINCCopyrightForVS
* insert SetFmmandStatusRule ( 2, trial-use)

// Following set of codes represent agreement between several EU member states on common set of laboratory study types. Other codes from XD-LAB profile were commented out.
* $loinc#18717-9 "Blood bank studies (set)"
//* $loinc#18718-7 "Cell marker studies (set)"
* $loinc#18719-5 "Chemistry studies (set)"
//* $loinc#18720-3 "Coagulation studies (set)"
//* $loinc#18721-1 "Therapeutic drug monitoring studies (set)"
* $loinc#18722-9 "Fertility studies (set)"
* $loinc#18723-7 "Hematology studies (set)"
//* $loinc#18724-5 "HLA studies (set)"
* $loinc#18725-2 "Microbiology studies (set)"
//* $loinc#18727-8 "Serology studies (set)"
* $loinc#18728-6 "Toxicology studies (set)"
//* $loinc#18729-4 "Urinalysis studies (set)"
//* $loinc#18767-4 "Blood gas studies (set)"
//* $loinc#18768-2 "Cell counts+Differential studies (set)"
//* $loinc#18769-0 "Microbial susceptibility tests Set"
//* $loinc#26435-8 "Molecular pathology studies (set)"
* $loinc#26436-6 "Laboratory studies (set)"
//* $loinc#26437-4 "Chemistry challenge studies (set)"
//* $loinc#26438-2 "Cytology studies (set)"

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/terminologies/lab-technique-lab.fsh

ValueSet:      LabTechniqueEuVs
Id:	       lab-technique-eu-lab
Title:	       "Laboratory Techniques"
Description:   "Laboratory technique (method of measurement) used for the result measurement (based on SNOMED CT)."


* insert SNOMEDCopyrightForVS
* insert SetFmmandStatusRule ( 2, trial-use)

// not in this SCT version => * $sct#62841000052105	"Audiogram (qualifier value)"
// not in this SCT version => * $sct#65831000052108	"Point-of-care analysis (qualifier value)"
// not in this SCT version => * $sct#83571000052105	"Impedance conductivity technique (qualifier value)"
// not in this SCT version => * $sct#70571000052108	"Immunochemistry technique (qualifier value)"
// not a technique, is a property * $sct#125146005	"Density (qualifier value)"
// is a property not technique * $sct#410668003	"Length property (qualifier value)"

* $sct#1259932009	"Loop-mediated isothermal amplification technique (qualifier value)"
* $sct#1259933004	"Strand displacement amplification technique (qualifier value)"
* $sct#1259934005	"Microparticle enzyme immunoassay technique (qualifier value)"
* $sct#1259935006	"Chemiluminescent immunoassay technique (qualifier value)"
* $sct#1259936007	"Enzyme-linked fluorescence assay technique (qualifier value)"
* $sct#258035006	"High pressure liquid chromatography (qualifier value)"
* $sct#258036007	"Immunoblotting (qualifier value)"
* $sct#258037003	"Immunoradiometry (qualifier value)"
* $sct#258066000	"Polymerase chain reaction technique (qualifier value)"
* $sct#258075003	"Serotyping (qualifier value)"
* $sct#258087005	"Agar dilution (qualifier value)"
* $sct#258099003	"Fluorescence microscopy technique (qualifier value)"
* $sct#264272003	"Conductivity technique (qualifier value)"
* $sct#264275001	"Fluorescence polarization immunoassay technique (qualifier value)"
* $sct#264788002	"Biotyping (qualifier value)"
* $sct#278289002	"Microscopy technique (qualifier value)"
* $sct#359838000	"Nephelometry (qualifier value)"
* $sct#66691000052100	"Electrochemiluminescence immunoassay technique (qualifier value)"
* $sct#66701000052100	"Fluorescent enzyme immunoassay technique (qualifier value)"
* $sct#66711000052103	"Line immunoassay technique (qualifier value)"
* $sct#66721000052106	"Recombinant immunoblot assay technique (qualifier value)"
* $sct#66731000052108	"Immunochromatographic test technique (qualifier value)"
* $sct#66741000052102	"Chemiluminescent microparticle immunoassay technique (qualifier value)"
* $sct#68431000052104	"Enzyme-linked immunosorbent assay technique (qualifier value)"
* $sct#702660003	"Test strip technique (qualifier value)"
* $sct#702661004	"Light microscopy technique (qualifier value)"
* $sct#702873001	"Calculation technique (qualifier value)"
* $sct#702946003	"Coagulation technique (qualifier value)"
* $sct#703444002	"Fluorescent immunoassay (qualifier value)"
* $sct#703445001	"Ion selective electrode measurement technique (qualifier value)"
* $sct#703447009	"Enzyme immunoassay technique (qualifier value)"
* $sct#703448004	"Latex agglutination test technique (qualifier value)"
* $sct#703449007	"Radioimmunoassay technique (qualifier value)"
* $sct#703450007	"Electrophoresis technique (qualifier value)"
* $sct#703454003	"Centrifugation technique (qualifier value)"
* $sct#703458000	"Neutralization method (qualifier value)"
* $sct#703459008	"Westergren technique (qualifier value)"
* $sct#703725008	"Culture technique (qualifier value)"
* $sct#703750006	"Aerobic culture technique (qualifier value)"
* $sct#703751005	"Anaerobic culture technique (qualifier value)"
* $sct#703752003	"Organism specific culture technique (qualifier value)"
* $sct#70521000052109	"Affinity chromatography technique (qualifier value)"
* $sct#70531000052106	"Agarose gel electrophoresis technique (qualifier value)"
* $sct#70541000052100	"Chemiluminescence technique (qualifier value)"
* $sct#70551000052102	"Enzyme-multiplied immunoassay technique (qualifier value)"
* $sct#70561000052104	"Gas chromatography technique (qualifier value)"
* $sct#70581000052105	"Capillary electrophoresis technique (qualifier value)"
* $sct#70591000052107	"Pyrosequencing technique (qualifier value)"
* $sct#70601000052104	"Real-time polymerase chain reaction technique (qualifier value)"
* $sct#70611000052102	"Melting curve technique (qualifier value)"
* $sct#70621000052105	"Spectrophotometric technique (qualifier value)"
* $sct#708058007	"Flow cytometry technique (qualifier value)"
* $sct#708061008	"Gram stain technique (qualifier value)"
* $sct#708062001	"Immunodiffusion technique (qualifier value)"
* $sct#708063006	"Immunoelectrophoresis technique (qualifier value)"
* $sct#708064000	"Immunofixation technique (qualifier value)"
* $sct#708075001	"Potassium hydroxide preparation technique (qualifier value)"
* $sct#708097004	"Immunohistochemistry technique (qualifier value)"
* $sct#708099001	"Rapid immunoassay technique (qualifier value)"
* $sct#708104000	"Agglutination technique (qualifier value)"
* $sct#708131002	"Anti human globulin test technique, direct (qualifier value)"
* $sct#708133004	"Complement fixation technique (qualifier value)"
* $sct#726449005	"Immunoassay technique (qualifier value)"
* $sct#726748001	"Radioallergosorbent testing technique (qualifier value)"
* $sct#767095001	"Direct immunofluorescence technique (qualifier value)"
* $sct#767096000	"Indirect immunofluorescence technique (qualifier value)"
* $sct#83561000052101	"Photometry technique (qualifier value)"
* $sct#83581000052107	"Matrix assisted laser desorption ionization time of flight mass spectrometry technique (qualifier value)"
* $sct#83591000052109	"Particle-enhanced turbidimetric immunoassay technique (qualifier value)"
* $sct#83601000052101	"Potentiometry technique (qualifier value)"
* $sct#83611000052104	"Turbidimetry technique (qualifier value)"
/* DUPLICATED
* $sct#1259935006 "Chemiluminescent immunoassay technique (qualifier value)"
* $sct#1259936007 "Enzyme-linked fluorescence assay technique (qualifier value)"
* $sct#1259932009 "Loop-mediated isothermal amplification technique (qualifier value)"
* $sct#1259934005 "Microparticle enzyme immunoassay technique (qualifier value)" 
* $sct#1259933004 "Strand displacement amplification technique (qualifier value)" */
* $sct#1304095001 "Refractometry (qualifier value)"
* $sct#1304230000 "Viscometry (qualifier value)"
* $sct#1304094002 "X-ray diffraction (qualifier value)"

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/terminologies/lab-testCodes-lab.fsh

ValueSet: LaboratoryResultStandardEuVs
Id: lab-obsCode-eu-lab
Title: "Laboratory Code"
Description: "Laboratory observation codes. List of Laboratory observation codes derived from the LOINC and NPU code systems."
//-------------------------------------------------------------------------------------------
// * ^experimental = false

* insert LOINCCopyrightForVS
* insert SetFmmandStatusRule ( 2, trial-use)
* codes from valueset NpuVs
* codes from valueset LoincVs


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/terminologies/lab-testCodes-loinc.fsh

ValueSet: LoincVs
Id: lab-obsCode-loinc-eu-lab
Title: "Laboratory Code: LOINC"
Description: "Laboratory observation codes based on the LOINC code system."


* insert LOINCCopyrightForVS
* insert SetFmmandStatusRule ( 2, trial-use)

* include codes from system $loinc where CLASSTYPE = "1"


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/terminologies/lab-testCodes-npu.fsh

ValueSet: NpuVs
Id: lab-obsCode-npu-eu-lab
Title: "Laboratory Code: NPU"
Description: "Laboratory observation codes based on the NPU code system."

* insert NPUCopyrightForVS
* insert SetFmmandStatusRule ( 2, trial-use)

* include codes from system http://npu-terminology.org


---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/alias-lab.fsh

//============== ALIAS ===============

// Actor Canonical

Alias: $server = http://hl7.eu/fhir/laboratory/actor-repos-eu-lab
Alias: $creator = http://hl7.eu/fhir/laboratory/actor-creator-eu-lab
Alias: $consumer = http://hl7.eu/fhir/laboratory/actor-consumer-eu-lab

// --- EU Lab Profiles
Alias: $Composition-eu-lab = http://hl7.eu/fhir/laboratory/StructureDefinition/Composition-eu-lab
Alias: $Patient-eu-lab = http://hl7.eu/fhir/laboratory/StructureDefinition/Patient-eu-lab

// --- Value Sets
Alias: $v3-ClassNullFlavor = http://terminology.hl7.org/ValueSet/v3-ClassNullFlavor
Alias: $results-laboratory-observations-uv-ips = http://hl7.org/fhir/uv/ips/ValueSet/results-laboratory-observations-uv-ips
Alias: $results-coded-values-laboratory-uv-ips = http://hl7.org/fhir/uv/ips/ValueSet/results-coded-values-laboratory-uv-ips
Alias: $iso3166-1-2 = http://hl7.org/fhir/ValueSet/iso3166-1-2

// ---- Extensions
Alias: $information-recipient = http://hl7.eu/fhir/StructureDefinition/information-recipient
// Alias: $obligation = http://hl7.org/fhir/tools/StructureDefinition/obligation
Alias: $obligation = http://hl7.org/fhir/StructureDefinition/obligation
Alias: $humanname-mothers-family = http://hl7.org/fhir/StructureDefinition/humanname-mothers-family
Alias: $humanname-fathers-family = http://hl7.org/fhir/StructureDefinition/humanname-fathers-family
Alias: $patient-birthPlace = http://hl7.org/fhir/StructureDefinition/patient-birthPlace
Alias: $patient-mothersMaidenName = http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName
Alias: $event-statusReason = http://hl7.org/fhir/StructureDefinition/event-statusReason
Alias: $procedure-method = http://hl7.org/fhir/StructureDefinition/procedure-method
Alias: $workflow-supportingInfo = http://hl7.org/fhir/StructureDefinition/workflow-supportingInfo
Alias: $diagnostic-report-composition-r5 = http://hl7.org/fhir/5.0/StructureDefinition/extension-DiagnosticReport.composition
Alias: $specimen-feature-r5 = http://hl7.org/fhir/5.0/StructureDefinition/extension-Specimen.feature
Alias: $specimen-feature-type-r5 = http://hl7.org/fhir/5.0/StructureDefinition/extension-Specimen.feature.type
Alias: $specimen-collection-device-r5 = http://hl7.org/fhir/5.0/StructureDefinition/extension-Specimen.collection.device
Alias: $specimen-collection-body-site-r5 = http://hl7.org/fhir/5.0/StructureDefinition/extension-Specimen.collection.bodySite
Alias: $specimen-collection-body-site-reference-r5 = http://hl7.org/fhir/5.0/StructureDefinition/extension-Specimen.collection.bodySite.reference
Alias: $bodySite-reference = http://hl7.org/fhir/StructureDefinition/bodySite
Alias: $bodyStructure-laterality-r5 = http://hl7.org/fhir/5.0/StructureDefinition/extension-BodyStructure.includedStructure.laterality
Alias: $event-performerFunction = http://hl7.org/fhir/StructureDefinition/event-performerFunction
Alias: $iso21090-ADXP-streetName = http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName
Alias: $iso21090-ADXP-houseNumber = http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber
Alias: $iso21090-ADXP-postBox = http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox
Alias: $iso21090-SC-coding = http://hl7.org/fhir/StructureDefinition/iso21090-SC-coding
Alias: $iso21090-uncertainty = http://hl7.org/fhir/StructureDefinition/iso21090-uncertainty
Alias: $iso21090-uncertaintyType = http://hl7.org/fhir/StructureDefinition/iso21090-uncertaintyType
Alias: $patient-birthPlace = http://hl7.org/fhir/StructureDefinition/patient-birthPlace
Alias: $patient-animal = http://hl7.org/fhir/StructureDefinition/patient-animal
Alias: $specimen-container-device-r5 = http://hl7.org/fhir/5.0/StructureDefinition/extension-Specimen.container.device
Alias: $observation-analysis-time = http://hl7.org/fhir/StructureDefinition/observation-analysis-date-time
Alias: $sexForClinicalUse = http://hl7.org/fhir/StructureDefinition/patient-sexParameterForClinicalUse
Alias: $recordedSexOrGender = http://hl7.org/fhir/StructureDefinition/individual-recordedSexOrGender
Alias: $workflow-supportingInfo = http://hl7.org/fhir/StructureDefinition/workflow-supportingInfo
Alias: $observation-triggeredBy-r5 = http://hl7.org/fhir/5.0/StructureDefinition/extension-Observation.triggeredBy
Alias: $observation-value-r5 = http://hl7.org/fhir/5.0/StructureDefinition/extension-Observation.value[x]


// --- Profiles
Alias: $Composition-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Composition-uv-ips
Alias: $Patient-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Patient-uv-ips
Alias: $AllergyIntolerance-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/AllergyIntolerance-uv-ips
Alias: $Condition-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Condition-uv-ips
Alias: $DeviceUseStatement-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/DeviceUseStatement-uv-ips
Alias: $DiagnosticReport-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/DiagnosticReport-uv-ips
Alias: $ImagingStudy-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/ImagingStudy-uv-ips
Alias: $Immunization-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Immunization-uv-ips
Alias: $Media-observation-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Media-observation-uv-ips
Alias: $Medication-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Medication-uv-ips
Alias: $MedicationRequest-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/MedicationRequest-uv-ips
Alias: $MedicationStatement-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/MedicationStatement-uv-ips
Alias: $Practitioner-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Practitioner-uv-ips
Alias: $PractitionerRole-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/PractitionerRole-uv-ips
Alias: $Procedure-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Procedure-uv-ips
Alias: $Organization-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Organization-uv-ips
Alias: $Observation-pregnancy-edd-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-pregnancy-edd-uv-ips
Alias: $Observation-pregnancy-outcome-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-pregnancy-outcome-uv-ips
Alias: $Observation-pregnancy-status-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-pregnancy-status-uv-ips
Alias: $Observation-alcoholuse-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-alcoholuse-uv-ips
Alias: $Observation-tobaccouse-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-tobaccouse-uv-ips
Alias: $Observation-results-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-results-uv-ips
//Alias: $Specimen-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Specimen-uv-ips
Alias: $Bundle-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Bundle-uv-ips
Alias: $vitalsigns = http://hl7.org/fhir/StructureDefinition/vitalsigns

Alias: $CodeableConcept-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/CodeableConcept-uv-ips
Alias: $ext-data-absent-reason = http://hl7.org/fhir/StructureDefinition/data-absent-reason

Alias: $Range-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Range-uv-ips
Alias: $Ratio-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Ratio-uv-ips
Alias: $Quantity-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Quantity-uv-ips

Alias: $Observation-results-laboratory-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-results-laboratory-uv-ips

//=========================

---

File: repos/hl7-eu_SLASH_laboratory/input/fsh/alias-systems.fsh

//============== ALIAS ===============

// --- Code Systems
Alias: $absent-unknown-uv-ips = http://hl7.org/fhir/uv/ips/CodeSystem/absent-unknown-uv-ips
Alias: $ajcc = http://cancerstaging.org
Alias: $atc = http://www.whocc.no/atc
Alias: $condition-category = http://terminology.hl7.org/CodeSystem/condition-category
Alias: $data-absent-reason = http://terminology.hl7.org/CodeSystem/data-absent-reason
Alias: $data-absent-reason-cs =  http://terminology.hl7.org/CodeSystem/data-absent-reason
Alias: $diagnosis-role = http://terminology.hl7.org/CodeSystem/diagnosis-role
Alias: $dicomOntology = http://dicom.nema.org/resources/ontology/DCM
Alias: $edqm = https://standardterms.edqm.eu
Alias: $encounter-status = http://hl7.org/fhir/encounter-status
Alias: $iccc3 = http://terminology.hl7.org/CodeSystem/iccc-3 // FAKE URL NOT YET ASSIGNED !!
Alias: $icd03 = http://terminology.hl7.org/CodeSystem/icd-o-3
Alias: $icd10 = http://hl7.org/fhir/sid/icd-10
Alias: $loinc =  http://loinc.org
Alias: $medicalDevice-cs = urn:oid:1.3.6.1.4.1.12559.11.10.1.3.1.44.6 // ===> to be checked <====
Alias: $niaid = http://niaid.nih.gov
Alias: $nibsc = http://nibsc.org
Alias: $obligation-cs = http://hl7.org/fhir/CodeSystem/obligation
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $orpha = https://www.orpha.net // Used urn:oid:1.3.6.1.4.1.12559.11.10.1.3.1.44.5 for the MyHealth@EU lab guide to be checked <====
Alias: $pei = http://pei.de
Alias: $referencerange-meaning = http://terminology.hl7.org/CodeSystem/referencerange-meaning
Alias: $sct = http://snomed.info/sct
Alias: $sex-parameter-for-clinical-use = http://terminology.hl7.org/CodeSystem/sex-parameter-for-clinical-use
Alias: $ucum =  http://unitsofmeasure.org
Alias: $v2-0074 = http://terminology.hl7.org/CodeSystem/v2-0074
Alias: $v2-0131 = http://terminology.hl7.org/CodeSystem/v2-0131
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $v3-ActPriority = http://terminology.hl7.org/CodeSystem/v3-ActPriority
Alias: $v3-AdministrativeGender =  http://terminology.hl7.org/CodeSystem/v3-AdministrativeGender
Alias: $v3-NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: $v3-ObservationInterpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation
Alias: $v3-ParticipationType = http://terminology.hl7.org/CodeSystem/v3-ParticipationType
Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode

// --- SID
Alias: $oid = urn:ietf:rfc:1155
Alias: $uri = urn:ietf:rfc:3986

//=========================

---

File: repos/hl7-eu_SLASH_laboratory/input/images-source/actors.plantuml

@startuml
"Laboratory Report Creator" as creator
"Laboratory Report Repository" as repos
"Laboratory Report Consumer" as consumer
"Generate a report" as (create)
"Store a report" as (store)
"Use a report" as (use)

"Send/Provide a report" as (send)
"Receive/Query a report" as (receive)

creator --> (create)
creator --> (send)
consumer --> (use)
consumer --> (receive)
repos --> (store)
repos --> (send)
repos --> (receive)
@enduml

---

File: repos/hl7-eu_SLASH_laboratory/input/images-source/Author-map.plantuml

@startuml
skinparam class {
    BackgroundColor<<LogicalModel>> #FFCC00
    BackgroundColor<<Profile>> #CCCCFF
}
skinparam linetype ortho
legend right
  | <#FFCC00> | Logical Model |
  | <#CCCCFF> | Profile |
endlegend
class "Author" <<LogicalModel>> [[StructureDefinition-Author.html]]
note right #PaleTurquoise [[ConceptMap-author2FHIR-eu-lab.html]]
Concept Map
endnote
class "Composition-eu-lab" <<Profile>> [[StructureDefinition-Composition-eu-lab.html]]
"Author" --> "Composition-eu-lab"
class "DiagnosticReport-eu-lab" <<Profile>> [[StructureDefinition-DiagnosticReport-eu-lab.html]]
"Author" --> "DiagnosticReport-eu-lab"
"Composition-eu-lab" -[hidden]-> "DiagnosticReport-eu-lab"
@enduml

---

File: repos/hl7-eu_SLASH_laboratory/input/images-source/document-overview.plantuml

@startuml

skinparam linetype ortho
scale 0.5


artifact "Bundle: Laboratory Report" as bundle
artifact "Composition: Laboratory Report" as composition
artifact "DiagnosticReport: Laboratory Report" as diagnosticReport
artifact "Observation Results: laboratory" as result
artifact "Patient: Animal" as animalPatient
artifact "Patient: Person" as humanPatient
artifact "Practitioner: Laboratory Report" as Practitioner
artifact "PractitionerRole: Laboratory Report" as PractitionerRole
artifact "ServiceRequest: Laboratory Order" as ServiceRequest
artifact "Specimen: Laboratory" as Specimen
artifact "Body structure: Laboratory" as bodyStructure
artifact "Substance: Specimen Additive Substance" as Substance

artifact Organization
artifact Encounter
artifact Location
artifact Provenance
artifact Coverage
artifact Device


url of bundle is  [[StructureDefinition-Bundle-eu-lab.html]]
url of composition is  [[StructureDefinition-Composition-eu-lab.html]]
url of diagnosticReport is  [[StructureDefinition-DiagnosticReport-eu-lab.html]]
url of result [[StructureDefinition-Observation-resultslab-eu-lab.html]]
url of humanPatient [[StructureDefinition-Patient-eu-lab.html]]
url of animalPatient [[StructureDefinition-Patient-animal-eu-lab.html]]
url of Practitioner [[StructureDefinition-Practitioner-eu-lab.html]]
url of PractitionerRole [[StructureDefinition-PractitionerRole-eu-lab.html]]
url of ServiceRequest [[StructureDefinition-ServiceRequest-eu-lab.html]]
url of Specimen [[StructureDefinition-Specimen-eu-lab.html]]
url of Substance [[StructureDefinition-Substance-additive-eu-lab.html]]
url of bodyStructure [[StructureDefinition-BodyStructure-eu-lab.html]]

bundle o-- composition
bundle o-- diagnosticReport
bundle o-- result
bundle o-- humanPatient
bundle o-- animalPatient
bundle o-- composition
bundle o-- Practitioner
bundle o-- PractitionerRole
bundle o-- ServiceRequest
bundle o-- Specimen
bundle o-- Substance
bundle o-- bodyStructure
bundle o-- Organization
bundle o-- Encounter
bundle o-- Location
bundle o-- Provenance
bundle o-- Coverage
bundle o-- Device

composition --> result
composition --> animalPatient
composition --> humanPatient
composition --> Practitioner
composition --> PractitionerRole
composition --> ServiceRequest
composition --> Specimen
composition --> Location
composition --> Encounter


diagnosticReport --> composition
Specimen --> Substance
Specimen --> bodyStructure
PractitionerRole --> Practitioner
PractitionerRole --> Organization
result --> Device
ServiceRequest --> Coverage


@enduml

---

File: repos/hl7-eu_SLASH_laboratory/input/images-source/LabReport-map.plantuml

@startuml
skinparam class {
    BackgroundColor<<LogicalModel>> #FFCC00
    BackgroundColor<<Profile>> #CCCCFF
}
skinparam linetype ortho
legend right
  | <#FFCC00> | Logical Model |
  | <#CCCCFF> | Profile |
endlegend
class "LabReport" <<LogicalModel>> [[StructureDefinition-LabReport.html]]
note right #PaleTurquoise [[ConceptMap-labRpt2FHIR-eu-lab.html]]
Concept Map
endnote
class "DiagnosticReport-eu-lab" <<Profile>> [[StructureDefinition-DiagnosticReport-eu-lab.html]]
"LabReport" --> "DiagnosticReport-eu-lab"
class "Composition-eu-lab" <<Profile>> [[StructureDefinition-Composition-eu-lab.html]]
"LabReport" --> "Composition-eu-lab"
"DiagnosticReport-eu-lab" -[hidden]-> "Composition-eu-lab"
@enduml

---

File: repos/hl7-eu_SLASH_laboratory/input/images-source/LegalAuthenticator-map.plantuml

@startuml
skinparam class {
    BackgroundColor<<LogicalModel>> #FFCC00
    BackgroundColor<<Profile>> #CCCCFF
}
skinparam linetype ortho
legend right
  | <#FFCC00> | Logical Model |
  | <#CCCCFF> | Profile |
endlegend
class "LegalAuthenticator" <<LogicalModel>> [[StructureDefinition-LegalAuthenticator.html]]
note right #PaleTurquoise [[ConceptMap-legalAuth2FHIR-eu-lab.html]]
Concept Map
endnote
class "Composition-eu-lab" <<Profile>> [[StructureDefinition-Composition-eu-lab.html]]
"LegalAuthenticator" --> "Composition-eu-lab"
@enduml

---

File: repos/hl7-eu_SLASH_laboratory/input/images-source/links-overview.plantuml

@startuml

skinparam linetype ortho
scale 0.6

artifact "Composition: Laboratory Report" as composition
artifact "DiagnosticReport: Laboratory Report" as diagnosticReport
artifact "Observation Results: laboratory" as result
artifact "Patient: Animal" as animalPatient
artifact "Patient: Person" as humanPatient
artifact "Practitioner: Laboratory Report" as Practitioner
artifact "PractitionerRole: Laboratory Report" as PractitionerRole
artifact "ServiceRequest: Laboratory Order" as ServiceRequest
artifact "Specimen: Laboratory" as Specimen
artifact "Substance: Specimen Additive Substance" as Substance
artifact "Body structure: Laboratory" as bodyStructure


url of composition is  [[StructureDefinition-Composition-eu-lab.html]]
url of diagnosticReport is  [[StructureDefinition-DiagnosticReport-eu-lab.html]]
url of result [[StructureDefinition-Observation-resultslab-eu-lab.html]]
url of humanPatient [[StructureDefinition-Patient-eu-lab.html]]
url of animalPatient [[StructureDefinition-Patient-animal-eu-lab.html]]
url of Practitioner [[StructureDefinition-Practitioner-eu-lab.html]]
url of PractitionerRole [[StructureDefinition-PractitionerRole-eu-lab.html]]
url of ServiceRequest [[StructureDefinition-ServiceRequest-eu-lab.html]]
url of Specimen [[StructureDefinition-Specimen-eu-lab.html]]
url of Substance [[StructureDefinition-Substance-additive-eu-lab.html]]
url of bodyStructure [[StructureDefinition-BodyStructure-eu-lab.html]]


diagnosticReport --> composition
diagnosticReport --> result
diagnosticReport --> animalPatient
diagnosticReport --> humanPatient
diagnosticReport --> Practitioner
diagnosticReport --> PractitionerRole
diagnosticReport --> ServiceRequest
diagnosticReport --> Specimen

composition --> result
composition --> diagnosticReport
composition --> animalPatient
composition --> humanPatient
composition --> Practitioner
composition --> PractitionerRole
composition --> ServiceRequest
composition --> Specimen

result --> animalPatient
result --> humanPatient
result --> Practitioner
result --> PractitionerRole
result --> ServiceRequest
result --> Specimen

Specimen --> animalPatient
Specimen --> humanPatient
Specimen --> Practitioner
Specimen --> PractitionerRole
Specimen --> ServiceRequest
Specimen --> Substance
Specimen --> bodyStructure

PractitionerRole --> Practitioner

@enduml

---

File: repos/hl7-eu_SLASH_laboratory/input/images-source/Order-map.plantuml

@startuml
skinparam class {
    BackgroundColor<<LogicalModel>> #FFCC00
    BackgroundColor<<Profile>> #CCCCFF
}
skinparam linetype ortho
legend right
  | <#FFCC00> | Logical Model |
  | <#CCCCFF> | Profile |
endlegend
class "Order" <<LogicalModel>> [[StructureDefinition-Order.html]]
note right #PaleTurquoise [[ConceptMap-order2FHIR-eu-lab.html]]
Concept Map
endnote
class "ServiceRequest-eu-lab" <<Profile>> [[StructureDefinition-ServiceRequest-eu-lab.html]]
"Order" --> "ServiceRequest-eu-lab"
@enduml

---

File: repos/hl7-eu_SLASH_laboratory/input/images-source/Payer-map.plantuml

@startuml
skinparam class {
    BackgroundColor<<LogicalModel>> #FFCC00
    BackgroundColor<<Profile>> #CCCCFF
}
skinparam linetype ortho
legend right
  | <#FFCC00> | Logical Model |
  | <#CCCCFF> | Profile |
endlegend
class "Payer" <<LogicalModel>> [[StructureDefinition-Payer.html]]
note right #PaleTurquoise [[ConceptMap-payer2FHIR-eu-lab.html]]
Concept Map
endnote
class "ServiceRequest-eu-lab" <<Profile>> [[StructureDefinition-ServiceRequest-eu-lab.html]]
"Payer" --> "ServiceRequest-eu-lab"
class "Coverage" <<Profile>> [[http://hl7.org/fhir/StructureDefinition/Coverage]]
"Payer" --> "Coverage"
"ServiceRequest-eu-lab" -[hidden]-> "Coverage"
class "Patient-eu-lab" <<Profile>> [[StructureDefinition-Patient-eu-lab.html]]
"Payer" --> "Patient-eu-lab"
"Coverage" -[hidden]-> "Patient-eu-lab"
@enduml

---

File: repos/hl7-eu_SLASH_laboratory/input/images-source/Recipient-map.plantuml

@startuml
skinparam class {
    BackgroundColor<<LogicalModel>> #FFCC00
    BackgroundColor<<Profile>> #CCCCFF
}
skinparam linetype ortho
legend right
  | <#FFCC00> | Logical Model |
  | <#CCCCFF> | Profile |
endlegend
class "Recipient" <<LogicalModel>> [[StructureDefinition-Recipient.html]]
note right #PaleTurquoise [[ConceptMap-recipient2FHIR-eu-lab.html]]
Concept Map
endnote
class "information-recipient" <<Profile>> [[StructureDefinition-information-recipient.html]]
"Recipient" --> "information-recipient"
@enduml

---

File: repos/hl7-eu_SLASH_laboratory/input/images-source/Result-map.plantuml

@startuml
skinparam class {
    BackgroundColor<<LogicalModel>> #FFCC00
    BackgroundColor<<Profile>> #CCCCFF
}
skinparam linetype ortho
legend right
  | <#FFCC00> | Logical Model |
  | <#CCCCFF> | Profile |
endlegend
class "Result" <<LogicalModel>> [[StructureDefinition-Result.html]]
note right #PaleTurquoise [[ConceptMap-result2FHIR-eu-lab.html]]
Concept Map
endnote
class "Observation-resultslab-eu-lab" <<Profile>> [[StructureDefinition-Observation-resultslab-eu-lab.html]]
"Result" --> "Observation-resultslab-eu-lab"
class "DiagnosticReport-eu-lab" <<Profile>> [[StructureDefinition-DiagnosticReport-eu-lab.html]]
"Result" --> "DiagnosticReport-eu-lab"
"Observation-resultslab-eu-lab" -[hidden]-> "DiagnosticReport-eu-lab"
class "Composition-eu-lab" <<Profile>> [[StructureDefinition-Composition-eu-lab.html]]
"Result" --> "Composition-eu-lab"
"DiagnosticReport-eu-lab" -[hidden]-> "Composition-eu-lab"
@enduml

---

File: repos/hl7-eu_SLASH_laboratory/input/images-source/SpecimenLab-map.plantuml

@startuml
skinparam class {
    BackgroundColor<<LogicalModel>> #FFCC00
    BackgroundColor<<Profile>> #CCCCFF
}
skinparam linetype ortho
legend right
  | <#FFCC00> | Logical Model |
  | <#CCCCFF> | Profile |
endlegend
class "SpecimenLab" <<LogicalModel>> [[StructureDefinition-SpecimenLab.html]]
note right #PaleTurquoise [[ConceptMap-specimen2FHIR-eu-lab.html]]
Concept Map
endnote
class "Specimen-eu-lab" <<Profile>> [[StructureDefinition-Specimen-eu-lab.html]]
"SpecimenLab" --> "Specimen-eu-lab"
class "BodyStructure-eu-lab" <<Profile>> [[StructureDefinition-BodyStructure-eu-lab.html]]
"SpecimenLab" --> "BodyStructure-eu-lab"
"Specimen-eu-lab" -[hidden]-> "BodyStructure-eu-lab"
@enduml

---

File: repos/hl7-eu_SLASH_laboratory/input/images-source/Subject-map.plantuml

@startuml
skinparam class {
    BackgroundColor<<LogicalModel>> #FFCC00
    BackgroundColor<<Profile>> #CCCCFF
}
skinparam linetype ortho
legend right
  | <#FFCC00> | Logical Model |
  | <#CCCCFF> | Profile |
endlegend
class "Subject" <<LogicalModel>> [[StructureDefinition-Subject.html]]
note right #PaleTurquoise [[ConceptMap-subject2FHIR-eu-lab.html]]
Concept Map
endnote
class "Patient-eu-lab" <<Profile>> [[StructureDefinition-Patient-eu-lab.html]]
"Subject" --> "Patient-eu-lab"
@enduml

---

File: repos/hl7-eu_SLASH_laboratory/input/images-source/Validator-map.plantuml

@startuml
skinparam class {
    BackgroundColor<<LogicalModel>> #FFCC00
    BackgroundColor<<Profile>> #CCCCFF
}
skinparam linetype ortho
legend right
  | <#FFCC00> | Logical Model |
  | <#CCCCFF> | Profile |
endlegend
class "Validator" <<LogicalModel>> [[StructureDefinition-Validator.html]]
note right #PaleTurquoise [[ConceptMap-validator2FHIR-eu-lab.html]]
Concept Map
endnote
class "Composition-eu-lab" <<Profile>> [[StructureDefinition-Composition-eu-lab.html]]
"Validator" --> "Composition-eu-lab"
@enduml

---

File: repos/hl7-eu_SLASH_laboratory/input/pagecontent/background.md


### The European context

The history of European collaboration in the health space is long, and prior to the start of the epSOS project (2008-2014), that was intended to work on the development, the pilot and the evaluation of the first cross-border eHealth service.

This long journey resulted in the first operational cross-border services for Patient Summary and ePrescription based on the HL7 CDA R2.0 standard in 2019 ( see [here](https://art-decor.ehdsi.eu/art-decor/decor-templates--epsos-) for the current MyHealth@EU CDA-based specifications), initially activated in a few countries and progressively extended on a voluntary basis. 

These services was initially identified as EHDSI (under CEF), recently renamed [MyHealth@EU](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en).

A set of new "priorities" services, beyond Patient Summary and ePrescription, have been identified by the European commission to be progressively implemented for the cross-border services. Namely:
- Laboratory Report
- Images and Imaging Report
- (Hospital) Discharge Report

All the new services will be based on HL7 FHIR.

The Laboratory Report is planned to be the first implemented new service and foreseen for MyHealth@EU wave 8 (2024-25).

The following picture provides a planning overview for the new cross-border services as of at the date of this publication.

<div>
<img src="eu-projects-timeline.png"  alt="Project Timeline" width="60%">
<p>Figure 1 - Projects Timeline for the E-EHRxF</p>
<p></p>
</div>


With the future introduction of the [proposed EDSH regulation](https://health.ec.europa.eu/publications/proposal-regulation-European-health-data-space_en) the adoption of a common format for the sharing for these "priority domains"  will not be limited to the cross border services, but it will be likely required to be supported by any EHR in Europe.

Note 1: this "common format" is also known as the European EHR exchange format (E-EHRxF)

### Why this Guide and Why Now

As highlighted in the previous figure, a set of EU driven (XpanDH, JA-09, xShare..) and national initiatives were planned or ongoing. The risk of potentially not aligned national choices was not negligeable.

Considering this landscape, HL7 Europe recognized the need of promoting a Standardization activity at the European level with the purpose of:
- Facilitating the harmonization among the national initiatives
- Supporting the development of the future European-EHRxF

Note: the proof-of-concept guide developed by the X-eHealth project has been used as starting point. HL7 Europe co-lead with IHE Europe the X-eHealth specification work package.


### Towards a Coherent Ecosystem of Laboratory Report IGs

The vision inspiring this project was that of contributing to the creation of a coherent - **not competing** - ecosystem of FHIR IGs for the Laboratory Report. System including global, regional and national standard and project specific guides, each maintaining its own governance rules and meeting its own specific scope and jurisdictional requirements **without losing cross-consistency**.

This will:
- enlarge the stakeholders engagement and consensus
- reduce the duplication of work
- improve the overall quality of the guides

<div>
<p></p>
<img src="layered-specs.png"  alt="Vision: Layered Specification" width="60%">
<p></p>
<p>Figure 2 - Vision: Layered Specification</p>
<p></p>
</div>

The following figure shows how this vision is going to be realized: some current national and European developments are in fact already referring to this guide.

<div>
<p></p>
<img src="guide-relationship.png"  alt="Vision: relatioship among Lab Report IGs" width="60%">
<p></p>
<p>Figure 3 - Implementing the vision</p>
<p></p>
</div>

---

File: repos/hl7-eu_SLASH_laboratory/input/pagecontent/challenges.md

This page aims to summarize some of the challenges to be faced dealing with Laboratory Report in the European context, without pretending to be exhaustive.

### Terminology

As in other care areas, the adoption of different terminologies is one of the main interoperability challenges to be faced, with the known limitations on relying on terminology mappings.

For **test coding** there are in fact two main international laboratory terminology systems that are being used in Europe: 
* Logical Observation Identifiers Names and Codes (LOINC), and
* Nomenclature for Properties and Units (NPU).

with the exception of UK using SNOMED CT.

The same issue arises with other coded elements as specimen types, anatomic specification, specimen collection, processing and examination techniques, devices, containers, measurement units, and ordinal or nominal-scale test results.

Regularly, test qualitative results are expressed via SNOMED CT concepts, quantitatively measured results are documented by standardized units, which are expressed preferably via UCUM to allow computer processing.  As SNOMED CT is the most extensive terminology in health care, this code system offers solutions for the coded representation of laboratory-related facts in most cases.


---

File: repos/hl7-eu_SLASH_laboratory/input/pagecontent/contributors.md

### Authors and Contributors

This guide is the result of a multi  stakeholders effort involving different experts from several European countries, projects (e.g. XpanDH) and initiatives (e.g. MyHealth@EU); organized in two collaborating sub-groups:
- one focusing on semantic and functional requirements, and
- one working on the HL7 FHIR specifications

The following picture provide an overview of the origin of the participants.

<div>
<img src="eu-coverage.png"  alt="Coverage" width="40%">
<p>Figure 1 - Experts distribution</p>
<p></p>
</div>

|Role | Name             | Affiliation |
|------------------|------------------|-------------|
| Project facilitator|  Hynek Kružík | HL7 CZ/Europe |
| Project facilitator|  Giorgio Cangioli | HL7 IT/Europe |
| Author |  Alexander Henket   | NICTIZ, HL7 NL |
| Author |  Robert Hausam   | Hausam Consulting, US |
| Author |  Ulrike Merrick  | APHL, US |
| Author |  Daniel Karlsson | E-hälsomyndigheten, HL7 SE |
| Author |  Oliver Egger  |  ahdis, HL7 CH |
| Author |  Gabriel Kleinoscheg | ELGA, HL7 AT |
| Author |  Declan Kieran | NHS England, UK |
| Author |  Manel Domingo | MoH Spain, SP |
| Author |  Petra Lavrikova | NCEZ MoH Czech, CZ |
| Author |  Gunnar Nordin | Equalis, SE |
| Author |  Ferruccio Ceriotti | Policlinico di Milano, IT |
| Author |  Sara Russo | SPMS, PT |
| Author |  Feikje Hielkema | NICTIZ, NL |
| Author |  Karolina Buckow | DE |
| Author |  Kerli Linna | TEHIK, EE |
| Author |  Eugenia Rinaldi | Charité (Univ. Med. Berlin), DE |
| Author |  David Barnet | NHS England, UK |
| Contributor |  Michaela Ziegler | ahdis, HL7 CH |
| Contributor |  Rasa Visinskiene | MyHealth@EU  Solution Providers |
| Contributor |  Mathias Ghys | MyHealth@EU  Solution Providers |
| Contributor |  João Almeida  |  HL7 PT/Europe |
| Contributor |  Kai U. Heitmann  | HL7 DE |
| Contributor | Christof Gessner | HL7 DE |
| Contributor |  Martina Sender | mio42, DE |
| Contributor |  Dennis Kipping | mio42, DE |
| Contributor |  Jose Costa-Teixeira | HL7 BE |
| Contributor |  Lucas Lundbäck | Montrima, SE |
| Contributor |  Jeremy Lieth | BfArM, DE |
| Contributor |  David Wattien | NICTIZ, NL |
| Contributor |  Leonardo Alcaro | DIT, HL7 IT |
| Contributor |  Samuel Danhardt |  Agence eSanté, LU |
| Contributor |  Philip Brennan | NHS England, UK |
| Contributor |  Marcel Hanselmann   | HL7 CH |
| Contributor |  Kristiina Kuldkepp | TEHIK, EE |
| Contributor |  Rik Smithies | HL7 UK |
| Contributor |  Petr Siblík | HL7 CZ |
| Contributor |  Nathalie Nikodym | Nictiz, NL |
| Contributor |  Karim Nashar | NHS England, UK |
| Contributor |  Adam Page | NHS England, UK |
| Contributor |  Stefano Dalmiani | F. Monasterio, HL7 IT |
| Contributor |  Juergen Brandstaetter | CodeWerk, AT |
| Contributor |  Juan Antonio de los Cobos | MoH Spain, SP |


**Participants**: | Peter Keßler(mio42 DE), Mario Sicuranza (CNR IT); Mario Ciampi (CNR IT); 
Marta Burek (MedCom DK); Jean Michel Polfliet (eGezondheid/eSanté Belgium); Michael Johansen (MedCom DK);
Monika Budvytiene (LT) ; Bart Decuypere (HL7 BE); Frédéric Bulckaen (MyHealth@EU  Solution Providers);
Prerna Arora (MyHealth@EU  Solution Providers); Sebastian Bojanowski (HL7 PL);
François Macary (HL7 FR); Renato Calamai (HL7 IT); Rebeca Ceder (SE);
Sanchita Farruque (SE); Jagjit Singh Bhamra (NO); Simreen Kaur Johal,(NO);
Marte Espnes Temre (NO); Jostein Ven (NO); Samuel Danhardt (LU);
Mar Matanzo (SP); Chrenova Katerina (CZ); Irena Rubesova (CZ);
Miroslav Zvolsky (CZ); Michaela Warzecha (BfArM DE); Alexander Mense (HL7 AT);
Mika Tuomainen (FI); Marcus Fearnett (NHS England UK); 
 Oyvind Aassve (HL7 NO); Rick Busbridge (Nictiz NL); Ignacio Fernandez (SP); Nina Zenkovič (NIJZ SI)
Naeme Nekooguyan (ANS FR); Michal Cermak (Norsk helsenett NO); Linn Brandt (Norwegian Directorate of e-Health); Paavo Kauranne (Kela FI)

---

File: repos/hl7-eu_SLASH_laboratory/input/pagecontent/crm.md

### Traceability to reference materials of higher order

Any measurement depends on a comparison between an unknown amount – for the clinical laboratory the unknown is usually hidden in a sample – and something with a known amount. This process is called calibration and to ensure correct outcome the EC regulation (EU) 2017/746 demands that the calibrators used in the in vitro diagnostic measuring procedure (IVD-MP) have an assigned amount that are traceable to reference materials of “higher order”.

Ideally, the knowledge of the amount in the calibrator relies on a reference measurement procedure (RMP) by which values of the amount have been transferred from a certified primary reference material with the ultimate weight or amount of the pure substances and expressed in SI units. This is however only the case for simple molecules like glucose and creatinine.

Many analytes of interest in medicine are not just that well defined. They are biological active substances like hormones or proteins with various functions. These substances appear in multiple forms (called isoforms), for example more or less phosphorylated, glycosylated, or complexed with other substances or with each other. Thus, “insulin”, “prostatic specific antigen (PSA)”, “ferritin” or “albumin” are not single molecular species but are more or less complex mixtures of different isoforms. In addition, the measuring methods used in clinical laboratory are not direct measuring techniques like mass spectrometry, but they are based on the binding of antibodies to the analyte of interest (also called immunoassays). These immunoassays are known to react differently to the specific isoforms of the analyte, and they can be affected by the matrix of the sample. Therefore, it is often not possible to use a certified primary reference material directly to assign a value to the calibrators in an IVD-MPs. A secondary reference material needs to be created which has very similar characteristics to the real clinical samples (also called commutability).

In case that the analyte measured by the IVD-MP is sufficiently well-defined, it is usually possible to produce a commutable certified secondary reference material with an assigned amount value expressed in SI units (usually g/L). This assigned amount is obtained by a series of comparisons that start at the level of the certified primary reference material and transfer its value via a reference measurement procedure (RMP).

In case that the analyte measured by the IVD-MP is insufficiently defined or if a stable certified primary reference material of reference measurement procedure is not available a conventional international calibrator can be created. These materials usually have an amount value expressed in “International Unit (IU)” and the composition of the analyte is also defined by the isoform mixture present in this specific material.

Primary and secondary certified reference materials and international conventional calibrators are produced as higher order reference materials by scientific institutions and are used by manufacturers to produce replicates to which the amount value is transferred in a calibration hierarchy to manufacturers working standards and to end-user calibrators that are used by the laboratories to assign a value to an unknown amount in a patient sample.

To fully define what is measured, in case of measurement of complex molecules, the laboratory should refer to the CRM or conventional international calibrator to which the measured value is traceable via the end user calibrator. The measured value, e.g., 5 IU/L of a substance, is then expressed as if the composition in the sample equals to the equivalent amount of the conventional international calibrator.

The higher order reference material, as well as the measurement unit, is a feature of the measured value, that is what is observed.

The primary and secondary certified reference materials that are produced in line with the requirements of ISO 15194 and that are considered to higher order reference materials are listed by JCTLM (https://www.jctlmdb.org/#/app/home).

Most of the international conventional calibrators of WHO are available via its designated laboratory MHRA (former NIBSC) (https://www.nibsc.org/)

Some examples (in plain text, without the specific syntax used by LOINC and NPU) to describe what is measured in a laboratory test.

* [The concentration of insulin in a sample is 50 mIU/L with reference to IS 66/304](Observation-4335db48-7090-45b3-a2c2-45b45f94a67c.html) (https://www.nibsc.org/documents/ifu/66-304.pdf)
* The concentration of ferritin in a sample is 25 µg/L with reference to IS 19/118 (https://nibsc.org/documents/ifu/19-118.pdf)
* The concentration of albumin in a sample is 45 g/L with reference to ERM-DA470k/IFCC (https://www.jctlmdb.org/#/app/home)
* The concentration of PSA in the sample is 6,8 µg/L with reference to IS 17/100 (https://www.nibsc.org/documents/ifu/17-100.pdf)

Secondary certified reference materials and international conventional calibrators are usually produced from material of human origin like blood or serum, and they are therefore available in a limited stock that will eventually be depleted.

Certified secondary reference materials for which the analyte is well-defined can be reproduced. The value can either be transferred (1) from the old batch to a new one or (2) from the primary certified reference material using the reference measurement procedure. If the process is done correctly and if commutability of both the old and the new batch is guaranteed the new batch of CRMs does not lead to a shift of values of the IVD-MPs.

For international conventional calibrators containing a complex and ill- defined mixture of isoforms reproduction can be more challenging. New stocks might have a different mixture of isoforms and the composition of the analyte will therefore be redefined with the new batches and a new value with a measurement unit will be assigned. Therefore, a shift of value in the IVD-MPs is usually observed, making comparison of measurement values unsafe when they are traceable to different international conventional calibrators.


### References:

BIPM. VIM: International vocabulary of metrology – Basic and general concepts and associated terms, 3rd edition (2012),(https://www.bipm.org/en/committees/jc/jcgm/publications)

EC regulation (EU) 2017/746

ISO. In vitro diagnostic medical devices — Requirements for establishing metrological traceability of values assigned to calibrators, trueness control materials and human samples. ISO 17511:2020.

ISO. In vitro diagnostic medical devices — Measurement of quantities in samples of biological origin. Requirements for certified reference materials and the content of supporting documentation. ISO 15194:2009.
 


---

File: repos/hl7-eu_SLASH_laboratory/input/pagecontent/design-choice.md



### Design Choices

{% include fsh-link-references.md %}

#### DiagnosticReport Vs HL7 FHIR Document

There are two ways - in principle - for representing a Laboratory report in HL7 FHIR:
* by using the DiagnosticReport resource; or 
* by treating the report as any other clinical document, i.e. using a HL7 FHIR document Bundle.


In many European countries:
* A Laboratory Report is a **legally signed document**
* Reports are often structured and may include different kinds of test results
* Several implementations are currently based on HL7 CDA (mainly IHE XD-LAB) and still use document exchange infrastructures (e.g. IHE XD*).

On the other hand, typical HL7 FHIR consumers expect to get Laboratory Reports by searching per DiagnosticReport.

The team looked therefore for a solution balancing the two approaches (FHIR document and DiagnosticReport), taking into account the R5 DiagnosticReport design pattern where the DiagnosticReport Vs Composition relationship is directed from the DiagnosticReport to the Composition resource.

In brief:

* A Laboratory Report is always represented by one and only one DiagnosticReport.
* A DiagnosticReport shall always refers a Composition.
* The referred Composition:
  * defines the report structure, often just a single section;
  * provides a mean for assembling the report as a document (i.e. as a Bundle of type 'document')
* The document Bundle represents the legally signable report and it includes all the data defining the report.

The following figure graphically summarizes the described design approach.

<div>
<img src="lab-structure.png"  alt="Laboratory report design approach" width="80%">
<p>Figure 1 - Overview of the report design approach</p>
<p></p>
</div>

The authors are aware of the fact that this choice requires additional work to the creator, requesting to consistently record in both DiagnosticReport and Composition a set of information. 
However they believe, that it enables for more options for the consumer:
* preserving the existing document-based paradigm and helping the transition from CDA-based solutions by facilitating the reuse of:
  * the existing exchange infrastructures
  * the on-development mapping CDA to FHIR artifacts
* enabling for the REST paradigm


#### Pre-adoption of R5 Rules for Document Bundles

To support the described approach, this guide allows for the **pre-adoption of the R5 rules for the inclusion of the resources in a document Bundle**, that is:

_"The document bundle SHALL include only: <..>
The supporting information: Any resources that are part of the graph of resources that reference or are referenced from the composition set, either directly or indirectly (e.g. recursively in a chain)"_

in opposition to the R4 rules requiring that, with the exception of the Provenance resource and the Binary including the stylesheet, only resources directly or indirectly - referred **from** the composition can be included.

This choice is justified by the fact that:
* There was a good consensus in the HL7 FHIR community for supporting this.
* In R5 the link between the DiagnosticReport and the Composition is realized with a Reference from the DiagnosticReport. The team decided to follow the same design pattern to facilitate the R4 to R5 transition.
* Adding a reference from the Composition to the DiagnosticReport would create an undesirable circular reference.

However, this choice it is not imposed, so that usage contexts whishing to keep a full consistency with R4 rules, may used the [DiagnosticReportReference] extension to refer the DiagnosticReport from the Composition. The adoption of this extension implies the presence of a circular reference Composition to/from  DiagnosticReport.

---

File: repos/hl7-eu_SLASH_laboratory/input/pagecontent/downloads.md

### Full IG

Download the entire implementation guide [here](full-ig.zip).

### NPM Package and Definitions

The following file contains all the value sets, profiles, extensions, list of pages and urls in the IG, etc. defined as part of this Implementation Guide:

- [NPM Package](package.tgz)

In addition there are format specific definition files:

- [XML](definitions.xml.zip)
- [JSON](definitions.json.zip)
- [TTL](definitions.ttl.zip)

These files should be the first choice whenever generating any implementation artifacts since they contain all of the rules about what makes these profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply in order to make a conformant implementation.  See the overview on [validating FHIR profiles and resources]({{ site.data.fhir.path }}validation.html).

There are also specific packages for the R4 and R4B FHIR specifications:

#### R4-specific NPM Package and Definitions

- [R4 NPM Package](package.r4.tgz)

#### R4B-specific NPM Package and Definitions

- [R4B NPM Package](package.r4b.tgz)

### Examples

All of the examples that are used in this Implementation Guide are available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)
- [TTL](examples.ttl.zip)


---

File: repos/hl7-eu_SLASH_laboratory/input/pagecontent/index.md

{% include fsh-link-references.md %}

<div xmlns="http://www.w3.org/1999/xhtml"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<blockquote class="stu-note">		
		<p>Obligations have been added to this version of the guide only as <b>Informative</b> material to collect feedback about their usage.</p>		
		<p>For more details about obligations please refer to the <a href="obligations.html">Obligations page</a></p>
	</blockquote>
</div>


### The Laboratory Domain
Clinical laboratory results play an important role in diagnosis, treatment, and follow-up of patients. 
The availability of high quality test results, and the capacity of sharing them, is therefore essential being often the basis for clinical decision making.
For this reason the Laboratory has been selected as one of the priority domains for the European EHR eXchange Format (E-EHRxF).

### Scope

Specify a set of rules to be applied to HL7 FHIR to define how to represent a **Laboratory Report** in the **European** Context, coherently with the European eHN Guidelines (see the [European eHealth - Key documents](https://health.ec.europa.eu/ehealth-digital-health-and-care/key-documents_en) ).

This Implementation Guide applies to laboratory reports within the core fields of in-vitro diagnostics, for example clinical biochemistry, haematology, immunohematology, microbiology, immunology, while leaving out some specialised laboratory domains like histopathology or medical genetics. 
This version focuses only on common rules that apply to all the in-scope situations, without specifying specialized domain-specific profiles, as for example microbiology profiles.

This guide is not limited to test results performed by clinical laboratories on Human specimens (from human subject), but it considers also results on non-human materials or living subjects; or non-human specimens paired with a human subject. Derived guides may restrict the scope as needed (e.g. limiting the scope to well-identified human beings)

### Purpose
The goal of this Implementation Guide is to define an European standard for the Laboratory Report to facilitate the harmonization among the national initiatives and prepare the ground for the European EHR eXchange Format (E-EHRxF).

This project is promoted by HL7 Europe, but realized in collaboration with several other European and national organizations and projects.

The aspiration of this guide is that of being used as basis for European National Guides, the European EHRxF and - consequently - by MyHealth@EU for the EU cross-border services.

### Background

The project background is described in the [background](background.html) page.

### Design choices

The solution adopted by this guide - and detailed in the [Design choices](design-choice.html) page - balances the business requirement of Laboratory Report as legally signable document (i.e. as a FHIR document), with the expectation to get Lab Report by searching per DiagnosticReport. All this, taking into account the R5 DiagnosticReport design pattern where the DiagnosticReport <-> Composition relationship is directed from the DiagnosticReport to the Composition resource.
This is done by supporting both perspectives (see figure below) requiring the document bundle ( [BundleLabReportEu] ) to always include a DiagnosticReport ( [DiagnosticReportLabEu] ) and enabling the pre-adoption of the R5 rules for the inclusion of entries in the Document Bundle.

<div>
<img src="lab-structure.png"  alt="Laboratory report design approach" width="50%">
<p>Figure 1 - Overview of the report design approach</p>
<p></p>
</div>

### Navigating the profiles

The following diagrams provide a browseable overview of the profiles specified by this guide (not all the relationships have been reported).

The first highlights the most relevant relationships starting from the DiagnosticReport ( [DiagnosticReportLabEu] ) resource (REST Perspective).

<div>
<p>{% include links-overview.svg %}</p>
<p>Figure 2 - Overview of the profiles relationships</p>
<p></p>
</div>

The second the profiles included in the document bundle ( [BundleLabReportEu] ) (Document Perspective).

<div>
<p>{% include document-overview.svg %}</p>
<p>Figure 3 - Overview of the document structure</p>
<p></p>
</div>


### Dependencies

{% include dependency-table.xhtml %}

### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### IP statements

{% include ip-statements.xhtml %}

### Authors and Contributors

Please refer to the [Authors and Contributors](contributors.html) page.


---

File: repos/hl7-eu_SLASH_laboratory/input/pagecontent/knownIusses.md

### Change requests not applied

* [SpecimenFeatureTypeR5 resolves to FHIR R4](https://jira.hl7.org/browse/FHIR-43200)
* [DiagnosticReportCompositionR5 resolves to FHIR R4](https://jira.hl7.org/browse/FHIR-43199)


Both items refer to preadopted R5 elements: the link points to an non-exiting element in R4 FHIR specifications.

Future version of the FHIR IG Publisher tool should fix this issue.

### Obligations

1. For each Actor defined an error is raised in the guide QA log.
This is due to a required used code, not present in the R4 value set version.
1. Obligations are only informative for this version of the guide. Further analysis are needed for consolidating them.

### Not endorsed canonical url


The [Laboratory Certified Reference Material](ValueSet-lab-certifiedRefMaterial-eu-lab.html) value set includes concepts that are derived from systems not having canonical urls assigned and/or confirmed by HL7 yet.

Adopters should use these urls being aware that they may change.

---

File: repos/hl7-eu_SLASH_laboratory/input/pagecontent/logicalModel.md


### Overview

The European eHealth Network "GUIDELINE on the electronic exchange of health data under
Cross-Border Directive 2011/24/EU Laboratory Results" - Release 1.1 is addressed to the Member States of the European Union and applies to the implementation of interoperable laboratory test result report cross-border exchange in order to support safe and efficient provisioning of care services in another member state.

It could also serve as a guiding principle for the national development and implementation of Laboratory Result Reports.

### HL7 FHIR Models

The eHN Laboratory Guideline in section 4 specifies a LABORATORY RESULTS DATASET, which is a simplified logical model of a laboratory report. Data set comprises of several basic parts as visualised in the diagram below.

<!-- {% include img.html img="LabReportModel.png" caption="Figure 1: Laboratory dataset model (option 1)" width="70%" %} -->
{% include img.html img="LabReportModel-1.png" caption="Figure 1: Laboratory dataset model" width="70%" %}
{% include img.html img="ObservationModel.png" caption="Figure 2: Laboratory observation dataset model" width="70%" %}

The following table lists the HL7 FHIR logical models used to represent the LABORATORY RESULT DATASET as defined in section 4 of the Release 1.1. of that eHN guideline.

To facilitate the references with the eHN data sets the short description of each element reports the label of the eHN element (e.g., A.1.7.2 Result validator name).

The HL7 FHIR logical model requires that element cardinality is specified, while the eHN data set doesn't define them on purpose. For this reason the elements' cardinality of the following FHIR Logical Model should be interpreted with this in mind, thus they should not be considered as "normative".


<table  style="border-collapse: collapse; width: 100%" border="1" >
<thead>
<tr style="text-align: center;">
<td><strong>Name</strong></td>
<td><strong>Title</strong></td>
<td><strong>Description</strong></td>
</tr>
</thead>
<tbody>

{% for sd_hash in site.data.structuredefinitions | sort: "title" -%}
  {%- assign sd = sd_hash[1] -%}
  {%- if sd.kind  == "logical" -%}
  <tr><td><a href="{{sd.path}}">{{sd.name}}</a></td><td>{{sd.title}}</td><td>{{sd.description}}</td></tr>
  {%- endif -%}
{%- endfor -%}

</tbody>
</table>

---

File: repos/hl7-eu_SLASH_laboratory/input/pagecontent/notes.md

### Implementation of laboratory panels

The current version of the HL7 Europe Laboratory Report Implementation Guide describes the use of Observations (with hasMember references) and a single instance of DiagnosticReport to support test panels and batteries (e.g. a Full Blood Count) rather than using DiagnosticReport as the grouping mechanism. We believe that the Observation hasMember approach offers a more flexible and intuitive method than using DiagnosticReport(s) for test groups, especially for complex reports such as example included in the base FHIR R4 specification:

[Diagnosticreport-example-ghp.xml - FHIR v4.0.1 (hl7.org)](https://hl7.org/fhir/R4/diagnosticreport-example-ghp.xml.html)

### Implementation of reflex tests

An optional R5 extension of the observation (Observation.triggeredBy-r5) has been pre-adopted in the current version of the HL7 Europe Laboratory Report Implementation Guide. We recommend to use this extension for implementation of the so-called reflex tests, i.e. additional test cases in which more than one test could be used to fulfil a given requirement (order or panel). In such case Observation.triggeredBy-r5.type should be set to #reflex.

### Representation of the microbiology tests

Microbiology tests are often being performed in consecutive steps, e.g. cultivation, possible quantification and subsequent sensitivity testing to antibiotics. Each analytical step depends on the result of the previous step or steps. Current version of the HL7 Europe Laboratory Report Implementation Guide recommends to use Observation.hasMember reference to express causality of the tests performed by the laboratory as shown in the [Microbiology Culture + Susceptibility](Bundle-BundleLabResultMicroCultureSusc.html).

### Sharing of previous result values

In some cases laboratory wants to share previous results for the same patient, same test, same method, and same measurement unit. In this case implementers should use supportingInfo extension of the Observation resource. Previous result will be expressed as a separate Observation and linked to current Observation through Observation.supportingInfo element.

---

File: repos/hl7-eu_SLASH_laboratory/input/pagecontent/obligations.md


<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<blockquote class="stu-note">
		<b>Informative for this version of the guide</b>
		<p>Obligations have been added to this version of the guide only as informative material to collect feedback about their usage.</p>
	</blockquote>
</div>


### Overview 

Obligations are a mean offered by HL7 FHIR to specify functional capabilities that defined actors MAY, SHOULD or SHALL to the data elements specified by the profiles.

The current choice has been that of defining the obligation in StructureDefinitions distinct from those used for defining the structural constraints.

This page describes also the actors that have been defined for specifying the obligations.

### Actors

{% include fsh-link-references.md %}

Three actors have been specified:
* the [Creator](ActorDefinition-actor-creator-eu-lab.html) ;
* the [Repository](ActorDefinition-actor-repos-eu-lab.html) ; and 
* the [Consumer](ActorDefinition-actor-consumer-eu-lab.html)

The first is the actor creating the report. This report can be send to a consumer or to a repository for report storage and sharing. 
The second actor is the system maintaining a copy of the report received, to store and make it available for the consumers.
The last actor is the system using the report received or retrieved.

<p>{% include actors.svg %}</p>

### Obligations List

1. Patient Obligations ([PatientEuObligations])
1. Human Name Obligations ([HumanNameEuObligations])
1. Observation Obligations	([ObservationEuObligations])
1. ServiceRequest Obligations ([ServiceRequestEuObligations])
1. Specimen Obligations ([SpecimenEuObligations])

---

File: repos/hl7-eu_SLASH_laboratory/input/pagecontent/overview.md


<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<blockquote class="stu-note">
		<b>NOT PART OF THE BALLOTED GUIDE.. JUST A Proof of concept.</b>
	</blockquote>
</div>


### Document Overview 

Some text here ....

<p>{% include document-overview.svg %}</p>


### Profile relationships

Some text here ....

<p>{% include links-overview.svg %}</p>


---

File: repos/hl7-eu_SLASH_laboratory/input/pagecontent/scenarios.md

### Laboratory Report scenarios

This page describes laboratory report scenarios for the purpose of **highlighting how laboratory report relevant statues should be set**.

These scenarios, in scope for this guide, relate to tests performed and reported by a clinical laboratory in fulfillment of test orders.

More details on statuses and their relationships are provided in [Laboratory result report status](status-mgmt.html).

It is not in scope of this version of this guides to specify the actor-to-actor interactions for supporting such scenarios. (e.g.  how to communicate that a report has been sent in error).

#### Complete Laboratory Report

* A Laboratory, after performing its internal testing workflow, **forms a complete result report**, according to the requirements and query parameters formulated by the ordering entity. Internal testing workflow includes consolidation of all test result orders or order groups and all steps of data quality assurance and validation.
* Then, depending on its internal organization, may inform the application of the clinical practice (known as Order Result Tracker), send the report to the intended recipients included in the Laboratory test order; store a report copy in an EHR-system; etc.

In this case:
* the Laboratory report status is set to “final”;
* all individual test results which are included in the final laboratory report should be also marked as final or cancelled

#### Partial Laboratory Report

* In some cases, a laboratory might **release a laboratory report** which is either **incomplete** (not all results are available or marked as “final”).
* This usually occurs when some of the results are known to be produced later, but others need to be communicated to report recipients due to specific organizational and/or process rules; or because of the urgency of some results. Note: The ‘delay’ in the results availability may be due to the nature of the test, or to organizational or technical reasons.

In such cases: 
* the report status should be set to “partial”. 

#### Preliminary Laboratory Report

* In some cases, a laboratory might **release a laboratory report** which is either **verified results that are known to change over time.**.
* This usually occurs for specific methods that require a long performance period, like cultures of slow growing organisms, but intermediate verified results need to be communicated to report recipients due to specific organizational and/or process rules (e.g. culture and susceptibility testing for mycobacterium tuberculosis (MTB))

In such cases: 
* the report status should be set to "preliminary". 

####  Updated Laboratory Report

* A **laboratory report, after being released as “final”, is modified** (edited or added to).
* the report is complete and verified by an authorized person

In this case:

* The report status used will indicate what modifications have occurred:
  * Status set to “amended” when changes were made to patient demographics or other parts of the report, that don't affect the result value (with units, if applicable) or result interpretation
  * Status set to “corrected” when changes are made to the result value (with units, if applicable) or result interpretation
  * Status set to “appended” when new results or interpretations are being added

#### Cancelled Laboratory Report

* In some cases, **a laboratory might not be able to perform any test and deliver a laboratory report**. This might have many reasons, e.g., lost sample, broken tube, dysfunction of the analyser etc. 

In such case:
* the status value should be updated to “cancelled” and 
* the specific details given - preferably as coded values - in the DiagnosticReport.extension:event-statusReason element.
* Additional information may be provided in the result comment element as well.


#### Error Laboratory Report

* It may happen that a **laboratory report is originally created/issued in error**. The report is marked so that the entire report shall not be considered as valid.
* All involved actors are informed about this “in error” report.

In this case:
* the laboratory report status should be set to “entered-in-error”.

---

File: repos/hl7-eu_SLASH_laboratory/input/pagecontent/semantic-notes.md

### Result Report Workflow
Result report use case covers workflows related to tests performed and reported by a clinical laboratory in response to in-vitro diagnostic test orders.

#### Standard Result Report Workflow
Laboratory, after performing its internal testing workflow, which includes consolidation of all test result orders or order groups and all steps of data quality assurance and validation, forms a complete result report, formed according to the requirements and query parameters formulated by the ordering entity, marks report as “final” (sets Laboratory result report status to “final”) and sends it to the application of the clinical practice (known as Order Result Tracker) as well as to all informants included in the Laboratory test order. A copy of the report might be stored to an attached EHR repository system.
All individual test results which are included in the final laboratory result report should be also marked as Final or Cancelled.

#### Partial Result Report Workflow
In some cases, laboratory might release result report which is either incomplete (not all results are available or marked as “final”) or is unverified. This is usually the case when some of the results are known to be produced later (due to the nature of the test or due to organisational or technical reasons in laboratory) while other test results need to be communicated to report recipients due to a specific organisational and/or process rules or due to an urgency of some of the test results. In such case the report status should be always set to “preliminary” or “partial”. For details see also [Laboratory result report status](#laboratory-result-report-status).

####	Amended Result Report Workflow
When result report content or referenced resources have been modified (edited or added to) after being released as "final" and the report is complete and verified by an authorised person, report status should be set to “amended”, “corrected” or “appended”, depending on the situation. For details see also [Laboratory result report status](#laboratory-result-report-status).

#### Cancelled Result Report Workflow
In some cases, laboratory might not be able to perform any test and deliver a result report. This might have many reasons, e.g., lost sample, broken tube, dysfunction of the analyser etc. In such case the status value should be updated to "cancelled" and the specific details given - preferably as coded values in the TestResultvalue.CodedResult element. Additional information may be provided in the result comment element as well.

#### Error Result Report Workflow
If the laboratory result report was originally created/issued in error, then its status should be set to “entered-in-error”. This is an amendment that marks that the entire report should not be considered as valid.

### Laboratory result report status
Laboratory result reports, as documented in the previous chapters, could exist in several states depending on a particular workflow. Applications consuming laboratory test result reports must take careful note of updated (revised) reports and ensure that retracted reports are appropriately handled.

For applications providing diagnostic reports, such as laboratory result reports, a report should not be final until all the individual data items reported with it are final or appended.

If the report has been withdrawn following a previous final release, the report and associated observations should be retracted by replacing the status codes with the concept "entered-in-error" and setting the conclusion/comment (if provided) and the text narrative to some text like "This report has been withdrawn" in the appropriate language. A reason for retraction may be provided in the narrative. A state machine documents possible transitions between states.

Laboratory result report is implemented using DiagnosticReport resource in FHIR. It includes clinical context such as requesting provider information, and some mix of atomic results, images, textual and coded interpretations, formatted representation of diagnostic reports and status information.

Diagnostic report status value set is comprised from following status codes (https://hl7.org/fhir/R4/codesystem-diagnostic-report-status.html)

|Lvl|Code|Display|Definition|
|:---:|----|-------|----------|
|1|registered|Registered|The existence of the report is registered, but there is nothing yet available.|
|1|partial|Partial|This is a partial (e.g. initial, interim or preliminary) report: data in the report may be incomplete or unverified.|
|2|preliminary|Preliminary|Verified early results are available, but not all results are final.|
|1|final|Final|The report is complete and verified by an authorized person.|
|1|amended|Amended|Subsequent to being final, the report has been modified. This includes any change in the results, diagnosis, narrative text, or other content of a report that has been issued.|
|2|corrected|Corrected|Subsequent to being final, the report has been modified to correct an error in the report or referenced results.|
|2|appended|Appended|Subsequent to being final, the report has been modified by adding new content. The existing content is unchanged.|
|1|cancelled|Cancelled|The report is unavailable because the measurement was not started or not completed (also sometimes called "aborted").|
|1|entered-in-error|Entered in Error|The report has been withdrawn following a previous final release. This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).|
|1|unknown|Unknown|The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.|

<div>
<p></p>
<img src="diagnostic-report-state-machine.png"  alt="Laboratory result report state machine diagram" width="60%">
<p></p>
</div>

### Observation status
Not only the report itself, but also its entries, i.e., individual Observations included in the laboratory result report, could be in a different lifecycle stage. This stage could be expressed using a status code as described in the table below with state transitions depicted in the State machine diagram.

|Lvl|Code|Display|Definition|
|:---:| --------- | ----------- | ------------------------------------------------------------------------------------- |
| 1 | registered  | Registered  | The existence of the observation is registered, but there is no result yet available. |
| 1 | preliminary | Preliminary | This is an initial or interim observation: data may be incomplete or unverified.      |
| 1 | final       | Final       | The observation is complete and there are no further actions needed. Additional information such "released", "signed", etc would be represented using [Provenance]({{ site.data.fhir.path }}provenance.html) which provides not only the act but also the actors and dates and other related data. These act states would be associated with an observation status of `preliminary` until they are all completed and then a status of `final` would be applied. |
| 1 | amended     | Amended     | Subsequent to being Final, the observation has been modified subsequent. This includes updates/new information and corrections. |
| 2 |  corrected  | Corrected   | Subsequent to being Final, the observation has been modified to correct an error in the test result.|
| 1 | cancelled   | Cancelled   | The observation is unavailable because the measurement was not started or not completed (also sometimes called "aborted").|
| 1 | entered-in-error | Entered in Error | The observation has been withdrawn following previous final release. This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".). |
| 1 | unknown      | Unknown    | The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which. |

<div>
<p></p>
<img src="observation-state-machine.png"  alt="Observation state machine diagram" width="60%">
<p></p>
</div>

# Composition status (R4)
A Composition defines the structure and narrative content necessary for a laboratory report. A Composition status represents a workflow and clinical status of the composition.

|Lvl|Code|Display|Definition|
|:---:| --------- | ----------- | ------------------------------------------------------------------------------------- |
| 1 | preliminary | Preliminary | This is a preliminary composition or document (also known as initial or interim). The content may be incomplete or unverified.                                                                                |
| 1 | final       | Final       | This version of the composition is complete and verified by an appropriate person and no further work is planned. Any subsequent updates would be on a new version of the composition.                        |
| 1 | amended     | Amended     | The composition content or the referenced resources have been modified (edited or added to) subsequent to being released as "final" and the composition is complete and verified by an authorized person. |
| 1 | entered-in-error | Entered in Error | The composition or document was originally created/issued in error, and this is an amendment that marks that the entire series should not be considered as valid.                                    |

A following state machine diagram describes transitions between statuses.

<div>
<p></p>
<img src="composition-state-machine-R4.png"  alt="Composition state machine diagram - R4" width="60%">
<p></p>
</div>


# Composition status (R5)
Composition status codes have been extended in R5 to better match different workflows and correspondence between Composition status and DiagnosticReport status.

|Lvl|Code|Display|Definition|
|:---:| --------- | ----------- | ------------------------------------------------------------------------------------- |
| 1 | registered  | Registered  | The existence of the composition is registered, but there is nothing yet available.   |
| 1 | partial     | Partial     | This is a partial (e.g. initial, interim or preliminary) composition: data in the composition may be incomplete or unverified.                                                                            |
| 2 | preliminary | Preliminary | Verified early results are available, but not all results are final.                  |
| 1 | final       | Final       | This version of the composition is complete and verified by an appropriate person and no further work is planned. Any subsequent updates would be on a new version of the composition.                        |
| 1 | amended     | Amended     | The composition content or the referenced resources have been modified (edited or added to) subsequent to being released as "final" and the composition is complete and verified by an authorized person. |
| 2 | corrected   | Corrected   | Subsequent to being final, the composition content has been modified to correct an error in the composition or referenced results.                                                                         |
| 2 | appended    | Appended    | Subsequent to being final, the composition content has been modified by adding new content. The existing content is unchanged.                                                                             |
| 1 | cancelled   | Cancelled   | The composition is unavailable because the measurement was not started or not completed (also sometimes called "aborted").                                                                            |
| 1 | entered-in-error | Entered in Error | The composition or document was originally created/issued in error, and this is an amendment that marks that the entire series should not be considered as valid.                                    |
| 1 | deprecated  | Deprecated  | This composition has been withdrawn or superseded and should no longer be used.       |
| 1 | unknown     | Unknown     | The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.                                                             |

A following state machine diagram describes transitions between statuses.

<div>
<p></p>
<img src="composition-state-machine-R5.png"  alt="Composition state machine diagram - R5" width="60%">
<p></p>
</div>


### Diagnostic report status and Observation status
The status of the document and status of its entries is partially independent from the workflow point of view thus specification of the consistency rules or mapping would be difficult. However some basic rules could be probably specified as described in the following table.

| DiagnosticReport status | Excerpt from deiftion | Observation status recommendations for implementers           |
| ----------------------- | --------------------- | ------------------------------------------------------------- |
| registered              |                       | All Observations should be registered.                        |
| partial                 | Data in the report may be incomplete or unverified. | Some Observation.status are not final and/or the report has not been verified (Composition.attester is empty) |
| preliminary             | Verified early results are available, but not all results are final. |  Report is verified (Composition.attester is not empty) and some Observation.status are not final. |
| final                   | The report is complete and verified. | Report is verified (Composition.attester is not empty) and all Observation.status are final or some are canceled. |
| amended                 | Report has been modified. This includes any change in the content of a report that has been issued. | (Some Observation.status are entered-in-error or amended rest of the Observation.status are final) and/or any other part of the report has changed. |
| corrected               | The report has been modified to correct an error subsequent to being final. | Some Observation.status are corrected or entered-in-error and the rest of the Observation.status are final. |
| appended                | Subsequent to being final, the report has been modified by adding new content. | Report is verified (Composition.attester is not empty) and all Observation.status are final or some are canceled. |
| cancelled               | The report is unavailable because the measurement was not started or not completed | All Observation.status are cancelled |
| entered-in-error        | The report has been withdrawn following a previous final release. | All Observation.status are entered-in-error |
| unknown                 |  | All Observation.status are unknown. |

### Diagnostic report status and Composition status
Status of the laboratory result report (DiagnosticReport) and its structured content (Composition) should be consistent and implementers should keep this consistency in mind. As value sets for the Composition status codes differ in R4 and R5, different rules should apply in both versions of the FHIR specification as described in the following articles.

#### Diagnostic report status and Composition status - R4
Recommended mapping between DiagnosticReport status codes and Composition.status codes for FHIR R4:

| DiagnosticReport status | Composition status |
| ----------------------- | ------------------ |
| registered              | preliminary        |
| partial                 | preliminary        |
| preliminary             | preliminary        |
| final                   | final              |
| amended                 | amended            |
| corrected               | amended            |
| appended                | amended            |
| cancelled               | final              |
| entered-in-error        | entered-in-error   |
| unknown                 | ANY status         |

#### Diagnostic report status and Composition status - R5
Recommended mapping between DiagnosticReport status codes and Composition.status codes for FHIR R5:

| DiagnosticReport status | Composition status |
| ----------------------- | ------------------ |
| registered              | registered         |
| partial                 | partial            |
| preliminary             | preliminary        |
| final                   | final              |
| amended                 | amended            |
| corrected               | corrected          |
| appended                | appended           |
| cancelled               | cancelled          |
| entered-in-error        | entered-in-error   |
| unknown                 | unknown            |


---

File: repos/hl7-eu_SLASH_laboratory/input/pagecontent/status-mgmt.md

### Managing Laboratory Report statuses

Laboratory reports, as documented in [Laboratory Report scenarios](scenarios.html), could exist in several statuses.

Applications consuming laboratory reports must take careful note of updated (revised) reports and ensure that retracted reports are appropriately handled.

For applications providing diagnostic reports, such as laboratory reports, a report should not be final until all the individual test results reported in it are final or cancelled.

If the report has been withdrawn, following a previous final release, the report and associated results should be retracted by replacing the status codes with the “entered-in-error” and setting the conclusion/comment (if provided) and the text narrative to some text like “This report has been withdrawn” in the appropriate language. A reason for retraction may be provided in the narrative.

The following paragraphs describe:
* the statuses foreseen for the HL7 FHIR resources relevant for documenting Laboratory Reports and included results.
* the state machine diagrams documenting possible transitions between states.


Please refer to the [Design Choices page](design-choice.html) for details on the general approach and on how these resources are used together for the scope of this guide.



#### Laboratory Report: DiagnosticReport

DiagnosticReport is the HL7 FHIR resource designed for documenting Laboratory report. It includes clinical context such as requesting provider information, and some mix of atomic results, images, textual and coded interpretations, formatted representation of diagnostic reports and status information.


Diagnostic report status value set is comprised from following status codes ( [DiagnosticReportStatus](https://hl7.org/fhir/R4/codesystem-diagnostic-report-status.html) )

|Lvl|Code|Display|Definition|
|:---:|----|-------|----------|
|1|registered|Registered|The existence of the report is registered, but there is nothing yet available.|
|1|partial|Partial|This is a partial (e.g. initial, interim or preliminary) report: data in the report may be incomplete or unverified.|
|2|preliminary|Preliminary|Verified early results are available, but not all results are final.|
|1|final|Final|The report is complete and verified by an authorized person.|
|1|amended|Amended|Subsequent to being final, the report has been modified. This includes any change in the results, diagnosis, narrative text, or other content of a report that has been issued.|
|2|corrected|Corrected|Subsequent to being final, the report has been modified to correct an error in the report or referenced results.|
|2|appended|Appended|Subsequent to being final, the report has been modified by adding new content. The existing content is unchanged.|
|1|cancelled|Cancelled|The report is unavailable because the measurement was not started or not completed (also sometimes called "aborted").|
|1|entered-in-error|Entered in Error|The report has been withdrawn following a previous final release. This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).|
|1|unknown|Unknown|The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.|


<div>
<p>Fulfilling the following state diagram:</p>
<img src="diagnostic-report-state-machine.png"  alt="Laboratory result report state machine diagram" width="60%">
<p>Figure 1: DiagnosticReport state machine diagram</p>
</div>

#### Laboratory report: Composition

A Composition defines the structure and narrative content necessary for a laboratory report. It is a mandatory resource for a Document Bundle this guide is based on (see [FHIR Documents](https://hl7.org/fhir/R4/documents.html) ).

The status of the composition reflects the status of the document and it should be aligned with that of the DiagnosticReport.

The status of the composition reflects the status of the document and it should be aligned with that of the DiagnosticReport.
Unfortunately, in HL7 FHIR R4 – see the [following paragraph](#hl7-fhir-r4-1) - only a subset of them are allowed for the Composition, requiring some mapping effort in dealing with them. (See the paragraph [DiagnosticReport and Composition status correlation](#diagnosticreport-and-composition-status-correlation) below)


##### HL7 FHIR R4

|Lvl|Code|Display|Definition|
|:---:| --------- | ----------- | ------------------------------------------------------------------------------------- |
| 1 | preliminary | Preliminary | This is a preliminary composition or document (also known as initial or interim). The content may be incomplete or unverified.                                                                                |
| 1 | final       | Final       | This version of the composition is complete and verified by an appropriate person and no further work is planned. Any subsequent updates would be on a new version of the composition.                        |
| 1 | amended     | Amended     | The composition content or the referenced resources have been modified (edited or added to) subsequent to being released as "final" and the composition is complete and verified by an authorized person. |
| 1 | entered-in-error | Entered in Error | The composition or document was originally created/issued in error, and this is an amendment that marks that the entire series should not be considered as valid.                                    |

A following state machine diagram describes transitions between statuses.

<div>
<p></p>
<img src="composition-state-machine-R4.png"  alt="Composition state machine diagram - R4" width="60%">
<p>Figure 2 - Composition (R4) state machine diagram</p>
</div>


##### HL7 FHIR R5

Composition status codes have been extended in HL7 FHIR R5 to align Composition and DiagnosticReport statuses.

|Lvl|Code|Display|Definition|
|:---:| --------- | ----------- | ------------------------------------------------------------------------------------- |
| 1 | registered  | Registered  | The existence of the composition is registered, but there is nothing yet available.   |
| 1 | partial     | Partial     | This is a partial (e.g. initial, interim or preliminary) composition: data in the composition may be incomplete or unverified.                                                                            |
| 2 | preliminary | Preliminary | Verified early results are available, but not all results are final.                  |
| 1 | final       | Final       | This version of the composition is complete and verified by an appropriate person and no further work is planned. Any subsequent updates would be on a new version of the composition.                        |
| 1 | amended     | Amended     | The composition content or the referenced resources have been modified (edited or added to) subsequent to being released as "final" and the composition is complete and verified by an authorized person. |
| 2 | corrected   | Corrected   | Subsequent to being final, the composition content has been modified to correct an error in the composition or referenced results.                                                                         |
| 2 | appended    | Appended    | Subsequent to being final, the composition content has been modified by adding new content. The existing content is unchanged.                                                                             |
| 1 | cancelled   | Cancelled   | The composition is unavailable because the measurement was not started or not completed (also sometimes called "aborted").                                                                            |
| 1 | entered-in-error | Entered in Error | The composition or document was originally created/issued in error, and this is an amendment that marks that the entire series should not be considered as valid.                                    |
| 1 | deprecated  | Deprecated  | This composition has been withdrawn or superseded and should no longer be used.       |
| 1 | unknown     | Unknown     | The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.                                                             |

A following state machine diagram describes transitions between statuses.

<div>
<p></p>
<img src="composition-state-machine-R5.png"  alt="Composition state machine diagram - R5" width="60%">
<p>Figure 3 - Composition (R5) state machine diagram</p>
</div>

#### Results: Observation

A laboratory report comprises a set of entries, i.e., the individual results, each of which can be in its own lifecycle stage (that could not be necessarily the same of the overall report).

This stage could be expressed in the Observation resource using a status code, as described in the table below. The allowed state transitions are reported in the following State machine diagram.

It is responsibility of the system curating the report to keep consistency between the statuses of the report and those of the single results. (See 


|Lvl|Code|Display|Definition|
|:---:| --------- | ----------- | ------------------------------------------------------------------------------------- |
| 1 | registered  | Registered  | The existence of the observation is registered, but there is no result yet available. |
| 1 | preliminary | Preliminary | This is an initial or interim observation: data may be incomplete or unverified.      |
| 1 | final       | Final       | The observation is complete and there are no further actions needed. Additional information such "released", "signed", etc would be represented using [Provenance]({{ site.data.fhir.path }}provenance.html) which provides not only the act but also the actors and dates and other related data. These act states would be associated with an observation status of `preliminary` until they are all completed and then a status of `final` would be applied. |
| 1 | amended     | Amended     | Subsequent to being Final, the observation has been modified subsequent. This includes updates/new information and corrections. |
| 2 |  corrected  | Corrected   | Subsequent to being Final, the observation has been modified to correct an error in the test result.|
| 1 | cancelled   | Cancelled   | The observation is unavailable because the measurement was not started or not completed (also sometimes called "aborted").|
| 1 | entered-in-error | Entered in Error | The observation has been withdrawn following previous final release. This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".). |
| 1 | unknown      | Unknown    | The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which. |

<div>
<p></p>
<img src="observation-state-machine.png"  alt="Observation state machine diagram" width="60%">
<p>Figure 4 - Observation state machine diagram</p>
</div>

#### Laboratory report and result statuses correlation

From the workflow perspective, the status of the report and that of its entries is partially independent; thus, formal consistency rules would be difficult to be specified.

However some basic rules about the status in observation and the expected status in DiagnosticReport is recommended as proposed in the following table.


| DiagnosticReport status | Definition (excerpt) | Observation status recommendations for implementers           |
| ----------------------- | --------------------- | ------------------------------------------------------------- |
| registered              |                       | All Observations should be registered.                        |
| partial                 | Data in the report may be incomplete or unverified. | Some Observation.status are not final and/or the report has not been verified (Composition.attester is empty) |
| preliminary             | Verified early results are available, but not all results are final. |  Report is verified (Composition.attester is not empty) and some Observation.status are not final. |
| final                   | The report is complete and verified. | Report is verified (Composition.attester is not empty) and all Observation.status are final or some are canceled. |
| amended                 | Report has been modified. This includes any change in the content of a report that has been issued. | (Some Observation.status are entered-in-error or amended rest of the Observation.status are final) and/or any other part of the report has changed. |
| corrected               | The report has been modified to correct an error subsequent to being final. | Some Observation.status are corrected or entered-in-error and the rest of the Observation.status are final. |
| appended                | Subsequent to being final, the report has been modified by adding new content. | Report is verified (Composition.attester is not empty) and all Observation.status are final or some are canceled. |
| cancelled               | The report is unavailable because the measurement was not started or not completed | All Observation.status are cancelled |
| entered-in-error        | The report has been withdrawn following a previous final release. | All Observation.status are entered-in-error |
| unknown                 |  | All Observation.status are unknown. |

#### DiagnosticReport and Composition status correlation

The status of the laboratory report should be reported in both the DiagnosticReport and Composition status, and they should be consistent.

As previously described, if the alignment is possible for HL7 FHIR R5 (see [HL7 FHIR R5](#hl7-fhir-r5-1) below), the Composition status value set required for HL7 FHIR R4 only includes a subset of the needed concepts.  

The following paragraph describe a possible approach to try to keep this consistency.

##### HL7 FHIR R4

For the purpose of this guide, based on HL7 FHIR R4, the status of the laboratory report is recorded in the DiagnosticReport.status, applying as possible the following recommended mapping table between DiagnosticReport and Composition.status codes:


| DiagnosticReport status | Composition status |
| ----------------------- | ------------------ |
| registered              | preliminary        |
| partial                 | preliminary        |
| preliminary             | preliminary        |
| final                   | final              |
| amended                 | amended            |
| corrected               | amended            |
| appended                | amended            |
| cancelled               | final              |
| entered-in-error        | entered-in-error   |
| unknown                 | ANY status         |

##### HL7 FHIR R5

Recommended mapping between DiagnosticReport and Composition.status codes for FHIR R5:

| DiagnosticReport status | Composition status |
| ----------------------- | ------------------ |
| registered              | registered         |
| partial                 | partial            |
| preliminary             | preliminary        |
| final                   | final              |
| amended                 | amended            |
| corrected               | corrected          |
| appended                | appended           |
| cancelled               | cancelled          |
| entered-in-error        | entered-in-error   |
| unknown                 | unknown            |


---

