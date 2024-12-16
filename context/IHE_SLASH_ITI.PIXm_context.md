File: repos/IHE_SLASH_ITI.PIXm/input/fsh/aliases.fsh

Alias: $v3-ActReason = http://terminology.hl7.org/CodeSystem/v3-ActReason
Alias: DCM = http://dicom.nema.org/resources/ontology/DCM

---

File: repos/IHE_SLASH_ITI.PIXm/input/fsh/audit-104.fsh

Profile:        AuditPixmFeedSourceUpdate
Parent:         IHE.BasicAudit.PatientUpdate
Id:             IHE.PIXm.Feed.Update.Audit.Source
Title:          "Audit Event for Patient Identity Feed by the Source that Creates or Updates a Patient"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Patient Identity Feed Transaction happens, as recorded by the Patient Identity Source.
- This profile applies to the Patient Identity Source actor in 
  - [Add or Revise Patient](ITI-104.html#2310441-add-or-revise-patient)
  - [Resolve Duplicate Patient](ITI-104.html#2310442-resolve-duplicate-patient)
- Patient Identity Source records an Update as using a conditional create, so as to support update if exists else create.
- Build off of the IHE BasicAudit PatientUpdate event
- add the ITI-104 as a subtype
- client is Patient Identifier Source
- server is Patient Identifier Cross-reference Manager
- entity slices for patient are required
  - filled with the identifier parameter value from the PUT
  - will be an identifier, not a reference
- entity slice for the data
  - filled with the body of the PUT
  - will be the Patient resource presented
- entity slice for transaction is available
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti104 1..1
* subtype[iti104] = urn:ihe:event-type-code#ITI-104 "Patient Identity Feed FHIR"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Patient Identifier Source"
* agent[server] ^short = "Patient Identifier Cross-reference Manager"
* entity[patient] ^short = "identifier parameter - Patient"
* entity[patient].what.identifier 1..1
* entity[patient].what.reference 0..0
* entity[data] ^short = "transaction body"




Profile:        AuditPixmFeedManagerCreate
Parent:         IHE.BasicAudit.PatientCreate
Id:             IHE.PIXm.Feed.Create.Audit.Manager
Title:          "Audit Event for Patient Identity Feed FHIR by the Manager that Creates a Patient"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Patient Identity Feed FHIR Transaction happens, as recorded by the Patient Identifier Cross-reference Manager.
- This profile applies to the Patient Identity Cross-reference Manager actor in 
  - [Add or Revise Patient](ITI-104.html#2310441-add-or-revise-patient)
  - [Resolve Duplicate Patient](ITI-104.html#2310442-resolve-duplicate-patient)
- Patient Identity Cross-reference Manager knows the requested conditional create is a create, so records this as an create.
- Build off of the IHE BasicAudit PatientCreate event
  - A generic FHIR server might not distinguish an ITI-104 
- add the ITI-104 as a subtype
- server is Patient Identifier Source
- server is Patient Identifier Cross-reference Manager
- entity slices for patient are required
  - filled with the identifier parameter value from the PUT
  - will be an identifier, not a reference
- entity slice for the data
  - filled with the body of the PUT
  - will be the Patient resource presented
- entity slice for transaction is available
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti104 1..1
* subtype[iti104] = urn:ihe:event-type-code#ITI-104 "Patient Identity Feed FHIR"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Patient Identifier Source"
* agent[server] ^short = "Patient Identifier Cross-reference Manager"
* entity[patient] ^short = "identifier parameter - Patient"
* entity[patient].what.identifier 1..1
* entity[patient].what.reference 0..0
* entity[data] ^short = "transaction body"




Profile:        AuditPixmFeedManagerUpdate
Parent:         IHE.BasicAudit.PatientUpdate
Id:             IHE.PIXm.Feed.Update.Audit.Manager
Title:          "Audit Event for Patient Identity Feed FHIR by the Manager that Updates a Patient"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Patient Identity Feed FHIR Transaction happens, as recorded by the Patient Identifier Cross-reference Manager.
- This profile applies to the Patient Identity Cross-reference Manager actor in 
  - [Add or Revise Patient](ITI-104.html#2310441-add-or-revise-patient)
  - [Resolve Duplicate Patient](ITI-104.html#2310442-resolve-duplicate-patient)
- Patient Identity Cross-reference Manager knows the requested conditional create is an update, so records this as an update.
- Build off of the IHE BasicAudit PatientUpdate event
  - A generic FHIR server might not distinguish an ITI-104 
- add the ITI-104 as a subtype
- server is Patient Identifier Source
- server is Patient Identifier Cross-reference Manager
- entity slices for patient are required
  - filled with the identifier parameter value from the PUT
  - will be an identifier, not a reference
- entity slice for the data
  - filled with the body of the PUT
  - will be the Patient resource presented
- entity slice for transaction is available
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti104 1..1
* subtype[iti104] = urn:ihe:event-type-code#ITI-104 "Patient Identity Feed FHIR"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Patient Identifier Source"
* agent[server] ^short = "Patient Identifier Cross-reference Manager"
* entity[patient] ^short = "identifier parameter - Patient"
* entity[patient].what.identifier 1..1
* entity[patient].what.reference 0..0
* entity[data] ^short = "transaction body"




Profile:        AuditPixmFeedSourceDelete
Parent:         IHE.BasicAudit.PatientDelete
Id:             IHE.PIXm.Feed.Delete.Audit.Source
Title:          "Audit Event for Patient Identity Feed by the Source that Deletes a Patient"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Patient Identity Feed Transaction happens, as recorded by the Patient Identity Source. 
- This profile applies to the Patient Identity Source actor in 
  - [Remove Patient](ITI-104.html#2310443-remove-patient)
- Build off of the IHE BasicAudit PatientDelete event
  - this will result in two .entity elements with the same logical information
- add the ITI-104 as a subtype
- client is Patient Identifier Source
- server is Patient Identifier Cross-reference Manager
- entity slices for patient are required
  - filled with the identifier parameter value from the DELETE
  - will be an identifier, not a reference
- entity slice for the data
  - filled with the path of the DELETE
  - will be the Patient resource id presented
- entity slice for transaction is available
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti104 1..1
* subtype[iti104] = urn:ihe:event-type-code#ITI-104 "Patient Identity Feed FHIR"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Patient Identifier Source"
* agent[server] ^short = "Patient Identifier Cross-reference Manager"
* entity[patient] ^short = "identifier parameter - Patient"
* entity[patient].what.identifier 1..1
* entity[patient].what.reference 0..0
* entity[data] ^short = "Resource id from the DELETE path"
* entity[data].what.reference 1..1




Profile:        AuditPixmFeedManagerDelete
Parent:         IHE.BasicAudit.PatientDelete
Id:             IHE.PIXm.Feed.Delete.Audit.Manager
Title:          "Audit Event for Patient Identity Feed by the Manager that Deletes a Patient"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Patient Identity Feed Transaction happens, as recorded by the Patient Identity Cross-reference Manager. 
- This profile applies to the Patient Identity Cross-reference Manager actor in 
  - [Remove Patient](ITI-104.html#2310443-remove-patient)
- Build off of the IHE BasicAudit PatientDelete event
  - this will result in two .entity elements with the same logical information
- add the ITI-104 as a subtype
- client is Patient Identifier Source
- server is Patient Identifier Cross-reference Manager
- entity slices for patient are required
  - filled with the identifier parameter value from the DELETE
  - will be an identifier, not a reference
- entity slice for the data
  - filled with the path of the DELETE
  - will be the Patient resource id presented
- entity slice for transaction is available
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti104 1..1
* subtype[iti104] = urn:ihe:event-type-code#ITI-104 "Patient Identity Feed FHIR"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Patient Identifier Source"
* agent[server] ^short = "Patient Identifier Cross-reference Manager"
* entity[patient] ^short = "identifier parameter - Patient"
* entity[patient].what.identifier 1..1
* entity[patient].what.reference 0..0
* entity[data] ^short = "Resource id from the DELETE path"
* entity[data].what.reference 1..1



---

File: repos/IHE_SLASH_ITI.PIXm/input/fsh/audit-83.fsh

Profile:        AuditPixmQueryConsumer
Parent:         IHE.BasicAudit.PatientQuery
Id:             IHE.PIXm.Query.Audit.Consumer
Title:          "Audit Event for PIXm Query by the Consumer"
Description:    """
Defines constraints on the AuditEvent (AuditMessage) Resource to record when a PIXm Query Transaction happens, as recorded by the Patient Identifier Cross-reference Consumer.
- Build off of the IHE BasicAudit Patient Query event
- add the ITI-83 as a subtype
- client is Patient Identifier Cross-reference Consumer
- server is Patient Identifier Cross-reference Manager
- entity slice for query parameters
- eitity slice for a source patient identifier
- yes both entities likely say the same thing, but one is specifically the patient identifier, and the other is in query parameter format
- source is the client
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti83 1..1
* subtype[iti83] = urn:ihe:event-type-code#ITI-83 "Mobile Patient Identifier Cross-reference Query"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Patient Identifier Cross-reference Consumer"
* agent[server] ^short = "Patient Identifier Cross-reference Manager"
* entity[query] ^short = "Search Parameters"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what 1..1
* entity[patient].what only Reference(Patient)
* entity[patient].what.identifier 1..1
* entity[patient] ^short = "Patient"

Invariant: val-audit-source
Description: "The Audit Source is this agent too."
Expression: "$this.who = %resource.source.observer"
Severity: #error

Profile:        AuditPixmQueryManager
Parent:         IHE.BasicAudit.PatientQuery
Id:             IHE.PIXm.Query.Audit.Manager
Title:          "Audit Event for PIXm Query by the Manager"
Description:    """
Defines constraints on the AuditEvent (AuditMessage) Resource to record when a PIXm Query Transaction happens, as recorded by the Patient Identifier Cross-reference Manager.
- Build off of the IHE BasicAudit Patient Query event
- add the ITI-83 as a subtype
- client is Patient Identifier Cross-reference Consumer
- server is Patient Identifier Cross-reference Manager
- entity slice for query parameters
- eitity slice for a source patient identifier
- yes both entities likely say the same thing, but one is specifically the patient identifier, and the other is in query parameter format
- source is the server
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti83 1..1
* subtype[iti83] = urn:ihe:event-type-code#ITI-83 "Mobile Patient Identifier Cross-reference Query"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Patient Identifier Cross-reference Consumer"
* agent[server] ^short = "Patient Identifier Cross-reference Manager"
* entity[query] ^short = "Search Parameters"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what 1..1
* entity[patient].what only Reference(Patient)
* entity[patient].what.identifier 1..1
* entity[patient] ^short = "Patient"



---

File: repos/IHE_SLASH_ITI.PIXm/input/fsh/ex-audit-104.fsh


Instance: ex-auditPixmFeed-update-source
InstanceOf: IHE.PIXm.Feed.Update.Audit.Source
Title: "Audit Example of ITI-104 Update at Source"
Description: "Audit Event for Patient Identity Feed FHIR Transaction ITI-104 Update by the Patient Identity Source"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* action = #U
* subtype[anyUpdate] = http://hl7.org/fhir/restful-interaction#update "update" (exactly)
* subtype[iti104] = urn:ihe:event-type-code#ITI-104 "Patient Identity Feed FHIR"
//* severity = #Informational
* recorded = 2021-07-11T19:17:32Z
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
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what.identifier.system = "urn:oid:1.3.6.1.4.1.21367.13.20.1000"
* entity[patient].what.identifier.value = "IHERED-994"
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(Patient/ex-patient)

Instance: ex-auditPixmFeed-delete-source
InstanceOf: IHE.PIXm.Feed.Delete.Audit.Source
Title: "Audit Example of ITI-104 Delete at Source"
Description: "Audit Event for Patient Identity Feed FHIR Transaction ITI-104 Delete by the Patient Identity Source"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* action = #D
* subtype[anyDelete] = http://hl7.org/fhir/restful-interaction#delete "delete"
* subtype[iti104] = urn:ihe:event-type-code#ITI-104 "Patient Identity Feed FHIR"
//* severity = #Informational
* recorded = 2021-07-11T19:17:32Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "fancy mobile app"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[client].type = DCM#110150 "Application"
* agent[client].who = Reference(Device/ex-device)
* agent[client].requestor = false
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
// not clear how a server uses the IUA Oauth token here
* agent[server].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#custodian  "Custodian"
* agent[server].who.display = "http://server.example.com/fhir"
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what.identifier.system = "urn:oid:1.3.6.1.4.1.21367.13.20.1000"
* entity[patient].what.identifier.value = "IHERED-994"
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(Patient/ex-patient)



Instance: ex-auditPixmFeedDelete-source
InstanceOf: IHE.PIXm.Feed.Delete.Audit.Source
Title: "Audit Example of ITI-104 Delete at Source"
Description: "Audit Event for Patient Identity Feed FHIR Transaction ITI-104 Delete by the Patient Identity Source"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #D
* subtype[anyDelete] = http://hl7.org/fhir/restful-interaction#delete "delete"
* subtype[iti104] = urn:ihe:event-type-code#ITI-104 "Patient Identity Feed FHIR"
//* severity = #Informational
* recorded = 2021-07-11T19:17:32Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "fancy mobile app"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[client].type = DCM#110150 "Application"
* agent[client].who = Reference(Device/ex-device)
* agent[client].requestor = false
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
// not clear how a server uses the IUA Oauth token here
* agent[server].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#custodian  "Custodian"
* agent[server].who.display = "http://server.example.com/fhir"
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what.identifier.system = "urn:oid:1.3.6.1.4.1.21367.13.20.1000"
* entity[patient].what.identifier.value = "IHERED-994"
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(Patient/ex-patient)












Instance: ex-auditPixmFeed-create-manager
InstanceOf: IHE.PIXm.Feed.Create.Audit.Manager
Title: "Audit Example of ITI-104 Create at Manager"
Description: "Audit Event for Patient Identity Feed FHIR Transaction ITI-104 by the Patient Identifier Cross-reference Manager. The Feed resulted in a Create of a Patient given the feed content, as the given parameter did not previously exist."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #C
* subtype[anyCreate] = http://hl7.org/fhir/restful-interaction#create "create"
* subtype[iti104] = urn:ihe:event-type-code#ITI-104 "Patient Identity Feed FHIR"
//* severity = #Informational
* recorded = 2021-07-11T19:17:32Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "HIE PIXm api example"
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
* entity[patient].what.identifier.system = "urn:oid:1.3.6.1.4.1.21367.13.20.1000"
* entity[patient].what.identifier.value = "IHERED-994"
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(Patient/ex-patient)


Instance: ex-auditPixmFeed-update-manager
InstanceOf: IHE.PIXm.Feed.Update.Audit.Manager
Title: "Audit Example of ITI-104 Update at Manager"
Description: "Audit Event for Patient Identity Feed FHIR Transaction ITI-104 Update by the Patient Identifier Cross-reference Manager"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* action = #U
* subtype[anyUpdate] = http://hl7.org/fhir/restful-interaction#update "update" (exactly)
* subtype[iti104] = urn:ihe:event-type-code#ITI-104 "Patient Identity Feed FHIR"
//* severity = #Informational
* recorded = 2021-07-11T19:17:32Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "HIE PIXm api example"
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
* entity[patient].what.identifier.system = "urn:oid:1.3.6.1.4.1.21367.13.20.1000"
* entity[patient].what.identifier.value = "IHERED-994"
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(Patient/ex-patient)

Instance: ex-auditPixmFeed-delete-manager
InstanceOf: IHE.PIXm.Feed.Delete.Audit.Manager
Title: "Audit Example of ITI-104 Delete at Manager"
Description: "Audit Event for Patient Identity Feed FHIR Transaction ITI-104 Delete by the Patient Identifier Cross-reference Manager"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* action = #D
* subtype[anyDelete] = http://hl7.org/fhir/restful-interaction#delete "delete"
* subtype[iti104] = urn:ihe:event-type-code#ITI-104 "Patient Identity Feed FHIR"
//* severity = #Informational
* recorded = 2021-07-11T19:17:32Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "HIE PIXm api example"
* source.observer.display = "http://server.example.com/fhir"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110150 "Application"
* agent[client].who = Reference(Device/ex-device)
* agent[client].requestor = false
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
// not clear how a server uses the IUA Oauth token here
* agent[server].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#custodian  "Custodian"
* agent[server].who.display = "http://server.example.com/fhir"
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what.identifier.system = "urn:oid:1.3.6.1.4.1.21367.13.20.1000"
* entity[patient].what.identifier.value = "IHERED-994"
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(Patient/ex-patient)


Instance: ex-auditPixmFeedDelete-manager
InstanceOf: IHE.PIXm.Feed.Delete.Audit.Manager
Title: "Audit Example of ITI-104 Delete at Manager"
Description: "Audit Event for Patient Identity Feed FHIR Transaction ITI-104 Delete by the Patient Identifier Cross-reference Manager."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #D
* subtype[anyDelete] = http://hl7.org/fhir/restful-interaction#delete "delete"
* subtype[iti104] = urn:ihe:event-type-code#ITI-104 "Patient Identity Feed FHIR"
//* severity = #Informational
* recorded = 2021-07-11T19:17:32Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "HIE PIXm api example"
* source.observer.display = "http://server.example.com/fhir"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110150 "Application"
* agent[client].who = Reference(Device/ex-device)
* agent[client].requestor = false
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
// not clear how a server uses the IUA Oauth token here
* agent[server].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#custodian  "Custodian"
* agent[server].who.display = "http://server.example.com/fhir"
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what.identifier.system = "urn:oid:1.3.6.1.4.1.21367.13.20.1000"
* entity[patient].what.identifier.value = "IHERED-994"
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(Patient/ex-patient)


---

File: repos/IHE_SLASH_ITI.PIXm/input/fsh/ex-audit-83.fsh

Instance: ex-auditPixmQuery-consumer
InstanceOf: IHE.PIXm.Query.Audit.Consumer
Title: "Audit Example of ITI-83 at Consumer"
Description: "Audit Event for PIXm Query Transaction ITI-83 by the Patient Identifier Cross-reference Consumer"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #E
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
* subtype[iti83] = urn:ihe:event-type-code#ITI-83 "Mobile Patient Identifier Cross-reference Query"
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
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what.identifier.system = "urn:oid:1.3.6.1.4.1.21367.13.20.1000"
* entity[patient].what.identifier.value = "IHERED-994"
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].query = "aHR0cHM6Ly9zZXJ2ZXIuZXhhbXBsZS5jb20vZmhpci9QYXRpZW50LyRpaGUtcGl4P3NvdXJjZUlkZW50aWZpZXI9dXJuOm9pZDoxLjMuNi4xLjQuMS4yMTM2Ny4xMy4yMC4xMDAwfElIRVJFRC05OTQmdGFyZ2V0U3lzdGVtPXVybjpvaWQ6MS4zLjYuMS40LjEuMjEzNjcuMTMuMjAuMzAwMA=="
* entity[query].description = "https://server.example.com/fhir/Patient/$ihe-pix?sourceIdentifier=urn:oid:1.3.6.1.4.1.21367.13.20.1000|IHERED-994&targetSystem=urn:oid:1.3.6.1.4.1.21367.13.20.3000"

Instance: ex-auditPixmQuery-manager
InstanceOf: IHE.PIXm.Query.Audit.Manager
Title: "Audit Example of ITI-83 at Manager"
Description: "Audit Event for PIXm Query Transaction ITI-83 by the Patient Identifier Cross-reference Manager"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #E
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
* subtype[iti83] = urn:ihe:event-type-code#ITI-83 "Mobile Patient Identifier Cross-reference Query"
//* severity = #Informational
* recorded = 2021-07-13T19:17:32Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "HIE PIXm api example"
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
* entity[patient].what.identifier.system = "urn:oid:1.3.6.1.4.1.21367.13.20.1000"
* entity[patient].what.identifier.value = "IHERED-994"
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].query = "aHR0cHM6Ly9zZXJ2ZXIuZXhhbXBsZS5jb20vZmhpci9QYXRpZW50LyRpaGUtcGl4P3NvdXJjZUlkZW50aWZpZXI9dXJuOm9pZDoxLjMuNi4xLjQuMS4yMTM2Ny4xMy4yMC4xMDAwfElIRVJFRC05OTQmdGFyZ2V0U3lzdGVtPXVybjpvaWQ6MS4zLjYuMS40LjEuMjEzNjcuMTMuMjAuMzAwMA=="
* entity[query].description = "https://server.example.com/fhir/Patient/$ihe-pix?sourceIdentifier=urn:oid:1.3.6.1.4.1.21367.13.20.1000|IHERED-994&targetSystem=urn:oid:1.3.6.1.4.1.21367.13.20.3000"



---

File: repos/IHE_SLASH_ITI.PIXm/input/fsh/ex-dummy.fsh

Instance:   ex-device
InstanceOf: Device
Title:      "Dummy Device example"
Description: "Dummy Device example for completeness sake. No actual use of this resource other than an example target"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST


Instance:   ex-patient
InstanceOf: Patient
Title:      "Dummy Patient example"
Description: "Dummy patient example for completeness sake. No actual use of this resource other than an example target"
Usage: #example
// history - http://playgroundjungle.com/2018/02/origins-of-john-jacob-jingleheimer-schmidt.html
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* name[+].use = #usual
* name[=].family = "Schmidt"
* name[=].given = "John"
* name[+].use = #old
* name[=].family = "Schnidt"
* name[=].given[+] = "John"
* name[=].given[+] = "Jacob"
* name[=].given[+] = "Jingle"
* name[=].given[+] = "Heimer"
* name[=].period.end = "1960"
* name[+].use = #official
* name[=].family = "Schmidt"
* name[=].given[+] = "John"
* name[=].given[+] = "Jacob"
* name[=].given[+] = "Jingleheimer"
* name[=].period.start = "1960-01-01"
* name[+].use = #nickname
* name[=].family = "Schmidt"
* name[=].given = "Jack"
* gender = #other
* birthDate = "1923-07-25"
* address.state = "WI"
* address.country = "USA"


---

File: repos/IHE_SLASH_ITI.PIXm/input/fsh/ex-error-not-found.fsh

Instance:   pixm-response-error-not-found
InstanceOf: OperationOutcome
Title:      "Example OperationOutcome - sourceIdentifier Patient Identifier not found"
Description: "Example OperationOutcome resulting from a failure find a Patient"
Usage: #example

* issue
  * severity = #error
  * code = #not-found
  * details.text = "sourceIdentifier Patient Identifier not found"


---

File: repos/IHE_SLASH_ITI.PIXm/input/fsh/instances.fsh



---

File: repos/IHE_SLASH_ITI.PIXm/input/fsh/PIXm.fsh

Profile:          PIXmPatient
Parent:           Patient
Id:               IHE.PIXm.Patient
Title:            "PIXm Patient constraints for Feed"
Description:      "Profile for describing elements which have to be accepted by the Patient Identifier Cross-reference Manager for performing its cross-referencing function.
- requiring name
- mustSupport for identifier, name, telecom, gender birthDate, address and managingOrganization"
* modifierExtension 0..0
* identifier 0..* MS
* name 1..* MS
* telecom 0..* MS
* gender 0..1 MS
* birthDate 0..1 MS
* address 0..* MS
* managingOrganization 0..1 MS

Profile:          PIXmPatientBirthDateRequired
Parent:           PIXmPatient
Id:               IHE.PIXm.Patient.BirthDateRequired
Title:            "PIXm Patient Profile example for additional Manager constraints"
Description:      "Example Profile StructureDefinition for describing additional Patient resource constraints (requiring birthDate) by the Patient Identifier Cross-reference Manager for performing its cross-referencing function.
- requiring name and birthDate
- mustSupport for identifier, birthDate, name, telecom, gender birthDate, address and managingOrganization"
* birthDate 1..1 MS

Profile: PIXmQueryParametersIn
Parent: Parameters
Id: IHE.PIXm.Query.Parameters.In
Title: "IHE PIXm Query Parameters In"
Description: "The StructureDefinition defines the Input Parameters for the $ihe-pix operation
- Input: sourceIdentifier, targetSystem"
* parameter ^slicing.discriminator.type = #value
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.description = "allowed parameters are sourceIdentifier, targetSystem and _format"
* parameter ^slicing.rules = #open
* parameter contains
    sourceIdentifier 1..1 and
    targetSystem 0..*
* parameter[sourceIdentifier] ^short = "sourceIdentifier"
* parameter[sourceIdentifier].name = "sourceIdentifier" (exactly)
* parameter[sourceIdentifier].valueIdentifier 1..
* parameter[sourceIdentifier].valueIdentifier only Identifier
* parameter[sourceIdentifier].valueIdentifier.system 1..
* parameter[sourceIdentifier].valueIdentifier.value 1..
* parameter[targetSystem] ^short = "targetSystem"
* parameter[targetSystem].name = "targetSystem" (exactly)
* parameter[targetSystem].valueUri 0..
* parameter[targetSystem].valueUri only uri

Profile: PIXmQueryParametersOut
Parent: Parameters
Id: IHE.PIXm.Query.Parameters.Out
Title: "IHE PIXm Query Parameters Out"
Description: "The StructureDefinition defines the Output Parameters for the $ihe-pix operation
- Output: targetId, targetIdentifier"
* parameter ^slicing.discriminator.type = #value
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.description = "allowed parameters are targetId and targetIdentifier"
* parameter ^slicing.rules = #open
* parameter contains
    targetId 0..* and
    targetIdentifier 0..*
* parameter[targetId].name = "targetId" (exactly)
* parameter[targetId].value[x] 1..
* parameter[targetId].value[x] only Reference(Patient)
* parameter[targetId].value[x] ^type.aggregation = #referenced
* parameter[targetId].value[x].reference 1..
* parameter[targetIdentifier] ^short = "targetIdentifier"
* parameter[targetIdentifier].name = "targetIdentifier" (exactly)
* parameter[targetIdentifier].value[x] 1..
* parameter[targetIdentifier].value[x] only Identifier
* parameter[targetIdentifier].value[x].system 1..
* parameter[targetIdentifier].value[x].system ^comment = "Both the value and system shall be populated. (IHE ITI TF-2 Z.9.1 Identifier Type)"
* parameter[targetIdentifier].value[x].value 1..
* parameter[targetIdentifier].value[x].assigner ^short = "When the assigning authority name is provided, the actor shall also populate the assigner."
* parameter[targetIdentifier].value[x].assigner 0..1
* parameter[targetIdentifier].value[x].assigner.display 1..
* parameter[targetIdentifier].value[x].assigner.display ^short = "When the assigning authority name is provided, the actor shall also populate the display attribute."
* parameter[targetIdentifier].value[x].assigner.display ^comment = "When the assigning authority name is provided, the actor shall also populate the display attribute. (IHE ITI TF-2 E3 FHIR Identifier Type)"


---

File: repos/IHE_SLASH_ITI.PIXm/input/images-source/ActorsAndTransactions.plantuml

@startuml
agent "Patient Identifier Cross-reference Consumer" as Consumer
agent "Patient Identity Source" as Source
agent "Patient Identifier Cross-reference Manager" as Manager
Source -down-> Manager: "Patient Identity Feed FHIR [ITI-104]"
Consumer -down-> Manager : "Mobile Patient Identifier Cross-reference Query [ITI-83]"
@enduml

---

File: repos/IHE_SLASH_ITI.PIXm/input/images-source/ITI-104-seq.plantuml

@startuml
hide footbox
participant "Patient Identity Source" as PatientIdentitySource
participant "Patient Identifier Cross-reference Manager" as PatientIdentifierCrossReferenceManager
activate "PatientIdentitySource"
activate "PatientIdentifierCrossReferenceManager"
"PatientIdentitySource" -> "PatientIdentifierCrossReferenceManager" : Add or revise Patient
"PatientIdentifierCrossReferenceManager" --> "PatientIdentitySource" : Patient added or revised
"PatientIdentitySource" -> "PatientIdentifierCrossReferenceManager" : Resolve Duplicate Patient
"PatientIdentifierCrossReferenceManager" --> "PatientIdentitySource" : Patient duplicate resolved
"PatientIdentitySource" -> "PatientIdentifierCrossReferenceManager" : Remove Patient
"PatientIdentifierCrossReferenceManager" --> "PatientIdentitySource" : Patient removed
deactivate "PatientIdentitySource"
deactivate "PatientIdentifierCrossReferenceManager"
@enduml


---

File: repos/IHE_SLASH_ITI.PIXm/input/images-source/ITI-83-seq.plantuml

@startuml
hide footbox
participant "Patient Identifier Cross-reference Consumer" as PatientIdentifierCrossReferenceConsumer
participant "Patient Identifier Cross-reference Manager" as PatientIdentifierCrossReferenceManager
activate "PatientIdentifierCrossReferenceConsumer"
activate "PatientIdentifierCrossReferenceManager"
"PatientIdentifierCrossReferenceConsumer" -> "PatientIdentifierCrossReferenceManager" : Get Corresponding Identifiers
"PatientIdentifierCrossReferenceManager" --> "PatientIdentifierCrossReferenceConsumer" : Response
deactivate "PatientIdentifierCrossReferenceConsumer"
deactivate "PatientIdentifierCrossReferenceManager"
@enduml


---

File: repos/IHE_SLASH_ITI.PIXm/input/images-source/uc_1_domains.plantuml

@startuml
map "Intensive Care domain" as MC {
 MC-123 => Alice
 MC-234 => Bob
 MC-345 => Charlie
}

map "Main Hospital domain" as MH {
 007 => Alice
 098 => Bob
 111 => Charlie
 112 => Charles
}
@enduml

---

File: repos/IHE_SLASH_ITI.PIXm/input/images-source/uc_1.plantuml

@startuml
skinparam svgDimensionStyle false
hide footbox

box Intensive Care domain
 participant "IC Registion \n PIXm Source" as Source1
 participant "intensive care system" as Display
endbox
participant "PIXm Manager" as Manager
box Main Hospital domain
 participant "Hospital Registration \n PIXm Source" as Source2
 participant "MHD Responder \n with lab results" as Lab
endbox

activate Source2
Source2 --> Source2: some new patient is registered
Source2 -> Manager: [01] PIXm Feed (Add) [ITI-104]
activate Manager
deactivate Source2

Manager --> Manager: [02] Apply Xref logic

activate Source1
Source1 --> Source1: patient is registered in IC
Source1 -> Manager: [03] PIXm Feed (Add) [ITI-104]
deactivate Source1

Manager -> Manager: [04] Apply Xref logic

activate Display
Display --> Display: clinician needs lab results
Display -> Manager: [05] PIXm Query [ITI-83]
Display <- Manager: PIXm Query results
Display --> Lab: [06] MHD request for lab result document
activate Lab

Lab --> Lab: find lab documents
Lab --> Display: return lab documents found

deactivate Display
deactivate Lab

@enduml


---

File: repos/IHE_SLASH_ITI.PIXm/input/images-source/uc_2.plantuml

@startuml
hide footbox

participant "PIXm Manager" as Manager
box Main Hospital domain
 participant "Hospital Registration \n PIXm Source" as Source2
endbox

activate Source2
Source2 --> Source2: update patient demographics
Source2 -> Manager: [07] PIXm Feed (Update) [ITI-104]
activate Manager
deactivate Source2

Manager --> Manager: update identity information
Manager --> Manager: [08] Apply Xref logic

@enduml


---

File: repos/IHE_SLASH_ITI.PIXm/input/images-source/uc_3.plantuml

@startuml
hide footbox

participant "PIXm Manager" as Manager
box Main Hospital domain
 participant "Hospital Registration \n PIXm Source" as Source2
endbox

activate Source2

Note right of Source2
The registration system determined 
that two patient identifiers 
are the same patient person.
The local system (data) are 
merged/linked. 
endnote

Source2 -> Manager: [09] PIXm Feed (Resolve Duplicate) [ITI-104]
activate Manager
deactivate Source2

Manager --> Manager: [10] Apply Xref logic
@enduml

---

File: repos/IHE_SLASH_ITI.PIXm/input/narrative-source/IHE_ITI_Suppl_PIXm.md

Integrating the Healthcare Enterprise

![](./media/image1.jpeg)

IHE IT Infrastructure

Technical Framework Supplement

Patient Identifier Cross-reference for Mobile

(PIXm)

**HL7<sup>®</sup> FHIR****<sup>®</sup> Release 4**

**Using Resources at Normative Level**

Rev. 2.1 – Trial Implementation

Date: December 5, 2019

Author: IHE ITI Technical Committee

Email: iti@ihe.net

**Please verify you have the most recent version of this document.** See
[here](http://ihe.net/Technical_Frameworks/) for Trial Implementation
and Final Text versions and [here](http://ihe.net/Public_Comment/) for
Public Comment versions.

**Foreword**

This is a supplement to the IHE IT Infrastructure Technical Framework
V16.0. Each supplement undergoes a process of public comment and trial
implementation before being incorporated into the volumes of the
Technical Frameworks.

This supplement is published on December 5, 2019 for trial
implementation and may be available for testing at subsequent IHE
Connectathons. The supplement may be amended based on the results of
testing. Following successful testing it will be incorporated into the
IT Infrastructure Technical Framework. Comments are invited and may be
submitted at
[http://www.ihe.net/ITI\_Public\_Comments](http://www.ihe.net/ITI_Public_Comments/).

This supplement describes changes to the existing technical framework
documents.

“Boxed” instructions like the sample below indicate to the Volume Editor
how to integrate the relevant section(s) into the relevant Technical
Framework volume.

Amend Section X.X by the following:

Where the amendment adds text, make the added text
**<span class="underline">bold underline</span>**. Where the amendment
removes text, make the removed text **~~bold strikethrough~~**. When
entire new sections are added, introduce with editor’s instructions to
“add new text” or similar, which for readability are not bolded or
underlined.

General information about IHE can be found at:
[http://ihe.net](http://ihe.net/).

Information about the IHE IT Infrastructure domain can be found at
[http://ihe.net/IHE\_Domains](http://ihe.net/IHE_Domains/).

Information about the organization of IHE Technical Frameworks and
Supplements and the process used to create them can be found at
[http://ihe.net/IHE\_Process](http://ihe.net/IHE_Process/) and
[http://ihe.net/Profiles](http://ihe.net/Profiles/).

The current version of the IHE IT Infrastructure Technical Framework can
be found at
[http://ihe.net/Technical\_Frameworks](http://ihe.net/Technical_Frameworks/)*.*

**CONTENTS**

[Introduction to this Supplement 5](#introduction-to-this-supplement)

[Open Issues and Questions 6](#open-issues-and-questions)

[Closed Issues 7](#closed-issues)

[General Introduction 8](#general-introduction)

[Appendix A – Actor Summary Definitions
8](#appendix-a-actor-summary-definitions)

[Appendix B – Transaction Summary Definitions
8](#appendix-b-transaction-summary-definitions)

[Glossary 8](#glossary)

[**Volume 1 – Profiles 9**](#_Toc26432163)

[Copyright Licenses 9](#copyright-licenses)

[5.5 Cross Profile Considerations 9](#cross-profile-considerations)

[23.7 Cross Profile Considerations 9](#cross-profile-considerations-1)

[41 Patient Identifier Cross-reference for Mobile Profile (PIXm)
10](#patient-identifier-cross-reference-for-mobile-profile-pixm)

[41.1 PIXm Actors, Transactions, and Content Modules
10](#pixm-actors-transactions-and-content-modules)

[41.1.1 Actor Descriptions and Actor Profile Requirements
11](#actor-descriptions-and-actor-profile-requirements)

[41.2 PIXm Actor Options 11](#pixm-actor-options)

[41.3 PIXm Required Actor Groupings 11](#_Toc26432171)

[41.4 PIXm Overview 12](#pixm-overview)

[41.4.1 Concepts 12](#concepts)

[41.4.2 Use Cases 13](#use-cases)

[41.4.2.1 Use Case: Multiple Identifier Domains within a Single
Facility/Enterprise
13](#use-case-multiple-identifier-domains-within-a-single-facilityenterprise)

[41.4.2.1.1 Multiple Identifier Domains with a Single
Facility/Enterprise Use Case Description
13](#multiple-identifier-domains-with-a-single-facilityenterprise-use-case-description)

[41.4.2.1.2 Multiple Identifier Domains with a Single
Facility/Enterprise Process Flow
13](#multiple-identifier-domains-with-a-single-facilityenterprise-process-flow)

[41.5 Security Considerations 14](#security-considerations)

[41.6 PIXm Cross Profile Considerations
14](#pixm-cross-profile-considerations)

[41.6.1 Proxy Model 14](#proxy-model)

[41.6.2 Manager Grouping 14](#manager-grouping)

[**Volume 2c – Transactions (cont.) 15**](#_Toc396826783)

[3.83 Mobile Patient Identifier Cross-reference Query \[ITI-83\]
15](#mobile-patient-identifier-cross-reference-query-iti-83)

[3.83.1 Scope 15](#scope)

[3.83.2 Actor Roles 15](#actor-roles)

[3.83.3 Referenced Standards 15](#referenced-standards)

[3.83.4 Messages 15](#_Toc26432187)

[3.83.4.1 Get Corresponding Identifiers message
16](#get-corresponding-identifiers-message)

[3.83.4.1.1 Trigger Events 16](#trigger-events)

[3.83.4.1.2 Message Semantics 16](#message-semantics)

[3.83.4.1.2.1 Source Patient Identifier Parameter
17](#source-patient-identifier-parameter)

[3.83.4.1.2.2 Requesting Patient Identifier Domains to be Returned
17](#requesting-patient-identity-domains-to-be-returned)

[3.83.4.1.3 Expected Actions 18](#expected-actions)

[3.83.4.2 Response message 18](#response-message)

[3.83.4.2.1 Trigger Events 18](#trigger-events-1)

[3.83.4.2.2 Message Semantics 18](#message-semantics-1)

[3.83.4.2.2.1 Success 18](#success)

[3.83.4.2.2.2 Source Identifier not found
20](#source-identifier-not-found)

[3.83.4.2.2.3 Source Domain not recognized
20](#source-domain-not-recognized)

[3.83.4.2.2.4 Target Domain not recognized
20](#target-domain-not-recognized)

[3.83.5 Security Considerations 21](#security-considerations-1)

[3.83.5.1 Security Audit Considerations
21](#security-audit-considerations)

#   
Introduction to this Supplement

<table>
<tbody>
<tr class="odd">
<td><p>Whenever possible, IHE profiles are based on established and stable underlying standards. However, if an IHE domain determines that an emerging standard has high likelihood of industry adoption, and the standard offers significant benefits for the use cases it is attempting to address, the domain may develop IHE profiles based on such a standard. During Trial Implementation, the IHE domain will update and republish the IHE profile as the underlying standard evolves.</p>
<p>Product implementations and site deployments may need to be updated in order for them to remain interoperable and conformant with an updated IHE profile.</p>
<p>This PIXm Profile is based on Release 4 of the emerging HL7<sup>®</sup>[1] FHIR<sup>®</sup>[2] standard. HL7 describes FHIR Change Management and Versioning at <a href="https://www.hl7.org/fhir/versions.html">https://www.hl7.org/fhir/versions.html</a>.</p>
<p>HL7 provides a rating of the maturity of FHIR content based on the FHIR Maturity Model (FMM): level 0 (draft) through N (Normative). See <a href="http://hl7.org/fhir/versions.html#maturity">http://hl7.org/fhir/versions.html#maturity</a>.</p>
<p>The FMM levels for FHIR content used in this profile are:</p>
<table>
<thead>
<tr class="header">
<th>FHIR Resource Name</th>
<th>FMM Level</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Bundle</td>
<td>Normative</td>
</tr>
<tr class="even">
<td>Patient</td>
<td>Normative</td>
</tr>
<tr class="odd">
<td>Parameters</td>
<td>Normative</td>
</tr>
<tr class="even">
<td>OperationOutcome</td>
<td>Normative</td>
</tr>
</tbody>
</table>
<p>Given that this profile uses all Normative Resources from R4, the reference to the HL7<sup>®</sup> FHIR<sup>®</sup> standard will be to the version independent <a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, rather than the R4 specific <a href="http://hl7.org/fhir/R4">http://hl7.org/fhir/R4</a>.</p></td>
</tr>
</tbody>
</table>

The Patient Identifier Cross-reference for Mobile (PIXm) Profile defines
a lightweight RESTful interface to a Patient Identifier Cross-reference
Manager, leveraging technologies readily available to mobile
applications and lightweight browser-based applications.

The functionality is based on the PIX Profile described in the ITI
TF-1:5. The primary differences are transport and messaging format of
messages and queries. The profile leverages HTTP transport, and the
JavaScript Object Notation (JSON), Simple-XML, and Representational
State Transfer (REST). The payload format is defined by the
HL7<sup>®</sup> FHIR<sup>®</sup> standard. Unlike the PIX Profile, this
PIXm Profile does not describe the transmission of patient identity
information from a Patient Identity Source to the Patient Identifier
Cross-reference Manager.

The PIXm Profile exposes the functionality of a Patient Identifier
Cross-reference Manager to mobile applications and lightweight browser
applications.

This supplement is intended to be fully compliant with the
HL7<sup>®</sup> FHIR<sup>®</sup> standard, providing only use-case
driven constraints to aid with interoperability, deterministic results,
and compatibility with existing PIX and PIXV3 Profiles.

## Open Issues and Questions

**PIXm\_007**

Mobile Patient Identifier Cross-reference Query response \<assigner\>
resource will be required, for cases where the Assigning authority is
not an OID or UUID or URI

Do we want to use Assigner as an alternative field?

***PIXm\_010***

*Is using FHIR operations the right approach for this profile? If it is
correct, did we document it properly?*

***PIXm\_014***

*Should IHE have just used the $match operator defined in the*
HL7<sup>®</sup> FHIR<sup>®</sup> standard*? It seems to be very similar
function. BUT $match uses Patient resources and not just
identifiers/Reference. That is to say that PIXm operation will expose
identifiers but not other demographics about the patient, whereas $match
exposes the full content of the Patient resource on query and on
returned result. --*
<http://hl7.org/fhir/R4/patient-operation-match.html>

*Thus should $match be an alternative, or another transaction, or
ignored by IHE?*

***PIXm\_015***

*Should we simplify the Parameters given that a Reference datatype can
now carry a Reference.identifier or a Reference.reference?*

***PIXm 016***

*Should we enhance the Parameters returned so that each business
identifier (Identifier) referenced by each Patient can be enumerated.
This will result in each business identifier being listed multiple
times, both at the root and also once for each Patient resource
containing the value in the .identifier element. This seems useful to
the client, but also seems to be beyond the intended use-case for PIX,
and could more appropriately be handled with PDQm, or a secondary query
of the Patient. Concern is that PIXm security model covers identifiers
(reference to Patient is an identifier in FHIR), but by expanding as
proposed this would be returning part of the Patient resource content.*

## Closed Issues

**CP-ITI-1118** - asks if the return behavior is well aligned with PDQm.
Seems they both should handle similar conditions similarly. The return
codes were reviewed in PIXm, and found to be appropriate for PIXm as
originally documented.

# General Introduction

Update the following Appendices to the General Introduction as indicated
below. Note that these are not appendices to Volume 1.

# Appendix A – Actor Summary Definitions

Add the following actors to the IHE Technical Frameworks General
Introduction list of actors:

No new actors

# Appendix B – Transaction Summary Definitions

Add the following transactions to the IHE Technical Frameworks General
Introduction list of Transactions:

| Transaction                                                | Definition                                                    |
| ---------------------------------------------------------- | ------------------------------------------------------------- |
| Mobile Patient Identifier Cross-reference Query \[ITI-83\] | Performs a query for a cross-reference of a Patient Identity. |

# Glossary

Add the following glossary terms to the IHE Technical Frameworks General
Introduction Glossary:

No new Glossary items or updates.

<span id="_Toc26432163" class="anchor"></span>Volume 1 – Profiles

## Copyright Licenses

Add the following to the IHE Technical Frameworks General Introduction
Copyright section:

The FHIR License can be found at
<http://hl7.org/implement/standards/fhir/license.html>.

Add the following new Section 5.5

## 5.5 Cross Profile Considerations

There are two other profiles, Patient Identifier Cross-reference HL7 V3
(PIXV3) and Patient Identifier Cross-reference for Mobile (PIXm), which
provide similar functionality to the Patient Identifier Cross-reference
Query \[ITI-9\] transaction.

A PIX Patient Identifier Cross-reference Manager may choose to group
with the PIXm Patient Identifier Cross-reference Manager to provide an
HTTP RESTful query method.

Add the following new Section 23.7

## 23.7 Cross Profile Considerations

There are two other profiles, (Patient Identifier Cross-reference on HL7
v2 (PIX) and (Patient Identifier Cross-reference for Mobile (PIXm),
which provide similar functionality to the PIXV3 Query \[ITI-45\]
transaction.

A PIXV3 Patient Identifier Cross-reference Manager may choose to group
with the PIXm Patient Identifier Cross-reference Manager to provide an
HTTP RESTful query method.

Add Section 41

# 41 Patient Identifier Cross-reference for Mobile Profile (PIXm)

The ***Patient Identifier Cross-reference for* Mobile** ***Integration
Profile*** provides a transaction for mobile and lightweight
browser-based applications to query a Patient Identifier Cross-reference
Manager for a list of patient identifiers based on the patient
identifier in a different domain and retrieve a patient’s cross-domain
identifiers information into the application.

This profile provides a lightweight alternative to **PIX Query \[ITI-9\]
or PIXV3 Query \[ITI-45\] transactions,** using a HTTP RESTful Query.
This profile depends upon the implementation of the PMIR, PIX, or PIXV3
Profile or equivalent for the patient identity feed and update
notifications. Two example groupings are shown in Section: 41.6.

This profile does not assume Patient Identifier Cross-reference Manager
has the ability to act as a full-fledged HL7<sup>®</sup>
FHIR<sup>®</sup> server, other than for the profiled transaction. PIXm
can be used to provide a RESTful interface to a PIX or PIXV3 Patient
Identifier Cross-reference Manager without providing other FHIR
services.

## 41.1 PIXm Actors, Transactions, and Content Modules

Figure 41.1-1 shows the actors directly involved in the Patient
Identifier Cross-reference for Mobile (PIXm) Profile relevant
transactions between them.

Figure 41.1-1: PIXm Actor Diagram

Table 41.1-1 lists the transactions for each actor directly involved in
the PIXm Profile. To claim compliance with this profile, an actor shall
support all required transactions (labeled “R”) and may support the
optional transactions (labeled “O”).

Table 41.1-1: PIXm Profile - Actors and Transactions

|                                             |                                                            |                        |             |                 |
| ------------------------------------------- | ---------------------------------------------------------- | ---------------------- | ----------- | --------------- |
| Actors                                      | Transactions                                               | Initiator or Responder | Optionality | Reference       |
| Patient Identifier Cross-reference Consumer | Mobile Patient Identifier Cross-reference Query \[ITI-83\] | Initiator              | R           | ITI TF-2c: 3.83 |
| Patient Identifier Cross-reference Manager  | Mobile Patient Identifier Cross-reference Query \[ITI-83\] | Responder              | R           | ITI TF-2c: 3.83 |

The transaction defined in this profile corresponds to the query
transactions used in the PIX and PIXV3 Profiles (ITI TF-1: 5 and 23) and
provides similar functionality.

Note that the Patient Master Identity Registry (PMIR) Profile contains
the Mobile Patient Identity Feed \[ITI-93\] transaction which is
equivalent to the Patient Identity Feed (\[ITI-8\] or \[ITI-44\]) or the
PIX Update Notification (\[ITI-10\] and \[ITI-46\]) transactions in the
PIX and PIXV3 Profiles.

### 41.1.1 Actor Descriptions and Actor Profile Requirements

There are no requirements beyond those in Volume 2 for the \[ITI-83\]
transaction.

## 41.2 PIXm Actor Options

Options that may be selected for each actor in this profile, if any, are
listed in the Table 41.2-1. Dependencies between options when applicable
are specified in notes.

Table 41.2-1: PIXm Actors and Options

|                                             |                    |           |
| ------------------------------------------- | ------------------ | --------- |
| Actor                                       | Option Name        | Reference |
| Patient Identifier Cross-reference Consumer | No options defined | \--       |
| Patient Identifier Cross-reference Manager  | No options defined | \--       |

## 41.3 PIXm Required Actor Groupings 

Table 41.3-1: PIXm - Required Actor Groupings

|                                             |                          |           |                            |
| ------------------------------------------- | ------------------------ | --------- | -------------------------- |
| PIXm Actor                                  | Actor to be grouped with | Reference | Content Bindings Reference |
| Patient Identifier Cross-reference Consumer | None                     | \--       | \--                        |
| Patient Identifier Cross-reference Manager  | None                     | \--       | \--                        |

## 41.4 PIXm Overview

The ***Patient Identifier Cross-reference for Mobile Profile*** is
intended to be used by lightweight applications and mobile devices
present in a broad range of healthcare enterprises (hospital, a clinic,
a physician office, etc.). It supports the cross-reference query of
patient identifiers from multiple Patient Identifier Domains via the
following interaction:

  - The ability to access the list(s) of cross-referenced patient
    identifiers via a query/response.

The following use case and descriptions assume familiarity with the
profiles in ITI TF-1:5 and ITI TF-1:23, and only describe the RESTful
actors and transaction alternatives.

Figure 41.4-1: Process Flow with PIXm

**This diagram shows how PIXm actors (in solid outlined, white boxes)
can integrate into a PIX environment (gray boxes; described in ITI TF-1:
5.2). For a discussion of the relationship between this Integration
Profile and an enterprise master patient index (eMPI) see ITI TF-1:
5.4.**

### 41.4.1 Concepts

**The Patient Identifier Cross-reference Consumer fits into the
combination of actors and transactions defined for PIX, see ITI TF-1:5.
It adds the alternative of using the Mobile Patient Identifier
Cross-reference Query \[ITI-83\] instead of the PIX Query \[ITI-9\], or
PIXV3 Query \[ITI-45\] transactions.**

The PIXm Patient Identifier Cross-reference Consumer uses a query for
sets of cross-referenced patient identifiers.

### 41.4.2 Use Cases

#### 41.4.2.1 Use Case: Multiple Identifier Domains within a Single Facility/Enterprise

##### 41.4.2.1.1 Multiple Identifier Domains with a Single Facility/Enterprise Use Case Description

A patient is in an ambulance on his way to the hospital after an
accident. The mobile Care system in the ambulance wants to get allergy
information (e.g., using the MHD Profile) for the patient. The mobile
Care system uses the patient’s driver’s license number ‘E-123’ as their
patient ID. Before requesting the allergy information from the hospital,
it must translate the known patient identity (driver’s license) to the
patient’s identity known by the hospital (MRN). To achieve this
correlation, the mobile Care system issues a Mobile Patient Identifier
Cross-reference Query to the Patient Identifier Cross-reference Manager
and retrieves the corresponding patient identity. It requests a list of
patient ID aliases corresponding to patient ID = ‘E-123’ (within the
“mobile Care domain”) from the Patient Identifier Cross-reference
Manager. Having linked this patient with a patient known by medical
record number = ‘007’ in the ‘ADT Domain’, the Patient Identifier
Cross-reference Manager returns this list to the mobile Care system so
that it may retrieve the allergies information for the desired patient.

The mobile Care system can now request the allergy information from the
hospital allergy system using the allergy system’s own patient ID
(MRN-007) including the domain identifier/assigning authority.

In this scenario, the hospital’s main ADT system (acting as a Patient
Identity Source) would provide a Patient Identity Feed (using the
patient’s MRN as the identifier) to the Patient Identifier
Cross-reference Manager. Similarly, the mobile Care system or the
external assigning authority would also provide a Patient Identity Feed
to the Patient Identifier Cross-reference Manager using the patient
driver’s license as the patient identifier and providing its own unique
identifier domain identifier.

##### 41.4.2.1.2 Multiple Identifier Domains with a Single Facility/Enterprise Process Flow

The PIXm Profile is intended to provide a different transport mechanism
for the cross-identifier Query functionality described in the PIX
Profile. Hence, the Mobile Patient Identifier Cross-reference Query
\[ITI-83\] transaction can be used where the PIX Query \[ITI-9\] (or
equivalent) transaction is used. The following diagram describes only
Patient Cross-Identity for Mobile Process Flow.

Figure 41.4.2.1.2-1: Basic Process Flow in Multiple ID Domains in a
Single Facility Process Flow in PIXm Profile

## 41.5 Security Considerations

See ITI TF-2X: Appendix Z.8 “Mobile Security Considerations”

## 41.6 PIXm Cross Profile Considerations

### 41.6.1 Proxy Model

The Patient Identifier Cross-reference Manager from PIXm can be grouped
with either PIX or PIXV3 Patient Identifier Cross-reference Consumer to
proxy the Mobile Patient Identifier Cross-reference Query \[ITI-83\] to
the more traditional PIX Query \[ITI-9\] and PIXV3 Query \[ITI-45\]
transactions, thus acting as a proxy to the Patient Identifier
Cross-reference Manager that wants to enable RESTful query to its data.

### 41.6.2 Manager Grouping

The PIXm Profile does not define a Patient Identity Feed transaction to
the Patient Identifier Cross-reference Manager, but obtaining patient
identifiers is enabled using other IHE profiles, e.g.:

  - The Patient Identifier Cross-reference Manager from PIXm can be
    grouped with a Patient Identity Consumer from the Patient Master
    Identity Registry (PMIR) Profile in order to receive the Mobile
    Patient Identity Feed \[ITI-93\] transaction.

  - The Patient Identifier Cross-reference Manager from PIXm can be
    grouped with either Patient Identifier Cross-reference Manager from
    PIX or PIXV3 to enable the traditional IHE mechanism to obtain
    patient demographics for cross-referencing via Patient Identity Feed
    transactions \[ITI-8\] and/or \[ITI-44\].

Grouping of the PIXm Manager with these other actors is not required if
the implementation is able to obtain patient identity and
cross-reference information in another manner.

<span id="_Toc396826783" class="anchor"></span>Volume 2c – Transactions
(cont.)

Add Section 3.83

## 3.83 Mobile Patient Identifier Cross-reference Query \[ITI-83\]

This section corresponds to transaction \[ITI-83\] of the IHE IT
Infrastructure Technical Framework.

### 3.83.1 Scope

This transaction is used by the Patient Identifier Cross-reference
Consumer to solicit information about patients whose Patient Identifiers
cross-match with Patient Identifiers provided in the query parameters of
the request message. The request is received by the Patient Identifier
Cross-reference Manager. The Patient Identifier Cross-reference Manager
processes the request and returns a response in the form of zero or more
Patient Identifiers for the matching patient.

### 3.83.2 Actor Roles

The roles in this transaction are defined in the following table and may
be played by the actors shown here:

Table 3.83.2-1: Actor Roles

| **Actor:** | Patient Identifier Cross-reference Consumer                                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Role:**  | Requests, from the Patient Identifier Cross-reference Manager, a list of patient identifiers matching the supplied Patient Identifier.                                       |
| **Actor:** | Patient Identifier Cross-reference Manager                                                                                                                                   |
| **Role:**  | Returns Cross-referenced Patient Identifiers for the patient that cross-matches the Patient Identifier criteria provided by the Patient Identifier Cross-reference Consumer. |

### 3.83.3 Referenced Standards

|          |                                                                            |
| -------- | -------------------------------------------------------------------------- |
| HL7 FHIR | HL7<sup>®</sup> FHIR<sup>®</sup> standard <http://hl7.org/fhir/index.html> |

### 3.83.4 Messages

Figure 3.83.4-1: Interaction Diagram

#### 3.83.4.1 Get Corresponding Identifiers message

This message is implemented as an HTTP GET operation from the Patient
Identifier Cross-reference Consumer to the Patient Identifier
Cross-reference Manager using the FHIR $ihe-pix operation described in
Section 3.83.4.1.2 Message Semantics.

##### 3.83.4.1.1 Trigger Events

A Patient Identifier Cross-reference Consumer needs to obtain, or
determine the existence of, alternate patient identifiers.

##### 3.83.4.1.2 Message Semantics

The Get Corresponding Identifiers message is a FHIR operation request as
defined in FHIR (<http://hl7.org/fhir/operations.html>) with the input
parameters shown in Table 3.83.4.1.2-1. Given that the parameters are
not complex types, the HTTP GET operation shall be used as defined in
FHIR (<http://hl7.org/fhir/operations.html#request>).

The name of the operation is $ihe-pix, and it is applied to FHIR Patient
Resource type.

The Get Corresponding Identifiers message is conducted by the Patient
Identifier Cross-reference Consumer by executing an HTTP GET against the
Patient Identifier Cross-reference Manager’s Patient Resource URL.

The URL for this operation is: \[base\]/Patient/$ihe-pix

Where **\[base\]** is the URL of Patient Identifier Cross-reference
Manager Service provider.

The Get Corresponding Identifiers message is performed by an HTTP GET
command shown below:

GET
\[base\]/Patient/$ihe-pix?sourceIdentifier=\[token\]{\&targetSystem=\[uri\]}{&\_format=\[token\]}

Table 3.83.4.1.2-1: $ihe-pix Message HTTP query Parameters

| Query parameter Name | Cardinality | Search Type | Description                                                                                                                                                                                                    |
| -------------------- | ----------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Input Parameters     |             |             |                                                                                                                                                                                                                |
| sourceIdentifier     | \[1..1\]    | token       | The Patient identifier search parameter that will be used by the Patient Identifier Cross-reference Manager to find cross matching identifiers associated with the Patient Resource. See Section 3.83.4.1.2.1. |
| targetSystem         | \[0..\*\]   | uri         | The Assigning Authorities for the Patient Identifier Domains from which the returned identifiers shall be selected. See Section 3.83.4.1.2.2.                                                                    |
| \_format             | \[0..1\]    | token       | The requested format of the response from the mime-type value set. See ITI TF-2: Appendix Z.6                                                                                                                 |

###### 3.83.4.1.2.1 Source Patient Identifier Parameter

The required HTTP query parameter sourceIdentifier is a token that
specifies an identifier associated with the patient whose information is
being queried (e.g., a local identifier, account identifier, etc.). Its
value shall include both the Patient Identifier Domain (i.e., Assigning
Authority) and the identifier value, separated by a "|".

See ITI TF-2: Appendix Z.2.2 for use of the token search parameter type
for patient identifiers.

The Patient Identifier Cross-reference Consumer shall provide exactly
one (1) instance of this parameter in the query.

For example, a query searching for all patient Identifiers, for a
patient with identifier NA5404 assigned by authority
“1.3.6.1.4.1.21367.2010.1.2.300\&ISO” would be represented as:

> sourceIdentifier=urn:oid:1.3.6.1.4.1.21367.2010.1.2.300|NA5404

###### 3.83.4.1.2.2 Requesting Patient Identifier Domains to be Returned

If the Patient Identifier Cross-reference Consumer wishes to select the
Patient Identifier Domain(s) from to receive Patient Identifiers, it does
so by populating the targetSystem parameter with as many domains for
which it wants to receive Patient Identifiers. The Patient Identifier
Cross-reference Manager shall return the Patient Identifiers for each
requested domain if a value is known.

The targetSystem parameter uses this format:

> targetSystem=\<patient ID Assigning Authority domain\>

Examples:

> targetSystem=urn:oid:1.3.6.1.4.1.21367.2010.1.2.100
> 
> targetSystem=http://fhir.mydomain.com

##### 3.83.4.1.3 Expected Actions

The Patient Identifier Cross-reference Manager shall use the
sourceIdentifier and the targetSystem(s) to determine the Patient
Identities that match, where Patient Identities include business
Identifier(s) and FHIR Patient Resource(s).

Response returned encoding and semantics is defined in Section 3.83.4.2:

The Patient Identities returned may be a subset based on policies that
might restrict access to some Patient Identities. For guidance on
handling Access Denied, see ITI TF-2: Appendix Z.7.

#### 3.83.4.2 Response message

##### 3.83.4.2.1 Trigger Events

The Patient Identifier Cross-reference Manager needs to return failure,
or success with zero to many results to the Patient Identifier
Cross-reference Consumer.

##### 3.83.4.2.2 Message Semantics

See ITI TF-2: Appendix Z.6 for more details on response format
handling.

The response message is a FHIR operation response
(<http://hl7.org/fhir/operations.html#response>)

On Failure, the response message is an HTTP status code of 4xx or 5xx
indicates an error, and an OperationOutcome Resource shall be returned
with details. See specific failure modes in Sections 3.83.4.2.2.2
through 3.83.4.2.2.4.

###### 3.83.4.2.2.1 Success

On Success, the response message is an HTTP status code of 200 with a
single Parameters Resource as shown in Table 3.83.4.2.2-1. For each
matching business Identifier, the Parameters Resource shall include one
parameter element with name="targetIdentifier". For each matching
Patient Resource, the Parameters Resource shall include one parameter
element with name="targetId". The values may be returned in any order.
The identifier value given in the sourceIdentifier parameter in the
query shall not be included in the returned Response.

Table 3.83.4.2.2.1-1: $ihe-pix Message Response

| Parameter                | Card.     | Data Type          | Description                                                                                         |
| ------------------------ | --------- | ------------------ | --------------------------------------------------------------------------------------------------- |
| FHIR Parameters Resource |           |                    |                                                                                                     |
| targetIdentifier         | \[0..\*\] | Identifier         | The identifier found. Shall include the assigning authority as specified in ITI TF-2: Appendix E.3 |
| targetId                 | \[0..\*\] | Reference(Patient) | The URL of the Patient Resource                                                                     |

\<Parameters xmlns="http://hl7.org/fhir"\>

\<parameter\>

\<name value="targetIdentifier"/\>

\<valueIdentifier\>

\<use value="official" /\>

\<system value="urn:oid:2.16.840.1.113883.16.4.3.2.5" /\>

\<value value="123" /\>

\</valueIdentifier\>

\</parameter\>

\<parameter\>

\<name value="targetIdentifier"/\>

\<valueIdentifier\>

\<use value="official" /\>

\<system value="urn:oid:1.16.7435.2.315381.13.4.1.2.3" /\>

\<value value="474" /\>

\</valueIdentifier\>

\</parameter\>

\<parameter\>

\<name value="targetId"/\>

\<valueReference value="http://xyz-server/xxx/Patient/7536642"\>

\</valueReference\>

\</parameter\>

\<parameter\>

\<name value="targetIdentifier"/\>

\<valueIdentifier\>

\<use value="official"/\>

\<system value="http://www.acmehosp.com/patients"/\>

\<value value="44552"/\>

\<period\>

\<start value="2003-05-03"/\>

\</period\>

\</valueIdentifier\>

\</parameter\>

\<parameter\>

\<name value="targetId"/\>

\<valueReference value="http://pas-server/xxx/Patient/443556"\>

\</valueReference\>

\</parameter\>

\</Parameters\>

###### 3.83.4.2.2.2 Source Identifier not found

When the Patient Identifier Cross-reference Manager recognizes the
Patient Identifier Domain in the sourceIdentifier but the identifier is
not found, then the following failure shall be returned:

**HTTP 404** (Not Found) is returned as the HTTP status code.

An OperationOutcome Resource is returned indicating that the patient
identifier is not recognized in an issue having:

|             |                                                 |
| ----------- | ----------------------------------------------- |
| Attribute   | Value                                           |
| severity    | error                                           |
| code        | http://hl7.org/fhir/issue-type\#not-found       |
| diagnostics | “sourceIdentifier Patient Identifier not found” |

###### 3.83.4.2.2.3 Source Domain not recognized

When the Patient Identifier Cross-reference Manager does not recognize
the Patient Identifier Domain in the sourceIdentifier, then the following
failure shall be returned:

**HTTP 400** (Bad Request) is returned as the HTTP status code.

An OperationOutcome Resource is returned indicating that the Patient
Assigning Authority domain is not recognized in an issue having:

|             |                                                  |
| ----------- | ------------------------------------------------ |
| Attribute   | Value                                            |
| severity    | error                                            |
| code        | http://hl7.org/fhir/issue-type\#code-invalid     |
| diagnostics | “sourceIdentifier Assigning Authority not found” |

###### 3.83.4.2.2.4 Target Domain not recognized

When the Patient Identifier Cross-reference Manager does not recognize
the Patient Identifier Domain in the targetSystem, then the following
failure shall be returned:

**HTTP 403** (Forbidden) is returned as the HTTP status code.

An OperationOutcome Resource is returned indicating that the Patient
Identity Domain is not recognized in an issue having:

|             |                                              |
| ----------- | -------------------------------------------- |
| Attribute   | Value                                        |
| severity    | error                                        |
| code        | http://hl7.org/fhir/issue-type\#code-invalid |
| diagnostics | “targetSystem not found”                     |

### 3.83.5 Security Considerations

See the general Security Consideration in ITI TF-1: 38.5

#### 3.83.5.1 Security Audit Considerations

The Security audit criteria are similar to those for the PIX Query
\[ITI-9\] as this transaction discloses the same type of patient
information. The Mobile Patient Identifier Cross-reference Query is a
Query Information event as defined in ITI TF-2a: Table 3.20.4.1.1.1-1.
The audit message shall comply with the requirements in ITI TF-2a:
3.9.5.1, with the following differences:

  - EventTypeCode = EV(“ITI-83”, “IHE Transactions”, “Mobile Patient
    Identifier Cross-reference Query”)

  - Query Parameters (AuditMessage/ParticipantObjectIdentification)

<!-- end list -->

  - ParticipantObjectIdTypeCode = EV(“ITI-83”, “IHE Transactions”,
    “Mobile Patient Identifier Cross-reference Query”)

  - ParticipantObjectQuery = Requested URL including query parameters

  - ParticipantObjectDetail = HTTP Request Headers contained in the
    query (e.g., Accept header)

<!-- end list -->

1.  HL7 is the registered trademark of Health Level Seven International.

2.  FHIR is the registered trademark of Health Level Seven
    International.


---

File: repos/IHE_SLASH_ITI.PIXm/input/pagecontent/5_testplan.md

<div markdown="1" class="stu-note">

This Test Plan page is a prototype. The maturity of the content will improve over time. For now, high level testing scope and available tools are summarized. Comments are welcome.
</div>

## Introduction

PIXm specifies two transactions: A patient identity feed transaction between PIX Source and PIX Manager, and a query transaction between a PIX Consumer and a PIX Manager. Each transaction specifies semantics of the request and response messages exchanged between actors. The PIXm test plan focuses on these semantics and on the expected actions on the server-side actor.

## High-level Test Scope

### Mobile Patient Identifier Cross-reference Query [[ITI-83]](ITI-83.html)

* PIX Consumer initiates ITI-83 queries for cross-referenced patients
* PIX Manager responds to queries, as appropriate

### Patient Identity Feed FHIR [[ITI-104]](ITI-104.html)

* PIX Source initiates ITI-104 feed for the four messages in the transaction:
  * Add patient
  * Revise patient
  * Resolve patient duplicates
  * Remove patient (if the Source supports the Remove Patient Option)
* PIX Manager responds according to expected actions in ITI-104 for:
  * Add patient
  * Revise patient
  * Resolve patient duplicates
  * Remove patient (if the Manager supports the Remove Patient Option)

### Options

* Remove Patient

## Unit Test Procedure (Conformance Testing)

Unit testing this context entails testing a SUT with a simulator or validator tool. A simulator is an implementation of an actor that is designed specifically to test the opposite pair actor. The simulator might be a reference implementation or may be a specially designed test-bench. Often, when a reference implementation is used, the negative tests are harder to simulate. A validator is an implementation that can check conformance. A validator may be a simulator, but may also be a standalone tool used to validate only a message encoding. Some reference implementations may be able to validate to a StructureDefinition profile, but often these do not include sufficient constraints given the overall actor conformance criteria. 

### Available tools for PIXm unit testing

#### Gazelle PatientManager - Simulator 

* Provider: INRIA (Rennes, France), [KEREVAL](https://www.kereval.com/)
* Gazelle Patient Manager [online](https://gazelle.ihe.net/PatientManager/home.seam)
* [User Manual](https://gazelle.ihe.net/gazelle-documentation/Patient-Manager/user.html)
* [Tool support](https://gazelle.ihe.net/jira/projects/PAM)
* Actors tested:  
  * PIX Consumer, PIX Manager for ITI-83:
    * PIX Consumer test definition: [PM_PIX_Query-Patient_Identity_Consumer](https://gazelle.ihe.net/content/pmpixquery-patientidentityconsumer) 
    * PIX Manager test definition: [PM_PIX_Query-PIX_Manager](https://gazelle.ihe.net/content/pmpixquery-pixmanager)
  * (future) PIX Source, PIX Manager for ITI-104

#### Gazelle External Validation Service (aka "EVS Client") - Validator

* Provider:  INRIA (Rennes, France), [KEREVAL](https://www.kereval.com/), and Mallinckrodt Institute of Radiology (Saint Louis, USA) 
* Gazelle EVSClient online: https://gazelle.ihe.net/EVSClient/home.seam
* [User Manual](https://gazelle.ihe.net/gazelle-documentation/EVS-Client/user.html)
* [Tool support](https://gazelle.ihe.net/jira/browse/EVSCLT)
* Scope of testing: validation using StructureDefinitions for PIXm
* Test documentation: (https://gazelle.ihe.net/content/evsfhirvalidation
* Other notes: StructureDefinitions and other conformance resources are provided in this Implementation Guide on the [Artifacts](artifacts.html) page.

## Integration Test Procedure (Interoperability Testing)

Integration Testing in this context is where two SUT of paired actors test against each other. Integration testing is often limited by the capability of client-side actors, which may support only a subset of the semantics required to be supported by a server. Full message semantics and failure-modes are generally more thoroughly exercised with unit (conformance) tests.

The tests listed below are defined in [Gazelle Master Model](https://gazelle.ihe.net/GMM) and are performed by systems testing PIXm at IHE Connectathons.

Interoperability Tests:

* ITI-83_PIXm_Search_Read
  * Assumes a pre-defined set of patients (with demographics expected to be cross-referenced PIX Manager actor)

* (future) PIXm_Remove_Patient
  * Applies to Source and Manager actors that support the Remove Patient Option
  * Covers the remove patient message in ITI-83
* (future) PIXm_PatientMgmt_and_Discovery   
  * Covers the add, revise, and resolve duplicates messages in ITI-104, with follow-up ITI-83 queries
  * Intent is to model this on a similar, existing test for PMIR, to exercise a workflow with ITI-104 and ITI-83


---

File: repos/IHE_SLASH_ITI.PIXm/input/pagecontent/a_issues.md

<div markdown="1" class="stu-note">

## Significant Changes

### Significant changes since PIXm Version 3.0.3

Version 3.0.4

- Removed Parameters from surrounding the error response example as it should only be the the OperationOutcome resource.

### Significant changes since PIXm Version 3.0.2

Version 3.0.3

- add response recommendation for deleted or merged patient
- quality improvements
- capabilityStatement improvements.

### Significant changes since PIXm Version 3.0.0

Version 3.0.2

- changed to AuditEvent profiling leveraging [Basic Audit Log Patterns (BALP) Release 1.1.0](https://profiles.ihe.net/ITI/BALP/index.html)
  - changes to RESTful type, and query subtype
  - ITI-83 starts with RESTful Query, overriding the type from REST to QUERY
  - ITI-104 expands out to the specific REST operations from BasicAudit
  
### Significant changes from PIXm, Rev 2.1:
- FHIR Implementation Guide instead of [PDF - Rev. 2.1](https://ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_PIXm.pdf)
- Integrated CP-ITI-1222, CP-ITI-1214, CP-ITI-1215, CP-ITI-1246 
- Volume 1 Update Use Cases and introduced new Patient Identity Feed FHIRaccording to [work item](https://github.com/IHE/IT-Infrastructure/issues/147)
  - Added Security Considerations 
- Volume 2 [ITI-83]  
  - Added Parameter StructureDefinitions and OperationDefinition for $ihe-pix operation
  - Added Security Audit Considerations with AuditEvent profile / resource
  - Added IHE Connectathon Samples for [ITI-83]
- Volume 2 [ITI-104]
   - New Patient Identity Feed FHIR [ITI-104] Transaction
   - Profile for specifying Patient elements used by Patient Identifier Cross-reference Manager to correlate identifiers
   - Added the Remove Patient message   
   - Added IHE Connectathon samples [ITI-104]
   - Added Security Audit Considerations with AuditEvent profile / resource

## Issues

### Submit an Issue

IHE welcomes [New Issues](https://github.com/IHE/ITI.PIXm/issues/new/choose) from the GitHub community. 
For those without GitHub access, issues may be submitted to the [Public Comment form](https://www.ihe.net/resources/public_comment/).

As issues are submitted they will be managed on the [PIXm GitHub Issues](https://github.com/IHE/ITI.PIXm/issues), where discussion and workarounds may be found. These issues, when critical, will be processed using the normal [IHE Change Proposal](https://wiki.ihe.net/index.php/Category:CPs) management and balloting. 
It is important to note that as soon as a Change Proposal is approved, it carries the same weight as a published Implementation Guide (i.e., it is testable at an [IHE Connectathon](https://www.ihe.net/participate/connectathon/) from the time it is approved, even if it will not be integrated until several months later).

### Open Issues and Questions
These issues were known as part of the publication, and IHE invites comments.

***PIXm\_007***

*Mobile Patient Identifier Cross-reference Query response &lt;assigner&gt; resource will be required, for cases where the Assigning authority is not an OID or UUID or URI.*

*Do we want to use Assigner as an alternative field?*

***PIXm\_015***

*Should we simplify the Parameters given that a Reference datatype can
now carry a Reference.identifier or a Reference.reference?*

***PIXm 016***

*Should we enhance the Parameters returned so that each business
identifier (Identifier) referenced by each Patient can be enumerated.
This will result in each business identifier being listed multiple
times, both at the root and also once for each Patient resource
containing the value in the .identifier element. This seems useful to
the client, but also seems to be beyond the intended use-case for PIX,
and could more appropriately be handled with PDQm, or a secondary query
of the Patient. Concern is that PIXm security model covers identifiers
(reference to Patient is an identifier in FHIR), but by expanding as
proposed this would be returning part of the Patient resource content.*

***PIXm 019***  
*PIXm allows for the parameters in the operation to be a string URL. The IG builder, when creating the narrative, presumes that these are clickable links. yet in one example we have put in a URN OID. This is recorded as an [issue against the IG builder](https://github.com/HL7/fhir-ig-publisher/issues/296).*

***PIXm 020***  
*If a Patient Identifier Cross-reference Manager creates a "shadow copy" of the feeded patients it may return the created
id's on the Patient Identifier Cross-reference Manager, e.g., see [example](Parameters-pixm-response-mohralice-red-all.json.html) 
where the Patient Identifier Cross-reference Manager created three id's for the three patients out ouf the three different Patient Identifier Domains ('Patient/Patient-MohrAlice-Red',Patient/Patient-MohrAlice-Green',Patient/Patient-MohrAlice-Blue') and returns now two targetId's in addition to the two identifiers (red id/identifier is excluded because the sourceIdentifier in Identity Domain Red is already provided in the query).* 

*In addition a Patient Identifier Cross-reference Manager could create a 'golden patient' where all information
is consolidated by the Patient Identifier Cross-reference Manager rules and return also this targetId [example](Patient-Patient-MohrAlice.html). Could this id also be added in a $ihe-pix Query as a targetId ('Patient/Patient-MohrAlice')? Note: A golden patient is not the scope of PIXm, see the [IHE ITI PMIR](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_PMIR.pdf) profile.* 

*There is continuing discussion in iti-tech if a "shadow copy" can be returned as a targetId, and if yes, if it should be marked by the Patient Identifier Cross-reference Manager in meta.source for these shadow copies or not.*

***PIXm 021***
*The naming for the Patient Identity Feed FHIR [ITI-104] transaction is in discussion. It might change
depending is applicability to other profiles, like the [IHE PMIR](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_PMIR.pdf)) profile. 
See [profile considerations/testing](https://gazelle.ihe.net/content/pmirconnectathontestpatients) of PIXm Patient Identifier Cross-Reference Manager and PMIR Patient Identity Registry.*

***PIXm 022***  
*Should the Patient Identifier Cross-reference Manager have a requirement of filling in the assigningAuthority Name if the name is not provided in the Patient Identity Feed FHIR [ITI-104] as it is specified for PIX and PIX V3 Cross-reference Manager? [Issue](https://github.com/IHE/ITI.PIXm/issues/71)*

### Closed Issues
These issues have been decided and documented in the publication.

***CP-ITI-1118*** - asks if the return behavior is well aligned with PDQm.
Seems they both should handle similar conditions similarly. The return
codes were reviewed in PIXm, and found to be appropriate for PIXm as
originally documented.

***PIXm\_010*** 
The $ihe-pix operation is considered the right approach for this profile.

***PIXm\_014*** 
The $ihe-pix operation cannot be replaced with the $match operation, the $match operation is however considered as a proposal for a new version in PDQm.

***PIXm 017***  
*[ITI-83] references E.3 which is in [PDF](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_Appx-Z.pdf#page=16), see also [github issue](https://github.com/IHE/publications/issues/110).*

***CP-ITI-1222, CP-ITI-1214, CP-ITI-1215*** - The sourceIdentifier parameter in the PIXm Query [ITI-83] can include both business identifier and FHIR Resource ids, and the parameter should be matched by the PIXm Manager against FHIR Resource ids (i.e., Patient.id) and the patient’s business identifiers (i.e., value(s) in Patient.identifier). Examples and error codes updated. 

</div>


---

File: repos/IHE_SLASH_ITI.PIXm/input/pagecontent/download.md


You can download:

- [this entire guide](full-ig.zip),
- the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
- the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on [IHE ITI.PIXm Github Repo](https://github.com/IHE/ITI.PIXm).

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}


---

File: repos/IHE_SLASH_ITI.PIXm/input/pagecontent/index.md


<!-- ## Patient Identifier Cross-referencing for mobile Profile (PIXm)  -->

The ***Patient Identifier Cross-reference for Mobile (PIXm) Profile*** provides RESTful transactions for mobile and lightweight browser-based applications to create, update and delete patient records in a Patient Identifier Cross-reference Manager and to query the Patient Identifier Cross-reference Manager for a patient’s cross-domain identifiers.

<div markdown="1" class="stu-note">

| [Significant Changes, Open and Closed Issues](a_issues.html) |
{: .grid}

**[Search this IG](https://www.google.com/search?q=site%3Ahttps%3A%2F%2Fprofiles.ihe.net%2FITI%2FPIXm)**

</div>

### Organization of This Guide
This guide is organized into following sections:

- Volume 1: Use-Case Analysis
  - [41.1 PIXm Actors, Transactions, and Content Modules](volume-1.html#1411-pixm-actors-transactions-and-content-modules)
  - [41.2 PIXm Actor Options](volume-1.html#1412-pixm-actor-options)
  - [41.3 PIXm Required Actor Groupings](volume-1.html#1413-pixm-required-actor-groupings)
  - [41.4 PIXm Overview](volume-1.html#1414-pixm-overview)
  - [41.5 PIXm Security Considerations](volume-1.html#1415-pixm-security-considerations)
  - [41.6 PIXm Cross Profile Considerations](volume-1.html#1416-pixm-cross-profile-considerations)
- Volume 2: Transaction Detail
  - [3.83 Patient Identifier Cross-reference Query [ITI-83]](ITI-83.html)
  - [3.104 Patient Identity Feed FHIR [ITI-104]](ITI-104.html)
- Other
  - [Test Plan](5_testplan.html)
  - [Changes to Other Documents](other.html)
  - [Download and Analysis](download.html)

Click on any of the links above, navigate the contents using the [Table of Contents](toc.html) or, if you are looking for a specific artifact, see the index of [Artifacts](artifacts.html).

### Conformance Expectations

IHE uses the normative words: Shall, Should, and May according to [standards conventions](https://profiles.ihe.net/GeneralIntro/ch-E.html).

PIXm uses `Must Support` in StructureDefinitions with the definition found in [Appendix Z](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.10-profiling-conventions-for-constraints-on-fhir). This is equivalent to the IHE use of **R2** as defined in [Appendix Z](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.10-profiling-conventions-for-constraints-on-fhir).


---

File: repos/IHE_SLASH_ITI.PIXm/input/pagecontent/ITI-104.md

<!-- 3.104 Patient Identity Feed FHIR [ITI-104] -->

This section corresponds to transaction [ITI-104] of the IHE Technical Framework. Transaction [ITI-104] is used by the Patient Identity Source and Patient Identifier Cross-reference Manager.

### 2:3.104.1 Scope

This transaction communicates patient information, including corroborating demographic data, after a patient’s identity is established, modified or merged or after the key corroborating demographic data has been modified. In addition the removal of a patient identity in the source patient identifier domain may be communicated.

### 2:3.104.2 Actor Roles

The roles in this transaction are defined in the following table and may be played by the actors shown here:

**Table 2:3.104.2-1: Actor Roles**

| Actor | Role |
|-------------------+--------------------------|
| Patient Identity Source   | Provides notification to the Patient Identifier Cross-reference Manager for any patient identification related events including: creation, updates, merges, etc. |
| Patient Identifier Cross-reference Manager  | Serves a well-defined set of Patient Identification Domains. Based on information provided in each Patient Identification Domain by a Patient Identity Source Actor, it manages the cross-referencing of patient identifiers across Patient Identification Domains. |
{: .grid}

### 2:3.104.3 Referenced Standards

**FHIR-R4** [HL7 FHIR Release 4.0](http://www.hl7.org/FHIR/R4)

### 2:3.104.4 Messages

<div>
{%include ITI-104-seq.svg%}
</div>
<div style="clear: left" />
**Figure 2:3.104.4-1: Interaction Diagram**

A Patient Identity Source notifies the Patient Identifier Cross-reference Manager that a patient has been [added or revised](#2310441-add-or-revise-patient) in the Patient Identity Source.
The Patient Identity Source notifies the Patient Identifier Cross-reference Manager that [duplicate records](#2310442-resolve-duplicate-patient) were resolved in the Patient Identity Source.
If the [Remove Patient Option](volume-1.html#14121-remove-patient) is supported the Patient Identity Source notifies the Patient Identifier Cross-reference Manager that [a patient record was removed](#2310443-remove-patient) in the Patient Identity Source.

#### 2:3.104.4.1 Add or Revise Patient

This message is implemented as an HTTP conditional update operation from the Patient Identity Source to the Patient Identifier
Cross-reference Manager described in Section 2:3.104.4.1.2 Message Semantics.

##### 2:3.104.4.1.1 Trigger Events

The Add Patient message is triggered when a new patient is added to a Patient Identity Source.

The Revise Patient message is triggered when the patient information is revised within a Patient Identity Source (e.g., change in patient name, patient address, etc.).

The Patient Identifier Cross-reference Manager shall only perform cross-referencing logic on messages received from Patient Identity Source Actors.

##### 2:3.104.4.1.2 Message Semantics

A Patient Identity Source initiates a FHIR request using Conditional Update as defined at [http://hl7.org/fhir/http.html#cond-update](http://hl7.org/fhir/http.html#cond-update) on a Patient Resource.

A Patient Identity Source shall be able to send a request for either the JSON or the XML format as defined in FHIR. A Patient Identifier Cross-reference Manager shall be able to support the JSON and the XML format and support the conditional PUT operation.

The Patient Identity Source shall provide the identifier of the Patient Identification Domain of the Patient Identity Source. 

For example:

The identifier for a patient with identifier IHERED-994 assigned by authority “1.3.6.1.4.1.21367.13.20.1000” would be represented as:

```
identifier=urn:oid:1.3.6.1.4.1.21367.13.20.1000|IHERED-994
```

If a FHIR server in the source domain with base `http://fhir.mydomain.com` is the assigning authority, a patient on that server with a Logical id of “123” the identifier would be represented as:

```
identifier=http://fhir.mydomain.com|Patient/123
``` 

##### 2:3.104.4.1.2.1 Patient Resource constraints

The Patient Identifier Cross-reference Manager shall be capable of accepting elements specified in [profile PIXm Patient](StructureDefinition-IHE.PIXm.Patient.html): `https://profiles.ihe.net/ITI/PIXm/StructureDefinition/IHE.PIXm.Patient`. This is to ensure that the Patient Identifier Cross-reference Manager can handle a sufficient set of corroborating information in order to perform its cross-referencing function.

If a Patient Identifier Cross-reference Manager constrains or specifies additional elements (e.g., extensions), it shall constrain the PIXm Patient profile [see example](StructureDefinition-IHE.PIXm.Patient.BirthDateRequired.html) and reference this as a [supportedProfile](http://hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.supportedProfile) in the CapabilityStatement.


##### 2:3.104.4.1.3 Expected Actions

The Patient Identifier Cross-reference Manager shall provide a CapabilityStatement with the [capabilities interaction](https://www.hl7.org/fhir/http.html#capabilities) and indicate that conditionalUpdate is available on the Patient.

A Patient Identifier Cross-reference Manager shall support the Conditional Update based on the identifier parameter as outlined in http://hl7.org/fhir/http.html#cond-update. The identifier parameters carries either the Logical id or the business identifier as outlined in [Message Semantics](#23104412-message-semantics). The identifier parameter needs to be used for the cross-referencing.

The Patient Identifier Cross-reference Manager is not required to maintain a Patient resource, only to cross-reference provided identifiers.

The Patient Identifier Cross-reference Manager shall only recognize a single Patient Identity Source per domain.

The cross-referencing process (algorithm, human decisions, etc.) is performed within the Patient Identifier Cross-reference Manager, but its specification is beyond the scope of IHE.

Once the Patient Identifier Cross-reference Manager has completed its cross-referencing function, it shall make the newly cross-referenced identifiers available to PIX queries.

##### 2:3.104.4.1.4 Response message

See [http://hl7.org/fhir/http.html#cond-update](http://hl7.org/fhir/http.html#cond-update) for response.

##### 2:3.104.4.1.5 Example

Add Patient [Alissa Mohr](Patient-Patient-MohrAlissa-Red.json.html):

<pre>
PUT http://example.org/fhir/Patient?identifier=urn:oid:1.3.6.1.4.1.21367.13.20.1000|IHERED-994 HTTP/1.1
Accept: application/fhir+json
Content-Type: application/fhir+json

{
  "resourceType" : "Patient",
  "identifier" : [
    {
      "system" : "urn:oid:1.3.6.1.4.1.21367.13.20.1000",
      "value" : "IHERED-994"
    }
  ],
  "active" : true,
  "name" : [
    {
      "family" : "MOHR",
      "given" : [
        "ALISSA"
      ]
    }
  ],
  "gender" : "female",
  "birthDate" : "1958-01-30"
}
</pre>

Revise Patient [Alissa Mohr](Patient-Patient-MohrAlissa-Red.json.html) with updated demographics ([given name Alice instead of Alissa](Patient-Patient-MohrAlice-Red.json.html)):

<pre>
PUT http://example.org/fhir/Patient?identifier=urn:oid:1.3.6.1.4.1.21367.13.20.1000|IHERED-994 HTTP/1.1
Accept: application/fhir+json
Content-Type: application/fhir+json

{
  "resourceType" : "Patient",
  "identifier" : [
    {
      "system" : "urn:oid:1.3.6.1.4.1.21367.13.20.1000",
      "value" : "IHERED-994"
    }
  ],
  "active" : true,
  "name" : [
    {
      "family" : "MOHR",
      "given" : [
        "ALICE"
      ]
    }
  ],
  "gender" : "female",
  "birthDate" : "1958-01-30"
}
</pre>

#### 2:3.104.4.2 Resolve Duplicate Patient

The Patient Identity Source notifies the Patient Identifier Cross-reference Manager that duplicate records were resolved in the Patient Identity Source.

This message is implemented as an HTTP conditional update operation from the Patient Identity Source to the Patient Identifier
Cross-reference Manager described in Section 2:3.104.4.2.2 Message Semantics.

##### 2:3.104.4.2.1 Trigger Events

A Resolve Duplicate Patient message is triggered when the Patient Identity Source does a merge within its Patient Identification Domain.

##### 2:3.104.4.2.2 Message Semantics

A Patient Identity Source initiates a FHIR request using HTTP PUT as defined at [http://hl7.org/fhir/http.html#cond-update](http://hl7.org/fhir/http.html#cond-update) on the duplicate patient record based on the identifier parameter.

In the Patient resource a link of type 'replaced-by' shall be added with the identifier pointing to the surviving patient identifier, see https://www.hl7.org/fhir/patient.html#dup-records.

A Patient Identity Source shall be able to send a request for either the JSON or the XML format as defined in FHIR. A Patient Identifier Cross-reference Manager shall be able to support the JSON and the XML format and support the conditional PUT operation.

##### 2:3.104.4.2.3 Expected Actions

The Patient Identifier Cross-reference Manager shall provide a CapabilityStatement with the [capabilities interaction](https://www.hl7.org/fhir/http.html#capabilities) and indicate that conditionalUpdate is available on the Patient.

When the Patient Identifier Cross-reference Manager receives the Resolve Duplicate Patient message it shall replace any references it is maintaining internally to the subsumed patient identifier with the patient identifier in the ‘replaced-by’ link.

After the identifier references are replaced, the Patient Identifier Cross-reference Manager shall reapply its internal cross-referencing logic/ policies before providing the updated information via the PIX Query transactions.

##### 2:3.104.4.2.4 Response Message

See [http://hl7.org/fhir/http.html#cond-update](http://hl7.org/fhir/http.html#cond-update) for response.

##### 2:3.104.4.2.5 Example

Patient [Maiden Alice](Patient-Patient-MaidenAlice-Red.json.html) has been subsumed by Patient [Mohr Alice](Patient-Patient-MohrAlice-Red.json.html) in the 
Patient Identifier Domain urn:oid:1.3.6.1.4.1.21367.13.20.1000. The HTTP conditional update operation is done with the subsumed identifier 'IHERED-m94' from 
[Maiden Alice](Patient-Patient-MaidenAlice-Red.json.html) in the request and referencing the surviving identifier 'IHERED-994' of [Patient Mohr Alice](Patient-Patient-MohrAlice-Red.json.html) in the message:

<pre>
PUT http://example.org/fhir/Patient?identifier=urn:oid:1.3.6.1.4.1.21367.13.20.1000|IHERED-m94 HTTP/1.1
Accept: application/fhir+json
Content-Type: application/fhir+json

{
  "resourceType" : "Patient",
  "identifier" : [
    {
      "system" : "urn:oid:1.3.6.1.4.1.21367.13.20.1000",
      "value" : "IHERED-m94"
    }
  ],
  "active" : false,
  "name" : [
    {
      "family" : "MOHR",
      "given" : [
        "MAIDEN"
      ]
    }
  ],
  "gender" : "female",
  "birthDate" : "1958-01-30",
  "link" : [
    {
      "other" : {
        "identifier" : {
          "system" : "urn:oid:1.3.6.1.4.1.21367.13.20.1000",
          "value" : "IHERED-994"
        }
      },
      "type" : "replaced-by"
    }
  ]
}
</pre>

#### 2:3.104.4.3 Remove Patient 

This message enables the removal of patient identity data if the [Remove Patient Option](volume-1.html#14121-remove-patient) is supported.

This message is implemented as an HTTP conditional delete operation from the Patient Identity Source to the Patient Identifier
Cross-reference Manager described in Section 2:3.104.4.3.2 Message Semantics. 

##### 2:3.104.4.3.1 Trigger Events

A Removed Patient message is triggered when the Patient Identity Source has removed a patient within its Patient Identification Domain.

##### 2:3.104.4.3.2 Message Semantics

A Patient Identity Source initiates a FHIR request using HTTP DELETE as defined at [3.1.0.7.1 Conditional delete](https://www.hl7.org/fhir/http.html#3.1.0.7.1) on a Patient Resource based on the identifier parameter.

A Patient Identity Source shall be able to send a request for either the JSON or the XML format as defined in FHIR. A Patient Identifier Cross-reference Manager shall be able to support the JSON and the XML format and support the conditional DELETE operation if it supports the Remove Patient message.

##### 2:3.104.4.3.3 Expected Actions

The Patient Identifier Cross-reference Manager indicates in the [CapabilityStatement](http://hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.conditionalDelete) that conditionalDelete is available on the Patient if this message is supported.

When the Patient Identifier Cross-reference Manager receives the Remove Patient message, it shall remove any references it is maintaining internally to the patient identifier provided. 

After processing the Remove Patient message, the Patient Identifier Cross-reference Manager shall not return the removed identifier in response to PIX Query transactions.

##### 2:3.104.4.3.4 Response Message

See [3.1.0.7.1 Conditional delete](https://www.hl7.org/fhir/http.html#3.1.0.7.1) for the response.

##### 2:3.104.4.3.5 Example

Remove Patient [Maiden Alice](Patient-Patient-MaidenAlice-Red.json.html):

<pre>
DELETE http://example.org/fhir/Patient?identifier=urn:oid:1.3.6.1.4.1.21367.13.20.1000|IHERED-994 HTTP/1.1
Accept: application/fhir+json
</pre>

### 2:3.104.5 Security Considerations

See [ITI TF-2: Appendix Z.8 “Mobile Security Considerations”](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations), which includes guidance on the use of [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) and [IUA](https://profiles.ihe.net/ITI/TF/Volume1/ch-34.html) to protect the communication, access control, and audit logging.

The Patient Identifier Cross-reference Manager should check that the Patient Identity Source is only making changes to Patient Identifier Domain for which it is authorized.

#### 2:3.104.5.1 Security Audit Considerations

The Security audit logging will conform to the RESTful interactions following [IHE-BALP Basic Audit Logging Patterns](https://profiles.ihe.net/ITI/BALP/index.html). 

##### 2:3.104.5.1.1 Patient Identity Source Audit

The Patient Identity Source when grouped with ATNA Secure Node or Secure Application actor shall be able to record AuditEvents. The Patient Identity Source will log a Delete or Update. The Patient Identity Source can't distinguish a Create from a Update.
- on an Update - [PIXm Feed Update Source Audit Event Log](StructureDefinition-IHE.PIXm.Feed.Update.Audit.Source.html). 
  - [Audit Example for a PIXm Feed Update transaction from source perspective](AuditEvent-ex-auditPixmFeed-update-source.html).
- on a Delete - [PIXm Feed Delete Source Audit Event Log](StructureDefinition-IHE.PIXm.Feed.Delete.Audit.Source.html). 
  - [Audit Example for a PIXm Feed Delete transaction from source perspective](AuditEvent-ex-auditPixmFeed-delete-source.html).

##### 2:3.104.5.1.2 Patient Identifier Cross-reference Manager Audit

The Patient Identifier Cross-reference Manager when grouped with ATNA Secure Node or Secure Application actor shall be able to record AuditEvents. The Patient Identifier Cross-Reference Manager can distinguish a Create and Update so is expected to record Create and Update specifically.
- on a Create [PIXm Feed Create Manager Audit Event Log](StructureDefinition-IHE.PIXm.Feed.Create.Audit.Manager.html) 
  - [Audit Example for a PIXm Feed Create transaction from manager perspective](AuditEvent-ex-auditPixmFeed-create-manager.html).
- on an Update [PIXm Feed Update Manager Audit Event Log](StructureDefinition-IHE.PIXm.Feed.Update.Audit.Manager.html)
  - [Audit Example for a PIXm Feed Update transaction from manager perspective](AuditEvent-ex-auditPixmFeed-update-manager.html).
- on a Delete [PIXm Feed Delete Manager Audit Event Log](StructureDefinition-IHE.PIXm.Feed.Delete.Audit.Manager.html)
  - [Audit Example for a PIXm Feed Delete transaction from manager perspective](AuditEvent-ex-auditPixmFeed-delete-manager.html).

#### 2:3.104.5.2 Use with the Internet User Authorization (IUA) Profile  
The [Internet User Authorization (IUA)](https://profiles.ihe.net/ITI/IUA/index.html) Profile provides support for user authentication, app authentication, and authorization decisions. When PIXm actors are grouped with IUA actors there are additional security and privacy functionality enabled by this grouping. There are additional requirements and functionality enabled through scope definitions that are transaction-specific.

A Patient Identity Source, when grouped with an [IUA](https://profiles.ihe.net/ITI/IUA/index.html) Authorization Client, shall use [Get Access Token [ITI-71]](https://profiles.ihe.net/ITI/IUA/index.html#volume-2----transactions) to request the following scope from the IUA Authorization Server. This enables the Patient Identity Source, to provide notifications with the Patient Identity Feed FHIR [ITI-104] transaction with the authorizing token in the combined transaction [Incorporate Access Token [ITI-72]](https://profiles.ihe.net/ITI/IUA/index.html#372-incorporate-access-token-iti-72).

The Patient Identifier Cross-reference Manager, when grouped with an [IUA](https://profiles.ihe.net/ITI/IUA/index.html) Resource Server, shall require [Incorporate Access Token [ITI-72]](https://profiles.ihe.net/ITI/IUA/index.html#372-incorporate-access-token-iti-72) in all Patient Identity Feed FHIR [ITI-104] transactions, shall enforce the authorization decision in the token, and may further enforce policies beyond those made by the Authorization Server such as consent or business rules.

```
scope: ITI-104
```

This scope request authorizes the full [ITI-105] transaction. This scope implicitly request patient-specific Create/Update/Delete for Patient resources as defined in [ITI-104]. Further scope refinement is allowed in realm or project-specific situations; these scopes would be in addition to the scope defined here.

##### 2:3.104.5.2.1 AuditEvent Augmentation

The Security audit logging interactions should be augmented following [IHE-BALP Basic Audit Logging Patterns](https://profiles.ihe.net/ITI/BALP/index.html), to include agent details [from the OAuth Security token](https://profiles.ihe.net/ITI/BALP/content.html#3575-oauth-security-token).




---

File: repos/IHE_SLASH_ITI.PIXm/input/pagecontent/ITI-83.md

This section corresponds to transaction [ITI-83] of the IHE IT
Infrastructure Technical Framework.

### 2:3.83.1 Scope

This transaction is used by the Patient Identifier Cross-reference
Consumer to solicit information about patients whose Patient Identifiers
cross-match with a Patient Identifier it provides in the request message.
The request is received by the Patient Identifier
Cross-reference Manager. The Patient Identifier Cross-reference Manager
processes the request and returns a response that includes zero or more
Patient Identifiers for the matching patient.

### 2:3.83.2 Actor Roles

The roles in this transaction are defined in the following table and may
be played by the actors shown here:

**Table 2:3.83.2-1: Actor Roles**

| Actor | Role |
|-------------------+--------------------------|
| Patient Identifier Cross-reference Consumer   | Queries the Patient Identifier Cross-reference Manager for a list of corresponding patient identifiers, if any |
| Patient Identifier Cross-reference Manager  | Manages the cross-referencing of patient identifiers across Patient Identification Domains. Upon request it returns a list of corresponding patient identifiers, if any. |
{: .grid}

### 2:3.83.3 Referenced Standards

**FHIR-R4** [HL7 FHIR Release 4.0](http://www.hl7.org/FHIR/R4)

### 2:3.83.4 Messages

<div>
{%include ITI-83-seq.svg%}
</div>
<div style="clear: left" />
**Figure 2:3.83.4-1: Interaction Diagram**

#### 2:3.83.4.1 Get Corresponding Identifiers message

This message is implemented as an HTTP GET operation from the Patient
Identifier Cross-reference Consumer to the Patient Identifier
Cross-reference Manager using the FHIR $ihe-pix operation described in
Section 2:3.83.4.1.2 Message Semantics.

##### 2:3.83.4.1.1 Trigger Events

A Patient Identifier Cross-reference Consumer needs to obtain, or
determine the existence of, alternate patient identifiers.

##### 2:3.83.4.1.2 Message Semantics

The Get Corresponding Identifiers message is a FHIR operation request as
defined in FHIR (<http://hl7.org/fhir/operations.html>) with the [$ihe-pix operation definition](OperationDefinition-IHE.PIXm.pix.html)
and the input parameters shown in Table 2:3.83.4.1.2-1.

Given that the parameters are
not complex types, the HTTP GET operation shall be used as defined in
FHIR (<http://hl7.org/fhir/operations.html#request>).

The name of the operation is `$ihe-pix`, and it is applied to FHIR Patient
Resource type.

The Get Corresponding Identifiers message is conducted by the Patient
Identifier Cross-reference Consumer by executing an HTTP GET against the
Patient Identifier Cross-reference Manager’s Patient Resource URL.

The URL for this operation is: `[base]/Patient/$ihe-pix`

Where **[base]** is the URL of Patient Identifier Cross-reference
Manager Service provider.

The Get Corresponding Identifiers message is performed by an HTTP GET
command shown below:

```
GET [base]/Patient/$ihe-pix?sourceIdentifier=[token]{&targetSystem=[uri]}{&_format=[token]}
```

**Table 2:3.83.4.1.2-1: $ihe-pix Message HTTP query Parameters**

| Query parameter Name | Cardinality | Search Type | Description                                                                                                                                                                                                      |
| -------------------- | ----------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sourceIdentifier     | \[1..1\]    | token       | The Patient Identifier that will be used by the Patient Identifier Cross-reference Manager to find cross matching identifiers associated with the Patient. See Section 2:3.83.4.1.2.1. |
| targetSystem         | \[0..\*\]   | uri         | The Assigning Authorities for the Patient Identifier Domains from which the returned identifiers shall be selected. See Section 2:3.83.4.1.2.2.                                                                    |
| \_format             | \[0..1\]    | token       | The requested format of the response from the mime-type value set. See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format)                  |
{: .grid }

###### 2:3.83.4.1.2.1 Source Patient Identifier Parameter

The required HTTP query parameter `sourceIdentifier` is a token that
specifies an identifier associated with the patient whose information is
being queried (i.e., a business identifier such as a local identifier or account identifier, or the Logical id of a FHIR Patient Resource). Its
value shall include both the Patient Identifier Domain (i.e., Assigning
Authority) and the identifier value, separated by a "|".

See [ITI TF-2: Appendix Z.2.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for use of the `token` search parameter type for patient identifiers.

The Patient Identifier Cross-reference Consumer shall provide exactly one (1) instance of this parameter in the query.

For example, a query searching for all Patient Identifiers, for a patient with identifier IHERED-994 assigned by authority
“1.3.6.1.4.1.21367.13.20.1000” would be represented as:

```
sourceIdentifier=urn:oid:1.3.6.1.4.1.21367.13.20.1000|IHERED-994
```

For example, a query searching all Patient Identifiers, for a patient’s FHIR Patient Resource with a Logical id of "123" on the FHIR Server `http://fhir.mydomain.com` would be represented as:

```
sourceIdentifier=http://fhir.mydomain.com|Patient/123
```

###### 2:3.83.4.1.2.2 Requesting Patient Identifier Domains to be Returned

If the Patient Identifier Cross-reference Consumer wishes to select the
Patient Identifier Domain(s) from which to receive Patient Identifiers, it does
so by populating the `targetSystem` parameter with as many domains for
which it wants to receive Patient Identifiers. The Patient Identifier
Cross-reference Manager shall return the Patient Identifiers for each
requested domain if a value is known.

The targetSystem parameter uses this format:

```
targetSystem=<patient ID Assigning Authority domain>
```

Examples:

```
targetSystem=urn:oid:1.3.6.1.4.1.21367.13.20.3000
targetSystem=http://fhir.mydomain.com
```

##### 2:3.83.4.1.3 Expected Actions

The Patient Identifier Cross-reference Manager shall use the `sourceIdentifier` and the `targetSystem` to determine the Patient Identifiers that match, where Patient Identifiers include business identifier(s) and the Logical id(s) of FHIR Patient Resource(s).

Response returned encoding and semantics is defined in Section 2:3.83.4.2:

The Patient Identifiers returned may be a subset based on policies that might restrict access to some Patient Identifiers. For guidance on handling Access Denied, see [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results).

#### 2:3.83.4.2 Response message

##### 2:3.83.4.2.1 Trigger Events

The Patient Identifier Cross-reference Manager needs to return failure, or success with zero to many results to the Patient Identifier Cross-reference Consumer.

##### 2:3.83.4.2.2 Message Semantics

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format handling.

The response message is a FHIR operation response
(<http://hl7.org/fhir/operations.html#response>).

On Failure, the response message is an HTTP status code of 4xx or 5xx
indicates an error, and an OperationOutcome Resource shall be returned
with details. See specific failure modes in Sections 2:3.83.4.2.2.2
through 2:3.83.4.2.2.4.

###### 2:3.83.4.2.2.1 Success

On Success, the response message is an HTTP status code of 200 with a
single Parameters Resource as shown in Table 2:3.83.4.2.2-1.

The Parameters Resource shall include:
- for each business identifier for the patient, one `parameter` element with `name="targetIdentifier"` and the `valueIdentifier` of the identifier 
- for each matching Patient Resource, one `parameter` element with `name="targetId"` and the `valueReference` of the Patient Resource  
 
The values may be returned in any order.
The identifier value given in the `sourceIdentifier` parameter in the
query shall not be included in the returned Response.

**Table 2:3.83.4.2.2.1-1: $ihe-pix Message Response**

| Parameter        | Card.     | Data Type          | Description                                                                                         |
| ---------------- | --------- | ------------------ | --------------------------------------------------------------------------------------------------- |
| targetIdentifier | \[0..\*\] | Identifier         | The business identifier found. Shall include the assigning authority as specified in [ITI TF-2: Appendix E.3](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_Appx-Z.pdf#page=16) |
| targetId         | \[0..\*\] | Reference(Patient) | The URL of the Patient Resource                                                                     |
{: .grid }

[example response](Parameters-pixm-response-mohralice-red-all.html) for [query](Parameters-pixm-request-mohralice-red-all.html):
```xml
<Parameters xmlns="http://hl7.org/fhir">
    <parameter>
        <name value="targetIdentifier"/>
        <valueIdentifier>
            <use value="official" />
            <system value="urn:oid:1.3.6.1.4.1.21367.13.20.3000" />
            <value value="IHEBLUE-994" />
        </valueIdentifier>
    </parameter>
    <parameter>
        <name value="targetIdentifier"/>
        <valueIdentifier>
            <use value="official" />
            <system value="urn:oid:1.3.6.1.4.1.21367.13.20.2000" />
            <value value="IHEGREEN-994" />
        </valueIdentifier>
    </parameter>
    <parameter>
      <name value="targetId"/>
        <valueReference>
          <reference value="Patient/Patient-MohrAlice-Blue"/>
        </valueReference>
    </parameter>
    <parameter>
      <name value="targetId"/>
        <valueReference>
          <reference value="Patient/Patient-MohrAlice-Green"/>
        </valueReference>
    </parameter>
</Parameters>
```

###### 2:3.83.4.2.2.2 Source Identifier not found

When the Patient Identifier Cross-reference Manager recognizes the
Patient Identifier Domain in the `sourceIdentifier` but the identifier is
not found, then the following failure shall be returned:

**HTTP 404** (Not Found) is returned as the HTTP status code.

An OperationOutcome Resource is returned indicating that the patient
identifier is not recognized in an issue having:

| Attribute   | Value                                           |
| ----------- | ----------------------------------------------- |
| severity    | error                                           |
| code        | [not-found](http://hl7.org/fhir/R4/codesystem-issue-type.html#not-found)                                       |
| diagnostics | “sourceIdentifier Patient Identifier not found” |
{: .grid }

[example](OperationOutcome-pixm-response-error-not-found.html):
```xml
<OperationOutcome>
  <text>
    <status value="generated"/>
    <div xmlns="http://www.w3.org/1999/xhtml"><p>sourceIdentifier Patient Identifier not found</p></div>
  </text>
  <issue>
  <severity value="error" />
    <code value="not-found" />
    <diagnostics value="sourceIdentifier Patient Identifier not found" />
  </issue>
</OperationOutcome>
```

###### 2:3.83.4.2.2.3 Source Domain not recognized

When the Patient Identifier Cross-reference Manager does not recognize
the Patient Identifier Domain in the `sourceIdentifier`, then the following
failure shall be returned:

**HTTP 400** (Bad Request) is returned as the HTTP status code.

An OperationOutcome Resource is returned indicating that the Patient
Assigning Authority domain is not recognized in an `issue` having:

| Attribute   | Value                                            |
| ----------- | ------------------------------------------------ |
| severity    | error                                            |
| code        | [code-invalid](http://hl7.org/fhir/R4/codesystem-issue-type.html#code-invalid)                                     |
| diagnostics | “sourceIdentifier Assigning Authority not found” |
{: .grid }


###### 2:3.83.4.2.2.4 Target Domain not recognized

When the Patient Identifier Cross-reference Manager does not recognize
one or more of the Patient Identifier Domains in the `targetSystem`, then the following
failure shall be returned:

**HTTP 403** (Forbidden) is returned as the HTTP status code.

An OperationOutcome Resource is returned indicating that the Patient
Identifier Domain is not recognized in an `issue` having:

| Attribute   | Value                    |
| ----------- | ------------------------ |
| severity    | error                    |
| code        | [code-invalid](http://hl7.org/fhir/R4/codesystem-issue-type.html#code-invalid)             |
| diagnostics | “targetSystem not found” |
{: .grid }

###### 2:3.83.4.2.2.5 Post Merge/Delete

Based upon policy, when the Patient is deprecated or deleted, the response message shall return:

- 200 OK, and return a Bundle with no patient resource, or
- 404 Not Found

### 2:3.83.5 Security Considerations

See [ITI TF-2: Appendix Z.8 “Mobile Security Considerations”](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations), which includes guidance on the use of [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) and [IUA](https://profiles.ihe.net/ITI/TF/Volume1/ch-34.html) to protect the communication, access control, and audit logging.

#### 2:3.83.5.1 Security Audit Considerations

The Security audit logging will conform to the RESTful interactions following [IHE-BALP Basic Audit Logging Patterns](https://profiles.ihe.net/ITI/BALP/index.html). 

##### 2:3.83.5.1.1 Patient Identifier Cross-reference Consumer Audit

The Patient Identifier Cross-reference Consumer when grouped with ATNA Secure Node or Secure Application actor shall be able to record a [PIXm Query Consumer Audit Event Log](StructureDefinition-IHE.PIXm.Query.Audit.Consumer.html). [Audit Example for a PIXm Query transaction from consumer perspective](AuditEvent-ex-auditPixmQuery-consumer.html).

##### 2:3.83.5.1.2 Patient Identifier Cross-reference Manager Audit

The Patient Identifier Cross-reference Manager when grouped with ATNA Secure Node or Secure Application actor shall be able to record a [PIXm Query Manager Audit Event Log](StructureDefinition-IHE.PIXm.Query.Audit.Manager.html). [Audit Example for a PIXm Query transaction from manager perspective](AuditEvent-ex-auditPixmQuery-manager.html).


#### 2:3.83.5.2 Use with the Internet User Authorization (IUA) Profile  
The [Internet User Authorization (IUA)](https://profiles.ihe.net/ITI/IUA/index.html) Profile provides support for user authentication, app authentication, and authorization decisions. When PIXm actors are grouped with IUA actors there are additional security and privacy functionality enabled by this grouping. There are additional requirements and functionality enabled through scope definitions that are transaction-specific.

A Patient Identifier Cross-reference Consumer, when grouped with an [IUA](https://profiles.ihe.net/ITI/IUA/index.html) Authorization Client, shall use [Get Access Token [ITI-71]](https://profiles.ihe.net/ITI/IUA/index.html#volume-2----transactions) to request the following scope from the IUA Authorization Server. This enables the Patient Identifier Cross-reference Consumer to get corresponding identifiers with the Mobile Patient Identifier Cross-reference Query [ITI-83] transaction with the authorizing token in the combined transaction [Incorporate Access Token [ITI-72]](https://profiles.ihe.net/ITI/IUA/index.html#372-incorporate-access-token-iti-72).

The Patient Identifier Cross-reference Manager, when grouped with an [IUA](https://profiles.ihe.net/ITI/IUA/index.html) Resource Server, shall require [Incorporate Access Token [ITI-72]](https://profiles.ihe.net/ITI/IUA/index.html#372-incorporate-access-token-iti-72) in all Mobile Patient Identifier Cross-reference Query [ITI-83] transactions, shall enforce the authorization decision in the token, and may further enforce policies beyond those made by the Authorization Server such as consent or business rules.

```
scope: ITI-83
```

This scope request authorizes the full [ITI-83] transaction. This scope implicitly requests patient-specific queries for getting corresponding identifiers. Further scope refinement is allowed in realm or project-specific situations; these scopes would be in addition to the scope defined here.

##### 2:3.83.5.2.1 AuditEvent augmentation

The Security audit logging interactions should be augmented following [IHE-BALP Basic Audit Logging Patterns](https://profiles.ihe.net/ITI/BALP/index.html), to include agent details [from the OAuth Security token](https://profiles.ihe.net/ITI/BALP/content.html#3575-oauth-security-token).



---

File: repos/IHE_SLASH_ITI.PIXm/input/pagecontent/other.md

<div markdown="1" class="stu-note">
This section contains modifications to other IHE publications and profiles, and is not a part of the PIXm profile. The content here will be incorporated into the target narrative at a future time, usually when PIXm goes final-text.
</div>

## IHE Technical Frameworks General Introduction Appendix A – Actor Summary Definitions

|------------------------------------------------|
| Editor, Add the following new or modified actors to the [IHE Technical Frameworks General Introduction Appendix A](https://profiles.ihe.net/GeneralIntro/ch-A.html): |
{:.grid .bg-info}


| Actor  | Definition  |
| -------------------------------- | ------------ |
| Patient Identity Source | The Patient Identity Source is the producer and publisher of patient identity data. |
| Patient Identifier Cross-reference Consumer | The Patient Identifier Cross-reference Consumer queries the patient ID lists from the Patient Identifier Cross-reference Manager. |
| Patient Identifier Cross-reference Manager  | The Patient Identifier Cross-reference Manager manages patient identity data from different domains and cross-references patient identity data from different domains for the same patient. |
{:.grid .table-striped}


## IHE Technical Frameworks General Introduction Appendix B – Transaction Summary Definitions

|------------------------------------------------|
| Editor, Add the following new or modified transactions to the [IHE Technical Frameworks General Introduction Appendix B](https://profiles.ihe.net/GeneralIntro/ch-B.html): |
{:.grid .bg-info}


| Transaction                              | Definition                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Mobile Patient Identifier Cross-reference Query \[ITI-83\]   |  Performs a query against a patient identifier cross-reference manager using HTTP, REST, and JSON/XML message encoding.  |
| Patient Identity Feed FHIR \[ITI-104\] |  This transaction communicates patient information, including corroborating demographic data, after a patient’s identity is established, modified or merged or after the key corroborating demographic data has been modified. In addition, the removal of a patient identity in the source patient identifier domain may be communicated. |
{:.grid .table-striped}


---

File: repos/IHE_SLASH_ITI.PIXm/input/pagecontent/Parameters-pixm-request-mohralice-red-all-intro.md

Query with source patient identifier of Mohr Alice in RED Domain:
```
GET [base]/Patient/$ihe-pix?sourceIdentifier=urn:oid:1.3.6.1.4.1.21367.13.20.1000|IHERED-994
```

---

File: repos/IHE_SLASH_ITI.PIXm/input/pagecontent/Parameters-pixm-request-mohralice-red-to-blue-intro.md

Query with source patient identifier of Mohr Alice in Red Domain and requesting identifier in target domain Blue
```
GET [base]/Patient/$ihe-pix?sourceIdentifier=urn:oid:1.3.6.1.4.1.21367.13.20.1000|IHERED-994&targetSystem=urn:oid:1.3.6.1.4.1.21367.13.20.3000
```

---

File: repos/IHE_SLASH_ITI.PIXm/input/pagecontent/tx-template.md

### 3.Y.1 Scope

### 3.Y.2 Actor Roles

### 3.Y.3 Referenced Standards

### 3.Y.4 Messages

#### 3.Y.4.1 Message 1

##### 3.Y.4.1.1 Trigger Events

##### 3.Y.4.1.2 Message Semantics

##### 3.Y.4.1.3 Expected Actions

#### 3.Y.4.2 Message 1

##### 3.Y.4.2.1 Trigger Events

##### 3.Y.4.2.2 Message Semantics

##### 3.Y.4.2.3 Expected Actions

### 3.Y.5 Protocol Requirements

### 3.Y.6 Security Considerations

#### 3.Y.6.1 Security Audit Considerations

##### 3.Y.6.1.1 $actor Specific Security Considerations


---

File: repos/IHE_SLASH_ITI.PIXm/input/pagecontent/volume-1.md

<div />

The ***Patient Identifier Cross-reference for Mobile (PIXm) Profile*** provides RESTful transactions for mobile and lightweight browser-based applications to create, update and delete patient records in a Patient Identifier Cross-reference Manager and to query the Patient Identifier Cross-reference Manager for a patient’s cross-domain identifiers.

The PIXm Profile requires the Patient Identifier Cross-reference Manager to implement rules and algorithms to cross-reference patient records from different domains. These rules/algorithms are not specified by this profile.

The HTTP RESTful transactions in PIXm are an alternative to the transactions defined in the [PIX](https://profiles.ihe.net/ITI/TF/Volume1/ch-5.html) and [PIXV3](https://profiles.ihe.net/ITI/TF/Volume1/ch-23.html) profiles.

This profile does not assume the Patient Identifier Cross-reference Manager to have the ability to act as a full-fledged HL7<sup>®</sup> FHIR<sup>®</sup> server. PIXm transactions can be used to provide a RESTful interface to a PIX or PIXV3 Patient Identifier Cross-reference Manager without providing other FHIR services.

## 1:41.1 PIXm Actors, Transactions, and Content Modules

### 1:41.1.1 Actor Descriptions and Actor Profile Requirements

- Actors
  - [Patient Identity Source](volume-1.html#141111-patient-identity-source)
  - [Patient Identifier Cross-reference Consumer](volume-1.html#141112-patient-identifier-cross-reference-consumer)
  - [Patient Identifier Cross-reference Manager](volume-1.html#141113-patient-identifier-cross-reference-manager)

- Transactions
  - [Patient Identity Cross-reference Query [ITI-83]](ITI-83.html)
  - [Patient Identity Feed FHIR [ITI-104]](ITI-104.html)

The figure below shows the actors directly involved in the PIXm Profile and the relevant transactions between them.

<div>
{%include ActorsAndTransactions.svg%}
</div>
<div style="clear: left" />
**Figure: 1:41.1.1-1: PIXm Actor Diagram**

Table 1:41.1.1-1 lists the transactions for each actor directly involved in the PIXm Profile.
To claim compliance with this
profile, an actor shall support all required transactions (labeled "R") and
may support the optional transactions (labeled "O").

**Table 1:41.1.1-1: PIXm Profile - Actors and Transactions**


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
      <td>Patient Identity Source</td>
      <td>Patient Identity Feed FHIR [ITI-104]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="ITI-104.html">ITI TF-2: 3.104</a></td>
    </tr>
    <tr>
      <td>Patient Identifier Cross-reference Consumer</td>
      <td>Mobile Patient Identifier Cross-reference Query [ITI-83]</td>
      <td>Initiator</td>
      <td>R</td>
      <td><a href="ITI-83.html">ITI TF-2: 3.83</a></td>
    </tr>
    <tr>
      <td rowspan='2'>Patient Identifier Cross-reference Manager</td>
      <td>Mobile Patient Identifier Cross-reference Query [ITI-83]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="ITI-83.html">ITI TF-2: 3.83</a></td>
    </tr>
    <tr>
      <td>Patient Identity Feed FHIR [ITI-104]</td>
      <td>Responder</td>
      <td>R</td>
      <td><a href="ITI-104.html">ITI TF-2: 3.104</a></td>
    </tr>
  </tbody>
</table>


Note: The Patient Identity Feed FHIR [[ITI-104]](ITI-104.html) and the Mobile Patient Identifier Cross-reference Query [[ITI-83]](ITI-83.html) transactions defined in this profile correspond to the transactions used in the [PIX](https://profiles.ihe.net/ITI/TF/Volume1/ch-5.html) and [PIXV3](https://profiles.ihe.net/ITI/TF/Volume1/ch-23.html) Profiles (ITI TF-1: 5 and 23) and provide similar functionality.

#### 1:41.1.1.1 Patient Identity Source
The Patient Identity Source is the producer and publisher of patient identity data.

The following CapabilityStatements define the Actor capabilities
* [Patient Identity Source](CapabilityStatement-IHE.PIXm.Source.html)

For a given Patient Identifier Domain there shall be one and only one Patient Identity Source Actor, but a given Patient Identity Source may serve more than one Patient Identifier Domain.

#### 1:41.1.1.2 Patient Identifier Cross-reference Consumer
The Patient Identifier Cross-reference Consumer queries the patient ID lists from the Patient Identifier Cross-reference
Manager.

The following CapabilityStatements define the Actor capabilities
* [Patient Identifier Cross-reference Consumer](CapabilityStatement-IHE.PIXm.Consumer.html)

#### 1:41.1.1.3 Patient Identifier Cross-reference Manager
The Patient Identifier Cross-reference Manager manages patient identity data from different domains and cross-references patient
identity data from different domains for the same patient.

The following CapabilityStatements define the Actor capabilities
* [Patient Identifier Cross-reference Manager](CapabilityStatement-IHE.PIXm.Manager.html) to the specific requirements of [ITI-83](ITI-83.html) and expected actions and Patient Resource constraints of [ITI-104](ITI-104.html).

## 1:41.2 PIXm Actor Options

Options that may be selected for each actor in this profile, if any, are
listed in the Table 1:41.2-1. Dependencies between options when applicable
are specified in notes.

**Table 1:41.2-1: PIXm Actors and Options**

| Actor                                       | Option Name               | Reference |
| ------------------------------------------- | --------------------------| --------- |
| Patient Identity Source                     | Remove Patient  | [1:41.2.1](#14121-remove-patient)  |
| Patient Identifier Cross-reference Consumer | No options defined        | \--       |
| Patient Identifier Cross-reference Manager  | Remove Patient  | [1:41.2.1](#14121-remove-patient)  |
{: .grid }


### 1:41.2.1 Remove Patient

This option enables environments to implement a Patient Identifier Cross-referencing including the removal of patient
identity data in an interoperable manner.

A Patient Identity Source that supports this option shall implement the Patient Identity Feed FHIR [ITI-
104] Remove Patient message defined in [ITI TF-2: 3.104.4.3](ITI-104.html#2310443-remove-patient).

A Patient Identifier Cross-reference Manager that supports this option shall implement the Patient Identity Feed FHIR [ITI-
104] Remove Patient message defined in [ITI TF-2: 3.104.4.3](ITI-104.html#2310443-remove-patient).

A Patient Identifier Cross-reference Manager that supports this option shall claim the support of the Patient Identity Feed
FHIR [ITI-104] Remove Patient message in the actors [Capability Statement](CapabilityStatement-IHE.PIXm.Manager.html).

## 1:41.3 PIXm Required Actor Groupings

**Table 1:41.3-1: PIXm - Required Actor Groupings**

| PIXm Actor                                  | Actor to be grouped with | Reference | Content Bindings Reference |
| ------------------------------------------- | ------------------------ | --------- | -------------------------- |
| Patient Identity Source   | None                                       | \--       | \--                        |
| Patient Identifier Cross-reference Consumer | None                     | \--       | \--                        |
| Patient Identifier Cross-reference Manager  | None                     | \--       | \--                        |
{: .grid }

## 1:41.4 PIXm Overview

The ***Patient Identifier Cross-referencing for mobile Profile (PIXm)*** is intended to be used by lightweight applications
and mobile devices present in a broad range of healthcare enterprises (hospital, a clinic,
a physician office, etc.).

It provides RESTful interfaces for Patient Identity Source actors to feed, update and delete patient
identity data as FHIR patient resources managed by the Patient Identifier Cross-reference Manager actor, a cross-reference
query of patient identifiers from multiple Patient Identifier Domains assigned to the same patient person by the Patient
Identifier Cross-reference Manager.

### 1:41.4.1 Concepts

This profile uses RESTful transaction and FHIR patient resources for the Patient Identity Feed FHIR
[ITI-104] and Mobile Patient Identifier Cross-reference Query [ITI-83] transactions performed by the Patient Identifier
Cross-reference Source and Manager actors.

The Patient Identifier Cross-reference Manager will cross-reference the patient identity data from the different domains
when it receives Patient Identity Feed FHIR [ITI-104] transactions, but it may also provide other
triggers (e.g., manual linking or unlinking in case when the rules and algorithms go wrong).

This profile does not specify the rules and algorithm applied by the Patient Identifier Cross-reference Manager actor
to cross-reference the patient identity data from different domains.

The requirements on Patient Identifier Domain as
defined for the [PIX profile](https://profiles.ihe.net/ITI/TF/Volume1/ch-5.html)
apply also for this profile. See [ITI TF-1 Figure 5-1](https://profiles.ihe.net/ITI/TF/Volume1/ch-5.html) and accompanying
text.

This profile does not address issues related to building "golden records" or verified patient identity data. Patient
Identifier Cross-reference Managers may add business functionality to support "golden records" or verified patient identity
data and register them with the Patient Identifier Cross-reference Manager patient domain / assigning authority.

This profile does not define a new transaction for publishing the supported elements, codes and constraints. This profile
requires the Patient Identifier Cross-reference Manager to publish the supported elements, codes and constraints it has
implemented to support its cross-referencing as part of a FHIR CapabilityStatement.


### 1:41.4.2 Use Cases

This section contains informative use-cases, and is not exhaustive.



#### 1:41.4.2.1 Multiple Identifier Domains within a Single Enterprise

This use-case has two Patient Identifier Domains
1. Intensive Care domain
2. Main Hospital domain

<div>
{%include uc_1_domains.svg%}
</div>
<div style="clear: left" />

**Figure 1:41.4.2.1-1 : Use-case 1 example Patient Identity Domains**

##### 1:41.4.2.1.1 Use Case Description

A clinician in the Intensive Care Unit at General Hospital is
reviewing a patient chart on the Intensive Care information
system and wishes to review or monitor the patient's glucose
level, which is included in a laboratory report stored in the
hospital's main laboratory system. The Intensive Care system
needs to map its own patient ID, which it generates
internally, to the patient's medical record number (MRN),
which is generated from the hospital's main patient registration system and is
used as the patient identity by the laboratory system. In this
case the Intensive Care system is essentially in a different
identifier domain than the rest of the hospital since it has
its own notion of patient identity.

In this scenario, the hospital's main patient registration system (acting
as a Patient Identity Source) would provide a Patient Identity
Feed **[01]** (using the patient's MRN as the identifier) to the
Patient Identifier Cross-reference Manager. Similarly, the
Intensive Care system would also provide a Patient Identity Feed **[03]**
to the Patient Identifier Cross-reference Manager using
the internally generated patient ID as the patient identifier
and providing its own unique identifier domain identifier.

When the Patient Identifier Cross-reference Manager receives
the Patient Identity Feed transactions, it performs its
internal logic **[02]** and **[04]** to determine which patient identifiers can
be cross referenced as representing the same patient person based on
the information included in the Feed transactions it has
received. The cross-referencing process (algorithm,
human decisions, etc.) is performed within the
Patient Identifier Cross-reference Manager and is outside
the scope of IHE.

The Intensive Care system wants to get lab information associated with a patient that the Intensive Care system knows as patient ID = MC-123.
Using its own patient ID = MC-123, requests that PIXm Manager return the patient's ID in the Main Hospital domain **[05]**.
Having previously cross-referenced this patient with a patient known by medical record number (e.g., 007) in the Main Hospital Domain **[04]**, the PIXm Manager returns that identifier for the patient.
The Intensive Care system is now able to request laboratory results via [MHD](https://profiles.ihe.net/ITI/TF/Volume1/ch-33.html) **[06]**, using the Patient Identifier in the Main Hospital Domain. The lab system finds lab documents and returns them to the Intensive Care system.

##### 1:41.4.2.1.2 Process Flow

<div>
{%include uc_1.svg%}
</div>
<div style="clear: left" />

**Figure 1:41.4.2.1.2-1 : Multiple ID Domains Process Flow**

*Note: The transactions shown with dotted lines are not part of this profile and included for illustration purposes only.*

#### 1:41.4.2.2 Update patient identity data in Multiple Identifier Domains

This use-case shows the PIXm process when an existing patient has updates to her identifying attributes (identifiers, demographics, contacts, etc).

##### 1:41.4.2.2.1 Use Case Description

The Main Hospital patient registration system initially added a patient’s identity data to the Patient Identity Cross-reference Manager when the patient first entered the hospital for treatment **[01]**.

During a subsequent visit, the registration system detects that the patient’s demographic data should be updated to reflect changes in contact data. The Main Hospital registration system sends na update message to the Patient Identifier Cross-reference Manager using the Mobile Patient Identity Feed [ITI-104] transaction **[07]**.

When the Patient Identifier Cross-reference Manager receives the Patient Identity Feed transaction, it updates the identity information for the patient. Depending on whether its internal logic uses contact data **[08]**, the update may trigger the PIXm Manager to cross-reference in order to determine which patient identifiers of other identifier domains represent the same person person.

##### 1:41.4.2.2.2 Process Flow

<div>
{%include uc_2.svg%}
</div>
<div style="clear: left" />

**Figure 1:41.4.2.2.2-1 : Update patient identity data in Multiple ID Domains Process Flow**

*Note: The transactions shown with dotted lines are not part of this profile and included for illustration purposes only.*

#### 1:41.4.2.3 Resolve duplicate patient identity data in Multiple Identifier Domains

When a Source determines that two patient identities exist for the same person, the Source merges/links the identities (and data), and then notifies the PIXm Manager.

##### 1:41.4.2.3.1 Use Case Description

The Main Hospital patient registration system had initially added patient identity data to the PIXm Manager for both *Charlie* **111** **[01]** and *Charles* **112** **[01]** to the Patient Identity Cross-reference Manager.

After treatment, the registration system detects that *Charles* **112** was previously registered as *Charlie* **111**. For example the *Charles* patient identity created on this episode may have had a typo in name, or different contact data). The registration system marks the *Charles* patient identity data as duplicate, with preference for *Charlie* within the Main Hospital domain.

The registration system sends a Resolve Duplicate message to the Patient Identifier Cross-reference Manager using the Mobile Patient Identity Feed [ITI-104] transaction **[09]**. This transaction tells the PIXm Manager that the *Charles* **112** should be subsumed with preference for *Charlie* **111**.

The PIXm Manager can now do further cross-referencing using internal logic **[10]**.

##### 1:41.4.2.3.2 Process Flow

<div>
{%include uc_3.svg%}
</div>
<div style="clear: left" />

**Figure 1:41.4.2.3.2-1 : Resolve duplicate patient identity data in Multiple ID Domains Process Flow**

*Note: The transactions shown with dotted lines are not part of this profile and included for illustration purposes only.*


## 1:41.5 PIXm Security Considerations

The PIXm profile provides query for identity cross-references, and feed of identity with demographics. Thus the
transactions carry the risk that an inappropriate client or user queries information that should not be disclosed, or
changes information that should not be changed by that client or user.

Actors in PIXm may be grouped with
an [Audit Trail and Node Authentication (ATNA)](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html)
Secure Node or ATNA Secure Application Actor.
This grouping enables the Patient Identifier Cross-reference Manager to
have policies that only highly trusted systems can communicate and that
all changes are recorded in the audit log.

Actors in PIXm may be grouped with
an [Internet User Authorization (IUA)](https://profiles.ihe.net/ITI/TF/Volume1/ch-34.html) Authorization Client or Resource Server as appropriate; with
the [ATNA - STX: HTTPS IUA Option](https://profiles.ihe.net/ITI/IUA/index.html#9-atna-profile).
This grouping will enable more fine grain service side access control and
more detailed audit logging. There are additional requirements and functionality enabled through scope definitions that are transaction specific.
See the Security Considerations sections of the PIXm-defined transactions for guidance on scope definition when grouped with IUA actors.

Actors are expected to follow the recommendations and requirements found in [ITI TF-2:Appendix Z.8 “Mobile Security Considerations”](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations). 

Actors have requirements in the [ITI-83 Security Considerations Section](ITI-83.html#23835-security-considerations) and [ITI-104 Security Considerations Section](ITI-104.html#231045-security-considerations).

## 1:41.6 PIXm Cross Profile Considerations

### 1:41.6.1 Use with PIX and PIXV3 Profile  
The Patient Identifier Cross-reference Manager from PIXm can be grouped with
either PIX or PIXV3 Patient Identifier Cross-reference Consumer and Source to
proxy the Mobile Patient Identifier Cross-reference Query [ITI-83] and
Patient Identity Feed FHIR [ITI-104] transactions to the
more traditional PIX and PIXV3 Query and Feed transactions,
thus acting as a proxy to the Patient Identifier Cross-reference Manager that
wants to enable RESTful transactions. Note that PIX and PIX V3 Source Actors do not have
a corresponding [Remove Patient Option](#14121-remove-patient).

### 1:41.6.2 Use with the Internet User Authorization (IUA) Profile  
The IUA Profile provides support for user authentication, app authentication, and authorization decisions. When PIXm actors are grouped with IUA actors there are additional security and privacy functionality enabled by this grouping. There are additional requirements and functionality enabled through scope definitions that are transaction-specific. See the Security Considerations sections of the PIXm-defined transactions for guidance on scope definition when grouped with IUA actors.


---

