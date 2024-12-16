File: repos/HL7_SLASH_termchangeset-ig/input/fsh/Example_HL7VariableRole_ChangeSet_Provenance.fsh

Instance: HL7VariableRoleChangeSetProvenanceExample
InstanceOf: TerminologyChangeSetProvenance
Description: "Example of Provenance to support HL7 VariableRole code system Change Set based on UTG-427 https://jira.hl7.org/browse/UP-427"
* id = "7e4f317e-8c13-46ba-b79a-9913da2afa2c"
* target.reference = "CodeSystem/HL7VariableRoleChangeSet"
* occurredPeriod.end = "2020-05-18"
* recorded = "2020-05-18T11:13:55+10:00"
* reason.coding.code = #METAMGT
* reason.coding.system = "http://terminology.hl7.org/CodeSystem/v3-ActReason"
* activity.coding.code = #UPDATE
* activity.coding.system = "http://terminology.hl7.org/CodeSystem/v3-DataOperation"
* agent[author].type.coding.code = #author
* agent[author].type.coding.system = "http://terminology.hl7.org/CodeSystem/provenance-participant-type"
* agent[author].who.display = "Ted Klein"
* agent[custodian].type.coding.code = #custodian
* agent[custodian].type.coding.system = "http://terminology.hl7.org/CodeSystem/provenance-participant-type"
* agent[custodian].who.display = "Terminology Infrastructure WG"
* entity[revision].role = #revision
* entity[revision].what.identifier.value = "http://terminology.hl7.org/CodeSystem/variable-role"
* entity[revision].what.display = "EvidenceVariableRole"


---

File: repos/HL7_SLASH_termchangeset-ig/input/fsh/Example_HL7VariableRole_ChangeSet.fsh

Instance: HL7VariableRoleChangeSetExample
InstanceOf: ChangeSet
Description: "Example of HL7 VariableRole code system Change Set based on UTG-427 https://jira.hl7.org/browse/UP-427"
* id = "HL7VariableRoleChangeSet"
* url = "http://terminology.hl7.org/CodeSystem/variable-role_ChangeSetUTG427"
* version = "1.0.1"
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:oid:2.16.840.1.113883.4.642.1.1457"
* name = "EvidenceVariableRole_UTG247_ChangeSet"
* title = "EvidenceVariableRole UTG-247 Change Set"
* status = #active
* experimental = false
* publisher = "Health Level Seven International"
* contact.telecom[+].system = #url
* contact.telecom[=].value = "http://hl7.org"
* contact.telecom[+].system = #email
* contact.telecom[=].value = "hq@HL7.org"
* description = "Example of HL7 VariableRole code system Change Set based on UTG-427 https://jira.hl7.org/browse/UP-427"
* copyright = "This material derives from the HL7 Terminology (THO). THO is copyright ©1989+ Health Level Seven International and is made available under the CC0 designation. For more licensing information see: https://terminology.hl7.org/license"
* caseSensitive = true
* content = #fragment
* concept[+].code = #measuredVariableA
* concept[=].display = "measured variable A"
* concept[=].definition = "variable represents a first of two measured variables to be used in a measured variable that is a mathematical operation of two measured variables."
* concept[+].code = #measuredVariableB
* concept[=].display = "measured variable B"
* concept[=].definition = "variable represents a second of two measured variables to be used in a measured variable that is a mathematical operation of two measured variables."
* concept[+].code = #measuredVariableAB
* concept[=].display = "measured variable A to B"
* concept[=].definition = "variable represents a result of a mathematical operation of two measured variables."


---

File: repos/HL7_SLASH_termchangeset-ig/input/fsh/Example_LOINC_ChangeSet_Provenance.fsh

Instance: LOINCChangeSetProvenanceExample
InstanceOf: TerminologyChangeSetProvenance
Description: "Example of Provenance to support a LOINC Change Set"
* id = "52b1a1d2-80ab-460b-b5fc-341edd35b032"
* target.reference = "CodeSystem/loinc277attachmentsChangeSet"
* occurredPeriod.end = "2024-07-18"
* recorded = "2024-07-18T11:13:55+10:00"
* reason.coding.code = #METAMGT
* reason.coding.system = "http://terminology.hl7.org/CodeSystem/v3-ActReason"
* activity.coding.code = #UPDATE
* activity.coding.system = "http://terminology.hl7.org/CodeSystem/v3-DataOperation"
* agent[author].type.coding.code = #author
* agent[author].type.coding.system = "http://terminology.hl7.org/CodeSystem/provenance-participant-type"
* agent[author].who.display = "Raja Cholan"
* agent[custodian].type.coding.code = #custodian
* agent[custodian].type.coding.system = "http://terminology.hl7.org/CodeSystem/provenance-participant-type"
* agent[custodian].who.display = "Integrated Knowledge Management"
* entity[revision].role = #revision
* entity[revision].what.identifier.value = "http://loinc.org"
* entity[revision].what.display = "LOINC version 2.76"


---

File: repos/HL7_SLASH_termchangeset-ig/input/fsh/Example_LOINC_ChangeSet.fsh

Instance: LOINCChangeSetExample
InstanceOf: LOINCChangeSet
Description: "Example of LOINC Change Set including 3 new attachment terms from 2.77 release (103595-5, 103596-3, 103597-1)"
* id = "loinc277attachmentsChangeSet"
* url = "http://ikm.dev/changesets/CodeSystem/loinc277attachmentsChangeSet"
* version = "2.77"
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:oid:2.16.840.1.113883.6.1"
* name = "LOINC_277_Attachments_ChangeSet"
* title = "LOINC 2.77 Attachments Change Set for targetted redistribution"
* status = #active
* experimental = false
* publisher = "Integrated Knowledge Management"
* contact.telecom[+].system = #url
* contact.telecom[=].value = "http://ikm.dev"
* description = "Example of LOINC Change Set including all new Document Attachments defined in LOINC 2.77 for pre-adoption on 2.76 implementations"
* copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright ©1995-2021, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* caseSensitive = false
* compositional = false
* versionNeeded = false
* content = #fragment
* filter[+].code = #parent
* filter[=].description = "Allows for the selection of a set of codes based on their appearance in the LOINC Multiaxial Hierarchy. Parent selects immediate parent only. For example, the code '79190-5' has the parent 'LP379670-5'"
* filter[=].operator[+] = #=
* filter[=].value = "A Part code"
* filter[+].code = #child
* filter[=].description = "Allows for the selection of a set of codes based on their appearance in the LOINC Multiaxial Hierarchy. Child selects immediate children only. For example, the code 'LP379670-5' has the child '79190-5'. Only LOINC Parts have children; LOINC codes do not have any children because they are leaf nodes."
* filter[=].operator[+] = #=
* filter[=].value = "A comma separated list of Part or LOINC codes"
* filter[+].code = #copyright
* filter[=].description = "Allows for the inclusion or exclusion of LOINC codes that include 3rd party copyright notices. LOINC = only codes with a sole copyright by Regenstrief. 3rdParty = only codes with a 3rd party copyright in addition to the one from Regenstrief"
* filter[=].operator[+] = #=
* filter[=].value = "LOINC | 3rdParty"
* property[STATUS].code = #STATUS
* property[STATUS].uri = "http://loinc.org/property/STATUS"
* property[STATUS].description = "Status of the term. Within LOINC, codes with STATUS=DEPRECATED are considered inactive. Current values: ACTIVE, TRIAL, DISCOURAGED, and DEPRECATED"
* property[STATUS].type = #string
* property[COMPONENT].code = #COMPONENT
* property[COMPONENT].uri = "http://loinc.org/property/COMPONENT"
* property[COMPONENT].description = "First major axis-component or analyte: Analyte Name, Analyte sub-class, Challenge"
* property[COMPONENT].type = #Coding
* property[PROPERTY].code = #PROPERTY
* property[PROPERTY].uri = "http://loinc.org/property/PROPERTY"
* property[PROPERTY].description = "Second major axis-property observed: Kind of Property (also called kind of quantity)"
* property[PROPERTY].type = #Coding
* property[TIME_ASPCT].code = #TIME_ASPCT
* property[TIME_ASPCT].uri = "http://loinc.org/property/TIME_ASPCT"
* property[TIME_ASPCT].description = "Third major axis-timing of the measurement: Time Aspect (Point or moment in time vs. time interval)"
* property[TIME_ASPCT].type = #Coding
* property[SYSTEM].code = #SYSTEM
* property[SYSTEM].uri = "http://loinc.org/property/SYSTEM"
* property[SYSTEM].description = "Fourth major axis-type of specimen or system: System (Sample) Type"
* property[SYSTEM].type = #Coding
* property[SCALE_TYP].code = #SCALE_TYP
* property[SCALE_TYP].uri = "http://loinc.org/property/SCALE_TYP"
* property[SCALE_TYP].description = "Fifth major axis-scale of measurement: Type of Scale"
* property[SCALE_TYP].type = #Coding
* property[METHOD_TYP].code = #METHOD_TYP
* property[METHOD_TYP].uri = "http://loinc.org/property/METHOD_TYP"
* property[METHOD_TYP].description = "Sixth major axis-method of measurement: Type of Method"
* property[METHOD_TYP].type = #Coding
* property[CLASS].code = #CLASS
* property[CLASS].uri = "http://loinc.org/property/CLASS"
* property[CLASS].description = "An arbitrary classification of terms for grouping related observations together"
* property[CLASS].type = #Coding
* property[VersionLastChanged].code = #VersionLastChanged
* property[VersionLastChanged].uri = "http://loinc.org/property/VersionLastChanged"
* property[VersionLastChanged].description = "The LOINC version number in which the record has last changed. For new records, this field contains the same value as the VersionFirstReleased property."
* property[VersionLastChanged].type = #string
* property[CLASSTYPE].code = #CLASSTYPE
* property[CLASSTYPE].uri = "http://loinc.org/property/CLASSTYPE"
* property[CLASSTYPE].description = "1=Laboratory class; 2=Clinical class; 3=Claims attachments; 4=Surveys"
* property[CLASSTYPE].type = #string
* property[ORDER_OBS].code = #ORDER_OBS
* property[ORDER_OBS].uri = "http://loinc.org/property/ORDER_OBS"
* property[ORDER_OBS].description = "Provides users with an idea of the intended use of the term by categorizing it as an order only, observation only, or both"
* property[ORDER_OBS].type = #string
* property[HL7_ATTACHMENT_STRUCTURE].code = #HL7_ATTACHMENT_STRUCTURE
* property[HL7_ATTACHMENT_STRUCTURE].uri = "http://loinc.org/property/HL7_ATTACHMENT_STRUCTURE"
* property[HL7_ATTACHMENT_STRUCTURE].description = "This property is populated in collaboration with the HL7 Payer-Provider Exchange (PIE) Work Group (previously called Attachments Work Group) as described in the HL7 Attachment Specification: Supplement to Consolidated CDA Templated Guide."
* property[HL7_ATTACHMENT_STRUCTURE].type = #string
* property[VersionFirstReleased].code = #VersionFirstReleased
* property[VersionFirstReleased].uri = "http://loinc.org/property/VersionFirstReleased"
* property[VersionFirstReleased].description = "This is the LOINC version number in which this LOINC term was first published."
* property[VersionFirstReleased].type = #string
* property[ValidHL7AttachmentRequest].code = #ValidHL7AttachmentRequest
* property[ValidHL7AttachmentRequest].uri = "http://loinc.org/property/ValidHL7AttachmentRequest"
* property[ValidHL7AttachmentRequest].description = "A value of Y in this field indicates that this LOINC code can be sent by a payer as part of an HL7 Attachment request for additional information."
* property[ValidHL7AttachmentRequest].type = #string
* concept[+].id = "1c8f2f61-9160-46c7-9664-80ae4a5a94c3"
* concept[=].code = #103595-5
* concept[=].display = "Cert Med Neces"
* concept[=].definition = "Certificate of Medical Necessity"
* concept[=].property[CLASS].code = #CLASS
* concept[=].property[CLASS].valueCoding[+].code = #LP32888-7
* concept[=].property[CLASS].valueCoding[=].system = "http://loinc.org"
* concept[=].property[CLASS].valueCoding[=].display = "Doc"
* concept[=].property[VersionFirstReleased].code = #VersionFirstReleased
* concept[=].property[VersionFirstReleased].valueString = "2.77"
* concept[=].property[STATUS].code = #STATUS
* concept[=].property[STATUS].valueString = "ACTIVE"
* concept[=].property[CLASSTYPE].code = #CLASSTYPE
* concept[=].property[CLASSTYPE].valueString = "3"
* concept[=].property[ORDER_OBS].code = #ORDER_OBS
* concept[=].property[ORDER_OBS].valueString = "Both"
* concept[=].property[HL7_ATTACHMENT_STRUCTURE].code = #HL7_ATTACHMENT_STRUCTURE
* concept[=].property[HL7_ATTACHMENT_STRUCTURE].valueString = "No IG exists"
* concept[=].property[ValidHL7AttachmentRequest].code = #ValidHL7AttachmentRequest
* concept[=].property[ValidHL7AttachmentRequest].valueString = "Y"
* concept[=].property[VersionLastChanged].code = #VersionLastChanged
* concept[=].property[VersionLastChanged].valueString = "2.77"
* concept[=].property[COMPONENT].code = #COMPONENT
* concept[=].property[COMPONENT].valueCoding[+].code = #LP437323-1
* concept[=].property[COMPONENT].valueCoding[=].system = "http://loinc.org"
* concept[=].property[COMPONENT].valueCoding[=].display = "Certificate of medical necessity"
* concept[=].property[PROPERTY].code = #PROPERTY
* concept[=].property[PROPERTY].valueCoding[+].code = #LP6813-2
* concept[=].property[PROPERTY].valueCoding[=].system = "http://loinc.org"
* concept[=].property[PROPERTY].valueCoding[=].display = "Find"
* concept[=].property[TIME_ASPCT].code = #TIME_ASPCT
* concept[=].property[TIME_ASPCT].valueCoding[+].code = #LP6960-1
* concept[=].property[TIME_ASPCT].valueCoding[=].system = "http://loinc.org"
* concept[=].property[TIME_ASPCT].valueCoding[=].display = "Pt"
* concept[=].property[SYSTEM].code = #SYSTEM
* concept[=].property[SYSTEM].valueCoding[+].code = #LP310005-6
* concept[=].property[SYSTEM].valueCoding[=].system = "http://loinc.org"
* concept[=].property[SYSTEM].valueCoding[=].display = "^Patient"
* concept[=].property[SCALE_TYP].code = #SCALE_TYP
* concept[=].property[SCALE_TYP].valueCoding[+].code = #LP32888-7
* concept[=].property[SCALE_TYP].valueCoding[=].system = "http://loinc.org"
* concept[=].property[SCALE_TYP].valueCoding[=].display = "Doc"
* concept[+].id = "0ff172eb-d17d-4146-9581-ad45e4e62f0b"
* concept[=].code = #103596-3
* concept[=].display = "DME proof of delivery"
* concept[=].definition = "Durable medical equipment proof of delivery receipt"
* concept[=].property[CLASS].code = #CLASS
* concept[=].property[CLASS].valueCoding[+].code = #LP32888-7
* concept[=].property[CLASS].valueCoding[=].system = "http://loinc.org"
* concept[=].property[CLASS].valueCoding[=].display = "Doc"
* concept[=].property[VersionFirstReleased].code = #VersionFirstReleased
* concept[=].property[VersionFirstReleased].valueString = "2.77"
* concept[=].property[STATUS].code = #STATUS
* concept[=].property[STATUS].valueString = "ACTIVE"
* concept[=].property[CLASSTYPE].code = #CLASSTYPE
* concept[=].property[CLASSTYPE].valueString = "3"
* concept[=].property[ORDER_OBS].code = #ORDER_OBS
* concept[=].property[ORDER_OBS].valueString = "Observation"
* concept[=].property[HL7_ATTACHMENT_STRUCTURE].code = #HL7_ATTACHMENT_STRUCTURE
* concept[=].property[HL7_ATTACHMENT_STRUCTURE].valueString = "No IG exists"
* concept[=].property[ValidHL7AttachmentRequest].code = #ValidHL7AttachmentRequest
* concept[=].property[ValidHL7AttachmentRequest].valueString = "Y"
* concept[=].property[VersionLastChanged].code = #VersionLastChanged
* concept[=].property[VersionLastChanged].valueString = "2.77"
* concept[=].property[COMPONENT].code = #COMPONENT
* concept[=].property[COMPONENT].valueCoding[+].code = #LP437553-3
* concept[=].property[COMPONENT].valueCoding[=].system = "http://loinc.org"
* concept[=].property[COMPONENT].valueCoding[=].display = "Durable medical equipment proof of delivery receipt"
* concept[=].property[PROPERTY].code = #PROPERTY
* concept[=].property[PROPERTY].valueCoding[+].code = #LP6813-2
* concept[=].property[PROPERTY].valueCoding[=].system = "http://loinc.org"
* concept[=].property[PROPERTY].valueCoding[=].display = "Find"
* concept[=].property[TIME_ASPCT].code = #TIME_ASPCT
* concept[=].property[TIME_ASPCT].valueCoding[+].code = #LP6960-1
* concept[=].property[TIME_ASPCT].valueCoding[=].system = "http://loinc.org"
* concept[=].property[TIME_ASPCT].valueCoding[=].display = "Pt"
* concept[=].property[SYSTEM].code = #SYSTEM
* concept[=].property[SYSTEM].valueCoding[+].code = #LP310005-6
* concept[=].property[SYSTEM].valueCoding[=].system = "http://loinc.org"
* concept[=].property[SYSTEM].valueCoding[=].display = "^Patient"
* concept[=].property[SCALE_TYP].code = #SCALE_TYP
* concept[=].property[SCALE_TYP].valueCoding[+].code = #LP32888-7
* concept[=].property[SCALE_TYP].valueCoding[=].system = "http://loinc.org"
* concept[=].property[SCALE_TYP].valueCoding[=].display = "Doc"
* concept[+].id = "9ce55d17-eee1-412d-9ebd-8ef36c896f8b"
* concept[=].code = #103597-1
* concept[=].display = "Pain magt form/template"
* concept[=].definition = "Pain management form or template"
* concept[=].property[CLASS].code = #CLASS
* concept[=].property[CLASS].valueCoding[+].code = #LP32888-7
* concept[=].property[CLASS].valueCoding[=].system = "http://loinc.org"
* concept[=].property[CLASS].valueCoding[=].display = "Doc"
* concept[=].property[VersionFirstReleased].code = #VersionFirstReleased
* concept[=].property[VersionFirstReleased].valueString = "2.77"
* concept[=].property[STATUS].code = #STATUS
* concept[=].property[STATUS].valueString = "ACTIVE"
* concept[=].property[CLASSTYPE].code = #CLASSTYPE
* concept[=].property[CLASSTYPE].valueString = "3"
* concept[=].property[ORDER_OBS].code = #ORDER_OBS
* concept[=].property[ORDER_OBS].valueString = "Observation"
* concept[=].property[HL7_ATTACHMENT_STRUCTURE].code = #HL7_ATTACHMENT_STRUCTURE
* concept[=].property[HL7_ATTACHMENT_STRUCTURE].valueString = "No IG exists"
* concept[=].property[ValidHL7AttachmentRequest].code = #ValidHL7AttachmentRequest
* concept[=].property[ValidHL7AttachmentRequest].valueString = "Y"
* concept[=].property[VersionLastChanged].code = #VersionLastChanged
* concept[=].property[VersionLastChanged].valueString = "2.77"
* concept[=].property[COMPONENT].code = #COMPONENT
* concept[=].property[COMPONENT].valueCoding[+].code = #LP437336-3
* concept[=].property[COMPONENT].valueCoding[=].system = "http://loinc.org"
* concept[=].property[COMPONENT].valueCoding[=].display = "Pain management form or template"
* concept[=].property[PROPERTY].code = #PROPERTY
* concept[=].property[PROPERTY].valueCoding[+].code = #LP6813-2
* concept[=].property[PROPERTY].valueCoding[=].system = "http://loinc.org"
* concept[=].property[PROPERTY].valueCoding[=].display = "Find"
* concept[=].property[TIME_ASPCT].code = #TIME_ASPCT
* concept[=].property[TIME_ASPCT].valueCoding[+].code = #LP6960-1
* concept[=].property[TIME_ASPCT].valueCoding[=].system = "http://loinc.org"
* concept[=].property[TIME_ASPCT].valueCoding[=].display = "Pt"
* concept[=].property[SYSTEM].code = #SYSTEM
* concept[=].property[SYSTEM].valueCoding[+].code = #LP310005-6
* concept[=].property[SYSTEM].valueCoding[=].system = "http://loinc.org"
* concept[=].property[SYSTEM].valueCoding[=].display = "^Patient"
* concept[=].property[SCALE_TYP].code = #SCALE_TYP
* concept[=].property[SCALE_TYP].valueCoding[+].code = #LP32888-7
* concept[=].property[SCALE_TYP].valueCoding[=].system = "http://loinc.org"
* concept[=].property[SCALE_TYP].valueCoding[=].display = "Doc"




---

File: repos/HL7_SLASH_termchangeset-ig/input/fsh/Example_SNOMED_ChangeSet_Provenance.fsh

Instance: SNOMEDChangeSetProvenanceExample
InstanceOf: TerminologyChangeSetProvenance
Description: "Example of Provenance to support a SNOMED CT Change Set"
* id = "053f26d4-b805-4ff2-8c42-866459d5f1f4"
* target.reference = "CodeSystem/snomedct413839001ChangeSet"
* occurredPeriod.end = "2020-05-18"
* recorded = "2020-05-18T11:13:55+10:00"
* reason.coding.code = #METAMGT
* reason.coding.system = "http://terminology.hl7.org/CodeSystem/v3-ActReason"
* activity.coding.code = #UPDATE
* activity.coding.system = "http://terminology.hl7.org/CodeSystem/v3-DataOperation"
* agent[author].type.coding.code = #author
* agent[author].type.coding.system = "http://terminology.hl7.org/CodeSystem/provenance-participant-type"
* agent[author].who.display = "Raja Cholan"
* agent[custodian].type.coding.code = #custodian
* agent[custodian].type.coding.system = "http://terminology.hl7.org/CodeSystem/provenance-participant-type"
* agent[custodian].who.display = "Integrated Knowledge Management"
* entity[revision].role = #revision
* entity[revision].what.identifier.value = "http://snomed.info/sct/900000000000207008/version/20190901"
* entity[revision].what.display = "SNOMED CT International Edition, September 2019 Edition"


---

File: repos/HL7_SLASH_termchangeset-ig/input/fsh/Example_SNOMED_ChangeSet.fsh

Instance: SNOMEDChangeSetExample
InstanceOf: SNOMEDChangeSet
Description: "Example of SNOMED CT Change Set"
* id = "snomedct413839001ChangeSet"
* version = "20230901.1"
* url = "http://ikm.dev/changesets/CodeSystem/SNOMEDCT_413839001_ChronicLungDisease_ChangeSet"
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:oid:2.16.840.1.113883.6.96"
* name = "SNOMEDCT_413839001_ChronicLungDisease_ChangeSet_46dc8ea230544ceba51145f774fe9fdd"
* title = "SNOMED CT 413839001 Chronic lung disease (Disorder) Change Set 46dc8ea230544ceba51145f774fe9fdd"
* status = #active
* experimental = false
* publisher = "Integrated Knowledge Management"
* hierarchyMeaning = #is-a
* contact.telecom[+].system = #url
* contact.telecom[=].value = "http://ikm.dev"
* description = "Example of SNOMED CT Change Set including an update to the 413839001 Chronic lung disease (Disorder) concept"
* copyright = "Copyright-free government work developed using SNOMED CT content under affiliate license agreement. © 2002-2016 International Health Terminology Standards Development Organisation (IHTSDO). All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. \"SNOMED\" and \"SNOMED CT\" are registered trademarks of the IHTSDO http://www.ihtsdo.org/snomed-ct/get-snomed-ct"
* caseSensitive = true
* compositional = true
* versionNeeded = false
* content = #fragment
* filter[+].code = #concept
* filter[=].description = "Filter that includes concepts based on their logical definition. e.g. [concept] [is-a] [x] - include all concepts with an is-a relationship to concept x, or [concept] [in] [x]- include all concepts in the reference set identified by concept x"
* filter[=].operator[+] = #is-a
* filter[=].operator[+] = #in
* filter[=].value = "A SNOMED CT code"
* filter[+].code = #expression
* filter[=].description = "The result of the filter is the result of executing the given SNOMED CT Expression Constraint"
* filter[=].operator[+] = #=
* filter[=].value = "A SNOMED CT ECL expression (see http://snomed.org/ecl)"
* filter[+].code = #expressions
* filter[=].description = "Whether post-coordinated expressions are included in the value set"
* filter[=].operator[+] = #=
* filter[=].value = "true or false"
* property[+].code = #inactive
* property[=].uri = "http://snomed.info/field/Concept.active"
* property[=].description = "Whether the code is active or not (defaults to false). Not the same as deprecated"
* property[=].type = #boolean
* property[+].code = #definitionStatusId
* property[=].uri = "http://snomed.info/field/Concept.definitionStatusId"
* property[=].description = "Either of the codes that are descendants of 900000000000444006"
* property[=].type = #Coding
* property[+].code = #parent
* property[=].uri = "http://.........?"
* property[=].description = "A SNOMED CT concept id that has the target of a direct is-a relationship from the concept"
* property[=].type = #Coding
* property[+].code = #moduleId
* property[=].uri = "http://snomed.info/field/Concept.moduleId"
* property[=].description = "The SNOMED CT concept id of the module that the concept belongs to."
* property[=].type = #Coding
* property[+].code = #"Due to"
* property[=].uri = "http://snomed.info/id/42752001"
* property[=].type = #Coding
* property[+].code = #"Associated with"
* property[=].uri = "http://snomed.info/id/47429007"
* property[=].type = #Coding
* property[+].code = #"Associated morphology"
* property[=].uri = "http://snomed.info/id/116676008"
* property[=].type = #Coding
* property[+].code = #"Has specimen"
* property[=].uri = "http://snomed.info/id/116686009"
* property[=].type = #Coding
* property[+].code = #"Specimen source morphology"
* property[=].uri = "http://snomed.info/id/118168003"
* property[=].type = #Coding
* property[+].code = #"Specimen source topography"
* property[=].uri = "http://snomed.info/id/118169006"
* property[=].type = #Coding
* property[+].code = #"Specimen source identity"
* property[=].uri = "http://snomed.info/id/118170007"
* property[=].type = #Coding
* property[+].code = #"Specimen procedure"
* property[=].uri = "http://snomed.info/id/118171006"
* property[=].type = #Coding
* property[+].code = #"Part of"
* property[=].uri = "http://snomed.info/id/123005000"
* property[=].type = #Coding
* property[+].code = #"Has active ingredient"
* property[=].uri = "http://snomed.info/id/127489000"
* property[=].type = #Coding
* property[+].code = #"Subject of information"
* property[=].uri = "http://snomed.info/id/131195008"
* property[=].type = #Coding
* property[+].code = #"Causative agent"
* property[=].uri = "http://snomed.info/id/246075003"
* property[=].type = #Coding
* property[+].code = #"Associated finding"
* property[=].uri = "http://snomed.info/id/246090004"
* property[=].type = #Coding
* property[+].code = #Component
* property[=].uri = "http://snomed.info/id/246093002"
* property[=].type = #Coding
* property[+].code = #Severity
* property[=].uri = "http://snomed.info/id/246112005"
* property[=].type = #Coding
* property[+].code = #Occurrence
* property[=].uri = "http://snomed.info/id/246454002"
* property[=].type = #Coding
* property[+].code = #Episodicity
* property[=].uri = "http://snomed.info/id/246456000"
* property[=].type = #Coding
* property[+].code = #Technique
* property[=].uri = "http://snomed.info/id/246501002"
* property[=].type = #Coding
* property[+].code = #"Revision status"
* property[=].uri = "http://snomed.info/id/246513007"
* property[=].type = #Coding
* property[+].code = #Units
* property[=].uri = "http://snomed.info/id/246514001"
* property[=].type = #Coding
* property[+].code = #After
* property[=].uri = "http://snomed.info/id/255234002"
* property[=].type = #Coding
* property[+].code = #Access
* property[=].uri = "http://snomed.info/id/260507000"
* property[=].type = #Coding
* property[+].code = #Method
* property[=].uri = "http://snomed.info/id/260686004"
* property[=].type = #Coding
* property[+].code = #Priority
* property[=].uri = "http://snomed.info/id/260870009"
* property[=].type = #Coding
* property[+].code = #"Clinical course"
* property[=].uri = "http://snomed.info/id/263502005"
* property[=].type = #Coding
* property[+].code = #Laterality
* property[=].uri = "http://snomed.info/id/272741003"
* property[=].type = #Coding
* property[+].code = #"Associated procedure"
* property[=].uri = "http://snomed.info/id/363589002"
* property[=].type = #Coding
* property[+].code = #"Finding site"
* property[=].uri = "http://snomed.info/id/363698007"
* property[=].type = #Coding
* property[+].code = #"Direct morphology"
* property[=].uri = "http://snomed.info/id/363700003"
* property[=].type = #Coding
* property[+].code = #"Direct substance"
* property[=].uri = "http://snomed.info/id/363701004"
* property[=].type = #Coding
* property[+].code = #"Has focus"
* property[=].uri = "http://snomed.info/id/363702006"
* property[=].type = #Coding
* property[+].code = #"Has intent"
* property[=].uri = "http://snomed.info/id/363703001"
* property[=].type = #Coding
* property[+].code = #"Procedure site"
* property[=].uri = "http://snomed.info/id/363704007"
* property[=].type = #Coding
* property[+].code = #"Has definitional manifestation"
* property[=].uri = "http://snomed.info/id/363705008"
* property[=].type = #Coding
* property[+].code = #"Indirect morphology"
* property[=].uri = "http://snomed.info/id/363709002"
* property[=].type = #Coding
* property[+].code = #"Indirect device"
* property[=].uri = "http://snomed.info/id/363710007"
* property[=].type = #Coding
* property[+].code = #"Has interpretation"
* property[=].uri = "http://snomed.info/id/363713009"
* property[=].type = #Coding
* property[+].code = #Interprets
* property[=].uri = "http://snomed.info/id/363714003"
* property[=].type = #Coding
* property[+].code = #"Measurement method"
* property[=].uri = "http://snomed.info/id/370129005"
* property[=].type = #Coding
* property[+].code = #Property
* property[=].uri = "http://snomed.info/id/370130000"
* property[=].type = #Coding
* property[+].code = #"Recipient category"
* property[=].uri = "http://snomed.info/id/370131001"
* property[=].type = #Coding
* property[+].code = #"Scale type"
* property[=].uri = "http://snomed.info/id/370132008"
* property[=].type = #Coding
* property[+].code = #"Specimen substance"
* property[=].uri = "http://snomed.info/id/370133003"
* property[=].type = #Coding
* property[+].code = #"Time aspect"
* property[=].uri = "http://snomed.info/id/370134009"
* property[=].type = #Coding
* property[+].code = #"Pathological process"
* property[=].uri = "http://snomed.info/id/370135005"
* property[=].type = #Coding
* property[+].code = #"Procedure site - Direct"
* property[=].uri = "http://snomed.info/id/405813007"
* property[=].type = #Coding
* property[+].code = #"Procedure site - Indirect"
* property[=].uri = "http://snomed.info/id/405814001"
* property[=].type = #Coding
* property[+].code = #"Procedure device"
* property[=].uri = "http://snomed.info/id/405815000"
* property[=].type = #Coding
* property[+].code = #"Procedure morphology"
* property[=].uri = "http://snomed.info/id/405816004"
* property[=].type = #Coding
* property[+].code = #"Finding context"
* property[=].uri = "http://snomed.info/id/408729009"
* property[=].type = #Coding
* property[+].code = #"Temporal context"
* property[=].uri = "http://snomed.info/id/408731000"
* property[=].type = #Coding
* property[+].code = #"Subject relationship context"
* property[=].uri = "http://snomed.info/id/408732007"
* property[=].type = #Coding
* property[+].code = #"Route of administration"
* property[=].uri = "http://snomed.info/id/410675002"
* property[=].type = #Coding
* property[+].code = #"Has dose form"
* property[=].uri = "http://snomed.info/id/411116001"
* property[=].type = #Coding
* property[+].code = #"Finding method"
* property[=].uri = "http://snomed.info/id/418775008"
* property[=].type = #Coding
* property[+].code = #"Finding informer"
* property[=].uri = "http://snomed.info/id/419066007"
* property[=].type = #Coding
* property[+].code = #"Using device"
* property[=].uri = "http://snomed.info/id/424226004"
* property[=].type = #Coding
* property[+].code = #"Using energy"
* property[=].uri = "http://snomed.info/id/424244007"
* property[=].type = #Coding
* property[+].code = #"Using substance"
* property[=].uri = "http://snomed.info/id/424361007"
* property[=].type = #Coding
* property[+].code = #"Surgical approach"
* property[=].uri = "http://snomed.info/id/424876005"
* property[=].type = #Coding
* property[+].code = #"Using access device"
* property[=].uri = "http://snomed.info/id/425391005"
* property[=].type = #Coding
* property[+].code = #"Property type"
* property[=].uri = "http://snomed.info/id/704318007"
* property[=].type = #Coding
* property[+].code = #"Inheres in"
* property[=].uri = "http://snomed.info/id/704319004"
* property[=].type = #Coding
* property[+].code = #Towards
* property[=].uri = "http://snomed.info/id/704320005"
* property[=].type = #Coding
* property[+].code = #Characterizes
* property[=].uri = "http://snomed.info/id/704321009"
* property[=].type = #Coding
* property[+].code = #"Process agent"
* property[=].uri = "http://snomed.info/id/704322002"
* property[=].type = #Coding
* property[+].code = #"Process duration"
* property[=].uri = "http://snomed.info/id/704323007"
* property[=].type = #Coding
* property[+].code = #"Process output"
* property[=].uri = "http://snomed.info/id/704324001"
* property[=].type = #Coding
* property[+].code = #"Relative to"
* property[=].uri = "http://snomed.info/id/704325000"
* property[=].type = #Coding
* property[+].code = #Precondition
* property[=].uri = "http://snomed.info/id/704326004"
* property[=].type = #Coding
* property[+].code = #"Direct site"
* property[=].uri = "http://snomed.info/id/704327008"
* property[=].type = #Coding
* property[+].code = #"Specified by"
* property[=].uri = "http://snomed.info/id/704346009"
* property[=].type = #Coding
* property[+].code = #Observes
* property[=].uri = "http://snomed.info/id/704347000"
* property[=].type = #Coding
* property[+].code = #"Is about"
* property[=].uri = "http://snomed.info/id/704647008"
* property[=].type = #Coding
* property[+].code = #Defined
* property[=].uri = "http://snomed.info/id/900000000000073002"
* property[=].type = #boolean
* concept[+].id = "61da7e50-f606-5ba0-a0df-83fd524951e7"
* concept[=].code = #413839001
* concept[=].display = "Chronic lung disease (Disorder)"
* concept[=].definition = "Chronic lung disease (Disorder)"
* concept[=].designation[+].language = #en-US
* concept[=].designation[=].extension[caseSensitivity].url = "http://hl7.org/fhir/uv/termchangeset/StructureDefinition/description-case-sensitivity"
* concept[=].designation[=].extension[caseSensitivity].valueCodeableConcept.coding.code = #900000000000020002
* concept[=].designation[=].extension[caseSensitivity].valueCodeableConcept.coding.system = "http://snomed.info/sct"
* concept[=].designation[=].extension[caseSensitivity].valueCodeableConcept.coding.display = "Only initial character case insensitive (core metadata concept)"
* concept[=].designation[=].extension[acceptability].url = "http://hl7.org/fhir/uv/termchangeset/StructureDefinition/description-acceptability"
* concept[=].designation[=].extension[acceptability].valueCodeableConcept.coding.code = #900000000000548007
* concept[=].designation[=].extension[acceptability].valueCodeableConcept.coding.system = "http://snomed.info/sct"
* concept[=].designation[=].extension[acceptability].valueCodeableConcept.coding.display = "Preferred (foundation metadata concept)"
* concept[=].designation[=].extension[dialect].url = "http://hl7.org/fhir/uv/termchangeset/StructureDefinition/description-dialect"
* concept[=].designation[=].extension[dialect].valueCodeableConcept.coding.code = #900000000000509007
* concept[=].designation[=].extension[dialect].valueCodeableConcept.coding.system = "http://snomed.info/sct"
* concept[=].designation[=].extension[dialect].valueCodeableConcept.coding.display = "United States of America English language reference set"
* concept[=].designation[=].use[+].system = "http://snomed.info/sct"
* concept[=].designation[=].use[=].code = #900000000000013009
* concept[=].designation[=].use[=].display = "Synonym"
* concept[=].designation[=].value = "Chronic lung disease"
* concept[=].property[+].code = #"Finding site"
* concept[=].property[=].extension[DefiningRelationshipType].url = "http://hl7.org/fhir/uv/termchangeset/StructureDefinition/defining-relationship-type"
* concept[=].property[=].extension[DefiningRelationshipType].valueCodeableConcept.coding.code = #900000000000010007
* concept[=].property[=].extension[DefiningRelationshipType].valueCodeableConcept.coding.system = "http://snomed.info/sct"
* concept[=].property[=].extension[DefiningRelationshipType].valueCodeableConcept.coding.display = "Stated relationship (core metadata concept)"
* concept[=].property[=].extension[elProfileSetOperator].url = "http://hl7.org/fhir/uv/termchangeset/StructureDefinition/el-profile-set-operator"
* concept[=].property[=].extension[elProfileSetOperator].valueCodeableConcept.coding.code = #900000000000073002
* concept[=].property[=].extension[elProfileSetOperator].valueCodeableConcept.coding.system = "http://snomed.info/sct"
* concept[=].property[=].extension[elProfileSetOperator].valueCodeableConcept.coding.display = "Sufficiently defined by necessary conditions definition status (core metadata concept)"
* concept[=].property[=].extension[roleGroup].url = "http://hl7.org/fhir/uv/termchangeset/StructureDefinition/role-group"
* concept[=].property[=].extension[roleGroup].valueInteger = 1
* concept[=].property[=].valueCoding[+].system = "http://snomed.info/sct"
* concept[=].property[=].valueCoding[=].code = #39607008
* concept[=].property[=].valueCoding[=].display = "Lung Structure"
* concept[=].property[+].code = #"Clinical course"
* concept[=].property[=].extension[DefiningRelationshipType].url = "http://hl7.org/fhir/uv/termchangeset/StructureDefinition/defining-relationship-type"
* concept[=].property[=].extension[DefiningRelationshipType].valueCodeableConcept.coding.code = #900000000000010007
* concept[=].property[=].extension[DefiningRelationshipType].valueCodeableConcept.coding.system = "http://snomed.info/sct"
* concept[=].property[=].extension[DefiningRelationshipType].valueCodeableConcept.coding.display = "Stated relationship (core metadata concept)"
* concept[=].property[=].extension[elProfileSetOperator].url = "http://hl7.org/fhir/uv/termchangeset/StructureDefinition/el-profile-set-operator"
* concept[=].property[=].extension[elProfileSetOperator].valueCodeableConcept.coding.code = #900000000000073002
* concept[=].property[=].extension[elProfileSetOperator].valueCodeableConcept.coding.system = "http://snomed.info/sct"
* concept[=].property[=].extension[elProfileSetOperator].valueCodeableConcept.coding.display = "Sufficiently defined by necessary conditions definition status (core metadata concept)"
* concept[=].property[=].extension[roleGroup].url = "http://hl7.org/fhir/uv/termchangeset/StructureDefinition/role-group"
* concept[=].property[=].extension[roleGroup].valueInteger = 2
* concept[=].property[=].valueCoding[+].system = "http://snomed.info/sct"
* concept[=].property[=].valueCoding[=].code = #90734009
* concept[=].property[=].valueCoding[=].display = "Chronic"
* concept[=].property[+].code = #parent
* concept[=].property[=].extension[DefiningRelationshipType].url = "http://hl7.org/fhir/uv/termchangeset/StructureDefinition/defining-relationship-type"
* concept[=].property[=].extension[DefiningRelationshipType].valueCodeableConcept.coding.code = #900000000000010007
* concept[=].property[=].extension[DefiningRelationshipType].valueCodeableConcept.coding.system = "http://snomed.info/sct"
* concept[=].property[=].extension[DefiningRelationshipType].valueCodeableConcept.coding.display = "Stated relationship (core metadata concept)"
* concept[=].property[=].extension[elProfileSetOperator].url = "http://hl7.org/fhir/uv/termchangeset/StructureDefinition/el-profile-set-operator"
* concept[=].property[=].extension[elProfileSetOperator].valueCodeableConcept.coding.code = #900000000000073002
* concept[=].property[=].extension[elProfileSetOperator].valueCodeableConcept.coding.system = "http://snomed.info/sct"
* concept[=].property[=].extension[elProfileSetOperator].valueCodeableConcept.coding.display = "Sufficiently defined by necessary conditions definition status (core metadata concept)"
* concept[=].property[=].valueCoding[+].system = "http://snomed.info/sct"
* concept[=].property[=].valueCoding[=].code = #19829001
* concept[=].property[=].valueCoding[=].display = "Disorder of lung (disorder)"
* concept[=].property[+].code = #inactive
* concept[=].property[=].extension[DefiningRelationshipType].url = "http://hl7.org/fhir/uv/termchangeset/StructureDefinition/defining-relationship-type"
* concept[=].property[=].extension[DefiningRelationshipType].valueCodeableConcept.coding.code = #900000000000010007
* concept[=].property[=].extension[DefiningRelationshipType].valueCodeableConcept.coding.system = "http://snomed.info/sct"
* concept[=].property[=].extension[DefiningRelationshipType].valueCodeableConcept.coding.display = "Stated relationship (core metadata concept)"
* concept[=].property[=].extension[elProfileSetOperator].url = "http://hl7.org/fhir/uv/termchangeset/StructureDefinition/el-profile-set-operator"
* concept[=].property[=].extension[elProfileSetOperator].valueCodeableConcept.coding.code = #900000000000073002
* concept[=].property[=].extension[elProfileSetOperator].valueCodeableConcept.coding.system = "http://snomed.info/sct"
* concept[=].property[=].extension[elProfileSetOperator].valueCodeableConcept.coding.display = "Sufficiently defined by necessary conditions definition status (core metadata concept)"
* concept[=].property[=].valueBoolean = false
* concept[=].property[+].code = #Defined
* concept[=].property[=].extension[DefiningRelationshipType].url = "http://hl7.org/fhir/uv/termchangeset/StructureDefinition/defining-relationship-type"
* concept[=].property[=].extension[DefiningRelationshipType].valueCodeableConcept.coding.code = #900000000000010007
* concept[=].property[=].extension[DefiningRelationshipType].valueCodeableConcept.coding.system = "http://snomed.info/sct"
* concept[=].property[=].extension[DefiningRelationshipType].valueCodeableConcept.coding.display = "Stated relationship (core metadata concept)"
* concept[=].property[=].extension[elProfileSetOperator].url = "http://hl7.org/fhir/uv/termchangeset/StructureDefinition/el-profile-set-operator"
* concept[=].property[=].extension[elProfileSetOperator].valueCodeableConcept.coding.code = #900000000000073002
* concept[=].property[=].extension[elProfileSetOperator].valueCodeableConcept.coding.system = "http://snomed.info/sct"
* concept[=].property[=].extension[elProfileSetOperator].valueCodeableConcept.coding.display = "Sufficiently defined by necessary conditions definition status (core metadata concept)"
* concept[=].property[=].valueBoolean = false


---

File: repos/HL7_SLASH_termchangeset-ig/input/fsh/Extensions.fsh

Extension: SNOMEDDescriptionsCaseSensitivity
Id:        description-case-sensitivity
Title:     "Description Case Sensitivity"
Description: "Coded value to identify what case sensitivity is reflected in description"
// Limit the context to CodeSystem.concept.designation
* ^context[+].type = #element
* ^context[=].expression = "CodeSystem.concept.designation"
* value[x] only CodeableConcept
* value[x] from CaseSignificanceVS (extensible)

Extension: SNOMEDDescriptionAcceptability
Id:        description-acceptability
Title:     "Description Acceptability"
Description: "Boolean value to convey if a designation is case sensitive or not"
// Limit the context to CodeSystem.concept.designation
* ^context[+].type = #element
* ^context[=].expression = "CodeSystem.concept.designation"
* value[x] only CodeableConcept
* value[x] from DescriptionAcceptabilityVS (extensible)

Extension: SNOMEDRoleGroup
Id:        role-group
Title:     "SNOMED Role Group"
Description: "Where multiple property groupings are assigned for a particular concept, this identifies the group to which this property belongs.  See also SNOMED concept 609096000 Role group (attribute)"
// Limit the context to CodeSystem.concept.property
* ^context[+].type = #element
* ^context[=].expression = "CodeSystem.concept.property"
* value[x] only integer

Extension: DefiningRelationshipType
Id:	   defining-relationship-type
Title:	   "Defining Relationship Type"
Description: "Indicator to distinguish between axioms explicitly stated vs. inferred by a reasoner or other logical processes"
// Limit the context to CodeSystem.concept.property
* ^context[+].type = #element
* ^context[=].expression = "CodeSystem.concept.property"
* value[x] only CodeableConcept
* value[x] from DefiningRelationshipTypeVS (extensible)

Extension: ElProfileSetOperator
Id:	   el-profile-set-operator
Title:	   "EL Profile Set Operator"
Description: "EL++ profile to describe the axiom as being part of the Necessary vs. Sufficient set for defining the concept"
// Limit the context to CodeSystem.concept.property
* ^context[+].type = #element
* ^context[=].expression = "CodeSystem.concept.property"
* value[x] only CodeableConcept
* value[x] from ELProfileSetOperatorVS (extensible)

Extension: DescriptionDialect
Id:	   description-dialect
Title:	   "Description Dialect"
Description: "Subcategorization of language"
// Limit the context to CodeSystem.concept.designation
* ^context[+].type = #element
* ^context[=].expression = "CodeSystem.concept.designation"
* value[x] only CodeableConcept
* value[x] from DialectVS (extensible)



---

File: repos/HL7_SLASH_termchangeset-ig/input/fsh/Profile_CodeSystem_ChangeSet.fsh

Profile: ChangeSet
Id: changeset-profile
Parent: http://hl7.org/fhir/StructureDefinition/shareablecodesystem
Title: "Terminology Change Set (CodeSystem)"
Description: "Profile of CodeSystem to enable lossless representation of a terminology change set aligned with Tinkar information model requirements"
* ^version = "0.1.0"
* ^status = #draft
* ^experimental = false
* ^date = "2024-08-11"
* ^publisher = "HL7 International - Terminology Infrastructure Work Group"
* ^contact[0].telecom[0].system = #url
* ^contact[0].telecom[0].value = "http://hl7.org/Special/committees/vocab/index.cfm"
* ^mapping[+].identity = "tinkar"
* ^mapping[=].uri = "https://hl7.org/fhir/uv/tinkar"
* ^mapping[=].name = "Tinkar Reference Model"
* url ^short = "Canonical identifier for this code system, represented as a URI (globally unique) (Coding.system).  NOTE: Where not specified by an SDO-specific policy (such as SNOMED’s extension process), change sets associated with locally-maintained extensions should include a url clearly identifying the extension as published under the implementer’s authority, and not the SDO."
* identifier 1..1
* identifier.value ^mapping.identity = "tinkar"
* identifier.value ^mapping.map = "IDENTIFIER_SOURCE"
* version ^short = "Business version of the code system (Coding.version).  NOTE: where not specified by an SDO-specific policy, it is recommended that implementers consider aligning to HL7 terminology versioning approach."
* name ^short = "Name for this code system (computer friendly). Should clearly identify the CodeSystem as a Change Set and ideally convey both the source terminology from which it was derived and a notion of its contents."
* title 1..1
* title ^short = "Name for this code system (human friendly). Should clearly identify the CodeSystem as a Change Set and ideally convey both the source terminology from which it was derived and a notion of its contents."
* publisher 1..1
* description ^short = "Natural language description of the code system. Should provide a robust inventory of the contents of the Change Set"
* copyright 1..1
* copyright ^comment = "... Sometimes, the copyright differs between the code system and the codes that are included. The copyright statement should clearly differentiate between these when required."
* hierarchyMeaning ^short = "NOTE: As a terminology change set should not be fundamentally altering the design and operation of the terminology as a whole, the hierarchyMeaning, if included, should be consistent with the value provided for a CodeSystem representing the entire terminology."
* content 1..1
* content only code
* content = #fragment (exactly)
* content ^short = "Change Set CodeSystem resources are most appropriately described as a FRAGMENT"
* content ^definition = "This codes system profile contains only those concepts included in an incremental Change Set for a terminology"
* property 0..* MS
* property ^short = "Additional information supplied about each concept.  Property values should follow the guidance available in the terminology-specific links in the 'Use with HL7 Standards' column within the [HL7 Terminology External Code Systems page](https://terminology.hl7.org/external_terminologies.html)."
* property ^definition = "A property defines additional semantic detail for each concept included in the change set"
* property ^comment = "All properties referenced in the definitions of concepts within the change set must be defined first as a CodeSystem.property"
* property.code 1..1
* property.code ^short = "Identifies the property on the concepts, and when referred to in operations"
* property.code ^definition = "A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters."
* property.uri 0..1 MS
* property.uri ^short = "Formal identifier for the property"
* property.uri ^definition = "Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system."
* property.uri ^mustSupport = false
* property.description 0..1 MS
* property.description ^short = "Why the property is defined, and/or what it conveys"
* property.description ^definition = "A description of the property- why it is defined, and how its value might be used."
* property.type 1..1
* property.type only code
* property.type ^short = "code | Coding | string | integer | boolean | dateTime"
* property.type ^definition = "The type of the property value. Properties of type \"code\" contain a code defined by the code system (e.g. a reference to anotherr defined concept)."
* concept 1..*
* concept ^short = "Concepts in the change set for the code system"
* concept ^definition = "Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meaning of the hierarchical relationships are."
* concept ^comment = "For a change set, concepts must be defined and included in the CodeSystem instance"
* concept.id ^short = "Unique internal identifier maintained by the entity distributing the change set for the concept represented by the terminology-specific concept.code"
* concept.id ^mapping.identity = "tinkar"
* concept.id ^mapping.map = "Identifier Value of Identifier Semantic where Identifier Source = UNIVERSALLY_UNIQUE_IDENTIFIER"
* concept.code 1..1
* concept.code ^short = "Code that identifies concept"
* concept.code ^definition = "A code - a text symbol - that uniquely identifies the concept within the code system."
* concept.code ^mapping.identity = "tinkar"
* concept.code ^mapping.map = "Identifier Value of Identifier Semantic where Identifier Source = [Source CodeSystem]"
* concept.display 1..1
* concept.display ^short = "Text to display to the user representing the concept"
* concept.display ^definition = "A human readable string that is the recommended default way to present this concept to a user."
* concept.display ^mapping.identity = "tinkar"
* concept.display ^mapping.map = "First TEXT_FOR_DESCRIPTION of Description Semantic where DESCRIPTION_TYPE = FULLY_QUALIFIED_NAME_DESCRIPTION_TYPE"
* concept.definition 1..1
* concept.definition ^short = "Formal definition"
* concept.definition ^definition = "The formal definition of the concept. The code system resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept."
* concept.definition ^mustSupport = false
* concept.designation 0..*
* concept.designation ^mapping.identity = "tinkar"
* concept.designation ^mapping.map = "(Description Semantics + US Dialect Semantics/GB Dialect Semantics)"
* concept.designation.extension contains
	description-case-sensitivity named caseSensitivity 0..1 and
	description-acceptability named acceptability 0..1 and
	description-dialect named dialect 0..1
* concept.designation.extension[caseSensitivity] ^mapping.identity = "tinkar"
* concept.designation.extension[caseSensitivity] ^mapping.map = "DESCRIPTION_CASE_SIGNIFICANCE of Description Semantic"
* concept.designation.extension[acceptability] ^mapping.identity = "tinkar"
* concept.designation.extension[acceptability] ^mapping.map = "DESCRIPTION_ACCEPTABILITY of US Dialect Semantic/GB Dialect Semantic referencing the Descrption Semantic"
* concept.designation.language 0..1
* concept.designation.language ^short = "Human language of the designation"
* concept.designation.language ^definition = "The language this designation is defined for."
* concept.designation.language ^comment = "In the absence of a language, the resource language applies."
* concept.designation.language ^mustSupport = false
* concept.designation.language ^mapping.identity = "tinkar"
* concept.designation.language ^mapping.map = "LANGUAGE of Description Semantic"
* concept.designation.use 0..1
* concept.designation.use ^short = "Details how this designation would be used"
* concept.designation.use ^definition = "A code that details how this designation would be used."
* concept.designation.use ^comment = "If no use is provided, the designation can be assumed to be suitable for general display to a human user."
* concept.designation.use ^mustSupport = false
* concept.designation.use ^mapping.identity = "tinkar"
* concept.designation.use ^mapping.map = "DESCRIPTION_TYPE of Description Semantic"
* concept.designation.value 1..1
* concept.designation.value ^short = "The text value for this designation"
* concept.designation.value ^definition = "The text value for this designation."
* concept.designation.value ^mustSupport = false
* concept.designation.value ^mapping.identity = "tinkar"
* concept.designation.value ^mapping.map = "TEXT_FOR_DESCRIPTION of Description Semantic"
* concept.property 0..* MS
* concept.property ^mapping.identity = "tinkar"
* concept.property ^mapping.map = "(Stated Definition Semantics + Inferred Definition Semantics) EL++ (Stated/Inferred) Terminological Axioms inside the DiTree"
* concept.property ^short = "Property value for the concept"
* concept.property ^definition = "A property value for this concept."
* concept.property.extension contains
	defining-relationship-type named DefiningRelationshipType 0..1 and
	el-profile-set-operator named elProfileSetOperator 0..1 and
	role-group named roleGroup 0..1
* concept.property.extension[roleGroup] ^mapping.identity = "tinkar"
* concept.property.extension[roleGroup] ^mapping.map = "Integer representation of the ROLE_GROUP as a number in the DiTree"
* concept.property.extension[DefiningRelationshipType] ^mapping.identity = "tinkar"
* concept.property.extension[DefiningRelationshipType] ^mapping.map = "Is a Stated Definition Semantic or Inferred Definition Semantic"
* concept.property.extension[elProfileSetOperator] ^mapping.identity = "tinkar"
* concept.property.extension[elProfileSetOperator] ^mapping.map = "Corresponding Set (Sufficient/Necessary/Implication) Value of the Axiom going up the DiTree"
* concept.property.code 1..1
* concept.property.code ^short = "Reference to CodeSystem.property.code"
* concept.property.code ^definition = "A code that is a reference to CodeSystem.property.code."
* concept.property.code ^mapping.identity = "tinkar"
* concept.property.code ^mapping.map = "[ROLE_TYPE of ROLE] or [IS_A] of the Axiom"
* concept.property.value[x] 1..1
* concept.property.value[x] ^short = "Value of the property for this concept"
* concept.property.value[x] ^definition = "The value of this property."
* concept.property.value[x] ^mapping.identity = "tinkar"
* concept.property.value[x] ^mapping.map = "Concept Reference of the [Role] or [Is_A] of the Axiom"
* concept.concept 0..0
* concept.concept ^short = "Child Concepts (is-a/contains/categorizes)"
* concept.concept ^definition = "Defines children of a concept to produce a hierarchy of concepts. The nature of the relationships is variable (is-a/contains/categorizes) - see hierarchyMeaning."
* concept.concept ^comment = "For Terminology change sets, relationships to child concepts should be done through concept.property values, not concept.concept elements"
* concept.concept ^mustSupport = false
* supplements 0..0
* supplements ^short = "The source terminology from which the Change Set was derived should be conveyed via a Provenance resource, not CodeSystem.supplements"






---

File: repos/HL7_SLASH_termchangeset-ig/input/fsh/Profile_CodeSystem_LOINCChangeSet.fsh

Profile: LOINCChangeSet
Id: loinc-changeset-profile
Parent: changeset-profile
Title: "LOINC Change Set (CodeSystem)"
Description: "Profile of CodeSystem to enable lossless representation of a LOINC change set aligned with Tinkar information model requirements. This profile is a specialization of the broader Terminology Change Set profile."
* ^version = "0.1.0"
* ^status = #draft
* ^experimental = false
* ^date = "2018-08-14"
* ^publisher = "HL7 International - Terminology Infrastructure Work Group"
* ^contact[0].telecom[0].system = #url
* ^contact[0].telecom[0].value = "http://hl7.org/Special/committees/vocab/index.cfm"
* ^mapping[+].identity = "tinkar"
* ^mapping[=].uri = "https://hl7.org/fhir/uv/tinkar"
* ^mapping[=].name = "Tinkar Reference Model"
* caseSensitive 0..1
* caseSensitive only boolean
* caseSensitive = false (exactly)
* caseSensitive ^short = "If code comparison is case sensitive"
* caseSensitive ^definition = "If code comparison is case sensitive when codes within this system are compared to each other."
* caseSensitive ^comment = "If this value is missing, then it is not specified whether a code system is case sensitive or not. When the rule is not known, Postel's law should be followed: produce codes with the correct case, and accept codes in any case. This element is primarily provided to support validation software."
* caseSensitive ^mustSupport = false
* property 0..* MS
* property ^slicing.discriminator[0].type = #value
* property ^slicing.discriminator[0].path = "code"
* property ^slicing.rules = #open
* property ^short = "Property values should follow the LOINC-specific guidance available here: https://terminology.hl7.org/LOINC.html#loinc-properties"
* property ^definition = "A property defines an additional slot through which additional information can be provided about a concept."
* property contains parent 0..1
* property[parent] ^short = "Property slice to capture LOINC parent for a concept"
* property[parent].code 1..1
* property[parent].code = #parent (exactly)
* property[parent].type = #code (exactly)
* property contains child 0..1
* property[child] ^short = "Property slice to capture LOINC child for a concept"
* property[child].code 1..1
* property[child].code = #child (exactly)
* property[child].type = #code (exactly)
* property contains COMPONENT 0..1
* property[COMPONENT] ^short = "Property slice to capture LOINC COMPONENT for a concept"
* property[COMPONENT].code 1..1
* property[COMPONENT].code = #COMPONENT (exactly)
* property[COMPONENT].type = #Coding (exactly)
* property contains PROPERTY 0..1
* property[PROPERTY] ^short = "Property slice to capture LOINC PROPERTY for a concept"
* property[PROPERTY].code 1..1
* property[PROPERTY].code = #PROPERTY (exactly)
* property[PROPERTY].type = #Coding (exactly)
* property contains TIME_ASPCT 0..1
* property[TIME_ASPCT] ^short = "Property slice to capture LOINC TIME_ASPCT for a concept"
* property[TIME_ASPCT].code 1..1
* property[TIME_ASPCT].code = #TIME_ASPCT (exactly)
* property[TIME_ASPCT].type = #Coding (exactly)
* property contains SYSTEM 0..1
* property[SYSTEM] ^short = "Property slice to capture LOINC SYSTEM for a concept"
* property[SYSTEM].code 1..1
* property[SYSTEM].code = #SYSTEM (exactly)
* property[SYSTEM].type = #Coding (exactly)
* property contains SCALE_TYP 0..1
* property[SCALE_TYP] ^short = "Property slice to capture LOINC SCALE_TYP for a concept"
* property[SCALE_TYP].code 1..1
* property[SCALE_TYP].code = #SCALE_TYP (exactly)
* property[SCALE_TYP].type = #Coding (exactly)
* property contains METHOD_TYP 0..1
* property[METHOD_TYP] ^short = "Property slice to capture LOINC METHOD_TYP for a concept"
* property[METHOD_TYP].code 1..1
* property[METHOD_TYP].code = #METHOD_TYP (exactly)
* property[METHOD_TYP].type = #Coding (exactly)
* property contains CLASS 0..1
* property[CLASS] ^short = "Property slice to capture LOINC CLASS for a concept"
* property[CLASS].code 1..1
* property[CLASS].code = #CLASS (exactly)
* property[CLASS].type = #Coding (exactly)
* property contains VersionLastChanged 0..1
* property[VersionLastChanged] ^short = "Property slice to capture LOINC VersionLastChanged for a concept"
* property[VersionLastChanged].code 1..1
* property[VersionLastChanged].code = #VersionLastChanged (exactly)
* property[VersionLastChanged].type = #string (exactly)
* property contains CHNG_TYPE 0..1
* property[CHNG_TYPE] ^short = "Property slice to capture LOINC CHNG_TYPE for a concept"
* property[CHNG_TYPE].code 1..1
* property[CHNG_TYPE].code = #CHNG_TYPE (exactly)
* property[CHNG_TYPE].type = #string (exactly)
* property contains DefinitionDescription 0..1
* property[DefinitionDescription] ^short = "Property slice to capture LOINC DefinitionDescription for a concept"
* property[DefinitionDescription].code 1..1
* property[DefinitionDescription].code = #DefinitionDescription (exactly)
* property[DefinitionDescription].type = #string (exactly)
* property contains STATUS 0..1
* property[STATUS] ^short = "Property slice to capture LOINC STATUS for a concept"
* property[STATUS].code 1..1
* property[STATUS].code = #STATUS (exactly)
* property[STATUS].type = #string (exactly)
* property contains CONSUMER_NAME 0..1
* property[CONSUMER_NAME] ^short = "Property slice to capture LOINC CONSUMER_NAME for a concept"
* property[CONSUMER_NAME].code 1..1
* property[CONSUMER_NAME].code = #CONSUMER_NAME (exactly)
* property[CONSUMER_NAME].type = #string (exactly)
* property contains CLASSTYPE 0..1
* property[CLASSTYPE] ^short = "Property slice to capture LOINC CLASSTYPE for a concept"
* property[CLASSTYPE].code 1..1
* property[CLASSTYPE].code = #CLASSTYPE (exactly)
* property[CLASSTYPE].type = #string (exactly)
* property contains FORMULA 0..1
* property[FORMULA] ^short = "Property slice to capture LOINC FORMULA for a concept"
* property[FORMULA].code 1..1
* property[FORMULA].code = #FORMULA (exactly)
* property[FORMULA].type = #string (exactly)
* property contains EXMPL_ANSWERS 0..1
* property[EXMPL_ANSWERS] ^short = "Property slice to capture LOINC EXMPL_ANSWERS for a concept"
* property[EXMPL_ANSWERS].code 1..1
* property[EXMPL_ANSWERS].code = #EXMPL_ANSWERS (exactly)
* property[EXMPL_ANSWERS].type = #string (exactly)
* property contains SURVEY_QUEST_TEXT 0..1
* property[SURVEY_QUEST_TEXT] ^short = "Property slice to capture LOINC SURVEY_QUEST_TEXT for a concept"
* property[SURVEY_QUEST_TEXT].code 1..1
* property[SURVEY_QUEST_TEXT].code = #SURVEY_QUEST_TEXT (exactly)
* property[SURVEY_QUEST_TEXT].type = #string (exactly)
* property contains SURVEY_QUEST_SRC 0..1
* property[SURVEY_QUEST_SRC] ^short = "Property slice to capture LOINC SURVEY_QUEST_SRC for a concept"
* property[SURVEY_QUEST_SRC].code 1..1
* property[SURVEY_QUEST_SRC].code = #SURVEY_QUEST_SRC (exactly)
* property[SURVEY_QUEST_SRC].type = #string (exactly)
* property contains UNITSREQUIRED 0..1
* property[UNITSREQUIRED] ^short = "Property slice to capture LOINC UNITSREQUIRED for a concept"
* property[UNITSREQUIRED].code 1..1
* property[UNITSREQUIRED].code = #UNITSREQUIRED (exactly)
* property[UNITSREQUIRED].type = #string (exactly)
* property contains RELATEDNAMES2 0..1
* property[RELATEDNAMES2] ^short = "Property slice to capture LOINC RELATEDNAMES2 for a concept"
* property[RELATEDNAMES2].code 1..1
* property[RELATEDNAMES2].code = #RELATEDNAMES2 (exactly)
* property[RELATEDNAMES2].type = #string (exactly)
* property contains SHORTNAME 0..1
* property[SHORTNAME] ^short = "Property slice to capture LOINC SHORTNAME for a concept"
* property[SHORTNAME].code 1..1
* property[SHORTNAME].code = #SHORTNAME (exactly)
* property[SHORTNAME].type = #string (exactly)
* property contains ORDER_OBS 0..1
* property[ORDER_OBS] ^short = "Property slice to capture LOINC ORDER_OBS for a concept"
* property[ORDER_OBS].code 1..1
* property[ORDER_OBS].code = #ORDER_OBS (exactly)
* property[ORDER_OBS].type = #string (exactly)
* property contains HL7_FIELD_SUBFIELD_ID 0..1
* property[HL7_FIELD_SUBFIELD_ID] ^short = "Property slice to capture LOINC HL7_FIELD_SUBFIELD_ID for a concept"
* property[HL7_FIELD_SUBFIELD_ID].code 1..1
* property[HL7_FIELD_SUBFIELD_ID].code = #HL7_FIELD_SUBFIELD_ID (exactly)
* property[HL7_FIELD_SUBFIELD_ID].type = #string (exactly)
* property contains EXTERNAL_COPYRIGHT_NOTICE 0..1
* property[EXTERNAL_COPYRIGHT_NOTICE] ^short = "Property slice to capture LOINC EXTERNAL_COPYRIGHT_NOTICE for a concept"
* property[EXTERNAL_COPYRIGHT_NOTICE].code 1..1
* property[EXTERNAL_COPYRIGHT_NOTICE].code = #EXTERNAL_COPYRIGHT_NOTICE (exactly)
* property[EXTERNAL_COPYRIGHT_NOTICE].type = #string (exactly)
* property contains EXAMPLE_UNITS 0..1
* property[EXAMPLE_UNITS] ^short = "Property slice to capture LOINC EXAMPLE_UNITS for a concept"
* property[EXAMPLE_UNITS].code 1..1
* property[EXAMPLE_UNITS].code = #EXAMPLE_UNITS (exactly)
* property[EXAMPLE_UNITS].type = #string (exactly)
* property contains LONG_COMMON_NAME 0..1
* property[LONG_COMMON_NAME] ^short = "Property slice to capture LOINC LONG_COMMON_NAME for a concept"
* property[LONG_COMMON_NAME].code 1..1
* property[LONG_COMMON_NAME].code = #LONG_COMMON_NAME (exactly)
* property[LONG_COMMON_NAME].type = #string (exactly)
* property contains EXAMPLE_UCUM_UNITS 0..1
* property[EXAMPLE_UCUM_UNITS] ^short = "Property slice to capture LOINC EXAMPLE_UCUM_UNITS for a concept"
* property[EXAMPLE_UCUM_UNITS].code 1..1
* property[EXAMPLE_UCUM_UNITS].code = #EXAMPLE_UCUM_UNITS (exactly)
* property[EXAMPLE_UCUM_UNITS].type = #string (exactly)
* property contains STATUS_REASON 0..1
* property[STATUS_REASON] ^short = "Property slice to capture LOINC STATUS_REASON for a concept"
* property[STATUS_REASON].code 1..1
* property[STATUS_REASON].code = #STATUS_REASON (exactly)
* property[STATUS_REASON].type = #string (exactly)
* property contains STATUS_TEXT 0..1
* property[STATUS_TEXT] ^short = "Property slice to capture LOINC STATUS_TEXT for a concept"
* property[STATUS_TEXT].code 1..1
* property[STATUS_TEXT].code = #STATUS_TEXT (exactly)
* property[STATUS_TEXT].type = #string (exactly)
* property contains CHANGE_REASON_PUBLIC 0..1
* property[CHANGE_REASON_PUBLIC] ^short = "Property slice to capture LOINC CHANGE_REASON_PUBLIC for a concept"
* property[CHANGE_REASON_PUBLIC].code 1..1
* property[CHANGE_REASON_PUBLIC].code = #CHANGE_REASON_PUBLIC (exactly)
* property[CHANGE_REASON_PUBLIC].type = #string (exactly)
* property contains COMMON_TEST_RANK 0..1
* property[COMMON_TEST_RANK] ^short = "Property slice to capture LOINC COMMON_TEST_RANK for a concept"
* property[COMMON_TEST_RANK].code 1..1
* property[COMMON_TEST_RANK].code = #COMMON_TEST_RANK (exactly)
* property[COMMON_TEST_RANK].type = #string (exactly)
* property contains COMMON_ORDER_RANK 0..1
* property[COMMON_ORDER_RANK] ^short = "Property slice to capture LOINC COMMON_ORDER_RANK for a concept"
* property[COMMON_ORDER_RANK].code 1..1
* property[COMMON_ORDER_RANK].code = #COMMON_ORDER_RANK (exactly)
* property[COMMON_ORDER_RANK].type = #string (exactly)
* property contains HL7_ATTACHMENT_STRUCTURE 0..1
* property[HL7_ATTACHMENT_STRUCTURE] ^short = "Property slice to capture LOINC HL7_ATTACHMENT_STRUCTURE for a concept"
* property[HL7_ATTACHMENT_STRUCTURE].code 1..1
* property[HL7_ATTACHMENT_STRUCTURE].code = #HL7_ATTACHMENT_STRUCTURE (exactly)
* property[HL7_ATTACHMENT_STRUCTURE].type = #string (exactly)
* property contains EXTERNAL_COPYRIGHT_LINK 0..1
* property[EXTERNAL_COPYRIGHT_LINK] ^short = "Property slice to capture LOINC EXTERNAL_COPYRIGHT_LINK for a concept"
* property[EXTERNAL_COPYRIGHT_LINK].code 1..1
* property[EXTERNAL_COPYRIGHT_LINK].code = #EXTERNAL_COPYRIGHT_LINK (exactly)
* property[EXTERNAL_COPYRIGHT_LINK].type = #string (exactly)
* property contains PanelType 0..1
* property[PanelType] ^short = "Property slice to capture LOINC PanelType for a concept"
* property[PanelType].code 1..1
* property[PanelType].code = #PanelType (exactly)
* property[PanelType].type = #string (exactly)
* property contains AskAtOrderEntry 0..1
* property[AskAtOrderEntry] ^short = "Property slice to capture LOINC AskAtOrderEntry for a concept"
* property[AskAtOrderEntry].code 1..1
* property[AskAtOrderEntry].code = #AskAtOrderEntry (exactly)
* property[AskAtOrderEntry].type = #Coding (exactly)
* property contains AssociatedObservations 0..1
* property[AssociatedObservations] ^short = "Property slice to capture LOINC AssociatedObservations for a concept"
* property[AssociatedObservations].code 1..1
* property[AssociatedObservations].code = #AssociatedObservations (exactly)
* property[AssociatedObservations].type = #Coding (exactly)
* property contains VersionFirstReleased 0..1
* property[VersionFirstReleased] ^short = "Property slice to capture LOINC VersionFirstReleased for a concept"
* property[VersionFirstReleased].code 1..1
* property[VersionFirstReleased].code = #VersionFirstReleased (exactly)
* property[VersionFirstReleased].type = #string (exactly)
* property contains ValidHL7AttachmentRequest 0..1
* property[ValidHL7AttachmentRequest] ^short = "Property slice to capture LOINC ValidHL7AttachmentRequest for a concept"
* property[ValidHL7AttachmentRequest].code 1..1
* property[ValidHL7AttachmentRequest].code = #ValidHL7AttachmentRequest (exactly)
* property[ValidHL7AttachmentRequest].type = #string (exactly)
* property contains DisplayName 0..1
* property[DisplayName] ^short = "Property slice to capture LOINC DisplayName for a concept"
* property[DisplayName].code 1..1
* property[DisplayName].code = #DisplayName (exactly)
* property[DisplayName].type = #string (exactly)
* property contains answer-list 0..1
* property[answer-list] ^short = "Property slice to capture LOINC answer-list for a concept"
* property[answer-list].code 1..1
* property[answer-list].code = #answer-list (exactly)
* property[answer-list].type = #Coding (exactly)
* property contains MAP_TO 0..1
* property[MAP_TO] ^short = "Property slice to capture LOINC MAP_TO for a concept"
* property[MAP_TO].code 1..1
* property[MAP_TO].code = #MAP_TO (exactly)
* property[MAP_TO].type = #Coding (exactly)
* property contains analyte 0..1
* property[analyte] ^short = "Property slice to capture LOINC analyte for a concept"
* property[analyte].code 1..1
* property[analyte].code = #analyte (exactly)
* property[analyte].type = #Coding (exactly)
* property contains analyte-core 0..1
* property[analyte-core] ^short = "Property slice to capture LOINC analyte-core for a concept"
* property[analyte-core].code 1..1
* property[analyte-core].code = #analyte-core (exactly)
* property[analyte-core].type = #Coding (exactly)
* property contains analyte-suffix 0..1
* property[analyte-suffix] ^short = "Property slice to capture LOINC analyte-suffix for a concept"
* property[analyte-suffix].code 1..1
* property[analyte-suffix].code = #analyte-suffix (exactly)
* property[analyte-suffix].type = #Coding (exactly)
* property contains analyte-numerator 0..1
* property[analyte-numerator] ^short = "Property slice to capture LOINC analyte-numerator for a concept"
* property[analyte-numerator].code 1..1
* property[analyte-numerator].code = #analyte-numerator (exactly)
* property[analyte-numerator].type = #Coding (exactly)
* property contains analyte-divisor 0..1
* property[analyte-divisor] ^short = "Property slice to capture LOINC analyte-divisor for a concept"
* property[analyte-divisor].code 1..1
* property[analyte-divisor].code = #analyte-divisor (exactly)
* property[analyte-divisor].type = #Coding (exactly)
* property contains analyte-divisor-suffix 0..1
* property[analyte-divisor-suffix] ^short = "Property slice to capture LOINC analyte-divisor-suffix for a concept"
* property[analyte-divisor-suffix].code 1..1
* property[analyte-divisor-suffix].code = #analyte-divisor-suffix (exactly)
* property[analyte-divisor-suffix].type = #Coding (exactly)
* property contains challenge 0..1
* property[challenge] ^short = "Property slice to capture LOINC challenge for a concept"
* property[challenge].code 1..1
* property[challenge].code = #challenge (exactly)
* property[challenge].type = #Coding (exactly)
* property contains adjustment 0..1
* property[adjustment] ^short = "Property slice to capture LOINC adjustment for a concept"
* property[adjustment].code 1..1
* property[adjustment].code = #adjustment (exactly)
* property[adjustment].type = #Coding (exactly)
* property contains count 0..1
* property[count] ^short = "Property slice to capture LOINC count for a concept"
* property[count].code 1..1
* property[count].code = #count (exactly)
* property[count].type = #Coding (exactly)
* property contains time-core 0..1
* property[time-core] ^short = "Property slice to capture LOINC time-core for a concept"
* property[time-core].code 1..1
* property[time-core].code = #time-core (exactly)
* property[time-core].type = #Coding (exactly)
* property contains time-modifier 0..1
* property[time-modifier] ^short = "Property slice to capture LOINC time-modifier for a concept"
* property[time-modifier].code 1..1
* property[time-modifier].code = #time-modifier (exactly)
* property[time-modifier].type = #Coding (exactly)
* property contains system-core 0..1
* property[system-core] ^short = "Property slice to capture LOINC system-core for a concept"
* property[system-core].code 1..1
* property[system-core].code = #system-core (exactly)
* property[system-core].type = #Coding (exactly)
* property contains super-system 0..1
* property[super-system] ^short = "Property slice to capture LOINC super-system for a concept"
* property[super-system].code 1..1
* property[super-system].code = #super-system (exactly)
* property[super-system].type = #Coding (exactly)
* property contains analyte-gene 0..1
* property[analyte-gene] ^short = "Property slice to capture LOINC analyte-gene for a concept"
* property[analyte-gene].code 1..1
* property[analyte-gene].code = #analyte-gene (exactly)
* property[analyte-gene].type = #Coding (exactly)
* property contains category 0..1
* property[category] ^short = "Property slice to capture LOINC category for a concept"
* property[category].code 1..1
* property[category].code = #category (exactly)
* property[category].type = #Coding (exactly)
* property contains search 0..1
* property[search] ^short = "Property slice to capture LOINC search for a concept"
* property[search].code 1..1
* property[search].code = #search (exactly)
* property[search].type = #Coding (exactly)
* property contains rad-modality-modality-type 0..1
* property[rad-modality-modality-type] ^short = "Property slice to capture LOINC rad-modality-modality-type for a concept"
* property[rad-modality-modality-type].code 1..1
* property[rad-modality-modality-type].code = #rad-modality-modality-type (exactly)
* property[rad-modality-modality-type].type = #Coding (exactly)
* property contains rad-modality-modality-subtype 0..1
* property[rad-modality-modality-subtype] ^short = "Property slice to capture LOINC rad-modality-modality-subtype for a concept"
* property[rad-modality-modality-subtype].code 1..1
* property[rad-modality-modality-subtype].code = #rad-modality-modality-subtype (exactly)
* property[rad-modality-modality-subtype].type = #Coding (exactly)
* property contains rad-anatomic-location-region-imaged 0..1
* property[rad-anatomic-location-region-imaged] ^short = "Property slice to capture LOINC rad-anatomic-location-region-imaged for a concept"
* property[rad-anatomic-location-region-imaged].code 1..1
* property[rad-anatomic-location-region-imaged].code = #rad-anatomic-location-region-imaged (exactly)
* property[rad-anatomic-location-region-imaged].type = #Coding (exactly)
* property contains rad-anatomic-location-imaging-focus 0..1
* property[rad-anatomic-location-imaging-focus] ^short = "Property slice to capture LOINC rad-anatomic-location-imaging-focus for a concept"
* property[rad-anatomic-location-imaging-focus].code 1..1
* property[rad-anatomic-location-imaging-focus].code = #rad-anatomic-location-imaging-focus (exactly)
* property[rad-anatomic-location-imaging-focus].type = #Coding (exactly)
* property contains rad-anatomic-location-laterality-presence 0..1
* property[rad-anatomic-location-laterality-presence] ^short = "Property slice to capture LOINC rad-anatomic-location-laterality-presence for a concept"
* property[rad-anatomic-location-laterality-presence].code 1..1
* property[rad-anatomic-location-laterality-presence].code = #rad-anatomic-location-laterality-presence (exactly)
* property[rad-anatomic-location-laterality-presence].type = #Coding (exactly)
* property contains rad-anatomic-location-laterality 0..1
* property[rad-anatomic-location-laterality] ^short = "Property slice to capture LOINC rad-anatomic-location-laterality for a concept"
* property[rad-anatomic-location-laterality].code 1..1
* property[rad-anatomic-location-laterality].code = #rad-anatomic-location-laterality (exactly)
* property[rad-anatomic-location-laterality].type = #Coding (exactly)
* property contains rad-view-aggregation 0..1
* property[rad-view-aggregation] ^short = "Property slice to capture LOINC rad-view-aggregation for a concept"
* property[rad-view-aggregation].code 1..1
* property[rad-view-aggregation].code = #rad-view-aggregation (exactly)
* property[rad-view-aggregation].type = #Coding (exactly)
* property contains rad-view-view-type 0..1
* property[rad-view-view-type] ^short = "Property slice to capture LOINC rad-view-view-type for a concept"
* property[rad-view-view-type].code 1..1
* property[rad-view-view-type].code = #rad-view-view-type (exactly)
* property[rad-view-view-type].type = #Coding (exactly)
* property contains rad-maneuver-maneuver-type 0..1
* property[rad-maneuver-maneuver-type] ^short = "Property slice to capture LOINC rad-maneuver-maneuver-type for a concept"
* property[rad-maneuver-maneuver-type].code 1..1
* property[rad-maneuver-maneuver-type].code = #rad-maneuver-maneuver-type (exactly)
* property[rad-maneuver-maneuver-type].type = #Coding (exactly)
* property contains rad-timing 0..1
* property[rad-timing] ^short = "Property slice to capture LOINC rad-timing for a concept"
* property[rad-timing].code 1..1
* property[rad-timing].code = #rad-timing (exactly)
* property[rad-timing].type = #Coding (exactly)
* property contains rad-pharmaceutical-substance-given 0..1
* property[rad-pharmaceutical-substance-given] ^short = "Property slice to capture LOINC rad-pharmaceutical-substance-given for a concept"
* property[rad-pharmaceutical-substance-given].code 1..1
* property[rad-pharmaceutical-substance-given].code = #rad-pharmaceutical-substance-given (exactly)
* property[rad-pharmaceutical-substance-given].type = #Coding (exactly)
* property contains rad-pharmaceutical-route 0..1
* property[rad-pharmaceutical-route] ^short = "Property slice to capture LOINC rad-pharmaceutical-route for a concept"
* property[rad-pharmaceutical-route].code 1..1
* property[rad-pharmaceutical-route].code = #rad-pharmaceutical-route (exactly)
* property[rad-pharmaceutical-route].type = #Coding (exactly)
* property contains rad-reason-for-exam 0..1
* property[rad-reason-for-exam] ^short = "Property slice to capture LOINC rad-reason-for-exam for a concept"
* property[rad-reason-for-exam].code 1..1
* property[rad-reason-for-exam].code = #rad-reason-for-exam (exactly)
* property[rad-reason-for-exam].type = #Coding (exactly)
* property contains rad-guidance-for-presence 0..1
* property[rad-guidance-for-presence] ^short = "Property slice to capture LOINC rad-guidance-for-presence for a concept"
* property[rad-guidance-for-presence].code 1..1
* property[rad-guidance-for-presence].code = #rad-guidance-for-presence (exactly)
* property[rad-guidance-for-presence].type = #Coding (exactly)
* property contains rad-guidance-for-approach 0..1
* property[rad-guidance-for-approach] ^short = "Property slice to capture LOINC rad-guidance-for-approach for a concept"
* property[rad-guidance-for-approach].code 1..1
* property[rad-guidance-for-approach].code = #rad-guidance-for-approach (exactly)
* property[rad-guidance-for-approach].type = #Coding (exactly)
* property contains rad-guidance-for-action 0..1
* property[rad-guidance-for-action] ^short = "Property slice to capture LOINC rad-guidance-for-action for a concept"
* property[rad-guidance-for-action].code 1..1
* property[rad-guidance-for-action].code = #rad-guidance-for-action (exactly)
* property[rad-guidance-for-action].type = #Coding (exactly)
* property contains rad-guidance-for-object 0..1
* property[rad-guidance-for-object] ^short = "Property slice to capture LOINC rad-guidance-for-object for a concept"
* property[rad-guidance-for-object].code 1..1
* property[rad-guidance-for-object].code = #rad-guidance-for-object (exactly)
* property[rad-guidance-for-object].type = #Coding (exactly)
* property contains rad-subject 0..1
* property[rad-subject] ^short = "Property slice to capture LOINC rad-subject for a concept"
* property[rad-subject].code 1..1
* property[rad-subject].code = #rad-subject (exactly)
* property[rad-subject].type = #Coding (exactly)
* property contains document-kind 0..1
* property[document-kind] ^short = "Property slice to capture LOINC document-kind for a concept"
* property[document-kind].code 1..1
* property[document-kind].code = #document-kind (exactly)
* property[document-kind].type = #Coding (exactly)
* property contains document-role 0..1
* property[document-role] ^short = "Property slice to capture LOINC document-role for a concept"
* property[document-role].code 1..1
* property[document-role].code = #document-role (exactly)
* property[document-role].type = #Coding (exactly)
* property contains document-setting 0..1
* property[document-setting] ^short = "Property slice to capture LOINC document-setting for a concept"
* property[document-setting].code 1..1
* property[document-setting].code = #document-setting (exactly)
* property[document-setting].type = #Coding (exactly)
* property contains document-subject-matter-domain 0..1
* property[document-subject-matter-domain] ^short = "Property slice to capture LOINC document-subject-matter-domain for a concept"
* property[document-subject-matter-domain].code 1..1
* property[document-subject-matter-domain].code = #document-subject-matter-domain (exactly)
* property[document-subject-matter-domain].type = #Coding (exactly)
* property contains document-type-of-service 0..1
* property[document-type-of-service] ^short = "Property slice to capture LOINC document-type-of-service for a concept"
* property[document-type-of-service].code 1..1
* property[document-type-of-service].code = #document-type-of-service (exactly)
* property[document-type-of-service].type = #Coding (exactly)
* property contains answers-for 0..1
* property[answers-for] ^short = "Property slice to capture LOINC answers-for for a concept"
* property[answers-for].code 1..1
* property[answers-for].code = #answers-for (exactly)
* property[answers-for].type = #Coding (exactly)
* concept.display 1..1
* concept.display ^short = "Text to display to the user"
* concept.display ^definition = "A human readable string that is the recommended default way to present this concept to a user."
* concept.display ^comment = "This contains the LOINC Long Name."
* concept.property 0..* MS
* concept.property ^slicing.discriminator[0].type = #value
* concept.property ^slicing.discriminator[0].path = "code"
* concept.property ^slicing.rules = #open
* concept.property ^short = "Property value for the concept"
* concept.property ^definition = "A property value for this concept."
* concept.property.code 1..1
* concept.property.code ^short = "Reference to CodeSystem.property.code"
* concept.property.code ^definition = "A code that is a reference to CodeSystem.property.code."
* concept.property.value[x] 1..1
* concept.property.value[x] ^short = "Value of the property for this concept"
* concept.property.value[x] ^definition = "The value of this property."
* concept.property contains parent 0..1
* concept.property[parent] ^short = "Property slice to capture LOINC parent for a concept"
* concept.property[parent].code 1..1
* concept.property[parent].code = #parent (exactly)
* concept.property contains child 0..1
* concept.property[child] ^short = "Property slice to capture LOINC child for a concept"
* concept.property[child].code 1..1
* concept.property[child].code = #child (exactly)
* concept.property contains COMPONENT 0..1
* concept.property[COMPONENT] ^short = "Property slice to capture LOINC COMPONENT for a concept"
* concept.property[COMPONENT].code 1..1
* concept.property[COMPONENT].code = #COMPONENT (exactly)
* concept.property contains PROPERTY 0..1
* concept.property[PROPERTY] ^short = "Property slice to capture LOINC PROPERTY for a concept"
* concept.property[PROPERTY].code 1..1
* concept.property[PROPERTY].code = #PROPERTY (exactly)
* concept.property contains TIME_ASPCT 0..1
* concept.property[TIME_ASPCT] ^short = "Property slice to capture LOINC TIME_ASPCT for a concept"
* concept.property[TIME_ASPCT].code 1..1
* concept.property[TIME_ASPCT].code = #TIME_ASPCT (exactly)
* concept.property contains SYSTEM 0..1
* concept.property[SYSTEM] ^short = "Property slice to capture LOINC SYSTEM for a concept"
* concept.property[SYSTEM].code 1..1
* concept.property[SYSTEM].code = #SYSTEM (exactly)
* concept.property contains SCALE_TYP 0..1
* concept.property[SCALE_TYP] ^short = "Property slice to capture LOINC SCALE_TYP for a concept"
* concept.property[SCALE_TYP].code 1..1
* concept.property[SCALE_TYP].code = #SCALE_TYP (exactly)
* concept.property contains METHOD_TYP 0..1
* concept.property[METHOD_TYP] ^short = "Property slice to capture LOINC METHOD_TYP for a concept"
* concept.property[METHOD_TYP].code 1..1
* concept.property[METHOD_TYP].code = #METHOD_TYP (exactly)
* concept.property contains CLASS 0..1
* concept.property[CLASS] ^short = "Property slice to capture LOINC CLASS for a concept"
* concept.property[CLASS].code 1..1
* concept.property[CLASS].code = #CLASS (exactly)
* concept.property contains VersionLastChanged 0..1
* concept.property[VersionLastChanged] ^short = "Property slice to capture LOINC VersionLastChanged for a concept"
* concept.property[VersionLastChanged].code 1..1
* concept.property[VersionLastChanged].code = #VersionLastChanged (exactly)
* concept.property contains CHNG_TYPE 0..1
* concept.property[CHNG_TYPE] ^short = "Property slice to capture LOINC CHNG_TYPE for a concept"
* concept.property[CHNG_TYPE].code 1..1
* concept.property[CHNG_TYPE].code = #CHNG_TYPE (exactly)
* concept.property contains DefinitionDescription 0..1
* concept.property[DefinitionDescription] ^short = "Property slice to capture LOINC DefinitionDescription for a concept"
* concept.property[DefinitionDescription].code 1..1
* concept.property[DefinitionDescription].code = #DefinitionDescription (exactly)
* concept.property contains STATUS 0..1
* concept.property[STATUS] ^short = "Property slice to capture LOINC STATUS for a concept"
* concept.property[STATUS].code 1..1
* concept.property[STATUS].code = #STATUS (exactly)
* concept.property contains CONSUMER_NAME 0..1
* concept.property[CONSUMER_NAME] ^short = "Property slice to capture LOINC CONSUMER_NAME for a concept"
* concept.property[CONSUMER_NAME].code 1..1
* concept.property[CONSUMER_NAME].code = #CONSUMER_NAME (exactly)
* concept.property contains CLASSTYPE 0..1
* concept.property[CLASSTYPE] ^short = "Property slice to capture LOINC CLASSTYPE for a concept"
* concept.property[CLASSTYPE].code 1..1
* concept.property[CLASSTYPE].code = #CLASSTYPE (exactly)
* concept.property contains FORMULA 0..1
* concept.property[FORMULA] ^short = "Property slice to capture LOINC FORMULA for a concept"
* concept.property[FORMULA].code 1..1
* concept.property[FORMULA].code = #FORMULA (exactly)
* concept.property contains EXMPL_ANSWERS 0..1
* concept.property[EXMPL_ANSWERS] ^short = "Property slice to capture LOINC EXMPL_ANSWERS for a concept"
* concept.property[EXMPL_ANSWERS].code 1..1
* concept.property[EXMPL_ANSWERS].code = #EXMPL_ANSWERS (exactly)
* concept.property contains SURVEY_QUEST_TEXT 0..1
* concept.property[SURVEY_QUEST_TEXT] ^short = "Property slice to capture LOINC SURVEY_QUEST_TEXT for a concept"
* concept.property[SURVEY_QUEST_TEXT].code 1..1
* concept.property[SURVEY_QUEST_TEXT].code = #SURVEY_QUEST_TEXT (exactly)
* concept.property contains SURVEY_QUEST_SRC 0..1
* concept.property[SURVEY_QUEST_SRC] ^short = "Property slice to capture LOINC SURVEY_QUEST_SRC for a concept"
* concept.property[SURVEY_QUEST_SRC].code 1..1
* concept.property[SURVEY_QUEST_SRC].code = #SURVEY_QUEST_SRC (exactly)
* concept.property contains UNITSREQUIRED 0..1
* concept.property[UNITSREQUIRED] ^short = "Property slice to capture LOINC UNITSREQUIRED for a concept"
* concept.property[UNITSREQUIRED].code 1..1
* concept.property[UNITSREQUIRED].code = #UNITSREQUIRED (exactly)
* concept.property contains RELATEDNAMES2 0..1
* concept.property[RELATEDNAMES2] ^short = "Property slice to capture LOINC RELATEDNAMES2 for a concept"
* concept.property[RELATEDNAMES2].code 1..1
* concept.property[RELATEDNAMES2].code = #RELATEDNAMES2 (exactly)
* concept.property contains SHORTNAME 0..1
* concept.property[SHORTNAME] ^short = "Property slice to capture LOINC SHORTNAME for a concept"
* concept.property[SHORTNAME].code 1..1
* concept.property[SHORTNAME].code = #SHORTNAME (exactly)
* concept.property contains ORDER_OBS 0..1
* concept.property[ORDER_OBS] ^short = "Property slice to capture LOINC ORDER_OBS for a concept"
* concept.property[ORDER_OBS].code 1..1
* concept.property[ORDER_OBS].code = #ORDER_OBS (exactly)
* concept.property contains HL7_FIELD_SUBFIELD_ID 0..1
* concept.property[HL7_FIELD_SUBFIELD_ID] ^short = "Property slice to capture LOINC HL7_FIELD_SUBFIELD_ID for a concept"
* concept.property[HL7_FIELD_SUBFIELD_ID].code 1..1
* concept.property[HL7_FIELD_SUBFIELD_ID].code = #HL7_FIELD_SUBFIELD_ID (exactly)
* concept.property contains EXTERNAL_COPYRIGHT_NOTICE 0..1
* concept.property[EXTERNAL_COPYRIGHT_NOTICE] ^short = "Property slice to capture LOINC EXTERNAL_COPYRIGHT_NOTICE for a concept"
* concept.property[EXTERNAL_COPYRIGHT_NOTICE].code 1..1
* concept.property[EXTERNAL_COPYRIGHT_NOTICE].code = #EXTERNAL_COPYRIGHT_NOTICE (exactly)
* concept.property contains EXAMPLE_UNITS 0..1
* concept.property[EXAMPLE_UNITS] ^short = "Property slice to capture LOINC EXAMPLE_UNITS for a concept"
* concept.property[EXAMPLE_UNITS].code 1..1
* concept.property[EXAMPLE_UNITS].code = #EXAMPLE_UNITS (exactly)
* concept.property contains LONG_COMMON_NAME 0..1
* concept.property[LONG_COMMON_NAME] ^short = "Property slice to capture LOINC LONG_COMMON_NAME for a concept"
* concept.property[LONG_COMMON_NAME].code 1..1
* concept.property[LONG_COMMON_NAME].code = #LONG_COMMON_NAME (exactly)
* concept.property contains EXAMPLE_UCUM_UNITS 0..1
* concept.property[EXAMPLE_UCUM_UNITS] ^short = "Property slice to capture LOINC EXAMPLE_UCUM_UNITS for a concept"
* concept.property[EXAMPLE_UCUM_UNITS].code 1..1
* concept.property[EXAMPLE_UCUM_UNITS].code = #EXAMPLE_UCUM_UNITS (exactly)
* concept.property contains STATUS_REASON 0..1
* concept.property[STATUS_REASON] ^short = "Property slice to capture LOINC STATUS_REASON for a concept"
* concept.property[STATUS_REASON].code 1..1
* concept.property[STATUS_REASON].code = #STATUS_REASON (exactly)
* concept.property contains STATUS_TEXT 0..1
* concept.property[STATUS_TEXT] ^short = "Property slice to capture LOINC STATUS_TEXT for a concept"
* concept.property[STATUS_TEXT].code 1..1
* concept.property[STATUS_TEXT].code = #STATUS_TEXT (exactly)
* concept.property contains CHANGE_REASON_PUBLIC 0..1
* concept.property[CHANGE_REASON_PUBLIC] ^short = "Property slice to capture LOINC CHANGE_REASON_PUBLIC for a concept"
* concept.property[CHANGE_REASON_PUBLIC].code 1..1
* concept.property[CHANGE_REASON_PUBLIC].code = #CHANGE_REASON_PUBLIC (exactly)
* concept.property contains COMMON_TEST_RANK 0..1
* concept.property[COMMON_TEST_RANK] ^short = "Property slice to capture LOINC COMMON_TEST_RANK for a concept"
* concept.property[COMMON_TEST_RANK].code 1..1
* concept.property[COMMON_TEST_RANK].code = #COMMON_TEST_RANK (exactly)
* concept.property contains COMMON_ORDER_RANK 0..1
* concept.property[COMMON_ORDER_RANK] ^short = "Property slice to capture LOINC COMMON_ORDER_RANK for a concept"
* concept.property[COMMON_ORDER_RANK].code 1..1
* concept.property[COMMON_ORDER_RANK].code = #COMMON_ORDER_RANK (exactly)
* concept.property contains HL7_ATTACHMENT_STRUCTURE 0..1
* concept.property[HL7_ATTACHMENT_STRUCTURE] ^short = "Property slice to capture LOINC HL7_ATTACHMENT_STRUCTURE for a concept"
* concept.property[HL7_ATTACHMENT_STRUCTURE].code 1..1
* concept.property[HL7_ATTACHMENT_STRUCTURE].code = #HL7_ATTACHMENT_STRUCTURE (exactly)
* concept.property contains EXTERNAL_COPYRIGHT_LINK 0..1
* concept.property[EXTERNAL_COPYRIGHT_LINK] ^short = "Property slice to capture LOINC EXTERNAL_COPYRIGHT_LINK for a concept"
* concept.property[EXTERNAL_COPYRIGHT_LINK].code 1..1
* concept.property[EXTERNAL_COPYRIGHT_LINK].code = #EXTERNAL_COPYRIGHT_LINK (exactly)
* concept.property contains PanelType 0..1
* concept.property[PanelType] ^short = "Property slice to capture LOINC PanelType for a concept"
* concept.property[PanelType].code 1..1
* concept.property[PanelType].code = #PanelType (exactly)
* concept.property contains AskAtOrderEntry 0..1
* concept.property[AskAtOrderEntry] ^short = "Property slice to capture LOINC AskAtOrderEntry for a concept"
* concept.property[AskAtOrderEntry].code 1..1
* concept.property[AskAtOrderEntry].code = #AskAtOrderEntry (exactly)
* concept.property contains AssociatedObservations 0..1
* concept.property[AssociatedObservations] ^short = "Property slice to capture LOINC AssociatedObservations for a concept"
* concept.property[AssociatedObservations].code 1..1
* concept.property[AssociatedObservations].code = #AssociatedObservations (exactly)
* concept.property contains VersionFirstReleased 0..1
* concept.property[VersionFirstReleased] ^short = "Property slice to capture LOINC VersionFirstReleased for a concept"
* concept.property[VersionFirstReleased].code 1..1
* concept.property[VersionFirstReleased].code = #VersionFirstReleased (exactly)
* concept.property contains ValidHL7AttachmentRequest 0..1
* concept.property[ValidHL7AttachmentRequest] ^short = "Property slice to capture LOINC ValidHL7AttachmentRequest for a concept"
* concept.property[ValidHL7AttachmentRequest].code 1..1
* concept.property[ValidHL7AttachmentRequest].code = #ValidHL7AttachmentRequest (exactly)
* concept.property contains DisplayName 0..1
* concept.property[DisplayName] ^short = "Property slice to capture LOINC DisplayName for a concept"
* concept.property[DisplayName].code 1..1
* concept.property[DisplayName].code = #DisplayName (exactly)
* concept.property contains answer-list 0..1
* concept.property[answer-list] ^short = "Property slice to capture LOINC answer-list for a concept"
* concept.property[answer-list].code 1..1
* concept.property[answer-list].code = #answer-list (exactly)
* concept.property contains MAP_TO 0..1
* concept.property[MAP_TO] ^short = "Property slice to capture LOINC MAP_TO for a concept"
* concept.property[MAP_TO].code 1..1
* concept.property[MAP_TO].code = #MAP_TO (exactly)
* concept.property contains analyte 0..1
* concept.property[analyte] ^short = "Property slice to capture LOINC analyte for a concept"
* concept.property[analyte].code 1..1
* concept.property[analyte].code = #analyte (exactly)
* concept.property contains analyte-core 0..1
* concept.property[analyte-core] ^short = "Property slice to capture LOINC analyte-core for a concept"
* concept.property[analyte-core].code 1..1
* concept.property[analyte-core].code = #analyte-core (exactly)
* concept.property contains analyte-suffix 0..1
* concept.property[analyte-suffix] ^short = "Property slice to capture LOINC analyte-suffix for a concept"
* concept.property[analyte-suffix].code 1..1
* concept.property[analyte-suffix].code = #analyte-suffix (exactly)
* concept.property contains analyte-numerator 0..1
* concept.property[analyte-numerator] ^short = "Property slice to capture LOINC analyte-numerator for a concept"
* concept.property[analyte-numerator].code 1..1
* concept.property[analyte-numerator].code = #analyte-numerator (exactly)
* concept.property contains analyte-divisor 0..1
* concept.property[analyte-divisor] ^short = "Property slice to capture LOINC analyte-divisor for a concept"
* concept.property[analyte-divisor].code 1..1
* concept.property[analyte-divisor].code = #analyte-divisor (exactly)
* concept.property contains analyte-divisor-suffix 0..1
* concept.property[analyte-divisor-suffix] ^short = "Property slice to capture LOINC analyte-divisor-suffix for a concept"
* concept.property[analyte-divisor-suffix].code 1..1
* concept.property[analyte-divisor-suffix].code = #analyte-divisor-suffix (exactly)
* concept.property contains challenge 0..1
* concept.property[challenge] ^short = "Property slice to capture LOINC challenge for a concept"
* concept.property[challenge].code 1..1
* concept.property[challenge].code = #challenge (exactly)
* concept.property contains adjustment 0..1
* concept.property[adjustment] ^short = "Property slice to capture LOINC adjustment for a concept"
* concept.property[adjustment].code 1..1
* concept.property[adjustment].code = #adjustment (exactly)
* concept.property contains count 0..1
* concept.property[count] ^short = "Property slice to capture LOINC count for a concept"
* concept.property[count].code 1..1
* concept.property[count].code = #count (exactly)
* concept.property contains time-core 0..1
* concept.property[time-core] ^short = "Property slice to capture LOINC time-core for a concept"
* concept.property[time-core].code 1..1
* concept.property[time-core].code = #time-core (exactly)
* concept.property contains time-modifier 0..1
* concept.property[time-modifier] ^short = "Property slice to capture LOINC time-modifier for a concept"
* concept.property[time-modifier].code 1..1
* concept.property[time-modifier].code = #time-modifier (exactly)
* concept.property contains system-core 0..1
* concept.property[system-core] ^short = "Property slice to capture LOINC system-core for a concept"
* concept.property[system-core].code 1..1
* concept.property[system-core].code = #system-core (exactly)
* concept.property contains super-system 0..1
* concept.property[super-system] ^short = "Property slice to capture LOINC super-system for a concept"
* concept.property[super-system].code 1..1
* concept.property[super-system].code = #super-system (exactly)
* concept.property contains analyte-gene 0..1
* concept.property[analyte-gene] ^short = "Property slice to capture LOINC analyte-gene for a concept"
* concept.property[analyte-gene].code 1..1
* concept.property[analyte-gene].code = #analyte-gene (exactly)
* concept.property contains category 0..1
* concept.property[category] ^short = "Property slice to capture LOINC category for a concept"
* concept.property[category].code 1..1
* concept.property[category].code = #category (exactly)
* concept.property contains search 0..1
* concept.property[search] ^short = "Property slice to capture LOINC search for a concept"
* concept.property[search].code 1..1
* concept.property[search].code = #search (exactly)
* concept.property contains rad-modality-modality-type 0..1
* concept.property[rad-modality-modality-type] ^short = "Property slice to capture LOINC rad-modality-modality-type for a concept"
* concept.property[rad-modality-modality-type].code 1..1
* concept.property[rad-modality-modality-type].code = #rad-modality-modality-type (exactly)
* concept.property contains rad-modality-modality-subtype 0..1
* concept.property[rad-modality-modality-subtype] ^short = "Property slice to capture LOINC rad-modality-modality-subtype for a concept"
* concept.property[rad-modality-modality-subtype].code 1..1
* concept.property[rad-modality-modality-subtype].code = #rad-modality-modality-subtype (exactly)
* concept.property contains rad-anatomic-location-region-imaged 0..1
* concept.property[rad-anatomic-location-region-imaged] ^short = "Property slice to capture LOINC rad-anatomic-location-region-imaged for a concept"
* concept.property[rad-anatomic-location-region-imaged].code 1..1
* concept.property[rad-anatomic-location-region-imaged].code = #rad-anatomic-location-region-imaged (exactly)
* concept.property contains rad-anatomic-location-imaging-focus 0..1
* concept.property[rad-anatomic-location-imaging-focus] ^short = "Property slice to capture LOINC rad-anatomic-location-imaging-focus for a concept"
* concept.property[rad-anatomic-location-imaging-focus].code 1..1
* concept.property[rad-anatomic-location-imaging-focus].code = #rad-anatomic-location-imaging-focus (exactly)
* concept.property contains rad-anatomic-location-laterality-presence 0..1
* concept.property[rad-anatomic-location-laterality-presence] ^short = "Property slice to capture LOINC rad-anatomic-location-laterality-presence for a concept"
* concept.property[rad-anatomic-location-laterality-presence].code 1..1
* concept.property[rad-anatomic-location-laterality-presence].code = #rad-anatomic-location-laterality-presence (exactly)
* concept.property contains rad-anatomic-location-laterality 0..1
* concept.property[rad-anatomic-location-laterality] ^short = "Property slice to capture LOINC rad-anatomic-location-laterality for a concept"
* concept.property[rad-anatomic-location-laterality].code 1..1
* concept.property[rad-anatomic-location-laterality].code = #rad-anatomic-location-laterality (exactly)
* concept.property contains rad-view-aggregation 0..1
* concept.property[rad-view-aggregation] ^short = "Property slice to capture LOINC rad-view-aggregation for a concept"
* concept.property[rad-view-aggregation].code 1..1
* concept.property[rad-view-aggregation].code = #rad-view-aggregation (exactly)
* concept.property contains rad-view-view-type 0..1
* concept.property[rad-view-view-type] ^short = "Property slice to capture LOINC rad-view-view-type for a concept"
* concept.property[rad-view-view-type].code 1..1
* concept.property[rad-view-view-type].code = #rad-view-view-type (exactly)
* concept.property contains rad-maneuver-maneuver-type 0..1
* concept.property[rad-maneuver-maneuver-type] ^short = "Property slice to capture LOINC rad-maneuver-maneuver-type for a concept"
* concept.property[rad-maneuver-maneuver-type].code 1..1
* concept.property[rad-maneuver-maneuver-type].code = #rad-maneuver-maneuver-type (exactly)
* concept.property contains rad-timing 0..1
* concept.property[rad-timing] ^short = "Property slice to capture LOINC rad-timing for a concept"
* concept.property[rad-timing].code 1..1
* concept.property[rad-timing].code = #rad-timing (exactly)
* concept.property contains rad-pharmaceutical-substance-given 0..1
* concept.property[rad-pharmaceutical-substance-given] ^short = "Property slice to capture LOINC rad-pharmaceutical-substance-given for a concept"
* concept.property[rad-pharmaceutical-substance-given].code 1..1
* concept.property[rad-pharmaceutical-substance-given].code = #rad-pharmaceutical-substance-given (exactly)
* concept.property contains rad-pharmaceutical-route 0..1
* concept.property[rad-pharmaceutical-route] ^short = "Property slice to capture LOINC rad-pharmaceutical-route for a concept"
* concept.property[rad-pharmaceutical-route].code 1..1
* concept.property[rad-pharmaceutical-route].code = #rad-pharmaceutical-route (exactly)
* concept.property contains rad-reason-for-exam 0..1
* concept.property[rad-reason-for-exam] ^short = "Property slice to capture LOINC rad-reason-for-exam for a concept"
* concept.property[rad-reason-for-exam].code 1..1
* concept.property[rad-reason-for-exam].code = #rad-reason-for-exam (exactly)
* concept.property contains rad-guidance-for-presence 0..1
* concept.property[rad-guidance-for-presence] ^short = "Property slice to capture LOINC rad-guidance-for-presence for a concept"
* concept.property[rad-guidance-for-presence].code 1..1
* concept.property[rad-guidance-for-presence].code = #rad-guidance-for-presence (exactly)
* concept.property contains rad-guidance-for-approach 0..1
* concept.property[rad-guidance-for-approach] ^short = "Property slice to capture LOINC rad-guidance-for-approach for a concept"
* concept.property[rad-guidance-for-approach].code 1..1
* concept.property[rad-guidance-for-approach].code = #rad-guidance-for-approach (exactly)
* concept.property contains rad-guidance-for-action 0..1
* concept.property[rad-guidance-for-action] ^short = "Property slice to capture LOINC rad-guidance-for-action for a concept"
* concept.property[rad-guidance-for-action].code 1..1
* concept.property[rad-guidance-for-action].code = #rad-guidance-for-action (exactly)
* concept.property contains rad-guidance-for-object 0..1
* concept.property[rad-guidance-for-object] ^short = "Property slice to capture LOINC rad-guidance-for-object for a concept"
* concept.property[rad-guidance-for-object].code 1..1
* concept.property[rad-guidance-for-object].code = #rad-guidance-for-object (exactly)
* concept.property contains rad-subject 0..1
* concept.property[rad-subject] ^short = "Property slice to capture LOINC rad-subject for a concept"
* concept.property[rad-subject].code 1..1
* concept.property[rad-subject].code = #rad-subject (exactly)
* concept.property contains document-kind 0..1
* concept.property[document-kind] ^short = "Property slice to capture LOINC document-kind for a concept"
* concept.property[document-kind].code 1..1
* concept.property[document-kind].code = #document-kind (exactly)
* concept.property contains document-role 0..1
* concept.property[document-role] ^short = "Property slice to capture LOINC document-role for a concept"
* concept.property[document-role].code 1..1
* concept.property[document-role].code = #document-role (exactly)
* concept.property contains document-setting 0..1
* concept.property[document-setting] ^short = "Property slice to capture LOINC document-setting for a concept"
* concept.property[document-setting].code 1..1
* concept.property[document-setting].code = #document-setting (exactly)
* concept.property contains document-subject-matter-domain 0..1
* concept.property[document-subject-matter-domain] ^short = "Property slice to capture LOINC document-subject-matter-domain for a concept"
* concept.property[document-subject-matter-domain].code 1..1
* concept.property[document-subject-matter-domain].code = #document-subject-matter-domain (exactly)
* concept.property contains document-type-of-service 0..1
* concept.property[document-type-of-service] ^short = "Property slice to capture LOINC document-type-of-service for a concept"
* concept.property[document-type-of-service].code 1..1
* concept.property[document-type-of-service].code = #document-type-of-service (exactly)
* concept.property contains answers-for 0..1
* concept.property[answers-for] ^short = "Property slice to capture LOINC answers-for for a concept"
* concept.property[answers-for].code 1..1
* concept.property[answers-for].code = #answers-for (exactly)



---

File: repos/HL7_SLASH_termchangeset-ig/input/fsh/Profile_CodeSystem_SNOMEDChangeSet.fsh

Profile: SNOMEDChangeSet
Id: snomed-changeset-profile
Parent: changeset-profile
Title: "SNOMED Change Set (CodeSystem)"
Description: "Profile of CodeSystem to enable lossless representation of a SNOMED change set aligned with Tinkar information model requirements. This profile is a specialization of the broader Terminology Change Set profile."
* property ^short = "Property values should follow the SNOMED-specific guidance available here: https://terminology.hl7.org/SNOMEDCT.html#snomed-ct-properties"
* property ^slicing.discriminator[0].type = #value
* property ^slicing.discriminator[0].path = "code"
* property ^slicing.rules = #open
* property contains inactive 0..1
* property[inactive] ^short = "Property slice to capture SNOMED inactive for a concept"
* property[inactive].code 1..1
* property[inactive].code = #inactive (exactly)
* property[inactive].type = #boolean (exactly)
* property contains definitionStatusId 0..1
* property[definitionStatusId] ^short = "Property slice to capture SNOMED definitionStatusId for a concept"
* property[definitionStatusId].code 1..1
* property[definitionStatusId].code = #definitionStatusId (exactly)
* property[definitionStatusId].type = #Coding (exactly)
* property contains parent 0..1
* property[parent] ^short = "Property slice to capture SNOMED parent for a concept"
* property[parent].code 1..1
* property[parent].code = #parent (exactly)
* property[parent].type = #Coding (exactly)
* property contains moduleId 0..1
* property[moduleId] ^short = "Property slice to capture SNOMED moduleId for a concept"
* property[moduleId].code 1..1
* property[moduleId].code = #moduleId (exactly)
* property[moduleId].type = #Coding (exactly)
* property contains Due_to 0..1
* property[Due_to] ^short = "Property slice to capture SNOMED Due to for a concept"
* property[Due_to].code 1..1
* property[Due_to].code = #"Due to" (exactly)
* property[Due_to].type = #Coding (exactly)
* property contains Associated_with 0..1
* property[Associated_with] ^short = "Property slice to capture SNOMED Associated with for a concept"
* property[Associated_with].code 1..1
* property[Associated_with].code = #"Associated with" (exactly)
* property[Associated_with].type = #Coding (exactly)
* property contains Associated_morphology 0..1
* property[Associated_morphology] ^short = "Property slice to capture SNOMED Associated morphology for a concept"
* property[Associated_morphology].code 1..1
* property[Associated_morphology].code = #"Associated morphology" (exactly)
* property[Associated_morphology].type = #Coding (exactly)
* property contains Has_specimen 0..1
* property[Has_specimen] ^short = "Property slice to capture SNOMED Has specimen for a concept"
* property[Has_specimen].code 1..1
* property[Has_specimen].code = #"Has specimen" (exactly)
* property[Has_specimen].type = #Coding (exactly)
* property contains Specimen_source_morphology 0..1
* property[Specimen_source_morphology] ^short = "Property slice to capture SNOMED Specimen source morphology for a concept"
* property[Specimen_source_morphology].code 1..1
* property[Specimen_source_morphology].code = #"Specimen source morphology" (exactly)
* property[Specimen_source_morphology].type = #Coding (exactly)
* property contains Specimen_source_topography 0..1
* property[Specimen_source_topography] ^short = "Property slice to capture SNOMED Specimen source topography for a concept"
* property[Specimen_source_topography].code 1..1
* property[Specimen_source_topography].code = #"Specimen source topography" (exactly)
* property[Specimen_source_topography].type = #Coding (exactly)
* property contains Specimen_source_identity 0..1
* property[Specimen_source_identity] ^short = "Property slice to capture SNOMED Specimen source identity for a concept"
* property[Specimen_source_identity].code 1..1
* property[Specimen_source_identity].code = #"Specimen source identity" (exactly)
* property[Specimen_source_identity].type = #Coding (exactly)
* property contains Specimen_procedure 0..1
* property[Specimen_procedure] ^short = "Property slice to capture SNOMED Specimen procedure for a concept"
* property[Specimen_procedure].code 1..1
* property[Specimen_procedure].code = #"Specimen procedure" (exactly)
* property[Specimen_procedure].type = #Coding (exactly)
* property contains Part_of 0..1
* property[Part_of] ^short = "Property slice to capture SNOMED Part of for a concept"
* property[Part_of].code 1..1
* property[Part_of].code = #"Part of" (exactly)
* property[Part_of].type = #Coding (exactly)
* property contains Has_active_ingredient 0..1
* property[Has_active_ingredient] ^short = "Property slice to capture SNOMED Has active ingredient for a concept"
* property[Has_active_ingredient].code 1..1
* property[Has_active_ingredient].code = #"Has active ingredient" (exactly)
* property[Has_active_ingredient].type = #Coding (exactly)
* property contains Subject_of_information 0..1
* property[Subject_of_information] ^short = "Property slice to capture SNOMED Subject of information for a concept"
* property[Subject_of_information].code 1..1
* property[Subject_of_information].code = #"Subject of information" (exactly)
* property[Subject_of_information].type = #Coding (exactly)
* property contains Causative_agent 0..1
* property[Causative_agent] ^short = "Property slice to capture SNOMED Causative agent for a concept"
* property[Causative_agent].code 1..1
* property[Causative_agent].code = #"Causative agent" (exactly)
* property[Causative_agent].type = #Coding (exactly)
* property contains Associated_finding 0..1
* property[Associated_finding] ^short = "Property slice to capture SNOMED Associated finding for a concept"
* property[Associated_finding].code 1..1
* property[Associated_finding].code = #"Associated finding" (exactly)
* property[Associated_finding].type = #Coding (exactly)
* property contains Component 0..1
* property[Component] ^short = "Property slice to capture SNOMED Component for a concept"
* property[Component].code 1..1
* property[Component].code = #Component (exactly)
* property[Component].type = #Coding (exactly)
* property contains Severity 0..1
* property[Severity] ^short = "Property slice to capture SNOMED Severity for a concept"
* property[Severity].code 1..1
* property[Severity].code = #Severity (exactly)
* property[Severity].type = #Coding (exactly)
* property contains Occurrence 0..1
* property[Occurrence] ^short = "Property slice to capture SNOMED Occurrence for a concept"
* property[Occurrence].code 1..1
* property[Occurrence].code = #Occurrence (exactly)
* property[Occurrence].type = #Coding (exactly)
* property contains Episodicity 0..1
* property[Episodicity] ^short = "Property slice to capture SNOMED Episodicity for a concept"
* property[Episodicity].code 1..1
* property[Episodicity].code = #Episodicity (exactly)
* property[Episodicity].type = #Coding (exactly)
* property contains Technique 0..1
* property[Technique] ^short = "Property slice to capture SNOMED Technique for a concept"
* property[Technique].code 1..1
* property[Technique].code = #Technique (exactly)
* property[Technique].type = #Coding (exactly)
* property contains Revision_status 0..1
* property[Revision_status] ^short = "Property slice to capture SNOMED Revision status for a concept"
* property[Revision_status].code 1..1
* property[Revision_status].code = #"Revision status" (exactly)
* property[Revision_status].type = #Coding (exactly)
* property contains Units 0..1
* property[Units] ^short = "Property slice to capture SNOMED Units for a concept"
* property[Units].code 1..1
* property[Units].code = #Units (exactly)
* property[Units].type = #Coding (exactly)
* property contains After 0..1
* property[After] ^short = "Property slice to capture SNOMED After for a concept"
* property[After].code 1..1
* property[After].code = #After (exactly)
* property[After].type = #Coding (exactly)
* property contains Access 0..1
* property[Access] ^short = "Property slice to capture SNOMED Access for a concept"
* property[Access].code 1..1
* property[Access].code = #Access (exactly)
* property[Access].type = #Coding (exactly)
* property contains Method 0..1
* property[Method] ^short = "Property slice to capture SNOMED Method for a concept"
* property[Method].code 1..1
* property[Method].code = #Method (exactly)
* property[Method].type = #Coding (exactly)
* property contains Priority 0..1
* property[Priority] ^short = "Property slice to capture SNOMED Priority for a concept"
* property[Priority].code 1..1
* property[Priority].code = #Priority (exactly)
* property[Priority].type = #Coding (exactly)
* property contains Clinical_course 0..1
* property[Clinical_course] ^short = "Property slice to capture SNOMED Clinical course for a concept"
* property[Clinical_course].code 1..1
* property[Clinical_course].code = #"Clinical course" (exactly)
* property[Clinical_course].type = #Coding (exactly)
* property contains Laterality 0..1
* property[Laterality] ^short = "Property slice to capture SNOMED Laterality for a concept"
* property[Laterality].code 1..1
* property[Laterality].code = #Laterality (exactly)
* property[Laterality].type = #Coding (exactly)
* property contains Associated_procedure 0..1
* property[Associated_procedure] ^short = "Property slice to capture SNOMED Associated procedure for a concept"
* property[Associated_procedure].code 1..1
* property[Associated_procedure].code = #"Associated procedure" (exactly)
* property[Associated_procedure].type = #Coding (exactly)
* property contains Finding_site 0..1
* property[Finding_site] ^short = "Property slice to capture SNOMED Finding site for a concept"
* property[Finding_site].code 1..1
* property[Finding_site].code = #"Finding site" (exactly)
* property[Finding_site].type = #Coding (exactly)
* property contains Direct_morphology 0..1
* property[Direct_morphology] ^short = "Property slice to capture SNOMED Direct morphology for a concept"
* property[Direct_morphology].code 1..1
* property[Direct_morphology].code = #"Direct morphology" (exactly)
* property[Direct_morphology].type = #Coding (exactly)
* property contains Direct_substance 0..1
* property[Direct_substance] ^short = "Property slice to capture SNOMED Direct substance for a concept"
* property[Direct_substance].code 1..1
* property[Direct_substance].code = #"Direct substance" (exactly)
* property[Direct_substance].type = #Coding (exactly)
* property contains Has_focus 0..1
* property[Has_focus] ^short = "Property slice to capture SNOMED Has focus for a concept"
* property[Has_focus].code 1..1
* property[Has_focus].code = #"Has focus" (exactly)
* property[Has_focus].type = #Coding (exactly)
* property contains Has_intent 0..1
* property[Has_intent] ^short = "Property slice to capture SNOMED Has intent for a concept"
* property[Has_intent].code 1..1
* property[Has_intent].code = #"Has intent" (exactly)
* property[Has_intent].type = #Coding (exactly)
* property contains Procedure_site 0..1
* property[Procedure_site] ^short = "Property slice to capture SNOMED Procedure site for a concept"
* property[Procedure_site].code 1..1
* property[Procedure_site].code = #"Procedure site" (exactly)
* property[Procedure_site].type = #Coding (exactly)
* property contains Has_definitional_manifestation 0..1
* property[Has_definitional_manifestation] ^short = "Property slice to capture SNOMED Has definitional manifestation for a concept"
* property[Has_definitional_manifestation].code 1..1
* property[Has_definitional_manifestation].code = #"Has definitional manifestation" (exactly)
* property[Has_definitional_manifestation].type = #Coding (exactly)
* property contains Indirect_morphology 0..1
* property[Indirect_morphology] ^short = "Property slice to capture SNOMED Indirect morphology for a concept"
* property[Indirect_morphology].code 1..1
* property[Indirect_morphology].code = #"Indirect morphology" (exactly)
* property[Indirect_morphology].type = #Coding (exactly)
* property contains Indirect_device 0..1
* property[Indirect_device] ^short = "Property slice to capture SNOMED Indirect device for a concept"
* property[Indirect_device].code 1..1
* property[Indirect_device].code = #"Indirect device" (exactly)
* property[Indirect_device].type = #Coding (exactly)
* property contains Has_interpretation 0..1
* property[Has_interpretation] ^short = "Property slice to capture SNOMED Has interpretation for a concept"
* property[Has_interpretation].code 1..1
* property[Has_interpretation].code = #"Has interpretation" (exactly)
* property[Has_interpretation].type = #Coding (exactly)
* property contains Interprets 0..1
* property[Interprets] ^short = "Property slice to capture SNOMED Interprets for a concept"
* property[Interprets].code 1..1
* property[Interprets].code = #Interprets (exactly)
* property[Interprets].type = #Coding (exactly)
* property contains Measurement_method 0..1
* property[Measurement_method] ^short = "Property slice to capture SNOMED Measurement method for a concept"
* property[Measurement_method].code 1..1
* property[Measurement_method].code = #"Measurement method" (exactly)
* property[Measurement_method].type = #Coding (exactly)
* property contains Property 0..1
* property[Property] ^short = "Property slice to capture SNOMED Property for a concept"
* property[Property].code 1..1
* property[Property].code = #Property (exactly)
* property[Property].type = #Coding (exactly)
* property contains Recipient_category 0..1
* property[Recipient_category] ^short = "Property slice to capture SNOMED Recipient category for a concept"
* property[Recipient_category].code 1..1
* property[Recipient_category].code = #"Recipient category" (exactly)
* property[Recipient_category].type = #Coding (exactly)
* property contains Scale_type 0..1
* property[Scale_type] ^short = "Property slice to capture SNOMED Scale type for a concept"
* property[Scale_type].code 1..1
* property[Scale_type].code = #"Scale type" (exactly)
* property[Scale_type].type = #Coding (exactly)
* property contains Specimen_substance 0..1
* property[Specimen_substance] ^short = "Property slice to capture SNOMED Specimen substance for a concept"
* property[Specimen_substance].code 1..1
* property[Specimen_substance].code = #"Specimen substance" (exactly)
* property[Specimen_substance].type = #Coding (exactly)
* property contains Time_aspect 0..1
* property[Time_aspect] ^short = "Property slice to capture SNOMED Time aspect for a concept"
* property[Time_aspect].code 1..1
* property[Time_aspect].code = #"Time aspect" (exactly)
* property[Time_aspect].type = #Coding (exactly)
* property contains Pathological_process 0..1
* property[Pathological_process] ^short = "Property slice to capture SNOMED Pathological process for a concept"
* property[Pathological_process].code 1..1
* property[Pathological_process].code = #"Pathological process" (exactly)
* property[Pathological_process].type = #Coding (exactly)
* property contains Procedure_site_-_Direct 0..1
* property[Procedure_site_-_Direct] ^short = "Property slice to capture SNOMED Procedure site - Direct for a concept"
* property[Procedure_site_-_Direct].code 1..1
* property[Procedure_site_-_Direct].code = #"Procedure site - Direct" (exactly)
* property[Procedure_site_-_Direct].type = #Coding (exactly)
* property contains Procedure_site_-_Indirect 0..1
* property[Procedure_site_-_Indirect] ^short = "Property slice to capture SNOMED Procedure site - Indirect for a concept"
* property[Procedure_site_-_Indirect].code 1..1
* property[Procedure_site_-_Indirect].code = #"Procedure site - Indirect" (exactly)
* property[Procedure_site_-_Indirect].type = #Coding (exactly)
* property contains Procedure_device 0..1
* property[Procedure_device] ^short = "Property slice to capture SNOMED Procedure device for a concept"
* property[Procedure_device].code 1..1
* property[Procedure_device].code = #"Procedure device" (exactly)
* property[Procedure_device].type = #Coding (exactly)
* property contains Procedure_morphology 0..1
* property[Procedure_morphology] ^short = "Property slice to capture SNOMED Procedure morphology for a concept"
* property[Procedure_morphology].code 1..1
* property[Procedure_morphology].code = #"Procedure morphology" (exactly)
* property[Procedure_morphology].type = #Coding (exactly)
* property contains Finding_context 0..1
* property[Finding_context] ^short = "Property slice to capture SNOMED Finding context for a concept"
* property[Finding_context].code 1..1
* property[Finding_context].code = #"Finding context" (exactly)
* property[Finding_context].type = #Coding (exactly)
* property contains Temporal_context 0..1
* property[Temporal_context] ^short = "Property slice to capture SNOMED Temporal context for a concept"
* property[Temporal_context].code 1..1
* property[Temporal_context].code = #"Temporal context" (exactly)
* property[Temporal_context].type = #Coding (exactly)
* property contains Subject_relationship_context 0..1
* property[Subject_relationship_context] ^short = "Property slice to capture SNOMED Subject relationship context for a concept"
* property[Subject_relationship_context].code 1..1
* property[Subject_relationship_context].code = #"Subject relationship context" (exactly)
* property[Subject_relationship_context].type = #Coding (exactly)
* property contains Route_of_administration 0..1
* property[Route_of_administration] ^short = "Property slice to capture SNOMED Route of administration for a concept"
* property[Route_of_administration].code 1..1
* property[Route_of_administration].code = #"Route of administration" (exactly)
* property[Route_of_administration].type = #Coding (exactly)
* property contains Has_dose_form 0..1
* property[Has_dose_form] ^short = "Property slice to capture SNOMED Has dose form for a concept"
* property[Has_dose_form].code 1..1
* property[Has_dose_form].code = #"Has dose form" (exactly)
* property[Has_dose_form].type = #Coding (exactly)
* property contains Finding_method 0..1
* property[Finding_method] ^short = "Property slice to capture SNOMED Finding method for a concept"
* property[Finding_method].code 1..1
* property[Finding_method].code = #"Finding method" (exactly)
* property[Finding_method].type = #Coding (exactly)
* property contains Finding_informer 0..1
* property[Finding_informer] ^short = "Property slice to capture SNOMED Finding informer for a concept"
* property[Finding_informer].code 1..1
* property[Finding_informer].code = #"Finding informer" (exactly)
* property[Finding_informer].type = #Coding (exactly)
* property contains Using_device 0..1
* property[Using_device] ^short = "Property slice to capture SNOMED Using device for a concept"
* property[Using_device].code 1..1
* property[Using_device].code = #"Using device" (exactly)
* property[Using_device].type = #Coding (exactly)
* property contains Using_energy 0..1
* property[Using_energy] ^short = "Property slice to capture SNOMED Using energy for a concept"
* property[Using_energy].code 1..1
* property[Using_energy].code = #"Using energy" (exactly)
* property[Using_energy].type = #Coding (exactly)
* property contains Using_substance 0..1
* property[Using_substance] ^short = "Property slice to capture SNOMED Using substance for a concept"
* property[Using_substance].code 1..1
* property[Using_substance].code = #"Using substance" (exactly)
* property[Using_substance].type = #Coding (exactly)
* property contains Surgical_approach 0..1
* property[Surgical_approach] ^short = "Property slice to capture SNOMED Surgical approach for a concept"
* property[Surgical_approach].code 1..1
* property[Surgical_approach].code = #"Surgical approach" (exactly)
* property[Surgical_approach].type = #Coding (exactly)
* property contains Using_access_device 0..1
* property[Using_access_device] ^short = "Property slice to capture SNOMED Using access device for a concept"
* property[Using_access_device].code 1..1
* property[Using_access_device].code = #"Using access device" (exactly)
* property[Using_access_device].type = #Coding (exactly)
* property contains Property_type 0..1
* property[Property_type] ^short = "Property slice to capture SNOMED Property type for a concept"
* property[Property_type].code 1..1
* property[Property_type].code = #"Property type" (exactly)
* property[Property_type].type = #Coding (exactly)
* property contains Inheres_in 0..1
* property[Inheres_in] ^short = "Property slice to capture SNOMED Inheres in for a concept"
* property[Inheres_in].code 1..1
* property[Inheres_in].code = #"Inheres in" (exactly)
* property[Inheres_in].type = #Coding (exactly)
* property contains Towards 0..1
* property[Towards] ^short = "Property slice to capture SNOMED Towards for a concept"
* property[Towards].code 1..1
* property[Towards].code = #Towards (exactly)
* property[Towards].type = #Coding (exactly)
* property contains Characterizes 0..1
* property[Characterizes] ^short = "Property slice to capture SNOMED Characterizes for a concept"
* property[Characterizes].code 1..1
* property[Characterizes].code = #Characterizes (exactly)
* property[Characterizes].type = #Coding (exactly)
* property contains Process_agent 0..1
* property[Process_agent] ^short = "Property slice to capture SNOMED Process agent for a concept"
* property[Process_agent].code 1..1
* property[Process_agent].code = #"Process agent" (exactly)
* property[Process_agent].type = #Coding (exactly)
* property contains Process_duration 0..1
* property[Process_duration] ^short = "Property slice to capture SNOMED Process duration for a concept"
* property[Process_duration].code 1..1
* property[Process_duration].code = #"Process duration" (exactly)
* property[Process_duration].type = #Coding (exactly)
* property contains Process_output 0..1
* property[Process_output] ^short = "Property slice to capture SNOMED Process output for a concept"
* property[Process_output].code 1..1
* property[Process_output].code = #"Process output" (exactly)
* property[Process_output].type = #Coding (exactly)
* property contains Relative_to 0..1
* property[Relative_to] ^short = "Property slice to capture SNOMED Relative to for a concept"
* property[Relative_to].code 1..1
* property[Relative_to].code = #"Relative to" (exactly)
* property[Relative_to].type = #Coding (exactly)
* property contains Precondition 0..1
* property[Precondition] ^short = "Property slice to capture SNOMED Precondition for a concept"
* property[Precondition].code 1..1
* property[Precondition].code = #Precondition (exactly)
* property[Precondition].type = #Coding (exactly)
* property contains Direct_site 0..1
* property[Direct_site] ^short = "Property slice to capture SNOMED Direct site for a concept"
* property[Direct_site].code 1..1
* property[Direct_site].code = #"Direct site" (exactly)
* property[Direct_site].type = #Coding (exactly)
* property contains Specified_by 0..1
* property[Specified_by] ^short = "Property slice to capture SNOMED Specified by for a concept"
* property[Specified_by].code 1..1
* property[Specified_by].code = #"Specified by" (exactly)
* property[Specified_by].type = #Coding (exactly)
* property contains Observes 0..1
* property[Observes] ^short = "Property slice to capture SNOMED Observes for a concept"
* property[Observes].code 1..1
* property[Observes].code = #Observes (exactly)
* property[Observes].type = #Coding (exactly)
* property contains Is_about 0..1
* property[Is_about] ^short = "Property slice to capture SNOMED Is about for a concept"
* property[Is_about].code 1..1
* property[Is_about].code = #"Is about" (exactly)
* property[Is_about].type = #Coding (exactly)
* property contains Defined 0..1
* property[Defined] ^short = "Property slice to capture SNOMED Defined for a concept"
* property[Defined].code 1..1
* property[Defined].code = #Defined (exactly)
* property[Defined].type = #boolean (exactly)


* concept.code ^mapping.identity = "tinkar"
* concept.code ^mapping.map = "SNOMED CT IDENTIFER SOURCE"
* concept.designation.extension[caseSensitivity] 1..1
* concept.designation.extension[acceptability] 1..1
* concept.property.extension[DefiningRelationshipType] 1..1
* concept.property.extension[elProfileSetOperator] 1..1

* concept.property 0..* MS
* concept.property ^slicing.discriminator[0].type = #value
* concept.property ^slicing.discriminator[0].path = "code"
* concept.property ^slicing.rules = #open
* concept.property contains inactive 0..1
* concept.property[inactive] ^short = "Property slice to capture SNOMED inactive for a concept"
* concept.property[inactive].code 1..1
* concept.property[inactive].code = #inactive (exactly)
* concept.property contains definitionStatusId 0..1
* concept.property[definitionStatusId] ^short = "Property slice to capture SNOMED definitionStatusId for a concept"
* concept.property[definitionStatusId].code 1..1
* concept.property[definitionStatusId].code = #definitionStatusId (exactly)
* concept.property contains parent 0..1
* concept.property[parent] ^short = "Property slice to capture SNOMED parent for a concept"
* concept.property[parent].code 1..1
* concept.property[parent].code = #parent (exactly)
* concept.property contains moduleId 0..1
* concept.property[moduleId] ^short = "Property slice to capture SNOMED moduleId for a concept"
* concept.property[moduleId].code 1..1
* concept.property[moduleId].code = #moduleId (exactly)
* concept.property contains Due_to 0..1
* concept.property[Due_to] ^short = "Property slice to capture SNOMED Due to for a concept"
* concept.property[Due_to].code 1..1
* concept.property[Due_to].code = #"Due to" (exactly)
* concept.property contains Associated_with 0..1
* concept.property[Associated_with] ^short = "Property slice to capture SNOMED Associated with for a concept"
* concept.property[Associated_with].code 1..1
* concept.property[Associated_with].code = #"Associated with" (exactly)
* concept.property contains Associated_morphology 0..1
* concept.property[Associated_morphology] ^short = "Property slice to capture SNOMED Associated morphology for a concept"
* concept.property[Associated_morphology].code 1..1
* concept.property[Associated_morphology].code = #"Associated morphology" (exactly)
* concept.property contains Has_specimen 0..1
* concept.property[Has_specimen] ^short = "Property slice to capture SNOMED Has specimen for a concept"
* concept.property[Has_specimen].code 1..1
* concept.property[Has_specimen].code = #"Has specimen" (exactly)
* concept.property contains Specimen_source_morphology 0..1
* concept.property[Specimen_source_morphology] ^short = "Property slice to capture SNOMED Specimen source morphology for a concept"
* concept.property[Specimen_source_morphology].code 1..1
* concept.property[Specimen_source_morphology].code = #"Specimen source morphology" (exactly)
* concept.property contains Specimen_source_topography 0..1
* concept.property[Specimen_source_topography] ^short = "Property slice to capture SNOMED Specimen source topography for a concept"
* concept.property[Specimen_source_topography].code 1..1
* concept.property[Specimen_source_topography].code = #"Specimen source topography" (exactly)
* concept.property contains Specimen_source_identity 0..1
* concept.property[Specimen_source_identity] ^short = "Property slice to capture SNOMED Specimen source identity for a concept"
* concept.property[Specimen_source_identity].code 1..1
* concept.property[Specimen_source_identity].code = #"Specimen source identity" (exactly)
* concept.property contains Specimen_procedure 0..1
* concept.property[Specimen_procedure] ^short = "Property slice to capture SNOMED Specimen procedure for a concept"
* concept.property[Specimen_procedure].code 1..1
* concept.property[Specimen_procedure].code = #"Specimen procedure" (exactly)
* concept.property contains Part_of 0..1
* concept.property[Part_of] ^short = "Property slice to capture SNOMED Part of for a concept"
* concept.property[Part_of].code 1..1
* concept.property[Part_of].code = #"Part of" (exactly)
* concept.property contains Has_active_ingredient 0..1
* concept.property[Has_active_ingredient] ^short = "Property slice to capture SNOMED Has active ingredient for a concept"
* concept.property[Has_active_ingredient].code 1..1
* concept.property[Has_active_ingredient].code = #"Has active ingredient" (exactly)
* concept.property contains Subject_of_information 0..1
* concept.property[Subject_of_information] ^short = "Property slice to capture SNOMED Subject of information for a concept"
* concept.property[Subject_of_information].code 1..1
* concept.property[Subject_of_information].code = #"Subject of information" (exactly)
* concept.property contains Causative_agent 0..1
* concept.property[Causative_agent] ^short = "Property slice to capture SNOMED Causative agent for a concept"
* concept.property[Causative_agent].code 1..1
* concept.property[Causative_agent].code = #"Causative agent" (exactly)
* concept.property contains Associated_finding 0..1
* concept.property[Associated_finding] ^short = "Property slice to capture SNOMED Associated finding for a concept"
* concept.property[Associated_finding].code 1..1
* concept.property[Associated_finding].code = #"Associated finding" (exactly)
* concept.property contains Component 0..1
* concept.property[Component] ^short = "Property slice to capture SNOMED Component for a concept"
* concept.property[Component].code 1..1
* concept.property[Component].code = #Component (exactly)
* concept.property contains Severity 0..1
* concept.property[Severity] ^short = "Property slice to capture SNOMED Severity for a concept"
* concept.property[Severity].code 1..1
* concept.property[Severity].code = #Severity (exactly)
* concept.property contains Occurrence 0..1
* concept.property[Occurrence] ^short = "Property slice to capture SNOMED Occurrence for a concept"
* concept.property[Occurrence].code 1..1
* concept.property[Occurrence].code = #Occurrence (exactly)
* concept.property contains Episodicity 0..1
* concept.property[Episodicity] ^short = "Property slice to capture SNOMED Episodicity for a concept"
* concept.property[Episodicity].code 1..1
* concept.property[Episodicity].code = #Episodicity (exactly)
* concept.property contains Technique 0..1
* concept.property[Technique] ^short = "Property slice to capture SNOMED Technique for a concept"
* concept.property[Technique].code 1..1
* concept.property[Technique].code = #Technique (exactly)
* concept.property contains Revision_status 0..1
* concept.property[Revision_status] ^short = "Property slice to capture SNOMED Revision status for a concept"
* concept.property[Revision_status].code 1..1
* concept.property[Revision_status].code = #"Revision status" (exactly)
* concept.property contains Units 0..1
* concept.property[Units] ^short = "Property slice to capture SNOMED Units for a concept"
* concept.property[Units].code 1..1
* concept.property[Units].code = #Units (exactly)
* concept.property contains After 0..1
* concept.property[After] ^short = "Property slice to capture SNOMED After for a concept"
* concept.property[After].code 1..1
* concept.property[After].code = #After (exactly)
* concept.property contains Access 0..1
* concept.property[Access] ^short = "Property slice to capture SNOMED Access for a concept"
* concept.property[Access].code 1..1
* concept.property[Access].code = #Access (exactly)
* concept.property contains Method 0..1
* concept.property[Method] ^short = "Property slice to capture SNOMED Method for a concept"
* concept.property[Method].code 1..1
* concept.property[Method].code = #Method (exactly)
* concept.property contains Priority 0..1
* concept.property[Priority] ^short = "Property slice to capture SNOMED Priority for a concept"
* concept.property[Priority].code 1..1
* concept.property[Priority].code = #Priority (exactly)
* concept.property contains Clinical_course 0..1
* concept.property[Clinical_course] ^short = "Property slice to capture SNOMED Clinical course for a concept"
* concept.property[Clinical_course].code 1..1
* concept.property[Clinical_course].code = #"Clinical course" (exactly)
* concept.property contains Laterality 0..1
* concept.property[Laterality] ^short = "Property slice to capture SNOMED Laterality for a concept"
* concept.property[Laterality].code 1..1
* concept.property[Laterality].code = #Laterality (exactly)
* concept.property contains Associated_procedure 0..1
* concept.property[Associated_procedure] ^short = "Property slice to capture SNOMED Associated procedure for a concept"
* concept.property[Associated_procedure].code 1..1
* concept.property[Associated_procedure].code = #"Associated procedure" (exactly)
* concept.property contains Finding_site 0..1
* concept.property[Finding_site] ^short = "Property slice to capture SNOMED Finding site for a concept"
* concept.property[Finding_site].code 1..1
* concept.property[Finding_site].code = #"Finding site" (exactly)
* concept.property contains Direct_morphology 0..1
* concept.property[Direct_morphology] ^short = "Property slice to capture SNOMED Direct morphology for a concept"
* concept.property[Direct_morphology].code 1..1
* concept.property[Direct_morphology].code = #"Direct morphology" (exactly)
* concept.property contains Direct_substance 0..1
* concept.property[Direct_substance] ^short = "Property slice to capture SNOMED Direct substance for a concept"
* concept.property[Direct_substance].code 1..1
* concept.property[Direct_substance].code = #"Direct substance" (exactly)
* concept.property contains Has_focus 0..1
* concept.property[Has_focus] ^short = "Property slice to capture SNOMED Has focus for a concept"
* concept.property[Has_focus].code 1..1
* concept.property[Has_focus].code = #"Has focus" (exactly)
* concept.property contains Has_intent 0..1
* concept.property[Has_intent] ^short = "Property slice to capture SNOMED Has intent for a concept"
* concept.property[Has_intent].code 1..1
* concept.property[Has_intent].code = #"Has intent" (exactly)
* concept.property contains Procedure_site 0..1
* concept.property[Procedure_site] ^short = "Property slice to capture SNOMED Procedure site for a concept"
* concept.property[Procedure_site].code 1..1
* concept.property[Procedure_site].code = #"Procedure site" (exactly)
* concept.property contains Has_definitional_manifestation 0..1
* concept.property[Has_definitional_manifestation] ^short = "Property slice to capture SNOMED Has definitional manifestation for a concept"
* concept.property[Has_definitional_manifestation].code 1..1
* concept.property[Has_definitional_manifestation].code = #"Has definitional manifestation" (exactly)
* concept.property contains Indirect_morphology 0..1
* concept.property[Indirect_morphology] ^short = "Property slice to capture SNOMED Indirect morphology for a concept"
* concept.property[Indirect_morphology].code 1..1
* concept.property[Indirect_morphology].code = #"Indirect morphology" (exactly)
* concept.property contains Indirect_device 0..1
* concept.property[Indirect_device] ^short = "Property slice to capture SNOMED Indirect device for a concept"
* concept.property[Indirect_device].code 1..1
* concept.property[Indirect_device].code = #"Indirect device" (exactly)
* concept.property contains Has_interpretation 0..1
* concept.property[Has_interpretation] ^short = "Property slice to capture SNOMED Has interpretation for a concept"
* concept.property[Has_interpretation].code 1..1
* concept.property[Has_interpretation].code = #"Has interpretation" (exactly)
* concept.property contains Interprets 0..1
* concept.property[Interprets] ^short = "Property slice to capture SNOMED Interprets for a concept"
* concept.property[Interprets].code 1..1
* concept.property[Interprets].code = #Interprets (exactly)
* concept.property contains Measurement_method 0..1
* concept.property[Measurement_method] ^short = "Property slice to capture SNOMED Measurement method for a concept"
* concept.property[Measurement_method].code 1..1
* concept.property[Measurement_method].code = #"Measurement method" (exactly)
* concept.property contains Property 0..1
* concept.property[Property] ^short = "Property slice to capture SNOMED Property for a concept"
* concept.property[Property].code 1..1
* concept.property[Property].code = #Property (exactly)
* concept.property contains Recipient_category 0..1
* concept.property[Recipient_category] ^short = "Property slice to capture SNOMED Recipient category for a concept"
* concept.property[Recipient_category].code 1..1
* concept.property[Recipient_category].code = #"Recipient category" (exactly)
* concept.property contains Scale_type 0..1
* concept.property[Scale_type] ^short = "Property slice to capture SNOMED Scale type for a concept"
* concept.property[Scale_type].code 1..1
* concept.property[Scale_type].code = #"Scale type" (exactly)
* concept.property contains Specimen_substance 0..1
* concept.property[Specimen_substance] ^short = "Property slice to capture SNOMED Specimen substance for a concept"
* concept.property[Specimen_substance].code 1..1
* concept.property[Specimen_substance].code = #"Specimen substance" (exactly)
* concept.property contains Time_aspect 0..1
* concept.property[Time_aspect] ^short = "Property slice to capture SNOMED Time aspect for a concept"
* concept.property[Time_aspect].code 1..1
* concept.property[Time_aspect].code = #"Time aspect" (exactly)
* concept.property contains Pathological_process 0..1
* concept.property[Pathological_process] ^short = "Property slice to capture SNOMED Pathological process for a concept"
* concept.property[Pathological_process].code 1..1
* concept.property[Pathological_process].code = #"Pathological process" (exactly)
* concept.property contains Procedure_site_-_Direct 0..1
* concept.property[Procedure_site_-_Direct] ^short = "Property slice to capture SNOMED Procedure site - Direct for a concept"
* concept.property[Procedure_site_-_Direct].code 1..1
* concept.property[Procedure_site_-_Direct].code = #"Procedure site - Direct" (exactly)
* concept.property contains Procedure_site_-_Indirect 0..1
* concept.property[Procedure_site_-_Indirect] ^short = "Property slice to capture SNOMED Procedure site - Indirect for a concept"
* concept.property[Procedure_site_-_Indirect].code 1..1
* concept.property[Procedure_site_-_Indirect].code = #"Procedure site - Indirect" (exactly)
* concept.property contains Procedure_device 0..1
* concept.property[Procedure_device] ^short = "Property slice to capture SNOMED Procedure device for a concept"
* concept.property[Procedure_device].code 1..1
* concept.property[Procedure_device].code = #"Procedure device" (exactly)
* concept.property contains Procedure_morphology 0..1
* concept.property[Procedure_morphology] ^short = "Property slice to capture SNOMED Procedure morphology for a concept"
* concept.property[Procedure_morphology].code 1..1
* concept.property[Procedure_morphology].code = #"Procedure morphology" (exactly)
* concept.property contains Finding_context 0..1
* concept.property[Finding_context] ^short = "Property slice to capture SNOMED Finding context for a concept"
* concept.property[Finding_context].code 1..1
* concept.property[Finding_context].code = #"Finding context" (exactly)
* concept.property contains Temporal_context 0..1
* concept.property[Temporal_context] ^short = "Property slice to capture SNOMED Temporal context for a concept"
* concept.property[Temporal_context].code 1..1
* concept.property[Temporal_context].code = #"Temporal context" (exactly)
* concept.property contains Subject_relationship_context 0..1
* concept.property[Subject_relationship_context] ^short = "Property slice to capture SNOMED Subject relationship context for a concept"
* concept.property[Subject_relationship_context].code 1..1
* concept.property[Subject_relationship_context].code = #"Subject relationship context" (exactly)
* concept.property contains Route_of_administration 0..1
* concept.property[Route_of_administration] ^short = "Property slice to capture SNOMED Route of administration for a concept"
* concept.property[Route_of_administration].code 1..1
* concept.property[Route_of_administration].code = #"Route of administration" (exactly)
* concept.property contains Has_dose_form 0..1
* concept.property[Has_dose_form] ^short = "Property slice to capture SNOMED Has dose form for a concept"
* concept.property[Has_dose_form].code 1..1
* concept.property[Has_dose_form].code = #"Has dose form" (exactly)
* concept.property contains Finding_method 0..1
* concept.property[Finding_method] ^short = "Property slice to capture SNOMED Finding method for a concept"
* concept.property[Finding_method].code 1..1
* concept.property[Finding_method].code = #"Finding method" (exactly)
* concept.property contains Finding_informer 0..1
* concept.property[Finding_informer] ^short = "Property slice to capture SNOMED Finding informer for a concept"
* concept.property[Finding_informer].code 1..1
* concept.property[Finding_informer].code = #"Finding informer" (exactly)
* concept.property contains Using_device 0..1
* concept.property[Using_device] ^short = "Property slice to capture SNOMED Using device for a concept"
* concept.property[Using_device].code 1..1
* concept.property[Using_device].code = #"Using device" (exactly)
* concept.property contains Using_energy 0..1
* concept.property[Using_energy] ^short = "Property slice to capture SNOMED Using energy for a concept"
* concept.property[Using_energy].code 1..1
* concept.property[Using_energy].code = #"Using energy" (exactly)
* concept.property contains Using_substance 0..1
* concept.property[Using_substance] ^short = "Property slice to capture SNOMED Using substance for a concept"
* concept.property[Using_substance].code 1..1
* concept.property[Using_substance].code = #"Using substance" (exactly)
* concept.property contains Surgical_approach 0..1
* concept.property[Surgical_approach] ^short = "Property slice to capture SNOMED Surgical approach for a concept"
* concept.property[Surgical_approach].code 1..1
* concept.property[Surgical_approach].code = #"Surgical approach" (exactly)
* concept.property contains Using_access_device 0..1
* concept.property[Using_access_device] ^short = "Property slice to capture SNOMED Using access device for a concept"
* concept.property[Using_access_device].code 1..1
* concept.property[Using_access_device].code = #"Using access device" (exactly)
* concept.property contains Property_type 0..1
* concept.property[Property_type] ^short = "Property slice to capture SNOMED Property type for a concept"
* concept.property[Property_type].code 1..1
* concept.property[Property_type].code = #"Property type" (exactly)
* concept.property contains Inheres_in 0..1
* concept.property[Inheres_in] ^short = "Property slice to capture SNOMED Inheres in for a concept"
* concept.property[Inheres_in].code 1..1
* concept.property[Inheres_in].code = #"Inheres in" (exactly)
* concept.property contains Towards 0..1
* concept.property[Towards] ^short = "Property slice to capture SNOMED Towards for a concept"
* concept.property[Towards].code 1..1
* concept.property[Towards].code = #Towards (exactly)
* concept.property contains Characterizes 0..1
* concept.property[Characterizes] ^short = "Property slice to capture SNOMED Characterizes for a concept"
* concept.property[Characterizes].code 1..1
* concept.property[Characterizes].code = #Characterizes (exactly)
* concept.property contains Process_agent 0..1
* concept.property[Process_agent] ^short = "Property slice to capture SNOMED Process agent for a concept"
* concept.property[Process_agent].code 1..1
* concept.property[Process_agent].code = #"Process agent" (exactly)
* concept.property contains Process_duration 0..1
* concept.property[Process_duration] ^short = "Property slice to capture SNOMED Process duration for a concept"
* concept.property[Process_duration].code 1..1
* concept.property[Process_duration].code = #"Process duration" (exactly)
* concept.property contains Process_output 0..1
* concept.property[Process_output] ^short = "Property slice to capture SNOMED Process output for a concept"
* concept.property[Process_output].code 1..1
* concept.property[Process_output].code = #"Process output" (exactly)
* concept.property contains Relative_to 0..1
* concept.property[Relative_to] ^short = "Property slice to capture SNOMED Relative to for a concept"
* concept.property[Relative_to].code 1..1
* concept.property[Relative_to].code = #"Relative to" (exactly)
* concept.property contains Precondition 0..1
* concept.property[Precondition] ^short = "Property slice to capture SNOMED Precondition for a concept"
* concept.property[Precondition].code 1..1
* concept.property[Precondition].code = #Precondition (exactly)
* concept.property contains Direct_site 0..1
* concept.property[Direct_site] ^short = "Property slice to capture SNOMED Direct site for a concept"
* concept.property[Direct_site].code 1..1
* concept.property[Direct_site].code = #"Direct site" (exactly)
* concept.property contains Specified_by 0..1
* concept.property[Specified_by] ^short = "Property slice to capture SNOMED Specified by for a concept"
* concept.property[Specified_by].code 1..1
* concept.property[Specified_by].code = #"Specified by" (exactly)
* concept.property contains Observes 0..1
* concept.property[Observes] ^short = "Property slice to capture SNOMED Observes for a concept"
* concept.property[Observes].code 1..1
* concept.property[Observes].code = #Observes (exactly)
* concept.property contains Is_about 0..1
* concept.property[Is_about] ^short = "Property slice to capture SNOMED Is about for a concept"
* concept.property[Is_about].code 1..1
* concept.property[Is_about].code = #"Is about" (exactly)
* concept.property contains Defined 0..1
* concept.property[Defined] ^short = "Property slice to capture SNOMED Defined for a concept"
* concept.property[Defined].code 1..1
* concept.property[Defined].code = #Defined (exactly)





---

File: repos/HL7_SLASH_termchangeset-ig/input/fsh/Profile_Provenance_TermChangeSetProvenance.fsh

Profile: TerminologyChangeSetProvenance
Id: terminology-changeset-provenance-profile
Parent: Provenance
Title: "Terminology Change Set Provenance (Provenance)"
Description: "Profile of Provenance to use in concert with terminology change sets compliant with Tinkar information model requirements"
* ^mapping[+].identity = "tinkar"
* ^mapping[=].uri = "https://hl7.org/fhir/uv/tinkar"
* ^mapping[=].name = "Tinkar Reference Model"
* occurredPeriod 1..1
* occurredPeriod.end 1..1
* occurredPeriod ^short = "Authoring change sets occur over a period of time so it is most appropriate to capture as an occurredPeriod vs. occurredDateTime.  This window may reflect the technical timeframe when changes occurred, or a broader scoping window used to gather changes to define a change set."
* reason 1..1
* reason ^short = "The reason for authoring the change set - most likely value is METAMGT, but allowing flexibility here as needed"
* activity 1..1
* activity.coding.code = #UPDATE (exactly)
* activity.coding.system = "http://terminology.hl7.org/CodeSystem/v3-DataOperation" (exactly)
* activity ^short = "For a terminology change set, this should always be an update to a terminology"
* agent ^slicing.discriminator.type = #value
* agent ^slicing.discriminator.path = "type.coding.code"
* agent ^slicing.rules = #openAtEnd
* agent contains
	author 1..* and
	custodian 1..1
* agent[author] ^short = "The individual(s) who contributed changes reflected in the Terminology Change Set"
* agent[author].type 1..1
* agent[author].type.coding 1..1
* agent[author].type.coding.system 1..1
* agent[author].type.coding.code = #author (exactly)
* agent[author].type.coding.system = "http://terminology.hl7.org/CodeSystem/provenance-participant-type" (exactly)
* agent[author].who.display ^mapping.identity = "tinkar"
* agent[author].who.display ^mapping.map = "Author"
* agent[custodian] ^short = "The entity that is accountable for maintaining a true and accurate copy of the Terminology Change Set"
* agent[custodian].type 1..1
* agent[custodian].type.coding 1..1
* agent[custodian].type.coding.system 1..1
* agent[custodian].type.coding.code = #custodian (exactly)
* agent[custodian].type.coding.system = "http://terminology.hl7.org/CodeSystem/provenance-participant-type" (exactly)
* agent[custodian].who.display ^mapping.identity = "tinkar"
* agent[custodian].who.display ^mapping.map = "Known limitation of current Tinkar model, will update in future version"
* entity ^slicing.discriminator.type = #value
* entity ^slicing.discriminator.path = "role"
* entity ^slicing.rules = #openAtEnd
* entity contains
	revision 1..1
* entity[revision].role = #revision (exactly)
* entity[revision].what 1..1
* entity.what ^short = "The baseline version of the CodeSystem to which this Change Set is intended to be applied."
* entity.what.identifier.value 0..1 MS
* entity.what.identifier.value ^short = "Unique identifier for the baseline version of the CodeSystem to which this Change Set is intended to be applied."
* entity.what.identifier.value ^mapping.identity = "tinkar"
* entity.what.identifier.value ^mapping.map = "Known limitation of current Tinkar model, will update in future version"
* entity.what.display ^short = "Text alternative representation of the baseline version of the CodeSystem to which this Change Set is intended to be applied."
* entity.what.display ^mapping.identity = "tinkar"
* entity.what.display ^mapping.map = "Module"








---

File: repos/HL7_SLASH_termchangeset-ig/input/fsh/RuleSets.fsh

RuleSet: SNOMEDCopyrightForVS
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"


---

File: repos/HL7_SLASH_termchangeset-ig/input/fsh/ValueSets.fsh

Alias:   SCT = http://snomed.info/sct

ValueSet: CaseSignificanceVS
Id: case-significance-vs
Title: "Case Significance Value Set"
Description:  "Codes describing case significance for a terminology concept. The value set includes all codes from the SNOMED CT descending from 900000000000447004 Case significance."
* insert SNOMEDCopyrightForVS
* ^experimental = false
* include codes from system SCT where concept descendant-of #900000000000447004 "Case significance"
//* exclude SCT#900000000000447004 "Case significance"

ValueSet: DescriptionAcceptabilityVS
Id: description-acceptability-vs
Title: "Description Acceptability Value Set"
Description:  "Codes describing acceptability of a given description for a terminology concept. The value set includes all codes from the SNOMED CT descending from 900000000000511003 Acceptability."
* insert SNOMEDCopyrightForVS
* ^experimental = false
* include codes from system SCT where concept descendant-of #900000000000511003 "Acceptablity"
//* exclude SCT#900000000000511003 "Acceptablity"

ValueSet: DefiningRelationshipTypeVS
Id: defining-relationship-type-vs
Title: "Defining Relationship Type Value Set"
Description:  "Codes describing the nature of a relationship used to define a terminology concept. The value set includes all codes from the SNOMED CT descending from 900000000000006009 Defining relationship."
* insert SNOMEDCopyrightForVS
* ^experimental = false
* include codes from system SCT where concept descendant-of #900000000000006009 "Defining relationship"
//* exclude SCT#900000000000006009 "Defining relationship"

ValueSet: ELProfileSetOperatorVS
Id: el-profile-set-operator-vs
Title: "EL Profile Set Operator Value Set"
Description:  "Codes describing the nature of an axiom in relationship to a concept, in terms of if it is part of the Necessary vs. Sufficient set for defining the concept. The value set includes all codes from the SNOMED CT descending from 900000000000444006 Definition status."
* insert SNOMEDCopyrightForVS
* ^experimental = false
* include codes from system SCT where concept descendant-of #900000000000444006 "Definition status"
//* exclude SCT#900000000000444006 "Definition status"

ValueSet: DialectVS
Id: dialect-vs
Title: "Dialect Value Set"
Description:  "Codes representing the specific dialect used in a description for a concept. The value set includes all codes from the SNOMED CT descending from 900000000000506000 Language type reference set."
* insert SNOMEDCopyrightForVS
* ^experimental = false
* include codes from system SCT where concept descendant-of #900000000000506000 "Language type reference set"
//* exclude SCT#900000000000506000 "Language type reference set"


---

