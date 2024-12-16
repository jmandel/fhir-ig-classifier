File: repos/HL7_SLASH_uv-pocd/input/pagecontent/definitions.md


## Abbreviations

See below for definitions of terms

|Abbreviation | Definition|
|---|---|
|AAMI | Association for the Advancement of Medical Instrumentation|
|DIM | Domain Information Model|
|IEC | International Electrotechnical Commission|
|IEEE | Institute of Electrical and Electronic Engineers|
|IHE | Integrating the Healthcare Enterprise|
|JWG7 | Joint Working Group between ISO/TC 215 and IEC/SC 62A|
|MDC | Medical Device Communications|
|MDC Nomenclature | IEEE 11073-10101 Medical Device Communications Nomenclature|
|RTM | Rosetta Terminology Mapping|
|RTMMS | Rosetta Terminology Mapping Management System|
|SDC | Service-oriented Device Connectivity|
|SDPi | Service-oriented Device Point-of-care Interoperability|
|VMD | Virtual Medical Device|
|x73 | Short form sometimes used to refer to the IEEE 11073 standards collectively.|
{: .grid}

## Definitions

| Term | Definition |
|---|---|
|Association for the Advancement of Medical Instrumentation (AAMI) | A standards organization creating standards for medical devices|
|Channel | Umbrella object in the object model that groups together physiological measurement data and data derived from these data. (IEE 11073-10201 DIM)|
| Domain Information Model (DIM) | In IEEE 11073 specifically, it is the model specified by IEEE 11073-10201.|
| International Electrotechnical Commission (IEC) | International standards group, which, among many other things, creates safety, effectiveness, and security standards for medical devices.|
| Integrating the Healthcare Enterprise (IHE) | An international standards “profiling” organization (ISO/TC 215 Liaison A)|
| International Standards Organization (ISO) | Broad standards group. It collaborates with IEC and with IEEE In issuing medical device standards.|
| Medical Device Communications (MDC) | The series title for the entire IEEE 11073 series of standards and its technologies.|
|MDC Nomenclature | A code system embodied in the IEEE-10101 Medical Device Communictions Nomenclature standard, created to comprehensively identify by numeric codes measurements, devices, device components, and other objects in device models, and other data items related to medical device technology.|
|Rosetta Terminology Mapping (RTM) | A superset of the IEEE Medical Device Communications Nomenclature which the IHE RTM Committee uses as a record of the IEEE 11073-10101 MCD Nomenclature and a testing ground for emerging terminologies such as ventilation, infusion pumps and events from all classes of medical devices intended to be used in IHE Connectations and balloted in the IEEE 11073 Point-of-Care WG.|
|Rosetta Terminology Mapping Management System (RTMMS) | A web-based system created by US National Institute of Standards and Technology as an online reference for IEEE 11073 and RTM Terminology.|
|Service-oriented Device Connectivity (SDC) | Family of ISO/IEEE/CEN 11073 device interoperability standards (see TC215 WG2)|
|Service-oriented Device Point-of-care Interoperability (SDPi) | IHE Devices profiles using SDC & FHIR (and HL7 V2)|
|Virtual Medical Device (VMD) | An abstract representation of a medical-related subsystem of a medical device system (MDS) (DIM Standard)|
{: .grid}


---

File: repos/HL7_SLASH_uv-pocd/input/pagecontent/guidance.md



---

File: repos/HL7_SLASH_uv-pocd/input/pagecontent/index.md

### Purpose
This Implementation Guide defines the use of FHIR resources to convey measurements and supporting data 
from acute care point-of-care medical devices (PoCD) intended for use by qualified professional to receiving systems for electronic medical records, 
clinical decision support, and medical data archiving for aggregate quality measurement and research purposes. 
It adds "deep metadata for device observations".  
Key goals include supplementing the measurement values in an Observatiion resourcewith full provenance for traceability, and with 
fuller details of device architecture and dynamically changing attributes such as 
calibration history and battery state than is provided for in a FHIR Observation resource. 

The next release of this Guide intends to cover physiological and technical alerts from medical devices.
Another related implementation guide focuses on home-based personal health devices. 

### Scope and Boundaries
The scope of this Implementation Guide is a FHIR-based treatment of
quantitative and qualitative observations communicated from point-of-care medical devices. Devices without communications capabilities are out of scope. Imaging devices are also out of scope.
Personal devices intented for home health and fitness 
purposes to be used by non-professional users are excluded becasue they are covered by a
related Implementation Guide. See below.

### Intended Readers
This Implementation Guide is intended for 
- clinical users of point-of-care device data, 
- implementers of other health information systems wishing to use this extended data,
- device and device gateway system developers. 

### Structure of this Guide
The "Getting Started" pages, which include a reference page on Abbreviations and Definitions, give a general introduction to the concepts and approach used in this Implementation Guide, relevant to all potential users of this Guide including end users of the data. There are also pages devoted to each of the two main categories of implementers needing developer-level information:

- information relevant to implementers of systems consuming data that has 
and "Profile" section details

- Fuller information for implementers of device and gateway systems who are setting 
up device models in such a way as to  accomodate the needs of data consumer applications.


### Relationship to Other Projects & Guides
This Implementation Guide covers material related to work in other projects and guides including the Personal Health Device Implementation Guide, and IHE Patient Care Device (PCD) profiles.

#### Personal Health Device IG
The [Personal Health Device Implementation guide](http://hl7.org/fhir/uv/phd/) treats wellness and chronic disease management devices used mainly by nonprofessionals in home and exercise settings. 

This Point-of-Care Device Implementation Guide is focused on acute-care devices for professional use mainly in healthcare delivery facilities. 

The Personal Health Device and Point-of-Care Device guides both use information models and nomenclature from the IEEE 11073 Medical Device Communications series of standards and the guides for these two kinds of devices are being developed cooperatively in the Devices On FHIR project with a goal of consistency and ease of use by receiving systems.

#### IHE Patient Care Device (PCD) Profiles
The IHE PCD domain has developed profiles for conveying acute care device data with context using HL7 V2. The base information system and nomenclature are based on the IEEE 11073 Medical Device Communications standards, also used in this FHIR Implementation Guide. 

These profiles cover Device Enterprise Communications (DEC), 
reporting device observations to enterprise systems including near-real-time 
charting to electronic medical records, clinical decision support systems and patient data archive systems. 
That is similar to the scope of this FHIR Implementation Guide.

A planned future FHIR use case for the Devices on FHIR group is the near-real-time communication of physiological and technical alerts to clinicians, and internal device status and state transition information for systems designed to process such information. This is similar to IHE PCD Alert Communication Management (ACM) and Infusion Pump Event Communication (IPEC) profiles.

Other PCD profiles include Implantable Device Cardiac Observations (IDCO), Point-of-Care Infusion Verification (PIV) and Point-of-Care Identity Management (PCIM). Future versions of this Implementation Guide will extend scope to cover related functionality based on FHIR rather than HL7 V2.

#### Vital Signs Profile
The Observation resource is used to record data that is retrieved from a device. Some values that are 
formalized in this resource are required to conform to the 
[Vital Signs Profile](http://hl7.org/fhir/observation-vitalsigns.html),
for example, heart rate or respiratory rate. Many of these are often provided by a PoCD patient-connected device.  
It is possible that in rare cases using this Implementation Guide that a device or device gateway using only ISO/IEEE 11073 terminology codes may not have sufficient information to recognize a particular meaurement as within the the Vital Signs set and determine an equivalent LOINC code and UCUM unit code for the result.  Therefor, provisions must be made to correctly make the mapping for these terms from 11073 to LOINC UCUM, and to ensure that this is done at the earliest possible point.

This is an area of necessary coordination between this IG and the Vital Signs Profile.


### Abbreviations & Definitions

See under "Getting Started" -> "Abbreviations and Definitions"

### Future Guide Revisions
Future capabilities are planned for this General PoCD IG including:
1. Waveform Support optimized for high data volumes
2. Device Events & Alerts including:
  * Basic PCD ACM / IEC 60601-1-8 reporting
  * Status notifications back to the source Device
  
  
  



---

File: repos/HL7_SLASH_uv-pocd/input/pagecontent/mappingdim.md

Within the context of the ISO/IEEE 11073 Point-of-care medical device communication standards, ISO/IEEE 11073-10201 provides an abstract, object-oriented domain information model (DIM) that defines a hierarchical model for structuring medical device data as well as events and services.

### DIM Object Classes
Most object classes in ISO/IEEE 11073 DIM can be mapped to FHIR resources as outlined in the following table.

| DIM Object Class | FHIR Resource |
| ---
| SimpleMDS <br/>HydraMDS <br/>CompositeSingleBedMDS <br/>CompositeMultipleBedMDS | [Device]({{site.data.fhir.path}}device.html) (according to the [MDS Device profile](StructureDefinition-MdsDevice.html)) and <br/>[Location]({{site.data.fhir.path}}location.html) (if needed) |
| VMD | [Device]({{site.data.fhir.path}}device.html) (according to the [VMD Device profile](StructureDefinition-VmdDevice.html)) |
| Channel | [Device]({{site.data.fhir.path}}device.html) (according to the [Channel Device profile](StructureDefinition-ChannelDevice.html)) |
| Numeric | [DeviceMetric]({{site.data.fhir.path}}devicemetric.html) (according to the [Numeric DeviceMetric profile](StructureDefinition-NumericDeviceMetric.html)) and <br/>[Observation]({{site.data.fhir.path}}observation.html) (according to the [Numeric Observation profile](StructureDefinition-NumericObservation.html) or [Compound Numeric Observation profile](StructureDefinition-CompoundNumericObservation.html)) |
| Enumeration | [DeviceMetric]({{site.data.fhir.path}}devicemetric.html) (according to the [Enumeration DeviceMetric profile](StructureDefinition-EnumerationDeviceMetric.html)) and <br/>[Observation]({{site.data.fhir.path}}observation.html) (according to the [Enumeration Observation profile](StructureDefinition-EnumerationObservation.html)) |
| TimeSampleArray <br/> RealTimeSampleArray<br/> DistributionSampleArray | [DeviceMetric]({{site.data.fhir.path}}devicemetric.html) (according to the [Sample Array DeviceMetric profile](StructureDefinition-SampleArrayDeviceMetric.html)) and <br/>[Observation]({{site.data.fhir.path}}observation.html) (according to the [Sample Array Observation profile](StructureDefinition-SampleArrayObservation.html)) |
| Alert <br/> AlertStatus <br/> AlertMonitor | *to be completed* |
| PatientDemographics | [Patient]({{site.data.fhir.path}}patient.html) |
{: .grid}

### DIM Object Attributes
Please refer to the Mappings tab of each profile page for mapping ISO/IEEE 11073 DIM object attributes to FHIR resource elements.

### Mapping Details
#### Measurement Status
Observed values in ISO/IEEE 11073 DIM include a bit field that indicates measurement status. FHIR Observations do not have a single element for this purpose. Instead there is security metadata, dataAbsentReason for missing values, and interpretation to report significance of a result.  
Measurement status information is mapped to `Resource.meta.security`, `Observation.dataAbsentReason` or `Observation.component.dataAbsentReason`, and `Observation.interpretation` or `Observation.component.interpretation` elements. The interpretation value set binding is extended to add relevant codes from the [Measurement status codes](CodeSystem-measurement-status.html) defined in this implementation guide.

| MeasurementStatus Bit | meta.security | dataAbsentReason | interpretation |
| ---
| invalid (0) | UNRELIABLE | error | |
| questionable (1) | UNCERTREL | | questionable |
| not-available (2) | | not-performed | |
| calibration-ongoing (3) | UNCERTREL | | calibration-ongoing |
| test-data (4) | HTEST | | |
| demo-data (5) | HTEST | | |
| validated-data (8) | HRELIABLE | | validated-data |
| early-indication (9) | | | early-indication |
| msmt-ongoing (10) | | temp-unknown | msmt-ongoing |
| msmt-state-in-alarm (14) | | | in-alarm |
| msmt-state-al-inhibited (15) | | | alarm-inhibited |
{: .grid}

Note that dataAbsentReason and interpretation are mutually exclusive: dataAbsentReason shall only be present if there is no observation value, whereas interpretation adds relevant information about an existing observation value.

---

File: repos/HL7_SLASH_uv-pocd/input/pagecontent/mappingsdc.md

Within the context of the ISO/IEEE 11073 Point-of-care medical device communication standards, the ISO/IEEE 11073-10207 Domain Information and Service Model defines the network representation of generic medical devices and consists of the device description and dynamic information about the current device state. 

### DIM Object Classes
Most object classes in ISO/IEEE 11073 SDC can be mapped to FHIR resources as outlined in the following table.

| DIM Object Class | FHIR Resource |
| ---
| MDS | [Device]({{site.data.fhir.path}}device.html) (according to the [MDS Device profile](StructureDefinition-MdsDevice.html)) and <br/>[Location]({{site.data.fhir.path}}location.html) or [Organization]({{site.data.fhir.path}}organization.html) (if needed) |
| VMD | [Device]({{site.data.fhir.path}}device.html) (according to the [VMD Device profile](StructureDefinition-VmdDevice.html)) |
| Channel | [Device]({{site.data.fhir.path}}device.html) (according to the [Channel Device profile](StructureDefinition-ChannelDevice.html)) |
| Numeric | [DeviceMetric]({{site.data.fhir.path}}devicemetric.html) (according to the [Numeric DeviceMetric profile](StructureDefinition-NumericDeviceMetric.html)) and <br/>[Observation]({{site.data.fhir.path}}observation.html) (according to the [Numeric Observation profile](StructureDefinition-NumericObservation.html) or [Compound Numeric Observation profile](StructureDefinition-CompoundNumericObservation.html)) |
| Enumeration | [DeviceMetric]({{site.data.fhir.path}}devicemetric.html) (according to the [Enumeration DeviceMetric profile](StructureDefinition-EnumerationDeviceMetric.html)) and <br/>[Observation]({{site.data.fhir.path}}observation.html) (according to the [Enumeration Observation profile](StructureDefinition-EnumerationObservation.html)) |
| ClinicalInfo | [Observation]({{site.data.fhir.path}}observation.html) (according to the [Observation profile](StructureDefinition-Observation.html)) |
| TimeSampleArray <br/> RealTimeSampleArray<br/> DistributionSampleArray | [DeviceMetric]({{site.data.fhir.path}}devicemetric.html) (according to the [Sample Array DeviceMetric profile](StructureDefinition-SampleArrayDeviceMetric.html)) and <br/>[Observation]({{site.data.fhir.path}}observation.html) (according to the [Sample Array Observation profile](StructureDefinition-SampleArrayObservation.html)) |
| Alert <br/> AlertStatus <br/> AlertMonitor | *to be completed* |
| PatientDemographics | [Patient]({{site.data.fhir.path}}patient.html) (according to the [Patient profile](StructureDefinition-Patient.html)) |
| OperatorDemographics | [Practitioner]({{site.data.fhir.path}}practitioner.html) (according to the [Practitioner profile](StructureDefinition-Practitioner.html)) |
{: .grid}

### SDC Object Attributes
Please refer to the Mappings tab of each profile page for mapping ISO/IEEE 11073 SDC object attributes to FHIR resource elements.

### Mapping Details

#### Patient
For each of the measurements Height and Weight is an Observation Resource requiered with mandatory requirements. Observation.subject shall be present and refer to a Patient resource or MDS Device resource.

Summary of the mandatory requirements for the Height:
- One code in Observation.code which must have
    - a fixed Observation.code.coding.system='http://loinc.org' 
    - a fixed Observation.code.coding.code= '8302-2'
    - 8306-3 -Body height - lying (i.e., body length - typically used for infants) MAY be included as an additional observation code - Other additional Codings are allowed in Observation.code- e.g. more specific LOINC Codes, SNOMED CT concepts, system specific codes. All codes SHALL have an system value
- Either one Observation.valueQuantity or, if there is no value, one code in Observation.DataAbsentReason
    - Each Observation.valueQuantity must have:
        - One numeric value in Observation.valueQuantity.value
        - a fixed Observation.valueQuantity.system="http://unitsofmeasure.org"
        - a UCUM unit code in Observation.valueQuantity.code = 'cm', or '[in_i]'

Summary of the mandatory requirements for the Weight:
- One code in Observation.code which must have
    - a fixed Observation.code.coding.system='http://loinc.org'
    - a fixed Observation.code.coding.code= '29463-7'
    - Other additional Codings are allowed in Observation.code- e.g. more specific LOINC Codes, SNOMED CT concepts, system specific codes. All codes SHALL have an system value
- Either one Observation.valueQuantity or, if there is no value, one code in Observation.DataAbsentReason
    - Each Observation.valueQuantity must have:
        - One numeric value in Observation.valueQuantity.value
        - a fixed Observation.valueQuantity.system="http://unitsofmeasure.org"
        - a UCUM unit code in Observation.valueQuantity.code = 'kg', 'g', or '[lb_av]'

#### Neonatal Patient
Information about the mother should be included in the FHIR Resource RelatedPerson. RelatedPerson.patient should be used for the reference of the patient this RelatedPerson is related to. The relationship can be modeled by using RelatedPerson.relationship with the terminology binding MTH, to express that the RelatedPerson is the mother.

For each of the measurements GestationalAge, BirthLength, BirthWeight and HeadCircumference is an Observation Resource requiered with mandatory requirements. Observation.subject shall be present and refer to a Patient resource or MDS Device resource.

Summary of the mandatory requirements for the HeadCircumference:
- One code in Observation.code which must have
    - a fixed Observation.code.coding.system='http ://loinc.org'
    - a fixed Observation.code.coding.code= '9843-4'
    - Other additional Codings are allowed in Observation.code- e.g. more specific LOINC Codes, SNOMED CT concepts, system specific codes. All codes SHALL have an system value
- Either one Observation.valueQuantity or, if there is no value, one code in Observation.DataAbsentReason
    - Each Observation.valueQuantity must have:
        - One numeric value in Observation.valueQuantity.value
        - a fixed Observation.valueQuantity.system="http://unitsofmeasure.org"
        - a UCUM unit code in Observation.valueQuantity.code = 'cm', or '[in_i]'


Summary of the mandatory requirements for the BirthWeight:
- One code in Observation.code which must have
    - a fixed Observation.code.coding.system='http ://loinc.org'
    - a fixed Observation.code.coding.code= '29463-7'
	- an additional Observation.code.coding.code= '8339-4' shall be provided, to indicate that the value applies to an infant
    - Other additional Codings are allowed in Observation.code- e.g. more specific LOINC Codes, SNOMED CT concepts, system specific codes. All codes SHALL have an system value
- Either one Observation.valueQuantity or, if there is no value, one code in Observation.DataAbsentReason
    - Each Observation.valueQuantity must have:
        - One numeric value in Observation.valueQuantity.value
        - a fixed Observation.valueQuantity.system="http://unitsofmeasure.org"
        - a UCUM unit code in Observation.valueQuantity.code = 'kg', 'g', or '[lb_av]'

Summary of the mandatory requirements for the BirthLength:
- One code in Observation.code which must have
    - a fixed Observation.code.coding.system='http ://loinc.org'
    - a fixed Observation.code.coding.code= '8302-2'
	- an additional Observation.code.coding.code= '89269-5' shall be provided, to indicate that the value applies to an infant
    - Other additional Codings are allowed in Observation.code- e.g. more specific LOINC Codes, SNOMED CT concepts, system specific codes. All codes SHALL have an system value
- Either one Observation.valueQuantity or, if there is no value, one code in Observation.DataAbsentReason
    - Each Observation.valueQuantity must have:
        - One numeric value in Observation.valueQuantity.value
        - a fixed Observation.valueQuantity.system="http://unitsofmeasure.org"
        - a UCUM unit code in Observation.valueQuantity.code = 'cm', or '[in_i]'


Summary of the mandatory requirements for the GestationalAge:
- One code in Observation.code which must have
    - a fixed Observation.code.coding.system='http ://loinc.org'
    - a fixed Observation.code.coding.code= '72147-2'
    - Other additional Codings are allowed in Observation.code- e.g. more specific LOINC Codes, SNOMED CT concepts, system specific codes. All codes SHALL have an system value
- Either one Observation.valueQuantity or, if there is no value, one code in Observation.DataAbsentReason
    - Each Observation.valueQuantity must have:
        - One numeric value in Observation.valueQuantity.value
        - a fixed Observation.valueQuantity.system="http://unitsofmeasure.org"
        - a UCUM unit code in Observation.valueQuantity.code = 'd'

#### Location
For every physicalType of a Location an additional Location Resource needs to be created. If this Location is physically a part of another Location they can only be connected via a Location.partOf Reference to the other Location. It is working in the same way with the managing Organization. Both need to reference the the lowest Location or Organization in the hierarchy because the references point upwards.

| IEEE 11073 SDC | HL7 FHIR Resources | Comment |
| ---
| LocationContextState/Identification/Root | Location.identifier.system ||
| LocationContextState/Identification/Extension | Location.identifier.value ||
| LocationContextState/LocationDetail/Bed | Location.physicalType | An additional Location Resource with the physicalType bd and references (Location.partOf and/or Location.managingOrganization) to another Location/Organization if the Bed is physically a part of a Location/Organization |
| LocationContextState/LocationDetail/Room | Location.physicalType | An additional Location Resource with the physicalType ro and references (Location.partOf and/or Location.managingOrganization) to another Location/Organization if the Room is physically a part of a Location/Organization |
| LocationContextState/LocationDetail/PoC | Organization.type | An additional Organization Resource with the Organization type dept and a reference (Organization.partOf) to another Organization if the PoC is part of an Organization |
| LocationContextState/LocationDetail/Floor | Location.physicalType | An additional Location Resource with the physicalType lvl and references (Location.partOf and/or Location.managingOrganization) to another Location/Organization if the Floor is physically a part of a Location/Organization |
| LocationContextState/LocationDetail/Building | Location.physicalType | An additional Location Resource with the physicalType bu and references (Location.partOf and/or Location.managingOrganization) to another Location/Organization if the Building is physically a part of a Location/Organization |
| LocationContextState/LocationDetail/Facility | Organization.type | An Organization Resource with the Organization type prov and a reference (Organization.partOf) to another Organization if the Facility is part of an Organization |
{: .grid}

#### ImagingStudy
The WorklflowConextState should only be used if the ContextAssociation is Assoc (=Associated).
The ImagingProcedure/RequestedProcedureId can be mapped to the id of the basedOn reference, which exists when the ImagingProcedure is based on a ServiceRequest. 

| IEEE 11073 SDC | HL7 FHIR Resources |
| ---
| WorkflowContextState/WorkflowDetail/RequestedOrderDetail/ImagingProcedure/AccessionIdentifier/Root WorkflowContextState/WorkflowDetail/RequestedOrderDetail/ImagingProcedure/StudyInstanceUid/Root | ImagingStudy.identifier.system ||
| WorkflowContextState/WorkflowDetail/RequestedOrderDetail/ImagingProcedure/AccessionIdentifier/Extension WorkflowContextState/WorkflowDetail/RequestedOrderDetail/ImagingProcedure/StudyInstanceUid/Extension | ImagingStudy.identifier.value |
| WorkflowContextState/WorkflowDetail/RequestedOrderDetail/ImagingProcedure/Modality/Code | ImagingStudy.modality.code |
| WorkflowContextState/WorkflowDetail/RequestedOrderDetail/ImagingProcedure/Modality/CodingSystem | ImagingStudy.modality.system |
| WorkflowContextState/WorkflowDetail/RequestedOrderDetail/ImagingProcedure/Modality/CodingSystemVersion | ImagingStudy.modality.version |
| WorkflowContextState/WorkflowDetail/RequestedOrderDetail/ImagingProcedure/ProtocolCode/Code | ImagingStudy.procedureCode.coding.code |
| WorkflowContextState/WorkflowDetail/RequestedOrderDetail/ImagingProcedure/ProtocolCode/CodingSystem | ImagingStudy.procedureCode.coding.system |
| WorkflowContextState/WorkflowDetail/RequestedOrderDetail/ImagingProcedure/ProtocolCode/CodingSystemVersion | ImagingStudy.procedureCode.coding.version |
{: .grid}

#### ServiceRequest
The WorklflowConextState should only be used if the ContextAssociation is Assoc (=Associated).
The resource ServiceRequest may be used to share relevant information required to support a referral or a transfer of care request from one practitioner or organization to another. 
	
| IEEE 11073 SDC Status | HL7 FHIR | Comment |
| ---
| WorkflowContextState/WorkflowDetail/AssignedLocation | ServiceRequest.locationReference ||
| WorkflowContextState/WorkflowDetail/RelevantClinicalInfo | ServiceRequest.supportingInfo ||
| WorkflowContextState/WorkflowDetail/RequestedOrderDetail/Performer | ServiceRequest.performer ||
| WorkflowContextState/WorkflowDetail/RequestedOrderDetail/ReferringPhysician WorkflowContextState/WorkflowDetail/RequestedOrderDetail/RequestingPhysician | ServiceRequest.requester | The resource ServiceRequest may be used to share relevant information required to support a referral or a transfer of care request from one practitioner or organization to another. Therefore, both the RequestingPhysician and the ReferringPhysician are mapped to the ServiceRequest.requester. If both are existing, there should be a reference (ServiceRequest.basedOn) from the RequestingPhysician to the ReferringPhysician. |
| WorkflowContextState/WorkflowDetail/PerformedOrderDetail/ResultingClinicalInfo | DiagnosticReport.result ||
{: .grid}

#### Valuesets

##### Valuesets for AbstractDeviceComponentState/ActivationState:

| IEEE 11073 SDC Status | HL7 FHIR Device.statusReason | Comment |
| ---
| On | online ||
| NotRdy | not-ready ||
| StndBy | standby ||
| Off | off ||
| Shtdn | not-ready ||
| Fail | not-ready ||
{: .grid}

##### Valuesets for AbstractMetricState/ActivationState:

| IEEE 11073 SDC Status | HL7 FHIR DeviceMetric.operationalStatus | Comment |
| ---
| On | on ||
| NotRdy | off ||
| StndBy | standby ||
| Off | off ||
| Shtdn | off ||
| Fail | off ||
{: .grid}

##### Valuesets for MetricCategory:

| IEEE 11073 SDC MetricCategory | HL7 FHIR DeviceMetric.category | Comment |
| ---
| Unspec | unspecified ||
| Mrsmt | measurement ||
| Clc | calculation ||
| Set | setting ||
| Preset | unspecified ||
| Rcmm | unspecified ||
{: .grid}

##### Valuesets for calibration state:

| IEEE 11073 SDC ComponentCalibrationState | HL7 FHIR DeviceMetric.calibration.state | Comment |
| --- 
| No | not-calibrated ||
| Req | calibration-required ||
| Run | not-calibrated ||
| Cal | calibrated ||
| Oth | unspecified ||
{: .grid}

##### Valuesets for calibration type:

| IEEE 11073 SDC ComponentCalibrationType | HL7 FHIR DeviceMetric.calibration.type | Comment |
| ---
| Offset | offset ||
| Gain | gain ||
| TP | two-point ||
| Unspec | unspecified ||
{: .grid}

##### Measurement Validity
Observed values in ISO/IEEE 11073 SDC include a field that indicates measurement validity. FHIR Observations do not have a single element for this purpose. Instead there is security metadata, dataAbsentReason for missing values, and interpretation to report significance of a result.  
Measurement validity information is mapped to `Resource.meta.security`, `Observation.dataAbsentReason` or `Observation.component.dataAbsentReason`, and `Observation.interpretation` or `Observation.component.interpretation` elements. The interpretation value set binding is extended to add relevant codes from the [Measurement status codes](CodeSystem-measurement-status.html) defined in this implementation guide.

| MeasurementValidity | meta.security | dataAbsentReason | interpretation |
| ---
| Vld | REALIABLE |||
| Vldated  | HRELIABLE | | validated-data |
| Ong | | temp-unknown|msmt-ongoing|
| Qst | UNCERTREL | | questionable|
| Calib | UNCERTREL | | calibration-ongoing|
| Inv  | UNRELIABLE | error | |
| Oflw | | | > |
| Uflw | | | < |
| NA | | not-performed | |
{: .grid}

Note that dataAbsentReason and interpretation are mutually exclusive: dataAbsentReason shall only be present if there is no observation value, whereas interpretation adds relevant information about an existing observation value.

---

File: repos/HL7_SLASH_uv-pocd/input/pagecontent/mappingv2.md

The following mapping information is based on the commonly-used PCD-01 transaction 
defined by the Integrating the Healthcare Enterprise Patient Care Device program
for reporting device data. 

It is not feasible to include all relevant details in this brief account.  
Refer to the detailed information in:

- the [HL7 Version 2.7 specification](http://www.hl7.eu/HL7v2x/v27/std27/hl7.html) for 
general details including descriptions
especially [Chapter 2.A](http://www.hl7.eu/HL7v2x/v27/std27/ch02a.html) for data types, 
which have some differences from FHIR data types

- The [IHE Patient Care Devices Technical Framework](https://www.ihe.net/resources/technical_frameworks/#dev), 
Volume 2, Transactions ([download PDF](https://www.ihe.net/uploadedFiles/Documents/PCD/IHE_PCD_TF_Vol2.pdf`), 
Section 3.x, for specifics on which
HL7 V2 segments and fields are used in the profile, their data types, and usage notes.
This document is the source of the information in the tables of this Guide.

The common use case for device data reporting is for a device or a device gateway to be responsible mainly for
the observations and ancillary data on the configuration and functioning of the devices themselves.
Primary responsibility for patient identity and location information is with other hospital information
systems. In many cases such data is available only by linking to resources provided by these other systems.
Some device systems and gateways will have limited information about patient identity and location.

The implementer of a system creating and organizing links among the FHIR resources
must use their understanding of the capabilities of the devices being interfaced,
the context or contexts for their implementation,
including the sources for authorative patient identity, location, and reliable information 
on the associations between particular patients and particular device instances
to making an adequate, patient-safe, set of FHIR resources within that context.

**Explanations of columns in the summary tables**

| Column | Content |
| --- | --- |
| DT | Data Type. See [HL7 2.7 Specification Chapter 2A](http://www.hl7.eu/HL7v2x/v27/std27/ch02a.html#Heading2) |
| TBL# | HL7 V 2.7 Code Tables, corresponding roughly to FHIR ValueSets. See [HL7 2.7 Specification Chapter 2C](http://www.hl7.eu/HL7v2x/v27/std27/ch02c.html#Heading2)
{: .grid}

|Field ID|DT|Card.|TBL#|HL7 Field Name|FHIR Mapping|NOTES|
| --- | --- | --- | --- | --- | --- | --- |
|OBX-2|ID|[0..1]|125|Value Type||Identifies the kind of data in OBX-5 Observation Value. Ex. NM Numeric, NA Numeric Array|
|OBX-3|CWE|[1..1]||Observation Identifier|Observation.code|Identifers the observation according to a coding system.|
|OBX-4|ST|[1..1]||Observation Sub-ID||See Interpretation of OBX-4 Observation Sub-ID in IHE PCD-01|
|OBX-5|Varies|[0..1]||Observation Value|Observation.value[x]|Kind of FHIR value mapped to depends on HL7 V2 Value Type. Ex. For NM Numeric Value Type, will map to valueQuantity. Other common mappings NA Numeric Array -> SampledData, ST String Data -> ValueString|
|OBX-6|CWE|[0..1]||Units||Where Units are applicable to Observation Value, it will map within the FHIR Observation.value[x]. Ex. valueQuantity.unit|
|OBX-7|ST|[0..1]||References Range|Observation.referenceRange|Range of values inside of which the measurement is considered normal for the condition of the patient.|
|OBX-8|IS|[0..1]|78|Abnormal Flags|Observation.interpretation|See note below on OBX-8 Abnormal Flags in PCD-01`|
|OBX-11|ID|[1..1]|85|Observation Result Status||See table Observation result status|
|OBX-16|XCN|[0..1]||Responsible Observer|Observation.performer|Some devices support entry of observer information. If available, this information should be provided.|
|OBX-18|EI|[0..1]||Equipment Instance Identifier||A unique identifier of the particular piece of equipment used in the observation.|
|OBX-20|CWE|[0..*]|163|Observation Site|Observation.bodySite|Site on the body where the observation was made.|
{: .grid}

## Detail notes for OBX segment mappings 

### OBX-3 Observation Identifier. PCD-01 uses the IEEE 11073-10101 Nomenclature Standard. In FHIR, for observations 
in the Vital Signs category, the corresponding LOINC code must also be given. 
Equivalent codes in other code systems such as SNOMED may also be given.

### OBX-4 Observation Sub-ID
The IHE PCD-01 sub-id field is a key identifying the place of the Metric within the containment tree of Virtual Medical Devices (medical subsystems), channels (groupings of metrics 
within a VMD), and Metrics (individual measurement objects supported by the device. In
the profile, it is a 4-tuple of nonzero positive integers separated by dots (periods), 
where the first element identifies the Medical Device System (MDS), the second identifies 
the VMD, the third identifies the channel, and the fourth identifies the Metric.
Each of these integer elements maps to a hierachical level of the containment tree.
They can be used to look up attributes in "device-related" OBX segments relating to
each logical element (MDS, VMD, Channel, Metric). The "device-related" elements have
a special form for the Sub-ID with trailing zero elements identifying the logical level
of the device element they represent: three trailing zero elements identify an MDS, two 
a VMD, two a channel, and one a metric. See the IHE PCD Technical Framework for details.

### OBX-5 Observation Value 
Kind of FHIR value mapped to depends on HL7 V2 Value Type. 
Ex. For NM Numeric Value Type, will map to valueQuantity. 
Other common mappings NA Numeric Array -> SampledData, ST String Data -> ValueString.
See HL7 V2.7 Specification and FHIR Specification for other cases.

### OBX-7 Reference Range. 
In IHE PCD-01, Reference Range gives the alarm range set by the user on the device, 
if available in the output of the device. 
Ex. 40-120 set for a patient for heart rate means that values outside of that range will result in an alarm condition signaled by the device.

### OBX-8 Abnormal Flags

This field provides for adding information about a particular abnormal result. This is a repeatable field,
so that multiple flags from the following tables may be included, separated by the HL7 repeat separator,
which is normally the character '~'.

#### OBX-8 Abnormality types

|Abnormality Type|Abbreviation|
| --- | --- |
|Normal, not abnormal|N|
|Below low normal|L|
|Below lower panic limits|LL|
|Above high normal|H|
|Above higher panic limits|HH|
|Abnormal (for non-numeric results)|A|
{: .grid}

#### OBX-8 Measurement status

|MeasurementStatus ::= BITS-16 { ... }|OBX-8  |OBX-11|Column1|
| --- | --- | --- | --- |
|No bits set ? raw device measurement; measurement okay, has not been reviewed nor validated||R|
|invalid(0),|INV|X|
|questionable(1),|QUES|R|
|not-available(2),|NAV|X|
|calibration-ongoing(3),|CAL|R|
|test-data(4),|TEST|R|
|demo-data(5),|DEMO|R|
|validated-data(8),|#NAME?||F|
|early-indication(9), -- early estimate of value|EARLY|R|
|msmt-ongoing(10), -- indicates that a new measurement is just being taken -- (episodic)|BUSY|X|
|msmt-state-in-alarm(14), -- indicates that the metric has an active alarm condition|ALACT|R|
|msmt-state-al-inhibited(15) -- metric supports alarming and alarms are turned off -- (optional)|ALINH|R|
{: .grid}

#### OBX-8 Missing or invalid data flags

|Value|ExtendedValue?|Description|Comment|
| --- | --- | --- | --- |
|NI|Yes|No information. There is no information which can be inferred from this exceptional value.|No value is provided in OBX-5.|
|NAV|Yes|Temporarily not available. Information is not available at this time but it is expected that it will be available later.|No value is provided in OBX-5.|
|OFF|Yes|Numeric measurement function is available but has been deactivated by user.|No value is provided in OBX-5.|
|>|N|Above absolute high-off instrument scale.|Provide the high-off instrument scale number in OBX-5 if available.|
|<|N|Below absolute low-off instrument scale.|Provide the low-off instrument scale number in OBX-5 if available.|
{: .grid}

### OBX-18 Equipment Instance Identifier 

In IHE PCD-01, the purpose of this field is to uniquely identify the source of the observation based on the EUI-64 of the Virtual Medical Device (VMD) if that has a unique identifier, or if not, the EUI-64 of the Medical Device System.

### OBX-20 Observation site
This often does not need to be given, since in many cases the OBX-3 Observation Identifier clearly indicates the body site. Otherwise, in IHE PCD-01, body site values from MDC nomenclature may be used. Equivalent codes from other systems, e.g. SNOMED, should also be given in the CodeableConcept for user convenience.

## OBR Observation Request Segment

The OBR segment in a device data segment contains information mostly about the order associated with 
the data in the set of OBX segments that follows the OBR segment.
For monitoring or other device data, there is often not a specific order for such data. The responsible
clinician for the patient will decide dynamically what monitoring is required depending on the changing
state of the patient. For device data, the main interest in the OBR segment is that the timestamp
is implicitly the timestamp for all the OBX segments in the set following the OBR, so that 
a receiving system needs to persist the OBX timestamp so that it may be copied into the Observation
resources generated from those OBX segments.


|FIELD|DT|OPT|RP/#|ELEMENT NAME|FHIR_MAPPING|NOTES|
| --- | --- | --- | --- | --- | --- | --- |
|OBR-2|EI|O||Placer Order Number|
|OBR-3|EI|R||Filler Order Number|
|OBR-4|CWE|R||Universal Service Identifier|
|OBR-7|DTM|RE||Observation Date/Time|
|OBR-16|XCN|O|Y|Ordering Provider|
{: .grid}


## MSH Message Header Segment

This segment largely contains HL7 Version 2-specific information.
Only a small proportion of it is pertinent to implementers of this Guide
except possibly as context information.

|SEQ|LEN|DT|Usage|Card.|TBL#|Element name|FHIR Mapping|Comments|
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|MSH-3|227|HD|R|[1..1]|361|Sending Application|
|MSH-4|227|HD|RE|[0..1]|362|Sending Facility|
|MSH-5|227|HD|RE|[0..1]|361|Receiving Application|
|MSH-6|227|HD|RE|[0..1]|362|Receiving Facility|
|MSH-7|24|DTM|R|[1..1]||Date/Time of Message|
|MSH-8|40|ST|X|[0..0]||Security|
|MSH-9|15|MSG|R|[1..1]||Message Type|
|MSH-10|199|ST|R|[1..1]||Message Control Id|
|MSH-11|3|PT|R|[1..1]||Processing Id|
|MSH-12|60|VID|R|[1..1]||Version ID|
|MSH-22|567|XON|X|[0..0]||Sending Responsible Organization|
|MSH-23|567|XON|X|[0..0]||Receiving Responsible Organization|
|MSH-24|227|HD|X|[0..0]||Sending Network Address|
|MSH-25|227|HD|X|[0..0]||Receiving Network Address|
{: .grid}

## PID Patient Identification Setment

As has been stated, other hospital systems mainly manage patient identity data and device systems or gateways 
play little role. The few data fields that are sometimes pertinent to devices 
or gateway implementation, mainly as searh keys for linking to other information, are included in this table.

|SEQ|LEN|DT|OPT|RP/#|TBL#|ELEMENT NAME|
| --- | --- | --- | --- | --- | --- | --- |
|3|250|CX|O|Y||Patient Identifier List|
|5|250|XPN|O|Y||Patient name|
|7|26|TSO|O|||Date/Time of Birth|
|8|1|IS|O|||Administrative Sex|
{: .grid}

## PID Patient Visit Segment

Assigned patient location could be needed to link to other data.



|SEQ|LEN|DT|OPT|RP/#|TBL#|ELEMENT NAME|FHIR MAPPING|COMMENTS|
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|3|80|PL|O|||Assigned Patient Location|
{: .grid}




---

File: repos/HL7_SLASH_uv-pocd/input/pagecontent/merge.md

The following mapping information is based on the commonly-used PCD-01 transaction 
defined by the Integrating the Healthcare Enterprise Patient Care Device program
for reporting device data. 

This is a summary. Refer to the detailed information in:

- the HL7 Version 2.7 specification for general details including descriptions
especially Chapter 2.A for data types, which have some differences from FHIR data types

- The IHE Technical Framework, Volume 2, Transactions, Section 3.x, for specifics on which
HL7 V2 segments and fields are used in the profile, data types 

Explanations of columns in the summary tables:

| Column | Content |
| --- | --- |
| DT | Data Type. See [HL7 2.7 Specification Chapter 2A](http://www.hl7.eu/HL7v2x/v27/std27/ch02a.html#Heading2) |
| TBL# | HL7 V 2.7 Code Tables, corresponding approximately to FHIR ValueSets.

|Field ID|DT|Card.|TBL#|HL7 Field Name|FHIR Mapping|NOTES|
| --- | --- | --- | --- | --- | --- | --- |
|OBX-2|ID|[0..1]|125|Value Type||Identifies the kind of data in OBX-5 Observation Value. Ex. NM Numeric, NA Numeric Array|
|OBX-3|CWE|[1..1]||Observation Identifier|Observation.code|Identifers the observation according to a coding system.|
|OBX-4|ST|[1..1]||Observation Sub-ID||See Interpretation of OBX-4 Observation Sub-ID in IHE PCD-01|
|OBX-5|Varies|[0..1]||Observation Value|Observation.value[x]|Kind of FHIR value mapped to depends on HL7 V2 Value Type. Ex. For NM Numeric Value Type, will map to valueQuantity. Other common mappings NA Numeric Array -> SampledData, ST String Data -> ValueString|
|OBX-6|CWE|[0..1]||Units||Where Units are applicable to Observation Value, it will map within the FHIR Observation.value[x]. Ex. valueQuantity.unit|
|OBX-7|ST|[0..1]||References Range|Observation.referenceRange|Range of values inside of which the measurement is considered normal for the condition of the patient.|
|OBX-8|IS|[0..1]|78|Abnormal Flags|Observation.interpretation|See note below on OBX-8 Abnormal Flags in PCD-01`|
|OBX-11|ID|[1..1]|85|Observation Result Status||See table Observation result status|
|OBX-16|XCN|[0..1]||Responsible Observer|Observation.performer|Some devices support entry of observer information. If available, this information should be provided.|
|OBX-18|EI|[0..1]||Equipment Instance Identifier||A unique identifier of the particular piece of equipment used in the observation.|
|OBX-20|CWE|[0..*]|163|Observation Site|Observation.bodySite|Site on the body where the observation was made.|

## Detail notes for OBX segment mappings 

***OBX-3 Observation Identifier***. PCD-01 uses the IEEE 11073-10101 Nomenclature Standard. In FHIR, for observations 
in the Vital Signs category, the corresponding LOINC code must also be given. 
For other observations, for user convenience, LOINC codes should be given a where 
a mapping is available (see ConceptMap resource available on [loinc.org](https://loinc.org/collaboration/ieee/). 
Equivalent codes in other code systems such as SNOMED may also be given.

***OBX-4 Observation Sub-ID***
The IHE PCD-01 sub-id field is a key identifying the place of the Metric within the containment tree of Virtual Medical Devices (medical subsystems), channels (groupings of metrics 
within a VMD), and Metrics (individual measurement objects supported by the device. In
the profile, it is a 4-tuple of nonzero positive integers separated by dots (periods), 
where the first element identifies the Medical Device System (MDS), the second identifies 
the VMD, the third identifies the channel, and the fourth identifies the Metric.
Each of these integer elements maps to a hierachical level of the containment tree.
They can be used to look up attributes in "device-related" OBX segments relating to
each logical element (MDS, VMD, Channel, Metric). The "device-related" elements have
a special form for the Sub-ID with trailing zero elements identifying the logical level
of the device element they represent: three trailing zero elements identify an MDS, two 
a VMD, two a channel, and one a metric. See the IHE PCD Technical Framework for details.

***OBX-5 Observation Value***. Kind of FHIR value mapped to depends on HL7 V2 Value Type. 
Ex. For NM Numeric Value Type, will map to valueQuantity. 
Other common mappings NA Numeric Array -> SampledData, ST String Data -> ValueString.
See HL7 V2.7 Specification and FHIR Specification for other cases.

***OBX-7 Reference Range***. 
In IHE PCD-01, Reference Range gives the alarm range set by the user on the device, 
if available in the output of the device. 
Ex. 40-120 set for a patient for heart rate means that values outside of that range will result in an alarm condition signaled by the device.

***OBX-18 Equipment Instance Identifier***
n IHE PCD-01, the purpose of this field is to device source uniquely based on the EUI-64 of the Virtual Medical Device (VMD) if that has a unique identifier, or if not, the Medical Device System.

***OBX-20 Observation site***
This often does not need to be given, since in many cases the OBX-3 Observation Identifier clearly indicates the body site. Otherwise, in IHE PCD-01, body site values from MDC nomenclature may be used. Equivalent codes from other systems, e.g. SNOMED, should also be given in the CodeableConcept for user convenience.


|Value|ExtendedValue?|Description|Comment|
| --- | --- | --- | --- |
|NI|Yes|No information. There is no information which can be inferred from this exceptional value.|No value is provided in OBX-5.|
|NAV|Yes|Temporarily not available. Information is not available at this time but it is expected that it will be available later.|No value is provided in OBX-5.|
|OFF|Yes|Numeric measurement function is available but has been deactivated by user.|No value is provided in OBX-5.|
|>|N|Above absolute high-off instrument scale.|Provide the high-off instrument scale number in OBX-5 if available.|
|<|N|Below absolute low-off instrument scale.|Provide the low-off instrument scale number in OBX-5 if available.|

|Alert Priority|Abbreviation|
| --- | --- |
|no-alarm|PN|
|low priority|PL|
|medium priority|PM|
|high priority|PH|

|FIELD|DT|OPT|RP/#|ELEMENT NAME|FHIR_MAPPING|NOTES|
| --- | --- | --- | --- | --- | --- | --- |
|OBR-2|EI|O||Placer Order Number|
|OBR-3|EI|R||Filler Order Number|
|OBR-4|CWE|R||Universal Service Identifier|
|OBR-7|DTM|RE||Observation Date/Time|
|OBR-16|XCN|O|Y|Ordering Provider|



---

File: repos/HL7_SLASH_uv-pocd/input/pagecontent/overview.md

## Overview of communications from complex medical devices

Most Point-of-care devices used by professional in acute care settings are complex in structure and communicate much more information than is typically reported in a clinical flowsheet display. 

### The "Flat" Model 
This simplified display represented by an Observation pointing to a single device as its sources is sufficent for clinican use when it is desired to emphasize the most important for hour-to-hour and minute to minute care of the patient, without overwhelming the user with complexity. For other use cases, more context for how the measurement was made can be important.

### Device Model for PoCD IG
The backbone for representing a device for this implementation guide is the generic model for a device from the IEEE 11073 Medical Device Communications Domain Information Model.

This is a widely-used standard model, straightforwardly based on a 
hierarchical representation of a typical medical device as an overall system 
with logically distinct subsystems, which in turn have 
additional levels of contained objects.

### Medical Device System
 
The containment tree is rooted at the overall system, with is identified 
in the model as a Medical Device System (MDS object). representing the whole device, 
with logical subsystems identified as Virtual Medical Devices (VMDs)
 
### Virtual Medical Devices

These VMD logical subsystems may also have a physical aspect -- they may be
detachable, as in a measurement module in a multi-parameter physiological monitor, so have an individual identity (model and serial number), and may move from MDS to MDS. The tracking of this dynamic relationships is required for the results to be traceable to their precise source.

### Channels

VMDs may need to have the measurements they report grouped into logical channels. This is sometimes not necessary to model, but in
cases like certain infusion pumps, or EEG modules, there is a meaningful partition of the data into channels that may be critical to the safe treatment of the patient.

### Metrics
At the lowest level, observations correspond to what the IEEE 11073-10101 Domain Information Model calls a 'Metric'. 
These are not necessarily single quantitative measurements. They may be:
 - enumerations (qualitative or categorical variables, like a "mild - moderate - severe" rating).
 - or a metric may represent a set of closely related values that are best kept together and recorded as a compound value, as for example, a systolic, diastolic, and mean blood  pressure report at the same time from the same site
 - a metric may also represent a vector of quantities in a segment of a waveform.
 
### Attributes may exist at all levels of the tree

An individual measurement has a context made up of all the levels of the containment tree.
At each level there are attributes that condition the understanding of the measurements

An Observation may link to the DeviceMetric to gain access to all levels of the containment tree. See the "Implementation Guidance" sections of this Implementation Guide for further details.

## Value of the MDC Nomenclature model

LOINC and SNOMED nomenclature systems have concept codes for the majority of the most often used device observations, and when they are known for a particular device observation they should certainy made available in device data.

Why, then, are MDC codes useful, and under what circumstances?
The IEEE 10101-11073 Medical Device Communications Nomenclature standard is driven by a consensus process with input from subject matter experts from the device designer/manufacturer community as well as other clinical and regulatory experts with a goal of expeditiously providing a code for a concept needed in medical device communications as soon as possible, for practical use including device communications testing and research. The code comprehensively supports communicating identity of physiological measurements, from common to somewhat obscure. Of course many of these have LOINC equivalents, SNOMED equivalents, or both and once the correspondences are established, makers of devices and associated software should provided muliple codes for the convenience of
clients preferring any of the systems. 

Besides the physiological measurements, MDC also services the needs of device implementers with a large set of concepts and codes for
communicating 
internal device structure and function including device state, and also event and alert messages connected with technical as well as clinical patient state changes that are 
covered in no other widely used set of standards. The MDC codes for physiological measurements are also used by many manufacturers becase of their role in IHE DEC Device Enterprise Communications profiles.
See the "Profiles" pages for examples of the use of the MDC Object Partition codes.

The ongoing nomenclature development process is a collaboration of the IEEE Point-of-Care Device Committee, which ballots and issues updated versions of the standard, and the IHE Patient Care Device Program's Rosetta Terminology Mapping Committee, with representatives of many manufacturers as well as independent experts. The database of record for proposed and provisional, as well as published, concept definitions and codes is currently maintained by the US National Institute of Standards and Technology and is available on the web as the [Rosetta Terminology Mapping Management System](https://rtmms.nist.gov). IEEE permits royalty-free use of the codes and most of the supporting information under conditions described on the RTMMS website and in the FHIR specification "Using MDC Codes with FHIR" page at https://www.hl7.org/fhir/mdc.html

## Mapping HL7 V2 Device Data to FHIR

The most commonly used form of HL7 Version 2 used in acute-care device data reporting is that of the IHE Device Enterprise Communications profile PCD-01 transaction. That is the basis for the mappings ouerlined here. Like this Guide, it is based on the IEEE 11073-10201 Medical Device Communications Domain Information Model.

For details see IHE Patient Care Device (PCD) Technical Framework Volume 2, Transactions https://www.ihe.net/uploadedFiles/Documents/PCD/IHE_PCD_TF_Vol2.pdf. See also "Technical Implementation Guidance" -> "Mapping from HL7 v2 to FHIR" in this Guide.

## Common Use Cases for this Implementation Guide

### Data flow from device to clinical flowsheet

Devices are a key part of keeping current situational awareness in treating high-acuity patients. Information not normally provided in the Observation resource ay be relevant to care, as, for example, is the device or one of its subsystems or measurements in standby mode or otherwise disabled because of user action. Technical metadata such as battery performance may be valuable for early warning of potential device problems.

## Clinical and technical data archiving and retrospective data feed

It is expected that some institutions will choose to set up an archival system saving all available detail from devices as well as other data created in near real time, such as  provider notes during a procedure, including device data and context details that may not be displayed in real time. Assuming that there is such an archive system, the ability to retrieve and "look back on" all such data on request of a person or of another hospital information system can serve many use cases, including those listed. Since FHIR seems to be becoming a common interoperability medium or "lingua franca" for passing around models to retrieve data retrospectively. The strong support for search and filtering designed into FHIR are highly valuable in such uses.

## Clinical decision support

Proper integration of clinical measurements in algorithms may depend on the method of measurement being used or even the particular model of device being used. For plug-in modules, which are modeled as Virtual Medical Devices, this information is available from the Device resource representing the module.

## Clinical analytics

Comprehensive recording of device configuration and state information in addition to the measurements recorded supports including more kinds of information in analytics models.

## Clinical engineering and technology management analytics

In this scenario, comprehensive device configuration and state information is valuable for both real-time and post analysis of state and function of the innumerable devices clinical engineering and healthcare technology management departments are   responsible for tracking and maintaining. Devices themselves record and communicate much of this: power-up self test results, calibrations performed, operational state history, location.

## Adverse event analysis
When it is necessary to investigate an adverse event, the context information provided by thorough archiving of all background information about the state and performance of the device allows, for example, identification of specific subsystems and components of the device may have malfunctioned.

## Research data feed

A key characteristic of research uses of data is the need to be able to summon up the data needed to answer unanticipated questions that are raised.


** The following use cases are not in this release of the Implementation Guide but are intended to be covered in the next release**

## Alerting a person
Devices report a rich variety of clinical and technical alerts that may require prompt or immediate action by members of the clinical care and technical teams. Current proprietary systems, and systems using the Alert Communications Management (ACM) HL7 V2 Profile serve this sector. As FHIR broadens its coverage of hospital needs, this should be supported.

### Alerting another system

Events from one device system to another, or to other clinical information systems,play a role in important use cases, such as are seen in the IHE PCD infusion verification profile.

## Information for implementers of applications consuming PoCD FHIR data
Some of the details in this Guide are mainly of concern to implementers of device and device gateway software and is not of primary importance to users of the data.

For implementers of systems consuming rather than constructing
FHIR resource representations, the important aspects of the Guide
to pay attention to are the point that Observatons are
embedded in a containment structure of different levels of logical organization, discoverable by following links between Device resources, each carrying information about 
one logical containment level of the ultimate Observation.

Implementers of such applications may already be familiar with the IHE Device Enterprise Communications profiles, and Data Observation Reporter transactions such as PCD-01, and can leverage their knowledge of the IEEE 11073 Domain Information Model to help in understanding the FHIR forms of 
this Implementation Guide. The "Implementation Guidance" page "Mapping HL7 V2 to FHIR" may be helpful.

## Information for implementers of applications providing PoCD FHIR data

### Using existing device model
Imlementers working with data from devices designed with the IEEE 11073 Domain Information Model in mind, or with existing IHE PCD-01 capabilities, may find it relatively easy to use this as a basic template for constructing
FHIR representations in this Implementation Guide

### Building a device model

If no compatible model for a device exists, consider the following steps:

In collaboration with subject matter experts in the functions of the device and in the clinical uses of the device data, gather information on what the device can communicate and how it maps to the needs of:
- clinical users
  - clinicians who will use the data for current awareness
  - analysts who will use the information for reports and for archiving, and for 

- non-clinical users
  - clinical engineers, biomedical engineers and healthcare technology managers 

not neglecting the non-clinical information that the device can communicate about, devise a containment tree that represents the devices capabilities and their logical arrangement.

### Analyze the form in which the device makes the data available 

If this is a "green field" project for a device that is in the design phase, consider the range of uses for the device

It is probably commoner that you are retrofitting FHIR output to a device that already has a legacy form of data output and you 
must fit a "gateway" to convert data in a form the device
already uses to a form compatible with a "containment tree".

### Translating to FHIR resources
See especially the "Implementation Guidance", "Profiles", and "Terminology"
sections of this Implementation Guide for needed details.


---

File: repos/HL7_SLASH_uv-pocd/input/pagecontent/transfer.md

Most FHIR implementations follow the [RESTful]({{site.data.fhir.path}}http.html) approach for transferring resources between client and server. The FHIR server provides the RESTful API for managing resources. A medical device or gateway acts as FHIR client, which reports device data using create and update interactions. Other clients (e.g., clinical applications) use read or search interactions to access stored data. There is also a subscription mechanism to get notifications when data becomes available.

Requirements for a FHIR server supporting this implementation guide are listed in the [Server CapabilityStatement](CapabilityStatement-ServerCapabilityStatement.html).

This section explains the transfer of device-sourced resources as listed on the [Profiles](profiles.html) page to a FHIR server using transaction bundles.

### Bundles
A point-of-care medical device model consists of multiple resource instances, which have to be reported at least once during initialization. Even during runtime, a device may report multiple observations together. While it is possible using individual create and update interactions for each resource, this implementation guide recommends [Bundle]({{site.data.fhir.path}}bundle.html) resources for transferring a set of resources in a single transaction. For example, an entire device containment tree or subtree is packed into a bundle of Device and DeviceMetric resources. Another bundle contains all Observation resources for an update cycle.

### Transactions
A client submits a [transaction]({{site.data.fhir.path}}http.html#transaction) bundle containing multiple request entries to create, update, or delete resources. The content is treated as single entity, which is either accepted or rejected.

Each entry has a `Bundle.entry.request` element with HTTP method (e.g., POST or PUT) and relative URL, and a `Bundle.entry.resource` element for the resource content to be created or updated. When a resource is initially transferred, the client does not know the [logical id]({{site.data.fhir.path}}resource.html#id) that will be assigned by the server. To allow references between resources in the bundle, the client may assign a [temporary identifier]({{site.data.fhir.path}}bundle.html#bundle-unique) in the `Bundle.entry.fullUrl` element.

*Example: Transaction bundle creating Device and DeviceMetric resources, where DeviceMetric refers to Device*

```
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [ {
    "fullUrl": "urn:uuid:2fa92047-0cfa-47e5-b9f9-b3d93dd02366",
    "resource": {
      "resourceType": "Device",
      "identifier": [ {
        "system": "urn:oid:1.2.840.10004.1.1.1.0.0.1.0.0.1.2680",
        "value": "01-23-45-67-89-AB-CD-EF"
      } ],
      "status": "active",
      "type": {
        "coding": [ {
          "system": "urn:iso:std:iso:11073:10101",
          "code": "69965",
          "display": "MDC_DEV_MON_PHYSIO_MULTI_PARAM_MDS"
        } ],
        "text": "Patient Monitor"
      },
      // ...
    },
    "request": {
      "method": "POST",
      "url": "Device"
    }
  },
  // ...
  {
    "resource": {
      "resourceType": "DeviceMetric",
      "type": {
        "coding": [ {
          "system": "urn:iso:std:iso:11073:10101",
          "code": "150084",
          "display": "MDC_PRESS_BLD_VEN_CENT"
        } ],
        "text": "CVP"
      },
      "source": {
        "reference": "urn:uuid:2fa92047-0cfa-47e5-b9f9-b3d93dd02366"
      },
      // ...
    },
    "request": {
      "method": "POST",
      "url": "DeviceMetric"
    }
  } ]
}
```

If successful, the server returns a transaction-response bundle, which reports the result of each request. The bundle response entry returns also the server-assigned logical id and version for each resource. For subsequent transactions, the client can use [literal references]({{site.data.fhir.path}}references.html#literal) instead of temporary identifiers.

*Example: Transaction response bundle returning logical identifiers*

```
{
  "resourceType": "Bundle",
  "type": "transaction-response",
  // ...
  "entry": [ {
    "response": {
      "status": "201 Created",
      "location": "Device/1234/_history/1",
      // ...
    }
  },
  // ...
  {
    "response": {
      "status": "201 Created",
      "location": "DeviceMetric/2345/_history/1",
      // ...
    }
  } ]
}
```

### Create
All Device and DeviceMetric resources that make the device model must exist on the server. When communication starts, the client may not know what's already on the server. To avoid duplicates, it can search for existing resources and create missing ones or start with conditional updates (see [below](#conditional-update)).

For reporting a new measurement or changed setting, an Observation resource is created where at least the effective time (time stamp or period) differs from previously reported observations.

**Create** is an individual HTTP POST request or a transaction bundle entry as shown in the example.

*Example: Create an Observation resource*

```
{
  // ...
  "entry": [ {
    "resource": {
      "resourceType": "Observation",
      "status": "final",
      "code": {
        "coding": [ {
          "system": "urn:iso:std:iso:11073:10101",
          "code": "150087",
          "display": "MDC_PRESS_BLD_VEN_CENT_MEAN"
        } ],
        "text": "CVPm"
      },
      "subject": {
        "reference": "Patient/0123"
      },
      "effectiveDateTime": "2020-03-04T15:16:17+00:00",
      "valueQuantity": {
        "value": 5.5,
        "unit": "mmHg",
        "system": "http://unitsofmeasure.org",
        "code": "mm[Hg]"
      },
      "device": {
        "reference": "DeviceMetric/2345/_history/1"
      }
    },
    "request": {
      "method": "POST",
      "url": "Observation"
    }
  },
  // ...
  ]
}
```

### Conditional Create
Resources generated by a medical device need references to resources that are most likely already present on the server, such as Patient or Location. The device or gateway may have only limited knowledge about it. Conditional create adds unique information as search criteria to the request. If a resource is found it remains unchanged, otherwise a new instance is created.

Note that this approach will fail if there are multiple resource instances that fulfil the search criteria.

**Conditional Create** is an HTTP POST request with If-None-Exist extension header.

*Example: Create Location resource only if location with given name does not exist*

```
{
  // ...
  "entry": [ {
    "fullUrl": "urn:uuid:0c52bec2-49bb-46ce-a2f7-a3cc16fc17a4",
    "resource": {
      "resourceType": "Location",
      "name": "Bed 42",
      "mode": "instance"
    },
    "request": {
      "method": "POST",
      "url": "Location",
      "ifNoneExist": "name:exact=Bed%2042"
    }
  },
  // ...
  ]
}
```

### Update
The client needs to update a resource on the server when content changes, but the object that the resource represents is still the same. For example, the operational status of a Device or calibration data of a DeviceMetric may change over time. An update adds a new version of the resource instance. Resource references can point to a specific version if needed.

In some cases an Observation resource may be updated too. Examples:
* `Observation.status` changes from 'preliminary' to 'final' after manual validation
* `Observation.effectivePeriod` has been created with start time only, and end time gets known

**Update** is an HTTP PUT request. URL includes the logical id.

*Example: Update DeviceMetric resource when calibration is completed*

```
{
  // ...
  "entry": [ {
    "fullUrl": "http://example.org/fhir/DeviceMetric/2345",
    "resource": {
      "resourceType": "DeviceMetric",
      "id": "2345",
      "type": {
        "coding": [ {
          "system": "urn:iso:std:iso:11073:10101",
          "code": "150084",
          "display": "MDC_PRESS_BLD_VEN_CENT"
        } ],
        "text": "CVP"
      },
      "source": {
        "reference": "Device/1234"
      },
      // ...
      "calibration": [ {
        "type": "offset",
        "state": "calibrated",
        "time": "2020-03-04T16:17:18+00:00"
      } ]
    },
    "request": {
      "method": "PUT",
      "url": "DeviceMetric/2345"
    }
  },
  // ...
  ]
}
```

### Conditional Update
When submitting a Device or DeviceMetric resource for the first time, the client may not know if it is already available on the server or needs an update. Conditional update adds unique information as search criteria to the request URL. If a resource is found and its content differs, it's updated. If no resource is found a new instance is created.

Note that this approach will fail if there are multiple resource instances that fulfil the search criteria.

**Conditional Update** is an HTTP PUT request with search criteria instead of the logical id.

*Example: Update Device resource with given EUI-64 identifier, or create it if it doesn't exist*

```
{
  // ...
  "entry": [ {
    "fullUrl": "urn:uuid:915a7b26-f8df-4ec5-8fa9-4e623b1a12cc",
    "resource": {
      "resourceType": "Device",
      "identifier": [ {
        "system": "urn:oid:1.2.840.10004.1.1.1.0.0.1.0.0.1.2680",
        "value": "01-23-45-67-89-AB-CD-EF"
      } ],
      "status": "inactive",
      "statusReason": [ {
        "coding": [ {
          "system": "http://terminology.hl7.org/CodeSystem/device-status-reason",
          "code": "standby",
          "display": "Standby"
        } ]
      } ],
      "type": {
        "coding": [ {
          "system": "urn:iso:std:iso:11073:10101",
          "code": "69965",
          "display": "MDC_DEV_MON_PHYSIO_MULTI_PARAM_MDS"
        } ],
        "text": "Patient Monitor"
      },
      // ...
    },
    "request": {
      "method": "PUT",
      "url": "Device?identifier=urn:oid:1.2.840.10004.1.1.1.0.0.1.0.0.1.2680|01-23-45-67-89-AB-CD-EF"
    }
  },
  // ...
  ]
}
```

### Delete
A resource should only be deleted if the object that it represents does no longer exist. In most cases, changing the operational status (`Device.status` or `DeviceMetric.operationalStatus`) is more appropriate.

**Delete** is an HTTP DELETE request without resource content.


---

