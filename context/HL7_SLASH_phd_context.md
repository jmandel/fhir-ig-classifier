File: repos/HL7_SLASH_phd/input/fsh/CapabilityStatement.PhdServer.fsh

Alias: $restful-security-service = http://terminology.hl7.org/CodeSystem/restful-security-service

Instance: PhdServerCapabilityStatement
InstanceOf: CapabilityStatement
Usage: #definition
* name = "PhdServerCapabilityStatement"
* title = "Continua FHIR Observation Server requirements"
* status = #draft
* date = "2018-10-27"
* publisher = "Continua-Personal Connected Health Alliance"
* contact.telecom.system = #url
* contact.telecom.value = "http://hl7.org/fhir"
* description = "Specifies the capabilities of a server supporting the Continua FHIR Observation Server class. The Continua FHIR Observation Server supports the Continua FHIR Observation Client as specified in the Continua H.812-5 Design Guidelines. This class of uploaders transcodes data from medical devices following the IEEE 11073-10206 data model to FHIR as profiled in the Personal Health Device Implementation Guide with the authentication, security, and transaction protocols specified in H.812-5. The Continua FHIR Observation Server is a RESTFul FHIR server subject to the additional requirements of H.812-5. This capability statement specifies only those capabilities needed to receive data from a Continua FHIR Observation Client."
* kind = #capability
* software.name = "Continua FHIR Observation Server"
* fhirVersion = #4.0.1
* format[0] = #json
* format[+] = #xml
* rest.mode = #server
* rest.documentation = "Continua FHIR Observation Server requirements"
* rest.security.service.coding[0] = $restful-security-service#OAuth
* rest.security.service.coding[+] = $restful-security-service#Basic
* rest.security.description = "Describe the oauth model ..."
* rest.resource[0].type = #Bundle
* rest.resource[=].documentation = "The server is required to support the transaction Bundle and the resolution of temporary logical ids."
* rest.resource[=].interaction.code = #create
* rest.resource[+].type = #Patient
* rest.resource[=].documentation = "A server may refuse the upload of a Patient resource to protect Personal Health Information (PHI). Administrators of such servers provide the uploader the logical id of the Patient resource by an unspecified means. The client uses the logical id in its Observation resources as needed. The Patient resource may or may not exist on the server but the Observation resource shall not be rejected by the server due to a resource not found error if it uses the provided logical id. In those situations where the Patient resource is uploaded by the client the resource is only required to contain an opaque identifier. In this manner, PHI is still protected as only the service provider has the key linking the identifier to an actual patient."
* rest.resource[=].interaction[0].code = #update
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].updateCreate = true
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[+].type = #Device
* rest.resource[=].interaction[0].code = #update
* rest.resource[=].interaction[+].code = #create
* rest.resource[=].updateCreate = true
* rest.resource[=].conditionalCreate = true
* rest.resource[=].conditionalUpdate = true
* rest.resource[+].type = #Observation
* rest.resource[=].interaction.code = #create
* rest.resource[=].conditionalCreate = true
* rest.interaction.code = #transaction

---

File: repos/HL7_SLASH_phd/input/fsh/CodeSystem.ASN1EventOrState.fsh

CodeSystem: ASN1EventOrState
Id: ASN1EventOrState
Title: "11073 ASN1 Event Or State"
Description: "Code system for ASN1ToHL7 state or event property"
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablecodesystem"
* ^url = "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1EventOrState"
* ^version = "current"
* ^experimental = false
* ^status = #active
* ^caseSensitive = true
* ^hierarchyMeaning = #grouped-by
* ^content = #complete
* ^publisher = "Health Level Seven International (Health Care Devices Work Group)"
* #event "Event"
* #state "State"

---

File: repos/HL7_SLASH_phd/input/fsh/CodeSystem.ASN1ToHL7.fsh

CodeSystem: ASN1ToHL7
Id: ASN1ToHL7
Title: "ASN1 bits to HL7 enumerated values"
Description: "Maps IEEE 11073 ASN1 BITS measurements to codes. All these codes have two possible values, set or cleared. The code may either represent an event or a state. When an event, the defined event has occurred when set. If a state, the described item is either set or cleared. Sometimes the states may be defined in unexpected manners. For example, the regulation state when set is unregulated and when cleared it is regulated. In addition the code may derive from an IEEE 11073 attribute or from a measurement. More codes maybe added to this list in the future."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablecodesystem"
* ^url = "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7"
* ^version = "0.3.0"
* ^status = #active
* ^experimental = false
* ^date = "2018-09-18"
* ^publisher = "Health Level Seven International (Health Care Devices Work Group)"
* ^caseSensitive = true
* ^hierarchyMeaning = #grouped-by
* ^content = #complete
* ^property[0].code = #type
* ^property[=].uri = "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7Concepts#type"
* ^property[=].description = "Indicates that the code type is an event or state"
* ^property[=].type = #code
* ^property[+].code = #source
* ^property[=].uri = "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7Concepts#source"
* ^property[=].description = "Indicates that the code originates from a measurement or an attribute that further describes a measurement or the sensor device."
* ^property[=].type = #string
* ^property[+].code = #MDCCode
* ^property[=].uri = "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7Concepts#MDCCode"
* ^property[=].description = "The decimal code for the MDC code of the bits observation"
* ^property[=].type = #code
* #67925.0 "onMains" "Indicates whether the PHD is on or off mains power"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#state
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
  * ^property[0].code = #MDCCode
  * ^property[=].valueCode = Mdc#67925
* #67925.1 "onBattery" "Indicates whether the PHD is on or off Battery power"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#state
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #67925.8 "chargingFull" "Indicates whether the PHD battery is charging at maximum rate"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #67925.9 "chargingTrickle" "Indicates whether the PHD battery is charging at a trickle rate"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #67925.10 "chargingOff" "Indicates whether the PHD battery charging is on or off"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#state
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #532354.0 "regulation-status" "Indicates device is regulated when cleared"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#state
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #68219.0 "mds-time-capab-real-time-clock" "Indicates real time clock is supported"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #68219.1 "mds-time-capab-set-clock" "Indicates support for the PHG to set the time"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #68219.2 "mds-time-capab-relative-time" "Indicates Relative Time is supported"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #68219.3 "mds-time-capab-high-res-relative-time" "Indicates Hi-Res Relative Time is supported"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #68219.4 "mds-time-capab-sync-abs-time" "Indicates that syncing the absolute time is supported"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #68219.5 "mds-time-capab-sync-rel-time" "Indicates that syncing the relative time is supported"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #68219.6 "mds-time-capab-sync-hi-res-relative-time" "Indicates that syncing hi-res relative time is supported"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #68219.7 "mds-time-capab-bo-time" "Indicates that the real-time clock supports base offset time"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #68219.8 "mds-time-state-abs-time-synced" "Indicates the absolute time has been synced"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #68219.9 "mds-time-state-rel-time-synced" "Indicates the relative time has been synced"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #68219.10 "mds-time-state-hi-res-relative-time-synced" "Indicates the hi-res time has been synced"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #68219.11 "mds-time-mgr-set-time" "PHG Requested to set the time"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #68219.12 "mds-time-capab-sync-bo-time" "Indicates that syncing base-offset time is supported"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #68219.13 "mds-time-state-bo-time-synced" "Indicates that base-offset time has been synced"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #68219.14 "mds-time-state-bo-time-UTC-aligned" "Indicates that base-offset time is aligned with UTC time standard"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #68219.15 "mds-time-dst-rules-enabled" "Indicates support for daylight savings time rules"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "attribute"
* #67846.0 "lim-alert-off" "Indicates both the high and the low limit alerts are disabled"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#state
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #67846.1 "lim-low-off" "Indicates the low limit alert is disabled"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#state
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #67846.2 "lim-high-off" "Indicates the high limit alert is disabled"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#state
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150604.0 "sensor-disconnected" "Indicates the device is not connected with the sensor"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150604.1 "sensor-malfunction" "Indicates the sensor has malfunctioned"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150604.2 "sensor-displaced" "Indicates the sensor is not correctly placed on the user"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150604.3 "sensor-unsupported" "Indicates the sensor connected to the device is unsupported"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150604.4 "sensor-off" "Indicates the sensor is not connected to the user"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150604.5 "sensor-interference" "Indicates the sensor is experiencing interference"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150604.6 "signal-searching" "Indicates the sensor is searching for a signal"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150604.7 "signal-pulse-questionable" "Indicates a questionable pulse has been detected"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150604.8 "signal-non-pulsatile" "Indicates a non pulsatile signal has been detected"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150604.9 "signal-erratic" "Indicates a signal has been discovered, but it is erratic"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150604.10 "signal-low-perfusion" "Indicates the signal is experiencing low perfusion"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150604.11 "signal-poor" "Indicates the signal has been discovered, but it is poor"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150604.12 "signal-inadequate" "Indicates the signal has been discovered, but it is inadequate"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150604.13 "signal-processing-irregularity" "Indicates the signal has been discovered, but is experiencing processing irregularity"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150604.14 "device-equipment-malfunction" "Indicates a device malfunction has occurred"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150604.15 "device-extended-update" "Indicates an extended display update is in progress on device"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150605.0 "pulse-qual-nominal" "Indicates no abnormalities have been detected by the sensor"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150605.1 "pulse-qual-marginal" "Indicates the pulse profusion or quality is marginal"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150605.2 "pulse-qual-minimal" "Indicates the pulse profusion or quality is minimal"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #150605.3 "pulse-qual-unacceptable" "Indicates the pulse profusion or quality is unacceptable"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8410584.0 "leadwire-loss" "Loss of unspecified lead wire or electrode connection"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8410584.1 "leadsignal-loss" "Loss of unspecified lead signal"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8410584.2 "leadwire-loss-first-lead" "Loss of 1st lead wire or electrode connection"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8410584.3 "leadsignal-loss-first-lead" "Loss of 1st lead signal"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8410584.4 "leadwire-loss-second-lead" "Loss of 2nd lead wire or electrode connection"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8410584.5 "leadsignal-loss-second-lead" "Loss of 2nd lead signal"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8410584.6 "leadwire-loss-third-lead" "Loss of 3rd lead wire or electrode connection"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8410584.7 "leadsignal-loss-third-lead" "Loss of 3rd lead signal"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417752.0 "device-battery-low" "The device battery is low"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417752.1 "sensor-malfunction" "The sensor has malfunctioned"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417752.2 "sensor-sample-size-insufficient" "The sensor's sample size is insufficient"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417752.3 "sensor-strip-insertion" "The test strip was inserted incorrectly"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417752.4 "sensor-strip-type-incorrect" "The test strip type is incompatable with the sensor"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417752.5 "sensor-result-too-high" "The value reported by the sensor is too high"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417752.6 "sensor-result-too-low" "The value reported by the sensor is too low"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417752.7 "sensor-temp-too-high" "The temperature is too high"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417752.8 "sensor-temp-too-low" "The temperature is too low"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417752.9 "sensor-read-interrupt" "The read process was interrupted"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417752.10 "device-gen-fault" "General Device Fault"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417752.11 "sensor-temp-out-of-range" "The temperature is out of range"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417909.0 "inr-device-battery-low" "The INR device battery is low"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417909.1 "inr-sensor-malfunction" "The INR device sensor has malfunctioned"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417909.2 "inr-sensor-sample-size-insufficient" "The sample size was insufficient"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417909.3 "inr-sensor-strip-insertion" "The test script was inserted incorrectly"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417909.4 "inr-sensor-strip-type-incorrect" "The test strip used is not compatible with the INR"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417909.5 "inr-sensor-result-too-high" "The test result is too high"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417909.6 "inr-sensor-result-too-low" "The test result is too low"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417909.7 "inr-sensor-temp-too-high" "The temperature is too high"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417909.8 "inr-sensor-temp-too-low" "The temperature is too low"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417909.9 "inr-sensor-read-interrupt" "The read process was  interrupted"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417909.10 "inr-device-gen-fault" "General device fault"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8417909.11 "inr-sensor-calibration-due" "The INR sensor calibration is due"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8408608.0 "device-status-undetermined" "Undetermined device status event"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8408608.1 "device-status-reset" "Device reset"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8408608.5 "device-status-error" "Device error"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8408608.6 "device-status-error-mechanical" "Mechanical error"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8408608.7 "device-status-error-electronic" "Electronic error"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8408608.8 "device-status-error-software" "Software error"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8408608.9 "device-status-error-battery" "Battery error"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8408608.15 "device-status-service" "Undetermined device status event, service needed"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8408608.16 "device-status-service-time-sync-required" "Time sync service required"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8408608.17 "device-status-service-calibration-required" "Calibration required"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8408608.18 "device-status-service-replenishment-required" "Replenishment required"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8408608.25 "device-status-battery-low" "Battery power is too low"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8408608.26 "device-status-battery-depleted" "Battery is depleted"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8408608.27 "device-status-battery-replaced" "Battery has been replaced"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8408608.28 "device-status-battery-interrupted" "Battery was interrupted"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418060.0 "sensor-session-stopped" "Session stopped"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418060.2 "sensor-type-incorrect" "Sensor type incorrect for device"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418060.3 "sensor-malfunction" "The sensor malfunctioned"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418060.4 "device-specific-alert" "Device specific alert"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418060.7 "sensor-calibration-not-allowed" "Calibrating the sensor is not allowed"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418060.8 "sensor-calibration-recommended" "Calibrating the sensor is recommended"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418060.9 "sensor-calibration-required" "Calibrating the sensor is required"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418060.10 "sensor-temp-too-high" "Temperature is too high for a valid result"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418060.11 "sensor-temp-too-low" "Temperature is too low for a valid result"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418060.12 "sensor-result-below-patient-low" "Sensor result below the Patient Low level"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418060.13 "sensor-result-above-patient-high" "Sensor result above the Patient High level"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418060.14 "sensor-low-hypo" "Sensor result below level"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418060.15 "sensor-high-hyper" "Sensor result above level"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418060.16 "sensor-rate-decrease-exceeded" "The sensor rate of decrease has been exceeded"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418060.17 "sensor-rate-increase-exceeded" "The sensor rate of increase has been exceeded"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418060.18 "sensor-result-too-low" "Sensor result is lower than the device can process"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418060.19 "sensor-result-too-high" "Sensor result is higher than the device can process"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418060.20 "sensor-com-out-of-range" "The sensor communication is out of range"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418512.0 "Battery-status-Undetermined" "the status of the battery is unknown"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#state
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418512.1 "Battery-absent" "Indicates if the battery is absent"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#state
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418512.2 "Battery-active" "Indicates if the battery is active in the system"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#state
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418512.3 "Battery-charging" "Indicates if the battery is charging"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#state
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418512.4 "Battery-fullyCharged" "Indicates if the battery is fully charged"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#state
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418512.5 "Battery-disposable" "Indicates if the battery is disposable"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#state
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418512.6 "Battery-rechargeable" "Indicates if battery is rechargable"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#state
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8418512.8 "Battery-faulty" "Indicates if battery is faulty"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
  * #8418512.7 "Battery-overTemperature" "Indicates if the battery is too hot"
    * ^property[0].code = #type
    * ^property[=].valueCode = ASN1EventOrState#event
    * ^property[+].code = #source
    * ^property[=].valueString = "measurement"
* #8418512.9 "Battery-incompatible" "Indicates if battery is incompatible"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8410608.0 "body-movement" "Indicates too much body movement"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8410608.1 "cuff-too-loose" "Indicates the cuff was too loose"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8410608.2 "irregular-pulse" "Indicates an irregular pulse was detected"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8410608.3 "pulse-over-range-limit" "Indicates the pulse was too high for sensor to work"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8410608.4 "pulse-under-range-limit" "Indicates the pulse was too low for sensor to work"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"
* #8410608.5 "improper-body-position" "Indicates the cuff was incorrectly placed with respect to the heart"
  * ^property[0].code = #type
  * ^property[=].valueCode = ASN1EventOrState#event
  * ^property[+].code = #source
  * ^property[=].valueString = "measurement"

---

File: repos/HL7_SLASH_phd/input/fsh/CodeSystem.ASN1ToHL7Concepts.fsh

CodeSystem: ASN1ToHL7Concepts
Id: ASN1ToHL7Concepts
Title: "11073 ASN1ToHl7 codesystem concepts"
Description: "Code system to have a formal definition and URI for these concepts."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablecodesystem"
* ^url = "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7Concepts"
* ^version = "current"
* ^experimental = false
* ^status = #active
* ^caseSensitive = true
* ^hierarchyMeaning = #grouped-by
* ^content = #complete
* ^publisher = "Health Level Seven International (Health Care Devices Work Group)"
* #type "Type of bit - indicates if a bit represents an Event (that happens) or a State (that persists)"
* #source "Source - indicates if a bit comes from a measurement or from a device"
* #MDCCode "The original MDC code of the bitsring observation type"

---

File: repos/HL7_SLASH_phd/input/fsh/CodeSystem.ContinuaDeviceIdentifiers.fsh

CodeSystem: ContinuaDeviceIdentifiers
Id: ContinuaDeviceIdentifiers
Title: "Continua Device Identifiers"
Description: "Codes used to describe the Device (PHD or PHG) Identifiers, such as the system id or Bluetooth Address. More codes maybe added to this list in the future."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablecodesystem"
* ^url = "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaDeviceIdentifiers"
* ^version = "current"
* ^status = #active
* ^experimental = false
* ^version = "0.3.0"
* ^status = #active
* ^experimental = false
* ^date = "2018-11-25"
* ^publisher = "Health Level Seven International (Health Care Devices Work Group)"
* ^caseSensitive = true
* ^hierarchyMeaning = #grouped-by
* ^content = #complete
* #SYSID "IEEE 11073 System Identifier" "This code indicates that the identifier is the IEEE 11073 SystemId from the equivalent of the System-Id attribute"
* #BTMAC "Bluetooth MAC address" "This code indicates that the identifier is the Bluetooth MAC address, either classic or low energy"
* #ETHMAC "Ethernet MAC address" "This code indicates that the identifier is the Ethernet MAC address"
* #USB "USB PID and VID designators" "This code indicates that the identifier is the USB Pid and Vid values"
* #ZIGBEE "ZigBee MAC address" "This code indicates that the identifier is the ZigBee MAC address"


---

File: repos/HL7_SLASH_phd/input/fsh/CodeSystem.ContinuaHFS.fsh

CodeSystem: ContinuaHFS
Id: ContinuaHFS
Title: "Continua Health and Fitness Continua Service Interfaces"
Description: "Codes used to describe the Continua Health and Fitness interfaces supported by a Personal Health Gateway. More codes maybe added to this list in the future."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablecodesystem"
* ^url = "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaHFS"
* ^version = "0.3.0"
* ^status = #active
* ^experimental = false
* ^date = "2018-09-18"
* ^publisher = "Health Level Seven International (Health Care Devices Work Group)"
* ^caseSensitive = true
* ^hierarchyMeaning = #grouped-by
* ^content = #complete
* #0 "observation-upload-soap" "Indicates the PHG has been Continua certified for the PCD-01 upload using Web services"
* #1 "consent-enabled-soap" "Indicates the PHG has been Continua certified for the PCD-01 upload using Web services with patient consent"
* #2 "capabilities" "Indicates the PHG has been Continua certified for Capabilities Exchange"
* #3 "observation-upload-hdata" "Indicates the PHG has been Continua certified for PCD-01 upload using HDATA"
* #4 "consent-enabled-hdata" "Indicates the PHG has been Continua certfied for PCD-01 upload using HDATA with patient consent"
* #5 "questionnaire" "Indicates the PHG has been Continua certfied for the CDA questionnaire"
* #6 "aps" "Indicates the PHG has been Continua certfied for Authenticated Persistent Sessions"
* #7 "observation-upload-fhir" "Indicates the PHG has been Continua certfied for uploading FHIR resources"


---

File: repos/HL7_SLASH_phd/input/fsh/CodeSystem.ContinuaPHD.fsh

CodeSystem: ContinuaPHD
Id: ContinuaPHD
Title: "Continua Device Interfaces"
Description: "Codes used to describe the Continua Personal Area Network (PHD) interfaces supported by a Personal Health Gateway. More codes maybe added to this list in the future."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablecodesystem"
* ^url = "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaPHD"
* ^version = "0.3.0"
* ^status = #active
* ^experimental = false
* ^date = "2018-11-24"
* ^publisher = "Health Level Seven International (Health Care Devices Work Group)"
* ^caseSensitive = true
* ^hierarchyMeaning = #grouped-by
* ^content = #complete
* #4 "Pulse Oximeter certified" "Indicates the PHG has been Continua version 1 (no transport) certified for the Pulse Oximeter"
* #6 "ECG certified" "Indicates the PHG has been Continua version 1 (no transport) certified for the minimal ECG"
* #7 "Blood Pressure certified" "Indicates the PHG has been Continua version 1 (no transport) certified for the Blood Pressure Monitor"
* #8 "Thermometer certified" "Indicates the PHG has been Continua version 1 (no transport) certified for the Thermometer"
* #13 "Respiration rate certified" "Indicates the PHG has been Continua version 1 (no transport) certified for the Respiration rate monitor"
* #15 "Weight Scale certified" "Indicates the PHG has been Continua version 1 (no transport) certified for the Weight scale"
* #17 "Glucose Monitor certified" "Indicates the PHG has been Continua version 1 (no transport) certified for the Glucose Monitor"
* #18 "Coagulation Monitor certified" "Indicates the PHG has been Continua version 1 (no transport) certified for the Coagulation Monitor"
* #19 "Insulin Pump certified" "Indicates the PHG has been Continua version 1 (no transport) certified for the Insulin Pump"
* #20 "Body Composition Analyizer certified" "Indicates the PHG has been Continua version 1 (no transport) certified for the Body Composition Analyizer"
* #21 "Peak Flow certified" "Indicates the PHG has been Continua version 1 (no transport) certified for the Peak Flow"
* #24 "Sleep Aponea Breathing Equipment certified" "Indicates the PHG has been Indicates the PHG has been Continua version 1 (no transport) certified for Sleep Aponea Breathing Equipment"
* #25 "Continuous Glucose monitor certified" "Indicates the PHG has been Indicates the PHG has been Continua version 1 (no transport) certified for the Continuous Glucose monitor"
* #28 "Power Status monitor certified" "Indicates the PHG has been Indicates the PHG has been Continua version 1 (no transport) certified for the Power Status monitor"
* #41 "Cardiovascular certified" "Indicates the PHG has been Indicates the PHG has been Continua version 1 (no transport) certified for Cardiovascular devices"
* #42 "Strength and Fitness certified" "Indicates the PHG has been Indicates the PHG has been Continua version 1 (no transport) certified for Strength and Fitness devices"
* #71 "Independent Activity/Living Hub certified" "Indicates the PHG has been Indicates the PHG has been Continua version 1 (no transport) certified for Independent Activity/Living Hub"
* #72 "Advanced Medication Monitor certified" "Indicates the PHG has been Indicates the PHG has been Continua version 1 (no transport) certified for the Advanced Medication Monitor"
* #8196 "PHDC USB Pulse Oximeter certified" "Indicates the PHG has been certified for the Pulse Oximeter over PHDC USB"
* #8198 "PHDC USB ECG certified" "Indicates the PHG has been certified for the minimal ECG over PHDC USB"
* #8199 "PHDC USB Blood Pressure certified" "Indicates the PHG has been certified for the Blood Pressure Monitor over PHDC USB"
* #8200 "PHDC USB Thermometer certified" "Indicates the PHG has been certified for the Thermometer over PHDC USB"
* #8215 "PHDC USB Respiration rate certified" "Indicates the PHG has been certified for the Respiration rate monitor over PHDC USB"
* #8217 "PHDC USB Weight Scale certified" "Indicates the PHG has been certified for the Weight scale over PHDC USB"
* #8219 "PHDC USB Glucose Monitor certified" "Indicates the PHG has been certified for the Glucose Monitor over PHDC USB"
* #8220 "PHDC USB Coagulation Monitor certified" "Indicates the PHG has been certified for the Coagulation Monitor over PHDC USB"
* #8221 "PHDC USB Insulin Pump certified" "Indicates the PHG has been certified for the Insulin Pump over PHDC USB"
* #8222 "PHDC USB Body Composition Analyizer certified" "Indicates the PHG has been certified for the Body Composition Analyizer over PHDC USB"
* #8223 "PHDC USB Peak Flow certified" "Indicates the PHG has been certified for the Peak Flow over PHDC USB"
* #8226 "PHDC USB Sleep Aponea Breathing Equipment certified" "Indicates the PHG has been Indicates the PHG has been certified for Sleep Aponea Breathing Equipment over PHDC USB"
* #8227 "PHDC USB Continuous Glucose monitor certified" "Indicates the PHG has been Indicates the PHG has been certified for the Continuous Glucose monitor over PHDC USB"
* #8230 "PHDC USB Power Status monitor certified" "Indicates the PHG has been Indicates the PHG has been certified for the Power Status monitor over PHDC USB"
* #8243 "PHDC USB Cardiovascular certified" "Indicates the PHG has been Indicates the PHG has been certified for Cardiovascular devices over PHDC USB"
* #8244 "PHDC USB Strength and Fitness certified" "Indicates the PHG has been Indicates the PHG has been certified for Strength and Fitness devices over PHDC USB"
* #8273 "PHDC USB Independent Activity/Living Hub certified" "Indicates the PHG has been Indicates the PHG has been certified for Independent Activity/Living Hub over PHDC USB"
* #8274 "PHDC USB Advanced Medication Monitor certified" "Indicates the PHG has been Indicates the PHG has been certified for the Advanced Medication Monitor over PHDC USB"
* #16388 "HDP BT Pulse Oximeter certified" "Indicates the PHG has been certified for the Pulse Oximeter over HDP BT"
* #16390 "HDP BT ECG certified" "Indicates the PHG has been certified for the minimal ECG over HDP BT"
* #16391 "HDP BT Blood Pressure certified" "Indicates the PHG has been certified for the Blood Pressure Monitor over HDP BT"
* #16392 "HDP BT Thermometer certified" "Indicates the PHG has been certified for the Thermometer over HDP BT"
* #16397 "HDP BT Respiration rate certified" "Indicates the PHG has been certified for the Respiration rate monitor over HDP BT"
* #16399 "HDP BT Weight Scale certified" "Indicates the PHG has been certified for the Weight scale over HDP BT"
* #16401 "HDP BT Glucose Monitor certified" "Indicates the PHG has been certified for the Glucose Monitor over HDP BT"
* #16402 "HDP BT Coagulation Monitor certified" "Indicates the PHG has been certified for the Coagulation Monitor over HDP BT"
* #16403 "HDP BT Insulin Pump certified" "Indicates the PHG has been certified for the Insulin Pump over HDP BT"
* #16404 "HDP BT Body Composition Analyizer certified" "Indicates the PHG has been certified for the Body Composition Analyizer over HDP BT"
* #16405 "HDP BT Peak Flow certified" "Indicates the PHG has been certified for the Peak Flow over HDP BT"
* #16408 "HDP BT Sleep Aponea Breathing Equipment certified" "Indicates the PHG has been Indicates the PHG has been certified for Sleep Aponea Breathing Equipment over HDP BT"
* #16409 "HDP BT Continuous Glucose monitor certified" "Indicates the PHG has been Indicates the PHG has been certified for the Continuous Glucose monitor over HDP BT"
* #16412 "HDP BT Power Status monitor certified" "Indicates the PHG has been Indicates the PHG has been certified for the Power Status monitor over HDP BT"
* #16425 "HDP BT Cardiovascular certified" "Indicates the PHG has been Indicates the PHG has been certified for Cardiovascular devices over HDP BT"
* #16426 "HDP BT Strength and Fitness certified" "Indicates the PHG has been Indicates the PHG has been certified for Strength and Fitness devices over HDP BT"
* #16445 "HDP BT Independent Activity/Living Hub certified" "Indicates the PHG has been Indicates the PHG has been certified for Independent Activity/Living Hub over HDP BT"
* #16446 "HDP BT Advanced Medication Monitor certified" "Indicates the PHG has been Indicates the PHG has been certified for the Advanced Medication Monitor over HDP BT"
* #24580 "ZIGBEE Pulse Oximeter certified" "Indicates the PHG has been certified for the Pulse Oximeter over ZIGBEE"
* #24582 "ZIGBEE ECG certified" "Indicates the PHG has been certified for the minimal ECG over ZIGBEE"
* #24583 "ZIGBEE Blood Pressure certified" "Indicates the PHG has been certified for the Blood Pressure Monitor over ZIGBEE"
* #24584 "ZIGBEE Thermometer certified" "Indicates the PHG has been certified for the Thermometer over ZIGBEE"
* #24589 "ZIGBEE Respiration rate certified" "Indicates the PHG has been certified for the Respiration rate monitor over ZIGBEE"
* #24591 "ZIGBEE Weight Scale certified" "Indicates the PHG has been certified for the Weight scale over ZIGBEE"
* #24593 "ZIGBEE Glucose Monitor certified" "Indicates the PHG has been certified for the Glucose Monitor over ZIGBEE"
* #24594 "ZIGBEE Coagulation Monitor certified" "Indicates the PHG has been certified for the Coagulation Monitor over ZIGBEE"
* #24595 "ZIGBEE Insulin Pump certified" "Indicates the PHG has been certified for the Insulin Pump over ZIGBEE"
* #24596 "ZIGBEE Body Composition Analyizer certified" "Indicates the PHG has been certified for the Body Composition Analyizer over ZIGBEE"
* #24597 "ZIGBEE Peak Flow certified" "Indicates the PHG has been certified for the Peak Flow over ZIGBEE"
* #24600 "ZIGBEE Sleep Aponea Breathing Equipment certified" "Indicates the PHG has been Indicates the PHG has been certified for Sleep Aponea Breathing Equipment over ZIGBEE"
* #24601 "ZIGBEE Continuous Glucose monitor certified" "Indicates the PHG has been Indicates the PHG has been certified for the Continuous Glucose monitor over ZIGBEE"
* #24604 "ZIGBEE Power Status monitor certified" "Indicates the PHG has been Indicates the PHG has been certified for the Power Status monitor over ZIGBEE"
* #24617 "ZIGBEE Cardiovascular certified" "Indicates the PHG has been Indicates the PHG has been certified for Cardiovascular devices over ZIGBEE"
* #24618 "ZIGBEE Strength and Fitness certified" "Indicates the PHG has been Indicates the PHG has been certified for Strength and Fitness devices over ZIGBEE"
* #24647 "ZIGBEE Independent Activity/Living Hub certified" "Indicates the PHG has been Indicates the PHG has been certified for Independent Activity/Living Hub over ZIGBEE"
* #24648 "ZIGBEE Advanced Medication Monitor certified" "Indicates the PHG has been Indicates the PHG has been certified for the Advanced Medication Monitor over ZIGBEE"
* #32772 "BTLE Pulse Oximeter certified" "Indicates the PHG has been certified for the Pulse Oximeter over BTLE"
* #32774 "BTLE ECG certified" "Indicates the PHG has been certified for the minimal ECG over BTLE"
* #32775 "BTLE Blood Pressure certified" "Indicates the PHG has been certified for the Blood Pressure Monitor over BTLE"
* #32776 "BTLE Thermometer certified" "Indicates the PHG has been certified for the Thermometer over BTLE"
* #32781 "BTLE Respiration rate certified" "Indicates the PHG has been certified for the Respiration rate monitor over BTLE"
* #32783 "BTLE Weight Scale certified" "Indicates the PHG has been certified for the Weight scale over BTLE"
* #32785 "BTLE Glucose Monitor certified" "Indicates the PHG has been certified for the Glucose Monitor over BTLE"
* #32786 "BTLE Coagulation Monitor certified" "Indicates the PHG has been certified for the Coagulation Monitor over BTLE"
* #32787 "BTLE Insulin Pump certified" "Indicates the PHG has been certified for the Insulin Pump over BTLE"
* #32788 "BTLE Body Composition Analyizer certified" "Indicates the PHG has been certified for the Body Composition Analyizer over BTLE"
* #32789 "BTLE Peak Flow certified" "Indicates the PHG has been certified for the Peak Flow over BTLE"
* #32792 "BTLE Sleep Aponea Breathing Equipment certified" "Indicates the PHG has been Indicates the PHG has been certified for Sleep Aponea Breathing Equipment over BTLE"
* #32793 "BTLE Continuous Glucose monitor certified" "Indicates the PHG has been Indicates the PHG has been certified for the Continuous Glucose monitor over BTLE"
* #32796 "BTLE Power Status monitor certified" "Indicates the PHG has been Indicates the PHG has been certified for the Power Status monitor over BTLE"
* #32809 "BTLE Cardiovascular certified" "Indicates the PHG has been Indicates the PHG has been certified for Cardiovascular devices over BTLE"
* #32810 "BTLE Strength and Fitness certified" "Indicates the PHG has been Indicates the PHG has been certified for Strength and Fitness devices over BTLE"
* #32839 "BTLE Independent Activity/Living Hub certified" "Indicates the PHG has been Indicates the PHG has been certified for Independent Activity/Living Hub over BTLE"
* #32840 "BTLE Advanced Medication Monitor certified" "Indicates the PHG has been Indicates the PHG has been certified for the Advanced Medication Monitor over BTLE"


---

File: repos/HL7_SLASH_phd/input/fsh/CodeSystem.PhdObservationCategories.fsh

CodeSystem: PhdObservationCategories
Id: PhdObservationCategories
Title: "PHD Observation Categories Code System"
Description: "Codes used for tagging observations coming from PHD devices. More codes maybe added to this list in the future."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablecodesystem"
* ^url = "http://hl7.org/fhir/uv/phd/CodeSystem/PhdObservationCategories"
* ^version = "0.1.0"
* ^status = #active
* ^experimental = false
* ^date = "2024-04-18"
* ^publisher = "Health Level Seven International (Health Care Devices Work Group)"
* ^caseSensitive = true
* ^hierarchyMeaning = #grouped-by
* ^content = #complete
* #phd-observation "PHD generated Observation" "An observation coming from a personal health device, either directly or via a personal health gateway that maps the data received from the PHD into a FHIR Observation resource."



---

File: repos/HL7_SLASH_phd/input/fsh/StructureDefinition.Accuracy.fsh

Extension: Accuracy
Id: Accuracy
Title: "Numeric Accuracy"
Description: "The accuracy of a measurable quantity."
Context: Observation, DeviceMetric
* ^url = "http://hl7.org/fhir/uv/phd/StructureDefinition/Accuracy"
* . 0..1
* . ^short = "Numeric Accuracy"
* . ^definition = "The accuracy of a measurable quantity. The unit should be the same as the unit of the quantity this applies to."
* url = "http://hl7.org/fhir/uv/phd/StructureDefinition/Accuracy" (exactly)
* value[x] 1..
* value[x] only Quantity

---

File: repos/HL7_SLASH_phd/input/fsh/StructureDefinition.CoincidentTimeStampReference.fsh

Alias: $m49.htm = http://unstats.un.org/unsd/methods/m49/m49.htm

Extension: CoincidentTimeStampReference
Id: CoincidentTimeStampReference
Title: "Coincident Timestamp Reference"
Description: "Reference to a coincident timestamp observation that relates the gateway timeline to the PHD timeline."
Context: Observation
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[=].valueCode = #dev
* ^extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm"
* ^extension[=].valueInteger = 0
* ^extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* ^extension[=].valueCode = #trial-use
* ^extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-type-characteristics"
* ^extension[=].valueCode = #can-bind
* ^url = "http://hl7.org/fhir/uv/phd/StructureDefinition/CoincidentTimeStampReference"
* ^identifier.system = "urn:ietf:rfc:3986"
* ^identifier.value = "urn:oid:2.16.840.1.113883.4.642.5.1460"
* ^version = "5.2.0-ballot"
* ^experimental = false
* ^date = "2015-03-02"
* ^publisher = "HL7 International / Devices"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/orders"
* ^jurisdiction = $m49.htm#001
* . 0..1
* . ^short = "Coincident Timestamp Reference"
* . ^definition = "Reference to a coincident timestamp observation that relates the gateway timeline to the PHD timeline"
* url = "http://hl7.org/fhir/uv/phd/StructureDefinition/CoincidentTimeStampReference" (exactly)
* value[x] 1..
* value[x] only Reference(PhdCoincidentTimeStampObservation)

---

File: repos/HL7_SLASH_phd/input/fsh/StructureDefinition.PhdBaseObservation.fsh

Alias: $CodeableConcept11073MDC = http://hl7.org/fhir/uv/phd/ValueSet/CodeableConcept11073MDC
Alias: $Quantity11073MDC = http://hl7.org/fhir/uv/phd/ValueSet/Quantity11073MDC

Profile: PhdBaseObservation
Parent: Observation
Id: PhdBaseObservation
Description: "Common base profile with the elements that are common to the PHD IG Observation profiles."
* ^meta.lastUpdated = "2017-12-14T04:17:26.671-05:00"
* ^url = "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdBaseObservation"
* ^status = #draft
* ^date = "2017-11-24T15:17:35.385-05:00"
* . ^comment = "This profile defines a base profile for the PHD Observation profiles. This profile is abstract and is not intended to be instantiated directly."
* meta 1..
  * security ^slicing.discriminator[0].type = #value
    * ^slicing.discriminator[=].path = "system"
    * ^slicing.discriminator[+].type = #value
    * ^slicing.discriminator[=].path = "code"
    * ^slicing.rules = #open
  * security contains PhdHtest 0..1
  * security[PhdHtest] ^short = "Security value set to HTEST when measurement status indicates demo or test data"
    * system 1..
    * system = "http://terminology.hl7.org/CodeSystem/v3-ActReason" (exactly)
    * code 1..
    * code = #HTEST (exactly)
* extension contains http://hl7.org/fhir/StructureDefinition/observation-gatewayDevice named GatewayDevice 0..1
* extension contains http://hl7.org/fhir/uv/phd/StructureDefinition/CoincidentTimeStampReference named CoincidentTimeStamp 0..1
* ^abstract = true
* category ..* 
* category only CodeableConcept
  * ^slicing.discriminator[0].type = #value
  * ^slicing.discriminator[=].path = "coding.code"
  * ^slicing.discriminator[+].type = #value
  * ^slicing.discriminator[=].path = "coding.system"
  * ^slicing.ordered = false
  * ^slicing.rules = #open
* category contains PHD-Observation 1..1
* category[PHD-Observation] only CodeableConcept
  * ^comment = "The category enables identifying observations generated by PHDs."
  * coding 1..*
  * coding only Coding
    * system 1..1
    * system only uri
    * system = "http://hl7.org/fhir/uv/phd/CodeSystem/PhdObservationCategories" (exactly)
    * code 1..1
    * code only code
    * code = #phd-observation (exactly)
* identifier ^slicing.discriminator[0].type = #exists
  * ^slicing.discriminator[=].path = "value"
  * ^slicing.discriminator[+].type = #exists
  * ^slicing.discriminator[=].path = "system"
  * ^slicing.discriminator[+].type = #exists
  * ^slicing.discriminator[=].path = "type"
  * ^slicing.rules = #open
* identifier contains conditionalCreate 0..1
* identifier[conditionalCreate] ^short = "Unique identifier of this measurement for a given patient and device"
  * ^definition = "An identifier created from a combination of the measurement parameters like sensor time stamp, type code, unit code, patient and device identifiers, and selected elements of any component elements."
  * ^comment = "This value is used in the conditional create to prevent data duplication. PHDs will often re-send already sent data for a variety of reasons. This element is required unless the metric measurement contains no time stamp or is a measurement containing a time stamp that is real time. By real time the time stamp reported by the PHD must be later than the current time reported by the PHD before any measurements are received. There might be other means to ascertain whether the data is real time. Temporarily stored data from IEEE 11073-10206 compliant devices, which are required to be deleted the data after sending, can be considered real time. An example of this are temporarily stored observation from a device implementing the Bluetooth SIG GHS profile or implementing another Bluetooth SIG medical sensor device profile."
  * ^requirements = "Allows observations to be distinguished in a selective enough manner to prevent resource duplication."
  * type ..0
  * system ..0
  * value 1..
* status ^definition = "The status of the result value. Either 'final' or 'preliminary'"
  * ^comment = "The value shall be set to 'final' unless a Measurement-Status attribute or Nu-Observed-Value attribute status field indicates that the measurement is preliminary. In that case this field shall be set to 'preliminary'"
* code
  * coding ^slicing.discriminator[0].type = #value
    * ^slicing.discriminator[=].path = "system"
    * ^slicing.rules = #open
  * coding contains
      MDCType 1..1 and
      LoincCoding 0..1
  * coding[MDCType] ^short = "The 11073-10101 MDC code for the measurement"
    * ^definition = "This MDC code expresses what the measurement is."
    * ^comment = "The value for the code can be obtained from the IEEE 11073-10206 Observation.type attribute."
    * system 1..
    * system = "urn:iso:std:iso:11073:10101" (exactly)
    * code 1..
      * ^comment = "Required for all measurements"
  * coding[LoincCoding] ^short = "The LOINC code for the measurement"
    * ^definition = "This LOINC code expresses what the measurement is"
    * ^comment = "If the observation is one of the FHIR-defined vital signs observation, the equivalent LOINC code for that vital sign as specified by FHIR appears here."
    * system 1..
    * system = "http://loinc.org" (exactly)
    * code 1..
      * ^comment = "Required if the measurement is a vital sign"
  * text ^short = "It is recommended to display at least the reference identifier for the MDC code"
* subject 1..
  * reference 1..
* effective[x] 1..
* effective[x] only dateTime or Period
  * ^definition = "The time or time-period the observed value is asserted as being true. It is a time period if a Measure-Active-Period (duration) attribute is part of the metric measurement sent by the PHD. Otherwise it is the time stamp sent by the PHD or the time of reception by the PHG if the PHD sent no time stamp."
* interpretation
  * coding ^slicing.discriminator[0].type = #value
    * ^slicing.discriminator[=].path = "system"
    * ^slicing.rules = #open
  * coding contains MsmtStatusInterpretation 1..1
  * coding[MsmtStatusInterpretation] ^short = "Measurement status interpretation when questionable, calibration-ongoing, validated, early-indication, threshold exceeded, alarm inhibited"
    * system 1..
    * system = "http://hl7.org/fhir/uv/pocd/CodeSystem/measurement-status" (exactly)
    * code 1..
* device 1..
  * ^comment = "This field will reference the PHD Device."
  * reference 1..
    * ^short = "Reference to the device responsible for the measurement"
    * ^definition = "Reference to the device-related resources that describe the sensor device taking the measurement. This element will point to a Device resource following the Phd Device Profile."
    * ^comment = "This reference points to the Device resource containing information about the sensor device that took the measurement."
//* derivedFrom[Observation] ^short = "Reference to the Coincident Time Stamp Observation and/or Source-Handle-Reference Observation"
//  * ^comment = "When the PHD reports a time stamp a reference to the Coincident Time Stamp Observation is placed here. When the PHD reports a Source-Handle-Reference/-List attribute the Observation(s) pointed to by that Source-Handle-Reference/-List is (are) placed here. One may end up with several Observation.derivedFrom elements."
* component ^slicing.discriminator[0].type = #value
  * ^slicing.discriminator[=].path = "code"
  * ^slicing.rules = #open
* component contains
    supplementalTypesComponent 0..*
* component[supplementalTypesComponent] ^short = "Supplemental Type: A further description of the measurement type."
  * ^definition = "For each partition:term code pair contained in the Supplemental-Types attribute, a separate supplementalTypesComponent element is generated. The component is not generated if the attribute is absent or empty. The component shall be generated otherwise."
  * ^comment = "A PHD may send a Supplemental-Types attribute as part of the measurement. This attribute consists of a set of MDC nomenclature codes as partition:term code pairs. Each pair is a code describing something additional about the measurement, such as MDC_MODALITY_SPOT in the pulse oximeter which indicates that the provided measurement is a stable average. An MDC_MODALITY_FAST would indicate that a short averaging is used and the result reported regardless of stability."
  * code from $CodeableConcept11073MDC (required)
    * coding 1..
      * ^slicing.discriminator[0].type = #value
      * ^slicing.discriminator[=].path = "system"
      * ^slicing.rules = #open
    * coding contains MdcType 1..1
    * coding[MdcType] ^short = "The 11073-10101 MDC code for the measurement"
      * system 1..
      * system = "urn:iso:std:iso:11073:10101" (exactly)
      * code 1..
      * code = #68193 (exactly)
        * ^definition = "68193 is the 32-bit nomenclature code indicating a 'Supplemental-Types' value"
    * text ^definition = "It is recommended to display at least the reference identifier for the Supplemental-Types which is MDC_ATTR_SUPPLEMENTAL_TYPES"
  * value[x] 1..
  * valueCodeableConcept 1..1
  * valueCodeableConcept only CodeableConcept
    * ^sliceName = "valueCodeableConcept"
    * ^definition = "The supplemental information determined as a result of making the observation, if the information is a code."
    * coding ^slicing.discriminator[0].type = #value
      * ^slicing.discriminator[=].path = "system"
      * ^slicing.rules = #open
    * coding contains MDCType 1..1
    * coding[MDCType] ^short = "Required MDC code entry."
      * system 1..
      * system = "urn:iso:std:iso:11073:10101" (exactly)
      * code 1..
        * ^definition = "For the given Supplemental-Types entry the code here is given by: partition * 2**16 + term code"
  * dataAbsentReason ..0
* dataAbsentReason ^short = "This element is populated when the Measurement Status indicates invalid, not available or measurement-ongoing."
* dataAbsentReason ^definition = "Provides a reason why the expected value in the element Observation.value[x]] is missing."
* dataAbsentReason ^comment = "Only the Measurement-Status/status flags indicating invalid, not unavailable, or msmt ongoing will generate this element and cause the value[x] to be absent. The remaining settings of the status values are reported in the meta.security element or interpretation element."
* dataAbsentReason.coding ^slicing.discriminator.type = #value
* dataAbsentReason.coding ^slicing.discriminator.path = "system"
* dataAbsentReason.coding ^slicing.rules = #open
* dataAbsentReason.coding contains FhirDefault 1..1
* dataAbsentReason.coding[FhirDefault].system 1..
* dataAbsentReason.coding[FhirDefault].system = "http://terminology.hl7.org/CodeSystem/data-absent-reason" (exactly)
* dataAbsentReason.coding[FhirDefault].code 1..



---

File: repos/HL7_SLASH_phd/input/fsh/StructureDefinition.PhdBitsEnumerationObservation.fsh

Alias: $ASN1measurement = http://hl7.org/fhir/uv/phd/ValueSet/ASN1measurement

Profile: PhdBitsEnumerationObservation
Parent: PhdBaseObservation
Id: PhdBitsEnumerationObservation
Description: "StructureDefinition for Observation Resources representing measurement data coming from a medical device where the measurement is an ASN1 BITS value."
* ^meta.lastUpdated = "2017-12-14T04:24:35.475-05:00"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #oo
* ^url = "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdBitsEnumerationObservation"
* ^status = #draft
* ^date = "2017-06-02T14:29:52.39367-04:00"
* . ^definition = "The PhdBitsEnumerationObservation reports PHD measurements that contain a Enum-Observed-Value-Simple-Bit-Str or Enum-Observed-Value-Basic-Bit-Str attribute."
  * ^comment = "This type of measurement is used when the Personal Health Device reports a measurement as an IEEE 11073-10101 BITs value. This measurement is a complex representation where each bit means something. In many cases only certain bits are defined and it is generally true that the significant case is when the bit has been set. Given that measurement could result in up to 32 component entries (one for each bit) only set bits are required to be reported. Some specializations have used this measurement type when they should have used IEEE 11073-10101 codes."
* value[x] ..0
* component contains bitsComponent 0..*
* component[bitsComponent] ^short = "BITs measurements entry components"
  * ^definition = "Each ANS1 component entrant contains one of the reported BITs settings. These entries are NOT present if a Measurement-Status attribute or Enum-Observed-Value status field indicates an error."
  * code from $ASN1measurement (required)
    * coding 1..
      * ^short = "The ANS1 BITs code for the measurement"
      * ^comment = "For BITs measurements, this code is an alpha-numeric string created from the code reported in the Observation.code.coding:11073Type.code followed by a dot (.) followed by the MDER bit being reported. For example, the CGM Device status measurement code is 8418060. If the value reported in the BITs field is 0001 1000 0000 0000 the MDER bits set are bits 3 and 4. Note that MDER bit 0 is the HIGH order bit. Bit 3 means 'sensor malfunction' and bit 4 means 'device specific alert'. This measurement would require two component elements and one would be 8418060.3 and the other would be 8418060.4. Note these are alphas-numeric strings and not decimal numbers. If one took the code 8418060.3 and looked it up in the ASN1 Bits vocabulary one would find it meant 'sensor malfunctioned'."
      * system 1..
      * system = "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7" (exactly)
        * ^comment = "This value is a placeholder until the correct reference URL is registered."
      * code 1..
        * ^definition = "A symbol in syntax defined by the IEEE ASN1 system. "
  * value[x] only CodeableConcept
  * dataAbsentReason ^short = "For the optional reporting of unsupported bits"
    * ^definition = "Provides a reason why the expected value in the element Observation.component.value[x] is missing. In this profile for this component that happens if the PHD does not support this bit and the uploader wishes to report that situation."
    * coding ^slicing.discriminator.type = #value
      * ^slicing.discriminator.path = "system"
      * ^slicing.rules = #open
    * coding contains FhirDefault 1..1
    * coding[FhirDefault] ^short = "FHIR default code system for reporting 'unsupported'"
      * system 1..
      * system = "http://terminology.hl7.org/CodeSystem/data-absent-reason" (exactly)
      * code 1..
      * code = #unsupported (exactly)
* valueCodeableConcept
  * coding ^slicing.discriminator.type = #value
    * ^slicing.discriminator.path = "system"
    * ^slicing.ordered = true
    * ^slicing.rules = #open
  * coding contains v2BinaryValue 1..1
  * coding[v2BinaryValue]
    * system 1..
    * system = "http://terminology.hl7.org/CodeSystem/v2-0136" (exactly)
    * code 1..
      * ^definition = "If the bit is set this code is 'Y' and 'N' if the bit is cleared. If an 'event' bit only the set case needs to be reported. If the bit is unsupported, the dataAbsentReason code \"unsupported' is used. Unsupported bits are optional to report. If a state bit is supported both states shall be reported."


---

File: repos/HL7_SLASH_phd/input/fsh/StructureDefinition.PhdCodedEnumerationObservation.fsh

Profile: PhdCodedEnumerationObservation
Parent: PhdBaseObservation
Id: PhdCodedEnumerationObservation
Description: "StructureDefinition for Observation Resources representing measurement data coming from a PHD where the measurement value is a code."
* ^meta.lastUpdated = "2017-12-08T05:24:29.234-05:00"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #oo
* ^url = "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdCodedEnumerationObservation"
* ^status = #draft
* ^date = "2017-06-02T14:29:52.39367-04:00"
* . ^short = "Reports measurements with values that are single MDC codes."
* . ^definition = "The PhdCodedEnumerationObservation reports PHD observations that contain a single MDC code from a finite set as their value."
* . ^comment = "This type of measurement is used when the Personal Health Device reports a measurement as an IEEE 11073-10101 code. An example would be the most recent meal context associated with a glucose measurement such as 'breakfast', 'fasting', 'snack', etc. The list of codes for these meal options is finite."
* value[x] only CodeableConcept
* valueCodeableConcept.coding ^slicing.discriminator.type = #value
* valueCodeableConcept.coding ^slicing.discriminator.path = "system"
* valueCodeableConcept.coding ^slicing.rules = #open
* valueCodeableConcept.coding contains MDCType 1..1
* valueCodeableConcept.coding[MDCType] ^short = "Required MDC code"
* valueCodeableConcept.coding[MDCType].system 1..
* valueCodeableConcept.coding[MDCType].system = "urn:iso:std:iso:11073:10101" (exactly)



---

File: repos/HL7_SLASH_phd/input/fsh/StructureDefinition.PhdCoincidentTimeStampObservation.fsh

Profile: PhdCoincidentTimeStampObservation
Parent: Observation
Id: PhdCoincidentTimeStampObservation
Description: "StructureDefinition for Observation Resources representing the coincident time stamp. This report is a measurement of the current time of the sensor at the current time of the PHG. The purpose of this observation is to record the difference in the time lines between the PHG and PHD and to be able to recover the original measurement time stamps reported by the PHD should the PHG correct them because the sensor clock is in error."
* ^meta.lastUpdated = "2017-12-14T09:41:34.341-05:00"
* ^url = "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdCoincidentTimeStampObservation"
* ^status = #draft
* ^date = "2017-06-02T14:29:52.39367-04:00"
* . ^definition = "The PhdCoincidentTimeStampObservation reports the current time of the PHD sensor at the current time of the PHG."
* . ^comment = "Used to record the correction the PHG applied to the PHD measurement time stamps (if any) and to be able to recover the original time stamps reported by the PHD should that be needed."
* extension 1..1
* extension ^short = "Extension for the PHG"
* extension.url = "http://hl7.org/fhir/StructureDefinition/observation-gatewayDevice" (exactly)
* extension.url ^short = "Url indicating this is the gateway device extension"
* extension.value[x] 1..
* extension.value[x] only Reference
* extension.value[x] ^short = "Reference to the Personal Health Gateway (PHG) Device"
* status = #final (exactly)
* status ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-display-hint"
* status ^extension.valueString = "default: final"
* status ^definition = "The status of the result value. Always 'final'"
* status ^comment = "The value shall be set to 'final'"
* code.coding ^slicing.discriminator.type = #value
* code.coding ^slicing.discriminator.path = "system"
* code.coding ^slicing.rules = #open
* code.coding contains MDCType 1..1
* code.coding[MDCType] ^short = "The required MDC code for the type of time clock used by the PHD"
* code.coding[MDCType] ^comment = "PHDs use one of absolute time, base offset time, relative time, or high resolution relative time."
* code.coding[MDCType].system 1..
* code.coding[MDCType].system = "urn:iso:std:iso:11073:10101" (exactly)
* code.coding[MDCType].code 1..
* code.coding[MDCType].code ^comment = "The code for absolute time is 67975 with reference id MDC_ATTR_TIME_ABS, for base offset time is 68226 with reference id MDC_ATTR_TIME_BO, for relative time is 67983 with reference id MDC_ATTR_TIME_REL, and for high resolution relative time is 68072 with reference id MDC_ATTR_TIME_REL_HI_RES."
* subject 1..
* subject.reference 1..
* effective[x] ^short = "The current time of the PHG at the current time of the PHD. Absent if PHD is better synchronized"
* effective[x] ^definition = "The time of the PHG at the time the current time of the PHD is ascertained."
* effective[x] ^comment = "This element is absent if the PHD has superior time synchronization relative to the PHG. Wnen this element is absent it indicates that the PHG reported the measurement time stamps of the PHD without modification."
* value[x] only dateTime or Quantity
* value[x] ^short = "The current time of the PHD as a wallclock time (dateTime), relative time (Quantity), or if a time fault a dataAbsentReason"
* value[x] ^definition = "The current time of the PHD. It will be either a valueDateTime if a wallclock time or a valueQuantity if a relative time or a dataAbsentReason if there is a time fault. The relative time is expressed in microseconds"
* dataAbsentReason ^short = "Populated when the PHD has a time fault"
* dataAbsentReason ^definition = "In this profile this element indicates that the current time of the PHD for the measurements reported is not known and is unable to be obtained"
* dataAbsentReason ^comment = "This situation arises when the PHD has a time fault, perhaps by battery change. The sensor device may have stored data with time stamps taken at a time when the clock was running but after the fault the original time line was not able to be recovered. Thus the current time line, if any, has an unknown relationship to the previous time line."
* dataAbsentReason.coding ^slicing.discriminator.type = #value
* dataAbsentReason.coding ^slicing.discriminator.path = "system"
* dataAbsentReason.coding ^slicing.rules = #open
* dataAbsentReason.coding contains FhirDefault 1..1
* dataAbsentReason.coding[FhirDefault].system 1..
* dataAbsentReason.coding[FhirDefault].system = "http://terminology.hl7.org/CodeSystem/data-absent-reason" (exactly)
* dataAbsentReason.coding[FhirDefault].code 1..
* dataAbsentReason.coding[FhirDefault].code = #unknown (exactly)
* device 1..
* device ^comment = "This field references the PHD Device"
* device.reference 1..
* device.reference ^short = "Reference to the device responsible for the measurement"
* device.reference ^definition = "Reference to the device resources that describes the sensor device taking the measurement."
* device.reference ^comment = "This reference points to the Device resource containing information about the sensor device that took the measurement."


---

File: repos/HL7_SLASH_phd/input/fsh/StructureDefinition.PhdCompoundNumericDefinition.fsh

Alias: $Quantity11073MDC = http://hl7.org/fhir/uv/phd/ValueSet/Quantity11073MDC
Alias: $MDCnotObject = http://hl7.org/fhir/uv/phd/ValueSet/MDCnotObject
Alias: $DataAbsentReason = http://hl7.org/fhir/ValueSet/data-absent-reason

Profile: PhdCompoundNumericObservation
Parent: PhdBaseObservation
Id: PhdCompoundNumericObservation
Description: "StructureDefinition for Observation Resources representing measurement data coming from a medical device where the measurement is described by a set of numbers such as the x, y, and x components of an acceleration."
* ^meta.lastUpdated = "2017-12-08T06:07:29.764-05:00"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #oo
* ^url = "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdCompoundNumericObservation"
* ^status = #draft
* ^date = "2017-06-02T14:29:52.39367-04:00"
* . ^definition = "The PhdCompoundNumericObservation reports PHD measurements that contain one of either a Compound-Basic-Nu-Observed-Value, Compound-Simple-Nu-Observed-Value, or Compound-Nu-Observed-Value attribute."
  * ^comment = "Used for compound numeric observations from Personal Health Devices"
* category ..*
* category only CodeableConcept
  * ^slicing.discriminator[0].type = #value
  * ^slicing.discriminator[=].path = "coding.code"
  * ^slicing.discriminator[+].type = #value
  * ^slicing.discriminator[=].path = "coding.system"
  * ^slicing.ordered = false
  * ^slicing.rules = #open
* value[x] ..0
* component ^slicing.discriminator[0].type = #value
  * ^slicing.discriminator[=].path = "code"
  * ^slicing.rules = #open
* component contains
    compound 0..* and
    accuracyComponent 0..1
* component[compound] ^short = "Compound numeric measurement entry components"
  * ^definition = "Each compoundComponent contains one of the N constituents of the compound measurement. These entries are NOT present if a Measurement-Status attribute indicates an error."
  * ^comment = "A compound measurement is a measurement that requires more than one value to represent it, such as an acceleration which has an x, y, and z components. The Blood pressure is also represented as a compound measurement, containing systolic, diastolic and MAP components. One combines all the compound elements together to describe the measurement. The Metric-Id-List entry n and Compound-Basic/Simple-Nu-Observed-Value entry n are ordered such that the code that describes each entry n is computed from the partition of the Type attribute and the term code of the Metric-Id-List attribute. In the case of the Compound-Nu-Observed-Value, the term code comes from the Compound-Nu-Observed-Value.metric sub-component."
  * code from $MDCnotObject (required)
    * coding 1..
      * ^slicing.discriminator[0].type = #value
      * ^slicing.discriminator[=].path = "system"
      * ^slicing.rules = #open
    * coding contains
        MdcType 1..1 and
        LoincCoding 0..1
    * coding[MdcType] ^short = "The 11073-10101 MDC code for the measurement"
      * ^definition = "This MDC code expresses what the measurement is"
      * system 1..
      * system = "urn:iso:std:iso:11073:10101" (exactly)
      * code 1..
    * coding[LoincCoding] ^short = "The LOINC code for the measurement if a vital sign"
      * ^definition = "This (optional) LOINC code expresses what the measurement is"
      * system 1..
      * system = "http://loinc.org" (exactly)
      * code 1..
        * ^comment = "Required if the measurement is a vital sign"    
    * text ^definition = "It is recommended to display at least the reference identifier describing the compound sub-element"
  * value[x] only Quantity
  * valueQuantity
    * value 1..
      * ^definition = "The value of nth element of the compound attribute. The value element for the nth compoundComponent is missing if the attribute sends a special value or the Compound-Nu-Observed-Value status element indicates an error."
    * system 1..
    * system = "http://unitsofmeasure.org" (exactly)
      * ^definition = "The unit code shall use the UCUM system"
    * code 1..
      * ^definition = "The MDC code must be translated to the UCUM code."
  * dataAbsentReason ^short = "Populated when a special value or status in Compound-Nu-Observed-Value indicates invalid, not unavailable, or msmt ongoing"
    * ^definition = "Provides a reason why the expected value in the nth element Observation.compoundComponent.valueQuantity is missing. This could be a NaN (Not a Number), PINF (Positive infinity), NINF (Negative infinity) or the reserved and not-at-this-resolution special values. It can also be indicated by the (measurement) status field of the Compound-Nu-Observed-Value. Note that the FHIR codes for NAN are no longer 'NAN' but 'not-a-number'. Similar changes have been made for NINF and PINF."
    * coding ^slicing.discriminator[0].type = #value
      * ^slicing.discriminator[=].path = "system"
      * ^slicing.rules = #open
    * coding contains FhirDefault 1..1
    * coding[FhirDefault]
      * system 1..
      * system = "http://terminology.hl7.org/CodeSystem/data-absent-reason" (exactly)
      * code 1..
  * interpretation
    * coding ^slicing.discriminator[0].type = #value
      * ^slicing.discriminator[=].path = "system"
      * ^slicing.rules = #open
    * coding contains MsmtStatusInterpretation 1..1
    * coding[MsmtStatusInterpretation] ^short = "Measurement status interpretation when questionable, calibration-ongoing, validated, early-indication, threshold exceeded, alarm inhibited"
      * system 1..
      * system = "http://hl7.org/fhir/uv/pocd/CodeSystem/measurement-status" (exactly)
      * code 1..
* component[accuracyComponent] ^short = "The accuracy of the measurement"
  * ^definition = "This component shall be present if the Accuracy attribute is present."
  * code from $Quantity11073MDC (required)
    * coding 1..
      * ^slicing.discriminator[0].type = #value
      * ^slicing.discriminator[=].path = "system"
      * ^slicing.rules = #open
    * coding contains MdcType 1..1
    * coding[MdcType] ^short = "The 11073-10101 MDC code for the measurement"
      * system 1..
      * system = "urn:iso:std:iso:11073:10101" (exactly)
      * code 1..
      * code = #67914 (exactly)
        * ^definition = "The code for the Accuracy attribute is 67914"
    * text ^definition = "Should include the reference identifier for the Accuracy attribute MDC_ATTR_NU_ACCUR_MSMT"
  * value[x] 1..
    * ^slicing.discriminator[0].type = #type
    * ^slicing.discriminator[=].path = "$this"
    * ^slicing.rules = #open
  * valueQuantity 1..
  * valueQuantity only Quantity
    * ^sliceName = "valueQuantity"
    * value 1..
      * ^definition = "This is the value of the accuracy attribute. The value is Mder FLOAT encoded and shall be expressed to the precision indicated by the Mder FLOAT."
    * system 1..
    * system = "http://unitsofmeasure.org" (exactly)
      * ^definition = "The unit code shall use the UCUM system"
    * code 1..
      * ^definition = "The units for the Accuracy are given by the units of the measurement so this entry shall have the same code as in Observation.valueQuantity.code"
  * dataAbsentReason ..0


---

File: repos/HL7_SLASH_phd/input/fsh/StructureDefinition.PhdDevice.fsh

Alias: $ASN1attribute = http://hl7.org/fhir/uv/phd/ValueSet/ASN1attribute
Alias: $Quantity11073MDC = http://hl7.org/fhir/uv/phd/ValueSet/Quantity11073MDC
Alias: $CodeableConcept11073MDC = http://hl7.org/fhir/uv/phd/ValueSet/CodeableConcept11073MDC

Profile: PhdDevice
Parent: Device
Id: PhdDevice
Description: "Base StructureDefinition for the Device Resource for a PHD"
* ^meta.lastUpdated = "2017-10-16T05:03:37.38-04:00"
* ^url = "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdDevice"
* ^status = #draft
* ^date = "2017-07-07T11:39:51.3383228-04:00"
* ^purpose = "This resource describes the primary features of a Personal Health Device (PHD). It contains the properties, production specification, specializations, and overall type of the PHD."
* . ^definition = "The characteristics, operational status and capabilities of a medical-related component of a medical device. A PHD is JUST the medical-related component."
  * ^comment = "For the initial scope, this Device resource is only applicable to describe a single node in the containment tree that is produced by the context scanner in any medical device that implements or derives from the ISO/IEEE 11073 standard and that does not represent a metric. Examples for such a node are MDS, VMD, or Channel.\r\n\r\nWith PHD medical units, there is no medical scanner and the unit is only a single node, a single 'simple' MDS, and it is static. Thus a PHD has no parent 'Device'.  When a PHD supports multiple device specializations, the single unit description is still the case. A specialization is just an way to organize a set of metric objects that tend to be generated by a single sensor, but the device could expose metric objects from several specializations which usually means it has more than one sensor. In PHDs multiple specialization support is rare."
* identifier ^slicing.discriminator[0].type = #value
  * ^slicing.discriminator[=].path = "type.coding.system"
  * ^slicing.discriminator[+].type = #value
  * ^slicing.discriminator[=].path = "type.coding.code"
  * ^slicing.rules = #open
  * ^short = "Information that uniquely describes the personal health device"
  * ^definition = "The assigned unique identification of the device that is semantically meaningful outside of the FHIR resource context. An example would be the IEEE EUI-64 System-Id or transport address. For PHDs the systemIdentifier is required and the transportAddressIdentifier is highly recommended as this is what most end users see and can obtain from the device itself or device packaging."
  * ^alias = "11073-10206 System id, transport address, etc."
* identifier contains
    systemIdIdentifier 1..1 and
    btmacAddressIdentifier 0..1 and
    macAddressIdentifier 0..1
* identifier[systemIdIdentifier] ^short = "System Id identifier"
  * ^definition = "This entry contains the IEEE EUI-64. If absent (bad device) set to all zeros."
  * ^alias = "11073-10206 System id"
  * type 1..
    * coding 1..1
      * ^short = "Indicates this is the IEEE 11073 System Id identifier"
      * system 1..
      * system = "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaDeviceIdentifiers" (exactly)
      * code 1..
      * code = #SYSID (exactly)
  * system 1..
  * system = "urn:oid:1.2.840.10004.1.1.1.0.0.1.0.0.1.2680" (exactly)
    * ^short = "EUI-64 system identifier"
    * ^definition = "Identifies the system as an IEEE EUI."
  * value 1..
    * ^short = "System id value from System-Id attribute"
    * ^definition = "The System id from the System-Id attribute as an 8-byte HEX string where each byte is separated by dashes, for example FE-ED-AB-EE-DE-AD-77-C3. "
    * ^comment = "The formatting is specified in the IEEE document Guidelines for 64-bit Global Identifier.\r\n\r\nTo allow the mapping of non-compliant proprietary devices that do not provide a system id, the value is set to all zeros in the same format, 00-00-00-00-00-00-00-00"
* identifier[btmacAddressIdentifier] ^short = "Bluetooth MAC Transport address identifier"
  * ^definition = "This entry contains the Bluetooth MAC transport address."
  * ^alias = "Bluetooth MAC Transport address"
  * type 1..
    * coding 1..1
      * ^short = "Indicates this is the Bluetooth Mac address identifier"
      * system 1..
      * system = "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaDeviceIdentifiers" (exactly)
      * code 1..
      * code = #BTMAC (exactly)
  * system 1..
  * system = "http://hl7.org/fhir/sid/eui-48/bluetooth" (exactly)
  * value 1..
    * ^definition = "The Bluetooth MAC as an EUI-48 such as 00-E5-DE-AD-77-C3. "
    * ^comment = "Transport addresses are supposed to be unique for a given device."
* identifier[macAddressIdentifier] ^short = "MAC Transport address identifier"
  * ^definition = "This entry contains the MAC transport address."
  * ^alias = "MAC Transport address"
  * type 1..
    * coding 1..1
      * ^short = "Indicates this is the Mac address identifier"
      * system 1..
      * system = "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaDeviceIdentifiers" (exactly)
      * code 1..
      * code = #ETHMAC (exactly)
  * system 1..
  * system = "http://hl7.org/fhir/sid/eui-48/ethernet" (exactly)
  * value 1..
    * ^definition = "The MAC as an EUI-48 such as 00-E5-DE-AD-77-C8. "
    * ^comment = "Transport addresses are supposed to be unique for a given device."
* manufacturer 1..
  * ^short = "Manufacturer name from SystemInfo.system-manufacturer"
  * ^definition = "The manufacturer name as reported in the IEEE 11073-10206 SystemInfo."
  * ^comment = "The system manufacturer attribute is required by the IEEE 11073-10206 specification"
* serialNumber ^short = "Serial number from the SystemInfo.serial-number"
  * ^definition = "The serial number as reported by the IEEE 11073-10206 SystemInfo."
  * ^comment = "The serial number is optional in the 11073-10206 specification. The serial number shall be present if the PHD reports it."
* modelNumber 1..
  * ^short = "Model number from SystemInfo.model-number"
  * ^definition = "The model number as reported by the SystemInfo attribute."
  * ^comment = "The model number attribute is required by the IEEE 11073-10206 specification"
* type 1..
  * ^short = "Indicates the device is a PHD."
  * coding ^slicing.discriminator[0].type = #value
    * ^slicing.discriminator[=].path = "system"
    * ^slicing.rules = #open
  * coding contains MDCType 1..1
  * coding[MDCType] ^short = "Required MDC code system entry"
    * ^definition = "The IEEE 11073-10101 code for the PHD simple MDS."
    * system 1..
    * system = "urn:iso:std:iso:11073:10101" (exactly)
      * ^short = "Identifies IEEE 11073-10101 coding system"
      * ^definition = "This value identifies the IEEE 11073-10101 coding system"
    * code 1..
    * code = #65573 (exactly)
      * ^short = "Indicates PHD"
      * ^definition = "The code for a Simple MDS indicating that this unit is a personal health device"
  * text ^definition = "A human readable display describing the meaning of the MDC code."
    * ^comment = "It is suggested that this element contain the reference identfier for Simple MDS 'MDC_MOC_VMS_MDS_SIMP'."
* specialization 1..
  * ^short = "This element contains an entry for each supported specialization"
  * ^comment = "There shall be a specialization entry for each specialization reported in the required System-Type-Spec-List attribute. A specialization in this case defines not only what type of measurements the PHD reports but that the PHD reports these measurements according to one of the 11073-114xx specialization standards. Most PHDs support only a single specialization such as the Blood Pressure or Pulse Oximeter specialization."
  * systemType ^short = "The specialization standard supported by the PHD."
    * ^comment = "The specialization.specType comes from the System-Type-Spec-List specialization entry 'type'. "
    * coding ^slicing.discriminator[0].type = #value
      * ^slicing.discriminator[=].path = "system"
      * ^slicing.rules = #open
    * coding contains MDCType 1..1
    * coding[MDCType] ^short = "Required MDC code system entry for specializations"
      * system 1..
      * system = "urn:iso:std:iso:11073:10101" (exactly)
        * ^short = "The 11073-10101 system identifier"
      * code 1..
        * ^short = "The 11073-10101 specialization code from a System-Type-Spec-List[i].type."
  * version 1..
    * ^short = "The version of the specialization standard supported by the PHD from the System-Type-Spec-List[i].version"
    * ^comment = "The version of the specialization comes from the System-Type-Spec-List specialization entry. If a PHD supports multiple versions of the same specialization a separate Device.specialization entry is needed where the systemType elements are repeated. If the PHD reports a generic specialization (follows no 114xx specialization but conforms to the 11072-10206 standard, the version is the 10206 protocol version."
* version ^short = "A PHD may report firmware, hardware, software, internal protocol, and Continua versions."
  * ^comment = "There are several versions that are reported from a PHD. Firmware, Hardware, Protocol (internal, not 10206), and Software versions come from the Production-Specification attribute. The Continua version comes from the Reg-Cert-Data-List attribute. Continua compliant PHDs report at least a firmware and Continua version. A separate version entry is needed for each of the versions reported by the PHD."
  * type 1..
    * coding ^slicing.discriminator[0].type = #value
      * ^slicing.discriminator[=].path = "system"
      * ^slicing.rules = #open
    * coding contains MDCType 1..1
    * coding[MDCType] ^short = "Required MDC code system entry"
      * system 1..
      * system = "urn:iso:std:iso:11073:10101" (exactly)
        * ^short = "Indicates the codes come from the MDC coding system"
      * code 1..
        * ^short = "A code indicating the type of version the Device.version.value refers to."
        * ^comment = "The currently defined version codes used in this element are as shown in the Table. More than one of these versions may be reported by a PHD. Each version reported by the PHD shall be encoded.\r\n\r\n       Description                   CODE             Reference Identifier\r\n       ------------------------------------------------------------------------------------\r\n       Hardware revision            531974            MDC_ID_PROD_SPEC_HW\r\n       Software revision            531975            MDC_ID_PROD_SPEC_SW\r\n       Firmware revision            531976            MDC_ID_PROD_SPEC_FW\r\n       Protocol                     531977            MDC_ID_PROD_SPEC_PROTOCOL\r\n       Continua version             532352            MDC_REG_CERT_DATA_CONTINUA_VERSION\r\n       The Continua version comes from the Continua Reg-Cert-Data-List attribute\r\n"
  * value ^short = "The version"
* property ^slicing.discriminator[0].type = #value
  * ^slicing.discriminator[=].path = "type"
  * ^slicing.rules = #open
* property contains
    bitProperties 0..* and
    quantitiesProperty 0..* and
    codedListProperties 0..*
* property[bitProperties] ^short = "Properties reported in BITs fields"
  * ^definition = "For each bit setting reported a BITs value, a bitProperties element is used."
  * ^comment = "A BITs measurement is a 16 or 32-bit ASN1 BITs value where each bit means something. "
  * type from $ASN1attribute (required)
    * ^short = "Tells what the BITs item is"
    * ^definition = "One of the capabilities reported in the Mds-Time-Info.mds-time-caps-state or Reg-Cert-Data-List.regulation-status field."
    * ^comment = "Only set 'event' types need be reported. Both set and cleared 'state' types need to be reported. The regulation status is as state type. All time capabilities are event types"
    * coding 1..1
      * ^short = "Required ASN1 code system entry"
      * system 1..
      * system = "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7" (exactly)
      * code 1..
        * ^definition = "The ASN1 code made from the code and the Mder bit position"
        * ^comment = "The MDC code for the mds-time-caps-state field is 68219. Thus the ASN1 code for the case 'device supports a relative time clock', Mder bit 2, would be 68219.2. For the regulation status field the MDC code is 532354, and only bit 0 is defined. However, the regulated status is when the bit is cleared and the unregulated status is when the bit is set. That choice can be confusing."
    * text ^definition = "It is recommended to display at least the ASN1 name for the given bit meaning"
  * valueQuantity ..0
  * valueCode 1..1
    * coding ^slicing.discriminator[0].type = #value
      * ^slicing.discriminator[=].path = "system"
      * ^slicing.rules = #open
    * coding contains V2Binary 1..1
    * coding[V2Binary] ^short = "Required V2 Binary code system entry"
      * system 1..
      * system = "http://terminology.hl7.org/CodeSystem/v2-0136" (exactly)
      * code 1..
        * ^definition = "If bit is set, code contains Y if cleared, N"
* property[quantitiesProperty] ^short = "The device properties represented by quantities such as clock resolution"
  * ^definition = "This element represents all those time properties that are a quantity such as the various clock resolutions and synchronization accuracy."
  * ^comment = "If the PHD reports that one of these given properties are unknown, this element shall not be populated for that property."
  * type from $Quantity11073MDC (required)
    * ^short = "The type of time quantity"
    * coding ^slicing.discriminator[0].type = #value
      * ^slicing.discriminator[=].path = "system"
      * ^slicing.rules = #open
    * coding contains MDCType 1..1
    * coding[MDCType] ^short = "The 11073-10101 MDC code for the type"
      * system 1..
      * system = "urn:iso:std:iso:11073:10101" (exactly)
      * code 1..
        * ^definition = "The MDC code representing the property"
        * ^comment = "Currently PHDs support the reporting of the time quantities as shown in the Table. More may be added in the future\r\n\r\n       Description                        CODE            Reference Identifier\r\n       ------------------------------------------------------------------------------------\r\n       Absolute clock resolution         68222            MDC_TIME_RES_ABS\r\n       Base-offset clock resolution      68226            MDC_TIME_RES_BO\r\n       Relative time resolution          68223            MDC_TIME_RES_REL\r\n       Hi Res relative time resolution   68224            MDC_TIME_RES_REL_HI_RES\r\n       Time sync accuracy                68221            MDC_TIME_SYNC_ACCURACY\r\n       Tick Resolution                   68229            MDC_ATTR_TICK_RES\r\n"
    * text ^definition = "It is recommended to display at least the MDC reference identifier for the MDC code"
  * valueQuantity 1..1
    * ^definition = "The value. All the time fields are scaled to microseconds"
    * system 1..
    * system = "http://unitsofmeasure.org" (exactly)
      * ^definition = "The unit code shall use the UCUM system"
    * code 1..
    * code = #us (exactly)
      * ^definition = "The UCUM code (for microseconds it is 'us')"
  * valueCode ..0
* property[codedListProperties] ^short = "The device properties represented by a list of codes such as the list of certified PHD or H-FS interfaces"
  * ^definition = "This element represents all those properties that are a list of codes. At the moment there is only certified PHD interfaces."
  * ^comment = "Continua certified PHDs are required to have these entries."
  * type from $CodeableConcept11073MDC (required)
    * ^short = "What the coded list is"
    * coding 1..
      * ^short = "Required MDC code system entry"
      * system 1..
      * system = "urn:iso:std:iso:11073:10101" (exactly)
      * code 1..
        * ^definition = "The MDC code representing the property"
        * ^comment = "Currently PHDs support the reporting of one of the coded lists as shown in the Table. More may be added in the future\r\n\r\n       Description                CODE    Reference Identifier                           Code System\r\n       -----------------------------------------------------------------------------------------------------------------------------------\r\n    Time synchronization      68220    MDC_TIME_SYNC_PROTOCOL\r       Certified PHD interfaces  532353   MDC_REG_CERT_DATA_CONTINUA_CERT_DEV_LIST       http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaPHD\r\n"
    * text ^definition = "It is recommended to display at least the MDC reference identifier for the code"
  * valueQuantity ..0
  * valueCode 1..
    * ^short = "There shall be one valueCode entry for every item supported by the PHG in the list"
    * coding 1..
      * system 1..
        * ^definition = "Either the http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaPHD or urn:iso:std:iso:11073:10101 code systems"
      * code 1..
        * ^definition = "One of the Continua interface certification codes"

---

File: repos/HL7_SLASH_phd/input/fsh/StructureDefinition.PhdDeviceMetric.fsh

Profile: PhdDeviceMetric
Parent: DeviceMetric
Id: PhdDeviceMetric
Description: "StructureDefinition for the DeviceMetric for a PHD"
* ^url = "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdDeviceMetric"
* ^status = #draft
* ^purpose = "This resource captures the device metric for a single type of observation that a PHD device can generate."
* . ^definition = "This resource contains at least an MDC type code for the observation that can be generated by the PHD."
* type
  * coding ^slicing.discriminator[0].type = #value
    * ^slicing.discriminator[=].path = "system"
    * ^slicing.rules = #open
  * coding contains
      MDCType 1..1
  * coding[MDCType] ^short = "The 11073-10101 MDC code for the metric"
    * ^definition = "This MDC code expresses the observation type of the metric."
    * ^comment = "This information is provided by any ACOM/GHS PHD device."
    * system 1..
    * system = "urn:iso:std:iso:11073:10101" (exactly)
    * code 1..
      * ^comment = "Required for all measurements"
  * text ^short = "It is recommended to display at least the reference identifier for the MDC code."
* source only Reference(PhdDevice)
* unit
  * ^comment = "When the type of the observation is numeric or compound numeric, the unit could be filled in as well. This should be a UCUM code, but when that is not known, it can be an MDC code. This field can be updated by the gateway when an observation of the corresponding type is generated by the PHD."
* operationalStatus
  * ^comment = "For a PHD device the operational status is only known when it is communicating. It is recommended to leave this field out."
* category
  * ^comment = "When the category can be derived from the type of the DeviceMetric it can be filled in on creation. Otherwise it can be filled in by updating the DeviceMetric resource when the PHD generates an observation of that type. It can be set to #unspecified until known."
* measurementPeriod
  * ^comment = "when this information is provided by a GHS device in an Observation Schedule descriptor, it should be filled in here as well."
* extension contains http://hl7.org/fhir/uv/phd/StructureDefinition/Accuracy named Accuracy 0..1

---

File: repos/HL7_SLASH_phd/input/fsh/StructureDefinition.PhdNumericObservation.fsh

Alias: $CodeableConcept11073MDC = http://hl7.org/fhir/uv/phd/ValueSet/CodeableConcept11073MDC
Alias: $Quantity11073MDC = http://hl7.org/fhir/uv/phd/ValueSet/Quantity11073MDC
Alias: $ASN1attribute = http://hl7.org/fhir/uv/phd/ValueSet/ASN1attribute
Alias: $Range11073MDC = http://hl7.org/fhir/uv/phd/ValueSet/Range11073MDC
Alias: $String11073MDC = http://hl7.org/fhir/uv/phd/ValueSet/String11073MDC

Profile: PhdNumericObservation
Parent: PhdBaseObservation
Id: PhdNumericObservation
Description: "StructureDefinition for Observation Resources representing measurement data coming from a medical device where the measurement is number."
* ^meta.lastUpdated = "2017-12-14T04:43:57.173-05:00"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #oo
* ^url = "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdNumericObservation"
* ^status = #draft
* ^date = "2017-06-02T14:29:52.39367-04:00"
* . ^short = "Simple Numeric measurement"
  * ^definition = "The PhdNumericObservation reports PHD measurements that contain one of either a Basic-Nu-Observed-Value, Simple-Nu_observed-Value, or Nu_observed-Value attribute."
  * ^comment = "Used for non-compound numeric observations from Personal Health Devices."
* category
  * ^slicing.discriminator[0].type = #value
  * ^slicing.discriminator[=].path = "coding.code"
  * ^slicing.discriminator[+].type = #value
  * ^slicing.discriminator[=].path = "coding.system"
  * ^slicing.ordered = false
  * ^slicing.rules = #open
* category contains VSCat 0..1
* category[VSCat].coding 1..
  * system 1..
  * system = "http://terminology.hl7.org/CodeSystem/observation-category" (exactly)
  * code 1..
  * code = #vital-signs (exactly)
* value[x] only Quantity
  * value 1..
    * ^definition = "The decoded Mder FLOAT or SFLOAT value from a PHD measurement containing either a\r\nBasic-Nu-Observed-Value\r\nSimple-Nu-Observed-Value or\r\nNu_observed-Value attribute."
    * ^comment = "The implicit precision in the value shall be honored. The Mder encoding used in the above attributes provides this precision. The translating software shall honor that precision when generating this value.\r\nThis element shall be present unless there is an error reported in the Measurement-Status attribute or the Nu-Observed-Value.status field or the Mder encoding represents one of the special values. In that case there is a dataAbsentReason element and the valueQuantity element is not present. Note that not all measurement status values are errors resulting in no measurement being reported here; for example the preliminary or verified status."
  * system 1..
  * system = "http://unitsofmeasure.org" (exactly)
  * code 1..
    * ^short = "The UCUM code for the units of this measurement."
    * ^comment = "The UCUM code needs to be translated from  the 11073-10101 code from the device. This translation means that the reporting of units is not future proof."
* dataAbsentReason ^short = "This element is populated for numeric observations when a special value is reported that is not a real number."
  * ^definition = "Provides a reason why the expected value in the element Observation.valueQuantity is missing. In this case this could also be 'not-a-number', 'positive-infinity', 'negative-infinity' or 'error'."
  * ^comment = "The values in the http://terminology.hl7.org/CodeSystem/data-absent-reason system do not provide a code that matches the special values 'not at this resolution' and 'reserved'. In those cases one uses the generic 'error' code. If both a special value and a Measurement-Status indicating invalid, not unavailable, or msmt ongoing are received, the Measurement-Status mapping takes precedence."
* extension contains http://hl7.org/fhir/uv/phd/StructureDefinition/Accuracy named Accuracy 0..1
* component contains
    accuracyComponent 0..1 and
    alertOpStateComponent 0..* and
    currentLimitsComponent 0..1 and
    alertOpTextStringComponent 0..1 and
    measurementConfidence95Component 0..1 and
    thresholdNotificationTextStringComponent 0..1
* component[accuracyComponent] ^short = "The accuracy of the measurement"
  * ^definition = "This component shall be present if the Accuracy attribute is present."
  * code from $Quantity11073MDC (required)
    * coding 1..
      * ^slicing.discriminator[0].type = #value
      * ^slicing.discriminator[=].path = "system"
      * ^slicing.rules = #open
    * coding contains MdcType 1..1
    * coding[MdcType] ^short = "The 11073-10101 MDC code for the measurement"
      * system 1..
      * system = "urn:iso:std:iso:11073:10101" (exactly)
      * code 1..
      * code = #67914 (exactly)
        * ^definition = "The code for the Accuracy attribute is 67914"
    * text ^definition = "Should include the reference identifier for the Accuracy attribute MDC_ATTR_NU_ACCUR_MSMT"
  * value[x] 1..
  * valueQuantity 1..1
  * valueQuantity only Quantity
    * ^sliceName = "valueQuantity"
    * value 1..
      * ^definition = "This is the value of the accuracy attribute. The value is Mder FLOAT encoded and shall be expressed to the precision indicated by the Mder FLOAT."
    * system 1..
    * system = "http://unitsofmeasure.org" (exactly)
      * ^definition = "The unit code shall use the UCUM system"
    * code 1..
      * ^definition = "The units for the Accuracy are given by the units of the measurement so this entry shall have the same code as in Observation.valueQuantity.code"
  * dataAbsentReason ..0
* component[alertOpStateComponent] ^short = "The Alert Operations State component"
  * ^definition = "This component gives one of the settings reported in the Alert-Op-State attribute. This attribute is used only by the Pulse Oximeter specialization.\r\nThe Alert-Op-State attribute is used in conjunction with the Current-Limits and Measurement-Status attributes. The Current-Limits defines upper and lower limit thresholds for a reported measurement value. When the reported measurement value goes below or above these limits, a bit is set in the Measurement-Status attribute is set if the Alert-Op-State attribute indicates that the alert is active for the given threshold. Since it is considered important that if a Current-Limits attribute is present an alert shall be sent went the thresholds are crossed, the Alert-Op-State Bits are only set when the alert is, for some reason, turned OFF for a given threshold.\r\nThere shall be one such alertOpStateComponent entry for every bit set in the Alert-Op-State attribute. There may be an entry for the defined cleared components as well."
  * ^comment = "Recall that when creating the code for this entry that the code uses the MDER-Bit setting to be reported along with the Alert-Op-State attribute's MDC code. MDER-Bit 0 is the most significant bit of the attribute value. Since the Alert-Op-State attribute is a BITS-16 value, MDER-Bit 0 would have value 0x8000 and MDER-Bit 1 would have value 0x4000. Only bits 0, 1, and 2 are defined for this attribute. This component indicates if a given alert condition monitoring is turned off."
  * code from $ASN1attribute (required)
    * coding 1..1
      * ^short = "Only the ASN1 to HL7 coding for this item."
      * ^comment = "Normally alternative coding systems are allowed but in this case the value is intimately tied to the code. The code represents the feature indicated by a bit setting in the attribute value. which is either cleared (0) or set (1). Thus the value for this entry is itself a binary 'Y' or 'N' code from http://terminology.hl7.org/CodeSystem/v2-0203"
      * system 1..
      * system = "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7" (exactly)
      * code 1..
        * ^definition = "This code, which is an alpha-numeric string, is generated by the attribute MDC code, which is 68746 for the Alert-Op-State, followed by a dot (.) followed by the MDER-bit that was set. Given that only three bits are defined in the Pulse Ox specialization that uses this attribute, the code will be one of 68746.0, 68746.1, or 68746.2"
        * ^comment = "Note that this code is an alpha-numeric string and not a decimal number. Think of it like a very-limited OID."
  * value[x] 1..
  * value[x] only CodeableConcept
    * coding 1..
      * ^slicing.discriminator[0].type = #value
      * ^slicing.discriminator[=].path = "system"
      * ^slicing.rules = #open
    * coding contains V2Binary 1..1
    * coding[V2Binary] ^short = "The required Version 2 Table 0136 Binary code entry"
      * system 1..
      * system = "http://terminology.hl7.org/CodeSystem/v2-0203" (exactly)
        * ^definition = "This coding system contains only two entries, 'Y' (bit set) and 'N' (bit cleared)"
      * code 1..
        * ^definition = "If the MDER-Bit is set, the code value is 'Y' otherwise it is 'N'. These are 'state' bits thus both the set and cleared states are reported."
        * ^comment = "Recall that when the value is 'Y' the alarm or alert is turned off"
  * dataAbsentReason ..0
* component[currentLimitsComponent] ^short = "The Current-Limits values"
  * ^definition = "The Current-Limits attribute gives upper and lower threshold values for the triggering of an alert for the measured value being reported in this Observation resource. This attribute is currently used only in the Pulse Oximeter specialization. If the alerting is not turned off, a Measurement-Status attribute bit is set when either threshold is crossed. The Current-Limits attribute value shall be reported if it is present in the measurement."
  * ^comment = "The value is expressed as a range. The lower and upper values of the range represent the thresholds."
  * ^requirements = "Allows the downstream signaling of an alert and/or warning situation."
  * code from $Range11073MDC (required)
    * coding 1..
      * ^slicing.discriminator[0].type = #value
      * ^slicing.discriminator[=].path = "system"
      * ^slicing.rules = #open
    * coding contains MdcType 1..1
    * coding[MdcType] ^short = "The 11073-10101 MDC code for the measurement"
      * system 1..
      * system = "urn:iso:std:iso:11073:10101" (exactly)
        * ^definition = "Indicates the MDC coding system"
        * ^comment = "The code is that of the Current-Limits attribute"
      * code 1..
      * code = #67892 (exactly)
        * ^definition = "Shall be the code of the Current-Limits attribute."
    * text ^definition = "Should include the reference id for the Current-Limits attribute which is MDC_ATTR_LIMIT_CURR"
  * value[x] only Range
    * low 1..
      * value 1..
        * ^definition = "This value is given by Current-Limits.lower as an MDER-FLOAT and shall be expressed in the precision indicated by the MDER-FLOAT construct."
        * ^comment = "This gives the lower threshold. If the measurement falls below this value, the Measurement-Status attribute is sent with a bit stating the alert is present (if the alerts are not turned off for the lower limits)."
      * system 1..
      * system = "http://unitsofmeasure.org" (exactly)
        * ^definition = "Indicates the UCUM coding system."
      * code 1..
        * ^definition = "This code (which is the code for the units) shall be the same as Observation.valueQuantity.code"
        * ^comment = "The MDC units are translated to UCUM."
    * high 1..
      * ^comment = "The high limit shall be present"
      * value 1..
        * ^definition = "This value is given by Current-Limits.upper as an MDER-FLOAT and shall be expressed in the precision indicated by the MDER-FLOAT construct."
        * ^comment = "This gives the upper threshold. If the measurement goes above this value, the Measurement-Status attribute is sent with a bit stating the alert is present (if the alerts are not turned off for the upper limits)."
      * system 1..
      * system = "http://unitsofmeasure.org" (exactly)
        * ^definition = "Indicates the MDC coding system."
      * code 1..
        * ^definition = "This code (which is the code for the units) shall be the same as Observation.valueQuantity.code"
        * ^comment = "The MDC units are translated to UCUM."
  * dataAbsentReason ..0
* component[alertOpTextStringComponent] ^short = "The Alert-Op-Text human readable strings"
  * ^definition = "This component reports the values in the Alert-Op-Text-String attribute."
  * ^comment = "This attribute consists of human readable strings giving further information about the upper and lower limits of the Alerts"
  * code from $String11073MDC (required)
    * coding 1..
      * ^slicing.discriminator[0].type = #value
      * ^slicing.discriminator[=].path = "system"
      * ^slicing.rules = #open
    * coding contains MdcType 1..1
    * coding[MdcType] ^short = "The 11073-10101 MDC code for the measurement"
      * system 1..
      * system = "urn:iso:std:iso:11073:10101" (exactly)
      * code 1..
      * code = #68104 (exactly)
        * ^definition = "The MDC code for the Alert-Op-Text-String attribute"
    * text ^definition = "The reference identifier for the attribute should be included. The Alert-Op-Text-String attribute ref id is MDC_ATTR_AL_OP_TEXT_STRING"
  * value[x] 1..
  * valueString 1..1
  * valueString only string
    * ^sliceName = "valueString"
    * value 1..
      * ^definition = "This is the value of the lower and upper text strings presented in an application specific manner."
  * dataAbsentReason ..0
* component[measurementConfidence95Component] ^short = "The Measurement-Confidence-95 range"
  * ^definition = "The Measurement-Confidence-95 attribute defines the lower and upper bounds for a range within which the manufacture is 95% confident that the actual value resides. The unit for the lower bound and upper bound is the same as the measurement. "
  * code from $Range11073MDC (required)
    * coding 1..
      * ^slicing.discriminator[0].type = #value
      * ^slicing.discriminator[=].path = "system"
      * ^slicing.rules = #open
    * coding contains MdcType 1..1
    * coding[MdcType] ^short = "The 11073-10101 MDC code for the measurement"
      * system 1..
      * system = "urn:iso:std:iso:11073:10101" (exactly)
        * ^definition = "Indicates the MDC coding system"
        * ^comment = "The code is that of the Current-Limits attribute"
      * code 1..
      * code = #68236 (exactly)
        * ^definition = "Shall be the code of the Current-Limits attribute."
    * text ^definition = "Should include the reference id for the Current-Limits attribute which is MDC_ATTR_MSMT_CONFIDENCE_95"
  * value[x] 1..
  * value[x] only Range
    * low 1..
      * value 1..
        * ^definition = "Thsi value is given by Measurement-Confidence-95.lower-bound as an MDER-FLOAT and shall be expressed in the precision indicated by the MDER-FLOAT construct."
        * ^comment = "This gives the lower bound of the range for which the manufacturer is 95% confident that the measurement reported lies in."
      * system 1..
      * system = "http://unitsofmeasure.org" (exactly)
        * ^definition = "Indicates the UCUM coding system."
      * code 1..
        * ^definition = "This code (which is the code for the units) shall be the same as Observation.valueQuantity.code"
        * ^comment = "The MDC units are translated to UCUM."
    * high 1..
      * ^comment = "The high limit shall be present"
      * value 1..
        * ^definition = "This value is given by Measurement-Confidence-95.upper-bound as an MDER-FLOAT and shall be expressed in the precision indicated by the MDER-FLOAT construct."
        * ^comment = "This gives the upper bound of the range for which the manufacturer is 95% confident that the measurement reported lies in."
      * system 1..
      * system = "http://unitsofmeasure.org" (exactly)
        * ^definition = "Indicates the UCUM coding system."
      * code 1..
        * ^definition = "This code (which is the code for the units) shall be the same as Observation.valueQuantity.code"
        * ^comment = "The MDC units are translated to UCUM."
  * dataAbsentReason ..0
* component[thresholdNotificationTextStringComponent] ^short = "The Threshold-Notification-Text-String attribute value entry"
  * ^definition = "This component reports the values in the Threshold-Notification-Text-String attribute. This attribute is a human readable string describing the threshold met condition."
  * ^comment = "This attribute consists of human readable strings giving further information threshold notification(s)"
  * code from $String11073MDC (required)
    * coding 1..
      * ^slicing.discriminator[0].type = #value
      * ^slicing.discriminator[=].path = "system"
      * ^slicing.rules = #open
    * coding contains MdcType 1..1
    * coding[MdcType] ^short = "The 11073-10101 MDC code for the measurement"
      * system 1..
      * system = "urn:iso:std:iso:11073:10101" (exactly)
      * code 1..
      * code = #68232 (exactly)
        * ^definition = "The MDC code for the Threshold-Notification-Text-String attribute"
    * text ^definition = "The reference identifier for the attribute should be included. The Threshold-Notification-Text-String attribute ref id is MDC_ATTR_THRES_NOTIF_TEXT_STRING"
  * value[x] 1..
  * valueString 1..1
  * valueString only string
    * ^sliceName = "valueString"
    * value 1..
      * ^definition = "This is the value of the text string."
  * dataAbsentReason ..0

Mapping: IEEE-11073-10206
Id: IEEE-11073-10206
Title: "Mapping IEEE-11073-10206 ACOM to FHIR"
Source: PhdNumericObservation
Target: "https://sagroups.ieee.org/11073/phd-wg/"
* valueQuantity.value -> "NumericObservation.value"
* valueQuantity.unit -> "NumericObservation.unit" 

---

File: repos/HL7_SLASH_phd/input/fsh/StructureDefinition.PhdPatient.fsh

Profile: PhdPatient
Parent: Patient
Id: PhdPatient
Description: "The patient information reported from personal health gateways (PHG)"
* ^meta.lastUpdated = "2017-10-16T05:10:41.036-04:00"
* ^url = "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdPatient"
* ^status = #draft
* ^date = "2017-08-04T06:04:53.838-04:00"
* ^purpose = "All PHD related Observation resources reference a Patient resource containing a minimal set of information sufficient to identify the patient. However, it may require additional information to link the patient to a person that is only available to an authorized entity. In this manner, PHMI can be protected."
* . ^comment = "Note that the only element that is required to be populated is the identifier which can be made opaque to a third party viewer. PCHA also supports a situation where the PHG can be provided a logical id to a Patient Resource out of band. In this case, the PHG never uploads a Patient Resource, but uses the provided logical id in the Observation resources instead. In this manner, not even the opaque identifiers are sent over the wire."
* identifier 1..
* identifier.type 1..
* identifier.type.coding ^slicing.discriminator.type = #value
* identifier.type.coding ^slicing.discriminator.path = "system"
* identifier.type.coding ^slicing.rules = #open
* identifier.type.coding ^comment = "This element shall be populated."
* identifier.type.coding contains v2Coding 1..1
* identifier.type.coding[v2Coding] ^short = "Code defined by http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier.type.coding[v2Coding] ^definition = "A code using the V2 http://terminology.hl7.org/CodeSystem/v2-0203/ system."
* identifier.type.coding[v2Coding] ^comment = "This HL7 V2 coding system identifies that this is the Continua identifier. The V2 system supports many possible types of identifiers. For a local coding system use 'L', for an unknown identifier, for example with an unknown patient, use 'U'"
* identifier.type.coding[v2Coding].system 1..
* identifier.type.coding[v2Coding].system = "http://terminology.hl7.org/CodeSystem/v2-0203" (exactly)
* identifier.type.coding[v2Coding].system ^definition = "The identification of the code system that defines the meaning of the symbol in the code. In this case the system is http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier.type.coding[v2Coding].system ^comment = "HL7 defines several codes that can be used in the http://terminology.hl7.org/CodeSystem/v2-0203 system. For a list of the possible codes in this system see http://www.hl7.org/fhir/CodeSystem/v2-0203"
* identifier.type.coding[v2Coding].code 1..
* identifier.type.coding[v2Coding].code ^short = "a code from http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier.type.coding[v2Coding].code ^definition = "A symbol defined by the http://terminology.hl7.org/CodeSystem/v2-0203 coding system. For example, the code 'MR' indicates the identifier is a Medical Record Number. 'SS' indicates that the identifier value is a US social security number and 'SR' indicates a state registry id."
* identifier.system 1..
* identifier.system ^short = "The system associated with the value. For XDSb this would be the enterprise identifier (an OID). For unknown patient 'http://terminology.hl7.org/CodeSystem/v2-0004'"
* identifier.system ^comment = "For an unknown patient the system http://terminology.hl7.org/CodeSystem/v2-0004 can be used with value 'U'"
* identifier.value 1..
* identifier.value ^short = "The patient identifier under the jurisdiction indicated by the system element. For unknown patient this would be 'U'."


---

File: repos/HL7_SLASH_phd/input/fsh/StructureDefinition.PhdRtsaObservation.fsh

Profile: PhdRtsaObservation
Parent: PhdBaseObservation
Id: PhdRtsaObservation
Description: "StructureDefinition for Observation Resources representing measurement data coming from a medical device where the measurement is a waveform."
* ^meta.lastUpdated = "2017-12-14T07:44:36.955-05:00"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #oo
* ^url = "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdRtsaObservation"
* ^status = #draft
* ^date = "2017-06-02T14:29:52.39367-04:00"
* . ^definition = "The PhdRtsaObservation reports PHD measurements that contain a Simple-Sa-Observed-Value attribute."
* . ^comment = "Used for RTSA (waveform) observations from Personal Health Devices"
// * category ^slicing.discriminator.type = #value
// * category ^slicing.discriminator.path = "system"
// * category ^slicing.rules = #open
// * category ^min = 0
* category only CodeableConcept
  * ^slicing.discriminator[0].type = #value
  * ^slicing.discriminator[=].path = "coding.code"
  * ^slicing.discriminator[+].type = #value
  * ^slicing.discriminator[=].path = "coding.system"
  * ^slicing.ordered = false
  * ^slicing.rules = #open
* category contains vitalSignsCategory 0..*
* category[vitalSignsCategory] ^short = "Required by the FHIR specification if the measurement value is a vital sign"
* category[vitalSignsCategory] ^comment = "Vitals signs are not too common in waveforms but one might have pulse rates"
* category[vitalSignsCategory].coding ^slicing.discriminator.type = #value
* category[vitalSignsCategory].coding ^slicing.discriminator.path = "system"
* category[vitalSignsCategory].coding ^slicing.rules = #open
* category[vitalSignsCategory].coding contains vitalSigns 1..1
* category[vitalSignsCategory].coding[vitalSigns] ^short = "Required Vital Signs category code system entry"
* category[vitalSignsCategory].coding[vitalSigns].system 1..
* category[vitalSignsCategory].coding[vitalSigns].system = "http://terminology.hl7.org/CodeSystem/observation-category" (exactly)
* category[vitalSignsCategory].coding[vitalSigns].code 1..
* category[vitalSignsCategory].coding[vitalSigns].code = #vital-signs (exactly)
* category[vitalSignsCategory].coding[vitalSigns].code ^definition = "The 'vital-signs' category code"
* value[x] only SampledData
* value[x] ^definition = "The information determined as a result of making the observation, when the observation consists of a periodic sample of numeric measurements."
* value[x] ^comment = "The RTSA metric is typically used for reporting waveform type data such as an ECG trace, spirometer exhalation rates, pulse oximetry pleth waves, etc., though it can be used to report any set of numric measurements that are periodic. The periodicity is important as the time stamps of each individual entry is known from the start time and the period. Since the amount of data to be transmitted can be large, the data is scaled in such a way to minimize the number of bits taken up by each entry (though the minimization is restricted to 8, 16, or 32 bits). This scaling information is sent along with the start time and period in order for the receiver to recover the original data and to obtain the time stamp of each data point. In theory, this data could be sent using countless phdNumericObservation type resources at a great cost in bandwidth!"
* valueSampledData.origin 1..
* valueSampledData.origin ^short = "Scaling intecept value and units"
* valueSampledData.origin ^definition = "The 'origin' data type contains the 'y-intercept' for the equation that relates the scaled data to the actual data. If valueSampledData.data[i] is the array of sampled scaled data, the actual data is obtained by:\r\nx[i] =valueSampledData.data[i] * valueSampledData.factor + valueSampledData.origin.value"
* valueSampledData.origin ^comment = "The data sent in the Sa-Simple-Observation-Value array is also scaled. Thus with the proper setting of the valueSampledData.origin.value and valueSampledData.factor, the data from the IEEE device can be placed into the data[i] array without modification."
* valueSampledData.origin.value 1..
* valueSampledData.origin.value ^short = "Intercept value (with implicit precision)"
* valueSampledData.origin.value ^definition = "The intercept value with the indicated precision of the data as determined by the device."
* valueSampledData.origin.system 1..
* valueSampledData.origin.system = "http://unitsofmeasure.org" (exactly)
* valueSampledData.origin.system ^short = "The UCUM coding system"
* valueSampledData.origin.system ^definition = "The identification of the UCUM coding system that provides the coded form of the unit."
* valueSampledData.origin.code 1..
* valueSampledData.origin.code ^definition = "The unit code."
* valueSampledData.origin.code ^comment = "The UCUM code translated from the MDC Unit Code attribute noting that the partition is always 4."
* valueSampledData.factor 1..
* valueSampledData.factor ^short = "The scale factor"
* valueSampledData.dimensions ^short = "Number of rtsa sample points at each time point"
* valueSampledData.dimensions ^definition = "The number of rtsa sample points at each time point. This value gives the number of data points in the valueSampledData.data[] array."
* valueSampledData.dimensions ^comment = "This value is obtained from the Sa-Specification.array-size field of the Sa-Specification attribute."
* valueSampledData.data ^definition = "A series of data points which are decimal values separated by a single space (character u20). The special values \"E\" (error), \"L\" (below detection limit) and \"U\" (above detection limit) are not used. The device does not provide such individual values. "
* valueSampledData.data ^comment = "One is strongly encouraged to use the scaling from the 11073 device as it is likely the scaling was chosen to optimize transmission. If\r\nA = Scale-and-Range-SpecificationX.lower-absolute-value as an Mder FLOAT\r\nB = Scale-and-Range-SpecificationX.upper-absolute-value as an Mder FLOAT\r\nI = Scale-and-Range-SpecificationX.lower-scaled-value as a X-bit integer\r\nJ = Scale-and-Range-SpecificationX.upper-scaled-value as a X-bit integer\r\n\r\nvalueSampledData.factor is given by (A-B)/(I-J)\r\nand\r\nvalueSampledData.origin.value = A – (A-B)*I/(I-J)\r\nand \r\nvalueSampledData.data[i] = Sa-Simple-Observed-Value.values[i]"
* referenceRange ^slicing.discriminator.type = #value
* referenceRange ^slicing.discriminator.path = "low.system"
* referenceRange ^slicing.rules = #open
* referenceRange contains scaleAndReferenceRange 0..1
* referenceRange[scaleAndReferenceRange] ^short = "Provides the scale factors as sent by the PHD device"
* referenceRange[scaleAndReferenceRange].low 1..
* referenceRange[scaleAndReferenceRange].low ^definition = "The Scale-and-Range-SpecificationX.lower-absolute-value from the RTSA metric where X is one of 8, 16, or 32."
* referenceRange[scaleAndReferenceRange].low.value 1..
* referenceRange[scaleAndReferenceRange].low.value ^definition = "This is the value from the Scale-and-Range-SpecificationX.lower-absolute-value attribute where X is 8, 16, or 32. It is the minimum value that will be reported by the sensor. The attribute reports the value as an Mder FLOAT. Note that the word 'absolute' does not mean the mathematical absolute value!"
* referenceRange[scaleAndReferenceRange].low.value ^comment = "The implicit precision in the value should always be honored. The precision is given by the Mder FLOAT."
* referenceRange[scaleAndReferenceRange].low.system 1..
* referenceRange[scaleAndReferenceRange].low.system = "http://unitsofmeasure.org" (exactly)
* referenceRange[scaleAndReferenceRange].low.system ^definition = "This value identifies the MDC coding system"
* referenceRange[scaleAndReferenceRange].low.code 1..
* referenceRange[scaleAndReferenceRange].low.code ^definition = "This unit code shall be the same as reported in the valueSampledData"
* referenceRange[scaleAndReferenceRange].high 1..
* referenceRange[scaleAndReferenceRange].high.value 1..
* referenceRange[scaleAndReferenceRange].high.value ^definition = "This is the value from the Scale-and-Range-SpecificationX.upper-absolute-value attribute where X is 8, 16, or 32. It is the maximum value that will be reported by the sensor. The attribute reports the value as an Mder FLOAT. Note that the word 'absolute' does not mean the mathematical absolute value!"
* referenceRange[scaleAndReferenceRange].high.value ^comment = "The implicit precision in the value should always be honored. The precision is given by the Mder FLOAT."
* referenceRange[scaleAndReferenceRange].high.system 1..
* referenceRange[scaleAndReferenceRange].high.system = "http://unitsofmeasure.org" (exactly)
* referenceRange[scaleAndReferenceRange].high.system ^definition = "This value identifies theUCUM coding system"
* referenceRange[scaleAndReferenceRange].high.code 1..
* referenceRange[scaleAndReferenceRange].high.code ^definition = "This unit code shall be the same as reported in the valueSampledData"


---

File: repos/HL7_SLASH_phd/input/fsh/StructureDefinition.PhdStringEnumerationObservation.fsh

Profile: PhdStringEnumerationObservation
Parent: PhdBaseObservation
Id: PhdStringEnumerationObservation
Description: "StructureDefinition for Observation Resources representing measurement data coming from a medical device where the measurement itself is an enumerated human readable string."
* ^meta.lastUpdated = "2017-12-08T05:24:29.234-05:00"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #oo
* ^url = "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdStringEnumerationObservation"
* ^status = #draft
* ^date = "2017-06-02T14:29:52.39367-04:00"
* . ^short = "Reports measurements that are enumerated human-readable strings"
* . ^definition = "The PhdStringEnumerationObservation reports PHD measurements that contain a Enum-Observed-Value-Simple-Str attribute."
* . ^comment = "This type of measurement is used when the Personal Health Device reports a measurement as an arbitrary text string. An example would be the program name of an exercise option on a piece of cardio equipment. These strings are not generically processable by machine and only for human consumption."
* value[x] 1..
* value[x] only string
* value[x] ^short = "Human readable text string"


---

File: repos/HL7_SLASH_phd/input/fsh/StructureDefinition.PhgDevice.fsh

Alias: $ASN1attribute = http://hl7.org/fhir/uv/phd/ValueSet/ASN1attribute
Alias: $Quantity11073MDC = http://hl7.org/fhir/uv/phd/ValueSet/Quantity11073MDC
Alias: $CodeableConcept11073MDC = http://hl7.org/fhir/uv/phd/ValueSet/CodeableConcept11073MDC

Profile: PhgDevice
Parent: Device
Id: PhgDevice
Description: "Base StructureDefinition for the Device Resource for a PHG"
* ^meta.lastUpdated = "2017-10-16T05:10:49.894-04:00"
* ^url = "http://hl7.org/fhir/uv/phd/StructureDefinition/PhgDevice"
* ^status = #draft
* ^date = "2017-07-07T11:39:51.3383228-04:00"
* ^purpose = "This resource describes the primary features of the Personal Health Gateway (PHG). A PHG does not have any 11073 Objects or attributes though it is required to have an IEEE EUI-64 system identifier. However, for the purposes of reporting the information about the PHG entity, it is treated as if it has an MDS with attributes. For PCHA, the quantities that are required to be reported is the EUI-64 system identifier, the time synchronization method, the manufacturer and model number (of the software, not necessarily the hardware on which the application resides), the regulation status, and the PCHA certified interfaces."
* . ^definition = "The characteristics, operational status and capabilities of the PHG."
* identifier ^slicing.discriminator[0].type = #value
* identifier ^slicing.discriminator[=].path = "type.coding.system"
* identifier ^slicing.discriminator[+].type = #value
* identifier ^slicing.discriminator[=].path = "type.coding.code"
* identifier ^slicing.rules = #open
* identifier ^short = "Information that uniquely describes the personal health device"
* identifier ^definition = "The assigned unique identification of the device that is semantically meaningful outside of the FHIR resource context. An example would be the IEEE EUI-64 System-Id or transport address. For PHDs the systemIdentifier is required and the transportAddressIdentifier is highly recommended as this is what most end users see and can obtain from the device itself or device packaging."
* identifier ^alias = "11073-10206 System id, transport address, etc."
* identifier contains
    systemIdIdentifier 1..1 and
    btmacAddressIdentifier 0..1 and
    macAddressIdentifier 0..1
* identifier[systemIdIdentifier] ^short = "System Id identifier"
* identifier[systemIdIdentifier] ^definition = "This entry contains the IEEE EUI-64. If absent (bad device) set to all zeros."
* identifier[systemIdIdentifier] ^alias = "11073-10206 System id"
* identifier[systemIdIdentifier].type 1..
* identifier[systemIdIdentifier].type.coding 1..1
* identifier[systemIdIdentifier].type.coding ^short = "Indicates this is the IEEE 11073 System Id identifier"
* identifier[systemIdIdentifier].type.coding.system 1..
* identifier[systemIdIdentifier].type.coding.system = "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaDeviceIdentifiers" (exactly)
* identifier[systemIdIdentifier].type.coding.code 1..
* identifier[systemIdIdentifier].type.coding.code = #SYSID (exactly)
* identifier[systemIdIdentifier].system 1..
* identifier[systemIdIdentifier].system = "urn:oid:1.2.840.10004.1.1.1.0.0.1.0.0.1.2680" (exactly)
* identifier[systemIdIdentifier].system ^short = "EUI-64 system identifier"
* identifier[systemIdIdentifier].system ^definition = "Identifies the system as an IEEE EUI."
* identifier[systemIdIdentifier].value 1..
* identifier[systemIdIdentifier].value ^short = "System id value from System-Id attribute"
* identifier[systemIdIdentifier].value ^definition = "The System id from the System-Id attribute as an 8-byte HEX string where each byte is separated by dashes, for example FE-ED-AB-EE-DE-AD-77-C3. "
* identifier[systemIdIdentifier].value ^comment = "The formatting is specified in the IEEE document Guidelines for 64-bit Global Identifier.\r\n\r\nTo allow the mapping of non-compliant proprietary devices that do not provide a system id, the value is set to all zeros in the same format, 00-00-00-00-00-00-00-00"
* identifier[btmacAddressIdentifier] ^short = "Bluetooth MAC Transport address identifier"
* identifier[btmacAddressIdentifier] ^definition = "This entry contains the Bluetooth MAC transport address."
* identifier[btmacAddressIdentifier] ^alias = "Bluetooth MAC Transport address"
* identifier[btmacAddressIdentifier].type 1..
* identifier[btmacAddressIdentifier].type.coding 1..1
* identifier[btmacAddressIdentifier].type.coding ^short = "Indicates this is the Bluetooth Mac address identifier"
* identifier[btmacAddressIdentifier].type.coding.system 1..
* identifier[btmacAddressIdentifier].type.coding.system = "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaDeviceIdentifiers" (exactly)
* identifier[btmacAddressIdentifier].type.coding.code 1..
* identifier[btmacAddressIdentifier].type.coding.code = #BTMAC (exactly)
* identifier[btmacAddressIdentifier].system 1..
* identifier[btmacAddressIdentifier].system = "http://hl7.org/fhir/sid/eui-48/bluetooth" (exactly)
* identifier[btmacAddressIdentifier].value 1..
* identifier[btmacAddressIdentifier].value ^definition = "The Bluetooth MAC as an EUI-48 such as 00-E5-DE-AD-77-C3. "
* identifier[btmacAddressIdentifier].value ^comment = "Transport addresses are supposed to be unique for a given device."
* identifier[macAddressIdentifier] ^short = "MAC Transport address identifier"
* identifier[macAddressIdentifier] ^definition = "This entry contains the MAC transport address."
* identifier[macAddressIdentifier] ^alias = "MAC Transport address"
* identifier[macAddressIdentifier].type 1..
* identifier[macAddressIdentifier].type.coding 1..1
* identifier[macAddressIdentifier].type.coding ^short = "Indicates this is the Mac address identifier"
* identifier[macAddressIdentifier].type.coding.system 1..
* identifier[macAddressIdentifier].type.coding.system = "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaDeviceIdentifiers" (exactly)
* identifier[macAddressIdentifier].type.coding.code 1..
* identifier[macAddressIdentifier].type.coding.code = #ETHMAC (exactly)
* identifier[macAddressIdentifier].system 1..
* identifier[macAddressIdentifier].system = "http://hl7.org/fhir/sid/eui-48/ethernet" (exactly)
* identifier[macAddressIdentifier].value 1..
* identifier[macAddressIdentifier].value ^definition = "The MAC as an EUI-48 such as 00-E5-DE-AD-77-C8. "
* identifier[macAddressIdentifier].value ^comment = "Transport addresses are supposed to be unique for a given device."
* manufacturer ^short = "Manufacturer name"
* manufacturer ^definition = "The manufacturer name."
* serialNumber ^short = "Serial number"
* modelNumber ^short = "Model number"
* type 1..
* type ^short = "Indicates the device is a PHG."
* type.coding ^slicing.discriminator[0].type = #value
* type.coding ^slicing.discriminator[=].path = "system"
* type.coding ^slicing.rules = #open
* type.coding contains MDCType 1..1
* type.coding[MDCType] ^short = "Required MDC code system entry"
* type.coding[MDCType] ^definition = "The MDC code for the PHG is a special value defined for V2 PCD-01."
* type.coding[MDCType].system 1..
* type.coding[MDCType].system = "urn:iso:std:iso:11073:10101" (exactly)
* type.coding[MDCType].system ^short = "Identifies IEEE 11073-10101 coding system"
* type.coding[MDCType].system ^definition = "This value identifies the IEEE 11073-10101 coding system"
* type.coding[MDCType].code 1..
* type.coding[MDCType].code = #531981 (exactly)
* type.coding[MDCType].code ^short = "Indicates PHG"
* type.coding[MDCType].code ^definition = "The code for a PHG indicating that this unit is a personal health device"
* type.text ^definition = "A human readable display descrbing the meaning of the code."
* type.text ^comment = "It is suggested that this element contain the reference identifier for a PHG 'MDC_MOC_VMS_MDS_AHD'."
* specialization ^short = "This element contains an entry for each supported specialization or a generic representation"
* specialization ^comment = "The significance of this entry is questionable. Clearly if the PHG encodes data from a PHD, it supports the specialization of that PHD."
* specialization.systemType ^short = "The specialization standard supported by the PHG."
* specialization.systemType.coding ^slicing.discriminator[0].type = #value
* specialization.systemType.coding ^slicing.discriminator[=].path = "system"
* specialization.systemType.coding ^slicing.rules = #open
* specialization.systemType.coding contains MDCType 1..1
* specialization.systemType.coding[MDCType] ^short = "Required MDC code system entry for specializations"
* specialization.systemType.coding[MDCType].system 1..
* specialization.systemType.coding[MDCType].system = "urn:iso:std:iso:11073:10101" (exactly)
* specialization.systemType.coding[MDCType].system ^short = "The 11073-10101 system identifier"
* specialization.systemType.coding[MDCType].code 1..
* specialization.systemType.coding[MDCType].code ^short = "The 11073-10101 specialization code. Generic indicates it supports all."
* specialization.version ^short = "The version of the specialization standard supported by the PHG"
* version 1..
* version ^short = "A firmware, hardware, software, internal protocol may be reported for a PHG. A Continua version shall be reported."
* version.type 1..
* version.type.coding ^slicing.discriminator[0].type = #value
* version.type.coding ^slicing.discriminator[=].path = "system"
* version.type.coding ^slicing.rules = #open
* version.type.coding contains MDCType 1..1
* version.type.coding[MDCType] ^short = "Required MDC code system entry"
* version.type.coding[MDCType].system 1..
* version.type.coding[MDCType].system = "urn:iso:std:iso:11073:10101" (exactly)
* version.type.coding[MDCType].system ^short = "Indicates the codes come from the MDC coding system"
* version.type.coding[MDCType].code 1..
* version.type.coding[MDCType].code ^short = "A code indicating the type of version the Device.version.value refers to."
* version.type.coding[MDCType].code ^comment = "The currently defined version codes used in this element are as shown in the Table. More than one of these versions may be indicated for the PHG. Each version reported by the PHG shall be encoded.\r\n\r\n       Description                   CODE             Reference Identifier\r\n       ------------------------------------------------------------------------------------\r\n       Hardware revision            531974            MDC_ID_PROD_SPEC_HW\r\n       Software revision            531975            MDC_ID_PROD_SPEC_SW\r\n       Firmware revision            531976            MDC_ID_PROD_SPEC_FW\r\n       Protocol                     531977            MDC_ID_PROD_SPEC_PROTOCOL\r\n       Continua version             532352            MDC_REG_CERT_DATA_CONTINUA_VERSION\r\n       The Continua version comes from the Continua Reg-Cert-Data-List attribute\r\n"
* version.value ^short = "The version"
* property 1..
* property ^slicing.discriminator[0].type = #value
* property ^slicing.discriminator[=].path = "type"
* property ^slicing.rules = #open
* property contains
    bitProperties 0..* and
    quantitiesProperty 0..* and
    codedListProperties 0..*
* property[bitProperties] ^short = "Properties reported in BITs fields"
* property[bitProperties] ^definition = "For each bit setting reported a BITs value, a bitProperties element is used."
* property[bitProperties] ^comment = "A BITs measurement is a 16 or 32-bit ASN1 BITs value where each bit means something. "
* property[bitProperties].type from $ASN1attribute (required)
* property[bitProperties].type ^short = "Tells what the BITs item is"
* property[bitProperties].type ^definition = "One of the capabilities reported in the Mds-Time-Info.mds-time-caps-state or Reg-Cert-Data-List.regulation-status field."
* property[bitProperties].type ^comment = "Only set 'event' types need be reported. Both set and cleared 'state' types need to be reported. The regulation status is as state type. All time capabilities are event types"
* property[bitProperties].type.coding 1..1
* property[bitProperties].type.coding ^short = "Required ASN1 code system entry"
* property[bitProperties].type.coding.system 1..
* property[bitProperties].type.coding.system = "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7" (exactly)
* property[bitProperties].type.coding.code 1..
* property[bitProperties].type.coding.code ^definition = "The ASN1 code made from the code and the Mder bit position"
* property[bitProperties].type.coding.code ^comment = "The MDC code for the regulation status field is 532354, and only bit 0 is defined. However, the regulated status is when the bit is cleared and the unregulated status is when the bit is set. That choice can be confusing. One could enter some fields of the time capabilities attribute if desired."
* property[bitProperties].type.text ^definition = "It is recommended to display at least the ASN1 name for the given bit meaning"
* property[bitProperties].valueQuantity ..0
* property[bitProperties].valueCode 1..1
* property[bitProperties].valueCode.coding ^slicing.discriminator[0].type = #value
* property[bitProperties].valueCode.coding ^slicing.discriminator[=].path = "system"
* property[bitProperties].valueCode.coding ^slicing.rules = #open
* property[bitProperties].valueCode.coding contains V2Binary 1..1
* property[bitProperties].valueCode.coding[V2Binary] ^short = "Required V2 Binary code system entry"
* property[bitProperties].valueCode.coding[V2Binary].system 1..
* property[bitProperties].valueCode.coding[V2Binary].system = "http://terminology.hl7.org/CodeSystem/v2-0136" (exactly)
* property[bitProperties].valueCode.coding[V2Binary].code 1..
* property[bitProperties].valueCode.coding[V2Binary].code ^definition = "If bit is set, code contains Y if cleared, N"
* property[quantitiesProperty] ^short = "The PHG properties represented by quantities such as time synchronization accuracy"
* property[quantitiesProperty] ^definition = "This element represents all those time properties that are a quantity such as the time synchronization accuracy."
* property[quantitiesProperty] ^comment = "For a PHG the synchronization accuracy should be reported if known."
* property[quantitiesProperty].type from $Quantity11073MDC (required)
* property[quantitiesProperty].type ^short = "The type of time quantity"
* property[quantitiesProperty].type.coding 1..
* property[quantitiesProperty].type.coding ^short = "Required MDC code system entry"
* property[quantitiesProperty].type.coding.system 1..
* property[quantitiesProperty].type.coding.system = "urn:iso:std:iso:11073:10101" (exactly)
* property[quantitiesProperty].type.coding.code 1..
* property[quantitiesProperty].type.coding.code ^definition = "The MDC code representing the property"
* property[quantitiesProperty].type.coding.code ^comment = "For PHG only the time sync accuracy is of interest.\r\n\r\n       Description                        CODE            Reference Identifier\r\n       ------------------------------------------------------------------------------------\r\n       Absolute clock resolution         68222            MDC_TIME_RES_ABS\r\n       Base-offset clock resolution      68226            MDC_TIME_RES_BO\r\n       Relative time resolution          68223            MDC_TIME_RES_REL\r\n       Hi Res relative time resolution   68224            MDC_TIME_RES_REL_HI_RES\r\n       Time sync accuracy                68221            MDC_TIME_SYNC_ACCURACY\r\n"
* property[quantitiesProperty].type.text ^definition = "It is recommended to display at least the MDC reference identifier for the code"
* property[quantitiesProperty].valueQuantity 1..1
* property[quantitiesProperty].valueQuantity ^definition = "The value of the reported quantity."
* property[quantitiesProperty].valueCode ..0
* property[codedListProperties] ^short = "The device properties represented by a list of codes such as the list of certified PHD or H-FS interfaces"
* property[codedListProperties] ^definition = "This element represents all those properties that are a list of codes. At the moment there is only certified PHD interfaces."
* property[codedListProperties] ^comment = "Continua certified PHDs are required to have these entries."
* property[codedListProperties].type from $CodeableConcept11073MDC (required)
* property[codedListProperties].type ^short = "What the coded list is"
* property[codedListProperties].type.coding 1..
* property[codedListProperties].type.coding ^short = "Required MDC code system entry"
* property[codedListProperties].type.coding.system 1..
* property[codedListProperties].type.coding.system = "urn:iso:std:iso:11073:10101" (exactly)
* property[codedListProperties].type.coding.code 1..
* property[codedListProperties].type.coding.code ^definition = "The MDC code representing the property"
* property[codedListProperties].type.coding.code ^comment = "Currently PHDs support the reporting of one of the coded lists as shown in the Table. More may be added in the future\r\n\r\n       Description                CODE    Reference Identifier                           Code System\r\n       -----------------------------------------------------------------------------------------------------------------------------------\r\n    Time synchronization      68220    MDC_TIME_SYNC_PROTOCOL\r       Certified PHD interfaces  532353   MDC_REG_CERT_DATA_CONTINUA_CERT_DEV_LIST       http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaPHD\r\n       Certified HFS interfaces  532355   MDC_REG_CERT_DATA_CONTINUA_AHD_CERT_DEV_LIST   http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaHFS\r\n"
* property[codedListProperties].type.text ^definition = "It is recommended to display at least the MDC reference identifier for the code"
* property[codedListProperties].valueQuantity ..0
* property[codedListProperties].valueCode 1..
* property[codedListProperties].valueCode ^short = "There shall be one valueCode entry for every item supported by the PHG in the list"
* property[codedListProperties].valueCode.coding 1..
* property[codedListProperties].valueCode.coding.system 1..
* property[codedListProperties].valueCode.coding.system ^definition = "Either the http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaPHD or http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaHFS or urn:iso:std:iso:11073:10101 code systems"
* property[codedListProperties].valueCode.coding.code 1..
* property[codedListProperties].valueCode.coding.code ^definition = "One of the Continua interface certification codes"

---

File: repos/HL7_SLASH_phd/input/fsh/ValueSet.ASN1attribute.fsh

ValueSet: ASN1attribute
Id: ASN1attribute
Title: "ANS1ToHL7 codes defined for non-measurement attributes"
Description: "ValueSet for the ANS1ToHL7 codes that are not derived from enumeration measurements."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^url = "http://hl7.org/fhir/uv/phd/ValueSet/ASN1attribute"
* ^version = "current"
* ^status = #active
* ^experimental = false
* ^date = "2018-09-17"
* ^publisher = "Health Level Seven International (Health Care Devices Work Group)"
* include codes from system ASN1ToHL7 where source = "attribute"

---

File: repos/HL7_SLASH_phd/input/fsh/ValueSet.ASN1measurement.fsh

ValueSet: ASN1measurement
Id: ASN1measurement
Title: "ANS1ToHL7 codes defined for measurement attributes"
Description: "ValueSet for the ANS1ToHL7 codes that are derived from enumeration measurements."
* ^url = "http://hl7.org/fhir/uv/phd/ValueSet/ASN1measurement"
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^date = "2018-09-17"
* ^status = #active
* ^experimental = false
* ^version = "current"
* ^publisher = "Health Level Seven International (Health Care Devices Work Group)"
* include codes from system ASN1ToHL7 where source = "measurement"


---

File: repos/HL7_SLASH_phd/input/fsh/ValueSet.CodeableConcept11073MDC.fsh

ValueSet: CodeableConcept11073MDC
Id: CodeableConcept11073MDC
Title: "CodeableConcept 11073 Attributes"
Description: "ValueSet for the ISO/IEEE 11073-10101 Nomenclatures Describing 11073-10206 or -20601 attributes whose values are codes and thus represented as Codeable Concepts."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^url = "http://hl7.org/fhir/uv/phd/ValueSet/CodeableConcept11073MDC"
* ^version = "current"
* ^status = #active
* ^experimental = false
* ^date = "2018-11-23"
* ^publisher = "Health Level Seven International (Health Care Devices Work Group)"
* Mdc#68193 "Supplemental types"
* Mdc#68220 "Time synchronization method"
* Mdc#532353 "Continua certified PHD interfaces"
* Mdc#532355 "Continua certified Health and Fitness interfaces"


---

File: repos/HL7_SLASH_phd/input/fsh/ValueSet.DeviceSystemIdentifier.fsh

ValueSet: DeviceSystemIdIdentifier
Id: DeviceSystemIdIdentifier
Title: "Device System Id Identifier"
Description: "ValueSet for the Codes describing the type of device identifier, such as a system id or Bluetooth address."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^url = "http://hl7.org/fhir/uv/phd/ValueSet/DeviceSystemIdIdentifier"
* ^version = "current"
* ^status = #active
* ^experimental = false
* ^date = "2018-11-25"
* ^publisher = "Health Level Seven International (Health Care Devices Work Group)"
* ContinuaDeviceIdentifiers#SYSID

---

File: repos/HL7_SLASH_phd/input/fsh/ValueSet.DeviceTransportIdentifiers.fsh

ValueSet: DeviceTransportIdentifiers
Id: DeviceTransportIdentifiers
Title: "Device Transport Address Identifiers"
Description: "ValueSet for the Codes describing the type of device transport identifier, such the Bluetooth address."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^url = "http://hl7.org/fhir/uv/phd/ValueSet/DeviceTransportIdentifiers"
* ^version = "current"
* ^status = #active
* ^experimental = false
* ^date = "2018-11-25"
* ^publisher = "Health Level Seven International (Health Care Devices Work Group)"
* ContinuaDeviceIdentifiers#BTMAC
* ContinuaDeviceIdentifiers#USB
* ContinuaDeviceIdentifiers#ZIGBEE

---

File: repos/HL7_SLASH_phd/input/fsh/ValueSet.DeviceTypes11073MDC.fsh

ValueSet: DeviceTypes11073MDC
Id: DeviceTypes11073MDC
Title: "Device Type Specialization IEEE 11073-10101 Nomenclature Codes"
Description: "ValueSet for the ISO/IEEE 11073-10101 Nomenclatures Describing Device specialization types such as blood pressure, pulse oximeter, thermometer, ecg, etc.. Nomenclature codes are 32-bit numbers where the upper 16 bits represent the partition and the lower 16 bits represent the term code. Most of the codes included in this value set are from partition infra which has value 8. THe 32-bit code for the pulse oximeter, which has term code 4100 in partition infra, is given by 524288 + 4100 = 528388. This value set will grow as new specializations are defined. The display value consists of the nomenclature code's reference identifier. Devices exchange the numerical codes in the IEEE 11073 communication standards, not reference identifiers, but the reference identifiers are often used where human readability are more important than efficiency or bandwidth. However, only the numerical codes are guaranteed to be unique."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^url = "http://hl7.org/fhir/uv/phd/ValueSet/DeviceTypes11073MDC"
* ^version = "current"
* ^status = #active
* ^experimental = false
* ^date = "2021-09-25"
* ^publisher = "Health Level Seven International (Health Care Devices Work Group)"
* Mdc#528388 "MDC_DEV_SPEC_PROFILE_PULS_OXIM: Pulse oximeter"
* Mdc#528390 "MDC_DEV_SPEC_PROFILE_MIN_ECG: Electrocardiogram (ECG)"
* Mdc#528391 "MDC_DEV_SPEC_PROFILE_BP: Non-invasive Blood Pressure monitor"
* Mdc#528392 "MDC_DEV_SPEC_PROFILE_TEMP : Thermometer"
* Mdc#528397 "MDC_DEV_SPEC_PROFILE_RESP_RATE : Respiration rate monitor"
* Mdc#528399 "MDC_DEV_SPEC_PROFILE_SCALE : Weight scale"
* Mdc#528401 "MDC_DEV_SPEC_PROFILE_GLUCOSE: Glucose monitor"
* Mdc#528402 "MDC_DEV_SPEC_PROFILE_COAG: Coagulation meter"
* Mdc#528403 "MDC_DEV_SPEC_PROFILE_INSULIN_PUMP: Insulin pump"
* Mdc#528404 "MDC_DEV_SPEC_PROFILE_BCA: Body composition analyzer"
* Mdc#528405 "MDC_DEV_SPEC_PROFILE_BCA: Peak Flow meter"
* Mdc#528406 "MDC_DEV_SPEC_PROFILE_URINE: Urine analyzer"
* Mdc#528408 "MDC_DEV_SPEC_PROFILE_SABTE: Sleep Apnea and Breathing Therapy Equipment"
* Mdc#528409 "MDC_DEV_SPEC_PROFILE_CGM: Continuous Glucose Monitor"
* Mdc#528412 "MDC_DEV_SPEC_PROFILE_PSM: Power Status Monitor"
* Mdc#528413 "MDC_DEV_SPEC_PROFILE_SPIRO: Spirometer"
* Mdc#528425 "MDC_DEV_SPEC_PROFILE_HF_CARDIO: Cardiovascular exercise equipment"
* Mdc#528426 "MDC_DEV_SPEC_PROFILE_HF_STRENGH: Strength and fitness equipment"
* Mdc#528455 "MDC_DEV_SPEC_PROFILE_AI_ACTIVITY_HUB: Independent living hub"
* Mdc#528456 "MDC_DEV_SPEC_PROFILE_AI_NED_MINDER: Medication Monitor"
* Mdc#528457 "MDC_DEV_SPEC_PROFILE_GENERIC: Device following the IEEE 11073-10206 standard but no specific specialization"
* Mdc#528484 "MDC_DEV_SUB_SPEC_PROFILE_STEP_COUNTER: Step counter"
* Mdc#528501 "MDC_DEV_SUB_SPEC_PROFILE_FALL_SENSOR: Fall sensor"
* Mdc#528502 "MDC_DEV_SUB_SPEC_PROFILE_PERS_SENSOR: Personal sensor"
* Mdc#528503 "MDC_DEV_SUB_SPEC_PROFILE_SMOKE_SENSOR: Smoke sensor"
* Mdc#528504 "MDC_DEV_SUB_SPEC_PROFILE_CO_SENSOR: Carbon Monoxide sensor"
* Mdc#528505 "MDC_DEV_SUB_SPEC_PROFILE_WATER_SENSOR: Water sensor"
* Mdc#528506 "MDC_DEV_SUB_SPEC_PROFILE_GAS_SENSOR: Gas sensor"
* Mdc#528507 "MDC_DEV_SUB_SPEC_PROFILE_MOTION_SENSOR: Motion sensor"
* Mdc#528508 "MDC_DEV_SUB_SPEC_PROFILE_PROPEXIT_SENSOR: Property Exit sensor"
* Mdc#528509 "MDC_DEV_SUB_SPEC_PROFILE_ENURESIS_SENSOR: Enuresis sensor"
* Mdc#528510 "MDC_DEV_SUB_SPEC_PROFILE_CONTACTCLOSURE_SENSOR: Contact Closure sensor"
* Mdc#528511 "MDC_DEV_SUB_SPEC_PROFILE_USAGE_SENSOR: Usage sensor"
* Mdc#528512 "MDC_DEV_SUB_SPEC_PROFILE_SWITCH_SENSOR: Switch sensor"
* Mdc#528513 "MDC_DEV_SUB_SPEC_PROFILE_DOSAGE_SENSOR: Dosage sensor"
* Mdc#528514 "MDC_DEV_SUB_SPEC_PROFILE_TEMP_SENSOR: Temperature sensor"
* Mdc#528524 "MDC_DEV_SUB_SPEC_PROFILE_ECG: ECG supporting waveforms"
* Mdc#528525 "MDC_DEV_SUB_SPEC_PROFILE_HR: ECG supporting just heart rate"
* Mdc#528532 "MDC_DEV_SUB_SPEC_PROFILE_CPAP: Specialized SABTE device providing CPAP (continuous positive airway pressure) manually set"
* Mdc#528533 "MDC_DEV_SUB_SPEC_PROFILE_CPAP_AUTO: Specialized SABTE device providing CPAP (continuous positive airway pressure) automatically"
* Mdc#528534 "MDC_DEV_SUB_SPEC_PROFILE_BPAP: Specialized SABTE device providing BPAP (Bi-level positive airway pressure) manually set"
* Mdc#528535 "MDC_DEV_SUB_SPEC_PROFILE_BPAP_AUTO: Specialized SABTE device providing BPAP (Bi-level positive airway pressure) automatically"
* Mdc#528536 "MDC_DEV_SUB_SPEC_PROFILE_ACSV: Specialized SABTE device providing ACSV (Anti-cyclic Servo Ventilation)"


---

File: repos/HL7_SLASH_phd/input/fsh/ValueSet.MDCnotObject.fsh

ValueSet: MDCnotObject
Id: MDCnotObject
Title: "11073 MDC Non-Object codes"
Description: "ValueSet for the ISO/IEEE 11073-10101 Nomenclature excluding Object partition."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^url = "http://hl7.org/fhir/uv/phd/ValueSet/MDCnotObject"
* ^version = "current"
* ^status = #active
* ^experimental = false
* ^publisher = "Health Level Seven International (Health Care Devices Work Group)"
* include codes from system Mdc where partition = "2,3,4,5,7,8,127,128,258"


---

File: repos/HL7_SLASH_phd/input/fsh/ValueSet.MDCObject.fsh

ValueSet: MDCobject
Id: MDCobject
Title: "IEEE 11073 MDC Object infrastructure and Device nomenclature"
Description: "ValueSet for the ISO/IEEE 11073-10101 Nomenclature filtered by Object partition."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^url = "http://hl7.org/fhir/uv/phd/ValueSet/MDCobject"
* ^version = "current"
* ^status = #active
* ^experimental = false
* ^publisher = "Health Level Seven International (Health Care Devices Work Group)"
* include codes from system Mdc where partition = "1"


---

File: repos/HL7_SLASH_phd/input/fsh/ValueSet.Quantity11073MDC.fsh

ValueSet: Quantity11073MDC
Id: Quantity11073MDC
Title: "Quantity 11073 Attributes"
Description: "ValueSet for the ISO/IEEE 11073-10101 Nomenclatures Describing 11073-10206 or -20601 attributes whose values are Quantities."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^url = "http://hl7.org/fhir/uv/phd/ValueSet/Quantity11073MDC"
* ^version = "current"
* ^status = #active
* ^experimental = false
* ^date = "2018-11-23"
* ^publisher = "Health Level Seven International (Health Care Devices Work Group)"
* Mdc#68073 "High-resolution relative time"
* Mdc#67914 "Accuracy of Measurement"
* Mdc#68222 "Resolution of absolute time clock"
* Mdc#68226 "Resolution of Base offset time clock"
* Mdc#68223 "Resolution of relative time clock"
* Mdc#68224 "Resolution of high-resolution relative time clock"
* Mdc#68221 "Time synchronization accuracy"
* Mdc#68229 "Tick Resolution"


---

File: repos/HL7_SLASH_phd/input/fsh/ValueSet.Range11073MDC.fsh

ValueSet: Range11073MDC
Id: Range11073MDC
Title: "Range 11073 Attributes"
Description: "ValueSet for the ISO/IEEE 11073-10101 Nomenclatures Describing 11073-10206 or -20601 attributes whose values are Ranges."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^url = "http://hl7.org/fhir/uv/phd/ValueSet/Range11073MDC"
* ^version = "current"
* ^status = #active
* ^experimental = false
* ^date = "2018-11-23"
* ^publisher = "Health Level Seven International (Health Care Devices Work Group)"
* Mdc#67892 "Current limits"
* Mdc#68236 "Measurement confidence 95% range"


---

File: repos/HL7_SLASH_phd/input/fsh/ValueSet.String11073MDC.fsh

ValueSet: String11073MDC
Id: String11073MDC
Title: "String 11073 Attributes"
Description: "ValueSet for the ISO/IEEE 11073-10101 Nomenclatures Describing 11073-10206 or -20601 attributes whose values are Strings."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^url = "http://hl7.org/fhir/uv/phd/ValueSet/String11073MDC"
* ^version = "current"
* ^status = #active
* ^experimental = false
* ^date = "2018-11-23"
* ^publisher = "Health Level Seven International (Health Care Devices Work Group)"
* Mdc#68104 "Alert options text message"
* Mdc#68232 "Threshold met notification text message"


---

File: repos/HL7_SLASH_phd/input/images-source/acom-observations.plantuml

@startuml acom-observations
'!theme mono

 
class Observation <<ACOM Base Class>> {
type : Term
timeStamp: Time[0..1]
derivedFrom : reference[0..*]
hasMember : reference[0..*]
id: unique reference value
...
--
The base class for observations in ACOM.
}

class NumericObservation {
unit : Term
value : FLOAT
}

class DiscreteObservation {}

class StringObservation {
'length : uint16
'value: utf8s
value: string
}

class SampleArrayObservation {
unitCode : Term
scalingFactor : FLOAT
offset : FLOAT
samplePeriod : FLOAT -- seconds
'numberOfSamplesPerPeriod : uint8
'bytesPerSample : uint8
'numberOfSamples : uint32
scaledSample : int[*]
}

class CompoundObservation {
'numberOfComponents : uint8
value: ObservationComponent[*]
}

'class TLVEncodedObservation {
'numberOfTLVAttributes : uint8
'value: TLVAttribute[*]
'}


Observation <|-- NumericObservation 
Observation <|-- DiscreteObservation
Observation <|--- SampleArrayObservation
Observation <|-- CompoundObservation
'Observation <|--- TLVEncodedObservation
Observation <|-- StringObservation


Class SingleEventObservation {
value: Term
}

DiscreteObservation <|-- SingleEventObservation

Class MultipleEventObservation {
value: Term[*]
}

DiscreteObservation  <|--- MultipleEventObservation

Class MultipleBooleanStateObservation {
value: BooleanState[*]
}

DiscreteObservation  <|--- MultipleBooleanStateObservation

Struct ObservationComponent {
componentType: Term
}

CompoundObservation *-- ObservationComponent


Struct NumericComponent {
unit: Term
value: FLOAT 
}

ObservationComponent <|-- NumericComponent


Struct DiscreteComponent {
value: Term[*] 
}

ObservationComponent <|-- DiscreteComponent

Struct StringComponent {
value: string
}

ObservationComponent <|--- StringComponent

Struct SampleArrayComponent {
unitCode : Term
scalingFactor : FLOAT
offset : FLOAT
samplePeriod : FLOAT -- seconds
scaledSample : int[*]
}

ObservationComponent <|--- SampleArrayComponent


@enduml

---

File: repos/HL7_SLASH_phd/input/intro-notes/Bundle-bundle-example-1-intro.md

This example is a full transaction bundle where the Patient and Device resources are using a conditional create transaction. In this manner the PHG specifies a temporary id and uses that temporary id in the bundle where it needs to without waiting for a server response. The PHG also needs to specify a sufficiently selective criterion identifying those resources that only one or none should be found on the server. When a server response is obtained, the actual logical ids can be used in Observations. Subsequent bundles can be sent without the Patient and Device resources since they have already been uploaded and can be referenced by their ids.

Fixme: The udiCarrier element present in the example was constructed from information sent by the device to illustrate what a UDI might look like; an actual UDI was not sent by protocol from the device. 

---

File: repos/HL7_SLASH_phd/input/intro-notes/Observation-bits-observation-intro.md

This observation indicates one or more issues the PHD had attempting to take a measurement, for example, finger poorly positioned, cannot get a sufficiently strong signal, etc.

This example comes from a pulse oximeter when the sensor mechanism is having a set of difficulties. The set of difficulties are reported by setting a bit respresenting the issue in an integer. Since HL7 does not support this kind of measurement, the bit settings are converted to codes for FHIR using the ASN1ToHL7 code system. In this case the codes have value 150604.x where x is the Mder bit representing a given condition and '150604' is the MDC code describing the measurement. '150604' is a device and sensor status measurement. In this case, 5 of the 16 possible flags are set. All of the bits in this measurement are events thus they are only *required* to be reported when set (values are "Y" in FHIR).

The source of the ASN1 names comes from the IEEE 11073-11404 (pulse Oximeter) specialization standard where this measurement is described in detail.

The PHD does not send time stamps with its measurements therefore the time stamp is the time of reception by the PHG and there is no coincident time stamp Observation.

Note there is no logical id in this resource as this resource is being uploaded to the server in a create operation. The server will create the logical id and return it to the sender in the response. There is also no reference to the coincident time stamp since this observation is generated by a device that is streaming data and reporting no time stamp. The time stamp is taken to be the time of reception by the gateway.

---

File: repos/HL7_SLASH_phd/input/intro-notes/Observation-coin-example-1-intro.md

This example shows a standard coincident time stamp where the PHG has superior time synchronization to the PHD. There is no identifier element in this Observation as Coincident Time Stamps are never duplicates and are always 'created'.

---

File: repos/HL7_SLASH_phd/input/intro-notes/Observation-coin-example-timefault-intro.md

This example shows a coincident time stamp in the case where the PHD has a time fault. Note that only the current time of the PHG is reported as the current time of the PHD could not be obtained. In place of the current time of the PHD one has a data absent reason stating the current time is unknown. The time fault tells the reader of the received data that the time stamp of the measurement cannot be trusted. The PHD reported a time stamp but there was no means to check the validity of that time stamp.


---

File: repos/HL7_SLASH_phd/input/intro-notes/Observation-compound-numeric-observation-intro.md

This example shows a compound (numeric) observation. The most common type of compound observation is the Blood Pressure. The systolic, diastolic, and mean values are treated as parts of the same observation. The compound elements are reported in Observation.component elements and that there is **no** value[x] in the 'primary' observation. In addition, that the 'mean' component is not considered as one of FHIR's vital signs and no LOINC code is present for that component code.

There is no logical id in this resource as this resource is being uploaded to the server in a conditional create operation. The server will use the identifier to check that no other Observation resource exists on the server with the same identifier. If there is not such resource present, the server will create the logical id and return it to the sender in the response. 

Note that the referenced resources - Patient, PHG, PHD, and coincident timestamp - are assumed to be present on the server already.

---

File: repos/HL7_SLASH_phd/input/intro-notes/Observation-meal-context-observation-intro.md

This example shows a coded enumeration Observation. Coded enumerations are used when the measurement itself is a code. In this case, the measurement is the meal context associated with a glucose measurement. There is a limited set of possible entries for this measurement, this one indicating after lunch or dinner. In the future, this measurement will contain a source-handle reference pointing to the measurement containing the glucose concentration. For now, the associated Observation has to be determined by time stamp and the PHD and patient references.

Note there is no logical id in this resource as this resource is being uploaded to the server in a conditional create operation. The server will use the identifier to check that no other Observation resource exists on the server with the same identfier. If there is not such resource present, the server will create the logical id and return it to the sender in the response.

---

File: repos/HL7_SLASH_phd/input/intro-notes/Observation-numeric-observation-not-a-number-intro.md

This is an example of a device reporting a NaN (not a number). The important aspect of this case is that the value element is absent and replaced by a dataAbsentReason element.

There is no logical id in this resource as this resource is being uploaded to the server in a create operation. The server will create the logical id and return it to the sender in the response. There is also no reference to the coincident time stamp since this observation is generated by a device that is streaming data and reporting no time stamp. The time stamp is taken to be the time of reception by the gateway.



---

File: repos/HL7_SLASH_phd/input/intro-notes/Observation-numeric-spotnumeric-intro.md

This example shows a basic numeric observation. It does have a single component element as the measurement also contained a Supplemental Information attribute indicating the measurement is a SPOT (stable average).

Note there is no logical id in this resource as this resource is being uploaded to the server in a conditional create operation. The server will use the identifier to check that no other Observation resource exists on the server with the same identifier. If there is not such resource present, the server will create the logical id and return it to the sender in the response. Pulse oximeters reporting a SPOT measurement have a time stamp thus there is a reference to the coincident time stamp.

The referenced resources are assumed to have been uploaded to the server before - Patient, PHD, PHG and coincident timestamp.

---

File: repos/HL7_SLASH_phd/input/intro-notes/Observation-string-observation-1-intro.md

This example is an observation coming from a glucose meter and explains why a measurement failed.  There is no such measurement type defined in the Glucose specialization so this manufacturer used a private attribute. 

Note there is no logical id in this resource as this resource is being uploaded to the server in a create operation. The server will create the logical id and return it to the sender in the response.

---

File: repos/HL7_SLASH_phd/input/intro-notes/Patient-patientExample-1-intro.md

This example shows a PHD Patient resource including the optional patient name entry. This particular resource was uploaded using a update-create transaction and thus the logical id is specified.


---

File: repos/HL7_SLASH_phd/input/intro-notes/StructureDefinition-PhdBaseObservation-intro.md


The PHD Base Observation profile contains the elements that are common to all PHD Observation profiles describing measurements. These element are: 
 - gatewayDevice extension: the PHG responsible for generating the upload
 - code: what the measurement is, 
 - subject: the patient this measurement refers to,
 - effective[x]: the time stamp and perhaps duration of the measurement,
 - device: the PHD taking the measurement, 
 - derivedFrom: references to any coincident time stamp and/or refenced other observations, and 
 - components: contains any additional measurement descriptions (Supplemental Information and relative time stamps)
 - category: a fixed value identifying observations generated by PHDs
 - measurement status
- performer[ ]: optional, when the patient is known to be the performer this may refer to the patient



---

File: repos/HL7_SLASH_phd/input/intro-notes/StructureDefinition-PhdBaseObservation-notes.md

The fololwing sections give more details on the data elements in a PHDBaseObservation resource.

### Gateway Device extension
HL7 has defined an extension for the Observation resource to reference a gateway device. This extension is used to reference the Device resource representing the Personal Health Gateway (PHG) device.

### Observation Identifier - prevention of data duplication
The *PHD Observation Identifier* is defined to prevent data duplication. It can be used as the selection criterium in the conditional create when uploading observations. 

Ideally the PHG will implement a duplication detection mechanism and filter out any observations that have already been uploaded. One possible mechanism is to record the latest time stamp of any observation received during a connection. Then for a given device and patient and upload destination, on a subsequent connection the PHG can filter out any observations with a time stamp earlier than the recorded latest time stamp of the previous connection. The latest time stamp is then updated given the information received during the current connection. This filter not only saves the server from handling the conditional update transaction but saves bandwidth and upload costs.

Additionally a globally unique identifier can be used in combination with a conditional create operation to prevent duplication of observations on the server.
The identifier is a concatenated string of elements that contain sufficient information to uniquely identify the observation. The identifier is the concatenation of the device identifier, patient identifier, the ***PHD*** timestamp of the observation, the observation type code, the measurement duration if present, and the list of Supplemental-Types codes if any. Each entry is separated by a dash (-). It is important to use the time stamp of the PHD and not the potentially modified time stamp placed in the Observation.effective[x] element. Two PHGs may have slightly different times which would allow an undesired duplicate observation to appear.

|Entry|value|Additional information|
|-
|device|"PHD Device.identifier.value"|This value is the PHD IEEE EUI-64 system identifier|
|patient|"Patient.identifier.value-Patient.identifier.system" or<br/>provided logical id|The dashes are part of the identifier. <br/>When the service provider gives the PHG a pre-determined patient logical id the PHG creates no Patient resource and has no patient information. In that special case the provided logical id is used|
|type|"Observation.code.coding.code"|See [Obtaining the Observation.code](ObtainObservationCode.html)|
|reported PHD timestamp|"timestamp"|See [Generating the PHD Reported Time Stamp](GeneratingtheReportedTimeStampIdentifier.html)|
|duration|"duration"|See [Generating the PHD Reported Time Stamp](GeneratingtheReportedTimeStampIdentifier.html)|
|Supplemental Information|"Supplemental-Types.*N*-"|A sequence of 32-bit MDC codes separated by a dash|

The final identifier is made by concatenating the entries above as follows:
 - "device-patient-type-value-timestamp-duration-Supplemental Information"

All PHGs compliant to this IG should implement this identifier in the same manner. Compliance assures that even if the patient uploads the same observation to the same server from a different PHG, a duplicate of the observation will not be generated on the server. This is important since some PHDs do not provide a means of deleting stored and uploaded observations and will upload old observations again with each new addition of a observation as much as device storage allows.

### Obtaining the Type of observation
One obtains the IEEE 11073-10101 observation type for the code element in the same manner for all metric observations. See the section [Obtaining the Observation.code](ObtainObservationCode.html) for the details of this mapping.

### Subject
The subject element points to the PhdPatient resource using the logical id of the Patient resource, for example 'Patient/123546'.

#### Performer
In situations where the gateway knows that the patinet is the person performing the measurement, a Observation.performer[] element can also point to the PhdPatient resource. However, in most situations this is unknown and the performer is not filled in. And for coincident timestamp observations, the performer should not be provided.

### Time Stamp: effective[x]
PHDs report time stamps in various methods and may not report time stamps at all. The PHG will include a time stamp in every observation that is uploaded using a conversion as needed based on the time stamp data received from the PHD. The time stamp types and corresponding PHG conversions are summarized below:

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

IEEE 11073-10206 timestamps represent a UTC time or a local time, that is synchronised with an external time source or not and can come with or without a TZ/DST offset or the time stamp represents a Tick Counter value. These time stamps can come from the current timeline of the PHD or not. In order to map a timestamp for the PHD's current timeline, the PHG needs the PHD's current time. 

Observations with a timestamp that is not from the current timeline of the PHD and that are not from a timeline synchronised with an external time source should be thrown away since there is no way to give them a correct timestamp.

The PHG can work with the assumption that the PHD and the PHG are always in the same time zone. This allows the PHG to set the offset of the timestamp to its offset.

For IEEE 11073-10206 time stamps the following table can be used: 

| Time type    | Current | Synced | Offset | Recommended Mapping                                                     |
| ------------ | ------- | ------ | ------ | ----------------------------------------------------------------------- |
| UTC          | Yes     | Yes    | Yes    | Keep as is with optional correction to PHG timeline, keep offset as is  |
| UTC          | Yes     | Yes    | No     | Keep as is , with optional correction and optionally include PHG offset |
| UTC          | Yes     | No     | Yes    | Map to PHG timeline, including PHG offset                               |
| UTC          | Yes     | No     | No     | Map to PHG UTC timeline, optionally include PHG offset                  |
| UTC          | No      | Yes    | Yes    | Keep as is                                                              |
| UTC          | No      | Yes    | No     | Keep as is, optionally include PHG offset                               |
| UTC          | No      | No     | Yes    | Throw away                                                              |
| UTC          | No      | No     | No     | Throw away                                                              |
| Local        | Yes     | Yes    | Yes    | Map to UTC+offset with optional correction                              |
| Local        | Yes     | Yes    | No     | Map to UTC+offset, including PHG offset                                 |
| Local        | Yes     | No     | Yes    | Map to PHG timeline, including PHG offset                               |
| Local        | Yes     | No     | No     | Map to PHG timeline, including PHG offset                               |
| Local        | No      | Yes    | Yes    | Map to UTC+offset                                                       |
| Local        | No      | Yes    | No     | Map to UTC, optionally include PHG offset                                            |
| Local        | No      | No     | Yes    | Throw away                                                              |
| Local        | No      | No     | No     | Throw away                                                              |
| Tick counter | Yes     | n.a.   | n.a.   | Map to PHG timeline, including PHG offset                               |
| Tick counter | No      | n.a.   | n.a.   | Throw away                                                              |

The PHG maps the 'converted' time stamp to either an Observation.effectiveDateTime element or an Observation.effectivePeriod element. The second situation occurs when the metric observation includes a Measurement-Duration (duration) attribute. Then the time stamp attribute gives the start of the period and the end of the period is obtained by adding the Measurement-Duration value to it. If no time stamp is provided, the PHG, using the time of reception of the observation as its time stamp must then do the reverse; the time of reception is the end time and the start time is given by subtracting the Measurement-Duration value from it.
When the PHG modifies an Observation's time stamp as received from the PHD it shall also generate a Coincident Timestamp observation that records how the Observation.effective[x] element is generated.

### Device
The Observation.device element is a reference to the Device resource representing the PHD that generated the observation.

### derivedFrom: Coincident time stamp and related Observations
This element references Observation resources that are in some manner related to this Observation resource. In the PHD use case, this situation occurs whenever the observation reported by the PHD has a time stamp and/or the observation contains a derivedFrom attribute referencing a related Observation.

### hasMember: related Observations
This element is used when the PHD Observation reports a group of related observations.

In GHS an Observation can have an Is Member Of attribute that references a group observation. When uploading to a FHIR server the gateway should report the group observation with a hasMember reference to all member Observations.

In GHS the sensor device related Observations are identified using a 32-bit Observation Id that is unique in the set of observations transferred during a connection.  When

Related observations are best uploaded in a single FHIR Bundle with logical ids assigned


#### Time Stamp case
When the observation contains a time stamp, there will be a Coincident Time Stamp Observation defining the details of how the Observation.effective[x] element is generated.

#### Source-Handle-Reference case (concept from IEEE 11073-20601 - deprecated)
A Source-Handle-Reference attribute points to a previously reported observation that is important to this observation. By previously it is meant that the observation is reported prior to the current observation but in the same connection. If multiple such observations have been received, the correct one is that which is most recently received. As an example, the cardiovascular specialization defines a session observation defining some type of exercise period, such as a run. All observations taken during that run have a source handle reference attribute pointing to the session observation. Since Source-Handle-Reference attributes use IEEE 11073 Object handle values and not Logical resource ids to point to observations, the PHG will need to keep track of the Observation resources created during a connection to identify the correct Observation resource, and thus logical id, the Source-Handle-Reference attribute points to. The latest version of the IEEE 11073-20601 standard also supports a Source-Handle-Reference-List containing a list of handles so there can be more than one entry generated due to these attributes. The references are placed in a derivedFrom element.

This mapping is semantically incorrect. In FHIR the session observation resource should have "hasMember" references to all observations that are part of the session.

### Category
The category element identifies the observation as being generated by a PHD. This can be used in searches and distinguishes such observations from observations collected using clinical equipment or collected in a clinical context. PHGs shall include a category element with a fixed coding as specified by the profile.

Note that for vital signs observations there also should be a category element as defined by the [Vital Signs profile](https://hl7.org/fhir/R4/observation-vitalsigns.html).

### Supplemental Information - Components
Component elements are used whenever the observation contains additional information attributes that further describe the observation. PHD observations can include Supplemental-Information that can be mapped to one or more FHIR Observation components.

The Supplemental Information attribute contains a list of one or more MDC codes that describe some property of the observation. There will be one component element for each entry in the list. For example, the code MDC_MODALITY_SPOT used in the pulse oximeter specialization indicates that the observation reported is a stable average. In contrast there is MDC_MODALITY_FAST and MDC_MODALITY_SLOW. The component elements are as populated as follows:

| Observation.component element      | entry                            | Additional Information                                                                           |
| ---------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| code.coding.code                   | 68193                            | This is the MDC code for the Supplemental Types attribute                                        |
| code.coding.system                 | urn:iso:std:iso:11073:10101      | Indicates the MDC coding system                                                                  |
| code.text                          | optional                         | Should contain the reference id MDC_ATTR_SUPPLEMENTAL_TYPES along with any other additional text |
| valueCodeableConcept.coding.system | urn:iso:std:iso:11073:10101      | Indicates the MDC coding system                                                                  |
| valueCodeableConcept.coding.code   | the MDC code as a decimal string |                                                                                                  |
| valueCodeableConcept.text          | optional                         | Should contain the reference id for the reported code along with any other additional text       |


### Measurement Status
The Measurement Status element from IEEE 11073-10206 is used to report errors or other special conditions. The element reports one or more of the following conditions:

 - invalid
 - questionable
 - not-available
 - calibrating
 - test-data
 - early-estimate
 - threshold-error
 - annunciation-inhibited
 - setting
 - manually-entered

The Bluetooth SIG GHS specification adds two more:

 - Threshold error
 - Thresholding disabled  


It is possible to have multiple conditions simultaneously, but some combinations of conditions do not make sense and should not occur.

To report these cases in FHIR requires the use of three different elements. The interpretation codes are taken from the measurement status value set defined in the [Point of Care implementation guide](https://build.fhir.org/ig/HL7/uv-pocd/index.html). The mapping is shown in the following table:

| Measurement Status     | FHIR® Observation Resource Data Element                                         | Further Handling Options                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Invalid                | dataAbsentReason = error – from CS1 <br/> status = entered-in-error – from CS2        | A device or gateway could decide not to upload invalid observations and could report an error by other means.               |
| Questionable           | interpretation = questionable – from CS3                                        | \-                                                                                                                          |
| Not-available          | dataAbsentReason = not-performed – from CS1                                     | A device or gateway could decide not to upload observations with no value and could report an error by other means.         |
| Calibrating            | interpretation = calibration-ongoing – from CS3                                 | \-                                                                                                                          |
| Test-data              | meta.security = HTEST – from CS4                                                | Test data should in most cases not be uploaded to a FHIR® server, except for testing purposes.                              |
| Early-estimate         | interpretation = early-indication – from CS3 <br/> status = preliminary – from CS2 | \-                                                                                                                          |
| Annunciation-inhibited | TBD                                                                             |                                                                                                                             |
| Manually-entered       | \-                                                                              | Add a note to the Observation resource that it was manually entered.                                                        |
| Setting                | \-                                                                              | For device settings, the Observation resource should reference the Device resource as a subject and not a Patient resource. |
| Threshold error        | interpretation = in-alarm – from CS3                                            | Ignore or add a note to the Observation resource that it is outside its boundaries.                                         |
| Thresholding disabled  | interpretation = alarm-inhibited – from CS3                                     | Ignore or add a note to the Observation resource that its boundaries are not checked.                                       |

CS1: [Data Absent Reason CodeSystem](http://terminology.hl7.org/CodeSystem/data-absent-reason)
CS2: [Observation Status CodeSystem](http://hl7.org/fhir/observation-status)
CS3: [CodeSystem: Measurement Status Codes CodeSystem](https://build.fhir.org/ig/HL7/uv-pocd/CodeSystem-measurement-status.html)
CS4: [CodeSystem: Act Reason CodeSystem](http://terminology.hl7.org/CodeSystem/v3-ActReason)




---

File: repos/HL7_SLASH_phd/input/intro-notes/StructureDefinition-PhdBITsEnumerationObservation-intro.md

The BITs Enumeration Observation Profile is used when the PHD Observation reports a bitstring where each bit represents an event or a state. PHDs typically send this kind of observation when more than one event or state can occur simultaneously. If the event or states are mutually exclusive, a [Coded Enumeration Observation Profile](StructureDefinition-PhdCodedEnumerationObservation.html) is typically used instead.

Each bit in the bitstring may represent some state or event. The most common use of this type of observation is for reporting device status events that influence the observation. It is also used extensively in the Independent Living specialization to report states such as 'door open', 'door closed' or 'patient in room', 'patient out of room', etc. This type observation is generally used when there is the potential for more than one event or state to be set at the same time.

In IEEE 11073-10206 the information model only supports states as bitstrings. In the Generic Health Sensor Service Specification both states and events can be modelled using bitstrings.  

---

File: repos/HL7_SLASH_phd/input/intro-notes/StructureDefinition-PhdBITsEnumerationObservation-notes.md

The fololwing sections give more details on the mapping of BITS to a FHIR Observation resource.

### Mapping BITs Enumerations to FHIR
FHIR has no data type that corresponds to this kind of measurement. Consequently we developed a code system which maps the BITs measurement to a set of codes. The details of the mapping and how these codes are generated from data received from the PHD are given in [ASN1 BITS Code System](ASN1BITsCodeSystem.html). These codes are reported in the component element; one component per reported bit setting. Thus similar to the compound numerical measurement, there is no Observation.value[x] element. There may still be an Observation.dataAbsentReason element if a measurement status indicates a measurement failure in which case no component elements representing the BITs setting are reported. 

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

| IEEE 11073-10206 Observation Attribute | FHIR coding |
|--|--|
| state: Boolean[0..N]  | for *i*=0..N <br/> Observation.component[*i*].code.coding.code=”Type.*i*“  <br/> Observation.component[*i*].code.coding.system=”http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7”  <br/> Observation.component[*i*].valueCodableConcept.coding.code=”Y"\|"N” if bit *i* is set\|cleared  <br/> Observation.component[*i*].valueCodableConcept.coding.system=”http://terminology.hl7.org/CodeSystem/v2-0136”|

When mapping Bluetooth GHS bitstring Observation values only supported bits are reported. For bits of type 'event' only set bits need to be reported. If of type 'state' both set and cleared states need to be reported. This means that some bits can be skipped and that the index of the FHIR component *j* can be smaller than the index *i* of the bit in the GHS bitstring.

| Bluetooth GHS Observation Attribute | FHIR coding |
|--|--|
| state: Boolean[0..N]  | for *i*=0..N <br/> if supported[*i*] <br/> if isState[*i*] or isSet[*i*] <br/> &nbsp; Observation.component[*j*].code.coding.code=”Type.*i*“  <br/> &nbsp; Observation.component[*j*].code.coding.system=”http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7”  <br/> &nbsp; Observation.component[*j*].valueCodableConcept.coding.code=”Y"\|"N” if bit *i* is set\|cleared  <br/> &nbsp; Observation.component[*j*].valueCodableConcept.coding.system=”http://terminology.hl7.org/CodeSystem/v2-0136” <br/> else *skip bit i* |

Below is an example of one Observation.component element containing one of the perhaps several bit settings from a pulse oximeter device and sensor status measurement:
<pre>
component": [
    {
        "code": {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7",
                    "code": "150604.2"
                }
            ],
            "text": "sensor-displaced"
        },
        "valueCodeableConcept": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0136",
                    "code": "Y"
                }
            ],
            "text": "Sensor is incorrectly placed on user"
        }
}
</pre>
There would be one such component element for every bit setting to be reported. If one examines the ASN1ToHL7 code system [here](ASN1BITsCodeSystem.html) one will see that the code 150604.2 means "Sensor is incorrectly placed on user".

#### Conditional Create Identifier Generation
For a general description of the PHD Observation Identifier see the "PHD Observation Identifier" section in [PHD Base Observation Profile](StructureDefinition-PhdBaseObservation.html). The table below lists the items that make up the identifier.

|Entry|value|Additional information|
|-
|device|"PHD Device.identifier.value"|This value is the PHD IEEE EUI-64 system identifier|
|patient|"Patient.identifier.value-Patient.identifier.system" or<br/>provided logical id|The dashes are part of the identifier. <br/>When the service provider gives the PHG a pre-determined patient logical id the PHG creates no Patient resource and has no patient information. In that special case the provided logical id is used|
|type|"Observation.code.coding.code"|See [Obtaining the Observation.code](ObtainObservationCode.html)|
|value|The raw 16-bit or 32-bit integer delivered by the PHD||
|reported PHD timestamp|"timestamp"|See [Generating the PHD Reported Time Stamp](GeneratingtheReportedTimeStampIdentifier.html)|
|Supplemental Information|"Supplemental-Types.*N*-"|A sequence of 32-bit MDC codes separated by a dash|

The final identifier is made by concatenating the entries above as follows:
 - "device-patient-type-value-reported PHD timestamp-Supplemental Information"

### Additional Enumeration Measurement Information
There are no additional descriptive attributes that are unique to the Enumeration type of measurement.

### Examples:

A BITs observation example from a pulse oximeter is shown in [BITs Observation Example](Observation-bits-observation.html). This observation results when the pulse oximeter is having difficulty obtaining the measurement, perhaps due to motion or position of the finger in the sensor, a bad signal, etc.




---

File: repos/HL7_SLASH_phd/input/intro-notes/StructureDefinition-PhdCodedEnumerationObservation-intro.md

The Coded Enumeration Observation Profile is used when the PHD metric measurement is represented by one of a limited set of codes. This corresponds to the Single Event Observation class in IEEE 11073-10206 ACOM and the Simple Discrete Observation in GHS.  

The MDC code of the value in this observation resource corresponds to the value element in these ACOM and GHS observation classes.

One example of a coded measurement would be the Glucose Monitor meal context associated with a glucose concentration measurement. The code would indicate one of fasting, preprandial, postprandial, bedtime, etc. Coded measurements are often associated with other measurements. Another example would be the type of exercise in an activity session (walk, run, swim, hike, bike, etc.). Each of these enumerated options is given by a nomenclature code.


---

File: repos/HL7_SLASH_phd/input/intro-notes/StructureDefinition-PhdDeviceMetric-intro.md

ACOM and GHS provide the list of observation types that a device can generate. Accuracy can be specified as well. 
In GHS the valid range and schedule information can be present.
This information can be mapped to a PhdDeviceMetric FHIR Resource.

---

File: repos/HL7_SLASH_phd/input/intro-notes/StructureDefinition-PhdNumericObservation-intro.md

The Numeric Observation Profile is used when the PHD measurement reports a quantity. Examples would be weight, body temperature, glucose concentration, pulse rate, oxygen saturation, steps take, calories burned, etc.  

---

File: repos/HL7_SLASH_phd/input/intro-notes/StructureDefinition-PhdNumericObservation-notes.md

This profile is used to map ACOM Numeric Observations.  The measured value is reported as a floating number with an optional accuracy. In GHS the value is encoded as an IEEE 11073 FLOAT that indicates both precision and the number of significant digits. The Observation.valueQuantity.value element is required to honor the reported precision. See [Mder FLOATs and SFLOATs](MderFLOATsandSFLOATs.html) for instructions on handling S/FLOATs and their encoding to the valueQuantity .

### Mapping Numerics to FHIR
The following table shows how the numeric attributes are mapped to FHIR. Since the FHIR Quantity also contains the units the Unit-Code attribute value is required to complete the picture. The MDC unit code needs to be mapped to UCUM. In most cases this mapping is straight forward, but there can be some examples which are tricky. The MDC_DIM_TICK for the RR interval is just the number of ticks. However, the tick unit is given by the MDS attribute MDC_ATTR_TICK_RES which is the number of ticks per second. So if MDC_ATTR_TICK_RES is 2048 and the RR measurement is 3092, that means the RR interval is 1.5 seconds. One could also express the measurement in Hertz. When the units are converted in this manner, the value must be converted appropriately.

|Attribute|FHIR coding|
|-
|Basic-Nu-Observed-Value.*value*<br/>Unit-Code.*code*|Observation.valueQuantity.value<br/>Observation.valueQuantity.code (as UCUM)<br/>Observation.valueQuantity.system="http://unitsofmeasure.org"|
|Simple-Nu-Observed-Value.*value*<br/>Unit-Code.*code*|Observation.valueQuantity.value<br/>Observation.valueQuantity.code (as UCUM)<br/>Observation.valueQuantity.system="http://unitsofmeasure.org"|
|Nu-Observed-Value.*value*<br/>Nu-Observed-Value.*unit*<br/>Nu-Observed-Value.*metric-id*<br/>Nu-Observed-Value.*status*|Observation.valueQuantity.value<br/>Observation.valueQuantity.system="http://unitsofmeasure.org"<br/>Observation.valueQuantity.code<br/>effects Observation.code see [Obtaining the Observation.code](ObtainObservationCode.html) <br/>handle measurement status see [PHD Base Observation Profile](StructureDefinition-PhdBaseObservation.html) |

### Conditional Create Identifier Generation
For a general description of the PHD Observation Identifier see the "PHD Observation Identifier" section in [PHD Base Observation Profile](StructureDefinition-PhdBaseObservation.html). The table below lists the items that make up the identifier.

|Entry|value|Additional information|
|-
|device|"PhdDevice.identifier.value"|This value is the PHD IEEE EUI-64 system identifier|
|patient|"Patient.identifier.value-Patient.identifier.system" or<br/>provided logical id|The dashes are part of the identifier. <br/>When the service provider gives the PHG a pre-determined patient logical id the PHG creates no Patient resource and has no patient information. In that special case the provided logical id is used|
|type|"Observation.code.coding.code"|See [Obtaining the Observation Code](ObtainObservationCode.html)|
|value|"Observation.valueQuantity.value" or <br/> "Observation.dataAbsentReason.coding.code|The numerical value of the measurement or <br/> the data absent reason if the value is not present|
|units|"Observation.valueQuantity.code"|The UCUM code for the units|
|reported PHD timestamp|"timestamp"|See [Generating the PHD Reported Time Stamp](GeneratingtheReportedTimeStampIdentifier.html)|
|supplemental types|"Supplemental-Types.*N*-"|A sequence of 32-bit MDC codes separated by a dash|

The final identifier is made by concatenating the entries above as follows:
 - "device-patient-type-value-units-reported PHD timestamp-supplemental types"

### Additional Numerical Measurement Information
IEEE 11073-20601 numeric metric measurements have some additional optional attributes that are used only for numerics. When they occur, these additional attributes provide further information about the measurement. An example of such a numeric-only additional attribute is one that describes the accuracy of the measurement. The accuracy is a measure of the deviation of the actual measurement from the reported measurement. 

As in the PhdBaseObservation profile, an Observation.component element is used to contain the additional information. There are five metric attributes that give extra information about numeric-only measurements.

#### Accuracy
The Accuracy attribute gives the maximum deviation as an absolute value of the reported measurement from the actual measurement *over the entire range of the measurement*. The reported accuracy is, thus, static and does not vary over the range of the measurement. It shall be reported if the PHD provides it and it is not corrupted. It is in the units of the measurement itself. The entries are as populated as follows:

|Observation.component element|entry|Additional Information|
|-
|code.coding.code|67914|This is the MDC code for the Accuracy attribute|
|code.coding.system|urn:iso:std:iso:11073:10101|Indicates the MDC coding system|
|code.text|optional but|Should contain the reference id MDC_ATTR_NU_ACCUR_MSMT along with any other additional text|
|valueQuantity.value|the value|This is accuracy value|
|valueQuantity.system|http://unitsofmeasure.org |Indicates the UCUM coding system|
|valueQuantity.code|shall be the code of the primary measurement|The code shall be the UCUM unit code|

#### Alert Operational State
The Alert Operational State is currently only used in the Pulse Oximeter specialization. This attribute uses an ASN1-BITs field to indicate whether the alerts on a given limit (upper or lower) are on or off. When SET, the alerts are off. This is a state-type measurement and when this attribute is present, both the set and cleared states are reported. Three bits are defined thus there will be three component entries for each of the bits.

|Observation.component element|entry|Additional Information|
|-
|code.coding.code|68746.n|68746 is the MDC code for the Alert Operational State. 'n' is 0, 1, or 2 depending upon which bit is being reported.|
|code.coding.system|http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7 |Indicates the ASN-1 coding system|
|code.text|optional but|Should contain the ASN1 name 'lim-alert-off', 'lim-low-off', or 'lim-high-off' for bits 0-2, respectively, along with any other additional text|
|valueCodeableConcept.coding.code|'Y' or 'N'|'Y' for bit set, 'N' for bit cleared|
|valueCodeableConcept.coding.system|http://terminology.hl7.org/CodeSystem/v2-0203 |Indicates the V2 binary coding system|

#### Alert Operational Text String
This attributes provides a human readable string describing the lower and upper threshold limits. It is currently used only in the Pulse Oximeter specialization.

|Observation.component element|entry|Additional Information|
|-
|code.coding.code|68104|This is the MDC code for the Alert-Operational-Text_string attribute|
|code.coding.system|urn:iso:std:iso:11073:10101|Indicates the MDC coding system|
|code.text|optional but|Should contain the reference id MDC_ATTR_AL_OP_TEXT_STRING along with any other additional text|
|valueString|the strings|These are the lower and upper limit strings|

#### Current Limits
The Current-Limits attribute is currently only used in the Pulse Oximeter specialization. It gives the lower and upper threshold limits of whatever measurement is being monitored.

|Observation.component element|entry|Additional Information|
|-
|code.coding.code|67892|This is the MDC code for the Current-Limits attribute|
|code.coding.system|urn:iso:std:iso:11073:10101|Indicates the MDC coding system|
|code.text|optional but|Should contain the reference id MDC_ATTR_LIMIT_CURR along with any other additional text|
|valueRange.low.value|the value|This is the lower limit|
|valueRange.low.unit|optional||
|valueRange.low.system|http://unitsofmeasure.org |Indicates the UCUM coding system|
|valueRange.low.code|shall be the code of the primary measurement|The code shall be the MDC unit code|
|valueRange.high.value|the value|This is the upper limit|
|valueRange.high.unit|optional ||
|valueRange.high.system|http://unitsofmeasure.org |Indicates the UCUM coding system|
|valueRange.high.code|shall be the code of the primary measurement|The code shall be the UCUM unit code|

#### Measurement Confidence 95
The Measurement-Confidence-95 attribute is currently used only in the Continuous Glucose specialization. The attribute gives a lower and upper bound with which the manufacturer is 95%confident that the actual reported measurement is within that bounds.

|Observation.component element|entry|Additional Information|
|-
|code.coding.code|68236|This is the MDC code for the Measurement-Confidence-95 attribute|
|code.coding.system|urn:iso:std:iso:11073:10101|Indicates the MDC coding system|
|code.text|optional but|Should contain the reference id MDC_ATTR_MSMT_CONFIDENCE_95 along with any other additional text|
|valueRange.low.value|the value|This is the lower limit|
|valueRange.low.unit|optional||
|valueRange.low.system|http://unitsofmeasure.org |Indicates the UCUM coding system|
|valueRange.low.code|shall be the code of the primary measurement|The code shall be the UCUM unit code|
|valueRange.high.value|the value|This is the upper limit|
|valueRange.high.unit|optional ||
|valueRange.high.system|http://unitsofmeasure.org |Indicates the UCUM coding system|
|valueRange.high.code|shall be the code of the primary measurement|The code shall be the UCUM unit code|

#### Threshold Notification Text String
The Threshold-Notification-Text-String attribute is currently used only in the Continuous Glucose specialization. It provides a human readable string describing the thresholds. There are separate measurement objects that actually give the thresholds.

|Observation.component element|entry|Additional Information|
|-
|code.coding.code|68232|This is the MDC code for the Alert-Operational-Text_string attribute|
|code.coding.system|urn:iso:std:iso:11073:10101|Indicates the MDC coding system|
|code.text|optional but|Should contain the reference id MDC_ATTR_THRES_NOTIF_TEXT_STRING along with any other additional text|
|valueString|the string|This is a textual description of the thresholds for the given measurement|

### Examples:

A basic simple numeric observation with a time stamp and a supplemental types attribute is shown in [Pulse Rate Spot Measurement](Observation-numeric-spotnumeric.html). Simple numeric measurements are common in PHDs.

An example of a NaN (not a number) measurement is shown in [NaN Example](Observation-numeric-observation-not-a-number.html). Note that the value element is absent and replaced by a dataAbsentReason element.

### Consumer of the PHD Numeric Observation Profile
The consumer of this profile does not need to concern itself with the mapping complexities or the PHD-related entry for the Observation.identifier which is used by the uploader to prevent data duplication. There are no extensions introduced by this profile except for the HL7 gateway extension so the resource is consumable by any reader that understands the Observation resource. The following table summarizes the elements used describing the measurement:

|Measurement item|element|Additional Information|
|-
|measurement type|Observation.code.coding.code|There shall be one coding element using the MDC coding system<br>If a vital sign, there will be an additional coding element using one of the LOINC 'magic' codes.|
|measurement value|Observation.valueQuantity.value|Value has precision of original measurement|
|measurement units|Observation.valueQuantity.code|Uses UCUM coding system.|
|error|Observation.dataAbsentReason|Contains error code. If present no Observation.valueQuantity is present |
|time stamp|Observation.dateTimeEffective<br/><br/>Observation.period|If the measurement is a point in time.<br/><br/>If the measurement has a duration.|
|coincident time stamp|Observation.derivedFrom|Points to Observation following the Coincident Time Stamp Observation profile. For time quality auditing purposes. Not present if the sensor provides NO time stamp |
|related measurement|Observation.derivedFrom|Points to a PHD Observation that is related to this Observation such as a cardio session. Not present if the device did not reference an additional measurement.|
|additional descriptions|Observation.component|If a component element exists it contains additional information about the measurement|
|patient|Observation.subject|Points to the Patient resource|
|sensor device|Observation.device|Points to the Device resource|


---

File: repos/HL7_SLASH_phd/input/intro-notes/StructureDefinition-PhdStringEnumerationObservation-intro.md

The String Enumeration Observation Profile is used when the PHD observation reports a human readable string. These types of observations have the disadvantage of being unprocessable by machine without out-of-band information. Codes are often used instead where the end user can display them appropriately based upon locale. As an example, it is used in the Cardiovascular device specialization to report the name of an exercise program option.

This profile is used to map ACOM and GHS String Observations. The ACOM/GHS string value is mapped to the Observation.valueString data element.



---

File: repos/HL7_SLASH_phd/input/pagecontent/Appendices.md

### Dependencies
{% include dependency-table.xhtml %}

### Cross Version Analysis
{% include cross-version-analysis.xhtml %}

### Global Profiles
{% include globals-table.xhtml %}

### IP Statements
{% include ip-statements.xhtml %}

---

File: repos/HL7_SLASH_phd/input/pagecontent/ASN1BITsCodeSystem.md

11073 PHDs report some measurements as an integer where each bit in the integer may mean something. There is no HL7 data type that treats this kind of measurement. This guide defines a code system where each of the possible bit settings in a given measurement is mapped to a code. The code can be reported in a CodeableConcept data type.

The uploader can generate the code from the data received from the PHD. No external information is necessary unless the uploader wants to populate the 'display' element of the CodeableConcept data type. It is recommended that the uploader populate the display element with at least the 11073 specialization name for the bit setting. It is not required because it is desired to have an uploader that can still work with future specializations and in that case, it is not possible for the uploader to know what the 11073 specialization name for the bit is as it is not sent over the wire; it is only available from the specialization documents.

To generate the code, the uploader obtains the code for the type of measurement which is used to populate the Observation.code.coding.code element. Then for each bit to be reported, a new code is generated by appending a period followed by the bit position being mapped. Thus a 16-bit measurement may correspond to 16 codes.

Each code is reported in an Observation.component.code.coding.code element which means there may as many component elements in the measurement as there are bits on the integer. A bit can only have two values, set or cleared. Thus the value is reported in the Observation.component.valueCodeableConcept.coding.code element using the HL7 Version 2 binary coding system; "Y" for set and "N" for cleared.

 - As an example, the continuous glucose monitor specialization has a Device status measurement whose type is given by the code 8418060. If the value reported is 0001 1000 0000 0000 the bits set are bits 3 and 4. Note that bit 0 is the HIGH order bit. Bit 3 means 'sensor malfunction' and bit 4 means 'device specific alert'. This measurement would require two component elements and one would be 8418060.3 and the other would be 8418060.4. Note these are alpha-numeric strings and not decimal numbers. If one took the code 8418060.3 and looked it up in the ASN.1 Bits vocabulary one would find it meant 'sensor malfunctioned'.

## Reporting Requirements
If the ASN.1 bit represents an event, only the set condition needs to be reported. If the ASN.1 bit represents a state, both the set and cleared conditions need to be reported. If the device does not support the bit, it is not required to report the value. If the uploader would, nevertheless, desire to report the unsupported situation it is done in an Observation.component.dataAbsentReason.coding.code element with code "unsupported". The Observation.component.value[x] element is absent. Undefined bits are never reported.

This code system can be used to report IEEE 11073-10206 Multiple Boolean State observations, where each bit represents a state and for Bluetooth GHS Compound state/event observations that come with a mask to indicate per bit if it is a state or an event and whether it is supported by the device or not.

It can aslo be used for 11073-20601 Bit-Str metrics. In version 4 of the IEEE 11073-20601 specification from 2019 the enumeration metric object supports both a Capability-Mask-Simple/Basic and State-flag-Simple/Basic attribute that must be present when an enumeration BITs measurement is reported. The Capability-Mask attribute will have a bit set when the corresponding bit in the actual measurement is supported by the device. The State-Flag attribute will have a bit set if the corresponding bit is a state. If cleared, the corresponding bit is an event. However, these attributes are not present in IEEE 11073-20601 versions 3 or earlier that are currently used by PHDs. Thus, the uploader will need to obtain this information from the ASN.1 mapping tables.

## MDER Bit Position
To generate this code, the uploader needs to understand that Bit position 0 is the ***most*** significant bit of the integer and that Bit position 15 is the ***least*** significant bit of a 16-bit integer. The following table shows the bit position and the corresponding integer value representing it when that bit is set for 16- and 32-bit integers.

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

|MDER Bit Position|16-bit integer value|32-bit integer value|
|-
|0|0x8000|0x80000000|
|1|0x4000|0x40000000|
|2|0x2000|0x20000000|
|3|0x1000|0x10000000|
|4|0x800|0x8000000|
|5|0x400|0x4000000|
|6|0x200|0x2000000|
|7|0x100|0x1000000|
|8|0x80|0x800000|
|9|0x40|0x400000|
|10|0x20|0x200000|
|11|0x10|0x100000|
|12|0x8|0x80000|
|13|0x4|0x40000|
|14|0x2|0x20000|
|15|0x1|0x10000|
|16||0x8000|
|17||0x4000|
|18||0x2000|
|19||0x1000|
|20||0x800|
|21||0x400|
|22||0x200|
|23||0x100|
|24||0x80|
|25||0x40|
|26||0x20|
|27||0x10|
|28||0x8|
|29||0x4|
|30||0x2|
|31||0x1|

## Example mapping
A pulse Oximeter sends a ‘Device and sensor annunciation status’ measurement. The Type attribute value for this measurement is MDC_PULS_OXIM_DEV_STATUS which has a term code 19532 in the partition SCADA (2). The 32-bit code value is then 2 * 2<sup>16</sup> + 19532 or 150604. The defined ASN.1 bits for this measurement in the pulse oximeter specialization are:

|bit position|ASN.1 Item	|Description|
|-
|0|sensor-disconnected|	Agent reports that the sensor is disconnected from the instrument.| 
|1|sensor-malfunction|	Agent reports that the sensor is malfunctioning or faulting.| 
|2|sensor-displaced|	Agent reports that the sensor is not properly attached or has been dislodged, an accurate measurement is, therefore, prevented.| 
|3|sensor-unsupported|	An unsupported sensor is connected to the agent.|
|4|sensor-off|	Agent reports that sensor is not connected to the user.|
|5|sensor-interference|	Agent reports that there is interference due to ambient light or electrical phenomena.|
|6|signal-searching|	Signal analysis is currently in progress prior to measurement availability.|
|7|signal-pulse-questionable|	Agent determines that a questionable pulse is detected.|
|8|signal-non-pulsatile|	Agent detects a nonpulsatile signal. |
|9|signal-erratic|	Agent reports that the signal is erratic or is not plausible.|
|10|signal-low-perfusion|	Agent reports a consistently low perfusion condition exists.|
|11|signal-poor|	Agent reports a poor signal exists, possibly affecting accuracy.|
|12|signal-inadequate|	Agent reports that the incoming signal cannot be analyzed or is inadequate for producing a meaningful result. |
|13|signal-processing-irregularity|	Agent has determined that some irregularity has been detected while processing the signal.|
|14|device-equipment-malfunction|	A general device fault has occurred in the agent.|
|15|device-extended-update|	An extended display update is currently active.|

The mapped codes reported in the FHIR Observation.component.coding.code elements are given by

|HL7 Code|	ASN.1 name| bit type|
|-
|150604.0|	sensor-disconnected|event|
|150604.1|	sensor-malfunction|event|
|150604.2|	sensor-displaced|event|
|150604.3|	sensor-unsupported|event|
|150604.4|	sensor-off|event|
|150604.5|	sensor-interference|event|
|150604.6|	signal-searching|event|
|150604.7|	signal-pulse-questionable|event|
|150604.8|	signal-non-pulsatile|event|
|150604.9|	signal-erratic|event|
|150604.10|	signal-low-perfusion|event|
|150604.11|	signal-poor|event|
|150604.12|	signal-inadequate|event|
|150604.13|	signal-processing-irregularity|event|
|150604.14|	device-equipment-malfunction|event|
|150604.15|	device-extended-update|event|

See [currently defined ASN1 Codes]({{ output }}ASN1ToHL7Codes.html).

 - [Next: The Observation Identifier]({{ output }}ObservationIdentifier.html)
 - [Previous: Obtaining the Unit code]({{ output }}ObtainUnitCode.html)


---

File: repos/HL7_SLASH_phd/input/pagecontent/ASN1ToHL7Codes.md

The ASN1 to HL7 code system is the result of mapping IEEE 11073-20601 BITs measurements or values to codes. HL7 (in V2, V3, and FHIR) has no native support for BITs type values.

The following tables gives the codes, names, and event or state type for the currently specified BITs measurements and values. The HL7 ASN1 Code is the code entered into the FHIR code elements. The ASN1 name is standardized and is analogous to the reference identifier for the nomenclature codes. If the state type is an event, only the 'set' meaning is displayed.

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

### MDS and other Non-Measurement Attributes

#### MDS Power Status Attribute
Partition:Term Code: 1:2389     32-bit value 67925

Reference identifier:  MDC_ATTR_POWER_STAT

|Mder Bit|HL7 ASN1 Code|ASN1 name|meaning when set|meaning when cleared|event or state|
|-
|0|67925.0|onMains|On mains power|Not on mains power|state|
|1|67925.1|onBattery|On battery|Not on battery|state|
|8|67925.8|chargingFull|Charging at full rate||event|
|9|67925.9|chargingTrickle|Trickle charging||event|
|10|67925.10|chargingOff|Not charging|charging|state|

#### MDS Regulation Status from the Reg-Cert-Data-List Attribute
Partition:Term Code: 8:8066     32-bit code 532354

Reference identifier: MDC_REG_CERT_DATA_CONTINUA_REG_STATUS

Note that the *cleared* state is the *regulated* state. This choice is probably not what one expects.

|Mder Bit|HL7 ASN1 Code|ASN1 name|meaning when set|meaning when cleared|event or state|
|-
|0|532354.0|regulation-status|Device is *unregulated*|Device is *regulated*|state|

#### MDS Time capabilities state from the Mds-Time-Info Attribute
Partition:Term Code 1:2683      32-bit code 68219
Reference Identifier: MDC_TIME_CAP_STATE

Only static settings, when present, are required to be reported.

|Mder Bit|HL7 ASN1 Code|ASN1 name|meaning when set|meaning when cleared|event or state|
|-
|0|68219.0|mds-time-capab-real-time-clock|real time clock supported||event|
|1|68219.1|mds-time-capab-set-clock|setting the time by PHG supported||event|
|2|68219.2|mds-time-capab-relative-time|relative time supported||event|
|3|68219.3|mds-time-capab-hi-res-relative-time|hi res relative time supported||event|
|4|68219.4|mds-time-capab-sync-abs-time|syncing absolute time supported||event|
|5|68219.5|mds-time-capab-sync-rel-time|syncing relative time supported||event|
|6|68219.6|mds-time-capab-sync-hi-res-relative-time|syncing hi res relative time supported||event|
|7|68219.7|mds-time-capab-bo-time|base offset time supported||event|
|8|68219.8|mds-time-state-abs-time-synced|absolute time synced||event (*dynamic*)|
|9|68219.9|mds-time-state-rel-time-synced|relative time synced||event (*dynamic*)|
|10|68219.10|mds-time-state-hi-res-relative-time-synced|hi-res relative time synced||event (*dynamic*)|
|11|68219.11|mds-time-mgr-set-time|PHG requested to set the time||event (*dynamic*)|
|12|68219.12|mds-time-capab-sync-bo-time|syncing base offset time supported||event|
|13|68219.13|mds-time-state-bo-time-synced|base offset time synced||event (*dynamic*)|
|14|68219.14|mds-time-state-bo-time-UTC-aligned|base offset time UTC aligned||event|
|15|68219.15|mds-time-dst-rules-enabled|Daylight Savings Time rules understood||event|

#### Alert Operational Status Attribute
This attribute is a metric descriptive attribute; it is not a measurement but an extra piece of information saying something about a measurement.

Partition:Term Code: 1:2310     32-bit code: 67846

Reference Identifier: MDC_ATTR_AL_OP_STAT

|Mder Bit|HL7 ASN1 Code|ASN1 name|meaning when set|meaning when cleared|event or state|
|-
|0|67846.0|lim-alert-off|all alerts (both high and low) are off|one of the high and low may be on|state|
|1|67846.1|lim-low-off|low-limit detection is off|low-limit detection is on|state|
|2|67846.2|lim-high-off|high-limit detection is off|high-limit detection is on|state|

### Enumeration Measurements
The following tables give the currently defined BITs measurements. These values are defined in the 11073 104xx specialization standards. The HL7 ASN1 codes for these and future values can be derived directly from the protocol exchange.

#### Pulse Oximeter Device and Sensor status
Partition:Term Code:  2:19532   32-bit code: 150604

Reference Identifier:   MDC_PULS_OXIM_DEV_STATUS

|Mder Bit|HL7 ASN1 Code|ASN1 name|meaning when set|meaning when cleared|event or state|
|-
|0|150604.0|sensor-disconnected|Device not connected to sensor||event|
|1|150604.1|sensor-malfunction|Sensor has malfunctioned||event|
|2|150604.2|sensor-displaced|Sensor is incorrectly placed on user||event|
|3|150604.3|sensor-unsupported|Device connected to unsupported sensor||event|
|4|150604.4|sensor-off|Sensor not connected to user||event|
|5|150604.5|sensor-interference|Sensor experiencing interference||event|
|6|150604.6|signal-searching|Searching for a signal||event|
|7|150604.7|signal-pulse-questionable|Questionable pulse detected||event|
|8|150604.8|signal-non-pulsatile|Non pulsatile signal detected||event|
|9|150604.9|signal-erratic|Signal is erratic||event|
|10|150604.10|signal-low-perfusion|Signal experiencing low perfusion||event|
|11|150604.11|signal-poor|Signal is poor"||event|
|12|150604.12|signal-inadequate|Signal is inadequate||event|
|13|150604.13|signal-processing-irregularity|Signal processing experiencing irregularity||event|
|14|150604.14|device-equipment-malfunction|Device malfunction has occurred||event|
|15|150604.15|device-extended-update|Extended display update in progress||event|

#### Pulse Oximeter Pulsatile characteristics
Partition:Term Code:  2:19533   32-bit code: 150605

Reference Identifier:   MDC_PULS_OXIM_PULS_CHAR

|Mder Bit|HL7 ASN1 Code|ASN1 name|meaning when set|meaning when cleared|event or state|
|-
|0|150605.0|pulse-qual-nominal|No abnormalities detected||event|
|1|150605.1|pulse-qual-marginal|Pulse perfusion or quality marginal||event|
|2|150605.2|pulse-qual-minimal|Pulse perfusion or quality minimal||event|
|3|150605.3|pulse-qual-unacceptable|Pulse perfusion or quality unacceptable||event|

#### ECG Device and Sensor status
Partition:Term Code: 128:21976   32-bit code: 8410584

Reference Identifier: MDC_ECG_DEV_STAT

|Mder Bit|HL7 ASN1 Code|ASN1 name|meaning when set|meaning when cleared|event or state|
|-
|0|8410584.0|leadwire-loss|loss of unspecified lead wire or electrode connection||event|
|1|8410584.1|leadsignal-loss|loss of unspecified lead signal||event|
|2|8410584.2|leadwire-loss-first-lead|loss of 1st lead wire or electrode connection||event|
|3|8410584.3|leadsignal-loss-first-lead|loss of 1st lead signal||event|
|4|8410584.4|leadwire-loss-second-lead|loss of 2nd lead wire or electrode connection||event|
|5|8410584.5|leadsignal-loss-second-lead|loss of 2nd lead signal||event|
|6|8410584.6|leadwire-loss-third-lead|loss of 3rd lead wire or electrode connection||event|
|7|8410584.7|leadsignal-loss-third-lead|loss of 3rd lead signal||event|

#### Glucose Meter Device and Sensor status
Partition:Term Code: 128:29144   32-bit code: 8417752

Reference Identifier: MDC_GLU_METER_DEV_STATUS

|Mder Bit|HL7 ASN1 Code|ASN1 name|meaning when set|meaning when cleared|event or state|
|-
|0|8417752.0|device-battery-low|Battery low||event|
|1|8417752.1|sensor-malfunction|Sensor has malfunctioned||event|
|2|8417752.2|sensor-sample-size-insufficient|Not enough blood in sample||event|
|3|8417752.3|sensor-strip-insertion|Strip inserted incorrectly||event|
|4|8417752.4|sensor-strip-type-incorrect|Strip not correct type||event|
|5|8417752.5|sensor-result-too-high|Value too high||event|
|6|8417752.6|sensor-result-too-low|Value too low||event|
|7|8417752.7|sensor-temp-too-high|Temperature too high||event|
|8|8417752.8|sensor-temp-too-low|Temperature too low||event|
|9|8417752.9|sensor-read-interrupt|Process interrupted||event|
|10|8417752.10|device-gen-fault|General device fault||event|
|11|8417752.11|sensor-temp-out-of-range|Temperature out of range||event|

#### Coagulation Meter Device and Sensor status
Partition:Term Code: 128:29301     32-bit code: 8417909

Reference Identifier:   MDC_INR_METER_DEV_STATUS

|Mder Bit|HL7 ASN1 Code|ASN1 name|meaning when set|meaning when cleared|event or state|
|-
|0|8417909.0|inr-device-battery-low|Battery low||event|
|1|8417909.1|inr-sensor-malfunction|Sensor has malfunctioned||event|
|2|8417909.2|inr-sensor-sample-size-insufficient|Not enough blood in sample||event|
|3|8417909.3|inr-sensor-strip-insertion|Strip inserted incorrectly||event|
|4|8417909.4|inr-sensor-strip-type-incorrect|Strip not correct type||event|
|5|8417909.5|inr-sensor-result-too-high|Value too high||event|
|6|8417909.6|inr-sensor-result-too-low|Value too low||event|
|7|8417909.7|inr-sensor-temp-too-high|Temperature too high||event|
|8|8417909.8|inr-sensor-temp-too-low|Temperature too low||event|
|9|8417909.9|inr-sensor-read-interrupt|Process interrupted||event|
|10|8417909.10|inr-device-gen-fault|General device fault||event|
|11|8417909.11|inr-sensor-calibration-due|Calibration is due||event|

#### Generic 20601 Device and Sensor status
Partition:Term Code: 128:20000     32-bit code: 8408608

Reference Identifier:   MDC_PHD_DM_DEV_STAT

|Mder Bit|HL7 ASN1 Code|ASN1 name|meaning when set|meaning when cleared|event or state|
|-
|0|8408608.0|device-status-undetermined|Undetermined device status event||event|
|1|8408608.1|device-status-reset|Device reset||event|
|5|8408608.5|device-status-error|Device error||event|
|6|8408608.6|device-status-error-mechanical|Mechanical error||event|
|7|8408608.7|device-status-error-electronic|Electronic error||event|
|8|8408608.8|device-status-error-software|Software error||event|
|9|8408608.9|device-status-error-battery|Battery error||event|
|15|8408608.15|device-status-service|"Service required||event|
|16|8408608.16|device-status-service-time-sync-required|Time-sync service required||event|
|17|8408608.17|device-status-service-calibration-required|Calibration required||event|
|18|8408608.18|device-status-service-replenishment-required|Replentishment required||event|
|25|8408608.25|device-status-battery-low|Battery too low||event|
|26|8408608.26|device-status-battery-depleted|Battery depleted||event|
|27|8408608.27|device-status-battery-replaced|Battery replaced||event|
|28|8408608.28|device-status-battery-interrupted|Battery interrupted||event|

#### Continuous Glucose Monitor Device and Sensor status
Partition:Term Code: 128:29452     32-bit code: 8418060

Reference Identifier:   MDC_CGM_DEV_STAT

|Mder Bit|HL7 ASN1 Code|ASN1 name|meaning when set|meaning when cleared|event or state|
|-
|0|8418060.0|sensor-session-stopped|Session stopped||event|
|2|8418060.2|sensor-type-incorrect|Sensor type incorrect for device||event|
|3|8418060.3|sensor-malfunction|Sensor malfunction||event|
|4|8418060.4|device-specific-alert|Device Specific Alert||event|
|7|8418060.7|sensor-calibration-not-allowed|Calibration not allowed||event|
|8|8418060.8|sensor-calibration-recommended|Calibration recommended||event|
|9|8418060.9|sensor-calibration-required|Calibration required||event|
|10|8418060.10|sensor-temp-too-high|Temperature too high for valid result||event|
|11|8418060.11|sensor-temp-too-low|Temperature too low for valid result||event|
|12|8418060.12|sensor-result-below-patient-low|Sensor result below the Patient Low level||event|
|13|8418060.13|sensor-result-above-patient-high|Sensor result above the Patient High level||event|
|14|8418060.14|sensor-low-hypo|Sensor result below the Hypo level||event|
|15|8418060.15|sensor-high-hyper|Sensor result above the Hyper level||event|
|16|8418060.16|sensor-rate-decrease-exceeded|Sensor rate of decrease exceeded||event|
|17|8418060.17|sensor-rate-increase-exceeded|Sensor rate of increase exceeded||event|
|18|8418060.18|sensor-result-too-low|Sensor result lower than the device can process||event|
|19|8418060.19|sensor-result-too-high|Sensor result higher than the device can process||event|
|20|8418060.20|sensor-com-out-of-range|Sensor communication is out of range||event|







---

File: repos/HL7_SLASH_phd/input/pagecontent/Audience.md

This Implementation Guide is meant for developers of both PHD data uploaders and of readers of FHIR resources that process observation data provided by PHDs. Specifically, the implementers of Continua-certified Personal Health Gateways (PHGs) can use this Implementation Guide to encode PHD information into FHIR resources that can be stored on FHIR servers for further processing or analysis. 95% of this guide is dedicated to the uploader which has to work with the complexities of IEEE 11073 PHDs. Consumers needing PHD information will use this guide to ascertain what resources to access and what elements in those resources have the desired information. Ultimately, the Implementation Guide will help personal health device manufacturers and service providers to map observations and device data into a FHIR-based information system.

This guide will be of use to anyone who wishes to work with IEEE 11073 PHD data in FHIR format. 

 - [Next: Scope](Scope.html)
 - [Previous: Purpose](Purpose.html)


---

File: repos/HL7_SLASH_phd/input/pagecontent/BITsEnumerationObservationProfile.md

The BITs Enumeration Observation Profile is used when the PHD metric measurement is an integer where each bit represents an event or a state. PHDs typically send this kind of measurement when more than one event or state can occur simultaneously. If the event or states are mutually exclusive, the coded form of the measurement is typically used instead.

The measurement is a BITs state and/or event set when the PHD metric contains one of the following attributes:

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

|Attribute|Value|Additional Information|
|-
|Enum-Observed-Value-Simple-Bit-Str|32-bit value|Each bit in the 32-bit integer signifies some item|
|Enum-Observed-Value-Basic-Bit-Str|16-bit value|Each bit in the 16-bit integer signifies some item|
|Enum-Observed-Value|32-bit term code when a BITs|When this complex attribute is used the only option is for the 32-bit BITs field|

The Enum-Observed-Value-Simple/Basic-Bit-Str attribute is used when the measurement reports one or more events or states. Each bit in the 16 or 32-bit number may represent some state or event. The most common use of this type of measurement is for reporting device status events that influence the measurement. It is also used extensively in the Independent Living specialization to report states such as 'door open', 'door closed' or 'patient in room', 'patient out of room', etc. The measurement is generally used when there is the potential for more than one event or state to be set at the same time.

The Enum-Observed-Value attribute is a complex attribute and can be any one of the three possible enumeration measurements. There is an element in the structure which indicates which type of enumeration it is. If it is a 'BITs' type it reports only the 32-bit version. The attribute also has its own metric-id value telling what it is and status value. The metric-id value replaces the term code given by the Type attribute for the *type* of measurement and the status value replaces the Measurement-Status attribute.

The structure definition for this profile is given [here](StructureDefinition-PhdBitsEnumerationObservation.html)

### Mapping BITs Enumerations to FHIR
FHIR has no data type that corresponds to this kind of measurement. Consequently Continua has developed a code system which maps the BITs measurement to a set of codes. The details of the mapping and how these codes are generated from data received from the PHD are given in [ASN1 BITS Code System](ASN1BITsCodeSystem.html). These codes are reported in the component element; one component per reported bit setting. Thus similar to the compound numerical measurement, there is no Observation.value[x] element. There may still be an Observation.dataAbsentReason element if a measurement status indicates a measurement failure in which case no component elements representing the BITs setting are reported.

In the following table, N is the *bit position* being reported. M is the *component element number* in the Observation. Since not all bits may be reported, M is always <= N. The notation "Type" is the 32-bit code reported in Observation.code.coding.code used in the ASN1 mapping to HL7 codes. Note that the term code of this value will come from the metric-id element when an Enum-Observed-Value attribute is reported.

Recall that only set bits of type 'event' need to be reported. If of type 'state' both set and cleared states need to be reported. Undefined bits are not reported. Unsupported bits (only available in the later versions of the 20601 spec) may be indicated.

|Attribute|FHIR coding|
|-
|Enum-Observed-Value-Basic-Bit_str.*bitN* <br/> where 0 <= *N* <= 15|Observation.component*M*.code.coding.code="Type.*N*"<br/> where *M* is the *M*th setting being reported<br/>Observation.component*M*.code.coding.system="http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7"<br/> where *M* is the *M*th setting being reported<br/>Observation.component*M*.valueCodableConcept.coding.code="Y/N" if bit *N* is set/cleared</br>Observation.component*M*.valueCodableConcept.coding.system="http://terminology.hl7.org/CodeSystem/v2-0136"<br/> where *M* is the *M*th setting being reported|
|Enum-Observed-Value-Simple-Bit_str.*bitN* <br/> where 0 <= *N* <= 31|Observation.component*M*.code.coding.code<br/> where *M* is the *M*th setting being reported<br/>Observation.component*M*.code.coding.system="http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7"<br/> where *M* is the *M*th setting being reported<br/>Observation.component*M*.valueCodableConcept.coding.code="Y/N" if bit *N* is set/cleared</br>Observation.component*M*.valueCodableConcept.coding.system="http://terminology.hl7.org/CodeSystem/v2-0136"<br/> where *M* is the *M*th setting being reported|
|Enum-Observed-Value.*bitN*<br/><br/> where 0 <= *N* <= 31<br/>Enum-Observed-Value.*metric-id*<br/>Enum-Observed-Value.*status*|Observation.component*N*.code.coding.code="Type.*N*" where *M* is the *M*th setting being reported<br/>Observation.component*M*.code.coding.system="http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7"<br/> where *M* is the *M*th setting being reported<br/>Observation.component*M*.valueCodableConcept.coding.code="Y/N" if bit *N* is set/cleared<br/>Observation.component*M*.valueCodableConcept.coding.system="http://terminology.hl7.org/CodeSystem/v2-0136"<br/> where *M* is the *M*th setting being reported<br/><br/>effects the Observation.component.code.coding.code "Type" see [Obtaining the Observation.code](ObtainObservationCode.html) <br/>see Measurement Status in [Phd Base Observation Profile](StructureDefinition-PhdBaseObservation.html) |
|If reporting an unsupported bit *N*|Observation.component*M*.dataAbsentReason="unsupported"|

Below is an example of one Observation.component element containing one of the perhaps several bit settings from a pulse oximeter device and sensor status measurement:
<pre>
component": [
    {
        "code": {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7",
                    "code": "150604.2"
                }
            ],
            "text": "sensor-displaced"
        },
        "valueCodeableConcept": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0136",
                    "code": "Y"
                }
            ],
            "text": "Sensor is incorrectly placed on user"
        }
}
</pre>
There would be one such component element for every bit setting to be reported. Of one examines the ASN1ToHL7 code system [here](ASN1BITsCodeSystem.html) one will see that the code 150604.2 means "Sensor is incorrectly placed on user".

#### Conditional Create Identifier Generation
For a general description of the PHD Observation Identifier see the "PHD Observation Identifier" section in [PHD Base Observation Profile](StructureDefinition-PhdBaseObservation.html). The table below lists the items that make up the identifier.

|Entry|value|Additional information|
|-
|device|"PHD Device.identifier.value"|This value is the PHD IEEE EUI-64 system identifier|
|patient|"Patient.identifier.value-Patient.identifier.system" or<br/>provided logical id|The dashes are part of the identifier. <br/>When the service provider gives the PHG a pre-determined patient logical id the PHG creates no Patient resource and has no patient information. In that special case the provided logical id is used|
|type|"Observation.code.coding.code"|See [Obtaining the Observation.code](ObtainObservationCode.html)|
|value|The raw 16-bit or 32-bit integer delivered by the PHD||
|reported PHD timestamp|"timestamp"|See [Generating the PHD Reported Time Stamp](GeneratingtheReportedTimeStampIdentifier.html)|
|supplemental types|"Supplemental-Types.*N*-"|A sequence of 32-bit MDC codes separated by a dash|

The final identifier is made by concatenating the entries above as follows:
 - "device-patient-type-value-reported PHD timestamp-supplemental types"

### Additional Enumeration Measurement Information
There are no additional descriptive attributes that are unique to the Enumeration type of measurement.

### Examples:

A BITs observation example from a pulse oximeter is shown in [BITs Observation Example](Observation-bits-observation.html). This observation results when the pulse oximeter is having difficulty obtaining the measurement, perhaps due to motion or position of the finger in the sensor, a bad signal, etc.




---

File: repos/HL7_SLASH_phd/input/pagecontent/changes.md

TBD.


---

File: repos/HL7_SLASH_phd/input/pagecontent/CodeableConcepts.md

In this guide there will be several instances where the IEEE 11073-10101 nomenclature (MDC) codes are mapped to FHIR. In almost all cases this mapping involves an element that is a CodeableConcepts data type. The mapping is as follows:

 - CodeableConcept.coding.code = *partition* * 2<sup>16</sup> + *term code*
 - CodeableConcept.coding.system = urn:iso:std:iso:11073:10101
 - CodeableConcept.text = reference identifier (*optional*)

The reference identifier in the text element is optional since the uploader may not know what the code means; for example, if the uploader works with a PHD specialization developed after the uploader had been released. However, this guide strongly encourages that the text element contains at least the normative reference identifier for the MDC code if it is known.

The text element itself is also optional for future compatibility. Any text element entry requires that the uploader have some previous knowledge of the code as display information is not provided by protocol.

The text element is also used instead of the coding.display element since the latter has restrictions based upon the code system. The information in the display element must come from the code system itself, and in the case of the MDC code system only the reference identifier is defined for all codes. Consequently for this implementation guide to avoid conflicts it is suggested that the text element be populated with *"reference identifier: optional additional implementation-defined text describing the code which may be in the local language*". For example, "MDC_CTXT_GLU_MEAL: Meal associated with measurement".

The CodeableConcept is used quite frequently in other FHIR elements. It has a Coding element which specifies the code system being used to define the item. The Coding element has a 0..* cardinality which allows one to define the item or concept in several different coding systems. Its important to understand that the different coding systems must all describe the same concept, or at least be a reasonable match. In addition, the Coding.system element used to define the coding system is never a value set, but must always be a code system. One can easily be misled when examining the links in the FHIR specification that bring one to the codes a given element may use which displays a bold link but is a value set and not a code system. For example, if one clicks on the [DataAbsentReason](http://build.fhir.org/valueset-data-absent-reason.html) link describing the Observation.dataAbentReason element one will see the bold title **http://hl7.org/fhir/ValueSet/data-absent-reason**. However, this element is NOT to be used in the Coding.system element of the Observation.dataAbsentReason. A legal value for the field would be http://terminology.hl7.org/CodeSystem/data-absent-reason if one used the codes in the table from that coding system. The overall Value Set is a list of Coding Systems that maybe used in this element. However, when the code is selected, the system element takes on the code system from which that code came.

 - [Next: Obtaining the Observation.code](ObtainObservationCode.html)
 - [Previous: Nomenclature Codes](Nomenclaturecodes.html)

---

File: repos/HL7_SLASH_phd/input/pagecontent/CodeSystems.md

The following code systems are used in this implementation guide:

urn:iso:std:iso:11073:10101
 - This URN identifies the IEEE 11073-10101 nomenclature codes. These codes are used extensively in this profile.

http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7
 - This URL identifies the IEEE ASN.1 BITs field codes

http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaPHD
 - This URL identifies the Continua certified device and transports interface codes

http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaHFS
 - This URL identifies the Continua certified Health and Fitness interface codes

http://hl7.org/fhir/uv/phd/CodeSystem/PhdObservationCategories
 - This URL identifies the category cod(e) for PHD-generated observations


urn:oid:1.2.840.10004.1.1.1.0.0.1.0.0.1.2680
 - This OID identifies the IEEE EUI coding system

http://loinc.org
 - This URL identifies the LOINC coding system

http://hl7.org/fhir/ValueSet/observation-valueabsentreason
 - This URL identifies the FHIR data absent reason codes

http://hl7.org/fhir/uv/pocd/CodeSystem/measurement-status
 - This URL identifies the IEEE 11073 based measurement status codes that PHD and PoCD share


---

File: repos/HL7_SLASH_phd/input/pagecontent/CoincidentTimeStamp.md

In remote patient monitoring, data can arrive to the health care provider from any location on the planet. Given that PHDs are often unsynchronized, or have time clocks set by the user, or default factory times, or no time clock at all, and no time zone information, providing accurate time stamps to the health care provider is a challenge. There is an article published “Designing robust and reliable timestamps for remote patient monitoring”, J of Biomedical and Health Informatics, 19(5): 1718-1723, 2015 by Clarke, et.al. concerning this topic. Continua introduced additional guidelines to address this time reporting issue when propagating PHD data to remote destinations. The guidelines also address a means to report how reliable the time stamps are and a means to recover the original time stamps as reported by the PHD. This information is contained in the Coincident Time Stamp and appears in both Continua PCD-01 HL7 V2 messages and now FHIR.

The Coincident Time Stamp is a measurement taken by the PHG of the current time of the PHD at the current time of the PHG. If the PHG is better synchronized to NTP (Network Time Protocol) time than the PHD (which is currently the case for every market device), the PHG corrects the measurement times reported by the PHD by the difference between the two timelines. In other words, the PHG places the measurements on its time line. Since a Continua PHG is required to have the capability to synchronize to UTC and local time offset, many PHDs simply require the PHG to set its time, automatically synchronizing the two time lines. IEEE 11073-20601 PHDs are required to provide all measurements on a contiguous time line, so any time adjustment, whether by user or PHG, is reported in base-time offsets or date-time-adjustments. These events may require the PHG to create new Coincident Time Stamps.

The time properties of the PHD and PHG are in the PHD Device and PHG Device resource property elements, respectively. From these properties one can determine whether the PHG or PHD is better synchronized to NTP.

Observation resources reference the Coincident Time Stamp Observation in the Observation.derivedFrom element.

### Coincident Time Stamp Basics
The coincident time stamp is a measurement of the current time of the PHD at the current time of the PHG. The information is reported in a special Observation resource following the Coincident Time Stamp Observation profile and referenced in the PHD Observation.derivedFrom element. When the PHG uses Absolute time or Base Offset time or no time at all the algorithm is as follows:

- If the PHG is better synchronized to NTP than the PHD
  - The current time of the PHG is reported in the Observation.effectiveDateTime element
  - The current time of the PHD is reported in the Observation.valueDateTime element
  - *The PHG corrects the measurement time stamps of the PHD by the difference*
- If the PHD is better synchronized to NTP than the PHG 
  - The current time of the PHG is not reported and the Observation.effectiveDateTime element is empty
  - The current time of the PHD is reported in the Observation.valueDateTime element
  - *The PHG reports the time stamps of the PHD unchanged*
- If the PHD does not report time stamps in its measurements, there is no Coincident Time Stamp Observation for this measurement and *the PHG uses the time of reception as the measurement time stamp*
- If the PHD does not report a current time but still reports time stamps in its measurement a **time fault** is indicated and
  - The current time of the PHG is reported in the Observation.effectiveDateTime element
  - The Observation.valueDateTime element is empty
  - The dataAbsentReason is set to "unknown"
  - *The PHG reports the time stamps of the PHD unchanged*
- If the PHD indicates a time fault
  - The current time of the PHG is reported in the Observation.effectiveDateTime element
  - The Observation.valueDateTime element is empty
  - The dataAbsentReason is set to "unknown"
  - *The PHG reports the time stamps of the PHD unchanged*

As an example, say the PHG reads the current time of the PHD and sees that it is six minutes behind it's time. If the PHG is better synchronized to NTP, the PHG will add six minutes to all the time stamps reported by the PHD. Note that the 'Observation' indicated above is for the Coincident Time Stamp Observation and not the measurement Observation.
### Handling Relative times
PHDs may also use one of two relative time clocks. One clock uses a 32-bit number to report time ticks in units of 1/8th millisecond and the other uses a 64-bit number to report time ticks in microseconds. With relative times there is no check for which device is better synchronized to NTP. The PHG must always map the value to UTC plus offset. The PHD's current time is reported in the Observation.valueQuantity element scaled to units of microseconds. This time provides the anchor time allowing the PHG to map the relative times reported in measurements to UTC plus offset.

A relative time stamp value in a measurement is mapped to UTC plus offset by taking the difference between the measurement time stamp and the anchor relative time. That difference is added to the anchor UTC time plus offset. For example, if the PHD is using the 1/8th millisecond relative time and the PHG obtains the current relative time 'anchor' value of 100000 at the PHG's current time 'anchor' value of 2017/11/27 05:31:44.555 -0500 then the PHG can map a measurement time stamp of 108000 to an actual time of 2017/11/27 05:31:45.555 -0500 since 108000 - 100000 = 8000 (one second).

Time faults are reported in the same manner as when PHDs use Absolute or Base-Offset time; the Observation.valueQuantity is empty and the dataAbsentReason is set to "unknown".

 - [Next: Non-IEEE 11073-20601 Devices](Non11073PHDDevices.html)
 - [Previous: Generating the Reported Time Stamp Observation Identifier](GeneratingtheReportedTimeStampIdentifier.html)



---

File: repos/HL7_SLASH_phd/input/pagecontent/CoincidentTimeStampObservationProfile.md

The Coincident Time Stamp Observation Profile is used to compare the timelines of the PHD with the timeline of the PHG. The primary elements are the Observation.effectiveDateTime which has the current time of the PHG and the Observation.valueDateTime or Observation.valueQuantity which has the current time of the PHD. The valueDateTime is used when the PHD uses either an Absolute or Base-Offset time clock and the valueQuantity is used when the PHD uses a relative time clock. The PHG reports its current time at the time it reads the current time of the PHD. For more details on the interpretation of the Coincident Time Stamp see the section [Coincident Time Stamp](CoincidentTimeStamp.html).

A PHD Observation will always reference a Coincident Time Stamp Observation if the measurement reported from the PHD contains a time stamp. It will not reference a Coincident Time Stamp Observation if the measurement contains no time stamp.

If a PHD has its time clock altered, a Date-Time-Adjustment attribute is sent to the PHG. The attribute can come in a live measurement, come by itself, or be part of the PM Segment information in persistently stored data. When a Date-Time-Adjustment occurs by itself, a new Coincident Time Stamp Observation is generated and all data sent after the adjustment will reference the new Coincident Time Stamp Observation. If it comes as part of the data, the Date-Time-Adjustment tells how much one has to adjust the time stamp of the measurement to bring it to the current time line of the agent.

The Coincident Time Stamp Observation is created every connection so data duplication is not an issue. Therefore the identifier element of this resource is not used in this profile.

The Structure Definition for the PHD Coincident Time Stamp Observation Profile is given [here](StructureDefinition-PhdCoincidentTimeStampObservation.html)

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

### Code
The code element is used to report the type of time clock used by the PHD. The PHG obtains the type of time clock and its current setting by reading the MDS attributes. There are four types of clocks as follows:

|Attribute|Type of clock|Description|FHIR mapping |
|-
|Date-and-Time|Absolute time|Wall-clock time with offset to UTC|Observation.code.coding.code = 67975|
|Base-Offset-Time|Base offset time|Wall-clock time with offset to some base time, often UTC|Observation.code.coding.code = 68226|
|Relative-Time|relative time|a sequence of ticks with 1/8<sup>th</sup> millisecond resolution|Observation.code.coding.code = 67983|
|HiRes-Relative-Time|relative time|a sequence of ticks with microsecond resolution|Observation.code.coding.code = 68072|

Standard Bluetooth Low Energy Health profiles (at the time of this writing) always use an Absolute Time.

### Subject
The subject element points to the PhdPatient resource using the logical id of the Patient resource, for example 'Patient/123546'

### Populating the PHG Current Time
The PHG is required to have the capability to report local time and offset to UTC. The PHG records its current time in the Observation.effectiveDateTime element regardless of the type of time clock used by the PHD unless the PHD has superior time synchronization than the PHG see the section [Coincident Time Stamp](CoincidentTimeStamp.html) on this topic. In that case, the Observation.effective[x] element is not populated.

### Populating the PHD Current Time
If the PHD uses an Absolute or Base-Offset time clock, the current time of the PHD is reported in an Observation.valueDateTime element. FHIR requires the presence of an offset to UTC so if the PHD uses an absolute time, the PHG adds its offset to the value. Since all PHDs currently use local transports, the PHD and PHG are logically in the same time zone and thus have the same offset to UTC. However, if the PHD is using Base offset time, the offset reported by the PHD is used even if it is NOT the offset of the PHG.

If the PHD uses a relative time clock the current tick time is reported in an Observation.valueQuantity element scaled to microseconds.

If the PHD has a time fault, the Observation.value[x] element is absent and an Observation.dataAbsentReason.coding.code element is present with the code "unknown". A time fault is reported if the PHD itself indicates a time fault or the PHD uses a time stamp in its measurements but does not report its current time.

|Attribute|FHIR mapping |
|-
|Date-and-Time.*value*|Observation.valueDateTime|
|Base-Offset-Time.*value*|Observation.valueDateTime|
|Relative-Time.*value*|Observation.valueQuantity.*value* = Relative-Time.*value* * 125|
|HiRes-Relative-Time.*value*|Observation.valueQuantity.*value* = HiRes-Relative-Time.*value*|

### Device
The Observation.device element is a reference to the Device resource representing the PHD that took the measurement.

### Additional information
There is no additional information reported in component elements in this profile.

### Examples:
An example of a coincident time stamp observation where the PHG is better synchronized to NTP time than the PHD is given [here](Observation-coin-example-1.html). An example where the PHD has a time fault is given [here](Observation-coin-example-timefault.html).


---

File: repos/HL7_SLASH_phd/input/pagecontent/CompoundNumericObservationProfile.md

The Compound Numeric Observation Profile is used when the PHD metric measurement is a vector or a set of related concepts which may be dimensionless. Examples would be the x, y, and z components of the acceleration, the systolic, diastolic, and mean components of a blood pressure measurement, or the set of package positions and associated questions in the Advanced Medication Monitor. Outside of the blood pressure, compound numeric measurements are relatively rare.

The measurement is a compound when the PHD metric contains one of the following attributes:

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

|Attribute|Value|Additional Information|
|-
|Compound-Basic-Nu-Observed-Value|set of 16-bit Mder SFLOATs|12-bit mantissa, 4-bit exponent|
|Compound-Simple-Nu-Observed-Value|set of 32-bit Mder FLOATs|24-bit mantissa, 8-bit exponent|
|Compound-Nu-Observed-Value|set of 32-bit Mder FLOATs|Complex attribute. Also contains<br/> metric-id<br/> measurement status<br/> unit-code|

These attributes contain a measurement value that is described by a set of multiple numbers such as the x, y, and z components of an acceleration. It is NOT used to report an array of measurements but only where the quantity being measured requires more than one number to describe it. Each individual entry of the compound value is reported in an Observation.component element. The Mder SFLOAT and FLOAT encodings of each entry indicate both precision and the number of significant figures. The Observation.component.valueQuantity.value element is required to honor the reported precision as indicated by the Mder S/FLOAT. See the section [Mder FLOATs and SFLOATs](MderFLOATsandSFLOATs.html) for instructions on handling Mder S/FLOATs and their encoding to the valueQuantity.

The Observation.component.code element is obtained from the Metric-Id-List attribute unless the measurement reported is a Compound-Nu-Observed-Value attribute. In that case the attribute itself has the metric type for each entry and that is used instead of the Metric-Id-List entries. The order of the entries in the Metric-Id-List are one-to-one with the order of the compound attribute entries. For example, if the Metric-Id-List in the Blood Pressure measurement has MDC codes for 'systolic", "diastolic" and "mean" in that order, the quantities in the compound attribute are the systolic, diastolic, and mean values, respectively.

The Observation.code element comes from the Type attribute and gives the general type of measurement. For example, the Type attribute might indicate "acceleration" or "non-invasive blood pressure". There is no Observation.value[x] entry. There may still be an Observation.dataAbsentReason element if, say, the Measurement-Status attribute indicates an invalid or otherwise overall failure value. If there is such an overall failure of the measurement, then there is no need to report the components.

The structure definition is given [here](StructureDefinition-PhdCompoundNumericObservation.html)

### Mapping Compound Numerics to FHIR
The following table shows how the compound numeric attributes are mapped to FHIR. Since the FHIR Quantity also contains the units the Unit-Code attribute value is required to complete the picture. The MDC units need to be mapped to UCUM when used in FHIR. A UCUM unit shall be used when it is available.

|Attribute|FHIR coding|
|-
|Compound-Basic-Nu-Observed-Value.*valueN*<br/>Unit-Code.*code*<br/>Metric-Id-List.*codeN*|Observation.component*N*.valueQuantity.value<br/>Observation.component*N*.valueQuantity.code  (as UCUM)<br/>Observation.component*N*.code.coding.code|
|Compound-Simple-Nu-Observed-Value.*valueN*<br/>Unit-Code.*code*<br/>Metric-Id-List.*codeN*|Observation.component*N*.valueQuantity.value<br/>Observation.component*N*.valueQuantity.code  (as UCUM)<br/>Observation.component*N*.code.coding.code
|Compound-Nu-Observed-Value.*valueN*<br/>Compound-Nu-Observed-Value.*unitN*<br/>Compound-Nu-Observed-Value.*metric-idN*<br/>Compound-Nu-Observed-Value.*statusN*|Observation.component*N*.valueQuantity.value<br/>Observation.component*N*.valueQuantity.code  (as UCUM)<br/> Observation.component*N*.code.coding.code<br/>Observation.component*N*.dataAbsentReason|

### Conditional Create Identifier Generation
For a general description of the PHD Observation Identifier see the "PHD Observation Identifier" section in [PHD Base Observation Profile](StructureDefinition-PhdBaseObservation.html). The table below lists the items that make up the identifier.

|Entry|value|Additional information|
|-
|device|"PHD Device.identifier.value"|This value is the PHD IEEE EUI-64 system identifier|
|patient|"Patient.identifier.value-Patient.identifier.system" or<br/>provided logical id|The dashes are part of the identifier. <br/>When the service provider gives the PHG a pre-determined patient logical id the PHG creates no Patient resource and has no patient information. In that special case the provided logical id is used|
|type|"Observation.code.coding.code"|See [Obtaining the Observation.code](ObtainObservationCode.html)|
|value|"Observation.component*N*.valueQuantity.value" or<br/>"Observation.component*N*.dataAbsentReason.coding.code"|The data absent reason code is used if there is no value|
|units|"Observation.component*1*.valueQuantity.code"|When not a Compound-Nu-Observed-Value attribute the units are the same for each entry so only one unit code is needed|
|valueUnits|"Observation.component*N*.valueQuantity.value" or <br/> "Observation.component*N*.dataAbsentReason.coding.code"<br/>followed by the UCUM unit code for each entry|In the Compound-Nu-Observed-Value the unit code can be different for each entry|
|reported PHD timestamp|"timestamp"|See [Generating the PHD Reported Time Stamp](GeneratingtheReportedTimeStampIdentifier.html)|
|supplemental types|"Supplemental-Types.*N*-"|A sequence of 32-bit MDC codes separated by a dash|

The final identifier is made by concatenating the entries above as follows:
 - "device-patient-type-value-units-reported PHD timestamp-supplemental types" for the Compound-Basic/Simple-Nu-Observed-Value cases.
   - Example of a blood pressure measurement using absolute time and mmHg; the units are the same for each entry: "FEEDABEDEAD2345-sisan34id-23.654.6.6.12.3-150020-100-60-80-mmHg-20170114173041"
 - "device-patient-type-valueUnits-reported PHD timestamp-supplemental types" for the Compound-Nu-Observed-Value case.
   - There are no specializations which use the Compound-Nu-Observed-Value attribute.

### Additional Numerical Measurement Information
IEEE 11073-20601 numeric metric measurements have some additional optional attributes that are used only for numerics. When they occur, these additional attributes provide further information about the measurement. An example of such a numeric-only additional attribute is one that describes the accuracy of the measurement. The accuracy is a measure of the deviation of the actual measurement from the reported measurement. Consequently, 'accuracy' is not a concept that makes any sense in the context of a measurement which is one or more of a finite set of enumerated codes such as a glucose-monitor meal association (breakfast, snack, fasting, etc.), and thus the attribute is not used in Enumeration metrics.

As in the PhdBaseObservation profile, an Observation.component element is used to contain the additional information. Only the Accuracy attribute is used for compound numerics. The other numeric-specific attributes are not structured to handle compounds.

#### Accuracy
The Accuracy attribute gives the maximum deviation as an absolute value of the reported measurement from the actual measurement *over the entire range of the measurement*. The reported accuracy is, thus, static and does not vary over the range of the measurement. It shall be reported if the PHD provides it and it is not corrupted. It is in the units of the measurement itself. This kind of measurement may not make sense to report with some compound measurements, especially in the case of the Compound-Nu-Observed-Value as each element could have different units.

The entries are as populated as follows:

|Observation.component element|entry|Additional Information|
|-
|code.coding.code|67914|This is the MDC code for the Accuracy attribute|
|code.coding.system|urn:iso:std:iso:11073:10101|Indicates the MDC coding system|
|code.text|optional but|Should contain the reference id MDC_ATTR_NU_ACCUR_MSMT along with any other additional text|
|valueQuantity.value|the value|This is accuracy value|
|valueQuantity.unit|optional ||
|valueQuantity.system|http://unitsofmeasure.org |Indicates the UCUM coding system|
|valueQuantity.code|shall be the UCUM code of the primary measurement|Assumes the units are the same for all components|

### Examples:
This example shows a [blood pressure](Observation-compound-numeric-observation.html) measurement. The important item to note is that there is no value[x] element in the 'primary' measurement. The set of values describing the compound are in the value[x] elements of the Observation.component elements.









---

File: repos/HL7_SLASH_phd/input/pagecontent/ContinuaHealthFitnessCodes.md

These codes are used to express the Health and Fitness interfaces.

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

|Health & Fitness Device Class| Health and Fitness interface code|  Reference name|
|-
|PCD-01 web services|   0   |observation-upload-soap|
|Consent enabled PCD-01 web service|    1   |consent-enabled-soap|
|Capability exchange|   2   |capabilities|
|PCD-01 upload using hData| 3   |observation-upload-hdata|
|Consent enabled PCD-01 using hData|    4   |consent-enabled-hdata|
|Questionnaire CDA| 5   |questionnaire|
|Authenticated Persistent Sessions| 6   |aps|
|FHIR resource upload|  7   |observation-upload-fhir|

---

File: repos/HL7_SLASH_phd/input/pagecontent/ContinuaPersonalAreaNetworkCodes.md

These codes are used to express the Continua Personal Area Network (PHD) interfaces. The codes express both the transport (Bluetooth, USB, etc.) and specialization (Blood pressure, thermometer, glucose, etc.).

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

The codes are generated by the following relation:

PHD transport code = transport code X 8192 + (specialization term code - 4096)

The transport code (Tcode) has the following values:

|Transport Code|Transport|
|-
|0|Continua version 1.0|
|1|USB|
|2|Bluetooth HDP|
|3|ZigBee|
|4|Bluetooth Low Energy|
|5|NFC|

The special Tcode of 0 is for Continua version 1.0 when there was no transport component in the reported certified PHD interface codes.

A sample of the most common specialization term codes

|Specialization|MDC term code|Reference Identifier|
|-
|Generic 20601|4169|MDC_DEV_SPEC_PROFILE_GENERIC|
|Pulse Oximeter|4100|MDC_DEV_SPEC_PROFILE_PULS_OXIM|
|Electro cardiograph|4102|MDC_DEV_SPEC_PROFILE_MIN_ECG|
|Blood Pressure Cuff|4103|MDC_DEV_SPEC_PROFILE_BP|
|Thermometer|4104|MDC_DEV_SPEC_PROFILE_TEMP|
|Respiration rate|4109|MDC_DEV_SPEC_PROFILE_RESP_RATE|
|Weight Scale|4111|MDC_DEV_SPEC_PROFILE_SCALE|
|Glucose Monitor|4113|MDC_DEV_SPEC_PROFILE_GLUCOSE|
|Coagulation meter |4114|MDC_DEV_SPEC_PROFILE_COAG|
|Insulin Pump|4115|MDC_DEV_SPEC_PROFILE_INSULIN_PUMP|
|Body Composition Analyizer|4116|MDC_DEV_SPEC_PROFILE_BCA|
|Peak Flow meter|4117|MDC_DEV_SPEC_PROFILE_PEAK_FLOW|
|Sleep Apnea Breathing Equipment|4120| MDC_DEV_SPEC_PROFILE_SABTE|
|Continuous Glucose Monitor|4121|MDC_DEV_SPEC_PROFILE_CGM|
|Cardiovascular Device|4137|MDC_DEV_SPEC_PROFILE_HF_CARDIO|
|Strength Equipment|4138|MDC_DEV_SPEC_PROFILE_HF_STRENGTH|
|Independent Activity/Living Hub|4167|MDC_DEV_SPEC_PROFILE_AI_ACTIVITY_HUB|
|Medication Monitor|4168|MDC_DEV_SPEC_PROFILE_AI_MED_MINDER|

---

File: repos/HL7_SLASH_phd/input/pagecontent/DefinitionMetricMsmt.md

The IEEE 11073-20601 protocol is not only extensible but self-describing. The PHG does not need to know, in advance, anything about the type of measurements the PHD supports. All this information is provided in the protocol exchanges. That exchange may involve the sending of data that is not a measurement. For example the user may change the units on a weight scale from pounds to kilograms while associated with a PHG. The scale will inform the PHG of this change. If that change is sent without an accompanying weight, the incidence of the change alone makes no sense to send downstream. Consequently, a measurement is only reported if the PHD sends one of twelve attributes in the metric event (called an Observation Scan in 11073-20601 language). These attributes are:

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

|Measurement Attribute|Description|
|-
|Basic-Nu-Observed-Value|Contains a single number encoded as an Mder SFLOAT\*|
|Simple-Nu-Observed-Value|Contains a single number encoded as a Mder FLOAT\*|
|Compound-Basic-Nu-Observed-Value|Contains multiple numbers encoded as Mder SFLOATs\*|
|Compound-Simple-Nu-Observed-Value|Contains multiple numbers encoded as Mder FLOATs\*|
|Nu-Observed-Value|Contains single number encoded as an Mder FLOAT\* along with units and type data|
|Compound Nu-Observed-Value|Contains multiple numbers encoded as an Mder FLOATs\* with units and type data|
|Simple-Sa-Observed-Value|Contains a sequence of scaled periodic numeric values|
|Enum-Observed-Value-Simple-OID|Contains a measurement that is an MDC code|
|Enum-Observed-Value-Basic-Bit-Str|Contains a measurement that is an ASN1 BITs string in 16-bits|
|Enum-Observed-Value-Simple-Bit-Str|Contains a measurement that is an ASN1 BITs string in 32-bits|
|Enum-Observed-Value-Simple-Str|Contains a measurement that is human-readable string (rare)|
|Enum-Observed-Value|Contains a measurement that is a 32-bit ASN1 BITs, MDC code, or String plus type data|

\*Mder Floats are described [here](MderFLOATsandSFLOATs.html)

A metric *measurement* always contains one and only one of the above attributes. If a metric event is sent by the PHD that does NOT contain one of the 12 measurement attributes, the metric event is providing information so the PHG can decode any subsequently sent measurements.

However, some of the attributes represent the same type of measurement such as the Basic-Nu-Observed-Value and Simple-Nu-Observed-Value. The only difference between the two is one of them uses 16 bits (Mder SFLOAT) to represent the measurement and the other 32 bits (Mder FLOAT). That difference is solely for protocol efficiency. In the end, these 12 measurement attributes reduce to 6 different measurement types

 - a single number (Basic-, Simple-, and Nu-Observed-Value)
 - a vector (Compound-*-Nu-Observed-Value)
 - a sequence of periodic data (Simple-Sa-Observed-Value)
 - a code (Enum-Observed-Value-Simple-OID)
 - a set of binary states or events (Enum-Observed-Value-*-Bit-Str)
 - a human readable string (Enum-Observed-Value-Simple-Str)
 
 resulting in the 6 measurement profiles described in this guide. The Enum-Observed-Value can be any one of a code, set of binary events, or a human readable string depending upon parameters.

Again, these details are only of concern to the *encoder* of the FHIR resources, the *consumer* of the FHIR resources is not concerned with the types of attributes delivered by the PHD.

 - [Next: Protocol Only Metric Attributes](MetricAttributesofNoInterest.html)
 - [Previous: DIM to FHIR Mapping; Details](DIMtoFHIRMappingDetails.html)

 






---

File: repos/HL7_SLASH_phd/input/pagecontent/DeviceIdentifierCodes.md

The Continua Device Identifier codes provide a means to distinguish between system ids and transport addresses in the Device.identifier element.


<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

### List of Identifier types

|code|Description|
|-
|SYSID|System Identifier|
|BTMAC|Bluetooth Address, both classic or Low Energy|
|ETHMAC|Ethernet MAC address|
|USB|USB 'address' (PID.VID)|
|ZIGBEE|ZigBee Address|

More codes may be added in the future.


---

File: repos/HL7_SLASH_phd/input/pagecontent/DIMtoFHIRMapping.md

There are two classes of IEEE 11073-20601 objects that are relevant for uploading; the Medical Device System (MDS) object and the Metric object. The remaining objects assist in the PHD to PHG exchange protocol and are not of interest downstream. The MDS object is used to describe the device features and properties. The Metric object is used to model measurement types. A PHD contains a single MDS object and may contain many Metric objects, each one representing a single measurement. There are three sub-classes of Metric objects, Numeric, Real-Time-Sample-Array (RTSA), and Enumeration. Numeric Metric objects are used to describe all measurements that are either scalars or vectors. Enumeration Metric objects are used to describe measurements that are represented by a finite set of items. RTSA Metric objects are used to represent a sequence of periodic numeric scalar measurements. An RTSA *could* be expressed as a sequence of scalar numeric metrics but that would be inefficient.

The static attributes of the MDS object are mapped to a Device resource and the 'measurement' attributes of the Metric objects are mapped to Observation resources. The description 'measurement' is used as there are some attributes, such as the attribute value map, that only aid in the formatting of the Application Protocol Data Unit (APDU) packets and have nothing to do with the measurement values themselves. Those attributes are not of interest in the 20601 to FHIR mapping.

### The Metric 'Model' ###
The 20601 metric model describes a measurement using a value, an optional unit, a type (to indicate what the measurement is), an optional time stamp, and an optional set of extra descriptions.This information is present in the Metric Object attributes.

#### The Metric Model Values ####
 The Metric Object handles six types of measurement values:

 - **scalar values**: Scalars are the familiar simple quantities such as temperature and glucose concentration. Scalars are mapped to Observation.valueQuantity elements.
 - **Compound or vector values**: Compound quantities are measurements that need more than one value to describe, such as the x, y and z components of an acceleration or the systolic, diastolic, and MAP components of a blood pressure. Each vector sub-value is mapped to an Observation.component.valueQuantity element.
 - **coded values**: Coded values are used when the measurements are described by a finite set of options such as the meal context of a glucose measurement. The options might be one of breakfast, lunch, dinner, snack, fasting, etc. A code is used for each option. Coded values are mapped to Observation.valueCodeableConcept elements.
 - **BITs values**: BITs values are measurements where each bit in a 16- or 32-bit 'integer' represents an event or state. An event would be something like 'marginal signal' in a pulse oximeter. An event is only of interest when it occurs and the bit is set when the event occurs. A state, on the other hand, would be something like 'averaging-on' or 'averaging-off'. Both settings of a state are of interest. BITs values are used when multiple events and/or states can occur simultaneously. The mapping of BITs values is complicated as FHIR (and HL7 in general) has no support for this type of measurement. Instead Continua has developed a code system where each bit position is mapped to a code. Each code is mapped to an Observation.component.code element and the bit setting is mapped to a binary Observation.component.valueCodeableConcept element.
 - **human readable strings**: String values are just that; a line of arbitrary text. These rarely used values cannot be generically processed by a machine but are only meant for display. An example of such a measurement would be the program name of a workout on a piece of cardio equipment at a gym. String values are mapped to Observation.valueString elements.
 - **sequences of periodic scalars**: Waveform traces are a sequence of periodic scalars that may have a high frequency such as 1000 samples per second. An example of such a measurement would be a digitized ECG trace. Waveforms are mapped to Observation.valueSampledData elements.

##### Units
Only scalar and vector values may have a unit. In earlier versions of 20601 it was possible to have a Unit-Code attribute in an Enumeration Metric Object. This inconsistency has been corrected in the latest versions of the 20601 standard. In addition, there is no specialization that uses a unit code in an enumeration measurement. Thus it is anticipated that the implementer will never have to handle a unit code attribute when the metric measurement contains one of the enumeration value attributes.

In 20601, units are expressed as 11073-10101 nomenclature codes. In FHIR, these unit nomenclature codes are mapped to UCUM codes. When an equivalent UCUM code is known this UCUM code shall be used. To keep with the generic and future interoperability design, an implementation shall use the MDC code if it does not know what the UCUM code is for the given unit code. This situation can arise if a new PHD specialization needs to use units that are not currently defined in the existing set of unit codes. When this happens, the Quantity.system will point to the MDC system and the code will be the 32-bit unit code received from the PHD.

#### The Metric Model Type ####
All Metric objects contain one or more attributes that specify a 11073-10101 nomenclature code expressing what the measurement is. In most cases this code is given by the Type attribute. In more complex cases the Type attribute alone is not sufficient; the decoder must look for the existence of several additional but optional attributes. If these additional attributes, such as the Metric-Id and Metric-Id-Partition among others, are present, their values, along with the Type attribute are needed to determine the final code. In the end, the decoder gets a single code specifying what the 'overall' measurement is. For example, a body temperature, body mass, medication dosage, or non-invasive blood pressure. The overall code is mapped to the Observation.code element. The expression 'overall' is used because in compound cases, the decoder must look at additional metric attributes to obtain the sub-types of the measurement, for example the systolic, diastolic, and MAP values of the non-invasive blood pressure. These sub-type codes are mapped to Observation.component.code elements representing each sub-type.

#### The Metric Model TimeStamp ####
Time stamps are more complicated because PHDs have different types of time clocks, may include a duration, may be out of sync when using wall-clock times, and may send no time stamp at all. The PHG is responsible for placing the measurements on a UTC synchronized time line with local offset. That includes using the time of reception as the time stamp if the PHD sends no time stamp, mapping simple relative time 'ticks' to UTC and local offset, and correcting the wall clock time stamps reported by PHDs when they are wrong. For auditing purposes, a summary of this work by the PHG is reported in the so-called Coincident Time Stamp Observation resource. In the end, the PHG maps time stamps to the Observation.effectiveDateTime if the time stamp is a point in time such as a body temperature, or the Observation.effectivePeriod if the metric contains a Measure-Active-Period (duration) attribute such as a running session. A reference to the Coincident Time Stamp Observation, if needed, is placed in the Observation.derivedFrom element.

#### The Metric Model Descriptions ####
The Metric Object contains a set of optional attributes that provide additional information about the measurement. The Supplemental-Types and Accuracy are examples of such attributes. When these attributes occur, they are mapped to component elements in the FHIR Observation resource. The component.code is given by the 11073-10101 nomenclature code of the respective attribute. The component.value[x] is given by the attribute value(s). In the case of the Accuracy, the value[x] is a valueQuantity, and in the case of the Supplemental-Types, the value[x] is a valueCodeableConcept. Since the Supplemental-Types is actually a list of codes, one may need several component elements.

The examples below show the most common basic measurement types where the PHD provides one of the wall-clock type time stamps.

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

### Scalar Numeric Metric Object Mapping Example

The simplest example of a mapping of a Numeric Metric object to a FHIR Observation resource is as follows

|IEEE Attribute|Meaning|Observation element|
|-
|Type|Tells what the measurement is as an IEEE 11073-10101 code|code|
|Absolute-Time-Stamp<br/>Base-Offset-Time-Stamp|Gives the time of the measurement|effectiveDateTime|
|Simple/Basic-Nu-Observed-Value|Gives the value of the measurement|valueQuantity.value|
|Unit-Code|Gives the units of the measurement as an IEEE 11073-10101 code. Shall be translated to the equivalent UCUM code and system when available|valueQuantity.code|

This mapping applies to several simple types of PHD measurements that are scalars, for example body temperature, body mass, body height, glucose concentration, among many others. This Implementation Guide specifies a structure definition profile that applies to all scalar Numeric Metric measurements.

Scalar numeric measurements are the most common type of PHD measurement.

### Compound Numeric Metric Object Mapping Example

The simplest example of a mapping of a Compound Numeric Metric object whose value has *N* components to a FHIR Observation resource is as follows:

|IEEE Attribute|Meaning|Observation element|
|-
|Type|Tells what the 'overall' measurement is as an IEEE 11073-10101 code|code|
|Absolute-Time-Stamp<br/>Base-Offset-Time-Stamp|Gives the time of the measurement|effectiveDateTime|
|Metric-Id-List.*entryN*|Gives the code of *N*th component of the measurement|component*N*.code|
|Compound Simple/Basic-Nu-Observed-Value.*valueN*|Gives the *N*th component of the measurement|component*N*.valueQuantity.value|
|Unit-Code|Gives the units of the *N*th component of the measurement as an IEEE 11073-10101 code. Shall be translated to the equivalent UCUM code and system when available|component*N*.valueQuantity.code|

This mapping applies to simple types of PHD measurements that are represented by vectors, for example, the blood pressure and the user feedback. The Type attribute indicates what the overall measurement is, and the Metric-Id-List attribute indicates what each component of the overall measurement is. In the blood pressure case, the Type states that this is a non-invasive blood pressure and the Metric-Id-List attribute identifies the systolic, diastolic, and MAP components. This implementation guide specifies a structure definition profile that applies to all compound Numeric Metric measurements.

Outside of the blood pressure monitor, compound numeric measurements are relatively uncommon in PHDs.

### Enumeration Coded Value Metric Object Mapping Example
The simplest example of a mapping of Enumeration Metric object, where the enumerated measurement is a code, to a FHIR Observation resource is as follows:

|IEEE Attribute|Meaning|Observation element|
|-
|Type|Tells what the measurement is as an IEEE 11073-10101 code|code|
|Absolute-Time-Stamp<br/>Base-Offset-Time-Stamp|Gives the time of the measurement|effectiveDateTime|
|Enum-Observed-Value-Simple-OID|Gives the value of the measurement as IEEE 11073-10101 code|valueCodeableConcept|

This mapping applies to simple types of PHD measurements whose value is given by a finite list of codes, for example the pulsatile characteristics measurement of a pulse oximeter or the meal context associated with a glucose measurement. In the pulse oximter case there are three codes defined that can be reported; trigger on a beat, trigger on a maximum inrush, and no pulsatile event occurred. The latter is only reported by the device in special conditions and is usually not reported. This implementation guide specifies a structure definition profile that applies to all coded Metric measurements.

### Enumeration BITs Value Metric Object Mapping Example
The ASN.1 BITs measurement is the most difficult measurement class to map because HL7 does not support this measurement type. An ASN.1 BITs value is a 16 or 32-bit integer where each bit can mean something. The bit is either set (value = 1) or cleared (value = 0). This type of measurement is typically used to report events, statuses, or conditions when more than one of these situations can happen at the same time. They are classed as either events or states. To map this measurement to HL7 the BITs integer needs to be converted to codes. Continua has created a code system for this purpose allowing one to map a BITs value to a set of valueCodeableConcepts. For details about the code system and links to the code system itself see [ASN1 BITs Code System](ASN1BITsCodeSystem.html). The code system has a code for each possible setting, so a 16/32-bit ASN.1 BITs value can result in up to 16/32 codes. Since a BITs value can contain multiple settings, each setting is mapped to an Observation.component.

In the latest version of IEEE 11073-20601, two sets of support attributes for an ASN1 BITs measurements have been added. The Capability-Mask-Simple/Basic attribute indicates whether a given bit is supported (set) or not (cleared). The State-Flag-Simple/Basic attribute indicates whether a given bit is an event (cleared) or state (set). Unsupported bits do not need to be reported and cleared event bits do not need to be reported. Both set and cleared state bits need to be reported. Undefined bits are never reported (what bits are defined is given in the respective specialization documents).

Since the earlier versions of the 20601 standard do not provide state/event information, the [ASN1 BITs Code System](ASN1BITsCodeSystem.html) does. There is no way to determine if a given device supports a defined bit setting so one has to assume that all defined settings are supported. Since most BITs measurements are events, the lack of support information tends not to be a problem.

The simplest example of a mapping of an ASN1 BITs enumeration object to a FHIR Observation resource is as follows:

|IEEE Attribute|Meaning|Observation element|
|-
|Type|Tells what the measurement is as an IEEE 11073-10101 code|code|
|Absolute-Time-Stamp<br/>Base-Offset-Time-Stamp|Gives the time of the measurement|effectiveDateTime|
|ASN1 Code for BIT *N*|Gives the code of *N*th BIT setting|component*M*.code|
|Enum-Observed-Value-Simple/Basic-Bit-Str.*BitN*|Gives the *N*th bit setting as binary yes/no|component*M*.valueCodeableConcept (Y/N)|

*M* (the number of the component) is different from *N* (the bit-position) because cleared event bits do not need to be reported. What is not shown in the table is that the ASN1 Code entered in the component*M*.code element can be generated from data sent by the PHD. The ASN1 code is generated by converting the 32-bit code from the Type attribute to a string, concatenating a dot (.) followed by the Mder bit position *N*. A reader will still need to refer to the ASN1 code dictionary to interpret the meaning.

This implementation guide specifies a structure definition profile that applies to all ASN1 Bits Metric measurements.

### PhdDeviceMetric
The IEEE 11073-10206 ACOM specification and the Bluetooth SIG GHS specifications require a compliant device to publish the list of supported observation types. This list of observation types can be mapped to a set of [PhdDeviceMetric resources](StructureDefinition-PhdDeviceMetric.html). The GHS specifications also support an optional Observation Schedule descriptor. The information in this descriptor can be mapped to the DeviceMetric.measurementPeriod. 

### The Devil is in the Details
Unfortunately, the Metric object to Observation resource mapping is not always a simple one-to-one relation between IEEE 11073-20601 attributes and Observation elements as shown in the tables above. For example, the code that ends up in the Observation.code element does not always come from the Type attribute. The PHD decoder (the endpoint that receives and decodes IEEE 20601 data) will, in general, need to look at other attributes, should they be sent, to get the final code to enter in the Observation.code element. The same goes for the unit code. The Unit-code attribute can be overridden if certain other attributes exist.

However, this complexity is of no concern to the *consumer* or reader of the FHIR resources, only to the PHD decoder and creator of the FHIR resources, such as the Continua PHG.

 - [Next: General Notes to Consumers of FHIR Data](GeneralNotestoConsumers.html)
 - [Previous: Generic and Extensible Model](GenericModel.html)


---

File: repos/HL7_SLASH_phd/input/pagecontent/DIMtoFHIRMappingDetails.md

In this section the details of the mapping of the IEEE 11073-20601 Metric objects to FHIR resources are discussed.

 - [Definition of a Metric Measurement]({{ output }}DefinitionMetricMsmt.html)
 - [Protocol Only Metric Attributes]({{ output }}MetricAttributesofNoInterest.html)
 - [Mder FLOATs and SFLOATs]({{ output }}MderFLOATsandSFLOATs.html)
 - [Nomenclature Codes]({{ output }}Nomenclaturecodes.html)
 - [FHIR’s Codeable Concepts]({{ output }}CodeableConcepts.html)
 - [Obtaining the Observation.code]({{ output }}ObtainObservationCode.html)
 - [Obtaining the Unit code]({{ output }}ObtainUnitCode.html)
 - [ASN1 BITS Code System]({{ output }}ASN1BITsCodeSystem.html)
 - [The Observation Identifier]({{ output }}ObservationIdentifier.html)
 - [Generating the Reported Time Stamp Observation Identifier]({{ output }}GeneratingtheReportedTimeStampIdentifier.html)
 
 - [Previous: General Notes to Consumers of FHIR Data]({{ output }}GeneralNotestoConsumers.html)

 

---

File: repos/HL7_SLASH_phd/input/pagecontent/downloads.md

### Package File

The following package file includes an NPM package file used by many of the FHIR tools.  It contains all the value sets, profiles, extensions, list of pages and urls in the IG, etc defined as part of this version of the Implementation Guides. This file should be the first choice whenever generating any implementation artifacts since it contains all of the rules about what makes the profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply in order to make a conformant implementation. See the overview on validating [FHIR profiles and resources]({{site.data.fhir.path}}validation.html):

- [Package](package.tgz){::download="true"}

### Examples

all the examples that are used in this Implementation Guide available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)

### Downloadable Copy of Entire Specification

A downloadable version of this IG is available so it can be hosted locally:

- [Downloadable Copy](full-ig.zip)


---

File: repos/HL7_SLASH_phd/input/pagecontent/GeneralNotestoConsumers.md

A consumer of the PHD profile resources will find most of the mapping is as expected if they are familiar with the Patient, Device, and Observation resources. Though the spectrum of PHDs is extensive, the generic modeling approach results in a similar set of elements being used in all cases, simplifying the reading task for the consumer. For example, the following elements are all that is needed to obtain the information for most measurements:


|Resource|element|Meaning|
|-
|Observation|.code|Tells what the measurement is|
|Observation|.effectiveDateTime|Tells when the measurement was taken|
||.effectivePeriod||
|Observation|.valueQuantity.value|Gives the value of the measurement if a number|
||.valueCodeableConcept|Gives the value of the measurement if a code|
||.valueSampledData|Gives the values when the measurements are a periodic sequence|
||*value absent with* dataAbsentReason|value has an error|
||*value absent with* no dataAbsentReason|indicates the measurement is a vector or set of binary (set/cleared) events or states and is found in component elements|
|Observation|.interpretation.value|Gives some special conditions about the overall measurement that are not 'complete' errors such as 'questionable'. Infrequent.|
|Observation|.component.code|Tells what the individual vector sub-value is or event/state is|
||.component.valueQuantity|gives the sub value when the measurement is a vector|
||component.valueCodeableConcept|gives whether the event or state is set or cleared|
||*sub-value absent*|a dataAbsentReason is present indicating the sub value is in error or the event/state is unsupported|
||component.interpretation|Gives some special conditions about the measurement sub-value that are not 'complete' errors such as 'questionable'. Infrequent.|

 - [Next: DIM to FHIR Mapping Details](DIMtoFHIRMappingDetails.html)
 - [Previous: DIM to FHIR Mapping; Basics](DIMtoFHIRMapping.html)


---

File: repos/HL7_SLASH_phd/input/pagecontent/GeneratingtheReportedTimeStampIdentifier.md

Note that this time stamp identifier is part of the Observation.identifier whose sole purpose is to perform a conditional create transaction. The identifier is not to be interpreted by a consumer of the resource and it should not be used for informational content.

This algorithm shows how one generates the time stamp as reported by the PHD for use in the Observation.identifier element. The Observation.identifier element is used in the PHD profiles to perform conditional creates and thus eliminate data duplication.

- If the PHD timestamp reports a tick counter the reported value will be encoded as the number of seconds it represents according to its resolution. 
   - For example, when a Bluetooth GHS sensor reports a tick counter of 12345678 with a millisecond resolution this will be encoded as "12345.678".

- If the PHD timestamp reports local or UTC time the reported value will be encoded as the number of seconds it represents since 2000-01-01  according to its resolution.
   - For example, when a Bluetooth GHS sensor reports a local or UTC time of 2021-11-22 11:56:30 with a milliseconds resolution this will be encoded as "690897360.567"

- If the PHD timestamp reports a TZ/DST offset the reported value will be appended as a decimal value, including a + or - sign.
   - For example, when a Bluetooth GHS timestamp reports an offset of +4 (1 hour) this will be appended as "+4". Combined with the previous examples, this becomes "690897360.567+4"

- If the PHD Observation also includes a Measurement-duration attribute this will be appended to the endcoded timestamp as a ".." followed by the duration encoded according to the timestamp resolution.
   - For example a duration of 1 second with a millisecond resolution will be appended as "..1.000". Combined with the previous example this becomes "690897360.567+4..1.000"
 
 - [Next: The Coincident Time Stamp](CoincidentTimeStamp.html)
 - [Previous: The Observation Identifier](ObservationIdentifier.html)


---

File: repos/HL7_SLASH_phd/input/pagecontent/GenericModel.md

To address the list of all issues and conditions relevant to remote patient monitoring, this IG requires PHDs and PHGs to be based upon the IEEE 11073-10206 ACOM data model where observations and device information are represented in a set of abstract objects. These objects contain attributes that describe the objects. In some sense, the IEEE 11073-10206 objects are analogous to FHIR resources, and the attributes are analogous to FHIR resource elements. The attributes, like resource elements, have specified data types. All IEEE 11073-10206 PHD specializations from thermometers to home ventilators use the same set of objects and associated attributes. The simplest PHDs, like a thermometer, generate only one type of observation whereas more complex PHDs like a home ventilator generate several different types. The sleep apnea breathing therapy equipment PHD defines more than 80 observation types.

In addition, the only PHD and PHG device information that is required to be mapped is the information that is provided by protocol; the patient is not expected to provide this data. For example, the software revision will be mapped if provided in the system information transmitted by the PHD.

This Implementation Guide specifies how one maps the IEEE 11073-10206 objects and their associated attributes to FHIR resources and resource elements. Using this approach, all PHDs based upon the IEEE 11073-10206 model, regardless of what it measures, can be handled by the PHG without requiring the PHG to view the values of the attributes; only the type of the attribute is used. Thus, a numeric attribute is always mapped the same way regardless of whether it is a temperature value or pulse rate value. In addition, if the IEEE 11073-10206 model PHDs are based upon does not change, PHD device types made in the future can also be mapped by current PHG implementations.

In the IEEE 11073-10206 Abstract information Content Model (ACOM), IEEE 11073-10101 nomenclature codes are used to indicate what the items are. Thus, a reader of FHIR resources mapped from these ACOM objects can decode any of these resources if it knows what the codes are. If a future device is deployed the reader will only need an update of its code dictionary to interpret the resource. A PHG uploader will not even need to update its dictionary to perform the mapping to FHIR as the codes are provided by the PHD through protocol. These features eliminate the need for remote updating and/or servicing of PHGs when new IEEE 11073-10206 PHDs are used.

Note -- IEEE 11073-10206 does not define a protocol, but requires protocols that support it to support a representation of the objects defined in the model. The Bluetooth SIG Generic Health Sensor Profile (GHSP) defines an ACOM compliant protocol.

 - [Next: DIM to FHIR Mapping; Basics](DIMtoFHIRMapping.html)
 - [Previous: Remote Patient Monitoring Considerations](RemotePatientMonitoringConsiderations.html)


---

File: repos/HL7_SLASH_phd/input/pagecontent/index.md

<p style="background-color: #ffefef; border:1px solid maroon; padding: 5px;">
This is the Continuous Integration Build of the Personal Health Device Implementation Guide, based on <a href="{{site.data.fhir.path}}">FHIR Version {{site.data.fhir.version}}</a>. 
See the <a href="{{site.data.fhir.canonical}}/history.html">Directory of published versions</a>.
</p>

This Implementation Guide (IG) defines the use of FHIR resources to convey measurements and supporting data from *communicating* Personal Health Devices (PHDs) to receiving systems for electronic medical records, clinical decision support, and medical data archiving for aggregate quality measurement and research purposes. PHDs are typically *consumer* devices designed to be used by people without medical background. These devices are often used in the home and/or on the patient's person and are a key element in any remote patient monitoring program. In most cases there is a Personal Health Gateway (PHG) that handles the PHD communications. The PHG translates the PHD data to the appropriate form and uploads it to the receiving systems. Uploads generated by compliant PHGs shall use this implementation guide when transforming the PHD data to FHIR resources.

<img src="PHD-context-simple.jpg" alt="PHD IG context diagram" style="width:100%">

A partner IG is the Point of Care Devices (PoCD) [Implementation Guide](http://build.fhir.org/ig/HL7/uv-pocd/). PoCDs focus on acute care and are operated by medical professionals. PoCDs are more complex than PHDs but both are based upon the IEEE 11073 Domain Information Model (DIM). The PoCD DIM is based upon the IEEE 11073 10201 standard while the PHD DIM is based upon the IEEE 11073-10206 standard. The purpose of both the PHD and PoCD IG is to assure that the device DIM data is mapped to FHIR in a standardized and consistent manner. Given that both IGs are based upon the IEEE 11073 DIM, the IGs are harmonized to the extent possible. Neither IG interprets the data or indicates what is to be done with the data once in FHIR form.

Those readers who are interested in *consuming* the uploaded data do not need to know anything about the IEEE 11073-10206 standard or the mapping algorithms defined in this IG. Instead one can go directly to the [Profile Consumers](ProfileConsumers.html) chapter. The [Overview](overview.html) chapter may also be of interest.

Those readers who *are* implementing a PHG are going to need an understanding of the IEEE 11073-10206 standard and the communication protocol used by the PHD being mapped. The Technical Implementation Guidance section gives an overview of the essential components of the IEEE 11073-10206 model and how its concepts are related to FHIR, but it is not a tutorial. The Profiles section gives the normative mapping between IEEE 11073-10206 concepts and FHIR resources, making several references to sub-sections in the Technical Implementation Guidance section for reminders. The IEEE 11073-10206 model is supported by the [Bluetooth SIG Generic Health Seonsor profile](https://www.bluetooth.com/specifications/specs/?types=adopted&keyword=GHS&filter=). The older IEEE 11073-20601 specificiation supports almost the same model and provides an application layer stateful protocol. This IG can be used with PHDs supporting one of these protocols.

It should be noted that this implementation guide bases its mapping algorithm on the IEEE 11073-10206 model and standard (IEEE 11073-10206 Personal health device communication - Abstract Content Model). The reason for this approach is that the IEEE standard provides a generic and extensible model for observations and a means to assure a consistent time management.

However, this choice does not mean that this guide is only of use for IEEE 11073-10206 compliant PHDs that use one of the mentioned protocols. Any PHD that provides a means to establish a PHG-validated consistent time stamp can use this guide. The mapping in this guide can be used with many existing PHDs and Bluetooth Low Energy PHDs, both proprietary and those following one of the specific Bluetooth Low Energy Health Device Profiles. See [Non-IEEE 11073 PHD Devices](Non11073PHDDevices.html) for more information.

[HL7 GitHub location](https://github.com/HL7/phd)

 - [Next: Overview](overview.html)



---

File: repos/HL7_SLASH_phd/input/pagecontent/MderFLOATsandSFLOATs.md

Mder FLOATs and SFLOATs are the IEEE 11073-20601 means of encoding floating point numbers. The primary reason for this encoding is to indicate the precision of the measurement. The SFLOAT is 16-bits and the FLOAT is 32-bits. In the SFLOAT, the most significant 4 bits is the exponent and the remaining 12 bits the mantissa. In the FLOAT, the most significant byte is the exponent and the remaining 24 bits the mantissa. Both the exponent and mantissa are signed.

The exponent gives the precision. It indicates where the decimal point goes in the mantissa. A negative exponent of -*N* moves the decimal point to the left *N* places and a positive exponent of +*N* moves the decimal point to the right *N* places.

Thus, it is possible in this encoding to distinguish between the value 2, 2.0, 2.00, etc. Numerically, they all have the same value, but 2.00 indicates that the value is two but taken with a sensor that has a precision to the hundredths.

The table below gives some examples of SFLOAT values and how they shall be encoded into the FHIR valueQuantity.value:

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

|SFLOAT Hex|SFLOAT decimal|exponent|mantissa|FHIR encoding|
|-
|0x0002|2|0|2|2|
|0xF014|61460|-1|20|2.0|
|0xE0C8|57544|-2|200|2.00|
|0x1002|4098|1|2|20|
|0x2002|8194|2|2|200|
|0x00C8|200|0|200|200|
|0x04D2|1234|0|1234|1234|
|0x0B2E|2862|0|-1234|-1234|

In the FLOAT case the above values would be encoded as follows:

|FLOAT Hex|FLOAT decimal|exponent|mantissa|FHIR encoding|
|-
|0x00000002|2|0|2|2|
|0xFF000014|4278190100|-1|20|2.0|
|0xFE0000C8|4261413064|-2|200|2.00|
|0x01000002|4098|1|2|20|
|0x02000002|33554434|2|2|200|
|0x000000C8|200|0|200|200|
|0x000004D2|1234|0|1234|1234|
|0x00FFFB2E|16775982|0|-1234|-1234|

#### Special Values
The Mder encoding also has a set of 5 reserved special values which represent some type of error condition. They are as follows:

|FLOAT Case|SFLOAT case|meaning|FHIR encoding|
|-
|0x007FFFFF|0x7FF|Not a Number (NaN)|.dataAbsentReason set to 'not-a-number'|
|0x007FFFFE|0x7FE|Positive Infinity (+inf)|.dataAbsentReason set to 'positive-infinity'|
|0x00800002|0x802|Negative Infinity (-inf)|.dataAbsentReason set to 'negative-ifinity'|
|0x00800000|0x800|Not at this resolution|.dataAbsentReason set to 'error'|
|0x00800001|0x801|Reserved for future use|.dataAbsentReason set to 'error'|

 - [Next: Nomenclature Codes](Nomenclaturecodes.html)
 - [Previous: Protocol Only Metric Attributes](MetricAttributesofNoInterest.html)

---

File: repos/HL7_SLASH_phd/input/pagecontent/MetricAttributesofNoInterest.md

Protocol-Only attributes are **not** mapped to FHIR.

In the IEEE 11073-20601 specification, measurements are mapped to Metric Objects. The Metric Object contains several attributes that are used to describe the measurement such as the Type, Unit-Code, and Simple-Nu-Observed-Value. However, it also contains attributes that are only of interest to the PHG for the purposes of decoding the measurement. For the purposes of optimization on the wire, the PHD only sends attributes that have changed when it sends a measurement. The PHG is expected to retain static and dynamic information. There are also techniques used to efficiently encode the data and tell the PHG how big and in what sense this data may come. To accomplish this encoding the PHD sends keys describing the encoding and the PHG uses these keys to decode the data. These keys are not meant for security purposes but just to minimize data transmission size.

Attributes are also used for these keys. Once the measurement has been reconstructed using these keys and the retained static and dynamic data, the attributes providing these keys are no longer of interest. This guide will refer to these attributes as 'Protocol-Only' attributes.

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

|Protocol-Only Attribute|Description|
|-
|Handle|Provides the PHG with a key to access the static and dynamic information associated with this metric|
|Metric-Spec-Small|Gives info about the delivery and nature of the metric events|
|Attribute-Value-Map|Provides a means to compact attribute values|
|Metric-Structure-Small|Gives info about the number of entries in compound attributes|
|Capability-Mask-Basic|Indicates which of the 16-bit ASN1 BITs are supported by PHD|
|Capability-Mask-Simple|Indicates which of the 32-bit ASN1 BITs are supported by PHD|
|State-Flag-Basic|Indicates whether the 16-bit ASN1 BITs are a 'state' or an 'event'|
|State-Flag-Simple|Indicates whether the 32-bit ASN1 BITs are a 'state' or an 'event'|

The last four attributes are essential for the decoder to properly map ASN1 BITS measurements to FHIR using the ASN1 coding system but the attributes themselves are not of interest once mapped. For example, the Capability-Mask-* attribute tells which bits are supported by the PHD. The encoder needs to know which bits these are but once known, the attribute value itself is no longer of interest. The State-Flag-* indicates to the decoder whether the bit is an event or a state. If an event, only the set case (event occurred) needs to be recorded, for example, 'sensor malfunctioned' in the sensor status measurement of several specializations. If a 'state' both the set or cleared case needs to be reported, for example 'patient in room' or 'patient not in room' in the independent living case.

 - [Next: Mder FLOATs and SFLOATs](MderFLOATsandSFLOATs.html)
 - [Previous: Definition of a Metric Measurement](DefinitionMetricMsmt.html)







---

File: repos/HL7_SLASH_phd/input/pagecontent/Nomenclaturecodes.md

IEEE 11073 uses nomenclature codes to represent an entity that needs to be machine readable such as a type or what the measurement is. Nomenclature codes are 32-bit unsigned integers. The most significant 16 bits give the *partition* and the least significant 16 bits give the *term code*. Partitions group the term codes into sets with a common meaning. For example, in PHD there is a health and fitness partition which groups terms associated with health and fitness, such as term codes for activities like run, bike, swim, altitude gained, distance, etc.

Associated with each 32-bit code is a reference identifier. The reference identifier is a 'semi-' human readable string such as MDC_ECG_HEART_RATE which is easier for the human reader to understand than the associated nomenclature code 147842. However, these reference identifiers are typically not provided by a PHD. Consequently, this guide does not require the encoder to include them in the FHIR mapping though it is encouraged. A second reason reference identifiers are not required is that is not possible for the encoder to send them if it encounters data from future PHDs using codes it does not know. The new codes can still be mapped to FHIR, but the reference identifiers require the encoder to have an internal map. Not requiring the reference identifiers allows the encoder to work with these future PHDs. Supporting future compatibility is one of the reasons this guide uses a generic mapping approach.

In FHIR, the 32-bit value of the code is always used. If in the PHD to PHG exchange sometimes a 16-bit code is used when the partition can be inferred from the attribute to decrease bandwidth. In these situations the encoder must convert the 16-bit value to the appropriate 32-bit value.

In IEEE 11073 Units are also encoded as nomenclature codes. HL7 and IHE favor the use of UCUM for units. This guide requires IEEE 11073 nomenclature codes for units to be mapped to the equivalent UCUM code. To maintain future compatibility, the use of the MDC nomenclature code is allowed if a UCUM code for the MDC term did not exist, or was not used by PHD standards, at the time the encoder was written.

The set of nomenclature codes is extensive, but it is segmented by partitions. Many of the codes used in the PHD measurement types and measurement values (when codes) come from the SCADA, INFRA, SITES, PHD_DM, PHD_HF, and PHD_AI partitions. This guide does not restrict the codes to come from only those partitions for future compatibility reasons. New partitions could be added and those codes could be used in future PHD specializations. Since the codes are provided by the PHD, the uploader does not need to maintain a code dictionary unless it wants to include the reference identifier or display text about the code. If this guide were to restrict the allowable codes to a given set of partitions, that restriction would prevent an older implementation from working with future devices when it otherwise could have worked with the device. It is clear, however, that any consumer and interpreter of the uploaded information *would* need to know about the new codes.

More information describing the MDC coding system can be found [here](http://build.fhir.org/mdc.html)

 - [Next: FHIR’s Codeable Concepts](CodeableConcepts.html)
 - [Previous: Mder FLOATs and SFLOATs](MderFLOATsandSFLOATs.html)


---

File: repos/HL7_SLASH_phd/input/pagecontent/Non11073PHDDevices.md

Not all PHDs are using a protocol such as GHS that is based upon the 11073-10206 standard. This IG also supports Bluetooth devices that follow various Bluetooth SIG defined personal health device profiles and services. However, this requires that the information provided by the device can be mapped to IEEE 11073-10206 System Information, Power, Clock, and Observation objects by the PHG as specified in the transcoding white paper (the latest version can be found [here](https://www.bluetooth.com/bluetooth-resources/personal-health-devices-transcoding/)) when the generated observations are going to be uploaded to a FHIR server. The requirement does not mandate that the PHG actually create these objects, but the resulting FHIR resources have to be composed as if they had come from a compliant IEEE 11073-10206 PHD device supporting the same type of observations.

The transcoding requirements put further demands on the Bluetooth PHD device over and above that specified in the Bluetooth SIG PHD specifications. For example, the Bluetooth Health Thermometer Profile does not require that a thermometer is able to report its sense of current time even though it may report time stamps in the measurements. This IG requires that PHDs that generate measurements that have time stamps also be able to report their sense of current time. The reason is that PHDs often have unreliably set clocks that for which the PHG can correct if the PHG is able to obtain the PHD's sense of current time.

In addition to PHDs implementing GHS or another Bluetooth PHD profile, there are numerous proprietary medical devices on the market. It may be possible to map the measurements coming from these devices to the PHD profiles from this IG, but that mapping would require that the resulting FHIR resources be created and populated as if they had come from a compliant IEEE 11073-10206 device. The writers of this guide have performed this task for a number of proprietary Serial Port Protocol (SPP) and Bluetooth SIG PHD devices.

In this Implementation Guide, the PHD is treated as a IEEE 11073-10206 compliant device. When working with other device types, it is the responsibility of the FHIR encoder to 'virtually' map the data from the non-IEEE 11073-10206 device to the IEEE 11073-10206 model when generating the PHD FHIR resources.

*In general, if a PHD provides timestamps with its measurements, it needs to provide a means for the PHG to get its sense of current time. If it does, one can likely use this implementation guide with that device.*

 - [Next: Profiles](profiles.html)
 - [Previous: Coincident Time Stamp](CoincidentTimeStamp.html)


---

File: repos/HL7_SLASH_phd/input/pagecontent/ObservationIdentifier.md

Some PHDs will resend old data repeatedly. To prevent excessive resource duplication on the RESTful FHIR server this IG specifies an Observation.identifier whose sole purpose is to perform a conditional create transaction. The identifier is not to be interpreted by a consumer of the resource.

The idea is that the identifier uniquely describes the measurement such that if the same measurement were resent at a later time, the identifier would be the same. At the same time it needs to be selective enough such that no other newly taken measurement will produce the same identifier.

In practice it is preferred that the uploader filter the data in some application dependent manner such that duplicates are not sent. Duplicates, even if armed with a conditional create transaction, waste bandwidth and conditional create operations are more demanding on the server than simple create transactions.

The identifier is generated from a combination of the basic measurement components, such as the type, value, timestamp, units, and contributions from extra descriptors should they be present. The specifics on how to create this identifier are specified in this guide.

 - [Next: Generating the Reported Time Stamp Observation Identifier](GeneratingtheReportedTimeStampIdentifier.html)
 - [Previous: ASN1 BITS Code System](ASN1BITsCodeSystem.html)

---

File: repos/HL7_SLASH_phd/input/pagecontent/ObtainObservationCode.md

Every IEEE 11073-10206 Observation instance is required to have a Type attribute. The Type attribute value is an MDC term code that maps directly to the Observation.code element. 
The Observation.code element is populated as follows:

* if the application wishes to transcode this MDC code into other coding systems the application is free to do so but
  * the MDC code shall be present in a coding element
  * if the code matches one of the [FHIR observation-vitalsigns codes]( https://www.hl7.org/fhir/observation-vitalsigns.html)), the observation-vitalsigns code shall be present in a coding element
  * any other coding translations desired may be placed in an additional coding element.
* for the MDC code the mapping is as follows:
  * Observation.code.coding.code = *value*
  * Observation.code.coding.system = "urn:iso:std:iso:11073:10101"
  * Observation.code.text should contain the reference identifier as part of the text.
  
The requirement for the MDC textual reference identifier is not mandatory and is not used as the Observation.code.coding.code value because the reference identifier is not provided by the sensor device in the exchange protocol. Requiring the reference identifier would require that the PHG have an internal map. However, the main reason for not requiring the reference identifier is that doing so would defeat future interoperability. An older PHG would not know the reference identifier of a new specialization but it would be able to propagate the new code since that is provided by the device.

The MDC code entry is required, but the concept may be expressed in other coding systems as well. The choice of any additional translations is up to the application. PHGs operating in certain realms may be required to provide translations to a realm-specified coding system. For example, in the United States realm, LOINC is strongly preferred. For those implementing a PHG for operations in the US, a mapping table for MDC to LOINC can be downloaded [here](https://loinc.org/file-access/download-id/9385/). One may freely use this table as needed in an implementation license free.
  
The consumer of FHIR resources containing the PHD data does not need to concern itself with this complexity. All it needs to do is obtain the Observation.code.coding.code element supporting the 11073-10101 system value to get the measurement type.

 - [Next: Obtaining the Unit code](ObtainUnitCode.html)
 - [Previous: FHIR’s Codeable Concepts](CodeableConcepts.html)


---

File: repos/HL7_SLASH_phd/input/pagecontent/ObtainUnitCode.md

Observations and Observation Components that report quantities (Numerics and Sample Arrays) have units. 

Obtaining the unit in most cases is as simple as decoding the Unit-Code attribute. 

IEEE 11073-10206 unit codes are MDC values from partition 4 of IEEE 11073-10101. The FHIR encoder need to map these codes to the appropriate UCUM codes. 
A mapping can be found in the [RTMMS](https://rtmms.nist.gov/rtmms/index.htm) and in the latest version of IEEE 11073-10101.

In case the rare situation arises where a new unit has been introduced or the PHD uses a unit code that has not been previously used in PHD specializations, the FHIR encoder may use the MDC code in place of the UCUM code. In that case the FHIR encoder will need to create the 32-bit code from the 16-bit term code and the assumed partition value of 4.

 - [Next: ASN1 BITS Code System](ASN1BITsCodeSystem.html)
 - [Previous: Obtaining the Observation.code](ObtainObservationCode.html)

---

File: repos/HL7_SLASH_phd/input/pagecontent/overview.md


<!-- https://stackoverflow.com/questions/27977078/how-do-i-reference-the-root-directory-of-my-site-and-why-wont-jekyll-render-so -->

This Guide has the following main chapters:

#### IG Home
[Home page](index.html)

#### Table of Contents
[Table of Contents](toc.html)

#### Introduction
These sections introduce this implementation guide, its scope, what it is meant to do as well as what it is not meant to do, who it is of interest for, and some use cases. 
 - [Purpose]({{ output }}Purpose.html)
 - [Audience]({{ output }}Audience.html)
 - [Scope]({{ output }}Scope.html)
 - [Use Cases]({{ output }}UseCases.html)

#### Profile Consumers
Readers primarily interested in using data from PHD devices are directed to [this chapter](ProfileConsumers.html).
Unlike resource generation, consumption of the resources described in this IG should not require in-depth knowledge of the IEEE 11073 Information Model and PHD communication protocol. Similarly, a reader focusing on consumption of data may find less value in those parts of the IG focused on mapping of PHD data to FHIR, as that process will have already occured before consumption.

#### PHG Implementation Guidance
This informative [chapter](TechnicalImplementationGuidance.html) provides an introduction and overview of the IEEE 11073 topics used in the profile mappings, such as the IEEE 11073-10206 Abstract Content Information Model (ACOM), ACOM objects and attributes, nomenclature codes, and Mder FLOATs, among others. This chapter also discusses some of the reasons behind the generic modeling approach used by this guide. 

#### Profiles
This [chapter](profiles.html) contains the normative content for PHG implementation. It provides the Structure Definitions for each of the defined profiles as well as sections giving the mapping details. It is here where the PHG implementer needs to go to develop the software. For convenience, there are links back to sections in the PHG Implementation Guidance in the Profile Details sections when some of the trickier topics come up.

#### Artifact Index
This [chapter](artifacts.html) lists all the Structure Definitions, Code Systems, Value Sets, Capability Statements, and Examples included in this guide. It should be noted that the non-Bundle examples illustrate the resources once on the FHIR server. These examples will always have logical ids, but in many cases, the uploaded example should NOT have logical ids. The PHG implementer should use the examples in the normative profile sections describing the mapping for guidance instead of those in this chapter.

#### History
The [list]({{site.data.fhir.canonical}}/history.html) of all published versions of this IG.

#### FHIR
Link to the used [FHIR specification]({{site.data.fhir.path}}index.html)


 - [Next: Purpose](Purpose.html)
 - [Previous: Homepage](index.html)


---

File: repos/HL7_SLASH_phd/input/pagecontent/patientExample.md

This example shows a PHD Patient resource including the optional patient name entry. This particular resource was uploaded using a update-create transaction and thus the logical id is specified.

<pre>
{
	"resourceType": "Patient",
	"id": "patientExample-1",
	"meta": {
		"profile": [
			"http://hl7.org/fhir/uv/phd/StructureDefinition/PhdPatient"
		]
	},
	"identifier": [
		{
			"type": {
				"coding": [
					{
						"system": "http://terminology.hl7.org/CodeSystem/v2-0203",
						"code": "MR"
					}
				]
			},
			"system": "urn:oid:1.2.3.4.5.6.7.8.10",
			"value": "sisansarahId"
		}
	],
	"name": [		// This entry is optional
		{
			"family": "Piggy",
			"given": [
				"Sisansarah",
				"Lorianthah"
			]
		}
	]
}
</pre>

---

File: repos/HL7_SLASH_phd/input/pagecontent/PhdDeviceProfile.md

The properties and specifications of the PHD are reported in the Device resource. These are the static fields of the attributes reported in the PHD MDS object or Bluetooth Low Energy Device Information Service. Dynamic and observational attributes such as the battery level, remaining battery time, and power status are reported using the Observation resource.

There are six MDS attributes that are reported. The Mds-Time-Info attribute has fields that are dynamic and static, and it is only the static entries which are required should the attribute be present. The following table summarizes these attributes and the Device elements to which they are mapped:

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

|MDS attribute|Device element|
|-
|System-Id|identifier 1|
|*transport address*|identifier 2|
|*Friendly name*|deviceName|
|System-Type-Spec-List|specializations|
|Production-Specification|serialNumber<br>version<br>partNumber|
|Reg-Cert-Data-List|version<br>property|
|MdsTimeInfo|property|

The transport address and friendly name are not provided by the MDS but come from the transport protocols. They may not be available and are therefore optional. However, if the PHD does not report a System Id, which may happen if one needs to map non-certified and/or proprietary devices, a transport address should be reported. It is still strongly recommended that the transport address is reported as it is often beneficial to the data consumers. Transport addresses of wireless devices are often printed on the device or the device packaging whereas the system id is not. Most PHD transports provide a means of obtaining a transport address or an equivalent identifier such as a USB VID and PID.

There are several CodeableConcept data types in this mapping where the Coding data type has a 'display' element. It is recommended to put the MDC reference identifier as part of the display element if known. The coding system element is always set to "urn.iso.std.iso:11073:10101 when an MDC code".

The structure definition for the PHD Device Profile is given [here](StructureDefinition-PhdDevice.html)

### System Identifier
All IEEE 11073-20601 PHDs are required to have a system identifier. It is an EUI-64 consisting of 8 bytes. The system id is mapped to the Device.identifier.value element as a sequence of 8 2-digit bytes as HEX separated by dashes without the '0x' prefix commonly used in programming languages. An example of such a string is FE-ED-AB-EE-DE-AD-77-C3. Though required for Continua compliance, it is not required in the Bluetooth Low Energy health device specifications. When a PHG encounters such a device it shall enter 00-00-00-00-00-00-00-00 and it is highly recommended to provide a transport address as a means of uniquely identifying the PHD.

In order to discriminate between an identifier that is a system id and that which is a transport address the identifier.type element is used. A Continua-defined CodeSystem [Device Identifier Codes](CodeSystem-ContinuaDeviceIdentifiers.html) has the codes one can use to populate the identifier.type.coding.code element.

The transport addresses are as follows:

|transport|format|example|
|-
|Bluetooth|EUI-48|00-E5-DE-AD-77-C3|
|ZigBee|EUI-64|36-ED-9A-EE-DE-AD-77-C3|
|USB|vid.pid|0043.F90D|

The identifier is encoded as follows:

|Source|Device Encoding|
|-
|System-Id.value|identifier.value=*formatted as above*<br>identifier.system="urn:oid:1.2.840.10004.1.1.1.0.0.1.0.0.1.2680"<br>identifier.type.coding.system="http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaDeviceIdentifiers"<br>identifier.type.coding.code="SYSID"|
|Bluetooth Address|identifier.value=*formatted as above*<br>identifier.system="http://hl7.org/fhir/sid/eui-48/bluetooth"<br>identifier.type.coding.system="http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaDeviceIdentifiers"<br>identifier.type.coding.code="BTMAC"|
|ZigBee Address|identifier.value=*formatted as above*<br>identifier.system="http://hl7.org/fhir/sid/eui-64/zigbee"<br>identifier.type.coding.system="http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaDeviceIdentifiers"<br>identifier.type.coding.code="ZIGBEE"|
|USB Address|identifier.value=*formatted as above*<br>identifier.system="http://hl7.org/fhir/sid/usb"<br>identifier.type.coding.system="http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaDeviceIdentifiers"<br>identifier.type.coding.code="USB"|

### Device.udiCarrier ###
The UDI has recently been introduced into the IEEE 11073-20601 standard, however, no PHDs have implemented this feature and it is not yet present in Bluetooth Low Energy. For that reason, the mapping of this element is not specified in this version of the implementation guide. The IEEE 11073-20601 standard supports an issuer, jurisdiction, and the Human Readable interpretation of the barcode. The udiCarrier does have elements for each of these entries. On the other hand, there is no appropriate entryType code for this sourcing of the UDI as it is obtained electronically through protocol.

It is anticipated that all these issues will be resolved and that eventually PHDs will support it via protocol. At that time a mapping from the IEEE UDI to the Device.uidCarrier will be specified.

### Device.type ###
The Device type is the same for all PHDs and it indicates that the device is a PHD. The details of what the PHD does is found in the Device.specializations element. The MDC code being used is 65573 (reference id MDC_MOC_VMS_MDS_SIMP). In 11073-10201 this code is described as indicating "a single-purpose medical device". The code is also used in 11073-20601 to identify the MDS object, but there is no particular description as to its interpretation.

The Device.type shall be encoded as follows:

 - Device.type.coding.code="65573"
 - Device.type.coding.system="urn.iso.std.iso:11073:10101"
 - Device.type.text="MDC_MOC_VMS_MDS_SIMP: Continua Personal Health Device"

The display element is optional but highly recommended.

### System Type Spec List
The System-Type-Spec-List attribute contains a list of specializations the PHD complies to. The elements in the list indicate not only what the PHD does, but that it does so in a manner specified in the specialization documents.  Each element in the list contains the specialization and its version. The specialization is reported as a 16-bit MDC term code with an assumed partition of INFRA (8) and the version is an integer. In most cases there is just one entry in the list.

For each entry in the System-Type-Spec-List a specializations entry is encoded as follows: 

|System-Type-Spec-List entry|Device encoding|
|- 
|System-Type-Spec-List.type|specialization.systemType.coding.code="code"<br>specialization.systemType.coding.system="urn.iso.std.iso:11073:10101"<br>specialization.systemType.text="*reference-id plus additional text*" |
|System-Type-Spec-List.version|specialization.version="version" |

where "code" is the 32-bit nomenclature code computed from the partition INFRA and the term code from System-Type-Spec-List.type and "version" is the version from System-Type-Spec-List.version.

The display element is optional but it is highly recommended that it be included and the reference id be in the description. The table below gives a list of some of the most common specializations and their codes:

|Specialization|MDC Code partition:term code|Reference Identifier|
|-
|Generic 20601 Device|8::4169|MDC_DEV_SPEC_PROFILE_GENERIC|
|Pulse Oximeter|8::4100|MDC_DEV_SPEC_PROFILE_PULS_OXIM|
|Electro cardiograph|8::4102|MDC_DEV_SPEC_PROFILE_MIN_ECG|
|Blood Pressure Cuff|8::4103|MDC_DEV_SPEC_PROFILE_BP|
|Thermometer|8::4104|MDC_DEV_SPEC_PROFILE_TEMP|
|Respiration rate|8::4109|MDC_DEV_SPEC_PROFILE_RESP_RATE|
|Weight Scale|8::4111|MDC_DEV_SPEC_PROFILE_SCALE|
|Glucose Monitor|8::4113|MDC_DEV_SPEC_PROFILE_GLUCOSE|
|Coagulation meter |8::4114|MDC_DEV_SPEC_PROFILE_COAG|
|Insulin Pump|8::4115|MDC_DEV_SPEC_PROFILE_INSULIN_PUMP|
|Body Composition Analyzer|8::4116|MDC_DEV_SPEC_PROFILE_BCA|
|Peak Flow meter|8::4117|MDC_DEV_SPEC_PROFILE_PEAK_FLOW|
|Sleep Apnea Breathing Equipment|8::4120| MDC_DEV_SPEC_PROFILE_SABTE|
|Continuous Glucose Monitor|8::4121|MDC_DEV_SPEC_PROFILE_CGM|
|Cardiovascular Device|8::4137|MDC_DEV_SPEC_PROFILE_HF_CARDIO|
|Strength Equipment|8::4138|MDC_DEV_SPEC_PROFILE_HF_STRENGTH|
|Independent Activity/Living Hub|8::4167|MDC_DEV_SPEC_PROFILE_AI_ACTIVITY_HUB|
|Medication Monitor|8::4168|MDC_DEV_SPEC_PROFILE_AI_MED_MINDER|

The 'generic' device on the PHD side indicates that the device follows 20601 but not any specialization. On the PHG side it indicates that the PHG understands anything following the 20601 standard. That would include all specializations since all specializations are a subset of the 20601 standard.

The table below gives the set of 32-bit MDC codes and reference identifiers used in the subsequent mappings.

|11073 Attribute|description|MDC code|MDC reference identifier|
|-
|System-Model|Model number|531969|MDC_ID_MODEL_NUMBER|
|System-Model|Manufacturer name|531970|MDC_ID_MODEL_MANUFACTURER|
|Production-Specification|Unspecified|	531971|MDC_ID_PROD_SPEC_UNSPECIFIED|
|Production-Specification|Serial number|	531972|MDC_ID_PROD_SPEC_SERIAL|
|Production-Specification|Part number|	531973|MDC_ID_PROD_SPEC_PART|
|Production-Specification|Hardware revision|	531974|MDC_ID_PROD_SPEC_HW|
|Production-Specification|Software revision|	531975|MDC_ID_PROD_SPEC_SW|
|Production-Specification|Firmware revision|	531976|MDC_ID_PROD_SPEC_FW|
|Production-Specification|Protocol revision|	531977|MDC_ID_PROD_SPEC_PROTOCOL|
|Production-Specification|Global Medical Device Nomenclature (GMDN)|	531978|MDC_ID_PROD_SPEC_GMDN|
|Reg-Cert-Data-List|Continua version|532352|MDC_REG_CERT_DATA_CONTINUA_VERSION|
|Reg-Cert-Data-List|Continua Certified Device List|532353|MDC_REG_CERT_DATA_CONTINUA_CERT_DEV_LIST|
|Reg-Cert-Data-List|Regulation status|532354|MDC_REG_CERT_DATA_CONTINUA_REG_STATUS |
|*PHG only*|Continua Certified H&FS List|532355|MDC_REG_CERT_DATA_CONTINUA_AHD_CERT_LIST|
|Mds-Time-Info|Synchronization method|68220|MDC_TIME_SYNC_PROTOCOL|
|Mds-Time-Info|Time capabilities|68219|MDC_TIME_CAP_STATE|
|Mds-Time-Info|High resolution relative time resolution|68224|MDC_TIME_RES_REL_HI_RES|
|Mds-Time-Info|Relative time resolution|68223|MDC_TIME_RES_REL|
|Mds-Time-Info|Absolute Time time resolution|68222|MDC_TIME_RES_ABS|
|Mds-Time-Info|Base offset time resolution|68226|MDC_TIME_RES_BO|
|Mds-Time-Info|Time synchronization accuracy|68221|MDC_TIME_SYNC_ACCURACY|

### System Model
The System-Model attribute contains two strings, the manufacturer name and the model number. The Device resource has stand-alone primitive elements for these two fields. The mapping is straight forward:

|System-Model|Device encoding|
|- 
|System-Model.manufacturer|manufacturer="System-Model.manufacturer" |
|System-Model.model-number|modelNumber="System-Model.model-number" |

### Production-Specification ###
The Production-Specification attribute values are mapped to three separate elements in the Device, the Device.serialNumber, Device.partNumber, and Device.version. The serialNumber and partNumber elements are string primitives, thus it is not possible to map the PrivateOid of those two values without extensions. The version element, on the other hand, is a Backbone element which will allow such a mapping without the use of extensions.

The mapping is as follows:

|Production-Specification entry|Device encoding|
|- 
|Production-Specification.spec-type = 1 (*serial number*)<br>Production-Specification.value|serialNumber="Production-Specification.value" |
|Production-Specification.spec-type = 2 (*part number*)<br>Production-Specification.value|partNumber="Production-Specification.value" |
|Production-Specification.spec-type = 3 (*hardware version*)<br>Production-Specification.PrivateOid<br>Production-Specification.value|version.type.coding.code="531974"<br>version.type.coding.system="urn.iso.std.iso:11073:10101"<br>version.type.text="MDC_ID_PROD_SPEC_HW + optional text"\*\*<br>version.value="Production-Specification.value"<br>version.component.system="system id formatted as above"\*<br> version.component.value="Production-Specification.PrivateOid"\*|
|Production-Specification.spec-type = 4 (*software version*)<br>Production-Specification.PrivateOid<br>Production-Specification.value|version.type.coding.code="531975"<br>version.type.coding.system="urn.iso.std.iso:11073:10101"<br>version.type.text="MDC_ID_PROD_SPEC_SW + optional text"\*\*<br>version.value="Production-Specification.value"<br>version.component.system="system id formatted as above"\*<br> version.component.value="Production-Specification.PrivateOid"\*|
|Production-Specification.spec-type = 5 (*firmware version*)<br>Production-Specification.PrivateOid<br>Production-Specification.value|version.type.coding.code="531976"<br>version.type.coding.system="urn.iso.std.iso:11073:10101"<br>version.type.text="MDC_ID_PROD_SPEC_FW + optional text"\*\*<br>version.value="Production-Specification.value"<br>version.component.system="system id formatted as above"\*<br> version.component.value="Production-Specification.PrivateOid"\*|
|Production-Specification.spec-type = 6 (*protocol version*)<br>Production-Specification.PrivateOid<br>Production-Specification.value|version.type.coding.code="531977"<br>version.type.coding.system="urn.iso.std.iso:11073:10101"<br>version.type.text="MDC_ID_PROD_SPEC_PROTOCOL + optional text"\*\*<br>version.value="Production-Specification.value"<br>version.component.system="system id formatted as above"\*<br> version.component.value="Production-Specification.PrivateOid"\*|

*The PrivateOid is only a 16-bit unsigned number. To give it some meaning, the system-id of the device is placed in the Identifier 'system' value to link the PrivateOid to this physical device in the presence of some other possible identifiers.

**The text elements are optional but it is encouraged to include them and populate them with at least the reference identifier.

### Reg-Cert-Data-List ###
The Reg-Cert-Data-List contains the Continua version, list of certified PHD interfaces, and the regulation status. The Continua version is mapped to an additional Device.version element and the other two fields are mapped to a Device.property element.

#### Reg-Cert-Data-List Continua version

The Continua version has a major and minor component which are 8-bit unsigned integers. The code reported in the Device.versions element is obtained by concatenating the major-version, a dot (.), and the minor version. For example, "6.1" where "6" is the major version and "1" is the minor version. 

The Continua version code is mapped to a Device.version element.

#### Reg-Cert-Data-List Continua Certified PHD interfaces
The Reg-Cert-Data-List attribute reports the list of Continua *certified* PHD (Personal Area Network) interfaces as a list of Continua-specified 'PHD' codes. Note there is a difference between certified PHD interfaces and supported PHD interfaces. The Continua-specified certification codes obtained from the Reg-Cert-Data-List are a combination of a transport code, Tcode, and a specialization code which is based on the 16-bit term code of the MDC code for the specialization. See [generating the PHDCodes](ContinuaPersonalAreaNetworkCodes.html)

The PHDCodes are mapped to a list of property.valueCode elements. The property.type element, which identifies the property, is given by the MDC 32-bit code 532353. Its reference id is MDC_REG_CERT_DATA_CONTINUA_CERT_DEV_LIST. 

#### Reg-Cert-Data-List Regulation Status
The regulation status element is a 16-bit ASN1 BITs 'state' value (see [ASN1 Coding Description](ASN1BITsCodeSystem.html)). At the current time only Mder bit 0 is defined. Being a state value, both set and cleared states are reported. In fact, it is the cleared state which represents that the device is regulated. 

The regulation status is mapped to an additional Device.property.valueCode element. The Device.property.type element, which identifies the property, is given by 532354.0 following the ASN1 BITs mapping where the code 532354 is the MDC code for the regulation status. Its reference identifier is MDC_REG_CERT_DATA_CONTINUA_REG_STATUS. The '0' appended to the regulation status code indicates Mder bit 0. The Device.property.valueCode will indicate either "Y" (set) or "N" (cleared).

The following table summarizes the mapping of the Reg-Cert-Data-List information to FHIR:


|Reg-Cert-Data-List|Device Mapping|
|-
|Reg-Cert-Data-List: continuaVersion|version.type.coding.code="532352"<br>version.type.coding.system="urn.iso.std.iso:11073:10101"<br>version.type.text="MDC_REG_CERT_DATA_CONTINUA_VERSION + text"<br>version.value="Continua version code"<br><br>|
|Reg-Cert-Data-List: certified PHD interfaces|property.type.coding.code="532353"<br>property.type.coding.system="urn.iso.std.iso:11073:10101"<br>property.type.text="MDC_REG_CERT_DATA_CONTINUA_CERT_DEV_LIST + text"<br>property.valueCode*N*.coding.code="PHDCode*N*"<br>property.valueCode*N*.coding.system="http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaPHD"<br><br>|
|Reg-Cert-Data-List: regulation status|property.type.coding.code="532354.0"<br>property.type.coding.system="http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7"<br>property.type.text="regulation-status"<br>property.valueCode.coding.code="Y/N"<br>property.valueCode.coding.system="http://terminology.hl7.org/CodeSystem/v2-0136 "<br>property.valueCode.text="Y=unregulated N=regulated"|

Text elements are recommended but optional.

### Mds-Time-Info
The Mds-Time-Info attribute is required on PHDs that support a real time clock of some type and report time stamps in their measurements. In Bluetooth Low Energy devices these properties must be inferred from other information like the Current Time Service. If the PHD does NOT report a time stamp in any of its measurements, there is no need to report the static time information ***EXCEPT*** that there is no time synchronization.

#### Time Capabilities
The Mds-Time-Info attribute has a 16-bit ASN1 BITs field for the time capabilities. They are mapped as follows:

|Mder Bit position	|IEEE.ASN1 Code	|ASN.1 name|static|Device.|
|-
|0  |68219.0	|mds-time-capab-real-time-clock|yes|property.type.coding.code="68219.0"|
|1	|68219.1	|mds-time-capab-set-clock|yes|property.type.coding.code="68219.1"|
|2	|68219.2	|mds-time-capab-relative-time|yes|property.type.coding.code="68219.2"|
|3	|68219.3	|mds-time-capab-high-res-relative-time|yes|property.type.coding.code="68219.3"|
|4	|68219.4	|mds-time-capab-sync-abs-time|yes|property.type.coding.code="68219.4"|
|5	|68219.5	|mds-time-capab-sync-rel-time|yes|property.type.coding.code="68219.5"|
|6	|68219.6	|mds-time-capab-sync-hi-res-relative-time|yes|property.type.coding.code="68219.6"|
|7	|68219.7	|mds-time-capab-bo-time|yes|property.type.coding.code="68219.7"|
|8	|68219.8	|mds-time-state-abs-time-synced|no||
|9	|68219.9	|mds-time-state-rel-time-synced|no||
|10	|68219.10	|mds-time-state-hi-res-relative-time-synced|no||
|11	|68219.11	|mds-time-mgr-set-time|no||
|12	|68219.12	|mds-time-capab-sync-bo-time|yes|property.type.coding.code="68219.12"|
|13	|68219.13	|mds-time-state-bo-time-synced|no||
|14	|68219.14	|mds-time-state-bo-time-UTC-aligned|yes|property.type.coding.code="68219.14"|
|15	|68219.15	|mds-time-dst-rules-enabled|yes|property.type.coding.code="68219.15"|

The required remaining property elements in each reported case are as follows:
 - property.type.coding.system="http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7"
 - property.valueCode.coding.code="Y/N"
 - property.valueCode.coding.system="http://terminology.hl7.org/CodeSystem/v2-0136 "

 An optional text element containing at least the ASN.1 name from the above table is encouraged:
 - property.type.text="ASN.1 name + any additional text"

Only the static fields shall be reported and all the static fields are treated as events thus they only need to be reported if set. Reporting cleared static states is optional.

#### Time Synchronization
The Mds-Time-Info.*time-sync-protocol* indicates the method of time synchronization which has one of the term code values in the following table:

|32-bit code|Reference identifier|	description	|partition:term code|
|-
|532224	|MDC_TIME_SYNC_NONE	|An uncalibrated and unsynchronized local clock source	|8::7936|
|532234	|MDC_TIME_SYNC_EBWW	|A manually set time, by ‘eyeball and wristwatch’	|8::7946|
|532225	|MDC_TIME_SYNC_NTPV3	|Network Time Protocol Version 3.0 (RFC 1305)	|8::7937|
|532226	|MDC_TIME_SYNC_NTPV4	|Network Time Protocol Version 4.0 (under dev)	|8::7938|
|532227	|MDC_TIME_SYNC_SNTPV4	|Simple Network Time Protocol v4 (RFC 2030)	|8::7939|
|532228	|MDC_TIME_SYNC_SNTPV4330	|Simple Network Time Protocol v4 (RFC 4330)	|8::7940|
|532229	|MDC_TIME_SYNC_BTV1	|Bluetooth Medical Device Profile	|8::7941|
|532235	|MDC_TIME_SYNC_USB_SOF	|Synced to the 1kHz USB "start-of-frame" clock|8::7947|
|532230	|MDC_TIME_SYNC_RADIO	|Atomic Clock synchronization through RF	|8::7942|
|532231	|MDC_TIME_SYNC_HL7_NCK	|Synchronized via Health Level 7 NCK (network clock)|8::7943|
|532232	|MDC_TIME_SYNC_CDMA	CDMA |mobile telecommunications synchronization	|8::7944|
|532233	|MDC_TIME_SYNC_GSM	|GSM - Network Identity and Time Zone (NITZ)	|8::7945|
|532236	|MDC_TIME_SYNC_OTHER	|A time sync method that is out of scope for IEEE 11073	|8::7948|
|532237	|MDC_TIME_SYNC_OTHER_MOBILE	|A time sync method based on other mobile network technology that is not listed above	|8::7949|
|532238	|MDC_TIME_SYNC_GPS	|A time sync method based on GPS information	|8::7950|

If the Mds-Time-Info.*time-sync-protocol* indicates some other value besides 7936 (no time synchronization) the uploader must look at the time capabilities bits 8, 9, 10, or 13 to see if the PHD actually *is* synchronized. If the time capabilities bits indicate that the PHD is synchronized, then the time synchronization method in Mds-Time-Info.*time-sync-protocol* is reported in the Device.property element. Otherwise the uploader reports that the PHD is unsynchronized.

The uploader maps the state of synchronization to the Device.property as follows:

 - Device.property.type.coding.code="68220"
 - Device.property.type.coding.system="urn.iso.std.iso:11073:10101"
 - Device.property.type.text="MDC_TIME_SYNC_PROTOCOL" *(optional)*
 - Device.property.valueCode.coding.code="*32-bit code for sync method*"
 - Device.property.valueCode.coding.system="urn.iso.std.iso:11073:10101"
 - Device.property.valueCode.text="*the ref id*"  *(optional)*

To date there are no PHDs that support an external time synchronization. However, many PHDs have the PHG set its time and PHGs are required to support an external time synchronization. The IEEE PHD WG is working on providing some means to indicate synchronization by the PHG. In lieu of that, a consumer can only infer that the PHG probably set the time on the PHG if 
 - the PHD indicates that set time is supported
 - the current time clock differences between the PHG and PHD are about 0.

#### Time Synchronization Accuracy
The time synchronization accuracy is given by the Mds-Time-Info.*time-sync-accuracy* field. *This value shall not be reported if the PHD reports a value of 0xFFFFFFFF which indicates unknown.* Otherwise the value reported is in units of 1/8<sup>th</sup> millisecond. When reported in the Device.property element it is scaled to microseconds. The mapping is as follows:
 - Device.property.type.coding.code="68221"
 - Device.property.type.coding.system="urn.iso.std.iso:11073:10101"
 - Device.property.type.text="MDC_TIME_SYNC_ACCURACY" *(optional)*
 - Device.property.valueQuantity.value="125 x Mds-Time-Info.*time-sync-accuracy*"
 - Device.property.valueQuantity.system="http://unitsofmeasure.org"
 - Device.property.valueQuantity.code="us"  (UCUM code for microseconds)

#### Time Resolution
The Mds-Time-Info attribute has three fields that report the resolution of its time clocks. 

The Mds-Time-Info.time-resolution-abs-time represents the resolution of the absolute-time clock when the sensor supports an absolute time clock. If the sensor supports a base-offset time clock it represents the resolution of the base-offset time clock. The sensor is not allowed to support both time clocks simultaneously during an association. Which time clock is supported is indicated by the settings of the Mder 0 and 7 bits of the time capabilities (Mds-Time-Info.mds-time-caps-state).

The sensor may additionally support both relative time clocks or just one or both of the relative time clocks without any ‘wall time’ clock. In practice, support of more than one real time clock at the same time is rare.

*If the respective time resolution has a value of 0, it indicates that the resolution is unknown and it shall not be reported.* In all other cases, the resolutions are reported.

All time resolution values shall be scaled to units of microseconds. When supporting absolute time, the Mds-Time-Info.time-resolution-abs-time is in units of 1/100th of a second. When supporting base-offset time, the Mds-Time-Info.time-resolution-abs-time is in units of 1/65536th of a second. In the base-offset case, the special value of 0xFFFF means one second. The Mds-Time-Info.time-resolution-rel-time is in units of 1/8th millisecond and the Mds-Time-Info.time-resolution-hi-res-relative-time is in units of microseconds.

Though not a part of the MdsTimeInfo attribute the Tick resolution attribute used for RR-intervals in the ECG specialization is also encoded as a property in this group. However its units are in cycles per second, such that a value as 1024 indicates 1024 cycles per second.

|Device.property element|value|
|-
|Device.property.type.coding.code|"68229" (Tick Resolution)|
|Device.property.type.coding.system|"urn.iso.std.iso:11073:10101"|
Device.property.type.text (*optional*)|"MDC_ATTR_TICK_RES"|
|Device.property.valueQuantity.value|Tick-Resolution.*value*|
|Device.property.valueQuantity.system|"http://unitsofmeasure.org" |
|Device.property.valueQuantity.code|"Hz"  (UCUM code for Hertz)|

The encoding for the resolution values is as follows:

|Device.property element|value|
|-
|Device.property.type.coding.code|"68222" (absolute time)<br/>"68226" (base-offset time)<br/>"68223" (relative time)<br/>"68224" (hi-res relative time)|
|Device.property.type.coding.system|"urn.iso.std.iso:11073:10101"|
|Device.property.type.text (*optional*)|"MDC_TIME_RES_ABS"<br/>"MDC_TIME_RES_BO"<br/>"MDC_TIME_RES_REL"<br/>"MDC_TIME_RES_REL_HI_RES"|
|Device.property.valueQuantity.value|"10000 x Mds-Time-Info.*time-resolution-abs-time*"<br/>"1000000 x Mds-Time-Info.*time-resolution-abs-time*/65536"<br/>"125 x Mds-Time-Info.*time-resolution-rel-time*"<br/>"Mds-Time-Info.*time-resolution-hi-res-relative-time*"<br/>|
|Device.property.valueQuantity.system|"http://unitsofmeasure.org" |
|Device.property.valueQuantity.code|"us"  (UCUM code for microseconds)|

### Examples:
An example of a PHD Blood Pressure cuff Device mapping is given [here](phdExample.html)

### Consumer of the PHD Device Profile
For the Consumer of this profile the following table gives a quick guide to the main features

|item|Location in Device resource|
|-
|Type of Device|specializations.systemType.coding.code="*MDC 32-bit code for device specialization*"|
|Manufacturer name|manufacturer|
|Model number|modelNumber|
|serial number|serialNumber|
|system identifier|identifier.system="urn:oid:1.2.840.10004.1.1.1.0.0.1.0.0.1.2680"<br>identifier.value="*system id as 8 2-digit HEX values separated by dashes*"|
|time synchronization|property.type.coding.code="68220"<br/> property.valueCode.coding.code="*code for time synchronization*"|










---

File: repos/HL7_SLASH_phd/input/pagecontent/phdExample.md

This example maps a Blood Pressure PHD unit to a Device Resource. All the information mapped is provided by the protocol exchange. None of the information is provided by patient entry.

<pre>
{
    "resourceType": "Device",
    "id": "711000FEFF5F49B0.B0495F001071",
    "meta": {
        "profile": [
            "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdDevice"
        ]
    },
    "identifier": [
        {
            "system": "urn:oid:1.2.840.10004.1.1.1.0.0.1.0.0.1.2680",
            "value": "71-10-00-FE-FF-5F-49-B0"    // System Id
        },
        {
            "system": "http://hl7.org/fhir/sid/eui-48/bluetooth",
            "value": "B0-49-5F-00-10-71"    // Bluetooth Address
        }
    ],
    "manufacturer": "OMRONHEALTHCARE",
    "serialNumber": "20150200002A",
    "modelNumber": "HEM-9200T",
    "type": {
        "coding": [
            {
                "system": "urn:iso:std:iso:11073:10101",
                "code": "65573"
            }
        ],
        "text": "MDC_MOC_VMS_MDS_SIMP"
    },
    "specialization": [
        {
            "systemType": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "528391"
                    }
                ],
                "text": "MDC_DEV_SPEC_PROFILE_BP: Blood Pressure Cuff"
            },
            "version":"1"
        }
    ],
    "version": [
        {
            "type": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "531976"
                    }
                ],
                "text": "MDC_ID_PROD_SPEC_FW: Firmware revision"
            },
            "value": "C.00.7AJ-02"
        },
        {
            "type": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "531975"
                    }
                ],
                "text": "MDC_ID_PROD_SPEC_SW: Software revision"
            },
            "value": "0000000000000101"
        },
        {
            "type": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "531974"
                    }
                ],
                "text": "MDC_ID_PROD_SPEC_HW: Hardware revision"
            },
            "value": "0000000000000100"
        }
    ],
    // This device did not report a Reg-Cert-Data-List so their is no regulation status information
    // or certification information
    "property": [
        {
            "type": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "68220"
                    }
                ],
                "text": "MDC_TIME_SYNC_PROTOCOL: Time synchronization protocol"
            },
            "valueCode": [
                {
                    "coding": [
                        {
                            "system": "urn:iso:std:iso:11073:10101",
                            "code": "532224"
                        }
                    ],
                    "text": "MDC_TIME_SYNC_NONE: No time synchronization"
                }
            ]
        }
    ]
}
</pre>

---

File: repos/HL7_SLASH_phd/input/pagecontent/PhdPatientProfile.md

The PHD Patient Profile may or may not include patient identifiable information depending on a particular need. In a typical upload, the PHD will not provide patient information, and the PHG may need to obtain patient information out-of-band through means other the PHD Patient Profile. In Remote Patient Monitoring, use cases range from the necessity to completely protect Patient Health Information (PHI) to that where no protection at all is deemed necessary. This profile supports all such options. One upload option is that a Patient Resource is never generated and no patient information is present on the PHG. Instead, the health care provider gives the PHG the ‘logical id’ of a Patient Resource that may or may not exist on the destination server. The PHG uses this logical id in the Observation.subject element with the assumption that the server will understand the reference when the Observation is received.

If a Patient Resource is to be created, this profile only requires that the Patient.identifier.system, Patient.identifier.value, Patient.identifier.type.coding.code and Patient.identifier.type.coding.system be populated. The Patient.name element is optional. This approach still affords PHI protection since the values in the required fields cannot be associated to a person without some kind of dictionary, usually only available to the health care provider.

The minimum requirement does not prevent the use of the Patient.name or any other element in the Patient resource. There are also use cases where exposure of PHI is desired just out of convenience. For example, a cross country coach tracking of the miles run by members of a cross country team. The athletes all wear fitness devices. The data is uploaded to a server where the coach can keep track of the training regime to check development and plan future workouts given upcoming races. The information is accessible to all team  members who tend to be equally as interested in their mileage statistics. Protecting this type of fitness information is probably not worth the effort and inconvenience associated with such protection measures.

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

The structure definition for the Phd Patient Profile is given [here](StructureDefinition-PhdPatient.html).

### Mapping
A Patient resource for a known or an unknown patient shall be  created by the PHG according to the following mapping:

|patient information|FHIR mapping|Value for a known patient|Value for an unknown patient|
|-
|patient identifier|Patient.identifier.value|Generally a code from the health care provider identifying the patient|'U'|
|health care provider identifier|Patient.identifier.system|Generally a code identifying the health care provider|[http://terminology.hl7.org/CodeSystem/v2-0004](http://terminology.hl7.org/CodeSystem/v2-0004)|
|fixed coding system|Patient.identifier.type.coding.system|[http://terminology.hl7.org/CodeSystem/v2-0203](http://terminology.hl7.org/CodeSystem/v2-0203)|[http://terminology.hl7.org/CodeSystem/v2-0203](http://terminology.hl7.org/CodeSystem/v2-0203)|
|code |Patient.identifier.type.coding.code|A code such as 'MR' (medical record) or 'LR' (local registry) from the above coding system|'U'|


### Examples:
An example of a PHD patient mapping for a known patient is given [here](Patient-patientExample-1.html). The example contains an optional name element.<br>
An example of a PHD patient mapping for an unknown patient is given [here](Patient-patientExample-2.html). The example contains an optional name element.



---

File: repos/HL7_SLASH_phd/input/pagecontent/PhgDeviceProfile.md

The properties and specifications of the Personal Health Gateway (PHG) are reported in a Device resource. One of the main reasons the PHG information is included at all in this guide is that it plays a critical role in handling the measurement time stamps of PHDs. PHDs tend to have no time synchronization capabilities. They rely on either the PHG or user to set their time or use a default factory setting. The PHG, on the other hand, is required to have time synchronization capability to NTP and local offset. In this manner the PHG can correct any time stamps provided by the PHD *if* the PHD provides its sense of current time.

PHGs may be implemented on a mobile phone, a personal computer, or in a dedicated set-top box. PHGs may be headless (provide no direct user interface).

A PHG does not have an MDS object, but for the purposes of reporting the PHG information, like its system identifier, time synchronization, and serial number, these values are treated *as if* they came from MDS-attributes in an MDS object. These 'mock' attributes and object are not required to exist on the PHG. 

Unlike the PHD where one reports the information if delivered, in the PHG case far fewer fields are required to be reported. The following table summarizes the required 'MDS' fields and their mappings:

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

|'PHG MDS' field|Device element|
|-
|System Identifier|identifier|
|Time sync protocol|property|

For Continua compliance, the values in the mock Reg-Cert-Data-List shall be included:

|'Continua PHG MDS' field|Device element|
|-
|Continua Version|version|
|Certified PHD Interfaces|property|
|Certified H&FS Interfaces|property|
|Regulation status|property|

A transport address is not required. It is still strongly recommended that the transport address is reported as it is often beneficial to consumers. Most PHD-PHG transports provide a means of obtaining a transport address or an equivalent identifier such as a USB VID and PID. In addition, it may be beneficial to report the transport address of the H&FS interface as well, such as the MAC address.

Similar to the PHD case, when CodeableConcept data types are used it is recommended to put the MDC reference identifier as part of the text element when the system element indicates the MDC coding system "urn.iso.std.iso:11073:10101".

The structure definition for the PHG Device Profile is given [here](StructureDefinition-PhgDevice.html)

A JSON example is given in [PHG Device JSON Example](https://simplifier.net/guide/PCHAPersonalHealthDeviceDataImplementationGuide/PhgDeviceJSONExample)

### **System Identifier**
All IEEE 11073-20601 PHGs are required to have a system identifier.  It is an EUI-64 consisting of 8 bytes. The system id is mapped to the Device.identifier.value element as a sequence of 8 2-digit bytes as HEX separated by dashes without the '0x' prefix commonly used in programming languages. An example of such a string is FE-ED-AB-EE-DE-AD-77-C3. It shall be reported.

It is strongly encouraged to also report the PHG PHD and H&FS transport addresses in a second and third identifier element. The transport addresses are as follows:

|transport|format|example|
|-
|Bluetooth|EUI-48|00-E5-DE-AD-77-C3|
|ZigBee|EUI-64|36-ED-9A-EE-DE-AD-77-C3|
|USB|vid.pid|0043.F90D|
|MAC|EUI-48|EE-FF-DE-AD-77-01|

The identifier for the system id:

 - identifier.value=*system id formatted as above*
 - identifier.system="urn:oid:1.2.840.10004.1.1.1.0.0.1.0.0.1.2680"
 - identifier.type.coding.system="http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaDeviceIdentifiers
 - identifier.type.coding.code="SYSID"

The identifier for the Bluetooth Address: 

 - identifier.value=*formatted as above*
 - identifier.system="http://hl7.org/fhir/sid/eui-48/bluetooth"
 - identifier.type.coding.system="http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaDeviceIdentifiers
 - identifier.type.coding.code="BTMAC"
 
 
 An example of a gateway reporting both its Bluetooth and MAC addresses is shown [here](Device-phg-ecde3d4e58532d31.000000000000.html)

#### **Device type**
The PHG Device.type is given by the MDC code 531981. The reference identifier for this code is MDC_MOC_VMS_MDS_AHD. "AHD" is the previous name Continua gave to what is now known as the PHG. However, reference identifiers are normative and once accepted, they cannot change. It shall be encoded as follows:

 - Device.type.coding.code="531981"
 - Device.type.coding.system="urn.iso.std.iso:11073:10101"
 - Device.type.text="MDC_MOC_VMS_MDS_AHD: Continua Personal Health Gateway"

Here the text element is optional but highly recommended.

#### **Time synchronization**
The time synchronization is mapped as follows:

 - Device.property.type.coding.code="68220"
 - Device.property.type.coding.system="urn.iso.std.iso:11073:10101"
 - Device.property.type.text="MDC_TIME_SYNC_PROTOCOL" *(optional)*
 - Device.property.valueCode.coding.code="*32-bit code for sync method*"
 - Device.property.valueCode.coding.system="urn.iso.std.iso:11073:10101"
 - Device.property.valueCode.text="*the ref id*"  *(optional)*

 The 32-bit code for the time synchronization method is given by one of the following values:

|32-bit code|Reference identifier|	description	|partition:term code|
|-
|532224	|MDC_TIME_SYNC_NONE	|An uncalibrated and unsynchronized local clock source	|8::7936|
|532234	|MDC_TIME_SYNC_EBWW	|A manually set time, by ‘eyeball and wristwatch’	|8::7946|
|532225	|MDC_TIME_SYNC_NTPV3	|Network Time Protocol Version 3.0 (RFC 1305)	|8::7937|
|532226	|MDC_TIME_SYNC_NTPV4	|Network Time Protocol Version 4.0 (under dev)	|8::7938|
|532227	|MDC_TIME_SYNC_SNTPV4	|Simple Network Time Protocol v4 (RFC 2030)	|8::7939|
|532228	|MDC_TIME_SYNC_SNTPV4330	|Simple Network Time Protocol v4 (RFC 4330)	|8::7940|
|532229	|MDC_TIME_SYNC_BTV1	|Bluetooth Medical Device Profile	|8::7941|
|532235	|MDC_TIME_SYNC_USB_SOF	|Synced to the 1kHz USB "start-of-frame" clock|8::7947|
|532230	|MDC_TIME_SYNC_RADIO	|Atomic Clock synchronization through RF	|8::7942|
|532231	|MDC_TIME_SYNC_HL7_NCK	|Synchronized via Health Level 7 NCK (network clock)|8::7943|
|532232	|MDC_TIME_SYNC_CDMA	CDMA |mobile telecommunications synchronization	|8::7944|
|532233	|MDC_TIME_SYNC_GSM	|GSM - Network Identity and Time Zone (NITZ)	|8::7945|
|532236	|MDC_TIME_SYNC_OTHER	|A time sync method that is out of scope for IEEE 11073	|8::7948|
|532237	|MDC_TIME_SYNC_OTHER_MOBILE	|A time sync method based on other mobile network technology that is not listed above	|8::7949|
|532238	|MDC_TIME_SYNC_GPS	|A time sync method based on GPS information	|8::7950|

### **Remaining Optional Data**
The treatment of fields that would be in mock System-Model, Production-Specification, Reg-Cert-Data-List, and Mds-Time-Info attributes is the same as in the Phd Device Profile. However, there is an extra set of information in the mock Reg-Cert-Data-List regarding the certified Health & Fitness Service (H&FS) interfaces. A PHG has both PHD and H&FS interfaces.

Text elements are always optional.

If these fields are encoded they shall be encoded as follows:

### **Specializations**
The specializations supported by the PHG may be reported. If reported, they shall be reported in the Device.specializations element for each specialization as follows:

 - specialization.systemType.coding.code="*32-bit specialization code*"
 - specialization.systemType.coding.system="urn.iso.std.iso:11073:10101"
 - specialization.systemType.text"*reference-id plus additional text*"
 - specialization.version="*specialization version*"

If the PHG supports multiple versions of the specialization and the uploader wants to report this information, additional specializations entries for the additional versions are made. Alternatively the uploader can leave the version field empty.

A PHG is often designed to support all current and future PHDs that support a given version of the 11073-20601 standard. Instead of listing all the specializations individually (which could greatly increase the size of the message) one can use the 'generic' device code. In this case, the specialization.version element, if populated, indicates the version of the 20601 standard. If multiple versions of the 20601 standard are supported and the uploader wants to report this information, a separate 'generic' entries for each version are reported. Alternatively, the version element can be left empty.

An example of generic code use would be as follows

 - specialization.systemType.coding.code="528385"
 - specialization.systemType.coding.system="urn.iso.std.iso:11073:10101"
 - specialization.systemType.text="MDC_DEV_SPEC_PROFILE_GENERIC: supports all 20601 devices"
 - specialization.version="2"

The following table gives a list of the more common specialization codes:

|Specialization|MDC Code partition:term code|Reference Identifier|
|-
|Generic 20601|8::4169|MDC_DEV_SPEC_PROFILE_GENERIC|
|Pulse Oximeter|8::4100|MDC_DEV_SPEC_PROFILE_PULS_OXIM|
|Electro cardiograph|8::4102|MDC_DEV_SPEC_PROFILE_MIN_ECG|
|Blood Pressure Cuff|8::4103|MDC_DEV_SPEC_PROFILE_BP|
|Thermometer|8::4104|MDC_DEV_SPEC_PROFILE_TEMP|
|Respiration rate|8::4109|MDC_DEV_SPEC_PROFILE_RESP_RATE|
|Weight Scale|8::4111|MDC_DEV_SPEC_PROFILE_SCALE|
|Glucose Monitor|8::4113|MDC_DEV_SPEC_PROFILE_GLUCOSE|
|Coagulation meter |8::4114|MDC_DEV_SPEC_PROFILE_COAG|
|Insulin Pump|8::4115|MDC_DEV_SPEC_PROFILE_INSULIN_PUMP|
|Body Composition Analyzer|8::4116|MDC_DEV_SPEC_PROFILE_BCA|
|Peak Flow meter|8::4117|MDC_DEV_SPEC_PROFILE_PEAK_FLOW|
|Sleep Apnea Breathing Equipment|8::4120| MDC_DEV_SPEC_PROFILE_SABTE|
|Continuous Glucose Monitor|8::4121|MDC_DEV_SPEC_PROFILE_CGM|
|Cardiovascular Device|8::4137|MDC_DEV_SPEC_PROFILE_HF_CARDIO|
|Strength Equipment|8::4138|MDC_DEV_SPEC_PROFILE_HF_STRENGTH|
|Independent Activity/Living Hub|8::4167|MDC_DEV_SPEC_PROFILE_AI_ACTIVITY_HUB|
|Medication Monitor|8::4168|MDC_DEV_SPEC_PROFILE_AI_MED_MINDER|

In some sense, reporting specialization information about a PHG is superfluous as clearly, if the PHG uploads data from a given device, it supports that device.

### **PHG Product Information**
The table blow provides codes and reference identifiers used in mapping the product information:

|11073 Attribute|description|MDC code|MDC reference identifier|
|-
|System-Model|Model number|531969|MDC_ID_MODEL_NUMBER|
|System-Model|Manufacturer name|531970|MDC_ID_MODEL_MANUFACTURER|
|Production-Specification|Unspecified|	531971|MDC_ID_PROD_SPEC_UNSPECIFIED|
|Production-Specification|Serial number|	531972|MDC_ID_PROD_SPEC_SERIAL|
|Production-Specification|Part number|	531973|MDC_ID_PROD_SPEC_PART|
|Production-Specification|Hardware revision|	531974|MDC_ID_PROD_SPEC_HW|
|Production-Specification|Software revision|	531975|MDC_ID_PROD_SPEC_SW|
|Production-Specification|Firmware revision|	531976|MDC_ID_PROD_SPEC_FW|
|Production-Specification|Protocol revision|	531977|MDC_ID_PROD_SPEC_PROTOCOL|
|Production-Specification|Global Medical Device Nomenclature (GMDN)|	531978|MDC_ID_PROD_SPEC_GMDN|
|Reg-Cert-Data-List|Continua version|532352|MDC_REG_CERT_DATA_CONTINUA_VERSION|
|Reg-Cert-Data-List|Continua Certified Device List|532353|MDC_REG_CERT_DATA_CONTINUA_CERT_DEV_LIST|
|Reg-Cert-Data-List|Regulation status|532354|MDC_REG_CERT_DATA_CONTINUA_REG_STATUS |
|*PHG only*|Continua Certified H&FS List|532355|MDC_REG_CERT_DATA_CONTINUA_AHD_CERT_LIST|
|Mds-Time-Info|Synchronization method|68220|MDC_TIME_SYNC_PROTOCOL|
|Mds-Time-Info|Time capabilities|68219|MDC_TIME_CAP_STATE|
|Mds-Time-Info|High resolution relative time resolution|68224|MDC_TIME_RES_REL_HI_RES|
|Mds-Time-Info|Relative time resolution|68223|MDC_TIME_RES_REL|
|Mds-Time-Info|Absolute Time time resolution|68222|MDC_TIME_RES_ABS|
|Mds-Time-Info|Base offset time resolution|68226|MDC_TIME_RES_BO|
|Mds-Time-Info|Time synchronization accuracy|68221|MDC_TIME_SYNC_ACCURACY|

#### **Primitives**

 - manufacturer="*PHG manufacturer*"
 - modelNumber="*PHG model number*"
 - serialNumber="*serial number*"
 - partNumber="*part number*"

#### **Hardware, Software, Firmware, Protocol, and Continua Versions**
 - hardware 
 - version.type.coding.code="531974"
 - version.type.coding.system="urn.iso.std.iso:11073:10101"
 - version.type.text="MDC_ID_PROD_SPEC_HW + optional text"
 - version.value="*hardware-version*"

 - software
 - version.type.coding.code="531975"
 - version.type.coding.system="urn.iso.std.iso:11073:10101"
 - version.type.text="MDC_ID_PROD_SPEC_SW + optional text"
 - version.value="*software-version*"

 - firmware
 - version.type.coding.code="531976"
 - version.type.coding.system="urn.iso.std.iso:11073:10101"
 - version.type.text="MDC_ID_PROD_SPEC_FW + optional text"
 - version.value="*firmware-version*"
 
 - protocol
 - version.type.coding.code="531977"
 - version.type.coding.system="urn.iso.std.iso:11073:10101"
 - version.type.text="MDC_ID_PROD_SPEC_PROTOCOL + optional text"
 - version.value="*protocol-version*" (Not 11073-20601 protocol!)

 - Continua
 - version.type.coding.code="532352"
 - version.type.coding.system="urn.iso.std.iso:11073:10101"
 - version.type.text="MDC_REG_CERT_DATA_CONTINUA_VERSION + optional text"
 - version.value="*Continua Version*"

The Continua version has a major and minor component separated by a dot (.). For example, "6.1" where "6" is the major version and "1" is the minor version. 

#### **Continua Certified PHD interfaces**
The Continua *certified* PHD (Personal Area Network) interfaces are represented as a list of Continua-specified 'PHD' codes. Note there is a difference between certified PHD interfaces and supported PHD interfaces. The Continua-specified certification codes are a combination of a transport 'Tcode' and a specialization code which is based on the 16-bit term code of the MDC code for the specialization. The PHD code is generated by
  - PHDCode = Tcode * 8192 + (specialization term code - 4096)

The transport 'Tcodes' are as follows:

|Tcode|Transport|
|-
|0|Continua version 1.0|
|1|USB|
|2|Bluetooth HDP|
|3|ZigBee|
|4|Bluetooth Low Energy|
|5|NFC|

The special Tcode of 0 is for Continua version 1.0 when there was no transport component in the reported certified PHD interface codes.

The PHDCodes are mapped to a list of property.valueCode elements. The property.type element, which identifies the property, is given by the MDC 32-bit code 532353. Its reference id is MDC_REG_CERT_DATA_CONTINUA_CERT_DEV_LIST. 

 - property.type.coding.code="532353"
 - property.type.coding.system="urn.iso.std.iso:11073:10101"
 - property.type.text="MDC_REG_CERT_DATA_CONTINUA_CERT_DEV_LIST + text"
 - property.valueCode*N*.coding.code="PHDCode*N*"
 - property.valueCode*N*.coding.system="http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaPHD "

Note that the property.valueCode element is an array and one can have many of these in a single property element.

#### **Continua Certified Health & Fitness interfaces**
The Continua *certified* Health and Fitness interfaces are represented as a list of Continua-specified 'H&FS' codes as follows:

|Health & Fitness Interface|H&FS code|	Reference name|
|-
|PCD-01 web services|	0	|observation-upload-soap|
|Consent enabled PCD-01 web service|	1	|consent-enabled-soap|
|Capability exchange|	2	|capabilities|
|PCD-01 upload using hData|	3	|observation-upload-hdata|
|Consent enabled PCD-01 using hData|	4|	consent-enabled-hdata|
|Questionnaire CDA|	5|	questionnaire|
|Authenticated Persistent Sessions|	6|	aps|
|FHIR resource upload|	7|	observation-upload-fhir|

The Health and Fitness codes are mapped to a list of property.valueCode elements. The property.type element, which identifies the property, is given by the MDC 32-bit code 532355. Its reference id is MDC_REG_CERT_DATA_CONTINUA_AHD_CERT_DEV_LIST. 

 - property.type.coding.code="532355"
 - property.type.coding.system="urn.iso.std.iso:11073:10101"
 - property.type.text="MDC_REG_CERT_DATA_CONTINUA_AHD_CERT_DEV_LIST + text"
 - property.valueCode*N*.coding.code="H&FSCode*N*"
 - property.valueCode*N*.coding.system="http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaHFS "

#### **Regulation Status**
The PHG regulation status is reported as follows:

 - property.type.coding.code="532354.0"
 - property.type.coding.system="http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7"
 - property.type.text="regulation-status"
 - property.valueCode.coding.code="Y/N"
 - property.valueCode.coding.system="http://terminology.hl7.org/CodeSystem/v2-0136 "
 - property.valueCode.text="Y=unregulated N=regulated"
 
One could enter some time capabilities as additional 'bits' components if desired.

#### **Time Synchronization Accuracy**
The time synchronization accuracy is reported in microseconds as follows:

 - Device.property.type.coding.code="68221"
 - Device.property.type.coding.system="urn.iso.std.iso:11073:10101"
 - Device.property.type.text="MDC_TIME_SYNC_ACCURACY" *(optional)*
 - Device.property.valueQuantity.value="*time-sync-accuracy*"
 - Device.property.valueQuantity.system="http://unitsofmeasure.org"
 - Device.property.valueQuantity.code="us"  (UCUM code for microseconds)
 
### Examples:
An example of an Android PHG mapping is given [here](phgExample.html)



---

File: repos/HL7_SLASH_phd/input/pagecontent/phgExample.md

This example shows the mapping of an Android gateway to the Device resource.

<pre>
{
    "resourceType": "Device",
    "id": "ecde3d4e58532d31.000000000000",
    "meta": {
        "profile": [
            "http://hl7.org/fhir/uv/phd/StructureDefinition/PhgDevice"
        ]
    },
    "identifier": [
        {
            "system": "urn:oid:1.2.840.10004.1.1.1.0.0.1.0.0.1.2680",
            "value": "ec-de-3d-4e-58-53-2d-31"
        }
    ],
    "type": {
        "coding": [
            {
                "system": "urn:iso:std:iso:11073:10101",
                "code": "531981"        // This code indicates that it is a Continua gateway
            }
        ],
        "text": "MDC_MOC_VMS_MDS_AHD"
    },
    "version": [
        {
            "type": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "532352"
                    }
                ],
                "text": "MDC_REG_CERT_DATA_CONTINUA_VERSION: Continua version"
            },
            "value": "5.0"
        }
    ],
    "property": [
        {
            "type": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "68220"
                    }
                ],
                "text": "MDC_TIME_SYNC_PROTOCOL: Time synchronization protocol"
            },
            "valueCode": [
                {
                    "coding": [
                        {
                            "system": "urn:iso:std:iso:11073:10101",
                            "code": "532226"
                        }
                    ],
                    "text": "MDC_TIME_SYNC_NTPV4: "
                }
            ]
        },
        {
            "type": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "532353"
                    }
                ],
                "text": "MDC_REG_CERT_DATA_CONTINUA_CERT_DEV_LIST: certified device list as transport-specialization combo"
            },
            "valueCode": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaPHD",
                            "code": "4"
                        }
                    ]
                }
            ]
        },
        {
            "type": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "532355"
                    }
                ],
                "text": "MDC_REG_CERT_DATA_CONTINUA_AHD_CERT_LIST: certified Upload classes"
            },
            "valueCode": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaHFS",
                            "code": "0"
                        }
                    ]
                },
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaHFS",
                            "code": "3"
                        }
                    ]
                },
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaHFS",
                            "code": "7"
                        }
                    ]
                },
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaHFS",
                            "code": "2"
                        }
                    ]
                },
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaHFS",
                            "code": "6"
                        }
                    ]
                }
            ]
        },
        {
            "type": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7",
                        "code": "532354.0"
                    }
                ],
                "text": "regulation-status"
            },
            "valueCode": [
                {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0136",
                            "code": "Y" // Confusing, correct? A 'Yes' means NOT regulated!
                        }
                    ],
                    "text": "Device is not regulated"
                }
            ]
        }
    ]
}
</pre>

---

File: repos/HL7_SLASH_phd/input/pagecontent/ProfileConsumers.md

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

This chapter is for those whose use cases require measurement data from Personal Health Devices (PHD) and need that data in FHIR format. In most cases PHDs are used when the measurements are taken by individuals who are not medical professionals and outside of the health care provider's institution. The individuals could be patients recovering at home from a serious operation, diabetics managing their condition while trying to live as normal a life as possible, or athletes wearing fitness devices keeping track of their training. Point of Care Devices (PoCD) used in acute care are not covered by this IG. There is a separate implementation guide [here](http://build.fhir.org/ig/HL7/uv-pocd) for such devices.

It is important to understand that this Implementation Guide (IG) assumes that the source of the data is from *communicating* PHDs. This IG does NOT cover measurement data entered manually, such as a pulse rate taken by putting one's fingers on the wrist, or reading data from a non-communicating medical device.

PHGs following this IG use the following FHIR resources: Patient, Device, DeviceMetric and Observation. A Device resource is used for the PHG properties and a second Device resource is used for the PHD properties. Observation resources are used for each measurement and the [Coincident Time Stamp](CoincidentTimeStamp.html). 

Understanding the content of the FHIR resources specified in this IG should be straight forward. Familiarity with the [MDC](http://build.fhir.org/mdc.html) coding system is the only IEEE 11073 domain-specific knowledge required. In addition, there are only a few extensions used in the PHD related profiles. [One](https://build.fhir.org/ig/HL7/fhir-extensions/StructureDefinition-observation-gatewayDevice.html) supports a reference to the Personal Health Gateway (PHG) Device resource in the PHD Observation profiles. A PHG is the unit that is typically responsible for communicating with the PHD and encoding that data into FHIR. It may be a mobile phone, a PC, or a dedicated set-top box. [Another](StructureDefinition-CoincidentTimeStampReference.html) supports linking the timelines of the PHG and the PHD via a [Coincident Time Stamp](CoincidentTimeStamp.html) Observation.

The next sections examine each of the resources generated by PHGs following this IG. Note that all 'text' entries are optional.

### The Measurement Observation Resources

PHDs measurements are encoded into Observation resources. There are different types of measurement values that can be reported by PHDs. Each measurement value type has its own profile but the profiles differ only in the way the value of the measurement is reported in the Observation resource. The supported measurement value types are:

 - **numeric** such as a temperature, weight, glucose concentration, pulse rate, blood oxygen saturation, or miles run. 
 - **coded** such as the meal context and health status in a glucose monitor. A coded measurement is used when there is a limited set of options and each option is specified by a code. 
 - **sample array** (often waveforms) such as an ECG trace, a forced exhalation flow rate from a spirometer, a pleth wave of a pulse oximeter, or a sequence of heart rates. 
 - **string** measurements which are just arbitrary human-readable strings. These kinds of measurements are rare as they cannot be processed by machine. 
 - **discrete state or event** measurements (alpha-numeric codes) which report a set of conditions that may occur simultaneously. An example would be a room status measurement in an independent living facility such as patient in room, door closed, window closed, climate control off, and video monitoring off.
 - **compound** where multiple measurements at a single point in time need to be taken together to represent the value, such as the systolic, diastolic, and mean components of the blood pressure or x-, y-, and z- components of an acceleration.

### Common Observation Element Fields
Every PHD measurement Observation resource contains the following information regardless of the measurement value type:

|Measurement item|element|Description|
|-
|measurement type|Observation.code.coding.code|This element tells you what the measurement is. There shall be at least one coding element using the MDC coding system identified by Observation.code.coding.system="urn:iso:std:iso:11073:10101"<br>If a vital sign, there will be an additional coding element using one of the [LOINC vital sign codes](https://hl7.org/fhir/R4/valueset-observation-vitalsignresult.html). There will also be an Observation.category element as demanded by the vital signs profile.|
|time stamp|Observation.dateTimeEffective<br/><br/>Observation.period|If the measurement is a point in time.<br/><br/>If the measurement has a duration.|
|PHG reference|Observation.extension.valueReference|This element points to the PHG Device resource. The resource contains information about the PHG that generated the FHIR resources. The gateway extension is identified by Observation.extension.url="http://hl7.org/fhir/StructureDefinition/observation-gatewayDevice"|
|patient reference|Observation.subject|Points to the Patient resource. Contains information about the patient to whom this measurement refers|
|PHD reference|Observation.device|Points to the PHD Device resource. This resource contains information about the PHD that took the measurement|

In addition to the elements that are always present, the following set of elements may be present.

|Measurement item|element|Description|
|-
|profile|Observation.meta.profile|This element may contain the URL to the structure definition identifying the profile this Observation belongs to.|
|coincident time stamp reference|Observation.extension.valueReference|Points to Observation following the Coincident Time Stamp Observation profile. For time quality auditing purposes. May only be present when the PHD provides a time stamp. The timestamp extension is identified by Observation.extension.url="http://hl7.org/fhir/uv/phd/StructureDefinition/CoincidentTimeStampReference" |
|related measurement|Observation.derivedFrom Observation.hasMember|Points to a PHD Observation that is related to this Observation. An example would be an activity session measurement that has a miles run measurement member. Only present if the measurement references an additional measurement.|
|additional descriptions|Observation.component|Sometimes a measurement is sent containing additional information such as the technique used to obtain the measurement. These elements are placed in a component.|
||Observation.identifier|This element is used to prevent data duplication during uploads.|

### Description of the Fields
In this section each of the fields summarized above is discussed.

#### The Profile: Observation.meta.profile
The PHD profile element may identify what type of measurement value the Observation has. For example, if Observation.meta.profile entry contains "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdNumericObservation" this measurement is a scalar. As discussed in the Phd Numeric Observation Profile section, scalars are mapped to a valueQuantity element, thus one knows the value[x] element is of type valueQuantity, which may make parsing the value[x] element a little simpler.

#### The Measurement Type: Observation.code.coding.code
The measurement type tells what the measurement is. In HL7 such information is typically done through codes and it is no different here. However, one must understand the coding system in order to interpret what the code means. Consumers of the PHD profiles must understand the MDC code system to interpret the measurement. The MDC code system consists of 32-bit integers. Examples of some common MDC codes are

|MDC Code|Description|
|-
|150456|Pulse Oximeter Oxygen Saturation|
|149530|Pulse Oximeter Pulse Rate|
|188736|Body Mass (weight)|
|150020|Non invasive blood pressure|
|150021|Systolic Non invasive blood pressure|
|150022|Diastolic Non invasive blood pressure|
|150023|Mean Non invasive blood pressure|
|149546|Non invasive pulse rate|
|150364|Body temperature|
|188424|Oral temperature|
|160368|Glucose concentration in plasma|
|188737|Body length (height)|
|‭8410590|ECG heart rate (instant)|

A comprehensive list of MDC codes is available using the [NIST RTMSS Rosetta](https://rtmms.nist.gov/rtmms/index.htm).  It provides descriptions and, if applicable, the units associated with the measurement in both MDC and UCUM. The Rosetta system is updated on a regular basis with new codes and corrections as needed. One can find more information about the MDC code system [here](http://build.fhir.org/mdc.html).

For those consumer applications that would like to have the codes as LOINC and the uploader did not provide them, there is a mapping from MDC to LOINC available [here](https://loinc.org/collaboration/ieee/) with a direct link to the download [here](https://loinc.org/file-access/download-id/9385/). The FHIR MDC to LOINC concept map is available [here](https://fhir.loinc.org/ConceptMap/?url=http://loinc.org/cm/loinc-to-ieee-device-codes). One may freely download and use this material as needed in an implementation license free, but it does require that one create a (free) login account. At the time of this writing there is no comprehensive mapping of MDC to other code systems such as SNOMED CT. A mapping from MDC to SNOMED CT for some of the more common codes is available in the 2017 Continua Design Guidelines [H.813 HIS Interface](https://www.pchalliance.org/continua-design-guidelines) document. The guidelines are freely available for download, however it is not known what the licensing requirements are for use of the SNOMED CT code system.

##### Vital Signs
FHIR requires that a LOINC 'magic' value be present if the measurement is one of the vital signs given [here](http://build.fhir.org/observation-vitalsigns.html). In that case, the Observation.code shall have at least a second coding element containing the LOINC magic value. *The consumer must be aware that the MDC-to-LOINC mapping may be many to one*. For example, both the pulse rate obtained from a Blood Pressure Cuff (149546) and the pulse rate obtained from a Pulse Oximeter (149530) may be mapped to the same LOINC magic value (8867-4). A PHG is not required to use the magic values but may map the MDC codes more specifically to LOINC. 

In addition to the LOINC magic value, FHIR requires an Observation.category.coding.code element with value "vital-signs" when the measurement is a vital sign. When the measurement is not a vital sign, the PHD measurement profiles do not require an Observation.category element.

Below is a snippet showing a code element for a measurement type that is a vital sign (body temperature) along with the FHIR-required 'vital signs' category element:

    "category": [
        {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                    "code": "vital-signs",
                    "display": "Vital Signs"
                }
            ]
        }
    ],
    "code": {
        "coding": [
            {
                "system": "urn:iso:std:iso:11073:10101",
                "code": "150364"
            },
            {
                "system": "http://loinc.org",
                "code": "8310-5"
            }
        ],
        "text": "MDC_TEMP_BODY: Body temp"
    }

##### Caveats
The PHG may express the code in additional coding systems but the consumer cannot rely on it. The PHD profiles in this IG require *only* the MDC code as it is provided by the PHD and the LOINC magic value if the measurement is a vital sign. It is also possible that a vital sign is *not* mapped to LOINC by the PHG. By design, the PHG is written to map the data from the PHD without any knowledge to what the data is. The exception is for the LOINC magic values which require the PHG to pre-code a map. If a new PHD specialization is created after the PHG is already implemented, the new PHD may possess a new MDC code and the new code may be a vital sign (perhaps the new code represents a pulse rate obtained via a new technique). The PHG can still populate the Observation.code.coding.code with the MDC code as that is provided in the PHD protocol, but the new MDC code will not be in its pre-coded local map of MDC codes to LOINC magic values.

#### The Time Stamp: Observation.effective[x]
All measurements contain a time stamp which is either an instant in time, a dateTime data type, or a period of time, a Period data type. The period has both a start and end. Results of a workout session are a common type of measurement with a period. The 'instant' data type is not used as it is permissible for PHDs to report time at resolutions greater than a day in which case there is no time zone. An activity monitor reporting only daily summaries could be an example of a PHD using such a resolution.

All time stamps with resolutions finer than a day contain the offset to UTC. If the offset is -00:00, it means that the offset to local time is not known, and what is being reported is UTC time, even though the measurement is taken in Japan. If the offset is +00:00, it means the offset IS known; the measurement just happens to be in a time zone that is UTC. 

Below is an example of the effective[x] when the time stamp is an instant in time:

    "effectiveDateTime": "2019-05-10T16:47:31-04:00"

##### The Coincident Time Stamp
The consumer can obtain further information about the time stamp from the coincident time stamp Observation identified by the profile value "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdCoincidentTimeStampObservation". A reference to the coincident time stamp Observation may be present in the Observation.extension.valueReference element. If the reference is NOT present, it means that the PHD did not provide a time stamp, and the PHG used the time of reception as the time stamp. Only PHDs that send live data are allowed to send measurements without time stamps.

If the PHD sent the measurement with a time stamp, there will be an Observation.derivedFrom element referencing the coincident time stamp Observation resource. The Observation can be used to determine if the PHD had a time fault. A time fault means the PHD had measurements with time stamps but lost its sense of current time for those measurements. Such an error could occur on a battery change or from a bug in the PHD code. If the PHD loses its sense of current time there is no way for the PHG to validate the time stamps or correct them. Time faults need to be reported to assure that the end user of the data is aware that the time stamps are untrustworthy. This Coincident Time Stamp can also be used to see if the PHG needed to correct the time stamp, and if it did, by how much. In that manner one can get the originally reported time stamps by the PHD and its original time line. 

Additional information about the Coincident Time Stamp can be found [here](CoincidentTimeStamp.html).

#### The PHG reference: Observation.extension.valueReference:
The reference to the Device resource containing the PHG properties is the only extension used in this implementation guide. An example of the element is shown below:

    "extension": [
        {
            "url": "http://hl7.org/fhir/StructureDefinition/observation-gatewayDevice",
            "valueReference": {
                "reference": "Device/12"
            }
        }
    ]

The extension is one of the [registered extensions](http://hl7.org/fhir/observation-profiles.html) for Observations.

#### The PHD reference: Observation.device:
The reference to the Device resource containing the properties of the PHD that took the measurement is placed in the Observation.device element.

#### The Patient reference: Observation.subject:
The reference to the Patient resource containing information about the patient upon whom the measurement was taken is placed in the Observation.subject element.

#### The Performer references: Observation.performer[]:
In many cases the patient is also the person that is taking the measurement. In other cases a general physician may be using a PHD in his clinic. When known to the gateway a reference to the performer may be present in this element, otherwise this element may be absent.

#### References to Other Observations: Observation.derivedFrom.reference:
There are situations where a given Observation is an important part of another Observation such as a glucose meal context measurement giving additional information about a glucose concentration measurement. In that case the context measurement will have an Observation.derivedFrom.reference element that points to the Observation resource containing the glucose measurement. Another common case where an Observation references another Observation is in an activity monitor. Results of an exercise session such as miles run, calories burned, average and maximum heart rates, etc. are reported as Observations where each Observation points to the master session Observation which has the activity type and duration (period).

An example of a reference to another Observation is shown below:

    "derivedFrom": [
        {
            "reference": "Observation/1294"
        }
    ]

There is no way to ascertain from the reference whether the Observation is a Coincident Time Stamp Observation or another measurement Observation. One must examine the Observation.meta.profile element of the referenced Observation to ascertain that information.

#### Additional Descriptions: Observation.component:
In this section we further define Observation details that a PHD may provide but are uncommon. The reader may wish to skip to to the description of the measurement values sections [here](#measurement-values-that-are-single-number-or-scalar) and return to this section when relevant.

PHDs can send measurements that have additional descriptive information. An example would be a pulse oximeter indicating the modality used when taking the measurement. Some of the additional information reported can only occur if the measurement value is a of a specific value type such as a quantity. Additional information is reported in an Observation.component element. The type of additional information is given by the Observation.component.code element. The value of the additional information is given by the Observation.component.value[x] element. PHDs support the following types of additional information:

|Type of additional information|code|When it can occur|component.value[x]|Description|
|-
|supplemental type|68193 (MDC code)|Can occur with all measurement values|valueCodebaleConcept| provides a further description of the measurement type. Can be multiple supplemental type component entries.|
|relative time stamp|67985 (MDC code)|Can occur with all measurement values|valueQuantity| Gives the value of the time stamp when relative times are used|
|high resolution relative time stamp|68073 (MDC code)|Can occur with all measurement values|valueQuantity| Gives the value of the time stamp when high resolution relative times are used|
|Accuracy|67914 (MDC code)|Only Quantities|valueQuantity| Gives the accuracy of the measurement value in the units of the measurement value|
|Alert operational state|68746.n (ASN1ToHL7 code where n = 0, 1, or 2)|Only Quantities|valueCodeableConcept (V2 binary 'Y' or 'N')| Determines whether an alert threshold is off or on.|
|Alert operational text string|68104 (MDC code)|Only Quantities|valueString| A human readable string describing the lower and upper alert thresholds in that order.|
|Current Limits|67892 (MDC code)|Only Quantities|valueRange| The lower and upper threshold values in the units of the reported measurement quantity|
|Measurement Confidence 95|68236 (MDC code)|Only Quantities|valueRange| Gives a range that the manufacturer is 95% confident that the actual reported measurement is within that bounds|
|Threshold notification string|68232 (MDC code)|Only Quantities|valueString| Human readable string describing thresholds. Similar to the Alert operational text string|

At the time of this writing, only the supplemental types and the high resolution relative time stamp 'additional descriptions' are used by current PHDs on the market. Some of the text string descriptions are unlikely to be used given that the IEEE 11073-20601 specification only allows ASCII 127 and consumers of the data are likely to provide their own descriptions customized to their locale.

##### Supplemental Types
Supplemental type information is indicated by the Observation.component.code.coding.code element having the value 68193. The value type of a supplemental type entry is always a CodeableConcept and is therefore given by Observation.component.valueCodeableConcept.coding.code. There may be more than one Observation.component entry containing supplemental type information. An example of a supplemental types component entry is as follows:

    "component": [
        {
            "code": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "68193"
                    }
                ],
                "text": "MDC_ATTR_SUPPLEMENTAL_TYPES: Supplemental information"
            },
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "150588"
                    }
                ],
                "text": "MDC_MODALITY_SPOT: Modality Spot"
            }
        }
    ]

A 'spot modality' means that the pulse oximeter sensed over a period long enough to obtain a stable average.

##### Relative Times
A PHD may use a relative time clock. A relative time clock is nothing but a series of ticks with a fixed interval between ticks. The IEEE 11073-20601 standard allows for two types of relative time clocks where the standard specifies what the fixed interval between ticks is. Clearly such a clock is much simpler for a PHD to implement. As long as the PHD provides its current tick value, the PHG can convert these relative times to a user-friendly wall clock time. The time stamp reported in the Observation.effective[x] element is always the user-friendly wall clock time.

However, there may be use cases where the relative time stamp is desired. Relative time stamps have, by spec, a resolution of either 125 microseconds or microseconds depending upon which relative time clock is used. FHIR only reports time stamps to the millisecond. If one's use case requires knowing the time stamp to the microsecond, one will need to obtain the reported ticks in this component element. The coincident time stamp Observation will, in this case have information about the current relative time ticks, if, for some reason that is needed. 

Note that just because a PHD uses a relative time clock it does not mean that the PHD reports the time stamp at that resolution. One must look at the corresponding PHD Device resource to see what the actual resolution of the relative time clock is.

At the time of this writing there are no PHDs on the market that use relative time stamps because they need very precise time stamps for their measurements. Relative time stamp use has been for simplicity and reduced power consumption. Devices that need very precise time stamps are much more likely to be Point of Care Devices (PoCDs) used in hospital environments.

There are two types relative time stamps defined by IEEE 11073-20601. A 'relative time' with a maximum resolution of 125 microseconds and a 'high resolution relative time' with a maximum resolution of microseconds. Which relative time stamp is used is given by the MDC code in the Observation.component.code.coding.code element:

|MDC Code|Description|
|-
|67985|Relative Time|
|68073|High resolution relative time|

The value of the relative time is reported as a valueQuantity in units of microseconds for BOTH types of relative time stamps. An example of a component containing high resolution relative time stamp information is as follows:

    "component": [
        {
            "code": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "68073"
                    }
                ],
                "text": "MDC_ATTR_TIME_STAMP_REL_HI_RES: High resolution relative time stamp"
            },
            "valueQuantity": {
                "value": 1234534,
                "system": "http://unitsofmeasure.org",
                "code": "us"
            }
        }
    ]

##### Accuracy
Accuracy information is indicated by the Observation.component.code.coding.code element having the value 67914. The accuracy applies only to measurement values that are quantities. It gives the maximum deviation as an absolute value of the reported measurement value from the actual measurement over the entire range of the measurement. It is reported in the units of the measurement itself. Though the IEEE 11073 specializations encourage providing this value it is not mandatory and few market PHDs implement it. An example of an accuracy entry for a thermometer is shown below:

    "component": [
        {
            "code": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "67914"
                    }
                ],
                "text": "MDC_ATTR_NU_ACCUR_MSMT: Measurement accuracy"
            },
            "valueQuantity": {
                "value": 0.1,
                "system": "http://unitsofmeasure.org",
                "code": "Cel"
            }
        }
    ]

##### Current Limits
The Current Limits component is currently only used in the Pulse Oximeter specialization. It gives the low and high threshold limit values of the primary measurement being monitored. The Current Limits  applies only to measurement values that are quantities. When either threshold limit is met an alarm event is triggered if the alarm for the given threshold limit is enabled. If this component is present, an Alert Operational State component shall also be present which indicates the disabled/enabled state of the alarms.

The entry is indicated by the Observation.component.code.coding.code element having the value 67892. The value is encoded in an Observation.component.valueRange element. The units have the same units as the primary measurement. An example of a Current Limits entry is shown below:

    "component": [
        {
            "code": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "67892"
                    }
                ],
                "text": "MDC_ATTR_LIMIT_CURR: Current lower and upper alarm threshold values"
            },
            "valueRange": {
                "low": {
                    "value": 88,
                    "system": "http://unitsofmeasure.org",
                    "code": "%"
                },
                "high": {
                    "value": 100,
                    "system": "http://unitsofmeasure.org",
                    "code": "%"
                }
            }
        }
    ]

##### Alert Operational State
The Alert Operational State is identified by an Observation.component.coding.code containing one of three possible [ASN1ToHL7](CodeSystem-ASN1ToHL7.html) codes 67846.n where n is 0, 1, or 2. When reported, there will be a component entry for all three states. The Alert Operational state is used in the Pulse Oximeter specialization. The Alert Operational State applies only to measurement values that are quantities. 

The Alert Operational State is a state and not en event. It indicates that the PHD supports an alert mechanism for the primary measurement. It does not indicate that the alert has been triggered. What these alert thresholds might be are indicated in the Current Limits component. A PHD that reports this state shall also report the Current Limits values.

The value of the component entry is a CodeableConcept using the V2 binary code system of "Y" or "N". *When the value is "Y", the condition is disabled which maybe contrary to expectation*. The three entries are as follows:

|ASN1ToHL7 Code|Description|
|-
|67846.0|Indicates both the high and the low limit alerts are *disabled* when "Y"|
|67846.1|Indicates the low limit alert is *disabled* when "Y"|
|67846.2|Indicates the high limit alert is *disabled* when "Y"|

An example of an entry where the low alert alarm is enabled is as follows:

    "component": [
        {
            "code": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7",
                        "code": "67846.0"
                    }
                ],
                "text": "lim-alert-off: Alerts limits state"
            },
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                        "code": "N"
                    }
                ],
                "text": "At least one alert limit is enabled"
            }
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7",
                        "code": "67846.1"
                    }
                ],
                "text": "lim-low-off: Alerts lower limit state"
            },
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                        "code": "N"
                    }
                ],
                "text": "The lower alert limit is enabled"
            }
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7",
                        "code": "67846.2"
                    }
                ],
                "text": "lim-high-off: Alert high limit state"
            },
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                        "code": "Y"
                    }
                ],
                "text": "The high alert limit is disabled"
            }
        }
    ]

It may be convenient for implementers to take advantage of the fact that every ASN1ToHL7 code, though an alpha-numeric string and not a decimal number, contains an MDC code. The digits on the left hand side of the period, when converted to an integer, are an MDC code. The MDC code 67846 in the example above is the Alert Operational State Attribute identifier.

##### Alert Operational Text String
The Alert Operational Text String provides a human readable string describing the lower and upper threshold limits expressed in the Current Limits component. It is currently used only in the Pulse Oximeter specialization. The Alert Operational Text String applies only to measurement values that are quantities.

The entry is indicated by the Observation.component.code.coding.code element having the value 68104. The text string is limited to US ASCII. The value is encoded in the Observation.component.valueString element. Both the 'low' and 'high' strings are encoded into a single valureString entry in an application-dependent manner. The strings are not machine processable.

An example of a component entry is as follows:

    "component": [
        {
            "code": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "678104"
                    }
                ],
                "text": "MDC_ATTR_AL_OP_TEXT_STRING: PHD provided threshold descriptions"
            },
            "valueString": "Low limit for SpO2 - High limit for SpO2"
        }
    ]

##### Measurement Confidence 95
The Measurement-Confidence-95 component is currently used only in the Continuous Glucose specialization. The compoent gives a lower and upper bound between which the manufacturer is 95% confident that the actual reported measurement is within that bounds. The Measurement Confidence 95 applies only to measurement values that are quantities. 

The entry is indicated by the Observation.component.code.coding.code element having the value 68236. The value is encoded in an Observation.component.valueRange element. The ranges have the same units as the primary measurement. An example of a Measurement Confidence 95 entry is shown below:

    "component": [
        {
            "code": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "68236"
                    }
                ],
                "text": "MDC_ATTR_MSMT_CONFIDENCE_95: Current lower and upper alarm threshold values"
            },
            "valueRange": {
                "low": {
                    "value": 98,
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                },
                "high": {
                    "value": 100,
                    "system": "http://unitsofmeasure.org",
                    "code": "mg/dL"
                }
            }
        }
    ]

The above states that the Continuous Glucose Monitor PHG is 95% sure that the reported measurement of (say 99 mg/dL) lies between 98 and 100 mg/dL.

##### Threshold Notification String
This component contains a human readable string regarding the various threshold settings a PHD might have. Currently, only the Continuous Glucose Monitor specialization defines the use of this string with respect to its threhold settings. The Threshold Notification String applies only to measurement values that are quantities. 

The entry is indicated by the Observation.component.code.coding.code element having the value 68232. The text string is limited to US ASCII. The value is encoded in the Observation.component.valueString element.

An example of a component entry is as follows:

    "component": [
        {
            "code": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "68232"
                    }
                ],
                "text": " MDC_ATTR_THRES_NOTIF_TEXT_STRING: PHD provided information about the threshold"
            },
            "valueString": "Glucose concentration has gone under the minimum"
        }
    ]



### Measurement Status
Every real device is going to experience challenges at some time. These challenges can interfere with the measurement and therefore need to be reported. One could argue that measurements with errors should not be delivered, but in a scenario where the PHG might be headless and one is happy that the patient can even take the measurement, it may be important to know that the measurement attempt was made. Therefore this IG will report any measurement it receives from the PHD including error states and let the end user decide what to do with it.

There are other non-error special conditions that may also be reported, such as the measurement is test or demo data.

Depending upon what the special condition is, it is reported in either the dataAbsentReason, interpretation, or meta.security element. All of these entries are CodeableConcepts. When the condition is reported in the dataAbsentReason, there will be no measurement value entry in accord with the FHIR specification, even if the PHD reports a measurement value. Note that there may be multiple interpretation entries but only one dataAbsentReason element.

The table below lists the special conditions reported and in what elements they are found. The code system from which the code is drawn is also shown.

|Condition reported by PHD | Observation element and code system used|
|-
|measurement invalid|dataAbsentReason.coding.code="error"<br/>dataAbsentReason.coding.system="http://terminology.hl7.org/CodeSystem/data-absent-reason"|
|measurement questionable|interpretation.coding.code="questionable" <br/> interpretation.coding.system="http://hl7.org/fhir/uv/pocd/CodeSystem/measurement-status" |
|measurement not available|dataAbsentReason.coding.code="not-performed"<br>dataAbsentReason.coding.system="http://terminology.hl7.org/CodeSystem/data-absent-reason |
|calibration ongoing|interpretation.coding.code="calibration-ongoing"<br/> interpretation.coding.system="http://hl7.org/fhir/uv/pocd/CodeSystem/measurement-status" |
|test data|meta.security.coding.code="HTEST"<br/> meta.security.coding.system="http://terminology.hl7.org/CodeSystem/v3-ActReason" |
|demo data|meta.security.coding.code="HTEST"<br/> meta.security.coding.system="http://terminology.hl7.org/CodeSystem/v3-ActReason" |
|validated data|interpretation.coding.code="validated-data" <br/>interpretation.coding.system="http://hl7.org/fhir/uv/pocd/CodeSystem/measurement-status"  |
|early indication|interpretation.coding.code="early-indication" <br/> interpretation.coding.system="http://hl7.org/fhir/uv/pocd/CodeSystem/measurement-status" |
|measurement ongoing|dataAbsentReason.coding.code="temp-unknown"<br>dataAbsentReason.coding.system="http://terminology.hl7.org/CodeSystem/data-absent-reason" |
|measurement value exceeded boundaries|interpretation.coding.code="in-alarm" <br/>interpretation.coding.system="http://hl7.org/fhir/uv/pocd/CodeSystem/measurement-status" |
|alarm indication turned off|interpretation.coding.code="alarm-inhibited"<br/>interpretation.coding.system="http://hl7.org/fhir/uv/pocd/CodeSystem/measurement-status" |

In addition to the conditions listed above, when the measurement value is a quantity, PHDs may also report one of a set of special values, "Not a Number", "Positive infinity", or "Negative infinity". These errors can results from a failure of the floating point software or hardware, or the inability of the sensor to completely acquire a value. These errors are reported in the dataAbsentReason element and will be discussed in the sections discussing the measurement values. "Not a Number" is the most common special condition reported by PHDs currently on the market. Reporting of the other special situations listed above are, in practice, rare.

#### Identifier
To prevent data duplication during uploads, and enable use of conditional create transactions, identifiers are provided for the Observations described in this IG. No additional meaning is associated with those identifiers. Other systems may add further identifiers.

### Measurement Values that are Single-Number or Scalar
Scalar numeric measurements are the most common type of measurement reported by PHDs. Temperature, weight, height, miles run, pulse rate, etc. are examples. Scalar numeric measurements are reported in Observation resources following the Phd Numeric Observation Profile. The scalar values are reported in the Observation.valueQuantity element. If the PHD reports a special value; Not a number, Positive infinity, Negative infinity, and two other possible values unknown to FHIR, an Observation.dataAbsentReason element replaces the valueQuantity and there is no value[x] element.

An Observation resource following the Phd Numeric Observation Profile will have an Observation.meta.profile entry containing "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdNumericObservation".

When there is no special value the Observation.valueQuantity is populated with the scalar value, the units, and the system. The units and system are UCUM unless the PHG does not know the UCUM translation for the MDC unit code. The latter can happen if a new specialization, written after the PHG was implemented, introduces a new MDC unit code not previously used in PHDs. The scalar value is reported with the precision indicated by the PHD. Thus 2 and 2.00 represent the same value but measured to a different precision.

|FHIR element|Description|
|-
|Observation.valueQuantity.value|Measurement value: It will have the precision reported by the PHD, thus the numerical value 2 could be reported as 2, 2.0, or 2.00 depending upon the sensor precision|
|Observation.valueQuantity.code|units in UCUM|
|Observation.valueQuantity.system="http://unitsofmeasure.org"|code system is UCUM|

If a special value is reported an Observation.dataAbsentReason replaces the valueQuantity. The dataAbsentReason is a CodeableConcept and will have the following possible codes from the data absent reason coding system "http://terminology.hl7.org/CodeSystem/data-absent-reason":

 - Observation.dataAbsentReason.coding.code="not-a-number"
 - Observation.dataAbsentReason.coding.code="positive-infinity"
 - Observation.dataAbsentReason.coding.code="negative-infinity"
 - Observation.dataAbsentReason.coding.code="error"

The Observation.dataAbsentReason.coding.system in the above cases is always

 - Observation.dataAbsentReason.coding.system="http://terminology.hl7.org/CodeSystem/data-absent-reason"

IEEE 11073-20601 defines two other special values that are not translated to FHIR which are encoded as "error". To date, there has been no market PHD which reports the other two special values.

An example of the valueQuantity in the Phd Numeric Observation Profile for a thermometer reporting a value of 35.6 &deg;C is as follows:

    "valueQuantity": {
        "value": 35.6,
        "system": "http://unitsofmeasure.org",
        "code": "Cel"
    }

### Measurement Values that are Multi-Number or Compounds
Multi-number or compound or vector quantities are reported in Observation.component elements. There is one component for each compound entry or vector projection. A vector or compound measurement follows the Phd Compound Numeric Observation Profile. An Observation follows the compound profile if the Observation.meta.profile contains a "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdCompoundNumericObservation" entry.

There is no primary Observation.value[x] entry and there is no Observation.dataAbsentReason unless the *entire* measurement had an error, in which case there will be no compound entries either. It is possible for each compound entry to have its own error and that will be reported in an Observation.component.dataAbsentReason element. All Observation.component entries could have dataAbsentReason entry but that does NOT mean the entire measurement has an Observation.dataAbsentReason entry. It is also possible that a component will have its own interpretation element of the same type as shown in the Measurement Status section. Currently there are no market PHDs that generate an Observation.component.interpretation element.

Compound Observations will have a code indicating what the 'entire' measurement is, for example, non-invasive blood pressure or acceleration. Each Observation.component element will have its own code describing each individual compound or vector entry, for example, the systolic, diastolic, and mean pressures for the blood pressure or x-, y-, and z-projections of an acceleration.

Each Observation.component will have the following:

|FHIR element|Description|
|-
|Observation.componentN.code.coding.code|MDC code telling what the entry is|
|Observation.componentN.code.coding.system="urn:iso:std:iso:11073:10101"|MDC code system identifier|
|Observation.component.valueQuantity.value|the scalar value of the given entry with the precision indicated by the PHD|
|Observation.component.valueQuantity.code|the units (as UCUM)|
|Observation.component.valueQuantity.system="http://unitsofmeasure.org"|UCUM code system identifier|

Note that the Observation.component.code element is subject to the same FHIR LOINC magic value requirement as the Observation.code element if the component is one of the vital signs [here](http://build.fhir.org/observation-vitalsigns.html). The Systolic and diastolic pressures are in that list, but the MEAN component is not.

An example of a Blood Pressure measurement would be as follows:

The Observation.code and Observation.category (since the measurement is a vital sign) entries describing the 'entire' measurement:

    "category": [
        {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                    "code": "vital-signs"
                }
            ],
            "text": "Vital Signs"
        }
    ]
    "code": {
        "coding": [
            {
                "system": "urn:iso:std:iso:11073:10101",
                "code": "150020"
            },
            {
                "system": "http://loinc.org",
                "code": "55284-4"
            }
        ],
        "text": "MDC_PRESS_BLD_NONINV: Blood pressure"
    },

and the individual Observation.component entries describing each compound entry where the MEAN entry was unable to be determined and reported a NaN (Not a Number):

    "component": [
        {
            "code": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "150021"
                    },
                    {
                        "system": "http://loinc.org",
                        "code": "8480-6"
                    }
                ],
                "text": "MDC_PRESS_BLD_NONINV_SYS: Systolic blood pressure"
            },
            "valueQuantity": {
                "value": 116,
                "system": "http://unitsofmeasure.org",
                "code": "mmHg"
            }
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "150022"
                    },
                    {
                        "system": "http://loinc.org",
                        "code": "8462-4"
                    }
                ],
                "text": "MDC_PRESS_BLD_NONINV_DIA: Diastolic blood pressure"
            },
            "valueQuantity": {
                "value": 71,
                "system": "http://unitsofmeasure.org",
                "code": "mmHg"
            }
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "urn:iso:std:iso:11073:10101",
                        "code": "150023"
                    }
                ],
                "text": "MDC_PRESS_BLD_NONINV_MEAN: Mean blood pressure"
            },
            "dataAbsentReason": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/data-absent-reason",
                        "code": "not-a-number"
                    }
                ],
                "text": "not-a-number (Not a number)"
            },
        }
    ]

The Phd Compound Numeric Entry Profile can contain additional compound entries as noted in the [Additional Descriptions](#additional-descriptions-observationcomponent) section above. However, the codes of all Observation.component entries that are part of a compound measurement will always have an MDC entry (not ASN1ToHL7) and the MDC entry will ***never*** have a partition value (the upper 16 bits) equal to 1.

#### Remark
There will always be a discussion about whether compounds should be reported together in a single Observation or as a separate Observations. Both approaches are totally reasonable. This IG does not make that decision. That decision is made by the designers of the PHD specialization standard. If the PHD reports the measurement as a compound, it is mapped as a compound.

### Measurement Values that are Codes
Sometimes the PHD measurement value is a code. Like every other code in FHIR, one will need a dictionary to look up what the code means. Measurements that are codes follow the Phd Coded Enumeration Observation profile. Observations following that profile will have an Observation.meta.profile entry containing "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdCodedEnumerationObservation".

The measurement value is reported in an Observation.valueCodeableConcept element. Coded measurements are usually 'context' measurements that provide extra information about another measurement. They will often have an Observation.derivedFrom reference pointing to the Observation resource they support. There are no coded enumeration measurements that are vital signs.

An example of a coded measurement is a meal context in a glucose monitor:

    "valueCodeableConcept": {
        "coding": [
            {
                "system": "urn:iso:std:iso:11073:10101",
                "code": "8417872"
            }
        ],
        "text": "MDC_CTXT_GLU_MEAL_POSTPRANDIAL: After lunch/dinner"
    }

This measurement indicates that the glucose concentration measurement was taken after a meal.

### Measurement Values that are Events or States
PHDs support a measurement value type that indicate a set of states or events, for example, an independent living monitor may be surveilling an elderly patient's room and report its current state 'door closed', 'window closed', 'climate control on', 'patient in room', and 'lights off'. The report may have been triggered by an event like 'patient entered room'. (There is no such measurement type as a current room state but it illustrates the concept.) PHDs have an efficient way to package such reports into a single integer. This type of reporting is done when more than one state and/or event can occur simultaneously. In order to understand such a report one has to know what the state or event is, and its value. States and events are binary. A state is either on or off and an event either happens or it doesn't. There is no corresponding HL7 data type for this kind of measurement thus the [ASN1ToHL7](CodeSystem-ASN1ToHL7.html) code system has been developed to express these states and events as codes. The V2 binary "Y"/"N" code system is used to express the corresponding values.

Measurement values that fall into this category are mapped to an Observation following the Phd Bits Enumeration Observation profile. An Observation following this profile is indicated by an Observation.meta.profile entry containing "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdBitsEnumerationObservation".

Each event or state is reported in a component element. The Observation.component.code will be the ASN1ToHL7 code indicating what the state or event is. The value of the state or event will be in an Observation.component.valueCodeableConcept entry using the V2 binary code system. It should be noted that 'state' values must be reported for either state. It is as important to know whether the door is opened or closed. Events are only required to be reported when they happen.

Implementers should not make any assumption about the state assignment. For example, to assume that 'something opened' is signified by a "Y" can lead to misinterpretation. The monitor specification may have been designed with the idea that everything closed was the desired state and signified it with "Y". The ASN1ToHL7 code system will have the assignment and readers will need to examine it.

In future PHD versions the PHD will be able to indicate that is does not support certain state or event flags in a given measurement report. This situation is expressed by replacing the Observation.component.valueCodeableConcept element with an Observation.component.dataAbentReason element with reason "unsupported". Currently there are no market PHDs that support this feature.

Event and/or state measurements have no primary Observation.value[x] entry and there is no Observation.dataAbsentReason unless the *entire* measurement has an error, in which case there will be no state of event entries either. It is possible for each state or event entry to be unsupported and that will be reported with a Observation.component.dataAbsentReason element. Even if every Observation.component entry reports 'unsupported' that does not have the same meaning as the entire measurement being in error.

In structure the states and/or events measurements are similar to compound or vector measurements. It is also possible that state and/or event measurements have '*additional descriptions*' as discussed in the [Additional Descriptions](#additional-descriptions-observationcomponent) section. To distinguish the measurement component entries from the additional description component entries one only needs to examine the Observation.component.code.coding.system. If it is ASN1ToHL7, it is part of the measurement. The ASN1ToHL7 additional description entry [alert operation state](#alert-operational-state) is not possible in a state or event measurement.

Each Observation.component entry will have the following:

|FHIR element|Description|
|-
|Observation.component.code.coding.code|ASN1ToHL7 code telling what the entry is|
|Observation.component.code.coding.system="http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7"|ASN1ToHL7 code system identifier|
|Observation.component.valueCodeableConcept.coding.code|either "Y" or "N"|
|Observation.component.valueCodeableConcept.coding.systen="http://terminology.hl7.org/CodeSystem/v2-0136"|the V2 binary code system|

The 'independent living' example mentioned above does not currently exist in any specialization but it is illustrative of the concept. However, a pulse oximeter device sensor status measurement containing several different events does exist. An example of such a measurement is shown below:

The overall measurement type is given in the Observation.code element:

    "code": {
            "coding": [
                {
                    "system": "urn:iso:std:iso:11073:10101",
                    "code": "150604"
                }
            ],
            "text": "MDC_PULS_OXIM_DEV_STATUS: Measuring process issues"
        }

and the components containing the events:

    "component": [
        {
            "code": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7",
                        "code": "150604.2"
                    }
                ],
                "text": "sensor-displaced"
            },
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0136",
                        "code": "Y"
                    }
                ],
                "text": "Sensor is incorrectly placed on user"
            }
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7",
                        "code": "150604.7"
                    }
                ],
                "text": "signal-pulse-questionable"
            },
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0136",
                        "code": "Y"
                    }
                ],
                "text": "Questionable pulse detected"
            }
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7",
                        "code": "150604.10"
                    }
                ],
                "text": "signal-low-perfusion"
            },
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0136",
                        "code": "Y"
                    }
                ],
                "text": "Signal experiencing low perfusion"
            }
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7",
                        "code": "150604.11"
                    }
                ],
                "text": "signal-poor"
            },
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0136",
                        "code": "Y"
                    }
                ],
                "text": "Signal is poor"
            }
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7",
                        "code": "150604.12"
                    }
                ],
                "text": "signal-inadequate"
            },
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0136",
                        "code": "Y"
                    }
                ],
                "text": "Signal is inadequate"
            }
        }
    ]

All of the entries are events in this example so the values are always "Y" indicting the event occurred. One might note that the ANS1ToHL7 code 150604.*x* in all cases contains the MDC code of the measurement 150604. That relationship will always be true for all event and state measurement value types. In addition, the MDC code of the overall measurement will never have a partition (the upper 16 bits) value of 1.

### Periodic measurements
Periodic measurements are typically waveforms like ECG traces and are a sequence of scalars.
Measurement values that fall into this category are mapped to an Observation following the Phd Rtsa Observation profile. An Observation following this profile is indicated by an Observation.meta.profile entry containing "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdRtsaObservation". 'Rtsa' means real time sample array.

Periodic measurements are reported in Observation.valueSampledData and Observation.referenceRange elements as follows:

|FHIR element|Description|
|-
|Observation.valueSampledData.data[i]|Contains the scaled samples separated by spaces|
|Observation.valueSampledData.origin.code<br/>Observation.valueSampledData.origin.system|Contains the units (as UCUM) <br/>"http://unitsofmeasure.org"|
|Observation.valueSampledData.origin.value|Contains the intercept value in the rescaling equation|
|Observation.valueSampledData.scaleFactor|Contains the scale factor in the rescaling equation|
|Observation.valueSampledData.period|gives the time interval between samples in milliseconds|
|Observation.valueSampledData.dimensions|Always 1 in PHD (multi-dimensional arrays are not supported)|
|Observation.referenceRange.high.value|Upper value that the original sequence can obtain|
|Observation.referenceRange.high.code<br/>Observation.referenceRange.high.system|the units of the upper value (as UCUM) which shall be the same as the units in the valueSampledData element <br/>"http://unitsofmeasure.org"|
|Observation.referenceRange.low.value|Lower value that the original sequence can obtain|
|Observation.referenceRange.low.code<br/>Observation.referenceRange.low.system|the units of the lower value (as UCUM) which shall be the same as the units in the valueSampledData element <br/>"http://unitsofmeasure.org"|

To obtain the original values of the measured sequence one uses the following equation:

    original_value[i] = valueSampledData.scaleFactor * valueSampledData.data[i] + valueSampledData.origin.value

or the familiar equation of a line

     y(i) = mx(i) + b

The Observation.referenceRange element is for convenience and is not necessary for decoding the data. It was designed for plotting as it gives the upper and lower bounds of the trace at any time (it does not mean that either value is obtained in the transmitted sequence). One can create a graph with such limits without examining the sequence.

It is possible that the periodic measurement is a vital sign, for example, a heart rate. If it is a vital sign, the same FHIR-required LOINC magic value rules apply as they do for scalar and vector measurements.

### String measurements
PHDs can send a measurement value that is just an arbitrary human readable string. An example of such a measurement might be the name of an exercise program on a piece of gym equipment.

String measurement values are mapped to an Observation following the Phd String Enumeration Observation profile. An Observation following this profile is indicated by an Observation.meta.profile entry containing "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdStringEnumerationObservation".

The measurement is reported in an Observation.valueString element which has the value of the human readable string.

An example of this measurement is as follows:

    "valueString": "Test Strip Buckled"

String measurements are rare in PHDs.

### The PHD Coincident Time Stamp Observation Resource
The coincident time stamp is a comparison of the PHD's and PHG's time lines. PHDs have limited resources and are often battery driven and therefore depend upon the user or the PHG to set its time. Though it is possible for PHDs to support an external time synchronization there are currently no market PHDs that do such. The time lines of PHDs can therefore be dubious. PHGs are required to support external time synchronization and if possible, to obtain the local offset to UTC.

In the PHD-PHG exchange, the PHG asks the PHD for its current time, time synchronization state, and accuracy. At the time of the query the PHG also records its current time. The PHG compares the two time lines, the two states of synchronization, and the two states of synchronization accuracy. If the PHG is better synchronized, the PHG will correct the PHD reported times by the difference between the two time lines. The PHG will also set the PHD's time if the PHD supports it, automatically bringing the two time lines into synchrony. 

If the PHD is better synchronized than the PHG, the PHG reports the PHD's times unaltered.

The coincident time stamp also indicates whether there is a time fault. In the case of relative times, the coincident time stamp provides the 'anchor' that allows the PHG to create wall clock times from the PHD's 'tick' values.

The following core information is available from the coincident time stamp observation:

|FHIR element|Description|
|-
|Observation.code.coding.code|MDC code that indicates what type of time clock is used by PHD. It is one of:<br/>absolute time (local time with no offset to UTC)<br/>base offset time (local time with offset to UTC)<br/>relative time (a tick count)<br/>high resolution relative time (a tick count with high resolution)|
|Observation.effectiveDateTime|the PHG's current time - absent if the PHD is better synchronized than the PHG|
|Observation.valueDateTime<br/>Observation.valueQuantity<br/>Observation.dateAbsentReason.coding.code="unknown"|the PHD's current time if base offset or absolute time<br/>the PHD's current time if a relative time<br/>PHD has a time fault|

If the Observation containing the measurement has no reference to a coincident time stamp, it means the PHD provided no measurement time stamp and the PHG used the time of reception as the current time stamp.

The coincident time stamp follows the Phd Coincident Time Stamp Observation Profile. An Observation following this profile is indicated by an Observation.meta.profile entry containing "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdCoincidentTimeStampObservation".

All readers should check whether or not there is a time fault. Otherwise the information provided by this Observation is mostly for auditing.

### The PHD Device Resource
The PHD Device resource follows the Phd Device Profile. It is identified by the Device.meta.profile element containing the entry "http://hl7.org/fhir/uv/phd/StructureDefinition/PhdDevice". Its structure definition is found [here](StructureDefinition-PhdDevice.html).

The PHD Device resource contains the following information about the PHD in the following elements:

 - Device.identifier
   -  **IEEE EUI-64 System identifier**
   - IEEE EUI-48 Bluetooth Address if the PHD uses Bluetooth transports
   - EUI-64 ZigBee address if the PHD uses ZigBee transports
   - USB Pid and Vid values if the PHD uses USB transports
 - Device.manufacturer
   - **Manufacturer name**
 - Device.modelNumber
   - **Model number**
 - Device.serialNumber
   - *serial number*
 - Device.partNumber
   - part number
 - Device.type
   - **PHD (Simple MDS)**
 - Device.version
   - *firmware version*
   - hardware version
   - software version
   - protocol version
   - Continua version
 - Device.specialization
   - **Specialization (Blood pressure, thermometer, etc.)**
   - **Specialization version**
 - Device.property
   - *Time clock capabilities*
   - **Time clock synchronization method**
   - Time synchronization accuracy
   - Time clock resolution
   - Regulation status
   - Certified transports and specializations

The bold items are required to be reported by all PHDs and the italicized items are exposed by most PHDs. The transport addresses are only exposed in the transport protocol and are, of course, only applicable to PHDs using that transport. It is encouraged by the PHG implementer to add the wireless transport address identifiers since these numbers are often available on the device whereas the system id is not. However, obtaining these addresses may not always be possible on certain platforms.

#### UDI
At the moment there are no PHDs which electronically support a UDI. The latest version of the IEEE 11073-20601 protocol will support this field. When the updated standard is released and PHD support seems imminent UDI support will be added to this IG.

#### Device identifier
The identifier contains elements that are (supposed) to uniquely identify the PHD. To distinguish one identifier from another, especially in the case where two identifiers are the same 'bitness' a code from the [ContinuaDeviceIdentifiers](CodeSystem-ContinuaDeviceIdentifiers.html) code system is used in the Device.identifier.type. There are five possible codes defined:

|code|Description|
|-
|SYSID|The IEEE EUI-64 system identifier, required in all IEEE 11073-20601 PHDs|
|BTMAC|The IEEE EUI-48 Bluetooth address|
|ETHMAC|The ethernet mac address|
|ZIGBEE|The 64-bit ZigBee address|
|USB|The USB PID (Product Id) and VID (Vendor Id) number|

The system Id is an EUI-64 which contains an IEEE assigned manufacturer identifier (the 24 most significant bits) with the remaining 40 bits up to the manufacturer. An example of a system Id identifier entry is shown below:

    "identifier" : [
      {
        "type" : {
          "coding" : [
            {
              "system" : "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaDeviceIdentifiers",
               "code" : "SYSID"
           }
          ]
        },
        "system" : "urn:oid:1.2.840.10004.1.1.1.0.0.1.0.0.1.2680",
        "value" : "74-E8-FF-FE-FF-05-1C-00"
      }
    ]

The public Bluetooth address is an EUI-48 which contains an IEEE assigned manufacturer identifier (the 24 most significant bits) with the remaining 32 bits up to the manufacturer. An example of a Bluetooth identifier entry is shown below:

    "identifier" : [
      {
        "type" : {
          "coding" : [
            {
              "system" : "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaDeviceIdentifiers",
              "code" : "BTMAC"
            }
          ]
        },
        "system" : "http://hl7.org/fhir/sid/eui-48/bluetooth",
        "value" : "00-1C-05-FF-E8-74"
      }
    ]

For USB a transport address is far less important as most end users will not know what the VID and PID are or have easy access to them. An example of an USB identifier entry is shown below:

    "identifier" : [
      {
        "type" : {
          "coding" : [
            {
              "system" : "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaDeviceIdentifiers",
              "code" : "USB"
            }
          ]
        },
        "system" : "http://hl7.org/fhir/sid/usb",
        "value" : "0042.F90D"        // pid.vid
      }
    ]

The examples are shown individually but in practice one would see the system id entry and perhaps a transport entry.

#### Simple String Entries
There are several Device elements that are just basic strings. Their meanings are straight forward. In the Phd Device profile they are the following:
 - Device.manufacturer
 - Device.modelNumber
 - Device.serialNumber
 - Device.partNumber

#### Device Type
This field states that the device is a PHD. There is no code in the list of device types provided by FHIR [here](http://build.fhir.org/valueset-device-type.html) that indicates a personal health device. Instead we use the MDC code that indicates a simple MDS (Medical Device System) object. This entry will be identical for all PHDs following this IG. It appears as follows:

    "type" : {
        "coding" : [
          {
            "system" : "urn:iso:std:iso:11073:10101",
            "code" : "65573"
          }
        ],
        "text" : "MDC_MOC_VMS_MDS_SIMP: Continua PHD"
    }

#### Versions
The Device.versions entry is an array of CodeableConcepts. A single version is unable to represent a PHD as they have a version for the sensor hardware, the internal protocol they may be using, the communication software, sensor firmware, and even the Continua version their communication software supports. Not all devices will expose all this information but most PHDs expose their firmware and software versions and those PHDs that are Continua compliant will expose their Continua version.
 
 The [MDC code system](http://build.fhir.org/mdc.html) has a code to identify each one of these version types. The version itself it just a simple alpha-numeric string. The MDC codes for the various version types are as follows:
 
|version type|MDC code|MDC reference identifier|
|-
|Hardware version|531974|MDC_ID_PROD_SPEC_HW|
|Software version|531975|MDC_ID_PROD_SPEC_SW|
|Firmware version|531976|MDC_ID_PROD_SPEC_FW|
|Protocol version|531977|MDC_ID_PROD_SPEC_PROTOCOL|
|Continua version|532352|MDC_REG_CERT_DATA_CONTINUA_VERSION|

Below is an example of the different versions exposed by a Continua certified market PHD:

    "version" : [
        {
          "type" : {
            "coding" : [
              {
                "system" : "urn:iso:std:iso:11073:10101",
                "code" : "531976"
              }
            ],
            "text" : "MDC_ID_PROD_SPEC_FW: Firmware revision"
          },
          "value" : "r2.1"
        },
        {
          "type" : {
            "coding" : [
              {
                "system" : "urn:iso:std:iso:11073:10101",
                "code" : "531975"
              }
            ],
            "text" : "MDC_ID_PROD_SPEC_SW: Software revision"
          },
          "value" : "r1.5 9.7"
        },
        {
          "type" : {
            "coding" : [
              {
                "system" : "urn:iso:std:iso:11073:10101",
                "code" : "531974"
              }
            ],
            "text" : "MDC_ID_PROD_SPEC_HW: Hardware revision"
          },
          "value" : "r1.0"
        },
        {
          "type" : {
            "coding" : [
              {
                "system" : "urn:iso:std:iso:11073:10101",
                "code" : "532352"
              }
            ],
            "text" : "MDC_REG_CERT_DATA_CONTINUA_VERSION: Continua version"
          },
          "value" : "6.0"
        }
    ]

The versions can be helpful identifying different PHD behaviors.

#### Specializations
The Device.specialization entry is probably the entry most consumers will want to expose. This entry states what kind of measurements the PHD takes. It is this entry that tells the consumer if the PHD is a blood pressure cuff, heart rate monitor, pulse oximeter. PHDs can support multiple specializations. This element shall always be populated.

In IEEE 11073-20601 specializations are, in addition to a general description of what the PHD is, standards. The specialization standards are a refinement of the generic standard, and have versions.

A table of some of the most common specializations can be found in the specialization section [here](PhdDeviceProfile.html).

The example below shows an example of a market PHD following the Glucose specialization:

    "specialization" : [
        {
          "systemType" : {
            "coding" : [
              {
                "system" : "urn:iso:std:iso:11073:10101",
                "code" : "528405"
              }
            ],
            "text" : "MDC_DEV_SPEC_PROFILE_GLUCOSE: Glucose Monitor"
          },
          "version" : "1"
        }
    ]

#### Property
The property element contains time clock information and certification information. There will be at least one property entry for every PHD and that is the time synchronization information. The entry will be present even if the PHD supports no time clock, and that will be 'no time synchronization'.

There are two types of properties, one that is described by a list of codes, and one that is described by a list of quantities. The list often contains only one entry. Though not obvious from the FHIR specification, a property cannot contain *both* a quantity and coded element.

The Device.property.type is a CodeableConcept which tells what the property is. There are [MDC](http://build.fhir.org/mdc.html) or [ASN1ToHL7](CodeSystem-ASN1ToHL7.html) codes for each property type a PHD can expose. They are as follows:

|description|Code|Reference identifier|
|-
|Time Synchronization|68220|MDC_TIME_SYNC_PROTOCOL|
|Time capabilities|68219.x|ASN1ToHL7 name|
|High resolution relative time resolution|68224|MDC_TIME_RES_REL_HI_RES|
|Relative time resolution|68223|MDC_TIME_RES_REL|
|Absolute Time time resolution|68222|MDC_TIME_RES_ABS|
|Base offset time resolution|68226|MDC_TIME_RES_BO|
|RR-interval Ticks. This clock is NOT used for time stamps.|68229|MDC_ATTR_TICK_RES|
|Time synchronization accuracy|68221|MDC_TIME_SYNC_ACCURACY|
|Regulation status|532354.x|ASN1ToHL7 name|
|Continua Certified Device List|532353|MDC_REG_CERT_DATA_CONTINUA_CERT_DEV_LIST|

##### Time Synchronization
There will always be a time synchronization entry. It is identified by a property.type.coding.code="68220". It indicates the method the PHD uses to externally synchronize to a time reference. The value is a single valueCode entry. MDC codes express the possible synchronization methods. A table of the possible codes can be found in the time synchronization section [here](PhdDeviceProfile.html). This value is always TIME_SYNC_NONE (532224) if the PHD is not synchronized or has no time clock at all. To date ALL PHDs have no external time synchronization capabilities and this entry is always TIME_SYNC_NONE.

An example of time synchronization property entry is shown below:

    {
      "type" : {
        "coding" : [
          {
            "system" : "urn:iso:std:iso:11073:10101",
            "code" : "68220"
          }
        ],
        "text" : "MDC_TIME_SYNC_PROTOCOL: Time synchronization protocol"
      },
      "valueCode" : [
        {
          "coding" : [
            {
              "system" : "urn:iso:std:iso:11073:10101",
              "code" : "532224"
            }
          ],
          "text" : "MDC_TIME_SYNC_NONE: No time synchronization"
        }
      ]
    }

##### Time Capabilities
The time capabilities defines the types of real time clocks supported, whether the time can be set, whether external time synchronization is possible, etc. Each capability is treated as an event, so most PHGs will only report the capability if the PHD indicates it has the capability. The value is a single valueCode which will be either "Y" if the PHD has the capability or "N" if not. Most PHGs will not report the "N" case as that would significantly increase the size of the resource on the wire.  There may be several such time capability property entries.

The time capabilities property is indicated by the Device.property.type.coding.code having one of the ASN1ToHL7 codes of "68219.x" which is NOT a decimal number! The value is a valueCode with codes "Y" or "N".

The example below gives the time capabilities of a market pulse oximeter:

    {
        "type": {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7",
                    "code": "68219.0",
                    "display": "mds-time-capab-real-time-clock"
                }
            ]
        },
        "valueCode": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0136",
                        "code": "Y"
                    }
                ],
                "text": "real time clock supported"
            }
        ]
    },
    {
        "type": {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7",
                    "code": "68219.1",
                    "display": "mds-time-capab-set-clock"
                }
            ]
        },
        "valueCode": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0136",
                        "code": "Y"
                    }
                ],
                "text": "setting the time supported"
            }
        ]
    },
    {
        "type": {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7",
                    "code": "68219.2",
                    "display": "mds-time-capab-relative-time"
                }
            ]
        },
        "valueCode": [
            {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0136",
                        "code": "Y"
                    }
                ],
                "text": "relative time supported"
            }
        ]
    }

#### Time Clock Resolutions
The time clock resolutions is given by one of four MDC codes for each of the possible types of time clocks. Note that a PHD can only simultaneously support an absolute time (wall clock time with no offset) or base offset time (wall clock time with offset). A PHD may support both relative time clocks thus there could be up to three separate time resolution property entries though in most cases there is only one clock.

The resolution value is a valueQuantity and it gives the time interval between clock 'pulses', regardless of the type of time clock, in units of microseconds.

The property is indicated by the Device.property.type.coding.code having one of four MDC codes "68222, 68223, 68224, and 68226". The value is a valueQuantity.

An example of a time resolution property for an absolute time clock with a time resolution of of one second is shown below:

    {
        "type": {
            "coding": [
                {
                    "system": "urn:iso:std:iso:11073:10101",
                    "code": "68222"
                }
            ],
            "text": "MDC_TIME_RES_ABS: absolute time clock resolution"
        },
        "valueQuantity": [
            {
                "value": 1000000,
                "system": "http://unitsofmeasure.org",
                "code": "us"
            }
        ]
    }

#### Time Tick Resolution for R-R Intervals
The Time Tick resolution is not used for measurement time stamps but for measuring R-R intervals (time between electrocardiogram R-wave peaks) in ECG and Heart Rate specializations. The number of ticks is reported in the valueQuantity.value element in Observations, not the effective[x] which is the time the measurement is taken. These special clocks typically have a resolution of 1024 Hz or better. When R-R intervals are reported, they are reported in units of these ticks, so one must know what the frequency of the clock is. The reason for this special clock is that R-R intervals have been traditionally timed using dedicated crystal oscillators.

The time tick is given as a property and its units are Hertz. However, the R-R interval is given in the number of these ticks and many PHGs will not make the conversion as there is no UCUM code for the MDC dimension code of Ticks and therefore the units reported will be the MDC unit of ticks. Thus the reader will have to obtain the R-R interval using the R-R reported tick value and the tick frequency given in the Device property element.

The property is indicated by the Device.property.type.coding.code having the MDC code "68229". The value is a valueQuantity.

An example of the Tick resolution property entry is given below.

    {
        "type": {
            "coding": [
                {
                    "system": "urn:iso:std:iso:11073:10101",
                    "code": "68229"
                }
            ],
            "text": "MDC_ATTR_TICK_RES: Frequency of ticks"
        },
        "valueQuantity": [
            {
                "value": 1024,
                "system": "http://unitsofmeasure.org",
                "code": "s-1"    // 1/seconds or Hz
            }
        ]
    }

#### Time Synchronization Accuracy
The time synchronization accuracy is the accumulated difference between the PHD's internal clock and external reference source since last synchronization. It is reported in units of microseconds. To date no PHD is externally time synchronized so no PHD reports this attribute value.

The property is indicated by the Device.property.type.coding.code having the MDC code "68221". The value is a valueQuantity.

An example of the time synchronization accuracy property entry is given below.

    {
        "type": {
            "coding": [
                {
                    "system": "urn:iso:std:iso:11073:10101",
                    "code": "68221"
                }
            ],
            "text": "MDC_TIME_SYNC_ACCURACY: Time synchronization accuracy"
        },
        "valueQuantity": [
            {
                "value": 1005,
                "system": "http://unitsofmeasure.org",
                "code": "us"
            }
        ]
    }

#### Regulation Status
The Regulation status is a set of states where only one state is defined. Regulation Status is used to indicate which regulation body the PHD is regulated by. At the moment, the single defined state is assumed to be FDA. All market devices that currently report a regulated state are FDA regulated

The property is indicated by the Device.property.type.coding.code having the ASN1ToHL7 code "532354.x" where the only currently defined entry is x=0. The value is a valueCode which can have a value "Y" or "N". The twist here is that the state has been defined in the negative. ***Thus a code value of "N" means regulated.***  Note that since this is a state, the PHG is required to report both the "Y" and "N" values *if* the PHD reports a regulation status.

An example of an entry for an FDA regulated device is shown below:

    "type": {
        "coding": [
            {
                "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7",
                "code": "532354.0",
                "display": "regulation-status"
            }
        ]
    },
    "valueCode": [
        {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0136",
                    "code": "N"
                }
            ],
            "text": "Device is regulated"
        }
    ]

#### Continua Certified PHD Interfaces
This property is a list of codes that indicate which specializations and transports the PHD has been certified for. Note there is a difference between 'support' and 'certified' support. The Device.specialization entries indicate what the PHD supports. Certified means the PHD has been independently placed through a set of extensive tests for the specialization and the transport over which the specialization operates.

The property is indicated by the Device.property.type.coding.code having the MDC code "532353". The value is a list of valueCodes where the codes come from the [ContinuaPHD](CodeSystem-ContinuaPHD.html) code system. How these codes are generated is given [here](ContinuaPersonalAreaNetworkCodes.html).

An example of a property entry where a PHD is certified for the pulse oximeter specialization over both Bluetooth Low Energy, USB, and Continua version 1.0 where there was no transport indicated, is given below:

    "type": {
        "coding": [
            {
                "system": "urn:iso:std:iso:11073:10101",
                "code": "532353"
            }
        ],
        "text": "MDC_REG_CERT_DATA_CONTINUA_CERT_DEV_LIST: Continua certified device list"
    },
    "valueCode": [
        {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaPHD,
                    "code": "32772"
                }
            ]
        },
        {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaPHD",
                    "code": "8196"
                }
            ]
        },
        {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaPHD",
                    "code": "4"
                }
            ]
        }
    ]

### The PHG Device Resource
The PHG Device Resource, can, in theory have all the same entries as in the PHD Device Resource plus one additional property that gives the list of Continua certified Health and Fitness interfaces. A PHG can be certified for both proper operation with PHD specializations as well as proper operation with downstream servers. One of those 'Health and Fitness' interfaces is the upload to RESTFul FHIR servers. Some PHGs also support uploads of the data as PCD-01 and some support questionnaires.

However, the only required PHG entries are the time synchronization protocol and the system id identifier. For Continua compliance, PHGs must also report their Continua version, the list of certified PHD interfaces, the list of certified Health & Fitness interfaces, and the regulation status.

The time synchronization protocol is important as the PHG plays an important role in the measurement time stamps, and may change them from what the PHD reports if warranted.

Only the entries that are different from the PHD are discussed in the following sections.

#### Device Type
This field states that the device is a PHG. There is no code in the list of device types provided by FHIR [here](http://build.fhir.org/valueset-device-type.html) that indicates a personal health gateway. Instead we use the MDC code that indicates a gateway. This entry will be identical for all PHGs following this IG. It appears as follows:

    "type" : {
        "coding" : [
          {
            "system" : "urn:iso:std:iso:11073:10101",
            "code" : "531981"
          }
        ],
        "text" : "MDC_MOC_VMS_MDS_AHD: Continua Gateway"
    }

#### Continua Certified Health and Fitness Interfaces
This property is a list of codes that indicate which Health and Fitness interfaces the PHG has been *certified* for. There is no entry for which Health and Fitness interfaces the PHG supports, so this field is often erroneously populated to indicate support.

The property is indicated by the Device.property.type.coding.code having the MDC code "532355". The value is a list of valueCodes where the codes come from the [ContinuaHFS](CodeSystem-ContinuaHFS.html) code system. The code system is simple and limited to only eight values at the current time.

An example of a property entry where a PHG is certified for web-services PCD-01 uploads, FHIR uploads, capability exchange, and Authenticated Persistent Sessions is given below:

    "type": {
        "coding": [
            {
                "system": "urn:iso:std:iso:11073:10101",
                "code": "532355"
            }
        ],
        "text": "MDC_REG_CERT_DATA_CONTINUA_AHD_CERT_LIST: Continua certified Health&Fitness interfaces list"
    },
    "valueCode": [
        {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaHFS",
                    "code": "0"  // web services PCD-01 uploads
                }
            ]
        },
        {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaHFS",
                    "code": "7"  // FHIR uploads
                }
            ]
        },
        {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaHFS",
                    "code": "2"  // Capability exchange
                }
            ]
        },
        {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaHFS",
                    "code": "6"  // Authenticated Persistent Sessions
                }
            ]
        }
    ]

### Patient Resource
It is assumed here that the reader has access to the Patient resource uploaded by the PHG and that the PHG uploaded a Patient resource. There is a special case where the PHG will not upload a Patient resource.

The Patient resource is following the Phd Patient Profile as defined [here](StructureDefinition-PhdPatient.html).

There is only one additional required entry in the Phd Patient Profile; the Patient.identifier.

The required Patient.identifier entry contains an identifier.type using the [Table 0203 identifierType](http://terminology.hl7.org/CodeSystem/v2-0203) code system from HL7 v2. The code entry is generally "MR" for medical record number, but other likely entries are "LR" for local registry or "U" for unspecified identifier. The "U" is also used when handling a "John or Jane Doe" unknown patient. 

The identifier.value and identifier.system entries are used to quantify the entries of the given identifier.type. For example, the identifier.system might be the XDSb institutional identifier and the identifier.value the patient record number (also known as the patient identifier).

The above information exposes no personal health information as only the organization responsible for the patient has the dictionary that can relate these codes to a given person.

An example of a Patient.identifier following the XDSb notation is given below:
{% fragment Patient/patientExample-1 JSON BASE:identifier %}

An example of an unknown patient using the Version 2 Table 0004 patient class code system is given below:
{% fragment Patient/patientExample-2 JSON BASE:identifier %}





 


---

File: repos/HL7_SLASH_phd/input/pagecontent/profiles.md


This Implementation Guide specifies profiles on the FHIR <a href="http://hl7.org/fhir/patient.html">Patient</a>, <a href="http://hl7.org/fhir/device.html">Device</a>, and <a href="http://hl7.org/fhir/observation.html">Observation</a> resources. 
Each profile defines constraints, extensions, and terminology requirements for an implementation that claims conformance to this guide.

### Profile Implementation Details
The following profiles are defined in this IG and have their own descriptive page: 

 - [Profiles Overview](ProfilesOverview.html), gives more information on the set of profiles.

 - [Base Observation Profile](StructureDefinition-PhdBaseObservation.html), the base profile for the observation profiles in this IG:
   - [Phd Numeric Observation Profile](StructureDefinition-PhdNumericObservation.html)
   - [Phd Compound Numeric Observation Profile](CompoundNumericObservationProfile.html)
   - [Phd Coded Enumeration Observation Profile](StructureDefinition-PhdCodedEnumerationObservation.html)
   - [Phd BITs Enumeration Observation Profile](BITsEnumerationObservationProfile.html)
   - [Phd Real Time Sample Array Observation Profile](RtsaObservationProfile.html)
   - [Phd String Enumeration Observation Profile](StructureDefinition-PhdStringEnumerationObservation.html)
   

 - [Phd Coincident Time Stamp Observation Profile](CoincidentTimeStampObservationProfile.html), profile to associate two time lines
 
 - [Phd Device Profile](PhdDeviceProfile.html), the profile for a personal health sensor device generating observations
 - [Phg Device Profile](PhgDeviceProfile.html), the profile for a personal health gateway receiving such observations and uploading them to a FHIR server
 - [Phd Patient Profile](PhdPatientProfile.html), the profile for a patient using a PHD


### Alphabetic list of Profile Structure Definitions used in this Guide

These structure definition profiles, along with all the resources used by this Guide, are also found in the Artifacts page.

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

<table class="table-striped" style="width:100%">
<col style="width:40%"/>
<col style="width:60%"/>
{% include table-structuredefinitions.xhtml %}
</table>

<!-- https://stackoverflow.com/questions/27977078/how-do-i-reference-the-root-directory-of-my-site-and-why-wont-jekyll-render-so -->



---

File: repos/HL7_SLASH_phd/input/pagecontent/ProfilesOverview.md

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

This Implementation Guide defines a base measurement profile with the elements common to all measurement profiles. The PHD Numeric, Compound Numeric, Coded Enumeration, BITs Enumeration, String Enumeration, and Rtsa Observation Profiles are used to report one of the six possible measurement types or classes sent by PHDs. 

The PHD Coincident Time Stamp Observation Profile is present for time auditing purposes. 

The PHD Device Profile is used to report the PHD features and properties. 

The PHG Device Profile is used to report the PHG properties.  

The PHD Patient Profile is used to report the patient data. Dependent on the use case the Patient resource may contain only keys to identify the patient that only the health care provider can match to a person. It is also possible that the Patient resource is never uploaded by the PHG. In that case the logical id to a Patient resource on the FHIR server must be provided to the PHG by out-of-band means.

### Notes on Examples
The examples referenced in these profile sections are what is *uploaded*. These examples will differ slightly from similar examples in the Artifacts section. The reason is that the examples in the Artifacts section are required to represent the resource *as it appears on the server*. However, when uploading, create operations either have no logical ids or temporary logical ids. Resources on the server, however, are required to have logical ids.

### Measurement Observation Profiles
The measurement observation profiles mirror the  measurement 'value-types' of that a IEEE 11073-10206 PHD can report. The measurement value-types and their mapping to FHIR Observation elements are shown in the following table:

|Measurement value-type|IEEE 11073-10206 Observation type|FHIR Observation element|
|-
|scalar |Numeric|valueQuantity|
|discrete | Discrete | valueCodeableConcept(s)
| |Single Event |valueCodeableConcept|
| |Multiple Event |component.valueCodeableConcept(s)|
| |Multiple Boolean State (Bitstring)|component.code<br/>component.valueCodeableConcepts|
|string |string enumeration|valueString|
|periodic samples |sample array|valueSampledData|
|compound |Compound |component.value[x]]|

An UML diagram is shown below:

<figure>
{% include acom-observations.svg %}
<figcaption>IEEE 11073-10206 ACOM Observation classes</figcaption>
</figure>

The value-type of measurement is the main difference between the observation-related profiles. The remaining attributes in the metric objects are common to all measurements and are thus mapped in the same way to FHIR.

### PHD Device Profile
The PHD Device profile for the IEEE 11073-20601 MDS object is for the device information like manufacturer name, model number, serial number, time properties, device type (blood pressure cuff, pulse oximeter, etc.), system identifier, transport address, etc. There is also a udiCarrier element that can support the UDI attribute.  

|MDS Attribute|FHIR Device element|
|-
|System-Id<br/>Transport Address (*not an attribute*)|identifier|
|System-Type-Spec-List|specializations|
|device friendly name (*not an attribute <br>but often available from transports*)|deviceName|
|Udi|udiCarrier|
|System-Model|manufacturer<br>modelNumber|
|Production-Specification|serialNumber<br>version<br>partNumber|
|Reg-Cert-Data-List.continua_version|version|
|Mds-Time-Info<br/>Reg-Cert-Data-List.continua-certified-device-list<br/>Reg-Cert-Data-List.regulation_status|property|

### PHG Device Profile
A PHG does not have an MDS object but it is still software on a device and to work with a PHD it must support certain time features. The PHG is also responsible for correcting measurement time stamp data from the PHD if necessary. Thus, reporting the properties of the PHG, especially those properties that may have an influence on the reported measurement data, has been considered important in the Continua architecture. To accomplish this task, the PHG is treated as if it has an MDS object with potentially all the attributes a PHD might have in its MDS. In this manner a PHG can report its equivalent values of the information that would be in the System-Id, System-Model, Production-Specification, Reg-Cert-Data-List, etc. There is, however, no System-Type-Spec-List. It is clear that any measurement type a PHG decodes and maps it must support. Using the 'MDS' concept, the PHG information is mapped to the PHG Device in the same manner as a PHD is mapped to the Device. However, only the System id and time synchronization values are required to be reported.

### Some Notes for Implementers of Uploaders
One of the choices implementers have when uploading resources is to upload individual resources or upload a bundled set of resources. A challenge that implementers will have in either case as that the Observation resources have required references to Patient, PHD Device, and PHG Device resources, and often require references to a Coincident Time Stamp Observation resource and perhaps other Observation resources (when the PHD sends a source handle reference attribute). To obtain these references, one generally has to wait for the upload response from the server. When implementing a generic uploader that must be able to handle Coincident Time Stamps and source-handle-references, this wait can significantly complicate the code and place a burden upon memory requirements.

A transaction Bundle may prove useful in that case. A bundled upload will contain all or several of the resources, and resources within the Bundle that reference one another can be handled using temporary ids. One can use conditional creates on the Patient and Device resources and include them in the Bundle every time or at least until a response from the server gives one the logical ids. When the logical ids are obtained, the Patient and Device resources will no longer need to be included in the bundle. In the mean time, the conditional create assures no data duplication. One could refrain from ever checking the server response and always use conditional creates. However, that approach does put an extra burden on the server and does waste bandwidth. But platforms with limited hardware may have no other choice.

On the other hand, if the use case only involves PHDs that do not emit source-handle-references and do not need a Coincident Time Stamp, the single upload approach may prove to be much more efficient. It is also permissible to mix and match, using both single and Bundled uploads.

### The PHD IG Profiles

 - [Base Observation Profile](StructureDefinition-PhdBaseObservation.html)
   - [Numeric Observation Profile](StructureDefinition-PhdNumericObservation.html)
   - [Compound Numeric Observation Profile](CompoundNumericObservationProfile.html)
   - [Coded Enumeration Observation Profile](StructureDefinition-PhdCodedEnumerationObservation.html)
   - [BITs Enumeration Observation Profile](BITsEnumerationObservationProfile.html)
   - [Rtsa Observation Profile](RtsaObservationProfile.html)
   - [String Enumeration Observation Profile](StructureDefinition-PhdStringEnumerationObservation.html)
 - [Coincident Time Stamp Observation Profile](CoincidentTimeStampObservationProfile.html)
 - [Phd Device Profile](PhdDeviceProfile.html)
 - [Phg Device Profile](PhgDeviceProfile.html)
 - [Patient Profile](PhdPatientProfile.html)




 


---

File: repos/HL7_SLASH_phd/input/pagecontent/Purpose.md

The Personal Health Device Implementation Guide (IG) describes how information from Personal Health Devices (PHDs) shall be represented in FHIR. PHDs are devices that are mostly used in home-care contexts and include devices such as glucose meters, blood pressure cuffs, weight scales, thermometers, etc. The PHD 'information' in this context means both the measurements taken by the PHD and data about the PHD itself. The PHD data includes characteristics, operational status and capabilities of the device, such as the serial number, manufacturer name, and firmware revision. Typically, the PHD is in the patient's home or on the patient's person.

In most cases a Personal Health Gateway (PHG) is responsible for receiving and decoding the information from the PHD. Implementations following this IG are likely to be done on PHGs. When a PHG is involved, information about the PHG shall also be generated.

<img src="PHD-context-complete.jpg" alt="PHD IG context diagram" style="width:100%">

This IG assumes that PHDs use a protocol based on IEEE 11073-10206 or IEEE 11073-20601 when communicating with a PHG or that the PHG is capable of mapping received data into an IEEE 11073-10206  compliant format.  

IEEE 11073-10206 or ACOM defines an Abstract COntent Model for personal health devices and is supported on Bluetooth by the Generic Health Sensor specifications defined by the Bluetooth SIG. ACOM is protocol agnostic and can be implemented on other transport protocols as well. This IG can be used for any PHD for which a mapping can be defined to the IEEE 11073-10206 Abstract Content Model.

IEEE 11073-20601 is an older specification that defines an application layer protocol that assumes an underlying transport protocol stack such as USB PHDC (Personal Health Device Class).  The [Continua guidelines](https://www.pchalliance.org/continua-design-guidelines) defined guidelines for such devices. 
 Implementers could certify their devices following the [Continua Certification Process](https://www.pchalliance.org/continua-certified-continua-compliant-process). This IG still covers mapping IEEE 11073-20601 compliant PHD information into FHIR resources. 

Patient information, such as demographic and administrative information about the patient, is treated separately. First, patient information is not provided by PHDs through standardized protocols and therefore must be supplied and associated by out-of-band means to a PHG. Second, PHD measurements are typically taken remotely requiring that any patient information be transferred across the public network. For protection of Personally Identifiable Information (PII) the Continua guidelines allows PHGs to be supplied with opaque and unique 'keys' by out-of-band means that only the health care provider can link to a patient. In addition, there is a more extreme option where a Patient resource is never generated, allowing a PHG to exist with no PII located anywhere on it. Using these approaches PII is never exchanged on the wire and furthermore, does not need to be present on the PHD or PHG. That being said, this IG does not require that PII be protected. Implementations are free to populate any of the other fields of the Patient resource. A common case where PII is of little concern and even desired is in the handling of fitness data from activity monitors and related fitness devices.

The purpose of this Implementation Guide is to specify the mapping of PHD information to FHIR components. *No interpretations of the data or assumptions about what data is important are specified*. Implementations following this guide map **all** viable data provided by the PHDs. The receiver may handle the data as it sees fit for its use case. For example, a consumer may only be interested in the Observation and Patient resources and therefore discards the Device resources. For this reason, there is no use of the must-support criteria made by this IG.

For consumers (readers) of FHIR data, this Implementation Guide specifies the FHIR resources that contain the PHD information and what elements contain what fields. Readers interested in using the FHIR resources specified by this IG can read the  [Profile Consumers](ProfileConsumers.html) chapter.

 - [Next: Audience](Audience.html)
 - [Previous: Overview](overview.html)

HL7 GitHub location: https://github.com/HL7/phd


---

File: repos/HL7_SLASH_phd/input/pagecontent/RemotePatientMonitoringConsiderations.md

The design of this mapping is influenced by the needs of remote patient monitoring. In this case patients are typically at home using personal health devices (PHDs) to take medical measurements on themselves and uploading that data in digitized form with a personal health gateway (PHG) to a repository where the health care provider can examine that data. There are variations on this basic theme but in general it is assumed that

* Patients are at home or outside of the Health Care Provider Enterprise
* Non-medical professionals, typically the patient, are taking the measurements using Continua PHDs and PHGs
* Continua PHDs are consumer devices
  * Low cost
  * Often battery powered and portable
  * Typically, do not support external time synchronization except from the PHG or patient
* Continua PHGs are consumer devices or applications running on consumer devices
  * Are expected to work with most if not all Continua PHDs
  * Low cost
  * Maybe a dedicated set top box, mobile phone, or personal computer
  * Have more computational resources than PHDs
  * Are capable of being externally synchronized to UTC and local offset
  * In many cases will need to work with PHDs without user intervention
* Health Care Providers may be monitoring thousands of remotely located patients
  * Servicing and support of the remote stations needs to be minimized
  * To the extent possible Continua PHGs should work with future Continua PHDs
* Patients may have more than one PHD and may change PHDs
* Data will be transferred over the public network
  * Patients may be paying for data rates

Based upon these assumptions it is advantageous to design an infrastructure which needs as little maintenance as possible and a mapping algorithm which handles as many types of PHD specializations as possible including specializations developed in the future.

 - [Next: Generic and Extensible Model](GenericModel.html)
 - [Previous: Technical Implementation Guidance](TechnicalImplementationGuidance.html)






---

File: repos/HL7_SLASH_phd/input/pagecontent/resources.md

This page provides a list of the FHIR artifacts defined as part of this Implementation Guide.
### Conformance
#### ImplementationGuide
<ul>{% include list-simple-implementationguides.xhtml %}</ul>
<h4>StructureDefinition</h4>

<ul>{% include list-simple-structuredefinitions.xhtml %}</ul>

<h4>CapabilityStatement</h4>
<ul>{% include list-simple-capabilitystatements.xhtml %}</ul>
<h3>Terminology</h3>
<h4>CodeSystem</h4>
<ul>{% include list-simple-codesystems.xhtml %}</ul>
<h4>ValueSet</h4>
<ul>{% include list-simple-valuesets.xhtml %}</ul>
<h3>Examples</h3>
<ul>{% include list-simple-devices.xhtml %}</ul>
<ul>{% include list-simple-devicemetrics.xhtml %}</ul>
<ul>{% include list-simple-observations.xhtml %}</ul>

### References
IEEE 11073-20601 Part 20601: Application profile—Optimized Exchange Protocol
IEEE 11073-10101 Draft Standard for Health Informatics—Point-of-Care Medical Device Communication—Nomenclature


---

File: repos/HL7_SLASH_phd/input/pagecontent/Rtsa.md

This example results when the device sends a waveform. The value[x] becomes a valueSampledData data type.

Note there is no logical id in this resource as this resource is being uploaded to the server in a create operation. The server will create the logical id and return it to the sender in the response.

<pre>
{
	"resourceType": "Observation",
	"meta": {
		"profile": [
			"http://hl7.org/fhir/uv/phd/StructureDefinition/PhdRtsaObservation"
		]
	},
	"category" : [
		{
		  "coding" : [
			{
			  "system" : "http://hl7.org/fhir/uv/phd/CodeSystem/PhdObservationCategories",
			  "code" : "phd-observation"
			}
		  ]
		}
	  ],	
	"extension": [
		{
			"url": "http://hl7.org/fhir/StructureDefinition/observation-gatewayDevice",
			"valueReference": {
				"reference": "Device/phg-ecde3d4e58532d31.000000000000"
			}
		}
	],
	"status": "final",
	"code": {
		"coding": [
			{
				"system": "urn:iso:std:iso:11073:10101",
				"code": "150452"
			},
			{
				"code": "SampledData",
				"display": "Data is a periodic array"
			}
		],
		"text": "MDC_PULS_OXIM_PLETH: Pleth Wave"
	},
	"subject": {
		"reference": "Patient/patientExample-1"
	},
	"effectiveDateTime": "2018-08-02T02:25:24-04:00",
	"valueSampledData": {
		"origin": {
			"value": 0,
			"system": "http://unitsofmeasure.org",
			"code": "{unitless} 1"
		},
		"period": 0.01,
		"factor": 3.0,
		"dimensions": 1,
		"data": "123 110 97 99 112 118"
	},
	"device": {
		"reference": "Device/phd-00601900010E9234.F45EABA80832"
	},
	"derivedFrom": [
		{
			"reference": "Observation/coin-example-1"
		}
	]
}
</pre>

---

File: repos/HL7_SLASH_phd/input/pagecontent/RtsaObservationProfile.md

The Real Time Sample Array (RTSA) Observation Profile is used when the PHD metric measurement is a periodic sequences of scalars in time, typically waveforms. In theory, this measurement could be split up into a sequence of Numeric Observations but that would be inefficient especially if one is talking about a 1000 samples per second or more. Waveforms are used for spirometry, ECG, pulse oximeter pleth wave traces, etc. 

The measurement is a waveform when the PHD metric contains the following attribute:

<style>table, th, td {
border: 1px solid black;
border-collapse:collapse;
padding: 6px;}</style>

|Attribute|Value|Additional Information|
|-
|Simple-Sa-Observed-Value|A sequence of scaled 8, 16, or 32-bit numbers|Other attributes give scale factors, number of entries, period, and bit-size|

This attribute contain a measurement that is a sequence of scaled periodic values. It is typically used when reporting waveforms. The values are scaled to reduced bandwidth. The bandwidth reduction can be significant in cases where the actual values are small fluctuations about a large average value. The scale factors, number of bits in each sample, the period, and the number of data elements in the sequence are given by a set of support attributes.

IEEE 11073-20601 does not support the concept of compound arrays, so the sampled data is always one dimensional in time only. Reporting a sequence of x, y, z acceleration components from a PHD would require three RTSA objects. FHIR, on the other hand, does support the concept of two-dimensional arrays. It would be possible for the PHG to map the x, y, and z components of an acceleration to a single three-dimensional valueSampledData element. However, doing this task requires pre-existing knowledge about each specialization and cannot be done generically. Therefore this IG does not support such a mapping.

|Support Attribute|Value|Description|
|-
|Sample-Period.*period*|integer|Interval between samples in 1/8<sup>th</sup> milliseconds|
|Sa-Specification.SampleType.*significant-bits*|integer|Number of significant bits in the sample value|
|Sa-Specification.SampleType.*sample-size*|integer|Number of bits in each sample; gives the *X* value in 'Scale-and-Range-Specification*X*'|
|Sa-Specification.*array-size* |integer|Number of samples in 'Simple-Sa-Observed-Value'|
|Scale-and-Range-Specification*X*.*upper-absolute-value*|Mder FLOAT|Highest unscaled value PHD will report *(Optional)*|
|Scale-and-Range-Specification*X*.*lower-absolute-value*|Mder FLOAT|Lowest unscaled value PHD will report *(Optional)*|
|Scale-and-Range-SpecificationX.*upper-scaled-value*|*X*-bit integer|The upper range scaled *(Optional)*|
|Scale-and-Range-SpecificationX.*lower-scaled-value*|*X*-bit integer|The lower range scaled *(Optional)*|

If (*significantBits* < *sampleSize*)
 - the most significant (*sampleSize* - *significantBits*) bits of the sample *i* are zeroed and are treated as unsigned integers

If *significantBits* equals 255
 - the samples are treated as signed integers
otherwise
 - the samples are treated as unsigned integers.

The upper and lower ranges represent the upper and lower actual sensor ranges that can be reported. The name 'absolute' in the attribute does not refer to the mathematical definition of an absolute value. The upper and lower values do NOT mean that a given set of samples has those values or that those values are ever reported by the sensor. However, a graphing application could use those values to define the upper and lower ranges of a graph and be assured that the waveform would never go above or below those boundaries. These upper and lower boundaries are placed in the Observation.referenceRange.low and Observation.referenceRange.high elements, respectively. For a representation of the waveform, the offset and scale factors are sufficient. Reporting the Scale-and-Range-SpecificationX attributes is optional, though they will be needed in deriving the values reported in the valueSampledData element.

The structure definition for the PHD Rtsa Observation Profile is shown [here](StructureDefinition-PhdRtsaObservation.html)

### Mapping RTSA Waveforms To FHIR
Periodic data is mapped to the SampledData data type in FHIR. The SampledData.data element in this data type is also scaled. If *y*[i] is the i<sup>th</sup> entry of the actual unscaled data from the PHD sensor, *y*[i] is obtained from the SampledData type using the following relation:

*y*[i] = d[i] * s + b

where 
 - s = SampledData.scaleFactor
 - b = SampledData.origin.value
 - d[i] = SampledData.data[i]

In the case of the RTSA metric, the i<sup>th</sup> entry of the actual unscaled data from the sensor is obtained from the Simple-Sa-Observed-Value attribute using the following relation:

y[i] = ((A – B)x[i])/(I – J) + A – (A-B)I/(I-J)
where 
 - A = Scale-and-Range-SpecificationX.*upper-absolute-value*
 - B = Scale-and-Range-SpecificationX.*lower-absolute-value*
 - I = Scale-and-Range-SpecificationX.*upper-scaled-value*
 - J = Scale-and-Range-SpecificationX.*lower-scaled-value*
Where X = 8, 16, or 32 and
x[i] = Simple-Sa-Observed-Value.data[i]

Since	 ((A – B)x[i])/(I – J) + A – (A-B)I/(I-J) = d[i] * s + b,

d[i] = x[i] if
 - s = SampledData.scaleFactor = (A – B)/(I – J)
and
 - b = SampledData.origin.value = A –(A-B)I/(I-J) = (BI-AJ)/(I-J)

allowing one to map the Simple-Sa-Observed-Value.data[i] values directly to the SampledData.data[i] values unchanged. It is recommended that the uploader map the RTSA waveform to the Observation.valueSampledData element using the above scaling as it is assumed the PHD chose this scaling for a good reason. However, that does not restrict the uploader using other scalings. As an example, the uploader could decode the scaled values and report the unscaled original sensor values in the Observation.valueSampledData.data element and set the Observation.valueSampledData.scaleFactor to 1.0 and the Observation.valueSampledData.origin.value to 0. This approach is used in PCD-01.

Using the variables 'b' and 's' as defined above the mapping to the FHIR Observation resource is as follows:

|Attribute|FHIR coding|
|-
|Simple-Sa-Observed-Value.*data[i]*|Observation.valueSampledData.data[i]|
|Unit-Code.*code*|Observation.valueSampledData.origin.code (as UCUM when available)|
|See calculation of 'b' above|Observation.valueSampledData.origin.value = b*|
|See calculation of 's' above|Observation.valueSampledData.scaleFactor = s*|
|Sample-Period.*period*/8|Observation.valueSampledData.period (milliseconds)|
|Concept not supported in 20601.|Observation.valueSampledData.dimensions = 1|
|Scale-and-Range-SpecificationX.*upper-absolute-value*|Observation.referenceRange.high.value|
|Unit-Code.*code*|Observation.referenceRange.high.code (as UCUM when available)|
|Scale-and-Range-SpecificationX.*lower-absolute-value*|Observation.referenceRange.low.value|
|Unit-Code.*code*|Observation.referenceRange.low.code (as UCUM when available)|

*noting that other scaling options are allowed.

### Conditional Create Identifier Generation
For a general description of the PHD Observation Identifier see the "PHD Observation Identifier" section in [PHD Base Profile](StructureDefinition-PhdBaseObservation.html). The table below lists the items that make up the identifier.

|Entry|value|Additional information|
|-
|device|"PHD Device.identifier.value"|This value is the PHD IEEE EUI-64 system identifier|
|patient|"Patient.identifier.value-Patient.identifier.system" or<br/>provided logical id|The dashes are part of the identifier. <br/>When the service provider gives the PHG a pre-determined patient logical id the PHG creates no Patient resource and has no patient information. In that special case the provided logical id is used|
|type|"Observation.code.coding.code"|See [Obtaining the Observation.code](ObtainObservationCode.html)|
|value|Observation.valueSampledData.period-Observation.valueSampledData.dimensions-Observation.valueSampledData.data[0]|The data absent reason code is used if there is no value|
|units|"Observation.valueSampledData.origin.code|The units are the same for all data points|
|reported PHD timestamp|"timestamp"|See [Generating the PHD Reported Time Stamp](GeneratingtheReportedTimeStampIdentifier.html)|
|supplemental types|"Supplemental-Types.*N*-"|A sequence of 32-bit MDC codes separated by a dash|

The final identifier is made by concatenating the entries above as follows:
 - "device-patient-type-value-units-reported PHD timestamp-supplemental types".

### Additional RTSA Measurement Information
All additional attributes that may be reported in a numerical metric measurement may also be present in an RTSA metric measurement. See the section 'Additional Note that one could report a waveform by reporting each value in the sequence as a sequence of single numeric metric measurements. Of course that would be costly in terms of bandwidth.

### Examples:

A short RTSA observation with a time stamp is shown in [RTSA example](Rtsa.html). Note the valueSampledData.

## Consumers of the RTSA Profile
About the only work a consumer of this profile needs to do is to back-scale the valueSampledData.data[] values to the original values reported by the sensor. The following table summarizes where a reader can obtain the most pertinent information.

|information|Location in Observation.|
|-
|Type of measurement|code.coding.code|
|Time at the start of the waveform|effectiveDateTime|
|Fixed at one|valueSampledData.dimension = 1|
|Time between samples in milliseconds|valueSampledData.period|
|Units of samples|valueSampledData.origin.code|
|Upper range of values|referenceRange.high.value|
|Lower range of values|referenceRange.low.value|
|The actual *n* values|valueSampledData.data[*n*] * valueSampledData.scaleFactor + valueSampledData.origin.value|




---

File: repos/HL7_SLASH_phd/input/pagecontent/Scope.md

The scope of this guide is limited to the modeling, mapping and usage of observations, primarily consisting of physiological measurements, and device data from *communicating* PHDs. Furthermore, these PHDs must communicate a sufficient amount of information in a manner that guarantees the generation of reliable measurement time stamps.

It is anticipated that this guide will be used in any scenario where observations generated by PHDs are needed. For example, a Patient Care profile that requires a patient take one or more measurements using appropriate PHDs and upload those measurements. The Patient Care profile could specify the use of this IG to perform the uploads. The Patient Care profile would then know what FHIR resources to read and how to extract the information of interest from those resources.

This Implementation Guide may be referenced by profiles from the IHE Devices domain or the IHE Patient Care Coordination domain. This guide is concerned with the FHIR data model and specifies how one maps PHD information into FHIR resources and defines FHIR profiles of the FHIR resources involved. This mapping will typically be implemented in a PHG that uploads the PHD information to a FHIR Server.


 - [Next: Use Cases](UseCases.html)
 - [Previous: Audience](Audience.html)


---

