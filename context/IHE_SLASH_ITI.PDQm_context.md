File: repos/IHE_SLASH_ITI.PDQm/input/fsh/Aliases.fsh

Alias: SCT = http://snomed.info/sct
Alias: UCUM = http://unitsofmeasure.org
Alias: LOINC = http://loinc.org
Alias: ReasonCodeExtension = http://hl7.org/fhir/StructureDefinition/workflow-reasonCode
Alias: DCM = http://dicom.nema.org/resources/ontology/DCM


---

File: repos/IHE_SLASH_ITI.PDQm/input/fsh/audit.fsh

Invariant: val-audit-source
Description: "The Audit Source is this agent too."
Expression: "$this.who = %resource.source.observer"
Severity: #error


Profile:        AuditPdqmQuerySupplier
Parent:         IHE.BasicAudit.Query
Id:             IHE.PDQm.Query.Audit.Supplier
Title:          "Audit Event for PDQm Query at Supplier"
Description:    """
Defines constraints on the AuditEvent (AuditMessage) Resource when a Patient Demographics Supplier responds to a Patient Demographics Query [ITI-78](./ITI-78.html).
- Build off of the IHE BasicAudit Query event
- add the ITI-78 as a subtype
- client is Patient Demographics Consumer
- server is Patient Demographics Supplier
- entity slice for query are REQUIRED
- entity slice for transaction is available
- entity for patient SHOULD be used when one patient is explicitly identified in the query parameters
- source is the server
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti78 1..1
* subtype[iti78] = urn:ihe:event-type-code#ITI-78 "Mobile Patient Demographics Query"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Patient Demographics Consumer"
* agent[server] ^short = "Patient Demographics Supplier"
* entity[query] ^short = "Search Parameters"
* entity contains patient 0..1
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what 1..1
* entity[patient].what only Reference(Patient)
* entity[patient] ^short = "Patient"


Profile:        AuditPdqmQueryConsumer
Parent:         IHE.BasicAudit.Query
Id:             IHE.PDQm.Query.Audit.Consumer
Title:          "Audit Event for PDQm Query at Consumer"
Description:    """
Defines constraints on the AuditEvent (AuditMessage) Resource for a Patient Demographics Consumer to record when it performs a Patient Demographics Query [ITI-78](./ITI-78.html).
- Build off of the IHE BasicAudit Query event
- add the ITI-78 as a subtype
- client is Patient Demographics Consumer
- server is Patient Demographics Supplier
- entity slice for query are REQUIRED
- entity slice for transaction is available
- entity for patient SHOULD be used when one patient is explicitly identified in the query parameters
- source is the client
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti78 1..1
* subtype[iti78] = urn:ihe:event-type-code#ITI-78 "Mobile Patient Demographics Query"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Patient Demographics Consumer"
* agent[server] ^short = "Patient Demographics Supplier"
* entity[query] ^short = "Search Parameters"
* entity contains patient 0..1
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what 1..1
* entity[patient].what only Reference(Patient)
* entity[patient] ^short = "Patient"

Profile:        AuditPdqmMatchSupplier
Parent:         IHE.BasicAudit.Query
Id:             IHE.PDQm.Match.Audit.Supplier
Title:          "Audit Event for PDQm Match at Supplier"
Description:    """
Defines constraints on the AuditEvent (AuditMessage) Resource when a Patient Demographics Supplier responds to a Patient Demographics Match [ITI-119](./ITI-119.html).
- Build off of the IHE BasicAudit Query event
- add the ITI-119 as a subtype
- client is Patient Demographics Consumer
- server is Patient Demographics Supplier
- entity slice for query are REQUIRED
- entity slice for transaction is available
- entity for patient SHOULD be used when one patient is explicitly identified in the query parameters
- source is the server
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti119 1..1
* subtype[iti119] = urn:ihe:event-type-code#ITI-119 "Patient Demographics Match"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Patient Demographics Consumer"
* agent[server] ^short = "Patient Demographics Supplier"
* entity[query] ^short = "Search Parameters"
* entity contains patient 0..1
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what 1..1
* entity[patient].what only Reference(Patient)
* entity[patient] ^short = "Patient"

Profile:        AuditPdqmMatchConsumer
Parent:         IHE.BasicAudit.Query
Id:             IHE.PDQm.Match.Audit.Consumer
Title:          "Audit Event for PDQm Match at Consumer"
Description:    """
Defines constraints on the AuditEvent (AuditMessage) Resource for a Patient Demographics Consumer to record when it performs a Patient Demographics Match [ITI-119](./ITI-119.html).
- Build off of the IHE BasicAudit Query event
- add the ITI-119 as a subtype
- client is Patient Demographics Consumer
- server is Patient Demographics Supplier
- entity slice for query are REQUIRED
- entity slice for transaction is available
- entity for patient SHOULD be used when one patient is explicitly identified in the query parameters
- source is the client
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti119 1..1
* subtype[iti119] = urn:ihe:event-type-code#ITI-119 "Patient Demographics Match"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Patient Demographics Consumer"
* agent[server] ^short = "Patient Demographics Supplier"
* entity[query] ^short = "Search Parameters"
* entity contains patient 0..1
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what 1..1
* entity[patient].what only Reference(Patient)
* entity[patient] ^short = "Patient"

---

File: repos/IHE_SLASH_ITI.PDQm/input/fsh/capability.fsh

Instance: IHE.PDQm.PatientDemographicsSupplier
InstanceOf: CapabilityStatement
Title: "PDQm Patient Demographics Supplier Actor"
Usage: #definition
* description = """
The PDQm Patient Demographics Supplier Actor (server) requirements CapabililtyStatement expresses the requirements that SHALL be provided.

- Query against the FHIR endpoint to the Patient Resource endpoint
- Using FHIR R4
- SHALL support both json or xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- [Search Parameters that SHALL be supported](ITI-78.html#23784121-search-parameters)
  - _id
  - active
  - family
  - given
  - identifier
  - telecom
  - birthdate
  - address
  - gender
  - mothersMaidenName
- SHALL support the `:exact` modifier on search parameters of type string
- SHALL return Patient Resources conforming to the PDQm Patient Profile
"""
* name = "IHE_PDQM_PATIENT_DEMOGRAPHICS_SUPPLIER"
* title = "IHE PDQm Patient Demographics Supplier"
* status = #active
* experimental = false
* date = "2023-09-25"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #server
  * documentation = "PDQm Patient Demographics Supplier provides capability to discover Patient Identities by demographics and identities."
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"
  * resource[+]
    * type = #Patient
    * supportedProfile[+] = Canonical(IHE.PDQm.Patient)
    * documentation = """
Mobile Patient Demographics Query [ITI-78]
"""
    * interaction[+].code = #read
    * interaction[+].code = #search-type
    * searchParam[+]
      * name = "_lastUpdated"
      * type = #date
      * documentation = "When the resource version last changed"
    * searchParam[+]
      * name = "_id"
      * type = #token
      * documentation = "Logical id of this artifact"
    * searchParam[+]
      * name = "active"
      * type = #token
      * documentation = "Whether the patient record is active"
    * searchParam[+]
      * name = "family"
      * type = #string
      * documentation = "A portion of the family name of the patient"
    * searchParam[+]
      * name = "family:exact"
      * type = #string
      * documentation = "A portion of the family name of the patient, modified to use exact string matching"
    * searchParam[+]
      * name = "given"
      * type = #string
      * documentation = "A portion of the given name of the patient"
    * searchParam[+]
      * name = "given:exact"
      * type = #string
      * documentation = "A portion of the given name of the patient, modified to use exact string matching"
    * searchParam[+]
      * name = "identifier"
      * type = #token
      * documentation = "A patient identifier"
    * searchParam[+]
      * name = "telecom"
      * type = #token
      * documentation = "The value in any kind of telecom details of the patient"
    * searchParam[+]
      * name = "birthdate"
      * type = #date
      * documentation = "The patient's date of birth"
    * searchParam[+]
      * name = "address"
      * type = #string
      * documentation = "A server defined search that MAY match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text"
    * searchParam[+]
      * name = "address:exact"
      * type = #string
      * documentation = "A server defined search that MAY match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text, modified to use exact string matching"
    * searchParam[+]
      * name = "address-city"
      * type = #string
      * documentation = "A city specified in an address"
    * searchParam[+]
      * name = "address-city:exact"
      * type = #string
      * documentation = "A city specified in an address, modified to use exact string matching"
    * searchParam[+]
      * name = "address-country"
      * type = #string
      * documentation = "A country specified in an address"
    * searchParam[+]
      * name = "address-country:exact"
      * type = #string
      * documentation = "A country specified in an address, modified to use exact string matching"
    * searchParam[+]
      * name = "address-postalcode"
      * type = #string
      * documentation = "A postalCode specified in an address"
    * searchParam[+]
      * name = "address-postalcode:exact"
      * type = #string
      * documentation = "A postalCode specified in an address, modified to use exact string matching"
    * searchParam[+]
      * name = "address-state"
      * type = #string
      * documentation = "A state specified in an address"
    * searchParam[+]
      * name = "address-state:exact"
      * type = #string
      * documentation = "A state specified in an address, modified to use exact matching"
    * searchParam[+]
      * name = "gender"
      * type = #token
      * documentation = "Gender of the patient"
    * searchParam[+]
      * name = "mothersMaidenName"
      * definition = "http://hl7.org/fhir/SearchParameter/patient-extensions-Patient-mothersMaidenName"
      * type = #string
      * documentation = "Mother's maiden (unmarried) name, commonly collected to help verify patient identity."
    * searchParam[+]
      * name = "mothersMaidenName:exact"
      * definition = "http://hl7.org/fhir/SearchParameter/patient-extensions-Patient-mothersMaidenName"
      * type = #string
      * documentation = "Mother's maiden (unmarried) name, commonly collected to help verify patient identity, modified to use exact string matching."
  * interaction.code = #search-system


Instance: IHE.PDQm.PatientDemographicsSupplierMatch
InstanceOf: CapabilityStatement
Title: "PDQm Patient Demographics Supplier Actor Implementing Match Operation Option"
Usage: #definition
* description = """
The PDQm Patient Demographics Supplier Actor (server) requirements CapabililtyStatement expresses the requirements that SHALL be provided. This capability statement implements the Match Operation Option.

- Query against the FHIR endpoint to the Patient Resource endpoint
- Using FHIR R4
- SHALL support both json or xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- [Search Parameters that SHALL be supported](ITI-78.html#23784121-search-parameters)
  - _id
  - active
  - family
  - given
  - identifier
  - telecom
  - birthdate
  - address
  - gender
  - mothersMaidenName
- SHALL support the `:exact` modifier on search parameters of type string
- SHALL support the PDQm $match operation
- SHALL return Patient Resources conforming to the PDQm Patient Profile
"""
* name = "IHE_PDQM_PATIENT_DEMOGRAPHICS_SUPPLIER_Match"
* title = "IHE PDQm Patient Demographics Supplier Implementing Match Operation Option"
* status = #active
* experimental = false
* date = "2023-09-25"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #server
  * documentation = "PDQm Patient Demographics Supplier provides capability to discover Patient Identities by demographics and identities."
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"
  * resource[+]
    * type = #Patient
    * supportedProfile[+] = Canonical(IHE.PDQm.Patient)
    * documentation = """
Mobile Patient Demographics Query [ITI-78] and Patient Demographics Match [ITI-119]
"""
    * interaction[+].code = #read
    * interaction[+].code = #search-type
    * searchParam[+]
      * name = "_lastUpdated"
      * type = #date
      * documentation = "When the resource version last changed"
    * searchParam[+]
      * name = "_id"
      * type = #token
      * documentation = "Logical id of this artifact"
    * searchParam[+]
      * name = "active"
      * type = #token
      * documentation = "Whether the patient record is active"
    * searchParam[+]
      * name = "family"
      * type = #string
      * documentation = "A portion of the family name of the patient"
    * searchParam[+]
      * name = "family:exact"
      * type = #string
      * documentation = "A portion of the family name of the patient, modified to use exact string matching"
    * searchParam[+]
      * name = "given"
      * type = #string
      * documentation = "A portion of the given name of the patient"
    * searchParam[+]
      * name = "given:exact"
      * type = #string
      * documentation = "A portion of the given name of the patient, modified to use exact string matching"
    * searchParam[+]
      * name = "identifier"
      * type = #token
      * documentation = "A patient identifier"
    * searchParam[+]
      * name = "telecom"
      * type = #token
      * documentation = "The value in any kind of telecom details of the patient"
    * searchParam[+]
      * name = "birthdate"
      * type = #date
      * documentation = "The patient's date of birth"
    * searchParam[+]
      * name = "address"
      * type = #string
      * documentation = "A server defined search that MAY match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text"
    * searchParam[+]
      * name = "address:exact"
      * type = #string
      * documentation = "A server defined search that MAY match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text, modified to use exact string matching"
    * searchParam[+]
      * name = "address-city"
      * type = #string
      * documentation = "A city specified in an address"
    * searchParam[+]
      * name = "address-city:exact"
      * type = #string
      * documentation = "A city specified in an address, modified to use exact string matching"
    * searchParam[+]
      * name = "address-country"
      * type = #string
      * documentation = "A country specified in an address"
    * searchParam[+]
      * name = "address-country:exact"
      * type = #string
      * documentation = "A country specified in an address, modified to use exact string matching"
    * searchParam[+]
      * name = "address-postalcode"
      * type = #string
      * documentation = "A postalCode specified in an address"
    * searchParam[+]
      * name = "address-postalcode:exact"
      * type = #string
      * documentation = "A postalCode specified in an address, modified to use exact string matching"
    * searchParam[+]
      * name = "address-state"
      * type = #string
      * documentation = "A state specified in an address"
    * searchParam[+]
      * name = "address-state:exact"
      * type = #string
      * documentation = "A state specified in an address, modified to use exact matching"
    * searchParam[+]
      * name = "gender"
      * type = #token
      * documentation = "Gender of the patient"
    * searchParam[+]
      * name = "mothersMaidenName"
      * definition = "http://hl7.org/fhir/SearchParameter/patient-extensions-Patient-mothersMaidenName"
      * type = #string
      * documentation = "Mother's maiden (unmarried) name, commonly collected to help verify patient identity."
    * searchParam[+]
      * name = "mothersMaidenName:exact"
      * definition = "http://hl7.org/fhir/SearchParameter/patient-extensions-Patient-mothersMaidenName"
      * type = #string
      * documentation = "Mother's maiden (unmarried) name, commonly collected to help verify patient identity, modified to use exact string matching."
    * operation
      * name = "match"
      * definition = Canonical(PDQmMatch)
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * documentation = """Implementation SHALL conform to [ITI-119](ITI-119.html)"""   
  * interaction.code = #search-system



Instance: IHE.PDQm.PatientDemographicsConsumerQuery
InstanceOf: CapabilityStatement
Title: "PDQm Patient Demographics Consumer Actor Implementing Patient Search Option"
Usage: #definition
* description = """
The PDQm Patient Demographics Consumer Actor (client) requirements CapabililtyStatement expresses the requirements that can be utilized while being compliant. This capability statement implements the Patient Search Option.

- Query against the FHIR endpoint to the Patient Resource endpoint
- Using FHIR R4
- MAY request json or xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- [Search Parameters that MAY be used](ITI-78.html#23784121-search-parameters)
  - _id
  - active
  - family
  - given
  - identifier
  - telecom
  - birthdate
  - address
  - gender
  - mothersMaidenName
"""
* name = "IHE_PDQM_PATIENT_DEMOGRAPHICS_CONSUMER_SEARCH"
* title = "IHE PDQm Patient Demographics Consumer Implementing Patient Search Option"
* status = #active
* experimental = false
* date = "2022-10-28"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "PDQm Patient Demographics Consumer provides capability to discover Patient Identities by demographics and identities."
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"
  * resource[+]
    * type = #Patient
    * documentation = """
Mobile Patient Demographics Query [ITI-78]
"""
    * interaction[+].code = #read
    * interaction[+].code = #search-type
    * searchParam[+]
      * name = "_lastUpdated"
      * type = #date
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #MAY
      * documentation = "When the resource version last changed"
    * searchParam[+]
      * name = "_id"
      * type = #token
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #MAY
      * documentation = "Logical id of this artifact"
    * searchParam[+]
      * name = "active"
      * type = #token
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #MAY
      * documentation = "Whether the patient record is active"
    * searchParam[+]
      * name = "family"
      * type = #string
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #MAY
      * documentation = "A portion of the family name of the patient"
    * searchParam[+]
      * name = "given"
      * type = #string
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #MAY
      * documentation = "A portion of the given name of the patient"
    * searchParam[+]
      * name = "identifier"
      * type = #token
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #MAY
      * documentation = "A patient identifier"
    * searchParam[+]
      * name = "telecom"
      * type = #token
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #MAY
      * documentation = "The value in any kind of telecom details of the patient"
    * searchParam[+]
      * name = "birthdate"
      * type = #date
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #MAY
      * documentation = "The patient's date of birth"
    * searchParam[+]
      * name = "address"
      * type = #string
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #MAY
      * documentation = "A server defined search that MAY match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text"
    * searchParam[+]
      * name = "address-city"
      * type = #string
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #MAY
      * documentation = "A city specified in an address"
    * searchParam[+]
      * name = "address-country"
      * type = #string
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #MAY
      * documentation = "A country specified in an address"
    * searchParam[+]
      * name = "address-postalcode"
      * type = #string
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #MAY
      * documentation = "A postalCode specified in an address"
    * searchParam[+]
      * name = "address-state"
      * type = #string
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #MAY
      * documentation = "A state specified in an address"
    * searchParam[+]
      * name = "gender"
      * type = #token
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #MAY
      * documentation = "Gender of the patient"
    * searchParam[+]
      * name = "mothersMaidenName"
      * definition = "http://hl7.org/fhir/SearchParameter/patient-extensions-Patient-mothersMaidenName"
      * type = #string
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #MAY
      * documentation = "Mother's maiden (unmarried) name, commonly collected to help verify patient identity."
  * interaction.code = #search-system

Instance: IHE.PDQm.PatientDemographicsConsumerMatch
InstanceOf: CapabilityStatement
Title: "PDQm Patient Demographics Consumer Actor Implementing Match Operation Option"
Usage: #definition
* description = """
The PDQm Patient Demographics Consumer Actor (client) requirements CapabililtyStatement expresses the requirements that can be utilized while being compliant. This capability statement implements the Match Operation Option.

- Invoke the $match operation on a FHIR endpoint
- Using FHIR R4
- Input and output parameters conform to the PDQm Profiles
- MAY request json or xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
"""
* name = "IHE_PDQM_PATIENT_DEMOGRAPHICS_CONSUMER_MATCH"
* title = "IHE PDQm Patient Demographics Consumer Implementing Match Operation Option"
* status = #active
* experimental = false
* date = "2023-09-22"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "PDQm Patient Demographics Consumer provides capability to discover Patient Identities by invoking the ITI-119 $match operation."
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"
  * resource[+]
    * type = #Patient
    * supportedProfile[+] = Canonical(IHE.PDQm.MatchInputPatient)
    * supportedProfile[+] = Canonical(IHE.PDQm.Patient)
    * documentation = "Patient Demographics Match [ITI-119]"
    * operation
      * name = "match"
      * definition = Canonical(PDQmMatch)
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * documentation = """Implementation SHALL conform to [ITI-119](ITI-119.html)"""   

---

File: repos/IHE_SLASH_ITI.PDQm/input/fsh/ex-audit-119.fsh

Instance: ex-auditPdqmMatch-consumer
InstanceOf: IHE.PDQm.Match.Audit.Consumer
Title: "Audit Example of ITI-119 at Consumer"
Description: """
Audit Event for PDQm Query Transaction by the Patient Identifier Cross-reference Consumer

Where the $match operation was executed with the [example request parameters Bundle](Parameters-ex-match-input-patient-only.html).

"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
* recorded = 2023-09-20T19:17:32Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "fancy mobile app"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].who = Reference(Device/ex-device)
* agent[client].requestor = false
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
// not clear how a server uses the IUA Oauth token here
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who.display = "http://server.example.com/fhir"
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].query = "ew0KICAicmVzb3VyY2VUeXBlIiA6ICJQYXJhbWV0ZXJzIiwNCiAgImlkIiA6ICJleC1tYXRjaC1pbnB1dCIsDQogICJtZXRhIiA6IHsNCiAgICAicHJvZmlsZSIgOiBbDQogICAgICAiaHR0cHM6Ly9wcm9maWxlcy5paGUubmV0L0lUSS9QRFFtL1N0cnVjdHVyZURlZmluaXRpb24vSUhFLlBEUW0uTWF0Y2hQYXJhbWV0ZXJzSW4iDQogICAgXSwNCiAgICAic2VjdXJpdHkiIDogWw0KICAgICAgew0KICAgICAgICAic3lzdGVtIiA6ICJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUFjdFJlYXNvbiIsDQogICAgICAgICJjb2RlIiA6ICJIVEVTVCINCiAgICAgIH0NCiAgICBdDQogIH0sDQogICJwYXJhbWV0ZXIiIDogWw0KICAgIHsNCiAgICAgICJuYW1lIiA6ICJyZXNvdXJjZSIsDQogICAgICAicmVzb3VyY2UiIDogew0KICAgICAgICAicmVzb3VyY2VUeXBlIiA6ICJQYXRpZW50IiwNCiAgICAgICAgImlkIiA6ICJleC1tYXRjaC1pbnB1dC1wYXRpZW50IiwNCiAgICAgICAgIm1ldGEiIDogew0KICAgICAgICAgICJwcm9maWxlIiA6IFsNCiAgICAgICAgICAgICJodHRwczovL3Byb2ZpbGVzLmloZS5uZXQvSVRJL1BEUW0vU3RydWN0dXJlRGVmaW5pdGlvbi9JSEUuUERRbS5NYXRjaElucHV0Ig0KICAgICAgICAgIF0sDQogICAgICAgICAgInNlY3VyaXR5IiA6IFsNCiAgICAgICAgICAgIHsNCiAgICAgICAgICAgICAgInN5c3RlbSIgOiAiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1BY3RSZWFzb24iLA0KICAgICAgICAgICAgICAiY29kZSIgOiAiSFRFU1QiDQogICAgICAgICAgICB9DQogICAgICAgICAgXQ0KICAgICAgICB9LA0KICAgICAgICAidGV4dCIgOiB7DQogICAgICAgICAgInN0YXR1cyIgOiAiZW1wdHkiLA0KICAgICAgICAgICJkaXYiIDogIjxkaXYgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI+VGhpcyBQYXRpZW50IFJlc291cmNlIGNvbnRhaW5zIGEgc2V0IG9mIGRpc2NyZXRlIGRlbW9ncmFwaGljcyB0byBzZXJ2ZSBhcyBpbnB1dCB0byB0aGUgJG1hdGNoIG9wZXJhdGlvbi48L2Rpdj4iDQogICAgICAgIH0sDQogICAgICAgICJpZGVudGlmaWVyIiA6IFsNCiAgICAgICAgICB7DQogICAgICAgICAgICAic3lzdGVtIiA6ICJodHRwOi8vZXhhbXBsZS5vcmcvZXhhbXBsZVN5c3RlbSIsDQogICAgICAgICAgICAidmFsdWUiIDogIjg2NzUzMTAiDQogICAgICAgICAgfQ0KICAgICAgICBdLA0KICAgICAgICAibmFtZSIgOiBbDQogICAgICAgICAgew0KICAgICAgICAgICAgImZhbWlseSIgOiAiU2NobWlkdCIsDQogICAgICAgICAgICAiZ2l2ZW4iIDogWw0KICAgICAgICAgICAgICAiSm9obiINCiAgICAgICAgICAgIF0NCiAgICAgICAgICB9DQogICAgICAgIF0sDQogICAgICAgICJnZW5kZXIiIDogIm90aGVyIiwNCiAgICAgICAgImJpcnRoRGF0ZSIgOiAiMTkyMy0wNy0yNSIsDQogICAgICAgICJhZGRyZXNzIiA6IFsNCiAgICAgICAgICB7DQogICAgICAgICAgICAic3RhdGUiIDogIldJIiwNCiAgICAgICAgICAgICJjb3VudHJ5IiA6ICJVU0EiDQogICAgICAgICAgfQ0KICAgICAgICBdDQogICAgICB9DQogICAgfQ0KICBdDQp9"

Instance: ex-auditPdqmMatch-supplier
InstanceOf: IHE.PDQm.Match.Audit.Supplier
Title: "Audit Example of ITI-119 at Supplier"
Description: """
Audit Event for PDQm Match Transaction by the Patient Identifier Cross-reference Supplier

Where the $match operation was executed with the [example request parameters Bundle](Parameters-ex-match-input-patient-only.html).

Note the Supplier may choose to record patient identities found, but is not required to.

Given the Supplier chooses to record a patient in the AuditEvent 
When the search finds multiple Patients, 
Then the Supplier would create an AuditEvent for each of those Patients. 

This example shows where ex-patient is returned. This single result does not affect the response returned on the ITI-119 that would include all results.
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #E
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
//* severity = #Informational
* recorded = 2023-09-21T19:17:32Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "HIE PDQm api example"
* source.observer.display = "http://server.example.com/fhir"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].who = Reference(Device/ex-device)
* agent[client].requestor = false
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
// not clear how a server uses the IUA Oauth token here
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who.display = "http://server.example.com/fhir"
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].query = "ew0KICAicmVzb3VyY2VUeXBlIiA6ICJQYXJhbWV0ZXJzIiwNCiAgImlkIiA6ICJleC1tYXRjaC1pbnB1dCIsDQogICJtZXRhIiA6IHsNCiAgICAicHJvZmlsZSIgOiBbDQogICAgICAiaHR0cHM6Ly9wcm9maWxlcy5paGUubmV0L0lUSS9QRFFtL1N0cnVjdHVyZURlZmluaXRpb24vSUhFLlBEUW0uTWF0Y2hQYXJhbWV0ZXJzSW4iDQogICAgXSwNCiAgICAic2VjdXJpdHkiIDogWw0KICAgICAgew0KICAgICAgICAic3lzdGVtIiA6ICJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUFjdFJlYXNvbiIsDQogICAgICAgICJjb2RlIiA6ICJIVEVTVCINCiAgICAgIH0NCiAgICBdDQogIH0sDQogICJwYXJhbWV0ZXIiIDogWw0KICAgIHsNCiAgICAgICJuYW1lIiA6ICJyZXNvdXJjZSIsDQogICAgICAicmVzb3VyY2UiIDogew0KICAgICAgICAicmVzb3VyY2VUeXBlIiA6ICJQYXRpZW50IiwNCiAgICAgICAgImlkIiA6ICJleC1tYXRjaC1pbnB1dC1wYXRpZW50IiwNCiAgICAgICAgIm1ldGEiIDogew0KICAgICAgICAgICJwcm9maWxlIiA6IFsNCiAgICAgICAgICAgICJodHRwczovL3Byb2ZpbGVzLmloZS5uZXQvSVRJL1BEUW0vU3RydWN0dXJlRGVmaW5pdGlvbi9JSEUuUERRbS5NYXRjaElucHV0Ig0KICAgICAgICAgIF0sDQogICAgICAgICAgInNlY3VyaXR5IiA6IFsNCiAgICAgICAgICAgIHsNCiAgICAgICAgICAgICAgInN5c3RlbSIgOiAiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1BY3RSZWFzb24iLA0KICAgICAgICAgICAgICAiY29kZSIgOiAiSFRFU1QiDQogICAgICAgICAgICB9DQogICAgICAgICAgXQ0KICAgICAgICB9LA0KICAgICAgICAidGV4dCIgOiB7DQogICAgICAgICAgInN0YXR1cyIgOiAiZW1wdHkiLA0KICAgICAgICAgICJkaXYiIDogIjxkaXYgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI+VGhpcyBQYXRpZW50IFJlc291cmNlIGNvbnRhaW5zIGEgc2V0IG9mIGRpc2NyZXRlIGRlbW9ncmFwaGljcyB0byBzZXJ2ZSBhcyBpbnB1dCB0byB0aGUgJG1hdGNoIG9wZXJhdGlvbi48L2Rpdj4iDQogICAgICAgIH0sDQogICAgICAgICJpZGVudGlmaWVyIiA6IFsNCiAgICAgICAgICB7DQogICAgICAgICAgICAic3lzdGVtIiA6ICJodHRwOi8vZXhhbXBsZS5vcmcvZXhhbXBsZVN5c3RlbSIsDQogICAgICAgICAgICAidmFsdWUiIDogIjg2NzUzMTAiDQogICAgICAgICAgfQ0KICAgICAgICBdLA0KICAgICAgICAibmFtZSIgOiBbDQogICAgICAgICAgew0KICAgICAgICAgICAgImZhbWlseSIgOiAiU2NobWlkdCIsDQogICAgICAgICAgICAiZ2l2ZW4iIDogWw0KICAgICAgICAgICAgICAiSm9obiINCiAgICAgICAgICAgIF0NCiAgICAgICAgICB9DQogICAgICAgIF0sDQogICAgICAgICJnZW5kZXIiIDogIm90aGVyIiwNCiAgICAgICAgImJpcnRoRGF0ZSIgOiAiMTkyMy0wNy0yNSIsDQogICAgICAgICJhZGRyZXNzIiA6IFsNCiAgICAgICAgICB7DQogICAgICAgICAgICAic3RhdGUiIDogIldJIiwNCiAgICAgICAgICAgICJjb3VudHJ5IiA6ICJVU0EiDQogICAgICAgICAgfQ0KICAgICAgICBdDQogICAgICB9DQogICAgfQ0KICBdDQp9"


---

File: repos/IHE_SLASH_ITI.PDQm/input/fsh/ex-audit-78.fsh

Instance: ex-auditPdqmQuery-consumer
InstanceOf: IHE.PDQm.Query.Audit.Consumer
Title: "Audit Example of ITI-78 at Consumer"
Description: """
Audit Event for PDQm Query Transaction by the Patient Identifier Cross-reference Consumer

where the Query was executed with a GET as follows:

```
GET https://server.example.com/fhir/Patient?family=MOHR&given=ALICE&active=true&gender=female
Accept: application/fhir+json; fhirVersion=4.0
```
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #E
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
* subtype[iti78] = urn:ihe:event-type-code#ITI-78 "Mobile Patient Demographics Query"
//* severity = #Informational
* recorded = 2021-07-13T19:17:32Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "fancy mobile app"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].who = Reference(Device/ex-device)
* agent[client].requestor = false
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
// not clear how a server uses the IUA Oauth token here
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who.display = "http://server.example.com/fhir"
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].query = "R0VUIGh0dHBzOi8vc2VydmVyLmV4YW1wbGUuY29tL2ZoaXIvUGF0aWVudD9mYW1pbHk9TU9IUiZnaXZlbj1BTElDRSZhY3RpdmU9dHJ1ZSZnZW5kZXI9ZmVtYWxlCkFjY2VwdDogYXBwbGljYXRpb24vZmhpcitqc29uOyBmaGlyVmVyc2lvbj00LjA="



Instance: ex-auditPdqmQuery-supplier
InstanceOf: IHE.PDQm.Query.Audit.Supplier
Title: "Audit Example of ITI-78 at Supplier"
Description: """
Audit Event for PDQm Query Transaction by the Patient Identifier Cross-reference Supplier

where the Query was executed with a GET as follows:

```
GET https://server.example.com/fhir/Patient?family=MOHR&given=ALICE&active=true&gender=female
Accept: application/fhir+json; fhirVersion=4.0
```

Note the Supplier may choose to record patient identities found, but is not required to.

Given the Supplier chooses to record a patient in the AuditEvent 
When the search finds multiple Patients, 
Then the Supplier would create an AuditEvent for each of those Patients. 

This example shows where ex-patient is returned. This single result does not affect the response returned on the ITI-78 that would include all results.
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #E
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
* subtype[iti78] = urn:ihe:event-type-code#ITI-78 "Mobile Patient Demographics Query"
//* severity = #Informational
* recorded = 2021-07-13T19:17:32Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "HIE PDQm api example"
* source.observer.display = "http://server.example.com/fhir"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].who = Reference(Device/ex-device)
* agent[client].requestor = false
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
// not clear how a server uses the IUA Oauth token here
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who.display = "http://server.example.com/fhir"
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].query = "R0VUIGh0dHBzOi8vc2VydmVyLmV4YW1wbGUuY29tL2ZoaXIvUGF0aWVudD9mYW1pbHk9TU9IUiZnaXZlbj1BTElDRSZhY3RpdmU9dHJ1ZSZnZW5kZXI9ZmVtYWxlCkFjY2VwdDogYXBwbGljYXRpb24vZmhpcitqc29uOyBmaGlyVmVyc2lvbj00LjA="



---

File: repos/IHE_SLASH_ITI.PDQm/input/fsh/ex-dummy.fsh

Instance:   ex-device
InstanceOf: Device
Title:      "Dummy Device example"
Description: "Dummy Device example for completeness sake. No actual use of this resource other than an example target"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST


---

File: repos/IHE_SLASH_ITI.PDQm/input/fsh/ex-match-input-patient.fsh

Instance:   ex-match-input-patient
InstanceOf: PDQmMatchInput
Title:      "Example Patient input for PDQm $match"
Description: "Example of a Patient resource to be used as input for $match"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier[+].system = "http://example.org/exampleSystem"
* identifier[=].value = "8675309"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">This Patient Resource contains a set of discrete demographics to serve as input to the $match operation.</div>"
* name[+].family = "Schmidt"
* name[=].given = "John"
* gender = #other
* birthDate = "1923-07-25"
* address.state = "WI"
* address.country = "USA"


---

File: repos/IHE_SLASH_ITI.PDQm/input/fsh/ex-match-input.fsh

Instance:   ex-match-input-patient-only
InstanceOf: IHE.PDQm.MatchParametersIn
Title:      "Example $match Input Parameters Where Only Patient Is Specified"
Description: "Example of Parameters resource to be supplied for ITI-119 input when only the Patient parameter is specified. "
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* parameter[resource].resource = ex-match-input-patient


Instance:   ex-match-input-onlyCertainMatches
InstanceOf: IHE.PDQm.MatchParametersIn
Title:      "Example $match Input Parameters Where onlyCertainmatches Is Specified"
Description: "Example of Parameters resource to be supplied for ITI-119 input when onlyCertainMatches is specified."
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* parameter[resource].resource = ex-match-input-patient
* parameter[onlyCertainMatches].valueBoolean = true


Instance:   ex-match-input-count
InstanceOf: IHE.PDQm.MatchParametersIn
Title:      "Example $match Input Parameters Where count Is Specified"
Description: "Example of Parameters resource to be supplied for ITI-119 input when count is specified."
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* parameter[resource].resource = ex-match-input-patient
* parameter[count].valueInteger = 1

---

File: repos/IHE_SLASH_ITI.PDQm/input/fsh/ex-match-output.fsh

Instance:   ex-match-output
InstanceOf: IHE.PDQm.MatchParametersOut
Title:      "Example $match Output Bundle - 1 Patient"
Description: "Example of Bundle resource to be returned for ITI-119 output. This is a simple case where only one patient is returned."
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* link
  * relation = "self"
  * url = "http://profiles.ihe.net/IHE/ITI.PDQm/branches/match/Bundle-ex-match-output.html"
* entry[patient] 
  * resource = ex-patient
  * search
    * score = 0.9
    * extension[MatchGrade] 
      * valueCode = #certain
  * fullUrl = "https://profiles.ihe.net/ITI/PDQm/Patient-ex-patient.html"


Instance:   ex-match-output-multiple
InstanceOf: IHE.PDQm.MatchParametersOut
Title:      "Example $match Output Bundle - 2 Patients"
Description: "Example of Bundle resource to be returned for ITI-119 output. 2 Patients are found in the search result."
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* link
  * relation = "self"
  * url = "http://profiles.ihe.net/IHE/ITI.PDQm/branches/match/Bundle-ex-match-output-multiple.html"
* entry[patient] 
  * resource = ex-patient
  * search
    * score = 0.9
    * extension[MatchGrade] 
      * valueCode = #probable
  * fullUrl = "https://profiles.ihe.net/ITI/PDQm/Patient-ex-patient.html"
* entry[patient][+]
  * resource = ex-patient-mothers-maiden-name
  * search
    * score = 0.5
    * extension[MatchGrade]
      * valueCode = #possible
  * fullUrl = "https://profiles.ihe.net/ITI/PDQm/Patient-ex-patient-mothers-maiden-name.html"


Instance:   ex-match-output-empty
InstanceOf: IHE.PDQm.MatchParametersOut
Title:      "Example $match Output Bundle - No Patients Found"
Description: "Example of Bundle resource to be returned for ITI-119 output. No Patients are found in the search result."
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* link
  * relation = "self"
  * url = "http://profiles.ihe.net/IHE/ITI.PDQm/branches/match/Bundle-ex-match-output-empty.html"


Instance:   ex-match-output-error
InstanceOf: IHE.PDQm.MatchParametersOut
Title:      "Example $match Output Bundle - Error"
Description: "Example of Bundle resource to be returned for ITI-119 output. No Patients are found in the search result."
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* link
  * relation = "self"
  * url = "http://profiles.ihe.net/IHE/ITI.PDQm/branches/match/Bundle-ex-match-output-empty.html"
* entry[operationOutcome]
  * resource = ex-match-failure
  * search.mode = #outcome
  * fullUrl = "https://profiles.ihe.net/ITI/PDQm/OperationOutcome-ex-match-failure.html"


Instance:   ex-match-output-warning
InstanceOf: IHE.PDQm.MatchParametersOut
Title:      "Example $match Output Bundle - 1 Patient and 1 Warning"
Description: "Example of Bundle resource to be returned for ITI-119 output. 1 patient is returned alongside a warning."
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* link
  * relation = "self"
  * url = "http://profiles.ihe.net/IHE/ITI.PDQm/branches/match/Bundle-ex-match-output-warning.html"
* entry[patient] 
  * resource = ex-patient
  * search
    * score = 0.9
    * extension[MatchGrade] 
      * valueCode = #probable
  * fullUrl = "https://profiles.ihe.net/ITI/PDQm/Patient-ex-patient.html"
* entry[operationOutcome]
  * resource = ex-match-failure
  * search.mode = #outcome
  * fullUrl = "https://profiles.ihe.net/ITI/PDQm/OperationOutcome-ex-match-warning.html"

---

File: repos/IHE_SLASH_ITI.PDQm/input/fsh/ex-operation-outcome.fsh

Instance:   ex-match-failure
InstanceOf: OperationOutcome
Title:      "Example OperationOutcome - $match Failure"
Description: "Example OperationOutcome resulting from a failure to invoke $match"
Usage: #example

* issue
  * severity = #error
  * code = #timeout
  * details.text = "The operation timed out waiting for the backend server."
  

Instance:   ex-match-warning
InstanceOf: OperationOutcome
Title:      "Example OperationOutcome - $match Warning"
Description: "Example OperationOutcome containing a warning to be returned for $match"
Usage: #example

* issue
  * severity = #warning
  * code = #incomplete
  * details.text = "The search operation timed out after reaching the limit."

---

File: repos/IHE_SLASH_ITI.PDQm/input/fsh/ex-pdqm-patient.fsh

Instance:   ex-patient
InstanceOf: PDQmPatient
Title:      "Example PDQm Patient"
Description: "Example Patient instance of the PDQm Patient profile."
Usage: #example
// history - http://playgroundjungle.com/2018/02/origins-of-john-jacob-jingleheimer-schmidt.html
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier[+].system = "http://example.org/exampleSystem"
* identifier[=].value = "8675309"
* name[+].use = #usual
* name[=].family = "Schmidt"
* name[=].given = "John"
* name[=].text = "John Schmidt"
* name[+].use = #old
* name[=].family = "Schnidt"
* name[=].given[+] = "John"
* name[=].given[+] = "Jacob"
* name[=].given[+] = "Jingle"
* name[=].given[+] = "Heimer"
* name[=].text = "John Jacob Jingle Heimer Schnidt"
* name[=].period.end = "1960"
* name[+].use = #official
* name[=].family = "Schmidt"
* name[=].given[+] = "John"
* name[=].given[+] = "Jacob"
* name[=].given[+] = "Jingleheimer"
* name[=].period.start = "1960-01-01"
* name[=].text = "John Jacob Jingleheimer Schmidt"
* name[+].use = #nickname
* name[=].family = "Schmidt"
* name[=].given = "Jack"
* name[=].text = "Jack Schmidt"
* gender = #other
* birthDate = "1923-07-25"
* address.state = "WI"
* address.country = "USA"

Instance:   ex-patient-mothers-maiden-name
InstanceOf: PDQmPatient
Title:      "Example PDQm Patient with Mothers Maiden Name Extension"
Description: "Example Patient instance of the PDQm Patient profile where the Patient has the mother's maiden name specified."
Usage: #example
// history - http://playgroundjungle.com/2018/02/origins-of-john-jacob-jingleheimer-schmidt.html
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier[+].system = "http://example.org/exampleSystem"
* identifier[=].value = "90210"
* name[+].use = #usual
* name[=].family = "Schmit"
* name[=].given = "John"
* name[=].text = "John Schmit"
* gender = #male
* birthDate = "1932-07-25"
* address.state = "WI"
* address.country = "USA"
* extension[MothersMaidenName]
  * valueString = "Doe"

---

File: repos/IHE_SLASH_ITI.PDQm/input/fsh/ex-search-response.fsh

Instance:   ex-QueryPatientResourceResponseMessage
InstanceOf: IHE.PDQm.QueryPatientResourceResponseMessage
Title:      "Example of a Query Patient Resource Response message"
Description: "Example of a Query Patient Resource Response message with a single Patient"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #searchset
* link[0].relation = "self"
* link[0].url = "test.fhir.net/R4/fhir/Patient?family=Schmidt"
* total = 1
* timestamp = 2023-09-25T15:42:00Z
* entry[0].fullUrl = "http://example.org/Patient/ex-patient"
* entry[0].resource = ex-patient

---

File: repos/IHE_SLASH_ITI.PDQm/input/fsh/PDQmMatch.fsh

Instance: PDQmMatch
InstanceOf: OperationDefinition
Title: "PDQm $Match"
Usage: #definition
Description: """
This operation implements the [Patient Demographics Match \[ITI-119\]](ITI-119.html) transaction.
It is fully compatible with the [$match Operation on Patient](http://hl7.org/fhir/R4/patient-operation-match.html). 
The only changes are to constrain the input parameters to use the [PDQm Patient Profile for $match Input](StructureDefinition-IHE.PDQm.MatchInputPatient.html) profile
and to constring the output parameters to use the [PDQm Patient Profile](StructureDefinition-IHE.PDQm.Patient.html) profile.
"""

* base = "http://hl7.org/fhir/OperationDefinition/Patient-match"
* name = "Find_Patient_Matches_PDQm"
* status = #draft
* kind = #operation
* affectsState = false
* resource = #Patient
* system = false
* type = true
* instance = false
* code = #match
* inputProfile = Canonical(IHE.PDQm.MatchParametersIn)

* parameter[+]
  * name = #resource
  * use = #in
  * min = 1
  * max = "1"
  * documentation = "Use this to provide an entire set of patient details for the MPI to match against (e.g. POST a patient record to Patient/$match)."
  * type = #Patient
* parameter[+]
  * name = #onlyCertainMatches
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "If there are multiple potential matches, then the match SHOULD not return the results with this flag set to true. When false, the server MAY return multiple results with each result graded accordingly."
  * type = #boolean
* parameter[+]
  * name = #count
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "The maximum number of records to return. If no value is provided, the server decides how many matches to return. Note that clients SHOULD be careful when using this, as it MAY prevent probable - and valid - matches from being returned."
  * type = #integer
* parameter[+]
  * name = #return
  * use = #out
  * min = 1
  * max = "1"
  * documentation = "A bundle contain a set of Patient records that represent possible matches, optionally it MAY also contain an OperationOutcome with further information about the search results (such as warnings or information messages, such as a count of records that were close but eliminated) If the operation was unsuccessful, then an OperationOutcome MAY be returned along with a BadRequest status Code (e.g. security issue, or insufficient properties in patient fragment - check against profile).\n\nNote: as this is the only out parameter, it is a resource, and it has the name 'return', the result of this operation is returned directly as a resource"
  * type = #Bundle
  * targetProfile[+] = Canonical(IHE.PDQm.MatchParametersOut)

Profile: MatchParametersIn
Parent: Parameters 
Id: IHE.PDQm.MatchParametersIn
Title: "PDQm Match Input Parameters Profile"
Description: """
The PDQm Match Input Parameters Profile describes the Parameters Resource that is to be posted to the $match endpoint when invoking ITI-119.
This profile is consistent with the expections of the [Patient-match operation in FHIR core](http://hl7.org/fhir/R4/patient-operation-match.html),
except the input resource SHALL be an instance of the [PDQm Patient Profile for $match Input](StructureDefinition-IHE.PDQm.MatchInputPatient.html).

Note that the only REQUIRED parameter is the Patient Resource. When only the Patient is supplied, it can be POSTed directly to the $match endpoint
without being wrapped in a Parameters Resource, as long as it conforms to the [PDQm Patient Profile for $match Input](StructureDefinition-IHE.PDQm.MatchInputPatient.html).
"""

* implicitRules 0..0

* parameter 1..3
* parameter ^slicing.discriminator.type = #value
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.rules = #closed
* parameter ^slicing.description = "Parameters SHOULD match those of the $match input, with PDQm Profile Restrictions"
* parameter ^slicing.ordered = false

* parameter contains resource 1..1
* parameter[resource]
  * name = "resource"
  * value[x] 0..0
  * resource 1..1
  * resource only IHE.PDQm.MatchInputPatient
  * part 0..0
* parameter contains onlyCertainMatches 0..1
* parameter[onlyCertainMatches]
  * name = "onlyCertainMatches"
  * value[x] 1..1
  * value[x] only boolean
  * resource 0..0
  * part 0..0
* parameter contains count 0..1
* parameter[count]
  * name = "count"
  * value[x] 1..1
  * value[x] only integer
  * resource 0..0
  * part 0..0

* parameter
  * modifierExtension 0..0

Profile: MatchParametersOut
Parent: Bundle 
Id: IHE.PDQm.MatchParametersOut
Title: "PDQm Match Output Bundle Profile"
Description: """
The PDQm Match Output Bundle Profile describes the Bundle that SHALL be returned in response to an ITI-119 transaction.
This profile is consistent with the expections of the [Patient-match operation in FHIR core](http://hl7.org/fhir/R4/patient-operation-match.html),
except the Patient Resources SHALL be instances of the [PDQm Patient Profile](StructureDefinition-IHE.PDQm.Patient.html).

Since the response to the $match Operation contains only one parameter, the Bundle resource is returned directly rather
than inside of a Parameters resource. 
"""

* type = #searchset
* implicitRules 0..0

* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #closed
* entry ^slicing.description = "Bundle.entry SHOULD consist of only IHE.PDQm.Patient and OperationOutcome"
* entry ^slicing.ordered = false

* entry
  * request 0..0
  * response 0..0
* entry contains patient 0..*
* entry[patient]
  * resource only IHE.PDQm.Patient
  * resource 1..1
  * search 1..1
  * search
    * score 1..1
    * mode 1..1
    * mode = #match
    * extension contains http://hl7.org/fhir/StructureDefinition/match-grade named MatchGrade 1..1
* entry contains operationOutcome 0..*
* entry[operationOutcome]
  * resource only OperationOutcome
  * resource 1..1

Profile: PDQmMatchInput
Parent: Patient 
Id: IHE.PDQm.MatchInputPatient
Title: "PDQm Patient Profile for $match Input"
Description: """
The PDQm Patient Profile for $match Input SHALL be provided as input to the ITI-119 transaction. 
- While it is not REQUIRED that the input to $match be a valid FHIR instance, it is RECOMMENDED to supply as many elements as possible to facilitate matching.
- modifierExtension and implicitRules SHALL not be specified.
- The patient-mothersMaidenName extension is available to hold the mother's maiden name
"""

* modifierExtension 0..0
* implicitRules 0..0
* extension contains http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName named MothersMaidenName 0..1 


---

File: repos/IHE_SLASH_ITI.PDQm/input/fsh/PDQmPatient.fsh

Profile: PDQmPatient
Parent: Patient
Id: IHE.PDQm.Patient
Title: "PDQm Patient Profile"
Description: """
#### Overview

The PDQm Patient Profile establiashes the following base requirements:
- when any element in FHIR Core Patient are known, and when authorized to return the element, then all elements that are core to FHIR Patient SHOULD be returned
- forbids modifier extensions and implicit rules - so that all uses do not need to be concerned with changes to the meaning of the core elements of the Patient resource
- adds the `patient-mothersMaidenName` extension as an extension available to hold the mother's maiden name

#### Use of Business Identifiers

To facilitate working with and matching resources across specifications and servers, `Patient.identifier` is REQUIRED. Including business identifiers in `Patient.identifier` is important for
allowing the Patient resource to maintain identity outside of the context of the FHIR server on which it resides. 
This would be the case when the resource is copied to another server, saved to a file, migrated to a new FHIR server, etc.

`Patient.identifier` is typically populated with an identifier assigned by an assigning authority in the 
local patient identifier domain. Populating with identifiers issued by jurisdictional authorities, such as
the patient's national identifier, drivers license number, jurisdictional healthcare identifier, etc., is also 
typical when policy allows for those identifiers to be disclosed to the client system. 

When no existing business identifier exists, the Patient Demographics Supplier might construct one in one of the 
following ways:

**Option 1**:  Populate `Patient.identifier.value` with the full URL for the Patient resource as it would be accessed by
the client when doing a READ request. In this case, the corresponding value for `Patient.identifier.system`
SHALL be `urn:ietf:rfc:3986`.

**Option 2**:  Populate `Patient.identifier.value` with a [Universally Unique Identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier),
including the `urn:uuid:` prefix. In this case, the corresponding value for `Patient.identifier.system` 
SHALL be `urn:ietf:rfc:3986`. The UUID SHOULD be persisted within the FHIR resource so that subsequent accesses 
return the same identifier, but it is not REQUIRED in environments where doing so is not possible. 

#### Handling of Patient.link
When multiple Patient Resources are used to represent the same Patient, Patient.link SHALL be used to describe
the relationship between the resources. 

When returning Patient Resources, the Patient Demographics SHALL ensure that:
* No more that one Patient Resource referencing a Patient Identity contains `active=true`
* When returning multiple Patient Resources for the same Patient, `Patient.link` SHALL be used to describe the relationship between each Patient Resource
* When one Patient Resource has become subsumed by another, the subsumed Patient SHALL use `Patient.link` to point at the surviving Patinet Resource and `Patient.link.type` SHALL be `replaced-by`.

Patient Demographics Consumers SHOULD be able to traverse Patient.link and use Patient.active to determine if a given Patient is currently active in the system.
"""

* modifierExtension 0..0
* implicitRules 0..0
* identifier 1..*
  * system 1..1 
    * ^short = "Assigning Authority ID or other identifiation namespace" 
    * ^definition = "Establishes the namespace for the value - that is, a URL that describes a set values that are unique. If the identifier is issued by an Assigning Authority, then the system SHALL be set to the Assigning Authority ID in the format \"urn:oid:[AAID]\". If the identifier value is a URI then system SHALL be set to \"urn:ietf:rfc:3986\"."
  * value 1..1
* active MS
  * ^condition = iti-pdqm-linkstatus
* name obeys iti-pdqm-patname
* name MS
* telecom MS
* birthDate MS
* address MS
* link MS
  * ^condition = iti-pdqm-linkstatus
  * type
    * ^definition = "The type of link between this patient resource and another patient resource. When this Patient Resource has been subsumed by another, the type SHALL be replaced-by."
* extension contains http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName named MothersMaidenName 0..1 
* obeys iti-pdqm-linkstatus

Invariant:   iti-pdqm-patname
Description: "Either Patient.name.given and/or Patient.name.family and/or Patient.name.text SHALL be present or a Data Absent Reason Extension SHALL be present."
Expression:  "(family.exists() or given.exists() or text.exists()) xor extension.where(url='http://hl7.org/fhir/StructureDefinition/data-absent-reason').exists()"
Severity:    #error

Invariant:   iti-pdqm-linkstatus
Description: "If Patient.link is present, then Patient.active SHALL be present"
Expression:  "link.exists() implies active.exists()"
Severity:    #error
XPath:       "not(f:link) or f:active"

Profile:        QueryPatientResourceResponseMessage
Parent:         Bundle
Id:             IHE.PDQm.QueryPatientResourceResponseMessage
Title:          "PDQm Query Patient Resource Response message"
Description:    "A profile on the Query Patient Resource Response message for ITI-78"
* type = #searchset (exactly)
* total 1..
* entry ^slicing.discriminator[0].type = #profile
* entry ^slicing.discriminator[0].path = "resource"
* entry ^slicing.rules = #open
* entry.fullUrl 1..
* entry contains Patient 0..*
* entry[Patient] ^short = "Patient"
* entry[Patient].resource 1..
* entry[Patient].resource only PDQmPatient

---

File: repos/IHE_SLASH_ITI.PDQm/input/images-source/Implementing-PDQm-as-a-gateway.plantuml

@startuml Implementing-PDQm-as-a-gateway
hide footbox

Participant "PDQm Patient\nDemographics\nConsumer" as Client1
box "PDQm Proxy to PDQ Environment"
    Participant "PDQm Patient\n Demographics\nSupplier" as Server1
    Participant "PDQ Patient\n Demographics\nConsumer" as Client2
endbox
Participant "PDQ Patient\n Demographics\nSupplier" as Server2

Client1 -> Server1: Patient\nDemographics\nMatch [ITI-119]
activate Client1
activate Server1
Server1 --> Client2: Internal processing
activate Client2
activate Server2
Client2 -> Server2: Patient Demographics\nQuery [ITI-21]\nor Patient Demographics\nQuery for HL7v3 [ITI-47]
Client2 <- Server2: [ITI-21] or [ITI-47] Response
Server1 <-- Client2: Internal processing
deactivate Client2
deactivate Server2
Client1 <- Server1: [ITI-119] Response
deactivate Client2
deactivate Server1

@enduml


---

File: repos/IHE_SLASH_ITI.PDQm/input/images-source/ITI-119-seq.plantuml

@startuml ITI-119-seq
hide footbox

participant "Patient Demographics\nConsumer" as Client
participant "Patient Demographics\nSupplier" as Server

Client -> Server : Match Patient Resource
Server -> Client : Match Patient Resource Response

@enduml


---

File: repos/IHE_SLASH_ITI.PDQm/input/images-source/ITI-78-seq.plantuml

@startuml ITI-78-seq
hide footbox

participant "Patient Demographics\nConsumer" as Client
participant "Patient Demographics\nSupplier" as Server

== Query ==
activate Client
activate Server
Client -> Server : Query Patient Resource
Server -> Client : Query Patient Resource Response

== Retrieve ==
Client -> Server : Retrieve Patient Resource
Server -> Client : Retrieve Patient Resource Response
deactivate Server
deactivate Client

@enduml


---

File: repos/IHE_SLASH_ITI.PDQm/input/images-source/MPI-Based-Process-Flow-in-PDQm-Profile.plantuml

@startuml MPI-Based-Process-Flow-in-PDQm-Profile
hide footbox
skinparam ParticipantPadding 50
participant "Patient Demographics\nConsumer" as Client
participant "Patient Demographics\nSupplier" as Server

Client -> Server : Patient Demographics\nMatch [ITI-119]
activate Server
activate Client
Server -> Client : Patient Demographics\nMatch Response
deactivate Client
deactivate Server
@enduml


---

File: repos/IHE_SLASH_ITI.PDQm/input/images-source/PDQm-Actor-Diagram.plantuml

@startuml PDQm-Actor-Diagram
skinparam linetype ortho
skinparam ParticipantPadding 300

agent "Patient Demographics\nConsumer" as Client
agent "Patient Demographics\nSupplier" as Server
Client ---> Server  : "Mobile Patient\nDemographics\nQuery [ITI-78]"
Client -[hidden]->Server 
Client -[hidden]->Server 
Client -[hidden]->Server 
Client ---> Server  : "Patient\nDemographics\nMatch [ITI-119]"
@enduml

---

File: repos/IHE_SLASH_ITI.PDQm/input/images-source/Search-Process-Flow-in-PDQm-Profile.plantuml

@startuml Search-Process-Flow-in-PDQm-Profile
hide footbox
skinparam ParticipantPadding 50
participant "Patient Demographics\nConsumer" as Client
participant "Patient Demographics\nSupplier" as Server

Client -> Server : Mobile Patient Demographics\nQuery [ITI-78]
activate Server
activate Client
Server -> Client : Mobile Patient Demographics\nQuery Response
deactivate Client
deactivate Server
@enduml


---

File: repos/IHE_SLASH_ITI.PDQm/input/pagecontent/download.md


You can also download:

- [this entire guide](full-ig.zip),
- the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
- the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on [IHE GitHub](https://github.com/IHE/ITI.PDQm)

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}


---

File: repos/IHE_SLASH_ITI.PDQm/input/pagecontent/index.md

The Patient Demographics Query for Mobile (PDQm) Profile defines a lightweight RESTful interface to a patient demographics supplier leveraging technologies readily available to mobile applications and lightweight browser based applications.

<div markdown="1" class="stu-note">

| [Significant Changes, Open and Closed Issues](issues.html) |
{: .grid}

**[Search this IG](https://www.google.com/search?q=site%3Ahttps%3A%2F%2Fprofiles.ihe.net%2FITI%2FPDQm)**

</div>

### Organization of This Guide
This guide is organized into the following sections:

- Volume 1: Profiles
   - [PDQm Introduction](volume-1.html)
   - [PDQm Actors and Transactions](volume-1.html#1381-pdqm-actors-and-transactions)
   - [PDQm Actor Options](volume-1.html#1382-pdqm-actor-options)
   - [PDQm Required Groupings](volume-1.html#1383-pdqm-required-actor-grouping)
   - [PDQm Overview](volume-1.html#1384-pdqm-overview)
   - [PDQm Security Considerations](volume-1.html#1385-pdqm-security-considerations)
   - [PDQm Cross-Profile Considerations](volume-1.html#1386-pdqm-cross-profile-considerations)

- Volume 2: Transaction Detail
   - [Mobile Patient Demographics Query \[ITI-78\]](ITI-78.html)
   - [Patient Demographics Match \[ITI-119\]](ITI-119.html)

- Other
   - [Changes to Other IHE Specifications](other.html)
   - [Download and Analysis](download.html)
   - [Test Plan](testplan.html)   

See also the [Table of Contents](toc.html) and
the index of [Artifacts](artifacts.html) defined as part of this implementation guide.

### Conformance Expectations

IHE uses the normative words: "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" according to [standards conventions](https://profiles.ihe.net/GeneralIntro/ch-E.html).

PDQm uses ```Must Support``` in StructureDefinition profiles. This is equivalent to the IHE use of **R2** as defined in [Appendix Z](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.10-profiling-conventions-for-constraints-on-fhir).





---

File: repos/IHE_SLASH_ITI.PDQm/input/pagecontent/issues.md

<div markdown="1" class="stu-note">

## Significant Changes

### Revision 3.1.0

- Integration of CP-ITI-1314 fixing $match output Parameters profile

### Significant changes from PDQm, Rev 2.4:
- Changed to AuditEvent profiling leveraging [Basic Audit Log Patterns (BALP) Release 1.1.0](https://profiles.ihe.net/ITI/BALP/index.html).
  - Changes to RESTful type, and query subtype
- Introduced [ITI-119 Patient Demographics Match](ITI-119.html) as an alternative to [ITI-78 Mobile Patient Demographics Query](ITI-78.html).
- Added two new options on the Patient Demographics Consumer - Patient Search and Match Operation, corresponding to support for ITI-78 and ITI-119, respectively. The Patient Demographics Consumer MAY implement either or both of these options. 
- Added the Match Operation option, corresponding to ITI-119, to the Patient Demographics Supplier. The Patient Demographics Supplier MAY implement the Match Operation option but SHALL continue to support ITI-78.
- Updated the [PDQm Patient Profile](StructureDefinition-IHE.PDQm.Patient.html) to require the presence of Patient.identifier, marked demographics elements as MustSupport, and added guidance around the use of the Patient.link element. 
- Added requirements for which combinations of search parameters SHALL be supported by Patient Demographics consumers in section 2:3.78.4.1.2.1.1. 
  - Resolves [PDQm_issue_90](https://github.com/IHE/ITI.PDQm/issues/90).
- Added RECOMMENDED response patterns for handling deprecated patient identifies to sections 2:3.78.4.1.3 and 2:3.78.4.3.3. 
  - Resolves [PDQm_issue_86](https://github.com/IHE/ITI.PDQm/issues/86).
- Added Use Case #4 - Patient Demographics Query by Known Business Identifier.

### Significant changes from PDQm, Rev 2.2:
- FHIR Implementation Guide instead of [PDF - Rev. 2.2](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_PDQm_Rev2-2_TI_2020-08-28.pdf)
- Patient is now profiled to forbid modifier extensions
- AuditEvent is fully profiled using structureDefinition with examples

## Issues

### Submit an Issue

IHE welcomes [New Issues](https://github.com/IHE/ITI.PDQm/issues/new/choose) from the GitHub community. 
For those without GitHub access, issues can be submitted to the [Public Comment Form](https://www.ihe.net/ITI_Public_Comments/).

As issues are submitted they will be managed on the [PDQm GitHub Issues](https://github.com/IHE/ITI.PDQm/issues), where discussion and workarounds might be found. These issues, when critical, will be processed using the normal [IHE Change Proposal](https://wiki.ihe.net/index.php/Category:CPs) management and balloting. 
It is important to note that as soon as a Change Proposal is approved, it carries the same weight as a published Implementation Guide (i.e., it is testable at an [IHE Connectathon](https://www.ihe.net/participate/connectathon/) from the time it is approved, even if it will not be integrated until several months later).

### Open Issues
These issues were known as part of the publication, and IHE invites comments.

- PDQm_102: Normative vs Trial-Implementation - Currently the HL7 FHIR standard components used (e.g., Patient, Bundle, etc) in this profile are at Normative state. Some portions of PDQm are relying on STU content (such as query parameters, mothersMaidenName).
- PDQm_103: PDQm has a small volume 1 content. Thus breaking each H2 out into independent html files makes it harder to address. We might choose to do similar to PIXm and have just one volume 1 content with deep links.
- [PDQm_issue_66](https://github.com/IHE/ITI.PDQm/issues/66): PDQm has allowed clients to use GET or POST search, and thus mandated that servers MUST support both GET and POST. The previous versions of PDQm had only mentioned GET search, but we learned that FHIR core mandated POST and does not allow us to not also mandate it. This leaves regions that want to use only one of these verbs for search seemingly forced to support both verbs for search. The current discussion in FHIR core offers that "support" could include implementing a "policy" that forces an http 405 response. This seems to be a workable solution, and the alternative would not be much different than this anyway.
- [PDQm_issue_92](https://github.com/IHE/ITI.PDQm/issues/92): Currently we are mandating that Patient Demographics Suppliers support both ITI-78, with ITI-119 being OPTIONAL, while Patient Demographics Consumers have the option to choose to support either one or both transactions. Is requiring support for ITI-78 a problem for any Patient Demographics Suppliers?
- [PDQm_issue_101](https://github.com/IHE/ITI.PDQm/issues/101):  Currently the expected actions for ITI-78 and ITI-119 require that all Patient Resources returned by the Patient Demographics Supplier conform to the [PDQm Patient Profile](StructureDefinition-IHE.PDQm.Patient.html).
Are these requirements reasonable? While Patient Demographics Consumers SHOULD be robust in handling non-conformant Resources in the response, the intent of this requirement is to require that any Resources produced by the Patient Demographics Supplier are reasonably interoperable.
Furthermore, we have decided not to derive from IPA Patient at this time.
It is unclear if HL7 intends for IPA to generically cover all use cases for Patient data, or if IPA is limited to use cases of Patients accessing their own data. Discussion on this matter can be reviewed on [HL7's FHIR Zulip Chat](https://chat.fhir.org/#narrow/stream/261969-IPA/topic/demo.20apps/near/419011334).
- [PDQm_issue_112](https://github.com/IHE/ITI.PDQm/issues/112) The `onlyCertainMatches` parameter MAY be optionally set to `true` to indicate that the Patient Demographics Consumer would only like matches returned when they are certain to be matches for the subject of the request. 
The Patient Demographics Consumer might want to use `onlyCertainMatches` to prevent multiple Patient Resources from being returned in the response. This is often necessary in B2B cases where the Patient Demographics Consumer is operating in the background without a user confirming the Patient match. 
However, `onlyCertainMatches` does not guarantee that only a single Patient Resource will be returned. There might still be multiple results returned in the response when the same person has multiple records in the Patient Demographics Supplier. [FHIR-37361](https://jira.hl7.org/browse/FHIR-37361) and [FHIR-40880](https://jira.hl7.org/browse/FHIR-40880) request an additional parameter for specifying that matches SHOULD only be returned when there is exactly 1 certain match. 

When updating PDQm to a version of FHIR with FHIR-37361 and FHIR-40880 applied, the new parameter will need to be incorporated into the ITI-119 transaction. 

### Closed Issues
These issues have been decided and documented in the publication.

- Upgraded to FHIR R4.
- Case 4, where one or more identifier domains are indicated by the client but are not authoritative by the server, has been extensively discussed. The conclusion is to stay with allowing a server to return 404 or 200, and to require an OperationOutcome to indicate a warning. There is concern that the clients might not notice that they did not get results for a domain they requested, the client MUST take the initiative to look for the OperationOutcome to determine if they got full authoritative results. This looking for an OperationOutcome SHOULD always be inspected to assure results are what was expected. As such we did update client requirements to explicitly look for patient safety reasons.
- Removed the Pediatric Demographics Option as unnecessary and confusing. Most of the functionality needed for the use-case is natural part of the normal path of PDQm. The additional search parameters and extensions are allowed for those that need them. There has been little to no implementation of this option in the PDQ or PDQv3 environments. 
- [PDQm_issue_94](https://github.com/IHE/ITI.PDQm/issues/94): In PDQ, PDQv3, and PDQm ITI-78, we have the ability for the client to limit the search results to patients with an identifier issued by a particular patient identification domain. We do not have equivalent functionality in ITI-119. While a client could suggest that it is interested in a particular patient identification domain by including the assigning authority of that domain as an identifier system in the $match input parameters, the semantics of $match would not require the server to honor that request. We do not believe this is likely to be an issue for real world implementations of ITI-119. 

</div>


---

File: repos/IHE_SLASH_ITI.PDQm/input/pagecontent/ITI-119.md

This section corresponds to transaction [ITI-119] of the IHE Technical Framework. Transaction [ITI-119] is used by the Patient Demographics Consumer and Patient Demographics Supplier Actors that implement the Match Operation Option. The [ITI-119] transaction is used to query on patient identity information and get back resulting Patient resources.

### 2:3.119.1 Scope

This transaction is used by the Patient Demographics Consumer to request that the Patient Demographics Supplier identify patient records that match the demographics supplied in the request message. The request is received by the Patient Demographics Supplier. The Patient Demographics Supplier processes the request and returns a response in the form of demographics information for the matching patients.

### 2:3.119.2 Actors Roles

**Table 2:3.119.2-1: Actor Roles**

|Actor | Role |
|---|---|
| Patient Demographics Consumer | Requests a list of patients matching the supplied set of demographics criteria (example: ID or Name) from the Patient Demographics Supplier.|
| Patient Demographics Supplier | Returns demographic information for all patients matching the demographics criteria provided by the Patient Demographics Consumer. |
{:.grid}

### 2:3.119.3 Referenced Standards

- [HL7 FHIR Release 4]({{site.data.fhir.path}})

### 2:3.119.4 Messages

<div>
{%include ITI-119-seq.svg%}
</div>
<br clear="all">

**Figure 2:3.119.4-1: Interaction Diagram**

#### 2:3.119.4.1 Match Patient Resource Message
This message represents a request to invoke the FHIR's [operation $match on Patient]({{site.data.fhir.path}}patient-operation-match.html). It is sent from the Patient Demographics Consumer to the Patient Demographics Supplier. 

##### 2:3.119.4.1.1 Trigger Events
When a Patient Demographics Consumer needs the Patient Demographics Supplier to identify Patient records that match a known set of data, it issues the Match Patient Resource Message. 

##### 2:3.119.4.1.2 Message Semantics
The Patient Demographics Consumer invokes the [PDQm $Match Operation](OperationDefinition-PDQmMatch.html) on the Patient Demographics Supplier. The operation is invoked by submitting an HTTP POST request to the Patient Demographics Supplier at the path:

```
    [base]/Patient/$match
```

The HTTP Body SHALL consist of a FHIR Parameters Resource conforming to the [PDQm Match input Parameters Profile](StructureDefinition-IHE.PDQm.MatchParametersIn.html). 

- The `resource` parameter SHALL be set to a Patient Resource containing the demographic information for which the Patient Demographics Consumer desires a match. The Patient Resource SHALL conform to the [PDQm Patient Profile for $match Input](StructureDefinition-IHE.PDQm.MatchInputPatient.html).

- The `onlyCertainMatches` parameter MAY be optionally set to `true` to indicate that the Patient Demographics Consumer would only like matches returned when they are certain to be matches for the subject of the request. Note that there might still be multiple results returned in the response when the same person has multiple records in the Patient Demographics Supplier. 
[FHIR-37361](https://jira.hl7.org/browse/FHIR-37361) and [FHIR-40880](https://jira.hl7.org/browse/FHIR-40880) request an additional parameter for specifying that matches SHOULD only be returned when there is exactly 1 certain match. 
When `onlyCertainMatches` is set to `false`, then the Patient Demographics Supplier might return records representing multiple persons with each result graded accordingly. 

- The `count` parameter can be used to limit the number of results the Patient Demographics Supplier returns. The Patient Demographics Supplier SHALL return up to `count` results. Note that this might cause relevant results to be omitted from the response. In cases where there are multiple records for the same person, the use of `count` could cause even certain matches to be omitted from the response. 

When `onlyCertainMatches` and `count` are not used, the Patient Demographics Consumer MAY optionally submit the Patient Resource as the HTTP POST body without wrapping it in a Parameters Resource. Doing so is equivalent to submitting a Parameters resource containing the Patient resource in the `resource` parameter and no other parameters. 

###### 2:3.119.4.1.2.1 Providing Mother's Maiden Name
When the Patient Demographics Consumer wishes to provide the Patient's mother's maiden name as input to patient matching, it SHALL do so by including the [mothersMaidenName]({{site.data.fhir.path}}extension-patient-mothersmaidenname.html) extension on the Patient Resource supplied as input. 

###### 2:3.119.4.1.2.1 Populating Expected Response Format <a name="format"> </a>
The FHIR standard provides encodings for responses as either XML or JSON. Patient Demographics Suppliers SHALL support both message encodings, whilst Patient Demographics Consumers SHALL support one and MAY support both.
See [ITI TF-2: Appendix Z.6 for details](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format).

##### 2:3.119.4.1.3 Expected Actions
The Patient Demographics Supplier SHALL return demographic records that reflect the match to the Patient Resource provided by the Patient Demographics Consumer. The Patient Demographics Supplier SHALL respond with a [Match Patient Resource Response message](#match-response).

The response provided by the Patient Demographics Supplier to the Patient Demographics Consumer is a list of matching patients from the Patient Demographics Supplier’s information source. The mechanics of the matching algorithms used are internal to the Patient Demographics Supplier and are outside the scope of this framework.

The Patient Demographics Supplier SHALL support at least one patient identifier domain and MAY support multiple identifier domains. Query responses MAY return patient identifiers from one or multiple patient identifier domains.

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format handling. See [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for guidance for Access Denied.

The Patient Demographics Supplier SHALL respond to the query request as described by the following cases with a [Match Patient Resource Response message](#match-response), and SHALL behave according to the cases listed below:

**Case 1**: The Patient Demographics Consumer specified a Patient but did not specify the `onlyCertainMatches` or `count` parameters. The Patient Demographics Supplier finds exactly one patient record matching the criteria sent as a Patient Resource. [Example input](Parameters-ex-match-input-patient-only.html).

`HTTP 200` (OK) is returned as the HTTP status code.

A Resource Bundle is returned representing the result set. One `entry` is returned from the Patient Demographics Supplier for the Patient Resource found. The entry has a `search.score` populated with a value between 0 and 1 representing the match algorithm's score, and the [match-grade]({{site.data.fhir.path}}extension-match-grade.html) extension is supplied with the [appropriate code]({{site.data.fhir.path}}valueset-match-grade.html) to describe the match quality. [Example output](Bundle-ex-match-output.html).

**Case 2**:  The Patient Demographics Consumer specified a Patient but did not specify the `onlyCertainMatches` or `count` parameters. The Patient Demographics Supplier finds multiple (more than one) patient records matching the criteria sent as a Patient Resource. [Example input](Parameters-ex-match-input-patient-only.html).

`HTTP 200` (OK) is returned as the HTTP status code.

A Resource Bundle is returned representing the result set. One `entry` is returned from the Patient Demographics Supplier for each Patient Resource found. Each entry has a `search.score` populated with a value between 0 and 1 representing the match algorithm's score, and the [match-grade]({{site.data.fhir.path}}extension-match-grade.html) extension is supplied with the [appropriate code]({{site.data.fhir.path}}valueset-match-grade.html) to describe the match quality. The results are ordered from most likely to least likely. [Example output](Bundle-ex-match-output-multiple.html).

**Case 3**:  The Patient Demographics Consumer specified a Patient and `onlyCertainMatches` set to `true`. The Patient Demographics Supplier finds a patient record matching the criteria sent as a Patient Resource, and the `match-grade` is `certain`. [Example input](Parameters-ex-match-input-onlyCertainMatches.html).

`HTTP 200` (OK) is returned as the HTTP status code.

A Resource Bundle is returned representing the result set. One `entry` is returned from the Patient Demographics Supplier for the Patient Resource found. The entry has a `search.score` populated with a value between 0 and 1 representing the match algorithm's score, and the [match-grade]({{site.data.fhir.path}}extension-match-grade.html) extension is set to `certain` to indicate a certain match. [Example output](Bundle-ex-match-output.html).

**Case 4**:  The Patient Demographics Consumer specified a Patient and `onlyCertainMatches` set to `true`. The Patient Demographics Supplier finds exactly one patient record matching the criteria sent as a Patient Resource, but the match grade is not certain. [Example input](Parameters-ex-match-input-onlyCertainMatches.html).

`HTTP 200` (OK) is returned as the HTTP status code.

A Resource Bundle is returned representing the zero result set. No `entry` attributes are provided in the result.

**Case 5**:  The Patient Demographics Consumer specified a Patient and `onlyCertainMatches` set to `true`. The Patient Demographics Supplier finds multiple (more than one) patient records matching the criteria sent as a Patient Resource, and it cannot confirm that the multiple resources correspond to the same person.  

`HTTP 200` (OK) is returned as the HTTP status code.

A Resource Bundle is returned representing the zero result set. No `entry` attributes are provided in the result. [Example output](Bundle-ex-match-output-empty.html).

**Case 6**:  The Patient Demographics Consumer specified a Patient and a `count` parameter. The Patient Demographics Supplier finds multiple (more than one) patient records matching the criteria sent as a Patient Resource. [Example input](Parameters-ex-match-input-count.html).

`HTTP 200` (OK) is returned as the HTTP status code.

A Resource Bundle is returned representing the result set. One `entry` is returned from the Patient Demographics Supplier for each Patient Resource found. Each entry has a `search.score` populated with a value between 0 and 1 representing the match algorithm's score, and the [match-grade]({{site.data.fhir.path}}extension-match-grade.html) extension is supplied with the [appropriate code]({{site.data.fhir.path}}valueset-match-grade.html) to describe the match quality. The results are ordered from most likely to least likely, and results beyond `count` are omitted from the result set. [Example output](Bundle-ex-match-output.html).

**Case 7**: The Patient Demographics Supplier fails to find in its information source, any patient record matching the criteria sent as a Patient Resource. [Example input](Parameters-ex-match-input-patient-only.html).

`HTTP 200` (OK) is returned as the HTTP status code.

A Resource Bundle is returned representing the zero result set. No Patient Resources are provided in the result. The Patient Demographics supplier MAY return one or more OperationOutcome Resources providing more details on the outcome of the operation, but any OperationOutcome Resources returned do not have `error` or `fatal` severity. [Example output](Bundle-ex-match-output-empty.html).

**Case 8**: The Patient Demographics Supplier finds a deprecated Patient record that matches the query parameters. In this case, it SHALL return `HTTP 200` (OK), and a Resource Bundle with one of the following properties:

- The returned Resource Bundle contains the Patient, which has the `active` element set to `false`.

- The returned Resource Bundle does not include the deprecated Patient record. It MAY contain other records that match the search, or it MAY be empty.

The option chosen by the Patient Demographics Supplier is based on policy. 

**Case 9**:  One or more issues were encountered during the request. 

An appropriate HTTP failure code is returned as the status code by following the expectations of a [FHIR Operation Response]({{site.data.fhir.path}}operations.html#response). 

Either a single OperationOutcome or a Resource Bundle of OperationOutcome Resources is returned describing the nature of the issue. [Example OperationOutcome](OperationOutcome-ex-match-failure.html), [Example Bundle](Bundle-ex-match-output-error.html).

**Case 10**:  The Patient Demographics Supplier finds a patient record matching the criteria sent as a Patient Resource, but some warnings are produced during the operation. 

`HTTP 200` (OK) is returned as the HTTP status code.

A Resource Bundle is returned representing the result set. One `entry` is returned from the Patient Demographics Supplier for the Patient Resource found. The entry has a `search.score` populated with a value between 0 and 1 representing the match algorithm's score, and the [match-grade]({{site.data.fhir.path}}extension-match-grade.html) extension is supplied with the [appropriate code]({{site.data.fhir.path}}valueset-match-grade.html) to describe the match quality. In addition, one or more OperationOutcome resources are returned to describe the warnings. [Example output](Bundle-ex-match-output-warning.html). 
OperationOutcome Resources returned do not have `error` or `fatal` severity. [Example output](Bundle-ex-match-output-empty.html).

#### 2:3.119.4.2 Match Patient Resource Response Message<a name="match-response"> </a>

##### 2:3.119.4.2.1 Trigger Events

The Patient Demographics Supplier has results or errors to report to the Patient Demographics Consumer. This MAY include finding zero or more patient demographics matching the input parameters specified by the Patient Demographics Consumer as a result of a Match Patient Resource Request. This MAY include errors or Access Denied.

##### 2:3.119.4.2.2 Message Semantics

The Match Patient Resource Response conforms to the [PDQm Match Output Bundle Profile](StructureDefinition-IHE.PDQm.MatchParametersOut.html) and is sent from the Patient Demographics Supplier to the Patient Demographics Consumer as a Bundle of Patient Resources. The `content-type` of the response will depend upon the requested response format indicated by the Patient Demographics Consumer.

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format handling. See [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for guidance for Access Denied.

###### 2:3.119.4.2.2.1 Patient Resource Definition in the Context of Match Patient Resource Response 

The Patient Resource(s) contained within the Query Patient Resource Response message SHOULD conform to [Patient Profile for PDQm](StructureDefinition-IHE.PDQm.Patient.html).

###### 2:3.119.4.2.2.2 Mother’s Maiden Name
Patient Demographics Suppliers SHALL include the mother’s maiden name, if known, in this extension: [{{site.data.fhir.path}}extension-patient-mothersmaidenname.html]({{site.data.fhir.path}}extension-patient-mothersmaidenname.html).

###### 2:3.119.4.2.2.3 Resource Bundling
Please see [ITI TF-2: Appendix Z.1](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.1-resource-bundles) for details on the IHE guidelines for implementing FHIR bundles.

###### 2:3.119.4.2.2.4 Quality of Match
The Patient Demographics Supplier SHALL convey the quality of each match based on strength of the particular result to the supplied Patient Resource. The mechanism for determining the confidence of match is considered a product specific feature and is not specified in this transaction. When doing so, it SHALL represent the confidence of a particular match within the bundle as a score attribute. See FHIR Relevance section [{{site.data.fhir.path}}search.html#score]({{site.data.fhir.path}}search.html#score). In addition, the Patient Demographics Supplier SHALL include in each Patient Bundle entry the [match-grade]({{site.data.fhir.path}}extension-match-grade.html) extension with the [appropriate code]({{site.data.fhir.path}}valueset-match-grade.html) to describe the match quality. 

##### 2:3.119.4.2.3 Expected Actions

The Patient Demographics Consumer SHALL process the response in some manner specific to its application function (for example: displaying on a user interface). This application behavior is not specified by IHE.

The constraints specified in Section [3.119.4.2.2](#23119422-message-semantics) represent the minimum set of demographics information that MUST be implemented by a Patient Demographics Supplier. This does not prevent the Patient Demographics Supplier from sending additional FHIR attributes in a response; such as extensions, text, etc. The Patient Demographics Consumer SHALL ignore additional attributes and extensions if not understood.

### 2:3.119.5 Security Considerations
See the general Security Consideration in [ITI TF-1: 38.5](volume-1.html#1385-pdqm-security-considerations).

#### 2:3.119.5.1 Security Audit Considerations

The Patient Demographics Match Transaction is a Query Information event as defined in [Table 3.20.4.1.1.1-1](https://profiles.ihe.net/ITI/TF/Volume2/ITI-20.html#3.20.4.1.1.1). The actors involved SHALL record audit events according to the following:

##### 2:3.119.5.1.1 Patient Demographics Consumer Audit

The Patient Demographics Consumer when grouped with [ATNA Secure Node or Secure Application](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Actor SHALL be able to record an audit event consistent with the [Patient Demographics Consumer AuditEvent](StructureDefinition-IHE.PDQm.Match.Audit.Consumer.html). [Audit Example for a PDQm Match transaction from consumer perspective](AuditEvent-ex-auditPdqmMatch-consumer.html).

##### 2:3.119.5.1.2 Patient Demographics Supplier Audit

The Patient Demographics Supplier when grouped with [ATNA Secure Node or Secure Application](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Actor SHALL be able to record an audit consistent with the [Patient Demographics Supplier AuditEvent](StructureDefinition-IHE.PDQm.Match.Audit.Supplier.html). [Audit Example for a PDQm Match transaction from supplier perspective](AuditEvent-ex-auditPdqmMatch-supplier.html).

#### 2:3.119.5.2 Use with the Internet User Authorization (IUA) Profile  
The [Internet User Authorization (IUA)](https://profiles.ihe.net/ITI/IUA/index.html) Profile provides support for user authentication, app authentication, and authorization decisions. When PDQm actors are grouped with IUA actors there are additional security and privacy functionality enabled by this grouping. There are additional requirements and functionality enabled through scope definitions that are transaction-specific.

A Patient Demographics Consumer, when grouped with an [IUA](https://profiles.ihe.net/ITI/IUA/index.html) Authorization Client, SHALL use [Get Access Token \[ITI-71\]](https://profiles.ihe.net/ITI/IUA/index.html#volume-2----transactions) to request the following scope from the IUA Authorization Server. This enables the Patient Demographics Consumer to get corresponding identifiers with the Patient Demographics Match [ITI-119] transaction with the authorizing token in the combined transaction Incorporate Access Token [ITI-72].

The Patient Demographics Supplier, when grouped with an [IUA](https://profiles.ihe.net/ITI/IUA/index.html) Resource Server, SHALL require [Incorporate Access Token \[ITI-72\]](https://profiles.ihe.net/ITI/IUA/index.html#volume-2----transactions) in all Patient Demographics Match [ITI-119] transactions, SHALL enforce the authorization decision in the token, and MAY further enforce policies beyond those made by the Authorization Server such as consent or business rules.

```
scope: ITI-119
```

This scope request authorizes the full [ITI-119] transaction. This scope implicitly requests patient-specific queries for getting corresponding demographics. Further scope refinement is allowed in realm or project-specific situations; these scopes would be in addition to the scope defined here.


---

File: repos/IHE_SLASH_ITI.PDQm/input/pagecontent/ITI-78.md

This section corresponds to transaction [ITI-78] of the IHE Technical Framework. Transaction [ITI-78] is used by the Patient Demographics Supplier Actors and Patient Demographics Consumer Actors that support the Patient Search Option. The [ITI-78] transaction is used to query on patient identity information and get back resulting Patient resources.

Note:  Examples on this page use either the HTTP or HTTPS scheme. Examples are for illustrative purposes only and are not intended to imply that either HTTP or HTTPS should be used, though the use of HTTPS is RECOMMENDED for production deployments. 

### 2:3.78.1 Scope

This transaction is used by the Patient Demographics Consumer to solicit information about patients whose demographics data match data provided in the search parameters on the request message. The request is received by the Patient Demographics Supplier. The Patient Demographics Supplier processes the request and returns a response in the form of demographics information for the matching patients.

### 2:3.78.2 Actors Roles

**Table 2:3.78.2-1: Actor Roles**

|Actor | Role |
|---|---|
| Patient Demographics Consumer | Requests a list of patients matching the supplied set of demographics criteria (example: ID or Name) from the Patient Demographics Supplier.|
| Patient Demographics Supplier | Returns demographic information for all patients matching the demographics criteria provided by the Patient Demographics Consumer |
{:.grid}

### 2:3.78.3 Referenced Standards

- [HL7 FHIR Release 4]({{site.data.fhir.path}})

### 2:3.78.4 Messages

<div>
{%include ITI-78-seq.svg%}
</div>
<br clear="all">

**Figure 2:3.78.4-1: Interaction Diagram**

#### 2:3.78.4.1 Query Patient Resource message
This message represents a parameterized search from the Patient Demographics Consumer to the Patient Demographics Supplier.

##### 2:3.78.4.1.1 Trigger Events
When a Patient Demographics Consumer needs to select a patient based on demographic information about patients whose information matches a minimal set of known data, it issues a Query Patient Resource.
##### 2:3.78.4.1.2 Message Semantics
The request message is a standard [FHIR Search]({{site.data.fhir.path}}search.html) request.
The Patient Demographics Consumer MAY use GET or POST based searches, and the Patient Demographics Supplier SHALL support both GET and POST based searches.
This operation can be invoked at the following path:

```
    [base]/Patient?<parameters>
```

###### 2:3.78.4.1.2.1 Search Parameters
The Patient Demographics Consumer MAY supply, and the Patient Demographics Supplier SHALL be capable of processing all parameters listed below. All parameter values SHALL be appropriately encoded per [RFC3986](https://tools.ietf.org/html/rfc3986) "percent" encoding rules. Note that percent encoding does restrict the character set to a subset of ASCII characters which is used for encoding all other characters used in the URL.
Patient Demographics Suppliers MAY choose to support additional parameters beyond the subset listed below. Any additional parameters supported SHALL be supported according to the core FHIR specification. Such additional parameters are considered out of scope for this transaction. Any additional parameters not supported SHOULD be ignored, See [{{site.data.fhir.path}}search.html#errors]({{site.data.fhir.path}}search.html#errors).

FHIR defines methods of supporting multiple parameter values in an AND and OR relationship. The Patient Demographics Supplier SHALL support both AND and OR relationships. See FHIR specification on Composite Search Parameters [{{site.data.fhir.path}}search.html#combining]({{site.data.fhir.path}}search.html#combining) for more information on how to handle multiple parameter values.

Parameter | definitions
---|---
`_id` |This parameter of type string, when supplied, represents the resource identifier for the Patient Resource being queried. See [ITI TF-2: Appendix Z.2.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for use of the `string` data type. Note: A search using `_id` is always an exact match search.
`active` | This parameter of type `token`, when supplied, specifies the active state. The active state indicates whether the patient record is active. Note: use `active=true`.
`family` and `given` | These parameters of type `string`, when supplied, specify the name of the person whose information is being queried. For this parameter the Patient Demographics Consumer MAY use either family name, given name or a combination of both names to filter by family, given or family and given names respectively. See [ITI TF-2: Appendix Z.2.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for use of the `string` data type.
`identifier` | This repeating parameter of type `token`, when supplied, specifies an identifier associated with the patient whose information is being queried (e.g., a local identifier, account identifier, etc.). See [ITI TF-2: Appendix Z.2.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for use of the `token` data type. 
`telecom` | This parameter of type `token`, when supplied, specifies the telecommunications details.
`birthdate` | This parameter of type `date`, when supplied, specifies the birth date of the person whose information is being queried. See [{{site.data.fhir.path}}search.html#date]({{site.data.fhir.path}}search.html#date) for guidance and pitfalls when working with date search parameters.
`address` | This parameter of type `string`, when supplied, specifies one or more address parts associated with the person whose information is being queried. For details on matching rules, see [ITI TF-2: Appendix Z.2.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters).
`address-city`,<br /> `address-country`,<br /> `address-postalcode`,<br /> `address-state` | These parameters of type `string`, when supplied, specify a match against the specified address part associated with the person whose information is being queried. Note that national conventions for addresses might affect utility of these fields.
`gender` | This parameter of type `token`, when supplied, specifies the administrative gender of the person whose information is being queried. For this parameter item, a single administrative gender code from value set {{site.data.fhir.path}}valueset-administrative-gender.html SHALL be specified as the only value of the token. See [ITI TF-2: Appendix Z.2.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for use of the `token` data type.
`mothersMaidenName` | This parameter of type `string`, when supplied, specifies the mother's maiden (unmarried) name, commonly collected to help verify patient identity. This is search extension defined in FHIR<br />Expression: Patient.extension(`http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName`).
{:.grid}

For example 
```
GET https://server.example.com/fhir/Patient?family=MOHR&given=ALICE&active=true&gender=female
Accept: application/fhir+json; fhirVersion=4.0
```

###### 2:3.78.4.1.2.1.1 Combinations of search parameters
While the above search parameters SHALL all be supported individually, support for combinations of parameters is needed for effective searching. The Patient Demographics Supplier SHALL support filtering on the following combinations of search parameters:

- `family` and `gender`
- `birthdate` and `family`

The Patient Demographics Supplier MAY support additional combinations of parameters. When the Patient Demographics Consumer specifies a set of search parameters that, in combination, are not supported by the Patient Demographics Supplier, the Patient Demographics Supplier SHALL choose which parameters to respect, and indicate this fact in the response message Bundle self link, according to [Section 3.1.1.6 of the FHIR specification]({{site.data.fhir.path}}search.html).

###### 2:3.78.4.1.2.2 Parameter Modifiers
Patient Demographics Suppliers SHALL support the `:exact` parameter modifier on all search parameters of type string. When supplied by the Patient Demographics Consumer, the `:exact` parameter modifier instructs the Patient Demographics Supplier that exact matching SHOULD be performed.
The Patient Demographics Consumer SHOULD NOT use, and Patient Demographics Supplier MAY ignore, any additional parameter modifiers listed in the FHIR standard, which are considered out of scope in the context of this transaction.

###### 2:3.78.4.1.2.3 Populating Which Domains are Returned <a name="domainpop"> </a>
The Patient Demographics Consumer MAY constrain the domains from which patient identifiers are returned from the Patient Demographics Supplier in the resulting bundle. The Patient Demographics Consumer SHALL convey this by specifying the patient identity domains in the system component of repeating `identifier` parameters using the [OR format]({{site.data.fhir.path}}search.html#combining) (example of using `,` in a request for identifier domain `1.2.3` *OR* `4.5.6`):

    &identifier=urn:oid:1.2.3|,urn:oid:4.5.6|

For example, a Patient Demographics Consumer wishing to filter for patients with a last name of SMITH having identifiers from an identity domain with OID 1.2.3.4.5 would convey this search using the [AND format]({{site.data.fhir.path}}search.html#combining) as (example of requesting a family name of SMITH *AND* in the identifier domain 1.2.3.4.5):

	  ?family=SMITH&identifier=urn:oid:1.2.3.4.5|

The Patient Demographics Consumer SHALL populate the patient identity domain portion of the token with values described in [ITI TF-2: Appendix E](https://profiles.ihe.net/ITI/TF/Volume2/ch-E.html).

###### 2:3.78.4.1.2.4 Populating Expected Response Format <a name="format"> </a>
The FHIR standard provides encodings for responses as either XML or JSON. Patient Demographics Suppliers SHALL support both message encodings, whilst Patient Demographics Consumers SHALL support one and MAY support both.
See [ITI TF-2: Appendix Z.6 for details](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format).

##### 2:3.78.4.1.3 Expected Actions
The Patient Demographics Supplier SHALL return demographic records that reflect the match to all of the search criteria provided by the Patient Demographics Consumer. The Patient Demographics Supplier SHALL respond with a [Query Patient Resource Response message](#query-response).

The Patient Demographics Supplier SHALL return all exact matches to the search parameters sent by the Patient Demographics Consumer; IHE does not further specify matching requirements. Additional details for handling query parameters are described in [ITI TF-2: Appendix Z.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters).

The response provided by the Patient Demographics Supplier to the Patient Demographics Consumer is a list of matching patients from the Patient Demographics Supplier’s information source. The mechanics of the matching algorithms used are internal to the Patient Demographics Supplier and are outside the scope of this framework.

The Patient Demographics Supplier SHALL support at least one patient identifier domain and MAY support multiple identifier domains. Section [3.78.4.1.2.4](#domainpop) describes how the Patient Demographics Consumer MAY filter results based on identifiers from one or more patient identifier domains. Query responses MAY return patient identifiers from one or multiple patient identifier domains.

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format handling. See [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for guidance for Access Denied.

The Patient Demographics Supplier SHALL respond to the query request as described by the following cases with a [Query Patient Resource Response message](#query-response), and SHALL behave according to the cases listed below:

**Case 1**: The Patient Demographics Supplier finds at least one patient record matching the criteria sent as HTTP search parameters. No patient identifier domains are requested via the mechanism specified as specified in Section [3.78.4.1.2.4](#domainpop).

`HTTP 200` (OK) is returned as the HTTP status code.

A Resource Bundle is returned representing the result set. The Patient Demographics Supplier populates the `total` property of the bundle with the total number of matching results. One `entry` is returned from the Patient Demographics Supplier for each Patient Resource found.

**Case 2**: The Patient Demographics Supplier finds at least one patient record matching the criteria sent in the search parameters. One or more patient identifier domains are requested via the mechanism specified in Section [3.78.4.1.2.4](#domainpop), and Patient Demographics Supplier recognizes all domains.

`HTTP 200` (OK) is returned as the HTTP status code.

The Patient Demographics Supplier performs its matching and returns a bundle as described in Case 1. The Patient Demographics Supplier eliminates identifiers from the result set which do not exist in the list specified per Section [3.78.4.1.2.4](#domainpop) (domains to be returned). 

**Case 3**: The Patient Demographics Supplier fails to find in its information source, any patient record matching the criteria sent as HTTP search parameters.

`HTTP 200` (OK) is returned as the HTTP status code.

A Resource Bundle is returned representing the zero result set. The Patient Demographics Supplier populates the total with a value of 0 indicating no results were found. No `entry` attributes are provided in the result.

**Case 4**: The Patient Demographics Supplier is not an authority for one or more of the domains specified per Section [3.78.4.1.2.4](#domainpop).

There are two acceptable responses. The preferred response is a `HTTP 404` to indicate that the domain is not recognized, but it is acceptable to respond with a `HTTP 200` with the results available (0..*).

An OperationOutcome Resource is returned indicating that the patient identity domain is not recognized in an `issue` having:

Attribute|Value
---|---
severity|warning
code|not-found
diagnostics|"targetSystem not found"
{:.grid}

The OperationOutcome Resource MAY indicate the search parameter used and the domain in error within the `diagnostics` attribute. See FHIR discussion of search error handling [{{site.data.fhir.path}}search.html#errors]({{site.data.fhir.path}}search.html#errors).

**Case 5**: The Patient Demographics Supplier is not capable of producing a response in the requested format specified by _format parameter (specified in Section [3.78.4.1.2.5](#format)).

`HTTP 406` (Not Acceptable) is returned as the HTTP status code.

An OperationOutcome Resource is returned indicating that the requested response format is not supported in an issue having:

Attribute|Value
---|---
severity|error
code|not-supported
{:.grid}


The Patient Demographics Supplier MAY be capable of servicing requests for response formats not listed in Section [3.78.4.1.2.5](#format), but SHALL, at minimum, be capable of producing XML and JSON encodings.

**Case 6**: The Patient Demographics Supplier finds a deprecated Patient record that matches the query parameters. In this case, it SHALL return `HTTP 200` (OK), and a Resource Bundle with one of the following properties:

- The returned Resource Bundle contains the Patient, which has the `active` element set to `false`.

- The returned Resource Bundle does not include the deprecated Patient record. It MAY contain other records that match the search, or it MAY be empty. 

- The returned Resource Bundle contains the Patient, which has the `active` element set to `false` and the `link` element points at another Patient with `link.type` set to `replaced-by`. The linked Patient is also included in the Bundle. This indicates that the deprecated Patient is deprecated because it has been merged into the linked Patient. 

The option chosen by the Patient Demographics Supplier is based on policy. 

The Patient Demographics Supplier MAY return other HTTP status codes to represent specific error conditions. When HTTP error status codes are returned by the Patient Demographics Supplier, they SHALL conform to the HTTP standard [RFC2616](https://tools.ietf.org/html/rfc2616). Their use is not further constrained or specified by this transaction.


#### 2:3.78.4.2 Query Patient Resource Response message <a name="query-response"> </a>


##### 2:3.78.4.2.1 Trigger Events

The Patient Demographics Supplier has results or error to report to the Patient Demographics Consumer. This MAY include finding zero or more patient demographics matching the search parameters specified by the Patient Demographics Consumer as a result of a Query Patient Resource Request. This MAY include errors or Access Denied.

##### 2:3.78.4.2.2 Message Semantics

The Query Patient Resource Response is sent from the Patient Demographics Supplier to the Patient Demographics Consumer as a Bundle of Patient Resources. The "content-type" of the response will depend upon the requested response format indicated by the Patient Demographics Consumer.

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format handling. See [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for guidance for Access Denied.

###### 2:3.78.4.2.2.1 Patient Resource Definition in the Context of Query Patient Resource Response 

The Patient Resource(s) contained within the Query Patient Resource Response message SHOULD conform to [Patient Profile for PDQm](StructureDefinition-IHE.PDQm.Patient.html).

###### 2:3.78.4.2.2.2 Mother’s Maiden Name <a name="mmn"> </a>
Patient Demographics Suppliers SHALL include the mother’s maiden name, if known, in this extension: [{{site.data.fhir.path}}extension-patient-mothersmaidenname.html]({{site.data.fhir.path}}extension-patient-mothersmaidenname.html).

###### 2:3.78.4.2.2.3 Resource Bundling
Please see [ITI TF-2: Appendix Z.1](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.1-resource-bundles) for details on the IHE guidelines for implementing FHIR bundles.

###### 2:3.78.4.2.2.4 Incremental Response Processing - Paging of Resource Bundle
The Patient Demographics Supplier SHALL represent these incremental responses as specified in [FHIR Paging]({{site.data.fhir.path}}http.html#paging).

###### 2:3.78.4.2.2.5 Quality of Match
The Patient Demographics Supplier MAY convey the quality of each match based on strength of the particular result to the supplied search parameters. The mechanism for determining the confidence of match is considered a product specific feature and is not specified in this transaction.

If the Patient Demographics Supplier wishes to convey the quality of match, it SHALL represent the confidence of a particular match within the bundle as a score attribute. See FHIR Relevance section [{{site.data.fhir.path}}search.html#score]({{site.data.fhir.path}}search.html#score).


##### 2:3.78.4.2.3 Expected Actions

The Patient Demographics Consumer SHALL process the response in some manner specific to its application function (for example: displaying on a user interface). This application behavior is not specified by IHE.

The constraints specified in Section [3.78.4.2.2](#2378422-message-semantics) represent the minimum set of demographics information that MUST be implemented by a Patient Demographics Supplier. This does not prevent the Patient Demographics Supplier from sending additional FHIR attributes in a response; such as extensions, text, etc. The Patient Demographics Consumer SHALL ignore additional attributes and extensions if not understood.

The Patient Demographics Consumer SHOULD be robust as the response MAY contain Patient Resources that match the search parameters but are not compliant with the PDQm constraints defined in [Patient Profile for PDQm](StructureDefinition-IHE.PDQm.Patient.html).

The Patient Demographics Consumer SHOULD follow the [Safety Guidelines for Client Search]({{site.data.fhir.path}}safety.html#search).

#### 2:3.78.4.3 Retrieve Patient Resource message
This message represents an HTTP GET from the Patient Demographics Consumer to the Patient Demographics Supplier and provides a mechanism for retrieving a single Patient Resource with a known resource identifier.

##### 2:3.78.4.3.1 Trigger Events
When the Patient Demographics Consumer possesses a Patient Resource’s identifier (either through query, database lookup, or other mechanism) for which it requires additional or new information, it issues a Retrieve Patient Resource interaction.

##### 2:3.78.4.3.2  Message Semantics
This message is an invocation of the [FHIR Read interaction]({{site.data.fhir.path}}http.html#read). The Retrieve Patient Resource is conducted by executing an HTTP GET against the Patient Demographics Supplier’s Patient Resource URL, providing the resource id of the patient being retrieved. The target is formatted as:

```
GET [base]/Patient/[resourceId]
```

The Patient Demographics Supplier SHALL respond to this query by sending a single Patient Resource instance.

The `resourceId` included in the request always represents the unique identifier for the Resource within the scope of the URL. For example, while `http://example1.org/ihe/Patient/1` and `http://example2.com/ihe/Patient/1` both contain the same `[resourceId]`, they reference two different resource instances.

##### 2:3.78.4.3.3 Expected Actions
The Patient Demographics Supplier SHALL retrieve the demographic record indicated by the Resource identifier on the HTTP GET supplied by the Patient Demographics Consumer. The Patient Demographics Supplier SHALL respond to the retrieve request as described by the following cases:

**Case 1**: The Patient Demographics Supplier finds the patient demographics record matching the `resourceId` sent in the HTTP request.

`HTTP 200` (OK) is returned as the HTTP status code.

A Patient Resource is returned representing the result.

**Case 2**: The Patient Demographics Supplier fails to find the patient demographics record matching the `resourceId` sent in the HTTP request.

`HTTP 404` (Not Found) is returned as the HTTP status code

An `OperationOutcome` Resource is returned indicating that the Patient Resource could not be found, in an issue having:

Attribute|Value
---|---
severity|error
code|not-found
{:.grid}

**Case 3**: The Patient Demographics Supplier finds the patient demographics record matching the `resourceId` sent in the HTTP request, and the record is deprecated. 

In this case, the Patient Demographics Supplier MAY either:

- Return `HTTP 200` (OK) as in Case 1, with the `active` flag set to `false`, or
- Return `HTTP 404` (Not Found) as in Case 2.


The Patient Demographics Supplier MAY return other HTTP status codes to represent specific error conditions. When HTTP error status codes are returned by the Patient Demographics Supplier, they SHALL conform to the HTTP standard [RFC2616](https://tools.ietf.org/html/rfc2616). Their use is not further constrained or specified by this transaction.

#### 2:3.78.4.4 Retrieve Patient Resource Response message

The Patient Demographics Supplier’s response to a successful Retrieve Patient Resource message SHALL be an `HTTP 200` (OK) Status code with a Patient Resource, or an appropriate error code.

##### 2:3.78.4.4.1 Trigger Events
The Patient Demographics Supplier found patient demographic record matching the Resource identifier specified by the Patient Demographics Consumer.

##### 2:3.78.4.4.2 Message Semantics
The Retrieve Patient Resource response is sent from the Patient Demographics Supplier to the Patient Demographics Consumer as a single Patient Resource. 

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format handling. See [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for guidance for Access Denied.

If the Patient Demographics Supplier is unable to produce a response in the requested format, it SHALL respond with an `HTTP 400` error indicating that it was unable to fulfill the request. The Patient Demographics Supplier MAY be capable of servicing requests for response formats not listed, but SHALL, at minimum, be capable of producing XML and JSON encodings.

###### 2:3.78.4.4.2.1 Patient Resource Definition in the Context of Retrieve Patient Resource Response
The Patient Resource definition in the context of a retrieve interaction is the FHIR definition of the Patient Resource, see [{{site.data.fhir.path}}patient.html]({{site.data.fhir.path}}patient.html).

### 2:3.78.5 Security Considerations
See the general Security Consideration in [ITI TF-1: 38.5](volume-1.html#1385-pdqm-security-considerations).

#### 2:3.78.5.1 Security Audit Considerations

The Mobile Patient Demographics Query Transaction is a Query Information event as defined in [Table 3.20.4.1.1.1-1](https://profiles.ihe.net/ITI/TF/Volume2/ITI-20.html#3.20.4.1.1.1). The actors involved SHALL record audit events according to the following:

##### 2:3.78.5.1.1 Patient Demographics Consumer Audit

The Patient Demographics Consumer when grouped with [ATNA Secure Node or Secure Application](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Actor SHALL be able to record a [Patient Demographics Consumer AuditEvent](StructureDefinition-IHE.PDQm.Query.Audit.Consumer.html). [Audit Example for a PDQm Query transaction from consumer perspective](AuditEvent-ex-auditPdqmQuery-consumer.html).

##### 2:3.78.5.1.2 Patient Demographics Supplier Audit

The Patient Demographics Supplier when grouped with [ATNA Secure Node or Secure Application](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Actor SHALL be able to record a [Patient Demographics Supplier AuditEvent](StructureDefinition-IHE.PDQm.Query.Audit.Supplier.html). [Audit Example for a PDQm Query transaction from supplier perspective](AuditEvent-ex-auditPdqmQuery-supplier.html).

#### 2:3.78.5.2 Use with the Internet User Authorization (IUA) Profile  
The [Internet User Authorization (IUA)](https://profiles.ihe.net/ITI/IUA/index.html) Profile provides support for user authentication, app authentication, and authorization decisions. When PDQm actors are grouped with IUA actors there are additional security and privacy functionality enabled by this grouping. There are additional requirements and functionality enabled through scope definitions that are transaction-specific.

A Patient Demographics Consumer, when grouped with an [IUA](https://profiles.ihe.net/ITI/IUA/index.html) Authorization Client, SHALL use [Get Access Token \[ITI-71\]](https://profiles.ihe.net/ITI/IUA/index.html#volume-2----transactions) to request the following scope from the IUA Authorization Server. This enables the Patient Demographics Consumer to get corresponding identifiers with the Mobile Patient Demographics Query [ITI-78] transaction with the authorizing token in the combined transaction Incorporate Access Token [ITI-72].

The Patient Demographics Supplier, when grouped with an [IUA](https://profiles.ihe.net/ITI/IUA/index.html) Resource Server, SHALL require [Incorporate Access Token \[ITI-72\]](https://profiles.ihe.net/ITI/IUA/index.html#volume-2----transactions) in all Mobile Patient Demographics Query [ITI-78] transactions, SHALL enforce the authorization decision in the token, and MAY further enforce policies beyond those made by the Authorization Server such as consent or business rules.

```
scope: ITI-78
```

This scope request authorizes the full [ITI-78] transaction. This scope implicitly requests patient-specific queries for getting corresponding demographics. Further scope refinement is allowed in realm or project-specific situations; these scopes would be in addition to the scope defined here.


---

File: repos/IHE_SLASH_ITI.PDQm/input/pagecontent/other.md

<div markdown="1" class="stu-note">
This section contains modifications to other IHE publications and profiles and is not a part of the PDQm Profile. The content here will be incorporated into the target narrative at a future time, usually when PDQm goes final text.
</div>

## IHE Technical Frameworks General Introduction Appendix A – Actor Summary Definitions

|------------------------------------------------|
| Editor, add the following new or modified actors to the [IHE Technical Frameworks General Introduction Appendix A](https://profiles.ihe.net/GeneralIntro/ch-A.html): |
{:.grid .bg-info}

| Actor                         | Definition                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------------|
| No new |  |
{:.grid .table-striped}


## IHE Technical Frameworks General Introduction Appendix B – Transaction Summary Definitions

|------------------------------------------------|
| Editor, add the following new or modified transactions to the [IHE Technical Frameworks General Introduction Appendix B](https://profiles.ihe.net/GeneralIntro/ch-B.html): |
{:.grid .bg-info}


| Transaction                              | Definition                                                                              |
| ---------------------------------------- | --------------------------------------------------------------------------------------- |
| Mobile Patient Demographics Query \[ITI-78\]   | Performs a query against a patient demographics supplier using HTTP, REST, and JSON/XML message encoding. 
| Patient Demographics Match \[ITI-119\] | Requests that a patient demographics supplier using the FHIR $match operation.|
{:.grid .table-striped}


## 1:8.6 PDQ Cross Profile Considerations

|------------------------------------------------|
| Editor, Add the following to section ITI TF-1: 8.6 |
{:.grid  .bg-info}

There are two additional profiles, PDQv3 (Patient Demographics Query HL7v3) and
PDQm (Patient Demographics Query for Mobile), which provide similar functionality to
Patient Demographics Query. These profiles adapt the Patient Demographics Query
transaction of the Patient Demographics Supplier and Patient Demographics Consumer
Actors for HL7v3 and HL7 FHIR. [ITI TF-2x: Appendix M.4](https://profiles.ihe.net/ITI/TF/Volume2/ch-M.html#M.4) provides additional details
about these Patient Demographics Query Profiles and their relationship with one another.


## 1:24.6 PDQv3 Cross Profile Considerations

|-------------------------------------------------|
| Editor, Add the following to section ITI TF-1: 24.6 |
{:.grid .bg-info}

There are two additional profiles, PDQ (Patient Demographics Query) and PDQm (Patient
Demographics Query for Mobile), which provide similar functionality to Patient
Demographics Query V3. These profiles adapt the Patient Demographics Query
transaction of the Patient Demographics Supplier and Patient Demographics Consumer
Actors for HL7v2 and HL7 FHIR. [ITI TF-2x: Appendix M.4](https://profiles.ihe.net/ITI/TF/Volume2/ch-M.html#M.4) provides additional details
about these Patient Demographics Query Profiles and their relationship with one another.


---

File: repos/IHE_SLASH_ITI.PDQm/input/pagecontent/testplan.md

<div markdown="1" class="stu-note">

This Test Plan page is a prototype. We expect the maturity of the content will improve over time. For now, we summarize high level testing scope and available tools. Comments are welcome.
</div>

## Introduction

PDQm specifies a query transaction between two actors. The transaction between actors specifies semantics of the data exchanged. The PDQm test plan focuses on these semantics and on the expected actions on the server-side actor.

## High-level Test Scope

### Patient Demographics Query for Mobile [[ITI-78]](ITI-78.html) 

#### Patient Demographics Consumer
- The Patient Demographics Consumer only supports the [ITI-78] transaction when the Patient Search Option is declared. See tests under the Patient Search Option below.

#### Patient Demographics Supplier
- [ITI-78] is REQUIRED for all Patient Demographics Suppliers, and thus these these apply to all Patient Demographics Suppliers. 

- The Patient Demographics Supplier SHALL be able to respond with a set of matching patients from its database.
- The Patient Demographics Supplier SHALL be capable of filtering the response search set by the following parameters individually, based on the content of the Patient resources it stores (it need not be capable of filtering on parameters where the corresponding data is never present in Patient Resources it might return):
  - `_id`
  - `active`
  - `family`
  - `given`
  - `identifier`
  - `telecom`
  - `birthdate`
  - `address`
  - `address-city`
  - `address-country`
  - `address-postalcode`
  - `address-state`
  - `gender`
  - `mothersMaidenName`
- The Patient Demographics Supplier SHALL be capable of filtering the response search set by the following combinations of search parameters:
  - `family` and `gender`
  - `birthdate` and `family`
- All Patient Resources returned by the Patient Demographics Supplier SHALL conform to the [PDQm Patient Profile](StructureDefinition-IHE.PDQm.Patient.html).
- The Patient Demographics Supplier SHALL be able to return the response in either JSON or XML format, as requested in the Accept HTTP header. 

### Options 

#### Patient Search Option

##### Patient Demographics Consumer
- The Patient Demographics Consumer SHALL be able to initiate the ITI-78 queries with various search parameters, as supported.
- The Patient Demographics Consumer SHALL be able to process a successful response containing a single Patient which conforms to the [PDQm Patient Profile](StructureDefinition-IHE.PDQm.Patient.html) in some way meaningful to the application. 
- The Patient Demographics Consumer SHALL be able to process a successful response containing multiple Patient Resources which all conform to the PDQm Patient Profile. It MAY treat this as a failure when it requires a unique result, but it SHALL handle the response gracefully (any error reported should demonstrate it recognizes the result, and, for example, did not crash). 
- The Patient Demographics Consumer SHALL be able to process a successful response containing no results. It SHALL handle the response gracefully (any error reported should demonstrate that it recognizes the result, and, for example, did not crash). 
- The Patient Demographics Consumer SHALL be able to gracefully (ie, without crashing) handle a response that contains an HTTP status code in the 4xx to 5xx range. 
- The Patient Demographics Consumer SHALL be able to gracefully (ie, without crashing) handle a response that contains a single OperationOutcome outside of a Bundle with `error` or `fatal` severity. 
- The Patient Demographics Consumer SHALL be able to gracefully (ie, without crashing) handle a response that contains one or more OperationOutcomes inside of a Bundle with at least one having `error` or `fatal` severity. Such a response SHOULD be treated as an error response, even if it also contains matching results. 
- The Patient Demographics Consumer SHALL be able to gracefully (ie, without crashing) handle a response that contains one or more OperationOutcomes with `warning` severity (but where none have `error` or `fatal` severity). It MAY treat such a response as successful, failed, or some indeterminate state, as is appropriate for its needs. 
- The Patient Demographics Consumer SHALL be able to handle a response that contains one or more OperationOutcomes with `information` severity (but where none have `warning`, `fatal`, or `error` severity). It SHALL treat the response the same as a successful response, but it MAY report the outcome in its result. 
- The Patient Demographics Consumer SHALL be able to handle a response that contains one or more Patient resources which violate the PDQm Patient Profile. It MAY accept the response as successful, reject as failed, or perform some other indeterminate action, but it SHALL do so gracefully (ie, without crashing). 
- The Patient Demographics Consumer SHALL be able to handle a response that contains unknown extension elements on any resource. Such extension elements SHALL NOT cause the Patient Demographics Consumer to fail to process the response. 
- The Patient Demographics Consumer SHALL be able to handle a successful response that contains an unknown modifierExtension. When processing the response, it SHALL do so according to the [base FHIR specification of how to handle unknown modifier extensions]({{site.data.fhir.path}}extensibility.html#modifierExtension). 

#### Match Operation Option

Tests for this option involve testing the Patient Demographics Match [[ITI-119]](ITI-119.html) transaction.

##### Patient Demographics Consumer
- The Patient Demographics Consumer can initiate the ITI-119 operation with a Patient resource containing various demographics, as supported, and which conforms to the [PDQm Patient Profile for $match Input](StructureDefinition-IHE.PDQm.MatchInputPatient.html). It MAY also specify the `onlyCertainMatches` and `count` parameters.
- The Patient Demographics Consumer SHALL be able to process a successful response containing a single Patient which conforms to the [PDQm Patient Profile](StructureDefinition-IHE.PDQm.Patient.html) in some way meaningful to the application. 
- The Patient Demographics Consumer SHALL be able to process a successful response containing multiple Patient Resources which all conform to the PDQm Patient Profile. It MAY treat this as a failure if it submitted the request with `onlyCertainMatches=true`, but it SHALL handle the response gracefully (any error reported should demonstrate it recognizes the result, and, for example, did not crash). If it did not specify `onlyCertainMatches=true` in the request, then it SHALL handle multiple results as successful in some way meaningful to the application.
- The Patient Demographics Consumer SHALL be able to process a successful response containing no results. It SHALL handle the response gracefully (any error reported should demonstrate that it recognizes the result, and, for example, did not crash). 
- The Patient Demographics Consumer SHALL be able to gracefully (ie, without crashing) handle a response that contains an HTTP status code in the 4xx to 5xx range. 
- The Patient Demographics Consumer SHALL be able to gracefully (ie, without crashing) handle a response that contains a single OperationOutcome outside of a Bundle with `error` or `fatal` severity. 
- The Patient Demographics Consumer SHALL be able to gracefully (ie, without crashing) handle a response that contains one or more OperationOutcomes inside of a Bundle with at least one having `error` or `fatal` severity. Such a response SHOULD be treated as an error response, even if it also contains matching results. 
- The Patient Demographics Consumer SHALL be able to gracefully (ie, without crashing) handle a response that contains one or more OperationOutcomes with `warning` severity (but where none have `error` or `fatal` severity). It MAY treat such a response as successful, failed, or some indeterminate state, as is appropriate for its needs. 
- The Patient Demographics Consumer SHALL be able to handle a response that contains one or more OperationOutcomes with `information` severity (but where none have `warning`, `fatal`, or `error` severity). It SHALL treat the response the same as a successful response, but it MAY report the outcome in its result.
- The Patient Demographics Consumer SHALL be able to handle a response that contains one or more Patient resources which violate the PDQm Patient Profile. It MAY accept the response as successful, reject as failed, or perform some other indeterminate action, but it SHALL do so gracefully (ie, without crashing).  
- The Patient Demographics Consumer SHALL be able to handle a response that contains unknown extension elements on any resource. Such extension elements SHALL NOT cause the Patient Demographics Consumer to fail to process the response.
- The Patient Demographics Consumer SHALL be able to handle a successful response that contains an unknown modifierExtension. When processing the response, it SHALL do so according to the [base FHIR specification of how to handle unknown modifier extensions]({{site.data.fhir.path}}extensibility.html#modifierExtension).  

##### Patient Demographics Supplier
- The Patient Demographics Supplier SHALL be able to respond to ITI-119 requests with a set of matching patients from its database. The methodology the Patient Demographics Supplier uses to determine matches is not specified by this profile. 
- The Patient Demographics Supplier SHALL populate Patient entries in the response Bundle with a `search.score` between 0 and 1, where higher values indicate higher match quality. The method used to compute the score is otherwise not specified by this profile. 
- The Patient Demographics Supplier SHALL populate Patient entries in the response Bundle with the [match-grade]({{site.data.fhir.path}}extension-match-grade.html) extension containing an [appropriate code]({{site.data.fhir.path}}valueset-match-grade.html) to describe the match quality. The method the Patient Demographics Supplier uses to assess the match grade is not specified by this profile. 
- If the `onlyCertainMatches` parameter is specified as `true` in the request message, then the Patient Demographics Supplier SHALL include only results for which the `match-grade` is `certain`. 
- If the `count` parameter is specified in the request message, then the Patient Demographics Supplier SHALL include no more than `count` Patients in the response. 
- When the request message does not match any Patient records in the Patient Demographics Supplier, and no error is encountered when performing the search, then the Patient Demographics Supplier SHALL respond with `HTTP 200 (OK)`. The response Bundle SHALL not contain any Patient entries, and any OperationOutcome entries SHALL not have `fatal` or `error` severity. 
- The request message MAY be invoked with either a raw Patient Resource, or a Parameters Resource containing a Patient Resource, potentially alongside OPTIONAL parameters. The Patient Demographics Supplier SHALL be capable of handling both request formats. 
- All Patient Resources returned by the Patient Demographics Supplier SHALL conform to the [PDQm Patient Profile](StructureDefinition-IHE.PDQm.Patient.html).
- The Patient Demographics Supplier SHALL be able to return the response in either JSON or XML format, as requested in the Accept HTTP header.
- The Patient Demographics Supplier SHALL respond to a request that contains an unrecognized modifierExtension by returning an `HTTP 400` code. The response SHALL NOT contain any Patient Resources. 
- A request that contains unrecognized extensions SHALL NOT cause the Patient Demographics Supplier to fail to return a response.  


## Unit Test Procedure (Conformance Testing)

Unit testing this context entails testing a SUT with a simulator or validator tool. A simulator is an implementation of an actor that is designed specifically to test the opposite pair actor. The simulator might be a reference implementation or might be a specially designed test-bench. Often, when a reference implementation is used, the negative tests are harder to simulate. A validator is an implementation that can check conformance. A validator might be a simulator, but might also be a standalone tool used to validate only a message encoding. Some reference implementations might be able to validate to a StructureDefinition profile, but often these do not include sufficient constraints given the overall actor conformance criteria. 

### Available tools for PDQm unit testing

#### Gazelle PatientManager - Simulator 

- Provider: INRIA (Rennes, France), [KEREVAL](https://www.kereval.com/)
- [Gazelle PatientManager online](https://gazelle.ihe.net/PatientManager/home.seam)
- [User Manual](https://gazelle.ihe.net/gazelle-documentation/Patient-Manager/user.html)
- [Tool support](https://gazelle.ihe.net/jira/projects/PAM)
- Actors (options) tested: Patient Demographics Consumer, Patient Demographics Supplier for ITI-78:
  -  Consumer test definition: [PM_PDQ_Query-Patient_Demographics_Consumer](https://gazelle.ihe.net/content/pmpdqquery-patientdemographicsconsumer)
  -  Supplier test definition: [PM_PDQ_Query-Patient_Demographics_Supplier](https://gazelle.ihe.net/content/pmpdqquery-patientdemographicssupplier)

#### Gazelle External Validation Service (aka "EVS Client") - Validator

- Provider: INRIA (Rennes, France), [KEREVAL](https://www.kereval.com/), and Mallinckrodt Institute of Radiology (Saint Louis, USA) 
- [Gazelle EVSClient online](https://gazelle.ihe.net/evs/home.seam)
- [User Manual](https://gazelle.ihe.net/gazelle-documentation/EVS-Client/user.html)
- [Tool support](https://gazelle.ihe.net/jira/browse/EVSCLT)
- Scope of testing: validation using StructureDefinitions for PDQm IG
- Test documentation: https://gazelle.ihe.net/content/evsfhirvalidation
- Other notes: StructureDefinitions and other conformance resources are provided in this Implementation Guide on the [Artifacts](artifacts.html) page.


## Integration Test Procedure (Interoperability Testing)

Integration Testing in this context is where two SUT of paired actors test against each other. Integration testing is often limited by the capability of the client (Patient Demographics Consumer), which might support only a subset of the semantics REQUIRED to be supported by the server (Patient Demographics Supplier). Full message semantics and failure-modes are generally more thoroughly exercised with unit (conformance) tests.

The tests listed below are defined in [Gazelle Master Model](https://gazelle.ihe.net/GMM) and are performed by systems testing PDQm at IHE Connectathons.

### Patient Demographics Consumer --> Patient Demographics Supplier Interoperability Tests:

- ITI-78_(PDQm)_Search_Read
  - Assumes a pre-defined set of patient demographics on the Supplier actor
- ITI-78_Paging


---

File: repos/IHE_SLASH_ITI.PDQm/input/pagecontent/volume-1.md

The Patient Demographics Query for Mobile (PDQm) Profile defines a lightweight RESTful interface to a patient demographics supplier leveraging technologies readily available to mobile applications and lightweight browser based applications.

The functionality is similar to the [PDQ](https://profiles.ihe.net/ITI/TF/Volume1/ch-8.html) and [PDQv3](https://profiles.ihe.net/ITI/TF/Volume1/ch-24.html) Profiles. The differences are driven by the use of HL7 [FHIR](http://hl7.org/fhir/). The profile leverages HTTP transport, and the JavaScript Object Notation (JSON), Simple-XML, and Representational State Transfer (REST). The payload format is defined by the HL7 [FHIR](http://hl7.org/fhir/) standard.

The following list provides a few examples of how PDQm might be leveraged by implementers:
-   A health portal securely exposing demographics data to browser-based plugins
-   Medical devices which need to access patient demographic information
-   Mobile devices used by physicians (example bedside eCharts) which need to establish patient context by scanning a bracelet
-   Web based EHR/EMR applications which wish to provide dynamic updates of patient demographic information such as a non-postback search,  additional demographic detail, etc.
-   Any low resource application which exposes patient demographic search functionality
-   Any application using the MHD Profile to access documents MAY use PDQm to find an appropriate patient identifier

This implementation guide is intended to be fully compliant with the HL7 [FHIR](http://hl7.org/fhir/) specification, providing only use-case driven constraints to aid with interoperability, deterministic results, and compatibility with existing PDQ and PDQv3 Profiles.

## 1:38.1 PDQm Actors, and Transactions

Figure 1:38.1-1 shows the actors directly involved in the Patient Demographics Query for Mobile Profile and the relevant transactions between them. Note that the actors in this profile are the same as the actors defined in the PDQ Profile [ITI TF-1: 8.1](https://profiles.ihe.net/ITI/TF/Volume1/ch-8.html#8.1).
<div>
{%include PDQm-Actor-Diagram.svg %}
</div>
<br clear="all">

**Figure 1:38.1-1: PQDm Actor Diagram**

<table border="1" borderspacing="0" style='border: 1px solid black; border-collapse: collapse'>
<caption>
<b>
Table 1:38.1-1: PDQm - Profile Actors and Transactions
</b>
</caption>
<thead>
<tr style='background: gray;'>
<th>Actors</th>
<th>Transactions</th>
<th>Optionality</th>
</tr>
</thead>
<tbody>
    <tr>
        <td rowspan="2">
            Patient Demographics Consumer
        </td>
        <td>
            <a href='ITI-78.html'>Mobile Patient Demographics Query [ITI-78]</a>
        </td>
        <td align='center'>
            O
        </td>
    </tr>
    <tr>
        <td>
            <a href='ITI-119.html'>Patient Demographics Match [ITI-119]</a>
        </td>
        <td align='center'>
            O
        </td>
    </tr>
    <tr>
        <td rowspan="2">
            Patient Demographics Supplier
        </td>
        <td>
            <a href='ITI-78.html'>Mobile Patient Demographics Query [ITI-78]</a>
        </td>
        <td align='center'>
            R
        </td>
    </tr>
    <tr>
        <td>
            <a href='ITI-119.html'>Patient Demographics Match [ITI-119]</a>
        </td>
        <td align='center'>
            O
        </td>
    </tr>                        
</tbody>
</table>


**Note 1:** The Mobile Patient Demographics Query [\[ITI-78\]](ITI-78.html) and Patient Demographics Match [\[ITI-119\]](ITI-119.html) transactions correspond to the transactions used in the [PDQ](https://profiles.ihe.net/ITI/TF/Volume1/ch-8.html) and [PDQv3](https://profiles.ihe.net/ITI/TF/Volume1/ch-24.html) Profiles and provide similar functionality. 
There is no transaction which corresponds to the Patient Demographics and Visit Query [ITI-22].
See [ITI TF-2: Appendix M.4](https://profiles.ihe.net/ITI/TF/Volume2/ch-M.html#M.4) for a mapping of query fields for PDQ, PDQv3, and PDQm transactions.

**Note 2:** The Patient Demographics Consumer SHALL implement at least one of the Mobile Patient Demographics Query [ITI-78] or Patient Demographics Match [ITI-119] transactions. 

### 1:38.1.1 Actor Descriptions and Actor Profile Requirements

#### 1:38.1.1.1 Patient Demographics Consumer

Two `requirements` CapabilityStatements are provided for the Patient Demographics Consumer. 
The [Patient Demographics Consumer Implementing the Patient Search Option](CapabilityStatement-IHE.PDQm.PatientDemographicsConsumerQuery.html) statement shows the query parameters available and the requirements that need to be implemented by a Patient Demographics Consumer implementing the Patient Search Option. 
The [Patient Demographics Consumer Implementing the Match Operation Option](CapabilityStatement-IHE.PDQm.PatientDemographicsConsumerMatch.html) describes support for the [PDQm $Match operation](OperationDefinition-PDQmMatch.html).

#### 1:38.1.1.2 Patient Demographics Supplier

Two `requirements` CapabilityStatements are provided for the Patient Demographics Supplier.
The [Patient Demographics Supplier](CapabilityStatement-IHE.PDQm.PatientDemographicsSupplier.html) statement shows the query parameters to be supported by all Patient Demographics Suppliers.
The [Patient Demographics Supplier Implementing Match Operation Option](CapabilityStatement-IHE.PDQm.PatientDemographicsSupplierMatch.html) shows the additional capabilities of a Patient Demographics Supplier that implements the Match Operation Option, including support for the [PDQm $Match operation](OperationDefinition-PDQmMatch.html).

The Patient Demographics Supplier SHALL publish an `instance` CapabilityStatement at the metadata endpoint following [ITI Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) using the [FHIR capabilities interaction]({{site.data.fhir.path}}http.html#capabilities). 
All supported search parameters and search methods (GET, POST) SHALL be specified. The [search parameters defined in \[ITI-78\]](ITI-78.html#23784121-search-parameters) SHALL be supported, other parameters MAY be supported.
The [PDQm $Match Operation](OperationDefinition-PDQmMatch.html) SHALL also be supported if the Match Operation Option is declared. 

This capabilities response will typically include all of the capabilities inclusive of all grouped actors and additional functionality.

### 1:38.1.2 Transaction Descriptions
The transactions in this profile are summarized in the sections below.

#### 1:38.1.2.1 Mobile Patient Demographics Query Transaction

Mobile Patient Demographics Query is used by the Patient Demographics Consumer to search for information about patients whose demographics data match data provided in the query parameters on the request message. The request is received by the Patient Demographics Supplier. The Patient Demographics Supplier processes the search and returns a response in the form of demographics information for the matching patients.

For more details see the detailed [transaction description](ITI-78.html).

#### 1:38.1.2.2 Patient Demographics Match Transaction

Patient Demographics Match is used by the Patient Demographics Consumer to request that the Patient Demographics Supplier identify Patient records that match the demographics supplied in the request message. The request is received by the Patient Demographics Supplier. The Patient Demographics Supplier processes the request according to its internal matching algorithm and returns a response in the form of demographics information for the matching patients. 

For more details, see the detailed [transaction description](ITI-119.html).

## 1:38.2 PDQm Actor Options

Options that MAY be selected for each actor in this profile, if any, are listed in Table 1:38.2-1. Dependencies between options when applicable are specified in notes.

**Table 1:38.2-1: Patient Demographics Query for Mobile - Actors and Options**

Actor	| Option Name |	Reference
---|---|---
Patient Demographics Consumer |	Patient Search | 1:38.2.1
Patient Demographics Consumer | Match Operation | 1:38.2.2
Patient Demographics Supplier |	Match Operation | 1:38.2.2
{:.grid}

### 1:38.2.1 Patient Search Option
The Patient Search Option is declared by Patient Demographics Consumers that search for patient information using the FHIR Search operation. 
This option uses the [Mobile Patient Demographics Query transaction](ITI-78.html).
The Patient Demographics Supplier is REQUIRED to support the Mobile Patient Demographics Query transaction, and thus there is no Patient Search Option on the Patient Demographics Supplier.  

### 1:38.2.2 Match Operation Option
The Match Operation Option is declared by Patient Demographics Consumers that use, and Patient Demographics Suppliers that support locating patient information using the [PDQm $Match Operation](OperationDefinition-PDQmMatch.html). 

Because this option is available for both the Patient Demographics Consumer and the Patient Demographics Supplier, Patient Demographics Consumers that implement the Match Operation Option but not the Patient Search Option can only interoperate with Patient Demographics Suppliers that implement the Match Operation Option. 

## 1:38.3 PDQm Required Actor Grouping

No REQUIRED groupings.

The Security Considerations page describes some OPTIONAL groupings that MAY be of interest for security considerations.

Cross-Profile Considerations describes some OPTIONAL groupings in other related profiles.

## 1:38.4 PDQm Overview

### 1:38.4.1 Concepts
The PDQm Profile supports all of the use cases of PDQ while keeping the technology as lightweight as possible. Example uses include:
- Mobile devices used by physicians (for example: a mobile app for electronic patient charts) which need to establish patient context by scanning a bracelet,
- Web based EHR/EMR applications which wish to provide dynamic updates of patient demographic information such as a non-postback search, additional demographic detail, etc.
- A document source/consumer wishing to perform an operation in the IHE Mobile access to Health Documents (MHD) Profile, where patient ID in the appropriate patient ID domain needs to be resolved by the source/consumer,
- A health portal securely exposing demographics data to browser-based plugins,
- Medical devices which need to access patient demographic information.
Each of these specific use cases is generalized into two general use cases. The first is one where a system needs to obtain patient demographics to populate a user interface via a known demographic field (such as bracelet ID) or search parameters provided by a user. The second is as a prerequisite step whereby an application needs to obtain an identifier from another patient ID domain in order to complete another workflow.
This profile is applicable for use by any application which requires access to patient demographics where lightweight REST/JSON or REST/XML is a more suitable technology than traditional PDQ or PDQv3 Profiles.

### 1:38.4.2 Use Cases

#### 1:38.4.2.1 Use Case #1: Patient Information Entering at Bedside
In this use case an admitted patient is assigned a bed and might not be able to provide positive ID information. The nurse uses the PDQm Profile to establish patient context.

##### 1:38.4.2.1.1 Patient Information Entering at Bedside Use Case Description
An admitted patient is assigned to a bed. The patient might or might not be able to provide positive ID information. The nurse needs to enter patient identity information into some bedside equipment to establish the relationship of the assigned bed to the patient. The equipment issues a query for a patient pick list to a patient demographics supplier that provides data for a patient pick list. Search criteria entered by the nurse might include one or more of the following:

- Partial or complete patient name (printed on the patient record or told by the patient)
- Patient ID (this might be obtained from printed barcode, a bed-side chart, etc.)
- Patient ID entry or scan
- Date of birth / age range

The system returns a list of patients showing Patient ID, full name, age, sex and displays the list to the nurse. The nurse then selects the appropriate record to enter the patient identity information into the bedside equipment application.

#### 1:38.4.2.2 Use Case #2: Patient Identity Information Entering in Physician Offices
In this use case a patient visits a physician for the first time. The physician system will use the PDQm Profile to import demographics information into the local application.

###### 1:38.4.2.2.1 Patient Identity Information Entering in Physician Offices Use Case Description
A patient visits a physician office for the first time. The nurse needs to register the patient; in doing so, it is desired to record the patient’s demographic data in the practice management information system (PMIS). The physician office is connected to a hospital enterprise’s central patient registry. The nurse issues a patient query request to the central patient registry acting as a Patient Demographics Supplier, with some basic patient demographics data as search criteria. In the returned patient list, she picks an appropriate record for the patient, including the hospital’s Patient ID, to enter into the PMIS. (Note the PMIS uses a different Patient ID domain than that of the central patient registry.)

#### 1:38.4.2.3 Use Case #3: Patient Demographics Query in an Enterprise with Multiple Patient ID Domains
In this use case a lab system obtains identities from multiple Patient ID domains for the purpose of reporting results.

##### 1:38.4.2.3.1 Patient Demographics Query in an Enterprise with Multiple Patient ID Domains Use Case Description
A lab technician enters some basic demographics data (e.g., patient name) into a lab application to query a patient demographics supplier to identify a patient for his lab exams. As the application also needs the patient identifier in another Patient ID Domain in the enterprise for results delivery, the application is configured to query for Patient IDs from other domains in the query response.

#### 1:38.4.2.4 Use Case #4:  Patient Demographics Query by Known Business Identifier
In this use case, a known and reliable business identifier is used to locate the Patient record.

#### 1:38.4.2.4.1 Patient Demographics Query by Known Business Identifier Description
A patient visits the office of the general practitioner they see regularly. The general practitioner needs to retrieve the patient's electronic medical record from the jurisdictional central database. In the local jurisdiction, patients are issued photo ID cards by the local jurisdictional authority that include identifiers unique to the patient. These identifiers end with a [check digit](https://en.wikipedia.org/wiki/Check_digit) using a strong algorithm, such as the modulo-11 algorithm. The practitioner's office clerk uses the unique identifier on the patient's photo ID card to locate and retrieve the patient's record from the jurisdictional database. 

### 1:38.4.3 Use Case Analysis

#### 1:38.4.3.1 Comparison Between the Mobile Patient Demographics Query [ITI-78] and Patient Demographics Match [ITI-119] transactions

The Mobile Patient Demographics Query [ITI-78] and Patient Demographics Match [ITI-119] transactions serve similar purposes in that they enable a Patient Demographics Consumer with a set of patient demographics to ask that the Patient Demographics Supplier identify patients with matching demographics. However, they are based on entirely different FHIR interactions, and thus the semantic behavior is different between the two. 

The Mobile Patient Demographics Query [ITI-78] transaction follows the semantics of the [FHIR Search]({{site.data.fhir.path}}search.html) and [FHIR Read]({{site.data.fhir.path}}http.html#read) interactions. When using the search interaction, the Patient Demographics Supplier will perform a comparison for each query parameter. Patient records that are returned will be all those, and only those, that match each search parameter as specified by the Patient Demographics Consumer. This means the Patient Demographics Consumer is responsible for querying with known, accurate demographics, and then performing its own logic to filter the results. The read interaction is used when the Patient Demographics Consumer has knowledge of the FHIR Resource ID of the needed Patient resource. 

The Patient Demographics Match [ITI-119] transaction, on the other hand, follows the semantics of the FHIR [$match]({{site.data.fhir.path}}patient-operation-match.html) operation.
This FHIR operation provides [Master Patient Index (MPI)](https://en.wikipedia.org/wiki/Enterprise_master_patient_index) style search functionality. This interaction gives the Patient Demographics Supplier full authority to implement the patient matching algorithm of its choice, rather than following the strict rules of the FHIR search interaction. These types of systems will often use a scoring algorithm to match patients to the given demographics, and return results that meet or exceed a threshold. The algorithm might assign partial credit to demographics that match partially, such as names with alternate spellings or identifiers with transposed digits. Thus, this is a more powerful search that puts responsibility on the Patient Demographics Supplier to perform the complex patient matching logic. The Patient Demographics Consumer can even request that only 'certain' matches be returned, ensuring that weak matches are not even presented. 

The [FHIR Patient Resource Page]({{site.data.fhir.path}}patient.html#match) has an informative and detailed description on the differences between performing a Patient Search and a $match interaction. 

#### 1:38.4.3.2 Match Based Process Flow in Patient Demographics Query for Mobile Profile

The Mobile Patient Demographics Match [ITI-119] transaction tends to be appropriate when:

- The Patient Demographics Consumer wishes to rely on the Patient Demographics Supplier's MPI based matching algorithm. 
- The Patient Demographics Consumer has low confidence that its demographics are exactly matched to those of the Patient Demographics Supplier. 
- The Patient Demographics Consumer wants to only encounter high quality matches to its query. 
- The Patient Demographics Consumer might know a business identifier for the patient, but it does not have full confidence in that identifier, such that additional logic to confirm demographics is desired. 

This process flow is aligned most closely with use cases #1 and #2. 

<div>
{%include MPI-Based-Process-Flow-in-PDQm-Profile.svg%}
</div>
<br clear="all">
**Figure 1:38.4.3.2-1: Match Based Process Flow in PDQm Profile**

#### 1:38.4.3.3 Search Based Process Flow using Patient Search or Read

The Mobile Patient Demographics Query [ITI-78] transaction tends to be appropriate when:

- The Patient Demographics Consumer is looking to search for a group of different patients that have a property in common, such as a specific age range (search).
- The Patient Demographics Consumer wishes to present its user with a list of patients based on literal search parameter matching (search).
- The Patient Demographics Consumer has a high degree of confidence that the demographics it is searching on will match those of the Patient Demographics Supplier (search). 
- The Patient Demographics Consumer knows a business identifier unique to the Patient, such as an MRN (search). Note that searching only by identifier might be unsafe if the identifier assigning authority does not protect against corrupt or mistyped identifiers by including a checksum or similar mechanism.
- The Patient Demographics Consumer already knows the FHIR Resource ID of the needed Patient Resource, and needs only to retrieve the full Patient information (read).

This process flow is aligned most closely with use case #4.

<div>
{%include Search-Process-Flow-in-PDQm-Profile.svg%}
</div>
<br clear="all">
**Figure 1:38.4.3.3-1: Search Based Process Flow in PDQm Profile Using Patient Search or Read**

## 1:38.5 PDQm Security Considerations

Actors are expected to follow the recommendations and requirements found in [ITI TF-2: Appendix Z.8 "Mobile Security Considerations"](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations). 

Actors have requirements in the [ITI-78] [Security Considerations Section](ITI-78.html#23785-security-considerations) and the [ITI-119] [Security Considerations Section](ITI-119.html#231195-security-considerations) including requirements for Audit Logging when grouped with [ATNA Secure Node or Secure Application](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), and Authentication and Authorization when grouped with [Internet User Authorization (IUA)](https://profiles.ihe.net/ITI/IUA/index.html) Actors.

## 1:38.6 PDQm Cross-Profile Considerations

When the PDQm Patient Demographics Supplier is grouped with actors in other IHE profiles that perform patient information reconciliation activities (e.g., the ADT Actor in the IHE Radiology Scheduled Workflow.b Profile), the Patient Demographics Supplier MAY use the updated information to respond to PDQm Queries. In addition, the Patient Demographics Query for Mobile Profile MAY play an integral workflow role in conjunction with other IHE profiles. A discussion of the various IHE profiles involved in patient identity management and how they relate to one another can be found in the [Enabling Document Sharing Health Information Exchange Using IHE Profiles White Paper](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#5-patient-identity-management).

Those systems that manage patient demographics could implement the Patient Demographics Supplier 
in all three profiles: PDQ, PDQv3, and PDQm. In this way the Patient Demographics Consumer can 
choose the technology stack that best fits. 
[ITI TF-2: Appendix M.4](https://profiles.ihe.net/ITI/TF/Volume2/ch-M.html#M.4) provides additional 
details about Patient Demographics Query Profiles and their relationship with one another. 

Figure 1:38.6-1 shows one example of how a PDQm Patient Demographics Supplier might act as a proxy to an existing PDQ or PDQv3 environment. 

<div>
{%include Implementing-PDQm-as-a-gateway.svg%}
</div>
<br clear="all">
**Figure 1:38.6-1: Implementing PDQm as a Gateway**

Note that this is but one possibility, other configurations are also possible. 


---

