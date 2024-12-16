File: repos/hl7-be_SLASH_infsec/input/fsh/codesystem/BeCSPseudonymizationType.fsh

CodeSystem: BeCSPseudonymizationType
Id: be-cs-pseudonymization-type
Title: "Types of pseudonymization"
Description: "The technique used for pseudonymization"
* ^experimental = false
* ^caseSensitive = true
* #direct "Direct pseudonym, for text shorter than 32 bytes"
* #encrypted "Encrypted pseudonym, for text longer than 32 bytes"

---

File: repos/hl7-be_SLASH_infsec/input/fsh/codesystem/BeCSPseudonymizationVersion.fsh

CodeSystem: BeCSPseudonymizationVersion
Id: be-cs-pseudonymization-version
Title: "BeCSPseudonymizationVersion"
Description: "List of pseudonymization versions that can be used a.o. in the Capabilities Statement"
* ^experimental = false
* ^caseSensitive = true
* #urn:be:fgov:ehealth:pseudo:v1
* #urn:be:fgov:ehealth:pseudo:v2
* #urn:be:fgov:pseudo-encrypted:v1


---

File: repos/hl7-be_SLASH_infsec/input/fsh/extensions/BeExtIntendedProfile.fsh

Extension: BeExtIntendedProfile
Id: be-ext-intended-profile
Title: "Intended profile"
Description: "Using this extension, the sender indicates that he intends this resource to comply with the profile and version mentioned here. This profile will be used to determine the semantic integrity of the profile."
* ^context.type = #element
* ^context.expression = "DomainResource"
* . ^short = "Intended profile"
* value[x] only canonical
* valueCanonical 1..1 MS
* obeys BeInvUrlAndVersionCanonical

---

File: repos/hl7-be_SLASH_infsec/input/fsh/extensions/BeExtKeyPseudonymization.fsh

Extension: BeExtKeyPseudonymization
Id: be-ext-key-pseudonymization
Title: "Key Pseudonymization Extension"
Description: "This holds a pseudonymized key that can be used for all encrypted fields in the resource (long text pseudonymisation)"
* ^context.type = #element
* ^context.expression = "Meta"
* . ^short = "Pseudonymization key (See Blinded Pseudonymization Cookbook, Annex: Processing of input data exceeding 32
bytes)"
* id 1..1 MS 
* id ^short = "kid (also available in JWE)"
* extension contains key 1..1 MS
* extension[key].value[x] only string 
* extension[key].valueString 1..1 MS 
* extension[key].valueString ^short = "pseudonymized key"
* extension[key].value[x].extension contains BeExtPseudonymization named pseudonymization 1..1


---

File: repos/hl7-be_SLASH_infsec/input/fsh/extensions/BeExtPseudonymization.fsh

Extension: BeExtPseudonymization
Id: be-ext-pseudonymization
Title: "Pseudonymization Extension"
Description: "This is a marker interface. If the field is pseudonymized, the string field SHALL have this extension. "
* ^context.type = #element
* ^context.expression = "Element"
* . ^short = "Pseudonymization data"
* extension contains  marker 1..1 MS and
    format 0..1 MS and
    version 0..1 MS
* extension[marker].value[x] only boolean
* extension[marker].valueBoolean = true
* extension[format].value[x] only code
* extension[format].valueCode 0..1 MS 
* extension[format].valueCode ^short = "provide encrypted only in case of Blinded Pseudonymization Cookbook, Annex: Processing of input data exceeding 32
bytes"
* extension[format].valueCode from BeVSPseudonymizationType
* extension[version].value[x] only positiveInt
* extension[version].valuePositiveInt 0..1 MS
* extension[version].valuePositiveInt ^short = "version of the pseudonym encoding"

---

File: repos/hl7-be_SLASH_infsec/input/fsh/instances/bundle1.fsh

Instance: bundle1
InstanceOf: Bundle
* type = #collection
* entry[+].resource = patient1
* entry[=].fullUrl = "urn:uuid:be78855a-2ac2-4907-a209-c018ab7bbaa5"
* entry[+].resource = patient2
* entry[=].fullUrl = "urn:uuid:2c9e9f79-1a05-4a34-ab1b-07328c53a323"

---

File: repos/hl7-be_SLASH_infsec/input/fsh/instances/capabilitystatement.fsh

Instance: capabilitystatement
InstanceOf: CapabilityStatement
Usage: #example
* name = "RestServer"
* status = #active
* date = "2024-10-21T09:29:32.761+00:00"
* publisher = "Not provided"
* kind = #instance
* software.name = "Fictitious FHIR Server"
* implementation.description = "HAPI FHIR"
* implementation.url = "http://localhost:8080/fhir"
* fhirVersion = #4.0.1
* format[0] = #application/fhir+xml
* format[+] = #xml
* format[+] = #application/fhir+json
* format[+] = #json
* format[+] = #application/x-turtle
* format[+] = #ttl
* rest.mode = #server
* rest.security.service[+] = BeCSPseudonymizationVersion#urn:be:fgov:ehealth:pseudo:v1
* rest.security.service[+] = BeCSPseudonymizationVersion#urn:be:fgov:ehealth:pseudo:v2
* rest.security.service[+] = BeCSPseudonymizationVersion#urn:be:fgov:pseudo-encrypted:v1
* rest.resource[0].type = #CodeSystem
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/CodeSystem"
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #search-type
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].searchInclude = "*"
* rest.resource[=].searchParam[0].name = "code"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A code defined in the code system"
* rest.resource[=].searchParam[+].name = "context"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A use context assigned to the code system"
* rest.resource[=].searchParam[+].name = "context-quantity"
* rest.resource[=].searchParam[=].type = #quantity
* rest.resource[=].searchParam[=].documentation = "A quantity- or range-valued use context assigned to the code system"
* rest.resource[=].searchParam[+].name = "context-type"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A type of use context assigned to the code system"
* rest.resource[=].searchParam[+].name = "date"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The code system publication date"
* rest.resource[=].searchParam[+].name = "description"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The description of the code system"
* rest.resource[=].searchParam[+].name = "id"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "External identifier for the code system"
* rest.resource[=].searchParam[+].name = "jurisdiction"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Intended jurisdiction for the code system"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Computationally friendly name of the code system"
* rest.resource[=].searchParam[+].name = "publisher"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Name of the publisher of the code system"
* rest.resource[=].searchParam[+].name = "reference"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The current status of the code system"
* rest.resource[=].searchParam[+].name = "title"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The human-friendly name of the code system"
* rest.resource[=].searchParam[+].name = "url"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The uri that identifies the code system"
* rest.resource[=].searchParam[+].name = "version"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The business version of the code system"
* rest.resource[=].operation[0].name = "validate-code"
* rest.resource[=].operation[=].definition = "http://localhost:8080/fhir/OperationDefinition/CodeSystemValueSet-it-validate-code"
* rest.resource[=].operation[+].name = "upload-external-code-system"
* rest.resource[=].operation[=].definition = "http://localhost:8080/fhir/OperationDefinition/CodeSystem-t-upload-external-code-system"
* rest.resource[=].operation[+].name = "subsumes"
* rest.resource[=].operation[=].definition = "http://localhost:8080/fhir/OperationDefinition/CodeSystem-it-subsumes"
* rest.resource[=].operation[+].name = "lookup"
* rest.resource[=].operation[=].definition = "http://localhost:8080/fhir/OperationDefinition/CodeSystem-it-lookup"
* rest.resource[+].type = #ConceptMap
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/ConceptMap"
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #search-type
* rest.resource[=].searchInclude = "*"
* rest.resource[=].searchParam.name = "url"
* rest.resource[=].searchParam.type = #string
* rest.resource[=].searchParam.documentation = "The uri that identifies the concept map"
* rest.resource[=].operation.name = "translate"
* rest.resource[=].operation.definition = "http://localhost:8080/fhir/OperationDefinition/ConceptMap-t-translate"
* rest.resource[+].type = #Medication
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/Medication"
* rest.resource[=].interaction.code = #read
* rest.resource[=].searchInclude = "*"
* rest.resource[+].type = #OperationDefinition
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/OperationDefinition"
* rest.resource[=].interaction.code = #read
* rest.resource[=].searchInclude = "*"
* rest.resource[+].type = #StructureDefinition
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/StructureDefinition"
* rest.resource[=].interaction[0].code = #update
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #search-type
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].searchInclude = "*"
* rest.resource[=].searchParam[0].name = "code"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[+].name = "context"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A use context assigned to the structure definition"
* rest.resource[=].searchParam[+].name = "context-quantity"
* rest.resource[=].searchParam[=].type = #quantity
* rest.resource[=].searchParam[=].documentation = "A quantity- or range-valued use context assigned to the structure definition"
* rest.resource[=].searchParam[+].name = "context-type"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A type of use context assigned to the structure definition"
* rest.resource[=].searchParam[+].name = "date"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The structure definition publication date"
* rest.resource[=].searchParam[+].name = "description"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The description of the structure definition"
* rest.resource[=].searchParam[+].name = "expansion"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "External identifier for the structure definition"
* rest.resource[=].searchParam[+].name = "jurisdiction"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Intended jurisdiction for the structure definition"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Computationally friendly name of the structure definition"
* rest.resource[=].searchParam[+].name = "publisher"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Name of the publisher of the structure definition"
* rest.resource[=].searchParam[+].name = "reference"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The current status of the structure definition"
* rest.resource[=].searchParam[+].name = "title"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The human-friendly name of the structure definition"
* rest.resource[=].searchParam[+].name = "url"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The uri that identifies the structure definition"
* rest.resource[=].searchParam[+].name = "version"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The business version of the structure definition"
* rest.resource[+].type = #ValueSet
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/ValueSet"
* rest.resource[=].interaction[0].code = #update
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].interaction[+].code = #search-type
* rest.resource[=].interaction[+].code = #delete
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].searchInclude = "*"
* rest.resource[=].searchParam[0].name = "_id"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "code"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "This special parameter searches for codes in the value set. See additional notes on the ValueSet resource"
* rest.resource[=].searchParam[+].name = "context"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A use context assigned to the value set"
* rest.resource[=].searchParam[+].name = "context-quantity"
* rest.resource[=].searchParam[=].type = #quantity
* rest.resource[=].searchParam[=].documentation = "A quantity- or range-valued use context assigned to the value set"
* rest.resource[=].searchParam[+].name = "context-type"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A type of use context assigned to the value set"
* rest.resource[=].searchParam[+].name = "date"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The value set publication date"
* rest.resource[=].searchParam[+].name = "description"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The description of the value set"
* rest.resource[=].searchParam[+].name = "expansion"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Identifies the value set expansion (business identifier)"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "External identifier for the value set"
* rest.resource[=].searchParam[+].name = "jurisdiction"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Intended jurisdiction for the value set"
* rest.resource[=].searchParam[+].name = "name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Computationally friendly name of the value set"
* rest.resource[=].searchParam[+].name = "publisher"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Name of the publisher of the value set"
* rest.resource[=].searchParam[+].name = "reference"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A code system included or excluded in the value set or an imported value set"
* rest.resource[=].searchParam[+].name = "status"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The current status of the value set"
* rest.resource[=].searchParam[+].name = "title"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The human-friendly name of the value set"
* rest.resource[=].searchParam[+].name = "url"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The uri that identifies the value set"
* rest.resource[=].searchParam[+].name = "version"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The business version of the value set"
* rest.resource[=].operation[0].name = "validate-code"
* rest.resource[=].operation[=].definition = "http://localhost:8080/fhir/OperationDefinition/CodeSystemValueSet-it-validate-code"
* rest.resource[=].operation[+].name = "expand"
* rest.resource[=].operation[=].definition = "http://localhost:8080/fhir/OperationDefinition/ValueSet-it-expand"

---

File: repos/hl7-be_SLASH_infsec/input/fsh/instances/contained1.fsh

Instance: contained1 
InstanceOf: Patient 
* contained[+] = patient2
* link.other = Reference( #patient2 )
* link.type = #replaced-by

---

File: repos/hl7-be_SLASH_infsec/input/fsh/instances/parameters1.fsh

Instance: parameters1
InstanceOf: Parameters
Usage: #example
* meta.extension[+].url = "https://www.ehealth.fgov.be/standards/fhir/infsec/StructureDefinition/be-ext-key-pseudonymization"
* meta.extension[=].id = "fcc557e7-40fa-4fde-b802-12a461cd176f"
* meta.extension[=].extension[+].url = "key"
* meta.extension[=].extension[=].valueString = "urn:be:fgov:pseudo:v2:OZADJVppdeQzwgvAUjQNaLvuf94ulY6iD:OZADJVppdeQzwgvAUjQNaLvuf94ulY6iDgeip7iSHAW7TNrDBa0XMGeS6G3s/HWLSQ4eirpcox28GghzbtaiUzg=.UPOBi75XsreuYfQwyVvIaHgpzrrdS6joS8JaPlkMPxeU8FmFHRtteJp/FAq91pEllcbH4V4PRSC+QEm0C9thkO4="
* meta.extension[=].extension[=].valueString.extension[BeExtPseudonymization].extension[marker].valueBoolean = true
* meta.extension[=].extension[=].valueString.extension[BeExtPseudonymization].extension[format].valueCode = #direct
* meta.extension[=].extension[=].valueString.extension[BeExtPseudonymization].extension[version].valuePositiveInt = 2
* parameter[0].name = "name"
* parameter[=].valueString = "urn:be:fgov:pseudo-encrypted:v1:fcc557e7-40fa-4fde-b802-12a461cd176f:OZADJVppdeQzwgvAUjQNaLvuf94ulY6iD:geip7iSHAW7TNrDBa0XMGeS6G3s/HWLSQ4eirpcox28GghzbtaiUzg=.UPOBi75XsreuYfQwyVvIaHgpzrrdS6joS8JaPlkMPxeU8FmFHRtteJp/FAq91pEllcbH4V4PRSC+QEm0C9thkO4="
* parameter[=].valueString.extension[BeExtPseudonymization].extension[marker].valueBoolean = true
* parameter[=].valueString.extension[BeExtPseudonymization].extension[format].valueCode = #encrypted
* parameter[=].valueString.extension[BeExtPseudonymization].extension[version].valuePositiveInt = 1
* parameter[+].name = "version"
* parameter[=].valueString = "1.0.0"

---

File: repos/hl7-be_SLASH_infsec/input/fsh/instances/patient1.fsh

Instance: patient1
InstanceOf: Patient
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2019-07-01T13:30:55.864+00:00"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/patient-birthPlace"
* extension[=].valueAddress.extension.url = "http://hl7.org/fhir/StructureDefinition/language"
* extension[=].valueAddress.extension.valueCode = #nl
* extension[=].valueAddress.city = "Namen"
* extension[=].valueAddress.country = "BE"
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/patient-nationality"
* extension[=].extension.url = "code"
* extension[=].extension.valueCodeableConcept = $cd-fed-country#BE "Belgium"
* extension[+].url = "https://www.ehealth.fgov.be/standards/fhir/infsec/StructureDefinition/be-ext-intended-profile"
* extension[=].valueCanonical = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-patient|2.1.0"
* identifier[0].use = #official
* identifier[=].type = $v2-0203#SB "Social Beneficiary Identifier"
* identifier[=].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* identifier[=].value = "OZADJVppdeQzwgvAUjQNaLvuf94ulY6iDgeip7iSHAW7TNrDBa0XMGeS6G3s/HWLSQ4eirpcox28GghzbtaiUzg=.UPOBi75XsreuYfQwyVvIaHgpzrrdS6joS8JaPlkMPxeU8FmFHRtteJp/FAq91pEllcbH4V4PRSC+QEm0C9thkO4="
* identifier[=].value.extension[BeExtPseudonymization].extension[marker].valueBoolean = true
* identifier[+].use = #usual
* identifier[=].type = $v2-0203#MR "Medical record number"
* identifier[=].system = "https://www.goodhealthhospital.be/standards/fhir/NamingSystem/patientrecord"
* identifier[=].value = "45XXP0PA-4"
* active = true
* name.use = #official
* name.family = "La Paradisio"
* name.given[0] = "Josephine"
* name.given[+] = "Nessa"
* telecom[0].system = #email
* telecom[=].value = "nessa.laparadisio@belgium.be"
* telecom[+].system = #phone
* telecom[=].value = "+322476792979"
* telecom[=].use = #mobile
* telecom[+].system = #phone
* telecom[=].value = "+3226718655"
* telecom[=].use = #home
* telecom[+].system = #phone
* telecom[=].value = "+322476799"
* telecom[=].use = #work
* gender = #female
* birthDate = "1979-12-11"
* birthDate.extension.url = "http://hl7.org/fhir/StructureDefinition/patient-birthTime"
* birthDate.extension.valueDateTime = "1979-12-11T13:28:17-05:00"
* address[0].extension.url = "http://hl7.org/fhir/StructureDefinition/language"
* address[=].extension.valueCode = #nl
* address[=].use = #home
* address[=].type = #both
* address[=].text = "Sloordelle 42, 1160 Oudergem"
* address[=].line = "Sloordelle 42"
* address[=].line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address[=].line.extension[=].valueString = "Sloordelle"
* address[=].line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address[=].line.extension[=].valueString = "42"
* address[=].city = "Oudergem"
* address[=].postalCode = "1160"
* address[=].country = "BE"
* address[+].extension.url = "http://hl7.org/fhir/StructureDefinition/language"
* address[=].extension.valueCode = #fr
* address[=].use = #home
* address[=].type = #both
* address[=].text = "42, Allee des Colzas, 1160 Auderghem"
* address[=].line = "42, Allee des Colzas"
* address[=].line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address[=].line.extension[=].valueString = "Allee des Colzas"
* address[=].line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address[=].line.extension[=].valueString = "42"
* address[=].city = "Auderghem"
* address[=].postalCode = "1160"
* address[=].country = "BE"
* address[+].use = #work
* address[=].type = #both
* address[=].text = "377, Avenue Prince d'Orange, 1420 Braine-lʼAlleud"
* address[=].line = "377, Avenue Prince d'Orange"
* address[=].line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address[=].line.extension[=].valueString = "Avenue Prince d'Orange"
* address[=].line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address[=].line.extension[=].valueString = "377"
* address[=].city = "Braine-lʼAlleud"
* address[=].postalCode = "1420"
* address[=].country = "BE"
* maritalStatus.coding[0] = $v3-MaritalStatus#D "Divorced"
* maritalStatus.coding[+] = $cd-civilstate#41 "Divorced since 1/10/1994"
* contact.relationship.coding[0] = $v2-0131#N "Next-of-Kin"
* contact.relationship.coding[+] = $cd-contact-person#mother
* contact.name.family = "Vogels"
* contact.name.given = "Leia"
* contact.telecom.system = #phone
* contact.telecom.value = "+31201234567"
* contact.telecom.use = #mobile


---

File: repos/hl7-be_SLASH_infsec/input/fsh/instances/patient2.fsh

Instance: patient2
InstanceOf: Patient
Usage: #example
* meta.extension[+].url = "https://www.ehealth.fgov.be/standards/fhir/infsec/StructureDefinition/be-ext-key-pseudonymization"
* meta.extension[=].id = "fcc557e7-40fa-4fde-b802-12a461cd176f"
* meta.extension[=].extension[+].url = "key"
* meta.extension[=].extension[=].valueString = "urn:be:fgov:pseudo:v2:OZADJVppdeQzwgvAUjQNaLvuf94ulY6iD:OZADJVppdeQzwgvAUjQNaLvuf94ulY6iDgeip7iSHAW7TNrDBa0XMGeS6G3s/HWLSQ4eirpcox28GghzbtaiUzg=.UPOBi75XsreuYfQwyVvIaHgpzrrdS6joS8JaPlkMPxeU8FmFHRtteJp/FAq91pEllcbH4V4PRSC+QEm0C9thkO4="
* meta.extension[=].extension[=].valueString.extension[BeExtPseudonymization].extension[marker].valueBoolean = true
* meta.extension[=].extension[=].valueString.extension[BeExtPseudonymization].extension[format].valueCode = #direct
* meta.extension[=].extension[=].valueString.extension[BeExtPseudonymization].extension[version].valuePositiveInt = 2
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/patient-birthPlace"
* extension[=].valueAddress.extension.url = "http://hl7.org/fhir/StructureDefinition/language"
* extension[=].valueAddress.extension.valueCode = #nl
* extension[=].valueAddress.city = "Namen"
* extension[=].valueAddress.country = "BE"
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/patient-nationality"
* extension[=].extension.url = "code"
* extension[=].extension.valueCodeableConcept = $cd-fed-country#BE "Belgium"
* extension[+].url = "https://www.ehealth.fgov.be/standards/fhir/infsec/StructureDefinition/be-ext-intended-profile"
* extension[=].valueCanonical = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-patient|2.1.0"
* identifier[0].use = #official
* identifier[=].type = $v2-0203#SB "Social Beneficiary Identifier"
* identifier[=].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* identifier[=].value = "urn:be:fgov:pseudo:v1:OZADJVppdeQzwgvAUjQNaLvuf94ulY6iDgeip7iSHAW7TNrDBa0XMGeS6G3s/HWLSQ4eirpcox28GghzbtaiUzg=.UPOBi75XsreuYfQwyVvIaHgpzrrdS6joS8JaPlkMPxeU8FmFHRtteJp/FAq91pEllcbH4V4PRSC+QEm0C9thkO4="
* identifier[=].value.extension[BeExtPseudonymization].extension[marker].valueBoolean = true
* identifier[+].use = #usual
* identifier[=].type = $v2-0203#MR "Medical record number"
* identifier[=].system = "https://www.goodhealthhospital.be/standards/fhir/NamingSystem/patientrecord"
* identifier[=].value = "45XXP0PA-4"
* active = true
* name.use = #official
* name.family = "La Paradisio"
* name.given[0] = "Josephine"
* name.given[+] = "Nessa"
* telecom[0].system = #email
* telecom[=].value = "nessa.laparadisio@belgium.be"
* telecom[+].system = #phone
* telecom[=].value = "+322476792979"
* telecom[=].use = #mobile
* telecom[+].system = #phone
* telecom[=].value = "+3226718655"
* telecom[=].use = #home
* telecom[+].system = #phone
* telecom[=].value = "+322476799"
* telecom[=].use = #work
* gender = #female
* birthDate = "1979-12-11"
* birthDate.extension.url = "http://hl7.org/fhir/StructureDefinition/patient-birthTime"
* birthDate.extension.valueDateTime = "1979-12-11T13:28:17-05:00"
* address[0].extension.url = "http://hl7.org/fhir/StructureDefinition/language"
* address[=].extension.valueCode = #nl
* address[=].use = #home
* address[=].type = #both
* address[=].text = "Sloordelle 42, 1160 Oudergem"
* address[=].line = "Sloordelle 42"
* address[=].line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address[=].line.extension[=].valueString = "Sloordelle"
* address[=].line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address[=].line.extension[=].valueString = "42"
* address[=].city = "Oudergem"
* address[=].postalCode = "1160"
* address[=].country = "BE"
* address[+].extension.url = "http://hl7.org/fhir/StructureDefinition/language"
* address[=].extension.valueCode = #fr
* address[=].use = #home
* address[=].type = #both
* address[=].text = "42, Allee des Colzas, 1160 Auderghem"
* address[=].line = "42, Allee des Colzas"
* address[=].line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address[=].line.extension[=].valueString = "Allee des Colzas"
* address[=].line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address[=].line.extension[=].valueString = "42"
* address[=].city = "Auderghem"
* address[=].postalCode = "1160"
* address[=].country = "BE"
* address[+].use = #work
* address[=].type = #both
* address[=].text = "urn:be:fgov:pseudo-encrypted:v1:fcc557e7-40fa-4fde-b802-12a461cd176f:OZADJVppdeQzwgvAUjQNaLvuf94ulY6iDgeip7iSHAW7TNrDBa0XMGeS6G3s/HWLSQ4eirpcox28GghzbtaiUzg=.UPOBi75XsreuYfQwyVvIaHgpzrrdS6joS8JaPlkMPxeU8FmFHRtteJp/FAq91pEllcbH4V4PRSC+QEm0C9thkO4="
* address[=].text.extension[BeExtPseudonymization].extension[marker].valueBoolean = true
* address[=].text.extension[BeExtPseudonymization].extension[format].valueCode = #encrypted
* address[=].text.extension[BeExtPseudonymization].extension[version].valuePositiveInt = 1
* address[=].line = "377, Avenue Prince d'Orange"
* address[=].line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address[=].line.extension[=].valueString = "Avenue Prince d'Orange"
* address[=].line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address[=].line.extension[=].valueString = "377"
* address[=].city = "Braine-lʼAlleud"
* address[=].postalCode = "1420"
* address[=].country = "BE"
* maritalStatus.coding[0] = $v3-MaritalStatus#D "Divorced"
* maritalStatus.coding[+] = $cd-civilstate#41 "Divorced since 1/10/1994"
* contact.relationship.coding[0] = $v2-0131#N "Next-of-Kin"
* contact.relationship.coding[+] = $cd-contact-person#mother
* contact.name.family = "Vogels"
* contact.name.given = "Leia"
* contact.telecom.system = #phone
* contact.telecom.value = "+31201234567"
* contact.telecom.use = #mobile


---

File: repos/hl7-be_SLASH_infsec/input/fsh/invariants/BeInvUrlAndVersionCanonical.fsh

Invariant: BeInvUrlAndVersionCanonical
Description: "Both the canonical and the version will be present"
Severity: #error
Expression: "Extension.value.toString().contains('|')"

---

File: repos/hl7-be_SLASH_infsec/input/fsh/valueset/BeVSPseudonymizationType.fsh

ValueSet: BeVSPseudonymizationType
Id: be-vs-pseudonymization-type
Title: "Types of pseudonymization"
Description: "The technique used for pseudonymization"
* ^experimental = false
* include codes from system BeCSPseudonymizationType

---

File: repos/hl7-be_SLASH_infsec/input/fsh/aliases.fsh

Alias: $v3-NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: $v3-ActReason = http://terminology.hl7.org/CodeSystem/v3-ActReason
Alias: $sct = http://snomed.info/sct
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $cd-hcparty = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-hcparty
Alias: $v3-DataOperation = http://terminology.hl7.org/CodeSystem/v3-DataOperation
Alias: $provenance-participant-type = http://terminology.hl7.org/CodeSystem/provenance-participant-type
Alias: $loinc = http://loinc.org
Alias: $cvx = http://hl7.org/fhir/sid/cvx
Alias: $immunization-recommendation-status = http://terminology.hl7.org/CodeSystem/immunization-recommendation-status
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $my-own-custom-codes = http://my-own-custom-codes
Alias: $cd-fed-country = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-fed-country
Alias: $v3-MaritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $cd-civilstate = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-civilstate
Alias: $v2-0131 = http://terminology.hl7.org/CodeSystem/v2-0131
Alias: $cd-contact-person = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-contact-person
Alias: $consentscope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $be-cs-patientwill-category = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/be-cs-patientwill-category
Alias: $be-cs-patientwill-code = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/be-cs-patientwill-code
Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $condition-ver-status = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $v3-ObservationInterpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation
Alias: $m49.htm = http://unstats.un.org/unsd/methods/m49/m49.htm
Alias: $vitalsigns = http://hl7.org/fhir/StructureDefinition/vitalsigns
Alias: $language = http://hl7.org/fhir/StructureDefinition/language
Alias: $iso21090-ADXP-streetName = http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName
Alias: $iso21090-ADXP-houseNumber = http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber
Alias: $iso21090-ADXP-postBox = http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox
Alias: $patient-nationality = http://hl7.org/fhir/StructureDefinition/patient-nationality
Alias: $patient-birthPlace = http://hl7.org/fhir/StructureDefinition/patient-birthPlace
Alias: $patient-birthTime = http://hl7.org/fhir/StructureDefinition/patient-birthTime
Alias: $be-civilstate = https://www.ehealth.fgov.be/standards/fhir/core/ValueSet/be-civilstate
Alias: $be-contactperson = https://www.ehealth.fgov.be/standards/fhir/core/ValueSet/be-contactperson
Alias: $be-vs-score = https://www.ehealth.fgov.be/standards/fhir/core/ValueSet/be-vs-score

---

File: repos/hl7-be_SLASH_infsec/input/pagecontent/guidance.md

### The use of pseudonymisation in FHIR

Pseudonymisation is the activity of replacing meaningful data with a synonym that hides the original data, but when needed this synonym can be replaced by the original data. The aim is to hide data from readers that do not need it, due to legal (GDPR) or other reasons, but still allow the links between different data elements for those who need it. Additional encryption techniques may be used to restrict the access to the information to those who need it.

Detailed explanation about the pseudonymisation techniques used in this solution can be found here. 
* [https://www.ehealth.fgov.be/ehealthplatform/fr/service-codage-anonymisation-et-ttp](https://www.ehealth.fgov.be/ehealthplatform/fr/service-codage-anonymisation-et-ttp)
* [https://www.ehealth.fgov.be/ehealthplatform/nl/service-codering-anonimisering-en-ttp](https://www.ehealth.fgov.be/ehealthplatform/nl/service-codering-anonimisering-en-ttp)


This solution only applies for short texts, i.e. text that fall within the length of the EC key. The solution for longer texts will be described in a subsequent document.

#### Prerequisites:

* Pseudonymised fields must be recognized as such.
* Pseudonymisation of fields should have no impact on the validation of the document, as there is no semantic difference between a pseudonymised and a non-pseudonymised document.
* Pseudonymisation should interfere as little as possible with the standard FHIR APIs for searching information, without endangering the essence of pseudonymisation.
* Pseudonymisation should be as coherent as possible, so that the developer can (re)use the same techniques whenever he encounters pseudonymisation.

#### The solution for short texts, less than 32 bytes:

* Within the FHIR document, a pseudonymised value will be marked by an extension. This extension is applicable to any text field (string).
* The original value of the string will be replaced by the pseudonym. This pseudonym can take following forms:
   - {base64 json string, containing x, y, and transitInfo}
   - urn:be:fgov:pseudo:v1:{base64 json string, containing x, y, and transitInfo}
   - urn:be:fgov:pseudo:v2:{SEC1}:{transitInfo} - this type of encoding prevents the double Base64 encoding in v1. See the annexes of the Blinded Pseudonymization Cookbook for more info.

* The extension will have following fields:
   - marker: true (mandatory), indicates that this field is a pseudonym.
   - format: direct|encrypted (optional) default is direct
      + direct indicates that the field is an immediate result of the pseudonymization service
      + encrypted see below for texts larger than 32 bytes. 
   - version: no version defaults to 1. If the version is different from 1, it is mandatory.
* Searching on a pseudonymised field will be done using the normal search parameter. The fact that this search parameter contains a pseudonym will be indicated by a urn-style prefix. The pseudonym will be represented by the same way as described in item 2. "urn:be:fgov:pseudo-encrypted:" fields cannot be used in a search, if the search parameters are not available as a resource.
* Depending on the need of the implementing server, and the length of the query string, the implementing server will be able to use both GET and POST to execute the search, according to the FHIR specifications. The use of POST might be necessary in case of the combination of several pseudonymised search parameters in one query string.

Example of a json containing a pseudonym, before the application of the base64 encoding:

```
{
   "x": "AUHWy0LqOxFe6T5dL6x97ygKzukuS+Q6jvqGwxaahWR7XNGh/tdUKNj82Ozhl/gOsoqrGtlUAI/XbZqKKmdZ5zuH",
   "y": "AbFTfZ8vaitgHSmOQr7DTMjdgHXVe9J+BJqtBurDxeICNJA4ho/+scwVKIiWgjA1v0Xx2pb8fGPH8Kp0tjWyEYh1",
   "transitInfo": "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwia2lkIjoiNzQ5YjhlZjUtZjQwMS00NDc2LWIyNDMtYzFiZjIxY2MzZWE4IiwiYXVkIjoiaHR0cHM6Ly9hcGktaW50cmMuZWhlYWx0aC5mZ292LmJlL3BzZXVkby92MS9kb21haW5zL2RvbWFpbmFfdjEifQ..thFZVzwXff8HuxBY.fI8p0EdY1HNuzBP7Vb8AYldoCb1dgkLc5HunHkfTmkJc4H1dzgQ8LBbnBaIPmWFI2DgoPCpFNGqW8ucMYF4dC12l-IGDZv30SGv4RI4qppq_uiR8ik1N_psJSEptDIWsruBicXnNwYy22CHvaIy8-HGq2z6wlrNVgmZEsXqusCEeTIB0Udik.arPBjcRK8geT6aSElM7D0g"
}
```

The resulting value will put in the original field.

If you want to use the pseudonym for searching, you take the resulting value, and you prefix it with:

```
urn:be:fgov:ehealth:pseudo:v1:
```
or 

```
urn:be:fgov:ehealth:pseudo:v2:
```
depending on the type of pseudonymization you are using. Beware that you can only use the long text solution (urn:be:fgov:pseudo-encrypted:) in searches if the body of the query request contains a FHIR resource that can handle the pseudonymized key.


The resulting value will look like this:
```
urn:be:fgov:ehealth:pseudo:v1:eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwia2lkIjoiMjAyMi0xMi... 

```

#### The solution for long texts, larger than 32 bytes:

* Within the FHIR document, a pseudonymised value will be marked by an extension. This extension is applicable to any text field (string).
* The original value of the string will be replaced by the pseudonym. This pseudonym can take following forms:
   - urn:be:fgov:pseudo-encrypted:v1:{KID}:{JWE}
* The extension will have following fields:
   - marker: true (mandatory), indicates that this field is a pseudonym.
   - format: direct or encrypted (optional), default is direct
      +  direct see above for texts less than 32 bytes
      + encrypted indicates that the field is encrypted with a key you can find in the .meta section of the resource, in the extension with url "https://www.ehealth.fgov.be/standards/fhir/infsec/StructureDefinition/be-ext-key-pseudonymization". 
   - version: no version defaults to 1. If the version is different from 1, it is mandatory.
* In each resource of the document, you will add an extension with url "https://www.ehealth.fgov.be/standards/fhir/infsec/StructureDefinition/be-ext-key-pseudonymization"
   - This extension contains one extension containing a string value, with url "key". This is the encryption key that can be used to blockcipher the long text fields. The key is 32 bytes or less, so direct pseudonymization applies.
   - This .valueString field is pseudonymized in the direct way, using a pseudonymize extension for short texts. 

#### Content negotiation for pseudonymisation in FHIR

As clients and servers may have different capabilities with regard to the support of pseudonymisation representations, both clients and servers can express their capabilities and conduct negotiations regarding the pseudonymisation representations to be used.

The client will be able to express his preferences by using the Accept-Be-Pseudo HTTP header. This header SHALL contain a comma separated list of the prefix values as described above.

```
Accept-Be-Pseudo: urn:be:fgov:ehealth:pseudo:v1, urn:be:fgov:ehealth:pseudo:v2, urn:be:fgov:pseudo-encrypted:v1
```
This header has been designed according to the guidelines in [RFC 6648](https://www.rfc-editor.org/rfc/rfc6648)

If the header is not present in the request, the server will default to the lowest version supported as indicated in the capabilities statement (see further).

The server will indicate the version of pseudonymisation used using the Content-Be-Pseudo header.

```
Content-Be-Pseudo: urn:be:fgov:ehealth:pseudo:v2, urn:be:fgov:pseudo-encrypted:v1
```
This header is only an suggestion, and the indications in the FHIR resource itself always take precedence over the value in the header. If the header is missing, and there is no conclusive evidence (taking into account the described defaults), the value defaults to the lowest supported version in the capabilities statement.

The server has the opportunity to indicate its preferred use of pseudonymisation in the capabilities statement, as one or more ``rest.security.service`` codeable concepts from CodeSystem [be-cs-pseudonymization-version](./CodeSystem-be-cs-pseudonymization-version.html). The client is supposed, as in [good fhir practice](https://www.hl7.org/fhir/R4/http.html#capabilities), to request the capabilities statement of the server, to check the type of pseudonymisation that is expected. If no explicit pseudonymisation representation is present, the client can try to use his own preference, but must be prepared to accept a refusal in the form of a 422 Error Code. In general, sending pseudonymised content to a server that is not capable of handling it, will provoke undefined behaviour with regard to the pseudonymisation definition.

During the pseudonymisation content negotiation, the client and server should choose the highest version that is supported by both client and server. Versions will be ordered by using the ordering rules of positive integers. 

### Ensuring computable integrity clarifying the use of meta.profile and semantic integrity by using the BeExtIntendedProfile extension

#### Prerequisites:

* There is an absolute need for computable integrity of the stored resource/document. Changes to a stored document by someone who is not a practitioner, be it a system or a technician, are not possible, because this would break the computable integrity. The breaking of the computable integrity has serious legal and business implications.
* There is an absolute need for semantic integrity. Research revealed that semantic integrity cannot be maintained without making the profile and profile version an integral part of the resource/document. The breaking of semantic integrity can have serious medical, and thus legal consequences.


#### The solution:

These two requirements lead to the following consequences:

* The need for computable integrity entails that all resources/documents will be delivered as they were stored. A vault will support all possible versions of a profile, as they can be applied to a stored resource/document for delivery.
* For economic reasons, a vault will accept a limited number of profiles for storage. Ideally, they will only support one version of the profile, but to support a smooth transition between profile versions, they can also accept the previous version for a limited time. Resources with older versions of profiles will remain in storage as they are.
* The need for semantic integrity entails that the profile and its version that express the intent of the sender shall be an integral part of the resource/document. Current FHIR best practices (02/10/2023) discourage the use of profiles and versions of profiles in the meta.profile section of the resource, certainly in a mandatory way. Therefore the vaults introduce a Belgian extension that will contain the (only 1)  profile and version as intended by the sender. A resource/document which does not contain the extension will not be accepted by the vault.
* The vault will give priority to the profile and version stored in the extension for the validation before the storage in the vault. With regard to other profiles present in the meta.profile storage, they will be handled according to the normal FHIR validation rules, and if the resource does not comply with one of them, the resource will also be invalid. Normal validation rules imply that the versions of the profile that are supported are indicated in the servers capability statement to avoid all ambiguity.
* Any information in the meta section of the resource is a part of the computable integrity of the resource. As a Provenance resource is not an integral part of the resource it is about, it is not sufficient to prove the computable integrity of the resource. 

To conclude, it is clear that systems that do not have the absolute need for computable integrity and semantic integrity, can adopt other rules. However, these other choices will never imply that they will be allowed to store their resources/documents in a vault, without complying with the rules above.

#### Additional comments

* If new extensions are added to a profile, and searches are executed against the new extension, the resource will be regarded as such, so instances which do not contain the extra information will not be returned, unless explicitly requested in the query. This means that stored resources will not be modified to contain default values.

* Upon the storage of a resource in the vault, a means will be made available check the computational integrity of the resource.

#### References

Following sources were used in the draughting of these rules:

Discussion on chat.fhir.org about how to define the integrity of a message and the use of meta.profile:
https://chat.fhir.org/#narrow/stream/179247-Security-and-Privacy/topic/Progress.20on.20digital.20signatures.20and.20integrity

Discussion on chat.fhir.org about how to manage different versions of profiles: https://chat.fhir.org/#narrow/stream/179166-implementers/topic/Capturing.20multiple.20business.20versions.20supported

Discussion on chat.fhir.org about the meaning of versionless profile references:
https://chat.fhir.org/#narrow/stream/179166-implementers/topic/Profile.20versions.20in.20a.20resource

Definition of the Canonical datatype, used to indicate the profile and its version:
https://www.hl7.org/fhir/r4/datatypes.html#canonical

Description of the use of Canonicals:
https://www.hl7.org/fhir/r4/references.html#canonical

Description of versioning in the R4 standard:
https://www.hl7.org/fhir/R4/versioning.html


---

