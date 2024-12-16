File: repos/IHE_SLASH_RAD.IMR/input/fsh/Aliases.fsh

Alias: SCT = http://snomed.info/sct
Alias: UCUM = http://unitsofmeasure.org
Alias: LOINC = http://loinc.org

Alias: HL7V2 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: FHIRObservation = http://terminology.hl7.org/CodeSystem/observation-category
Alias: FHIREndpoint = http://terminology.hl7.org/CodeSystem/endpoint-connection-type
Alias: FHIRRequestStatus = http://hl7.org/fhir/request-status
Alias: FHIRRequestIntent = http://hl7.org/fhir/request-intent
Alias: FHIRImagingStudyStatus = http://hl7.org/fhir/imagingstudy-status
Alias: FHIRObservationStatus = http://hl7.org/fhir/observation-status
Alias: FHIREndpointStatus = http://hl7.org/fhir/endpoint-status
Alias: FHIRDiagnosticReportStatus = http://hl7.org/fhir/diagnostic-report-status
Alias: FHIRDiagnosticService = http://terminology.hl7.org/CodeSystem/v2-0074
Alias: FHIRNarrativeStatus = https://build.fhir.org/codesystem-narrative-status.html

Alias: DICOM = http://dicom.nema.org/resources/ontology/DCM
Alias: DICOMUID = urn:dicom:uid

Alias: MIME = urn:ietf:bcp:13

---

File: repos/IHE_SLASH_RAD.IMR/input/fsh/Attachment.fsh

// Invariant
Invariant:   IMRAttachmentInvariant
Description: "Either data or url SHALL be present"
Expression:  "data.exists() or url.exists()"
Severity:    #error

---

File: repos/IHE_SLASH_RAD.IMR/input/fsh/DiagnosticReport.fsh

Profile:        IMRDiagnosticReport
Parent:         DiagnosticReport
Id:             imr-diagnosticreport
Title:          "IMR DiagnosticReport"
Description:    "IHE Interactive Multimedia Report (IMR) profile on DiagnosticReport"

* text MS

// May reference no ServiceRequest for other -ologies in enterprise imaging
* basedOn 0..* MS

* basedOn ^slicing.discriminator.type = #type
* basedOn ^slicing.discriminator.path = resolve()
* basedOn ^slicing.rules = #open
* basedOn ^slicing.description = "Slice based on the basedOn reference type"
* basedOn ^slicing.ordered = false

* basedOn contains serviceRequest 0..*
* basedOn[serviceRequest] only Reference(IMRServiceRequest)

// Shall reference on Patient
* subject 1..1
* subject only Reference(Patient)

* issued 1..1
* issued ^short = "DateTime that this diagnostic report is signed-off and published."

// At least one performer is an Organization
* performer 1..*

* performer ^slicing.discriminator.type = #type
* performer ^slicing.discriminator.path = resolve()
* performer ^slicing.rules = #open
* performer ^slicing.description = "Slice based on the performer reference type"
* performer ^slicing.ordered = false

* performer contains organization 1..*
* performer[organization] only Reference(Organization)

// At least one resultsInterpreter is a Practitioner or PractitionerRole
* resultsInterpreter 1..*
* resultsInterpreter only Reference(Practitioner or PractitionerRole)
* resultsInterpreter ^short = "Primary intepreter of results"
* resultsInterpreter ^definition = "Primary intepreter of results"

// Shall include at least one referenced study
* imagingStudy 1..* MS
* imagingStudy ^short = "Study subject to this report"
* imagingStudy ^definition = "Study subject to this report. Note: Any associated study (e.g. comparison studies) used during reporting should be tracked in the associatedStudy extension."

// Shall include at least one presentedForm which is the text with embedded multimedia content. May include PDF
* presentedForm 1..* MS

* presentedForm ^slicing.discriminator.type = #pattern
* presentedForm ^slicing.discriminator.path = contentType
* presentedForm ^slicing.rules = #open
* presentedForm ^slicing.description = "Slice based on the presentedForm content type"
* presentedForm ^slicing.ordered = false

* presentedForm obeys IMRAttachmentInvariant
* presentedForm.contentType 1..1 MS
* presentedForm.size 1..1 MS
* presentedForm.hash 1..1 MS
* presentedForm contains html 1..* and pdf 0..*
* presentedForm[html].contentType = MIME#text/html "HTML"
* presentedForm[pdf].contentType = MIME#application/pdf "PDF"

* extension contains AssociatedStudy named associatedStudy 0..* MS

Extension: AssociatedStudy
Title: "IMR DiagnosticReport Associated Study"
Id: associatedStudy
Description: "Associated studies used in part of diagnostic reporting"
Context: DiagnosticReport
* value[x] only Reference(ImagingStudy or DiagnosticReport)

Instance: DiagnosticReport-ImagingStudy
InstanceOf: SearchParameter
Title: "Search on the imagingStudy attribute in IMR DiagnosticReport"
Usage: #definition
* url = "https://profiles.ihe.net/RAD/IMR/SearchParameter/DiagnosticReport-ImagingStudy"
* description = "This SearchParameter enables finding DiagnosticReports by ImagingStudy."
* name = "ImagingStudy"
* status = #active
* base = #DiagnosticReport
* code = #imagingStudy
* expression = "DiagnosticReport.imagingStudy"
* type = #reference

---

File: repos/IHE_SLASH_RAD.IMR/input/fsh/Endpoint.fsh

Profile:        ImagingStudyEndpoint
Parent:         Endpoint
Id:             imaging-study-endpoint
Title:          "Imaging Study Endpoint"
Description:    "IHE Radiology profile on Endpoint for Study"

* connectionType from ImagingStudyEndpointConnectionTypeVS (required)

* payloadType 1..1
* payloadType.coding from ImagingStudyEndpointPayloadTypeVS (extensible)

ValueSet: ImagingStudyEndpointConnectionTypeVS
Id: imaging-study-endpoint-connectiontype-vs
Title: "Imaging Study Endpoint ConnectionType Value Set"
Description: "Codes representing the applicable endpoint connectionType to retrieve a study."
* FHIREndpoint#ihe-iid "IHE IDD"
* FHIREndpoint#dicom-wado-rs "DICOM WADO-RS"

* ^experimental = false


ValueSet: ImagingStudyEndpointPayloadTypeVS
Id: imaging-study-endpoint-payloadtype-vs
Title: "Imaging Study Endpoint PayloadType Value Set"
Description: "Codes representing the applicable endpoint payloadType to retrieve a study."
* DICOM#113014 "Study"

* ^experimental = false

---

File: repos/IHE_SLASH_RAD.IMR/input/fsh/ex-FindMultimediaReportResponse.fsh

Instance:   ex-findMultimediaReportResponse
InstanceOf: IMRFindMultimediaReportResponse
Title:      "Example of an IMR Find Multimedia Report Response"
Description: "Example of an IMR Find Multimedia Report Bundle Search Set"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #searchset
* link[0].relation = "self"
* link[0].url = "http://example.org/DiagnosticReport?basedOn.identifier=9876&status=final"
* total = 1
* timestamp = 2022-03-12T11:32:24Z
* entry[0].fullUrl = "http://example.org/DiagnosticReport/ex-DiagnosticReport"
* entry[0].resource = ex-DiagnosticReport

---

File: repos/IHE_SLASH_RAD.IMR/input/fsh/ex-IMRDiagnosticReport.fsh

Instance: ex-DiagnosticReport
InstanceOf: IMRDiagnosticReport
Title: "IMR DiagnosticReport example"
Description: """
This example uses IMR DiagnosticReport to capture the following real world radiology diagnostic report.

--- SAMPLE REPORT ---

Patient Name: John Smith 

MRN: 1234567

Accession Number: 12345

Study Date: December 31, 2020

Study Type: CT CHEST W/O CONTRAST

------------------------------------------------------------ 

FULL REPORT

EXAMINATION: CT CHEST W/O CONTRAST
 
INDICATION: History: 24M with stent placement in the left main bronchus presents with right sided chest pain since 9am 
 
TECHNIQUE: Volumetric, multidetector CT of the chest was performed without intravenous or oral contrast administration. Images are presented for display in the axial plane at 5 mm and 1.25 mm collimation. A series of multiplanar reformation images are also submitted for review. 
 
DLP: 373 mGy-cm. 
 
COMPARISON: CT of the chest dated January 1, 2020. 
 
FINDINGS:  
 
The imaged portion of a thyroid gland is unremarkable. Prominent or mildly enlarged mediastinal and bilateral hilar lymph nodes measure up to 1.2 x 0.8 cm in the right paratracheal station (2:12) , 2.3 x 1.4 cm in the subcarinal station (2:18), and 1.4 x 0.9 cm in the right hilar stations (2:16). No significant axillary lymphadenopathy is detected. The esophagus is unremarkable. The thoracic aorta is normal in caliber with a typical 3 vessel takeoff from the arch. The pulmonary arterial trunk is normal in caliber. The heart is normal in size without pericardial effusion. 
 
There is focal narrowing of the proximal portion of the bronchial stent in the left mainstem bronchus (601b:56), which is nearly collapsed and appears new from the prior chest radiograph. Trace fluid or debris is seen in the distal lumen of the stent (4:71). A tracheostomy tube is unchanged in position without evidence of complications. There is circumferential thickening of the tracheal and bronchial walls, which is unchanged, in keeping with the patient's known diagnosis of polychondritis. The remainder of the tracheobronchial tree is patent to the subsegmental levels. The airways are normal in caliber. 
 
Within the pulmonary parenchyma, there is diffuse peribronchovascular nodular and ground-glass opacities becoming confluent in the right middle (601:52) and left upper (601:65) and lower lobes (601:72) consistent with multifocal pneumonia. There is a small left and trace right pleural effusion. No pneumothorax is present. There are no suspicious masses or pleural abnormalities. 
 
The patient is status post median sternotomy with intact sternal wires. No blastic or lytic lesion suspicious for malignancy is present. 
 
Although this study is not tailored for the evaluation of subdiaphragmatic contents, the imaged upper abdomen demonstrates diffuse hypoattenuation of the liver consistent with hepatic steatosis. 

 
IMPRESSION:  
 
1. Multifocal pneumonia involving the right middle, left upper and left lower lobes with small left and trace right pleural effusions. 
 
2. Central medianstinal lymphadenopathy is likely reactive. 
 
3. Focal stenosis of the proximal portion of the left main stem bronchial stent, which appears new from the prior chest radiograph. There is trace fluid or debris within the distal lumen of the stent. 
 
4. Unchanged circumferential thickening of the tracheal and bronchial walls, in keeping with the patient's known diagnosis of polychondritis. 
 
5. Hepatic steatosis.
"""
Usage: #example
* text.status = FHIRNarrativeStatus#additional "Additional"
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
<div>INDICATION: History: 24M with stent placement in the left main bronchus presents with right sided chest pain since 9am</div>
<p></p>
<div>TECHNIQUE: Volumetric, multidetector CT of the chest was performed without intravenous or oral contrast administration. Images are presented for display in the axial plane at 5 mm and 1.25 mm collimation. A series of multiplanar reformation images are also submitted for review.</div>
<p></p>
<div>DLP: 373 mGy-cm.</div>
<p></p>
<h2>FINDINGS:</h2>
<div>The imaged portion of a thyroid gland is unremarkable. Prominent or mildly enlarged mediastinal and bilateral hilar lymph nodes measure up to 1.2 x 0.8 cm in the right paratracheal station <span class=\"imr-ref-ImagingSelection\" id=\"ImagingSelection/123\">(2:12)</span>, 2.3 x 1.4 cm in the subcarinal station <span class=\"imr-ref-ImagingSelection\" id=\"ImagingSelection/234\">(2:18)</span>, and 1.4 x 0.9 cm in the right hilar stations <span class=\"imr-ref-ImagingSelection\" id=\"ImagingSelection/345\">(2:16)</span>. No significant axillary lymphadenopathy is detected. The esophagus is unremarkable. The thoracic aorta is normal in caliber with a typical 3 vessel takeoff from the arch. The pulmonary arterial trunk is normal in caliber. The heart is normal in size without pericardial effusion.</div>
<p></p>
<div>There is focal narrowing of the proximal portion of the bronchial stent in the left mainstem bronchus (601b:56), which is nearly collapsed and appears new from the prior chest radiograph. Trace fluid or debris is seen in the distal lumen of the stent <span class=\"imr-ref-ImagingSelection\" id=\"ImagingSelection/456\">(4:71)</span>. A tracheostomy tube is unchanged in position without evidence of complications. There is circumferential thickening of the tracheal and bronchial walls, which is unchanged, in keeping with the patient's known diagnosis of polychondritis. The remainder of the tracheobronchial tree is patent to the subsegmental levels. The airways are normal in caliber.</div>
<p></p>
<div>Within the pulmonary parenchyma, there is diffuse peribronchovascular nodular and ground-glass opacities becoming confluent in the right middle <span class=\"imr-ref-ImagingSelection\" id=\"ImagingSelection/567\">(601:52)</span> and left upper <span class=\"imr-ref-ImagingSelection\" id=\"ImagingSelection/678\">(601:65)</span> and lower lobes <span class=\"imr-ref-ImagingSelection\" id=\"ImagingSelection/789\">(601:72)</span> consistent with multifocal pneumonia. There is a small left and trace right pleural effusion. No pneumothorax is present. There are no suspicious masses or pleural abnormalities.</div>
<p></p>
<div>The patient is status post median sternotomy with intact sternal wires. No blastic or lytic lesion suspicious for malignancy is present.</div>
<p></p>
<div>Although this study is not tailored for the evaluation of subdiaphragmatic contents, the imaged upper abdomen demonstrates diffuse hypoattenuation of the liver consistent with hepatic steatosis.</div>
<p></p>

<h2>IMPRESSION:</h2>
<ol>
<li>Multifocal pneumonia involving the right middle, left upper and left lower lobes with small left and trace right pleural effusions.</li>

<li>Central medianstinal lymphadenopathy is likely reactive.</li>
 
<li>Focal stenosis of the proximal portion of the left main stem bronchial stent, which appears new from the prior chest radiograph. There is trace fluid or debris within the distal lumen of the stent.</li>
 
<li>Unchanged circumferential thickening of the tracheal and bronchial walls, in keeping with the patient's known diagnosis of polychondritis.</li>
 
<li>Hepatic steatosis.</li>
</ol>
</div>"
* basedOn = Reference(ServiceRequest/ex-ServiceRequest)
* status = FHIRDiagnosticReportStatus#final "Final"
* category = FHIRDiagnosticService#RAD "Radiology"
* code = LOINC#29252-4 "CT Chest WO Contrast"
* subject = Reference(Patient/ex-Patient)
* effectiveDateTime = 2020-12-31T23:50:50-05:00
* issued = 2020-12-31T23:55:50-05:00
* performer = Reference(Organization/ex-Organization)
* resultsInterpreter = Reference(Practitioner/ex-Practitioner)
* imagingStudy = Reference(ImagingStudy/ex-ImagingStudy)
// FHIR 5.0.0 changes
// * extension[associatedStudy].valueCodeableReference.reference = Reference(ImagingStudy/ex-ImagingStudy-Comparison)
* extension[associatedStudy].valueReference = Reference(ImagingStudy/ex-ImagingStudy-Comparison)
* presentedForm[html].data = "PGh0bWw+Cjxib2R5Pgo8ZGl2IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPgoKPHRhYmxlIGNsYXNzPVwiZ3JpZFwiPgo8dHI+PHRkPlBhdGllbnQgTmFtZTo8L3RkPjx0ZD48Yj5Kb2huIFNtaXRoPC9iPjwvdGQ+PC90cj4KPHRyPjx0ZD5NUk46PC90ZD48dGQ+MTIzNDU2NzwvdGQ+PC90cj4KPHRyPjx0ZD5BY2Nlc3Npb24gTnVtYmVyOjwvdGQ+PHRkPjEyMzQ1PC90ZD48L3RyPgo8dHI+PHRkPlN0dWR5IERhdGU6PC90ZD48dGQ+MjAyMC0xMi0zMSAxMTo1MDo1MC0wNTAwPC90ZD48L3RyPgo8dHI+PHRkPlN0dWR5IFR5cGU6PC90ZD48dGQ+Q1QgQ2hlc3QgV08gQ29udHJhc3Q8L3RkPjwvdHI+CjwvdGFibGU+Cgo8aHI+PC9ocj4KCjxkaXY+SU5ESUNBVElPTjogSGlzdG9yeTogMjRNIHdpdGggc3RlbnQgcGxhY2VtZW50IGluIHRoZSBsZWZ0IG1haW4gYnJvbmNodXMgcHJlc2VudHMgd2l0aCByaWdodCBzaWRlZCBjaGVzdCBwYWluIHNpbmNlIDlhbTwvZGl2Pgo8cD48L3A+CjxkaXY+VEVDSE5JUVVFOiBWb2x1bWV0cmljLCBtdWx0aWRldGVjdG9yIENUIG9mIHRoZSBjaGVzdCB3YXMgcGVyZm9ybWVkIHdpdGhvdXQgaW50cmF2ZW5vdXMgb3Igb3JhbCBjb250cmFzdCBhZG1pbmlzdHJhdGlvbi4gSW1hZ2VzIGFyZSBwcmVzZW50ZWQgZm9yIGRpc3BsYXkgaW4gdGhlIGF4aWFsIHBsYW5lIGF0IDUgbW0gYW5kIDEuMjUgbW0gY29sbGltYXRpb24uIEEgc2VyaWVzIG9mIG11bHRpcGxhbmFyIHJlZm9ybWF0aW9uIGltYWdlcyBhcmUgYWxzbyBzdWJtaXR0ZWQgZm9yIHJldmlldy48L2Rpdj4KPHA+PC9wPgo8ZGl2PkRMUDogMzczIG1HeS1jbS48L2Rpdj4KPHA+PC9wPgo8aDI+RklORElOR1M6PC9oMj4KPGRpdj5UaGUgaW1hZ2VkIHBvcnRpb24gb2YgYSB0aHlyb2lkIGdsYW5kIGlzIHVucmVtYXJrYWJsZS4gUHJvbWluZW50IG9yIG1pbGRseSBlbmxhcmdlZCBtZWRpYXN0aW5hbCBhbmQgYmlsYXRlcmFsIGhpbGFyIGx5bXBoIG5vZGVzIG1lYXN1cmUgdXAgdG8gMS4yIHggMC44IGNtIGluIHRoZSByaWdodCBwYXJhdHJhY2hlYWwgc3RhdGlvbiAoMjoxMiksIDIuMyB4IDEuNCBjbSBpbiB0aGUgc3ViY2FyaW5hbCBzdGF0aW9uICgyOjE4KSwgYW5kIDEuNCB4IDAuOSBjbSBpbiB0aGUgcmlnaHQgaGlsYXIgc3RhdGlvbnMgKDI6MTYpLiBObyBzaWduaWZpY2FudCBheGlsbGFyeSBseW1waGFkZW5vcGF0aHkgaXMgZGV0ZWN0ZWQuIFRoZSBlc29waGFndXMgaXMgdW5yZW1hcmthYmxlLiBUaGUgdGhvcmFjaWMgYW9ydGEgaXMgbm9ybWFsIGluIGNhbGliZXIgd2l0aCBhIHR5cGljYWwgMyB2ZXNzZWwgdGFrZW9mZiBmcm9tIHRoZSBhcmNoLiBUaGUgcHVsbW9uYXJ5IGFydGVyaWFsIHRydW5rIGlzIG5vcm1hbCBpbiBjYWxpYmVyLiBUaGUgaGVhcnQgaXMgbm9ybWFsIGluIHNpemUgd2l0aG91dCBwZXJpY2FyZGlhbCBlZmZ1c2lvbi48L2Rpdj4KPHA+PC9wPgo8ZGl2PlRoZXJlIGlzIGZvY2FsIG5hcnJvd2luZyBvZiB0aGUgcHJveGltYWwgcG9ydGlvbiBvZiB0aGUgYnJvbmNoaWFsIHN0ZW50IGluIHRoZSBsZWZ0IG1haW5zdGVtIGJyb25jaHVzICg2MDFiOjU2KSwgd2hpY2ggaXMgbmVhcmx5IGNvbGxhcHNlZCBhbmQgYXBwZWFycyBuZXcgZnJvbSB0aGUgcHJpb3IgY2hlc3QgcmFkaW9ncmFwaC4gVHJhY2UgZmx1aWQgb3IgZGVicmlzIGlzIHNlZW4gaW4gdGhlIGRpc3RhbCBsdW1lbiBvZiB0aGUgc3RlbnQgKDQ6NzEpLiBBIHRyYWNoZW9zdG9teSB0dWJlIGlzIHVuY2hhbmdlZCBpbiBwb3NpdGlvbiB3aXRob3V0IGV2aWRlbmNlIG9mIGNvbXBsaWNhdGlvbnMuIFRoZXJlIGlzIGNpcmN1bWZlcmVudGlhbCB0aGlja2VuaW5nIG9mIHRoZSB0cmFjaGVhbCBhbmQgYnJvbmNoaWFsIHdhbGxzLCB3aGljaCBpcyB1bmNoYW5nZWQsIGluIGtlZXBpbmcgd2l0aCB0aGUgcGF0aWVudCdzIGtub3duIGRpYWdub3NpcyBvZiBwb2x5Y2hvbmRyaXRpcy4gVGhlIHJlbWFpbmRlciBvZiB0aGUgdHJhY2hlb2Jyb25jaGlhbCB0cmVlIGlzIHBhdGVudCB0byB0aGUgc3Vic2VnbWVudGFsIGxldmVscy4gVGhlIGFpcndheXMgYXJlIG5vcm1hbCBpbiBjYWxpYmVyLjwvZGl2Pgo8cD48L3A+CjxkaXY+V2l0aGluIHRoZSBwdWxtb25hcnkgcGFyZW5jaHltYSwgdGhlcmUgaXMgZGlmZnVzZSBwZXJpYnJvbmNob3Zhc2N1bGFyIG5vZHVsYXIgYW5kIGdyb3VuZC1nbGFzcyBvcGFjaXRpZXMgYmVjb21pbmcgY29uZmx1ZW50IGluIHRoZSByaWdodCBtaWRkbGUgKDYwMTo1MikgYW5kIGxlZnQgdXBwZXIgKDYwMTo2NSkgYW5kIGxvd2VyIGxvYmVzICg2MDE6NzIpIGNvbnNpc3RlbnQgd2l0aCBtdWx0aWZvY2FsIHBuZXVtb25pYS4gVGhlcmUgaXMgYSBzbWFsbCBsZWZ0IGFuZCB0cmFjZSByaWdodCBwbGV1cmFsIGVmZnVzaW9uLiBObyBwbmV1bW90aG9yYXggaXMgcHJlc2VudC4gVGhlcmUgYXJlIG5vIHN1c3BpY2lvdXMgbWFzc2VzIG9yIHBsZXVyYWwgYWJub3JtYWxpdGllcy48L2Rpdj4KPHA+PC9wPgo8ZGl2PlRoZSBwYXRpZW50IGlzIHN0YXR1cyBwb3N0IG1lZGlhbiBzdGVybm90b215IHdpdGggaW50YWN0IHN0ZXJuYWwgd2lyZXMuIE5vIGJsYXN0aWMgb3IgbHl0aWMgbGVzaW9uIHN1c3BpY2lvdXMgZm9yIG1hbGlnbmFuY3kgaXMgcHJlc2VudC48L2Rpdj4KPHA+PC9wPgo8ZGl2PkFsdGhvdWdoIHRoaXMgc3R1ZHkgaXMgbm90IHRhaWxvcmVkIGZvciB0aGUgZXZhbHVhdGlvbiBvZiBzdWJkaWFwaHJhZ21hdGljIGNvbnRlbnRzLCB0aGUgaW1hZ2VkIHVwcGVyIGFiZG9tZW4gZGVtb25zdHJhdGVzIGRpZmZ1c2UgaHlwb2F0dGVudWF0aW9uIG9mIHRoZSBsaXZlciBjb25zaXN0ZW50IHdpdGggaGVwYXRpYyBzdGVhdG9zaXMuPC9kaXY+CjxwPjwvcD4KCjxoMj5JTVBSRVNTSU9OOjwvaDI+CjxvbD4KPGxpPk11bHRpZm9jYWwgcG5ldW1vbmlhIGludm9sdmluZyB0aGUgcmlnaHQgbWlkZGxlLCBsZWZ0IHVwcGVyIGFuZCBsZWZ0IGxvd2VyIGxvYmVzIHdpdGggc21hbGwgbGVmdCBhbmQgdHJhY2UgcmlnaHQgcGxldXJhbCBlZmZ1c2lvbnMuPC9saT4KCjxsaT5DZW50cmFsIG1lZGlhbnN0aW5hbCBseW1waGFkZW5vcGF0aHkgaXMgbGlrZWx5IHJlYWN0aXZlLjwvbGk+CiAKPGxpPkZvY2FsIHN0ZW5vc2lzIG9mIHRoZSBwcm94aW1hbCBwb3J0aW9uIG9mIHRoZSBsZWZ0IG1haW4gc3RlbSBicm9uY2hpYWwgc3RlbnQsIHdoaWNoIGFwcGVhcnMgbmV3IGZyb20gdGhlIHByaW9yIGNoZXN0IHJhZGlvZ3JhcGguIFRoZXJlIGlzIHRyYWNlIGZsdWlkIG9yIGRlYnJpcyB3aXRoaW4gdGhlIGRpc3RhbCBsdW1lbiBvZiB0aGUgc3RlbnQuPC9saT4KIAo8bGk+VW5jaGFuZ2VkIGNpcmN1bWZlcmVudGlhbCB0aGlja2VuaW5nIG9mIHRoZSB0cmFjaGVhbCBhbmQgYnJvbmNoaWFsIHdhbGxzLCBpbiBrZWVwaW5nIHdpdGggdGhlIHBhdGllbnQncyBrbm93biBkaWFnbm9zaXMgb2YgcG9seWNob25kcml0aXMuPC9saT4KIAo8bGk+SGVwYXRpYyBzdGVhdG9zaXMuPC9saT4KPC9vbD4KPC9kaXY+CjwvYm9keT4KPC9odG1sPg=="
* presentedForm[html].contentType = MIME#text/html "HTML"
* presentedForm[html].hash = "4ED94777DD88C61F3A4D2C50DE6D92E8E53EE5CA"
* presentedForm[html].size = 3514

Instance: ex-DiagnosticReport-Using-Observation
InstanceOf: IMRDiagnosticReport
Title: "(Experimental) IMR DiagnosticReport example with experimental IMR Observation"
Description: """
This example uses IMR DiagnosticReport to capture the same real world radiology diagnostic report,
with the addition of using the experimental IMR Observation to capture findings and impressions.
"""
Usage: #example
* text.status = FHIRNarrativeStatus#additional "Additional"
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
<div>INDICATION: History: 24M with stent placement in the left main bronchus presents with right sided chest pain since 9am</div>
<p></p>
<div>TECHNIQUE: Volumetric, multidetector CT of the chest was performed without intravenous or oral contrast administration. Images are presented for display in the axial plane at 5 mm and 1.25 mm collimation. A series of multiplanar reformation images are also submitted for review.</div>
<p></p>
<div>DLP: 373 mGy-cm.</div>
<p></p>
<h2>FINDINGS:</h2>
<div>The imaged portion of a thyroid gland is unremarkable. Prominent or mildly enlarged mediastinal and bilateral hilar lymph nodes measure up to 1.2 x 0.8 cm in the right paratracheal station <span class=\"imr-ref-ImagingSelection\" id=\"ImagingSelection/123\">(2:12)</span>, 2.3 x 1.4 cm in the subcarinal station <span class=\"imr-ref-ImagingSelection\" id=\"ImagingSelection/234\">(2:18)</span>, and 1.4 x 0.9 cm in the right hilar stations <span class=\"imr-ref-ImagingSelection\" id=\"ImagingSelection/345\">(2:16)</span>. No significant axillary lymphadenopathy is detected. The esophagus is unremarkable. The thoracic aorta is normal in caliber with a typical 3 vessel takeoff from the arch. The pulmonary arterial trunk is normal in caliber. The heart is normal in size without pericardial effusion.</div>
<p></p>
<div>There is focal narrowing of the proximal portion of the bronchial stent in the left mainstem bronchus (601b:56), which is nearly collapsed and appears new from the prior chest radiograph. Trace fluid or debris is seen in the distal lumen of the stent <span class=\"imr-ref-ImagingSelection\" id=\"ImagingSelection/456\">(4:71)</span>. A tracheostomy tube is unchanged in position without evidence of complications. There is circumferential thickening of the tracheal and bronchial walls, which is unchanged, in keeping with the patient's known diagnosis of polychondritis. The remainder of the tracheobronchial tree is patent to the subsegmental levels. The airways are normal in caliber.</div>
<p></p>
<div>Within the pulmonary parenchyma, there is diffuse peribronchovascular nodular and ground-glass opacities becoming confluent in the right middle <span class=\"imr-ref-ImagingSelection\" id=\"ImagingSelection/567\">(601:52)</span> and left upper <span class=\"imr-ref-ImagingSelection\" id=\"ImagingSelection/678\">(601:65)</span> and lower lobes <span class=\"imr-ref-ImagingSelection\" id=\"ImagingSelection/789\">(601:72)</span> consistent with multifocal pneumonia. There is a small left and trace right pleural effusion. No pneumothorax is present. There are no suspicious masses or pleural abnormalities.</div>
<p></p>
<div>The patient is status post median sternotomy with intact sternal wires. No blastic or lytic lesion suspicious for malignancy is present.</div>
<p></p>
<div>Although this study is not tailored for the evaluation of subdiaphragmatic contents, the imaged upper abdomen demonstrates diffuse hypoattenuation of the liver consistent with hepatic steatosis.</div>
<p></p>

<h2>IMPRESSION:</h2>
<ol>
<li>Multifocal pneumonia involving the right middle, left upper and left lower lobes with small left and trace right pleural effusions.</li>

<li>Central medianstinal lymphadenopathy is likely reactive.</li>
 
<li>Focal stenosis of the proximal portion of the left main stem bronchial stent, which appears new from the prior chest radiograph. There is trace fluid or debris within the distal lumen of the stent.</li>
 
<li>Unchanged circumferential thickening of the tracheal and bronchial walls, in keeping with the patient's known diagnosis of polychondritis.</li>
 
<li>Hepatic steatosis.</li>
</ol>
</div>"
* basedOn = Reference(ServiceRequest/ex-ServiceRequest)
* status = FHIRDiagnosticReportStatus#final "Final"
* category = FHIRDiagnosticService#RAD "Radiology"
* code = LOINC#29252-4 "CT Chest WO Contrast"
* subject = Reference(Patient/ex-Patient)
* effectiveDateTime = 2020-12-31T23:50:50-05:00
* issued = 2020-12-31T23:55:50-05:00
* performer = Reference(Organization/ex-Organization)
* resultsInterpreter = Reference(Practitioner/ex-Practitioner)
* result[0] = Reference(Observation/ex-IMRObservation-Finding)
* result[1] = Reference(Observation/ex-IMRObservation-Impression-1)
* result[2] = Reference(Observation/ex-IMRObservation-Impression-2)
* result[3] = Reference(Observation/ex-IMRObservation-Impression-3)
* result[4] = Reference(Observation/ex-IMRObservation-Impression-4)
* result[5] = Reference(Observation/ex-IMRObservation-Impression-5)
* imagingStudy = Reference(ImagingStudy/ex-ImagingStudy)
// FHIR 5.0.0 changes
// * extension[associatedStudy].valueCodeableReference.reference = Reference(ImagingStudy/ex-ImagingStudy-Comparison)
* extension[associatedStudy].valueReference = Reference(ImagingStudy/ex-ImagingStudy-Comparison)
* presentedForm[html].data = "PGh0bWw+Cjxib2R5Pgo8ZGl2IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPgoKPHRhYmxlIGNsYXNzPVwiZ3JpZFwiPgo8dHI+PHRkPlBhdGllbnQgTmFtZTo8L3RkPjx0ZD48Yj5Kb2huIFNtaXRoPC9iPjwvdGQ+PC90cj4KPHRyPjx0ZD5NUk46PC90ZD48dGQ+MTIzNDU2NzwvdGQ+PC90cj4KPHRyPjx0ZD5BY2Nlc3Npb24gTnVtYmVyOjwvdGQ+PHRkPjEyMzQ1PC90ZD48L3RyPgo8dHI+PHRkPlN0dWR5IERhdGU6PC90ZD48dGQ+MjAyMC0xMi0zMSAxMTo1MDo1MC0wNTAwPC90ZD48L3RyPgo8dHI+PHRkPlN0dWR5IFR5cGU6PC90ZD48dGQ+Q1QgQ2hlc3QgV08gQ29udHJhc3Q8L3RkPjwvdHI+CjwvdGFibGU+Cgo8aHI+PC9ocj4KCjxkaXY+SU5ESUNBVElPTjogSGlzdG9yeTogMjRNIHdpdGggc3RlbnQgcGxhY2VtZW50IGluIHRoZSBsZWZ0IG1haW4gYnJvbmNodXMgcHJlc2VudHMgd2l0aCByaWdodCBzaWRlZCBjaGVzdCBwYWluIHNpbmNlIDlhbTwvZGl2Pgo8cD48L3A+CjxkaXY+VEVDSE5JUVVFOiBWb2x1bWV0cmljLCBtdWx0aWRldGVjdG9yIENUIG9mIHRoZSBjaGVzdCB3YXMgcGVyZm9ybWVkIHdpdGhvdXQgaW50cmF2ZW5vdXMgb3Igb3JhbCBjb250cmFzdCBhZG1pbmlzdHJhdGlvbi4gSW1hZ2VzIGFyZSBwcmVzZW50ZWQgZm9yIGRpc3BsYXkgaW4gdGhlIGF4aWFsIHBsYW5lIGF0IDUgbW0gYW5kIDEuMjUgbW0gY29sbGltYXRpb24uIEEgc2VyaWVzIG9mIG11bHRpcGxhbmFyIHJlZm9ybWF0aW9uIGltYWdlcyBhcmUgYWxzbyBzdWJtaXR0ZWQgZm9yIHJldmlldy48L2Rpdj4KPHA+PC9wPgo8ZGl2PkRMUDogMzczIG1HeS1jbS48L2Rpdj4KPHA+PC9wPgo8aDI+RklORElOR1M6PC9oMj4KPGRpdj5UaGUgaW1hZ2VkIHBvcnRpb24gb2YgYSB0aHlyb2lkIGdsYW5kIGlzIHVucmVtYXJrYWJsZS4gUHJvbWluZW50IG9yIG1pbGRseSBlbmxhcmdlZCBtZWRpYXN0aW5hbCBhbmQgYmlsYXRlcmFsIGhpbGFyIGx5bXBoIG5vZGVzIG1lYXN1cmUgdXAgdG8gMS4yIHggMC44IGNtIGluIHRoZSByaWdodCBwYXJhdHJhY2hlYWwgc3RhdGlvbiAoMjoxMiksIDIuMyB4IDEuNCBjbSBpbiB0aGUgc3ViY2FyaW5hbCBzdGF0aW9uICgyOjE4KSwgYW5kIDEuNCB4IDAuOSBjbSBpbiB0aGUgcmlnaHQgaGlsYXIgc3RhdGlvbnMgKDI6MTYpLiBObyBzaWduaWZpY2FudCBheGlsbGFyeSBseW1waGFkZW5vcGF0aHkgaXMgZGV0ZWN0ZWQuIFRoZSBlc29waGFndXMgaXMgdW5yZW1hcmthYmxlLiBUaGUgdGhvcmFjaWMgYW9ydGEgaXMgbm9ybWFsIGluIGNhbGliZXIgd2l0aCBhIHR5cGljYWwgMyB2ZXNzZWwgdGFrZW9mZiBmcm9tIHRoZSBhcmNoLiBUaGUgcHVsbW9uYXJ5IGFydGVyaWFsIHRydW5rIGlzIG5vcm1hbCBpbiBjYWxpYmVyLiBUaGUgaGVhcnQgaXMgbm9ybWFsIGluIHNpemUgd2l0aG91dCBwZXJpY2FyZGlhbCBlZmZ1c2lvbi48L2Rpdj4KPHA+PC9wPgo8ZGl2PlRoZXJlIGlzIGZvY2FsIG5hcnJvd2luZyBvZiB0aGUgcHJveGltYWwgcG9ydGlvbiBvZiB0aGUgYnJvbmNoaWFsIHN0ZW50IGluIHRoZSBsZWZ0IG1haW5zdGVtIGJyb25jaHVzICg2MDFiOjU2KSwgd2hpY2ggaXMgbmVhcmx5IGNvbGxhcHNlZCBhbmQgYXBwZWFycyBuZXcgZnJvbSB0aGUgcHJpb3IgY2hlc3QgcmFkaW9ncmFwaC4gVHJhY2UgZmx1aWQgb3IgZGVicmlzIGlzIHNlZW4gaW4gdGhlIGRpc3RhbCBsdW1lbiBvZiB0aGUgc3RlbnQgKDQ6NzEpLiBBIHRyYWNoZW9zdG9teSB0dWJlIGlzIHVuY2hhbmdlZCBpbiBwb3NpdGlvbiB3aXRob3V0IGV2aWRlbmNlIG9mIGNvbXBsaWNhdGlvbnMuIFRoZXJlIGlzIGNpcmN1bWZlcmVudGlhbCB0aGlja2VuaW5nIG9mIHRoZSB0cmFjaGVhbCBhbmQgYnJvbmNoaWFsIHdhbGxzLCB3aGljaCBpcyB1bmNoYW5nZWQsIGluIGtlZXBpbmcgd2l0aCB0aGUgcGF0aWVudCdzIGtub3duIGRpYWdub3NpcyBvZiBwb2x5Y2hvbmRyaXRpcy4gVGhlIHJlbWFpbmRlciBvZiB0aGUgdHJhY2hlb2Jyb25jaGlhbCB0cmVlIGlzIHBhdGVudCB0byB0aGUgc3Vic2VnbWVudGFsIGxldmVscy4gVGhlIGFpcndheXMgYXJlIG5vcm1hbCBpbiBjYWxpYmVyLjwvZGl2Pgo8cD48L3A+CjxkaXY+V2l0aGluIHRoZSBwdWxtb25hcnkgcGFyZW5jaHltYSwgdGhlcmUgaXMgZGlmZnVzZSBwZXJpYnJvbmNob3Zhc2N1bGFyIG5vZHVsYXIgYW5kIGdyb3VuZC1nbGFzcyBvcGFjaXRpZXMgYmVjb21pbmcgY29uZmx1ZW50IGluIHRoZSByaWdodCBtaWRkbGUgKDYwMTo1MikgYW5kIGxlZnQgdXBwZXIgKDYwMTo2NSkgYW5kIGxvd2VyIGxvYmVzICg2MDE6NzIpIGNvbnNpc3RlbnQgd2l0aCBtdWx0aWZvY2FsIHBuZXVtb25pYS4gVGhlcmUgaXMgYSBzbWFsbCBsZWZ0IGFuZCB0cmFjZSByaWdodCBwbGV1cmFsIGVmZnVzaW9uLiBObyBwbmV1bW90aG9yYXggaXMgcHJlc2VudC4gVGhlcmUgYXJlIG5vIHN1c3BpY2lvdXMgbWFzc2VzIG9yIHBsZXVyYWwgYWJub3JtYWxpdGllcy48L2Rpdj4KPHA+PC9wPgo8ZGl2PlRoZSBwYXRpZW50IGlzIHN0YXR1cyBwb3N0IG1lZGlhbiBzdGVybm90b215IHdpdGggaW50YWN0IHN0ZXJuYWwgd2lyZXMuIE5vIGJsYXN0aWMgb3IgbHl0aWMgbGVzaW9uIHN1c3BpY2lvdXMgZm9yIG1hbGlnbmFuY3kgaXMgcHJlc2VudC48L2Rpdj4KPHA+PC9wPgo8ZGl2PkFsdGhvdWdoIHRoaXMgc3R1ZHkgaXMgbm90IHRhaWxvcmVkIGZvciB0aGUgZXZhbHVhdGlvbiBvZiBzdWJkaWFwaHJhZ21hdGljIGNvbnRlbnRzLCB0aGUgaW1hZ2VkIHVwcGVyIGFiZG9tZW4gZGVtb25zdHJhdGVzIGRpZmZ1c2UgaHlwb2F0dGVudWF0aW9uIG9mIHRoZSBsaXZlciBjb25zaXN0ZW50IHdpdGggaGVwYXRpYyBzdGVhdG9zaXMuPC9kaXY+CjxwPjwvcD4KCjxoMj5JTVBSRVNTSU9OOjwvaDI+CjxvbD4KPGxpPk11bHRpZm9jYWwgcG5ldW1vbmlhIGludm9sdmluZyB0aGUgcmlnaHQgbWlkZGxlLCBsZWZ0IHVwcGVyIGFuZCBsZWZ0IGxvd2VyIGxvYmVzIHdpdGggc21hbGwgbGVmdCBhbmQgdHJhY2UgcmlnaHQgcGxldXJhbCBlZmZ1c2lvbnMuPC9saT4KCjxsaT5DZW50cmFsIG1lZGlhbnN0aW5hbCBseW1waGFkZW5vcGF0aHkgaXMgbGlrZWx5IHJlYWN0aXZlLjwvbGk+CiAKPGxpPkZvY2FsIHN0ZW5vc2lzIG9mIHRoZSBwcm94aW1hbCBwb3J0aW9uIG9mIHRoZSBsZWZ0IG1haW4gc3RlbSBicm9uY2hpYWwgc3RlbnQsIHdoaWNoIGFwcGVhcnMgbmV3IGZyb20gdGhlIHByaW9yIGNoZXN0IHJhZGlvZ3JhcGguIFRoZXJlIGlzIHRyYWNlIGZsdWlkIG9yIGRlYnJpcyB3aXRoaW4gdGhlIGRpc3RhbCBsdW1lbiBvZiB0aGUgc3RlbnQuPC9saT4KIAo8bGk+VW5jaGFuZ2VkIGNpcmN1bWZlcmVudGlhbCB0aGlja2VuaW5nIG9mIHRoZSB0cmFjaGVhbCBhbmQgYnJvbmNoaWFsIHdhbGxzLCBpbiBrZWVwaW5nIHdpdGggdGhlIHBhdGllbnQncyBrbm93biBkaWFnbm9zaXMgb2YgcG9seWNob25kcml0aXMuPC9saT4KIAo8bGk+SGVwYXRpYyBzdGVhdG9zaXMuPC9saT4KPC9vbD4KPC9kaXY+CjwvYm9keT4KPC9odG1sPg=="
* presentedForm[html].contentType = MIME#text/html "HTML"
* presentedForm[html].hash = "4ED94777DD88C61F3A4D2C50DE6D92E8E53EE5CA"
* presentedForm[html].size = 3514

Instance: ex-Organization
InstanceOf: Organization
Title: "Organization example"
Description: "Simple Organization to be used in DiagnosticReport"
Usage: #example
* name = "YourHospital"


Instance: ex-Practitioner
InstanceOf: Practitioner
Title: "Practitioner example"
Description: "Simple Practitioner to be used in DiagnosticReport"
Usage: #example
* name.family = "Guy"
* name.given = "Funny"



---

File: repos/IHE_SLASH_RAD.IMR/input/fsh/ex-IMRImagingStudy.fsh

Instance: ex-ImagingStudy
InstanceOf: IMRImagingStudy
Title: "IMR ImagingStudy example"
Description: "Simple IMR ImagingStudy to be used in DiagnosticReport"
Usage: #example
* identifier[studyUID].system = DICOMUID
* identifier[studyUID].value = "urn:oid:1.2.3.4.5"
* status = FHIRImagingStudyStatus#available
* modality = DICOM#CT "Computed Tomography"
* subject = Reference(Patient/ex-Patient)
* started = 2020-12-31T23:30:50-05:00
* endpoint = Reference(Endpoint/ex-ImagingStudyEndpoint-Study)
* procedureCode.coding = LOINC#29252-4 "CT Chest WO Contrast"
// Changes in FHIR R5
// * procedure.concept.coding = LOINC#29252-4 "CT Chest WO Contrast"
* series.uid = "1.2.3.4.5.1"
* series.modality = DICOM#CT "Computed Tomography"


Instance: ex-ImagingStudy-Comparison
InstanceOf: IMRImagingStudy
Title: "IMR ImagingStudy example"
Description: "Simple IMR ImagingStudy to be used as a comparison study in DiagnosticReport"
Usage: #example
* identifier[studyUID].system = DICOMUID
* identifier[studyUID].value = "urn:oid:5.6.7.8.9"
* status = FHIRImagingStudyStatus#available
* modality = DICOM#CT "Computed Tomography"
* subject = Reference(Patient/ex-Patient)
* started = 2020-01-01T23:30:50-05:00
* endpoint = Reference(Endpoint/ex-ImagingStudyEndpoint-Study)
* procedureCode.coding = LOINC#29252-4 "CT Chest WO Contrast"
// Changes in FHIR R5
// * procedure.concept.coding = LOINC#29252-4 "CT Chest WO Contrast"
* series.uid = "5.6.7.8.9.1"
* series.modality = DICOM#CT "Computed Tomography"

---

File: repos/IHE_SLASH_RAD.IMR/input/fsh/ex-IMRObservation-Finding.fsh

Instance:   ex-IMRObservation-Finding
InstanceOf: IMRObservation
Title:      "(Experimental) IMR Observation of all findings and technique"
Description: "Experimental example of encoding a complex clinical findings that include multiple components"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST

* basedOn = Reference(ServiceRequest/ex-ServiceRequest)
* partOf = Reference(ImagingStudy/ex-ImagingStudy)
* status = FHIRObservationStatus#final
* category[imaging].coding = FHIRObservation#imaging "Imaging"
* code = LOINC#59776-5 "Procedure findings Narrative"
* subject = Reference(Patient/ex-Patient)
* effectiveDateTime = 2020-12-31T23:50:50-05:00
* method.text = "Volumetric, multidetector CT of the chest was performed without intravenous or oral contrast administration. Images are presented for display in the axial plane at 5 mm and 1.25 mm collimation. A series of multiplanar reformation images are also submitted for review."
* valueString = "The imaged portion of a thyroid gland is unremarkable. Prominent or mildly enlarged mediastinal and bilateral hilar lymph nodes measure up to 1.2 x 0.8 cm in the right paratracheal station (2:12) , 2.3 x 1.4 cm in the subcarinal station (2:18), and 1.4 x 0.9 cm in the right hilar stations (2:16). No significant axillary lymphadenopathy is detected. The esophagus is unremarkable. The thoracic aorta is normal in caliber with a typical 3 vessel takeoff from the arch. The pulmonary arterial trunk is normal in caliber. The heart is normal in size without pericardial effusion. 
 
There is focal narrowing of the proximal portion of the bronchial stent in the left mainstem bronchus (601b:56), which is nearly collapsed and appears new from the prior chest radiograph. Trace fluid or debris is seen in the distal lumen of the stent (4:71). A tracheostomy tube is unchanged in position without evidence of complications. There is circumferential thickening of the tracheal and bronchial walls, which is unchanged, in keeping with the patient's known diagnosis of polychondritis. The remainder of the tracheobronchial tree is patent to the subsegmental levels. The airways are normal in caliber. 
 
Within the pulmonary parenchyma, there is diffuse peribronchovascular nodular and ground-glass opacities becoming confluent in the right middle (601:52) and left upper (601:65) and lower lobes (601:72) consistent with multifocal pneumonia. There is a small left and trace right pleural effusion. No pneumothorax is present. There are no suspicious masses or pleural abnormalities. 
 
The patient is status post median sternotomy with intact sternal wires. No blastic or lytic lesion suspicious for malignancy is present. 
 
Although this study is not tailored for the evaluation of subdiaphragmatic contents, the imaged upper abdomen demonstrates diffuse hypoattenuation of the liver consistent with hepatic steatosis."
* component[+].code = DICOM#112002 "Series Instance UID"
* component[=].valueString = "series/2.1/instance/6.1"
* component[=].id = "1"
* component[+].code = DICOM#112002 "Series Instance UID"
* component[=].valueString = "series/2.1/instance/18.1"
* component[=].id = "2"
* component[+].code = DICOM#112002 "Series Instance UID"
* component[=].valueString = "series/2.1/instance/16.1"
* component[=].id = "3"
* component[+].code = DICOM#112002 "Series Instance UID"
* component[=].valueString = "series/601.1/instance/56.1"
* component[=].id = "4"
* component[+].code = DICOM#112002 "Series Instance UID"
* component[=].valueString = "series/4.1/instance/71.1"
* component[=].id = "5"
* component[+].code = DICOM#112002 "Series Instance UID"
* component[=].valueString = "series/601.1/instance/52.1"
* component[=].id = "6"
* component[+].code = DICOM#112002 "Series Instance UID"
* component[=].valueString = "series/601.1/instance/65.1"
* component[=].id = "7"
* component[+].code = DICOM#112002 "Series Instance UID"
* component[=].valueString = "series/601.1/instance/72.1"
* component[=].id = "8"

// DLP
* component[+].code = DICOM#113838 "DLP"
* component[=].valueQuantity.value = 373
* component[=].valueQuantity.code = UCUM#mGy.cm "mGy.cm"
* component[=].valueQuantity.system = UCUM

---

File: repos/IHE_SLASH_RAD.IMR/input/fsh/ex-IMRObservation-Impression.fsh

Instance:   ex-IMRObservation-Impression-1
InstanceOf: IMRObservation
Title:      "(Experimental) IMR Observation of Impression 1"
Description: "Experimental example of encoding an impression as text"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST

* basedOn = Reference(ServiceRequest/ex-ServiceRequest)
* partOf = Reference(ImagingStudy/ex-ImagingStudy)
* status = FHIRObservationStatus#final
* category[imaging].coding = FHIRObservation#imaging "Imaging"
* code = LOINC#19005-8 "Radiology Imaging study [Impression] (narrative)"
* subject = Reference(Patient/ex-Patient)
* effectiveDateTime = 2020-12-31T23:50:50-05:00
* valueString = "Multifocal pneumonia involving the right middle, left upper and left lower lobes with small left and trace right pleural effusions."

Instance:   ex-IMRObservation-Impression-2
InstanceOf: IMRObservation
Title:      "(Experimental) IMR Observation of Impression 2"
Description: "Experimental example of encoding an impression as text"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST

* basedOn = Reference(ServiceRequest/ex-ServiceRequest)
* partOf = Reference(ImagingStudy/ex-ImagingStudy)
* status = FHIRObservationStatus#final
* category[imaging].coding = FHIRObservation#imaging "Imaging"
* code = LOINC#19005-8 "Radiology Imaging study [Impression] (narrative)"
* subject = Reference(Patient/ex-Patient)
* effectiveDateTime = 2020-12-31T23:50:50-05:00
* valueString = "Central medianstinal lymphadenopathy is likely reactive."

Instance:   ex-IMRObservation-Impression-3
InstanceOf: IMRObservation
Title:      "(Experimental) IMR Observation of Impression 3"
Description: "Experimental example of encoding an impression as text"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST

* basedOn = Reference(ServiceRequest/ex-ServiceRequest)
* partOf = Reference(ImagingStudy/ex-ImagingStudy)
* status = FHIRObservationStatus#final
* category[imaging].coding = FHIRObservation#imaging "Imaging"
* code = LOINC#19005-8 "Radiology Imaging study [Impression] (narrative)"
* subject = Reference(Patient/ex-Patient)
* effectiveDateTime = 2020-12-31T23:50:50-05:00
* valueString = "Focal stenosis of the proximal portion of the left main stem bronchial stent, which appears new from the prior chest radiograph. There is trace fluid or debris within the distal lumen of the stent."


Instance:   ex-IMRObservation-Impression-4
InstanceOf: IMRObservation
Title:      "(Experimental) IMR Observation of Impression 4"
Description: "Experimental example of encoding an impression as text"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST

* basedOn = Reference(ServiceRequest/ex-ServiceRequest)
* partOf = Reference(ImagingStudy/ex-ImagingStudy)
* status = FHIRObservationStatus#final
* category[imaging].coding = FHIRObservation#imaging "Imaging"
* code = LOINC#19005-8 "Radiology Imaging study [Impression] (narrative)"
* subject = Reference(Patient/ex-Patient)
* effectiveDateTime = 2020-12-31T23:50:50-05:00
* valueString = "Unchanged circumferential thickening of the tracheal and bronchial walls, in keeping with the patient's known diagnosis of polychondritis."



Instance:   ex-IMRObservation-Impression-5
InstanceOf: IMRObservation
Title:      "(Experimental) IMR Observation of Impression 5"
Description: "Experimental example of encoding an impression as text"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST

* basedOn = Reference(ServiceRequest/ex-ServiceRequest)
* partOf = Reference(ImagingStudy/ex-ImagingStudy)
* status = FHIRObservationStatus#final
* category[imaging].coding = FHIRObservation#imaging "Imaging"
* code = LOINC#19005-8 "Radiology Imaging study [Impression] (narrative)"
* subject = Reference(Patient/ex-Patient)
* effectiveDateTime = 2020-12-31T23:50:50-05:00
* valueString = "Hepatic steatosis."

---

File: repos/IHE_SLASH_RAD.IMR/input/fsh/ex-IMRServiceRequest.fsh

Instance: ex-ServiceRequest
InstanceOf: IMRServiceRequest
Title: "IMR ServiceRequest example"
Description: "Simple IMR ServiceRequest example with a condition"
Usage: #example
* identifier[accession].type.coding = HL7V2#ACSN "Accession ID"
* identifier[accession].system = "http://www.acme.com/identifiers/accession"
* identifier[accession].value = "12345"
* status = FHIRRequestStatus#completed
* intent = FHIRRequestIntent#order "Order"
* category.coding = SCT#363679005 "Imaging"
* subject = Reference(Patient/ex-Patient)

---

File: repos/IHE_SLASH_RAD.IMR/input/fsh/ex-IMRStudyEndpoint.fsh

Instance: ex-ImagingStudyEndpoint-Series
InstanceOf: ImagingStudyEndpoint
Title: "Imaging Endpoint for Series example"
Description: "Simple Imaging Series Endpoint"
Usage: #example
* connectionType = FHIREndpoint#dicom-wado-rs "DICOM WADO-RS"
* payloadType.coding = DICOM#113015 "Series"
* address = "http://my.example.com/wadors/study/1.2.3.4.5/series/11.22.33.44.55"
* status = FHIREndpointStatus#active


Instance: ex-ImagingStudyEndpoint-Study
InstanceOf: ImagingStudyEndpoint
Title: "Imagin Endpoint for Study example"
Description: "Simple Imagin Study Endpoint"
Usage: #example
* connectionType = FHIREndpoint#dicom-wado-rs "DICOM WADO-RS"
* payloadType.coding = DICOM#113014 "Study"
* address = "http://my.example.com/wadors/study/1.2.3.4.5"
* status = FHIREndpointStatus#active


Instance: ex-ImagingStudyEndpoint-Study-Comparison
InstanceOf: ImagingStudyEndpoint
Title: "Imaging Endpoint for Study example"
Description: "Simple Imaging Study Endpoint fpr the comparison study"
Usage: #example
* connectionType = FHIREndpoint#dicom-wado-rs "DICOM WADO-RS"
* payloadType.coding = DICOM#113014 "Study"
* address = "http://my.example.com/wadors/study/5.6.7.8.9"
* status = FHIREndpointStatus#active

---

File: repos/IHE_SLASH_RAD.IMR/input/fsh/ex-Patient.fsh

Instance: ex-Patient
InstanceOf: Patient
Title: "Patient example"
Description: "Simple Patient used in IMR example"
Usage: #example
* identifier.type.coding = HL7V2#MR "Medical Record Number"
* identifier.system = "http://www.acme.com/identifiers/patient"
* identifier.value = "1234567"
* name.family = "Smith"
* name.given = "John"

---

File: repos/IHE_SLASH_RAD.IMR/input/fsh/ex-StoreMultimediaReportBundle.fsh

Instance: ex-StoreMultimediaReportBundle
InstanceOf: IMRStoreMultimediaReportBundle
Title: "Store Multimedia Report Bundle example"
Description: "Sample Store Multimedia Report Bundle used to store an IMR"
Usage: #example
* meta.profile = "https://profiles.ihe.net/RAD/IMR/StructureDefinition/imr-store-multimedia-report-bundle"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #transaction
* timestamp = 2022-03-13T23:50:50-05:00
* entry[DiagnosticReport].fullUrl = "http://example.org/DiagnosticReport/ex-DiagnosticReport"
* entry[DiagnosticReport].resource = ex-DiagnosticReport
* entry[DiagnosticReport].request.url = "IMRDiagnosticReport"
* entry[DiagnosticReport].request.method = #POST
* entry[ServiceRequest].fullUrl = "http://example.org/ServiceRequest/ex-ServiceRequest"
* entry[ServiceRequest].resource = ex-ServiceRequest
* entry[ServiceRequest].request.url = "IMRServiceRequest"
* entry[ServiceRequest].request.method = #POST
* entry[ImagingStudy].fullUrl = "http://example.org/ImagingStudy/ex-ImagingStudy"
* entry[ImagingStudy].resource = ex-ImagingStudy
* entry[ImagingStudy].request.url = "IMRImagingStudy"
* entry[ImagingStudy].request.method = #POST

/*
* entry[ImagingSelection].fullUrl = "http://example.org/ImagingSelection/ex-ImagingSelection-SingleImage"
* entry[ImagingSelection].resource = ex-ImagingSelection-SingleImage
* entry[ImagingSelection].request.url = "IMRImagingSelection"
* entry[ImagingSelection].request.method = #POST
*/

---

File: repos/IHE_SLASH_RAD.IMR/input/fsh/ex-StoreMultimediaReportBundleResponse.fsh

Instance: ex-StoreMultimediaReportBundleResponse
InstanceOf: IMRStoreMultimediaReportBundleResponse
Title: "Store Multimedia Report Bundle Response example"
Description: "Sample Store Multimedia Report Bundle Response in IMR"
Usage: #example
//* meta.profile = "https://profiles.ihe.net/RAD/IMR/StructureDefinition/imr-store-multimedia-report-bundle-response"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #transaction-response
* link[0].relation = "self"
* link[0].url = "http://example.com/fhir"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "DiagnosticReport/1"
* entry[=].response.lastModified = "2022-03-12T23:55:50-05:00"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "ServiceRequest/1"
* entry[=].response.lastModified = "2022-03-12T23:55:50-05:00"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "ImagingStudy/1"
* entry[=].response.lastModified = "2022-03-12T23:55:50-05:00"

---

File: repos/IHE_SLASH_RAD.IMR/input/fsh/FindMultimediaReportResponse.fsh

Profile:        IMRFindMultimediaReportResponse
Parent:         Bundle
Id:             imr-find-multimedia-report-response
Title:          "IMR Find Multimedia Report Response message"
Description:    "A profile on the Find Multimedia Report Response message"
* type = #searchset (exactly)
* total 1..
* entry ^slicing.discriminator[0].type = #profile
* entry ^slicing.discriminator[0].path = "resource"
* entry ^slicing.rules = #open
* entry.fullUrl 1..
* entry contains DocumentReference 0..*
* entry[DocumentReference] ^short = "IMRDiagnosticReport"
* entry[DocumentReference].resource 1..
* entry[DocumentReference].resource only IMRDiagnosticReport

---

File: repos/IHE_SLASH_RAD.IMR/input/fsh/ImagingStudy.fsh

Profile:        IMRImagingStudy
Parent:         ImagingStudy
Id:             imr-imagingstudy
Title:          "IMR ImagingStudy"
Description:    "IHE Interactive Multimedia Report (IMR) profile on ImagingStudy"

// Must have an identifier which is the study instance UID
* identifier 1..*

* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.discriminator.path = system
* identifier ^slicing.rules = #open
* identifier ^slicing.description = "Slice based on the identifier.system"
* identifier ^slicing.ordered = false

* identifier contains studyUID 1..1 MS
* identifier[studyUID].system = DICOMUID
* identifier[studyUID].value 1..1 MS

* modality 1..*

* subject only Reference(Patient)

* started 1..1 MS

// Must have at least one endpoint at the study level of type IMRStudyEndpoint
* endpoint 1..*
* endpoint only Reference(ImagingStudyEndpoint)


---

File: repos/IHE_SLASH_RAD.IMR/input/fsh/Observation.fsh

Profile:        IMRObservation
Parent:         Observation
Id:             imr-observation
Title:          "(Experimental) Imaging Observation"
Description:    "Experimental profile on Observation for Imaging"

// Shall reference one ServiceRequest
* basedOn 1..* MS

* basedOn ^slicing.discriminator.type = #type
* basedOn ^slicing.discriminator.path = resolve()
* basedOn ^slicing.rules = #open
* basedOn ^slicing.description = "Slice based on the basedOn reference type"
* basedOn ^slicing.ordered = false

* basedOn contains serviceRequest 1..*
* basedOn[serviceRequest] only Reference(IMRServiceRequest)

// Specify the category to be imaging
* category 1..*

* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "coding"
* category ^slicing.rules = #open
* category ^slicing.description = "Slice based on the category.coding"
* category ^slicing.ordered = false

* category contains imaging 1..1 MS
* category[imaging].coding = FHIRObservation#imaging

// Shall reference on Patient
* subject 1..1
* subject only Reference(Patient)

// At least one performer is an Organization
* performer only Reference(Practitioner or PractitionerRole or Organization)

* value[x] MS
* value[x] ^short = "Actual result. Note: If the value is null, an explicit corresponding null value is required rather than leaving the value blank."

// Maximum one study to be referenced in derivedFrom
* derivedFrom 0..* MS

* derivedFrom ^slicing.discriminator.type = #type
* derivedFrom ^slicing.discriminator.path = resolve()
* derivedFrom ^slicing.rules = #open
* derivedFrom ^slicing.description = "Slice based on the derivedFrom reference type"
* derivedFrom ^slicing.ordered = false

* derivedFrom contains imagingStudy 0..1
* derivedFrom[imagingStudy] only Reference(ImagingStudy)

---

File: repos/IHE_SLASH_RAD.IMR/input/fsh/ServiceRequest.fsh

Profile:        IMRServiceRequest
Parent:         ServiceRequest
Id:             imr-servicerequest
Title:          "IMR ServiceRequest"
Description:    """
IHE Interactive Multimedia Report (IMR) profile on ServiceRequest

An IMR ServiceRequest captures the service request (a.k.a. order) for an imaging procedure.
An IMR ServiceRequest is usually created before an imaging study is acquired (e.g. in radiology)
while some other departments (e.g. cardiology) may not create an order at all.
"""

// Must have an identifier which is the accession number
* identifier 1..*

* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.discriminator.path = "type.coding"
* identifier ^slicing.rules = #open
* identifier ^slicing.description = "Slice based on the identifier.type.coding"
* identifier ^slicing.ordered = false

* identifier contains accession 1..1 MS
* identifier[accession].type 1..1 MS
* identifier[accession].type.coding = HL7V2#ACSN
* identifier[accession].value 1..1 MS

* intent from IMRServiceRequestIntentVS (required)

* subject only Reference(Patient)

ValueSet: IMRServiceRequestIntentVS
Id: imr-servicerequest-intent-vs
Title: "IMR ServiceRequest intent Value Set"
Description: "Codes representing the applicable intent for an imaging ServiceRequest."
* FHIRRequestIntent#order "Order"
* FHIRRequestIntent#original-order "Original Order"
* FHIRRequestIntent#reflex-order "Reflex Order"
* FHIRRequestIntent#filler-order "Filler Order"
* FHIRRequestIntent#instance-order "Instance Order"

* ^experimental = false


---

File: repos/IHE_SLASH_RAD.IMR/input/fsh/StoreMultimediaReportBundle.fsh

Profile:        IMRStoreMultimediaReportBundle
Parent:         Bundle
Id:             imr-store-multimedia-report-bundle
Title:          "IMR Store Multimedia Report Bundle"
Description:    "IHE Interactive Multimedia Report (IMR) profile on Bundle"
* meta.profile 1..*
* type = #transaction
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = resource
* entry ^slicing.rules = #closed
* entry ^slicing.description = "Slicing based on the profile conformance of the entry"
* entry and entry.resource MS
* entry contains 
    DiagnosticReport 1..1 and
    ServiceRequest 0..* and
    // ImagingSelection 0..* and
    ImagingStudy 0..*
* entry[DiagnosticReport].resource only IMRDiagnosticReport 
* entry[DiagnosticReport] ^short = "the DiagnosticReport"
* entry[DiagnosticReport] ^definition = "The DiagnosticReport defines the overall diagnostic report."
* entry[DiagnosticReport].resource 1..1
* entry[DiagnosticReport].request 1..1
* entry[DiagnosticReport].request.method = #POST

* entry[ServiceRequest].resource only IMRServiceRequest 
* entry[ServiceRequest] ^short = "the ServiceRequest"
* entry[ServiceRequest] ^definition = "The target ServiceRequest (or order) for this DiagnosticReport."
* entry[ServiceRequest].resource 1..1
* entry[ServiceRequest].request 1..1
* entry[ServiceRequest].request.method = #POST

/*
* entry[ImagingSelection].resource only IMRImagingSelection
* entry[ImagingSelection] ^short = "the ImagingSelection"
* entry[ImagingSelection] ^definition = "the ImagingSelection (or observation imaging context) that is captured in this DiagnosticReport."
* entry[ImagingSelection].resource 1..1
* entry[ImagingSelection].request.method = #POST
*/

* entry[ImagingStudy].resource only IMRImagingStudy
* entry[ImagingStudy] ^short = "the ImagingStudy"
* entry[ImagingStudy] ^definition = "the ImagingStudy referenced by the Observation or by the DiagnoistcReport."
* entry[ImagingStudy].resource 1..1
* entry[ImagingStudy].request.method = #POST


Profile:        IMRStoreMultimediaReportBundleResponse
Parent:         Bundle
Id:             imr-store-multimedia-report-bundle-response
Title:          "IMR Store Multimedia Report Bundle Response"
Description:    """
A profile on the Bundle transaction-response for [RAD-141] Store Multimedia Report Response.

- shall be a transaction response
- shall have at least 1 entry for each entry in the request, in the same order as received in the request
  - entry response location must be indicated
"""
* type = #transaction-response
* entry 1..* 
* entry ^short = "One entry for each entry in the request, in the same order as received"
* entry.response 1..
* entry.response ^short = "Indicating the results of processing the entry"
* entry.response.location 1..

---

File: repos/IHE_SLASH_RAD.IMR/input/images-source/RAD-141-seq.plantuml

@startuml

hide footbox

participant "Sender" as Creator
participant "Receiver" as Repo

activate Creator
activate Repo
Creator->Repo: Store Multimedia Report Bundle Request
Repo-->Creator: Store Multimedia Report Bundle Response
deactivate Repo
deactivate Creator

@enduml

---

File: repos/IHE_SLASH_RAD.IMR/input/images-source/RAD-142-seq.plantuml

@startuml

hide footbox

participant "Display" as Reader
participant "//'User'//" as User

activate Reader
activate User
Reader->User: Display Multimedia Report
deactivate User
deactivate Reader

@enduml

---

File: repos/IHE_SLASH_RAD.IMR/input/images-source/RAD-143-seq.plantuml

@startuml

hide footbox

participant "Requester" as Reader
participant "Responder" as Repo

activate Reader
activate Repo
Reader->Repo: Find Multimedia DiagnosticReports
Repo-->Reader: Return DiagnosicReports Bundle
deactivate Repo
deactivate Reader

@enduml

---

File: repos/IHE_SLASH_RAD.IMR/input/images-source/RAD-144-seq.plantuml

@startuml

hide footbox

participant "Requester" as Reader
participant "Responder" as Repo

activate Reader
activate Repo
Reader->Repo: Retrieve Rendered Report
Repo-->Reader: Return Rendered Report
deactivate Repo
deactivate Reader

@enduml

---

File: repos/IHE_SLASH_RAD.IMR/input/images-source/uc1-authoring-report.plantuml

@startuml

actor "Radiologist" as Rad

participant "Report Creator" as RCreator
participant "Report Repository" as Repo

Rad->>RCreator: //End dictation of study//\n//with multimedia references//

RCreator->Repo: Store multimedia report [RAD-Y1]

@enduml

---

File: repos/IHE_SLASH_RAD.IMR/input/images-source/uc1-presenting-interactive-report-presentedform.plantuml

@startuml

actor "Radiologist" as Rad

participant "Report Creator" as RCreator
participant "Report Repository" as Repo
participant "Rendered Report Reader\n(EMR)" as EMR

participant "Image Manager/\nImage Archive" as Archive

actor Clinician as Clinician

Rad->>RCreator: //Finish report with//\n//multimedia references//
RCreator->RCreator: //Create multimedia report//\n//including the rendered version//\n//of report//\n//(Report X)//
RCreator->RCreator: //Embed links to rendered//\n//versions of referenced images//

RCreator->Repo: Store Multimedia Report [RAD-141]\n(Report X)

Clinician->>EMR: //Select accession X//

...

EMR->Repo: Find Multimedia Report [RAD-143]
Repo-->EMR:(Report X)

alt Report X contains embedded rendered report
EMR->>EMR: //Extract and decode//\n//embedded report//
else Report X contains URL for rendered report
EMR->Repo: Retrieve Rendered Multimedia Report [RAD-144]
Repo-->EMR: (Rendered Report X)
end

EMR->EMR: Display Multimedia Report [RAD-142]
Clinician->>EMR: //Click on hyperlinked image reference//

EMR->Archive: WADO-RS Retrieve [RAD-107]\nRetrieve rendered images
Archive-->EMR: (Rendered images)
EMR->EMR: Display Images [RAD-145]

@enduml

---

File: repos/IHE_SLASH_RAD.IMR/input/images-source/uc2-presenting-interactive-report-standalone.plantuml

@startuml

actor Clinician as Clinician

participant "Report Reader\n(EMR)" as Reader
participant "Report Repository" as Repo

participant "Image Manager/\nImage Archive" as Archive

Clinician->>Reader: //Select report entry//

Reader->Repo: Find Multimedia Report [RAD-143]
Repo-->Reader: Returned multimedia report
Reader->Reader: Display Multimedia Report [RAD-142]
note over Reader
Show report, including hyperlinked references to measurements and/or images.
end note

Clinician->>Reader: //Click on hyperlinked measurements//

Reader->Archive: Retrieve referenced images\nWADO-RS Retrieve [RAD-107]
Reader->Reader: Display Images [RAD-145]
note over Reader
Initial display of the referenced images.
end note

Clinician->>Reader: //Interact with images and/or series//\n//such as scrolling or window levelling//

loop Scrolling Images in Series
Reader->Archive: Retrieve images in series\nWADO-RS Retrieve [RAD-107]
Reader->Reader: Display Images [RAD-145]

Clinician->>Reader: //Interact with images and/or series//\n//such as scrolling or window levelling//
end loop

@enduml

---

File: repos/IHE_SLASH_RAD.IMR/input/images-source/uc3b-presenting-interactive-report-EMR-use-IID.plantuml

@startuml

actor Clinician as Clinician

box Grouped Actors
participant "EMR" as EMR
participant "Image Display\nInvoker" as Invoker
end box

box Grouped Actors
participant "Image Display" as Display
participant "Report Reader" as Reader
end box

participant "Report Repository" as Repo
participant "Image Manager/\nImage Archive" as Archive

Clinician->>EMR: //Navigate patient's study//
EMR->>Invoker: //Navigate study//

Invoker->Display: Invoke Image Display [RAD-106]
Display->>Archive: //Retrieve study//
Archive-->>Display: //Return study//
Display->>Display: //Display study//
Display->>Reader: //Show associated multimedia report//

group IMR Interactive Viewing of Multimedia Content in Report
Reader->Repo: Find Multimedia Report [RAD-143]
Repo-->Reader: Return multimedia report
Reader->Reader: Display Multimedia Report [RAD-142]

note over Reader
Present report, including hyperlinked references to measurements and/or images.
end note

Clinician->>Reader: Click on image references in Report
Reader->>Display: //View series//\n//(internal communication)//
Display->>Archive: //Retrieve series//
Display->Display: Display Images [RAD-145]

Clinician->>Display: //Interact with image and/or series//
end

@enduml

---

File: repos/IHE_SLASH_RAD.IMR/input/images-source/uc4-presenting-interactive-report-EMR.plantuml

@startuml

actor Clinician as Clinician

box Grouped Actors
participant "Report Reader\n(EMR)" as EMR
participant "Image Display\nInvoker" as Invoker
end box

participant "Report Repository" as Repo

participant "Image Display" as Display
participant "Image Manager/\nImage Archive" as Archive

Clinician->>EMR: //Select report entry//

EMR->Repo: Find Multimedia Report [RAD-143]
Repo-->EMR: Returned multimedia report
EMR->EMR: Display Multimedia Report [RAD-142]
note over EMR
Show report, including hyperlinked references to measurements and/or images.
end note

Clinician->>EMR: //Click on image references//
EMR->>Invoker: //View series//\n//(internal communication)//
Invoker->Display: Invoke Image Display [RAD-106]
note over Invoker
Launch series
end note

loop Retrieve images, presentation states, window levelling
Display->>Archive: //Retrieve series//
Display->Display: Display Images [RAD-145]

Clinician->>Display: //Interact with images and/or series//
end loop

@enduml

---

File: repos/IHE_SLASH_RAD.IMR/input/images-source/uc5-presenting-interactive-report-PACS.plantuml

@startuml

actor Radiologist as Radiologist

participant "Report Creator" as RCreator

box Grouped Actors
participant "Image Display" as Display
participant "Report Reader" as Reader
end box

participant "Report Repository" as Repo
participant "Image Manager/\nImage Archive" as Archive

Radiologist->>RCreator: //Begin Dictation//
Radiologist->>Display: //View current study with prior studies and//\n//associated multimedia reports//
Display->>Archive: //Retrieve current and prior studies//
Archive-->>Display: //Return studies//
Display->>Display: //Display studies//

group IMR Interactive Viewing of Multimedia Content in Report for Prior Studies
Display->>Reader: //Select report entry//
Reader->Repo: Find Multimedia Report\nfor prior studies [RAD-143]
Repo-->Reader: Returned multimedia report
Reader->Reader: Display Multimedia Report [RAD-142]

note over Reader
Present report, including hyperlinked references to measurements and/or images.
end note

Radiologist->>Reader: //Click on image references in Report//
Reader->>Display: //Launch images from prior study//\n//(internal communication)//
Display->>Display: //Display images//
note over Display
Since the Image Display is the more feature-rich radiology workstation,
the Image Display has more capability to display the referenced images
in the multimedia report than RAD-145.
end note

loop Retrieve images, presentation states, window levelling
alt Using WADO-RS Retrieve
Display->Archive: WADO-RS Retrieve [RAD-107]
else Using DIMSE Retrieve
Display->Archive: Retrieve Images [RAD-16], Retrieve Presentation States [RAD-17],\nRetrieve Key Image Notes [RAD-31], Retrieve Evidence Documents [RAD-45]
end

Radiologist->>Display: //Interact with images and/or series//\n//such as scrolling, re-measure//
end loop

end

Radiologist->>RCreator: //End Dictation//
RCreator->>RCreator: //Generate new multimedia report for current study//\n//following Use Case 1//


@enduml

---

File: repos/IHE_SLASH_RAD.IMR/input/pagecontent/CapabilityStatement-IHE.IMR.RenderedReportReader-intro.md

This is the **Requirements** CapabilityStatement for a [Report Reader](volume-1.html#152113-report-reader).

This actor uses [Display Multimedia Report \[RAD-142\]](RAD-142.html), and [Find Multimedia Report \[RAD-143\]](RAD-143.html) transactions.

---

File: repos/IHE_SLASH_RAD.IMR/input/pagecontent/CapabilityStatement-IHE.IMR.ReportCreator-intro.md

This is the **Requirements** CapabilityStatement for a [Report Creator](volume-1.html#152111-report-creator).

This actor uses [Store Multimedia Report \[RAD-141\]](RAD-141.html) transaction.

---

File: repos/IHE_SLASH_RAD.IMR/input/pagecontent/CapabilityStatement-IHE.IMR.ReportReader-intro.md

This is the **Requirements** CapabilityStatement for a [Report Reader](volume-1.html#152113-report-reader).

This actor uses [Display Multimedia Report \[RAD-142\]](RAD-142.html) and [Find Multimedia Report \[RAD-143\]](RAD-143.html) transactions.

---

File: repos/IHE_SLASH_RAD.IMR/input/pagecontent/CapabilityStatement-IHE.IMR.ReportRepository-intro.md

This is the **Requirements** CapabilityStatement for a [Report Repository](volume-1.html#152112-report-repository).

A Report Repository stores multimedia reports received from Report Creators and makes the reports available for other consumers.

A Report Repository supports query/retrieve of multimedia reports by Report Readers and Rendered Report Readers.

This actor uses [Store Multimedia Report \[RAD-141\]](RAD-141.html), [Find Multimedia Report \[RAD-143\]](RAD-143.html), and [Retrieve Rendered Multimedia Report \[RAD-144\]](RAD-144.html) transactions.

---

File: repos/IHE_SLASH_RAD.IMR/input/pagecontent/download.md

You can download:

- [this entire guide](full-ig.zip),
- the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
- the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on [IHE RAD.IMR Github Repo](https://github.com/IHE/RAD.IMR).

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}

---

File: repos/IHE_SLASH_RAD.IMR/input/pagecontent/index.md

The Interactive Multimedia Report (IMR) Profile specifies how a diagnostic report with interactive multimedia content can be reliably encoded, communicated and presented.

<div markdown="1" class="stu-note">
**IMPORTANT**: IMR is NOT yet recommended for production use.

Profiles released for Trial Implementation by IHE Radiology typically ARE expected to be stable enough for production use; however, this release of IMR is intended for experimental implementation and feedback.  

IMR uses the FHIR ImagingSelection resource which is at [maturity level 1](https://www.hl7.org/fhir/versions.html). Maturity 1 resources are likely to be updated in the future with backward incompatible changes.
 
IMR uses the FHIR DiagnosticReport resource to model specialty agnostic imaging reports with interactive multimedia content. Further modeling may expose issues which also result in backward incompatible changes.
 
Experimental implementation feedback may also result in other backward incompatible changes to the profile.

| [Significant Changes; Open and Closed Issues](issues.html) |
{: .grid}

</div>


### Organization of This Guide
This guide is organized into following sections:

1. Volume 1: Integration Profile 
   1. [Introduction](volume-1.html)
   1. [Actors and Transactions](volume-1.html#1521-imr-actors-transactions-and-content-modules)
   1. [Actor Options](volume-1.html#1522-imr-actor-options)
   1. [Actor Required Groupings](volume-1.html#1523-imr-required-actor-groupings)
   1. [Overview](volume-1.html#1524-interactive-multimedia-report-overview)
   1. [Security Considerations](volume-1.html#1525-imr-security-considerations)
   1. [Cross Profile Considerations](volume-1.html#1526-imr-cross-profile-considerations)

2. Volume 2: Transaction Detail
   1. [Store Multimedia Report [RAD-141]](RAD-141.html)
   1. [Display Multimedia Report [RAD-142]](RAD-142.html)
   1. [Find Multimedia Report [RAD-143]](RAD-143.html)
   1. [Retrieve Rendered Multimedia Report [RAD-144]](RAD-144.html)

3. Other
   1. [Changes to Other IHE Specifications](other.html)
   2. [Download and Analysis](download.html)
   3. [Test Plan](testplan.html)


Click on any of the links above, navigate the contents using the [Table of Contents](toc.html), or
if you are looking for a specific artifact, check out the [Artifacts Summary](artifacts.html).

---

File: repos/IHE_SLASH_RAD.IMR/input/pagecontent/issues.md

## Significant Changes

### Changes From Revision 1.0.0 to Revision 1.0.1

- Issue #24: Remove RAD-145 in IMR Appendix B
- Issue #23: Remove link to the BIR TI Supp
- Issue #22: Remove note about WIA being Trial Implementation
- Issue #20: Request from HL7 FHIR-i - tighten the context for the Associated Study Extension
- Issue #19: Reference to non-existing Note 2
- Issue #18: Fix typo in section reference to BIR
- Issue #17: Fix small typo in DiagnosticReport specification 

## Issues

### Submit An Issue

IHE welcomes [New Issues](https://github.com/IHE/RAD.IMR/issues/new/choose) from the GitHub community. 
For those without GitHub access, issues may be submitted to the [Radiology Public Comment form](https://www.ihe.net/Radiology_Public_Comments/).

As issues are submitted they will be managed at [IMR GitHub Issues](https://github.com/IHE/RAD.IMR/issues), where discussion and workarounds may be found. These issues, when critical, will be processed using the normal [IHE Change Proposal](https://wiki.ihe.net/index.php/Category:CPs) management and balloting. 
It is important to note that as soon as a Change Proposal is approved, it carries the same weight as a published Implementation Guide (i.e., it is testable at an [IHE Connectathon](https://www.ihe.net/participate/connectathon/) from the time it is approved, even if it will not be integrated until several months later).

### Open Issues

IHE invites comments on the following issues.

|#|Question|
|-|--------|
|1|Q: Is it reasonable to require the Report Creator to separate findings and impressions as two set of observations? <br><br> IMR defines some general report content organization based on FHIR DiagnosticReport and other dependent resources (See [Mapping of Attributes in Diagnostic Report](RAD-141.html#2414141221-mapping-of-attributes-in-a-diagnostic-report) for details). This includes common attributes like Finding and Impression and Indication. These sections are common in radiology reports, but they are common communicated inside a single text block in an ORU OBX segment instead of separated by each section. <br><br> A: Findings and impressions are recorded in DiagnositcReport.text instead of Observation. There is an experimental design of Observation resource. IHE Radiology is looking for feedback how this is used in different context.|
|2|Q: Should IMR constraint further details on how to encode findings and impressions using IMR Observation? <br><br> Currently regarding [Report Content Organization](volume-1.html#report-content-organization), IMR allows all findings to be put together in one IMR Observation as one large string, or separate each finding as a separate IMR Observation. Same is true for impressions. IMR only recommends but not mandates separation of each finding / impression as separate IMR Observation. Main rationale for the current design is to ease adoption. <br><br> A: Findings and impressions are recorded in DiagnositcReport.text instead of Observation. There is an experimental design of Observation resource. IHE Radiology is looking for feedback how this is used in different context.|
|3|Q: Is using &lt;span&gt; instead of &lt;imr-ref&gt; acceptable? <br><br> DiagnosticReport.text.div attribute is explicitly limited in FHIR to only allow a small subset of HTML4 elements. This means no HTML5 custom elements or data-* HTML5 custom attributes are allowed. The IG Publisher / sushi will fail validation.<br><br> Switching to &lt;span&gt; retains all existing design features, including support for different resource types, as well as not affect any consumer as they will just ignore the tag if there is no given style.
{: .grid}

### Closed Issues

These issues have been decided and documented in the publication.

|#| Question |
|-|----------|
|1|Q: How to reduce redundant information across referenced resources? <br><br> A: Each referenced resource should be self-contained as they can be standalone and used outside the context of a DiagnosticReport. They can be searched independently. So using references, the redundant information is basically referencing the same common references, not duplicated. <br><br> Resources may contain duplicate information because context does not flow across resources. Also resources may be used in many different contexts. An implementation is free to use a deduplicating algorithm behind the scenes if there is a concern about resource size.
|2|Q: IMR does not currently impose any constraint on Patient, Organization, Practitioner and PractitionerRole. Should there be any constraints or leave it to the deployment to impose any profiles on these resources? <br><br> A: Do not constraint in IMR. Let the deployment decides if any profiles on these resources should be imposed.|
|3|Q: What level of [structure](volume-1.html#152411-structure-in-radiology-reporting) should IMR impose on the diagnostic report? <br><br> Currently IMR focus on Report Content Structure. <br><br> A: IMR should continue to focus on Report Content Structure. It will not address Report Content Encoding Structure because this is highly varied for each specialty. Implementation can support encoding structure and consider using IHE [Management of Radiology Report Template (MRRT)](https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_MRRT.pdf) and/or RSNA [RadReport.org](https://radreport.org/), and use the additional optional attributes in FHIR DiagnosticReport and referenced resources to encode the result.|
|4|Q: Can other systems other than the Report Creator add other rendition of the reports and append to the DiagnosticReport.presentedForm? <br><br> A: This is out of scope of IMR. In IMR, there is no separate Report Renderer actor. From the IMR perspective, this *other system* is considered as part of Report Creator. <br><br> Furthermore another system may query, retrieve and provide an update to the server for the resource. It is the server responsibility to implement controls if updating by another system is a concern to its business process.|
|5|Q: Should the Report Creator supports RAD-144 Retrieve Rendered Diagnostic Report? <br><br> It is possible for the Report Creator to include a rendered report in DiagnosticReport.presentedForm using a URL link instead of embedded. This is the case if the Report Creator host the report on its own. In this case, should the Report Creator require to support RAD-144? <br><br> A: Currently the Report Repository is required to be able to retrieve the report from Report Creator and then embed the rendered report. The expectation is that the Report Repository is design to host these reports and support API to query/retrieve reports or distribute the reports. Such behavior is normally not expected from a Report Creator.|
|6|Q: Should IMR use ImageSelection to specify how multimedia content can be referenced in an Observation? <br><br> In FHIR R5, a new ImageSelection resource is available, which allows more sophisticated reference to a study, with the additional capability to include imageRegion. This is a good match for IMR, but currently in draft. <br><br> A: A note is added that it is the intention for IMR to support ImageSelection once it becomes available in R5 release. Instead of inventing something temporary and discarded later, currently inline image reference only support single reference. When ImageSelection becomes available, then set of image references as well as ROI will be supported.|
|7|Q: Should IMR permit the Origin Server to support FHIR resources in JSON only? <br><br> Currently the Origin Server is required to support both XML and JSON format and the User Agent can choose which format to use. <br><br> A: No. The Origin Server is required to support both XML and JSON, which is consistent with all other IHE profiles that use FHIR (e.g. ITI MHD).|
|8|Q: Should all the [Resource References](https://www.hl7.org/fhir/references.html#2.3.0) in DiagnosticReport always defined as standalone identifiable resources and then referenced in DiagnosticReport, instead of inline them as [Contained Resources](https://www.hl7.org/fhir/references.html#contained)? <br><br> A: Yes. Standalone identifiable resources are generally more useful. They can be access, searched, referenced in other resources. Contained resources are more limited. Currently there is no situation identified that standalone identifiable resources cannot be done and required to use contained resources instead.|
|9|Q; Should comparison study be supported in the base DiagnosticReport rather than as an IMR extension? <br><br> A: A FHIR JIRA ticket [FHIR-36858](https://jira.hl7.org/browse/FHIR-36858) is filed.
|10|Q; Should indication be supported in the base DiagnosticReport rather than as an IMR extension? <br><br> A: A FHIR JIRA ticket [FHIR-31552](https://jira.hl7.org/browse/FHIR-31552) is filed.
|11|Q: Will there be cases that a DiagnosticReport has no referenced ServiceRequest (or Order)? <br><br>For example, in ED cases, will report be created before an order exist? <br><br> A: IMRServiceRequest is optional in DiagnosticReport to handle cases where a service request may not exist.|
|12|Q: For query in RAD-143, should IMR require the Responder to support both HTTP GET and HTTP POST request? <br><br> A: Yes, both HTTP GET and HTTP POST are required for the Responder.|
|13|Q: Should there be any constraints on the DiagnosticReport.status? <br><br> The base [ValueSet](https://www.hl7.org/fhir/valueset-diagnostic-report-status.html) has a rich set of status that may or may not apply to radiology reporting. Currently IMR constrains the value set to be just `partial`, `preliminary`, `final`, `amended`, `corrected`, `appended` and `cancelled`. In other words, the status `registered`, `entered-in-error` and `unknown` are excluded. <br><br> A: IMRDiagnosticReport no longer imposes any constraint on the DiagnosticReport.status.|
|14|Q: Should IMR support *draft* status for the DiagnosticReport? <br><br> Are there cases that a DiagnosticReport resource is created to capture a *draft* report? This is common status for a trainee or attending to use in the reporting system and the report is not yet accessible to clinicians in EMR. If so, should *draft* be coded as `partial`, or a new status is required? <br><br> A: When a report is flagged as *draft*, the reports stay within the Report Creator and not send out to other systems yet. The report is sent out when the report is updated as preliminary or final, which has a corresponding report status. In the rare occasion that the Report Creator needs to send a draft report out, it can communicated to other system using the report status `partial`.|
|15|Q: To query report [RAD-143], should support of query by anatomic region / body part be required for the Responder? <br><br> A: No. Body Part query is not required.|
|16|Q: For DiagnosticReport.effective[x], should Period data type be also supported in addition to DateTime? <br><br> Period defines a period of time the report is valid. Is having an expiry time for a radiology diagnostic report a useful concept? <br><br>: No more constraint on DiagnosticReport.effective[x] in IMR. This attribute is optional for DiagnosticReport.|
|17|Q: Will creating an addendum interferes with FHIR events and subscription? <br><br> A FHIR resource such as DiagnosticReport can be used as an event. Subscribers can be setup to receive notification when event happened. In normal case, there may be subscription created to receive resource update notifications. However, for DiagnosticReport, a common practice is rather than updating the report, a new addendum will be created. This means a subscription expecting to receive notification when reports are updated may not get notification because the DiagnosticReport resources are not being updated. Will this immutability semantics cause any problem with FHIR events and workflow? <br><br> A: Not expected to be a concern. One can setup a subscription on reports for a patient rather than a subscription on the DiagnosticReport resource itself.|
|18|Q: Should the Report Creator be required to create a default rendered report, or leave it as an option? <br><br> The presentedForm is required to be fully ready-to-display by the Rendered Report Reader. This means all image references are required to be rendered as some rendered format, whether it is WADO-RS with Rendered Image, or other rendered format supported by the browser. This means the Report Creator is required to understand what image rendering method is support in the system and how to specify them for the given image references. <br><br> A: Decided to keep the requirement for the Report Creator to generate a HTML rendered report. Most reporting systems have this or a similar capability.|
|19|Q: For RAD-143, should IMR impose any requirements on the Responder to support FHIR [search result parameters](https://www.hl7.org/fhir/search.html) in FHIR query? <br><br> DiagnosticReport resources include many references to other resources such as Patient, IMR Observation, IMR ServiceRequest, etc. By default, a query result will not include those referenced resources and they are only returned as references in the DiagnosticReport in the response. The client will need to issue subsequent FHIR API calls to retrieve those resources. <br><br> The following search result parameters may be useful in IMR: <br><br> `_include`: the servers that support this parameter, if requested, will include all referenced resources in the same response. This simplifies the work for the client since there is a single request to get all information, but it will increase the payload of the response significantly. <br><br> `_elements`: the servers that support this parameter, if requested, will return only the attributes explicitly requested instead of the full resource. This minimizes the payload of the query response. This may be helpful for the client to populate a list, for example, which does not require the full content. <br><br> `_sort`: the servers that support this parameter, if requested, will return the query responses sorted in the attribute(s) specified. This may be useful if a query result is expected to include many responses. <br><br> `_count`: the servers that support this parameter, if requested, will return only the specified number of responses regardless of how many actual matching results are there. <br><br> A: Added requirements for Responder to support _include, _sort, _count, _summary, but not _elements. Responder may suport additional search results parameters.|
|20|Q: Should IMR defines any presentation of the report content explicitly (See [Report Presentation](volume-1.html#report-presentation) for details)? <br><br> Currently there is no explicit presentation requirement for the Report Reader. In other words, it is up to the Report Reader to present all the contents in DiagnosticReport and referenced resources in a reasonable way. Note that report presentation will be more appropriate using FHIR Composition which is currently in the process of being integrated with FHIR DiagnosticReport. <br><br> A: Decided that presentation of the report content is out of scope for IMR.|
|21|Q: To simplify the client when finding diagnostic reports, should the Responder support search by [Chained Parameters](https://www.hl7.org/fhir/search.html#chaining), [Reverse Chaining](https://www.hl7.org/fhir/search.html#has), and/or [Composite Search Parameters](https://www.hl7.org/fhir/search.html#combining)? <br><br> Query can be complicated. Sometimes searching for diagnostic reports based on referenced resource is necessary (e.g. search for DiagnosticReport for accession number 12345. In this case, accession number is located in the IMRServiceRequest referenced in DiagnosticReport.basedOn). <br><br> A: Decided to leave these more advanced query capability as optional for the Responder. Consulting with existing FHIR implementations and generally prefer multiple simple direct queries rather than one complex queries.|
|22|Q: Can Report Creator request to create organizational resources such as `Patient`, `Organization`, `Practitioner` or `PractitionerRole` (which are referenced by DiagnosticReport and included in the transaction bundle) when sending the Store Multimedia Report request? <br><br> Normally one would expect that these organizational resources already exist and therefore known to the Report Creator when the DiagnosticReport resource is created. This may be true in the general sense, but these resources may not exist yet in the Report Repository (e.g. the IMR Report Repository is new and has not yet backfilled with existing patient, organization and practitioner data). <br><br> It may be necessary to use `ifNoneExist` attribute in [Bundle.request](https://www.hl7.org/fhir/bundle.html) to specify conditional create. <br><br> A: Decided that organizational resources are expected to already exist and they should be referenced by the resources in the bundle, but not created as part of the bundle. Note that this may be revised later when IMR also addresses inter-enterprise use cases.|
{: .grid}


---

File: repos/IHE_SLASH_RAD.IMR/input/pagecontent/other.md

<div markdown="1" class="stu-note">
This section contains modifications to other IHE publications and profiles, and is not a part of the IMR profile. The content here will be incorporated into the target narrative at a future time, usually when IMR goes final text.
</div>

## IHE Technical Frameworks General Introduction Appendix A: Actors

|------------------------------------------------|
| Editor, add the following new or modified actors to the [IHE Technical Frameworks General Introduction Appendix A](https://profiles.ihe.net/GeneralIntro/ch-A.html): |
{:.grid .bg-info}


| Actor                            | Definition                                                                                                                                                                                                                                                                                |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rendered Report Reader | Presents pre-rendered reports (including multimedia content and hyperlinks) to a user. |
{:.grid .table-striped}


## IHE Technical Frameworks General Introduction Appendix B: Transactions

|------------------------------------------------|
| Editor, add the following new or modified transactions to the [IHE Technical Frameworks General Introduction Appendix B](https://profiles.ihe.net/GeneralIntro/ch-B.html): |
{:.grid .bg-info}


| Transaction                              | Definition                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Store Multimedia Report \[RAD-141\] | This transaction is used to store multimedia reports. |
| Display Multimedia Report \[RAD-142\] | This transaction is used to present the multimedia report content to someone, such as a radiologist or a clinician, in such a way that permits the user to interact with the embedded multimedia contents. |
| Find Multimedia Report \[RAD-143\] | This transaction is used to find `DiagnosticReport` Resources that satisfy a set of parameters. |
| Retrieve Rendered Multimedia Report \[RAD-144\] | This transaction is used by the Requester to retrieve a rendered multimedia report from the Responder. |
{:.grid .table-striped}

---

File: repos/IHE_SLASH_RAD.IMR/input/pagecontent/RAD-141.md

### 2:4.141.1 Scope


This transaction is used to store diagnostic reports that contain hyperlinked references to media such as images or measurements.

### 2:4.141.2 Actors Roles

The roles in this transaction are defined in the following table and may be played by the actors shown here:

**Table 2:4.141.2-1: Actor Roles**

| Role      | Description                                   | Actor(s)          |
|-----------|-----------------------------------------------|-------------------|
| Sender    | Send Reports | Report Creator    |
| Receiver  | Receives and handles reports | Report Repository <br> Report Reader <br> Rendered Report Reader |
{: .grid}

Transaction text specifies behavior for each role. The behavior of specific actors may also be specified when it goes beyond that of the general role.

### 2:4.141.3 Referenced Standards

**FHIR-R4**: [HL7 FHIR Release 4.0](http://www.hl7.org/FHIR/R4)

**FHIR ImagingSelection**: [ImagingSelection](https://build.fhir.org/imagingselection.html)

**DICOM WADO-RS**: [DICOM Studies Service Retrieve Transaction](https://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10)

**HTML 5**: [HTML Living Standard](https://html.spec.whatwg.org/multipage/)

**HTML Custom Element**: [HTML Custom Element](https://html.spec.whatwg.org/#custom-element-definition)

**PDF/A**: [ISO 19005-1:2005](https://www.iso.org/standard/38920.html)

### 2:4.141.4 Messages

<div>
{%include RAD-141-seq.svg%}
</div>

<div style="clear: left"/>

**Figure 2:4.141.4-1: Interaction Diagram**

#### 2:4.141.4.1 Store Multimedia Report Bundle Request Message
The Sender sends a multimedia report bundle to the Receiver. The Sender SHALL support sending such messages to more than one Receiver.

The Receiver SHALL support handling such messages from more than one Sender. 

##### 2:4.141.4.1.1 Trigger Events

The Sender determines that a multimedia report is ready to be sent. For example, a radiologist completed a dictation on a study and signed off the report. This trigger is associated with an intention that the Receiver stores the multimedia report contents and makes it available for subsequent query and retrieve requests.

##### 2:4.141.4.1.2 Message Semantics

This message is an HTTP POST request. The Sender is the User Agent. The Receiver is the Origin Server.

The Sender SHALL initiate a FHIR “transaction” using a “create” action by sending an HTTP POST request method composed of an IMR `Bundle` Resource containing the following:
- one `DiagnosticReport` Resource
- zero or more `ServiceRequest` Resources
- zero or more `ImagingStudy` Resources
- zero of more `ImagingSelection` Resources

> Note: The `DiagnosticReport` resource depends on other critical resources such as `Patient`, `Organization`, `Practitioner` or `PractitionerRole`. These resources are not part of the bundle because they are expected to already exist in the enterprise; hence, they are referenced by the resources in the bundle, rather than created by the Sender. See [Section 1:52.4.1.6 DiagnosticReport Referenced Resources](volume-1.html#152416-diagnosticreport-referenced-resources) for more details.
>
> Additional considerations are needed for these referenced resources in the inter-enterprise use case. See [Section 1:52.4.1.7 Inter-Enterprise Use Case](volume-1.html#152417-inter-enterprise-use-cases) for details.

The media type of the HTTP body SHALL be either `application/fhir+json` or `application/fhir+xml`.

See [http://hl7.org/fhir/http.html#transaction](http://hl7.org/fhir/http.html#transaction) for complete requirements of a FHIR transaction. See [http://hl7.org/fhir/bundle-transaction.html](http://hl7.org/fhir/bundle-transaction.html) for an example of a transaction bundle.

The Sender SHALL send the message to the base URL as defined in FHIR. See http://hl7.org/fhir/R4/http.html for the definition of “HTTP” access methods and “base”.

The following subsections contain additional constraints on the contents of the IMR Bundle.

###### 2:4.141.4.1.2.1 IMR Bundle Resource 

For complete information on constructing a FHIR Bundle Resource, see [http://hl7.org/fhir/bundle.html](http://hl7.org/fhir/bundle.html).

The Sender SHALL include in `Bundle.meta.profile` the value of `https://profiles.ihe.net/RAD/IMR/StructureDefinition/imr-store-multimedia-report-bundle`. The Sender MAY include other profiles in `Bundle.meta.profile`.

The [IMR Bundle](StructureDefinition-imr-store-multimedia-report-bundle.html): 
  - SHALL be a [Transaction Bundle](http://hl7.org/fhir/http.html#transaction)
  - SHALL create one [IMR DiagnosticReport](StructureDefinition-imr-diagnosticreport.html)
  - MAY create one or more [IMR ServiceRequest](StructureDefinition-imr-servicerequest.html)
  - MAY create one or more [IMR ImagingStudy](StructureDefinition-imr-imagingstudy.html)
  - MAY create one or more [ImagingSelection](https://build.fhir.org/imagingselection.html)

The [ImagingSelection](https://build.fhir.org/imagingselection.html) resource SHALL conform to the following additional IMR constraints:
  - `subject`, if present, SHALL be a reference to a `Patient` resource
  - `endpoint` SHALL have one or more [ImagingStudyEndpoint](StructureDefinition-imaging-study-endpoint.html)

> Note: FHIR `ImagingSelection` resource is in development and not defined in FHIR R4. Therefore the resource profile is specified above. Follow this [announcement](https://chat.fhir.org/#narrow/stream/179240-Announcements/topic/R5.20Roadmap) for the scheduled release date of FHIR R5. Once the FHIR R5 ballot is published (tentatively mid-October 2022), there will be a defined specification for `ImagingSelection` available with a [maturity level](https://www.hl7.org/fhir/versions.html) of 1.

The Sender MAY set `meta.profile` of each resource to be the corresponding IMR Profile. This enables a Receiver to validate the received resource against the IMR resource profile specification.

> Note: A Sender MAY choose not to set meta.profile to a specific profile, or MAY set it to multiple profiles.

The Sender SHALL create corresponding properly identifiable resources. In other words, the Sender SHALL NOT use `contained` resources (see [http://hl7.org/fhir/references.html#contained](http://hl7.org/fhir/references.html#contained)).

###### 2:4.141.4.1.2.2 IMR DiagnosticReport Resource 

The Sender SHALL construct the `IMR DiagnosticReport` Resource according to the [IMR DiagnosticReport StructureDefinition](StructureDefinition-imr-diagnosticreport.html).

[Section 2:4.141.4.1.2.2.1](#2414141221-mapping-of-attributes-in-a-diagnostic-report) contains mapping requirements.

[Section 2:4.141.4.1.2.2.3](#2414141223-rendered-report-in-imr-diagnosticreport-resource) contains requirements for including a rendered report in an `IMR DiagnosticReport` Resource.

A complete example of an `IMR DiagnosticReport` Resource is available in [IMR DiagnosticReport Example](DiagnosticReport-ex-DiagnosticReport.json.html).

###### 2:4.141.4.1.2.2.1 Mapping of Attributes in a Diagnostic Report

Table 2:4.141.4.1.2.2.1-1 specifies a set of attributes commonly included in radiology diagnostic reports, and how the Sender SHALL map these attributes to the `IMR DiagnosticReport` Resource and other referenced resources. Refer to the StructureDefinition for these resources on the [Artifacts](artifacts.html) page for details.

**Table 2:4.141.4.1.2.2.1-1: Mapping of Attributes in DiagnosticReport**

| Conceptual Attribute | FHIR Resource Mapping | Additional Constraint | Note |
|------------------|-----------------------|-----------------------|------|
| Performing Organization     | `DiagnosticReport.performer` | See [IMR DiagnosticReport](StructureDefinition-imr-diagnosticreport.html) for details | The organization which is responsible for the diagnostic report. <br><br> See Note 1 |
| Results Interpreter | `DiagnosticReport.resultsInterpreter` | Can be either `Practitioner` or `PractitionerRole` <br><br> See [IMR DiagnosticReport](StructureDefinition-imr-diagnosticreport.html) for details | The primary result interpreter(s) <br><br> See Note 1 |
| Patient Name     | `DiagnosticReport.subject(Patient).name` | See [IMR DiagnosticReport](StructureDefinition-imr-diagnosticreport.html) for details | See Note 1 |
| Patient ID       | `DiagnosticReport.subject(Patient).identifier` | See [IMR DiagnosticReport](StructureDefinition-imr-diagnosticreport.html) for details | See Note 1 |
| Accession Number | `DiagnosticReport.basedOn(IMRServiceRequest).identifier` | See [IMR DiagnosticReport](StructureDefinition-imr-diagnosticreport.html) and [IMR ServiceRequest](StructureDefinition-imr-servicerequest.html) for details | Identified by the identifier.type |
| Study Date       | `DiagnosticReport.imagingStudy(IMRImagingStudy).started` | See [IMR ImagingStudy](StructureDefinition-imr-imagingstudy.html) for details | |
| Study Type       | `DiagnosticReport.imagingStudy(IMRImagingStudy).procedureCode` | See [IMR ImagingStudy](StructureDefinition-imr-imagingstudy.html) for details | |
| Report Status    | `DiagnosticReport.status` | partial, preliminary, final, amended, corrected, appended, cancelled <br><br> See [IMR DiagnosticReport](StructureDefinition-imr-diagnosticreport.html) for details | A subset from what is defined in FHIR |
| Report Sign-off Time | `DiagnosticReport.issued` | See [IMR DiagnosticReport](StructureDefinition-imr-diagnosticreport.html) for details | |
| Examination      | `DiagnosticReport.text` | See [IMR DiagnosticReport](StructureDefinition-imr-diagnosticreport.html) for details | |
| Indication       | `DiagnosticReport.text` | See [IMR DiagnosticReport](StructureDefinition-imr-diagnosticreport.html) for details | |
| Technique        | `DiagnosticReport.text` | See [IMR DiagnosticReport](StructureDefinition-imr-diagnosticreport.html) for details | |
| Associated Study | `DiagnosticReport.extension[associatedStudy]` | Can be either an `ImagingStudy` or `DiagnosticReport` <br><br> See [IMR DiagnosticReport](StructureDefinition-imr-diagnosticreport.html) for details | |
| Report Content Section(s)   | `DiagnosticReport.text` | See [IMR DiagnosticReport](StructureDefinition-imr-diagnosticreport.html) for details | e.g., Findings and Impressions. |
{: .grid}

> Note 1: This transaction does not define a FHIR resource profile for the resource. An implementation MAY use other FHIR resource profiles applicable for their deployment.

In addition to the common set above, there are also a number of useful optional attributes that the Sender MAY included.

**Table 2:4.141.4.1.2.1-2: Useful Optional Attributes in Radiology Diagnostic Report**

| Report Attribute | FHIR Resource Mapping | Additional Constraint | Note |
|------------------|-----------------------|-----------------------|------|
| Referring Physician | `DiagnosticReport.imagingStudy(IMRImagingStudy).referrer` | |
| Reason For Study | `DiagnosticReport.imagingStudy(IMRImagingStudy).reasonCode` | |
| Study Description | `DiagnosticReport.imagingStudy(IMRImagingStudy).description` | |
| Body Part | `DiagnosticReport.result(IMRObservation).bodySite` | Note 1 |
| Structured content | `DiagnosticReport.result(IMRObservation)` | Note 2 |
{: .grid}

> Note 1: See [HIMSS-SIIM White Paper: The Importance of Body Part Labeling to Enable Enterprise Imaging](https://link.springer.com/article/10.1007/s10278-020-00415-0) for the importance of body part labeling.

> Note 2: The `DiagnosticReport.text` is required and is used to capture report content section(s) among other narrative content. Additionally, the Sender MAY include the experimental [IMR Observation](StructureDefinition-imr-observation.html) resource to encode atomic data items for the equivalent contents (such as findings and impressions) in various report sections.
>
> Coded observation for radiology reporting has not been defined. IHE Radiology is interested in your feedback if you use it. Please send your feedback to radiology@ihe.net.

###### 2:4.141.4.1.2.2.2 Observation Imaging Context in an IMR DiagnosticReport Resource

For narrative content, the Sender MAY directly embed one or more image references inline within the text.

The Sender SHALL specify each inline image reference using the `<span>` HTML element and the corresponding `</span>` end element. This `<span>` element SHALL have the attributes as defined in Table 2:4.141.4.1.2.3.1-1.

The display text is the text enclosed by the `<span>` element.

**Table 2:4.141.4.1.2.2.2-1: Attributes for the `<span>` element**

| Attribute | Type | Optionality | Description |
|-----------|------|-------------|-------------|
| `class`    | String | R | Type of multimedia content. The value SHALL have the **"imr-ref-"** prefix appended to the data type.<br><br>For example, for date type of `ImagingSelection`, the value SHALL be 'imr-ref-ImagingSelection'. (See Note 1) |
| `id` | String | RC | Reference to an `ImagingSelection` resource. Required if the class is imr-ref-ImagingSelection |
{: .grid}

> Note 1: Custom type MAY be used but they are out of scope of IMR.

Example 1: An image reference is specified with the finding, with a simple string **"image"** as the hyperlink display text
```
Trace fluid or debris is seen in the distal lumen of the stent <span class="imr-ref-ImagingSelection" id="ImagingSelection/1234">image</span>.
```

Example 2: An image reference is specified adjacent to the corresponding measurements, with a simple description of the series and instance number as the hyperlink display text
```
The imaged portion of a thyroid gland is unremarkable. Prominent or mildly enlarged mediastinal and bilateral hilar lymph node measure up to 1.2 x 0.8 cm in the right paratracheal station <span class="imr-ref-ImagingSelection" id="ImagingSelection/1234">(Series 2, Image 10)</span>.
```

Example 3: Multiple image references are specified adjacent to the measurements, with each measurement as the corresponding hyperlink display text
```
The imaged portion of a thyroid gland is unremarkable. Prominent or mildly enlarged mediastinal and bilateral hilar lymph nodes measure up to <span class="imr-ref-ImagingSelection" id="ImagingSelection/1234">1.2 x 0.8 cm in the right paratracheal station</span>, <span class="imr-ref-ImagingSelection" id="ImagingSelection/1567>2.3 x 1.4 cm in the subcarinal station</span>, and <span class="imr-ref-ImagingSelection" id="Imagingselection/1890>1.4 x 0.9 cm in the right hilar stations</span>. No significant axillary lymphadenopathy is detected.
```

For the examples above, each reference uses a span of class `imr-ref-ImagingSelection`. Each `ImagingSelection` resource MAY reference one or more imaging objects as well as DICOM SR, segmentation, or include region of interest directly. See [ImagingSelection examples](https://build.fhir.org/imagingselection-examples.html) for various examples of the `ImagingSelection` resource, including image references as well as non-image references.

###### 2:4.141.4.1.2.2.3 Rendered Report in IMR DiagnosticReport Resource

The Sender SHALL include in `DiagnosticReport.presentedForm` the report rendered in HTML format. The corresponding `DiagnosticReport.presentedForm.contentType` SHALL have the value "text/html".   

The Sender MAY include other renderings of the same report (e.g., PDF) in `DiagnosticReport.presentedForm` and SHALL set the `DiagnosticReport.presentedForm.contentType` with a value corresponding to the rendered report format.

The Sender SHALL encode the rendered report that is referenced by `DiagnosticReport.presentedForm` in one of the following ways:
- As a base64Binary in `DiagnosticReport.presentedForm.data`.
- As a base64Binary in a [Binary Resource](https://www.hl7.org/fhir/binary.html) and this `Binary` Resource is referenced in `DiagnosticReport.presentedForm.url`.
  - The `Binary` Resource SHALL be in the Bundle. See FHIR Resolving references in `Bundles` at [http://hl7.org/fhir/bundle.html#references](http://hl7.org/fhir/bundle.html#references). 
- Host the rendered report somewhere and provide the url in `DiagnosticReport.presentedForm.url`.

The Sender SHALL populate accurate values for hash and size for the rendered report content in `DiagnosticReport.presentedForm.hash` and `DiagnosticReport.presentedForm.size`: 
- Where the `presentedForm` is a `Binary` Resource instance, the `.hash` and `.size` SHALL represent the raw artifact prior to base64 encoding in the Binary.data element.  
- Where the `presentedForm` is hosted elsewhere, not as a `Binary` Resource, the `.hash` and the `.size` SHALL represent the rendered report content that would be retrieved using the mime-type specified in `DiagnosticReport.presentedForm.contentType`. 

###### 2:4.141.4.1.2.2.3.1 Image References in Rendered Report

This section contains requirements for Senders that include observation imaging context in the rendered report in HTML format in `DiagnosticReport.presentedForm` 

For inline observation imaging context references in `DiagnosticReport.text`, the Sender SHALL substitute each `<span class="imr-ref-*">`...`</span>` markup with an HTML anchor element. The href attribute SHALL correspond to the content specified in the referenced `ImagingSelection` resource:

- The service root for the URL SHALL derive from `ImagingSelection.endpoint`.
- The rest of the URL path SHALL derive from the remaining content of `ImagingSelection` according to the protocol specified in `ImagingSelection.endpoint.connectionType`.

The Sender SHALL construct the resulting URLs such that the contents returned to the Receiver upon invocation are ready to be presented, rather than contents that would require any processing by the Receiver. For example, using a WADO-RS URL with a rendered image or using an IID compliant URL to launch a viewer meet the requirements, whereas a plain WADO-RS URL to retrieve a DICOM object does NOT. In other words, the Sender SHALL NOT presume that the Receiver can download and render the linked content on its own.

###### 2:4.141.4.1.2.2.3.2 Rendered Report in PDF Format

A Sender that supports the **PDF Report Option**, if configured, SHALL also include a semantically equivalent diagnostic report in PDF format in the `DiagnosticReport.presentedForm` attribute. The corresponding `presentedForm.contentType` SHALL have the value "application/pdf".

The Sender SHALL include in the PDF report all text and linked contents as in the HTML report. The Sender MAY preserve the linked contents as hyperlinks, or substitute the linked contents with the actual rendered contents and embedded them in the PDF file.

###### 2:4.141.4.1.2.3 Patient, Organization, Practitioner, PractitionerRole Resources

The `Patient`, `Organization`, `Practitioner` or `PractitionerRole` Resources are required resources as defined by [IMR DiagnosticReport](StructureDefinition-imr-diagnosticreport.html). However, IMR does not specify any FHIR resource profiles on these resources. These resources are not radiology or imaging specific. Real world deployment MAY specify constraints on these resources.

##### 2:4.141.4.1.3 Expected Actions

The Receiver SHALL accept both media types `application/fhir+json` and `application/fhir+xml`.

On receipt of the request message, the Receiver SHALL validate the resources and respond with one of the HTTP codes defined in the response [Message Semantics](#24141412-message-semantics).

The Receiver SHALL process the transaction bundle atomically as specified in [http://hl7.org/fhir/http.html#transaction](http://hl7.org/fhir/http.html#transaction). 


> Note: Local policy might reject bundles containing resources such as `Patient`, `Organization`, `Practitioner`, etc. referenced that are unknown to the Receiver. Therefore, the actual behavior is at the discretion of the Receiver Actor policy.

The Receiver SHALL retrieve any Resources referenced by absolute URLs in the FHIR `Bundle` Resource.

The Receiver SHALL validate the bundle first against the FHIR specification. Guidance on what FHIR considers a valid Resource can be found at [http://hl7.org/fhir/validation.html](http://hl7.org/fhir/validation.html). 

Once the bundle is validated, the Receiver SHALL store the report and all associated resources.

The Receiver SHALL NOT send a success response until the multimedia report is completely processed and persisted as appropriate to the Receiver configuration.

If the Receiver encounters any errors or if any validation fails, the Receiver SHALL return an appropriate error.

###### 2:4.141.4.1.3.1 Additional Expected Actions for Report Repository

The Report Repository SHALL be able to retrieve the hosted rendered report in `DiagnosticReport.presentedForm.url`. The Report Repository SHALL be able to embed the retrieved report in the corresponding `DiagnosticReport.presentedForm.data`, or substitute the corresponding `DiagnosticReport.presentedForm.url` with a value where the report can be retrieved from the Report Repository.

> Note: This functionality is necessary in case the Sender stores the report to the Report Repository with a URL that is inaccessible to other subsequent consumers of the reports.

The Report Repository MAY extract the embedded rendered report in `DiagnosticReport.presentedForm.data`, store it and substitute the corresponding `DiagnosticReport.presentedForm` with a URL (i.e., `DiagnosticReport.presentedForm.url`) instead.

The Report Repository SHALL maintain the integrity of the report if the report access method is modified (i.e., from embedded to hosted, or vice versa).

> Note: Multiple formats of rendered reports MAY exist in `DiagnosticReport.presentedForm`.

#### 2:4.141.4.2 Store Multimedia Report Bundle Response Message

The Receiver sends a response message describing the message outcome to the Sender.

##### 2:4.141.4.2.1 Trigger Events

The Receiver receives a Store Multimedia Report Bundle Request message.

##### 2:4.141.4.2.2 Message Semantics

This message is an HTTP POST response. The Sender is the User Agent. The Receiver is the Origin Server.

The Receiver returns an HTTP Status code appropriate to the processing outcome, conforming to the transaction specification requirements in [http://hl7.org/fhir/http.html#trules](http://hl7.org/fhir/http.html#trules) to the Sender. This enables the Sender to know the outcome of processing the FHIR transaction, and the identities assigned to the resources by the Receiver.

The Receiver SHALL construct a Bundle, with `type` set to `transaction-response`, that contains one entry for each entry in the request, in the same order as received, with the `Bundle.entry.response.outcome` indicating the results of processing the entry warnings such as PartialFolderContentNotProcessed. The Receiver SHALL comply with FHIR [http://hl7.org/fhir/bundle.html#transaction-response](http://hl7.org/fhir/bundle.html#transaction-response) and [http://hl7.org/fhir/http.html#transaction-response](http://hl7.org/fhir/http.html#transaction-response).

To indicate success, the Receiver SHALL return an HTTP status `200`. The Receiver SHALL include in the HTTP response header the `location` element, and the `etag` element if the Receiver supports FHIR resource versioning.

The `Bundle.entry.response.status` SHALL be `201` to indicate the Resource has been created.

If the Receiver cannot find any referenced resources in the bundle, then the Receiver SHALL return an HTTP status '404 Not Found'.

If the Receiver cannot handle the method for each resource in the bundle, then the Receiver SHALL return an HTTP status '405 Method Not Allowed'.

If the Sender is not authorized to store the bundle, then the Receiver SHALL return an HTTP status either '401 Unauthorized' or '403 Forbidden'.

For other request related errors, the Receiver SHALL return an HTTP status '400 Bad Request'. For other Receiver processing related errors, the Receiver SHALL return an appropriate 5xx HTTP status.

An informative StructureDefinition is found at [IMR Store Multimedia Report Bundle Message](StructureDefinition-imr-store-multimedia-report-bundle.html).

##### 2:4.141.4.2.3 Expected Actions

If the Receiver returns an HTTP redirect response (HTTP status codes 301, 302, 303, or 307), the Sender SHALL follow the redirect, but MAY stop processing if it detects a loop. See [RFC7231 Section 6.4 Redirection 352](https://tools.ietf.org/html/rfc7231#section-6.4).

The Sender processes the results according to application-defined rules.	

#### 2:4.141.4.3 CapabilityStatement Resource

Receiver SHALL provide a `CapabilityStatement` Resource as described in [ITI TF-2: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating which resources associated with an IMR report have been implemented. 

### 2:4.141.5 Security Considerations

The Sender MAY use external URLs in presentedForm.url. In this case, the Receiver SHOULD consider validating the URL to ensure that it is a valid URL referencing a known legitimate host to avoid phishing attack.

#### 2:4.141.5.1 Security Audit Considerations

This transaction is associated with a 'Patient-record-event' ATNA Trigger Event on both the Sender and the Receiver. See [ITI TF-2: 3.20.4.1.1.1](https://profiles.ihe.net/ITI/TF/Volume2/ITI-20.html#3.20.4.1.1.1).


---

File: repos/IHE_SLASH_RAD.IMR/input/pagecontent/RAD-142.md

### 2:4.142.1 Scope

This transaction is used to present the report content to someone, such as a radiologist or a clinician, in such a way that permits the user to interact with the embedded multimedia contents.

This transaction is not a typical IHE transaction between two devices; the primary focus is on the required behavior of the display rather than messaging between two actors. This can be thought of as an “informational transaction” between a display device and a user.

The specification is about the baseline display behaviors required for multimedia reports. As with many IHE specifications, the display may have behaviors in addition to those required by this transaction.

### 2:4.142.2 Actors Roles

The roles in this transaction are defined in the following table and may be played by the actors shown here:

**Table: Actor Roles**

| Role      | Description                                   | Actor(s)          |
|-----------|-----------------------------------------------|-------------------|
| Display | Presents multimedia reports to a user, such as a radiologist    | Report Reader <br> Rendered Report Reader|
{: .grid}

Transaction text specifies behavior for each role. The behavior of specific actors may also be specified when it goes beyond that of the general role.

### 2:4.142.3 Referenced Standards

**FHIR-R4** [HL7 FHIR Release 4.0](http://www.hl7.org/FHIR/R4)

### 2:4.142.4 Messages

<div>
{%include RAD-142-seq.svg%}
</div>
<br clear="all">

**Figure 2:4.142.4-1: Interaction Diagram**

#### 2:4.142.4.1 Display Multimedia Report Message
The Display presents the multimedia report to the user.

##### 2:4.142.4.1.1 Trigger Events

A user or an automated function determines that one or more multimedia reports SHOULD be presented.

##### 2:4.142.4.1.2 Message Semantics

The report is encoded in a FHIR [IMR DiagnosticReport](StructureDefinition-imr-diagnosticreport.html) resource.

The Display SHALL present the `IMR DiagnosticReport` in one of two methods:

- Assemble from Content Elements
    - In this method, the Display examines the attributes available in the `DiagnosticReport`, assembles a report, and presents it
- Display Rendered Report
    - In this method, the Display either extracts the rendered report from `DiagnosticReport.presentedForm`.data or retrieves the rendered report from `DiagnosticReport.presentedForm.url`, and presents it

This transaction does not depend on how the `IMR DiagnosticReport` Resources were transferred to the Display. If the Display receives the reports by a profiled mechanism such as Find Multimedia Report [RAD-143], the messaging protocol is specified in that corresponding transaction. If reports are accessed by being grouped with another actor such as Report Repository, there is no messaging protocol involved.

##### 2:4.142.4.1.3 Expected Actions (i.e., Display Requirements)

The behaviors in this section are specified as baseline capabilities. The Display may have additional or alternative capabilities that may be invoked or configured.

The Display SHALL support the display requirements as defined in Table 2:4.142.4.1.3-1, according to the actor.

**Table 2:4.142.4.1.3-1 Actor Display Requirements**

| Actor | Display Requirements |
|-------|----------------------|
| Report Reader | [2:4.142.4.1.3.1 Display of Attributes from DiagnosticReport](#241424131-display-of-attributes-from-diagnosticreport) <br> [2:4.142.4.1.3.2 Display of Observation Image Context from Narrative Text](#241424132-display-of-observation-imaging-context-from-narrative-text) |
| Rendered Report Reader | [2:4.142.4.1.3.3 Display of Rendered Report from DiagnosticReport.presentedForm](#241424133-display-of-rendered-report-from-diagnosticreportpresentedform) |
{: .grid}

###### 2:4.142.4.1.3.1 Display of Attributes from DiagnosticReport

The Display SHALL be capable of presenting the attributes from the `IMR DiagnosticReport` Resource and referenced resources as defined in Store Multimedia Report [RAD-141] [Table 2:4.141.4.1.2.2.1-1](RAD-141.html#2414141221-mapping-of-attributes-in-a-diagnostic-report).

The Display MAY display any other attributes available from the `DiagnosticReport` Resource and referenced resources.

###### 2:4.142.4.1.3.2 Display of Observation Imaging Context from Narrative Text

For inline image references in narrative content from `DiagnosticReport.text`, the Display:

- SHALL substitute each `<span class="imr-ref-*">`...`</span>` element with a hyperlink

- SHALL use the text enclosed by the `<span class="imr-ref-*">` element as the display text for the hyperlink

- SHALL construct the URL for this hyperlink
    - The URL SHALL be derived from `ImagingSelection.endpoint.address` referenced in `<span class="imr-ref-*">`
    - The resulting URL SHALL be a valid URL according to the contentType

- MAY add additional parameters to the URL to invoke specific functions provided by the Image Manager / Image Archive or Image Display

> For example, the Display MAY retrieve a rendered JPEG or a thumbnail of the image instead of the DICOM object.

Refer to [RAD-141] [Section 2:4.141.4.1.2.2.2](RAD-141.html#2414141222-observation-imaging-context-in-an-imr-diagnosticreport-resource) for details about inline image reference encoding.

Example 1: An `ImagingSelection` that references one or more images [example](https://build.fhir.org/imagingselection-example-basic-image-selection.html)

The Display can translate the `ImagingSelection` into the following WADO-RS URL to retrieve rendered DICOM instance.

```
http://my.hospital.com/dicomweb/studies/1.2.840.113747.20080222.35738167368358372924306270412538783781/series/1.2.840.113747.20080222.35738167368358372924306270412538783781.1/instances/1.2.840.113747.20080222.35738167368358372924306270412538783781.1.0/rendered
```

When the user clicks on the link, the Report Reader retrieves the rendered DICOM instance and displays it.

Exmaple 2: An `ImagingSelection` that references a specific DICOM Presentation State object [example](https://build.fhir.org/imagingselection-example-presentation-state-selection.html)

The Display can translate the `ImagingSelection` into the following WADO-RS URL to retrieve rendered DICOM instances.

```
http://my.hospital.com/dicomweb/studies/1.2.840.113747.20080222.104120739293836151289003163903631439818/series/1.2.840.113747.20080222.104120739293836151289003163903631439818.200/instances/1.2.840.113747.20080222.104120739293836151289003163903631439818.200.0/rendered?presentationSeriesUID=1.2.840.113747.20080222.104120739293836151289003163903631439818.1&presentationUID=1.2.840.113747.20080222.104120739293836151289003163903631439818.1.0

```

When the user clicks on the link, the Report Reader retrieves the rendered DICOM instance with the presentation state data included and display it.

Example 3: An `ImagingSelection` that references a specific finding in a DICOM SR [example](https://build.fhir.org/imagingselection-example-dicom-sr-selection.html) such as a tumor diameter measurement

In DICOM SR encoding, each finding can have a unique Observation UID.

The Display can translate the `ImagingSelection` into the following IID URL:

```
http://my.hospital.com/IHEInvokeImageDisplay?requestType=SERIES&studyUID=1.2.840.113747.20080222.95946058738699434572916364657859950275&seriesUID=1.2.840.113747.20080222.95946058738699434572916364657859950275.3&imageUID=1.2.840.113747.20080222.95946058738699434572916364657859950275.3.0&viewerType=IHE_IMR&srSeriesUID=1.2.840.113747.20080222.95946058738699434572916364657859950275.1&srUID=1.2.840.113747.20080222.95946058738699434572916364657859950275.1.0&srObsUID=1.2.840.113747.20080222.95946058738699434572916364657859950275.10.1

```

> Note 1: Using IID URL to access DICOM SR or with direct region of interest is defined in CP-RAD-474 and subject to change.

> Note 2: If the Report Creator has not included one or more Observation UIDs in the DICOM SR for the relevant finding(s), then the behavior of the Display is undefined.

> Note 3: WADO-RS only supports retrieve rendered objects with presentation states. It does not yet support retrieve rendered objects with other observation imaging context such as DICOM SR. If the Report Creator has created a presentation state along with the DICOM SR that captures the presentation of the findings, then the Display can still use WADO-RS with the presentation state.

When the user clicks on the link, the Report Reader launches an Image Display in the context of the specified series and image. The Image Display also retrieves the specified DICOM SR and display the content with the images.

Example 4: An `ImagingSelection` that provides the imageRegion directly [example](https://build.fhir.org/imagingselection-example-2d-image-region-selection.html)

The Display can translate the `ImagingSelection` into the following IID URL.

```
http://my.hospital.com/IHEInvokeImageDisplay?requestType=SERIES&studyUID=1.2.840.113747.20080222.324856729726823100954657132726086516575&seriesUID=1.2.840.113747.20080222.324856729726823100954657132726086516575.1&imageUID=1.2.840.113747.20080222.324856729726823100954657132726086516575.1.0&viewerType=IHE_IMR&graphicData=0.25,0.25,0.75,0.25,0.75,0.75,0.25,0.75,0.25,0.25&graphicType=POLYLINE&coordinateType=2D

```

When the user clicks on the link, the Report Reader launches an Image Display in the context of the specified series and image. The Image Display also rendered the specified region of interest with the images.

This transaction does not prescribe any specific presentation when presenting hyperlinks. For example, the Displays MAY display the hyperlinks as text or as thumbnail images.

A Display that supports the **Advanced Image Viewing Option** SHALL be capable of adjusting the URL to reference the series or study level accordingly to its configuration.

> Note: The Display may choose to display the full study or only the referenced series, based on the current usage context or configuration.

###### 2:4.142.4.1.3.3 Display of Rendered Report from DiagnosticReport.presentedForm

The Display:

- SHALL be capable of presenting the rendered report from `DiagnosticReport.presentedForm.data` with contentType "text/html".

- SHALL be capable of retrieving and presenting the rendered report specified from `DiagnosticReport.presentedForm.url`. See Retrieve Rendered Multimedia Report [RAD-144] for details.

- SHALL be capable of presenting all hyperlinks from the rendered report.

> Note: The Display may not be able to access the content referenced by the hyperlinks due to network and content access permission.

Displays that support the **PDF Report Option** SHALL be capable of presenting the rendered report with contentType "application/pdf".

Displays MAY be capable of presenting rendered reports in other contentType.

### 2:4.142.5 Security Considerations

This transaction involves presenting diagnostic reports that typically constitute personal health
information (PHI) to human observers who are typically clinicians. Typical access controls and
audit trails in accordance with local policies would be appropriate.

#### 2:4.142.5.1 Security Audit Considerations

This transaction is associated with a 'Patient-record-event' ATNA Trigger Event on the Display. See [ITI TF-2: 3.20.4.1.1.1](https://profiles.ihe.net/ITI/TF/Volume2/ITI-20.html#3.20.4.1.1.1).

#### 2:4.142.5.2 Display Specific Security Considerations

Since this transaction involves the display of PHI, it may be reasonable for the actors to implement typical access controls for patient records, such as logins for users and role-based access policies. Since this transaction involves parsing datasets generated by other systems, it may be reasonable for the actors to implement basic digital hygiene, such as sanitizing datasets to avoid malicious executable scripts that might be executed by a browser-based viewer.


---

File: repos/IHE_SLASH_RAD.IMR/input/pagecontent/RAD-143.md

### 2:4.143.1 Scope

This transaction is used to find DiagnosticReport Resources that satisfy a set of parameters.

### 2:4.143.2 Actors Roles

The roles in this transaction are defined in the following table and may be played by the actors shown here:

**Table 2:4.143.2-1: Actor Roles**

| Role      | Description                                   | Actor(s)          |
|-----------|-----------------------------------------------|-------------------|
| Requester | Request DiagnosticReports that match a filter         | Report Reader <br> Rendered Report Reader |
| Responder | Return matching DiagnosticReports  | Report Repository |
{: .grid}

### 2:4.143.3 Referenced Standards

**FHIR-R4** [HL7 FHIR Release 4.0](http://www.hl7.org/FHIR/R4)

**FHIR-R4 Search** [HL7 FHIR Search](https://www.hl7.org/fhir/search.html)

### 2:3.143.4 Messages

<div>
{%include RAD-143-seq.svg%}
</div>

<div style="clear: left"/>

**Figure 2:4.143.4-1: Interaction Diagram**

#### 2:4.143.4.1 Find Multimedia DiagnosticReports Message

The Requester provides a matching filter in a request for matching DiagnosticReport that are available on the Responder. The Requester SHALL support sending such messages to more than one Responder.

The Responder SHALL support handling such messages from more than one Requester. 

##### 2:4.143.4.1.1 Trigger Events

The Requester needs to obtain DiagnosticReport Resources matching various metadata parameters.

##### 2:4.143.4.1.2 Message Semantics

This message is an HTTP GET or HTTP POST request. The Requester is the User Agent. The Responder is the Origin Server.

The Responder SHALL support both HTTP GET and HTTP POST request. The Requester MAY choose either form of request.

The Requester SHALL be capable of executing an HTTP search against the Responder DiagnosticReport URL. The search target follows the [FHIR HTTP](http://hl7.org/fhir/http.html) specification, addressing the DiagnosticReport Resource:
```
[base]/DiagnosticReport?<query>
```
The Requester SHALL construct the URL according to following constraints: 

- The `[base]` SHALL be the [Service Base URL](https://www.hl7.org/fhir/http.html#root), which is the address where all of the resources defined by this interface are found

- The `[base]` SHALL be configurable

- The `<query>` SHALL contain a series of encoded name-value pairs representing the filter for the query, as specified in Section [Query Search Parameters](#241434121-query-search-parameters)

- The `<query>` MAY contain additional search result parameters to request modified behavior of the Responder such as response format, pagination, summary, subset of elements, etc. See [FHIR Search](https://www.hl7.org/fhir/search.html#Summary) for details

> Note 1: The Responder MAY NOT support any of the additional search result parameters.
>
> Note 2: The Requester MAY directly retrieve DiagnosticReport resources using the [FHIR RESTful API Read](http://hl7.org/fhir/http.html#read) semantics if it knows about the corresponding resource ID.
>
> Note 3: The Requester MAY use the same search parameters specified below to specify other search criteria beyond what IMR DiagnosticReport is required. For example, DiagnosticReport.basedOn MAY also reference a CarePlan and the Requester MAY search for DiagnosticReports that referenced specific CarePlan.
>
> Note 4: This transaction focuses on finding DiagnosticReport resources. A Requester MAY search for other resources referenced by a DiagnosticReport resource. This is out of scope of IMR.

###### 2:4.143.4.1.2.1 Query Search Parameters

All query parameter values SHALL be encoded per RFC3986 “percent” encoding rules. Note that percent encoding restrict the character set to a subset of ASCII characters. Certain ASCII characters used for URL syntax are not permitted in the query parameter value and need to be escaped.

The Requester SHALL be capable of providing the parameters attributes and query types as indicated by Requester Optionality 'R' in Table 2:4.143.4.1.2.1-1 below.

The Responder SHALL support the parameters attributes and query types as indicated by Responder Optionality 'R' in Table 2:4.143.4.1.2.1-1 below.

**Table 2:4.143.4.1.2.1-1: Find Multimedia Report Query Search Parameters**

| Domain   | Commonly Known Attribute | Search Parameters <br> See Note 3 | Query Type <br> See Note 1, 2 and 4 | Requester Optionality | Responder Optionality |
|----------|-----------|-------------------|------------|-----------------------|-----------------------|
| Patient | Patient | `patient` | Reference(`Patient`) | R | R |
|         | Patient ID / MRN / Patient Identifier | `patient.identifier` | token | R | R |
|         | Patient Name | `patient.name.given` <br> `patient.name.family` | string | O | R |
| ServiceRequest | ServiceRequest | `basedOn` | Reference(`ServiceRequest`) | R | R |
|                | Accession Number | `basedOn.identifier` | token | R | R |
| Study | Study | `imagingStudy` | Reference(`ImagingStudy`) | O | R |
|       | Study Instance UID | `imagingStudy.identifier` | token | O | R |
|       | Modality | `imagingStudy.modality` | token | O | R |
|       | Study Date | `imagingStudy.started` | date | O | R |
| Report | Status | `status` | token | R | R |
| All | *Any other attributes* | *Other attributes in DiagnosticReport or referenced resources* | *varies* | O | O |
{: .grid}

> Note 1: See FHIR [http://hl7.org/fhir/search.html#reference](http://hl7.org/fhir/search.html#reference) for use of the reference search type.
>
> Note 2: See [ITI TF-2: Appendix Z.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for additional constraints on the use of the token search parameter type.
>
> Note 3: See [FHIR Chaining Parameters](http://hl7.org/fhir/search.html#chaining) for search methodology on referenced resources. Not all Responder supports chaining parameters. In this case, a Requester can send multiple queries, search for the referenced resources first, then search for DiagnosticReport with the resources found.
>
> Note 4: See FHIR [http://hl7.org/fhir/search.html#date](http://hl7.org/fhir/search.html#date) for use of the date search type.

###### 2:4.143.4.1.2.2 Example DiagnosticReport search

For example given:
* FHIR server root is `http://test.fhir.org/fhir`
* desired Patient reference id is `9876`
* status of desired report to be final
* with clinical code `1234-5` from LOINC

The examples below omit some http headers, such as the security headers, for simplicity.

###### 2:4.143.4.1.2.2.1 Example GET
```
GET test.fhir.net/fhir/DiagnosticReport?subject=Patient/9876&status=final&code=http://loinc.org|1234-5
```

###### 2:4.143.4.1.2.2.2 Example POST
```
POST test.fhir.net/fhir/DiagnosticReport/_search?subject=Patient/9876&status=final&code=http://loinc.org|1234-5
```

###### 2:4.143.4.1.2.2.3 Example POST body
```
POST test.fhir.net/fhir/DiagnosticReport/_search	  
Host test.fhir.net
Content-Type: application/x-www-form-urlencoded
Accept: application/fhir+json; fhirVersion=4.0										  

subject=Patient/9876&status=final&code=http://loinc.org|1234-5
```

##### 2:4.143.4.1.3 Expected Actions

The Responder SHALL process the query to discover the DiagnosticReport entries that match the search parameters given. 

The Responder SHALL support both GET and POST-based searches [http://hl7.org/fhir/http.html#search](http://hl7.org/fhir/http.html#search).

The Responder SHALL be capable of processing all query parameters according to Table 2:4.143.4.1.2.1-1.

The Responder MAY choose to support additional query parameters. Any additional query parameters supported SHALL be supported according to the core FHIR specification. See [http://hl7.org/fhir/search.html#errors](http://hl7.org/fhir/search.html#errors).

The Responder SHALL support the following [Search results parameters](http://hl7.org/fhir/search.html):
- _include
- _sort
- _count
- _summary

The Responder MAY choose to support additional search results parameters.


###### 2:4.143.4.1.3.1 Populating Expected Response Format

The FHIR standard provides encodings for responses as either XML or JSON. The Responder SHALL support both message encodings; the Requester SHALL support one and MAY support both.

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for details.

#### 2:4.143.4.2 Return DiagnosticReports Bundle Message

The Responder sends matching entries back to the Requester.

##### 2:4.143.4.2.1 Trigger Events

The Responder completed processing of the Find Multimedia DiagnosticReport Request message. 

##### 2:4.143.4.2.2 Message Semantics

The message is an HTTP GET or HTTP POST response. The Requester is the User Agent. The Responder is the Origin Server.

The Responder returns an HTTP Status code appropriate to the processing as well as a Bundle of the matching `DiagnosticReport` Resources.

The Responder MAY refuse or impose reasonable limits if a query is overly broad. The Responder MAY restrict results based on the authorization of the Requester, or based on other server implementation decisions.

Based on the query results, the Responder SHALL either return an error or success. Guidance on handling Access Denied related to use of 200, 403 and 404 can be found in [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations). 

When the Responder needs to report an error, it SHALL use HTTP error response codes and SHOULD include a FHIR `OperationOutcome` with more details on the failure. See FHIR [http://hl7.org/fhir/http.html](http://hl7.org/fhir/http.html) and [http://hl7.org/fhir/operationoutcome.html](http://hl7.org/fhir/operationoutcome.html).

If the Find Multimedia DiagnosticReport message is processed successfully, whether or not any `DiagnosticReport` Resources are found, the HTTP status code SHALL be 200. The Return DiagnosticReport Bundle message SHALL be a `Bundle` Resource containing zero or more `DiagnosticReport` Resources. If the Responder is sending warnings, the Bundle Resource SHALL also contain an `OperationOutcome` Resource that contains those warnings.

The Responder SHALL return the query results in the encoding (XML or JSON) specified by the Requester.

The response SHALL adhere to any FHIR `Bundle` constraints specified in [ITI TF-2: Appendix Z.1](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.1-resource-bundles).

The Responder SHALL return the full content of matching `DiagnosticReport` resources in the returned bundle. The Responder MAY support additional search result parameters (e.g., _summary, _elements, _include, etc.) and return the modified results accordingly.

> Note: The `DiagnosticReport` resources returned by the Responder may not conform to the IMR specification.

###### 2:4.143.4.2.2.1 Resource Bundling

Resource Bundling SHALL comply with the guidelines in [ITI TF-2: Appendix Z.1](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.1-resource-bundles). 

#### 2:3.144.4.3 Expected Actions

If the Responder returns an HTTP redirect response (HTTP status codes 301, 302, 303, or 307), the Requester SHALL follow the redirect, but MAY stop processing if it detects a loop. See RFC7231 Section 6.4 Redirection 352.

The Requester SHALL process the results according to application-defined rules.

The Requester MAY show the attributes in the query response to the user.

#### 2:4.143.4.4 CapabilityStatement Resource

Requesters and Responders implementing this transaction SHALL provide a `CapabilityStatement` Resource as described in [ITI TF-2: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 

- Requirements `CapabilityStatement` for the [Requester](CapabilityStatement-IHE.IMR.ReportReader.html).

### 2:4.143.5 Security Considerations

This transaction SHOULD NOT return information that the Requester is not authorized to access. Where authorization here is inclusive of system, app, and user according to local policy, patient consents, and security layering. However, the transaction MAY return `DiagnosticReport` resources that have Reference elements that the Requester may not have access to. This is to say that the authorization need only be to the content returned in the Bundle. There may be references (URLs) for which the Requester is not authorized to access the content. This is considered proper as the Requester would need to retrieve the content pointed to by those references, and at that time the proper authorization decision would be made on that context and content. In this way it is possible for a Requester to get `DiagnosticReport` resources that are pointing at data that the Requester is not authorized to retrieve. Thus, the URLs used must be carefully crafted so as to not expose sensitive data in the URL value.

Search using GET may include sensitive information in the search parameters. Therefore, secure communications and endpoint management are recommended.

#### 2:4.143.5.1 Security Audit Considerations

This transaction is associated with a 'Query Information' ATNA Trigger Event on both the Requester and the Responder.  See [ITI TF-2: 3.20.4.1.1.1](https://profiles.ihe.net/ITI/TF/Volume2/ITI-20.html#3.20.4.1.1.1).


---

File: repos/IHE_SLASH_RAD.IMR/input/pagecontent/RAD-144.md

### 2:4.144.1 Scope

This transaction is used by the Requester to retrieve a rendered report from the Responder.

### 2:4.144.2 Actors Roles

The roles in this transaction are defined in the following table and may be played by the actors shown here:

**Table 2:4.144.2-1: Actor Roles**

| Role      | Description                                   | Actor(s)          |
|-------------------|--------------------------|
| Requester | Request to retrieve rendered report         | Rendered Report Reader    |
| Responder | Return rendered report  | Report Repository |
{: .grid}

### 2:4.144.3 Referenced Standards

**RFC1738**: [Uniform Resource Locators (URL)](http://www.ietf.org/rfc/rfc1738.txt)

**RFC2616**: [HyperText Transfer Protocol HTTP/1.1](http://www.ietf.org/rfc/rfc2616.txt)

**RFC7540**: [Hypertext Transfer Protocol Version 2 (HTTP/2)](https://tools.ietf.org/html/rfc7540)

### 2:4.144.4 Messages

<div>
{%include RAD-144-seq.svg%}
</div>

<div style="clear: left"/>

**Figure 2:4.144.4-1: Interaction Diagram**

#### 2:4.144.4.1 Retrieve Rendered Report Message

The Requester retrieves a rendered report from the Responder.

The Responder SHALL support handling such messages from more than one Sender. 

##### 2:4.144.4.1.1 Trigger Events

The Requester wants to retrieve a rendered report identified in the response to an Find Multimedia Report [RAD-143] search request.

##### 2:4.144.4.1.2 Message Semantics

The message is an HTTP GET request. The Requester is the User Agent. The Responder is the Original Server.

The Requester SHALL select one or more rendered reports to retrieve based on the `DiagnosticReport.presentedForm.contentType` returned in the query response [RAD-143].

The Requester SHALL obtain the URL of the selected rendered report(s) in `DiagnosticReport.presentedForm`.url.

The Requester SHALL execute an HTTP GET request to the Responder for each URL of the selected rendered report(s).

The Requester MAY provide HTTP Accept header, according to the semantics of the HTTP protocols (see RFC2616, Section 14.1).  This enables the Requester to indicate preferred mime-types such that the Responder could provide the report requested in an encoding other than the encoding indicated in the `DiagnosticReport.presentedForm`.

The only MIME type assured to be returned is the MIME type indicated in the `DiagnosticReport.presentedForm.contentType`.

The HTTP If-Unmodified-Since header MAY be included in the GET request if the Requester caches the retrieved report locally.

##### 2:4.144.4.1.3 Expected Actions

The Responder SHALL provide the rendered report in the requested MIME type or reply with an HTTP status code indicating the error condition. The Responder is not required to transform the document.

#### 2:4.144.4.2 Return Rendered Report Message

The Responder sends the requested rendered report back to the Requester.

##### 2:4.144.4.2.1 Trigger Events

The Responder receives a Retrieve Rendered Report request from the Requester.

##### 2:4.144.4.2.2 Message Semantics

The message is an HTTP GET response. The Requester is the User Agent. The Responder is the Origin Server.

The Responder SHALL return an HTTP GET response as specified by RFC2616.

The Responder SHALL respond with an HTTP Status Code 200 when it successfully returns the requested rendered report to the Requester. The HTTP message-body SHALL be the content of the requested document.

The Responder MAY return HTTP redirect responses (responses with HTTP Status Codes 301, 302, 303 or 307) in response to a request. See RFC7231 Section 6.4 Redirection 352.

In case of an error, the Responder SHALL return an HTTP Error Response Code for different failure situations according to Table 2:4.144.4.2.2-1.

**Table 2:4.144.4.2.2-1: Failure Situations and corresponding HTTP Error Response Codes**

|Failure Situation	| HTTP Response |
|-----------|---------------|
|URI not known	| 404 Document Not Found |
|Document is not available	| 404 Document Not Found |
|Responder unable to format document in content types listed the 'Accept' field	| 406 Not Acceptable |
|HTTP request specified is otherwise not a legal value	| 403 Forbidden/Request Type Not Supported |
{: .grid}

The Responder MAY return other HTTP Status Codes. Guidance on handling Access Denied related to use of 200, 403 and 404 can be found in [ITI TF-2x: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations).

When the Responder needs to report an error, it SHALL use HTTP error response codes and SHOULD include a FHIR `OperationOutcome` with more details on the failure. See FHIR [http://hl7.org/fhir/http.html](http://hl7.org/fhir/http.html) and [http://hl7.org/fhir/operationoutcome.html](http://hl7.org/fhir/operationoutcome.html). 

##### 2:4.144.4.2.3 Expected Actions

If the Responder returns an HTTP redirect response (HTTP status codes 301, 302, 303, or 307), the Requester SHALL follow the redirect, but may stop processing if it detects a loop. See [RFC7231 Section 6.4 Redirection 352](https://tools.ietf.org/html/rfc7231#section-6.4).

The Requester SHALL process the results according to application-defined rules.

In the `DiagnosticReport.presentedForm`, the `.hash` and `.size` represent the hash and size of the corresponding rendered report. The Requester SHOULD verify the integrity of the received rendered report using the hash and size attributes.

#### 2:4.144.4.3 CapabilityStatement Resource

Requesters and Responders implementing this transaction SHALL provide a `CapabilityStatement` Resource as described in [ITI TF-2: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 

- Requirements CapabilityStatement for the [Requester](CapabilityStatement-IHE.IMR.ReportReader.html).
- Requirements CapabilityStatement for the [Responder](CapabilityStatement-IHE.IMR.ReportRepository.html).

### 2:4.144.5 Security Considerations

The rendered report is available via an external URLs in `presentedForm.url`. The Requester SHOULD consider validating the URL to ensure that it is a valid URL referencing a known legitimate host to avoid phishing attack.

#### 2:4.144.5.1 Security Audit Considerations

This transaction is associated with a 'Patient-record-event' ATNA Trigger Event on both the Requester and the Responder. See [ITI TF-2: 3.20.4.1.1.1](https://profiles.ihe.net/ITI/TF/Volume2/ITI-20.html#3.20.4.1.1.1).


---

File: repos/IHE_SLASH_RAD.IMR/input/pagecontent/testplan.md


**Note: Detailed test plans will be added during the Trial Implementation phase.

### Unit Test Procedure

Unit Tests in this context is where a SUT is tested against a simulator or validator.  A simulator is a implementation of an actor that is designed specifically to test the opposite pair actor. The simulator might be a reference implementation or may be a specially designed test-bench. Where a reference implementation is used the negative tests are harder to simulate. A validator is a implementation that can check conformance. A validator may be a simulator, but may also be a standalone tool used to validate only a message encoding. Some reference implementations may be able to validate to a StructureDefinition profile, but often these do not include sufficient constraints given the overall actor conformance criteria. 

### Integration Test Procedure

Integration Tests in this context is where two SUT of paired actors test against each other. In this case the subset of tests that can be tested is the intersection. Testing only this intersection is necessary but not sufficient. The testing must also include the capability of the client to exercise the test scenarios that this SUT can test, to determine that failure-modes are handled properly by both SUT.

### Cucumber

**TODO: Write specific Cucumber statements, might use external tooling?**


---

File: repos/IHE_SLASH_RAD.IMR/input/pagecontent/volume-1.md



The Interactive Multimedia Report (IMR) Profile specifies how a diagnostic report with interactive multimedia content can be reliably encoded, communicated and presented.

## 1:52.1 IMR Actors, Transactions, and Content Modules

This section defines the actors, transactions, and/or content modules in this profile. General
definitions of actors are given in the Technical Frameworks General Introduction [Appendix A](https://profiles.ihe.net/GeneralIntro/ch-A.html).
IHE Transactions can be found in the Technical Frameworks General Introduction [Appendix B](https://profiles.ihe.net/GeneralIntro/ch-B.html).
Both appendices are located at <https://profiles.ihe.net/GeneralIntro/>.

Figure 1:52.1-1 shows the actors directly involved in the IMR Profile and the relevant transactions
between them. If needed for context, other actors that may be indirectly involved due to their participation
in other related profiles are shown in dotted lines. Actors which have a required
grouping are shown in conjoined boxes (see [Section 1:52.3](#1523-imr-required-actor-groupings)).

<div>
    <img src="IHE_IMR_actor.drawio.png" width="80%">
</div>
<br clear="all">

**Figure 1:52.1-1: IMR Actor Diagram**

Table 1:52.1-1 lists the transactions for each actor directly involved in the IMR Profile. To claim compliance with this profile, an actor SHALL support all required transactions (labeled “R”) and may support the optional transactions (labeled “O”).

**Table 1:52.1-1: IMR Profile - Actors and Transactions**

<table class="grid">
  <thead>
    <tr>
      <th>Actors</th>
      <th>Transactions</th>
      <th>Initiator or Responder</th>
      <th>Optionality</th>
      <th>Reference</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#152111-report-creator">Report Creator</a></td>
      <td>Store Multimedia Report [RAD-141]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="RAD-141.html">RAD TF-2: 4.141</a></td>
    </tr>
    <tr>
      <td rowspan="3"><a href="#152112-report-repository">Report Repository</a></td>
      <td>Store Multimedia Report [RAD-141]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="RAD-141.html">RAD TF-2: 4.141</a></td>
    </tr>
    <tr>
      <td>Find Multimedia Report  [RAD-143]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="RAD-143.html">RAD TF-2: 4.143</a></td>
    </tr>
    <tr>
      <td>Retrieve Rendered Multimedia Report [RAD-144]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="RAD-144.html">RAD TF-2: 4.144</a></td>
    </tr>
    <tr>
      <td rowspan="5"><a href="#152113-report-reader">Report Reader</a></td>
      <td>Store Multimedia Report [RAD-141]</td>
      <td>Responder</td>
      <td>O (Note 1)</td>
      <td><a href="RAD-141.html">RAD TF-2: 4.141</a></td>
    </tr>
    <tr>
      <td>Display Multimedia Report [RAD-142]</td>
      <td>N/A (Note 2)</td>
      <td>R</td>
      <td><a href="RAD-142.html">RAD TF-2: 4.142</a></td>
    </tr>
    <tr>
      <td>Find Multimedia Report [RAD-143]</td>
      <td>Initiator</td>
      <td>O (Note 1)</td>
      <td><a href="RAD-143.html">RAD TF-2: 4.143</a></td>
    </tr>
    <tr>
      <td>WADO-RS Retrieve [RAD-107]</td>
      <td>Initiator</td>
      <td>O</td>
      <td>RAD TF-2: 4.107</td>
    </tr>
    <tr>
      <td>Display Analysis Result [RAD-136]</td>
      <td>N/A (Note 2)</td>
      <td>O</td>
      <td>RAD TF-2: 4.136 (Note 3)</td>
    </tr>    
    <tr>
      <td rowspan="3"><a href="#152114-rendered-report-reader">Rendered Report Reader</a></td>
      <td>Store Multimedia Report [RAD-141]</td>
      <td>Responder</td>
      <td>O (Note 1)</td>
      <td><a href="RAD-141.html">RAD TF-2: 4.141</a></td>
    </tr>
    <tr>
      <td>Find Multimedia Report [RAD-143]</td>
      <td>Initiator</td>
      <td>O (Note 1)</td>
      <td><a href="RAD-143.html">RAD TF-2: 4.143</a></td>
    </tr>
    <tr>
      <td>Retrieve Rendered Multimedia Report [RAD-144]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="RAD-144.html">RAD TF-2: 4.144</a></td>
    </tr>
    <tr>
      <td><a href="#152115-image-manager--image-archive">Image Manager / Image Archive</a></td>
      <td>WADO-RS Retrieve [RAD-107]</td>
      <td>Responder</td>
      <td>R</td>
      <td>RAD TF-2: 4.107</td>
    </tr>
  </tbody>
</table>


> Note 1: The actor SHALL support at least one of [RAD-141] or [RAD-143].

> Note 2: These transactions are not typical IHE transactions between two devices; the primary focus is on the required behavior of the display rather than messaging between two actors. Therefore the notion of Initiator or Responder is not applicable (N/A) for the actor on the transaction.

> Note 3: Display Analysis Results [RAD-136] is defined in the [AI Results (AIR)](https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_AIR.pdf) Supplement.

### 1:52.1.1 Actors Description and Actor Profile Requirements
Most requirements are documented in RAD TF-2 Transactions. This section documents any additional requirements on this profile's actors.

#### 1:52.1.1.1 Report Creator

A Report Creator encodes diagnostic reports with multimedia content using FHIR `DiagnosticReport` resources. Each resulting `DiagnosticReport` resource also includes at least one rendered report in HTML format in the same `DiagnosticReport` resource, either as base64 encoded binary, or by reference using a URL.

A Report Creator may support creating multiple rendered reports of the same multimedia report for different consumers (e.g., consumers that do not render the detailed multimedia contents on its own, or external consumers that do not have access to studies inside the enterprise firewall).

A Report Creator stores the `DiagnosticReport` resources to Report Repositories, Report Readers, or Rendered Report Readers. 

> Note: Storing reports directly to the Report Readers or Rendered Report Reader is intended to provide a similar integration path to using HL7 ORU. This enables a transition path from traditional HL7 ORU report integration to IMR with minimal new infrastructure.

> Note: How the Report Creator receives the multimedia content it includes in the report is out of scope for this version of IMR. To obtain multimedia content, a Report Creator may be grouped with an Evidence Creator, or a Report Creator may be integrated with an Image Display via proprietary APIs or standard context sharing mechanism such as FHIRcast.

#### 1:52.1.1.2 Report Repository

A Report Repository stores multimedia reports received from Report Creators and makes the reports available for other consumers through query/retrieve.

A Report Repository may modify how the embedded rendered report can be accessed, if necessary. For example, a Report Repository may adjust an internal URL to an externally accessible URL, or it may retrieve the rendered report referenced by a URL and embed it directly, base64 encoded, in the `DiagnosticReport` resource in a query response. How a Report Repository adjusts the accessibility of the rendered report is out of scope of IMR.

#### 1:52.1.1.3 Report Reader

A Report Reader displays reports, including [observation imaging context](#152415-observation-imaging-context-in-report) referenced in the report. Based on the referenced `ImagingSelection` resources defined in each observation imaging context, the Report Reader generates corresponding hyperlinks when the report is displayed to the user. When users click on the hyperlinks, the Report Reader presents the initial view of the referenced images to the user, such that the user can interact with the images (e.g., windowing, zooming, panning, toggle annotations, etc.).

##### 1:52.1.1.3.1 Display Requirements

When a user clicks on the hyperlinks, the Report Reader SHALL display the initial view of the corresponding observation imaging context to the user.

> Note: The observation imaging context is captured in an `ImagingSelection` resource. See [[RAD-141]](RAD-141.html#2414141222-observation-imaging-context-in-an-imr-diagnosticreport-resource)

A Report Reader SHALL support the display requirements for different object types in the observation imaging context as defined in the following sections. A Report Reader may support additional advanced behavior. This requirement may be satisfied by either implementing the required behaviors, or by grouping with another actor (e.g., Image Display Invoker in IID) that provides the required behaviors. The Report Reader may satisfy the baseline image viewing capabilities either by retrieving DICOM objects and rendering them, or by retrieving rendered DICOM objects using WADO-RS Retrieve [RAD-107], or a combination of both.

The Report Reader is only required to display objects referenced in the observation imaging context captured in an `ImagingSelection` resource. The Report Reader may display additional images if it supports the Advanced Image Viewing Option.

###### 1:52.1.1.3.1.1 Image References

The Report Reader SHALL be able to display any referenced DICOM image objects (single frame or multi-frame) for which it claims support in any IHE Content or Workflow profile or DICOM Conformance Statement.

The Report Reader SHALL support display capabilities defined in Table 1:52.1.1.3.1.1-1.

**Table 1:52.1.1.3.1.1-1: Image Viewing Capability Required in IMR**

| Capability | BIR Reference |
|------------|-------------|
| Layout, Tiling, Selection, Rotation and Flipping (Note 1) | RAD TF-1: Section 4.16.4.2.2.5.2 |
| Windowing and Rendering | RAD TF-1: Section 4.16.4.2.2.5.4 |
| Zooming and Panning | RAD TF-1: Section 4.16.4.2.2.5.6 |
| Laterality | RAD TF-1: Section 4.16.4.2.2.5.7 |
| Annotation | RAD TF-1: Section 4.16.4.2.2.5.8 |
| Cine | RAD TF-1: Section 4.16.4.2.2.5.9 |
{: .grid}

> Note 1: A Report Reader is permitted to only support a single viewport.

The Report Reader MAY provide additional tools for the user to interact with the images.

###### 1:52.1.1.3.1.2 Non-Image References

The Report Reader SHALL be capable of displaying Grayscale Softcopy Presentation State (GSPS) objects with their referenced images.

> Note: The Report Reader is permitted to ignore referenced images in the GSPS object that are outside the observation imaging context defined in the ImagingSelection resource unless Advanced Image Viewing Option is supported.

The Report Reader SHALL be capable of displaying the following non-image references specified in the `ImagingSelection.instance.imageRegion` or `ImagingSelection.imageRegion`.

#### 1:52.1.1.4 Rendered Report Reader

Rather than render the report content, as the Report Reader does, a Rendered Report Reader presents to the user the pre-rendered version of the report that is included in the `DiagnosticReport` resource. The 
pre-rendered report includes multimedia content and hyperlinks. When the user clicks on the hyperlinks, the Rendered Report Reader retrieves the linked contents and display them to the user.

A Rendered Report Reader SHALL retrieve and display the HTML report specified in `DiagnosticReport.presentedForm`.

> Note: There are no additional image viewing capabilities required for Rendered Report Readers. In other words, the image viewing capabilities presented by the Rendered Report Readers is defined by how the Report Creator created the rendered report. For example, for image references, one Report Creator MAY render them using WADO-RS links which will show a static rendered image, while another Report Creator MAY render them using IID Invoke Image Display links which will launch a viewer to show the referenced image with additional interactivity such as scrolling, zooming, etc. The Rendered Report Reader MAY provide additional image viewing capabilities.

#### 1:52.1.1.5 Image Manager / Image Archive

An Image Manager / Image Archive provides the images and related objects to the Report Readers.

An Image Manager / Image Archive is able to support DICOMweb WADO-RS Retrieve.

An Image Manager / Image Archive returns images in the requested rendered media type as defined in DICOM [PS3.18 Section 9.5](https://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_9.5) "Retrieve Rendered Instance Transaction".

## 1:52.2 IMR Actor Options

Options that may be selected for each actor in this implementation guide, are listed in Table 1:52.2-1 below. Dependencies between options, when applicable, are specified in notes.

**Table 1:52.2-1: IMR - Actors and Options**

<table class="grid">
  <thead>
    <tr>
      <th>Actor</th>
      <th>Option Name</th>
      <th>Reference</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Report Creator</td>
      <td>PDF Report</td>
      <td><a href="#15221-pdf-report-option">Section 1:52.2.1</a></td>
    </tr>
    <tr>
      <td>HL7 Text Report</td>
      <td><a href="#15222-hl7-text-report-option">Section 1:52.2.2</a></td>
    </tr>
    <tr>
      <td>Report Repository</td>
      <td>No options defined</td>
      <td>–</td>
    </tr>
    <tr>
      <td rowspan="2">Report Reader</td>
      <td>Advanced Image Viewing</td>
      <td><a href="#15223-advanced-image-viewing-option">Section 1:52.2.3</a></td>
    </tr>
    <tr>
      <td>Advanced Measurement Viewing</td>
      <td><a href="#15224-advanced-measurement-viewing-option">Section 1:52.2.4</a></td>
    </tr>
    <tr>
      <td>Rendered Report Reader</td>
      <td>PDF Report</td>
      <td><a href="#15221-pdf-report-option">Section 1:52.2.1</a></td>
    </tr>
    <tr>
      <td>Image Manager / Image Archive</td>
      <td>No options defined</td>
      <td>–</td>
    </tr>
  </tbody>
</table>

### 1:52.2.1 PDF Report Option

The PDF Report Option involves rendering and presenting multimedia reports in PDF format.

A Report Creator that supports this option SHALL be able to generate a rendered multimedia report in PDF format, preserving the image references as either hyperlinks or embedded static images in the rendered PDF file, and associate the rendered report in `DiagnosticReport.presentedForm` in the Store Multimedia Reports [RAD-141] transaction. See [Rendered Report In PDF](RAD-141.html#24141412232-rendered-report-in-pdf-format) for details.

> Note: How the Report Creator lays out the report into PDF is out of scope of IMR, provided that the rendered report preserves the readability of the report. For example, consider the case that there are multiple measurements in the same paragraph, each having a separate image reference(s). If the image references are rendered as inline static images, then the resulting paragraph may be broken up and become hard to read.

A Rendered Report Reader that supports this option:
- SHALL identify the PDF rendered report according to the contentType attribute
- SHALL retrieve and display the PDF rendered report specified in either `DiagnosticReport.presentedForm.data` or `DiagnosticReport.presentedForm.url`
- SHALL be able to launch the hyperlinks included in the PDF report.
- SHALL be able to select either the HTML or PDF rendered reports in `DiagnosticReport.presentedForm` to retrieve and display

### 1:52.2.2 HL7 Text Report Option

The HL7 Text Report Option involves rendering and presenting multimedia reports in text format. Such text would be suitable for inclusion in HL7 messages for consumption by non-IMR actors.

A Report Creator that supports this option SHALL be able to create a text-only rendering of the report, including the textual representation of all measurements, and MAY include unambiguous textual representation of image references.

> Note: How the Report Creator lays out the report into text-only format is out of scope of IMR, provided that text-only report preserves the readability of the report.

> Note: A textual representation of image references may look like (2,16) which means series 2 instance 16. Specific format for textual representation of image references is out of scope of IMR. As a result, interpretation of such information, if necessary, requires pre-arranged agreement between the Report Creator and non-IMR actors. The Report Creator MAY support different formats based on configuration.

A Report Creator SHALL be able to encode the text-only report in an HL7 ORU message and transmit the report to non-IMR Report Readers using MLLP. A Report Creator MAY use the Send Imaging Result [RAD-128] transaction in the IHE [Results Distribution](https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_RD.pdf) Profile.

### 1:52.2.3 Advanced Image Viewing Option

The Advanced Image Viewing Option involves the user being able to view images with advanced imaging tools.

A Report Reader that supports the Advanced Image Viewing Option:
- SHALL support scrolling display requirements as defined in RAD TF-1: 4.16.4.2.2.5.5 in the Basic Image Review (BIR) Profile.
- SHALL be able to construct WADO-RS URLs that confirm to the RetrieveSeries and RetrieveStudy semantics.

> Note: Multiplanar Reconstruction (MPR) is available in many PACS implementations; it is an advanced operation that is computationally intensive. For the interactive image viewing capability in an interactive multimedia report, MPR is not expected to be available. If viewing of the images from different planes is desirable, then the acquired data should be reconstructed to other planes and then be saved as separate set of images. These new set of reconstructed images can then be referenced in the `DiagnosticReport` resource.

### 1:52.2.4 Advanced Measurement Viewing Option

The Advanced Measurement Viewing Option involves the user being able to view measurements that are not presentation states.

A Report Reader that supports the Advanced Measurement Viewing Option SHALL be able to display measurement objects that are not presentation states.

A Report Reader that supports this option SHALL support the Display Analysis Result [RAD-136] transaction.

> Note: The Display Analysis Result [RAD-136] transaction is defined in the [AI Results](https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_AIR.pdf) Supplement.

## 1:52.3 IMR Required Actor Groupings

An actor from this profile (Column 1) SHALL implement all of the required transactions and/or
content modules in this profile ***in addition to all*** of the requirements for the grouped actor (Column 3).

In some cases, required groupings are defined as at least one of an enumerated set of possible actors; this is designated by merging column one into a single cell spanning multiple potential grouped actors. Notes are used to highlight this situation.

Section 1:52.5 describes some optional groupings that may be of interest for security
considerations and Section 1:52.6 describes some optional groupings in other related profiles.

**Table 1:52.3-1: IMR Required Actor Groupings**

| IMR Actor | Grouping Condition | Actor(s) to be grouped with | Reference |
|-----------|--------------------|-----------------------------|-----------|
| Report Creator | Required | ITI CT / Time Client | [ITI TF-1: 7.1](https://profiles.ihe.net/ITI/TF/Volume1/ch-7.html#7.1) |
| Report Repository | -- | None | -- |
| Report Reader | -- | None | -- |
| Rendered Report Reader | -- | None | -- |
| Image Manager / Image Archive | -- | None | -- |
{: .grid}

## 1:52.4 Interactive Multimedia Report Overview

### 1:52.4.1 Concepts

#### 1:52.4.1.1 Structure in Radiology Reporting

In reporting, structure can significantly improve usability, both for machine consumption and human consumption. Structure can refer to several aspects within a report as follows:

##### Report Content Organization 

This aspect of structure involves organizing the content of the report into labeled sections and subsections.

In a radiology report, although there are many variations of what information a report should contain depending on the procedure and specialty, there are general common sections in a report such as Indication, Methods, Findings, Impressions, etc.

The [Results Distribution](https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_RD.pdf) Profile specifies using multiple OBX segments for different sections. This Interactive Multimedia Report Profile does not explicitly define sections. A Report Creator MAY include sections in FHIR `DiagnosticReport.text` elements and `DiagnosticReport.presentedForm` pre-rendered reports.

##### Report Content Encoding

This aspect of structure involves representing certain content items, such as anatomy or findings, using coded values.

Also known as 'structured reporting' or 'synoptic reporting', encoding structure refers to the use of fully coded values in pre-coordinated form or post-coordinated form, in which the values are drawn from some value sets or standardized nomenclature / coded values such as LOINC or SNOMED-CT, in order to represent the full concept.

This has been successfully used in certain disciplines such as cancer screening, but it is less common in general radiology reporting practice.

##### Report Presentation

This aspect of structure involves guiding how the report content is presented to readers.

While Report Content Structure and Report Content Encoding Structure focus on imposing structure to data elements, they do not impose any requirements on how these data elements will be presented to the user. The FHIR `Composition` resource is designed for presentation structure using elements like *section*.

> As of FHIR R4, FHIR `DiagnosticReport` and `Composition` are two independent resources with no explicit relationship. Future versions of FHIR may integrate FHIR `DiagnosticReport` and `Composition` to enable better presentation structure.

In IMR, Report Presentation is controlled by the Report Creator for rendered reports, or is controlled by the Report Reader otherwise.

##### Message Structure

In the most basic form, the clinical report is conveyed between the sender and the receiver using some kind of message format. The message format defines a structure for the overall payload, including the metadata and the actual report content. For example, HL7 v2 ORU messages or FHIR `DiagnosticReport` resources define such a message structure that governs where different content should be placed, such as patient, order, report content, etc.

The [Results Distribution](https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_RD.pdf) Profile specifies using HL7 v2 ORU as the message structure while this Interactive Multimedia Report Profile specifies using FHIR `DiagnosticReport` resource.

This Interactive Multimedia Report Profile includes specific requirements related to the Message Structure and Report Content Structure aspects described above. The IMR Profile does not include specific requirements related to Report Content Encoding, although coded content is permitted and implementations are encouraged to explore this aspect of structured reporting.

#### 1:52.4.1.2 Source of Multimedia Content

There are two sources of multimedia content for radiology reporting:

- User-defined
    - These are the content provided by the user. This includes, but is not limited to, annotations, measurements, image references, etc.
- System-defined
    - These are the content provided by a system. For example, a parametric map generated by the modality or region of interest generated by an AI model.

These content should be available to the report authoring system so that it can incorporate the details automatically.

#### 1:52.4.1.3 Communication of Multimedia Content

A key element for an interactive multimedia report is the ability to include relevant images and associated clinical findings such as measurements, region of interest (ROI), etc. with interactive links to the source images.

Traditionally, these annotations, markups, presentation states, and key images could be captured as DICOM objects such as Grayscale Softcopy Presentation State (GSPS), Structured Report (SR), or Key Object Selection Document (KOS). However, these objects are designed to capture evidence for long-term reference instead of real-time communication or composition. Some PACS will create these evidence objects at the end of a session in order to capture all the data points created by the image-centric specialist in one object, rather than create multiple evidence objects resulting in one per data point. As a result, these evidence objects in DICOM are good resources for subsequent interactive access when viewing an IMR, but may not be good candidates as a means to communicate report contents from the PACS to the reporting system during a reporting session.

As the image-centric specialist captures measurements, regions of interest, and other data points, ideally the PACS can provide those data points to the reporting system in real-time without introducing any unnecessary interruptions, or adding transitory content to the permanent record. There is currently no widely adopted standard mechanism to support this real-time communication. Some reporting systems provide proprietary API that the PACS can leverage to achieve this.

> Note: IMR focuses on encoding multimedia content in a report by the Report Creator, and interactive display requirements by the Report Reader. Real time communication is out of scope of IMR and may be addressed in future profiles.

#### 1:52.4.1.4 Placement of Multimedia Content

A rudimentary approach is to place all references/multimedia content at the bottom of the report.

Although this can be useful, a more sophisticated placement of multimedia contents is the ability to insert them in context of the findings and impressions. Consider this sample finding statement

```
Prominent or mildly enlarged mediastinal and bilateral hilar lymph nodes measure up to 1.2 x 0.8 cm in the right paratracheal station
```

References to measurements and/or images can be added as hyperlinks in context as follow:

```
<span class="imr-ref-ImagingSelection" id="ImagingSelection/12345">Prominent or mildly enlarged mediastinal and bilateral hilar lymph nodes measure up to 1.2 x 0.8 cm in the right paratracheal station</span>
```

As a result, a user can access the matching multimedia content in context while reading the report.

This sophisticated placement of multimedia contents requires a more complex interaction between the PACS and the Reporting System because both systems need to know the current context and be able to mark their respective data accordingly. This also requires a low latency communication because any pause required by the radiologist to synchronize the two systems during a reporting session will cause significant distraction to the radiologist.

Report Creators in IMR are required to support placing image references in context of the findings and impressions.

#### 1:52.4.1.5 Observation Imaging Context in Report 

An observation imaging context in IMR can include image references and non-image references.

> Note: IMR focuses on specifying references to observation imaging context in a report. Other references to external resources (e.g., ACR Lung-RADS website, citations or report reader surveys) are out of scope of IMR.

##### Image References

An image reference is a reference to an image to which a finding or observation pertains, or which best presents the finding.

Each image reference in a report is in the context of a series. Furthermore, each image reference includes one of the following context detail patterns:

- a single frame in a single-frame object (e.g., object 10)
- a single frame in a multi-frame object (e.g., object 10 frame 3)
- a range of frames in a single frame object (e.g., object 3-5)
- a range of frames in a multi-frame object (e.g., object 10 frame 3-5)
- a discrete list of frames in a single frame object (e.g., object 10,14,17)
- a discrete list of frames in a multi-frame object (e.g., object 10 frame 10,14,17)
- all frames in a multi-frame object
- all objects in a series
- all frames in a dimension in a multi-frame object (as a discrete list of frames)
- one or more frames in a parametric map

> Note: The attribute `frame` is optional for single-frame object.

> Note: Different references in the same report are permitted to use different context detail patterns.

> Note: DICOM Concatenation is not addressed here since it only appears during transmission, not as a persistently stored object reviewed during reporting.

In most cases, the image references refer to the same study as the study being reported. The image references may also refer to a comparison study that is used during reporting.

##### Non-Image References

A non-image reference is a reference to an object that references other images and provides additional information that can be presented in association with referenced images. 

In addition to image references, an observation imaging context may also specify non-image references such as locations, regions, annotations, etc. These non-image references refers to data encoded using various DICOM objects such as Structured Report (SR), different types of Presentation States (PR) and Segmentation.

Each non-image reference in a report is in the context of an image reference. Furthermore, each non-image reference includes one of the following context detail patterns:

- a rough location (e.g., an arrow pointing to a point of interest)
- a specific location (e.g., a specific coordinates in an image))
- a specific region (e.g., a contour of lesion boundary)
- a bounding region (e.g., a box or circle around a feature of interest)
- a measurement (e.g., a line segment in an image and the length of the line)

> Note: See [AI Results](https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_AIR.pdf) Section 6.5.3.4, 6.5.3.5 and 6.5.3.6 for details regarding how locations, regions and parametric maps are captured as DICOM objects.

#### 1:52.4.1.6 DiagnosticReport Referenced Resources

Multimedia reports are encoded using a FHIR `DiagnosticReport` resource as the top level resource. The `DiagnosticReport` resource references other resources that provide additional report content, imaging procedure context, and organizational context. Some of these referenced resources are created and managed by other enterprise systems (e.g., the patient resource is managed by the EMR). Others are created together with the `DiagnosticReport`.

##### Imaging Procedure Context

Prior to reporting, the EMR creates an order, which provides the procedure context for the report.

During reporting, the radiologist views the study to be reported, and possibly one or more other studies for comparison.

A `DiagnosticReport` resource MAY reference a `ServiceRequest` resource to capture the procedure information. A `DiagnosticReport` resource also references one or more `ImagingStudy` resources to capture the reviewed studies.

Although the procedure and imaging study exist in other systems prior to reporting, the corresponding `ServiceRequest` or `ImagingStudy` resources MAY not. Therefore even though the Report Creator is not the source of truth for the order and imaging studies, the Report Creator MAY create these dependent resources along with `DiagnosticReport` during report creation.

##### Report Content

At reporting time, the Report Creator captures the findings and measurements reported by the radiologist as narrative text. These narrative text are stored in FHIR `DiagnosticReport.text`.

The narrative text MAY include `ImagingSelection` resources to capture the observation imaging context so that the user can view the corresponding images and measurements at a later time.

Since a `DiagnosticReport` resource is the top level resource used to capture a multimedia report, every time a multimedia report is created, a `DiagnosticReport` resource is created.

##### Organizational Context

In additional to the imaging procedure context and the report content, a report also captures organizational context such as the patient which is the subject of the report, which organization is responsible for the report, and who is responsible for the report content. Generally the EMR manages the patient records, the organization structure and the pool of practitioners available. 

A `DiagnosticReport` references organizational level resources such as `Patient`, `Organization`, `Practitioner` and `PractitionerRole`. Since these organization context exist prior to the report being created and are managed by systems other than the reporting system, it is a prerequisite that these organizational resources already exist prior to the creation of `DiagnosticReport` resource. As a result, a Report Creator will only reference these organizational resources during report creation.

#### 1:52.4.1.7 Inter-Enterprise Use Cases

Supporting inter-enterprise use cases will involve addressing additional issues such as external users access control, potentially resolving links, potentially including resources such as patient when they may not be known or exist in the receiving hospital, or may need to be reconciled on receipt.

To handle inter-enterprise use cases, the currently profile does not address these issues. Future updates may address them.

#### 1:52.4.1.8 Referenced FHIR Resource vs Contained FHIR Resource

A `DiagnosticReport` resource incorporates other resources. According to FHIR, those other resources can be incorporated as either referenced FHIR resources or contained FHIR resources. In IMR, when storing a `DiagnosticReport` resource, all incorporated resources are included as referenced. Contained resources are not permitted in IMR because they cannot be retrieved as independent resources. 

Contained resources are not preferred when resources have independent identity from the containing resource. This is because contained resources cannot be reused across multiple resources. If the same content is included multiple times, such duplication can lead to possible integrity problems.

A FHIR server that provides the FHIR [Search](http://hl7.org/fhir/search.html) capability returns query responses with references to other resources, such as `Patient`, `IMR ServiceRequest`, `IMR ImagingStudy`, etc. To access the content of referenced resources, the requester will have to retrieve them separately.

Optionally, a FHIR server MAY support the [_include](http://hl7.org/fhir/search.html#include) search result parameter. If the requester specifies this parameter in the search request, then the FHIR Server will include the specified referenced resources in the same response. The advantage is that the requester only needs to issue a single query request and the result will contain all the necessary data. The disadvantages are (1) the payload size may increase significantly, (2) the server will need to perform more work and may return the response slower, (3) it is an optional capability of the server so the requester cannot depend on it being available.

### 1:52.4.2 Use Cases

The IMR Profile encodes multimedia content in diagnostic reports such that later the user can interact with the linked multimedia content in the reports.

#### 1:52.4.2.1 Use Case 1: Pre-Rendered Report

##### 1:52.4.2.1.1 Pre-Rendered Report Use Case Description

The Report Creator encodes the diagnostic report with multimedia content when saving dictated report. This use case shows the multimedia report being stored in the Report Repository. Alternatively, the Report Creator could send the report directly to one or more Report Readers and/or Rendered Report Readers.

Later, a Clinician wants to review studies and associated diagnostic reports for a patient. She searches the EMR for the patient. The EMR returns a list of studies and associated diagnostic reports for the patient, from which she selects the report of interest.

##### 1:52.4.2.1.2 Pre-Rendered Report Process Flow

<div>
{%include uc1-presenting-interactive-report-presentedform.svg%}
</div>
<br clear="all">

**Figure 1:52.4.2.1.2-1: Pre-Rendered Report Process Flow in IMR Profile**

#### 1:52.4.2.2 Use Case 2: Locally Processed Report

##### 1:52.4.2.2.1 Locally Processed Report Use Case Description

This use case is similar to Use Case #1, but instead of presenting the pre-rendered report content included in the multimedia report, the Report Reader processes the multimedia report according to its own rendering configuration.

Later, the Clinician clicks on the interactive links included in the report. The EMR (Report Reader) fetches the images and other related observation imaging context such as measurements and present them to the user. 

Furthermore, the EMR presents additional interactive tools to the Clinician. For example, the Clinicians can scroll through the images within the series.

##### 1:52.4.2.2.2 Locally Processed Report Process Flow

Figure 1:52.4.2.2.2-1 shows how the Clinician can use the EMR with native IMR Report Reader support to interact with the multimedia content available in the report.

<div>
{%include uc2-presenting-interactive-report-standalone.svg%}
</div>
<br clear="all">

**Figure 1:52.4.2.2.2-1: Locally Processed Report Process Flow in IMR Profile**

#### 1:52.4.2.4 Use Case 3: External Image Viewer

##### 1:52.4.2.4.1 External Image Viewer Use Case Description

This use case is similar to Use Case #2, but instead of locally processing the report content, included in the multimedia report, the EMR locally processes the report content, and invokes an external viewer which handles presenting the images and associated multimedia reports as in Use Case #1.

##### 1:52.4.2.4.2 External Image Viewer Process Flow

Figure 1:52.4.2.4.2-1 shows the Clinician using the EMR to show the report content, which in turn invokes an external viewer to enable interactive display of images and other observation imaging context.

<div>
{%include uc4-presenting-interactive-report-EMR.svg%}
</div>
<br clear="all">

**Figure 1:52.4.2.4.2-1: External Image Viewer Process Flow in IMR Profile**

#### 1:52.4.2.5 Use Case 4: Comparison Study With Multimedia Report

##### 1:52.4.2.5.1 Comparison Study With Multimedia Report Use Case Description

A radiologist is in the process of dictating a study. Comparison studies are displayed along with the current study. The comparison studies have associated multimedia reports. The Report Reader integrated with an Image Display displays the multimedia reports to the radiologist with interactive links. When the Radiologist clicks on the links, the Report Reader triggers the viewport in the Image Display currently showing the comparison study to show the specific images in which the measurements are derived from, and the annotations and measurements overlay on top of the images.

##### 1:52.4.2.5.2 Comparison Study with Multimedia Report Process Flow

Figure 1:52.4.2.5.2-1 shows how the Radiologist can use the PACS workstation (Image Display) that is integrated with IMR Report Reader to interact with the multimedia content available in the report.

<div>
{%include uc5-presenting-interactive-report-PACS.svg%}
</div>
<br clear="all">

**Figure 1:52.4.2.5.2-1: Comparison Study with Multimedia Report Process Flow in IMR Profile**

## 1:52.5 IMR Security Considerations

Refer to RAD TF-1x: Appendix F “Security Environment Considerations”.

Protected Healthcare Information (PHI) is present in the DICOM instances being stored, retrieved, processed, and displayed, as well as in the API being invoked.

See ITI TF-2: [Appendix Z.8 “Mobile Security Considerations”](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations) for security considerations on FHIR based transactions.

General [Security and Privacy guidance](http://hl7.org/fhir/secpriv-module.html) is provided in the FHIR Specification.

### 1:52.5.1 Security Considerations for Actors

This profile strongly recommends all actors group with an ITI ATNA Secure Application or
Secure Node Actor using the Radiology Audit Trail Option.

The ATNA Profile requires actors to implement:
- [Record Audit Event](https://profiles.ihe.net/ITI/TF/Volume2/ITI-20.html) [ITI-20] transaction which would record when and where analysis results are distributed and displayed.
- [Authenticate Node](https://profiles.ihe.net/ITI/TF/Volume2/ITI-19.html) [ITI-19] transaction to further ensure the integrity of transactions via node authentication and communication encryption.

Furthermore, for the FHIR-based transactions, this profile strongly recommends the use of ITI [Internet User Authorization](https://profiles.ihe.net/ITI/TF/Volume1/ch-34.html) (IUA) Profile to ensure that communications are only allowed for authenticated and authorized users and/or systems.

### 1:52.5.2 Security Considerations for Multimedia Reports

Multimedia report instances as defined in this profile contain personal demographic information
and clinical information. It is appropriate for products implementing the Interactive Multimedia Report Profile to include appropriate PHI controls. Specifying such mechanisms and features is outside the scope of this profile.

The rendered report included in the `DiagnosticReport` resource may be referenced by a URL. The rendered report itself may also include hyperlinks for image references. It is recommended for any deployment to have network configurations that only allow trusted known clients (e.g., by IP address or subnet) to access the hyperlinks.

The Rendered Report Readers SHOULD verify if these URLs are legitimate and from a trusted source, minimizing the chance of phishing attack and executing malicious scripts embedded inside a report.

## 1:52.6 IMR Cross-Profile Considerations

Table 1:52.6-1 describes various actors in various other profiles that might be useful to group with
IMR Profile actors.

**Table 1:52.6-1: Interactive Multimedia Report - Optional Actor Groupings**

<table class="grid">
  <thead>
    <tr>
      <th>IMR Actor</th>
      <th>Might group with</th>
      <th>Potential Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="9">Report Creator</td>
      <td><a href="https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_RD.pdf">RD Report Creator</a></td>
      <td>To send reports using HL7 ORU if the HL7 Text Report Option is supported.</td>
    </tr>
    <tr>
      <td><a href="https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Vol1.pdf">SWF.b Evidence Creator</a></td>
      <td>To re-measure the observations in the multimedia report and generate new report (addendum).</td>
    </tr>
    <tr>
      <td><a href="https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_MRRT.pdf">MRRT Report Creator</a></td>
      <td>To use report templates to assist the radiologist in creating the diagnostic report, and capture the final report in the IMR multimedia report format.</td>
    </tr>
    <tr>
      <td><a href="https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_AIR.pdf">AIR Evidence Creator</a></td>
      <td>To include AI results in the diagnostic reports.</td>
    </tr>
    <tr>
      <td><a href="https://profiles.ihe.net/ITI/PIXm/index.html">PIXm Patient Identifier Cross-Reference Consumer</a></td>
      <td>To obtain the patient resource reference required in the diagnostic report.</td>
    </tr>
    <tr>
      <td><a href="https://profiles.ihe.net/ITI/PDQm/index.html">PDQm Patient Demographics Consumer</a></td>
      <td>To obtain the patient resource reference that is the subject in the diagnostic report.</td>
    </tr>
    <tr>
      <td><a href="https://profiles.ihe.net/ITI/MHD/index.html">MHD Document Source</a></td>
      <td>To store a report as a document using FHIR DocumentReference resource as an alternative method for different destinations or recipients.</td>
    </tr>    
    <tr>
      <td><a href="https://profiles.ihe.net/ITI/mCSD/index.html">mCSD Care Services Selective Consumer</a></td>
      <td>To obtain the organization, facilities and practitioner resource references that are required for the diagnostic report.</td>
    </tr>
    <tr>
      <td><a href="https://profiles.ihe.net/ITI/IUA/index.html">IUA Authorization Client</a></td>
      <td>To provide authorization claims when invoking a request with another actor.</td>
    </tr>
    <tr>
      <td rowspan="2">Report Repository</td>
      <td><a href="https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_RD.pdf">RD Report Manager</a></td>
      <td>To manage both text reports and multimedia reports. May also support converting reports from one format to another.</td>
    </tr>
    <tr>
      <td><a href="https://profiles.ihe.net/ITI/IUA/index.html">IUA Resource Server</a></td>
      <td>To enforce only authorized access to the resources stored in the repository.</td>
    </tr>
    <tr>
      <td rowspan="6">Report Reader</td>
      <td><a href="https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_RD.pdf">RD Report Consumer</a></td>
      <td>To be able to consume both text reports and multimedia reports.</td>
    </tr>
    <tr>
      <td><a href="https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Vol1.pdf">SWF.b Image Display</a></td>
      <td>To support the display requirements for observation imaging context in the multimedia report.</td>
    </tr>
    <tr>
      <td><a href="https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_IID.pdf">IID Image Display Invoker</a></td>
      <td>To delegate the display requirements for observation imaging context to an external Image Display. (See Note 1)</td>
    </tr>
    <tr>
      <td><a href="https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_BIR.pdf">BIR Image Display</a></td>
      <td>To support the display requirements for observation imaging context in the multimedia report.</td>
    </tr>
    <tr>
      <td><a href="https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_AIR.pdf">AIR Image Display</a></td>
      <td>To show analysis results that are captured in AIR results format.</td>
    </tr>
    <tr>
      <td><a href="https://profiles.ihe.net/ITI/IUA/index.html">IUA Authorization Client</a></td>
      <td>To provide authorization claims when invoking a request with another actor.</td>
    </tr>
    <tr>
      <td>Rendered Report Reader</td>
      <td><a href="https://profiles.ihe.net/ITI/IUA/index.html">IUA Authorization Client</a></td>
      <td>To provide authorization claims when invoking a request with another actor.</td>
    </tr>
  </tbody>
</table>

> Note 1: The Retrieve Display of Series Images functionality and IHE-IMR viewer type are available in CP-RAD-474.


---

