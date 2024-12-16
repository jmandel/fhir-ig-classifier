File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/fsh/CapabilityStatement-FHIRServer-RDSC.fsh

Instance: FHIRServer-RDSC
InstanceOf: CapabilityStatement
Usage: #definition
Description: "Capability Statement needed to be supported by a FHIR Server in order to respond to RDSC Actor with the Radiation Summary Report option."
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension.valueCode = #ii
* name = "FHIRServer_RDSC"
* title = "FHIR Server supporting FHIR operations in order to interact with RDSC Actor"
* date = "2021-06-28"
* kind = #requirements
* description = "Defines the operations requirements for FHIR server interacting with RDSC actor"
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1
* status = #draft 

* implementationGuide = "http://hl7.org/fhir/uv/radiation-dose-summary/ImplementationGuide/hl7.fhir.uv.radiation-dose-summary"

* rest[0].mode = #server
* rest[0].documentation = "Description of the needed resources to be supported by the FHIR server, and the different possible interactions."

* rest[0].interaction[0].code = #transaction
* rest[0].interaction[1].code = #search-system


// Patient resource support
* rest[0].resource[0].type = #Patient
* rest[0].resource[0].documentation = "Read patient information."
* rest[0].resource[0].interaction[0].code = #read
* rest[0].resource[0].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].interaction[0].extension.valueCode = #SHALL

// Practitioner resource support
* rest[0].resource[1].type = #Practitioner
* rest[0].resource[1].documentation = "Read practitioner information." 
* rest[0].resource[1].interaction[0].code = #read
* rest[0].resource[1].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[0].extension.valueCode = #SHALL

// ImagingStudy resource support
* rest[0].resource[2].type = #ImagingStudy
* rest[0].resource[2].documentation = "Read ImagingStudy information." 
* rest[0].resource[2].interaction[0].code = #read
* rest[0].resource[2].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].interaction[0].extension.valueCode = #SHALL

// Device resource support
* rest[0].resource[3].type = #Device
* rest[0].resource[3].documentation = "Read Device information." 
* rest[0].resource[3].interaction[0].code = #read
* rest[0].resource[3].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].interaction[0].extension.valueCode = #SHALL

// Radiation Summary resource support
* rest[0].resource[4].type = #Observation
* rest[0].resource[4].documentation = "Search and read of Radiation Summary observations shall be supported." 
* rest[0].resource[4].interaction[0].code = #read
* rest[0].resource[4].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].interaction[0].extension.valueCode = #SHALL
* rest[0].resource[4].interaction[1].code = #search-type
* rest[0].resource[4].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].interaction[1].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[0].name = "identifier"
* rest[0].resource[4].searchParam[0].type = #token
* rest[0].resource[4].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[0].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[1].name = "code"
* rest[0].resource[4].searchParam[1].type = #token
* rest[0].resource[4].searchParam[1].documentation = "Search based on identifiers of radiation dose summary like Accession Number"
* rest[0].resource[4].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[1].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[2].name = "patient"
* rest[0].resource[4].searchParam[2].type = #reference
* rest[0].resource[4].searchParam[2].documentation = "Search based on patient identifier"
* rest[0].resource[4].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[2].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[3].name = "device"
* rest[0].resource[4].searchParam[3].type = #token
* rest[0].resource[4].searchParam[3].documentation = "Search based on modality identifiers"
* rest[0].resource[4].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[3].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[4].name = "part-of"
* rest[0].resource[4].searchParam[4].type = #reference
* rest[0].resource[4].searchParam[4].documentation = "Search based on ImagingStudy"
* rest[0].resource[4].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[4].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[5].name = "date"
* rest[0].resource[4].searchParam[5].type = #date
* rest[0].resource[4].searchParam[5].documentation = "Search based on Radiation Summary effective dateTime, can be used to search for radiation through a period of time"
* rest[0].resource[4].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[5].extension.valueCode = #SHALL

* document[0].mode = #consumer
* document[0].documentation = "Documents related to Radiation Summary Report profile."
* document[0].profile = "http://hl7.org/fhir/uv/radiation-dose-summary/StructureDefinition/radiation-summary-report"



---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/fsh/CapabilityStatement-FHIRServer-RDSP.fsh

Instance: FHIRServer-RDSP
InstanceOf: CapabilityStatement
Usage: #definition
Description: "Minimal Capability Statement needed to be supported by a FHIR Server in order to integrate resources from RDSP Actor"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension[0].valueCode = #ii
* name = "FHIRServer_RDSP"
* title = "FHIR Server supporting FHIR operations in order to interact with RDSP Actor"
* date = "2021-06-28"
* kind = #requirements
* description = "Defines the operations requirement for FHIR server interacting with RDSP actor"
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1
* status = #draft 

* implementationGuide = "http://hl7.org/fhir/uv/radiation-dose-summary/ImplementationGuide/hl7.fhir.uv.radiation-dose-summary"

* rest[0].mode = #server
* rest[0].documentation = "Description of the needed resources to be supported by the FHIR server, and the different possible interactions."

* rest[0].interaction[0].code = #transaction
* rest[0].interaction[1].code = #search-system

// Patient resource support
* rest[0].resource[0].type = #Patient
* rest[0].resource[0].documentation = "Search on patients needs to be available on FHIR server, and patient create can be activated based on the covered use case."
* rest[0].resource[0].interaction[0].code = #create
* rest[0].resource[0].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].interaction[0].extension.valueCode = #MAY
* rest[0].resource[0].interaction[1].code = #read
* rest[0].resource[0].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].interaction[1].extension.valueCode = #SHOULD
* rest[0].resource[0].interaction[2].code = #search-type
* rest[0].resource[0].interaction[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].interaction[2].extension.valueCode = #SHALL

* rest[0].resource[0].searchParam[0].name = "identifier"
* rest[0].resource[0].searchParam[0].type = #token
* rest[0].resource[0].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[0].extension.valueCode = #SHALL

* rest[0].resource[0].searchParam[1].name = "family"
* rest[0].resource[0].searchParam[1].type = #string
* rest[0].resource[0].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[1].extension.valueCode = #SHOULD

* rest[0].resource[0].searchParam[1].name = "given"
* rest[0].resource[0].searchParam[1].type = #string
* rest[0].resource[0].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[1].extension.valueCode = #SHOULD

// Practitioner resource support
* rest[0].resource[1].type = #Practitioner
* rest[0].resource[1].documentation = "Search on practitioner shall be supported." 
* rest[0].resource[1].interaction[0].code = #create
* rest[0].resource[1].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[0].extension.valueCode = #MAY
* rest[0].resource[1].interaction[1].code = #read
* rest[0].resource[1].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[1].extension.valueCode = #SHOULD
* rest[0].resource[1].interaction[2].code = #search-type
* rest[0].resource[1].interaction[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[2].extension.valueCode = #SHALL

* rest[0].resource[1].searchParam[0].name = "identifier"
* rest[0].resource[1].searchParam[0].type = #token
* rest[0].resource[1].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[0].extension.valueCode = #SHALL

* rest[0].resource[1].searchParam[1].name = "family"
* rest[0].resource[1].searchParam[1].type = #string
* rest[0].resource[1].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[1].extension.valueCode = #SHOULD

* rest[0].resource[1].searchParam[1].name = "given"
* rest[0].resource[1].searchParam[1].type = #string
* rest[0].resource[1].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[1].extension.valueCode = #SHOULD

// ImagingStudy resource support
* rest[0].resource[2].type = #ImagingStudy
* rest[0].resource[2].documentation = "Search on ImagingStudy shall be supported." 
* rest[0].resource[2].interaction[0].code = #create
* rest[0].resource[2].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].interaction[0].extension.valueCode = #MAY
* rest[0].resource[2].interaction[1].code = #read
* rest[0].resource[2].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].interaction[1].extension.valueCode = #SHOULD
* rest[0].resource[2].interaction[2].code = #search-type
* rest[0].resource[2].interaction[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].interaction[2].extension.valueCode = #SHALL

* rest[0].resource[2].searchParam[0].name = "identifier"
* rest[0].resource[2].searchParam[0].type = #token
* rest[0].resource[2].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[0].extension.valueCode = #SHALL

* rest[0].resource[2].searchParam[0].name = "patient"
* rest[0].resource[2].searchParam[0].type = #reference
* rest[0].resource[2].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[0].extension.valueCode = #MAY

// Device resource support
* rest[0].resource[3].type = #Device
* rest[0].resource[3].documentation = "Search on Device shall be supported." 
* rest[0].resource[3].interaction[0].code = #create
* rest[0].resource[3].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].interaction[0].extension.valueCode = #MAY
* rest[0].resource[3].interaction[1].code = #read
* rest[0].resource[3].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].interaction[1].extension.valueCode = #SHOULD
* rest[0].resource[3].interaction[2].code = #search-type
* rest[0].resource[3].interaction[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].interaction[2].extension.valueCode = #SHALL

* rest[0].resource[3].searchParam[0].name = "identifier"
* rest[0].resource[3].searchParam[0].type = #token
* rest[0].resource[3].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[0].extension.valueCode = #SHALL

* rest[0].resource[3].searchParam[0].name = "type"
* rest[0].resource[3].searchParam[0].type = #token
* rest[0].resource[3].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[0].extension.valueCode = #MAY

* rest[0].resource[3].searchParam[0].name = "manufacturer"
* rest[0].resource[3].searchParam[0].type = #token
* rest[0].resource[3].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[0].extension.valueCode = #MAY

// Radiation Summary resource support
* rest[0].resource[4].type = #Observation
* rest[0].resource[4].documentation = "Create of Radiation Summary observations shall be supported." 
* rest[0].resource[4].interaction[0].code = #create
* rest[0].resource[4].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].interaction[0].extension.valueCode = #SHALL
* rest[0].resource[4].interaction[1].code = #read
* rest[0].resource[4].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].interaction[1].extension.valueCode = #SHOULD
* rest[0].resource[4].interaction[2].code = #search-type
* rest[0].resource[4].interaction[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].interaction[2].extension.valueCode = #SHOULD

* rest[0].resource[4].searchParam[0].name = "identifier"
* rest[0].resource[4].searchParam[0].type = #token
* rest[0].resource[4].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[0].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[1].name = "patient"
* rest[0].resource[4].searchParam[1].type = #reference
* rest[0].resource[4].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[1].extension.valueCode = #SHOULD

* rest[0].resource[4].searchParam[2].name = "code"
* rest[0].resource[4].searchParam[2].type = #token
* rest[0].resource[4].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[2].extension.valueCode = #SHALL

---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/fsh/CapabilityStatement-FHIRServer.fsh

Instance: FHIRServer
InstanceOf: CapabilityStatement
Usage: #definition
Description: "Capability Statement needed to be supported by a FHIR Server in order to support all options and interactions with RDSC and RDSP actors."
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension.valueCode = #ii
* name = "RDSC_FHIRServer"
* title = "FHIR Server supporting FHIR operations in order to interact with RDSC and RDSP Actors"
* date = "2021-06-28"
* kind = #requirements
* description = "Defines the operations requirement for FHIR server actor"
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1
* status = #draft 

* implementationGuide = "http://hl7.org/fhir/uv/radiation-dose-summary/ImplementationGuide/hl7.fhir.uv.radiation-dose-summary"

* rest[0].mode = #server
* rest[0].documentation = "Description of the needed resources to be supported by the FHIR server, and the different possible interactions."

* rest[0].interaction[0].code = #transaction
* rest[0].interaction[1].code = #search-system


// Patient resource support
* rest[0].resource[0].type = #Patient
* rest[0].resource[0].documentation = "Search and Read of patient needs to be available on FHIR server, and patient create can be activated based on the covered use case."
* rest[0].resource[0].profile = "" 
* rest[0].resource[0].interaction[0].code = #create
* rest[0].resource[0].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].interaction[0].extension.valueCode = #MAY
* rest[0].resource[0].interaction[1].code = #read
* rest[0].resource[0].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].interaction[1].extension.valueCode = #SHALL
* rest[0].resource[0].interaction[2].code = #search-type
* rest[0].resource[0].interaction[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].interaction[2].extension.valueCode = #SHALL

* rest[0].resource[0].searchParam[0].name = "identifier"
* rest[0].resource[0].searchParam[0].type = #token
* rest[0].resource[0].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[0].extension.valueCode = #SHALL

* rest[0].resource[0].searchParam[1].name = "family"
* rest[0].resource[0].searchParam[1].type = #string
* rest[0].resource[0].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[1].extension.valueCode = #SHOULD

* rest[0].resource[0].searchParam[1].name = "given"
* rest[0].resource[0].searchParam[1].type = #string
* rest[0].resource[0].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[1].extension.valueCode = #SHOULD

// Practitioner resource support
* rest[0].resource[1].type = #Practitioner
* rest[0].resource[1].documentation = "Search and Read of practitioner shall be supported." 
* rest[0].resource[1].profile = ""
* rest[0].resource[1].interaction[0].code = #create
* rest[0].resource[1].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[0].extension.valueCode = #MAY
* rest[0].resource[1].interaction[1].code = #read
* rest[0].resource[1].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[1].extension.valueCode = #SHALL
* rest[0].resource[1].interaction[2].code = #search-type
* rest[0].resource[1].interaction[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[2].extension.valueCode = #SHALL

* rest[0].resource[1].searchParam[0].name = "identifier"
* rest[0].resource[1].searchParam[0].type = #token
* rest[0].resource[1].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[0].extension.valueCode = #SHALL

* rest[0].resource[1].searchParam[1].name = "family"
* rest[0].resource[1].searchParam[1].type = #string
* rest[0].resource[1].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[1].extension.valueCode = #SHOULD

* rest[0].resource[1].searchParam[1].name = "given"
* rest[0].resource[1].searchParam[1].type = #string
* rest[0].resource[1].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[1].extension.valueCode = #SHOULD

// ImagingStudy resource support
* rest[0].resource[2].type = #ImagingStudy
* rest[0].resource[2].documentation = "Search and Read of ImagingStudy shall be supported." 
* rest[0].resource[2].profile = ""
* rest[0].resource[2].interaction[0].code = #create
* rest[0].resource[2].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].interaction[0].extension.valueCode = #MAY
* rest[0].resource[2].interaction[1].code = #read
* rest[0].resource[2].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].interaction[1].extension.valueCode = #SHALL
* rest[0].resource[2].interaction[2].code = #search-type
* rest[0].resource[2].interaction[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].interaction[2].extension.valueCode = #SHALL

* rest[0].resource[2].searchParam[0].name = "identifier"
* rest[0].resource[2].searchParam[0].type = #token
* rest[0].resource[2].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[0].extension.valueCode = #SHALL

* rest[0].resource[2].searchParam[0].name = "patient"
* rest[0].resource[2].searchParam[0].type = #reference
* rest[0].resource[2].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[0].extension.valueCode = #MAY

// Device resource support
* rest[0].resource[3].type = #Device
* rest[0].resource[3].documentation = "Search and Read of Device shall be supported." 
* rest[0].resource[3].profile = ""
* rest[0].resource[3].interaction[0].code = #create
* rest[0].resource[3].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].interaction[0].extension.valueCode = #MAY
* rest[0].resource[3].interaction[1].code = #read
* rest[0].resource[3].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].interaction[1].extension.valueCode = #SHALL
* rest[0].resource[3].interaction[2].code = #search-type
* rest[0].resource[3].interaction[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].interaction[2].extension.valueCode = #SHALL

* rest[0].resource[3].searchParam[0].name = "identifier"
* rest[0].resource[3].searchParam[0].type = #token
* rest[0].resource[3].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[0].extension.valueCode = #SHALL

* rest[0].resource[3].searchParam[0].name = "type"
* rest[0].resource[3].searchParam[0].type = #token
* rest[0].resource[3].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[0].extension.valueCode = #MAY

* rest[0].resource[3].searchParam[0].name = "manufacturer"
* rest[0].resource[3].searchParam[0].type = #token
* rest[0].resource[3].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[0].extension.valueCode = #MAY

// Radiation Summary resource support
* rest[0].resource[4].type = #Observation
* rest[0].resource[4].documentation = "Create, Search and read Radiation Summary observations shall be supported." 
* rest[0].resource[4].interaction[0].code = #create
* rest[0].resource[4].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].interaction[0].extension.valueCode = #SHALL
* rest[0].resource[4].interaction[1].code = #read
* rest[0].resource[4].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].interaction[1].extension.valueCode = #SHALL
* rest[0].resource[4].interaction[2].code = #search-type
* rest[0].resource[4].interaction[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].interaction[2].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[0].name = "identifier"
* rest[0].resource[4].searchParam[0].type = #token
* rest[0].resource[4].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[0].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[1].name = "code"
* rest[0].resource[4].searchParam[1].type = #token
* rest[0].resource[4].searchParam[1].documentation = "Search based on identifiers of radiation dose summary like Accession Number"
* rest[0].resource[4].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[1].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[2].name = "patient"
* rest[0].resource[4].searchParam[2].type = #reference
* rest[0].resource[4].searchParam[2].documentation = "Search based on patient identifier"
* rest[0].resource[4].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[2].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[3].name = "device"
* rest[0].resource[4].searchParam[3].type = #token
* rest[0].resource[4].searchParam[3].documentation = "Search based on modality identifiers"
* rest[0].resource[4].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[3].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[4].name = "part-of"
* rest[0].resource[4].searchParam[4].type = #reference
* rest[0].resource[4].searchParam[4].documentation = "Search based on ImagingStudy"
* rest[0].resource[4].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[4].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[5].name = "date"
* rest[0].resource[4].searchParam[5].type = #date
* rest[0].resource[4].searchParam[5].documentation = "Search based on Radiation Summary effective dateTime, can be used to search for radiation through a period of time"
* rest[0].resource[4].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[5].extension.valueCode = #SHALL


* document[0].mode = #consumer
* document[0].documentation = "Documents related to Radiation Summary Report profile."
* document[0].profile = "http://hl7.org/fhir/uv/radiation-dose-summary/StructureDefinition/radiation-summary-report"



---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/fsh/CapabilityStatement-RDSC.fsh

Instance: RDSC
InstanceOf: CapabilityStatement
Usage: #definition
Description: "Capability Statement needed to be supported by a RDSC actor."
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension[0].valueCode = #ii
* name = "RDSC"
* title = "RDSC Actor requirements"
* date = "2021-06-28"
* kind = #requirements
* description = "Defines the operations requirements for RDSC actor"
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1
* status = #draft 

* implementationGuide = "http://hl7.org/fhir/uv/radiation-dose-summary/ImplementationGuide/hl7.fhir.uv.radiation-dose-summary"

* rest[0].mode = #client
* rest[0].documentation = "Description of the needed resources to be supported by the RDSC actor."

* rest[0].interaction[0].code = #transaction
* rest[0].interaction[1].code = #search-system


// Patient resource support
* rest[0].resource[0].type = #Patient
* rest[0].resource[0].documentation = "Read patient information."
* rest[0].resource[0].interaction[0].code = #read
* rest[0].resource[0].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].interaction[0].extension.valueCode = #SHALL

// Practitioner resource support
* rest[0].resource[1].type = #Practitioner
* rest[0].resource[1].documentation = "Read practitioner information." 
* rest[0].resource[1].interaction[0].code = #read
* rest[0].resource[1].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[0].extension.valueCode = #SHALL

// ImagingStudy resource support
* rest[0].resource[2].type = #ImagingStudy
* rest[0].resource[2].documentation = "Read ImagingStudy information." 
* rest[0].resource[2].interaction[0].code = #read
* rest[0].resource[2].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].interaction[0].extension.valueCode = #SHALL

// Device resource support
* rest[0].resource[3].type = #Device
* rest[0].resource[3].documentation = "Read Device information." 
* rest[0].resource[3].interaction[0].code = #read
* rest[0].resource[3].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].interaction[0].extension.valueCode = #SHALL

// Radiation Summary resource support
* rest[0].resource[4].type = #Observation
* rest[0].resource[4].documentation = "Search and read Radiation Summary observations shall be supported." 
* rest[0].resource[4].interaction[0].code = #read
* rest[0].resource[4].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].interaction[0].extension.valueCode = #SHALL
* rest[0].resource[4].interaction[1].code = #search-type
* rest[0].resource[4].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].interaction[1].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[0].name = "identifier"
* rest[0].resource[4].searchParam[0].type = #token
* rest[0].resource[4].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[0].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[1].name = "code"
* rest[0].resource[4].searchParam[1].type = #token
* rest[0].resource[4].searchParam[1].documentation = "Search based on identifiers of radiation dose summary like Accession Number"
* rest[0].resource[4].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[1].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[2].name = "patient"
* rest[0].resource[4].searchParam[2].type = #reference
* rest[0].resource[4].searchParam[2].documentation = "Search based on patient identifier"
* rest[0].resource[4].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[2].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[3].name = "device"
* rest[0].resource[4].searchParam[3].type = #token
* rest[0].resource[4].searchParam[3].documentation = "Search based on modality identifiers"
* rest[0].resource[4].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[3].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[4].name = "part-of"
* rest[0].resource[4].searchParam[4].type = #reference
* rest[0].resource[4].searchParam[4].documentation = "Search based on ImagingStudy"
* rest[0].resource[4].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[4].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[5].name = "date"
* rest[0].resource[4].searchParam[5].type = #date
* rest[0].resource[4].searchParam[5].documentation = "Search based on Radiation Summary effective dateTime, can be used to search for radiation through a period of time"
* rest[0].resource[4].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[5].extension.valueCode = #SHALL

* document[0].mode = #producer
* document[0].documentation = "Documents related to Radiation Summary Report profile."
* document[0].profile = "http://hl7.org/fhir/uv/radiation-dose-summary/StructureDefinition/radiation-summary-report"



---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/fsh/CapabilityStatement-RDSP.fsh

Instance: RDSP
InstanceOf: CapabilityStatement
Usage: #definition
Description: "Minimal Capability Statement needed to be supported by RDSP Actor"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension[0].valueCode = #ii
* name = "RDSP"
* title = "RDSP Actor minimal requirements"
* date = "2021-06-28"
* kind = #requirements
* description = "Defines the operation requirement for RDSP actor"
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1
* status = #draft 

* implementationGuide = "http://hl7.org/fhir/uv/radiation-dose-summary/ImplementationGuide/hl7.fhir.uv.radiation-dose-summary"

* rest[0].mode = #client
* rest[0].documentation = "Description of the needed resources to be supported by RDSP actor."

* rest[0].interaction[0].code = #transaction
* rest[0].interaction[1].code = #search-system

// Patient resource support
* rest[0].resource[0].type = #Patient
* rest[0].resource[0].documentation = "Search on patient shall be supported."
* rest[0].resource[0].interaction[0].code = #create
* rest[0].resource[0].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].interaction[0].extension.valueCode = #MAY
* rest[0].resource[0].interaction[1].code = #read
* rest[0].resource[0].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].interaction[1].extension.valueCode = #SHOULD
* rest[0].resource[0].interaction[2].code = #search-type
* rest[0].resource[0].interaction[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].interaction[2].extension.valueCode = #SHALL

* rest[0].resource[0].searchParam[0].name = "identifier"
* rest[0].resource[0].searchParam[0].type = #token
* rest[0].resource[0].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[0].extension.valueCode = #SHALL

* rest[0].resource[0].searchParam[1].name = "family"
* rest[0].resource[0].searchParam[1].type = #string
* rest[0].resource[0].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[1].extension.valueCode = #SHOULD

* rest[0].resource[0].searchParam[1].name = "given"
* rest[0].resource[0].searchParam[1].type = #string
* rest[0].resource[0].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[1].extension.valueCode = #SHOULD

// Practitioner resource support
* rest[0].resource[1].type = #Practitioner
* rest[0].resource[1].documentation = "Search on practitioner shall be supported." 
* rest[0].resource[1].interaction[0].code = #create
* rest[0].resource[1].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[0].extension.valueCode = #MAY
* rest[0].resource[1].interaction[1].code = #read
* rest[0].resource[1].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[1].extension.valueCode = #SHOULD
* rest[0].resource[1].interaction[2].code = #search-type
* rest[0].resource[1].interaction[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[2].extension.valueCode = #SHALL

* rest[0].resource[1].searchParam[0].name = "identifier"
* rest[0].resource[1].searchParam[0].type = #token
* rest[0].resource[1].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[0].extension.valueCode = #SHALL

* rest[0].resource[1].searchParam[1].name = "family"
* rest[0].resource[1].searchParam[1].type = #string
* rest[0].resource[1].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[1].extension.valueCode = #SHOULD

* rest[0].resource[1].searchParam[1].name = "given"
* rest[0].resource[1].searchParam[1].type = #string
* rest[0].resource[1].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[1].extension.valueCode = #SHOULD

// ImagingStudy resource support
* rest[0].resource[2].type = #ImagingStudy
* rest[0].resource[2].documentation = "Search on ImagingStudy shall be supported." 
* rest[0].resource[2].interaction[0].code = #create
* rest[0].resource[2].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].interaction[0].extension.valueCode = #MAY
* rest[0].resource[2].interaction[1].code = #read
* rest[0].resource[2].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].interaction[1].extension.valueCode = #SHOULD
* rest[0].resource[2].interaction[2].code = #search-type
* rest[0].resource[2].interaction[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].interaction[2].extension.valueCode = #SHALL

* rest[0].resource[2].searchParam[0].name = "identifier"
* rest[0].resource[2].searchParam[0].type = #token
* rest[0].resource[2].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[0].extension.valueCode = #SHALL

* rest[0].resource[2].searchParam[0].name = "patient"
* rest[0].resource[2].searchParam[0].type = #reference
* rest[0].resource[2].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[0].extension.valueCode = #MAY

// Device resource support
* rest[0].resource[3].type = #Device
* rest[0].resource[3].documentation = "Search on Device shall be supported." 
* rest[0].resource[3].interaction[0].code = #create
* rest[0].resource[3].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].interaction[0].extension.valueCode = #MAY
* rest[0].resource[3].interaction[1].code = #read
* rest[0].resource[3].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].interaction[1].extension.valueCode = #SHOULD
* rest[0].resource[3].interaction[2].code = #search-type
* rest[0].resource[3].interaction[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].interaction[2].extension.valueCode = #SHALL

* rest[0].resource[3].searchParam[0].name = "identifier"
* rest[0].resource[3].searchParam[0].type = #token
* rest[0].resource[3].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[0].extension.valueCode = #SHALL

* rest[0].resource[3].searchParam[0].name = "type"
* rest[0].resource[3].searchParam[0].type = #token
* rest[0].resource[3].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[0].extension.valueCode = #MAY

* rest[0].resource[3].searchParam[0].name = "manufacturer"
* rest[0].resource[3].searchParam[0].type = #token
* rest[0].resource[3].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[3].searchParam[0].extension.valueCode = #MAY

// Radiation Summary resource support
* rest[0].resource[4].type = #Observation
* rest[0].resource[4].documentation = "Create of Radiation Summary observations shall be supported." 
* rest[0].resource[4].interaction[0].code = #create
* rest[0].resource[4].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].interaction[0].extension.valueCode = #SHALL
* rest[0].resource[4].interaction[1].code = #read
* rest[0].resource[4].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].interaction[1].extension.valueCode = #SHOULD
* rest[0].resource[4].interaction[2].code = #search-type
* rest[0].resource[4].interaction[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].interaction[2].extension.valueCode = #SHOULD

* rest[0].resource[4].searchParam[0].name = "identifier"
* rest[0].resource[4].searchParam[0].type = #token
* rest[0].resource[4].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[0].extension.valueCode = #SHALL

* rest[0].resource[4].searchParam[1].name = "patient"
* rest[0].resource[4].searchParam[1].type = #reference
* rest[0].resource[4].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[1].extension.valueCode = #SHOULD

* rest[0].resource[4].searchParam[2].name = "code"
* rest[0].resource[4].searchParam[2].type = #token
* rest[0].resource[4].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[4].searchParam[2].extension.valueCode = #SHALL

---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/fsh/IdentifiersCodes.fsh

CodeSystem: DicomIdentifierType
Id: dicom-identifier-type
Title: "DICOM Identifier Type"
Description: "Identifier types related to DICOM UIDs"

* ^experimental = false
* ^caseSensitive = true
* ^content = #complete
* ^hierarchyMeaning = #is-a
* #irradiation-event-uid "Irradiation Event UID" "Unique identification of the irradiation event"
* #device-serial-number "Device Serial Number" "Manufacturer's serial number of the device"
* #application-entity "Application Entity" "Title of a DICOM Application Entity"
* #device-uid "Device UID" "Unique identifier of the equipment that produced the Composite Instances"
* #device-id "Device ID" "User-supplied identifier for the device"
* #study-instance-uid "Study Instance UID" "Unique identifier for the Study"
* #sop-instance-uid "SOP Instance UID" "Uniquely identifies the SOP Instance"



---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/fsh/IndicationObservation.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM

Profile:        IndicationObservation
Parent:         Observation
Id:             indication-observation
Title:          "Indication Observation"
Description:    "Indication observation related to the radiation administration"
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #ii
* insert RDSStructureDefinitionContent

* code MS
* code.coding = DCM#121109 "Indications for Procedure"

* subject only Reference(Patient)
* subject 1..1 MS
* subject ^short = "Related Patient"

* value[x] 1..1 MS
* value[x] only CodeableConcept or string
* value[x] ^short = "Indications description"

Mapping: procedure-indication-mapping
Id: procedure-indication-mapping
Title: "DICOM Procedure Indication"
Source: IndicationObservation
Target: "http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.4.11.html"
Description: "The mapping for indication is following the CDA defined mapping within PS 3.20: http://dicom.nema.org/medical/dicom/current/output/chtml/part20/sect_C.4.4.html"
* -> "Requested Procedure Module"
* valueCodeableConcept -> "Referenced Request Sequence (0040,A370) > Reason for the Requested Procedure (0040,1002)"
* valueString -> "Referenced Request Sequence (0040,A370) > Reason for the Requested Procedure Code Sequence (0040,100A)"


---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/fsh/Instances.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/radiation-dose-summary/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

// Example 1 //
Instance: RadiationDoseSummary-139
InstanceOf: RadiationDoseSummary
Usage: #example
Description: "Radiation Dose Summary example 1"
* id = "139"
* identifier[0].type = DCMIdType#sop-instance-uid "SOP Instance UID"
* identifier[0].system = "urn:dicom:uid"
* identifier[0].value = "urn:oid:1.2.840.121.3.32.0.1.1323423.122"
* partOf = Reference(ImagingStudy/342)
* partOf.identifier.type = DCMIdType#study-instance-uid "Study Instance UID"
* partOf.identifier.system = "urn:dicom:uid"
* partOf.identifier.value = "urn:oid:1.2.840.121.3.32.0.1.1323423"
* status = #final
* code = LOINC#73569-6 "Radiation exposure and protection information [Description] Document Diagnostic imaging"
* subject = Reference(Patient/56)
* subject.display = "Pascale Dupont"
* focus = Reference(ImagingStudy/342)
* effectiveDateTime = "2015-01-01T22:23:30.000Z"
* performer = Reference(Practitioner/33)
* performer.display = "John Moore"
* valueString = "CT Dose Length Product Total = 203.12 mGy.cm"
* device = Reference(Device/539)
* device.display = "CT01"
* component[0].code.coding = DCM#121058 "Procedure reported"
* component[0].valueCodeableConcept.coding = SCT#77477000 "Computerized tomography"
* component[1].code.coding = DCM#113813 "CT Dose Length Product Total"
* component[1].valueQuantity.value = 203.12
* component[1].valueQuantity.unit = "mGy.cm"

Instance: Patient-56
InstanceOf: Patient
Usage: #example
Description: "Patient for example 1"
* id = "56"
* identifier[0].system = "urn:pid:ipdauth1"
* identifier[0].value = "PAT3421"
* name[0].family = "Dupony"
* name[0].given = "Pascale"
* birthDate = "1990-03-18"
* gender = #female


Instance: Practitioner-33
InstanceOf: Practitioner
Usage: #example
Description: "Practitioner for example 1"
* id = "33"
* identifier[0].system = "urn:prid:ipractauth1"
* identifier[0].value = "pract67"
* name[0].family = "Moore"
* name[0].given[0] = "John"


Instance: ImagingStudy-342
InstanceOf: ImagingStudy
Usage: #example
Description: "ImagingStudy for example 1"
* id = "342"
* identifier[0].system = "urn:dicom:uid"
* identifier[0].value = "urn:oid:1.2.840.121.3.32.0.1.1323423" 
* status = #available
* subject = Reference(Patient/56)
* subject.display = "Pascale Dupont"
* started = "2015-01-01T22:20:00.000Z"


Instance: ModalityDevice-539
InstanceOf: ModalityDevice
Usage: #example
Description: "ModalityDevice for example 1"
* id = "539"
* identifier[0].type = DCMIdType#application-entity "Application Entity"
* identifier[0].value = "CT01" 
* manufacturer = "Manufacturer-1"
* serialNumber = "5445A343"
* deviceName[0].type = #manufacturer-name
* deviceName[0].name = "Manufacturer-1"
* deviceName[1].type = #model-name
* deviceName[1].name = "Manufacturer-ModelName-1"
* type.coding = DCM#CT "Computed Tomography"


Instance: RadiationSummaryReport-1
InstanceOf: RadiationSummaryReport
Usage: #example
Description: "Radiation Summary Report for example 1"
* id = "1"
* status = #final
* type.coding = LOINC#73569-6 "Radiation exposure and protection information [Description] Document Diagnostic imaging"
* subject = Reference(Patient/56)
* subject.display = "Pascale Dupont"
* date = "2015-01-01T23:43:30.000Z"
* author = Reference(Practitioner/33)
* author.display = "John Moore"
* title = "Radiation exposure and protection information"
* section[0].code.coding = LOINC#73569-6 "Radiation exposure and protection information [Description] Document Diagnostic imaging"
* section[0].entry = Reference(Observation/139)
* section[0].entry.display = "Radiation Dose Summary"
* section[1].code.coding = DCM#121109 "Indications for Procedure"
* section[1].entry = Reference(Observation/33)
* section[1].entry.display = "Indications"
* section[2].code.coding = LOINC#82810-3 "Pregnancy status"
* section[2].entry = Reference(Observation/34)
* section[2].entry.display = "Pregnancy Status"


Instance: Indications-1
InstanceOf: IndicationObservation
Usage: #example
Description: "Indication Observation for example 1"
* id = "33"
* status = #final
* code.coding = DCM#121109 "Indications for Procedure"
* subject = Reference(Patient/56)
* subject.display = "Pascale Dupont"
* valueString = "Exam to check right kidney"


Instance: PregnancyStatus-1
InstanceOf: ObservationPregnancyStatusUvIps
Usage: #example
Description: "Pregnancy Status for example 1"
* id = "34"
* status = #final
* subject = Reference(Patient/56)
* effectiveDateTime = "2015-01-01T23:43:30.000Z"
* subject.display = "Pascale Dupont"
* valueCodeableConcept = LOINC#LA26683-5 "Not pregnant"



// Example 2 //
Instance: RadiationDoseSummary-545
InstanceOf: RadiationDoseSummary
Usage: #example
Description: "Radiation Dose Summary example 2"
* id = "545"
* partOf = Reference(ImagingStudy/344)
* partOf.identifier.type = DCMIdType#study-instance-uid "Study Instance UID"
* partOf.identifier.system = "urn:dicom:uid"
* partOf.identifier.value = "urn:oid:1.2.840.121.3.32.0.1.25"
* status = #final
* code = LOINC#73569-6 "Radiation exposure and protection information [Description] Document Diagnostic imaging"
* subject = Reference(Patient/56)
* subject.display = "Pascale Dupont"
* focus = Reference(ImagingStudy/344)
* effectiveDateTime = "2019-01-23T12:00:30.000Z"
* performer = Reference(Practitioner/33)
* performer.display = "John Moore"
* valueString = "Dose (RP) Total = 212 mGy, DAP Total = 13639 mGy.cm2, Fluoro DAP Total = 4523 mGy.cm2, Total Fluoro Time = 450s"
* device = Reference(Device/12)
* device.display = "XA01"
* component[0].code.coding = DCM#121058 "Procedure reported"
* component[0].valueCodeableConcept.coding = DCM#113704 "Projection X-Ray"
* component[1].code.coding = DCM#113725 "Dose (RP) Total"
* component[1].valueQuantity.value = 212
* component[1].valueQuantity.unit = "mGy"
* component[2].code.coding = DCM#113722 "Dose Area Product Total"
* component[2].valueQuantity.value = 13639
* component[2].valueQuantity.unit = "mGy.cm2"
* component[3].code.coding = DCM#113726 "Fluoro Dose Area Product Total"
* component[3].valueQuantity.value = 4523
* component[3].valueQuantity.unit = "mGy.cm2"
* component[3].code.coding = DCM#113730 "Total Fluoro Time"
* component[3].valueQuantity.value = 450
* component[3].valueQuantity.unit = "s"


Instance: ImagingStudy-344
InstanceOf: ImagingStudy
Usage: #example
Description: "ImagingStudy for example 2"
* id = "344"
* identifier[0].system = "urn:dicom:uid"
* identifier[0].value = "urn:oid:1.2.840.121.3.32.0.1.25" 
* status = #available
* subject = Reference(Patient/56)
* subject.display = "Pascale Dupont"
* started = "2019-01-23T11:45:30.000Z"


Instance: ModalityDevice-12
InstanceOf: ModalityDevice
Usage: #example
Description: "ModalityDevice for example 2"
* id = "12"
* identifier[0].type = DCMIdType#application-entity "Application Entity"
* identifier[0].value = "XA01" 
* manufacturer = "Manufacturer-1"
* serialNumber = "767ER"
* deviceName[0].type = #manufacturer-name
* deviceName[0].name = "Manufacturer-1"
* deviceName[1].type = #model-name
* deviceName[1].name = "Manufacturer-ModelName-1"
* type.coding = DCM#XA "X-Ray Angiography"


// Example 3 //
Instance: RadiationDoseSummary-122
InstanceOf: RadiationDoseSummary
Usage: #example
Description: "NM Radiation Dose Summary example 3"
* id = "122"
* partOf = Reference(ImagingStudy/22)
* partOf.identifier.type = DCMIdType#study-instance-uid "Study Instance UID"
* partOf.identifier.system = "urn:dicom:uid"
* partOf.identifier.value = "urn:oid:1.2.840.121.3.32.0.1.32"
* status = #final
* code = LOINC#73569-6 "Radiation exposure and protection information [Description] Document Diagnostic imaging"
* subject = Reference(Patient/56)
* subject.display = "Pascale Dupont"
* focus = Reference(ImagingStudy/22)
* effectiveDateTime = "2019-01-23T12:00:30.000Z"
* performer = Reference(Practitioner/33)
* performer.display = "John Moore"
* valueString = "Activity = 154 MBq (123-I)"
* component[0].code = DCM#121058 "Procedure reported"
* component[0].valueCodeableConcept.coding = DCM#113502 "Radiopharmaceutical Administration"
* component[1].code = DCM#113507 "Administered activity"
* component[1].valueQuantity.value = 154
* component[1].valueQuantity.unit = "MBq"
* component[2].code = SCT#349358000 "Radiopharmaceuticals"
* component[2].valueCodeableConcept.coding = SCT#429296007 "Product containing ioflupane (123-I) (medicinal product)"


Instance: ImagingStudy-22
InstanceOf: ImagingStudy
Usage: #example
Description: "ImagingStudy for example 3"
* id = "22"
* identifier[0].system = "urn:dicom:uid"
* identifier[0].value = "urn:oid:1.2.840.121.3.32.0.1.32" 
* status = #available
* subject = Reference(Patient/56)
* subject.display = "Pascale Dupont"
* started = "2019-01-23T11:45:30.000Z"


---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/fsh/Modality.fsh

Alias: DEViCETYPE =  http://hl7.org/fhir/device-nametype
Alias: DCMIdType = http://hl7.org/fhir/uv/radiation-dose-summary/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        ModalityDevice
Parent:         Device
Id:             modality-device
Title:          "Modality Device"
Description:    "Modality profiling as a Device resource"
* insert RDSStructureDefinitionContent

* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^slicing.ordered = false
* identifier ^slicing.description = "Identifiers for the radiation dose"

* identifier contains deviceSerialNumber 0..1 MS and aeTitle 1..1 MS and deviceUID 0..1 MS and deviceID 0..1 MS
* identifier[deviceSerialNumber].type = HL7IdType#SNO "Serial Number"
* identifier[deviceSerialNumber].value 1..1
* identifier[deviceSerialNumber] ^short = "Describes the Device Serial Number, related to tag(0018,1000) Device Serial Number" 
* identifier[aeTitle].type = DCMIdType#application-entity "Application Entity"
* identifier[aeTitle].value 1..1
* identifier[aeTitle] ^short = "Describes the AETitle of the modality irradiating the patient"
* identifier[deviceUID].type = DCMIdType#device-uid "Device UID"
* identifier[deviceUID].system = "urn:dicom:uid"
* identifier[deviceUID].value 1..1
* identifier[deviceUID] ^short = "Describes the Device UID, related to tag(0018,1002) Device UID"
* identifier[deviceID].type = DCMIdType#device-id "Device ID"
* identifier[deviceID].value 1..1
* identifier[deviceID] ^short = "Describes the Device ID, related to tag((0018,1003) Device ID"
* manufacturer MS
* serialNumber MS
* manufacturer ^short = "The manufacturer of the modality, related to tag(0008,0070) manufacturer"
* serialNumber ^short = "The serial number of the modality, which is the Device Serial Number"
* type 1..1 MS
* type from http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_33.html (required)
* type ^short = "Describes the main modality type (CT, MG, etc.)"
* version ^short = "Describes the Software Versions of the device, related to tag(0018,1020) Software Versions"

* deviceName ^slicing.discriminator.type = #value 
* deviceName ^slicing.discriminator.path = "type"
* deviceName ^slicing.rules = #open
* deviceName ^slicing.description = "Name of the device"

* deviceName contains manufacturer 0..1 MS and manufacturerModelName 0..1 MS
* deviceName[manufacturer].type = DEViCETYPE#manufacturer-name "Manufacturer name"
* deviceName[manufacturer] ^short = "The manufacturer of the modality"
* deviceName[manufacturerModelName].type = DEViCETYPE#model-name "Model name"
* deviceName[manufacturerModelName] ^short = "The model name of the modality"


Mapping: equipement-module-for-ModalityDevice
Id: dicom-sr
Title: "DICOM Equipement Module"
Source: ModalityDevice
Target: "http://dicom.nema.org/medical/Dicom/2016b/output/chtml/part03/sect_C.7.5.html"
Description: "The ModalityDevice can be extracted from General Equipment Module."
* -> "General Equipment Module"
* identifier[deviceSerialNumber] -> "tag(0018,1000) Device Serial Number"
* identifier[deviceUID] -> "tag(0018,1002) Device UID"
* manufacturer -> "tag(0008,0070) manufacturer"
* serialNumber -> "tag(0018,1000) Device Serial Number"
* deviceName[manufacturer] -> "tag(0008,0070) manufacturer"
* deviceName[manufacturerModelName] -> "tag(0008,1090) Manufacturer's Model Name"


---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/fsh/NMRadiationDoseSummary.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org

ValueSet: RadiopharmaceuticalAgentVS
Id: radiopharmaceutical-rds-vs
Title: "Radiopharmaceuticals Value Set"
Description: "List of Radipharmaceuticals. Value Set defined by DICOM Standard: http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_25.html and http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_4021.html"
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #ii
* ^experimental = false
* ^jurisdiction.coding =  http://unstats.un.org/unsd/methods/m49/m49.htm#001
* include codes from valueset http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_25.html
* include codes from valueset http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_4021.html

ValueSet: IsotopesVS
Id: isotope-rds-vs
Title: "Isotopes Value Set"
Description: "List for Isotopes in radiopharmaceuticals. Value Set defined by DICOM Standard: http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_18.html and http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_4020.html"
* ^experimental = false
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #ii
* ^jurisdiction.coding =  http://unstats.un.org/unsd/methods/m49/m49.htm#001
* include codes from valueset http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_18.html
* include codes from valueset http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_4020.html


---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/fsh/RadiationDoseSummary.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/radiation-dose-summary/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        RadiationDoseSummary
Parent:         Observation
Id:             radiation-dose-summary
Title:          "Radiation Dose Summary"
Description:    "General Structure describing a summary of an irradiation act"
* ^abstract = false
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #ii
* insert RDSStructureDefinitionContent

* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^slicing.ordered = false
* identifier ^slicing.description = "Identifiers for the radiation dose"

* identifier contains radiationSRUID 0..* MS
* identifier[radiationSRUID].type = DCMIdType#sop-instance-uid "SOP Instance UID"
* identifier[radiationSRUID].system = "urn:dicom:uid"
* identifier[radiationSRUID].value 1..1
* identifier[radiationSRUID] ^short = "Identifier related to SOP Instance UID if the resource is generated based on an RDSR"

// Associated Procedure/Exam
* partOf ^slicing.discriminator.type = #type
* partOf ^slicing.discriminator.path = "reference"
* partOf ^slicing.rules = #open
* partOf ^slicing.description = "Description of the related ImagingStudy" 

* partOf contains imagingStudyRef 1..1 MS
* partOf[imagingStudyRef] only Reference(ImagingStudy)
* partOf[imagingStudyRef] ^short = "Related ImagingStudy"
* partOf[imagingStudyRef].identifier.type 1..1
* partOf[imagingStudyRef].identifier.type = DCMIdType#study-instance-uid "Study Instance UID"
* partOf[imagingStudyRef].identifier.system = "urn:dicom:uid"
* partOf[imagingStudyRef].identifier.value 1..1
* partOf[imagingStudyRef].identifier ^short = "Identifier related to Study Instance UID"

// Associated ServiceRequest
* basedOn ^slicing.discriminator.type = #type
* basedOn ^slicing.discriminator.path = "reference"
* basedOn ^slicing.rules = #open
* basedOn ^slicing.description = "Description of the related ServiceRequest"

* basedOn contains serviceRequestRef 0..1 MS
* basedOn[serviceRequestRef] only Reference(ServiceRequest)
* basedOn[serviceRequestRef] ^short = "Description of the related ServiceRequest"
* basedOn[serviceRequestRef].identifier.type 1..1
* basedOn[serviceRequestRef].identifier.type = HL7IdType#ACSN "Accession ID"
* basedOn[serviceRequestRef].identifier.value 1..1
* basedOn[serviceRequestRef].identifier ^short = "The accession number related to the performed study"

* code MS
* code = LOINC#73569-6 "Radiation exposure and protection information [Description] Document Diagnostic imaging"

* subject only Reference(Patient)
* subject 1..1 MS
* subject ^short = "Irradiated patient"

* focus only Reference(ImagingStudy)
* focus 1..1 MS
* focus ^short = "The observation has a focus on the performed exam."

// Irradiation Issued Date
* effective[x] only dateTime
* effective[x] 1..1 MS
* effective[x] ^short = "Irradiation Start Date Time"
* value[x] 1..1 MS
* value[x] only string
* valueString ^short = "Dose Summary text."
* valueString ^comment = "Textual representation of the dose summary based computed by the Dose Management system. Based on a locally defined template, definition of which is out of scope of this IG."
* dataAbsentReason 0..0
* specimen 0..0

// Performing irradiation device
* device 0..1 MS
* device only Reference(ModalityDevice)
* device ^short = "Irradiating modality"

// Irradiation Authorizing Person
* performer ^slicing.discriminator.type = #type
* performer ^slicing.discriminator.path = "reference"
* performer ^slicing.rules = #closed
* performer ^slicing.description = "Description of the related performer" 

* performer contains irradiationAutorizingPerson 1..1 MS
* performer[irradiationAutorizingPerson] only Reference(Practitioner)
* performer 1..1 MS
* performer[irradiationAutorizingPerson] ^short = "Related irradiation authorizing person"

// Dose measurements - Procedure Level
* component 0..*
* component.code from ComponentRadiationDoseSummaryVS (extensible)



ValueSet: ProcedureReportedTypeVS
Id: procedure-reported-type-rds-vs
Title: "Procedure Reported Type Value Set"
Description: "What is the type of procedure reported in the Radiation Dose Summary"
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #ii
* ^experimental = false
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement."
* ^jurisdiction.coding =  http://unstats.un.org/unsd/methods/m49/m49.htm#001
//* SCT#373205008 "Nuclear medicine imaging procedure"
* DCM#113502 "Radiopharmaceutical Administration"
* SCT#77477000 "Computerized tomography"
* DCM#113704 "Projection X-Ray"
* SCT#71651007 "Mammography"

ValueSet: ComponentRadiationDoseSummaryVS
Id: component-radiation-dose-summary-vs
Title: "Radiation Dose Summary component type"
Description: "Value Set describing the list of minimal dose information related to Procedure and Administration level"
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #ii
* ^experimental = false
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement."
* ^jurisdiction.coding =  http://unstats.un.org/unsd/methods/m49/m49.htm#001
* DCM#113813 "CT Dose Length Product Total"
* DCM#113725 "Dose (RP) Total"
* DCM#111637 "Accumulated Average Glandular Dose"
* DCM#113722 "Dose Area Product Total"
* DCM#113726 "Fluoro Dose Area Product Total"
* DCM#113727 "Acquisition Dose Area Product Total"
* DCM#113730 "Total Fluoro Time"
* DCM#113731 "Total Number of Radiographic Frames"
* DCM#113507 "Administered activity"
* SCT#349358000 "Radiopharmaceuticals"
* SCT#89457008 "Radioisotope"
* DCM#123005 "Radiopharmaceutical Volume"
* SCT#410675002 "Route of administration"

---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/fsh/RadiationSummaryReport.fsh

Alias: LOINC =  http://loinc.org
Alias: DCM = http://dicom.nema.org/resources/ontology/DCM


Profile:        RadiationSummaryReport
Parent:         Composition
Id:             radiation-summary-report
Title:          "Radiation Summary Report"
Description:    "A report document describing the irradiation act"
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #ii
* insert RDSStructureDefinitionContent

* type MS
* type.coding = LOINC#73569-6 "Radiation exposure and protection information [Description] Document Diagnostic imaging"
* subject only Reference(Patient)
* subject 1..1 MS
* subject ^short = "Related patient"

* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code.coding"
* section ^slicing.rules = #open

* section contains radiationDoseSummary 1..1 MS and pregnancyObservation 0..1 MS and indicationObservation 0..1 MS

* section[radiationDoseSummary].code.coding = LOINC#73569-6 "Radiation exposure and protection information [Description] Document Diagnostic imaging"
* section[radiationDoseSummary].entry only Reference(RadiationDoseSummary)
* section[radiationDoseSummary] ^short = "Map to the Radiation Dose Summary Observation resource"

* section[pregnancyObservation].code.coding = LOINC#82810-3 "Pregnancy status"
* section[pregnancyObservation].entry only Reference(ObservationPregnancyStatusUvIps)
* section[pregnancyObservation] ^short = "Map to the Pregnancy Status Observation resource"

* section[indicationObservation].code.coding = DCM#121109 "Indications for Procedure"
* section[indicationObservation].entry only Reference(IndicationObservation)
* section[indicationObservation] ^short = "Map to Indication Observation resource"


---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/fsh/RDSDefinitions.fsh

// Define a rule set for commonly used rules for definition resources using other Sushi features
RuleSet: RDSStructureDefinitionContent
* ^status = #draft      // draft until final published
* ^experimental = true  // true until ready for pilot, then false
* ^version = "0.1.0"    // Follow IG Versioning rules
* ^publisher = "HL7 International"
* ^contact[0].name = "HL7 International / Imaging Integration"
* ^contact[0].telecom[0].system = #url
* ^contact[0].telecom[0].value = "http://www.hl7.org/Special/committees/imagemgt"
* ^contact[1].name = "Abderrazek Boufahja"
* ^contact[1].telecom.system = #email
* ^contact[1].telecom.value = "mailto:abderrazek.boufahja@gehealthcare.com"
* ^contact[2].name = "Steven Nichols"
* ^contact[2].telecom.system = #email
* ^contact[2].telecom.value = "mailto:steven.nichols@gehealthcare.com"
* ^jurisdiction.coding =  http://unstats.un.org/unsd/methods/m49/m49.htm#001
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #ii

---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/images-source/actors.plantuml

@startuml actors
(Radiation Dose Summary Producer - RDSP) as RDSP
(FHIR Server) as server
(Radiation Dose Summary Consumer - RDSC) as RDSC
RDSP -right-> server : "Radiation Dose Summary\n Sharing"
RDSC -left-> server : "Radiation Dose Summary\n Consuming"
@enduml

---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/images-source/archi.plantuml

@startuml archi
class "Radiation Summary Report" as RSR <<Composition>> #ffe6cc ##b86611
class "Radiation Dose Summary" as DoseSummary <<Observation>> #d5e8d4 ##green 
class "Pregnancy Status (IPS)" as PregnancyStatus <<Observation>> #fff2cc ##b3880c
class "Indication Observation" as Indication <<Observation>> #fff2cc ##b3880c
class "Modality Device" as Modality <<Device>> #34b1eb ##217aa3
class "ImagingStudy" as ImagingStudy #a3e7ff ##34b1eb
class "Patient" as Patient #a3e7ff ##34b1eb
class "Practitioner" as Practitioner #a3e7ff ##34b1eb

DoseSummary   -down-> Patient : subject[1..1]
DoseSummary   -down-> Practitioner : performer[1..1]
DoseSummary   -down-> ImagingStudy : partOf[0..1]
DoseSummary   -down-> Modality : device[0..1]
PregnancyStatus  -down-> Patient : subject[1..1]
Indication  -down-> Patient : subject[1..1]
RSR -down-> Patient : subject[1..1]
RSR  -down-> DoseSummary  : section.entry[1..1]
RSR  -down-> PregnancyStatus : section.entry[0..1]
RSR  -down-> Indication : section.entry[0..1]
@enduml

---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/images-source/example1.plantuml

@startuml
skinparam monochrome true

object  CTRadiationDoseSummary #white { 
  id = 139
  study-instance-uid = 1.2.840.121.3.32.0.1.1323423 
}

object  Patient #white {
  id = 56
  identifier = PAT3421|pidauth1
  name = Pascal Dupont
}

object  ImagingStudy #white { 
  id = 342
  study-instance-uid = 1.2.840.121.3.32.0.1.1323423
}

object  Practitioner #white { 
  id = 33
  identifier = pract67 | practauth1
  name = John Moore
}

object  ModalityDevice #white { 
  id = 539
  device-serial-number = 5445A343
  application-entity = CT01
}

CTRadiationDoseSummary -d-> Patient : "subject"
CTRadiationDoseSummary -d-> ImagingStudy : "partOf"
CTRadiationDoseSummary -d-> Practitioner : "performer"
CTRadiationDoseSummary -d-> ModalityDevice : "device"
ImagingStudy -> Patient : "subject"
@enduml

---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/images-source/example2.plantuml

@startuml
skinparam monochrome true

object  RadiationDoseSummary #white { 
  id = 545
  study-instance-uid = 1.2.840.121.3.32.0.1.25
}

object  Patient #white { 
  id = 56
  identifier = PAT3421|pidauth1
  name = Pascal Dupont
}

object  ImagingStudy #white { 
  id = 344
  study-instance-uid = 1.2.840.121.3.32.0.1.25
}

object  Practitioner #white { 
  id = 33
  identifier = pract67 | practauth1
  name = John Moore
}

object  ModalityDevice #white { 
  id = 12
  device-serial-number = 767ER
  application-entity = XA01
}


RadiationDoseSummary -d-> Patient : "subject"
RadiationDoseSummary -d-> ImagingStudy : "partOf"
RadiationDoseSummary -d-> Practitioner : "performer"
RadiationDoseSummary -d-> ModalityDevice : "device"
ImagingStudy -> Patient : "subject"
@enduml

---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/images-source/example3.plantuml

@startuml
skinparam monochrome true

object  RadiationDoseSummary #white { 
  id = 122
  study-instance-uid = 1.2.840.121.3.32.0.1.32
}

object  Patient #white { 
  id = 56
  identifier = PAT3421|pidauth1
  name = Pascal Dupont
}

object  ImagingStudy #white { 
  id= 22
  study-instance-uid = 1.2.840.121.3.32.0.1.32
}

object  Practitioner #white { 
  id = 33
  identifier = pract67 | practauth1
  name = John Moore
}


RadiationDoseSummary -d-> Patient : "subject"
RadiationDoseSummary -d-> ImagingStudy : "partOf"
RadiationDoseSummary -d-> Practitioner : "performer"
ImagingStudy -> Patient : "subject"
@enduml

---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/images-source/seq-simplified.plantuml

@startuml seqs-implified
hide footbox
skinparam sequenceMessageAlign center
skinparam sequence {
ArrowColor #005500
LifeLineBorderColor Black
ActorFontColor Black
ActorBorderColor Black
ParticipantBorderColor Black
ParticipantBackgroundColor #c9f4ff
ActorBackgroundColor #c9f4ff
}

actor Patient
participant "Irradiating Modality" as IrradiatingModality
participant "RDSP Actor" as RDSP
participant "FHIR Server" as server
participant "RDSC Actor" as RDSC

Patient -> IrradiatingModality : perform diagnostic imaging
activate IrradiatingModality #b3ffd7

IrradiatingModality -> RDSP : Share Radiation Information (RDSR)
activate RDSP  #b3ffd7
RDSP --> IrradiatingModality : return
deactivate RDSP

IrradiatingModality --> Patient: return
deactivate IrradiatingModality

activate RDSP #b3ffd7
RDSP -> server : Search Resources\n Patient | Device | Practitioner | \nImagingStudy
activate server #b3ffd7
server --> RDSP : return resources
deactivate server

RDSP -> RDSP  : Construct \nRadiation Dose Summary Resources
activate RDSP #b3ffd7
deactivate RDSP

RDSP -> server : POST \nRadiation Dose Summary
activate server #b3ffd7
server --> RDSP : return
deactivate server
deactivate RDSP

RDSC -> server: Search and GET \nRadiation Dose Summary Resources
activate server #b3ffd7
server --> RDSC : return resources
deactivate server

RDSC -> server: POST \nRadiation Summary Report
activate server #b3ffd7
server --> RDSC : return
deactivate server
@enduml

---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/images-source/seq.plantuml

@startuml seq
hide footbox
skinparam sequenceMessageAlign center
skinparam sequence {
ArrowColor #005500
LifeLineBorderColor Black
ActorFontColor Black
ActorBorderColor Black
ParticipantBorderColor Black
ParticipantBackgroundColor #c9f4ff
ActorBackgroundColor #c9f4ff
}

actor Patient
participant "Irradiating Modality" as IrradiatingModality
participant "RDSP Actor" as RDSP
participant "FHIR Server" as server
participant "RDSC Actor" as RDSC

note over Patient #fce079: Patient ID =  PIDXX
note over IrradiatingModality #fce079: Device ID = DevXX\nPractitioner ID = PractXX\nStudyInstanceUID = SIUD

Patient -> IrradiatingModality : perform diagnostic imaging
activate IrradiatingModality #b3ffd7

IrradiatingModality -> RDSP : Share Radiation Information (RDSR)
activate RDSP  #b3ffd7
RDSP --> IrradiatingModality : return
deactivate RDSP

IrradiatingModality --> Patient: return
deactivate IrradiatingModality

activate RDSP #b3ffd7

RDSP -> server : GET Patient?identifier=PIDXX
activate server #b3ffd7
server --> RDSP : return Patient
deactivate server

RDSP -> server : GET Device?identifier=DevXX
activate server #b3ffd7
server --> RDSP : return Device
deactivate server

RDSP -> server : GET Practitioner?identifier=PractXX
activate server #b3ffd7
server --> RDSP : return Practitioner
deactivate server

RDSP -> server : GET ImagingStudy?identifier=SIUID
activate server #b3ffd7
server --> RDSP : return ImagingStudy
deactivate server

RDSP -> RDSP  : Construct \nRadiation Dose Summary Resources
activate RDSP #b3ffd7
deactivate RDSP

RDSP -> server : POST \nRadiation Dose Summary
activate server #b3ffd7
server --> RDSP : return
deactivate server
deactivate RDSP

RDSC -> server: Search and GET \nRadiation Dose Summary Resources
activate server #b3ffd7
server --> RDSC : return resources
deactivate server

RDSC -> server: POST \nRadiation Summary Report
activate server #b3ffd7
server --> RDSC : return
deactivate server
@enduml

---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/images-source/seq2.plantuml

@startuml seq2
hide footbox
skinparam sequenceMessageAlign center
skinparam sequence {
ArrowColor #005500
LifeLineBorderColor Black
ActorFontColor Black
ActorBorderColor Black
ParticipantBorderColor Black
ParticipantBackgroundColor #c9f4ff
ActorBackgroundColor #c9f4ff
}

actor Patient
participant "Irradiating Modality" as IrradiatingModality
participant "RDSP Actor \n&& \nFHIR Server" as RDSP
participant "RDSC Actor" as RDSC

Patient -> IrradiatingModality : perform diagnostic imaging
activate IrradiatingModality #b3ffd7

IrradiatingModality -> RDSP : Share Radiation Information (RDSR)
activate RDSP  #b3ffd7
RDSP --> IrradiatingModality : return

IrradiatingModality --> Patient: return
deactivate IrradiatingModality

RDSP -> RDSP  : Construct && Expose\nRadiation Dose Summary resources && \nContextual resources (Patient, Practitioner, etc.)
activate RDSP #b3ffd7
deactivate RDSP

deactivate RDSP

RDSC -> RDSP: Search and GET \nRadiation Dose Summary Resources
activate RDSP #b3ffd7
RDSP--> RDSC: return resources
deactivate RDSP
@enduml

---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/images-source/usecase1.plantuml

@startuml usecase1
hide footbox

actor Radiologist
participant "Acquisition Modality" as Modality
participant "Dose Management System\n(DMS)" as DMS
participant "Radiology Information System \n(RIS)" as RIS
participant "Electronic Health Record \n(EHR)" as EHR

group IHE REM Profile
  activate Modality
  Modality -> Modality : Perform study
  Modality -> DMS : RAD-62 Store Dose\nInformation (RDSR)
  activate DMS 
  deactivate Modality
end

DMS -> DMS : Compose FHIR Dose Summary
activate RIS
RIS -> DMS : GET FHIR Dose Summary 
DMS --> RIS:
deactivate DMS

Radiologist -> RIS: Dictate report
RIS -> RIS : Consolidate dictation\nand dose summary
Radiologist -> RIS: Sign report
RIS -> EHR : Share imaging report
activate EHR
deactivate RIS

@enduml

---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/pagecontent/archi.md

This chapter describes the different architecture aspects of the resources, profiles and actors identified within the IG.

1. [Profiles & Extensions](#profiles) - FHIR Profiles and extensions defined in the IG
2. [Actors](#actors) - Actors participating in the IG
3. [Terminology](#terminology) - Value Sets defined
4. [Resources Identifiers](#identifiers) - A focus on DICOM identifiers types
5. [Conformance](#conformance) - A focus on the conformance with this IG
6. [Security Consideration](#sec) - Security aspects to be taken in consideration

<a name="profiles"></a>

### Profiles & Extensions
#### Resource Profiles<a name="resources"></a>
* [Radiation Dose Summary](StructureDefinition-radiation-dose-summary.html) profiles the Observation resource to provide the structure for the Radiation Dose Summary reporting.
* [Radiation Summary Report](StructureDefinition-radiation-summary-report.html) profiles Composition resource and defines a report document describing the irradiation act.
* [Indication Observation](StructureDefinition-indication-observation.html) profiles Observation resource to provide the indications related to the performed procedure.
* [Pregnancy Status (IPS)](http://hl7.org/fhir/uv/ips/STU1/StructureDefinition-Observation-pregnancy-status-uv-ips.html){:target="_blank"} profiles Observation resource to provide the pregnancy status of the patient. The Pregnancy Status profile is defined within the [International Patient Summary IG (IPS)](https://hl7.org/fhir/uv/ips/STU1/){:target="_blank"}.
* [Modality Device](StructureDefinition-modality-device.html) profiles Device resource to provide the specificity of a modality as a Device resource.

#### Supporting DataType Profiles <a name="datatypes"></a>
There is no special supporting DataType profiles defined by this IG.

#### Supporting Extensions<a name="extensions"></a>
There is no special supporting extensions defined by this IG.

#### Profiles relationship
![Profiles relationship](./archi.svg){: width="80%"}

<br clear="all" />

There are two levels or profiles:
* Radiation Observation profile: This profile allows for the description of a performed radiation act, summarizing the radiation report generated by the modality. See [Radiation Dose Summary](StructureDefinition-radiation-dose-summary.html) in the class diagram above.
* Radiation Report profiles: These profiles reference the radiation observation resources and enhance the collected information in a general radiation report by relating it to the patient's conditions and the procedure indications. See [Radiation Summary Report](StructureDefinition-radiation-summary-report.html), [Indication Observation](StructureDefinition-indication-observation.html), and [Pregnancy Status (IPS)](http://hl7.org/fhir/uv/ips/STU1/StructureDefinition-Observation-pregnancy-status-uv-ips.html){:target="_blank"} in the class diagram above. The latter two profiles contain information collected before the patient's imaging procedure, explaining the two levels of profiles.

A general [Radiation Dose Summary](StructureDefinition-radiation-dose-summary.html) provides a summary of an irradiation act related to a performed procedure and specific equipment. This profile allows the reporting of radiation data as structured text within its valueString element. The structure of the text included in valueString is site-dependent.

<a name="components"></a>
Radiation Dose Summary profiles are using the component element to describe the different parameters of the radiation procedure. We consider that the attributes of the components in the radiation summary resources are part of the resource itself when provided, which cannot be understood without reading the complete different components. Having different Observations referenced in multiple hasMember elements is not useful, as the interpretation of the radiation dose summary resource needs to access to all the different parameters of the radiation procedure.

<a name="actors"></a>

### Actors
A list of actors are identified within this IG:
* Radiation Dose Summary Producer
* FHIR Server
* Radiation Dose Summary Consumer

![Actors](./actors.svg){: width="100%"}

<br clear="all" />

#### Radiation Dose Summary Producer

The Radiation Dose Summary Producer (RDSP) is responsible for creating the Radiation Dose Summary observation and sharing it with the FHIR Server. The RDSP should synchronize multiple resources with the FHIR Server to avoid duplicating resources. For example, the RDSP should verify if the patient already exists in the FHIR Server; if the patient does exist, only a reference to the patient should be created. In this case, the POST bundle to the FHIR Server should not contain a Patient resource.

Generally, this actor can be implemented within a Dose Management System.

The RDSP should implement the following CapabilityStatement: [RDSP capability statement](CapabilityStatement-RDSP.html).

The RDSP actor SHALL adhere to the security considerations in the [security](archi.html#security-consideration) section. Sharing PHI shall comply with the local security requirements of the deploying facility.

#### FHIR Server

The FHIR Server has two functions:
1. Provide the diagnostic procedure context to both the Radiation Dose Summary Producer and Consumer actors
2. Store the Radiation Dose Summary resources and Irradiation Event resources from the Radiation Dose Summary Producer actor

Thus, the FHIR Server can be divided in fact in two sub-actors: one to provide the contextual resources, and one for the Radiation Dose resources.

The contextual resources are resources managed by the FHIR Server and related to the imaging procedure, and works as a source of truth for these resources:
1. Patient: the subject of the imaging study.
2. Device: the modality.
3. Practitioner: the irradiation authorizing persons responsible on the performed exams.
4. ImagingStudy: resources describing the performed exams.

When these resources are not present in the FHIR Server, the Radiation Dose Summary Producer can complement the FHIR Server by creating observations from the RDSRs and images collected from modalities.

The FHIR Server is a logical actor which could be part of an EHR related to the patient care. Also, it can be part of the Dose Management System, used to expose radiation summary to third party consumers.

The FHIR Server can implement the following CapabilityStatements:
* [FHIRServer-RDSP](CapabilityStatement-FHIRServer-RDSP.html) - Requirements for FHIR Server interacting with RDSP actor
* [FHIRServer-RDSC](CapabilityStatement-FHIRServer-RDSC.html) -  Requirements for FHIR Server interacting with RDSC actor
* [FHIRServer](CapabilityStatement-FHIRServer.html) - Requirements for FHIR Server actor

The FHIR Server SHALL follow the different security considerations mentioned in [security](archi.html#security-consideration) section.

#### Radiation Dose Summary Consumer

The Radiation Dose Summary Consumer (RDSC) actor is responsible for retrieving the Radiation Dose Summary observation (e.g., a RIS or EHR may enhance the final radiology report with radiation information). 

Specialized expertise is required to understand  radiation dose data. The interpretation of the radiation information collected by the Radiation Dose Summary Consumer shall follow the local policies and jurisdictional requirements to avoid misuse.

The RDSC actor can implement the following CapabilityStatement: [RDSC capability statement](CapabilityStatement-RDSC.html).

The RDSC actor SHALL follow the different security considerations mentioned in [security](archi.html#security-consideration) section. Collection of Data from the FHIR Server SHALL follow consent requirements used within the deploying facility, as described in [security](archi.html#security-consideration) section.

#### Actor grouping
The FHIR Server can be grouped with the Radiation Dose Summary Producer actor within the Dose Management System. Thus, the Dose Management System is managing all the resources and references between resources. Another possible grouping is between the FHIR Server and the Radiation Dose Summary Consumer actor (e.g., within EHR systems or RIS/EHR systems). In this case, the source of truth for contextual resources are independent from the Radiation Dose Summary Producer.

#### Actor communication

The following sequence diagram describes the typical workflow between the RDSP actor, the FHIR Server, and the RDSC actor.

![Actors relationship](./seq-simplified.svg){: width="900px"}

<br clear="all" />

In this workflow, a patient undergoes an irradiating study (including a nuclear medicine administration). The detailed radiation information is shared with the Radiation Dose Summary Producer actor, which may be a Dose Management System. 
During the process of creating the Radiation Dose Summary resources, the RDSP actor makes queries to the FHIR Server in order to collect the correct IDs to be referred in the newly created resources (i.e., Patient, Practitioner, Modality, and ImagingStudy resources). Many of these resources can be found within the DICOM RDSR provided by the modality. Some identifiers within the RDSR can be used for querying the FHIR Server. Below is a mapping illustrating the relationship between the FHIR resources and the DICOM identifiers:

| FHIR Resource        |      Identifier from DICOM       |
|--------------------------|-----------------------|
| Patient | tag(0010,0020) Patient ID |
| Practitioner | TID 1020(Person Participant).EV (113871, DCM, Person ID) |
| ImagingStudy | tag(0020,000D) Study Instance UID |
| Device | tag(0018,1000) Device Serial Number |
{:.table-striped .table-bordered}

The IDs collected are used to construct the Radiation Dose Summary resources and their related Irradiation Event resources. Then, these resources are shared with the FHIR Server through a POST of a bundle. The bundle may contain temporary resources related to Patient, ImagingStudy, and other contextual resources, if the FHIR Server has no reference of them.

Once the resources are shared with the FHIR Server, the Radiation Dose Summary Consumer can search and retrieve the resources from the FHIR Server. The RDSC actor can optionally enrich the FHIR Server resources by posting a Composition document as profiled by the Radiation Summary Report profile.

<a name="terminology"></a>

### Terminology

#### Value Sets Defined
These Value Sets have been defined for this implementation guide.

1. [Isotopes Value Set](ValueSet-isotope-rds-vs.html)
2. [Procedure Reported Type Value Set](ValueSet-procedure-reported-type-rds-vs.html)
3. [Radiopharmaceuticals Value Set](ValueSet-radiopharmaceutical-rds-vs.html)
4. [Radiation Dose Summary component type](ValueSet-component-radiation-dose-summary-vs.html)

#### Value Sets Used
DICOM ValueSet links:
1. [CID 4030 CT, MR and PET Anatomy Imaged](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_4030.html){:target="_blank"}
2. [CID 4052 Phantom Devices](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_4052.html){:target="_blank"}
3. [CID 33 Modality](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_33.html){:target="_blank"}
4. [CID 11 Route of Administration](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_11.html){:target="_blank"}
5. [CID 25 Radiopharmaceuticals](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_25.html){:target="_blank"}
6. [CID 4021 PET Radiopharmaceutical](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_4021.html){:target="_blank"}
7. [CID 18 Isotopes in Radiopharmaceuticals](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_18.html){:target="_blank"}
8. [CID 4020 PET Radionuclide](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_4020.html){:target="_blank"}

#### Code Systems Defined
One new code system is defined under this IG:
1. [DICOM Identifier Type](CodeSystem-dicom-identifier-type.html)

#### Code Systems Used
This implementation guide draws on a number of formal code systems.

The following table presents the external code systems (and naming conventions) adopted in this implementation guide: 

| Code System Key | Code System Name | Code System | Application |
|--------------------------|-----------------------|--------------|---------------|
| LOINC | Logical Observation Identifiers Names and Codes | http://loinc.org | Observation and laboratory codes |
| SNOMED CT | Systematized Nomenclature of Medicine Clinical Terms | http://snomed.info/sct | Procedures, anatomy, products, isotopes |
| DCM | DICOM | http://dicom.nema.org/resources/ontology/DCM | Devices, products, radiation information |
{:.table-striped .table-bordered}

#### Value Sets strength
The following table summarizes the mapping between defined profiles and Value sets strength: 
 
| Profile | Element path | Value Set | Strength | Strength Justification |
|---------|--------------|-----------|----------|------------------------|
| Modality Device | type | [CID 33 Modality](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_33.html){:target="_blank"} | required | VS contains the exhaustive list of modality types |
| Radiation Dose Summary | component.code | [Components' Code for Radiation Dose Summary](ValueSet-component-radiation-dose-summary-vs.html) | extensible |  to keep the possibility to extend the list of reported components |
| Radiation Dose Summary | component:procedureReported | [Procedure Reported Type Value Set](ValueSet-procedure-reported-type-rds-vs.html) | required | procedure reported component is the differentiator of irradiation type |
{:.table-striped .table-bordered}

<a name="identifiers"></a>

### Resources Identifiers

Many profiles defined in this IG are using DICOM IDs and UIDs as identifiers for the resources. In this paragraph, we summarize the different IDs and UIDs used, and the way they should be exposed in FHIR resources:

| Profile | Identifier | Identifier.system | Identifier.type.code | Identifier.type.system | Identifier.type.display | DICOM Tag Mapping |
|---------|------------|-------------------|----------------------|------------------------|-------------------------|---------|
| [Modality Device](StructureDefinition-modality-device.html) | identifier:deviceSerialNumber | | SNO | [HL7 IdentifierType](http://terminology.hl7.org/CodeSystem/v2-0203){:target="_blank"} | Serial Number | (0018,1000) Device Serial Number |
| [Modality Device](StructureDefinition-modality-device.html) | identifier:aeTitle | | application-entity | [DICOM Identifier Type](CodeSystem-dicom-identifier-type.html) | Application Entity | N/A |
| [Modality Device](StructureDefinition-modality-device.html) | identifier:deviceUID | urn:dicom:uid | device-uid | [DICOM Identifier Type](CodeSystem-dicom-identifier-type.html) | Device UID | (0018,1002) Device UID |
| [Modality Device](StructureDefinition-modality-device.html) | identifier:deviceID | | device-id | [DICOM Identifier Type](CodeSystem-dicom-identifier-type.html) | Device ID | (0018,1003) Device ID |
| [Radiation Dose Summary](StructureDefinition-radiation-dose-summary.html) | identifier:radiationSRUID | urn:dicom:uid | sop-instance-uid | [DICOM Identifier Type](CodeSystem-dicom-identifier-type.html) | SOP Instance UID | (0008,0018) SOP Instance UID |
| [Radiation Dose Summary](StructureDefinition-radiation-dose-summary.html) | partOf.identifier | urn:dicom:uid | study-instance-uid | [DICOM Identifier Type](CodeSystem-dicom-identifier-type.html) | Study Instance UID | (0020,000D) Study Instance UID |
| [Radiation Dose Summary](StructureDefinition-radiation-dose-summary.html) | basedOn.identifier | | ACSN | [HL7 IdentifierType](http://terminology.hl7.org/CodeSystem/v2-0203){:target="_blank"} | Accession ID | (0008,0050) Accession Number |
{:.table-striped .table-bordered}

Following the notes within the [ImagingStudy](http://hl7.org/fhir/imagingstudy.html#notes) resource - <i>When encoding a DICOM UID in an Identifier datatype, use the Identifier system of "urn:dicom:uid"</i> - the identifiers related to DICOM tags having the Value Representation (VR) of type UID, shall have the <code>type.system=urn:dicom:uid</code>.

Here some examples :
* Irradiation Event UID : 
<pre class="json">
"identifier": [
    {
        "type": {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/uv/radiation-dose-summary/CodeSystem/dicom-identifier-type",
                    "code": "irradiation-event-uid",
                    "display": "Irradiation Event UID"
                }
            ]
        },
        "system": "urn:dicom:uid",
        "value": "urn:oid:1.2.840.121.3.32.0.1.1323423.2"
    }
]
</pre>

* Application Entity :
<pre class="json">
"identifier": [
    {
        "type": {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/uv/radiation-dose-summary/CodeSystem/dicom-identifier-type",
                    "code": "application-entity",
                    "display": "Application Entity"
                }
            ]
        },
        "value": "XA01"
    }
]
</pre>

<a name="conformance"></a>

### Conformance

#### Conventions
This implementation guide uses specific terminology to flag statements that have relevance for the evaluation of conformance with the guide:

* <b>SHALL</b> indicates requirements that must be met to be conformant with the specification.
* <b>SHOULD</b> indicates behaviors that are strongly recommended (and which may result in interoperability issues or sub-optimal behavior if not adhered to), but which do not, for this version of the specification, affect the determination of specification conformance.
* <b>MAY</b> describes optional behaviors that are free to consider but where the is no recommendation for or against adoption.

#### Claiming Conformance

Actors and Systems asserting conformance to this implementation guide have to implement the requirements outlined in the corresponding capability statements. The following definition of MUST SUPPORT is to be used in the implementation of the requirements.

#### Must Support
In the context of this IG, mustSupport on any data element SHALL be interpreted as follows:

* When creating Radiation Dose Summary content, implementers SHALL be capable of including mustSupport data elements.
* When receiving Radiation Dose Summary content, implementers:
    * SHALL be capable of processing resource instances containing mustSupport data elements without generating an error or causing the application to fail.
    * SHOULD be capable of displaying mustSupport data elements for human use, or processing (e.g., storing) them for other purposes.

<a name="sec"></a>

### Security Consideration
Exchanging Radiation summary resources makes use of patient-specific information which could be exploited by malicious actors resulting in exposure of patient data. For these reasons, all data exchange between the different actors must be secured appropriately with access to limited authorized individuals, data protected in transit, and appropriate audit measures taken. 

Implementers SHOULD be aware of these [security considerations](http://hl7.org/fhir/R4/security.html){:target="_blank"} associated with FHIR transactions, particularly those related to:

* [Communications](http://hl7.org/fhir/R4/security.html#http){:target="_blank"}
* [Authentication](http://hl7.org/fhir/R4/security.html#authentication){:target="_blank"}
* [Authorization/Access Control](http://hl7.org/fhir/R4/security.html#authorization/access%20control){:target="_blank"}
* [Audit Logging](http://hl7.org/fhir/R4/security.html#audit%20logging){:target="_blank"}
* [Digital Signatures](http://hl7.org/fhir/R4/security.html#digital%20signatures){:target="_blank"}
* [Security Labels](http://hl7.org/fhir/R4/security-labels.html){:target="_blank"}
* [Narrative](http://hl7.org/fhir/R4/security.html#narrative){:target="_blank"}

These security requirements are highlighted in the context of this IG:
* Systems **SHALL** keep audit logs of the various transactions. Some auditing workflows can be used like IHE ATNA or RESTful ATNA.
* Systems **SHALL** use TLS version 1.2 or higher for all transmissions not taking place over a secure network connection. IHE ATNA may be followed for the TLS usage.
* Systems **SHALL** conform to FHIR [Communications Security requirements](http://hl7.org/fhir/R4/security.html#http){:target="_blank"}.
* Systems **SHALL** implement consent requirements per their country, state, local, and institutional policies.

---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/pagecontent/background.md

This chapter describes the scope of this guide, provides background information about the radiation dose summary IG, key concepts, and describes the use cases supported by this implementation guide.

1. [Problem](#problem) - Description of the problem
2. [Scope](#scope) - Scope of the IG
3. [Use case](#usecases) - Key use case covered by the IG
4. [Minimal Radiation Information](#mindose) - Description of data shared through this IG
5. [Underlying specifications](#underlying-specs) - Description of the underlying specifications and resources.
6. [Glossary](#glossary) - Glossary of terms used in this IG
7. [References](#references) - Useful references

<a name="problem"></a>

### Problem

The IHE Dose Reporter actor within the IHE (Radiation Exposure Monitoring) REM profile gathers radiation information and dose reports from modalities. However, there is no standard to expose a dose summary to third parties in a light API based format. 

![Problem](./problem.svg){: width="600px"}

<br clear="all" />

Note: This IG also supports the summary of Radiopharmaceutical dose (not depicted above), in which Radiopharmaceutical Activity Information is provided to the Dose Info Reporter by the Radiopharmaceutical Activity Supplier. See [IHE REM for Nuclear Medicine (REM-NM)](https://ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_REM-NM.pdf){:target="_blank"} for more information.

The Dose Reporter (a.k.a. Dose Management system) needs to share information related to exam dose to multiple systems outside the REM profile.

Radiation Dose Structured Reports (RDSRs) and Radiopharmaceutical Radiation Dose SRs (RRDSRs) have a complete and stable structure for recording dose information however, many Radiology Information (RIS) and Electronic Health Record (EHR) systems lack the capability to consume them. In most cases, the RIS/EHR need are light, requiring only a dose summary for inclusion in radiology reports, warranting a lightweight standard to obtain the necessary information from the Dose Management system.

The emergence of HL7 FHIR simplified the exchange between back end applications and other systems through the exchange of resources with stable structures. This IG facilitates the sharing of minimal dose information through FHIR Resources.

<a name="scope"></a>

### Scope

The defined profiles in this IG describe radiation information within a unique irradiation act, which may contain multiple irradiation events. 
This IG does not provide sufficient information to guide patient care decisions, or to influence decision making prior to prescribing studies. 

In Scope:
* Summary of dose information by exam through FHIR
* Irradiation to which the patient was exposed
* CT, XA, DX, RF, MG, NM

Out of Scope:
* Details of radiation administration
* Enhanced data (SSDE, Organ Dose, etc.)
* Cumulative calculation of radiation over time
* Irradiation to which the practitioner was exposed
* Radiotherapy


Details of radiation administration (e.g., X-ray parameters, modality configuration, etc.) and enhanced  data (e.g., size specific dose estimation), are available in DICOM Radiation Structured Reports (RDSRs).

Interpretation of radiation information may be influenced by several external factors not addressed in this IG.

The FHIR profiles defined in this IG are a solution to simplify sharing the radiation summary information between applications. This IG is not meant to describe how the radiation data is assessed or who can access and interpret it. Such interpretation requires domain expertise and additional data not available in RDSRs or RRDSRs. Implementers are urged to follow international and national regulations and recommendations, such as [AAPM/ACR/HPS Joint Statement on Proper Use of Radiation Dose Metric Tracking for Patients Undergoing Medical Imaging Exams](https://www.aapm.org/org/policies/details.asp?id=1533&type=PP){:target="_blank"}.

<a name="usecases"></a>

### Use case: Imaging report construction

![Use case 1: Imaging report construction](./usecase1.svg){: width="800px"}

<br clear="all" />

The main use case identified for this implementation guide is the following: 

* The modality transfers the dose report to the Dose Management System (i.e. IHE REM Dose Reporter). 
* After analyzing the study, the radiologist dictates a report within the Radiology Information System (RIS).
* The RIS queries the Dose Management system to obtain a Dose Summary.
* The RIS incorporates the Dose Summary into to the report.
* The radiologist signs the final report.
* The report is available in the hospital EHR.
* Optionally (not shown), the report is shared with the regional/national radiology report repository.

Note: this case shows the RIS pulling (GET) the Dose Summary, it could also be pushed (PUT)

This case is common in RIS systems without a dose management module, in which gathering dose information from multiple sources can be complex due to:
* multiple sources of data (e.g., RDSR, MPPS, SC & OCR, and DICOM image metadata), and
* coercion of reported data in order to provide summary. 

It is the role of the Dose Management system to provide the RIS with the correct information regarding the administered dose. Reporting the minimal dose information within the final imaging report is recommended by various organizations, and may be required by local regulation. For example:
* French order of 22 September 2006 requires the report to provide information justifying the procedure,the operations carried out, as well as the data used to estimate the dose received by the patient.
* California Senate bill Senate Bill No. 1237 requires "...health facilities and clinics that use imaging procedures that involve computed tomography X-ray systems (CT) for human use to record the dose of radiation on every CT study produced during a CT examination."

<a name="mindose"></a>

### Minimal Radiation Information
#### Identification

In this paragraph, we analyze the mapping between the identified minimal dose information and some specifications on dose information reporting coming from multiple stakeholders:

* [DICOM PS3.20: Imaging Reports using HL7 Clinical Document Architecture](http://dicom.nema.org/medical/dicom/current/output/html/part20.html){:target="_blank"}
* [DICOM PS3.16: Content Mapping Resource](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/PS3.16.html){:target="_blank"}
    * [X-Ray Radiation Dose SR IOD Templates](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_XRayRadiationDoseSRIODTemplates.html){:target="_blank"}
    * [CT Radiation Dose SR IOD Templates](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CTRadiationDoseSRIODTemplates.html){:target="_blank"}
    * [Radiopharmaceutical Radiation Dose SR IOD Templates](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_RadiopharmaceuticalRadiationDoseSRIODTemplates.html){:target="_blank"}
    * [TID 2008 - Radiation Exposure and Protection Information](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_2008){:target="_blank"}
* France guidelines
    * French Society of Radiology - SFR, [Practical Guide for Interventional Radiology](http://gri.radiologie.fr/){:target="_blank"} (Guideline - 2013)
    * High Authority of Health - HAS, [Patient radiation protection and analysis of CPD practices and certification of healthcare establishments](https://www.has-sante.fr/upload/docs/application/pdf/2013-07/radioprotection_du_patient_et_analyse_des_pratiques_dpc_et_certification_des_etablissements_de_sante_format2clics.pdf){:target="_blank"} (Guideline - 2012)
    * [Presentation of the main radiation protection regulatory provisions applicable in medical and dental radiology](https://www.cd2-conseils.com/wp-content/uploads/2016/11/rp_asn_presentation-principales-dispositions-reglementaires_2016.pdf){:target="_blank"} (Guideline: 2016)
    * French Minister of Health and Solidarity, [Order of 22 September 2006 relating to the radiation information to be included in an act report using ionizing radiation](https://www.legifrance.gouv.fr/eli/arrete/2006/9/22/SANY0623888A/jo/texte){:target="_blank"}, (Order - 2006)
* Finnish Imaging Report specification, [KanTa Imaging CDA R2 document structures](http://www.hl7.fi/hl7-rajapintakartta/kanta-%E2%80%93-kuvantamisen-cda-r2-rakenne/){:target="_blank"} (2013)
* US, California State
    * AAPM, [Computed Tomography Dose Limit Reporting Guidelines for Section 3 – 115113](https://aapm.org/government_affairs/documents/SB-1237Section3_v7.pdf){:target="_blank"}
    * [Senate Bill No. 1237, CHAPTER 521](http://www.leginfo.ca.gov/pub/09-10/bill/sen/sb_1201-1250/sb_1237_bill_20100929_chaptered.pdf){:target="_blank"}
    * AAPM, [Experience with California Law on Reporting CT Dose](http://amos3.aapm.org/abstracts/pdf/77-22649-312436-91875.pdf){:target="_blank"}
    * [Radiologist Compliance With California CT Dose Reporting Requirements: A Single-Center Review of Pediatric Chest CT](https://www.ajronline.org/doi/pdf/10.2214/AJR.14.13693){:target="_blank"}
    * University of California Dose Optimization and Standardization Endeavor (UC-DOSE). [Recommendations for compliance with California Senate Bill 1237 and related pending legislation.](http://files.ctctcdn.com/da9de144201/b78c37fa-a36b-4888-a418-fa21a314393e.pdf){:target="_blank"}

The analysis of the different specifications allowed to obtain the following coverage between the minimal dose information and these specifications/guidelines:

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=1213 style='width:910.0pt;border-collapse:unset'>
    <tr style='height:15.6pt'>
        <td width=467 rowspan=2 style='width:350.5pt;border:solid windowtext 1.0pt;  background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
            <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                <b>
                    <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>Dose Information</span>
                </b>
            </p>
        </td>
        <td width=193 colspan=5 style='width:144.85pt;border:solid windowtext 1.0pt;  border-left:none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
            <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                <b>
                    <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>Modality</span>
                </b>
            </p>
        </td>
        <td width=18 style='width:13.85pt;border:solid windowtext 1.0pt;border-left:  none;background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
            <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                <b>
                    <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </b>
            </p>
        </td>
        <td width=65 rowspan=2 style='width:48.75pt;border:solid windowtext 1.0pt;  border-left:none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
            <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                <b>
                    <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>PS3.20</span>
                </b>
            </p>
        </td>
        <td width=236 colspan=4 style='width:177.05pt;border:solid windowtext 1.0pt;  border-left:none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
            <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                <b>
                    <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>PS3.16</span>
                </b>
            </p>
        </td>
        <td width=18 style='width:13.85pt;border:solid windowtext 1.0pt;border-left:  none;background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
            <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                <b>
                    <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </b>
            </p>
        </td>
        <td width=68 rowspan=2 style='width:50.85pt;border:solid windowtext 1.0pt;  border-left:none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
            <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                <b>
                    <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>Finland</span>
                </b>
            </p>
        </td>
        <td width=62 rowspan=2 style='width:46.8pt;border:solid windowtext 1.0pt;  border-left:none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
            <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                <b>
                    <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>France</span>
                </b>
            </p>
        </td>
        <td width=85 rowspan=2 style='width:63.5pt;border:solid windowtext 1.0pt;  border-left:none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
            <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                <b>
                    <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>USA
                        <br>California
                        </span>
                    </b>
                </p>
            </td>
        </tr>
        <tr style='height:31.2pt'>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#D9E1F2;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:31.2pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <b>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>CT</span>
                    </b>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:31.2pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <b>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>XA</span>
                    </b>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:31.2pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <b>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>RF</span>
                    </b>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#D9E1F2;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:31.2pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <b>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>MG</span>
                    </b>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:31.2pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <b>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>NM</span>
                    </b>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:31.2pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <b>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                    </b>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:31.2pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <b>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>CT RDSR</span>
                    </b>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:31.2pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <b>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>X-Ray RDSR</span>
                    </b>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#D9E1F2;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:31.2pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <b>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>RRDSR</span>
                    </b>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:31.2pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <b>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>TID 2008</span>
                    </b>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:31.2pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <b>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                    </b>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal style='margin-bottom:0cm;line-height:normal'>
                    <b>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;color:black'>Irradiation authorizing Person</span>
                    </b>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal style='margin-bottom:0cm;line-height:normal'>
                    <b>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;color:black'>Pregnancy Observation</span>
                    </b>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal style='margin-bottom:0cm;line-height:normal'>
                    <b>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;color:black'>Indication Observation</span>
                    </b>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal style='margin-bottom:0cm;line-height:normal'>
                    <b>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;color:black'>Device</span>
                    </b>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal style='margin-bottom:0cm;line-height:normal'>
                    <b>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;color:black'>Irradiation Issued Date</span>
                    </b>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal style='margin-bottom:0cm;line-height:normal'>
                    <b>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;color:black'>Associated Procedure</span>
                    </b>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal style='margin-bottom:0cm;line-height:normal'>
                    <b>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;color:black'>Dose measurements - Study level</span>
                    </b>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=right style='margin-bottom:0cm;text-align:right;  line-height:normal'>
                    <i>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>Dose (RP) Total</span>
                    </i>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border:none;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=right style='margin-bottom:0cm;text-align:right;  line-height:normal'>
                    <i>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>Accumulated Average Glandular Dose</span>
                    </i>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border:solid windowtext 1.0pt;border-left:  none;background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=right style='margin-bottom:0cm;text-align:right;  line-height:normal'>
                    <i>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>Dose Area Product Total</span>
                    </i>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=right style='margin-bottom:0cm;text-align:right;  line-height:normal'>
                    <i>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>Fluoro Dose Area Product Total</span>
                    </i>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=right style='margin-bottom:0cm;text-align:right;  line-height:normal'>
                    <i>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>Acquisition Dose Area Product Total</span>
                    </i>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=right style='margin-bottom:0cm;text-align:right;  line-height:normal'>
                    <i>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>Total Fluoro Time</span>
                    </i>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=right style='margin-bottom:0cm;text-align:right;  line-height:normal'>
                    <i>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>Total Number of Radiographic Frames</span>
                    </i>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=right style='margin-bottom:0cm;text-align:right;  line-height:normal'>
                    <i>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>CT Dose Length Product Total</span>
                    </i>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=right style='margin-bottom:0cm;text-align:right;  line-height:normal'>
                    <i>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>Administered activity</span>
                    </i>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=right style='margin-bottom:0cm;text-align:right;  line-height:normal'>
                    <i>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>Radiopharmaceutical Agent</span>
                    </i>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=right style='margin-bottom:0cm;text-align:right;  line-height:normal'>
                    <i>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>Radionuclide</span>
                    </i>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=right style='margin-bottom:0cm;text-align:right;  line-height:normal'>
                    <i>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>Radiopharmaceutical Volume</span>
                    </i>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=right style='margin-bottom:0cm;text-align:right;  line-height:normal'>
                    <i>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>Route of administration</span>
                    </i>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal style='margin-bottom:0cm;line-height:normal'>
                    <b>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;color:black'>Dose measurements - Irradiation Event level</span>
                    </b>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#E7E6E6;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=right style='margin-bottom:0cm;text-align:right;  line-height:normal'>
                    <i>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>Mean CTDIvol</span>
                    </i>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=right style='margin-bottom:0cm;text-align:right;  line-height:normal'>
                    <i>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>DLP</span>
                    </i>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=right style='margin-bottom:0cm;text-align:right;  line-height:normal'>
                    <i>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>Target Region</span>
                    </i>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
        </tr>
        <tr style='height:15.6pt'>
            <td width=467 style='width:350.5pt;border:solid windowtext 1.0pt;border-top:  none;background:#D9E1F2;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=right style='margin-bottom:0cm;text-align:right;  line-height:normal'>
                    <i>
                        <span style='font-size:12.0pt;font-family:"Times New Roman",serif;  color:black'>CTDIw Phantom Type</span>
                    </i>
                </p>
            </td>
            <td width=37 style='width:27.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=38 style='width:28.15pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=36 style='width:26.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=42 style='width:31.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#F8CBAD;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=41 style='width:30.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#F8CBAD;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=65 style='width:48.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=58 style='width:43.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#C6E0B4;vertical-align:middle;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
            <td width=67 style='width:50.55pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=60 style='width:45.2pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=50 style='width:37.75pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=18 style='width:13.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  background:#E7E6E6;padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=68 style='width:50.85pt;border-top:none;border-left:none;  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=62 style='width:46.8pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;  height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>&nbsp;</span>
                </p>
            </td>
            <td width=85 style='width:63.5pt;border-top:none;border-left:none;border-bottom:  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;background:#C6E0B4;vertical-align:middle;  padding:0cm 5.4pt 0cm 5.4pt;height:15.6pt'>
                <p class=MsoNormal align=center style='margin-bottom:0cm;text-align:center;  line-height:normal'>
                    <span style='font-size:10.0pt;font-family:"Times New Roman",serif;  color:black'>Y</span>
                </p>
            </td>
        </tr>
    </table>

#### Concepts mapping

The  minimal dose information that should be collected by the Dose Management system and shared with third party applications are divided into contextual data and dose measurement data.

Contextual Information data:

| Contextual Information         |      Identifier       | Level |
|--------------------------------|-----------------------|-------|
| Irradiation Authorizing Person | [EV (113850, DCM, Irradiation Authorizing)](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_113850){:target="_blank"} | Procedure |
| Pregnancy Observation          | [EV (82810-3, LN, Pregnancy status)](http://snomed.info/id/364320009){:target="_blank"} | Procedure |
| Indication Observation         | [EV (18785-6, LN, Indications for Procedure)](http://loinc.org/18785-6/){:target="_blank"} | Procedure |
| Irradiating Device             | [EV (113859, DCM, Irradiating Device)](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_113859){:target="_blank"} | Procedure |
| Irradiation Issued Date        | [EV (113809, DCM, Start of X-Ray Irradiation)](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_113809){:target="_blank"} | Procedure |
| Related Imaging Study          | [EV (110180, DCM, Study Instance UID)](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_110180){:target="_blank"} | Procedure |
{:.table-striped .table-bordered}

Dose measurements data:

| Dose Measurements | Identifier | DICOM TID | Level | Type | Unit/ValueSet |
|---------------------------------------|--------------------------------------------|--------------|
| Dose (RP) Total        | [EV (113725, DCM, Dose (RP) Total)](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_113725){:target="_blank"} | [TID 10007](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_TID_10007.html){:target="_blank"}| Procedure | Quantity | mGy |
| Accumulated Average Glandular Dose        |      [EV (111637, DCM, Accumulated Average Glandular Dose)](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_111637){:target="_blank"} | [TID 10005](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_TID_10005.html){:target="_blank"} | Procedure   | Quantity   | mGy |
| Dose Area Product Total        | [EV (113722, DCM, Dose Area Product Total)](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_113722){:target="_blank"} | [TID 10007](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_TID_10007.html){:target="_blank"} | Procedure  |  Quantity    | mGy.cm2 |
| Fluoro Dose Area Product Total | [EV (113726, DCM, Fluoro Dose Area Product Total)](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_113726){:target="_blank"} | [TID 10004](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_TID_10004.html){:target="_blank"}  | Procedure  |  Quantity    | mGy.cm2 |
| Acquisition Dose Area Product Total        | [EV (113727, DCM, Acquisition Dose Area Product Total)](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_113727){:target="_blank"}  | [TID 10004](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_TID_10004.html){:target="_blank"} | Procedure  |  Quantity    | mGy.cm2 |
| Total Fluoro Time              | [EV (113730, DCM, Total Fluoro Time)](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_113730){:target="_blank"} | [TID 10004](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_TID_10004.html){:target="_blank"}  | Procedure  |  Quantity    | s |
| Total Number of Radiographic Frames        | [EV (113731, DCM, Total Number of Radiographic Frames)](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_113731){:target="_blank"} | [TID 10007](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_TID_10007.html){:target="_blank"} | Procedure  |  Integer    |  |
| CT Dose Length Product Total   | [EV (113813, DCM, CT Dose Length Product Total)](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_113813){:target="_blank"} | [TID 10012](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_TID_10012.html){:target="_blank"} | Procedure  |  Quantity    | mGy.cm |
| Administered activity          | [EV (113507, DCM, Administered activity)](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_113507){:target="_blank"} | [TID 10022](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_TID_10022.html){:target="_blank"} | Administration  |  Quantity    | MBq |
| Radiopharmaceutical Agent      | [EV (349358000, SCT, Radiopharmaceutical agent)](http://snomed.info/id/349358000){:target="_blank"} | [TID 10022](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_TID_10022.html){:target="_blank"} | Administration | CodeableConcept | [Radiopharmaceuticals Value Set](ValueSet-radiopharmaceutical-rds-vs.html) |
| Radionuclide                  | [EV (89457008, SCT, Radionuclide)](http://snomed.info/id/89457008){:target="_blank"} | [TID 10022](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_TID_10022.html){:target="_blank"} | Administration | CodeableConcept | [Isotopes Value Set](ValueSet-isotope-rds-vs.html) |
| Radiopharmaceutical Volume     | [EV (123005, DCM, Radiopharmaceutical Volume)](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_123005){:target="_blank"} | [TID 10022](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_TID_10022.html){:target="_blank"} | Administration | Quantity | cm3 |
| Route of administration        | [EV (410675002, SCT, Route of administration)](http://snomed.info/id/410675002){:target="_blank"} | [TID 10022](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_TID_10022.html){:target="_blank"} | Administration | CodeableConcept | [Route of Administration](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_11.html){:target="_blank"} |
| Mean CTDIvol                   | [EV (113830, DCM, Mean CTDIvol)](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_113830){:target="_blank"} | [TID 10013](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_TID_10013.html){:target="_blank"} | Irradiation Event | Quantity | mGy |
| DLP                           | [EV (113838, DCM, DLP)](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_113838){:target="_blank"} | [TID 10013](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_TID_10013.html){:target="_blank"} | Irradiation Event | Quantity | mGy.cm |
| Target Region                 | [EV (123014, DCM, Target Region)](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_123014){:target="_blank"} | [TID 10013](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_TID_10013.html){:target="_blank"} | Irradiation Event | CodeableConcept | [Anatomy Imaged](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_4030.html){:target="_blank"} |
| CTDIw Phantom Type            | [EV (113835, DCM, CTDIw Phantom Type)](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_113835){:target="_blank"} | [TID 10013](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_TID_10013.html){:target="_blank"} | Irradiation Event | CodeableConcept | [Phantom Devices](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CID_4052.html){:target="_blank"} |
{:.table-striped .table-bordered}

**Remarks**:
* We highlighted the "Dose (RP) Total" and not the "Entrance Exposure at RP", as the latter one is related to the irradiation event level, and not the procedure level. Even if the PS3.20 is referencing the Entrance Exposure at RP, the IEC 61910-1 is referencing the Dose (RP) Total in the Basic Dose Documentation conformance.
* For NM, most of the minimal dose information related to procedure are described in the irradiation event level of the RRDSR structure. However, as there is only one irradiation event per RRDSR, we considered that this minimal dose information is related to the procedure level. However, this implies that for the same NM imaging procedure, multiple Radiation Dose Summaries can be reported. This should not be a problem, as in this case the radiation dose summary is related to the administration act, more than the procedure act.
* The irradiation Issued Date has different significations, based on the targeted procedure type; in CT, it is the start date of the irradiation act, in XA/RF/MG, it is the Series Date Time, and in NM, it is the administration date time.
* The associated procedure is referenced through the related Imaging Study.
* The calibration factors are not reported as part of the minimal dose information. The generator of the Dose Summary resources shall take in consideration these calibration factors.
* Based on the analyzes performed, there is no minimal dose information related to the level Irradiation Event and part of the modalities XA/RF/MG. 

<a name="underlying-specs"></a>

### Underlying specifications

This IG is based on [HL7 FHIR](http://hl7.org/fhir/R4/index.html){:target="_blank"} standard, as well as [DICOM](https://www.dicomstandard.org/current){:target="_blank"} standard, and its packaged value sets [fhir.dicom](http://fhir.org/packages/fhir.dicom){:target="_blank"}. This IG uses also a profile from the specification [International Patient Summary IG (IPS)](https://hl7.org/fhir/uv/ips/STU1/){:target="_blank"}. Implementers of this specification must understand some basic information about the underlying specifications listed above.

#### FHIR
This IG uses terminology, notations and design principles that are specific to the HL7 FHIR standard. Before reading the page [architecture and implementation](archi.html), it is important to be familiar with the basic principles of FHIR and how to read FHIR specifications. Readers who are unfamiliar with FHIR are encouraged to review the following prior to reading the rest of this implementation guide.

* [FHIR overview](http://hl7.org/fhir/R4/overview.html){:target="_blank"}
* [Developer's introduction](http://hl7.org/fhir/R4/overview-dev.html){:target="_blank"} (or [Clinical introduction](http://hl7.org/fhir/R4/overview-clinical.html){:target="_blank"})
* [FHIR data types](http://hl7.org/fhir/R4/datatypes.html){:target="_blank"}
* [Using codes](http://hl7.org/fhir/R4/terminologies.html){:target="_blank"}
* [References between resources](http://hl7.org/fhir/R4/references.html){:target="_blank"}
* [How to read resource & profile definitions](http://hl7.org/fhir/R4/formats.html){:target="_blank"}
* [Base resource](http://hl7.org/fhir/R4/resource.html){:target="_blank"}

This implementation guide supports the recently published [FHIR R4](http://hl7.org/fhir/R4/index.html){:target="_blank"} version of the FHIR standard to ensure alignment with the current direction of the FHIR standard.

#### FHIR resources used
The table below identifies the specific FHIR Resources and their purposes that will be used in this IG. Implementers should familiarize themselves with these FHIR resources and their purposes.

|FHIR Resource|Purpose|
|-----|-----------------|
|[Observation](http://hl7.org/fhir/R4/observation.html){:target="_blank"}| Used to describe the radiation dose summary and the collected minimal dose information|
|[Patient](http://hl7.org/fhir/R4/patient.html){:target="_blank"}| Used to reference the irradiated person|
|[Practitioner](http://hl7.org/fhir/R4/practitioner.html){:target="_blank"}| Used to reference the related irradiation authorizing person|
|[Device](http://hl7.org/fhir/R4/device.html){:target="_blank"}| Used to describe the irradiating modality|
|[ImagingStudy](http://hl7.org/fhir/R4/imagingstudy.html){:target="_blank"}| Used to reference the performed exam|
|[Composition](http://hl7.org/fhir/R4/composition.html){:target="_blank"}| Used to create the irradiation report|
{:.table-striped .table-bordered}

#### DICOM® Standard
DICOM® is used as reference standard, as it provides a complete definition of the dose information that can be present in a radiation report. The DICOM® version used in this IG is the [2021d](https://dicom.nema.org/medical/dicom/2021d/output/){:target="_blank"} release. The packaged value sets coming from DICOM within [fhir.dicom](http://fhir.org/packages/fhir.dicom){:target="_blank"} are referenced many times in the different profiles of this IG.

[DICOM®](https://www.dicomstandard.org/current){:target="_blank"}

#### International Patient Summary IG (IPS)
Pregnancy Status Profile from [International Patient Summary IG (IPS)](https://hl7.org/fhir/uv/ips/STU1/){:target="_blank"} is used within this IG in order to report a possible pregnancy of an irradiated person.

[International Patient Summary IG (IPS)](https://hl7.org/fhir/uv/ips/STU1/){:target="_blank"}

<a name="glossary"></a>

### Glossary

The following terms and acronyms are used within the Radiation Dose Summary IG:

|Term|Definition|
|-----|-----------------|
|AAPM| American Association of Physicists in Medicine |
|ACR| American College of Radiology |
|ATNA| Audit Trail and Node Authentication |
|CDA| Clinical Document Architecture |
|CDS| Clinical Decision Support |
|CT| Computed Tomography |
|CTDI| Computed Tomography Dose Index |
|DAP| Dose Area Product |
|DICOM| Digital Imaging and Communications in Medicine |
|DLP| Dose Length Product |
|EHR| Electronic Health Record |
|EMR| Electronic Medical Record |
|FHIR| Fast Healthcare Interoperability Resources |
|HAS| French High Authority of Health |
|HL7| Health Level Seven|
|HPS| Health Physics Society |
|IEC| International Electrotechnical Commission |
|IG| Implementation Guide |
|IHE| Integrating the Healthcare Enterprise |
|IOD| Information Object Definition |
|IPS| International Patient Summary |
|MG| Mammography |
|MPPS| Modality Performed Procedure Step |
|NM| Nuclear Medicine |
|OCR| Optical Character Recognition |
|PHI| Personal Health Information |
|RDSC| Radiation Dose Summary Consumer |
|RDSP| Radiation Dose Summary Producer |
|RDSR| Radiation Dose Structured Report |
|REM| Radiation Exposure Monitoring|
|REM-NM| Radiation Exposure Monitoring for Nuclear Medicine |
|REST| Representational State Transfer |
|RF| Radio Fluoroscopy |
|RIS| Radiology Information System |
|RP|  Reference Point |
|RRDSR| Radiopharmaceutical Radiation Dose Structured Report |
|SFR| French Society of Radiology |
|SR| Structured Report |
|SSDE| Size Specific Dose Estimation |
|TID| Template ID |
|TLS| Transport Layer Security |
|UID| Unique identifier |
|URL| Uniform Resource Locator |
|URN| Uniform Resource Name |
|VR| Value Representation |
|XA| X-Ray Angiography |
|XDS-I.b| Cross-enterprise Document Sharing for Imaging |
{:.table-striped .table-bordered}

<a name="references"></a>

### References

1. DICOM, [DICOM PS3.20: Imaging Reports using HL7 Clinical Document Architecture](http://dicom.nema.org/medical/dicom/current/output/html/part20.html){:target="_blank"}
2. DICOM, [DICOM PS3.16: Content Mapping Resource](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/PS3.16.html){:target="_blank"}
3. DICOM, [X-Ray Radiation Dose SR IOD Templates](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_XRayRadiationDoseSRIODTemplates.html){:target="_blank"}
4. DICOM, [CT Radiation Dose SR IOD Templates](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_CTRadiationDoseSRIODTemplates.html){:target="_blank"}
5. DICOM, [Radiopharmaceutical Radiation Dose SR IOD Templates](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_RadiopharmaceuticalRadiationDoseSRIODTemplates.html){:target="_blank"}
6. DICOM, [TID 2008\. Radiation Exposure and Protection Information](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_2008){:target="_blank"}
7. French Society of Radiology - SFR,  [Practical Guide for Interventional Radiology](http://gri.radiologie.fr/){:target="_blank"}  (Guideline - 2013)
8. French High Authority of Health - HAS,  [Patient radiation protection and analysis of CPD practices and certification of healthcare establishments](https://www.has-sante.fr/upload/docs/application/pdf/2013-07/radioprotection_du_patient_et_analyse_des_pratiques_dpc_et_certification_des_etablissements_de_sante_format2clics.pdf){:target="_blank"}  (Guideline - 2012)
9. French nuclear safety authority, [Presentation of the main radiation protection regulatory provisions applicable in medical and dental radiology](https://www.cd2-conseils.com/wp-content/uploads/2016/11/rp_asn_presentation-principales-dispositions-reglementaires_2016.pdf){:target="_blank"}  (Guideline: 2016)
10. French Minister of Health and Solidarity,  [Order of 22 September 2006 relating to the radiation information to be included in an act report using ionizing radiation](https://www.legifrance.gouv.fr/eli/arrete/2006/9/22/SANY0623888A/jo/texte){:target="_blank"}, (Order - 2006)
11. Finnish Imaging Report specification,  [KanTa Imaging CDA R2 document structures](http://www.hl7.fi/hl7-rajapintakartta/kanta-%E2%80%93-kuvantamisen-cda-r2-rakenne/){:target="_blank"}  (2013)
12. Finnish Radiation and Nuclear Safety Authority, [Röntgentutkimuksesta potilaalle aiheutuvan säteilyaltistuksen määrittäminen](https://www.julkari.fi/bitstream/handle/10024/125145/rontgensateily.pdf){:target="_blank"} (X-ray examination of the patient radiation exposure determination)
13. AAPM, [Computed Tomography Dose Limit Reporting Guidelines for Section 3 – 115113](https://aapm.org/government_affairs/documents/SB-1237Section3_v7.pdf){:target="_blank"}
14. [Senate Bill No. 1237, CHAPTER 521](http://www.leginfo.ca.gov/pub/09-10/bill/sen/sb_1201-1250/sb_1237_bill_20100929_chaptered.pdf){:target="_blank"}
15. AAPM, [Experience with California Law on Reporting CT Dose](http://amos3.aapm.org/abstracts/pdf/77-22649-312436-91875.pdf){:target="_blank"}
16. [Radiologist Compliance With California CT Dose Reporting Requirements: A Single-Center Review of Pediatric Chest CT](https://www.ajronline.org/doi/pdf/10.2214/AJR.14.13693){:target="_blank"}
17. University of California Dose Optimization and Standardization Endeavor (UC-DOSE). [Recommendations for compliance with California Senate Bill 1237 and related pending legislation](http://files.ctctcdn.com/da9de144201/b78c37fa-a36b-4888-a418-fa21a314393e.pdf){:target="_blank"}
18. IEC, [IEC 61910-1:2014 - Medical electrical equipment - Radiation dose documentation - Part 1: Radiation dose structured reports for radiography and radioscopy](https://webstore.iec.ch/publication/6091){:target="_blank"}
19. IHE Radiology (RAD), [Technical Framework Volume 1, Cross-enterprise Document Sharing for Imaging (XDS-I.b)](https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Vol1.pdf){:target="_blank"}
20. IHE Radiology (RAD), [Technical Framework Volume 1, Radiation Exposure Monitoring (REM)](https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Vol1.pdf){:target="_blank"}
21. HL7 International, [International Patient Summary Implementation Guide (IPS)](https://hl7.org/fhir/uv/ips/STU1/)
22.  AAPM/ACR/HPS, [AAPM/ACR/HPS Joint Statement on Proper Use of Radiation Dose Metric Tracking for Patients Undergoing Medical Imaging Exams](https://www.aapm.org/org/policies/details.asp?id=1533&type=PP){:target="_blank"}

---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/pagecontent/CapabilityStatement-RDSC-intro.md

The Radiation Dose Summary Consumer actor shall follow this Capability Statement.
This Capability Statement does not describe the specific interpretation or identify the stakeholders that will access the different radiation resources. These details are established locally, in accordance with local policies and jurisdictional requirements. The following Capability Statement only describes FHIR capabilities necessary to access the different resources.

---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/pagecontent/CapabilityStatement-RDSP-intro.md

The Radiation Dose Summary Producer actor shall follow this Capability Statement.
This Capability Statement does not describe the specific interpretation or identify the stakeholders that will access the different radiation resources. These details are established locally, in accordance with local policies and jurisdictional requirements. The following Capability Statement only describes FHIR capabilities necessary to share radiation summary resources with a FHIR Server.

---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/pagecontent/downloads.md

This implementation guide is web-based and is intended to be browsed online. However, for the convenience of implementers, both this implementation guide, various sub-packages of it and some of the source specifications are available for download. The following links allow you to download various parts of this implementation guide and other referenced implementation guides for local use.

*   This [full IG](full-ig.zip)
*   The [resource definitions](definitions.json.zip) from this IG for use with the FHIR validator (see below)
*   The full FHIR [R4](http://hl7.org/fhir/R4/fhir-spec.zip){:target="_blank"} specifications
*   A [validator](https://github.com/hapifhir/org.hl7.fhir.core/releases/latest/download/validator_cli.jar){:target="_blank"} that can be used to check FHIR resource instance validity.




---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/pagecontent/index.md

This IG standardizes the sharing of minimal radiation information following a performed exam. National and regional regulations may require minimal radiation data in imaging reports. This IG standardizes the exchange of radiation data generated by dose management systems from imaging procedures with other interconnected systems.

### Organization of this implementation guide

This IG is organized into three main sections:

* [Chapter I](background.html): Background - Introduction and overview
    * [Problem](background.html#problem) - Description of the problem
    * [Scope](background.html#scope) - Scope of the IG
    * [Use cases](background.html#usecases) - Key use cases covered by the IG
    * [Minimal Radiation Information](background.html#mindose) - Description of data shared through this IG
    * [Glossary](background.html#glossary) - Glossary
    * [References](background.html#references) - References
* [Chapter II](archi.html): Architecture & Implementation
    * [Profiles & Extensions](archi.html#profiles) - FHIR Profiles and extensions defined in the IG
    * [Actors](archi.html#actors) - Actors participating in the IG
    * [Terminology](archi.html#terminology) - Value Sets defined and used
    * [Security Consideration](archi.html#sec) - Security aspects to be taken in consideration
* [Chapter III](testing.html): Testing & Conformance
    * [Test Plan](testing.html#testplan) - Test plans for the different actors 
    * [Test Data](testing.html#testdata) - Test data that can be used
    * [Resources Samples](testing.html#samples) - Samples of resources profiled following this IG

### Copyrights and acknowledgments

This document is licensed under Creative Commons "No Rights Reserved" (CC0).

#### Value Sets
Value Sets in this guide include:

* Vocabulary Content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organization (IHTSDO) and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
* Vocabulary Content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at LOINC/license. 

#### Trademarks
LOINC® is a registered United States trademark of Regenstrief Institute, Inc.

SNOMED® and "SNOMED CT" are registered trademarks of the IHTSDO.

HL7®, HEALTH LEVEL SEVEN®, FHIR® and the FHIR® Logo are trademarks owned by Health Level Seven International, registered with the United States Patent and Trademark Office.

DICOM® is a registered trademark of the National Electrical Manufacturers Association for its standards publications relating to digital communications of medical information.

IHE® is a registered trademark of the Healthcare Information Management Systems Society in the United States and trademarks of IHE Europe in the European Community.


### Sponsors Working Groups
* [Imaging Integration Work Group](http://www.hl7.org/Special/committees/imagemgt/index.cfm){:target="_blank"}
* [Clinical Quality Information Work Group](http://www.hl7.org/Special/committees/cqi/index.cfm){:target="_blank"}

### Contributors

| Name        |      Organization       |  Role |
|--------------------------|-----------------------|--------------|
| Abderrazek Boufahja | GE Healthcare |Author |
| Jonathan Whitby | Canon Group Company | Contributor |
| Steven Nichols | GE Healthcare | Contributor |
{:.table-striped .table-bordered}



---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/pagecontent/StructureDefinition-radiation-dose-summary-intro.md

Radiation Dose Summary profile defines an overview of an irradiation act, which can be a irradiating imaging study or a radiopharmaceutical administration. When the Radiation Dose Summary is related to a study, it provides a summary of the irradiation events that occurred within the same procedure and equipment.
The Radiation Dose Summary profile has no aim to aggregate radiation exposure over time, or make cumulative calculations over multiple performed procedures.
Here is an example of querying a FHIR server hosting Radiation Dose Summary resources: 

```GET /fhir/Observation?code=73569-6&patient=8&date=gt2020-01-01```

For other examples, please refer to the section [Radiation Dose Summary Consumer search query samples](testing.html#radiation-dose-summary-consumer-search-query-samples) paragraph, from [Test and Conformance](testing.html) page. 

Radiation Dose Summary resource can be mapped to the defined CDA section [Radiation Exposure and Protection Information](https://dicom.nema.org/medical/dicom/current/output/html/part20.html#sect_9.3.1){:target="_blank"} from [DICOM PS3.20: Imaging Reports using HL7 Clinical Document Architecture](http://dicom.nema.org/medical/dicom/current/output/html/part20.html){:target="_blank"}. 


---

File: repos/HL7_SLASH_fhir-radiation-dose-summary-ig/input/pagecontent/testing.md

This chapter describes testing data and testing plan, and provide some samples for developers.

1. [Test Plan](#testplan) - Test plans for different actors 
2. [Test Data](#testdata) - Test data that can be used
3. [Resources Samples](#samples) - Samples of resources profiled following this IG

<a name="testplan"></a>

### Test Plan
#### Scenario 1: RDSR summary to FHIR
##### Actors

* Radiation Dose Summary Producer (RDSP) actor
* FHIR server
* Radiation Dose Summary Consumer (RDSC) actor

##### Roles

| Actors | Roles |
|--------------------------|-----------------------|
| Radiation Dose Summary Producer (RDSP) actor| Produce the Radiation Dose Summary resource |
| FHIR server | Host and Manage the Radiation Dose Summary resource <br/> Manage the contextual resources (Patient, Device, ImagingStudy, etc.)|
|Radiation Dose Summary Consumer (RDSC) actor | Consume Radiation Dose Summary resource <br/> (O) Produce Radiation Summary Report |
{:.table-striped .table-bordered}

##### Steps

Here are the different steps that needs to be performed: 
![Actors relationship](./seq.svg){: width="900px"}

<br clear="all" />
* The RDSP actor gathers an RDSR from an irradiating modality (a CT RDSR, an X-Ray RDSR or an RRDSR)
* The RDSP actor collects the identifiers of the Patient, the Device, the Practitioner, and the ImagingStudy from the FHIR Server
* The RDSP actor constructs the Radiation Dose Summary resource and POST it to the FHIR server
* The RDSC actor queries the FHIR server and collects radiation summary information
* Optionally, the RDSC actor enhances the FHIR server with the Radiation Summary Report.

##### Validation

* The generated Radiation Summary resources shall pass the validation tool testing, using the FHIR [validator](https://github.com/hapifhir/org.hl7.fhir.core/releases/latest/download/validator_cli.jar){:target="_blank"}
* The sharing of the Radiation Dose Summary resources from the RDSP actor to the FHIR server can be validated through the test script [TestScript_RDS_Sharing_Verification](TestScript-RDS-sharing-verification.html)
* The accessibility of the FHIR server through searching capabilities can be validated with the test script [TestScript_RDSC_Simulator](TestScript-RDSC-Simulator.html)
* The capacity of the FHIR server to accept transactions with the Bundle of resources of Radiation Dose Summary can be tested with the test script [TestScript_RDSP_Simulator](TestScript-RDSP-Simulator.html)

#### Scenario 2: Grouping RDSP and FHIR Server
##### Actors
* Radiation Dose Summary Producer (RDSP) actor <i>grouped with</i> FHIR server
* Radiation Dose Summary Consumer (RDSC) actor

##### Roles

| Actors | Roles |
|--------------------------|-----------------------|
| Radiation Dose Summary Producer (RDSP) actor grouped with FHIR server | Produce internally the Radiation Dose Summary resource <br/> Host and Manage the Radiation Dose Summary resource <br/> Manage the contextual resources (Patient, Device, ImagingStudy, etc.) |
|Radiation Dose Summary Consumer (RDSC) actor | Consume Radiation Dose Summary resource |
{:.table-striped .table-bordered}

##### Steps

Here are the different steps that needs to be performed: 
![Actors relationship Scenario 2](./seq2.svg){: width="900px"}

<br clear="all" />
* The (RDSP actor, FHIR server) gathers an RDSR from an irradiating modality (a CT RDSR, an X-Ray RDSR or an RRDSR)
* The (RDSP actor, FHIR server) constructs and exposes the resources related to the Patient, ImagingStudy, Practitioner, Device and Radiation Dose Summary resources.
* The RDSC actor queries the (RDSP actor, FHIR server) and collects radiation summary information

##### Validation

* The generated Radiation Summary resources shall pass the validation tool testing, using the FHIR [validator](https://github.com/hapifhir/org.hl7.fhir.core/releases/latest/download/validator_cli.jar){:target="_blank"}
* The accessibility of the FHIR server through searching capabilities can be validated with the test script [TestScript_RDSC_Simulator](TestScript-RDSC-Simulator.html)


<a name="testdata"></a>

### Test Data
Some RDSRs and RRDSRs can be downloaded from IHE google drive, and can be used in the generation of the Radiation Dose Summary resources. Here are the links to these DICOM objects:
* [REM samples (CT RDSRs and X-Ray RDSRs)](https://drive.google.com/drive/u/0/folders/1M3OLxdHU25q8vNKQSr-O3Aip__YOYly0){:target="_blank"}
* [REM-NM samples (RRDSRs)](https://drive.google.com/drive/u/0/folders/1fE1BGXQDhqjzTbESt38qtiJ1Q7Js6Gg3){:target="_blank"}

Also, examples of RDSRs and RRDSRs can be accessed through the IHE Connectathon Samples sharing.

<a name="samples"></a>

### Resources samples
#### Radiation Dose Summary Consumer search query samples

Here are some examples of queries and searching use cases that can be performed by the RDSC actor:

| Query Description | Query URL |
|-------------------|--------------------------------------------------------------|
| Search all the Dose summaries within the FHIR Server | GET /fhir/Observation?code=73569-6 |
| View specific Dose Summary | GET /fhir/Observation/19 |
| Access Device dose summaries | GET /fhir/Observation?code=73569-6&device=22  |
| Search Dose Summary of a patient through the last year | GET /fhir/Observation?code=73569-6&patient=8&date=gt2020-01-01 |
| Search Dose Summary related to the study | GET /fhir/Observation?code=73569-6&part-of=1232 |
{:.table-striped .table-bordered}


#### Radiation Dose Summary Profile samples
##### CT sample
Here is an example of the Radiation Dose Summary Profile resource related to CT exam, and its dependencies:

![Example 1](./example1.svg){: width="100%"}

<br clear="all" />

* [RadiationDoseSummary-139](Observation-139.html)
* [ImagingStudy-342](ImagingStudy-342.html)
* [Patient-56](Patient-56.html)
* [Practitioner-33](Practitioner-33.html)
* [ModalityDevice-539](Device-539.html)

A sample of Dose Summary Report profile exists with relationship to Indications profile and Pregnancy Status:
* [RadiationSummaryReport-1](Composition-1.html)
* [Indications-1](Observation-34.html)
* [PregnancyStatus-1](Observation-33.html)

##### X-Ray sample
Here is an example of the Radiation Dose Summary Profile resource related to XA exam, and its dependencies:

![Example 2](./example2.svg){: width="100%"}

<br clear="all" />

* [RadiationDoseSummary-545](Observation-545.html)
* [ImagingStudy-344](ImagingStudy-344.html)
* [Patient-56](Patient-56.html)
* [Practitioner-33](Practitioner-33.html)
* [ModalityDevice-12](Device-12.html)

##### NM sample
Here is an example of the Radiation Dose Summary Profile resource related to Radiopharmaceutical administration, and its dependencies:

![Example 3](./example3.svg){: width="70%"}
<br clear="all" />

* [RadiationDoseSummary-122](Observation-122.html)
* [ImagingStudy-22](ImagingStudy-22.html)
* [Patient-56](Patient-56.html)
* [Practitioner-33](Practitioner-33.html)



---

