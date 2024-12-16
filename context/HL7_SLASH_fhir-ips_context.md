File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/allergyIntolerance-39-07-1.fsh

Instance: eumfh-39-07-1-of-AllergyIntolerance
InstanceOf: AllergyIntolerance
Title: "AllergyIntolerance - No Known Allergies"
Description: "AllergyIntolerance - No known allergies"
Usage: #example
* id = "eumfh-39-07-1"
* clinicalStatus = $allergyintolerance-clinical#active
* verificationStatus = $allergyintolerance-verification#confirmed
* code = $sct#716186003 "No known allergy (situation)"
* patient = Reference(Patient/eumfh-39-07) "Alexander Heig (inject 39-07)"
* onsetDateTime.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* onsetDateTime.extension.valueCode = #unknown

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/allergyintolerance-multiple-codings.fsh

Instance: allergyintolerance-multiple-codings
InstanceOf: AllergyIntolerance
Title: "AllergyIntolerance - Multiple Codings"
Description: "AllergyIntolerance - Multiple Codings"
Usage: #example
* clinicalStatus = $allergyintolerance-clinical#active
* verificationStatus = $allergyintolerance-verification#confirmed
* code.coding[0] = $sct#764146007 "Penicillin (substance)"
* code.coding[+] = $sct#91936005 "Allergy to penicillin (finding)"
* code.coding[+] = $rxnorm#7984 "penicillin V"
* code.coding[+] = $atc#N03AA02 "phenobarbital"
* patient = Reference(66033)
* onsetDateTime.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* onsetDateTime.extension.valueCode = #unknown

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/allergyIntolerance-with-abatement.fsh

Instance: allergyintolerance-with-abatement
InstanceOf: AllergyIntolerance
Title: "AllergyIntolerance - Resolved Allergy"
Description: "AllergyIntolerance - Resolved Allergy"
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/allergyintolerance-abatement"
* extension.valueDateTime = "2010"
* clinicalStatus = $allergyintolerance-clinical#resolved
* verificationStatus = $allergyintolerance-verification#confirmed
* code = $sct#256303006 "Ragweed pollen"
* patient = Reference(66033)
* onsetDateTime.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* onsetDateTime.extension.valueCode = #unknown

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/bundle-minimal.fsh

Instance: bundle-minimal
InstanceOf: Bundle
Title: "Bundle - Minimal Complete IPS"
Description: "Bundle - Minimal Complete IPS"
Usage: #example
* language = #en-US
* identifier.system = "urn:oid:2.16.724.4.8.10.200.10"
* identifier.value = "28b95815-76ce-457b-b7ae-a972e527db40"
* type = #document
* timestamp = "2020-12-11T14:30:00+01:00"
* entry[0].fullUrl = "urn:uuid:f40b07e3-37e8-48c3-bf1c-ae70fe12dab0"
* entry[=].resource = f40b07e3-37e8-48c3-bf1c-ae70fe12dab0
* entry[+].fullUrl = "urn:uuid:244ad7c3-beeb-41d1-8a2f-c76b8cf720ad"
* entry[=].resource = 244ad7c3-beeb-41d1-8a2f-c76b8cf720ad
* entry[+].fullUrl = "urn:uuid:45271f7f-63ab-4946-970f-3daaaa06637f"
* entry[=].resource = 45271f7f-63ab-4946-970f-3daaaa06637f
* entry[+].fullUrl = "urn:uuid:a21fe796-3594-4ad9-a01e-cc83118ceca9"
* entry[=].resource = a21fe796-3594-4ad9-a01e-cc83118ceca9
* entry[+].fullUrl = "urn:uuid:d179321e-c091-4cd4-8642-3a27537d506d"
* entry[=].resource = d179321e-c091-4cd4-8642-3a27537d506d
* entry[+].fullUrl = "urn:uuid:e1271efd-18ff-4654-9ee7-45f40019c453"
* entry[=].resource = e1271efd-18ff-4654-9ee7-45f40019c453
* entry[+].fullUrl = "urn:uuid:95db7c92-566a-4ded-896b-2220ab244a9e"
* entry[=].resource = 95db7c92-566a-4ded-896b-2220ab244a9e
* entry[+].fullUrl = "urn:uuid:74861316-f69d-4652-9fb1-8512a20c7927"
* entry[=].resource = 74861316-f69d-4652-9fb1-8512a20c7927

Instance: f40b07e3-37e8-48c3-bf1c-ae70fe12dab0
InstanceOf: Composition
Usage: #inline
* status = #final
* type = $loinc#60591-5 "Patient summary Document"
* subject = Reference(urn:uuid:244ad7c3-beeb-41d1-8a2f-c76b8cf720ad)
* date = "2020-12-11T14:30:00+01:00"
* author = Reference(urn:uuid:45271f7f-63ab-4946-970f-3daaaa06637f)
* title = "Patient Summary as of December 11, 2020 14:30"
* confidentiality = #N
* attester[0].mode = #legal
* attester[=].time = "2020-12-11T14:30:00+01:00"
* attester[=].party = Reference(urn:uuid:45271f7f-63ab-4946-970f-3daaaa06637f)
* attester[+].mode = #legal
* attester[=].time = "2020-12-11T14:30:00+01:00"
* attester[=].party = Reference(urn:uuid:a21fe796-3594-4ad9-a01e-cc83118ceca9)
* custodian = Reference(urn:uuid:a21fe796-3594-4ad9-a01e-cc83118ceca9)
* relatesTo.code = #appends
* relatesTo.targetIdentifier.system = "urn:oid:2.16.724.4.8.10.200.10"
* relatesTo.targetIdentifier.value = "20e12ce3-857f-49c0-b888-cb670597f191"
* event.code = $v3-ActClass#PCPR
* event.period.end = "2020-12-11T14:30:00+01:00"
* section[0].title = "Active Problems"
* section[=].code = $loinc#11450-4 "Problem list - Reported"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><ul><li><div><b>Condition Name</b>: Menopausal Flushing</div><div><b>Code</b>: <span>198436008</span></div><div><b>Status</b>: <span>Active</span></div></li></ul></div>"
* section[=].entry = Reference(urn:uuid:d179321e-c091-4cd4-8642-3a27537d506d)
* section[+].title = "Medication"
* section[=].code = $loinc#10160-0 "History of Medication use Narrative"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><ul><li><div><b>Medication Name</b>: Oral anastrozole 1mg tablet</div><div><b>Code</b>: <span></span></div><div><b>Status</b>: <span>Active, started March 2015</span></div><div>Instructions: Take 1 time per day</div></li></ul></div>"
* section[=].entry = Reference(urn:uuid:e1271efd-18ff-4654-9ee7-45f40019c453)
* section[+].title = "Allergies and Intolerances"
* section[=].code = $loinc#48765-2 "Allergies and adverse reactions Document"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><ul><li><div><b>Allergy Name</b>: Pencillins</div><div><b>Verification Status</b>: Confirmed</div><div><b>Reaction</b>: <span>no information</span></div></li></ul></div>"
* section[=].entry = Reference(urn:uuid:74861316-f69d-4652-9fb1-8512a20c7927)

Instance: 244ad7c3-beeb-41d1-8a2f-c76b8cf720ad
InstanceOf: Patient
Usage: #inline
* identifier.system = "urn:oid:2.16.840.1.113883.2.4.6.3"
* identifier.value = "574687583"
* active = true
* name.family = "DeLarosa"
* name.given = "Martha"
* telecom.system = #phone
* telecom.value = "+31788700800"
* telecom.use = #home
* gender = #female
* birthDate = "1972-05-01"
* address.line = "Laan Van Europa 1600"
* address.city = "Dordrecht"
* address.postalCode = "3317 DB"
* address.country = "NL"
* contact.relationship = $v3-RoleCode#MTH
* contact.name.family = "Mum"
* contact.name.given = "Martha"
* contact.telecom.system = #phone
* contact.telecom.value = "+33-555-20036"
* contact.telecom.use = #home
* contact.address.line = "Promenade des Anglais 111"
* contact.address.city = "Lyon"
* contact.address.postalCode = "69001"
* contact.address.country = "FR"

Instance: 45271f7f-63ab-4946-970f-3daaaa06637f
InstanceOf: Practitioner
Usage: #inline
* identifier.system = "urn:oid:2.16.528.1.1007.3.1"
* identifier.value = "129854633"
* identifier.assigner.display = "CIBG"
* active = true
* name.family = "van Hulp"
* name.given = "Beetje"
* qualification.code.coding.version = "2.7"
* qualification.code.coding = $v2-0360#MD "Doctor of Medicine"

Instance: a21fe796-3594-4ad9-a01e-cc83118ceca9
InstanceOf: Organization
Usage: #inline
* identifier.system = "urn:oid:2.16.528.1.1007.3.3"
* identifier.value = "564738757"
* active = true
* name = "Anorg Aniza Tion BV / The best custodian ever"
* telecom.system = #phone
* telecom.value = "+31-51-34343400"
* telecom.use = #work
* address.use = #work
* address.line = "Houttuinen 27"
* address.city = "Dordrecht"
* address.postalCode = "3311 CE"
* address.country = "NL"

Instance: d179321e-c091-4cd4-8642-3a27537d506d
InstanceOf: Condition
Usage: #inline
* identifier.system = "urn:oid:1.2.3.999"
* identifier.value = "cacceb57-395f-48e1-9c88-e9c9704dc2d2"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* category = $loinc#75326-9 "Problem"
* severity = $loinc#LA6751-7 "Moderate"
* code.coding[0] = $sct#198436008 "Menopausal flushing (finding)"
* code.coding[=].display.extension.extension[0].url = "lang"
* code.coding[=].display.extension.extension[=].valueCode = #nl-NL
* code.coding[=].display.extension.extension[+].url = "content"
* code.coding[=].display.extension.extension[=].valueString = "opvliegers"
* code.coding[=].display.extension.url = "http://hl7.org/fhir/StructureDefinition/translation"
* code.coding[+] = $icd-10#N95.1 "Menopausal and female climacteric states"
* subject = Reference(urn:uuid:244ad7c3-beeb-41d1-8a2f-c76b8cf720ad)
* onsetDateTime = "2015"
* recordedDate = "2016-10"

Instance: e1271efd-18ff-4654-9ee7-45f40019c453
InstanceOf: MedicationStatement
Usage: #inline
* identifier.system = "urn:oid:1.2.3.999"
* identifier.value = "8faf0319-89d3-427c-b9d1-e8c8fd390dca"
* status = #active
* medicationReference = Reference(urn:uuid:95db7c92-566a-4ded-896b-2220ab244a9e)
* subject = Reference(urn:uuid:244ad7c3-beeb-41d1-8a2f-c76b8cf720ad)
* effectivePeriod.start = "2015-03"
* dosage.timing.repeat.count = 1
* dosage.timing.repeat.periodUnit = #d
* dosage.route = $standardterms#20053000 "Oral use"
* dosage.doseAndRate.doseQuantity = 1 '1' "tablet"

Instance: 95db7c92-566a-4ded-896b-2220ab244a9e
InstanceOf: Medication
Usage: #inline
* code.coding[0] = $sct#108774000 "Product containing anastrozole (medicinal product)"
* code.coding[+] = urn:oid:2.16.840.1.113883.2.4.4.1#99872 "ANASTROZOL 1MG TABLET"
* code.coding[+] = urn:oid:2.16.840.1.113883.2.4.4.7#2076667 "ANASTROZOL CF TABLET FILMOMHULD 1MG"
* code.coding[+] = $atc#L02BG03 "anastrozole"

Instance: 74861316-f69d-4652-9fb1-8512a20c7927
InstanceOf: AllergyIntolerance
Usage: #inline
* identifier.system = "urn:oid:1.2.3.999"
* identifier.value = "8d9566a4-d26d-46be-a3e4-c9f3a0e5cd83"
* clinicalStatus = $allergyintolerance-clinical#active
* verificationStatus = $allergyintolerance-verification#confirmed
* type = #allergy
* category = #medication
* criticality = #high
* code = $sct#373270004 "Substance with penicillin structure and antibacterial mechanism of action (substance)"
* patient = Reference(urn:uuid:244ad7c3-beeb-41d1-8a2f-c76b8cf720ad)
* onsetDateTime = "2010"



---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/bundle-no-info-required-sections.fsh

Instance: bundle-no-info-required-sections
InstanceOf: Bundle
Title: "Bundle - No Information in Required Sections"
Description: "Bundle - No Information in Required Sections"
Usage: #example
* language = #en-NZ
* identifier.system = "urn:oid:2.16.724.4.8.10.200.10"
* identifier.value = "59f51f0b-2005-485c-858e-3d3ae9657287"
* type = #document
* timestamp = "2022-01-08T20:42:11.0607701+00:00"
* entry[0].fullUrl = "https://terminz.azurewebsites.net/fhir/Composition/514af4c1-194d-48b4-8afe-7be09d3f895a"
* entry[=].resource = 514af4c1-194d-48b4-8afe-7be09d3f895a
* entry[+].fullUrl = "https://terminz.azurewebsites.net/fhir/Patient/AAA1234"
* entry[=].resource = AAA1234
* entry[+].fullUrl = "https://terminz.azurewebsites.net/fhir/Organization/d9b97b04-b606-4f07-baf2-7eb3dcae0a2a"
* entry[=].resource = d9b97b04-b606-4f07-baf2-7eb3dcae0a2a
* entry[+].fullUrl = "https://terminz.azurewebsites.net/fhir/PractitionerRole/f54d8c90-aea2-46b0-8f7a-8683db78344e"
* entry[=].resource = f54d8c90-aea2-46b0-8f7a-8683db78344e
* entry[+].fullUrl = "https://terminz.azurewebsites.net/fhir/Practitioner/19c24876-ccf8-45e7-8b66-462317e970f1"
* entry[=].resource = 19c24876-ccf8-45e7-8b66-462317e970f1
* entry[+].fullUrl = "https://terminz.azurewebsites.net/fhir/Organization/70a756e3-20b3-4637-8601-a222983e295a"
* entry[=].resource = 70a756e3-20b3-4637-8601-a222983e295a
* entry[+].fullUrl = "https://terminz.azurewebsites.net/fhir/Immunization/4ab062b3-8843-4b98-af62-3d6d178a3772"
* entry[=].resource = 4ab062b3-8843-4b98-af62-3d6d178a3772
* entry[+].fullUrl = "https://terminz.azurewebsites.net/fhir/Immunization/bd6c6537-6c5a-4fa8-8d26-2b49377425a2"
* entry[=].resource = bd6c6537-6c5a-4fa8-8d26-2b49377425a2

Instance: 514af4c1-194d-48b4-8afe-7be09d3f895a
InstanceOf: Composition
Usage: #inline
* meta.versionId = "1"
* language = #en-NZ
* identifier.system = "urn:oid:2.16.840.1.113883.2.18.7.2"
* identifier.value = "59f51f0b-2005-485c-858e-3d3ae9657287"
* status = #final
* type = $loinc#60591-5 "Patient summary Document"
* subject = Reference(AAA1234)
* date = "2021-05-03"
* author = Reference(d9b97b04-b606-4f07-baf2-7eb3dcae0a2a)
* title = "International Patient Summary"
* confidentiality = #N
* attester.mode = #professional
* attester.time = "2021-05-03"
* attester.party = Reference(f54d8c90-aea2-46b0-8f7a-8683db78344e)
* custodian = Reference(70a756e3-20b3-4637-8601-a222983e295a)
* relatesTo.code = #transforms
* relatesTo.targetIdentifier.system = "urn:oid:2.16.840.1.113883.2.18.7.2"
* relatesTo.targetIdentifier.value = "59f51f0b-2005-485c-858e-3d3ae9657287"
* event.code = $v3-ActClass#PCPR
* event.period.end = "2021-05-03"
* section[0].title = "Allergies and Intolerances"
* section[=].code = $loinc#48765-2 "Allergies and adverse reactions Document"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns='http://www.w3.org/1999/xhtml' lang='en-NZ' xml:lang='en-NZ'>There is no information available regarding the subject's allergy conditions.</div>"
* section[=].emptyReason = $list-empty-reason#unavailable "Unavailable"
* section[=].emptyReason.text = "No information available"
* section[+].title = "Problem List"
* section[=].code = $loinc#11450-4 "Problem list - Reported"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns='http://www.w3.org/1999/xhtml' lang='en-NZ' xml:lang='en-NZ'>There is no information available about the subject's health problems or disabilities.</div>"
* section[=].emptyReason = $list-empty-reason#unavailable "Unavailable"
* section[=].emptyReason.text = "No information available"
* section[+].title = "Medication Summary"
* section[=].code = $loinc#10160-0 "History of Medication use Narrative"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns='http://www.w3.org/1999/xhtml' lang='en-NZ' xml:lang='en-NZ'>There is no information available about the subject's medication use or administration.</div>"
* section[=].emptyReason = $list-empty-reason#unavailable "Unavailable"
* section[=].emptyReason.text = "No information available"
* section[+].title = "Immunizations"
* section[=].code = $loinc#11369-6 "History of Immunization Narrative"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns='http://www.w3.org/1999/xhtml' xml:lang='en-NZ'><table xmlns=\"http://www.w3.org/1999/xhtml\">\r\n        <thead>\r\n          <tr>\r\n            <th>Vaccine</th>\r\n            <th>Date</th>\r\n            <th>Seq</th>\r\n            <th>Route</th>\r\n            <th>Site</th>\r\n            <th>Indication</th>\r\n            <th>Status</th>\r\n            \r\n            \r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>Influenza</td>\r\n            <td>03/07/2020</td>\r\n            <td>2</td>\r\n            <td>Injection, intramuscular</td>\r\n            <td>Entire left upper arm</td>\r\n            <td>Eligible condition (Influenza)</td>\r\n            <td>completed</td>\r\n            \r\n            \r\n          </tr>\r\n          <tr>\r\n            <td>Influenza</td>\r\n            <td>03/06/2019</td>\r\n            <td>1</td>\r\n            <td>Injection, intramuscular</td>\r\n            <td>Entire left upper arm</td>\r\n            <td>Eligible condition (Influenza)</td>\r\n            <td>completed</td>\r\n            \r\n            \r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>"
* section[=].entry[0] = Reference(4ab062b3-8843-4b98-af62-3d6d178a3772)
* section[=].entry[+] = Reference(bd6c6537-6c5a-4fa8-8d26-2b49377425a2)

Instance: AAA1234
InstanceOf: Patient
Usage: #inline
* identifier.system = "https://standards.digital.health.nz/ns/nhi-id"
* identifier.value = "AAA1234"
* name.use = #usual
* name.family = "Judge"
* name.given = "James"
* telecom.system = #phone
* telecom.value = "tel:+6478532279"
* telecom.use = #home
* gender = #male
* birthDate = "1985-04-25"
* address.use = #home
* address.type = #physical
* address.line[0] = "Bleak House"
* address.line[+] = "3 Worcester Drive"
* address.line[+] = "Rototuna North"
* address.city = "Hamilton"
* address.postalCode = "3210"
* address.country = "NZ"
* maritalStatus = $v3-MaritalStatus#M "Married"
* contact[0].relationship.coding[0] = $v3-RoleCode#FAMMEMB "family member"
* contact[=].relationship.coding[+] = $v2-0131#N "Next-of-Kin"
* contact[=].name.use = #usual
* contact[=].name.family = "mother"
* contact[=].name.given[0] = "Natural"
* contact[=].name.given[+] = "mother"
* contact[+].relationship.coding[0] = $v3-RoleCode#FRND "unrelated friend"
* contact[=].relationship.coding[+] = $v2-0131#C "Emergency Contact"
* contact[=].name.use = #usual
* contact[=].name.family = "Rabbit"
* contact[=].name.given[0] = "Peter"
* contact[=].name.given[+] = "Rabbit"
* contact[=].telecom.system = #phone
* contact[=].telecom.value = "07 853 9191"
* contact[=].telecom.use = #home
* contact[=].address.use = #home
* contact[=].address.type = #physical
* contact[=].address.line[0] = "9 Worcester Drive"
* contact[=].address.line[+] = "Rototuna"
* contact[=].address.city = "Hamilton"
* contact[=].address.postalCode = "3210"
* contact[=].address.country = "NZ"
* communication.language = urn:ietf:bcp:47#en-NZ

Instance: d9b97b04-b606-4f07-baf2-7eb3dcae0a2a
InstanceOf: Organization
Usage: #inline
* identifier.system = "https://standards.digital.health.nz/ns/hpi-facility-id"
* identifier.value = "F0K068-E"
* name = "Northcare, Thomas Road"

Instance: f54d8c90-aea2-46b0-8f7a-8683db78344e
InstanceOf: PractitionerRole
Usage: #inline
* practitioner = Reference(19c24876-ccf8-45e7-8b66-462317e970f1)
* code = $sct#158965000 "Doctor"

Instance: 19c24876-ccf8-45e7-8b66-462317e970f1
InstanceOf: Practitioner
Usage: #inline
* name.use = #usual
* name.family = "Kildare"
* name.given[0] = "Dr"
* name.given[+] = "Richard"
* name.given[+] = "Kildare"
* telecom.system = #phone
* telecom.value = "tel:+6478539191"
* telecom.use = #work
* address.use = #work
* address.type = #physical
* address.line[0] = "12 Thomas Rd"
* address.line[+] = "Huntingdon"
* address.city = "Hamilton"
* address.postalCode = "3211"
* address.country = "NZ"

Instance: 70a756e3-20b3-4637-8601-a222983e295a
InstanceOf: Organization
Usage: #inline
* identifier.system = "https://standards.digital.health.nz/ns/psychotherapists-board-id"
* identifier.value = "F2N000-J"
* name = "NorthCare Pukete Road"

Instance: 4ab062b3-8843-4b98-af62-3d6d178a3772
InstanceOf: Immunization
Usage: #inline
* status = #completed
* vaccineCode = $cvx#141 "Influenza, seasonal, injectable"
* patient = Reference(AAA1234)
* occurrenceDateTime = "2020-07-03"
* lotNumber = "B52b"
* expirationDate = "2020-07-03"
* site = $sct#72098002 "Entire left upper arm"
* route = $v3-RouteOfAdministration#IM "Injection, intramuscular"
* performer.actor = Reference(70a756e3-20b3-4637-8601-a222983e295a)
* protocolApplied.series = "45y (Eligible condition (Influenza))"
* protocolApplied.doseNumberPositiveInt = 2

Instance: bd6c6537-6c5a-4fa8-8d26-2b49377425a2
InstanceOf: Immunization
Usage: #inline
* status = #completed
* vaccineCode = $cvx#141 "Influenza, seasonal, injectable"
* patient = Reference(AAA1234)
* occurrenceDateTime = "2019-06-03"
* lotNumber = "B52"
* expirationDate = "2019-08-03"
* site = $sct#72098002 "Entire left upper arm"
* route = $v3-RouteOfAdministration#IM "Injection, intramuscular"
* performer.actor = Reference(70a756e3-20b3-4637-8601-a222983e295a)
* protocolApplied.series = "45y (Eligible condition (Influenza))"
* protocolApplied.doseNumberPositiveInt = 1


---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/composition-minimal.fsh

Instance: composition-minimal
InstanceOf: Composition
Title: "Composition - Minimal Sections"
Description: "Composition - Minimal Sections"
Usage: #example
* status = #final
* type = $loinc#60591-5 "Patient summary Document"
* subject = Reference(Patient/eumfh-39-07)
* date = "2020-12-11T14:30:00+01:00"
* author = Reference(Practitioner/eumfh-39-07)
* title = "Patient Summary as of December 11, 2020 14:30"
* confidentiality = #N
* attester[0].mode = #legal
* attester[=].time = "2020-12-11T14:30:00+01:00"
* attester[=].party = Reference(Practitioner/eumfh-39-07)
* attester[+].mode = #legal
* attester[=].time = "2020-12-11T14:30:00+01:00"
* attester[=].party = Reference(simple-org)
* custodian = Reference(simple-org)
* relatesTo.code = #appends
* relatesTo.targetIdentifier.system = "urn:oid:2.16.724.4.8.10.200.10"
* relatesTo.targetIdentifier.value = "20e12ce3-857f-49c0-b888-cb670597f191"
* event.code = $v3-ActClass#PCPR
* event.period.end = "2020-12-11T14:30:00+01:00"
* section[0].title = "Active Problems"
* section[=].code = $loinc#11450-4 "Problem list - Reported"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><ul><li><div><b>Condition Name</b>: Acute myocardial infarction of anterior wall</div><div><b>Code</b>: <span>54329005</span></div><div><b>Status</b>: <span>Active</span></div></li></ul></div>"
* section[=].entry = Reference(Condition/eumfh-39-07-1)
* section[+].title = "Medication"
* section[=].code = $loinc#10160-0 "History of Medication use Narrative"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><ul><li><div><b>Medication Name</b>: Simvastatin 40 MG Disintegrating Oral Tablet</div><div><b>Code</b>: <span>C10AA01</span></div><div><b>Status</b>: <span>Active, started 2014</span></div><div>Instructions: Take 40 mg/day</div></li></ul></div>"
* section[=].entry = Reference(MedicationStatement/eumfh-39-07-1)
* section[+].title = "Allergies and Intolerances"
* section[=].code = $loinc#48765-2 "Allergies and adverse reactions Document"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><ul><li><div><b>Allergy Name</b>: No known allergies</div><div><b>Verification Status</b>: Confirmed</div><div><b>Reaction</b>: <span>no information</span></div></li></ul></div>"
* section[=].entry = Reference(AllergyIntolerance/eumfh-39-07-1)

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/condition-39-07-1.fsh

Instance: eumfh-39-07-1-of-Condition
InstanceOf: Condition
Title: "Condition - Acute Myeloid Leukemia"
Description: "Condition - Acute Myeloid Leukemia"
Usage: #example
* id = "eumfh-39-07-1"
* clinicalStatus = $condition-clinical#active
* category = $loinc#75326-9 "Problem"
* code.coding[0] = $sct#91861009 "Acute myeloid leukemia"
* subject = Reference(Patient/eumfh-39-07) "Alexander Heig (inject 39-07)"
* onsetDateTime = "2014"
* asserter = Reference(Practitioner/eumfh-39-07) "Dr. Mark Antonio"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/device-70-275-1.fsh

Instance: eumfh-70-275-1-of-Device
InstanceOf: Device
Title: "Device - No Known Devices in Use"
Description: "Device - No Known Devices in Use"
Usage: #example
* id = "eumfh-70-275-1"
* type = $sct#787483001 "No known device use (situation)"
* patient = Reference(Patient/eumfh-39-07) "Annelise Black (inject 70-275)"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/device-imaging-example-1.fsh

Instance: ips-example-imaging-1-of-Device
InstanceOf: Device
Title: "Device - Device Observer"
Description: "Device - Device Observer"
Usage: #example
* id = "ips-example-imaging-1"
* identifier.system = "http://my.organization.example/devicesID"
* identifier.value = "12345"
* manufacturer = "Imaging Devices Manufacturer"
* deviceName.name = "H.I.A. BEGIN"
* deviceName.type = #model-name
* modelNumber = "2.0.1"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/deviceUseStatement-70-275-1.fsh

Instance: eumfh-70-275-1-of-DeviceUseStatement
InstanceOf: DeviceUseStatement
Title: "DeviceUseStatement - No Known Devices in Use"
Description: "DeviceUseStatement - No Known Devices in Use"
Usage: #example
* id = "eumfh-70-275-1"
* status = #active
* subject = Reference(Patient/eumfh-39-07) "Annelise Black (inject 70-275)"
* timingDateTime.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* timingDateTime.extension.valueCode = #unknown
* device = Reference(Device/eumfh-70-275-1)

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/DiagnosticReport-hemoglobin.fsh

Instance: hemoglobin-of-DiagnosticReport
InstanceOf: DiagnosticReport
Title: "DiagnosticReport - Hemoglobin"
Description: "DiagnosticReport - Hemoglobin"
Usage: #example
* id = "hemoglobin"
* status = #final
* category = $v2-0074#LAB "Laboratory"
* code = $loinc#11502-2 "Laboratory report"
* subject = Reference(Patient/eumfh-39-07)
* effectiveDateTime = "2017-11-10"
* issued = "2017-11-10T08:20:00+01:00"
* performer = Reference(TII-Organization1) "Someplace General Hospital"
* result = Reference(Observation/hemoglobin) "Above stated goal of 7.0 %"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/Flag-example.fsh

Instance: 546482
InstanceOf: Flag
Title: "Flag - Alert of Patient Immunocompromised"
Description: "Flag - Alert of Patient Immunocompromised"
Usage: #example
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/flag-priority"
* extension[0].valueCodeableConcept = $flag-priority-code#PH "High priority"
* language = #en-US
* status = #active
* category.coding[0] = $flag-category#contact "Subject Contact"
* category.text = "Subject Contact"
* subject = Reference(66033)
* code.coding[0] = $sct#370388006 "Patient immunocompromised (finding)"
* code.text = "Patient Immunocompromised"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/imagingStudy-imaging-ex-5-1.fsh

Instance: TII-ImagingStudy-5-1
InstanceOf: ImagingStudy
Title: "ImagingStudy - Referred DICOM Study"
Description: "ImagingStudy - Referred DICOM Study"
Usage: #example
* identifier.system = "urn:dicom:uid"
* identifier.value = "urn:oid:2.16.840.1.113883.2.9.999.1.12345"
* status = #available
* subject = Reference(Patient/eumfh-39-07)
* procedureCode = $loinc#49569-7 "SPECT Heart perfusion and wall motion at rest and W stress and W Tl-201 IV and W Tc-99m Sestamibi IV"
* reasonCode.text = "Chest pain, hypertension, type II diabetes mellitus."
* series.uid = "2.16.840.1.113883.2.9.999.2.12345"
* series.modality = $DCM#NM "Nuclear Medicine"
* series.bodySite = $sct#80891009 "Heart"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/Immunization-75680.fsh

Instance: 75680
InstanceOf: Immunization
Title: "Immunization - Vaccin anti diphtérie-coqueluche-tétanos-poliomyélite (Luxembourg)"
Description: "Immunization - Vaccin anti diphtérie-coqueluche-tétanos-poliomyélite (Luxembourg)"
Usage: #example
* language = #fr-LU
* status = #completed
* vaccineCode.coding[0] = $sct#871878002 "Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens only vaccine product"
* vaccineCode.coding[=].display.extension.url = "http://hl7.org/fhir/StructureDefinition/translation"
* vaccineCode.coding[=].display.extension.extension[0].url = "lang"
* vaccineCode.coding[=].display.extension.extension[=].valueCode = #fr-LU
* vaccineCode.coding[=].display.extension.extension[+].url = "content"
* vaccineCode.coding[=].display.extension.extension[=].valueString = "Vaccin anti diphtérie-coqueluche-tétanos-poliomyélite"
* vaccineCode.coding[+] = $atc#J07CA02 "diphtheria-pertussis-poliomyelitis-tetanus"
* vaccineCode.coding[=].display.extension.url = "http://hl7.org/fhir/StructureDefinition/translation"
* vaccineCode.coding[=].display.extension.extension[0].url = "lang"
* vaccineCode.coding[=].display.extension.extension[=].valueCode = #fr-LU
* vaccineCode.coding[=].display.extension.extension[+].url = "content"
* vaccineCode.coding[=].display.extension.extension[=].valueString = "DIPHTERIE - COQUELUCHE - POLIOMYELITE - TETANOS"
* vaccineCode.coding[+] = $cnk_product_codes#2374429 "BOOSTRIX POLIO SER PREREMPL 1 X 0,5 ML"
* vaccineCode.text = "Vaccin anti diphtérie-coqueluche-tétanos-poliomyélite"
* patient = Reference(66033)
* occurrenceDateTime = "1998-06-04T00:00:00+02:00"
* primarySource = true
* lotNumber = "AXK23RWERS"
* expirationDate = "2000-06-01"
* site.coding = $sct#11207009 "Right thigh"
* site.coding.display.extension.url = "http://hl7.org/fhir/StructureDefinition/translation"
* site.coding.display.extension.extension[0].url = "lang"
* site.coding.display.extension.extension[=].valueCode = #fr-LU
* site.coding.display.extension.extension[+].url = "content"
* site.coding.display.extension.extension[=].valueString = "Cuisse droite"
* site.text = "Cuisse droite"
* route.coding = $standardterms#20035000 "Intramuscular use"
* route.coding.display.extension.url = "http://hl7.org/fhir/StructureDefinition/translation"
* route.coding.display.extension.extension[0].url = "lang"
* route.coding.display.extension.extension[=].valueCode = #fr-LU
* route.coding.display.extension.extension[+].url = "content"
* route.coding.display.extension.extension[=].valueString = "Voie intramusculaire"
* route.text = "Voie intramusculaire"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/IPS-bundle-01.fsh

Instance: IPS-examples-Bundle-01
InstanceOf: Bundle
Title: "Bundle - IPS with Data"
Description: "Bundle - IPS with Data"
Usage: #example
* language = #en-GB
* identifier.system = "urn:oid:2.16.724.4.8.10.200.10"
* identifier.value = "175bd032-8b00-4728-b2dc-748bb1501aed"
* type = #document
* timestamp = "2017-12-11T14:30:00+01:00"
* entry[0].fullUrl = "urn:uuid:30551ce1-5a28-4356-b684-1e639094ad4d"
* entry[=].resource = 30551ce1-5a28-4356-b684-1e639094ad4d
* entry[+].fullUrl = "urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e8"
* entry[=].resource = 2b90dd2b-2dab-4c75-9bb9-a355e07401e8
* entry[+].fullUrl = "urn:uuid:1c616b24-3895-48c4-9a02-9a64110351ef"
* entry[=].resource = 1c616b24-3895-48c4-9a02-9a64110351ef
* entry[+].fullUrl = "urn:uuid:890751f4-2924-4636-bab7-efffc7f3cf15"
* entry[=].resource = 890751f4-2924-4636-bab7-efffc7f3cf15
* entry[+].fullUrl = "urn:uuid:c64139e7-f02d-409c-bf34-75e8bf23bc80"
* entry[=].resource = c64139e7-f02d-409c-bf34-75e8bf23bc80
* entry[+].fullUrl = "urn:uuid:c220e36c-eb67-4fc4-9ba1-2fabc52acec6"
* entry[=].resource = c220e36c-eb67-4fc4-9ba1-2fabc52acec6
* entry[+].fullUrl = "urn:uuid:47524493-846a-4a26-bae2-4ab03e60f02e"
* entry[=].resource = 47524493-846a-4a26-bae2-4ab03e60f02e
* entry[+].fullUrl = "urn:uuid:976d0804-cae0-45ae-afe3-a19f3ceba6bc"
* entry[=].resource = 976d0804-cae0-45ae-afe3-a19f3ceba6bc
* entry[+].fullUrl = "urn:uuid:8adc0999-9468-4ac9-9557-680fa133d626"
* entry[=].resource = 8adc0999-9468-4ac9-9557-680fa133d626
* entry[+].fullUrl = "urn:uuid:72884cad-ebe6-4f43-a51a-2f978275f132"
* entry[=].resource = 72884cad-ebe6-4f43-a51a-2f978275f132
* entry[+].fullUrl = "urn:uuid:c4597aa2-688a-401b-a658-70acc6de28c6"
* entry[=].resource = c4597aa2-688a-401b-a658-70acc6de28c6
* entry[+].fullUrl = "urn:uuid:45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7"
* entry[=].resource = 45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7
* entry[+].fullUrl = "urn:uuid:aa11a2be-3e36-4be7-b58a-6fc3dace2741"
* entry[=].resource = aa11a2be-3e36-4be7-b58a-6fc3dace2741
* entry[+].fullUrl = "urn:uuid:6e39ccf3-f997-4a2b-8f28-b4b71c778c70"
* entry[=].resource = 6e39ccf3-f997-4a2b-8f28-b4b71c778c70
* entry[+].fullUrl = "urn:uuid:b4916505-a06b-460c-9be8-011609282457"
* entry[=].resource = b4916505-a06b-460c-9be8-011609282457
* entry[+].fullUrl = "urn:uuid:a6a5a1d5-c896-4c7e-b922-888fcc7e6ae4"
* entry[=].resource = a6a5a1d5-c896-4c7e-b922-888fcc7e6ae4
* entry[+].fullUrl = "urn:uuid:2639657a-c19a-48e2-82cc-471e13b8ad94"
* entry[=].resource = 2639657a-c19a-48e2-82cc-471e13b8ad94
* entry[+].fullUrl = "urn:uuid:cc354e00-a419-47ea-8b6c-1768b2a01646"
* entry[=].resource = cc354e00-a419-47ea-8b6c-1768b2a01646
* entry[+].fullUrl = "urn:uuid:26bee0a9-5997-4557-ab9d-c6adbb05b572"
* entry[=].resource = 26bee0a9-5997-4557-ab9d-c6adbb05b572
* entry[+].fullUrl = "urn:uuid:c7781f44-6df8-4a8b-9e06-0b34263a47c5"
* entry[=].resource = c7781f44-6df8-4a8b-9e06-0b34263a47c5

Instance: 30551ce1-5a28-4356-b684-1e639094ad4d
InstanceOf: Composition
Usage: #inline
* identifier.system = "urn:oid:2.16.724.4.8.10.200.10"
* identifier.value = "3f69e0a5-2177-4540-baab-7a5d0877428f"
* status = #final
* type = $loinc#60591-5 "Patient summary Document"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e8)
* date = "2017-12-11T14:30:00+01:00"
* author = Reference(urn:uuid:1c616b24-3895-48c4-9a02-9a64110351ef)
* title = "Patient Summary as of December 11, 2017 14:30"
* confidentiality = #N
* attester[0].mode = #legal
* attester[=].time = "2017-12-11T14:30:00+01:00"
* attester[=].party = Reference(urn:uuid:1c616b24-3895-48c4-9a02-9a64110351ef)
* attester[+].mode = #legal
* attester[=].time = "2017-12-11T14:30:00+01:00"
* attester[=].party = Reference(urn:uuid:890751f4-2924-4636-bab7-efffc7f3cf15)
* custodian = Reference(urn:uuid:890751f4-2924-4636-bab7-efffc7f3cf15)
* relatesTo.code = #appends
* relatesTo.targetIdentifier.system = "urn:oid:2.16.724.4.8.10.200.10"
* relatesTo.targetIdentifier.value = "c2277753-9f90-4a95-8ddb-a0b3f6e7d292"
* event.code = $v3-ActClass#PCPR
* event.period.end = "2017-12-11T14:30:00+01:00"
* section[0].title = "Active Problems"
* section[=].code = $loinc#11450-4 "Problem list - Reported"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Hot flushes</div>"
* section[=].entry = Reference(urn:uuid:c64139e7-f02d-409c-bf34-75e8bf23bc80)
* section[+].title = "Medication"
* section[=].code = $loinc#10160-0 "History of Medication use Narrative"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Medication</th>\n\t\t\t\t\t\t\t\t\t\t<th>Strength</th>\n\t\t\t\t\t\t\t\t\t\t<th>Form</th>\n\t\t\t\t\t\t\t\t\t\t<th>Dosage</th>\n\t\t\t\t\t\t\t\t\t\t<th>Comment</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>Anastrozole</td>\n\t\t\t\t\t\t\t\t\t\t<td>1 mg</td>\n\t\t\t\t\t\t\t\t\t\t<td>tablet</td>\n\t\t\t\t\t\t\t\t\t\t<td>once daily</td>\n\t\t\t\t\t\t\t\t\t\t<td>treatment for breast cancer</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>Black Cohosh Extract</td>\n\t\t\t\t\t\t\t\t\t\t<td> </td>\n\t\t\t\t\t\t\t\t\t\t<td>pil</td>\n\t\t\t\t\t\t\t\t\t\t<td> </td>\n\t\t\t\t\t\t\t\t\t\t<td>herbal supplement</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>"
* section[=].entry[0] = Reference(urn:uuid:c220e36c-eb67-4fc4-9ba1-2fabc52acec6)
* section[=].entry[+] = Reference(urn:uuid:47524493-846a-4a26-bae2-4ab03e60f02e)
* section[+].title = "Allergies and Intolerances"
* section[=].code = $loinc#48765-2 "Allergies and adverse reactions Document"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Allergy to penicillin, high criticality, active\n\t\t\t\t\t\t\tNo known food allergies\n\t\t\t\t\t\t</div>"
* section[=].entry[0] = Reference(urn:uuid:72884cad-ebe6-4f43-a51a-2f978275f132)
* section[=].entry[+] = Reference(urn:uuid:c7781f44-6df8-4a8b-9e06-0b34263a47c5)
* section[+].title = "History of Past Illness"
* section[=].code = $loinc#11348-0 "History of Past illness Narrative"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Breast cancer Stage II with no evidence of recurrence following treatment</div>"
* section[=].entry = Reference(urn:uuid:c4597aa2-688a-401b-a658-70acc6de28c6)
* section[+].title = "Plan of Treatment"
* section[=].code = $loinc#18776-5 "Plan of care note"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Continue hormone medication with Anastrozole for total of 5 years and monitor for potential breast cancer recurrence</div>"
* section[+].title = "Results"
* section[=].code = $loinc#30954-2 "Relevant diagnostic tests/laboratory data Narrative"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th colspan=\"3\">Blood typing</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>Blood group</td>\n\t\t\t\t\t\t\t\t\t\t<td>A+</td>\n\t\t\t\t\t\t\t\t\t\t<td/>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>C Ab [Presence] in Serum or Plasma</td>\n\t\t\t\t\t\t\t\t\t\t<td>Positive</td>\n\t\t\t\t\t\t\t\t\t\t<td/>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>E Ab [Presence] in Serum or Plasma</td>\n\t\t\t\t\t\t\t\t\t\t<td>Positive</td>\n\t\t\t\t\t\t\t\t\t\t<td/>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>Little c Ab [Presence] in Serum or Plasma</td>\n\t\t\t\t\t\t\t\t\t\t<td>Negative</td>\n\t\t\t\t\t\t\t\t\t\t<td/>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th colspan=\"3\">Hemoglobin A1c monitoring</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>Hemoglobin A1c/Hemoglobin.total in Blood by HPLC</td>\n\t\t\t\t\t\t\t\t\t\t<td>7.5 %</td>\n\t\t\t\t\t\t\t\t\t\t<td/>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th colspan=\"3\">Bacteriology</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\">Methicillin resistant Staphylococcus aureus</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\">Healthy carrier of MRSA</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>"
* section[=].entry[0] = Reference(urn:uuid:2639657a-c19a-48e2-82cc-471e13b8ad94)
* section[=].entry[+] = Reference(urn:uuid:cc354e00-a419-47ea-8b6c-1768b2a01646)
* section[=].entry[+] = Reference(urn:uuid:26bee0a9-5997-4557-ab9d-c6adbb05b572)

Instance: 2b90dd2b-2dab-4c75-9bb9-a355e07401e8
InstanceOf: Patient
Usage: #inline
* identifier.system = "urn:oid:2.16.840.1.113883.2.4.6.3"
* identifier.value = "574687583"
* active = true
* name.family = "DeLarosa"
* name.given = "Martha"
* telecom.system = #phone
* telecom.value = "+31788700800"
* telecom.use = #home
* gender = #female
* birthDate = "1972-05-01"
* address.line = "Laan Van Europa 1600"
* address.city = "Dordrecht"
* address.postalCode = "3317 DB"
* address.country = "NL"
* contact.relationship = $v3-RoleCode#MTH
* contact.name.family = "Mum"
* contact.name.given = "Martha"
* contact.telecom.system = #phone
* contact.telecom.value = "+33-555-20036"
* contact.telecom.use = #home
* contact.address.line = "Promenade des Anglais 111"
* contact.address.city = "Lyon"
* contact.address.postalCode = "69001"
* contact.address.country = "FR"

Instance: 1c616b24-3895-48c4-9a02-9a64110351ef
InstanceOf: Practitioner
Usage: #inline
* identifier.system = "urn:oid:2.16.528.1.1007.3.1"
* identifier.value = "129854633"
* identifier.assigner.display = "CIBG"
* active = true
* name.family = "van Hulp"
* name.given = "Beetje"
* qualification.code = http://terminology.hl7.org/CodeSystem/v2-0360|2.7#MD "Doctor of Medicine"

Instance: 890751f4-2924-4636-bab7-efffc7f3cf15
InstanceOf: Organization
Usage: #inline
* identifier.system = "urn:oid:2.16.528.1.1007.3.3"
* identifier.value = "564738757"
* active = true
* name = "Anorg Aniza Tion BV / The best custodian ever"
* telecom.system = #phone
* telecom.value = "+31-51-34343400"
* telecom.use = #work
* address.use = #work
* address.line = "Houttuinen 27"
* address.city = "Dordrecht"
* address.postalCode = "3311 CE"
* address.country = "NL"

Instance: c64139e7-f02d-409c-bf34-75e8bf23bc80
InstanceOf: Condition
Usage: #inline
* identifier.system = "urn:oid:1.2.3.999"
* identifier.value = "c87bf51c-e53c-4bfe-b8b7-aa62bdd93002"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* category = $loinc#75326-9 "Problem"
* severity = $sct#6736007 "Moderate severity"
* code.coding[0] = $sct#198436008 "Menopausal flushing (finding)"
* code.coding[=].display.extension.url = "http://hl7.org/fhir/StructureDefinition/translation"
* code.coding[=].display.extension.extension[0].url = "lang"
* code.coding[=].display.extension.extension[=].valueCode = #nl-NL
* code.coding[=].display.extension.extension[+].url = "content"
* code.coding[=].display.extension.extension[=].valueString = "opvliegers"
* code.coding[+] = $icd-10#N95.1 "Menopausal and female climacteric states"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e8)
* onsetDateTime = "2015"
* recordedDate = "2016-10"

Instance: c220e36c-eb67-4fc4-9ba1-2fabc52acec6
InstanceOf: MedicationStatement
Usage: #inline
* identifier.system = "urn:oid:1.2.3.999"
* identifier.value = "b75f92cb-61d4-469a-9387-df5ef70d25f0"
* status = #active
* medicationReference = Reference(urn:uuid:976d0804-cae0-45ae-afe3-a19f3ceba6bc)
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e8)
* effectivePeriod.start = "2015-03"
* dosage.timing.repeat.count = 1
* dosage.timing.repeat.periodUnit = #d
* dosage.route = $standardterms#20053000 "Oral use"
* dosage.doseAndRate.doseQuantity = 1 '1' "tablet"

Instance: 47524493-846a-4a26-bae2-4ab03e60f02e
InstanceOf: MedicationStatement
Usage: #inline
* identifier.system = "urn:oid:1.2.3.999"
* identifier.value = "9e312d6b-c6b6-439a-a730-6efaa5dcf8bc"
* status = #active
* medicationReference = Reference(urn:uuid:8adc0999-9468-4ac9-9557-680fa133d626)
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e8)
* effectivePeriod.start = "2016-01"
* dosage.route = $standardterms#20053000 "Oral use"

Instance: 976d0804-cae0-45ae-afe3-a19f3ceba6bc
InstanceOf: Medication
Usage: #inline
* code.coding[0] = $sct#108774000 "Product containing anastrozole (medicinal product)"
* code.coding[+] = urn:oid:2.16.840.1.113883.2.4.4.1#99872 "ANASTROZOL 1MG TABLET"
* code.coding[+] = urn:oid:2.16.840.1.113883.2.4.4.7#2076667 "ANASTROZOL CF TABLET FILMOMHULD 1MG"
* code.coding[+] = $atc#L02BG03 "anastrozole"

Instance: 8adc0999-9468-4ac9-9557-680fa133d626
InstanceOf: Medication
Usage: #inline
* code.coding[0] = $sct#412588001 "Cimicifuga racemosa extract (substance)"
* code.coding[=].display.extension.url = "http://hl7.org/fhir/StructureDefinition/translation"
* code.coding[=].display.extension.extension[0].url = "lang"
* code.coding[=].display.extension.extension[=].valueCode = #nl-NL
* code.coding[=].display.extension.extension[+].url = "content"
* code.coding[=].display.extension.extension[=].valueString = "Zwarte Cohosh Extract"
* code.coding[+] = $atc#G02CX04 "Cimicifugae rhizoma"
* code.text = "Black Cohosh Extract herbal supplement"

Instance: 72884cad-ebe6-4f43-a51a-2f978275f132
InstanceOf: AllergyIntolerance
Usage: #inline
* identifier.system = "urn:oid:1.2.3.999"
* identifier.value = "3a462598-009c-484a-965c-d6b24a821424"
* clinicalStatus = $allergyintolerance-clinical#active
* verificationStatus = $allergyintolerance-verification#confirmed
* type = #allergy
* category = #medication
* criticality = #high
* code = $sct#373270004 "Substance with penicillin structure and antibacterial mechanism of action (substance)"
* patient = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e8)
* onsetDateTime = "2010"

Instance: c4597aa2-688a-401b-a658-70acc6de28c6
InstanceOf: Condition
Usage: #inline
* identifier.system = "urn:oid:1.2.3.999"
* identifier.value = "66d4a8c7-9081-43e0-a63f-489c2ae6edd6"
* clinicalStatus = $condition-clinical#remission
* verificationStatus = $condition-ver-status#confirmed
* category = $loinc#75326-9 "Problem"
* severity = $sct#24484000 "Severe"
* code.coding[0] = $sct#254837009 "Malignant tumor of breast"
* code.coding[=].display.extension.url = "http://hl7.org/fhir/StructureDefinition/translation"
* code.coding[=].display.extension.extension[0].url = "lang"
* code.coding[=].display.extension.extension[=].valueCode = #nl-NL
* code.coding[=].display.extension.extension[+].url = "content"
* code.coding[=].display.extension.extension[=].valueString = "Borstkanker stadium II zonder aanwijzingen van recidieven na behandeling"
* code.coding[+] = $icd-o-3#8500/3 "Infiltrating duct carcinoma, NOS"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e8)
* onsetDateTime = "2015-01"
* abatementDateTime = "2015-03"

Instance: 45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7
InstanceOf: Organization
Usage: #inline
* active = true
* type = $organization-type#other
* name = "Laboratoire de charme"

Instance: aa11a2be-3e36-4be7-b58a-6fc3dace2741
InstanceOf: Observation
Usage: #inline
* status = #final
* category = $observation-category#laboratory
* code = $loinc#882-1 "ABO and Rh group [Type] in Blood"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e8)
* effectiveDateTime = "2015-10-10T09:15:00+01:00"
* performer = Reference(urn:uuid:45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7)
* valueCodeableConcept = $sct#278149003 "Blood group A Rh(D) positive"

Instance: 6e39ccf3-f997-4a2b-8f28-b4b71c778c70
InstanceOf: Observation
Usage: #inline
* status = #final
* category = $observation-category#laboratory
* code = $loinc#945-6 "C Ab [Presence] in Serum or Plasma"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e8)
* effectiveDateTime = "2015-10-10T09:35:00+01:00"
* performer = Reference(urn:uuid:45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7)
* valueCodeableConcept = $sct#10828004 "Positive"

Instance: b4916505-a06b-460c-9be8-011609282457
InstanceOf: Observation
Usage: #inline
* status = #final
* category = $observation-category#laboratory
* code = $loinc#1018-1 "E Ab [Presence] in Serum or Plasma"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e8)
* effectiveDateTime = "2015-10-10T09:35:00+01:00"
* performer = Reference(urn:uuid:45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7)
* valueCodeableConcept = $sct#10828004 "Positive"

Instance: a6a5a1d5-c896-4c7e-b922-888fcc7e6ae4
InstanceOf: Observation
Usage: #inline
* status = #final
* category = $observation-category#laboratory
* code = $loinc#1156-9 "little c Ab [Presence] in Serum or Plasma"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e8)
* effectiveDateTime = "2015-10-10T09:35:00+01:00"
* performer = Reference(urn:uuid:45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7)
* valueCodeableConcept = $sct#260385009 "Negative"

Instance: 2639657a-c19a-48e2-82cc-471e13b8ad94
InstanceOf: Observation
Usage: #inline
* status = #final
* category = $observation-category#laboratory
* code.text = "Blood typing"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e8)
* effectiveDateTime = "2015-10-10"
* performer = Reference(urn:uuid:45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7)
* hasMember[0] = Reference(urn:uuid:aa11a2be-3e36-4be7-b58a-6fc3dace2741)
* hasMember[+] = Reference(urn:uuid:6e39ccf3-f997-4a2b-8f28-b4b71c778c70)
* hasMember[+] = Reference(urn:uuid:b4916505-a06b-460c-9be8-011609282457)
* hasMember[+] = Reference(urn:uuid:a6a5a1d5-c896-4c7e-b922-888fcc7e6ae4)

Instance: cc354e00-a419-47ea-8b6c-1768b2a01646
InstanceOf: Observation
Usage: #inline
* status = #final
* category = $observation-category#laboratory
* code = $loinc#17856-6 "Hemoglobin A1c/Hemoglobin.total in Blood by HPLC"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e8)
* effectiveDateTime = "2017-11-10T08:20:00+01:00"
* performer = Reference(urn:uuid:45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7)
* valueQuantity = 7.5 '%' "%"
* note.text = "Above stated goal of 7.0 %"

Instance: 26bee0a9-5997-4557-ab9d-c6adbb05b572
InstanceOf: Observation
Usage: #inline
* status = #final
* category = $observation-category#laboratory
* code = $loinc#42803-7 "Bacteria identified in Isolate"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e8)
* effectiveDateTime = "2017-12-10T08:20:00+01:00"
* performer = Reference(urn:uuid:45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7)
* valueCodeableConcept = $sct#115329001 "Methicillin resistant Staphylococcus aureus"
* note.text = "Healthy carrier of MRSA"

Instance: c7781f44-6df8-4a8b-9e06-0b34263a47c5
InstanceOf: AllergyIntolerance
Usage: #inline
* clinicalStatus = $allergyintolerance-clinical#active
* code = $sct#429625007 "No known food allergy (situation)"
* patient = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e8)



---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/IPS-bundle-with-immunization.fsh

Instance: IPS-examples-Bundle-with-immunization
InstanceOf: Bundle
Title: "Bundle - IPS with Required Sections and Immunization"
Description: "Bundle - IPS with Required Sections and Immunization"
Usage: #example
* language = #en-GB
* identifier.system = "urn:oid:2.16.724.4.8.10.200.10"
* identifier.value = "175bd032-8b00-4728-b2dc-748bb1501aed"
* type = #document
* timestamp = "2017-12-11T14:30:00+01:00"
* entry[0].fullUrl = "urn:uuid:30551ce1-5a28-4356-b684-1e639094ad4d"
* entry[=].resource = Inline-Instance-for-IPS-examples-Bundle-with-immunization-1
* entry[+].fullUrl = "urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e1"
* entry[=].resource = 2b90dd2b-2dab-4c75-9bb9-a355e07401e1-with-immunization
* entry[+].fullUrl = "urn:uuid:1c616b24-3895-48c4-9a02-9a64110351ef"
* entry[=].resource = 1c616b24-3895-48c4-9a02-9a64110351ef-with-immunization
* entry[+].fullUrl = "urn:uuid:890751f4-2924-4636-bab7-efffc7f3cf15"
* entry[=].resource = 890751f4-2924-4636-bab7-efffc7f3cf15-with-immunization
* entry[+].fullUrl = "urn:uuid:c64139e7-f02d-409c-bf34-75e8bf23bc80"
* entry[=].resource = c64139e7-f02d-409c-bf34-75e8bf23bc80-with-immunization
* entry[+].fullUrl = "urn:uuid:c220e36c-eb67-4fc4-9ba1-2fabc52acec6"
* entry[=].resource = c220e36c-eb67-4fc4-9ba1-2fabc52acec6-with-immunization
* entry[+].fullUrl = "urn:uuid:47524493-846a-4a26-bae2-4ab03e60f02e"
* entry[=].resource = 47524493-846a-4a26-bae2-4ab03e60f02e-with-immunization
* entry[+].fullUrl = "urn:uuid:976d0804-cae0-45ae-afe3-a19f3ceba6bc"
* entry[=].resource = 976d0804-cae0-45ae-afe3-a19f3ceba6bc-with-immunization
* entry[+].fullUrl = "urn:uuid:8adc0999-9468-4ac9-9557-680fa133d626"
* entry[=].resource = 8adc0999-9468-4ac9-9557-680fa133d626-with-immunization
* entry[+].fullUrl = "urn:uuid:72884cad-ebe6-4f43-a51a-2f978275f132"
* entry[=].resource = 72884cad-ebe6-4f43-a51a-2f978275f132-with-immunization
* entry[+].fullUrl = "urn:uuid:c4597aa2-688a-401b-a658-70acc6de28c6"
* entry[=].resource = c4597aa2-688a-401b-a658-70acc6de28c6-with-immunization
* entry[+].fullUrl = "urn:uuid:45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7"
* entry[=].resource = 45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7-with-immunization
* entry[+].fullUrl = "urn:uuid:aa11a2be-3e36-4be7-b58a-6fc3dace2741"
* entry[=].resource = aa11a2be-3e36-4be7-b58a-6fc3dace2741-with-immunization
* entry[+].fullUrl = "urn:uuid:6e39ccf3-f997-4a2b-8f28-b4b71c778c70"
* entry[=].resource = 6e39ccf3-f997-4a2b-8f28-b4b71c778c70-with-immunization
* entry[+].fullUrl = "urn:uuid:b4916505-a06b-460c-9be8-011609282457"
* entry[=].resource = b4916505-a06b-460c-9be8-011609282457-with-immunization
* entry[+].fullUrl = "urn:uuid:a6a5a1d5-c896-4c7e-b922-888fcc7e6ae4"
* entry[=].resource = a6a5a1d5-c896-4c7e-b922-888fcc7e6ae4-with-immunization
* entry[+].fullUrl = "urn:uuid:2639657a-c19a-48e2-82cc-471e13b8ad94"
* entry[=].resource = 2639657a-c19a-48e2-82cc-471e13b8ad94-with-immunization
* entry[+].fullUrl = "urn:uuid:cc354e00-a419-47ea-8b6c-1768b2a01646"
* entry[=].resource = cc354e00-a419-47ea-8b6c-1768b2a01646-with-immunization
* entry[+].fullUrl = "urn:uuid:26bee0a9-5997-4557-ab9d-c6adbb05b572"
* entry[=].resource = 26bee0a9-5997-4557-ab9d-c6adbb05b572-with-immunization
* entry[+].fullUrl = "urn:uuid:c7781f44-6df8-4a8b-9e06-0b34263a47c5"
* entry[=].resource = c7781f44-6df8-4a8b-9e06-0b34263a47c5-with-immunization
* entry[+].fullUrl = "urn:uuid:40b7b6a0-c043-423a-9959-be3707e728b2"
* entry[=].resource = 40b7b6a0-c043-423a-9959-be3707e728b2

Instance: Inline-Instance-for-IPS-examples-Bundle-with-immunization-1
InstanceOf: Composition
Usage: #inline
* id = "30551ce1-5a28-4356-b684-1e639094ad4d"
* identifier.system = "urn:oid:2.16.724.4.8.10.200.10"
* identifier.value = "3f69e0a5-2177-4540-baab-7a5d0877428f"
* status = #final
* type = $loinc#60591-5 "Patient summary Document"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e1)
* date = "2017-12-11T14:30:00+01:00"
* author = Reference(urn:uuid:1c616b24-3895-48c4-9a02-9a64110351ef)
* title = "Patient Summary as of December 11, 2017 14:30"
* confidentiality = #N
* attester[0].mode = #legal
* attester[=].time = "2017-12-11T14:30:00+01:00"
* attester[=].party = Reference(urn:uuid:1c616b24-3895-48c4-9a02-9a64110351ef)
* attester[+].mode = #legal
* attester[=].time = "2017-12-11T14:30:00+01:00"
* attester[=].party = Reference(urn:uuid:890751f4-2924-4636-bab7-efffc7f3cf15)
* custodian = Reference(urn:uuid:890751f4-2924-4636-bab7-efffc7f3cf15)
* relatesTo.code = #appends
* relatesTo.targetIdentifier.system = "urn:oid:2.16.724.4.8.10.200.10"
* relatesTo.targetIdentifier.value = "c2277753-9f90-4a95-8ddb-a0b3f6e7d292"
* event.code = $v3-ActClass#PCPR
* event.period.end = "2017-12-11T14:30:00+01:00"
* section[0].title = "Active Problems"
* section[=].code = $loinc#11450-4 "Problem list - Reported"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Hot flushes</div>"
* section[=].entry = Reference(urn:uuid:c64139e7-f02d-409c-bf34-75e8bf23bc80)
* section[+].title = "Medication"
* section[=].code = $loinc#10160-0 "History of Medication use Narrative"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Medication</th>\n\t\t\t\t\t\t\t\t\t\t<th>Strength</th>\n\t\t\t\t\t\t\t\t\t\t<th>Form</th>\n\t\t\t\t\t\t\t\t\t\t<th>Dosage</th>\n\t\t\t\t\t\t\t\t\t\t<th>Comment</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>Anastrozole</td>\n\t\t\t\t\t\t\t\t\t\t<td>1 mg</td>\n\t\t\t\t\t\t\t\t\t\t<td>tablet</td>\n\t\t\t\t\t\t\t\t\t\t<td>once daily</td>\n\t\t\t\t\t\t\t\t\t\t<td>treatment for breast cancer</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>Black Cohosh Extract</td>\n\t\t\t\t\t\t\t\t\t\t<td> </td>\n\t\t\t\t\t\t\t\t\t\t<td>pil</td>\n\t\t\t\t\t\t\t\t\t\t<td> </td>\n\t\t\t\t\t\t\t\t\t\t<td>herbal supplement</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>"
* section[=].entry[0] = Reference(urn:uuid:c220e36c-eb67-4fc4-9ba1-2fabc52acec6)
* section[=].entry[+] = Reference(urn:uuid:47524493-846a-4a26-bae2-4ab03e60f02e)
* section[+].title = "Allergies and Intolerances"
* section[=].code = $loinc#48765-2 "Allergies and adverse reactions Document"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Allergy to penicillin, high criticality, active\n\t\t\t\t\t\t\tNo known food allergies\n\t\t\t\t\t\t</div>"
* section[=].entry[0] = Reference(urn:uuid:72884cad-ebe6-4f43-a51a-2f978275f132)
* section[=].entry[+] = Reference(urn:uuid:c7781f44-6df8-4a8b-9e06-0b34263a47c5)
* section[+].title = "History of Past Illness"
* section[=].code = $loinc#11348-0 "History of Past illness Narrative"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Breast cancer Stage II with no evidence of recurrence following treatment</div>"
* section[=].entry = Reference(urn:uuid:c4597aa2-688a-401b-a658-70acc6de28c6)
* section[+].title = "Plan of Treatment"
* section[=].code = $loinc#18776-5 "Plan of care note"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Continue hormone medication with Anastrozole for total of 5 years and monitor for potential breast cancer recurrence</div>"
* section[+].title = "Results"
* section[=].code = $loinc#30954-2 "Relevant diagnostic tests/laboratory data Narrative"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th colspan=\"3\">Blood typing</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>Blood group</td>\n\t\t\t\t\t\t\t\t\t\t<td>A+</td>\n\t\t\t\t\t\t\t\t\t\t<td/>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>C Ab [Presence] in Serum or Plasma</td>\n\t\t\t\t\t\t\t\t\t\t<td>Positive</td>\n\t\t\t\t\t\t\t\t\t\t<td/>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>E Ab [Presence] in Serum or Plasma</td>\n\t\t\t\t\t\t\t\t\t\t<td>Positive</td>\n\t\t\t\t\t\t\t\t\t\t<td/>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>Little c Ab [Presence] in Serum or Plasma</td>\n\t\t\t\t\t\t\t\t\t\t<td>Negative</td>\n\t\t\t\t\t\t\t\t\t\t<td/>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th colspan=\"3\">Hemoglobin A1c monitoring</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>Hemoglobin A1c/Hemoglobin.total in Blood by HPLC</td>\n\t\t\t\t\t\t\t\t\t\t<td>7.5 %</td>\n\t\t\t\t\t\t\t\t\t\t<td/>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th colspan=\"3\">Bacteriology</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\">Methicillin resistant Staphylococcus aureus</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\">Healthy carrier of MRSA</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>"
* section[=].entry[0] = Reference(urn:uuid:2639657a-c19a-48e2-82cc-471e13b8ad94)
* section[=].entry[+] = Reference(urn:uuid:cc354e00-a419-47ea-8b6c-1768b2a01646)
* section[=].entry[+] = Reference(urn:uuid:26bee0a9-5997-4557-ab9d-c6adbb05b572)
* section[+].title = "Immunizations"
* section[=].code = $loinc#11369-6 "History of Immunization Narrative"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"fr-LU\" lang=\"fr-LU\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<b>Marie Lux-Brennard</b>\n\t\t\t\t\t\t\t(Apr 17, 1998)\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>Vaccin anti diphtérie-coqueluche-tétanos-poliomyélite, Jun 3, 1998, 10:00:00 PM</p>\n\t\t\t\t\t\t<p>Voie intramusculaire, Cuisse droite</p>\n\t\t\t\t\t</div>"
* section[=].entry = Reference(urn:uuid:40b7b6a0-c043-423a-9959-be3707e728b2)

Instance: 2b90dd2b-2dab-4c75-9bb9-a355e07401e1-with-immunization
InstanceOf: Patient
Usage: #inline
* identifier.system = "urn:oid:2.16.840.1.113883.2.4.6.3"
* identifier.value = "574687583"
* active = true
* name.family = "DeLarosa"
* name.given = "Martha"
* telecom.system = #phone
* telecom.value = "+31788700800"
* telecom.use = #home
* gender = #female
* birthDate = "1972-05-01"
* address.line = "Laan Van Europa 1600"
* address.city = "Dordrecht"
* address.postalCode = "3317 DB"
* address.country = "NL"
* contact.relationship = $v3-RoleCode#MTH
* contact.name.family = "Mum"
* contact.name.given = "Martha"
* contact.telecom.system = #phone
* contact.telecom.value = "+33-555-20036"
* contact.telecom.use = #home
* contact.address.line = "Promenade des Anglais 111"
* contact.address.city = "Lyon"
* contact.address.postalCode = "69001"
* contact.address.country = "FR"

Instance: 1c616b24-3895-48c4-9a02-9a64110351ef-with-immunization
InstanceOf: Practitioner
Usage: #inline
* identifier.system = "urn:oid:2.16.528.1.1007.3.1"
* identifier.value = "129854633"
* identifier.assigner.display = "CIBG"
* active = true
* name.family = "van Hulp"
* name.given = "Beetje"
* qualification.code = http://terminology.hl7.org/CodeSystem/v2-0360|2.7#MD "Doctor of Medicine"

Instance: 890751f4-2924-4636-bab7-efffc7f3cf15-with-immunization
InstanceOf: Organization
Usage: #inline
* identifier.system = "urn:oid:2.16.528.1.1007.3.3"
* identifier.value = "564738757"
* active = true
* name = "Anorg Aniza Tion BV / The best custodian ever"
* telecom.system = #phone
* telecom.value = "+31-51-34343400"
* telecom.use = #work
* address.use = #work
* address.line = "Houttuinen 27"
* address.city = "Dordrecht"
* address.postalCode = "3311 CE"
* address.country = "NL"

Instance: c64139e7-f02d-409c-bf34-75e8bf23bc80-with-immunization
InstanceOf: Condition
Usage: #inline
* identifier.system = "urn:oid:1.2.3.999"
* identifier.value = "c87bf51c-e53c-4bfe-b8b7-aa62bdd93002"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* category = $loinc#75326-9 "Problem"
* severity = $sct#6736007 "Moderate severity"
* code.coding[0] = $sct#198436008 "Menopausal flushing (finding)"
* code.coding[=].display.extension.url = "http://hl7.org/fhir/StructureDefinition/translation"
* code.coding[=].display.extension.extension[0].url = "lang"
* code.coding[=].display.extension.extension[=].valueCode = #nl-NL
* code.coding[=].display.extension.extension[+].url = "content"
* code.coding[=].display.extension.extension[=].valueString = "opvliegers"
* code.coding[+] = $icd-10#N95.1 "Menopausal and female climacteric states"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e1)
* onsetDateTime = "2015"
* recordedDate = "2016-10"

Instance: c220e36c-eb67-4fc4-9ba1-2fabc52acec6-with-immunization
InstanceOf: MedicationStatement
Usage: #inline
* identifier.system = "urn:oid:1.2.3.999"
* identifier.value = "b75f92cb-61d4-469a-9387-df5ef70d25f0"
* status = #active
* medicationReference = Reference(urn:uuid:976d0804-cae0-45ae-afe3-a19f3ceba6bc)
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e1)
* effectivePeriod.start = "2015-03"
* dosage.timing.repeat.count = 1
* dosage.timing.repeat.periodUnit = #d
* dosage.route = $standardterms#20053000 "Oral use"
* dosage.doseAndRate.doseQuantity = 1 '1' "tablet"

Instance: 47524493-846a-4a26-bae2-4ab03e60f02e-with-immunization
InstanceOf: MedicationStatement
Usage: #inline
* identifier.system = "urn:oid:1.2.3.999"
* identifier.value = "9e312d6b-c6b6-439a-a730-6efaa5dcf8bc"
* status = #active
* medicationReference = Reference(urn:uuid:8adc0999-9468-4ac9-9557-680fa133d626)
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e1)
* effectivePeriod.start = "2016-01"
* dosage.route = $standardterms#20053000 "Oral use"

Instance: 976d0804-cae0-45ae-afe3-a19f3ceba6bc-with-immunization
InstanceOf: Medication
Usage: #inline
* code.coding[0] = $sct#108774000 "Product containing anastrozole (medicinal product)"
* code.coding[+] = urn:oid:2.16.840.1.113883.2.4.4.1#99872 "ANASTROZOL 1MG TABLET"
* code.coding[+] = urn:oid:2.16.840.1.113883.2.4.4.7#2076667 "ANASTROZOL CF TABLET FILMOMHULD 1MG"
* code.coding[+] = $atc#L02BG03 "anastrozole"

Instance: 8adc0999-9468-4ac9-9557-680fa133d626-with-immunization
InstanceOf: Medication
Usage: #inline
* code.coding[0] = $sct#412588001 "Cimicifuga racemosa extract (substance)"
* code.coding[=].display.extension.url = "http://hl7.org/fhir/StructureDefinition/translation"
* code.coding[=].display.extension.extension[0].url = "lang"
* code.coding[=].display.extension.extension[=].valueCode = #nl-NL
* code.coding[=].display.extension.extension[+].url = "content"
* code.coding[=].display.extension.extension[=].valueString = "Zwarte Cohosh Extract"
* code.coding[+] = $atc#G02CX04 "Cimicifugae rhizoma"
* code.text = "Black Cohosh Extract herbal supplement"

Instance: 72884cad-ebe6-4f43-a51a-2f978275f132-with-immunization
InstanceOf: AllergyIntolerance
Usage: #inline
* identifier.system = "urn:oid:1.2.3.999"
* identifier.value = "3a462598-009c-484a-965c-d6b24a821424"
* clinicalStatus = $allergyintolerance-clinical#active
* verificationStatus = $allergyintolerance-verification#confirmed
* type = #allergy
* category = #medication
* criticality = #high
* code = $sct#373270004 "Substance with penicillin structure and antibacterial mechanism of action (substance)"
* patient = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e1)
* onsetDateTime = "2010"

Instance: c4597aa2-688a-401b-a658-70acc6de28c6-with-immunization
InstanceOf: Condition
Usage: #inline
* identifier.system = "urn:oid:1.2.3.999"
* identifier.value = "66d4a8c7-9081-43e0-a63f-489c2ae6edd6"
* clinicalStatus = $condition-clinical#remission
* verificationStatus = $condition-ver-status#confirmed
* category = $loinc#75326-9 "Problem"
* severity = $sct#24484000 "Severe"
* code.coding[0] = $sct#254837009 "Malignant tumor of breast"
* code.coding[=].display.extension.url = "http://hl7.org/fhir/StructureDefinition/translation"
* code.coding[=].display.extension.extension[0].url = "lang"
* code.coding[=].display.extension.extension[=].valueCode = #nl-NL
* code.coding[=].display.extension.extension[+].url = "content"
* code.coding[=].display.extension.extension[=].valueString = "Borstkanker stadium II zonder aanwijzingen van recidieven na behandeling"
* code.coding[+] = $icd-o-3#8500/3 "Infiltrating duct carcinoma, NOS"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e1)
* onsetDateTime = "2015-01"
* abatementDateTime = "2015-03"

Instance: 45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7-with-immunization
InstanceOf: Organization
Usage: #inline
* active = true
* type = $organization-type#other
* name = "Laboratoire de charme"

Instance: aa11a2be-3e36-4be7-b58a-6fc3dace2741-with-immunization
InstanceOf: Observation
Usage: #inline
* status = #final
* category = $observation-category#laboratory
* code = $loinc#882-1 "ABO and Rh group [Type] in Blood"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e1)
* effectiveDateTime = "2015-10-10T09:15:00+01:00"
* performer = Reference(urn:uuid:45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7)
* valueCodeableConcept = $sct#278149003 "Blood group A Rh(D) positive"

Instance: 6e39ccf3-f997-4a2b-8f28-b4b71c778c70-with-immunization
InstanceOf: Observation
Usage: #inline
* status = #final
* category = $observation-category#laboratory
* code = $loinc#945-6 "C Ab [Presence] in Serum or Plasma"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e1)
* effectiveDateTime = "2015-10-10T09:35:00+01:00"
* performer = Reference(urn:uuid:45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7)
* valueCodeableConcept = $sct#10828004 "Positive"

Instance: b4916505-a06b-460c-9be8-011609282457-with-immunization
InstanceOf: Observation
Usage: #inline
* status = #final
* category = $observation-category#laboratory
* code = $loinc#1018-1 "E Ab [Presence] in Serum or Plasma"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e1)
* effectiveDateTime = "2015-10-10T09:35:00+01:00"
* performer = Reference(urn:uuid:45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7)
* valueCodeableConcept = $sct#10828004 "Positive"

Instance: a6a5a1d5-c896-4c7e-b922-888fcc7e6ae4-with-immunization
InstanceOf: Observation
Usage: #inline
* status = #final
* category = $observation-category#laboratory
* code = $loinc#1156-9 "little c Ab [Presence] in Serum or Plasma"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e1)
* effectiveDateTime = "2015-10-10T09:35:00+01:00"
* performer = Reference(urn:uuid:45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7)
* valueCodeableConcept = $sct#260385009 "Negative"

Instance: 2639657a-c19a-48e2-82cc-471e13b8ad94-with-immunization
InstanceOf: Observation
Usage: #inline
* status = #final
* category = $observation-category#laboratory
* code.text = "Blood typing"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e1)
* effectiveDateTime = "2015-10-10"
* performer = Reference(urn:uuid:45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7)
* hasMember[0] = Reference(urn:uuid:aa11a2be-3e36-4be7-b58a-6fc3dace2741)
* hasMember[+] = Reference(urn:uuid:6e39ccf3-f997-4a2b-8f28-b4b71c778c70)
* hasMember[+] = Reference(urn:uuid:b4916505-a06b-460c-9be8-011609282457)
* hasMember[+] = Reference(urn:uuid:a6a5a1d5-c896-4c7e-b922-888fcc7e6ae4)

Instance: cc354e00-a419-47ea-8b6c-1768b2a01646-with-immunization
InstanceOf: Observation
Usage: #inline
* status = #final
* category = $observation-category#laboratory
* code = $loinc#17856-6 "Hemoglobin A1c/Hemoglobin.total in Blood by HPLC"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e1)
* effectiveDateTime = "2017-11-10T08:20:00+01:00"
* performer = Reference(urn:uuid:45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7)
* valueQuantity = 7.5 '%' "%"
* note.text = "Above stated goal of 7.0 %"

Instance: 26bee0a9-5997-4557-ab9d-c6adbb05b572-with-immunization
InstanceOf: Observation
Usage: #inline
* status = #final
* category = $observation-category#laboratory
* code = $loinc#42803-7 "Bacteria identified in Isolate"
* subject = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e1)
* effectiveDateTime = "2017-12-10T08:20:00+01:00"
* performer = Reference(urn:uuid:45a5c5b1-4ec1-4d60-b4b2-ff5a84a41fd7)
* valueCodeableConcept = $sct#115329001 "Methicillin resistant Staphylococcus aureus"
* note.text = "Healthy carrier of MRSA"

Instance: c7781f44-6df8-4a8b-9e06-0b34263a47c5-with-immunization
InstanceOf: AllergyIntolerance
Usage: #inline
* clinicalStatus = $allergyintolerance-clinical#active
* code = $sct#429625007 "No known food allergy (situation)"
* patient = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e1)

Instance: 40b7b6a0-c043-423a-9959-be3707e728b2
InstanceOf: Immunization
Usage: #inline
* language = #fr-LU
* status = #completed
* vaccineCode.coding[0] = $sct#871878002 "Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens only vaccine product"
* vaccineCode.coding[=].display.extension.url = "http://hl7.org/fhir/StructureDefinition/translation"
* vaccineCode.coding[=].display.extension.extension[0].url = "lang"
* vaccineCode.coding[=].display.extension.extension[=].valueCode = #fr-LU
* vaccineCode.coding[=].display.extension.extension[+].url = "content"
* vaccineCode.coding[=].display.extension.extension[=].valueString = "Vaccin anti diphtérie-coqueluche-tétanos-poliomyélite"
* vaccineCode.coding[+] = $atc#J07CA02 "diphtheria-pertussis-poliomyelitis-tetanus"
* vaccineCode.coding[=].display.extension.url = "http://hl7.org/fhir/StructureDefinition/translation"
* vaccineCode.coding[=].display.extension.extension[0].url = "lang"
* vaccineCode.coding[=].display.extension.extension[=].valueCode = #fr-LU
* vaccineCode.coding[=].display.extension.extension[+].url = "content"
* vaccineCode.coding[=].display.extension.extension[=].valueString = "DIPHTERIE - COQUELUCHE - POLIOMYELITE - TETANOS"
* vaccineCode.text = "Vaccin anti diphtérie-coqueluche-tétanos-poliomyélite"
* patient = Reference(urn:uuid:2b90dd2b-2dab-4c75-9bb9-a355e07401e1)
* occurrenceDateTime = "1998-06-04T00:00:00+02:00"
* primarySource = true
* lotNumber = "AXK23RWERS"
* expirationDate = "2000-06-01"
* site.coding = $sct#11207009 "Right thigh"
* site.coding.display.extension.url = "http://hl7.org/fhir/StructureDefinition/translation"
* site.coding.display.extension.extension[0].url = "lang"
* site.coding.display.extension.extension[=].valueCode = #fr-LU
* site.coding.display.extension.extension[+].url = "content"
* site.coding.display.extension.extension[=].valueString = "Cuisse droite"
* site.text = "Cuisse droite"
* route.coding = $standardterms#20035000 "Intramuscular use"
* route.coding.display.extension.url = "http://hl7.org/fhir/StructureDefinition/translation"
* route.coding.display.extension.extension[0].url = "lang"
* route.coding.display.extension.extension[=].valueCode = #fr-LU
* route.coding.display.extension.extension[+].url = "content"
* route.coding.display.extension.extension[=].valueString = "Voie intramusculaire"
* route.text = "Voie intramusculaire"
* protocolApplied.targetDisease.coding[0] = $sct#27836007 "Pertussis"
* protocolApplied.targetDisease.coding[+] = $sct#76902006 "Tetanus"
* protocolApplied.targetDisease.coding[+] = $sct#398102009 "Acute poliomyelitis"
* protocolApplied.targetDisease.coding[+] = $sct#397430003 "Diphtheria caused by Corynebacterium diphtheriae"
* protocolApplied.doseNumberPositiveInt = 1



---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/medication-39-07-1.fsh

Instance: eumfh-39-07-1-of-Medication
InstanceOf: Medication
Title: "Medication - Simvastatin 40 MG Disintegrating Oral Tablet"
Description: "Medication - Simvastatin 40 MG Disintegrating Oral Tablet"
Usage: #example
* id = "eumfh-39-07-1"
* code.coding[0] = $rxnorm#757704 "Simvastatin 40 MG Disintegrating Oral Tablet"
* code.coding[+] = $atc#C10AA01 "simvastatin"
* code.text = "Simvastatin 40 MG Disintegrating Oral Tablet"
* form.coding[0] = $rxnorm#1294713 "Disintegrating Oral Product"
* form.coding[+] = $standardterms#10219000 "Tablet"
* ingredient.itemCodeableConcept = $rxnorm#36567 "Simvastatin"
* ingredient.strength.numerator = 40 'mg' "mcg"
* ingredient.strength.denominator = 1 '1' "tablet"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/MedicationRequest-eumfh-39-07-1-request.fsh

Instance: eumfh-39-07-1-request
InstanceOf: MedicationRequest
Title: "MedicationRequest - Simvastatin Request"
Description: "MedicationRequest - Simvastatin Request"
Usage: #example
* status = #active
* intent = #order
* medicationReference = Reference(Medication/eumfh-39-07-1) "simvastatin"
* subject = Reference(Patient/eumfh-39-07) "Alexander Heig (inject 39-07)"
* dosageInstruction.text = "40 mg/day"
* dosageInstruction.timing.repeat.frequency = 1
* dosageInstruction.timing.repeat.period = 1
* dosageInstruction.timing.repeat.periodUnit = #d
* dosageInstruction.doseAndRate.doseQuantity = 40 'mg' "mg"
* dispenseRequest.validityPeriod.start = "2021-01-01"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/medicationStatement-39-07-1.fsh

Instance: eumfh-39-07-1-of-MedicationStatement
InstanceOf: MedicationStatement
Title: "MedicationStatement - Ongoing Simvastatin Treatment"
Description: "MedicationStatement - Ongoing Simvastatin Treatment"
Usage: #example
* id = "eumfh-39-07-1"
* status = #active
* medicationReference = Reference(Medication/eumfh-39-07-1) "simvastatin"
* subject = Reference(Patient/eumfh-39-07) "Alexander Heig (inject 39-07)"
* effectivePeriod.start = "2014"
* dosage.text = "40 mg/day"
* dosage.timing.repeat.frequency = 1
* dosage.timing.repeat.period = 1
* dosage.timing.repeat.periodUnit = #d
* dosage.doseAndRate.doseQuantity = 40 'mg' "mg"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/observation-alcoholuse-1.fsh

Instance: alcohol-use-example
InstanceOf: Observation
Title: "Observation - Social History Alcohol Use"
Description: "Observation - Social History Alcohol Use"
Usage: #example
* status = #final
* code = $loinc#74013-4 "Alcoholic drinks per day"
* subject = Reference(patient-example-female)
* effectiveDateTime = "2019-07-15"
* performer = Reference(eumfh-39-07)
* valueQuantity = 2 '/d' "wine glasses per day"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/observation-hemoglobin.fsh

Instance: hemoglobin-of-Observation
InstanceOf: Observation
Title: "Observation - Result Hemoglobin"
Description: "Observation - Result Hemoglobin"
Usage: #example
* id = "hemoglobin"
* status = #final
* category = $observation-category#laboratory
* code = $loinc#17856-6 "Hemoglobin A1c/Hemoglobin.total in Blood by HPLC"
* subject = Reference(Patient/eumfh-39-07)
* effectiveDateTime = "2017-11-10T08:20:00+01:00"
* performer = Reference(TII-Organization1)
* valueQuantity = 7.5 '%' "%"
* note.text = "Above stated goal of 7.0 %"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/observation-imaging-example-1.fsh

Instance: ips-example-imaging-1-of-Observation
InstanceOf: Observation
Title: "Observation - Result Imaging CT Abdomen with Contrast IV"
Description: "Observation - Result Imaging CT Abdomen with Contrast IV"
Usage: #example
* id = "ips-example-imaging-1"
* status = #final
* category = $observation-category#imaging "Imaging"
* code = $loinc#79103-8 "CT Abdomen W contrast IV"
* code.text = "Upper abdomen with the administration of oral and intravenous contrast (example-4)"
* subject = Reference(Patient/eumfh-39-07)
* effectiveDateTime = "1995-06-08"
* performer[0] = Reference(Practitioner/eumfh-39-07)
* performer[+] = Reference(TII-Organization1)
* valueString = "3 cm nodule present in the inferior medial aspect of right liver lobe. Contrast enhancement pattern consistent with the diagnosis of hemangioma."

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/observation-imaging-example-4.fsh

Instance: ips-example-imaging-4
InstanceOf: Observation
Title: "Observation - Result Imaging CT Abdomen with Contrast IV, Sub-observations"
Description: "Observation - Result Imaging CT Abdomen with Contrast IV, Sub-observations"
Usage: #example
* partOf = Reference(TII-ImagingStudy-5-1)
* status = #final
* category = $observation-category#imaging "Imaging"
* code = $loinc#79103-8 "CT Abdomen W contrast IV"
* code.text = "Upper abdomen with the administration of oral and intravenous contrast (example-4)"
* subject = Reference(Patient/eumfh-39-07)
* effectiveDateTime = "1995-06-08"
* performer[0] = Reference(Practitioner/eumfh-39-07)
* performer[+] = Reference(TII-Organization1)
* valueString = "3 cm nodule present in the inferior medial aspect of right liver lobe. Contrast enhancement pattern consistent with the diagnosis of hemangioma."
* component[0].code = $DCM#121065 "Procedure Description"
* component[=].valueString = "Serial imaging was obtained in the upper abdomen with the administration of oral and intravenous contrast."
* component[+].code = $DCM#121071 "Finding"
* component[=].valueString = "The examination demonstrates a well circumscribed 3 cm lesion present within the medial aspect of the inferior right liver lobe. Initial evaluation demonstrates lack of contrast enhancement. Subsequent imaging (not shown) demonstrated typical contrast enhancement pattern of a benign hemangioma of the liver. The remaining contrast enhancement pattern in the liver is normal. There is normal appearance of the adrenal glands, spleen, kidneys, and pancreas. There is no evidence of liver metastasis."

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/observation-imaging-example-with-numeric-range-measurement.fsh

Instance: ips-example-imaging-5
InstanceOf: Observation
Title: "Observation - Result Imaging Chest X-ray - PA and Aateral, with Additional Sub-observation Including Numeric Range"
Description: "Observation - Result Imaging Chest X-ray - PA and Aateral, with Additional Sub-observation Including Numeric Range"
Usage: #example
* partOf = Reference(TII-ImagingStudy-5-1)
* status = #final
* category = $observation-category#imaging "Imaging"
* code = $loinc#42272-5 "XR Chest PA and Lateral"
* code.text = "Chest X-ray - PA and lateral"
* subject = Reference(Patient/eumfh-39-07)
* effectiveDateTime = "1995-06-08"
* performer[0] = Reference(Practitioner/eumfh-39-07)
* performer[+] = Reference(TII-Organization1)
* valueString = "FINDINGS: Normal cardiomediastinal silhouette. No focal parenchymal process. No pleural effusions. No pneumothorax. No acute osseous abnormalities. IMPRESSION: No acute cardiopulmonary findings."
* component[0].code = $loinc#38181-4 "XR Chest Diameter.lateral"
* component[=].valueRange.low = 27.8 'cm' "cm"
* component[=].valueRange.high = 29.6 'cm' "cm"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/observation-pathology-cancer.fsh

Instance: pathology-cancer
InstanceOf: Observation
Title: "Observation - Result Estrogen Receptor in Tissue Example"
Description: "Observation - Result Estrogen Receptor in Tissue Example"
Usage: #example
* status = #final
* category = $observation-category#laboratory
* code = $loinc#16112-5 "Estrogen receptor [Interpretation] in Tissue"
* subject = Reference(Patient/eumfh-39-07)
* effectiveDateTime = "2020-04-22T19:20:00+02:00"
* performer = Reference(TII-Organization1)
* valueCodeableConcept = $sct#416053008 "Estrogen receptor positive tumor"
* method = $sct#117259009 "Microscopy"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/observation-pregnancy-edd-1.fsh

Instance: pregnancy-edd-example
InstanceOf: Observation
Title: "Observation - Pregnancy Expected Delivery Date (EDD)"
Description: "Observation - Pregnancy Expected Delivery Date (EDD)"
Usage: #example
* status = #final
* code = $loinc#11778-8 "Delivery date Estimated"
* subject = Reference(patient-example-female)
* effectiveDateTime = "2020-01-10"
* performer = Reference(eumfh-39-07)
* valueDateTime = "2020-05-02"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/observation-pregnancy-outcome-1.fsh

Instance: pregnancy-outcome-example
InstanceOf: Observation
Title: "Observation - Pregnancy Outcome"
Description: "Observation - Pregnancy Outcome"
Usage: #example
* status = #final
* code = $loinc#11640-0 "[#] Births total"
* subject = Reference(patient-example-female)
* effectiveDateTime = "2020-01-10"
* performer = Reference(eumfh-39-07)
* valueQuantity = 1 '1'

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/observation-pregnancy-status-1.fsh

Instance: pregnancy-status-example
InstanceOf: Observation
Title: "Observation - Pregnancy Status"
Description: "Observation - Pregnancy Status"
Usage: #example
* status = #final
* code = $loinc#82810-3 "Pregnancy status"
* subject = Reference(patient-example-female)
* effectiveDateTime = "2020-01-10"
* performer = Reference(eumfh-39-07)
* valueCodeableConcept = $loinc#LA15173-0 "Pregnant"
* hasMember = Reference(pregnancy-edd-example)

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/observation-serum-creatinine-adult.fsh

Instance: serum-creatinine-adult
InstanceOf: Observation
Title: "Observation - Result Serum Creatinine"
Description: "Observation - Result Serum Creatinine"
Usage: #example
* status = #final
* category = $observation-category#laboratory
* code = $loinc#2160-0 "Creatinine [Mass/volume] in Serum or Plasma"
* subject = Reference(Patient/eumfh-39-07)
* effectiveDateTime = "2018-02-16T09:17:00+01:00"
* performer = Reference(TII-Organization1)
* valueQuantity = 2.46 'mg/dL' "mg/dL"
* interpretation = $v3-ObservationInterpretation#H
* referenceRange[0].low = 0.76 'mg/dL' "mg/dL"
* referenceRange[=].high = 1.27 'mg/dL' "mg/dL"
* referenceRange[=].type = $referencerange-meaning#normal "Normal Range"
* referenceRange[=].appliesTo = $sct#248153007 "Male"
* referenceRange[=].age.low = 15 'a' "yrs"
* referenceRange[+].low = 0.57 'mg/dL' "mg/dL"
* referenceRange[=].high = 1 'mg/dL' "mg/dL"
* referenceRange[=].type = $referencerange-meaning#normal "Normal Range"
* referenceRange[=].appliesTo = $sct#248152002 "Female"
* referenceRange[=].age.low = 15 'a' "yrs"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/observation-tobaccouse-1.fsh

Instance: tobacco-use-example
InstanceOf: Observation
Title: "Observation - Social History Tobacco Use"
Description: "Observation - Social History Tobacco Use"
Usage: #example
* status = #final
* code = $loinc#72166-2 "Tobacco smoking status"
* subject = Reference(patient-example-female)
* effectiveDateTime = "2019-07-15"
* performer = Reference(eumfh-39-07)
* valueCodeableConcept = $loinc#LA15920-4 "Former smoker"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/observation-urine-wbc-range.fsh

Instance: urine-wbc-range
InstanceOf: Observation
Title: "Observation - Result Urine White Blood Cell (WBC) Range"
Description: "Observation - Result Urine White Blood Cell (WBC) Range"
Usage: #example
* status = #final
* category = $observation-category#laboratory
* code = $loinc#5821-4 "Leukocytes [#/area] in Urine sediment by Microscopy high power field"
* subject = Reference(66033)
* effectiveDateTime = "2018-02-16T09:17:00+01:00"
* performer = Reference(TII-Organization1)
* valueQuantity = 10 '/[HPF]' "per HPF"
* interpretation = $v3-ObservationInterpretation#H
* referenceRange.high = 5 '/[HPF]' "per HPF"
* referenceRange.type = $referencerange-meaning#normal "Normal Range"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/organization-imaging-example-1.fsh

Instance: TII-Organization1
InstanceOf: Organization
Title: "Organization - Hospital"
Description: "Organization - Hospital"
Usage: #example
* name = "Someplace General Hospital"
* address.line = "123 Street Address"
* address.city = "Sometown"
* address.country = "Somecountry"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/organization-lab-example-1.fsh

Instance: lab-org-example
InstanceOf: Organization
Title: "Organization - Laboratory"
Description: "Organization - Laboratory"
Usage: #example
* active = true
* type = $sct#73588009 "Hospital-based laboratory facility"
* name = "Best Hospital Laboratory"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/Organization-simple-org.fsh

Instance: simple-org
InstanceOf: Organization
Title: "Organization - Minimal Name Only"
Description: "Organization - Minimal Name Only"
Usage: #example
* name = "Best Diagnostic Department"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/patient-39-07-1.fsh

Instance: eumfh-39-07-of-Patient
InstanceOf: Patient
Title: "Patient - Male Alexander Hieg"
Description: "Patient - Male Alexander Hieg"
Usage: #example
* id = "eumfh-39-07"
* extension.url = "http://hl7.org/fhir/StructureDefinition/patient-citizenship"
* extension.extension.url = "code"
* extension.extension.valueCodeableConcept = urn:iso:std:iso:3166#US "United States of America"
* identifier[0].system = "http://trilliumbridge.eu/fhir/demos/eumfh/inject"
* identifier[=].value = "39-07"
* identifier[+].system = "http://trilliumbridge.eu/fhir/demos/eumfh/patient_id"
* identifier[=].value = "EUR01P0001"
* active = true
* name.family = "Heig"
* name.given = "Alexander"
* gender = #male
* birthDate = "1957"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/Patient-66033.fsh

Instance: 66033
InstanceOf: Patient
Title: "Patient - Female Minimal Marie Lux-Brennard"
Description: "Patient - Female Minimal Marie Lux-Brennard"
Usage: #example
* identifier[0].system = "urn:oid:1.3.182.4.4"
* identifier[=].value = "1998041799999"
* identifier[+].system = "urn:ietf:rfc:3986"
* identifier[=].value = "urn:uuid:647515ed-0d5e-4c99-b23d-073fbc593f76"
* name.family = "Lux-Brennard"
* name.given = "Marie"
* gender = #female
* birthDate = "1998-04-17"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/patient-example-female.fsh

Instance: patient-example-female
InstanceOf: Patient
Title: "Patient - Female Martha DeLarosa"
Description: "Patient - Female Martha DeLarosa"
Usage: #example
* identifier.system = "urn:oid:2.16.840.1.113883.2.4.6.3"
* identifier.value = "574687583"
* active = true
* name.family = "DeLarosa"
* name.given = "Martha"
* telecom.system = #phone
* telecom.value = "+31788700800"
* telecom.use = #home
* gender = #female
* birthDate = "1992-05-01"
* address.line = "Laan Van Europa 1600"
* address.city = "Dordrecht"
* address.postalCode = "3317 DB"
* address.country = "NL"
* contact.relationship = $v3-RoleCode#MTH
* contact.name.family = "Mum"
* contact.name.given = "Martha"
* contact.telecom.system = #phone
* contact.telecom.value = "+33-555-20036"
* contact.telecom.use = #home
* contact.address.line = "Promenade des Anglais 111"
* contact.address.city = "Lyon"
* contact.address.postalCode = "69001"
* contact.address.country = "FR"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/practictioner-39-07-1.fsh

Instance: eumfh-39-07-of-Practitioner
InstanceOf: Practitioner
Title: "Practitioner - Dr. Mark Antonio"
Description: "Practitioner - Dr. Mark Antonio"
Usage: #example
* id = "eumfh-39-07"
* name.family = "Antonio"
* name.given = "Mark"
* name.prefix = "Dr."

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/PractitionerRole-simple-pr.fsh

Instance: simple-pr
InstanceOf: PractitionerRole
Title: "PractitionerRole - Minimal"
Description: "PractitionerRole - Minimal"
Usage: #example
* practitioner = Reference(Practitioner/eumfh-39-07)
* organization = Reference(simple-org)

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/procedure-39-07-1.fsh

Instance: eumfh-39-07-1-of-Procedure
InstanceOf: Procedure
Title: "Procedure - Surgical Placement of Coronary Stent"
Description: "Procedure - Surgical Placement of Coronary Stent"
Usage: #example
* id = "eumfh-39-07-1"
* status = #completed
* category = $sct#387713003 "Surgical procedure"
* code.coding[0] = $sct#36969009 "Placement of stent in coronary artery"
* code.coding[+] = $sct#233258006 "Balloon angioplasty of artery"
* code.text = "Previous balloon angioplasty on mid-LAD stenosis with STENT Implantation"
* subject = Reference(Patient/eumfh-39-07) "Alexander Heig (inject 39-07)"
* performedPeriod.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* performedPeriod.extension.valueCode = #unknown

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/instances/specimen-example-1.fsh

Instance: specimen-example-1
InstanceOf: Specimen
Title: "Specimen: example"
Description: "Specimen: example"
Usage: #example
* type = $sct#122575003 "Urine specimen"
* subject = Reference(66033)
* collection.method = $sct#73416001 "Urine specimen collection, clean catch"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/invariants/bdl-ips-1.fsh

Invariant: bdl-ips-1
Description: "An IPS document must have no additional Composition (including Composition subclass) resources besides the first."
* severity = #error
* expression = "entry.tail().where(resource is Composition).empty()"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/invariants/hasMemberOrComponent.fsh

Invariant: hasMemberOrComponent
Description: "component and hasMember are mutually exclusive"
* severity = #error
* expression = "hasMember.empty() or component.empty()"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/invariants/ips-1.fsh

Invariant: ips-1
Description: "Datetime must be at least to day."
* severity = #error
* expression = "$this.ofType(dateTime).empty() or ($this as dateTime).toString().length() >= 8"
* xpath = "not(boolean(effectiveDateTime)) or f:matches(effectiveDateTime,/\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d([+-][0-2]\\d:[0-5]\\d|Z)/)"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/invariants/ips-2.fsh

Invariant: ips-2
Description: "At least one of these Observation elements shall be provided:  \"value\", \"dataAbsentReason\", \"hasMember\" or \"component\""
Severity: #error
Expression: "value.exists() or hasMember.exists() or component.exists() or dataAbsentReason.exists()"


---

File: repos/HL7_SLASH_fhir-ips/input/fsh/invariants/ips-3.fsh

Invariant: ips-3
Description: "If observation has components, at least one of these Observation.component elements shall be provided:  \"value\" or \"dataAbsentReason\""
Severity: #error
Expression: "component.exists() implies (component.value.exists() or component.dataAbsentReason.exists())"


---

File: repos/HL7_SLASH_fhir-ips/input/fsh/invariants/ips-comp-1.fsh

Invariant: ips-comp-1
Description: "Either section.entry or emptyReason are present"
* severity = #error
* expression = "(entry.reference.exists() or emptyReason.exists())"
* xpath = "(/f:entry.reference and not /f:emptyReason) or (not(/f:emptyReason) and /f:entry.reference)"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/invariants/ips-pat-1.fsh

Invariant: ips-pat-1
Description: "Patient.name.given, Patient.name.family or Patient.name.text SHALL be present"
* severity = #error
* expression = "family.exists() or given.exists() or text.exists()"
* xpath = "f:given or f:family or f:text"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/AllergyIntoleranceUvIps.fsh

Profile: AllergyIntoleranceUvIps
Parent: AllergyIntolerance
Id: AllergyIntolerance-uv-ips
Title: "AllergyIntolerance (IPS)"
Description: """This profile represents the constraints applied to the AllergyIntolerance resource by the International Patient Summary (IPS) FHIR Implementation Guide. A record of an allergy or intolerance is represented in the patient summary as an instance of an AllergyIntolerance resource constrained by this profile.

It documents the relevant allergies or intolerances (conditions) for a patient, describing the kind of reaction (e.g. rash, anaphylaxis,..); preferably the agents that cause it; and optionally the criticality and the certainty of the allergy."""
* ^version = "1.1.0"
* ^status = #active
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^purpose = "This profile constrains the representation of a record of an allergy or intolerance of the patient, in the context of the international patient summary as specified by the IPS project of HL7 International."
* extension contains $allergyintolerance-abatement named abatement 0..1
* clinicalStatus only CodeableConceptIPS
* verificationStatus only CodeableConceptIPS
* verificationStatus ^comment = "In the scope of the IPS the entered-in-error concept is not allowed."
* type MS
* code 1..1 MS
* code only CodeableConceptIPS
* code from AllergyIntoleranceUvIps (preferred)
* code ^binding.extension[0].extension[0].url = "purpose"
* code ^binding.extension[=].extension[=].valueCode = #candidate
* code ^binding.extension[=].extension[+].url = "valueSet"
* code ^binding.extension[=].extension[=].valueCanonical = "http://hl7.org/fhir/uv/ips/ValueSet/whoatc-uv-ips"
* code ^binding.extension[=].extension[+].url = "documentation"
* code ^binding.extension[=].extension[=].valueMarkdown = "Type of the substance/product, allergy or intolerance condition."
* code ^binding.extension[=].url = "http://hl7.org/fhir/tools/StructureDefinition/additional-binding"
* code ^binding.description = "Type of the substance/product, allergy or intolerance condition or a code for absent/unknown allergy."
* patient only Reference(PatientUvIps)
* patient MS
* patient.reference 1.. MS
* onset[x] only dateTime or Age or Period or Range or string
* onset[x] MS
* onset[x] ^type.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* onset[x] ^type.extension.valueBoolean = true
* reaction MS
* reaction.manifestation only CodeableConceptIPS
* reaction.manifestation MS
* reaction.manifestation from AllergyReactionUvIps (preferred)
* reaction.manifestation ^binding.description = "Code for the allergy or intolerance reaction manifestation from SNOMED CT."
* reaction.severity MS

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/BundleUvIps.fsh

Profile: BundleUvIps
Parent: Bundle
Id: Bundle-uv-ips
Title: "Bundle (IPS)"
Description: "This profile represents the constraints applied to the Bundle resource by the International Patient Summary (IPS) FHIR Implementation Guide."
* ^version = "1.1.0"
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^purpose = "An International Patient Summary (IPS) bundle is an electronic health record extract containing essential healthcare information about a subject of care, comprising at least the required elements of the IPS dataset. The IPS dataset is minimal and non-exhaustive; specialty-agnostic and condition-independent; but still clinically relevant. As specified in ISO 27269, it is designed for supporting the use case scenario for ‘unplanned, cross border care’, but it is not limited to it. It is intended to be international, i.e., to provide generic solutions for global application beyond a particular region or country."
* obeys bdl-ips-1
* . ^short = "International Patient Summary Bundle"
* . ^definition = "International Patient Summary Bundle. \r\nA container for a collection of resources in the patient summary document."
* identifier 1.. MS
* type = #document (exactly)
* timestamp 1.. MS
* entry MS
* entry ^slicing.discriminator[0].type = #type
* entry ^slicing.discriminator[=].path = "resource"
* entry ^slicing.discriminator[+].type = #profile
* entry ^slicing.discriminator[=].path = "resource"
* entry ^slicing.rules = #open
* entry ^short = "Entry resource in the patient summary bundle"
* entry ^definition = "An entry resource included in the patient summary document bundle resource."
* entry ^comment = "Must contain the IPS Composition as the first entry (only a single Composition resource instance may be included) and a Patient resource.  Additional constraints are specified in the IPS Composition profile."
* entry.fullUrl 1.. MS
* entry.search ..0
* entry.request ..0
* entry.response ..0
* entry contains
    composition 1..1 and
    patient 1..1 and
    allergyintolerance 0..* and
    condition 0..* and
    device 0..* and
    deviceusestatement 0..* and
    diagnosticreport 0..* and
    imagingstudy 0..* and
    immunization 0..* and
    medication 0..* and
    medicationrequest 0..* and
    medicationstatement 0..* and
    practitioner 0..* and
    practitionerrole 0..* and
    procedure 0..* and
    organization 0..* and
    observation-pregnancy-edd 0..* and
    observation-pregnancy-outcome 0..* and
    observation-pregnancy-status 0..* and
    observation-alcohol-use 0..* and
    observation-tobacco-use 0..* and
    observation-results-laboratory-pathology 0..* and
    observation-results-radiology 0..* and
    observation-vital-signs 0..* and
    specimen 0..* and
    flag 0..* and
    clinicalimpression 0..* and
    careplan 0..* and
    consent 0..* and
    documentreference 0..*
* entry[composition].resource 1..
* entry[composition].resource only CompositionUvIps
* entry[patient].resource 1..
* entry[patient].resource only PatientUvIps
* entry[allergyintolerance].resource 1..
* entry[allergyintolerance].resource only AllergyIntoleranceUvIps
* entry[condition].resource 1..
* entry[condition].resource only ConditionUvIps
* entry[device].resource 1..
* entry[device].resource only Device
* entry[deviceusestatement].resource 1..
* entry[deviceusestatement].resource only DeviceUseStatementUvIps
* entry[diagnosticreport].resource 1..
* entry[diagnosticreport].resource only DiagnosticReportUvIps
* entry[imagingstudy].resource 1..
* entry[imagingstudy].resource only ImagingStudyUvIps
* entry[immunization].resource 1..
* entry[immunization].resource only ImmunizationUvIps
* entry[medication].resource 1..
* entry[medication].resource only MedicationIPS
* entry[medicationrequest].resource 1..
* entry[medicationrequest].resource only MedicationRequestIPS
* entry[medicationstatement].resource 1..
* entry[medicationstatement].resource only MedicationStatementIPS
* entry[practitioner].resource 1..
* entry[practitioner].resource only PractitionerUvIps
* entry[practitionerrole].resource 1..
* entry[practitionerrole].resource only PractitionerRoleUvIps
* entry[procedure].resource 1..
* entry[procedure].resource only ProcedureUvIps
* entry[organization].resource 1..
* entry[organization].resource only OrganizationUvIps
* entry[observation-pregnancy-edd].resource 1..
* entry[observation-pregnancy-edd].resource only ObservationPregnancyEddUvIps
* entry[observation-pregnancy-outcome].resource 1..
* entry[observation-pregnancy-outcome].resource only ObservationPregnancyOutcomeUvIps
* entry[observation-pregnancy-status].resource 1..
* entry[observation-pregnancy-status].resource only ObservationPregnancyStatusUvIps
* entry[observation-alcohol-use].resource 1..
* entry[observation-alcohol-use].resource only ObservationAlcoholUseUvIps
* entry[observation-tobacco-use].resource 1..
* entry[observation-tobacco-use].resource only ObservationTobaccoUseUvIps
* entry[observation-results-laboratory-pathology].resource 1..
* entry[observation-results-laboratory-pathology].resource only ObservationResultsLaboratoryPathologyUvIps
* entry[observation-results-radiology].resource 1..
* entry[observation-results-radiology].resource only ObservationResultsRadiologyUvIps
* entry[observation-vital-signs].resource 1..
* entry[observation-vital-signs].resource only $vital-signs-profile
* entry[specimen].resource 1..
* entry[specimen].resource only SpecimenUvIps
* entry[flag].resource 1..
* entry[flag].resource only FlagAlertUvIps
* entry[clinicalimpression].resource 1..
* entry[clinicalimpression].resource only ClinicalImpression
* entry[careplan].resource 1..
* entry[careplan].resource only CarePlan
* entry[consent].resource 1..
* entry[consent].resource only Consent
* entry[documentreference].resource 1..
* entry[documentreference].resource only DocumentReference

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/CodeableConceptIPS.fsh

Profile: CodeableConceptIPS
Parent: CodeableConcept
Id: CodeableConcept-uv-ips
Title: "Codeable Concept (IPS)"
Description: "This profile represents the constraint applied to the CodeableConcept data type by the International Patient Summary (IPS) FHIR Implementation Guide to use the Coding-uv-ips data type profile."
* ^version = "1.1.0"
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* coding only CodingIPS
* coding MS
* text MS
* text ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable"
* text ^extension[=].valueBoolean = true

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/CodingIPS.fsh

Profile: CodingIPS
Parent: Coding
Id: Coding-uv-ips
Title: "Coding with translations"
Description: """This profile extends the capabilities of the coding data type to support multi-language designations (display).
It relies on the Translation extension."""
* ^version = "1.1.0"
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* system MS
* code MS
* display MS
* display.extension ^slicing.discriminator.type = #value
* display.extension ^slicing.discriminator.path = "url"
* display.extension ^slicing.rules = #open
* display.extension contains Translation named translation 0..*
* display.extension[translation] ^short = "Language Translation (Localization)"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/CompositionUvIps.fsh

Profile: CompositionUvIps
Parent: Composition
Id: Composition-uv-ips
Title: "Composition (IPS)"
Description: """Clinical document used to represent the International Patient Summary (IPS) data set. 
An International Patient Summary (IPS) document is an electronic health record extract containing essential healthcare information about a subject of care. 
The IPS dataset is minimal and non-exhaustive; specialty-agnostic and condition-independent; but still clinically relevant. As specified in ISO 27269, it is designed for supporting the use case scenario for ‘unplanned, cross border care’, but it is not limited to it. It is intended to be international, i.e., to provide generic solutions for global application beyond a particular region or country.
"""
* ^version = "1.1.0"
* ^status = #active
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^purpose = "An International Patient Summary (IPS) document is an electronic health record extract containing essential healthcare information about a subject of care, comprising at least the required elements of the IPS dataset. The IPS dataset is minimal and non-exhaustive; specialty-agnostic and condition-independent; but still clinically relevant. As specified in ISO 27269, it is designed for supporting the use case scenario for ‘unplanned, cross border care’, but it is not limited to it. It is intended to be international, i.e., to provide generic solutions for global application beyond a particular region or country."
* ^copyright = "HL7 International"
* . ^short = "International Patient Summary composition"
* . ^definition = "International Patient Summary composition. \r\nA composition is a set of healthcare-related information that is assembled together into a single logical document that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. \r\nWhile a Composition defines the structure, it does not actually contain the content: rather the full content of a document is contained in a Bundle, of which the Composition is the first resource contained."
* text MS
* identifier MS
* status MS
* type only CodeableConceptIPS
* type = $loinc#60591-5
* type MS
* type ^short = "Kind of composition (\"Patient Summary\")"
* type ^definition = "Specifies that this composition refers to a Patient Summary (Loinc \"60591-5\")\r\n"
* subject 1.. MS
* subject only Reference(PatientUvIps)
* subject ^definition = "Who or what the composition is about. \r\nIn general a composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure).\r\nFor the IPS the subject is always the patient."
* subject.reference 1.. MS
* date MS
* author MS
* author ^short = "Who and/or what authored the IPS"
* author ^definition = "Identifies who is responsible for the information in the IPS, not necessarily who typed it in.\r\n\r\nThe type of author(s) contribute to determine the \"nature\"of the Patient Summary: e.g. a \"human-curated\" IPS Vs. an \"automatically generated\" IPS."
* title MS
* title ^short = "International Patient Summary"
* title ^definition = "Official human-readable label for the composition.\r\n\r\nFor this document should be \"International Patient Summary\" or any equivalent translation"
* attester MS
* attester.mode MS
* attester.time MS
* attester.party MS
* custodian MS
* relatesTo.target[x] only Identifier or Reference(Composition or CompositionUvIps)
* event ^slicing.discriminator[0].type = #pattern
* event ^slicing.discriminator[=].path = "code"
* event ^slicing.rules = #open
* event ^definition = "The main activity being described by a IPS is the provision of healthcare over a period of time. \r\nIn the CDA representation of the IPS this is shown by setting the value of serviceEvent/@classCode to “PCPR” (care provision) and indicating the duration over which care was provided in serviceEvent/effectiveTime. \r\nIn the FHIR representation at least one event should be used to record this information.\r\nAdditional data from outside this duration may also be included if it is relevant to care provided during that time range (e.g., reviewed during the stated time range). For example if the IPS is generated by a GP based on information recorded in his/her EHR-S, then the start value should represent the date when the treatment relationship between the patient and the GP started; and the end value the date of the latest care event."
* event contains careProvisioningEvent 0..1 MS
* event[careProvisioningEvent] ^short = "The care provisioning being documented"
* event[careProvisioningEvent] ^definition = "The provision of healthcare over a period of time this IPS is documenting."
* event[careProvisioningEvent].code 1..1 MS
* event[careProvisioningEvent].code = $v3-ActClass#PCPR
* event[careProvisioningEvent].period MS
* section 1.. MS
* section ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section ^extension[=].valueString = "Section"
* section ^slicing.discriminator[0].type = #pattern
* section ^slicing.discriminator[=].path = "code"
* section ^slicing.ordered = false
* section ^slicing.rules = #open
* section ^short = "Sections composing the IPS"
* section ^definition = "The root of the sections that make up the IPS composition."
* section.extension contains $composition-section-note named section-note 0..1
* section.extension[section-note] ^short = "Additional notes that apply to the section (but not to specific resource)."
* section.extension[section-note] ^definition = "Additional notes that apply to the section (but not to specific resource)."
* section.text 1.. MS
* section.section ..0
* section contains
    sectionProblems 1..1 MS and
    sectionAllergies 1..1 MS and
    sectionMedications 1..1 MS and
    sectionImmunizations 0..1 MS and
    sectionResults 0..1 MS and
    sectionProceduresHx 0..1 MS and
    sectionMedicalDevices 0..1 MS and
    sectionAdvanceDirectives 0..1 and
    sectionAlerts 0..1 and
    sectionFunctionalStatus 0..1 and
    sectionPastIllnessHx 0..1 and
    sectionPregnancyHx 0..1 and
    sectionPatientStory 0..1 and
    sectionPlanOfCare 0..1 and
    sectionSocialHistory 0..1 and
    sectionVitalSigns 0..1
* section[sectionProblems] obeys ips-comp-1
* section[sectionProblems] ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionProblems] ^extension[=].valueString = "Section"
* section[sectionProblems] ^short = "IPS Problems Section"
* section[sectionProblems] ^definition = "The IPS problem section lists and describes clinical problems or conditions currently being monitored for the patient."
* section[sectionProblems].title 1.. MS
* section[sectionProblems].code 1..
* section[sectionProblems].code only CodeableConceptIPS
* section[sectionProblems].code = $loinc#11450-4
* section[sectionProblems].entry only Reference(Condition or DocumentReference)
* section[sectionProblems].entry MS
* section[sectionProblems].entry ^slicing.discriminator[0].type = #profile
* section[sectionProblems].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionProblems].entry ^slicing.rules = #open
* section[sectionProblems].entry ^short = "Clinical problems or conditions currently being monitored for the patient."
* section[sectionProblems].entry ^definition = "It lists and describes clinical problems or conditions currently being monitored for the patient.  This entry shall be used to document that no information about problems is available, or that no relevant problems are known."
* section[sectionProblems].entry contains problem 0..* MS
* section[sectionProblems].entry[problem] only Reference(ConditionUvIps)
* section[sectionAllergies] obeys ips-comp-1
* section[sectionAllergies] ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionAllergies] ^extension[=].valueString = "Section"
* section[sectionAllergies] ^short = "IPS Allergies and Intolerances Section"
* section[sectionAllergies] ^definition = "This section documents the relevant allergies or intolerances (conditions) for that patient, describing the kind of reaction (e.g. rash, anaphylaxis,..); preferably the agents that cause it; and optionally the criticality and the certainty of the allergy.\r\nAt a minimum, it should list currently active and any relevant historical allergies and adverse reactions.\r\nIf no information about allergies is available, or if no allergies are known this should be clearly documented in the section."
* section[sectionAllergies].title 1.. MS
* section[sectionAllergies].code 1..
* section[sectionAllergies].code only CodeableConceptIPS
* section[sectionAllergies].code = $loinc#48765-2
* section[sectionAllergies].entry only Reference(AllergyIntolerance or DocumentReference)
* section[sectionAllergies].entry MS
* section[sectionAllergies].entry ^slicing.discriminator[0].type = #profile
* section[sectionAllergies].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionAllergies].entry ^slicing.rules = #open
* section[sectionAllergies].entry ^short = "Relevant allergies or intolerances (conditions) for that patient."
* section[sectionAllergies].entry ^definition = "It lists the relevant allergies or intolerances (conditions) for that patient, describing the kind of reaction (e.g. rash, anaphylaxis,..); preferably the agents that cause it; and optionally the criticality and the certainty of the allergy.\r\nAt a minimum, it should list currently active and any relevant historical allergies and adverse reactions.\r\n This entry shall be used to document that no information about allergies is available, or that no allergies are known ."
* section[sectionAllergies].entry contains allergyOrIntolerance 0..* MS
* section[sectionAllergies].entry[allergyOrIntolerance] only Reference(AllergyIntoleranceUvIps)
* section[sectionMedications] obeys ips-comp-1
* section[sectionMedications] ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionMedications] ^extension[=].valueString = "Section"
* section[sectionMedications] ^short = "IPS Medication Summary Section"
* section[sectionMedications] ^definition = "The medication summary section contains a description of the patient's medications relevant for the scope of the patient summary.\r\nThe actual content could depend on the jurisdiction, it could report:\r\n- the currently active medications; \r\n- the current and past medications considered relevant by the authoring GP; \r\n- the patient prescriptions or dispensations automatically extracted by a regional or a national EHR.\r\n\r\nIn those cases medications are documented in the Patient Summary as medication statements or medication requests.\r\nThis section requires either an entry indicating the subject is known not to be on any relevant medication; either an entry indicating that no information is available about medications; or entries summarizing the subject's relevant medications."
* section[sectionMedications].title 1.. MS
* section[sectionMedications].title ^short = "Medication Summary section"
* section[sectionMedications].title ^definition = "The label for this particular section.  This will be part of the rendered content for the document, and is often used to build a table of contents.\r\n\r\nMedication Summary "
* section[sectionMedications].code 1..
* section[sectionMedications].code only CodeableConceptIPS
* section[sectionMedications].code = $loinc#10160-0
* section[sectionMedications].entry only Reference(MedicationStatement or MedicationRequest or MedicationAdministration or MedicationDispense or DocumentReference)
* section[sectionMedications].entry MS
* section[sectionMedications].entry ^slicing.discriminator[0].type = #profile
* section[sectionMedications].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionMedications].entry ^slicing.rules = #open
* section[sectionMedications].entry ^short = "Medications relevant for the scope of the patient summary"
* section[sectionMedications].entry ^definition = "This list the medications relevant for the scope of the patient summary or it is used to indicate that the subject is known not to be on any relevant medication; either that no information is available about medications."
* section[sectionMedications].entry contains
    medicationStatement 0..* and
    medicationRequest 0..*
* section[sectionMedications].entry[medicationStatement] only Reference(MedicationStatementIPS)
* section[sectionMedications].entry[medicationRequest] only Reference(MedicationRequestIPS)
* section[sectionImmunizations] ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionImmunizations] ^extension[=].valueString = "Section"
* section[sectionImmunizations] ^short = "IPS Immunizations Section"
* section[sectionImmunizations] ^definition = "The Immunizations Section defines a patient's current immunization status and pertinent immunization history.\r\nThe primary use case for the Immunization Section is to enable communication of a patient's immunization status.\r\nThe section includes the current immunization status, and may contain the entire immunization history that is relevant to the period of time being summarized."
* section[sectionImmunizations].title 1.. MS
* section[sectionImmunizations].code 1..
* section[sectionImmunizations].code only CodeableConceptIPS
* section[sectionImmunizations].code = $loinc#11369-6
* section[sectionImmunizations].entry only Reference(Immunization or DocumentReference)
* section[sectionImmunizations].entry MS
* section[sectionImmunizations].entry ^slicing.discriminator[0].type = #profile
* section[sectionImmunizations].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionImmunizations].entry ^slicing.rules = #open
* section[sectionImmunizations].entry ^short = "Patient's immunization status and pertinent history."
* section[sectionImmunizations].entry ^definition = "It defines the patient's current immunization status and pertinent immunization history.\r\nThe primary use case for the Immunization Section is to enable communication of a patient's immunization status.\r\nIt may contain the entire immunization history that is relevant to the period of time being summarized. This entry shall be used to document that no information about immunizations is available, or that no immunizations are known."
* section[sectionImmunizations].entry contains immunization 0..* MS
* section[sectionImmunizations].entry[immunization] only Reference(ImmunizationUvIps)
* section[sectionResults] ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionResults] ^extension[=].valueString = "Results Section"
* section[sectionResults] ^short = "IPS Results Section"
* section[sectionResults] ^definition = "This section assembles relevant observation results collected on the patient or produced on in-vitro biologic specimens collected from the patient. Some of these results may be laboratory results, others may be anatomic pathology results, others, radiology results, and others, clinical results."
* section[sectionResults].title 1.. MS
* section[sectionResults].code 1..
* section[sectionResults].code only CodeableConceptIPS
* section[sectionResults].code = $loinc#30954-2
* section[sectionResults].entry only Reference(Observation or DiagnosticReport or DocumentReference)
* section[sectionResults].entry MS
* section[sectionResults].entry ^slicing.discriminator[0].type = #type
* section[sectionResults].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionResults].entry ^slicing.discriminator[+].type = #profile
* section[sectionResults].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionResults].entry ^slicing.rules = #open
* section[sectionResults].entry ^short = "Relevant observation results collected on the patient or produced on in-vitro biologic specimens collected from the patient."
* section[sectionResults].entry ^definition = "Relevant observation results collected on the patient or produced on in-vitro biologic specimens collected from the patient. Some of these results may be laboratory results, others may be anatomic pathology results, others, radiology results, and others, clinical results."
* section[sectionResults].entry contains
    results-observation-laboratory-pathology 0..* MS and
    results-observation-radiology 0..* MS and
    results-diagnosticReport 0..* MS
* section[sectionResults].entry[results-observation-laboratory-pathology] only Reference(ObservationResultsLaboratoryPathologyUvIps)
* section[sectionResults].entry[results-observation-radiology] only Reference(ObservationResultsRadiologyUvIps)
* section[sectionResults].entry[results-diagnosticReport] only Reference(DiagnosticReportUvIps)
* section[sectionProceduresHx] ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionProceduresHx] ^extension[=].valueString = "Section"
* section[sectionProceduresHx] ^short = "IPS History of Procedures Section"
* section[sectionProceduresHx] ^definition = "The History of Procedures Section contains a description of the patient past procedures that are pertinent to the scope of this document.\r\nProcedures may refer for example to:\r\n1. Invasive Diagnostic procedure:e.g. Cardiac catheterization; (the results of these procedure are documented in the results section)\r\n2. Therapeutic procedure: e.g. dialysis;\r\n3. Surgical procedure: e.g. appendectomy"
* section[sectionProceduresHx].title 1.. MS
* section[sectionProceduresHx].code 1..
* section[sectionProceduresHx].code only CodeableConceptIPS
* section[sectionProceduresHx].code = $loinc#47519-4
* section[sectionProceduresHx].entry only Reference(Procedure or DocumentReference)
* section[sectionProceduresHx].entry MS
* section[sectionProceduresHx].entry ^slicing.discriminator[0].type = #profile
* section[sectionProceduresHx].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionProceduresHx].entry ^slicing.rules = #open
* section[sectionProceduresHx].entry ^short = "Patient past procedures pertinent to the scope of this document."
* section[sectionProceduresHx].entry ^definition = "It lists the patient past procedures that are pertinent to the scope of this document.\r\nProcedures may refer for example to:\r\n1. Invasive Diagnostic procedure:e.g. Cardiac catheterization; (the results of these procedure are documented in the results section)\r\n2. Therapeutic procedure: e.g. dialysis;\r\n3. Surgical procedure: e.g. appendectomy. This entry shall be used to document that no information about past procedures is available, or that no relevant past procedures are known."
* section[sectionProceduresHx].entry contains procedure 0..* MS
* section[sectionProceduresHx].entry[procedure] only Reference(ProcedureUvIps)
* section[sectionMedicalDevices] ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionMedicalDevices] ^extension[=].valueString = "Section"
* section[sectionMedicalDevices] ^short = "IPS Medical Devices Section"
* section[sectionMedicalDevices] ^definition = "The medical devices section contains narrative text and coded entries describing the patient history of medical device use."
* section[sectionMedicalDevices].title 1.. MS
* section[sectionMedicalDevices].code 1..
* section[sectionMedicalDevices].code only CodeableConceptIPS
* section[sectionMedicalDevices].code = $loinc#46264-8
* section[sectionMedicalDevices].entry only Reference(DeviceUseStatement or DocumentReference)
* section[sectionMedicalDevices].entry MS
* section[sectionMedicalDevices].entry ^slicing.discriminator[0].type = #profile
* section[sectionMedicalDevices].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionMedicalDevices].entry ^slicing.rules = #open
* section[sectionMedicalDevices].entry ^short = "Patient history of medical device use."
* section[sectionMedicalDevices].entry ^definition = "It describes the patient history of medical device use. This entry shall be used to document that no information about medical device use is available, or that no relevant medical device use is known."
* section[sectionMedicalDevices].entry contains deviceStatement 0..* MS
* section[sectionMedicalDevices].entry[deviceStatement] only Reference(DeviceUseStatementUvIps)
* section[sectionAdvanceDirectives] ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionAdvanceDirectives] ^extension[=].valueString = "Section"
* section[sectionAdvanceDirectives] ^short = "IPS Advance Directives Section"
* section[sectionAdvanceDirectives] ^definition = "The advance directives section contains a narrative description of patient's advance directive."
* section[sectionAdvanceDirectives].title 1..
* section[sectionAdvanceDirectives].code 1..
* section[sectionAdvanceDirectives].code only CodeableConceptIPS
* section[sectionAdvanceDirectives].code = $loinc#42348-3
* section[sectionAdvanceDirectives].entry only Reference(Consent or DocumentReference)
* section[sectionAdvanceDirectives].entry ^slicing.discriminator[0].type = #profile
* section[sectionAdvanceDirectives].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionAdvanceDirectives].entry ^slicing.rules = #open
* section[sectionAdvanceDirectives].entry ^short = "Narrative description of the patient's advance directive."
* section[sectionAdvanceDirectives].entry ^definition = "Contains a narrative description or a Consent entry with information about the patient's advance directive."
* section[sectionAdvanceDirectives].entry contains advanceDirectivesConsent 0..*
* section[sectionAdvanceDirectives].entry[advanceDirectivesConsent] only Reference(Consent)
* section[sectionAlerts] ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionAlerts] ^extension[=].valueString = "Section"
* section[sectionAlerts] ^short = "IPS Alerts Section"
* section[sectionAlerts] ^definition = "The alerts section flags potential concerns and/or dangers to/from the patient and may also include obstacles to care."
* section[sectionAlerts].title 1..
* section[sectionAlerts].code 1..
* section[sectionAlerts].code only CodeableConceptIPS
* section[sectionAlerts].code = $loinc#104605-1
* section[sectionAlerts].entry only Reference(Flag or DocumentReference)
* section[sectionAlerts].entry ^slicing.discriminator[0].type = #profile
* section[sectionAlerts].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionAlerts].entry ^slicing.rules = #open
* section[sectionAlerts].entry ^short = "Alert information."
* section[sectionAlerts].entry ^definition = "Contains alert information to be communicated. May optionally reference other resources in IPS."
* section[sectionAlerts].entry contains alertsFlag 0..*
* section[sectionAlerts].entry[alertsFlag] only Reference(FlagAlertUvIps)
* section[sectionFunctionalStatus] ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionFunctionalStatus] ^extension[=].valueString = "Section"
* section[sectionFunctionalStatus] ^short = "IPS Functional Status"
* section[sectionFunctionalStatus] ^definition = "The functional status section shall contain a narrative description of capability of the patient to perform acts of daily living, including possible needs of the patient to be continuously assessed by third parties. The invalidity status may in fact influence decisions about how to administer treatments.\r\nProfiles to express disabilities and functional assessments will be specified by future versions of this guide."
* section[sectionFunctionalStatus].title 1..
* section[sectionFunctionalStatus].code 1..
* section[sectionFunctionalStatus].code only CodeableConceptIPS
* section[sectionFunctionalStatus].code = $loinc#47420-5
* section[sectionFunctionalStatus].entry only Reference(Condition or ClinicalImpression or DocumentReference)
* section[sectionFunctionalStatus].entry ^slicing.discriminator[0].type = #profile
* section[sectionFunctionalStatus].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionFunctionalStatus].entry ^slicing.rules = #open
* section[sectionFunctionalStatus].entry ^short = "Optional entry used to represent disabilities and functional assessments"
* section[sectionFunctionalStatus].entry ^definition = "It describes capabilities of the patient to perform acts of daily living, including possible needs of the patient to be continuously assessed by third parties. The invalidity status may in fact influence decisions about how to administer treatments.\r\nProfiles to express disabilities and functional assessments will be specified by future versions of this guide."
* section[sectionFunctionalStatus].entry contains
    disability 0..* and
    functionalAssessment 0..*
* section[sectionFunctionalStatus].entry[disability] only Reference(ConditionUvIps)
* section[sectionFunctionalStatus].entry[functionalAssessment] only Reference(ClinicalImpression)
* section[sectionPastIllnessHx] ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionPastIllnessHx] ^extension[=].valueString = "Section"
* section[sectionPastIllnessHx] ^short = "IPS History of Past Illness Section"
* section[sectionPastIllnessHx] ^definition = "The History of Past Illness section contains a description of the conditions the patient suffered in the past."
* section[sectionPastIllnessHx].title 1..
* section[sectionPastIllnessHx].code 1..
* section[sectionPastIllnessHx].code only CodeableConceptIPS
* section[sectionPastIllnessHx].code = $loinc#11348-0
* section[sectionPastIllnessHx].entry only Reference(Condition or DocumentReference)
* section[sectionPastIllnessHx].entry ^slicing.discriminator[0].type = #profile
* section[sectionPastIllnessHx].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionPastIllnessHx].entry ^slicing.rules = #open
* section[sectionPastIllnessHx].entry ^short = "Conditions the patient suffered in the past."
* section[sectionPastIllnessHx].entry ^definition = "It contains a description of the conditions the patient suffered in the past."
* section[sectionPastIllnessHx].entry contains pastProblem 0..*
* section[sectionPastIllnessHx].entry[pastProblem] only Reference(ConditionUvIps)
* section[sectionPregnancyHx] ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionPregnancyHx] ^extension[=].valueString = "Section"
* section[sectionPregnancyHx] ^short = "IPS History of Pregnancy Section"
* section[sectionPregnancyHx] ^definition = "The history of pregnancy section shall contain information about whether the patient is currently pregnant or not.\r\nIt may contain addition summarizing information about the outcome of earlier pregnancies."
* section[sectionPregnancyHx].title 1..
* section[sectionPregnancyHx].code 1..
* section[sectionPregnancyHx].code only CodeableConceptIPS
* section[sectionPregnancyHx].code = $loinc#10162-6
* section[sectionPregnancyHx].entry only Reference(Observation or DocumentReference)
* section[sectionPregnancyHx].entry ^slicing.discriminator[0].type = #profile
* section[sectionPregnancyHx].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionPregnancyHx].entry ^slicing.rules = #open
* section[sectionPregnancyHx].entry ^short = "Current pregnancy status and, optionally, information about the outcome of earlier pregnancies."
* section[sectionPregnancyHx].entry ^definition = "It contains information about whether the patient is currently pregnant or not.\r\nIt may contain addition summarizing information about the outcome of earlier pregnancies."
* section[sectionPregnancyHx].entry contains
    pregnancyStatus 0..* and
    pregnancyOutcome 0..*
* section[sectionPregnancyHx].entry[pregnancyStatus] only Reference(ObservationPregnancyStatusUvIps)
* section[sectionPregnancyHx].entry[pregnancyOutcome] only Reference(ObservationPregnancyOutcomeUvIps)

* section[sectionPatientStory] ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionPatientStory] ^extension[=].valueString = "Section"
* section[sectionPatientStory] ^short = "IPS Patient Story Section"
* section[sectionPatientStory] ^definition = "The section contains narrative text along with optional resources that express what matters to a patient. This may include needs, strengths, values, concerns and preferences to others providing support and care. The patient’s story, provided here, may be told by the patient or by a proxy."
* section[sectionPatientStory].title 1..
* section[sectionPatientStory].code 1..
* section[sectionPatientStory].code only CodeableConceptIPS
* section[sectionPatientStory].code = $loinc#81338-6
* section[sectionPatientStory].entry ^short = "Patient Story resources."
* section[sectionPatientStory].entry ^definition = "Contains resources to support the Patient Story. Instances of DocumentReference or any other suitable resource type may be used."
* section[sectionPlanOfCare] ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionPlanOfCare] ^extension[=].valueString = "Section"
* section[sectionPlanOfCare] ^short = "IPS Plan of Care Section"
* section[sectionPlanOfCare] ^definition = "The plan of care section contains a narrative description of the expectations for care including proposals, goals, and order requests for monitoring, tracking, or improving the condition of the patient."
* section[sectionPlanOfCare].title 1..
* section[sectionPlanOfCare].code 1..
* section[sectionPlanOfCare].code only CodeableConceptIPS
* section[sectionPlanOfCare].code = $loinc#18776-5
* section[sectionPlanOfCare].entry only Reference(CarePlan or DocumentReference)
* section[sectionPlanOfCare].entry ^slicing.discriminator[0].type = #profile
* section[sectionPlanOfCare].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionPlanOfCare].entry ^slicing.rules = #open
* section[sectionPlanOfCare].entry ^short = "Optional entry used to represent structured care plans"
* section[sectionPlanOfCare].entry ^definition = "Dynamic, personalized plan including identified needed healthcare activity, health objectives and healthcare goals, relating to one or more specified health issues in a healthcare process [Source EN ISO 13940]"
* section[sectionPlanOfCare].entry contains carePlan 0..*
* section[sectionPlanOfCare].entry[carePlan] only Reference(CarePlan)
* section[sectionSocialHistory] ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionSocialHistory] ^extension[=].valueString = "Section"
* section[sectionSocialHistory] ^short = "IPS Social History Section"
* section[sectionSocialHistory] ^definition = "The social history section contains a description of the person’s Health related \"lifestyle factors\" or \"lifestyle observations\" (e.g. smoke habits; alcohol consumption; diets, risky habits.)"
* section[sectionSocialHistory].title 1..
* section[sectionSocialHistory].code 1..
* section[sectionSocialHistory].code only CodeableConceptIPS
* section[sectionSocialHistory].code = $loinc#29762-2
* section[sectionSocialHistory].entry only Reference(Observation or DocumentReference)
* section[sectionSocialHistory].entry ^slicing.discriminator[0].type = #profile
* section[sectionSocialHistory].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionSocialHistory].entry ^slicing.rules = #open
* section[sectionSocialHistory].entry ^short = "Health related \"lifestyle factors\" or \"lifestyle observations\" (e.g. smoke habits; alcohol consumption; diets, risky habits.)"
* section[sectionSocialHistory].entry ^definition = "Description of the person’s Health related “lifestyle factors\" or \"lifestyle observations\" (e.g. smoke habits; alcohol consumption; diets, risky habits.)"
* section[sectionSocialHistory].entry contains
    smokingTobaccoUse 0..1 and
    alcoholUse 0..1
* section[sectionSocialHistory].entry[smokingTobaccoUse] only Reference(ObservationTobaccoUseUvIps)
* section[sectionSocialHistory].entry[alcoholUse] only Reference(ObservationAlcoholUseUvIps)
* section[sectionVitalSigns] ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section[sectionVitalSigns] ^extension[=].valueString = "Vital Signs Section"
* section[sectionVitalSigns] ^label = "Vital signs"
* section[sectionVitalSigns] ^short = "IPS Vital Signs Section"
* section[sectionVitalSigns] ^definition = "The Vital signs section includes blood pressure, body temperature, heart rate, and respiratory rate. It may also include other clinical findings, such as height, weight, body mass index, head circumference, and pulse oximetry. In particular, notable vital signs or physical findings such as the most recent, maximum and/or minimum, baseline, or relevant trends may be included"
* section[sectionVitalSigns].title 1..
* section[sectionVitalSigns].code 1..
* section[sectionVitalSigns].code only CodeableConceptIPS
* section[sectionVitalSigns].code = $loinc#8716-3
* section[sectionVitalSigns].entry only Reference(Observation or DocumentReference)
* section[sectionVitalSigns].entry ^slicing.discriminator[0].type = #profile
* section[sectionVitalSigns].entry ^slicing.discriminator[=].path = "resolve()"
* section[sectionVitalSigns].entry ^slicing.rules = #open
* section[sectionVitalSigns].entry ^short = "Notable vital signs or physical findings."
* section[sectionVitalSigns].entry ^definition = "Notable vital signs or physical findings as: blood pressure, body temperature, heart rate, and respiratory rate. It may also include other clinical findings, such as height, weight, body mass index, head circumference, and pulse oximetry. In particular, notable vital signs or physical findings such as the most recent, maximum and/or minimum, baseline, or relevant trends may be included"
* section[sectionVitalSigns].entry contains vitalSign 0..*
* section[sectionVitalSigns].entry[vitalSign] only Reference($vitalsigns)

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/ConditionUvIps.fsh

Profile: ConditionUvIps
Parent: Condition
Id: Condition-uv-ips
Title: "Condition (IPS)"
Description: "This profile represents the constraints applied to the Condition resource by the International Patient Summary (IPS) FHIR Implementation Guide. A record of a problem is represented in the patient summary as an instance of the Condition resource constrained by this profile."
* ^version = "1.1.0"
* ^status = #active
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^purpose = "Representation of a problem in the international patient summary"
* . ^short = "Documentation of a health problem of the patient"
* clinicalStatus only CodeableConceptIPS
* clinicalStatus MS
* verificationStatus only CodeableConceptIPS
* verificationStatus ^comment = "This element is labeled as a modifier because the status contains the code refuted and entered-in-error that mark the Condition as not currently valid."
* category only CodeableConceptIPS
* category MS
* category from ProblemTypeUvIps (extensible)
* category ^definition = "A category assigned to the condition. In this profile, a health problem of the patient, therefore a 'problem-list-item'.\r\n"
* category ^comment = "In this profile, Condition represents a health problem of the patient. Therefore one of the category value(s) must be problem-list-item."
* category ^binding.extension[0].extension[0].url = "purpose"
* category ^binding.extension[=].extension[=].valueCode = #candidate
* category ^binding.extension[=].extension[+].url = "valueSet"
* category ^binding.extension[=].extension[=].valueCanonical = "http://hl7.org/fhir/uv/ips/ValueSet/problem-type-loinc"
* category ^binding.extension[=].extension[+].url = "documentation"
* category ^binding.extension[=].extension[=].valueMarkdown = "An alternative additional binding to the LOINC \"Problem\" code - retained for backward compatibility."
* category ^binding.extension[=].url = "http://hl7.org/fhir/tools/StructureDefinition/additional-binding"
* severity only CodeableConceptIPS
* severity MS
* severity from $condition-severity (preferred)
* code 1..1 MS
* code only CodeableConceptIPS
* code from ProblemsUvIps (preferred)
* code ^definition = "Identification of the condition, problem or diagnosis or recording of absent/unknown problems."
* code ^binding.description = "Code for a clinical problem (or absent/unknown problem) that is selected from SNOMED CT"
* bodySite only CodeableConceptIPS
* bodySite from SNOMEDCTBodyStructures (preferred)
* bodySite ^binding.extension[0].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* bodySite ^binding.extension[=].valueString = "BodySite"
* subject only Reference(PatientUvIps)
* subject MS
* subject.reference 1.. MS
* onset[x] only dateTime or Age or Period or Range or string
* onset[x] MS
* onset[x] ^type.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* onset[x] ^type.extension.valueBoolean = true

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/DeviceObserverUvIps.fsh

Profile: DeviceObserverUvIps
Parent: Device
Id: Device-observer-uv-ips
Title: "Device - Performer or Observer (IPS)"
Description: """This profile represents the constraints applied to the Device resource by the IPS project, which specifies an international patient summary based on the FHIR standard R4.;

This profile describes a device that plays the role of observer or performer."""
* ^version = "1.1.0"
* ^status = #active
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^purpose = "This profile constrains the representation of a device acting as observer in the international patient summary as specified by the IPS project."
* identifier MS
* manufacturer MS
* modelNumber MS

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/DeviceUseStatementUvIps.fsh

Profile: DeviceUseStatementUvIps
Parent: DeviceUseStatement
Id: DeviceUseStatement-uv-ips
Title: "DeviceUseStatement (IPS)"
Description: "This profile represents the constraints applied to the DeviceUseStatement resource by the International Patient Summary (IPS) FHIR Implementation Guide, based on FHIR R4. A statement about a device used by or implanted on the patient is described in the patient summary as an instance of a DeviceUseStatement resource constrained by this profile."
* ^version = "1.1.0"
* ^status = #active
* ^experimental = false
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^purpose = "This profile constrains the representation of a statement about a medical device used by or impanted on the patient, part of the \"Medical Devices\" section of the Composition resource representing the international patient summary, as specified by the IPS project of HL7 International."
* subject only Reference(PatientUvIps)
* subject MS
* subject ^definition = "The patient using the device."
* subject.reference 1.. MS
* timing[x] 1..1 MS
* timing[x].extension contains $data-absent-reason named data-absent-reason 0..1 MS
* timing[x].extension[data-absent-reason] ^definition = "Provides a reason why the timing is missing."
* device only Reference(DeviceUvIps)
* device MS
* bodySite only CodeableConceptIPS

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/DeviceUvIps.fsh

Profile: DeviceUvIps
Parent: Device
Id: Device-uv-ips
Title: "Device (IPS)"
Description: "This profile represents the constraints applied to the Device resource by the International Patient Summary (IPS) FHIR Implementation Guide, based on FHIR R4. A device used by or implanted on the patient is described in the patient summary as an instance of a Device resource constrained by this profile."
* ^version = "1.1.0"
* ^status = #active
* ^experimental = false
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^purpose = "This profile constrains the representation of a medical device used by or impanted on the patient, in the context of the international patient summary as specified by the IPS project of HL7 International."
* . ^comment = "This profile applies the rules defined by HL7 International for representing the UDI in the FHIR standard, by the document \"Medical Devices and Unique Device Identification (UDI) Pattern, Release 1\""
* type 0..1 MS
* type only CodeableConceptIPS
* type from MedicalDevicesUvIps (preferred)
* type ^short = "Type of device."
* type ^binding.description = "The type of device or a code for absent/unknown device"
* patient 1.. MS
* patient only Reference(PatientUvIps)
* patient.reference 1.. MS

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/DiagnosticReportUvIps.fsh

Profile: DiagnosticReportUvIps
Parent: DiagnosticReport
Id: DiagnosticReport-uv-ips
Title: "DiagnosticReport (IPS)"
Description: "This profile constrains the DiagnosticReport resource to represent diagnostic test and procedure reports in a patient summary."
* ^version = "1.1.0"
* ^status = #active
* ^experimental = false
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^purpose = "This profile constrains the DiagnosticReport resource to use the specific IPS profiles for observations and coded data types."
* status from DiagnosticReportStatusUvIps (required)
* status ^label = "Observation status codes except 'entered-in-error'"
* status ^binding.extension[0].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* status ^binding.extension[=].valueString = "ObservationStatus"
* category 1..1 MS
* category only CodeableConceptIPS
* code only CodeableConceptIPS
* code MS
* subject 1.. MS
* subject only Reference(PatientUvIps or Group)
* subject.reference 1.. MS
* effective[x] 1..1 MS
* effective[x] only dateTime or Period
* effective[x].extension contains $data-absent-reason named data-absent-reason 0..1 MS
* effective[x].extension[data-absent-reason] ^short = "effective[x] absence reason"
* effective[x].extension[data-absent-reason] ^definition = "Provides a reason why the effectiveTime is missing."
* performer only Reference(PractitionerUvIps or PractitionerRoleUvIps or OrganizationUvIps or CareTeam)
* performer MS
* specimen only Reference(SpecimenUvIps)
* specimen ^mustSupport = false
* result MS
* result ^slicing.discriminator.type = #profile
* result ^slicing.discriminator.path = "resolve()"
* result ^slicing.rules = #open
* result ^short = "Observation results included in the diagnostic report."
* result ^definition = "Observation results included in the diagnostic report."
* result contains observation-results 0..* MS
* result[observation-results] only Reference(ObservationResultsLaboratoryPathologyUvIps or ObservationResultsRadiologyUvIps)

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/FlagAlertUvIps.fsh

Profile: FlagAlertUvIps
Parent: Flag
Id: Flag-alert-uv-ips
Title: "Flag - Alert (IPS)"
Description: """This profile constrains the Flag resource by the International Patient Summary (IPS) FHIR Implementation Guide. A record of an alert is represented in the patient summary as an instance of a Flag resource constrained by this profile. 

This specialized Flag is used to convey information about an alert specific to an IPS. Information is flagged to raise awareness of potential concerns and/or dangers to/from the subject of the IPS. It brings information to the fore and may reference other information from the summary (through the supportingInfo extension) as well as present obstacles to care."""
* ^version = "2.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2024-07-03T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^purpose = "This profile constrains the representation of a record of an alert in the context of the international patient summary as specified by the IPS project of HL7 International."
* extension contains $flag-priority named flag-priority 0..1 MS
* status = #active (exactly)
* category MS
* category only CodeableConceptIPS
* code MS 
* code only CodeableConceptIPS

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/ImagingStudyUvIps.fsh

Profile: ImagingStudyUvIps
Parent: ImagingStudy
Id: ImagingStudy-uv-ips
Title: "ImagingStudy (IPS)"
Description: """This profile represents the constraints applied to the ImagingStudy resource by the IPS project, which specifies the information on a DICOM imaging study this imaging result is part of.
"""
* ^version = "1.1.0"
* ^status = #active
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* identifier MS
* status from ImagingStudyStatusUvIps (required)
* status ^label = "Imaging study status codes except 'entered-in-error'"
* status ^binding.extension[0].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* status ^binding.extension[=].valueString = "ImagingStudyStatus"
* subject only Reference(PatientUvIps)
* subject MS
* subject.reference 1.. MS
* started MS
* procedureCode only CodeableConceptIPS
* procedureCode MS
* procedureCode from ResultsRadiologyObservationUvIps (extensible)
* procedureCode ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* procedureCode ^binding.extension.valueString = "ImagingProcedureCode"
* reasonCode only CodeableConceptIPS
* reasonCode MS
* series MS
* series.uid MS
* series.modality MS
* series.instance MS
* series.instance.uid MS
* series.instance.sopClass MS

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/ImmunizationUvIps.fsh

Profile: ImmunizationUvIps
Parent: Immunization
Id: Immunization-uv-ips
Title: "Immunization (IPS)"
Description: """This profile represents the constraints applied to the Immunization resource by the International Patient Summary (IPS) FHIR Implementation Guide. A record of an immunization is represented in the patient summary as an instance of an Immunization resource constrained by this profile.

It describes the event of a patient being administered a vaccination or a record of a vaccination as reported by a patient, a clinician or another party."""
* ^version = "1.1.0"
* ^status = #active
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^purpose = "This profile constrains the representation of a record of a vaccination of the patient, in the context of the international patient summary as specified by the IPS project of HL7 International."
* . ^definition = "Describes the event of a patient being administered a vaccination or a record of a vaccination as reported by a patient, a clinician or another party and may include vaccine reaction information and what vaccination protocol was followed"
* status MS
* vaccineCode 1..1 MS
* vaccineCode only CodeableConceptIPS
* vaccineCode from VaccinesUvIps (preferred)
* vaccineCode ^short = "Vaccine that was administered or was to be administered.Several kinds of vaccine product coding could be provided.\r\n\r\n     The IPS assumes that either the type of the vaccine for particular disease or diseases (e.g. MMR vaccine) against which the patient has been immunised is provided; or the known absent / unknown code.\r\n\r\n     Other coded information can be provided as well as: the IDMP Pharmaceutical Product Identifiers (PhPID), Medicinal Product Identifier (MPID), Packaged Medicinal Product Identifier (PCID), when available, or equivalent coded concepts; the WHO ATC codes; or any other kind of code that that identifies, classifies or cluster the administered product."
* vaccineCode ^definition = "Vaccine that was administered or was to be administered. Several kinds of vaccine product coding could be provided.\r\nThe IPS assumes that either the type of the vaccine for particular disease or diseases (e.g. MMR vaccine) against which the patient has been immunized is provided; or the known absent / unknown.\r\n\r\nOther coded information can be provided as well as:\r\n\r\n- The IDMP Pharmaceutical Product Identifier (PhPID), Level 1, [Substance(s)]. Example: Amoxicillin and Clavulanate Potassium; or any other equivalent coded concept.\r\n- The IDMP Pharmaceutical Product Identifier (PhPID), Level 2 [Substance(s) + Strength + reference strength]. Example: Amoxicillin 875 mg and Clavulanate Potassium 125 mg; or any other equivalent coded concept.\r\n- The IDMP Pharmaceutical Product Identifier (PhPID), Level 3 [Substance(s) + administrable dose form]. Example: Amoxicillin and Clavulanate Potassium, Oral Tablet; or any other equivalent coded concept.\r\n- The IDMP Pharmaceutical Product Identifier (PhPID), Level 4 [Substance(s) + strength + reference strength + administrable dose form]. Example: Amoxicillin 875 mg and clavulanate potassium 125 mg, oral tablet; or any other equivalent coded concept.\r\n- The IDMP Medicinal Product Identifier (MPID) or any equivalent Medicinal Product Identifier. IDMP MPID uniquely identifies a Medicinal Product, reflecting (but not replacing) any other authorization numbers allocated by a regulator. MPID implies one (set of) PhPID. The MPID shall use a common segment pattern related to a Medicinal Product, which, when each segment is valued shall define a specific MPID concept.\r\n- The IDMP Packaged Medicinal Product Identifier (PCID) or any equivalent Packaged Medicinal Product Identifier. Uniquely identifies a Medicinal Product based on its packaging. This implies one MPID can be associated with more than one PCID, if the same Medicinal Product has more than one type of package.\r\n- Any other kind of code that that identifies, classifies or clusters the administered product (e.g. the medicinal product or the product class).\r\n\r\nThe value sets used for the PhPID, MPID and PCID identifiers are provisional and include only few equivalent concepts used for exemplification purposes, they will be updated with real IDMP identifiers when they will become available."
* vaccineCode ^binding.extension[+].extension[0].url = "purpose"
* vaccineCode ^binding.extension[=].extension[=].valueCode = #candidate
* vaccineCode ^binding.extension[=].extension[+].url = "valueSet"
* vaccineCode ^binding.extension[=].extension[=].valueCanonical = "http://hl7.org/fhir/uv/ips/ValueSet/vaccines-whoatc-uv-ips"
* vaccineCode ^binding.extension[=].extension[+].url = "documentation"
* vaccineCode ^binding.extension[=].extension[=].valueMarkdown = "Additional conformance binding to a vaccines value set from the WHO ATC code system for use in specific jurisdictional or other contexts where use of the ATC terminology is preferred."
* vaccineCode ^binding.extension[=].extension[+].url = "shortDoco"
* vaccineCode ^binding.extension[=].extension[=].valueString = "For when WHO ATC code system is preferred"
* vaccineCode ^binding.extension[=].url = "http://hl7.org/fhir/tools/StructureDefinition/additional-binding"
* vaccineCode ^binding.description = "The type of vaccine for particular disease or diseases against which the patient has been immunised, or a code for absent/unknown immunization."
* patient only Reference(PatientUvIps)
* patient MS
* patient.reference 1.. MS
* occurrence[x] 1..1 MS
* occurrence[x].extension contains $data-absent-reason named data-absent-reason 0..1 MS
* occurrence[x].extension[data-absent-reason] ^short = "occurrence[x] absence reason"
* occurrence[x].extension[data-absent-reason] ^definition = "Provides a reason why the occurrence is missing."
* site only CodeableConceptIPS
* site from SNOMEDCTBodyStructures (preferred)
* site ^binding.extension[0].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* site ^binding.extension[=].valueString = "SNOMEDCTBodyStructures"
* route only CodeableConceptIPS
* route from MedicineRouteOfAdministrationUvIps (preferred)
* route ^binding.extension[0].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* route ^binding.extension[=].valueString = "ImmunizationRoute"
* protocolApplied.targetDisease from VaccineTargetDiseasesUvIps (preferred)
* protocolApplied.targetDisease ^short = "Vaccine preventable disease being targeted"
* protocolApplied.targetDisease ^definition = "The particular disease against which the patient has been immunized.\r\n\r\nAdditional conformance bindings provided for use for this element in specific (jurisdictional or other) contexts include (these bindings are represented in the StructureDefinition as instances of the [elementdefinition-additionalBinding](http://hl7.org/fhir/tools/StructureDefinition/additional-binding) extension):\r\n- [targetDiseases-uv-ips](./ValueSet-target-diseases-uv-ips.html)"
* protocolApplied.targetDisease ^binding.description = "The particular disease or diseases against which the patient has been immunized."

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/MedicationIPS.fsh

Profile: MedicationIPS
Parent: Medication
Id: Medication-uv-ips
Title: "Medication (IPS)"
Description: "This profile represents the constraints applied to the Medication resource by the International Patient Summary (IPS) FHIR Implementation Guide, based on FHIR R4. A medication is described in the patient summary as an instance of a Medication resource constrained by this profile."
* ^version = "1.1.0"
* ^status = #active
* ^experimental = false
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^purpose = "This profile constrains the representation of a medication, in the context of the international patient summary as specified by the IPS project of HL7 International."
* . ^comment = "IPS Medication"
* code 1..1 MS
* code only CodeableConceptIPS
* code from MedicationsUvIps (preferred)
* code ^short = "Medication that was administered or was to be administered (medication code from any code system)"
* code ^definition = "Medication that was administered or was to be administered. \r\n\r\nSeveral kinds of medication coding could be provided as:\r\n\r\n1. The IDMP Pharmaceutical Product Identifier (PhPID), Level 1, [Substance(s)]. Example: Amoxicillin and Clavulanate Potassium; or any other equivalent coded concept;\r\n2. The IDMP Pharmaceutical Product Identifier (PhPID), Level 2 [Substance(s) + Strength + reference strength]. Example: Amoxicillin 875 mg and Clavulanate Potassium 125 mg; or any other equivalent coded concept;\r\n3. The IDMP Pharmaceutical Product Identifier (PhPID), Level 3 [Substance(s) + administrable dose form]. Example: Amoxicillin and Clavulanate Potassium, Oral Tablet; or any other equivalent coded concept;\r\n4. The IDMP Pharmaceutical Product Identifier (PhPID), Level 4 [Substance(s) + strength + reference strength + administrable dose form]. Example: Amoxicillin 875 mg and clavulanate potassium 125 mg, oral tablet; or any other equivalent coded concept 5. The IDMP Medicinal Product Identifier (MPID) or any equivalent Medicinal Product Identifier. IDMP MPID uniquely identifies a Medicinal Product, reflecting (but not replacing) any other authorization numbers allocated by a regulator. MPID implies one (set of) PhPID. The MPID shall use a common segment pattern related to a Medicinal Product, which, when each segment is valued shall define a specific MPID concept.\r\n6. The IDMP Packaged Medicinal Product Identifier (PCID) or any equivalent Packaged Medicinal Product Identifier. Uniquely identifies a Medicinal Product based on its packaging. This implies one MPID can be associated with more than one PCID, if the same Medicinal Product has more than one type of package.\r\n7. Any other kind of code that that identifies, classifies or cluster the administered product (e.g. the medicinal product or the product class)\r\n\r\nThe value sets used for the PhPID, MPID and PCID identifiers are provisional and include only few equivalent concepts used for exemplification purposes, they will be updated with real IDMP identifiers when they will become available."
* code ^binding.extension[+].extension[0].url = "purpose"
* code ^binding.extension[=].extension[=].valueCode = #candidate
* code ^binding.extension[=].extension[+].url = "valueSet"
* code ^binding.extension[=].extension[=].valueCanonical = "http://hl7.org/fhir/uv/ips/ValueSet/whoatc-uv-ips"
* code ^binding.extension[=].extension[+].url = "documentation"
* code ^binding.extension[=].extension[=].valueMarkdown = "WHO ATC classification"
* code ^binding.extension[=].url = "http://hl7.org/fhir/tools/StructureDefinition/additional-binding"
* code ^binding.description = "SNOMED CT medications (Medicinal product) or a code for absent/unknown medication"
* form only CodeableConceptIPS
* form MS
* form from MedicineDoseFormUvIps (preferred)
* form ^definition = "Describes the form of the item.  Powder; tablets; capsule.\r\n\r\nAdministrable Pharmaceutical Dose Form. \r\nThis code represents the form of the medication (e.g. tablet, capsule, liquid)\r\n\r\nSince the EDQM Standards Terms, together with UCUM, is one of the IDMP terminologies actually available for usage, this code system has been selected as referecne terminology for representing Pharmaceutical Dose forms;Pakages and Route of Administration.\r\n\r\nIt is known that also alternative jurisdictional and international terminologies are known to be used for this concept domain, as NCI or SNOMED CT."
* ingredient MS
* ingredient.item[x] only CodeableConceptIPS or Reference(Substance or Medication)
* ingredient.item[x] MS
* ingredient.item[x] from MedicineActiveSubstancesUvIps (preferred)
* ingredient.item[x] ^comment = "The IDMP ISO 11238 standard addresses the identification and exchange of regulated information on substances. \r\nThe Global Ingredient Archival System (GInAS) will provide a common global identifier for all of the substances used in medicinal products, providing a definition of substances globally consistent with this standard.\r\nThose identifiers however are yet available for concrete usage, therefore in this version of the template, SNOMED CT has been chosen as reference terminology also for the active substances.\r\nThis choice will be revised based on the availability and the maturity of GInAS."
* ingredient.item[x] ^binding.description = "SNOMED CT drug substances"
* ingredient.strength only RatioIPS
* ingredient.strength MS

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/MedicationRequestIPS.fsh

Profile: MedicationRequestIPS
Parent: MedicationRequest
Id: MedicationRequest-uv-ips
Title: "MedicationRequest (IPS)"
Description: "This profile represents the constraints applied to the MedicationRequest resource by the International Patient Summary (IPS) FHIR Implementation Guide, based on FHIR R4. A record of a medication request is represented in the patient summary as an instance of a MedicationRequest resource constrained by this profile."
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-category"
* ^extension[=].valueString = "Clinical.Medications"
* ^version = "1.1.0"
* ^status = #active
* ^date = "2021-05-14T21:56:28-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^purpose = "This profile constrains the representation of a medication request related to the patient, in the context of the international patient summary as specified by the IPS project of HL7 International."
* status ^comment = "In the scope of the IPS the entered-in-error concept is not allowed."
* medication[x] only CodeableConcept or Reference(MedicationIPS)
* medication[x] MS
* medication[x] from MedicationsUvIps (preferred)
* medication[x] ^definition = "Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code. To improve global interoperability is strongly encouraged that the reference to a medication resource is used, limiting the usage of the medicationCodeableConcept only to the cases in which no other information than a simple code is available."
* medication[x] ^binding.description = "SNOMED CT medications (Medicinal product) or a code for absent/unknown medication"
* subject only Reference(PatientUvIps)
* subject MS
* subject.reference 1.. MS
* dosageInstruction MS
* dosageInstruction.text MS
* dosageInstruction.timing MS
* dosageInstruction.route only CodeableConceptIPS
* dosageInstruction.route from MedicineRouteOfAdministrationUvIps (preferred)
* dosageInstruction.route ^binding.description = "EDQM Standards Terms"
* dispenseRequest.validityPeriod.extension contains $data-absent-reason named data-absent-reason 0..1
* dispenseRequest.validityPeriod.extension[data-absent-reason] ^short = "validityPeriod absence reason"
* dispenseRequest.validityPeriod.extension[data-absent-reason] ^definition = "Provides a reason why the validityPeriod is missing."

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/MedicationStatementIPS.fsh

Profile: MedicationStatementIPS
Parent: MedicationStatement
Id: MedicationStatement-uv-ips
Title: "MedicationStatement (IPS)"
Description: "This profile represents the constraints applied to the MedicationStatement resource by the International Patient Summary (IPS) FHIR Implementation Guide, based on FHIR R4. A record of a medication statement is represented in the patient summary as an instance of a MedicationStatement resource constrained by this profile."
* ^version = "1.1.0"
* ^status = #active
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^purpose = "This profile constrains the representation of a medication statement related to the patient, in the context of the international patient summary as specified by the IPS project of HL7 International."
* status ^comment = "In the scope of the IPS the entered-in-error concept is not allowed."
* medication[x] only CodeableConceptIPS or Reference(MedicationIPS)
* medication[x] MS
* medication[x] from MedicationsUvIps (preferred)
* medication[x] ^definition = "Identifies the medication being administered or the reason for absent or unknown Medication. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code. To improve global interoperability is strongly encouraged that the reference to a medication resource is used, limiting the usage of the medicationCodeableConcept only to the cases in which no other information than a simple code is available."
* medication[x] ^binding.description = "SNOMED CT medications (Medicinal product) or a code for absent/unknown medication"
* subject only Reference(PatientUvIps)
* subject MS
* subject.reference 1.. MS
* effective[x] 1..1 MS
* effective[x].extension contains $data-absent-reason named data-absent-reason 0..1 MS
* effective[x].extension[data-absent-reason] ^short = "effective[x] absence reason"
* effective[x].extension[data-absent-reason] ^definition = "Provides a reason why the effectiveTime is missing."
* dosage MS
* dosage.text MS
* dosage.timing MS
* dosage.route only CodeableConceptIPS
* dosage.route from MedicineRouteOfAdministrationUvIps (preferred)
* dosage.route ^binding.description = "EDQM Standards Terms"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/ObservationAlcoholUseUvIps.fsh

Profile: ObservationAlcoholUseUvIps
Parent: Observation
Id: Observation-alcoholuse-uv-ips
Title: "Observation Social History - Alcohol Use (IPS)"
Description: "This profile constrains the Observation resource to represent alcohol use assessment in a patient summary."
* ^version = "1.1.0"
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* code 1..1 MS
* code only CodeableConceptIPS
* code = $loinc#74013-4
* subject 1.. MS
* subject only Reference(PatientUvIps)
* subject.reference 1.. MS
* effective[x] 1..1 MS
* effective[x] only dateTime
* effective[x].extension contains $data-absent-reason named data-absent-reason 0..1 MS
* effective[x].extension[data-absent-reason] ^short = "effective[x] absence reason"
* effective[x].extension[data-absent-reason] ^definition = "Provides a reason why the effectiveTime is missing."
* valueQuantity only QuantityIPS
* component ..0
* component ^mustSupport = false

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/ObservationPregnancyEddUvIps.fsh

Profile: ObservationPregnancyEddUvIps
Parent: Observation
Id: Observation-pregnancy-edd-uv-ips
Title: "Observation Pregnancy - Expected Delivery Date (IPS)"
Description: "This profile constrains the Observation resource to represent the pregnancy expected delivery date (EDD)."
* ^version = "1.1.0"
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* code 1..1 MS
* code only CodeableConceptIPS
* code from PregnancyExpectedDeliveryDateMethodUvIps (required)
* code ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* code ^binding.extension.valueString = "ObservationCode"
* subject 1.. MS
* subject only Reference(PatientUvIps)
* subject.reference 1.. MS
* effective[x] 1..1 MS
* effective[x] only dateTime
* effective[x].extension contains $data-absent-reason named data-absent-reason 0..1 MS
* effective[x].extension[data-absent-reason] ^short = "effective[x] absence reason"
* effective[x].extension[data-absent-reason] ^definition = "Provides a reason why the effectiveTime is missing."
* valueDateTime only dateTime
* valueDateTime MS
* bodySite ..0
* bodySite ^mustSupport = false
* method ..0
* method ^mustSupport = false
* specimen ..0
* specimen ^mustSupport = false
* device ..0
* device ^mustSupport = false
* referenceRange ..0
* referenceRange ^mustSupport = false
* component ..0
* component ^mustSupport = false

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/ObservationPregnancyOutcomeUvIps.fsh

Profile: ObservationPregnancyOutcomeUvIps
Parent: Observation
Id: Observation-pregnancy-outcome-uv-ips
Title: "Observation Pregnancy - Outcome (IPS)"
Description: "This profile constrains the Observation resource to represent the summarized history of pregnancy outcomes."
* ^version = "1.1.0"
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* code 1..1 MS
* code only CodeableConceptIPS
* code from PregnanciesSummaryUvIps (required)
* code ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* code ^binding.extension.valueString = "ObservationCode"
* subject 1.. MS
* subject only Reference(PatientUvIps)
* subject.reference 1.. MS
* effective[x] 1..1 MS
* effective[x] only dateTime
* effective[x].extension contains $data-absent-reason named data-absent-reason 0..1 MS
* effective[x].extension[data-absent-reason] ^short = "effective[x] absence reason"
* effective[x].extension[data-absent-reason] ^definition = "Provides a reason why the effectiveTime is missing."
* valueQuantity only Quantity
* valueQuantity MS
* bodySite ..0
* bodySite ^mustSupport = false
* specimen ..0
* specimen ^mustSupport = false
* device ..0
* device ^mustSupport = false
* referenceRange ..0
* referenceRange ^mustSupport = false
* component ..0
* component ^mustSupport = false

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/ObservationPregnancyStatusUvIps.fsh

Profile: ObservationPregnancyStatusUvIps
Parent: Observation
Id: Observation-pregnancy-status-uv-ips
Title: "Observation Pregnancy - Status (IPS)"
Description: "This profile constrains the Observation resource to represent the pregnancy status."
* ^version = "1.1.0"
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* code 1..1 MS
* code only CodeableConceptIPS
* code = $loinc#82810-3
* subject 1.. MS
* subject only Reference(PatientUvIps)
* subject.reference 1.. MS
* effective[x] 1..1 MS
* effective[x] only dateTime
* effective[x].extension contains $data-absent-reason named data-absent-reason 0..1 MS
* effective[x].extension[data-absent-reason] ^short = "effective[x] absence reason"
* effective[x].extension[data-absent-reason] ^definition = "Provides a reason why the effectiveTime is missing."
* valueCodeableConcept only CodeableConceptIPS
* valueCodeableConcept MS
* valueCodeableConcept from PregnancyStatusUvIps (preferred)
* bodySite ..0
* bodySite ^mustSupport = false
* specimen ..0
* specimen ^mustSupport = false
* device ..0
* device ^mustSupport = false
* referenceRange ..0
* referenceRange ^mustSupport = false
* hasMember only Reference(ObservationPregnancyEddUvIps)
* hasMember MS
* hasMember ^short = "Expected Delivery Date"
* hasMember ^definition = "A reference to the Expected Delivery Date Observation."
* hasMember.reference 1.. MS
* component ..0
* component ^mustSupport = false

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/ObservationResultsLaboratoryPathologyUvIps.fsh

Profile: ObservationResultsLaboratoryPathologyUvIps
Parent: Observation
Id: Observation-results-laboratory-pathology-uv-ips
Title: "Observation Results - Laboratory/Pathology (IPS)"
Description: """This profile constrains the Observation resource to represent results produced by laboratory (including pathology) tests or panels/studies in a patient summary.

This observation may represent the result of a simple laboratory test such as hematocrit or it may group the set of results produced by a multi-test study or panel such as a complete blood count, a dynamic function test, a urine specimen study. In the latter case, the observation carries the overall conclusion of the study and or a global interpretation by the producer of the study, in the comment element; and references the atomic results of the study as "has-member" child observations.
"""
* ^experimental = false
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^purpose = "This profile constrains the Observation resource to represent a laboratory or pathology in vitro diagnostic test or panel/study. In case of a panel or multiple-observation study, the results of the panel or study appear as sub-observations. In this case this top-level Observation acts as a grouper of all the observations belonging to the panel or study.  The top-level observation may carry a conclusion in the value element and or a global interpretation by the producer of the study, in the comment element."
* . ^short = "Laboratory (including Pathology) result for a simple test or for a panel/study"
* . ^definition = "This observation may represent the result of a simple laboratory or pathology test such as hematocrit, or it may group the set of results produced by a multi-test study or panel such as a complete blood count, a dynamic function test, or a urine specimen study. In the latter case, the observation carries the overall conclusion of the study and references the atomic results of the study as \"has-member\" child observations"
* . ^comment = "Represents either a lab simple observation or the group of observations produced by a laboratory study."
* obeys ips-2 and ips-3
* status from ResultsStatusUvIps (required)
* status ^label = "Observation status codes except 'entered-in-error'"
* status ^binding.extension[0].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* status ^binding.extension[=].valueString = "ObservationStatus"
* category only CodeableConceptIPS
* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category ^definition = "A code that classifies the general type of observation being made. In this profile, fixed to \"laboratory\"."
* category ^comment = "\"laboratory\" includes laboratory medicine and pathology"
* category contains laboratory 1..1 MS
* category[laboratory] only CodeableConceptIPS
* category[laboratory] = $observation-category#laboratory
* code only CodeableConceptIPS
* code MS
* code from ResultsLaboratoryPathologyObservationUvIps (preferred)
* code ^definition = "Describes what was observed. Sometimes this is called the observation \"name\".  In this profile this code represents either a simple laboratory test or a single pathology examination or a laboratory or pathology study with multiple child observations."
* code ^comment = "In the context of this Observation-results-laboratory-pathology-uv-ips profile, when the observation plays the role of a grouper of member sub-observations, the code represents the group (for instance a panel code). In case no code is available, at least a text shall be provided."
* code ^binding.extension[0].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* code ^binding.extension[=].valueString = "ObservationCode"
* subject 1.. MS
* subject only Reference(PatientUvIps or Group or Device or Location)
* subject.reference 1.. MS
* subject ^definition = "The patient, or group of patients, location, or device whose characteristics (direct or indirect) are described by the observation and into whose record the observation is placed.  Comments: Indirect characteristics may be those of a specimen, fetus, donor, other observer (for example a relative or EMT), or any observation made about the subject.\r\n\r\nIn this profile is constrained to the patient"
* effective[x] 1.. MS
* effective[x] only dateTime or Period
//* effective[x] obeys ips-1
* effective[x].extension contains $data-absent-reason named data-absent-reason 0..1 MS
* effective[x].extension[data-absent-reason] ^short = "effective[x] absence reason"
* effective[x].extension[data-absent-reason] ^definition = "Provides a reason why the effectiveTime is missing."
* performer 1.. MS
* performer only Reference(PractitionerUvIps or PractitionerRoleUvIps or OrganizationUvIps or CareTeam or PatientUvIps or RelatedPerson)
//* value[x] MS
* valueString MS
* valueQuantity MS
* valueCodeableConcept MS
* valueCodeableConcept only CodeableConceptIPS
* valueCodeableConcept from ResultsCodedValuesLaboratoryPathologyUvIps (preferred)
* interpretation only CodeableConceptIPS
* specimen only Reference(SpecimenUvIps)
* hasMember only Reference(ObservationResultsLaboratoryPathologyUvIps)
* hasMember ^definition = "A reference to another Observation profiled by Observation-results-laboratory-pathology-uv-ips. The target observation (for instance an individual test member of a panel) is considered as a sub-observation of the current one, which plays the role of a grouper."
* hasMember ^comment = "This element is used in the context of international patient summary when there is a need to group a collection of observations, because they belong to the same panel, or because they share a common interpretation comment, or a common media attachment (illustrative image or graph). In these cases, the current observation is the grouper, and its set of sub-observations are related observations using the type \"has-member\".  For a discussion on the ways Observations can be assembled in groups together see [Observation Grouping](http://hl7.org/fhir/observation.html#obsgrouping)."
* component MS

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/ObservationResultsRadiologyUvIps.fsh

Profile: ObservationResultsRadiologyUvIps
Parent: Observation
Id: Observation-results-radiology-uv-ips
Title: "Observation Results - Radiology (IPS)"
Description: """This profile represents the constraints applied to the Observation resource by the IPS project, which specifies a radiology observation for the international patient summary based on the FHIR standard R4. 

This observation may represent the conclusions of a diagnostic procedure such a Chest RX, or it may group the set of results produced by that single or multi-modality procedure. 

In the latter case, the main observation (this one) carries the overall conclusion of the study and/or a global interpretation by the observer of the study as value of this observation; and may reference the atomic results of the study as "child observations".

It allows also providing details about the related study using the partOf element referring to an ImagingStudy resource.
"""
* ^experimental = false
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* obeys hasMemberOrComponent
* partOf only Reference(ImagingStudyUvIps)
* status from ResultsStatusUvIps (required)
* status ^label = "Observation 'complete' status codes"
* status ^binding.extension[0].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* status ^binding.extension[=].valueString = "ObservationStatus"
* category only CodeableConceptIPS
* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category ^definition = "A code that classifies the general type of observation being made. In this profile, fixed to \"imaging\"."
* category contains radiology 1..1 MS
* category[radiology] only CodeableConceptIPS
* category[radiology] = $observation-category#imaging
* code only CodeableConceptIPS
* code MS
* code from ResultsRadiologyObservationUvIps (preferred)
* code ^label = "Diagnostic Procedure Code"
* code ^definition = "Describes what was observed. Sometimes this is called the observation \"name\".\r\nIn this profile the code of the containing observation (the organizer result in the CDA implementation) may correspond to the procedure code (e.g. Chest X-Ray)."
* code ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* code ^binding.extension.valueString = "ObservationCode"
* subject 1.. MS
* subject only Reference(PatientUvIps)
* subject.reference 1.. MS
* subject ^definition = "The patient, or group of patients, location, or device whose characteristics (direct or indirect) are described by the observation and into whose record the observation is placed.  Comments: Indirect characteristics may be those of a specimen, fetus, donor, other observer (for example a relative or EMT), or any observation made about the subject.\r\n\r\nIn this profile is constrained to the patient"
* effective[x] 1.. MS
* effective[x] only dateTime or Period
* effective[x] obeys ips-1
* effective[x].extension contains $data-absent-reason named data-absent-reason 0..1 MS
* effective[x].extension[data-absent-reason] ^short = "effective[x] absence reason"
* effective[x].extension[data-absent-reason] ^definition = "Provides a reason why the effectiveTime is missing."
* performer 1.. MS
* performer only Reference(PractitionerUvIps or PractitionerRoleUvIps or OrganizationUvIps or CareTeam or PatientUvIps or RelatedPerson)
//* valueString only string
* valueString MS
* valueString ^label = "Overall Conclusion"
* bodySite only CodeableConceptIPS
* bodySite ^label = "body site"
* device only Reference(DeviceObserverUvIps)
* hasMember only Reference(ObservationResultsRadiologyUvIps)
* component MS
* component ^slicing.discriminator.type = #type
* component ^slicing.discriminator.path = "value"
* component ^slicing.description = "Slicing based on value[x] type."
* component ^slicing.rules = #closed
* component ^requirements = "Required if not(exists(Observation.valueString))"
* component ^min = 0
* component contains
    observationText 0..* and
    observationCode 0..* and
    numericQuantityMeasurement 0..* and
    numericRangeMeasurement 0..* and
    numericRatioMeasurement 0..* and
    numericSampledDataMeasurement 0..*
* component[observationText] ^short = "Observation Text"
* component[observationText].code only CodeableConceptIPS
* component[observationText].code from ResultsRadiologyTextualObservationUvIps (extensible)
* component[observationText].code ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* component[observationText].code ^binding.extension.valueString = "ObservationCode"
* component[observationText].value[x] 1..
* component[observationText].value[x] only string
* component[observationCode] ^short = "Observation Code"
* component[observationCode].code only CodeableConceptIPS
* component[observationCode].code from ResultsRadiologyObservationUvIps (extensible)
* component[observationCode].value[x] 1..
* component[observationCode].value[x] only CodeableConceptIPS
* component[numericQuantityMeasurement] ^short = "Observation Measurement, including linear, area and volume quantity measurements"
* component[numericQuantityMeasurement].code only CodeableConceptIPS
* component[numericQuantityMeasurement].code from ResultsRadiologyMeasurementObservationUvIps (extensible)
* component[numericQuantityMeasurement].code ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* component[numericQuantityMeasurement].code ^binding.extension.valueString = "ObservationMeasurements"
* component[numericQuantityMeasurement].code ^binding.description = "Codes identifying numeric measurements"
* component[numericQuantityMeasurement].value[x] 1..
* component[numericQuantityMeasurement].value[x] only QuantityIPS
* component[numericRangeMeasurement] ^short = "Observation Measurement, including linear, area and volume range measurements"
* component[numericRangeMeasurement].code only CodeableConceptIPS
* component[numericRangeMeasurement].code from ResultsRadiologyMeasurementObservationUvIps (extensible)
* component[numericRangeMeasurement].code ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* component[numericRangeMeasurement].code ^binding.extension.valueString = "ObservationMeasurements"
* component[numericRangeMeasurement].code ^binding.description = "Codes identifying numeric measurements"
* component[numericRangeMeasurement].value[x] 1..
* component[numericRangeMeasurement].value[x] only RangeIPS
* component[numericRatioMeasurement] ^short = "Observation Measurement, including linear, area and volume ratio measurements"
* component[numericRatioMeasurement].code only CodeableConceptIPS
* component[numericRatioMeasurement].code from ResultsRadiologyMeasurementObservationUvIps (extensible)
* component[numericRatioMeasurement].code ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* component[numericRatioMeasurement].code ^binding.extension.valueString = "ObservationMeasurements"
* component[numericRatioMeasurement].code ^binding.description = "Codes identifying numeric measurements"
* component[numericRatioMeasurement].value[x] 1..
* component[numericRatioMeasurement].value[x] only RatioIPS
* component[numericSampledDataMeasurement] ^short = "Observation Measurement, including linear, area and volume sampled data measurements"
* component[numericSampledDataMeasurement].code only CodeableConceptIPS
* component[numericSampledDataMeasurement].code from ResultsRadiologyMeasurementObservationUvIps (extensible)
* component[numericSampledDataMeasurement].code ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* component[numericSampledDataMeasurement].code ^binding.extension.valueString = "ObservationMeasurements"
* component[numericSampledDataMeasurement].code ^binding.description = "Codes identifying numeric measurements"
* component[numericSampledDataMeasurement].value[x] 1..
* component[numericSampledDataMeasurement].value[x] only SampledData


---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/ObservationTobaccoUseUvIps.fsh

Profile: ObservationTobaccoUseUvIps
Parent: Observation
Id: Observation-tobaccouse-uv-ips
Title: "Observation Social History - Tobacco Use (IPS)"
Description: "This profile constrains the Observation resource to represent Tobacco use assessment in a patient summary."
* ^version = "1.1.0"
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* code 1..1 MS
* code only CodeableConceptIPS
* code = $loinc#72166-2
* subject 1.. MS
* subject only Reference(PatientUvIps)
* subject.reference 1.. MS
* effective[x] 1..1 MS
* effective[x] only dateTime
* effective[x].extension contains $data-absent-reason named data-absent-reason 0..1 MS
* effective[x].extension[data-absent-reason] ^short = "effective[x] absence reason"
* effective[x].extension[data-absent-reason] ^definition = "Provides a reason why the effectiveTime is missing."
* valueCodeableConcept only CodeableConceptIPS
* valueCodeableConcept from CurrentSmokingStatusUvIps (preferred)
* component ..0
* component ^mustSupport = false

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/OrganizationUvIps.fsh

Profile: OrganizationUvIps
Parent: Organization
Id: Organization-uv-ips
Title: "Organization (IPS)"
Description: "This profile constrains the Organization resource to represent an organization that acts as performer or observer for a result observation (laboratory, pathology or imaging), or as performer for a procedure."
* ^version = "1.1.0"
* ^status = #active
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* name 1.. MS
* telecom MS
* address MS

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/PatientUvIps.fsh

Profile: PatientUvIps
Parent: Patient
Id: Patient-uv-ips
Title: "Patient (IPS)"
Description: "This profile represents the constraints applied to the Patient resource by the International Patient Summary (IPS) FHIR Implementation Guide and describes the minimum expectations for the Patient resource when used in the IPS composition or in one of the referred resources."
* ^version = "1.1.0"
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* identifier MS
* name 1..* MS
* name obeys ips-pat-1
* name ^requirements = "Need to be able to track the patient by multiple names. Examples are your official name and a partner name.\r\nThe Alphabetic representation of the name SHALL be always provided"
* name.text MS
* name.text ^definition = "Text representation of the full name. Due to the cultural variance around the world a consuming system may not know how to present the name correctly; moreover not all the parts of the name go in given or family. Creators are therefore strongly encouraged to provide through this element a presented version of the name. Future versions of this guide may require this element"
* name.text ^min = 0
* name.family 0..1 MS
* name.given MS
* name.given ^min = 0
* telecom MS
* gender MS
* birthDate 1.. MS
* address MS
* contact.relationship only CodeableConceptIPS
* generalPractitioner MS

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/PractitionerRoleUvIps.fsh

Profile: PractitionerRoleUvIps
Parent: PractitionerRole
Id: PractitionerRole-uv-ips
Title: "PractitionerRole (IPS)"
Description: "This profile constrains the PractitionerRole resource to represent a practitioner acting as observer for observation results for a specified organization."
* ^version = "1.1.0"
* ^status = #active
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* practitioner only Reference(PractitionerUvIps)
* organization only Reference(OrganizationUvIps)
* organization MS
* code only CodeableConceptIPS
* code from HealthcareProfessionalRolesUvIps (preferred)
* code ^definition = "Roles which this practitioner is authorized to perform for the organization."
* code ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* code ^binding.extension.valueString = "HealthcareProfessionalRoles"
* code ^binding.description = "Healthcare professional role codes from International Standard Classification of Occupations (ISCO)."

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/PractitionerUvIps.fsh

Profile: PractitionerUvIps
Parent: Practitioner
Id: Practitioner-uv-ips
Title: "Practitioner (IPS)"
Description: "This profile constrains the practitioner resource to represent a practitioner acting as observer for these imaging results."
* ^version = "1.1.0"
* ^status = #active
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* name 1.. MS
* name.family MS
* name.given MS
* telecom MS
* address MS

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/ProcedureUvIps.fsh

Profile: ProcedureUvIps
Parent: Procedure
Id: Procedure-uv-ips
Title: "Procedure (IPS)"
Description: "This profile represents the constraints applied to the Procedure resource by the IPS project, which specifies an entry of the History of Procedure for the international patient summary based on the FHIR standard R4."
* ^version = "1.1.0"
* ^status = #active
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* code 1..1 MS
* code only CodeableConceptIPS
* code from ProceduresUvIps (preferred)
* code ^definition = "Identification of the procedure or recording of \"absence of relevant procedures\" or of \"procedures unknown\"."
* code ^binding.description = "SNOMED CT procedure code set or a code for absent/unknown procedure"
* subject only Reference(PatientUvIps)
* subject MS
* subject ^definition = "The person on which the procedure was performed."
* subject.reference 1.. MS
* performed[x] 1..1 MS
* performed[x].extension contains $data-absent-reason named data-absent-reason 0..1 MS
* performed[x].extension[data-absent-reason] ^short = "performed[x] absence reason"
* performed[x].extension[data-absent-reason] ^definition = "Provides a reason why the performed is missing."
* asserter ^mustSupport = false
* performer ^mustSupport = false
* performer.actor only Reference(PatientUvIps or RelatedPerson or DeviceObserverUvIps or PractitionerUvIps or PractitionerRoleUvIps or OrganizationUvIps)
* performer.actor ^mustSupport = false
* performer.onBehalfOf only Reference(OrganizationUvIps)
* performer.onBehalfOf ^mustSupport = false
* bodySite only CodeableConceptIPS
* bodySite from SNOMEDCTBodyStructures (preferred)
* bodySite ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* bodySite ^binding.extension.valueString = "BodySite"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/QuantityIPS.fsh

Profile: QuantityIPS
Parent: Quantity
Id: Quantity-uv-ips
Title: "Quantity (IPS)"
Description: "Data type Quantity constrained to use UCUM as the code system for units"
* ^version = "1.1.0"
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^purpose = "This profile of the Quantity data type imposes the usage of the UCUM as the code system for units"
* . ^short = "A measured amount using UCUM"
* . ^definition = "A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.\r\nThis profile imposes that the code system for units be UCUM."
* system 1.. MS
* system = "http://unitsofmeasure.org" (exactly)
* system ^short = "UCUM system for units"
* code 1.. MS

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/RangeIPS.fsh

Profile: RangeIPS
Parent: Range
Id: Range-uv-ips
Title: "Range (IPS)"
Description: "Range constrained to UCUM as the code system for units."
* ^version = "1.1.0"
* ^experimental = false
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^purpose = "Requires UCUM as the code system for units"
* low only SimpleQuantityIPS
* low MS
* high only SimpleQuantityIPS
* high MS

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/RatioIPS.fsh

Profile: RatioIPS
Parent: Ratio
Id: Ratio-uv-ips
Title: "Ratio (IPS)"
Description: "Ratio data type, constrained to use UCUM as the code system for units."
* ^version = "1.1.0"
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^purpose = "Allow only UCUM as the code system for units."
* numerator only QuantityIPS
* numerator MS
* denominator only QuantityIPS
* denominator MS

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/SimpleQuantityIPS.fsh

Profile: SimpleQuantityIPS
Parent: SimpleQuantity
Id: SimpleQuantity-uv-ips
Title: "SimpleQuantity (IPS)"
Description: "Data type profile SimpleQuantity constrained to use UCUM as the code system for units"
* ^version = "1.1.0"
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^purpose = "This profile of the SimpleQuantity data type profile imposes the usage of the UCUM code system for units"
* . ^short = "A measured amount using UCUM"
* . ^definition = "A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.\r\nThis profile imposes that the code system for units be UCUM."
* system 1.. MS
* system = "http://unitsofmeasure.org" (exactly)
* system ^short = "UCUM system for units"
* code 1.. MS

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/profiles/SpecimenUvIps.fsh

Profile: SpecimenUvIps
Parent: Specimen
Id: Specimen-uv-ips
Title: "Specimen (IPS)"
Description: "This profile constrains the Specimen resource to represent the characteristics of a biological specimens in the context of laboratory results integrated to a patient summary."
* ^version = "1.1.0"
* ^status = #active
* ^date = "2024-06-19T10:50:07-05:00"
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^purpose = "Minimal specimen attributes, usable for the laboratory results section and entry of a patient summary."
* type 1..
* type only CodeableConceptIPS
* type from ResultsSpecimenTypeUvIps (preferred)
* type ^binding.extension[+].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* type ^binding.extension[=].valueString = "SpecimenType"
* subject only Reference(PatientUvIps)
* subject.reference 1..
* collection.method only CodeableConceptIPS
* collection.method from ResultsSpecimenCollectionMethodUvIps (preferred)
* collection.bodySite only CodeableConceptIPS
* collection.bodySite from BodySiteUvIps (preferred)
* collection.fastingStatus[x] only CodeableConceptIPS or Duration

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/AllergyIntoleranceUvIps.fsh

ValueSet: AllergyIntoleranceUvIps
Id: allergy-intolerance-uv-ips
Title: "Allergy Intolerance - IPS"
Description: """
IPS Allergy intolerance codes value set. This value set includes codes from SNOMED CT®: all descendants of 373873005 \|Pharmaceutical / biologic product (product)\|; all descendants of 105590001 \|Substance (substance)\|; all descendants of 420134006 \|Propensity to adverse reaction (finding)\|; all descendants or self of 716186003 \|No known allergy (situation)\|

SNOMED CT® ECL definition:\
< 373873005 \|Pharmaceutical / biologic product (product)\| OR < 105590001 \|Substance (substance)\| OR < 420134006 \|Propensity to adverse reaction (finding)\| OR \<\< 716186003 \|No known allergy (situation)\|
"""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system http://snomed.info/sct
    where concept descendent-of #105590001 "Substance (substance)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #373873005 "Pharmaceutical / biologic product (product)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #420134006 "Propensity to adverse reaction (finding)"
* include codes from system http://snomed.info/sct
    where concept is-a #716186003 "No known allergy (situation)"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/AllergyReactionUvIps.fsh

ValueSet: AllergyReactionUvIps
Id: allergy-reaction-uv-ips
Title: "Allergy Reaction - IPS"
Description: """
IPS allergy reaction value set. This value set includes a set of SNOMED CT codes  and descendants (all top level codes are included in the SNOMED CT IPS Terminology) that may be used to represent allergy or intolerance reactions.

SNOMED CT® ECL definition:\
\<\< 4386001 |Bronchospasm (finding)| OR \<\< 9826008 |Conjunctivitis (disorder)| OR \<\< 23924001 |Tight chest (finding)| OR \<\< 24079001 |Atopic dermatitis (disorder)| OR \<\< 31996006 |Vasculitis (disorder)| OR \<\< 39579001 |Anaphylaxis (disorder)| OR \<\< 41291007 |Angioedema (disorder)| OR \<\< 43116000 |Eczema (disorder)| OR \<\< 49727002 |Cough (finding)| OR \<\< 51599000 |Edema of larynx (disorder)| OR \<\< 62315008 |Diarrhea (finding)| OR \<\< 70076002 |Rhinitis (disorder)| OR \<\< 73442001 |Stevens-Johnson syndrome (disorder)| OR \<\< 76067001 |Sneezing (finding)| OR \<\< 91175000 |Seizure (finding)| OR \<\< 126485001 |Urticaria (disorder)| OR \<\< 162290004 |Dry eyes (finding)| OR \<\< 195967001 |Asthma (disorder)| OR \<\< 247472004 |Weal (disorder)| OR \<\< 267036007 |Dyspnea (finding)| OR \<\< 271757001 |Papular eruption (disorder)| OR \<\< 271759003 |Bullous eruption (disorder)| OR \<\< 271807003 |Eruption of skin (disorder)| OR \<\< 410430005 |Cardiorespiratory arrest (disorder)| OR \<\< 418363000 |Itching of skin (finding)| OR \<\< 422400008 |Vomiting (disorder)| OR \<\< 422587007 |Nausea (finding)| OR \<\< 698247007 |Cardiac arrhythmia (disorder)| OR \<\< 702809001 |Drug reaction with eosinophilia and systemic symptoms (disorder)| OR \<\< 768962006 |Lyell syndrome (disorder)| OR \<\< 781682005 |Hyperemia of eye (finding)|
"""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system http://snomed.info/sct
    where concept is-a #4386001 "Bronchospasm (finding)"
* include codes from system http://snomed.info/sct
    where concept is-a #9826008 "Conjunctivitis (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #23924001 "Tight chest (finding)"
* include codes from system http://snomed.info/sct
    where concept is-a #24079001 "Atopic dermatitis (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #31996006 "Vasculitis (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #39579001 "Anaphylaxis (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #41291007 "Angioedema (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #43116000 "Eczema (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #49727002 "Cough (finding)"
* include codes from system http://snomed.info/sct
    where concept is-a #51599000 "Edema of larynx (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #62315008 "Diarrhea (finding)"
* include codes from system http://snomed.info/sct
    where concept is-a #70076002 "Rhinitis (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #73442001 "Stevens-Johnson syndrome (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #76067001 "Sneezing (finding)"
* include codes from system http://snomed.info/sct
    where concept is-a #91175000 "Seizure (finding)"
* include codes from system http://snomed.info/sct
    where concept is-a #126485001 "Urticaria (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #162290004 "Dry eyes (finding)"
* include codes from system http://snomed.info/sct
    where concept is-a #195967001 "Asthma (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #247472004 "Weal (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #267036007 "Dyspnea (finding)"
* include codes from system http://snomed.info/sct
    where concept is-a #271757001 "Papular eruption (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #271759003 "Bullous eruption (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #271807003 "Eruption of skin (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #410430005 "Cardiorespiratory arrest (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #418363000 "Itching of skin (finding)"
* include codes from system http://snomed.info/sct
    where concept is-a #422400008 "Vomiting (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #422587007 "Nausea (finding)"
* include codes from system http://snomed.info/sct
    where concept is-a #698247007 "Cardiac arrhythmia (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #702809001 "Drug reaction with eosinophilia and systemic symptoms (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #768962006 "Lyell syndrome (disorder)"
* include codes from system http://snomed.info/sct
    where concept is-a #781682005 "Hyperemia of eye (finding)"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/BodySiteUvIps.fsh

ValueSet: BodySiteUvIps
Id: body-site-uv-ips
Title: "Body Site - IPS"
Description: """
IPS body site value set. This value set includes a set of codes from SNOMED CT that may be used to represent body sites (e.g., for laboratory specimen collection). This value set includes codes from SNOMED CT®: all descendants of 442083009 \|Anatomical or acquired body structure (body structure)\|

SNOMED CT® ECL definition:\
< 442083009 \|Anatomical or acquired body structure (body structure)\|
"""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system http://snomed.info/sct
    where concept descendent-of #442083009 "Anatomical or acquired body structure (body structure)"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/CurrentSmokingStatusUvIps.fsh

ValueSet: CurrentSmokingStatusUvIps
Id: current-smoking-status-uv-ips
Title: "Current Smoking Status - IPS"
Description: """
HL7 IPS SNOMED value set for smoking status.  This value set includes a set of specific SNOMED CT codes (no subtypes included) that may be used to represent smoking status.

SNOMED CT® ECL definition:\
449868002 |Smokes tobacco daily (finding)| OR 428041000124106 |Occasional tobacco smoker (finding)| OR 8517006 |Ex-smoker (finding)| OR 266919005 |Never smoked tobacco (finding)| OR 77176002 |Smoker (finding)| OR 266927001 |Tobacco smoking consumption unknown (finding)| OR 230063004 |Heavy cigarette smoker (finding)| OR 230060001 |Light cigarette smoker (finding)|
"""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* http://snomed.info/sct#449868002 "Smokes tobacco daily (finding)"
* http://snomed.info/sct#428041000124106 "Occasional tobacco smoker (finding)"
* http://snomed.info/sct#8517006 "Ex-smoker (finding)"
* http://snomed.info/sct#266919005 "Never smoked tobacco (finding)"
* http://snomed.info/sct#77176002 "Smoker (finding)"
* http://snomed.info/sct#266927001 "Tobacco smoking consumption unknown (finding)"
* http://snomed.info/sct#230063004 "Heavy cigarette smoker (finding)"
* http://snomed.info/sct#230060001 "Light cigarette smoker (finding)"


---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/DiagnosticReportStatusUvIps.fsh

ValueSet: DiagnosticReportStatusUvIps
Id: diagnostics-report-status-uv-ips
Title: "Diagnostics Report Status Codes - IPS"
Description: """
IPS Diagnostic Report status codes allowable for diagnostics reports.  This value set includes all status codes except \"entered-in-error\" from http://hl7.org/fhir/diagnostic-report-status.
"""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "Produced by HL7 under the terms of HL7® Governance and Operations Manual relating to Intellectual Property (Section 16), specifically its copyright, trademark and patent provisions."
* include codes from system $diagnostic-report-status
    where concept is-a #registered "Registered"
* include codes from system $diagnostic-report-status
    where concept is-a #partial "Partial"
* include codes from system $diagnostic-report-status
    where concept is-a #preliminary "Preliminary"
* include codes from system $diagnostic-report-status
    where concept is-a #final "Final"
* include codes from system $diagnostic-report-status
    where concept is-a #amended "Amended"
* include codes from system $diagnostic-report-status
    where concept is-a #corrected "Corrected"
* include codes from system $diagnostic-report-status
    where concept is-a #corrected "Appended"
* include codes from system $diagnostic-report-status
    where concept is-a #cancelled "Cancelled"
* include codes from system $diagnostic-report-status
    where concept is-a #unknown "Unknown"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/HealthcareProfessionalRolesUvIps.fsh

ValueSet: HealthcareProfessionalRolesUvIps
Id: healthcare-professional-roles-uv-ips
Title: "Healthcare Professional Roles - IPS"
Description: "IPS Healthcare Professional Roles"
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^identifier.use = #official
* ^identifier.system = "http://art-decor.org/ns/oids/vs"
* ^identifier.value = "2.16.840.1.113883.11.22.53"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This artifact includes content from International Standard Classification of Occupations (ISCO). ISCO is copyright International Labour Organization (ILO). Terms & Conditions in http://www.ilo.org/global/copyright/lang--en/index.htm"
* include codes from system urn:oid:2.16.840.1.113883.2.9.6.2.7

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/ImagingStudyStatusUvIps.fsh

ValueSet: ImagingStudyStatusUvIps
Id: imaging-study-status-uv-ips
Title: "Imaging Study Status Codes - IPS"
Description: """
IPS Imaging Study status codes allowable for results. section  This value set includes all imaging study status codes except \"entered-in-error\" from http://hl7.org/fhir/imagingstudy-status.
"""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "Produced by HL7 under the terms of HL7® Governance and Operations Manual relating to Intellectual Property (Section 16), specifically its copyright, trademark and patent provisions."
* include codes from system $imaging-study-status
    where concept is-a #registered "Registered"
* include codes from system $imaging-study-status
    where concept is-a #available "Available"
* include codes from system $imaging-study-status
    where concept is-a #cancelled "Cancelled"
* include codes from system $imaging-study-status
    where concept is-a #unknown "Unknown"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/MedicalDevicesUvIps.fsh

ValueSet: MedicalDevicesUvIps
Id: medical-devices-uv-ips
Title: "Medical Devices - IPS"
Description: """
IPS Medical device codes value set.  This value set includes codes from SNOMED CT (SNOMED CT®) that are included in: all descendants of 49062001 \|Device (physical object)\|; all descendants or self of 787483001 \|No known device use (situation)\|

SNOMED CT® ECL definition:\
< 49062001 \|Device (physical object)\| OR \<\< 787483001 \|No known device use (situation)\|
"""
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system http://snomed.info/sct
    where concept descendent-of #49062001 "Device (physical object)"
* include codes from system http://snomed.info/sct
    where concept is-a #787483001 "No known device use (situation)"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/MedicationsExampleUvIps.fsh

ValueSet: MedicationsExampleUvIps
Id: medication-example-uv-ips
Title: "Medications - example (IPS)"
Description: "This value set provides an example of possible medication coded concepts. This value set will be removed in a future release and has been replaced with [medication-uv-ips](./ValueSet-medication-uv-ips.html)."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SNOMED_CT#777067000 "Acetaminophen only product"
* SNOMED_CT#774587000 "Amoxicillin and clavulanic acid only product"
* SNOMED_CT#776556004 "Lithium citrate only product"
* SNOMED_CT#774409003 "Acenocoumarol only product"
* SNOMED_CT#780130002 "Acetaminophen only product in rectal dose form"
* SNOMED_CT#778315007 "Amoxicillin and clavulanic acid only product in oral dose form"
* SNOMED_CT#779725005 "Lithium citrate only product in oral dose form"
* SNOMED_CT#778207007 "Acenocoumarol only product in oral dose form"
* SNOMED_CT#322257001 "Paracetamol 250 mg rectal suppository"
* SNOMED_CT#392259005 "Amoxicillin 875 mg and clavulanic acid (as clavulanate potassium) 125 mg oral tablet"
* SNOMED_CT#766489003 "Lithium citrate 104 mg/mL oral solution"
* SNOMED_CT#319740004 "Acenocoumarol 1 mg oral tablet"
* RxNorm#331055 "Amoxicillin 1000 MG"
* RxNorm#437158 "Acetaminophen 100 MG"
* RxNorm#332122 "lithium citrate 60 MG/ML"
* Ndc#0781-1852 "Amoxicillin and Clavulanate Potassium  (product)"
* Ndc#0781-1852-20 "Amoxicillin and Clavulanate Potassium, 20 TABLET, FILM COATED in 1 BOTTLE (0781-1852-20) (package)"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/MedicationsUvIps.fsh

ValueSet: MedicationsUvIps
Id: medication-uv-ips
Title: "Medications - IPS"
Description: """
IPS Medication codes value set.  This value set includes codes from SNOMED CT®: all descendants of 763158003 \|Medicinal product (product)\|; excluding the descendants or self of 787859002 \|Vaccine product (medicinal product)\|; including all descendants or self of 787481004 \|No known medications (situation)\|

SNOMED CT® ECL definition:\
(< 763158003 \|Medicinal product (product)\| MINUS \<\< 787859002 \|Vaccine product (medicinal product)\|) OR \<\< 787481004 \|No known medications (situation)\|
"""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system http://snomed.info/sct
    where concept descendent-of #763158003 "Medicinal product (product)"
* include codes from system http://snomed.info/sct
    where concept is-a #787481004 "No known medications (situation)"    
* exclude codes from system http://snomed.info/sct
    where concept is-a #787859002 "Vaccine product (medicinal product)"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/MedicineActiveSubstancesUvIps.fsh

ValueSet: MedicineActiveSubstancesUvIps
Id: medicine-active-substances-uv-ips
Title: "Medicine Active Substances - IPS"
Description: """
IPS Medicine active substance codes value set.  This value set includes codes from SNOMED CT®: all descendants of 410942007 \|Drug or medicament (substance)\|

SNOMED CT® ECL definition:\
< 410942007 \|Drug or medicament (substance)\|\

Future implementations should consider ISO 11238 Health informatics -- Identification of medicinal products -- Data elements and structures for the unique identification and exchange of regulated information on substances.
"""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system http://snomed.info/sct
    where concept descendent-of #410942007 "Drug or medicament (substance)"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/MedicineDoseFormUvIps.fsh

ValueSet: MedicineDoseFormUvIps
Id: medicine-doseform
Title: "Medicine Doseform - IPS"
Description: """
EDQM (European Directorate for the Quality of Medicines and Healthcare) Dose Form codes.  This Value Set includes all the EDQM Standard Terms having:  
[Concept Status] = ‘Current’ AND  
[Concept Class] IN (‘PDF’, ‘CMT’, ‘CDF’, ‘PFT') AND  
[Domain] = 'Human and Veterinary'  

PDF = 'Pharmaceutical dose form'; CMT = 'Combined terms'; CDF = 'Combined pharmaceutical dose form'; PFT = 'Patient Friendly'
"""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^identifier.use = #official
* ^identifier.system = "http://art-decor.org/ns/oids/vs"
* ^identifier.value = "2.16.840.1.113883.11.22.25"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This artifact includes content from EDQM Standard Terms. EDQM Standard Terms are copyright European Directorate for the Quality of Medicines. Terms & Conditions in https://www.edqm.eu/en/standard-terms-database"
* include codes from system $standardterms
    where status = "Current" and
    class = "PDF" and
    domain = "Human and Veterinary"
* include codes from system $standardterms
    where status = "Current" and
    class = "CMT" and
    domain = "Human and Veterinary"
* include codes from system $standardterms
    where status = "Current" and
    class = "CDF" and
    domain = "Human and Veterinary"
* include codes from system $standardterms
    where status = "Current" and
    class = "PFT" and
    domain = "Human and Veterinary"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/MedicineRouteOfAdministrationUvIps.fsh

ValueSet: MedicineRouteOfAdministrationUvIps
Id: medicine-route-of-administration
Title: "Medicine Route of Administration - IPS"
Description: """
EDQM (European Directorate for the Quality of Medicines and Healthcare) Route of Administration codes.  This Value Set includes all the EDQM Standard Terms having:  
[Concept Status] = ‘Current’ AND  
[Concept Class] = 'ROA' AND  
[Domain] = 'Human and Veterinary'  

ROA = 'Route of administration'
"""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^identifier.use = #official
* ^identifier.system = "http://art-decor.org/ns/oids/vs"
* ^identifier.value = "2.16.840.1.113883.11.22.33"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This artifact includes content from EDQM Standard Terms. EDQM Standard Terms are copyright European Directorate for the Quality of Medicines. Terms & Conditions in https://www.edqm.eu/en/standard-terms-database"
* include codes from system $standardterms
    where status = "Current" and
    class = "ROA" and
    domain = "Human and Veterinary"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/PersonalRelationshipUvIps.fsh

ValueSet: PersonalRelationshipUvIps
Id: personal-relationship-uv-ips
Title: "Personal Relationship - IPS [Deprecated]"
Description: "The Value Set is used (optionally) to code the type of contact relationship between a person and the patient. This value set has been deprecated and will be removed in a future release.  It has been replaced with [PersonalRelationshipRoleType](https://terminology.hl7.org/3.1.0/ValueSet-v3-PersonalRelationshipRoleType.html)"
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^identifier.use = #official
* ^identifier.system = "http://art-decor.org/ns/oids/vs"
* ^identifier.value = "2.16.840.1.113883.11.22.54"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "Produced by HL7 under the terms of HL7® Governance and Operations Manual relating to Intellectual Property (Section 16), specifically its copyright, trademark and patent provisions."
* $v3-RoleCode#AUNT "aunt"
* $v3-RoleCode#CHILD "child"
* $v3-RoleCode#CHLDADOPT "adopted child"
* $v3-RoleCode#CHLDFOST "foster child"
* $v3-RoleCode#CHLDINLAW "child in-law"
* $v3-RoleCode#COUSN "cousin"
* $v3-RoleCode#DAU "natural daughter"
* $v3-RoleCode#DAUADOPT "adopted daughter"
* $v3-RoleCode#DAUC "daughter"
* $v3-RoleCode#DAUFOST "foster daughter"
* $v3-RoleCode#DAUINLAW "daughter in-law"
* $v3-RoleCode#DOMPART "domestic partner"
* $v3-RoleCode#FAMMEMB "family member"
* $v3-RoleCode#FRND "unrelated friend"
* $v3-RoleCode#FTH "father"
* $v3-RoleCode#FTHINLAW "father-in-law"
* $v3-RoleCode#GGRPRN "great grandparent"
* $v3-RoleCode#GRNDCHILD "grandchild"
* $v3-RoleCode#GRPRN "grandparent"
* $v3-RoleCode#MTH "mother"
* $v3-RoleCode#MTHINLAW "mother-in-law"
* $v3-RoleCode#NBOR "neighbor"
* $v3-RoleCode#NCHILD "natural child"
* $v3-RoleCode#NIENEPH "niece/nephew"
* $v3-RoleCode#PRN "parent"
* $v3-RoleCode#PRNINLAW "parent in-law"
* $v3-RoleCode#ROOM "roomate"
* $v3-RoleCode#SIB "sibling"
* $v3-RoleCode#SIGOTHR "significant other"
* $v3-RoleCode#SON "natural son"
* $v3-RoleCode#SONADOPT "adopted son"
* $v3-RoleCode#SONC "son"
* $v3-RoleCode#SONFOST "foster son"
* $v3-RoleCode#SONINLAW "son in-law"
* $v3-RoleCode#SPS "spouse"
* $v3-RoleCode#STPCHLD "step child"
* $v3-RoleCode#STPDAU "stepdaughter"
* $v3-RoleCode#STPSON "stepson"
* $v3-RoleCode#UNCLE "uncle"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/PregnanciesSummaryUvIps.fsh

ValueSet: PregnanciesSummaryUvIps
Id: pregnancies-summary-uv-ips
Title: "Pregnancy Outcome - IPS"
Description: "IPS Pregnancies Summary"
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^identifier.use = #official
* ^identifier.system = "http://art-decor.org/ns/oids/vs"
* ^identifier.value = "2.16.840.1.113883.11.22.21"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* LOINC#11636-8 "[#] Births.live"
* LOINC#11637-6 "[#] Births.preterm"
* LOINC#11638-4 "[#] Births.still living"
* LOINC#11639-2 "[#] Births.term"
* LOINC#11640-0 "[#] Births total"
* LOINC#11612-9 "[#] Abortions"
* LOINC#11613-7 "[#] Abortions.induced"
* LOINC#11614-5 "[#] Abortions.spontaneous"
* LOINC#33065-4 "[#] Ectopic pregnancy"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/PregnancyExpectedDeliveryDateMethodUvIps.fsh

ValueSet: PregnancyExpectedDeliveryDateMethodUvIps
Id: edd-method-uv-ips
Title: "Pregnancy Expected Delivery Date Method - IPS"
Description: "IPS Expected Delivery Date Method"
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^identifier.use = #official
* ^identifier.system = "http://art-decor.org/ns/oids/vs"
* ^identifier.value = "2.16.840.1.113883.11.22.20"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* LOINC#11778-8 "Delivery date Estimated"
* LOINC#11779-6 "Delivery date Estimated from last menstrual period"
* LOINC#11780-4 "Delivery date Estimated from ovulation date"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/PregnancyStatusUvIps.fsh

ValueSet: PregnancyStatusUvIps
Id: pregnancy-status-uv-ips
Title: "Pregnancy Status - IPS"
Description: """
IPS pregnancy status codes value set.  This value set includes codes from SNOMED CT®: 77386006 \|Pregnant\|; 60001007 \|Not pregnant\|; 152231000119106 \|Pregnancy not yet confirmed\|; 146799005 \|Possible pregnancy\|

SNOMED CT® ECL definition:\
77386006 \|Pregnant\| OR 60001007 \|Not pregnant\| OR 152231000119106 \|Pregnancy not yet confirmed\| OR 146799005 \|Possible pregnancy\|
"""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* http://snomed.info/sct#77386006 "Pregnant"
* http://snomed.info/sct#60001007 "Not pregnant"
* http://snomed.info/sct#152231000119106 "Pregnancy not yet confirmed"
* http://snomed.info/sct#146799005 "Possible pregnancy"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/ProblemsUvIps.fsh

ValueSet: ProblemsUvIps
Id: problems-uv-ips
Title: "Problems - IPS"
Description: """
IPS Problem (Condition) codes value set.  This value set includes codes from SNOMED CT®: all descendants of 404684003 \|Clinical finding (finding)\|; all descendants of 243796009 \|Situation with explicit context (situation)\|; all descendants of 272379006 \|Event (event)\|; all descendants or self of 160245001 \|No current problems or disability (situation)\|.  The descendants of 71388002 \|Procedure (procedure)\| (which were included in the CORE problem list) are not included, as they are expected to be represented separately in the History of Procedures Section.

SNOMED CT® ECL definition:\
< 404684003 \|Clinical finding (finding)\| OR < 243796009 \|Situation with explicit context (situation)\| OR < 272379006 \|Event (event)\| OR \<\< 160245001 \|No current problems or disability (situation)\|
"""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system http://snomed.info/sct
    where concept descendent-of #404684003 "Clinical finding (finding)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #243796009 "Situation with explicit context (situation)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #272379006 "Event (event)"
* include codes from system http://snomed.info/sct
    where concept is-a #160245001 "No current problems or disability (situation)"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/ProblemTypeLoinc.fsh

ValueSet: ProblemTypeLoinc
Id: problem-type-loinc
Title: "Problem Type (LOINC)"
Description: "This value set indicates the level of medical judgment used to determine the existence of a problem."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^identifier.use = #official
* ^identifier.system = "http://art-decor.org/ns/oids/vs"
* ^identifier.value = "2.16.840.1.113883.11.22.16"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* LOINC#75326-9 "Problem"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/ProblemTypeUvIps.fsh

ValueSet: ProblemTypeUvIps
Id: problem-type-uv-ips
Title: "Problem Type - IPS"
Description: "This value set provides a category for the condition as a clinical problem for inclusion in the patient summary."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ConditionCategoryCodes#problem-list-item "Problem List Item"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/ProceduresUvIps.fsh

ValueSet: ProceduresUvIps
Id: procedures-uv-ips
Title: "Procedures - IPS"
Description: """
IPS Procedure codes value set.  This value set includes codes from SNOMED CT®: all descendants of 71388002 \|Procedure (procedure)\|; excluding [all descendants or self of 14734007 \|Administrative procedure (procedure)\|; all descendants or self of 59524001 \|Blood bank procedure (procedure)\|; all descendants or self of 389067005 \|Community health procedure (procedure)\|; all descendants or self of 442006003 \|Determination of information related to transfusion (procedure)\|; all descendants or self of 225288009 \|Environmental care procedure (procedure)\|; all descendants or self of 308335008 \|Patient encounter procedure (procedure)\|; all descendants or self of 710135002 \|Promotion (procedure)\|; all descendants or self of 389084004 \|Staff related procedure (procedure)\|]; including all descendants or self of 787480003 \|No known procedures (situation)\|

SNOMED CT® ECL definition:\
(< 71388002 \|Procedure (procedure)\| MINUS (\<\< 14734007 \|Administrative procedure (procedure)\| OR \<\< 59524001 \|Blood bank procedure (procedure)\| OR \<\< 389067005 \|Community health procedure (procedure)\| OR \<\< 442006003 \|Determination of information related to transfusion (procedure)\| OR \<\< 225288009 \|Environmental care procedure (procedure)\| OR \<\< 308335008 \|Patient encounter procedure (procedure)\| OR \<\< 710135002 \|Promotion (procedure)\| OR \<\< 389084004 \|Staff related procedure (procedure)\|)) OR << 787480003 \|No known procedures (situation)\|
"""
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system http://snomed.info/sct
    where concept descendent-of #71388002 "Procedure (procedure)"
* include codes from system http://snomed.info/sct
    where concept is-a #787480003 "No known procedures (situation)"
* exclude codes from system http://snomed.info/sct
    where concept is-a #14734007 "Administrative procedure (procedure)"
* exclude codes from system http://snomed.info/sct
    where concept is-a #59524001 "Blood bank procedure (procedure)"
* exclude codes from system http://snomed.info/sct
    where concept is-a #389067005 "Community health procedure (procedure)"
* exclude codes from system http://snomed.info/sct
    where concept is-a #442006003 "Determination of information related to transfusion (procedure)"
* exclude codes from system http://snomed.info/sct
    where concept is-a #225288009 "Environmental care procedure (procedure)"
* exclude codes from system http://snomed.info/sct
    where concept is-a #308335008 "Patient encounter procedure (procedure)"
* exclude codes from system http://snomed.info/sct
    where concept is-a #710135002 "Promotion (procedure)"
* exclude codes from system http://snomed.info/sct
    where concept is-a #389084004 "Staff related procedure (procedure)"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/ResultsCodedValuesLaboratoryPathologyUvIps.fsh

ValueSet: ResultsCodedValuesLaboratoryPathologyUvIps
Id: results-coded-values-laboratory-pathology-uv-ips
Title: "Results Coded Values Laboratory/Pathology - IPS"
Description: """
IPS Results Coded Values Laboratory/Pathology value set.  This value set includes codes from SNOMED CT®: all descendants of 365636006 \|Finding of blood group (finding)\|; all descendants of 260411009 \|Presence findings (qualifier value)\|; all descendants of 272519000 \|Absence findings (qualifier value)\|; all descendants of 409822003 \|Domain Bacteria (organism)\|; all descendants of 441649000 \|Class Cestoda and/or Class Trematoda and/or Phylum Nemata (organism)\|; all descendants of 414561005 \|Kingdom Fungi (organism)\|; all descendants of 84676004 \|Prion (organism)\|; all descendants of 49872002 \|Virus (organism)\|; all descendants of 417396000 \|Kingdom Protozoa (organism)\|; all descendants of 419036000 \|Domain Archaea (organism)\|; all descendants of 426785004 \|Kingdom Chromista (organism)\|; all descendants of 370570004 \|Kingdom Protoctista (organism)\|; all descendants of 417377004 \|Kingdom Viridiplantae (organism)\|; all descendants of 243565002 \|Slime mold (organism)\|; all descendants of 106253005 \|Histologic grading differentiation AND/OR behavior (qualifier value)\|; all descendants of 373369003 \|Finding of histologic grading differentiation AND/OR behavior (finding)\|; all descendants of 399981008 \|Neoplasm and/or hamartoma (disorder)\|

SNOMED CT® ECL definition:\
< 365636006 \|Finding of blood group (finding)\| OR < 260411009 \|Presence findings (qualifier value)\| OR < 272519000 \|Absence findings (qualifier value)\| OR < 409822003 \|Domain Bacteria (organism)\| OR < 441649000 \|Class Cestoda and/or Class Trematoda and/or Phylum Nemata (organism)\| OR < 414561005 \|Kingdom Fungi (organism)\| OR < 84676004 \|Prion (organism)\| OR < 49872002 \|Virus (organism)\| OR < 417396000 \|Kingdom Protozoa (organism)\| OR < 419036000 \|Domain Archaea (organism)\| OR < 426785004 \|Kingdom Chromista (organism)\| OR < 370570004 \|Kingdom Protoctista (organism)\| OR < 417377004 \|Kingdom Viridiplantae (organism)\| OR < 243565002 \|Slime mold (organism)\| OR < 106253005 \|Histologic grading differentiation AND/OR behavior (qualifier value)\| OR < 373369003 \|Finding of histologic grading differentiation AND/OR behavior (finding)\| OR < 399981008 \|Neoplasm and/or hamartoma (disorder)\|
"""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system http://snomed.info/sct
    where concept descendent-of #365636006 "Finding of blood group (finding)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #260411009 "Presence findings (qualifier value)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #272519000 "Absence findings (qualifier value)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #409822003 "Domain Bacteria (organism)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #441649000 "Class Cestoda and/or Class Trematoda and/or Phylum Nemata (organism)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #414561005 "Kingdom Fungi (organism)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #84676004 "Prion (organism)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #49872002 "Virus (organism)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #417396000 "Kingdom Protozoa (organism)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #419036000 "Domain Archaea (organism)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #426785004 "Kingdom Chromista (organism)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #370570004 "Kingdom Protoctista (organism)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #417377004 "Kingdom Viridiplantae (organism)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #243565002 "Slime mold (organism)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #106253005 "Histologic grading differentiation AND/OR behavior (qualifier value)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #373369003 "Finding of histologic grading differentiation AND/OR behavior (finding)"
* include codes from system http://snomed.info/sct
    where concept descendent-of #399981008 "Neoplasm and/or hamartoma (disorder)"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/ResultsLaboratoryPathologyObservationUvIps.fsh

ValueSet: ResultsLaboratoryPathologyObservationUvIps
Id: results-laboratory-pathology-observations-uv-ips
Title: "Results Laboratory/Pathology Observation - IPS"
Description: "Value Set Definition: LOINC {STATUS in {ACTIVE}, CLASSTYPE in {Laboratory class (1)}, CLASS exclude {LP62148-9 (NR STATS), LP175679-2 (H&P.HX.LAB), LP7785-1 (CHALSKIN), LP94892-4 (LABORDERS)}}"
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^identifier.use = #official
* ^identifier.system = "http://art-decor.org/ns/oids/vs"
* ^identifier.value = "2.16.840.1.113883.11.22.39"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* include codes from system LOINC where STATUS = "ACTIVE" and CLASSTYPE = "Laboratory class"
* exclude codes from system LOINC
    where CLASS = "LP62148-9" // NR STATS
* exclude codes from system LOINC
    where CLASS = "LP175679-2" // H&P.HX.LAB
* exclude codes from system LOINC
    where CLASS = "LP7785-1" // CHALSKIN
* exclude codes from system LOINC
    where CLASS = "LP94892-4" // LABORDERS

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/ResultsRadiologyMeasurementObservationUvIps.fsh

ValueSet: ResultsRadiologyMeasurementObservationUvIps
Id: results-radiology-numobs-uv-ips
Title: "Results Radiology Measurement Observation - IPS"
Description: "Extensible value set including SNOMED CT and DICOM concepts for Linear, Area and Volume Measurements"
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $DCM#121207 "Height"
* $DCM#121211 "Path length"
* $DCM#121206 "Distance"
* $DCM#121216 "Volume estimated from single 2D region"
* $DCM#121218 "Volume estimated from two non-coplanar 2D regions"
* $DCM#121217 "Volume estimated from three or more non-coplanar 2D regions"
* $DCM#121222 "Volume of sphere"
* $DCM#121221 "Volume of ellipsoid"
* $DCM#121220 "Volume of circumscribed sphere"
* $DCM#121219 "Volume of bounding three dimensional region"
* SNOMED_CT#410668003 "Length"
* SNOMED_CT#103355008 "Width"
* SNOMED_CT#131197000 "Depth"
* SNOMED_CT#81827009 "Diameter"
* SNOMED_CT#103339001 "Long Axis"
* SNOMED_CT#103340004 "Short Axis"
* SNOMED_CT#131187009 "Major Axis"
* SNOMED_CT#131188004 "Minor Axis"
* SNOMED_CT#131189007 "Perpendicular Axis"
* SNOMED_CT#131190003 "Radius"
* SNOMED_CT#131191004 "Perimeter"
* SNOMED_CT#74551000 "Circumference"
* SNOMED_CT#131192006 "Diameter of circumscribed circle"
* SNOMED_CT#42798000 "Area"
* SNOMED_CT#131184002 "Area of defined region"
* SNOMED_CT#118565006 "Volume"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/ResultsRadiologyObservationUvIps.fsh

ValueSet: ResultsRadiologyObservationUvIps
Id: results-radiology-observations-uv-ips
Title: "Results Radiology Observation - IPS"
Description: """
 Value Set Definition: 
 LOINC {STATUS in {ACTIVE}, CLASS in LP29684-5 (\"RAD\")}
"""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^identifier.use = #official
* ^identifier.system = "http://art-decor.org/ns/oids/vs"
* ^identifier.value = "2.16.840.1.113883.11.22.40"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* include codes from system LOINC where STATUS = "ACTIVE" and CLASS = "LP29684-5" // RAD

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/ResultsRadiologyTextualObservationUvIps.fsh

ValueSet: ResultsRadiologyTextualObservationUvIps
Id: results-radiology-txtobs-uv-ips
Title: "Results Radiology Textual Observation - IPS"
Description: "IPS Results Radiology Textual Observation"
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $DCM#121065 "Procedure Description"
* $DCM#121069 "Previous Finding"
* $DCM#121071 "Finding"
* $DCM#121073 "Impression"
* $DCM#121075 "Recommendation"
* $DCM#121077 "Conclusion"
* $DCM#121110 "Patient Presentation"
* $DCM#121111 "Summary"
* LOINC#11329-0 "History"
* LOINC#55115-0 "Request"
* SNOMED_CT#116224001 "Complication of Procedure"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/ResultsSpecimenCollectionMethodUvIps.fsh

ValueSet: ResultsSpecimenCollectionMethodUvIps
Id: results-specimen-collection-method-uv-ips
Title: "Results Specimen Collection Method - IPS"
Description: """
IPS Specimen collection method codes value set.  This value set includes codes from SNOMED CT®: all descendants or self of 129316008 \|Aspiration - action (qualifier value)\|; all descendants or self of 129314006 \|Biopsy - action (qualifier value)\|; all descendants or self of 129300006 \|Puncture - action (qualifier value)\|; all descendants or self of 129304002 \|Excision - action (qualifier value)\|; all descendants or self of 129323009 \|Scraping - action (qualifier value)\|; all descendants or self of 73416001 \|Urine specimen collection, clean catch (procedure)\|; all descendants or self of 225113003 \|Timed urine collection (procedure)\|; all descendants or self of 70777001 \|Urine specimen collection, catheterized (procedure)\|; all descendants or self of 386089008 \|Collection of coughed sputum (procedure)\|; all descendants or self of 278450005 \|Finger-prick sampling (procedure)\| 

SNOMED CT® ECL definition:\
\<\< 129316008 \|Aspiration - action (qualifier value)\| OR \<\< 129314006 \|Biopsy - action (qualifier value)\| OR \<\< 129300006 \|Puncture - action (qualifier value)\| OR \<\< 129304002 \|Excision - action (qualifier value)\| OR \<\< 129323009 \|Scraping - action (qualifier value)\| OR \<\< 73416001 \|Urine specimen collection, clean catch (procedure)\| OR \<\< 225113003 \|Timed urine collection (procedure)\| OR \<\< 70777001 \|Urine specimen collection, catheterized (procedure)\| OR \<\< 386089008 \|Collection of coughed sputum (procedure)\| OR \<\< 278450005 \|Finger-prick sampling (procedure)\|
"""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system http://snomed.info/sct
    where concept is-a #129316008 "Aspiration - action (qualifier value)"
* include codes from system http://snomed.info/sct
    where concept is-a #129314006 "Biopsy - action (qualifier value)"
* include codes from system http://snomed.info/sct
    where concept is-a #129300006 "Puncture - action (qualifier value)"
* include codes from system http://snomed.info/sct
    where concept is-a #129304002 "Excision - action (qualifier value)"
* include codes from system http://snomed.info/sct
    where concept is-a #129323009 "Scraping - action (qualifier value)"
* include codes from system http://snomed.info/sct
    where concept is-a #73416001 "Urine specimen collection, clean catch (procedure)"
* include codes from system http://snomed.info/sct
    where concept is-a #225113003 "Timed urine collection (procedure)"
* include codes from system http://snomed.info/sct
    where concept is-a #70777001 "Urine specimen collection, catheterized (procedure)"
* include codes from system http://snomed.info/sct
    where concept is-a #386089008 "Collection of coughed sputum (procedure)"
* include codes from system http://snomed.info/sct
    where concept is-a #278450005 "Finger-prick sampling (procedure)"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/ResultsSpecimenTypeUvIps.fsh

ValueSet: ResultsSpecimenTypeUvIps
Id: results-specimen-type-uv-ips
Title: "Results Specimen Type - IPS"
Description: """
IPS Specimen Type codes value set.  This value set includes codes from SNOMED CT®: all descendants of 123038009 \|Specimen (specimen)\|

SNOMED CT® ECL definition:\
< 123038009 \|Specimen (specimen)\|
"""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system http://snomed.info/sct
    where concept descendent-of #123038009 "Specimen (specimen)"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/ResultsStatusUvIps.fsh

ValueSet: ResultsStatusUvIps
Id: results-status-uv-ips
Title: "Results Status Codes - IPS"
Description: """
IPS Observation status codes allowable for results.  This value set includes all observation status codes except \"entered-in-error\" from http://hl7.org/fhir/observation-status.
"""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "Produced by HL7 under the terms of HL7® Governance and Operations Manual relating to Intellectual Property (Section 16), specifically its copyright, trademark and patent provisions."
* include codes from system $observation-status
    where concept is-a #registered "Registered"
* include codes from system $observation-status
    where concept is-a #preliminary "Preliminary"
* include codes from system $observation-status
    where concept is-a #final "Final"
* include codes from system $observation-status
    where concept is-a #amended "Amended"
* include codes from system $observation-status
    where concept is-a #corrected "Corrected"
* include codes from system $observation-status
    where concept is-a #cancelled "Cancelled"
* include codes from system $observation-status
    where concept is-a #unknown "Unknown"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/VaccinesUvIps.fsh

ValueSet: VaccinesUvIps
Id: vaccines-uv-ips
Title: "Vaccines - IPS"
Description: """
IPS Vaccine codes value set.  This value set includes codes from SNOMED CT®: all descendants of 787859002 \|Vaccine product (product)\|; all descendants or self of 787482006 \|No known immunizations (situation)\|

SNOMED CT® ECL definition:\
< 787859002 \|Vaccine product (product)\| OR \<\< 787482006 \|No known immunizations (situation)\|
"""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system http://snomed.info/sct
    where concept descendent-of #787859002 "Vaccine product (product)"
* include codes from system http://snomed.info/sct
    where concept is-a #787482006 "No known immunizations (situation)"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/VaccinesWhoAtcUvIps.fsh

ValueSet: VaccinesWhoAtcUvIps
Id: vaccines-whoatc-uv-ips
Title: "Vaccines WHO ATC - IPS"
Description: "IPS Vaccine codes value set.  This value set includes codes from the World Health Organization Anatomical Therapeutic Chemical (ATC) classification system: all descendants of J07 \"VACCINES\""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This artifact includes content from Anatomical Therapeutic Chemical (ATC) classification system. ATC codes are copyright World Health Organization (WHO) Collaborating Centre for Drug Statistics Methodology. Terms & Conditions in https://www.whocc.no/use_of_atc_ddd/"
* include codes from system http://www.whocc.no/atc
    where concept descendent-of #J07 "VACCINES"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/VaccineTargetDiseasesUvIps.fsh

ValueSet: VaccineTargetDiseasesUvIps
Id: target-diseases-uv-ips
Title: "Vaccine Target Diseases - IPS"
Description: """
IPS Vaccine target disease codes value set.  This value set includes codes from SNOMED CT that represent specific vaccine target diseases (descendant concepts, if they exist, are not included).

SNOMED CT® ECL definition:\
4834000 \|Typhoid fever (disorder)\| OR 6142004 \|Influenza (disorder)\| OR 16541001 \|Yellow fever (disorder)\| OR 14189004 \|Measles (disorder)\| OR 14168008 \|Rabies (disorder)\| OR 18624000 \|Disease caused by Rotavirus (disorder)\| OR 23502006 \|Lyme disease (disorder)\| OR 23511006 \|Meningococcal infectious disease (disorder)\| OR 24662006 \|Influenza caused by Influenza B virus (disorder)\| OR 25225006 \|Disease caused by Adenovirus (disorder)\| OR 27836007 \|Pertussis (disorder)\| OR 32398004 \|Bronchitis (disorder)\| OR 36653000 \|Rubella (disorder)\| OR 36989005 \|Mumps (disorder)\| OR 37246009 \|Disease caused by rickettsiae (disorder)\| OR 38907003 \|Varicella (disorder)\| OR 40468003 \|Viral hepatitis, type A (disorder)\| OR 50711007 \|Viral hepatitis type C (disorder)\| OR 52947006 \|Japanese encephalitis virus disease (disorder)\| OR 56717001 \|Tuberculosis (disorder)\| OR 58750007 \|Plague (disorder)\| OR 63650001 \|Cholera (disorder)\| OR 66071002 \|Viral hepatitis type B (disorder)\| OR 67924001 \|Smallpox (disorder)\| OR 70036007 \|Haemophilus influenzae pneumonia (disorder)\| OR 75702008 \|Brucellosis (disorder)\| OR 76902006 \|Tetanus (disorder)\| OR 85904008 \|Paratyphoid fever (disorder)\| OR 111852003 \|Vaccinia (disorder)\| OR 186150001 \|Enteritis caused by rotavirus (disorder)\| OR 186772009 \|Rocky Mountain spotted fever (disorder)\| OR 186788009 \|Q fever (disorder)\| OR 240532009 \|Human papillomavirus infection (disorder)\| OR 240613006 \|Typhus group rickettsial disease (disorder)\| OR 372244006 \|Malignant melanoma (disorder)\| OR 397430003 \|Diphtheria caused by Corynebacterium diphtheriae (disorder)\| OR 398102009 \|Acute poliomyelitis (disorder)\| OR 398565003 \|Infection caused by Clostridium botulinum (disorder)\| OR 409498004 \|Anthrax (disorder)\| OR 417093003 \|Disease caused by West Nile virus (disorder)\| OR 442438000 \|Influenza caused by Influenza A virus (disorder)\| OR 442696006 \|Influenza caused by Influenza A virus subtype H1N1 (disorder)\| OR 450715004 \|Influenza caused by Influenza A virus subtype H7 (disorder)\| OR 707448003 \|Influenza caused by Influenza A virus subtype H7N9 (disorder)\| OR 709410003 \|Haemophilus influenzae type b infection (disorder)\| OR 712986001 \|Encephalitis caused by tick-borne encephalitis virus (disorder)\| OR 713083002 \|Influenza caused by Influenza A virus subtype H5 (disorder)\| OR 772810003 \|Influenza caused by Influenza A virus subtype H3N2 (disorder)\| OR 772828001 \|Influenza caused by Influenza A virus subtype H5N1 (disorder)\| OR 840539006 \|Disease caused by severe acute respiratory syndrome coronavirus 2 (disorder)\|
"""
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SNOMED_CT#4834000 "Typhoid fever (disorder)"
* SNOMED_CT#6142004 "Influenza (disorder)"
* SNOMED_CT#16541001 "Yellow fever (disorder)"
* SNOMED_CT#14189004 "Measles (disorder)"
* SNOMED_CT#14168008 "Rabies (disorder)"
* SNOMED_CT#18624000 "Disease caused by Rotavirus (disorder)"
* SNOMED_CT#23502006 "Lyme disease (disorder)"
* SNOMED_CT#23511006 "Meningococcal infectious disease (disorder)"
* SNOMED_CT#24662006 "Influenza caused by Influenza B virus (disorder)"
* SNOMED_CT#25225006 "Disease caused by Adenovirus (disorder)"
* SNOMED_CT#27836007 "Pertussis (disorder)"
* SNOMED_CT#32398004 "Bronchitis (disorder)"
* SNOMED_CT#36653000 "Rubella (disorder)"
* SNOMED_CT#36989005 "Mumps (disorder)"
* SNOMED_CT#37246009 "Disease caused by rickettsiae (disorder)"
* SNOMED_CT#38907003 "Varicella (disorder)"
* SNOMED_CT#40468003 "Viral hepatitis, type A (disorder)"
* SNOMED_CT#50711007 "Viral hepatitis type C (disorder)"
* SNOMED_CT#52947006 "Japanese encephalitis virus disease (disorder)"
* SNOMED_CT#56717001 "Tuberculosis (disorder)"
* SNOMED_CT#58750007 "Plague (disorder)"
* SNOMED_CT#63650001 "Cholera (disorder)"
* SNOMED_CT#66071002 "Viral hepatitis type B (disorder)"
* SNOMED_CT#67924001 "Smallpox (disorder)"
* SNOMED_CT#70036007 "Haemophilus influenzae pneumonia (disorder)"
* SNOMED_CT#75702008 "Brucellosis (disorder)"
* SNOMED_CT#76902006 "Tetanus (disorder)"
* SNOMED_CT#85904008 "Paratyphoid fever (disorder)"
* SNOMED_CT#111852003 "Vaccinia (disorder)"
* SNOMED_CT#186150001 "Enteritis caused by rotavirus (disorder)"
* SNOMED_CT#186772009 "Rocky Mountain spotted fever (disorder)"
* SNOMED_CT#186788009 "Q fever (disorder)"
* SNOMED_CT#240532009 "Human papillomavirus infection (disorder)"
* SNOMED_CT#240613006 "Typhus group rickettsial disease (disorder)"
* SNOMED_CT#372244006 "Malignant melanoma (disorder)"
* SNOMED_CT#397430003 "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
* SNOMED_CT#398102009 "Acute poliomyelitis (disorder)"
* SNOMED_CT#398565003 "Infection caused by Clostridium botulinum (disorder)"
* SNOMED_CT#409498004 "Anthrax (disorder)"
* SNOMED_CT#417093003 "Disease caused by West Nile virus (disorder)"
* SNOMED_CT#442438000 "Influenza caused by Influenza A virus (disorder)"
* SNOMED_CT#442696006 "Influenza caused by Influenza A virus subtype H1N1 (disorder)"
* SNOMED_CT#450715004 "Influenza caused by Influenza A virus subtype H7 (disorder)"
* SNOMED_CT#707448003 "Influenza caused by Influenza A virus subtype H7N9 (disorder)"
* SNOMED_CT#709410003 "Haemophilus influenzae type b infection (disorder)"
* SNOMED_CT#712986001 "Encephalitis caused by tick-borne encephalitis virus (disorder)"
* SNOMED_CT#713083002 "Influenza caused by Influenza A virus subtype H5 (disorder)"
* SNOMED_CT#772810003 "Influenza caused by Influenza A virus subtype H3N2 (disorder)"
* SNOMED_CT#772828001 "Influenza caused by Influenza A virus subtype H5N1 (disorder)"
* SNOMED_CT#840539006 "Disease caused by severe acute respiratory syndrome coronavirus 2 (disorder)"

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/valuesets/WhoAtcUvIps.fsh

ValueSet: WhoAtcUvIps
Id: whoatc-uv-ips
Title: "WHO ATC - IPS"
Description: "World Health Organization Anatomical Therapeutic Chemical (ATC) classification system."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^identifier.use = #official
* ^identifier.system = "http://art-decor.org/ns/oids/vs"
* ^identifier.value = "2.16.840.1.113883.11.22.29"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International / Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = $m49.htm#001
* ^immutable = false
* ^copyright = "This artifact includes content from Anatomical Therapeutic Chemical (ATC) classification system. ATC codes are copyright World Health Organization (WHO) Collaborating Centre for Drug Statistics Methodology. Terms & Conditions in https://www.whocc.no/use_of_atc_ddd/"
* include codes from system http://www.whocc.no/atc

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/aliases.fsh

Alias: $standardterms = http://standardterms.edqm.eu
Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: $allergyintolerance-clinical = http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical
Alias: $allergyintolerance-verification = http://terminology.hl7.org/CodeSystem/allergyintolerance-verification
Alias: $allergyintolerance-abatement = http://hl7.org/fhir/StructureDefinition/allergyintolerance-abatement
Alias: $sct = http://snomed.info/sct
Alias: $rxnorm = http://www.nlm.nih.gov/research/umls/rxnorm
Alias: $atc = http://www.whocc.no/atc
Alias: $m49.htm = http://unstats.un.org/unsd/methods/m49/m49.htm
Alias: $loinc = http://loinc.org
Alias: $v3-ActClass = http://terminology.hl7.org/CodeSystem/v3-ActClass
Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $v2-0074 = http://terminology.hl7.org/CodeSystem/v2-0074
Alias: $cnk_product_codes = https://cnk.apb.be/codings/cnk_product_codes
Alias: $media-type = http://terminology.hl7.org/CodeSystem/media-type
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $v3-ObservationInterpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation
Alias: $referencerange-meaning = http://terminology.hl7.org/CodeSystem/referencerange-meaning
Alias: $condition-ver-status = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $observation-status = http://hl7.org/fhir/observation-status
Alias: $diagnostic-report-status = http://hl7.org/fhir/diagnostic-report-status
Alias: $imaging-study-status = 	http://hl7.org/fhir/imagingstudy-status
Alias: $icd-10 = http://hl7.org/fhir/sid/icd-10
Alias: $icd-o-3 = http://terminology.hl7.org/CodeSystem/icd-o-3
Alias: $organization-type = http://terminology.hl7.org/CodeSystem/organization-type
Alias: $v2-0360 = http://terminology.hl7.org/CodeSystem/v2-0360
Alias: $list-empty-reason = http://terminology.hl7.org/CodeSystem/list-empty-reason
Alias: $v3-MaritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $v2-0131 = http://terminology.hl7.org/CodeSystem/v2-0131
Alias: $cvx = http://hl7.org/fhir/sid/cvx
Alias: $v3-RouteOfAdministration = http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration
Alias: $clinicaldocument = http://hl7.org/fhir/StructureDefinition/clinicaldocument
Alias: $vitalsigns = http://hl7.org/fhir/StructureDefinition/vitalsigns
Alias: $data-absent-reason = http://hl7.org/fhir/StructureDefinition/data-absent-reason
Alias: $workflow-supportingInfo = http://hl7.org/fhir/StructureDefinition/workflow-supportingInfo
Alias: $flag-priority = http://hl7.org/fhir/StructureDefinition/flag-priority
Alias: $condition-severity = http://hl7.org/fhir/ValueSet/condition-severity
Alias: $vital-signs-profile = http://hl7.org/fhir/StructureDefinition/vitalsigns
Alias: $composition-section-note = http://hl7.org/fhir/StructureDefinition/note
Alias: $flag-category = http://terminology.hl7.org/CodeSystem/flag-category
Alias: $flag-priority-code = http://hl7.org/fhir/flag-priority-code

---

File: repos/HL7_SLASH_fhir-ips/input/fsh/CapabilityStatement-uv-ips.fsh

Instance: ips-server
InstanceOf: CapabilityStatement
Title: "IPS Server Capability Statement"
Description: "This section describes the expected capabilities of the IPS Server actor which is responsible for providing responses to the queries submitted for IPS documents. The list of FHIR profiles and operations supported by IPS Servers are defined."
Usage: #definition
* url = "http://hl7.org/fhir/uv/ips/CapabilityStatement/ips-server"
* version = "1.1.0"
* name = "IpsServerCapabilityStatement"
* title = "IPS Server Capability Statement"
* status = #active
* experimental = false
* date = "2022-01-05T13:15:56.964-00:00"
* publisher = "HL7 International / Patient Care"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* description = "This section describes the expected capabilities of the IPS Server actor which is responsible for providing responses to the queries submitted for IPS documents. The list of FHIR profiles and operations supported by IPS Servers are defined."
* jurisdiction = $m49.htm#001
* copyright = "Used by permission of HL7 International, all rights reserved Creative Commons License"
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #application/fhir+xml
* format[+] = #xml
* format[+] = #application/fhir+json
* format[+] = #json
* rest.mode = #server
* rest.resource[0].type = #Bundle
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHALL
* rest.resource[=].profile = "http://hl7.org/fhir/uv/ips/StructureDefinition/Bundle-uv-ips"
* rest.resource[+].type = #Composition
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHALL
* rest.resource[=].profile = "http://hl7.org/fhir/uv/ips/StructureDefinition/Composition-uv-ips"
* rest.resource[+].type = #Patient
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHALL
* rest.resource[=].profile = "http://hl7.org/fhir/uv/ips/StructureDefinition/Patient-uv-ips"
* rest.resource[=].operation.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].operation.extension.valueCode = #SHOULD
* rest.resource[=].operation.name = "summary"
* rest.resource[=].operation.definition = "http://hl7.org/fhir/uv/ips/OperationDefinition/summary"
* rest.resource[+].type = #AllergyIntolerance
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/ips/StructureDefinition/AllergyIntolerance-uv-ips"
* rest.resource[+].type = #Condition
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/ips/StructureDefinition/Condition-uv-ips"
* rest.resource[+].type = #MedicationRequest
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/ips/StructureDefinition/MedicationRequest-uv-ips"
* rest.resource[=].documentation = "Some systems may only support MedicationRequest(IPS) or MedicationStatement(IPS)."
* rest.resource[+].type = #MedicationStatement
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/ips/StructureDefinition/MedicationStatement-uv-ips"
* rest.resource[=].documentation = "Some systems may only support MedicationRequest(IPS) or MedicationStatement(IPS)."
* rest.resource[+].type = #CarePlan
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[+].type = #ClinicalImpression
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[+].type = #Consent
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[+].type = #Device
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/ips/StructureDefinition/Device-uv-ips"
* rest.resource[+].type = #DeviceUseStatement
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/ips/StructureDefinition/DeviceUseStatement-uv-ips"
* rest.resource[+].type = #DiagnosticReport
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/ips/StructureDefinition/DiagnosticReport-uv-ips"
* rest.resource[=].type = #DocumentReference
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].operation.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].operation.extension.valueCode = #MAY
* rest.resource[=].operation.name = "docref"
* rest.resource[=].operation.definition = "https://hl7.org/fhir/uv/ipa/OperationDefinition-docref.html"
* rest.resource[+].type = #Flag
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/ips/StructureDefinition/Flag-alert-uv-ips"
* rest.resource[+].type = #ImagingStudy
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/ips/StructureDefinition/ImagingStudy-uv-ips"
* rest.resource[+].type = #Immunization
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/ips/StructureDefinition/Immunization-uv-ips"
* rest.resource[+].type = #Medication
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/ips/StructureDefinition/Medication-uv-ips"
* rest.resource[+].type = #MedicationAdministration
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[+].type = #MedicationDispense
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[+].type = #Observation
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-pregnancy-edd-uv-ips"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-pregnancy-outcome-uv-ips"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-pregnancy-status-uv-ips"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-alcoholuse-uv-ips"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-tobaccouse-uv-ips"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-results-laboratory-pathology-uv-ips"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-results-radiology-uv-ips"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/resprate"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/heartrate"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/oxygensat"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/bodytemp"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/bodyheight"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/headcircum"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/bodyweight"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/bmi"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/StructureDefinition/bp"
* rest.resource[+].type = #Organization
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/ips/StructureDefinition/Organization-uv-ips"
* rest.resource[+].type = #Practitioner
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/ips/StructureDefinition/Practitioner-uv-ips"
* rest.resource[+].type = #PractitionerRole
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/ips/StructureDefinition/PractitionerRole-uv-ips"
* rest.resource[+].type = #Procedure
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/ips/StructureDefinition/Procedure-uv-ips"
* rest.resource[+].type = #RelatedPerson
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[+].type = #Specimen
* rest.resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/ips/StructureDefinition/Specimen-uv-ips"


---

File: repos/HL7_SLASH_fhir-ips/input/fsh/OperationDefinition-summary-uv-ips.fsh

Instance: summary
InstanceOf: OperationDefinition
Title: "IPS Summary"
Description: "This operation is used to return a patient summary using the IPS profile."
Usage: #definition
* url = "http://hl7.org/fhir/uv/ips/OperationDefinition/summary"
* version = "2.0.0"
* name = "IpsSummary"
* title = "IPS Summary"
* status = #active
* kind = #operation
* date = "2024-07-15T13:15:56.964-00:00"
* publisher = "HL7 International / Patient Care"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* description = "This operation returns an IPS document in response to a POST/GET request (see [FHIR Operations](https://hl7.org/fhir/operations.html)).  The returned document MAY be generated on-demand and SHOULD represent the latest available information. This operation would not necessarily create a persisted IPS instance on the server responding to the request. When historic records or other documents are desired, this operation is not appropriate. For alternative operations and IPS generation guidance, please see [IPS Generation and Data Inclusion](./Generation-and-Data-Inclusion.html) 

Generally when a patient's logical id is known, that id would be used to request the patient summary from a FHIR server (see [id] pattern below). When it is not known, servers MAY support using other identifiers (see identifier parameter below).

Servers MAY support profiles beyond the IPS. When supported, other profiles can be specified using the profile parameter. When not supported, servers MAY use the universal IPS Composition profile to identify what profile is returned by default.  
" 
* jurisdiction = $m49.htm#001
* affectsState = false
* code = #summary
* resource = #Patient
* system = false
* type = true
* instance = true
* parameter[0].name = #identifier
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "When the logical id of the patient is not used, servers MAY choose to support patient selection based on provided identifier. Unless the identifier system is unknown, requestors SHOULD include both the system and value (e.g. 'identifier=https://standards.digital.health.nz/ns/nhi-id|CNNJ9186') when using this parameter."
* parameter[=].type = #string
* parameter[=].searchType = #token
* parameter[+].name = #profile
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "A specific profile for the patient summary may be specified. By default, servers MAY use the universal Composition profile to identify what profile the returned summary will adhere to.  This is intended as a more flexible approach for implementers to support derivations of the IPS (e.g. national and jurisdictional implementations)."
* parameter[=].type = #uri
* parameter[+].name = #return
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "The Bundle returned is a document conforming to the specified input Composition profile parameter or the International Patient Summary [Composition profile](./StructureDefinition-Composition-uv-ips.html) (if not otherwise specified)"
* parameter[=].type = #Bundle


---

File: repos/HL7_SLASH_fhir-ips/input/pagecontent/changes.md

### STU 2.0.0-ballot Update

This change list provides an overview and detail of changes in STU 2.0 Ballot.  The major categories of revision include:

- Sending "empty" sections allowed (no section.entry with use of emptyReason)
- Add Alerts Section
- Add Patient Story Section
- Clarifications on the $summary operation
- Rework of Observation profiles
- Updates for IPS-IPA Alignment
- Transition to SNOMED IPS Terminology and Terminology Consolidation

Detailed change list for 2.0.0-ballot since 1.1.0 includes: 

- **Non-compatible**
  - AllergyIntolerance.code should have min cardinality of 1.. ([FHIR-39530](https://jira.hl7.org/browse/FHIR-39530) )
  - Allow sections with emptyReason and no entries ([FHIR-41529](https://jira.hl7.org/browse/FHIR-41529) )
  - Relax cardinality on composition.section.entries to allow for section.text to be used in isolate ([FHIR-42872](https://jira.hl7.org/browse/FHIR-42872) )
  - Revision to absent-unknown valueset setup in IPS ([FHIR-45004](https://jira.hl7.org/browse/FHIR-45004) )
  - Combine lab/path profiles and remove base results observation profile ([FHIR-45294](https://jira.hl7.org/browse/FHIR-45294) )

- **Compatible, Substantive Changes**
  - Remove "Target Site - IPS" value set ([FHIR-32809](https://jira.hl7.org/browse/FHIR-32809))
  - Modification profile input definition of $summary  ([FHIR-40240](https://jira.hl7.org/browse/FHIR-40240) )
  - Transition the absent-unknown codesystem to SNOMED valueset ([FHIR-40456](https://jira.hl7.org/browse/FHIR-40456) )
  - Add a section for Patient commentary / Patient Story ([FHIR-41260](https://jira.hl7.org/browse/FHIR-41260) )
  - Revise invariant ips-2 for Lab Observation ([FHIR-41554](https://jira.hl7.org/browse/FHIR-41554) )
  - Remove old constraint for radiology Observation that requires valueString or component ([FHIR-42870](https://jira.hl7.org/browse/FHIR-42870) )
  - Remove all required LOINC bindings on observation value[x] elements ([FHIR-42972](https://jira.hl7.org/browse/FHIR-42972) )
  - Relax cardinality on Condition.clinicalStatus - exception given Required ValueSet deficiency ([FHIR-43299](https://jira.hl7.org/browse/FHIR-43299) )
  remove invariant pat-cnt-2or3-char (Patient country code) ([FHIR-43370](https://jira.hl7.org/browse/FHIR-43370) )
  - Remove Allergy Abatement Extension and use base extension ([FHIR-44847](https://jira.hl7.org/browse/FHIR-44847) )
  - Resolve SNOMED Version challenge with value set ([FHIR-44904](https://jira.hl7.org/browse/FHIR-44904) )
  - Remove IPS Bundle.link 0..0 constraint ([FHIR-45973](https://jira.hl7.org/browse/FHIR-45973) )
  - Add Alerts section to IPS based on ISO 27269 ([FHIR-46289](https://jira.hl7.org/browse/FHIR-46289) )
  - Consolidate SNOMED terminology valuesets and make definitions consistent ([FHIR-46365](https://jira.hl7.org/browse/FHIR-46365) )
  - Remove Media profile ([FHIR-46401](https://jira.hl7.org/browse/FHIR-46401) )
  - Add reference to new FHIR Clinical Documents profile ([FHIR-46458](https://jira.hl7.org/browse/FHIR-46458) )
  - Reinstate revised ResultsSpecimenCollectionMethodUvIps value set ([FHIR-46500](https://jira.hl7.org/browse/FHIR-46500) )
  - Reinstate revised ResultsSpecimenCollectionMethodUvIps value set ([FHIR-46500](https://jira.hl7.org/browse/FHIR-46500))
  - Add additional status codes to Result Observation ([FHIR-46502](https://jira.hl7.org/browse/FHIR-46502) )
  
- **Non-substantive Changes**
  - Composition-uv-ips profile, changes to clinicaldocument profile reference ([FHIR-15995](https://jira.hl7.org/browse/FHIR-15995) )
  - Distinct tabs for Differential View, Snapshot View and Examples ([FHIR-16149](https://jira.hl7.org/browse/FHIR-16149) )
  - Profiles used in the entries are not always made explicit ([FHIR-16159](https://jira.hl7.org/browse/FHIR-16159) )
  - Add links for downloading this guide and the specified resources ([FHIR-16160](https://jira.hl7.org/browse/FHIR-16160) )
  - Rename the observation-uv-ips profile ([FHIR-16281](https://jira.hl7.org/browse/FHIR-16281) )
  - Clarify intended use of vital signs ([FHIR-37837](https://jira.hl7.org/browse/FHIR-37837) )
  - Addition of change log to IG ([FHIR-39449](https://jira.hl7.org/browse/FHIR-39449) )
  - Improve details of IPS Generation and Data Inclusion ([FHIR-39598](https://jira.hl7.org/browse/FHIR-39598) )
  - Remove graph parameter from $summary operation ([FHIR-40223](https://jira.hl7.org/browse/FHIR-40223) )
  - Text for 6.2.1 Medication Summary is no longer correct ([FHIR-41556](https://jira.hl7.org/browse/FHIR-41556) )
  - Update $summary to update identifier param/provide guidance on supply of system ([FHIR-43029](https://jira.hl7.org/browse/FHIR-43029) )
  - Display mismatch between value set and code system ([FHIR-44806](https://jira.hl7.org/browse/FHIR-44806) )
  - Composition profile restrictions on codes can be improved ([FHIR-45197](https://jira.hl7.org/browse/FHIR-45197) )
  - Modify Patient/$summary identifier definition to allow as a query param ([FHIR-45441](https://jira.hl7.org/browse/FHIR-45441) )
  - Add guidance for minimal expectations of Composition.text ([FHIR-45975](https://jira.hl7.org/browse/FHIR-45975) )
  - Fix example bundle reference errors ( [FHIR-45979](https://jira.hl7.org/browse/FHIR-45975) )
  - Add pointer to note extension at Composition.section ([FHIR-46084](https://jira.hl7.org/browse/FHIR-46084) )
  - Relax the valueset code binding in Radiology profile ([FHIR-46286](https://jira.hl7.org/browse/FHIR-46286) )
  - Add section/narrative on data redaction/confidentiality/security ([FHIR-46457](https://jira.hl7.org/browse/FHIR-46457) )
  - Remove ordinalValue extension from the current-smoking-status-uv-ips value set ([FHIR-46471](https://jira.hl7.org/browse/FHIR-46471) )
  - Remove IPS ConceptMap instances ([FHIR-46474](https://jira.hl7.org/browse/FHIR-46474) )
  - Narrative updates - update STU notes, update images, update authors, design and other narrative updates ([FHIR-46488](https://jira.hl7.org/browse/FHIR-46488) )
  - Consider changing example instances to follow best practice for UCUM and avoid using curly braces ([FHIR-46501](https://jira.hl7.org/browse/FHIR-46501) )
  

### STU 1.1.0 Update

This change list provides an overview and detail of changes in STU 1.1.  This publication is an unballoted STU 1.1 update which incorporates implementation feedback, terminology updates and publication cleanup. The major categories of revision include:
- Addition of [Bundle Profile](./StructureDefinition-Bundle-uv-ips.html)
- Addition of [MedicationRequest Profile](./StructureDefinition-MedicationRequest-uv-ips.html)
- Addition of a $summary operation (Github Branch: https://github.com/HL7/fhir-ips/pull/17) 
- Reduction of Must Support (Github Branch: https://github.com/HL7/fhir-ips/pull/22) 
- Additional narrative guidance (Github Branch: https://github.com/HL7/fhir-ips/pull/27) 
- Terminology Updates (Github Branch: https://github.com/HL7/fhir-ips/pull/30) 
- Publication clean-up (Github Branch: https://github.com/HL7/fhir-ips/pull/23 and commits in Sept/Oct 2022)

Detailed change list for 1.1.0 since 1.0.0 includes: 

- **Compatible, Substantive Changes**
  - Condition.category shouldn't be fixed to a particular code ([FHIR-23740](https://jira.hl7.org/browse/FHIR-23740))
  - Remove unneeded PractitionerRole.code slice and replace with preferred binding. ([FHIR-39310](https://jira.hl7.org/browse/FHIR-39310))
  - Remove unneeded profile elements from DeviceUseStatement.bodySite ([FHIR-39296](https://jira.hl7.org/browse/FHIR-39296))
  - Update SNOMED CT based value set definitions and add an extensionally-defined value set from the IPS free set as an additional binding ([FHIR-37834](https://jira.hl7.org/browse/FHIR-37834))
  - Revise the invariant for the patient name ([FHIR-31558](https://jira.hl7.org/browse/FHIR-31558))
  - Patient.contact relationship bound to v2 values (extensible in R4) but v3 values in IPS ([FHIR-34817](https://jira.hl7.org/browse/FHIR-34817))
  - IPS Practitioner Role ValueSet missing WHO/ISCO codes ([FHIR-32156](https://jira.hl7.org/browse/FHIR-32156))
  - ResultsSpecimenCollectionMethodGpsUvIps ValueSet identical to FHIR Core ValueSet ([FHIR-32814](https://jira.hl7.org/browse/FHIR-32814))
  - Clarify Target Site - IPS value set ([FHIR-32809](https://jira.hl7.org/browse/FHIR-32809))
  - Update and rename microorganism value set due to inactivation of SNOMED Microorganism concept ([FHIR-26548](https://jira.hl7.org/browse/FHIR-26548))
  - DiagnosticReport: refer patient and specimen ips profiles ([FHIR-26665](https://jira.hl7.org/browse/FHIR-26665))
  - Observation Performer : relax constraints ([FHIR-26668](https://jira.hl7.org/browse/FHIR-26668))
  - IPS binding on Patient.contact does not allow specifying an emergency contact ([FHIR-29963](https://jira.hl7.org/browse/FHIR-29963))
  - must support should require population if known ([FHIR-30077](https://jira.hl7.org/browse/FHIR-30077))
  - Align the performer cardinality to the base resource ([FHIR-31049](https://jira.hl7.org/browse/FHIR-31049))
  - Change the cardinality of the gender ([FHIR-31557](https://jira.hl7.org/browse/FHIR-31557))
  - Allow for ingredient.itemReference in the Medication resource ([FHIR-31561](https://jira.hl7.org/browse/FHIR-31561))
  - Make Patient contact relationship binding extensible ([FHIR-32131](https://jira.hl7.org/browse/FHIR-32131))
  - Personal Relationship ValueSet missing important relationships ([FHIR-32813](https://jira.hl7.org/browse/FHIR-32813))
  - First element is value set for https://build.fhir.org/ig/HL7/fhir-ips/ValueSet-allergy-reaction-gps-uv-ips.html is for 1985009 Vomitus (substance) and it should be 422400008 Vomiting (disorder) ([FHIR-34018](https://jira.hl7.org/browse/FHIR-34018))
  - 0..1 constraint on protocolApplied.targetedDisease too strict ([FHIR-34030](https://jira.hl7.org/browse/FHIR-34030))
  - Replace terminology slices with a base "preferred" binding and "additional binding" extensions. ([FHIR-37833](https://jira.hl7.org/browse/FHIR-37833))
  - Add missing extension sliceName elements and adjust ids for data-absent-reason extension slices ([FHIR-37855](https://jira.hl7.org/browse/FHIR-37855))
  - Comprehensive Review of Must Support ([FHIR-38622](https://jira.hl7.org/browse/FHIR-38622))
  - Addition of Medication Request Profile ([FHIR-38624](https://jira.hl7.org/browse/FHIR-38624))
  - Addition of Bundle profile ([FHIR-38625](https://jira.hl7.org/browse/FHIR-38625))
  - Addition of $summary operation ([FHIR-38626](https://jira.hl7.org/browse/FHIR-38626))
  - Slicing on Immunization.protocolApplied.targetDisease to strict? ([FHIR-35876](https://jira.hl7.org/browse/FHIR-35876))
  - Wrong SNOMED code for vomiting in value set allergy reaction (code from wrong semantic hierarchy) ([FHIR-34319](https://jira.hl7.org/browse/FHIR-34319))
  - ips-1 constraint should only apply to Observation.effectiveDateTime ([FHIR-25473](https://jira.hl7.org/browse/FHIR-25473))

- **Non-substantive Changes**
  - Composition.subject is 0..1 ([FHIR-33984](https://jira.hl7.org/browse/FHIR-33984))
  - Add Maturity level (FMM) and Standards status for the IG ([FHIR-39315](https://jira.hl7.org/browse/FHIR-39315))
  - Update the system value for the Belgian CNK code system to the URL (instead of the OID, which is likely unreliable), and update the display string. ([FHIR-39313](https://jira.hl7.org/browse/FHIR-39313))
  - Fix allergy-intolerance-uv-ips value set name and title ([FHIR-39299](https://jira.hl7.org/browse/FHIR-39299))
  - Remove code system fragments used only in examples ([FHIR-39295](https://jira.hl7.org/browse/FHIR-39295))
  - Typo on IPS Structure Page ([FHIR-39292](https://jira.hl7.org/browse/FHIR-39292))
  - Missing MedicationRequest example from examples page ([FHIR-39291](https://jira.hl7.org/browse/FHIR-39291))
  - Add ip-statements, cross-version-analysis, dependency-table and globals-table fragments to IG index page. ([FHIR-39281](https://jira.hl7.org/browse/FHIR-39281))
  - Add R4 and R4B specific packages to Downloads page ([FHIR-39284](https://jira.hl7.org/browse/FHIR-39284))
  - Change list xhtml fragments to 'list-simple-name-' for alphabetical ordering ([FHIR-39283](https://jira.hl7.org/browse/FHIR-39283))
  - Add Composition profile example ([FHIR-39272](https://jira.hl7.org/browse/FHIR-39272))
  - Remove commented out code from example ([FHIR-39263](https://jira.hl7.org/browse/FHIR-39263))
  - Remove declaration of 'global' profiles from IG resource ([FHIR-39097](https://jira.hl7.org/browse/FHIR-39097))
  - Modify profile and value set titles to allow proper Jira spec file generation. ([FHIR-38996](https://jira.hl7.org/browse/FHIR-38996))
  - Fix broken links caused by ConceptMaps ([FHIR-38945](https://jira.hl7.org/browse/FHIR-38945))
  - Remove extra Immunization examples added for testing ([FHIR-38944](https://jira.hl7.org/browse/FHIR-38944))
  - Fix incorrect ICD-11-MMS code system url ([FHIR-38916](https://jira.hl7.org/browse/FHIR-38916))
  - Remove incorrect and unneeded structuredefinition-display-hint extensions ([FHIR-38915](https://jira.hl7.org/browse/FHIR-38915))
  - Remove unneeded DICOM ImagingStudy value sets and ICD-11-MMS and ICD-O-3 code systems ([FHIR-38914](https://jira.hl7.org/browse/FHIR-38914))
  - Add missing 'experimental' elements ([FHIR-38913](https://jira.hl7.org/browse/FHIR-38913))
  - Update IG to version 1.1.0 ([FHIR-38910](https://jira.hl7.org/browse/FHIR-38910))
  - Patient.birthDate should have min cardinality of 0 ([FHIR-35092](https://jira.hl7.org/browse/FHIR-35092))
  - Update Licence Note for Value Sets based on SNOMED GPS ([FHIR-25207](https://jira.hl7.org/browse/FHIR-25207))
  - Fix additional-binding publisher ([FHIR-38847](https://jira.hl7.org/browse/FHIR-38847))
  - Update IG to the new template framework ([FHIR-26834](https://jira.hl7.org/browse/FHIR-26834))
  - Fix incorrect Observation.specimen type constraints ([FHIR-27799](https://jira.hl7.org/browse/FHIR-27799))
  - Should mention joint work with IHE on transport ([FHIR-30076](https://jira.hl7.org/browse/FHIR-30076))
  - please specify how to use doc-ref to access an IPS document ([FHIR-34123](https://jira.hl7.org/browse/FHIR-34123))
  - Remove CodeableConcept.text comment ([FHIR-34824](https://jira.hl7.org/browse/FHIR-34824))
  - What does it mean to support Coding.display.translation ([FHIR-36672](https://jira.hl7.org/browse/FHIR-36672))
  - Broken link in section 1.2 ([FHIR-35112](https://jira.hl7.org/browse/FHIR-35112))
  - Apparent contradiction in IPS Medication example ([FHIR-32902](https://jira.hl7.org/browse/FHIR-32902))
  - Section 1.2 Project Background broken link ([FHIR-31396](https://jira.hl7.org/browse/FHIR-31396))


---

File: repos/HL7_SLASH_fhir-ips/input/pagecontent/copyrights.md

This guide, as well the artifacts developped by HL7® including terminologies, is produced by HL7 under the terms of HL7® Governance and Operations Manual relating to Intellectual Property (Section 16), specifically its copyright, trademark and patent provisions.

This document is licensed under Creative Commons "No Rights Reserved" (CC0).

HL7®, HEALTH LEVEL SEVEN®, FHIR® and the FHIR ® are trademarks owned by Health Level Seven International, registered with the United States Patent and Trademark Office.

This HL7 specification contains and references intellectual property owned by third parties ("Third Party IP").  
Implementers and testers of this specification SHALL abide by the license requirements for each terminology content artifact utilized within a functioning implementation.

Terminology licenses SHALL be obtained from the Third Party IP owner for each code system and/or other specified artifact used. It is the sole responsibility of each organization deploying or testing this specification to ensure their implementations comply with licensing requirements of each Third Party IP.


Following is a non-exhaustive list of third-party terminologies used in this guide that may require a separate license:

| Terminology | Owner/Contact | Links |
| - | - | -- |
| SNOMED CT® | SNOMED International |  http://www.snomed.org/snomed-ct/get-snomed-ct |
| SNOMED CT® IPS Terminology | SNOMED International | https://www.snomed.org/international-patient-summary-terminology |
| Logical Observation Identifiers Names & Codes (LOINC®) | Regenstrief Institute, Inc. and the LOINC Committee| https://loinc.org/license/ |
| Unified Codes for Units of Measures (UCUM)  | Regenstrief Institute, Inc. and the UCUM Organization | http://unitsofmeasure.org/trac/wiki/TermsOfUse |
| International Classification of Diseases (ICD) classification system  | World Health Organization (WHO)  | https://www.who.int/publishing/copyright/en/ |
| Anatomical Therapeutic Chemical (ATC) classification system | World Health Organization (WHO) Collaborating Centre for Drug Statistics Methodology | https://www.whocc.no/use_of_atc_ddd/ |
| EDQM Standard Terms | European Directorate for the Quality of Medicines | https://www.edqm.eu/en/standard-terms-database |
| ISO 3166 Country Code | International Organization for Standardization (ISO)  |  https://www.iso.org/iso-3166-country-codes.html |
| DICOM® |  National Electrical Manufacturers Association (NEMA) |  https://www.nema.org/About/Pages/Terms-and-Conditions.aspx | 
| BCP 47 Tags for Identifying Languages | IETF Trust and the persons identified as the document authors. |  http://trustee.ietf.org/license-info |
| International Standard Classification of Occupations (ISCO) | International Labour Organization (ILO) | http://www.ilo.org/global/copyright/lang--en/index.htm |
| National Drug Code (NDC) [US] | Food and Drug Administration | https://www.fda.gov/drugs/drug-approvals-and-databases/national-drug-code-directory |
| RxNorm [US] | Unified Medical Language System® (UMLS®) | https://uts.nlm.nih.gov/license.html https://www.nlm.nih.gov/research/umls/rxnorm/docs/termsofservice.html |
| Marketing Authorization Number (AIC) [IT] | Italian Medicines Agency (AIFA)  | https://www.aifa.gov.it/copyright |
| Specialty Identifier Code (CIS) [FR] | French Ministry of Solidarity and Health | https://solidarites-sante.gouv.fr/soins-et-maladies/medicaments/glossaire/article/code-cis |










---

File: repos/HL7_SLASH_fhir-ips/input/pagecontent/datatypes.md

<table>
{% for sd_hash in site.data.structuredefinitions -%}
  {%- assign sd = sd_hash[1] -%}
  {%- if sd.kind  == "complex-type" and sd.type != "Extension" -%}
   <tr><td> <a href="{{sd.path}}">{{sd.name}}</a>{{sd.title}}</td><td>{{sd.description}} </td></tr>
  {%- endif -%}
{%- endfor -%}
</table>


---

File: repos/HL7_SLASH_fhir-ips/input/pagecontent/Design-Conventions.md

### Profiling Approach

By design, the IPS dataset is a "minimal and non-exhaustive patient summary dataset, specialty-agnostic, condition-independent, but readily usable by clinicians for the cross-border unscheduled care of a patient".

Two options were therefore available for the IPS [profiles](http://hl7.org/fhir/profiling.html):

- constraining the resources to this dataset
- flag the items that have to be supported to comply with the minimal data set, unconstraining all the others.

The second has been finally chosen for the following reasons:

- facilitate the reuse of the IPS profiles in sibling use cases.
- enable a progressive access to additional information beyond the minimal one, if available and relevant for the care provisioning.

### Open Slicing in the IPS

One of the important and useful capabilities of FHIR profiling is [slicing](http://hl7.org/fhir/profiling.html#slicing), where multiple sets of constraints for a specific use case can be defined for a resource element or a complex element group (slicing can be used with repeating, type choice or non-repeating elements). Most of the slices specified in this guide are _open_ (i.e. `slicing.rules` is not `closed`), which means that it is possible for resource instances with elements that do not match any of the defined slices to still be conformant with the profile as long as they satisfy the remaining profile constraints.

Having this clear is important for correctly understanding the published profiles. For example, the optional section of [Social History](./StructureDefinition-Composition-uv-ips-definitions.html#Composition.section:sectionSocialHistory.entry) has open slicing on the entry element allowing for the use of the [IPS Tobacco Use profile](./StructureDefinition-Observation-tobaccouse-uv-ips.html), the [IPS Alcohol Use profile](./StructureDefinition-Observation-alcoholuse-uv-ips.html), or any other Observation or DocumentReference. Therefore, while specific IPS profiles are described in this guide, other profiles may also be included as well.

### Must Support

Implementers conforming to a particular profile in the IPS Implementation Guide:

- SHALL be capable of producing values for the mustSupport elements in the profile (see [3.4](#empty-sections--missing-data) for handling of missing data)
- SHALL be capable of processing resource instances containing mustSupport data elements, including elements with missing data, without generating an error or causing the application to fail.
- SHOULD be capable of displaying mustSupport data elements for human use, or processing (e.g. storing) them for other purposes.

Implementers conforming to an IPS document in the IPS Implementation Guide:

- SHALL be capable of supporting profiles under sections that are marked mustSupport in the IPS Composition profile
- SHALL be capable of populating profiles for allergy, medication and problem information in an IPS document

### Empty Sections & Missing Data

{:.no_toc}

#### Empty & Known Absent Sections

There are currently 16 sections defined in the IPS. All sections have 0..\* references in the [IPS Composition.section.entry](./StructureDefinition-Composition-uv-ips.html) element of the IPS, meaning that a section may be included without a reference to a structured resource. For required sections (allergies, problems and medications), Composition.section.emptyReason must be included in this circumstance. For non-required sections, document creators may alternatively choose to omit sections when no data is available. For all sections populated of an IPS document, Composition.section.text must still be populated to provide a human readable presentation of the information in the section. See [Narrative and Language Translation](#narrative-and-language-translation) for more on this design decision.

Resources may also be used to assert the known absence of data rather than using the [IPS Composition.section.emptyReason](./StructureDefinition-Composition-uv-ips.html). To do so, it is recommended to use patterns established within FHIR generally to assert known absence. For example with an AllergyIntolerance, a [SNOMED CT code may be used to represent no known allergy](https://hl7.org/fhir/R4/allergyintolerance-nka.json.html). Prior versions of the IPS implementation guide had included a code system for no known data circumstances, although this terminology has been removed from the guide and is no longer recommended for use. The recommended SNOMED CT concepts for representing known absent data for specific profiles are included in the value sets that are bound for the "primary" element in the resource (typically the 'code' element).

It is recommended that when a source system does not have information about a particular IPS section, that the emptyReason element for that section be populated with the appropriate code [generally 'unavailable' or 'notasked'](https://hl7.org/fhir/R4/valueset-list-empty-reason.html). However, if it is desired to use an explicit clinical statement to assert the absence of information, it is recommended that a resource be included in the relevant section using the SNOMED CT code ['1287211007'](https://browser.ihtsdotools.org/?perspective=full&conceptId1=1287211007) for "No information available".

#### Optional MustSupport Data Elements (cardinality of 0..1 or 0..\*)

<p>If an IPS creator (a system generating the IPS contents) does not have data to be included in the IPS, the data element is omitted.</p>
<p>Note: an IPS creator may have no data to be included in the IPS either because there are no data, or because data available are not pertinent with the scope of the IPS.</p>

#### Required MustSupport Data Elements (cardinality of 1..1 or 1..\*)

<p>If an IPS creator does not have data to be included in the IPS, the reason for the absence has to be specified as follows:</p>

1.  For _non-coded_ data elements, use the [Data Absent Reason Extension](http://hl7.org/fhir/R4/extension-data-absent-reason.html) in the data type.

    Example: Patient resource where the birthDate is not known (note that since birthDate is a date primitive datatype the \_birthDate sibling property is used for the extension). Other required properties of Patient resource are omitted (shown by ...) in this simplified example.

    ```
    {
      "resourceType" : "Patient",
      ...
      "_birthDate": {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
            "valueCode" : "unknown"
          }
        ]
      },
      ...
    }
    ```

1.  For _coded_ data elements:
    - _example_, _preferred_, or _extensible_ binding strengths (CodeableConcept datatypes):
      - if the source systems has text but no coded data, only the text element is used.
      - if there is neither text or codes representing actual (i.e non-exceptional) concepts:
        - use the appropriate exceptional concept code from the value set if available
        - use the appropriate concept code from the [Data Absent Reason Code System](http://hl7.org/fhir/R4/valueset-data-absent-reason.html) if the value set does not have it.
    - _required_ binding strength (CodeableConcept or code datatypes):
      - use the appropriate exceptional concept code from the value set

### Alignment to FHIR Clinical Documents

This specification previously derived its IPS Composition from the [Clinical Document profile in FHIR](https://hl7.org/fhir/R4/clinicaldocument.html), which has since been deprecated. A new implementation guide ("FHIR Clinical Documents") is currently being developed to replace this profile and assist with the alignment/transition between CDA and FHIR documents. Future version of the IPS Implemenation Guide may closely align with principles outlined in "FHIR Clinical Documents" guide and we recommend implementers review this guidance when implementing IPS.

### Narrative and Language Translation

#### Rationale for Narrative Requirements in IPS

When an [IPS Composition](./StructureDefinition-Composition-uv-ips.html) is generated, the resulting document may be viewed in many different ways (e.g. rendered by a viewer application, converted into a printable document, etc.). The IPS Composition includes a [requirement](./StructureDefinition-Composition-uv-ips-definitions.html#Composition.section.text) for each section to have human-readable narrative text. This includes the 16 clinical sections profiled in the [IPS Composition](./StructureDefinition-Composition-uv-ips.html) as well as any other section included in the patient summary. This aligns with the principles of [FHIR Documents](https://hl7.org/FHIR/documents.html) and has importance in the context of cross-border IPS exchange. Specifically:

- The intent of IPS documents is to share a patient’s pertinent health information across borders where different languages may be used. Human-readable narrative renders the document with the provenance of the originating system's language (i.e. before language translation). This rendering provides a source of truth and comparison for any subsequent translation. While the IPS standard allows for language translations to be included, both in coded display and narrative, there should be no expectation by downstream consumers (e.g. another system in cross-border exchange) that local language translations or local codes will be present.

- Support for this requirement is found in international standards. As stated in [ISO 27269](https://www.iso.org/standard/79491.html) , IPS documents should have the ability for attestation. While IPS documents need not be signed in all cases, the inclusion of human-readable narrative is necessary for attestation and legal authentication since that represents a presented form of the document.

- While the [FHIR Narrative guidance](https://hl7.org/FHIR/narrative.html) specifies that in strictly managed trading systems, narrative may be omitted, the IPS is primarily intended for cross-border use which is not tightly coupled. Human-readable narrative provides a fallback for patient safety when two systems may not be able to process all machine readable content during exchange and when the source system might not be available to the receiver for consultation and clarification. Further, the patient and the receiving provider may be multilingual and able to read both the original language and any translation to the receiving jurisdiction language, supporting meaningful conversations at the point of care.

- While the IPS guide strongly encourages the encoding of patient information using FHIR resources and structured terminology whenever possible, some systems may not be able to encode or consume all relevant information for all patients. Having each section in an IPS document contain human-readable narrative ensures a consistent place where receiving systems will be able to display narrative information generated from the source system.

- The functional requirement of supporting coded translations has been addressed in this guide extending the [coding data type](./StructureDefinition-Coding-uv-ips.html). In addition, the use of [SNOMED as a primary IPS terminology](./General-Principles.html#structuring-terminology-choices) facilitates translation capabilities based on coded data. For other details about the support of narrative translations, please refer to [Multi-Language support in FHIR](http://build.fhir.org/languages.html).

The rationale above provides context for why narrative is important in the context of IPS document exchange. Since human-readable content is required in the Composition resource, this IPS guide does not require narrative text for other resources included in an IPS document. If individual resources profiled in this guide are planned for use outside of a document context, implementers should refer to the base [FHIR Narrative guidance](https://hl7.org/FHIR/narrative.html) for perspective on when those resources should include human-readable text.

#### Narrative Content Guidance

Granular requirements regarding what is considered clinically relevant for inclusion in the narrative of each section are not currently defined in [ISO 27269](https://www.iso.org/standard/79491.html) and are subsequently not defined or enforced in this guide.

<blockquote class="stu-note">
	<p>While a globally consistent practice has not been identified, IPS encourages implementers to review emerging best practices and guidelines regarding narrative text that are being implemented in participating nations (e.g., <a href="https://informatiestandaarden.nictiz.nl/wiki/FHIR:V1.0_FHIR_IG_STU3#Resource.text_or_.22the_narrative.22">The Netherlands</a>) and discussed in the <a href="https://chat.fhir.org/#narrow/stream/207835-IPS/topic/generation.20of.20narrative">FHIR Community</a>. 
  </p>
  <p>
  Ongoing FHIR implementations will influence future guidance, such as the FHIR Clinical Document Implementation Guide, about the content and display of narrative content, which is required in the IPS Composition. We encourage implementers to monitor this topic and provide feedback through HL7 engagement, issue logging and community discussion.
  </p>
</blockquote>

This specification does not dictate the conditions under which narrative is generated and acknowledges the wide range of implementing workflows and systems, some of which may use human manual intervention or automatic generation using resource content to generate the narrative or other means. While no constraints are implemented, early implementers have recommended that IPS documents not duplicate the content contained in `Composition.section.text` (which is required) in the `Composition.text`. This may lead to validation issues with duplicate ids and also excess document size. This recommendation currently aligns with forthcoming guidance in the "FHIR Clinical Documents" implementation guide.

### Representation of Person Names

This specification requires that any Person Name is represented including at least the given and family components. Even though it is recognized that there is not in all cultures the same concept of “family name”, no evidence has been collected in analyzing the international context (e.g., Japan, Korea, China) that justifies the retirement of this requirement. Moreover, due to the global scope of the International Patient Summary, the case of non-alphabetic representations of the names has also been considered. In this case, to facilitate the global use of the IPS, at least one alphabetic representation of the name SHALL be provided.

### Medication Lists in the IPS

Medication lists may vary significantly depending on the context of use (e.g. support for prescription or dispensing, medication reconciliation, etc.) and on the type of information reported (e.g. patient-reported medication, prescribed, dispensed or administered medications, active or past medications, etc.). This is also true for the medication summary in a Patient Summary. It could be, for instance, a list of "Relevant prescribed medicines whose period of time indicated for the treatment has not yet expired whether it has been dispensed or not" (European guidelines on Patient Summary); a list of actually dispensed medications; a list of relevant medications for the patient (IHE PCC); or conversely, it could be a complete history including the full patient's prescription and dispensing history and information about intended drug monitoring (HL7 C-CDA).

For the scope of the International Patient Summary, it is important to know what medications are being taken by or have been given to a patient, without necessarily providing all the details about the medication order, supply, administration or monitoring. This information need can be met with either the [MedicationStatement](./StructureDefinition-MedicationStatement-uv-ips.html) or [MedicationRequest](./StructureDefinition-MedicationRequest-uv-ips.html) profile, both of which are included in this IPS Implementation Guide.

The IPS medication summary is therefore a list of relevant medications, possibly built from either a prescription list or a dispensing list. In fact, in many practical cases data included in a Patient Summary are derived from the list of the medicines prescribed by a general practitioner and recorded in its electronic health record; or extracted from regional/national prescribing and/or dispensing systems.

### Medicinal Product Identification

A general introduction to the problem of cross-jurisdictional identification of medicinal product is provided in the [IPS CDA implementation guide](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)

As for the CDA implementation guide, this guide describes how the relevant IDMP identifiers and attributes, namely the Pharmaceutical Product Identifiers (PhPIDs), the Medicinal Product Identifier (MPID), and the Medicinal Product Package Identifier (PCID) are represented in the IPS.

The solution proposed for the FHIR IPS IG is slightly different from that adopted in the CDA IG and follows the current indications of the FHIR community: all the relevant product codes are represented in fact as one of the possible Codings of the product CodeableConcept, rather than being expressed as distinct attributes/resources (which is a possible approach). The same approach is followed for the vaccines.

### Provenance

While not profiled in this guide, [Provenance](https://hl7.org/fhir/R4/provenance.html) resources may be used throughout to add contextual information to any resource included in the document bundle. In addition, this guide follows these principles described in the [IPS CDA implementation guide](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483), as follows:

- The IPS document may be constructed by a human or an automated process, regardless of whether the IPS contains some content of both kinds. In all instances, document level authorship information is required.
- The distinction between the two types of IPS, human-curated or software-assembled, is based on the authors recorded in the composition: the author shall be a human (e.g. Practitioner), if the IPS provenance type is "human-curated", or a device if the IPS provenance type is "software-assembled". In the case of a software-assembled IPS that is then verified by a human, the document provenance type shall be "software-assembled" and the author shall be the device or system that constructed the IPS document, but an additional attester identity shall name the human who performed this check.
- Additional provenance information below the document level is optional. The current guide does not rely on any nationally defined Provenance profile.


---

File: repos/HL7_SLASH_fhir-ips/input/pagecontent/downloads.md

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

File: repos/HL7_SLASH_fhir-ips/input/pagecontent/examples.md

### AllergyIntolerance

<ul>{% include list-simple-name-allergyintolerances.xhtml %}</ul>

### Bundle

<ul>{% include list-simple-name-bundles.xhtml %}</ul>


### Composition

<ul>{% include list-simple-name-compositions.xhtml %}</ul>

### Condition

<ul>{% include list-simple-name-conditions.xhtml %}</ul>


### DeviceUseStatement

<ul>{% include list-simple-name-deviceusestatements.xhtml %}</ul>

### Device

<ul>{% include list-simple-name-devices.xhtml %}</ul>

### DiagnosticReport

<ul>{% include list-simple-name-diagnosticreports.xhtml %}</ul>

### Immunization

<ul>{% include list-simple-name-immunizations.xhtml %}</ul>


### ImagingStudy

<ul>{% include list-simple-name-imagingstudies.xhtml %}</ul>


### Medication

<ul>{% include list-simple-name-medications.xhtml %}</ul>

### Media

<ul>{% include list-simple-name-media.xhtml %}</ul>

### MedicationRequest

<ul>{% include list-simple-name-medicationrequests.xhtml %}</ul>

### MedicationStatement

<ul>{% include list-simple-name-medicationstatements.xhtml %}</ul>

### Observation

<ul>{% include list-simple-name-observations.xhtml %}</ul>

### Organization

<ul>{% include list-simple-name-organizations.xhtml %}</ul>

### Patient

<ul>{% include list-simple-name-patients.xhtml %}</ul>

### Practitioner

<ul>{% include list-simple-name-practitioners.xhtml %}</ul>

### PractitionerRole

<ul>{% include list-simple-name-practitionerroles.xhtml %}</ul>

### Procedure

<ul>{% include list-simple-name-procedures.xhtml %}</ul>

### Specimen

<ul>{% include list-simple-name-specimen.xhtml %}</ul>

**Examples:** all the examples that are used in this Implementation Guide available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)
- [TTl](examples.ttl.zip)


---

File: repos/HL7_SLASH_fhir-ips/input/pagecontent/General-Principles.md

With the formal agreement signed on April 2017, HL7 International and CEN/TC 251 expressed their intent to collaborate under a set of principles for the International Patient Summary (IPS).

{% include img.html img="IPS_principles.png" caption="Figure 1: The IPS principles" width="40%" %}

Based on this agreement, the standards specification for the IPS has to be (a) implementable (b) applicable for global use (c) extensible and open to future use cases and solutions. The standards specification and their implementation must be moreover sustainable. 


### Structuring Terminology Choices

The IPS is specified in this guide as a HL7 FHIR document (a `Bundle` including an IPS `Composition`), composed by a set of potentially reusable "minimal" data blocks (the IPS profiles). A HL7 CDA R2 representation is specified as well in a distinct Implementation Guide. The expressiveness of SNOMED CT and other primary terminologies from this guide enable the specification to represent information independent of the underlying syntax (CDA R2 or FHIR).

To be universally exchangeable and understood, a patient summary must rely as much as possible on structured data and multilingual international reference terminologies that are licensed at no cost for global use in the International Patient Summary. In the case of SNOMED CT, SNOMED International has created the [IPS Terminology](https://www.snomed.org/snomed-ct/Other-SNOMED-products/international-patient-summary-terminology), which is an open and free sub-ontology of SNOMED CT that references a core set of clinical concepts licensed at no-cost with the aim to serve the public good. This sub-ontology is maintained in collaboration with HL7 International and other standards development organizations and updated annually. In this spirit, this version of the International Patient Summary defines SNOMED CT as a primary terminology and it is used in many of the value sets. 

<blockquote class="stu-note">
The IPS value sets that use SNOMED CT content are defined using FHIR inclusion and exclusion criteria. While not used computably in this implementation guide, equivalent Expression Constraint Language (ECL) queries are also shown within value set definitions for users to implement. 
<br/>
<br/>
These value set definitions can be expanded against any available SNOMED CT content. For those in non-SNOMED International Member countries or those without a SNOMED CT Affiliate License,  the value set definitions should be expanded against the IPS Terminology, which includes a collection of SNOMED CT concepts that are freely accessible. For those in Member countries or with a SNOMED CT Affiliate license, the value set definitions should be expanded against the International Edition of SNOMED CT or a National Extension (or Edition), depending on the local requirements.
<br/>
<br/>
To support interoperability of IPS content between organizations that used different SNOMED CT value set content, it is proposed to use a "common proximal ancestor" strategy, substituting any local concept with an ancestor that is shared between the exchanging parties, e.g., a concept in the IPS Terminology. This substitution can be performed using an ECL query, and detailed instructions will be available on the <a href="http://snomed.org/ecl">SNOMED ECL documentation</a>.
</blockquote>

Other primary terminologies used in this specification are LOINC for observations (e.g., laboratory tests) and document sections, UCUM for units of measure, EDQM Standard Terms for dose forms and routes and ISO 3166 for countries [this ISO code system can be used for free in «lists» (e.g. value sets) or software]. Looking at the availability of other globally usable reference terminologies, in selected cases FHIR-defined terminologies are recommended.

### Publishing or Accessing the IPS

As described also in the [IPS CDA implementation guide](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483) it is not in the scope of this version of this Implementation Guide to constrain solutions or strategies for the creation, sharing, syntactical and semantic mapping, translation, and use of the IPS. Recommendations on [operations for IPS generation](./Generation-and-Data-Inclusion.html) are included in this guide, although future implementation guides may provide alternative methods and further recommendations different than those outlined. In addition, Integrating the Healthcare Enterprise (IHE) has also publsihed guidance on the [Sharing of IPS](https://profiles.ihe.net/ITI/sIPS/) which may be a helpful reference. 



---

File: repos/HL7_SLASH_fhir-ips/input/pagecontent/Generation-and-Data-Inclusion.md

### Generating & Accessing IPS Documents

The IPS document is composed by a set of resources organized as a [`Bundle`](./StructureDefinition-Bundle-uv-ips.html). This implementation guide recommends two potential operations for how IPS documents may be generated:

-	Using a `$summary` [operation](./OperationDefinition-summary.html) on the `Patient` resource. This operation returns an IPS document `Bundle` in response to a POST request. This operation is similar to how the [`$everything`](http://hl7.org/fhir/OperationDefinition/Patient-everything) operation works on the Patient resource. Unlike `$everything`, `$summary` returns summary information, rather than all patient information, in a `Bundle` document through the use of a [`Composition`](./StructureDefinition-Composition-uv-ips.html) resource. This operation would not necessarily create a persisted IPS instance on the server responding to the request. 

-	Using a `$docref` [operation](http://hl7.org/fhir/uv/ipa/OperationDefinition-docref.html) on a `DocumentReference` resource as defined in the [International Patient Access](https://hl7.org/fhir/uv/ipa/) guide. For this operation to generate an IPS `Bundle`, it may be necessary to specify the `type` as LOINC 60591-5 (patient summary). This operation may return a `Bundle` with `Bundle.type` of `searchSet` with a `DocumentReference` that references the IPS document `Bundle`.  This operation would generally create a saved IPS `DocumentReference` and `Bundle` on the server. 

Future implementation guides may provide alternative methods and further recommendations for IPS document `Bundle` generation. These may include methods different than those outlined above. In addition, the  [International Patient Access Implementation Guide](https://hl7.org/fhir/uv/ipa/) Implementation Guide provides additional guidance accessing individual resources as well as documents from compatible FHIR servers. 

### Data Included in IPS Documents

The data included in IPS documents support the use case for ‘unplanned, cross border care’, but the IPS is not limited to it. Since health records may include data over a patient’s lifetime, not all information may be relevant at the time of summary generation. In the creation of a patient summary, a server or practitioner may apply logical rules to limit the data included in a summary. For example, a laboratory observation or one-time medication administration from 10 years ago may no longer be relevant in the context of current patient care. 

This IPS IG does not provide any specific set of rules for when data may no longer be relevant for inclusion in a patient summary, although it defines that current allergies, medications and problems represent a minimum [structural expectation for all IPS documents](./Structure-of-the-International-Patient-Summary.html) as required by the [ISO 27269 standard](https://www.iso.org/standard/79491.html). We recommend implementers take into consideration practices from the industry about data inclusion in clinical documents and other care summaries. Some relevant initiatives that may provide recommendations on data inclusion include:

-	[HL7 Relevant and Pertinent Implementation Guide](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=453)
-	[Concise Consolidated CDA Recommendations (C-CDA guidance for USA)](http://www.commonwellalliance.org/wp-content/uploads/2018/07/Carequality_CommonWell_Improve_C-CDA_06-15-2018_V1.pdf) 
- [European Guidelines for Patient Summaries (eHealth Network)](https://ec.europa.eu/health/publications/guidelines-patient-summary_en) 
-	National adaptations of the IPS


---

File: repos/HL7_SLASH_fhir-ips/input/pagecontent/index.md

An **International Patient Summary (IPS) document** is an electronic health record extract containing essential healthcare information about a subject of care.
As specified in ISO 27269, it is designed for supporting the use case scenario for ‘unplanned, cross border care’, but it is not limited to it.
It is intended to be international, i.e., to provide generic solutions for global application beyond a particular region or country.

The IPS dataset is **minimal and non-exhaustive; specialty-agnostic and condition-independent; but still clinically relevant**.

The IPS document is composed by a set of robust, well-defined and potentially reusable sets of core data items (indicated as IPS library in the figure below). The tight focus of the IPS on unplanned care is in this case not a limitation, but, on the contrary, facilitates their potential re-use beyond the IPS scope.

{% include img.html img="IPS_doc_library.png" caption="Figure 1: The IPS product and by-products"
    width="70%" %}

### Purpose

The goal of this Implementation Guide is to specify how to represent in HL7 FHIR the International Patient Summary (IPS). An alternative representation as templated HL7 CDA R2 is also provided ( see the [hl7.org site](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483) or the [ART DECOR](https://art-decor.org/art-decor/decor-project--hl7ips-) repository). 
The initial focus of the International Patient Summary (IPS) was the unplanned care across national borders. This specification can be used and be useful also in local applications and be supportive of planned care. 


### Project Background

Details on the project background are available in the <a href="https://international-patient-summary.net/ips-links-to-standards-and-specifications/">IPS Website</a>.

### Project Scope

As specified in ISO 27269, the IPS dataset is a <b><i>"minimal, non-exhaustive set of data elements required for the international patient summary"</i></b>. A Patient Summary is defined by ISO/TR 12773-1:2009 as a <i>"Health record extract comprising a standardized collection of clinical and contextual information (retrospective, concurrent, prospective) that provides a snapshot in time of a subject of care’s health information and healthcare."</i>

As a further definition of terms in ISO 27269, <i>"'Minimal' reflects the ideas of 'summary' and the need to be concise, but also alludes to the existence of a core set of data elements that all health care professionals can use; it is intended to be a speciality agnostic and condition independent set. It does not imply that all the items in the data set will be used in every summary. It is also possible to refine the extract from a record such that the content of the summary is more relevant to a particular condition (e.g. asthma) but no asthma-specific elements will be specified in this standard. The IPS Document or IPS can be extended by non-IPS standard condition-specific data.</i> 

<i>'Non-exhaustive' recognizes that the ideal data set is not closed, and is likely to be extended, not just in terms of requirement evolution, but also pragmatically in instances of use."</i>

Furthermore the scope of the IPS is global. Although this is a major challenge, this implementation guide takes various experiences and newer developments (e.g. <a href="http://hl7.org/fhir/us/core/history.html">US Core Implementation Guide (FHIR IG)</a>) into account to address, as far as possible, global feasibility.

The following picture provides an overview of the current IPS content.

{% include img.html img="IPS_composition.png" caption="Figure 2: The IPS composition" width="70%" %}

### Relationships with Other Projects and Guidelines

Further details on the IPS project relationships with other projects and guidelines are available in the <a href="https://international-patient-summary.net/">IPS Website</a>.

### Ballot Status

This Implementation Guide has been balloted as STU with the intention to go normative in a subsequent ballot cycle.

### Dependencies

{% include dependency-table.xhtml %}

### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### Authors and Contributors

| Role  | Name | Organization | Contact |
| --- | --- | --- | --- |
| **Primary Editor** | Rob Hausam | Hausam Consulting LLC | rob@hausamconsulting.com |
| **Primary Editor** | John D'Amore | More Informatics | johnd@moreinformatics.com |
| **Primary Editor** | Giorgio Cangioli | Consultant, HL7 Italy | giorgio.cangioli@gmail.com |
| **Contributor** | Catherine Chronaki | HL7 International Foundation | chronaki@gmail.com |
| **Contributor** | Dr Christof Geßner | Gematik | christof.gessner@gematik.de |
| **Contributor** | François Macary | Phast | francois.macary@phast.fr |
| **Contributor** | Gary Dickinson | CentriHealth | gary.dickinson@ehr-standards.com |
| **Contributor** | George Dixon | Allscripts | george.dixon@allscripts.com |
| **Contributor** | John Moehrke | By Light Professional IT Services | John.Moehrke@bylight.com
| **Contributor** | Dr Kai U. Heitmann | Heitmann Consulting and Services, ART-DECOR Open Tools GmbH, HL7 Germany | info@kheitmann.de |
| **Contributor** | Kenneth Sinn  | Canada Health Infoway | ksinn@infoway-inforoute.ca |
| **Contributor** | Sheridan Cook | Accenture | sheridan.cook@accenture.com |


---

File: repos/HL7_SLASH_fhir-ips/input/pagecontent/Known-Issues-and-Future-Development.md

### Known Issues
1. Lack in representation of the summarization activities, including who did it, what was done (medication reconciliation, allergy reconciliation, medication allergy reconciliation, immunization/vaccination reconciliation, problem list/diagnosis reconciliation), what was the result, when and where was it done. This covers also the "Nature of the IPS" element included in ISO 27269.
1. Profile specificity to be improved. Not all the expected rules can be automatically validated, due to a lack of representation in the specified profiles.
1. All of the slicing rules defined for the section entries have been specified in this version as open. This choice has been made to give more flexibility to the IPS, at the expense of the capability of fully and automatically validating the instances. In this sense the profile may technically allow the inclusion of inappropriate resources. Specifiers are encouraged to add further constraints or additional slices to mitigate this risk. Future versions may reconsider the current choice.
1. More constrained vocabularies. The choices made in this version reflect the need of balancing the expectations of reducing optionality, to improve interoperability; and of avoiding over-constraints, to facilitate the local adoption. Moreover, it has been recognized the current lack, in some cases, of globally recognized and freely usable vocabularies (e.g. for the identification of medications); and the need, for specific concept domains, to extend the value sets based on new SNOMED CT and SNOMED IPS Terminology content. For these reasons, the binding is required only in a few cases; preferred or extensible bindings have been used instead.

### Future Development
1. Investigate the relationships and the possible synergies with the proposed [International Patient Access Implementation Guide](https://hl7.org/fhir/uv/ipa/); exploring and better clarifying the role of the IPS document and of its reusable components (IPS profiles library).
1. Explore the adoption of the Provenance resource with the IPS (bundle level, composition level or entry level) to document the IPS curation (see Known Issue ###1 above) (see also the ["International Patient Summary: Use Cases"](https://confluence.hl7.org/pages/viewpage.action?pageId=48237134###InternationalPatientSummary:UseCases-Examples) confluence page)
1. Include additional guidance or references on approaches for selecting appropriate summary content and genearating narrative representations
1. Gather feedback on the IPS [$summary operation](./OperationDefinition-summary.html) introduced in STU1.1 of the this guide. 


---

File: repos/HL7_SLASH_fhir-ips/input/pagecontent/Privacy-and-Security-Considerations.md

The IPS will carry Patient identifiable health information (i.e., PI, PII, PHI, and SPI), and some of this data is considered specifically highly sensitive (e.g. mental health, drug abuse, sexual health, etc). Thus the IPS is subject to Privacy, Security, and Medical Records Regulations.

Health information is sensitive, and thus must be recognized as sensitive. There is a subset of health information that is related to stigmatizing topics that are highly sensitive and considered restricted. For more information healthcare information and Privacy see [FHIR Data Segmentation for Privacy](https://hl7.org/fhir/uv/security-label-ds4p/) Implementation Guide. This guide includes details on Healthcare Privacy background, data tagging, data segmentation, and focuses on the use of security and privacy data tagging to protect health information.

The Health information may be impacted by Privacy Consent, also known as authorizations. The mechanism of Consent is not covered in IPS. IHE has an Implementation Guide covering [Privacy Consent on FHIR](https://profiles.ihe.net/ITI/PCF/index.html).

Where an IPS is being created with a given recipient, the permissions of that recipient can and should be used to affect the content of the IPS. This might result in no limitations on the data in the IPS, or might result in some highly sensitive data being redacted. Any redaction of data must address any increase in risks to Medical Safety. The tradeoff between Privacy and Safety is a policy. The IPS specification does not define this policy.

Often an IPS is created for one purpose and gets used for other purposes. Thus it is important to consider how the data might flow from the first party audience of the IPS to others downstream. This section covers design considerations, but does not include any normative rules that must be followed.

### Sensitive Resources

The [FHIR Data Segmentation for Privacy](https://hl7.org/fhir/uv/security-label-ds4p/) Implementation Guide addresses mechanisms to use the FHIR Resource.meta.security element to carry classifications of the data within the Resource. Such as identifying when a Resource contains specific kinds of stigmatizing highly sensitive health topics. This methodology enables selective handling of these highly sensitive data differently from normal health data.

When an IPS is being created for a given recipient that does not have the authorization to receive highly sensitive health data, these tags can be used to exclude these highly sensitive Resources from the IPS. For example, when creating an IPS for a nationwide treatment network, and where the patient has not authorized highly sensitive information to be exposed on that nationwide treatment network, then any data that is identified (e.g. tagged) as highly sensitive would not be included in the IPS.

Data may be eliminated for other Privacy reasons, depending on policy. Such as a Patient Consent that would restrict data by timeframe, or author, etc. IHE has an Implementation Guide covering [Privacy Consent on FHIR](https://profiles.ihe.net/ITI/PCF/index.html) including Consent profiles covering all of these concerns.

The IPS may be created with a system audience (e.g. EHR, PHR), where that system is expected and trusted to redact highly sensitive health information based on user permission within that system. For this to function all Resources need to preserve their security and privacy tagging. This use-case is also a use of the Bundle.meta.security "High Water Mark" defined below, as a signal to the system.

### Sensitive Section Narrative

The IPS has section narrative that is expected to be generated based on the content included. This section narrative would need to be created carefully considering the highly sensitive health topics. This would be especially important when the IPS may be consumed by users that would have differing permissions than the permissions used to create the IPS. For example, when the IPS is created including all health data, but a section is consumed by a user that should not be allowed to see highly sensitive data. Removing the highly sensitive data can be accomplished using the Resource.meta.security tagging, but the same is not available for narrative. 

### Defining the IPS "High Water Mark"

The IPS ["High Water Mark"](https://hl7.org/fhir/uv/security-label-ds4p/glossary.html#high-water-mark-hwm) is defined as the most sensitive of all the content within the Bundle as would be specified in Bundle.meta.security. Thus if all the data in the IPS is normal health data, then the Bundle.meta.security would indicate `N` normal. However if there is any restricted health data, then the Bundle.meta.security would indicate `R` restricted. This example uses the [Confidentiality codes](https://terminology.hl7.org/ValueSet-v3-Confidentiality.html).

The IPS Bundle.meta.security would also contain any Security or Privacy tags that apply to the content of the IPS. Examples include Obligations or Refrain instructions, such as do not redisclose without an explicit consent. These Obligations and Refrains are a set of codes included in the [Healthcare Privacy and Security Classification System (HCS)](https://hl7.org/fhir/security-labels.html#hcs)

This Bundle level tag indicates to a recipient the most restrictive rules that would need to be applied to the processing of the content.

The use of Bundle.meta.security as described here is not a requirement of IPS, but is included here as Design Considerations in the creation of IPS and the consumption of IPS.


---

File: repos/HL7_SLASH_fhir-ips/input/pagecontent/profiles.md

### IPS and Its Structure

The <b>International Patient Summary</b> is a document.
All the profiles specified by this guide are used by the <b>International Patient Summary Composition</b>.

The <b>Bundle</b> used for the transport or the persistence SHALL include all the resources that are referenced directly or indirectly by an International Patient Summary Composition.

A complete list of the sections and the profiles used is available in the <a href="Structure-of-the-International-Patient-Summary.html">International Patient Summary Structure </a> page.

### List of Profiles

The links and descriptions for the profiles that have been defined for this implementation guide are listed here:

{% include table-profiles.xhtml %}


---

File: repos/HL7_SLASH_fhir-ips/input/pagecontent/Structure-of-the-International-Patient-Summary.md

The IPS is composed by the following sections described below.

{% include img.html img="IPS_composition.png" caption="Figure 2: The IPS composition" width="70%" %}

### Sections description

#### Problem List

The IPS problem section lists and describes clinical problems or conditions currently being monitored for the patient. If no information about problems is available or there are no known problems, this documented in the section through the use of emptyReason (at Composition.section) or a referenced resource (at Composition.section.entry).

#### Allergies and Intolerances

This section documents the relevant allergies or intolerances (conditions) for a patient, describing the kind of reaction (e.g. rash, anaphylaxis,..); preferably the agents that cause it; and optionally the criticality and the certainty of the allergy.

At a minimum, it should list currently active and any relevant historical allergies and adverse reactions. If no information about allergies is available, or if no allergies are known this should be documented in the section through the use of emptyReason (at Composition.section) or a referenced resource (at Composition.section.entry).

#### Medication Summary

The medication summary section contains a description of the patient's medications relevant for the scope of the patient summary.

The actual content could depend on the jurisdiction, it could report:

- The currently active medications
- The current and past medications considered relevant by the authoring practitioner
- The patient prescriptions or dispensations automatically extracted by a regional or a national EHR

In all those cases however medications are documented in the Patient Summary as medication statements or medication requests.

Populating this section must be one of the choices below:

- No entry with use of emptyReason (at Composition.section)
- An entry stating that the patient is known not to be under any relevant medication (or other "no medication information")
- One or more entries enumerating the patient's relevant medication (one entry per medication)

#### Immunizations

The Immunizations Section defines a patient's current immunization status and pertinent immunization history.The primary use case for the Immunization Section is to enable communication of a patient's immunization status.The section includes current immunization status and the entire clinically pertinent immunization history that is known.

#### Diagnostic Results

This section assembles relevant observation results collected on the patient or produced on in-vitro biologic specimens collected from the patient. These results may include laboratory, pathology, and radiology results.

This section includes entry choices to carry result observations (using Observation or referenced observations in DiagnosticReport) from:

- Laboratory/pathology
- Radiology

#### History of Procedures

The History of Procedures Section contains a description of the patient past procedures that are pertinent to the scope of the IPS.

Procedures may refer for example to:

1. Invasive Diagnostic procedure:e.g. Cardiac catheterization; (the results of these procedure are documented in the results section)
2. Therapeutic procedure: e.g. dialysis;
3. Surgical procedure: e.g. appendectomy

#### Medical Devices

The medical devices section contains narrative text and coded entries describing the patient history of medical device use.

#### Advance Directives

The advance directives section contains a narrative description of patient's advance directives with links to supporting documents and consents.

#### Alerts

This alerts section is used to convey information flagged to raise awareness of potential concerns and/or dangers to/from the subject of the IPS.

#### Functional Status

The functional status section contains a narrative description of capability of the patient to perform acts of daily living, including possible needs of the patient to be continuously assessed by third parties. The invalidity status may in fact influence decisions about how to administer treatments. Profiles to express disabilities and functional assessments may be specified by future versions of this guide.

#### History of Past Problems

The History of Past Illness section contains a description of the conditions the patient suffered in the past.

#### History of Pregnancy (status and history summary)

The pregnancy status and history is comprised of

- An entry as an Observation of the pregnancy status, and optionally, a member Observation of the Estimated Delivery Date
- An entry as an Observation of the pregnancy history (summary)

#### Patient Story

The section contains narrative text along with optional resources that express what matters to a patient. This may include needs, strengths, values, concerns and preferences to others providing support and care. Any resource type may be used to support narrative.

#### Plan of Care

The plan of care section contains a narrative description of the expectations for care including proposals, goals, and order requests for monitoring, tracking, or improving the condition of the patient.

#### Social History

The social history is comprised of

- Tobacco use
- Alcohol use

#### Vital Signs

The Vital signs section includes blood pressure, body temperature, heart rate, and respiratory rate. It may also include other clinical findings, such as height, weight, body mass index, head circumference, and pulse oximetry. In particular, notable vital signs or physical findings such as the most recent, maximum and/or minimum, baseline, or relevant trends may be included

### List of Profiles

The profiles that have been defined for this implementation guide are listed <a href="profiles.html">here</a>.

Following are the profiles that have been defined for each section. (R) denotes a required section (i.e. must be present in an IPS), (S) denotes a recommended section, the others are optional:

- Problem List (R)
  [ <a href="StructureDefinition-Condition-uv-ips.html">Condition (IPS)</a> ]
- Allergies and Intolerances (R)
  [ <a href="StructureDefinition-AllergyIntolerance-uv-ips.html">Allergy Intolerance (IPS)</a> ]
- Medication Summary (R)
  [ <a href="StructureDefinition-MedicationStatement-uv-ips.html">Medication Statement (IPS)</a> |
  <a href="StructureDefinition-MedicationRequest-uv-ips.html">Medication Request (IPS)</a> |
  <a href="StructureDefinition-Medication-uv-ips.html">Medication (IPS)</a> ]
- Immunizations (S)
  [ <a href="StructureDefinition-Immunization-uv-ips.html">Immunization (IPS)</a> ]
- Diagnostic Results (S)
  [ <a href="StructureDefinition-DiagnosticReport-uv-ips.html">DiagnosticReport (IPS)</a> ]
  - Laboratory/Pathology results
    [ <a href="StructureDefinition-Observation-results-laboratory-pathology-uv-ips.html">Observation Results: laboratory (IPS)</a> |
    <a href="StructureDefinition-Specimen-uv-ips.html">Specimen (IPS)</a> ]
  - Radiology results
    [ <a href="StructureDefinition-Observation-results-radiology-uv-ips.html">Observation Results: radiology (IPS)</a> |
    <a href="StructureDefinition-Device-observer-uv-ips.html">Device (performer, observer)</a> |
    <a href="StructureDefinition-ImagingStudy-uv-ips.html">Imaging Study (IPS)</a> ]
- History of Procedures (S)
  [ <a href="StructureDefinition-Procedure-uv-ips.html">Procedure (IPS)</a> | 
  <a href="StructureDefinition-Device-observer-uv-ips.html">Device (performer, observer)</a> ]
- Medical Devices (S)
  [ <a href="StructureDefinition-DeviceUseStatement-uv-ips.html">Device Use Statement (IPS)</a> |
  <a href="StructureDefinition-Device-uv-ips.html">Device (IPS)</a> ]
- Advance Directives
  [ <a href="{{site.data.fhir.path}}consent.html">Consent</a> ]
- Alerts
  [ <a href="StructureDefinition-Flag-alert-uv-ips.html">Flag - Alert (IPS)</a> ]
- Functional Status (Autonomy / Invalidity)
  [ <a href="StructureDefinition-Condition-uv-ips.html">Condition (IPS)</a> |
  <a href="{{site.data.fhir.path}}clinicalimpression.html">Clinical Impression</a> ]
- History of Past Problems
  [ <a href="StructureDefinition-Condition-uv-ips.html">Condition (IPS)</a> ]
- History of Pregnancy (status and history summary)
  [ <a href="StructureDefinition-Observation-pregnancy-edd-uv-ips.html">Observation (Pregnancy: EDD)</a> |
  <a href="StructureDefinition-Observation-pregnancy-outcome-uv-ips.html">Observation (Pregnancy: outcome)</a> |
  <a href="StructureDefinition-Observation-pregnancy-status-uv-ips.html">Observation (Pregnancy: status)</a> ]
- Patient Story
  [ No specific resources required. Any may be used to support narrative. ]
- Plan of care
  [ <a href="{{site.data.fhir.path}}careplan.html">Care Plan</a> ]
- Social History
  [ <a href="StructureDefinition-Observation-tobaccouse-uv-ips.html">Observation (SH: tobacco use)</a> |
    <a href="StructureDefinition-Observation-alcoholuse-uv-ips.html">Observation (SH: alcohol use)</a> ]
- Vital Signs
  [ <a href="{{site.data.fhir.path}}observation-vitalsigns.html">Vital Signs Profiles</a> ]
- Resources and profiles used across various sections
  [ <a href="StructureDefinition-Organization-uv-ips.html">Organization (IPS)</a> | <a href="StructureDefinition-Practitioner-uv-ips.html">Practitioner (IPS)</a> | <a href="StructureDefinition-PractitionerRole-uv-ips.html">PractitionerRole (IPS)</a> | <a href="{{site.data.fhir.path}}documentreference.html">DocumentReference</a>]

---


---

File: repos/HL7_SLASH_fhir-ips/input/pagecontent/terminology.md

### Code Systems

These code systems have been defined for this implementation guide:
<ul>{% include list-simple-name-codesystems.xhtml %}</ul>

### Value Sets

These value sets have been defined for this implementation guide:
<ul>{% include list-simple-name-valuesets.xhtml %}</ul>

### Note

Many of the same (or similar related) terminology artifacts specified by this guide are also published in the [ART-DECOR IPS repository](https://art-decor.org/art-decor/decor-valuesets--hl7ips-).

### IP Statements

{% include ip-statements.xhtml %}


---

